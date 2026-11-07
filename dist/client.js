window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var pp=Object.create;var go=Object.defineProperty;var mp=Object.getOwnPropertyDescriptor;var gp=Object.getOwnPropertyNames;var hp=Object.getPrototypeOf,bp=Object.prototype.hasOwnProperty;var yp=(e,t)=>()=>(e&&(t=e(e=0)),t);var ho=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ls=(e,t)=>{for(var n in t)go(e,n,{get:t[n],enumerable:!0})},Hs=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of gp(t))!bp.call(e,r)&&r!==n&&go(e,r,{get:()=>t[r],enumerable:!(o=mp(t,r))||o.enumerable});return e};var Bs=(e,t,n)=>(n=e!=null?pp(hp(e)):{},Hs(t||!e||!e.__esModule?go(n,"default",{value:e,enumerable:!0}):n,e)),xp=e=>Hs(go({},"__esModule",{value:!0}),e);var Tl=ho(Ol=>{"use strict";var Rn=require("react");function A0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O0=typeof Object.is=="function"?Object.is:A0,T0=Rn.useState,$0=Rn.useEffect,L0=Rn.useLayoutEffect,H0=Rn.useDebugValue;function B0(e,t){var n=t(),o=T0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return L0(function(){r.value=n,r.getSnapshot=t,qi(r)&&i({inst:r})},[e,n,t]),$0(function(){return qi(r)&&i({inst:r}),e(function(){qi(r)&&i({inst:r})})},[e]),H0(n),n}function qi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!O0(e,n)}catch{return!0}}function W0(e,t){return t()}var F0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?W0:B0;Ol.useSyncExternalStore=Rn.useSyncExternalStore!==void 0?Rn.useSyncExternalStore:F0});var Ll=ho((_v,$l)=>{"use strict";$l.exports=Tl()});var Bl=ho(Hl=>{"use strict";var or=require("react"),V0=Ll();function G0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var X0=typeof Object.is=="function"?Object.is:G0,Y0=V0.useSyncExternalStore,q0=or.useRef,U0=or.useEffect,Z0=or.useMemo,K0=or.useDebugValue;Hl.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=q0(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=Z0(function(){function c(p){if(!l){if(l=!0,u=p,p=o(p),r!==void 0&&s.hasValue){var m=s.value;if(r(m,p))return d=m}return d=p}if(m=d,X0(u,p))return m;var y=o(p);return r!==void 0&&r(m,y)?(u=p,m):(u=p,d=y)}var l=!1,u,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var a=Y0(e,i[0],i[1]);return U0(function(){s.hasValue=!0,s.value=a},[a]),K0(a),a}});var Fl=ho((Nv,Wl)=>{"use strict";Wl.exports=Bl()});var hf={};Ls(hf,{primitives:()=>Es});function mw(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Es(){if(Sr)return Sr;let e=require(gf),t=mw(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${gf}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Sr=t,Sr}var gf,Sr,Ns=yp(()=>{"use strict";gf="@deepseek-ai/dsh-client-ui-primitives",Sr=null});var ww={};Ls(ww,{apply:()=>xw,inject:()=>bw});module.exports=xp(ww);var oe=require("react");var $=require("react/jsx-runtime"),T=require("react");function ve(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=ve(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var wp={value:()=>{}};function Gt(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new bo(n)}function bo(e){this._=e}function vp(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}bo.prototype=Gt.prototype={constructor:bo,on:function(e,t){var n=this._,o=vp(e+"",n),r,i=-1,s=o.length;if(arguments.length<2){for(;++i<s;)if((r=(e=o[i]).type)&&(r=kp(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<s;)if(r=(e=o[i]).type)n[r]=Ws(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Ws(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new bo(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function kp(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Ws(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=wp,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var $r="http://www.w3.org/1999/xhtml",Fs={svg:"http://www.w3.org/2000/svg",xhtml:$r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function $n(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Fs.hasOwnProperty(t)?{space:Fs[t],local:e}:e}function Sp(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===$r&&t.documentElement.namespaceURI===$r?t.createElement(e):t.createElementNS(n,e)}}function Cp(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Vs(e){var t=$n(e);return(t.local?Cp:Sp)(t)}function _p(){}function xo(e){return e==null?_p:function(){return this.querySelector(e)}}function Ep(e){typeof e!="function"&&(e=xo(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=new Array(s),c,l,u=0;u<s;++u)(c=i[u])&&(l=e.call(c,c.__data__,u,i))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new Ue(o,this._parents)}function Np(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Mp(){return[]}function Hr(e){return e==null?Mp:function(){return this.querySelectorAll(e)}}function Ip(e){return function(){return Np(e.apply(this,arguments))}}function Pp(e){typeof e=="function"?e=Ip(e):e=Hr(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var s=t[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&(o.push(e.call(c,c.__data__,l,s)),r.push(c));return new Ue(o,r)}function Br(e){return function(){return this.matches(e)}}function Gs(e){return function(t){return t.matches(e)}}var zp=Array.prototype.find;function Rp(e){return function(){return zp.call(this.children,e)}}function Dp(){return this.firstElementChild}function Ap(e){return this.select(e==null?Dp:Rp(typeof e=="function"?e:Gs(e)))}var Op=Array.prototype.filter;function Tp(){return Array.from(this.children)}function $p(e){return function(){return Op.call(this.children,e)}}function Lp(e){return this.selectAll(e==null?Tp:$p(typeof e=="function"?e:Gs(e)))}function Hp(e){typeof e!="function"&&(e=Br(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new Ue(o,this._parents)}function Xs(e){return new Array(e.length)}function Bp(){return new Ue(this._enter||this._groups.map(Xs),this._parents)}function yo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}yo.prototype={constructor:yo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Wp(e){return function(){return e}}function Fp(e,t,n,o,r,i){for(var s=0,a,c=t.length,l=i.length;s<l;++s)(a=t[s])?(a.__data__=i[s],o[s]=a):n[s]=new yo(e,i[s]);for(;s<c;++s)(a=t[s])&&(r[s]=a)}function Vp(e,t,n,o,r,i,s){var a,c,l=new Map,u=t.length,d=i.length,f=new Array(u),p;for(a=0;a<u;++a)(c=t[a])&&(f[a]=p=s.call(c,c.__data__,a,t)+"",l.has(p)?r[a]=c:l.set(p,c));for(a=0;a<d;++a)p=s.call(e,i[a],a,i)+"",(c=l.get(p))?(o[a]=c,c.__data__=i[a],l.delete(p)):n[a]=new yo(e,i[a]);for(a=0;a<u;++a)(c=t[a])&&l.get(f[a])===c&&(r[a]=c)}function Gp(e){return e.__data__}function Xp(e,t){if(!arguments.length)return Array.from(this,Gp);var n=t?Vp:Fp,o=this._parents,r=this._groups;typeof e!="function"&&(e=Wp(e));for(var i=r.length,s=new Array(i),a=new Array(i),c=new Array(i),l=0;l<i;++l){var u=o[l],d=r[l],f=d.length,p=Yp(e.call(u,u&&u.__data__,l,o)),m=p.length,y=a[l]=new Array(m),b=s[l]=new Array(m),g=c[l]=new Array(f);n(u,d,y,b,g,p,t);for(var k=0,h=0,v,x;k<m;++k)if(v=y[k]){for(k>=h&&(h=k+1);!(x=b[h])&&++h<m;);v._next=x||null}}return s=new Ue(s,o),s._enter=a,s._exit=c,s}function Yp(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function qp(){return new Ue(this._exit||this._groups.map(Xs),this._parents)}function Up(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function Zp(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,s=Math.min(r,i),a=new Array(r),c=0;c<s;++c)for(var l=n[c],u=o[c],d=l.length,f=a[c]=new Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<r;++c)a[c]=n[c];return new Ue(a,this._parents)}function Kp(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],s;--r>=0;)(s=o[r])&&(i&&s.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(s,i),i=s);return this}function jp(e){e||(e=Qp);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var s=n[i],a=s.length,c=r[i]=new Array(a),l,u=0;u<a;++u)(l=s[u])&&(c[u]=l);c.sort(t)}return new Ue(r,this._parents).order()}function Qp(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Jp(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function em(){return Array.from(this)}function tm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var s=o[r];if(s)return s}return null}function nm(){let e=0;for(let t of this)++e;return e}function om(){return!this.node()}function rm(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,s=r.length,a;i<s;++i)(a=r[i])&&e.call(a,a.__data__,i,r);return this}function im(e){return function(){this.removeAttribute(e)}}function sm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function am(e,t){return function(){this.setAttribute(e,t)}}function lm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function cm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function um(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function dm(e,t){var n=$n(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?sm:im:typeof t=="function"?n.local?um:cm:n.local?lm:am)(n,t))}function Ys(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function fm(e){return function(){this.style.removeProperty(e)}}function pm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function mm(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function gm(e,t,n){return arguments.length>1?this.each((t==null?fm:typeof t=="function"?mm:pm)(e,t,n??"")):Xt(this.node(),e)}function Xt(e,t){return e.style.getPropertyValue(t)||Ys(e).getComputedStyle(e,null).getPropertyValue(t)}function hm(e){return function(){delete this[e]}}function bm(e,t){return function(){this[e]=t}}function ym(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function xm(e,t){return arguments.length>1?this.each((t==null?hm:typeof t=="function"?ym:bm)(e,t)):this.node()[e]}function qs(e){return e.trim().split(/^|\s+/)}function Wr(e){return e.classList||new Us(e)}function Us(e){this._node=e,this._names=qs(e.getAttribute("class")||"")}Us.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Zs(e,t){for(var n=Wr(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function Ks(e,t){for(var n=Wr(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function wm(e){return function(){Zs(this,e)}}function vm(e){return function(){Ks(this,e)}}function km(e,t){return function(){(t.apply(this,arguments)?Zs:Ks)(this,e)}}function Sm(e,t){var n=qs(e+"");if(arguments.length<2){for(var o=Wr(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?km:t?wm:vm)(n,t))}function Cm(){this.textContent=""}function _m(e){return function(){this.textContent=e}}function Em(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Nm(e){return arguments.length?this.each(e==null?Cm:(typeof e=="function"?Em:_m)(e)):this.node().textContent}function Mm(){this.innerHTML=""}function Im(e){return function(){this.innerHTML=e}}function Pm(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function zm(e){return arguments.length?this.each(e==null?Mm:(typeof e=="function"?Pm:Im)(e)):this.node().innerHTML}function Rm(){this.nextSibling&&this.parentNode.appendChild(this)}function Dm(){return this.each(Rm)}function Am(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Om(){return this.each(Am)}function Tm(e){var t=typeof e=="function"?e:Vs(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function $m(){return null}function Lm(e,t){var n=typeof e=="function"?e:Vs(e),o=t==null?$m:typeof t=="function"?t:xo(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Hm(){var e=this.parentNode;e&&e.removeChild(this)}function Bm(){return this.each(Hm)}function Wm(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Fm(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Vm(e){return this.select(e?Fm:Wm)}function Gm(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Xm(e){return function(t){e.call(this,t,this.__data__)}}function Ym(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function qm(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function Um(e,t,n){return function(){var o=this.__on,r,i=Xm(t);if(o){for(var s=0,a=o.length;s<a;++s)if((r=o[s]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function Zm(e,t,n){var o=Ym(e+""),r,i=o.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(r=0,u=a[c];r<i;++r)if((s=o[r]).type===u.type&&s.name===u.name)return u.value}return}for(a=t?Um:qm,r=0;r<i;++r)this.each(a(o[r],t,n));return this}function js(e,t,n){var o=Ys(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Km(e,t){return function(){return js(this,e,t)}}function jm(e,t){return function(){return js(this,e,t.apply(this,arguments))}}function Qm(e,t){return this.each((typeof t=="function"?jm:Km)(e,t))}function*Jm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,s;r<i;++r)(s=o[r])&&(yield s)}var Qs=[null];function Ue(e,t){this._groups=e,this._parents=t}function Yt(){return new Ue([[document.documentElement]],Qs)}function eg(){return this}Ue.prototype=Yt.prototype={constructor:Ue,select:Ep,selectAll:Pp,selectChild:Ap,selectChildren:Lp,filter:Hp,data:Xp,enter:Bp,exit:qp,join:Up,merge:Zp,selection:eg,order:Kp,sort:jp,call:Jp,nodes:em,node:tm,size:nm,empty:om,each:rm,attr:dm,style:gm,property:xm,classed:Sm,text:Nm,html:zm,raise:Dm,lower:Om,append:Tm,insert:Lm,remove:Bm,clone:Vm,datum:Gm,on:Zm,dispatch:Qm,[Symbol.iterator]:Jm};function Te(e){return typeof e=="string"?new Ue([[document.querySelector(e)]],[document.documentElement]):new Ue([[e]],Qs)}var tg=0;function ng(){return new Lr}function Lr(){this._="@"+(++tg).toString(36)}Lr.prototype=ng.prototype={constructor:Lr,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function og(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ve(e,t){if(e=og(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var rg={passive:!1},Ln={capture:!0,passive:!1};function Fr(e){e.stopImmediatePropagation()}function mn(e){e.preventDefault(),e.stopImmediatePropagation()}function Gr(e){var t=e.document.documentElement,n=Te(e).on("dragstart.drag",mn,Ln);"onselectstart"in t?n.on("selectstart.drag",mn,Ln):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Xr(e,t){var n=e.document.documentElement,o=Te(e).on("dragstart.drag",null);t&&(o.on("click.drag",mn,Ln),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var wo=e=>()=>e;function Vr(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:s,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}Vr.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function ig(e){return!e.ctrlKey&&!e.button}function sg(){return this.parentNode}function ag(e,t){return t??{x:e.x,y:e.y}}function lg(){return navigator.maxTouchPoints||"ontouchstart"in this}function Yr(){var e=ig,t=sg,n=ag,o=lg,r={},i=Gt("start","drag","end"),s=0,a,c,l,u,d=0;function f(v){v.on("mousedown.drag",p).filter(o).on("touchstart.drag",b).on("touchmove.drag",g,rg).on("touchend.drag touchcancel.drag",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(v,x){if(!(u||!e.call(this,v,x))){var S=h(this,t.call(this,v,x),v,x,"mouse");S&&(Te(v.view).on("mousemove.drag",m,Ln).on("mouseup.drag",y,Ln),Gr(v.view),Fr(v),l=!1,a=v.clientX,c=v.clientY,S("start",v))}}function m(v){if(mn(v),!l){var x=v.clientX-a,S=v.clientY-c;l=x*x+S*S>d}r.mouse("drag",v)}function y(v){Te(v.view).on("mousemove.drag mouseup.drag",null),Xr(v.view,l),mn(v),r.mouse("end",v)}function b(v,x){if(e.call(this,v,x)){var S=v.changedTouches,C=t.call(this,v,x),N=S.length,P,W;for(P=0;P<N;++P)(W=h(this,C,v,x,S[P].identifier,S[P]))&&(Fr(v),W("start",v,S[P]))}}function g(v){var x=v.changedTouches,S=x.length,C,N;for(C=0;C<S;++C)(N=r[x[C].identifier])&&(mn(v),N("drag",v,x[C]))}function k(v){var x=v.changedTouches,S=x.length,C,N;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),C=0;C<S;++C)(N=r[x[C].identifier])&&(Fr(v),N("end",v,x[C]))}function h(v,x,S,C,N,P){var W=i.copy(),I=Ve(P||S,x),L,E,w;if((w=n.call(v,new Vr("beforestart",{sourceEvent:S,target:f,identifier:N,active:s,x:I[0],y:I[1],dx:0,dy:0,dispatch:W}),C))!=null)return L=w.x-I[0]||0,E=w.y-I[1]||0,function M(_,z,D){var O=I,V;switch(_){case"start":r[N]=M,V=s++;break;case"end":delete r[N],--s;case"drag":I=Ve(D||z,x),V=s;break}W.call(_,v,new Vr(_,{sourceEvent:z,subject:w,target:f,identifier:N,active:V,x:I[0]+L,y:I[1]+E,dx:I[0]-O[0],dy:I[1]-O[1],dispatch:W}),C)}}return f.filter=function(v){return arguments.length?(e=typeof v=="function"?v:wo(!!v),f):e},f.container=function(v){return arguments.length?(t=typeof v=="function"?v:wo(v),f):t},f.subject=function(v){return arguments.length?(n=typeof v=="function"?v:wo(v),f):n},f.touchable=function(v){return arguments.length?(o=typeof v=="function"?v:wo(!!v),f):o},f.on=function(){var v=i.on.apply(i,arguments);return v===i?f:v},f.clickDistance=function(v){return arguments.length?(d=(v=+v)*v,f):Math.sqrt(d)},f}function yn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Wn(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Pt(){}var Kt=.7,bn=1/Kt,gn="\\s*([+-]?\\d+)\\s*",Hn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",dt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",cg=/^#([0-9a-f]{3,8})$/,ug=new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`),dg=new RegExp(`^rgb\\(${dt},${dt},${dt}\\)$`),fg=new RegExp(`^rgba\\(${gn},${gn},${gn},${Hn}\\)$`),pg=new RegExp(`^rgba\\(${dt},${dt},${dt},${Hn}\\)$`),mg=new RegExp(`^hsl\\(${Hn},${dt},${dt}\\)$`),gg=new RegExp(`^hsla\\(${Hn},${dt},${dt},${Hn}\\)$`),Js={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};yn(Pt,vt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:ea,formatHex:ea,formatHex8:hg,formatHsl:bg,formatRgb:ta,toString:ta});function ea(){return this.rgb().formatHex()}function hg(){return this.rgb().formatHex8()}function bg(){return ua(this).formatHsl()}function ta(){return this.rgb().formatRgb()}function vt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=cg.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?na(t):n===3?new De(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?vo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?vo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=ug.exec(e))?new De(t[1],t[2],t[3],1):(t=dg.exec(e))?new De(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=fg.exec(e))?vo(t[1],t[2],t[3],t[4]):(t=pg.exec(e))?vo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=mg.exec(e))?ia(t[1],t[2]/100,t[3]/100,1):(t=gg.exec(e))?ia(t[1],t[2]/100,t[3]/100,t[4]):Js.hasOwnProperty(e)?na(Js[e]):e==="transparent"?new De(NaN,NaN,NaN,0):null}function na(e){return new De(e>>16&255,e>>8&255,e&255,1)}function vo(e,t,n,o){return o<=0&&(e=t=n=NaN),new De(e,t,n,o)}function Qr(e){return e instanceof Pt||(e=vt(e)),e?(e=e.rgb(),new De(e.r,e.g,e.b,e.opacity)):new De}function Fn(e,t,n,o){return arguments.length===1?Qr(e):new De(e,t,n,o??1)}function De(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}yn(De,Fn,Wn(Pt,{brighter(e){return e=e==null?bn:Math.pow(bn,e),new De(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Kt:Math.pow(Kt,e),new De(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new De(Ut(this.r),Ut(this.g),Ut(this.b),So(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:oa,formatHex:oa,formatHex8:yg,formatRgb:ra,toString:ra}));function oa(){return`#${qt(this.r)}${qt(this.g)}${qt(this.b)}`}function yg(){return`#${qt(this.r)}${qt(this.g)}${qt(this.b)}${qt((isNaN(this.opacity)?1:this.opacity)*255)}`}function ra(){let e=So(this.opacity);return`${e===1?"rgb(":"rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${e===1?")":`, ${e})`}`}function So(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ut(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function qt(e){return e=Ut(e),(e<16?"0":"")+e.toString(16)}function ia(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new it(e,t,n,o)}function ua(e){if(e instanceof it)return new it(e.h,e.s,e.l,e.opacity);if(e instanceof Pt||(e=vt(e)),!e)return new it;if(e instanceof it)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),s=NaN,a=i-r,c=(i+r)/2;return a?(t===i?s=(n-o)/a+(n<o)*6:n===i?s=(o-t)/a+2:s=(t-n)/a+4,a/=c<.5?i+r:2-i-r,s*=60):a=c>0&&c<1?0:s,new it(s,a,c,e.opacity)}function _o(e,t,n,o){return arguments.length===1?ua(e):new it(e,t,n,o??1)}function it(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}yn(it,_o,Wn(Pt,{brighter(e){return e=e==null?bn:Math.pow(bn,e),new it(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Kt:Math.pow(Kt,e),new it(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new De(qr(e>=240?e-240:e+120,r,o),qr(e,r,o),qr(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new it(sa(this.h),ko(this.s),ko(this.l),So(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=So(this.opacity);return`${e===1?"hsl(":"hsla("}${sa(this.h)}, ${ko(this.s)*100}%, ${ko(this.l)*100}%${e===1?")":`, ${e})`}`}}));function sa(e){return e=(e||0)%360,e<0?e+360:e}function ko(e){return Math.max(0,Math.min(1,e||0))}function qr(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var da=Math.PI/180,fa=180/Math.PI,Co=18,pa=.96422,ma=1,ga=.82521,ha=4/29,hn=6/29,ba=3*hn*hn,xg=hn*hn*hn;function ya(e){if(e instanceof ft)return new ft(e.l,e.a,e.b,e.opacity);if(e instanceof wt)return wa(e);e instanceof De||(e=Qr(e));var t=jr(e.r),n=jr(e.g),o=jr(e.b),r=Ur((.2225045*t+.7168786*n+.0606169*o)/ma),i,s;return t===n&&n===o?i=s=r:(i=Ur((.4360747*t+.3850649*n+.1430804*o)/pa),s=Ur((.0139322*t+.0971045*n+.7141733*o)/ga)),new ft(116*r-16,500*(i-r),200*(r-s),e.opacity)}function xa(e,t,n,o){return arguments.length===1?ya(e):new ft(e,t,n,o??1)}function ft(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}yn(ft,xa,Wn(Pt,{brighter(e){return new ft(this.l+Co*(e??1),this.a,this.b,this.opacity)},darker(e){return new ft(this.l-Co*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=pa*Zr(t),e=ma*Zr(e),n=ga*Zr(n),new De(Kr(3.1338561*t-1.6168667*e-.4906146*n),Kr(-.9787684*t+1.9161415*e+.033454*n),Kr(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Ur(e){return e>xg?Math.pow(e,1/3):e/ba+ha}function Zr(e){return e>hn?e*e*e:ba*(e-ha)}function Kr(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function jr(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function wg(e){if(e instanceof wt)return new wt(e.h,e.c,e.l,e.opacity);if(e instanceof ft||(e=ya(e)),e.a===0&&e.b===0)return new wt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*fa;return new wt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Eo(e,t,n,o){return arguments.length===1?wg(e):new wt(e,t,n,o??1)}function wt(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function wa(e){if(isNaN(e.h))return new ft(e.l,0,0,e.opacity);var t=e.h*da;return new ft(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}yn(wt,Eo,Wn(Pt,{brighter(e){return new wt(this.h,this.c,this.l+Co*(e??1),this.opacity)},darker(e){return new wt(this.h,this.c,this.l-Co*(e??1),this.opacity)},rgb(){return wa(this).rgb()}}));var va=-.14861,Jr=1.78277,ei=-.29227,No=-.90649,Bn=1.97294,aa=Bn*No,la=Bn*Jr,ca=Jr*ei-No*va;function vg(e){if(e instanceof Zt)return new Zt(e.h,e.s,e.l,e.opacity);e instanceof De||(e=Qr(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(ca*o+aa*t-la*n)/(ca+aa-la),i=o-r,s=(Bn*(n-r)-ei*i)/No,a=Math.sqrt(s*s+i*i)/(Bn*r*(1-r)),c=a?Math.atan2(s,i)*fa-120:NaN;return new Zt(c<0?c+360:c,a,r,e.opacity)}function Mo(e,t,n,o){return arguments.length===1?vg(e):new Zt(e,t,n,o??1)}function Zt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}yn(Zt,Mo,Wn(Pt,{brighter(e){return e=e==null?bn:Math.pow(bn,e),new Zt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Kt:Math.pow(Kt,e),new Zt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*da,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new De(255*(t+n*(va*o+Jr*r)),255*(t+n*(ei*o+No*r)),255*(t+n*(Bn*o)),this.opacity)}}));function Ca(e,t,n,o,r){var i=e*e,s=i*e;return((1-3*e+3*i-s)*t+(4-6*i+3*s)*n+(1+3*e+3*i-3*s)*o+s*r)/6}function kg(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],s=o>0?e[o-1]:2*r-i,a=o<t-1?e[o+2]:2*i-r;return Ca((n-o/t)*t,s,r,i,a)}}function Sg(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],s=e[(o+1)%t],a=e[(o+2)%t];return Ca((n-o/t)*t,r,i,s,a)}}var Po=e=>()=>e;function _a(e,t){return function(n){return e+n*t}}function Cg(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function ri(e,t){var n=t-e;return n?_a(e,n>180||n<-180?n-360*Math.round(n/360):n):Po(isNaN(e)?t:e)}function _g(e){return(e=+e)==1?Ge:function(t,n){return n-t?Cg(t,n,e):Po(isNaN(t)?n:t)}}function Ge(e,t){var n=t-e;return n?_a(e,n):Po(isNaN(e)?t:e)}var Vn=(function e(t){var n=_g(t);function o(r,i){var s=n((r=Fn(r)).r,(i=Fn(i)).r),a=n(r.g,i.g),c=n(r.b,i.b),l=Ge(r.opacity,i.opacity);return function(u){return r.r=s(u),r.g=a(u),r.b=c(u),r.opacity=l(u),r+""}}return o.gamma=e,o})(1);function Ea(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),s,a;for(s=0;s<n;++s)a=Fn(t[s]),o[s]=a.r||0,r[s]=a.g||0,i[s]=a.b||0;return o=e(o),r=e(r),i=e(i),a.opacity=1,function(c){return a.r=o(c),a.g=r(c),a.b=i(c),a+""}}}var Pw=Ea(kg),zw=Ea(Sg);function Eg(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Ng(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Mg(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),s;for(s=0;s<o;++s)r[s]=xn(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(a){for(s=0;s<o;++s)i[s]=r[s](a);return i}}function Ig(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function st(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Pg(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=xn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var ni=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ti=new RegExp(ni.source,"g");function zg(e){return function(){return e}}function Rg(e){return function(t){return e(t)+""}}function ii(e,t){var n=ni.lastIndex=ti.lastIndex=0,o,r,i,s=-1,a=[],c=[];for(e=e+"",t=t+"";(o=ni.exec(e))&&(r=ti.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),a[s]?a[s]+=i:a[++s]=i),(o=o[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,c.push({i:s,x:st(o,r)})),n=ti.lastIndex;return n<t.length&&(i=t.slice(n),a[s]?a[s]+=i:a[++s]=i),a.length<2?c[0]?Rg(c[0].x):zg(t):(t=c.length,function(l){for(var u=0,d;u<t;++u)a[(d=c[u]).i]=d.x(l);return a.join("")})}function xn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Po(t):(n==="number"?st:n==="string"?(o=vt(t))?(t=o,Vn):ii:t instanceof vt?Vn:t instanceof Date?Ig:Ng(t)?Eg:Array.isArray(t)?Mg:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Pg:st)(e,t)}var ka=180/Math.PI,oi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Na(e,t,n,o,r,i){var s,a,c;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(a=Math.sqrt(n*n+o*o))&&(n/=a,o/=a,c/=a),e*o<t*n&&(e=-e,t=-t,c=-c,s=-s),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*ka,skewX:Math.atan(c)*ka,scaleX:s,scaleY:a}}var Io;function Dg(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?oi:Na(t.a,t.b,t.c,t.d,t.e,t.f)}function Ag(e){return e==null||(Io||(Io=document.createElementNS("http://www.w3.org/2000/svg","g")),Io.setAttribute("transform",e),!(e=Io.transform.baseVal.consolidate()))?oi:(e=e.matrix,Na(e.a,e.b,e.c,e.d,e.e,e.f))}function Ma(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push("translate(",null,t,null,n);m.push({i:y-4,x:st(l,d)},{i:y-2,x:st(u,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function s(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:st(l,u)})):u&&d.push(r(d)+"rotate("+u+o)}function a(l,u,d,f){l!==u?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:st(l,u)}):u&&d.push(r(d)+"skewX("+u+o)}function c(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push(r(p)+"scale(",null,",",null,")");m.push({i:y-4,x:st(l,d)},{i:y-2,x:st(u,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=e(l),u=e(u),i(l.translateX,l.translateY,u.translateX,u.translateY,d,f),s(l.rotate,u.rotate,d,f),a(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(p){for(var m=-1,y=f.length,b;++m<y;)d[(b=f[m]).i]=b.x(p);return d.join("")}}}var Ia=Ma(Dg,"px, ","px)","deg)"),Pa=Ma(Ag,", ",")",")"),Og=1e-12;function Sa(e){return((e=Math.exp(e))+1/e)/2}function Tg(e){return((e=Math.exp(e))-1/e)/2}function $g(e){return((e=Math.exp(2*e))-1)/(e+1)}var wn=(function e(t,n,o){function r(i,s){var a=i[0],c=i[1],l=i[2],u=s[0],d=s[1],f=s[2],p=u-a,m=d-c,y=p*p+m*m,b,g;if(y<Og)g=Math.log(f/l)/t,b=function(C){return[a+C*p,c+C*m,l*Math.exp(t*C*g)]};else{var k=Math.sqrt(y),h=(f*f-l*l+o*y)/(2*l*n*k),v=(f*f-l*l-o*y)/(2*f*n*k),x=Math.log(Math.sqrt(h*h+1)-h),S=Math.log(Math.sqrt(v*v+1)-v);g=(S-x)/t,b=function(C){var N=C*g,P=Sa(x),W=l/(n*k)*(P*$g(t*N+x)-Tg(x));return[a+W*p,c+W*m,l*P/Sa(t*N+x)]}}return b.duration=Math.abs(g)*1e3*t/Math.SQRT2,b}return r.rho=function(i){var s=Math.max(.001,+i),a=s*s,c=a*a;return e(s,a,c)},r})(Math.SQRT2,2,4);function za(e){return function(t,n){var o=e((t=_o(t)).h,(n=_o(n)).h),r=Ge(t.s,n.s),i=Ge(t.l,n.l),s=Ge(t.opacity,n.opacity);return function(a){return t.h=o(a),t.s=r(a),t.l=i(a),t.opacity=s(a),t+""}}}var Rw=za(ri),Dw=za(Ge);function Ra(e){return function(t,n){var o=e((t=Eo(t)).h,(n=Eo(n)).h),r=Ge(t.c,n.c),i=Ge(t.l,n.l),s=Ge(t.opacity,n.opacity);return function(a){return t.h=o(a),t.c=r(a),t.l=i(a),t.opacity=s(a),t+""}}}var Aw=Ra(ri),Ow=Ra(Ge);function Da(e){return(function t(n){n=+n;function o(r,i){var s=e((r=Mo(r)).h,(i=Mo(i)).h),a=Ge(r.s,i.s),c=Ge(r.l,i.l),l=Ge(r.opacity,i.opacity);return function(u){return r.h=s(u),r.s=a(u),r.l=c(Math.pow(u,n)),r.opacity=l(u),r+""}}return o.gamma=t,o})(1)}var Tw=Da(ri),$w=Da(Ge);var vn=0,Xn=0,Gn=0,Oa=1e3,zo,Yn,Ro=0,jt=0,Ao=0,qn=typeof performance=="object"&&performance.now?performance:Date,Ta=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Oo(){return jt||(Ta(Lg),jt=qn.now()+Ao)}function Lg(){jt=0}function Do(){this._call=this._time=this._next=null}Do.prototype=ai.prototype={constructor:Do,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Oo():+n)+(t==null?0:+t),!this._next&&Yn!==this&&(Yn?Yn._next=this:zo=this,Yn=this),this._call=e,this._time=n,si()},stop:function(){this._call&&(this._call=null,this._time=1/0,si())}};function ai(e,t,n){var o=new Do;return o.restart(e,t,n),o}function Hg(){Oo(),++vn;for(var e=zo,t;e;)(t=jt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--vn}function Aa(){jt=(Ro=qn.now())+Ao,vn=Xn=0;try{Hg()}finally{vn=0,Wg(),jt=0}}function Bg(){var e=qn.now(),t=e-Ro;t>Oa&&(Ao-=t,Ro=e)}function Wg(){for(var e,t=zo,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:zo=n);Yn=e,si(o)}function si(e){if(!vn){Xn&&(Xn=clearTimeout(Xn));var t=e-jt;t>24?(e<1/0&&(Xn=setTimeout(Aa,Math.ceil(e-qn.now()-Ao)+1)),Gn&&(Gn=clearInterval(Gn))):(Gn||(Ro=qn.now(),Gn=setInterval(Bg,Oa)),vn=1,Ta(Aa))}}function li(e,t,n){var o=new Do;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function La(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var ci=3,Bw=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(ci),Ww=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(ci),Fw=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(ci),Fg=Math.PI,Vw=Fg/2;function To(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var $a=4/11,Gw=6/11,Xw=8/11,Yw=3/4,qw=9/11,Uw=10/11,Zw=15/16,Kw=21/22,jw=63/64,Qw=1/$a/$a;var ui=1.70158,Jw=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(ui),ev=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(ui),tv=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(ui),kn=2*Math.PI,di=1,fi=.3,nv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=kn);function r(i){return t*To(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*kn)},r.period=function(i){return e(t,i)},r})(di,fi),ov=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=kn);function r(i){return 1-t*To(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*kn)},r.period=function(i){return e(t,i)},r})(di,fi),rv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=kn);function r(i){return((i=i*2-1)<0?t*To(-i)*Math.sin((o-i)/n):2-t*To(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*kn)},r.period=function(i){return e(t,i)},r})(di,fi);var Vg=Gt("start","end","cancel","interrupt"),Gg=[],Wa=0,Ha=1,pi=2,$o=3,Ba=4,mi=5,Lo=6;function Ho(e,t,n,o,r,i){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;Xg(e,n,{name:t,index:o,group:r,on:Vg,tween:Gg,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Wa})}function gi(e,t){var n=at(e,t);if(n.state>Wa)throw new Error("too late; already scheduled");return n}function pt(e,t){var n=at(e,t);if(n.state>$o)throw new Error("too late; already running");return n}function at(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Xg(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=ai(i,0,n.time);function i(l){n.state=Ha,n.timer.restart(s,n.delay,n.time),n.delay<=l&&s(l-n.delay)}function s(l){var u,d,f,p;if(n.state!==Ha)return c();for(u in o)if(p=o[u],p.name===n.name){if(p.state===$o)return li(s);p.state===Ba?(p.state=Lo,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[u]):+u<t&&(p.state=Lo,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[u])}if(li(function(){n.state===$o&&(n.state=Ba,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=pi,n.on.call("start",e,e.__data__,n.index,n.group),n.state===pi){for(n.state=$o,r=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(p=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function a(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=mi,1),d=-1,f=r.length;++d<f;)r[d].call(e,u);n.state===mi&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Lo,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function Un(e,t){var n=e.__transition,o,r,i=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((o=n[s]).name!==t){i=!1;continue}r=o.state>pi&&o.state<mi,o.state=Lo,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[s]}i&&delete e.__transition}}function Yg(e){return this.each(function(){Un(this,e)})}function qg(e,t){var n,o;return function(){var r=pt(this,e),i=r.tween;if(i!==n){o=n=i;for(var s=0,a=o.length;s<a;++s)if(o[s].name===t){o=o.slice(),o.splice(s,1);break}}r.tween=o}}function Ug(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=pt(this,e),s=i.tween;if(s!==o){r=(o=s).slice();for(var a={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}i.tween=r}}function Zg(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=at(this.node(),n).tween,r=0,i=o.length,s;r<i;++r)if((s=o[r]).name===e)return s.value;return null}return this.each((t==null?qg:Ug)(n,e,t))}function hi(e,t,n){var o=e._id;return e.each(function(){var r=pt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return at(r,o).value[t]}}function Fa(e,t){var n;return(typeof t=="number"?st:t instanceof vt?Vn:(n=vt(t))?(t=n,Vn):ii)(e,t)}function Kg(e){return function(){this.removeAttribute(e)}}function jg(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Qg(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttribute(e);return s===r?null:s===o?i:i=t(o=s,n)}}function Jg(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttributeNS(e.space,e.local);return s===r?null:s===o?i:i=t(o=s,n)}}function eh(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function th(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function nh(e,t){var n=$n(e),o=n==="transform"?Pa:Fa;return this.attrTween(e,typeof t=="function"?(n.local?th:eh)(n,o,hi(this,"attr."+e,t)):t==null?(n.local?jg:Kg)(n):(n.local?Jg:Qg)(n,o,t))}function oh(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function rh(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function ih(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&rh(e,i)),n}return r._value=t,r}function sh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&oh(e,i)),n}return r._value=t,r}function ah(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=$n(e);return this.tween(n,(o.local?ih:sh)(o,t))}function lh(e,t){return function(){gi(this,e).delay=+t.apply(this,arguments)}}function ch(e,t){return t=+t,function(){gi(this,e).delay=t}}function uh(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?lh:ch)(t,e)):at(this.node(),t).delay}function dh(e,t){return function(){pt(this,e).duration=+t.apply(this,arguments)}}function fh(e,t){return t=+t,function(){pt(this,e).duration=t}}function ph(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?dh:fh)(t,e)):at(this.node(),t).duration}function mh(e,t){if(typeof t!="function")throw new Error;return function(){pt(this,e).ease=t}}function gh(e){var t=this._id;return arguments.length?this.each(mh(t,e)):at(this.node(),t).ease}function hh(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;pt(this,e).ease=n}}function bh(e){if(typeof e!="function")throw new Error;return this.each(hh(this._id,e))}function yh(e){typeof e!="function"&&(e=Br(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new St(o,this._parents,this._name,this._id)}function xh(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),s=new Array(o),a=0;a<i;++a)for(var c=t[a],l=n[a],u=c.length,d=s[a]=new Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;a<o;++a)s[a]=t[a];return new St(s,this._parents,this._name,this._id)}function wh(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function vh(e,t,n){var o,r,i=wh(t)?gi:pt;return function(){var s=i(this,e),a=s.on;a!==o&&(r=(o=a).copy()).on(t,n),s.on=r}}function kh(e,t){var n=this._id;return arguments.length<2?at(this.node(),n).on.on(e):this.each(vh(n,e,t))}function Sh(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Ch(){return this.on("end.remove",Sh(this._id))}function _h(e){var t=this._name,n=this._id;typeof e!="function"&&(e=xo(e));for(var o=this._groups,r=o.length,i=new Array(r),s=0;s<r;++s)for(var a=o[s],c=a.length,l=i[s]=new Array(c),u,d,f=0;f<c;++f)(u=a[f])&&(d=e.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,Ho(l[f],t,n,f,l,at(u,n)));return new St(i,this._parents,t,n)}function Eh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Hr(e));for(var o=this._groups,r=o.length,i=[],s=[],a=0;a<r;++a)for(var c=o[a],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=at(u,n),y=0,b=f.length;y<b;++y)(p=f[y])&&Ho(p,t,n,y,f,m);i.push(f),s.push(u)}return new St(i,s,t,n)}var Nh=Yt.prototype.constructor;function Mh(){return new Nh(this._groups,this._parents)}function Ih(e,t){var n,o,r;return function(){var i=Xt(this,e),s=(this.style.removeProperty(e),Xt(this,e));return i===s?null:i===n&&s===o?r:r=t(n=i,o=s)}}function Va(e){return function(){this.style.removeProperty(e)}}function Ph(e,t,n){var o,r=n+"",i;return function(){var s=Xt(this,e);return s===r?null:s===o?i:i=t(o=s,n)}}function zh(e,t,n){var o,r,i;return function(){var s=Xt(this,e),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(e),Xt(this,e))),s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a))}}function Rh(e,t){var n,o,r,i="style."+t,s="end."+i,a;return function(){var c=pt(this,e),l=c.on,u=c.value[i]==null?a||(a=Va(t)):void 0;(l!==n||r!==u)&&(o=(n=l).copy()).on(s,r=u),c.on=o}}function Dh(e,t,n){var o=(e+="")=="transform"?Ia:Fa;return t==null?this.styleTween(e,Ih(e,o)).on("end.style."+e,Va(e)):typeof t=="function"?this.styleTween(e,zh(e,o,hi(this,"style."+e,t))).each(Rh(this._id,e)):this.styleTween(e,Ph(e,o,t),n).on("end.style."+e,null)}function Ah(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Oh(e,t,n){var o,r;function i(){var s=t.apply(this,arguments);return s!==r&&(o=(r=s)&&Ah(e,s,n)),o}return i._value=t,i}function Th(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Oh(e,t,n??""))}function $h(e){return function(){this.textContent=e}}function Lh(e){return function(){var t=e(this);this.textContent=t??""}}function Hh(e){return this.tween("text",typeof e=="function"?Lh(hi(this,"text",e)):$h(e==null?"":e+""))}function Bh(e){return function(t){this.textContent=e.call(this,t)}}function Wh(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Bh(r)),t}return o._value=e,o}function Fh(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Wh(e))}function Vh(){for(var e=this._name,t=this._id,n=Ga(),o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)if(c=s[l]){var u=at(c,t);Ho(c,e,n,l,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new St(o,this._parents,e,n)}function Gh(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,s){var a={value:s},c={value:function(){--r===0&&i()}};n.each(function(){var l=pt(this,o),u=l.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&i()})}var Xh=0;function St(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function Yh(e){return Yt().transition(e)}function Ga(){return++Xh}var kt=Yt.prototype;St.prototype=Yh.prototype={constructor:St,select:_h,selectAll:Eh,selectChild:kt.selectChild,selectChildren:kt.selectChildren,filter:yh,merge:xh,selection:Mh,transition:Vh,call:kt.call,nodes:kt.nodes,node:kt.node,size:kt.size,empty:kt.empty,each:kt.each,on:kh,attr:nh,attrTween:ah,style:Dh,styleTween:Th,text:Hh,textTween:Fh,remove:Ch,tween:Zg,delay:uh,duration:ph,ease:gh,easeVarying:bh,end:Gh,[Symbol.iterator]:kt[Symbol.iterator]};var qh={time:null,delay:0,duration:250,ease:La};function Uh(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Zh(e){var t,n;e instanceof St?(t=e._id,e=e._name):(t=Ga(),(n=qh).time=Oo(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&Ho(c,e,t,l,s,n||Uh(c,t));return new St(o,this._parents,e,t)}Yt.prototype.interrupt=Yg;Yt.prototype.transition=Zh;var Bo=e=>()=>e;function Kh(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Ct(e,t,n){this.k=e,this.x=t,this.y=n}Ct.prototype={constructor:Ct,scale:function(e){return e===1?this:new Ct(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ct(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Kn=new Ct(1,0,0);yi.prototype=Ct.prototype;function yi(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Kn;return e.__zoom}function bi(e){e.stopImmediatePropagation()}function Zn(e){e.preventDefault(),e.stopImmediatePropagation()}function jh(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Qh(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Xa(){return this.__zoom||Kn}function Jh(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function e0(){return navigator.maxTouchPoints||"ontouchstart"in this}function t0(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],s=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s))}function xi(){var e=jh,t=Qh,n=t0,o=Jh,r=e0,i=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,c=wn,l=Gt("start","zoom","end"),u,d,f,p=500,m=150,y=0,b=10;function g(w){w.property("__zoom",Xa).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",P).on("dblclick.zoom",W).filter(r).on("touchstart.zoom",I).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",E).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(w,M,_,z){var D=w.selection?w.selection():w;D.property("__zoom",Xa),w!==D?x(w,M,_,z):D.interrupt().each(function(){S(this,arguments).event(z).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},g.scaleBy=function(w,M,_,z){g.scaleTo(w,function(){var D=this.__zoom.k,O=typeof M=="function"?M.apply(this,arguments):M;return D*O},_,z)},g.scaleTo=function(w,M,_,z){g.transform(w,function(){var D=t.apply(this,arguments),O=this.__zoom,V=_==null?v(D):typeof _=="function"?_.apply(this,arguments):_,H=O.invert(V),F=typeof M=="function"?M.apply(this,arguments):M;return n(h(k(O,F),V,H),D,s)},_,z)},g.translateBy=function(w,M,_,z){g.transform(w,function(){return n(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof _=="function"?_.apply(this,arguments):_),t.apply(this,arguments),s)},null,z)},g.translateTo=function(w,M,_,z,D){g.transform(w,function(){var O=t.apply(this,arguments),V=this.__zoom,H=z==null?v(O):typeof z=="function"?z.apply(this,arguments):z;return n(Kn.translate(H[0],H[1]).scale(V.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof _=="function"?-_.apply(this,arguments):-_),O,s)},z,D)};function k(w,M){return M=Math.max(i[0],Math.min(i[1],M)),M===w.k?w:new Ct(M,w.x,w.y)}function h(w,M,_){var z=M[0]-_[0]*w.k,D=M[1]-_[1]*w.k;return z===w.x&&D===w.y?w:new Ct(w.k,z,D)}function v(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function x(w,M,_,z){w.on("start.zoom",function(){S(this,arguments).event(z).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(z).end()}).tween("zoom",function(){var D=this,O=arguments,V=S(D,O).event(z),H=t.apply(D,O),F=_==null?v(H):typeof _=="function"?_.apply(D,O):_,K=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),q=D.__zoom,J=typeof M=="function"?M.apply(D,O):M,re=c(q.invert(F).concat(K/q.k),J.invert(F).concat(K/J.k));return function(B){if(B===1)B=J;else{var R=re(B),X=K/R[2];B=new Ct(X,F[0]-R[0]*X,F[1]-R[1]*X)}V.zoom(null,B)}})}function S(w,M,_){return!_&&w.__zooming||new C(w,M)}function C(w,M){this.that=w,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,M),this.taps=0}C.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,M){return this.mouse&&w!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var M=Te(this.that).datum();l.call(w,this.that,new Kh(w,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:l}),M)}};function N(w,...M){if(!e.apply(this,arguments))return;var _=S(this,M).event(w),z=this.__zoom,D=Math.max(i[0],Math.min(i[1],z.k*Math.pow(2,o.apply(this,arguments)))),O=Ve(w);if(_.wheel)(_.mouse[0][0]!==O[0]||_.mouse[0][1]!==O[1])&&(_.mouse[1]=z.invert(_.mouse[0]=O)),clearTimeout(_.wheel);else{if(z.k===D)return;_.mouse=[O,z.invert(O)],Un(this),_.start()}Zn(w),_.wheel=setTimeout(V,m),_.zoom("mouse",n(h(k(z,D),_.mouse[0],_.mouse[1]),_.extent,s));function V(){_.wheel=null,_.end()}}function P(w,...M){if(f||!e.apply(this,arguments))return;var _=w.currentTarget,z=S(this,M,!0).event(w),D=Te(w.view).on("mousemove.zoom",F,!0).on("mouseup.zoom",K,!0),O=Ve(w,_),V=w.clientX,H=w.clientY;Gr(w.view),bi(w),z.mouse=[O,this.__zoom.invert(O)],Un(this),z.start();function F(q){if(Zn(q),!z.moved){var J=q.clientX-V,re=q.clientY-H;z.moved=J*J+re*re>y}z.event(q).zoom("mouse",n(h(z.that.__zoom,z.mouse[0]=Ve(q,_),z.mouse[1]),z.extent,s))}function K(q){D.on("mousemove.zoom mouseup.zoom",null),Xr(q.view,z.moved),Zn(q),z.event(q).end()}}function W(w,...M){if(e.apply(this,arguments)){var _=this.__zoom,z=Ve(w.changedTouches?w.changedTouches[0]:w,this),D=_.invert(z),O=_.k*(w.shiftKey?.5:2),V=n(h(k(_,O),z,D),t.apply(this,M),s);Zn(w),a>0?Te(this).transition().duration(a).call(x,V,z,w):Te(this).call(g.transform,V,z,w)}}function I(w,...M){if(e.apply(this,arguments)){var _=w.touches,z=_.length,D=S(this,M,w.changedTouches.length===z).event(w),O,V,H,F;for(bi(w),V=0;V<z;++V)H=_[V],F=Ve(H,this),F=[F,this.__zoom.invert(F),H.identifier],D.touch0?!D.touch1&&D.touch0[2]!==F[2]&&(D.touch1=F,D.taps=0):(D.touch0=F,O=!0,D.taps=1+!!u);u&&(u=clearTimeout(u)),O&&(D.taps<2&&(d=F[0],u=setTimeout(function(){u=null},p)),Un(this),D.start())}}function L(w,...M){if(this.__zooming){var _=S(this,M).event(w),z=w.changedTouches,D=z.length,O,V,H,F;for(Zn(w),O=0;O<D;++O)V=z[O],H=Ve(V,this),_.touch0&&_.touch0[2]===V.identifier?_.touch0[0]=H:_.touch1&&_.touch1[2]===V.identifier&&(_.touch1[0]=H);if(V=_.that.__zoom,_.touch1){var K=_.touch0[0],q=_.touch0[1],J=_.touch1[0],re=_.touch1[1],B=(B=J[0]-K[0])*B+(B=J[1]-K[1])*B,R=(R=re[0]-q[0])*R+(R=re[1]-q[1])*R;V=k(V,Math.sqrt(B/R)),H=[(K[0]+J[0])/2,(K[1]+J[1])/2],F=[(q[0]+re[0])/2,(q[1]+re[1])/2]}else if(_.touch0)H=_.touch0[0],F=_.touch0[1];else return;_.zoom("touch",n(h(V,H,F),_.extent,s))}}function E(w,...M){if(this.__zooming){var _=S(this,M).event(w),z=w.changedTouches,D=z.length,O,V;for(bi(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),O=0;O<D;++O)V=z[O],_.touch0&&_.touch0[2]===V.identifier?delete _.touch0:_.touch1&&_.touch1[2]===V.identifier&&delete _.touch1;if(_.touch1&&!_.touch0&&(_.touch0=_.touch1,delete _.touch1),_.touch0)_.touch0[1]=this.__zoom.invert(_.touch0[0]);else if(_.end(),_.taps===2&&(V=Ve(V,this),Math.hypot(d[0]-V[0],d[1]-V[1])<b)){var H=Te(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return g.wheelDelta=function(w){return arguments.length?(o=typeof w=="function"?w:Bo(+w),g):o},g.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Bo(!!w),g):e},g.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:Bo(!!w),g):r},g.extent=function(w){return arguments.length?(t=typeof w=="function"?w:Bo([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),g):t},g.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],g):[i[0],i[1]]},g.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],g):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},g.constrain=function(w){return arguments.length?(n=w,g):n},g.duration=function(w){return arguments.length?(a=+w,g):a},g.interpolate=function(w){return arguments.length?(c=w,g):c},g.on=function(){var w=l.on.apply(l,arguments);return w===l?g:w},g.clickDistance=function(w){return arguments.length?(y=(w=+w)*w,g):Math.sqrt(y)},g.tapDistance=function(w){return arguments.length?(b=+w,g):b},g}var Ze={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},En=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Ci=["Enter"," ","Escape"],_i={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Dt;(function(e){e.Strict="strict",e.Loose="loose"})(Dt||(Dt={}));var _t;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(_t||(_t={}));var Qt;(function(e){e.Partial="partial",e.Full="full"})(Qt||(Qt={}));var Ei={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},mt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(mt||(mt={}));var At;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(At||(At={}));var j;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(j||(j={}));var Ya={[j.Left]:j.Right,[j.Right]:j.Left,[j.Top]:j.Bottom,[j.Bottom]:j.Top};function Ni(e){return e===null?null:e?"valid":"invalid"}var Mi=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,il=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Ii=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var Qn=(e,t=[0,0])=>{let{width:n,height:o}=lt(e),r=e.origin??t,i=n*r[0],s=o*r[1];return{x:e.position.x-i,y:e.position.y-s}},Pi=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",s=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(s=i?t.nodeLookup.get(r):Ii(r)?r:t.nodeLookup.get(r.id));let a=s?Vo(s,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return Yo(o,a)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return qo(n)},Nn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=Yo(n,Vo(r)),o=!0)}),o?qo(n):{x:0,y:0,width:0,height:0}},Go=(e,t,[n,o,r]=[0,0,1],i=!1,s=!1)=>{let a=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,u=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:m=!0,hidden:y=!1}=f;if(s&&!m||y)continue;let b=p.width??f.width??f.initialWidth??0,g=p.height??f.height??f.initialHeight??0,{x:k,y:h}=f.internals.positionAbsolute,v=ul(a,c,l,u,k,h,b,g),x=b*g,S=i&&v>0;(!f.internals.handleBounds||S||v>=x||f.dragging)&&d.push(f)}return d},sl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function n0(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:s,height:a}=lt(r);i=s>0&&a>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function al({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},s){if(e.size===0)return!0;let a=n0(e,s),c=Nn(a),l=eo(c,t,n,s?.minZoom??r,s?.maxZoom??i,s?.padding??.1);return await o.setViewport(l,{duration:s?.duration,ease:s?.ease,interpolate:s?.interpolate}),!0}function zi({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let s=n.get(e),a=s.parentId?n.get(s.parentId):void 0,{x:c,y:l}=a?a.internals.positionAbsolute:{x:0,y:0},u=s.origin??o,d=s.extent||r;if(s.extent==="parent"&&!s.expandParent)if(!a)i?.("005",Ze.error005());else{let p=a.measured.width,m=a.measured.height;p&&m&&(d=[[c,l],[c+p,l+m]])}else a&&tn(s.extent)&&(d=[[s.extent[0][0]+c,s.extent[0][1]+l],[s.extent[1][0]+c,s.extent[1][1]+l]]);let f=tn(d)?Jt(t,d,s.measured):t;return(s.measured.width===void 0||s.measured.height===void 0)&&i?.("015",Ze.error015()),{position:{x:f.x-c+(s.measured.width??0)*u[0],y:f.y-l+(s.measured.height??0)*u[1]},positionAbsolute:f}}async function ll({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),s=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),m=!p&&f.parentId&&s.find(y=>y.id===f.parentId);(p||m)&&s.push(f)}let a=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),u=sl(s,c);for(let f of c)a.has(f.id)&&!u.find(m=>m.id===f.id)&&u.push(f);if(!r)return{edges:u,nodes:s};let d=await r({nodes:s,edges:u});return typeof d=="boolean"?d?{edges:u,nodes:s}:{edges:[],nodes:[]}:d}var _n=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),Jt=(e={x:0,y:0},t,n)=>({x:_n(e.x,t[0][0],t[1][0]-(n?.width??0)),y:_n(e.y,t[0][1],t[1][1]-(n?.height??0))});function cl(e,t,n){let{width:o,height:r}=lt(n),{x:i,y:s}=n.internals.positionAbsolute;return Jt(e,[[i,s],[i+o,s+r]],t)}var qa=(e,t,n)=>e<t?_n(Math.abs(e-t),1,t)/t:e>n?-_n(Math.abs(e-n),1,t)/t:0,Xo=(e,t,n=15,o=40)=>{let r=qa(e.x,o,t.width-o)*n,i=qa(e.y,o,t.height-o)*n;return[r,i]},Yo=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Si=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),qo=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Mn=(e,t=[0,0])=>{let{x:n,y:o}=Ii(e)?e.internals.positionAbsolute:Qn(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Vo=(e,t=[0,0])=>{let{x:n,y:o}=Ii(e)?e.internals.positionAbsolute:Qn(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Ri=(e,t)=>qo(Yo(Si(e),Si(t))),ul=(e,t,n,o,r,i,s,a)=>{let c=Math.max(0,Math.min(e+n,r+s)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+a)-Math.max(t,i));return Math.ceil(c*l)},Jn=(e,t)=>ul(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Di=e=>et(e.width)&&et(e.height)&&et(e.x)&&et(e.y),et=e=>!isNaN(e)&&isFinite(e),Ai=(e,t)=>(n,o)=>{},In=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Pn=({x:e,y:t},[n,o,r],i=!1,s=[1,1])=>{let a={x:(e-n)/r,y:(t-o)/r};return i?In(a,s):a},en=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function Sn(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function o0(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=Sn(e,n),r=Sn(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=Sn(e.top??e.y??0,n),r=Sn(e.bottom??e.y??0,n),i=Sn(e.left??e.x??0,t),s=Sn(e.right??e.x??0,t);return{top:o,right:s,bottom:r,left:i,x:i+s,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function r0(e,t,n,o,r,i){let{x:s,y:a}=en(e,[t,n,o]),{x:c,y:l}=en({x:e.x+e.width,y:e.y+e.height},[t,n,o]),u=r-c,d=i-l;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(u),bottom:Math.floor(d)}}var eo=(e,t,n,o,r,i)=>{let s=o0(i,t,n),a=(t-s.x)/e.width,c=(n-s.y)/e.height,l=Math.min(a,c),u=_n(l,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*u,m=n/2-f*u,y=r0(e,p,m,u,t,n),b={left:Math.min(y.left-s.left,0),top:Math.min(y.top-s.top,0),right:Math.min(y.right-s.right,0),bottom:Math.min(y.bottom-s.bottom,0)};return{x:p-b.left+b.right,y:m-b.top+b.bottom,zoom:u}},zn=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function tn(e){return e!=null&&e!=="parent"}function lt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Oi(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Ti(e,t={width:0,height:0},n,o,r){let i={...e},s=o.get(n);if(s){let a=s.origin||r;i.x+=s.internals.positionAbsolute.x-(t.width??0)*a[0],i.y+=s.internals.positionAbsolute.y-(t.height??0)*a[1]}return i}function $i(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function dl(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function fl(e){return{..._i,...e||{}}}function jn(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:s}=tt(e),a=Pn({x:i-(r?.left??0),y:s-(r?.top??0)},o),{x:c,y:l}=n?In(a,t):a;return{xSnapped:c,ySnapped:l,...a}}var Uo=e=>({width:e.offsetWidth,height:e.offsetHeight}),Li=e=>e?.getRootNode?.()||window?.document,i0=["INPUT","SELECT","TEXTAREA"];function Hi(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:i0.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Bi=e=>"clientX"in e,tt=(e,t)=>{let n=Bi(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Ua=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(s=>{let a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/o,y:(a.top-n.top)/o,...Uo(s)}})};function Zo({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:s,targetControlY:a}){let c=e*.125+r*.375+s*.375+n*.125,l=t*.125+i*.375+a*.375+o*.125,u=Math.abs(c-e),d=Math.abs(l-t);return[c,l,u,d]}function Wo(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Za({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case j.Left:return[t-Wo(t-o,i),n];case j.Right:return[t+Wo(o-t,i),n];case j.Top:return[t,n-Wo(n-r,i)];case j.Bottom:return[t,n+Wo(r-n,i)]}}function Ko({sourceX:e,sourceY:t,sourcePosition:n=j.Bottom,targetX:o,targetY:r,targetPosition:i=j.Top,curvature:s=.25}){let[a,c]=Za({pos:n,x1:e,y1:t,x2:o,y2:r,c:s}),[l,u]=Za({pos:i,x1:o,y1:r,x2:e,y2:t,c:s}),[d,f,p,m]=Zo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:c,targetControlX:l,targetControlY:u});return[`M${e},${t} C${a},${c} ${l},${u} ${o},${r}`,d,f,p,m]}function Wi({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,s=Math.abs(o-t)/2,a=o<t?o+s:o-s;return[i,a,r,s]}function pl({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let s=r&&n?o+1e3:o,a=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return s+a}function ml({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=Yo(Vo(e),Vo(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let s={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return Jn(s,qo(i))>0}var s0=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,a0=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),gl=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Ze.error006()),t;let o=n.getEdgeId||s0,r;return Mi(e)?r={...e}:r={...e,id:o(e)},a0(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function jo({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,s,a]=Wi({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,s,a]}var Ka={[j.Left]:{x:-1,y:0},[j.Right]:{x:1,y:0},[j.Top]:{x:0,y:-1},[j.Bottom]:{x:0,y:1}},l0=({source:e,sourcePosition:t=j.Bottom,target:n})=>t===j.Left||t===j.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},ja=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function c0({source:e,sourcePosition:t=j.Bottom,target:n,targetPosition:o=j.Top,center:r,offset:i,stepPosition:s}){let a=Ka[t],c=Ka[o],l={x:e.x+a.x*i,y:e.y+a.y*i},u={x:n.x+c.x*i,y:n.y+c.y*i},d=l0({source:l,sourcePosition:t,target:u}),f=d.x!==0?"x":"y",p=d[f],m=[],y,b,g={x:0,y:0},k={x:0,y:0},[,,h,v]=Wi({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(a[f]*c[f]===-1){f==="x"?(y=r.x??l.x+(u.x-l.x)*s,b=r.y??(l.y+u.y)/2):(y=r.x??(l.x+u.x)/2,b=r.y??l.y+(u.y-l.y)*s);let N=[{x:y,y:l.y},{x:y,y:u.y}],P=[{x:l.x,y:b},{x:u.x,y:b}];a[f]===p?m=f==="x"?N:P:m=f==="x"?P:N}else{let N=[{x:l.x,y:u.y}],P=[{x:u.x,y:l.y}];if(f==="x"?m=a.x===p?P:N:m=a.y===p?N:P,t===o){let w=Math.abs(e[f]-n[f]);if(w<=i){let M=Math.min(i-1,i-w);a[f]===p?g[f]=(l[f]>e[f]?-1:1)*M:k[f]=(u[f]>n[f]?-1:1)*M}}if(t!==o){let w=f==="x"?"y":"x",M=a[f]===c[w],_=l[w]>u[w],z=l[w]<u[w];(a[f]===1&&(!M&&_||M&&z)||a[f]!==1&&(!M&&z||M&&_))&&(m=f==="x"?N:P)}let W={x:l.x+g.x,y:l.y+g.y},I={x:u.x+k.x,y:u.y+k.y},L=Math.max(Math.abs(W.x-m[0].x),Math.abs(I.x-m[0].x)),E=Math.max(Math.abs(W.y-m[0].y),Math.abs(I.y-m[0].y));L>=E?(y=(W.x+I.x)/2,b=m[0].y):(y=m[0].x,b=(W.y+I.y)/2)}let x={x:l.x+g.x,y:l.y+g.y},S={x:u.x+k.x,y:u.y+k.y};return[[e,...x.x!==m[0].x||x.y!==m[0].y?[x]:[],...m,...S.x!==m[m.length-1].x||S.y!==m[m.length-1].y?[S]:[],n],y,b,h,v]}function u0(e,t,n,o){let r=Math.min(ja(e,t)/2,ja(t,n)/2,o),{x:i,y:s}=t;if(e.x===i&&i===n.x||e.y===s&&s===n.y)return`L${i} ${s}`;if(e.y===s){let l=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+r*l},${s}Q ${i},${s} ${i},${s+r*u}`}let a=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${s+r*c}Q ${i},${s} ${i+r*a},${s}`}function to({sourceX:e,sourceY:t,sourcePosition:n=j.Bottom,targetX:o,targetY:r,targetPosition:i=j.Top,borderRadius:s=5,centerX:a,centerY:c,offset:l=20,stepPosition:u=.5}){let[d,f,p,m,y]=c0({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:a,y:c},offset:l,stepPosition:u}),b=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)b+=u0(d[g-1],d[g],d[g+1],s);return b+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[b,f,p,m,y]}function Qa(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function hl(e){let{sourceNode:t,targetNode:n}=e;if(!Qa(t)||!Qa(n))return null;let o=t.internals.handleBounds||Ja(t.handles),r=n.internals.handleBounds||Ja(n.handles),i=el(o?.source??[],e.sourceHandle),s=el(e.connectionMode===Dt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!s)return e.onError?.("008",Ze.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let a=i?.position||j.Bottom,c=s?.position||j.Top,l=Ot(t,i,a),u=Ot(n,s,c);return{sourceX:l.x,sourceY:l.y,targetX:u.x,targetY:u.y,sourcePosition:a,targetPosition:c}}function Ja(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function Ot(e,t,n=j.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:s,height:a}=t??lt(e);if(o)return{x:r+s/2,y:i+a/2};switch(t?.position??n){case j.Top:return{x:r+s/2,y:i};case j.Right:return{x:r+s,y:i+a/2};case j.Bottom:return{x:r+s/2,y:i+a};case j.Left:return{x:r,y:i+a/2}}}function el(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function Qo(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function bl(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((s,a)=>([a.markerStart||o,a.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=Qo(c,t);i.has(l)||(s.push({id:l,color:c.color||n,...c}),i.add(l))}}),s),[]).sort((s,a)=>s.id.localeCompare(a.id))}var yl=1e3,d0=10,Fi={nodeOrigin:[0,0],nodeExtent:En,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},f0={...Fi,checkEquality:!0};function Vi(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function xl(e,t,n){let o=Vi(Fi,n);for(let r of e.values())if(r.parentId)Xi(r,e,t,o);else{let i=Qn(r,o.nodeOrigin),s=tn(r.extent)?r.extent:o.nodeExtent,a=Jt(i,s,lt(r));r.internals.positionAbsolute=a}}function p0(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function Gi(e){return e==="manual"}function Jo(e,t,n,o={}){let r=Vi(f0,o),i={i:0},s=new Map(t),a=r?.elevateNodesOnSelect&&!Gi(r.zIndexMode)?yl:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let u of e){let d=s.get(u.id);if(r.checkEquality&&u===d?.internals.userNode)t.set(u.id,d);else{let f=Qn(u,r.nodeOrigin),p=tn(u.extent)?u.extent:r.nodeExtent,m=Jt(f,p,lt(u));d={...r.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:m,handleBounds:p0(u,d),z:wl(u,a,r.zIndexMode),userNode:u}},t.set(u.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),u.parentId&&Xi(d,t,n,o,i),l||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function m0(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Xi(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:s,nodeExtent:a,zIndexMode:c}=Vi(Fi,o),l=e.parentId,u=t.get(l);if(!u){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}m0(e,n),r&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++r.i,u.internals.z=u.internals.z+r.i*d0),r&&u.internals.rootParentIndex!==void 0&&(r.i=u.internals.rootParentIndex);let d=i&&!Gi(c)?yl:0,{x:f,y:p,z:m}=g0(e,u,s,a,d,c),{positionAbsolute:y}=e.internals,b=f!==y.x||p!==y.y;(b||m!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:b?{x:f,y:p}:y,z:m}})}function wl(e,t,n){let o=et(e.zIndex)?e.zIndex:0;return Gi(n)?o:o+(e.selected?t:0)}function g0(e,t,n,o,r,i){let{x:s,y:a}=t.internals.positionAbsolute,c=lt(e),l=Qn(e,n),u=tn(e.extent)?Jt(l,e.extent,c):l,d=Jt({x:s+u.x,y:a+u.y},o,c);e.extent==="parent"&&(d=cl(d,c,t));let f=wl(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function er(e,t,n,o=[0,0]){let r=[],i=new Map;for(let s of e){let a=t.get(s.parentId);if(!a)continue;let c=i.get(s.parentId)?.expandedRect??Mn(a),l=Ri(c,s.rect);i.set(s.parentId,{expandedRect:l,parent:a})}return i.size>0&&i.forEach(({expandedRect:s,parent:a},c)=>{let l=a.internals.positionAbsolute,u=lt(a),d=a.origin??o,f=s.x<l.x?Math.round(Math.abs(l.x-s.x)):0,p=s.y<l.y?Math.round(Math.abs(l.y-s.y)):0,m=Math.max(u.width,Math.round(s.width)),y=Math.max(u.height,Math.round(s.height)),b=(m-u.width)*d[0],g=(y-u.height)*d[1];(f>0||p>0||b||g)&&(r.push({id:c,type:"position",position:{x:a.position.x-f+b,y:a.position.y-p+g}}),n.get(c)?.forEach(k=>{e.some(h=>h.id===k.id)||r.push({id:k.id,type:"position",position:{x:k.position.x+f,y:k.position.y+p}})})),(u.width<s.width||u.height<s.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:m+(f?d[0]*f-b:0),height:y+(p?d[1]*p-g:0)}})}),r}function vl(e,t,n,o,r,i,s){let a=o?.querySelector(".xyflow__viewport"),c=!1;if(!a)return{changes:[],updatedInternals:c};let l=[],u=window.getComputedStyle(a),{m22:d}=new window.DOMMatrixReadOnly(u.transform),f=[];for(let p of e.values()){let m=t.get(p.id);if(!m)continue;if(m.hidden){t.set(m.id,{...m,internals:{...m.internals,handleBounds:void 0}}),c=!0;continue}let y=Uo(p.nodeElement),b=m.measured.width!==y.width||m.measured.height!==y.height;if(!!(y.width&&y.height&&(b||!m.internals.handleBounds||p.force))){let k=p.nodeElement.getBoundingClientRect(),h=tn(m.extent)?m.extent:i,{positionAbsolute:v}=m.internals;if(m.parentId&&m.extent==="parent"){let S=t.get(m.parentId);S&&(v=cl(v,y,S))}else h&&(v=Jt(v,h,y));let x={...m,measured:y,internals:{...m.internals,positionAbsolute:v,handleBounds:{source:Ua("source",p.nodeElement,k,d,m.id),target:Ua("target",p.nodeElement,k,d,m.id)}}};t.set(m.id,x),m.parentId&&Xi(x,t,n,{nodeOrigin:r,zIndexMode:s}),c=!0,b&&(l.push({id:m.id,type:"dimensions",dimensions:y}),m.expandParent&&m.parentId&&f.push({id:m.id,parentId:m.parentId,rect:Mn(x,r)}))}}if(f.length>0){let p=er(f,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function kl({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let s=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!s&&(s.x!==n[0]||s.y!==n[1]||s.k!==n[2])}function tl(e,t,n,o,r,i){let s=r,a=o.get(s)||new Map;o.set(s,a.set(n,t)),s=`${r}-${e}`;let c=o.get(s)||new Map;if(o.set(s,c.set(n,t)),i){s=`${r}-${e}-${i}`;let l=o.get(s)||new Map;o.set(s,l.set(n,t))}}function Yi(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:s=null,targetHandle:a=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:s,targetHandle:a},l=`${r}-${s}--${i}-${a}`,u=`${i}-${a}--${r}-${s}`;tl("source",c,u,e,r,s),tl("target",c,l,e,i,a),t.set(o.id,o)}}function Sl(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Sl(n,t):!1}function nl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function h0(e,t,n,o){let r=new Map;for(let[i,s]of e)if((s.selected||s.id===o)&&(!s.parentId||!Sl(s,e))&&(s.draggable||t&&typeof s.draggable>"u")){let a=e.get(i);a&&r.set(i,{id:i,position:a.position||{x:0,y:0},distance:{x:n.x-a.internals.positionAbsolute.x,y:n.y-a.internals.positionAbsolute.y},extent:a.extent,parentId:a.parentId,origin:a.origin,expandParent:a.expandParent,internals:{positionAbsolute:a.internals.positionAbsolute||{x:0,y:0}},measured:{width:a.measured.width??0,height:a.measured.height??0}})}return r}function wi({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[s,a]of t){let c=n.get(s)?.internals.userNode;c&&r.push({...c,position:a.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function b0({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},s=In(i,t);return{x:s.x-i.x,y:s.y-i.y}}function Cl({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},s=0,a=new Map,c=!1,l={x:0,y:0},u=null,d=!1,f=null,p=!1,m=!1,y=null;function b({noDragClassName:k,handleSelector:h,domNode:v,isSelectable:x,nodeId:S,nodeClickDistance:C=0}){f=Te(v);function N({x:L,y:E}){let{nodeLookup:w,nodeExtent:M,snapGrid:_,snapToGrid:z,nodeOrigin:D,onNodeDrag:O,onSelectionDrag:V,onError:H,updateNodePositions:F}=t();i={x:L,y:E};let K=!1,q=a.size>1,J=q&&M?Si(Nn(a)):null,re=q&&z?b0({dragItems:a,snapGrid:_,x:L,y:E}):null;for(let[B,R]of a){if(!w.has(B))continue;let X={x:L-R.distance.x,y:E-R.distance.y};z&&(X=re?{x:Math.round(X.x+re.x),y:Math.round(X.y+re.y)}:In(X,_));let ee=null;if(q&&M&&!R.extent&&J){let{positionAbsolute:Q}=R.internals,ie=Q.x-J.x+M[0][0],le=Q.x+R.measured.width-J.x2+M[1][0],fe=Q.y-J.y+M[0][1],Ae=Q.y+R.measured.height-J.y2+M[1][1];ee=[[ie,fe],[le,Ae]]}let{position:te,positionAbsolute:Z}=zi({nodeId:B,nextPosition:X,nodeLookup:w,nodeExtent:ee||M,nodeOrigin:D,onError:H});K=K||R.position.x!==te.x||R.position.y!==te.y,R.position=te,R.internals.positionAbsolute=Z}if(m=m||K,!!K&&(F(a,!0),y&&(o||O||!S&&V))){let[B,R]=wi({nodeId:S,dragItems:a,nodeLookup:w});o?.(y,a,B,R),O?.(y,B,R),S||V?.(y,R)}}async function P(){if(!u)return;let{transform:L,panBy:E,autoPanSpeed:w,autoPanOnNodeDrag:M}=t();if(!M){c=!1,cancelAnimationFrame(s);return}let[_,z]=Xo(l,u,w);(_!==0||z!==0)&&(i.x=(i.x??0)-_/L[2],i.y=(i.y??0)-z/L[2],await E({x:_,y:z})&&N(i)),s=requestAnimationFrame(P)}function W(L){let{nodeLookup:E,multiSelectionActive:w,nodesDraggable:M,transform:_,snapGrid:z,snapToGrid:D,selectNodesOnDrag:O,onNodeDragStart:V,onSelectionDragStart:H,unselectNodesAndEdges:F}=t();d=!0,(!O||!x)&&!w&&S&&(E.get(S)?.selected||F()),x&&O&&S&&e?.(S);let K=jn(L.sourceEvent,{transform:_,snapGrid:z,snapToGrid:D,containerBounds:u});if(i=K,a=h0(E,M,K,S),a.size>0&&(n||V||!S&&H)){let[q,J]=wi({nodeId:S,dragItems:a,nodeLookup:E});n?.(L.sourceEvent,a,q,J),V?.(L.sourceEvent,q,J),S||H?.(L.sourceEvent,J)}}let I=Yr().clickDistance(C).on("start",L=>{let{domNode:E,nodeDragThreshold:w,transform:M,snapGrid:_,snapToGrid:z}=t();u=E?.getBoundingClientRect()||null,p=!1,m=!1,y=L.sourceEvent,w===0&&W(L),i=jn(L.sourceEvent,{transform:M,snapGrid:_,snapToGrid:z,containerBounds:u}),l=tt(L.sourceEvent,u)}).on("drag",L=>{let{autoPanOnNodeDrag:E,transform:w,snapGrid:M,snapToGrid:_,nodeDragThreshold:z,nodeLookup:D}=t(),O=jn(L.sourceEvent,{transform:w,snapGrid:M,snapToGrid:_,containerBounds:u});if(y=L.sourceEvent,(L.sourceEvent.type==="touchmove"&&L.sourceEvent.touches.length>1||S&&!D.has(S))&&(p=!0),!p){if(!c&&E&&d&&(c=!0,P()),!d){let V=tt(L.sourceEvent,u),H=V.x-l.x,F=V.y-l.y;Math.sqrt(H*H+F*F)>z&&W(L)}(i.x!==O.xSnapped||i.y!==O.ySnapped)&&a&&d&&(l=tt(L.sourceEvent,u),N(O))}}).on("end",L=>{if(!d||p){p&&a.size>0&&t().updateNodePositions(a,!1);return}if(c=!1,d=!1,cancelAnimationFrame(s),a.size>0){let{nodeLookup:E,updateNodePositions:w,onNodeDragStop:M,onSelectionDragStop:_}=t();if(m&&(w(a,!1),m=!1),r||M||!S&&_){let[z,D]=wi({nodeId:S,dragItems:a,nodeLookup:E,dragging:!1});r?.(L.sourceEvent,a,z,D),M?.(L.sourceEvent,z,D),S||_?.(L.sourceEvent,D)}}}).filter(L=>{let E=L.target;return!L.button&&(!k||!nl(E,`.${k}`,v))&&(!h||nl(E,h,v))});f.call(I)}function g(){f?.on(".drag",null)}return{update:b,destroy:g}}function y0(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())Jn(r,Mn(i))>0&&o.push(i);return o}var x0=250;function w0(e,t,n,o){let r=[],i=1/0,s=y0(e,n,t+x0);for(let a of s){let c=[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:u,y:d}=Ot(a,l,l.position,!0),f=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...l,x:u,y:d}],i=f):f===i&&r.push({...l,x:u,y:d}))}}if(!r.length)return null;if(r.length>1){let a=o.type==="source"?"target":"source";return r.find(c=>c.type===a)??r[0]}return r[0]}function _l(e,t,n,o,r,i=!1){let s=o.get(e);if(!s)return null;let a=r==="strict"?s.internals.handleBounds?.[t]:[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]],c=(n?a?.find(l=>l.id===n):a?.[0])??null;return c&&i?{...c,...Ot(s,c,c.position,!0)}:c}function El(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function v0(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var Nl=()=>!0;function k0(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:s,domNode:a,nodeLookup:c,lib:l,autoPanOnConnect:u,flowId:d,panBy:f,cancelConnection:p,onConnectStart:m,onConnect:y,onConnectEnd:b,isValidConnection:g=Nl,onReconnectEnd:k,updateConnection:h,getTransform:v,getFromHandle:x,autoPanSpeed:S,dragThreshold:C=1,handleDomNode:N}){let P=Li(e.target),W=0,I,{x:L,y:E}=tt(e),w=El(i,N),M=a?.getBoundingClientRect(),_=!1;if(!M||!w)return;let z=_l(r,w,o,c,t);if(!z)return;let D=tt(e,M),O=!1,V=null,H=!1,F=null;function K(){if(!u||!M)return;let[te,Z]=Xo(D,M,S);f({x:te,y:Z}),W=requestAnimationFrame(K)}let q={...z,nodeId:r,type:w,position:z.position},J=c.get(r),B={inProgress:!0,isValid:null,from:Ot(J,q,j.Left,!0),fromHandle:q,fromPosition:q.position,fromNode:J,to:D,toHandle:null,toPosition:Ya[q.position],toNode:null,pointer:D};function R(){_=!0,h(B),m?.(e,{nodeId:r,handleId:o,handleType:w})}C===0&&R();function X(te){if(!_){let{x:Ae,y:ce}=tt(te),Qe=Ae-L,Oe=ce-E;if(!(Qe*Qe+Oe*Oe>C*C))return;R()}if(!x()||!q){ee(te);return}let Z=v();D=tt(te,M),I=w0(Pn(D,Z,!1,[1,1]),n,c,q),O||(K(),O=!0);let Q=Ml(te,{handle:I,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:s?"target":"source",isValidConnection:g,doc:P,lib:l,flowId:d,nodeLookup:c});F=Q.handleDomNode,V=Q.connection,H=v0(!!I,Q.isValid);let ie=c.get(r),le=ie?Ot(ie,q,j.Left,!0):B.from,fe={...B,from:le,isValid:H,to:Q.toHandle&&H?en({x:Q.toHandle.x,y:Q.toHandle.y},Z):D,toHandle:Q.toHandle,toPosition:H&&Q.toHandle?Q.toHandle.position:Ya[q.position],toNode:Q.toHandle?c.get(Q.toHandle.nodeId):null,pointer:D};h(fe),B=fe}function ee(te){if(!("touches"in te&&te.touches.length>0)){if(_){(I||F)&&V&&H&&y?.(V);let{inProgress:Z,...Q}=B,ie={...Q,toPosition:B.toHandle?B.toPosition:null};b?.(te,ie),i&&k?.(te,ie)}p(),cancelAnimationFrame(W),O=!1,H=!1,V=null,F=null,P.removeEventListener("mousemove",X),P.removeEventListener("mouseup",ee),P.removeEventListener("touchmove",X),P.removeEventListener("touchend",ee)}}P.addEventListener("mousemove",X),P.addEventListener("mouseup",ee),P.addEventListener("touchmove",X),P.addEventListener("touchend",ee)}function Ml(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:s,lib:a,flowId:c,isValidConnection:l=Nl,nodeLookup:u}){let d=i==="target",f=t?s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:m}=tt(e),y=s.elementFromPoint(p,m),b=y?.classList.contains(`${a}-flow__handle`)?y:f,g={handleDomNode:b,isValid:!1,connection:null,toHandle:null};if(b){let k=El(void 0,b),h=b.getAttribute("data-nodeid"),v=b.getAttribute("data-handleid"),x=b.classList.contains("connectable"),S=b.classList.contains("connectableend");if(!h||!k)return g;let C={source:d?h:o,sourceHandle:d?v:r,target:d?o:h,targetHandle:d?r:v};g.connection=C;let P=x&&S&&(n===Dt.Strict?d&&k==="source"||!d&&k==="target":h!==o||v!==r);g.isValid=P&&l(C),g.toHandle=_l(h,k,v,u,n,!0)}return g}var tr={onPointerDown:k0,isValid:Ml};function Il({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=Te(e);function i({translateExtent:a,width:c,height:l,zoomStep:u=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let m=h=>{if(h.sourceEvent.type!=="wheel"||!t)return;let v=n(),x=h.sourceEvent.ctrlKey&&zn()?10:1,S=-h.sourceEvent.deltaY*(h.sourceEvent.deltaMode===1?.05:h.sourceEvent.deltaMode?1:.002)*u,C=v[2]*Math.pow(2,S*x);t.scaleTo(C)},y=[0,0],b=h=>{(h.sourceEvent.type==="mousedown"||h.sourceEvent.type==="touchstart")&&(y=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY])},g=h=>{let v=n();if(h.sourceEvent.type!=="mousemove"&&h.sourceEvent.type!=="touchmove"||!t)return;let x=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY],S=[x[0]-y[0],x[1]-y[1]];y=x;let C=o()*Math.max(v[2],Math.log(v[2]))*(p?-1:1),N={x:v[0]-S[0]*C,y:v[1]-S[1]*C},P=[[0,0],[c,l]];t.setViewportConstrained({x:N.x,y:N.y,zoom:v[2]},P,a)},k=xi().on("start",b).on("zoom",d?g:null).on("zoom.wheel",f?m:null);r.call(k,{})}function s(){r.on("zoom",null)}return{update:i,destroy:s,pointer:Ve}}var nr=e=>({x:e.x,y:e.y,zoom:e.k}),vi=({x:e,y:t,zoom:n})=>Kn.translate(e,t).scale(n),Cn=(e,t)=>e.target.closest(`.${t}`),Pl=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),S0=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,ki=(e,t=0,n=S0,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},zl=e=>{let t=e.ctrlKey&&zn()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function C0({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:s,onPanZoomStart:a,onPanZoom:c,onPanZoomEnd:l}){return u=>{if(Cn(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(u.ctrlKey&&s){let b=Ve(u),g=zl(u),k=d*Math.pow(2,g);o.scaleTo(n,k,b,u);return}let f=u.deltaMode===1?20:1,p=r===_t.Vertical?0:u.deltaX*f,m=r===_t.Horizontal?0:u.deltaY*f;!zn()&&u.shiftKey&&r!==_t.Vertical&&(p=u.deltaY*f,m=0),o.translateBy(n,-(p/d)*i,-(m/d)*i,{internal:!0});let y=nr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,y):(e.isPanScrolling=!0,a?.(u,y)),e.panScrollTimeout=setTimeout(()=>{l?.(u,y),e.isPanScrolling=!1},150)}}function _0({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",s=!t&&i&&!o.ctrlKey,a=Cn(o,e);if(o.ctrlKey&&i&&a&&o.preventDefault(),s||a)return null;o.preventDefault(),n.call(this,o,r)}}function E0({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=nr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function N0({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&Pl(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,nr(i.transform))}}function M0({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return s=>{if(!s.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Pl(t,e.mouseButton??0)&&!e.usedRightMouseButton&&s.sourceEvent&&i(s.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let a=nr(s.transform);e.prevViewport=a,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(s.sourceEvent,a)},n?150:0)}}}function I0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:s,noWheelClassName:a,noPanClassName:c,lib:l,connectionInProgress:u}){return d=>{let f=e||t,p=n&&d.ctrlKey,m=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Cn(d,`${l}-flow__node`)||Cn(d,`${l}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||s||u&&!m||Cn(d,a)&&m||Cn(d,c)&&(!m||r&&m&&!e)||!n&&d.ctrlKey&&m)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&m||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let y=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||m)&&y}}function Rl({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:s,onPanZoomEnd:a,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),d=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(E=>{let w=E[0];w&&(d=[[0,0],[w.contentRect.width,w.contentRect.height]])}):null)?.observe(e);let p=xi().extent(()=>d).scaleExtent([t,n]).translateExtent(o),m=Te(e).call(p);v({x:r.x,y:r.y,zoom:_n(r.zoom,t,n)},[[0,0],[u.width,u.height]],o);let y=m.on("wheel.zoom"),b=m.on("dblclick.zoom");p.wheelDelta(zl);async function g(E,w){return m?new Promise(M=>{p?.interpolate(w?.interpolate==="linear"?xn:wn).transform(ki(m,w?.duration,w?.ease,()=>M(!0)),E)}):!1}function k({noWheelClassName:E,noPanClassName:w,onPaneContextMenu:M,userSelectionActive:_,panOnScroll:z,panOnDrag:D,panOnScrollMode:O,panOnScrollSpeed:V,preventScrolling:H,zoomOnPinch:F,zoomOnScroll:K,zoomOnDoubleClick:q,zoomActivationKeyPressed:J,lib:re,onTransformChange:B,connectionInProgress:R,paneClickDistance:X,selectionOnDrag:ee}){_&&!l.isZoomingOrPanning&&h();let te=z&&!J&&!_;p.clickDistance(ee?1/0:!et(X)||X<0?0:X);let Z=te?C0({zoomPanValues:l,noWheelClassName:E,d3Selection:m,d3Zoom:p,panOnScrollMode:O,panOnScrollSpeed:V,zoomOnPinch:F,onPanZoomStart:s,onPanZoom:i,onPanZoomEnd:a}):_0({noWheelClassName:E,preventScrolling:H,d3ZoomHandler:y});m.on("wheel.zoom",Z,{passive:!1});let Q=E0({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:s});p.on("start",Q);let ie=N0({zoomPanValues:l,panOnDrag:D,onPaneContextMenu:!!M,onPanZoom:i,onTransformChange:B});p.on("zoom",ie);let le=M0({zoomPanValues:l,panOnDrag:D,panOnScroll:z,onPaneContextMenu:M,onPanZoomEnd:a,onDraggingChange:c});p.on("end",le);let fe=I0({zoomActivationKeyPressed:J,panOnDrag:D,zoomOnScroll:K,panOnScroll:z,zoomOnDoubleClick:q,zoomOnPinch:F,userSelectionActive:_,noPanClassName:w,noWheelClassName:E,lib:re,connectionInProgress:R});p.filter(fe),q?m.on("dblclick.zoom",b):m.on("dblclick.zoom",null)}function h(){p.on("zoom",null)}async function v(E,w,M){let _=vi(E),z=p?.constrain()(_,w,M);return z&&await g(z),z}async function x(E,w){let M=vi(E);return await g(M,w),M}function S(E){if(m){let w=vi(E),M=m.property("__zoom");(M.k!==E.zoom||M.x!==E.x||M.y!==E.y)&&p?.transform(m,w,null,{sync:!0})}}function C(){let E=m?yi(m.node()):{x:0,y:0,k:1};return{x:E.x,y:E.y,zoom:E.k}}async function N(E,w){return m?new Promise(M=>{p?.interpolate(w?.interpolate==="linear"?xn:wn).scaleTo(ki(m,w?.duration,w?.ease,()=>M(!0)),E)}):!1}async function P(E,w){return m?new Promise(M=>{p?.interpolate(w?.interpolate==="linear"?xn:wn).scaleBy(ki(m,w?.duration,w?.ease,()=>M(!0)),E)}):!1}function W(E){p?.scaleExtent(E)}function I(E){p?.translateExtent(E)}function L(E){let w=!et(E)||E<0?0:E;p?.clickDistance(w)}return{update:k,destroy:h,setViewport:x,setViewportConstrained:v,getViewport:C,scaleTo:N,scaleBy:P,setScaleExtent:W,setTranslateExtent:I,syncViewport:S,setClickDistance:L}}var Tt;(function(e){e.Line="line",e.Handle="handle"})(Tt||(Tt={}));function P0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let s=e-t,a=n-o,c=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(c[0]=c[0]*-1),a&&i&&(c[1]=c[1]*-1),c}function ol(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function zt(e,t){return Math.max(0,t-e)}function Rt(e,t){return Math.max(0,e-t)}function Fo(e,t,n){return Math.max(0,t-e,e-n)}function rl(e,t){return e?!t:t}function z0(e,t,n,o,r,i,s,a){let{affectsX:c,affectsY:l}=t,{isHorizontal:u,isVertical:d}=t,f=u&&d,{xSnapped:p,ySnapped:m}=n,{minWidth:y,maxWidth:b,minHeight:g,maxHeight:k}=o,{x:h,y:v,width:x,height:S,aspectRatio:C}=e,N=Math.floor(u?p-e.pointerX:0),P=Math.floor(d?m-e.pointerY:0),W=x+(c?-N:N),I=S+(l?-P:P),L=-i[0]*x,E=-i[1]*S,w=Fo(W,y,b),M=Fo(I,g,k);if(s){let D=0,O=0;c&&N<0?D=zt(h+N+L,s[0][0]):!c&&N>0&&(D=Rt(h+W+L,s[1][0])),l&&P<0?O=zt(v+P+E,s[0][1]):!l&&P>0&&(O=Rt(v+I+E,s[1][1])),w=Math.max(w,D),M=Math.max(M,O)}if(a){let D=0,O=0;c&&N>0?D=Rt(h+N,a[0][0]):!c&&N<0&&(D=zt(h+W,a[1][0])),l&&P>0?O=Rt(v+P,a[0][1]):!l&&P<0&&(O=zt(v+I,a[1][1])),w=Math.max(w,D),M=Math.max(M,O)}if(r){if(u){let D=Fo(W/C,g,k)*C;if(w=Math.max(w,D),s){let O=0;!c&&!l||c&&!l&&f?O=Rt(v+E+W/C,s[1][1])*C:O=zt(v+E+(c?N:-N)/C,s[0][1])*C,w=Math.max(w,O)}if(a){let O=0;!c&&!l||c&&!l&&f?O=zt(v+W/C,a[1][1])*C:O=Rt(v+(c?N:-N)/C,a[0][1])*C,w=Math.max(w,O)}}if(d){let D=Fo(I*C,y,b)/C;if(M=Math.max(M,D),s){let O=0;!c&&!l||l&&!c&&f?O=Rt(h+I*C+L,s[1][0])/C:O=zt(h+(l?P:-P)*C+L,s[0][0])/C,M=Math.max(M,O)}if(a){let O=0;!c&&!l||l&&!c&&f?O=zt(h+I*C,a[1][0])/C:O=Rt(h+(l?P:-P)*C,a[0][0])/C,M=Math.max(M,O)}}}P=P+(P<0?M:-M),N=N+(N<0?w:-w),r&&(f?W>I*C?P=(rl(c,l)?-N:N)/C:N=(rl(c,l)?-P:P)*C:u?(P=N/C,l=c):(N=P*C,c=l));let _=c?h+N:h,z=l?v+P:v;return{width:x+(c?-N:N),height:S+(l?-P:P),x:i[0]*N*(c?-1:1)+_,y:i[1]*P*(l?-1:1)+z}}var Dl={width:0,height:0,x:0,y:0},R0={...Dl,pointerX:0,pointerY:0,aspectRatio:1};function D0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,s=e.measured.height??0,a=n[0]*i,c=n[1]*s;return[[o-a,r-c],[o+i-a,r+s-c]]}function Al({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=Te(e),s={controlDirection:ol("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function a({controlPosition:l,boundaries:u,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:m,onResizeEnd:y,shouldResize:b}){let g={...Dl},k={...R0};s={boundaries:u,resizeDirection:f,keepAspectRatio:d,controlDirection:ol(l)};let h,v=null,x=[],S,C,N,P=!1,W=Yr().on("start",I=>{let{nodeLookup:L,transform:E,snapGrid:w,snapToGrid:M,nodeOrigin:_,paneDomNode:z}=n();if(h=L.get(t),!h)return;v=z?.getBoundingClientRect()??null;let{xSnapped:D,ySnapped:O}=jn(I.sourceEvent,{transform:E,snapGrid:w,snapToGrid:M,containerBounds:v});g={width:h.measured.width??0,height:h.measured.height??0,x:h.position.x??0,y:h.position.y??0},k={...g,pointerX:D,pointerY:O,aspectRatio:g.width/g.height},S=void 0,C=tn(h.extent)?h.extent:void 0,h.parentId&&(h.extent==="parent"||h.expandParent)&&(S=L.get(h.parentId)),S&&h.extent==="parent"&&(C=[[0,0],[S.measured.width,S.measured.height]]),x=[],N=void 0;for(let[V,H]of L)if(H.parentId===t&&(x.push({id:V,position:{...H.position},extent:H.extent}),H.extent==="parent"||H.expandParent)){let F=D0(H,h,H.origin??_);N?N=[[Math.min(F[0][0],N[0][0]),Math.min(F[0][1],N[0][1])],[Math.max(F[1][0],N[1][0]),Math.max(F[1][1],N[1][1])]]:N=F}p?.(I,{...g})}).on("drag",I=>{let{transform:L,snapGrid:E,snapToGrid:w,nodeOrigin:M}=n(),_=jn(I.sourceEvent,{transform:L,snapGrid:E,snapToGrid:w,containerBounds:v}),z=[];if(!h)return;let{x:D,y:O,width:V,height:H}=g,F={},K=h.origin??M,{width:q,height:J,x:re,y:B}=z0(k,s.controlDirection,_,s.boundaries,s.keepAspectRatio,K,C,N),R=q!==V,X=J!==H,ee=re!==D&&R,te=B!==O&&X;if(!ee&&!te&&!R&&!X)return;if((ee||te||K[0]===1||K[1]===1)&&(F.x=ee?re:g.x,F.y=te?B:g.y,g.x=F.x,g.y=F.y,x.length>0)){let le=re-D,fe=B-O;for(let Ae of x)Ae.position={x:Ae.position.x-le+K[0]*(q-V),y:Ae.position.y-fe+K[1]*(J-H)},z.push(Ae)}if((R||X)&&(F.width=R&&(!s.resizeDirection||s.resizeDirection==="horizontal")?q:g.width,F.height=X&&(!s.resizeDirection||s.resizeDirection==="vertical")?J:g.height,g.width=F.width,g.height=F.height),S&&h.expandParent){let le=K[0]*(F.width??0);F.x&&F.x<le&&(g.x=le,k.x=k.x-(F.x-le));let fe=K[1]*(F.height??0);F.y&&F.y<fe&&(g.y=fe,k.y=k.y-(F.y-fe))}let Z=P0({width:g.width,prevWidth:V,height:g.height,prevHeight:H,affectsX:s.controlDirection.affectsX,affectsY:s.controlDirection.affectsY}),Q={...g,direction:Z};b?.(I,Q)!==!1&&(P=!0,m?.(I,Q),o(F,z))}).on("end",I=>{P&&(y?.(I,{...g}),r?.({...g}),P=!1)});i.call(W)}function c(){i.on(".drag",null)}return{update:a,destroy:c}}var ql=Bs(require("react"),1),Ul=Bs(Fl(),1);var Gl={},Vl=e=>{let t,n=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(Gl.env?Gl.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},Xl=e=>e?Vl(e):Vl;var{useDebugValue:j0}=ql.default,{useSyncExternalStoreWithSelector:Q0}=Ul.default,J0=e=>e;function Ui(e,t=J0,n){let o=Q0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return j0(o),o}var Yl=(e,t)=>{let n=Xl(e),o=(r,i=t)=>Ui(n,r,i);return Object.assign(o,n),o},Zl=(e,t)=>e?Yl(e,t):Yl;function be(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var eb=require("react-dom"),ar=(0,T.createContext)(null),tb=ar.Provider,kc=Ze.error001("react");function ue(e,t){let n=(0,T.useContext)(ar);if(n===null)throw new Error(kc);return Ui(n,e,t)}function ge(){let e=(0,T.useContext)(ar);if(e===null)throw new Error(kc);return(0,T.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Kl={display:"none"},nb={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Sc="react-flow__node-desc",Cc="react-flow__edge-desc",ob="react-flow__aria-live",rb=e=>e.ariaLiveMessage,ib=e=>e.ariaLabelConfig;function sb({rfId:e}){let t=ue(rb);return(0,$.jsx)("div",{id:`${ob}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:nb,children:t})}function ab({rfId:e,disableKeyboardA11y:t}){let n=ue(ib);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("div",{id:`${Sc}-${e}`,style:Kl,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,$.jsx)("div",{id:`${Cc}-${e}`,style:Kl,children:n["edge.a11yDescription.default"]}),!t&&(0,$.jsx)(sb,{rfId:e})]})}var lr=(0,T.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let s=`${e}`.split("-");return(0,$.jsx)("div",{className:ve(["react-flow__panel",n,...s]),style:o,ref:i,...r,children:t})});lr.displayName="Panel";var jl="https://reactflow.dev?utm_source=attribution";function lb({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,$.jsx)(lr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${jl}`,children:(0,$.jsx)("a",{href:jl,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var cb=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},rr=e=>e.id;function ub(e,t){return be(e.selectedNodes.map(rr),t.selectedNodes.map(rr))&&be(e.selectedEdges.map(rr),t.selectedEdges.map(rr))}function db({onSelectionChange:e}){let t=ge(),{selectedNodes:n,selectedEdges:o}=ue(cb,ub);return(0,T.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var fb=e=>!!e.onSelectionChangeHandlers;function pb({onSelectionChange:e}){let t=ue(fb);return e||t?(0,$.jsx)(db,{onSelectionChange:e}):null}var _c=[0,0],mb={x:0,y:0,zoom:1},gb=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Ql=[...gb,"rfId"],hb=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Jl={translateExtent:En,nodeOrigin:_c,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function bb(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:s,reset:a,setDefaultNodesAndEdges:c}=ue(hb,be),l=ge();(0,T.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=Jl,a()}),[]);let u=(0,T.useRef)(Jl);return(0,T.useEffect)(()=>{for(let d of Ql){let f=e[d],p=u.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?s(f):d==="ariaLabelConfig"?l.setState({ariaLabelConfig:fl(f)}):d==="fitView"?l.setState({fitViewQueued:f}):d==="fitViewOptions"?l.setState({fitViewOptions:f}):l.setState({[d]:f})))}u.current=e},Ql.map(d=>e[d])),null}function ec(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function yb(e){let[t,n]=(0,T.useState)(e==="system"?null:e);return(0,T.useEffect)(()=>{if(e!=="system"){n(e);return}let o=ec(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:ec()?.matches?"dark":"light"}var tc=typeof document<"u"?document:null;function no(e=null,t={target:tc,actInsideInputWithModifier:!0}){let[n,o]=(0,T.useState)(!1),r=(0,T.useRef)(!1),i=(0,T.useRef)(new Set([])),[s,a]=(0,T.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),u=l.reduce((d,f)=>d.concat(...f),[]);return[l,u]}return[[],[]]},[e]);return(0,T.useEffect)(()=>{let c=t?.target??tc,l=t?.actInsideInputWithModifier??!0;if(e!==null){let u=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&Hi(p))return!1;let y=oc(p.code,a);if(i.current.add(p[y]),nc(s,i.current,!1)){let b=p.composedPath?.()?.[0]||p.target,g=b?.nodeName==="BUTTON"||b?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},d=p=>{let m=oc(p.code,a);nc(s,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[m]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",u),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",u),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function nc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function oc(e,t){return t.includes(e)?"code":"key"}var xb=()=>{let e=ge();return(0,T.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:s}=e.getState();return s?(await s.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:s,panZoom:a}=e.getState(),c=eo(t,o,r,i,s,n?.padding??.1);return a?(await a.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:s}=e.getState();if(!s)return t;let{x:a,y:c}=s.getBoundingClientRect(),l={x:t.x-a,y:t.y-c},u=n.snapGrid??r,d=n.snapToGrid??i;return Pn(l,o,d,u)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),s=en(t,n);return{x:s.x+r,y:s.y+i}}}),[])};function Ec(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let s=o.get(i.id);s?s.push(i):o.set(i.id,[i])}for(let i of t){let s=o.get(i.id);if(!s){n.push(i);continue}if(s[0].type==="remove")continue;if(s[0].type==="replace"){n.push({...s[0].item});continue}let a={...i};for(let c of s)wb(c,a);n.push(a)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function wb(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Nc(e,t){return Ec(e,t)}function Mc(e,t){return Ec(e,t)}function nn(e,t){return{id:e,type:"select",selected:t}}function Dn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let s=t.has(r);!(i.selected===void 0&&!s)&&i.selected!==s&&(n&&(i.selected=s),o.push(nn(i.id,s)))}return o}function rc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let s=t.get(i.id),a=s?.internals?.userNode??s;a!==void 0&&a!==i&&n.push({id:i.id,item:i,type:"replace"}),a===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function ic(e){return{id:e.id,type:"remove"}}var vb=Ai("React Flow","https://reactflow.dev/");function kb(e,t,n={}){return gl(e,t,{...n,onError:n.onError??vb})}var sc=e=>il(e),Sb=e=>Mi(e);function Ic(e){return(0,T.forwardRef)(e)}var Pc=typeof window<"u"?T.useLayoutEffect:T.useEffect;function ac(e){let[t,n]=(0,T.useState)(BigInt(0)),[o]=(0,T.useState)(()=>Cb(()=>n(r=>r+BigInt(1))));return Pc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function Cb(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var zc=(0,T.createContext)(null);function _b({children:e}){let t=ge(),n=(0,T.useCallback)(a=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:u,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:m}=t.getState(),y=c;for(let g of a)y=typeof g=="function"?g(y):g;let b=rc({items:y,lookup:f});for(let g of m.values())b=g(b);u&&l(y),b.length>0?d?.(b):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:k,setNodes:h}=t.getState();g&&h(k)})},[]),o=ac(n),r=(0,T.useCallback)(a=>{let{edges:c=[],setEdges:l,hasDefaultEdges:u,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let m of a)p=typeof m=="function"?m(p):m;u?l(p):d&&d(rc({items:p,lookup:f}))},[]),i=ac(r),s=(0,T.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,$.jsx)(zc.Provider,{value:s,children:e})}function Eb(){let e=(0,T.useContext)(zc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var Nb=e=>!!e.panZoom;function Qi(){let e=xb(),t=ge(),n=Eb(),o=ue(Nb),r=(0,T.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),s=d=>{n.nodeQueue.push(d)},a=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),m=sc(d)?d:f.get(d.id),y=m.parentId?Ti(m.position,m.measured,m.parentId,f,p):m.position,b={...m,position:y,width:m.measured?.width??m.width,height:m.measured?.height??m.height};return Mn(b)},l=(d,f,p={replace:!1})=>{s(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&sc(b)?b:{...y,...b}}return y}))},u=(d,f,p={replace:!1})=>{a(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&Sb(b)?b:{...y,...b}}return y}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:s,setEdges:a,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[m,y,b]=p;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:m,y,zoom:b}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:m,onNodesDelete:y,onEdgesDelete:b,triggerNodeChanges:g,triggerEdgeChanges:k,onDelete:h,onBeforeDelete:v}=t.getState(),{nodes:x,edges:S}=await ll({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:m,onBeforeDelete:v}),C=S.length>0,N=x.length>0;if(C){let P=S.map(ic);b?.(S),k(P)}if(N){let P=x.map(ic);y?.(x),g(P)}return(N||C)&&h?.({nodes:x,edges:S}),{deletedNodes:x,deletedEdges:S}},getIntersectingNodes:(d,f=!0,p)=>{let m=Di(d),y=m?d:c(d),b=p!==void 0;return y?(p||t.getState().nodes).filter(g=>{let k=t.getState().nodeLookup.get(g.id);if(k&&!m&&(g.id===d.id||!k.internals.positionAbsolute))return!1;let h=Mn(b?g:k),v=Jn(h,y);return f&&v>0||v>=h.width*h.height||v>=y.width*y.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let y=Di(d)?d:c(d);if(!y)return!1;let b=Jn(y,f);return p&&b>0||b>=f.width*f.height||b>=y.width*y.height},updateNode:l,updateNodeData:(d,f,p={replace:!1})=>{l(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},updateEdge:u,updateEdgeData:(d,f,p={replace:!1})=>{u(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return Pi(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??dl();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,T.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var lc=e=>e.selected,Mb=typeof window<"u"?window:void 0;function Ib({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=ge(),{deleteElements:o}=Qi(),r=no(e,{actInsideInputWithModifier:!1}),i=no(t,{target:Mb});(0,T.useEffect)(()=>{if(r){let{edges:s,nodes:a}=n.getState();o({nodes:a.filter(lc),edges:s.filter(lc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,T.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function Pb(e){let t=ge();(0,T.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Uo(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Ze.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var cr={position:"absolute",width:"100%",height:"100%",top:0,left:0},zb=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Rb({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=_t.Free,zoomOnDoubleClick:s=!0,panOnDrag:a=!0,defaultViewport:c,translateExtent:l,minZoom:u,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:m,noWheelClassName:y,noPanClassName:b,onViewportChange:g,isControlledViewport:k,paneClickDistance:h,selectionOnDrag:v}){let x=ge(),S=(0,T.useRef)(null),{userSelectionActive:C,lib:N,connectionInProgress:P}=ue(zb,be),W=no(f),I=(0,T.useRef)();Pb(S);let L=(0,T.useCallback)(E=>{g?.({x:E[0],y:E[1],zoom:E[2]}),k||x.setState({transform:E})},[g,k]);return(0,T.useEffect)(()=>{if(S.current){I.current=Rl({domNode:S.current,minZoom:u,maxZoom:d,translateExtent:l,viewport:c,onDraggingChange:_=>x.setState(z=>z.paneDragging===_?z:{paneDragging:_}),onPanZoomStart:(_,z)=>{let{onViewportChangeStart:D,onMoveStart:O}=x.getState();O?.(_,z),D?.(z)},onPanZoom:(_,z)=>{let{onViewportChange:D,onMove:O}=x.getState();O?.(_,z),D?.(z)},onPanZoomEnd:(_,z)=>{let{onViewportChangeEnd:D,onMoveEnd:O}=x.getState();O?.(_,z),D?.(z)}});let{x:E,y:w,zoom:M}=I.current.getViewport();return x.setState({panZoom:I.current,transform:[E,w,M],domNode:S.current.closest(".react-flow")}),()=>{I.current?.destroy()}}},[]),(0,T.useEffect)(()=>{I.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:s,panOnDrag:a,zoomActivationKeyPressed:W,preventScrolling:p,noPanClassName:b,userSelectionActive:C,noWheelClassName:y,lib:N,onTransformChange:L,connectionInProgress:P,selectionOnDrag:v,paneClickDistance:h})},[e,t,n,o,r,i,s,a,W,p,b,C,y,N,L,P,v,h]),(0,$.jsx)("div",{className:"react-flow__renderer",ref:S,style:cr,children:m})}var Db=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Ab(){let{userSelectionActive:e,userSelectionRect:t}=ue(Db,be);return e&&t?(0,$.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Zi=(e,t)=>n=>{n.target===t.current&&e?.(n)},Ob=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function Tb({isSelecting:e,selectionKeyPressed:t,selectionMode:n=Qt.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:s,onSelectionStart:a,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:m,children:y}){let b=(0,T.useRef)(0),g=ge(),{userSelectionActive:k,elementsSelectable:h,dragging:v,panBy:x,autoPanSpeed:S}=ue(Ob,be),C=h&&(e||k),N=(0,T.useRef)(null),P=(0,T.useRef)(),W=(0,T.useRef)(new Set),I=(0,T.useRef)(new Set),L=(0,T.useRef)(!1),E=(0,T.useRef)(!1),w=(0,T.useRef)({x:0,y:0}),M=(0,T.useRef)(!1),_=R=>{if(E.current||L.current||g.getState().connection.inProgress){E.current=!1,L.current=!1;return}l?.(R),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},z=R=>{if(Array.isArray(o)&&o?.includes(2)){R.preventDefault();return}u?.(R)},D=d?R=>d(R):void 0,O=R=>{E.current&&(R.stopPropagation(),E.current=!1)},V=R=>{let{domNode:X,transform:ee}=g.getState();if(P.current=X?.getBoundingClientRect(),!P.current)return;let te=R.target===N.current;if(!te&&!!R.target.closest(".nokey")||!e||!(s&&te||t)||R.button!==0||!R.isPrimary)return;R.target?.setPointerCapture?.(R.pointerId),E.current=!1;let{x:ie,y:le}=tt(R.nativeEvent,P.current),fe=Pn({x:ie,y:le},ee);g.setState({userSelectionRect:{width:0,height:0,startX:fe.x,startY:fe.y,x:ie,y:le}}),te||(R.stopPropagation(),R.preventDefault())};function H(R,X){let{userSelectionRect:ee}=g.getState();if(!ee)return;let{transform:te,nodeLookup:Z,edgeLookup:Q,connectionLookup:ie,triggerNodeChanges:le,triggerEdgeChanges:fe,defaultEdgeOptions:Ae}=g.getState(),ce={x:ee.startX,y:ee.startY},{x:Qe,y:Oe}=en(ce,te),ot={startX:ce.x,startY:ce.y,x:R<Qe?R:Qe,y:X<Oe?X:Oe,width:Math.abs(R-Qe),height:Math.abs(X-Oe)},yt=W.current,ut=I.current;W.current=new Set(Go(Z,ot,te,n===Qt.Partial,!0).map(We=>We.id)),I.current=new Set;let rt=Ae?.selectable??!0;for(let We of W.current){let Fe=ie.get(We);if(Fe)for(let{edgeId:Je}of Fe.values()){let we=Q.get(Je);we&&(we.selectable??rt)&&I.current.add(Je)}}if(!$i(yt,W.current)){let We=Dn(Z,W.current,!0);le(We)}if(!$i(ut,I.current)){let We=Dn(Q,I.current);fe(We)}g.setState({userSelectionRect:ot,userSelectionActive:!0,nodesSelectionActive:!1})}function F(){if(!r||!P.current)return;let[R,X]=Xo(w.current,P.current,S);x({x:R,y:X}).then(ee=>{if(!E.current||!ee){b.current=requestAnimationFrame(F);return}let{x:te,y:Z}=w.current;H(te,Z),b.current=requestAnimationFrame(F)})}let K=()=>{cancelAnimationFrame(b.current),b.current=0,M.current=!1};(0,T.useEffect)(()=>()=>K(),[]);let q=R=>{let{userSelectionRect:X,transform:ee,resetSelectedElements:te}=g.getState();if(!P.current||!X)return;let{x:Z,y:Q}=tt(R.nativeEvent,P.current);w.current={x:Z,y:Q};let ie=en({x:X.startX,y:X.startY},ee);if(!E.current){let le=t?0:i;if(Math.hypot(Z-ie.x,Q-ie.y)<=le)return;te(),a?.(R)}E.current=!0,M.current||(F(),M.current=!0),H(Z,Q)},J=R=>{if(!C){R.target===N.current&&g.getState().connection.inProgress&&(L.current=!0);return}R.button===0&&(R.target?.releasePointerCapture?.(R.pointerId),!k&&R.target===N.current&&g.getState().userSelectionRect&&_?.(R),g.setState({userSelectionActive:!1,userSelectionRect:null}),E.current&&(c?.(R),g.setState({nodesSelectionActive:W.current.size>0})),K())},re=R=>{R.target?.releasePointerCapture?.(R.pointerId),K()},B=o===!0||Array.isArray(o)&&o.includes(0);return(0,$.jsxs)("div",{className:ve(["react-flow__pane",{draggable:B,dragging:v,selection:e}]),onClick:C?void 0:Zi(_,N),onContextMenu:Zi(z,N),onWheel:Zi(D,N),onPointerEnter:C?void 0:f,onPointerMove:C?q:p,onPointerUp:J,onPointerCancel:C?re:void 0,onPointerDownCapture:C?V:void 0,onClickCapture:C?O:void 0,onPointerLeave:m,ref:N,style:cr,children:[y,(0,$.jsx)(Ab,{})]})}function ji({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:s,nodeLookup:a,onError:c}=t.getState(),l=a.get(e);if(!l){c?.("012",Ze.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&s)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Rc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:s}){let a=ge(),[c,l]=(0,T.useState)(!1),u=(0,T.useRef)();return(0,T.useEffect)(()=>{if(!t)return u.current=Cl({getStoreItems:()=>a.getState(),onNodeMouseDown:d=>{ji({id:d,store:a,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,a,e]),(0,T.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:s})},[n,o,t,i,e,r,s]),c}var $b=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Dc(){let e=ge();return(0,T.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:s,onError:a,updateNodePositions:c,nodeLookup:l,nodeOrigin:u}=e.getState(),d=new Map,f=$b(s),p=r?i[0]:5,m=r?i[1]:5,y=n.direction.x*p*n.factor,b=n.direction.y*m*n.factor;for(let[,g]of l){if(!f(g))continue;let k={x:g.internals.positionAbsolute.x+y,y:g.internals.positionAbsolute.y+b};r&&(k=In(k,i));let{position:h,positionAbsolute:v}=zi({nodeId:g.id,nextPosition:k,nodeLookup:l,nodeExtent:o,nodeOrigin:u,onError:a});g.position=h,g.internals.positionAbsolute=v,d.set(g.id,g)}c(d)},[])}var Ji=(0,T.createContext)(null),Lb=Ji.Provider;Ji.Consumer;var Ac=()=>(0,T.useContext)(Ji),Hb=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Oc=(0,T.createContext)(null);function Bb({children:e}){let t=ue(Hb,be);return(0,$.jsx)(Oc.Provider,{value:t,children:e})}function Wb(){let e=(0,T.useContext)(Oc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var Fb={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Vb=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:s}=o,{fromHandle:a,toHandle:c,isValid:l}=s;if(!a&&!r)return Fb;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:a?.nodeId===e&&a?.id===t&&a?.type===n,connectingTo:u,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Dt.Strict?a?.type!==n:e!==a?.nodeId||t!==a?.id,connectionInProcess:!!a,clickConnectionInProcess:!!r,valid:u&&l}};function Gb({type:e="source",position:t=j.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:s,onConnect:a,children:c,className:l,onMouseDown:u,onTouchStart:d,...f},p){let m=s||null,y=e==="target",b=ge(),g=Ac(),{connectOnClick:k,noPanClassName:h,rfId:v}=Wb(),{connectingFrom:x,connectingTo:S,clickConnecting:C,isPossibleEndHandle:N,connectionInProcess:P,clickConnectionInProcess:W,valid:I}=ue(Vb(g,m,e),be);g||b.getState().onError?.("010",Ze.error010());let L=M=>{let{defaultEdgeOptions:_,onConnect:z,hasDefaultEdges:D}=b.getState(),O={..._,...M};if(D){let{edges:V,setEdges:H,onError:F}=b.getState();H(kb(O,V,{onError:F}))}z?.(O),a?.(O)},E=M=>{if(!g)return;let _=Bi(M.nativeEvent);if(r&&(_&&M.button===0||!_)){let z=b.getState();tr.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:z.autoPanOnConnect,connectionMode:z.connectionMode,connectionRadius:z.connectionRadius,domNode:z.domNode,nodeLookup:z.nodeLookup,lib:z.lib,isTarget:y,handleId:m,nodeId:g,flowId:z.rfId,panBy:z.panBy,cancelConnection:z.cancelConnection,onConnectStart:z.onConnectStart,onConnectEnd:(...D)=>b.getState().onConnectEnd?.(...D),updateConnection:z.updateConnection,onConnect:L,isValidConnection:n||((...D)=>b.getState().isValidConnection?.(...D)??!0),getTransform:()=>b.getState().transform,getFromHandle:()=>b.getState().connection.fromHandle,autoPanSpeed:z.autoPanSpeed,dragThreshold:z.connectionDragThreshold})}_?u?.(M):d?.(M)},w=M=>{let{onClickConnectStart:_,onClickConnectEnd:z,connectionClickStartHandle:D,connectionMode:O,isValidConnection:V,lib:H,rfId:F,nodeLookup:K,connection:q}=b.getState();if(!g||!D&&!r)return;if(!D){_?.(M.nativeEvent,{nodeId:g,handleId:m,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:g,type:e,id:m}});return}let J=Li(M.target),re=n||V,{connection:B,isValid:R}=tr.isValid(M.nativeEvent,{handle:{nodeId:g,id:m,type:e},connectionMode:O,fromNodeId:D.nodeId,fromHandleId:D.id||null,fromType:D.type,isValidConnection:re,flowId:F,doc:J,lib:H,nodeLookup:K});R&&B&&L(B);let X=structuredClone(q);delete X.inProgress,X.toPosition=X.toHandle?X.toHandle.position:null,z?.(M,X),b.setState({connectionClickStartHandle:null})};return(0,$.jsx)("div",{"data-handleid":m,"data-nodeid":g,"data-handlepos":t,"data-id":`${v}-${g}-${m}-${e}`,className:ve(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",h,l,{source:!y,target:y,connectable:o,connectablestart:r,connectableend:i,clickconnecting:C,connectingfrom:x,connectingto:S,valid:I,connectionindicator:o&&(!P||N)&&(P||W?i:r)}]),onMouseDown:E,onTouchStart:E,onClick:k?w:void 0,ref:p,...f,children:c})}var on=(0,T.memo)(Ic(Gb));function Xb({data:e,isConnectable:t,sourcePosition:n=j.Bottom}){return(0,$.jsxs)($.Fragment,{children:[e?.label,(0,$.jsx)(on,{type:"source",position:n,isConnectable:t})]})}function Yb({data:e,isConnectable:t,targetPosition:n=j.Top,sourcePosition:o=j.Bottom}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(on,{type:"target",position:n,isConnectable:t}),e?.label,(0,$.jsx)(on,{type:"source",position:o,isConnectable:t})]})}function qb(){return null}function Ub({data:e,isConnectable:t,targetPosition:n=j.Top}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(on,{type:"target",position:n,isConnectable:t}),e?.label]})}var sr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},cc={input:Xb,default:Yb,output:Ub,group:qb};function Zb(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Kb=e=>{let{width:t,height:n,x:o,y:r}=Nn(e.nodeLookup,{filter:i=>!!i.selected});return{width:et(t)?t:null,height:et(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function jb({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=ge(),{width:r,height:i,transformString:s,userSelectionActive:a}=ue(Kb,be),c=Dc(),l=(0,T.useRef)(null);(0,T.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let u=!a&&r!==null&&i!==null;if(Rc({nodeRef:l,disabled:!u}),!u)return null;let d=e?p=>{let m=o.getState().nodes.filter(y=>y.selected);e(p,m)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(sr,p.key)&&(p.preventDefault(),c({direction:sr[p.key],factor:p.shiftKey?4:1}))};return(0,$.jsx)("div",{className:ve(["react-flow__nodesselection","react-flow__container",t]),style:{transform:s},children:(0,$.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var uc=typeof window<"u"?window:void 0,Qb=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Tc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,paneClickDistance:a,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:u,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:m,panActivationKeyCode:y,zoomActivationKeyCode:b,elementsSelectable:g,zoomOnScroll:k,zoomOnPinch:h,panOnScroll:v,panOnScrollSpeed:x,panOnScrollMode:S,zoomOnDoubleClick:C,panOnDrag:N,autoPanOnSelection:P,defaultViewport:W,translateExtent:I,minZoom:L,maxZoom:E,preventScrolling:w,onSelectionContextMenu:M,noWheelClassName:_,noPanClassName:z,disableKeyboardA11y:D,onViewportChange:O,isControlledViewport:V}){let{nodesSelectionActive:H,userSelectionActive:F}=ue(Qb,be),K=no(l,{target:uc}),q=no(y,{target:uc}),J=q||N,re=q||v,B=u&&J!==!0,R=K||F||B;return Ib({deleteKeyCode:c,multiSelectionKeyCode:m}),(0,$.jsx)(Rb,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:k,zoomOnPinch:h,panOnScroll:re,panOnScrollSpeed:x,panOnScrollMode:S,zoomOnDoubleClick:C,panOnDrag:!K&&J,defaultViewport:W,translateExtent:I,minZoom:L,maxZoom:E,zoomActivationKeyCode:b,preventScrolling:w,noWheelClassName:_,noPanClassName:z,onViewportChange:O,isControlledViewport:V,paneClickDistance:a,selectionOnDrag:B,children:(0,$.jsxs)(Tb,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,panOnDrag:J,autoPanOnSelection:P,isSelecting:!!R,selectionMode:d,selectionKeyPressed:K,paneClickDistance:a,selectionOnDrag:B,children:[e,H&&(0,$.jsx)(jb,{onSelectionContextMenu:M,noPanClassName:z,disableKeyboardA11y:D})]})})}Tc.displayName="FlowRenderer";var Jb=(0,T.memo)(Tc),ey=e=>t=>e?Go(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function ty(e){return ue((0,T.useCallback)(ey(e),[e]),be)}var ny=e=>e.updateNodeInternals;function oy(){let e=ue(ny),[t]=(0,T.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,T.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function ry({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=ge(),i=(0,T.useRef)(null),s=(0,T.useRef)(null),a=(0,T.useRef)(e.sourcePosition),c=(0,T.useRef)(e.targetPosition),l=(0,T.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,T.useEffect)(()=>{i.current&&!e.hidden&&(!u||s.current!==i.current)&&(s.current&&o?.unobserve(s.current),o?.observe(i.current),s.current=i.current)},[u,e.hidden]),(0,T.useEffect)(()=>()=>{s.current&&(o?.unobserve(s.current),s.current=null)},[]),(0,T.useEffect)(()=>{if(i.current){let d=l.current!==t,f=a.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(l.current=t,a.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function iy({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:s,nodesDraggable:a,elementsSelectable:c,nodesConnectable:l,nodesFocusable:u,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:m,rfId:y,nodeTypes:b,nodeClickDistance:g,onError:k}){let{node:h,internals:v,isParent:x}=ue(R=>{let X=R.nodeLookup.get(e),ee=R.parentLookup.has(e);return{node:X,internals:X.internals,isParent:ee}},be),S=h.type||"default",C=b?.[S]||cc[S];C===void 0&&(k?.("003",Ze.error003(S)),S="default",C=b?.default||cc.default);let N=!!(h.draggable||a&&typeof h.draggable>"u"),P=!!(h.selectable||c&&typeof h.selectable>"u"),W=!!(h.connectable||l&&typeof h.connectable>"u"),I=!!(h.focusable||u&&typeof h.focusable>"u"),L=ge(),E=Oi(h),w=ry({node:h,nodeType:S,hasDimensions:E,resizeObserver:d}),M=Rc({nodeRef:w,disabled:h.hidden||!N,noDragClassName:f,handleSelector:h.dragHandle,nodeId:e,isSelectable:P,nodeClickDistance:g}),_=Dc();if(h.hidden)return null;let z=lt(h),D=Zb(h),O=P||N||t||n||o||r,V=n?R=>n(R,{...v.userNode}):void 0,H=o?R=>o(R,{...v.userNode}):void 0,F=r?R=>r(R,{...v.userNode}):void 0,K=i?R=>i(R,{...v.userNode}):void 0,q=s?R=>s(R,{...v.userNode}):void 0,J=R=>{let{selectNodesOnDrag:X,nodeDragThreshold:ee}=L.getState();P&&(!X||!N||ee>0)&&ji({id:e,store:L,nodeRef:w}),t&&t(R,{...v.userNode})},re=R=>{if(!(Hi(R.nativeEvent)||m)){if(Ci.includes(R.key)&&P){let X=R.key==="Escape";ji({id:e,store:L,unselect:X,nodeRef:w})}else if(N&&h.selected&&Object.prototype.hasOwnProperty.call(sr,R.key)){R.preventDefault();let{ariaLabelConfig:X}=L.getState();L.setState({ariaLiveMessage:X["node.a11yDescription.ariaLiveMessage"]({direction:R.key.replace("Arrow","").toLowerCase(),x:~~v.positionAbsolute.x,y:~~v.positionAbsolute.y})}),_({direction:sr[R.key],factor:R.shiftKey?4:1})}}},B=()=>{if(m||!w.current?.matches(":focus-visible"))return;let{transform:R,width:X,height:ee,autoPanOnNodeFocus:te,setCenter:Z}=L.getState();if(!te)return;Go(new Map([[e,h]]),{x:0,y:0,width:X,height:ee},R,!0).length>0||Z(h.position.x+z.width/2,h.position.y+z.height/2,{zoom:R[2]})};return(0,$.jsx)("div",{className:ve(["react-flow__node",`react-flow__node-${S}`,{[p]:N},h.className,{selected:h.selected,selectable:P,parent:x,draggable:N,dragging:M}]),ref:w,style:{zIndex:v.z,transform:`translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,pointerEvents:O?"all":"none",visibility:E?"visible":"hidden",...h.style,...D},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:H,onMouseLeave:F,onContextMenu:K,onClick:J,onDoubleClick:q,onKeyDown:I?re:void 0,tabIndex:I?0:void 0,onFocus:I?B:void 0,role:h.ariaRole??(I?"group":void 0),"aria-roledescription":"node","aria-describedby":m?void 0:`${Sc}-${y}`,"aria-label":h.ariaLabel,...h.domAttributes,children:(0,$.jsx)(Lb,{value:e,children:(0,$.jsx)(C,{id:e,data:h.data,type:S,positionAbsoluteX:v.positionAbsolute.x,positionAbsoluteY:v.positionAbsolute.y,selected:h.selected??!1,selectable:P,draggable:N,deletable:h.deletable??!0,isConnectable:W,sourcePosition:h.sourcePosition,targetPosition:h.targetPosition,dragging:M,dragHandle:h.dragHandle,zIndex:v.z,parentId:h.parentId,...z})})})}var sy=(0,T.memo)(iy),ay=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function $c(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=ue(ay,be),i=ty(e.onlyRenderVisibleElements),s=oy();return(0,$.jsx)("div",{className:"react-flow__nodes",style:cr,children:i.map(a=>(0,$.jsx)(sy,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:s,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},a))})}$c.displayName="NodeRenderer";var ly=(0,T.memo)($c);function cy(e){return ue((0,T.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),s=n.nodeLookup.get(r.target);i&&s&&ml({sourceNode:i,targetNode:s,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),be)}var uy=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,$.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},dy=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,$.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},dc={[At.Arrow]:uy,[At.ArrowClosed]:dy};function fy(e){let t=ge();return(0,T.useMemo)(()=>Object.prototype.hasOwnProperty.call(dc,e)?dc[e]:(t.getState().onError?.("009",Ze.error009(e)),null),[e])}var py=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:s,orient:a="auto-start-reverse"})=>{let c=fy(t);return c?(0,$.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:a,refX:"0",refY:"0",children:(0,$.jsx)(c,{color:n,strokeWidth:s})}):null},Lc=({defaultColor:e,rfId:t})=>{let n=ue(i=>i.edges),o=ue(i=>i.defaultEdgeOptions),r=(0,T.useMemo)(()=>bl(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,$.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,$.jsx)("defs",{children:r.map(i=>(0,$.jsx)(py,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Lc.displayName="MarkerDefinitions";var my=(0,T.memo)(Lc);function Hc({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:s=[2,4],labelBgBorderRadius:a=2,children:c,className:l,...u}){let[d,f]=(0,T.useState)({x:1,y:0,width:0,height:0}),p=ve(["react-flow__edge-textwrapper",l]),m=(0,T.useRef)(null);return(0,T.useEffect)(()=>{if(m.current){let y=m.current.getBBox();f({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,$.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...u,children:[r&&(0,$.jsx)("rect",{width:d.width+2*s[0],x:-s[0],y:-s[1],height:d.height+2*s[1],className:"react-flow__edge-textbg",style:i,rx:a,ry:a}),(0,$.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:m,style:o,children:n}),c]}):null}Hc.displayName="EdgeText";var gy=(0,T.memo)(Hc);function ur({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c,interactionWidth:l=20,...u}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("path",{...u,d:e,fill:"none",className:ve(["react-flow__edge-path",u.className])}),l?(0,$.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&et(t)&&et(n)?(0,$.jsx)(gy,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c}):null]})}function fc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===j.Left||e===j.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Bc({sourceX:e,sourceY:t,sourcePosition:n=j.Bottom,targetX:o,targetY:r,targetPosition:i=j.Top}){let[s,a]=fc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=fc({pos:i,x1:o,y1:r,x2:e,y2:t}),[u,d,f,p]=Zo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:a,targetControlX:c,targetControlY:l});return[`M${e},${t} C${s},${a} ${c},${l} ${o},${r}`,u,d,f,p]}function Wc(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s,targetPosition:a,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})=>{let[k,h,v]=Bc({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a}),x=e.isInternal?void 0:t;return(0,$.jsx)(ur,{id:x,path:k,labelX:h,labelY:v,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})})}var hy=Wc({isInternal:!1}),Fc=Wc({isInternal:!0});hy.displayName="SimpleBezierEdge";Fc.displayName="SimpleBezierEdgeInternal";function Vc(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,sourcePosition:p=j.Bottom,targetPosition:m=j.Top,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:k})=>{let[h,v,x]=to({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:m,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),S=e.isInternal?void 0:t;return(0,$.jsx)(ur,{id:S,path:h,labelX:v,labelY:x,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:y,markerStart:b,interactionWidth:k})})}var Gc=Vc({isInternal:!1}),Xc=Vc({isInternal:!0});Gc.displayName="SmoothStepEdge";Xc.displayName="SmoothStepEdgeInternal";function Yc(e){return(0,T.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,$.jsx)(Gc,{...n,id:o,pathOptions:(0,T.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var by=Yc({isInternal:!1}),qc=Yc({isInternal:!0});by.displayName="StepEdge";qc.displayName="StepEdgeInternal";function Uc(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})=>{let[b,g,k]=jo({sourceX:n,sourceY:o,targetX:r,targetY:i}),h=e.isInternal?void 0:t;return(0,$.jsx)(ur,{id:h,path:b,labelX:g,labelY:k,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})})}var yy=Uc({isInternal:!1}),Zc=Uc({isInternal:!0});yy.displayName="StraightEdge";Zc.displayName="StraightEdgeInternal";function Kc(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s=j.Bottom,targetPosition:a=j.Top,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:k})=>{let[h,v,x]=Ko({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a,curvature:g?.curvature}),S=e.isInternal?void 0:t;return(0,$.jsx)(ur,{id:S,path:h,labelX:v,labelY:x,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:k})})}var xy=Kc({isInternal:!1}),jc=Kc({isInternal:!0});xy.displayName="BezierEdge";jc.displayName="BezierEdgeInternal";var pc={default:jc,straight:Zc,step:qc,smoothstep:Xc,simplebezier:Fc},mc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},wy=(e,t,n)=>n===j.Left?e-t:n===j.Right?e+t:e,vy=(e,t,n)=>n===j.Top?e-t:n===j.Bottom?e+t:e,gc="react-flow__edgeupdater";function hc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:s,type:a}){return(0,$.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:s,className:ve([gc,`${gc}-${a}`]),cx:wy(t,o,e),cy:vy(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function ky({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:s,sourcePosition:a,targetPosition:c,onReconnect:l,onReconnectStart:u,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let m=ge(),y=(v,x)=>{if(v.button!==0)return;let{autoPanOnConnect:S,domNode:C,connectionMode:N,connectionRadius:P,lib:W,onConnectStart:I,cancelConnection:L,nodeLookup:E,rfId:w,panBy:M,updateConnection:_}=m.getState(),z=x.type==="target",D=(H,F)=>{f(!1),d?.(H,n,x.type,F)},O=H=>l?.(n,H),V=(H,F)=>{f(!0),u?.(v,n,x.type),I?.(H,F)};tr.onPointerDown(v.nativeEvent,{autoPanOnConnect:S,connectionMode:N,connectionRadius:P,domNode:C,handleId:x.id,nodeId:x.nodeId,nodeLookup:E,isTarget:z,edgeUpdaterType:x.type,lib:W,flowId:w,cancelConnection:L,panBy:M,isValidConnection:(...H)=>m.getState().isValidConnection?.(...H)??!0,onConnect:O,onConnectStart:V,onConnectEnd:(...H)=>m.getState().onConnectEnd?.(...H),onReconnectEnd:D,updateConnection:_,getTransform:()=>m.getState().transform,getFromHandle:()=>m.getState().connection.fromHandle,dragThreshold:m.getState().connectionDragThreshold,handleDomNode:v.currentTarget})},b=v=>y(v,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=v=>y(v,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),k=()=>p(!0),h=()=>p(!1);return(0,$.jsxs)($.Fragment,{children:[(e===!0||e==="source")&&(0,$.jsx)(hc,{position:a,centerX:o,centerY:r,radius:t,onMouseDown:b,onMouseEnter:k,onMouseOut:h,type:"source"}),(e===!0||e==="target")&&(0,$.jsx)(hc,{position:c,centerX:i,centerY:s,radius:t,onMouseDown:g,onMouseEnter:k,onMouseOut:h,type:"target"})]})}function Sy({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:m,edgeTypes:y,noPanClassName:b,onError:g,disableKeyboardA11y:k}){let h=ue(Z=>Z.edgeLookup.get(e)),v=ue(Z=>Z.defaultEdgeOptions);h=v?{...v,...h}:h;let x=h.type||"default",S=y?.[x]||pc[x];S===void 0&&(g?.("011",Ze.error011(x)),x="default",S=y?.default||pc.default);let C=!!(h.focusable||t&&typeof h.focusable>"u"),N=typeof d<"u"&&(h.reconnectable||n&&typeof h.reconnectable>"u"),P=!!(h.selectable||o&&typeof h.selectable>"u"),W=(0,T.useRef)(null),[I,L]=(0,T.useState)(!1),[E,w]=(0,T.useState)(!1),M=ge(),{zIndex:_=h.zIndex,sourceX:z,sourceY:D,targetX:O,targetY:V,sourcePosition:H,targetPosition:F}=ue((0,T.useCallback)(Z=>{let Q=Z.nodeLookup.get(h.source),ie=Z.nodeLookup.get(h.target);if(!Q||!ie)return mc;let le=hl({id:e,sourceNode:Q,targetNode:ie,sourceHandle:h.sourceHandle||null,targetHandle:h.targetHandle||null,connectionMode:Z.connectionMode,onError:g}),fe=pl({selected:h.selected,zIndex:h.zIndex,sourceNode:Q,targetNode:ie,elevateOnSelect:Z.elevateEdgesOnSelect,zIndexMode:Z.zIndexMode});return{...le||mc,zIndex:fe}},[h.source,h.target,h.sourceHandle,h.targetHandle,h.selected,h.zIndex]),be),K=(0,T.useMemo)(()=>h.markerStart?`url('#${Qo(h.markerStart,m)}')`:void 0,[h.markerStart,m]),q=(0,T.useMemo)(()=>h.markerEnd?`url('#${Qo(h.markerEnd,m)}')`:void 0,[h.markerEnd,m]);if(h.hidden||z===null||D===null||O===null||V===null)return null;let J=Z=>{let{addSelectedEdges:Q,unselectNodesAndEdges:ie,multiSelectionActive:le}=M.getState();P&&(M.setState({nodesSelectionActive:!1}),h.selected&&le?(ie({nodes:[],edges:[h]}),W.current?.blur()):Q([e])),r&&r(Z,h)},re=i?Z=>{i(Z,{...h})}:void 0,B=s?Z=>{s(Z,{...h})}:void 0,R=a?Z=>{a(Z,{...h})}:void 0,X=c?Z=>{c(Z,{...h})}:void 0,ee=l?Z=>{l(Z,{...h})}:void 0,te=Z=>{if(!k&&Ci.includes(Z.key)&&P){let{unselectNodesAndEdges:Q,addSelectedEdges:ie}=M.getState();Z.key==="Escape"?(W.current?.blur(),Q({edges:[h]})):ie([e])}};return(0,$.jsx)("svg",{style:{zIndex:_},children:(0,$.jsxs)("g",{className:ve(["react-flow__edge",`react-flow__edge-${x}`,h.className,b,{selected:h.selected,animated:h.animated,inactive:!P&&!r,updating:I,selectable:P}]),onClick:J,onDoubleClick:re,onContextMenu:B,onMouseEnter:R,onMouseMove:X,onMouseLeave:ee,onKeyDown:C?te:void 0,tabIndex:C?0:void 0,role:h.ariaRole??(C?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":h.ariaLabel===null?void 0:h.ariaLabel||`Edge from ${h.source} to ${h.target}`,"aria-describedby":C?`${Cc}-${m}`:void 0,ref:W,...h.domAttributes,children:[!E&&(0,$.jsx)(S,{id:e,source:h.source,target:h.target,type:h.type,selected:h.selected,animated:h.animated,selectable:P,deletable:h.deletable??!0,label:h.label,labelStyle:h.labelStyle,labelShowBg:h.labelShowBg,labelBgStyle:h.labelBgStyle,labelBgPadding:h.labelBgPadding,labelBgBorderRadius:h.labelBgBorderRadius,sourceX:z,sourceY:D,targetX:O,targetY:V,sourcePosition:H,targetPosition:F,data:h.data,style:h.style,sourceHandleId:h.sourceHandle,targetHandleId:h.targetHandle,markerStart:K,markerEnd:q,pathOptions:"pathOptions"in h?h.pathOptions:void 0,interactionWidth:h.interactionWidth}),N&&(0,$.jsx)(ky,{edge:h,isReconnectable:N,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:z,sourceY:D,targetX:O,targetY:V,sourcePosition:H,targetPosition:F,setUpdateHover:L,setReconnecting:w})]})})}var Cy=(0,T.memo)(Sy),_y=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Qc({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:s,onEdgeMouseEnter:a,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:u,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,disableKeyboardA11y:y}){let{edgesFocusable:b,edgesReconnectable:g,elementsSelectable:k,onError:h}=ue(_y,be),v=cy(t);return(0,$.jsxs)("div",{className:"react-flow__edges",children:[(0,$.jsx)(my,{defaultColor:e,rfId:n}),v.map(x=>(0,$.jsx)(Cy,{id:x,edgesFocusable:b,edgesReconnectable:g,elementsSelectable:k,noPanClassName:r,onReconnect:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,onClick:u,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,rfId:n,onError:h,edgeTypes:o,disableKeyboardA11y:y},x))]})}Qc.displayName="EdgeRenderer";var Ey=(0,T.memo)(Qc),bc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Ny({children:e}){let t=ge(),n=(0,T.useRef)(null),[o]=(0,T.useState)(()=>t.getState().transform);return Pc(()=>{let r=null,i=()=>{let s=t.getState().transform;r&&s[0]===r[0]&&s[1]===r[1]&&s[2]===r[2]||(r=s,n.current&&(n.current.style.transform=bc(s)))};return i(),t.subscribe(i)},[t]),(0,$.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:bc(o)},children:e})}function My(e){let t=Qi(),n=(0,T.useRef)(!1);(0,T.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Iy=e=>e.panZoom?.syncViewport;function Py(e){let t=ue(Iy),n=ge();return(0,T.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function yc(e){return e.connection.inProgress?{...e.connection,to:Pn(e.connection.to,e.transform)}:{...e.connection}}function zy(e){return e?n=>{let o=yc(n);return e(o)}:yc}function Ry(e){let t=zy(e);return ue(t,be)}var Dy=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Ay({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:s,isValid:a,inProgress:c}=ue(Dy,be);return!(i&&r&&c)?null:(0,$.jsx)("svg",{style:e,width:i,height:s,className:"react-flow__connectionline react-flow__container",children:(0,$.jsx)("g",{className:ve(["react-flow__connection",Ni(a)]),children:(0,$.jsx)(Jc,{style:t,type:n,CustomComponent:o,isValid:a})})})}var Jc=({style:e,type:t=mt.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:s,fromHandle:a,fromPosition:c,to:l,toNode:u,toHandle:d,toPosition:f,pointer:p}=Ry();if(!r)return;if(n)return(0,$.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:s,fromHandle:a,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:f,connectionStatus:Ni(o),toNode:u,toHandle:d,pointer:p});let m="",y={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case mt.Bezier:[m]=Ko(y);break;case mt.SimpleBezier:[m]=Bc(y);break;case mt.Step:[m]=to({...y,borderRadius:0});break;case mt.SmoothStep:[m]=to(y);break;default:[m]=jo(y)}return(0,$.jsx)("path",{d:m,fill:"none",className:"react-flow__connection-path",style:e})};Jc.displayName="ConnectionLine";var Oy={};function xc(e=Oy){let t=(0,T.useRef)(e),n=ge();(0,T.useEffect)(()=>{},[e])}function Ty(){let e=ge(),t=(0,T.useRef)(!1);(0,T.useEffect)(()=>{},[])}function eu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:s,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:m,connectionLineStyle:y,connectionLineComponent:b,connectionLineContainerStyle:g,selectionKeyCode:k,selectionOnDrag:h,selectionMode:v,multiSelectionKeyCode:x,panActivationKeyCode:S,zoomActivationKeyCode:C,deleteKeyCode:N,onlyRenderVisibleElements:P,elementsSelectable:W,defaultViewport:I,translateExtent:L,minZoom:E,maxZoom:w,preventScrolling:M,defaultMarkerColor:_,zoomOnScroll:z,zoomOnPinch:D,panOnScroll:O,panOnScrollSpeed:V,panOnScrollMode:H,zoomOnDoubleClick:F,panOnDrag:K,autoPanOnSelection:q,onPaneClick:J,onPaneMouseEnter:re,onPaneMouseMove:B,onPaneMouseLeave:R,onPaneScroll:X,onPaneContextMenu:ee,paneClickDistance:te,nodeClickDistance:Z,onEdgeContextMenu:Q,onEdgeMouseEnter:ie,onEdgeMouseMove:le,onEdgeMouseLeave:fe,reconnectRadius:Ae,onReconnect:ce,onReconnectStart:Qe,onReconnectEnd:Oe,noDragClassName:ot,noWheelClassName:yt,noPanClassName:ut,disableKeyboardA11y:rt,nodeExtent:We,rfId:Fe,viewport:Je,onViewportChange:we,nodesDraggable:dn}){return xc(e),xc(t),Ty(),My(n),Py(Je),(0,$.jsx)(Jb,{onPaneClick:J,onPaneMouseEnter:re,onPaneMouseMove:B,onPaneMouseLeave:R,onPaneContextMenu:ee,onPaneScroll:X,paneClickDistance:te,deleteKeyCode:N,selectionKeyCode:k,selectionOnDrag:h,selectionMode:v,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:x,panActivationKeyCode:S,zoomActivationKeyCode:C,elementsSelectable:W,zoomOnScroll:z,zoomOnPinch:D,zoomOnDoubleClick:F,panOnScroll:O,panOnScrollSpeed:V,panOnScrollMode:H,panOnDrag:K,autoPanOnSelection:q,defaultViewport:I,translateExtent:L,minZoom:E,maxZoom:w,onSelectionContextMenu:d,preventScrolling:M,noDragClassName:ot,noWheelClassName:yt,noPanClassName:ut,disableKeyboardA11y:rt,onViewportChange:we,isControlledViewport:!!Je,children:(0,$.jsxs)(Ny,{children:[(0,$.jsx)(Ey,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:s,onReconnect:ce,onReconnectStart:Qe,onReconnectEnd:Oe,onlyRenderVisibleElements:P,onEdgeContextMenu:Q,onEdgeMouseEnter:ie,onEdgeMouseMove:le,onEdgeMouseLeave:fe,reconnectRadius:Ae,defaultMarkerColor:_,noPanClassName:ut,disableKeyboardA11y:rt,rfId:Fe}),(0,$.jsx)(Ay,{style:y,type:m,component:b,containerStyle:g}),(0,$.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,$.jsx)(ly,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,nodeClickDistance:Z,onlyRenderVisibleElements:P,noPanClassName:ut,noDragClassName:ot,disableKeyboardA11y:rt,nodeExtent:We,rfId:Fe,nodesDraggable:dn}),(0,$.jsx)("div",{className:"react-flow__viewport-portal"})]})})}eu.displayName="GraphView";var $y=(0,T.memo)(eu),Ly=Ai("React Flow","https://reactflow.dev/"),wc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c=.5,maxZoom:l=2,nodeOrigin:u,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,m=new Map,y=new Map,b=new Map,g=o??t??[],k=n??e??[],h=u??[0,0],v=d??En;Yi(y,b,g);let{nodesInitialized:x}=Jo(k,p,m,{nodeOrigin:h,nodeExtent:v,zIndexMode:f}),S=[0,0,1];if(s&&r&&i){let C=Nn(p,{filter:I=>!!((I.width||I.initialWidth)&&(I.height||I.initialHeight))}),{x:N,y:P,zoom:W}=eo(C,r,i,c,l,a?.padding??.1);S=[N,P,W]}return{rfId:"1",width:r??0,height:i??0,transform:S,nodes:k,nodesInitialized:x,nodeLookup:p,parentLookup:m,edges:g,edgeLookup:b,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:En,nodeExtent:v,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Dt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:h,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:s??!1,fitViewOptions:a,fitViewResolver:null,connection:{...Ei},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Ly,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:_i,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},Hy=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f})=>Zl((p,m)=>{async function y(){let{nodeLookup:b,panZoom:g,fitViewOptions:k,fitViewResolver:h,width:v,height:x,minZoom:S,maxZoom:C}=m();g&&(await al({nodes:b,width:v,height:x,panZoom:g,minZoom:S,maxZoom:C},k),h?.resolve(!0),p({fitViewResolver:null}))}return{...wc({nodes:e,edges:t,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:b=>{let{nodeLookup:g,parentLookup:k,nodeOrigin:h,elevateNodesOnSelect:v,fitViewQueued:x,zIndexMode:S,nodesSelectionActive:C}=m(),{nodesInitialized:N,hasSelectedNodes:P}=Jo(b,g,k,{nodeOrigin:h,nodeExtent:d,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:S}),W=C&&P;x&&N?(y(),p({nodes:b,nodesInitialized:N,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:W})):p({nodes:b,nodesInitialized:N,nodesSelectionActive:W})},setEdges:b=>{let{connectionLookup:g,edgeLookup:k}=m();Yi(g,k,b),p({edges:b})},setDefaultNodesAndEdges:(b,g)=>{if(b){let{setNodes:k}=m();k(b),p({hasDefaultNodes:!0})}if(g){let{setEdges:k}=m();k(g),p({hasDefaultEdges:!0})}},updateNodeInternals:b=>{let{triggerNodeChanges:g,nodeLookup:k,parentLookup:h,domNode:v,nodeOrigin:x,nodeExtent:S,debug:C,fitViewQueued:N,zIndexMode:P}=m(),{changes:W,updatedInternals:I}=vl(b,k,h,v,x,S,P);I&&(xl(k,h,{nodeOrigin:x,nodeExtent:S,zIndexMode:P}),N?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),W?.length>0&&(C&&console.log("React Flow: trigger node changes",W),g?.(W)))},updateNodePositions:(b,g=!1)=>{let k=[],h=[],{nodeLookup:v,triggerNodeChanges:x,connection:S,updateConnection:C,onNodesChangeMiddlewareMap:N}=m();for(let[P,W]of b){let I=v.get(P),L=!!(I?.expandParent&&I?.parentId&&W?.position),E={id:P,type:"position",position:L?{x:Math.max(0,W.position.x),y:Math.max(0,W.position.y)}:W.position,dragging:g};if(I&&S.inProgress&&S.fromNode.id===I.id){let w=Ot(I,S.fromHandle,j.Left,!0);C({...S,from:w})}L&&I.parentId&&k.push({id:P,parentId:I.parentId,rect:{...W.internals.positionAbsolute,width:W.measured.width??0,height:W.measured.height??0}}),h.push(E)}if(k.length>0){let{parentLookup:P,nodeOrigin:W}=m(),I=er(k,v,P,W);h.push(...I)}for(let P of N.values())h=P(h);x(h)},triggerNodeChanges:b=>{let{onNodesChange:g,setNodes:k,nodes:h,hasDefaultNodes:v,debug:x}=m();if(b?.length){if(v){let S=Nc(b,h);k(S)}x&&console.log("React Flow: trigger node changes",b),g?.(b)}},triggerEdgeChanges:b=>{let{onEdgesChange:g,setEdges:k,edges:h,hasDefaultEdges:v,debug:x}=m();if(b?.length){if(v){let S=Mc(b,h);k(S)}x&&console.log("React Flow: trigger edge changes",b),g?.(b)}},addSelectedNodes:b=>{let{multiSelectionActive:g,edgeLookup:k,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:x}=m();if(g){let S=b.map(C=>nn(C,!0));v(S);return}v(Dn(h,new Set([...b]),!0)),x(Dn(k))},addSelectedEdges:b=>{let{multiSelectionActive:g,edgeLookup:k,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:x}=m();if(g){let S=b.map(C=>nn(C,!0));x(S);return}x(Dn(k,new Set([...b]))),v(Dn(h,new Set,!0))},unselectNodesAndEdges:({nodes:b,edges:g}={})=>{let{edges:k,nodes:h,nodeLookup:v,triggerNodeChanges:x,triggerEdgeChanges:S}=m(),C=b||h,N=g||k,P=[];for(let I of C){if(!I.selected)continue;let L=v.get(I.id);L&&(L.selected=!1),P.push(nn(I.id,!1))}let W=[];for(let I of N)I.selected&&W.push(nn(I.id,!1));x(P),S(W)},setMinZoom:b=>{let{panZoom:g,maxZoom:k}=m();g?.setScaleExtent([b,k]),p({minZoom:b})},setMaxZoom:b=>{let{panZoom:g,minZoom:k}=m();g?.setScaleExtent([k,b]),p({maxZoom:b})},setTranslateExtent:b=>{m().panZoom?.setTranslateExtent(b),p({translateExtent:b})},resetSelectedElements:()=>{let{edges:b,nodes:g,triggerNodeChanges:k,triggerEdgeChanges:h,elementsSelectable:v}=m();if(!v)return;let x=g.reduce((C,N)=>N.selected?[...C,nn(N.id,!1)]:C,[]),S=b.reduce((C,N)=>N.selected?[...C,nn(N.id,!1)]:C,[]);k(x),h(S)},setNodeExtent:b=>{let{nodes:g,nodeLookup:k,parentLookup:h,nodeOrigin:v,elevateNodesOnSelect:x,nodeExtent:S,zIndexMode:C}=m();b[0][0]===S[0][0]&&b[0][1]===S[0][1]&&b[1][0]===S[1][0]&&b[1][1]===S[1][1]||(Jo(g,k,h,{nodeOrigin:v,nodeExtent:b,elevateNodesOnSelect:x,checkEquality:!1,zIndexMode:C}),p({nodeExtent:b}))},panBy:b=>{let{transform:g,width:k,height:h,panZoom:v,translateExtent:x}=m();return kl({delta:b,panZoom:v,transform:g,translateExtent:x,width:k,height:h})},setCenter:async(b,g,k)=>{let{width:h,height:v,maxZoom:x,panZoom:S}=m();if(!S)return!1;let C=typeof k?.zoom<"u"?k.zoom:x;return await S.setViewport({x:h/2-b*C,y:v/2-g*C,zoom:C},{duration:k?.duration,ease:k?.ease,interpolate:k?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Ei}})},updateConnection:b=>{p({connection:b})},reset:()=>p({...wc()})}},Object.is);function By({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:s,initialMaxZoom:a,initialFitViewOptions:c,fitView:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f,children:p}){let[m]=(0,T.useState)(()=>Hy({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:s,maxZoom:a,fitViewOptions:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}));return(0,$.jsx)(tb,{value:m,children:(0,$.jsx)(_b,{children:(0,$.jsx)(Bb,{children:p})})})}function Wy({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:s,fitView:a,fitViewOptions:c,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,T.useContext)(ar)?(0,$.jsx)($.Fragment,{children:e}):(0,$.jsx)(By,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:s,fitView:a,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var Fy={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function Vy({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:s,onNodeClick:a,onEdgeClick:c,onInit:l,onMove:u,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,onNodeMouseEnter:k,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:x,onNodeDoubleClick:S,onNodeDragStart:C,onNodeDrag:N,onNodeDragStop:P,onNodesDelete:W,onEdgesDelete:I,onDelete:L,onSelectionChange:E,onSelectionDragStart:w,onSelectionDrag:M,onSelectionDragStop:_,onSelectionContextMenu:z,onSelectionStart:D,onSelectionEnd:O,onBeforeDelete:V,connectionMode:H,connectionLineType:F=mt.Bezier,connectionLineStyle:K,connectionLineComponent:q,connectionLineContainerStyle:J,deleteKeyCode:re="Backspace",selectionKeyCode:B="Shift",selectionOnDrag:R=!1,selectionMode:X=Qt.Full,panActivationKeyCode:ee="Space",multiSelectionKeyCode:te=zn()?"Meta":"Control",zoomActivationKeyCode:Z=zn()?"Meta":"Control",snapToGrid:Q,snapGrid:ie,onlyRenderVisibleElements:le=!1,selectNodesOnDrag:fe,nodesDraggable:Ae,autoPanOnNodeFocus:ce,nodesConnectable:Qe,nodesFocusable:Oe,nodeOrigin:ot=_c,edgesFocusable:yt,edgesReconnectable:ut,elementsSelectable:rt=!0,defaultViewport:We=mb,minZoom:Fe=.5,maxZoom:Je=2,translateExtent:we=En,preventScrolling:dn=!0,nodeExtent:fn,defaultMarkerColor:fo="#b1b1b7",zoomOnScroll:Er=!0,zoomOnPinch:Nr=!0,panOnScroll:Mr=!1,panOnScrollSpeed:Ir=.5,panOnScrollMode:Pr=_t.Free,zoomOnDoubleClick:zr=!0,panOnDrag:Rr=!0,onPaneClick:Dr,onPaneMouseEnter:Ar,onPaneMouseMove:Vt,onPaneMouseLeave:po,onPaneScroll:mo,onPaneContextMenu:Or,paneClickDistance:A=1,nodeClickDistance:G=0,children:U,onReconnect:ne,onReconnectStart:ye,onReconnectEnd:xt,onEdgeContextMenu:Ce,onEdgeDoubleClick:pn,onEdgeMouseEnter:Rf,onEdgeMouseMove:Df,onEdgeMouseLeave:Af,reconnectRadius:Of=10,onNodesChange:Tf,onEdgesChange:$f,noDragClassName:Lf="nodrag",noWheelClassName:Hf="nowheel",noPanClassName:Ps="nopan",fitView:zs,fitViewOptions:Rs,connectOnClick:Bf,attributionPosition:Wf,proOptions:Ff,defaultEdgeOptions:Vf,elevateNodesOnSelect:Gf=!0,elevateEdgesOnSelect:Xf=!1,disableKeyboardA11y:Ds=!1,autoPanOnConnect:Yf,autoPanOnNodeDrag:qf,autoPanOnSelection:Uf=!0,autoPanSpeed:Zf,connectionRadius:Kf,isValidConnection:jf,onError:Qf,style:Jf,id:As,nodeDragThreshold:ep,connectionDragThreshold:tp,viewport:np,onViewportChange:op,width:rp,height:ip,colorMode:sp="light",debug:ap,onScroll:Os,ariaLabelConfig:lp,zIndexMode:Ts="basic",...cp},up){let Tr=As||"1",dp=yb(sp),fp=(0,T.useCallback)($s=>{$s.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Os?.($s)},[Os]);return(0,$.jsx)("div",{"data-testid":"rf__wrapper",...cp,onScroll:fp,style:{...Jf,...Fy},ref:up,className:ve(["react-flow",r,dp]),id:As,role:"application",children:(0,$.jsxs)(Wy,{nodes:e,edges:t,width:rp,height:ip,fitView:zs,fitViewOptions:Rs,minZoom:Fe,maxZoom:Je,nodeOrigin:ot,nodeExtent:fn,zIndexMode:Ts,children:[(0,$.jsx)(bb,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,nodesDraggable:Ae,autoPanOnNodeFocus:ce,nodesConnectable:Qe,nodesFocusable:Oe,edgesFocusable:yt,edgesReconnectable:ut,elementsSelectable:rt,elevateNodesOnSelect:Gf,elevateEdgesOnSelect:Xf,minZoom:Fe,maxZoom:Je,nodeExtent:fn,onNodesChange:Tf,onEdgesChange:$f,snapToGrid:Q,snapGrid:ie,connectionMode:H,translateExtent:we,connectOnClick:Bf,defaultEdgeOptions:Vf,fitView:zs,fitViewOptions:Rs,onNodesDelete:W,onEdgesDelete:I,onDelete:L,onNodeDragStart:C,onNodeDrag:N,onNodeDragStop:P,onSelectionDrag:M,onSelectionDragStart:w,onSelectionDragStop:_,onMove:u,onMoveStart:d,onMoveEnd:f,noPanClassName:Ps,nodeOrigin:ot,rfId:Tr,autoPanOnConnect:Yf,autoPanOnNodeDrag:qf,autoPanSpeed:Zf,onError:Qf,connectionRadius:Kf,isValidConnection:jf,selectNodesOnDrag:fe,nodeDragThreshold:ep,connectionDragThreshold:tp,onBeforeDelete:V,debug:ap,ariaLabelConfig:lp,zIndexMode:Ts}),(0,$.jsx)($y,{onInit:l,onNodeClick:a,onEdgeClick:c,onNodeMouseEnter:k,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:x,onNodeDoubleClick:S,nodeTypes:i,edgeTypes:s,connectionLineType:F,connectionLineStyle:K,connectionLineComponent:q,connectionLineContainerStyle:J,selectionKeyCode:B,selectionOnDrag:R,selectionMode:X,deleteKeyCode:re,multiSelectionKeyCode:te,panActivationKeyCode:ee,zoomActivationKeyCode:Z,onlyRenderVisibleElements:le,defaultViewport:We,translateExtent:we,minZoom:Fe,maxZoom:Je,preventScrolling:dn,zoomOnScroll:Er,zoomOnPinch:Nr,zoomOnDoubleClick:zr,panOnScroll:Mr,panOnScrollSpeed:Ir,panOnScrollMode:Pr,panOnDrag:Rr,autoPanOnSelection:Uf,onPaneClick:Dr,onPaneMouseEnter:Ar,onPaneMouseMove:Vt,onPaneMouseLeave:po,onPaneScroll:mo,onPaneContextMenu:Or,paneClickDistance:A,nodeClickDistance:G,onSelectionContextMenu:z,onSelectionStart:D,onSelectionEnd:O,onReconnect:ne,onReconnectStart:ye,onReconnectEnd:xt,onEdgeContextMenu:Ce,onEdgeDoubleClick:pn,onEdgeMouseEnter:Rf,onEdgeMouseMove:Df,onEdgeMouseLeave:Af,reconnectRadius:Of,defaultMarkerColor:fo,noDragClassName:Lf,noWheelClassName:Hf,noPanClassName:Ps,rfId:Tr,disableKeyboardA11y:Ds,nodeExtent:fn,viewport:np,onViewportChange:op,nodesDraggable:Ae}),(0,$.jsx)(pb,{onSelectionChange:E}),U,(0,$.jsx)(lb,{proOptions:Ff,position:Wf}),(0,$.jsx)(ab,{rfId:Tr,disableKeyboardA11y:Ds})]})})}var tu=Ic(Vy);function nu(e){let[t,n]=(0,T.useState)(e),o=(0,T.useCallback)(r=>n(i=>Nc(r,i)),[]);return[t,n,o]}function ou(e){let[t,n]=(0,T.useState)(e),o=(0,T.useCallback)(r=>n(i=>Mc(r,i)),[]);return[t,n,o]}var Yv=Ze.error014();function Gy({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,$.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:ve(["react-flow__background-pattern",n,o])})}function Xy({radius:e,className:t}){return(0,$.jsx)("circle",{cx:e,cy:e,r:e,className:ve(["react-flow__background-pattern","dots",t])})}var gt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(gt||(gt={}));var Yy={[gt.Dots]:1,[gt.Lines]:1,[gt.Cross]:6},qy=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function ru({id:e,variant:t=gt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:s,bgColor:a,style:c,className:l,patternClassName:u}){let d=(0,T.useRef)(null),{transform:f,patternId:p}=ue(qy,be),m=o||Yy[t],y=t===gt.Dots,b=t===gt.Cross,g=Array.isArray(n)?n:[n,n],k=[g[0]*f[2]||1,g[1]*f[2]||1],h=m*f[2],v=Array.isArray(i)?i:[i,i],x=b?[h,h]:k,S=[v[0]*f[2]||1+x[0]/2,v[1]*f[2]||1+x[1]/2],C=`${p}${e||""}`;return(0,$.jsxs)("svg",{className:ve(["react-flow__background",l]),style:{...c,...cr,"--xy-background-color-props":a,"--xy-background-pattern-color-props":s},ref:d,"data-testid":"rf__background",children:[(0,$.jsx)("pattern",{id:C,x:f[0]%k[0],y:f[1]%k[1],width:k[0],height:k[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:y?(0,$.jsx)(Xy,{radius:h/2,className:u}):(0,$.jsx)(Gy,{dimensions:x,lineWidth:r,variant:t,className:u})}),(0,$.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${C})`})]})}ru.displayName="Background";var iu=(0,T.memo)(ru);function Uy(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,$.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Zy(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,$.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Ky(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,$.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function jy(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,$.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Qy(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,$.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function ir({children:e,className:t,...n}){return(0,$.jsx)("button",{type:"button",className:ve(["react-flow__controls-button",t]),...n,children:e})}var Jy=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function su({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:s,onFitView:a,onInteractiveChange:c,className:l,children:u,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let m=ge(),{isInteractive:y,minZoomReached:b,maxZoomReached:g,ariaLabelConfig:k}=ue(Jy,be),{zoomIn:h,zoomOut:v,fitView:x}=Qi(),S=()=>{h(),i?.()},C=()=>{v(),s?.()},N=()=>{x(r),a?.()},P=()=>{m.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),c?.(!y)};return(0,$.jsxs)(lr,{className:ve(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",l]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??k["controls.ariaLabel"],children:[t&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(ir,{onClick:S,className:"react-flow__controls-zoomin",title:k["controls.zoomIn.ariaLabel"],"aria-label":k["controls.zoomIn.ariaLabel"],disabled:g,children:(0,$.jsx)(Uy,{})}),(0,$.jsx)(ir,{onClick:C,className:"react-flow__controls-zoomout",title:k["controls.zoomOut.ariaLabel"],"aria-label":k["controls.zoomOut.ariaLabel"],disabled:b,children:(0,$.jsx)(Zy,{})})]}),n&&(0,$.jsx)(ir,{className:"react-flow__controls-fitview",onClick:N,title:k["controls.fitView.ariaLabel"],"aria-label":k["controls.fitView.ariaLabel"],children:(0,$.jsx)(Ky,{})}),o&&(0,$.jsx)(ir,{className:"react-flow__controls-interactive",onClick:P,title:k["controls.interactive.ariaLabel"],"aria-label":k["controls.interactive.ariaLabel"],children:y?(0,$.jsx)(Qy,{}):(0,$.jsx)(jy,{})}),u]})}su.displayName="Controls";var qv=(0,T.memo)(su);function ex({id:e,x:t,y:n,width:o,height:r,style:i,color:s,strokeColor:a,strokeWidth:c,className:l,borderRadius:u,shapeRendering:d,selected:f,onClick:p}){let{background:m,backgroundColor:y}=i||{},b=s||m||y;return(0,$.jsx)("rect",{className:ve(["react-flow__minimap-node",{selected:f},l]),x:t,y:n,rx:u,ry:u,width:o,height:r,style:{fill:b,stroke:a,strokeWidth:c},shapeRendering:d,onClick:p?g=>p(g,e):void 0})}var tx=(0,T.memo)(ex),nx=e=>e.nodes.map(t=>t.id),Ki=e=>e instanceof Function?e:()=>e;function ox({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=tx,onClick:s}){let a=ue(nx,be),c=Ki(t),l=Ki(e),u=Ki(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,$.jsx)($.Fragment,{children:a.map(f=>(0,$.jsx)(ix,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:u,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:s,shapeRendering:d},f))})}function rx({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:s,NodeComponent:a,onClick:c}){let{node:l,x:u,y:d,width:f,height:p}=ue(m=>{let y=m.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let b=y.internals.userNode,{x:g,y:k}=y.internals.positionAbsolute,{width:h,height:v}=lt(b);return{node:b,x:g,y:k,width:h,height:v}},be);return!l||l.hidden||!Oi(l)?null:(0,$.jsx)(a,{x:u,y:d,width:f,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:s,onClick:c,id:l.id})}var ix=(0,T.memo)(rx),sx=(0,T.memo)(ox),ax=200,lx=150,cx=e=>!e.hidden,ux=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Ri(Nn(e.nodeLookup,{filter:cx}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},vc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,dx=(e,t)=>vc(e.viewBB,t.viewBB)&&vc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,fx="react-flow__minimap-desc";function au({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:s,nodeComponent:a,bgColor:c,maskColor:l,maskStrokeColor:u,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:m,pannable:y=!1,zoomable:b=!1,ariaLabel:g,inversePan:k,zoomStep:h=1,offsetScale:v=5}){let x=ge(),S=(0,T.useRef)(null),{boundingRect:C,viewBB:N,rfId:P,panZoom:W,translateExtent:I,flowWidth:L,flowHeight:E,ariaLabelConfig:w}=ue(ux,dx),M=e?.width??ax,_=e?.height??lx,z=C.width/M,D=C.height/_,O=Math.max(z,D),V=O*M,H=O*_,F=v*O,K=C.x-(V-C.width)/2-F,q=C.y-(H-C.height)/2-F,J=V+F*2,re=H+F*2,B=`${fx}-${P}`,R=(0,T.useRef)(0),X=(0,T.useRef)();R.current=O,(0,T.useEffect)(()=>{if(S.current&&W)return X.current=Il({domNode:S.current,panZoom:W,getTransform:()=>x.getState().transform,getViewScale:()=>R.current}),()=>{X.current?.destroy()}},[W]),(0,T.useEffect)(()=>{X.current?.update({translateExtent:I,width:L,height:E,inversePan:k,pannable:y,zoomStep:h,zoomable:b})},[y,b,k,h,I,L,E]);let ee=p?Q=>{let[ie,le]=X.current?.pointer(Q)||[0,0];p(Q,{x:ie,y:le})}:void 0,te=m?(0,T.useCallback)((Q,ie)=>{let le=x.getState().nodeLookup.get(ie).internals.userNode;m(Q,le)},[]):void 0,Z=g??w["minimap.ariaLabel"];return(0,$.jsx)(lr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*O:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof s=="number"?s:void 0},className:ve(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,$.jsxs)("svg",{width:M,height:_,viewBox:`${K} ${q} ${J} ${re}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":B,ref:S,onClick:ee,children:[Z&&(0,$.jsx)("title",{id:B,children:Z}),(0,$.jsx)(sx,{onClick:te,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:s,nodeComponent:a}),(0,$.jsx)("path",{className:"react-flow__minimap-mask",d:`M${K-F},${q-F}h${J+F*2}v${re+F*2}h${-J-F*2}z
        M${N.x},${N.y}h${N.width}v${N.height}h${-N.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}au.displayName="MiniMap";var lu=(0,T.memo)(au),px=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,mx={[Tt.Line]:"right",[Tt.Handle]:"bottom-right"};function gx({nodeId:e,position:t,variant:n=Tt.Handle,className:o,style:r=void 0,children:i,color:s,minWidth:a=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:m,onResizeStart:y,onResize:b,onResizeEnd:g}){let k=Ac(),h=typeof e=="string"?e:k,v=ge(),x=(0,T.useRef)(null),S=n===Tt.Handle,C=ue((0,T.useCallback)(px(S&&p),[S,p]),be),N=(0,T.useRef)(null),P=t??mx[n];(0,T.useEffect)(()=>{if(!(!x.current||!h))return N.current||(N.current=Al({domNode:x.current,nodeId:h,getStoreItems:()=>{let{nodeLookup:I,transform:L,snapGrid:E,snapToGrid:w,nodeOrigin:M,domNode:_}=v.getState();return{nodeLookup:I,transform:L,snapGrid:E,snapToGrid:w,nodeOrigin:M,paneDomNode:_}},onChange:(I,L)=>{let{triggerNodeChanges:E,nodeLookup:w,parentLookup:M,nodeOrigin:_}=v.getState(),z=[],D={x:I.x,y:I.y},O=w.get(h);if(O&&O.expandParent&&O.parentId){let V=O.origin??_,H=I.width??O.measured.width??0,F=I.height??O.measured.height??0,K={id:O.id,parentId:O.parentId,rect:{width:H,height:F,...Ti({x:I.x??O.position.x,y:I.y??O.position.y},{width:H,height:F},O.parentId,w,V)}},q=er([K],w,M,_);z.push(...q),D.x=I.x?Math.max(V[0]*H,I.x):void 0,D.y=I.y?Math.max(V[1]*F,I.y):void 0}if(D.x!==void 0&&D.y!==void 0){let V={id:h,type:"position",position:{...D}};z.push(V)}if(I.width!==void 0&&I.height!==void 0){let H={id:h,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:I.width,height:I.height}};z.push(H)}for(let V of L){let H={...V,type:"position"};z.push(H)}E(z)},onEnd:({width:I,height:L})=>{let E={id:h,type:"dimensions",resizing:!1,dimensions:{width:I,height:L}};v.getState().triggerNodeChanges([E])}})),N.current.update({controlPosition:P,boundaries:{minWidth:a,minHeight:c,maxWidth:l,maxHeight:u},keepAspectRatio:d,resizeDirection:f,onResizeStart:y,onResize:b,onResizeEnd:g,shouldResize:m}),()=>{N.current?.destroy()}},[P,a,c,l,u,d,y,b,g,m]);let W=P.split("-");return(0,$.jsx)("div",{className:ve(["react-flow__resize-control","nodrag",...W,n,o]),ref:x,style:{...r,scale:C,...s&&{[S?"backgroundColor":"borderColor"]:s}},children:i})}var Uv=(0,T.memo)(gx);async function _e(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status})}return r}function Xe(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var cu=()=>_e("config");var uu=()=>_e("assets"),dr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},du=e=>_e("asset/delete",Xe({id:e})),fu=e=>_e("generate",Xe(e)),pu=e=>_e(`task?id=${encodeURIComponent(e)}`),mu=e=>_e("task/cancel",Xe({id:e})),gu=(e,t,n)=>_e("workflow/save",Xe({name:e,nodes:t,edges:n})),es=()=>_e("workflow/list"),hu=e=>_e(`workflow/load?name=${encodeURIComponent(e)}`),bu=(e,t)=>_e("recovery/save",Xe({nodes:e,edges:t})),yu=()=>_e("recovery/latest"),xu=e=>_e("settings",Xe({model:e})),wu=e=>_e("settings",Xe({profile:e})),oo=e=>_e("settings",Xe({outputDir:e})),vu=e=>_e("settings",Xe({budget:e})),ts=e=>_e("settings",Xe({imagoraRoot:e})),ku=(e={})=>_e("pick-folder",Xe(e)),fr=e=>_e("reveal",Xe({path:e})),ns=e=>_e("provider",Xe(e)),Su=e=>_e("provider/probe",Xe(e));var Cu=/[\w\u4e00-\u9fa5.-]/;var hx=/[\p{L}\p{N}]/u;function _u(e){return e===void 0?!0:!hx.test(e)}function Eu(e){return e.trim().replace(/\s+/g," ")}function bx(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&_u(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Cu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Cu.test(i))break;r+=1}_u(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function yx(e){let t=[];for(let n of bx(e))n.kind==="ref"&&t.push(n.token);return t}function Nu(e,t){let n=yx(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let l=Eu(c.name);if(l==="")continue;let u=o.get(l);u===void 0?o.set(l,[c.id]):u.includes(c.id)||u.push(c.id)}let r=[],i=new Set,s=[],a=new Set;for(let c of n){let l=Eu(c.name),u=o.get(l);if(u===void 0){a.has(l)||(a.add(l),s.push(l));continue}for(let d of u)i.has(d)||(i.add(d),r.push(d))}return s.length>0?{mode:"invalid",ids:r,unknown:s}:{mode:"explicit",ids:r,unknown:[]}}var xx=/\.(png|jpe?g|webp|gif|bmp)$/i;function Pu(e){return e.type.startsWith("image/")?!0:xx.test(e.name)}var Mu=30,Iu=200;function zu(e,t){if(t&&Math.abs(t.x-e.x)<Iu&&Math.abs(t.y-e.y)<Iu){let n={x:t.x+Mu,y:t.y+Mu};return{position:n,next:n}}return{position:e,next:e}}var wx=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function vx(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!wx.test(n));return t.length?t.join(" "):void 0}function rn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function Ru(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function Du(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function os(e,t,n){let o=new Set(n);return{nodes:e.map(i=>{let s=vx(i.className),a={...i};return s===void 0?delete a.className:a.className=s,a.type==="image"&&o.has(a.data.registryId)?{...a,data:{...a.data,missing:!0}}:a.type==="prompt"?{...a,data:{...a.data,quality:a.data.quality??"high",status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}:a}),edges:t}}function ct(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(a=>i.data[a]===n[a])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function Au(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(s=>[s.id,s])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(s=>s.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(s=>s.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function kx(e,t){let n=new Map,o=new Map;for(let i of t){let s=n.get(i.target);s?s.push(i.source):n.set(i.target,[i.source]);let a=o.get(i.source);a?a.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Sx(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let s=new Set([i.id]),a=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let l=c.pop();if(s.has(l))continue;s.add(l);let u=o.get(l);u&&(u.type==="prompt"?a.add(l):u.type==="group"&&c.push(...r.get(l)??[]))}n.set(i.data.registryId,a.size)}}function Ou(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let s=0,a=[];for(let c of r.get(e)??[]){let l=o.get(c);if(l){if(l.type==="image")s+=1,a.push(l.data.registryId);else if(l.type==="group"){let u=Ou(c,t,n);s+=u.count,a.push(...u.ids)}}}return t.delete(e),{count:s,ids:a}}function Cx(e,t,n,o,r){let i=new Map;for(let s of e)s.type==="image"&&i.set(s.data.registryId,s.data.size??0);for(let s of e){if(s.type!=="group")continue;let{count:a,ids:c}=Ou(s.id,new Set,t),l=new Set(c);n.set(s.id,l.size),o.set(s.id,Array.from(l).reduce((u,d)=>u+(i.get(d)??0),0)),r.set(s.id,a-l.size)}}function Tu(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let a of e)a.type==="image"&&n.set(a.data.registryId,0),a.type==="group"&&(o.set(a.id,0),r.set(a.id,0),i.set(a.id,0));let s=kx(e,t);return Sx(e,s,n),Cx(e,s,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function _x(e,t,n){let o=new Map(e.map(a=>[a.id,a])),r=[],i=new Set([n]),s=t.filter(a=>a.target===n).map(a=>a.source);for(;s.length;){let a=s.pop();if(i.has(a))continue;i.add(a);let c=o.get(a);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(l=>l.target===a).forEach(l=>s.push(l.source)))}return r}function $u(e,t,n,o){let r=_x(e,t,n),i=r.map(l=>({id:l.id,name:l.type==="image"?l.data.name:""})),s=Nu(o,i);if(s.mode==="all")return{images:r,unknown:[],mode:"all"};let a=new Map(r.map(l=>[l.id,l])),c=[];for(let l of s.ids){let u=a.get(l);u&&c.push(u)}return{images:c,unknown:s.unknown,mode:s.mode}}function pr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function mr(e,t){return t.reduce((n,o)=>!n||pr(e,o)<pr(e,n)?o:n,null)}function ro(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function Ex(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=mr(r,n);if(i&&r.position.y>i.position.y){ro(e,i,r);continue}let s=mr(r,o.filter(a=>a.position.y>=r.position.y));s&&(!i||pr(r,s)<pr(r,i))?ro(e,r,s):i&&ro(e,r,i)}}function Nx(e,t,n,o){for(let r of t)if(!e.next.some(s=>s.source===r.id&&o.has(s.target))){let s=mr(r,n);s&&ro(e,r,s)}}function Mx(e,t,n,o){let r=n.filter(s=>e.next.some(a=>a.target===s.id&&o.get(a.source)?.type==="image")),i=r.length?r:n;for(let s of t){if(e.next.some(l=>{let u=o.get(l.source)?.type;return l.target===s.id&&(u==="image"||u==="group")}))continue;let c=mr(s,i);c&&ro(e,c,s)}}function rs(e,t){let n=e.filter(a=>a.type==="prompt"),o=e.filter(a=>a.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(a=>[a.id,a])),i=new Set(n.map(a=>a.id)),s={next:[...t],connected:new Set(t.flatMap(a=>[a.source,a.target])),pairs:new Set(t.map(a=>`${a.source}->${a.target}`))};return Ex(s,e,n,o),Nx(s,o,n,i),Mx(s,n,o,r),s.next}function Lu(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?rs(o,t):t}function Hu(e){return`\u751F\u6210\u4E2D ${e}s`}function se(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var Ix=/^=== (.+) ===\s*$/,Wu=/^```(?:text)?\s*$/,Px=/^ratio:\s*(\d+):(\d+)\s*$/,zx=/^ratio\b/i;function Bu(e){return e.split(`
`).some(t=>Wu.test(t))}function Fu(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],s=[];if(n.forEach((l,u)=>{let d=l.match(Ix)?.[1];d!==void 0&&s.push({title:d.trim(),line:u})}),s.length===0){let l=t.trim();return l&&i.push(l),Bu(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let a=n.slice(0,s[0]?.line??0).join(`
`).trim();a&&(i.push(a),Bu(a)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let l=0;l<s.length;l++){let u=s[l];if(u===void 0)continue;let{title:d}=u,f=u.line+1,p=s[l+1],m=p===void 0?n.length:p.line,y=n.slice(f,m);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let b=[];y.forEach((W,I)=>{Wu.test(W)&&b.push(I)});let g=b[0],k=b[b.length-1];if(g===void 0||k===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let h=y.slice(0,g).join(`
`).trim();h&&i.push(h);let v=y.slice(g+1,k),x=v.findIndex(W=>W.trim()!=="");if(x===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let S=(v[x]??"").trim(),C=S.match(Px);if(!C){zx.test(S)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${S}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let N=`${C[1]}:${C[2]}`,P=v.slice(x+1).join(`
`).trim();if(!P){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:N,prompt:P})}return{cards:o,issues:r,skippedText:i}}function Rx(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function Vu(e,t,n){let o=$x(n,e.length);return e.map((r,i)=>{let s=Rx(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:s.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var is=380,Dx=326,Gu=40,Ax=74,Ox=is+Gu,Tx=Dx+Ax,gr=3;function $x(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/gr),s=r%gr,a=Math.min(gr,n-i*gr),c=a*is+(a-1)*Gu,l=e.x+is/2-c/2;o.push({x:l+s*Ox,y:e.y+i*Tx})}return o}var Lx={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function hr(e){let t=e.measured,n=Lx[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var ss=[0,.5,1];function Xu(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function qu(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Yu(e,t,n,o){let r=ss.map(a=>Xu(e,n,a)),i=null,s=1/0;for(let a=0;a<t.length;a+=1){let c=t[a];if(c!==void 0&&c.id!==e.id&&qu(c))for(let l=0;l<ss.length;l+=1){let u=ss[l];if(u===void 0)continue;let d=Xu(c,n,u);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let m=d-p,y=Math.abs(m);y>=o||y>=s||(s=y,i={delta:m,position:d,targetId:c.id})}}}return i}function br(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!qu(e)||!Number.isFinite(n)||n<=0)return o;let r=Yu(e,t,"x",n),i=Yu(e,t,"y",n),s=[];return r!==null&&s.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&s.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:s}}var Uu="imagora.canvas-snap.v1";function Zu(){try{let e=window.localStorage.getItem(Uu);return e===null?!0:e!=="0"}catch{return!0}}function Ku(e){try{window.localStorage.setItem(Uu,e?"1":"0")}catch{}}function so(e){let t=hr(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var io=[];function ju(e,t,n){if(!n)return{changes:e,guides:io};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:io};let r=o[0];if(!r)return{changes:e,guides:io};let i=t.find(d=>d.id===r.id),s=r.position;if(!i||!s)return{changes:e,guides:io};let a={...so(i),x:s.x,y:s.y},c=[];for(let d of t)d.id!==r.id&&c.push(so(d));let l=br(a,c);return l.guides.length===0?{changes:e,guides:io}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:l.x,y:l.y}}:d),guides:l.guides}}var Ke=require("react");var as=require("react/jsx-runtime"),Qu={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function Ee({name:e,size:t=14,style:n}){let o=Qu[e]||Qu.help;return(0,as.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...n},children:(0,as.jsx)("path",{d:o})})}var An=require("react");var ls=["\u6B63\u5728\u7406\u89E3\u63D0\u793A\u8BCD\u2026","\u6B63\u5728\u6784\u56FE\u2026","\u6B63\u5728\u94FA\u8BBE\u5149\u5F71\u2026","\u6B63\u5728\u7EC6\u5316\u7EC6\u8282\u2026","\u5FEB\u597D\u4E86\uFF0C\u6B63\u5728\u6536\u5C3E\u2026"];function Hx(e){let t=Number.isFinite(e)&&e>0?e:0,n=10+(1-Math.exp(-t/28))*88;return Math.min(98,Math.max(10,n))}function Ju(e){return Hx(e)/100}function cs(e){let t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/2)%ls.length;return ls[n]??ls[0]??""}function ed(e){let t=Number.isFinite(e)&&e>0?Math.floor(e):0;return`\u751F\u6210\u4E2D ${t}s \xB7 ${cs(t)}`}var sn=require("react/jsx-runtime");function td({className:e}){let[t,n]=(0,An.useState)(0),o=(0,An.useRef)(!0);(0,An.useEffect)(()=>{o.current=!0;let s=window.setInterval(()=>{o.current&&n(a=>a+1)},1e3);return()=>{o.current=!1,window.clearInterval(s)}},[]);let r=ed(t),i=Ju(t);return(0,sn.jsxs)("div",{className:`im-pending${e?` ${e}`:""}`,role:"status","aria-live":"polite","aria-label":r,children:[(0,sn.jsx)("div",{className:"im-pending-label",title:r,children:r}),(0,sn.jsx)("div",{className:"im-pending-track","aria-hidden":!0,children:(0,sn.jsx)("div",{className:"im-pending-bar",style:{transform:`scaleX(${i.toFixed(4)})`}})}),(0,sn.jsx)("span",{className:"visually-hidden",children:cs(t)})]})}var he=require("react"),dd=require("react-dom");var Bx={id:"__custom",label:"\u81EA\u5B9A\u4E49"},Wx=64;function nd(e){return e.trim().replace(/\s+/g," ")}function Fx(e,t){return e.some(n=>n.value===t)}function od(e,t){let n=nd(t);return n===""||Fx(e,n)?e:[...e,{value:n,label:n,group:Bx}]}function rd(e){let t=nd(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>Wx?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function id(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let s=t.get(i.id);s!==void 0?s.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var yr=0;function sd(){yr+=1}function ad(){yr=Math.max(0,yr-1)}function ld(){return yr>0}var Vx=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function us(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=Vx.has(o)?"-":n}return t}function cd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function Gx(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+cd(e,i)-i);for(let i=1;i<t.length;i++){let s=Array(e.length).fill(n),a=n,c=n,l=n;for(let[u,d]of o.entries()){if(c!==n&&(l=Math.max(l,c+u-2)),e.charAt(u)===t.charAt(i)){let f=1+cd(e,u),p=n;a!==n&&(p=a+f+4),l!==n&&(p=Math.max(p,l+f+1-u)),s[u]=p}c=a,a=d}o=s}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function ud(e,t){let n=us(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let s=r.label===void 0?[r.name]:[r.name,r.label],a=!1,c;for(let l of s){let u=us(l).toLowerCase(),d=Gx(u,n);d!==void 0&&(a||=u.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:a,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var me=require("react/jsx-runtime"),Xx=4;function On({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:s="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:a=!1,onCreateCustom:c,"aria-describedby":l,"aria-invalid":u,renderOption:d,title:f}){let[p,m]=(0,he.useState)(!1),[y,b]=(0,he.useState)(-1),[g,k]=(0,he.useState)(""),[h,v]=(0,he.useState)(null),x=(0,he.useRef)(null),S=(0,he.useRef)(null),C=(0,he.useRef)(null),N=(0,he.useId)(),P=`${r??`select-${N}`}-listbox`,W=`${P}-search`,I=(0,he.useMemo)(()=>{if(g.trim()==="")return e;let B=e.map(R=>({name:R.value,label:R.label,option:R}));return ud(B,g).map(R=>R.option)},[e,g]),L=i===void 0||i==="auto"?e.length>Xx:i,E=I.findIndex(B=>B.value===t),w=e.find(B=>B.value===t),M=B=>`${P}-option-${B}`,_=L&&a===!0,z=(0,he.useMemo)(()=>{let B=g.trim();if(B!=="")return I.find(R=>R.value===B||R.label===B)},[I,g]),D=(0,he.useMemo)(()=>{if(!_||z!==void 0)return null;let B=rd(g);return B.ok?B.value:null},[_,z,g]),O=(B=E>=0?E:0)=>{!e.length&&!_||(b(e.length===0?-1:Math.min(Math.max(B,0),e.length-1)),m(!0))},V=(B=!1)=>{m(!1),k(""),B&&window.setTimeout(()=>S.current?.focus(),0)},H=B=>{let R=I[B];R&&(n(R.value),V(!0))},F=B=>{c?.(B),V(!0)},K=()=>{let B=S.current;if(!B)return;let R=B.getBoundingClientRect(),X=4,ee=8,te=B.offsetWidth||R.width,Z=Math.max(ee,Math.min(R.left,window.innerWidth-te-ee)),Q=window.innerHeight-R.bottom-X-ee,ie=R.top-X-ee,le=Q<160&&ie>Q,fe=Math.max(120,Math.min(240,le?ie:Q));v({left:Z,top:le?Math.max(ee,R.top-X-fe):R.bottom+X,width:te,maxHeight:fe})};(0,he.useEffect)(()=>{if(p)return sd(),()=>ad()},[p]),(0,he.useLayoutEffect)(()=>{if(!p)return;K();let B=()=>K();window.addEventListener("scroll",B,!0),window.addEventListener("resize",B);let R=typeof ResizeObserver>"u"?null:new ResizeObserver(B);return S.current&&R?.observe(S.current),()=>{R?.disconnect(),window.removeEventListener("scroll",B,!0),window.removeEventListener("resize",B)}},[p]),(0,he.useEffect)(()=>{p&&L&&h&&C.current?.focus()},[p,L,h]),(0,he.useEffect)(()=>{p&&b(B=>I.length===0?-1:Math.min(Math.max(B,0),I.length-1))},[p,I.length]),(0,he.useEffect)(()=>{!e.length&&!_&&p&&(m(!1),b(-1))},[p,e.length,_]),(0,he.useEffect)(()=>{let B=R=>{let X=R.target;x.current?.contains(X)||document.getElementById(P)?.contains(X)||V()};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[P]);let q=(B,R)=>{if(B.key==="Tab"){V();return}if(B.key==="Escape"){p&&(B.preventDefault(),V(!0));return}if(B.key==="ArrowDown"||B.key==="ArrowUp"){if(B.preventDefault(),!p){O();return}if(I.length===0)return;let X=B.key==="ArrowDown"?1:-1;b(ee=>(ee+X+I.length)%I.length);return}if(B.key==="Home"||B.key==="End"){if(I.length===0)return;B.preventDefault(),p||m(!0),b(B.key==="Home"?0:I.length-1);return}if(B.key==="Enter"){if(B.preventDefault(),!p){O();return}if(_&&g.trim()!==""){z!==void 0?(n(z.value),V(!0)):D!==null&&F(D);return}H(y);return}!R&&B.key===" "&&(B.preventDefault(),p?H(y):O())},J=(0,he.useMemo)(()=>id(I),[I]),re=(0,he.useMemo)(()=>{let B=new Map;return I.forEach((R,X)=>B.set(R,X)),B},[I]);return(0,me.jsxs)("div",{ref:x,className:`im-select-root ${o}`.trim(),children:[(0,me.jsxs)("button",{ref:S,type:"button",id:r,title:f,onClick:()=>p?V():O(),onKeyDown:B=>q(B,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":P,"aria-activedescendant":p&&y>=0?M(y):void 0,"aria-describedby":l,"aria-invalid":u,className:`im-select-trigger${p?" is-open":""}`,children:[d&&w?(0,me.jsxs)("span",{className:"im-select-value",children:[d(w),(0,me.jsx)("span",{className:"im-select-label",children:w.label})]}):(0,me.jsx)("span",{className:"im-select-label",children:w?.label??"\u8BF7\u9009\u62E9"}),(0,me.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,me.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&h&&(0,dd.createPortal)((0,me.jsxs)("div",{id:P,"data-portal":"select-list",className:"im-select-list",style:{left:h.left,top:h.top,width:h.width,maxHeight:h.maxHeight},children:[L&&(0,me.jsx)("div",{className:"im-select-search",children:(0,me.jsx)("input",{ref:C,id:W,type:"text",className:"im-select-search-input",value:g,onChange:B=>k(B.target.value),onKeyDown:B=>q(B,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":P,"aria-activedescendant":y>=0?M(y):void 0})}),(0,me.jsxs)("ul",{role:"listbox","aria-labelledby":L?W:void 0,className:"im-select-rows",children:[I.length===0&&(0,me.jsx)("li",{role:"presentation",className:"im-select-empty",children:s}),J.map(B=>(0,me.jsxs)("li",{role:"presentation",className:"im-select-group",children:[B.label!==""&&(0,me.jsx)("div",{className:"im-select-group-title",role:"presentation",children:B.label}),(0,me.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:B.rows.map(R=>{let X=re.get(R)??-1,ee=R.value===t,te=X===y;return(0,me.jsxs)("li",{id:M(X),role:"option","aria-selected":ee,className:`im-select-option${ee?" is-selected":""}${te?" is-active":""}`,onMouseEnter:()=>b(X),onMouseDown:Z=>Z.preventDefault(),onClick:()=>H(X),children:[d?(0,me.jsxs)("span",{className:"im-select-value",children:[d(R),(0,me.jsx)("span",{className:"im-select-label",children:R.label})]}):(0,me.jsx)("span",{className:"im-select-label",children:R.label}),ee&&(0,me.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,me.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},R.value)})})]},B.id||"__ungrouped"))]}),D!==null&&(0,me.jsx)("div",{className:"im-select-custom",children:(0,me.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:B=>B.preventDefault(),onClick:()=>F(D),children:(0,me.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",D,"\u201D"]})})})]}),document.body)]})}var Y=require("react/jsx-runtime"),ds=(0,Ke.createContext)(null);function fs(){let e=(0,Ke.useContext)(ds);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function ps(){return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(on,{type:"target",position:j.Top,className:"im-handle"}),(0,Y.jsx)(on,{type:"source",position:j.Bottom,className:"im-handle"})]})}function ms({children:e}){return(0,Y.jsx)("div",{className:"im-rail nodrag",children:e})}function Et({label:e,onClick:t,danger:n,children:o}){return(0,Y.jsx)("button",{type:"button",className:`im-icon-btn nodrag${n?" is-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var pd=(0,Ke.memo)(function({id:t,data:n,selected:o}){let r=fs(),[i,s]=(0,Ke.useState)(!1),a=n.missing||i;return(0,Y.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${a?" is-missing":""}`,style:{padding:8,width:144},children:[(0,Y.jsx)(ps,{}),a?(0,Y.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,Y.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:c=>{c.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,(0,Y.jsxs)(ms,{children:[(0,Y.jsx)(Et,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,Y.jsx)(Ee,{name:"eye"})}),(0,Y.jsx)(Et,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,Y.jsx)(Ee,{name:"crop"})}),(0,Y.jsx)(Et,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,Y.jsx)(Ee,{name:"expand"})}),(0,Y.jsx)(Et,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,Y.jsx)(Ee,{name:"grid"})}),(0,Y.jsx)(Et,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,Y.jsx)(Ee,{name:"wand"})}),(0,Y.jsx)(Et,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,Y.jsx)(Ee,{name:"image"})}),(0,Y.jsx)(Et,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Y.jsx)(Ee,{name:"trash"})})]}),(0,Y.jsx)("div",{className:"im-thumb",onDoubleClick:c=>{c.stopPropagation(),r.zoomImage(t)},children:n.url?(0,Y.jsx)("img",{src:n.url,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):(0,Y.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,Y.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Y.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),fd=4,md=(0,Ke.memo)(function({id:t,data:n,selected:o}){let r=fs(),i=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,a=Math.min(Math.max(n.imageCount-1,0),3);return(0,Y.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,Y.jsx)(ps,{}),(0,Y.jsx)(ms,{children:(0,Y.jsx)(Et,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Y.jsx)(Ee,{name:"trash"})})}),(0,Y.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:a},(c,l)=>(0,Y.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*fd}px, ${-(l+1)*fd}px)`}},l)),(0,Y.jsxs)("div",{className:"im-group-face",children:[(0,Y.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,Y.jsxs)("div",{className:"im-group-size",children:[i," MB"]}),s>0?(0,Y.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function Yx({from:e}){let[t,n]=(0,Ke.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ke.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Y.jsx)(Y.Fragment,{children:Hu(t)})}var qx={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"},gd=(0,Ke.memo)(function({id:t,data:n,selected:o}){let r=fs(),i=r.config,s=n.status==="queued"||n.status==="running",a=i?.sizes??[],c=i?.qualities??[],l=a.some(d=>d.value===n.size)||!n.size?a:[...a,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],u=i?.qualityEffective!==!1;return(0,Y.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Y.jsx)(ps,{}),(0,Y.jsxs)(ms,{children:[(0,Y.jsx)("span",{className:"im-rail-dot",title:qx[n.status]??"\u5C31\u7EEA",children:(0,Y.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Y.jsx)(Et,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Y.jsx)(Ee,{name:"trash"})})]}),(0,Y.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Y.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n.prompt,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onChange:d=>r.updatePrompt(t,{prompt:d.target.value})}),(0,Y.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:u?"7fr 3fr":"1fr",marginTop:8},children:[(0,Y.jsxs)("div",{style:{minWidth:0},children:[(0,Y.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,Y.jsx)(On,{className:"im-select-fill",options:od(l,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:d=>r.updatePrompt(t,{size:d})})]}),u?(0,Y.jsxs)("div",{style:{minWidth:0},children:[(0,Y.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,Y.jsx)(On,{className:"im-select-fill",options:c.map(d=>({value:d,label:d})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:d=>r.updatePrompt(t,{quality:d})})]}):null]}),(0,Y.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Y.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,Y.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:i?.defaultOutputDir??"",onChange:d=>r.updatePrompt(t,{outputDir:d.target.value})})]}),n.status==="running"?(0,Y.jsx)(td,{}):null,n.status==="failed"&&n.message?(0,Y.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Y.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Y.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!n.prompt.trim(),onClick:d=>{d.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,Y.jsx)(Yx,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,Y.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:d=>{d.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var hd=`
/* \u8BBE\u8BA1 token\uFF1A\u4E0E Imagora \u7684 index.css \u540C\u4E00\u5957\u9636\u68AF\uFF0C\u6539\u89C2\u611F\u53EA\u52A8\u8FD9\u5F20\u8868 */
body {
  /* \u54C1\u724C\u8272\uFF1A\u5BBF\u4E3B\u6709\u4E24\u6761\uFF0C\u5FC5\u987B\u53D6\u5F69\u8272\u90A3\u6761\u3002
     alias-brand-primary \u662F\u300C\u4E3B\u4F53\u6587\u5B57\u8272\u300D\uFF08\u6D45\u8272\u8FD1\u9ED1 #0f1115 / \u6DF1\u8272\u8FD1\u767D #f9fafb\uFF09\uFF0C
     \u62FF\u5B83\u5F53\u5F3A\u8C03\u8272\u7684\u8BDD\u6D9F\u6F2A\u3001\u9009\u4E2D\u6846\u3001\u8FDE\u7EBF\u3001\u72B6\u6001\u706F\u5168\u53D8\u9ED1\u767D\uFF0C\u4E0E\u539F\u7248\u7684\u53EF\u8C03\u8272\u76F8\u5B8C\u5168\u4E0D\u540C\uFF1B
     brand-primary-new-colorprimary-new-color \u624D\u662F\u5F69\u8272\u4E3B\u8272\uFF08\u6D45 #4176e6 / \u6DF1 #4d93f8\uFF09\u3002 */
  --im-brand: var(--dsw-alias-brand-primary-new-colorprimary-new-color, #4176e6);
  --im-brand-dark: var(--dsw-alias-label-primary, #17202b);
  /* \u53E0\u5728\u54C1\u724C\u8272\u5B9E\u5E95\u4E0A\u7684\u524D\u666F\u8272\uFF1A\u6D45\u8272\u4E3B\u9898\u662F\u767D\uFF0C\u6DF1\u8272\u4E3B\u9898\u662F\u8FD1\u9ED1 \u2014\u2014 \u4E0D\u80FD\u5199\u6B7B #fff */
  --im-on-brand: var(--dsw-alias-label-primary-foreground, #fff);

  /* \u8868\u9762\u6750\u8D28\uFF1A\u5916\u5C42\u6700\u6D45\uFF0C\u5185\u5D4C\u63A7\u4EF6\u6B21\u4E4B\uFF0C\u6D6E\u5C42\u6700\u9AD8\u4E00\u6863\u3002
     layer-1/2 \u5728\u6D45\u8272\u4E3B\u9898\u4E0B\u90FD\u662F\u7EAF\u767D\uFF08\u53EA\u6709\u6DF1\u8272\u624D\u5206\u6863\uFF09\uFF0C\u6240\u4EE5\u300C\u5185\u5D4C\u4E00\u6863\u300D\u8981\u7528
     bg-module-platform\uFF1B\u300C\u6D6E\u5C42\u300D\u4E0D\u80FD\u62FF bg-overlay \u2014\u2014 \u90A3\u4E00\u6863\u6D45\u8272\u662F #e9ecf2\uFF0C
     \u6BD4\u5361\u7247\u8FD8\u7070\uFF0C\u65B9\u5411\u662F\u53CD\u7684\u3002 */
  --im-surface: var(--dsw-alias-bg-layer-1, #fff);
  --im-surface-inset: var(--dsw-alias-bg-module-platform, #f9fafb);
  --im-surface-float: var(--dsw-alias-bg-layer-1, #fff);

  --im-ink: var(--dsw-alias-label-primary, #17202b);
  --im-ink-2: var(--dsw-alias-label-secondary, #556);
  --im-ink-3: var(--dsw-alias-label-tertiary, #8a8a8a);
  --im-line: var(--dsw-alias-border-l2, rgba(31, 41, 55, 0.12));
  --im-line-strong: var(--dsw-alias-border-l3, rgba(31, 41, 55, 0.2));
  --im-hover: var(--dsw-alias-interactive-bg-hover, rgba(31, 41, 55, 0.05));

  --im-danger: var(--dsw-alias-state-error-primary, #dc2626);
  --im-warn: var(--dsw-alias-state-warn-primary, #d78a00);
  --im-ok: var(--dsw-alias-state-success-primary, #19a45a);

  /* \u8FDE\u7EBF\u4E09\u6001\uFF1A\u4E0E Imagora \u540C\u6784\u3002idle \u4E2D\u6027\u3001hovered \u54C1\u724C\u8272\u3001selected \u518D\u6DF1\u4E00\u6863
     \uFF08\u7528 label-primary \u800C\u4E0D\u662F brand-dark\uFF1A\u540E\u8005\u5C31\u662F ink\uFF0C\u4E24\u6001\u4F1A\u51E0\u4E4E\u540C\u8272\uFF09 */
  --im-edge-idle: var(--im-ink-3);
  --im-edge-hovered: var(--im-brand);
  --im-edge-selected: var(--im-ink);
  --im-snap: var(--im-brand);

  /* \u5C3A\u5BF8\u9636\u68AF\uFF1A\u9876\u680F\u63A7\u4EF6 28 \u2192 \u8868\u5355\u63A7\u4EF6 38 \u2192 \u4E3B\u884C\u52A8 46\uFF1B\u5706\u89D2 \u80F6\u56CA / \u5361\u7247 16 / \u63A7\u4EF6 10 */
  --im-h-ctl: 28px;
  --im-h-field: 38px;
  --im-r-pill: 999px;
  /* \u5706\u89D2\u5206\u6210\u56DB\u6863\uFF0C\u90FD\u5BF9\u5E94\u539F\u7248\u7684\u5B9E\u6D4B\u503C\uFF1A
     pill \u80F6\u56CA \u2192 card \u9875\u5934/\u5F39\u7A97 16 \u2192 surface \u5361\u7247\u4E0E\u753B\u5E03 18 \u2192 control \u8F93\u5165\u63A7\u4EF6 10
     \u53E6\u6709 float 11\uFF08\u539F\u7248 minimap / controls\uFF09\u4E0E sm 8\uFF08\u539F\u7248 rounded-lg \u4E00\u65CF\uFF09\u3002 */
  --im-r-card: 16px;
  --im-r-surface: 18px;
  --im-r-float: 11px;
  --im-r-sm: 8px;
  --im-r-control: 10px;

  /* \u9634\u5F71\u8D70\u5BBF\u4E3B elevation\uFF1A\u5199\u6B7B rgba \u5728\u6DF1\u8272\u4E3B\u9898\u4E0B\u7B49\u4E8E\u6CA1\u6709\u9634\u5F71 */
  --im-shadow-card: var(--dsw-elevation-soft, 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.04));
  --im-shadow-float: var(--dsw-elevation-panel, 0 6px 22px rgba(0, 0, 0, 0.12));
}

.im-root {
  position: relative;
  display: flex;
  flex-direction: column;
  /* \u6491\u6EE1\u7236\u5BB9\u5668\uFF1A\u5BBF\u4E3B\u7684\u63D2\u69FD\u5BB9\u5668\u662F flex\uFF0C\u4E0D\u7ED9 width/flex \u7684\u8BDD\u8FD9\u91CC\u4F1A\u6309\u5185\u5BB9\u6536\u7F29\uFF0C
     \u753B\u5E03\u53F3\u4FA7\u5C31\u4F1A\u7559\u51FA\u4E00\u6761"\u88AB\u88C1\u6389"\u7684\u7A7A\u5E26 */
  flex: 1 1 auto;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  min-height: 0;
  background: var(--im-surface-inset);
  color: var(--im-ink);
  padding-top: 8px;
  font-family: var(--dsw-font-family, system-ui, sans-serif);
  font-size: 13px;
  letter-spacing: -0.01em;
}

/* ---------------- \u9876\u680F ----------------
   \u4E0E Imagora \u4E00\u6837\u4E24\u884C\uFF1A\u4E0A\u9762\u4E00\u884C\u9875\u5934\uFF08\u6765\u6E90 / \u6A21\u578B / \u6210\u672C / \u8BBE\u7F6E\uFF09\uFF0C\u4E0B\u9762\u4E00\u884C\u753B\u5E03\u52A8\u4F5C\u3002
   \u884C\u95F4\u8DDD 2px\u3001\u6309\u94AE\u95F4\u8DDD 8px \u90FD\u7167\u539F\u7248\uFF08gap-2 / flex-col gap-2\uFF09\u3002 */
/* \u54C1\u724C\u533A\uFF1Alogo + \u6807\u9898\u5E76\u6392\uFF0C\u4E0E\u539F\u7248 studio-header \u5DE6\u7AEF\u4E00\u81F4 */
.im-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  height: var(--im-h-ctl);
  padding: 0 2px 0 0;
  border: 0;
  background: transparent;
  color: var(--im-ink);
  cursor: pointer;
  flex: none;
}
.im-brand-title {
  /* \u539F\u7248 .brand-swing__face h1 \u662F 1.05rem + \u8D1F\u5B57\u8DDD\uFF0C\u4E0D\u662F\u6574\u6570 16px */
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--im-ink);
}
.im-brand {
  border-radius: 12px;
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), filter 0.28s ease;
}
/* \u539F\u7248 hover\uFF1A\u6574\u5757\u62AC\u8D77 1px\u3001\u653E\u5927 1.5%\uFF0C\u5149\u6655\u843D\u5728 logo \u4E0E\u6807\u9898\u4E0A */
.im-brand:hover {
  transform: translateY(-1px) scale(1.015);
}
.im-brand:hover svg {
  filter: drop-shadow(0 0 5px color-mix(in srgb, var(--im-brand) 28%, transparent));
}
.im-brand:hover .im-brand-title {
  color: var(--im-brand);
  filter: drop-shadow(0 5px 12px color-mix(in srgb, var(--im-brand) 18%, transparent));
}

/* \u9876\u680F\u4E24\u884C\u5404\u662F\u4E00\u5757\u5361\u7247\u5BB9\u5668\uFF08\u539F\u7248 .studio-header / .studio-toolbar\uFF09\uFF1A
   \u7EC6\u8FB9\u6846 + \u5361\u7247\u5706\u89D2 + \u67D4\u548C\u9634\u5F71 + \u5361\u7247\u8868\u9762\u3002\u505A\u6210\u8D34\u8FB9\u7684\u88F8\u6761\u5C31\u4F1A\u663E\u5F97"\u6BDB\u576F"\u3002
   \u63A7\u4EF6\u7B49\u9AD8 28px\uFF0C\u5171\u7528\u4E00\u6761\u6C34\u5E73\u57FA\u7EBF\u3002 */
/* \u9875\u5934\u884C\u91CC\u7684\u6309\u94AE\u662F\u80F6\u56CA\u5F62\uFF08\u539F\u7248\u53EA\u6709 .studio-header \u4E0A\u4E0B\u6587\u624D\u8FD9\u6837\uFF09 */
.im-header .im-btn-ghost,
.im-header .im-btn-primary {
  border-radius: var(--im-r-pill);
}
.im-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 12px 0;
  padding: 10px 14px;
  border: 1px solid var(--im-edge-idle);
  border-radius: var(--im-r-card);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
}
.im-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  /* \u4E0E\u9875\u5934\u540C\u4E3A\u5361\u7247\u5BB9\u5668\uFF0C\u4F46\u5706\u89D2\u7565\u5C0F\uFF08\u539F\u7248 .studio-toolbar 13px\uFF09 */
  margin: 8px 12px 0;
  padding: 9px 10px;
  position: relative;
  border: 1px solid var(--im-edge-idle);
  border-radius: 13px;
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
  z-index: 5;
}
/* \u5F39\u6027\u5360\u4F4D\uFF1A\u628A\u540E\u9762\u90A3\u7EC4\u6309\u94AE\u63A8\u5230\u884C\u5C3E\u3002\u5FC5\u987B\u662F\u4E0D\u5E26\u7236\u9009\u62E9\u5668\u7684\u5168\u5C40\u89C4\u5219 \u2014\u2014
   \u53EA\u5728 .im-toolbar \u4E0B\u5B9A\u4E49\u7684\u8BDD\uFF0C\u9875\u5934\u91CC\u7528\u540C\u4E00\u4E2A\u7C7B\u540D\u4E0D\u4F1A\u751F\u6548\uFF0C
   \u8868\u73B0\u4E3A\u300C\u53F3\u4FA7\u6CA1\u6709\u6309\u94AE\u3001\u5168\u6324\u5728\u5DE6\u8FB9\u300D\u3002 */
.im-spacer { flex: 1 1 auto; }
/* \u5DE5\u5177\u680F\u91CC\u7684\u6B21\u8981\u6309\u94AE\u662F\u6DF1\u7070\u6587\u5B57\uFF0C\u4E0D\u662F\u54C1\u724C\u8272 \u2014\u2014 \u539F\u7248 .studio-toolbar .btn-ghost \u5C31\u662F
   rgba(23,32,43,.72)\u3002\u54C1\u724C\u8272\u53EA\u5728\u9875\u5934\u90A3\u4E00\u884C\u4E0E\u4E3B\u884C\u52A8\u4E0A\uFF0C\u5426\u5219\u6574\u6761\u5DE5\u5177\u680F\u90FD\u5728\u53D1\u5149\u3002 */
.im-toolbar .im-btn-ghost {
  color: var(--im-ink-2);
}
/* \u9876\u680F\u5206\u5DE6\u53F3\u4E24\u7EC4\uFF08\u4E0E Imagora \u540C\u4E00\u5206\u533A\uFF09\uFF1A\u5DE6\u4FA7\u521B\u5EFA\u3001\u53F3\u4FA7\u5DE5\u4F5C\u6D41\uFF0C\u53F3\u4FA7\u7EC4\u9760\u53F3\u5BF9\u9F50 */
.im-toolbar-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
/* \u5DE6\u4FA7\u521B\u5EFA\u7EC4\u53F3\u4FA7\u4E00\u6761\u5206\u9694\u7EBF\uFF1A\u4E24\u7EC4\u52A8\u4F5C\u6027\u8D28\u4E0D\u540C\uFF0C\u9760\u7EBF\u5206\u5F00\u6BD4\u9760\u95F4\u8DDD\u53EF\u9760\uFF08\u539F\u7248\u505A\u6CD5\uFF09 */
.im-toolbar-group:not(.im-toolbar-group--end) {
  padding-right: 10px;
  border-right: 1px solid var(--im-edge-idle);
}
.im-toolbar-group--end { flex: 1; min-width: 0; justify-content: flex-end; }


/* ---------------- \u884C\u52A8\u6309\u94AE\u4F53\u7CFB\uFF08\u7167\u642C btn-primary / btn-ghost \u4E24\u6863\uFF09 ----------------
   \u4E24\u6863\u540C\u6E90\uFF1A\u80F6\u56CA\u5706\u89D2 + \u4E3B\u4F53\u8272 + hover \u6D9F\u6F2A\u53CD\u8F6C\u3002
   \u6D9F\u6F2A\u5C42\u662F\u540C\u5F62 ::before\uFF0C\u4ECE\u4E2D\u5FC3\u5411\u5DE6\u53F3\u6A2A\u5411\u5C55\u5F00\uFF08scaleX 0\u21921\uFF09\uFF0C\u4EFB\u610F\u5BBD\u5EA6\u90FD\u5B8C\u6574\u8986\u76D6\u3002 */
.im-btn-primary,
.im-btn-ghost {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 0;
  /* \u5706\u89D2\u6309\u539F\u7248\u5206\u6863\uFF1A\u4E00\u822C\u573A\u666F ghost 10 / primary 11\uFF0C\u53EA\u6709\u9875\u5934\u90A3\u4E00\u884C\u662F\u80F6\u56CA\u3002
     \u89C1\u4E0B\u9762 .im-btn-ghost / .im-btn-primary / .is-pill \u4E09\u6761\u3002 */
  border-radius: var(--im-r-control);
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease;
}
/* \u9875\u5934\u91CC\u7684\u6309\u94AE\u624D\u662F\u80F6\u56CA\uFF08\u539F\u7248 .studio-header .btn-ghost \u624D\u6709 999px\uFF09 */
.im-btn-primary.is-pill,
.im-btn-ghost.is-pill {
  border-radius: var(--im-r-pill);
}
.im-btn-primary::before,
.im-btn-ghost::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: var(--im-btn-fill);
  transform: scaleX(0);
  transform-origin: 50% 50%;
  z-index: -1;
  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}
.im-btn-primary:hover:not(:disabled)::before,
.im-btn-ghost:hover:not(:disabled)::before { transform: scaleX(1); }

.im-btn-primary {
  border-radius: 11px;
  background: var(--im-brand);
  color: var(--im-on-brand);
  /* \u6D9F\u6F2A\u5C42 = \u54C1\u724C\u5E95\u4E0A\u7684\u524D\u666F\u8272\uFF1A\u6D45\u8272\u4E3B\u9898\u767D\u3001\u6DF1\u8272\u4E3B\u9898\u8FD1\u9ED1\u3002
     \u5199\u6B7B #fff \u7684\u8BDD\uFF0C\u6DF1\u8272\u4E3B\u9898\u4E0B\u662F\u300C\u8FD1\u767D\u6D9F\u6F2A + \u8FD1\u767D\u5B57\u300D\uFF0C\u5B57\u76F4\u63A5\u6D88\u5931\u3002 */
  --im-btn-fill: var(--im-on-brand);
}
.im-btn-primary:hover:not(:disabled) {
  color: var(--im-brand);
  box-shadow: 0 0 20px color-mix(in srgb, var(--im-brand) 40%, transparent);
}
.im-btn-ghost {
  border-radius: 10px;
  background: transparent;
  color: var(--im-brand);
  --im-btn-fill: var(--im-brand);
}
.im-btn-ghost:hover:not(:disabled) {
  /* \u6D9F\u6F2A\u662F\u54C1\u724C\u8272\u5B9E\u5E95\uFF0C\u53CD\u767D\u540C\u6837\u8981\u7528\u524D\u666F\u8272 */
  color: var(--im-on-brand);
  box-shadow: 0 0 20px color-mix(in srgb, var(--im-btn-fill) 40%, transparent);
}
.im-btn-primary:active:not(:disabled),
.im-btn-ghost:active:not(:disabled) { transform: scale(0.98); }
.im-btn-primary:disabled,
.im-btn-ghost:disabled { cursor: not-allowed; opacity: 0.5; }
/* \u5C3A\u5BF8\u6863\uFF1A\u5DE5\u5177\u680F / \u6A21\u6001 / \u884C\u5185\u5C0F\u6309\u94AE */
.im-btn-sm { padding: 4px 12px; font-size: 12px; }
.im-btn-xs { padding: 4px 8px; font-size: 11px; }
/* \u5371\u9669\u4FEE\u9970\uFF1A\u6587\u5B57\u4E0E\u6D9F\u6F2A\u540C\u4E3A\u7EA2\u8272\uFF0C\u914D\u5408 ghost \u4F7F\u7528 */
.im-btn-danger { color: var(--im-danger); --im-btn-fill: var(--im-danger); }

.im-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--im-ink-2);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.im-icon-btn:hover { background: var(--im-hover); color: var(--im-ink); }
.im-icon-btn.is-danger { color: var(--im-danger); }
.im-icon-btn.is-danger:hover {
  background: var(--dsw-alias-interactive-bg-hover-danger, rgba(220, 38, 38, 0.12));
}

.im-zoom {
  font-variant-numeric: tabular-nums;
  font-size: 12px;
  font-weight: 600;
  color: var(--im-brand);
  min-width: 42px;
  text-align: right;
}

/* \u6210\u672C\u770B\u677F\uFF1A\u4E2D\u6027\u80F6\u56CA\uFF0C\u8D85\u9884\u7B97\u624D\u8F6C\u7EA2 */
.im-cost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 22px;
  padding: 0 9px;
  border-radius: var(--im-r-pill);
  background: var(--im-hover);
  color: var(--im-ink-2);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  white-space: nowrap;
}
.im-cost.is-over { background: color-mix(in srgb, var(--im-danger) 14%, transparent); color: var(--im-danger); }
.im-cost-num { line-height: 1; }
.im-cost-bar { width: 44px; height: 5px; border-radius: var(--im-r-pill); background: var(--im-line); overflow: hidden; }
.im-cost.is-over .im-cost-bar { background: color-mix(in srgb, var(--im-danger) 24%, transparent); }
.im-cost-fill { display: block; height: 100%; border-radius: var(--im-r-pill); background: var(--im-brand); }
.im-cost.is-over .im-cost-fill { background: var(--im-danger); }
.im-cost-flag { font-size: 10.5px; font-weight: 600; }

/* ---------------- \u8F93\u5165\u63A7\u4EF6\uFF08\u7167\u642C .field-control\uFF09 ----------------
   transition \u53EA\u542B border/box-shadow\uFF1A\u542B\u5C3A\u5BF8\u4F1A\u8BA9 textarea \u62D6\u62FD resize \u5361\u987F\u3002 */
.im-field {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--im-line-strong);
  /* \u539F\u7248 .field-control = rounded-lg\uFF088px\uFF09\uFF0C\u4E0D\u662F --r-control(10) */
  border-radius: 8px;
  background: var(--im-surface);
  color: var(--im-ink);
  font-size: 14px;
  line-height: 1.6;
  padding: 8px 20px;
  resize: vertical;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.im-field:hover { border-color: var(--im-ink-3); }
.im-field:focus {
  border-color: var(--im-brand);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--im-brand) 20%, transparent);
}
.im-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--im-ink-2);
  margin-bottom: 5px;
}
/* \u5B57\u6BB5\u7EA7\u8BF4\u660E\u5C0F\u5B57\uFF1A\u4E0E\u539F\u7248\u914D\u7F6E\u5F39\u7A97\u540C\u4E00\u6863\uFF0811px / \u4E09\u7EA7\u6587\u5B57\u8272\uFF09 */
/* \u4E00\u7EC4\u540C\u7C7B\u5B57\u6BB5\u7684\u5BB9\u5668\uFF1A\u53C2\u6570\u8BF4\u660E\u91CC\u6210\u7EC4\u51FA\u73B0\uFF08\u63A5\u53E3\u4E09\u9879\u3001\u76EE\u5F55\u4E24\u9879\uFF09 */
.im-fieldset {
  display: grid;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--im-line);
}
/* \u5B57\u6BB5\u4E0B\u9762\u90A3\u6392\u6309\u94AE\uFF1A\u6309\u94AE\u591A\u65F6\u81EA\u52A8\u6362\u884C\uFF0C\u4E0D\u6324\u6210\u4E00\u6761 */
.im-field-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
}
.im-field-hint {
  margin: 5px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
/* \u5BC6\u94A5\u6846\u7684\u72B6\u6001\u6807\u8BB0\uFF1A\u5DF2\u914D\u7F6E\u7EFF\u3001\u672A\u914D\u7F6E\u7425\u73C0\uFF0C\u90FD\u53EA\u7740\u8272\u6587\u5B57 */
.im-field-state {
  font-size: 11px;
  font-weight: 400;
}
.im-field-state.is-ok { color: var(--im-ok); }
.im-field-state.is-warn { color: var(--im-warn); }
.im-row { display: flex; align-items: center; gap: 6px; }
.im-muted { color: var(--im-ink-3); }
.im-node-title { font-size: 12px; font-weight: 600; color: var(--im-brand-dark); }

/* ---------------- \u81EA\u7ED8\u4E0B\u62C9\uFF08\u7167\u642C Imagora \u7684 .select-* 16 \u6761\u89C4\u5219\uFF09 ----------------
   \u539F\u7248\u7528 Tailwind @apply \u5199\uFF0C\u8FD9\u91CC\u5168\u90E8\u5C55\u5F00\u6210\u666E\u901A\u58F0\u660E\uFF1B\u989C\u8272\u4E00\u5F8B\u8D70 --im-* \u8BED\u4E49 token\u3002
   \u80CC\u666F\u4E0E\u6587\u5B57\u6210\u5BF9\u53D6\u81EA\u540C\u4E00\u5957 token \u2014\u2014 \u6DF7\u7528\u4E24\u5957\u4F1A\u51FA\u300C\u9ED1\u5E95\u9ED1\u5B57\u300D\u3002 */
.im-select-root {
  position: relative;
  display: inline-block;
  min-width: 0;
  max-width: 260px;
}

/* \u89E6\u53D1\u5668\uFF1A\u5916\u5F62\u6CBF\u7528\u8F93\u5165\u63A7\u4EF6\uFF08\u7B49\u9AD8\u3001\u540C\u8FB9\u6846\u3001\u540C\u5E95\u8272\uFF09\uFF0C\u52A0\u4E0A\u56FE\u6807\u4E0E\u7701\u7565\u53F7 */
.im-select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: var(--im-h-ctl);
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid var(--im-line-strong);
  border-radius: 8px;
  background: var(--im-surface);
  color: var(--im-ink);
  font-family: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease;
}
.im-select-trigger:hover { border-color: var(--im-ink-3); }
.im-select-trigger:disabled { cursor: not-allowed; opacity: 0.55; }
.im-select-value {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.im-select-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* \u7BAD\u5934\uFF1A\u5C55\u5F00\u65F6\u7FFB 180\xB0\uFF08\u539F\u7248\u7528 Tailwind \u7684 rotate-180 + transition\uFF09 */
.im-select-caret {
  flex: none;
  color: var(--im-ink-3);
  transition: transform 0.2s ease;
}
.im-select-trigger.is-open .im-select-caret { transform: rotate(180deg); }

/* \u6D6E\u5C42\uFF1Aportal \u5230 body + fixed \u5B9A\u4F4D\uFF0C\u4E0D\u53D7\u4EFB\u4F55\u7956\u5148\u7684 overflow \u88C1\u5207 */
.im-select-list {
  position: fixed;
  z-index: 70;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-float);
}

/* \u9009\u9879\u884C */
.im-select-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 34px;
  padding: 7px 10px;
  box-sizing: border-box;
  border-radius: 7px;
  background: transparent;
  color: var(--im-ink-2);
  font-family: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.im-select-option.is-active {
  color: var(--im-brand);
  background: color-mix(in srgb, var(--im-brand) 7%, transparent);
}
.im-select-option.is-selected {
  color: var(--im-brand);
  font-weight: 600;
}
.im-select-check { flex: none; }

/* \u641C\u7D22\u6846\uFF1A\u8D34\u5728\u5217\u8868\u9876\u90E8\uFF0C\u4E0E\u9009\u9879\u533A\u7528\u4E00\u6761\u7EC6\u7EBF\u5206\u5F00\u3002
   \u8F93\u5165\u6846\u672C\u8EAB\u4E0D\u8981 field \u7684\u8FB9\u6846\uFF0C\u5426\u5219\u300C\u6846\u91CC\u5957\u6846\u300D\uFF0C\u5728\u5DF2\u7ECF\u5E26\u8FB9\u6846\u7684\u6D6E\u5C42\u91CC\u663E\u5F97\u810F\u3002 */
.im-select-search {
  flex: none;
  margin-bottom: 4px;
  padding: 2px 2px 6px;
  border-bottom: 1px solid var(--im-line);
}
.im-select-search-input {
  width: 100%;
  height: 30px;
  padding: 0 9px;
  box-sizing: border-box;
  border: 0;
  border-radius: 7px;
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
  color: var(--im-ink);
  font-family: inherit;
  font-size: 13px;
}
.im-select-search-input::placeholder { color: var(--im-ink-3); }

.im-select-empty {
  padding: 14px 10px;
  color: var(--im-ink-3);
  font-size: 12px;
  text-align: center;
}

/* \u53EF\u6EDA\u52A8\u533A\uFF1Amin-height:0 \u624D\u80FD\u8BA9 flex \u5B50\u9879\u771F\u7684\u6EDA\u52A8\uFF08\u5426\u5219\u5185\u5BB9\u628A\u5BB9\u5668\u6491\u5F00\uFF09 */
.im-select-rows {
  min-height: 0;
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
}

/* \u5206\u7EC4\u6807\u9898\uFF1A\u7C98\u5728\u6EDA\u52A8\u5BB9\u5668\u9876\u90E8\uFF0C\u957F\u5217\u8868\u6EDA\u5230\u4E2D\u6BB5\u4E5F\u77E5\u9053\u81EA\u5DF1\u5728\u54EA\u4E00\u7EC4 */
.im-select-group-title {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 6px 10px 4px;
  background: var(--im-surface-float);
  color: var(--im-ink-3);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.im-select-group-rows { margin: 0; padding: 0; list-style: none; }
.im-select-group + .im-select-group { margin-top: 2px; }

/* \u81EA\u7531\u8F93\u5165\u884C\uFF1A\u56FA\u5B9A\u5728\u6EDA\u52A8\u533A\u4E4B\u5916\uFF0C\u5217\u8868\u5F88\u957F\u65F6\u4E5F\u770B\u5F97\u89C1\uFF0C\u4E0D\u7528\u6EDA\u5230\u5E95\u624D\u80FD\u624B\u586B */
.im-select-custom {
  flex: none;
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px dashed var(--im-line);
}

/* \u8282\u70B9\u5185\u7684\u4E0B\u62C9\u8981\u66F4\u7D27\u51D1\uFF1A14px \u5728 7fr \u5217\u91CC\u4F1A\u88AB\u622A\u6210\u300C1024x1024 (1:1) (0\u2026\u300D */
.im-canvas .im-select-root { max-width: none; }
/* \u6491\u6EE1\u6240\u5728\u5217\uFF08\u8282\u70B9\u91CC\u7684\u5C3A\u5BF8/\u8D28\u91CF\u662F\u4E24\u5217\u7F51\u683C\uFF0C\u5404\u81EA\u5403\u6EE1\u4E00\u683C\uFF09 */
.im-select-fill { display: block; width: 100%; max-width: none; }
.im-select-fill .im-select-trigger { width: 100%; }
.im-canvas .im-select-trigger {
  height: 30px;
  padding: 0 8px;
  font-size: 12px;
}

/* \u8282\u70B9\u5185\u7684\u8F93\u5165/\u4E0B\u62C9\u7528\u7D27\u51D1\u6863\uFF1A\u539F\u7248 .studio-canvas .node-pop \u628A\u5B57\u53F7\u538B\u5230 12px\u3001
   \u6A2A\u5411\u5185\u8FB9\u8DDD\u6536\u6210 8px \u2014\u2014 14px \u5728 7fr \u5217\u91CC\u4F1A\u88AB\u622A\u6210\u300C1024x1024 (1:1) (0\u2026\u300D\u3002 */
.im-field--compact,
.im-canvas .im-field {
  height: 30px;
  padding: 4px 8px;
  font-size: 12px;
}
.im-canvas textarea.im-field {
  height: auto;
  padding: 8px;
}

/* ---------------- \u8282\u70B9\u5361\u7247\uFF08\u7167\u642C .panel-card\uFF09 ----------------
   \u4E09\u7C7B\u8282\u70B9\u5171\u7528\u540C\u4E00\u5757\u9762\u677F\uFF0C\u9760\u5185\u5BB9\u533A\u5206\uFF0C\u4E0D\u9760\u8272\u76F8\u2014\u2014\u4E0E Imagora \u4E00\u81F4\u3002 */
.im-panel-card {
  position: relative;
  border: 1px solid var(--im-line);
  /* \u539F\u7248 .panel-card \u7684 18px \u5199\u5728\u672A\u5206\u5C42\u89C4\u5219\u91CC\uFF0C\u538B\u8FC7 @layer \u7684 rounded-xl(12) */
  border-radius: var(--im-r-surface);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
/* \u9009\u4E2D\u6001\uFF1A\u539F\u7248\u662F outline 2px + offset 1px\uFF0C\u4E0D\u662F box-shadow \u73AF \u2014\u2014
   outline \u4E0D\u5360\u5E03\u5C40\u3001\u4E5F\u4E0D\u88AB\u5706\u89D2\u88C1\uFF0C\u5361\u7247\u5BC6\u96C6\u65F6\u4E0D\u4F1A\u4E92\u76F8\u6324\u3002 */
.im-panel-card.is-selected {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}
.im-panel-card.is-missing { border-color: var(--im-danger); }
/* \u56FE\u7247\u7EC4\u5361\u9762\uFF1A\u539F\u7248\u662F bg-brand/5 + border-brand/15\uFF0C\u4E0D\u662F\u7EAF\u4E2D\u6027\u5E95 */

.im-thumb {
  /* \u539F\u7248 h-40 w-32\uFF1A\u5BBD 128\u3001\u9AD8 160 \u2014\u2014 \u7AD6\u6784\u56FE\u4E5F\u653E\u5F97\u4E0B\uFF0C\u4E0D\u4F1A\u628A\u5361\u9762\u538B\u6241 */
  width: 128px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* \u539F\u7248\u7F29\u7565\u56FE\u662F .rounded\uFF084px\uFF09\uFF0C\u4E0D\u662F 8 */
  border-radius: 4px;
  background: var(--im-surface-inset);
  cursor: zoom-in;
}
.im-thumb img { width: 100%; height: 100%; object-fit: contain; display: block; }
.im-thumb-label { margin-top: 4px; max-width: 128px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: var(--im-ink-2); }

/* \u53F3\u4FA7\u64CD\u4F5C\u680F\uFF1Ahover \u663E\u793A\u3002\u5BB9\u5668\u4E0D\u7559\u5916\u8FB9\u8DDD\uFF0C\u9760 padding \u6491\u51FA\u89C6\u89C9\u95F4\u9699\uFF0C
   \u5426\u5219\u9F20\u6807\u79FB\u5411\u6309\u94AE\u7684\u9014\u4E2D\u4F1A\u77ED\u6682\u79BB\u5F00 .im-panel-card \u5BFC\u81F4 hover \u95EA\u65AD\u3002 */
.im-rail {
  position: absolute;
  left: 100%;
  top: 8px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 4px 4px 4px 8px;
  border-radius: 8px;
  background: var(--im-surface-float);
  border: 1px solid var(--im-line);
  box-shadow: var(--im-shadow-float);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease;
}
.im-panel-card:hover .im-rail { opacity: 1; pointer-events: auto; }

/* ---------------- \u56FE\u7247\u7EC4\u8282\u70B9\uFF08\u7167\u642C Imagora \u7684 GroupNode \u53E0\u5361\uFF09 ----------------
   \u6839\u8282\u70B9\u7528 padding \u7ED9\u53E0\u5361\u9884\u7559\u9519\u5F00\u7A7A\u95F4\uFF0C\u6240\u4EE5\u53E0\u5361\u6C38\u8FDC\u4E0D\u4F1A\u4F38\u51FA\u8282\u70B9\u8FB9\u754C\u3002
   \u5BBD 224\uFF08\u539F\u7248 w-56\uFF09\u3001\u9519\u5F00\u6B65\u957F 4px \u7531 nodes.tsx \u7684 STACK_STEP_PX \u63A7\u5236\u3002 */
.im-group-node {
  position: relative;
  /* \u539F\u7248 w-56 = 224px \u4E14\u5168\u5C40 border-box\uFF0C\u6240\u4EE5 padding \u7B97\u5728 224 \u91CC\uFF1B
     \u4E0D\u5199 box-sizing \u7684\u8BDD\u5185\u5BB9 224 + padding 12 \u4F1A\u6491\u5230 236\uFF0C
     \u5916\u58F3\u4E0E\u5361\u9762\u5C31"\u5C3A\u5BF8\u5BF9\u4E0D\u4E0A"\u4E86\u3002 */
  box-sizing: border-box;
  width: 224px;
  padding: 12px 0 0 12px;
}
.im-group-stack { position: relative; }
.im-group-stack-card {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--im-brand) 10%, transparent);
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-face {
  position: relative;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--im-brand) 15%, transparent);
  /* \u539F\u7248 bg-brand/5\uFF1A\u5361\u9762\u672C\u8EAB\u5E26\u4E00\u5C42\u6781\u6D45\u7684\u4E3B\u4F53\u8272\uFF0C\u4E0E\u53E0\u5361\u540C\u65CF */
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-count {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.15;
  color: var(--im-ink);
}
.im-group-size { margin-top: 4px; font-size: 16px; color: var(--im-ink-3); }
.im-group-dup { margin-top: 4px; }
.im-group-node.is-selected .im-group-face {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}

/* ---------------- \u5C0F\u6807\u7B7E\uFF08\u7167\u642C .chip\uFF09 ---------------- */
.im-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  /* \u63D2\u4EF6\u91CC\u7684 chip \u5168\u90E8\u7528\u4F5C\u8282\u70B9\u89D2\u6807\uFF0C\u5BF9\u5E94\u539F\u7248 .chip--sm\uFF0818px\uFF09\uFF0C\u4E0D\u662F .chip\uFF0828px\uFF09 */
  height: 18px;
  padding: 0 8px;
  border-radius: var(--im-r-pill);
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  background: var(--im-hover);
  color: var(--im-ink-2);
}
/* \u53EF\u70B9\u7684\u89D2\u6807\uFF08\u8499\u7248\uFF09\uFF1A\u770B\u8D77\u6765\u662F\u6807\u7B7E\uFF0C\u5B9E\u9645\u662F\u6309\u94AE \u2014\u2014 \u6240\u4EE5\u8981\u6709 pointer \u4E0E hover \u53CD\u9988\uFF0C
   \u5426\u5219\u7528\u6237\u6C38\u8FDC\u4E0D\u77E5\u9053\u5B83\u80FD\u70B9\u3002 */
.im-chip--action {
  border: 0;
  font: inherit;
  font-size: inherit;
  cursor: pointer;
  transition: filter 0.15s ease;
}
.im-chip--action:hover { filter: brightness(0.94); }
.im-chip.is-brand { background: color-mix(in srgb, var(--im-brand) 12%, transparent); color: var(--im-brand); }
.im-chip.is-danger { background: color-mix(in srgb, var(--im-danger) 14%, transparent); color: var(--im-danger); }
.im-chip.is-ok { background: color-mix(in srgb, var(--im-ok) 14%, transparent); color: var(--im-ok); }
.im-chip.is-running { background: color-mix(in srgb, var(--im-brand) 12%, transparent); color: var(--im-brand); }
.im-chip--sm { height: 18px; padding: 0 6px; font-size: 10px; }

/* ---------------- \u753B\u5E03\u672C\u4F53 ---------------- */
/* \u753B\u5E03\u672C\u8EAB\u662F\u4E00\u5757 panel-card\uFF1A\u4E0E Imagora \u7684 .studio-canvas panel-card \u540C\u6784\uFF0C
   \u56DB\u5468\u7559\u51FA\u5185\u8FB9\u8DDD\uFF0C\u5706\u89D2\u88C1\u5207\u5185\u5BB9\u3002 */
.im-canvas {
  position: relative;
  flex: 1;
  min-height: 0;
  margin: 0 12px 12px;
  border: 1px solid var(--im-line);
  /* \u539F\u7248 .studio-canvas \u662F 18px\uFF08\u4E0D\u662F --r-card \u7684 16\uFF09 */
  border-radius: var(--im-r-surface);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
  overflow: hidden;
  /* \u81EA\u6210\u4E00\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF1A\u753B\u5E03\u91CC\u7684 z-index \u4E0D\u8BB8\u8DDF\u5BBF\u4E3B\u9762\u677F\u62A2\u5C42 */
  isolation: isolate;
}
.im-canvas .react-flow__attribution { display: none; }
.im-canvas .react-flow__background pattern circle { fill: color-mix(in srgb, var(--im-ink) 20%, transparent); }
.react-flow__node .im-panel-card { will-change: transform; }
/* \u60AC\u505C\u7684\u8282\u70B9\u6574\u4F53\u62AC\u9AD8\uFF0C\u5426\u5219\u53F3\u4FA7\u90A3\u6761\u64CD\u4F5C\u680F\u4F1A\u88AB\u76F8\u90BB\u8282\u70B9\u76D6\u4F4F\uFF08\u539F\u7248\u540C\u4E00\u6761\u89C4\u5219\uFF09 */
.react-flow__node:hover { z-index: 1001 !important; }
.react-flow__edges { z-index: 1200 !important; }

/* \u8FDE\u7EBF\u4E09\u6001\u3002\u7528 CSS :hover \u800C\u975E JS \u5185\u8054\uFF1A\u63D2\u4EF6\u6CA1\u6709\u79FB\u690D edgeStyle \u7684\u56DB\u6001\u9A71\u52A8\uFF0C
   \u8FD9\u91CC\u5C31\u662F\u552F\u4E00\u53D6\u8272\u5904\uFF0C\u522B\u518D\u53E0\u4E00\u5C42 JS \u5185\u8054\uFF08\u5185\u8054\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u4F1A\u53D8\u6210\u6B7B\u89C4\u5219\uFF09\u3002
   transition \u53EA\u542B stroke/stroke-width/opacity\uFF0C\u4E0E Imagora \u7684 index.css \u4E00\u81F4\u3002 */
.react-flow__edge-path {
  stroke: var(--im-edge-idle);
  stroke-width: 1.5;
  transition: stroke 120ms ease, stroke-width 120ms ease, opacity 120ms ease;
}
.react-flow__edge:hover .react-flow__edge-path { stroke: var(--im-edge-hovered); stroke-width: 2.5; }
.react-flow__edge.selected .react-flow__edge-path { stroke: var(--im-edge-selected); stroke-width: 2.5; }
.react-flow__edge.animated .react-flow__edge-path { stroke-dasharray: 6 4; }
.react-flow__connection-path { stroke: var(--im-brand); stroke-width: 1.8; stroke-dasharray: 5 4; }

/* \u8FDE\u7EBF\u628A\u624B\uFF1A\u7167\u539F\u7248\u505A\u6210\u6A2A\u6761\uFF0C\u5E38\u6001\u9690\u85CF\u3001\u60AC\u505C\u8282\u70B9\u6216\u6B63\u5728\u8FDE\u7EBF\u65F6\u624D\u663E\u5F62\u3002
   \u5E38\u663E\u7684\u5C0F\u5706\u70B9\u4F1A\u5728\u5BC6\u96C6\u753B\u5E03\u4E0A\u7CCA\u6210\u4E00\u7247\u3002 */
.react-flow__handle.im-handle {
  width: 32px;
  height: 12px;
  /* \u539F\u7248\u8FDE\u63A5\u70B9\u662F 4px \u5706\u89D2 + \u767D\u8272\u5916\u73AF\uFF0C\u6CA1\u6709\u8FB9\u6846 */
  border-radius: 4px;
  background: var(--im-brand);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--im-surface) 85%, transparent);
  opacity: 0;
  transition: opacity 0.15s ease;
}
.react-flow__node:hover .react-flow__handle.im-handle,
.react-flow__handle.im-handle.connectingfrom { opacity: 0.7; }
.react-flow__handle.im-handle.connectingto {
  opacity: 1;
  outline: 2px solid var(--im-brand);
  outline-offset: 2px;
}
.react-flow__attribution { display: none; }

.im-canvas .react-flow__minimap {
  background: var(--im-surface);
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
}
/* \u53F3\u4E0A\u89D2\u9009\u4E2D\u64CD\u4F5C\u680F\uFF1A\u534A\u900F\u660E\u6D6E\u5C42 + \u4E00\u6392\u6309\u94AE\uFF08Imagora \u7684 .studio-inspector\uFF09 */
.im-inspector {
  position: absolute;
  /* \u539F\u7248 .studio-inspector \u662F rounded-lg(8) + max-width + \u6A2A\u5411\u53EF\u6EDA\uFF1A
     \u9009\u4E2D\u8282\u70B9\u5F88\u591A\u65F6\u6309\u94AE\u4F1A\u9876\u51FA\u753B\u5E03\uFF0C\u9760\u8FD9\u4E24\u6761\u515C\u4F4F */
  max-width: calc(100% - 24px);
  overflow-x: auto;
  scrollbar-width: none;
  right: 12px;
  top: 12px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: var(--im-r-sm);
  background: var(--im-surface-float);
  border: 1px solid var(--im-line);
  box-shadow: var(--im-shadow-float);
}

/* ---------------- \u5F39\u7A97\uFF08\u7167\u642C Imagora \u7684 modal-shell / modal-panel\uFF09 ----------------
   \u5168\u5C4F grid \u5C45\u4E2D + \u56DB\u6863\u5BBD\u5EA6 + \u5934/\u8EAB/\u811A\u4E09\u6BB5\u3002\u5185\u5BB9\u662F\u300C\u6324\u300D\u8FD8\u662F\u300C\u88C5\u5F97\u4E0B\u300D\u5168\u770B\u8FD9\u5957\uFF1A
   \u5BBF\u4E3B Modal \u7684\u9762\u677F\u5BBD\u5EA6\u6309\u5B83\u81EA\u5DF1\u7684\u5185\u5BB9\u5B9A\uFF0C\u585E\u6211\u4EEC\u8FD9\u79CD\u8868\u5355\u5FC5\u7136\u6EA2\u51FA\u88AB\u88C1\u3002 */
.im-modal-shell {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: clamp(12px, 2vw, 24px);
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.32));
  backdrop-filter: blur(3px);
}
.im-modal-panel {
  display: flex;
  flex-direction: column;
  width: min(100%, 42rem);
  max-height: min(86dvh, 760px);
  overflow: hidden;
  padding: 20px;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-card);
  outline: none;
  background: var(--im-surface);
  box-shadow: var(--dsw-elevation-prominent, 0 24px 70px rgba(15, 20, 25, 0.26));
}
.im-modal-panel--sm { width: min(100%, 26rem); }
.im-modal-panel--md { width: min(100%, 35rem); }
.im-modal-panel--lg { width: min(100%, 42rem); }
.im-modal-panel--wide { width: min(1100px, 96vw); max-height: min(86dvh, 880px); }
.im-modal-header { margin-bottom: 16px; }
.im-modal-title {
  margin: 0;
  color: var(--im-ink);
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.02em;
}
.im-modal-subtitle {
  margin: 4px 0 0;
  max-width: 58ch;
  color: var(--im-ink-3);
  font-size: 12px;
  line-height: 1.55;
}
/* flex:1 + min-height:0 \u662F\u300C\u80FD\u6EDA\u300D\u7684\u524D\u63D0\u3002\u53EA\u5199 overflow-y:auto \u800C\u9AD8\u5EA6\u4E0D\u53D7\u7EA6\u675F\u7684\u8BDD\uFF0C
   scrollHeight \u6C38\u8FDC\u7B49\u4E8E clientHeight\uFF0C\u5E95\u90E8\u51E0\u884C\u4F1A\u88AB\u9762\u677F\u9759\u9ED8\u88C1\u6389\u3002 */
.im-modal-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
}
/* \u53EF\u9009\u5217\u8868\uFF08\u4FDD\u5B58\u5F39\u7A97\u91CC\u7684\u5DF2\u6709\u5DE5\u4F5C\u6D41\uFF09\uFF1A\u70B9\u4E00\u884C\u5C31\u628A\u540D\u5B57\u586B\u8FDB\u53BB */
.im-pick-list {
  margin-top: 6px;
  max-height: 144px;
  overflow-y: auto;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-sm);
}
.im-pick-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 6px 12px;
  border: 0;
  background: transparent;
  color: var(--im-ink-2);
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.im-pick-row:hover { background: color-mix(in srgb, var(--im-brand) 5%, transparent); color: var(--im-brand); }
.im-pick-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.im-pick-meta { flex: none; font-size: 10px; color: var(--im-ink-3); }

/* \u5F39\u7A97\u91CC\u7684\u8BF4\u660E/\u8BA1\u6570\u5C0F\u5B57\uFF1Afooter \u5DE6\u4FA7\u6216\u5185\u5BB9\u9876\u90E8\u90FD\u7528\u5B83 */
.im-modal-note {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-modal-note:first-child:not(:only-child) { margin-right: auto; }
.im-modal-footer .im-modal-note { margin-right: auto; }

.im-modal-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}

/* \u5DE6\u4E0B\u89D2\u63A7\u4EF6\u575E\uFF1A\u5E26\u6587\u5B57\u7684\u4E00\u5217\uFF0C\u4E0E Imagora \u7684 DockRow \u540C\u6784 */
.im-dock {
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* \u5BBD\u5EA6\u4EA4\u7ED9\u884C\u81EA\u5DF1\uFF08\u884C\u662F\u56FA\u5B9A 64px\uFF09\uFF1A\u8FD9\u91CC\u518D\u5199 min-width \u4F1A\u591A\u51FA\u4E00\u6761\u53F3\u4FA7\u7A7A\u767D */
  min-width: 0;
  padding: 0;
  /* \u539F\u7248 .react-flow__controls \u662F 11px\uFF1B\u5185\u8FB9\u8DDD\u7531\u884C\u81EA\u5DF1\u5E26\uFF0C\u5BB9\u5668\u4E0D\u7559 */
  border-radius: var(--im-r-float);
  background: var(--im-surface);
  border: 1px solid var(--im-line);
  box-shadow: var(--im-shadow-card);
}
.im-dock-row {
  display: flex;
  align-items: center;
  /* \u6709\u56FE\u6807\u4E4B\u540E\u5FC5\u987B\u5DE6\u5BF9\u9F50\uFF1A\u5C45\u4E2D\u4F1A\u8BA9 9 \u884C\u7684\u56FE\u6807\u4E0E\u6587\u5B57\u5404\u81EA\u9519\u5F00\uFF0C\u770B\u7740\u53C2\u5DEE */
  justify-content: flex-start;
  gap: 4px;
  /* \u539F\u7248 .dock-row \u56FA\u5B9A 64\xD730\uFF1A\u56DB\u4F4D\u6570\u767E\u5206\u6BD4\u4E0E\u4E24\u5B57\u6807\u7B7E\u90FD\u653E\u5F97\u4E0B\uFF0C\u5217\u5BBD\u4E5F\u4E0D\u4F1A\u88AB\u6491\u5F00\u3002
     box-sizing \u5FC5\u987B\u5199\uFF1A\u4E0D\u5199\u7684\u8BDD 64 \u662F\u5185\u5BB9\u5BBD\uFF0C\u52A0\u4E0A\u5DE6\u53F3\u5404 8px \u5185\u8FB9\u8DDD\u5B9E\u9645\u53D8\u6210 80\uFF0C
     \u6574\u5217\u53F3\u4FA7\u5C31\u591A\u51FA\u4E00\u6761\u7A7A\u767D\u3002 */
  box-sizing: border-box;
  width: 64px;
  min-height: 30px;
  padding: 0 8px;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.02em;
  border: 0;
  /* \u539F\u7248 dock-row \u4E0D\u8BBE\u5706\u89D2\uFF1A\u5706\u89D2\u7531\u5BB9\u5668 overflow:hidden \u88C1\u51FA\u6765 */
  border-radius: 0;
  background: transparent;
  color: var(--im-ink-2);
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.im-dock-row-label {
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
/* \u7F29\u653E\u8BFB\u6570\uFF1A\u7B49\u5BBD\u6570\u5B57 + \u5C45\u4E2D\uFF0C\u767E\u5206\u6BD4\u53D8\u5316\u65F6\u5217\u5BBD\u4E0D\u8DF3 */
.im-dock-row-value {
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
}
/* hover \u7528\u54C1\u724C\u8272\u6DE1\u5E95\uFF08\u539F\u7248 .react-flow__controls-button:hover \u7684\u505A\u6CD5\uFF09 */
.im-dock-row:hover {
  background: color-mix(in srgb, var(--im-brand) 10%, transparent);
  color: var(--im-brand);
}
.im-dock-row.is-on { color: var(--im-brand); font-weight: 600; }
.im-dock-row--readout {
  cursor: default;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--im-ink);
  border-bottom: 1px solid var(--im-line);
  border-radius: 0;
  margin-bottom: 2px;
}
.im-dock-row--readout:hover { background: transparent; color: var(--im-ink); }

.im-canvas .react-flow__controls {
  box-shadow: var(--im-shadow-card);
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  overflow: hidden;
}
.im-canvas .react-flow__controls-button {
  background: var(--im-surface);
  border-bottom: 1px solid var(--im-line);
  color: var(--im-ink-2);
  fill: currentColor;
}
.im-canvas .react-flow__controls-button:hover { background: var(--im-hover); }

/* React Flow \u4F1A\u7ED9\u81EA\u5B9A\u4E49\u8282\u70B9\u7C7B\u578B\u5957\u5185\u7F6E\u9ED8\u8BA4\u6837\u5F0F\uFF08\u56FA\u5B9A width:150px + \u6DF1\u8272\u8FB9\u6846\uFF09\uFF0C
   \u5BFC\u81F4\u5916\u58F3\u6BD4\u5185\u90E8\u5361\u7247\u5C0F\u3001\u9ED1\u6846\u9519\u4F4D\u5272\u88C2\u3002\u6211\u4EEC\u7684\u8282\u70B9\u81EA\u5E26\u5C3A\u5BF8\u4E0E\u6837\u5F0F\uFF0C\u8986\u76D6\u6389\u5E93\u9ED8\u8BA4\u3002
   \u539F\u7248 index.css \u4E5F\u662F\u8FD9\u4E48\u505A\u7684\uFF0C\u4E14\u662F width/min-width/border/background \u56DB\u6761\u4E00\u8D77\u8986\u76D6\u3002 */
.react-flow__node-image,
.react-flow__node-group,
.react-flow__node-prompt {
  width: auto !important;
  min-width: 0 !important;
  border: none !important;
  background: transparent !important;
}

/* \u72B6\u6001\u706F\uFF1A\u6392\u961F\u7425\u73C0 / \u751F\u6210\u4E2D\u4E3B\u4F53\u8272\u547C\u5438 / \u5B8C\u6210\u7EFF / \u5931\u8D25\u7EA2 \u2014\u2014 \u4E0E Imagora \u7684 StatusLight \u540C\u65CF */
/* \u72B6\u6001\u706F\u7684\u5C45\u4E2D\u5BB9\u5668\uFF08\u539F\u7248 flex justify-center py-0.5\uFF09\uFF1A
   \u6709\u4E86\u5B83\uFF0C\u5706\u70B9\u5728\u64CD\u4F5C\u680F\u91CC\u624D\u4E0D\u4F1A\u88AB\u89C6\u4E3A\u53EF\u62C9\u4F38\u7684 flex \u9879\u3002 */
.im-rail-dot {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0;
  line-height: 0;
}
/* \u72B6\u6001\u6307\u793A\u706F\uFF1A\u539F\u7248\u5C31\u662F\u4E00\u4E2A 10px \u5706\u70B9\uFF0C**\u6CA1\u6709**\u5149\u6655\u73AF \u2014\u2014 \u73AF\u4F1A\u5728\u5BC6\u96C6\u753B\u5E03\u4E0A\u7CCA\u6210\u4E00\u7247\u3002
   \u5C31\u7EEA\u7070 / \u6392\u961F\u7425\u73C0 / \u751F\u6210\u4E2D\u54C1\u724C\u8272\u547C\u5438 / \u5B8C\u6210\u7EFF / \u5931\u8D25\u7EA2\u3002 */
.im-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--im-ink) 22%, transparent);
  flex: none;
}
.im-dot.is-queued { background: var(--im-warn); }
.im-dot.is-running { background: var(--im-brand); animation: im-pulse 1.5s ease-in-out infinite; }
.im-dot.is-done { background: var(--im-ok); }
.im-dot.is-failed { background: var(--im-danger); }
@keyframes im-pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.35 } }

/* ============ \u753B\u5E03\u81EA\u5B9A\u4E49\u9F20\u6807\u6307\u9488\uFF08\u4E00\u5957\u56DB\u6001\uFF0C\u539F\u6837\u7167\u642C Imagora\uFF09 ============
 * \u65E0\u9650\u753B\u5E03\u5E95\u8272\u6D45\u3001\u8282\u70B9\u7A00\u758F\u65F6\u7CFB\u7EDF\u7BAD\u5934\u5BB9\u6613"\u89C6\u89C9\u4E22\u5931"\uFF0C\u8FD9\u91CC\u628A\u753B\u5E03\u5185\u6240\u6709\u72B6\u6001\u90FD\u6362\u6210
 * \u81EA\u5B9A\u4E49\u9AD8\u5BF9\u6BD4\u5149\u6807\uFF1A\u6DF1\u7070\uFF08#1e293b\uFF09\u56FE\u5F62 + \u767D\u8272\u5916\u63CF\u8FB9\uFF0C\u54C1\u724C\u84DD\u70B9\u7F00\u2014\u2014
 * \u7A7A\u767D\u753B\u5E03 = \u5341\u5B57\u51C6\u661F\uFF08\u4E2D\u5FC3\u54C1\u724C\u8272\u52A0\u53F7\uFF0C\u4E0E\u62D6\u62FD\u843D\u70B9\u793A\u610F\u540C\u6B3E\u56FE\u5F62\uFF09\uFF1B
 * \u8282\u70B9\u60AC\u6D6E = \u56DB\u5411\u79FB\u52A8\uFF08\u53EF\u62D6\u62FD\uFF09\uFF1B\u8282\u70B9\u62D6\u62FD\u4E2D / \u753B\u5E03\u5E73\u79FB = \u56DB\u5411 + \u5B9E\u5FC3\u4E2D\u5FC3\uFF08\u6309\u4E0B\u6001\uFF09\uFF1B
 * \u8FDE\u7EBF\u60AC\u6D6E = \u7ECF\u5178\u7BAD\u5934\uFF08\u53EF\u70B9\u9009/\u53CC\u51FB\u5220\u9664/\u7AEF\u70B9\u63A5\u7EBF\uFF09\u3002
 * data URI \u65E0\u6CD5\u5F15\u7528 CSS \u53D8\u91CF\uFF0C\u70B9\u7F00\u8272\u7528\u56FA\u5B9A\u84DD\uFF1B\u8282\u70B9\u5185\u8F93\u5165\u6846/\u6309\u94AE\u4FDD\u7559\u5404\u81EA\u5149\u6807\u3002
 * \u6587\u4EF6\u62D6\u62FD\u60AC\u505C\u5728\u753B\u5E03\u4E0A\u65F6\uFF08.canvas-drop-active\uFF09\u5207\u7CFB\u7EDF copy \u5149\u6807\uFF0C\u6BD4\u51C6\u661F\u66F4\u660E\u786E"\u53EF\u4EE5\u653E\u8FDB\u6765"\u3002
 * !important \u4FDD\u8BC1\u8986\u76D6 @xyflow/react \u81EA\u5E26\u6837\u5F0F\uFF08\u4F9D\u8D56\u6CE8\u5165\u987A\u5E8F\u4E0D\u53D7 import \u4F4D\u7F6E\u63A7\u5236\uFF09\u3002 */
.react-flow__pane {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2v6M12 16v6M2 12h6M16 12h6' stroke='%23ffffff' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M12 2v6M12 16v6M2 12h6M16 12h6' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='12' r='4.6' fill='%23ffffff' stroke='%231e293b' stroke-width='1'/%3E%3Cpath d='M12 10.2v3.6M10.2 12h3.6' stroke='%233b82f6' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E")
      12 12,
    crosshair !important;
}
/* \u8282\u70B9\u60AC\u6D6E\uFF1A\u56DB\u5411\u79FB\u52A8\uFF08\u56FE\u7247/\u56FE\u7247\u7EC4/\u63D0\u793A\u8BCD\u5361\u7247\u5747\u53EF\u62D6\u62FD\uFF09 */
.react-flow__node {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%23ffffff' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round'/%3E%3Cpath d='M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")
      12 12,
    grab !important;
}
/* \u8282\u70B9\u62D6\u62FD\u4E2D / \u5DE6\u952E\u62D6\u62FD\u5E73\u79FB\u4E2D\uFF1A\u56DB\u5411 + \u5B9E\u5FC3\u4E2D\u5FC3\uFF08\u6309\u4E0B\u72B6\u6001\uFF09 */
.react-flow__node.dragging,
.react-flow__pane.dragging {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%23ffffff' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round'/%3E%3Cpath d='M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Ccircle cx='12' cy='12' r='3.6' fill='%23ffffff' stroke='%231e293b' stroke-width='1.4'/%3E%3Ccircle cx='12' cy='12' r='1.8' fill='%233b82f6'/%3E%3C/svg%3E")
      12 12,
    grabbing !important;
}
/* \u8FDE\u7EBF\u60AC\u6D6E\uFF1A\u7ECF\u5178\u7BAD\u5934\uFF08\u53EF\u70B9\u9009/\u53CC\u51FB\u5220\u9664/\u7AEF\u70B9\u63A5\u7EBF\uFF09 */
.react-flow__edge {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4.5 2.5 20 12l-7.2 1.5 3.1 7.3-3.6 1.5-3.1-7.3-4.7 4.6z' stroke='%23ffffff' stroke-width='4' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M4.5 2.5 20 12l-7.2 1.5 3.1 7.3-3.6 1.5-3.1-7.3-4.7 4.6z' fill='%231e293b' stroke='%231e293b' stroke-width='1.4' stroke-linejoin='round'/%3E%3C/svg%3E")
      4 3,
    pointer !important;
}
/* \u8282\u70B9\u5185\u4EA4\u4E92\u5143\u7D20\u4FDD\u7559\u5404\u81EA\u5149\u6807\uFF1A\u8F93\u5165\u7C7B = \u6587\u672C\uFF0C\u6309\u94AE = \u624B\u578B\uFF08\u4E0D\u88AB\u8282\u70B9\u79FB\u52A8\u5149\u6807\u8986\u76D6\uFF09 */
.react-flow__node :is(input, textarea, select, [contenteditable]) {
  cursor: text;
}
.react-flow__node button {
  cursor: pointer;
}
/* \u6587\u4EF6\u62D6\u62FD\u60AC\u505C\u5728\u753B\u5E03\u4E0A\uFF1A\u7CFB\u7EDF copy \u5149\u6807\uFF08!important \u9700\u538B\u8FC7\u4E0A\u9762\u7684\u51C6\u661F\u89C4\u5219\uFF09 */
.im-canvas.is-drop-active .react-flow__pane {
  cursor: copy !important;
}

/* ---------------- \u6D6E\u5C42 ---------------- */
/* \u63D0\u793A\u6761\uFF1A\u4E2D\u6027\u8868\u9762 + \u53EA\u6709\u56FE\u6807\u7740\u8272\u3002\u6574\u5757\u8272\u5E95\u5728\u6697\u8272\u4E3B\u9898\u4E0B\u5F88\u810F\uFF0C\u4E5F\u50CF\u62A5\u9519\u9875\u3002 */
.im-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 30px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1.6;
  background: var(--im-surface-inset);
  color: var(--im-ink-2);
  border-bottom: 1px solid var(--im-line);
}
.im-banner-icon { flex: none; display: inline-flex; margin-top: 1px; color: var(--im-warn); }
.im-banner.is-error .im-banner-icon { color: var(--im-warn); }
.im-banner-text { min-width: 0; }
.im-banner-list { margin: 0; padding-left: 16px; display: grid; gap: 2px; }

/* \u53EF\u62D6\u5230\u753B\u5E03\u4E0A\u7684\u5DE5\u5177\u680F\u6309\u94AE\uFF1A\u5149\u6807\u63D0\u793A\u300C\u80FD\u62D6\u300D\uFF0C\u60AC\u505C\u65F6\u8F7B\u5FAE\u62AC\u8D77 */
.im-drag-source { cursor: grab; }
.im-drag-source:active { cursor: grabbing; }
/* \u628A\u624B\uFF1A\u5E73\u65F6\u51E0\u4E4E\u900F\u660E\uFF0Chover \u624D\u6D6E\u73B0\uFF08\u539F\u7248 .btn-drag-grip \u7684\u505A\u6CD5\uFF09\u3002
   \u6CA1\u6709\u5B83\uFF0C\u7528\u6237\u770B\u4E0D\u51FA\u8FD9\u4E2A\u6309\u94AE\u548C\u65C1\u8FB9\u90A3\u51E0\u4E2A\u7684\u533A\u522B\u3002 */
.im-drag-source > svg {
  opacity: 0;
  transform: translateX(-3px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: var(--im-ink-3);
}
.im-drag-source:hover > svg {
  opacity: 1;
  transform: translateX(0);
}

/* \u843D\u70B9\u80F6\u56CA\uFF1A\u5916\u5C42\u53EA\u8D1F\u8D23\u5B9A\u4F4D\uFF08transform \u7531 JS \u76F4\u63A5\u5199\uFF0C\u8DDF\u7740\u5149\u6807\u8D70\uFF09\uFF0C\u5185\u5C42\u8D1F\u8D23\u5916\u89C2\u3002
   \u5916\u58F3 portal \u5230 body \u4E14 pointer-events:none \u2014\u2014 \u5B83\u7EDD\u4E0D\u80FD\u6321\u4F4F dragover \u7684\u547D\u4E2D\u5224\u5B9A\uFF0C
   \u5426\u5219\u80F6\u56CA\u81EA\u5DF1\u4F1A\u628A drop \u4E8B\u4EF6\u5403\u6389\u3002 */
.im-drop-chip-host {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  pointer-events: none;
  will-change: transform;
}
.im-drop-chip {
  display: none;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--im-r-pill);
  border: 1px solid color-mix(in srgb, var(--im-brand) 45%, transparent);
  background: var(--im-surface-float);
  color: var(--im-ink);
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: var(--im-shadow-float);
}
.im-drop-chip.show { display: inline-flex; }
/* \u4E24\u4E2A\u56FE\u6807\u4E92\u65A5\uFF1A\u62D6\u5230\u753B\u5E03\u5916\u65F6\u53EA\u5269\u7EA2\u8272 X\uFF0C\u6587\u6848\u7531 JS \u6539\u6210\u300C\u677E\u5F00\u53D6\u6D88\u300D */
.im-drop-chip-icon { display: inline-flex; color: var(--im-brand); }
.im-drop-chip-icon--cancel { display: none; color: var(--im-danger); }
.im-drop-chip.is-outside {
  border-color: color-mix(in srgb, var(--im-danger) 45%, transparent);
  color: var(--im-danger);
}
.im-drop-chip.is-outside .im-drop-chip-icon--create { display: none; }
.im-drop-chip.is-outside .im-drop-chip-icon--cancel { display: inline-flex; }

.im-log {
  /* \u539F\u7248\u5F62\u6001\uFF1A\u53F3\u4E0B\u89D2\u4E00\u5217\u7EAF\u6587\u5B57\uFF0C\u4E0D\u53EF\u4EA4\u4E92 \u2014\u2014 \u9762\u677F\u4F1A\u6321\u4F4F\u753B\u5E03\u7684\u62D6\u62FD\u4E0E\u6846\u9009 */
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  max-width: 320px;
  pointer-events: none;
}
/* \u539F\u7248\u65E5\u5FD7\u884C\u5E26\u767D\u8272 text-shadow\uFF1A\u70B9\u9635\u6D45\u5E95\u4E0A\u76F4\u63A5\u538B\u7070\u5B57\u4F1A\u7CCA\uFF0C\u52A0\u4E00\u5708\u767D\u6655\u624D\u8BFB\u5F97\u6E05 */
.im-log-line {
  text-shadow: 0 1px 3px color-mix(in srgb, var(--im-surface) 90%, transparent);
  font-size: 11px;
  line-height: 1.6;
  color: var(--im-ink-3);
  text-align: right;
  word-break: break-all;
  animation: im-log-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes im-log-in {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* ---------------- \u751F\u6210\u4E2D\u5360\u4F4D\u5361\uFF08\u79FB\u690D GenerationPending\uFF09 ----------------
   \u6E10\u8FD1\u5047\u8FDB\u5EA6 + \u6587\u6848\u8F6E\u64AD\u3002\u8FDB\u5EA6\u6761\u53EA\u52A8 transform\uFF0C\u4E0D\u7ED9 width \u505A\u52A8\u753B\u3002 */
/* \u53EA\u7ED9\u8BFB\u5C4F\u7684\u6587\u672C\uFF1A\u4E0D\u80FD display:none\uFF08\u4F1A\u88AB\u79FB\u51FA\u65E0\u969C\u788D\u6811\uFF09 */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.im-pending {
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: var(--im-r-sm);
  background: var(--im-surface-inset);
  border: 1px solid var(--im-line);
}
.im-pending-label {
  font-size: 11px;
  line-height: 1.5;
  color: var(--im-ink-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.im-pending-track {
  margin-top: 6px;
  height: 3px;
  border-radius: var(--im-r-pill);
  background: var(--im-hover);
  overflow: hidden;
}
.im-pending-bar {
  height: 100%;
  border-radius: inherit;
  background: var(--im-brand);
  transform-origin: left center;
  transition: transform 0.9s linear;
}

.im-modal-mask {
  position: absolute;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.28));
}

.im-empty {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  pointer-events: none;
  color: var(--im-ink-3);
  font-size: 13px;
}
.im-empty strong { font-size: 15px; color: var(--im-ink-2); font-weight: 600; }

/* \u753B\u5E03\u5185\u7684\u5B57\u9762\u6309\u94AE\uFF08\u5F39\u7A97\u8D70\u5BBF\u4E3B\u7EC4\u4EF6\u5E93\uFF0C\u4E0D\u7528\u8FD9\u5957\uFF09 */
.im-range { accent-color: var(--im-brand); }

/* ---------------- \u952E\u76D8\u53EF\u8FBE\u6027 ----------------
   \u5BBF\u4E3B\u5728 pointer \u6A21\u6001\u4E0B\u628A :focus-visible \u7684 outline \u5173\u4E86\uFF0C\u63D2\u4EF6\u81EA\u7ED8\u7684\u6309\u94AE
   \uFF08primary / ghost / icon / dock-row\uFF09\u5982\u679C\u4E0D\u8865\u7126\u70B9\u73AF\uFF0C\u952E\u76D8\u7528\u6237\u5B8C\u5168\u770B\u4E0D\u51FA\u7126\u70B9\u5728\u54EA\u3002
   \u539F\u7248 index.css \u4E5F\u662F\u8FD9\u4E48\u8865\u7684\u3002 */
button:focus-visible,
[role='button']:focus-visible,
[role='option']:focus-visible,
input[type='range']:focus-visible {
  outline: 2px solid var(--im-brand);
  outline-offset: 3px;
}
/* .im-field \u81EA\u5DF1\u5173\u6389\u4E86 outline\uFF0C\u7126\u70B9\u73AF\u6539\u7528 box-shadow \u8865 */
.im-field:focus-visible {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}

/* ---------------- \u51CF\u5C11\u52A8\u6001\u6548\u679C ----------------
   \u539F\u7248\u6709\u4E00\u6761\u5168\u5C40\u515C\u5E95\uFF1B\u63D2\u4EF6\u539F\u6765\u53EA\u5728 .im-dot.is-running \u4E0A\u65E0\u9650\u8109\u51B2\uFF0C
   \u5F00\u4E86\u300C\u51CF\u5C11\u52A8\u6001\u6548\u679C\u300D\u4E5F\u7167\u8DF3\u3002 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ---------------- \u52A8\u6548\u5C42 ----------------
   \u4E0E Imagora \u7684 index.css \u540C\u4E00\u5957\uFF1A\u8282\u70B9\u5165\u573A\u53EA\u52A8\u5185\u5C42\u5361\u7247\uFF0C\u4E0D\u52A8\u5916\u5C42
   .react-flow__node \u2014\u2014 \u90A3\u5C42\u662F React Flow \u7684\u5B9A\u4F4D transform\uFF0C\u52A8\u5B83\u8282\u70B9\u4F1A\u7529\u98DE\u3002 */
.react-flow__node .im-panel-card { animation: im-enter-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes im-enter-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* \u751F\u6210\u4E2D\u6309\u94AE\u7684\u547C\u5438\u5149\u6655\uFF1A\u539F\u6765\u53EA\u6709\u72B6\u6001\u706F\u5728\u8DF3\uFF0C\u5361\u7247\u4E0A\u7684\u8FD0\u884C\u6309\u94AE\u5B8C\u5168\u9759\u6B62 */
.im-btn-busy { animation: im-pulse-glow 1.6s ease-in-out infinite; }
@keyframes im-pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--im-brand) 0%, transparent); }
  50%      { box-shadow: 0 0 0 6px color-mix(in srgb, var(--im-brand) 14%, transparent); }
}
`;var bd={image:pd,prompt:gd,group:md};var an=require("react/jsx-runtime"),Ux="0 0 1024 1024",Zx="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function gs({size:e=30}){return(0,an.jsx)("svg",{width:e,height:e,viewBox:Ux,fill:"var(--im-brand)","aria-hidden":"true",children:(0,an.jsx)("path",{d:Zx})})}function yd({onClick:e}){return(0,an.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,an.jsx)(gs,{}),(0,an.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var xd=require("react"),ln=require("react/jsx-runtime");function Kx(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function wd(e){return(0,xd.useMemo)(()=>Kx(e),[e])}function vd({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,s=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,ln.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,ln.jsx)("span",{className:"im-cost-num",children:s}),o?(0,ln.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,ln.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,ln.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Ne=require("react/jsx-runtime");function kd(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:s}=e,a=(c,l,u)=>(0,Ne.jsx)("button",{type:"button",className:`${u.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:u.title,disabled:u.disabled,onClick:l,children:c});return(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsxs)("div",{className:"im-header",children:[(0,Ne.jsx)(yd,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Ne.jsx)(On,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,Ne.jsx)(On,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,Ne.jsx)(vd,{summary:e.cost,budget:t?.budget??0}),(0,Ne.jsx)("span",{className:"im-spacer"}),a("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,Ne.jsxs)("div",{className:"im-toolbar",children:[(0,Ne.jsxs)("div",{className:"im-toolbar-group",children:[a("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),a("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,Ne.jsx)(Ee,{name:"grip",size:12})]}),(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,Ne.jsx)(Ee,{name:"grip",size:12})]})]}),(0,Ne.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[a("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),a("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),a("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),a("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),a("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),a("\u6062\u590D",e.onRestore,{disabled:!s,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),a("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),a("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var $e=require("react/jsx-runtime");function $t({icon:e,label:t,title:n,active:o,onClick:r}){return(0,$e.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,$e.jsx)(Ee,{name:e,size:14}),(0,$e.jsx)("span",{className:"im-dock-row-label",children:t})]})}function Sd(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,$e.jsxs)("div",{className:"im-dock nodrag",children:[(0,$e.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,$e.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,$e.jsx)($t,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,$e.jsx)($t,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,$e.jsx)($t,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,$e.jsx)($t,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,$e.jsx)($t,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,$e.jsx)($t,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,$e.jsx)($t,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,$e.jsx)($t,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Le=require("react"),Nd=require("react-dom");var hs="application/x-dsh-imagora-canvas",xr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},Cd="\u677E\u5F00\u53D6\u6D88";function bs(e){return e.dataTransfer?.types.includes("Files")??!1}function ao(e,t){if(bs(e))return"images";let n=e.dataTransfer?.getData(hs);return n==="prompt"||n==="group"?n:t}function _d(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Ed(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":xr[e]}function ys(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var Nt=require("react/jsx-runtime"),jx=22,Qx=28,wr=8;function Md(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:s}=e,[a,c]=(0,Le.useState)(null),l=(0,Le.useRef)(null),u=(0,Le.useRef)(0),d=(0,Le.useRef)(null),f=(0,Le.useRef)(null),p=(0,Le.useRef)(null),m=(0,Le.useCallback)((x,S)=>{l.current=x,c(x);let C=p.current;C&&C.textContent!==S&&(C.textContent=S)},[]),y=(0,Le.useCallback)(()=>{l.current=null,u.current=0,c(null),f.current?.classList.remove("is-outside")},[]),b=(0,Le.useCallback)((x,S)=>{let C=d.current;if(!C)return;let N=Math.min(x+jx,window.innerWidth-C.offsetWidth-wr),P=Math.min(S+Qx,window.innerHeight-C.offsetHeight-wr);C.style.transform=`translate(${Math.max(wr,N)}px, ${Math.max(wr,P)}px)`},[]),g=(0,Le.useCallback)((x,S,C)=>{let N=t.current;if(!N)return o();let P=N.getBoundingClientRect(),W=C?Math.min(Math.max(x,P.left),P.left+P.width):x,I=C?Math.min(Math.max(S,P.top),P.top+P.height):S;return r({x:W,y:I})},[t,o,r]);(0,Le.useEffect)(()=>{let x=N=>{bs(N)&&N.preventDefault()},S=N=>{let P=l.current;if(!P||P==="images")return;b(N.clientX,N.clientY);let W=t.current,I=!!(W&&ys(N.clientX,N.clientY,W.getBoundingClientRect())),L=I?xr[P]:Cd,E=p.current;E&&E.textContent!==L&&(E.textContent=L),f.current?.classList.toggle("is-outside",!I)},C=()=>{u.current=0,y()};return window.addEventListener("dragover",x),window.addEventListener("dragover",S),window.addEventListener("drop",x),window.addEventListener("dragend",C),window.addEventListener("blur",C),()=>{window.removeEventListener("dragover",x),window.removeEventListener("dragover",S),window.removeEventListener("drop",x),window.removeEventListener("dragend",C),window.removeEventListener("blur",C)}},[t,y,b]);let k={onDragEnter:x=>{if(n)return;let S=ao(x,l.current);S&&(x.preventDefault(),S==="images"&&(u.current+=1),m(S,Ed(S,_d(x.dataTransfer))),b(x.clientX,x.clientY))},onDragOver:x=>{n||!ao(x,l.current)||(x.preventDefault(),x.dataTransfer.dropEffect="copy",b(x.clientX,x.clientY))},onDragLeave:x=>{n||ao(x,l.current)==="images"&&(u.current-=1,u.current<=0&&y())},onDrop:x=>{if(n)return;let S=ao(x,l.current);if(!S)return;x.preventDefault();let C=t.current,N=!C||ys(x.clientX,x.clientY,C.getBoundingClientRect());if(y(),S==="images"){let P=Array.from(x.dataTransfer.files??[]);if(!P.length)return;i(P,g(x.clientX,x.clientY,!0));return}N&&s(S,g(x.clientX,x.clientY,!1))}},h=(0,Le.useCallback)((x,S)=>{x.dataTransfer.setData(hs,S),x.dataTransfer.effectAllowed="copy",m(S,xr[S]),b(x.clientX,x.clientY)},[b,m]),v=(0,Nd.createPortal)((0,Nt.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,Nt.jsxs)("div",{ref:f,className:`im-drop-chip${a?" show":""}`,children:[(0,Nt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,Nt.jsx)(Ee,{name:a==="group"?"layers":a==="images"?"image":"plus",size:14})}),(0,Nt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,Nt.jsx)(Ee,{name:"close",size:14})}),(0,Nt.jsx)("span",{ref:p,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:a,dropChip:v,dragHandlers:k,startToolbarDrag:h,hideDropChip:y}}var Id="dsh-imagora.canvas-minimap.v1";function Pd(){try{let e=localStorage.getItem(Id);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function zd(e){try{localStorage.setItem(Id,e?"1":"0")}catch{}}var Lt=require("react/jsx-runtime");function Rd(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=s=>s>1?` (${s})`:"";return(0,Lt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Lt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Lt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u5C40\u90E8\u6574\u7406\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u540C\u5C42\u63D0\u793A\u8BCD\u5361\u7247\u6309\u5DE6\u4E0A\u89D2\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Lt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Lt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Lt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var He=require("react/jsx-runtime");function Dd(){return(0,He.jsxs)("div",{className:"im-empty",children:[(0,He.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,He.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,He.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var Jx=5;function Ad({logs:e}){if(!e.length)return null;let t=e.slice(-Jx);return(0,He.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,He.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var ew={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Od({text:e}){return e?(0,He.jsx)("div",{style:ew,children:e}):null}var tw={maxWidth:"86%",maxHeight:"86%",borderRadius:12,boxShadow:"0 20px 60px rgba(0,0,0,.45)",background:"var(--im-surface-float)"};function Td({preview:e,onClose:t}){return e?(0,He.jsx)("div",{className:"im-modal-mask",onClick:t,children:(0,He.jsx)("img",{src:e.url,alt:e.name,onClick:n=>n.stopPropagation(),style:tw})}):null}function $d({tone:e,children:t,action:n}){return(0,He.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,He.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,He.jsx)(Ee,{name:e==="error"?"help":"clock"})}),(0,He.jsx)("span",{className:"im-banner-text",children:t}),n?(0,He.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var co=require("react");var Ht=require("react"),Bd=require("react-dom");var Mt=require("react/jsx-runtime"),Ld=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),lo=[];function Hd(e){return lo[lo.length-1]===e}function Ie({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:s,closeOnBackdrop:a=!0}){let c=`im-modal-${(0,Ht.useId)()}`,l=`${c}-title`,u=(0,Ht.useRef)(null),d=(0,Ht.useRef)(null),f=(0,Ht.useRef)(o);return f.current=o,(0,Ht.useEffect)(()=>{d.current=document.activeElement instanceof HTMLElement?document.activeElement:null,lo.push(c);let m=u.current;(s?.current??m?.querySelector(Ld)??m)?.focus();let b=g=>{if(!Hd(c))return;if(g.key==="Escape"){if(ld())return;g.preventDefault(),g.stopPropagation(),f.current();return}if(g.key!=="Tab"||!m)return;let k=Array.from(m.querySelectorAll(Ld)).filter(x=>!x.hidden&&x.getAttribute("aria-hidden")!=="true");if(!k.length){g.preventDefault(),m.focus();return}let h=k[0],v=k[k.length-1];!h||!v||(g.shiftKey&&(document.activeElement===h||!m.contains(document.activeElement))?(g.preventDefault(),v.focus()):!g.shiftKey&&document.activeElement===v&&(g.preventDefault(),h.focus()))};return document.addEventListener("keydown",b,!0),()=>{document.removeEventListener("keydown",b,!0);let g=lo.lastIndexOf(c);g>=0&&lo.splice(g,1);let k=d.current;window.setTimeout(()=>k?.focus(),0)}},[s]),(0,Bd.createPortal)((0,Mt.jsx)("div",{className:"im-modal-shell",onMouseDown:m=>{a&&m.target===m.currentTarget&&Hd(c)&&o()},children:(0,Mt.jsxs)("section",{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:m=>m.stopPropagation(),children:[(0,Mt.jsxs)("header",{className:"im-modal-header",children:[(0,Mt.jsx)("h2",{id:l,className:"im-modal-title",children:e}),t?(0,Mt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,Mt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,Mt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ae=require("react/jsx-runtime");function Wd({workflows:e=[],onCancel:t,onSubmit:n}){let[o,r]=(0,co.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[i,s]=(0,co.useState)(null),a=o.trim(),c=e.some(u=>u.name===a),l=()=>{if(a){if(c&&i!==a){s(a);return}n(a)}};return i?(0,ae.jsx)(Ie,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${i}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,ae.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(i),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,ae.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,ae.jsxs)(Ie,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!a,onClick:l,children:"\u4FDD\u5B58"})]}),children:[(0,ae.jsx)("input",{autoFocus:!0,value:o,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:u=>r(u.target.value),onKeyDown:u=>{u.key==="Enter"&&l()}}),e.length?(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,ae.jsx)("div",{className:"im-pick-list",children:e.map(u=>(0,ae.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>r(u.name),children:[(0,ae.jsx)("span",{className:"im-pick-name",children:u.name}),(0,ae.jsx)("span",{className:"im-pick-meta",children:u.modified})]},u.name))})]}):null]})}function Fd({workflows:e,onCancel:t,onPick:n}){return(0,ae.jsx)(Ie,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,ae.jsx)("div",{style:{display:"grid",gap:2},children:e.map(o=>(0,ae.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",style:{display:"flex",justifyContent:"space-between",width:"100%"},onClick:()=>n(o.name),children:[(0,ae.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o.name}),(0,ae.jsx)("span",{style:{color:"var(--im-ink-3)",fontSize:11,flex:"none"},children:new Date(o.modified).toLocaleString()})]},o.name))}):(0,ae.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-ink-3)"},children:"\u8FD8\u6CA1\u6709\u4FDD\u5B58\u8FC7\u7684\u5DE5\u4F5C\u6D41\u3002"})})}var nw=[["\u753B\u5E03","\u6EDA\u8F6E\u7F29\u653E \xB7 \u5DE6\u952E\u62D6\u7A7A\u767D\u5E73\u79FB \xB7 Shift+\u62D6\u62FD\u6846\u9009 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927"],["\u8282\u70B9","\u60AC\u505C\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 Del \u5220\u9664\u9009\u4E2D"],["\u8FDE\u7EBF","\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF08\u53C2\u8003\u56FE\uFF09\uFF1B\u63D0\u793A\u8BCD \u2192 \u56FE\u7247\uFF08\u4EA7\u51FA\uFF09"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 Delete \u5220\u9664"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function Vd({onClose:e,config:t}){return(0,ae.jsx)(Ie,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u753B\u5E03\u3001\u8282\u70B9\u3001\u8FDE\u7EBF\u4E0E\u5FEB\u6377\u952E\u901F\u67E5\u3002",size:"lg",onClose:e,footer:(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ae.jsx)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12,fontSize:12},children:nw.map(([n,o])=>(0,ae.jsxs)(co.Fragment,{children:[(0,ae.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,ae.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,ae.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,ae.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var je=require("react");function Ye(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function Xd(e,t=.06){let n=Ye(e.width,t,1),o=Ye(e.height,t,1);return{width:n,height:o,x:Ye(e.x,0,1-n),y:Ye(e.y,0,1-o)}}function Yd(e,t,n){return{...e,x:Ye(e.x+t,0,1-e.width),y:Ye(e.y+n,0,1-e.height)}}function qd(e,t,n,o,r,i){let s={...e};if(o.includes("e")&&(s.width=e.width+t),o.includes("s")&&(s.height=e.height+n),o.includes("w")&&(s.x=e.x+t,s.width=e.width-t),o.includes("n")&&(s.y=e.y+n,s.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let a=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?s.height=s.width/a:s.width=s.height*a,o.includes("w")&&(s.x=e.x+e.width-s.width),o.includes("n")&&(s.y=e.y+e.height-s.height);let u=Math.min(1,1/Math.max(s.width,.001),1/Math.max(s.height,.001));if(s.width*=u,s.height*=u,s.width<.06||s.height<.06){let p=Math.max(.06/Math.max(s.width,.001),.06/Math.max(s.height,.001));s.width*=p,s.height*=p}s.width=Ye(s.width,.06,1),s.height=Ye(s.height,.06,1);let d=Math.min(s.width,s.height*a,1),f=Math.min(s.height,d/a,1);s.width=f*a,s.height=f}else s.width=Ye(s.width,.06,1),s.height=Ye(s.height,.06,1);return s.x=Ye(s.x,0,1-s.width),s.y=Ye(s.y,0,1-s.height),s}function Ud(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ye(e.x+(e.width-r)/2,0,1-r),y:Ye(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function xs(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,s=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*s)),height:Math.max(1,Math.round(t*s))}}function ow(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function Zd(e,t){let n=ow(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function ws(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Bt(e){let t=await ws(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function Kd(e,t){let n=await ws(e);if(t)return Gd(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return Gd(n,r,i,o,o)}async function jd(e,t){let n=await ws(e),{width:o,height:r}=xs(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?rw(n,o,r):Qd(n,n.width,n.height,o,r,t.algorithm)}function Gd(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let s=i.getContext("2d");return s?(s.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function rw(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let s=r*2,a=i*2;o=Jd(o,r,i,s,a,"high"),r=s,i=a}return Qd(o,r,i,t,n,"high")}function Qd(e,t,n,o,r,i){return Jd(e,t,n,o,r,i).toDataURL("image/png")}function Jd(e,t,n,o,r,i){let s=document.createElement("canvas");s.width=o,s.height=r;let a=s.getContext("2d");return a&&(a.imageSmoothingEnabled=i!=="nearest",a.imageSmoothingQuality=i==="bilinear"?"medium":"high",a.drawImage(e,0,0,t,n,0,0,o,r)),s}var Pe=require("react/jsx-runtime"),ef=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],sw=["nw","n","ne","e","se","s","sw","w"],vs={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function tf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,je.useRef)(null),[i,s]=(0,je.useState)(null),[a,c]=(0,je.useState)({x:.08,y:.08,width:.84,height:.84}),[l,u]=(0,je.useState)(null),[d,f]=(0,je.useState)(!1),[p,m]=(0,je.useState)(null),y=(0,je.useRef)(null);(0,je.useEffect)(()=>{let C=!0;return Bt(e).then(N=>{C&&(s(N),c(Xd({x:.06,y:.06,width:.88,height:.88})))}).catch(N=>{C&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${se(N)}`)}),()=>{C=!1}},[e]);let b=C=>{u(C),i&&C!==null&&c(N=>Ud(N,C,i))},g=(C,N)=>{C.stopPropagation(),C.target.setPointerCapture?.(C.pointerId),y.current={mode:N,startX:C.clientX,startY:C.clientY,base:a}},k=(0,je.useCallback)(C=>{let N=y.current,P=r.current;if(!N||!P)return;let W=P.getBoundingClientRect();if(!W.width||!W.height)return;let I=(C.clientX-N.startX)/W.width,L=(C.clientY-N.startY)/W.height;c(N.mode==="move"?Yd(N.base,I,L):qd(N.base,I,L,N.mode,l,i??{width:1,height:1}))},[l,i]),h=()=>{y.current=null},v=async()=>{f(!0),m(null);try{let C=await Kd(e,a),N=Math.round(a.width*(i?.width??0)),P=Math.round(a.height*(i?.height??0));await o(C,`\u88C1\u526A ${N}\xD7${P}${l?` \xB7 ${ef.find(W=>W.ratio===l)?.label}`:""}`)}catch(C){m(`\u88C1\u526A\u5931\u8D25\uFF1A${se(C)}`)}finally{f(!1)}},x=i?Math.round(a.width*i.width):0,S=i?Math.round(a.height*i.height):0;return(0,Pe.jsx)(Ie,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Pe.jsxs)(Pe.Fragment,{children:[(0,Pe.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",x," \xD7 ",S,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${Zd(i.width,i.height)}`:"",(0,Pe.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||x<8||S<8,onClick:()=>void v(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Pe.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Pe.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},children:[(0,Pe.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),ef.map(C=>(0,Pe.jsx)("button",{type:"button","aria-pressed":C.ratio===l,className:`im-btn-sm ${C.ratio===l?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>b(C.ratio),children:C.label},C.label))]}),(0,Pe.jsxs)("div",{ref:r,onPointerMove:k,onPointerUp:h,onPointerCancel:h,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Pe.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Pe.jsx)("div",{onPointerDown:C=>g(C,"move"),style:{position:"absolute",left:`${a.x*100}%`,top:`${a.y*100}%`,width:`${a.width*100}%`,height:`${a.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:sw.map(C=>(0,Pe.jsx)("span",{onPointerDown:N=>g(N,C),style:{position:"absolute",left:vs[C].left,top:vs[C].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:vs[C].cursor}},C))})]}),p?(0,Pe.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Be=require("react");function ks(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Ss(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Cs(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Ss(e)*n/2}function nf(e,t,n=.004){if(!ks(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function of(e,t,n,o){if(!ks(e)||!ks(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,s=(t.y-e.y)*o.height,a=Math.hypot(i,s);if(!(a>0))return[];let c=Math.ceil(a/r);if(c<=1)return[];let l=Math.min(c,2048),u=[];for(let d=1;d<l;d+=1){let f=d/l;u.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return u}function aw(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function rf(e){return!aw(e)}var ke=require("react/jsx-runtime"),vr=640;function sf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Be.useRef)(null),i=(0,Be.useRef)(null),s=(0,Be.useRef)(!1),[a,c]=(0,Be.useState)(null),[l,u]=(0,Be.useState)([]),[d,f]=(0,Be.useState)("paint"),[p,m]=(0,Be.useState)(.08),[y,b]=(0,Be.useState)(!1),[g,k]=(0,Be.useState)(null);(0,Be.useEffect)(()=>{let I=!0;Bt(e).then(E=>{I&&c(E)}).catch(E=>{I&&k(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${se(E)}`)});let L=new Image;return L.crossOrigin="anonymous",L.onload=()=>{i.current=L},L.src=e,()=>{I=!1,i.current=null}},[e]);let h=(0,Be.useMemo)(()=>a?a.width>=a.height?{width:vr,height:Math.round(a.height/a.width*vr)}:{width:Math.round(a.width/a.height*vr),height:vr}:{width:0,height:0},[a]);(0,Be.useEffect)(()=>{let I=r.current,L=i.current;if(!I||!L||!h.width)return;let E=I.getContext("2d");if(!E||(I.width=h.width,I.height=h.height,E.clearRect(0,0,h.width,h.height),E.drawImage(L,0,0,h.width,h.height),!a))return;let w=Cs(p,{width:h.width,height:h.height});E.save(),E.globalAlpha=.55,E.fillStyle="#ffffff",E.strokeStyle="#ffffff",E.lineWidth=w*2,E.lineCap="round",E.lineJoin="round";for(let M of l){M.mode==="erase"?(E.globalCompositeOperation="destination-out",E.strokeStyle="#000",E.fillStyle="#000"):(E.globalCompositeOperation="source-over",E.strokeStyle="#ffffff",E.fillStyle="#ffffff");let _=M.points;if(_.length&&(E.beginPath(),E.arc(_[0].x*h.width,_[0].y*h.height,w,0,Math.PI*2),E.fill(),_.length>1)){E.beginPath(),E.moveTo(_[0].x*h.width,_[0].y*h.height);for(let z of _.slice(1))E.lineTo(z.x*h.width,z.y*h.height);E.stroke()}}E.restore()},[h,l,p,a]);let v=I=>{let L=r.current;if(!L)return null;let E=L.getBoundingClientRect();return!E.width||!E.height?null:{x:Math.min(1,Math.max(0,(I.clientX-E.left)/E.width)),y:Math.min(1,Math.max(0,(I.clientY-E.top)/E.height))}},x=I=>{let L=v(I);L&&(I.currentTarget.setPointerCapture?.(I.pointerId),s.current=!0,u(E=>[...E,{mode:d,size:p,points:[L]}]))},S=I=>{if(!s.current)return;let L=v(I);L&&u(E=>{let w=E[E.length-1];if(!w)return E;let M=nf(w.points,L);return M===w.points?E:[...E.slice(0,-1),{...w,points:M}]})},C=()=>{s.current=!1},N=async()=>{if(!i.current||!a)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let L=document.createElement("canvas");L.width=a.width,L.height=a.height;let E=L.getContext("2d");if(!E)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");E.fillStyle="#ffffff",E.fillRect(0,0,a.width,a.height);let w=Cs(p,{width:a.width,height:a.height});E.globalCompositeOperation="destination-out",E.lineWidth=w*2,E.lineCap="round",E.lineJoin="round",E.strokeStyle="#000",E.fillStyle="#000";for(let M of l){if(M.mode!=="paint")continue;let _=of(M.points[0],M.points[M.points.length-1],w/4,{width:a.width,height:a.height});if(_.length&&(E.beginPath(),E.arc(_[0].x*a.width,_[0].y*a.height,w,0,Math.PI*2),E.fill(),_.length>1)){E.beginPath(),E.moveTo(_[0].x*a.width,_[0].y*a.height);for(let z of _.slice(1))E.lineTo(z.x*a.width,z.y*a.height);E.stroke()}}return L.toDataURL("image/png")},P=async()=>{b(!0),k(null);try{let I=await N();await o(I,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(I){k(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${se(I)}`)}finally{b(!1)}},W=rf(l);return(0,ke.jsx)(Ie,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,ke.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:y||W,onClick:()=>void P(),children:y?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,ke.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ke.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,ke.jsx)("button",{type:"button","aria-pressed":d==="paint",className:`im-btn-sm ${d==="paint"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("paint"),children:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"}),(0,ke.jsx)("button",{type:"button","aria-pressed":d==="erase",className:`im-btn-sm ${d==="erase"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("erase"),children:"\u64E6"}),(0,ke.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,ke.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(p*100),onChange:I=>m(Ss(Number(I.target.value)/100)),className:"im-range"}),(0,ke.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(p*100),"%"]})]}),(0,ke.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>u([]),children:"\u6E05\u7A7A"}),(0,ke.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,ke.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,ke.jsx)("canvas",{ref:r,onPointerDown:x,onPointerMove:S,onPointerUp:C,onPointerCancel:C,style:{width:h.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,ke.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",a?` \xB7 \u539F\u56FE ${a.width} \xD7 ${a.height}`:""]}),g?(0,ke.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:g}):null]})})}var It=require("react");var ze=require("react/jsx-runtime"),dw={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(132px, 1fr))",gap:10};function af({onClose:e,onImport:t}){let[n,o]=(0,It.useState)(null),[r,i]=(0,It.useState)(null),[s,a]=(0,It.useState)([]),[c,l]=(0,It.useState)("");(0,It.useEffect)(()=>{let f=!1;return uu().then(p=>{if(f)return;let m=[...p.images].sort((y,b)=>String(b.createdAt).localeCompare(String(y.createdAt)));o(m)}).catch(p=>{f||i(se(p))}),()=>{f=!0}},[]);let u=(0,It.useMemo)(()=>{if(!n)return[];let f=c.trim().toLowerCase();return f?n.filter(p=>p.name.toLowerCase().includes(f)):n},[n,c]),d=f=>{a(p=>p.includes(f)?p.filter(m=>m!==f):[...p,f])};return(0,ze.jsx)(Ie,{title:"\u751F\u6210\u5386\u53F2",subtitle:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE\u3002",size:"wide",onClose:e,footer:(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!s.length,onClick:()=>t((n??[]).filter(f=>s.includes(f.id))),children:"\u653E\u5165\u753B\u5E03"})]}),children:(0,ze.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ze.jsxs)("p",{className:"im-modal-note",children:["\u5171 ",u.length," \u5F20",c.trim()?"\uFF08\u5DF2\u7B5B\u9009\uFF09":"",s.length?` \xB7 \u9009\u4E2D ${s.length}`:""]}),(0,ze.jsx)("input",{type:"search",value:c,placeholder:"\u6309\u6587\u4EF6\u540D\u7B5B\u9009","aria-label":"\u6309\u6587\u4EF6\u540D\u7B5B\u9009",className:"im-field",onChange:f=>l(f.target.value)}),r?(0,ze.jsxs)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:["\u8BFB\u53D6\u5931\u8D25\uFF1A",r]}):null,n===null&&!r?(0,ze.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-ink-3)"},children:"\u8BFB\u53D6\u4E2D\u2026"}):null,n&&n.length===0?(0,ze.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-ink-3)"},children:"\u8FD8\u6CA1\u6709\u751F\u6210\u8FC7\u56FE\u7247\u3002"}):null,u.length?(0,ze.jsx)("div",{style:dw,children:u.map(f=>{let p=s.includes(f.id);return(0,ze.jsxs)("button",{type:"button",onClick:()=>d(f.id),title:`${f.name}
${f.createdAt}`,style:{position:"relative",padding:0,border:`2px solid ${p?"var(--im-brand)":"var(--im-line)"}`,borderRadius:8,overflow:"hidden",background:"var(--im-surface-inset)",cursor:"pointer",aspectRatio:"1 / 1"},children:[(0,ze.jsx)("img",{src:f.url,alt:f.name,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),(0,ze.jsx)("span",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"3px 5px",fontSize:10,lineHeight:1.4,textAlign:"left",color:"#fff",background:"linear-gradient(transparent, rgba(0,0,0,.72))",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name})]},f.id)})}):null,(0,ze.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u9009\u4E2D\u7684\u56FE\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03\u3002"})]})})}var ht=require("react");var xe=require("react/jsx-runtime");async function fw(e,t,n,o){let r=await new Promise((c,l)=>{let u=new Image;u.onload=()=>c(u),u.onerror=()=>l(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),u.src=e}),i=Math.floor(o.width/t),s=Math.floor(o.height/n),a=[];for(let c=0;c<n;c+=1)for(let l=0;l<t;l+=1){let u=document.createElement("canvas");u.width=i,u.height=s;let d=u.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,l*i,c*s,i,s,0,0,i,s),a.push(u.toDataURL("image/png"))}return a}var pw="52vh";function lf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,ht.useState)(null),[i,s]=(0,ht.useState)(2),[a,c]=(0,ht.useState)(2),[l,u]=(0,ht.useState)(!1),[d,f]=(0,ht.useState)(null);(0,ht.useEffect)(()=>{let b=!0;return Bt(e).then(g=>{b&&r(g)}).catch(g=>{b&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${se(g)}`)}),()=>{b=!1}},[e]);let p=(0,ht.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/a)}:{w:0,h:0},[o,i,a]),m=async()=>{if(o){u(!0),f(null);try{let b=await fw(e,i,a,o);await n(b.map((g,k)=>({dataUrl:g,note:`\u5207\u5206 ${k+1}/${b.length}`})))}catch(b){f(`\u5207\u5206\u5931\u8D25\uFF1A${se(b)}`)}finally{u(!1)}}},y=i*a;return(0,xe.jsx)(Ie,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,xe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||y<2,onClick:()=>void m(),children:l?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${y} \u5F20`})]}),children:(0,xe.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,xe.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,xe.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,xe.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:b=>s(Number(b.target.value)),className:"im-range"}),(0,xe.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,xe.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,xe.jsx)("input",{type:"range",min:1,max:6,value:a,onChange:b=>c(Number(b.target.value)),className:"im-range"}),(0,xe.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:a})]}),(0,xe.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[y," \u5F20 \xB7 \u6BCF\u5F20 ",p.w," \xD7 ",p.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,xe.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,xe.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${pw} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(b,g)=>(0,xe.jsx)("span",{style:{position:"absolute",left:`${(g+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${g}`)),Array.from({length:a-1},(b,g)=>(0,xe.jsx)("span",{style:{position:"absolute",top:`${(g+1)/a*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${g}`))]})}),(0,xe.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,xe.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var bt=require("react");var Se=require("react/jsx-runtime"),cf=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],uf=[1024,1536,2048,3072,4096];function ff({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,bt.useState)(null),[i,s]=(0,bt.useState)(2048),[a,c]=(0,bt.useState)("high"),[l,u]=(0,bt.useState)(!1),[d,f]=(0,bt.useState)(null);(0,bt.useEffect)(()=>{let g=!0;return Bt(e).then(k=>{if(!g)return;r(k);let h=Math.max(k.width,k.height),v=uf.find(x=>x>h)??4096;s(v)}).catch(k=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${se(k)}`)}),()=>{g=!1}},[e]);let p=(0,bt.useMemo)(()=>o?xs(o.width,o.height,i):{width:0,height:0},[o,i]),m=o&&o.width>0?p.width/o.width:0,y=!!o&&p.width<o.width,b=async()=>{u(!0),f(null);try{let g=await jd(e,{targetLongEdge:i,algorithm:a});await n(g,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${cf.find(k=>k.value===a)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${se(g)}`)}finally{u(!1)}};return(0,Se.jsx)(Ie,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Se.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||p.width<8||p.height<8,onClick:()=>void b(),children:l?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Se.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Se.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Se.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),uf.map(g=>(0,Se.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>s(g),children:g},g))]}),(0,Se.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Se.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),cf.map(g=>(0,Se.jsx)("button",{type:"button","aria-pressed":g.value===a,className:`im-btn-sm ${g.value===a?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(g.value),children:g.label},g.value))]}),(0,Se.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Se.jsxs)(Se.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Se.jsxs)("b",{style:{color:y?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),m?` \xB7 ${m.toFixed(2)}\xD7`:"",y?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Se.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Se.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var _s=require("react/jsx-runtime");function pf({guides:e}){return e.length?(0,_s.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,_s.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var kr=require("react");var Re=require("react/jsx-runtime");function mf({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,kr.useState)(""),i=(0,kr.useMemo)(()=>Fu(o),[o]),s=o.trim().length>0,a=i.cards,c=i.issues??[];return(0,Re.jsx)(Ie,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u5B9E\u65F6\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u3002",size:"lg",onClose:t,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Re.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!a.length||c.length>0,onClick:()=>n(a),children:["\u5EFA ",a.length," \u5F20\u5361"]})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("p",{style:{margin:0,fontSize:12.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,Re.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,Re.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u683C\u5F0F\u4E0D\u5BF9\u7684\u5757\u4E0D\u4F1A\u5EFA\u5361\uFF0C\u4F1A\u5728\u4E0B\u9762\u6807\u51FA\u6765\u3002"]}),(0,Re.jsx)("textarea",{value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace"},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),s?(0,Re.jsxs)("div",{style:{fontSize:12,display:"grid",gap:4},children:[(0,Re.jsxs)("strong",{style:{fontWeight:600},children:["\u8BC6\u522B\u5230 ",a.length," \u5F20\u5361",c.length?`\uFF0C${c.length} \u5904\u9700\u8981\u4FEE\u6B63`:""]}),a.slice(0,8).map((l,u)=>(0,Re.jsxs)("div",{style:{color:"var(--im-ink-2)"},children:[u+1,". ",l.title?`${l.title} \xB7 `:"",l.ratio?`\u6BD4\u4F8B ${l.ratio}`:"\u6BD4\u4F8B\u6309\u9ED8\u8BA4",l.prompt?` \xB7 ${l.prompt.slice(0,46)}${l.prompt.length>46?"\u2026":""}`:" \xB7 \u63D0\u793A\u8BCD\u4E3A\u7A7A"]},`${u}-${l.title??""}`)),a.length>8?(0,Re.jsxs)("div",{style:{color:"var(--im-ink-3)"},children:["\u2026\u8FD8\u6709 ",a.length-8," \u5F20"]}):null,c.slice(0,5).map((l,u)=>(0,Re.jsxs)("div",{style:{color:"var(--im-danger)"},children:[l.title?`\u300C${l.title}\u300D\uFF1A`:"",l.message]},`issue-${u}`))]}):null,(0,Re.jsxs)("span",{style:{fontSize:11,color:"var(--im-ink-3)"},children:["\u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var cn=require("react");var Cr=require("react");Ns();var qe=require("react/jsx-runtime");function bf({config:e,onSaved:t,onFlash:n}){let o=Es(),[r,i]=(0,Cr.useState)(""),[s,a]=(0,Cr.useState)(""),[c,l]=(0,Cr.useState)(!1),u=e?.defaultOutputDir??"",d=async p=>{l(!0);try{let m=await oo(p);t(m),i(""),n(p?"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0":"\u5DF2\u56DE\u5230\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${se(m)}`)}finally{l(!1)}},f=async p=>{l(!0);try{let m=await vu(p);t(m),a(""),n(p>0?`\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${p.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${se(m)}`)}finally{l(!1)}};return(0,qe.jsxs)("div",{style:{display:"grid",gap:8,paddingTop:10,borderTop:"1px solid var(--im-line)"},children:[(0,qe.jsx)("span",{className:"im-label",children:"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84"}),(0,qe.jsx)(o.SettingsValueField,{id:"imagora-output-dir",label:"\u56FE\u7247\u843D\u76D8\u76EE\u5F55",hint:`\u7559\u7A7A\u5219\u7528 ${u||"\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output"}\uFF1B\u5DF2\u4FDD\u5B58\u7684\u503C\u4F1A\u4E00\u76F4\u751F\u6548`,text:r===""?u:r,placeholder:"\u7559\u7A7A = \u7528\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output",disabled:c,onEdit:p=>i(p)}),(0,qe.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,qe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void fr(u),children:"\u6253\u5F00\u76EE\u5F55"}),(0,qe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!r.trim()||r.trim()===u,onClick:()=>void d(r.trim()),children:"\u8BBE\u4E3A\u9ED8\u8BA4"}),(0,qe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void d(""),children:"\u56DE\u5230\u9ED8\u8BA4"})]}),(0,qe.jsx)("span",{className:"im-label",style:{marginTop:6},children:"\u9884\u7B97\u4E0A\u9650"}),(0,qe.jsx)(o.SettingsValueField,{id:"imagora-budget",label:"\u672C\u753B\u5E03\u6700\u591A\u82B1\u591A\u5C11\uFF08\u5143\uFF09",hint:e?.budget?`\u5F53\u524D\u4E0A\u9650 \xA5${e.budget.toFixed(2)}\uFF1B\u82B1\u5230\u4E0A\u9650\u65F6\u65B0\u4EFB\u52A1\u4F1A\u88AB\u62D2\u7EDD`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\uFF1B\u8BBE\u4E86\u4E4B\u540E\u82B1\u5230\u4E0A\u9650\u4F1A\u62D2\u7EDD\u65B0\u4EFB\u52A1",text:s===""?e?.budget?String(e.budget):"":s,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",numeric:!0,disabled:c,onEdit:p=>a(p)}),(0,qe.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,qe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!s.trim(),onClick:()=>void f(Number(s)),children:"\u4FDD\u5B58\u9884\u7B97"}),(0,qe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c||!e?.budget,onClick:()=>void f(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})}var _r=require("react");var Me=require("react/jsx-runtime");function yf({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,_r.useState)(""),[i,s]=(0,_r.useState)(""),[a,c]=(0,_r.useState)(!1),l=e?.imagoraRoot??"",u=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async m=>{c(!0);try{let y=await ku({title:m==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:m==="root"?l:d});if(!y.ok){if(y.reason==="cancelled")return;n(y.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${y.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let b=m==="root"?await ts(y.path||""):await oo(y.path||"");t(b),m==="root"?r(""):s(""),n(m==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(y){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${se(y)}`)}finally{c(!1)}},p=async(m,y)=>{c(!0);try{let b=m==="root"?await ts(y):await oo(y);t(b),m==="root"?r(""):s(""),n(y?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${se(b)}`)}finally{c(!1)}};return(0,Me.jsxs)("div",{className:"im-fieldset",children:[(0,Me.jsxs)("div",{children:[(0,Me.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,Me.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?l:o,placeholder:"\u4F8B\u5982 D:\\ProjectSomething\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:a,onChange:m=>r(m.target.value)}),(0,Me.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,Me.jsxs)("div",{className:"im-field-actions",children:[(0,Me.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:a,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:a||!o.trim()||o.trim()===l,onClick:()=>void p("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:a||!l,onClick:()=>void p("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,Me.jsxs)("div",{children:[(0,Me.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,Me.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?u:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:a,onChange:m=>s(m.target.value)}),(0,Me.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",u?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,Me.jsxs)("div",{className:"im-field-actions",children:[(0,Me.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:a,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:a||!i.trim()||i.trim()===u,onClick:()=>void p("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:a,onClick:()=>void fr(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:a||!u,onClick:()=>void p("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var pe=require("react/jsx-runtime");function Ms({id:e,label:t,hint:n,state:o,stateTone:r,children:i}){return(0,pe.jsxs)("div",{children:[(0,pe.jsxs)("label",{className:"im-label",htmlFor:e,children:[t,o?(0,pe.jsx)("span",{className:`im-field-state is-${r??"ok"}`,children:o}):null]}),i,n?(0,pe.jsx)("p",{className:"im-field-hint",children:n}):null]})}function xf({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[s,a]=(0,cn.useState)(r?.baseUrl??""),[c,l]=(0,cn.useState)(r?.model??""),[u,d]=(0,cn.useState)(""),[f,p]=(0,cn.useState)(!1),[m,y]=(0,cn.useState)(null),[b,g]=(0,cn.useState)([]),k=async()=>{p(!0);try{let x=await ns({baseUrl:s.trim(),model:c.trim(),apiKey:u.trim()});n(x),d(""),o("\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(x){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${se(x)}`)}finally{p(!1)}},h=async()=>{p(!0);try{let x=await ns({reset:!0});n(x),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(x){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${se(x)}`)}finally{p(!1)}},v=async()=>{p(!0),y(null);try{let x=await Su({baseUrl:s.trim(),apiKey:u.trim()});g(x.models??[]),y(x.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${x.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(x){g([]),y(`\u8FDE\u4E0D\u901A\uFF1A${se(x)}`)}finally{p(!1)}};return(0,pe.jsx)(Ie,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u586B\u4E00\u6B21\u63A5\u53E3\u5730\u5740\u548C API Key \u5C31\u80FD\u7528\uFF0C\u4E0D\u9700\u8981\u672C\u673A\u88C5 Imagora\u3002",size:"lg",onClose:t,footer:(0,pe.jsxs)(pe.Fragment,{children:[i?(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void h(),children:"\u6E05\u7A7A\u5E76\u56DE\u5230 Imagora \u914D\u7F6E"}):null,(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:t,children:"\u53D6\u6D88"}),(0,pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:f||!s.trim(),onClick:()=>void k(),children:"\u4FDD\u5B58"})]}),children:(0,pe.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,pe.jsx)("p",{style:{margin:0,fontSize:12.5,color:"var(--im-ink-3)",lineHeight:1.7},children:i?"\u5F53\u524D\u7528\u7684\u662F\u63D2\u4EF6\u5185\u914D\u7F6E\u3002":"\u5F53\u524D\u7528\u7684\u662F\u672C\u673A Imagora \u7684\u914D\u7F6E\u3002"}),(0,pe.jsx)(Ms,{id:"imagora-provider-base-url",label:"\u63A5\u53E3\u5730\u5740",hint:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\uFF0C\u4F8B\u5982 https://api.example.com/v1",children:(0,pe.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:s,placeholder:"https://api.example.com/v1",disabled:f,onChange:x=>a(x.target.value)})}),(0,pe.jsx)(Ms,{id:"imagora-provider-api-key",label:"API Key",hint:"\u53EA\u5B58\u5728\u672C\u673A ~/.dsh/imagora/settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7",state:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E",stateTone:r?.apiKeyConfigured?"ok":"warn",children:(0,pe.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:u,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:f,onChange:x=>d(x.target.value)})}),(0,pe.jsx)(Ms,{id:"imagora-provider-model",label:"\u6A21\u578B\u540D",hint:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628",children:(0,pe.jsx)("input",{id:"imagora-provider-model",className:"im-field",value:c,placeholder:"gpt-image-2.5-flare",disabled:f,onChange:x=>l(x.target.value)})}),(0,pe.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void v(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),m?(0,pe.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:m}):null]}),b.length?(0,pe.jsx)("div",{style:{fontSize:12,color:"var(--im-ink-2)"},children:b.slice(0,40).map(x=>(0,pe.jsx)("button",{type:"button",onClick:()=>l(x),style:{display:"block",border:"none",background:"none",padding:"2px 0",cursor:"pointer",color:x===c?"var(--im-brand)":"var(--im-ink-2)",font:"inherit",textAlign:"left"},children:x},x))}):null,(0,pe.jsx)(yf,{config:e,onSaved:n,onFlash:o}),(0,pe.jsx)(bf,{config:e,onSaved:n,onFlash:o})]})})}var Tn=require("react");function wf({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i}){let s=(0,Tn.useCallback)(async(d,f)=>{let p=d.filter(Pu);if(!p.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}for(let[m,y]of p.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let b=await dr(y,y.name||`pasted-${Date.now()}.png`),g=rn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},{x:f.x+m*172,y:f.y});t(k=>[...k,g]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`)}catch(b){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${se(b)}`)}},[t,o,r]),a=(0,Tn.useCallback)((d,f,p)=>{let m=f?p(f):n();s(d,m)},[s,n]),c=(0,Tn.useCallback)(d=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let p=f.files?.[0];if(p)try{let m=await dr(p,p.name);t(y=>y.map(b=>b.id===d&&b.type==="image"?{...b,data:{...b.data,registryId:m.id,name:m.name,url:m.url,size:m.size,ext:m.ext,absPath:m.absPath,missing:!1}}:b)),o(`\u5DF2\u66FF\u6362\u4E3A ${m.name}`)}catch(m){o(`\u66FF\u6362\u5931\u8D25\uFF1A${se(m)}`)}},f.click()},[t,o]),l=(0,Tn.useCallback)(d=>{let f=e.current.find(p=>p.id===d);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name})},[e,i]),u=(0,Tn.useCallback)(async(d,f,p)=>{let m=await fetch(d).then(h=>h.blob()),y=f.endsWith(".png")?f:`${f}.png`,b=await dr(m,y),g=p??n(),k=rn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},g);return t(h=>[...h,k]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`),b},[t,o,n]);return{addImages:s,dropFiles:a,replaceImage:c,openPreview:l,addDataUrl:u}}function vf(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(s=>s.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Wt=require("react");function kf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:s,timersRef:a}){let c=(0,Wt.useCallback)((p,m)=>{let b=(Array.isArray(m.results)?m.results:[]).filter(x=>x.status==="ok"&&x.assetId&&x.url),g=e.current.find(x=>x.id===p&&x.type==="prompt"),k=[];if(g&&g.type==="prompt"){let x=hr(g).height;b.forEach((S,C)=>{k.push(rn({id:String(S.assetId),relPath:S.name??"result.png",name:S.name??"result.png",url:String(S.url),size:S.bytes??0,ext:String(S.ext??"png"),absPath:S.absPath??"",createdAt:new Date().toISOString()},{x:g.position.x+C*172,y:g.position.y+x+56}))})}n(x=>{let S=[...x,...k];return ct(S,p,{status:m.status==="done"?"done":m.status==="cancelled"?"idle":"failed",resultCount:b.length,message:m.error??void 0,startedAtMs:void 0,cancelRequested:!1})}),k.length&&o(x=>{let S=k.map(C=>({id:`${p}->${C.id}`,source:p,target:C.id,animated:!0})).filter(C=>!x.some(N=>N.id===C.id));return S.length?[...x,...S]:x}),s.current.delete(p);let h=a.current.get(p);h&&window.clearTimeout(h),a.current.delete(p);let v=m.totalCost??0;v>0&&n(x=>{let S=x.find(N=>N.id===p),C=Number(S?.data?.cost??0);return ct(x,p,{cost:C+v})}),r(m.status==="done"?`\u5B8C\u6210 \xB7 ${b.length} \u5F20${v?` \xB7 ${v.toFixed(2)} \u5143`:""}`:`${m.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${m.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,s,a]),l=(0,Wt.useCallback)((p,m)=>{let y=async()=>{try{let b=await pu(m);if(b.status==="queued")n(g=>ct(g,p,{status:"queued"}));else if(b.status==="running")n(g=>ct(g,p,{status:"running",startedAtMs:b.startedAt??Date.now(),cancelRequested:b.cancelRequested}));else{c(p,b);return}}catch(b){r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${se(b)}`)}a.current.set(p,window.setTimeout(y,1200))};y()},[c,r,n,a]),u=(0,Wt.useCallback)(async p=>{let m=e.current.find(b=>b.id===p);if(!m||m.type!=="prompt")return;if(!m.data.prompt.trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let y=$u(e.current,t.current,p,m.data.prompt);if(y.mode==="invalid"){let b=y.unknown.map(g=>`@${g}`).join("\u3001");n(g=>ct(g,p,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${b}`}));return}try{let b=await fu({prompt:m.data.prompt,size:m.data.size,quality:m.data.quality,refIds:y.images.map(g=>g.type==="image"?g.data.registryId:"").filter(Boolean),outputDir:m.data.outputDir,spent:e.current.reduce((g,k)=>g+Number(k.data?.cost??0),0),mask:y.images.map(g=>g.type==="image"?g.data.maskDataUrl:"").find(Boolean)||""});s.current.set(p,b.taskId),n(g=>ct(g,p,{status:"queued",startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${y.images.length} \u5F20 \xB7 ${m.data.size}`),l(p,b.taskId)}catch(b){let g=se(b);n(k=>ct(k,p,{status:"failed",message:g})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${g}`)}},[e,t,n,i,r,l,s]),d=(0,Wt.useCallback)(async p=>{let m=s.current.get(p);if(n(y=>ct(y,p,{cancelRequested:!0})),!!m)try{await mu(m)}catch(y){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${se(y)}`)}},[n,r,s]),f=(0,Wt.useCallback)(p=>{for(let m of p)u(m)},[u]);return(0,Wt.useEffect)(()=>{let p=a.current;return()=>{for(let m of p.values())window.clearTimeout(m);p.clear()}},[a]),{runPrompt:u,cancelPrompt:d,runMany:f}}var nt=require("react");function Sf(e){let[t,n]=(0,nt.useState)(null),[o,r]=(0,nt.useState)([]),i=(0,nt.useRef)(null),s=(0,nt.useCallback)(u=>{n(u),i.current=u,r(u.issues)},[]),a=(0,nt.useCallback)(async()=>{try{s(await cu())}catch(u){r([se(u)])}},[s]);(0,nt.useEffect)(()=>{a()},[a]);let c=(0,nt.useCallback)(async u=>{try{let d=await wu(u);s(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${se(d)}`)}},[s,e]),l=(0,nt.useCallback)(async u=>{try{let d=await xu(u);s(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${se(d)}`)}},[s,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:l,replaceConfig:s}}var un=require("react");function uo(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Cf(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(uo(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(uo(r)),uo(i)):null},restore(r){let i=o.shift();return i?(n.push(uo(r)),uo(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function _f({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,un.useRef)(Cf(50)),s=(0,un.useCallback)(()=>{i.current.record({nodes:e.current,edges:t.current})},[e,t]),a=(0,un.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,un.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),l=(0,un.useCallback)(()=>i.current.clear(),[]),u=i.current.canUndo(),d=i.current.canRestore();return{record:s,undo:a,restore:c,clear:l,canUndo:u,canRestore:d}}var Ef=require("react");function gw(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Nf(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:s,onRestore:a,onSave:c,onClosePreview:l,hasPreview:u}=e;(0,Ef.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&u){l();return}if(gw(f.target))return;let p=f.ctrlKey||f.metaKey,m=f.key.toLowerCase();if(p&&m==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(b=>b.some(g=>!g.selected)?b.map(g=>({...g,selected:!0})):b);return}if(p&&m==="z"){f.preventDefault(),f.shiftKey?a():s();return}if(p&&m==="y"){f.preventDefault(),a();return}if(p&&m==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,s,a,c,l,u,e])}var Ft=require("react");var hw=2500;function Mf({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:s,log:a,flash:c,closeDialog:l}){let u=(0,Ft.useRef)(null);(0,Ft.useEffect)(()=>{if(e.length)return u.current&&window.clearTimeout(u.current),u.current=window.setTimeout(()=>{bu(n.current,o.current).catch(()=>{})},hw),()=>{u.current&&window.clearTimeout(u.current)}},[e,t,n,o]),(0,Ft.useEffect)(()=>{let p=!1;return(async()=>{try{let y=await yu();if(p||y.empty||!y.nodes?.length)return;let b=os(y.nodes,y.edges??[],[]);r(b.nodes),i(b.edges),a(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${y.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`)}catch{}})(),()=>{p=!0}},[r,i,a]);let d=(0,Ft.useCallback)(async p=>{try{let m=await gu(p,n.current,o.current);l(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${m.name||p}\u300D`)}catch(m){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${se(m)}`)}},[n,o,l,c]),f=(0,Ft.useCallback)(async p=>{try{let m=await hu(p),y=os(m.nodes,m.edges,m.missing??[]);r(y.nodes),i(y.edges),l(),c(`\u5DF2\u52A0\u8F7D\u300C${m.name||p}\u300D`),window.setTimeout(()=>s.current?.fitView({padding:.2,duration:300}),60)}catch(m){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${se(m)}`)}},[r,i,s,l,c]);return{doSave:d,doLoad:f}}var de=require("react/jsx-runtime");function Is(){let[e,t,n]=nu([]),[o,r,i]=ou([]),[s,a]=(0,oe.useState)([]),[c,l]=(0,oe.useState)(null),[u,d]=(0,oe.useState)(null),[f,p]=(0,oe.useState)(null),[m,y]=(0,oe.useState)(1),[b,g]=(0,oe.useState)(()=>Pd()),[k,h]=(0,oe.useState)([]),[v,x]=(0,oe.useState)(null),[S,C]=(0,oe.useState)(()=>Zu()),[N,P]=(0,oe.useState)(!1),[W,I]=(0,oe.useState)([]),L=(0,oe.useRef)(null),E=(0,oe.useRef)(null),w=(0,oe.useRef)(null),M=(0,oe.useRef)(null),_=(0,oe.useRef)(new Map),z=(0,oe.useRef)(new Map),D=(0,oe.useRef)(e),O=(0,oe.useRef)(o);D.current=e,O.current=o;let V=(0,oe.useCallback)(A=>{a(G=>[...G.slice(-8),A])},[]),H=(0,oe.useCallback)(A=>{l(A),window.setTimeout(()=>l(G=>G===A?null:G),2600)},[]),{config:F,configIssues:K,configRef:q,switchProfile:J,switchModel:re,replaceConfig:B}=Sf(H),R=(0,oe.useRef)(!1);(0,oe.useEffect)(()=>{!F||R.current||!(!F.provider?.apiKeyConfigured&&(F.source==="plugin"||F.issues.length>0))||(R.current=!0,d({kind:"settings"}))},[F]);let{addImages:X,replaceImage:ee,openPreview:te,addDataUrl:Z}=wf({nodesRef:D,setNodes:t,createPosition:()=>dn.current(),log:V,flash:H,setPreview:p}),{runPrompt:Q,cancelPrompt:ie,runMany:le}=kf({nodesRef:D,edgesRef:O,setNodes:t,setEdges:r,log:V,flash:H,taskIdsRef:z,timersRef:_}),{doSave:fe,doLoad:Ae}=Mf({nodes:e,edges:o,nodesRef:D,edgesRef:O,setNodes:t,setEdges:r,instanceRef:E,log:V,flash:H,closeDialog:()=>d(null)}),ce=_f({nodesRef:D,edgesRef:O,setNodes:t,setEdges:r,flash:H}),Qe=wd(e),Oe=(0,oe.useMemo)(()=>Tu(e,o),[e,o]),ot=(0,oe.useMemo)(()=>e.map(A=>{if(A.type==="image"){let G=Oe.refCounts.get(A.data.registryId)??0;return(A.data.refCount??0)===G?A:{...A,data:{...A.data,refCount:G}}}if(A.type==="group"){let G=Oe.groupCounts.get(A.id)??0,U=Oe.groupSizes.get(A.id)??0,ne=Oe.groupDups.get(A.id)??0;return A.data.imageCount===G&&A.data.totalSize===U&&A.data.duplicateCount===ne?A:{...A,data:{...A.data,imageCount:G,totalSize:U,duplicateCount:ne}}}return A}),[e,Oe]),yt=e.filter(A=>A.type==="prompt"),ut=yt.filter(A=>A.data.status==="queued"||A.data.status==="running").map(A=>A.id),rt=yt.filter(A=>A.data.prompt.trim()&&A.data.status!=="running"&&A.data.status!=="queued").map(A=>A.id),We=(0,oe.useCallback)((A,G)=>{t(U=>ct(U,A,G))},[t]),Fe=(0,oe.useCallback)(A=>{ce.record();let G=new Set(A);t(U=>U.filter(ne=>!G.has(ne.id))),r(U=>U.filter(ne=>!G.has(ne.source)&&!G.has(ne.target)))},[t,r,ce]),Je=(0,oe.useCallback)(A=>{let G=D.current.find(U=>U.id===A);Fe([A]),G?.type==="image"&&du(G.data.registryId).catch(()=>{})},[Fe]),we=(0,oe.useCallback)(()=>{let A=E.current,G=L.current?.getBoundingClientRect(),U=A&&G?A.screenToFlowPosition({x:G.width/2,y:G.height/2}):{x:140,y:120},{position:ne,next:ye}=zu(U,M.current);return M.current=ye,ne},[]),dn=(0,oe.useRef)(we);dn.current=we;let fn=(0,oe.useCallback)(A=>{let G=q.current,U=Ru(A??we(),{size:G?.sizes[0]?.value??"1024x1024",quality:G?.qualities[0]??"high",outputDir:""});t(ne=>[...ne,U])},[we,t,q]),fo=(0,oe.useCallback)(A=>{t(G=>[...G,Du(A??we())])},[we,t]),Er=(0,oe.useCallback)(()=>{r(rs(D.current,O.current)),H("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,H]),Nr=(0,oe.useCallback)(()=>{let A=new Set(k);if(!A.size){H("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}ce.record(),r(Lu(D.current,O.current,A)),H("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[k,r,H,ce]),Mr=(0,oe.useCallback)(()=>{let A=new Set(k),G=q.current?.defaultOutputDir??"";A.size&&(ce.record(),t(U=>U.map(ne=>ne.type==="prompt"&&A.has(ne.id)?{...ne,data:{...ne.data,outputDir:G}}:ne)),H(G?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${G}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[k,t,H,ce]),Ir=(0,oe.useCallback)(()=>{let A=E.current;if(!A)return;let G=D.current.filter(ne=>k.includes(ne.id)),U=G.length?G:D.current;if(!U.length){H("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}A.fitView({nodes:U,padding:.25,duration:300,maxZoom:1.6})},[k,H]),Pr=(0,oe.useCallback)(()=>{let A=new Set(k);if(!A.size){H("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}ce.record(),t(G=>{let U=G.filter(Ce=>A.has(Ce.id)&&Ce.type==="image");if(!U.length)return G;let ne=Math.min(...U.map(Ce=>Ce.position.x)),ye=Math.min(...U.map(Ce=>Ce.position.y)),xt=new Map(U.map((Ce,pn)=>[Ce.id,pn]));return G.map(Ce=>{let pn=xt.get(Ce.id);return pn===void 0?Ce:{...Ce,position:{x:ne+pn*172,y:ye}}})})},[k,t,H,ce]),{dropIntent:zr,dragHandlers:Rr,startToolbarDrag:Dr,dropChip:Ar}=Md({canvasRef:L,modalOpen:!!u||!!f,getCreatePosition:()=>we(),toFlowPosition:A=>E.current?E.current.screenToFlowPosition(A):we(),onDropFiles:(A,G)=>void X(A,G),onDropNode:(A,G)=>{ce.record(),A==="prompt"?fn(G):fo(G)}});(0,oe.useEffect)(()=>{let A=G=>{let U=G.target;if(U&&(U.tagName==="TEXTAREA"||U.tagName==="INPUT"))return;let ne=Array.from(G.clipboardData?.files??[]);ne.length&&(G.preventDefault(),X(ne,we()))};return window.addEventListener("paste",A),()=>window.removeEventListener("paste",A)},[X,we]),Nf({nodesRef:D,edgesRef:O,setNodes:t,setEdges:r,selectedIds:k,selectedEdgeId:v,onDeleteNodes:Fe,onDeleteEdge:A=>{ce.record(),r(G=>G.filter(U=>U.id!==A)),x(null)},onUndo:ce.undo,onRestore:ce.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let Vt=(0,oe.useCallback)(A=>G=>{let U=D.current.find(ne=>ne.id===G);if(!U||U.type!=="image"||!U.data.url){H("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:A,target:{nodeId:G,src:U.data.url,name:U.data.name}})},[D,H]),po=(0,oe.useMemo)(()=>({cropImage:Vt("crop"),splitImage:Vt("split"),upscaleImage:Vt("upscale"),maskImage:Vt("mask")}),[Vt]),mo=(0,oe.useCallback)(A=>{ce.record(),t(G=>G.map(U=>U.id===A&&U.type==="image"?{...U,data:{...U.data,maskDataUrl:void 0}}:U)),H("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,ce,H]),Or=(0,oe.useMemo)(()=>({updatePrompt:We,runPrompt:A=>{Q(A)},cancelPrompt:A=>{ie(A)},deleteNode:Je,zoomImage:te,replaceImage:ee,...po,clearMask:mo,config:F}),[We,Q,ie,Je,te,ee,po,mo,F]);return(0,de.jsxs)(ds.Provider,{value:Or,children:[(0,de.jsx)("style",{children:hd}),(0,de.jsxs)("div",{className:"im-root",children:[(0,de.jsx)(kd,{config:F,promptCount:yt.length,runnableIds:rt,busyIds:ut.length,snapEnabled:S,canvasLocked:N,cost:Qe,canUndo:ce.canUndo,canRestore:ce.canRestore,onUndo:()=>{ce.record(),ce.undo()},onRestore:ce.restore,onAddPrompt:()=>fn(),onPickFiles:()=>w.current?.click(),onAddGroup:()=>fo(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:Dr,onRun:le,onCancelAll:()=>ut.forEach(A=>void ie(A)),onAutoConnect:Er,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:A=>void J(A),onSwitchModel:A=>void re(A),onOpenSave:async()=>{try{let A=await es();d({kind:"save",workflows:A.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let A=await es();d({kind:"load",workflows:A.workflows})}catch(A){H(`\u8BFB\u53D6\u5931\u8D25\uFF1A${se(A)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),K.length?(0,de.jsx)($d,{tone:"error",action:(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,de.jsx)("ul",{className:"im-banner-list",children:K.map(A=>(0,de.jsx)("li",{children:A},A))})}):null,(0,de.jsxs)("div",{className:`im-canvas${zr?" is-drop-active":""}`,ref:L,...Rr,children:[(0,de.jsx)(Rd,{selectedCount:k.length,selectedPromptCount:k.filter(A=>e.some(G=>G.id===A&&G.type==="prompt")).length,selectedRunnableIds:rt.filter(A=>k.includes(A)),pickingOutputDir:!1,onRunSelected:()=>le(rt.filter(A=>k.includes(A))),onAutoLayout:Pr,onAutoConnectSelected:Nr,onSetOutputDir:Mr,onDeleteSelected:()=>{Fe(k),h([])}}),(0,de.jsxs)(tu,{nodes:ot,edges:o,nodeTypes:bd,onNodesChange:A=>{let G=ju(A,D.current,S);I(G.guides),n(G.changes)},onEdgesChange:A=>i(A),onConnect:vf(r),isValidConnection:A=>Au(D.current,O.current,{source:String(A.source??""),target:String(A.target??"")}),onInit:A=>{E.current=A},onNodeDragStop:(A,G)=>{if(I([]),!S)return;let U=so(G),ne=D.current.filter(xt=>xt.id!==G.id).map(so),ye=br(U,ne);ye.x===U.x&&ye.y===U.y||t(xt=>xt.map(Ce=>Ce.id===G.id?{...Ce,position:{x:ye.x,y:ye.y}}:Ce))},onMove:(A,G)=>y(G.zoom),onEdgeDoubleClick:(A,G)=>{ce.record(),r(U=>U.filter(ne=>ne.id!==G.id)),x(null)},onSelectionChange:({nodes:A,edges:G})=>{let U=A.map(ye=>ye.id);h(ye=>ye.length===U.length&&ye.every((xt,Ce)=>xt===U[Ce])?ye:U);let ne=G.length===1?G[0].id:null;x(ye=>ye===ne?ye:ne)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:{animated:!0,markerEnd:{type:At.ArrowClosed}},deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!N,nodesConnectable:!N,elementsSelectable:!N,panOnDrag:!N,selectionOnDrag:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:["Meta","Control"],children:[(0,de.jsx)(iu,{variant:gt.Dots,gap:18,size:1.4}),b?(0,de.jsx)(lu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:A=>A.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,de.jsx)(pf,{guides:W})]}),(0,de.jsx)(Sd,{zoom:m,snapEnabled:S,canvasLocked:N,minimapOpen:b,onZoomIn:()=>void E.current?.zoomIn({duration:180}),onZoomOut:()=>void E.current?.zoomOut({duration:180}),onFitView:()=>E.current?.fitView({padding:.2,duration:300}),onFocusSelected:Ir,onToggleSnap:()=>C(A=>{let G=!A;return Ku(G),G||I([]),H(G?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),G}),onToggleLock:()=>P(A=>{let G=!A;return H(G?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),G}),onToggleMinimap:()=>g(A=>{let G=!A;return zd(G),G}),onOpenHelp:()=>d({kind:"help"})}),e.length===0?(0,de.jsx)(Dd,{}):null,(0,de.jsx)(Ad,{logs:s}),(0,de.jsx)(Od,{text:c}),Ar]}),(0,de.jsx)("input",{ref:w,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:A=>{let G=Array.from(A.target.files??[]);A.target.value="",X(G,we())}}),(0,de.jsx)(Td,{preview:f,onClose:()=>p(null)}),u?.kind==="save"?(0,de.jsx)(Wd,{workflows:u.workflows??[],onCancel:()=>d(null),onSubmit:A=>void fe(A)}):null,u?.kind==="load"?(0,de.jsx)(Fd,{workflows:u.workflows??[],onCancel:()=>d(null),onPick:A=>void Ae(A)}):null,u?.kind==="crop"&&u.target?(0,de.jsx)(tf,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(A,G)=>{ce.record(),await Z(A,`${u.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),H(G)}}):null,u?.kind==="split"&&u.target?(0,de.jsx)(lf,{src:u.target.src,onClose:()=>d(null),onConfirm:async A=>{ce.record();let G=u.target.name.replace(/\.[^.]+$/,""),U=we();for(let[ne,ye]of A.entries())await Z(ye.dataUrl,`${G}_${ne+1}.png`,{x:U.x+ne*160,y:U.y});d(null),H(`\u5DF2\u5207\u51FA ${A.length} \u5F20`)}}):null,u?.kind==="upscale"&&u.target?(0,de.jsx)(ff,{src:u.target.src,onClose:()=>d(null),onConfirm:async(A,G)=>{ce.record(),await Z(A,`${u.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),H(G)}}):null,u?.kind==="mask"&&u.target?(0,de.jsx)(sf,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(A,G)=>{ce.record(),t(U=>U.map(ne=>ne.id===u.target.nodeId&&ne.type==="image"?{...ne,data:{...ne.data,maskDataUrl:A}}:ne)),d(null),H(G)}}):null,u?.kind==="help"?(0,de.jsx)(Vd,{config:F,onClose:()=>d(null)}):null,u?.kind==="history"?(0,de.jsx)(af,{onClose:()=>d(null),onImport:A=>{if(!A.length)return;ce.record();let G=we(),U=A.map((ne,ye)=>rn(ne,{x:G.x+ye*172,y:G.y}));t(ne=>[...ne,...U]),d(null),H(`\u5DF2\u653E\u5165 ${U.length} \u5F20\u56FE`)}}):null,u?.kind==="import"?(0,de.jsx)(mf,{sizes:F?.sizes??[],onCancel:()=>d(null),onConfirm:A=>{ce.record();let G=q.current,U=Vu(A,{sizes:G?.sizes??[],defaultQuality:G?.qualities[0]??"high",defaultOutputDir:""},we());t(ne=>[...ne,...U]),d(null),H(`\u5DF2\u5EFA ${U.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,u?.kind==="settings"?(0,de.jsx)(xf,{config:F,onClose:()=>d(null),onSaved:B,onFlash:H}):null]})]})}var If=`/* this gets exported as style.css and can be used for the default theming */
/* these are the necessary styles for React/Svelte Flow, they get used by base.css and style.css */
.react-flow {
  direction: ltr;

  --xy-edge-stroke-default: #b1b1b7;
  --xy-edge-stroke-width-default: 1;
  --xy-edge-stroke-selected-default: #555;

  --xy-connectionline-stroke-default: #b1b1b7;
  --xy-connectionline-stroke-width-default: 1;

  --xy-attribution-background-color-default: rgba(255, 255, 255, 0.5);

  --xy-minimap-background-color-default: #fff;
  --xy-minimap-mask-background-color-default: rgba(240, 240, 240, 0.6);
  --xy-minimap-mask-stroke-color-default: transparent;
  --xy-minimap-mask-stroke-width-default: 1;
  --xy-minimap-node-background-color-default: #e2e2e2;
  --xy-minimap-node-stroke-color-default: transparent;
  --xy-minimap-node-stroke-width-default: 2;

  --xy-background-color-default: transparent;
  --xy-background-pattern-dots-color-default: #91919a;
  --xy-background-pattern-lines-color-default: #eee;
  --xy-background-pattern-cross-color-default: #e2e2e2;
  background-color: var(--xy-background-color, var(--xy-background-color-default));
  --xy-node-color-default: inherit;
  --xy-node-border-default: 1px solid #1a192b;
  --xy-node-background-color-default: #fff;
  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);
  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, 0.08);
  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #1a192b;
  --xy-node-border-radius-default: 3px;

  --xy-handle-background-color-default: #1a192b;
  --xy-handle-border-color-default: #fff;

  --xy-selection-background-color-default: rgba(0, 89, 220, 0.08);
  --xy-selection-border-default: 1px dotted rgba(0, 89, 220, 0.8);

  --xy-controls-button-background-color-default: #fefefe;
  --xy-controls-button-background-color-hover-default: #f4f4f4;
  --xy-controls-button-color-default: inherit;
  --xy-controls-button-color-hover-default: inherit;
  --xy-controls-button-border-color-default: #eee;
  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);

  --xy-edge-label-background-color-default: #ffffff;
  --xy-edge-label-color-default: inherit;
  --xy-resize-background-color-default: #3367d9;
}
.react-flow.dark {
  --xy-edge-stroke-default: #3e3e3e;
  --xy-edge-stroke-width-default: 1;
  --xy-edge-stroke-selected-default: #727272;

  --xy-connectionline-stroke-default: #b1b1b7;
  --xy-connectionline-stroke-width-default: 1;

  --xy-attribution-background-color-default: rgba(150, 150, 150, 0.25);

  --xy-minimap-background-color-default: #141414;
  --xy-minimap-mask-background-color-default: rgba(60, 60, 60, 0.6);
  --xy-minimap-mask-stroke-color-default: transparent;
  --xy-minimap-mask-stroke-width-default: 1;
  --xy-minimap-node-background-color-default: #2b2b2b;
  --xy-minimap-node-stroke-color-default: transparent;
  --xy-minimap-node-stroke-width-default: 2;

  --xy-background-color-default: #141414;
  --xy-background-pattern-dots-color-default: #555;
  --xy-background-pattern-lines-color-default: #333;
  --xy-background-pattern-cross-color-default: #333;
  --xy-node-color-default: #f8f8f8;
  --xy-node-border-default: 1px solid #3c3c3c;
  --xy-node-background-color-default: #1e1e1e;
  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);
  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, 0.08);
  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #999;

  --xy-handle-background-color-default: #bebebe;
  --xy-handle-border-color-default: #1e1e1e;

  --xy-selection-background-color-default: rgba(200, 200, 220, 0.08);
  --xy-selection-border-default: 1px dotted rgba(200, 200, 220, 0.8);

  --xy-controls-button-background-color-default: #2b2b2b;
  --xy-controls-button-background-color-hover-default: #3e3e3e;
  --xy-controls-button-color-default: #f8f8f8;
  --xy-controls-button-color-hover-default: #fff;
  --xy-controls-button-border-color-default: #5b5b5b;
  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);

  --xy-edge-label-background-color-default: #141414;
  --xy-edge-label-color-default: #f8f8f8;
}
.react-flow__background {
  background-color: var(--xy-background-color-props, var(--xy-background-color, var(--xy-background-color-default)));
  pointer-events: none;
  z-index: -1;
}
.react-flow__container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.react-flow__pane {
  z-index: 1;
  touch-action: none;
}
.react-flow__pane.draggable {
    cursor: grab;
  }
.react-flow__pane.dragging {
    cursor: grabbing;
  }
.react-flow__pane.selection {
    cursor: pointer;
  }
.react-flow__viewport {
  transform-origin: 0 0;
  z-index: 2;
  pointer-events: none;
}
.react-flow__renderer {
  z-index: 4;
}
.react-flow__selection {
  z-index: 6;
}
.react-flow__nodesselection-rect:focus,
.react-flow__nodesselection-rect:focus-visible {
  outline: none;
}
.react-flow__edge-path {
  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
  stroke-width: var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));
  fill: none;
}
.react-flow__connection-path {
  stroke: var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));
  stroke-width: var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));
  fill: none;
}
.react-flow .react-flow__edges {
  position: absolute;
}
.react-flow .react-flow__edges svg {
    overflow: visible;
    position: absolute;
    pointer-events: none;
  }
.react-flow__edge {
  pointer-events: visibleStroke;
}
.react-flow__edge.selectable {
    cursor: pointer;
  }
.react-flow__edge.animated path {
    stroke-dasharray: 5;
    animation: dashdraw 0.5s linear infinite;
  }
.react-flow__edge.animated path.react-flow__edge-interaction {
    stroke-dasharray: none;
    animation: none;
  }
.react-flow__edge.inactive {
    pointer-events: none;
  }
.react-flow__edge.selected,
  .react-flow__edge:focus,
  .react-flow__edge:focus-visible {
    outline: none;
  }
.react-flow__edge.selected .react-flow__edge-path,
  .react-flow__edge.selectable:focus .react-flow__edge-path,
  .react-flow__edge.selectable:focus-visible .react-flow__edge-path {
    stroke: var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default));
  }
.react-flow__edge-textwrapper {
    pointer-events: all;
  }
.react-flow__edge .react-flow__edge-text {
    pointer-events: none;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
/* Arrowhead marker styles - use CSS custom properties as default */
.react-flow__arrowhead polyline {
  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
}
.react-flow__arrowhead polyline.arrowclosed {
  fill: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
}
.react-flow__connection {
  pointer-events: none;
}
.react-flow__connection .animated {
    stroke-dasharray: 5;
    animation: dashdraw 0.5s linear infinite;
  }
svg.react-flow__connectionline {
  z-index: 1001;
  overflow: visible;
  position: absolute;
}
.react-flow__nodes {
  pointer-events: none;
  transform-origin: 0 0;
}
.react-flow__node {
  position: absolute;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  pointer-events: all;
  transform-origin: 0 0;
  box-sizing: border-box;
  cursor: default;
}
.react-flow__node.selectable {
    cursor: pointer;
  }
.react-flow__node.draggable {
    cursor: grab;
    pointer-events: all;
  }
.react-flow__node.draggable.dragging {
      cursor: grabbing;
    }
.react-flow__nodesselection {
  z-index: 3;
  transform-origin: left top;
  pointer-events: none;
}
.react-flow__nodesselection-rect {
    position: absolute;
    pointer-events: all;
    cursor: grab;
  }
.react-flow__handle {
  position: absolute;
  pointer-events: none;
  min-width: 5px;
  min-height: 5px;
  width: 6px;
  height: 6px;
  background-color: var(--xy-handle-background-color, var(--xy-handle-background-color-default));
  border: 1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));
  border-radius: 100%;
}
.react-flow__handle.connectingfrom {
    pointer-events: all;
  }
.react-flow__handle.connectionindicator {
    pointer-events: all;
    cursor: crosshair;
  }
.react-flow__handle-bottom {
    top: auto;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
  }
.react-flow__handle-top {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
.react-flow__handle-left {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
.react-flow__handle-right {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
.react-flow__edgeupdater {
  cursor: move;
  pointer-events: all;
}
.react-flow__pane.selection .react-flow__panel {
  pointer-events: none;
}
.react-flow__panel {
  position: absolute;
  z-index: 5;
  margin: 15px;
}
.react-flow__panel.top {
    top: 0;
  }
.react-flow__panel.bottom {
    bottom: 0;
  }
.react-flow__panel.top.center, .react-flow__panel.bottom.center {
      left: 50%;
      transform: translateX(-15px) translateX(-50%);
    }
.react-flow__panel.left {
    left: 0;
  }
.react-flow__panel.right {
    right: 0;
  }
.react-flow__panel.left.center, .react-flow__panel.right.center {
      top: 50%;
      transform: translateY(-15px) translateY(-50%);
    }
.react-flow__attribution {
  font-size: 10px;
  background: var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));
  padding: 2px 3px;
  margin: 0;
}
.react-flow__attribution a {
    text-decoration: none;
    color: #999;
  }
@keyframes dashdraw {
  from {
    stroke-dashoffset: 10;
  }
}
.react-flow__edgelabel-renderer {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  left: 0;
  top: 0;
}
.react-flow__viewport-portal {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.react-flow__minimap {
  background: var(
    --xy-minimap-background-color-props,
    var(--xy-minimap-background-color, var(--xy-minimap-background-color-default))
  );
}
.react-flow__minimap-svg {
    display: block;
  }
.react-flow__minimap-mask {
    fill: var(
      --xy-minimap-mask-background-color-props,
      var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default))
    );
    stroke: var(
      --xy-minimap-mask-stroke-color-props,
      var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default))
    );
    stroke-width: var(
      --xy-minimap-mask-stroke-width-props,
      var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default))
    );
  }
.react-flow__minimap-node {
    fill: var(
      --xy-minimap-node-background-color-props,
      var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default))
    );
    stroke: var(
      --xy-minimap-node-stroke-color-props,
      var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default))
    );
    stroke-width: var(
      --xy-minimap-node-stroke-width-props,
      var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default))
    );
  }
.react-flow__background-pattern.dots {
    fill: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default))
    );
  }
.react-flow__background-pattern.lines {
    stroke: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default))
    );
  }
.react-flow__background-pattern.cross {
    stroke: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default))
    );
  }
.react-flow__controls {
  display: flex;
  flex-direction: column;
  box-shadow: var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default));
}
.react-flow__controls.horizontal {
    flex-direction: row;
  }
.react-flow__controls-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    padding: 4px;
    border: none;
    background: var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));
    border-bottom: 1px solid
      var(
        --xy-controls-button-border-color-props,
        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))
      );
    color: var(
      --xy-controls-button-color-props,
      var(--xy-controls-button-color, var(--xy-controls-button-color-default))
    );
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
.react-flow__controls-button svg {
      width: 100%;
      max-width: 12px;
      max-height: 12px;
      fill: currentColor;
    }
.react-flow__edge.updating .react-flow__edge-path {
      stroke: #777;
    }
.react-flow__edge-text {
    font-size: 10px;
  }
.react-flow__node.selectable:focus,
  .react-flow__node.selectable:focus-visible {
    outline: none;
  }
.react-flow__node-input,
.react-flow__node-default,
.react-flow__node-output,
.react-flow__node-group {
  padding: 10px;
  border-radius: var(--xy-node-border-radius, var(--xy-node-border-radius-default));
  width: 150px;
  font-size: 12px;
  color: var(--xy-node-color, var(--xy-node-color-default));
  text-align: center;
  border: var(--xy-node-border, var(--xy-node-border-default));
  background-color: var(--xy-node-background-color, var(--xy-node-background-color-default));
}
.react-flow__node-input.selectable:hover, .react-flow__node-default.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {
      box-shadow: var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default));
    }
.react-flow__node-input.selectable.selected,
    .react-flow__node-input.selectable:focus,
    .react-flow__node-input.selectable:focus-visible,
    .react-flow__node-default.selectable.selected,
    .react-flow__node-default.selectable:focus,
    .react-flow__node-default.selectable:focus-visible,
    .react-flow__node-output.selectable.selected,
    .react-flow__node-output.selectable:focus,
    .react-flow__node-output.selectable:focus-visible,
    .react-flow__node-group.selectable.selected,
    .react-flow__node-group.selectable:focus,
    .react-flow__node-group.selectable:focus-visible {
      box-shadow: var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default));
    }
.react-flow__node-group {
  background-color: var(--xy-node-group-background-color, var(--xy-node-group-background-color-default));
}
.react-flow__nodesselection-rect,
.react-flow__selection {
  background: var(--xy-selection-background-color, var(--xy-selection-background-color-default));
  border: var(--xy-selection-border, var(--xy-selection-border-default));
}
.react-flow__nodesselection-rect:focus,
  .react-flow__nodesselection-rect:focus-visible,
  .react-flow__selection:focus,
  .react-flow__selection:focus-visible {
    outline: none;
  }
.react-flow__controls-button:hover {
      background: var(
        --xy-controls-button-background-color-hover-props,
        var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default))
      );
      color: var(
        --xy-controls-button-color-hover-props,
        var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default))
      );
    }
.react-flow__controls-button:disabled {
      pointer-events: none;
    }
.react-flow__controls-button:disabled svg {
        fill-opacity: 0.4;
      }
.react-flow__controls-button:last-child {
    border-bottom: none;
  }
.react-flow__controls.horizontal .react-flow__controls-button {
    border-bottom: none;
    border-right: 1px solid
      var(
        --xy-controls-button-border-color-props,
        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))
      );
  }
.react-flow__controls.horizontal .react-flow__controls-button:last-child {
    border-right: none;
  }
.react-flow__resize-control {
  position: absolute;
}
.react-flow__resize-control.left,
.react-flow__resize-control.right {
  cursor: ew-resize;
}
.react-flow__resize-control.top,
.react-flow__resize-control.bottom {
  cursor: ns-resize;
}
.react-flow__resize-control.top.left,
.react-flow__resize-control.bottom.right {
  cursor: nwse-resize;
}
.react-flow__resize-control.bottom.left,
.react-flow__resize-control.top.right {
  cursor: nesw-resize;
}
/* handle styles */
.react-flow__resize-control.handle {
  width: 5px;
  height: 5px;
  border: 1px solid #fff;
  border-radius: 1px;
  background-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));
  translate: -50% -50%;
}
.react-flow__resize-control.handle.left {
  left: 0;
  top: 50%;
}
.react-flow__resize-control.handle.right {
  left: 100%;
  top: 50%;
}
.react-flow__resize-control.handle.top {
  left: 50%;
  top: 0;
}
.react-flow__resize-control.handle.bottom {
  left: 50%;
  top: 100%;
}
.react-flow__resize-control.handle.top.left {
  left: 0;
}
.react-flow__resize-control.handle.bottom.left {
  left: 0;
}
.react-flow__resize-control.handle.top.right {
  left: 100%;
}
.react-flow__resize-control.handle.bottom.right {
  left: 100%;
}
/* line styles */
.react-flow__resize-control.line {
  border-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));
  border-width: 0;
  border-style: solid;
}
.react-flow__resize-control.line.left,
.react-flow__resize-control.line.right {
  width: 1px;
  transform: translate(-50%, 0);
  top: 0;
  height: 100%;
}
.react-flow__resize-control.line.left {
  left: 0;
  border-left-width: 1px;
}
.react-flow__resize-control.line.right {
  left: 100%;
  border-right-width: 1px;
}
.react-flow__resize-control.line.top,
.react-flow__resize-control.line.bottom {
  height: 1px;
  transform: translate(0, -50%);
  left: 0;
  width: 100%;
}
.react-flow__resize-control.line.top {
  top: 0;
  border-top-width: 1px;
}
.react-flow__resize-control.line.bottom {
  border-bottom-width: 1px;
  top: 100%;
}
.react-flow__edge-textbg {
  fill: var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default));
}
.react-flow__edge-text {
  fill: var(--xy-edge-label-color, var(--xy-edge-label-color-default));
}
`;var zf=require("react/jsx-runtime"),bw=["slots"],Pf="imagora";globalThis.__dshImagoraCanvas=Is;function yw({size:e=16}){return(0,zf.jsx)(gs,{size:e})}function xw(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=If,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(Ns(),hf)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Pf},Is)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Pf,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},yw)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

return module.exports}})
