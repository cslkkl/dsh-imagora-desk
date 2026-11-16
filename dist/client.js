window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var Em=Object.create;var To=Object.defineProperty;var _m=Object.getOwnPropertyDescriptor;var Im=Object.getOwnPropertyNames;var Pm=Object.getPrototypeOf,zm=Object.prototype.hasOwnProperty;var Rm=(e,t)=>()=>(e&&(t=e(e=0)),t);var Oo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Cs=(e,t)=>{for(var n in t)To(e,n,{get:t[n],enumerable:!0})},Es=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Im(t))!zm.call(e,r)&&r!==n&&To(e,r,{get:()=>t[r],enumerable:!(o=_m(t,r))||o.enumerable});return e};var _s=(e,t,n)=>(n=e!=null?Em(Pm(e)):{},Es(t||!e||!e.__esModule?To(n,"default",{value:e,enumerable:!0}):n,e)),Dm=e=>Es(To({},"__esModule",{value:!0}),e);var Nc=Oo(Sc=>{"use strict";var Yn=require("react");function Y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Z0=typeof Object.is=="function"?Object.is:Y0,K0=Yn.useState,j0=Yn.useEffect,Q0=Yn.useLayoutEffect,J0=Yn.useDebugValue;function ey(e,t){var n=t(),o=K0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return Q0(function(){r.value=n,r.getSnapshot=t,Pa(r)&&i({inst:r})},[e,n,t]),j0(function(){return Pa(r)&&i({inst:r}),e(function(){Pa(r)&&i({inst:r})})},[e]),J0(n),n}function Pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Z0(e,n)}catch{return!0}}function ty(e,t){return t()}var ny=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ty:ey;Sc.useSyncExternalStore=Yn.useSyncExternalStore!==void 0?Yn.useSyncExternalStore:ny});var Cc=Oo((bk,Mc)=>{"use strict";Mc.exports=Nc()});var _c=Oo(Ec=>{"use strict";var Sr=require("react"),oy=Cc();function ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var iy=typeof Object.is=="function"?Object.is:ry,ay=oy.useSyncExternalStore,sy=Sr.useRef,ly=Sr.useEffect,cy=Sr.useMemo,uy=Sr.useDebugValue;Ec.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=sy(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=cy(function(){function u(p){if(!l){if(l=!0,c=p,p=o(p),r!==void 0&&a.hasValue){var h=a.value;if(r(h,p))return d=h}return d=p}if(h=d,iy(c,p))return h;var b=o(p);return r!==void 0&&r(h,b)?(c=p,h):(c=p,d=b)}var l=!1,c,d,f=n===void 0?null:n;return[function(){return u(t())},f===null?void 0:function(){return u(f())}]},[t,n,o,r]);var s=ay(e,i[0],i[1]);return ly(function(){a.hasValue=!0,a.value=s},[s]),uy(s),s}});var Pc=Oo((xk,Ic)=>{"use strict";Ic.exports=_c()});var Qp={};Cs(Qp,{primitives:()=>s1});function a1(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function s1(){if(ai)return ai;let e=require(jp),t=a1(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${jp}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return ai=t,ai}var jp,ai,Jp=Rm(()=>{"use strict";jp="@deepseek-ai/dsh-client-ui-primitives",ai=null});var f1={};Cs(f1,{apply:()=>d1,inject:()=>l1});module.exports=Dm(f1);var se=require("react");var B=require("react/jsx-runtime"),H=require("react");function Ee(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=Ee(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Am={value:()=>{}};function rn(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Lo(n)}function Lo(e){this._=e}function Tm(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Lo.prototype=rn.prototype={constructor:Lo,on:function(e,t){var n=this._,o=Tm(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=Om(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=Is(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Is(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Lo(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function Om(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Is(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Am,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var wi="http://www.w3.org/1999/xhtml",Ps={svg:"http://www.w3.org/2000/svg",xhtml:wi,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function eo(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Ps.hasOwnProperty(t)?{space:Ps[t],local:e}:e}function Lm(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===wi&&t.documentElement.namespaceURI===wi?t.createElement(e):t.createElementNS(n,e)}}function $m(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function zs(e){var t=eo(e);return(t.local?$m:Lm)(t)}function Hm(){}function Ho(e){return e==null?Hm:function(){return this.querySelector(e)}}function Bm(e){typeof e!="function"&&(e=Ho(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),u,l,c=0;c<a;++c)(u=i[c])&&(l=e.call(u,u.__data__,c,i))&&("__data__"in u&&(l.__data__=u.__data__),s[c]=l);return new Qe(o,this._parents)}function Wm(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Fm(){return[]}function ki(e){return e==null?Fm:function(){return this.querySelectorAll(e)}}function Vm(e){return function(){return Wm(e.apply(this,arguments))}}function Xm(e){typeof e=="function"?e=Vm(e):e=ki(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,u,l=0;l<s;++l)(u=a[l])&&(o.push(e.call(u,u.__data__,l,a)),r.push(u));return new Qe(o,r)}function Si(e){return function(){return this.matches(e)}}function Rs(e){return function(t){return t.matches(e)}}var Gm=Array.prototype.find;function qm(e){return function(){return Gm.call(this.children,e)}}function Um(){return this.firstElementChild}function Ym(e){return this.select(e==null?Um:qm(typeof e=="function"?e:Rs(e)))}var Zm=Array.prototype.filter;function Km(){return Array.from(this.children)}function jm(e){return function(){return Zm.call(this.children,e)}}function Qm(e){return this.selectAll(e==null?Km:jm(typeof e=="function"?e:Rs(e)))}function Jm(e){typeof e!="function"&&(e=Si(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],u,l=0;l<a;++l)(u=i[l])&&e.call(u,u.__data__,l,i)&&s.push(u);return new Qe(o,this._parents)}function Ds(e){return new Array(e.length)}function eg(){return new Qe(this._enter||this._groups.map(Ds),this._parents)}function $o(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}$o.prototype={constructor:$o,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function tg(e){return function(){return e}}function ng(e,t,n,o,r,i){for(var a=0,s,u=t.length,l=i.length;a<l;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new $o(e,i[a]);for(;a<u;++a)(s=t[a])&&(r[a]=s)}function og(e,t,n,o,r,i,a){var s,u,l=new Map,c=t.length,d=i.length,f=new Array(c),p;for(s=0;s<c;++s)(u=t[s])&&(f[s]=p=a.call(u,u.__data__,s,t)+"",l.has(p)?r[s]=u:l.set(p,u));for(s=0;s<d;++s)p=a.call(e,i[s],s,i)+"",(u=l.get(p))?(o[s]=u,u.__data__=i[s],l.delete(p)):n[s]=new $o(e,i[s]);for(s=0;s<c;++s)(u=t[s])&&l.get(f[s])===u&&(r[s]=u)}function rg(e){return e.__data__}function ig(e,t){if(!arguments.length)return Array.from(this,rg);var n=t?og:ng,o=this._parents,r=this._groups;typeof e!="function"&&(e=tg(e));for(var i=r.length,a=new Array(i),s=new Array(i),u=new Array(i),l=0;l<i;++l){var c=o[l],d=r[l],f=d.length,p=ag(e.call(c,c&&c.__data__,l,o)),h=p.length,b=s[l]=new Array(h),y=a[l]=new Array(h),g=u[l]=new Array(f);n(c,d,b,y,g,p,t);for(var w=0,m=0,x,N;w<h;++w)if(x=b[w]){for(w>=m&&(m=w+1);!(N=y[m])&&++m<h;);x._next=N||null}}return a=new Qe(a,o),a._enter=s,a._exit=u,a}function ag(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function sg(){return new Qe(this._exit||this._groups.map(Ds),this._parents)}function lg(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function cg(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),u=0;u<a;++u)for(var l=n[u],c=o[u],d=l.length,f=s[u]=new Array(d),p,h=0;h<d;++h)(p=l[h]||c[h])&&(f[h]=p);for(;u<r;++u)s[u]=n[u];return new Qe(s,this._parents)}function ug(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function dg(e){e||(e=fg);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,u=r[i]=new Array(s),l,c=0;c<s;++c)(l=a[c])&&(u[c]=l);u.sort(t)}return new Qe(r,this._parents).order()}function fg(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function pg(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function mg(){return Array.from(this)}function gg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function hg(){let e=0;for(let t of this)++e;return e}function bg(){return!this.node()}function yg(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function xg(e){return function(){this.removeAttribute(e)}}function wg(e){return function(){this.removeAttributeNS(e.space,e.local)}}function vg(e,t){return function(){this.setAttribute(e,t)}}function kg(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Sg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Ng(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Mg(e,t){var n=eo(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?wg:xg:typeof t=="function"?n.local?Ng:Sg:n.local?kg:vg)(n,t))}function As(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Cg(e){return function(){this.style.removeProperty(e)}}function Eg(e,t,n){return function(){this.style.setProperty(e,t,n)}}function _g(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Ig(e,t,n){return arguments.length>1?this.each((t==null?Cg:typeof t=="function"?_g:Eg)(e,t,n??"")):an(this.node(),e)}function an(e,t){return e.style.getPropertyValue(t)||As(e).getComputedStyle(e,null).getPropertyValue(t)}function Pg(e){return function(){delete this[e]}}function zg(e,t){return function(){this[e]=t}}function Rg(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Dg(e,t){return arguments.length>1?this.each((t==null?Pg:typeof t=="function"?Rg:zg)(e,t)):this.node()[e]}function Ts(e){return e.trim().split(/^|\s+/)}function Ni(e){return e.classList||new Os(e)}function Os(e){this._node=e,this._names=Ts(e.getAttribute("class")||"")}Os.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Ls(e,t){for(var n=Ni(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function $s(e,t){for(var n=Ni(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Ag(e){return function(){Ls(this,e)}}function Tg(e){return function(){$s(this,e)}}function Og(e,t){return function(){(t.apply(this,arguments)?Ls:$s)(this,e)}}function Lg(e,t){var n=Ts(e+"");if(arguments.length<2){for(var o=Ni(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?Og:t?Ag:Tg)(n,t))}function $g(){this.textContent=""}function Hg(e){return function(){this.textContent=e}}function Bg(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Wg(e){return arguments.length?this.each(e==null?$g:(typeof e=="function"?Bg:Hg)(e)):this.node().textContent}function Fg(){this.innerHTML=""}function Vg(e){return function(){this.innerHTML=e}}function Xg(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Gg(e){return arguments.length?this.each(e==null?Fg:(typeof e=="function"?Xg:Vg)(e)):this.node().innerHTML}function qg(){this.nextSibling&&this.parentNode.appendChild(this)}function Ug(){return this.each(qg)}function Yg(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Zg(){return this.each(Yg)}function Kg(e){var t=typeof e=="function"?e:zs(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function jg(){return null}function Qg(e,t){var n=typeof e=="function"?e:zs(e),o=t==null?jg:typeof t=="function"?t:Ho(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Jg(){var e=this.parentNode;e&&e.removeChild(this)}function eh(){return this.each(Jg)}function th(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function nh(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function oh(e){return this.select(e?nh:th)}function rh(e){return arguments.length?this.property("__data__",e):this.node().__data__}function ih(e){return function(t){e.call(this,t,this.__data__)}}function ah(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function sh(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function lh(e,t,n){return function(){var o=this.__on,r,i=ih(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function ch(e,t,n){var o=ah(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var u=0,l=s.length,c;u<l;++u)for(r=0,c=s[u];r<i;++r)if((a=o[r]).type===c.type&&a.name===c.name)return c.value}return}for(s=t?lh:sh,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function Hs(e,t,n){var o=As(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function uh(e,t){return function(){return Hs(this,e,t)}}function dh(e,t){return function(){return Hs(this,e,t.apply(this,arguments))}}function fh(e,t){return this.each((typeof t=="function"?dh:uh)(e,t))}function*ph(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var Bs=[null];function Qe(e,t){this._groups=e,this._parents=t}function sn(){return new Qe([[document.documentElement]],Bs)}function mh(){return this}Qe.prototype=sn.prototype={constructor:Qe,select:Bm,selectAll:Xm,selectChild:Ym,selectChildren:Qm,filter:Jm,data:ig,enter:eg,exit:sg,join:lg,merge:cg,selection:mh,order:ug,sort:dg,call:pg,nodes:mg,node:gg,size:hg,empty:bg,each:yg,attr:Mg,style:Ig,property:Dg,classed:Lg,text:Wg,html:Gg,raise:Ug,lower:Zg,append:Kg,insert:Qg,remove:eh,clone:oh,datum:rh,on:ch,dispatch:fh,[Symbol.iterator]:ph};function $e(e){return typeof e=="string"?new Qe([[document.querySelector(e)]],[document.documentElement]):new Qe([[e]],Bs)}var gh=0;function hh(){return new vi}function vi(){this._="@"+(++gh).toString(36)}vi.prototype=hh.prototype={constructor:vi,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function bh(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ue(e,t){if(e=bh(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var yh={passive:!1},to={capture:!0,passive:!1};function Mi(e){e.stopImmediatePropagation()}function In(e){e.preventDefault(),e.stopImmediatePropagation()}function Ei(e){var t=e.document.documentElement,n=$e(e).on("dragstart.drag",In,to);"onselectstart"in t?n.on("selectstart.drag",In,to):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function _i(e,t){var n=e.document.documentElement,o=$e(e).on("dragstart.drag",null);t&&(o.on("click.drag",In,to),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Bo=e=>()=>e;function Ci(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:u,dy:l,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:u,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:c}})}Ci.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function xh(e){return!e.ctrlKey&&!e.button}function wh(){return this.parentNode}function vh(e,t){return t??{x:e.x,y:e.y}}function kh(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ii(){var e=xh,t=wh,n=vh,o=kh,r={},i=rn("start","drag","end"),a=0,s,u,l,c,d=0;function f(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",g,yh).on("touchend.drag touchcancel.drag",w).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,N){if(!(c||!e.call(this,x,N))){var S=m(this,t.call(this,x,N),x,N,"mouse");S&&($e(x.view).on("mousemove.drag",h,to).on("mouseup.drag",b,to),Ei(x.view),Mi(x),l=!1,s=x.clientX,u=x.clientY,S("start",x))}}function h(x){if(In(x),!l){var N=x.clientX-s,S=x.clientY-u;l=N*N+S*S>d}r.mouse("drag",x)}function b(x){$e(x.view).on("mousemove.drag mouseup.drag",null),_i(x.view,l),In(x),r.mouse("end",x)}function y(x,N){if(e.call(this,x,N)){var S=x.changedTouches,k=t.call(this,x,N),C=S.length,P,L;for(P=0;P<C;++P)(L=m(this,k,x,N,S[P].identifier,S[P]))&&(Mi(x),L("start",x,S[P]))}}function g(x){var N=x.changedTouches,S=N.length,k,C;for(k=0;k<S;++k)(C=r[N[k].identifier])&&(In(x),C("drag",x,N[k]))}function w(x){var N=x.changedTouches,S=N.length,k,C;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),k=0;k<S;++k)(C=r[N[k].identifier])&&(Mi(x),C("end",x,N[k]))}function m(x,N,S,k,C,P){var L=i.copy(),D=Ue(P||S,N),A,_,v;if((v=n.call(x,new Ci("beforestart",{sourceEvent:S,target:f,identifier:C,active:a,x:D[0],y:D[1],dx:0,dy:0,dispatch:L}),k))!=null)return A=v.x-D[0]||0,_=v.y-D[1]||0,function I(E,M,z){var T=D,V;switch(E){case"start":r[C]=I,V=a++;break;case"end":delete r[C],--a;case"drag":D=Ue(z||M,N),V=a;break}L.call(E,x,new Ci(E,{sourceEvent:M,subject:v,target:f,identifier:C,active:V,x:D[0]+A,y:D[1]+_,dx:D[0]-T[0],dy:D[1]-T[1],dispatch:L}),k)}}return f.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Bo(!!x),f):e},f.container=function(x){return arguments.length?(t=typeof x=="function"?x:Bo(x),f):t},f.subject=function(x){return arguments.length?(n=typeof x=="function"?x:Bo(x),f):n},f.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:Bo(!!x),f):o},f.on=function(){var x=i.on.apply(i,arguments);return x===i?f:x},f.clickDistance=function(x){return arguments.length?(d=(x=+x)*x,f):Math.sqrt(d)},f}function Dn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function ro(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Bt(){}var dn=.7,Rn=1/dn,Pn="\\s*([+-]?\\d+)\\s*",no="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Sh=/^#([0-9a-f]{3,8})$/,Nh=new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),Mh=new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`),Ch=new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${no}\\)$`),Eh=new RegExp(`^rgba\\(${pt},${pt},${pt},${no}\\)$`),_h=new RegExp(`^hsl\\(${no},${pt},${pt}\\)$`),Ih=new RegExp(`^hsla\\(${no},${pt},${pt},${no}\\)$`),Ws={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dn(Bt,zt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Fs,formatHex:Fs,formatHex8:Ph,formatHsl:zh,formatRgb:Vs,toString:Vs});function Fs(){return this.rgb().formatHex()}function Ph(){return this.rgb().formatHex8()}function zh(){return Qs(this).formatHsl()}function Vs(){return this.rgb().formatRgb()}function zt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Sh.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Xs(t):n===3?new Oe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Wo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Wo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Nh.exec(e))?new Oe(t[1],t[2],t[3],1):(t=Mh.exec(e))?new Oe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Ch.exec(e))?Wo(t[1],t[2],t[3],t[4]):(t=Eh.exec(e))?Wo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=_h.exec(e))?Us(t[1],t[2]/100,t[3]/100,1):(t=Ih.exec(e))?Us(t[1],t[2]/100,t[3]/100,t[4]):Ws.hasOwnProperty(e)?Xs(Ws[e]):e==="transparent"?new Oe(NaN,NaN,NaN,0):null}function Xs(e){return new Oe(e>>16&255,e>>8&255,e&255,1)}function Wo(e,t,n,o){return o<=0&&(e=t=n=NaN),new Oe(e,t,n,o)}function Ti(e){return e instanceof Bt||(e=zt(e)),e?(e=e.rgb(),new Oe(e.r,e.g,e.b,e.opacity)):new Oe}function io(e,t,n,o){return arguments.length===1?Ti(e):new Oe(e,t,n,o??1)}function Oe(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Dn(Oe,io,ro(Bt,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?dn:Math.pow(dn,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Oe(cn(this.r),cn(this.g),cn(this.b),Vo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Gs,formatHex:Gs,formatHex8:Rh,formatRgb:qs,toString:qs}));function Gs(){return`#${ln(this.r)}${ln(this.g)}${ln(this.b)}`}function Rh(){return`#${ln(this.r)}${ln(this.g)}${ln(this.b)}${ln((isNaN(this.opacity)?1:this.opacity)*255)}`}function qs(){let e=Vo(this.opacity);return`${e===1?"rgb(":"rgba("}${cn(this.r)}, ${cn(this.g)}, ${cn(this.b)}${e===1?")":`, ${e})`}`}function Vo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function cn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ln(e){return e=cn(e),(e<16?"0":"")+e.toString(16)}function Us(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new lt(e,t,n,o)}function Qs(e){if(e instanceof lt)return new lt(e.h,e.s,e.l,e.opacity);if(e instanceof Bt||(e=zt(e)),!e)return new lt;if(e instanceof lt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,u=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=u<.5?i+r:2-i-r,a*=60):s=u>0&&u<1?0:a,new lt(a,s,u,e.opacity)}function Go(e,t,n,o){return arguments.length===1?Qs(e):new lt(e,t,n,o??1)}function lt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(lt,Go,ro(Bt,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new lt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?dn:Math.pow(dn,e),new lt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Oe(Pi(e>=240?e-240:e+120,r,o),Pi(e,r,o),Pi(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new lt(Ys(this.h),Fo(this.s),Fo(this.l),Vo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Vo(this.opacity);return`${e===1?"hsl(":"hsla("}${Ys(this.h)}, ${Fo(this.s)*100}%, ${Fo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Ys(e){return e=(e||0)%360,e<0?e+360:e}function Fo(e){return Math.max(0,Math.min(1,e||0))}function Pi(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Js=Math.PI/180,el=180/Math.PI,Xo=18,tl=.96422,nl=1,ol=.82521,rl=4/29,zn=6/29,il=3*zn*zn,Dh=zn*zn*zn;function al(e){if(e instanceof mt)return new mt(e.l,e.a,e.b,e.opacity);if(e instanceof Pt)return ll(e);e instanceof Oe||(e=Ti(e));var t=Ai(e.r),n=Ai(e.g),o=Ai(e.b),r=zi((.2225045*t+.7168786*n+.0606169*o)/nl),i,a;return t===n&&n===o?i=a=r:(i=zi((.4360747*t+.3850649*n+.1430804*o)/tl),a=zi((.0139322*t+.0971045*n+.7141733*o)/ol)),new mt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function sl(e,t,n,o){return arguments.length===1?al(e):new mt(e,t,n,o??1)}function mt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Dn(mt,sl,ro(Bt,{brighter(e){return new mt(this.l+Xo*(e??1),this.a,this.b,this.opacity)},darker(e){return new mt(this.l-Xo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=tl*Ri(t),e=nl*Ri(e),n=ol*Ri(n),new Oe(Di(3.1338561*t-1.6168667*e-.4906146*n),Di(-.9787684*t+1.9161415*e+.033454*n),Di(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function zi(e){return e>Dh?Math.pow(e,1/3):e/il+rl}function Ri(e){return e>zn?e*e*e:il*(e-rl)}function Di(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ai(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ah(e){if(e instanceof Pt)return new Pt(e.h,e.c,e.l,e.opacity);if(e instanceof mt||(e=al(e)),e.a===0&&e.b===0)return new Pt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*el;return new Pt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function qo(e,t,n,o){return arguments.length===1?Ah(e):new Pt(e,t,n,o??1)}function Pt(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function ll(e){if(isNaN(e.h))return new mt(e.l,0,0,e.opacity);var t=e.h*Js;return new mt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Dn(Pt,qo,ro(Bt,{brighter(e){return new Pt(this.h,this.c,this.l+Xo*(e??1),this.opacity)},darker(e){return new Pt(this.h,this.c,this.l-Xo*(e??1),this.opacity)},rgb(){return ll(this).rgb()}}));var cl=-.14861,Oi=1.78277,Li=-.29227,Uo=-.90649,oo=1.97294,Zs=oo*Uo,Ks=oo*Oi,js=Oi*Li-Uo*cl;function Th(e){if(e instanceof un)return new un(e.h,e.s,e.l,e.opacity);e instanceof Oe||(e=Ti(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(js*o+Zs*t-Ks*n)/(js+Zs-Ks),i=o-r,a=(oo*(n-r)-Li*i)/Uo,s=Math.sqrt(a*a+i*i)/(oo*r*(1-r)),u=s?Math.atan2(a,i)*el-120:NaN;return new un(u<0?u+360:u,s,r,e.opacity)}function Yo(e,t,n,o){return arguments.length===1?Th(e):new un(e,t,n,o??1)}function un(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(un,Yo,ro(Bt,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new un(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?dn:Math.pow(dn,e),new un(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*Js,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Oe(255*(t+n*(cl*o+Oi*r)),255*(t+n*(Li*o+Uo*r)),255*(t+n*(oo*o)),this.opacity)}}));function fl(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function Oh(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return fl((n-o/t)*t,a,r,i,s)}}function Lh(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return fl((n-o/t)*t,r,i,a,s)}}var Ko=e=>()=>e;function pl(e,t){return function(n){return e+n*t}}function $h(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function Wi(e,t){var n=t-e;return n?pl(e,n>180||n<-180?n-360*Math.round(n/360):n):Ko(isNaN(e)?t:e)}function Hh(e){return(e=+e)==1?Ye:function(t,n){return n-t?$h(t,n,e):Ko(isNaN(t)?n:t)}}function Ye(e,t){var n=t-e;return n?pl(e,n):Ko(isNaN(e)?t:e)}var ao=(function e(t){var n=Hh(t);function o(r,i){var a=n((r=io(r)).r,(i=io(i)).r),s=n(r.g,i.g),u=n(r.b,i.b),l=Ye(r.opacity,i.opacity);return function(c){return r.r=a(c),r.g=s(c),r.b=u(c),r.opacity=l(c),r+""}}return o.gamma=e,o})(1);function ml(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=io(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(u){return s.r=o(u),s.g=r(u),s.b=i(u),s+""}}}var k1=ml(Oh),S1=ml(Lh);function Bh(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Wh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fh(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=An(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function Vh(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ct(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Xh(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=An(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var Hi=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,$i=new RegExp(Hi.source,"g");function Gh(e){return function(){return e}}function qh(e){return function(t){return e(t)+""}}function Fi(e,t){var n=Hi.lastIndex=$i.lastIndex=0,o,r,i,a=-1,s=[],u=[];for(e=e+"",t=t+"";(o=Hi.exec(e))&&(r=$i.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,u.push({i:a,x:ct(o,r)})),n=$i.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?u[0]?qh(u[0].x):Gh(t):(t=u.length,function(l){for(var c=0,d;c<t;++c)s[(d=u[c]).i]=d.x(l);return s.join("")})}function An(e,t){var n=typeof t,o;return t==null||n==="boolean"?Ko(t):(n==="number"?ct:n==="string"?(o=zt(t))?(t=o,ao):Fi:t instanceof zt?ao:t instanceof Date?Vh:Wh(t)?Bh:Array.isArray(t)?Fh:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Xh:ct)(e,t)}var ul=180/Math.PI,Bi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function gl(e,t,n,o,r,i){var a,s,u;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(u=e*n+t*o)&&(n-=e*u,o-=t*u),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,u/=s),e*o<t*n&&(e=-e,t=-t,u=-u,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*ul,skewX:Math.atan(u)*ul,scaleX:a,scaleY:s}}var Zo;function Uh(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Bi:gl(t.a,t.b,t.c,t.d,t.e,t.f)}function Yh(e){return e==null||(Zo||(Zo=document.createElementNS("http://www.w3.org/2000/svg","g")),Zo.setAttribute("transform",e),!(e=Zo.transform.baseVal.consolidate()))?Bi:(e=e.matrix,gl(e.a,e.b,e.c,e.d,e.e,e.f))}function hl(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,c,d,f,p,h){if(l!==d||c!==f){var b=p.push("translate(",null,t,null,n);h.push({i:b-4,x:ct(l,d)},{i:b-2,x:ct(c,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function a(l,c,d,f){l!==c?(l-c>180?c+=360:c-l>180&&(l+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:ct(l,c)})):c&&d.push(r(d)+"rotate("+c+o)}function s(l,c,d,f){l!==c?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:ct(l,c)}):c&&d.push(r(d)+"skewX("+c+o)}function u(l,c,d,f,p,h){if(l!==d||c!==f){var b=p.push(r(p)+"scale(",null,",",null,")");h.push({i:b-4,x:ct(l,d)},{i:b-2,x:ct(c,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(l,c){var d=[],f=[];return l=e(l),c=e(c),i(l.translateX,l.translateY,c.translateX,c.translateY,d,f),a(l.rotate,c.rotate,d,f),s(l.skewX,c.skewX,d,f),u(l.scaleX,l.scaleY,c.scaleX,c.scaleY,d,f),l=c=null,function(p){for(var h=-1,b=f.length,y;++h<b;)d[(y=f[h]).i]=y.x(p);return d.join("")}}}var bl=hl(Uh,"px, ","px)","deg)"),yl=hl(Yh,", ",")",")"),Zh=1e-12;function dl(e){return((e=Math.exp(e))+1/e)/2}function Kh(e){return((e=Math.exp(e))-1/e)/2}function jh(e){return((e=Math.exp(2*e))-1)/(e+1)}var Tn=(function e(t,n,o){function r(i,a){var s=i[0],u=i[1],l=i[2],c=a[0],d=a[1],f=a[2],p=c-s,h=d-u,b=p*p+h*h,y,g;if(b<Zh)g=Math.log(f/l)/t,y=function(k){return[s+k*p,u+k*h,l*Math.exp(t*k*g)]};else{var w=Math.sqrt(b),m=(f*f-l*l+o*b)/(2*l*n*w),x=(f*f-l*l-o*b)/(2*f*n*w),N=Math.log(Math.sqrt(m*m+1)-m),S=Math.log(Math.sqrt(x*x+1)-x);g=(S-N)/t,y=function(k){var C=k*g,P=dl(N),L=l/(n*w)*(P*jh(t*C+N)-Kh(N));return[s+L*p,u+L*h,l*P/dl(t*C+N)]}}return y.duration=Math.abs(g)*1e3*t/Math.SQRT2,y}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,u=s*s;return e(a,s,u)},r})(Math.SQRT2,2,4);function xl(e){return function(t,n){var o=e((t=Go(t)).h,(n=Go(n)).h),r=Ye(t.s,n.s),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var N1=xl(Wi),M1=xl(Ye);function wl(e){return function(t,n){var o=e((t=qo(t)).h,(n=qo(n)).h),r=Ye(t.c,n.c),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var C1=wl(Wi),E1=wl(Ye);function vl(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Yo(r)).h,(i=Yo(i)).h),s=Ye(r.s,i.s),u=Ye(r.l,i.l),l=Ye(r.opacity,i.opacity);return function(c){return r.h=a(c),r.s=s(c),r.l=u(Math.pow(c,n)),r.opacity=l(c),r+""}}return o.gamma=t,o})(1)}var _1=vl(Wi),I1=vl(Ye);var On=0,lo=0,so=0,Sl=1e3,jo,co,Qo=0,fn=0,er=0,uo=typeof performance=="object"&&performance.now?performance:Date,Nl=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function tr(){return fn||(Nl(Qh),fn=uo.now()+er)}function Qh(){fn=0}function Jo(){this._call=this._time=this._next=null}Jo.prototype=Xi.prototype={constructor:Jo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?tr():+n)+(t==null?0:+t),!this._next&&co!==this&&(co?co._next=this:jo=this,co=this),this._call=e,this._time=n,Vi()},stop:function(){this._call&&(this._call=null,this._time=1/0,Vi())}};function Xi(e,t,n){var o=new Jo;return o.restart(e,t,n),o}function Jh(){tr(),++On;for(var e=jo,t;e;)(t=fn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--On}function kl(){fn=(Qo=uo.now())+er,On=lo=0;try{Jh()}finally{On=0,tb(),fn=0}}function eb(){var e=uo.now(),t=e-Qo;t>Sl&&(er-=t,Qo=e)}function tb(){for(var e,t=jo,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:jo=n);co=e,Vi(o)}function Vi(e){if(!On){lo&&(lo=clearTimeout(lo));var t=e-fn;t>24?(e<1/0&&(lo=setTimeout(kl,Math.ceil(e-uo.now()-er)+1)),so&&(so=clearInterval(so))):(so||(Qo=uo.now(),so=setInterval(eb,Sl)),On=1,Nl(kl))}}function Gi(e,t,n){var o=new Jo;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function Cl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var qi=3,R1=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(qi),D1=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(qi),A1=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(qi),nb=Math.PI,T1=nb/2;function nr(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Ml=4/11,O1=6/11,L1=8/11,$1=3/4,H1=9/11,B1=10/11,W1=15/16,F1=21/22,V1=63/64,X1=1/Ml/Ml;var Ui=1.70158,G1=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(Ui),q1=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(Ui),U1=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(Ui),Ln=2*Math.PI,Yi=1,Zi=.3,Y1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return t*nr(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Yi,Zi),Z1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return 1-t*nr(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Yi,Zi),K1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return((i=i*2-1)<0?t*nr(-i)*Math.sin((o-i)/n):2-t*nr(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Yi,Zi);var ob=rn("start","end","cancel","interrupt"),rb=[],Il=0,El=1,Ki=2,or=3,_l=4,ji=5,rr=6;function ir(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;ib(e,n,{name:t,index:o,group:r,on:ob,tween:rb,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Il})}function Qi(e,t){var n=ut(e,t);if(n.state>Il)throw new Error("too late; already scheduled");return n}function gt(e,t){var n=ut(e,t);if(n.state>or)throw new Error("too late; already running");return n}function ut(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function ib(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=Xi(i,0,n.time);function i(l){n.state=El,n.timer.restart(a,n.delay,n.time),n.delay<=l&&a(l-n.delay)}function a(l){var c,d,f,p;if(n.state!==El)return u();for(c in o)if(p=o[c],p.name===n.name){if(p.state===or)return Gi(a);p.state===_l?(p.state=rr,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[c]):+c<t&&(p.state=rr,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[c])}if(Gi(function(){n.state===or&&(n.state=_l,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=Ki,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Ki){for(n.state=or,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(p=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function s(l){for(var c=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(u),n.state=ji,1),d=-1,f=r.length;++d<f;)r[d].call(e,c);n.state===ji&&(n.on.call("end",e,e.__data__,n.index,n.group),u())}function u(){n.state=rr,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function fo(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>Ki&&o.state<ji,o.state=rr,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function ab(e){return this.each(function(){fo(this,e)})}function sb(e,t){var n,o;return function(){var r=gt(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function lb(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=gt(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},u=0,l=r.length;u<l;++u)if(r[u].name===t){r[u]=s;break}u===l&&r.push(s)}i.tween=r}}function cb(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ut(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?sb:lb)(n,e,t))}function Ji(e,t,n){var o=e._id;return e.each(function(){var r=gt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ut(r,o).value[t]}}function Pl(e,t){var n;return(typeof t=="number"?ct:t instanceof zt?ao:(n=zt(t))?(t=n,ao):Fi)(e,t)}function ub(e){return function(){this.removeAttribute(e)}}function db(e){return function(){this.removeAttributeNS(e.space,e.local)}}function fb(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function pb(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function mb(e,t,n){var o,r,i;return function(){var a,s=n(this),u;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),u=s+"",a===u?null:a===o&&u===r?i:(r=u,i=t(o=a,s)))}}function gb(e,t,n){var o,r,i;return function(){var a,s=n(this),u;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),u=s+"",a===u?null:a===o&&u===r?i:(r=u,i=t(o=a,s)))}}function hb(e,t){var n=eo(e),o=n==="transform"?yl:Pl;return this.attrTween(e,typeof t=="function"?(n.local?gb:mb)(n,o,Ji(this,"attr."+e,t)):t==null?(n.local?db:ub)(n):(n.local?pb:fb)(n,o,t))}function bb(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function yb(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function xb(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&yb(e,i)),n}return r._value=t,r}function wb(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&bb(e,i)),n}return r._value=t,r}function vb(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=eo(e);return this.tween(n,(o.local?xb:wb)(o,t))}function kb(e,t){return function(){Qi(this,e).delay=+t.apply(this,arguments)}}function Sb(e,t){return t=+t,function(){Qi(this,e).delay=t}}function Nb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?kb:Sb)(t,e)):ut(this.node(),t).delay}function Mb(e,t){return function(){gt(this,e).duration=+t.apply(this,arguments)}}function Cb(e,t){return t=+t,function(){gt(this,e).duration=t}}function Eb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Mb:Cb)(t,e)):ut(this.node(),t).duration}function _b(e,t){if(typeof t!="function")throw new Error;return function(){gt(this,e).ease=t}}function Ib(e){var t=this._id;return arguments.length?this.each(_b(t,e)):ut(this.node(),t).ease}function Pb(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;gt(this,e).ease=n}}function zb(e){if(typeof e!="function")throw new Error;return this.each(Pb(this._id,e))}function Rb(e){typeof e!="function"&&(e=Si(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],u,l=0;l<a;++l)(u=i[l])&&e.call(u,u.__data__,l,i)&&s.push(u);return new Dt(o,this._parents,this._name,this._id)}function Db(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var u=t[s],l=n[s],c=u.length,d=a[s]=new Array(c),f,p=0;p<c;++p)(f=u[p]||l[p])&&(d[p]=f);for(;s<o;++s)a[s]=t[s];return new Dt(a,this._parents,this._name,this._id)}function Ab(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Tb(e,t,n){var o,r,i=Ab(t)?Qi:gt;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function Ob(e,t){var n=this._id;return arguments.length<2?ut(this.node(),n).on.on(e):this.each(Tb(n,e,t))}function Lb(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function $b(){return this.on("end.remove",Lb(this._id))}function Hb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Ho(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],u=s.length,l=i[a]=new Array(u),c,d,f=0;f<u;++f)(c=s[f])&&(d=e.call(c,c.__data__,f,s))&&("__data__"in c&&(d.__data__=c.__data__),l[f]=d,ir(l[f],t,n,f,l,ut(c,n)));return new Dt(i,this._parents,t,n)}function Bb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=ki(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var u=o[s],l=u.length,c,d=0;d<l;++d)if(c=u[d]){for(var f=e.call(c,c.__data__,d,u),p,h=ut(c,n),b=0,y=f.length;b<y;++b)(p=f[b])&&ir(p,t,n,b,f,h);i.push(f),a.push(c)}return new Dt(i,a,t,n)}var Wb=sn.prototype.constructor;function Fb(){return new Wb(this._groups,this._parents)}function Vb(e,t){var n,o,r;return function(){var i=an(this,e),a=(this.style.removeProperty(e),an(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function zl(e){return function(){this.style.removeProperty(e)}}function Xb(e,t,n){var o,r=n+"",i;return function(){var a=an(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function Gb(e,t,n){var o,r,i;return function(){var a=an(this,e),s=n(this),u=s+"";return s==null&&(u=s=(this.style.removeProperty(e),an(this,e))),a===u?null:a===o&&u===r?i:(r=u,i=t(o=a,s))}}function qb(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var u=gt(this,e),l=u.on,c=u.value[i]==null?s||(s=zl(t)):void 0;(l!==n||r!==c)&&(o=(n=l).copy()).on(a,r=c),u.on=o}}function Ub(e,t,n){var o=(e+="")=="transform"?bl:Pl;return t==null?this.styleTween(e,Vb(e,o)).on("end.style."+e,zl(e)):typeof t=="function"?this.styleTween(e,Gb(e,o,Ji(this,"style."+e,t))).each(qb(this._id,e)):this.styleTween(e,Xb(e,o,t),n).on("end.style."+e,null)}function Yb(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Zb(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&Yb(e,a,n)),o}return i._value=t,i}function Kb(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Zb(e,t,n??""))}function jb(e){return function(){this.textContent=e}}function Qb(e){return function(){var t=e(this);this.textContent=t??""}}function Jb(e){return this.tween("text",typeof e=="function"?Qb(Ji(this,"text",e)):jb(e==null?"":e+""))}function e0(e){return function(t){this.textContent=e.call(this,t)}}function t0(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&e0(r)),t}return o._value=e,o}function n0(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,t0(e))}function o0(){for(var e=this._name,t=this._id,n=Rl(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,u,l=0;l<s;++l)if(u=a[l]){var c=ut(u,t);ir(u,e,n,l,a,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Dt(o,this._parents,e,n)}function r0(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},u={value:function(){--r===0&&i()}};n.each(function(){var l=gt(this,o),c=l.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(u)),l.on=t}),r===0&&i()})}var i0=0;function Dt(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function a0(e){return sn().transition(e)}function Rl(){return++i0}var Rt=sn.prototype;Dt.prototype=a0.prototype={constructor:Dt,select:Hb,selectAll:Bb,selectChild:Rt.selectChild,selectChildren:Rt.selectChildren,filter:Rb,merge:Db,selection:Fb,transition:o0,call:Rt.call,nodes:Rt.nodes,node:Rt.node,size:Rt.size,empty:Rt.empty,each:Rt.each,on:Ob,attr:hb,attrTween:vb,style:Ub,styleTween:Kb,text:Jb,textTween:n0,remove:$b,tween:cb,delay:Nb,duration:Eb,ease:Ib,easeVarying:zb,end:r0,[Symbol.iterator]:Rt[Symbol.iterator]};var s0={time:null,delay:0,duration:250,ease:Cl};function l0(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function c0(e){var t,n;e instanceof Dt?(t=e._id,e=e._name):(t=Rl(),(n=s0).time=tr(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,u,l=0;l<s;++l)(u=a[l])&&ir(u,e,t,l,a,n||l0(u,t));return new Dt(o,this._parents,e,t)}sn.prototype.interrupt=ab;sn.prototype.transition=c0;var ar=e=>()=>e;function u0(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function At(e,t,n){this.k=e,this.x=t,this.y=n}At.prototype={constructor:At,scale:function(e){return e===1?this:new At(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new At(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var mo=new At(1,0,0);ta.prototype=At.prototype;function ta(e){for(;!e.__zoom;)if(!(e=e.parentNode))return mo;return e.__zoom}function ea(e){e.stopImmediatePropagation()}function po(e){e.preventDefault(),e.stopImmediatePropagation()}function d0(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function f0(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Dl(){return this.__zoom||mo}function p0(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function m0(){return navigator.maxTouchPoints||"ontouchstart"in this}function g0(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function na(){var e=d0,t=f0,n=g0,o=p0,r=m0,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,u=Tn,l=rn("start","zoom","end"),c,d,f,p=500,h=150,b=0,y=10;function g(v){v.property("__zoom",Dl).on("wheel.zoom",C,{passive:!1}).on("mousedown.zoom",P).on("dblclick.zoom",L).filter(r).on("touchstart.zoom",D).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",_).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(v,I,E,M){var z=v.selection?v.selection():v;z.property("__zoom",Dl),v!==z?N(v,I,E,M):z.interrupt().each(function(){S(this,arguments).event(M).start().zoom(null,typeof I=="function"?I.apply(this,arguments):I).end()})},g.scaleBy=function(v,I,E,M){g.scaleTo(v,function(){var z=this.__zoom.k,T=typeof I=="function"?I.apply(this,arguments):I;return z*T},E,M)},g.scaleTo=function(v,I,E,M){g.transform(v,function(){var z=t.apply(this,arguments),T=this.__zoom,V=E==null?x(z):typeof E=="function"?E.apply(this,arguments):E,W=T.invert(V),R=typeof I=="function"?I.apply(this,arguments):I;return n(m(w(T,R),V,W),z,a)},E,M)},g.translateBy=function(v,I,E,M){g.transform(v,function(){return n(this.__zoom.translate(typeof I=="function"?I.apply(this,arguments):I,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),a)},null,M)},g.translateTo=function(v,I,E,M,z){g.transform(v,function(){var T=t.apply(this,arguments),V=this.__zoom,W=M==null?x(T):typeof M=="function"?M.apply(this,arguments):M;return n(mo.translate(W[0],W[1]).scale(V.k).translate(typeof I=="function"?-I.apply(this,arguments):-I,typeof E=="function"?-E.apply(this,arguments):-E),T,a)},M,z)};function w(v,I){return I=Math.max(i[0],Math.min(i[1],I)),I===v.k?v:new At(I,v.x,v.y)}function m(v,I,E){var M=I[0]-E[0]*v.k,z=I[1]-E[1]*v.k;return M===v.x&&z===v.y?v:new At(v.k,M,z)}function x(v){return[(+v[0][0]+ +v[1][0])/2,(+v[0][1]+ +v[1][1])/2]}function N(v,I,E,M){v.on("start.zoom",function(){S(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(M).end()}).tween("zoom",function(){var z=this,T=arguments,V=S(z,T).event(M),W=t.apply(z,T),R=E==null?x(W):typeof E=="function"?E.apply(z,T):E,U=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),X=z.__zoom,Z=typeof I=="function"?I.apply(z,T):I,ce=u(X.invert(R).concat(U/X.k),Z.invert(R).concat(U/Z.k));return function(F){if(F===1)F=Z;else{var $=ce(F),Y=U/$[2];F=new At(Y,R[0]-$[0]*Y,R[1]-$[1]*Y)}V.zoom(null,F)}})}function S(v,I,E){return!E&&v.__zooming||new k(v,I)}function k(v,I){this.that=v,this.args=I,this.active=0,this.sourceEvent=null,this.extent=t.apply(v,I),this.taps=0}k.prototype={event:function(v){return v&&(this.sourceEvent=v),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(v,I){return this.mouse&&v!=="mouse"&&(this.mouse[1]=I.invert(this.mouse[0])),this.touch0&&v!=="touch"&&(this.touch0[1]=I.invert(this.touch0[0])),this.touch1&&v!=="touch"&&(this.touch1[1]=I.invert(this.touch1[0])),this.that.__zoom=I,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(v){var I=$e(this.that).datum();l.call(v,this.that,new u0(v,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:l}),I)}};function C(v,...I){if(!e.apply(this,arguments))return;var E=S(this,I).event(v),M=this.__zoom,z=Math.max(i[0],Math.min(i[1],M.k*Math.pow(2,o.apply(this,arguments)))),T=Ue(v);if(E.wheel)(E.mouse[0][0]!==T[0]||E.mouse[0][1]!==T[1])&&(E.mouse[1]=M.invert(E.mouse[0]=T)),clearTimeout(E.wheel);else{if(M.k===z)return;E.mouse=[T,M.invert(T)],fo(this),E.start()}po(v),E.wheel=setTimeout(V,h),E.zoom("mouse",n(m(w(M,z),E.mouse[0],E.mouse[1]),E.extent,a));function V(){E.wheel=null,E.end()}}function P(v,...I){if(f||!e.apply(this,arguments))return;var E=v.currentTarget,M=S(this,I,!0).event(v),z=$e(v.view).on("mousemove.zoom",R,!0).on("mouseup.zoom",U,!0),T=Ue(v,E),V=v.clientX,W=v.clientY;Ei(v.view),ea(v),M.mouse=[T,this.__zoom.invert(T)],fo(this),M.start();function R(X){if(po(X),!M.moved){var Z=X.clientX-V,ce=X.clientY-W;M.moved=Z*Z+ce*ce>b}M.event(X).zoom("mouse",n(m(M.that.__zoom,M.mouse[0]=Ue(X,E),M.mouse[1]),M.extent,a))}function U(X){z.on("mousemove.zoom mouseup.zoom",null),_i(X.view,M.moved),po(X),M.event(X).end()}}function L(v,...I){if(e.apply(this,arguments)){var E=this.__zoom,M=Ue(v.changedTouches?v.changedTouches[0]:v,this),z=E.invert(M),T=E.k*(v.shiftKey?.5:2),V=n(m(w(E,T),M,z),t.apply(this,I),a);po(v),s>0?$e(this).transition().duration(s).call(N,V,M,v):$e(this).call(g.transform,V,M,v)}}function D(v,...I){if(e.apply(this,arguments)){var E=v.touches,M=E.length,z=S(this,I,v.changedTouches.length===M).event(v),T,V,W,R;for(ea(v),V=0;V<M;++V)W=E[V],R=Ue(W,this),R=[R,this.__zoom.invert(R),W.identifier],z.touch0?!z.touch1&&z.touch0[2]!==R[2]&&(z.touch1=R,z.taps=0):(z.touch0=R,T=!0,z.taps=1+!!c);c&&(c=clearTimeout(c)),T&&(z.taps<2&&(d=R[0],c=setTimeout(function(){c=null},p)),fo(this),z.start())}}function A(v,...I){if(this.__zooming){var E=S(this,I).event(v),M=v.changedTouches,z=M.length,T,V,W,R;for(po(v),T=0;T<z;++T)V=M[T],W=Ue(V,this),E.touch0&&E.touch0[2]===V.identifier?E.touch0[0]=W:E.touch1&&E.touch1[2]===V.identifier&&(E.touch1[0]=W);if(V=E.that.__zoom,E.touch1){var U=E.touch0[0],X=E.touch0[1],Z=E.touch1[0],ce=E.touch1[1],F=(F=Z[0]-U[0])*F+(F=Z[1]-U[1])*F,$=($=ce[0]-X[0])*$+($=ce[1]-X[1])*$;V=w(V,Math.sqrt(F/$)),W=[(U[0]+Z[0])/2,(U[1]+Z[1])/2],R=[(X[0]+ce[0])/2,(X[1]+ce[1])/2]}else if(E.touch0)W=E.touch0[0],R=E.touch0[1];else return;E.zoom("touch",n(m(V,W,R),E.extent,a))}}function _(v,...I){if(this.__zooming){var E=S(this,I).event(v),M=v.changedTouches,z=M.length,T,V;for(ea(v),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),T=0;T<z;++T)V=M[T],E.touch0&&E.touch0[2]===V.identifier?delete E.touch0:E.touch1&&E.touch1[2]===V.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(V=Ue(V,this),Math.hypot(d[0]-V[0],d[1]-V[1])<y)){var W=$e(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return g.wheelDelta=function(v){return arguments.length?(o=typeof v=="function"?v:ar(+v),g):o},g.filter=function(v){return arguments.length?(e=typeof v=="function"?v:ar(!!v),g):e},g.touchable=function(v){return arguments.length?(r=typeof v=="function"?v:ar(!!v),g):r},g.extent=function(v){return arguments.length?(t=typeof v=="function"?v:ar([[+v[0][0],+v[0][1]],[+v[1][0],+v[1][1]]]),g):t},g.scaleExtent=function(v){return arguments.length?(i[0]=+v[0],i[1]=+v[1],g):[i[0],i[1]]},g.translateExtent=function(v){return arguments.length?(a[0][0]=+v[0][0],a[1][0]=+v[1][0],a[0][1]=+v[0][1],a[1][1]=+v[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(v){return arguments.length?(n=v,g):n},g.duration=function(v){return arguments.length?(s=+v,g):s},g.interpolate=function(v){return arguments.length?(u=v,g):u},g.on=function(){var v=l.on.apply(l,arguments);return v===l?g:v},g.clickDistance=function(v){return arguments.length?(b=(v=+v)*v,g):Math.sqrt(b)},g.tapDistance=function(v){return arguments.length?(y=+v,g):y},g}var Je={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Fn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],sa=["Enter"," ","Escape"],la={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Vt;(function(e){e.Strict="strict",e.Loose="loose"})(Vt||(Vt={}));var Tt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Tt||(Tt={}));var pn;(function(e){e.Partial="partial",e.Full="full"})(pn||(pn={}));var ca={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},ht;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(ht||(ht={}));var Bn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Bn||(Bn={}));var ne;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ne||(ne={}));var Al={[ne.Left]:ne.Right,[ne.Right]:ne.Left,[ne.Top]:ne.Bottom,[ne.Bottom]:ne.Top};function ua(e){return e===null?null:e?"valid":"invalid"}var da=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Ul=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),fa=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var ho=(e,t=[0,0])=>{let{width:n,height:o}=dt(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},pa=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):fa(r)?r:t.nodeLookup.get(r.id));let s=a?cr(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return fr(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return pr(n)},Vn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=fr(n,cr(r)),o=!0)}),o?pr(n):{x:0,y:0,width:0,height:0}},ur=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,u=(t.y-o)/r,l=t.width/r,c=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:h=!0,hidden:b=!1}=f;if(a&&!h||b)continue;let y=p.width??f.width??f.initialWidth??0,g=p.height??f.height??f.initialHeight??0,{x:w,y:m}=f.internals.positionAbsolute,x=Ql(s,u,l,c,w,m,y,g),N=y*g,S=i&&x>0;(!f.internals.handleBounds||S||x>=N||f.dragging)&&d.push(f)}return d},Yl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function h0(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=dt(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Zl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=h0(e,a),u=Vn(s),l=yo(u,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function ma({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:u,y:l}=s?s.internals.positionAbsolute:{x:0,y:0},c=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",Je.error005());else{let p=s.measured.width,h=s.measured.height;p&&h&&(d=[[u,l],[u+p,l+h]])}else s&&hn(a.extent)&&(d=[[a.extent[0][0]+u,a.extent[0][1]+l],[a.extent[1][0]+u,a.extent[1][1]+l]]);let f=hn(d)?mn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",Je.error015()),{position:{x:f.x-u+(a.measured.width??0)*c[0],y:f.y-l+(a.measured.height??0)*c[1]},positionAbsolute:f}}async function Kl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),h=!p&&f.parentId&&a.find(b=>b.id===f.parentId);(p||h)&&a.push(f)}let s=new Set(t.map(f=>f.id)),u=o.filter(f=>f.deletable!==!1),c=Yl(a,u);for(let f of u)s.has(f.id)&&!c.find(h=>h.id===f.id)&&c.push(f);if(!r)return{edges:c,nodes:a};let d=await r({nodes:a,edges:c});return typeof d=="boolean"?d?{edges:c,nodes:a}:{edges:[],nodes:[]}:d}var Wn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),mn=(e={x:0,y:0},t,n)=>({x:Wn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Wn(e.y,t[0][1],t[1][1]-(n?.height??0))});function jl(e,t,n){let{width:o,height:r}=dt(n),{x:i,y:a}=n.internals.positionAbsolute;return mn(e,[[i,a],[i+o,a+r]],t)}var Tl=(e,t,n)=>e<t?Wn(Math.abs(e-t),1,t)/t:e>n?-Wn(Math.abs(e-n),1,t)/t:0,dr=(e,t,n=15,o=40)=>{let r=Tl(e.x,o,t.width-o)*n,i=Tl(e.y,o,t.height-o)*n;return[r,i]},fr=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),aa=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),pr=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Xn=(e,t=[0,0])=>{let{x:n,y:o}=fa(e)?e.internals.positionAbsolute:ho(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},cr=(e,t=[0,0])=>{let{x:n,y:o}=fa(e)?e.internals.positionAbsolute:ho(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},ga=(e,t)=>pr(fr(aa(e),aa(t))),Ql=(e,t,n,o,r,i,a,s)=>{let u=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(u*l)},bo=(e,t)=>Ql(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),ha=e=>nt(e.width)&&nt(e.height)&&nt(e.x)&&nt(e.y),nt=e=>!isNaN(e)&&isFinite(e),ba=(e,t)=>(n,o)=>{},Gn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),qn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?Gn(s,a):s},gn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function $n(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function b0(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=$n(e,n),r=$n(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=$n(e.top??e.y??0,n),r=$n(e.bottom??e.y??0,n),i=$n(e.left??e.x??0,t),a=$n(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function y0(e,t,n,o,r,i){let{x:a,y:s}=gn(e,[t,n,o]),{x:u,y:l}=gn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),c=r-u,d=i-l;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(c),bottom:Math.floor(d)}}var yo=(e,t,n,o,r,i)=>{let a=b0(i,t,n),s=(t-a.x)/e.width,u=(n-a.y)/e.height,l=Math.min(s,u),c=Wn(l,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*c,h=n/2-f*c,b=y0(e,p,h,c,t,n),y={left:Math.min(b.left-a.left,0),top:Math.min(b.top-a.top,0),right:Math.min(b.right-a.right,0),bottom:Math.min(b.bottom-a.bottom,0)};return{x:p-y.left+y.right,y:h-y.top+y.bottom,zoom:c}},Un=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function hn(e){return e!=null&&e!=="parent"}function dt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function ya(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function xa(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function wa(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Jl(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function ec(e){return{...la,...e||{}}}function go(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=ot(e),s=qn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:u,y:l}=n?Gn(s,t):s;return{xSnapped:u,ySnapped:l,...s}}var mr=e=>({width:e.offsetWidth,height:e.offsetHeight}),va=e=>e?.getRootNode?.()||window?.document,x0=["INPUT","SELECT","TEXTAREA"];function ka(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:x0.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Sa=e=>"clientX"in e,ot=(e,t)=>{let n=Sa(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Ol=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...mr(a)}})};function gr({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let u=e*.125+r*.375+a*.375+n*.125,l=t*.125+i*.375+s*.375+o*.125,c=Math.abs(u-e),d=Math.abs(l-t);return[u,l,c,d]}function sr(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Ll({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case ne.Left:return[t-sr(t-o,i),n];case ne.Right:return[t+sr(o-t,i),n];case ne.Top:return[t,n-sr(n-r,i)];case ne.Bottom:return[t,n+sr(r-n,i)]}}function hr({sourceX:e,sourceY:t,sourcePosition:n=ne.Bottom,targetX:o,targetY:r,targetPosition:i=ne.Top,curvature:a=.25}){let[s,u]=Ll({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[l,c]=Ll({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,p,h]=gr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:u,targetControlX:l,targetControlY:c});return[`M${e},${t} C${s},${u} ${l},${c} ${o},${r}`,d,f,p,h]}function Na({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function tc({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function nc({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=fr(cr(e),cr(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return bo(a,pr(i))>0}var w0=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,v0=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),oc=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Je.error006()),t;let o=n.getEdgeId||w0,r;return da(e)?r={...e}:r={...e,id:o(e)},v0(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function br({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=Na({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var $l={[ne.Left]:{x:-1,y:0},[ne.Right]:{x:1,y:0},[ne.Top]:{x:0,y:-1},[ne.Bottom]:{x:0,y:1}},k0=({source:e,sourcePosition:t=ne.Bottom,target:n})=>t===ne.Left||t===ne.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Hl=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function S0({source:e,sourcePosition:t=ne.Bottom,target:n,targetPosition:o=ne.Top,center:r,offset:i,stepPosition:a}){let s=$l[t],u=$l[o],l={x:e.x+s.x*i,y:e.y+s.y*i},c={x:n.x+u.x*i,y:n.y+u.y*i},d=k0({source:l,sourcePosition:t,target:c}),f=d.x!==0?"x":"y",p=d[f],h=[],b,y,g={x:0,y:0},w={x:0,y:0},[,,m,x]=Na({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*u[f]===-1){f==="x"?(b=r.x??l.x+(c.x-l.x)*a,y=r.y??(l.y+c.y)/2):(b=r.x??(l.x+c.x)/2,y=r.y??l.y+(c.y-l.y)*a);let C=[{x:b,y:l.y},{x:b,y:c.y}],P=[{x:l.x,y},{x:c.x,y}];s[f]===p?h=f==="x"?C:P:h=f==="x"?P:C}else{let C=[{x:l.x,y:c.y}],P=[{x:c.x,y:l.y}];if(f==="x"?h=s.x===p?P:C:h=s.y===p?C:P,t===o){let v=Math.abs(e[f]-n[f]);if(v<=i){let I=Math.min(i-1,i-v);s[f]===p?g[f]=(l[f]>e[f]?-1:1)*I:w[f]=(c[f]>n[f]?-1:1)*I}}if(t!==o){let v=f==="x"?"y":"x",I=s[f]===u[v],E=l[v]>c[v],M=l[v]<c[v];(s[f]===1&&(!I&&E||I&&M)||s[f]!==1&&(!I&&M||I&&E))&&(h=f==="x"?C:P)}let L={x:l.x+g.x,y:l.y+g.y},D={x:c.x+w.x,y:c.y+w.y},A=Math.max(Math.abs(L.x-h[0].x),Math.abs(D.x-h[0].x)),_=Math.max(Math.abs(L.y-h[0].y),Math.abs(D.y-h[0].y));A>=_?(b=(L.x+D.x)/2,y=h[0].y):(b=h[0].x,y=(L.y+D.y)/2)}let N={x:l.x+g.x,y:l.y+g.y},S={x:c.x+w.x,y:c.y+w.y};return[[e,...N.x!==h[0].x||N.y!==h[0].y?[N]:[],...h,...S.x!==h[h.length-1].x||S.y!==h[h.length-1].y?[S]:[],n],b,y,m,x]}function N0(e,t,n,o){let r=Math.min(Hl(e,t)/2,Hl(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let l=e.x<n.x?-1:1,c=e.y<n.y?1:-1;return`L ${i+r*l},${a}Q ${i},${a} ${i},${a+r*c}`}let s=e.x<n.x?1:-1,u=e.y<n.y?-1:1;return`L ${i},${a+r*u}Q ${i},${a} ${i+r*s},${a}`}function xo({sourceX:e,sourceY:t,sourcePosition:n=ne.Bottom,targetX:o,targetY:r,targetPosition:i=ne.Top,borderRadius:a=5,centerX:s,centerY:u,offset:l=20,stepPosition:c=.5}){let[d,f,p,h,b]=S0({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:u},offset:l,stepPosition:c}),y=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)y+=N0(d[g-1],d[g],d[g+1],a);return y+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[y,f,p,h,b]}function Bl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function rc(e){let{sourceNode:t,targetNode:n}=e;if(!Bl(t)||!Bl(n))return null;let o=t.internals.handleBounds||Wl(t.handles),r=n.internals.handleBounds||Wl(n.handles),i=Fl(o?.source??[],e.sourceHandle),a=Fl(e.connectionMode===Vt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",Je.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||ne.Bottom,u=a?.position||ne.Top,l=Xt(t,i,s),c=Xt(n,a,u);return{sourceX:l.x,sourceY:l.y,targetX:c.x,targetY:c.y,sourcePosition:s,targetPosition:u}}function Wl(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function Xt(e,t,n=ne.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??dt(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case ne.Top:return{x:r+a/2,y:i};case ne.Right:return{x:r+a,y:i+s/2};case ne.Bottom:return{x:r+a/2,y:i+s};case ne.Left:return{x:r,y:i+s/2}}}function Fl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function yr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function ic(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(u=>{if(u&&typeof u=="object"){let l=yr(u,t);i.has(l)||(a.push({id:l,color:u.color||n,...u}),i.add(l))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var ac=1e3,M0=10,Ma={nodeOrigin:[0,0],nodeExtent:Fn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},C0={...Ma,checkEquality:!0};function Ca(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function sc(e,t,n){let o=Ca(Ma,n);for(let r of e.values())if(r.parentId)_a(r,e,t,o);else{let i=ho(r,o.nodeOrigin),a=hn(r.extent)?r.extent:o.nodeExtent,s=mn(i,a,dt(r));r.internals.positionAbsolute=s}}function E0(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function Ea(e){return e==="manual"}function xr(e,t,n,o={}){let r=Ca(C0,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!Ea(r.zIndexMode)?ac:0,u=e.length>0,l=!1;t.clear(),n.clear();for(let c of e){let d=a.get(c.id);if(r.checkEquality&&c===d?.internals.userNode)t.set(c.id,d);else{let f=ho(c,r.nodeOrigin),p=hn(c.extent)?c.extent:r.nodeExtent,h=mn(f,p,dt(c));d={...r.defaults,...c,measured:{width:c.measured?.width,height:c.measured?.height},internals:{positionAbsolute:h,handleBounds:E0(c,d),z:lc(c,s,r.zIndexMode),userNode:c}},t.set(c.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(u=!1),c.parentId&&_a(d,t,n,o,i),l||=c.selected??!1}return{nodesInitialized:u,hasSelectedNodes:l}}function _0(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function _a(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:u}=Ca(Ma,o),l=e.parentId,c=t.get(l);if(!c){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}_0(e,n),r&&!c.parentId&&c.internals.rootParentIndex===void 0&&u==="auto"&&(c.internals.rootParentIndex=++r.i,c.internals.z=c.internals.z+r.i*M0),r&&c.internals.rootParentIndex!==void 0&&(r.i=c.internals.rootParentIndex);let d=i&&!Ea(u)?ac:0,{x:f,y:p,z:h}=I0(e,c,a,s,d,u),{positionAbsolute:b}=e.internals,y=f!==b.x||p!==b.y;(y||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:f,y:p}:b,z:h}})}function lc(e,t,n){let o=nt(e.zIndex)?e.zIndex:0;return Ea(n)?o:o+(e.selected?t:0)}function I0(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,u=dt(e),l=ho(e,n),c=hn(e.extent)?mn(l,e.extent,u):l,d=mn({x:a+c.x,y:s+c.y},o,u);e.extent==="parent"&&(d=jl(d,u,t));let f=lc(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function wr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let u=i.get(a.parentId)?.expandedRect??Xn(s),l=ga(u,a.rect);i.set(a.parentId,{expandedRect:l,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},u)=>{let l=s.internals.positionAbsolute,c=dt(s),d=s.origin??o,f=a.x<l.x?Math.round(Math.abs(l.x-a.x)):0,p=a.y<l.y?Math.round(Math.abs(l.y-a.y)):0,h=Math.max(c.width,Math.round(a.width)),b=Math.max(c.height,Math.round(a.height)),y=(h-c.width)*d[0],g=(b-c.height)*d[1];(f>0||p>0||y||g)&&(r.push({id:u,type:"position",position:{x:s.position.x-f+y,y:s.position.y-p+g}}),n.get(u)?.forEach(w=>{e.some(m=>m.id===w.id)||r.push({id:w.id,type:"position",position:{x:w.position.x+f,y:w.position.y+p}})})),(c.width<a.width||c.height<a.height||f||p)&&r.push({id:u,type:"dimensions",setAttributes:!0,dimensions:{width:h+(f?d[0]*f-y:0),height:b+(p?d[1]*p-g:0)}})}),r}function cc(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),u=!1;if(!s)return{changes:[],updatedInternals:u};let l=[],c=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(c.transform),f=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),u=!0;continue}let b=mr(p.nodeElement),y=h.measured.width!==b.width||h.measured.height!==b.height;if(!!(b.width&&b.height&&(y||!h.internals.handleBounds||p.force))){let w=p.nodeElement.getBoundingClientRect(),m=hn(h.extent)?h.extent:i,{positionAbsolute:x}=h.internals;if(h.parentId&&h.extent==="parent"){let S=t.get(h.parentId);S&&(x=jl(x,b,S))}else m&&(x=mn(x,m,b));let N={...h,measured:b,internals:{...h.internals,positionAbsolute:x,handleBounds:{source:Ol("source",p.nodeElement,w,d,h.id),target:Ol("target",p.nodeElement,w,d,h.id)}}};t.set(h.id,N),h.parentId&&_a(N,t,n,{nodeOrigin:r,zIndexMode:a}),u=!0,y&&(l.push({id:h.id,type:"dimensions",dimensions:b}),h.expandParent&&h.parentId&&f.push({id:h.id,parentId:h.parentId,rect:Xn(N,r)}))}}if(f.length>0){let p=wr(f,t,n,r);l.push(...p)}return{changes:l,updatedInternals:u}}async function uc({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function Vl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let u=o.get(a)||new Map;if(o.set(a,u.set(n,t)),i){a=`${r}-${e}-${i}`;let l=o.get(a)||new Map;o.set(a,l.set(n,t))}}function Ia(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,u={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},l=`${r}-${a}--${i}-${s}`,c=`${i}-${s}--${r}-${a}`;Vl("source",u,c,e,r,a),Vl("target",u,l,e,i,s),t.set(o.id,o)}}function dc(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:dc(n,t):!1}function Xl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function P0(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!dc(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function oa({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let u=n.get(a)?.internals.userNode;u&&r.push({...u,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function z0({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=Gn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function fc({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,u=!1,l={x:0,y:0},c=null,d=!1,f=null,p=!1,h=!1,b=null;function y({noDragClassName:w,handleSelector:m,domNode:x,isSelectable:N,nodeId:S,nodeClickDistance:k=0}){f=$e(x);function C({x:A,y:_}){let{nodeLookup:v,nodeExtent:I,snapGrid:E,snapToGrid:M,nodeOrigin:z,onNodeDrag:T,onSelectionDrag:V,onError:W,updateNodePositions:R}=t();i={x:A,y:_};let U=!1,X=s.size>1,Z=X&&I?aa(Vn(s)):null,ce=X&&M?z0({dragItems:s,snapGrid:E,x:A,y:_}):null;for(let[F,$]of s){if(!v.has(F))continue;let Y={x:A-$.distance.x,y:_-$.distance.y};M&&(Y=ce?{x:Math.round(Y.x+ce.x),y:Math.round(Y.y+ce.y)}:Gn(Y,E));let re=null;if(X&&I&&!$.extent&&Z){let{positionAbsolute:te}=$.internals,Q=te.x-Z.x+I[0][0],q=te.x+$.measured.width-Z.x2+I[1][0],ie=te.y-Z.y+I[0][1],de=te.y+$.measured.height-Z.y2+I[1][1];re=[[Q,ie],[q,de]]}let{position:ae,positionAbsolute:J}=ma({nodeId:F,nextPosition:Y,nodeLookup:v,nodeExtent:re||I,nodeOrigin:z,onError:W});U=U||$.position.x!==ae.x||$.position.y!==ae.y,$.position=ae,$.internals.positionAbsolute=J}if(h=h||U,!!U&&(R(s,!0),b&&(o||T||!S&&V))){let[F,$]=oa({nodeId:S,dragItems:s,nodeLookup:v});o?.(b,s,F,$),T?.(b,F,$),S||V?.(b,$)}}async function P(){if(!c)return;let{transform:A,panBy:_,autoPanSpeed:v,autoPanOnNodeDrag:I}=t();if(!I){u=!1,cancelAnimationFrame(a);return}let[E,M]=dr(l,c,v);(E!==0||M!==0)&&(i.x=(i.x??0)-E/A[2],i.y=(i.y??0)-M/A[2],await _({x:E,y:M})&&C(i)),a=requestAnimationFrame(P)}function L(A){let{nodeLookup:_,multiSelectionActive:v,nodesDraggable:I,transform:E,snapGrid:M,snapToGrid:z,selectNodesOnDrag:T,onNodeDragStart:V,onSelectionDragStart:W,unselectNodesAndEdges:R}=t();d=!0,(!T||!N)&&!v&&S&&(_.get(S)?.selected||R()),N&&T&&S&&e?.(S);let U=go(A.sourceEvent,{transform:E,snapGrid:M,snapToGrid:z,containerBounds:c});if(i=U,s=P0(_,I,U,S),s.size>0&&(n||V||!S&&W)){let[X,Z]=oa({nodeId:S,dragItems:s,nodeLookup:_});n?.(A.sourceEvent,s,X,Z),V?.(A.sourceEvent,X,Z),S||W?.(A.sourceEvent,Z)}}let D=Ii().clickDistance(k).on("start",A=>{let{domNode:_,nodeDragThreshold:v,transform:I,snapGrid:E,snapToGrid:M}=t();c=_?.getBoundingClientRect()||null,p=!1,h=!1,b=A.sourceEvent,v===0&&L(A),i=go(A.sourceEvent,{transform:I,snapGrid:E,snapToGrid:M,containerBounds:c}),l=ot(A.sourceEvent,c)}).on("drag",A=>{let{autoPanOnNodeDrag:_,transform:v,snapGrid:I,snapToGrid:E,nodeDragThreshold:M,nodeLookup:z}=t(),T=go(A.sourceEvent,{transform:v,snapGrid:I,snapToGrid:E,containerBounds:c});if(b=A.sourceEvent,(A.sourceEvent.type==="touchmove"&&A.sourceEvent.touches.length>1||S&&!z.has(S))&&(p=!0),!p){if(!u&&_&&d&&(u=!0,P()),!d){let V=ot(A.sourceEvent,c),W=V.x-l.x,R=V.y-l.y;Math.sqrt(W*W+R*R)>M&&L(A)}(i.x!==T.xSnapped||i.y!==T.ySnapped)&&s&&d&&(l=ot(A.sourceEvent,c),C(T))}}).on("end",A=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(u=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:_,updateNodePositions:v,onNodeDragStop:I,onSelectionDragStop:E}=t();if(h&&(v(s,!1),h=!1),r||I||!S&&E){let[M,z]=oa({nodeId:S,dragItems:s,nodeLookup:_,dragging:!1});r?.(A.sourceEvent,s,M,z),I?.(A.sourceEvent,M,z),S||E?.(A.sourceEvent,z)}}}).filter(A=>{let _=A.target;return!A.button&&(!w||!Xl(_,`.${w}`,x))&&(!m||Xl(_,m,x))});f.call(D)}function g(){f?.on(".drag",null)}return{update:y,destroy:g}}function R0(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())bo(r,Xn(i))>0&&o.push(i);return o}var D0=250;function A0(e,t,n,o){let r=[],i=1/0,a=R0(e,n,t+D0);for(let s of a){let u=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let l of u){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:c,y:d}=Xt(s,l,l.position,!0),f=Math.sqrt(Math.pow(c-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...l,x:c,y:d}],i=f):f===i&&r.push({...l,x:c,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(u=>u.type===s)??r[0]}return r[0]}function pc(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],u=(n?s?.find(l=>l.id===n):s?.[0])??null;return u&&i?{...u,...Xt(a,u,u.position,!0)}:u}function mc(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function T0(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var gc=()=>!0;function O0(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:u,lib:l,autoPanOnConnect:c,flowId:d,panBy:f,cancelConnection:p,onConnectStart:h,onConnect:b,onConnectEnd:y,isValidConnection:g=gc,onReconnectEnd:w,updateConnection:m,getTransform:x,getFromHandle:N,autoPanSpeed:S,dragThreshold:k=1,handleDomNode:C}){let P=va(e.target),L=0,D,{x:A,y:_}=ot(e),v=mc(i,C),I=s?.getBoundingClientRect(),E=!1;if(!I||!v)return;let M=pc(r,v,o,u,t);if(!M)return;let z=ot(e,I),T=!1,V=null,W=!1,R=null;function U(){if(!c||!I)return;let[ae,J]=dr(z,I,S);f({x:ae,y:J}),L=requestAnimationFrame(U)}let X={...M,nodeId:r,type:v,position:M.position},Z=u.get(r),F={inProgress:!0,isValid:null,from:Xt(Z,X,ne.Left,!0),fromHandle:X,fromPosition:X.position,fromNode:Z,to:z,toHandle:null,toPosition:Al[X.position],toNode:null,pointer:z};function $(){E=!0,m(F),h?.(e,{nodeId:r,handleId:o,handleType:v})}k===0&&$();function Y(ae){if(!E){let{x:de,y:Ce}=ot(ae),Pe=de-A,qe=Ce-_;if(!(Pe*Pe+qe*qe>k*k))return;$()}if(!N()||!X){re(ae);return}let J=x();z=ot(ae,I),D=A0(qn(z,J,!1,[1,1]),n,u,X),T||(U(),T=!0);let te=hc(ae,{handle:D,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:g,doc:P,lib:l,flowId:d,nodeLookup:u});R=te.handleDomNode,V=te.connection,W=T0(!!D,te.isValid);let Q=u.get(r),q=Q?Xt(Q,X,ne.Left,!0):F.from,ie={...F,from:q,isValid:W,to:te.toHandle&&W?gn({x:te.toHandle.x,y:te.toHandle.y},J):z,toHandle:te.toHandle,toPosition:W&&te.toHandle?te.toHandle.position:Al[X.position],toNode:te.toHandle?u.get(te.toHandle.nodeId):null,pointer:z};m(ie),F=ie}function re(ae){if(!("touches"in ae&&ae.touches.length>0)){if(E){(D||R)&&V&&W&&b?.(V);let{inProgress:J,...te}=F,Q={...te,toPosition:F.toHandle?F.toPosition:null};y?.(ae,Q),i&&w?.(ae,Q)}p(),cancelAnimationFrame(L),T=!1,W=!1,V=null,R=null,P.removeEventListener("mousemove",Y),P.removeEventListener("mouseup",re),P.removeEventListener("touchmove",Y),P.removeEventListener("touchend",re)}}P.addEventListener("mousemove",Y),P.addEventListener("mouseup",re),P.addEventListener("touchmove",Y),P.addEventListener("touchend",re)}function hc(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:u,isValidConnection:l=gc,nodeLookup:c}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${u}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=ot(e),b=a.elementFromPoint(p,h),y=b?.classList.contains(`${s}-flow__handle`)?b:f,g={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let w=mc(void 0,y),m=y.getAttribute("data-nodeid"),x=y.getAttribute("data-handleid"),N=y.classList.contains("connectable"),S=y.classList.contains("connectableend");if(!m||!w)return g;let k={source:d?m:o,sourceHandle:d?x:r,target:d?o:m,targetHandle:d?r:x};g.connection=k;let P=N&&S&&(n===Vt.Strict?d&&w==="source"||!d&&w==="target":m!==o||x!==r);g.isValid=P&&l(k),g.toHandle=pc(m,w,x,c,n,!0)}return g}var vr={onPointerDown:O0,isValid:hc};function bc({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=$e(e);function i({translateExtent:s,width:u,height:l,zoomStep:c=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let h=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=n(),N=m.sourceEvent.ctrlKey&&Un()?10:1,S=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*c,k=x[2]*Math.pow(2,S*N);t.scaleTo(k)},b=[0,0],y=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(b=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},g=m=>{let x=n();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let N=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],S=[N[0]-b[0],N[1]-b[1]];b=N;let k=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),C={x:x[0]-S[0]*k,y:x[1]-S[1]*k},P=[[0,0],[u,l]];t.setViewportConstrained({x:C.x,y:C.y,zoom:x[2]},P,s)},w=na().on("start",y).on("zoom",d?g:null).on("zoom.wheel",f?h:null);r.call(w,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Ue}}var kr=e=>({x:e.x,y:e.y,zoom:e.k}),ra=({x:e,y:t,zoom:n})=>mo.translate(e,t).scale(n),Hn=(e,t)=>e.target.closest(`.${t}`),yc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),L0=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,ia=(e,t=0,n=L0,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},xc=e=>{let t=e.ctrlKey&&Un()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function $0({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:u,onPanZoomEnd:l}){return c=>{if(Hn(c,t))return c.ctrlKey&&c.preventDefault(),!1;c.preventDefault(),c.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(c.ctrlKey&&a){let y=Ue(c),g=xc(c),w=d*Math.pow(2,g);o.scaleTo(n,w,y,c);return}let f=c.deltaMode===1?20:1,p=r===Tt.Vertical?0:c.deltaX*f,h=r===Tt.Horizontal?0:c.deltaY*f;!Un()&&c.shiftKey&&r!==Tt.Vertical&&(p=c.deltaY*f,h=0),o.translateBy(n,-(p/d)*i,-(h/d)*i,{internal:!0});let b=kr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?u?.(c,b):(e.isPanScrolling=!0,s?.(c,b)),e.panScrollTimeout=setTimeout(()=>{l?.(c,b),e.isPanScrolling=!1},150)}}function H0({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=Hn(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function B0({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=kr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function W0({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&yc(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,kr(i.transform))}}function F0({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&yc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=kr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function V0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:u,lib:l,connectionInProgress:c}){return d=>{let f=e||t,p=n&&d.ctrlKey,h=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Hn(d,`${l}-flow__node`)||Hn(d,`${l}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||c&&!h||Hn(d,s)&&h||Hn(d,u)&&(!h||r&&h&&!e)||!n&&d.ctrlKey&&h)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&h||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let b=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||h)&&b}}function wc({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:u}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},c=e.getBoundingClientRect(),d=[[0,0],[c.width,c.height]];(typeof ResizeObserver<"u"?new ResizeObserver(_=>{let v=_[0];v&&(d=[[0,0],[v.contentRect.width,v.contentRect.height]])}):null)?.observe(e);let p=na().extent(()=>d).scaleExtent([t,n]).translateExtent(o),h=$e(e).call(p);x({x:r.x,y:r.y,zoom:Wn(r.zoom,t,n)},[[0,0],[c.width,c.height]],o);let b=h.on("wheel.zoom"),y=h.on("dblclick.zoom");p.wheelDelta(xc);async function g(_,v){return h?new Promise(I=>{p?.interpolate(v?.interpolate==="linear"?An:Tn).transform(ia(h,v?.duration,v?.ease,()=>I(!0)),_)}):!1}function w({noWheelClassName:_,noPanClassName:v,onPaneContextMenu:I,userSelectionActive:E,panOnScroll:M,panOnDrag:z,panOnScrollMode:T,panOnScrollSpeed:V,preventScrolling:W,zoomOnPinch:R,zoomOnScroll:U,zoomOnDoubleClick:X,zoomActivationKeyPressed:Z,lib:ce,onTransformChange:F,connectionInProgress:$,paneClickDistance:Y,selectionOnDrag:re}){E&&!l.isZoomingOrPanning&&m();let ae=M&&!Z&&!E;p.clickDistance(re?1/0:!nt(Y)||Y<0?0:Y);let J=ae?$0({zoomPanValues:l,noWheelClassName:_,d3Selection:h,d3Zoom:p,panOnScrollMode:T,panOnScrollSpeed:V,zoomOnPinch:R,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):H0({noWheelClassName:_,preventScrolling:W,d3ZoomHandler:b});h.on("wheel.zoom",J,{passive:!1});let te=B0({zoomPanValues:l,onDraggingChange:u,onPanZoomStart:a});p.on("start",te);let Q=W0({zoomPanValues:l,panOnDrag:z,onPaneContextMenu:!!I,onPanZoom:i,onTransformChange:F});p.on("zoom",Q);let q=F0({zoomPanValues:l,panOnDrag:z,panOnScroll:M,onPaneContextMenu:I,onPanZoomEnd:s,onDraggingChange:u});p.on("end",q);let ie=V0({zoomActivationKeyPressed:Z,panOnDrag:z,zoomOnScroll:U,panOnScroll:M,zoomOnDoubleClick:X,zoomOnPinch:R,userSelectionActive:E,noPanClassName:v,noWheelClassName:_,lib:ce,connectionInProgress:$});p.filter(ie),X?h.on("dblclick.zoom",y):h.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(_,v,I){let E=ra(_),M=p?.constrain()(E,v,I);return M&&await g(M),M}async function N(_,v){let I=ra(_);return await g(I,v),I}function S(_){if(h){let v=ra(_),I=h.property("__zoom");(I.k!==_.zoom||I.x!==_.x||I.y!==_.y)&&p?.transform(h,v,null,{sync:!0})}}function k(){let _=h?ta(h.node()):{x:0,y:0,k:1};return{x:_.x,y:_.y,zoom:_.k}}async function C(_,v){return h?new Promise(I=>{p?.interpolate(v?.interpolate==="linear"?An:Tn).scaleTo(ia(h,v?.duration,v?.ease,()=>I(!0)),_)}):!1}async function P(_,v){return h?new Promise(I=>{p?.interpolate(v?.interpolate==="linear"?An:Tn).scaleBy(ia(h,v?.duration,v?.ease,()=>I(!0)),_)}):!1}function L(_){p?.scaleExtent(_)}function D(_){p?.translateExtent(_)}function A(_){let v=!nt(_)||_<0?0:_;p?.clickDistance(v)}return{update:w,destroy:m,setViewport:N,setViewportConstrained:x,getViewport:k,scaleTo:C,scaleBy:P,setScaleExtent:L,setTranslateExtent:D,syncViewport:S,setClickDistance:A}}var Gt;(function(e){e.Line="line",e.Handle="handle"})(Gt||(Gt={}));function X0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,u=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(u[0]=u[0]*-1),s&&i&&(u[1]=u[1]*-1),u}function Gl(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Wt(e,t){return Math.max(0,t-e)}function Ft(e,t){return Math.max(0,e-t)}function lr(e,t,n){return Math.max(0,t-e,e-n)}function ql(e,t){return e?!t:t}function G0(e,t,n,o,r,i,a,s){let{affectsX:u,affectsY:l}=t,{isHorizontal:c,isVertical:d}=t,f=c&&d,{xSnapped:p,ySnapped:h}=n,{minWidth:b,maxWidth:y,minHeight:g,maxHeight:w}=o,{x:m,y:x,width:N,height:S,aspectRatio:k}=e,C=Math.floor(c?p-e.pointerX:0),P=Math.floor(d?h-e.pointerY:0),L=N+(u?-C:C),D=S+(l?-P:P),A=-i[0]*N,_=-i[1]*S,v=lr(L,b,y),I=lr(D,g,w);if(a){let z=0,T=0;u&&C<0?z=Wt(m+C+A,a[0][0]):!u&&C>0&&(z=Ft(m+L+A,a[1][0])),l&&P<0?T=Wt(x+P+_,a[0][1]):!l&&P>0&&(T=Ft(x+D+_,a[1][1])),v=Math.max(v,z),I=Math.max(I,T)}if(s){let z=0,T=0;u&&C>0?z=Ft(m+C,s[0][0]):!u&&C<0&&(z=Wt(m+L,s[1][0])),l&&P>0?T=Ft(x+P,s[0][1]):!l&&P<0&&(T=Wt(x+D,s[1][1])),v=Math.max(v,z),I=Math.max(I,T)}if(r){if(c){let z=lr(L/k,g,w)*k;if(v=Math.max(v,z),a){let T=0;!u&&!l||u&&!l&&f?T=Ft(x+_+L/k,a[1][1])*k:T=Wt(x+_+(u?C:-C)/k,a[0][1])*k,v=Math.max(v,T)}if(s){let T=0;!u&&!l||u&&!l&&f?T=Wt(x+L/k,s[1][1])*k:T=Ft(x+(u?C:-C)/k,s[0][1])*k,v=Math.max(v,T)}}if(d){let z=lr(D*k,b,y)/k;if(I=Math.max(I,z),a){let T=0;!u&&!l||l&&!u&&f?T=Ft(m+D*k+A,a[1][0])/k:T=Wt(m+(l?P:-P)*k+A,a[0][0])/k,I=Math.max(I,T)}if(s){let T=0;!u&&!l||l&&!u&&f?T=Wt(m+D*k,s[1][0])/k:T=Ft(m+(l?P:-P)*k,s[0][0])/k,I=Math.max(I,T)}}}P=P+(P<0?I:-I),C=C+(C<0?v:-v),r&&(f?L>D*k?P=(ql(u,l)?-C:C)/k:C=(ql(u,l)?-P:P)*k:c?(P=C/k,l=u):(C=P*k,u=l));let E=u?m+C:m,M=l?x+P:x;return{width:N+(u?-C:C),height:S+(l?-P:P),x:i[0]*C*(u?-1:1)+E,y:i[1]*P*(l?-1:1)+M}}var vc={width:0,height:0,x:0,y:0},q0={...vc,pointerX:0,pointerY:0,aspectRatio:1};function U0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,u=n[1]*a;return[[o-s,r-u],[o+i-s,r+a-u]]}function kc({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=$e(e),a={controlDirection:Gl("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:l,boundaries:c,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:h,onResizeEnd:b,shouldResize:y}){let g={...vc},w={...q0};a={boundaries:c,resizeDirection:f,keepAspectRatio:d,controlDirection:Gl(l)};let m,x=null,N=[],S,k,C,P=!1,L=Ii().on("start",D=>{let{nodeLookup:A,transform:_,snapGrid:v,snapToGrid:I,nodeOrigin:E,paneDomNode:M}=n();if(m=A.get(t),!m)return;x=M?.getBoundingClientRect()??null;let{xSnapped:z,ySnapped:T}=go(D.sourceEvent,{transform:_,snapGrid:v,snapToGrid:I,containerBounds:x});g={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},w={...g,pointerX:z,pointerY:T,aspectRatio:g.width/g.height},S=void 0,k=hn(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(S=A.get(m.parentId)),S&&m.extent==="parent"&&(k=[[0,0],[S.measured.width,S.measured.height]]),N=[],C=void 0;for(let[V,W]of A)if(W.parentId===t&&(N.push({id:V,position:{...W.position},extent:W.extent}),W.extent==="parent"||W.expandParent)){let R=U0(W,m,W.origin??E);C?C=[[Math.min(R[0][0],C[0][0]),Math.min(R[0][1],C[0][1])],[Math.max(R[1][0],C[1][0]),Math.max(R[1][1],C[1][1])]]:C=R}p?.(D,{...g})}).on("drag",D=>{let{transform:A,snapGrid:_,snapToGrid:v,nodeOrigin:I}=n(),E=go(D.sourceEvent,{transform:A,snapGrid:_,snapToGrid:v,containerBounds:x}),M=[];if(!m)return;let{x:z,y:T,width:V,height:W}=g,R={},U=m.origin??I,{width:X,height:Z,x:ce,y:F}=G0(w,a.controlDirection,E,a.boundaries,a.keepAspectRatio,U,k,C),$=X!==V,Y=Z!==W,re=ce!==z&&$,ae=F!==T&&Y;if(!re&&!ae&&!$&&!Y)return;if((re||ae||U[0]===1||U[1]===1)&&(R.x=re?ce:g.x,R.y=ae?F:g.y,g.x=R.x,g.y=R.y,N.length>0)){let q=ce-z,ie=F-T;for(let de of N)de.position={x:de.position.x-q+U[0]*(X-V),y:de.position.y-ie+U[1]*(Z-W)},M.push(de)}if(($||Y)&&(R.width=$&&(!a.resizeDirection||a.resizeDirection==="horizontal")?X:g.width,R.height=Y&&(!a.resizeDirection||a.resizeDirection==="vertical")?Z:g.height,g.width=R.width,g.height=R.height),S&&m.expandParent){let q=U[0]*(R.width??0);R.x&&R.x<q&&(g.x=q,w.x=w.x-(R.x-q));let ie=U[1]*(R.height??0);R.y&&R.y<ie&&(g.y=ie,w.y=w.y-(R.y-ie))}let J=X0({width:g.width,prevWidth:V,height:g.height,prevHeight:W,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),te={...g,direction:J};y?.(D,te)!==!1&&(P=!0,h?.(D,te),o(R,M))}).on("end",D=>{P&&(b?.(D,{...g}),r?.({...g}),P=!1)});i.call(L)}function u(){i.on(".drag",null)}return{update:s,destroy:u}}var Tc=_s(require("react"),1),Oc=_s(Pc(),1);var Rc={},zc=e=>{let t,n=new Set,o=(c,d)=>{let f=typeof c=="function"?c(t):c;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(h=>h(t,p))}},r=()=>t,u={setState:o,getState:r,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(Rc.env?Rc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,u);return u},Dc=e=>e?zc(e):zc;var{useDebugValue:dy}=Tc.default,{useSyncExternalStoreWithSelector:fy}=Oc.default,py=e=>e;function za(e,t=py,n){let o=fy(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return dy(o),o}var Ac=(e,t)=>{let n=Dc(e),o=(r,i=t)=>za(n,r,i);return Object.assign(o,n),o},Lc=(e,t)=>e?Ac(e,t):Ac;function Ne(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var uu=require("react-dom"),Er=(0,H.createContext)(null),my=Er.Provider,du=Je.error001("react");function me(e,t){let n=(0,H.useContext)(Er);if(n===null)throw new Error(du);return za(n,e,t)}function we(){let e=(0,H.useContext)(Er);if(e===null)throw new Error(du);return(0,H.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var $c={display:"none"},gy={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},fu="react-flow__node-desc",pu="react-flow__edge-desc",hy="react-flow__aria-live",by=e=>e.ariaLiveMessage,yy=e=>e.ariaLabelConfig;function xy({rfId:e}){let t=me(by);return(0,B.jsx)("div",{id:`${hy}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:gy,children:t})}function wy({rfId:e,disableKeyboardA11y:t}){let n=me(yy);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{id:`${fu}-${e}`,style:$c,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,B.jsx)("div",{id:`${pu}-${e}`,style:$c,children:n["edge.a11yDescription.default"]}),!t&&(0,B.jsx)(xy,{rfId:e})]})}var _r=(0,H.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,B.jsx)("div",{className:Ee(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});_r.displayName="Panel";var Hc="https://reactflow.dev?utm_source=attribution";function vy({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,B.jsx)(_r,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Hc}`,children:(0,B.jsx)("a",{href:Hc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var ky=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},Nr=e=>e.id;function Sy(e,t){return Ne(e.selectedNodes.map(Nr),t.selectedNodes.map(Nr))&&Ne(e.selectedEdges.map(Nr),t.selectedEdges.map(Nr))}function Ny({onSelectionChange:e}){let t=we(),{selectedNodes:n,selectedEdges:o}=me(ky,Sy);return(0,H.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var My=e=>!!e.onSelectionChangeHandlers;function Cy({onSelectionChange:e}){let t=me(My);return e||t?(0,B.jsx)(Ny,{onSelectionChange:e}):null}var mu=[0,0],Ey={x:0,y:0,zoom:1},_y=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Bc=[..._y,"rfId"],Iy=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Wc={translateExtent:Fn,nodeOrigin:mu,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function Py(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:u}=me(Iy,Ne),l=we();(0,H.useEffect)(()=>(u(e.defaultNodes,e.defaultEdges),()=>{c.current=Wc,s()}),[]);let c=(0,H.useRef)(Wc);return(0,H.useEffect)(()=>{for(let d of Bc){let f=e[d],p=c.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?l.setState({ariaLabelConfig:ec(f)}):d==="fitView"?l.setState({fitViewQueued:f}):d==="fitViewOptions"?l.setState({fitViewOptions:f}):l.setState({[d]:f})))}c.current=e},Bc.map(d=>e[d])),null}function Fc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function zy(e){let[t,n]=(0,H.useState)(e==="system"?null:e);return(0,H.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Fc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Fc()?.matches?"dark":"light"}var Vc=typeof document<"u"?document:null;function wo(e=null,t={target:Vc,actInsideInputWithModifier:!0}){let[n,o]=(0,H.useState)(!1),r=(0,H.useRef)(!1),i=(0,H.useRef)(new Set([])),[a,s]=(0,H.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),c=l.reduce((d,f)=>d.concat(...f),[]);return[l,c]}return[[],[]]},[e]);return(0,H.useEffect)(()=>{let u=t?.target??Vc,l=t?.actInsideInputWithModifier??!0;if(e!==null){let c=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&ka(p))return!1;let b=Gc(p.code,s);if(i.current.add(p[b]),Xc(a,i.current,!1)){let y=p.composedPath?.()?.[0]||p.target,g=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},d=p=>{let h=Gc(p.code,s);Xc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[h]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return u?.addEventListener("keydown",c),u?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{u?.removeEventListener("keydown",c),u?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function Xc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function Gc(e,t){return t.includes(e)?"code":"key"}var Ry=()=>{let e=we();return(0,H.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),u=yo(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(u,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:u}=a.getBoundingClientRect(),l={x:t.x-s,y:t.y-u},c=n.snapGrid??r,d=n.snapToGrid??i;return qn(l,o,d,c)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=gn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function gu(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let u of a)Dy(u,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function Dy(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function hu(e,t){return gu(e,t)}function bu(e,t){return gu(e,t)}function bn(e,t){return{id:e,type:"select",selected:t}}function Zn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(bn(i.id,a)))}return o}function qc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Uc(e){return{id:e.id,type:"remove"}}var Ay=ba("React Flow","https://reactflow.dev/");function Ty(e,t,n={}){return oc(e,t,{...n,onError:n.onError??Ay})}var Yc=e=>Ul(e),Oy=e=>da(e);function yu(e){return(0,H.forwardRef)(e)}var xu=typeof window<"u"?H.useLayoutEffect:H.useEffect;function Zc(e){let[t,n]=(0,H.useState)(BigInt(0)),[o]=(0,H.useState)(()=>Ly(()=>n(r=>r+BigInt(1))));return xu(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function Ly(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var wu=(0,H.createContext)(null);function $y({children:e}){let t=we(),n=(0,H.useCallback)(s=>{let{nodes:u=[],setNodes:l,hasDefaultNodes:c,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),b=u;for(let g of s)b=typeof g=="function"?g(b):g;let y=qc({items:b,lookup:f});for(let g of h.values())y=g(y);c&&l(b),y.length>0?d?.(y):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:w,setNodes:m}=t.getState();g&&m(w)})},[]),o=Zc(n),r=(0,H.useCallback)(s=>{let{edges:u=[],setEdges:l,hasDefaultEdges:c,onEdgesChange:d,edgeLookup:f}=t.getState(),p=u;for(let h of s)p=typeof h=="function"?h(p):h;c?l(p):d&&d(qc({items:p,lookup:f}))},[]),i=Zc(r),a=(0,H.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,B.jsx)(wu.Provider,{value:a,children:e})}function Hy(){let e=(0,H.useContext)(wu);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var By=e=>!!e.panZoom;function Ta(){let e=Ry(),t=we(),n=Hy(),o=me(By),r=(0,H.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},u=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),h=Yc(d)?d:f.get(d.id),b=h.parentId?xa(h.position,h.measured,h.parentId,f,p):h.position,y={...h,position:b,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return Xn(y)},l=(d,f,p={replace:!1})=>{a(h=>h.map(b=>{if(b.id===d){let y=typeof f=="function"?f(b):f;return p.replace&&Yc(y)?y:{...b,...y}}return b}))},c=(d,f,p={replace:!1})=>{s(h=>h.map(b=>{if(b.id===d){let y=typeof f=="function"?f(b):f;return p.replace&&Oy(y)?y:{...b,...y}}return b}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[h,b,y]=p;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:h,y:b,zoom:y}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:h,onNodesDelete:b,onEdgesDelete:y,triggerNodeChanges:g,triggerEdgeChanges:w,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:N,edges:S}=await Kl({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:h,onBeforeDelete:x}),k=S.length>0,C=N.length>0;if(k){let P=S.map(Uc);y?.(S),w(P)}if(C){let P=N.map(Uc);b?.(N),g(P)}return(C||k)&&m?.({nodes:N,edges:S}),{deletedNodes:N,deletedEdges:S}},getIntersectingNodes:(d,f=!0,p)=>{let h=ha(d),b=h?d:u(d),y=p!==void 0;return b?(p||t.getState().nodes).filter(g=>{let w=t.getState().nodeLookup.get(g.id);if(w&&!h&&(g.id===d.id||!w.internals.positionAbsolute))return!1;let m=Xn(y?g:w),x=bo(m,b);return f&&x>0||x>=m.width*m.height||x>=b.width*b.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let b=ha(d)?d:u(d);if(!b)return!1;let y=bo(b,f);return p&&y>0||y>=f.width*f.height||y>=b.width*b.height},updateNode:l,updateNodeData:(d,f,p={replace:!1})=>{l(d,h=>{let b=typeof f=="function"?f(h):f;return p.replace?{...h,data:b}:{...h,data:{...h.data,...b}}},p)},updateEdge:c,updateEdgeData:(d,f,p={replace:!1})=>{c(d,h=>{let b=typeof f=="function"?f(h):f;return p.replace?{...h,data:b}:{...h,data:{...h.data,...b}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return pa(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??Jl();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,H.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Kc=e=>e.selected,Wy=typeof window<"u"?window:void 0;function Fy({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=we(),{deleteElements:o}=Ta(),r=wo(e,{actInsideInputWithModifier:!1}),i=wo(t,{target:Wy});(0,H.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(Kc),edges:a.filter(Kc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,H.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function Vy(e){let t=we();(0,H.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=mr(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Je.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var Ir={position:"absolute",width:"100%",height:"100%",top:0,left:0},Xy=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Gy({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=Tt.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:l,minZoom:c,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:h,noWheelClassName:b,noPanClassName:y,onViewportChange:g,isControlledViewport:w,paneClickDistance:m,selectionOnDrag:x}){let N=we(),S=(0,H.useRef)(null),{userSelectionActive:k,lib:C,connectionInProgress:P}=me(Xy,Ne),L=wo(f),D=(0,H.useRef)();Vy(S);let A=(0,H.useCallback)(_=>{g?.({x:_[0],y:_[1],zoom:_[2]}),w||N.setState({transform:_})},[g,w]);return(0,H.useEffect)(()=>{if(S.current){D.current=wc({domNode:S.current,minZoom:c,maxZoom:d,translateExtent:l,viewport:u,onDraggingChange:E=>N.setState(M=>M.paneDragging===E?M:{paneDragging:E}),onPanZoomStart:(E,M)=>{let{onViewportChangeStart:z,onMoveStart:T}=N.getState();T?.(E,M),z?.(M)},onPanZoom:(E,M)=>{let{onViewportChange:z,onMove:T}=N.getState();T?.(E,M),z?.(M)},onPanZoomEnd:(E,M)=>{let{onViewportChangeEnd:z,onMoveEnd:T}=N.getState();T?.(E,M),z?.(M)}});let{x:_,y:v,zoom:I}=D.current.getViewport();return N.setState({panZoom:D.current,transform:[_,v,I],domNode:S.current.closest(".react-flow")}),()=>{D.current?.destroy()}}},[]),(0,H.useEffect)(()=>{D.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:L,preventScrolling:p,noPanClassName:y,userSelectionActive:k,noWheelClassName:b,lib:C,onTransformChange:A,connectionInProgress:P,selectionOnDrag:x,paneClickDistance:m})},[e,t,n,o,r,i,a,s,L,p,y,k,b,C,A,P,x,m]),(0,B.jsx)("div",{className:"react-flow__renderer",ref:S,style:Ir,children:h})}var qy=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Uy(){let{userSelectionActive:e,userSelectionRect:t}=me(qy,Ne);return e&&t?(0,B.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Ra=(e,t)=>n=>{n.target===t.current&&e?.(n)},Yy=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function Zy({isSelecting:e,selectionKeyPressed:t,selectionMode:n=pn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:u,onPaneClick:l,onPaneContextMenu:c,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:h,children:b}){let y=(0,H.useRef)(0),g=we(),{userSelectionActive:w,elementsSelectable:m,dragging:x,panBy:N,autoPanSpeed:S}=me(Yy,Ne),k=m&&(e||w),C=(0,H.useRef)(null),P=(0,H.useRef)(),L=(0,H.useRef)(new Set),D=(0,H.useRef)(new Set),A=(0,H.useRef)(!1),_=(0,H.useRef)(!1),v=(0,H.useRef)({x:0,y:0}),I=(0,H.useRef)(!1),E=$=>{if(_.current||A.current||g.getState().connection.inProgress){_.current=!1,A.current=!1;return}l?.($),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},M=$=>{if(Array.isArray(o)&&o?.includes(2)){$.preventDefault();return}c?.($)},z=d?$=>d($):void 0,T=$=>{_.current&&($.stopPropagation(),_.current=!1)},V=$=>{let{domNode:Y,transform:re}=g.getState();if(P.current=Y?.getBoundingClientRect(),!P.current)return;let ae=$.target===C.current;if(!ae&&!!$.target.closest(".nokey")||!e||!(a&&ae||t)||$.button!==0||!$.isPrimary)return;$.target?.setPointerCapture?.($.pointerId),_.current=!1;let{x:Q,y:q}=ot($.nativeEvent,P.current),ie=qn({x:Q,y:q},re);g.setState({userSelectionRect:{width:0,height:0,startX:ie.x,startY:ie.y,x:Q,y:q}}),ae||($.stopPropagation(),$.preventDefault())};function W($,Y){let{userSelectionRect:re}=g.getState();if(!re)return;let{transform:ae,nodeLookup:J,edgeLookup:te,connectionLookup:Q,triggerNodeChanges:q,triggerEdgeChanges:ie,defaultEdgeOptions:de}=g.getState(),Ce={x:re.startX,y:re.startY},{x:Pe,y:qe}=gn(Ce,ae),tt={startX:Ce.x,startY:Ce.y,x:$<Pe?$:Pe,y:Y<qe?Y:qe,width:Math.abs($-Pe),height:Math.abs(Y-qe)},Jt=L.current,Nt=D.current;L.current=new Set(ur(J,tt,ae,n===pn.Partial,!0).map(je=>je.id)),D.current=new Set;let Mt=de?.selectable??!0;for(let je of L.current){let st=Q.get(je);if(st)for(let{edgeId:Xe}of st.values()){let Ct=te.get(Xe);Ct&&(Ct.selectable??Mt)&&D.current.add(Xe)}}if(!wa(Jt,L.current)){let je=Zn(J,L.current,!0);q(je)}if(!wa(Nt,D.current)){let je=Zn(te,D.current);ie(je)}g.setState({userSelectionRect:tt,userSelectionActive:!0,nodesSelectionActive:!1})}function R(){if(!r||!P.current)return;let[$,Y]=dr(v.current,P.current,S);N({x:$,y:Y}).then(re=>{if(!_.current||!re){y.current=requestAnimationFrame(R);return}let{x:ae,y:J}=v.current;W(ae,J),y.current=requestAnimationFrame(R)})}let U=()=>{cancelAnimationFrame(y.current),y.current=0,I.current=!1};(0,H.useEffect)(()=>()=>U(),[]);let X=$=>{let{userSelectionRect:Y,transform:re,resetSelectedElements:ae}=g.getState();if(!P.current||!Y)return;let{x:J,y:te}=ot($.nativeEvent,P.current);v.current={x:J,y:te};let Q=gn({x:Y.startX,y:Y.startY},re);if(!_.current){let q=t?0:i;if(Math.hypot(J-Q.x,te-Q.y)<=q)return;ae(),s?.($)}_.current=!0,I.current||(R(),I.current=!0),W(J,te)},Z=$=>{if(!k){$.target===C.current&&g.getState().connection.inProgress&&(A.current=!0);return}$.button===0&&($.target?.releasePointerCapture?.($.pointerId),!w&&$.target===C.current&&g.getState().userSelectionRect&&E?.($),g.setState({userSelectionActive:!1,userSelectionRect:null}),_.current&&(u?.($),g.setState({nodesSelectionActive:L.current.size>0})),U())},ce=$=>{$.target?.releasePointerCapture?.($.pointerId),U()},F=o===!0||Array.isArray(o)&&o.includes(0);return(0,B.jsxs)("div",{className:Ee(["react-flow__pane",{draggable:F,dragging:x,selection:e}]),onClick:k?void 0:Ra(E,C),onContextMenu:Ra(M,C),onWheel:Ra(z,C),onPointerEnter:k?void 0:f,onPointerMove:k?X:p,onPointerUp:Z,onPointerCancel:k?ce:void 0,onPointerDownCapture:k?V:void 0,onClickCapture:k?T:void 0,onPointerLeave:h,ref:C,style:Ir,children:[b,(0,B.jsx)(Uy,{})]})}function Aa({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:u}=t.getState(),l=s.get(e);if(!l){u?.("012",Je.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&a)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function vu({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=we(),[u,l]=(0,H.useState)(!1),c=(0,H.useRef)();return(0,H.useEffect)(()=>{if(!t)return c.current=fc({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{Aa({id:d,store:s,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{c.current?.destroy(),c.current=void 0}},[t,s,e]),(0,H.useEffect)(()=>{t||!e.current||!c.current||c.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),u}var Ky=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function ku(){let e=we();return(0,H.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:u,nodeLookup:l,nodeOrigin:c}=e.getState(),d=new Map,f=Ky(a),p=r?i[0]:5,h=r?i[1]:5,b=n.direction.x*p*n.factor,y=n.direction.y*h*n.factor;for(let[,g]of l){if(!f(g))continue;let w={x:g.internals.positionAbsolute.x+b,y:g.internals.positionAbsolute.y+y};r&&(w=Gn(w,i));let{position:m,positionAbsolute:x}=ma({nodeId:g.id,nextPosition:w,nodeLookup:l,nodeExtent:o,nodeOrigin:c,onError:s});g.position=m,g.internals.positionAbsolute=x,d.set(g.id,g)}u(d)},[])}var Oa=(0,H.createContext)(null),jy=Oa.Provider;Oa.Consumer;var Su=()=>(0,H.useContext)(Oa),Qy=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Nu=(0,H.createContext)(null);function Jy({children:e}){let t=me(Qy,Ne);return(0,B.jsx)(Nu.Provider,{value:t,children:e})}function ex(){let e=(0,H.useContext)(Nu);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var tx={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},nx=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:u,isValid:l}=a;if(!s&&!r)return tx;let c=u?.nodeId===e&&u?.id===t&&u?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:c,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Vt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:c&&l}};function ox({type:e="source",position:t=ne.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:u,className:l,onMouseDown:c,onTouchStart:d,...f},p){let h=a||null,b=e==="target",y=we(),g=Su(),{connectOnClick:w,noPanClassName:m,rfId:x}=ex(),{connectingFrom:N,connectingTo:S,clickConnecting:k,isPossibleEndHandle:C,connectionInProcess:P,clickConnectionInProcess:L,valid:D}=me(nx(g,h,e),Ne);g||y.getState().onError?.("010",Je.error010());let A=I=>{let{defaultEdgeOptions:E,onConnect:M,hasDefaultEdges:z}=y.getState(),T={...E,...I};if(z){let{edges:V,setEdges:W,onError:R}=y.getState();W(Ty(T,V,{onError:R}))}M?.(T),s?.(T)},_=I=>{if(!g)return;let E=Sa(I.nativeEvent);if(r&&(E&&I.button===0||!E)){let M=y.getState();vr.onPointerDown(I.nativeEvent,{handleDomNode:I.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:b,handleId:h,nodeId:g,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...z)=>y.getState().onConnectEnd?.(...z),updateConnection:M.updateConnection,onConnect:A,isValidConnection:n||((...z)=>y.getState().isValidConnection?.(...z)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}E?c?.(I):d?.(I)},v=I=>{let{onClickConnectStart:E,onClickConnectEnd:M,connectionClickStartHandle:z,connectionMode:T,isValidConnection:V,lib:W,rfId:R,nodeLookup:U,connection:X}=y.getState();if(!g||!z&&!r)return;if(!z){E?.(I.nativeEvent,{nodeId:g,handleId:h,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:g,type:e,id:h}});return}let Z=va(I.target),ce=n||V,{connection:F,isValid:$}=vr.isValid(I.nativeEvent,{handle:{nodeId:g,id:h,type:e},connectionMode:T,fromNodeId:z.nodeId,fromHandleId:z.id||null,fromType:z.type,isValidConnection:ce,flowId:R,doc:Z,lib:W,nodeLookup:U});$&&F&&A(F);let Y=structuredClone(X);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,M?.(I,Y),y.setState({connectionClickStartHandle:null})};return(0,B.jsx)("div",{"data-handleid":h,"data-nodeid":g,"data-handlepos":t,"data-id":`${x}-${g}-${h}-${e}`,className:Ee(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,l,{source:!b,target:b,connectable:o,connectablestart:r,connectableend:i,clickconnecting:k,connectingfrom:N,connectingto:S,valid:D,connectionindicator:o&&(!P||C)&&(P||L?i:r)}]),onMouseDown:_,onTouchStart:_,onClick:w?v:void 0,ref:p,...f,children:u})}var yn=(0,H.memo)(yu(ox));function rx({data:e,isConnectable:t,sourcePosition:n=ne.Bottom}){return(0,B.jsxs)(B.Fragment,{children:[e?.label,(0,B.jsx)(yn,{type:"source",position:n,isConnectable:t})]})}function ix({data:e,isConnectable:t,targetPosition:n=ne.Top,sourcePosition:o=ne.Bottom}){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(yn,{type:"target",position:n,isConnectable:t}),e?.label,(0,B.jsx)(yn,{type:"source",position:o,isConnectable:t})]})}function ax(){return null}function sx({data:e,isConnectable:t,targetPosition:n=ne.Top}){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(yn,{type:"target",position:n,isConnectable:t}),e?.label]})}var Cr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},jc={input:rx,default:ix,output:sx,group:ax};function lx(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var cx=e=>{let{width:t,height:n,x:o,y:r}=Vn(e.nodeLookup,{filter:i=>!!i.selected});return{width:nt(t)?t:null,height:nt(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function ux({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=we(),{width:r,height:i,transformString:a,userSelectionActive:s}=me(cx,Ne),u=ku(),l=(0,H.useRef)(null);(0,H.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let c=!s&&r!==null&&i!==null;if(vu({nodeRef:l,disabled:!c}),!c)return null;let d=e?p=>{let h=o.getState().nodes.filter(b=>b.selected);e(p,h)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(Cr,p.key)&&(p.preventDefault(),u({direction:Cr[p.key],factor:p.shiftKey?4:1}))};return(0,B.jsx)("div",{className:Ee(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,B.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var Qc=typeof window<"u"?window:void 0,dx=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Mu({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:u,selectionKeyCode:l,selectionOnDrag:c,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:b,zoomActivationKeyCode:y,elementsSelectable:g,zoomOnScroll:w,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:N,panOnScrollMode:S,zoomOnDoubleClick:k,panOnDrag:C,autoPanOnSelection:P,defaultViewport:L,translateExtent:D,minZoom:A,maxZoom:_,preventScrolling:v,onSelectionContextMenu:I,noWheelClassName:E,noPanClassName:M,disableKeyboardA11y:z,onViewportChange:T,isControlledViewport:V}){let{nodesSelectionActive:W,userSelectionActive:R}=me(dx,Ne),U=wo(l,{target:Qc}),X=wo(b,{target:Qc}),Z=X||C,ce=X||x,F=c&&Z!==!0,$=U||R||F;return Fy({deleteKeyCode:u,multiSelectionKeyCode:h}),(0,B.jsx)(Gy,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:w,zoomOnPinch:m,panOnScroll:ce,panOnScrollSpeed:N,panOnScrollMode:S,zoomOnDoubleClick:k,panOnDrag:!U&&Z,defaultViewport:L,translateExtent:D,minZoom:A,maxZoom:_,zoomActivationKeyCode:y,preventScrolling:v,noWheelClassName:E,noPanClassName:M,onViewportChange:T,isControlledViewport:V,paneClickDistance:s,selectionOnDrag:F,children:(0,B.jsxs)(Zy,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:Z,autoPanOnSelection:P,isSelecting:!!$,selectionMode:d,selectionKeyPressed:U,paneClickDistance:s,selectionOnDrag:F,children:[e,W&&(0,B.jsx)(ux,{onSelectionContextMenu:I,noPanClassName:M,disableKeyboardA11y:z})]})})}Mu.displayName="FlowRenderer";var fx=(0,H.memo)(Mu),px=e=>t=>e?ur(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function mx(e){return me((0,H.useCallback)(px(e),[e]),Ne)}var gx=e=>e.updateNodeInternals;function hx(){let e=me(gx),[t]=(0,H.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,H.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function bx({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=we(),i=(0,H.useRef)(null),a=(0,H.useRef)(null),s=(0,H.useRef)(e.sourcePosition),u=(0,H.useRef)(e.targetPosition),l=(0,H.useRef)(t),c=n&&!!e.internals.handleBounds;return(0,H.useEffect)(()=>{i.current&&!e.hidden&&(!c||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[c,e.hidden]),(0,H.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,H.useEffect)(()=>{if(i.current){let d=l.current!==t,f=s.current!==e.sourcePosition,p=u.current!==e.targetPosition;(d||f||p)&&(l.current=t,s.current=e.sourcePosition,u.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function yx({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:u,nodesConnectable:l,nodesFocusable:c,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:h,rfId:b,nodeTypes:y,nodeClickDistance:g,onError:w}){let{node:m,internals:x,isParent:N}=me($=>{let Y=$.nodeLookup.get(e),re=$.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:re}},Ne),S=m.type||"default",k=y?.[S]||jc[S];k===void 0&&(w?.("003",Je.error003(S)),S="default",k=y?.default||jc.default);let C=!!(m.draggable||s&&typeof m.draggable>"u"),P=!!(m.selectable||u&&typeof m.selectable>"u"),L=!!(m.connectable||l&&typeof m.connectable>"u"),D=!!(m.focusable||c&&typeof m.focusable>"u"),A=we(),_=ya(m),v=bx({node:m,nodeType:S,hasDimensions:_,resizeObserver:d}),I=vu({nodeRef:v,disabled:m.hidden||!C,noDragClassName:f,handleSelector:m.dragHandle,nodeId:e,isSelectable:P,nodeClickDistance:g}),E=ku();if(m.hidden)return null;let M=dt(m),z=lx(m),T=P||C||t||n||o||r,V=n?$=>n($,{...x.userNode}):void 0,W=o?$=>o($,{...x.userNode}):void 0,R=r?$=>r($,{...x.userNode}):void 0,U=i?$=>i($,{...x.userNode}):void 0,X=a?$=>a($,{...x.userNode}):void 0,Z=$=>{let{selectNodesOnDrag:Y,nodeDragThreshold:re}=A.getState();P&&(!Y||!C||re>0)&&Aa({id:e,store:A,nodeRef:v}),t&&t($,{...x.userNode})},ce=$=>{if(!(ka($.nativeEvent)||h)){if(sa.includes($.key)&&P){let Y=$.key==="Escape";Aa({id:e,store:A,unselect:Y,nodeRef:v})}else if(C&&m.selected&&Object.prototype.hasOwnProperty.call(Cr,$.key)){$.preventDefault();let{ariaLabelConfig:Y}=A.getState();A.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:$.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),E({direction:Cr[$.key],factor:$.shiftKey?4:1})}}},F=()=>{if(h||!v.current?.matches(":focus-visible"))return;let{transform:$,width:Y,height:re,autoPanOnNodeFocus:ae,setCenter:J}=A.getState();if(!ae)return;ur(new Map([[e,m]]),{x:0,y:0,width:Y,height:re},$,!0).length>0||J(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:$[2]})};return(0,B.jsx)("div",{className:Ee(["react-flow__node",`react-flow__node-${S}`,{[p]:C},m.className,{selected:m.selected,selectable:P,parent:N,draggable:C,dragging:I}]),ref:v,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:T?"all":"none",visibility:_?"visible":"hidden",...m.style,...z},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:W,onMouseLeave:R,onContextMenu:U,onClick:Z,onDoubleClick:X,onKeyDown:D?ce:void 0,tabIndex:D?0:void 0,onFocus:D?F:void 0,role:m.ariaRole??(D?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${fu}-${b}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,B.jsx)(jy,{value:e,children:(0,B.jsx)(k,{id:e,data:m.data,type:S,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:P,draggable:C,deletable:m.deletable??!0,isConnectable:L,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:I,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...M})})})}var xx=(0,H.memo)(yx),wx=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Cu(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=me(wx,Ne),i=mx(e.onlyRenderVisibleElements),a=hx();return(0,B.jsx)("div",{className:"react-flow__nodes",style:Ir,children:i.map(s=>(0,B.jsx)(xx,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}Cu.displayName="NodeRenderer";var vx=(0,H.memo)(Cu);function kx(e){return me((0,H.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&nc({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),Ne)}var Sx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,B.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Nx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,B.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Jc={[Bn.Arrow]:Sx,[Bn.ArrowClosed]:Nx};function Mx(e){let t=we();return(0,H.useMemo)(()=>Object.prototype.hasOwnProperty.call(Jc,e)?Jc[e]:(t.getState().onError?.("009",Je.error009(e)),null),[e])}var Cx=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let u=Mx(t);return u?(0,B.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,B.jsx)(u,{color:n,strokeWidth:a})}):null},Eu=({defaultColor:e,rfId:t})=>{let n=me(i=>i.edges),o=me(i=>i.defaultEdgeOptions),r=(0,H.useMemo)(()=>ic(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,B.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,B.jsx)("defs",{children:r.map(i=>(0,B.jsx)(Cx,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Eu.displayName="MarkerDefinitions";var Ex=(0,H.memo)(Eu);function _u({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:u,className:l,...c}){let[d,f]=(0,H.useState)({x:1,y:0,width:0,height:0}),p=Ee(["react-flow__edge-textwrapper",l]),h=(0,H.useRef)(null);return(0,H.useEffect)(()=>{if(h.current){let b=h.current.getBBox();f({x:b.x,y:b.y,width:b.width,height:b.height})}},[n]),n?(0,B.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...c,children:[r&&(0,B.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,B.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:h,style:o,children:n}),u]}):null}_u.displayName="EdgeText";var _x=(0,H.memo)(_u);function Pr({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:u,interactionWidth:l=20,...c}){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("path",{...c,d:e,fill:"none",className:Ee(["react-flow__edge-path",c.className])}),l?(0,B.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&nt(t)&&nt(n)?(0,B.jsx)(_x,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:u}):null]})}function eu({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===ne.Left||e===ne.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Iu({sourceX:e,sourceY:t,sourcePosition:n=ne.Bottom,targetX:o,targetY:r,targetPosition:i=ne.Top}){let[a,s]=eu({pos:n,x1:e,y1:t,x2:o,y2:r}),[u,l]=eu({pos:i,x1:o,y1:r,x2:e,y2:t}),[c,d,f,p]=gr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:u,targetControlY:l});return[`M${e},${t} C${a},${s} ${u},${l} ${o},${r}`,c,d,f,p]}function Pu(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:u,labelStyle:l,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:y,interactionWidth:g})=>{let[w,m,x]=Iu({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),N=e.isInternal?void 0:t;return(0,B.jsx)(Pr,{id:N,path:w,labelX:m,labelY:x,label:u,labelStyle:l,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:y,interactionWidth:g})})}var Ix=Pu({isInternal:!1}),zu=Pu({isInternal:!0});Ix.displayName="SimpleBezierEdge";zu.displayName="SimpleBezierEdgeInternal";function Ru(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:c,labelBgBorderRadius:d,style:f,sourcePosition:p=ne.Bottom,targetPosition:h=ne.Top,markerEnd:b,markerStart:y,pathOptions:g,interactionWidth:w})=>{let[m,x,N]=xo({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:h,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),S=e.isInternal?void 0:t;return(0,B.jsx)(Pr,{id:S,path:m,labelX:x,labelY:N,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:b,markerStart:y,interactionWidth:w})})}var Du=Ru({isInternal:!1}),Au=Ru({isInternal:!0});Du.displayName="SmoothStepEdge";Au.displayName="SmoothStepEdgeInternal";function Tu(e){return(0,H.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,B.jsx)(Du,{...n,id:o,pathOptions:(0,H.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Px=Tu({isInternal:!1}),Ou=Tu({isInternal:!0});Px.displayName="StepEdge";Ou.displayName="StepEdgeInternal";function Lu(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:b})=>{let[y,g,w]=br({sourceX:n,sourceY:o,targetX:r,targetY:i}),m=e.isInternal?void 0:t;return(0,B.jsx)(Pr,{id:m,path:y,labelX:g,labelY:w,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:b})})}var zx=Lu({isInternal:!1}),$u=Lu({isInternal:!0});zx.displayName="StraightEdge";$u.displayName="StraightEdgeInternal";function Hu(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=ne.Bottom,targetPosition:s=ne.Top,label:u,labelStyle:l,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:y,pathOptions:g,interactionWidth:w})=>{let[m,x,N]=hr({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:g?.curvature}),S=e.isInternal?void 0:t;return(0,B.jsx)(Pr,{id:S,path:m,labelX:x,labelY:N,label:u,labelStyle:l,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:y,interactionWidth:w})})}var Rx=Hu({isInternal:!1}),Bu=Hu({isInternal:!0});Rx.displayName="BezierEdge";Bu.displayName="BezierEdgeInternal";var tu={default:Bu,straight:$u,step:Ou,smoothstep:Au,simplebezier:zu},nu={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Dx=(e,t,n)=>n===ne.Left?e-t:n===ne.Right?e+t:e,Ax=(e,t,n)=>n===ne.Top?e-t:n===ne.Bottom?e+t:e,ou="react-flow__edgeupdater";function ru({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,B.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:Ee([ou,`${ou}-${s}`]),cx:Dx(t,o,e),cy:Ax(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function Tx({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:u,onReconnect:l,onReconnectStart:c,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let h=we(),b=(x,N)=>{if(x.button!==0)return;let{autoPanOnConnect:S,domNode:k,connectionMode:C,connectionRadius:P,lib:L,onConnectStart:D,cancelConnection:A,nodeLookup:_,rfId:v,panBy:I,updateConnection:E}=h.getState(),M=N.type==="target",z=(W,R)=>{f(!1),d?.(W,n,N.type,R)},T=W=>l?.(n,W),V=(W,R)=>{f(!0),c?.(x,n,N.type),D?.(W,R)};vr.onPointerDown(x.nativeEvent,{autoPanOnConnect:S,connectionMode:C,connectionRadius:P,domNode:k,handleId:N.id,nodeId:N.nodeId,nodeLookup:_,isTarget:M,edgeUpdaterType:N.type,lib:L,flowId:v,cancelConnection:A,panBy:I,isValidConnection:(...W)=>h.getState().isValidConnection?.(...W)??!0,onConnect:T,onConnectStart:V,onConnectEnd:(...W)=>h.getState().onConnectEnd?.(...W),onReconnectEnd:z,updateConnection:E,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},y=x=>b(x,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=x=>b(x,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),w=()=>p(!0),m=()=>p(!1);return(0,B.jsxs)(B.Fragment,{children:[(e===!0||e==="source")&&(0,B.jsx)(ru,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:y,onMouseEnter:w,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,B.jsx)(ru,{position:u,centerX:i,centerY:a,radius:t,onMouseDown:g,onMouseEnter:w,onMouseOut:m,type:"target"})]})}function Ox({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:u,onMouseLeave:l,reconnectRadius:c,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:h,edgeTypes:b,noPanClassName:y,onError:g,disableKeyboardA11y:w}){let m=me(J=>J.edgeLookup.get(e)),x=me(J=>J.defaultEdgeOptions);m=x?{...x,...m}:m;let N=m.type||"default",S=b?.[N]||tu[N];S===void 0&&(g?.("011",Je.error011(N)),N="default",S=b?.default||tu.default);let k=!!(m.focusable||t&&typeof m.focusable>"u"),C=typeof d<"u"&&(m.reconnectable||n&&typeof m.reconnectable>"u"),P=!!(m.selectable||o&&typeof m.selectable>"u"),L=(0,H.useRef)(null),[D,A]=(0,H.useState)(!1),[_,v]=(0,H.useState)(!1),I=we(),{zIndex:E=m.zIndex,sourceX:M,sourceY:z,targetX:T,targetY:V,sourcePosition:W,targetPosition:R}=me((0,H.useCallback)(J=>{let te=J.nodeLookup.get(m.source),Q=J.nodeLookup.get(m.target);if(!te||!Q)return nu;let q=rc({id:e,sourceNode:te,targetNode:Q,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:J.connectionMode,onError:g}),ie=tc({selected:m.selected,zIndex:m.zIndex,sourceNode:te,targetNode:Q,elevateOnSelect:J.elevateEdgesOnSelect,zIndexMode:J.zIndexMode});return{...q||nu,zIndex:ie}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex]),Ne),U=(0,H.useMemo)(()=>m.markerStart?`url('#${yr(m.markerStart,h)}')`:void 0,[m.markerStart,h]),X=(0,H.useMemo)(()=>m.markerEnd?`url('#${yr(m.markerEnd,h)}')`:void 0,[m.markerEnd,h]);if(m.hidden||M===null||z===null||T===null||V===null)return null;let Z=J=>{let{addSelectedEdges:te,unselectNodesAndEdges:Q,multiSelectionActive:q}=I.getState();P&&(I.setState({nodesSelectionActive:!1}),m.selected&&q?(Q({nodes:[],edges:[m]}),L.current?.blur()):te([e])),r&&r(J,m)},ce=i?J=>{i(J,{...m})}:void 0,F=a?J=>{a(J,{...m})}:void 0,$=s?J=>{s(J,{...m})}:void 0,Y=u?J=>{u(J,{...m})}:void 0,re=l?J=>{l(J,{...m})}:void 0,ae=J=>{if(!w&&sa.includes(J.key)&&P){let{unselectNodesAndEdges:te,addSelectedEdges:Q}=I.getState();J.key==="Escape"?(L.current?.blur(),te({edges:[m]})):Q([e])}};return(0,B.jsx)("svg",{style:{zIndex:E},children:(0,B.jsxs)("g",{className:Ee(["react-flow__edge",`react-flow__edge-${N}`,m.className,y,{selected:m.selected,animated:m.animated,inactive:!P&&!r,updating:D,selectable:P}]),onClick:Z,onDoubleClick:ce,onContextMenu:F,onMouseEnter:$,onMouseMove:Y,onMouseLeave:re,onKeyDown:k?ae:void 0,tabIndex:k?0:void 0,role:m.ariaRole??(k?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":k?`${pu}-${h}`:void 0,ref:L,...m.domAttributes,children:[!_&&(0,B.jsx)(S,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:P,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:z,targetX:T,targetY:V,sourcePosition:W,targetPosition:R,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:U,markerEnd:X,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),C&&(0,B.jsx)(Tx,{edge:m,isReconnectable:C,reconnectRadius:c,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:M,sourceY:z,targetX:T,targetY:V,sourcePosition:W,targetPosition:R,setUpdateHover:A,setReconnecting:v})]})})}var Lx=(0,H.memo)(Ox),$x=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Wu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:u,onEdgeMouseLeave:l,onEdgeClick:c,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:b}){let{edgesFocusable:y,edgesReconnectable:g,elementsSelectable:w,onError:m}=me($x,Ne),x=kx(t);return(0,B.jsxs)("div",{className:"react-flow__edges",children:[(0,B.jsx)(Ex,{defaultColor:e,rfId:n}),x.map(N=>(0,B.jsx)(Lx,{id:N,edgesFocusable:y,edgesReconnectable:g,elementsSelectable:w,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:u,onMouseLeave:l,onClick:c,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,rfId:n,onError:m,edgeTypes:o,disableKeyboardA11y:b},N))]})}Wu.displayName="EdgeRenderer";var Hx=(0,H.memo)(Wu),iu=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Bx({children:e}){let t=we(),n=(0,H.useRef)(null),[o]=(0,H.useState)(()=>t.getState().transform);return xu(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=iu(a)))};return i(),t.subscribe(i)},[t]),(0,B.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:iu(o)},children:e})}function Wx(e){let t=Ta(),n=(0,H.useRef)(!1);(0,H.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Fx=e=>e.panZoom?.syncViewport;function Vx(e){let t=me(Fx),n=we();return(0,H.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function au(e){return e.connection.inProgress?{...e.connection,to:qn(e.connection.to,e.transform)}:{...e.connection}}function Xx(e){return e?n=>{let o=au(n);return e(o)}:au}function Gx(e){let t=Xx(e);return me(t,Ne)}var qx=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Ux({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:u}=me(qx,Ne);return!(i&&r&&u)?null:(0,B.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,B.jsx)("g",{className:Ee(["react-flow__connection",ua(s)]),children:(0,B.jsx)(Fu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var Fu=({style:e,type:t=ht.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:u,to:l,toNode:c,toHandle:d,toPosition:f,pointer:p}=Gx();if(!r)return;if(n)return(0,B.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:u,toPosition:f,connectionStatus:ua(o),toNode:c,toHandle:d,pointer:p});let h="",b={sourceX:i.x,sourceY:i.y,sourcePosition:u,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case ht.Bezier:[h]=hr(b);break;case ht.SimpleBezier:[h]=Iu(b);break;case ht.Step:[h]=xo({...b,borderRadius:0});break;case ht.SmoothStep:[h]=xo(b);break;default:[h]=br(b)}return(0,B.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};Fu.displayName="ConnectionLine";var Yx={};function su(e=Yx){let t=(0,H.useRef)(e),n=we();(0,H.useEffect)(()=>{},[e])}function Zx(){let e=we(),t=(0,H.useRef)(!1);(0,H.useEffect)(()=>{},[])}function Vu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:u,onNodeMouseLeave:l,onNodeContextMenu:c,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:b,connectionLineComponent:y,connectionLineContainerStyle:g,selectionKeyCode:w,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:N,panActivationKeyCode:S,zoomActivationKeyCode:k,deleteKeyCode:C,onlyRenderVisibleElements:P,elementsSelectable:L,defaultViewport:D,translateExtent:A,minZoom:_,maxZoom:v,preventScrolling:I,defaultMarkerColor:E,zoomOnScroll:M,zoomOnPinch:z,panOnScroll:T,panOnScrollSpeed:V,panOnScrollMode:W,zoomOnDoubleClick:R,panOnDrag:U,autoPanOnSelection:X,onPaneClick:Z,onPaneMouseEnter:ce,onPaneMouseMove:F,onPaneMouseLeave:$,onPaneScroll:Y,onPaneContextMenu:re,paneClickDistance:ae,nodeClickDistance:J,onEdgeContextMenu:te,onEdgeMouseEnter:Q,onEdgeMouseMove:q,onEdgeMouseLeave:ie,reconnectRadius:de,onReconnect:Ce,onReconnectStart:Pe,onReconnectEnd:qe,noDragClassName:tt,noWheelClassName:Jt,noPanClassName:Nt,disableKeyboardA11y:Mt,nodeExtent:je,rfId:st,viewport:Xe,onViewportChange:Ct,nodesDraggable:en}){return su(e),su(t),Zx(),Wx(n),Vx(Xe),(0,B.jsx)(fx,{onPaneClick:Z,onPaneMouseEnter:ce,onPaneMouseMove:F,onPaneMouseLeave:$,onPaneContextMenu:re,onPaneScroll:Y,paneClickDistance:ae,deleteKeyCode:C,selectionKeyCode:w,selectionOnDrag:m,selectionMode:x,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:N,panActivationKeyCode:S,zoomActivationKeyCode:k,elementsSelectable:L,zoomOnScroll:M,zoomOnPinch:z,zoomOnDoubleClick:R,panOnScroll:T,panOnScrollSpeed:V,panOnScrollMode:W,panOnDrag:U,autoPanOnSelection:X,defaultViewport:D,translateExtent:A,minZoom:_,maxZoom:v,onSelectionContextMenu:d,preventScrolling:I,noDragClassName:tt,noWheelClassName:Jt,noPanClassName:Nt,disableKeyboardA11y:Mt,onViewportChange:Ct,isControlledViewport:!!Xe,children:(0,B.jsxs)(Bx,{children:[(0,B.jsx)(Hx,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:Ce,onReconnectStart:Pe,onReconnectEnd:qe,onlyRenderVisibleElements:P,onEdgeContextMenu:te,onEdgeMouseEnter:Q,onEdgeMouseMove:q,onEdgeMouseLeave:ie,reconnectRadius:de,defaultMarkerColor:E,noPanClassName:Nt,disableKeyboardA11y:Mt,rfId:st}),(0,B.jsx)(Ux,{style:b,type:h,component:y,containerStyle:g}),(0,B.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,B.jsx)(vx,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:u,onNodeMouseLeave:l,onNodeContextMenu:c,nodeClickDistance:J,onlyRenderVisibleElements:P,noPanClassName:Nt,noDragClassName:tt,disableKeyboardA11y:Mt,nodeExtent:je,rfId:st,nodesDraggable:en}),(0,B.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Vu.displayName="GraphView";var Kx=(0,H.memo)(Vu),jx=ba("React Flow","https://reactflow.dev/"),lu=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:u=.5,maxZoom:l=2,nodeOrigin:c,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,h=new Map,b=new Map,y=new Map,g=o??t??[],w=n??e??[],m=c??[0,0],x=d??Fn;Ia(b,y,g);let{nodesInitialized:N}=xr(w,p,h,{nodeOrigin:m,nodeExtent:x,zIndexMode:f}),S=[0,0,1];if(a&&r&&i){let k=Vn(p,{filter:D=>!!((D.width||D.initialWidth)&&(D.height||D.initialHeight))}),{x:C,y:P,zoom:L}=yo(k,r,i,u,l,s?.padding??.1);S=[C,P,L]}return{rfId:"1",width:r??0,height:i??0,transform:S,nodes:w,nodesInitialized:N,nodeLookup:p,parentLookup:h,edges:g,edgeLookup:y,connectionLookup:b,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:u,maxZoom:l,translateExtent:Fn,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Vt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...ca},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:jx,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:la,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},Qx=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:u,maxZoom:l,nodeOrigin:c,nodeExtent:d,zIndexMode:f})=>Lc((p,h)=>{async function b(){let{nodeLookup:y,panZoom:g,fitViewOptions:w,fitViewResolver:m,width:x,height:N,minZoom:S,maxZoom:k}=h();g&&(await Zl({nodes:y,width:x,height:N,panZoom:g,minZoom:S,maxZoom:k},w),m?.resolve(!0),p({fitViewResolver:null}))}return{...lu({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:u,maxZoom:l,nodeOrigin:c,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:y=>{let{nodeLookup:g,parentLookup:w,nodeOrigin:m,elevateNodesOnSelect:x,fitViewQueued:N,zIndexMode:S,nodesSelectionActive:k}=h(),{nodesInitialized:C,hasSelectedNodes:P}=xr(y,g,w,{nodeOrigin:m,nodeExtent:d,elevateNodesOnSelect:x,checkEquality:!0,zIndexMode:S}),L=k&&P;N&&C?(b(),p({nodes:y,nodesInitialized:C,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:L})):p({nodes:y,nodesInitialized:C,nodesSelectionActive:L})},setEdges:y=>{let{connectionLookup:g,edgeLookup:w}=h();Ia(g,w,y),p({edges:y})},setDefaultNodesAndEdges:(y,g)=>{if(y){let{setNodes:w}=h();w(y),p({hasDefaultNodes:!0})}if(g){let{setEdges:w}=h();w(g),p({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:g,nodeLookup:w,parentLookup:m,domNode:x,nodeOrigin:N,nodeExtent:S,debug:k,fitViewQueued:C,zIndexMode:P}=h(),{changes:L,updatedInternals:D}=cc(y,w,m,x,N,S,P);D&&(sc(w,m,{nodeOrigin:N,nodeExtent:S,zIndexMode:P}),C?(b(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),L?.length>0&&(k&&console.log("React Flow: trigger node changes",L),g?.(L)))},updateNodePositions:(y,g=!1)=>{let w=[],m=[],{nodeLookup:x,triggerNodeChanges:N,connection:S,updateConnection:k,onNodesChangeMiddlewareMap:C}=h();for(let[P,L]of y){let D=x.get(P),A=!!(D?.expandParent&&D?.parentId&&L?.position),_={id:P,type:"position",position:A?{x:Math.max(0,L.position.x),y:Math.max(0,L.position.y)}:L.position,dragging:g};if(D&&S.inProgress&&S.fromNode.id===D.id){let v=Xt(D,S.fromHandle,ne.Left,!0);k({...S,from:v})}A&&D.parentId&&w.push({id:P,parentId:D.parentId,rect:{...L.internals.positionAbsolute,width:L.measured.width??0,height:L.measured.height??0}}),m.push(_)}if(w.length>0){let{parentLookup:P,nodeOrigin:L}=h(),D=wr(w,x,P,L);m.push(...D)}for(let P of C.values())m=P(m);N(m)},triggerNodeChanges:y=>{let{onNodesChange:g,setNodes:w,nodes:m,hasDefaultNodes:x,debug:N}=h();if(y?.length){if(x){let S=hu(y,m);w(S)}N&&console.log("React Flow: trigger node changes",y),g?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:g,setEdges:w,edges:m,hasDefaultEdges:x,debug:N}=h();if(y?.length){if(x){let S=bu(y,m);w(S)}N&&console.log("React Flow: trigger edge changes",y),g?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:g,edgeLookup:w,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:N}=h();if(g){let S=y.map(k=>bn(k,!0));x(S);return}x(Zn(m,new Set([...y]),!0)),N(Zn(w))},addSelectedEdges:y=>{let{multiSelectionActive:g,edgeLookup:w,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:N}=h();if(g){let S=y.map(k=>bn(k,!0));N(S);return}N(Zn(w,new Set([...y]))),x(Zn(m,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:g}={})=>{let{edges:w,nodes:m,nodeLookup:x,triggerNodeChanges:N,triggerEdgeChanges:S}=h(),k=y||m,C=g||w,P=[];for(let D of k){if(!D.selected)continue;let A=x.get(D.id);A&&(A.selected=!1),P.push(bn(D.id,!1))}let L=[];for(let D of C)D.selected&&L.push(bn(D.id,!1));N(P),S(L)},setMinZoom:y=>{let{panZoom:g,maxZoom:w}=h();g?.setScaleExtent([y,w]),p({minZoom:y})},setMaxZoom:y=>{let{panZoom:g,minZoom:w}=h();g?.setScaleExtent([w,y]),p({maxZoom:y})},setTranslateExtent:y=>{h().panZoom?.setTranslateExtent(y),p({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:g,triggerNodeChanges:w,triggerEdgeChanges:m,elementsSelectable:x}=h();if(!x)return;let N=g.reduce((k,C)=>C.selected?[...k,bn(C.id,!1)]:k,[]),S=y.reduce((k,C)=>C.selected?[...k,bn(C.id,!1)]:k,[]);w(N),m(S)},setNodeExtent:y=>{let{nodes:g,nodeLookup:w,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:N,nodeExtent:S,zIndexMode:k}=h();y[0][0]===S[0][0]&&y[0][1]===S[0][1]&&y[1][0]===S[1][0]&&y[1][1]===S[1][1]||(xr(g,w,m,{nodeOrigin:x,nodeExtent:y,elevateNodesOnSelect:N,checkEquality:!1,zIndexMode:k}),p({nodeExtent:y}))},panBy:y=>{let{transform:g,width:w,height:m,panZoom:x,translateExtent:N}=h();return uc({delta:y,panZoom:x,transform:g,translateExtent:N,width:w,height:m})},setCenter:async(y,g,w)=>{let{width:m,height:x,maxZoom:N,panZoom:S}=h();if(!S)return!1;let k=typeof w?.zoom<"u"?w.zoom:N;return await S.setViewport({x:m/2-y*k,y:x/2-g*k,zoom:k},{duration:w?.duration,ease:w?.ease,interpolate:w?.interpolate}),!0},cancelConnection:()=>{p({connection:{...ca}})},updateConnection:y=>{p({connection:y})},reset:()=>p({...lu()})}},Object.is);function Jx({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:u,fitView:l,nodeOrigin:c,nodeExtent:d,zIndexMode:f,children:p}){let[h]=(0,H.useState)(()=>Qx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:a,maxZoom:s,fitViewOptions:u,nodeOrigin:c,nodeExtent:d,zIndexMode:f}));return(0,B.jsx)(my,{value:h,children:(0,B.jsx)($y,{children:(0,B.jsx)(Jy,{children:p})})})}function ew({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:u,minZoom:l,maxZoom:c,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,H.useContext)(Er)?(0,B.jsx)(B.Fragment,{children:e}):(0,B.jsx)(Jx,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:u,initialMinZoom:l,initialMaxZoom:c,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var tw={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function nw({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:u,onInit:l,onMove:c,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:h,onConnectEnd:b,onClickConnectStart:y,onClickConnectEnd:g,onNodeMouseEnter:w,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:N,onNodeDoubleClick:S,onNodeDragStart:k,onNodeDrag:C,onNodeDragStop:P,onNodesDelete:L,onEdgesDelete:D,onDelete:A,onSelectionChange:_,onSelectionDragStart:v,onSelectionDrag:I,onSelectionDragStop:E,onSelectionContextMenu:M,onSelectionStart:z,onSelectionEnd:T,onBeforeDelete:V,connectionMode:W,connectionLineType:R=ht.Bezier,connectionLineStyle:U,connectionLineComponent:X,connectionLineContainerStyle:Z,deleteKeyCode:ce="Backspace",selectionKeyCode:F="Shift",selectionOnDrag:$=!1,selectionMode:Y=pn.Full,panActivationKeyCode:re="Space",multiSelectionKeyCode:ae=Un()?"Meta":"Control",zoomActivationKeyCode:J=Un()?"Meta":"Control",snapToGrid:te,snapGrid:Q,onlyRenderVisibleElements:q=!1,selectNodesOnDrag:ie,nodesDraggable:de,autoPanOnNodeFocus:Ce,nodesConnectable:Pe,nodesFocusable:qe,nodeOrigin:tt=mu,edgesFocusable:Jt,edgesReconnectable:Nt,elementsSelectable:Mt=!0,defaultViewport:je=Ey,minZoom:st=.5,maxZoom:Xe=2,translateExtent:Ct=Fn,preventScrolling:en=!0,nodeExtent:Cn,defaultMarkerColor:Jn="#b1b1b7",zoomOnScroll:_o=!0,zoomOnPinch:Ht=!0,panOnScroll:En=!1,panOnScrollSpeed:Le=.5,panOnScrollMode:Io=Tt.Free,zoomOnDoubleClick:Po=!0,panOnDrag:zo=!0,onPaneClick:si,onPaneMouseEnter:li,onPaneMouseMove:ci,onPaneMouseLeave:ui,onPaneScroll:di,onPaneContextMenu:fi,paneClickDistance:pi=1,nodeClickDistance:mi=0,children:gi,onReconnect:tn,onReconnectStart:Et,onReconnectEnd:Ro,onEdgeContextMenu:_t,onEdgeDoubleClick:It,onEdgeMouseEnter:hi,onEdgeMouseMove:Do,onEdgeMouseLeave:_n,reconnectRadius:Ao=10,onNodesChange:bi,onEdgesChange:yi,noDragClassName:O="nodrag",noWheelClassName:G="nowheel",noPanClassName:j="nopan",fitView:le,fitViewOptions:Se,connectOnClick:nn,attributionPosition:on,proOptions:nm,defaultEdgeOptions:om,elevateNodesOnSelect:rm=!0,elevateEdgesOnSelect:im=!1,disableKeyboardA11y:vs=!1,autoPanOnConnect:am,autoPanOnNodeDrag:sm,autoPanOnSelection:lm=!0,autoPanSpeed:cm,connectionRadius:um,isValidConnection:dm,onError:fm,style:pm,id:ks,nodeDragThreshold:mm,connectionDragThreshold:gm,viewport:hm,onViewportChange:bm,width:ym,height:xm,colorMode:wm="light",debug:vm,onScroll:Ss,ariaLabelConfig:km,zIndexMode:Ns="basic",...Sm},Nm){let xi=ks||"1",Mm=zy(wm),Cm=(0,H.useCallback)(Ms=>{Ms.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Ss?.(Ms)},[Ss]);return(0,B.jsx)("div",{"data-testid":"rf__wrapper",...Sm,onScroll:Cm,style:{...pm,...tw},ref:Nm,className:Ee(["react-flow",r,Mm]),id:ks,role:"application",children:(0,B.jsxs)(ew,{nodes:e,edges:t,width:ym,height:xm,fitView:le,fitViewOptions:Se,minZoom:st,maxZoom:Xe,nodeOrigin:tt,nodeExtent:Cn,zIndexMode:Ns,children:[(0,B.jsx)(Py,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:b,onClickConnectStart:y,onClickConnectEnd:g,nodesDraggable:de,autoPanOnNodeFocus:Ce,nodesConnectable:Pe,nodesFocusable:qe,edgesFocusable:Jt,edgesReconnectable:Nt,elementsSelectable:Mt,elevateNodesOnSelect:rm,elevateEdgesOnSelect:im,minZoom:st,maxZoom:Xe,nodeExtent:Cn,onNodesChange:bi,onEdgesChange:yi,snapToGrid:te,snapGrid:Q,connectionMode:W,translateExtent:Ct,connectOnClick:nn,defaultEdgeOptions:om,fitView:le,fitViewOptions:Se,onNodesDelete:L,onEdgesDelete:D,onDelete:A,onNodeDragStart:k,onNodeDrag:C,onNodeDragStop:P,onSelectionDrag:I,onSelectionDragStart:v,onSelectionDragStop:E,onMove:c,onMoveStart:d,onMoveEnd:f,noPanClassName:j,nodeOrigin:tt,rfId:xi,autoPanOnConnect:am,autoPanOnNodeDrag:sm,autoPanSpeed:cm,onError:fm,connectionRadius:um,isValidConnection:dm,selectNodesOnDrag:ie,nodeDragThreshold:mm,connectionDragThreshold:gm,onBeforeDelete:V,debug:vm,ariaLabelConfig:km,zIndexMode:Ns}),(0,B.jsx)(Kx,{onInit:l,onNodeClick:s,onEdgeClick:u,onNodeMouseEnter:w,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:N,onNodeDoubleClick:S,nodeTypes:i,edgeTypes:a,connectionLineType:R,connectionLineStyle:U,connectionLineComponent:X,connectionLineContainerStyle:Z,selectionKeyCode:F,selectionOnDrag:$,selectionMode:Y,deleteKeyCode:ce,multiSelectionKeyCode:ae,panActivationKeyCode:re,zoomActivationKeyCode:J,onlyRenderVisibleElements:q,defaultViewport:je,translateExtent:Ct,minZoom:st,maxZoom:Xe,preventScrolling:en,zoomOnScroll:_o,zoomOnPinch:Ht,zoomOnDoubleClick:Po,panOnScroll:En,panOnScrollSpeed:Le,panOnScrollMode:Io,panOnDrag:zo,autoPanOnSelection:lm,onPaneClick:si,onPaneMouseEnter:li,onPaneMouseMove:ci,onPaneMouseLeave:ui,onPaneScroll:di,onPaneContextMenu:fi,paneClickDistance:pi,nodeClickDistance:mi,onSelectionContextMenu:M,onSelectionStart:z,onSelectionEnd:T,onReconnect:tn,onReconnectStart:Et,onReconnectEnd:Ro,onEdgeContextMenu:_t,onEdgeDoubleClick:It,onEdgeMouseEnter:hi,onEdgeMouseMove:Do,onEdgeMouseLeave:_n,reconnectRadius:Ao,defaultMarkerColor:Jn,noDragClassName:O,noWheelClassName:G,noPanClassName:j,rfId:xi,disableKeyboardA11y:vs,nodeExtent:Cn,viewport:hm,onViewportChange:bm,nodesDraggable:de}),(0,B.jsx)(Cy,{onSelectionChange:_}),gi,(0,B.jsx)(vy,{proOptions:nm,position:on}),(0,B.jsx)(wy,{rfId:xi,disableKeyboardA11y:vs})]})})}var Xu=yu(nw);var ow=e=>e.domNode?.querySelector(".react-flow__viewport-portal");function Gu({children:e}){let t=me(ow);return t?(0,uu.createPortal)(e,t):null}function qu(e){let[t,n]=(0,H.useState)(e),o=(0,H.useCallback)(r=>n(i=>hu(r,i)),[]);return[t,n,o]}function Uu(e){let[t,n]=(0,H.useState)(e),o=(0,H.useCallback)(r=>n(i=>bu(r,i)),[]);return[t,n,o]}var $k=Je.error014();function rw({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,B.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Ee(["react-flow__background-pattern",n,o])})}function iw({radius:e,className:t}){return(0,B.jsx)("circle",{cx:e,cy:e,r:e,className:Ee(["react-flow__background-pattern","dots",t])})}var bt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(bt||(bt={}));var aw={[bt.Dots]:1,[bt.Lines]:1,[bt.Cross]:6},sw=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Yu({id:e,variant:t=bt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:u,className:l,patternClassName:c}){let d=(0,H.useRef)(null),{transform:f,patternId:p}=me(sw,Ne),h=o||aw[t],b=t===bt.Dots,y=t===bt.Cross,g=Array.isArray(n)?n:[n,n],w=[g[0]*f[2]||1,g[1]*f[2]||1],m=h*f[2],x=Array.isArray(i)?i:[i,i],N=y?[m,m]:w,S=[x[0]*f[2]||1+N[0]/2,x[1]*f[2]||1+N[1]/2],k=`${p}${e||""}`;return(0,B.jsxs)("svg",{className:Ee(["react-flow__background",l]),style:{...u,...Ir,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,B.jsx)("pattern",{id:k,x:f[0]%w[0],y:f[1]%w[1],width:w[0],height:w[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:b?(0,B.jsx)(iw,{radius:m/2,className:c}):(0,B.jsx)(rw,{dimensions:N,lineWidth:r,variant:t,className:c})}),(0,B.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${k})`})]})}Yu.displayName="Background";var Zu=(0,H.memo)(Yu);function lw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,B.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function cw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,B.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function uw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,B.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function dw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,B.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function fw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,B.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Mr({children:e,className:t,...n}){return(0,B.jsx)("button",{type:"button",className:Ee(["react-flow__controls-button",t]),...n,children:e})}var pw=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function Ku({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:u,className:l,children:c,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let h=we(),{isInteractive:b,minZoomReached:y,maxZoomReached:g,ariaLabelConfig:w}=me(pw,Ne),{zoomIn:m,zoomOut:x,fitView:N}=Ta(),S=()=>{m(),i?.()},k=()=>{x(),a?.()},C=()=>{N(r),s?.()},P=()=>{h.setState({nodesDraggable:!b,nodesConnectable:!b,elementsSelectable:!b}),u?.(!b)};return(0,B.jsxs)(_r,{className:Ee(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",l]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??w["controls.ariaLabel"],children:[t&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Mr,{onClick:S,className:"react-flow__controls-zoomin",title:w["controls.zoomIn.ariaLabel"],"aria-label":w["controls.zoomIn.ariaLabel"],disabled:g,children:(0,B.jsx)(lw,{})}),(0,B.jsx)(Mr,{onClick:k,className:"react-flow__controls-zoomout",title:w["controls.zoomOut.ariaLabel"],"aria-label":w["controls.zoomOut.ariaLabel"],disabled:y,children:(0,B.jsx)(cw,{})})]}),n&&(0,B.jsx)(Mr,{className:"react-flow__controls-fitview",onClick:C,title:w["controls.fitView.ariaLabel"],"aria-label":w["controls.fitView.ariaLabel"],children:(0,B.jsx)(uw,{})}),o&&(0,B.jsx)(Mr,{className:"react-flow__controls-interactive",onClick:P,title:w["controls.interactive.ariaLabel"],"aria-label":w["controls.interactive.ariaLabel"],children:b?(0,B.jsx)(fw,{}):(0,B.jsx)(dw,{})}),c]})}Ku.displayName="Controls";var Hk=(0,H.memo)(Ku);function mw({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:u,className:l,borderRadius:c,shapeRendering:d,selected:f,onClick:p}){let{background:h,backgroundColor:b}=i||{},y=a||h||b;return(0,B.jsx)("rect",{className:Ee(["react-flow__minimap-node",{selected:f},l]),x:t,y:n,rx:c,ry:c,width:o,height:r,style:{fill:y,stroke:s,strokeWidth:u},shapeRendering:d,onClick:p?g=>p(g,e):void 0})}var gw=(0,H.memo)(mw),hw=e=>e.nodes.map(t=>t.id),Da=e=>e instanceof Function?e:()=>e;function bw({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=gw,onClick:a}){let s=me(hw,Ne),u=Da(t),l=Da(e),c=Da(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,B.jsx)(B.Fragment,{children:s.map(f=>(0,B.jsx)(xw,{id:f,nodeColorFunc:u,nodeStrokeColorFunc:l,nodeClassNameFunc:c,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function yw({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:u}){let{node:l,x:c,y:d,width:f,height:p}=me(h=>{let b=h.nodeLookup.get(e);if(!b)return{node:void 0,x:0,y:0,width:0,height:0};let y=b.internals.userNode,{x:g,y:w}=b.internals.positionAbsolute,{width:m,height:x}=dt(y);return{node:y,x:g,y:w,width:m,height:x}},Ne);return!l||l.hidden||!ya(l)?null:(0,B.jsx)(s,{x:c,y:d,width:f,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:a,onClick:u,id:l.id})}var xw=(0,H.memo)(yw),ww=(0,H.memo)(bw),vw=200,kw=150,Sw=e=>!e.hidden,Nw=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?ga(Vn(e.nodeLookup,{filter:Sw}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},cu=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Mw=(e,t)=>cu(e.viewBB,t.viewBB)&&cu(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Cw="react-flow__minimap-desc";function ju({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:u,maskColor:l,maskStrokeColor:c,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:h,pannable:b=!1,zoomable:y=!1,ariaLabel:g,inversePan:w,zoomStep:m=1,offsetScale:x=5}){let N=we(),S=(0,H.useRef)(null),{boundingRect:k,viewBB:C,rfId:P,panZoom:L,translateExtent:D,flowWidth:A,flowHeight:_,ariaLabelConfig:v}=me(Nw,Mw),I=e?.width??vw,E=e?.height??kw,M=k.width/I,z=k.height/E,T=Math.max(M,z),V=T*I,W=T*E,R=x*T,U=k.x-(V-k.width)/2-R,X=k.y-(W-k.height)/2-R,Z=V+R*2,ce=W+R*2,F=`${Cw}-${P}`,$=(0,H.useRef)(0),Y=(0,H.useRef)();$.current=T,(0,H.useEffect)(()=>{if(S.current&&L)return Y.current=bc({domNode:S.current,panZoom:L,getTransform:()=>N.getState().transform,getViewScale:()=>$.current}),()=>{Y.current?.destroy()}},[L]),(0,H.useEffect)(()=>{Y.current?.update({translateExtent:D,width:A,height:_,inversePan:w,pannable:b,zoomStep:m,zoomable:y})},[b,y,w,m,D,A,_]);let re=p?te=>{let[Q,q]=Y.current?.pointer(te)||[0,0];p(te,{x:Q,y:q})}:void 0,ae=h?(0,H.useCallback)((te,Q)=>{let q=N.getState().nodeLookup.get(Q).internals.userNode;h(te,q)},[]):void 0,J=g??v["minimap.ariaLabel"];return(0,B.jsx)(_r,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*T:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:Ee(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,B.jsxs)("svg",{width:I,height:E,viewBox:`${U} ${X} ${Z} ${ce}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":F,ref:S,onClick:re,children:[J&&(0,B.jsx)("title",{id:F,children:J}),(0,B.jsx)(ww,{onClick:ae,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,B.jsx)("path",{className:"react-flow__minimap-mask",d:`M${U-R},${X-R}h${Z+R*2}v${ce+R*2}h${-Z-R*2}z
        M${C.x},${C.y}h${C.width}v${C.height}h${-C.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}ju.displayName="MiniMap";var Qu=(0,H.memo)(ju),Ew=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,_w={[Gt.Line]:"right",[Gt.Handle]:"bottom-right"};function Iw({nodeId:e,position:t,variant:n=Gt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:u=10,maxWidth:l=Number.MAX_VALUE,maxHeight:c=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:h,onResizeStart:b,onResize:y,onResizeEnd:g}){let w=Su(),m=typeof e=="string"?e:w,x=we(),N=(0,H.useRef)(null),S=n===Gt.Handle,k=me((0,H.useCallback)(Ew(S&&p),[S,p]),Ne),C=(0,H.useRef)(null),P=t??_w[n];(0,H.useEffect)(()=>{if(!(!N.current||!m))return C.current||(C.current=kc({domNode:N.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:D,transform:A,snapGrid:_,snapToGrid:v,nodeOrigin:I,domNode:E}=x.getState();return{nodeLookup:D,transform:A,snapGrid:_,snapToGrid:v,nodeOrigin:I,paneDomNode:E}},onChange:(D,A)=>{let{triggerNodeChanges:_,nodeLookup:v,parentLookup:I,nodeOrigin:E}=x.getState(),M=[],z={x:D.x,y:D.y},T=v.get(m);if(T&&T.expandParent&&T.parentId){let V=T.origin??E,W=D.width??T.measured.width??0,R=D.height??T.measured.height??0,U={id:T.id,parentId:T.parentId,rect:{width:W,height:R,...xa({x:D.x??T.position.x,y:D.y??T.position.y},{width:W,height:R},T.parentId,v,V)}},X=wr([U],v,I,E);M.push(...X),z.x=D.x?Math.max(V[0]*W,D.x):void 0,z.y=D.y?Math.max(V[1]*R,D.y):void 0}if(z.x!==void 0&&z.y!==void 0){let V={id:m,type:"position",position:{...z}};M.push(V)}if(D.width!==void 0&&D.height!==void 0){let W={id:m,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:D.width,height:D.height}};M.push(W)}for(let V of A){let W={...V,type:"position"};M.push(W)}_(M)},onEnd:({width:D,height:A})=>{let _={id:m,type:"dimensions",resizing:!1,dimensions:{width:D,height:A}};x.getState().triggerNodeChanges([_])}})),C.current.update({controlPosition:P,boundaries:{minWidth:s,minHeight:u,maxWidth:l,maxHeight:c},keepAspectRatio:d,resizeDirection:f,onResizeStart:b,onResize:y,onResizeEnd:g,shouldResize:h}),()=>{C.current?.destroy()}},[P,s,u,l,c,d,b,y,g,h]);let L=P.split("-");return(0,B.jsx)("div",{className:Ee(["react-flow__resize-control","nodrag",...L,n,o]),ref:N,style:{...r,scale:k,...a&&{[S?"backgroundColor":"borderColor"]:a}},children:i})}var Bk=(0,H.memo)(Iw);var Ju=/[\w\u4e00-\u9fa5.-]/;var Pw=/[\p{L}\p{N}]/u;function ed(e){return e===void 0?!0:!Pw.test(e)}function td(e){return e.trim().replace(/\s+/g," ")}function zw(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&ed(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Ju.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Ju.test(i))break;r+=1}ed(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function Rw(e){let t=[];for(let n of zw(e))n.kind==="ref"&&t.push(n.token);return t}function nd(e,t){let n=Rw(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let u of t){let l=td(u.name);if(l==="")continue;let c=o.get(l);c===void 0?o.set(l,[u.id]):c.includes(u.id)||c.push(u.id)}let r=[],i=new Set,a=[],s=new Set;for(let u of n){let l=td(u.name),c=o.get(l);if(c===void 0){s.has(l)||(s.add(l),a.push(l));continue}for(let d of c)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var Dw=/\.(png|jpe?g|webp|gif|bmp)$/i;function Dr(e){return e.type.startsWith("image/")?!0:Dw.test(e.name)}var od=30,rd=200;function id(e,t){if(t&&Math.abs(t.x-e.x)<rd&&Math.abs(t.y-e.y)<rd){let n={x:t.x+od,y:t.y+od};return{position:n,next:n}}return{position:e,next:e}}var Aw=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function La(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!Aw.test(n));return t.length?t.join(" "):void 0}function xn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function ad(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function sd(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function Tw(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function $a(e,t,n,o){let r=new Set(n),i=typeof o?.size=="string"&&o.size?o.size:"1024x1024",a=typeof o?.quality=="string"&&o.quality?o.quality:"high",s=b=>typeof b=="string"?b:"",u=b=>typeof b=="number"&&Number.isFinite(b)?b:0,l=b=>{if(!b||typeof b!="object")return null;let{x:y,y:g}=b;return typeof y!="number"||typeof g!="number"||!Number.isFinite(y)||!Number.isFinite(g)?null:{x:y,y:g}},c=new Set(["image","prompt","group"]),d=[],f=new Set,p=e.flatMap(b=>{if(!b||typeof b!="object")return d.push({id:"?",reason:"\u4E0D\u662F\u4E00\u4E2A\u8282\u70B9\u5BF9\u8C61"}),[];let y=s(b.id);if(!y)return d.push({id:"?",reason:"\u6CA1\u6709 id"}),[];let g=s(b.type);if(!c.has(g))return d.push({id:y,reason:g?`\u8BA4\u4E0D\u51FA\u7684\u8282\u70B9\u7C7B\u578B\u300C${g}\u300D`:"\u6CA1\u6709\u8282\u70B9\u7C7B\u578B"}),[];let w=l(b.position);if(!w)return d.push({id:y,reason:"\u6CA1\u6709\u6709\u6548\u5750\u6807"}),[];let m=b.data;if(!m||typeof m!="object")return d.push({id:y,reason:"\u6CA1\u6709 data"}),[];f.add(y);let x=La(b.className),N={...b,position:w};x===void 0?delete N.className:N.className=x;let S=m;if(g==="image"){let k=s(S.registryId);return[{...N,type:"image",data:{...S,registryId:k,name:s(S.name),url:s(S.url),size:u(S.size),ext:s(S.ext),...r.has(k)?{missing:!0}:{}}}]}return g==="group"?[{...N,type:"group",data:{...S,name:s(S.name),imageCount:u(S.imageCount),totalSize:u(S.totalSize)}}]:[{...N,type:"prompt",data:{...S,prompt:s(S.prompt),size:s(S.size)||i,quality:s(S.quality)||a,outputDir:s(S.outputDir),status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}]}),h=Tw(t.filter(b=>f.has(s(b?.source))&&f.has(s(b?.target))));return{nodes:p,edges:h,dropped:d}}function ld(e){return e.filter(t=>t.type==="prompt").map(t=>({nodeId:t.id,taskId:String(t.data.taskId??"")})).filter(t=>!!t.taskId)}function rt(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function cd(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function Ow(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Lw(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,u=[...r.get(i.id)??[]];for(;u.length;){let l=u.pop();if(a.has(l))continue;a.add(l);let c=o.get(l);c&&(c.type==="prompt"?s.add(l):c.type==="group"&&u.push(...r.get(l)??[]))}n.set(i.data.registryId,s.size)}}function ud(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let u of r.get(e)??[]){let l=o.get(u);if(l){if(l.type==="image")a+=1,s.push(l.data.registryId);else if(l.type==="group"){let c=ud(u,t,n);a+=c.count,s.push(...c.ids)}}}return t.delete(e),{count:a,ids:s}}function $w(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:u}=ud(a.id,new Set,t),l=new Set(u);n.set(a.id,l.size),o.set(a.id,Array.from(l).reduce((c,d)=>c+(i.get(d)??0),0)),r.set(a.id,s-l.size)}}function dd(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=Ow(e,t);return Lw(e,a,n),$w(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function Hw(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let u=o.get(s);u&&(u.type==="image"?r.push(u):u.type==="group"&&t.filter(l=>l.target===s).forEach(l=>a.push(l.source)))}return r}function fd(e,t,n,o){let r=Hw(e,t,n),i=r.map(l=>({id:l.id,name:l.type==="image"?l.data.name:""})),a=nd(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(l=>[l.id,l])),u=[];for(let l of a.ids){let c=s.get(l);c&&u.push(c)}return{images:u,unknown:a.unknown,mode:a.mode}}function zr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function Rr(e,t){return t.reduce((n,o)=>!n||zr(e,o)<zr(e,n)?o:n,null)}function vo(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function Bw(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=Rr(r,n);if(i&&r.position.y>i.position.y){vo(e,i,r);continue}let a=Rr(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||zr(r,a)<zr(r,i))?vo(e,r,a):i&&vo(e,r,i)}}function Ww(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=Rr(r,n);a&&vo(e,r,a)}}function Fw(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(l=>{let c=o.get(l.source)?.type;return l.target===a.id&&(c==="image"||c==="group")}))continue;let u=Rr(a,i);u&&vo(e,u,a)}}function Ha(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return Bw(a,e,n,o),Ww(a,o,n,i),Fw(a,n,o,r),a.next}function pd(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?Ha(o,t):t}function md(e,t){return{nodes:e.map(n=>{let o=La(n.className),r={...n};if(o===void 0?delete r.className:r.className=o,r.type==="image"){let{maskDataUrl:d,...f}=r.data;return{...r,data:f}}if(r.type!=="prompt")return r;let{startedAtMs:i,resultCount:a,message:s,cancelRequested:u,...l}=r.data,c=d=>typeof d=="string"?d:"";return{...r,data:{...l,prompt:c(l.prompt),size:c(l.size),quality:c(l.quality)||"high",outputDir:c(l.outputDir),status:"idle"}}}),edges:[...t]}}async function Me(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:r})}return r}function Ge(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var gd=()=>Me("config");var hd=()=>Me("assets"),Ar=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},bd=e=>Me("asset/delete",Ge({id:e})),Ba=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Me(`history?${t.toString()}`)},Tr=(e=14)=>Me(`history/stats?days=${e}`),Wa=e=>Me("generate",Ge(e)),yd=e=>Me(`task?id=${encodeURIComponent(e)}`),xd=e=>Me("task/cancel",Ge({id:e})),wd=(e,t,n)=>Me("workflow/save",Ge({name:e,nodes:t,edges:n})),Fa=()=>Me("workflow/list"),vd=e=>Me(`workflow/load?name=${encodeURIComponent(e)}`),Va=(e,t)=>Me("recovery/save",Ge({...md(e,t)})),kd=()=>Me("recovery/latest"),Or=e=>Me("settings",Ge({model:e})),Lr=e=>Me("settings",Ge({profile:e})),Sd=e=>Me("settings",Ge({outputDir:e})),Nd=e=>Me("settings",Ge({budget:e})),Md=e=>Me("settings",Ge({imagoraRoot:e})),Cd=(e={})=>Me("pick-folder",Ge(e)),$r=e=>Me("reveal",Ge({path:e})),Xa=e=>Me("provider",Ge(e)),Ed=e=>Me("provider/probe",Ge(e));var _d=e=>Me("budget",Ge(e));function Id(e){return`\u751F\u6210\u4E2D ${e}s`}function fe(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var Vw=/^=== (.+) ===\s*$/,zd=/^```(?:text)?\s*$/,Xw=/^ratio:\s*(\d+):(\d+)\s*$/,Gw=/^ratio\b/i;function Pd(e){return e.split(`
`).some(t=>zd.test(t))}function Rd(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((l,c)=>{let d=l.match(Vw)?.[1];d!==void 0&&a.push({title:d.trim(),line:c})}),a.length===0){let l=t.trim();return l&&i.push(l),Pd(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),Pd(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let u=new Set;for(let l=0;l<a.length;l++){let c=a[l];if(c===void 0)continue;let{title:d}=c,f=c.line+1,p=a[l+1],h=p===void 0?n.length:p.line,b=n.slice(f,h);if(u.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}u.add(d);let y=[];b.forEach((L,D)=>{zd.test(L)&&y.push(D)});let g=y[0],w=y[y.length-1];if(g===void 0||w===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let m=b.slice(0,g).join(`
`).trim();m&&i.push(m);let x=b.slice(g+1,w),N=x.findIndex(L=>L.trim()!=="");if(N===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let S=(x[N]??"").trim(),k=S.match(Xw);if(!k){Gw.test(S)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${S}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let C=`${k[1]}:${k[2]}`,P=x.slice(N+1).join(`
`).trim();if(!P){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:C,prompt:P})}return{cards:o,issues:r,skippedText:i}}function qa(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function Dd(e,t,n){let o=Kw(n,e.length);return e.map((r,i)=>{let a=qa(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var Ga=380,qw=326,Ad=40,Uw=74,Yw=Ga+Ad,Zw=qw+Uw,Hr=3;function Kw(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/Hr),a=r%Hr,s=Math.min(Hr,n-i*Hr),u=s*Ga+(s-1)*Ad,l=e.x+Ga/2-u/2;o.push({x:l+a*Yw,y:e.y+i*Zw})}return o}var jw={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function He(e){let t=e.measured,n=jw[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var qt={layerGap:60,resultGap:60,nodeGap:16,leftMargin:60,topMargin:40},Qw={image:0,group:0,prompt:1},Td="\u63D0\u793A\u8BCD\u751F\u6210";function Od(e,t,n,o){let r=n.get(e);if(r!==void 0)return r;if(o.has(e))return-1;o.add(e);let i=0;for(let a of t.get(e)??[]){let s=Od(a,t,n,o);s>=0&&(i=Math.max(i,s+1))}return o.delete(e),n.set(e,i),i}function Jw(e,t){return e.type!=="prompt"?null:(t.get(e.id)??[]).slice().sort().join("|")}function ev(e,t,n,o,r){let i=new Map(e.map(b=>[b.id,b])),a=new Map,s=new Map;for(let b of t){if(!i.has(b.source)||!i.has(b.target))continue;let y=a.get(b.target)??[];y.push(b.source),a.set(b.target,y);let g=s.get(b.source)??[];g.push(b.target),s.set(b.source,g)}let u=new Map,l=new Set;for(let b of e){let y=Math.max(Od(b.id,a,u,l),Qw[b.type]);u.set(b.id,y)}let c=new Map;for(let b of e){let y=c.get(u.get(b.id)??0)??[];y.push(b),c.set(u.get(b.id)??0,y)}let d=[...c.keys()].sort((b,y)=>b-y),f=new Map;for(let b of e)n.has(b.id)||f.set(b.id,{x:b.position.x-(o?.x??0),y:b.position.y-(o?.y??0)});let p=b=>(f.get(b.id)?.x??b.position.x)+He(b).width/2,h=new Map;{let b=r;for(let y of d){let g=c.get(y).reduce((w,m)=>{let x=f.get(m.id);return x&&!n.has(m.id)?Math.max(w,x.y+He(m).height):Math.max(w,b+He(m).height)},b);h.set(y,b),b=g+qt.layerGap}}return{byId:i,preds:a,succs:s,layerGroups:c,sortedLayers:d,positions:f,centerOf:p,bandY:h}}function tv(e){let{nodes:t,edges:n,moves:o,origin:r,boundsWidth:i}=e;if(!t.length)return t;let a=r?0:qt.leftMargin,s=r?0:qt.topMargin,u=ev(t,n,o,r,s),{positions:l}=u;return ov(u,o,a),rv(u,o,a),iv(t,o,a,i,l),t.map(c=>{if(!o.has(c.id))return c;let d=l.get(c.id);return!d||!Number.isFinite(d.x)||!Number.isFinite(d.y)?c:r?{...c,position:{x:d.x+r.x,y:d.y+r.y}}:{...c,position:d}})}function nv(e,t,n){let{byId:o,preds:r,positions:i,centerOf:a}=t,s=(r.get(e.id)??[]).map(u=>o.get(u)).filter(u=>u!==void 0&&i.has(u.id)).map(u=>a(u));return s.length?s.reduce((u,l)=>u+l,0)/s.length:n+He(e).width/2}function Ld(e,t,n,o,r){let{layerGroups:i,preds:a,positions:s,bandY:u}=n,l=i.get(e).filter(y=>o.has(y.id));if(!l.length)return;let c=new Map;for(let y of l)c.set(y.id,t(y));let d=y=>Jw(y,a),f=[...l].sort((y,g)=>{let w=c.get(y.id),m=c.get(g.id);if(Math.abs(w-m)>=.5)return w-m;let x=d(y),N=d(g);if(x!==null&&N!==null&&x===N&&y.type==="prompt"&&g.type==="prompt"){let S=y.data.title??Td,k=g.data.title??Td,C=S.localeCompare(k,"zh");if(C!==0)return C}return y.position.x-g.position.x}),p=(y,g)=>y.every(w=>d(w)===null||d(w)===d(g)),h=r-qt.nodeGap,b=0;for(;b<f.length;){let y=f[b];if(y===void 0)break;let g=c.get(y.id),w=b,m=f[w+1];for(;m!==void 0&&Math.abs(c.get(m.id)-g)<.5&&p(f.slice(b,w+1),m);)w+=1,m=f[w+1];let x=f.slice(b,w+1),N=x.reduce((C,P,L)=>C+He(P).width+(L?qt.nodeGap:0),0),S=u.get(e),k=Math.max(h+qt.nodeGap,g-N/2);for(let C of x)s.set(C.id,{x:k,y:S}),k+=He(C).width+qt.nodeGap;h=k-qt.nodeGap,b=w+1}}function ov(e,t,n){for(let o of e.sortedLayers)Ld(o,r=>nv(r,e,n),e,t,n)}function rv(e,t,n){let{sortedLayers:o,succs:r,byId:i,positions:a,centerOf:s}=e;for(let u of[...o].reverse())Ld(u,l=>{let c=(r.get(l.id)??[]).map(f=>i.get(f)).filter(f=>f!==void 0&&a.has(f.id)).map(f=>s(f));if(c.length)return c.reduce((f,p)=>f+p,0)/c.length;let d=a.get(l.id);return d?d.x+He(l).width/2:n+He(l).width/2},e,t,n)}function iv(e,t,n,o,r){if(o!==void 0){let i=e.filter(a=>t.has(a.id));if(i.length){let a=Math.min(...i.map(l=>r.get(l.id).x)),s=Math.max(...i.map(l=>r.get(l.id).x+He(l).width)),u=n+o/2-(a+s)/2;if(u!==0)for(let l of i){let c=r.get(l.id);r.set(l.id,{x:c.x+u,y:c.y})}}}}function $d(e,t,n){if(!n.size)return e;let o=e.filter(f=>n.has(f.id));if(!o.length)return e;let r=t.filter(f=>n.has(f.source)||n.has(f.target)),i=new Set;for(let f of r)n.has(f.source)||i.add(f.source),n.has(f.target)||i.add(f.target);let a=e.filter(f=>i.has(f.id)),s=Math.min(...o.map(f=>f.position.x)),u=Math.max(...o.map(f=>f.position.x+He(f).width)),l=Math.min(...o.map(f=>f.position.y)),c=tv({nodes:[...o,...a],edges:r,moves:n,origin:{x:s,y:l},boundsWidth:i.size===0?Math.max(u-s,1):void 0}),d=new Map(c.map(f=>[f.id,f]));return e.map(f=>d.get(f.id)??f)}var Ua=[0,.5,1];function Hd(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function Wd(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Bd(e,t,n,o){let r=Ua.map(s=>Hd(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let u=t[s];if(u!==void 0&&u.id!==e.id&&Wd(u))for(let l=0;l<Ua.length;l+=1){let c=Ua[l];if(c===void 0)continue;let d=Hd(u,n,c);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let h=d-p,b=Math.abs(h);b>=o||b>=a||(a=b,i={delta:h,position:d,targetId:u.id})}}}return i}function Br(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!Wd(e)||!Number.isFinite(n)||n<=0)return o;let r=Bd(e,t,"x",n),i=Bd(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var Fd="imagora.canvas-snap.v1";function Vd(){try{let e=window.localStorage.getItem(Fd);return e===null?!0:e!=="0"}catch{return!0}}function Xd(e){try{window.localStorage.setItem(Fd,e?"1":"0")}catch{}}function So(e){let t=He(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var ko=[];function Gd(e,t,n){if(!n)return{changes:e,guides:ko};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:ko};let r=o[0];if(!r)return{changes:e,guides:ko};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:ko};let s={...So(i),x:a.x,y:a.y},u=[];for(let d of t)d.id!==r.id&&u.push(So(d));let l=Br(s,u);return l.guides.length===0?{changes:e,guides:ko}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:l.x,y:l.y}}:d),guides:l.guides}}var Ae=require("react");var Fr=require("react");var Ut=new Map,Ya=new Map;function av(e,t,n=512){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||e<=0||t<=0||n<=0||e<=n&&t<=n)return null;let o=n/Math.max(e,t);return{width:Math.max(1,Math.round(e*o)),height:Math.max(1,Math.round(t*o))}}function Wr(e){let t=Ut.get(e);return t===void 0?null:(Ut.delete(e),Ut.set(e,t),t)}function sv(e,t){for(Ut.set(e,t);Ut.size>240;){let n=Ut.keys().next();if(n.done===!0)break;let o=Ut.get(n.value);Ut.delete(n.value),o!==void 0&&URL.revokeObjectURL(o)}}async function lv(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u7F29\u7565\u56FE\u53D6\u56FE\u5931\u8D25\uFF1A${n.status}`);let o=await n.blob(),r=await createImageBitmap(o),i=av(r.width,r.height,t);if(i===null)return r.close(),e;let a=document.createElement("canvas");a.width=i.width,a.height=i.height;let s=a.getContext("2d");if(s===null)return r.close(),e;s.drawImage(r,0,0,i.width,i.height),r.close();let u=await new Promise(l=>a.toBlob(l,"image/webp",.9));return u===null?e:URL.createObjectURL(u)}function qd(e,t=512){let n=Wr(e);if(n!==null)return Promise.resolve(n);let o=Ya.get(e);if(o!==void 0)return o;let r=lv(e,t).catch(()=>e).then(i=>(Ya.delete(e),i!==e&&sv(e,i),i));return Ya.set(e,r),r}function Ud(e){let[t,n]=(0,Fr.useState)(()=>{if(!e)return null;let o=Wr(e);return o===null?null:{src:e,url:o}});return(0,Fr.useEffect)(()=>{if(!e)return;let o=Wr(e);if(o!==null){n({src:e,url:o});return}let r=!1;return qd(e).then(i=>{r||n({src:e,url:i})}),()=>{r=!0}},[e]),t===null||t.src!==e?null:t.url}var Za=require("react/jsx-runtime"),Yd={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function ze({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=Yd[e]||Yd.help;return(0,Za.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,Za.jsx)("path",{d:r})})}var ve=require("react"),nf=require("react-dom");var cv={id:"__custom",label:"\u81EA\u5B9A\u4E49"},uv=64;function Zd(e){return typeof e!="string"?"":e.trim().replace(/\s+/g," ")}function dv(e,t){return e.some(n=>n.value===t)}function Kd(e,t){let n=Zd(t);return n===""||dv(e,n)?e:[...e,{value:n,label:n,group:cv}]}function jd(e){let t=Zd(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>uv?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function Qd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var Vr=0;function Xr(){Vr+=1}function Gr(){Vr=Math.max(0,Vr-1)}function Jd(){return Vr>0}var fv=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function Ka(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=fv.has(o)?"-":n}return t}function ef(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function pv(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+ef(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,u=n,l=n;for(let[c,d]of o.entries()){if(u!==n&&(l=Math.max(l,u+c-2)),e.charAt(c)===t.charAt(i)){let f=1+ef(e,c),p=n;s!==n&&(p=s+f+4),l!==n&&(p=Math.max(p,l+f+1-c)),a[c]=p}u=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function tf(e,t){let n=Ka(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,u;for(let l of a){let c=Ka(l).toLowerCase(),d=pv(c,n);d!==void 0&&(s||=c.startsWith(n),u=u===void 0?d:Math.max(u,d))}u!==void 0&&o.push({item:r,index:i,prefix:s,score:u})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var xe=require("react/jsx-runtime"),mv=4;function ft({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:u,"aria-describedby":l,"aria-invalid":c,renderOption:d,title:f}){let[p,h]=(0,ve.useState)(!1),[b,y]=(0,ve.useState)(-1),[g,w]=(0,ve.useState)(""),[m,x]=(0,ve.useState)(null),N=(0,ve.useRef)(null),S=(0,ve.useRef)(null),k=(0,ve.useRef)(null),C=(0,ve.useId)(),P=`${r??`select-${C}`}-listbox`,L=`${P}-search`,D=(0,ve.useMemo)(()=>{if(g.trim()==="")return e;let F=e.map($=>({name:$.value,label:$.label,option:$}));return tf(F,g).map($=>$.option)},[e,g]),A=i===void 0||i==="auto"?e.length>mv:i,_=D.findIndex(F=>F.value===t),v=e.find(F=>F.value===t),I=F=>`${P}-option-${F}`,E=A&&s===!0,M=(0,ve.useMemo)(()=>{let F=g.trim();if(F!=="")return D.find($=>$.value===F||$.label===F)},[D,g]),z=(0,ve.useMemo)(()=>{if(!E||M!==void 0)return null;let F=jd(g);return F.ok?F.value:null},[E,M,g]),T=(F=_>=0?_:0)=>{!e.length&&!E||(y(e.length===0?-1:Math.min(Math.max(F,0),e.length-1)),h(!0),A||window.setTimeout(()=>S.current?.focus(),0))},V=(F=!1)=>{h(!1),w(""),F&&window.setTimeout(()=>S.current?.focus(),0)},W=F=>{let $=D[F];$&&(n($.value),V(!0))},R=F=>{u?.(F),V(!0)},U=()=>{let F=S.current;if(!F)return;let $=F.getBoundingClientRect(),Y=4,re=8,ae=F.offsetWidth||$.width,J=Math.max(re,Math.min($.left,window.innerWidth-ae-re)),te=window.innerHeight-$.bottom-Y-re,Q=$.top-Y-re,q=te<160&&Q>te,ie=Math.max(120,Math.min(240,q?Q:te));x({left:J,top:q?Math.max(re,$.top-Y-ie):$.bottom+Y,width:ae,maxHeight:ie})};(0,ve.useEffect)(()=>{if(p)return Xr(),()=>Gr()},[p]),(0,ve.useLayoutEffect)(()=>{if(!p)return;U();let F=()=>U();window.addEventListener("scroll",F,!0),window.addEventListener("resize",F);let $=typeof ResizeObserver>"u"?null:new ResizeObserver(F);return S.current&&$?.observe(S.current),()=>{$?.disconnect(),window.removeEventListener("scroll",F,!0),window.removeEventListener("resize",F)}},[p]),(0,ve.useEffect)(()=>{p&&A&&m&&k.current?.focus()},[p,A,m]),(0,ve.useEffect)(()=>{p&&y(F=>D.length===0?-1:Math.min(Math.max(F,0),D.length-1))},[p,D.length]),(0,ve.useEffect)(()=>{!e.length&&!E&&p&&(h(!1),y(-1))},[p,e.length,E]),(0,ve.useEffect)(()=>{let F=$=>{let Y=$.target;N.current?.contains(Y)||document.getElementById(P)?.contains(Y)||V()};return document.addEventListener("mousedown",F,!0),()=>document.removeEventListener("mousedown",F,!0)},[P]);let X=(F,$)=>{if(F.key==="Tab"){V();return}if(F.key==="Escape"){p&&(F.preventDefault(),V(!0));return}if(F.key==="ArrowDown"||F.key==="ArrowUp"){if(F.preventDefault(),!p){T();return}if(D.length===0)return;let Y=F.key==="ArrowDown"?1:-1;y(re=>(re+Y+D.length)%D.length);return}if(F.key==="Home"||F.key==="End"){if(D.length===0)return;F.preventDefault(),p||h(!0),y(F.key==="Home"?0:D.length-1);return}if(F.key==="Enter"){if(F.preventDefault(),!p){T();return}if(E&&g.trim()!==""){M!==void 0?(n(M.value),V(!0)):z!==null&&R(z);return}W(b);return}!$&&F.key===" "&&(F.preventDefault(),p?W(b):T())},Z=(0,ve.useMemo)(()=>Qd(D),[D]),ce=(0,ve.useMemo)(()=>{let F=new Map;return D.forEach(($,Y)=>F.set($,Y)),F},[D]);return(0,xe.jsxs)("div",{ref:N,className:`im-select-root ${o}`.trim(),children:[(0,xe.jsxs)("button",{ref:S,type:"button",id:r,title:f,onClick:()=>p?V():T(),onKeyDown:F=>X(F,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":P,"aria-activedescendant":p&&b>=0?I(b):void 0,"aria-describedby":l,"aria-invalid":c,className:`im-select-trigger${p?" is-open":""}`,children:[d&&v?(0,xe.jsxs)("span",{className:"im-select-value",children:[d(v),(0,xe.jsx)("span",{className:"im-select-label",children:v.label})]}):(0,xe.jsx)("span",{className:"im-select-label",children:v?.label??"\u8BF7\u9009\u62E9"}),(0,xe.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,xe.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&m&&(0,nf.createPortal)((0,xe.jsxs)("div",{id:P,"data-portal":"select-list",className:"im-select-list",style:{left:m.left,top:m.top,width:m.width,maxHeight:m.maxHeight},children:[A&&(0,xe.jsx)("div",{className:"im-select-search",children:(0,xe.jsx)("input",{ref:k,id:L,type:"text",className:"im-select-search-input",value:g,onChange:F=>w(F.target.value),onKeyDown:F=>X(F,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":P,"aria-activedescendant":b>=0?I(b):void 0})}),(0,xe.jsxs)("ul",{role:"listbox","aria-labelledby":A?L:void 0,className:"im-select-rows",children:[D.length===0&&(0,xe.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),Z.map(F=>(0,xe.jsxs)("li",{role:"presentation",className:"im-select-group",children:[F.label!==""&&(0,xe.jsx)("div",{className:"im-select-group-title",role:"presentation",children:F.label}),(0,xe.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:F.rows.map($=>{let Y=ce.get($)??-1,re=$.value===t,ae=Y===b;return(0,xe.jsxs)("li",{id:I(Y),role:"option","aria-selected":re,className:`im-select-option${re?" is-selected":""}${ae?" is-active":""}`,onMouseEnter:()=>y(Y),onMouseDown:J=>J.preventDefault(),onClick:()=>W(Y),children:[d?(0,xe.jsxs)("span",{className:"im-select-value",children:[d($),(0,xe.jsx)("span",{className:"im-select-label",children:$.label})]}):(0,xe.jsx)("span",{className:"im-select-label",children:$.label}),re&&(0,xe.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,xe.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},$.value)})})]},F.id||"__ungrouped"))]}),z!==null&&(0,xe.jsx)("div",{className:"im-select-custom",children:(0,xe.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:F=>F.preventDefault(),onClick:()=>R(z),children:(0,xe.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",z,"\u201D"]})})})]}),document.body)]})}var K=require("react/jsx-runtime"),ja=(0,Ae.createContext)(null),Qa=(0,Ae.createContext)(!1);function Ja(){return(0,Ae.useContext)(Qa)}function es(){let e=(0,Ae.useContext)(ja);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function gv({value:e,onChange:t}){let[n,o]=(0,Ae.useState)(e),r=(0,Ae.useRef)(!1);return(0,Ae.useEffect)(()=>{r.current||o(e)},[e]),(0,K.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onCompositionStart:()=>{r.current=!0},onCompositionEnd:i=>{r.current=!1,o(i.currentTarget.value),t(i.currentTarget.value)},onChange:i=>{let a=i.target.value;o(a),r.current||t(a)}})}function qr(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(yn,{type:"target",position:ne.Top,className:"im-handle"}),(0,K.jsx)(yn,{type:"source",position:ne.Bottom,className:"im-handle"})]})}function ts({children:e}){return(0,K.jsx)("div",{className:"im-rail nodrag",children:e})}function Ot({label:e,onClick:t,danger:n,children:o}){return(0,K.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var af=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=es(),i=Ja(),[a,s]=(0,Ae.useState)(!1),u=n.missing||a,l=Ud(n.url);return(0,K.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${u?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,K.jsx)(qr,{}),u?(0,K.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,K.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:c=>{c.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,i?null:(0,K.jsxs)(ts,{children:[(0,K.jsx)(Ot,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,K.jsx)(ze,{name:"eye"})}),(0,K.jsx)(Ot,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,K.jsx)(ze,{name:"crop"})}),(0,K.jsx)(Ot,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,K.jsx)(ze,{name:"expand"})}),(0,K.jsx)(Ot,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,K.jsx)(ze,{name:"grid"})}),(0,K.jsx)(Ot,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,K.jsx)(ze,{name:"wand"})}),(0,K.jsx)(Ot,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,K.jsx)(ze,{name:"image"})}),(0,K.jsx)(Ot,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,K.jsx)(ze,{name:"trash"})})]}),(0,K.jsx)("div",{className:"im-thumb",onDoubleClick:c=>{c.stopPropagation(),r.zoomImage(t)},children:n.url&&l?(0,K.jsx)("img",{src:l,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):n.url?(0,K.jsx)("span",{className:"im-thumb-placeholder","aria-hidden":!0}):(0,K.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,K.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,K.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),of=4,sf=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=es(),i=Ja(),a=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,u=Math.min(Math.max(n.imageCount-1,0),3);return(0,K.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,K.jsx)(qr,{}),i?null:(0,K.jsx)(ts,{children:(0,K.jsx)(Ot,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,K.jsx)(ze,{name:"trash"})})}),(0,K.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:u},(l,c)=>(0,K.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(c+1)*of}px, ${-(c+1)*of}px)`}},c)),(0,K.jsxs)("div",{className:"im-group-face",children:[(0,K.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,K.jsxs)("div",{className:"im-group-size",children:[a," MB"]}),s>0?(0,K.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function rf({from:e}){let[t,n]=(0,Ae.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ae.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,K.jsx)(K.Fragment,{children:Id(t)})}var hv={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"};function bv(e){switch(e.status){case"queued":return{text:"\u6392\u961F\u4E2D",detail:"\u6392\u961F\u4E2D",tone:"is-queued"};case"running":return{text:"\u751F\u6210\u4E2D",detail:"\u751F\u6210\u4E2D",tone:"is-running"};case"done":return{text:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,detail:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,tone:"is-done"};case"failed":return{text:"\u5931\u8D25",detail:e.message?`\u5931\u8D25\uFF1A${e.message}`:"\u5931\u8D25",tone:"is-failed"};default:return{text:"\u5C31\u7EEA",detail:"\u5C31\u7EEA",tone:"is-idle"}}}var lf=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=es(),i=Ja(),a=r.config,s=n.status==="queued"||n.status==="running",u=a?.sizes??[],l=a?.qualities??[],c=u.some(f=>f.value===n.size)||!n.size?u:[...u,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],d=a?.qualityEffective!==!1;if(i){let f=bv(n);return(0,K.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,K.jsx)(qr,{}),(0,K.jsx)("div",{className:"im-lod-title",title:n.title??"\u63D0\u793A\u8BCD\u751F\u6210",children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,K.jsx)("div",{className:`im-lod-status ${f.tone}`,title:f.detail,children:n.status==="running"?(0,K.jsx)(rf,{from:n.startedAtMs}):f.text})]})}return(0,K.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,K.jsx)(qr,{}),(0,K.jsxs)(ts,{children:[(0,K.jsx)("span",{className:"im-rail-dot",title:hv[n.status]??"\u5C31\u7EEA",children:(0,K.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,K.jsx)(Ot,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,K.jsx)(ze,{name:"trash"})})]}),(0,K.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,K.jsx)(gv,{value:n.prompt,onChange:f=>r.updatePrompt(t,{prompt:f})}),(0,K.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:d?"7fr 3fr":"1fr",marginTop:8},children:[(0,K.jsxs)("div",{style:{minWidth:0},children:[(0,K.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,K.jsx)(ft,{className:"im-select-fill",options:Kd(c,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:f=>r.updatePrompt(t,{size:f})})]}),d?(0,K.jsxs)("div",{style:{minWidth:0},children:[(0,K.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,K.jsx)(ft,{className:"im-select-fill",options:l.map(f=>({value:f,label:f})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:f=>r.updatePrompt(t,{quality:f})})]}):null]}),(0,K.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,K.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,K.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:a?.defaultOutputDir??"",onChange:f=>r.updatePrompt(t,{outputDir:f.target.value})})]}),n.status==="failed"&&n.message?(0,K.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,K.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,K.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!(n.prompt??"").trim(),onClick:f=>{f.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,K.jsx)(rf,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,K.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:f=>{f.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var cf=`
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

  /* \u8868\u9762\u6750\u8D28\uFF1A**\u6309\u5BBF\u4E3B\u7684\u4E09\u5C42\u9010\u4E00\u6620\u5C04\uFF0C\u4E0D\u8981\u5168\u7528\u540C\u4E00\u6863**\u3002
   *
   * \u6D45\u8272\u4E3B\u9898\u4E0B layer-1/2 \u90FD\u662F\u7EAF\u767D\uFF08\u53EA\u6709\u6DF1\u8272\u624D\u5206\u6863\uFF09\uFF0C\u6240\u4EE5"\u5168\u90FD\u7528 layer-1"\u5728\u6D45\u8272\u91CC
   * \u770B\u4E0D\u51FA\u9519\uFF1B\u4E00\u5230\u6697\u8272\u5C31\u66B4\u9732\uFF1A\u5361\u7247\u3001\u5F39\u7A97\u3001\u4E0B\u62C9\u3001\u64CD\u4F5C\u680F\u5168\u662F #232324 \u4E00\u4E2A\u989C\u8272\uFF0C
   * \u6D6E\u5C42\u5B8C\u5168\u6D6E\u4E0D\u8D77\u6765\uFF0C\u6574\u5757\u754C\u9762\u7CCA\u6210\u4E00\u56E2\u3002\u8FD9\u6B63\u662F\u7EF4\u62A4\u8005\u8BF4\u7684\u300C\u6DF1\u8272\u6A21\u5F0F\u611F\u89C9\u6709\u5DEE\u5F02\u300D\u3002
   *
   *   \u5361\u7247    \u2192 bg-layer-1\uFF08\u6697 #232324\uFF09
   *   \u53F0\u9762    \u2192 bg-layer-2\uFF08\u6697 #2c2c2e\uFF0C\u6BD4\u5361\u7247\u4EAE\u4E00\u6863\uFF09
   *   \u6D6E\u5C42    \u2192 bg-layer-2\uFF08\u540C\u4E0A\uFF09\uFF0B elevation-prominent \u9634\u5F71
   *   \u5185\u5D4C    \u2192 bg-module-platform\uFF08\u6697 #353638\uFF0C\u6700\u4EAE\u7684\u4E00\u6863\uFF0C\u7528\u4F5C\u7F29\u7565\u56FE/\u8F93\u5165\u6846\u5E95\uFF09
   *
   * \u522B\u7528 bg-layer-3\uFF1A\u5B83\u5728\u5BBF\u4E3B\u6697\u8272\u91CC\u662F #1b1b1c\uFF0C\u6BD4 layer-1 \u8FD8\u6DF1\uFF0C\u65B9\u5411\u662F\u53CD\u7684\u3002
   * \u4E5F\u522B\u7528 bg-overlay\uFF1A\u6D45\u8272\u4E0B\u662F #e9ecf2\uFF0C\u6BD4\u5361\u7247\u8FD8\u7070\u3002 */
  --im-surface: var(--dsw-alias-bg-layer-1, #fff);
  --im-surface-panel: var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-layer-1, #fff));
  --im-surface-inset: var(--dsw-alias-bg-module-platform, #f9fafb);
  --im-surface-float: var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-layer-1, #fff));
  /* \u9875\u9762\u5E95\uFF08.im-root\uFF09\uFF1A\u6D45\u8272\u8981\u6BD4\u5361\u7247**\u6697**\u4E00\u6863\uFF08#f9fafb vs \u767D\uFF09\uFF0C\u6697\u8272\u8981\u6BD4\u5361\u7247**\u66F4\u6697**
     \uFF08#151517 vs \u5361\u7247 #232324\uFF09\u2014\u2014 \u4E24\u4E2A\u65B9\u5411\u90FD\u662F\u300C\u9875\u9762\u5728\u6700\u540E\u9762\u300D\u3002
     \u5355\u9760\u4E00\u4E2A token \u505A\u4E0D\u5230\uFF1Abg-module-platform \u6D45\u8272\u662F\u7070\uFF08\u5BF9\uFF09\u3001\u6697\u8272\u662F #353638\uFF08\u6BD4\u5361\u7247\u8FD8\u4EAE\uFF0C\u53CD\u4E86\uFF09\u3002
     \u6240\u4EE5\u8FD9\u4E00\u6863\u7528 dark \u5757\u5355\u72EC\u6539\u5199\uFF0C\u89C1\u4E0B\u9762 body[data-ds-dark-theme]\u3002 */
  --im-surface-page: var(--dsw-alias-bg-module-platform, #f9fafb);

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

  /* \u2014\u2014 \u539F\u7248\u65E7\u540D\u7684\u517C\u5BB9\u522B\u540D\uFF08**\u4E0D\u662F**\u7ED9\u672C\u9879\u76EE\u4EE3\u7801\u7528\u7684\uFF0C\u522B\u5728\u8FD9\u91CC\u53D6\u8272\uFF09\u2014\u2014
   *
   * \u539F\u7248 Imagora \u4ECE edgeStyle \u90A3\u6B21\u63D0\u4EA4\u8D77\uFF0C\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u65F6\u4F1A\u628A\u8FDE\u7EBF\u5916\u89C2**\u5185\u8054\u8FDB JSON**\uFF1A
   *     "style": { "stroke": "var(--edge-stroke-idle)", ... }
   * \u8FD9\u4E9B\u662F\u539F\u7248\u7684\u53D8\u91CF\u540D\u3002var() \u5199\u4E86\u4F46\u53D8\u91CF\u4E0D\u5B58\u5728\u3001\u53C8\u6CA1\u6709\u515C\u5E95\u503C\u65F6\uFF0C\u6D4F\u89C8\u5668\u5224\u8BE5\u58F0\u660E
   * \u300C\u8BA1\u7B97\u503C\u65E0\u6548\u300D\u2192 stroke \u56DE\u5230 initial \u7684 none \u2192 **\u6574\u6761\u8FDE\u7EBF\u6D88\u5931**\u3002
   *
   * \u4E3B\u8981\u7684\u4FEE\u6CD5\u5728 lib/workflow.ts \u7684 sanitizeEdges\uFF08\u52A0\u8F7D\u65F6\u4E22\u6389\u5B58\u6863\u91CC\u7684\u8868\u73B0\u5C42\u5B57\u6BB5\uFF09\uFF0C
   * \u8FD9\u91CC\u8865\u4E00\u6761\u522B\u540D\u4F5C\u4E3A\u7B2C\u4E8C\u9053\u95F8\uFF1A\u4E07\u4E00\u8FD8\u6709\u522B\u5904\uFF08\u8282\u70B9\u5185\u8054\u6837\u5F0F\u3001\u65E7\u5FEB\u7167\u3001\u7528\u6237\u624B\u6539\u7684 JSON\uFF09
   * \u5F15\u7528\u5230\u8FD9\u51E0\u4E2A\u540D\u5B57\uFF0C\u4E5F\u80FD\u89E3\u6790\u51FA\u989C\u8272\uFF0C\u800C\u4E0D\u662F\u8BA9\u5143\u7D20\u65E0\u58F0\u6D88\u5931\u3002
   * \u8BA9\u300C\u5F15\u7528\u4E86\u672A\u5B9A\u4E49\u53D8\u91CF\u300D\u8FD9\u79CD\u6570\u636E\u95EE\u9898\u6F14\u53D8\u6210\u300C\u753B\u9762\u7A7A\u767D\u300D\uFF0C\u4EE3\u4EF7\u592A\u5927\u3002 */
  --edge-stroke-idle: var(--im-edge-idle);
  --edge-stroke-hovered: var(--im-edge-hovered);
  --edge-stroke-selected: var(--im-edge-selected);

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
  --im-r-xs: 4px;
  /* \u8FD9\u4E24\u4E2A\u662F\u539F\u7248\u91CC\u4E13\u5C5E\u7684\u6863\uFF1A\u5DE5\u5177\u680F 13\u3001\u54C1\u724C\u533A hover 12 */
  --im-r-toolbar: 13px;
  --im-r-brand: 12px;

  /* \u9634\u5F71\u8D70\u5BBF\u4E3B elevation\uFF1A\u5199\u6B7B rgba \u5728\u6DF1\u8272\u4E3B\u9898\u4E0B\u7B49\u4E8E\u6CA1\u6709\u9634\u5F71 */
  --im-shadow-card: var(--dsw-elevation-soft, 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.04));
  --im-shadow-float: var(--dsw-elevation-panel, 0 6px 22px rgba(0, 0, 0, 0.12));

  /* \u2014\u2014 \u5F39\u7A97\u7684\u4E24\u6761\u300C\u63D0\u4EAE\u300D\u8FB9\uFF1A\u63CF\u8FB9 + \u9876\u90E8\u5185\u9AD8\u5149 \u2014\u2014
   *
   * \u539F\u7248\u5F39\u7A97\u7684\u7ACB\u4F53\u611F\u6765\u81EA**\u4E24\u5904\u5F80\u767D\u91CC\u63D0\u4EAE**\uFF0C\u4E0D\u662F\u6765\u81EA\u6295\u5F71\uFF1A
   *   border:   1px solid rgba(255,255,255,.68)   \uFF08index.css:749\uFF09
   *   box-shadow: \u2026, inset 0 1px 0 rgba(255,255,255,.8) \uFF08index.css:754\uFF09
   * \u5B83\u4EEC\u8868\u8FBE\u7684\u662F\u300C\u5149\u4ECE\u5DE6\u4E0A\u6765\u300D\uFF0C\u6240\u4EE5\u8FB9\u6846\u6BD4\u5E95\u8272**\u66F4\u767D**\u3002
   *
   * \u26A0\uFE0F \u8FD9\u4E24\u6761\u662F**\u552F\u4E00\u65E0\u6CD5\u7528\u8BED\u4E49 token \u8868\u8FBE**\u7684\u53D6\u503C\uFF1A--im-line \u662F\u300C\u5206\u9694\u7EBF\u300D\u8BED\u4E49
   * \uFF08\u6697\u8272\u767D 12%\uFF09\uFF0C\u62FF\u5B83\u5F53\u63CF\u8FB9\u4F1A\u8BA9\u5F39\u7A97\u5931\u53BB\u300C\u6D6E\u8D77\u6765\u300D\u7684\u89C2\u611F\uFF08\u4EAE\u8272\u4E0B\u5C24\u5176\u660E\u663E\uFF0C\u767D\u5E95\u4E0A
   * \u4E00\u6761\u7070\u7EBF\u770B\u7740\u50CF\u5206\u9694\u800C\u4E0D\u662F\u8FB9\u7F18\uFF09\u3002\u6240\u4EE5\u7167 --im-scrim \u7684\u540C\u4E00\u5957\u5904\u7406\uFF1A\u5199\u6B7B\u539F\u7248\u503C\uFF0C
   * \u518D\u5728\u6697\u8272\u5757\u91CC\u5355\u72EC\u538B\u6DE1\uFF08\u89C1\u4E0B\u9762 body[data-ds-dark-theme]\uFF09\u2014\u2014
   * \u767D 68% \u538B\u5728\u767D 12% \u7684\u754C\u9762\u4E0A\u4E00\u9053\u4EAE\u8FB9\u4F1A\u53D1\u5149\uFF0C\u5FC5\u987B\u4E24\u5957\u3002 */
  --im-modal-edge: color-mix(in srgb, #fff 68%, transparent);
  --im-modal-glow: inset 0 1px color-mix(in srgb, #fff 80%, transparent);

  --im-shadow-modal: var(--dsw-elevation-prominent, 0 24px 70px rgba(15, 20, 25, 0.26)),
    var(--im-modal-glow);
  /* \u753B\u5E03\u8282\u70B9\u5361\u4E13\u7528\u7684\u4E00\u6863\uFF1A\u539F\u7248 .node-pop \u662F\u300C12/26 \u7684\u5927\u6295\u5F71 + \u9876\u90E8 1px \u5185\u9AD8\u5149\u300D\uFF0C
     \u6BD4\u666E\u901A\u5361\u7247\u91CD\u4E00\u6863\uFF08\u8282\u70B9\u8981\u6D6E\u5728\u70B9\u9635\u753B\u5E03\u4E4B\u4E0A\uFF09\u3002
     \u26A0\uFE0F \u90A3\u9053\u5185\u9AD8\u5149\u5FC5\u987B**\u5F80\u4EAE\u91CC\u6D3E\u751F**\uFF1A\u5199\u6210\u300Csurface 90%\u300D\u5728\u6D45\u8272\u4E0B\u662F\u767D\uFF08\u5BF9\uFF09\uFF0C
     \u5230\u6697\u8272\u4E0B\u5C31\u6210\u4E86\u8FD1\u9ED1\u7684 rgb(0.137 0.137 0.141)\uFF0C\u7B49\u4E8E\u7ED9\u6BCF\u5F20\u5361\u9876\u8FB9\u538B\u4E00\u9053\u9634\u5F71\uFF08\u9519\uFF09\u3002
     \u63BA 10% \u767D\u5C31\u4E24\u5934\u90FD\u5BF9\uFF1A\u6D45\u8272\u51E0\u4E4E\u770B\u4E0D\u51FA\uFF08\u539F\u7248\u672C\u6765\u5C31\u51E0\u4E4E\u770B\u4E0D\u51FA\uFF09\uFF0C\u6697\u8272\u662F\u4E00\u9053\u7EC6\u4EAE\u8FB9\u3002 */
  --im-shadow-node: var(--dsw-elevation-panel, 0 12px 26px rgba(33, 44, 53, 0.12)),
    inset 0 1px color-mix(in srgb, var(--im-surface) 90%, #fff);
  /* \u753B\u5E03\u53F0\u9762\uFF1A\u539F\u7248\u5B9E\u6D4B 0 18px 45px rgba(31,41,55,.09) + \u9876\u90E8 1px \u5185\u9AD8\u5149 */
  --im-shadow-canvas: var(--dsw-elevation-prominent, 0 18px 45px rgba(31, 41, 55, 0.09)),
    inset 0 1px color-mix(in srgb, var(--im-surface) 90%, #fff);
  /* \u5F39\u7A97 / \u9884\u89C8\u906E\u7F69\uFF1A**\u4E0D\u8DDF\u4E3B\u9898\u7FFB\u8F6C\u3001\u4E5F\u4E0D\u53D6\u5BBF\u4E3B\u7684 mask token**\u3002
   *
   * \u539F\u7248\u662F\u56FA\u5B9A\u503C rgba(20,26,31,.62)\uFF0C\u5F39\u7A97\u4E0E\u653E\u5927\u9884\u89C8\u5171\u7528\u8FD9\u4E00\u4E2A\uFF08index.css \u7684
   * --scrim-bg\uFF09\u3002\u5BBF\u4E3B bg-mask-1 \u6D45\u8272\u53EA\u6709 24%\uFF08#0000003d\uFF09\uFF0C\u6BD4\u539F\u7248\u6DE1\u4E00\u5927\u622A \u2014\u2014
   * \u6574\u5C4F\u9884\u89C8\u65F6\u5E95\u4E0B\u754C\u9762\u8FD8\u770B\u5F97\u6E05\u6E05\u695A\u695A\uFF0C\u56FE\u548C\u80CC\u666F\u62A2\u6CE8\u610F\u529B\u3002
   * \u906E\u7F69\u7684\u8BED\u4E49\u662F\u300C\u628A\u5E95\u4E0B\u7684\u754C\u9762\u63A8\u8FDC\u300D\uFF0C\u4E24\u79CD\u4E3B\u9898\u4E0B\u90FD\u8BE5\u538B\u6697\uFF0C\u6240\u4EE5\u5199\u6B7B\u8FD9\u6863\u6DF1\u8272\uFF1A
   * \u6697\u8272\u4E0B\u5B83\u540C\u6837\u53EA\u662F\u538B\u6697\uFF08\u4E0D\u4F1A\u50CF\u4ECE ink \u6D3E\u751F\u90A3\u6837\u53D8\u6210\u767D\u7EB1\uFF09\u3002 */
  --im-scrim: color-mix(in srgb, #141a1f 62%, transparent);
  /* \u5D4C\u5957\u5F39\u7A97\uFF08\u5F39\u7A97\u91CC\u518D\u5F00\u4E00\u4E2A\u5F39\u7A97\uFF09\u7684\u906E\u7F69\uFF1A\u539F\u7248 --scrim-bg-nested \u662F 44%\uFF0C
     \u6BD4\u5916\u9762\u90A3\u5C42\u6DE1 \u2014\u2014 \u4E24\u5C42\u90FD 62% \u4F1A\u628A\u4E0B\u5C42\u5F39\u7A97\u7CCA\u6210\u4E00\u7247\u3001\u770B\u4E0D\u51FA\u8FD8\u6709\u4E1C\u897F\u5728\u4E0B\u9762\u3002 */
  --im-scrim-nested: color-mix(in srgb, #141a1f 44%, transparent);
}

/* \u6697\u8272\u4E3B\u9898\u4E0B**\u5FC5\u987B\u5355\u72EC\u8986\u76D6\u7684\u51E0\u6761**\uFF08\u5176\u4F59 token \u90FD\u4F1A\u968F\u5BBF\u4E3B\u81EA\u52A8\u7FFB\u8F6C\uFF09\u3002
 *
 * 1. \u9875\u9762\u5E95\uFF1A\u6D45\u8272\u91CC bg-module-platform \u662F\u6BD4\u5361\u7247\u6697\u7684\u7070\uFF08\u5BF9\uFF09\uFF0C\u6697\u8272\u91CC\u5374\u6BD4\u5361\u7247**\u4EAE**
 *    \uFF08#353638 vs #232324\uFF09\uFF0C\u9875\u9762\u4F1A\u6BD4\u5361\u7247\u8FD8\u7A81\u51FA\u3001\u5C42\u6B21\u6574\u4E2A\u7FFB\u8FC7\u6765\u3002\u8FD9\u91CC\u6539\u6307\u5411
 *    bg-base\uFF08\u6697 #151517\uFF09\uFF0C\u4E8E\u662F"\u9875\u9762 < \u753B\u5E03 < \u5361\u7247 < \u6D6E\u5C42"\u7531\u6DF1\u5230\u6D45\uFF0C\u65B9\u5411\u6B63\u786E\u3002
 * 2. \u8282\u70B9/\u753B\u5E03\u5361\u7684\u5185\u9AD8\u5149\uFF1Ainset \u90A3\u4E00\u5C42\u5728\u6D45\u8272\u662F"\u767D\u8272\u63D0\u4EAE"\uFF0C\u6697\u8272\u82E5\u8FD8\u4ECE\u8868\u9762\u8272\u6D3E\u751F
 *    \u5C31\u4F1A\u53D8\u6210\u4E00\u9053\u6697\u8FB9\u3002\u6697\u8272\u4E0B\u6539\u6210\u6781\u6DE1\u7684\u767D\u8272\uFF088%\uFF09\uFF0C\u53EA\u662F\u4E00\u6761\u80FD\u770B\u51FA\u8FB9\u754C\u7684\u7EC6\u7EBF\u3002
 * 3. \u5F39\u7A97\u7684\u63CF\u8FB9\u4E0E\u5185\u9AD8\u5149\uFF08--im-modal-edge / --im-modal-glow\uFF09\uFF1A\u539F\u7248\u767D 68% \u4E0E\u767D 80%
 *    \u662F\u7ED9\u767D\u5E95\u51C6\u5907\u7684\uFF1B\u6697\u8272\u5E95\u4E0A\u539F\u6837\u7167\u642C\u5C31\u662F\u4E00\u5708\u53D1\u5149\u8FB9\u6846\u3002\u538B\u5230 14% / 10% \u2014\u2014 \u53C2\u7167\u5BBF\u4E3B
 *    \u81EA\u5DF1\u7684 border-l3\uFF08\u6697 #ffffff29 \u2248 16%\uFF09\u4E0E\u8282\u70B9\u5185\u9AD8\u5149\u90A3\u6761 8%\uFF0C\u843D\u5728\u540C\u4E00\u6863\u3002
 *    \u5224\u636E\uFF1A\u6697\u8272\u4E0B\u9762\u677F\u8FB9\u7F18\u5E94\u300C\u80FD\u770B\u51FA\u8FB9\u754C\u300D\uFF0C\u4E0D\u662F\u300C\u5728\u53D1\u5149\u300D\u3002
 *
 * \u53EA\u5199\u8FD9\u51E0\u6761\u662F\u6709\u610F\u7684\uFF1A\u80FD\u7528\u300C\u5BBF\u4E3B token \u81EA\u52A8\u7FFB\u8F6C\u300D\u89E3\u51B3\u7684\uFF0C\u5C31\u4E0D\u8981\u5199\u7B2C\u4E8C\u4E2A\u4E3B\u9898\u5757\u3002 */
body[data-ds-dark-theme] {
  --im-surface-page: var(--dsw-alias-bg-base, #151517);
  --im-shadow-node: var(--dsw-elevation-panel, 0 12px 26px rgba(0, 0, 0, 0.4)),
    inset 0 1px color-mix(in srgb, #fff 8%, transparent);
  --im-shadow-canvas: var(--dsw-elevation-prominent, 0 18px 45px rgba(0, 0, 0, 0.4)),
    inset 0 1px color-mix(in srgb, #fff 8%, transparent);
  --im-modal-edge: color-mix(in srgb, #fff 14%, transparent);
  --im-modal-glow: inset 0 1px color-mix(in srgb, #fff 10%, transparent);
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
  background: var(--im-surface-page);
  color: var(--im-ink);
  /* \u4E09\u5C42\uFF08\u9875\u5934 / \u5DE5\u5177\u680F / \u753B\u5E03\uFF09\u4E4B\u95F4\u7684\u95F4\u8DDD\u7531 gap \u7EDF\u4E00\u63D0\u4F9B\uFF0C
     \u4E0D\u9760\u5404\u81EA\u7684 margin \u76F8\u52A0 \u2014\u2014 \u539F\u7248\u5C31\u662F flex flex-col gap-2\uFF088px\uFF09\u3002 */
  gap: 8px;
  padding: 8px 12px 12px;
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
  border-radius: var(--im-r-brand);
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
  padding: 10px 14px;
  /* \u539F\u7248\u5B9E\u6D4B\uFF1A\u8FB9\u6846 rgba(31,41,55,.08) \u2014\u2014 \u6BD4\u901A\u7528 --im-line(.12) \u66F4\u6DE1\u4E00\u6863\uFF0C
     \u6240\u4EE5\u7528\u300C\u58A8\u8272\u63BA 8%\u300D\u800C\u4E0D\u662F\u76F4\u63A5\u62FF --im-line\uFF0C\u5426\u5219\u9875\u5934\u4E24\u884C\u770B\u7740\u6BD4\u5361\u7247\u8FD8\u786C\u3002 */
  border: 1px solid color-mix(in srgb, var(--im-ink) 8%, transparent);
  border-radius: var(--im-r-card);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
}
.im-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  /* \u4E0E\u9875\u5934\u540C\u4E3A\u5361\u7247\u5BB9\u5668\uFF0C\u4F46\u5706\u89D2\u7565\u5C0F\uFF08\u539F\u7248 .studio-toolbar 13px\uFF09\u3001
     \u8FB9\u6846\u518D\u6DE1\u4E00\u70B9\u70B9\uFF08\u5B9E\u6D4B rgba(31,41,55,.09)\uFF09 */
  padding: 9px 10px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--im-ink) 9%, transparent);
  border-radius: var(--im-r-toolbar);
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
  border-radius: var(--im-r-float);
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
  border-radius: var(--im-r-control);
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
  /* \u539F\u7248 .btn-icon--sm \u58F0\u660E 30\xD730 / \u5706\u89D2 8\uFF0C\u4F46\u771F\u673A\u5B9E\u6D4B\u5706\u89D2\u662F **10**\uFF1A
     .btn-ghost { border-radius: 10px } \u5199\u5728\u672A\u5206\u5C42\u89C4\u5219\u91CC\uFF0C\u538B\u8FC7\u4E86 @layer \u91CC\u7684
     btn-icon--sm\u3002\u4E24\u5904\u53E0\u7528\u65F6\u7684\u5B9E\u9645\u503C\u4EE5\u5B9E\u6D4B\u4E3A\u51C6\u3002 */
  min-width: 30px;
  min-height: 30px;
  padding: 0;
  border: 0;
  border-radius: var(--im-r-control);
  background: transparent;
  /* \u989C\u8272\u4E0E hover \u6D9F\u6F2A\u4EA4\u7ED9\u540C\u65F6\u6302\u4E0A\u7684 .im-btn-ghost / .im-btn-danger\uFF1A
     \u539F\u7248\u8FD9\u91CC\u5C31\u662F btn-ghost btn-icon btn-icon--sm \u4E09\u4E2A\u7C7B\u53E0\u51FA\u6765\u7684\uFF0C
     \u4E0D\u518D\u53E6\u5199\u4E00\u5957\u4E2D\u6027\u7070\u3002\u4E24\u5957\u5E76\u5B58\u4F1A\u8BA9\u8282\u70B9\u56FE\u6807\u548C\u5DE5\u5177\u680F\u6309\u94AE\u53D8\u6210\u4E24\u79CD\u89C2\u611F\u3002 */
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
  border-radius: var(--im-r-sm);
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
/* \u805A\u7126\uFF1A**\u53EA\u52A0\u4E00\u5708\u67D4\u548C\u5149\u73AF\uFF0C\u8FB9\u6846\u989C\u8272\u4E0D\u53D8\u3001\u4E5F\u6CA1\u6709 outline**\u3002
 *
 * \u4EE5\u4E0B\u90FD\u662F\u539F\u7248\u771F\u673A\u5B9E\u6D4B\uFF08Chromium \u8BA1\u7B97\u503C\uFF0C\u4E0D\u662F\u8BFB\u6E90\u7801\u63A8\u7684\uFF09\uFF1A
 *   \u672A\u805A\u7126 box-shadow: none            border-color: rgba(31,41,55,.14)
 *   \u5DF2\u805A\u7126 box-shadow: 0 0 0 4px \u54C1\u724C\u8272 13%   border-color: rgba(31,41,55,.14)  \u2190 \u6CA1\u53D8
 * \u4E5F\u5C31\u662F\u8BF4\u539F\u7248\u805A\u7126\u65F6**\u4E0D\u52A8\u8FB9\u6846**\uFF1A.field-control:focus \u91CC\u90A3\u6761 border-brand \u5728
 * @layer components \u91CC\uFF0C\u88AB\u672A\u5206\u5C42\u7684 .field-control { border-color: rgba(31,41,55,.14) }
 * \u538B\u6389\u4E86\u3002\u63D2\u4EF6\u6B64\u524D\u65E2\u6539\u8FB9\u6846\u8272\u3001\u53C8\u8865\u4E86\u4E00\u6761 .im-field:focus-visible { outline: 2px \u5B9E\u7EBF }\uFF0C
 * \u4E8E\u662F\u70B9\u4E00\u4E0B\u540C\u65F6\u51FA\u73B0\u300C\u53D8\u8272\u8FB9\u6846 + 4px \u5149\u73AF + 2px \u5B9E\u7EBF\u6846\u300D\u4E09\u5C42\uFF0C\u770B\u7740\u50CF\u91CD\u5F71\u3002
 * \u73B0\u5728\u53EA\u5269\u90A3\u4E00\u5708\u5149\u73AF\u3002 */
.im-field:focus {
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--im-brand) 13%, transparent);
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
/* \u5B57\u6BB5\u4E0B\u9762\u90A3\u6392\u6309\u94AE\uFF1A\u6309\u94AE\u591A\u65F6\u81EA\u52A8\u6362\u884C\uFF0C\u4E0D\u6324\u6210\u4E00\u6761\u3002
 * \u8BBE\u7F6E\u5F39\u7A97\u6539\u9020\u540E\u5DF2\u65E0\u8C03\u7528\u70B9\uFF08\u5B83\u4ECE\u300C\u6BCF\u4E2A\u5B57\u6BB5\u81EA\u5E26\u63D0\u4EA4\u6309\u94AE\u300D\u6539\u6210\u300Cfooter \u4E00\u6B21\u63D0\u4EA4\u300D\uFF09\uFF0C
 * \u4FDD\u7559\u662F\u56E0\u4E3A\u8282\u70B9\u5361\u4E0E\u540E\u7EED\u8868\u5355\u4ECD\u53EF\u80FD\u9700\u8981\uFF1B\u771F\u4E0D\u9700\u8981\u65F6\u518D\u5220\u3002 */
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

/* ---------------- \u5207\u5206\u5F39\u7A97\uFF08canvas/split-dialog.tsx\uFF09 ----------------
 * \u5207\u56FE\u7B97\u6CD5\u6765\u81EA lib/imageSplit.ts\uFF08A \u6863\u9010\u5B57\u79FB\u690D\uFF09\uFF0C\u8FD9\u91CC\u53EA\u8D1F\u8D23\u6392\u7248\uFF1A
 * \u9884\u8BBE chip \u2192 \u884C\u5217\u8F93\u5165 \u2192 \u9884\u89C8\u7F51\u683C \u2192 \u8F93\u51FA\u6587\u4EF6\u540D\u9884\u89C8\u3002
 * \u65E7\u7684\u7248\u672C\u662F\u4E24\u4E2A 1~6 \u7684\u6ED1\u6746 + \u7EC4\u4EF6\u5185\u624B\u5199\u7684\u5207\u56FE\u5FAA\u73AF\u3002 */
.im-split {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.im-split-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.im-split-controls {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
/* \u884C\u5217\u8F93\u5165\uFF1Alabel + \u4E00\u4E2A\u7A84\u8F93\u5165\u6846\u5E76\u6392\u3002\u8F93\u5165\u6846\u5BBD\u5EA6\u56FA\u5B9A 4rem \u2014\u2014 \u53EA\u6709\u4E00\u4F4D\u6570\uFF0C
   \u94FA\u6EE1\u6574\u884C\u4F1A\u8BA9\u4EBA\u4EE5\u4E3A\u8981\u586B\u5F88\u957F\u7684\u4E1C\u897F\u3002 */
.im-split-axis {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--im-ink-2);
}
.im-split-axis-input {
  width: 4rem;
  padding: 6px 8px;
  text-align: center;
}
.im-split-summary {
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-split-stage-wrap {
  display: flex;
  justify-content: center;
}
.im-split-stage {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  /* \u56FE\u5F53\u5E95\u8272\u94FA\u6EE1\uFF1A\u53EA\u505A\u53C2\u8003\uFF0C\u4E0D\u53C2\u4E0E\u5207\u6362\uFF1B\u7F51\u683C\u7EBF\u53E0\u5728\u4E0A\u9762 */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.im-split-line {
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
.im-split-names {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 11.5px;
  color: var(--im-ink-3);
}
.im-split-name {
  padding: 2px 6px;
  border-radius: var(--im-r-sm);
  background: var(--im-surface-inset, rgba(15, 17, 21, 0.05));
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.im-split-note {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-split-error {
  margin: 0;
  font-size: 12px;
  color: var(--im-danger);
}

/* ---------------- \u8BBE\u7F6E\u5F39\u7A97\uFF08canvas/settings-dialog.tsx\uFF09 ----------------
 *
 * \u8FD9\u4E00\u5757\u662F 2026-11-16 \u91CD\u5199\u7684\u3002\u65E7\u7248\u628A\u516D\u4E2A\u5757\u5E73\u94FA\uFF08\u4E24\u4E2A\u4E0B\u62C9 / \u63D2\u4EF6\u5185\u63A5\u53E3 / \u751F\u6548\u4E2D\u89C4\u683C\u8868 /
 * \u76EE\u5F55 / \u8F93\u51FA\u76EE\u5F55 / \u9884\u7B97\uFF09\uFF0C\u4E03\u4E2A\u5B57\u6BB5\u5168\u7AD6\u6392\uFF0C\u5185\u5BB9\u9AD8 1080px \u800C\u53EF\u89C6\u533A\u53EA\u6709 622px\uFF1B
 * \u7EC4\u6807\u9898\u4E0E\u5B57\u6BB5 label \u7684**\u5B57\u53F7\u3001\u5B57\u91CD\u3001\u989C\u8272\u5B8C\u5168\u76F8\u540C**\uFF08\u53EA\u6709 margin \u5DEE 3px\uFF09\uFF0C
 * \u56DB\u6761\u4E00\u6A21\u4E00\u6837\u7684 1px \u5206\u9694\u7EBF\u4E0D\u8868\u8FBE\u4EFB\u4F55\u5C42\u7EA7\u3002
 *
 * \u73B0\u5728\uFF1A\u4E24\u5217\u6805\u683C\uFF08\u5DE6 label / \u53F3\u63A7\u4EF6\uFF09+ \u4E09\u7EA7\u5C42\u7EA7\uFF08\u7EC4\u6807\u9898 13/600/\u4E3B\u6587\u5B57\u8272\u3001
 * \u5B57\u6BB5 label 12/500/\u4E8C\u7EA7\u8272\u3001\u63D0\u793A 11.5/\u4E09\u7EA7\u8272\uFF09+ \u5206\u9694\u53EA\u51FA\u73B0\u5728\u7EC4\u4E4B\u95F4\u3002
 *
 * \u4E3A\u4EC0\u4E48 label \u8D70\u5DE6\u5217\u800C\u4E0D\u662F\u5728\u63A7\u4EF6\u4E0A\u65B9\uFF1A\u4E03\u4E2A\u5B57\u6BB5\u5404\u7701\u7EA6 20px\uFF0C\u53E0\u52A0\u300C\u751F\u6548\u4E2D\u300D\u4ECE\u4E09\u884C\u8868
 * \u6536\u6210\u4E00\u884C\u72B6\u6001\u53E5\u7701\u6389\u7684\u7EA6 175px\uFF0C\u6574\u5C4F\u624D\u8FDB\u5F97\u4E86\u53EF\u89C6\u533A\uFF08\u4E0D\u7528\u6EDA 458px \u624D\u770B\u5230\u9884\u7B97\uFF09\u3002 */
.im-settings {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
/* \u300C\u751F\u6548\u4E2D\u300D\uFF1A\u4E00\u884C\u4E8B\u5B9E\u3002\u5B83\u56DE\u7B54\u300C\u73B0\u5728\u5B9E\u9645\u5728\u7528\u4EC0\u4E48\u300D\uFF0C\u53EA\u5728\u4FDD\u5B58\u540E\u53D8 \u2014\u2014
   \u505A\u6210\u8F93\u5165\u6846\u4F1A\u8BA9\u4EBA\u4EE5\u4E3A\u80FD\u5728\u90A3\u513F\u6539\uFF08\u4E0A\u6E38\u540C\u4E00\u5224\u65AD\uFF09\u3002 */
.im-settings-status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-settings-status b {
  font-weight: 600;
  color: var(--im-ink-2);
}
.im-settings-chip {
  margin-left: 2px;
}
/* \u4E00\u7EC4\u51B3\u5B9A\uFF1A\u7EC4\u6807\u9898\u6BD4\u5B57\u6BB5 label \u5927\u4E00\u6863\uFF0C\u9760\u5B57\u91CD\u4E0E\u989C\u8272\u518D\u62C9\u5F00\u4E00\u6B21 */
.im-settings-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--im-line);
}
.im-settings-group-title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--im-ink);
}
/* \u4E24\u5217\u6805\u683C\uFF1Alabel \u53F3\u5BF9\u9F50\u3001\u4E0E\u8F93\u5165\u6846\u9996\u884C\u5BF9\u9F50\uFF08\u8F93\u5165\u6846 40px \u9AD8\u300114px \u5B57\uFF0C
   \u9996\u884C\u4E2D\u70B9\u7EA6 12px\uFF0C\u6545 padding-top \u53D6 9px \u89C6\u89C9\u6700\u9F50\uFF09\u3002
   \u5217\u5BBD 9.5rem \u662F\u91CF\u51FA\u6765\u7684\uFF1A\u300C\u56FE\u7247\u8F93\u51FA\u76EE\u5F55\u300D7 \u4E2A\u6C49\u5B57\u5728 12px \u4E0B\u7EA6 84px\uFF0C
   8.5rem(=136px) \u65F6\u5B83\u88AB\u6298\u6210\u4E24\u884C\u3001\u628A\u884C\u9AD8\u6491\u9AD8\u4E00\u500D\u3002 */
.im-field-row {
  display: grid;
  grid-template-columns: 9.5rem minmax(0, 1fr);
  column-gap: 16px;
  align-items: start;
}
.im-field-label {
  padding-top: 9px;
  font-size: 12px;
  font-weight: 500;
  color: var(--im-ink-2);
  text-align: right;
  line-height: 1.4;
}
.im-field-main {
  min-width: 0;
}
/* \u63A7\u4EF6 + \u5B83\u53F3\u4FA7\u7684\u52A8\u4F5C\u6309\u94AE\uFF08\u9009\u62E9\u2026 / \u6D4B\u8BD5\u8FDE\u901A / \u6253\u5F00\uFF09\u3002\u6309\u94AE\u5728\u8FD9\u4E00\u884C\u800C**\u4E0D\u5728**
   label \u5217\uFF1Alabel \u5217\u53EA\u6709 9.5rem\uFF0C\u585E\u8FDB\u53BB\u4F1A\u628A\u300CAPI Key\u300D\u6324\u6210\u4E24\u884C\u3002 */
.im-field-control {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
}
.im-field-control > .im-field,
.im-field-control > .im-select-root {
  flex: 1;
  min-width: 0;
}
.im-field-control > .im-btn-ghost {
  flex: none;
}
/* \u7A84\u5C4F\uFF08\u5BBF\u4E3B\u4FA7\u680F\u62C9\u5BBD\u3001\u6216\u9762\u677F\u88AB\u6324\u5230\u5F88\u7A84\u65F6\uFF09\u6805\u683C\u584C\u6210\u4E00\u5217\uFF1A
   label \u56DE\u5230\u63A7\u4EF6\u4E0A\u65B9\u3001\u5DE6\u5BF9\u9F50\u30028.5rem \u7684\u56FA\u5B9A\u5217\u5728 360px \u4EE5\u4E0B\u4F1A\u5403\u6389\u4E09\u5206\u4E4B\u4E00\u5BBD\u5EA6\u3002 */
@media (max-width: 620px) {
  .im-field-row {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 4px;
  }
  .im-field-label {
    padding-top: 0;
    text-align: left;
  }
}
/* \u300C\u8FD9\u7EC4\u5B57\u6BB5\u6536\u8D77\u65F6\u300D\u90A3\u4E00\u884C\u8BF4\u660E\uFF1A\u4E0E hint \u540C\u6863\uFF0C\u4F46\u6574\u884C\u7F29\u8FDB\u5BF9\u9F50\u5230\u63A7\u4EF6\u5217\uFF0C
   \u8BFB\u8D77\u6765\u50CF\u300C\u8FD9\u4E00\u680F\u7684\u8865\u5145\u300D\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u65B0\u7684\u5B57\u6BB5\u6807\u9898\u3002 */
.im-settings-hint-line {
  margin: 0;
  padding-left: calc(9.5rem + 16px);
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
@media (max-width: 620px) {
  .im-settings-hint-line {
    padding-left: 0;
  }
}
.im-settings-probe {
  margin-top: -4px;}
.im-settings-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: -4px;
}
/* \u5371\u9669\u52A8\u4F5C\uFF08\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF09\uFF1A\u653E\u5728\u7EC4\u5185\u3001\u4E8C\u6B21\u786E\u8BA4\u540E\u624D\u51FA\u73B0\u6309\u94AE\u3002
   \u65E7\u7248\u5B83\u662F footer \u7684\u7B2C\u4E00\u4E2A\u6309\u94AE\uFF0C\u7D27\u6328\u300C\u53D6\u6D88\u300D\uFF0Cghost \u6837\u5F0F\u3001\u70B9\u4E86\u7ACB\u523B\u5199\u76D8\u5173\u7A97\u3002 */
.im-settings-danger {
  padding: 10px 12px;
  border-radius: var(--im-r-sm);
  background: color-mix(in srgb, var(--im-danger) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--im-danger) 24%, transparent);
}
.im-settings-danger-text {
  margin: 0 0 8px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-2);
}
.im-settings-danger-actions {
  display: flex;
  gap: 8px;
}
.im-settings-danger-link {
  align-self: flex-start;
  padding: 0;
  border: 0;
  background: none;
  color: var(--im-danger);
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.im-settings-danger-link:disabled {
  opacity: 0.5;
  cursor: default;
}

/* \u53EA\u8BFB\u300C\u952E \u2192 \u503C\u300D\u89C4\u683C\u8868\uFF1A\u7167\u642C\u539F\u7248 .spec-list\uFF08index.css:1226\uFF09\u3002
   \u7528\u5728\u8BBE\u7F6E\u5F39\u7A97\u7684\u300C\u751F\u6548\u4E2D\u300D\u4E00\u6BB5 \u2014\u2014 \u90A3\u51E0\u6761\u662F**\u4E8B\u5B9E**\u4E0D\u662F\u8F93\u5165\u9879\uFF08\u6539\u6587\u4EF6\u624D\u80FD\u52A8\u5B83\uFF09\uFF0C
   \u505A\u6210\u8F93\u5165\u6846\u4F1A\u8BA9\u7528\u6237\u4EE5\u4E3A\u80FD\u6539\u3002 */
.im-spec-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.im-spec-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}
.im-spec-key {
  flex: none;
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-spec-val {
  flex: 1;
  min-width: 0;
  text-align: right;
  font-size: 12px;
  color: var(--im-ink-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* \u5E26\u5206\u5272\u7EBF\u7684\u5BBD\u677E\u6863\uFF08\u539F\u7248 .spec-list--roomy\uFF09\uFF1A\u6574\u6BB5\u8BFB\u8D77\u6765\u50CF\u4E00\u4EFD\u6E05\u5355 */
.im-spec-list.is-roomy .im-spec-row {
  padding: 8px 0;
  border-bottom: 1px solid var(--im-line);
}
.im-spec-list.is-roomy .im-spec-row:last-child { border-bottom: 0; }
.im-spec-list.is-roomy .im-spec-key { font-size: 13px; }
.im-spec-list.is-roomy .im-spec-val { font-size: 13px; }
/* \u503C\u91CC\u7684\u7B49\u5BBD\u6BB5\uFF08\u63A5\u53E3\u5730\u5740\u90A3\u4E00\u6761\uFF09 */
.im-spec-mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11.5px; }

/* \u8BBE\u7F6E\u5F39\u7A97\u91CC\u7684\u5206\u8282\uFF1A\u539F\u7248\u7528 mt-5 border-t pt-4 \u5212\u5F00\u300C\u8F93\u5165\u533A\u300D\u4E0E\u300C\u53EA\u8BFB\u4E8B\u5B9E\u300D */
.im-section {
  padding-top: 16px;
  border-top: 1px solid var(--im-line);
}
.im-section-label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--im-ink-2);
}
/* \u5F85\u751F\u6548\u63D0\u793A\u884C\uFF1A\u56FE\u6807\u89D2\u6807 + \u4E00\u53E5\u8BF4\u660E\uFF08\u539F\u7248 pending \u90A3\u6761\uFF09 */
.im-pending-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 12px;
  color: var(--im-ink-3);
}

/* ---------------- \u7C98\u8D34\u5BFC\u5165\u7684\u9884\u89C8\u533A\uFF08\u7167\u642C\u539F\u7248 .prompt-import-*\uFF09 ----------------
   \u539F\u7248 index.css:792-801\u3002\u9884\u89C8\u5361\u4E0E\u300C\u8BC6\u522B\u5230 N \u5F20\u300D\u662F\u540C\u4E00\u6761\u4FE1\u606F\u94FE\uFF1A
   \u4E0A\u9762\u62A5\u6570\u91CF\uFF0C\u4E0B\u9762\u9010\u5F20\u5217\u51FA\u89E3\u6790\u7ED3\u679C\uFF0C\u95EE\u9898\u5355\u72EC\u4E00\u6761\u7EA2\u5E95\u3002 */
.im-import-preview {
  max-height: 260px;
  overflow-y: auto;
  padding-right: 2px;
}
.im-import-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-import-summary-error { color: var(--im-danger); }
/* \u4E00\u5F20\u5361\uFF1A\u5916\u89C2\u4E0E\u753B\u5E03\u4E0A\u7684\u63D0\u793A\u8BCD\u5361\u540C\u6E90\uFF08\u6D6E\u5C42\u6863\u5E95 + \u7EC6\u8FB9\u6846 + \u63A7\u4EF6\u5706\u89D2\uFF09\uFF0C
   \u8BA9\u7528\u6237\u770B\u5230\u7684\u9884\u89C8\u5C31\u662F\u4ED6\u5C06\u8981\u5F97\u5230\u7684\u4E1C\u897F */
.im-import-card {
  margin-top: 8px;
  padding: 10px 12px;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  background: var(--im-surface-float);
}
.im-import-card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 11px;
  color: var(--im-ink-3);
}
.im-import-card-meta strong { color: var(--im-ink); font-weight: 600; }
.im-import-card-fallback { color: var(--im-warn); }
/* \u9884\u89C8\u91CC\u53EA\u7ED9\u4E00\u884C\uFF1A\u8FD9\u91CC\u7684\u4F5C\u7528\u662F\u300C\u8BA4\u5F97\u51FA\u662F\u54EA\u5F20\u300D\uFF0C\u5B8C\u6574\u6B63\u6587\u8981\u56DE\u5361\u7247\u91CC\u770B */
.im-import-card-text {
  margin: 5px 0 0;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;
  color: var(--im-ink-2);
  text-overflow: ellipsis;
  white-space: nowrap;
}
.im-import-issue {
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: var(--im-r-sm);
  background: color-mix(in srgb, var(--im-danger) 6%, transparent);
  font-size: 12px;
  color: var(--im-danger);
}
.im-row { display: flex; align-items: center; gap: 6px; }
.im-muted { color: var(--im-ink-3); }
.im-node-title { font-size: 12px; font-weight: 600; color: var(--im-brand-dark); }

/* ---------------- \u81EA\u7ED8\u4E0B\u62C9\uFF08\u7167\u642C Imagora \u7684 .select-* 16 \u6761\u89C4\u5219\uFF09 ----------------
   \u539F\u7248\u7528 Tailwind @apply \u5199\uFF0C\u8FD9\u91CC\u5168\u90E8\u5C55\u5F00\u6210\u666E\u901A\u58F0\u660E\uFF1B\u989C\u8272\u4E00\u5F8B\u8D70 --im-* \u8BED\u4E49 token\u3002
   \u80CC\u666F\u4E0E\u6587\u5B57\u6210\u5BF9\u53D6\u81EA\u540C\u4E00\u5957 token \u2014\u2014 \u6DF7\u7528\u4E24\u5957\u4F1A\u51FA\u300C\u9ED1\u5E95\u9ED1\u5B57\u300D\u3002 */
.im-select-root {
  position: relative;
  display: inline-block;
  /* \u5BBD\u5EA6\u4EA4\u7ED9\u89E6\u53D1\u5668\u81EA\u5DF1\u7684\u5185\u5BB9\uFF1A\u5199\u6B7B max-width \u4F1A\u628A\u300C\u706B\u5C71\u65B9\u821F\u5B98\u65B9\u300D\u8FD9\u79CD\u4E2D\u6587\u540D
     \u622A\u6210\u300C\u706B\u5C71\u65B9\u821F\u5B98...\u300D\u3002\u4E0A\u9650\u53EA\u4F5C\u515C\u5E95\uFF0C\u9632\u6B62\u8D85\u957F\u6A21\u578B ID \u628A\u6574\u884C\u6491\u7834\u3002 */
  min-width: 0;
  max-width: 320px;
}
/* \u8868\u5355\u91CC\u5360\u6EE1\u4E00\u884C\uFF08\u8BBE\u7F6E\u5F39\u7A97\u7684\u4E24\u4E2A\u4E0B\u62C9\uFF09\uFF1A\u5F39\u7A97\u91CC\u7684\u4E0B\u62C9\u8BE5\u548C\u8F93\u5165\u6846\u540C\u5BBD\uFF0C
   \u5DE5\u5177\u680F\u91CC\u90A3\u51E0\u9897\u624D\u662F\u6309\u5185\u5BB9\u81EA\u9002\u5E94\u3002 */
.im-select-root.is-block {
  display: block;
  width: 100%;
  max-width: none;
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
  border-radius: var(--im-r-sm);
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
  border-radius: var(--im-r-sm);
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

/* \u53F3\u952E\u62D6\u62FD\u6846\u9009\u7684\u9009\u6846\uFF1A\u4E0E Imagora \u540C\u89C2\u611F\uFF08\u54C1\u724C\u8272\u63CF\u8FB9 + \u6DE1\u586B\u5145\uFF09\u3002
   \u53EA\u505A\u89C6\u89C9\u53CD\u9988\uFF0C\u6240\u4EE5 pointer-events:none\uFF0C\u7EDD\u4E0D\u80FD\u6321\u4F4F\u6846\u9009\u81EA\u8EAB\u7684\u9F20\u6807\u4E8B\u4EF6\u3002 */
.im-marquee {
  position: absolute;
  z-index: 1002;
  pointer-events: none;
  border: 1px solid color-mix(in srgb, var(--im-brand) 80%, transparent);
  border-radius: 2px;
  background: color-mix(in srgb, var(--im-brand) 10%, transparent);
}

/* \u83DC\u5355\u4E13\u7528\u4E09\u6001\uFF1A\u5371\u9669\u9879\uFF08\u5220\u9664\uFF09\u4E0E\u7981\u7528\u9879\uFF08\u5982\u300C\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u6587\u4EF6\u300D\uFF09\u3002
   \u6D6E\u5C42\u5BB9\u5668\u590D\u7528 .im-select-list\uFF0C\u53EA\u4E3A\u83DC\u5355\u8865\u8FD9\u4E09\u4E2A\u7C7B\uFF0C\u4E0D\u53E6\u9020\u4E00\u5957\u5916\u89C2\u3002 */
.im-select-option.is-danger { color: var(--im-danger); }
.im-select-option.is-disabled {
  color: var(--im-ink-3);
  cursor: default;
}
/* \u5206\u9694\u7EBF\uFF1A1px \u7EBF + \u4E0A\u4E0B\u5404 4px\uFF0C\u4E0E lib/contextMenu.ts \u7684 SEPARATOR_HEIGHT \u4E25\u683C\u5BF9\u5E94
   \uFF08\u83DC\u5355\u9AD8\u5EA6\u9760\u5E38\u91CF\u63A8\u7B97\uFF0C\u4E24\u8FB9\u4E0D\u4E00\u81F4\u65F6\u8D34\u5E95\u5F39\u51FA\u7684\u83DC\u5355\u4F1A\u88AB\u88C1\u6389\u6700\u540E\u4E00\u9879\uFF09\u3002 */
.im-menu-separator {
  flex: none;
  height: 1px;
  margin: 4px 6px;
  background: var(--im-line);
}

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
  border-radius: var(--im-r-sm);
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

/* \u9876\u680F\u90A3\u4E24\u4E2A\u4E0B\u62C9\uFF08\u6765\u6E90 / \u6A21\u578B\uFF09**\u56FA\u5B9A\u5BBD\u5EA6**\u3002
 *
 * \u4E3A\u4EC0\u4E48\u4E0D\u4EA4\u7ED9\u5185\u5BB9\u81EA\u9002\u5E94\uFF1A\u8FD9\u4E00\u884C\u662F\u300C\u54C1\u724C + \u6765\u6E90 + \u6A21\u578B + \u6210\u672C + \u5F39\u6027\u5360\u4F4D + \u8BBE\u7F6E\u300D\uFF0C
 * \u6BCF\u4E2A\u63A7\u4EF6\u90FD\u6309\u5185\u5BB9\u6491\u5F00\u65F6\uFF0C\u5207\u6362\u6765\u6E90\uFF08profile \u540D\u957F\u5EA6\u4E0D\u540C\uFF09\u4F1A\u8BA9\u540E\u9762\u6574\u6392\u6309\u94AE\u5DE6\u53F3\u6A2A\u8DF3\uFF1B
 * \u800C\u5185\u5BB9\u81EA\u9002\u5E94\u8FD8\u6709\u53E6\u4E00\u4E2A\u526F\u4F5C\u7528 \u2014\u2014 \u6536\u8D77\u65F6\u6309\u5F53\u524D\u503C\u7684\u5BBD\u5EA6\u7F29\uFF0C\u6362\u4E00\u4E2A\u77ED\u540D\u5B57\u6574\u884C\u53C8\u53D8\u4E00\u6B21\u3002
 * \u56FA\u5B9A\u5BBD\u5EA6\u540E\u4F4D\u7F6E\u7A33\u5B9A\uFF0C\u957F\u540D\u5B57\u5728\u89E6\u53D1\u5668\u91CC\u7701\u7565\u53F7\u622A\u65AD\uFF08\u5B8C\u6574\u503C\u4ECD\u5728 title \u4E0E\u5C55\u5F00\u5217\u8868\u91CC\uFF09\u3002
 *
 * \u5BBD\u5EA6\u7684\u53D6\u6CD5\uFF1A\u6765\u6E90\u540D\u6700\u957F\u89C1\u300C\u706B\u5C71\u65B9\u821F\u5B98\u65B9\u300D\uFF086 \u4E2A\u6C49\u5B57 \u2248 72px\uFF09\uFF0C\u6A21\u578B\u540D\u6700\u957F\u89C1
 * doubao-seedream-5-0-pro-260628\uFF0828 \u5B57\u7B26\uFF09\u3002200 / 230 \u662F\u300C\u5B57\u53F7 12px \u4E0B\u80FD\u653E\u4E0B
 * \u5E38\u89C1\u53D6\u503C\u3001\u53C8\u4E0D\u81F3\u4E8E\u628A\u300C\u8BBE\u7F6E\u300D\u6324\u51FA\u9876\u680F\u300D\u7684\u5B9E\u6D4B\u503C\uFF0C\u522B\u518D\u6309\u5355\u4E2A\u540D\u5B57\u8C03\u7A84\u3002 */
.im-select-profile { width: 200px; max-width: none; }
.im-select-profile .im-select-trigger { width: 100%; }
.im-select-model { width: 230px; max-width: none; }
.im-select-model .im-select-trigger { width: 100%; }

/* \u8282\u70B9\u5185\u7684\u8F93\u5165/\u4E0B\u62C9\u7528\u7D27\u51D1\u6863\uFF1A\u5B57\u53F7\u538B\u5230 12px\u3002
 * \u26A0\uFE0F \u7EB5\u5411\u5185\u8FB9\u8DDD\u4E0E\u5DE6\u53F3\u5185\u8FB9\u8DDD**\u4FDD\u6301 8px 20px \u4E0D\u53D8** \u2014\u2014 \u539F\u7248\u8282\u70B9\u91CC\u7684 textarea \u5B9E\u6D4B\u5C31\u662F
 * padding: 8px 20px; font-size: 12px\uFF08\u5B57\u53F7\u662F\u5B83\u81EA\u5DF1\u6302\u7684 text-xs\uFF0C\u5185\u8FB9\u8DDD\u6CA1\u88AB\u8986\u76D6\uFF09\u3002
 * \u65E9\u5148\u8FD9\u91CC\u8DDF\u7740\u6536\u6210 4px 8px\uFF0C\u6BD4\u539F\u7248\u7D27\u4E00\u6863\uFF0C\u5361\u7247\u91CC\u90A3\u51E0\u884C\u63D0\u793A\u8BCD\u663E\u5F97\u8D34\u8FB9\u3002 */
.im-field--compact,
.im-canvas .im-field {
  height: 30px;
  padding: 4px 20px;
  font-size: 12px;
}
.im-canvas textarea.im-field {
  height: auto;
  padding: 8px 20px;
}

/* ---------------- \u8282\u70B9\u5361\u7247\uFF08\u7167\u642C .panel-card + .node-pop\uFF09 ----------------
   \u4E09\u7C7B\u8282\u70B9\u5171\u7528\u540C\u4E00\u5757\u9762\u677F\uFF0C\u9760\u5185\u5BB9\u533A\u5206\uFF0C\u4E0D\u9760\u8272\u76F8\u2014\u2014\u4E0E Imagora \u4E00\u81F4\u3002

   \u539F\u7248\u8282\u70B9\u6839\u5143\u7D20\u540C\u65F6\u6302 .panel-card \u4E0E .node-pop \u4E24\u4E2A\u7C7B\uFF0C\u540E\u8005\u662F**\u672A\u5206\u5C42 + !important**
   \u7684\u8986\u76D6\uFF1A\u5E95\u8272\u8D70\u6D6E\u5C42\u6863\u3001\u8FB9\u6846\u66F4\u6D45\u3001\u9634\u5F71\u662F\u300C12/26 \u7684\u5927\u6295\u5F71 + \u9876\u90E8 1px \u5185\u9AD8\u5149\u300D\u3002
   \u90A3\u4E2A\u5185\u9AD8\u5149\u662F\u539F\u7248\u5361\u9762\u770B\u4E0A\u53BB\u300C\u6709\u539A\u5EA6\u300D\u7684\u6765\u6E90\uFF0C\u522B\u7701\u3002 */
.im-panel-card {
  position: relative;
  /* \u8282\u70B9\u5361\u91CC\u300Cwidth + padding\u300D\u662F\u5E38\u6001\uFF0C\u6CA1\u8FD9\u4E00\u6B65\u4F1A\u6309 content-box \u7B97 \u2192
     \u5BBD\u5EA6\u591A\u51FA\u4E24\u500D\u5185\u8FB9\u8DDD\uFF0C\u53F3\u4FA7\u51ED\u7A7A\u51FA\u73B0\u4E00\u6761\u6B7B\u533A\uFF08\u89C1 nodes.tsx \u7684 146 \u90A3\u6761\u6CE8\u91CA\uFF09\u3002 */
  box-sizing: border-box;
  border: 1px solid var(--im-line);
  /* \u539F\u7248 .panel-card \u7684 18px \u5199\u5728\u672A\u5206\u5C42\u89C4\u5219\u91CC\uFF0C\u538B\u8FC7 @layer \u7684 rounded-xl(12) */
  border-radius: var(--im-r-surface);
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-node);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
/* \u9009\u4E2D\u6001\uFF1A\u539F\u7248\u662F outline 2px + offset 1px\uFF0C\u4E0D\u662F box-shadow \u73AF \u2014\u2014
   outline \u4E0D\u5360\u5E03\u5C40\u3001\u4E5F\u4E0D\u88AB\u5706\u89D2\u88C1\uFF0C\u5361\u7247\u5BC6\u96C6\u65F6\u4E0D\u4F1A\u4E92\u76F8\u6324\u3002 */
.im-panel-card.is-selected {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}
.im-panel-card.is-missing { border-color: var(--im-danger); }

.im-thumb {
  /* \u539F\u7248 h-40 w-32\uFF1A\u5BBD 128\u3001\u9AD8 160 \u2014\u2014 \u7AD6\u6784\u56FE\u4E5F\u653E\u5F97\u4E0B\uFF0C\u4E0D\u4F1A\u628A\u5361\u9762\u538B\u6241 */
  width: 128px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* \u539F\u7248\u7F29\u7565\u56FE\u662F .rounded\uFF084px\uFF09\uFF0C\u4E0D\u662F 8 */
  border-radius: var(--im-r-xs);
  background: var(--im-surface-inset);
  cursor: zoom-in;
}
.im-thumb img { width: 100%; height: 100%; object-fit: contain; display: block; }
/* \u7F29\u7565\u56FE\u5360\u4F4D\uFF1A\u8FD8\u5728\u751F\u6210\u65F6\u5148\u5360\u4F4F\u683C\u5B50\uFF08\u5C3A\u5BF8\u7531 .im-thumb \u56FA\u5B9A\uFF0C\u4E0D\u4F1A\u6709\u5E03\u5C40\u8DF3\u52A8\uFF09\u3002
   \u5E95\u8272\u4ECE\u54C1\u724C\u8272\u6781\u6DE1\u63BA\u51FA\u6765\uFF0C\u4E0E\u5361\u7247\u9762\u540C\u65CF\uFF1B\u4E0D\u52A0\u52A8\u753B\u2014\u2014\u5B83\u901A\u5E38\u53EA\u5B58\u5728\u51E0\u5341\u6BEB\u79D2\u3002 */
.im-thumb-placeholder {
  width: 100%;
  height: 100%;
  display: block;
  background: color-mix(in srgb, var(--im-brand) 6%, transparent);
}
.im-thumb-label { margin-top: 4px; max-width: 128px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: var(--im-ink-2); }

/* ---------------- LOD \u62BD\u8C61\u6A21\u5F0F\uFF08\u7F29\u5230 10% \u4EE5\u4E0B\uFF09 ----------------
 * \u7167\u642C\u539F\u7248 PromptNode \u7684 lod \u5206\u652F\uFF1A\u5361\u9762\u5C3A\u5BF8\u4E0D\u53D8\uFF0C\u53EA\u628A\u5185\u5BB9\u6362\u6210
 * \u300C\u6807\u9898\u5927\u5B57 + \u72B6\u6001\u5C45\u4E2D\u300D\u3002\u539F\u7248\u5B9E\u6D4B\uFF1A
 *   \u6807\u9898  text-3xl (30px) / font-semibold / leading-tight / text-brand-dark
 *   \u72B6\u6001  text-xl  (20px) / font-medium / \u56DB\u6001\u5404\u4E00\u6863\u8272
 *   \u5E03\u5C40  \u5C45\u4E2D\u5217 / gap-3 / \u5361\u9762 min-h-[320px] !w-[380px] !p-3
 * \u5C3A\u5BF8\u4E0E\u5185\u8FB9\u8DDD\u7531 JSX \u7684\u884C\u5185\u6837\u5F0F\u7ED9\uFF08\u8DDF\u7740 380/320 \u4E00\u8D77\u8BFB\uFF0C\u6539\u4E00\u5904\u5C31\u591F\uFF09\uFF0C\u8FD9\u91CC\u53EA\u7BA1\u6392\u7248\u4E0E\u5B57\u8272\u3002 */
.im-node-lod {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
}
.im-lod-title {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.15;
  /* \u539F\u7248 text-brand-dark\u3002\u6211\u4EEC\u7684 --im-brand-dark \u5C31\u662F\u5BBF\u4E3B label-primary\uFF08\u8FD1\u9ED1\uFF09\uFF0C
     \u6697\u8272\u4E0B\u81EA\u52A8\u7FFB\u6210\u8FD1\u767D\uFF0C\u4E0E\u5B8C\u6574\u6A21\u5F0F\u6807\u9898\u540C\u8272\uFF0C\u4E24\u79CD\u6A21\u5F0F\u4E0D\u4F1A\u4E00\u6DF1\u4E00\u6D45\u3002 */
  color: var(--im-brand-dark);
}
.im-lod-status {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 500;
}
/* \u72B6\u6001\u56DB\u8272\uFF1A\u4E0E\u5B8C\u6574\u6A21\u5F0F\u7684\u5706\u70B9\u540C\u6E90\uFF08\u6392\u961F\u7425\u73C0 / \u751F\u6210\u4E2D\u54C1\u724C / \u5B8C\u6210\u7EFF / \u5931\u8D25\u7EA2\uFF09\uFF0C
   \u8FD9\u6837\u7F29\u8FDC\u4E86\u4E5F\u80FD\u4ECE\u989C\u8272\u8BA4\u51FA\u300C\u54EA\u51E0\u5F20\u8FD8\u5728\u8DD1\u300D\u3002 */
.im-lod-status.is-idle { color: var(--im-ink-3); }
.im-lod-status.is-queued { color: var(--im-warn); }
.im-lod-status.is-running {
  color: var(--im-brand);
  /* \u539F\u7248 animate-pulse\uFF1A\u6574\u884C\u547C\u5438\u3002\u62BD\u8C61\u6A21\u5F0F\u4E0B\u6CA1\u6709\u8FDB\u5EA6\u6761\u4E5F\u6CA1\u6709\u79D2\u6570\u7684\u4F4D\u7F6E\uFF0C
     \u53EA\u80FD\u9760\u8FD9\u4E00\u4E0B\u4E00\u4E0B\u7684\u660E\u6697\u8868\u8FBE\u300C\u8FD8\u5728\u52A8\u300D\u3002 */
  animation: im-lod-pulse 1.6s ease-in-out infinite;
}
.im-lod-status.is-done { color: var(--im-ok); }
.im-lod-status.is-failed { color: var(--im-danger); }
@keyframes im-lod-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.45; }
}
/* \u65E0\u969C\u788D\uFF1A\u7CFB\u7EDF\u5F00\u4E86\u300C\u51CF\u5C11\u52A8\u6001\u6548\u679C\u300D\u5C31\u522B\u8BA9\u6574\u5F20\u5361\u547C\u5438 */
@media (prefers-reduced-motion: reduce) {
  .im-lod-status.is-running { animation: none; }
}

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
  border-radius: var(--im-r-sm);
  background: var(--im-surface-float);
  /* \u539F\u7248 .node-actions \u5B9E\u6D4B rgba(32,43,51,.13)\uFF0C\u4E0E .node-pop \u8FB9\u6846\u540C\u503C \u2014\u2014
     \u6BD4\u901A\u7528 --im-line \u7565\u6DF1\u4E00\u70B9\u70B9\uFF0C\u64CD\u4F5C\u680F\u624D\u4ECE\u753B\u5E03\u5E95\u4E0A\u300C\u6D6E\u300D\u5F97\u51FA\u6765\u3002 */
  border: 1px solid color-mix(in srgb, var(--im-ink) 13%, transparent);
  box-shadow: var(--im-shadow-float);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease;
}
/* \u4E24\u4E2A\u6839\u8282\u70B9\u5404\u6709\u4E00\u6761 hover \u89C4\u5219\u3002\u56FE\u7247\u7EC4\uFF08.im-group-node\uFF09\u539F\u5148**\u6F0F\u4E86**\u8FD9\u4E00\u6761\uFF0C
 * \u4E8E\u662F\u7EC4\u53F3\u4FA7\u7684\u300C\u5220\u9664\u56FE\u7247\u7EC4\u300D\u6C38\u8FDC\u662F opacity:0 + pointer-events:none \u2014\u2014
 * \u9F20\u6807\u626B\u8FC7\u53BB\u4EC0\u4E48\u90FD\u4E0D\u51FA\u73B0\uFF0C\u53EA\u80FD\u9760\u53F3\u952E\u83DC\u5355\u5220\u3002\u4E0A\u6E38\u6CA1\u6709\u8FD9\u4E2A\u95EE\u9898\uFF1A\u5B83\u7684 NodeActions
 * \u6302\u5728 Tailwind \u7684 group-hover: \u4E0A\uFF0C\u9760\u6839\u8282\u70B9\u7684 group \u7C7B\u65E0\u6761\u4EF6\u751F\u6548\u3002
 *
 * TODO\uFF08\u4E0B\u4E00\u8F6E\uFF09\uFF1A\u4E24\u884C\u91CD\u590D\u9009\u62E9\u5668\u6362\u6210\u5171\u4EAB\u6839\u7C7B\uFF08\u5982 .im-node-shell:hover .im-rail\uFF09\uFF0C
 * \u7531 panel-card \u4E0E group-node \u5404\u81EA\u6302\u4E0A\u3002\u73B0\u5728\u5148\u6309\u300C\u4E00\u884C\u6B62\u8840\u300D\u5904\u7406\uFF0C\u907F\u514D\u4E3A\u4E86\u6574\u9F50
 * \u540C\u65F6\u52A8\u4E24\u4E2A\u7EC4\u4EF6\u7684 className \u4E0E\u5B83\u4EEC\u7684\u5192\u70DF\u65AD\u8A00\u3002 */
.im-panel-card:hover .im-rail,
.im-group-node:hover .im-rail { opacity: 1; pointer-events: auto; }

/* ---------------- \u56FE\u7247\u7EC4\u8282\u70B9\uFF08\u7167\u642C Imagora \u7684 GroupNode \u53E0\u5361\uFF09 ----------------
 * \u7ED3\u6784\u662F**\u4E09\u5757**\uFF1A\u5916\u5C42\u662F\u8282\u70B9\u6839\uFF08.node-pop\uFF0C\u6D6E\u9762 + \u5927\u6295\u5F71\uFF0C**\u65B9\u89D2\u3001\u65E0\u8FB9\u6846**\uFF09\u3001
 * \u4E2D\u95F4\u662F\u9519\u4F4D\u7684\u53E0\u5361\u3001\u6700\u91CC\u9762\u662F\u5E26\u4E3B\u4F53\u8272\u7684\u5361\u9762\u3002
 *
 * \u26A0\uFE0F \u4E24\u4E2A\u5FC5\u987B\u6309\u5B9E\u6D4B\u6765\u7684\u70B9\uFF08\u539F\u7248\u771F\u673A\u8BA1\u7B97\u503C\uFF0C\u522B\u6309"\u770B\u8D77\u6765\u8BE5\u5706\u89D2"\u81EA\u5DF1\u53D1\u6325\uFF09\uFF1A
 *   1. **\u5916\u5C42\u6839\u8282\u70B9\u6CA1\u6709\u5706\u89D2\u4E5F\u6CA1\u6709\u8FB9\u6846**\uFF1A\u539F\u7248\u6839\u5143\u7D20\u53EA\u6302 .node-pop\uFF0C**\u6CA1\u6302
 *      .panel-card**\uFF08\u90A3\u662F\u56FE\u7247\u5361\u4E0E\u63D0\u793A\u8BCD\u5361\u624D\u6709\u7684\uFF09\uFF0C\u6240\u4EE5 border-radius: 0\u3001
 *      border-width: 0\uFF0C\u53EA\u7559 --surface-float \u7684\u6E10\u53D8\u5E95\u4E0E\u90A3\u5708 12/26 \u7684\u6295\u5F71\u3002
 *      \u770B\u5230\u7684\u90A3\u9053\u5706\u89D2\u8FB9\u5176\u5B9E\u662F**\u5185\u5C42\u5361\u9762**\u7684 8px\u3002
 *   2. **\u53E0\u5361\u5728\u5185\u5C42\u5361\u9762\u4E4B\u4E0B**\uFF08DOM \u91CC\u5199\u5728\u5361\u9762\u4E4B\u524D\uFF09\uFF0C\u6240\u4EE5\u9519\u4F4D\u9732\u51FA\u6765\u7684\u90A3\u51E0\u9053\u8FB9\u662F
 *      8 \u5706\u89D2\u7684\u6D45\u8272\u5361\uFF0C\u800C\u4E0D\u662F\u6839\u8282\u70B9\u7684\u65B9\u89D2\u3002
 *
 * \u6839\u8282\u70B9\u7528 padding \u7ED9\u53E0\u5361\u9884\u7559\u9519\u5F00\u7A7A\u95F4\uFF0C\u6240\u4EE5\u53E0\u5361\u6C38\u8FDC\u4E0D\u4F1A\u4F38\u51FA\u8282\u70B9\u8FB9\u754C\u3002
 * \u5BBD 224\uFF08\u539F\u7248 w-56\uFF09\u3001\u9519\u5F00\u6B65\u957F 4px \u7531 nodes.tsx \u7684 STACK_STEP_PX \u63A7\u5236\u3002 */
.im-group-node {
  /* \u539F\u7248 w-56 = 224px \u4E14\u5168\u5C40 border-box\uFF0C\u6240\u4EE5 padding \u7B97\u5728 224 \u91CC\uFF1B
     \u4E0D\u5199 box-sizing \u7684\u8BDD\u5185\u5BB9 224 + padding 12 \u4F1A\u6491\u5230 236\uFF0C
     \u5916\u58F3\u4E0E\u5361\u9762\u5C31"\u5C3A\u5BF8\u5BF9\u4E0D\u4E0A"\u4E86\u3002 */
  box-sizing: border-box;
  width: 224px;
  padding: 12px 0 0 12px;
  /* \u65B9\u89D2\u3001\u65E0\u8FB9\u6846\uFF1A\u4E0E\u539F\u7248 .node-pop\uFF08\u672A\u6302 panel-card\uFF09\u4E00\u81F4 */
  border: 0;
  border-radius: 0;
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-node);
  transition: box-shadow 0.15s ease;
}
/* \u9009\u4E2D\u6001\u6253\u5728\u5916\u5C42\uFF08\u539F\u7248\u662F .react-flow__node .node-pop.node-selected\uFF09\uFF1A
   outline \u4E0D\u5360\u5E03\u5C40\uFF0C\u5BC6\u96C6\u753B\u5E03\u4E0A\u4E0D\u4F1A\u628A\u76F8\u90BB\u5361\u7247\u6324\u5F00\u3002 */
.im-group-node.is-selected {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}
.im-group-stack { position: relative; }
.im-group-stack-card {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: var(--im-r-sm);
  border: 1px solid color-mix(in srgb, var(--im-brand) 10%, transparent);
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-face {
  position: relative;
  padding: 16px;
  text-align: center;
  border-radius: var(--im-r-sm);
  border: 1px solid color-mix(in srgb, var(--im-brand) 15%, transparent);
  /* \u539F\u7248 bg-brand/5\uFF1A\u5361\u9762\u672C\u8EAB\u5E26\u4E00\u5C42\u6781\u6D45\u7684\u4E3B\u4F53\u8272\uFF0C\u4E0E\u53E0\u5361\u540C\u65CF */
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-count {
  /* \u539F\u7248 text-xl font-semibold leading-tight + text-brand-dark */
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--im-brand-dark);
}
.im-group-size { margin-top: 4px; font-size: 16px; color: var(--im-ink-3); }
.im-group-dup { margin-top: 4px; }

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
  /* \u95F4\u8DDD\u7531 .im-root \u7684 gap \u63D0\u4F9B\uFF0C\u8FD9\u91CC\u4E0D\u81EA\u7559\u8FB9\u8DDD */
  margin: 0;
  border: 1px solid var(--im-line);
  /* \u539F\u7248 .studio-canvas \u662F 18px\uFF08\u4E0D\u662F --r-card \u7684 16\uFF09 */
  border-radius: var(--im-r-surface);
  /* \u753B\u5E03\u662F**\u6700\u91CC\u9762\u90A3\u5C42\u53F0\u9762**\uFF08\u5361\u7247\u8981\u6D6E\u5728\u5B83\u4E0A\u9762\uFF09\uFF0C\u6240\u4EE5\u53D6\u5361\u7247\u90A3\u6863\u518D\u5F80\u4E0B\u4E00\u7EA7\uFF1A
     \u6D45\u8272 #fff\uFF08\u6BD4\u9875\u9762\u5E95 #f9fafb \u66F4\u767D\uFF09\u3001\u6697\u8272 #232324\uFF08\u6BD4\u9875\u9762\u5E95 #353638 \u66F4\u6697\uFF09\u3002
     \u4E24\u4E2A\u65B9\u5411\u90FD\u6210\u7ACB\uFF1A\u56DB\u5468\u662F"\u5899"\u3001\u753B\u5E03\u662F"\u53F0\u9762"\u3001\u5361\u7247\u6D6E\u5728\u53F0\u9762\u4E0A\u3002 */
  background: var(--im-surface);
  /* \u753B\u5E03\u53F0\u9762\u6BD4\u666E\u901A\u5361\u7247\u91CD\u4E00\u6863\uFF1A\u539F\u7248\u5B9E\u6D4B 0 18px 45px rgba(31,41,55,.09) +
     \u9876\u90E8 1px \u5185\u9AD8\u5149\u3002\u6574\u5757\u53F0\u9762\u8981\u300C\u6D6E\u300D\u5728\u9875\u9762\u4E4B\u4E0A\uFF0C\u7528 card \u90A3\u6863\u4F1A\u663E\u5F97\u8D34\u5E73\u3002 */
  box-shadow: var(--im-shadow-canvas);
  overflow: hidden;
  /* \u81EA\u6210\u4E00\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF1A\u753B\u5E03\u91CC\u7684 z-index \u4E0D\u8BB8\u8DDF\u5BBF\u4E3B\u9762\u677F\u62A2\u5C42 */
  isolation: isolate;
}
.im-canvas .react-flow__attribution { display: none; }
.im-canvas .react-flow__background pattern circle { fill: color-mix(in srgb, var(--im-ink) 20%, transparent); }
/* \u26A0\uFE0F \u8FD9\u91CC**\u4E0D\u8BB8**\u7ED9\u8282\u70B9\u5361\u52A0 will-change\uFF08\u7EF4\u62A4\u8005\u62A5\u8FC7\u300C\u7F29\u5C0F\u518D\u653E\u5927\u540E\u6587\u5B57\u4E00\u76F4\u662F\u7CCA\u7684\u3001
   \u70B9\u4E00\u4E0B\u624D\u6E05\u6670\u300D\uFF09\u3002\u539F\u56E0\u4E0D\u662F"\u6027\u80FD\u8C03\u4F18"\uFF0C\u800C\u662F\u5408\u6210\u5C42\u7684\u6805\u683C\u500D\u7387\uFF1A
   will-change: transform \u628A\u6BCF\u5F20\u5361\u63D0\u5347\u6210\u72EC\u7ACB\u5408\u6210\u5C42\uFF0C\u6D4F\u89C8\u5668\u6309**\u63D0\u5347\u90A3\u4E00\u523B**\u7684\u500D\u7387
   \u6805\u683C\u5316\u5B83\uFF1B\u753B\u5E03\u7F29\u653E\u662F\u6539 .react-flow__viewport \u7684 scale\uFF0C\u5408\u6210\u5C42\u4E0D\u4F1A\u8DDF\u7740\u91CD\u6805\u683C\uFF0C
   \u4E8E\u662F\u653E\u5927\u540E\u770B\u5230\u7684\u662F\u88AB\u62C9\u5927\u7684\u65E7\u4F4D\u56FE \u2192 \u6587\u5B57\u53D1\u865A\uFF0C\u76F4\u5230\u67D0\u6B21\u91CD\u7ED8\uFF08\u70B9\u51FB/\u60AC\u505C\u5931\u6548\uFF09\u624D\u5237\u65B0\u3002
   \u5361\u7247\u4E00\u591A\u8FD8\u7B49\u4E8E\u51E0\u767E\u4E2A\u5C42\uFF0C\u5185\u5B58\u4E0E\u5408\u6210\u5F00\u9500\u4E00\u8D77\u4E0A\u6765\uFF08\u300C\u52A0\u8F7D\u5F88\u6162\u300D\uFF09\u3002
   \u539F\u7248 Imagora \u5168\u6587\u4EF6 0 \u5904 will-change\uFF08grep \u8FC7\uFF09\uFF0C\u6211\u4EEC\u8FD9\u6761\u662F\u81EA\u9020\u7684\uFF0C\u5220\u6389\u5373\u4E0E\u4E0A\u6E38\u4E00\u81F4\u3002
   \u771F\u6B63\u9700\u8981\u62D6\u52A8\u6D41\u7545\u65F6\u5E94\u53EA\u8BA9 React Flow \u81EA\u5DF1\u7BA1 \u2014\u2014 \u5B83\u5728\u62D6\u52A8\u671F\u95F4\u672C\u6765\u5C31\u8D70\u5408\u6210\u3002 */
/* \u60AC\u505C\u7684\u8282\u70B9\u6574\u4F53\u62AC\u9AD8\uFF0C\u5426\u5219\u53F3\u4FA7\u90A3\u6761\u64CD\u4F5C\u680F\u4F1A\u88AB\u76F8\u90BB\u8282\u70B9\u76D6\u4F4F\uFF08\u539F\u7248\u540C\u4E00\u6761\u89C4\u5219\uFF09 */
.react-flow__node:hover { z-index: 1001 !important; }
.react-flow__edges { z-index: 1200 !important; }

/* \u5438\u9644\u5BF9\u9F50\u7EBF\uFF08canvas/snap-guides.tsx \u6E32\u67D3\uFF0C\u8D70 ViewportPortal \u6302\u8FDB .react-flow__viewport\uFF09\u3002
 *
 * \u7C7B\u540D\u4E0E\u5C5E\u6027\u662F**\u4E0A\u6E38\u5951\u7EA6**\uFF0C\u522B\u6539\u540D\uFF1A\u4E0A\u6E38\u7684 .snap-guide + data-axis +
 * data-testid="snap-guide" \u88AB\u5B83\u81EA\u5DF1\u7684 E2E \u4E0E\u57FA\u7EBF\u6D4B\u8BD5\u5F15\u7528\uFF0C\u6539\u6210 im- \u524D\u7F00\u80FD\u8BA9
 * \u672C\u4ED3\u770B\u7740\u7EDF\u4E00\uFF0C\u4F46\u4E24\u8FB9\u5C31\u6CA1\u6CD5\u5171\u7528\u540C\u4E00\u6279\u65AD\u8A00\u4E86\u3002
 *
 * \u53D6\u8272\u8D70 --im-snap\uFF08=\u54C1\u724C\u8272\uFF09\uFF0C\u4E0D\u5199\u6B7B\uFF1Bopacity 0.55 \u4E0E\u4E0A\u6E38 index.css \u540C\u503C\uFF0C
 * \u538B\u8FC7\u8282\u70B9\u4F46\u8BA9\u5E95\u4E0B\u7684\u5361\u7247\u4ECD\u53EF\u8FA8\u8BA4 \u2014\u2014 \u5BF9\u9F50\u7EBF\u662F\u8F85\u52A9\uFF0C\u4E0D\u8BE5\u76D6\u4F4F\u5185\u5BB9\u3002 */
.snap-guide {
  position: absolute;
  pointer-events: none;
  background: var(--im-snap, #4c8dff);
  opacity: 0.55;
  z-index: 5;
}

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
/* \u26A0\uFE0F \u8FD9\u91CC**\u6545\u610F\u4E0D\u5199** stroke-dasharray\uFF1A\u539F\u7248\u4E5F\u6CA1\u5199\uFF0C\u6D41\u52A8\u865A\u7EBF\u7684\u753B\u6CD5\u4E0E\u8282\u594F\u5168\u4EA4\u7ED9
   @xyflow/react \u81EA\u5E26\u7684 .react-flow__edge.animated path \u89C4\u5219\uFF08dasharray 5 +
   dashdraw .5s linear infinite\uFF09\u3002
   \u6211\u4EEC\u4EE5\u524D\u5199\u8FC7 stroke-dasharray: 6 4\uFF08\u9009\u62E9\u5668\u4E09\u4E2A\u7C7B\uFF0C\u538B\u8FC7\u5E93\u91CC\u7684\u4E24\u4E2A\u7C7B + \u5143\u7D20\uFF09\uFF0C
   \u7ED3\u679C\u865A\u7EBF\u6BB5\u6BD4\u539F\u7248\u957F 20%\uFF0C\u8DD1\u8D77\u6765\u8282\u594F\u4E5F\u4E0D\u4E00\u6837 \u2014\u2014 \u770B\u7740"\u6709\u52A8\u753B"\u5C31\u4EE5\u4E3A\u5BF9\u4E86\u3002
   \u8FD9\u6761\u6CE8\u91CA\u53CD\u8FC7\u6765\u662F\u9632\u56DE\u5F52\uFF1A\u8C01\u518D\u5F80\u8FD9\u91CC\u52A0 dasharray\uFF0C\u4E24\u8FB9\u5C31\u53C8\u5BF9\u4E0D\u4E0A\u3002 */
.react-flow__connection-path { stroke: var(--im-brand); stroke-width: 1.8; stroke-dasharray: 5 4; }

/* \u8FDE\u7EBF\u628A\u624B\uFF1A\u7167\u539F\u7248\u505A\u6210\u6A2A\u6761\uFF0C\u5E38\u6001\u9690\u85CF\u3001\u60AC\u505C\u8282\u70B9\u6216\u6B63\u5728\u8FDE\u7EBF\u65F6\u624D\u663E\u5F62\u3002
   \u5E38\u663E\u7684\u5C0F\u5706\u70B9\u4F1A\u5728\u5BC6\u96C6\u753B\u5E03\u4E0A\u7CCA\u6210\u4E00\u7247\u3002 */
.react-flow__handle.im-handle {
  width: 32px;
  height: 12px;
  /* \u539F\u7248\u8FDE\u63A5\u70B9\u662F 4px \u5706\u89D2 + \u767D\u8272\u5916\u73AF\uFF0C\u6CA1\u6709\u8FB9\u6846 */
  border-radius: var(--im-r-xs);
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
  background: var(--im-scrim);
  /* \u539F\u7248 --scrim-blur \u662F blur(10px) saturate(.9)\uFF08index.css:201\uFF09\u3002
     \u63D2\u4EF6\u6B64\u524D\u5199 3px \u2014\u2014 \u80CC\u666F\u91CC\u7684\u5361\u7247\u6807\u9898\u3001\u8282\u70B9\u6587\u5B57\u5168\u90FD\u6E05\u6670\u53EF\u8BFB\uFF0C\u548C\u6D6E\u5728\u4E0A\u9762\u7684\u5F39\u7A97
     \u62A2\u6CE8\u610F\u529B\u3002\u906E\u7F69\u7684\u804C\u8D23\u662F\u300C\u628A\u5E95\u4E0B\u7684\u754C\u9762\u63A8\u5230\u770B\u4E0D\u6E05\u300D\uFF0C10px \u624D\u662F\u90A3\u4E00\u6863\u3002
     saturate(.9) \u4E00\u8D77\u6284\uFF1A\u53EA\u538B\u6697\u4E0D\u964D\u9971\u548C\u4F1A\u8BA9\u5E95\u4E0B\u7684\u5F69\u8272\u7F29\u7565\u56FE\u4ECD\u7136\u8DF3\u51FA\u6765\u3002 */
  -webkit-backdrop-filter: blur(10px) saturate(0.9);
  backdrop-filter: blur(10px) saturate(0.9);
}
/* \u5D4C\u5957\u5F39\u7A97\uFF08\u5F39\u7A97\u91CC\u518D\u5F00\u4E00\u4E2A\uFF09\uFF1Az \u62AC\u5230 60\uFF0C\u906E\u7F69\u6362\u6DE1\u4E00\u6863\u3002
 * \u539F\u7248 .modal-shell--nested\uFF08index.css:726\uFF09\u5C31\u662F\u8FD9\u4E48\u505A\u7684\uFF0C\u4F46**\u5F53\u524D\u751F\u4EA7\u4EE3\u7801\u6CA1\u6709\u8C03\u7528\u70B9**
 * \uFF08\u539F\u7248 grep \u53EA\u547D\u4E2D ModalShell.tsx \u81EA\u8EAB\u4E0E\u5B83\u7684\u5355\u6D4B\uFF09\u2014\u2014 \u4FDD\u7559\u662F\u80FD\u529B\u9884\u7559\uFF0C
 * \u8BED\u4E49\uFF08Esc / Tab / \u70B9\u906E\u7F69\u5173\u6700\u4E0A\u5C42\uFF09\u5DF2\u7ECF\u5728 modal-shell.tsx \u7684 modalStack \u91CC\u5B9E\u73B0\u4E86\uFF0C
 * \u7F3A\u7684\u53EA\u662F\u8FD9\u4E00\u6863\u89C6\u89C9\u3002\u771F\u8981\u7528\u65F6\u4E0D\u5FC5\u518D\u6539\u57FA\u5EA7\u3002 */
.im-modal-shell--nested {
  z-index: 60;
  background: var(--im-scrim-nested);
}
.im-modal-panel {
  display: flex;
  flex-direction: column;
  /* width + padding + border \u4E09\u6837\u90FD\u5199\u4E86\uFF0C\u5FC5\u987B\u662F border-box \u2014\u2014 \u5426\u5219\u56DB\u6863\u5BBD\u5EA6
     \u6BCF\u6863\u90FD\u591A\u51FA 42px\uFF0820\xD72 \u5185\u8FB9\u8DDD + 1\xD72 \u8FB9\u6846\uFF09\uFF0C\u770B\u8D77\u6765\u5C31\u662F"\u6211\u4EEC\u7684\u5F39\u7A97\u6BD4\u539F\u7248\u5BBD\u4E00\u5708"\u3002
     \u539F\u7248\u9760 Tailwind preflight \u7684\u5168\u5C40 border-box \u62FF\u5230\u8FD9\u4E2A\u884C\u4E3A\uFF0C\u63D2\u4EF6\u91CC\u6CA1\u6709\u90A3\u4E2A reset\u3002 */
  box-sizing: border-box;
  width: min(100%, 42rem);
  max-height: min(86dvh, 760px);
  overflow: hidden;
  padding: 20px;
  /* \u539F\u7248\u662F**\u767D\u8272\u63CF\u8FB9** rgba(255,255,255,.68)\uFF08index.css:749\uFF09\uFF0C\u4E0D\u662F\u7070\u8272\u5206\u9694\u7EBF\u3002
     \u7406\u7531\u4E0E\u6697\u8272\u5904\u7406\u89C1 --im-modal-edge \u7684\u6CE8\u91CA\u3002 */
  border: 1px solid var(--im-modal-edge);
  border-radius: var(--im-r-card);
  outline: none;
  /* \u5F39\u7A97\u662F**\u9AD8\u5361\u7247\u4E00\u6863**\u7684\u53F0\u9762\uFF08\u539F\u7248\u7528 --surface-panel\uFF09\uFF1A\u6D45\u8272\u4E0B\u4E24\u8005\u90FD\u662F\u767D\uFF0C
     \u6697\u8272\u4E0B\u5361\u7247 #232324\u3001\u5F39\u7A97 #2c2c2e\uFF0C\u7A97\u53E3\u624D\u6D6E\u5F97\u51FA\u6765\u3002 */
  background: var(--im-surface-panel);
  /* \u6295\u5F71 + \u9876\u90E8 1px \u5185\u9AD8\u5149\uFF08inset \u90A3\u5C42\u5728 --im-shadow-modal \u91CC\uFF0C\u968F\u4E3B\u9898\u4E24\u5957\u503C\uFF09 */
  box-shadow: var(--im-shadow-modal);
}
.im-modal-panel--sm { width: min(100%, 26rem); }
.im-modal-panel--md { width: min(100%, 35rem); }
.im-modal-panel--lg { width: min(100%, 42rem); }
/* \u5386\u53F2\u5F39\u7A97\u6863\uFF08\u539F\u7248 .modal-panel--history\uFF0Cindex.css:759-766\uFF09\uFF1A
   **\u5B9A\u9AD8**\u800C\u4E0D\u662F\u300C\u6700\u5927\u9AD8\u300D\u3002\u5217\u8868\u8981\u5360\u6EE1\u5269\u4F59\u7A7A\u95F4\u81EA\u5DF1\u6EDA\uFF0C\u5934\u4E0E\u6210\u672C\u770B\u677F\u9489\u5728\u4E0A\u4E0B\uFF1B
   \u5199\u6210 max-height \u65F6\u9762\u677F\u4F1A\u88AB\u5185\u5BB9\u6491\u5230\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u5217\u8868\u5C31\u6CA1\u5F97\u6EDA\u3001\u5E95\u90E8\u6309\u94AE\u4F4D\u7F6E\u4E5F\u4E71\u8DF3\u3002
   padding: 0 \u662F\u56E0\u4E3A\u8FD9\u4E00\u6863\u7684\u5185\u5BB9\u81EA\u5E26\u5206\u6BB5\uFF08header / \u770B\u677F / \u5217\u8868\u5404\u5360\u4E00\u6761\u901A\u680F\uFF09\uFF0C
   \u9762\u677F\u518D\u7559 20px \u5185\u8FB9\u8DDD\u4F1A\u8BA9\u901A\u680F\u80CC\u666F\u79BB\u8FB9\u7F18\u60AC\u7A7A\u3002 */
.im-modal-panel--wide {
  width: min(1100px, 96vw);
  height: min(86dvh, 880px);
  max-height: none;
  padding: 0;
}
/* \u5386\u53F2\u5F39\u7A97\u6863\uFF1A\u5185\u5BB9**\u6309\u901A\u680F\u5206\u6BB5**\u6392\uFF08\u6807\u9898\u5E26 / \u6210\u672C\u6761 / \u5217\u8868\u5404\u5360\u4E00\u6761\uFF09\uFF0C
   \u6240\u4EE5\u9762\u677F\u81EA\u5DF1\u4E0D\u7559\u5185\u8FB9\u8DDD\uFF0C\u6EDA\u52A8\u4E5F\u4EA4\u7ED9\u5217\u8868 \u2014\u2014 \u6807\u9898\u5E26\u4E0E\u6210\u672C\u6761\u8981\u9489\u5728\u9876\u4E0A\u4E0D\u8DDF\u7740\u6EDA\u3002 */
.im-modal-panel--wide > .im-modal-body {
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 0;
  overflow: hidden;
}
.im-modal-header { margin-bottom: 16px; }
.im-modal-title {
  margin: 0;
  /* \u539F\u7248\u5199\u6B7B #17202b\uFF08index.css:772\uFF09\uFF0C\u6211\u4EEC\u8D70 --im-ink\uFF1A\u4EAE\u8272=#0f1115\uFF08\u6BD4\u539F\u7248\u6DF1\u4E00\u70B9\uFF0C
     \u5728\u540C\u4E00\u6863\uFF09\uFF0C\u6697\u8272\u81EA\u52A8\u7FFB\u6210\u8FD1\u767D\u3002\u5199\u6B7B\u4F1A\u5728\u6697\u8272\u4E0B\u53D8\u6210\u9ED1\u5B57\u538B\u6DF1\u5E95\u3002 */
  color: var(--im-ink);
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.02em;
}
.im-modal-subtitle {
  margin: 4px 0 0;
  max-width: 58ch;
  /* \u539F\u7248 rgba(23,32,43,.6)\uFF08index.css:773\uFF09\u3002\u4ECE ink \u6D3E\u751F\u800C\u4E0D\u662F\u53D6 --im-ink-3\uFF1A
     ink-3 \u662F\u300C\u4E09\u7EA7\u6587\u5B57\u300D\u8BED\u4E49\uFF08\u6697\u8272\u504F\u4EAE\uFF09\uFF0C\u539F\u7248\u8FD9\u884C\u662F\u300C\u4E3B\u6587\u5B57\u7684 60%\u300D\uFF0C
     \u4E24\u8005\u5728\u6697\u8272\u4E0B\u5DEE\u4E00\u6863\u3002\u6D3E\u751F\u80FD\u81EA\u52A8\u5F97\u5230\u4EAE\u8272\u2248\u539F\u503C\u3001\u6697\u8272=\u767D 60%\u3002
     \u4E3A\u4EC0\u4E48\u4E0D\u7528 --im-ink-2\uFF1A\u4EAE\u8272\u4E0B\u5B83 (#61666b) \u6BD4\u539F\u7248\u90A3\u884C\u66F4\u6DF1\uFF0C\u526F\u6807\u9898\u4F1A\u62A2\u6807\u9898\u7684\u4EFD\u91CF\u3002 */
  color: color-mix(in srgb, var(--im-ink) 60%, transparent);
  font-size: 12px;
  line-height: 1.55;
}
/* flex:1 + min-height:0 \u662F\u300C\u80FD\u6EDA\u300D\u7684\u524D\u63D0\u3002\u53EA\u5199 overflow-y:auto \u800C\u9AD8\u5EA6\u4E0D\u53D7\u7EA6\u675F\u7684\u8BDD\uFF0C
   scrollHeight \u6C38\u8FDC\u7B49\u4E8E clientHeight\uFF0C\u5E95\u90E8\u51E0\u884C\u4F1A\u88AB\u9762\u677F\u9759\u9ED8\u88C1\u6389\u3002
 *
 * padding-inline: 6px \u4E0E scrollbar-gutter \u7167\u539F\u7248\uFF08index.css:813-826\uFF09\uFF0C**\u4E0D\u662F**\u968F\u4FBF\u7559\u767D\uFF1A
 * \u6EDA\u52A8\u5BB9\u5668\u53EA\u88C1\u5230 padding box\uFF0C\u800C button:focus-visible \u662F outline 2px + offset 3px = 5px
 * \uFF08\u89C1\u672C\u6587\u4EF6\u672B\u5C3E\u90A3\u6BB5\u952E\u76D8\u53EF\u8FBE\u6027\uFF09\u3002\u5185\u8FB9\u8DDD\u4E3A 0 \u65F6\uFF0C\u6587\u672C\u6846/\u4E0B\u62C9\u5DE6\u4FA7\u7684\u7126\u70B9\u73AF\u4F1A\u88AB\u6574\u6761\u5207\u6389\uFF0C
 * \u53F3\u8FB9\u5374\u6B63\u5E38 \u2014\u2014 \u770B\u7740\u50CF\u300C\u7126\u70B9\u73AF\u53EA\u753B\u4E86\u4E00\u534A\u300D\u3002\u4E24\u4FA7\u540C\u503C\u624D\u4E0D\u4F1A\u5DE6\u53F3\u4E0D\u5BF9\u79F0\u3002 */
.im-modal-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding-inline: 6px;
  /* \u6EDA\u52A8\u6761\u51FA\u73B0\u65F6\u9884\u7559\u5360\u4F4D\uFF1A\u5426\u5219\u4E00\u51FA\u73B0\u6EDA\u52A8\u6761\uFF0C\u5185\u5BB9\u6574\u4F53\u5DE6\u79FB\u51E0 px\uFF0C\u5F39\u7A97\u50CF\u5728\u6296 */
  scrollbar-gutter: stable;
}
/* \u5F39\u7A97\u91CC\u7684\u7A7A\u6001\uFF08\u6682\u65E0\u5DE5\u4F5C\u6D41\u7B49\uFF09\uFF1A\u539F\u7248 .modal-empty\uFF08index.css:775\uFF09\u3002
   \u539F\u7248\u8272\u503C\u662F rgba(23,32,43,.38)\uFF0C\u8FD9\u91CC\u53D6 --im-ink-3 \u800C\u4E0D\u662F\u7167 .38 \u6D3E\u751F\uFF1A
   .38 \u5728\u6697\u8272\u4E0B\u662F\u300C38% \u767D\u300D\uFF0C\u5BF9\u6DF1\u5E95\u53EA\u6709 2.6:1\uFF0C\u4F4E\u4E8E\u53EF\u8BFB\u7EBF\uFF1Bink-3 \u662F\u5BBF\u4E3B\u5DF2\u7ECF\u8C03\u8FC7\u7684
   \u4E09\u7EA7\u6587\u5B57\uFF08\u4EAE #81858c / \u6697 #adb2b8\uFF09\uFF0C\u4E24\u79CD\u4E3B\u9898\u90FD\u5728 4:1 \u4E0A\u4E0B\u3002
   \u8FD9\u662F\u300C\u7167\u642C\u8BED\u4E49\u3001\u4E0D\u7167\u642C\u6570\u5B57\u300D\u7684\u4E00\u5904 \u2014\u2014 \u7A7A\u6001\u672C\u6765\u5C31\u6CA1\u6709\u300C\u5FC5\u987B\u8FD9\u4E48\u6DE1\u300D\u7684\u8BBE\u8BA1\u610F\u56FE\u3002 */
.im-modal-empty {
  padding: 24px 12px;
  color: var(--im-ink-3);
  font-size: 12px;
  text-align: center;
}

/* ---------------- \u9519\u8BEF\u8FB9\u754C\u7684\u66FF\u4EE3\u754C\u9762\uFF08\u89C1 canvas/error-boundary.tsx\uFF09 ----------------
 * \u4E24\u79CD\u573A\u666F\u3001\u4E24\u79CD\u5C3A\u5BF8\uFF1A
 *   .im-node-error    \u5355\u5F20\u5361\u574F\u6389\uFF0C\u66FF\u4EE3\u5B83\u81EA\u5DF1\u7684\u5361\u7247\uFF08\u6309\u8282\u70B9\u5361\u7684\u5BBD\u5EA6\uFF0C\u7D27\u51D1\u4E09\u884C\uFF09
 *   .im-canvas-error  \u6574\u5757\u753B\u5E03\u574F\u6389\uFF0C\u66FF\u4EE3\u753B\u5E03\u533A\uFF08\u5C45\u4E2D\u4E00\u53E5\u8BDD + \u4E24\u4E2A\u6309\u94AE\uFF09
 * \u90FD\u7528 danger \u8272\u7CFB\uFF0C\u4F46**\u4E0D\u662F\u7EAF\u7EA2\u8B66\u62A5**\uFF1A\u5B83\u8868\u8FBE\u7684\u662F\u300C\u8FD9\u5757\u574F\u4E86\uFF0C\u522B\u5904\u8FD8\u80FD\u7528\u300D\uFF0C
 * \u4E0D\u8BE5\u6BD4\u771F\u6B63\u7684\u5371\u9669\u63D0\u793A\uFF08\u9884\u7B97\u8D85\u9650\u3001\u53C2\u8003\u56FE\u4E22\u5931\uFF09\u66F4\u523A\u773C\u3002 */
.im-node-error {
  width: 260px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid color-mix(in srgb, var(--im-danger) 28%, var(--im-line));
  border-radius: var(--im-r-control);
  background: color-mix(in srgb, var(--im-danger) 6%, var(--im-surface));
  color: var(--im-ink);
}
.im-node-error-title { font-size: 12px; font-weight: 600; color: var(--im-danger); }
.im-node-error-msg {
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.5;
  color: var(--im-ink-2);
  /* \u957F\u9519\u8BEF\u53EA\u7559\u4E24\u884C\uFF1A\u5361\u7247\u91CC\u585E\u4E0D\u4E0B\u6574\u6BB5\u5806\u6808\uFF0C\u5B8C\u6574\u5185\u5BB9\u5728 title \u4E0E\u63A7\u5236\u53F0 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.im-node-error-hint { margin: 4px 0 8px; font-size: 10px; color: var(--im-ink-3); }

.im-canvas-error {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
  text-align: center;
}
.im-canvas-error-title { margin: 0; font-size: 14px; font-weight: 600; color: var(--im-danger); }
.im-canvas-error-msg {
  margin: 0;
  max-width: 52ch;
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-2);
}
.im-canvas-error-hint {
  margin: 0;
  max-width: 52ch;
  font-size: 11px;
  line-height: 1.7;
  color: var(--im-ink-3);
}
.im-canvas-error-actions { display: flex; gap: 8px; margin-top: 4px; }

/* ---------------- \u751F\u6210\u5386\u53F2\uFF08\u7167\u642C Imagora \u7684 .history-modal\uFF0Cindex.css:869-874 + 928-933\uFF09 ----------------
 * \u4E09\u6BB5\u901A\u680F\uFF1A\u6807\u9898\u5E26\uFF08\u641C\u7D22/\u7B5B\u9009/\u5173\u95ED\u9489\u5728\u9876\u4E0A\uFF09\u2192 \u6210\u672C\u6761 \u2192 \u5217\u8868\uFF08\u53EA\u6709\u5B83\u6EDA\uFF09\u3002
 * \u539F\u7248\u8FD9\u5957\u7684\u5206\u6BB5\u80CC\u666F\u8BFB --surface-float\uFF0C\u58F3\u4F53\u8BFB --surface-panel \u2014\u2014
 * \u4E8E\u662F\u6807\u9898\u5E26\u770B\u8D77\u6765\u662F\u300C\u58F3\u4F53\u4E0A\u6D6E\u8D77\u6765\u7684\u4E00\u6761\u300D\uFF0C\u4E0D\u662F\u7EAF\u767D\u5E73\u94FA\u3002 */
.im-history {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
}
/* \u4E24\u6761\u5E26\u5B50\uFF08\u6807\u9898\u5E26 / \u6210\u672C\u6761\uFF09\u91CC\u7684\u63A7\u4EF6**\u540C\u9AD8\u3001\u540C\u5B57\u53F7**\uFF1A\u9AD8\u5EA6\u7531\u5E26\u5B50\u5B9A\u6B7B\uFF0C
 * \u5B50\u63A7\u4EF6\u586B\u6EE1\uFF0C\u800C\u4E0D\u662F\u8BA9\u6BCF\u4E2A\u63A7\u4EF6\u5E26\u7740\u81EA\u5DF1\u7684 padding \u5404\u81EA\u7B97\u3002
 *
 * \u5404\u5199\u5404\u7684\u5FC5\u7136\u53C2\u5DEE\uFF0C\u5B9E\u6D4B\u5C31\u662F\u8FD9\u4E48\u56DB\u6863\u6324\u5728\u4E00\u884C\u91CC\uFF1A
 *   .im-field \u9ED8\u8BA4 padding 8px 20px + 14px \u2192 38\u3001
 *   \u641C\u7D22\u6846\u81EA\u5DF1\u5199 4px \u2192 31\u3001\u91D1\u989D\u6846\u5199\u6B7B 26\u3001.im-btn-sm \u2192 22\u3002
 * \u7EDF\u4E00\u53D6 --im-h-ctl\uFF08\u9876\u680F\u90A3\u4E00\u6863\uFF0C\u4E0E .im-header \u91CC\u90A3\u6392\u540C\u4E00\u5957\u5199\u6CD5\uFF09\u3002
 * \u89C1 .agents/notes/2026-11-16-history-row-controls.md */
.im-history-bar,
.im-history-budget {
  --im-row-h: var(--im-h-ctl);
}
.im-history-bar .im-field,
.im-history-bar .im-select-trigger,
.im-history-bar .im-btn-ghost,
.im-history-bar .im-btn-primary,
.im-history-stats .im-field,
.im-history-stats .im-btn-ghost,
.im-history-stats .im-btn-primary {
  height: var(--im-row-h, var(--im-h-ctl));
  padding-block: 0;
  box-sizing: border-box;
  font-size: 12px;
}

.im-history-bar {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-surface-float);
}
/* \u539F\u7248 .history-modal h2 \u662F 16px / -.025em\uFF08\u6BD4\u666E\u901A\u5F39\u7A97\u7684 15px \u5927\u4E00\u6863\uFF1A
   \u8FD9\u6761\u5E26\u5B50\u91CC\u6807\u9898\u8981\u548C\u641C\u7D22\u6846\u3001\u6309\u94AE\u5E76\u6392\u7ADE\u4E89\u6CE8\u610F\u529B\uFF09 */
.im-history-title {
  margin: 0 8px 0 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--im-ink);
  white-space: nowrap;
}
/* \u641C\u7D22\u6846\uFF1A\u5BBD\u4E00\u6863\uFF08\u539F\u7248 !w-72\uFF09\uFF0C\u9AD8\u5EA6\u4E0E\u5706\u89D2\u90FD\u5E76\u5165\u4E0A\u9762\u90A3\u6761\u300C\u6807\u9898\u5E26\u63A7\u4EF6\u540C\u9AD8\u300D\u3002 */
.im-history-search {
  width: 18rem;
  max-width: 100%;
  padding-inline: 12px;
  border-radius: 9px;
}
/* \u72B6\u6001\u7B5B\u9009\uFF1A\u4E0E\u539F\u7248 w-28 \u4E0D\u540C \u2014\u2014 \u90A3\u4E2A\u5BBD\u5EA6\u4F1A\u628A\u300C\u5168\u90E8\u72B6\u6001\u300D\u7701\u7565\u6210\u300C\u5168\u90E8\u2026\u300D\uFF0C
   9rem \u624D\u653E\u5F97\u4E0B\u56DB\u5B57\u6807\u7B7E\uFF08\u539F\u7248 640px \u90A3\u6863\u4E5F\u662F\u6536\u5230 9rem\uFF09\u3002 */
.im-history-status { flex: none; width: 9rem; max-width: none; }
.im-history-status .im-select-trigger { width: 100%; }
.im-history-bar-end { margin-left: auto; display: flex; align-items: center; gap: 8px; min-width: 0; }
.im-history-warn {
  font-size: 11px;
  color: var(--im-warn);
  white-space: nowrap;
}
/* \u6210\u672C\u6761\uFF1A\u4E0A\u6392\u300C\u6307\u6807 | \u9884\u7B97\u8BBE\u7F6E\u300D\uFF0C\u4E0B\u9762\u300C\u6309\u5C3A\u5BF8\u300D\u72EC\u7ACB\u4E00\u6761 \u2014\u2014 \u4E0E\u539F\u7248 CostBoard \u540C\u6784\uFF1A
 *   <section>
 *     <div flex>  <div grid \u6307\u6807 5 \u683C>  <div compact-controls \u9884\u7B97>  </div>
 *     <div \u6309\u5C3A\u5BF8>
 *   </section>
 * \u300C\u6309\u5C3A\u5BF8\u300D**\u5FC5\u987B**\u72EC\u7ACB\u6210\u884C\uFF0C\u4E0D\u80FD\u6324\u8FDB\u6307\u6807\u7F51\u683C\uFF1A
 * \u539F\u7248\u6307\u6807\u6B63\u597D 5 \u683C\uFF082/3/5 \u5217\u4E09\u6863\uFF09\uFF0C\u591A\u585E\u4E00\u683C\u4F1A\u8BA9\u6574\u884C\u6362\u884C \u2014\u2014
 * \u9884\u7B97\u8BBE\u7F6E\u5C31\u88AB\u9876\u5230\u7B2C\u4E8C\u6392\u53BB\u4E86\uFF08\u63D2\u4EF6\u6B64\u524D\u6B63\u662F\u8FD9\u6837\uFF0C\u6210\u672C\u6761\u56E0\u6B64\u9AD8 130px\uFF09\u3002
 * \u7F51\u683C\u5916\u8FD9\u4E00\u884C\u8FD8\u5E26\u5F97\u4E0B\u91D1\u989D\uFF0C\u6307\u6807\u683C\u91CC\u53EA\u653E\u5F97\u4E0B "\u5C3A\u5BF8 \xD7\u6570\u91CF"\u3002 */
.im-history-stats {
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 8px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-surface-float);
}
/* \u7B2C\u4E00\u6392\uFF1A\u6307\u6807\u968F\u5BBD\u5EA6\u644A\u5F00\uFF0C\u9884\u7B97\u8BBE\u7F6E\u56FA\u5B9A\u9760\u53F3\uFF08\u539F\u7248 flex-1 | \u7AD6\u7EBF | shrink-0\uFF09 */
.im-history-stat-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
}
/* \u6307\u6807\u7F51\u683C\uFF1A2 \u5217 / \u7A84\u5C4F\uFF0C3 \u5217 / \u4E2D\u5C4F\uFF0C5 \u5217 / \u5BBD\u5C4F\uFF08\u539F\u7248 sm:3 lg:5\uFF09\u3002
 * \u5217\u5BBD minmax(max-content, 1fr)\uFF1A\u7B49\u5BBD\u5217\u53EA\u6709\u5728\u6BCF\u683C\u90FD\u88C5\u5F97\u4E0B\u65F6\u624D\u6210\u7ACB\uFF0C
 * \u6210\u529F\u7387\u5E26\u62EC\u53F7\uFF08549/649\uFF09\u662F\u4E94\u683C\u91CC\u6700\u957F\u7684\u4E00\u683C\uFF0C\u6309\u7B49\u5BBD\u5206\u4F1A\u5DEE 2px \u88AB\u622A\u6210
 * \u300C84.6%\uFF08549/64\u2026\u300D\u3002max-content \u4FDD\u8BC1\u6BCF\u5217\u653E\u5F97\u4E0B\u81EA\u5DF1\u7684\u5B57\uFF0C\u5BCC\u4F59\u5BBD\u5EA6\u5747\u5206\u3002 */
.im-history-stat-grid {
  display: grid;
  flex: 1 1 auto;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(max-content, 1fr));
  gap: 8px 16px;
}
@media (min-width: 720px) { .im-history-stat-grid { grid-template-columns: repeat(3, minmax(max-content, 1fr)); } }
@media (min-width: 1040px) { .im-history-stat-grid { grid-template-columns: repeat(5, minmax(max-content, 1fr)); } }
.im-history-stat { min-width: 0; }
.im-history-stat-label {
  font-size: 10px;
  line-height: 1.4;
  color: var(--im-ink-3);
  white-space: nowrap;
}
.im-history-stat-value {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--im-ink);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
/* \u9884\u7B97\u8BBE\u7F6E\u533A\uFF1A\u4E0E\u6307\u6807\u4E4B\u95F4\u4E00\u6761\u7AD6\u7EBF\u5206\u533A\uFF08\u539F\u7248 sm:border-l sm:pl-4\uFF09 */
.im-history-budget {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  border-left: 1px solid var(--im-line);
}
.im-history-budget-field { display: flex; align-items: center; gap: 4px; }
.im-history-budget-label { font-size: 11px; color: var(--im-ink-3); white-space: nowrap; }
/* \u8F93\u5165\u6846\u6536\u7A84\u5E76\u53F3\u5BF9\u9F50\u6570\u5B57\uFF1A\u91D1\u989D\u5217\u4E0D\u7528\u5BBD\uFF0C\u53F3\u5BF9\u9F50\u624D\u597D\u6A2A\u5411\u6BD4\u8F83\u3002
 * \u9AD8\u5EA6\u4E0D\u5728\u8FD9\u91CC\u5199\u6B7B \u2014\u2014 \u5F52\u4E0A\u9762\u90A3\u6761\u300C\u6210\u672C\u6761\u63A7\u4EF6\u540C\u9AD8\u300D\uFF0C\u5426\u5219\u53C8\u4F1A\u6BD4\u65C1\u8FB9\u7684\u6309\u94AE\u77EE\u4E00\u622A\u3002 */
.im-history-budget-input {
  width: 80px;
  padding-inline: 6px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.im-history-budget-tip { font-size: 11px; color: var(--im-ink-3); }
/* \u6309\u5C3A\u5BF8\uFF1A\u6B21\u8981\u4FE1\u606F\uFF0C\u72EC\u7ACB\u4E00\u884C\u3001\u4E0E\u6307\u6807\u540C\u4E00\u8272\u9636\uFF08\u539F\u7248 mt-2 border-t pt-2 text-[11px]\uFF09 */
.im-history-sizes {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 16px;
  padding-top: 8px;
  border-top: 1px solid var(--im-line);
  font-size: 11px;
  color: var(--im-ink-2);
}
.im-history-sizes-label { font-size: 10px; color: var(--im-ink-3); }
.im-history-sizes-row { white-space: nowrap; }
@media (max-width: 719px) {
  /* \u7A84\u5C4F\uFF1A\u8BBE\u7F6E\u533A\u6362\u884C\u540E\u4E0D\u518D\u62C9\u4E00\u6761\u7AD6\u7EBF\uFF08\u5DE6\u8FB9\u6CA1\u6709\u5185\u5BB9\u53EF\u5206\u9694\u4E86\uFF09 */
  .im-history-budget { padding-left: 0; border-left: 0; }
}
/* \u5217\u8868\uFF1A\u6574\u5C4F**\u53EA\u6709\u8FD9\u91CC\u6EDA** */
.im-history-list {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 16px;
  scrollbar-gutter: stable;
}
/* \u4E24\u5217\u5361\u7247\uFF08\u539F\u7248 ul.grid grid-cols-2 gap-3\uFF09\u3002\u7A84\u5C4F\u9000\u4E00\u5217 \u2014\u2014 \u539F\u7248 900px \u90A3\u6761\u3002 */
.im-history-rows {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* \u884C\uFF1A\u5DE6 160px \u7ED3\u679C\u56FE\u5360\u6EE1\u884C\u9AD8\uFF0C\u53F3\u4FA7\u5185\u5BB9\u81EA\u5DF1\u6392\uFF08\u539F\u7248 li + w-40 min-h-36 self-stretch\uFF09 */
.im-history-row {
  display: flex;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--im-line);
  /* \u539F\u7248\u5386\u53F2\u884C\u7684\u5706\u89D2\u662F 12\uFF08\u6BD4\u901A\u7528\u5361\u7247\u7684 16 \u5C0F\u4E00\u6863\uFF1A\u884C\u66F4\u5BC6\uFF09 */
  border-radius: 12px;
  background: var(--im-surface-float);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
/* \u60AC\u505C\u62AC\u5347\uFF1A\u539F\u7248 li:hover / li:focus-within \u540C\u4E00\u6761\u3002
   :focus-within \u662F\u5FC5\u9700\u7684 \u2014\u2014 \u952E\u76D8\u7528\u6237 Tab \u5230\u884C\u5185\u6309\u94AE\u65F6\u8981\u770B\u5230\u300C\u6211\u73B0\u5728\u5728\u8FD9\u4E00\u884C\u300D\u3002 */
.im-history-row:hover,
.im-history-row:focus-within {
  transform: translateY(-2px);
  box-shadow: var(--dsw-elevation-panel, 0 10px 22px rgba(31, 41, 55, 0.08));
}
.im-history-thumb {
  display: flex;
  flex: none;
  align-self: stretch;
  width: 160px;
  min-height: 144px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  background: var(--im-surface-inset);
}
.im-history-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.im-history-thumb-empty {
  padding: 4px;
  font-size: 11px;
  line-height: 1.35;
  text-align: center;
  color: var(--im-ink-3);
}
.im-history-main {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}
/* \u63D0\u793A\u8BCD\uFF1A2 \u884C\u622A\u65AD\uFF08\u539F\u7248 line-clamp-2\uFF09\u3002\u5B8C\u6574\u5185\u5BB9\u8D70 .im-prompt-tip \u6D6E\u5C42
   \uFF08\u771F\u88AB\u622A\u65AD\u624D\u51FA\uFF0C\u89C1 prompt-cell.tsx\uFF09\u2014\u2014\u6B63\u6587\u8865\u5168\u4E0D\u80FD\u7528\u539F\u751F title\uFF1A
   \u5B83\u663E\u793A\u4E0D\u4E86\u6362\u884C\u6392\u7248\u7684\u957F\u63D0\u793A\u8BCD\uFF0C\u8FD9\u4E00\u5904\u539F\u7248\u672C\u6765\u5C31\u662F\u81EA\u7ED8\u6D6E\u5C42\u3002 */
.im-history-prompt {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  color: var(--im-ink-2);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
/* \u63D0\u793A\u8BCD\u6D6E\u5C42\uFF1A\u6DF1\u8272\u5E95\u767D\u5B57\uFF08\u539F\u7248 bg-neutral-800 / text-white\uFF09\u3002
   \u4F4D\u7F6E\u4E0E\u5BBD\u5EA6\u7531\u7EC4\u4EF6\u5185\u8054\u7ED9\uFF08\u8DDF\u968F\u9F20\u6807 Y\u3001\u6C34\u5E73\u5C45\u4E2D\u3001\u5360\u5C4F 80%\uFF09\uFF0C\u8FD9\u91CC\u53EA\u7BA1\u5916\u89C2\u3002
   \u989C\u8272**\u4E0D\u8DDF\u4E3B\u9898\u7FFB\u8F6C**\uFF1A\u5B83\u538B\u5728\u767D\u5E95\u6216\u6DF1\u5E95\u4E4B\u4E0A\u90FD\u8981\u80FD\u8BFB\uFF0C\u800C\u6D45\u8272\u5B57\u53EA\u80FD\u914D\u6DF1\u8272\u5E95\u3002
   \u6697\u8272\u4E3B\u9898\u4E0B\u9875\u9762\u672C\u8EAB\u5C31\u6DF1\uFF0C\u6240\u4EE5\u9760\u4E00\u5708\u63CF\u8FB9 + \u5927\u6295\u5F71\u628A\u6D6E\u5C42\u4ECE\u80CC\u666F\u91CC\u62C9\u51FA\u6765\uFF0C
   \u4E0D\u52A0\u63CF\u8FB9\u4F1A\u7CCA\u6210\u4E00\u6574\u5757\u3002 */
.im-prompt-tip {
  position: fixed;
  z-index: 60;
  max-height: calc(100vh - 16px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--im-r-sm);
  background: #262626;
  color: #fff;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.36);
  font-size: 12px;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-word;
  /* \u7EAF\u5C55\u793A\uFF1A\u4E0D\u80FD\u6321\u4F4F\u5E95\u4E0B\u884C\u7684\u60AC\u6D6E\u4E0E\u70B9\u51FB */
  pointer-events: none;
}
/* \u65F6\u95F4 / \u8D28\u91CF / \u5C3A\u5BF8\uFF1A\u539F\u7248 text-[10px] tabular-nums */
.im-history-meta {
  margin: 0;
  font-size: 10px;
  color: var(--im-ink-3);
  font-variant-numeric: tabular-nums;
}
.im-history-refs { display: flex; flex-wrap: wrap; gap: 6px; }
.im-history-ref {
  width: 56px;
  height: 56px;
  overflow: hidden;
  border: 1px solid var(--im-line);
  border-radius: 6px;
  background: var(--im-surface-inset);
}
.im-history-ref img { width: 100%; height: 100%; object-fit: cover; }
.im-history-ref-missing { font-size: 10px; color: var(--im-warn); }
/* \u884C\u5185\u52A8\u4F5C\uFF1A\u4E09\u9897\u7B49\u5BBD\uFF08\u539F\u7248 min-w-0 flex-1\uFF09 */
.im-history-actions { display: flex; gap: 6px; margin-top: auto; }
.im-history-actions > * { flex: 1 1 0; min-width: 0; }
/* \u539F\u7248\u5386\u53F2\u91CC\u7684\u6309\u94AE\u5706\u89D2 8\u3001\u8F93\u5165\u6846 9\uFF08index.css:932-933\uFF09\uFF0C\u6BD4\u901A\u7528\u6863\u7D27\u4E00\u6863 */
.im-history-actions .im-btn-ghost,
.im-history-actions .im-btn-primary { border-radius: var(--im-r-sm); padding-inline: 8px; }
.im-history-empty {
  padding: 64px 0;
  text-align: center;
  font-size: 13px;
  color: var(--im-ink-3);
}
.im-history-note {
  margin: 8px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-history-pager {
  padding: 12px 0;
  text-align: center;
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-history-error {
  margin-bottom: 12px;
  padding: 8px 12px;
  border: 1px solid color-mix(in srgb, var(--im-danger) 32%, transparent);
  border-radius: var(--im-r-sm);
  background: color-mix(in srgb, var(--im-danger) 8%, transparent);
  font-size: 12px;
  color: var(--im-danger);
}
@media (max-width: 900px) {
  /* \u539F\u7248\u540C\u4E00\u6761\uFF1A\u7A84\u5C4F\u4E24\u5217\u6324\u6210\u4E00\u6761\uFF0C\u884C\u5185 160px \u7684\u56FE\u4F1A\u8BA9\u63D0\u793A\u8BCD\u53EA\u5269\u4E00\u4E24\u5B57\u5BBD */
  .im-history-rows { grid-template-columns: 1fr; }
}
@media (hover: none), (pointer: coarse) {
  /* \u89E6\u6478\u8BBE\u5907\u6CA1\u6709\u60AC\u505C\uFF1A\u62AC\u5347\u4F1A\u53D8\u6210"\u70B9\u4E00\u4E0B\u8DF3\u4E00\u4E0B" */
  .im-history-row:hover { transform: none; box-shadow: none; }
}
/* \u53EF\u9009\u5217\u8868\uFF08\u4FDD\u5B58\u5F39\u7A97\u91CC\u7684\u5DF2\u6709\u5DE5\u4F5C\u6D41\uFF09\uFF1A\u70B9\u4E00\u884C\u5C31\u628A\u540D\u5B57\u586B\u8FDB\u53BB\u3002
   \u6CE8\u610F\u8FD9\u662F\u539F\u7248**\u4FDD\u5B58**\u5F39\u7A97\u90A3\u5957\uFF08\u5185\u8054 Tailwind\uFF1Apx-3 py-1.5 / 12px / meta 10px\uFF09\uFF0C
   \u4E0E\u4E0B\u9762\u52A0\u8F7D\u5F39\u7A97\u7528\u7684 .im-workflow-list \u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u6863 \u2014\u2014 \u539F\u7248\u81EA\u5DF1\u5C31\u6CA1\u7EDF\u4E00\uFF0C
   \u7167\u5404\u81EA\u539F\u6837\u6765\uFF0C\u522B\u4E3A\u4E86\u300C\u7EDF\u4E00\u300D\u628A\u5B83\u4EEC\u5408\u6210\u4E00\u5957\u3002 */
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

/* ---------------- \u52A0\u8F7D\u5DE5\u4F5C\u6D41\u7684\u5217\u8868\uFF08\u7167\u642C\u539F\u7248 .workflow-list\uFF0Cindex.css:776-780\uFF09 ----------------
 * \u9010\u503C\u5BF9\u7167\uFF1A\u5BB9\u5668 1px rgba(31,41,55,.12) + radius var(--r-control) + --surface-float\uFF1B
 * \u884C 9px 12px / 12px / #3f4953\uFF1Bmeta 11px / rgba(23,32,43,.42) / \u7B49\u5BBD\u6570\u5B57\u3002
 * \u5B83\u6BD4\u4FDD\u5B58\u5F39\u7A97\u90A3\u5957\uFF08.im-pick-*\uFF0C6px 12px / meta 10px\uFF09\u677E\u4E00\u6863 \u2014\u2014 \u8FD9\u662F\u539F\u7248\u81EA\u5DF1\u7684
 * \u4E24\u5957\u503C\uFF0C\u4E0D\u662F\u6211\u4EEC\u6F02\u79FB\u3002 */
.im-workflow-list {
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  background: var(--im-surface-float);
  /* \u539F\u7248 max-h-72\uFF08=288px\uFF09\uFF1A\u5DE5\u4F5C\u6D41\u591A\u5230\u51E0\u5341\u4EFD\u65F6\u5217\u8868\u81EA\u5DF1\u6EDA\uFF0C\u522B\u628A\u5F39\u7A97\u6491\u957F */
  max-height: 288px;
  overflow-y: auto;
}
.im-workflow-list__item {
  display: flex;
  /* \u884C\u662F <button>\uFF1A\u6CA1\u6709 Tailwind preflight \u62B9\u5E73\uFF0C\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684\u7070\u5E95/\u8FB9\u6846/\u5C45\u4E2D/\u5B57\u4F53
     \u90FD\u5F97\u81EA\u5DF1\u6E05\u6389\uFF0C\u6F0F\u4E00\u6761\u5C31\u662F\u300C\u7CFB\u7EDF\u9ED8\u8BA4\u6309\u94AE\u300D\u6DF7\u5728\u5217\u8868\u91CC */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 12px;
  border: 0;
  background: transparent;
  color: var(--im-ink-2);
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: color 0.18s ease, background-color 0.18s ease;
}
.im-workflow-list__item:hover,
.im-workflow-list__item:focus-visible {
  color: var(--im-brand);
  background: color-mix(in srgb, var(--im-brand) 7%, transparent);
}
.im-workflow-list__name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.im-workflow-list__meta {
  flex: none;
  font-size: 11px;
  color: var(--im-ink-3);
  font-variant-numeric: tabular-nums;
}

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
  /* \u8BFB\u6570\u90A3\u884C\u5728\u539F\u7248\u91CC\u4E5F\u662F #52606f\uFF08\u548C\u5176\u4F59\u884C\u540C\u4E00\u4E2A .dock-row \u8272\uFF09\uFF0C\u4E0D\u662F\u66F4\u6DF1\u7684\u58A8\u8272\u3002
     \u7528 ink-2 \u800C\u4E0D\u662F ink\uFF1Aink \u5728\u6D45\u8272\u4E0B\u662F\u8FD1\u9ED1 #0f1115\uFF0C\u6BD4\u539F\u7248\u90A3\u6863\u7070\u6DF1\u4E00\u5927\u622A\u3002 */
  color: var(--im-ink-2);
  color: var(--im-ink);
  border-bottom: 1px solid var(--im-line);
  border-radius: 0;
  margin-bottom: 2px;
}
.im-dock-row--readout:hover { background: transparent; color: var(--im-ink-2); }

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
  border-radius: var(--im-r-pill);
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

/* ============ \u53EF\u62D6\u51FA\u6309\u94AE\uFF08\u5DE5\u5177\u680F\uFF1A\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247 / \u65B0\u5EFA\u56FE\u7247\u7EC4\uFF09 ============
   \u60AC\u6D6E\u65F6\u6697\u793A\u300C\u8FD9\u4E2A\u80FD\u62D6\u5230\u753B\u5E03\u300D\uFF1A**grab \u5149\u6807 + \u54C1\u724C\u8272\u547C\u5438\u5149\u6655 + \u53F3\u4FA7\u516D\u70B9\u628A\u624B\u6DE1\u5165\u4E0A\u6D6E**\u3002
   \u5149\u6807\u4E0E\u4E24\u4E2A\u5173\u952E\u5E27\u7167\u642C\u539F\u7248 .btn-draggable / .btn-drag-grip\uFF081.8s \u547C\u5438\u3001\u5149\u6655 5px/16%\u3001
   \u5165\u573A 0.25s cubic-bezier(0.22, 1, 0.36, 1) \u4ECE translateY(2px) scale(.8) \u6D6E\u4E0A\u6765\uFF09\u3002

   \u26A0\uFE0F \u4E0E\u539F\u6587\u7684\u4E00\u5904**\u6709\u610F\u504F\u79BB**\uFF08\u7EF4\u62A4\u8005 2026-11-07 \u5B9A\uFF09\uFF1A\u539F\u7248\u628A\u628A\u624B\u653E\u5728 -right-1
   \uFF08\u53F3\u7F18\u5916 4px\uFF09\uFF0C\u800C\u6309\u94AE\u672C\u8EAB\u662F overflow: hidden\uFF08\u6D9F\u6F2A\u5C42\u8981\u7528\uFF09\uFF0C\u90A3 4px \u4F1A\u88AB\u88C1\u6389 \u2014\u2014
   \u5B9E\u6D4B\u53EA\u5269\u534A\u679A\u5706\uFF0C\u770B\u7740\u50CF\u8D34\u4E86\u4E2A\u8C41\u53E3\u3002\u8FD9\u91CC\u6539\u6210**\u5728\u6309\u94AE\u53F3\u4FA7\u7559\u51FA\u7A7A\u9699\u3001\u628A\u624B\u653E\u5728\u7A7A\u9699\u91CC**\uFF1A
   \u53F3\u5185\u8FB9\u8DDD\u52A0\u5230 22px\uFF0C\u628A\u624B right: 3px\uFF0C\u6587\u5B57\u4E0E\u628A\u624B\u4E4B\u95F4\u8FD8\u5269\u7EA6 3px\u3002
   \u60F3\u6539\u56DE"\u8D34\u8FB9\u7F18"\u5C31\u628A\u8FD9\u4E24\u6761\u6570\u503C\u6362\u56DE\u6765\uFF0C\u4F46\u5148\u786E\u8BA4 overflow \u4E0D\u518D\u88C1\u5B83\u3002 */
.im-drag-source {
  padding-right: 22px;
  cursor: grab;
}
.im-drag-source:active { cursor: grabbing; }
.im-drag-source:hover:not(:disabled) { animation: im-drag-hint-glow 1.8s ease-in-out infinite; }
/* \u516D\u70B9\u628A\u624B\uFF1A16px \u5706\u3001\u54C1\u724C 30% \u63CF\u8FB9\u3001\u6D6E\u5C42\u5E95\u3001\u5C45\u4E2D\u5E76\u5360\u6EE1\u6309\u94AE\u9AD8\u5EA6 */
.im-drag-grip {
  position: absolute;
  right: 3px;
  top: 0;
  bottom: 0;
  margin-block: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid color-mix(in srgb, var(--im-brand) 30%, transparent);
  border-radius: var(--im-r-pill);
  /* \u539F\u7248 bg-white\uFF1A\u8FD9\u91CC\u662F\u6D6E\u5C42\u6863\u8868\u9762\uFF08\u6D45\u8272=\u767D\u3001\u6DF1\u8272=\u6DF1\u4E00\u6863\uFF09\uFF0C\u522B\u5199\u6B7B #fff */
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-card);
  color: var(--im-brand);
  opacity: 0;
  pointer-events: none;
}
.im-drag-source:hover .im-drag-grip {
  animation: im-drag-grip-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes im-drag-hint-glow {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--im-brand) 0%, transparent); }
  50%      { box-shadow: 0 0 0 5px color-mix(in srgb, var(--im-brand) 16%, transparent); }
}
@keyframes im-drag-grip-in {
  from { opacity: 0; transform: translateY(2px) scale(0.8); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
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

/* \u53EA\u7ED9\u8BFB\u5C4F\u7684\u6587\u672C\uFF1A\u4E0D\u80FD display:none\uFF08\u4F1A\u88AB\u79FB\u51FA\u65E0\u969C\u788D\u6811\uFF09\u3002
   \u7531 modal-shell \u7684\u5BF9\u8BDD\u6846\u6807\u9898\u590D\u7528\u2014\u2014\u6807\u9898\u89C6\u89C9\u4E0A\u9690\u85CF\uFF0C\u4F46\u4ECD\u662F dialog \u7684\u53EF\u8BBF\u95EE\u540D\u3002 */
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

/* ---------------- \u5927\u56FE\u9884\u89C8\uFF08\u79FB\u690D ZoomModal\uFF09 ----------------
   \u906E\u7F69\u4E0E\u575E\u4E0A\u7684\u63A7\u4EF6\u90FD\u538B\u5728\u56FE\u7247\u4E0A\uFF0C\u989C\u8272\u5FC5\u987B\u4E0E\u56FE\u7247\u5185\u5BB9\u5F62\u6210\u5BF9\u6BD4\u3001\u53C8\u4E0E\u4E3B\u9898\u81EA\u6D3D\u3002
   \u505A\u6CD5\uFF1A\u4E00\u5F8B\u4ECE --im-ink \u4E0E --im-surface \u6D3E\u751F\uFF08\u6D45\u8272\u4E3B\u9898 \u2192 \u6DF1\u5E95\u6D45\u5B57\uFF0C\u6697\u8272\u4E3B\u9898 \u2192 \u6D45\u5E95\u6DF1\u5B57\uFF09\uFF0C
   \u4E0D\u5199\u6B7B\u989C\u8272\u3001\u4E5F\u4E0D\u6DF7\u7528\u5BBF\u4E3B\u7684 --dsw-* token\u3002

   \u6CE8\u610F\u8FD9\u4E00\u7EC4\u63A7\u4EF6**\u6545\u610F**\u8DDF\u968F\u4E3B\u9898\u7FFB\u8F6C\uFF0C\u800C\u539F\u7248\u662F\u6052\u5B9A\u6DF1\u5E95\u6D45\u5B57\uFF1A\u539F\u7248\u662F\u72EC\u7ACB\u5E94\u7528\u3001
   \u9884\u89C8\u6C38\u8FDC\u5728\u6DF1\u8272\u80F6\u7247\u4E0A\uFF1B\u63D2\u4EF6\u8981\u8DDF\u5BBF\u4E3B\u660E\u6697\u4E00\u8D77\u8D70\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BA9\u5BF9\u6BD4\u65B9\u5411\u8DDF\u7740\u4E3B\u9898\u3002
   \u4E24\u79CD\u505A\u6CD5\u90FD\u80FD\u4FDD\u8BC1\u53EF\u8BFB\uFF0C\u8DE8\u4F53\u7CFB\u6DF7\u8272\u624D\u4F1A\u51FA\u73B0\u300C\u9ED1\u5E95\u9ED1\u5B57\u300D\u3002 */
.im-zoom-overlay {
  /* \u906E\u7F69\u5C42\u91CC\u90A3\u51E0\u5757\u300C\u538B\u5728\u7167\u7247\u4E0A\u300D\u7684\u63A7\u4EF6\u53F0\u3002\u5B83\u4EEC\u5FC5\u987B\u4E0E\u7167\u7247\u5185\u5BB9\u5F62\u6210\u5BF9\u6BD4\uFF0C
     \u6240\u4EE5\u8981\u5728\u6697\u906E\u7F69\u4E0A\u6D6E\u6D45\u8272\u3001\u5728\u6D45\u906E\u7F69\u4E0A\u6D6E\u6DF1\u8272 \u2014\u2014 \u4E5F\u5C31\u662F**\u548C\u906E\u7F69\u53CD\u7740\u6765**\uFF0C
     \u4E0D\u80FD\u8DDF\u4E3B\u9898\u8D70\u3002\u56E0\u6B64\u8FD9\u91CC\u4E00\u5F8B\u4ECE #fff / #000 \u76F4\u63A5\u6D3E\u751F\uFF0C\u4E0D\u7528 --im-ink\u3002 */
  --im-chrome-bg: rgba(0, 0, 0, 0.42);
  --im-chrome-bg-hover: rgba(255, 255, 255, 0.2);
  --im-chrome-ink: #fff;
  --im-chrome-line: rgba(255, 255, 255, 0.2);

  position: fixed;
  inset: 0;
  z-index: 60;
  user-select: none;
  /* \u26A0\uFE0F \u906E\u7F69\u53EA\u8D1F\u8D23**\u538B\u6697**\uFF0C\u6C38\u8FDC\u4E0D\u8DDF\u4E3B\u9898\u7FFB\u8F6C\u3002
   *
   * \u4E4B\u524D\u8FD9\u91CC\u5199\u7684\u662F color-mix(in srgb, var(--im-ink) 62%, transparent) \u2014\u2014 \u60F3"\u8DDF\u968F\u4E3B\u9898"\uFF0C
   * \u7ED3\u679C --im-ink \u5728\u6697\u8272\u4E0B\u662F\u8FD1\u767D\uFF08#f9fafb\uFF09\uFF0C62% \u7684\u767D\u76F4\u63A5\u7CCA\u6210\u4E00\u5C42\u4EAE\u7EB1\uFF1A
   * \u7EF4\u62A4\u8005\u62A5\u300C\u653E\u5927\u56FE\u7247\u540E\u80CC\u666F\u53D8\u4EAE\u4E86\u5F88\u591A\uFF0C\u662F\u4E0D\u662F\u52A0\u4E86\u4E2A\u767D\u8272\u56FE\u5C42\u300D\u3002\u5C31\u662F\u8FD9\u4E2A\u3002
   *
   * \u906E\u7F69\u7684\u8BED\u4E49\u662F"\u628A\u5E95\u4E0B\u7684\u754C\u9762\u63A8\u8FDC"\uFF0C\u4E24\u79CD\u4E3B\u9898\u4E0B\u90FD\u8BE5\u66F4\u9ED1\uFF0C\u6240\u4EE5\u7528\u8499\u7248 token\uFF1A
   * \u6D45\u8272 #0000003d\u3001\u6697\u8272 #00000080\uFF08\u6697\u8272\u672C\u6765\u5C31\u538B\u5F97\u66F4\u72E0\uFF0C\u7B26\u5408\u76F4\u89C9\uFF09\u3002 */
  background: var(--im-scrim);
  /* \u6BD4\u5F39\u7A97\u90A3\u6863\u66F4\u8F7B\u7684\u6A21\u7CCA\uFF1A\u9884\u89C8\u662F\u300C\u770B\u8FD9\u5F20\u56FE\u300D\uFF0C\u80CC\u666F\u53EA\u9700\u9000\u5230\u770B\u4E0D\u6E05\u5B57 */
  backdrop-filter: blur(4px) saturate(0.96);
  -webkit-backdrop-filter: blur(4px) saturate(0.96);
}
.im-zoom-viewport {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
}
.im-zoom-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transform-origin: center center;
  user-select: none;
  -webkit-user-drag: none;
}
/* \u9876\u90E8\u8EAB\u4EFD\u6761\uFF1A\u53EA\u538B\u4F4F\u4E24\u4E2A\u89D2\uFF0C\u4E2D\u95F4\u6574\u5757\u7559\u7ED9\u56FE\u7247 */
.im-zoom-top {
  position: absolute;
  inset: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  pointer-events: none;
}
.im-zoom-name {
  pointer-events: auto;
  display: flex;
  align-items: center;
  height: var(--im-h-ctl);
  max-width: 62vw;
  padding: 0 10px;
  border-radius: var(--im-r-sm);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.im-zoom-close {
  pointer-events: auto;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--im-h-ctl);
  height: var(--im-h-ctl);
  padding: 0;
  border: 0;
  border-radius: var(--im-r-pill);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.im-zoom-close:hover { background: var(--im-chrome-bg-hover); }
.im-zoom-close > svg { width: 14px; height: 14px; }

/* \u5E95\u90E8\u63A7\u5236\u575E\uFF1A\u5355\u884C\u4E09\u7EC4\uFF0C\u7EC4\u95F4\u4E00\u6761\u7EC6\u5206\u9694\u7EBF\uFF1B\u4E0D\u5360\u56FE\u7247\u7A7A\u95F4 */
.im-zoom-dock-wrap {
  position: absolute;
  inset: auto 0 12px;
  display: flex;
  justify-content: center;
  padding: 0 12px;
}
.im-zoom-dock {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: var(--im-r-float);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  font-size: 12px;
}
.im-zoom-group {
  display: flex;
  align-items: center;
  gap: 4px;
}
/* \u9AD8\u5EA6\u7EDF\u4E00\u9489\u5728 --im-h-ctl\uFF1A\u53EA\u6309 padding \u6491\u9AD8\u65F6\uFF0C\u56FE\u6807\u6309\u94AE\u4F1A\u6BD4\u6587\u5B57\u6309\u94AE\u9AD8\u4E00\u5708\uFF0C
   \u4E00\u884C\u91CC\u51FA\u73B0\u4E24\u79CD\u57FA\u7EBF\uFF08\u539F\u7248\u4E3A\u8FD9\u4E2A\u5751\u5199\u8FC7\u6CE8\u91CA\uFF09\u3002 */
.im-zoom-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--im-h-ctl);
  padding: 0 10px;
  border: 0;
  border-radius: var(--im-r-sm);
  background: var(--im-chrome-line);
  color: var(--im-chrome-ink);
  font: inherit;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.im-zoom-btn:hover:not(:disabled) { background: var(--im-chrome-bg-hover); }
.im-zoom-btn:disabled { opacity: 0.5; cursor: default; }
.im-zoom-btn--icon {
  width: var(--im-h-ctl);
  padding: 0;
}
.im-zoom-btn--icon > svg { width: 12px; height: 12px; }
.im-zoom-readout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: var(--im-h-ctl);
  font-variant-numeric: tabular-nums;
}
.im-zoom-divider {
  flex: none;
  width: 1px;
  height: 16px;
  margin: 0 2px;
  background: var(--im-chrome-line);
}
/* \u590D\u5236\u53CD\u9988\uFF1A\u7EDD\u5BF9\u5B9A\u4F4D\u5728\u575E\u4E0A\u65B9\uFF0C\u4E0D\u8FDB\u5E03\u5C40\uFF08\u4E00\u53D8\u5BBD\u7A84\u6309\u94AE\u5C31\u4F1A\u632A\u4F4D\u7F6E\uFF09 */
.im-zoom-toast {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  max-width: 60vw;
  padding: 4px 8px;
  border-radius: var(--im-r-sm);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
}
.im-zoom-toast.is-copied { background: var(--im-ok); }
.im-zoom-toast.is-failed { background: var(--im-warn); }

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
   \u539F\u7248 index.css \u4E5F\u662F\u8FD9\u4E48\u8865\u7684 \u2014\u2014 \u4F46\u5B83**\u53EA\u7ED9 button / a / [role=button] /
   [role=option] / input[type=range]** \u52A0\uFF0C\u8F93\u5165\u7C7B\u63A7\u4EF6\uFF08input/textarea/select\uFF09\u4E0D\u5728\u540D\u5355\u91CC\uFF1A
   \u5B83\u4EEC\u9760 .field-control:focus \u90A3\u5708 4px \u5149\u73AF\u8868\u793A\u7126\u70B9\uFF08\u89C1\u4E0A\u9762 .im-field:focus\uFF09\u3002
   \u8FD9\u91CC\u4E25\u683C\u7167\u8FD9\u4E2A\u5206\u5DE5\uFF0C\u522B\u7ED9 .im-field \u518D\u8865 outline \u2014\u2014 \u4E24\u6761\u53E0\u52A0\u5C31\u662F\u300C\u91CD\u5F71\u53CC\u73AF\u300D\u3002 */
button:focus-visible,
[role='button']:focus-visible,
[role='option']:focus-visible,
input[type='range']:focus-visible {
  outline: 2px solid var(--im-brand);
  outline-offset: 3px;
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
   .react-flow__node \u2014\u2014 \u90A3\u5C42\u662F React Flow \u7684\u5B9A\u4F4D transform\uFF0C\u52A8\u5B83\u8282\u70B9\u4F1A\u7529\u98DE\u3002

   \u26A0\uFE0F\u26A0\uFE0F \u5165\u573A\u52A8\u753B**\u5FC5\u987B\u6302\u5728 node-enter \u7C7B\u4E0A**\uFF0C\u7EDD\u4E0D\u80FD\u65E0\u6761\u4EF6\u4E0B\u5728 .im-panel-card \u4E0A\u3002
   \u8FD9\u6761\u662F\u672C\u6B21\u300C\u6587\u5B57\u6C38\u4E45\u6A21\u7CCA + \u52A0\u8F7D\u5F88\u6162\u300D\u7684\u76F4\u63A5\u6839\u56E0\uFF08\u7EF4\u62A4\u8005\u62A5\u7684\uFF09\uFF0C\u6210\u56E0\u5199\u6E05\u695A\u514D\u5F97
   \u53C8\u88AB"\u7B80\u5316"\u56DE\u53BB\uFF1A

   1) \u65E0\u6761\u4EF6\u5199 animation + both \u7B49\u4E8E**\u6BCF\u5F20\u5361\u6C38\u8FDC\u5E26\u7740\u4E00\u4E2A\u52A8\u753B**\u3002\u6D4F\u89C8\u5668\u5BF9\u5E26
      \u52A8\u753B\u7684\u5143\u7D20\u6309\u52A8\u753B\u56FE\u5C42\u5904\u7406\u5E76\u6309\u5F53\u65F6\u500D\u7387\u6805\u683C\u5316 \u2014\u2014 \u800C\u753B\u5E03\u7F29\u653E\u6539\u7684\u662F
      .react-flow__viewport \u7684 scale\uFF0C\u52A8\u753B\u56FE\u5C42\u4E0D\u8DDF\u7740\u91CD\u6805\u683C \u2192 \u653E\u5927\u540E\u5C31\u662F\u62C9\u5927\u7684\u65E7
      \u4F4D\u56FE\uFF0C\u6587\u5B57\u4E00\u76F4\u53D1\u865A\uFF0C\u8981\u7B49\u67D0\u6B21\u91CD\u7ED8\uFF08\u70B9\u51FB/\u60AC\u505C\uFF09\u624D\u5237\u65B0\u3002
   2) both \u8FD8\u4F1A\u628A\u6700\u7EC8\u5E27\u9501\u4F4F\uFF0C\u548C hover \u7684 transform/transition \u62A2\u540C\u4E00\u7EC4\u5C5E\u6027\u3002
   3) \u53E0\u52A0 onlyRenderVisibleElements\uFF1A\u5E73\u79FB/\u7F29\u653E\u65F6\u8282\u70B9\u53CD\u590D\u6302\u8F7D\uFF0C\u52A8\u753B\u53CD\u590D\u4ECE\u5934\u64AD\uFF0C
      \u6BCF\u5E27\u90FD\u5728\u91CD\u542F\u5408\u6210 \u2192 \u300C\u52A0\u8F7D\u5F88\u6162\u300D\u7684\u4F53\u611F\u5C31\u6765\u81EA\u8FD9\u91CC\u3002

   \u539F\u7248\u7684\u5199\u6CD5\u5C31\u662F**\u6309\u7C7B\u95E8\u63A7**\uFF1A.enter-up \u53EA\u5728\u5E26\u8BE5\u7C7B\u7684\u5143\u7D20\u4E0A\u751F\u6548\uFF0C
   \u8282\u70B9\u7684 node-enter \u7C7B\u7531 CanvasPage \u5728\u52A8\u753B\u7ED3\u675F\u540E\u6458\u6389\uFF08\u89C1\u5176"\u5165\u573A\u52A8\u753B\u6536\u5C3E"\u6CE8\u91CA\uFF09\u3002
   \u6211\u4EEC\u7167\u540C\u4E00\u7ED3\u6784\uFF0C\u4F46**\u9ED8\u8BA4\u4E0D\u7ED9\u8282\u70B9\u52A0\u8FD9\u4E2A\u7C7B** \u2014\u2014 \u4E5F\u5C31\u662F\u9ED8\u8BA4\u4E0D\u52A8\u753B\u3002
   \u8981\u6062\u590D\u5165\u573A\u52A8\u6548\uFF0C\u5C31\u5728\u8282\u70B9\u521A\u521B\u5EFA\u65F6\u52A0 node-enter\uFF08\u914D enter-delay-1..3 \u4EA4\u9519\uFF09\uFF0C
   \u5E76\u5728 animationend \u91CC\u6458\u6389\uFF1Blib/workflow.ts \u7684 withEnterAnim / stripAnimClasses
   \u5C31\u662F\u4E3A\u6B64\u51C6\u5907\u7684\u73B0\u6210\u5DE5\u5177\u3002\u52A0\u4E4B\u524D\u5148\u60F3\u6E05\u695A\uFF1A\u8FD9\u662F 0.5s \u7684\u89C2\u611F\uFF0C
   \u4EE3\u4EF7\u662F\u6BCF\u5F20\u5361\u591A\u4E00\u4E2A\u5408\u6210\u5C42\u3002 */
.react-flow__node.node-enter .im-panel-card { animation: im-enter-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
.react-flow__node.node-enter.enter-delay-1 .im-panel-card { animation-delay: 70ms; }
.react-flow__node.node-enter.enter-delay-2 .im-panel-card { animation-delay: 140ms; }
.react-flow__node.node-enter.enter-delay-3 .im-panel-card { animation-delay: 210ms; }
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
`;var uf=require("react"),Be=require("react/jsx-runtime"),Kn=class extends uf.Component{state={error:null};static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[dsh-imagora-desk] \u6E32\u67D3\u51FA\u9519",t,n.componentStack),this.props.onError?.(t,n)}reset=()=>this.setState({error:null});render(){return this.state.error?this.props.fallback(this.state.error,this.reset):this.props.children}};function df(e){let t=String(e?.message??e??"\u672A\u77E5\u9519\u8BEF").split(`
`)[0]??"";return t.length>140?`${t.slice(0,140)}\u2026`:t}function Ur({nodeId:e,children:t}){return(0,Be.jsx)(Kn,{fallback:(n,o)=>(0,Be.jsxs)("div",{className:"im-node-error","data-node-id":e,title:String(n?.stack??n),children:[(0,Be.jsx)("div",{className:"im-node-error-title",children:"\u8FD9\u5F20\u5361\u51FA\u9519\u4E86"}),(0,Be.jsx)("p",{className:"im-node-error-msg",children:df(n)}),(0,Be.jsx)("p",{className:"im-node-error-hint",children:"\u9009\u4E2D\u5B83\u6309 Delete \u5220\u6389\u5373\u53EF\uFF0C\u5176\u4F59\u5361\u7247\u4E0D\u53D7\u5F71\u54CD"}),(0,Be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs nodrag",onClick:o,children:"\u91CD\u8BD5"})]}),children:t})}function Yr({children:e,onCrash:t,onClear:n}){return(0,Be.jsx)(Kn,{onError:o=>t?.(o),fallback:(o,r)=>(0,Be.jsxs)("div",{className:"im-canvas-error",role:"alert",children:[(0,Be.jsx)("h3",{className:"im-canvas-error-title",children:"\u753B\u5E03\u6E32\u67D3\u51FA\u9519"}),(0,Be.jsx)("p",{className:"im-canvas-error-msg",children:df(o)}),(0,Be.jsx)("p",{className:"im-canvas-error-hint",children:"\u4F60\u7684\u5DE5\u4F5C\u6D41\u6587\u4EF6\u8FD8\u5728\u78C1\u76D8\u4E0A\uFF0C\u6CA1\u6709\u4E22\u3002\u53EF\u4EE5\u5148\u91CD\u8BD5\uFF1B\u5982\u679C\u8FD8\u662F\u4E0D\u884C\uFF0C\u6E05\u7A7A\u753B\u5E03\u518D\u4ECE \u5DE5\u4F5C\u6D41\u91CC\u91CD\u65B0\u52A0\u8F7D\u3002"}),(0,Be.jsxs)("div",{className:"im-canvas-error-actions",children:[(0,Be.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",onClick:r,children:"\u91CD\u8BD5"}),(0,Be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>{n(),r()},children:"\u6E05\u7A7A\u753B\u5E03"})]})]}),children:e})}var os=require("react/jsx-runtime");function ns(e){function t(n){return(0,os.jsx)(Ur,{nodeId:n?.id,children:(0,os.jsx)(e,{...n})})}return t.displayName=`Bounded(${e.displayName||e.name||"Node"})`,t}var ff={image:ns(af),prompt:ns(lf),group:ns(sf)};var Zr=Math.round(5),pf=Math.round(200);function yv(e){return Number.isNaN(e)?Zr:e===Number.POSITIVE_INFINITY?pf:e===Number.NEGATIVE_INFINITY?Zr:Math.min(pf,Math.max(Zr,Math.round(e)))}function mf(e){return Number.isNaN(e)||e<=0?Zr:yv(e*100)}var rs=.15,xv=.2;function gf(e,t){return!e&&t<rs?!0:e&&t>xv?!1:e}var wn=require("react/jsx-runtime"),wv="0 0 1024 1024",vv="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function is({size:e=30,fill:t="var(--im-brand)"}){return(0,wn.jsx)("svg",{width:e,height:e,viewBox:wv,fill:t,"aria-hidden":"true",children:(0,wn.jsx)("path",{d:vv})})}function hf({onClick:e}){return(0,wn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,wn.jsx)(is,{}),(0,wn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var bf=require("react"),vn=require("react/jsx-runtime");function kv(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function yf(e){return(0,bf.useMemo)(()=>kv(e),[e])}function xf({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,vn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,vn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,vn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,vn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,vn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var _e=require("react/jsx-runtime");function wf(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(u,l,c)=>(0,_e.jsx)("button",{type:"button",className:`${c.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:c.title,disabled:c.disabled,onClick:l,children:u});return(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsxs)("div",{className:"im-header",children:[(0,_e.jsx)(hf,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,_e.jsx)(ft,{className:"im-select-profile",options:[...(t.profiles??[]).map(u=>({value:u.name,label:u.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:u=>e.onSwitchProfile(u)}):null,t&&(t.models?.length??0)>1?(0,_e.jsx)(ft,{className:"im-select-model",options:t.models.map(u=>({value:u.id,label:u.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:u=>e.onSwitchModel(u)}):null,(0,_e.jsx)(xf,{summary:e.cost,budget:t?.budget??0}),(0,_e.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,_e.jsxs)("div",{className:"im-toolbar",children:[(0,_e.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:u=>e.onDragCreateNode(u,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,_e.jsx)("span",{className:"im-drag-grip",children:(0,_e.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:u=>e.onDragCreateNode(u,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,_e.jsx)("span",{className:"im-drag-grip",children:(0,_e.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,_e.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var We=require("react/jsx-runtime");function Yt({icon:e,label:t,title:n,active:o,onClick:r}){return(0,We.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,We.jsx)(ze,{name:e,size:14}),(0,We.jsx)("span",{className:"im-dock-row-label",children:t})]})}function vf(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,We.jsxs)("div",{className:"im-dock nodrag",children:[(0,We.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,We.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[mf(t),"%"]})}),(0,We.jsx)(Yt,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,We.jsx)(Yt,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,We.jsx)(Yt,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,We.jsx)(Yt,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,We.jsx)(Yt,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,We.jsx)(Yt,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,We.jsx)(Yt,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,We.jsx)(Yt,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Fe=require("react"),Cf=require("react-dom");var as="application/x-dsh-imagora-canvas",Kr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},kf="\u677E\u5F00\u53D6\u6D88";function ss(e){return e.dataTransfer?.types.includes("Files")??!1}function No(e,t){if(ss(e))return"images";let n=e.dataTransfer?.getData(as);return n==="prompt"||n==="group"?n:t}function Sf(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Nf(e){return Array.from(e?.files??[]).filter(Dr)}function Mf(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":Kr[e]}function ls(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var Lt=require("react/jsx-runtime"),Sv=22,Nv=28,jr=8;function Ef(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a,onRejectFiles:s}=e,[u,l]=(0,Fe.useState)(null),c=(0,Fe.useRef)(null),d=(0,Fe.useRef)(0),f=(0,Fe.useRef)(null),p=(0,Fe.useRef)(null),h=(0,Fe.useRef)(null),b=(0,Fe.useCallback)((S,k)=>{c.current=S,l(S);let C=h.current;C&&C.textContent!==k&&(C.textContent=k)},[]),y=(0,Fe.useCallback)(()=>{c.current=null,d.current=0,l(null),p.current?.classList.remove("is-outside")},[]),g=(0,Fe.useCallback)((S,k)=>{let C=f.current;if(!C)return;let P=Math.min(S+Sv,window.innerWidth-C.offsetWidth-jr),L=Math.min(k+Nv,window.innerHeight-C.offsetHeight-jr);C.style.transform=`translate(${Math.max(jr,P)}px, ${Math.max(jr,L)}px)`},[]),w=(0,Fe.useCallback)((S,k,C)=>{let P=t.current;if(!P)return o();let L=P.getBoundingClientRect(),D=C?Math.min(Math.max(S,L.left),L.left+L.width):S,A=C?Math.min(Math.max(k,L.top),L.top+L.height):k;return r({x:D,y:A})},[t,o,r]);(0,Fe.useEffect)(()=>{let S=P=>{ss(P)&&P.preventDefault()},k=P=>{let L=c.current;if(!L||L==="images")return;g(P.clientX,P.clientY);let D=t.current,A=!!(D&&ls(P.clientX,P.clientY,D.getBoundingClientRect())),_=A?Kr[L]:kf,v=h.current;v&&v.textContent!==_&&(v.textContent=_),p.current?.classList.toggle("is-outside",!A)},C=()=>{d.current=0,y()};return window.addEventListener("dragover",S),window.addEventListener("dragover",k),window.addEventListener("drop",S),window.addEventListener("dragend",C),window.addEventListener("blur",C),()=>{window.removeEventListener("dragover",S),window.removeEventListener("dragover",k),window.removeEventListener("drop",S),window.removeEventListener("dragend",C),window.removeEventListener("blur",C)}},[t,y,g]);let m={onDragEnter:S=>{if(n)return;let k=No(S,c.current);k&&(S.preventDefault(),k==="images"&&(d.current+=1),b(k,Mf(k,Sf(S.dataTransfer))),g(S.clientX,S.clientY))},onDragOver:S=>{n||!No(S,c.current)||(S.preventDefault(),S.dataTransfer.dropEffect="copy",g(S.clientX,S.clientY))},onDragLeave:S=>{n||No(S,c.current)==="images"&&(d.current-=1,d.current<=0&&y())},onDrop:S=>{if(n)return;let k=No(S,c.current);if(!k)return;S.preventDefault();let C=t.current,P=!C||ls(S.clientX,S.clientY,C.getBoundingClientRect());if(y(),k==="images"){let L=Nf(S.dataTransfer);if(!L.length){s();return}i(L,w(S.clientX,S.clientY,!0));return}P&&a(k,w(S.clientX,S.clientY,!1))}},x=(0,Fe.useCallback)((S,k)=>{S.dataTransfer.setData(as,k),S.dataTransfer.effectAllowed="copy",b(k,Kr[k]),g(S.clientX,S.clientY)},[g,b]),N=(0,Cf.createPortal)((0,Lt.jsx)("div",{ref:f,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,Lt.jsxs)("div",{ref:p,className:`im-drop-chip${u?" show":""}`,children:[(0,Lt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,Lt.jsx)(ze,{name:u==="group"?"layers":u==="images"?"image":"plus",size:14})}),(0,Lt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,Lt.jsx)(ze,{name:"close",size:14})}),(0,Lt.jsx)("span",{ref:h,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:u,dropChip:N,dragHandlers:m,startToolbarDrag:x,hideDropChip:y}}var $t=require("react");var _f=2;function If({rootRef:e,canvasRef:t,instanceRef:n,setNodes:o,modalOpen:r}){let[i,a]=(0,$t.useState)(null),[s,u]=(0,$t.useState)(null),l=(0,$t.useRef)(null),c=(0,$t.useCallback)(()=>a(null),[]);return(0,$t.useEffect)(()=>{if(r){l.current=null,u(null);return}let d=t.current,f=e.current;if(!d||!f)return;let p=w=>{if(w.button!==2)return;let m=n.current;if(!m)return;let x=w.target instanceof Element?w.target:null;if(x?.closest("input, textarea, [contenteditable]"))return;let N=m.screenToFlowPosition({x:w.clientX,y:w.clientY}),S=x?.closest(".react-flow__node"),k=S instanceof HTMLElement?S.dataset.id??null:null;l.current={startFlow:N,nodeId:k,clientX:w.clientX,clientY:w.clientY},u({x:N.x,y:N.y,width:0,height:0}),w.preventDefault()},h=w=>{let m=l.current,x=n.current;if(!m||!x)return;let N=x.screenToFlowPosition({x:w.clientX,y:w.clientY});u({x:Math.min(m.startFlow.x,N.x),y:Math.min(m.startFlow.y,N.y),width:Math.abs(N.x-m.startFlow.x),height:Math.abs(N.y-m.startFlow.y)})},b=w=>{let m=l.current,x=n.current;if(!m||!x)return;l.current=null;let N=x.screenToFlowPosition({x:w.clientX,y:w.clientY}),S={x:Math.min(m.startFlow.x,N.x),y:Math.min(m.startFlow.y,N.y),width:Math.abs(N.x-m.startFlow.x),height:Math.abs(N.y-m.startFlow.y)};if(u(null),S.width<_f&&S.height<_f){a(m.nodeId?{x:m.clientX,y:m.clientY,nodeId:m.nodeId}:null);return}a(null),o(k=>{let C=!1,P=k.map(L=>{let D=He(L),A=L.position.x>=S.x&&L.position.y>=S.y&&L.position.x+D.width<=S.x+S.width&&L.position.y+D.height<=S.y+S.height;return A===!!L.selected?L:(C=!0,{...L,selected:A})});return C?P:k})},y=w=>{let m=w.target instanceof Element?w.target:null;m&&(m.closest("input, textarea, [contenteditable]")||w.preventDefault())},g=()=>{l.current&&(l.current=null,u(null))};return d.addEventListener("mousedown",p),window.addEventListener("mousemove",h),window.addEventListener("mouseup",b),f.addEventListener("contextmenu",y,!0),window.addEventListener("blur",g),()=>{d.removeEventListener("mousedown",p),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",b),f.removeEventListener("contextmenu",y,!0),window.removeEventListener("blur",g)}},[t,e,n,o,r]),{nodeMenu:i,boxRect:s,closeMenu:c,setNodeMenu:a}}var xt=require("react"),Df=require("react-dom");function yt(e,t,n={}){let o={id:e,label:t};return n.danger&&(o.danger=!0),n.disabled&&(o.disabled=!0),{kind:"action",action:o}}var cs={kind:"separator"};function Pf(e,t){let n=[];if(t.selectedCount>1&&(n.push(yt("delete-selection",`\u5220\u9664\u6240\u9009 ${t.selectedCount} \u9879`,{danger:!0})),n.push(cs)),e==="image"){let r=!t.hasUrl;n.push(yt("preview","\u9884\u89C8\u5927\u56FE",{disabled:r}),yt("crop","\u88C1\u526A",{disabled:r}),yt("upscale","\u653E\u5927",{disabled:r}),yt("split","\u5207\u5206",{disabled:r}),yt("mask","\u8499\u7248\u91CD\u7ED8",{disabled:r}),yt("replace","\u66FF\u6362\u56FE\u7247"),cs)}else e==="prompt"&&n.push(yt("run","\u8FD0\u884C"),yt("copy-prompt","\u590D\u5236\u63D0\u793A\u8BCD"),cs);let o=t.selectedCount>1?"\u4EC5\u5220\u9664\u6B64\u9879":"\u5220\u9664";return n.push(yt("delete",o,{danger:!0})),n}function us(e,t,n,o=8){let r=Math.max(0,n.width-t.width-o),i=Math.max(0,n.height-t.height-o);return{x:Math.min(Math.max(0,e.x),r),y:Math.min(Math.max(0,e.y),i)}}function zf(e){return e.reduce((t,n)=>t+(n.kind==="action"?28:9),0)}function Rf(e){return e==="Escape"||e==="Tab"}var Qr=require("react/jsx-runtime");function Af(){return{width:window.innerWidth,height:window.innerHeight}}function Cv(e,t,n){return us({x:e,y:t},{width:200,height:zf(n)},Af())}function Tf({x:e,y:t,items:n,onPick:o,onClose:r}){let i=(0,xt.useRef)(null),[a,s]=(0,xt.useState)(()=>Cv(e,t,n)),[u,l]=(0,xt.useState)(null);return(0,xt.useEffect)(()=>(Xr(),()=>Gr()),[]),(0,xt.useLayoutEffect)(()=>{let c=i.current?.getBoundingClientRect().height??0;if(c<=0)return;let d=us({x:e,y:t},{width:200,height:c},Af());s(f=>f.x===d.x&&f.y===d.y?f:d)},[e,t]),(0,xt.useEffect)(()=>{let c=p=>{let h=p.target;h instanceof Node&&i.current?.contains(h)||r()},d=p=>{p.defaultPrevented||Rf(p.key)&&r()},f=()=>r();return document.addEventListener("pointerdown",c),document.addEventListener("keydown",d),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{document.removeEventListener("pointerdown",c),document.removeEventListener("keydown",d),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[r]),(0,Df.createPortal)((0,Qr.jsx)("div",{ref:i,role:"menu","aria-label":"\u8282\u70B9\u64CD\u4F5C","data-testid":"node-context-menu",className:"im-select-list",style:{left:a.x,top:a.y,width:200,zIndex:72,userSelect:"none"},children:n.map((c,d)=>{if(c.kind==="separator")return(0,Qr.jsx)("div",{role:"separator",className:"im-menu-separator"},`separator-${d}`);let{action:f}=c,p=f.disabled===!0;return(0,Qr.jsx)("button",{type:"button",role:"menuitem","data-testid":`node-menu-${f.id}`,"aria-disabled":p?"true":void 0,className:`im-select-option${u===f.id?" is-active":""}${f.danger?" is-danger":""}${p?" is-disabled":""}`,style:{height:28,minHeight:0,paddingTop:0,paddingBottom:0},onClick:()=>{p||o(f.id)},onMouseEnter:()=>l(f.id),onMouseLeave:()=>l(null),children:f.label},f.id)})}),document.body)}var Of="dsh-imagora.canvas-minimap.v1";function Lf(){try{let e=localStorage.getItem(Of);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function $f(e){try{localStorage.setItem(Of,e?"1":"0")}catch{}}var Zt=require("react/jsx-runtime");function Hf(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,Zt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Zt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Zt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u6309\u53C2\u8003\u5173\u7CFB\u5206\u5C42\u91CD\u6392\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u63D0\u793A\u8BCD\u5361 / \u7ED3\u679C\u56FE / \u56FE\u7247\u7EC4\u4E00\u8D77\u53C2\u4E0E\uFF0C\u540C\u5C42\u6309\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Zt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Zt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Zt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var Ze=require("react/jsx-runtime");function Bf(){return(0,Ze.jsxs)("div",{className:"im-empty",children:[(0,Ze.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,Ze.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,Ze.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var Ev=5;function Wf({logs:e}){if(!e.length)return null;let t=e.slice(-Ev);return(0,Ze.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,Ze.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var _v={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Ff({text:e}){return e?(0,Ze.jsx)("div",{style:_v,children:e}):null}function Vf({tone:e,children:t,action:n}){return(0,Ze.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ze.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ze.jsx)(ze,{name:e==="error"?"help":"clock"})}),(0,Ze.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ze.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var ke=require("react"),Kf=require("react-dom");async function Iv(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function Xf(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await Iv(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function Gf(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var Mo=e=>Math.min(8,Math.max(.2,e));function qf(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function Uf(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function Yf(e,t,n){return Math.round(e*Uf(t,n)*100)}function Zf(e,t){let n=Uf(e,t);return n?Mo(1/n):1}var he=require("react/jsx-runtime"),Jr=1.2,Pv=5;function ei({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,ke.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,ke.useState)(!1),[u,l]=(0,ke.useState)(null),c=(0,ke.useRef)(null),d=(0,ke.useRef)(!1),f=u?.kind==="copying",p=(0,ke.useRef)(null),[h,b]=(0,ke.useState)(null),y=(0,ke.useRef)({width:0,height:0}),g=(0,ke.useRef)(null),w=(0,ke.useRef)(null),m=(0,ke.useRef)(null),x=(0,ke.useRef)(null),N=(0,ke.useCallback)(M=>{let z=m.current;return z?{zoom:M.zoom,pan:qf(M.pan,M.zoom,y.current,{width:z.clientWidth,height:z.clientHeight})}:M},[]),S=(0,ke.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),k=(0,ke.useCallback)(()=>{let M=x.current;if(!M)return;y.current={width:M.clientWidth,height:M.clientHeight};let z={width:M.naturalWidth,height:M.naturalHeight};p.current=z,b(T=>T&&T.width===z.width&&T.height===z.height?T:z)},[]);(0,ke.useEffect)(()=>{let M=()=>k();return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[k]);let C=(0,ke.useCallback)(()=>{let M=Zf(p.current,y.current);i(z=>N({zoom:M,pan:z.pan}))},[N]),P=(0,ke.useCallback)(()=>{let M=p.current,z=w.current;if(!M||!z)return;let T=z.clientWidth*.98,V=z.clientHeight*.98,W=Mo(Math.min(1,T/M.width,V/M.height));i({zoom:W,pan:{x:0,y:0}})},[]);(0,ke.useEffect)(()=>{let M=m.current;if(!M)return;let z=T=>{T.preventDefault(),T.stopPropagation();let V=M.getBoundingClientRect(),W=T.clientX-V.left-V.width/2,R=T.clientY-V.top-V.height/2;i(U=>{let X=Mo(T.deltaY<0?U.zoom*Jr:U.zoom/Jr);if(X===U.zoom)return U;let Z=X/U.zoom;return N({zoom:X,pan:{x:W-(W-U.pan.x)*Z,y:R-(R-U.pan.y)*Z}})})};return M.addEventListener("wheel",z,{passive:!1}),()=>M.removeEventListener("wheel",z)},[N]),(0,ke.useEffect)(()=>{let M=z=>{z.key==="Escape"&&o()};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[o]),(0,ke.useEffect)(()=>()=>{c.current&&window.clearTimeout(c.current)},[]);let L=(M,z)=>{l({kind:M,text:z}),c.current&&window.clearTimeout(c.current),c.current=M==="copying"?null:window.setTimeout(()=>l(null),1200)},D=async(M,z)=>{if(!d.current){d.current=!0,L("copying","\u590D\u5236\u4E2D\u2026");try{await M(),L("copied",z)}catch(T){L("failed",T instanceof Error?T.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},A=M=>{r.zoom<=1||(M.preventDefault(),M.stopPropagation(),M.currentTarget instanceof Element&&M.currentTarget.setPointerCapture(M.pointerId),g.current={startX:M.clientX,startY:M.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:M.target===x.current},s(!0))},_=M=>{let z=g.current;if(!z)return;let T=M.clientX-z.startX,V=M.clientY-z.startY;!z.moved&&Math.hypot(T,V)<=Pv||(z.moved=!0,i(W=>N({...W,pan:{x:z.panX+T,y:z.panY+V}})))},v=()=>{let M=g.current;g.current=null,s(!1),M&&!M.moved&&!M.onImage&&o()},I=M=>{let z=M.target instanceof Element?M.target:null;z&&(z.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},E=M=>i(z=>N({...z,zoom:Mo(z.zoom*M)}));return(0,Kf.createPortal)((0,he.jsxs)("div",{ref:w,className:"im-zoom-overlay",onPointerDown:I,onClick:M=>M.stopPropagation(),children:[(0,he.jsx)("div",{ref:m,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:A,onPointerMove:_,onPointerUp:v,onPointerCancel:v,onDoubleClick:M=>{M.stopPropagation(),S()},children:(0,he.jsx)("img",{ref:x,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let M=x.current;M&&(p.current={width:M.naturalWidth,height:M.naturalHeight},y.current={width:M.clientWidth,height:M.clientHeight},k())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,he.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,he.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,he.jsx)("div",{"aria-hidden":!0}),(0,he.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,he.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,he.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>E(1/Jr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9"})})}),(0,he.jsxs)("span",{className:"im-zoom-readout",title:`${h?`${h.width}\xD7${h.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[Yf(r.zoom,h,y.current),"%"]}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>E(Jr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:P,children:"\u9002\u5E94\u7A97\u53E3"}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:C,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void D(()=>Xf(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void D(()=>Gf(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,he.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),u?(0,he.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${u.kind==="failed"?" is-failed":u.kind==="copied"?" is-copied":""}`,children:u.text}):null]})})]}),document.body)}var fs=require("react");var Kt=require("react"),Jf=require("react-dom");var wt=require("react/jsx-runtime"),jf=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),Co=[];function Qf(e){return Co[Co.length-1]===e}function Te({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:u=!1,headerless:l=!1}){let c=`im-modal-${(0,Kt.useId)()}`,d=`${c}-title`,f=(0,Kt.useRef)(null),p=(0,Kt.useRef)(null),h=(0,Kt.useRef)(o);return h.current=o,(0,Kt.useEffect)(()=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,Co.push(c);let y=f.current;(a?.current??y?.querySelector(jf)??y)?.focus();let w=m=>{if(!Qf(c))return;if(m.key==="Escape"){if(Jd())return;m.preventDefault(),m.stopPropagation(),h.current();return}if(m.key!=="Tab"||!y)return;let x=Array.from(y.querySelectorAll(jf)).filter(k=>!k.hidden&&k.getAttribute("aria-hidden")!=="true");if(!x.length){m.preventDefault(),y.focus();return}let N=x[0],S=x[x.length-1];!N||!S||(m.shiftKey&&(document.activeElement===N||!y.contains(document.activeElement))?(m.preventDefault(),S.focus()):!m.shiftKey&&document.activeElement===S&&(m.preventDefault(),N.focus()))};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0);let m=Co.lastIndexOf(c);m>=0&&Co.splice(m,1);let x=p.current;window.setTimeout(()=>x?.focus(),0)}},[a]),(0,Jf.createPortal)((0,wt.jsx)("div",{className:`im-modal-shell${u?" im-modal-shell--nested":""}`,onMouseDown:y=>{s&&y.target===y.currentTarget&&Qf(c)&&o()},children:(0,wt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:y=>y.stopPropagation(),children:[l?(0,wt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,wt.jsxs)("header",{className:"im-modal-header",children:[(0,wt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,wt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,wt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,wt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ue=require("react/jsx-runtime");function ep({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,fs.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,fs.useState)(null),u=r.trim(),l=e.some(d=>d.name===u),c=()=>{if(u){if(l&&a!==u){s(u);return}n(u)}};return a?(0,ue.jsx)(Te,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,ue.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,ue.jsxs)(Te,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!u,onClick:c,children:"\u4FDD\u5B58"})]}),children:[(0,ue.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&c()}}),(0,ue.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,ue.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,ue.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,ue.jsx)("span",{className:"im-pick-name",children:d.name}),(0,ue.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function tp({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,ue.jsx)(Te,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,ue.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,ue.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,ue.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,ue.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,ue.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var zv=[["\u753B\u5E03","\u53F3\u952E\u62D6\u62FD\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u5F39\u83DC\u5355 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8"],["\u8282\u70B9","\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C/\u6574\u7406/\u8FDE\u7EBF/\u8BBE\u8DEF\u5F84/\u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88"],["\u8FDE\u7EBF","\u56FE\u7247\u2192\u63D0\u793A\u8BCD/\u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u4EC5\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete/Backspace \u5220\u9664\u8FDE\u7EBF"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function np({onClose:e,config:t}){return(0,ue.jsx)(Te,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u62D6\u5165\u56FE\u7247 \xB7 \u53F3\u952E\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u51FA\u83DC\u5355",size:"md",onClose:e,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,ue.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ue.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:zv.map(([n,o])=>(0,ue.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,ue.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,ue.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,ue.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,ue.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var et=require("react");function Ke(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function rp(e,t=.06){let n=Ke(e.width,t,1),o=Ke(e.height,t,1);return{width:n,height:o,x:Ke(e.x,0,1-n),y:Ke(e.y,0,1-o)}}function ip(e,t,n){return{...e,x:Ke(e.x+t,0,1-e.width),y:Ke(e.y+n,0,1-e.height)}}function ap(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let c=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=c,a.height*=c,a.width<.06||a.height<.06){let p=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=p,a.height*=p}a.width=Ke(a.width,.06,1),a.height=Ke(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=Ke(a.width,.06,1),a.height=Ke(a.height,.06,1);return a.x=Ke(a.x,0,1-a.width),a.y=Ke(a.y,0,1-a.height),a}function sp(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ke(e.x+(e.width-r)/2,0,1-r),y:Ke(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function ps(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Rv(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function lp(e,t){let n=Rv(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function ms(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function jt(e){let t=await ms(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function ti(e,t){let n=await ms(e);if(t)return op(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return op(n,r,i,o,o)}async function cp(e,t){let n=await ms(e),{width:o,height:r}=ps(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?Dv(n,o,r):up(n,n.width,n.height,o,r,t.algorithm)}function op(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function Dv(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=dp(o,r,i,a,s,"high"),r=a,i=s}return up(o,r,i,t,n,"high")}function up(e,t,n,o,r,i){return dp(e,t,n,o,r,i).toDataURL("image/png")}function dp(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Re=require("react/jsx-runtime"),fp=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],Tv=["nw","n","ne","e","se","s","sw","w"],gs={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function pp({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,et.useRef)(null),[i,a]=(0,et.useState)(null),[s,u]=(0,et.useState)({x:.08,y:.08,width:.84,height:.84}),[l,c]=(0,et.useState)(null),[d,f]=(0,et.useState)(!1),[p,h]=(0,et.useState)(null),b=(0,et.useRef)(null);(0,et.useEffect)(()=>{let k=!0;return jt(e).then(C=>{k&&(a(C),u(rp({x:.06,y:.06,width:.88,height:.88})))}).catch(C=>{k&&h(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${fe(C)}`)}),()=>{k=!1}},[e]);let y=k=>{c(k),i&&k!==null&&u(C=>sp(C,k,i))},g=(k,C)=>{k.stopPropagation(),k.target.setPointerCapture?.(k.pointerId),b.current={mode:C,startX:k.clientX,startY:k.clientY,base:s}},w=(0,et.useCallback)(k=>{let C=b.current,P=r.current;if(!C||!P)return;let L=P.getBoundingClientRect();if(!L.width||!L.height)return;let D=(k.clientX-C.startX)/L.width,A=(k.clientY-C.startY)/L.height;u(C.mode==="move"?ip(C.base,D,A):ap(C.base,D,A,C.mode,l,i??{width:1,height:1}))},[l,i]),m=()=>{b.current=null},x=async()=>{f(!0),h(null);try{let k=await ti(e,s),C=Math.round(s.width*(i?.width??0)),P=Math.round(s.height*(i?.height??0));await o(k,`\u88C1\u526A ${C}\xD7${P}${l?` \xB7 ${fp.find(L=>L.ratio===l)?.label}`:""}`)}catch(k){h(`\u88C1\u526A\u5931\u8D25\uFF1A${fe(k)}`)}finally{f(!1)}},N=i?Math.round(s.width*i.width):0,S=i?Math.round(s.height*i.height):0;return(0,Re.jsx)(Te,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",N," \xD7 ",S,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${lp(i.width,i.height)}`:"",(0,Re.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||N<8||S<8,onClick:()=>void x(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":"\u88C1\u526A\u6BD4\u4F8B",children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),fp.map(k=>{let C=k.ratio===l;return(0,Re.jsx)("button",{type:"button","aria-pressed":C,className:`im-chip im-chip--sm im-chip--action${C?" is-brand":""}`,onClick:()=>y(k.ratio),children:k.label},k.label)}),(0,Re.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[N," \xD7 ",S,"px"]})]}),(0,Re.jsxs)("div",{ref:r,onPointerMove:w,onPointerUp:m,onPointerCancel:m,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Re.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Re.jsx)("div",{onPointerDown:k=>g(k,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:Tv.map(k=>(0,Re.jsx)("span",{onPointerDown:C=>g(C,k),style:{position:"absolute",left:gs[k].left,top:gs[k].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:gs[k].cursor}},k))})]}),p?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Ve=require("react");function hs(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function bs(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function ys(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:bs(e)*n/2}function mp(e,t,n=.004){if(!hs(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function gp(e,t,n,o){if(!hs(e)||!hs(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let u=Math.ceil(s/r);if(u<=1)return[];let l=Math.min(u,2048),c=[];for(let d=1;d<l;d+=1){let f=d/l;c.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return c}function Ov(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function hp(e){return!Ov(e)}var De=require("react/jsx-runtime"),ni=640;function bp({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Ve.useRef)(null),i=(0,Ve.useRef)(!1),[a,s]=(0,Ve.useState)(null),[u,l]=(0,Ve.useState)(null),[c,d]=(0,Ve.useState)([]),[f,p]=(0,Ve.useState)("paint"),[h,b]=(0,Ve.useState)(.08),[y,g]=(0,Ve.useState)(!1),[w,m]=(0,Ve.useState)(null);(0,Ve.useEffect)(()=>{let A=!0;jt(e).then(v=>{A&&s(v)}).catch(v=>{A&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${fe(v)}`)});let _=new Image;return _.crossOrigin="anonymous",_.onload=()=>{A&&l(_)},_.src=e,()=>{A=!1,l(null)}},[e]);let x=(0,Ve.useMemo)(()=>a?a.width>=a.height?{width:ni,height:Math.round(a.height/a.width*ni)}:{width:Math.round(a.width/a.height*ni),height:ni}:{width:0,height:0},[a]);(0,Ve.useEffect)(()=>{let A=r.current;if(!A||!u||!x.width)return;let _=A.getContext("2d");if(!_||(A.width=x.width,A.height=x.height,_.clearRect(0,0,x.width,x.height),_.drawImage(u,0,0,x.width,x.height),!a))return;let v=ys(h,{width:x.width,height:x.height});_.save(),_.globalAlpha=.55,_.fillStyle="#ffffff",_.strokeStyle="#ffffff",_.lineWidth=v*2,_.lineCap="round",_.lineJoin="round";for(let I of c){I.mode==="erase"?(_.globalCompositeOperation="destination-out",_.strokeStyle="#000",_.fillStyle="#000"):(_.globalCompositeOperation="source-over",_.strokeStyle="#ffffff",_.fillStyle="#ffffff");let E=I.points;if(E.length&&(_.beginPath(),_.arc(E[0].x*x.width,E[0].y*x.height,v,0,Math.PI*2),_.fill(),E.length>1)){_.beginPath(),_.moveTo(E[0].x*x.width,E[0].y*x.height);for(let M of E.slice(1))_.lineTo(M.x*x.width,M.y*x.height);_.stroke()}}_.restore()},[x,c,h,a,u]);let N=A=>{let _=r.current;if(!_)return null;let v=_.getBoundingClientRect();return!v.width||!v.height?null:{x:Math.min(1,Math.max(0,(A.clientX-v.left)/v.width)),y:Math.min(1,Math.max(0,(A.clientY-v.top)/v.height))}},S=A=>{let _=N(A);_&&(A.currentTarget.setPointerCapture?.(A.pointerId),i.current=!0,d(v=>[...v,{mode:f,size:h,points:[_]}]))},k=A=>{if(!i.current)return;let _=N(A);_&&d(v=>{let I=v[v.length-1];if(!I)return v;let E=mp(I.points,_);return E===I.points?v:[...v.slice(0,-1),{...I,points:E}]})},C=()=>{i.current=!1},P=async()=>{if(!u||!a)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let A=document.createElement("canvas");A.width=a.width,A.height=a.height;let _=A.getContext("2d");if(!_)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");_.fillStyle="#ffffff",_.fillRect(0,0,a.width,a.height);let v=ys(h,{width:a.width,height:a.height});_.globalCompositeOperation="destination-out",_.lineWidth=v*2,_.lineCap="round",_.lineJoin="round",_.strokeStyle="#000",_.fillStyle="#000";for(let I of c){if(I.mode!=="paint")continue;let E=gp(I.points[0],I.points[I.points.length-1],v/4,{width:a.width,height:a.height});if(E.length&&(_.beginPath(),_.arc(E[0].x*a.width,E[0].y*a.height,v,0,Math.PI*2),_.fill(),E.length>1)){_.beginPath(),_.moveTo(E[0].x*a.width,E[0].y*a.height);for(let M of E.slice(1))_.lineTo(M.x*a.width,M.y*a.height);_.stroke()}}return A.toDataURL("image/png")},L=async()=>{g(!0),m(null);try{let A=await P();await o(A,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(A){m(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${fe(A)}`)}finally{g(!1)}},D=hp(c);return(0,De.jsx)(Te,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:y||D,onClick:()=>void L(),children:y?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",label:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"},{mode:"erase",label:"\u64E6"}].map(A=>(0,De.jsx)("button",{type:"button","aria-pressed":f===A.mode,className:`im-chip im-chip--sm im-chip--action${f===A.mode?" is-brand":""}`,onClick:()=>p(A.mode),children:A.label},A.mode)),(0,De.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,De.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(h*100),onChange:A=>b(bs(Number(A.target.value)/100)),className:"im-range"}),(0,De.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(h*100),"%"]})]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!c.length,onClick:()=>d([]),children:"\u6E05\u7A7A"}),(0,De.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:c.length?`${c.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,De.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,De.jsx)("canvas",{ref:r,onPointerDown:S,onPointerMove:k,onPointerUp:C,onPointerCancel:C,style:{width:x.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,De.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",a?` \xB7 \u539F\u56FE ${a.width} \xD7 ${a.height}`:""]}),w?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:w}):null]})})}var ge=require("react");function oi(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(2)} \u5143`}function Bv(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(1)}%`}function Wv(e){if(typeof e!="number"||!Number.isFinite(e)||e<=0)return"-";if(e<60)return`${e.toFixed(1)}s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}m${String(n).padStart(2,"0")}s`}function yp(e){return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:oi(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:oi(e.cost)},{label:"\u6210\u529F\u7387",value:`${Bv(e.successRate)}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:Wv(e.avgSeconds)}]}var Qt=require("react"),xp=require("react-dom"),kn=require("react/jsx-runtime");function wp({text:e}){let t=(0,Qt.useRef)(null),n=(0,Qt.useRef)(null),[o,r]=(0,Qt.useState)(null),[i,a]=(0,Qt.useState)(0),s=c=>{let d=t.current;d&&d.scrollHeight>d.clientHeight&&r(c.clientY)},u=c=>{r(d=>d!==null?c.clientY:d)},l=()=>{r(null),a(0)};return(0,Qt.useLayoutEffect)(()=>{if(o!==null&&n.current){let c=n.current.getBoundingClientRect();a(Math.max(8,Math.min(o+16,window.innerHeight-c.height-8)))}},[o,e]),(0,kn.jsxs)(kn.Fragment,{children:[(0,kn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:u,onMouseLeave:l,children:e}),o!==null?(0,xp.createPortal)((0,kn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var ee=require("react/jsx-runtime"),vp=60;function Fv(e){return e.replace(/[\\/][^\\/]+$/,"")}function kp({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,u]=(0,ge.useState)(""),[l,c]=(0,ge.useState)(!1),[d,f]=(0,ge.useState)(0),[p,h]=(0,ge.useState)(!0),[b,y]=(0,ge.useState)(!1),[g,w]=(0,ge.useState)(""),[m,x]=(0,ge.useState)("ledger"),[N,S]=(0,ge.useState)(""),[k,C]=(0,ge.useState)(null),[P,L]=(0,ge.useState)(new Map),[D,A]=(0,ge.useState)(null),[_,v]=(0,ge.useState)({dailyLimit:"",singleRunLimit:""}),[I,E]=(0,ge.useState)(!1),[M,z]=(0,ge.useState)(""),T=(0,ge.useRef)(null),V=(0,ge.useRef)(0),W=(0,ge.useRef)([]),R=(0,ge.useRef)(i),U=(0,ge.useRef)(s);R.current=i,U.current=s;let X=(0,ge.useCallback)(async q=>{let ie=++V.current;h(!0),w("");try{let de=await Ba({limit:vp,offset:0,query:q?.query??R.current,status:q?.status??U.current});if(ie!==V.current)return;let Ce=Array.isArray(de.items)?de.items:[];x(de.source==="ledger"?"ledger":"none"),S(typeof de.ledgerPath=="string"?de.ledgerPath:""),r(Ce),W.current=Ce,c(de.hasMore===!0),f(Number(de.total)||Ce.length)}catch(de){ie===V.current&&w(fe(de))}finally{ie===V.current&&h(!1)}},[]),Z=(0,ge.useCallback)(async()=>{if(b||!l)return;let q=V.current;y(!0);try{let ie=await Ba({limit:vp,offset:W.current.length,query:R.current,status:U.current});if(q!==V.current)return;let de=Array.isArray(ie.items)?ie.items:[];r(Ce=>[...Ce,...de]),W.current=[...W.current,...de],c(ie.hasMore===!0),f(Number(ie.total)||W.current.length)}catch(ie){q===V.current&&w(fe(ie))}finally{q===V.current&&y(!1)}},[l,b]);(0,ge.useEffect)(()=>{X(),Tr().then(C).catch(()=>C(null)),hd().then(q=>L(new Map((q?.images??[]).map(ie=>[ie.id,ie])))).catch(()=>L(new Map))},[X]);let ce=(0,ge.useRef)(!1);(0,ge.useEffect)(()=>{!k?.localBudget||ce.current||v({dailyLimit:k.localBudget.dailyLimit?String(k.localBudget.dailyLimit):"0",singleRunLimit:k.localBudget.singleRunLimit?String(k.localBudget.singleRunLimit):"0"})},[k]);let F=q=>{ce.current=!0,z(""),v(ie=>({...ie,...q}))},$=async()=>{E(!0),z("");let q={dailyLimit:Math.max(0,Number(_.dailyLimit)||0),singleRunLimit:Math.max(0,Number(_.singleRunLimit)||0)};try{await _d(q);let ie=await Tr();C(ie),ce.current=!1,z("\u9884\u7B97\u5DF2\u4FDD\u5B58")}catch(ie){z(`\u4FDD\u5B58\u5931\u8D25\uFF1A${fe(ie)}`)}finally{E(!1)}},Y=600,re=(0,ge.useCallback)(()=>{let q=T.current;q&&q.scrollHeight-q.scrollTop-q.clientHeight<Y&&Z()},[Z]),ae=(0,ge.useMemo)(()=>o.filter(q=>q.status==="error"&&q.inputRefMissing).length,[o]),J=k?yp(k):[],te=k?.bySize.slice(0,3)??[],Q=N||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(Te,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,ee.jsxs)("div",{className:"im-history",children:[(0,ee.jsxs)("div",{className:"im-history-bar",children:[(0,ee.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,ee.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:q=>a(q.target.value),onKeyDown:q=>{q.key==="Enter"&&X()}}),(0,ee.jsx)(ft,{className:"im-history-status",value:s,title:"\u6309\u72B6\u6001\u7B5B\u9009",options:[{value:"",label:"\u5168\u90E8\u72B6\u6001"},{value:"ok",label:"\u6210\u529F"},{value:"error",label:"\u5931\u8D25"}],onChange:q=>{u(q),X({status:q})}}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void X(),children:"\u641C\u7D22"}),(0,ee.jsxs)("div",{className:"im-history-bar-end",children:[ae>0?(0,ee.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[ae," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),J.length?(0,ee.jsxs)("div",{className:"im-history-stats",children:[(0,ee.jsxs)("div",{className:"im-history-stat-row",children:[(0,ee.jsx)("div",{className:"im-history-stat-grid",children:J.map(q=>(0,ee.jsxs)("div",{className:"im-history-stat",children:[(0,ee.jsx)("div",{className:"im-history-stat-label",children:q.label}),(0,ee.jsx)("div",{className:"im-history-stat-value",children:q.value})]},q.label))}),(0,ee.jsxs)("div",{className:"im-history-budget",children:[(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u65E5\u9884\u7B97"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:_.dailyLimit,title:"\u5F53\u65E5\u7D2F\u8BA1\u8D39\u7528\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4",onChange:q=>F({dailyLimit:q.target.value})})]}),(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u5355\u6B21\u4E0A\u9650"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:_.singleRunLimit,title:"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650",onChange:q=>F({singleRunLimit:q.target.value})})]}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:I||p,onClick:()=>void $(),children:I?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u9884\u7B97"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void Tr().then(C).catch(()=>{}),children:"\u5237\u65B0"}),M?(0,ee.jsx)("span",{className:"im-history-budget-tip",children:M}):null]})]}),te.length?(0,ee.jsxs)("div",{className:"im-history-sizes",children:[(0,ee.jsx)("span",{className:"im-history-sizes-label",children:"\u6309\u5C3A\u5BF8"}),te.map(q=>(0,ee.jsxs)("span",{className:"im-history-sizes-row",children:[q.size," ",(0,ee.jsxs)("span",{className:"im-history-sizes-label",children:["\xD7",q.count]})," \xB7 ",oi(q.cost)]},q.size))]}):null]}):null,(0,ee.jsxs)("div",{ref:T,className:"im-history-list",onScroll:re,"data-testid":"history-list",children:[g?(0,ee.jsx)("div",{className:"im-history-error",children:g}):null,p?(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("ul",{className:"im-history-rows",children:o.map((q,ie)=>{let de=q.assetId?P.get(q.assetId):void 0,Ce=!!de;return(0,ee.jsxs)("li",{className:"im-history-row",children:[(0,ee.jsx)("div",{className:"im-history-thumb",children:q.url?(0,ee.jsx)("img",{src:q.url,alt:q.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>A({url:q.url,path:q.path})}):(0,ee.jsx)("span",{className:"im-history-thumb-empty",children:q.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,ee.jsxs)("div",{className:"im-history-main",children:[(0,ee.jsx)(wp,{text:q.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,ee.jsxs)("p",{className:"im-history-meta",children:[q.time||"-"," \xB7 ",q.quality||"-"," \xB7 ",q.size||"-"]}),q.inputRefs.length?(0,ee.jsx)("div",{className:"im-history-refs",children:q.inputRefs.map(Pe=>(0,ee.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,ee.jsx)("img",{src:Pe.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>A({url:Pe.url,path:Pe.path})})},Pe.id))}):null,q.inputRefMissing?(0,ee.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,ee.jsxs)("div",{className:"im-history-actions",children:[(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.prompt,onClick:()=>void navigator.clipboard.writeText(q.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.path,onClick:()=>void $r(Fv(q.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Ce,title:Ce?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{de&&t([de])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${q.time}-${q.output}-${ie}`)})}),(0,ee.jsx)("div",{className:"im-history-pager",children:b?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":l?(0,ee.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void Z(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):m==="none"?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,ee.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,ee.jsx)("code",{children:Q}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),D?(0,ee.jsx)(ei,{imageUrl:D.url,...D.path?{copyPath:D.path}:{},onClose:()=>A(null)}):null]})}var it=require("react");var Vv=8,Xv=8,Np=[{label:"2 \xD7 2",rows:2,cols:2},{label:"2 \xD7 3",rows:2,cols:3},{label:"3 \xD7 2",rows:3,cols:2},{label:"3 \xD7 3",rows:3,cols:3},{label:"4 \xD7 4",rows:4,cols:4}];var Gv=40,qv=/[\\/:*?"<>|]/g,Uv="image";function Sp(e,t){let n=Math.round(e);return Number.isFinite(n)?Math.min(t,Math.max(1,n)):1}function ri(e,t){return{rows:Sp(e,Vv),cols:Sp(t,Xv)}}function Yv(e){let{rows:t,cols:n}=ri(e.rows,e.cols),o=[];for(let r=0;r<t;r+=1){let i=r/t,a=r===t-1?1-i:1/t;for(let s=0;s<n;s+=1){let u=s/n,l=s===n-1?1-u:1/n;o.push({x:u,y:i,width:l,height:a})}}return o}function Mp(e){let{rows:t,cols:n}=ri(e.rows,e.cols);return t*n}function Zv(e){let t=e.lastIndexOf(".");if(t<=0)return e;let n=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>n?e.slice(0,t):e}function Kv(e){let t=e.trim(),n=Array.from(t).slice(0,Gv).join("");return n.length>0?n:Uv}function Cp(e,t,n,o,r){let i=Kv(Zv(e).replace(qv,"_")),a=Number.isFinite(t)?Math.max(1,Math.round(t)):1;return`${i}-${o}x${r}-${a}.png`}async function Ep(e,t){return Promise.all(Yv(t).map(n=>ti(e,n)))}var be=require("react/jsx-runtime"),jv="52vh";function _p({id:e,label:t,value:n,max:o,onChange:r}){return(0,be.jsxs)("label",{className:"im-split-axis",htmlFor:e,children:[(0,be.jsx)("span",{className:"im-split-axis-label",children:t}),(0,be.jsx)("input",{id:e,className:"im-field im-split-axis-input",inputMode:"numeric",value:n,placeholder:"1",onChange:i=>r(i.target.value),onBlur:()=>{let i=Number(n);r(String(Number.isFinite(i)?Math.min(o,Math.max(1,Math.round(i))):1))}})]})}function Ip({src:e,name:t,onClose:n,onConfirm:o}){let[r,i]=(0,it.useState)(null),[a,s]=(0,it.useState)("2"),[u,l]=(0,it.useState)("2"),[c,d]=(0,it.useState)(!1),[f,p]=(0,it.useState)(null);(0,it.useEffect)(()=>{let x=!0;return jt(e).then(N=>{x&&i(N)}).catch(N=>{x&&p(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${fe(N)}`)}),()=>{x=!1}},[e]);let h=(0,it.useMemo)(()=>ri(Number(u)||1,Number(a)||1),[u,a]),b=Mp(h),y=b>=2,g=(0,it.useMemo)(()=>r?{w:Math.floor(r.width/h.cols),h:Math.floor(r.height/h.rows)}:{w:0,h:0},[r,h]),w=(0,it.useMemo)(()=>{let x=(t??"image").replace(/\.[^.]+$/,"");return Array.from({length:Math.min(3,b)},(N,S)=>Cp(x,S+1,b,h.rows,h.cols))},[t,b,h]),m=async()=>{if(y){d(!0),p(null);try{let x=await Ep(e,h);await o(x.map((N,S)=>({dataUrl:N,note:`\u5207\u5206 ${S+1}/${x.length}`})))}catch(x){p(`\u5207\u5206\u5931\u8D25\uFF1A${fe(x)}`)}finally{d(!1)}}};return(0,be.jsx)(Te,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("p",{className:"im-modal-note",children:r?`\u539F\u56FE ${r.width} \xD7 ${r.height}`:"\u6B63\u5728\u8BFB\u53D6\u539F\u56FE\u5C3A\u5BF8\u2026"}),(0,be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,be.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!y,onClick:()=>void m(),children:c?"\u5904\u7406\u4E2D\u2026":y?`\u786E\u8BA4\u5207\u5206\uFF08${b} \u5F20\uFF09`:"\u81F3\u5C11 2 \u5F20"})]}),children:(0,be.jsxs)("div",{className:"im-split",children:[(0,be.jsx)("div",{className:"im-split-presets",children:Np.map(x=>(0,be.jsx)("button",{type:"button",className:`im-chip im-chip--sm im-chip--action${x.cols===h.cols&&x.rows===h.rows?" is-brand":""}`,onClick:()=>{s(String(x.cols)),l(String(x.rows))},children:x.label},x.label))}),(0,be.jsxs)("div",{className:"im-split-controls",children:[(0,be.jsx)(_p,{id:"split-cols",label:"\u5217",value:a,max:8,onChange:s}),(0,be.jsx)(_p,{id:"split-rows",label:"\u884C",value:u,max:8,onChange:l}),(0,be.jsxs)("span",{className:"im-split-summary",children:[b," \u5F20",g.w>0?` \xB7 \u6BCF\u5F20 ${g.w} \xD7 ${g.h}`:""]})]}),(0,be.jsx)("div",{className:"im-split-stage-wrap",children:(0,be.jsxs)("div",{className:"im-split-stage",style:{width:r&&r.height>0?`min(100%, calc(${jv} * ${(r.width/r.height).toFixed(4)}))`:"100%",aspectRatio:r&&r.height>0?`${r.width} / ${r.height}`:"1 / 1",backgroundImage:`url(${e})`},children:[Array.from({length:h.cols-1},(x,N)=>(0,be.jsx)("span",{className:"im-split-line",style:{left:`${(N+1)/h.cols*100}%`,top:0,bottom:0,width:2}},`v${N}`)),Array.from({length:h.rows-1},(x,N)=>(0,be.jsx)("span",{className:"im-split-line",style:{top:`${(N+1)/h.rows*100}%`,left:0,right:0,height:2}},`h${N}`))]})}),y?(0,be.jsxs)("div",{className:"im-split-names",children:[w.map(x=>(0,be.jsx)("span",{className:"im-split-name",children:x},x)),b>w.length?(0,be.jsxs)("span",{className:"im-muted",children:["\u2026\u7B49 ",b," \u4E2A"]}):null]}):(0,be.jsx)("p",{className:"im-split-note",children:"1 \xD7 1 \u7B49\u4E8E\u4E0D\u5207\u3002\u628A\u884C\u6216\u5217\u8C03\u5927\u4E00\u70B9\u3002"}),(0,be.jsx)("p",{className:"im-split-note",children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),f?(0,be.jsx)("p",{className:"im-split-error",role:"status",children:f}):null]})})}var vt=require("react");var Ie=require("react/jsx-runtime"),Pp=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],zp=[1024,1536,2048,3072,4096];function Dp({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,vt.useState)(null),[i,a]=(0,vt.useState)(2048),[s,u]=(0,vt.useState)("high"),[l,c]=(0,vt.useState)(!1),[d,f]=(0,vt.useState)(null);(0,vt.useEffect)(()=>{let g=!0;return jt(e).then(w=>{if(!g)return;r(w);let m=Math.max(w.width,w.height),x=zp.find(N=>N>m)??4096;a(x)}).catch(w=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${fe(w)}`)}),()=>{g=!1}},[e]);let p=(0,vt.useMemo)(()=>o?ps(o.width,o.height,i):{width:0,height:0},[o,i]),h=o&&o.width>0?p.width/o.width:0,b=!!o&&p.width<o.width,y=async()=>{c(!0),f(null);try{let g=await cp(e,{targetLongEdge:i,algorithm:s});await n(g,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${Pp.find(w=>w.value===s)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${fe(g)}`)}finally{c(!1)}};return(0,Ie.jsx)(Te,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||p.width<8||p.height<8,onClick:()=>void y(),children:l?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ie.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),zp.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(g),children:g},g))]}),(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),Pp.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g.value===s,className:`im-btn-sm ${g.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>u(g.value),children:g.label},g.value))]}),(0,Ie.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Ie.jsxs)(Ie.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Ie.jsxs)("b",{style:{color:b?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),h?` \xB7 ${h.toFixed(2)}\xD7`:"",b?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Ie.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Ie.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var xs=require("react/jsx-runtime"),ii=2e4;function Ap({guides:e}){return e.length?(0,xs.jsx)(Gu,{children:e.map(t=>(0,xs.jsx)("div",{className:"snap-guide","data-axis":t.axis,"data-testid":"snap-guide",style:t.axis==="x"?{left:t.position,top:-ii/2,width:1,height:ii}:{left:-ii/2,top:t.position,width:ii,height:1}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var jn=require("react");var ye=require("react/jsx-runtime");function Tp({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,jn.useState)(""),i=(0,jn.useRef)(null),a=(0,jn.useMemo)(()=>Rd(o),[o]),s=o.trim().length>0,u=a.cards,l=a.issues??[];return(0,ye.jsx)(Te,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002",size:"lg",onClose:t,initialFocusRef:i,footer:(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ye.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!u.length||l.length>0,onClick:()=>n(u),children:["\u786E\u8BA4\u5EFA\u5361\uFF08",u.length,"\uFF09"]})]}),children:(0,ye.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,ye.jsx)("textarea",{ref:i,value:o,onChange:c=>r(c.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),(0,ye.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:s?(0,ye.jsxs)(ye.Fragment,{children:[(0,ye.jsxs)("div",{className:"im-import-summary",children:[(0,ye.jsxs)("span",{children:["\u8BC6\u522B ",u.length," \u5F20\u5361\u7247"]}),l.length?(0,ye.jsxs)("span",{className:"im-import-summary-error",children:["\u53D1\u73B0 ",l.length," \u4E2A\u95EE\u9898"]}):null]}),u.map((c,d)=>{let f=qa(c.ratio??"1:1",e);return(0,ye.jsxs)("article",{className:"im-import-card",children:[(0,ye.jsxs)("div",{className:"im-import-card-meta",children:[(0,ye.jsx)("strong",{children:c.title||`\u7B2C ${d+1} \u5F20`}),(0,ye.jsx)("span",{children:c.ratio?c.ratio:"\u9ED8\u8BA4\u6BD4\u4F8B"}),(0,ye.jsx)("span",{children:f.value}),f.fallback?(0,ye.jsx)("span",{className:"im-import-card-fallback",children:"\u5C3A\u5BF8\u56DE\u9000"}):null]}),(0,ye.jsx)("p",{className:"im-import-card-text",title:c.prompt||"",children:c.prompt||"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09"})]},`${d}-${c.title??""}`)}),l.map((c,d)=>(0,ye.jsx)("div",{className:"im-import-issue",children:c.message},`issue-${d}`))]}):(0,ye.jsx)("div",{className:"im-import-summary",children:"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8"})}),(0,ye.jsxs)("p",{className:"im-field-hint",children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,ye.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,ye.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var Nn=require("react");var oe=require("react/jsx-runtime");function Sn({id:e,label:t,hint:n,action:o,children:r}){let i=`${e}-message`;return(0,oe.jsxs)("div",{className:"im-field-row",children:[(0,oe.jsx)("label",{className:"im-field-label",htmlFor:e,children:t}),(0,oe.jsxs)("div",{className:"im-field-main",children:[(0,oe.jsxs)("div",{className:"im-field-control",children:[r,o]}),n?(0,oe.jsx)("p",{className:"im-field-hint",id:i,children:n}):null]})]})}function Op({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",a=i?"plugin":e?.profile??"",s=r?.model||e?.model||"",u=Number(e?.budget??0),[l,c]=(0,Nn.useState)({source:a||"plugin",model:s,baseUrl:r?.baseUrl??"",apiKey:"",imagoraRoot:e?.imagoraRoot??"",outputDir:e?.outputDirOverride??"",budget:u?String(u):""}),[d,f]=(0,Nn.useState)(!1),[p,h]=(0,Nn.useState)(!1),[b,y]=(0,Nn.useState)(null),[g,w]=(0,Nn.useState)([]),[m,x]=(0,Nn.useState)(!1),N=R=>c(U=>({...U,...R})),S=e?.profiles??[],k=l.source==="plugin",C=k||!!r?.baseUrl,P=[{value:"plugin",label:"\u63D2\u4EF6\u5185\u914D\u7F6E"},...S.map(R=>({value:R.name,label:R.label||R.name}))],L=i&&!k,D=k?l.model?[{value:l.model,label:l.model}]:[]:(e?.models??[]).map(R=>({value:R.id,label:R.label||R.id})),A=(()=>{let R=Number(l.budget.trim());return Number.isFinite(R)&&R>0?R:0})(),_={source:l.source!==(a||"plugin"),model:l.model.trim()!==""&&l.model.trim()!==s,baseUrl:l.baseUrl.trim()!==(r?.baseUrl??""),apiKey:l.apiKey.trim()!=="",imagoraRoot:l.imagoraRoot.trim()!==(e?.imagoraRoot??""),outputDir:l.outputDir.trim()!==(e?.outputDirOverride??""),budget:A!==u},v=Object.values(_).some(Boolean),I=R=>{N({source:R,model:""})},E=async()=>{f(!0),y(null);try{let R=await Ed({baseUrl:l.baseUrl.trim(),apiKey:l.apiKey.trim()});w(R.models??[]),y(R.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${R.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(R){w([]),y(`\u8FDE\u4E0D\u901A\uFF1A${fe(R)}`)}finally{f(!1)}},M=async R=>{f(!0);try{let U=await Cd({title:R==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:R==="root"?l.imagoraRoot.trim():l.outputDir.trim()||e?.defaultOutputDir||""});if(!U.ok){if(U.reason==="cancelled")return;o(U.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${U.reason||"\u672A\u77E5\u539F\u56E0"}`);return}N(R==="root"?{imagoraRoot:U.path||""}:{outputDir:U.path||""})}finally{f(!1)}},z=async()=>{f(!0);try{let R=null;!L&&!k&&_.source&&(R=await Lr(l.source)),!L&&!k&&_.model&&l.model.trim()&&(R=await Or(l.model.trim()));let U=k||!!l.baseUrl.trim()||!!l.apiKey.trim(),X=_.baseUrl||_.apiKey||k&&l.model.trim()!==""&&_.model;U&&X&&(R=await Xa({baseUrl:l.baseUrl.trim(),model:l.model.trim(),apiKey:l.apiKey.trim()})),_.imagoraRoot&&(R=await Md(l.imagoraRoot.trim())),_.outputDir&&(R=await Sd(l.outputDir.trim())),_.budget&&(R=await Nd(A)),R&&n(R),c(Z=>({...Z,apiKey:"",budget:A?String(A):""})),h(!0),window.setTimeout(()=>h(!1),2e3),o("\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548")}catch(R){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${fe(R)}`)}finally{f(!1)}},T=async()=>{f(!0);try{let R=await Xa({reset:!0});n(R),x(!1),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E")}catch(R){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${fe(R)}`)}finally{f(!1)}},V=i?"\u63D2\u4EF6\u5185\u914D\u7F6E":e?.profileLabel||e?.profile||"\u2014",W=r?.apiKeyConfigured?"\u5BC6\u94A5\u5DF2\u914D\u7F6E":"\u5BC6\u94A5\u672A\u914D\u7F6E";return(0,oe.jsx)(Te,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\uFF1B\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002",size:"lg",onClose:t,footer:(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)("p",{className:"im-modal-note",children:p?"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548":v?"\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8":"\u6240\u6709\u6539\u52A8\u5DF2\u4FDD\u5B58"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:d,onClick:t,children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!v,onClick:()=>void z(),children:d?"\u4FDD\u5B58\u4E2D\u2026":p?"\u2713 \u5DF2\u4FDD\u5B58":"\u4FDD\u5B58"})]}),children:(0,oe.jsxs)("div",{className:"im-settings",children:[(0,oe.jsxs)("p",{className:"im-settings-status",children:["\u5F53\u524D\u751F\u6548\uFF1A",(0,oe.jsx)("b",{children:V})," \xB7 ",e?.modelLabel||e?.model||"\u2014"," \xB7 ",W,L?(0,oe.jsx)("span",{className:"im-chip is-brand im-settings-chip",children:"\u88AB\u63D2\u4EF6\u5185\u914D\u7F6E\u63A5\u7BA1"}):null]}),(0,oe.jsxs)("section",{className:"im-settings-group",children:[(0,oe.jsx)("h3",{className:"im-settings-group-title",children:"\u7528\u54EA\u5957\u63A5\u53E3"}),(0,oe.jsx)(Sn,{id:"imagora-profile",label:"\u914D\u7F6E\u6765\u6E90",hint:k?"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\u3002":"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u4EF7\u76EE\u8868\u3002",children:(0,oe.jsx)(ft,{id:"imagora-profile",className:"is-block",options:P,value:l.source,searchable:"auto",onChange:I,title:"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"})}),(0,oe.jsx)(Sn,{id:"imagora-model-select",label:"\u9ED8\u8BA4\u6A21\u578B",hint:k?"\u586B\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\u3002":"\u6E05\u5355\u5916\u7684 id \u4E5F\u53EF\u4EE5\u624B\u586B\u3002",children:(0,oe.jsx)(ft,{id:"imagora-model-select",className:"is-block",options:D,value:l.model,searchable:!0,allowCustom:!0,emptyLabel:"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id",onChange:R=>N({model:R}),onCreateCustom:R=>N({model:R}),title:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare"})}),C?(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(Sn,{id:"imagora-provider-base-url",label:"\u63A5\u53E3\u5730\u5740",hint:"OpenAI \u517C\u5BB9\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002",children:(0,oe.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:l.baseUrl,placeholder:"https://api.example.com/v1",disabled:d,title:"\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90",onChange:R=>N({baseUrl:R.target.value})})}),(0,oe.jsx)(Sn,{id:"imagora-provider-api-key",label:"API Key",hint:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF1B\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\u3002":"\u53EA\u5B58\u5728\u672C\u673A settings.json\u3002",action:(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:d||!l.baseUrl.trim(),onClick:()=>void E(),title:l.baseUrl.trim()?"\u53EA\u8BFB\u4E00\u6B21\u6A21\u578B\u6E05\u5355\uFF0C\u4E0D\u751F\u6210\u56FE\u3001\u4E0D\u82B1\u94B1":"\u5148\u586B\u63A5\u53E3\u5730\u5740",children:"\u6D4B\u8BD5\u8FDE\u901A"}),children:(0,oe.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:l.apiKey,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:d,onChange:R=>N({apiKey:R.target.value})})})]}):(0,oe.jsx)("p",{className:"im-settings-hint-line",children:"\u8FD9\u4E00\u680F\u7684\u5730\u5740\u4E0E\u5BC6\u94A5\u6CBF\u7528\u672C\u673A Imagora \u7684\u90A3\u4E00\u4EFD\u3002\u8981\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\uFF0C\u628A\u4E0A\u9762\u7684\u300C\u914D\u7F6E\u6765\u6E90\u300D\u6539\u6210 \u300C\u63D2\u4EF6\u5185\u914D\u7F6E\u300D\u3002"}),b?(0,oe.jsx)("p",{className:"im-field-hint im-settings-probe",role:"status",children:b}):null,g.length?(0,oe.jsxs)("div",{className:"im-settings-chips",children:[g.slice(0,24).map(R=>(0,oe.jsx)("button",{type:"button",className:`im-chip im-chip--action${R===l.model?" is-brand":""}`,onClick:()=>N({model:R}),children:R},R)),g.length>24?(0,oe.jsxs)("span",{className:"im-muted",children:["\u2026\u8FD8\u6709 ",g.length-24," \u4E2A"]}):null]}):null,i?m?(0,oe.jsxs)("div",{className:"im-settings-danger",children:[(0,oe.jsx)("p",{className:"im-settings-danger-text",children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF1F\u4E4B\u540E\u56DE\u5230\u672C\u673A Imagora \u7684\u6765\u6E90\u3002"}),(0,oe.jsxs)("div",{className:"im-settings-danger-actions",children:[(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>x(!1),children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",disabled:d,onClick:()=>void T(),children:"\u786E\u8BA4\u6E05\u7A7A"})]})]}):(0,oe.jsx)("button",{type:"button",className:"im-settings-danger-link",disabled:d,onClick:()=>x(!0),children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E"}):null]}),(0,oe.jsxs)("section",{className:"im-settings-group",children:[(0,oe.jsx)("h3",{className:"im-settings-group-title",children:"\u6587\u4EF6\u843D\u5728\u54EA"}),(0,oe.jsx)(Sn,{id:"imagora-root",label:"Imagora \u76EE\u5F55",hint:"\u6307\u5411\u540E\u5DE5\u4F5C\u6D41\u4E0E\u751F\u6210\u5386\u53F2\u76F4\u63A5\u8BFB\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002\u7559\u7A7A = \u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002",action:(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:d,onClick:()=>void M("root"),children:"\u9009\u62E9\u2026"}),children:(0,oe.jsx)("input",{id:"imagora-root",className:"im-field",value:l.imagoraRoot,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:d,onChange:R=>N({imagoraRoot:R.target.value})})}),(0,oe.jsx)(Sn,{id:"imagora-output-override",label:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",hint:`\u5F53\u524D\u751F\u6548\uFF1A${e?.defaultOutputDir||"\uFF08\u672A\u786E\u5B9A\uFF09"}`,action:(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:d,onClick:()=>void M("output"),children:"\u9009\u62E9\u2026"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:d||!e?.defaultOutputDir,onClick:()=>void $r(e?.defaultOutputDir??""),children:"\u6253\u5F00"})]}),children:(0,oe.jsx)("input",{id:"imagora-output-override",className:"im-field",value:l.outputDir,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55",disabled:d,onChange:R=>N({outputDir:R.target.value})})})]}),(0,oe.jsxs)("section",{className:"im-settings-group",children:[(0,oe.jsx)("h3",{className:"im-settings-group-title",children:"\u82B1\u94B1\u4E0A\u9650"}),(0,oe.jsx)(Sn,{id:"imagora-budget",label:"\u672C\u753B\u5E03\u7D2F\u8BA1\u4E0A\u9650",hint:"\u82B1\u5230\u4E0A\u9650\u5373\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF09\u3002",action:(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>o("\u65E5\u9884\u7B97 / \u5355\u6B21\u4E0A\u9650\u5728\u300C\u751F\u6210\u5386\u53F2\u300D\u9876\u90E8\u7684\u6210\u672C\u6761\u91CC\u8BBE"),title:"\u65E5\u9884\u7B97 / \u5355\u6B21\u4E0A\u9650\u662F\u53E6\u4E00\u5C42\uFF08\u8D85\u9650\u9700\u786E\u8BA4\uFF09\uFF0C\u5728\u751F\u6210\u5386\u53F2\u7684\u6210\u672C\u6761\u91CC\u8BBE",children:"\u65E5\u9884\u7B97\u5728\u54EA\u8BBE"}),children:(0,oe.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:l.budget,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",disabled:d,onChange:R=>N({budget:R.target.value})})})]})]})})}var Qn=require("react");function Lp({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i,record:a}){let s=(0,Qn.useCallback)(async(f,p)=>{let h=f.filter(Dr);if(!h.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}a?.();for(let[b,y]of h.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let g=await Ar(y,y.name||`pasted-${Date.now()}.png`),w=xn({...g,relPath:g.name,createdAt:g.createdAt??new Date().toISOString()},{x:p.x+b*172,y:p.y});t(m=>[...m,w]),o(`\u5DF2\u6DFB\u52A0 ${g.name}`)}catch(g){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${fe(g)}`)}},[t,o,r,a]),u=(0,Qn.useCallback)((f,p,h)=>{let b=p?h(p):n();s(f,b)},[s,n]),l=(0,Qn.useCallback)(f=>{let p=document.createElement("input");p.type="file",p.accept="image/*",p.onchange=async()=>{let h=p.files?.[0];if(h)try{let b=await Ar(h,h.name);t(y=>y.map(g=>g.id===f&&g.type==="image"?{...g,data:{...g.data,registryId:b.id,name:b.name,url:b.url,size:b.size,ext:b.ext,absPath:b.absPath,missing:!1}}:g)),o(`\u5DF2\u66FF\u6362\u4E3A ${b.name}`)}catch(b){o(`\u66FF\u6362\u5931\u8D25\uFF1A${fe(b)}`)}},p.click()},[t,o]),c=(0,Qn.useCallback)(f=>{let p=e.current.find(h=>h.id===f);!p||p.type!=="image"||!p.data.url||i({url:p.data.url,name:p.data.name,path:p.data.absPath})},[e,i]),d=(0,Qn.useCallback)(async(f,p,h)=>{let b=await fetch(f).then(x=>x.blob()),y=p.endsWith(".png")?p:`${p}.png`,g=await Ar(b,y),w=h??n(),m=xn({...g,relPath:g.name,createdAt:g.createdAt??new Date().toISOString()},w);return t(x=>[...x,m]),o(`\u5DF2\u6DFB\u52A0 ${g.name}`),g},[t,o,n]);return{addImages:s,dropFiles:u,replaceImage:l,openPreview:c,addDataUrl:d}}function $p(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var kt=require("react");function Hp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let u=(0,kt.useCallback)(async b=>{try{return await Wa(b)}catch(y){let g=y.body?.overBudget;if(!g)throw y;let w=g.reason||fe(y);if(!window.confirm(`${w}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`))throw new Error(`\u5DF2\u6309\u9884\u7B97\u53D6\u6D88\uFF1A${w}`);return r(`\u8D85\u9884\u7B97\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A${w}`),await Wa({...b,allowOverBudget:!0})}},[r]),l=(0,kt.useCallback)((b,y)=>{let w=(Array.isArray(y.results)?y.results:[]).filter(k=>k.status==="ok"&&k.assetId&&k.url),m=e.current.find(k=>k.id===b&&k.type==="prompt"),x=[];if(m&&m.type==="prompt"){let k=He(m).height;w.forEach((C,P)=>{x.push(xn({id:String(C.assetId),relPath:C.name??"result.png",name:C.name??"result.png",url:String(C.url),size:C.bytes??0,ext:String(C.ext??"png"),absPath:C.absPath??"",createdAt:new Date().toISOString()},{x:m.position.x+P*172,y:m.position.y+k+56}))})}n(k=>{let C=new Set(k.map(D=>D.id)),P=x.filter(D=>!C.has(D.id)),L=P.length?[...k,...P]:k;return rt(L,b,{status:y.status==="done"?"done":y.status==="cancelled"?"idle":"failed",resultCount:w.length,message:y.error??void 0,startedAtMs:void 0,cancelRequested:!1,taskId:void 0})}),x.length&&o(k=>{let C=x.map(P=>({id:`${b}->${P.id}`,source:b,target:P.id,animated:!0})).filter(P=>!k.some(L=>L.id===P.id));return C.length?[...k,...C]:k}),a.current.delete(b);let N=s.current.get(b);N&&window.clearTimeout(N),s.current.delete(b);let S=y.totalCost??0;S>0&&n(k=>{let C=k.find(L=>L.id===b),P=Number(C?.data?.cost??0);return rt(k,b,{cost:P+S})}),r(y.status==="done"?`\u5B8C\u6210 \xB7 ${w.length} \u5F20${S?` \xB7 ${S.toFixed(2)} \u5143`:""}`:`${y.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${y.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),c=(0,kt.useCallback)((b,y)=>{let g=async()=>{try{let w=await yd(y);if(w.status==="queued")n(m=>rt(m,b,{status:"queued"}));else if(w.status==="running")n(m=>rt(m,b,{status:"running",startedAtMs:w.startedAt??Date.now(),cancelRequested:w.cancelRequested}));else{l(b,w);return}}catch(w){if(w.status===404){let m=s.current.get(b);m!==void 0&&window.clearTimeout(m),s.current.delete(b),n(x=>rt(x,b,{status:"failed",message:"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF08\u5BBF\u4E3B\u91CD\u542F\u6216\u4EFB\u52A1\u8FC7\u671F\uFF09\uFF0C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF",startedAtMs:void 0,cancelRequested:!1})),r("\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF1A\u505C\u6B62\u8F6E\u8BE2");return}r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${fe(w)}`)}s.current.set(b,window.setTimeout(g,1200))};g()},[l,r,n,s]),d=(0,kt.useCallback)(async b=>{let y=e.current.find(w=>w.id===b);if(!y||y.type!=="prompt")return;if(!(y.data.prompt??"").trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let g=fd(e.current,t.current,b,y.data.prompt);if(g.mode==="invalid"){let w=g.unknown.map(m=>`@${m}`).join("\u3001");n(m=>rt(m,b,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${w}`}));return}try{let w=await u({prompt:y.data.prompt,size:y.data.size,quality:y.data.quality,refIds:g.images.map(m=>m.type==="image"?m.data.registryId:"").filter(Boolean),outputDir:y.data.outputDir,spent:e.current.reduce((m,x)=>m+Number(x.data?.cost??0),0),mask:g.images.map(m=>m.type==="image"?m.data.maskDataUrl:"").find(Boolean)||""});a.current.set(b,w.taskId),n(m=>rt(m,b,{status:"queued",taskId:w.taskId,startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${g.images.length} \u5F20 \xB7 ${y.data.size}`),c(b,w.taskId)}catch(w){let m=fe(w);n(x=>rt(x,b,{status:"failed",message:m})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${m}`)}},[e,t,n,i,r,c,a]),f=(0,kt.useCallback)(async b=>{let y=a.current.get(b);if(n(g=>rt(g,b,{cancelRequested:!0})),!!y)try{await xd(y)}catch(g){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${fe(g)}`)}},[n,r,a]),p=(0,kt.useCallback)(b=>{for(let y of b)d(y)},[d]),h=(0,kt.useCallback)(b=>{for(let{nodeId:y,taskId:g}of ld(b))a.current.set(y,g),c(y,g)},[a,c]);return(0,kt.useEffect)(()=>{let b=s.current;return()=>{for(let y of b.values())window.clearTimeout(y);b.clear()}},[s]),{runPrompt:d,cancelPrompt:f,runMany:p,resumeTasks:h}}var at=require("react");function Bp(e){let[t,n]=(0,at.useState)(null),[o,r]=(0,at.useState)([]),i=(0,at.useRef)(null),a=(0,at.useCallback)(c=>{let d={...c,profiles:Array.isArray(c?.profiles)?c.profiles:[],models:Array.isArray(c?.models)?c.models:[],sizes:Array.isArray(c?.sizes)?c.sizes:[],qualities:Array.isArray(c?.qualities)?c.qualities:[],issues:Array.isArray(c?.issues)?c.issues:[]};n(d),i.current=d,r(d.issues)},[]),s=(0,at.useCallback)(async()=>{try{a(await gd())}catch(c){r([fe(c)])}},[a]);(0,at.useEffect)(()=>{s()},[s]);let u=(0,at.useCallback)(async c=>{try{let d=await Lr(c);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${fe(d)}`)}},[a,e]),l=(0,at.useCallback)(async c=>{try{let d=await Or(c);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${fe(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:u,switchModel:l,replaceConfig:a}}var Mn=require("react");function Eo(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Wp(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(Eo(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(Eo(r)),Eo(i)):null},restore(r){let i=o.shift();return i?(n.push(Eo(r)),Eo(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Fp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,Mn.useRef)(Wp(50)),a=(0,Mn.useCallback)(f=>{i.current.record({nodes:e.current,edges:t.current},f)},[e,t]),s=(0,Mn.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),u=(0,Mn.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),l=(0,Mn.useCallback)(()=>i.current.clear(),[]),c=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:u,clear:l,canUndo:c,canRestore:d}}var Vp=require("react");function Qv(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Xp(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:u,onClosePreview:l,hasPreview:c}=e;(0,Vp.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&c){l();return}if(Qv(f.target))return;let p=f.ctrlKey||f.metaKey,h=f.key.toLowerCase();if(p&&h==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(y=>y.some(g=>!g.selected)?y.map(g=>({...g,selected:!0})):y);return}if(p&&h==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(p&&h==="y"){f.preventDefault(),s();return}if(p&&h==="s"){f.preventDefault(),u();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,u,l,c,e])}var St=require("react");var Jv=2500;function Gp({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:u,closeDialog:l,defaultsRef:c,crashedRef:d,onRestored:f}){let p=(0,St.useRef)(null),h=(0,St.useRef)(()=>{});h.current=()=>{p.current&&(window.clearTimeout(p.current),p.current=null),!d.current&&n.current.length&&Va(n.current,o.current).catch(()=>{})},(0,St.useEffect)(()=>{e.length&&(p.current&&window.clearTimeout(p.current),p.current=window.setTimeout(()=>{p.current=null,!d.current&&Va(n.current,o.current).catch(()=>{})},Jv))},[e,t,n,o,d]),(0,St.useEffect)(()=>{let g=()=>{document.visibilityState==="hidden"&&h.current()},w=()=>h.current();return document.addEventListener("visibilitychange",g),window.addEventListener("pagehide",w),()=>{document.removeEventListener("visibilitychange",g),window.removeEventListener("pagehide",w),h.current()}},[]),(0,St.useEffect)(()=>{let g=!1;return(async()=>{let m=n.current;try{let x=await kd();if(g)return;if(!x.empty&&x.nodes?.length&&!n.current.length){let N=$a(x.nodes,x.edges??[],[],c.current);r(N.nodes),i(N.edges),m=N.nodes,s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${x.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`),N.dropped.length&&s(`${N.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${N.dropped[0]?.reason??""}\uFF09`)}}catch{}g||f?.(m)})(),()=>{g=!0}},[r,i,s,n,f]);let b=(0,St.useCallback)(async g=>{try{let w=await wd(g,n.current,o.current);l(),u(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${w.name||g}\u300D`)}catch(w){u(`\u4FDD\u5B58\u5931\u8D25\uFF1A${fe(w)}`)}},[n,o,l,u]),y=(0,St.useCallback)(async g=>{try{let w=await vd(g),m=$a(w.nodes,w.edges,w.missing??[],c.current);r(m.nodes),i(m.edges),l(),u(`\u5DF2\u52A0\u8F7D\u300C${w.name||g}\u300D`),m.dropped.length&&u(`${m.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${m.dropped[0]?.reason??""}\uFF09`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(w){u(`\u52A0\u8F7D\u5931\u8D25\uFF1A${fe(w)}`)}},[r,i,a,l,u,c]);return{doSave:b,doLoad:y}}var pe=require("react/jsx-runtime");function ws(){let[e,t,n]=qu([]),[o,r,i]=Uu([]),[a,s]=(0,se.useState)([]),[u,l]=(0,se.useState)(null),[c,d]=(0,se.useState)(null),[f,p]=(0,se.useState)(null),[h,b]=(0,se.useState)(1),[y,g]=(0,se.useState)(!1),[w,m]=(0,se.useState)(()=>Lf()),[x,N]=(0,se.useState)([]),[S,k]=(0,se.useState)(null),[C,P]=(0,se.useState)(()=>Vd()),[L,D]=(0,se.useState)(!1),[A,_]=(0,se.useState)([]),v=(0,se.useRef)(null),I=(0,se.useRef)(null),E=(0,se.useRef)(null),M=(0,se.useRef)(null),z=(0,se.useRef)(null),T=(0,se.useRef)(new Map),V=(0,se.useRef)(new Map),W=(0,se.useRef)(e),R=(0,se.useRef)(o);W.current=e,R.current=o;let U=(0,se.useCallback)(O=>{s(G=>[...G.slice(-8),O])},[]),X=(0,se.useCallback)(O=>{l(O),window.setTimeout(()=>l(G=>G===O?null:G),2600)},[]),{config:Z,configIssues:ce,configRef:F,switchProfile:$,switchModel:Y,replaceConfig:re}=Bp(X),ae=(0,se.useRef)(!1),J=(0,se.useRef)({});J.current={size:F.current?.sizes[0]?.value,quality:F.current?.qualities[0]};let te=(0,se.useRef)(!1);(0,se.useEffect)(()=>{!Z||te.current||!(!Z.provider?.apiKeyConfigured&&(Z.source==="plugin"||Z.issues.length>0))||(te.current=!0,d({kind:"settings"}))},[Z]);let Q=Fp({nodesRef:W,edgesRef:R,setNodes:t,setEdges:r,flash:X}),{addImages:q,replaceImage:ie,openPreview:de,addDataUrl:Ce}=Lp({nodesRef:W,setNodes:t,createPosition:()=>Io.current(),log:U,flash:X,setPreview:p,record:Q.record}),{runPrompt:Pe,cancelPrompt:qe,runMany:tt,resumeTasks:Jt}=Hp({nodesRef:W,edgesRef:R,setNodes:t,setEdges:r,log:U,flash:X,taskIdsRef:V,timersRef:T}),{doSave:Nt,doLoad:Mt}=Gp({nodes:e,edges:o,nodesRef:W,edgesRef:R,setNodes:t,setEdges:r,instanceRef:E,log:U,flash:X,closeDialog:()=>d(null),defaultsRef:J,crashedRef:ae,onRestored:Jt}),je=yf(e),st=(0,se.useMemo)(()=>({animated:!y}),[y]),Xe=(0,se.useMemo)(()=>dd(e,o),[e,o]),Ct=(0,se.useMemo)(()=>e.map(O=>{if(O.type==="image"){let G=Xe.refCounts.get(O.data.registryId)??0;return(O.data.refCount??0)===G?O:{...O,data:{...O.data,refCount:G}}}if(O.type==="group"){let G=Xe.groupCounts.get(O.id)??0,j=Xe.groupSizes.get(O.id)??0,le=Xe.groupDups.get(O.id)??0;return O.data.imageCount===G&&O.data.totalSize===j&&O.data.duplicateCount===le?O:{...O,data:{...O.data,imageCount:G,totalSize:j,duplicateCount:le}}}return O}),[e,Xe]),en=e.filter(O=>O.type==="prompt"),Cn=en.filter(O=>O.data.status==="queued"||O.data.status==="running").map(O=>O.id),Jn=en.filter(O=>(O.data.prompt??"").trim()&&O.data.status!=="running"&&O.data.status!=="queued").map(O=>O.id),_o=(0,se.useCallback)((O,G)=>{t(j=>rt(j,O,G))},[t]),Ht=(0,se.useCallback)(O=>{Q.record();let G=new Set(O);t(j=>j.filter(le=>!G.has(le.id))),r(j=>j.filter(le=>!G.has(le.source)&&!G.has(le.target)))},[t,r,Q]),En=(0,se.useCallback)(O=>{let G=W.current.find(j=>j.id===O);Ht([O]),G?.type==="image"&&bd(G.data.registryId).catch(()=>{})},[Ht]),Le=(0,se.useCallback)(()=>{let O=E.current,G=v.current?.getBoundingClientRect(),j=O&&G?O.screenToFlowPosition({x:G.width/2,y:G.height/2}):{x:140,y:120},{position:le,next:Se}=id(j,z.current);return z.current=Se,le},[]),Io=(0,se.useRef)(Le);Io.current=Le;let Po=(0,se.useCallback)(O=>{let G=ad(O??Le(),{size:J.current.size??"1024x1024",quality:J.current.quality??"high",outputDir:""});Q.record(),t(j=>[...j,G])},[Le,t,F,Q]),zo=(0,se.useCallback)(O=>{Q.record(),t(G=>[...G,sd(O??Le())])},[Le,t,Q]),si=(0,se.useCallback)(()=>{r(Ha(W.current,R.current)),X("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,X]),li=(0,se.useCallback)(()=>{let O=new Set(x);if(!O.size){X("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}Q.record(),r(pd(W.current,R.current,O)),X("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[x,r,X,Q]),ci=(0,se.useCallback)(()=>{let O=new Set(x),G=F.current?.defaultOutputDir??"";O.size&&(Q.record(),t(j=>j.map(le=>le.type==="prompt"&&O.has(le.id)?{...le,data:{...le.data,outputDir:G}}:le)),X(G?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${G}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[x,t,X,Q]),ui=(0,se.useCallback)(()=>{let O=E.current;if(!O)return;let G=W.current.filter(le=>x.includes(le.id)),j=G.length?G:W.current;if(!j.length){X("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}O.fitView({nodes:j,padding:.25,duration:300,maxZoom:1.6})},[x,X]),di=(0,se.useCallback)(()=>{let O=new Set(x);if(!O.size){X("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}Q.record({preserveRedo:!0}),t(G=>$d(G,R.current,O))},[x,t,X,Q,R]),{dropIntent:fi,dragHandlers:pi,startToolbarDrag:mi,dropChip:gi}=Ef({canvasRef:v,modalOpen:!!c||!!f,getCreatePosition:()=>Le(),toFlowPosition:O=>E.current?E.current.screenToFlowPosition(O):Le(),onDropFiles:(O,G)=>void q(O,G),onDropNode:(O,G)=>{O==="prompt"?Po(G):zo(G)},onRejectFiles:()=>X("\u6CA1\u6709\u53EF\u7528\u7684\u56FE\u7247\u6587\u4EF6\uFF1A\u652F\u6301 png / jpg / webp / gif / bmp")});(0,se.useEffect)(()=>{let O=G=>{let j=G.target;if(j&&(j.tagName==="TEXTAREA"||j.tagName==="INPUT"))return;let le=Array.from(G.clipboardData?.files??[]);le.length&&(G.preventDefault(),q(le,Le()))};return window.addEventListener("paste",O),()=>window.removeEventListener("paste",O)},[q,Le]),Xp({nodesRef:W,edgesRef:R,setNodes:t,setEdges:r,selectedIds:x,selectedEdgeId:S,onDeleteNodes:Ht,onDeleteEdge:O=>{Q.record(),r(G=>G.filter(j=>j.id!==O)),k(null)},onUndo:Q.undo,onRestore:Q.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let tn=(0,se.useCallback)(O=>G=>{let j=W.current.find(le=>le.id===G);if(!j||j.type!=="image"||!j.data.url){X("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:O,target:{nodeId:G,src:j.data.url,name:j.data.name}})},[W,X]),Et=(0,se.useMemo)(()=>({cropImage:tn("crop"),splitImage:tn("split"),upscaleImage:tn("upscale"),maskImage:tn("mask")}),[tn]),Ro=(0,se.useCallback)(O=>{Q.record(),t(G=>G.map(j=>j.id===O&&j.type==="image"?{...j,data:{...j.data,maskDataUrl:void 0}}:j)),X("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,Q,X]),{nodeMenu:_t,boxRect:It,closeMenu:hi,setNodeMenu:Do}=If({rootRef:I,canvasRef:v,instanceRef:E,setNodes:t,modalOpen:!!c||!!f}),_n=_t?e.find(O=>O.id===_t.nodeId):void 0,Ao=_n?Pf(_n.type??"image",{hasUrl:_n.type==="image"?!!_n.data.url:!1,selectedCount:x.length}):[],bi=(0,se.useCallback)(O=>{let G=_t;if(Do(null),!G)return;let j=G.nodeId;switch(O){case"delete-selection":Ht(x),N([]);break;case"preview":de(j);break;case"crop":Et.cropImage(j);break;case"upscale":Et.upscaleImage(j);break;case"split":Et.splitImage(j);break;case"mask":Et.maskImage(j);break;case"replace":ie(j);break;case"run":Pe(j);break;case"copy-prompt":{let le=W.current.find(Se=>Se.id===j);if(le?.type!=="prompt")break;navigator.clipboard.writeText(le.data.prompt).then(()=>X("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD")).catch(()=>X("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE"));break}case"delete":En(j);break;default:break}},[_t,Do,Ht,de,Et,ie,Pe,En,x,X]),yi=(0,se.useMemo)(()=>({updatePrompt:_o,runPrompt:O=>{Pe(O)},cancelPrompt:O=>{qe(O)},deleteNode:En,zoomImage:de,replaceImage:ie,...Et,clearMask:Ro,config:Z}),[_o,Pe,qe,En,de,ie,Et,Ro,Z]);return(0,pe.jsxs)(ja.Provider,{value:yi,children:[(0,pe.jsx)("style",{children:cf}),(0,pe.jsxs)("div",{className:"im-root",ref:I,children:[(0,pe.jsx)(wf,{config:Z,promptCount:en.length,runnableIds:Jn,busyIds:Cn.length,snapEnabled:C,canvasLocked:L,cost:je,canUndo:Q.canUndo,canRestore:Q.canRestore,onUndo:Q.undo,onRestore:Q.restore,onAddPrompt:()=>Po(),onPickFiles:()=>M.current?.click(),onAddGroup:()=>zo(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:mi,onRun:tt,onCancelAll:()=>Cn.forEach(O=>void qe(O)),onAutoConnect:si,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:O=>void $(O),onSwitchModel:O=>void Y(O),onOpenSave:async()=>{try{let O=await Fa();d({kind:"save",workflows:O.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let O=await Fa();d({kind:"load",workflows:O.workflows})}catch(O){X(`\u8BFB\u53D6\u5931\u8D25\uFF1A${fe(O)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),ce.length?(0,pe.jsx)(Vf,{tone:"error",action:(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,pe.jsx)("ul",{className:"im-banner-list",children:ce.map(O=>(0,pe.jsx)("li",{children:O},O))})}):null,(0,pe.jsxs)("div",{className:`im-canvas${fi?" is-drop-active":""}`,ref:v,...pi,children:[(0,pe.jsx)(Hf,{selectedCount:x.length,selectedPromptCount:x.filter(O=>e.some(G=>G.id===O&&G.type==="prompt")).length,selectedRunnableIds:Jn.filter(O=>x.includes(O)),pickingOutputDir:!1,onRunSelected:()=>tt(Jn.filter(O=>x.includes(O))),onAutoLayout:di,onAutoConnectSelected:li,onSetOutputDir:ci,onDeleteSelected:()=>{Ht(x),N([])}}),(0,pe.jsx)(Qa.Provider,{value:y,children:(0,pe.jsx)(Yr,{onCrash:O=>{ae.current=!0,U(`\u753B\u5E03\u6E32\u67D3\u51FA\u9519\uFF1A${O.message}`)},onClear:()=>{t([]),r([]),N([])},children:(0,pe.jsxs)(Xu,{nodes:Ct,edges:o,nodeTypes:ff,onNodesChange:O=>{let G=Gd(O,W.current,C);_(G.guides),n(G.changes)},onEdgesChange:O=>i(O),onConnect:$p(r),isValidConnection:O=>cd(W.current,R.current,{source:String(O.source??""),target:String(O.target??"")}),onInit:O=>{E.current=O,g(O.getViewport().zoom<rs)},onNodeDragStop:(O,G)=>{if(_([]),!C)return;let j=So(G),le=W.current.filter(nn=>nn.id!==G.id).map(So),Se=Br(j,le);Se.x===j.x&&Se.y===j.y||t(nn=>nn.map(on=>on.id===G.id?{...on,position:{x:Se.x,y:Se.y}}:on))},onMove:(O,G)=>{b(G.zoom),g(j=>gf(j,G.zoom))},onEdgeDoubleClick:(O,G)=>{Q.record(),r(j=>j.filter(le=>le.id!==G.id)),k(null)},onSelectionChange:({nodes:O,edges:G})=>{let j=O.map(Se=>Se.id);N(Se=>Se.length===j.length&&Se.every((nn,on)=>nn===j[on])?Se:j);let le=G.length===1?G[0].id:null;k(Se=>Se===le?Se:le)},fitView:!0,fitViewOptions:{padding:.15,minZoom:.02,maxZoom:1},minZoom:.05,maxZoom:2,proOptions:{hideAttribution:!0},defaultEdgeOptions:st,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!L,nodesConnectable:!L,elementsSelectable:!L,panOnDrag:!L,selectionOnDrag:!1,selectionKeyCode:null,multiSelectionKeyCode:["Meta","Control"],children:[(0,pe.jsx)(Zu,{variant:bt.Dots,gap:18,size:1.4}),w?(0,pe.jsx)(Qu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:O=>O.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,pe.jsx)(Ap,{guides:A})]})})}),(0,pe.jsx)(vf,{zoom:h,snapEnabled:C,canvasLocked:L,minimapOpen:w,onZoomIn:()=>void E.current?.zoomIn({duration:180}),onZoomOut:()=>void E.current?.zoomOut({duration:180}),onFitView:()=>E.current?.fitView({padding:.15,duration:300,minZoom:.02,maxZoom:2}),onFocusSelected:ui,onToggleSnap:()=>P(O=>{let G=!O;return Xd(G),G||_([]),X(G?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),G}),onToggleLock:()=>D(O=>{let G=!O;return X(G?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),G}),onToggleMinimap:()=>m(O=>{let G=!O;return $f(G),G}),onOpenHelp:()=>d({kind:"help"})}),It&&E.current&&v.current?(()=>{let O=E.current.flowToScreenPosition({x:It.x,y:It.y}),G=E.current.flowToScreenPosition({x:It.x+It.width,y:It.y+It.height}),j=v.current.getBoundingClientRect();return(0,pe.jsx)("div",{className:"im-marquee",style:{left:O.x-j.left,top:O.y-j.top,width:G.x-O.x,height:G.y-O.y}})})():null,e.length===0?(0,pe.jsx)(Bf,{}):null,(0,pe.jsx)(Wf,{logs:a}),(0,pe.jsx)(Ff,{text:u}),gi]}),_t&&Ao.length>0?(0,pe.jsx)(Tf,{x:_t.x,y:_t.y,items:Ao,onPick:bi,onClose:hi}):null,(0,pe.jsx)("input",{ref:M,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:O=>{let G=Array.from(O.target.files??[]);O.target.value="",q(G,Le())}}),f?(0,pe.jsx)(ei,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>p(null)}):null,c?.kind==="save"?(0,pe.jsx)(ep,{workflows:c.workflows??[],imagoraRoot:Z?.imagoraRoot,onCancel:()=>d(null),onSubmit:O=>void Nt(O)}):null,c?.kind==="load"?(0,pe.jsx)(tp,{workflows:c.workflows??[],imagoraRoot:Z?.imagoraRoot,onCancel:()=>d(null),onPick:O=>void Mt(O)}):null,c?.kind==="crop"&&c.target?(0,pe.jsx)(pp,{src:c.target.src,name:c.target.name,onClose:()=>d(null),onConfirm:async(O,G)=>{Q.record(),await Ce(O,`${c.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),X(G)}}):null,c?.kind==="split"&&c.target?(0,pe.jsx)(Ip,{src:c.target.src,name:c.target.name,onClose:()=>d(null),onConfirm:async O=>{Q.record();let G=c.target.name.replace(/\.[^.]+$/,""),j=Le();for(let[le,Se]of O.entries())await Ce(Se.dataUrl,`${G}_${le+1}.png`,{x:j.x+le*160,y:j.y});d(null),X(`\u5DF2\u5207\u51FA ${O.length} \u5F20`)}}):null,c?.kind==="upscale"&&c.target?(0,pe.jsx)(Dp,{src:c.target.src,onClose:()=>d(null),onConfirm:async(O,G)=>{Q.record(),await Ce(O,`${c.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),X(G)}}):null,c?.kind==="mask"&&c.target?(0,pe.jsx)(bp,{src:c.target.src,name:c.target.name,onClose:()=>d(null),onConfirm:async(O,G)=>{Q.record(),t(j=>j.map(le=>le.id===c.target.nodeId&&le.type==="image"?{...le,data:{...le.data,maskDataUrl:O}}:le)),d(null),X(G)}}):null,c?.kind==="help"?(0,pe.jsx)(np,{config:Z,onClose:()=>d(null)}):null,c?.kind==="history"?(0,pe.jsx)(kp,{imagoraRoot:Z?.imagoraRoot,onClose:()=>d(null),onImport:O=>{if(!O.length)return;Q.record();let G=Le(),j=O.map((le,Se)=>xn(le,{x:G.x+Se*172,y:G.y}));t(le=>[...le,...j]),X(`\u5DF2\u653E\u5165 ${j.length} \u5F20\u56FE`)}}):null,c?.kind==="import"?(0,pe.jsx)(Tp,{sizes:Z?.sizes??[],onCancel:()=>d(null),onConfirm:O=>{Q.record();let G=F.current,j=Dd(O,{sizes:G?.sizes??[],defaultQuality:G?.qualities[0]??"high",defaultOutputDir:""},Le());t(le=>[...le,...j]),d(null),X(`\u5DF2\u5EFA ${j.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,c?.kind==="settings"?(0,pe.jsx)(Op,{config:Z,onClose:()=>d(null),onSaved:re,onFlash:X}):null]})]})}var Kp=`/* this gets exported as style.css and can be used for the default theming */
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
`;var tm=require("react/jsx-runtime"),l1=["slots"],em="imagora";globalThis.__dshImagoraCanvas=ws;var c1={ErrorBoundary:Kn,NodeBoundary:Ur,CanvasBoundary:Yr};globalThis.__dshImagoraBoundary=c1;function u1({size:e=16}){return(0,tm.jsx)(is,{size:e,fill:"currentColor"})}function d1(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=Kp,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(Jp(),Qp)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:em},ws)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:em,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},u1)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
