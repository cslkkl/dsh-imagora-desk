window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var im=Object.create;var Do=Object.defineProperty;var am=Object.getOwnPropertyDescriptor;var sm=Object.getOwnPropertyNames;var lm=Object.getPrototypeOf,cm=Object.prototype.hasOwnProperty;var um=(e,t)=>()=>(e&&(t=e(e=0)),t);var To=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),hs=(e,t)=>{for(var n in t)Do(e,n,{get:t[n],enumerable:!0})},bs=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of sm(t))!cm.call(e,r)&&r!==n&&Do(e,r,{get:()=>t[r],enumerable:!(o=am(t,r))||o.enumerable});return e};var ys=(e,t,n)=>(n=e!=null?im(lm(e)):{},bs(t||!e||!e.__esModule?Do(n,"default",{value:e,enumerable:!0}):n,e)),dm=e=>bs(Do({},"__esModule",{value:!0}),e);var mc=To(pc=>{"use strict";var Un=require("react");function M0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var N0=typeof Object.is=="function"?Object.is:M0,_0=Un.useState,I0=Un.useEffect,P0=Un.useLayoutEffect,z0=Un.useDebugValue;function R0(e,t){var n=t(),o=_0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return P0(function(){r.value=n,r.getSnapshot=t,wa(r)&&i({inst:r})},[e,n,t]),I0(function(){return wa(r)&&i({inst:r}),e(function(){wa(r)&&i({inst:r})})},[e]),z0(n),n}function wa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!N0(e,n)}catch{return!0}}function D0(e,t){return t()}var T0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?D0:R0;pc.useSyncExternalStore=Un.useSyncExternalStore!==void 0?Un.useSyncExternalStore:T0});var hc=To((R1,gc)=>{"use strict";gc.exports=mc()});var yc=To(bc=>{"use strict";var vr=require("react"),A0=hc();function O0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var L0=typeof Object.is=="function"?Object.is:O0,$0=A0.useSyncExternalStore,H0=vr.useRef,B0=vr.useEffect,W0=vr.useMemo,F0=vr.useDebugValue;bc.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=H0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=W0(function(){function c(p){if(!u){if(u=!0,l=p,p=o(p),r!==void 0&&a.hasValue){var h=a.value;if(r(h,p))return d=h}return d=p}if(h=d,L0(l,p))return h;var b=o(p);return r!==void 0&&r(h,b)?(l=p,h):(l=p,d=b)}var u=!1,l,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var s=$0(e,i[0],i[1]);return B0(function(){a.hasValue=!0,a.value=s},[s]),F0(s),s}});var wc=To((T1,xc)=>{"use strict";xc.exports=yc()});var _p={};hs(_p,{primitives:()=>Sv});function kv(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Sv(){if(Kr)return Kr;let e=require(Np),t=kv(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${Np}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Kr=t,Kr}var Np,Kr,Ip=um(()=>{"use strict";Np="@deepseek-ai/dsh-client-ui-primitives",Kr=null});var Nv={};hs(Nv,{apply:()=>Mv,inject:()=>Cv});module.exports=dm(Nv);var se=require("react");var H=require("react/jsx-runtime"),$=require("react");function Me(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=Me(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var fm={value:()=>{}};function sn(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Ao(n)}function Ao(e){this._=e}function pm(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Ao.prototype=sn.prototype={constructor:Ao,on:function(e,t){var n=this._,o=pm(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=mm(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=xs(n[r],e.name,t);else if(t==null)for(r in n)n[r]=xs(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ao(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function mm(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function xs(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=fm,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var ui="http://www.w3.org/1999/xhtml",ws={svg:"http://www.w3.org/2000/svg",xhtml:ui,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Qn(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),ws.hasOwnProperty(t)?{space:ws[t],local:e}:e}function gm(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===ui&&t.documentElement.namespaceURI===ui?t.createElement(e):t.createElementNS(n,e)}}function hm(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function vs(e){var t=Qn(e);return(t.local?hm:gm)(t)}function bm(){}function Lo(e){return e==null?bm:function(){return this.querySelector(e)}}function ym(e){typeof e!="function"&&(e=Lo(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),c,u,l=0;l<a;++l)(c=i[l])&&(u=e.call(c,c.__data__,l,i))&&("__data__"in c&&(u.__data__=c.__data__),s[l]=u);return new je(o,this._parents)}function xm(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function wm(){return[]}function fi(e){return e==null?wm:function(){return this.querySelectorAll(e)}}function vm(e){return function(){return xm(e.apply(this,arguments))}}function km(e){typeof e=="function"?e=vm(e):e=fi(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&(o.push(e.call(c,c.__data__,u,a)),r.push(c));return new je(o,r)}function pi(e){return function(){return this.matches(e)}}function ks(e){return function(t){return t.matches(e)}}var Sm=Array.prototype.find;function Cm(e){return function(){return Sm.call(this.children,e)}}function Em(){return this.firstElementChild}function Mm(e){return this.select(e==null?Em:Cm(typeof e=="function"?e:ks(e)))}var Nm=Array.prototype.filter;function _m(){return Array.from(this.children)}function Im(e){return function(){return Nm.call(this.children,e)}}function Pm(e){return this.selectAll(e==null?_m:Im(typeof e=="function"?e:ks(e)))}function zm(e){typeof e!="function"&&(e=pi(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new je(o,this._parents)}function Ss(e){return new Array(e.length)}function Rm(){return new je(this._enter||this._groups.map(Ss),this._parents)}function Oo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Oo.prototype={constructor:Oo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Dm(e){return function(){return e}}function Tm(e,t,n,o,r,i){for(var a=0,s,c=t.length,u=i.length;a<u;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new Oo(e,i[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function Am(e,t,n,o,r,i,a){var s,c,u=new Map,l=t.length,d=i.length,f=new Array(l),p;for(s=0;s<l;++s)(c=t[s])&&(f[s]=p=a.call(c,c.__data__,s,t)+"",u.has(p)?r[s]=c:u.set(p,c));for(s=0;s<d;++s)p=a.call(e,i[s],s,i)+"",(c=u.get(p))?(o[s]=c,c.__data__=i[s],u.delete(p)):n[s]=new Oo(e,i[s]);for(s=0;s<l;++s)(c=t[s])&&u.get(f[s])===c&&(r[s]=c)}function Om(e){return e.__data__}function Lm(e,t){if(!arguments.length)return Array.from(this,Om);var n=t?Am:Tm,o=this._parents,r=this._groups;typeof e!="function"&&(e=Dm(e));for(var i=r.length,a=new Array(i),s=new Array(i),c=new Array(i),u=0;u<i;++u){var l=o[u],d=r[u],f=d.length,p=$m(e.call(l,l&&l.__data__,u,o)),h=p.length,b=s[u]=new Array(h),g=a[u]=new Array(h),y=c[u]=new Array(f);n(l,d,b,g,y,p,t);for(var v=0,m=0,w,S;v<h;++v)if(w=b[v]){for(v>=m&&(m=v+1);!(S=g[m])&&++m<h;);w._next=S||null}}return a=new je(a,o),a._enter=s,a._exit=c,a}function $m(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Hm(){return new je(this._exit||this._groups.map(Ss),this._parents)}function Bm(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function Wm(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),c=0;c<a;++c)for(var u=n[c],l=o[c],d=u.length,f=s[c]=new Array(d),p,h=0;h<d;++h)(p=u[h]||l[h])&&(f[h]=p);for(;c<r;++c)s[c]=n[c];return new je(s,this._parents)}function Fm(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function Vm(e){e||(e=Xm);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,c=r[i]=new Array(s),u,l=0;l<s;++l)(u=a[l])&&(c[l]=u);c.sort(t)}return new je(r,this._parents).order()}function Xm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Gm(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Ym(){return Array.from(this)}function qm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function Um(){let e=0;for(let t of this)++e;return e}function Zm(){return!this.node()}function Km(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function jm(e){return function(){this.removeAttribute(e)}}function Qm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Jm(e,t){return function(){this.setAttribute(e,t)}}function eg(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function tg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function ng(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function og(e,t){var n=Qn(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?Qm:jm:typeof t=="function"?n.local?ng:tg:n.local?eg:Jm)(n,t))}function Cs(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function rg(e){return function(){this.style.removeProperty(e)}}function ig(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ag(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function sg(e,t,n){return arguments.length>1?this.each((t==null?rg:typeof t=="function"?ag:ig)(e,t,n??"")):ln(this.node(),e)}function ln(e,t){return e.style.getPropertyValue(t)||Cs(e).getComputedStyle(e,null).getPropertyValue(t)}function lg(e){return function(){delete this[e]}}function cg(e,t){return function(){this[e]=t}}function ug(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function dg(e,t){return arguments.length>1?this.each((t==null?lg:typeof t=="function"?ug:cg)(e,t)):this.node()[e]}function Es(e){return e.trim().split(/^|\s+/)}function mi(e){return e.classList||new Ms(e)}function Ms(e){this._node=e,this._names=Es(e.getAttribute("class")||"")}Ms.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Ns(e,t){for(var n=mi(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function _s(e,t){for(var n=mi(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function fg(e){return function(){Ns(this,e)}}function pg(e){return function(){_s(this,e)}}function mg(e,t){return function(){(t.apply(this,arguments)?Ns:_s)(this,e)}}function gg(e,t){var n=Es(e+"");if(arguments.length<2){for(var o=mi(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?mg:t?fg:pg)(n,t))}function hg(){this.textContent=""}function bg(e){return function(){this.textContent=e}}function yg(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function xg(e){return arguments.length?this.each(e==null?hg:(typeof e=="function"?yg:bg)(e)):this.node().textContent}function wg(){this.innerHTML=""}function vg(e){return function(){this.innerHTML=e}}function kg(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Sg(e){return arguments.length?this.each(e==null?wg:(typeof e=="function"?kg:vg)(e)):this.node().innerHTML}function Cg(){this.nextSibling&&this.parentNode.appendChild(this)}function Eg(){return this.each(Cg)}function Mg(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ng(){return this.each(Mg)}function _g(e){var t=typeof e=="function"?e:vs(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Ig(){return null}function Pg(e,t){var n=typeof e=="function"?e:vs(e),o=t==null?Ig:typeof t=="function"?t:Lo(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function zg(){var e=this.parentNode;e&&e.removeChild(this)}function Rg(){return this.each(zg)}function Dg(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Tg(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ag(e){return this.select(e?Tg:Dg)}function Og(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Lg(e){return function(t){e.call(this,t,this.__data__)}}function $g(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function Hg(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function Bg(e,t,n){return function(){var o=this.__on,r,i=Lg(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function Wg(e,t,n){var o=$g(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,u=s.length,l;c<u;++c)for(r=0,l=s[c];r<i;++r)if((a=o[r]).type===l.type&&a.name===l.name)return l.value}return}for(s=t?Bg:Hg,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function Is(e,t,n){var o=Cs(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Fg(e,t){return function(){return Is(this,e,t)}}function Vg(e,t){return function(){return Is(this,e,t.apply(this,arguments))}}function Xg(e,t){return this.each((typeof t=="function"?Vg:Fg)(e,t))}function*Gg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var Ps=[null];function je(e,t){this._groups=e,this._parents=t}function cn(){return new je([[document.documentElement]],Ps)}function Yg(){return this}je.prototype=cn.prototype={constructor:je,select:ym,selectAll:km,selectChild:Mm,selectChildren:Pm,filter:zm,data:Lm,enter:Rm,exit:Hm,join:Bm,merge:Wm,selection:Yg,order:Fm,sort:Vm,call:Gm,nodes:Ym,node:qm,size:Um,empty:Zm,each:Km,attr:og,style:sg,property:dg,classed:gg,text:xg,html:Sg,raise:Eg,lower:Ng,append:_g,insert:Pg,remove:Rg,clone:Ag,datum:Og,on:Wg,dispatch:Xg,[Symbol.iterator]:Gg};function $e(e){return typeof e=="string"?new je([[document.querySelector(e)]],[document.documentElement]):new je([[e]],Ps)}var qg=0;function Ug(){return new di}function di(){this._="@"+(++qg).toString(36)}di.prototype=Ug.prototype={constructor:di,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function Zg(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Xe(e,t){if(e=Zg(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var Kg={passive:!1},Jn={capture:!0,passive:!1};function gi(e){e.stopImmediatePropagation()}function In(e){e.preventDefault(),e.stopImmediatePropagation()}function bi(e){var t=e.document.documentElement,n=$e(e).on("dragstart.drag",In,Jn);"onselectstart"in t?n.on("selectstart.drag",In,Jn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function yi(e,t){var n=e.document.documentElement,o=$e(e).on("dragstart.drag",null);t&&(o.on("click.drag",In,Jn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var $o=e=>()=>e;function hi(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:c,dy:u,dispatch:l}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:l}})}hi.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function jg(e){return!e.ctrlKey&&!e.button}function Qg(){return this.parentNode}function Jg(e,t){return t??{x:e.x,y:e.y}}function eh(){return navigator.maxTouchPoints||"ontouchstart"in this}function xi(){var e=jg,t=Qg,n=Jg,o=eh,r={},i=sn("start","drag","end"),a=0,s,c,u,l,d=0;function f(w){w.on("mousedown.drag",p).filter(o).on("touchstart.drag",g).on("touchmove.drag",y,Kg).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(w,S){if(!(l||!e.call(this,w,S))){var C=m(this,t.call(this,w,S),w,S,"mouse");C&&($e(w.view).on("mousemove.drag",h,Jn).on("mouseup.drag",b,Jn),bi(w.view),gi(w),u=!1,s=w.clientX,c=w.clientY,C("start",w))}}function h(w){if(In(w),!u){var S=w.clientX-s,C=w.clientY-c;u=S*S+C*C>d}r.mouse("drag",w)}function b(w){$e(w.view).on("mousemove.drag mouseup.drag",null),yi(w.view,u),In(w),r.mouse("end",w)}function g(w,S){if(e.call(this,w,S)){var C=w.changedTouches,k=t.call(this,w,S),M=C.length,I,L;for(I=0;I<M;++I)(L=m(this,k,w,S,C[I].identifier,C[I]))&&(gi(w),L("start",w,C[I]))}}function y(w){var S=w.changedTouches,C=S.length,k,M;for(k=0;k<C;++k)(M=r[S[k].identifier])&&(In(w),M("drag",w,S[k]))}function v(w){var S=w.changedTouches,C=S.length,k,M;for(l&&clearTimeout(l),l=setTimeout(function(){l=null},500),k=0;k<C;++k)(M=r[S[k].identifier])&&(gi(w),M("end",w,S[k]))}function m(w,S,C,k,M,I){var L=i.copy(),R=Xe(I||C,S),T,P,x;if((x=n.call(w,new hi("beforestart",{sourceEvent:C,target:f,identifier:M,active:a,x:R[0],y:R[1],dx:0,dy:0,dispatch:L}),k))!=null)return T=x.x-R[0]||0,P=x.y-R[1]||0,function _(N,E,z){var D=R,F;switch(N){case"start":r[M]=_,F=a++;break;case"end":delete r[M],--a;case"drag":R=Xe(z||E,S),F=a;break}L.call(N,w,new hi(N,{sourceEvent:E,subject:x,target:f,identifier:M,active:F,x:R[0]+T,y:R[1]+P,dx:R[0]-D[0],dy:R[1]-D[1],dispatch:L}),k)}}return f.filter=function(w){return arguments.length?(e=typeof w=="function"?w:$o(!!w),f):e},f.container=function(w){return arguments.length?(t=typeof w=="function"?w:$o(w),f):t},f.subject=function(w){return arguments.length?(n=typeof w=="function"?w:$o(w),f):n},f.touchable=function(w){return arguments.length?(o=typeof w=="function"?w:$o(!!w),f):o},f.on=function(){var w=i.on.apply(i,arguments);return w===i?f:w},f.clickDistance=function(w){return arguments.length?(d=(w=+w)*w,f):Math.sqrt(d)},f}function Dn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function no(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Vt(){}var pn=.7,Rn=1/pn,Pn="\\s*([+-]?\\d+)\\s*",eo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ft="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",th=/^#([0-9a-f]{3,8})$/,nh=new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),oh=new RegExp(`^rgb\\(${ft},${ft},${ft}\\)$`),rh=new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${eo}\\)$`),ih=new RegExp(`^rgba\\(${ft},${ft},${ft},${eo}\\)$`),ah=new RegExp(`^hsl\\(${eo},${ft},${ft}\\)$`),sh=new RegExp(`^hsla\\(${eo},${ft},${ft},${eo}\\)$`),zs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dn(Vt,zt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Rs,formatHex:Rs,formatHex8:lh,formatHsl:ch,formatRgb:Ds,toString:Ds});function Rs(){return this.rgb().formatHex()}function lh(){return this.rgb().formatHex8()}function ch(){return Fs(this).formatHsl()}function Ds(){return this.rgb().formatRgb()}function zt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=th.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Ts(t):n===3?new Ae(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ho(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ho(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=nh.exec(e))?new Ae(t[1],t[2],t[3],1):(t=oh.exec(e))?new Ae(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=rh.exec(e))?Ho(t[1],t[2],t[3],t[4]):(t=ih.exec(e))?Ho(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=ah.exec(e))?Ls(t[1],t[2]/100,t[3]/100,1):(t=sh.exec(e))?Ls(t[1],t[2]/100,t[3]/100,t[4]):zs.hasOwnProperty(e)?Ts(zs[e]):e==="transparent"?new Ae(NaN,NaN,NaN,0):null}function Ts(e){return new Ae(e>>16&255,e>>8&255,e&255,1)}function Ho(e,t,n,o){return o<=0&&(e=t=n=NaN),new Ae(e,t,n,o)}function Ei(e){return e instanceof Vt||(e=zt(e)),e?(e=e.rgb(),new Ae(e.r,e.g,e.b,e.opacity)):new Ae}function oo(e,t,n,o){return arguments.length===1?Ei(e):new Ae(e,t,n,o??1)}function Ae(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Dn(Ae,oo,no(Vt,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new Ae(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new Ae(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ae(dn(this.r),dn(this.g),dn(this.b),Wo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:As,formatHex:As,formatHex8:uh,formatRgb:Os,toString:Os}));function As(){return`#${un(this.r)}${un(this.g)}${un(this.b)}`}function uh(){return`#${un(this.r)}${un(this.g)}${un(this.b)}${un((isNaN(this.opacity)?1:this.opacity)*255)}`}function Os(){let e=Wo(this.opacity);return`${e===1?"rgb(":"rgba("}${dn(this.r)}, ${dn(this.g)}, ${dn(this.b)}${e===1?")":`, ${e})`}`}function Wo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function dn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function un(e){return e=dn(e),(e<16?"0":"")+e.toString(16)}function Ls(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new st(e,t,n,o)}function Fs(e){if(e instanceof st)return new st(e.h,e.s,e.l,e.opacity);if(e instanceof Vt||(e=zt(e)),!e)return new st;if(e instanceof st)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,c=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+r:2-i-r,a*=60):s=c>0&&c<1?0:a,new st(a,s,c,e.opacity)}function Vo(e,t,n,o){return arguments.length===1?Fs(e):new st(e,t,n,o??1)}function st(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(st,Vo,no(Vt,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new st(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new st(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Ae(wi(e>=240?e-240:e+120,r,o),wi(e,r,o),wi(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new st($s(this.h),Bo(this.s),Bo(this.l),Wo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Wo(this.opacity);return`${e===1?"hsl(":"hsla("}${$s(this.h)}, ${Bo(this.s)*100}%, ${Bo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function $s(e){return e=(e||0)%360,e<0?e+360:e}function Bo(e){return Math.max(0,Math.min(1,e||0))}function wi(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Vs=Math.PI/180,Xs=180/Math.PI,Fo=18,Gs=.96422,Ys=1,qs=.82521,Us=4/29,zn=6/29,Zs=3*zn*zn,dh=zn*zn*zn;function Ks(e){if(e instanceof pt)return new pt(e.l,e.a,e.b,e.opacity);if(e instanceof Pt)return Qs(e);e instanceof Ae||(e=Ei(e));var t=Ci(e.r),n=Ci(e.g),o=Ci(e.b),r=vi((.2225045*t+.7168786*n+.0606169*o)/Ys),i,a;return t===n&&n===o?i=a=r:(i=vi((.4360747*t+.3850649*n+.1430804*o)/Gs),a=vi((.0139322*t+.0971045*n+.7141733*o)/qs)),new pt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function js(e,t,n,o){return arguments.length===1?Ks(e):new pt(e,t,n,o??1)}function pt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Dn(pt,js,no(Vt,{brighter(e){return new pt(this.l+Fo*(e??1),this.a,this.b,this.opacity)},darker(e){return new pt(this.l-Fo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=Gs*ki(t),e=Ys*ki(e),n=qs*ki(n),new Ae(Si(3.1338561*t-1.6168667*e-.4906146*n),Si(-.9787684*t+1.9161415*e+.033454*n),Si(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function vi(e){return e>dh?Math.pow(e,1/3):e/Zs+Us}function ki(e){return e>zn?e*e*e:Zs*(e-Us)}function Si(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ci(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function fh(e){if(e instanceof Pt)return new Pt(e.h,e.c,e.l,e.opacity);if(e instanceof pt||(e=Ks(e)),e.a===0&&e.b===0)return new Pt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*Xs;return new Pt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Xo(e,t,n,o){return arguments.length===1?fh(e):new Pt(e,t,n,o??1)}function Pt(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function Qs(e){if(isNaN(e.h))return new pt(e.l,0,0,e.opacity);var t=e.h*Vs;return new pt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Dn(Pt,Xo,no(Vt,{brighter(e){return new Pt(this.h,this.c,this.l+Fo*(e??1),this.opacity)},darker(e){return new Pt(this.h,this.c,this.l-Fo*(e??1),this.opacity)},rgb(){return Qs(this).rgb()}}));var Js=-.14861,Mi=1.78277,Ni=-.29227,Go=-.90649,to=1.97294,Hs=to*Go,Bs=to*Mi,Ws=Mi*Ni-Go*Js;function ph(e){if(e instanceof fn)return new fn(e.h,e.s,e.l,e.opacity);e instanceof Ae||(e=Ei(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(Ws*o+Hs*t-Bs*n)/(Ws+Hs-Bs),i=o-r,a=(to*(n-r)-Ni*i)/Go,s=Math.sqrt(a*a+i*i)/(to*r*(1-r)),c=s?Math.atan2(a,i)*Xs-120:NaN;return new fn(c<0?c+360:c,s,r,e.opacity)}function Yo(e,t,n,o){return arguments.length===1?ph(e):new fn(e,t,n,o??1)}function fn(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(fn,Yo,no(Vt,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new fn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new fn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*Vs,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Ae(255*(t+n*(Js*o+Mi*r)),255*(t+n*(Ni*o+Go*r)),255*(t+n*(to*o)),this.opacity)}}));function nl(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function mh(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return nl((n-o/t)*t,a,r,i,s)}}function gh(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return nl((n-o/t)*t,r,i,a,s)}}var Uo=e=>()=>e;function ol(e,t){return function(n){return e+n*t}}function hh(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function zi(e,t){var n=t-e;return n?ol(e,n>180||n<-180?n-360*Math.round(n/360):n):Uo(isNaN(e)?t:e)}function bh(e){return(e=+e)==1?Ge:function(t,n){return n-t?hh(t,n,e):Uo(isNaN(t)?n:t)}}function Ge(e,t){var n=t-e;return n?ol(e,n):Uo(isNaN(e)?t:e)}var ro=(function e(t){var n=bh(t);function o(r,i){var a=n((r=oo(r)).r,(i=oo(i)).r),s=n(r.g,i.g),c=n(r.b,i.b),u=Ge(r.opacity,i.opacity);return function(l){return r.r=a(l),r.g=s(l),r.b=c(l),r.opacity=u(l),r+""}}return o.gamma=e,o})(1);function rl(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=oo(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(c){return s.r=o(c),s.g=r(c),s.b=i(c),s+""}}}var Lv=rl(mh),$v=rl(gh);function yh(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function xh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function wh(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=Tn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function vh(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function lt(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function kh(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Tn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var Ii=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_i=new RegExp(Ii.source,"g");function Sh(e){return function(){return e}}function Ch(e){return function(t){return e(t)+""}}function Ri(e,t){var n=Ii.lastIndex=_i.lastIndex=0,o,r,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(o=Ii.exec(e))&&(r=_i.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:lt(o,r)})),n=_i.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?Ch(c[0].x):Sh(t):(t=c.length,function(u){for(var l=0,d;l<t;++l)s[(d=c[l]).i]=d.x(u);return s.join("")})}function Tn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Uo(t):(n==="number"?lt:n==="string"?(o=zt(t))?(t=o,ro):Ri:t instanceof zt?ro:t instanceof Date?vh:xh(t)?yh:Array.isArray(t)?wh:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?kh:lt)(e,t)}var el=180/Math.PI,Pi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function il(e,t,n,o,r,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,c/=s),e*o<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*el,skewX:Math.atan(c)*el,scaleX:a,scaleY:s}}var qo;function Eh(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Pi:il(t.a,t.b,t.c,t.d,t.e,t.f)}function Mh(e){return e==null||(qo||(qo=document.createElementNS("http://www.w3.org/2000/svg","g")),qo.setAttribute("transform",e),!(e=qo.transform.baseVal.consolidate()))?Pi:(e=e.matrix,il(e.a,e.b,e.c,e.d,e.e,e.f))}function al(e,t,n,o){function r(u){return u.length?u.pop()+" ":""}function i(u,l,d,f,p,h){if(u!==d||l!==f){var b=p.push("translate(",null,t,null,n);h.push({i:b-4,x:lt(u,d)},{i:b-2,x:lt(l,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function a(u,l,d,f){u!==l?(u-l>180?l+=360:l-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:lt(u,l)})):l&&d.push(r(d)+"rotate("+l+o)}function s(u,l,d,f){u!==l?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:lt(u,l)}):l&&d.push(r(d)+"skewX("+l+o)}function c(u,l,d,f,p,h){if(u!==d||l!==f){var b=p.push(r(p)+"scale(",null,",",null,")");h.push({i:b-4,x:lt(u,d)},{i:b-2,x:lt(l,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(u,l){var d=[],f=[];return u=e(u),l=e(l),i(u.translateX,u.translateY,l.translateX,l.translateY,d,f),a(u.rotate,l.rotate,d,f),s(u.skewX,l.skewX,d,f),c(u.scaleX,u.scaleY,l.scaleX,l.scaleY,d,f),u=l=null,function(p){for(var h=-1,b=f.length,g;++h<b;)d[(g=f[h]).i]=g.x(p);return d.join("")}}}var sl=al(Eh,"px, ","px)","deg)"),ll=al(Mh,", ",")",")"),Nh=1e-12;function tl(e){return((e=Math.exp(e))+1/e)/2}function _h(e){return((e=Math.exp(e))-1/e)/2}function Ih(e){return((e=Math.exp(2*e))-1)/(e+1)}var An=(function e(t,n,o){function r(i,a){var s=i[0],c=i[1],u=i[2],l=a[0],d=a[1],f=a[2],p=l-s,h=d-c,b=p*p+h*h,g,y;if(b<Nh)y=Math.log(f/u)/t,g=function(k){return[s+k*p,c+k*h,u*Math.exp(t*k*y)]};else{var v=Math.sqrt(b),m=(f*f-u*u+o*b)/(2*u*n*v),w=(f*f-u*u-o*b)/(2*f*n*v),S=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(w*w+1)-w);y=(C-S)/t,g=function(k){var M=k*y,I=tl(S),L=u/(n*v)*(I*Ih(t*M+S)-_h(S));return[s+L*p,c+L*h,u*I/tl(t*M+S)]}}return g.duration=Math.abs(y)*1e3*t/Math.SQRT2,g}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},r})(Math.SQRT2,2,4);function cl(e){return function(t,n){var o=e((t=Vo(t)).h,(n=Vo(n)).h),r=Ge(t.s,n.s),i=Ge(t.l,n.l),a=Ge(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var Hv=cl(zi),Bv=cl(Ge);function ul(e){return function(t,n){var o=e((t=Xo(t)).h,(n=Xo(n)).h),r=Ge(t.c,n.c),i=Ge(t.l,n.l),a=Ge(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var Wv=ul(zi),Fv=ul(Ge);function dl(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Yo(r)).h,(i=Yo(i)).h),s=Ge(r.s,i.s),c=Ge(r.l,i.l),u=Ge(r.opacity,i.opacity);return function(l){return r.h=a(l),r.s=s(l),r.l=c(Math.pow(l,n)),r.opacity=u(l),r+""}}return o.gamma=t,o})(1)}var Vv=dl(zi),Xv=dl(Ge);var On=0,ao=0,io=0,pl=1e3,Zo,so,Ko=0,mn=0,Qo=0,lo=typeof performance=="object"&&performance.now?performance:Date,ml=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Jo(){return mn||(ml(Ph),mn=lo.now()+Qo)}function Ph(){mn=0}function jo(){this._call=this._time=this._next=null}jo.prototype=Ti.prototype={constructor:jo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Jo():+n)+(t==null?0:+t),!this._next&&so!==this&&(so?so._next=this:Zo=this,so=this),this._call=e,this._time=n,Di()},stop:function(){this._call&&(this._call=null,this._time=1/0,Di())}};function Ti(e,t,n){var o=new jo;return o.restart(e,t,n),o}function zh(){Jo(),++On;for(var e=Zo,t;e;)(t=mn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--On}function fl(){mn=(Ko=lo.now())+Qo,On=ao=0;try{zh()}finally{On=0,Dh(),mn=0}}function Rh(){var e=lo.now(),t=e-Ko;t>pl&&(Qo-=t,Ko=e)}function Dh(){for(var e,t=Zo,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Zo=n);so=e,Di(o)}function Di(e){if(!On){ao&&(ao=clearTimeout(ao));var t=e-mn;t>24?(e<1/0&&(ao=setTimeout(fl,Math.ceil(e-lo.now()-Qo)+1)),io&&(io=clearInterval(io))):(io||(Ko=lo.now(),io=setInterval(Rh,pl)),On=1,ml(fl))}}function Ai(e,t,n){var o=new jo;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function hl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Oi=3,qv=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(Oi),Uv=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(Oi),Zv=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(Oi),Th=Math.PI,Kv=Th/2;function er(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var gl=4/11,jv=6/11,Qv=8/11,Jv=3/4,e1=9/11,t1=10/11,n1=15/16,o1=21/22,r1=63/64,i1=1/gl/gl;var Li=1.70158,a1=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(Li),s1=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(Li),l1=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(Li),Ln=2*Math.PI,$i=1,Hi=.3,c1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return t*er(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})($i,Hi),u1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return 1-t*er(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})($i,Hi),d1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return((i=i*2-1)<0?t*er(-i)*Math.sin((o-i)/n):2-t*er(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})($i,Hi);var Ah=sn("start","end","cancel","interrupt"),Oh=[],xl=0,bl=1,Bi=2,tr=3,yl=4,Wi=5,nr=6;function or(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;Lh(e,n,{name:t,index:o,group:r,on:Ah,tween:Oh,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:xl})}function Fi(e,t){var n=ct(e,t);if(n.state>xl)throw new Error("too late; already scheduled");return n}function mt(e,t){var n=ct(e,t);if(n.state>tr)throw new Error("too late; already running");return n}function ct(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Lh(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=Ti(i,0,n.time);function i(u){n.state=bl,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var l,d,f,p;if(n.state!==bl)return c();for(l in o)if(p=o[l],p.name===n.name){if(p.state===tr)return Ai(a);p.state===yl?(p.state=nr,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[l]):+l<t&&(p.state=nr,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[l])}if(Ai(function(){n.state===tr&&(n.state=yl,n.timer.restart(s,n.delay,n.time),s(u))}),n.state=Bi,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Bi){for(n.state=tr,r=new Array(f=n.tween.length),l=0,d=-1;l<f;++l)(p=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function s(u){for(var l=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Wi,1),d=-1,f=r.length;++d<f;)r[d].call(e,l);n.state===Wi&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=nr,n.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function co(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>Bi&&o.state<Wi,o.state=nr,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function $h(e){return this.each(function(){co(this,e)})}function Hh(e,t){var n,o;return function(){var r=mt(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function Bh(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=mt(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},c=0,u=r.length;c<u;++c)if(r[c].name===t){r[c]=s;break}c===u&&r.push(s)}i.tween=r}}function Wh(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ct(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?Hh:Bh)(n,e,t))}function Vi(e,t,n){var o=e._id;return e.each(function(){var r=mt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ct(r,o).value[t]}}function wl(e,t){var n;return(typeof t=="number"?lt:t instanceof zt?ro:(n=zt(t))?(t=n,ro):Ri)(e,t)}function Fh(e){return function(){this.removeAttribute(e)}}function Vh(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Xh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function Gh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function Yh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function qh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function Uh(e,t){var n=Qn(e),o=n==="transform"?ll:wl;return this.attrTween(e,typeof t=="function"?(n.local?qh:Yh)(n,o,Vi(this,"attr."+e,t)):t==null?(n.local?Vh:Fh)(n):(n.local?Gh:Xh)(n,o,t))}function Zh(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Kh(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function jh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Kh(e,i)),n}return r._value=t,r}function Qh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Zh(e,i)),n}return r._value=t,r}function Jh(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Qn(e);return this.tween(n,(o.local?jh:Qh)(o,t))}function eb(e,t){return function(){Fi(this,e).delay=+t.apply(this,arguments)}}function tb(e,t){return t=+t,function(){Fi(this,e).delay=t}}function nb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?eb:tb)(t,e)):ct(this.node(),t).delay}function ob(e,t){return function(){mt(this,e).duration=+t.apply(this,arguments)}}function rb(e,t){return t=+t,function(){mt(this,e).duration=t}}function ib(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?ob:rb)(t,e)):ct(this.node(),t).duration}function ab(e,t){if(typeof t!="function")throw new Error;return function(){mt(this,e).ease=t}}function sb(e){var t=this._id;return arguments.length?this.each(ab(t,e)):ct(this.node(),t).ease}function lb(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;mt(this,e).ease=n}}function cb(e){if(typeof e!="function")throw new Error;return this.each(lb(this._id,e))}function ub(e){typeof e!="function"&&(e=pi(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new Dt(o,this._parents,this._name,this._id)}function db(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var c=t[s],u=n[s],l=c.length,d=a[s]=new Array(l),f,p=0;p<l;++p)(f=c[p]||u[p])&&(d[p]=f);for(;s<o;++s)a[s]=t[s];return new Dt(a,this._parents,this._name,this._id)}function fb(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function pb(e,t,n){var o,r,i=fb(t)?Fi:mt;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function mb(e,t){var n=this._id;return arguments.length<2?ct(this.node(),n).on.on(e):this.each(pb(n,e,t))}function gb(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function hb(){return this.on("end.remove",gb(this._id))}function bb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Lo(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],c=s.length,u=i[a]=new Array(c),l,d,f=0;f<c;++f)(l=s[f])&&(d=e.call(l,l.__data__,f,s))&&("__data__"in l&&(d.__data__=l.__data__),u[f]=d,or(u[f],t,n,f,u,ct(l,n)));return new Dt(i,this._parents,t,n)}function yb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=fi(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var c=o[s],u=c.length,l,d=0;d<u;++d)if(l=c[d]){for(var f=e.call(l,l.__data__,d,c),p,h=ct(l,n),b=0,g=f.length;b<g;++b)(p=f[b])&&or(p,t,n,b,f,h);i.push(f),a.push(l)}return new Dt(i,a,t,n)}var xb=cn.prototype.constructor;function wb(){return new xb(this._groups,this._parents)}function vb(e,t){var n,o,r;return function(){var i=ln(this,e),a=(this.style.removeProperty(e),ln(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function vl(e){return function(){this.style.removeProperty(e)}}function kb(e,t,n){var o,r=n+"",i;return function(){var a=ln(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function Sb(e,t,n){var o,r,i;return function(){var a=ln(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),ln(this,e))),a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s))}}function Cb(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var c=mt(this,e),u=c.on,l=c.value[i]==null?s||(s=vl(t)):void 0;(u!==n||r!==l)&&(o=(n=u).copy()).on(a,r=l),c.on=o}}function Eb(e,t,n){var o=(e+="")=="transform"?sl:wl;return t==null?this.styleTween(e,vb(e,o)).on("end.style."+e,vl(e)):typeof t=="function"?this.styleTween(e,Sb(e,o,Vi(this,"style."+e,t))).each(Cb(this._id,e)):this.styleTween(e,kb(e,o,t),n).on("end.style."+e,null)}function Mb(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Nb(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&Mb(e,a,n)),o}return i._value=t,i}function _b(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Nb(e,t,n??""))}function Ib(e){return function(){this.textContent=e}}function Pb(e){return function(){var t=e(this);this.textContent=t??""}}function zb(e){return this.tween("text",typeof e=="function"?Pb(Vi(this,"text",e)):Ib(e==null?"":e+""))}function Rb(e){return function(t){this.textContent=e.call(this,t)}}function Db(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Rb(r)),t}return o._value=e,o}function Tb(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Db(e))}function Ab(){for(var e=this._name,t=this._id,n=kl(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)if(c=a[u]){var l=ct(c,t);or(c,e,n,u,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new Dt(o,this._parents,e,n)}function Ob(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--r===0&&i()}};n.each(function(){var u=mt(this,o),l=u.on;l!==e&&(t=(e=l).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),u.on=t}),r===0&&i()})}var Lb=0;function Dt(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function $b(e){return cn().transition(e)}function kl(){return++Lb}var Rt=cn.prototype;Dt.prototype=$b.prototype={constructor:Dt,select:bb,selectAll:yb,selectChild:Rt.selectChild,selectChildren:Rt.selectChildren,filter:ub,merge:db,selection:wb,transition:Ab,call:Rt.call,nodes:Rt.nodes,node:Rt.node,size:Rt.size,empty:Rt.empty,each:Rt.each,on:mb,attr:Uh,attrTween:Jh,style:Eb,styleTween:_b,text:zb,textTween:Tb,remove:hb,tween:Wh,delay:nb,duration:ib,ease:sb,easeVarying:cb,end:Ob,[Symbol.iterator]:Rt[Symbol.iterator]};var Hb={time:null,delay:0,duration:250,ease:hl};function Bb(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Wb(e){var t,n;e instanceof Dt?(t=e._id,e=e._name):(t=kl(),(n=Hb).time=Jo(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&or(c,e,t,u,a,n||Bb(c,t));return new Dt(o,this._parents,e,t)}cn.prototype.interrupt=$h;cn.prototype.transition=Wb;var rr=e=>()=>e;function Fb(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Tt(e,t,n){this.k=e,this.x=t,this.y=n}Tt.prototype={constructor:Tt,scale:function(e){return e===1?this:new Tt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Tt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var fo=new Tt(1,0,0);Gi.prototype=Tt.prototype;function Gi(e){for(;!e.__zoom;)if(!(e=e.parentNode))return fo;return e.__zoom}function Xi(e){e.stopImmediatePropagation()}function uo(e){e.preventDefault(),e.stopImmediatePropagation()}function Vb(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Xb(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Sl(){return this.__zoom||fo}function Gb(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Yb(){return navigator.maxTouchPoints||"ontouchstart"in this}function qb(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Yi(){var e=Vb,t=Xb,n=qb,o=Gb,r=Yb,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=An,u=sn("start","zoom","end"),l,d,f,p=500,h=150,b=0,g=10;function y(x){x.property("__zoom",Sl).on("wheel.zoom",M,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",L).filter(r).on("touchstart.zoom",R).on("touchmove.zoom",T).on("touchend.zoom touchcancel.zoom",P).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}y.transform=function(x,_,N,E){var z=x.selection?x.selection():x;z.property("__zoom",Sl),x!==z?S(x,_,N,E):z.interrupt().each(function(){C(this,arguments).event(E).start().zoom(null,typeof _=="function"?_.apply(this,arguments):_).end()})},y.scaleBy=function(x,_,N,E){y.scaleTo(x,function(){var z=this.__zoom.k,D=typeof _=="function"?_.apply(this,arguments):_;return z*D},N,E)},y.scaleTo=function(x,_,N,E){y.transform(x,function(){var z=t.apply(this,arguments),D=this.__zoom,F=N==null?w(z):typeof N=="function"?N.apply(this,arguments):N,B=D.invert(F),V=typeof _=="function"?_.apply(this,arguments):_;return n(m(v(D,V),F,B),z,a)},N,E)},y.translateBy=function(x,_,N,E){y.transform(x,function(){return n(this.__zoom.translate(typeof _=="function"?_.apply(this,arguments):_,typeof N=="function"?N.apply(this,arguments):N),t.apply(this,arguments),a)},null,E)},y.translateTo=function(x,_,N,E,z){y.transform(x,function(){var D=t.apply(this,arguments),F=this.__zoom,B=E==null?w(D):typeof E=="function"?E.apply(this,arguments):E;return n(fo.translate(B[0],B[1]).scale(F.k).translate(typeof _=="function"?-_.apply(this,arguments):-_,typeof N=="function"?-N.apply(this,arguments):-N),D,a)},E,z)};function v(x,_){return _=Math.max(i[0],Math.min(i[1],_)),_===x.k?x:new Tt(_,x.x,x.y)}function m(x,_,N){var E=_[0]-N[0]*x.k,z=_[1]-N[1]*x.k;return E===x.x&&z===x.y?x:new Tt(x.k,E,z)}function w(x){return[(+x[0][0]+ +x[1][0])/2,(+x[0][1]+ +x[1][1])/2]}function S(x,_,N,E){x.on("start.zoom",function(){C(this,arguments).event(E).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(E).end()}).tween("zoom",function(){var z=this,D=arguments,F=C(z,D).event(E),B=t.apply(z,D),V=N==null?w(B):typeof N=="function"?N.apply(z,D):N,Q=Math.max(B[1][0]-B[0][0],B[1][1]-B[0][1]),G=z.__zoom,K=typeof _=="function"?_.apply(z,D):_,le=c(G.invert(V).concat(Q/G.k),K.invert(V).concat(Q/K.k));return function(W){if(W===1)W=K;else{var O=le(W),U=Q/O[2];W=new Tt(U,V[0]-O[0]*U,V[1]-O[1]*U)}F.zoom(null,W)}})}function C(x,_,N){return!N&&x.__zooming||new k(x,_)}function k(x,_){this.that=x,this.args=_,this.active=0,this.sourceEvent=null,this.extent=t.apply(x,_),this.taps=0}k.prototype={event:function(x){return x&&(this.sourceEvent=x),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(x,_){return this.mouse&&x!=="mouse"&&(this.mouse[1]=_.invert(this.mouse[0])),this.touch0&&x!=="touch"&&(this.touch0[1]=_.invert(this.touch0[0])),this.touch1&&x!=="touch"&&(this.touch1[1]=_.invert(this.touch1[0])),this.that.__zoom=_,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(x){var _=$e(this.that).datum();u.call(x,this.that,new Fb(x,{sourceEvent:this.sourceEvent,target:y,transform:this.that.__zoom,dispatch:u}),_)}};function M(x,..._){if(!e.apply(this,arguments))return;var N=C(this,_).event(x),E=this.__zoom,z=Math.max(i[0],Math.min(i[1],E.k*Math.pow(2,o.apply(this,arguments)))),D=Xe(x);if(N.wheel)(N.mouse[0][0]!==D[0]||N.mouse[0][1]!==D[1])&&(N.mouse[1]=E.invert(N.mouse[0]=D)),clearTimeout(N.wheel);else{if(E.k===z)return;N.mouse=[D,E.invert(D)],co(this),N.start()}uo(x),N.wheel=setTimeout(F,h),N.zoom("mouse",n(m(v(E,z),N.mouse[0],N.mouse[1]),N.extent,a));function F(){N.wheel=null,N.end()}}function I(x,..._){if(f||!e.apply(this,arguments))return;var N=x.currentTarget,E=C(this,_,!0).event(x),z=$e(x.view).on("mousemove.zoom",V,!0).on("mouseup.zoom",Q,!0),D=Xe(x,N),F=x.clientX,B=x.clientY;bi(x.view),Xi(x),E.mouse=[D,this.__zoom.invert(D)],co(this),E.start();function V(G){if(uo(G),!E.moved){var K=G.clientX-F,le=G.clientY-B;E.moved=K*K+le*le>b}E.event(G).zoom("mouse",n(m(E.that.__zoom,E.mouse[0]=Xe(G,N),E.mouse[1]),E.extent,a))}function Q(G){z.on("mousemove.zoom mouseup.zoom",null),yi(G.view,E.moved),uo(G),E.event(G).end()}}function L(x,..._){if(e.apply(this,arguments)){var N=this.__zoom,E=Xe(x.changedTouches?x.changedTouches[0]:x,this),z=N.invert(E),D=N.k*(x.shiftKey?.5:2),F=n(m(v(N,D),E,z),t.apply(this,_),a);uo(x),s>0?$e(this).transition().duration(s).call(S,F,E,x):$e(this).call(y.transform,F,E,x)}}function R(x,..._){if(e.apply(this,arguments)){var N=x.touches,E=N.length,z=C(this,_,x.changedTouches.length===E).event(x),D,F,B,V;for(Xi(x),F=0;F<E;++F)B=N[F],V=Xe(B,this),V=[V,this.__zoom.invert(V),B.identifier],z.touch0?!z.touch1&&z.touch0[2]!==V[2]&&(z.touch1=V,z.taps=0):(z.touch0=V,D=!0,z.taps=1+!!l);l&&(l=clearTimeout(l)),D&&(z.taps<2&&(d=V[0],l=setTimeout(function(){l=null},p)),co(this),z.start())}}function T(x,..._){if(this.__zooming){var N=C(this,_).event(x),E=x.changedTouches,z=E.length,D,F,B,V;for(uo(x),D=0;D<z;++D)F=E[D],B=Xe(F,this),N.touch0&&N.touch0[2]===F.identifier?N.touch0[0]=B:N.touch1&&N.touch1[2]===F.identifier&&(N.touch1[0]=B);if(F=N.that.__zoom,N.touch1){var Q=N.touch0[0],G=N.touch0[1],K=N.touch1[0],le=N.touch1[1],W=(W=K[0]-Q[0])*W+(W=K[1]-Q[1])*W,O=(O=le[0]-G[0])*O+(O=le[1]-G[1])*O;F=v(F,Math.sqrt(W/O)),B=[(Q[0]+K[0])/2,(Q[1]+K[1])/2],V=[(G[0]+le[0])/2,(G[1]+le[1])/2]}else if(N.touch0)B=N.touch0[0],V=N.touch0[1];else return;N.zoom("touch",n(m(F,B,V),N.extent,a))}}function P(x,..._){if(this.__zooming){var N=C(this,_).event(x),E=x.changedTouches,z=E.length,D,F;for(Xi(x),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),D=0;D<z;++D)F=E[D],N.touch0&&N.touch0[2]===F.identifier?delete N.touch0:N.touch1&&N.touch1[2]===F.identifier&&delete N.touch1;if(N.touch1&&!N.touch0&&(N.touch0=N.touch1,delete N.touch1),N.touch0)N.touch0[1]=this.__zoom.invert(N.touch0[0]);else if(N.end(),N.taps===2&&(F=Xe(F,this),Math.hypot(d[0]-F[0],d[1]-F[1])<g)){var B=$e(this).on("dblclick.zoom");B&&B.apply(this,arguments)}}}return y.wheelDelta=function(x){return arguments.length?(o=typeof x=="function"?x:rr(+x),y):o},y.filter=function(x){return arguments.length?(e=typeof x=="function"?x:rr(!!x),y):e},y.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:rr(!!x),y):r},y.extent=function(x){return arguments.length?(t=typeof x=="function"?x:rr([[+x[0][0],+x[0][1]],[+x[1][0],+x[1][1]]]),y):t},y.scaleExtent=function(x){return arguments.length?(i[0]=+x[0],i[1]=+x[1],y):[i[0],i[1]]},y.translateExtent=function(x){return arguments.length?(a[0][0]=+x[0][0],a[1][0]=+x[1][0],a[0][1]=+x[0][1],a[1][1]=+x[1][1],y):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},y.constrain=function(x){return arguments.length?(n=x,y):n},y.duration=function(x){return arguments.length?(s=+x,y):s},y.interpolate=function(x){return arguments.length?(c=x,y):c},y.on=function(){var x=u.on.apply(u,arguments);return x===u?y:x},y.clickDistance=function(x){return arguments.length?(b=(x=+x)*x,y):Math.sqrt(b)},y.tapDistance=function(x){return arguments.length?(g=+x,y):g},y}var Qe={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Fn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],ji=["Enter"," ","Escape"],Qi={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Yt;(function(e){e.Strict="strict",e.Loose="loose"})(Yt||(Yt={}));var At;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(At||(At={}));var gn;(function(e){e.Partial="partial",e.Full="full"})(gn||(gn={}));var Ji={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},gt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(gt||(gt={}));var Bn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Bn||(Bn={}));var te;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(te||(te={}));var Cl={[te.Left]:te.Right,[te.Right]:te.Left,[te.Top]:te.Bottom,[te.Bottom]:te.Top};function ea(e){return e===null?null:e?"valid":"invalid"}var ta=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Ll=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),na=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var mo=(e,t=[0,0])=>{let{width:n,height:o}=ut(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},oa=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):na(r)?r:t.nodeLookup.get(r.id));let s=a?sr(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return ur(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return dr(n)},Vn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=ur(n,sr(r)),o=!0)}),o?dr(n):{x:0,y:0,width:0,height:0}},lr=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,c=(t.y-o)/r,u=t.width/r,l=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:h=!0,hidden:b=!1}=f;if(a&&!h||b)continue;let g=p.width??f.width??f.initialWidth??0,y=p.height??f.height??f.initialHeight??0,{x:v,y:m}=f.internals.positionAbsolute,w=Fl(s,c,u,l,v,m,g,y),S=g*y,C=i&&w>0;(!f.internals.handleBounds||C||w>=S||f.dragging)&&d.push(f)}return d},$l=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function Ub(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=ut(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Hl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=Ub(e,a),c=Vn(s),u=ho(c,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(u,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function ra({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},l=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",Qe.error005());else{let p=s.measured.width,h=s.measured.height;p&&h&&(d=[[c,u],[c+p,u+h]])}else s&&yn(a.extent)&&(d=[[a.extent[0][0]+c,a.extent[0][1]+u],[a.extent[1][0]+c,a.extent[1][1]+u]]);let f=yn(d)?hn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",Qe.error015()),{position:{x:f.x-c+(a.measured.width??0)*l[0],y:f.y-u+(a.measured.height??0)*l[1]},positionAbsolute:f}}async function Bl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),h=!p&&f.parentId&&a.find(b=>b.id===f.parentId);(p||h)&&a.push(f)}let s=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),l=$l(a,c);for(let f of c)s.has(f.id)&&!l.find(h=>h.id===f.id)&&l.push(f);if(!r)return{edges:l,nodes:a};let d=await r({nodes:a,edges:l});return typeof d=="boolean"?d?{edges:l,nodes:a}:{edges:[],nodes:[]}:d}var Wn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),hn=(e={x:0,y:0},t,n)=>({x:Wn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Wn(e.y,t[0][1],t[1][1]-(n?.height??0))});function Wl(e,t,n){let{width:o,height:r}=ut(n),{x:i,y:a}=n.internals.positionAbsolute;return hn(e,[[i,a],[i+o,a+r]],t)}var El=(e,t,n)=>e<t?Wn(Math.abs(e-t),1,t)/t:e>n?-Wn(Math.abs(e-n),1,t)/t:0,cr=(e,t,n=15,o=40)=>{let r=El(e.x,o,t.width-o)*n,i=El(e.y,o,t.height-o)*n;return[r,i]},ur=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Ki=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),dr=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Xn=(e,t=[0,0])=>{let{x:n,y:o}=na(e)?e.internals.positionAbsolute:mo(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},sr=(e,t=[0,0])=>{let{x:n,y:o}=na(e)?e.internals.positionAbsolute:mo(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},ia=(e,t)=>dr(ur(Ki(e),Ki(t))),Fl=(e,t,n,o,r,i,a,s)=>{let c=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),u=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(c*u)},go=(e,t)=>Fl(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),aa=e=>tt(e.width)&&tt(e.height)&&tt(e.x)&&tt(e.y),tt=e=>!isNaN(e)&&isFinite(e),sa=(e,t)=>(n,o)=>{},Gn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Yn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?Gn(s,a):s},bn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function $n(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Zb(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=$n(e,n),r=$n(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=$n(e.top??e.y??0,n),r=$n(e.bottom??e.y??0,n),i=$n(e.left??e.x??0,t),a=$n(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Kb(e,t,n,o,r,i){let{x:a,y:s}=bn(e,[t,n,o]),{x:c,y:u}=bn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),l=r-c,d=i-u;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(l),bottom:Math.floor(d)}}var ho=(e,t,n,o,r,i)=>{let a=Zb(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,u=Math.min(s,c),l=Wn(u,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*l,h=n/2-f*l,b=Kb(e,p,h,l,t,n),g={left:Math.min(b.left-a.left,0),top:Math.min(b.top-a.top,0),right:Math.min(b.right-a.right,0),bottom:Math.min(b.bottom-a.bottom,0)};return{x:p-g.left+g.right,y:h-g.top+g.bottom,zoom:l}},qn=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function yn(e){return e!=null&&e!=="parent"}function ut(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function la(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function ca(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function ua(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Vl(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function Xl(e){return{...Qi,...e||{}}}function po(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=nt(e),s=Yn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:c,y:u}=n?Gn(s,t):s;return{xSnapped:c,ySnapped:u,...s}}var fr=e=>({width:e.offsetWidth,height:e.offsetHeight}),da=e=>e?.getRootNode?.()||window?.document,jb=["INPUT","SELECT","TEXTAREA"];function fa(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:jb.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var pa=e=>"clientX"in e,nt=(e,t)=>{let n=pa(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Ml=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...fr(a)}})};function pr({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+r*.375+a*.375+n*.125,u=t*.125+i*.375+s*.375+o*.125,l=Math.abs(c-e),d=Math.abs(u-t);return[c,u,l,d]}function ir(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Nl({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case te.Left:return[t-ir(t-o,i),n];case te.Right:return[t+ir(o-t,i),n];case te.Top:return[t,n-ir(n-r,i)];case te.Bottom:return[t,n+ir(r-n,i)]}}function mr({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,curvature:a=.25}){let[s,c]=Nl({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[u,l]=Nl({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,p,h]=pr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:c,targetControlX:u,targetControlY:l});return[`M${e},${t} C${s},${c} ${u},${l} ${o},${r}`,d,f,p,h]}function ma({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function Gl({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function Yl({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=ur(sr(e),sr(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return go(a,dr(i))>0}var Qb=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,Jb=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),ql=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Qe.error006()),t;let o=n.getEdgeId||Qb,r;return ta(e)?r={...e}:r={...e,id:o(e)},Jb(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function gr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=ma({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var _l={[te.Left]:{x:-1,y:0},[te.Right]:{x:1,y:0},[te.Top]:{x:0,y:-1},[te.Bottom]:{x:0,y:1}},e0=({source:e,sourcePosition:t=te.Bottom,target:n})=>t===te.Left||t===te.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Il=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function t0({source:e,sourcePosition:t=te.Bottom,target:n,targetPosition:o=te.Top,center:r,offset:i,stepPosition:a}){let s=_l[t],c=_l[o],u={x:e.x+s.x*i,y:e.y+s.y*i},l={x:n.x+c.x*i,y:n.y+c.y*i},d=e0({source:u,sourcePosition:t,target:l}),f=d.x!==0?"x":"y",p=d[f],h=[],b,g,y={x:0,y:0},v={x:0,y:0},[,,m,w]=ma({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f==="x"?(b=r.x??u.x+(l.x-u.x)*a,g=r.y??(u.y+l.y)/2):(b=r.x??(u.x+l.x)/2,g=r.y??u.y+(l.y-u.y)*a);let M=[{x:b,y:u.y},{x:b,y:l.y}],I=[{x:u.x,y:g},{x:l.x,y:g}];s[f]===p?h=f==="x"?M:I:h=f==="x"?I:M}else{let M=[{x:u.x,y:l.y}],I=[{x:l.x,y:u.y}];if(f==="x"?h=s.x===p?I:M:h=s.y===p?M:I,t===o){let x=Math.abs(e[f]-n[f]);if(x<=i){let _=Math.min(i-1,i-x);s[f]===p?y[f]=(u[f]>e[f]?-1:1)*_:v[f]=(l[f]>n[f]?-1:1)*_}}if(t!==o){let x=f==="x"?"y":"x",_=s[f]===c[x],N=u[x]>l[x],E=u[x]<l[x];(s[f]===1&&(!_&&N||_&&E)||s[f]!==1&&(!_&&E||_&&N))&&(h=f==="x"?M:I)}let L={x:u.x+y.x,y:u.y+y.y},R={x:l.x+v.x,y:l.y+v.y},T=Math.max(Math.abs(L.x-h[0].x),Math.abs(R.x-h[0].x)),P=Math.max(Math.abs(L.y-h[0].y),Math.abs(R.y-h[0].y));T>=P?(b=(L.x+R.x)/2,g=h[0].y):(b=h[0].x,g=(L.y+R.y)/2)}let S={x:u.x+y.x,y:u.y+y.y},C={x:l.x+v.x,y:l.y+v.y};return[[e,...S.x!==h[0].x||S.y!==h[0].y?[S]:[],...h,...C.x!==h[h.length-1].x||C.y!==h[h.length-1].y?[C]:[],n],b,g,m,w]}function n0(e,t,n,o){let r=Math.min(Il(e,t)/2,Il(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let u=e.x<n.x?-1:1,l=e.y<n.y?1:-1;return`L ${i+r*u},${a}Q ${i},${a} ${i},${a+r*l}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+r*c}Q ${i},${a} ${i+r*s},${a}`}function bo({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,borderRadius:a=5,centerX:s,centerY:c,offset:u=20,stepPosition:l=.5}){let[d,f,p,h,b]=t0({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:c},offset:u,stepPosition:l}),g=`M${d[0].x} ${d[0].y}`;for(let y=1;y<d.length-1;y++)g+=n0(d[y-1],d[y],d[y+1],a);return g+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[g,f,p,h,b]}function Pl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Ul(e){let{sourceNode:t,targetNode:n}=e;if(!Pl(t)||!Pl(n))return null;let o=t.internals.handleBounds||zl(t.handles),r=n.internals.handleBounds||zl(n.handles),i=Rl(o?.source??[],e.sourceHandle),a=Rl(e.connectionMode===Yt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",Qe.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||te.Bottom,c=a?.position||te.Top,u=qt(t,i,s),l=qt(n,a,c);return{sourceX:u.x,sourceY:u.y,targetX:l.x,targetY:l.y,sourcePosition:s,targetPosition:c}}function zl(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function qt(e,t,n=te.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??ut(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case te.Top:return{x:r+a/2,y:i};case te.Right:return{x:r+a,y:i+s/2};case te.Bottom:return{x:r+a/2,y:i+s};case te.Left:return{x:r,y:i+s/2}}}function Rl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function hr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Zl(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let u=hr(c,t);i.has(u)||(a.push({id:u,color:c.color||n,...c}),i.add(u))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var Kl=1e3,o0=10,ga={nodeOrigin:[0,0],nodeExtent:Fn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},r0={...ga,checkEquality:!0};function ha(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function jl(e,t,n){let o=ha(ga,n);for(let r of e.values())if(r.parentId)ya(r,e,t,o);else{let i=mo(r,o.nodeOrigin),a=yn(r.extent)?r.extent:o.nodeExtent,s=hn(i,a,ut(r));r.internals.positionAbsolute=s}}function i0(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function ba(e){return e==="manual"}function br(e,t,n,o={}){let r=ha(r0,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!ba(r.zIndexMode)?Kl:0,c=e.length>0,u=!1;t.clear(),n.clear();for(let l of e){let d=a.get(l.id);if(r.checkEquality&&l===d?.internals.userNode)t.set(l.id,d);else{let f=mo(l,r.nodeOrigin),p=yn(l.extent)?l.extent:r.nodeExtent,h=hn(f,p,ut(l));d={...r.defaults,...l,measured:{width:l.measured?.width,height:l.measured?.height},internals:{positionAbsolute:h,handleBounds:i0(l,d),z:Ql(l,s,r.zIndexMode),userNode:l}},t.set(l.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),l.parentId&&ya(d,t,n,o,i),u||=l.selected??!1}return{nodesInitialized:c,hasSelectedNodes:u}}function a0(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function ya(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=ha(ga,o),u=e.parentId,l=t.get(u);if(!l){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}a0(e,n),r&&!l.parentId&&l.internals.rootParentIndex===void 0&&c==="auto"&&(l.internals.rootParentIndex=++r.i,l.internals.z=l.internals.z+r.i*o0),r&&l.internals.rootParentIndex!==void 0&&(r.i=l.internals.rootParentIndex);let d=i&&!ba(c)?Kl:0,{x:f,y:p,z:h}=s0(e,l,a,s,d,c),{positionAbsolute:b}=e.internals,g=f!==b.x||p!==b.y;(g||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:g?{x:f,y:p}:b,z:h}})}function Ql(e,t,n){let o=tt(e.zIndex)?e.zIndex:0;return ba(n)?o:o+(e.selected?t:0)}function s0(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,c=ut(e),u=mo(e,n),l=yn(e.extent)?hn(u,e.extent,c):u,d=hn({x:a+l.x,y:s+l.y},o,c);e.extent==="parent"&&(d=Wl(d,c,t));let f=Ql(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function yr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??Xn(s),u=ia(c,a.rect);i.set(a.parentId,{expandedRect:u,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let u=s.internals.positionAbsolute,l=ut(s),d=s.origin??o,f=a.x<u.x?Math.round(Math.abs(u.x-a.x)):0,p=a.y<u.y?Math.round(Math.abs(u.y-a.y)):0,h=Math.max(l.width,Math.round(a.width)),b=Math.max(l.height,Math.round(a.height)),g=(h-l.width)*d[0],y=(b-l.height)*d[1];(f>0||p>0||g||y)&&(r.push({id:c,type:"position",position:{x:s.position.x-f+g,y:s.position.y-p+y}}),n.get(c)?.forEach(v=>{e.some(m=>m.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+f,y:v.position.y+p}})})),(l.width<a.width||l.height<a.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:h+(f?d[0]*f-g:0),height:b+(p?d[1]*p-y:0)}})}),r}function Jl(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let u=[],l=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(l.transform),f=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),c=!0;continue}let b=fr(p.nodeElement),g=h.measured.width!==b.width||h.measured.height!==b.height;if(!!(b.width&&b.height&&(g||!h.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),m=yn(h.extent)?h.extent:i,{positionAbsolute:w}=h.internals;if(h.parentId&&h.extent==="parent"){let C=t.get(h.parentId);C&&(w=Wl(w,b,C))}else m&&(w=hn(w,m,b));let S={...h,measured:b,internals:{...h.internals,positionAbsolute:w,handleBounds:{source:Ml("source",p.nodeElement,v,d,h.id),target:Ml("target",p.nodeElement,v,d,h.id)}}};t.set(h.id,S),h.parentId&&ya(S,t,n,{nodeOrigin:r,zIndexMode:a}),c=!0,g&&(u.push({id:h.id,type:"dimensions",dimensions:b}),h.expandParent&&h.parentId&&f.push({id:h.id,parentId:h.parentId,rect:Xn(S,r)}))}}if(f.length>0){let p=yr(f,t,n,r);u.push(...p)}return{changes:u,updatedInternals:c}}async function ec({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function Dl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let c=o.get(a)||new Map;if(o.set(a,c.set(n,t)),i){a=`${r}-${e}-${i}`;let u=o.get(a)||new Map;o.set(a,u.set(n,t))}}function xa(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},u=`${r}-${a}--${i}-${s}`,l=`${i}-${s}--${r}-${a}`;Dl("source",c,l,e,r,a),Dl("target",c,u,e,i,s),t.set(o.id,o)}}function tc(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:tc(n,t):!1}function Tl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function l0(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!tc(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function qi({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&r.push({...c,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function c0({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=Gn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function nc({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,c=!1,u={x:0,y:0},l=null,d=!1,f=null,p=!1,h=!1,b=null;function g({noDragClassName:v,handleSelector:m,domNode:w,isSelectable:S,nodeId:C,nodeClickDistance:k=0}){f=$e(w);function M({x:T,y:P}){let{nodeLookup:x,nodeExtent:_,snapGrid:N,snapToGrid:E,nodeOrigin:z,onNodeDrag:D,onSelectionDrag:F,onError:B,updateNodePositions:V}=t();i={x:T,y:P};let Q=!1,G=s.size>1,K=G&&_?Ki(Vn(s)):null,le=G&&E?c0({dragItems:s,snapGrid:N,x:T,y:P}):null;for(let[W,O]of s){if(!x.has(W))continue;let U={x:T-O.distance.x,y:P-O.distance.y};E&&(U=le?{x:Math.round(U.x+le.x),y:Math.round(U.y+le.y)}:Gn(U,N));let ne=null;if(G&&_&&!O.extent&&K){let{positionAbsolute:X}=O.internals,J=X.x-K.x+_[0][0],oe=X.x+O.measured.width-K.x2+_[1][0],de=X.y-K.y+_[0][1],ye=X.y+O.measured.height-K.y2+_[1][1];ne=[[J,de],[oe,ye]]}let{position:re,positionAbsolute:q}=ra({nodeId:W,nextPosition:U,nodeLookup:x,nodeExtent:ne||_,nodeOrigin:z,onError:B});Q=Q||O.position.x!==re.x||O.position.y!==re.y,O.position=re,O.internals.positionAbsolute=q}if(h=h||Q,!!Q&&(V(s,!0),b&&(o||D||!C&&F))){let[W,O]=qi({nodeId:C,dragItems:s,nodeLookup:x});o?.(b,s,W,O),D?.(b,W,O),C||F?.(b,O)}}async function I(){if(!l)return;let{transform:T,panBy:P,autoPanSpeed:x,autoPanOnNodeDrag:_}=t();if(!_){c=!1,cancelAnimationFrame(a);return}let[N,E]=cr(u,l,x);(N!==0||E!==0)&&(i.x=(i.x??0)-N/T[2],i.y=(i.y??0)-E/T[2],await P({x:N,y:E})&&M(i)),a=requestAnimationFrame(I)}function L(T){let{nodeLookup:P,multiSelectionActive:x,nodesDraggable:_,transform:N,snapGrid:E,snapToGrid:z,selectNodesOnDrag:D,onNodeDragStart:F,onSelectionDragStart:B,unselectNodesAndEdges:V}=t();d=!0,(!D||!S)&&!x&&C&&(P.get(C)?.selected||V()),S&&D&&C&&e?.(C);let Q=po(T.sourceEvent,{transform:N,snapGrid:E,snapToGrid:z,containerBounds:l});if(i=Q,s=l0(P,_,Q,C),s.size>0&&(n||F||!C&&B)){let[G,K]=qi({nodeId:C,dragItems:s,nodeLookup:P});n?.(T.sourceEvent,s,G,K),F?.(T.sourceEvent,G,K),C||B?.(T.sourceEvent,K)}}let R=xi().clickDistance(k).on("start",T=>{let{domNode:P,nodeDragThreshold:x,transform:_,snapGrid:N,snapToGrid:E}=t();l=P?.getBoundingClientRect()||null,p=!1,h=!1,b=T.sourceEvent,x===0&&L(T),i=po(T.sourceEvent,{transform:_,snapGrid:N,snapToGrid:E,containerBounds:l}),u=nt(T.sourceEvent,l)}).on("drag",T=>{let{autoPanOnNodeDrag:P,transform:x,snapGrid:_,snapToGrid:N,nodeDragThreshold:E,nodeLookup:z}=t(),D=po(T.sourceEvent,{transform:x,snapGrid:_,snapToGrid:N,containerBounds:l});if(b=T.sourceEvent,(T.sourceEvent.type==="touchmove"&&T.sourceEvent.touches.length>1||C&&!z.has(C))&&(p=!0),!p){if(!c&&P&&d&&(c=!0,I()),!d){let F=nt(T.sourceEvent,l),B=F.x-u.x,V=F.y-u.y;Math.sqrt(B*B+V*V)>E&&L(T)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&s&&d&&(u=nt(T.sourceEvent,l),M(D))}}).on("end",T=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:P,updateNodePositions:x,onNodeDragStop:_,onSelectionDragStop:N}=t();if(h&&(x(s,!1),h=!1),r||_||!C&&N){let[E,z]=qi({nodeId:C,dragItems:s,nodeLookup:P,dragging:!1});r?.(T.sourceEvent,s,E,z),_?.(T.sourceEvent,E,z),C||N?.(T.sourceEvent,z)}}}).filter(T=>{let P=T.target;return!T.button&&(!v||!Tl(P,`.${v}`,w))&&(!m||Tl(P,m,w))});f.call(R)}function y(){f?.on(".drag",null)}return{update:g,destroy:y}}function u0(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())go(r,Xn(i))>0&&o.push(i);return o}var d0=250;function f0(e,t,n,o){let r=[],i=1/0,a=u0(e,n,t+d0);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of c){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:l,y:d}=qt(s,u,u.position,!0),f=Math.sqrt(Math.pow(l-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...u,x:l,y:d}],i=f):f===i&&r.push({...u,x:l,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(c=>c.type===s)??r[0]}return r[0]}function oc(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(u=>u.id===n):s?.[0])??null;return c&&i?{...c,...qt(a,c,c.position,!0)}:c}function rc(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function p0(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var ic=()=>!0;function m0(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:u,autoPanOnConnect:l,flowId:d,panBy:f,cancelConnection:p,onConnectStart:h,onConnect:b,onConnectEnd:g,isValidConnection:y=ic,onReconnectEnd:v,updateConnection:m,getTransform:w,getFromHandle:S,autoPanSpeed:C,dragThreshold:k=1,handleDomNode:M}){let I=da(e.target),L=0,R,{x:T,y:P}=nt(e),x=rc(i,M),_=s?.getBoundingClientRect(),N=!1;if(!_||!x)return;let E=oc(r,x,o,c,t);if(!E)return;let z=nt(e,_),D=!1,F=null,B=!1,V=null;function Q(){if(!l||!_)return;let[re,q]=cr(z,_,C);f({x:re,y:q}),L=requestAnimationFrame(Q)}let G={...E,nodeId:r,type:x,position:E.position},K=c.get(r),W={inProgress:!0,isValid:null,from:qt(K,G,te.Left,!0),fromHandle:G,fromPosition:G.position,fromNode:K,to:z,toHandle:null,toPosition:Cl[G.position],toNode:null,pointer:z};function O(){N=!0,m(W),h?.(e,{nodeId:r,handleId:o,handleType:x})}k===0&&O();function U(re){if(!N){let{x:ye,y:Ue}=nt(re),Ze=ye-T,et=Ue-P;if(!(Ze*Ze+et*et>k*k))return;O()}if(!S()||!G){ne(re);return}let q=w();z=nt(re,_),R=f0(Yn(z,q,!1,[1,1]),n,c,G),D||(Q(),D=!0);let X=ac(re,{handle:R,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:y,doc:I,lib:u,flowId:d,nodeLookup:c});V=X.handleDomNode,F=X.connection,B=p0(!!R,X.isValid);let J=c.get(r),oe=J?qt(J,G,te.Left,!0):W.from,de={...W,from:oe,isValid:B,to:X.toHandle&&B?bn({x:X.toHandle.x,y:X.toHandle.y},q):z,toHandle:X.toHandle,toPosition:B&&X.toHandle?X.toHandle.position:Cl[G.position],toNode:X.toHandle?c.get(X.toHandle.nodeId):null,pointer:z};m(de),W=de}function ne(re){if(!("touches"in re&&re.touches.length>0)){if(N){(R||V)&&F&&B&&b?.(F);let{inProgress:q,...X}=W,J={...X,toPosition:W.toHandle?W.toPosition:null};g?.(re,J),i&&v?.(re,J)}p(),cancelAnimationFrame(L),D=!1,B=!1,F=null,V=null,I.removeEventListener("mousemove",U),I.removeEventListener("mouseup",ne),I.removeEventListener("touchmove",U),I.removeEventListener("touchend",ne)}}I.addEventListener("mousemove",U),I.addEventListener("mouseup",ne),I.addEventListener("touchmove",U),I.addEventListener("touchend",ne)}function ac(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:u=ic,nodeLookup:l}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=nt(e),b=a.elementFromPoint(p,h),g=b?.classList.contains(`${s}-flow__handle`)?b:f,y={handleDomNode:g,isValid:!1,connection:null,toHandle:null};if(g){let v=rc(void 0,g),m=g.getAttribute("data-nodeid"),w=g.getAttribute("data-handleid"),S=g.classList.contains("connectable"),C=g.classList.contains("connectableend");if(!m||!v)return y;let k={source:d?m:o,sourceHandle:d?w:r,target:d?o:m,targetHandle:d?r:w};y.connection=k;let I=S&&C&&(n===Yt.Strict?d&&v==="source"||!d&&v==="target":m!==o||w!==r);y.isValid=I&&u(k),y.toHandle=oc(m,v,w,l,n,!0)}return y}var xr={onPointerDown:m0,isValid:ac};function sc({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=$e(e);function i({translateExtent:s,width:c,height:u,zoomStep:l=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let h=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let w=n(),S=m.sourceEvent.ctrlKey&&qn()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*l,k=w[2]*Math.pow(2,C*S);t.scaleTo(k)},b=[0,0],g=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(b=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},y=m=>{let w=n();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[S[0]-b[0],S[1]-b[1]];b=S;let k=o()*Math.max(w[2],Math.log(w[2]))*(p?-1:1),M={x:w[0]-C[0]*k,y:w[1]-C[1]*k},I=[[0,0],[c,u]];t.setViewportConstrained({x:M.x,y:M.y,zoom:w[2]},I,s)},v=Yi().on("start",g).on("zoom",d?y:null).on("zoom.wheel",f?h:null);r.call(v,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Xe}}var wr=e=>({x:e.x,y:e.y,zoom:e.k}),Ui=({x:e,y:t,zoom:n})=>fo.translate(e,t).scale(n),Hn=(e,t)=>e.target.closest(`.${t}`),lc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),g0=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Zi=(e,t=0,n=g0,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},cc=e=>{let t=e.ctrlKey&&qn()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function h0({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:u}){return l=>{if(Hn(l,t))return l.ctrlKey&&l.preventDefault(),!1;l.preventDefault(),l.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(l.ctrlKey&&a){let g=Xe(l),y=cc(l),v=d*Math.pow(2,y);o.scaleTo(n,v,g,l);return}let f=l.deltaMode===1?20:1,p=r===At.Vertical?0:l.deltaX*f,h=r===At.Horizontal?0:l.deltaY*f;!qn()&&l.shiftKey&&r!==At.Vertical&&(p=l.deltaY*f,h=0),o.translateBy(n,-(p/d)*i,-(h/d)*i,{internal:!0});let b=wr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(l,b):(e.isPanScrolling=!0,s?.(l,b)),e.panScrollTimeout=setTimeout(()=>{u?.(l,b),e.isPanScrolling=!1},150)}}function b0({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=Hn(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function y0({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=wr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function x0({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&lc(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,wr(i.transform))}}function w0({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&lc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=wr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function v0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:u,connectionInProgress:l}){return d=>{let f=e||t,p=n&&d.ctrlKey,h=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Hn(d,`${u}-flow__node`)||Hn(d,`${u}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||l&&!h||Hn(d,s)&&h||Hn(d,c)&&(!h||r&&h&&!e)||!n&&d.ctrlKey&&h)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&h||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let b=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||h)&&b}}function uc({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},l=e.getBoundingClientRect(),d=[[0,0],[l.width,l.height]];(typeof ResizeObserver<"u"?new ResizeObserver(P=>{let x=P[0];x&&(d=[[0,0],[x.contentRect.width,x.contentRect.height]])}):null)?.observe(e);let p=Yi().extent(()=>d).scaleExtent([t,n]).translateExtent(o),h=$e(e).call(p);w({x:r.x,y:r.y,zoom:Wn(r.zoom,t,n)},[[0,0],[l.width,l.height]],o);let b=h.on("wheel.zoom"),g=h.on("dblclick.zoom");p.wheelDelta(cc);async function y(P,x){return h?new Promise(_=>{p?.interpolate(x?.interpolate==="linear"?Tn:An).transform(Zi(h,x?.duration,x?.ease,()=>_(!0)),P)}):!1}function v({noWheelClassName:P,noPanClassName:x,onPaneContextMenu:_,userSelectionActive:N,panOnScroll:E,panOnDrag:z,panOnScrollMode:D,panOnScrollSpeed:F,preventScrolling:B,zoomOnPinch:V,zoomOnScroll:Q,zoomOnDoubleClick:G,zoomActivationKeyPressed:K,lib:le,onTransformChange:W,connectionInProgress:O,paneClickDistance:U,selectionOnDrag:ne}){N&&!u.isZoomingOrPanning&&m();let re=E&&!K&&!N;p.clickDistance(ne?1/0:!tt(U)||U<0?0:U);let q=re?h0({zoomPanValues:u,noWheelClassName:P,d3Selection:h,d3Zoom:p,panOnScrollMode:D,panOnScrollSpeed:F,zoomOnPinch:V,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):b0({noWheelClassName:P,preventScrolling:B,d3ZoomHandler:b});h.on("wheel.zoom",q,{passive:!1});let X=y0({zoomPanValues:u,onDraggingChange:c,onPanZoomStart:a});p.on("start",X);let J=x0({zoomPanValues:u,panOnDrag:z,onPaneContextMenu:!!_,onPanZoom:i,onTransformChange:W});p.on("zoom",J);let oe=w0({zoomPanValues:u,panOnDrag:z,panOnScroll:E,onPaneContextMenu:_,onPanZoomEnd:s,onDraggingChange:c});p.on("end",oe);let de=v0({zoomActivationKeyPressed:K,panOnDrag:z,zoomOnScroll:Q,panOnScroll:E,zoomOnDoubleClick:G,zoomOnPinch:V,userSelectionActive:N,noPanClassName:x,noWheelClassName:P,lib:le,connectionInProgress:O});p.filter(de),G?h.on("dblclick.zoom",g):h.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function w(P,x,_){let N=Ui(P),E=p?.constrain()(N,x,_);return E&&await y(E),E}async function S(P,x){let _=Ui(P);return await y(_,x),_}function C(P){if(h){let x=Ui(P),_=h.property("__zoom");(_.k!==P.zoom||_.x!==P.x||_.y!==P.y)&&p?.transform(h,x,null,{sync:!0})}}function k(){let P=h?Gi(h.node()):{x:0,y:0,k:1};return{x:P.x,y:P.y,zoom:P.k}}async function M(P,x){return h?new Promise(_=>{p?.interpolate(x?.interpolate==="linear"?Tn:An).scaleTo(Zi(h,x?.duration,x?.ease,()=>_(!0)),P)}):!1}async function I(P,x){return h?new Promise(_=>{p?.interpolate(x?.interpolate==="linear"?Tn:An).scaleBy(Zi(h,x?.duration,x?.ease,()=>_(!0)),P)}):!1}function L(P){p?.scaleExtent(P)}function R(P){p?.translateExtent(P)}function T(P){let x=!tt(P)||P<0?0:P;p?.clickDistance(x)}return{update:v,destroy:m,setViewport:S,setViewportConstrained:w,getViewport:k,scaleTo:M,scaleBy:I,setScaleExtent:L,setTranslateExtent:R,syncViewport:C,setClickDistance:T}}var Ut;(function(e){e.Line="line",e.Handle="handle"})(Ut||(Ut={}));function k0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function Al(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Xt(e,t){return Math.max(0,t-e)}function Gt(e,t){return Math.max(0,e-t)}function ar(e,t,n){return Math.max(0,t-e,e-n)}function Ol(e,t){return e?!t:t}function S0(e,t,n,o,r,i,a,s){let{affectsX:c,affectsY:u}=t,{isHorizontal:l,isVertical:d}=t,f=l&&d,{xSnapped:p,ySnapped:h}=n,{minWidth:b,maxWidth:g,minHeight:y,maxHeight:v}=o,{x:m,y:w,width:S,height:C,aspectRatio:k}=e,M=Math.floor(l?p-e.pointerX:0),I=Math.floor(d?h-e.pointerY:0),L=S+(c?-M:M),R=C+(u?-I:I),T=-i[0]*S,P=-i[1]*C,x=ar(L,b,g),_=ar(R,y,v);if(a){let z=0,D=0;c&&M<0?z=Xt(m+M+T,a[0][0]):!c&&M>0&&(z=Gt(m+L+T,a[1][0])),u&&I<0?D=Xt(w+I+P,a[0][1]):!u&&I>0&&(D=Gt(w+R+P,a[1][1])),x=Math.max(x,z),_=Math.max(_,D)}if(s){let z=0,D=0;c&&M>0?z=Gt(m+M,s[0][0]):!c&&M<0&&(z=Xt(m+L,s[1][0])),u&&I>0?D=Gt(w+I,s[0][1]):!u&&I<0&&(D=Xt(w+R,s[1][1])),x=Math.max(x,z),_=Math.max(_,D)}if(r){if(l){let z=ar(L/k,y,v)*k;if(x=Math.max(x,z),a){let D=0;!c&&!u||c&&!u&&f?D=Gt(w+P+L/k,a[1][1])*k:D=Xt(w+P+(c?M:-M)/k,a[0][1])*k,x=Math.max(x,D)}if(s){let D=0;!c&&!u||c&&!u&&f?D=Xt(w+L/k,s[1][1])*k:D=Gt(w+(c?M:-M)/k,s[0][1])*k,x=Math.max(x,D)}}if(d){let z=ar(R*k,b,g)/k;if(_=Math.max(_,z),a){let D=0;!c&&!u||u&&!c&&f?D=Gt(m+R*k+T,a[1][0])/k:D=Xt(m+(u?I:-I)*k+T,a[0][0])/k,_=Math.max(_,D)}if(s){let D=0;!c&&!u||u&&!c&&f?D=Xt(m+R*k,s[1][0])/k:D=Gt(m+(u?I:-I)*k,s[0][0])/k,_=Math.max(_,D)}}}I=I+(I<0?_:-_),M=M+(M<0?x:-x),r&&(f?L>R*k?I=(Ol(c,u)?-M:M)/k:M=(Ol(c,u)?-I:I)*k:l?(I=M/k,u=c):(M=I*k,c=u));let N=c?m+M:m,E=u?w+I:w;return{width:S+(c?-M:M),height:C+(u?-I:I),x:i[0]*M*(c?-1:1)+N,y:i[1]*I*(u?-1:1)+E}}var dc={width:0,height:0,x:0,y:0},C0={...dc,pointerX:0,pointerY:0,aspectRatio:1};function E0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[o-s,r-c],[o+i-s,r+a-c]]}function fc({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=$e(e),a={controlDirection:Al("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:l,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:h,onResizeEnd:b,shouldResize:g}){let y={...dc},v={...C0};a={boundaries:l,resizeDirection:f,keepAspectRatio:d,controlDirection:Al(u)};let m,w=null,S=[],C,k,M,I=!1,L=xi().on("start",R=>{let{nodeLookup:T,transform:P,snapGrid:x,snapToGrid:_,nodeOrigin:N,paneDomNode:E}=n();if(m=T.get(t),!m)return;w=E?.getBoundingClientRect()??null;let{xSnapped:z,ySnapped:D}=po(R.sourceEvent,{transform:P,snapGrid:x,snapToGrid:_,containerBounds:w});y={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},v={...y,pointerX:z,pointerY:D,aspectRatio:y.width/y.height},C=void 0,k=yn(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=T.get(m.parentId)),C&&m.extent==="parent"&&(k=[[0,0],[C.measured.width,C.measured.height]]),S=[],M=void 0;for(let[F,B]of T)if(B.parentId===t&&(S.push({id:F,position:{...B.position},extent:B.extent}),B.extent==="parent"||B.expandParent)){let V=E0(B,m,B.origin??N);M?M=[[Math.min(V[0][0],M[0][0]),Math.min(V[0][1],M[0][1])],[Math.max(V[1][0],M[1][0]),Math.max(V[1][1],M[1][1])]]:M=V}p?.(R,{...y})}).on("drag",R=>{let{transform:T,snapGrid:P,snapToGrid:x,nodeOrigin:_}=n(),N=po(R.sourceEvent,{transform:T,snapGrid:P,snapToGrid:x,containerBounds:w}),E=[];if(!m)return;let{x:z,y:D,width:F,height:B}=y,V={},Q=m.origin??_,{width:G,height:K,x:le,y:W}=S0(v,a.controlDirection,N,a.boundaries,a.keepAspectRatio,Q,k,M),O=G!==F,U=K!==B,ne=le!==z&&O,re=W!==D&&U;if(!ne&&!re&&!O&&!U)return;if((ne||re||Q[0]===1||Q[1]===1)&&(V.x=ne?le:y.x,V.y=re?W:y.y,y.x=V.x,y.y=V.y,S.length>0)){let oe=le-z,de=W-D;for(let ye of S)ye.position={x:ye.position.x-oe+Q[0]*(G-F),y:ye.position.y-de+Q[1]*(K-B)},E.push(ye)}if((O||U)&&(V.width=O&&(!a.resizeDirection||a.resizeDirection==="horizontal")?G:y.width,V.height=U&&(!a.resizeDirection||a.resizeDirection==="vertical")?K:y.height,y.width=V.width,y.height=V.height),C&&m.expandParent){let oe=Q[0]*(V.width??0);V.x&&V.x<oe&&(y.x=oe,v.x=v.x-(V.x-oe));let de=Q[1]*(V.height??0);V.y&&V.y<de&&(y.y=de,v.y=v.y-(V.y-de))}let q=k0({width:y.width,prevWidth:F,height:y.height,prevHeight:B,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),X={...y,direction:q};g?.(R,X)!==!1&&(I=!0,h?.(R,X),o(V,E))}).on("end",R=>{I&&(b?.(R,{...y}),r?.({...y}),I=!1)});i.call(L)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var Ec=ys(require("react"),1),Mc=ys(wc(),1);var kc={},vc=e=>{let t,n=new Set,o=(l,d)=>{let f=typeof l=="function"?l(t):l;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(h=>h(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>u,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(kc.env?kc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(o,r,c);return c},Sc=e=>e?vc(e):vc;var{useDebugValue:V0}=Ec.default,{useSyncExternalStoreWithSelector:X0}=Mc.default,G0=e=>e;function va(e,t=G0,n){let o=X0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return V0(o),o}var Cc=(e,t)=>{let n=Sc(e),o=(r,i=t)=>va(n,r,i);return Object.assign(o,n),o},Nc=(e,t)=>e?Cc(e,t):Cc;function Se(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var Y0=require("react-dom"),Er=(0,$.createContext)(null),q0=Er.Provider,eu=Qe.error001("react");function pe(e,t){let n=(0,$.useContext)(Er);if(n===null)throw new Error(eu);return va(n,e,t)}function xe(){let e=(0,$.useContext)(Er);if(e===null)throw new Error(eu);return(0,$.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var _c={display:"none"},U0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},tu="react-flow__node-desc",nu="react-flow__edge-desc",Z0="react-flow__aria-live",K0=e=>e.ariaLiveMessage,j0=e=>e.ariaLabelConfig;function Q0({rfId:e}){let t=pe(K0);return(0,H.jsx)("div",{id:`${Z0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:U0,children:t})}function J0({rfId:e,disableKeyboardA11y:t}){let n=pe(j0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{id:`${tu}-${e}`,style:_c,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,H.jsx)("div",{id:`${nu}-${e}`,style:_c,children:n["edge.a11yDescription.default"]}),!t&&(0,H.jsx)(Q0,{rfId:e})]})}var Mr=(0,$.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,H.jsx)("div",{className:Me(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});Mr.displayName="Panel";var Ic="https://reactflow.dev?utm_source=attribution";function ey({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,H.jsx)(Mr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Ic}`,children:(0,H.jsx)("a",{href:Ic,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var ty=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},kr=e=>e.id;function ny(e,t){return Se(e.selectedNodes.map(kr),t.selectedNodes.map(kr))&&Se(e.selectedEdges.map(kr),t.selectedEdges.map(kr))}function oy({onSelectionChange:e}){let t=xe(),{selectedNodes:n,selectedEdges:o}=pe(ty,ny);return(0,$.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var ry=e=>!!e.onSelectionChangeHandlers;function iy({onSelectionChange:e}){let t=pe(ry);return e||t?(0,H.jsx)(oy,{onSelectionChange:e}):null}var ou=[0,0],ay={x:0,y:0,zoom:1},sy=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Pc=[...sy,"rfId"],ly=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),zc={translateExtent:Fn,nodeOrigin:ou,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function cy(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=pe(ly,Se),u=xe();(0,$.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{l.current=zc,s()}),[]);let l=(0,$.useRef)(zc);return(0,$.useEffect)(()=>{for(let d of Pc){let f=e[d],p=l.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?u.setState({ariaLabelConfig:Xl(f)}):d==="fitView"?u.setState({fitViewQueued:f}):d==="fitViewOptions"?u.setState({fitViewOptions:f}):u.setState({[d]:f})))}l.current=e},Pc.map(d=>e[d])),null}function Rc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function uy(e){let[t,n]=(0,$.useState)(e==="system"?null:e);return(0,$.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Rc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Rc()?.matches?"dark":"light"}var Dc=typeof document<"u"?document:null;function yo(e=null,t={target:Dc,actInsideInputWithModifier:!0}){let[n,o]=(0,$.useState)(!1),r=(0,$.useRef)(!1),i=(0,$.useRef)(new Set([])),[a,s]=(0,$.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),l=u.reduce((d,f)=>d.concat(...f),[]);return[u,l]}return[[],[]]},[e]);return(0,$.useEffect)(()=>{let c=t?.target??Dc,u=t?.actInsideInputWithModifier??!0;if(e!==null){let l=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!u)&&fa(p))return!1;let b=Ac(p.code,s);if(i.current.add(p[b]),Tc(a,i.current,!1)){let g=p.composedPath?.()?.[0]||p.target,y=g?.nodeName==="BUTTON"||g?.nodeName==="A";t.preventDefault!==!1&&(r.current||!y)&&p.preventDefault(),o(!0)}},d=p=>{let h=Ac(p.code,s);Tc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[h]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",l),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",l),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function Tc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function Ac(e,t){return t.includes(e)?"code":"key"}var dy=()=>{let e=xe();return(0,$.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=ho(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),u={x:t.x-s,y:t.y-c},l=n.snapGrid??r,d=n.snapToGrid??i;return Yn(u,o,d,l)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=bn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function ru(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)fy(c,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function fy(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function iu(e,t){return ru(e,t)}function au(e,t){return ru(e,t)}function xn(e,t){return{id:e,type:"select",selected:t}}function Zn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(xn(i.id,a)))}return o}function Oc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Lc(e){return{id:e.id,type:"remove"}}var py=sa("React Flow","https://reactflow.dev/");function my(e,t,n={}){return ql(e,t,{...n,onError:n.onError??py})}var $c=e=>Ll(e),gy=e=>ta(e);function su(e){return(0,$.forwardRef)(e)}var lu=typeof window<"u"?$.useLayoutEffect:$.useEffect;function Hc(e){let[t,n]=(0,$.useState)(BigInt(0)),[o]=(0,$.useState)(()=>hy(()=>n(r=>r+BigInt(1))));return lu(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function hy(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var cu=(0,$.createContext)(null);function by({children:e}){let t=xe(),n=(0,$.useCallback)(s=>{let{nodes:c=[],setNodes:u,hasDefaultNodes:l,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),b=c;for(let y of s)b=typeof y=="function"?y(b):y;let g=Oc({items:b,lookup:f});for(let y of h.values())g=y(g);l&&u(b),g.length>0?d?.(g):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:y,nodes:v,setNodes:m}=t.getState();y&&m(v)})},[]),o=Hc(n),r=(0,$.useCallback)(s=>{let{edges:c=[],setEdges:u,hasDefaultEdges:l,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let h of s)p=typeof h=="function"?h(p):h;l?u(p):d&&d(Oc({items:p,lookup:f}))},[]),i=Hc(r),a=(0,$.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,H.jsx)(cu.Provider,{value:a,children:e})}function yy(){let e=(0,$.useContext)(cu);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var xy=e=>!!e.panZoom;function Ea(){let e=dy(),t=xe(),n=yy(),o=pe(xy),r=(0,$.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),h=$c(d)?d:f.get(d.id),b=h.parentId?ca(h.position,h.measured,h.parentId,f,p):h.position,g={...h,position:b,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return Xn(g)},u=(d,f,p={replace:!1})=>{a(h=>h.map(b=>{if(b.id===d){let g=typeof f=="function"?f(b):f;return p.replace&&$c(g)?g:{...b,...g}}return b}))},l=(d,f,p={replace:!1})=>{s(h=>h.map(b=>{if(b.id===d){let g=typeof f=="function"?f(b):f;return p.replace&&gy(g)?g:{...b,...g}}return b}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[h,b,g]=p;return{nodes:d.map(y=>({...y})),edges:f.map(y=>({...y})),viewport:{x:h,y:b,zoom:g}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:h,onNodesDelete:b,onEdgesDelete:g,triggerNodeChanges:y,triggerEdgeChanges:v,onDelete:m,onBeforeDelete:w}=t.getState(),{nodes:S,edges:C}=await Bl({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:h,onBeforeDelete:w}),k=C.length>0,M=S.length>0;if(k){let I=C.map(Lc);g?.(C),v(I)}if(M){let I=S.map(Lc);b?.(S),y(I)}return(M||k)&&m?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(d,f=!0,p)=>{let h=aa(d),b=h?d:c(d),g=p!==void 0;return b?(p||t.getState().nodes).filter(y=>{let v=t.getState().nodeLookup.get(y.id);if(v&&!h&&(y.id===d.id||!v.internals.positionAbsolute))return!1;let m=Xn(g?y:v),w=go(m,b);return f&&w>0||w>=m.width*m.height||w>=b.width*b.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let b=aa(d)?d:c(d);if(!b)return!1;let g=go(b,f);return p&&g>0||g>=f.width*f.height||g>=b.width*b.height},updateNode:u,updateNodeData:(d,f,p={replace:!1})=>{u(d,h=>{let b=typeof f=="function"?f(h):f;return p.replace?{...h,data:b}:{...h,data:{...h.data,...b}}},p)},updateEdge:l,updateEdgeData:(d,f,p={replace:!1})=>{l(d,h=>{let b=typeof f=="function"?f(h):f;return p.replace?{...h,data:b}:{...h,data:{...h.data,...b}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return oa(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??Vl();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,$.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Bc=e=>e.selected,wy=typeof window<"u"?window:void 0;function vy({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=xe(),{deleteElements:o}=Ea(),r=yo(e,{actInsideInputWithModifier:!1}),i=yo(t,{target:wy});(0,$.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(Bc),edges:a.filter(Bc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,$.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function ky(e){let t=xe();(0,$.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=fr(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Qe.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var Nr={position:"absolute",width:"100%",height:"100%",top:0,left:0},Sy=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Cy({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=At.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:u,minZoom:l,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:h,noWheelClassName:b,noPanClassName:g,onViewportChange:y,isControlledViewport:v,paneClickDistance:m,selectionOnDrag:w}){let S=xe(),C=(0,$.useRef)(null),{userSelectionActive:k,lib:M,connectionInProgress:I}=pe(Sy,Se),L=yo(f),R=(0,$.useRef)();ky(C);let T=(0,$.useCallback)(P=>{y?.({x:P[0],y:P[1],zoom:P[2]}),v||S.setState({transform:P})},[y,v]);return(0,$.useEffect)(()=>{if(C.current){R.current=uc({domNode:C.current,minZoom:l,maxZoom:d,translateExtent:u,viewport:c,onDraggingChange:N=>S.setState(E=>E.paneDragging===N?E:{paneDragging:N}),onPanZoomStart:(N,E)=>{let{onViewportChangeStart:z,onMoveStart:D}=S.getState();D?.(N,E),z?.(E)},onPanZoom:(N,E)=>{let{onViewportChange:z,onMove:D}=S.getState();D?.(N,E),z?.(E)},onPanZoomEnd:(N,E)=>{let{onViewportChangeEnd:z,onMoveEnd:D}=S.getState();D?.(N,E),z?.(E)}});let{x:P,y:x,zoom:_}=R.current.getViewport();return S.setState({panZoom:R.current,transform:[P,x,_],domNode:C.current.closest(".react-flow")}),()=>{R.current?.destroy()}}},[]),(0,$.useEffect)(()=>{R.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:L,preventScrolling:p,noPanClassName:g,userSelectionActive:k,noWheelClassName:b,lib:M,onTransformChange:T,connectionInProgress:I,selectionOnDrag:w,paneClickDistance:m})},[e,t,n,o,r,i,a,s,L,p,g,k,b,M,T,I,w,m]),(0,H.jsx)("div",{className:"react-flow__renderer",ref:C,style:Nr,children:h})}var Ey=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function My(){let{userSelectionActive:e,userSelectionRect:t}=pe(Ey,Se);return e&&t?(0,H.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var ka=(e,t)=>n=>{n.target===t.current&&e?.(n)},Ny=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function _y({isSelecting:e,selectionKeyPressed:t,selectionMode:n=gn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:u,onPaneContextMenu:l,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:h,children:b}){let g=(0,$.useRef)(0),y=xe(),{userSelectionActive:v,elementsSelectable:m,dragging:w,panBy:S,autoPanSpeed:C}=pe(Ny,Se),k=m&&(e||v),M=(0,$.useRef)(null),I=(0,$.useRef)(),L=(0,$.useRef)(new Set),R=(0,$.useRef)(new Set),T=(0,$.useRef)(!1),P=(0,$.useRef)(!1),x=(0,$.useRef)({x:0,y:0}),_=(0,$.useRef)(!1),N=O=>{if(P.current||T.current||y.getState().connection.inProgress){P.current=!1,T.current=!1;return}u?.(O),y.getState().resetSelectedElements(),y.setState({nodesSelectionActive:!1})},E=O=>{if(Array.isArray(o)&&o?.includes(2)){O.preventDefault();return}l?.(O)},z=d?O=>d(O):void 0,D=O=>{P.current&&(O.stopPropagation(),P.current=!1)},F=O=>{let{domNode:U,transform:ne}=y.getState();if(I.current=U?.getBoundingClientRect(),!I.current)return;let re=O.target===M.current;if(!re&&!!O.target.closest(".nokey")||!e||!(a&&re||t)||O.button!==0||!O.isPrimary)return;O.target?.setPointerCapture?.(O.pointerId),P.current=!1;let{x:J,y:oe}=nt(O.nativeEvent,I.current),de=Yn({x:J,y:oe},ne);y.setState({userSelectionRect:{width:0,height:0,startX:de.x,startY:de.y,x:J,y:oe}}),re||(O.stopPropagation(),O.preventDefault())};function B(O,U){let{userSelectionRect:ne}=y.getState();if(!ne)return;let{transform:re,nodeLookup:q,edgeLookup:X,connectionLookup:J,triggerNodeChanges:oe,triggerEdgeChanges:de,defaultEdgeOptions:ye}=y.getState(),Ue={x:ne.startX,y:ne.startY},{x:Ze,y:et}=bn(Ue,re),it={startX:Ue.x,startY:Ue.y,x:O<Ze?O:Ze,y:U<et?U:et,width:Math.abs(O-Ze),height:Math.abs(U-et)},on=L.current,Et=R.current;L.current=new Set(lr(q,it,re,n===gn.Partial,!0).map(Oe=>Oe.id)),R.current=new Set;let Mt=ye?.selectable??!0;for(let Oe of L.current){let at=J.get(Oe);if(at)for(let{edgeId:Ke}of at.values()){let dt=X.get(Ke);dt&&(dt.selectable??Mt)&&R.current.add(Ke)}}if(!ua(on,L.current)){let Oe=Zn(q,L.current,!0);oe(Oe)}if(!ua(Et,R.current)){let Oe=Zn(X,R.current);de(Oe)}y.setState({userSelectionRect:it,userSelectionActive:!0,nodesSelectionActive:!1})}function V(){if(!r||!I.current)return;let[O,U]=cr(x.current,I.current,C);S({x:O,y:U}).then(ne=>{if(!P.current||!ne){g.current=requestAnimationFrame(V);return}let{x:re,y:q}=x.current;B(re,q),g.current=requestAnimationFrame(V)})}let Q=()=>{cancelAnimationFrame(g.current),g.current=0,_.current=!1};(0,$.useEffect)(()=>()=>Q(),[]);let G=O=>{let{userSelectionRect:U,transform:ne,resetSelectedElements:re}=y.getState();if(!I.current||!U)return;let{x:q,y:X}=nt(O.nativeEvent,I.current);x.current={x:q,y:X};let J=bn({x:U.startX,y:U.startY},ne);if(!P.current){let oe=t?0:i;if(Math.hypot(q-J.x,X-J.y)<=oe)return;re(),s?.(O)}P.current=!0,_.current||(V(),_.current=!0),B(q,X)},K=O=>{if(!k){O.target===M.current&&y.getState().connection.inProgress&&(T.current=!0);return}O.button===0&&(O.target?.releasePointerCapture?.(O.pointerId),!v&&O.target===M.current&&y.getState().userSelectionRect&&N?.(O),y.setState({userSelectionActive:!1,userSelectionRect:null}),P.current&&(c?.(O),y.setState({nodesSelectionActive:L.current.size>0})),Q())},le=O=>{O.target?.releasePointerCapture?.(O.pointerId),Q()},W=o===!0||Array.isArray(o)&&o.includes(0);return(0,H.jsxs)("div",{className:Me(["react-flow__pane",{draggable:W,dragging:w,selection:e}]),onClick:k?void 0:ka(N,M),onContextMenu:ka(E,M),onWheel:ka(z,M),onPointerEnter:k?void 0:f,onPointerMove:k?G:p,onPointerUp:K,onPointerCancel:k?le:void 0,onPointerDownCapture:k?F:void 0,onClickCapture:k?D:void 0,onPointerLeave:h,ref:M,style:Nr,children:[b,(0,H.jsx)(My,{})]})}function Ca({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),u=s.get(e);if(!u){c?.("012",Qe.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&a)&&(i({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function uu({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=xe(),[c,u]=(0,$.useState)(!1),l=(0,$.useRef)();return(0,$.useEffect)(()=>{if(!t)return l.current=nc({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{Ca({id:d,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{l.current?.destroy(),l.current=void 0}},[t,s,e]),(0,$.useEffect)(()=>{t||!e.current||!l.current||l.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),c}var Iy=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function du(){let e=xe();return(0,$.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:u,nodeOrigin:l}=e.getState(),d=new Map,f=Iy(a),p=r?i[0]:5,h=r?i[1]:5,b=n.direction.x*p*n.factor,g=n.direction.y*h*n.factor;for(let[,y]of u){if(!f(y))continue;let v={x:y.internals.positionAbsolute.x+b,y:y.internals.positionAbsolute.y+g};r&&(v=Gn(v,i));let{position:m,positionAbsolute:w}=ra({nodeId:y.id,nextPosition:v,nodeLookup:u,nodeExtent:o,nodeOrigin:l,onError:s});y.position=m,y.internals.positionAbsolute=w,d.set(y.id,y)}c(d)},[])}var Ma=(0,$.createContext)(null),Py=Ma.Provider;Ma.Consumer;var fu=()=>(0,$.useContext)(Ma),zy=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),pu=(0,$.createContext)(null);function Ry({children:e}){let t=pe(zy,Se);return(0,H.jsx)(pu.Provider,{value:t,children:e})}function Dy(){let e=(0,$.useContext)(pu);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var Ty={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Ay=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:c,isValid:u}=a;if(!s&&!r)return Ty;let l=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:l,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Yt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:l&&u}};function Oy({type:e="source",position:t=te.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:u,onMouseDown:l,onTouchStart:d,...f},p){let h=a||null,b=e==="target",g=xe(),y=fu(),{connectOnClick:v,noPanClassName:m,rfId:w}=Dy(),{connectingFrom:S,connectingTo:C,clickConnecting:k,isPossibleEndHandle:M,connectionInProcess:I,clickConnectionInProcess:L,valid:R}=pe(Ay(y,h,e),Se);y||g.getState().onError?.("010",Qe.error010());let T=_=>{let{defaultEdgeOptions:N,onConnect:E,hasDefaultEdges:z}=g.getState(),D={...N,..._};if(z){let{edges:F,setEdges:B,onError:V}=g.getState();B(my(D,F,{onError:V}))}E?.(D),s?.(D)},P=_=>{if(!y)return;let N=pa(_.nativeEvent);if(r&&(N&&_.button===0||!N)){let E=g.getState();xr.onPointerDown(_.nativeEvent,{handleDomNode:_.currentTarget,autoPanOnConnect:E.autoPanOnConnect,connectionMode:E.connectionMode,connectionRadius:E.connectionRadius,domNode:E.domNode,nodeLookup:E.nodeLookup,lib:E.lib,isTarget:b,handleId:h,nodeId:y,flowId:E.rfId,panBy:E.panBy,cancelConnection:E.cancelConnection,onConnectStart:E.onConnectStart,onConnectEnd:(...z)=>g.getState().onConnectEnd?.(...z),updateConnection:E.updateConnection,onConnect:T,isValidConnection:n||((...z)=>g.getState().isValidConnection?.(...z)??!0),getTransform:()=>g.getState().transform,getFromHandle:()=>g.getState().connection.fromHandle,autoPanSpeed:E.autoPanSpeed,dragThreshold:E.connectionDragThreshold})}N?l?.(_):d?.(_)},x=_=>{let{onClickConnectStart:N,onClickConnectEnd:E,connectionClickStartHandle:z,connectionMode:D,isValidConnection:F,lib:B,rfId:V,nodeLookup:Q,connection:G}=g.getState();if(!y||!z&&!r)return;if(!z){N?.(_.nativeEvent,{nodeId:y,handleId:h,handleType:e}),g.setState({connectionClickStartHandle:{nodeId:y,type:e,id:h}});return}let K=da(_.target),le=n||F,{connection:W,isValid:O}=xr.isValid(_.nativeEvent,{handle:{nodeId:y,id:h,type:e},connectionMode:D,fromNodeId:z.nodeId,fromHandleId:z.id||null,fromType:z.type,isValidConnection:le,flowId:V,doc:K,lib:B,nodeLookup:Q});O&&W&&T(W);let U=structuredClone(G);delete U.inProgress,U.toPosition=U.toHandle?U.toHandle.position:null,E?.(_,U),g.setState({connectionClickStartHandle:null})};return(0,H.jsx)("div",{"data-handleid":h,"data-nodeid":y,"data-handlepos":t,"data-id":`${w}-${y}-${h}-${e}`,className:Me(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!b,target:b,connectable:o,connectablestart:r,connectableend:i,clickconnecting:k,connectingfrom:S,connectingto:C,valid:R,connectionindicator:o&&(!I||M)&&(I||L?i:r)}]),onMouseDown:P,onTouchStart:P,onClick:v?x:void 0,ref:p,...f,children:c})}var wn=(0,$.memo)(su(Oy));function Ly({data:e,isConnectable:t,sourcePosition:n=te.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[e?.label,(0,H.jsx)(wn,{type:"source",position:n,isConnectable:t})]})}function $y({data:e,isConnectable:t,targetPosition:n=te.Top,sourcePosition:o=te.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label,(0,H.jsx)(wn,{type:"source",position:o,isConnectable:t})]})}function Hy(){return null}function By({data:e,isConnectable:t,targetPosition:n=te.Top}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label]})}var Cr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Wc={input:Ly,default:$y,output:By,group:Hy};function Wy(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Fy=e=>{let{width:t,height:n,x:o,y:r}=Vn(e.nodeLookup,{filter:i=>!!i.selected});return{width:tt(t)?t:null,height:tt(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function Vy({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=xe(),{width:r,height:i,transformString:a,userSelectionActive:s}=pe(Fy,Se),c=du(),u=(0,$.useRef)(null);(0,$.useEffect)(()=>{n||u.current?.focus({preventScroll:!0})},[n]);let l=!s&&r!==null&&i!==null;if(uu({nodeRef:u,disabled:!l}),!l)return null;let d=e?p=>{let h=o.getState().nodes.filter(b=>b.selected);e(p,h)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(Cr,p.key)&&(p.preventDefault(),c({direction:Cr[p.key],factor:p.shiftKey?4:1}))};return(0,H.jsx)("div",{className:Me(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,H.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var Fc=typeof window<"u"?window:void 0,Xy=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function mu({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:u,selectionOnDrag:l,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:b,zoomActivationKeyCode:g,elementsSelectable:y,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:w,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:M,autoPanOnSelection:I,defaultViewport:L,translateExtent:R,minZoom:T,maxZoom:P,preventScrolling:x,onSelectionContextMenu:_,noWheelClassName:N,noPanClassName:E,disableKeyboardA11y:z,onViewportChange:D,isControlledViewport:F}){let{nodesSelectionActive:B,userSelectionActive:V}=pe(Xy,Se),Q=yo(u,{target:Fc}),G=yo(b,{target:Fc}),K=G||M,le=G||w,W=l&&K!==!0,O=Q||V||W;return vy({deleteKeyCode:c,multiSelectionKeyCode:h}),(0,H.jsx)(Cy,{onPaneContextMenu:i,elementsSelectable:y,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:le,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:!Q&&K,defaultViewport:L,translateExtent:R,minZoom:T,maxZoom:P,zoomActivationKeyCode:g,preventScrolling:x,noWheelClassName:N,noPanClassName:E,onViewportChange:D,isControlledViewport:F,paneClickDistance:s,selectionOnDrag:W,children:(0,H.jsxs)(_y,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:K,autoPanOnSelection:I,isSelecting:!!O,selectionMode:d,selectionKeyPressed:Q,paneClickDistance:s,selectionOnDrag:W,children:[e,B&&(0,H.jsx)(Vy,{onSelectionContextMenu:_,noPanClassName:E,disableKeyboardA11y:z})]})})}mu.displayName="FlowRenderer";var Gy=(0,$.memo)(mu),Yy=e=>t=>e?lr(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function qy(e){return pe((0,$.useCallback)(Yy(e),[e]),Se)}var Uy=e=>e.updateNodeInternals;function Zy(){let e=pe(Uy),[t]=(0,$.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,$.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Ky({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=xe(),i=(0,$.useRef)(null),a=(0,$.useRef)(null),s=(0,$.useRef)(e.sourcePosition),c=(0,$.useRef)(e.targetPosition),u=(0,$.useRef)(t),l=n&&!!e.internals.handleBounds;return(0,$.useEffect)(()=>{i.current&&!e.hidden&&(!l||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[l,e.hidden]),(0,$.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,$.useEffect)(()=>{if(i.current){let d=u.current!==t,f=s.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(u.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function jy({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:u,nodesFocusable:l,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:h,rfId:b,nodeTypes:g,nodeClickDistance:y,onError:v}){let{node:m,internals:w,isParent:S}=pe(O=>{let U=O.nodeLookup.get(e),ne=O.parentLookup.has(e);return{node:U,internals:U.internals,isParent:ne}},Se),C=m.type||"default",k=g?.[C]||Wc[C];k===void 0&&(v?.("003",Qe.error003(C)),C="default",k=g?.default||Wc.default);let M=!!(m.draggable||s&&typeof m.draggable>"u"),I=!!(m.selectable||c&&typeof m.selectable>"u"),L=!!(m.connectable||u&&typeof m.connectable>"u"),R=!!(m.focusable||l&&typeof m.focusable>"u"),T=xe(),P=la(m),x=Ky({node:m,nodeType:C,hasDimensions:P,resizeObserver:d}),_=uu({nodeRef:x,disabled:m.hidden||!M,noDragClassName:f,handleSelector:m.dragHandle,nodeId:e,isSelectable:I,nodeClickDistance:y}),N=du();if(m.hidden)return null;let E=ut(m),z=Wy(m),D=I||M||t||n||o||r,F=n?O=>n(O,{...w.userNode}):void 0,B=o?O=>o(O,{...w.userNode}):void 0,V=r?O=>r(O,{...w.userNode}):void 0,Q=i?O=>i(O,{...w.userNode}):void 0,G=a?O=>a(O,{...w.userNode}):void 0,K=O=>{let{selectNodesOnDrag:U,nodeDragThreshold:ne}=T.getState();I&&(!U||!M||ne>0)&&Ca({id:e,store:T,nodeRef:x}),t&&t(O,{...w.userNode})},le=O=>{if(!(fa(O.nativeEvent)||h)){if(ji.includes(O.key)&&I){let U=O.key==="Escape";Ca({id:e,store:T,unselect:U,nodeRef:x})}else if(M&&m.selected&&Object.prototype.hasOwnProperty.call(Cr,O.key)){O.preventDefault();let{ariaLabelConfig:U}=T.getState();T.setState({ariaLiveMessage:U["node.a11yDescription.ariaLiveMessage"]({direction:O.key.replace("Arrow","").toLowerCase(),x:~~w.positionAbsolute.x,y:~~w.positionAbsolute.y})}),N({direction:Cr[O.key],factor:O.shiftKey?4:1})}}},W=()=>{if(h||!x.current?.matches(":focus-visible"))return;let{transform:O,width:U,height:ne,autoPanOnNodeFocus:re,setCenter:q}=T.getState();if(!re)return;lr(new Map([[e,m]]),{x:0,y:0,width:U,height:ne},O,!0).length>0||q(m.position.x+E.width/2,m.position.y+E.height/2,{zoom:O[2]})};return(0,H.jsx)("div",{className:Me(["react-flow__node",`react-flow__node-${C}`,{[p]:M},m.className,{selected:m.selected,selectable:I,parent:S,draggable:M,dragging:_}]),ref:x,style:{zIndex:w.z,transform:`translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:P?"visible":"hidden",...m.style,...z},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:F,onMouseMove:B,onMouseLeave:V,onContextMenu:Q,onClick:K,onDoubleClick:G,onKeyDown:R?le:void 0,tabIndex:R?0:void 0,onFocus:R?W:void 0,role:m.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${tu}-${b}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,H.jsx)(Py,{value:e,children:(0,H.jsx)(k,{id:e,data:m.data,type:C,positionAbsoluteX:w.positionAbsolute.x,positionAbsoluteY:w.positionAbsolute.y,selected:m.selected??!1,selectable:I,draggable:M,deletable:m.deletable??!0,isConnectable:L,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:_,dragHandle:m.dragHandle,zIndex:w.z,parentId:m.parentId,...E})})})}var Qy=(0,$.memo)(jy),Jy=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function gu(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=pe(Jy,Se),i=qy(e.onlyRenderVisibleElements),a=Zy();return(0,H.jsx)("div",{className:"react-flow__nodes",style:Nr,children:i.map(s=>(0,H.jsx)(Qy,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}gu.displayName="NodeRenderer";var ex=(0,$.memo)(gu);function tx(e){return pe((0,$.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&Yl({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),Se)}var nx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,H.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},ox=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,H.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Vc={[Bn.Arrow]:nx,[Bn.ArrowClosed]:ox};function rx(e){let t=xe();return(0,$.useMemo)(()=>Object.prototype.hasOwnProperty.call(Vc,e)?Vc[e]:(t.getState().onError?.("009",Qe.error009(e)),null),[e])}var ix=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=rx(t);return c?(0,H.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,H.jsx)(c,{color:n,strokeWidth:a})}):null},hu=({defaultColor:e,rfId:t})=>{let n=pe(i=>i.edges),o=pe(i=>i.defaultEdgeOptions),r=(0,$.useMemo)(()=>Zl(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,H.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,H.jsx)("defs",{children:r.map(i=>(0,H.jsx)(ix,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};hu.displayName="MarkerDefinitions";var ax=(0,$.memo)(hu);function bu({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:u,...l}){let[d,f]=(0,$.useState)({x:1,y:0,width:0,height:0}),p=Me(["react-flow__edge-textwrapper",u]),h=(0,$.useRef)(null);return(0,$.useEffect)(()=>{if(h.current){let b=h.current.getBBox();f({x:b.x,y:b.y,width:b.width,height:b.height})}},[n]),n?(0,H.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...l,children:[r&&(0,H.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,H.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:h,style:o,children:n}),c]}):null}bu.displayName="EdgeText";var sx=(0,$.memo)(bu);function _r({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:u=20,...l}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("path",{...l,d:e,fill:"none",className:Me(["react-flow__edge-path",l.className])}),u?(0,H.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&tt(t)&&tt(n)?(0,H.jsx)(sx,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function Xc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===te.Left||e===te.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function yu({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top}){let[a,s]=Xc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,u]=Xc({pos:i,x1:o,y1:r,x2:e,y2:t}),[l,d,f,p]=pr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:u});return[`M${e},${t} C${a},${s} ${c},${u} ${o},${r}`,l,d,f,p]}function xu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:g,interactionWidth:y})=>{let[v,m,w]=yu({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),S=e.isInternal?void 0:t;return(0,H.jsx)(_r,{id:S,path:v,labelX:m,labelY:w,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:g,interactionWidth:y})})}var lx=xu({isInternal:!1}),wu=xu({isInternal:!0});lx.displayName="SimpleBezierEdge";wu.displayName="SimpleBezierEdgeInternal";function vu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,sourcePosition:p=te.Bottom,targetPosition:h=te.Top,markerEnd:b,markerStart:g,pathOptions:y,interactionWidth:v})=>{let[m,w,S]=bo({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:h,borderRadius:y?.borderRadius,offset:y?.offset,stepPosition:y?.stepPosition}),C=e.isInternal?void 0:t;return(0,H.jsx)(_r,{id:C,path:m,labelX:w,labelY:S,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:b,markerStart:g,interactionWidth:v})})}var ku=vu({isInternal:!1}),Su=vu({isInternal:!0});ku.displayName="SmoothStepEdge";Su.displayName="SmoothStepEdgeInternal";function Cu(e){return(0,$.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,H.jsx)(ku,{...n,id:o,pathOptions:(0,$.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var cx=Cu({isInternal:!1}),Eu=Cu({isInternal:!0});cx.displayName="StepEdge";Eu.displayName="StepEdgeInternal";function Mu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:b})=>{let[g,y,v]=gr({sourceX:n,sourceY:o,targetX:r,targetY:i}),m=e.isInternal?void 0:t;return(0,H.jsx)(_r,{id:m,path:g,labelX:y,labelY:v,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:b})})}var ux=Mu({isInternal:!1}),Nu=Mu({isInternal:!0});ux.displayName="StraightEdge";Nu.displayName="StraightEdgeInternal";function _u(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=te.Bottom,targetPosition:s=te.Top,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:g,pathOptions:y,interactionWidth:v})=>{let[m,w,S]=mr({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:y?.curvature}),C=e.isInternal?void 0:t;return(0,H.jsx)(_r,{id:C,path:m,labelX:w,labelY:S,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:b,markerStart:g,interactionWidth:v})})}var dx=_u({isInternal:!1}),Iu=_u({isInternal:!0});dx.displayName="BezierEdge";Iu.displayName="BezierEdgeInternal";var Gc={default:Iu,straight:Nu,step:Eu,smoothstep:Su,simplebezier:wu},Yc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},fx=(e,t,n)=>n===te.Left?e-t:n===te.Right?e+t:e,px=(e,t,n)=>n===te.Top?e-t:n===te.Bottom?e+t:e,qc="react-flow__edgeupdater";function Uc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,H.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:Me([qc,`${qc}-${s}`]),cx:fx(t,o,e),cy:px(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function mx({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:u,onReconnectStart:l,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let h=xe(),b=(w,S)=>{if(w.button!==0)return;let{autoPanOnConnect:C,domNode:k,connectionMode:M,connectionRadius:I,lib:L,onConnectStart:R,cancelConnection:T,nodeLookup:P,rfId:x,panBy:_,updateConnection:N}=h.getState(),E=S.type==="target",z=(B,V)=>{f(!1),d?.(B,n,S.type,V)},D=B=>u?.(n,B),F=(B,V)=>{f(!0),l?.(w,n,S.type),R?.(B,V)};xr.onPointerDown(w.nativeEvent,{autoPanOnConnect:C,connectionMode:M,connectionRadius:I,domNode:k,handleId:S.id,nodeId:S.nodeId,nodeLookup:P,isTarget:E,edgeUpdaterType:S.type,lib:L,flowId:x,cancelConnection:T,panBy:_,isValidConnection:(...B)=>h.getState().isValidConnection?.(...B)??!0,onConnect:D,onConnectStart:F,onConnectEnd:(...B)=>h.getState().onConnectEnd?.(...B),onReconnectEnd:z,updateConnection:N,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:w.currentTarget})},g=w=>b(w,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),y=w=>b(w,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),m=()=>p(!1);return(0,H.jsxs)(H.Fragment,{children:[(e===!0||e==="source")&&(0,H.jsx)(Uc,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:g,onMouseEnter:v,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,H.jsx)(Uc,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:y,onMouseEnter:v,onMouseOut:m,type:"target"})]})}function gx({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:h,edgeTypes:b,noPanClassName:g,onError:y,disableKeyboardA11y:v}){let m=pe(q=>q.edgeLookup.get(e)),w=pe(q=>q.defaultEdgeOptions);m=w?{...w,...m}:m;let S=m.type||"default",C=b?.[S]||Gc[S];C===void 0&&(y?.("011",Qe.error011(S)),S="default",C=b?.default||Gc.default);let k=!!(m.focusable||t&&typeof m.focusable>"u"),M=typeof d<"u"&&(m.reconnectable||n&&typeof m.reconnectable>"u"),I=!!(m.selectable||o&&typeof m.selectable>"u"),L=(0,$.useRef)(null),[R,T]=(0,$.useState)(!1),[P,x]=(0,$.useState)(!1),_=xe(),{zIndex:N=m.zIndex,sourceX:E,sourceY:z,targetX:D,targetY:F,sourcePosition:B,targetPosition:V}=pe((0,$.useCallback)(q=>{let X=q.nodeLookup.get(m.source),J=q.nodeLookup.get(m.target);if(!X||!J)return Yc;let oe=Ul({id:e,sourceNode:X,targetNode:J,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:q.connectionMode,onError:y}),de=Gl({selected:m.selected,zIndex:m.zIndex,sourceNode:X,targetNode:J,elevateOnSelect:q.elevateEdgesOnSelect,zIndexMode:q.zIndexMode});return{...oe||Yc,zIndex:de}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex]),Se),Q=(0,$.useMemo)(()=>m.markerStart?`url('#${hr(m.markerStart,h)}')`:void 0,[m.markerStart,h]),G=(0,$.useMemo)(()=>m.markerEnd?`url('#${hr(m.markerEnd,h)}')`:void 0,[m.markerEnd,h]);if(m.hidden||E===null||z===null||D===null||F===null)return null;let K=q=>{let{addSelectedEdges:X,unselectNodesAndEdges:J,multiSelectionActive:oe}=_.getState();I&&(_.setState({nodesSelectionActive:!1}),m.selected&&oe?(J({nodes:[],edges:[m]}),L.current?.blur()):X([e])),r&&r(q,m)},le=i?q=>{i(q,{...m})}:void 0,W=a?q=>{a(q,{...m})}:void 0,O=s?q=>{s(q,{...m})}:void 0,U=c?q=>{c(q,{...m})}:void 0,ne=u?q=>{u(q,{...m})}:void 0,re=q=>{if(!v&&ji.includes(q.key)&&I){let{unselectNodesAndEdges:X,addSelectedEdges:J}=_.getState();q.key==="Escape"?(L.current?.blur(),X({edges:[m]})):J([e])}};return(0,H.jsx)("svg",{style:{zIndex:N},children:(0,H.jsxs)("g",{className:Me(["react-flow__edge",`react-flow__edge-${S}`,m.className,g,{selected:m.selected,animated:m.animated,inactive:!I&&!r,updating:R,selectable:I}]),onClick:K,onDoubleClick:le,onContextMenu:W,onMouseEnter:O,onMouseMove:U,onMouseLeave:ne,onKeyDown:k?re:void 0,tabIndex:k?0:void 0,role:m.ariaRole??(k?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":k?`${nu}-${h}`:void 0,ref:L,...m.domAttributes,children:[!P&&(0,H.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:I,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:E,sourceY:z,targetX:D,targetY:F,sourcePosition:B,targetPosition:V,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Q,markerEnd:G,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),M&&(0,H.jsx)(mx,{edge:m,isReconnectable:M,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:E,sourceY:z,targetX:D,targetY:F,sourcePosition:B,targetPosition:V,setUpdateHover:T,setReconnecting:x})]})})}var hx=(0,$.memo)(gx),bx=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Pu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:u,onEdgeClick:l,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:b}){let{edgesFocusable:g,edgesReconnectable:y,elementsSelectable:v,onError:m}=pe(bx,Se),w=tx(t);return(0,H.jsxs)("div",{className:"react-flow__edges",children:[(0,H.jsx)(ax,{defaultColor:e,rfId:n}),w.map(S=>(0,H.jsx)(hx,{id:S,edgesFocusable:g,edgesReconnectable:y,elementsSelectable:v,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,onClick:l,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,rfId:n,onError:m,edgeTypes:o,disableKeyboardA11y:b},S))]})}Pu.displayName="EdgeRenderer";var yx=(0,$.memo)(Pu),Zc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function xx({children:e}){let t=xe(),n=(0,$.useRef)(null),[o]=(0,$.useState)(()=>t.getState().transform);return lu(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=Zc(a)))};return i(),t.subscribe(i)},[t]),(0,H.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:Zc(o)},children:e})}function wx(e){let t=Ea(),n=(0,$.useRef)(!1);(0,$.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var vx=e=>e.panZoom?.syncViewport;function kx(e){let t=pe(vx),n=xe();return(0,$.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Kc(e){return e.connection.inProgress?{...e.connection,to:Yn(e.connection.to,e.transform)}:{...e.connection}}function Sx(e){return e?n=>{let o=Kc(n);return e(o)}:Kc}function Cx(e){let t=Sx(e);return pe(t,Se)}var Ex=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Mx({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:c}=pe(Ex,Se);return!(i&&r&&c)?null:(0,H.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,H.jsx)("g",{className:Me(["react-flow__connection",ea(s)]),children:(0,H.jsx)(zu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var zu=({style:e,type:t=gt.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:u,toNode:l,toHandle:d,toPosition:f,pointer:p}=Cx();if(!r)return;if(n)return(0,H.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:u.x,toY:u.y,fromPosition:c,toPosition:f,connectionStatus:ea(o),toNode:l,toHandle:d,pointer:p});let h="",b={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:u.x,targetY:u.y,targetPosition:f};switch(t){case gt.Bezier:[h]=mr(b);break;case gt.SimpleBezier:[h]=yu(b);break;case gt.Step:[h]=bo({...b,borderRadius:0});break;case gt.SmoothStep:[h]=bo(b);break;default:[h]=gr(b)}return(0,H.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};zu.displayName="ConnectionLine";var Nx={};function jc(e=Nx){let t=(0,$.useRef)(e),n=xe();(0,$.useEffect)(()=>{},[e])}function _x(){let e=xe(),t=(0,$.useRef)(!1);(0,$.useEffect)(()=>{},[])}function Ru({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:b,connectionLineComponent:g,connectionLineContainerStyle:y,selectionKeyCode:v,selectionOnDrag:m,selectionMode:w,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:k,deleteKeyCode:M,onlyRenderVisibleElements:I,elementsSelectable:L,defaultViewport:R,translateExtent:T,minZoom:P,maxZoom:x,preventScrolling:_,defaultMarkerColor:N,zoomOnScroll:E,zoomOnPinch:z,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:B,zoomOnDoubleClick:V,panOnDrag:Q,autoPanOnSelection:G,onPaneClick:K,onPaneMouseEnter:le,onPaneMouseMove:W,onPaneMouseLeave:O,onPaneScroll:U,onPaneContextMenu:ne,paneClickDistance:re,nodeClickDistance:q,onEdgeContextMenu:X,onEdgeMouseEnter:J,onEdgeMouseMove:oe,onEdgeMouseLeave:de,reconnectRadius:ye,onReconnect:Ue,onReconnectStart:Ze,onReconnectEnd:et,noDragClassName:it,noWheelClassName:on,noPanClassName:Et,disableKeyboardA11y:Mt,nodeExtent:Oe,rfId:at,viewport:Ke,onViewportChange:dt,nodesDraggable:rn}){return jc(e),jc(t),_x(),wx(n),kx(Ke),(0,H.jsx)(Gy,{onPaneClick:K,onPaneMouseEnter:le,onPaneMouseMove:W,onPaneMouseLeave:O,onPaneContextMenu:ne,onPaneScroll:U,paneClickDistance:re,deleteKeyCode:M,selectionKeyCode:v,selectionOnDrag:m,selectionMode:w,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:k,elementsSelectable:L,zoomOnScroll:E,zoomOnPinch:z,zoomOnDoubleClick:V,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:B,panOnDrag:Q,autoPanOnSelection:G,defaultViewport:R,translateExtent:T,minZoom:P,maxZoom:x,onSelectionContextMenu:d,preventScrolling:_,noDragClassName:it,noWheelClassName:on,noPanClassName:Et,disableKeyboardA11y:Mt,onViewportChange:dt,isControlledViewport:!!Ke,children:(0,H.jsxs)(xx,{children:[(0,H.jsx)(yx,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:Ue,onReconnectStart:Ze,onReconnectEnd:et,onlyRenderVisibleElements:I,onEdgeContextMenu:X,onEdgeMouseEnter:J,onEdgeMouseMove:oe,onEdgeMouseLeave:de,reconnectRadius:ye,defaultMarkerColor:N,noPanClassName:Et,disableKeyboardA11y:Mt,rfId:at}),(0,H.jsx)(Mx,{style:b,type:h,component:g,containerStyle:y}),(0,H.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,H.jsx)(ex,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,nodeClickDistance:q,onlyRenderVisibleElements:I,noPanClassName:Et,noDragClassName:it,disableKeyboardA11y:Mt,nodeExtent:Oe,rfId:at,nodesDraggable:rn}),(0,H.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Ru.displayName="GraphView";var Ix=(0,$.memo)(Ru),Px=sa("React Flow","https://reactflow.dev/"),Qc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:u=2,nodeOrigin:l,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,h=new Map,b=new Map,g=new Map,y=o??t??[],v=n??e??[],m=l??[0,0],w=d??Fn;xa(b,g,y);let{nodesInitialized:S}=br(v,p,h,{nodeOrigin:m,nodeExtent:w,zIndexMode:f}),C=[0,0,1];if(a&&r&&i){let k=Vn(p,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:M,y:I,zoom:L}=ho(k,r,i,c,u,s?.padding??.1);C=[M,I,L]}return{rfId:"1",width:r??0,height:i??0,transform:C,nodes:v,nodesInitialized:S,nodeLookup:p,parentLookup:h,edges:y,edgeLookup:g,connectionLookup:b,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:u,translateExtent:Fn,nodeExtent:w,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Yt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...Ji},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Px,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Qi,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},zx=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f})=>Nc((p,h)=>{async function b(){let{nodeLookup:g,panZoom:y,fitViewOptions:v,fitViewResolver:m,width:w,height:S,minZoom:C,maxZoom:k}=h();y&&(await Hl({nodes:g,width:w,height:S,panZoom:y,minZoom:C,maxZoom:k},v),m?.resolve(!0),p({fitViewResolver:null}))}return{...Qc({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:g=>{let{nodeLookup:y,parentLookup:v,nodeOrigin:m,elevateNodesOnSelect:w,fitViewQueued:S,zIndexMode:C,nodesSelectionActive:k}=h(),{nodesInitialized:M,hasSelectedNodes:I}=br(g,y,v,{nodeOrigin:m,nodeExtent:d,elevateNodesOnSelect:w,checkEquality:!0,zIndexMode:C}),L=k&&I;S&&M?(b(),p({nodes:g,nodesInitialized:M,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:L})):p({nodes:g,nodesInitialized:M,nodesSelectionActive:L})},setEdges:g=>{let{connectionLookup:y,edgeLookup:v}=h();xa(y,v,g),p({edges:g})},setDefaultNodesAndEdges:(g,y)=>{if(g){let{setNodes:v}=h();v(g),p({hasDefaultNodes:!0})}if(y){let{setEdges:v}=h();v(y),p({hasDefaultEdges:!0})}},updateNodeInternals:g=>{let{triggerNodeChanges:y,nodeLookup:v,parentLookup:m,domNode:w,nodeOrigin:S,nodeExtent:C,debug:k,fitViewQueued:M,zIndexMode:I}=h(),{changes:L,updatedInternals:R}=Jl(g,v,m,w,S,C,I);R&&(jl(v,m,{nodeOrigin:S,nodeExtent:C,zIndexMode:I}),M?(b(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),L?.length>0&&(k&&console.log("React Flow: trigger node changes",L),y?.(L)))},updateNodePositions:(g,y=!1)=>{let v=[],m=[],{nodeLookup:w,triggerNodeChanges:S,connection:C,updateConnection:k,onNodesChangeMiddlewareMap:M}=h();for(let[I,L]of g){let R=w.get(I),T=!!(R?.expandParent&&R?.parentId&&L?.position),P={id:I,type:"position",position:T?{x:Math.max(0,L.position.x),y:Math.max(0,L.position.y)}:L.position,dragging:y};if(R&&C.inProgress&&C.fromNode.id===R.id){let x=qt(R,C.fromHandle,te.Left,!0);k({...C,from:x})}T&&R.parentId&&v.push({id:I,parentId:R.parentId,rect:{...L.internals.positionAbsolute,width:L.measured.width??0,height:L.measured.height??0}}),m.push(P)}if(v.length>0){let{parentLookup:I,nodeOrigin:L}=h(),R=yr(v,w,I,L);m.push(...R)}for(let I of M.values())m=I(m);S(m)},triggerNodeChanges:g=>{let{onNodesChange:y,setNodes:v,nodes:m,hasDefaultNodes:w,debug:S}=h();if(g?.length){if(w){let C=iu(g,m);v(C)}S&&console.log("React Flow: trigger node changes",g),y?.(g)}},triggerEdgeChanges:g=>{let{onEdgesChange:y,setEdges:v,edges:m,hasDefaultEdges:w,debug:S}=h();if(g?.length){if(w){let C=au(g,m);v(C)}S&&console.log("React Flow: trigger edge changes",g),y?.(g)}},addSelectedNodes:g=>{let{multiSelectionActive:y,edgeLookup:v,nodeLookup:m,triggerNodeChanges:w,triggerEdgeChanges:S}=h();if(y){let C=g.map(k=>xn(k,!0));w(C);return}w(Zn(m,new Set([...g]),!0)),S(Zn(v))},addSelectedEdges:g=>{let{multiSelectionActive:y,edgeLookup:v,nodeLookup:m,triggerNodeChanges:w,triggerEdgeChanges:S}=h();if(y){let C=g.map(k=>xn(k,!0));S(C);return}S(Zn(v,new Set([...g]))),w(Zn(m,new Set,!0))},unselectNodesAndEdges:({nodes:g,edges:y}={})=>{let{edges:v,nodes:m,nodeLookup:w,triggerNodeChanges:S,triggerEdgeChanges:C}=h(),k=g||m,M=y||v,I=[];for(let R of k){if(!R.selected)continue;let T=w.get(R.id);T&&(T.selected=!1),I.push(xn(R.id,!1))}let L=[];for(let R of M)R.selected&&L.push(xn(R.id,!1));S(I),C(L)},setMinZoom:g=>{let{panZoom:y,maxZoom:v}=h();y?.setScaleExtent([g,v]),p({minZoom:g})},setMaxZoom:g=>{let{panZoom:y,minZoom:v}=h();y?.setScaleExtent([v,g]),p({maxZoom:g})},setTranslateExtent:g=>{h().panZoom?.setTranslateExtent(g),p({translateExtent:g})},resetSelectedElements:()=>{let{edges:g,nodes:y,triggerNodeChanges:v,triggerEdgeChanges:m,elementsSelectable:w}=h();if(!w)return;let S=y.reduce((k,M)=>M.selected?[...k,xn(M.id,!1)]:k,[]),C=g.reduce((k,M)=>M.selected?[...k,xn(M.id,!1)]:k,[]);v(S),m(C)},setNodeExtent:g=>{let{nodes:y,nodeLookup:v,parentLookup:m,nodeOrigin:w,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:k}=h();g[0][0]===C[0][0]&&g[0][1]===C[0][1]&&g[1][0]===C[1][0]&&g[1][1]===C[1][1]||(br(y,v,m,{nodeOrigin:w,nodeExtent:g,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:k}),p({nodeExtent:g}))},panBy:g=>{let{transform:y,width:v,height:m,panZoom:w,translateExtent:S}=h();return ec({delta:g,panZoom:w,transform:y,translateExtent:S,width:v,height:m})},setCenter:async(g,y,v)=>{let{width:m,height:w,maxZoom:S,panZoom:C}=h();if(!C)return!1;let k=typeof v?.zoom<"u"?v.zoom:S;return await C.setViewport({x:m/2-g*k,y:w/2-y*k,zoom:k},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Ji}})},updateConnection:g=>{p({connection:g})},reset:()=>p({...Qc()})}},Object.is);function Rx({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f,children:p}){let[h]=(0,$.useState)(()=>zx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:u,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:l,nodeExtent:d,zIndexMode:f}));return(0,H.jsx)(q0,{value:h,children:(0,H.jsx)(by,{children:(0,H.jsx)(Ry,{children:p})})})}function Dx({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:u,maxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,$.useContext)(Er)?(0,H.jsx)(H.Fragment,{children:e}):(0,H.jsx)(Rx,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:u,initialMaxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var Tx={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function Ax({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:u,onMove:l,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:h,onConnectEnd:b,onClickConnectStart:g,onClickConnectEnd:y,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:k,onNodeDrag:M,onNodeDragStop:I,onNodesDelete:L,onEdgesDelete:R,onDelete:T,onSelectionChange:P,onSelectionDragStart:x,onSelectionDrag:_,onSelectionDragStop:N,onSelectionContextMenu:E,onSelectionStart:z,onSelectionEnd:D,onBeforeDelete:F,connectionMode:B,connectionLineType:V=gt.Bezier,connectionLineStyle:Q,connectionLineComponent:G,connectionLineContainerStyle:K,deleteKeyCode:le="Backspace",selectionKeyCode:W="Shift",selectionOnDrag:O=!1,selectionMode:U=gn.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:re=qn()?"Meta":"Control",zoomActivationKeyCode:q=qn()?"Meta":"Control",snapToGrid:X,snapGrid:J,onlyRenderVisibleElements:oe=!1,selectNodesOnDrag:de,nodesDraggable:ye,autoPanOnNodeFocus:Ue,nodesConnectable:Ze,nodesFocusable:et,nodeOrigin:it=ou,edgesFocusable:on,edgesReconnectable:Et,elementsSelectable:Mt=!0,defaultViewport:Oe=ay,minZoom:at=.5,maxZoom:Ke=2,translateExtent:dt=Fn,preventScrolling:rn=!0,nodeExtent:Mn,defaultMarkerColor:Bt="#b1b1b7",zoomOnScroll:Nn=!0,zoomOnPinch:Le=!0,panOnScroll:No=!1,panOnScrollSpeed:_o=.5,panOnScrollMode:Io=At.Free,zoomOnDoubleClick:jr=!0,panOnDrag:Qr=!0,onPaneClick:Jr,onPaneMouseEnter:ei,onPaneMouseMove:ti,onPaneMouseLeave:ni,onPaneScroll:oi,onPaneContextMenu:ri,paneClickDistance:ii=1,nodeClickDistance:an=0,children:Nt,onReconnect:Po,onReconnectStart:_t,onReconnectEnd:It,onEdgeContextMenu:ai,onEdgeDoubleClick:zo,onEdgeMouseEnter:_n,onEdgeMouseMove:Ro,onEdgeMouseLeave:si,reconnectRadius:li=10,onNodesChange:A,onEdgesChange:Y,noDragClassName:j="nodrag",noWheelClassName:ae="nowheel",noPanClassName:ke="nopan",fitView:Wt,fitViewOptions:Ft,connectOnClick:Rp,attributionPosition:Dp,proOptions:Tp,defaultEdgeOptions:Ap,elevateNodesOnSelect:Op=!0,elevateEdgesOnSelect:Lp=!1,disableKeyboardA11y:ds=!1,autoPanOnConnect:$p,autoPanOnNodeDrag:Hp,autoPanOnSelection:Bp=!0,autoPanSpeed:Wp,connectionRadius:Fp,isValidConnection:Vp,onError:Xp,style:Gp,id:fs,nodeDragThreshold:Yp,connectionDragThreshold:qp,viewport:Up,onViewportChange:Zp,width:Kp,height:jp,colorMode:Qp="light",debug:Jp,onScroll:ps,ariaLabelConfig:em,zIndexMode:ms="basic",...tm},nm){let ci=fs||"1",om=uy(Qp),rm=(0,$.useCallback)(gs=>{gs.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),ps?.(gs)},[ps]);return(0,H.jsx)("div",{"data-testid":"rf__wrapper",...tm,onScroll:rm,style:{...Gp,...Tx},ref:nm,className:Me(["react-flow",r,om]),id:fs,role:"application",children:(0,H.jsxs)(Dx,{nodes:e,edges:t,width:Kp,height:jp,fitView:Wt,fitViewOptions:Ft,minZoom:at,maxZoom:Ke,nodeOrigin:it,nodeExtent:Mn,zIndexMode:ms,children:[(0,H.jsx)(cy,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:b,onClickConnectStart:g,onClickConnectEnd:y,nodesDraggable:ye,autoPanOnNodeFocus:Ue,nodesConnectable:Ze,nodesFocusable:et,edgesFocusable:on,edgesReconnectable:Et,elementsSelectable:Mt,elevateNodesOnSelect:Op,elevateEdgesOnSelect:Lp,minZoom:at,maxZoom:Ke,nodeExtent:Mn,onNodesChange:A,onEdgesChange:Y,snapToGrid:X,snapGrid:J,connectionMode:B,translateExtent:dt,connectOnClick:Rp,defaultEdgeOptions:Ap,fitView:Wt,fitViewOptions:Ft,onNodesDelete:L,onEdgesDelete:R,onDelete:T,onNodeDragStart:k,onNodeDrag:M,onNodeDragStop:I,onSelectionDrag:_,onSelectionDragStart:x,onSelectionDragStop:N,onMove:l,onMoveStart:d,onMoveEnd:f,noPanClassName:ke,nodeOrigin:it,rfId:ci,autoPanOnConnect:$p,autoPanOnNodeDrag:Hp,autoPanSpeed:Wp,onError:Xp,connectionRadius:Fp,isValidConnection:Vp,selectNodesOnDrag:de,nodeDragThreshold:Yp,connectionDragThreshold:qp,onBeforeDelete:F,debug:Jp,ariaLabelConfig:em,zIndexMode:ms}),(0,H.jsx)(Ix,{onInit:u,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:i,edgeTypes:a,connectionLineType:V,connectionLineStyle:Q,connectionLineComponent:G,connectionLineContainerStyle:K,selectionKeyCode:W,selectionOnDrag:O,selectionMode:U,deleteKeyCode:le,multiSelectionKeyCode:re,panActivationKeyCode:ne,zoomActivationKeyCode:q,onlyRenderVisibleElements:oe,defaultViewport:Oe,translateExtent:dt,minZoom:at,maxZoom:Ke,preventScrolling:rn,zoomOnScroll:Nn,zoomOnPinch:Le,zoomOnDoubleClick:jr,panOnScroll:No,panOnScrollSpeed:_o,panOnScrollMode:Io,panOnDrag:Qr,autoPanOnSelection:Bp,onPaneClick:Jr,onPaneMouseEnter:ei,onPaneMouseMove:ti,onPaneMouseLeave:ni,onPaneScroll:oi,onPaneContextMenu:ri,paneClickDistance:ii,nodeClickDistance:an,onSelectionContextMenu:E,onSelectionStart:z,onSelectionEnd:D,onReconnect:Po,onReconnectStart:_t,onReconnectEnd:It,onEdgeContextMenu:ai,onEdgeDoubleClick:zo,onEdgeMouseEnter:_n,onEdgeMouseMove:Ro,onEdgeMouseLeave:si,reconnectRadius:li,defaultMarkerColor:Bt,noDragClassName:j,noWheelClassName:ae,noPanClassName:ke,rfId:ci,disableKeyboardA11y:ds,nodeExtent:Mn,viewport:Up,onViewportChange:Zp,nodesDraggable:ye}),(0,H.jsx)(iy,{onSelectionChange:P}),Nt,(0,H.jsx)(ey,{proOptions:Tp,position:Dp}),(0,H.jsx)(J0,{rfId:ci,disableKeyboardA11y:ds})]})})}var Du=su(Ax);function Tu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>iu(r,i)),[]);return[t,n,o]}function Au(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>au(r,i)),[]);return[t,n,o]}var J1=Qe.error014();function Ox({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,H.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Me(["react-flow__background-pattern",n,o])})}function Lx({radius:e,className:t}){return(0,H.jsx)("circle",{cx:e,cy:e,r:e,className:Me(["react-flow__background-pattern","dots",t])})}var ht;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(ht||(ht={}));var $x={[ht.Dots]:1,[ht.Lines]:1,[ht.Cross]:6},Hx=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Ou({id:e,variant:t=ht.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:c,className:u,patternClassName:l}){let d=(0,$.useRef)(null),{transform:f,patternId:p}=pe(Hx,Se),h=o||$x[t],b=t===ht.Dots,g=t===ht.Cross,y=Array.isArray(n)?n:[n,n],v=[y[0]*f[2]||1,y[1]*f[2]||1],m=h*f[2],w=Array.isArray(i)?i:[i,i],S=g?[m,m]:v,C=[w[0]*f[2]||1+S[0]/2,w[1]*f[2]||1+S[1]/2],k=`${p}${e||""}`;return(0,H.jsxs)("svg",{className:Me(["react-flow__background",u]),style:{...c,...Nr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,H.jsx)("pattern",{id:k,x:f[0]%v[0],y:f[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:b?(0,H.jsx)(Lx,{radius:m/2,className:l}):(0,H.jsx)(Ox,{dimensions:S,lineWidth:r,variant:t,className:l})}),(0,H.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${k})`})]})}Ou.displayName="Background";var Lu=(0,$.memo)(Ou);function Bx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,H.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Wx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,H.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Fx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,H.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Vx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Xx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Sr({children:e,className:t,...n}){return(0,H.jsx)("button",{type:"button",className:Me(["react-flow__controls-button",t]),...n,children:e})}var Gx=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function $u({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:u,children:l,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let h=xe(),{isInteractive:b,minZoomReached:g,maxZoomReached:y,ariaLabelConfig:v}=pe(Gx,Se),{zoomIn:m,zoomOut:w,fitView:S}=Ea(),C=()=>{m(),i?.()},k=()=>{w(),a?.()},M=()=>{S(r),s?.()},I=()=>{h.setState({nodesDraggable:!b,nodesConnectable:!b,elementsSelectable:!b}),c?.(!b)};return(0,H.jsxs)(Mr,{className:Me(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",u]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Sr,{onClick:C,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:y,children:(0,H.jsx)(Bx,{})}),(0,H.jsx)(Sr,{onClick:k,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:g,children:(0,H.jsx)(Wx,{})})]}),n&&(0,H.jsx)(Sr,{className:"react-flow__controls-fitview",onClick:M,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,H.jsx)(Fx,{})}),o&&(0,H.jsx)(Sr,{className:"react-flow__controls-interactive",onClick:I,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:b?(0,H.jsx)(Xx,{}):(0,H.jsx)(Vx,{})}),l]})}$u.displayName="Controls";var ek=(0,$.memo)($u);function Yx({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:c,className:u,borderRadius:l,shapeRendering:d,selected:f,onClick:p}){let{background:h,backgroundColor:b}=i||{},g=a||h||b;return(0,H.jsx)("rect",{className:Me(["react-flow__minimap-node",{selected:f},u]),x:t,y:n,rx:l,ry:l,width:o,height:r,style:{fill:g,stroke:s,strokeWidth:c},shapeRendering:d,onClick:p?y=>p(y,e):void 0})}var qx=(0,$.memo)(Yx),Ux=e=>e.nodes.map(t=>t.id),Sa=e=>e instanceof Function?e:()=>e;function Zx({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=qx,onClick:a}){let s=pe(Ux,Se),c=Sa(t),u=Sa(e),l=Sa(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,H.jsx)(H.Fragment,{children:s.map(f=>(0,H.jsx)(jx,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:u,nodeClassNameFunc:l,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function Kx({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:u,x:l,y:d,width:f,height:p}=pe(h=>{let b=h.nodeLookup.get(e);if(!b)return{node:void 0,x:0,y:0,width:0,height:0};let g=b.internals.userNode,{x:y,y:v}=b.internals.positionAbsolute,{width:m,height:w}=ut(g);return{node:g,x:y,y:v,width:m,height:w}},Se);return!u||u.hidden||!la(u)?null:(0,H.jsx)(s,{x:l,y:d,width:f,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:r,strokeColor:n(u),strokeWidth:i,shapeRendering:a,onClick:c,id:u.id})}var jx=(0,$.memo)(Kx),Qx=(0,$.memo)(Zx),Jx=200,ew=150,tw=e=>!e.hidden,nw=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?ia(Vn(e.nodeLookup,{filter:tw}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Jc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,ow=(e,t)=>Jc(e.viewBB,t.viewBB)&&Jc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,rw="react-flow__minimap-desc";function Hu({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:u,maskStrokeColor:l,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:h,pannable:b=!1,zoomable:g=!1,ariaLabel:y,inversePan:v,zoomStep:m=1,offsetScale:w=5}){let S=xe(),C=(0,$.useRef)(null),{boundingRect:k,viewBB:M,rfId:I,panZoom:L,translateExtent:R,flowWidth:T,flowHeight:P,ariaLabelConfig:x}=pe(nw,ow),_=e?.width??Jx,N=e?.height??ew,E=k.width/_,z=k.height/N,D=Math.max(E,z),F=D*_,B=D*N,V=w*D,Q=k.x-(F-k.width)/2-V,G=k.y-(B-k.height)/2-V,K=F+V*2,le=B+V*2,W=`${rw}-${I}`,O=(0,$.useRef)(0),U=(0,$.useRef)();O.current=D,(0,$.useEffect)(()=>{if(C.current&&L)return U.current=sc({domNode:C.current,panZoom:L,getTransform:()=>S.getState().transform,getViewScale:()=>O.current}),()=>{U.current?.destroy()}},[L]),(0,$.useEffect)(()=>{U.current?.update({translateExtent:R,width:T,height:P,inversePan:v,pannable:b,zoomStep:m,zoomable:g})},[b,g,v,m,R,T,P]);let ne=p?X=>{let[J,oe]=U.current?.pointer(X)||[0,0];p(X,{x:J,y:oe})}:void 0,re=h?(0,$.useCallback)((X,J)=>{let oe=S.getState().nodeLookup.get(J).internals.userNode;h(X,oe)},[]):void 0,q=y??x["minimap.ariaLabel"];return(0,H.jsx)(Mr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:Me(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,H.jsxs)("svg",{width:_,height:N,viewBox:`${Q} ${G} ${K} ${le}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":W,ref:C,onClick:ne,children:[q&&(0,H.jsx)("title",{id:W,children:q}),(0,H.jsx)(Qx,{onClick:re,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,H.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Q-V},${G-V}h${K+V*2}v${le+V*2}h${-K-V*2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Hu.displayName="MiniMap";var Bu=(0,$.memo)(Hu),iw=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,aw={[Ut.Line]:"right",[Ut.Handle]:"bottom-right"};function sw({nodeId:e,position:t,variant:n=Ut.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:u=Number.MAX_VALUE,maxHeight:l=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:h,onResizeStart:b,onResize:g,onResizeEnd:y}){let v=fu(),m=typeof e=="string"?e:v,w=xe(),S=(0,$.useRef)(null),C=n===Ut.Handle,k=pe((0,$.useCallback)(iw(C&&p),[C,p]),Se),M=(0,$.useRef)(null),I=t??aw[n];(0,$.useEffect)(()=>{if(!(!S.current||!m))return M.current||(M.current=fc({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:R,transform:T,snapGrid:P,snapToGrid:x,nodeOrigin:_,domNode:N}=w.getState();return{nodeLookup:R,transform:T,snapGrid:P,snapToGrid:x,nodeOrigin:_,paneDomNode:N}},onChange:(R,T)=>{let{triggerNodeChanges:P,nodeLookup:x,parentLookup:_,nodeOrigin:N}=w.getState(),E=[],z={x:R.x,y:R.y},D=x.get(m);if(D&&D.expandParent&&D.parentId){let F=D.origin??N,B=R.width??D.measured.width??0,V=R.height??D.measured.height??0,Q={id:D.id,parentId:D.parentId,rect:{width:B,height:V,...ca({x:R.x??D.position.x,y:R.y??D.position.y},{width:B,height:V},D.parentId,x,F)}},G=yr([Q],x,_,N);E.push(...G),z.x=R.x?Math.max(F[0]*B,R.x):void 0,z.y=R.y?Math.max(F[1]*V,R.y):void 0}if(z.x!==void 0&&z.y!==void 0){let F={id:m,type:"position",position:{...z}};E.push(F)}if(R.width!==void 0&&R.height!==void 0){let B={id:m,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};E.push(B)}for(let F of T){let B={...F,type:"position"};E.push(B)}P(E)},onEnd:({width:R,height:T})=>{let P={id:m,type:"dimensions",resizing:!1,dimensions:{width:R,height:T}};w.getState().triggerNodeChanges([P])}})),M.current.update({controlPosition:I,boundaries:{minWidth:s,minHeight:c,maxWidth:u,maxHeight:l},keepAspectRatio:d,resizeDirection:f,onResizeStart:b,onResize:g,onResizeEnd:y,shouldResize:h}),()=>{M.current?.destroy()}},[I,s,c,u,l,d,b,g,y,h]);let L=I.split("-");return(0,H.jsx)("div",{className:Me(["react-flow__resize-control","nodrag",...L,n,o]),ref:S,style:{...r,scale:k,...a&&{[C?"backgroundColor":"borderColor"]:a}},children:i})}var tk=(0,$.memo)(sw);var Wu=/[\w\u4e00-\u9fa5.-]/;var lw=/[\p{L}\p{N}]/u;function Fu(e){return e===void 0?!0:!lw.test(e)}function Vu(e){return e.trim().replace(/\s+/g," ")}function cw(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&Fu(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Wu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Wu.test(i))break;r+=1}Fu(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function uw(e){let t=[];for(let n of cw(e))n.kind==="ref"&&t.push(n.token);return t}function Xu(e,t){let n=uw(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let u=Vu(c.name);if(u==="")continue;let l=o.get(u);l===void 0?o.set(u,[c.id]):l.includes(c.id)||l.push(c.id)}let r=[],i=new Set,a=[],s=new Set;for(let c of n){let u=Vu(c.name),l=o.get(u);if(l===void 0){s.has(u)||(s.add(u),a.push(u));continue}for(let d of l)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var dw=/\.(png|jpe?g|webp|gif|bmp)$/i;function qu(e){return e.type.startsWith("image/")?!0:dw.test(e.name)}var Gu=30,Yu=200;function Uu(e,t){if(t&&Math.abs(t.x-e.x)<Yu&&Math.abs(t.y-e.y)<Yu){let n={x:t.x+Gu,y:t.y+Gu};return{position:n,next:n}}return{position:e,next:e}}var fw=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Na(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!fw.test(n));return t.length?t.join(" "):void 0}function vn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function Zu(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function Ku(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function pw(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function _a(e,t,n){let o=new Set(n);return{nodes:e.map(i=>{let a=Na(i.className),s={...i};return a===void 0?delete s.className:s.className=a,s.type==="image"&&o.has(s.data.registryId)?{...s,data:{...s.data,missing:!0}}:s.type==="prompt"?{...s,data:{...s.data,quality:s.data.quality??"high",status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}:s}),edges:pw(t)}}function ju(e){return e.filter(t=>t.type==="prompt").map(t=>({nodeId:t.id,taskId:String(t.data.taskId??"")})).filter(t=>!!t.taskId)}function ot(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function Qu(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function mw(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function gw(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let u=c.pop();if(a.has(u))continue;a.add(u);let l=o.get(u);l&&(l.type==="prompt"?s.add(u):l.type==="group"&&c.push(...r.get(u)??[]))}n.set(i.data.registryId,s.size)}}function Ju(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of r.get(e)??[]){let u=o.get(c);if(u){if(u.type==="image")a+=1,s.push(u.data.registryId);else if(u.type==="group"){let l=Ju(c,t,n);a+=l.count,s.push(...l.ids)}}}return t.delete(e),{count:a,ids:s}}function hw(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=Ju(a.id,new Set,t),u=new Set(c);n.set(a.id,u.size),o.set(a.id,Array.from(u).reduce((l,d)=>l+(i.get(d)??0),0)),r.set(a.id,s-u.size)}}function ed(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=mw(e,t);return gw(e,a,n),hw(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function bw(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=o.get(s);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(u=>u.target===s).forEach(u=>a.push(u.source)))}return r}function td(e,t,n,o){let r=bw(e,t,n),i=r.map(u=>({id:u.id,name:u.type==="image"?u.data.name:""})),a=Xu(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(u=>[u.id,u])),c=[];for(let u of a.ids){let l=s.get(u);l&&c.push(l)}return{images:c,unknown:a.unknown,mode:a.mode}}function Ir(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function Pr(e,t){return t.reduce((n,o)=>!n||Ir(e,o)<Ir(e,n)?o:n,null)}function xo(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function yw(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=Pr(r,n);if(i&&r.position.y>i.position.y){xo(e,i,r);continue}let a=Pr(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||Ir(r,a)<Ir(r,i))?xo(e,r,a):i&&xo(e,r,i)}}function xw(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=Pr(r,n);a&&xo(e,r,a)}}function ww(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(u=>{let l=o.get(u.source)?.type;return u.target===a.id&&(l==="image"||l==="group")}))continue;let c=Pr(a,i);c&&xo(e,c,a)}}function Ia(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return yw(a,e,n,o),xw(a,o,n,i),ww(a,n,o,r),a.next}function nd(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?Ia(o,t):t}function od(e,t){return{nodes:e.map(n=>{let o=Na(n.className),r={...n};if(o===void 0?delete r.className:r.className=o,r.type==="image"){let{maskDataUrl:l,...d}=r.data;return{...r,data:d}}if(r.type!=="prompt")return r;let{startedAtMs:i,resultCount:a,message:s,cancelRequested:c,...u}=r.data;return{...r,data:{...u,quality:u.quality??"high",status:"idle"}}}),edges:[...t]}}async function Ce(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:r})}return r}function Ve(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var rd=()=>Ce("config");var id=()=>Ce("assets"),zr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},ad=e=>Ce("asset/delete",Ve({id:e})),Pa=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Ce(`history?${t.toString()}`)},Rr=(e=14)=>Ce(`history/stats?days=${e}`),za=e=>Ce("generate",Ve(e)),sd=e=>Ce(`task?id=${encodeURIComponent(e)}`),ld=e=>Ce("task/cancel",Ve({id:e})),cd=(e,t,n)=>Ce("workflow/save",Ve({name:e,nodes:t,edges:n})),Ra=()=>Ce("workflow/list"),ud=e=>Ce(`workflow/load?name=${encodeURIComponent(e)}`),Da=(e,t)=>Ce("recovery/save",Ve({...od(e,t)})),dd=()=>Ce("recovery/latest"),fd=e=>Ce("settings",Ve({model:e})),Dr=e=>Ce("settings",Ve({profile:e})),Ta=e=>Ce("settings",Ve({outputDir:e})),pd=e=>Ce("settings",Ve({budget:e})),Aa=e=>Ce("settings",Ve({imagoraRoot:e})),md=(e={})=>Ce("pick-folder",Ve(e)),Tr=e=>Ce("reveal",Ve({path:e})),Oa=e=>Ce("provider",Ve(e)),gd=e=>Ce("provider/probe",Ve(e));var hd=e=>Ce("budget",Ve(e));function bd(e){return`\u751F\u6210\u4E2D ${e}s`}function ce(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var vw=/^=== (.+) ===\s*$/,xd=/^```(?:text)?\s*$/,kw=/^ratio:\s*(\d+):(\d+)\s*$/,Sw=/^ratio\b/i;function yd(e){return e.split(`
`).some(t=>xd.test(t))}function wd(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((u,l)=>{let d=u.match(vw)?.[1];d!==void 0&&a.push({title:d.trim(),line:l})}),a.length===0){let u=t.trim();return u&&i.push(u),yd(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),yd(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let u=0;u<a.length;u++){let l=a[u];if(l===void 0)continue;let{title:d}=l,f=l.line+1,p=a[u+1],h=p===void 0?n.length:p.line,b=n.slice(f,h);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let g=[];b.forEach((L,R)=>{xd.test(L)&&g.push(R)});let y=g[0],v=g[g.length-1];if(y===void 0||v===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let m=b.slice(0,y).join(`
`).trim();m&&i.push(m);let w=b.slice(y+1,v),S=w.findIndex(L=>L.trim()!=="");if(S===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let C=(w[S]??"").trim(),k=C.match(kw);if(!k){Sw.test(C)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${C}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let M=`${k[1]}:${k[2]}`,I=w.slice(S+1).join(`
`).trim();if(!I){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:M,prompt:I})}return{cards:o,issues:r,skippedText:i}}function $a(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function vd(e,t,n){let o=_w(n,e.length);return e.map((r,i)=>{let a=$a(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var La=380,Cw=326,kd=40,Ew=74,Mw=La+kd,Nw=Cw+Ew,Ar=3;function _w(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/Ar),a=r%Ar,s=Math.min(Ar,n-i*Ar),c=s*La+(s-1)*kd,u=e.x+La/2-c/2;o.push({x:u+a*Mw,y:e.y+i*Nw})}return o}var Iw={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function He(e){let t=e.measured,n=Iw[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var Zt={layerGap:60,resultGap:60,nodeGap:16,leftMargin:60,topMargin:40},Pw={image:0,group:0,prompt:1},Sd="\u63D0\u793A\u8BCD\u751F\u6210";function Cd(e,t,n,o){let r=n.get(e);if(r!==void 0)return r;if(o.has(e))return-1;o.add(e);let i=0;for(let a of t.get(e)??[]){let s=Cd(a,t,n,o);s>=0&&(i=Math.max(i,s+1))}return o.delete(e),n.set(e,i),i}function zw(e,t){return e.type!=="prompt"?null:(t.get(e.id)??[]).slice().sort().join("|")}function Rw(e,t,n,o,r){let i=new Map(e.map(b=>[b.id,b])),a=new Map,s=new Map;for(let b of t){if(!i.has(b.source)||!i.has(b.target))continue;let g=a.get(b.target)??[];g.push(b.source),a.set(b.target,g);let y=s.get(b.source)??[];y.push(b.target),s.set(b.source,y)}let c=new Map,u=new Set;for(let b of e){let g=Math.max(Cd(b.id,a,c,u),Pw[b.type]);c.set(b.id,g)}let l=new Map;for(let b of e){let g=l.get(c.get(b.id)??0)??[];g.push(b),l.set(c.get(b.id)??0,g)}let d=[...l.keys()].sort((b,g)=>b-g),f=new Map;for(let b of e)n.has(b.id)||f.set(b.id,{x:b.position.x-(o?.x??0),y:b.position.y-(o?.y??0)});let p=b=>(f.get(b.id)?.x??b.position.x)+He(b).width/2,h=new Map;{let b=r;for(let g of d){let y=l.get(g).reduce((v,m)=>{let w=f.get(m.id);return w&&!n.has(m.id)?Math.max(v,w.y+He(m).height):Math.max(v,b+He(m).height)},b);h.set(g,b),b=y+Zt.layerGap}}return{byId:i,preds:a,succs:s,layerGroups:l,sortedLayers:d,positions:f,centerOf:p,bandY:h}}function Dw(e){let{nodes:t,edges:n,moves:o,origin:r,boundsWidth:i}=e;if(!t.length)return t;let a=r?0:Zt.leftMargin,s=r?0:Zt.topMargin,c=Rw(t,n,o,r,s),{positions:u}=c;return Aw(c,o,a),Ow(c,o,a),Lw(t,o,a,i,u),t.map(l=>{if(!o.has(l.id))return l;let d=u.get(l.id);return!d||!Number.isFinite(d.x)||!Number.isFinite(d.y)?l:r?{...l,position:{x:d.x+r.x,y:d.y+r.y}}:{...l,position:d}})}function Tw(e,t,n){let{byId:o,preds:r,positions:i,centerOf:a}=t,s=(r.get(e.id)??[]).map(c=>o.get(c)).filter(c=>c!==void 0&&i.has(c.id)).map(c=>a(c));return s.length?s.reduce((c,u)=>c+u,0)/s.length:n+He(e).width/2}function Ed(e,t,n,o,r){let{layerGroups:i,preds:a,positions:s,bandY:c}=n,u=i.get(e).filter(g=>o.has(g.id));if(!u.length)return;let l=new Map;for(let g of u)l.set(g.id,t(g));let d=g=>zw(g,a),f=[...u].sort((g,y)=>{let v=l.get(g.id),m=l.get(y.id);if(Math.abs(v-m)>=.5)return v-m;let w=d(g),S=d(y);if(w!==null&&S!==null&&w===S&&g.type==="prompt"&&y.type==="prompt"){let C=g.data.title??Sd,k=y.data.title??Sd,M=C.localeCompare(k,"zh");if(M!==0)return M}return g.position.x-y.position.x}),p=(g,y)=>g.every(v=>d(v)===null||d(v)===d(y)),h=r-Zt.nodeGap,b=0;for(;b<f.length;){let g=f[b];if(g===void 0)break;let y=l.get(g.id),v=b,m=f[v+1];for(;m!==void 0&&Math.abs(l.get(m.id)-y)<.5&&p(f.slice(b,v+1),m);)v+=1,m=f[v+1];let w=f.slice(b,v+1),S=w.reduce((M,I,L)=>M+He(I).width+(L?Zt.nodeGap:0),0),C=c.get(e),k=Math.max(h+Zt.nodeGap,y-S/2);for(let M of w)s.set(M.id,{x:k,y:C}),k+=He(M).width+Zt.nodeGap;h=k-Zt.nodeGap,b=v+1}}function Aw(e,t,n){for(let o of e.sortedLayers)Ed(o,r=>Tw(r,e,n),e,t,n)}function Ow(e,t,n){let{sortedLayers:o,succs:r,byId:i,positions:a,centerOf:s}=e;for(let c of[...o].reverse())Ed(c,u=>{let l=(r.get(u.id)??[]).map(f=>i.get(f)).filter(f=>f!==void 0&&a.has(f.id)).map(f=>s(f));if(l.length)return l.reduce((f,p)=>f+p,0)/l.length;let d=a.get(u.id);return d?d.x+He(u).width/2:n+He(u).width/2},e,t,n)}function Lw(e,t,n,o,r){if(o!==void 0){let i=e.filter(a=>t.has(a.id));if(i.length){let a=Math.min(...i.map(u=>r.get(u.id).x)),s=Math.max(...i.map(u=>r.get(u.id).x+He(u).width)),c=n+o/2-(a+s)/2;if(c!==0)for(let u of i){let l=r.get(u.id);r.set(u.id,{x:l.x+c,y:l.y})}}}}function Md(e,t,n){if(!n.size)return e;let o=e.filter(f=>n.has(f.id));if(!o.length)return e;let r=t.filter(f=>n.has(f.source)||n.has(f.target)),i=new Set;for(let f of r)n.has(f.source)||i.add(f.source),n.has(f.target)||i.add(f.target);let a=e.filter(f=>i.has(f.id)),s=Math.min(...o.map(f=>f.position.x)),c=Math.max(...o.map(f=>f.position.x+He(f).width)),u=Math.min(...o.map(f=>f.position.y)),l=Dw({nodes:[...o,...a],edges:r,moves:n,origin:{x:s,y:u},boundsWidth:i.size===0?Math.max(c-s,1):void 0}),d=new Map(l.map(f=>[f.id,f]));return e.map(f=>d.get(f.id)??f)}var Ha=[0,.5,1];function Nd(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function Id(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function _d(e,t,n,o){let r=Ha.map(s=>Nd(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&Id(c))for(let u=0;u<Ha.length;u+=1){let l=Ha[u];if(l===void 0)continue;let d=Nd(c,n,l);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let h=d-p,b=Math.abs(h);b>=o||b>=a||(a=b,i={delta:h,position:d,targetId:c.id})}}}return i}function Or(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!Id(e)||!Number.isFinite(n)||n<=0)return o;let r=_d(e,t,"x",n),i=_d(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var Pd="imagora.canvas-snap.v1";function zd(){try{let e=window.localStorage.getItem(Pd);return e===null?!0:e!=="0"}catch{return!0}}function Rd(e){try{window.localStorage.setItem(Pd,e?"1":"0")}catch{}}function vo(e){let t=He(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var wo=[];function Dd(e,t,n){if(!n)return{changes:e,guides:wo};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:wo};let r=o[0];if(!r)return{changes:e,guides:wo};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:wo};let s={...vo(i),x:a.x,y:a.y},c=[];for(let d of t)d.id!==r.id&&c.push(vo(d));let u=Or(s,c);return u.guides.length===0?{changes:e,guides:wo}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:u.x,y:u.y}}:d),guides:u.guides}}var De=require("react");var $r=require("react");var Kt=new Map,Ba=new Map;function $w(e,t,n=512){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||e<=0||t<=0||n<=0||e<=n&&t<=n)return null;let o=n/Math.max(e,t);return{width:Math.max(1,Math.round(e*o)),height:Math.max(1,Math.round(t*o))}}function Lr(e){let t=Kt.get(e);return t===void 0?null:(Kt.delete(e),Kt.set(e,t),t)}function Hw(e,t){for(Kt.set(e,t);Kt.size>240;){let n=Kt.keys().next();if(n.done===!0)break;let o=Kt.get(n.value);Kt.delete(n.value),o!==void 0&&URL.revokeObjectURL(o)}}async function Bw(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u7F29\u7565\u56FE\u53D6\u56FE\u5931\u8D25\uFF1A${n.status}`);let o=await n.blob(),r=await createImageBitmap(o),i=$w(r.width,r.height,t);if(i===null)return r.close(),e;let a=document.createElement("canvas");a.width=i.width,a.height=i.height;let s=a.getContext("2d");if(s===null)return r.close(),e;s.drawImage(r,0,0,i.width,i.height),r.close();let c=await new Promise(u=>a.toBlob(u,"image/webp",.9));return c===null?e:URL.createObjectURL(c)}function Td(e,t=512){let n=Lr(e);if(n!==null)return Promise.resolve(n);let o=Ba.get(e);if(o!==void 0)return o;let r=Bw(e,t).catch(()=>e).then(i=>(Ba.delete(e),i!==e&&Hw(e,i),i));return Ba.set(e,r),r}function Ad(e){let[t,n]=(0,$r.useState)(()=>{if(!e)return null;let o=Lr(e);return o===null?null:{src:e,url:o}});return(0,$r.useEffect)(()=>{if(!e)return;let o=Lr(e);if(o!==null){n({src:e,url:o});return}let r=!1;return Td(e).then(i=>{r||n({src:e,url:i})}),()=>{r=!0}},[e]),t===null||t.src!==e?null:t.url}var Wa=require("react/jsx-runtime"),Od={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function Ie({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=Od[e]||Od.help;return(0,Wa.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,Wa.jsx)("path",{d:r})})}var we=require("react"),Xd=require("react-dom");var Ww={id:"__custom",label:"\u81EA\u5B9A\u4E49"},Fw=64;function Ld(e){return e.trim().replace(/\s+/g," ")}function Vw(e,t){return e.some(n=>n.value===t)}function $d(e,t){let n=Ld(t);return n===""||Vw(e,n)?e:[...e,{value:n,label:n,group:Ww}]}function Hd(e){let t=Ld(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>Fw?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function Bd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var Hr=0;function Br(){Hr+=1}function Wr(){Hr=Math.max(0,Hr-1)}function Wd(){return Hr>0}var Xw=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function Fa(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=Xw.has(o)?"-":n}return t}function Fd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function Gw(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+Fd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,u=n;for(let[l,d]of o.entries()){if(c!==n&&(u=Math.max(u,c+l-2)),e.charAt(l)===t.charAt(i)){let f=1+Fd(e,l),p=n;s!==n&&(p=s+f+4),u!==n&&(p=Math.max(p,u+f+1-l)),a[l]=p}c=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function Vd(e,t){let n=Fa(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,c;for(let u of a){let l=Fa(u).toLowerCase(),d=Gw(l,n);d!==void 0&&(s||=l.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:s,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var be=require("react/jsx-runtime"),Yw=4;function Ot({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:c,"aria-describedby":u,"aria-invalid":l,renderOption:d,title:f}){let[p,h]=(0,we.useState)(!1),[b,g]=(0,we.useState)(-1),[y,v]=(0,we.useState)(""),[m,w]=(0,we.useState)(null),S=(0,we.useRef)(null),C=(0,we.useRef)(null),k=(0,we.useRef)(null),M=(0,we.useId)(),I=`${r??`select-${M}`}-listbox`,L=`${I}-search`,R=(0,we.useMemo)(()=>{if(y.trim()==="")return e;let W=e.map(O=>({name:O.value,label:O.label,option:O}));return Vd(W,y).map(O=>O.option)},[e,y]),T=i===void 0||i==="auto"?e.length>Yw:i,P=R.findIndex(W=>W.value===t),x=e.find(W=>W.value===t),_=W=>`${I}-option-${W}`,N=T&&s===!0,E=(0,we.useMemo)(()=>{let W=y.trim();if(W!=="")return R.find(O=>O.value===W||O.label===W)},[R,y]),z=(0,we.useMemo)(()=>{if(!N||E!==void 0)return null;let W=Hd(y);return W.ok?W.value:null},[N,E,y]),D=(W=P>=0?P:0)=>{!e.length&&!N||(g(e.length===0?-1:Math.min(Math.max(W,0),e.length-1)),h(!0),T||window.setTimeout(()=>C.current?.focus(),0))},F=(W=!1)=>{h(!1),v(""),W&&window.setTimeout(()=>C.current?.focus(),0)},B=W=>{let O=R[W];O&&(n(O.value),F(!0))},V=W=>{c?.(W),F(!0)},Q=()=>{let W=C.current;if(!W)return;let O=W.getBoundingClientRect(),U=4,ne=8,re=W.offsetWidth||O.width,q=Math.max(ne,Math.min(O.left,window.innerWidth-re-ne)),X=window.innerHeight-O.bottom-U-ne,J=O.top-U-ne,oe=X<160&&J>X,de=Math.max(120,Math.min(240,oe?J:X));w({left:q,top:oe?Math.max(ne,O.top-U-de):O.bottom+U,width:re,maxHeight:de})};(0,we.useEffect)(()=>{if(p)return Br(),()=>Wr()},[p]),(0,we.useLayoutEffect)(()=>{if(!p)return;Q();let W=()=>Q();window.addEventListener("scroll",W,!0),window.addEventListener("resize",W);let O=typeof ResizeObserver>"u"?null:new ResizeObserver(W);return C.current&&O?.observe(C.current),()=>{O?.disconnect(),window.removeEventListener("scroll",W,!0),window.removeEventListener("resize",W)}},[p]),(0,we.useEffect)(()=>{p&&T&&m&&k.current?.focus()},[p,T,m]),(0,we.useEffect)(()=>{p&&g(W=>R.length===0?-1:Math.min(Math.max(W,0),R.length-1))},[p,R.length]),(0,we.useEffect)(()=>{!e.length&&!N&&p&&(h(!1),g(-1))},[p,e.length,N]),(0,we.useEffect)(()=>{let W=O=>{let U=O.target;S.current?.contains(U)||document.getElementById(I)?.contains(U)||F()};return document.addEventListener("mousedown",W,!0),()=>document.removeEventListener("mousedown",W,!0)},[I]);let G=(W,O)=>{if(W.key==="Tab"){F();return}if(W.key==="Escape"){p&&(W.preventDefault(),F(!0));return}if(W.key==="ArrowDown"||W.key==="ArrowUp"){if(W.preventDefault(),!p){D();return}if(R.length===0)return;let U=W.key==="ArrowDown"?1:-1;g(ne=>(ne+U+R.length)%R.length);return}if(W.key==="Home"||W.key==="End"){if(R.length===0)return;W.preventDefault(),p||h(!0),g(W.key==="Home"?0:R.length-1);return}if(W.key==="Enter"){if(W.preventDefault(),!p){D();return}if(N&&y.trim()!==""){E!==void 0?(n(E.value),F(!0)):z!==null&&V(z);return}B(b);return}!O&&W.key===" "&&(W.preventDefault(),p?B(b):D())},K=(0,we.useMemo)(()=>Bd(R),[R]),le=(0,we.useMemo)(()=>{let W=new Map;return R.forEach((O,U)=>W.set(O,U)),W},[R]);return(0,be.jsxs)("div",{ref:S,className:`im-select-root ${o}`.trim(),children:[(0,be.jsxs)("button",{ref:C,type:"button",id:r,title:f,onClick:()=>p?F():D(),onKeyDown:W=>G(W,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":I,"aria-activedescendant":p&&b>=0?_(b):void 0,"aria-describedby":u,"aria-invalid":l,className:`im-select-trigger${p?" is-open":""}`,children:[d&&x?(0,be.jsxs)("span",{className:"im-select-value",children:[d(x),(0,be.jsx)("span",{className:"im-select-label",children:x.label})]}):(0,be.jsx)("span",{className:"im-select-label",children:x?.label??"\u8BF7\u9009\u62E9"}),(0,be.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,be.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&m&&(0,Xd.createPortal)((0,be.jsxs)("div",{id:I,"data-portal":"select-list",className:"im-select-list",style:{left:m.left,top:m.top,width:m.width,maxHeight:m.maxHeight},children:[T&&(0,be.jsx)("div",{className:"im-select-search",children:(0,be.jsx)("input",{ref:k,id:L,type:"text",className:"im-select-search-input",value:y,onChange:W=>v(W.target.value),onKeyDown:W=>G(W,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":I,"aria-activedescendant":b>=0?_(b):void 0})}),(0,be.jsxs)("ul",{role:"listbox","aria-labelledby":T?L:void 0,className:"im-select-rows",children:[R.length===0&&(0,be.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),K.map(W=>(0,be.jsxs)("li",{role:"presentation",className:"im-select-group",children:[W.label!==""&&(0,be.jsx)("div",{className:"im-select-group-title",role:"presentation",children:W.label}),(0,be.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:W.rows.map(O=>{let U=le.get(O)??-1,ne=O.value===t,re=U===b;return(0,be.jsxs)("li",{id:_(U),role:"option","aria-selected":ne,className:`im-select-option${ne?" is-selected":""}${re?" is-active":""}`,onMouseEnter:()=>g(U),onMouseDown:q=>q.preventDefault(),onClick:()=>B(U),children:[d?(0,be.jsxs)("span",{className:"im-select-value",children:[d(O),(0,be.jsx)("span",{className:"im-select-label",children:O.label})]}):(0,be.jsx)("span",{className:"im-select-label",children:O.label}),ne&&(0,be.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,be.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},O.value)})})]},W.id||"__ungrouped"))]}),z!==null&&(0,be.jsx)("div",{className:"im-select-custom",children:(0,be.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:W=>W.preventDefault(),onClick:()=>V(z),children:(0,be.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",z,"\u201D"]})})})]}),document.body)]})}var Z=require("react/jsx-runtime"),Va=(0,De.createContext)(null),Xa=(0,De.createContext)(!1);function Ga(){return(0,De.useContext)(Xa)}function Ya(){let e=(0,De.useContext)(Va);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function qw({value:e,onChange:t}){let[n,o]=(0,De.useState)(e),r=(0,De.useRef)(!1);return(0,De.useEffect)(()=>{r.current||o(e)},[e]),(0,Z.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onCompositionStart:()=>{r.current=!0},onCompositionEnd:i=>{r.current=!1,o(i.currentTarget.value),t(i.currentTarget.value)},onChange:i=>{let a=i.target.value;o(a),r.current||t(a)}})}function Fr(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(wn,{type:"target",position:te.Top,className:"im-handle"}),(0,Z.jsx)(wn,{type:"source",position:te.Bottom,className:"im-handle"})]})}function qa({children:e}){return(0,Z.jsx)("div",{className:"im-rail nodrag",children:e})}function Lt({label:e,onClick:t,danger:n,children:o}){return(0,Z.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var qd=(0,De.memo)(function({id:t,data:n,selected:o}){let r=Ya(),i=Ga(),[a,s]=(0,De.useState)(!1),c=n.missing||a,u=Ad(n.url);return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${c?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,Z.jsx)(Fr,{}),c?(0,Z.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,Z.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:l=>{l.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,i?null:(0,Z.jsxs)(qa,{children:[(0,Z.jsx)(Lt,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,Z.jsx)(Ie,{name:"eye"})}),(0,Z.jsx)(Lt,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,Z.jsx)(Ie,{name:"crop"})}),(0,Z.jsx)(Lt,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,Z.jsx)(Ie,{name:"expand"})}),(0,Z.jsx)(Lt,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,Z.jsx)(Ie,{name:"grid"})}),(0,Z.jsx)(Lt,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,Z.jsx)(Ie,{name:"wand"})}),(0,Z.jsx)(Lt,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,Z.jsx)(Ie,{name:"image"})}),(0,Z.jsx)(Lt,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Ie,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-thumb",onDoubleClick:l=>{l.stopPropagation(),r.zoomImage(t)},children:n.url&&u?(0,Z.jsx)("img",{src:u,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):n.url?(0,Z.jsx)("span",{className:"im-thumb-placeholder","aria-hidden":!0}):(0,Z.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,Z.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Z.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),Gd=4,Ud=(0,De.memo)(function({id:t,data:n,selected:o}){let r=Ya(),i=Ga(),a=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,c=Math.min(Math.max(n.imageCount-1,0),3);return(0,Z.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,Z.jsx)(Fr,{}),i?null:(0,Z.jsx)(qa,{children:(0,Z.jsx)(Lt,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Ie,{name:"trash"})})}),(0,Z.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:c},(u,l)=>(0,Z.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*Gd}px, ${-(l+1)*Gd}px)`}},l)),(0,Z.jsxs)("div",{className:"im-group-face",children:[(0,Z.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,Z.jsxs)("div",{className:"im-group-size",children:[a," MB"]}),s>0?(0,Z.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function Yd({from:e}){let[t,n]=(0,De.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,De.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Z.jsx)(Z.Fragment,{children:bd(t)})}var Uw={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"};function Zw(e){switch(e.status){case"queued":return{text:"\u6392\u961F\u4E2D",detail:"\u6392\u961F\u4E2D",tone:"is-queued"};case"running":return{text:"\u751F\u6210\u4E2D",detail:"\u751F\u6210\u4E2D",tone:"is-running"};case"done":return{text:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,detail:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,tone:"is-done"};case"failed":return{text:"\u5931\u8D25",detail:e.message?`\u5931\u8D25\uFF1A${e.message}`:"\u5931\u8D25",tone:"is-failed"};default:return{text:"\u5C31\u7EEA",detail:"\u5C31\u7EEA",tone:"is-idle"}}}var Zd=(0,De.memo)(function({id:t,data:n,selected:o}){let r=Ya(),i=Ga(),a=r.config,s=n.status==="queued"||n.status==="running",c=a?.sizes??[],u=a?.qualities??[],l=c.some(f=>f.value===n.size)||!n.size?c:[...c,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],d=a?.qualityEffective!==!1;if(i){let f=Zw(n);return(0,Z.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Fr,{}),(0,Z.jsx)("div",{className:"im-lod-title",title:n.title??"\u63D0\u793A\u8BCD\u751F\u6210",children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("div",{className:`im-lod-status ${f.tone}`,title:f.detail,children:n.status==="running"?(0,Z.jsx)(Yd,{from:n.startedAtMs}):f.text})]})}return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Fr,{}),(0,Z.jsxs)(qa,{children:[(0,Z.jsx)("span",{className:"im-rail-dot",title:Uw[n.status]??"\u5C31\u7EEA",children:(0,Z.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Z.jsx)(Lt,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Ie,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)(qw,{value:n.prompt,onChange:f=>r.updatePrompt(t,{prompt:f})}),(0,Z.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:d?"7fr 3fr":"1fr",marginTop:8},children:[(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,Z.jsx)(Ot,{className:"im-select-fill",options:$d(l,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:f=>r.updatePrompt(t,{size:f})})]}),d?(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,Z.jsx)(Ot,{className:"im-select-fill",options:u.map(f=>({value:f,label:f})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:f=>r.updatePrompt(t,{quality:f})})]}):null]}),(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,Z.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:a?.defaultOutputDir??"",onChange:f=>r.updatePrompt(t,{outputDir:f.target.value})})]}),n.status==="failed"&&n.message?(0,Z.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Z.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!n.prompt.trim(),onClick:f=>{f.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,Z.jsx)(Yd,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,Z.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:f=>{f.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var Kd=`
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
.im-panel-card:hover .im-rail { opacity: 1; pointer-events: auto; }

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
/* \u641C\u7D22\u6846\uFF1A\u6BD4\u8868\u5355\u91CC\u7684 .im-field \u7D27\u51D1\u4E00\u6863\uFF08\u539F\u7248 !w-72 !py-1\uFF09\uFF0C\u5706\u89D2 9\uFF08\u539F\u7248 928-933 \u90A3\u6761\uFF09 */
.im-history-search {
  width: 18rem;
  max-width: 100%;
  padding: 4px 12px;
  border-radius: 9px;
  font-size: 13px;
}
.im-history-status { flex: none; width: 7rem; }
.im-history-bar-end { margin-left: auto; display: flex; align-items: center; gap: 8px; min-width: 0; }
.im-history-warn {
  font-size: 11px;
  color: var(--im-warn);
  white-space: nowrap;
}
/* \u6210\u672C\u6761\uFF1A\u6307\u6807\u7B49\u5BBD\u6210\u5217\uFF08\u6807\u7B7E\u5728\u4E0A\u3001\u6570\u503C\u5728\u4E0B\uFF09\uFF0C\u53F3\u8FB9\u63A5\u9884\u7B97\u8BBE\u7F6E\uFF0C\u4E0E\u539F\u7248 CostBoard \u540C\u6784\u3002
 * \u539F\u7248\u7684\u6392\u6CD5\u662F\u300C\u6307\u6807 flex-1 | \u7AD6\u7EBF | \u9884\u7B97\u8BBE\u7F6E shrink-0\u300D\uFF1A\u6307\u6807\u968F\u5BBD\u5EA6\u644A\u5F00\uFF0C
 * \u8BBE\u7F6E\u56FA\u5B9A\u9760\u53F3\uFF1B\u7A84\u5C4F\u65F6\u8BBE\u7F6E\u6362\u884C\u5230\u4E0B\u4E00\u6392\uFF08gap-y \u8D1F\u8D23\u95F4\u8DDD\uFF09\u3002 */
.im-history-stats {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 8px 16px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-surface-float);
}
/* \u6307\u6807\u7F51\u683C\uFF1A2 \u5217 / \u7A84\u5C4F\uFF0C3 \u5217 / \u4E2D\u5C4F\uFF0C5 \u5217 / \u5BBD\u5C4F\uFF08\u539F\u7248 sm:3 lg:5\uFF09 */
.im-history-stat-grid {
  display: grid;
  flex: 1 1 auto;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 16px;
}
@media (min-width: 720px) { .im-history-stat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (min-width: 1040px) { .im-history-stat-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }
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
/* \u8F93\u5165\u6846\u6536\u7A84\u5E76\u53F3\u5BF9\u9F50\u6570\u5B57\uFF1A\u91D1\u989D\u5217\u4E0D\u7528\u5BBD\uFF0C\u53F3\u5BF9\u9F50\u624D\u597D\u6A2A\u5411\u6BD4\u8F83 */
.im-history-budget-input {
  width: 80px;
  height: 26px;
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.im-history-budget-tip { font-size: 11px; color: var(--im-ink-3); }
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
`;var jd={image:qd,prompt:Zd,group:Ud};function Qd(e,t){return!e&&t<.1?!0:e&&t>.2?!1:e}var kn=require("react/jsx-runtime"),Kw="0 0 1024 1024",jw="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function Ua({size:e=30,fill:t="var(--im-brand)"}){return(0,kn.jsx)("svg",{width:e,height:e,viewBox:Kw,fill:t,"aria-hidden":"true",children:(0,kn.jsx)("path",{d:jw})})}function Jd({onClick:e}){return(0,kn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,kn.jsx)(Ua,{}),(0,kn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var ef=require("react"),Sn=require("react/jsx-runtime");function Qw(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function tf(e){return(0,ef.useMemo)(()=>Qw(e),[e])}function nf({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,Sn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,Sn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,Sn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,Sn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,Sn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Ne=require("react/jsx-runtime");function of(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(c,u,l)=>(0,Ne.jsx)("button",{type:"button",className:`${l.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:l.title,disabled:l.disabled,onClick:u,children:c});return(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsxs)("div",{className:"im-header",children:[(0,Ne.jsx)(Jd,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Ne.jsx)(Ot,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,Ne.jsx)(Ot,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,Ne.jsx)(nf,{summary:e.cost,budget:t?.budget??0}),(0,Ne.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,Ne.jsxs)("div",{className:"im-toolbar",children:[(0,Ne.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,Ne.jsx)("span",{className:"im-drag-grip",children:(0,Ne.jsx)(Ie,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,Ne.jsx)("span",{className:"im-drag-grip",children:(0,Ne.jsx)(Ie,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,Ne.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var Be=require("react/jsx-runtime");function jt({icon:e,label:t,title:n,active:o,onClick:r}){return(0,Be.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,Be.jsx)(Ie,{name:e,size:14}),(0,Be.jsx)("span",{className:"im-dock-row-label",children:t})]})}function rf(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,Be.jsxs)("div",{className:"im-dock nodrag",children:[(0,Be.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,Be.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,Be.jsx)(jt,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,Be.jsx)(jt,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,Be.jsx)(jt,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,Be.jsx)(jt,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,Be.jsx)(jt,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,Be.jsx)(jt,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,Be.jsx)(jt,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,Be.jsx)(jt,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var We=require("react"),cf=require("react-dom");var Za="application/x-dsh-imagora-canvas",Vr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},af="\u677E\u5F00\u53D6\u6D88";function Ka(e){return e.dataTransfer?.types.includes("Files")??!1}function ko(e,t){if(Ka(e))return"images";let n=e.dataTransfer?.getData(Za);return n==="prompt"||n==="group"?n:t}function sf(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function lf(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":Vr[e]}function ja(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var $t=require("react/jsx-runtime"),Jw=22,ev=28,Xr=8;function uf(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,c]=(0,We.useState)(null),u=(0,We.useRef)(null),l=(0,We.useRef)(0),d=(0,We.useRef)(null),f=(0,We.useRef)(null),p=(0,We.useRef)(null),h=(0,We.useCallback)((S,C)=>{u.current=S,c(S);let k=p.current;k&&k.textContent!==C&&(k.textContent=C)},[]),b=(0,We.useCallback)(()=>{u.current=null,l.current=0,c(null),f.current?.classList.remove("is-outside")},[]),g=(0,We.useCallback)((S,C)=>{let k=d.current;if(!k)return;let M=Math.min(S+Jw,window.innerWidth-k.offsetWidth-Xr),I=Math.min(C+ev,window.innerHeight-k.offsetHeight-Xr);k.style.transform=`translate(${Math.max(Xr,M)}px, ${Math.max(Xr,I)}px)`},[]),y=(0,We.useCallback)((S,C,k)=>{let M=t.current;if(!M)return o();let I=M.getBoundingClientRect(),L=k?Math.min(Math.max(S,I.left),I.left+I.width):S,R=k?Math.min(Math.max(C,I.top),I.top+I.height):C;return r({x:L,y:R})},[t,o,r]);(0,We.useEffect)(()=>{let S=M=>{Ka(M)&&M.preventDefault()},C=M=>{let I=u.current;if(!I||I==="images")return;g(M.clientX,M.clientY);let L=t.current,R=!!(L&&ja(M.clientX,M.clientY,L.getBoundingClientRect())),T=R?Vr[I]:af,P=p.current;P&&P.textContent!==T&&(P.textContent=T),f.current?.classList.toggle("is-outside",!R)},k=()=>{l.current=0,b()};return window.addEventListener("dragover",S),window.addEventListener("dragover",C),window.addEventListener("drop",S),window.addEventListener("dragend",k),window.addEventListener("blur",k),()=>{window.removeEventListener("dragover",S),window.removeEventListener("dragover",C),window.removeEventListener("drop",S),window.removeEventListener("dragend",k),window.removeEventListener("blur",k)}},[t,b,g]);let v={onDragEnter:S=>{if(n)return;let C=ko(S,u.current);C&&(S.preventDefault(),C==="images"&&(l.current+=1),h(C,lf(C,sf(S.dataTransfer))),g(S.clientX,S.clientY))},onDragOver:S=>{n||!ko(S,u.current)||(S.preventDefault(),S.dataTransfer.dropEffect="copy",g(S.clientX,S.clientY))},onDragLeave:S=>{n||ko(S,u.current)==="images"&&(l.current-=1,l.current<=0&&b())},onDrop:S=>{if(n)return;let C=ko(S,u.current);if(!C)return;S.preventDefault();let k=t.current,M=!k||ja(S.clientX,S.clientY,k.getBoundingClientRect());if(b(),C==="images"){let I=Array.from(S.dataTransfer.files??[]);if(!I.length)return;i(I,y(S.clientX,S.clientY,!0));return}M&&a(C,y(S.clientX,S.clientY,!1))}},m=(0,We.useCallback)((S,C)=>{S.dataTransfer.setData(Za,C),S.dataTransfer.effectAllowed="copy",h(C,Vr[C]),g(S.clientX,S.clientY)},[g,h]),w=(0,cf.createPortal)((0,$t.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,$t.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,$t.jsx)(Ie,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,$t.jsx)(Ie,{name:"close",size:14})}),(0,$t.jsx)("span",{ref:p,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:w,dragHandlers:v,startToolbarDrag:m,hideDropChip:b}}var Ht=require("react");var df=2;function ff({rootRef:e,canvasRef:t,instanceRef:n,setNodes:o,modalOpen:r}){let[i,a]=(0,Ht.useState)(null),[s,c]=(0,Ht.useState)(null),u=(0,Ht.useRef)(null),l=(0,Ht.useCallback)(()=>a(null),[]);return(0,Ht.useEffect)(()=>{if(r){u.current=null,c(null);return}let d=t.current,f=e.current;if(!d||!f)return;let p=v=>{if(v.button!==2)return;let m=n.current;if(!m)return;let w=v.target instanceof Element?v.target:null;if(w?.closest("input, textarea, [contenteditable]"))return;let S=m.screenToFlowPosition({x:v.clientX,y:v.clientY}),C=w?.closest(".react-flow__node"),k=C instanceof HTMLElement?C.dataset.id??null:null;u.current={startFlow:S,nodeId:k,clientX:v.clientX,clientY:v.clientY},c({x:S.x,y:S.y,width:0,height:0}),v.preventDefault()},h=v=>{let m=u.current,w=n.current;if(!m||!w)return;let S=w.screenToFlowPosition({x:v.clientX,y:v.clientY});c({x:Math.min(m.startFlow.x,S.x),y:Math.min(m.startFlow.y,S.y),width:Math.abs(S.x-m.startFlow.x),height:Math.abs(S.y-m.startFlow.y)})},b=v=>{let m=u.current,w=n.current;if(!m||!w)return;u.current=null;let S=w.screenToFlowPosition({x:v.clientX,y:v.clientY}),C={x:Math.min(m.startFlow.x,S.x),y:Math.min(m.startFlow.y,S.y),width:Math.abs(S.x-m.startFlow.x),height:Math.abs(S.y-m.startFlow.y)};if(c(null),C.width<df&&C.height<df){a(m.nodeId?{x:m.clientX,y:m.clientY,nodeId:m.nodeId}:null);return}a(null),o(k=>{let M=!1,I=k.map(L=>{let R=He(L),T=L.position.x>=C.x&&L.position.y>=C.y&&L.position.x+R.width<=C.x+C.width&&L.position.y+R.height<=C.y+C.height;return T===!!L.selected?L:(M=!0,{...L,selected:T})});return M?I:k})},g=v=>{let m=v.target instanceof Element?v.target:null;m&&(m.closest("input, textarea, [contenteditable]")||v.preventDefault())},y=()=>{u.current&&(u.current=null,c(null))};return d.addEventListener("mousedown",p),window.addEventListener("mousemove",h),window.addEventListener("mouseup",b),f.addEventListener("contextmenu",g,!0),window.addEventListener("blur",y),()=>{d.removeEventListener("mousedown",p),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",b),f.removeEventListener("contextmenu",g,!0),window.removeEventListener("blur",y)}},[t,e,n,o,r]),{nodeMenu:i,boxRect:s,closeMenu:l,setNodeMenu:a}}var yt=require("react"),hf=require("react-dom");function bt(e,t,n={}){let o={id:e,label:t};return n.danger&&(o.danger=!0),n.disabled&&(o.disabled=!0),{kind:"action",action:o}}var Qa={kind:"separator"};function pf(e,t){let n=[];if(t.selectedCount>1&&(n.push(bt("delete-selection",`\u5220\u9664\u6240\u9009 ${t.selectedCount} \u9879`,{danger:!0})),n.push(Qa)),e==="image"){let r=!t.hasUrl;n.push(bt("preview","\u9884\u89C8\u5927\u56FE",{disabled:r}),bt("crop","\u88C1\u526A",{disabled:r}),bt("upscale","\u653E\u5927",{disabled:r}),bt("split","\u5207\u5206",{disabled:r}),bt("mask","\u8499\u7248\u91CD\u7ED8",{disabled:r}),bt("replace","\u66FF\u6362\u56FE\u7247"),Qa)}else e==="prompt"&&n.push(bt("run","\u8FD0\u884C"),bt("copy-prompt","\u590D\u5236\u63D0\u793A\u8BCD"),Qa);let o=t.selectedCount>1?"\u4EC5\u5220\u9664\u6B64\u9879":"\u5220\u9664";return n.push(bt("delete",o,{danger:!0})),n}function Ja(e,t,n,o=8){let r=Math.max(0,n.width-t.width-o),i=Math.max(0,n.height-t.height-o);return{x:Math.min(Math.max(0,e.x),r),y:Math.min(Math.max(0,e.y),i)}}function mf(e){return e.reduce((t,n)=>t+(n.kind==="action"?28:9),0)}function gf(e){return e==="Escape"||e==="Tab"}var Gr=require("react/jsx-runtime");function bf(){return{width:window.innerWidth,height:window.innerHeight}}function nv(e,t,n){return Ja({x:e,y:t},{width:200,height:mf(n)},bf())}function yf({x:e,y:t,items:n,onPick:o,onClose:r}){let i=(0,yt.useRef)(null),[a,s]=(0,yt.useState)(()=>nv(e,t,n)),[c,u]=(0,yt.useState)(null);return(0,yt.useEffect)(()=>(Br(),()=>Wr()),[]),(0,yt.useLayoutEffect)(()=>{let l=i.current?.getBoundingClientRect().height??0;if(l<=0)return;let d=Ja({x:e,y:t},{width:200,height:l},bf());s(f=>f.x===d.x&&f.y===d.y?f:d)},[e,t]),(0,yt.useEffect)(()=>{let l=p=>{let h=p.target;h instanceof Node&&i.current?.contains(h)||r()},d=p=>{p.defaultPrevented||gf(p.key)&&r()},f=()=>r();return document.addEventListener("pointerdown",l),document.addEventListener("keydown",d),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",d),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[r]),(0,hf.createPortal)((0,Gr.jsx)("div",{ref:i,role:"menu","aria-label":"\u8282\u70B9\u64CD\u4F5C","data-testid":"node-context-menu",className:"im-select-list",style:{left:a.x,top:a.y,width:200,zIndex:72,userSelect:"none"},children:n.map((l,d)=>{if(l.kind==="separator")return(0,Gr.jsx)("div",{role:"separator",className:"im-menu-separator"},`separator-${d}`);let{action:f}=l,p=f.disabled===!0;return(0,Gr.jsx)("button",{type:"button",role:"menuitem","data-testid":`node-menu-${f.id}`,"aria-disabled":p?"true":void 0,className:`im-select-option${c===f.id?" is-active":""}${f.danger?" is-danger":""}${p?" is-disabled":""}`,style:{height:28,minHeight:0,paddingTop:0,paddingBottom:0},onClick:()=>{p||o(f.id)},onMouseEnter:()=>u(f.id),onMouseLeave:()=>u(null),children:f.label},f.id)})}),document.body)}var xf="dsh-imagora.canvas-minimap.v1";function wf(){try{let e=localStorage.getItem(xf);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function vf(e){try{localStorage.setItem(xf,e?"1":"0")}catch{}}var Qt=require("react/jsx-runtime");function kf(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,Qt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Qt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u6309\u53C2\u8003\u5173\u7CFB\u5206\u5C42\u91CD\u6392\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u63D0\u793A\u8BCD\u5361 / \u7ED3\u679C\u56FE / \u56FE\u7247\u7EC4\u4E00\u8D77\u53C2\u4E0E\uFF0C\u540C\u5C42\u6309\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Qt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var Ye=require("react/jsx-runtime");function Sf(){return(0,Ye.jsxs)("div",{className:"im-empty",children:[(0,Ye.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,Ye.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,Ye.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var ov=5;function Cf({logs:e}){if(!e.length)return null;let t=e.slice(-ov);return(0,Ye.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,Ye.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var rv={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Ef({text:e}){return e?(0,Ye.jsx)("div",{style:rv,children:e}):null}function Mf({tone:e,children:t,action:n}){return(0,Ye.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ye.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ye.jsx)(Ie,{name:e==="error"?"help":"clock"})}),(0,Ye.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ye.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var ve=require("react"),Df=require("react-dom");async function iv(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function Nf(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await iv(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function _f(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var So=e=>Math.min(8,Math.max(.2,e));function If(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function Pf(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function zf(e,t,n){return Math.round(e*Pf(t,n)*100)}function Rf(e,t){let n=Pf(e,t);return n?So(1/n):1}var ge=require("react/jsx-runtime"),Yr=1.2,av=5;function qr({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,ve.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,ve.useState)(!1),[c,u]=(0,ve.useState)(null),l=(0,ve.useRef)(null),d=(0,ve.useRef)(!1),f=c?.kind==="copying",p=(0,ve.useRef)(null),[h,b]=(0,ve.useState)(null),g=(0,ve.useRef)({width:0,height:0}),y=(0,ve.useRef)(null),v=(0,ve.useRef)(null),m=(0,ve.useRef)(null),w=(0,ve.useRef)(null),S=(0,ve.useCallback)(E=>{let z=m.current;return z?{zoom:E.zoom,pan:If(E.pan,E.zoom,g.current,{width:z.clientWidth,height:z.clientHeight})}:E},[]),C=(0,ve.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),k=(0,ve.useCallback)(()=>{let E=w.current;if(!E)return;g.current={width:E.clientWidth,height:E.clientHeight};let z={width:E.naturalWidth,height:E.naturalHeight};p.current=z,b(D=>D&&D.width===z.width&&D.height===z.height?D:z)},[]);(0,ve.useEffect)(()=>{let E=()=>k();return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[k]);let M=(0,ve.useCallback)(()=>{let E=Rf(p.current,g.current);i(z=>S({zoom:E,pan:z.pan}))},[S]),I=(0,ve.useCallback)(()=>{let E=p.current,z=v.current;if(!E||!z)return;let D=z.clientWidth*.98,F=z.clientHeight*.98,B=So(Math.min(1,D/E.width,F/E.height));i({zoom:B,pan:{x:0,y:0}})},[]);(0,ve.useEffect)(()=>{let E=m.current;if(!E)return;let z=D=>{D.preventDefault(),D.stopPropagation();let F=E.getBoundingClientRect(),B=D.clientX-F.left-F.width/2,V=D.clientY-F.top-F.height/2;i(Q=>{let G=So(D.deltaY<0?Q.zoom*Yr:Q.zoom/Yr);if(G===Q.zoom)return Q;let K=G/Q.zoom;return S({zoom:G,pan:{x:B-(B-Q.pan.x)*K,y:V-(V-Q.pan.y)*K}})})};return E.addEventListener("wheel",z,{passive:!1}),()=>E.removeEventListener("wheel",z)},[S]),(0,ve.useEffect)(()=>{let E=z=>{z.key==="Escape"&&o()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[o]),(0,ve.useEffect)(()=>()=>{l.current&&window.clearTimeout(l.current)},[]);let L=(E,z)=>{u({kind:E,text:z}),l.current&&window.clearTimeout(l.current),l.current=E==="copying"?null:window.setTimeout(()=>u(null),1200)},R=async(E,z)=>{if(!d.current){d.current=!0,L("copying","\u590D\u5236\u4E2D\u2026");try{await E(),L("copied",z)}catch(D){L("failed",D instanceof Error?D.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},T=E=>{r.zoom<=1||(E.preventDefault(),E.stopPropagation(),E.currentTarget instanceof Element&&E.currentTarget.setPointerCapture(E.pointerId),y.current={startX:E.clientX,startY:E.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:E.target===w.current},s(!0))},P=E=>{let z=y.current;if(!z)return;let D=E.clientX-z.startX,F=E.clientY-z.startY;!z.moved&&Math.hypot(D,F)<=av||(z.moved=!0,i(B=>S({...B,pan:{x:z.panX+D,y:z.panY+F}})))},x=()=>{let E=y.current;y.current=null,s(!1),E&&!E.moved&&!E.onImage&&o()},_=E=>{let z=E.target instanceof Element?E.target:null;z&&(z.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},N=E=>i(z=>S({...z,zoom:So(z.zoom*E)}));return(0,Df.createPortal)((0,ge.jsxs)("div",{ref:v,className:"im-zoom-overlay",onPointerDown:_,onClick:E=>E.stopPropagation(),children:[(0,ge.jsx)("div",{ref:m,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:T,onPointerMove:P,onPointerUp:x,onPointerCancel:x,onDoubleClick:E=>{E.stopPropagation(),C()},children:(0,ge.jsx)("img",{ref:w,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let E=w.current;E&&(p.current={width:E.naturalWidth,height:E.naturalHeight},g.current={width:E.clientWidth,height:E.clientHeight},k())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,ge.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,ge.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,ge.jsx)("div",{"aria-hidden":!0}),(0,ge.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,ge.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,ge.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,ge.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,ge.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,ge.jsxs)("div",{className:"im-zoom-group",children:[(0,ge.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>N(1/Yr),children:(0,ge.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,ge.jsx)("path",{d:"M3.5 8h9"})})}),(0,ge.jsxs)("span",{className:"im-zoom-readout",title:`${h?`${h.width}\xD7${h.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[zf(r.zoom,h,g.current),"%"]}),(0,ge.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>N(Yr),children:(0,ge.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,ge.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,ge.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,ge.jsxs)("div",{className:"im-zoom-group",children:[(0,ge.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:I,children:"\u9002\u5E94\u7A97\u53E3"}),(0,ge.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:M,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,ge.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,ge.jsxs)("div",{className:"im-zoom-group",children:[(0,ge.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void R(()=>Nf(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,ge.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void R(()=>_f(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,ge.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),c?(0,ge.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var ts=require("react");var Jt=require("react"),Of=require("react-dom");var xt=require("react/jsx-runtime"),Tf=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),Co=[];function Af(e){return Co[Co.length-1]===e}function Te({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:c=!1,headerless:u=!1}){let l=`im-modal-${(0,Jt.useId)()}`,d=`${l}-title`,f=(0,Jt.useRef)(null),p=(0,Jt.useRef)(null),h=(0,Jt.useRef)(o);return h.current=o,(0,Jt.useEffect)(()=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,Co.push(l);let g=f.current;(a?.current??g?.querySelector(Tf)??g)?.focus();let v=m=>{if(!Af(l))return;if(m.key==="Escape"){if(Wd())return;m.preventDefault(),m.stopPropagation(),h.current();return}if(m.key!=="Tab"||!g)return;let w=Array.from(g.querySelectorAll(Tf)).filter(k=>!k.hidden&&k.getAttribute("aria-hidden")!=="true");if(!w.length){m.preventDefault(),g.focus();return}let S=w[0],C=w[w.length-1];!S||!C||(m.shiftKey&&(document.activeElement===S||!g.contains(document.activeElement))?(m.preventDefault(),C.focus()):!m.shiftKey&&document.activeElement===C&&(m.preventDefault(),S.focus()))};return document.addEventListener("keydown",v,!0),()=>{document.removeEventListener("keydown",v,!0);let m=Co.lastIndexOf(l);m>=0&&Co.splice(m,1);let w=p.current;window.setTimeout(()=>w?.focus(),0)}},[a]),(0,Of.createPortal)((0,xt.jsx)("div",{className:`im-modal-shell${c?" im-modal-shell--nested":""}`,onMouseDown:g=>{s&&g.target===g.currentTarget&&Af(l)&&o()},children:(0,xt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:g=>g.stopPropagation(),children:[u?(0,xt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,xt.jsxs)("header",{className:"im-modal-header",children:[(0,xt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,xt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,xt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,xt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ue=require("react/jsx-runtime");function Lf({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,ts.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,ts.useState)(null),c=r.trim(),u=e.some(d=>d.name===c),l=()=>{if(c){if(u&&a!==c){s(c);return}n(c)}};return a?(0,ue.jsx)(Te,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,ue.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,ue.jsxs)(Te,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c,onClick:l,children:"\u4FDD\u5B58"})]}),children:[(0,ue.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&l()}}),(0,ue.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,ue.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,ue.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,ue.jsx)("span",{className:"im-pick-name",children:d.name}),(0,ue.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function $f({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,ue.jsx)(Te,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,ue.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,ue.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,ue.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,ue.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,ue.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var sv=[["\u753B\u5E03","\u53F3\u952E\u62D6\u62FD\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u5F39\u83DC\u5355 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8"],["\u8282\u70B9","\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C/\u6574\u7406/\u8FDE\u7EBF/\u8BBE\u8DEF\u5F84/\u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88"],["\u8FDE\u7EBF","\u56FE\u7247\u2192\u63D0\u793A\u8BCD/\u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u4EC5\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete/Backspace \u5220\u9664\u8FDE\u7EBF"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function Hf({onClose:e,config:t}){return(0,ue.jsx)(Te,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u62D6\u5165\u56FE\u7247 \xB7 \u53F3\u952E\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u51FA\u83DC\u5355",size:"md",onClose:e,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,ue.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ue.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:sv.map(([n,o])=>(0,ue.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,ue.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,ue.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,ue.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,ue.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var Je=require("react");function qe(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function Wf(e,t=.06){let n=qe(e.width,t,1),o=qe(e.height,t,1);return{width:n,height:o,x:qe(e.x,0,1-n),y:qe(e.y,0,1-o)}}function Ff(e,t,n){return{...e,x:qe(e.x+t,0,1-e.width),y:qe(e.y+n,0,1-e.height)}}function Vf(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let l=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=l,a.height*=l,a.width<.06||a.height<.06){let p=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=p,a.height*=p}a.width=qe(a.width,.06,1),a.height=qe(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=qe(a.width,.06,1),a.height=qe(a.height,.06,1);return a.x=qe(a.x,0,1-a.width),a.y=qe(a.y,0,1-a.height),a}function Xf(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:qe(e.x+(e.width-r)/2,0,1-r),y:qe(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function ns(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function lv(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function Gf(e,t){let n=lv(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function os(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function en(e){let t=await os(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function Yf(e,t){let n=await os(e);if(t)return Bf(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return Bf(n,r,i,o,o)}async function qf(e,t){let n=await os(e),{width:o,height:r}=ns(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?cv(n,o,r):Uf(n,n.width,n.height,o,r,t.algorithm)}function Bf(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function cv(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=Zf(o,r,i,a,s,"high"),r=a,i=s}return Uf(o,r,i,t,n,"high")}function Uf(e,t,n,o,r,i){return Zf(e,t,n,o,r,i).toDataURL("image/png")}function Zf(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Pe=require("react/jsx-runtime"),Kf=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],dv=["nw","n","ne","e","se","s","sw","w"],rs={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function jf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Je.useRef)(null),[i,a]=(0,Je.useState)(null),[s,c]=(0,Je.useState)({x:.08,y:.08,width:.84,height:.84}),[u,l]=(0,Je.useState)(null),[d,f]=(0,Je.useState)(!1),[p,h]=(0,Je.useState)(null),b=(0,Je.useRef)(null);(0,Je.useEffect)(()=>{let k=!0;return en(e).then(M=>{k&&(a(M),c(Wf({x:.06,y:.06,width:.88,height:.88})))}).catch(M=>{k&&h(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(M)}`)}),()=>{k=!1}},[e]);let g=k=>{l(k),i&&k!==null&&c(M=>Xf(M,k,i))},y=(k,M)=>{k.stopPropagation(),k.target.setPointerCapture?.(k.pointerId),b.current={mode:M,startX:k.clientX,startY:k.clientY,base:s}},v=(0,Je.useCallback)(k=>{let M=b.current,I=r.current;if(!M||!I)return;let L=I.getBoundingClientRect();if(!L.width||!L.height)return;let R=(k.clientX-M.startX)/L.width,T=(k.clientY-M.startY)/L.height;c(M.mode==="move"?Ff(M.base,R,T):Vf(M.base,R,T,M.mode,u,i??{width:1,height:1}))},[u,i]),m=()=>{b.current=null},w=async()=>{f(!0),h(null);try{let k=await Yf(e,s),M=Math.round(s.width*(i?.width??0)),I=Math.round(s.height*(i?.height??0));await o(k,`\u88C1\u526A ${M}\xD7${I}${u?` \xB7 ${Kf.find(L=>L.ratio===u)?.label}`:""}`)}catch(k){h(`\u88C1\u526A\u5931\u8D25\uFF1A${ce(k)}`)}finally{f(!1)}},S=i?Math.round(s.width*i.width):0,C=i?Math.round(s.height*i.height):0;return(0,Pe.jsx)(Te,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Pe.jsxs)(Pe.Fragment,{children:[(0,Pe.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",S," \xD7 ",C,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${Gf(i.width,i.height)}`:"",(0,Pe.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||S<8||C<8,onClick:()=>void w(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Pe.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Pe.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":"\u88C1\u526A\u6BD4\u4F8B",children:[(0,Pe.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),Kf.map(k=>{let M=k.ratio===u;return(0,Pe.jsx)("button",{type:"button","aria-pressed":M,className:`im-chip im-chip--sm im-chip--action${M?" is-brand":""}`,onClick:()=>g(k.ratio),children:k.label},k.label)}),(0,Pe.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[S," \xD7 ",C,"px"]})]}),(0,Pe.jsxs)("div",{ref:r,onPointerMove:v,onPointerUp:m,onPointerCancel:m,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Pe.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Pe.jsx)("div",{onPointerDown:k=>y(k,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:dv.map(k=>(0,Pe.jsx)("span",{onPointerDown:M=>y(M,k),style:{position:"absolute",left:rs[k].left,top:rs[k].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:rs[k].cursor}},k))})]}),p?(0,Pe.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Fe=require("react");function is(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function as(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function ss(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:as(e)*n/2}function Qf(e,t,n=.004){if(!is(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function Jf(e,t,n,o){if(!is(e)||!is(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/r);if(c<=1)return[];let u=Math.min(c,2048),l=[];for(let d=1;d<u;d+=1){let f=d/u;l.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return l}function fv(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function ep(e){return!fv(e)}var ze=require("react/jsx-runtime"),Ur=640;function tp({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Fe.useRef)(null),i=(0,Fe.useRef)(!1),[a,s]=(0,Fe.useState)(null),[c,u]=(0,Fe.useState)(null),[l,d]=(0,Fe.useState)([]),[f,p]=(0,Fe.useState)("paint"),[h,b]=(0,Fe.useState)(.08),[g,y]=(0,Fe.useState)(!1),[v,m]=(0,Fe.useState)(null);(0,Fe.useEffect)(()=>{let T=!0;en(e).then(x=>{T&&s(x)}).catch(x=>{T&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(x)}`)});let P=new Image;return P.crossOrigin="anonymous",P.onload=()=>{T&&u(P)},P.src=e,()=>{T=!1,u(null)}},[e]);let w=(0,Fe.useMemo)(()=>a?a.width>=a.height?{width:Ur,height:Math.round(a.height/a.width*Ur)}:{width:Math.round(a.width/a.height*Ur),height:Ur}:{width:0,height:0},[a]);(0,Fe.useEffect)(()=>{let T=r.current;if(!T||!c||!w.width)return;let P=T.getContext("2d");if(!P||(T.width=w.width,T.height=w.height,P.clearRect(0,0,w.width,w.height),P.drawImage(c,0,0,w.width,w.height),!a))return;let x=ss(h,{width:w.width,height:w.height});P.save(),P.globalAlpha=.55,P.fillStyle="#ffffff",P.strokeStyle="#ffffff",P.lineWidth=x*2,P.lineCap="round",P.lineJoin="round";for(let _ of l){_.mode==="erase"?(P.globalCompositeOperation="destination-out",P.strokeStyle="#000",P.fillStyle="#000"):(P.globalCompositeOperation="source-over",P.strokeStyle="#ffffff",P.fillStyle="#ffffff");let N=_.points;if(N.length&&(P.beginPath(),P.arc(N[0].x*w.width,N[0].y*w.height,x,0,Math.PI*2),P.fill(),N.length>1)){P.beginPath(),P.moveTo(N[0].x*w.width,N[0].y*w.height);for(let E of N.slice(1))P.lineTo(E.x*w.width,E.y*w.height);P.stroke()}}P.restore()},[w,l,h,a,c]);let S=T=>{let P=r.current;if(!P)return null;let x=P.getBoundingClientRect();return!x.width||!x.height?null:{x:Math.min(1,Math.max(0,(T.clientX-x.left)/x.width)),y:Math.min(1,Math.max(0,(T.clientY-x.top)/x.height))}},C=T=>{let P=S(T);P&&(T.currentTarget.setPointerCapture?.(T.pointerId),i.current=!0,d(x=>[...x,{mode:f,size:h,points:[P]}]))},k=T=>{if(!i.current)return;let P=S(T);P&&d(x=>{let _=x[x.length-1];if(!_)return x;let N=Qf(_.points,P);return N===_.points?x:[...x.slice(0,-1),{..._,points:N}]})},M=()=>{i.current=!1},I=async()=>{if(!c||!a)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let T=document.createElement("canvas");T.width=a.width,T.height=a.height;let P=T.getContext("2d");if(!P)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");P.fillStyle="#ffffff",P.fillRect(0,0,a.width,a.height);let x=ss(h,{width:a.width,height:a.height});P.globalCompositeOperation="destination-out",P.lineWidth=x*2,P.lineCap="round",P.lineJoin="round",P.strokeStyle="#000",P.fillStyle="#000";for(let _ of l){if(_.mode!=="paint")continue;let N=Jf(_.points[0],_.points[_.points.length-1],x/4,{width:a.width,height:a.height});if(N.length&&(P.beginPath(),P.arc(N[0].x*a.width,N[0].y*a.height,x,0,Math.PI*2),P.fill(),N.length>1)){P.beginPath(),P.moveTo(N[0].x*a.width,N[0].y*a.height);for(let E of N.slice(1))P.lineTo(E.x*a.width,E.y*a.height);P.stroke()}}return T.toDataURL("image/png")},L=async()=>{y(!0),m(null);try{let T=await I();await o(T,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(T){m(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${ce(T)}`)}finally{y(!1)}},R=ep(l);return(0,ze.jsx)(Te,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:g||R,onClick:()=>void L(),children:g?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,ze.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ze.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",label:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"},{mode:"erase",label:"\u64E6"}].map(T=>(0,ze.jsx)("button",{type:"button","aria-pressed":f===T.mode,className:`im-chip im-chip--sm im-chip--action${f===T.mode?" is-brand":""}`,onClick:()=>p(T.mode),children:T.label},T.mode)),(0,ze.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,ze.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(h*100),onChange:T=>b(as(Number(T.target.value)/100)),className:"im-range"}),(0,ze.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(h*100),"%"]})]}),(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>d([]),children:"\u6E05\u7A7A"}),(0,ze.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,ze.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,ze.jsx)("canvas",{ref:r,onPointerDown:C,onPointerMove:k,onPointerUp:M,onPointerCancel:M,style:{width:w.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,ze.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",a?` \xB7 \u539F\u56FE ${a.width} \xD7 ${a.height}`:""]}),v?(0,ze.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:v}):null]})})}var me=require("react");var tn=require("react"),np=require("react-dom"),Cn=require("react/jsx-runtime");function op({text:e}){let t=(0,tn.useRef)(null),n=(0,tn.useRef)(null),[o,r]=(0,tn.useState)(null),[i,a]=(0,tn.useState)(0),s=l=>{let d=t.current;d&&d.scrollHeight>d.clientHeight&&r(l.clientY)},c=l=>{r(d=>d!==null?l.clientY:d)},u=()=>{r(null),a(0)};return(0,tn.useLayoutEffect)(()=>{if(o!==null&&n.current){let l=n.current.getBoundingClientRect();a(Math.max(8,Math.min(o+16,window.innerHeight-l.height-8)))}},[o,e]),(0,Cn.jsxs)(Cn.Fragment,{children:[(0,Cn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:c,onMouseLeave:u,children:e}),o!==null?(0,np.createPortal)((0,Cn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var ee=require("react/jsx-runtime"),rp=60;function ip(e){return Number.isFinite(e)?`${e.toFixed(2)} \u5143`:"-"}function hv(e){let t=e.total?`${e.successRate.toFixed(1)}%`:"-";return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:ip(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:ip(e.cost)},{label:"\u6210\u529F\u7387",value:`${t}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:e.avgSeconds>0?`${e.avgSeconds.toFixed(1)}s`:"-"}]}function bv(e){return e.replace(/[\\/][^\\/]+$/,"")}function ap({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,me.useState)([]),[i,a]=(0,me.useState)(""),[s,c]=(0,me.useState)(""),[u,l]=(0,me.useState)(!1),[d,f]=(0,me.useState)(0),[p,h]=(0,me.useState)(!0),[b,g]=(0,me.useState)(!1),[y,v]=(0,me.useState)(""),[m,w]=(0,me.useState)("ledger"),[S,C]=(0,me.useState)(""),[k,M]=(0,me.useState)(null),[I,L]=(0,me.useState)(new Map),[R,T]=(0,me.useState)(null),[P,x]=(0,me.useState)({dailyLimit:"",singleRunLimit:""}),[_,N]=(0,me.useState)(!1),[E,z]=(0,me.useState)(""),D=(0,me.useRef)(null),F=(0,me.useRef)(0),B=(0,me.useRef)([]),V=(0,me.useRef)(i),Q=(0,me.useRef)(s);V.current=i,Q.current=s;let G=(0,me.useCallback)(async X=>{let J=++F.current;h(!0),v("");try{let oe=await Pa({limit:rp,offset:0,query:X?.query??V.current,status:X?.status??Q.current});if(J!==F.current)return;let de=Array.isArray(oe.items)?oe.items:[];w(oe.source==="ledger"?"ledger":"none"),C(typeof oe.ledgerPath=="string"?oe.ledgerPath:""),r(de),B.current=de,l(oe.hasMore===!0),f(Number(oe.total)||de.length)}catch(oe){J===F.current&&v(ce(oe))}finally{J===F.current&&h(!1)}},[]),K=(0,me.useCallback)(async()=>{if(b||!u)return;let X=F.current;g(!0);try{let J=await Pa({limit:rp,offset:B.current.length,query:V.current,status:Q.current});if(X!==F.current)return;let oe=Array.isArray(J.items)?J.items:[];r(de=>[...de,...oe]),B.current=[...B.current,...oe],l(J.hasMore===!0),f(Number(J.total)||B.current.length)}catch(J){X===F.current&&v(ce(J))}finally{X===F.current&&g(!1)}},[u,b]);(0,me.useEffect)(()=>{G(),Rr().then(M).catch(()=>M(null)),id().then(X=>L(new Map((X?.images??[]).map(J=>[J.id,J])))).catch(()=>L(new Map))},[G]),(0,me.useEffect)(()=>{k?.localBudget&&x({dailyLimit:k.localBudget.dailyLimit?String(k.localBudget.dailyLimit):"0",singleRunLimit:k.localBudget.singleRunLimit?String(k.localBudget.singleRunLimit):"0"})},[k]);let le=async()=>{N(!0),z("");let X={dailyLimit:Math.max(0,Number(P.dailyLimit)||0),singleRunLimit:Math.max(0,Number(P.singleRunLimit)||0)};try{await hd(X);let J=await Rr();M(J),z("\u9884\u7B97\u5DF2\u4FDD\u5B58")}catch(J){z(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(J)}`)}finally{N(!1)}},W=600,O=(0,me.useCallback)(()=>{let X=D.current;X&&X.scrollHeight-X.scrollTop-X.clientHeight<W&&K()},[K]),U=(0,me.useMemo)(()=>o.filter(X=>X.status==="error"&&X.inputRefMissing).length,[o]),ne=k?hv(k):[],re=k?.bySize.slice(0,3)??[],q=S||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(Te,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,ee.jsxs)("div",{className:"im-history",children:[(0,ee.jsxs)("div",{className:"im-history-bar",children:[(0,ee.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,ee.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:X=>a(X.target.value),onKeyDown:X=>{X.key==="Enter"&&G()}}),(0,ee.jsxs)("select",{className:"im-field im-history-status",value:s,"aria-label":"\u6309\u72B6\u6001\u7B5B\u9009",onChange:X=>{c(X.target.value),G({status:X.target.value})},children:[(0,ee.jsx)("option",{value:"",children:"\u5168\u90E8\u72B6\u6001"}),(0,ee.jsx)("option",{value:"ok",children:"\u6210\u529F"}),(0,ee.jsx)("option",{value:"error",children:"\u5931\u8D25"})]}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void G(),children:"\u641C\u7D22"}),(0,ee.jsxs)("div",{className:"im-history-bar-end",children:[U>0?(0,ee.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[U," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),ne.length?(0,ee.jsxs)("div",{className:"im-history-stats",children:[(0,ee.jsxs)("div",{className:"im-history-stat-grid",children:[ne.map(X=>(0,ee.jsxs)("div",{className:"im-history-stat",children:[(0,ee.jsx)("div",{className:"im-history-stat-label",children:X.label}),(0,ee.jsx)("div",{className:"im-history-stat-value",children:X.value})]},X.label)),re.length?(0,ee.jsxs)("div",{className:"im-history-stat",children:[(0,ee.jsx)("div",{className:"im-history-stat-label",children:"\u6309\u5C3A\u5BF8"}),(0,ee.jsx)("div",{className:"im-history-stat-value",children:re.map(X=>`${X.size} \xD7${X.count}`).join(" \xB7 ")})]}):null]}),(0,ee.jsxs)("div",{className:"im-history-budget",children:[(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u65E5\u9884\u7B97"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:P.dailyLimit,title:"\u5F53\u65E5\u7D2F\u8BA1\u8D39\u7528\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4",onChange:X=>x(J=>({...J,dailyLimit:X.target.value}))})]}),(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u5355\u6B21\u4E0A\u9650"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:P.singleRunLimit,title:"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650",onChange:X=>x(J=>({...J,singleRunLimit:X.target.value}))})]}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:_||p,onClick:()=>void le(),children:_?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u9884\u7B97"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void Rr().then(M).catch(()=>{}),children:"\u5237\u65B0"}),E?(0,ee.jsx)("span",{className:"im-history-budget-tip",children:E}):null]})]}):null,(0,ee.jsxs)("div",{ref:D,className:"im-history-list",onScroll:O,"data-testid":"history-list",children:[y?(0,ee.jsx)("div",{className:"im-history-error",children:y}):null,p?(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("ul",{className:"im-history-rows",children:o.map((X,J)=>{let oe=X.assetId?I.get(X.assetId):void 0,de=!!oe;return(0,ee.jsxs)("li",{className:"im-history-row",children:[(0,ee.jsx)("div",{className:"im-history-thumb",children:X.url?(0,ee.jsx)("img",{src:X.url,alt:X.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>T({url:X.url,path:X.path})}):(0,ee.jsx)("span",{className:"im-history-thumb-empty",children:X.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,ee.jsxs)("div",{className:"im-history-main",children:[(0,ee.jsx)(op,{text:X.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,ee.jsxs)("p",{className:"im-history-meta",children:[X.time||"-"," \xB7 ",X.quality||"-"," \xB7 ",X.size||"-"]}),X.inputRefs.length?(0,ee.jsx)("div",{className:"im-history-refs",children:X.inputRefs.map(ye=>(0,ee.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,ee.jsx)("img",{src:ye.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>T({url:ye.url,path:ye.path})})},ye.id))}):null,X.inputRefMissing?(0,ee.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,ee.jsxs)("div",{className:"im-history-actions",children:[(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!X.prompt,onClick:()=>void navigator.clipboard.writeText(X.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!X.path,onClick:()=>void Tr(bv(X.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!de,title:de?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{oe&&t([oe])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${X.time}-${X.output}-${J}`)})}),(0,ee.jsx)("div",{className:"im-history-pager",children:b?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":u?(0,ee.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void K(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):m==="none"?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,ee.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,ee.jsx)("code",{children:q}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),R?(0,ee.jsx)(qr,{imageUrl:R.url,...R.path?{copyPath:R.path}:{},onClose:()=>T(null)}):null]})}var wt=require("react");var Ee=require("react/jsx-runtime");async function yv(e,t,n,o){let r=await new Promise((c,u)=>{let l=new Image;l.onload=()=>c(l),l.onerror=()=>u(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),l.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let c=0;c<n;c+=1)for(let u=0;u<t;u+=1){let l=document.createElement("canvas");l.width=i,l.height=a;let d=l.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,u*i,c*a,i,a,0,0,i,a),s.push(l.toDataURL("image/png"))}return s}var xv="52vh";function sp({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,wt.useState)(null),[i,a]=(0,wt.useState)(2),[s,c]=(0,wt.useState)(2),[u,l]=(0,wt.useState)(!1),[d,f]=(0,wt.useState)(null);(0,wt.useEffect)(()=>{let g=!0;return en(e).then(y=>{g&&r(y)}).catch(y=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(y)}`)}),()=>{g=!1}},[e]);let p=(0,wt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),h=async()=>{if(o){l(!0),f(null);try{let g=await yv(e,i,s,o);await n(g.map((y,v)=>({dataUrl:y,note:`\u5207\u5206 ${v+1}/${g.length}`})))}catch(g){f(`\u5207\u5206\u5931\u8D25\uFF1A${ce(g)}`)}finally{l(!1)}}},b=i*s;return(0,Ee.jsx)(Te,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||b<2,onClick:()=>void h(),children:u?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${b} \u5F20`})]}),children:(0,Ee.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ee.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,Ee.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,Ee.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:g=>a(Number(g.target.value)),className:"im-range"}),(0,Ee.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,Ee.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,Ee.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:g=>c(Number(g.target.value)),className:"im-range"}),(0,Ee.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,Ee.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[b," \u5F20 \xB7 \u6BCF\u5F20 ",p.w," \xD7 ",p.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,Ee.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,Ee.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${xv} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(g,y)=>(0,Ee.jsx)("span",{style:{position:"absolute",left:`${(y+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${y}`)),Array.from({length:s-1},(g,y)=>(0,Ee.jsx)("span",{style:{position:"absolute",top:`${(y+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${y}`))]})}),(0,Ee.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,Ee.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var vt=require("react");var _e=require("react/jsx-runtime"),lp=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],cp=[1024,1536,2048,3072,4096];function dp({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,vt.useState)(null),[i,a]=(0,vt.useState)(2048),[s,c]=(0,vt.useState)("high"),[u,l]=(0,vt.useState)(!1),[d,f]=(0,vt.useState)(null);(0,vt.useEffect)(()=>{let y=!0;return en(e).then(v=>{if(!y)return;r(v);let m=Math.max(v.width,v.height),w=cp.find(S=>S>m)??4096;a(w)}).catch(v=>{y&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(v)}`)}),()=>{y=!1}},[e]);let p=(0,vt.useMemo)(()=>o?ns(o.width,o.height,i):{width:0,height:0},[o,i]),h=o&&o.width>0?p.width/o.width:0,b=!!o&&p.width<o.width,g=async()=>{l(!0),f(null);try{let y=await qf(e,{targetLongEdge:i,algorithm:s});await n(y,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${lp.find(v=>v.value===s)?.label}`)}catch(y){f(`\u653E\u5927\u5931\u8D25\uFF1A${ce(y)}`)}finally{l(!1)}};return(0,_e.jsx)(Te,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,_e.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||p.width<8||p.height<8,onClick:()=>void g(),children:u?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,_e.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,_e.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,_e.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),cp.map(y=>(0,_e.jsx)("button",{type:"button","aria-pressed":y===i,className:`im-btn-sm ${y===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(y),children:y},y))]}),(0,_e.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,_e.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),lp.map(y=>(0,_e.jsx)("button",{type:"button","aria-pressed":y.value===s,className:`im-btn-sm ${y.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(y.value),children:y.label},y.value))]}),(0,_e.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,_e.jsxs)(_e.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,_e.jsxs)("b",{style:{color:b?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),h?` \xB7 ${h.toFixed(2)}\xD7`:"",b?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,_e.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,_e.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var ls=require("react/jsx-runtime");function fp({guides:e}){return e.length?(0,ls.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,ls.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Kn=require("react");var he=require("react/jsx-runtime");function pp({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,Kn.useState)(""),i=(0,Kn.useRef)(null),a=(0,Kn.useMemo)(()=>wd(o),[o]),s=o.trim().length>0,c=a.cards,u=a.issues??[];return(0,he.jsx)(Te,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002",size:"lg",onClose:t,initialFocusRef:i,footer:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,he.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c.length||u.length>0,onClick:()=>n(c),children:["\u786E\u8BA4\u5EFA\u5361\uFF08",c.length,"\uFF09"]})]}),children:(0,he.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,he.jsx)("textarea",{ref:i,value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),(0,he.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:s?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)("div",{className:"im-import-summary",children:[(0,he.jsxs)("span",{children:["\u8BC6\u522B ",c.length," \u5F20\u5361\u7247"]}),u.length?(0,he.jsxs)("span",{className:"im-import-summary-error",children:["\u53D1\u73B0 ",u.length," \u4E2A\u95EE\u9898"]}):null]}),c.map((l,d)=>{let f=$a(l.ratio??"1:1",e);return(0,he.jsxs)("article",{className:"im-import-card",children:[(0,he.jsxs)("div",{className:"im-import-card-meta",children:[(0,he.jsx)("strong",{children:l.title||`\u7B2C ${d+1} \u5F20`}),(0,he.jsx)("span",{children:l.ratio?l.ratio:"\u9ED8\u8BA4\u6BD4\u4F8B"}),(0,he.jsx)("span",{children:f.value}),f.fallback?(0,he.jsx)("span",{className:"im-import-card-fallback",children:"\u5C3A\u5BF8\u56DE\u9000"}):null]}),(0,he.jsx)("p",{className:"im-import-card-text",title:l.prompt||"",children:l.prompt||"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09"})]},`${d}-${l.title??""}`)}),u.map((l,d)=>(0,he.jsx)("div",{className:"im-import-issue",children:l.message},`issue-${d}`))]}):(0,he.jsx)("div",{className:"im-import-summary",children:"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8"})}),(0,he.jsxs)("p",{className:"im-field-hint",children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,he.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,he.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var nn=require("react");var cs=require("react");var kt=require("react/jsx-runtime");function mp({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,cs.useState)(null),[i,a]=(0,cs.useState)(!1),s=Number(e?.budget??0),c=async u=>{a(!0);try{let l=await pd(u);t(l),r(null),n(u>0?`\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${u.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(l){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(l)}`)}finally{a(!1)}};return(0,kt.jsx)("div",{className:"im-fieldset",children:(0,kt.jsxs)("div",{children:[(0,kt.jsx)("label",{className:"im-label",htmlFor:"imagora-budget",children:"\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650"}),(0,kt.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:o??(s?String(s):""),placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",disabled:i,onChange:u=>r(u.target.value)}),(0,kt.jsx)("p",{className:"im-field-hint",children:s?`\u5F53\u524D\u4E0A\u9650 \xA5${s.toFixed(2)}\uFF1B\u672C\u753B\u5E03\u82B1\u5230\u4E0A\u9650\u5C31\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF0C\u4E0D\u7ECF\u786E\u8BA4\uFF09`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\u3002\u8FD9\u4E2A\u4E0A\u9650\u7BA1\u7684\u662F\u8FD9\u4E2A\u753B\u5E03\u7D2F\u8BA1\u82B1\u4E86\u591A\u5C11\uFF1B\u8981\u7BA1\u300C\u4ECA\u5929 / \u5355\u6B21\u82B1\u591A\u5C11\u300D\uFF0C\u53BB\u751F\u6210\u5386\u53F2\u7684\u6210\u672C\u6761\u8BBE\u3002"}),(0,kt.jsxs)("div",{className:"im-field-actions",children:[(0,kt.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:i||!o?.trim(),onClick:()=>void c(Math.max(0,Number(o)||0)),children:"\u4FDD\u5B58\u4E0A\u9650"}),(0,kt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:i||!s,onClick:()=>void c(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})})}var Zr=require("react");var Re=require("react/jsx-runtime");function gp({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,Zr.useState)(""),[i,a]=(0,Zr.useState)(""),[s,c]=(0,Zr.useState)(!1),u=e?.imagoraRoot??"",l=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async h=>{c(!0);try{let b=await md({title:h==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:h==="root"?u:d});if(!b.ok){if(b.reason==="cancelled")return;n(b.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${b.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let g=h==="root"?await Aa(b.path||""):await Ta(b.path||"");t(g),h==="root"?r(""):a(""),n(h==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(b)}`)}finally{c(!1)}},p=async(h,b)=>{c(!0);try{let g=h==="root"?await Aa(b):await Ta(b);t(g),h==="root"?r(""):a(""),n(b?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(g){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(g)}`)}finally{c(!1)}};return(0,Re.jsxs)("div",{className:"im-fieldset",children:[(0,Re.jsxs)("div",{children:[(0,Re.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,Re.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?u:o,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:h=>r(h.target.value)}),(0,Re.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,Re.jsxs)("div",{className:"im-field-actions",children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===u,onClick:()=>void p("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void p("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,Re.jsxs)("div",{children:[(0,Re.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,Re.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?l:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:h=>a(h.target.value)}),(0,Re.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",l?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,Re.jsxs)("div",{className:"im-field-actions",children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===l,onClick:()=>void p("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void Tr(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!l,onClick:()=>void p("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var ie=require("react/jsx-runtime");function Eo({label:e,value:t,mono:n}){return(0,ie.jsxs)("div",{className:"im-spec-row",children:[(0,ie.jsx)("span",{className:"im-spec-key",children:e}),(0,ie.jsx)("span",{className:`im-spec-val${n?" im-spec-mono":""}`,title:t,children:t})]})}function hp({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,nn.useState)(r?.baseUrl??""),[c,u]=(0,nn.useState)(r?.model??e?.model??""),[l,d]=(0,nn.useState)(""),[f,p]=(0,nn.useState)(null),[h,b]=(0,nn.useState)(!1),[g,y]=(0,nn.useState)(null),[v,m]=(0,nn.useState)([]),w=e?.profiles??[],S=i?"plugin":e?.profile??"",C=[{value:"plugin",label:"\u63D2\u4EF6\u5185\u914D\u7F6E"},...w.map(x=>({value:x.name,label:x.label||x.name}))],k=(e?.models??[]).map(x=>({value:x.id,label:x.label||x.id})),M=f??S,I=i&&M!=="plugin",L=async()=>{b(!0);try{let x=null;!I&&!i&&M&&M!==e?.profile&&(x=await Dr(M));let _=a.trim()!==(r?.baseUrl??"")||c.trim()!==(r?.model??"")||l.trim();_&&(x=await Oa({baseUrl:a.trim(),model:c.trim(),apiKey:l.trim()})),x&&n(x),d(""),p(null),o(_?"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548":"\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(x){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(x)}`)}finally{b(!1)}},R=async()=>{b(!0);try{let x=await Oa({reset:!0});n(x),p(null),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(x){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${ce(x)}`)}finally{b(!1)}},T=async()=>{b(!0),y(null);try{let x=await gd({baseUrl:a.trim(),apiKey:l.trim()});m(x.models??[]),y(x.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${x.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(x){m([]),y(`\u8FDE\u4E0D\u901A\uFF1A${ce(x)}`)}finally{b(!1)}},P=!h&&(a.trim().length>0||!i&&M!==S);return(0,ie.jsx)(Te,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\u3002\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002",size:"lg",onClose:t,footer:(0,ie.jsxs)(ie.Fragment,{children:[i?(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:h,onClick:()=>void R(),children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E"}):null,(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:h,onClick:t,children:"\u53D6\u6D88"}),(0,ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!P,onClick:()=>void L(),children:"\u4FDD\u5B58"})]}),children:(0,ie.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-profile",children:"\u914D\u7F6E\u6765\u6E90"}),(0,ie.jsx)(Ot,{id:"imagora-profile",className:"is-block",options:C,value:M,searchable:"auto",onChange:x=>p(x),title:"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"}),(0,ie.jsx)("p",{className:"im-field-hint",children:M==="plugin"?"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\uFF0C\u4E0D\u4F9D\u8D56\u672C\u673A Imagora\u3002\u586B\u597D\u4E0B\u9762\u4E24\u9879\u5373\u53EF\u3002":(w.find(x=>x.name===M)?.label??"")||"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-model-select",children:"\u9ED8\u8BA4\u6A21\u578B"}),(0,ie.jsx)(Ot,{id:"imagora-model-select",className:"is-block",options:k,value:c,searchable:!0,allowCustom:!0,emptyLabel:"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id",onChange:x=>u(x),onCreateCustom:x=>u(x),title:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628"}),(0,ie.jsx)("p",{className:"im-field-hint",children:(e?.models??[]).find(x=>x.id===c)?.note||"\u8BE5\u6765\u6E90\u4E0B\u7684\u53EF\u9009\u6A21\u578B"})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u63D2\u4EF6\u5185\u63A5\u53E3"}),(0,ie.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-provider-base-url",children:"\u63A5\u53E3\u5730\u5740"}),(0,ie.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:h,onChange:x=>s(x.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("label",{className:"im-label",htmlFor:"imagora-provider-api-key",children:["API Key",(0,ie.jsx)("span",{className:`im-field-state is-${r?.apiKeyConfigured?"ok":"warn"}`,children:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E"})]}),(0,ie.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:l,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:h,onChange:x=>d(x.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"\u53EA\u5B58\u5728\u672C\u673A settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:h,onClick:()=>void T(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),g?(0,ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:g}):null]}),v.length?(0,ie.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8},children:[v.slice(0,24).map(x=>(0,ie.jsx)("button",{type:"button",className:`im-chip im-chip--action${x===c?" is-brand":""}`,onClick:()=>u(x),children:x},x)),v.length>24?(0,ie.jsxs)("span",{className:"im-muted",children:["\u2026\u8FD8\u6709 ",v.length-24," \u4E2A"]}):null]}):null]})]})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u751F\u6548\u4E2D"}),(0,ie.jsxs)("div",{className:"im-spec-list is-roomy",children:[(0,ie.jsx)(Eo,{label:"\u6765\u6E90",value:e?.profileLabel||(i?"\u63D2\u4EF6\u5185\u914D\u7F6E":"\u2014")}),(0,ie.jsx)(Eo,{label:"\u6A21\u578B",value:e?.modelLabel||e?.model||"\u2014"}),(0,ie.jsx)(Eo,{label:"API Key",value:r?.apiKeyConfigured?"\u25CF \u5DF2\u8BBE\u7F6E":"\u25CB \u672A\u914D\u7F6E"}),r?.baseUrl?(0,ie.jsx)(Eo,{label:"\u63A5\u53E3\u5730\u5740",value:r.baseUrl,mono:!0}):null,e?.imagoraRoot?(0,ie.jsx)(Eo,{label:"Imagora \u76EE\u5F55",value:e.imagoraRoot,mono:!0}):null]}),(0,ie.jsx)("p",{className:"im-pending-line",style:{marginTop:8},children:"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\uFF08host \u6BCF\u6B21\u8BF7\u6C42\u90FD\u91CD\u8BFB\u914D\u7F6E\uFF0C\u4E0D\u50CF\u539F\u7248\u8981\u91CD\u542F\u5DE5\u4F5C\u53F0\uFF09\u3002"}),I?(0,ie.jsxs)("p",{className:"im-pending-line",style:{marginTop:6},children:[(0,ie.jsx)("span",{className:"im-chip is-brand",children:"\u88AB\u538B\u4F4F"}),"\u5F53\u524D\u751F\u6548\u7684\u662F\u63D2\u4EF6\u5185\u63A5\u53E3\uFF1B\u8981\u8BA9\u300C",w.find(x=>x.name===M)?.label??M,"\u300D\u751F\u6548\uFF0C\u5148\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\u3002"]}):null]}),(0,ie.jsx)(gp,{config:e,onSaved:n,onFlash:o}),(0,ie.jsx)(mp,{config:e,onSaved:n,onFlash:o})]})})}var jn=require("react");function bp({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i,record:a}){let s=(0,jn.useCallback)(async(f,p)=>{let h=f.filter(qu);if(!h.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}a?.();for(let[b,g]of h.entries())try{o(`\u4E0A\u4F20 ${g.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let y=await zr(g,g.name||`pasted-${Date.now()}.png`),v=vn({...y,relPath:y.name,createdAt:y.createdAt??new Date().toISOString()},{x:p.x+b*172,y:p.y});t(m=>[...m,v]),o(`\u5DF2\u6DFB\u52A0 ${y.name}`)}catch(y){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${ce(y)}`)}},[t,o,r,a]),c=(0,jn.useCallback)((f,p,h)=>{let b=p?h(p):n();s(f,b)},[s,n]),u=(0,jn.useCallback)(f=>{let p=document.createElement("input");p.type="file",p.accept="image/*",p.onchange=async()=>{let h=p.files?.[0];if(h)try{let b=await zr(h,h.name);t(g=>g.map(y=>y.id===f&&y.type==="image"?{...y,data:{...y.data,registryId:b.id,name:b.name,url:b.url,size:b.size,ext:b.ext,absPath:b.absPath,missing:!1}}:y)),o(`\u5DF2\u66FF\u6362\u4E3A ${b.name}`)}catch(b){o(`\u66FF\u6362\u5931\u8D25\uFF1A${ce(b)}`)}},p.click()},[t,o]),l=(0,jn.useCallback)(f=>{let p=e.current.find(h=>h.id===f);!p||p.type!=="image"||!p.data.url||i({url:p.data.url,name:p.data.name,path:p.data.absPath})},[e,i]),d=(0,jn.useCallback)(async(f,p,h)=>{let b=await fetch(f).then(w=>w.blob()),g=p.endsWith(".png")?p:`${p}.png`,y=await zr(b,g),v=h??n(),m=vn({...y,relPath:y.name,createdAt:y.createdAt??new Date().toISOString()},v);return t(w=>[...w,m]),o(`\u5DF2\u6DFB\u52A0 ${y.name}`),y},[t,o,n]);return{addImages:s,dropFiles:c,replaceImage:u,openPreview:l,addDataUrl:d}}function yp(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var St=require("react");function xp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let c=(0,St.useCallback)(async b=>{try{return await za(b)}catch(g){let y=g.body?.overBudget;if(!y)throw g;let v=y.reason||ce(g);if(!window.confirm(`${v}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`))throw new Error(`\u5DF2\u6309\u9884\u7B97\u53D6\u6D88\uFF1A${v}`);return r(`\u8D85\u9884\u7B97\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A${v}`),await za({...b,allowOverBudget:!0})}},[r]),u=(0,St.useCallback)((b,g)=>{let v=(Array.isArray(g.results)?g.results:[]).filter(k=>k.status==="ok"&&k.assetId&&k.url),m=e.current.find(k=>k.id===b&&k.type==="prompt"),w=[];if(m&&m.type==="prompt"){let k=He(m).height;v.forEach((M,I)=>{w.push(vn({id:String(M.assetId),relPath:M.name??"result.png",name:M.name??"result.png",url:String(M.url),size:M.bytes??0,ext:String(M.ext??"png"),absPath:M.absPath??"",createdAt:new Date().toISOString()},{x:m.position.x+I*172,y:m.position.y+k+56}))})}n(k=>{let M=new Set(k.map(R=>R.id)),I=w.filter(R=>!M.has(R.id)),L=I.length?[...k,...I]:k;return ot(L,b,{status:g.status==="done"?"done":g.status==="cancelled"?"idle":"failed",resultCount:v.length,message:g.error??void 0,startedAtMs:void 0,cancelRequested:!1,taskId:void 0})}),w.length&&o(k=>{let M=w.map(I=>({id:`${b}->${I.id}`,source:b,target:I.id,animated:!0})).filter(I=>!k.some(L=>L.id===I.id));return M.length?[...k,...M]:k}),a.current.delete(b);let S=s.current.get(b);S&&window.clearTimeout(S),s.current.delete(b);let C=g.totalCost??0;C>0&&n(k=>{let M=k.find(L=>L.id===b),I=Number(M?.data?.cost??0);return ot(k,b,{cost:I+C})}),r(g.status==="done"?`\u5B8C\u6210 \xB7 ${v.length} \u5F20${C?` \xB7 ${C.toFixed(2)} \u5143`:""}`:`${g.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${g.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),l=(0,St.useCallback)((b,g)=>{let y=async()=>{try{let v=await sd(g);if(v.status==="queued")n(m=>ot(m,b,{status:"queued"}));else if(v.status==="running")n(m=>ot(m,b,{status:"running",startedAtMs:v.startedAt??Date.now(),cancelRequested:v.cancelRequested}));else{u(b,v);return}}catch(v){if(v.status===404){let m=s.current.get(b);m!==void 0&&window.clearTimeout(m),s.current.delete(b),n(w=>ot(w,b,{status:"failed",message:"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF08\u5BBF\u4E3B\u91CD\u542F\u6216\u4EFB\u52A1\u8FC7\u671F\uFF09\uFF0C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF",startedAtMs:void 0,cancelRequested:!1})),r("\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF1A\u505C\u6B62\u8F6E\u8BE2");return}r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${ce(v)}`)}s.current.set(b,window.setTimeout(y,1200))};y()},[u,r,n,s]),d=(0,St.useCallback)(async b=>{let g=e.current.find(v=>v.id===b);if(!g||g.type!=="prompt")return;if(!g.data.prompt.trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let y=td(e.current,t.current,b,g.data.prompt);if(y.mode==="invalid"){let v=y.unknown.map(m=>`@${m}`).join("\u3001");n(m=>ot(m,b,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${v}`}));return}try{let v=await c({prompt:g.data.prompt,size:g.data.size,quality:g.data.quality,refIds:y.images.map(m=>m.type==="image"?m.data.registryId:"").filter(Boolean),outputDir:g.data.outputDir,spent:e.current.reduce((m,w)=>m+Number(w.data?.cost??0),0),mask:y.images.map(m=>m.type==="image"?m.data.maskDataUrl:"").find(Boolean)||""});a.current.set(b,v.taskId),n(m=>ot(m,b,{status:"queued",taskId:v.taskId,startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${y.images.length} \u5F20 \xB7 ${g.data.size}`),l(b,v.taskId)}catch(v){let m=ce(v);n(w=>ot(w,b,{status:"failed",message:m})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${m}`)}},[e,t,n,i,r,l,a]),f=(0,St.useCallback)(async b=>{let g=a.current.get(b);if(n(y=>ot(y,b,{cancelRequested:!0})),!!g)try{await ld(g)}catch(y){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${ce(y)}`)}},[n,r,a]),p=(0,St.useCallback)(b=>{for(let g of b)d(g)},[d]),h=(0,St.useCallback)(b=>{for(let{nodeId:g,taskId:y}of ju(b))a.current.set(g,y),l(g,y)},[a,l]);return(0,St.useEffect)(()=>{let b=s.current;return()=>{for(let g of b.values())window.clearTimeout(g);b.clear()}},[s]),{runPrompt:d,cancelPrompt:f,runMany:p,resumeTasks:h}}var rt=require("react");function wp(e){let[t,n]=(0,rt.useState)(null),[o,r]=(0,rt.useState)([]),i=(0,rt.useRef)(null),a=(0,rt.useCallback)(l=>{let d={...l,profiles:Array.isArray(l?.profiles)?l.profiles:[],models:Array.isArray(l?.models)?l.models:[],sizes:Array.isArray(l?.sizes)?l.sizes:[],qualities:Array.isArray(l?.qualities)?l.qualities:[],issues:Array.isArray(l?.issues)?l.issues:[]};n(d),i.current=d,r(d.issues)},[]),s=(0,rt.useCallback)(async()=>{try{a(await rd())}catch(l){r([ce(l)])}},[a]);(0,rt.useEffect)(()=>{s()},[s]);let c=(0,rt.useCallback)(async l=>{try{let d=await Dr(l);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ce(d)}`)}},[a,e]),u=(0,rt.useCallback)(async l=>{try{let d=await fd(l);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ce(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:u,replaceConfig:a}}var En=require("react");function Mo(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function vp(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(Mo(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(Mo(r)),Mo(i)):null},restore(r){let i=o.shift();return i?(n.push(Mo(r)),Mo(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function kp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,En.useRef)(vp(50)),a=(0,En.useCallback)(f=>{i.current.record({nodes:e.current,edges:t.current},f)},[e,t]),s=(0,En.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,En.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),u=(0,En.useCallback)(()=>i.current.clear(),[]),l=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:c,clear:u,canUndo:l,canRestore:d}}var Sp=require("react");function wv(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Cp(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:u,hasPreview:l}=e;(0,Sp.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&l){u();return}if(wv(f.target))return;let p=f.ctrlKey||f.metaKey,h=f.key.toLowerCase();if(p&&h==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(g=>g.some(y=>!y.selected)?g.map(y=>({...y,selected:!0})):g);return}if(p&&h==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(p&&h==="y"){f.preventDefault(),s();return}if(p&&h==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,c,u,l,e])}var Ct=require("react");var vv=2500;function Ep({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:u,onRestored:l}){let d=(0,Ct.useRef)(null),f=(0,Ct.useRef)(()=>{});f.current=()=>{d.current&&(window.clearTimeout(d.current),d.current=null),n.current.length&&Da(n.current,o.current).catch(()=>{})},(0,Ct.useEffect)(()=>{e.length&&(d.current&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{d.current=null,Da(n.current,o.current).catch(()=>{})},vv))},[e,t,n,o]),(0,Ct.useEffect)(()=>{let b=()=>{document.visibilityState==="hidden"&&f.current()},g=()=>f.current();return document.addEventListener("visibilitychange",b),window.addEventListener("pagehide",g),()=>{document.removeEventListener("visibilitychange",b),window.removeEventListener("pagehide",g),f.current()}},[]),(0,Ct.useEffect)(()=>{let b=!1;return(async()=>{let y=n.current;try{let v=await dd();if(b)return;if(!v.empty&&v.nodes?.length&&!n.current.length){let m=_a(v.nodes,v.edges??[],[]);r(m.nodes),i(m.edges),y=m.nodes,s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${v.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`)}}catch{}b||l?.(y)})(),()=>{b=!0}},[r,i,s,n,l]);let p=(0,Ct.useCallback)(async b=>{try{let g=await cd(b,n.current,o.current);u(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${g.name||b}\u300D`)}catch(g){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(g)}`)}},[n,o,u,c]),h=(0,Ct.useCallback)(async b=>{try{let g=await ud(b),y=_a(g.nodes,g.edges,g.missing??[]);r(y.nodes),i(y.edges),u(),c(`\u5DF2\u52A0\u8F7D\u300C${g.name||b}\u300D`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(g){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${ce(g)}`)}},[r,i,a,u,c]);return{doSave:p,doLoad:h}}var fe=require("react/jsx-runtime");function us(){let[e,t,n]=Tu([]),[o,r,i]=Au([]),[a,s]=(0,se.useState)([]),[c,u]=(0,se.useState)(null),[l,d]=(0,se.useState)(null),[f,p]=(0,se.useState)(null),[h,b]=(0,se.useState)(1),[g,y]=(0,se.useState)(!1),[v,m]=(0,se.useState)(()=>wf()),[w,S]=(0,se.useState)([]),[C,k]=(0,se.useState)(null),[M,I]=(0,se.useState)(()=>zd()),[L,R]=(0,se.useState)(!1),[T,P]=(0,se.useState)([]),x=(0,se.useRef)(null),_=(0,se.useRef)(null),N=(0,se.useRef)(null),E=(0,se.useRef)(null),z=(0,se.useRef)(null),D=(0,se.useRef)(new Map),F=(0,se.useRef)(new Map),B=(0,se.useRef)(e),V=(0,se.useRef)(o);B.current=e,V.current=o;let Q=(0,se.useCallback)(A=>{s(Y=>[...Y.slice(-8),A])},[]),G=(0,se.useCallback)(A=>{u(A),window.setTimeout(()=>u(Y=>Y===A?null:Y),2600)},[]),{config:K,configIssues:le,configRef:W,switchProfile:O,switchModel:U,replaceConfig:ne}=wp(G),re=(0,se.useRef)(!1);(0,se.useEffect)(()=>{!K||re.current||!(!K.provider?.apiKeyConfigured&&(K.source==="plugin"||K.issues.length>0))||(re.current=!0,d({kind:"settings"}))},[K]);let q=kp({nodesRef:B,edgesRef:V,setNodes:t,setEdges:r,flash:G}),{addImages:X,replaceImage:J,openPreview:oe,addDataUrl:de}=bp({nodesRef:B,setNodes:t,createPosition:()=>No.current(),log:Q,flash:G,setPreview:p,record:q.record}),{runPrompt:ye,cancelPrompt:Ue,runMany:Ze,resumeTasks:et}=xp({nodesRef:B,edgesRef:V,setNodes:t,setEdges:r,log:Q,flash:G,taskIdsRef:F,timersRef:D}),{doSave:it,doLoad:on}=Ep({nodes:e,edges:o,nodesRef:B,edgesRef:V,setNodes:t,setEdges:r,instanceRef:N,log:Q,flash:G,closeDialog:()=>d(null),onRestored:et}),Et=tf(e),Mt=(0,se.useMemo)(()=>({animated:!g}),[g]),Oe=(0,se.useMemo)(()=>ed(e,o),[e,o]),at=(0,se.useMemo)(()=>e.map(A=>{if(A.type==="image"){let Y=Oe.refCounts.get(A.data.registryId)??0;return(A.data.refCount??0)===Y?A:{...A,data:{...A.data,refCount:Y}}}if(A.type==="group"){let Y=Oe.groupCounts.get(A.id)??0,j=Oe.groupSizes.get(A.id)??0,ae=Oe.groupDups.get(A.id)??0;return A.data.imageCount===Y&&A.data.totalSize===j&&A.data.duplicateCount===ae?A:{...A,data:{...A.data,imageCount:Y,totalSize:j,duplicateCount:ae}}}return A}),[e,Oe]),Ke=e.filter(A=>A.type==="prompt"),dt=Ke.filter(A=>A.data.status==="queued"||A.data.status==="running").map(A=>A.id),rn=Ke.filter(A=>A.data.prompt.trim()&&A.data.status!=="running"&&A.data.status!=="queued").map(A=>A.id),Mn=(0,se.useCallback)((A,Y)=>{t(j=>ot(j,A,Y))},[t]),Bt=(0,se.useCallback)(A=>{q.record();let Y=new Set(A);t(j=>j.filter(ae=>!Y.has(ae.id))),r(j=>j.filter(ae=>!Y.has(ae.source)&&!Y.has(ae.target)))},[t,r,q]),Nn=(0,se.useCallback)(A=>{let Y=B.current.find(j=>j.id===A);Bt([A]),Y?.type==="image"&&ad(Y.data.registryId).catch(()=>{})},[Bt]),Le=(0,se.useCallback)(()=>{let A=N.current,Y=x.current?.getBoundingClientRect(),j=A&&Y?A.screenToFlowPosition({x:Y.width/2,y:Y.height/2}):{x:140,y:120},{position:ae,next:ke}=Uu(j,z.current);return z.current=ke,ae},[]),No=(0,se.useRef)(Le);No.current=Le;let _o=(0,se.useCallback)(A=>{let Y=W.current,j=Zu(A??Le(),{size:Y?.sizes[0]?.value??"1024x1024",quality:Y?.qualities[0]??"high",outputDir:""});q.record(),t(ae=>[...ae,j])},[Le,t,W,q]),Io=(0,se.useCallback)(A=>{q.record(),t(Y=>[...Y,Ku(A??Le())])},[Le,t,q]),jr=(0,se.useCallback)(()=>{r(Ia(B.current,V.current)),G("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,G]),Qr=(0,se.useCallback)(()=>{let A=new Set(w);if(!A.size){G("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}q.record(),r(nd(B.current,V.current,A)),G("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[w,r,G,q]),Jr=(0,se.useCallback)(()=>{let A=new Set(w),Y=W.current?.defaultOutputDir??"";A.size&&(q.record(),t(j=>j.map(ae=>ae.type==="prompt"&&A.has(ae.id)?{...ae,data:{...ae.data,outputDir:Y}}:ae)),G(Y?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${Y}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[w,t,G,q]),ei=(0,se.useCallback)(()=>{let A=N.current;if(!A)return;let Y=B.current.filter(ae=>w.includes(ae.id)),j=Y.length?Y:B.current;if(!j.length){G("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}A.fitView({nodes:j,padding:.25,duration:300,maxZoom:1.6})},[w,G]),ti=(0,se.useCallback)(()=>{let A=new Set(w);if(!A.size){G("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}q.record({preserveRedo:!0}),t(Y=>Md(Y,V.current,A))},[w,t,G,q,V]),{dropIntent:ni,dragHandlers:oi,startToolbarDrag:ri,dropChip:ii}=uf({canvasRef:x,modalOpen:!!l||!!f,getCreatePosition:()=>Le(),toFlowPosition:A=>N.current?N.current.screenToFlowPosition(A):Le(),onDropFiles:(A,Y)=>void X(A,Y),onDropNode:(A,Y)=>{A==="prompt"?_o(Y):Io(Y)}});(0,se.useEffect)(()=>{let A=Y=>{let j=Y.target;if(j&&(j.tagName==="TEXTAREA"||j.tagName==="INPUT"))return;let ae=Array.from(Y.clipboardData?.files??[]);ae.length&&(Y.preventDefault(),X(ae,Le()))};return window.addEventListener("paste",A),()=>window.removeEventListener("paste",A)},[X,Le]),Cp({nodesRef:B,edgesRef:V,setNodes:t,setEdges:r,selectedIds:w,selectedEdgeId:C,onDeleteNodes:Bt,onDeleteEdge:A=>{q.record(),r(Y=>Y.filter(j=>j.id!==A)),k(null)},onUndo:q.undo,onRestore:q.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let an=(0,se.useCallback)(A=>Y=>{let j=B.current.find(ae=>ae.id===Y);if(!j||j.type!=="image"||!j.data.url){G("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:A,target:{nodeId:Y,src:j.data.url,name:j.data.name}})},[B,G]),Nt=(0,se.useMemo)(()=>({cropImage:an("crop"),splitImage:an("split"),upscaleImage:an("upscale"),maskImage:an("mask")}),[an]),Po=(0,se.useCallback)(A=>{q.record(),t(Y=>Y.map(j=>j.id===A&&j.type==="image"?{...j,data:{...j.data,maskDataUrl:void 0}}:j)),G("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,q,G]),{nodeMenu:_t,boxRect:It,closeMenu:ai,setNodeMenu:zo}=ff({rootRef:_,canvasRef:x,instanceRef:N,setNodes:t,modalOpen:!!l||!!f}),_n=_t?e.find(A=>A.id===_t.nodeId):void 0,Ro=_n?pf(_n.type??"image",{hasUrl:_n.type==="image"?!!_n.data.url:!1,selectedCount:w.length}):[],si=(0,se.useCallback)(A=>{let Y=_t;if(zo(null),!Y)return;let j=Y.nodeId;switch(A){case"delete-selection":Bt(w),S([]);break;case"preview":oe(j);break;case"crop":Nt.cropImage(j);break;case"upscale":Nt.upscaleImage(j);break;case"split":Nt.splitImage(j);break;case"mask":Nt.maskImage(j);break;case"replace":J(j);break;case"run":ye(j);break;case"copy-prompt":{let ae=B.current.find(ke=>ke.id===j);if(ae?.type!=="prompt")break;navigator.clipboard.writeText(ae.data.prompt).then(()=>G("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD")).catch(()=>G("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE"));break}case"delete":Nn(j);break;default:break}},[_t,zo,Bt,oe,Nt,J,ye,Nn,w,G]),li=(0,se.useMemo)(()=>({updatePrompt:Mn,runPrompt:A=>{ye(A)},cancelPrompt:A=>{Ue(A)},deleteNode:Nn,zoomImage:oe,replaceImage:J,...Nt,clearMask:Po,config:K}),[Mn,ye,Ue,Nn,oe,J,Nt,Po,K]);return(0,fe.jsxs)(Va.Provider,{value:li,children:[(0,fe.jsx)("style",{children:Kd}),(0,fe.jsxs)("div",{className:"im-root",ref:_,children:[(0,fe.jsx)(of,{config:K,promptCount:Ke.length,runnableIds:rn,busyIds:dt.length,snapEnabled:M,canvasLocked:L,cost:Et,canUndo:q.canUndo,canRestore:q.canRestore,onUndo:q.undo,onRestore:q.restore,onAddPrompt:()=>_o(),onPickFiles:()=>E.current?.click(),onAddGroup:()=>Io(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:ri,onRun:Ze,onCancelAll:()=>dt.forEach(A=>void Ue(A)),onAutoConnect:jr,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:A=>void O(A),onSwitchModel:A=>void U(A),onOpenSave:async()=>{try{let A=await Ra();d({kind:"save",workflows:A.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let A=await Ra();d({kind:"load",workflows:A.workflows})}catch(A){G(`\u8BFB\u53D6\u5931\u8D25\uFF1A${ce(A)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),le.length?(0,fe.jsx)(Mf,{tone:"error",action:(0,fe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,fe.jsx)("ul",{className:"im-banner-list",children:le.map(A=>(0,fe.jsx)("li",{children:A},A))})}):null,(0,fe.jsxs)("div",{className:`im-canvas${ni?" is-drop-active":""}`,ref:x,...oi,children:[(0,fe.jsx)(kf,{selectedCount:w.length,selectedPromptCount:w.filter(A=>e.some(Y=>Y.id===A&&Y.type==="prompt")).length,selectedRunnableIds:rn.filter(A=>w.includes(A)),pickingOutputDir:!1,onRunSelected:()=>Ze(rn.filter(A=>w.includes(A))),onAutoLayout:ti,onAutoConnectSelected:Qr,onSetOutputDir:Jr,onDeleteSelected:()=>{Bt(w),S([])}}),(0,fe.jsx)(Xa.Provider,{value:g,children:(0,fe.jsxs)(Du,{nodes:at,edges:o,nodeTypes:jd,onNodesChange:A=>{let Y=Dd(A,B.current,M);P(Y.guides),n(Y.changes)},onEdgesChange:A=>i(A),onConnect:yp(r),isValidConnection:A=>Qu(B.current,V.current,{source:String(A.source??""),target:String(A.target??"")}),onInit:A=>{N.current=A},onNodeDragStop:(A,Y)=>{if(P([]),!M)return;let j=vo(Y),ae=B.current.filter(Wt=>Wt.id!==Y.id).map(vo),ke=Or(j,ae);ke.x===j.x&&ke.y===j.y||t(Wt=>Wt.map(Ft=>Ft.id===Y.id?{...Ft,position:{x:ke.x,y:ke.y}}:Ft))},onMove:(A,Y)=>{b(Y.zoom),y(j=>Qd(j,Y.zoom))},onEdgeDoubleClick:(A,Y)=>{q.record(),r(j=>j.filter(ae=>ae.id!==Y.id)),k(null)},onSelectionChange:({nodes:A,edges:Y})=>{let j=A.map(ke=>ke.id);S(ke=>ke.length===j.length&&ke.every((Wt,Ft)=>Wt===j[Ft])?ke:j);let ae=Y.length===1?Y[0].id:null;k(ke=>ke===ae?ke:ae)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:Mt,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!L,nodesConnectable:!L,elementsSelectable:!L,panOnDrag:!L,selectionOnDrag:!1,selectionKeyCode:null,multiSelectionKeyCode:["Meta","Control"],children:[(0,fe.jsx)(Lu,{variant:ht.Dots,gap:18,size:1.4}),v?(0,fe.jsx)(Bu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:A=>A.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,fe.jsx)(fp,{guides:T})]})}),(0,fe.jsx)(rf,{zoom:h,snapEnabled:M,canvasLocked:L,minimapOpen:v,onZoomIn:()=>void N.current?.zoomIn({duration:180}),onZoomOut:()=>void N.current?.zoomOut({duration:180}),onFitView:()=>N.current?.fitView({padding:.2,duration:300}),onFocusSelected:ei,onToggleSnap:()=>I(A=>{let Y=!A;return Rd(Y),Y||P([]),G(Y?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),Y}),onToggleLock:()=>R(A=>{let Y=!A;return G(Y?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),Y}),onToggleMinimap:()=>m(A=>{let Y=!A;return vf(Y),Y}),onOpenHelp:()=>d({kind:"help"})}),It&&N.current&&x.current?(()=>{let A=N.current.flowToScreenPosition({x:It.x,y:It.y}),Y=N.current.flowToScreenPosition({x:It.x+It.width,y:It.y+It.height}),j=x.current.getBoundingClientRect();return(0,fe.jsx)("div",{className:"im-marquee",style:{left:A.x-j.left,top:A.y-j.top,width:Y.x-A.x,height:Y.y-A.y}})})():null,e.length===0?(0,fe.jsx)(Sf,{}):null,(0,fe.jsx)(Cf,{logs:a}),(0,fe.jsx)(Ef,{text:c}),ii]}),_t&&Ro.length>0?(0,fe.jsx)(yf,{x:_t.x,y:_t.y,items:Ro,onPick:si,onClose:ai}):null,(0,fe.jsx)("input",{ref:E,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:A=>{let Y=Array.from(A.target.files??[]);A.target.value="",X(Y,Le())}}),f?(0,fe.jsx)(qr,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>p(null)}):null,l?.kind==="save"?(0,fe.jsx)(Lf,{workflows:l.workflows??[],imagoraRoot:K?.imagoraRoot,onCancel:()=>d(null),onSubmit:A=>void it(A)}):null,l?.kind==="load"?(0,fe.jsx)($f,{workflows:l.workflows??[],imagoraRoot:K?.imagoraRoot,onCancel:()=>d(null),onPick:A=>void on(A)}):null,l?.kind==="crop"&&l.target?(0,fe.jsx)(jf,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(A,Y)=>{q.record(),await de(A,`${l.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),G(Y)}}):null,l?.kind==="split"&&l.target?(0,fe.jsx)(sp,{src:l.target.src,onClose:()=>d(null),onConfirm:async A=>{q.record();let Y=l.target.name.replace(/\.[^.]+$/,""),j=Le();for(let[ae,ke]of A.entries())await de(ke.dataUrl,`${Y}_${ae+1}.png`,{x:j.x+ae*160,y:j.y});d(null),G(`\u5DF2\u5207\u51FA ${A.length} \u5F20`)}}):null,l?.kind==="upscale"&&l.target?(0,fe.jsx)(dp,{src:l.target.src,onClose:()=>d(null),onConfirm:async(A,Y)=>{q.record(),await de(A,`${l.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),G(Y)}}):null,l?.kind==="mask"&&l.target?(0,fe.jsx)(tp,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(A,Y)=>{q.record(),t(j=>j.map(ae=>ae.id===l.target.nodeId&&ae.type==="image"?{...ae,data:{...ae.data,maskDataUrl:A}}:ae)),d(null),G(Y)}}):null,l?.kind==="help"?(0,fe.jsx)(Hf,{config:K,onClose:()=>d(null)}):null,l?.kind==="history"?(0,fe.jsx)(ap,{imagoraRoot:K?.imagoraRoot,onClose:()=>d(null),onImport:A=>{if(!A.length)return;q.record();let Y=Le(),j=A.map((ae,ke)=>vn(ae,{x:Y.x+ke*172,y:Y.y}));t(ae=>[...ae,...j]),G(`\u5DF2\u653E\u5165 ${j.length} \u5F20\u56FE`)}}):null,l?.kind==="import"?(0,fe.jsx)(pp,{sizes:K?.sizes??[],onCancel:()=>d(null),onConfirm:A=>{q.record();let Y=W.current,j=vd(A,{sizes:Y?.sizes??[],defaultQuality:Y?.qualities[0]??"high",defaultOutputDir:""},Le());t(ae=>[...ae,...j]),d(null),G(`\u5DF2\u5EFA ${j.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,l?.kind==="settings"?(0,fe.jsx)(hp,{config:K,onClose:()=>d(null),onSaved:ne,onFlash:G}):null]})]})}var Mp=`/* this gets exported as style.css and can be used for the default theming */
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
`;var zp=require("react/jsx-runtime"),Cv=["slots"],Pp="imagora";globalThis.__dshImagoraCanvas=us;function Ev({size:e=16}){return(0,zp.jsx)(Ua,{size:e,fill:"currentColor"})}function Mv(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=Mp,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(Ip(),_p)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Pp},us)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Pp,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Ev)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
