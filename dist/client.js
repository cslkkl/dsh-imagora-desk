window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var am=Object.create;var To=Object.defineProperty;var sm=Object.getOwnPropertyDescriptor;var lm=Object.getOwnPropertyNames;var cm=Object.getPrototypeOf,um=Object.prototype.hasOwnProperty;var dm=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ao=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ys=(e,t)=>{for(var n in t)To(e,n,{get:t[n],enumerable:!0})},xs=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of lm(t))!um.call(e,r)&&r!==n&&To(e,r,{get:()=>t[r],enumerable:!(o=sm(t,r))||o.enumerable});return e};var ws=(e,t,n)=>(n=e!=null?am(cm(e)):{},xs(t||!e||!e.__esModule?To(n,"default",{value:e,enumerable:!0}):n,e)),fm=e=>xs(To({},"__esModule",{value:!0}),e);var hc=Ao(gc=>{"use strict";var Un=require("react");function N0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _0=typeof Object.is=="function"?Object.is:N0,I0=Un.useState,P0=Un.useEffect,z0=Un.useLayoutEffect,R0=Un.useDebugValue;function D0(e,t){var n=t(),o=I0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return z0(function(){r.value=n,r.getSnapshot=t,ka(r)&&i({inst:r})},[e,n,t]),P0(function(){return ka(r)&&i({inst:r}),e(function(){ka(r)&&i({inst:r})})},[e]),R0(n),n}function ka(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_0(e,n)}catch{return!0}}function T0(e,t){return t()}var A0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?T0:D0;gc.useSyncExternalStore=Un.useSyncExternalStore!==void 0?Un.useSyncExternalStore:A0});var yc=Ao((T1,bc)=>{"use strict";bc.exports=hc()});var wc=Ao(xc=>{"use strict";var kr=require("react"),O0=yc();function L0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $0=typeof Object.is=="function"?Object.is:L0,H0=O0.useSyncExternalStore,B0=kr.useRef,W0=kr.useEffect,F0=kr.useMemo,V0=kr.useDebugValue;xc.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=B0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=F0(function(){function c(p){if(!u){if(u=!0,l=p,p=o(p),r!==void 0&&a.hasValue){var y=a.value;if(r(y,p))return d=y}return d=p}if(y=d,$0(l,p))return y;var b=o(p);return r!==void 0&&r(y,b)?(l=p,y):(l=p,d=b)}var u=!1,l,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var s=H0(e,i[0],i[1]);return W0(function(){a.hasValue=!0,a.value=s},[s]),V0(s),s}});var kc=Ao((O1,vc)=>{"use strict";vc.exports=wc()});var Pp={};ys(Pp,{primitives:()=>Ev});function Cv(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Ev(){if(Qr)return Qr;let e=require(Ip),t=Cv(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${Ip}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Qr=t,Qr}var Ip,Qr,zp=dm(()=>{"use strict";Ip="@deepseek-ai/dsh-client-ui-primitives",Qr=null});var Iv={};ys(Iv,{apply:()=>_v,inject:()=>Mv});module.exports=fm(Iv);var ae=require("react");var H=require("react/jsx-runtime"),$=require("react");function Ne(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=Ne(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var pm={value:()=>{}};function sn(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Oo(n)}function Oo(e){this._=e}function mm(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Oo.prototype=sn.prototype={constructor:Oo,on:function(e,t){var n=this._,o=mm(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=gm(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=vs(n[r],e.name,t);else if(t==null)for(r in n)n[r]=vs(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Oo(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function gm(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function vs(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=pm,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var fi="http://www.w3.org/1999/xhtml",ks={svg:"http://www.w3.org/2000/svg",xhtml:fi,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Qn(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),ks.hasOwnProperty(t)?{space:ks[t],local:e}:e}function hm(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===fi&&t.documentElement.namespaceURI===fi?t.createElement(e):t.createElementNS(n,e)}}function bm(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Ss(e){var t=Qn(e);return(t.local?bm:hm)(t)}function ym(){}function $o(e){return e==null?ym:function(){return this.querySelector(e)}}function xm(e){typeof e!="function"&&(e=$o(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),c,u,l=0;l<a;++l)(c=i[l])&&(u=e.call(c,c.__data__,l,i))&&("__data__"in c&&(u.__data__=c.__data__),s[l]=u);return new Qe(o,this._parents)}function wm(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function vm(){return[]}function mi(e){return e==null?vm:function(){return this.querySelectorAll(e)}}function km(e){return function(){return wm(e.apply(this,arguments))}}function Sm(e){typeof e=="function"?e=km(e):e=mi(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&(o.push(e.call(c,c.__data__,u,a)),r.push(c));return new Qe(o,r)}function gi(e){return function(){return this.matches(e)}}function Cs(e){return function(t){return t.matches(e)}}var Cm=Array.prototype.find;function Em(e){return function(){return Cm.call(this.children,e)}}function Mm(){return this.firstElementChild}function Nm(e){return this.select(e==null?Mm:Em(typeof e=="function"?e:Cs(e)))}var _m=Array.prototype.filter;function Im(){return Array.from(this.children)}function Pm(e){return function(){return _m.call(this.children,e)}}function zm(e){return this.selectAll(e==null?Im:Pm(typeof e=="function"?e:Cs(e)))}function Rm(e){typeof e!="function"&&(e=gi(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new Qe(o,this._parents)}function Es(e){return new Array(e.length)}function Dm(){return new Qe(this._enter||this._groups.map(Es),this._parents)}function Lo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Lo.prototype={constructor:Lo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Tm(e){return function(){return e}}function Am(e,t,n,o,r,i){for(var a=0,s,c=t.length,u=i.length;a<u;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new Lo(e,i[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function Om(e,t,n,o,r,i,a){var s,c,u=new Map,l=t.length,d=i.length,f=new Array(l),p;for(s=0;s<l;++s)(c=t[s])&&(f[s]=p=a.call(c,c.__data__,s,t)+"",u.has(p)?r[s]=c:u.set(p,c));for(s=0;s<d;++s)p=a.call(e,i[s],s,i)+"",(c=u.get(p))?(o[s]=c,c.__data__=i[s],u.delete(p)):n[s]=new Lo(e,i[s]);for(s=0;s<l;++s)(c=t[s])&&u.get(f[s])===c&&(r[s]=c)}function Lm(e){return e.__data__}function $m(e,t){if(!arguments.length)return Array.from(this,Lm);var n=t?Om:Am,o=this._parents,r=this._groups;typeof e!="function"&&(e=Tm(e));for(var i=r.length,a=new Array(i),s=new Array(i),c=new Array(i),u=0;u<i;++u){var l=o[u],d=r[u],f=d.length,p=Hm(e.call(l,l&&l.__data__,u,o)),y=p.length,b=s[u]=new Array(y),h=a[u]=new Array(y),g=c[u]=new Array(f);n(l,d,b,h,g,p,t);for(var v=0,m=0,x,S;v<y;++v)if(x=b[v]){for(v>=m&&(m=v+1);!(S=h[m])&&++m<y;);x._next=S||null}}return a=new Qe(a,o),a._enter=s,a._exit=c,a}function Hm(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Bm(){return new Qe(this._exit||this._groups.map(Es),this._parents)}function Wm(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function Fm(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),c=0;c<a;++c)for(var u=n[c],l=o[c],d=u.length,f=s[c]=new Array(d),p,y=0;y<d;++y)(p=u[y]||l[y])&&(f[y]=p);for(;c<r;++c)s[c]=n[c];return new Qe(s,this._parents)}function Vm(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function Xm(e){e||(e=qm);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,c=r[i]=new Array(s),u,l=0;l<s;++l)(u=a[l])&&(c[l]=u);c.sort(t)}return new Qe(r,this._parents).order()}function qm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Gm(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Ym(){return Array.from(this)}function Um(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function Zm(){let e=0;for(let t of this)++e;return e}function Km(){return!this.node()}function jm(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function Qm(e){return function(){this.removeAttribute(e)}}function Jm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function eg(e,t){return function(){this.setAttribute(e,t)}}function tg(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function ng(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function og(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function rg(e,t){var n=Qn(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?Jm:Qm:typeof t=="function"?n.local?og:ng:n.local?tg:eg)(n,t))}function Ms(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ig(e){return function(){this.style.removeProperty(e)}}function ag(e,t,n){return function(){this.style.setProperty(e,t,n)}}function sg(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function lg(e,t,n){return arguments.length>1?this.each((t==null?ig:typeof t=="function"?sg:ag)(e,t,n??"")):ln(this.node(),e)}function ln(e,t){return e.style.getPropertyValue(t)||Ms(e).getComputedStyle(e,null).getPropertyValue(t)}function cg(e){return function(){delete this[e]}}function ug(e,t){return function(){this[e]=t}}function dg(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function fg(e,t){return arguments.length>1?this.each((t==null?cg:typeof t=="function"?dg:ug)(e,t)):this.node()[e]}function Ns(e){return e.trim().split(/^|\s+/)}function hi(e){return e.classList||new _s(e)}function _s(e){this._node=e,this._names=Ns(e.getAttribute("class")||"")}_s.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Is(e,t){for(var n=hi(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function Ps(e,t){for(var n=hi(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function pg(e){return function(){Is(this,e)}}function mg(e){return function(){Ps(this,e)}}function gg(e,t){return function(){(t.apply(this,arguments)?Is:Ps)(this,e)}}function hg(e,t){var n=Ns(e+"");if(arguments.length<2){for(var o=hi(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?gg:t?pg:mg)(n,t))}function bg(){this.textContent=""}function yg(e){return function(){this.textContent=e}}function xg(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function wg(e){return arguments.length?this.each(e==null?bg:(typeof e=="function"?xg:yg)(e)):this.node().textContent}function vg(){this.innerHTML=""}function kg(e){return function(){this.innerHTML=e}}function Sg(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Cg(e){return arguments.length?this.each(e==null?vg:(typeof e=="function"?Sg:kg)(e)):this.node().innerHTML}function Eg(){this.nextSibling&&this.parentNode.appendChild(this)}function Mg(){return this.each(Eg)}function Ng(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function _g(){return this.each(Ng)}function Ig(e){var t=typeof e=="function"?e:Ss(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Pg(){return null}function zg(e,t){var n=typeof e=="function"?e:Ss(e),o=t==null?Pg:typeof t=="function"?t:$o(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Rg(){var e=this.parentNode;e&&e.removeChild(this)}function Dg(){return this.each(Rg)}function Tg(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ag(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Og(e){return this.select(e?Ag:Tg)}function Lg(e){return arguments.length?this.property("__data__",e):this.node().__data__}function $g(e){return function(t){e.call(this,t,this.__data__)}}function Hg(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function Bg(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function Wg(e,t,n){return function(){var o=this.__on,r,i=$g(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function Fg(e,t,n){var o=Hg(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,u=s.length,l;c<u;++c)for(r=0,l=s[c];r<i;++r)if((a=o[r]).type===l.type&&a.name===l.name)return l.value}return}for(s=t?Wg:Bg,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function zs(e,t,n){var o=Ms(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Vg(e,t){return function(){return zs(this,e,t)}}function Xg(e,t){return function(){return zs(this,e,t.apply(this,arguments))}}function qg(e,t){return this.each((typeof t=="function"?Xg:Vg)(e,t))}function*Gg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var Rs=[null];function Qe(e,t){this._groups=e,this._parents=t}function cn(){return new Qe([[document.documentElement]],Rs)}function Yg(){return this}Qe.prototype=cn.prototype={constructor:Qe,select:xm,selectAll:Sm,selectChild:Nm,selectChildren:zm,filter:Rm,data:$m,enter:Dm,exit:Bm,join:Wm,merge:Fm,selection:Yg,order:Vm,sort:Xm,call:Gm,nodes:Ym,node:Um,size:Zm,empty:Km,each:jm,attr:rg,style:lg,property:fg,classed:hg,text:wg,html:Cg,raise:Mg,lower:_g,append:Ig,insert:zg,remove:Dg,clone:Og,datum:Lg,on:Fg,dispatch:qg,[Symbol.iterator]:Gg};function He(e){return typeof e=="string"?new Qe([[document.querySelector(e)]],[document.documentElement]):new Qe([[e]],Rs)}var Ug=0;function Zg(){return new pi}function pi(){this._="@"+(++Ug).toString(36)}pi.prototype=Zg.prototype={constructor:pi,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function Kg(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ge(e,t){if(e=Kg(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var jg={passive:!1},Jn={capture:!0,passive:!1};function bi(e){e.stopImmediatePropagation()}function In(e){e.preventDefault(),e.stopImmediatePropagation()}function xi(e){var t=e.document.documentElement,n=He(e).on("dragstart.drag",In,Jn);"onselectstart"in t?n.on("selectstart.drag",In,Jn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function wi(e,t){var n=e.document.documentElement,o=He(e).on("dragstart.drag",null);t&&(o.on("click.drag",In,Jn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Ho=e=>()=>e;function yi(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:c,dy:u,dispatch:l}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:l}})}yi.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Qg(e){return!e.ctrlKey&&!e.button}function Jg(){return this.parentNode}function eh(e,t){return t??{x:e.x,y:e.y}}function th(){return navigator.maxTouchPoints||"ontouchstart"in this}function vi(){var e=Qg,t=Jg,n=eh,o=th,r={},i=sn("start","drag","end"),a=0,s,c,u,l,d=0;function f(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",h).on("touchmove.drag",g,jg).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,S){if(!(l||!e.call(this,x,S))){var C=m(this,t.call(this,x,S),x,S,"mouse");C&&(He(x.view).on("mousemove.drag",y,Jn).on("mouseup.drag",b,Jn),xi(x.view),bi(x),u=!1,s=x.clientX,c=x.clientY,C("start",x))}}function y(x){if(In(x),!u){var S=x.clientX-s,C=x.clientY-c;u=S*S+C*C>d}r.mouse("drag",x)}function b(x){He(x.view).on("mousemove.drag mouseup.drag",null),wi(x.view,u),In(x),r.mouse("end",x)}function h(x,S){if(e.call(this,x,S)){var C=x.changedTouches,k=t.call(this,x,S),M=C.length,I,L;for(I=0;I<M;++I)(L=m(this,k,x,S,C[I].identifier,C[I]))&&(bi(x),L("start",x,C[I]))}}function g(x){var S=x.changedTouches,C=S.length,k,M;for(k=0;k<C;++k)(M=r[S[k].identifier])&&(In(x),M("drag",x,S[k]))}function v(x){var S=x.changedTouches,C=S.length,k,M;for(l&&clearTimeout(l),l=setTimeout(function(){l=null},500),k=0;k<C;++k)(M=r[S[k].identifier])&&(bi(x),M("end",x,S[k]))}function m(x,S,C,k,M,I){var L=i.copy(),R=Ge(I||C,S),T,P,w;if((w=n.call(x,new yi("beforestart",{sourceEvent:C,target:f,identifier:M,active:a,x:R[0],y:R[1],dx:0,dy:0,dispatch:L}),k))!=null)return T=w.x-R[0]||0,P=w.y-R[1]||0,function _(N,E,z){var D=R,F;switch(N){case"start":r[M]=_,F=a++;break;case"end":delete r[M],--a;case"drag":R=Ge(z||E,S),F=a;break}L.call(N,x,new yi(N,{sourceEvent:E,subject:w,target:f,identifier:M,active:F,x:R[0]+T,y:R[1]+P,dx:R[0]-D[0],dy:R[1]-D[1],dispatch:L}),k)}}return f.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Ho(!!x),f):e},f.container=function(x){return arguments.length?(t=typeof x=="function"?x:Ho(x),f):t},f.subject=function(x){return arguments.length?(n=typeof x=="function"?x:Ho(x),f):n},f.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:Ho(!!x),f):o},f.on=function(){var x=i.on.apply(i,arguments);return x===i?f:x},f.clickDistance=function(x){return arguments.length?(d=(x=+x)*x,f):Math.sqrt(d)},f}function Dn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function no(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Ft(){}var pn=.7,Rn=1/pn,Pn="\\s*([+-]?\\d+)\\s*",eo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",nh=/^#([0-9a-f]{3,8})$/,oh=new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),rh=new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`),ih=new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${eo}\\)$`),ah=new RegExp(`^rgba\\(${pt},${pt},${pt},${eo}\\)$`),sh=new RegExp(`^hsl\\(${eo},${pt},${pt}\\)$`),lh=new RegExp(`^hsla\\(${eo},${pt},${pt},${eo}\\)$`),Ds={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dn(Ft,Rt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ts,formatHex:Ts,formatHex8:ch,formatHsl:uh,formatRgb:As,toString:As});function Ts(){return this.rgb().formatHex()}function ch(){return this.rgb().formatHex8()}function uh(){return Xs(this).formatHsl()}function As(){return this.rgb().formatRgb()}function Rt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=nh.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Os(t):n===3?new Le(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Bo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Bo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=oh.exec(e))?new Le(t[1],t[2],t[3],1):(t=rh.exec(e))?new Le(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ih.exec(e))?Bo(t[1],t[2],t[3],t[4]):(t=ah.exec(e))?Bo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=sh.exec(e))?Hs(t[1],t[2]/100,t[3]/100,1):(t=lh.exec(e))?Hs(t[1],t[2]/100,t[3]/100,t[4]):Ds.hasOwnProperty(e)?Os(Ds[e]):e==="transparent"?new Le(NaN,NaN,NaN,0):null}function Os(e){return new Le(e>>16&255,e>>8&255,e&255,1)}function Bo(e,t,n,o){return o<=0&&(e=t=n=NaN),new Le(e,t,n,o)}function Ni(e){return e instanceof Ft||(e=Rt(e)),e?(e=e.rgb(),new Le(e.r,e.g,e.b,e.opacity)):new Le}function oo(e,t,n,o){return arguments.length===1?Ni(e):new Le(e,t,n,o??1)}function Le(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Dn(Le,oo,no(Ft,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new Le(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new Le(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Le(dn(this.r),dn(this.g),dn(this.b),Fo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ls,formatHex:Ls,formatHex8:dh,formatRgb:$s,toString:$s}));function Ls(){return`#${un(this.r)}${un(this.g)}${un(this.b)}`}function dh(){return`#${un(this.r)}${un(this.g)}${un(this.b)}${un((isNaN(this.opacity)?1:this.opacity)*255)}`}function $s(){let e=Fo(this.opacity);return`${e===1?"rgb(":"rgba("}${dn(this.r)}, ${dn(this.g)}, ${dn(this.b)}${e===1?")":`, ${e})`}`}function Fo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function dn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function un(e){return e=dn(e),(e<16?"0":"")+e.toString(16)}function Hs(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new lt(e,t,n,o)}function Xs(e){if(e instanceof lt)return new lt(e.h,e.s,e.l,e.opacity);if(e instanceof Ft||(e=Rt(e)),!e)return new lt;if(e instanceof lt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,c=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+r:2-i-r,a*=60):s=c>0&&c<1?0:a,new lt(a,s,c,e.opacity)}function Xo(e,t,n,o){return arguments.length===1?Xs(e):new lt(e,t,n,o??1)}function lt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(lt,Xo,no(Ft,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new lt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new lt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Le(ki(e>=240?e-240:e+120,r,o),ki(e,r,o),ki(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new lt(Bs(this.h),Wo(this.s),Wo(this.l),Fo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Fo(this.opacity);return`${e===1?"hsl(":"hsla("}${Bs(this.h)}, ${Wo(this.s)*100}%, ${Wo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Bs(e){return e=(e||0)%360,e<0?e+360:e}function Wo(e){return Math.max(0,Math.min(1,e||0))}function ki(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var qs=Math.PI/180,Gs=180/Math.PI,Vo=18,Ys=.96422,Us=1,Zs=.82521,Ks=4/29,zn=6/29,js=3*zn*zn,fh=zn*zn*zn;function Qs(e){if(e instanceof mt)return new mt(e.l,e.a,e.b,e.opacity);if(e instanceof zt)return el(e);e instanceof Le||(e=Ni(e));var t=Mi(e.r),n=Mi(e.g),o=Mi(e.b),r=Si((.2225045*t+.7168786*n+.0606169*o)/Us),i,a;return t===n&&n===o?i=a=r:(i=Si((.4360747*t+.3850649*n+.1430804*o)/Ys),a=Si((.0139322*t+.0971045*n+.7141733*o)/Zs)),new mt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function Js(e,t,n,o){return arguments.length===1?Qs(e):new mt(e,t,n,o??1)}function mt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Dn(mt,Js,no(Ft,{brighter(e){return new mt(this.l+Vo*(e??1),this.a,this.b,this.opacity)},darker(e){return new mt(this.l-Vo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=Ys*Ci(t),e=Us*Ci(e),n=Zs*Ci(n),new Le(Ei(3.1338561*t-1.6168667*e-.4906146*n),Ei(-.9787684*t+1.9161415*e+.033454*n),Ei(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Si(e){return e>fh?Math.pow(e,1/3):e/js+Ks}function Ci(e){return e>zn?e*e*e:js*(e-Ks)}function Ei(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Mi(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ph(e){if(e instanceof zt)return new zt(e.h,e.c,e.l,e.opacity);if(e instanceof mt||(e=Qs(e)),e.a===0&&e.b===0)return new zt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*Gs;return new zt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function qo(e,t,n,o){return arguments.length===1?ph(e):new zt(e,t,n,o??1)}function zt(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function el(e){if(isNaN(e.h))return new mt(e.l,0,0,e.opacity);var t=e.h*qs;return new mt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Dn(zt,qo,no(Ft,{brighter(e){return new zt(this.h,this.c,this.l+Vo*(e??1),this.opacity)},darker(e){return new zt(this.h,this.c,this.l-Vo*(e??1),this.opacity)},rgb(){return el(this).rgb()}}));var tl=-.14861,_i=1.78277,Ii=-.29227,Go=-.90649,to=1.97294,Ws=to*Go,Fs=to*_i,Vs=_i*Ii-Go*tl;function mh(e){if(e instanceof fn)return new fn(e.h,e.s,e.l,e.opacity);e instanceof Le||(e=Ni(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(Vs*o+Ws*t-Fs*n)/(Vs+Ws-Fs),i=o-r,a=(to*(n-r)-Ii*i)/Go,s=Math.sqrt(a*a+i*i)/(to*r*(1-r)),c=s?Math.atan2(a,i)*Gs-120:NaN;return new fn(c<0?c+360:c,s,r,e.opacity)}function Yo(e,t,n,o){return arguments.length===1?mh(e):new fn(e,t,n,o??1)}function fn(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(fn,Yo,no(Ft,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new fn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new fn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*qs,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Le(255*(t+n*(tl*o+_i*r)),255*(t+n*(Ii*o+Go*r)),255*(t+n*(to*o)),this.opacity)}}));function rl(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function gh(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return rl((n-o/t)*t,a,r,i,s)}}function hh(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return rl((n-o/t)*t,r,i,a,s)}}var Zo=e=>()=>e;function il(e,t){return function(n){return e+n*t}}function bh(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function Di(e,t){var n=t-e;return n?il(e,n>180||n<-180?n-360*Math.round(n/360):n):Zo(isNaN(e)?t:e)}function yh(e){return(e=+e)==1?Ye:function(t,n){return n-t?bh(t,n,e):Zo(isNaN(t)?n:t)}}function Ye(e,t){var n=t-e;return n?il(e,n):Zo(isNaN(e)?t:e)}var ro=(function e(t){var n=yh(t);function o(r,i){var a=n((r=oo(r)).r,(i=oo(i)).r),s=n(r.g,i.g),c=n(r.b,i.b),u=Ye(r.opacity,i.opacity);return function(l){return r.r=a(l),r.g=s(l),r.b=c(l),r.opacity=u(l),r+""}}return o.gamma=e,o})(1);function al(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=oo(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(c){return s.r=o(c),s.g=r(c),s.b=i(c),s+""}}}var Hv=al(gh),Bv=al(hh);function xh(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function wh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function vh(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=Tn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function kh(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ct(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Sh(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Tn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var zi=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Pi=new RegExp(zi.source,"g");function Ch(e){return function(){return e}}function Eh(e){return function(t){return e(t)+""}}function Ti(e,t){var n=zi.lastIndex=Pi.lastIndex=0,o,r,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(o=zi.exec(e))&&(r=Pi.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:ct(o,r)})),n=Pi.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?Eh(c[0].x):Ch(t):(t=c.length,function(u){for(var l=0,d;l<t;++l)s[(d=c[l]).i]=d.x(u);return s.join("")})}function Tn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Zo(t):(n==="number"?ct:n==="string"?(o=Rt(t))?(t=o,ro):Ti:t instanceof Rt?ro:t instanceof Date?kh:wh(t)?xh:Array.isArray(t)?vh:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Sh:ct)(e,t)}var nl=180/Math.PI,Ri={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function sl(e,t,n,o,r,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,c/=s),e*o<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*nl,skewX:Math.atan(c)*nl,scaleX:a,scaleY:s}}var Uo;function Mh(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Ri:sl(t.a,t.b,t.c,t.d,t.e,t.f)}function Nh(e){return e==null||(Uo||(Uo=document.createElementNS("http://www.w3.org/2000/svg","g")),Uo.setAttribute("transform",e),!(e=Uo.transform.baseVal.consolidate()))?Ri:(e=e.matrix,sl(e.a,e.b,e.c,e.d,e.e,e.f))}function ll(e,t,n,o){function r(u){return u.length?u.pop()+" ":""}function i(u,l,d,f,p,y){if(u!==d||l!==f){var b=p.push("translate(",null,t,null,n);y.push({i:b-4,x:ct(u,d)},{i:b-2,x:ct(l,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function a(u,l,d,f){u!==l?(u-l>180?l+=360:l-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:ct(u,l)})):l&&d.push(r(d)+"rotate("+l+o)}function s(u,l,d,f){u!==l?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:ct(u,l)}):l&&d.push(r(d)+"skewX("+l+o)}function c(u,l,d,f,p,y){if(u!==d||l!==f){var b=p.push(r(p)+"scale(",null,",",null,")");y.push({i:b-4,x:ct(u,d)},{i:b-2,x:ct(l,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(u,l){var d=[],f=[];return u=e(u),l=e(l),i(u.translateX,u.translateY,l.translateX,l.translateY,d,f),a(u.rotate,l.rotate,d,f),s(u.skewX,l.skewX,d,f),c(u.scaleX,u.scaleY,l.scaleX,l.scaleY,d,f),u=l=null,function(p){for(var y=-1,b=f.length,h;++y<b;)d[(h=f[y]).i]=h.x(p);return d.join("")}}}var cl=ll(Mh,"px, ","px)","deg)"),ul=ll(Nh,", ",")",")"),_h=1e-12;function ol(e){return((e=Math.exp(e))+1/e)/2}function Ih(e){return((e=Math.exp(e))-1/e)/2}function Ph(e){return((e=Math.exp(2*e))-1)/(e+1)}var An=(function e(t,n,o){function r(i,a){var s=i[0],c=i[1],u=i[2],l=a[0],d=a[1],f=a[2],p=l-s,y=d-c,b=p*p+y*y,h,g;if(b<_h)g=Math.log(f/u)/t,h=function(k){return[s+k*p,c+k*y,u*Math.exp(t*k*g)]};else{var v=Math.sqrt(b),m=(f*f-u*u+o*b)/(2*u*n*v),x=(f*f-u*u-o*b)/(2*f*n*v),S=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(x*x+1)-x);g=(C-S)/t,h=function(k){var M=k*g,I=ol(S),L=u/(n*v)*(I*Ph(t*M+S)-Ih(S));return[s+L*p,c+L*y,u*I/ol(t*M+S)]}}return h.duration=Math.abs(g)*1e3*t/Math.SQRT2,h}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},r})(Math.SQRT2,2,4);function dl(e){return function(t,n){var o=e((t=Xo(t)).h,(n=Xo(n)).h),r=Ye(t.s,n.s),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var Wv=dl(Di),Fv=dl(Ye);function fl(e){return function(t,n){var o=e((t=qo(t)).h,(n=qo(n)).h),r=Ye(t.c,n.c),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var Vv=fl(Di),Xv=fl(Ye);function pl(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Yo(r)).h,(i=Yo(i)).h),s=Ye(r.s,i.s),c=Ye(r.l,i.l),u=Ye(r.opacity,i.opacity);return function(l){return r.h=a(l),r.s=s(l),r.l=c(Math.pow(l,n)),r.opacity=u(l),r+""}}return o.gamma=t,o})(1)}var qv=pl(Di),Gv=pl(Ye);var On=0,ao=0,io=0,gl=1e3,Ko,so,jo=0,mn=0,Jo=0,lo=typeof performance=="object"&&performance.now?performance:Date,hl=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function er(){return mn||(hl(zh),mn=lo.now()+Jo)}function zh(){mn=0}function Qo(){this._call=this._time=this._next=null}Qo.prototype=Oi.prototype={constructor:Qo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?er():+n)+(t==null?0:+t),!this._next&&so!==this&&(so?so._next=this:Ko=this,so=this),this._call=e,this._time=n,Ai()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ai())}};function Oi(e,t,n){var o=new Qo;return o.restart(e,t,n),o}function Rh(){er(),++On;for(var e=Ko,t;e;)(t=mn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--On}function ml(){mn=(jo=lo.now())+Jo,On=ao=0;try{Rh()}finally{On=0,Th(),mn=0}}function Dh(){var e=lo.now(),t=e-jo;t>gl&&(Jo-=t,jo=e)}function Th(){for(var e,t=Ko,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ko=n);so=e,Ai(o)}function Ai(e){if(!On){ao&&(ao=clearTimeout(ao));var t=e-mn;t>24?(e<1/0&&(ao=setTimeout(ml,Math.ceil(e-lo.now()-Jo)+1)),io&&(io=clearInterval(io))):(io||(jo=lo.now(),io=setInterval(Dh,gl)),On=1,hl(ml))}}function Li(e,t,n){var o=new Qo;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function yl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var $i=3,Zv=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})($i),Kv=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})($i),jv=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})($i),Ah=Math.PI,Qv=Ah/2;function tr(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var bl=4/11,Jv=6/11,e1=8/11,t1=3/4,n1=9/11,o1=10/11,r1=15/16,i1=21/22,a1=63/64,s1=1/bl/bl;var Hi=1.70158,l1=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(Hi),c1=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(Hi),u1=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(Hi),Ln=2*Math.PI,Bi=1,Wi=.3,d1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return t*tr(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Bi,Wi),f1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return 1-t*tr(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Bi,Wi),p1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return((i=i*2-1)<0?t*tr(-i)*Math.sin((o-i)/n):2-t*tr(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Bi,Wi);var Oh=sn("start","end","cancel","interrupt"),Lh=[],vl=0,xl=1,Fi=2,nr=3,wl=4,Vi=5,or=6;function rr(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;$h(e,n,{name:t,index:o,group:r,on:Oh,tween:Lh,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:vl})}function Xi(e,t){var n=ut(e,t);if(n.state>vl)throw new Error("too late; already scheduled");return n}function gt(e,t){var n=ut(e,t);if(n.state>nr)throw new Error("too late; already running");return n}function ut(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function $h(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=Oi(i,0,n.time);function i(u){n.state=xl,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var l,d,f,p;if(n.state!==xl)return c();for(l in o)if(p=o[l],p.name===n.name){if(p.state===nr)return Li(a);p.state===wl?(p.state=or,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[l]):+l<t&&(p.state=or,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[l])}if(Li(function(){n.state===nr&&(n.state=wl,n.timer.restart(s,n.delay,n.time),s(u))}),n.state=Fi,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Fi){for(n.state=nr,r=new Array(f=n.tween.length),l=0,d=-1;l<f;++l)(p=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function s(u){for(var l=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Vi,1),d=-1,f=r.length;++d<f;)r[d].call(e,l);n.state===Vi&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=or,n.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function co(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>Fi&&o.state<Vi,o.state=or,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function Hh(e){return this.each(function(){co(this,e)})}function Bh(e,t){var n,o;return function(){var r=gt(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function Wh(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=gt(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},c=0,u=r.length;c<u;++c)if(r[c].name===t){r[c]=s;break}c===u&&r.push(s)}i.tween=r}}function Fh(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ut(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?Bh:Wh)(n,e,t))}function qi(e,t,n){var o=e._id;return e.each(function(){var r=gt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ut(r,o).value[t]}}function kl(e,t){var n;return(typeof t=="number"?ct:t instanceof Rt?ro:(n=Rt(t))?(t=n,ro):Ti)(e,t)}function Vh(e){return function(){this.removeAttribute(e)}}function Xh(e){return function(){this.removeAttributeNS(e.space,e.local)}}function qh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function Gh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function Yh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function Uh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function Zh(e,t){var n=Qn(e),o=n==="transform"?ul:kl;return this.attrTween(e,typeof t=="function"?(n.local?Uh:Yh)(n,o,qi(this,"attr."+e,t)):t==null?(n.local?Xh:Vh)(n):(n.local?Gh:qh)(n,o,t))}function Kh(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function jh(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Qh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&jh(e,i)),n}return r._value=t,r}function Jh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Kh(e,i)),n}return r._value=t,r}function eb(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Qn(e);return this.tween(n,(o.local?Qh:Jh)(o,t))}function tb(e,t){return function(){Xi(this,e).delay=+t.apply(this,arguments)}}function nb(e,t){return t=+t,function(){Xi(this,e).delay=t}}function ob(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?tb:nb)(t,e)):ut(this.node(),t).delay}function rb(e,t){return function(){gt(this,e).duration=+t.apply(this,arguments)}}function ib(e,t){return t=+t,function(){gt(this,e).duration=t}}function ab(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?rb:ib)(t,e)):ut(this.node(),t).duration}function sb(e,t){if(typeof t!="function")throw new Error;return function(){gt(this,e).ease=t}}function lb(e){var t=this._id;return arguments.length?this.each(sb(t,e)):ut(this.node(),t).ease}function cb(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;gt(this,e).ease=n}}function ub(e){if(typeof e!="function")throw new Error;return this.each(cb(this._id,e))}function db(e){typeof e!="function"&&(e=gi(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new Tt(o,this._parents,this._name,this._id)}function fb(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var c=t[s],u=n[s],l=c.length,d=a[s]=new Array(l),f,p=0;p<l;++p)(f=c[p]||u[p])&&(d[p]=f);for(;s<o;++s)a[s]=t[s];return new Tt(a,this._parents,this._name,this._id)}function pb(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function mb(e,t,n){var o,r,i=pb(t)?Xi:gt;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function gb(e,t){var n=this._id;return arguments.length<2?ut(this.node(),n).on.on(e):this.each(mb(n,e,t))}function hb(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function bb(){return this.on("end.remove",hb(this._id))}function yb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=$o(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],c=s.length,u=i[a]=new Array(c),l,d,f=0;f<c;++f)(l=s[f])&&(d=e.call(l,l.__data__,f,s))&&("__data__"in l&&(d.__data__=l.__data__),u[f]=d,rr(u[f],t,n,f,u,ut(l,n)));return new Tt(i,this._parents,t,n)}function xb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=mi(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var c=o[s],u=c.length,l,d=0;d<u;++d)if(l=c[d]){for(var f=e.call(l,l.__data__,d,c),p,y=ut(l,n),b=0,h=f.length;b<h;++b)(p=f[b])&&rr(p,t,n,b,f,y);i.push(f),a.push(l)}return new Tt(i,a,t,n)}var wb=cn.prototype.constructor;function vb(){return new wb(this._groups,this._parents)}function kb(e,t){var n,o,r;return function(){var i=ln(this,e),a=(this.style.removeProperty(e),ln(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function Sl(e){return function(){this.style.removeProperty(e)}}function Sb(e,t,n){var o,r=n+"",i;return function(){var a=ln(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function Cb(e,t,n){var o,r,i;return function(){var a=ln(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),ln(this,e))),a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s))}}function Eb(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var c=gt(this,e),u=c.on,l=c.value[i]==null?s||(s=Sl(t)):void 0;(u!==n||r!==l)&&(o=(n=u).copy()).on(a,r=l),c.on=o}}function Mb(e,t,n){var o=(e+="")=="transform"?cl:kl;return t==null?this.styleTween(e,kb(e,o)).on("end.style."+e,Sl(e)):typeof t=="function"?this.styleTween(e,Cb(e,o,qi(this,"style."+e,t))).each(Eb(this._id,e)):this.styleTween(e,Sb(e,o,t),n).on("end.style."+e,null)}function Nb(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function _b(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&Nb(e,a,n)),o}return i._value=t,i}function Ib(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,_b(e,t,n??""))}function Pb(e){return function(){this.textContent=e}}function zb(e){return function(){var t=e(this);this.textContent=t??""}}function Rb(e){return this.tween("text",typeof e=="function"?zb(qi(this,"text",e)):Pb(e==null?"":e+""))}function Db(e){return function(t){this.textContent=e.call(this,t)}}function Tb(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Db(r)),t}return o._value=e,o}function Ab(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Tb(e))}function Ob(){for(var e=this._name,t=this._id,n=Cl(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)if(c=a[u]){var l=ut(c,t);rr(c,e,n,u,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new Tt(o,this._parents,e,n)}function Lb(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--r===0&&i()}};n.each(function(){var u=gt(this,o),l=u.on;l!==e&&(t=(e=l).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),u.on=t}),r===0&&i()})}var $b=0;function Tt(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function Hb(e){return cn().transition(e)}function Cl(){return++$b}var Dt=cn.prototype;Tt.prototype=Hb.prototype={constructor:Tt,select:yb,selectAll:xb,selectChild:Dt.selectChild,selectChildren:Dt.selectChildren,filter:db,merge:fb,selection:vb,transition:Ob,call:Dt.call,nodes:Dt.nodes,node:Dt.node,size:Dt.size,empty:Dt.empty,each:Dt.each,on:gb,attr:Zh,attrTween:eb,style:Mb,styleTween:Ib,text:Rb,textTween:Ab,remove:bb,tween:Fh,delay:ob,duration:ab,ease:lb,easeVarying:ub,end:Lb,[Symbol.iterator]:Dt[Symbol.iterator]};var Bb={time:null,delay:0,duration:250,ease:yl};function Wb(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Fb(e){var t,n;e instanceof Tt?(t=e._id,e=e._name):(t=Cl(),(n=Bb).time=er(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&rr(c,e,t,u,a,n||Wb(c,t));return new Tt(o,this._parents,e,t)}cn.prototype.interrupt=Hh;cn.prototype.transition=Fb;var ir=e=>()=>e;function Vb(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function At(e,t,n){this.k=e,this.x=t,this.y=n}At.prototype={constructor:At,scale:function(e){return e===1?this:new At(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new At(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var fo=new At(1,0,0);Yi.prototype=At.prototype;function Yi(e){for(;!e.__zoom;)if(!(e=e.parentNode))return fo;return e.__zoom}function Gi(e){e.stopImmediatePropagation()}function uo(e){e.preventDefault(),e.stopImmediatePropagation()}function Xb(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function qb(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function El(){return this.__zoom||fo}function Gb(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Yb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ub(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Ui(){var e=Xb,t=qb,n=Ub,o=Gb,r=Yb,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=An,u=sn("start","zoom","end"),l,d,f,p=500,y=150,b=0,h=10;function g(w){w.property("__zoom",El).on("wheel.zoom",M,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",L).filter(r).on("touchstart.zoom",R).on("touchmove.zoom",T).on("touchend.zoom touchcancel.zoom",P).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(w,_,N,E){var z=w.selection?w.selection():w;z.property("__zoom",El),w!==z?S(w,_,N,E):z.interrupt().each(function(){C(this,arguments).event(E).start().zoom(null,typeof _=="function"?_.apply(this,arguments):_).end()})},g.scaleBy=function(w,_,N,E){g.scaleTo(w,function(){var z=this.__zoom.k,D=typeof _=="function"?_.apply(this,arguments):_;return z*D},N,E)},g.scaleTo=function(w,_,N,E){g.transform(w,function(){var z=t.apply(this,arguments),D=this.__zoom,F=N==null?x(z):typeof N=="function"?N.apply(this,arguments):N,W=D.invert(F),V=typeof _=="function"?_.apply(this,arguments):_;return n(m(v(D,V),F,W),z,a)},N,E)},g.translateBy=function(w,_,N,E){g.transform(w,function(){return n(this.__zoom.translate(typeof _=="function"?_.apply(this,arguments):_,typeof N=="function"?N.apply(this,arguments):N),t.apply(this,arguments),a)},null,E)},g.translateTo=function(w,_,N,E,z){g.transform(w,function(){var D=t.apply(this,arguments),F=this.__zoom,W=E==null?x(D):typeof E=="function"?E.apply(this,arguments):E;return n(fo.translate(W[0],W[1]).scale(F.k).translate(typeof _=="function"?-_.apply(this,arguments):-_,typeof N=="function"?-N.apply(this,arguments):-N),D,a)},E,z)};function v(w,_){return _=Math.max(i[0],Math.min(i[1],_)),_===w.k?w:new At(_,w.x,w.y)}function m(w,_,N){var E=_[0]-N[0]*w.k,z=_[1]-N[1]*w.k;return E===w.x&&z===w.y?w:new At(w.k,E,z)}function x(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function S(w,_,N,E){w.on("start.zoom",function(){C(this,arguments).event(E).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(E).end()}).tween("zoom",function(){var z=this,D=arguments,F=C(z,D).event(E),W=t.apply(z,D),V=N==null?x(W):typeof N=="function"?N.apply(z,D):N,Q=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),X=z.__zoom,K=typeof _=="function"?_.apply(z,D):_,le=c(X.invert(V).concat(Q/X.k),K.invert(V).concat(Q/K.k));return function(B){if(B===1)B=K;else{var O=le(B),U=Q/O[2];B=new At(U,V[0]-O[0]*U,V[1]-O[1]*U)}F.zoom(null,B)}})}function C(w,_,N){return!N&&w.__zooming||new k(w,_)}function k(w,_){this.that=w,this.args=_,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,_),this.taps=0}k.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,_){return this.mouse&&w!=="mouse"&&(this.mouse[1]=_.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=_.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=_.invert(this.touch1[0])),this.that.__zoom=_,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var _=He(this.that).datum();u.call(w,this.that,new Vb(w,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),_)}};function M(w,..._){if(!e.apply(this,arguments))return;var N=C(this,_).event(w),E=this.__zoom,z=Math.max(i[0],Math.min(i[1],E.k*Math.pow(2,o.apply(this,arguments)))),D=Ge(w);if(N.wheel)(N.mouse[0][0]!==D[0]||N.mouse[0][1]!==D[1])&&(N.mouse[1]=E.invert(N.mouse[0]=D)),clearTimeout(N.wheel);else{if(E.k===z)return;N.mouse=[D,E.invert(D)],co(this),N.start()}uo(w),N.wheel=setTimeout(F,y),N.zoom("mouse",n(m(v(E,z),N.mouse[0],N.mouse[1]),N.extent,a));function F(){N.wheel=null,N.end()}}function I(w,..._){if(f||!e.apply(this,arguments))return;var N=w.currentTarget,E=C(this,_,!0).event(w),z=He(w.view).on("mousemove.zoom",V,!0).on("mouseup.zoom",Q,!0),D=Ge(w,N),F=w.clientX,W=w.clientY;xi(w.view),Gi(w),E.mouse=[D,this.__zoom.invert(D)],co(this),E.start();function V(X){if(uo(X),!E.moved){var K=X.clientX-F,le=X.clientY-W;E.moved=K*K+le*le>b}E.event(X).zoom("mouse",n(m(E.that.__zoom,E.mouse[0]=Ge(X,N),E.mouse[1]),E.extent,a))}function Q(X){z.on("mousemove.zoom mouseup.zoom",null),wi(X.view,E.moved),uo(X),E.event(X).end()}}function L(w,..._){if(e.apply(this,arguments)){var N=this.__zoom,E=Ge(w.changedTouches?w.changedTouches[0]:w,this),z=N.invert(E),D=N.k*(w.shiftKey?.5:2),F=n(m(v(N,D),E,z),t.apply(this,_),a);uo(w),s>0?He(this).transition().duration(s).call(S,F,E,w):He(this).call(g.transform,F,E,w)}}function R(w,..._){if(e.apply(this,arguments)){var N=w.touches,E=N.length,z=C(this,_,w.changedTouches.length===E).event(w),D,F,W,V;for(Gi(w),F=0;F<E;++F)W=N[F],V=Ge(W,this),V=[V,this.__zoom.invert(V),W.identifier],z.touch0?!z.touch1&&z.touch0[2]!==V[2]&&(z.touch1=V,z.taps=0):(z.touch0=V,D=!0,z.taps=1+!!l);l&&(l=clearTimeout(l)),D&&(z.taps<2&&(d=V[0],l=setTimeout(function(){l=null},p)),co(this),z.start())}}function T(w,..._){if(this.__zooming){var N=C(this,_).event(w),E=w.changedTouches,z=E.length,D,F,W,V;for(uo(w),D=0;D<z;++D)F=E[D],W=Ge(F,this),N.touch0&&N.touch0[2]===F.identifier?N.touch0[0]=W:N.touch1&&N.touch1[2]===F.identifier&&(N.touch1[0]=W);if(F=N.that.__zoom,N.touch1){var Q=N.touch0[0],X=N.touch0[1],K=N.touch1[0],le=N.touch1[1],B=(B=K[0]-Q[0])*B+(B=K[1]-Q[1])*B,O=(O=le[0]-X[0])*O+(O=le[1]-X[1])*O;F=v(F,Math.sqrt(B/O)),W=[(Q[0]+K[0])/2,(Q[1]+K[1])/2],V=[(X[0]+le[0])/2,(X[1]+le[1])/2]}else if(N.touch0)W=N.touch0[0],V=N.touch0[1];else return;N.zoom("touch",n(m(F,W,V),N.extent,a))}}function P(w,..._){if(this.__zooming){var N=C(this,_).event(w),E=w.changedTouches,z=E.length,D,F;for(Gi(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),D=0;D<z;++D)F=E[D],N.touch0&&N.touch0[2]===F.identifier?delete N.touch0:N.touch1&&N.touch1[2]===F.identifier&&delete N.touch1;if(N.touch1&&!N.touch0&&(N.touch0=N.touch1,delete N.touch1),N.touch0)N.touch0[1]=this.__zoom.invert(N.touch0[0]);else if(N.end(),N.taps===2&&(F=Ge(F,this),Math.hypot(d[0]-F[0],d[1]-F[1])<h)){var W=He(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return g.wheelDelta=function(w){return arguments.length?(o=typeof w=="function"?w:ir(+w),g):o},g.filter=function(w){return arguments.length?(e=typeof w=="function"?w:ir(!!w),g):e},g.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:ir(!!w),g):r},g.extent=function(w){return arguments.length?(t=typeof w=="function"?w:ir([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),g):t},g.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],g):[i[0],i[1]]},g.translateExtent=function(w){return arguments.length?(a[0][0]=+w[0][0],a[1][0]=+w[1][0],a[0][1]=+w[0][1],a[1][1]=+w[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(w){return arguments.length?(n=w,g):n},g.duration=function(w){return arguments.length?(s=+w,g):s},g.interpolate=function(w){return arguments.length?(c=w,g):c},g.on=function(){var w=u.on.apply(u,arguments);return w===u?g:w},g.clickDistance=function(w){return arguments.length?(b=(w=+w)*w,g):Math.sqrt(b)},g.tapDistance=function(w){return arguments.length?(h=+w,g):h},g}var Je={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Fn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Ji=["Enter"," ","Escape"],ea={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},qt;(function(e){e.Strict="strict",e.Loose="loose"})(qt||(qt={}));var Ot;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ot||(Ot={}));var gn;(function(e){e.Partial="partial",e.Full="full"})(gn||(gn={}));var ta={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},ht;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(ht||(ht={}));var Bn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Bn||(Bn={}));var te;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(te||(te={}));var Ml={[te.Left]:te.Right,[te.Right]:te.Left,[te.Top]:te.Bottom,[te.Bottom]:te.Top};function na(e){return e===null?null:e?"valid":"invalid"}var oa=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Hl=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),ra=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var mo=(e,t=[0,0])=>{let{width:n,height:o}=dt(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},ia=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):ra(r)?r:t.nodeLookup.get(r.id));let s=a?lr(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return dr(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return fr(n)},Vn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=dr(n,lr(r)),o=!0)}),o?fr(n):{x:0,y:0,width:0,height:0}},cr=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,c=(t.y-o)/r,u=t.width/r,l=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:y=!0,hidden:b=!1}=f;if(a&&!y||b)continue;let h=p.width??f.width??f.initialWidth??0,g=p.height??f.height??f.initialHeight??0,{x:v,y:m}=f.internals.positionAbsolute,x=Xl(s,c,u,l,v,m,h,g),S=h*g,C=i&&x>0;(!f.internals.handleBounds||C||x>=S||f.dragging)&&d.push(f)}return d},Bl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function Zb(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=dt(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Wl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=Zb(e,a),c=Vn(s),u=ho(c,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(u,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function aa({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},l=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",Je.error005());else{let p=s.measured.width,y=s.measured.height;p&&y&&(d=[[c,u],[c+p,u+y]])}else s&&yn(a.extent)&&(d=[[a.extent[0][0]+c,a.extent[0][1]+u],[a.extent[1][0]+c,a.extent[1][1]+u]]);let f=yn(d)?hn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",Je.error015()),{position:{x:f.x-c+(a.measured.width??0)*l[0],y:f.y-u+(a.measured.height??0)*l[1]},positionAbsolute:f}}async function Fl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),y=!p&&f.parentId&&a.find(b=>b.id===f.parentId);(p||y)&&a.push(f)}let s=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),l=Bl(a,c);for(let f of c)s.has(f.id)&&!l.find(y=>y.id===f.id)&&l.push(f);if(!r)return{edges:l,nodes:a};let d=await r({nodes:a,edges:l});return typeof d=="boolean"?d?{edges:l,nodes:a}:{edges:[],nodes:[]}:d}var Wn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),hn=(e={x:0,y:0},t,n)=>({x:Wn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Wn(e.y,t[0][1],t[1][1]-(n?.height??0))});function Vl(e,t,n){let{width:o,height:r}=dt(n),{x:i,y:a}=n.internals.positionAbsolute;return hn(e,[[i,a],[i+o,a+r]],t)}var Nl=(e,t,n)=>e<t?Wn(Math.abs(e-t),1,t)/t:e>n?-Wn(Math.abs(e-n),1,t)/t:0,ur=(e,t,n=15,o=40)=>{let r=Nl(e.x,o,t.width-o)*n,i=Nl(e.y,o,t.height-o)*n;return[r,i]},dr=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Qi=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),fr=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Xn=(e,t=[0,0])=>{let{x:n,y:o}=ra(e)?e.internals.positionAbsolute:mo(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},lr=(e,t=[0,0])=>{let{x:n,y:o}=ra(e)?e.internals.positionAbsolute:mo(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},sa=(e,t)=>fr(dr(Qi(e),Qi(t))),Xl=(e,t,n,o,r,i,a,s)=>{let c=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),u=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(c*u)},go=(e,t)=>Xl(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),la=e=>tt(e.width)&&tt(e.height)&&tt(e.x)&&tt(e.y),tt=e=>!isNaN(e)&&isFinite(e),ca=(e,t)=>(n,o)=>{},qn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Gn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?qn(s,a):s},bn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function $n(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Kb(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=$n(e,n),r=$n(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=$n(e.top??e.y??0,n),r=$n(e.bottom??e.y??0,n),i=$n(e.left??e.x??0,t),a=$n(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function jb(e,t,n,o,r,i){let{x:a,y:s}=bn(e,[t,n,o]),{x:c,y:u}=bn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),l=r-c,d=i-u;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(l),bottom:Math.floor(d)}}var ho=(e,t,n,o,r,i)=>{let a=Kb(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,u=Math.min(s,c),l=Wn(u,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*l,y=n/2-f*l,b=jb(e,p,y,l,t,n),h={left:Math.min(b.left-a.left,0),top:Math.min(b.top-a.top,0),right:Math.min(b.right-a.right,0),bottom:Math.min(b.bottom-a.bottom,0)};return{x:p-h.left+h.right,y:y-h.top+h.bottom,zoom:l}},Yn=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function yn(e){return e!=null&&e!=="parent"}function dt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function ua(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function da(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function fa(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function ql(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function Gl(e){return{...ea,...e||{}}}function po(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=nt(e),s=Gn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:c,y:u}=n?qn(s,t):s;return{xSnapped:c,ySnapped:u,...s}}var pr=e=>({width:e.offsetWidth,height:e.offsetHeight}),pa=e=>e?.getRootNode?.()||window?.document,Qb=["INPUT","SELECT","TEXTAREA"];function ma(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Qb.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var ga=e=>"clientX"in e,nt=(e,t)=>{let n=ga(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},_l=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...pr(a)}})};function mr({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+r*.375+a*.375+n*.125,u=t*.125+i*.375+s*.375+o*.125,l=Math.abs(c-e),d=Math.abs(u-t);return[c,u,l,d]}function ar(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Il({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case te.Left:return[t-ar(t-o,i),n];case te.Right:return[t+ar(o-t,i),n];case te.Top:return[t,n-ar(n-r,i)];case te.Bottom:return[t,n+ar(r-n,i)]}}function gr({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,curvature:a=.25}){let[s,c]=Il({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[u,l]=Il({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,p,y]=mr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:c,targetControlX:u,targetControlY:l});return[`M${e},${t} C${s},${c} ${u},${l} ${o},${r}`,d,f,p,y]}function ha({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function Yl({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function Ul({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=dr(lr(e),lr(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return go(a,fr(i))>0}var Jb=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,e0=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),Zl=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Je.error006()),t;let o=n.getEdgeId||Jb,r;return oa(e)?r={...e}:r={...e,id:o(e)},e0(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function hr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=ha({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var Pl={[te.Left]:{x:-1,y:0},[te.Right]:{x:1,y:0},[te.Top]:{x:0,y:-1},[te.Bottom]:{x:0,y:1}},t0=({source:e,sourcePosition:t=te.Bottom,target:n})=>t===te.Left||t===te.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},zl=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function n0({source:e,sourcePosition:t=te.Bottom,target:n,targetPosition:o=te.Top,center:r,offset:i,stepPosition:a}){let s=Pl[t],c=Pl[o],u={x:e.x+s.x*i,y:e.y+s.y*i},l={x:n.x+c.x*i,y:n.y+c.y*i},d=t0({source:u,sourcePosition:t,target:l}),f=d.x!==0?"x":"y",p=d[f],y=[],b,h,g={x:0,y:0},v={x:0,y:0},[,,m,x]=ha({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f==="x"?(b=r.x??u.x+(l.x-u.x)*a,h=r.y??(u.y+l.y)/2):(b=r.x??(u.x+l.x)/2,h=r.y??u.y+(l.y-u.y)*a);let M=[{x:b,y:u.y},{x:b,y:l.y}],I=[{x:u.x,y:h},{x:l.x,y:h}];s[f]===p?y=f==="x"?M:I:y=f==="x"?I:M}else{let M=[{x:u.x,y:l.y}],I=[{x:l.x,y:u.y}];if(f==="x"?y=s.x===p?I:M:y=s.y===p?M:I,t===o){let w=Math.abs(e[f]-n[f]);if(w<=i){let _=Math.min(i-1,i-w);s[f]===p?g[f]=(u[f]>e[f]?-1:1)*_:v[f]=(l[f]>n[f]?-1:1)*_}}if(t!==o){let w=f==="x"?"y":"x",_=s[f]===c[w],N=u[w]>l[w],E=u[w]<l[w];(s[f]===1&&(!_&&N||_&&E)||s[f]!==1&&(!_&&E||_&&N))&&(y=f==="x"?M:I)}let L={x:u.x+g.x,y:u.y+g.y},R={x:l.x+v.x,y:l.y+v.y},T=Math.max(Math.abs(L.x-y[0].x),Math.abs(R.x-y[0].x)),P=Math.max(Math.abs(L.y-y[0].y),Math.abs(R.y-y[0].y));T>=P?(b=(L.x+R.x)/2,h=y[0].y):(b=y[0].x,h=(L.y+R.y)/2)}let S={x:u.x+g.x,y:u.y+g.y},C={x:l.x+v.x,y:l.y+v.y};return[[e,...S.x!==y[0].x||S.y!==y[0].y?[S]:[],...y,...C.x!==y[y.length-1].x||C.y!==y[y.length-1].y?[C]:[],n],b,h,m,x]}function o0(e,t,n,o){let r=Math.min(zl(e,t)/2,zl(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let u=e.x<n.x?-1:1,l=e.y<n.y?1:-1;return`L ${i+r*u},${a}Q ${i},${a} ${i},${a+r*l}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+r*c}Q ${i},${a} ${i+r*s},${a}`}function bo({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,borderRadius:a=5,centerX:s,centerY:c,offset:u=20,stepPosition:l=.5}){let[d,f,p,y,b]=n0({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:c},offset:u,stepPosition:l}),h=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)h+=o0(d[g-1],d[g],d[g+1],a);return h+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[h,f,p,y,b]}function Rl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Kl(e){let{sourceNode:t,targetNode:n}=e;if(!Rl(t)||!Rl(n))return null;let o=t.internals.handleBounds||Dl(t.handles),r=n.internals.handleBounds||Dl(n.handles),i=Tl(o?.source??[],e.sourceHandle),a=Tl(e.connectionMode===qt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",Je.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||te.Bottom,c=a?.position||te.Top,u=Gt(t,i,s),l=Gt(n,a,c);return{sourceX:u.x,sourceY:u.y,targetX:l.x,targetY:l.y,sourcePosition:s,targetPosition:c}}function Dl(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function Gt(e,t,n=te.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??dt(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case te.Top:return{x:r+a/2,y:i};case te.Right:return{x:r+a,y:i+s/2};case te.Bottom:return{x:r+a/2,y:i+s};case te.Left:return{x:r,y:i+s/2}}}function Tl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function br(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function jl(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let u=br(c,t);i.has(u)||(a.push({id:u,color:c.color||n,...c}),i.add(u))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var Ql=1e3,r0=10,ba={nodeOrigin:[0,0],nodeExtent:Fn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},i0={...ba,checkEquality:!0};function ya(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function Jl(e,t,n){let o=ya(ba,n);for(let r of e.values())if(r.parentId)wa(r,e,t,o);else{let i=mo(r,o.nodeOrigin),a=yn(r.extent)?r.extent:o.nodeExtent,s=hn(i,a,dt(r));r.internals.positionAbsolute=s}}function a0(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function xa(e){return e==="manual"}function yr(e,t,n,o={}){let r=ya(i0,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!xa(r.zIndexMode)?Ql:0,c=e.length>0,u=!1;t.clear(),n.clear();for(let l of e){let d=a.get(l.id);if(r.checkEquality&&l===d?.internals.userNode)t.set(l.id,d);else{let f=mo(l,r.nodeOrigin),p=yn(l.extent)?l.extent:r.nodeExtent,y=hn(f,p,dt(l));d={...r.defaults,...l,measured:{width:l.measured?.width,height:l.measured?.height},internals:{positionAbsolute:y,handleBounds:a0(l,d),z:ec(l,s,r.zIndexMode),userNode:l}},t.set(l.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),l.parentId&&wa(d,t,n,o,i),u||=l.selected??!1}return{nodesInitialized:c,hasSelectedNodes:u}}function s0(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function wa(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=ya(ba,o),u=e.parentId,l=t.get(u);if(!l){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}s0(e,n),r&&!l.parentId&&l.internals.rootParentIndex===void 0&&c==="auto"&&(l.internals.rootParentIndex=++r.i,l.internals.z=l.internals.z+r.i*r0),r&&l.internals.rootParentIndex!==void 0&&(r.i=l.internals.rootParentIndex);let d=i&&!xa(c)?Ql:0,{x:f,y:p,z:y}=l0(e,l,a,s,d,c),{positionAbsolute:b}=e.internals,h=f!==b.x||p!==b.y;(h||y!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:h?{x:f,y:p}:b,z:y}})}function ec(e,t,n){let o=tt(e.zIndex)?e.zIndex:0;return xa(n)?o:o+(e.selected?t:0)}function l0(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,c=dt(e),u=mo(e,n),l=yn(e.extent)?hn(u,e.extent,c):u,d=hn({x:a+l.x,y:s+l.y},o,c);e.extent==="parent"&&(d=Vl(d,c,t));let f=ec(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function xr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??Xn(s),u=sa(c,a.rect);i.set(a.parentId,{expandedRect:u,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let u=s.internals.positionAbsolute,l=dt(s),d=s.origin??o,f=a.x<u.x?Math.round(Math.abs(u.x-a.x)):0,p=a.y<u.y?Math.round(Math.abs(u.y-a.y)):0,y=Math.max(l.width,Math.round(a.width)),b=Math.max(l.height,Math.round(a.height)),h=(y-l.width)*d[0],g=(b-l.height)*d[1];(f>0||p>0||h||g)&&(r.push({id:c,type:"position",position:{x:s.position.x-f+h,y:s.position.y-p+g}}),n.get(c)?.forEach(v=>{e.some(m=>m.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+f,y:v.position.y+p}})})),(l.width<a.width||l.height<a.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:y+(f?d[0]*f-h:0),height:b+(p?d[1]*p-g:0)}})}),r}function tc(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let u=[],l=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(l.transform),f=[];for(let p of e.values()){let y=t.get(p.id);if(!y)continue;if(y.hidden){t.set(y.id,{...y,internals:{...y.internals,handleBounds:void 0}}),c=!0;continue}let b=pr(p.nodeElement),h=y.measured.width!==b.width||y.measured.height!==b.height;if(!!(b.width&&b.height&&(h||!y.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),m=yn(y.extent)?y.extent:i,{positionAbsolute:x}=y.internals;if(y.parentId&&y.extent==="parent"){let C=t.get(y.parentId);C&&(x=Vl(x,b,C))}else m&&(x=hn(x,m,b));let S={...y,measured:b,internals:{...y.internals,positionAbsolute:x,handleBounds:{source:_l("source",p.nodeElement,v,d,y.id),target:_l("target",p.nodeElement,v,d,y.id)}}};t.set(y.id,S),y.parentId&&wa(S,t,n,{nodeOrigin:r,zIndexMode:a}),c=!0,h&&(u.push({id:y.id,type:"dimensions",dimensions:b}),y.expandParent&&y.parentId&&f.push({id:y.id,parentId:y.parentId,rect:Xn(S,r)}))}}if(f.length>0){let p=xr(f,t,n,r);u.push(...p)}return{changes:u,updatedInternals:c}}async function nc({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function Al(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let c=o.get(a)||new Map;if(o.set(a,c.set(n,t)),i){a=`${r}-${e}-${i}`;let u=o.get(a)||new Map;o.set(a,u.set(n,t))}}function va(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},u=`${r}-${a}--${i}-${s}`,l=`${i}-${s}--${r}-${a}`;Al("source",c,l,e,r,a),Al("target",c,u,e,i,s),t.set(o.id,o)}}function oc(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:oc(n,t):!1}function Ol(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function c0(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!oc(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function Zi({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&r.push({...c,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function u0({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=qn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function rc({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,c=!1,u={x:0,y:0},l=null,d=!1,f=null,p=!1,y=!1,b=null;function h({noDragClassName:v,handleSelector:m,domNode:x,isSelectable:S,nodeId:C,nodeClickDistance:k=0}){f=He(x);function M({x:T,y:P}){let{nodeLookup:w,nodeExtent:_,snapGrid:N,snapToGrid:E,nodeOrigin:z,onNodeDrag:D,onSelectionDrag:F,onError:W,updateNodePositions:V}=t();i={x:T,y:P};let Q=!1,X=s.size>1,K=X&&_?Qi(Vn(s)):null,le=X&&E?u0({dragItems:s,snapGrid:N,x:T,y:P}):null;for(let[B,O]of s){if(!w.has(B))continue;let U={x:T-O.distance.x,y:P-O.distance.y};E&&(U=le?{x:Math.round(U.x+le.x),y:Math.round(U.y+le.y)}:qn(U,N));let ne=null;if(X&&_&&!O.extent&&K){let{positionAbsolute:Y}=O.internals,ce=Y.x-K.x+_[0][0],G=Y.x+O.measured.width-K.x2+_[1][0],re=Y.y-K.y+_[0][1],fe=Y.y+O.measured.height-K.y2+_[1][1];ne=[[ce,re],[G,fe]]}let{position:oe,positionAbsolute:J}=aa({nodeId:B,nextPosition:U,nodeLookup:w,nodeExtent:ne||_,nodeOrigin:z,onError:W});Q=Q||O.position.x!==oe.x||O.position.y!==oe.y,O.position=oe,O.internals.positionAbsolute=J}if(y=y||Q,!!Q&&(V(s,!0),b&&(o||D||!C&&F))){let[B,O]=Zi({nodeId:C,dragItems:s,nodeLookup:w});o?.(b,s,B,O),D?.(b,B,O),C||F?.(b,O)}}async function I(){if(!l)return;let{transform:T,panBy:P,autoPanSpeed:w,autoPanOnNodeDrag:_}=t();if(!_){c=!1,cancelAnimationFrame(a);return}let[N,E]=ur(u,l,w);(N!==0||E!==0)&&(i.x=(i.x??0)-N/T[2],i.y=(i.y??0)-E/T[2],await P({x:N,y:E})&&M(i)),a=requestAnimationFrame(I)}function L(T){let{nodeLookup:P,multiSelectionActive:w,nodesDraggable:_,transform:N,snapGrid:E,snapToGrid:z,selectNodesOnDrag:D,onNodeDragStart:F,onSelectionDragStart:W,unselectNodesAndEdges:V}=t();d=!0,(!D||!S)&&!w&&C&&(P.get(C)?.selected||V()),S&&D&&C&&e?.(C);let Q=po(T.sourceEvent,{transform:N,snapGrid:E,snapToGrid:z,containerBounds:l});if(i=Q,s=c0(P,_,Q,C),s.size>0&&(n||F||!C&&W)){let[X,K]=Zi({nodeId:C,dragItems:s,nodeLookup:P});n?.(T.sourceEvent,s,X,K),F?.(T.sourceEvent,X,K),C||W?.(T.sourceEvent,K)}}let R=vi().clickDistance(k).on("start",T=>{let{domNode:P,nodeDragThreshold:w,transform:_,snapGrid:N,snapToGrid:E}=t();l=P?.getBoundingClientRect()||null,p=!1,y=!1,b=T.sourceEvent,w===0&&L(T),i=po(T.sourceEvent,{transform:_,snapGrid:N,snapToGrid:E,containerBounds:l}),u=nt(T.sourceEvent,l)}).on("drag",T=>{let{autoPanOnNodeDrag:P,transform:w,snapGrid:_,snapToGrid:N,nodeDragThreshold:E,nodeLookup:z}=t(),D=po(T.sourceEvent,{transform:w,snapGrid:_,snapToGrid:N,containerBounds:l});if(b=T.sourceEvent,(T.sourceEvent.type==="touchmove"&&T.sourceEvent.touches.length>1||C&&!z.has(C))&&(p=!0),!p){if(!c&&P&&d&&(c=!0,I()),!d){let F=nt(T.sourceEvent,l),W=F.x-u.x,V=F.y-u.y;Math.sqrt(W*W+V*V)>E&&L(T)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&s&&d&&(u=nt(T.sourceEvent,l),M(D))}}).on("end",T=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:P,updateNodePositions:w,onNodeDragStop:_,onSelectionDragStop:N}=t();if(y&&(w(s,!1),y=!1),r||_||!C&&N){let[E,z]=Zi({nodeId:C,dragItems:s,nodeLookup:P,dragging:!1});r?.(T.sourceEvent,s,E,z),_?.(T.sourceEvent,E,z),C||N?.(T.sourceEvent,z)}}}).filter(T=>{let P=T.target;return!T.button&&(!v||!Ol(P,`.${v}`,x))&&(!m||Ol(P,m,x))});f.call(R)}function g(){f?.on(".drag",null)}return{update:h,destroy:g}}function d0(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())go(r,Xn(i))>0&&o.push(i);return o}var f0=250;function p0(e,t,n,o){let r=[],i=1/0,a=d0(e,n,t+f0);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of c){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:l,y:d}=Gt(s,u,u.position,!0),f=Math.sqrt(Math.pow(l-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...u,x:l,y:d}],i=f):f===i&&r.push({...u,x:l,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(c=>c.type===s)??r[0]}return r[0]}function ic(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(u=>u.id===n):s?.[0])??null;return c&&i?{...c,...Gt(a,c,c.position,!0)}:c}function ac(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function m0(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var sc=()=>!0;function g0(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:u,autoPanOnConnect:l,flowId:d,panBy:f,cancelConnection:p,onConnectStart:y,onConnect:b,onConnectEnd:h,isValidConnection:g=sc,onReconnectEnd:v,updateConnection:m,getTransform:x,getFromHandle:S,autoPanSpeed:C,dragThreshold:k=1,handleDomNode:M}){let I=pa(e.target),L=0,R,{x:T,y:P}=nt(e),w=ac(i,M),_=s?.getBoundingClientRect(),N=!1;if(!_||!w)return;let E=ic(r,w,o,c,t);if(!E)return;let z=nt(e,_),D=!1,F=null,W=!1,V=null;function Q(){if(!l||!_)return;let[oe,J]=ur(z,_,C);f({x:oe,y:J}),L=requestAnimationFrame(Q)}let X={...E,nodeId:r,type:w,position:E.position},K=c.get(r),B={inProgress:!0,isValid:null,from:Gt(K,X,te.Left,!0),fromHandle:X,fromPosition:X.position,fromNode:K,to:z,toHandle:null,toPosition:Ml[X.position],toNode:null,pointer:z};function O(){N=!0,m(B),y?.(e,{nodeId:r,handleId:o,handleType:w})}k===0&&O();function U(oe){if(!N){let{x:fe,y:Ce}=nt(oe),Te=fe-T,Ke=Ce-P;if(!(Te*Te+Ke*Ke>k*k))return;O()}if(!S()||!X){ne(oe);return}let J=x();z=nt(oe,_),R=p0(Gn(z,J,!1,[1,1]),n,c,X),D||(Q(),D=!0);let Y=lc(oe,{handle:R,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:g,doc:I,lib:u,flowId:d,nodeLookup:c});V=Y.handleDomNode,F=Y.connection,W=m0(!!R,Y.isValid);let ce=c.get(r),G=ce?Gt(ce,X,te.Left,!0):B.from,re={...B,from:G,isValid:W,to:Y.toHandle&&W?bn({x:Y.toHandle.x,y:Y.toHandle.y},J):z,toHandle:Y.toHandle,toPosition:W&&Y.toHandle?Y.toHandle.position:Ml[X.position],toNode:Y.toHandle?c.get(Y.toHandle.nodeId):null,pointer:z};m(re),B=re}function ne(oe){if(!("touches"in oe&&oe.touches.length>0)){if(N){(R||V)&&F&&W&&b?.(F);let{inProgress:J,...Y}=B,ce={...Y,toPosition:B.toHandle?B.toPosition:null};h?.(oe,ce),i&&v?.(oe,ce)}p(),cancelAnimationFrame(L),D=!1,W=!1,F=null,V=null,I.removeEventListener("mousemove",U),I.removeEventListener("mouseup",ne),I.removeEventListener("touchmove",U),I.removeEventListener("touchend",ne)}}I.addEventListener("mousemove",U),I.addEventListener("mouseup",ne),I.addEventListener("touchmove",U),I.addEventListener("touchend",ne)}function lc(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:u=sc,nodeLookup:l}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y}=nt(e),b=a.elementFromPoint(p,y),h=b?.classList.contains(`${s}-flow__handle`)?b:f,g={handleDomNode:h,isValid:!1,connection:null,toHandle:null};if(h){let v=ac(void 0,h),m=h.getAttribute("data-nodeid"),x=h.getAttribute("data-handleid"),S=h.classList.contains("connectable"),C=h.classList.contains("connectableend");if(!m||!v)return g;let k={source:d?m:o,sourceHandle:d?x:r,target:d?o:m,targetHandle:d?r:x};g.connection=k;let I=S&&C&&(n===qt.Strict?d&&v==="source"||!d&&v==="target":m!==o||x!==r);g.isValid=I&&u(k),g.toHandle=ic(m,v,x,l,n,!0)}return g}var wr={onPointerDown:g0,isValid:lc};function cc({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=He(e);function i({translateExtent:s,width:c,height:u,zoomStep:l=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let y=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=n(),S=m.sourceEvent.ctrlKey&&Yn()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*l,k=x[2]*Math.pow(2,C*S);t.scaleTo(k)},b=[0,0],h=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(b=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},g=m=>{let x=n();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[S[0]-b[0],S[1]-b[1]];b=S;let k=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),M={x:x[0]-C[0]*k,y:x[1]-C[1]*k},I=[[0,0],[c,u]];t.setViewportConstrained({x:M.x,y:M.y,zoom:x[2]},I,s)},v=Ui().on("start",h).on("zoom",d?g:null).on("zoom.wheel",f?y:null);r.call(v,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Ge}}var vr=e=>({x:e.x,y:e.y,zoom:e.k}),Ki=({x:e,y:t,zoom:n})=>fo.translate(e,t).scale(n),Hn=(e,t)=>e.target.closest(`.${t}`),uc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),h0=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,ji=(e,t=0,n=h0,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},dc=e=>{let t=e.ctrlKey&&Yn()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function b0({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:u}){return l=>{if(Hn(l,t))return l.ctrlKey&&l.preventDefault(),!1;l.preventDefault(),l.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(l.ctrlKey&&a){let h=Ge(l),g=dc(l),v=d*Math.pow(2,g);o.scaleTo(n,v,h,l);return}let f=l.deltaMode===1?20:1,p=r===Ot.Vertical?0:l.deltaX*f,y=r===Ot.Horizontal?0:l.deltaY*f;!Yn()&&l.shiftKey&&r!==Ot.Vertical&&(p=l.deltaY*f,y=0),o.translateBy(n,-(p/d)*i,-(y/d)*i,{internal:!0});let b=vr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(l,b):(e.isPanScrolling=!0,s?.(l,b)),e.panScrollTimeout=setTimeout(()=>{u?.(l,b),e.isPanScrolling=!1},150)}}function y0({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=Hn(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function x0({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=vr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function w0({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&uc(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,vr(i.transform))}}function v0({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&uc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=vr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function k0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:u,connectionInProgress:l}){return d=>{let f=e||t,p=n&&d.ctrlKey,y=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Hn(d,`${u}-flow__node`)||Hn(d,`${u}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||l&&!y||Hn(d,s)&&y||Hn(d,c)&&(!y||r&&y&&!e)||!n&&d.ctrlKey&&y)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&y||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let b=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||y)&&b}}function fc({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},l=e.getBoundingClientRect(),d=[[0,0],[l.width,l.height]];(typeof ResizeObserver<"u"?new ResizeObserver(P=>{let w=P[0];w&&(d=[[0,0],[w.contentRect.width,w.contentRect.height]])}):null)?.observe(e);let p=Ui().extent(()=>d).scaleExtent([t,n]).translateExtent(o),y=He(e).call(p);x({x:r.x,y:r.y,zoom:Wn(r.zoom,t,n)},[[0,0],[l.width,l.height]],o);let b=y.on("wheel.zoom"),h=y.on("dblclick.zoom");p.wheelDelta(dc);async function g(P,w){return y?new Promise(_=>{p?.interpolate(w?.interpolate==="linear"?Tn:An).transform(ji(y,w?.duration,w?.ease,()=>_(!0)),P)}):!1}function v({noWheelClassName:P,noPanClassName:w,onPaneContextMenu:_,userSelectionActive:N,panOnScroll:E,panOnDrag:z,panOnScrollMode:D,panOnScrollSpeed:F,preventScrolling:W,zoomOnPinch:V,zoomOnScroll:Q,zoomOnDoubleClick:X,zoomActivationKeyPressed:K,lib:le,onTransformChange:B,connectionInProgress:O,paneClickDistance:U,selectionOnDrag:ne}){N&&!u.isZoomingOrPanning&&m();let oe=E&&!K&&!N;p.clickDistance(ne?1/0:!tt(U)||U<0?0:U);let J=oe?b0({zoomPanValues:u,noWheelClassName:P,d3Selection:y,d3Zoom:p,panOnScrollMode:D,panOnScrollSpeed:F,zoomOnPinch:V,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):y0({noWheelClassName:P,preventScrolling:W,d3ZoomHandler:b});y.on("wheel.zoom",J,{passive:!1});let Y=x0({zoomPanValues:u,onDraggingChange:c,onPanZoomStart:a});p.on("start",Y);let ce=w0({zoomPanValues:u,panOnDrag:z,onPaneContextMenu:!!_,onPanZoom:i,onTransformChange:B});p.on("zoom",ce);let G=v0({zoomPanValues:u,panOnDrag:z,panOnScroll:E,onPaneContextMenu:_,onPanZoomEnd:s,onDraggingChange:c});p.on("end",G);let re=k0({zoomActivationKeyPressed:K,panOnDrag:z,zoomOnScroll:Q,panOnScroll:E,zoomOnDoubleClick:X,zoomOnPinch:V,userSelectionActive:N,noPanClassName:w,noWheelClassName:P,lib:le,connectionInProgress:O});p.filter(re),X?y.on("dblclick.zoom",h):y.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(P,w,_){let N=Ki(P),E=p?.constrain()(N,w,_);return E&&await g(E),E}async function S(P,w){let _=Ki(P);return await g(_,w),_}function C(P){if(y){let w=Ki(P),_=y.property("__zoom");(_.k!==P.zoom||_.x!==P.x||_.y!==P.y)&&p?.transform(y,w,null,{sync:!0})}}function k(){let P=y?Yi(y.node()):{x:0,y:0,k:1};return{x:P.x,y:P.y,zoom:P.k}}async function M(P,w){return y?new Promise(_=>{p?.interpolate(w?.interpolate==="linear"?Tn:An).scaleTo(ji(y,w?.duration,w?.ease,()=>_(!0)),P)}):!1}async function I(P,w){return y?new Promise(_=>{p?.interpolate(w?.interpolate==="linear"?Tn:An).scaleBy(ji(y,w?.duration,w?.ease,()=>_(!0)),P)}):!1}function L(P){p?.scaleExtent(P)}function R(P){p?.translateExtent(P)}function T(P){let w=!tt(P)||P<0?0:P;p?.clickDistance(w)}return{update:v,destroy:m,setViewport:S,setViewportConstrained:x,getViewport:k,scaleTo:M,scaleBy:I,setScaleExtent:L,setTranslateExtent:R,syncViewport:C,setClickDistance:T}}var Yt;(function(e){e.Line="line",e.Handle="handle"})(Yt||(Yt={}));function S0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function Ll(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Vt(e,t){return Math.max(0,t-e)}function Xt(e,t){return Math.max(0,e-t)}function sr(e,t,n){return Math.max(0,t-e,e-n)}function $l(e,t){return e?!t:t}function C0(e,t,n,o,r,i,a,s){let{affectsX:c,affectsY:u}=t,{isHorizontal:l,isVertical:d}=t,f=l&&d,{xSnapped:p,ySnapped:y}=n,{minWidth:b,maxWidth:h,minHeight:g,maxHeight:v}=o,{x:m,y:x,width:S,height:C,aspectRatio:k}=e,M=Math.floor(l?p-e.pointerX:0),I=Math.floor(d?y-e.pointerY:0),L=S+(c?-M:M),R=C+(u?-I:I),T=-i[0]*S,P=-i[1]*C,w=sr(L,b,h),_=sr(R,g,v);if(a){let z=0,D=0;c&&M<0?z=Vt(m+M+T,a[0][0]):!c&&M>0&&(z=Xt(m+L+T,a[1][0])),u&&I<0?D=Vt(x+I+P,a[0][1]):!u&&I>0&&(D=Xt(x+R+P,a[1][1])),w=Math.max(w,z),_=Math.max(_,D)}if(s){let z=0,D=0;c&&M>0?z=Xt(m+M,s[0][0]):!c&&M<0&&(z=Vt(m+L,s[1][0])),u&&I>0?D=Xt(x+I,s[0][1]):!u&&I<0&&(D=Vt(x+R,s[1][1])),w=Math.max(w,z),_=Math.max(_,D)}if(r){if(l){let z=sr(L/k,g,v)*k;if(w=Math.max(w,z),a){let D=0;!c&&!u||c&&!u&&f?D=Xt(x+P+L/k,a[1][1])*k:D=Vt(x+P+(c?M:-M)/k,a[0][1])*k,w=Math.max(w,D)}if(s){let D=0;!c&&!u||c&&!u&&f?D=Vt(x+L/k,s[1][1])*k:D=Xt(x+(c?M:-M)/k,s[0][1])*k,w=Math.max(w,D)}}if(d){let z=sr(R*k,b,h)/k;if(_=Math.max(_,z),a){let D=0;!c&&!u||u&&!c&&f?D=Xt(m+R*k+T,a[1][0])/k:D=Vt(m+(u?I:-I)*k+T,a[0][0])/k,_=Math.max(_,D)}if(s){let D=0;!c&&!u||u&&!c&&f?D=Vt(m+R*k,s[1][0])/k:D=Xt(m+(u?I:-I)*k,s[0][0])/k,_=Math.max(_,D)}}}I=I+(I<0?_:-_),M=M+(M<0?w:-w),r&&(f?L>R*k?I=($l(c,u)?-M:M)/k:M=($l(c,u)?-I:I)*k:l?(I=M/k,u=c):(M=I*k,c=u));let N=c?m+M:m,E=u?x+I:x;return{width:S+(c?-M:M),height:C+(u?-I:I),x:i[0]*M*(c?-1:1)+N,y:i[1]*I*(u?-1:1)+E}}var pc={width:0,height:0,x:0,y:0},E0={...pc,pointerX:0,pointerY:0,aspectRatio:1};function M0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[o-s,r-c],[o+i-s,r+a-c]]}function mc({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=He(e),a={controlDirection:Ll("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:l,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:y,onResizeEnd:b,shouldResize:h}){let g={...pc},v={...E0};a={boundaries:l,resizeDirection:f,keepAspectRatio:d,controlDirection:Ll(u)};let m,x=null,S=[],C,k,M,I=!1,L=vi().on("start",R=>{let{nodeLookup:T,transform:P,snapGrid:w,snapToGrid:_,nodeOrigin:N,paneDomNode:E}=n();if(m=T.get(t),!m)return;x=E?.getBoundingClientRect()??null;let{xSnapped:z,ySnapped:D}=po(R.sourceEvent,{transform:P,snapGrid:w,snapToGrid:_,containerBounds:x});g={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},v={...g,pointerX:z,pointerY:D,aspectRatio:g.width/g.height},C=void 0,k=yn(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=T.get(m.parentId)),C&&m.extent==="parent"&&(k=[[0,0],[C.measured.width,C.measured.height]]),S=[],M=void 0;for(let[F,W]of T)if(W.parentId===t&&(S.push({id:F,position:{...W.position},extent:W.extent}),W.extent==="parent"||W.expandParent)){let V=M0(W,m,W.origin??N);M?M=[[Math.min(V[0][0],M[0][0]),Math.min(V[0][1],M[0][1])],[Math.max(V[1][0],M[1][0]),Math.max(V[1][1],M[1][1])]]:M=V}p?.(R,{...g})}).on("drag",R=>{let{transform:T,snapGrid:P,snapToGrid:w,nodeOrigin:_}=n(),N=po(R.sourceEvent,{transform:T,snapGrid:P,snapToGrid:w,containerBounds:x}),E=[];if(!m)return;let{x:z,y:D,width:F,height:W}=g,V={},Q=m.origin??_,{width:X,height:K,x:le,y:B}=C0(v,a.controlDirection,N,a.boundaries,a.keepAspectRatio,Q,k,M),O=X!==F,U=K!==W,ne=le!==z&&O,oe=B!==D&&U;if(!ne&&!oe&&!O&&!U)return;if((ne||oe||Q[0]===1||Q[1]===1)&&(V.x=ne?le:g.x,V.y=oe?B:g.y,g.x=V.x,g.y=V.y,S.length>0)){let G=le-z,re=B-D;for(let fe of S)fe.position={x:fe.position.x-G+Q[0]*(X-F),y:fe.position.y-re+Q[1]*(K-W)},E.push(fe)}if((O||U)&&(V.width=O&&(!a.resizeDirection||a.resizeDirection==="horizontal")?X:g.width,V.height=U&&(!a.resizeDirection||a.resizeDirection==="vertical")?K:g.height,g.width=V.width,g.height=V.height),C&&m.expandParent){let G=Q[0]*(V.width??0);V.x&&V.x<G&&(g.x=G,v.x=v.x-(V.x-G));let re=Q[1]*(V.height??0);V.y&&V.y<re&&(g.y=re,v.y=v.y-(V.y-re))}let J=S0({width:g.width,prevWidth:F,height:g.height,prevHeight:W,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),Y={...g,direction:J};h?.(R,Y)!==!1&&(I=!0,y?.(R,Y),o(V,E))}).on("end",R=>{I&&(b?.(R,{...g}),r?.({...g}),I=!1)});i.call(L)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var Nc=ws(require("react"),1),_c=ws(kc(),1);var Cc={},Sc=e=>{let t,n=new Set,o=(l,d)=>{let f=typeof l=="function"?l(t):l;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>u,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(Cc.env?Cc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(o,r,c);return c},Ec=e=>e?Sc(e):Sc;var{useDebugValue:X0}=Nc.default,{useSyncExternalStoreWithSelector:q0}=_c.default,G0=e=>e;function Sa(e,t=G0,n){let o=q0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return X0(o),o}var Mc=(e,t)=>{let n=Ec(e),o=(r,i=t)=>Sa(n,r,i);return Object.assign(o,n),o},Ic=(e,t)=>e?Mc(e,t):Mc;function Se(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var Y0=require("react-dom"),Mr=(0,$.createContext)(null),U0=Mr.Provider,nu=Je.error001("react");function me(e,t){let n=(0,$.useContext)(Mr);if(n===null)throw new Error(nu);return Sa(n,e,t)}function xe(){let e=(0,$.useContext)(Mr);if(e===null)throw new Error(nu);return(0,$.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Pc={display:"none"},Z0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},ou="react-flow__node-desc",ru="react-flow__edge-desc",K0="react-flow__aria-live",j0=e=>e.ariaLiveMessage,Q0=e=>e.ariaLabelConfig;function J0({rfId:e}){let t=me(j0);return(0,H.jsx)("div",{id:`${K0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:Z0,children:t})}function ey({rfId:e,disableKeyboardA11y:t}){let n=me(Q0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{id:`${ou}-${e}`,style:Pc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,H.jsx)("div",{id:`${ru}-${e}`,style:Pc,children:n["edge.a11yDescription.default"]}),!t&&(0,H.jsx)(J0,{rfId:e})]})}var Nr=(0,$.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,H.jsx)("div",{className:Ne(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});Nr.displayName="Panel";var zc="https://reactflow.dev?utm_source=attribution";function ty({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,H.jsx)(Nr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${zc}`,children:(0,H.jsx)("a",{href:zc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var ny=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},Sr=e=>e.id;function oy(e,t){return Se(e.selectedNodes.map(Sr),t.selectedNodes.map(Sr))&&Se(e.selectedEdges.map(Sr),t.selectedEdges.map(Sr))}function ry({onSelectionChange:e}){let t=xe(),{selectedNodes:n,selectedEdges:o}=me(ny,oy);return(0,$.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var iy=e=>!!e.onSelectionChangeHandlers;function ay({onSelectionChange:e}){let t=me(iy);return e||t?(0,H.jsx)(ry,{onSelectionChange:e}):null}var iu=[0,0],sy={x:0,y:0,zoom:1},ly=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Rc=[...ly,"rfId"],cy=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Dc={translateExtent:Fn,nodeOrigin:iu,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function uy(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=me(cy,Se),u=xe();(0,$.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{l.current=Dc,s()}),[]);let l=(0,$.useRef)(Dc);return(0,$.useEffect)(()=>{for(let d of Rc){let f=e[d],p=l.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?u.setState({ariaLabelConfig:Gl(f)}):d==="fitView"?u.setState({fitViewQueued:f}):d==="fitViewOptions"?u.setState({fitViewOptions:f}):u.setState({[d]:f})))}l.current=e},Rc.map(d=>e[d])),null}function Tc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function dy(e){let[t,n]=(0,$.useState)(e==="system"?null:e);return(0,$.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Tc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Tc()?.matches?"dark":"light"}var Ac=typeof document<"u"?document:null;function yo(e=null,t={target:Ac,actInsideInputWithModifier:!0}){let[n,o]=(0,$.useState)(!1),r=(0,$.useRef)(!1),i=(0,$.useRef)(new Set([])),[a,s]=(0,$.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),l=u.reduce((d,f)=>d.concat(...f),[]);return[u,l]}return[[],[]]},[e]);return(0,$.useEffect)(()=>{let c=t?.target??Ac,u=t?.actInsideInputWithModifier??!0;if(e!==null){let l=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!u)&&ma(p))return!1;let b=Lc(p.code,s);if(i.current.add(p[b]),Oc(a,i.current,!1)){let h=p.composedPath?.()?.[0]||p.target,g=h?.nodeName==="BUTTON"||h?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},d=p=>{let y=Lc(p.code,s);Oc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[y]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",l),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",l),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function Oc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function Lc(e,t){return t.includes(e)?"code":"key"}var fy=()=>{let e=xe();return(0,$.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=ho(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),u={x:t.x-s,y:t.y-c},l=n.snapGrid??r,d=n.snapToGrid??i;return Gn(u,o,d,l)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=bn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function au(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)py(c,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function py(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function su(e,t){return au(e,t)}function lu(e,t){return au(e,t)}function xn(e,t){return{id:e,type:"select",selected:t}}function Zn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(xn(i.id,a)))}return o}function $c({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Hc(e){return{id:e.id,type:"remove"}}var my=ca("React Flow","https://reactflow.dev/");function gy(e,t,n={}){return Zl(e,t,{...n,onError:n.onError??my})}var Bc=e=>Hl(e),hy=e=>oa(e);function cu(e){return(0,$.forwardRef)(e)}var uu=typeof window<"u"?$.useLayoutEffect:$.useEffect;function Wc(e){let[t,n]=(0,$.useState)(BigInt(0)),[o]=(0,$.useState)(()=>by(()=>n(r=>r+BigInt(1))));return uu(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function by(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var du=(0,$.createContext)(null);function yy({children:e}){let t=xe(),n=(0,$.useCallback)(s=>{let{nodes:c=[],setNodes:u,hasDefaultNodes:l,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:y}=t.getState(),b=c;for(let g of s)b=typeof g=="function"?g(b):g;let h=$c({items:b,lookup:f});for(let g of y.values())h=g(h);l&&u(b),h.length>0?d?.(h):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:v,setNodes:m}=t.getState();g&&m(v)})},[]),o=Wc(n),r=(0,$.useCallback)(s=>{let{edges:c=[],setEdges:u,hasDefaultEdges:l,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let y of s)p=typeof y=="function"?y(p):y;l?u(p):d&&d($c({items:p,lookup:f}))},[]),i=Wc(r),a=(0,$.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,H.jsx)(du.Provider,{value:a,children:e})}function xy(){let e=(0,$.useContext)(du);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var wy=e=>!!e.panZoom;function Na(){let e=fy(),t=xe(),n=xy(),o=me(wy),r=(0,$.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),y=Bc(d)?d:f.get(d.id),b=y.parentId?da(y.position,y.measured,y.parentId,f,p):y.position,h={...y,position:b,width:y.measured?.width??y.width,height:y.measured?.height??y.height};return Xn(h)},u=(d,f,p={replace:!1})=>{a(y=>y.map(b=>{if(b.id===d){let h=typeof f=="function"?f(b):f;return p.replace&&Bc(h)?h:{...b,...h}}return b}))},l=(d,f,p={replace:!1})=>{s(y=>y.map(b=>{if(b.id===d){let h=typeof f=="function"?f(b):f;return p.replace&&hy(h)?h:{...b,...h}}return b}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[y,b,h]=p;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:y,y:b,zoom:h}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:y,onNodesDelete:b,onEdgesDelete:h,triggerNodeChanges:g,triggerEdgeChanges:v,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:S,edges:C}=await Fl({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:y,onBeforeDelete:x}),k=C.length>0,M=S.length>0;if(k){let I=C.map(Hc);h?.(C),v(I)}if(M){let I=S.map(Hc);b?.(S),g(I)}return(M||k)&&m?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(d,f=!0,p)=>{let y=la(d),b=y?d:c(d),h=p!==void 0;return b?(p||t.getState().nodes).filter(g=>{let v=t.getState().nodeLookup.get(g.id);if(v&&!y&&(g.id===d.id||!v.internals.positionAbsolute))return!1;let m=Xn(h?g:v),x=go(m,b);return f&&x>0||x>=m.width*m.height||x>=b.width*b.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let b=la(d)?d:c(d);if(!b)return!1;let h=go(b,f);return p&&h>0||h>=f.width*f.height||h>=b.width*b.height},updateNode:u,updateNodeData:(d,f,p={replace:!1})=>{u(d,y=>{let b=typeof f=="function"?f(y):f;return p.replace?{...y,data:b}:{...y,data:{...y.data,...b}}},p)},updateEdge:l,updateEdgeData:(d,f,p={replace:!1})=>{l(d,y=>{let b=typeof f=="function"?f(y):f;return p.replace?{...y,data:b}:{...y,data:{...y.data,...b}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return ia(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??ql();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,$.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Fc=e=>e.selected,vy=typeof window<"u"?window:void 0;function ky({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=xe(),{deleteElements:o}=Na(),r=yo(e,{actInsideInputWithModifier:!1}),i=yo(t,{target:vy});(0,$.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(Fc),edges:a.filter(Fc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,$.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function Sy(e){let t=xe();(0,$.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=pr(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Je.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var _r={position:"absolute",width:"100%",height:"100%",top:0,left:0},Cy=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Ey({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=Ot.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:u,minZoom:l,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:y,noWheelClassName:b,noPanClassName:h,onViewportChange:g,isControlledViewport:v,paneClickDistance:m,selectionOnDrag:x}){let S=xe(),C=(0,$.useRef)(null),{userSelectionActive:k,lib:M,connectionInProgress:I}=me(Cy,Se),L=yo(f),R=(0,$.useRef)();Sy(C);let T=(0,$.useCallback)(P=>{g?.({x:P[0],y:P[1],zoom:P[2]}),v||S.setState({transform:P})},[g,v]);return(0,$.useEffect)(()=>{if(C.current){R.current=fc({domNode:C.current,minZoom:l,maxZoom:d,translateExtent:u,viewport:c,onDraggingChange:N=>S.setState(E=>E.paneDragging===N?E:{paneDragging:N}),onPanZoomStart:(N,E)=>{let{onViewportChangeStart:z,onMoveStart:D}=S.getState();D?.(N,E),z?.(E)},onPanZoom:(N,E)=>{let{onViewportChange:z,onMove:D}=S.getState();D?.(N,E),z?.(E)},onPanZoomEnd:(N,E)=>{let{onViewportChangeEnd:z,onMoveEnd:D}=S.getState();D?.(N,E),z?.(E)}});let{x:P,y:w,zoom:_}=R.current.getViewport();return S.setState({panZoom:R.current,transform:[P,w,_],domNode:C.current.closest(".react-flow")}),()=>{R.current?.destroy()}}},[]),(0,$.useEffect)(()=>{R.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:L,preventScrolling:p,noPanClassName:h,userSelectionActive:k,noWheelClassName:b,lib:M,onTransformChange:T,connectionInProgress:I,selectionOnDrag:x,paneClickDistance:m})},[e,t,n,o,r,i,a,s,L,p,h,k,b,M,T,I,x,m]),(0,H.jsx)("div",{className:"react-flow__renderer",ref:C,style:_r,children:y})}var My=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Ny(){let{userSelectionActive:e,userSelectionRect:t}=me(My,Se);return e&&t?(0,H.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Ca=(e,t)=>n=>{n.target===t.current&&e?.(n)},_y=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function Iy({isSelecting:e,selectionKeyPressed:t,selectionMode:n=gn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:u,onPaneContextMenu:l,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:y,children:b}){let h=(0,$.useRef)(0),g=xe(),{userSelectionActive:v,elementsSelectable:m,dragging:x,panBy:S,autoPanSpeed:C}=me(_y,Se),k=m&&(e||v),M=(0,$.useRef)(null),I=(0,$.useRef)(),L=(0,$.useRef)(new Set),R=(0,$.useRef)(new Set),T=(0,$.useRef)(!1),P=(0,$.useRef)(!1),w=(0,$.useRef)({x:0,y:0}),_=(0,$.useRef)(!1),N=O=>{if(P.current||T.current||g.getState().connection.inProgress){P.current=!1,T.current=!1;return}u?.(O),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},E=O=>{if(Array.isArray(o)&&o?.includes(2)){O.preventDefault();return}l?.(O)},z=d?O=>d(O):void 0,D=O=>{P.current&&(O.stopPropagation(),P.current=!1)},F=O=>{let{domNode:U,transform:ne}=g.getState();if(I.current=U?.getBoundingClientRect(),!I.current)return;let oe=O.target===M.current;if(!oe&&!!O.target.closest(".nokey")||!e||!(a&&oe||t)||O.button!==0||!O.isPrimary)return;O.target?.setPointerCapture?.(O.pointerId),P.current=!1;let{x:ce,y:G}=nt(O.nativeEvent,I.current),re=Gn({x:ce,y:G},ne);g.setState({userSelectionRect:{width:0,height:0,startX:re.x,startY:re.y,x:ce,y:G}}),oe||(O.stopPropagation(),O.preventDefault())};function W(O,U){let{userSelectionRect:ne}=g.getState();if(!ne)return;let{transform:oe,nodeLookup:J,edgeLookup:Y,connectionLookup:ce,triggerNodeChanges:G,triggerEdgeChanges:re,defaultEdgeOptions:fe}=g.getState(),Ce={x:ne.startX,y:ne.startY},{x:Te,y:Ke}=bn(Ce,oe),it={startX:Ce.x,startY:Ce.y,x:O<Te?O:Te,y:U<Ke?U:Ke,width:Math.abs(O-Te),height:Math.abs(U-Ke)},nn=L.current,Mt=R.current;L.current=new Set(cr(J,it,oe,n===gn.Partial,!0).map(je=>je.id)),R.current=new Set;let Nt=fe?.selectable??!0;for(let je of L.current){let Xe=ce.get(je);if(Xe)for(let{edgeId:at}of Xe.values()){let st=Y.get(at);st&&(st.selectable??Nt)&&R.current.add(at)}}if(!fa(nn,L.current)){let je=Zn(J,L.current,!0);G(je)}if(!fa(Mt,R.current)){let je=Zn(Y,R.current);re(je)}g.setState({userSelectionRect:it,userSelectionActive:!0,nodesSelectionActive:!1})}function V(){if(!r||!I.current)return;let[O,U]=ur(w.current,I.current,C);S({x:O,y:U}).then(ne=>{if(!P.current||!ne){h.current=requestAnimationFrame(V);return}let{x:oe,y:J}=w.current;W(oe,J),h.current=requestAnimationFrame(V)})}let Q=()=>{cancelAnimationFrame(h.current),h.current=0,_.current=!1};(0,$.useEffect)(()=>()=>Q(),[]);let X=O=>{let{userSelectionRect:U,transform:ne,resetSelectedElements:oe}=g.getState();if(!I.current||!U)return;let{x:J,y:Y}=nt(O.nativeEvent,I.current);w.current={x:J,y:Y};let ce=bn({x:U.startX,y:U.startY},ne);if(!P.current){let G=t?0:i;if(Math.hypot(J-ce.x,Y-ce.y)<=G)return;oe(),s?.(O)}P.current=!0,_.current||(V(),_.current=!0),W(J,Y)},K=O=>{if(!k){O.target===M.current&&g.getState().connection.inProgress&&(T.current=!0);return}O.button===0&&(O.target?.releasePointerCapture?.(O.pointerId),!v&&O.target===M.current&&g.getState().userSelectionRect&&N?.(O),g.setState({userSelectionActive:!1,userSelectionRect:null}),P.current&&(c?.(O),g.setState({nodesSelectionActive:L.current.size>0})),Q())},le=O=>{O.target?.releasePointerCapture?.(O.pointerId),Q()},B=o===!0||Array.isArray(o)&&o.includes(0);return(0,H.jsxs)("div",{className:Ne(["react-flow__pane",{draggable:B,dragging:x,selection:e}]),onClick:k?void 0:Ca(N,M),onContextMenu:Ca(E,M),onWheel:Ca(z,M),onPointerEnter:k?void 0:f,onPointerMove:k?X:p,onPointerUp:K,onPointerCancel:k?le:void 0,onPointerDownCapture:k?F:void 0,onClickCapture:k?D:void 0,onPointerLeave:y,ref:M,style:_r,children:[b,(0,H.jsx)(Ny,{})]})}function Ma({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),u=s.get(e);if(!u){c?.("012",Je.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&a)&&(i({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function fu({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=xe(),[c,u]=(0,$.useState)(!1),l=(0,$.useRef)();return(0,$.useEffect)(()=>{if(!t)return l.current=rc({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{Ma({id:d,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{l.current?.destroy(),l.current=void 0}},[t,s,e]),(0,$.useEffect)(()=>{t||!e.current||!l.current||l.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),c}var Py=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function pu(){let e=xe();return(0,$.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:u,nodeOrigin:l}=e.getState(),d=new Map,f=Py(a),p=r?i[0]:5,y=r?i[1]:5,b=n.direction.x*p*n.factor,h=n.direction.y*y*n.factor;for(let[,g]of u){if(!f(g))continue;let v={x:g.internals.positionAbsolute.x+b,y:g.internals.positionAbsolute.y+h};r&&(v=qn(v,i));let{position:m,positionAbsolute:x}=aa({nodeId:g.id,nextPosition:v,nodeLookup:u,nodeExtent:o,nodeOrigin:l,onError:s});g.position=m,g.internals.positionAbsolute=x,d.set(g.id,g)}c(d)},[])}var _a=(0,$.createContext)(null),zy=_a.Provider;_a.Consumer;var mu=()=>(0,$.useContext)(_a),Ry=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),gu=(0,$.createContext)(null);function Dy({children:e}){let t=me(Ry,Se);return(0,H.jsx)(gu.Provider,{value:t,children:e})}function Ty(){let e=(0,$.useContext)(gu);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var Ay={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Oy=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:c,isValid:u}=a;if(!s&&!r)return Ay;let l=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:l,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===qt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:l&&u}};function Ly({type:e="source",position:t=te.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:u,onMouseDown:l,onTouchStart:d,...f},p){let y=a||null,b=e==="target",h=xe(),g=mu(),{connectOnClick:v,noPanClassName:m,rfId:x}=Ty(),{connectingFrom:S,connectingTo:C,clickConnecting:k,isPossibleEndHandle:M,connectionInProcess:I,clickConnectionInProcess:L,valid:R}=me(Oy(g,y,e),Se);g||h.getState().onError?.("010",Je.error010());let T=_=>{let{defaultEdgeOptions:N,onConnect:E,hasDefaultEdges:z}=h.getState(),D={...N,..._};if(z){let{edges:F,setEdges:W,onError:V}=h.getState();W(gy(D,F,{onError:V}))}E?.(D),s?.(D)},P=_=>{if(!g)return;let N=ga(_.nativeEvent);if(r&&(N&&_.button===0||!N)){let E=h.getState();wr.onPointerDown(_.nativeEvent,{handleDomNode:_.currentTarget,autoPanOnConnect:E.autoPanOnConnect,connectionMode:E.connectionMode,connectionRadius:E.connectionRadius,domNode:E.domNode,nodeLookup:E.nodeLookup,lib:E.lib,isTarget:b,handleId:y,nodeId:g,flowId:E.rfId,panBy:E.panBy,cancelConnection:E.cancelConnection,onConnectStart:E.onConnectStart,onConnectEnd:(...z)=>h.getState().onConnectEnd?.(...z),updateConnection:E.updateConnection,onConnect:T,isValidConnection:n||((...z)=>h.getState().isValidConnection?.(...z)??!0),getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,autoPanSpeed:E.autoPanSpeed,dragThreshold:E.connectionDragThreshold})}N?l?.(_):d?.(_)},w=_=>{let{onClickConnectStart:N,onClickConnectEnd:E,connectionClickStartHandle:z,connectionMode:D,isValidConnection:F,lib:W,rfId:V,nodeLookup:Q,connection:X}=h.getState();if(!g||!z&&!r)return;if(!z){N?.(_.nativeEvent,{nodeId:g,handleId:y,handleType:e}),h.setState({connectionClickStartHandle:{nodeId:g,type:e,id:y}});return}let K=pa(_.target),le=n||F,{connection:B,isValid:O}=wr.isValid(_.nativeEvent,{handle:{nodeId:g,id:y,type:e},connectionMode:D,fromNodeId:z.nodeId,fromHandleId:z.id||null,fromType:z.type,isValidConnection:le,flowId:V,doc:K,lib:W,nodeLookup:Q});O&&B&&T(B);let U=structuredClone(X);delete U.inProgress,U.toPosition=U.toHandle?U.toHandle.position:null,E?.(_,U),h.setState({connectionClickStartHandle:null})};return(0,H.jsx)("div",{"data-handleid":y,"data-nodeid":g,"data-handlepos":t,"data-id":`${x}-${g}-${y}-${e}`,className:Ne(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!b,target:b,connectable:o,connectablestart:r,connectableend:i,clickconnecting:k,connectingfrom:S,connectingto:C,valid:R,connectionindicator:o&&(!I||M)&&(I||L?i:r)}]),onMouseDown:P,onTouchStart:P,onClick:v?w:void 0,ref:p,...f,children:c})}var wn=(0,$.memo)(cu(Ly));function $y({data:e,isConnectable:t,sourcePosition:n=te.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[e?.label,(0,H.jsx)(wn,{type:"source",position:n,isConnectable:t})]})}function Hy({data:e,isConnectable:t,targetPosition:n=te.Top,sourcePosition:o=te.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label,(0,H.jsx)(wn,{type:"source",position:o,isConnectable:t})]})}function By(){return null}function Wy({data:e,isConnectable:t,targetPosition:n=te.Top}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label]})}var Er={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Vc={input:$y,default:Hy,output:Wy,group:By};function Fy(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Vy=e=>{let{width:t,height:n,x:o,y:r}=Vn(e.nodeLookup,{filter:i=>!!i.selected});return{width:tt(t)?t:null,height:tt(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function Xy({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=xe(),{width:r,height:i,transformString:a,userSelectionActive:s}=me(Vy,Se),c=pu(),u=(0,$.useRef)(null);(0,$.useEffect)(()=>{n||u.current?.focus({preventScroll:!0})},[n]);let l=!s&&r!==null&&i!==null;if(fu({nodeRef:u,disabled:!l}),!l)return null;let d=e?p=>{let y=o.getState().nodes.filter(b=>b.selected);e(p,y)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(Er,p.key)&&(p.preventDefault(),c({direction:Er[p.key],factor:p.shiftKey?4:1}))};return(0,H.jsx)("div",{className:Ne(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,H.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var Xc=typeof window<"u"?window:void 0,qy=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function hu({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:u,selectionOnDrag:l,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:y,panActivationKeyCode:b,zoomActivationKeyCode:h,elementsSelectable:g,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:M,autoPanOnSelection:I,defaultViewport:L,translateExtent:R,minZoom:T,maxZoom:P,preventScrolling:w,onSelectionContextMenu:_,noWheelClassName:N,noPanClassName:E,disableKeyboardA11y:z,onViewportChange:D,isControlledViewport:F}){let{nodesSelectionActive:W,userSelectionActive:V}=me(qy,Se),Q=yo(u,{target:Xc}),X=yo(b,{target:Xc}),K=X||M,le=X||x,B=l&&K!==!0,O=Q||V||B;return ky({deleteKeyCode:c,multiSelectionKeyCode:y}),(0,H.jsx)(Ey,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:le,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:!Q&&K,defaultViewport:L,translateExtent:R,minZoom:T,maxZoom:P,zoomActivationKeyCode:h,preventScrolling:w,noWheelClassName:N,noPanClassName:E,onViewportChange:D,isControlledViewport:F,paneClickDistance:s,selectionOnDrag:B,children:(0,H.jsxs)(Iy,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:K,autoPanOnSelection:I,isSelecting:!!O,selectionMode:d,selectionKeyPressed:Q,paneClickDistance:s,selectionOnDrag:B,children:[e,W&&(0,H.jsx)(Xy,{onSelectionContextMenu:_,noPanClassName:E,disableKeyboardA11y:z})]})})}hu.displayName="FlowRenderer";var Gy=(0,$.memo)(hu),Yy=e=>t=>e?cr(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function Uy(e){return me((0,$.useCallback)(Yy(e),[e]),Se)}var Zy=e=>e.updateNodeInternals;function Ky(){let e=me(Zy),[t]=(0,$.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,$.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function jy({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=xe(),i=(0,$.useRef)(null),a=(0,$.useRef)(null),s=(0,$.useRef)(e.sourcePosition),c=(0,$.useRef)(e.targetPosition),u=(0,$.useRef)(t),l=n&&!!e.internals.handleBounds;return(0,$.useEffect)(()=>{i.current&&!e.hidden&&(!l||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[l,e.hidden]),(0,$.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,$.useEffect)(()=>{if(i.current){let d=u.current!==t,f=s.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(u.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function Qy({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:u,nodesFocusable:l,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:y,rfId:b,nodeTypes:h,nodeClickDistance:g,onError:v}){let{node:m,internals:x,isParent:S}=me(O=>{let U=O.nodeLookup.get(e),ne=O.parentLookup.has(e);return{node:U,internals:U.internals,isParent:ne}},Se),C=m.type||"default",k=h?.[C]||Vc[C];k===void 0&&(v?.("003",Je.error003(C)),C="default",k=h?.default||Vc.default);let M=!!(m.draggable||s&&typeof m.draggable>"u"),I=!!(m.selectable||c&&typeof m.selectable>"u"),L=!!(m.connectable||u&&typeof m.connectable>"u"),R=!!(m.focusable||l&&typeof m.focusable>"u"),T=xe(),P=ua(m),w=jy({node:m,nodeType:C,hasDimensions:P,resizeObserver:d}),_=fu({nodeRef:w,disabled:m.hidden||!M,noDragClassName:f,handleSelector:m.dragHandle,nodeId:e,isSelectable:I,nodeClickDistance:g}),N=pu();if(m.hidden)return null;let E=dt(m),z=Fy(m),D=I||M||t||n||o||r,F=n?O=>n(O,{...x.userNode}):void 0,W=o?O=>o(O,{...x.userNode}):void 0,V=r?O=>r(O,{...x.userNode}):void 0,Q=i?O=>i(O,{...x.userNode}):void 0,X=a?O=>a(O,{...x.userNode}):void 0,K=O=>{let{selectNodesOnDrag:U,nodeDragThreshold:ne}=T.getState();I&&(!U||!M||ne>0)&&Ma({id:e,store:T,nodeRef:w}),t&&t(O,{...x.userNode})},le=O=>{if(!(ma(O.nativeEvent)||y)){if(Ji.includes(O.key)&&I){let U=O.key==="Escape";Ma({id:e,store:T,unselect:U,nodeRef:w})}else if(M&&m.selected&&Object.prototype.hasOwnProperty.call(Er,O.key)){O.preventDefault();let{ariaLabelConfig:U}=T.getState();T.setState({ariaLiveMessage:U["node.a11yDescription.ariaLiveMessage"]({direction:O.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),N({direction:Er[O.key],factor:O.shiftKey?4:1})}}},B=()=>{if(y||!w.current?.matches(":focus-visible"))return;let{transform:O,width:U,height:ne,autoPanOnNodeFocus:oe,setCenter:J}=T.getState();if(!oe)return;cr(new Map([[e,m]]),{x:0,y:0,width:U,height:ne},O,!0).length>0||J(m.position.x+E.width/2,m.position.y+E.height/2,{zoom:O[2]})};return(0,H.jsx)("div",{className:Ne(["react-flow__node",`react-flow__node-${C}`,{[p]:M},m.className,{selected:m.selected,selectable:I,parent:S,draggable:M,dragging:_}]),ref:w,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:P?"visible":"hidden",...m.style,...z},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:F,onMouseMove:W,onMouseLeave:V,onContextMenu:Q,onClick:K,onDoubleClick:X,onKeyDown:R?le:void 0,tabIndex:R?0:void 0,onFocus:R?B:void 0,role:m.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":y?void 0:`${ou}-${b}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,H.jsx)(zy,{value:e,children:(0,H.jsx)(k,{id:e,data:m.data,type:C,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:I,draggable:M,deletable:m.deletable??!0,isConnectable:L,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:_,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...E})})})}var Jy=(0,$.memo)(Qy),ex=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function bu(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=me(ex,Se),i=Uy(e.onlyRenderVisibleElements),a=Ky();return(0,H.jsx)("div",{className:"react-flow__nodes",style:_r,children:i.map(s=>(0,H.jsx)(Jy,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}bu.displayName="NodeRenderer";var tx=(0,$.memo)(bu);function nx(e){return me((0,$.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&Ul({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),Se)}var ox=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,H.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},rx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,H.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},qc={[Bn.Arrow]:ox,[Bn.ArrowClosed]:rx};function ix(e){let t=xe();return(0,$.useMemo)(()=>Object.prototype.hasOwnProperty.call(qc,e)?qc[e]:(t.getState().onError?.("009",Je.error009(e)),null),[e])}var ax=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=ix(t);return c?(0,H.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,H.jsx)(c,{color:n,strokeWidth:a})}):null},yu=({defaultColor:e,rfId:t})=>{let n=me(i=>i.edges),o=me(i=>i.defaultEdgeOptions),r=(0,$.useMemo)(()=>jl(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,H.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,H.jsx)("defs",{children:r.map(i=>(0,H.jsx)(ax,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};yu.displayName="MarkerDefinitions";var sx=(0,$.memo)(yu);function xu({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:u,...l}){let[d,f]=(0,$.useState)({x:1,y:0,width:0,height:0}),p=Ne(["react-flow__edge-textwrapper",u]),y=(0,$.useRef)(null);return(0,$.useEffect)(()=>{if(y.current){let b=y.current.getBBox();f({x:b.x,y:b.y,width:b.width,height:b.height})}},[n]),n?(0,H.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...l,children:[r&&(0,H.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,H.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:y,style:o,children:n}),c]}):null}xu.displayName="EdgeText";var lx=(0,$.memo)(xu);function Ir({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:u=20,...l}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("path",{...l,d:e,fill:"none",className:Ne(["react-flow__edge-path",l.className])}),u?(0,H.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&tt(t)&&tt(n)?(0,H.jsx)(lx,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function Gc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===te.Left||e===te.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function wu({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top}){let[a,s]=Gc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,u]=Gc({pos:i,x1:o,y1:r,x2:e,y2:t}),[l,d,f,p]=mr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:u});return[`M${e},${t} C${a},${s} ${c},${u} ${o},${r}`,l,d,f,p]}function vu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:y,markerEnd:b,markerStart:h,interactionWidth:g})=>{let[v,m,x]=wu({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),S=e.isInternal?void 0:t;return(0,H.jsx)(Ir,{id:S,path:v,labelX:m,labelY:x,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:y,markerEnd:b,markerStart:h,interactionWidth:g})})}var cx=vu({isInternal:!1}),ku=vu({isInternal:!0});cx.displayName="SimpleBezierEdge";ku.displayName="SimpleBezierEdgeInternal";function Su(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,sourcePosition:p=te.Bottom,targetPosition:y=te.Top,markerEnd:b,markerStart:h,pathOptions:g,interactionWidth:v})=>{let[m,x,S]=bo({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:y,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),C=e.isInternal?void 0:t;return(0,H.jsx)(Ir,{id:C,path:m,labelX:x,labelY:S,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:b,markerStart:h,interactionWidth:v})})}var Cu=Su({isInternal:!1}),Eu=Su({isInternal:!0});Cu.displayName="SmoothStepEdge";Eu.displayName="SmoothStepEdgeInternal";function Mu(e){return(0,$.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,H.jsx)(Cu,{...n,id:o,pathOptions:(0,$.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var ux=Mu({isInternal:!1}),Nu=Mu({isInternal:!0});ux.displayName="StepEdge";Nu.displayName="StepEdgeInternal";function _u(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:y,interactionWidth:b})=>{let[h,g,v]=hr({sourceX:n,sourceY:o,targetX:r,targetY:i}),m=e.isInternal?void 0:t;return(0,H.jsx)(Ir,{id:m,path:h,labelX:g,labelY:v,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:y,interactionWidth:b})})}var dx=_u({isInternal:!1}),Iu=_u({isInternal:!0});dx.displayName="StraightEdge";Iu.displayName="StraightEdgeInternal";function Pu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=te.Bottom,targetPosition:s=te.Top,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:y,markerEnd:b,markerStart:h,pathOptions:g,interactionWidth:v})=>{let[m,x,S]=gr({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:g?.curvature}),C=e.isInternal?void 0:t;return(0,H.jsx)(Ir,{id:C,path:m,labelX:x,labelY:S,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:y,markerEnd:b,markerStart:h,interactionWidth:v})})}var fx=Pu({isInternal:!1}),zu=Pu({isInternal:!0});fx.displayName="BezierEdge";zu.displayName="BezierEdgeInternal";var Yc={default:zu,straight:Iu,step:Nu,smoothstep:Eu,simplebezier:ku},Uc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},px=(e,t,n)=>n===te.Left?e-t:n===te.Right?e+t:e,mx=(e,t,n)=>n===te.Top?e-t:n===te.Bottom?e+t:e,Zc="react-flow__edgeupdater";function Kc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,H.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:Ne([Zc,`${Zc}-${s}`]),cx:px(t,o,e),cy:mx(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function gx({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:u,onReconnectStart:l,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let y=xe(),b=(x,S)=>{if(x.button!==0)return;let{autoPanOnConnect:C,domNode:k,connectionMode:M,connectionRadius:I,lib:L,onConnectStart:R,cancelConnection:T,nodeLookup:P,rfId:w,panBy:_,updateConnection:N}=y.getState(),E=S.type==="target",z=(W,V)=>{f(!1),d?.(W,n,S.type,V)},D=W=>u?.(n,W),F=(W,V)=>{f(!0),l?.(x,n,S.type),R?.(W,V)};wr.onPointerDown(x.nativeEvent,{autoPanOnConnect:C,connectionMode:M,connectionRadius:I,domNode:k,handleId:S.id,nodeId:S.nodeId,nodeLookup:P,isTarget:E,edgeUpdaterType:S.type,lib:L,flowId:w,cancelConnection:T,panBy:_,isValidConnection:(...W)=>y.getState().isValidConnection?.(...W)??!0,onConnect:D,onConnectStart:F,onConnectEnd:(...W)=>y.getState().onConnectEnd?.(...W),onReconnectEnd:z,updateConnection:N,getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,dragThreshold:y.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},h=x=>b(x,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=x=>b(x,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),m=()=>p(!1);return(0,H.jsxs)(H.Fragment,{children:[(e===!0||e==="source")&&(0,H.jsx)(Kc,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:h,onMouseEnter:v,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,H.jsx)(Kc,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:g,onMouseEnter:v,onMouseOut:m,type:"target"})]})}function hx({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:y,edgeTypes:b,noPanClassName:h,onError:g,disableKeyboardA11y:v}){let m=me(J=>J.edgeLookup.get(e)),x=me(J=>J.defaultEdgeOptions);m=x?{...x,...m}:m;let S=m.type||"default",C=b?.[S]||Yc[S];C===void 0&&(g?.("011",Je.error011(S)),S="default",C=b?.default||Yc.default);let k=!!(m.focusable||t&&typeof m.focusable>"u"),M=typeof d<"u"&&(m.reconnectable||n&&typeof m.reconnectable>"u"),I=!!(m.selectable||o&&typeof m.selectable>"u"),L=(0,$.useRef)(null),[R,T]=(0,$.useState)(!1),[P,w]=(0,$.useState)(!1),_=xe(),{zIndex:N=m.zIndex,sourceX:E,sourceY:z,targetX:D,targetY:F,sourcePosition:W,targetPosition:V}=me((0,$.useCallback)(J=>{let Y=J.nodeLookup.get(m.source),ce=J.nodeLookup.get(m.target);if(!Y||!ce)return Uc;let G=Kl({id:e,sourceNode:Y,targetNode:ce,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:J.connectionMode,onError:g}),re=Yl({selected:m.selected,zIndex:m.zIndex,sourceNode:Y,targetNode:ce,elevateOnSelect:J.elevateEdgesOnSelect,zIndexMode:J.zIndexMode});return{...G||Uc,zIndex:re}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex]),Se),Q=(0,$.useMemo)(()=>m.markerStart?`url('#${br(m.markerStart,y)}')`:void 0,[m.markerStart,y]),X=(0,$.useMemo)(()=>m.markerEnd?`url('#${br(m.markerEnd,y)}')`:void 0,[m.markerEnd,y]);if(m.hidden||E===null||z===null||D===null||F===null)return null;let K=J=>{let{addSelectedEdges:Y,unselectNodesAndEdges:ce,multiSelectionActive:G}=_.getState();I&&(_.setState({nodesSelectionActive:!1}),m.selected&&G?(ce({nodes:[],edges:[m]}),L.current?.blur()):Y([e])),r&&r(J,m)},le=i?J=>{i(J,{...m})}:void 0,B=a?J=>{a(J,{...m})}:void 0,O=s?J=>{s(J,{...m})}:void 0,U=c?J=>{c(J,{...m})}:void 0,ne=u?J=>{u(J,{...m})}:void 0,oe=J=>{if(!v&&Ji.includes(J.key)&&I){let{unselectNodesAndEdges:Y,addSelectedEdges:ce}=_.getState();J.key==="Escape"?(L.current?.blur(),Y({edges:[m]})):ce([e])}};return(0,H.jsx)("svg",{style:{zIndex:N},children:(0,H.jsxs)("g",{className:Ne(["react-flow__edge",`react-flow__edge-${S}`,m.className,h,{selected:m.selected,animated:m.animated,inactive:!I&&!r,updating:R,selectable:I}]),onClick:K,onDoubleClick:le,onContextMenu:B,onMouseEnter:O,onMouseMove:U,onMouseLeave:ne,onKeyDown:k?oe:void 0,tabIndex:k?0:void 0,role:m.ariaRole??(k?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":k?`${ru}-${y}`:void 0,ref:L,...m.domAttributes,children:[!P&&(0,H.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:I,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:E,sourceY:z,targetX:D,targetY:F,sourcePosition:W,targetPosition:V,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Q,markerEnd:X,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),M&&(0,H.jsx)(gx,{edge:m,isReconnectable:M,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:E,sourceY:z,targetX:D,targetY:F,sourcePosition:W,targetPosition:V,setUpdateHover:T,setReconnecting:w})]})})}var bx=(0,$.memo)(hx),yx=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Ru({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:u,onEdgeClick:l,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:y,disableKeyboardA11y:b}){let{edgesFocusable:h,edgesReconnectable:g,elementsSelectable:v,onError:m}=me(yx,Se),x=nx(t);return(0,H.jsxs)("div",{className:"react-flow__edges",children:[(0,H.jsx)(sx,{defaultColor:e,rfId:n}),x.map(S=>(0,H.jsx)(bx,{id:S,edgesFocusable:h,edgesReconnectable:g,elementsSelectable:v,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,onClick:l,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:y,rfId:n,onError:m,edgeTypes:o,disableKeyboardA11y:b},S))]})}Ru.displayName="EdgeRenderer";var xx=(0,$.memo)(Ru),jc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function wx({children:e}){let t=xe(),n=(0,$.useRef)(null),[o]=(0,$.useState)(()=>t.getState().transform);return uu(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=jc(a)))};return i(),t.subscribe(i)},[t]),(0,H.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:jc(o)},children:e})}function vx(e){let t=Na(),n=(0,$.useRef)(!1);(0,$.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var kx=e=>e.panZoom?.syncViewport;function Sx(e){let t=me(kx),n=xe();return(0,$.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Qc(e){return e.connection.inProgress?{...e.connection,to:Gn(e.connection.to,e.transform)}:{...e.connection}}function Cx(e){return e?n=>{let o=Qc(n);return e(o)}:Qc}function Ex(e){let t=Cx(e);return me(t,Se)}var Mx=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Nx({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:c}=me(Mx,Se);return!(i&&r&&c)?null:(0,H.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,H.jsx)("g",{className:Ne(["react-flow__connection",na(s)]),children:(0,H.jsx)(Du,{style:t,type:n,CustomComponent:o,isValid:s})})})}var Du=({style:e,type:t=ht.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:u,toNode:l,toHandle:d,toPosition:f,pointer:p}=Ex();if(!r)return;if(n)return(0,H.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:u.x,toY:u.y,fromPosition:c,toPosition:f,connectionStatus:na(o),toNode:l,toHandle:d,pointer:p});let y="",b={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:u.x,targetY:u.y,targetPosition:f};switch(t){case ht.Bezier:[y]=gr(b);break;case ht.SimpleBezier:[y]=wu(b);break;case ht.Step:[y]=bo({...b,borderRadius:0});break;case ht.SmoothStep:[y]=bo(b);break;default:[y]=hr(b)}return(0,H.jsx)("path",{d:y,fill:"none",className:"react-flow__connection-path",style:e})};Du.displayName="ConnectionLine";var _x={};function Jc(e=_x){let t=(0,$.useRef)(e),n=xe();(0,$.useEffect)(()=>{},[e])}function Ix(){let e=xe(),t=(0,$.useRef)(!1);(0,$.useEffect)(()=>{},[])}function Tu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:y,connectionLineStyle:b,connectionLineComponent:h,connectionLineContainerStyle:g,selectionKeyCode:v,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:k,deleteKeyCode:M,onlyRenderVisibleElements:I,elementsSelectable:L,defaultViewport:R,translateExtent:T,minZoom:P,maxZoom:w,preventScrolling:_,defaultMarkerColor:N,zoomOnScroll:E,zoomOnPinch:z,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:W,zoomOnDoubleClick:V,panOnDrag:Q,autoPanOnSelection:X,onPaneClick:K,onPaneMouseEnter:le,onPaneMouseMove:B,onPaneMouseLeave:O,onPaneScroll:U,onPaneContextMenu:ne,paneClickDistance:oe,nodeClickDistance:J,onEdgeContextMenu:Y,onEdgeMouseEnter:ce,onEdgeMouseMove:G,onEdgeMouseLeave:re,reconnectRadius:fe,onReconnect:Ce,onReconnectStart:Te,onReconnectEnd:Ke,noDragClassName:it,noWheelClassName:nn,noPanClassName:Mt,disableKeyboardA11y:Nt,nodeExtent:je,rfId:Xe,viewport:at,onViewportChange:st,nodesDraggable:Mn}){return Jc(e),Jc(t),Ix(),vx(n),Sx(at),(0,H.jsx)(Gy,{onPaneClick:K,onPaneMouseEnter:le,onPaneMouseMove:B,onPaneMouseLeave:O,onPaneContextMenu:ne,onPaneScroll:U,paneClickDistance:oe,deleteKeyCode:M,selectionKeyCode:v,selectionOnDrag:m,selectionMode:x,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:k,elementsSelectable:L,zoomOnScroll:E,zoomOnPinch:z,zoomOnDoubleClick:V,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:W,panOnDrag:Q,autoPanOnSelection:X,defaultViewport:R,translateExtent:T,minZoom:P,maxZoom:w,onSelectionContextMenu:d,preventScrolling:_,noDragClassName:it,noWheelClassName:nn,noPanClassName:Mt,disableKeyboardA11y:Nt,onViewportChange:st,isControlledViewport:!!at,children:(0,H.jsxs)(wx,{children:[(0,H.jsx)(xx,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:Ce,onReconnectStart:Te,onReconnectEnd:Ke,onlyRenderVisibleElements:I,onEdgeContextMenu:Y,onEdgeMouseEnter:ce,onEdgeMouseMove:G,onEdgeMouseLeave:re,reconnectRadius:fe,defaultMarkerColor:N,noPanClassName:Mt,disableKeyboardA11y:Nt,rfId:Xe}),(0,H.jsx)(Nx,{style:b,type:y,component:h,containerStyle:g}),(0,H.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,H.jsx)(tx,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,nodeClickDistance:J,onlyRenderVisibleElements:I,noPanClassName:Mt,noDragClassName:it,disableKeyboardA11y:Nt,nodeExtent:je,rfId:Xe,nodesDraggable:Mn}),(0,H.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Tu.displayName="GraphView";var Px=(0,$.memo)(Tu),zx=ca("React Flow","https://reactflow.dev/"),eu=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:u=2,nodeOrigin:l,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,y=new Map,b=new Map,h=new Map,g=o??t??[],v=n??e??[],m=l??[0,0],x=d??Fn;va(b,h,g);let{nodesInitialized:S}=yr(v,p,y,{nodeOrigin:m,nodeExtent:x,zIndexMode:f}),C=[0,0,1];if(a&&r&&i){let k=Vn(p,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:M,y:I,zoom:L}=ho(k,r,i,c,u,s?.padding??.1);C=[M,I,L]}return{rfId:"1",width:r??0,height:i??0,transform:C,nodes:v,nodesInitialized:S,nodeLookup:p,parentLookup:y,edges:g,edgeLookup:h,connectionLookup:b,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:u,translateExtent:Fn,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:qt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...ta},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:zx,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:ea,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},Rx=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f})=>Ic((p,y)=>{async function b(){let{nodeLookup:h,panZoom:g,fitViewOptions:v,fitViewResolver:m,width:x,height:S,minZoom:C,maxZoom:k}=y();g&&(await Wl({nodes:h,width:x,height:S,panZoom:g,minZoom:C,maxZoom:k},v),m?.resolve(!0),p({fitViewResolver:null}))}return{...eu({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:h=>{let{nodeLookup:g,parentLookup:v,nodeOrigin:m,elevateNodesOnSelect:x,fitViewQueued:S,zIndexMode:C,nodesSelectionActive:k}=y(),{nodesInitialized:M,hasSelectedNodes:I}=yr(h,g,v,{nodeOrigin:m,nodeExtent:d,elevateNodesOnSelect:x,checkEquality:!0,zIndexMode:C}),L=k&&I;S&&M?(b(),p({nodes:h,nodesInitialized:M,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:L})):p({nodes:h,nodesInitialized:M,nodesSelectionActive:L})},setEdges:h=>{let{connectionLookup:g,edgeLookup:v}=y();va(g,v,h),p({edges:h})},setDefaultNodesAndEdges:(h,g)=>{if(h){let{setNodes:v}=y();v(h),p({hasDefaultNodes:!0})}if(g){let{setEdges:v}=y();v(g),p({hasDefaultEdges:!0})}},updateNodeInternals:h=>{let{triggerNodeChanges:g,nodeLookup:v,parentLookup:m,domNode:x,nodeOrigin:S,nodeExtent:C,debug:k,fitViewQueued:M,zIndexMode:I}=y(),{changes:L,updatedInternals:R}=tc(h,v,m,x,S,C,I);R&&(Jl(v,m,{nodeOrigin:S,nodeExtent:C,zIndexMode:I}),M?(b(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),L?.length>0&&(k&&console.log("React Flow: trigger node changes",L),g?.(L)))},updateNodePositions:(h,g=!1)=>{let v=[],m=[],{nodeLookup:x,triggerNodeChanges:S,connection:C,updateConnection:k,onNodesChangeMiddlewareMap:M}=y();for(let[I,L]of h){let R=x.get(I),T=!!(R?.expandParent&&R?.parentId&&L?.position),P={id:I,type:"position",position:T?{x:Math.max(0,L.position.x),y:Math.max(0,L.position.y)}:L.position,dragging:g};if(R&&C.inProgress&&C.fromNode.id===R.id){let w=Gt(R,C.fromHandle,te.Left,!0);k({...C,from:w})}T&&R.parentId&&v.push({id:I,parentId:R.parentId,rect:{...L.internals.positionAbsolute,width:L.measured.width??0,height:L.measured.height??0}}),m.push(P)}if(v.length>0){let{parentLookup:I,nodeOrigin:L}=y(),R=xr(v,x,I,L);m.push(...R)}for(let I of M.values())m=I(m);S(m)},triggerNodeChanges:h=>{let{onNodesChange:g,setNodes:v,nodes:m,hasDefaultNodes:x,debug:S}=y();if(h?.length){if(x){let C=su(h,m);v(C)}S&&console.log("React Flow: trigger node changes",h),g?.(h)}},triggerEdgeChanges:h=>{let{onEdgesChange:g,setEdges:v,edges:m,hasDefaultEdges:x,debug:S}=y();if(h?.length){if(x){let C=lu(h,m);v(C)}S&&console.log("React Flow: trigger edge changes",h),g?.(h)}},addSelectedNodes:h=>{let{multiSelectionActive:g,edgeLookup:v,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=y();if(g){let C=h.map(k=>xn(k,!0));x(C);return}x(Zn(m,new Set([...h]),!0)),S(Zn(v))},addSelectedEdges:h=>{let{multiSelectionActive:g,edgeLookup:v,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=y();if(g){let C=h.map(k=>xn(k,!0));S(C);return}S(Zn(v,new Set([...h]))),x(Zn(m,new Set,!0))},unselectNodesAndEdges:({nodes:h,edges:g}={})=>{let{edges:v,nodes:m,nodeLookup:x,triggerNodeChanges:S,triggerEdgeChanges:C}=y(),k=h||m,M=g||v,I=[];for(let R of k){if(!R.selected)continue;let T=x.get(R.id);T&&(T.selected=!1),I.push(xn(R.id,!1))}let L=[];for(let R of M)R.selected&&L.push(xn(R.id,!1));S(I),C(L)},setMinZoom:h=>{let{panZoom:g,maxZoom:v}=y();g?.setScaleExtent([h,v]),p({minZoom:h})},setMaxZoom:h=>{let{panZoom:g,minZoom:v}=y();g?.setScaleExtent([v,h]),p({maxZoom:h})},setTranslateExtent:h=>{y().panZoom?.setTranslateExtent(h),p({translateExtent:h})},resetSelectedElements:()=>{let{edges:h,nodes:g,triggerNodeChanges:v,triggerEdgeChanges:m,elementsSelectable:x}=y();if(!x)return;let S=g.reduce((k,M)=>M.selected?[...k,xn(M.id,!1)]:k,[]),C=h.reduce((k,M)=>M.selected?[...k,xn(M.id,!1)]:k,[]);v(S),m(C)},setNodeExtent:h=>{let{nodes:g,nodeLookup:v,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:k}=y();h[0][0]===C[0][0]&&h[0][1]===C[0][1]&&h[1][0]===C[1][0]&&h[1][1]===C[1][1]||(yr(g,v,m,{nodeOrigin:x,nodeExtent:h,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:k}),p({nodeExtent:h}))},panBy:h=>{let{transform:g,width:v,height:m,panZoom:x,translateExtent:S}=y();return nc({delta:h,panZoom:x,transform:g,translateExtent:S,width:v,height:m})},setCenter:async(h,g,v)=>{let{width:m,height:x,maxZoom:S,panZoom:C}=y();if(!C)return!1;let k=typeof v?.zoom<"u"?v.zoom:S;return await C.setViewport({x:m/2-h*k,y:x/2-g*k,zoom:k},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...ta}})},updateConnection:h=>{p({connection:h})},reset:()=>p({...eu()})}},Object.is);function Dx({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f,children:p}){let[y]=(0,$.useState)(()=>Rx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:u,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:l,nodeExtent:d,zIndexMode:f}));return(0,H.jsx)(U0,{value:y,children:(0,H.jsx)(yy,{children:(0,H.jsx)(Dy,{children:p})})})}function Tx({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:u,maxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,$.useContext)(Mr)?(0,H.jsx)(H.Fragment,{children:e}):(0,H.jsx)(Dx,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:u,initialMaxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var Ax={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function Ox({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:u,onMove:l,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:y,onConnectEnd:b,onClickConnectStart:h,onClickConnectEnd:g,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:k,onNodeDrag:M,onNodeDragStop:I,onNodesDelete:L,onEdgesDelete:R,onDelete:T,onSelectionChange:P,onSelectionDragStart:w,onSelectionDrag:_,onSelectionDragStop:N,onSelectionContextMenu:E,onSelectionStart:z,onSelectionEnd:D,onBeforeDelete:F,connectionMode:W,connectionLineType:V=ht.Bezier,connectionLineStyle:Q,connectionLineComponent:X,connectionLineContainerStyle:K,deleteKeyCode:le="Backspace",selectionKeyCode:B="Shift",selectionOnDrag:O=!1,selectionMode:U=gn.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:oe=Yn()?"Meta":"Control",zoomActivationKeyCode:J=Yn()?"Meta":"Control",snapToGrid:Y,snapGrid:ce,onlyRenderVisibleElements:G=!1,selectNodesOnDrag:re,nodesDraggable:fe,autoPanOnNodeFocus:Ce,nodesConnectable:Te,nodesFocusable:Ke,nodeOrigin:it=iu,edgesFocusable:nn,edgesReconnectable:Mt,elementsSelectable:Nt=!0,defaultViewport:je=sy,minZoom:Xe=.5,maxZoom:at=2,translateExtent:st=Fn,preventScrolling:Mn=!0,nodeExtent:on,defaultMarkerColor:No="#b1b1b7",zoomOnScroll:Bt=!0,zoomOnPinch:Nn=!0,panOnScroll:$e=!1,panOnScrollSpeed:_o=.5,panOnScrollMode:Io=Ot.Free,zoomOnDoubleClick:Po=!0,panOnDrag:Jr=!0,onPaneClick:ei,onPaneMouseEnter:ti,onPaneMouseMove:ni,onPaneMouseLeave:oi,onPaneScroll:ri,onPaneContextMenu:ii,paneClickDistance:ai=1,nodeClickDistance:si=0,children:rn,onReconnect:_t,onReconnectStart:zo,onReconnectEnd:It,onEdgeContextMenu:Pt,onEdgeDoubleClick:li,onEdgeMouseEnter:Ro,onEdgeMouseMove:_n,onEdgeMouseLeave:Do,reconnectRadius:ci=10,onNodesChange:ui,onEdgesChange:A,noDragClassName:q="nodrag",noWheelClassName:j="nowheel",noPanClassName:se="nopan",fitView:ke,fitViewOptions:Wt,connectOnClick:an,attributionPosition:Tp,proOptions:Ap,defaultEdgeOptions:Op,elevateNodesOnSelect:Lp=!0,elevateEdgesOnSelect:$p=!1,disableKeyboardA11y:ps=!1,autoPanOnConnect:Hp,autoPanOnNodeDrag:Bp,autoPanOnSelection:Wp=!0,autoPanSpeed:Fp,connectionRadius:Vp,isValidConnection:Xp,onError:qp,style:Gp,id:ms,nodeDragThreshold:Yp,connectionDragThreshold:Up,viewport:Zp,onViewportChange:Kp,width:jp,height:Qp,colorMode:Jp="light",debug:em,onScroll:gs,ariaLabelConfig:tm,zIndexMode:hs="basic",...nm},om){let di=ms||"1",rm=dy(Jp),im=(0,$.useCallback)(bs=>{bs.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),gs?.(bs)},[gs]);return(0,H.jsx)("div",{"data-testid":"rf__wrapper",...nm,onScroll:im,style:{...Gp,...Ax},ref:om,className:Ne(["react-flow",r,rm]),id:ms,role:"application",children:(0,H.jsxs)(Tx,{nodes:e,edges:t,width:jp,height:Qp,fitView:ke,fitViewOptions:Wt,minZoom:Xe,maxZoom:at,nodeOrigin:it,nodeExtent:on,zIndexMode:hs,children:[(0,H.jsx)(uy,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:y,onConnectEnd:b,onClickConnectStart:h,onClickConnectEnd:g,nodesDraggable:fe,autoPanOnNodeFocus:Ce,nodesConnectable:Te,nodesFocusable:Ke,edgesFocusable:nn,edgesReconnectable:Mt,elementsSelectable:Nt,elevateNodesOnSelect:Lp,elevateEdgesOnSelect:$p,minZoom:Xe,maxZoom:at,nodeExtent:on,onNodesChange:ui,onEdgesChange:A,snapToGrid:Y,snapGrid:ce,connectionMode:W,translateExtent:st,connectOnClick:an,defaultEdgeOptions:Op,fitView:ke,fitViewOptions:Wt,onNodesDelete:L,onEdgesDelete:R,onDelete:T,onNodeDragStart:k,onNodeDrag:M,onNodeDragStop:I,onSelectionDrag:_,onSelectionDragStart:w,onSelectionDragStop:N,onMove:l,onMoveStart:d,onMoveEnd:f,noPanClassName:se,nodeOrigin:it,rfId:di,autoPanOnConnect:Hp,autoPanOnNodeDrag:Bp,autoPanSpeed:Fp,onError:qp,connectionRadius:Vp,isValidConnection:Xp,selectNodesOnDrag:re,nodeDragThreshold:Yp,connectionDragThreshold:Up,onBeforeDelete:F,debug:em,ariaLabelConfig:tm,zIndexMode:hs}),(0,H.jsx)(Px,{onInit:u,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:i,edgeTypes:a,connectionLineType:V,connectionLineStyle:Q,connectionLineComponent:X,connectionLineContainerStyle:K,selectionKeyCode:B,selectionOnDrag:O,selectionMode:U,deleteKeyCode:le,multiSelectionKeyCode:oe,panActivationKeyCode:ne,zoomActivationKeyCode:J,onlyRenderVisibleElements:G,defaultViewport:je,translateExtent:st,minZoom:Xe,maxZoom:at,preventScrolling:Mn,zoomOnScroll:Bt,zoomOnPinch:Nn,zoomOnDoubleClick:Po,panOnScroll:$e,panOnScrollSpeed:_o,panOnScrollMode:Io,panOnDrag:Jr,autoPanOnSelection:Wp,onPaneClick:ei,onPaneMouseEnter:ti,onPaneMouseMove:ni,onPaneMouseLeave:oi,onPaneScroll:ri,onPaneContextMenu:ii,paneClickDistance:ai,nodeClickDistance:si,onSelectionContextMenu:E,onSelectionStart:z,onSelectionEnd:D,onReconnect:_t,onReconnectStart:zo,onReconnectEnd:It,onEdgeContextMenu:Pt,onEdgeDoubleClick:li,onEdgeMouseEnter:Ro,onEdgeMouseMove:_n,onEdgeMouseLeave:Do,reconnectRadius:ci,defaultMarkerColor:No,noDragClassName:q,noWheelClassName:j,noPanClassName:se,rfId:di,disableKeyboardA11y:ps,nodeExtent:on,viewport:Zp,onViewportChange:Kp,nodesDraggable:fe}),(0,H.jsx)(ay,{onSelectionChange:P}),rn,(0,H.jsx)(ty,{proOptions:Ap,position:Tp}),(0,H.jsx)(ey,{rfId:di,disableKeyboardA11y:ps})]})})}var Au=cu(Ox);function Ou(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>su(r,i)),[]);return[t,n,o]}function Lu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>lu(r,i)),[]);return[t,n,o]}var tk=Je.error014();function Lx({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,H.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Ne(["react-flow__background-pattern",n,o])})}function $x({radius:e,className:t}){return(0,H.jsx)("circle",{cx:e,cy:e,r:e,className:Ne(["react-flow__background-pattern","dots",t])})}var bt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(bt||(bt={}));var Hx={[bt.Dots]:1,[bt.Lines]:1,[bt.Cross]:6},Bx=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function $u({id:e,variant:t=bt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:c,className:u,patternClassName:l}){let d=(0,$.useRef)(null),{transform:f,patternId:p}=me(Bx,Se),y=o||Hx[t],b=t===bt.Dots,h=t===bt.Cross,g=Array.isArray(n)?n:[n,n],v=[g[0]*f[2]||1,g[1]*f[2]||1],m=y*f[2],x=Array.isArray(i)?i:[i,i],S=h?[m,m]:v,C=[x[0]*f[2]||1+S[0]/2,x[1]*f[2]||1+S[1]/2],k=`${p}${e||""}`;return(0,H.jsxs)("svg",{className:Ne(["react-flow__background",u]),style:{...c,..._r,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,H.jsx)("pattern",{id:k,x:f[0]%v[0],y:f[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:b?(0,H.jsx)($x,{radius:m/2,className:l}):(0,H.jsx)(Lx,{dimensions:S,lineWidth:r,variant:t,className:l})}),(0,H.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${k})`})]})}$u.displayName="Background";var Hu=(0,$.memo)($u);function Wx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,H.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Fx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,H.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Vx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,H.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Xx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function qx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Cr({children:e,className:t,...n}){return(0,H.jsx)("button",{type:"button",className:Ne(["react-flow__controls-button",t]),...n,children:e})}var Gx=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function Bu({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:u,children:l,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let y=xe(),{isInteractive:b,minZoomReached:h,maxZoomReached:g,ariaLabelConfig:v}=me(Gx,Se),{zoomIn:m,zoomOut:x,fitView:S}=Na(),C=()=>{m(),i?.()},k=()=>{x(),a?.()},M=()=>{S(r),s?.()},I=()=>{y.setState({nodesDraggable:!b,nodesConnectable:!b,elementsSelectable:!b}),c?.(!b)};return(0,H.jsxs)(Nr,{className:Ne(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",u]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Cr,{onClick:C,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:g,children:(0,H.jsx)(Wx,{})}),(0,H.jsx)(Cr,{onClick:k,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:h,children:(0,H.jsx)(Fx,{})})]}),n&&(0,H.jsx)(Cr,{className:"react-flow__controls-fitview",onClick:M,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,H.jsx)(Vx,{})}),o&&(0,H.jsx)(Cr,{className:"react-flow__controls-interactive",onClick:I,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:b?(0,H.jsx)(qx,{}):(0,H.jsx)(Xx,{})}),l]})}Bu.displayName="Controls";var nk=(0,$.memo)(Bu);function Yx({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:c,className:u,borderRadius:l,shapeRendering:d,selected:f,onClick:p}){let{background:y,backgroundColor:b}=i||{},h=a||y||b;return(0,H.jsx)("rect",{className:Ne(["react-flow__minimap-node",{selected:f},u]),x:t,y:n,rx:l,ry:l,width:o,height:r,style:{fill:h,stroke:s,strokeWidth:c},shapeRendering:d,onClick:p?g=>p(g,e):void 0})}var Ux=(0,$.memo)(Yx),Zx=e=>e.nodes.map(t=>t.id),Ea=e=>e instanceof Function?e:()=>e;function Kx({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=Ux,onClick:a}){let s=me(Zx,Se),c=Ea(t),u=Ea(e),l=Ea(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,H.jsx)(H.Fragment,{children:s.map(f=>(0,H.jsx)(Qx,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:u,nodeClassNameFunc:l,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function jx({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:u,x:l,y:d,width:f,height:p}=me(y=>{let b=y.nodeLookup.get(e);if(!b)return{node:void 0,x:0,y:0,width:0,height:0};let h=b.internals.userNode,{x:g,y:v}=b.internals.positionAbsolute,{width:m,height:x}=dt(h);return{node:h,x:g,y:v,width:m,height:x}},Se);return!u||u.hidden||!ua(u)?null:(0,H.jsx)(s,{x:l,y:d,width:f,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:r,strokeColor:n(u),strokeWidth:i,shapeRendering:a,onClick:c,id:u.id})}var Qx=(0,$.memo)(jx),Jx=(0,$.memo)(Kx),ew=200,tw=150,nw=e=>!e.hidden,ow=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?sa(Vn(e.nodeLookup,{filter:nw}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},tu=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,rw=(e,t)=>tu(e.viewBB,t.viewBB)&&tu(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,iw="react-flow__minimap-desc";function Wu({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:u,maskStrokeColor:l,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:y,pannable:b=!1,zoomable:h=!1,ariaLabel:g,inversePan:v,zoomStep:m=1,offsetScale:x=5}){let S=xe(),C=(0,$.useRef)(null),{boundingRect:k,viewBB:M,rfId:I,panZoom:L,translateExtent:R,flowWidth:T,flowHeight:P,ariaLabelConfig:w}=me(ow,rw),_=e?.width??ew,N=e?.height??tw,E=k.width/_,z=k.height/N,D=Math.max(E,z),F=D*_,W=D*N,V=x*D,Q=k.x-(F-k.width)/2-V,X=k.y-(W-k.height)/2-V,K=F+V*2,le=W+V*2,B=`${iw}-${I}`,O=(0,$.useRef)(0),U=(0,$.useRef)();O.current=D,(0,$.useEffect)(()=>{if(C.current&&L)return U.current=cc({domNode:C.current,panZoom:L,getTransform:()=>S.getState().transform,getViewScale:()=>O.current}),()=>{U.current?.destroy()}},[L]),(0,$.useEffect)(()=>{U.current?.update({translateExtent:R,width:T,height:P,inversePan:v,pannable:b,zoomStep:m,zoomable:h})},[b,h,v,m,R,T,P]);let ne=p?Y=>{let[ce,G]=U.current?.pointer(Y)||[0,0];p(Y,{x:ce,y:G})}:void 0,oe=y?(0,$.useCallback)((Y,ce)=>{let G=S.getState().nodeLookup.get(ce).internals.userNode;y(Y,G)},[]):void 0,J=g??w["minimap.ariaLabel"];return(0,H.jsx)(Nr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:Ne(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,H.jsxs)("svg",{width:_,height:N,viewBox:`${Q} ${X} ${K} ${le}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":B,ref:C,onClick:ne,children:[J&&(0,H.jsx)("title",{id:B,children:J}),(0,H.jsx)(Jx,{onClick:oe,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,H.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Q-V},${X-V}h${K+V*2}v${le+V*2}h${-K-V*2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Wu.displayName="MiniMap";var Fu=(0,$.memo)(Wu),aw=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,sw={[Yt.Line]:"right",[Yt.Handle]:"bottom-right"};function lw({nodeId:e,position:t,variant:n=Yt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:u=Number.MAX_VALUE,maxHeight:l=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:y,onResizeStart:b,onResize:h,onResizeEnd:g}){let v=mu(),m=typeof e=="string"?e:v,x=xe(),S=(0,$.useRef)(null),C=n===Yt.Handle,k=me((0,$.useCallback)(aw(C&&p),[C,p]),Se),M=(0,$.useRef)(null),I=t??sw[n];(0,$.useEffect)(()=>{if(!(!S.current||!m))return M.current||(M.current=mc({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:R,transform:T,snapGrid:P,snapToGrid:w,nodeOrigin:_,domNode:N}=x.getState();return{nodeLookup:R,transform:T,snapGrid:P,snapToGrid:w,nodeOrigin:_,paneDomNode:N}},onChange:(R,T)=>{let{triggerNodeChanges:P,nodeLookup:w,parentLookup:_,nodeOrigin:N}=x.getState(),E=[],z={x:R.x,y:R.y},D=w.get(m);if(D&&D.expandParent&&D.parentId){let F=D.origin??N,W=R.width??D.measured.width??0,V=R.height??D.measured.height??0,Q={id:D.id,parentId:D.parentId,rect:{width:W,height:V,...da({x:R.x??D.position.x,y:R.y??D.position.y},{width:W,height:V},D.parentId,w,F)}},X=xr([Q],w,_,N);E.push(...X),z.x=R.x?Math.max(F[0]*W,R.x):void 0,z.y=R.y?Math.max(F[1]*V,R.y):void 0}if(z.x!==void 0&&z.y!==void 0){let F={id:m,type:"position",position:{...z}};E.push(F)}if(R.width!==void 0&&R.height!==void 0){let W={id:m,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};E.push(W)}for(let F of T){let W={...F,type:"position"};E.push(W)}P(E)},onEnd:({width:R,height:T})=>{let P={id:m,type:"dimensions",resizing:!1,dimensions:{width:R,height:T}};x.getState().triggerNodeChanges([P])}})),M.current.update({controlPosition:I,boundaries:{minWidth:s,minHeight:c,maxWidth:u,maxHeight:l},keepAspectRatio:d,resizeDirection:f,onResizeStart:b,onResize:h,onResizeEnd:g,shouldResize:y}),()=>{M.current?.destroy()}},[I,s,c,u,l,d,b,h,g,y]);let L=I.split("-");return(0,H.jsx)("div",{className:Ne(["react-flow__resize-control","nodrag",...L,n,o]),ref:S,style:{...r,scale:k,...a&&{[C?"backgroundColor":"borderColor"]:a}},children:i})}var ok=(0,$.memo)(lw);var Vu=/[\w\u4e00-\u9fa5.-]/;var cw=/[\p{L}\p{N}]/u;function Xu(e){return e===void 0?!0:!cw.test(e)}function qu(e){return e.trim().replace(/\s+/g," ")}function uw(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&Xu(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Vu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Vu.test(i))break;r+=1}Xu(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function dw(e){let t=[];for(let n of uw(e))n.kind==="ref"&&t.push(n.token);return t}function Gu(e,t){let n=dw(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let u=qu(c.name);if(u==="")continue;let l=o.get(u);l===void 0?o.set(u,[c.id]):l.includes(c.id)||l.push(c.id)}let r=[],i=new Set,a=[],s=new Set;for(let c of n){let u=qu(c.name),l=o.get(u);if(l===void 0){s.has(u)||(s.add(u),a.push(u));continue}for(let d of l)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var fw=/\.(png|jpe?g|webp|gif|bmp)$/i;function Zu(e){return e.type.startsWith("image/")?!0:fw.test(e.name)}var Yu=30,Uu=200;function Ku(e,t){if(t&&Math.abs(t.x-e.x)<Uu&&Math.abs(t.y-e.y)<Uu){let n={x:t.x+Yu,y:t.y+Yu};return{position:n,next:n}}return{position:e,next:e}}var pw=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Ia(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!pw.test(n));return t.length?t.join(" "):void 0}function vn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function ju(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function Qu(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function mw(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function Pa(e,t,n,o){let r=new Set(n),i=typeof o?.size=="string"&&o.size?o.size:"1024x1024",a=typeof o?.quality=="string"&&o.quality?o.quality:"high",s=b=>typeof b=="string"?b:"",c=b=>typeof b=="number"&&Number.isFinite(b)?b:0,u=b=>{if(!b||typeof b!="object")return null;let{x:h,y:g}=b;return typeof h!="number"||typeof g!="number"||!Number.isFinite(h)||!Number.isFinite(g)?null:{x:h,y:g}},l=new Set(["image","prompt","group"]),d=[],f=new Set,p=e.flatMap(b=>{if(!b||typeof b!="object")return d.push({id:"?",reason:"\u4E0D\u662F\u4E00\u4E2A\u8282\u70B9\u5BF9\u8C61"}),[];let h=s(b.id);if(!h)return d.push({id:"?",reason:"\u6CA1\u6709 id"}),[];let g=s(b.type);if(!l.has(g))return d.push({id:h,reason:g?`\u8BA4\u4E0D\u51FA\u7684\u8282\u70B9\u7C7B\u578B\u300C${g}\u300D`:"\u6CA1\u6709\u8282\u70B9\u7C7B\u578B"}),[];let v=u(b.position);if(!v)return d.push({id:h,reason:"\u6CA1\u6709\u6709\u6548\u5750\u6807"}),[];let m=b.data;if(!m||typeof m!="object")return d.push({id:h,reason:"\u6CA1\u6709 data"}),[];f.add(h);let x=Ia(b.className),S={...b,position:v};x===void 0?delete S.className:S.className=x;let C=m;if(g==="image"){let k=s(C.registryId);return[{...S,type:"image",data:{...C,registryId:k,name:s(C.name),url:s(C.url),size:c(C.size),ext:s(C.ext),...r.has(k)?{missing:!0}:{}}}]}return g==="group"?[{...S,type:"group",data:{...C,name:s(C.name),imageCount:c(C.imageCount),totalSize:c(C.totalSize)}}]:[{...S,type:"prompt",data:{...C,prompt:s(C.prompt),size:s(C.size)||i,quality:s(C.quality)||a,outputDir:s(C.outputDir),status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}]}),y=mw(t.filter(b=>f.has(s(b?.source))&&f.has(s(b?.target))));return{nodes:p,edges:y,dropped:d}}function Ju(e){return e.filter(t=>t.type==="prompt").map(t=>({nodeId:t.id,taskId:String(t.data.taskId??"")})).filter(t=>!!t.taskId)}function ot(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function ed(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function gw(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function hw(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let u=c.pop();if(a.has(u))continue;a.add(u);let l=o.get(u);l&&(l.type==="prompt"?s.add(u):l.type==="group"&&c.push(...r.get(u)??[]))}n.set(i.data.registryId,s.size)}}function td(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of r.get(e)??[]){let u=o.get(c);if(u){if(u.type==="image")a+=1,s.push(u.data.registryId);else if(u.type==="group"){let l=td(c,t,n);a+=l.count,s.push(...l.ids)}}}return t.delete(e),{count:a,ids:s}}function bw(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=td(a.id,new Set,t),u=new Set(c);n.set(a.id,u.size),o.set(a.id,Array.from(u).reduce((l,d)=>l+(i.get(d)??0),0)),r.set(a.id,s-u.size)}}function nd(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=gw(e,t);return hw(e,a,n),bw(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function yw(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=o.get(s);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(u=>u.target===s).forEach(u=>a.push(u.source)))}return r}function od(e,t,n,o){let r=yw(e,t,n),i=r.map(u=>({id:u.id,name:u.type==="image"?u.data.name:""})),a=Gu(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(u=>[u.id,u])),c=[];for(let u of a.ids){let l=s.get(u);l&&c.push(l)}return{images:c,unknown:a.unknown,mode:a.mode}}function Pr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function zr(e,t){return t.reduce((n,o)=>!n||Pr(e,o)<Pr(e,n)?o:n,null)}function xo(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function xw(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=zr(r,n);if(i&&r.position.y>i.position.y){xo(e,i,r);continue}let a=zr(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||Pr(r,a)<Pr(r,i))?xo(e,r,a):i&&xo(e,r,i)}}function ww(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=zr(r,n);a&&xo(e,r,a)}}function vw(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(u=>{let l=o.get(u.source)?.type;return u.target===a.id&&(l==="image"||l==="group")}))continue;let c=zr(a,i);c&&xo(e,c,a)}}function za(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return xw(a,e,n,o),ww(a,o,n,i),vw(a,n,o,r),a.next}function rd(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?za(o,t):t}function id(e,t){return{nodes:e.map(n=>{let o=Ia(n.className),r={...n};if(o===void 0?delete r.className:r.className=o,r.type==="image"){let{maskDataUrl:d,...f}=r.data;return{...r,data:f}}if(r.type!=="prompt")return r;let{startedAtMs:i,resultCount:a,message:s,cancelRequested:c,...u}=r.data,l=d=>typeof d=="string"?d:"";return{...r,data:{...u,prompt:l(u.prompt),size:l(u.size),quality:l(u.quality)||"high",outputDir:l(u.outputDir),status:"idle"}}}),edges:[...t]}}async function Ee(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:r})}return r}function qe(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var ad=()=>Ee("config");var sd=()=>Ee("assets"),Rr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},ld=e=>Ee("asset/delete",qe({id:e})),Ra=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Ee(`history?${t.toString()}`)},Dr=(e=14)=>Ee(`history/stats?days=${e}`),Da=e=>Ee("generate",qe(e)),cd=e=>Ee(`task?id=${encodeURIComponent(e)}`),ud=e=>Ee("task/cancel",qe({id:e})),dd=(e,t,n)=>Ee("workflow/save",qe({name:e,nodes:t,edges:n})),Ta=()=>Ee("workflow/list"),fd=e=>Ee(`workflow/load?name=${encodeURIComponent(e)}`),Aa=(e,t)=>Ee("recovery/save",qe({...id(e,t)})),pd=()=>Ee("recovery/latest"),md=e=>Ee("settings",qe({model:e})),Tr=e=>Ee("settings",qe({profile:e})),Oa=e=>Ee("settings",qe({outputDir:e})),gd=e=>Ee("settings",qe({budget:e})),La=e=>Ee("settings",qe({imagoraRoot:e})),hd=(e={})=>Ee("pick-folder",qe(e)),Ar=e=>Ee("reveal",qe({path:e})),$a=e=>Ee("provider",qe(e)),bd=e=>Ee("provider/probe",qe(e));var yd=e=>Ee("budget",qe(e));function xd(e){return`\u751F\u6210\u4E2D ${e}s`}function ue(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var kw=/^=== (.+) ===\s*$/,vd=/^```(?:text)?\s*$/,Sw=/^ratio:\s*(\d+):(\d+)\s*$/,Cw=/^ratio\b/i;function wd(e){return e.split(`
`).some(t=>vd.test(t))}function kd(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((u,l)=>{let d=u.match(kw)?.[1];d!==void 0&&a.push({title:d.trim(),line:l})}),a.length===0){let u=t.trim();return u&&i.push(u),wd(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),wd(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let u=0;u<a.length;u++){let l=a[u];if(l===void 0)continue;let{title:d}=l,f=l.line+1,p=a[u+1],y=p===void 0?n.length:p.line,b=n.slice(f,y);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let h=[];b.forEach((L,R)=>{vd.test(L)&&h.push(R)});let g=h[0],v=h[h.length-1];if(g===void 0||v===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let m=b.slice(0,g).join(`
`).trim();m&&i.push(m);let x=b.slice(g+1,v),S=x.findIndex(L=>L.trim()!=="");if(S===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let C=(x[S]??"").trim(),k=C.match(Sw);if(!k){Cw.test(C)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${C}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let M=`${k[1]}:${k[2]}`,I=x.slice(S+1).join(`
`).trim();if(!I){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:M,prompt:I})}return{cards:o,issues:r,skippedText:i}}function Ba(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function Sd(e,t,n){let o=Iw(n,e.length);return e.map((r,i)=>{let a=Ba(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var Ha=380,Ew=326,Cd=40,Mw=74,Nw=Ha+Cd,_w=Ew+Mw,Or=3;function Iw(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/Or),a=r%Or,s=Math.min(Or,n-i*Or),c=s*Ha+(s-1)*Cd,u=e.x+Ha/2-c/2;o.push({x:u+a*Nw,y:e.y+i*_w})}return o}var Pw={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function Be(e){let t=e.measured,n=Pw[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var Ut={layerGap:60,resultGap:60,nodeGap:16,leftMargin:60,topMargin:40},zw={image:0,group:0,prompt:1},Ed="\u63D0\u793A\u8BCD\u751F\u6210";function Md(e,t,n,o){let r=n.get(e);if(r!==void 0)return r;if(o.has(e))return-1;o.add(e);let i=0;for(let a of t.get(e)??[]){let s=Md(a,t,n,o);s>=0&&(i=Math.max(i,s+1))}return o.delete(e),n.set(e,i),i}function Rw(e,t){return e.type!=="prompt"?null:(t.get(e.id)??[]).slice().sort().join("|")}function Dw(e,t,n,o,r){let i=new Map(e.map(b=>[b.id,b])),a=new Map,s=new Map;for(let b of t){if(!i.has(b.source)||!i.has(b.target))continue;let h=a.get(b.target)??[];h.push(b.source),a.set(b.target,h);let g=s.get(b.source)??[];g.push(b.target),s.set(b.source,g)}let c=new Map,u=new Set;for(let b of e){let h=Math.max(Md(b.id,a,c,u),zw[b.type]);c.set(b.id,h)}let l=new Map;for(let b of e){let h=l.get(c.get(b.id)??0)??[];h.push(b),l.set(c.get(b.id)??0,h)}let d=[...l.keys()].sort((b,h)=>b-h),f=new Map;for(let b of e)n.has(b.id)||f.set(b.id,{x:b.position.x-(o?.x??0),y:b.position.y-(o?.y??0)});let p=b=>(f.get(b.id)?.x??b.position.x)+Be(b).width/2,y=new Map;{let b=r;for(let h of d){let g=l.get(h).reduce((v,m)=>{let x=f.get(m.id);return x&&!n.has(m.id)?Math.max(v,x.y+Be(m).height):Math.max(v,b+Be(m).height)},b);y.set(h,b),b=g+Ut.layerGap}}return{byId:i,preds:a,succs:s,layerGroups:l,sortedLayers:d,positions:f,centerOf:p,bandY:y}}function Tw(e){let{nodes:t,edges:n,moves:o,origin:r,boundsWidth:i}=e;if(!t.length)return t;let a=r?0:Ut.leftMargin,s=r?0:Ut.topMargin,c=Dw(t,n,o,r,s),{positions:u}=c;return Ow(c,o,a),Lw(c,o,a),$w(t,o,a,i,u),t.map(l=>{if(!o.has(l.id))return l;let d=u.get(l.id);return!d||!Number.isFinite(d.x)||!Number.isFinite(d.y)?l:r?{...l,position:{x:d.x+r.x,y:d.y+r.y}}:{...l,position:d}})}function Aw(e,t,n){let{byId:o,preds:r,positions:i,centerOf:a}=t,s=(r.get(e.id)??[]).map(c=>o.get(c)).filter(c=>c!==void 0&&i.has(c.id)).map(c=>a(c));return s.length?s.reduce((c,u)=>c+u,0)/s.length:n+Be(e).width/2}function Nd(e,t,n,o,r){let{layerGroups:i,preds:a,positions:s,bandY:c}=n,u=i.get(e).filter(h=>o.has(h.id));if(!u.length)return;let l=new Map;for(let h of u)l.set(h.id,t(h));let d=h=>Rw(h,a),f=[...u].sort((h,g)=>{let v=l.get(h.id),m=l.get(g.id);if(Math.abs(v-m)>=.5)return v-m;let x=d(h),S=d(g);if(x!==null&&S!==null&&x===S&&h.type==="prompt"&&g.type==="prompt"){let C=h.data.title??Ed,k=g.data.title??Ed,M=C.localeCompare(k,"zh");if(M!==0)return M}return h.position.x-g.position.x}),p=(h,g)=>h.every(v=>d(v)===null||d(v)===d(g)),y=r-Ut.nodeGap,b=0;for(;b<f.length;){let h=f[b];if(h===void 0)break;let g=l.get(h.id),v=b,m=f[v+1];for(;m!==void 0&&Math.abs(l.get(m.id)-g)<.5&&p(f.slice(b,v+1),m);)v+=1,m=f[v+1];let x=f.slice(b,v+1),S=x.reduce((M,I,L)=>M+Be(I).width+(L?Ut.nodeGap:0),0),C=c.get(e),k=Math.max(y+Ut.nodeGap,g-S/2);for(let M of x)s.set(M.id,{x:k,y:C}),k+=Be(M).width+Ut.nodeGap;y=k-Ut.nodeGap,b=v+1}}function Ow(e,t,n){for(let o of e.sortedLayers)Nd(o,r=>Aw(r,e,n),e,t,n)}function Lw(e,t,n){let{sortedLayers:o,succs:r,byId:i,positions:a,centerOf:s}=e;for(let c of[...o].reverse())Nd(c,u=>{let l=(r.get(u.id)??[]).map(f=>i.get(f)).filter(f=>f!==void 0&&a.has(f.id)).map(f=>s(f));if(l.length)return l.reduce((f,p)=>f+p,0)/l.length;let d=a.get(u.id);return d?d.x+Be(u).width/2:n+Be(u).width/2},e,t,n)}function $w(e,t,n,o,r){if(o!==void 0){let i=e.filter(a=>t.has(a.id));if(i.length){let a=Math.min(...i.map(u=>r.get(u.id).x)),s=Math.max(...i.map(u=>r.get(u.id).x+Be(u).width)),c=n+o/2-(a+s)/2;if(c!==0)for(let u of i){let l=r.get(u.id);r.set(u.id,{x:l.x+c,y:l.y})}}}}function _d(e,t,n){if(!n.size)return e;let o=e.filter(f=>n.has(f.id));if(!o.length)return e;let r=t.filter(f=>n.has(f.source)||n.has(f.target)),i=new Set;for(let f of r)n.has(f.source)||i.add(f.source),n.has(f.target)||i.add(f.target);let a=e.filter(f=>i.has(f.id)),s=Math.min(...o.map(f=>f.position.x)),c=Math.max(...o.map(f=>f.position.x+Be(f).width)),u=Math.min(...o.map(f=>f.position.y)),l=Tw({nodes:[...o,...a],edges:r,moves:n,origin:{x:s,y:u},boundsWidth:i.size===0?Math.max(c-s,1):void 0}),d=new Map(l.map(f=>[f.id,f]));return e.map(f=>d.get(f.id)??f)}var Wa=[0,.5,1];function Id(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function zd(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Pd(e,t,n,o){let r=Wa.map(s=>Id(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&zd(c))for(let u=0;u<Wa.length;u+=1){let l=Wa[u];if(l===void 0)continue;let d=Id(c,n,l);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let y=d-p,b=Math.abs(y);b>=o||b>=a||(a=b,i={delta:y,position:d,targetId:c.id})}}}return i}function Lr(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!zd(e)||!Number.isFinite(n)||n<=0)return o;let r=Pd(e,t,"x",n),i=Pd(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var Rd="imagora.canvas-snap.v1";function Dd(){try{let e=window.localStorage.getItem(Rd);return e===null?!0:e!=="0"}catch{return!0}}function Td(e){try{window.localStorage.setItem(Rd,e?"1":"0")}catch{}}function vo(e){let t=Be(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var wo=[];function Ad(e,t,n){if(!n)return{changes:e,guides:wo};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:wo};let r=o[0];if(!r)return{changes:e,guides:wo};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:wo};let s={...vo(i),x:a.x,y:a.y},c=[];for(let d of t)d.id!==r.id&&c.push(vo(d));let u=Lr(s,c);return u.guides.length===0?{changes:e,guides:wo}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:u.x,y:u.y}}:d),guides:u.guides}}var Ae=require("react");var Hr=require("react");var Zt=new Map,Fa=new Map;function Hw(e,t,n=512){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||e<=0||t<=0||n<=0||e<=n&&t<=n)return null;let o=n/Math.max(e,t);return{width:Math.max(1,Math.round(e*o)),height:Math.max(1,Math.round(t*o))}}function $r(e){let t=Zt.get(e);return t===void 0?null:(Zt.delete(e),Zt.set(e,t),t)}function Bw(e,t){for(Zt.set(e,t);Zt.size>240;){let n=Zt.keys().next();if(n.done===!0)break;let o=Zt.get(n.value);Zt.delete(n.value),o!==void 0&&URL.revokeObjectURL(o)}}async function Ww(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u7F29\u7565\u56FE\u53D6\u56FE\u5931\u8D25\uFF1A${n.status}`);let o=await n.blob(),r=await createImageBitmap(o),i=Hw(r.width,r.height,t);if(i===null)return r.close(),e;let a=document.createElement("canvas");a.width=i.width,a.height=i.height;let s=a.getContext("2d");if(s===null)return r.close(),e;s.drawImage(r,0,0,i.width,i.height),r.close();let c=await new Promise(u=>a.toBlob(u,"image/webp",.9));return c===null?e:URL.createObjectURL(c)}function Od(e,t=512){let n=$r(e);if(n!==null)return Promise.resolve(n);let o=Fa.get(e);if(o!==void 0)return o;let r=Ww(e,t).catch(()=>e).then(i=>(Fa.delete(e),i!==e&&Bw(e,i),i));return Fa.set(e,r),r}function Ld(e){let[t,n]=(0,Hr.useState)(()=>{if(!e)return null;let o=$r(e);return o===null?null:{src:e,url:o}});return(0,Hr.useEffect)(()=>{if(!e)return;let o=$r(e);if(o!==null){n({src:e,url:o});return}let r=!1;return Od(e).then(i=>{r||n({src:e,url:i})}),()=>{r=!0}},[e]),t===null||t.src!==e?null:t.url}var Va=require("react/jsx-runtime"),$d={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function Pe({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=$d[e]||$d.help;return(0,Va.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,Va.jsx)("path",{d:r})})}var we=require("react"),Gd=require("react-dom");var Fw={id:"__custom",label:"\u81EA\u5B9A\u4E49"},Vw=64;function Hd(e){return typeof e!="string"?"":e.trim().replace(/\s+/g," ")}function Xw(e,t){return e.some(n=>n.value===t)}function Bd(e,t){let n=Hd(t);return n===""||Xw(e,n)?e:[...e,{value:n,label:n,group:Fw}]}function Wd(e){let t=Hd(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>Vw?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function Fd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var Br=0;function Wr(){Br+=1}function Fr(){Br=Math.max(0,Br-1)}function Vd(){return Br>0}var qw=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function Xa(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=qw.has(o)?"-":n}return t}function Xd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function Gw(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+Xd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,u=n;for(let[l,d]of o.entries()){if(c!==n&&(u=Math.max(u,c+l-2)),e.charAt(l)===t.charAt(i)){let f=1+Xd(e,l),p=n;s!==n&&(p=s+f+4),u!==n&&(p=Math.max(p,u+f+1-l)),a[l]=p}c=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function qd(e,t){let n=Xa(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,c;for(let u of a){let l=Xa(u).toLowerCase(),d=Gw(l,n);d!==void 0&&(s||=l.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:s,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var ye=require("react/jsx-runtime"),Yw=4;function ft({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:c,"aria-describedby":u,"aria-invalid":l,renderOption:d,title:f}){let[p,y]=(0,we.useState)(!1),[b,h]=(0,we.useState)(-1),[g,v]=(0,we.useState)(""),[m,x]=(0,we.useState)(null),S=(0,we.useRef)(null),C=(0,we.useRef)(null),k=(0,we.useRef)(null),M=(0,we.useId)(),I=`${r??`select-${M}`}-listbox`,L=`${I}-search`,R=(0,we.useMemo)(()=>{if(g.trim()==="")return e;let B=e.map(O=>({name:O.value,label:O.label,option:O}));return qd(B,g).map(O=>O.option)},[e,g]),T=i===void 0||i==="auto"?e.length>Yw:i,P=R.findIndex(B=>B.value===t),w=e.find(B=>B.value===t),_=B=>`${I}-option-${B}`,N=T&&s===!0,E=(0,we.useMemo)(()=>{let B=g.trim();if(B!=="")return R.find(O=>O.value===B||O.label===B)},[R,g]),z=(0,we.useMemo)(()=>{if(!N||E!==void 0)return null;let B=Wd(g);return B.ok?B.value:null},[N,E,g]),D=(B=P>=0?P:0)=>{!e.length&&!N||(h(e.length===0?-1:Math.min(Math.max(B,0),e.length-1)),y(!0),T||window.setTimeout(()=>C.current?.focus(),0))},F=(B=!1)=>{y(!1),v(""),B&&window.setTimeout(()=>C.current?.focus(),0)},W=B=>{let O=R[B];O&&(n(O.value),F(!0))},V=B=>{c?.(B),F(!0)},Q=()=>{let B=C.current;if(!B)return;let O=B.getBoundingClientRect(),U=4,ne=8,oe=B.offsetWidth||O.width,J=Math.max(ne,Math.min(O.left,window.innerWidth-oe-ne)),Y=window.innerHeight-O.bottom-U-ne,ce=O.top-U-ne,G=Y<160&&ce>Y,re=Math.max(120,Math.min(240,G?ce:Y));x({left:J,top:G?Math.max(ne,O.top-U-re):O.bottom+U,width:oe,maxHeight:re})};(0,we.useEffect)(()=>{if(p)return Wr(),()=>Fr()},[p]),(0,we.useLayoutEffect)(()=>{if(!p)return;Q();let B=()=>Q();window.addEventListener("scroll",B,!0),window.addEventListener("resize",B);let O=typeof ResizeObserver>"u"?null:new ResizeObserver(B);return C.current&&O?.observe(C.current),()=>{O?.disconnect(),window.removeEventListener("scroll",B,!0),window.removeEventListener("resize",B)}},[p]),(0,we.useEffect)(()=>{p&&T&&m&&k.current?.focus()},[p,T,m]),(0,we.useEffect)(()=>{p&&h(B=>R.length===0?-1:Math.min(Math.max(B,0),R.length-1))},[p,R.length]),(0,we.useEffect)(()=>{!e.length&&!N&&p&&(y(!1),h(-1))},[p,e.length,N]),(0,we.useEffect)(()=>{let B=O=>{let U=O.target;S.current?.contains(U)||document.getElementById(I)?.contains(U)||F()};return document.addEventListener("mousedown",B,!0),()=>document.removeEventListener("mousedown",B,!0)},[I]);let X=(B,O)=>{if(B.key==="Tab"){F();return}if(B.key==="Escape"){p&&(B.preventDefault(),F(!0));return}if(B.key==="ArrowDown"||B.key==="ArrowUp"){if(B.preventDefault(),!p){D();return}if(R.length===0)return;let U=B.key==="ArrowDown"?1:-1;h(ne=>(ne+U+R.length)%R.length);return}if(B.key==="Home"||B.key==="End"){if(R.length===0)return;B.preventDefault(),p||y(!0),h(B.key==="Home"?0:R.length-1);return}if(B.key==="Enter"){if(B.preventDefault(),!p){D();return}if(N&&g.trim()!==""){E!==void 0?(n(E.value),F(!0)):z!==null&&V(z);return}W(b);return}!O&&B.key===" "&&(B.preventDefault(),p?W(b):D())},K=(0,we.useMemo)(()=>Fd(R),[R]),le=(0,we.useMemo)(()=>{let B=new Map;return R.forEach((O,U)=>B.set(O,U)),B},[R]);return(0,ye.jsxs)("div",{ref:S,className:`im-select-root ${o}`.trim(),children:[(0,ye.jsxs)("button",{ref:C,type:"button",id:r,title:f,onClick:()=>p?F():D(),onKeyDown:B=>X(B,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":I,"aria-activedescendant":p&&b>=0?_(b):void 0,"aria-describedby":u,"aria-invalid":l,className:`im-select-trigger${p?" is-open":""}`,children:[d&&w?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(w),(0,ye.jsx)("span",{className:"im-select-label",children:w.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:w?.label??"\u8BF7\u9009\u62E9"}),(0,ye.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ye.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&m&&(0,Gd.createPortal)((0,ye.jsxs)("div",{id:I,"data-portal":"select-list",className:"im-select-list",style:{left:m.left,top:m.top,width:m.width,maxHeight:m.maxHeight},children:[T&&(0,ye.jsx)("div",{className:"im-select-search",children:(0,ye.jsx)("input",{ref:k,id:L,type:"text",className:"im-select-search-input",value:g,onChange:B=>v(B.target.value),onKeyDown:B=>X(B,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":I,"aria-activedescendant":b>=0?_(b):void 0})}),(0,ye.jsxs)("ul",{role:"listbox","aria-labelledby":T?L:void 0,className:"im-select-rows",children:[R.length===0&&(0,ye.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),K.map(B=>(0,ye.jsxs)("li",{role:"presentation",className:"im-select-group",children:[B.label!==""&&(0,ye.jsx)("div",{className:"im-select-group-title",role:"presentation",children:B.label}),(0,ye.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:B.rows.map(O=>{let U=le.get(O)??-1,ne=O.value===t,oe=U===b;return(0,ye.jsxs)("li",{id:_(U),role:"option","aria-selected":ne,className:`im-select-option${ne?" is-selected":""}${oe?" is-active":""}`,onMouseEnter:()=>h(U),onMouseDown:J=>J.preventDefault(),onClick:()=>W(U),children:[d?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(O),(0,ye.jsx)("span",{className:"im-select-label",children:O.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:O.label}),ne&&(0,ye.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ye.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},O.value)})})]},B.id||"__ungrouped"))]}),z!==null&&(0,ye.jsx)("div",{className:"im-select-custom",children:(0,ye.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:B=>B.preventDefault(),onClick:()=>V(z),children:(0,ye.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",z,"\u201D"]})})})]}),document.body)]})}var Z=require("react/jsx-runtime"),qa=(0,Ae.createContext)(null),Ga=(0,Ae.createContext)(!1);function Ya(){return(0,Ae.useContext)(Ga)}function Ua(){let e=(0,Ae.useContext)(qa);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function Uw({value:e,onChange:t}){let[n,o]=(0,Ae.useState)(e),r=(0,Ae.useRef)(!1);return(0,Ae.useEffect)(()=>{r.current||o(e)},[e]),(0,Z.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onCompositionStart:()=>{r.current=!0},onCompositionEnd:i=>{r.current=!1,o(i.currentTarget.value),t(i.currentTarget.value)},onChange:i=>{let a=i.target.value;o(a),r.current||t(a)}})}function Vr(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(wn,{type:"target",position:te.Top,className:"im-handle"}),(0,Z.jsx)(wn,{type:"source",position:te.Bottom,className:"im-handle"})]})}function Za({children:e}){return(0,Z.jsx)("div",{className:"im-rail nodrag",children:e})}function Lt({label:e,onClick:t,danger:n,children:o}){return(0,Z.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var Zd=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=Ua(),i=Ya(),[a,s]=(0,Ae.useState)(!1),c=n.missing||a,u=Ld(n.url);return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${c?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,Z.jsx)(Vr,{}),c?(0,Z.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,Z.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:l=>{l.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,i?null:(0,Z.jsxs)(Za,{children:[(0,Z.jsx)(Lt,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,Z.jsx)(Pe,{name:"eye"})}),(0,Z.jsx)(Lt,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,Z.jsx)(Pe,{name:"crop"})}),(0,Z.jsx)(Lt,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,Z.jsx)(Pe,{name:"expand"})}),(0,Z.jsx)(Lt,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,Z.jsx)(Pe,{name:"grid"})}),(0,Z.jsx)(Lt,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,Z.jsx)(Pe,{name:"wand"})}),(0,Z.jsx)(Lt,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,Z.jsx)(Pe,{name:"image"})}),(0,Z.jsx)(Lt,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Pe,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-thumb",onDoubleClick:l=>{l.stopPropagation(),r.zoomImage(t)},children:n.url&&u?(0,Z.jsx)("img",{src:u,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):n.url?(0,Z.jsx)("span",{className:"im-thumb-placeholder","aria-hidden":!0}):(0,Z.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,Z.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Z.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),Yd=4,Kd=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=Ua(),i=Ya(),a=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,c=Math.min(Math.max(n.imageCount-1,0),3);return(0,Z.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,Z.jsx)(Vr,{}),i?null:(0,Z.jsx)(Za,{children:(0,Z.jsx)(Lt,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Pe,{name:"trash"})})}),(0,Z.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:c},(u,l)=>(0,Z.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*Yd}px, ${-(l+1)*Yd}px)`}},l)),(0,Z.jsxs)("div",{className:"im-group-face",children:[(0,Z.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,Z.jsxs)("div",{className:"im-group-size",children:[a," MB"]}),s>0?(0,Z.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function Ud({from:e}){let[t,n]=(0,Ae.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ae.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Z.jsx)(Z.Fragment,{children:xd(t)})}var Zw={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"};function Kw(e){switch(e.status){case"queued":return{text:"\u6392\u961F\u4E2D",detail:"\u6392\u961F\u4E2D",tone:"is-queued"};case"running":return{text:"\u751F\u6210\u4E2D",detail:"\u751F\u6210\u4E2D",tone:"is-running"};case"done":return{text:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,detail:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,tone:"is-done"};case"failed":return{text:"\u5931\u8D25",detail:e.message?`\u5931\u8D25\uFF1A${e.message}`:"\u5931\u8D25",tone:"is-failed"};default:return{text:"\u5C31\u7EEA",detail:"\u5C31\u7EEA",tone:"is-idle"}}}var jd=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=Ua(),i=Ya(),a=r.config,s=n.status==="queued"||n.status==="running",c=a?.sizes??[],u=a?.qualities??[],l=c.some(f=>f.value===n.size)||!n.size?c:[...c,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],d=a?.qualityEffective!==!1;if(i){let f=Kw(n);return(0,Z.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Vr,{}),(0,Z.jsx)("div",{className:"im-lod-title",title:n.title??"\u63D0\u793A\u8BCD\u751F\u6210",children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("div",{className:`im-lod-status ${f.tone}`,title:f.detail,children:n.status==="running"?(0,Z.jsx)(Ud,{from:n.startedAtMs}):f.text})]})}return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Vr,{}),(0,Z.jsxs)(Za,{children:[(0,Z.jsx)("span",{className:"im-rail-dot",title:Zw[n.status]??"\u5C31\u7EEA",children:(0,Z.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Z.jsx)(Lt,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Pe,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)(Uw,{value:n.prompt,onChange:f=>r.updatePrompt(t,{prompt:f})}),(0,Z.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:d?"7fr 3fr":"1fr",marginTop:8},children:[(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,Z.jsx)(ft,{className:"im-select-fill",options:Bd(l,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:f=>r.updatePrompt(t,{size:f})})]}),d?(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,Z.jsx)(ft,{className:"im-select-fill",options:u.map(f=>({value:f,label:f})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:f=>r.updatePrompt(t,{quality:f})})]}):null]}),(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,Z.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:a?.defaultOutputDir??"",onChange:f=>r.updatePrompt(t,{outputDir:f.target.value})})]}),n.status==="failed"&&n.message?(0,Z.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Z.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!(n.prompt??"").trim(),onClick:f=>{f.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,Z.jsx)(Ud,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,Z.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:f=>{f.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var Qd=`
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
`;var Jd={image:Zd,prompt:jd,group:Kd};function ef(e,t){return!e&&t<.1?!0:e&&t>.2?!1:e}var kn=require("react/jsx-runtime"),jw="0 0 1024 1024",Qw="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function Ka({size:e=30,fill:t="var(--im-brand)"}){return(0,kn.jsx)("svg",{width:e,height:e,viewBox:jw,fill:t,"aria-hidden":"true",children:(0,kn.jsx)("path",{d:Qw})})}function tf({onClick:e}){return(0,kn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,kn.jsx)(Ka,{}),(0,kn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var nf=require("react"),Sn=require("react/jsx-runtime");function Jw(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function of(e){return(0,nf.useMemo)(()=>Jw(e),[e])}function rf({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,Sn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,Sn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,Sn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,Sn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,Sn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var _e=require("react/jsx-runtime");function af(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(c,u,l)=>(0,_e.jsx)("button",{type:"button",className:`${l.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:l.title,disabled:l.disabled,onClick:u,children:c});return(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsxs)("div",{className:"im-header",children:[(0,_e.jsx)(tf,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,_e.jsx)(ft,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,_e.jsx)(ft,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,_e.jsx)(rf,{summary:e.cost,budget:t?.budget??0}),(0,_e.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,_e.jsxs)("div",{className:"im-toolbar",children:[(0,_e.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,_e.jsx)("span",{className:"im-drag-grip",children:(0,_e.jsx)(Pe,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,_e.jsx)("span",{className:"im-drag-grip",children:(0,_e.jsx)(Pe,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,_e.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var We=require("react/jsx-runtime");function Kt({icon:e,label:t,title:n,active:o,onClick:r}){return(0,We.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,We.jsx)(Pe,{name:e,size:14}),(0,We.jsx)("span",{className:"im-dock-row-label",children:t})]})}function sf(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,We.jsxs)("div",{className:"im-dock nodrag",children:[(0,We.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,We.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,We.jsx)(Kt,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,We.jsx)(Kt,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,We.jsx)(Kt,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,We.jsx)(Kt,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,We.jsx)(Kt,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,We.jsx)(Kt,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,We.jsx)(Kt,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,We.jsx)(Kt,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Fe=require("react"),df=require("react-dom");var ja="application/x-dsh-imagora-canvas",Xr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},lf="\u677E\u5F00\u53D6\u6D88";function Qa(e){return e.dataTransfer?.types.includes("Files")??!1}function ko(e,t){if(Qa(e))return"images";let n=e.dataTransfer?.getData(ja);return n==="prompt"||n==="group"?n:t}function cf(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function uf(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":Xr[e]}function Ja(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var $t=require("react/jsx-runtime"),ev=22,tv=28,qr=8;function ff(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,c]=(0,Fe.useState)(null),u=(0,Fe.useRef)(null),l=(0,Fe.useRef)(0),d=(0,Fe.useRef)(null),f=(0,Fe.useRef)(null),p=(0,Fe.useRef)(null),y=(0,Fe.useCallback)((S,C)=>{u.current=S,c(S);let k=p.current;k&&k.textContent!==C&&(k.textContent=C)},[]),b=(0,Fe.useCallback)(()=>{u.current=null,l.current=0,c(null),f.current?.classList.remove("is-outside")},[]),h=(0,Fe.useCallback)((S,C)=>{let k=d.current;if(!k)return;let M=Math.min(S+ev,window.innerWidth-k.offsetWidth-qr),I=Math.min(C+tv,window.innerHeight-k.offsetHeight-qr);k.style.transform=`translate(${Math.max(qr,M)}px, ${Math.max(qr,I)}px)`},[]),g=(0,Fe.useCallback)((S,C,k)=>{let M=t.current;if(!M)return o();let I=M.getBoundingClientRect(),L=k?Math.min(Math.max(S,I.left),I.left+I.width):S,R=k?Math.min(Math.max(C,I.top),I.top+I.height):C;return r({x:L,y:R})},[t,o,r]);(0,Fe.useEffect)(()=>{let S=M=>{Qa(M)&&M.preventDefault()},C=M=>{let I=u.current;if(!I||I==="images")return;h(M.clientX,M.clientY);let L=t.current,R=!!(L&&Ja(M.clientX,M.clientY,L.getBoundingClientRect())),T=R?Xr[I]:lf,P=p.current;P&&P.textContent!==T&&(P.textContent=T),f.current?.classList.toggle("is-outside",!R)},k=()=>{l.current=0,b()};return window.addEventListener("dragover",S),window.addEventListener("dragover",C),window.addEventListener("drop",S),window.addEventListener("dragend",k),window.addEventListener("blur",k),()=>{window.removeEventListener("dragover",S),window.removeEventListener("dragover",C),window.removeEventListener("drop",S),window.removeEventListener("dragend",k),window.removeEventListener("blur",k)}},[t,b,h]);let v={onDragEnter:S=>{if(n)return;let C=ko(S,u.current);C&&(S.preventDefault(),C==="images"&&(l.current+=1),y(C,uf(C,cf(S.dataTransfer))),h(S.clientX,S.clientY))},onDragOver:S=>{n||!ko(S,u.current)||(S.preventDefault(),S.dataTransfer.dropEffect="copy",h(S.clientX,S.clientY))},onDragLeave:S=>{n||ko(S,u.current)==="images"&&(l.current-=1,l.current<=0&&b())},onDrop:S=>{if(n)return;let C=ko(S,u.current);if(!C)return;S.preventDefault();let k=t.current,M=!k||Ja(S.clientX,S.clientY,k.getBoundingClientRect());if(b(),C==="images"){let I=Array.from(S.dataTransfer.files??[]);if(!I.length)return;i(I,g(S.clientX,S.clientY,!0));return}M&&a(C,g(S.clientX,S.clientY,!1))}},m=(0,Fe.useCallback)((S,C)=>{S.dataTransfer.setData(ja,C),S.dataTransfer.effectAllowed="copy",y(C,Xr[C]),h(S.clientX,S.clientY)},[h,y]),x=(0,df.createPortal)((0,$t.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,$t.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,$t.jsx)(Pe,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,$t.jsx)(Pe,{name:"close",size:14})}),(0,$t.jsx)("span",{ref:p,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:x,dragHandlers:v,startToolbarDrag:m,hideDropChip:b}}var Ht=require("react");var pf=2;function mf({rootRef:e,canvasRef:t,instanceRef:n,setNodes:o,modalOpen:r}){let[i,a]=(0,Ht.useState)(null),[s,c]=(0,Ht.useState)(null),u=(0,Ht.useRef)(null),l=(0,Ht.useCallback)(()=>a(null),[]);return(0,Ht.useEffect)(()=>{if(r){u.current=null,c(null);return}let d=t.current,f=e.current;if(!d||!f)return;let p=v=>{if(v.button!==2)return;let m=n.current;if(!m)return;let x=v.target instanceof Element?v.target:null;if(x?.closest("input, textarea, [contenteditable]"))return;let S=m.screenToFlowPosition({x:v.clientX,y:v.clientY}),C=x?.closest(".react-flow__node"),k=C instanceof HTMLElement?C.dataset.id??null:null;u.current={startFlow:S,nodeId:k,clientX:v.clientX,clientY:v.clientY},c({x:S.x,y:S.y,width:0,height:0}),v.preventDefault()},y=v=>{let m=u.current,x=n.current;if(!m||!x)return;let S=x.screenToFlowPosition({x:v.clientX,y:v.clientY});c({x:Math.min(m.startFlow.x,S.x),y:Math.min(m.startFlow.y,S.y),width:Math.abs(S.x-m.startFlow.x),height:Math.abs(S.y-m.startFlow.y)})},b=v=>{let m=u.current,x=n.current;if(!m||!x)return;u.current=null;let S=x.screenToFlowPosition({x:v.clientX,y:v.clientY}),C={x:Math.min(m.startFlow.x,S.x),y:Math.min(m.startFlow.y,S.y),width:Math.abs(S.x-m.startFlow.x),height:Math.abs(S.y-m.startFlow.y)};if(c(null),C.width<pf&&C.height<pf){a(m.nodeId?{x:m.clientX,y:m.clientY,nodeId:m.nodeId}:null);return}a(null),o(k=>{let M=!1,I=k.map(L=>{let R=Be(L),T=L.position.x>=C.x&&L.position.y>=C.y&&L.position.x+R.width<=C.x+C.width&&L.position.y+R.height<=C.y+C.height;return T===!!L.selected?L:(M=!0,{...L,selected:T})});return M?I:k})},h=v=>{let m=v.target instanceof Element?v.target:null;m&&(m.closest("input, textarea, [contenteditable]")||v.preventDefault())},g=()=>{u.current&&(u.current=null,c(null))};return d.addEventListener("mousedown",p),window.addEventListener("mousemove",y),window.addEventListener("mouseup",b),f.addEventListener("contextmenu",h,!0),window.addEventListener("blur",g),()=>{d.removeEventListener("mousedown",p),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",b),f.removeEventListener("contextmenu",h,!0),window.removeEventListener("blur",g)}},[t,e,n,o,r]),{nodeMenu:i,boxRect:s,closeMenu:l,setNodeMenu:a}}var xt=require("react"),yf=require("react-dom");function yt(e,t,n={}){let o={id:e,label:t};return n.danger&&(o.danger=!0),n.disabled&&(o.disabled=!0),{kind:"action",action:o}}var es={kind:"separator"};function gf(e,t){let n=[];if(t.selectedCount>1&&(n.push(yt("delete-selection",`\u5220\u9664\u6240\u9009 ${t.selectedCount} \u9879`,{danger:!0})),n.push(es)),e==="image"){let r=!t.hasUrl;n.push(yt("preview","\u9884\u89C8\u5927\u56FE",{disabled:r}),yt("crop","\u88C1\u526A",{disabled:r}),yt("upscale","\u653E\u5927",{disabled:r}),yt("split","\u5207\u5206",{disabled:r}),yt("mask","\u8499\u7248\u91CD\u7ED8",{disabled:r}),yt("replace","\u66FF\u6362\u56FE\u7247"),es)}else e==="prompt"&&n.push(yt("run","\u8FD0\u884C"),yt("copy-prompt","\u590D\u5236\u63D0\u793A\u8BCD"),es);let o=t.selectedCount>1?"\u4EC5\u5220\u9664\u6B64\u9879":"\u5220\u9664";return n.push(yt("delete",o,{danger:!0})),n}function ts(e,t,n,o=8){let r=Math.max(0,n.width-t.width-o),i=Math.max(0,n.height-t.height-o);return{x:Math.min(Math.max(0,e.x),r),y:Math.min(Math.max(0,e.y),i)}}function hf(e){return e.reduce((t,n)=>t+(n.kind==="action"?28:9),0)}function bf(e){return e==="Escape"||e==="Tab"}var Gr=require("react/jsx-runtime");function xf(){return{width:window.innerWidth,height:window.innerHeight}}function ov(e,t,n){return ts({x:e,y:t},{width:200,height:hf(n)},xf())}function wf({x:e,y:t,items:n,onPick:o,onClose:r}){let i=(0,xt.useRef)(null),[a,s]=(0,xt.useState)(()=>ov(e,t,n)),[c,u]=(0,xt.useState)(null);return(0,xt.useEffect)(()=>(Wr(),()=>Fr()),[]),(0,xt.useLayoutEffect)(()=>{let l=i.current?.getBoundingClientRect().height??0;if(l<=0)return;let d=ts({x:e,y:t},{width:200,height:l},xf());s(f=>f.x===d.x&&f.y===d.y?f:d)},[e,t]),(0,xt.useEffect)(()=>{let l=p=>{let y=p.target;y instanceof Node&&i.current?.contains(y)||r()},d=p=>{p.defaultPrevented||bf(p.key)&&r()},f=()=>r();return document.addEventListener("pointerdown",l),document.addEventListener("keydown",d),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",d),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[r]),(0,yf.createPortal)((0,Gr.jsx)("div",{ref:i,role:"menu","aria-label":"\u8282\u70B9\u64CD\u4F5C","data-testid":"node-context-menu",className:"im-select-list",style:{left:a.x,top:a.y,width:200,zIndex:72,userSelect:"none"},children:n.map((l,d)=>{if(l.kind==="separator")return(0,Gr.jsx)("div",{role:"separator",className:"im-menu-separator"},`separator-${d}`);let{action:f}=l,p=f.disabled===!0;return(0,Gr.jsx)("button",{type:"button",role:"menuitem","data-testid":`node-menu-${f.id}`,"aria-disabled":p?"true":void 0,className:`im-select-option${c===f.id?" is-active":""}${f.danger?" is-danger":""}${p?" is-disabled":""}`,style:{height:28,minHeight:0,paddingTop:0,paddingBottom:0},onClick:()=>{p||o(f.id)},onMouseEnter:()=>u(f.id),onMouseLeave:()=>u(null),children:f.label},f.id)})}),document.body)}var vf="dsh-imagora.canvas-minimap.v1";function kf(){try{let e=localStorage.getItem(vf);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Sf(e){try{localStorage.setItem(vf,e?"1":"0")}catch{}}var jt=require("react/jsx-runtime");function Cf(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,jt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,jt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u6309\u53C2\u8003\u5173\u7CFB\u5206\u5C42\u91CD\u6392\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u63D0\u793A\u8BCD\u5361 / \u7ED3\u679C\u56FE / \u56FE\u7247\u7EC4\u4E00\u8D77\u53C2\u4E0E\uFF0C\u540C\u5C42\u6309\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,jt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var Ue=require("react/jsx-runtime");function Ef(){return(0,Ue.jsxs)("div",{className:"im-empty",children:[(0,Ue.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,Ue.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,Ue.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var rv=5;function Mf({logs:e}){if(!e.length)return null;let t=e.slice(-rv);return(0,Ue.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,Ue.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var iv={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Nf({text:e}){return e?(0,Ue.jsx)("div",{style:iv,children:e}):null}function _f({tone:e,children:t,action:n}){return(0,Ue.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ue.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ue.jsx)(Pe,{name:e==="error"?"help":"clock"})}),(0,Ue.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ue.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var ve=require("react"),Af=require("react-dom");async function av(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function If(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await av(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function Pf(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var So=e=>Math.min(8,Math.max(.2,e));function zf(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function Rf(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function Df(e,t,n){return Math.round(e*Rf(t,n)*100)}function Tf(e,t){let n=Rf(e,t);return n?So(1/n):1}var he=require("react/jsx-runtime"),Yr=1.2,sv=5;function Ur({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,ve.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,ve.useState)(!1),[c,u]=(0,ve.useState)(null),l=(0,ve.useRef)(null),d=(0,ve.useRef)(!1),f=c?.kind==="copying",p=(0,ve.useRef)(null),[y,b]=(0,ve.useState)(null),h=(0,ve.useRef)({width:0,height:0}),g=(0,ve.useRef)(null),v=(0,ve.useRef)(null),m=(0,ve.useRef)(null),x=(0,ve.useRef)(null),S=(0,ve.useCallback)(E=>{let z=m.current;return z?{zoom:E.zoom,pan:zf(E.pan,E.zoom,h.current,{width:z.clientWidth,height:z.clientHeight})}:E},[]),C=(0,ve.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),k=(0,ve.useCallback)(()=>{let E=x.current;if(!E)return;h.current={width:E.clientWidth,height:E.clientHeight};let z={width:E.naturalWidth,height:E.naturalHeight};p.current=z,b(D=>D&&D.width===z.width&&D.height===z.height?D:z)},[]);(0,ve.useEffect)(()=>{let E=()=>k();return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[k]);let M=(0,ve.useCallback)(()=>{let E=Tf(p.current,h.current);i(z=>S({zoom:E,pan:z.pan}))},[S]),I=(0,ve.useCallback)(()=>{let E=p.current,z=v.current;if(!E||!z)return;let D=z.clientWidth*.98,F=z.clientHeight*.98,W=So(Math.min(1,D/E.width,F/E.height));i({zoom:W,pan:{x:0,y:0}})},[]);(0,ve.useEffect)(()=>{let E=m.current;if(!E)return;let z=D=>{D.preventDefault(),D.stopPropagation();let F=E.getBoundingClientRect(),W=D.clientX-F.left-F.width/2,V=D.clientY-F.top-F.height/2;i(Q=>{let X=So(D.deltaY<0?Q.zoom*Yr:Q.zoom/Yr);if(X===Q.zoom)return Q;let K=X/Q.zoom;return S({zoom:X,pan:{x:W-(W-Q.pan.x)*K,y:V-(V-Q.pan.y)*K}})})};return E.addEventListener("wheel",z,{passive:!1}),()=>E.removeEventListener("wheel",z)},[S]),(0,ve.useEffect)(()=>{let E=z=>{z.key==="Escape"&&o()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[o]),(0,ve.useEffect)(()=>()=>{l.current&&window.clearTimeout(l.current)},[]);let L=(E,z)=>{u({kind:E,text:z}),l.current&&window.clearTimeout(l.current),l.current=E==="copying"?null:window.setTimeout(()=>u(null),1200)},R=async(E,z)=>{if(!d.current){d.current=!0,L("copying","\u590D\u5236\u4E2D\u2026");try{await E(),L("copied",z)}catch(D){L("failed",D instanceof Error?D.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},T=E=>{r.zoom<=1||(E.preventDefault(),E.stopPropagation(),E.currentTarget instanceof Element&&E.currentTarget.setPointerCapture(E.pointerId),g.current={startX:E.clientX,startY:E.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:E.target===x.current},s(!0))},P=E=>{let z=g.current;if(!z)return;let D=E.clientX-z.startX,F=E.clientY-z.startY;!z.moved&&Math.hypot(D,F)<=sv||(z.moved=!0,i(W=>S({...W,pan:{x:z.panX+D,y:z.panY+F}})))},w=()=>{let E=g.current;g.current=null,s(!1),E&&!E.moved&&!E.onImage&&o()},_=E=>{let z=E.target instanceof Element?E.target:null;z&&(z.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},N=E=>i(z=>S({...z,zoom:So(z.zoom*E)}));return(0,Af.createPortal)((0,he.jsxs)("div",{ref:v,className:"im-zoom-overlay",onPointerDown:_,onClick:E=>E.stopPropagation(),children:[(0,he.jsx)("div",{ref:m,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:T,onPointerMove:P,onPointerUp:w,onPointerCancel:w,onDoubleClick:E=>{E.stopPropagation(),C()},children:(0,he.jsx)("img",{ref:x,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let E=x.current;E&&(p.current={width:E.naturalWidth,height:E.naturalHeight},h.current={width:E.clientWidth,height:E.clientHeight},k())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,he.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,he.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,he.jsx)("div",{"aria-hidden":!0}),(0,he.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,he.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,he.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>N(1/Yr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9"})})}),(0,he.jsxs)("span",{className:"im-zoom-readout",title:`${y?`${y.width}\xD7${y.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[Df(r.zoom,y,h.current),"%"]}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>N(Yr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:I,children:"\u9002\u5E94\u7A97\u53E3"}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:M,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void R(()=>If(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void R(()=>Pf(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,he.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),c?(0,he.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var os=require("react");var Qt=require("react"),$f=require("react-dom");var wt=require("react/jsx-runtime"),Of=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),Co=[];function Lf(e){return Co[Co.length-1]===e}function Oe({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:c=!1,headerless:u=!1}){let l=`im-modal-${(0,Qt.useId)()}`,d=`${l}-title`,f=(0,Qt.useRef)(null),p=(0,Qt.useRef)(null),y=(0,Qt.useRef)(o);return y.current=o,(0,Qt.useEffect)(()=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,Co.push(l);let h=f.current;(a?.current??h?.querySelector(Of)??h)?.focus();let v=m=>{if(!Lf(l))return;if(m.key==="Escape"){if(Vd())return;m.preventDefault(),m.stopPropagation(),y.current();return}if(m.key!=="Tab"||!h)return;let x=Array.from(h.querySelectorAll(Of)).filter(k=>!k.hidden&&k.getAttribute("aria-hidden")!=="true");if(!x.length){m.preventDefault(),h.focus();return}let S=x[0],C=x[x.length-1];!S||!C||(m.shiftKey&&(document.activeElement===S||!h.contains(document.activeElement))?(m.preventDefault(),C.focus()):!m.shiftKey&&document.activeElement===C&&(m.preventDefault(),S.focus()))};return document.addEventListener("keydown",v,!0),()=>{document.removeEventListener("keydown",v,!0);let m=Co.lastIndexOf(l);m>=0&&Co.splice(m,1);let x=p.current;window.setTimeout(()=>x?.focus(),0)}},[a]),(0,$f.createPortal)((0,wt.jsx)("div",{className:`im-modal-shell${c?" im-modal-shell--nested":""}`,onMouseDown:h=>{s&&h.target===h.currentTarget&&Lf(l)&&o()},children:(0,wt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:h=>h.stopPropagation(),children:[u?(0,wt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,wt.jsxs)("header",{className:"im-modal-header",children:[(0,wt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,wt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,wt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,wt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var de=require("react/jsx-runtime");function Hf({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,os.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,os.useState)(null),c=r.trim(),u=e.some(d=>d.name===c),l=()=>{if(c){if(u&&a!==c){s(c);return}n(c)}};return a?(0,de.jsx)(Oe,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,de.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,de.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,de.jsxs)(Oe,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,de.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c,onClick:l,children:"\u4FDD\u5B58"})]}),children:[(0,de.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&l()}}),(0,de.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,de.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,de.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,de.jsx)("span",{className:"im-pick-name",children:d.name}),(0,de.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function Bf({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,de.jsx)(Oe,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,de.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,de.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,de.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,de.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,de.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var lv=[["\u753B\u5E03","\u53F3\u952E\u62D6\u62FD\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u5F39\u83DC\u5355 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8"],["\u8282\u70B9","\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C/\u6574\u7406/\u8FDE\u7EBF/\u8BBE\u8DEF\u5F84/\u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88"],["\u8FDE\u7EBF","\u56FE\u7247\u2192\u63D0\u793A\u8BCD/\u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u4EC5\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete/Backspace \u5220\u9664\u8FDE\u7EBF"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function Wf({onClose:e,config:t}){return(0,de.jsx)(Oe,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u62D6\u5165\u56FE\u7247 \xB7 \u53F3\u952E\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u51FA\u83DC\u5355",size:"md",onClose:e,footer:(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,de.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,de.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:lv.map(([n,o])=>(0,de.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,de.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,de.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,de.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,de.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var et=require("react");function Ze(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function Vf(e,t=.06){let n=Ze(e.width,t,1),o=Ze(e.height,t,1);return{width:n,height:o,x:Ze(e.x,0,1-n),y:Ze(e.y,0,1-o)}}function Xf(e,t,n){return{...e,x:Ze(e.x+t,0,1-e.width),y:Ze(e.y+n,0,1-e.height)}}function qf(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let l=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=l,a.height*=l,a.width<.06||a.height<.06){let p=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=p,a.height*=p}a.width=Ze(a.width,.06,1),a.height=Ze(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=Ze(a.width,.06,1),a.height=Ze(a.height,.06,1);return a.x=Ze(a.x,0,1-a.width),a.y=Ze(a.y,0,1-a.height),a}function Gf(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ze(e.x+(e.width-r)/2,0,1-r),y:Ze(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function rs(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function cv(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function Yf(e,t){let n=cv(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function is(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Jt(e){let t=await is(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function Uf(e,t){let n=await is(e);if(t)return Ff(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return Ff(n,r,i,o,o)}async function Zf(e,t){let n=await is(e),{width:o,height:r}=rs(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?uv(n,o,r):Kf(n,n.width,n.height,o,r,t.algorithm)}function Ff(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function uv(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=jf(o,r,i,a,s,"high"),r=a,i=s}return Kf(o,r,i,t,n,"high")}function Kf(e,t,n,o,r,i){return jf(e,t,n,o,r,i).toDataURL("image/png")}function jf(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var ze=require("react/jsx-runtime"),Qf=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],fv=["nw","n","ne","e","se","s","sw","w"],as={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function Jf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,et.useRef)(null),[i,a]=(0,et.useState)(null),[s,c]=(0,et.useState)({x:.08,y:.08,width:.84,height:.84}),[u,l]=(0,et.useState)(null),[d,f]=(0,et.useState)(!1),[p,y]=(0,et.useState)(null),b=(0,et.useRef)(null);(0,et.useEffect)(()=>{let k=!0;return Jt(e).then(M=>{k&&(a(M),c(Vf({x:.06,y:.06,width:.88,height:.88})))}).catch(M=>{k&&y(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(M)}`)}),()=>{k=!1}},[e]);let h=k=>{l(k),i&&k!==null&&c(M=>Gf(M,k,i))},g=(k,M)=>{k.stopPropagation(),k.target.setPointerCapture?.(k.pointerId),b.current={mode:M,startX:k.clientX,startY:k.clientY,base:s}},v=(0,et.useCallback)(k=>{let M=b.current,I=r.current;if(!M||!I)return;let L=I.getBoundingClientRect();if(!L.width||!L.height)return;let R=(k.clientX-M.startX)/L.width,T=(k.clientY-M.startY)/L.height;c(M.mode==="move"?Xf(M.base,R,T):qf(M.base,R,T,M.mode,u,i??{width:1,height:1}))},[u,i]),m=()=>{b.current=null},x=async()=>{f(!0),y(null);try{let k=await Uf(e,s),M=Math.round(s.width*(i?.width??0)),I=Math.round(s.height*(i?.height??0));await o(k,`\u88C1\u526A ${M}\xD7${I}${u?` \xB7 ${Qf.find(L=>L.ratio===u)?.label}`:""}`)}catch(k){y(`\u88C1\u526A\u5931\u8D25\uFF1A${ue(k)}`)}finally{f(!1)}},S=i?Math.round(s.width*i.width):0,C=i?Math.round(s.height*i.height):0;return(0,ze.jsx)(Oe,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",S," \xD7 ",C,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${Yf(i.width,i.height)}`:"",(0,ze.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||S<8||C<8,onClick:()=>void x(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,ze.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ze.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":"\u88C1\u526A\u6BD4\u4F8B",children:[(0,ze.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),Qf.map(k=>{let M=k.ratio===u;return(0,ze.jsx)("button",{type:"button","aria-pressed":M,className:`im-chip im-chip--sm im-chip--action${M?" is-brand":""}`,onClick:()=>h(k.ratio),children:k.label},k.label)}),(0,ze.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[S," \xD7 ",C,"px"]})]}),(0,ze.jsxs)("div",{ref:r,onPointerMove:v,onPointerUp:m,onPointerCancel:m,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,ze.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,ze.jsx)("div",{onPointerDown:k=>g(k,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:fv.map(k=>(0,ze.jsx)("span",{onPointerDown:M=>g(M,k),style:{position:"absolute",left:as[k].left,top:as[k].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:as[k].cursor}},k))})]}),p?(0,ze.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Ve=require("react");function ss(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function ls(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function cs(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:ls(e)*n/2}function ep(e,t,n=.004){if(!ss(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function tp(e,t,n,o){if(!ss(e)||!ss(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/r);if(c<=1)return[];let u=Math.min(c,2048),l=[];for(let d=1;d<u;d+=1){let f=d/u;l.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return l}function pv(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function np(e){return!pv(e)}var Re=require("react/jsx-runtime"),Zr=640;function op({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Ve.useRef)(null),i=(0,Ve.useRef)(!1),[a,s]=(0,Ve.useState)(null),[c,u]=(0,Ve.useState)(null),[l,d]=(0,Ve.useState)([]),[f,p]=(0,Ve.useState)("paint"),[y,b]=(0,Ve.useState)(.08),[h,g]=(0,Ve.useState)(!1),[v,m]=(0,Ve.useState)(null);(0,Ve.useEffect)(()=>{let T=!0;Jt(e).then(w=>{T&&s(w)}).catch(w=>{T&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(w)}`)});let P=new Image;return P.crossOrigin="anonymous",P.onload=()=>{T&&u(P)},P.src=e,()=>{T=!1,u(null)}},[e]);let x=(0,Ve.useMemo)(()=>a?a.width>=a.height?{width:Zr,height:Math.round(a.height/a.width*Zr)}:{width:Math.round(a.width/a.height*Zr),height:Zr}:{width:0,height:0},[a]);(0,Ve.useEffect)(()=>{let T=r.current;if(!T||!c||!x.width)return;let P=T.getContext("2d");if(!P||(T.width=x.width,T.height=x.height,P.clearRect(0,0,x.width,x.height),P.drawImage(c,0,0,x.width,x.height),!a))return;let w=cs(y,{width:x.width,height:x.height});P.save(),P.globalAlpha=.55,P.fillStyle="#ffffff",P.strokeStyle="#ffffff",P.lineWidth=w*2,P.lineCap="round",P.lineJoin="round";for(let _ of l){_.mode==="erase"?(P.globalCompositeOperation="destination-out",P.strokeStyle="#000",P.fillStyle="#000"):(P.globalCompositeOperation="source-over",P.strokeStyle="#ffffff",P.fillStyle="#ffffff");let N=_.points;if(N.length&&(P.beginPath(),P.arc(N[0].x*x.width,N[0].y*x.height,w,0,Math.PI*2),P.fill(),N.length>1)){P.beginPath(),P.moveTo(N[0].x*x.width,N[0].y*x.height);for(let E of N.slice(1))P.lineTo(E.x*x.width,E.y*x.height);P.stroke()}}P.restore()},[x,l,y,a,c]);let S=T=>{let P=r.current;if(!P)return null;let w=P.getBoundingClientRect();return!w.width||!w.height?null:{x:Math.min(1,Math.max(0,(T.clientX-w.left)/w.width)),y:Math.min(1,Math.max(0,(T.clientY-w.top)/w.height))}},C=T=>{let P=S(T);P&&(T.currentTarget.setPointerCapture?.(T.pointerId),i.current=!0,d(w=>[...w,{mode:f,size:y,points:[P]}]))},k=T=>{if(!i.current)return;let P=S(T);P&&d(w=>{let _=w[w.length-1];if(!_)return w;let N=ep(_.points,P);return N===_.points?w:[...w.slice(0,-1),{..._,points:N}]})},M=()=>{i.current=!1},I=async()=>{if(!c||!a)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let T=document.createElement("canvas");T.width=a.width,T.height=a.height;let P=T.getContext("2d");if(!P)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");P.fillStyle="#ffffff",P.fillRect(0,0,a.width,a.height);let w=cs(y,{width:a.width,height:a.height});P.globalCompositeOperation="destination-out",P.lineWidth=w*2,P.lineCap="round",P.lineJoin="round",P.strokeStyle="#000",P.fillStyle="#000";for(let _ of l){if(_.mode!=="paint")continue;let N=tp(_.points[0],_.points[_.points.length-1],w/4,{width:a.width,height:a.height});if(N.length&&(P.beginPath(),P.arc(N[0].x*a.width,N[0].y*a.height,w,0,Math.PI*2),P.fill(),N.length>1)){P.beginPath(),P.moveTo(N[0].x*a.width,N[0].y*a.height);for(let E of N.slice(1))P.lineTo(E.x*a.width,E.y*a.height);P.stroke()}}return T.toDataURL("image/png")},L=async()=>{g(!0),m(null);try{let T=await I();await o(T,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(T){m(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${ue(T)}`)}finally{g(!1)}},R=np(l);return(0,Re.jsx)(Oe,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:h||R,onClick:()=>void L(),children:h?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",label:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"},{mode:"erase",label:"\u64E6"}].map(T=>(0,Re.jsx)("button",{type:"button","aria-pressed":f===T.mode,className:`im-chip im-chip--sm im-chip--action${f===T.mode?" is-brand":""}`,onClick:()=>p(T.mode),children:T.label},T.mode)),(0,Re.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,Re.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(y*100),onChange:T=>b(ls(Number(T.target.value)/100)),className:"im-range"}),(0,Re.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(y*100),"%"]})]}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>d([]),children:"\u6E05\u7A7A"}),(0,Re.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,Re.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,Re.jsx)("canvas",{ref:r,onPointerDown:C,onPointerMove:k,onPointerUp:M,onPointerCancel:M,style:{width:x.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,Re.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",a?` \xB7 \u539F\u56FE ${a.width} \xD7 ${a.height}`:""]}),v?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:v}):null]})})}var ge=require("react");function Kr(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(2)} \u5143`}function bv(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(1)}%`}function yv(e){if(typeof e!="number"||!Number.isFinite(e)||e<=0)return"-";if(e<60)return`${e.toFixed(1)}s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}m${String(n).padStart(2,"0")}s`}function rp(e){return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:Kr(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:Kr(e.cost)},{label:"\u6210\u529F\u7387",value:`${bv(e.successRate)}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:yv(e.avgSeconds)}]}var en=require("react"),ip=require("react-dom"),Cn=require("react/jsx-runtime");function ap({text:e}){let t=(0,en.useRef)(null),n=(0,en.useRef)(null),[o,r]=(0,en.useState)(null),[i,a]=(0,en.useState)(0),s=l=>{let d=t.current;d&&d.scrollHeight>d.clientHeight&&r(l.clientY)},c=l=>{r(d=>d!==null?l.clientY:d)},u=()=>{r(null),a(0)};return(0,en.useLayoutEffect)(()=>{if(o!==null&&n.current){let l=n.current.getBoundingClientRect();a(Math.max(8,Math.min(o+16,window.innerHeight-l.height-8)))}},[o,e]),(0,Cn.jsxs)(Cn.Fragment,{children:[(0,Cn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:c,onMouseLeave:u,children:e}),o!==null?(0,ip.createPortal)((0,Cn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var ee=require("react/jsx-runtime"),sp=60;function xv(e){return e.replace(/[\\/][^\\/]+$/,"")}function lp({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,c]=(0,ge.useState)(""),[u,l]=(0,ge.useState)(!1),[d,f]=(0,ge.useState)(0),[p,y]=(0,ge.useState)(!0),[b,h]=(0,ge.useState)(!1),[g,v]=(0,ge.useState)(""),[m,x]=(0,ge.useState)("ledger"),[S,C]=(0,ge.useState)(""),[k,M]=(0,ge.useState)(null),[I,L]=(0,ge.useState)(new Map),[R,T]=(0,ge.useState)(null),[P,w]=(0,ge.useState)({dailyLimit:"",singleRunLimit:""}),[_,N]=(0,ge.useState)(!1),[E,z]=(0,ge.useState)(""),D=(0,ge.useRef)(null),F=(0,ge.useRef)(0),W=(0,ge.useRef)([]),V=(0,ge.useRef)(i),Q=(0,ge.useRef)(s);V.current=i,Q.current=s;let X=(0,ge.useCallback)(async G=>{let re=++F.current;y(!0),v("");try{let fe=await Ra({limit:sp,offset:0,query:G?.query??V.current,status:G?.status??Q.current});if(re!==F.current)return;let Ce=Array.isArray(fe.items)?fe.items:[];x(fe.source==="ledger"?"ledger":"none"),C(typeof fe.ledgerPath=="string"?fe.ledgerPath:""),r(Ce),W.current=Ce,l(fe.hasMore===!0),f(Number(fe.total)||Ce.length)}catch(fe){re===F.current&&v(ue(fe))}finally{re===F.current&&y(!1)}},[]),K=(0,ge.useCallback)(async()=>{if(b||!u)return;let G=F.current;h(!0);try{let re=await Ra({limit:sp,offset:W.current.length,query:V.current,status:Q.current});if(G!==F.current)return;let fe=Array.isArray(re.items)?re.items:[];r(Ce=>[...Ce,...fe]),W.current=[...W.current,...fe],l(re.hasMore===!0),f(Number(re.total)||W.current.length)}catch(re){G===F.current&&v(ue(re))}finally{G===F.current&&h(!1)}},[u,b]);(0,ge.useEffect)(()=>{X(),Dr().then(M).catch(()=>M(null)),sd().then(G=>L(new Map((G?.images??[]).map(re=>[re.id,re])))).catch(()=>L(new Map))},[X]);let le=(0,ge.useRef)(!1);(0,ge.useEffect)(()=>{!k?.localBudget||le.current||w({dailyLimit:k.localBudget.dailyLimit?String(k.localBudget.dailyLimit):"0",singleRunLimit:k.localBudget.singleRunLimit?String(k.localBudget.singleRunLimit):"0"})},[k]);let B=G=>{le.current=!0,z(""),w(re=>({...re,...G}))},O=async()=>{N(!0),z("");let G={dailyLimit:Math.max(0,Number(P.dailyLimit)||0),singleRunLimit:Math.max(0,Number(P.singleRunLimit)||0)};try{await yd(G);let re=await Dr();M(re),le.current=!1,z("\u9884\u7B97\u5DF2\u4FDD\u5B58")}catch(re){z(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ue(re)}`)}finally{N(!1)}},U=600,ne=(0,ge.useCallback)(()=>{let G=D.current;G&&G.scrollHeight-G.scrollTop-G.clientHeight<U&&K()},[K]),oe=(0,ge.useMemo)(()=>o.filter(G=>G.status==="error"&&G.inputRefMissing).length,[o]),J=k?rp(k):[],Y=k?.bySize.slice(0,3)??[],ce=S||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(Oe,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,ee.jsxs)("div",{className:"im-history",children:[(0,ee.jsxs)("div",{className:"im-history-bar",children:[(0,ee.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,ee.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:G=>a(G.target.value),onKeyDown:G=>{G.key==="Enter"&&X()}}),(0,ee.jsx)(ft,{className:"im-history-status",value:s,title:"\u6309\u72B6\u6001\u7B5B\u9009",options:[{value:"",label:"\u5168\u90E8\u72B6\u6001"},{value:"ok",label:"\u6210\u529F"},{value:"error",label:"\u5931\u8D25"}],onChange:G=>{c(G),X({status:G})}}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void X(),children:"\u641C\u7D22"}),(0,ee.jsxs)("div",{className:"im-history-bar-end",children:[oe>0?(0,ee.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[oe," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),J.length?(0,ee.jsxs)("div",{className:"im-history-stats",children:[(0,ee.jsxs)("div",{className:"im-history-stat-row",children:[(0,ee.jsx)("div",{className:"im-history-stat-grid",children:J.map(G=>(0,ee.jsxs)("div",{className:"im-history-stat",children:[(0,ee.jsx)("div",{className:"im-history-stat-label",children:G.label}),(0,ee.jsx)("div",{className:"im-history-stat-value",children:G.value})]},G.label))}),(0,ee.jsxs)("div",{className:"im-history-budget",children:[(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u65E5\u9884\u7B97"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:P.dailyLimit,title:"\u5F53\u65E5\u7D2F\u8BA1\u8D39\u7528\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4",onChange:G=>B({dailyLimit:G.target.value})})]}),(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u5355\u6B21\u4E0A\u9650"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:P.singleRunLimit,title:"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650",onChange:G=>B({singleRunLimit:G.target.value})})]}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:_||p,onClick:()=>void O(),children:_?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u9884\u7B97"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void Dr().then(M).catch(()=>{}),children:"\u5237\u65B0"}),E?(0,ee.jsx)("span",{className:"im-history-budget-tip",children:E}):null]})]}),Y.length?(0,ee.jsxs)("div",{className:"im-history-sizes",children:[(0,ee.jsx)("span",{className:"im-history-sizes-label",children:"\u6309\u5C3A\u5BF8"}),Y.map(G=>(0,ee.jsxs)("span",{className:"im-history-sizes-row",children:[G.size," ",(0,ee.jsxs)("span",{className:"im-history-sizes-label",children:["\xD7",G.count]})," \xB7 ",Kr(G.cost)]},G.size))]}):null]}):null,(0,ee.jsxs)("div",{ref:D,className:"im-history-list",onScroll:ne,"data-testid":"history-list",children:[g?(0,ee.jsx)("div",{className:"im-history-error",children:g}):null,p?(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("ul",{className:"im-history-rows",children:o.map((G,re)=>{let fe=G.assetId?I.get(G.assetId):void 0,Ce=!!fe;return(0,ee.jsxs)("li",{className:"im-history-row",children:[(0,ee.jsx)("div",{className:"im-history-thumb",children:G.url?(0,ee.jsx)("img",{src:G.url,alt:G.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>T({url:G.url,path:G.path})}):(0,ee.jsx)("span",{className:"im-history-thumb-empty",children:G.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,ee.jsxs)("div",{className:"im-history-main",children:[(0,ee.jsx)(ap,{text:G.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,ee.jsxs)("p",{className:"im-history-meta",children:[G.time||"-"," \xB7 ",G.quality||"-"," \xB7 ",G.size||"-"]}),G.inputRefs.length?(0,ee.jsx)("div",{className:"im-history-refs",children:G.inputRefs.map(Te=>(0,ee.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,ee.jsx)("img",{src:Te.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>T({url:Te.url,path:Te.path})})},Te.id))}):null,G.inputRefMissing?(0,ee.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,ee.jsxs)("div",{className:"im-history-actions",children:[(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!G.prompt,onClick:()=>void navigator.clipboard.writeText(G.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!G.path,onClick:()=>void Ar(xv(G.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Ce,title:Ce?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{fe&&t([fe])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${G.time}-${G.output}-${re}`)})}),(0,ee.jsx)("div",{className:"im-history-pager",children:b?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":u?(0,ee.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void K(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):m==="none"?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,ee.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,ee.jsx)("code",{children:ce}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),R?(0,ee.jsx)(Ur,{imageUrl:R.url,...R.path?{copyPath:R.path}:{},onClose:()=>T(null)}):null]})}var vt=require("react");var Me=require("react/jsx-runtime");async function wv(e,t,n,o){let r=await new Promise((c,u)=>{let l=new Image;l.onload=()=>c(l),l.onerror=()=>u(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),l.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let c=0;c<n;c+=1)for(let u=0;u<t;u+=1){let l=document.createElement("canvas");l.width=i,l.height=a;let d=l.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,u*i,c*a,i,a,0,0,i,a),s.push(l.toDataURL("image/png"))}return s}var vv="52vh";function cp({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,vt.useState)(null),[i,a]=(0,vt.useState)(2),[s,c]=(0,vt.useState)(2),[u,l]=(0,vt.useState)(!1),[d,f]=(0,vt.useState)(null);(0,vt.useEffect)(()=>{let h=!0;return Jt(e).then(g=>{h&&r(g)}).catch(g=>{h&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(g)}`)}),()=>{h=!1}},[e]);let p=(0,vt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),y=async()=>{if(o){l(!0),f(null);try{let h=await wv(e,i,s,o);await n(h.map((g,v)=>({dataUrl:g,note:`\u5207\u5206 ${v+1}/${h.length}`})))}catch(h){f(`\u5207\u5206\u5931\u8D25\uFF1A${ue(h)}`)}finally{l(!1)}}},b=i*s;return(0,Me.jsx)(Oe,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||b<2,onClick:()=>void y(),children:u?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${b} \u5F20`})]}),children:(0,Me.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Me.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,Me.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,Me.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:h=>a(Number(h.target.value)),className:"im-range"}),(0,Me.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,Me.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,Me.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:h=>c(Number(h.target.value)),className:"im-range"}),(0,Me.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,Me.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[b," \u5F20 \xB7 \u6BCF\u5F20 ",p.w," \xD7 ",p.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,Me.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,Me.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${vv} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(h,g)=>(0,Me.jsx)("span",{style:{position:"absolute",left:`${(g+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${g}`)),Array.from({length:s-1},(h,g)=>(0,Me.jsx)("span",{style:{position:"absolute",top:`${(g+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${g}`))]})}),(0,Me.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,Me.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var kt=require("react");var Ie=require("react/jsx-runtime"),up=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],dp=[1024,1536,2048,3072,4096];function pp({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,kt.useState)(null),[i,a]=(0,kt.useState)(2048),[s,c]=(0,kt.useState)("high"),[u,l]=(0,kt.useState)(!1),[d,f]=(0,kt.useState)(null);(0,kt.useEffect)(()=>{let g=!0;return Jt(e).then(v=>{if(!g)return;r(v);let m=Math.max(v.width,v.height),x=dp.find(S=>S>m)??4096;a(x)}).catch(v=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(v)}`)}),()=>{g=!1}},[e]);let p=(0,kt.useMemo)(()=>o?rs(o.width,o.height,i):{width:0,height:0},[o,i]),y=o&&o.width>0?p.width/o.width:0,b=!!o&&p.width<o.width,h=async()=>{l(!0),f(null);try{let g=await Zf(e,{targetLongEdge:i,algorithm:s});await n(g,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${up.find(v=>v.value===s)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${ue(g)}`)}finally{l(!1)}};return(0,Ie.jsx)(Oe,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||p.width<8||p.height<8,onClick:()=>void h(),children:u?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ie.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),dp.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(g),children:g},g))]}),(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),up.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g.value===s,className:`im-btn-sm ${g.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(g.value),children:g.label},g.value))]}),(0,Ie.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Ie.jsxs)(Ie.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Ie.jsxs)("b",{style:{color:b?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),y?` \xB7 ${y.toFixed(2)}\xD7`:"",b?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Ie.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Ie.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var us=require("react/jsx-runtime");function mp({guides:e}){return e.length?(0,us.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,us.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Kn=require("react");var be=require("react/jsx-runtime");function gp({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,Kn.useState)(""),i=(0,Kn.useRef)(null),a=(0,Kn.useMemo)(()=>kd(o),[o]),s=o.trim().length>0,c=a.cards,u=a.issues??[];return(0,be.jsx)(Oe,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002",size:"lg",onClose:t,initialFocusRef:i,footer:(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,be.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c.length||u.length>0,onClick:()=>n(c),children:["\u786E\u8BA4\u5EFA\u5361\uFF08",c.length,"\uFF09"]})]}),children:(0,be.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,be.jsx)("textarea",{ref:i,value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),(0,be.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:s?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("div",{className:"im-import-summary",children:[(0,be.jsxs)("span",{children:["\u8BC6\u522B ",c.length," \u5F20\u5361\u7247"]}),u.length?(0,be.jsxs)("span",{className:"im-import-summary-error",children:["\u53D1\u73B0 ",u.length," \u4E2A\u95EE\u9898"]}):null]}),c.map((l,d)=>{let f=Ba(l.ratio??"1:1",e);return(0,be.jsxs)("article",{className:"im-import-card",children:[(0,be.jsxs)("div",{className:"im-import-card-meta",children:[(0,be.jsx)("strong",{children:l.title||`\u7B2C ${d+1} \u5F20`}),(0,be.jsx)("span",{children:l.ratio?l.ratio:"\u9ED8\u8BA4\u6BD4\u4F8B"}),(0,be.jsx)("span",{children:f.value}),f.fallback?(0,be.jsx)("span",{className:"im-import-card-fallback",children:"\u5C3A\u5BF8\u56DE\u9000"}):null]}),(0,be.jsx)("p",{className:"im-import-card-text",title:l.prompt||"",children:l.prompt||"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09"})]},`${d}-${l.title??""}`)}),u.map((l,d)=>(0,be.jsx)("div",{className:"im-import-issue",children:l.message},`issue-${d}`))]}):(0,be.jsx)("div",{className:"im-import-summary",children:"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8"})}),(0,be.jsxs)("p",{className:"im-field-hint",children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,be.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,be.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var tn=require("react");var ds=require("react");var St=require("react/jsx-runtime");function hp({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,ds.useState)(null),[i,a]=(0,ds.useState)(!1),s=Number(e?.budget??0),c=async u=>{a(!0);try{let l=await gd(u);t(l),r(null),n(u>0?`\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${u.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(l){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ue(l)}`)}finally{a(!1)}};return(0,St.jsx)("div",{className:"im-fieldset",children:(0,St.jsxs)("div",{children:[(0,St.jsx)("label",{className:"im-label",htmlFor:"imagora-budget",children:"\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650"}),(0,St.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:o??(s?String(s):""),placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",disabled:i,onChange:u=>r(u.target.value)}),(0,St.jsx)("p",{className:"im-field-hint",children:s?`\u5F53\u524D\u4E0A\u9650 \xA5${s.toFixed(2)}\uFF1B\u672C\u753B\u5E03\u82B1\u5230\u4E0A\u9650\u5C31\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF0C\u4E0D\u7ECF\u786E\u8BA4\uFF09`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\u3002\u8FD9\u4E2A\u4E0A\u9650\u7BA1\u7684\u662F\u8FD9\u4E2A\u753B\u5E03\u7D2F\u8BA1\u82B1\u4E86\u591A\u5C11\uFF1B\u8981\u7BA1\u300C\u4ECA\u5929 / \u5355\u6B21\u82B1\u591A\u5C11\u300D\uFF0C\u53BB\u751F\u6210\u5386\u53F2\u7684\u6210\u672C\u6761\u8BBE\u3002"}),(0,St.jsxs)("div",{className:"im-field-actions",children:[(0,St.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:i||!o?.trim(),onClick:()=>void c(Math.max(0,Number(o)||0)),children:"\u4FDD\u5B58\u4E0A\u9650"}),(0,St.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:i||!s,onClick:()=>void c(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})})}var jr=require("react");var De=require("react/jsx-runtime");function bp({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,jr.useState)(""),[i,a]=(0,jr.useState)(""),[s,c]=(0,jr.useState)(!1),u=e?.imagoraRoot??"",l=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async y=>{c(!0);try{let b=await hd({title:y==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:y==="root"?u:d});if(!b.ok){if(b.reason==="cancelled")return;n(b.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${b.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let h=y==="root"?await La(b.path||""):await Oa(b.path||"");t(h),y==="root"?r(""):a(""),n(y==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ue(b)}`)}finally{c(!1)}},p=async(y,b)=>{c(!0);try{let h=y==="root"?await La(b):await Oa(b);t(h),y==="root"?r(""):a(""),n(b?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(h){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ue(h)}`)}finally{c(!1)}};return(0,De.jsxs)("div",{className:"im-fieldset",children:[(0,De.jsxs)("div",{children:[(0,De.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,De.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?u:o,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:y=>r(y.target.value)}),(0,De.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,De.jsxs)("div",{className:"im-field-actions",children:[(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===u,onClick:()=>void p("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void p("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,De.jsxs)("div",{children:[(0,De.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,De.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?l:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:y=>a(y.target.value)}),(0,De.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",l?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,De.jsxs)("div",{className:"im-field-actions",children:[(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===l,onClick:()=>void p("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void Ar(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!l,onClick:()=>void p("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var ie=require("react/jsx-runtime");function Eo({label:e,value:t,mono:n}){return(0,ie.jsxs)("div",{className:"im-spec-row",children:[(0,ie.jsx)("span",{className:"im-spec-key",children:e}),(0,ie.jsx)("span",{className:`im-spec-val${n?" im-spec-mono":""}`,title:t,children:t})]})}function yp({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,tn.useState)(r?.baseUrl??""),[c,u]=(0,tn.useState)(r?.model??e?.model??""),[l,d]=(0,tn.useState)(""),[f,p]=(0,tn.useState)(null),[y,b]=(0,tn.useState)(!1),[h,g]=(0,tn.useState)(null),[v,m]=(0,tn.useState)([]),x=e?.profiles??[],S=i?"plugin":e?.profile??"",C=[{value:"plugin",label:"\u63D2\u4EF6\u5185\u914D\u7F6E"},...x.map(w=>({value:w.name,label:w.label||w.name}))],k=(e?.models??[]).map(w=>({value:w.id,label:w.label||w.id})),M=f??S,I=i&&M!=="plugin",L=async()=>{b(!0);try{let w=null;!I&&!i&&M&&M!==e?.profile&&(w=await Tr(M));let _=a.trim()!==(r?.baseUrl??"")||c.trim()!==(r?.model??"")||l.trim();_&&(w=await $a({baseUrl:a.trim(),model:c.trim(),apiKey:l.trim()})),w&&n(w),d(""),p(null),o(_?"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548":"\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(w){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ue(w)}`)}finally{b(!1)}},R=async()=>{b(!0);try{let w=await $a({reset:!0});n(w),p(null),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(w){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${ue(w)}`)}finally{b(!1)}},T=async()=>{b(!0),g(null);try{let w=await bd({baseUrl:a.trim(),apiKey:l.trim()});m(w.models??[]),g(w.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${w.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(w){m([]),g(`\u8FDE\u4E0D\u901A\uFF1A${ue(w)}`)}finally{b(!1)}},P=!y&&(a.trim().length>0||!i&&M!==S);return(0,ie.jsx)(Oe,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\u3002\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002",size:"lg",onClose:t,footer:(0,ie.jsxs)(ie.Fragment,{children:[i?(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:y,onClick:()=>void R(),children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E"}):null,(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:y,onClick:t,children:"\u53D6\u6D88"}),(0,ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!P,onClick:()=>void L(),children:"\u4FDD\u5B58"})]}),children:(0,ie.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-profile",children:"\u914D\u7F6E\u6765\u6E90"}),(0,ie.jsx)(ft,{id:"imagora-profile",className:"is-block",options:C,value:M,searchable:"auto",onChange:w=>p(w),title:"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"}),(0,ie.jsx)("p",{className:"im-field-hint",children:M==="plugin"?"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\uFF0C\u4E0D\u4F9D\u8D56\u672C\u673A Imagora\u3002\u586B\u597D\u4E0B\u9762\u4E24\u9879\u5373\u53EF\u3002":(x.find(w=>w.name===M)?.label??"")||"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-model-select",children:"\u9ED8\u8BA4\u6A21\u578B"}),(0,ie.jsx)(ft,{id:"imagora-model-select",className:"is-block",options:k,value:c,searchable:!0,allowCustom:!0,emptyLabel:"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id",onChange:w=>u(w),onCreateCustom:w=>u(w),title:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628"}),(0,ie.jsx)("p",{className:"im-field-hint",children:(e?.models??[]).find(w=>w.id===c)?.note||"\u8BE5\u6765\u6E90\u4E0B\u7684\u53EF\u9009\u6A21\u578B"})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u63D2\u4EF6\u5185\u63A5\u53E3"}),(0,ie.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-provider-base-url",children:"\u63A5\u53E3\u5730\u5740"}),(0,ie.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:y,onChange:w=>s(w.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("label",{className:"im-label",htmlFor:"imagora-provider-api-key",children:["API Key",(0,ie.jsx)("span",{className:`im-field-state is-${r?.apiKeyConfigured?"ok":"warn"}`,children:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E"})]}),(0,ie.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:l,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:y,onChange:w=>d(w.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"\u53EA\u5B58\u5728\u672C\u673A settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:y,onClick:()=>void T(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),h?(0,ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:h}):null]}),v.length?(0,ie.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8},children:[v.slice(0,24).map(w=>(0,ie.jsx)("button",{type:"button",className:`im-chip im-chip--action${w===c?" is-brand":""}`,onClick:()=>u(w),children:w},w)),v.length>24?(0,ie.jsxs)("span",{className:"im-muted",children:["\u2026\u8FD8\u6709 ",v.length-24," \u4E2A"]}):null]}):null]})]})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u751F\u6548\u4E2D"}),(0,ie.jsxs)("div",{className:"im-spec-list is-roomy",children:[(0,ie.jsx)(Eo,{label:"\u6765\u6E90",value:e?.profileLabel||(i?"\u63D2\u4EF6\u5185\u914D\u7F6E":"\u2014")}),(0,ie.jsx)(Eo,{label:"\u6A21\u578B",value:e?.modelLabel||e?.model||"\u2014"}),(0,ie.jsx)(Eo,{label:"API Key",value:r?.apiKeyConfigured?"\u25CF \u5DF2\u8BBE\u7F6E":"\u25CB \u672A\u914D\u7F6E"}),r?.baseUrl?(0,ie.jsx)(Eo,{label:"\u63A5\u53E3\u5730\u5740",value:r.baseUrl,mono:!0}):null,e?.imagoraRoot?(0,ie.jsx)(Eo,{label:"Imagora \u76EE\u5F55",value:e.imagoraRoot,mono:!0}):null]}),(0,ie.jsx)("p",{className:"im-pending-line",style:{marginTop:8},children:"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\uFF08host \u6BCF\u6B21\u8BF7\u6C42\u90FD\u91CD\u8BFB\u914D\u7F6E\uFF0C\u4E0D\u50CF\u539F\u7248\u8981\u91CD\u542F\u5DE5\u4F5C\u53F0\uFF09\u3002"}),I?(0,ie.jsxs)("p",{className:"im-pending-line",style:{marginTop:6},children:[(0,ie.jsx)("span",{className:"im-chip is-brand",children:"\u88AB\u538B\u4F4F"}),"\u5F53\u524D\u751F\u6548\u7684\u662F\u63D2\u4EF6\u5185\u63A5\u53E3\uFF1B\u8981\u8BA9\u300C",x.find(w=>w.name===M)?.label??M,"\u300D\u751F\u6548\uFF0C\u5148\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\u3002"]}):null]}),(0,ie.jsx)(bp,{config:e,onSaved:n,onFlash:o}),(0,ie.jsx)(hp,{config:e,onSaved:n,onFlash:o})]})})}var jn=require("react");function xp({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i,record:a}){let s=(0,jn.useCallback)(async(f,p)=>{let y=f.filter(Zu);if(!y.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}a?.();for(let[b,h]of y.entries())try{o(`\u4E0A\u4F20 ${h.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let g=await Rr(h,h.name||`pasted-${Date.now()}.png`),v=vn({...g,relPath:g.name,createdAt:g.createdAt??new Date().toISOString()},{x:p.x+b*172,y:p.y});t(m=>[...m,v]),o(`\u5DF2\u6DFB\u52A0 ${g.name}`)}catch(g){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${ue(g)}`)}},[t,o,r,a]),c=(0,jn.useCallback)((f,p,y)=>{let b=p?y(p):n();s(f,b)},[s,n]),u=(0,jn.useCallback)(f=>{let p=document.createElement("input");p.type="file",p.accept="image/*",p.onchange=async()=>{let y=p.files?.[0];if(y)try{let b=await Rr(y,y.name);t(h=>h.map(g=>g.id===f&&g.type==="image"?{...g,data:{...g.data,registryId:b.id,name:b.name,url:b.url,size:b.size,ext:b.ext,absPath:b.absPath,missing:!1}}:g)),o(`\u5DF2\u66FF\u6362\u4E3A ${b.name}`)}catch(b){o(`\u66FF\u6362\u5931\u8D25\uFF1A${ue(b)}`)}},p.click()},[t,o]),l=(0,jn.useCallback)(f=>{let p=e.current.find(y=>y.id===f);!p||p.type!=="image"||!p.data.url||i({url:p.data.url,name:p.data.name,path:p.data.absPath})},[e,i]),d=(0,jn.useCallback)(async(f,p,y)=>{let b=await fetch(f).then(x=>x.blob()),h=p.endsWith(".png")?p:`${p}.png`,g=await Rr(b,h),v=y??n(),m=vn({...g,relPath:g.name,createdAt:g.createdAt??new Date().toISOString()},v);return t(x=>[...x,m]),o(`\u5DF2\u6DFB\u52A0 ${g.name}`),g},[t,o,n]);return{addImages:s,dropFiles:c,replaceImage:u,openPreview:l,addDataUrl:d}}function wp(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Ct=require("react");function vp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let c=(0,Ct.useCallback)(async b=>{try{return await Da(b)}catch(h){let g=h.body?.overBudget;if(!g)throw h;let v=g.reason||ue(h);if(!window.confirm(`${v}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`))throw new Error(`\u5DF2\u6309\u9884\u7B97\u53D6\u6D88\uFF1A${v}`);return r(`\u8D85\u9884\u7B97\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A${v}`),await Da({...b,allowOverBudget:!0})}},[r]),u=(0,Ct.useCallback)((b,h)=>{let v=(Array.isArray(h.results)?h.results:[]).filter(k=>k.status==="ok"&&k.assetId&&k.url),m=e.current.find(k=>k.id===b&&k.type==="prompt"),x=[];if(m&&m.type==="prompt"){let k=Be(m).height;v.forEach((M,I)=>{x.push(vn({id:String(M.assetId),relPath:M.name??"result.png",name:M.name??"result.png",url:String(M.url),size:M.bytes??0,ext:String(M.ext??"png"),absPath:M.absPath??"",createdAt:new Date().toISOString()},{x:m.position.x+I*172,y:m.position.y+k+56}))})}n(k=>{let M=new Set(k.map(R=>R.id)),I=x.filter(R=>!M.has(R.id)),L=I.length?[...k,...I]:k;return ot(L,b,{status:h.status==="done"?"done":h.status==="cancelled"?"idle":"failed",resultCount:v.length,message:h.error??void 0,startedAtMs:void 0,cancelRequested:!1,taskId:void 0})}),x.length&&o(k=>{let M=x.map(I=>({id:`${b}->${I.id}`,source:b,target:I.id,animated:!0})).filter(I=>!k.some(L=>L.id===I.id));return M.length?[...k,...M]:k}),a.current.delete(b);let S=s.current.get(b);S&&window.clearTimeout(S),s.current.delete(b);let C=h.totalCost??0;C>0&&n(k=>{let M=k.find(L=>L.id===b),I=Number(M?.data?.cost??0);return ot(k,b,{cost:I+C})}),r(h.status==="done"?`\u5B8C\u6210 \xB7 ${v.length} \u5F20${C?` \xB7 ${C.toFixed(2)} \u5143`:""}`:`${h.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${h.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),l=(0,Ct.useCallback)((b,h)=>{let g=async()=>{try{let v=await cd(h);if(v.status==="queued")n(m=>ot(m,b,{status:"queued"}));else if(v.status==="running")n(m=>ot(m,b,{status:"running",startedAtMs:v.startedAt??Date.now(),cancelRequested:v.cancelRequested}));else{u(b,v);return}}catch(v){if(v.status===404){let m=s.current.get(b);m!==void 0&&window.clearTimeout(m),s.current.delete(b),n(x=>ot(x,b,{status:"failed",message:"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF08\u5BBF\u4E3B\u91CD\u542F\u6216\u4EFB\u52A1\u8FC7\u671F\uFF09\uFF0C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF",startedAtMs:void 0,cancelRequested:!1})),r("\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF1A\u505C\u6B62\u8F6E\u8BE2");return}r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${ue(v)}`)}s.current.set(b,window.setTimeout(g,1200))};g()},[u,r,n,s]),d=(0,Ct.useCallback)(async b=>{let h=e.current.find(v=>v.id===b);if(!h||h.type!=="prompt")return;if(!(h.data.prompt??"").trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let g=od(e.current,t.current,b,h.data.prompt);if(g.mode==="invalid"){let v=g.unknown.map(m=>`@${m}`).join("\u3001");n(m=>ot(m,b,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${v}`}));return}try{let v=await c({prompt:h.data.prompt,size:h.data.size,quality:h.data.quality,refIds:g.images.map(m=>m.type==="image"?m.data.registryId:"").filter(Boolean),outputDir:h.data.outputDir,spent:e.current.reduce((m,x)=>m+Number(x.data?.cost??0),0),mask:g.images.map(m=>m.type==="image"?m.data.maskDataUrl:"").find(Boolean)||""});a.current.set(b,v.taskId),n(m=>ot(m,b,{status:"queued",taskId:v.taskId,startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${g.images.length} \u5F20 \xB7 ${h.data.size}`),l(b,v.taskId)}catch(v){let m=ue(v);n(x=>ot(x,b,{status:"failed",message:m})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${m}`)}},[e,t,n,i,r,l,a]),f=(0,Ct.useCallback)(async b=>{let h=a.current.get(b);if(n(g=>ot(g,b,{cancelRequested:!0})),!!h)try{await ud(h)}catch(g){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${ue(g)}`)}},[n,r,a]),p=(0,Ct.useCallback)(b=>{for(let h of b)d(h)},[d]),y=(0,Ct.useCallback)(b=>{for(let{nodeId:h,taskId:g}of Ju(b))a.current.set(h,g),l(h,g)},[a,l]);return(0,Ct.useEffect)(()=>{let b=s.current;return()=>{for(let h of b.values())window.clearTimeout(h);b.clear()}},[s]),{runPrompt:d,cancelPrompt:f,runMany:p,resumeTasks:y}}var rt=require("react");function kp(e){let[t,n]=(0,rt.useState)(null),[o,r]=(0,rt.useState)([]),i=(0,rt.useRef)(null),a=(0,rt.useCallback)(l=>{let d={...l,profiles:Array.isArray(l?.profiles)?l.profiles:[],models:Array.isArray(l?.models)?l.models:[],sizes:Array.isArray(l?.sizes)?l.sizes:[],qualities:Array.isArray(l?.qualities)?l.qualities:[],issues:Array.isArray(l?.issues)?l.issues:[]};n(d),i.current=d,r(d.issues)},[]),s=(0,rt.useCallback)(async()=>{try{a(await ad())}catch(l){r([ue(l)])}},[a]);(0,rt.useEffect)(()=>{s()},[s]);let c=(0,rt.useCallback)(async l=>{try{let d=await Tr(l);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ue(d)}`)}},[a,e]),u=(0,rt.useCallback)(async l=>{try{let d=await md(l);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ue(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:u,replaceConfig:a}}var En=require("react");function Mo(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Sp(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(Mo(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(Mo(r)),Mo(i)):null},restore(r){let i=o.shift();return i?(n.push(Mo(r)),Mo(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Cp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,En.useRef)(Sp(50)),a=(0,En.useCallback)(f=>{i.current.record({nodes:e.current,edges:t.current},f)},[e,t]),s=(0,En.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,En.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),u=(0,En.useCallback)(()=>i.current.clear(),[]),l=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:c,clear:u,canUndo:l,canRestore:d}}var Ep=require("react");function kv(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Mp(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:u,hasPreview:l}=e;(0,Ep.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&l){u();return}if(kv(f.target))return;let p=f.ctrlKey||f.metaKey,y=f.key.toLowerCase();if(p&&y==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(h=>h.some(g=>!g.selected)?h.map(g=>({...g,selected:!0})):h);return}if(p&&y==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(p&&y==="y"){f.preventDefault(),s();return}if(p&&y==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,c,u,l,e])}var Et=require("react");var Sv=2500;function Np({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:u,defaultsRef:l,onRestored:d}){let f=(0,Et.useRef)(null),p=(0,Et.useRef)(()=>{});p.current=()=>{f.current&&(window.clearTimeout(f.current),f.current=null),n.current.length&&Aa(n.current,o.current).catch(()=>{})},(0,Et.useEffect)(()=>{e.length&&(f.current&&window.clearTimeout(f.current),f.current=window.setTimeout(()=>{f.current=null,Aa(n.current,o.current).catch(()=>{})},Sv))},[e,t,n,o]),(0,Et.useEffect)(()=>{let h=()=>{document.visibilityState==="hidden"&&p.current()},g=()=>p.current();return document.addEventListener("visibilitychange",h),window.addEventListener("pagehide",g),()=>{document.removeEventListener("visibilitychange",h),window.removeEventListener("pagehide",g),p.current()}},[]),(0,Et.useEffect)(()=>{let h=!1;return(async()=>{let v=n.current;try{let m=await pd();if(h)return;if(!m.empty&&m.nodes?.length&&!n.current.length){let x=Pa(m.nodes,m.edges??[],[],l.current);r(x.nodes),i(x.edges),v=x.nodes,s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${m.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`),x.dropped.length&&s(`${x.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${x.dropped[0]?.reason??""}\uFF09`)}}catch{}h||d?.(v)})(),()=>{h=!0}},[r,i,s,n,d]);let y=(0,Et.useCallback)(async h=>{try{let g=await dd(h,n.current,o.current);u(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${g.name||h}\u300D`)}catch(g){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ue(g)}`)}},[n,o,u,c]),b=(0,Et.useCallback)(async h=>{try{let g=await fd(h),v=Pa(g.nodes,g.edges,g.missing??[],l.current);r(v.nodes),i(v.edges),u(),c(`\u5DF2\u52A0\u8F7D\u300C${g.name||h}\u300D`),v.dropped.length&&c(`${v.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${v.dropped[0]?.reason??""}\uFF09`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(g){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${ue(g)}`)}},[r,i,a,u,c,l]);return{doSave:y,doLoad:b}}var pe=require("react/jsx-runtime");function fs(){let[e,t,n]=Ou([]),[o,r,i]=Lu([]),[a,s]=(0,ae.useState)([]),[c,u]=(0,ae.useState)(null),[l,d]=(0,ae.useState)(null),[f,p]=(0,ae.useState)(null),[y,b]=(0,ae.useState)(1),[h,g]=(0,ae.useState)(!1),[v,m]=(0,ae.useState)(()=>kf()),[x,S]=(0,ae.useState)([]),[C,k]=(0,ae.useState)(null),[M,I]=(0,ae.useState)(()=>Dd()),[L,R]=(0,ae.useState)(!1),[T,P]=(0,ae.useState)([]),w=(0,ae.useRef)(null),_=(0,ae.useRef)(null),N=(0,ae.useRef)(null),E=(0,ae.useRef)(null),z=(0,ae.useRef)(null),D=(0,ae.useRef)(new Map),F=(0,ae.useRef)(new Map),W=(0,ae.useRef)(e),V=(0,ae.useRef)(o);W.current=e,V.current=o;let Q=(0,ae.useCallback)(A=>{s(q=>[...q.slice(-8),A])},[]),X=(0,ae.useCallback)(A=>{u(A),window.setTimeout(()=>u(q=>q===A?null:q),2600)},[]),{config:K,configIssues:le,configRef:B,switchProfile:O,switchModel:U,replaceConfig:ne}=kp(X),oe=(0,ae.useRef)({});oe.current={size:B.current?.sizes[0]?.value,quality:B.current?.qualities[0]};let J=(0,ae.useRef)(!1);(0,ae.useEffect)(()=>{!K||J.current||!(!K.provider?.apiKeyConfigured&&(K.source==="plugin"||K.issues.length>0))||(J.current=!0,d({kind:"settings"}))},[K]);let Y=Cp({nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,flash:X}),{addImages:ce,replaceImage:G,openPreview:re,addDataUrl:fe}=xp({nodesRef:W,setNodes:t,createPosition:()=>_o.current(),log:Q,flash:X,setPreview:p,record:Y.record}),{runPrompt:Ce,cancelPrompt:Te,runMany:Ke,resumeTasks:it}=vp({nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,log:Q,flash:X,taskIdsRef:F,timersRef:D}),{doSave:nn,doLoad:Mt}=Np({nodes:e,edges:o,nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,instanceRef:N,log:Q,flash:X,closeDialog:()=>d(null),defaultsRef:oe,onRestored:it}),Nt=of(e),je=(0,ae.useMemo)(()=>({animated:!h}),[h]),Xe=(0,ae.useMemo)(()=>nd(e,o),[e,o]),at=(0,ae.useMemo)(()=>e.map(A=>{if(A.type==="image"){let q=Xe.refCounts.get(A.data.registryId)??0;return(A.data.refCount??0)===q?A:{...A,data:{...A.data,refCount:q}}}if(A.type==="group"){let q=Xe.groupCounts.get(A.id)??0,j=Xe.groupSizes.get(A.id)??0,se=Xe.groupDups.get(A.id)??0;return A.data.imageCount===q&&A.data.totalSize===j&&A.data.duplicateCount===se?A:{...A,data:{...A.data,imageCount:q,totalSize:j,duplicateCount:se}}}return A}),[e,Xe]),st=e.filter(A=>A.type==="prompt"),Mn=st.filter(A=>A.data.status==="queued"||A.data.status==="running").map(A=>A.id),on=st.filter(A=>(A.data.prompt??"").trim()&&A.data.status!=="running"&&A.data.status!=="queued").map(A=>A.id),No=(0,ae.useCallback)((A,q)=>{t(j=>ot(j,A,q))},[t]),Bt=(0,ae.useCallback)(A=>{Y.record();let q=new Set(A);t(j=>j.filter(se=>!q.has(se.id))),r(j=>j.filter(se=>!q.has(se.source)&&!q.has(se.target)))},[t,r,Y]),Nn=(0,ae.useCallback)(A=>{let q=W.current.find(j=>j.id===A);Bt([A]),q?.type==="image"&&ld(q.data.registryId).catch(()=>{})},[Bt]),$e=(0,ae.useCallback)(()=>{let A=N.current,q=w.current?.getBoundingClientRect(),j=A&&q?A.screenToFlowPosition({x:q.width/2,y:q.height/2}):{x:140,y:120},{position:se,next:ke}=Ku(j,z.current);return z.current=ke,se},[]),_o=(0,ae.useRef)($e);_o.current=$e;let Io=(0,ae.useCallback)(A=>{let q=ju(A??$e(),{size:oe.current.size??"1024x1024",quality:oe.current.quality??"high",outputDir:""});Y.record(),t(j=>[...j,q])},[$e,t,B,Y]),Po=(0,ae.useCallback)(A=>{Y.record(),t(q=>[...q,Qu(A??$e())])},[$e,t,Y]),Jr=(0,ae.useCallback)(()=>{r(za(W.current,V.current)),X("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,X]),ei=(0,ae.useCallback)(()=>{let A=new Set(x);if(!A.size){X("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}Y.record(),r(rd(W.current,V.current,A)),X("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[x,r,X,Y]),ti=(0,ae.useCallback)(()=>{let A=new Set(x),q=B.current?.defaultOutputDir??"";A.size&&(Y.record(),t(j=>j.map(se=>se.type==="prompt"&&A.has(se.id)?{...se,data:{...se.data,outputDir:q}}:se)),X(q?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${q}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[x,t,X,Y]),ni=(0,ae.useCallback)(()=>{let A=N.current;if(!A)return;let q=W.current.filter(se=>x.includes(se.id)),j=q.length?q:W.current;if(!j.length){X("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}A.fitView({nodes:j,padding:.25,duration:300,maxZoom:1.6})},[x,X]),oi=(0,ae.useCallback)(()=>{let A=new Set(x);if(!A.size){X("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}Y.record({preserveRedo:!0}),t(q=>_d(q,V.current,A))},[x,t,X,Y,V]),{dropIntent:ri,dragHandlers:ii,startToolbarDrag:ai,dropChip:si}=ff({canvasRef:w,modalOpen:!!l||!!f,getCreatePosition:()=>$e(),toFlowPosition:A=>N.current?N.current.screenToFlowPosition(A):$e(),onDropFiles:(A,q)=>void ce(A,q),onDropNode:(A,q)=>{A==="prompt"?Io(q):Po(q)}});(0,ae.useEffect)(()=>{let A=q=>{let j=q.target;if(j&&(j.tagName==="TEXTAREA"||j.tagName==="INPUT"))return;let se=Array.from(q.clipboardData?.files??[]);se.length&&(q.preventDefault(),ce(se,$e()))};return window.addEventListener("paste",A),()=>window.removeEventListener("paste",A)},[ce,$e]),Mp({nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,selectedIds:x,selectedEdgeId:C,onDeleteNodes:Bt,onDeleteEdge:A=>{Y.record(),r(q=>q.filter(j=>j.id!==A)),k(null)},onUndo:Y.undo,onRestore:Y.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let rn=(0,ae.useCallback)(A=>q=>{let j=W.current.find(se=>se.id===q);if(!j||j.type!=="image"||!j.data.url){X("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:A,target:{nodeId:q,src:j.data.url,name:j.data.name}})},[W,X]),_t=(0,ae.useMemo)(()=>({cropImage:rn("crop"),splitImage:rn("split"),upscaleImage:rn("upscale"),maskImage:rn("mask")}),[rn]),zo=(0,ae.useCallback)(A=>{Y.record(),t(q=>q.map(j=>j.id===A&&j.type==="image"?{...j,data:{...j.data,maskDataUrl:void 0}}:j)),X("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,Y,X]),{nodeMenu:It,boxRect:Pt,closeMenu:li,setNodeMenu:Ro}=mf({rootRef:_,canvasRef:w,instanceRef:N,setNodes:t,modalOpen:!!l||!!f}),_n=It?e.find(A=>A.id===It.nodeId):void 0,Do=_n?gf(_n.type??"image",{hasUrl:_n.type==="image"?!!_n.data.url:!1,selectedCount:x.length}):[],ci=(0,ae.useCallback)(A=>{let q=It;if(Ro(null),!q)return;let j=q.nodeId;switch(A){case"delete-selection":Bt(x),S([]);break;case"preview":re(j);break;case"crop":_t.cropImage(j);break;case"upscale":_t.upscaleImage(j);break;case"split":_t.splitImage(j);break;case"mask":_t.maskImage(j);break;case"replace":G(j);break;case"run":Ce(j);break;case"copy-prompt":{let se=W.current.find(ke=>ke.id===j);if(se?.type!=="prompt")break;navigator.clipboard.writeText(se.data.prompt).then(()=>X("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD")).catch(()=>X("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE"));break}case"delete":Nn(j);break;default:break}},[It,Ro,Bt,re,_t,G,Ce,Nn,x,X]),ui=(0,ae.useMemo)(()=>({updatePrompt:No,runPrompt:A=>{Ce(A)},cancelPrompt:A=>{Te(A)},deleteNode:Nn,zoomImage:re,replaceImage:G,..._t,clearMask:zo,config:K}),[No,Ce,Te,Nn,re,G,_t,zo,K]);return(0,pe.jsxs)(qa.Provider,{value:ui,children:[(0,pe.jsx)("style",{children:Qd}),(0,pe.jsxs)("div",{className:"im-root",ref:_,children:[(0,pe.jsx)(af,{config:K,promptCount:st.length,runnableIds:on,busyIds:Mn.length,snapEnabled:M,canvasLocked:L,cost:Nt,canUndo:Y.canUndo,canRestore:Y.canRestore,onUndo:Y.undo,onRestore:Y.restore,onAddPrompt:()=>Io(),onPickFiles:()=>E.current?.click(),onAddGroup:()=>Po(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:ai,onRun:Ke,onCancelAll:()=>Mn.forEach(A=>void Te(A)),onAutoConnect:Jr,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:A=>void O(A),onSwitchModel:A=>void U(A),onOpenSave:async()=>{try{let A=await Ta();d({kind:"save",workflows:A.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let A=await Ta();d({kind:"load",workflows:A.workflows})}catch(A){X(`\u8BFB\u53D6\u5931\u8D25\uFF1A${ue(A)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),le.length?(0,pe.jsx)(_f,{tone:"error",action:(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,pe.jsx)("ul",{className:"im-banner-list",children:le.map(A=>(0,pe.jsx)("li",{children:A},A))})}):null,(0,pe.jsxs)("div",{className:`im-canvas${ri?" is-drop-active":""}`,ref:w,...ii,children:[(0,pe.jsx)(Cf,{selectedCount:x.length,selectedPromptCount:x.filter(A=>e.some(q=>q.id===A&&q.type==="prompt")).length,selectedRunnableIds:on.filter(A=>x.includes(A)),pickingOutputDir:!1,onRunSelected:()=>Ke(on.filter(A=>x.includes(A))),onAutoLayout:oi,onAutoConnectSelected:ei,onSetOutputDir:ti,onDeleteSelected:()=>{Bt(x),S([])}}),(0,pe.jsx)(Ga.Provider,{value:h,children:(0,pe.jsxs)(Au,{nodes:at,edges:o,nodeTypes:Jd,onNodesChange:A=>{let q=Ad(A,W.current,M);P(q.guides),n(q.changes)},onEdgesChange:A=>i(A),onConnect:wp(r),isValidConnection:A=>ed(W.current,V.current,{source:String(A.source??""),target:String(A.target??"")}),onInit:A=>{N.current=A},onNodeDragStop:(A,q)=>{if(P([]),!M)return;let j=vo(q),se=W.current.filter(Wt=>Wt.id!==q.id).map(vo),ke=Lr(j,se);ke.x===j.x&&ke.y===j.y||t(Wt=>Wt.map(an=>an.id===q.id?{...an,position:{x:ke.x,y:ke.y}}:an))},onMove:(A,q)=>{b(q.zoom),g(j=>ef(j,q.zoom))},onEdgeDoubleClick:(A,q)=>{Y.record(),r(j=>j.filter(se=>se.id!==q.id)),k(null)},onSelectionChange:({nodes:A,edges:q})=>{let j=A.map(ke=>ke.id);S(ke=>ke.length===j.length&&ke.every((Wt,an)=>Wt===j[an])?ke:j);let se=q.length===1?q[0].id:null;k(ke=>ke===se?ke:se)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:je,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!L,nodesConnectable:!L,elementsSelectable:!L,panOnDrag:!L,selectionOnDrag:!1,selectionKeyCode:null,multiSelectionKeyCode:["Meta","Control"],children:[(0,pe.jsx)(Hu,{variant:bt.Dots,gap:18,size:1.4}),v?(0,pe.jsx)(Fu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:A=>A.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,pe.jsx)(mp,{guides:T})]})}),(0,pe.jsx)(sf,{zoom:y,snapEnabled:M,canvasLocked:L,minimapOpen:v,onZoomIn:()=>void N.current?.zoomIn({duration:180}),onZoomOut:()=>void N.current?.zoomOut({duration:180}),onFitView:()=>N.current?.fitView({padding:.2,duration:300}),onFocusSelected:ni,onToggleSnap:()=>I(A=>{let q=!A;return Td(q),q||P([]),X(q?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),q}),onToggleLock:()=>R(A=>{let q=!A;return X(q?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),q}),onToggleMinimap:()=>m(A=>{let q=!A;return Sf(q),q}),onOpenHelp:()=>d({kind:"help"})}),Pt&&N.current&&w.current?(()=>{let A=N.current.flowToScreenPosition({x:Pt.x,y:Pt.y}),q=N.current.flowToScreenPosition({x:Pt.x+Pt.width,y:Pt.y+Pt.height}),j=w.current.getBoundingClientRect();return(0,pe.jsx)("div",{className:"im-marquee",style:{left:A.x-j.left,top:A.y-j.top,width:q.x-A.x,height:q.y-A.y}})})():null,e.length===0?(0,pe.jsx)(Ef,{}):null,(0,pe.jsx)(Mf,{logs:a}),(0,pe.jsx)(Nf,{text:c}),si]}),It&&Do.length>0?(0,pe.jsx)(wf,{x:It.x,y:It.y,items:Do,onPick:ci,onClose:li}):null,(0,pe.jsx)("input",{ref:E,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:A=>{let q=Array.from(A.target.files??[]);A.target.value="",ce(q,$e())}}),f?(0,pe.jsx)(Ur,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>p(null)}):null,l?.kind==="save"?(0,pe.jsx)(Hf,{workflows:l.workflows??[],imagoraRoot:K?.imagoraRoot,onCancel:()=>d(null),onSubmit:A=>void nn(A)}):null,l?.kind==="load"?(0,pe.jsx)(Bf,{workflows:l.workflows??[],imagoraRoot:K?.imagoraRoot,onCancel:()=>d(null),onPick:A=>void Mt(A)}):null,l?.kind==="crop"&&l.target?(0,pe.jsx)(Jf,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(A,q)=>{Y.record(),await fe(A,`${l.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),X(q)}}):null,l?.kind==="split"&&l.target?(0,pe.jsx)(cp,{src:l.target.src,onClose:()=>d(null),onConfirm:async A=>{Y.record();let q=l.target.name.replace(/\.[^.]+$/,""),j=$e();for(let[se,ke]of A.entries())await fe(ke.dataUrl,`${q}_${se+1}.png`,{x:j.x+se*160,y:j.y});d(null),X(`\u5DF2\u5207\u51FA ${A.length} \u5F20`)}}):null,l?.kind==="upscale"&&l.target?(0,pe.jsx)(pp,{src:l.target.src,onClose:()=>d(null),onConfirm:async(A,q)=>{Y.record(),await fe(A,`${l.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),X(q)}}):null,l?.kind==="mask"&&l.target?(0,pe.jsx)(op,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(A,q)=>{Y.record(),t(j=>j.map(se=>se.id===l.target.nodeId&&se.type==="image"?{...se,data:{...se.data,maskDataUrl:A}}:se)),d(null),X(q)}}):null,l?.kind==="help"?(0,pe.jsx)(Wf,{config:K,onClose:()=>d(null)}):null,l?.kind==="history"?(0,pe.jsx)(lp,{imagoraRoot:K?.imagoraRoot,onClose:()=>d(null),onImport:A=>{if(!A.length)return;Y.record();let q=$e(),j=A.map((se,ke)=>vn(se,{x:q.x+ke*172,y:q.y}));t(se=>[...se,...j]),X(`\u5DF2\u653E\u5165 ${j.length} \u5F20\u56FE`)}}):null,l?.kind==="import"?(0,pe.jsx)(gp,{sizes:K?.sizes??[],onCancel:()=>d(null),onConfirm:A=>{Y.record();let q=B.current,j=Sd(A,{sizes:q?.sizes??[],defaultQuality:q?.qualities[0]??"high",defaultOutputDir:""},$e());t(se=>[...se,...j]),d(null),X(`\u5DF2\u5EFA ${j.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,l?.kind==="settings"?(0,pe.jsx)(yp,{config:K,onClose:()=>d(null),onSaved:ne,onFlash:X}):null]})]})}var _p=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Dp=require("react/jsx-runtime"),Mv=["slots"],Rp="imagora";globalThis.__dshImagoraCanvas=fs;function Nv({size:e=16}){return(0,Dp.jsx)(Ka,{size:e,fill:"currentColor"})}function _v(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=_p,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(zp(),Pp)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Rp},fs)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Rp,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Nv)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
