// 设置弹窗。
//
// ## 它照着谁
//
// 上游 Imagora 把「配置」拆成两个弹窗，并在 ProviderModal 的注释里写明理由：
//
//   与「生图 API 配置」弹窗的分工：那个是**选择器**（在已有来源里选），这个是
//   **添加器**（造一个新来源）。合成一个弹窗会让「保存」同时意味着「改值」和
//   「建条目」，两种心智模型混在一个按钮上迟早误操作，所以宁可多一个入口。
//
// 上游 `docs/config-editor-ui-design.md` 第 9 节「明确不做的事」还逐条否掉了
// 「编辑接口地址 / 路径 / 密钥」「清空密钥」「重置为默认」——理由是那些属于
// 「定义性内容」，写一次就不动，文本编辑器能 diff / 注释 / 回滚，界面里做只是
// 复刻一个更差的文本框。
//
// ## 插件为什么不能完全照做
//
// 插件没有用户可编辑的 `config.json` / `.env`：它的配置落在
// `~/.dsh/imagora/settings.json`，是给非技术用户「下载后填 key 即可用」的。所以
// 「写」的那半**必须**留在界面里——这是数据模型不同导致的必要偏差，不是抄漏。
//
// ## 本轮改了什么（原来是六个平铺的块，14 个可点元素、4 个写着「保存」）
//
// 1. **一次提交**：目录、预算这两块原先各自带「保存手填路径 / 保存上限 / 取消上限 /
//    不共享 / 跟随 Imagora 目录」，点了立刻写盘；而两个下拉要等 footer 才能提交。
//    同一屏两套提交语义 = 用户不知道该按哪个。现在**全部走草稿 + footer 一次提交**，
//    只保留「测试连通」一个即时动作（它是只读探测，本来就不该攒着）。
// 2. **两列栅格**：字段改成「左 label / 右控件」，原先七个字段全是竖排，
//    内容高 1080px 而可视区只有 622px，目录与预算得滚 458px 才看得见。
// 3. **层级**：组标题 13px/600/主文字色，字段 label 12px/500/二级色。
//    原先两者字号字重颜色完全相同（只有 margin 差 3px），分隔线不表达层级。
// 4. **两个真 bug**（见 save() 与 model 初值处）。
//
// ## 显示层
//
// 弹窗内容挂在宿主的 portal 里，不在 `.im-root` 子树内，所以 `--im-*` 一律在 `body`
// 上定义（styles.ts 顶部），两边共用一套；这里不写固定色值。
import { useState } from 'react'
import {
  probeProvider,
  revealPath,
  saveProvider,
  setBudget,
  setImagoraRoot,
  setModel,
  setOutputDir,
  setProfile,
  type ImagoraConfig,
} from '../api'
import { errMessage } from '../lib/format'
import { Icon } from '../icons'
import { Select } from '../select'
import { ModalShell } from './modal-shell'
import { pickFolderOrNull } from './folder-pick'
import { useT } from '../i18n'

export interface SettingsDialogProps {
  config: ImagoraConfig | null
  onClose: () => void
  onSaved: (next: ImagoraConfig) => void
  onFlash: (line: string) => void
}

/** 一个字段：左 label、右控件、控件下方至多一行提示。
 *
 * 为什么要有这个壳（上游 `components/Field.tsx` 的同一动机，注释原话）：
 * 「此前每个弹窗各自手写一遍 label + hint + error，且 hint 与 error 常常同时渲染成
 * 两行，把弹窗垂直空间吃掉一截。」插件这边更糟——七个字段全竖排，一次吃掉 458px。
 *
 * `action`（选择… / 测试连通 / 打开）**放在控件那一行**，不进 label 列：
 * label 列只有 9.5rem，把「API Key」和一颗按钮塞进去会把标签挤成两行，
 * 顺带把整行高度撑高 —— 实测过一版就是这样。 */
function Field({
  id,
  label,
  hint,
  action,
  children,
}: {
  id: string
  label: string
  hint?: string | undefined
  action?: React.ReactNode
  children: React.ReactNode
}) {
  const messageId = `${id}-message`
  return (
    <div className="im-field-row">
      <label className="im-field-label" htmlFor={id}>
        {label}
      </label>
      <div className="im-field-main">
        <div className="im-field-control">
          {children}
          {action}
        </div>
        {hint ? (
          <p className="im-field-hint" id={messageId}>
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  )
}

/** 弹窗里用的草稿：全部字符串。
 *
 * 预算刻意存字符串而不是 number —— 见 `budget` 字段注释；其余字段从「当前生效值」
 * 起步，改没改由 `dirty` 逐项比对，不维护第二份「脏标记」。
 */
interface Draft {
  source: string
  model: string
  baseUrl: string
  apiKey: string
  imagoraRoot: string
  outputDir: string
  budget: string
}

export function SettingsDialog({ config, onClose, onSaved, onFlash }: SettingsDialogProps) {
  const t = useT()
  const provider = config?.provider
  const usingPlugin = config?.source === 'plugin'
  const activeProfile = usingPlugin ? 'plugin' : (config?.profile ?? '')

  /** 当前生效的模型名。**插件内配置**时它也同时是 provider.model 的初值。
   *
   * ⚠️ 这里必须是 `||` 不是 `??`：host 的 `providerView()` 在没配 provider 时给的是
   * **空串**（`src/host/config.js` 里 `model: provider.model || String(settings?.model || '')`），
   * 而空串不是 null/undefined，`??` 不会回退 —— 结果下拉显示「请选择」，正下方
   * 「生效中」却写着 GPT Image 2.5 Flare，同一屏两个控件对同一件事给出相反答案。
   * 维护者报的「看不懂」有一半来自这一处。 */
  const effectiveModel = provider?.model || config?.model || ''
  const currentBudget = Number(config?.budget ?? 0)

  const [draft, setDraft] = useState<Draft>({
    source: activeProfile || 'plugin',
    model: effectiveModel,
    baseUrl: provider?.baseUrl ?? '',
    apiKey: '',
    imagoraRoot: config?.imagoraRoot ?? '',
    outputDir: config?.outputDirOverride ?? '',
    budget: currentBudget ? String(currentBudget) : '',
  })
  const [busy, setBusy] = useState(false)
  const [justSaved, setJustSaved] = useState(false)
  const [probeResult, setProbeResult] = useState<string | null>(null)
  const [probeModels, setProbeModels] = useState<string[]>([])
  const [confirmReset, setConfirmReset] = useState(false)

  const patch = (next: Partial<Draft>) => setDraft(current => ({ ...current, ...next }))

  const profiles = config?.profiles ?? []
  const isPluginDraft = draft.source === 'plugin'
  /** 是否展示「接口地址 / API Key」这组字段。
   *
   *  仅在确实可能生效时展示：草稿选了插件内配置，或已经配过地址（说明正在用它）。
   *  当前来源是 Imagora 且从没配过 provider 时，填了也不会生效 —— 收起，改由一行
   *  提示告诉用户「要改就先把来源切到插件内配置」。 */
  const showProviderFields = isPluginDraft || Boolean(provider?.baseUrl)
  const profileOptions = [
    // 「插件内配置」永远可选：它是本插件自己的那一层，填好地址与密钥就接管
    { value: 'plugin', label: t('settings.profile.plugin') },
    ...profiles.map(row => ({ value: row.name, label: row.label || row.name })),
  ]
  /** 草稿选的是 imagora 来源，但插件内接口正压着它 —— 保存也不会生效，得先说清楚 */
  const blockedByProvider = usingPlugin && !isPluginDraft

  /** 模型清单：插件内配置时上游一般不报模型，允许自由输入 */
  const modelOptions = isPluginDraft
    ? draft.model
      ? [{ value: draft.model, label: draft.model }]
      : []
    : (config?.models ?? []).map(row => ({ value: row.id, label: row.label || row.id }))

  /** 预算草稿 → 数字。空串 / 非法一律按 0（= 不设上限），与 host 的语义一致。 */
  const budgetValue = (() => {
    const parsed = Number(draft.budget.trim())
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
  })()

  const dirty = {
    source: draft.source !== (activeProfile || 'plugin'),
    // 空串 = 「用该来源自己的默认模型」，不算改动（切来源后就是这个状态）
    model: draft.model.trim() !== '' && draft.model.trim() !== effectiveModel,
    baseUrl: draft.baseUrl.trim() !== (provider?.baseUrl ?? ''),
    apiKey: draft.apiKey.trim() !== '',
    imagoraRoot: draft.imagoraRoot.trim() !== (config?.imagoraRoot ?? ''),
    outputDir: draft.outputDir.trim() !== (config?.outputDirOverride ?? ''),
    budget: budgetValue !== currentBudget,
  }
  const hasChanges = Object.values(dirty).some(Boolean)

  /** 上游 `docs/config-editor-ui-design.md` 第 4 节：切来源时不能让「新来源 + 旧模型 id」
   *  这个无效组合落盘 —— 那是该来源根本不认识的模型。
   *
   *  上游的做法是「把模型一起带到该来源的默认值」，但它有 `/api/config` 的
   *  `providers[]`（**全部** profile 的归一化目录）。插件这边 `config.models` 只有
   *  **当前生效来源**的清单，拿不到别的来源的默认模型 —— 所以照抄不了。
   *
   *  如实做法：切换来源时**清空模型草稿**，保存时不提交模型，让 host 用选中来源
   *  自己的 `default_model` / `MODEL_<PROFILE>`。结果同样是「不会留下无效组合」，
   *  只是「默认值」由 host 解析而不是前端猜。 */
  const pickProfile = (value: string) => {
    patch({ source: value, model: '' })
  }

  const probe = async () => {
    setBusy(true)
    setProbeResult(null)
    try {
      const result = await probeProvider({ baseUrl: draft.baseUrl.trim(), apiKey: draft.apiKey.trim() })
      setProbeModels(result.models ?? [])
      setProbeResult(
        result.models?.length ? t('settings.probe.ok', { count: result.models.length }) : t('settings.probe.okNoList'),
      )
    } catch (error) {
      setProbeModels([])
      setProbeResult(t('settings.probe.fail', { reason: errMessage(error) }))
    } finally {
      setBusy(false)
    }
  }

  const chooseFolder = async (kind: 'root' | 'output') => {
    setBusy(true)
    try {
      const picked = await pickFolderOrNull(
        t,
        {
          title: kind === 'root' ? t('settings.pick.root') : t('settings.pick.output'),
          startAt:
            kind === 'root' ? draft.imagoraRoot.trim() : draft.outputDir.trim() || config?.defaultOutputDir || '',
        },
        onFlash,
      )
      // 取消 / 不可用都已由助手处理完（取消静默、失败已提示），这里只管成功那一支
      if (!picked) return
      patch(kind === 'root' ? { imagoraRoot: picked } : { outputDir: picked })
    } finally {
      setBusy(false)
    }
  }

  /** 一次提交全部改动。
   *
   * 顺序有讲究：**先切来源再切模型** —— 模型覆盖键挂在选中的来源下，反着写会留下
   * 「新来源 + 旧模型」的无效组合（上游 docs/config-editor-ui-design.md 2.3 节
   * 专门锁过这条，它那边用 `tests/test_server_config_profile.py` 兜）。
   *
   * ⚠️ 这里修掉了第二个真 bug：原来 `save()` **完全没有**提交模型的路径 ——
   * 它只在「选的是 imagora 的 profile 且与当前不同」时调 setProfile，模型改动
   * 只活在 state 里，保存按钮还因为 canSave 不含模型项而一直是灰的。
   * 表现就是「切了默认模型，按保存，什么都不会发生」。 */
  const save = async () => {
    setBusy(true)
    try {
      let next: ImagoraConfig | null = null

      // 1) 来源与模型（imagora 层）：空 profile 表示「跟随 .env」，host 侧接受空串
      if (!blockedByProvider && !isPluginDraft && dirty.source) {
        next = await setProfile(draft.source)
      }
      if (!blockedByProvider && !isPluginDraft && dirty.model && draft.model.trim()) {
        next = await setModel(draft.model.trim())
      }

      // 2) 插件内接口：模型也归它管（插件内配置时上游不报模型清单，只能手填）。
      //    三个字段任一有值才写 —— 空串在 host 侧表示「不修改」。
      const useProvider = isPluginDraft || Boolean(draft.baseUrl.trim()) || Boolean(draft.apiKey.trim())
      const providerChanged =
        dirty.baseUrl || dirty.apiKey || (isPluginDraft && draft.model.trim() !== '' && dirty.model)
      if (useProvider && providerChanged) {
        next = await saveProvider({
          baseUrl: draft.baseUrl.trim(),
          model: draft.model.trim(),
          apiKey: draft.apiKey.trim(),
        })
      }

      // 3) 目录：空串 = 不共享 / 跟随上面那个 Imagora 目录
      if (dirty.imagoraRoot) next = await setImagoraRoot(draft.imagoraRoot.trim())
      if (dirty.outputDir) next = await setOutputDir(draft.outputDir.trim())

      // 4) 预算：0 = 不设上限
      if (dirty.budget) next = await setBudget(budgetValue)

      if (next) onSaved(next)
      setDraft(current => ({ ...current, apiKey: '', budget: budgetValue ? String(budgetValue) : '' }))
      // 上游的「保存后不关窗」：与文本编辑器 Ctrl+S 同构，保存是可重复的中间动作。
      // 关窗会让「改一处、看一眼、再改一处」变成三次开关弹窗。
      setJustSaved(true)
      window.setTimeout(() => setJustSaved(false), 2000)
      onFlash(t('settings.save.done'))
    } catch (error) {
      onFlash(t('settings.save.failed', { reason: errMessage(error) }))
    } finally {
      setBusy(false)
    }
  }

  /** 清空插件内配置：不可逆且会立刻改变生效来源，所以走二次确认，且放在卡片内
   *  而不是 footer —— footer 那个位置紧挨「取消」，顺手点到就没了。 */
  const reset = async () => {
    setBusy(true)
    try {
      const next = await saveProvider({ reset: true })
      onSaved(next)
      setConfirmReset(false)
      onFlash(t('settings.reset.done'))
    } catch (error) {
      onFlash(t('settings.reset.failed', { reason: errMessage(error) }))
    } finally {
      setBusy(false)
    }
  }

  const sourceLabel = usingPlugin ? t('settings.profile.plugin') : config?.profileLabel || config?.profile || '—'
  const keyLabel = provider?.apiKeyConfigured ? t('settings.keyConfigured') : t('settings.keyMissing')

  return (
    <ModalShell
      title={t('settings.title')}
      subtitle={t('settings.subtitle')}
      size="lg"
      onClose={onClose}
      footer={
        <>
          <p className="im-modal-note">
            {justSaved
              ? t('settings.status.saved')
              : hasChanges
                ? t('settings.status.dirty')
                : t('settings.status.clean')}
          </p>
          <button type="button" className="im-btn-ghost im-btn-sm" disabled={busy} onClick={onClose}>
            {t('common.cancel')}
          </button>
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={busy || !hasChanges}
            onClick={() => void save()}
          >
            {busy ? t('common.saving') : justSaved ? t('settings.status.savedTick') : t('common.save')}
          </button>
        </>
      }
    >
      <div className="im-settings">
        {/* 生效中：一行事实，不是三行表。它回答「现在实际在用什么」，
            只在保存后才变；做成输入框会让人以为能在那儿改。 */}
        <p className="im-settings-status">
          {t('settings.status')} <b>{sourceLabel}</b> · {config?.modelLabel || config?.model || '—'} · {keyLabel}
          {blockedByProvider ? (
            <span className="im-chip is-brand im-settings-chip">{t('settings.status.takenOver')}</span>
          ) : null}
        </p>

        {/* ---------- 一、用哪套接口 ---------- */}
        <section className="im-settings-group">
          <h3 className="im-settings-group-title">{t('settings.group.endpoint')}</h3>

          <Field
            id="imagora-profile"
            label={t('settings.profile.label')}
            hint={isPluginDraft ? t('settings.profile.hint.plugin') : t('settings.profile.hint.imagora')}
          >
            <Select
              id="imagora-profile"
              className="is-block"
              options={profileOptions}
              value={draft.source}
              searchable="auto"
              onChange={pickProfile}
              title={t('settings.profile.title')}
            />
          </Field>

          <Field
            id="imagora-model-select"
            label={t('settings.model.label')}
            hint={isPluginDraft ? t('settings.model.hint.plugin') : t('settings.model.hint.imagora')}
          >
            <Select
              id="imagora-model-select"
              className="is-block"
              options={modelOptions}
              value={draft.model}
              searchable
              allowCustom
              emptyLabel={t('settings.model.empty')}
              onChange={value => patch({ model: value })}
              onCreateCustom={value => patch({ model: value })}
              title={t('settings.model.title')}
            />
          </Field>

          {/* 插件内接口：只在真的会用到时出现。
           *
           * 判据是「来源选了插件内配置」或「已经配过地址」—— 若当前来源是 Imagora，
           * 这两个字段填了也**不会生效**（`config.source` 由 host 的 provider 优先级决定），
           * 一直摆着等于在任何来源下都问一遍「你要不要覆盖」。
           *
           * 这也是让整屏进得了可视区的关键一步：收起这组省约 150px，否则
           * 「花钱上限」永远在折叠线以下（内容 761px / 可视 622px）。
           * 与上游的 progressive disclosure 同一取向：复杂的、少用的选项后置。 */}
          {showProviderFields ? (
            <>
              <Field
                id="imagora-provider-base-url"
                label={t('settings.baseUrl.label')}
                hint={t('settings.baseUrl.hint')}
              >
                <input
                  id="imagora-provider-base-url"
                  className="im-field"
                  value={draft.baseUrl}
                  placeholder="https://api.example.com/v1"
                  disabled={busy}
                  title={t('settings.baseUrl.title')}
                  onChange={event => patch({ baseUrl: event.target.value })}
                />
              </Field>

              <Field
                id="imagora-provider-api-key"
                label={t('settings.apiKey.label')}
                hint={
                  provider?.apiKeyConfigured ? t('settings.apiKey.hint.configured') : t('settings.apiKey.hint.plain')
                }
                action={
                  <button
                    type="button"
                    className="im-btn-ghost im-btn-sm"
                    disabled={busy || !draft.baseUrl.trim()}
                    onClick={() => void probe()}
                    title={draft.baseUrl.trim() ? t('settings.probe.title.ready') : t('settings.probe.title.needUrl')}
                  >
                    {t('settings.probe.run')}
                  </button>
                }
              >
                <input
                  id="imagora-provider-api-key"
                  className="im-field"
                  type="password"
                  value={draft.apiKey}
                  autoComplete="off"
                  placeholder={
                    provider?.apiKeyConfigured
                      ? t('settings.apiKey.placeholder.keep')
                      : t('settings.apiKey.placeholder.paste')
                  }
                  disabled={busy}
                  onChange={event => patch({ apiKey: event.target.value })}
                />
              </Field>
            </>
          ) : (
            <p className="im-settings-hint-line">{t('settings.inheritHint')}</p>
          )}

          {probeResult ? (
            <p className="im-field-hint im-settings-probe" role="status">
              {probeResult}
            </p>
          ) : null}
          {probeModels.length ? (
            <div className="im-settings-chips">
              {probeModels.slice(0, 24).map(id => (
                <button
                  key={id}
                  type="button"
                  className={`im-chip im-chip--action${id === draft.model ? ' is-brand' : ''}`}
                  onClick={() => patch({ model: id })}
                >
                  {id}
                </button>
              ))}
              {probeModels.length > 24 ? (
                <span className="im-muted">{t('settings.probe.more', { count: probeModels.length - 24 })}</span>
              ) : null}
            </div>
          ) : null}

          {usingPlugin ? (
            confirmReset ? (
              <div className="im-settings-danger">
                <p className="im-settings-danger-text">{t('settings.reset.confirm')}</p>
                <div className="im-settings-danger-actions">
                  <button type="button" className="im-btn-ghost im-btn-sm" onClick={() => setConfirmReset(false)}>
                    {t('common.cancel')}
                  </button>
                  <button
                    type="button"
                    className="im-btn-danger im-btn-sm"
                    disabled={busy}
                    onClick={() => void reset()}
                  >
                    {t('settings.reset.confirmAction')}
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="im-settings-danger-link"
                disabled={busy}
                onClick={() => setConfirmReset(true)}
              >
                {t('settings.reset.link')}
              </button>
            )
          ) : null}
        </section>

        {/* ---------- 二、文件落在哪 ---------- */}
        <section className="im-settings-group">
          <h3 className="im-settings-group-title">{t('settings.group.files')}</h3>

          <Field
            id="imagora-root"
            label={t('settings.root.label')}
            hint={t('settings.root.hint')}
            action={
              <button
                type="button"
                className="im-btn-ghost im-btn-sm"
                disabled={busy}
                onClick={() => void chooseFolder('root')}
              >
                {t('common.chooseFolder')}
              </button>
            }
          >
            <input
              id="imagora-root"
              className="im-field"
              value={draft.imagoraRoot}
              placeholder={t('settings.root.placeholder')}
              disabled={busy}
              onChange={event => patch({ imagoraRoot: event.target.value })}
            />
          </Field>

          <Field
            id="imagora-output-override"
            label={t('settings.outputDir.label')}
            hint={t('settings.outputDir.hint', { dir: config?.defaultOutputDir || t('common.notSet') })}
            action={
              <>
                <button
                  type="button"
                  className="im-btn-ghost im-btn-sm"
                  disabled={busy}
                  onClick={() => void chooseFolder('output')}
                >
                  {t('common.chooseFolder')}
                </button>
                {/* 「打开」从第二个文字按钮改成**图标按钮**：一行里并排两个文字按钮，
                    主次与含义都不清楚（维护者原话「有些又有两个按钮，我也不清楚」）。
                    留下这一枚图标仍能被发现 —— 它有 aria-label 与 title，且图标本身就是
                    文件夹。动词交给 hover 文案，不占版面。 */}
                <button
                  type="button"
                  className="im-btn-ghost im-icon-btn"
                  disabled={busy || !config?.defaultOutputDir}
                  title={t('settings.reveal')}
                  aria-label={t('settings.reveal')}
                  onClick={() => void revealPath(config?.defaultOutputDir ?? '')}
                >
                  <Icon name="folder" size={14} />
                </button>
              </>
            }
          >
            <input
              id="imagora-output-override"
              className="im-field"
              value={draft.outputDir}
              placeholder={t('settings.outputDir.placeholder')}
              disabled={busy}
              onChange={event => patch({ outputDir: event.target.value })}
            />
          </Field>
        </section>

        {/* ---------- 三、花钱上限 ---------- */}
        <section className="im-settings-group">
          <h3 className="im-settings-group-title">{t('settings.group.budget')}</h3>
          <Field id="imagora-budget" label={t('settings.budget.label')} hint={t('settings.budget.hint')}>
            <input
              id="imagora-budget"
              className="im-field"
              inputMode="decimal"
              value={draft.budget}
              placeholder={t('settings.budget.placeholder')}
              disabled={busy}
              onChange={event => patch({ budget: event.target.value })}
            />
          </Field>
        </section>
      </div>
    </ModalShell>
  )
}
