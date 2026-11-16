window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var Lf=Object.create;var $o=Object.defineProperty;var $f=Object.getOwnPropertyDescriptor;var Hf=Object.getOwnPropertyNames;var Bf=Object.getPrototypeOf,Wf=Object.prototype.hasOwnProperty;var Ff=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ho=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Rs=(e,t)=>{for(var n in t)$o(e,n,{get:t[n],enumerable:!0})},Ds=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Hf(t))!Wf.call(e,r)&&r!==n&&$o(e,r,{get:()=>t[r],enumerable:!(o=$f(t,r))||o.enumerable});return e};var Ts=(e,t,n)=>(n=e!=null?Lf(Bf(e)):{},Ds(t||!e||!e.__esModule?$o(n,"default",{value:e,enumerable:!0}):n,e)),Vf=e=>Ds($o({},"__esModule",{value:!0}),e);var Pc=Ho(Ic=>{"use strict";var Yn=require("react");function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var i0=typeof Object.is=="function"?Object.is:r0,a0=Yn.useState,s0=Yn.useEffect,l0=Yn.useLayoutEffect,c0=Yn.useDebugValue;function u0(e,t){var n=t(),o=a0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return l0(function(){r.value=n,r.getSnapshot=t,Ta(r)&&i({inst:r})},[e,n,t]),s0(function(){return Ta(r)&&i({inst:r}),e(function(){Ta(r)&&i({inst:r})})},[e]),c0(n),n}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i0(e,n)}catch{return!0}}function d0(e,t){return t()}var p0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?d0:u0;Ic.useSyncExternalStore=Yn.useSyncExternalStore!==void 0?Yn.useSyncExternalStore:p0});var Rc=Ho((Pk,zc)=>{"use strict";zc.exports=Pc()});var Tc=Ho(Dc=>{"use strict";var Mr=require("react"),m0=Rc();function f0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var g0=typeof Object.is=="function"?Object.is:f0,h0=m0.useSyncExternalStore,b0=Mr.useRef,y0=Mr.useEffect,x0=Mr.useMemo,w0=Mr.useDebugValue;Dc.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=b0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=x0(function(){function u(m){if(!l){if(l=!0,d=m,m=o(m),r!==void 0&&a.hasValue){var h=a.value;if(r(h,m))return c=h}return c=m}if(h=c,g0(d,m))return h;var g=o(m);return r!==void 0&&r(h,g)?(d=m,h):(d=m,c=g)}var l=!1,d,c,p=n===void 0?null:n;return[function(){return u(t())},p===null?void 0:function(){return u(p())}]},[t,n,o,r]);var s=h0(e,i[0],i[1]);return y0(function(){a.hasValue=!0,a.value=s},[s]),w0(s),s}});var Oc=Ho((Rk,Ac)=>{"use strict";Ac.exports=Tc()});var cf={};Rs(cf,{primitives:()=>w1});function x1(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function w1(){if(ui)return ui;let e=require(lf),t=x1(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${lf}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return ui=t,ui}var lf,ui,uf=Ff(()=>{"use strict";lf="@deepseek-ai/dsh-client-ui-primitives",ui=null});var N1={};Rs(N1,{apply:()=>C1,inject:()=>v1});module.exports=Vf(N1);var ae=require("react");var H=require("react/jsx-runtime"),$=require("react");function _e(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=_e(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Gf={value:()=>{}};function an(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Bo(n)}function Bo(e){this._=e}function Xf(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Bo.prototype=an.prototype={constructor:Bo,on:function(e,t){var n=this._,o=Xf(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=qf(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=As(n[r],e.name,t);else if(t==null)for(r in n)n[r]=As(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Bo(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function qf(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function As(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Gf,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var Ci="http://www.w3.org/1999/xhtml",Os={svg:"http://www.w3.org/2000/svg",xhtml:Ci,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function to(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Os.hasOwnProperty(t)?{space:Os[t],local:e}:e}function Uf(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Ci&&t.documentElement.namespaceURI===Ci?t.createElement(e):t.createElementNS(n,e)}}function Yf(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Ls(e){var t=to(e);return(t.local?Yf:Uf)(t)}function Zf(){}function Fo(e){return e==null?Zf:function(){return this.querySelector(e)}}function Kf(e){typeof e!="function"&&(e=Fo(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),u,l,d=0;d<a;++d)(u=i[d])&&(l=e.call(u,u.__data__,d,i))&&("__data__"in u&&(l.__data__=u.__data__),s[d]=l);return new et(o,this._parents)}function jf(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Qf(){return[]}function Mi(e){return e==null?Qf:function(){return this.querySelectorAll(e)}}function Jf(e){return function(){return jf(e.apply(this,arguments))}}function eg(e){typeof e=="function"?e=Jf(e):e=Mi(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,u,l=0;l<s;++l)(u=a[l])&&(o.push(e.call(u,u.__data__,l,a)),r.push(u));return new et(o,r)}function Ei(e){return function(){return this.matches(e)}}function $s(e){return function(t){return t.matches(e)}}var tg=Array.prototype.find;function ng(e){return function(){return tg.call(this.children,e)}}function og(){return this.firstElementChild}function rg(e){return this.select(e==null?og:ng(typeof e=="function"?e:$s(e)))}var ig=Array.prototype.filter;function ag(){return Array.from(this.children)}function sg(e){return function(){return ig.call(this.children,e)}}function lg(e){return this.selectAll(e==null?ag:sg(typeof e=="function"?e:$s(e)))}function cg(e){typeof e!="function"&&(e=Ei(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],u,l=0;l<a;++l)(u=i[l])&&e.call(u,u.__data__,l,i)&&s.push(u);return new et(o,this._parents)}function Hs(e){return new Array(e.length)}function ug(){return new et(this._enter||this._groups.map(Hs),this._parents)}function Wo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Wo.prototype={constructor:Wo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function dg(e){return function(){return e}}function pg(e,t,n,o,r,i){for(var a=0,s,u=t.length,l=i.length;a<l;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new Wo(e,i[a]);for(;a<u;++a)(s=t[a])&&(r[a]=s)}function mg(e,t,n,o,r,i,a){var s,u,l=new Map,d=t.length,c=i.length,p=new Array(d),m;for(s=0;s<d;++s)(u=t[s])&&(p[s]=m=a.call(u,u.__data__,s,t)+"",l.has(m)?r[s]=u:l.set(m,u));for(s=0;s<c;++s)m=a.call(e,i[s],s,i)+"",(u=l.get(m))?(o[s]=u,u.__data__=i[s],l.delete(m)):n[s]=new Wo(e,i[s]);for(s=0;s<d;++s)(u=t[s])&&l.get(p[s])===u&&(r[s]=u)}function fg(e){return e.__data__}function gg(e,t){if(!arguments.length)return Array.from(this,fg);var n=t?mg:pg,o=this._parents,r=this._groups;typeof e!="function"&&(e=dg(e));for(var i=r.length,a=new Array(i),s=new Array(i),u=new Array(i),l=0;l<i;++l){var d=o[l],c=r[l],p=c.length,m=hg(e.call(d,d&&d.__data__,l,o)),h=m.length,g=s[l]=new Array(h),y=a[l]=new Array(h),b=u[l]=new Array(p);n(d,c,g,y,b,m,t);for(var w=0,f=0,v,S;w<h;++w)if(v=g[w]){for(w>=f&&(f=w+1);!(S=y[f])&&++f<h;);v._next=S||null}}return a=new et(a,o),a._enter=s,a._exit=u,a}function hg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function bg(){return new et(this._exit||this._groups.map(Hs),this._parents)}function yg(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function xg(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),u=0;u<a;++u)for(var l=n[u],d=o[u],c=l.length,p=s[u]=new Array(c),m,h=0;h<c;++h)(m=l[h]||d[h])&&(p[h]=m);for(;u<r;++u)s[u]=n[u];return new et(s,this._parents)}function wg(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function vg(e){e||(e=kg);function t(c,p){return c&&p?e(c.__data__,p.__data__):!c-!p}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,u=r[i]=new Array(s),l,d=0;d<s;++d)(l=a[d])&&(u[d]=l);u.sort(t)}return new et(r,this._parents).order()}function kg(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Sg(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Cg(){return Array.from(this)}function Ng(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function Mg(){let e=0;for(let t of this)++e;return e}function Eg(){return!this.node()}function _g(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function Ig(e){return function(){this.removeAttribute(e)}}function Pg(e){return function(){this.removeAttributeNS(e.space,e.local)}}function zg(e,t){return function(){this.setAttribute(e,t)}}function Rg(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Dg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Tg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Ag(e,t){var n=to(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?Pg:Ig:typeof t=="function"?n.local?Tg:Dg:n.local?Rg:zg)(n,t))}function Bs(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Og(e){return function(){this.style.removeProperty(e)}}function Lg(e,t,n){return function(){this.style.setProperty(e,t,n)}}function $g(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Hg(e,t,n){return arguments.length>1?this.each((t==null?Og:typeof t=="function"?$g:Lg)(e,t,n??"")):sn(this.node(),e)}function sn(e,t){return e.style.getPropertyValue(t)||Bs(e).getComputedStyle(e,null).getPropertyValue(t)}function Bg(e){return function(){delete this[e]}}function Wg(e,t){return function(){this[e]=t}}function Fg(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Vg(e,t){return arguments.length>1?this.each((t==null?Bg:typeof t=="function"?Fg:Wg)(e,t)):this.node()[e]}function Ws(e){return e.trim().split(/^|\s+/)}function _i(e){return e.classList||new Fs(e)}function Fs(e){this._node=e,this._names=Ws(e.getAttribute("class")||"")}Fs.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Vs(e,t){for(var n=_i(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function Gs(e,t){for(var n=_i(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Gg(e){return function(){Vs(this,e)}}function Xg(e){return function(){Gs(this,e)}}function qg(e,t){return function(){(t.apply(this,arguments)?Vs:Gs)(this,e)}}function Ug(e,t){var n=Ws(e+"");if(arguments.length<2){for(var o=_i(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?qg:t?Gg:Xg)(n,t))}function Yg(){this.textContent=""}function Zg(e){return function(){this.textContent=e}}function Kg(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function jg(e){return arguments.length?this.each(e==null?Yg:(typeof e=="function"?Kg:Zg)(e)):this.node().textContent}function Qg(){this.innerHTML=""}function Jg(e){return function(){this.innerHTML=e}}function eh(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function th(e){return arguments.length?this.each(e==null?Qg:(typeof e=="function"?eh:Jg)(e)):this.node().innerHTML}function nh(){this.nextSibling&&this.parentNode.appendChild(this)}function oh(){return this.each(nh)}function rh(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ih(){return this.each(rh)}function ah(e){var t=typeof e=="function"?e:Ls(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function sh(){return null}function lh(e,t){var n=typeof e=="function"?e:Ls(e),o=t==null?sh:typeof t=="function"?t:Fo(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function ch(){var e=this.parentNode;e&&e.removeChild(this)}function uh(){return this.each(ch)}function dh(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ph(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function mh(e){return this.select(e?ph:dh)}function fh(e){return arguments.length?this.property("__data__",e):this.node().__data__}function gh(e){return function(t){e.call(this,t,this.__data__)}}function hh(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function bh(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function yh(e,t,n){return function(){var o=this.__on,r,i=gh(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function xh(e,t,n){var o=hh(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var u=0,l=s.length,d;u<l;++u)for(r=0,d=s[u];r<i;++r)if((a=o[r]).type===d.type&&a.name===d.name)return d.value}return}for(s=t?yh:bh,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function Xs(e,t,n){var o=Bs(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function wh(e,t){return function(){return Xs(this,e,t)}}function vh(e,t){return function(){return Xs(this,e,t.apply(this,arguments))}}function kh(e,t){return this.each((typeof t=="function"?vh:wh)(e,t))}function*Sh(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var qs=[null];function et(e,t){this._groups=e,this._parents=t}function ln(){return new et([[document.documentElement]],qs)}function Ch(){return this}et.prototype=ln.prototype={constructor:et,select:Kf,selectAll:eg,selectChild:rg,selectChildren:lg,filter:cg,data:gg,enter:ug,exit:bg,join:yg,merge:xg,selection:Ch,order:wg,sort:vg,call:Sg,nodes:Cg,node:Ng,size:Mg,empty:Eg,each:_g,attr:Ag,style:Hg,property:Vg,classed:Ug,text:jg,html:th,raise:oh,lower:ih,append:ah,insert:lh,remove:uh,clone:mh,datum:fh,on:xh,dispatch:kh,[Symbol.iterator]:Sh};function He(e){return typeof e=="string"?new et([[document.querySelector(e)]],[document.documentElement]):new et([[e]],qs)}var Nh=0;function Mh(){return new Ni}function Ni(){this._="@"+(++Nh).toString(36)}Ni.prototype=Mh.prototype={constructor:Ni,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function Eh(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ue(e,t){if(e=Eh(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var _h={passive:!1},no={capture:!0,passive:!1};function Ii(e){e.stopImmediatePropagation()}function In(e){e.preventDefault(),e.stopImmediatePropagation()}function zi(e){var t=e.document.documentElement,n=He(e).on("dragstart.drag",In,no);"onselectstart"in t?n.on("selectstart.drag",In,no):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Ri(e,t){var n=e.document.documentElement,o=He(e).on("dragstart.drag",null);t&&(o.on("click.drag",In,no),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Vo=e=>()=>e;function Pi(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:u,dy:l,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:u,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:d}})}Pi.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Ih(e){return!e.ctrlKey&&!e.button}function Ph(){return this.parentNode}function zh(e,t){return t??{x:e.x,y:e.y}}function Rh(){return navigator.maxTouchPoints||"ontouchstart"in this}function Di(){var e=Ih,t=Ph,n=zh,o=Rh,r={},i=an("start","drag","end"),a=0,s,u,l,d,c=0;function p(v){v.on("mousedown.drag",m).filter(o).on("touchstart.drag",y).on("touchmove.drag",b,_h).on("touchend.drag touchcancel.drag",w).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(v,S){if(!(d||!e.call(this,v,S))){var k=f(this,t.call(this,v,S),v,S,"mouse");k&&(He(v.view).on("mousemove.drag",h,no).on("mouseup.drag",g,no),zi(v.view),Ii(v),l=!1,s=v.clientX,u=v.clientY,k("start",v))}}function h(v){if(In(v),!l){var S=v.clientX-s,k=v.clientY-u;l=S*S+k*k>c}r.mouse("drag",v)}function g(v){He(v.view).on("mousemove.drag mouseup.drag",null),Ri(v.view,l),In(v),r.mouse("end",v)}function y(v,S){if(e.call(this,v,S)){var k=v.changedTouches,N=t.call(this,v,S),M=k.length,E,L;for(E=0;E<M;++E)(L=f(this,N,v,S,k[E].identifier,k[E]))&&(Ii(v),L("start",v,k[E]))}}function b(v){var S=v.changedTouches,k=S.length,N,M;for(N=0;N<k;++N)(M=r[S[N].identifier])&&(In(v),M("drag",v,S[N]))}function w(v){var S=v.changedTouches,k=S.length,N,M;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),N=0;N<k;++N)(M=r[S[N].identifier])&&(Ii(v),M("end",v,S[N]))}function f(v,S,k,N,M,E){var L=i.copy(),R=Ue(E||k,S),B,D,x;if((x=n.call(v,new Pi("beforestart",{sourceEvent:k,target:p,identifier:M,active:a,x:R[0],y:R[1],dx:0,dy:0,dispatch:L}),N))!=null)return B=x.x-R[0]||0,D=x.y-R[1]||0,function _(I,C,P){var A=R,V;switch(I){case"start":r[M]=_,V=a++;break;case"end":delete r[M],--a;case"drag":R=Ue(P||C,S),V=a;break}L.call(I,v,new Pi(I,{sourceEvent:C,subject:x,target:p,identifier:M,active:V,x:R[0]+B,y:R[1]+D,dx:R[0]-A[0],dy:R[1]-A[1],dispatch:L}),N)}}return p.filter=function(v){return arguments.length?(e=typeof v=="function"?v:Vo(!!v),p):e},p.container=function(v){return arguments.length?(t=typeof v=="function"?v:Vo(v),p):t},p.subject=function(v){return arguments.length?(n=typeof v=="function"?v:Vo(v),p):n},p.touchable=function(v){return arguments.length?(o=typeof v=="function"?v:Vo(!!v),p):o},p.on=function(){var v=i.on.apply(i,arguments);return v===i?p:v},p.clickDistance=function(v){return arguments.length?(c=(v=+v)*v,p):Math.sqrt(c)},p}function Dn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function io(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Ft(){}var pn=.7,Rn=1/pn,Pn="\\s*([+-]?\\d+)\\s*",oo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",gt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Dh=/^#([0-9a-f]{3,8})$/,Th=new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),Ah=new RegExp(`^rgb\\(${gt},${gt},${gt}\\)$`),Oh=new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${oo}\\)$`),Lh=new RegExp(`^rgba\\(${gt},${gt},${gt},${oo}\\)$`),$h=new RegExp(`^hsl\\(${oo},${gt},${gt}\\)$`),Hh=new RegExp(`^hsla\\(${oo},${gt},${gt},${oo}\\)$`),Us={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dn(Ft,Rt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ys,formatHex:Ys,formatHex8:Bh,formatHsl:Wh,formatRgb:Zs,toString:Zs});function Ys(){return this.rgb().formatHex()}function Bh(){return this.rgb().formatHex8()}function Wh(){return rl(this).formatHsl()}function Zs(){return this.rgb().formatRgb()}function Rt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Dh.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Ks(t):n===3?new Le(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Go(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Go(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Th.exec(e))?new Le(t[1],t[2],t[3],1):(t=Ah.exec(e))?new Le(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Oh.exec(e))?Go(t[1],t[2],t[3],t[4]):(t=Lh.exec(e))?Go(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=$h.exec(e))?Js(t[1],t[2]/100,t[3]/100,1):(t=Hh.exec(e))?Js(t[1],t[2]/100,t[3]/100,t[4]):Us.hasOwnProperty(e)?Ks(Us[e]):e==="transparent"?new Le(NaN,NaN,NaN,0):null}function Ks(e){return new Le(e>>16&255,e>>8&255,e&255,1)}function Go(e,t,n,o){return o<=0&&(e=t=n=NaN),new Le(e,t,n,o)}function Hi(e){return e instanceof Ft||(e=Rt(e)),e?(e=e.rgb(),new Le(e.r,e.g,e.b,e.opacity)):new Le}function ao(e,t,n,o){return arguments.length===1?Hi(e):new Le(e,t,n,o??1)}function Le(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Dn(Le,ao,io(Ft,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new Le(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new Le(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Le(un(this.r),un(this.g),un(this.b),qo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:js,formatHex:js,formatHex8:Fh,formatRgb:Qs,toString:Qs}));function js(){return`#${cn(this.r)}${cn(this.g)}${cn(this.b)}`}function Fh(){return`#${cn(this.r)}${cn(this.g)}${cn(this.b)}${cn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Qs(){let e=qo(this.opacity);return`${e===1?"rgb(":"rgba("}${un(this.r)}, ${un(this.g)}, ${un(this.b)}${e===1?")":`, ${e})`}`}function qo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function un(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function cn(e){return e=un(e),(e<16?"0":"")+e.toString(16)}function Js(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ut(e,t,n,o)}function rl(e){if(e instanceof ut)return new ut(e.h,e.s,e.l,e.opacity);if(e instanceof Ft||(e=Rt(e)),!e)return new ut;if(e instanceof ut)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,u=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=u<.5?i+r:2-i-r,a*=60):s=u>0&&u<1?0:a,new ut(a,s,u,e.opacity)}function Yo(e,t,n,o){return arguments.length===1?rl(e):new ut(e,t,n,o??1)}function ut(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(ut,Yo,io(Ft,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new ut(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new ut(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Le(Ti(e>=240?e-240:e+120,r,o),Ti(e,r,o),Ti(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new ut(el(this.h),Xo(this.s),Xo(this.l),qo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=qo(this.opacity);return`${e===1?"hsl(":"hsla("}${el(this.h)}, ${Xo(this.s)*100}%, ${Xo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function el(e){return e=(e||0)%360,e<0?e+360:e}function Xo(e){return Math.max(0,Math.min(1,e||0))}function Ti(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var il=Math.PI/180,al=180/Math.PI,Uo=18,sl=.96422,ll=1,cl=.82521,ul=4/29,zn=6/29,dl=3*zn*zn,Vh=zn*zn*zn;function pl(e){if(e instanceof ht)return new ht(e.l,e.a,e.b,e.opacity);if(e instanceof zt)return fl(e);e instanceof Le||(e=Hi(e));var t=$i(e.r),n=$i(e.g),o=$i(e.b),r=Ai((.2225045*t+.7168786*n+.0606169*o)/ll),i,a;return t===n&&n===o?i=a=r:(i=Ai((.4360747*t+.3850649*n+.1430804*o)/sl),a=Ai((.0139322*t+.0971045*n+.7141733*o)/cl)),new ht(116*r-16,500*(i-r),200*(r-a),e.opacity)}function ml(e,t,n,o){return arguments.length===1?pl(e):new ht(e,t,n,o??1)}function ht(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Dn(ht,ml,io(Ft,{brighter(e){return new ht(this.l+Uo*(e??1),this.a,this.b,this.opacity)},darker(e){return new ht(this.l-Uo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=sl*Oi(t),e=ll*Oi(e),n=cl*Oi(n),new Le(Li(3.1338561*t-1.6168667*e-.4906146*n),Li(-.9787684*t+1.9161415*e+.033454*n),Li(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Ai(e){return e>Vh?Math.pow(e,1/3):e/dl+ul}function Oi(e){return e>zn?e*e*e:dl*(e-ul)}function Li(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function $i(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Gh(e){if(e instanceof zt)return new zt(e.h,e.c,e.l,e.opacity);if(e instanceof ht||(e=pl(e)),e.a===0&&e.b===0)return new zt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*al;return new zt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Zo(e,t,n,o){return arguments.length===1?Gh(e):new zt(e,t,n,o??1)}function zt(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function fl(e){if(isNaN(e.h))return new ht(e.l,0,0,e.opacity);var t=e.h*il;return new ht(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Dn(zt,Zo,io(Ft,{brighter(e){return new zt(this.h,this.c,this.l+Uo*(e??1),this.opacity)},darker(e){return new zt(this.h,this.c,this.l-Uo*(e??1),this.opacity)},rgb(){return fl(this).rgb()}}));var gl=-.14861,Bi=1.78277,Wi=-.29227,Ko=-.90649,ro=1.97294,tl=ro*Ko,nl=ro*Bi,ol=Bi*Wi-Ko*gl;function Xh(e){if(e instanceof dn)return new dn(e.h,e.s,e.l,e.opacity);e instanceof Le||(e=Hi(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(ol*o+tl*t-nl*n)/(ol+tl-nl),i=o-r,a=(ro*(n-r)-Wi*i)/Ko,s=Math.sqrt(a*a+i*i)/(ro*r*(1-r)),u=s?Math.atan2(a,i)*al-120:NaN;return new dn(u<0?u+360:u,s,r,e.opacity)}function jo(e,t,n,o){return arguments.length===1?Xh(e):new dn(e,t,n,o??1)}function dn(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Dn(dn,jo,io(Ft,{brighter(e){return e=e==null?Rn:Math.pow(Rn,e),new dn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?pn:Math.pow(pn,e),new dn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*il,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Le(255*(t+n*(gl*o+Bi*r)),255*(t+n*(Wi*o+Ko*r)),255*(t+n*(ro*o)),this.opacity)}}));function yl(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function qh(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return yl((n-o/t)*t,a,r,i,s)}}function Uh(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return yl((n-o/t)*t,r,i,a,s)}}var Jo=e=>()=>e;function xl(e,t){return function(n){return e+n*t}}function Yh(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function Xi(e,t){var n=t-e;return n?xl(e,n>180||n<-180?n-360*Math.round(n/360):n):Jo(isNaN(e)?t:e)}function Zh(e){return(e=+e)==1?Ye:function(t,n){return n-t?Yh(t,n,e):Jo(isNaN(t)?n:t)}}function Ye(e,t){var n=t-e;return n?xl(e,n):Jo(isNaN(e)?t:e)}var so=(function e(t){var n=Zh(t);function o(r,i){var a=n((r=ao(r)).r,(i=ao(i)).r),s=n(r.g,i.g),u=n(r.b,i.b),l=Ye(r.opacity,i.opacity);return function(d){return r.r=a(d),r.g=s(d),r.b=u(d),r.opacity=l(d),r+""}}return o.gamma=e,o})(1);function wl(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=ao(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(u){return s.r=o(u),s.g=r(u),s.b=i(u),s+""}}}var A1=wl(qh),O1=wl(Uh);function Kh(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function jh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qh(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=Tn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function Jh(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function dt(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function eb(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Tn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var Vi=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Fi=new RegExp(Vi.source,"g");function tb(e){return function(){return e}}function nb(e){return function(t){return e(t)+""}}function qi(e,t){var n=Vi.lastIndex=Fi.lastIndex=0,o,r,i,a=-1,s=[],u=[];for(e=e+"",t=t+"";(o=Vi.exec(e))&&(r=Fi.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,u.push({i:a,x:dt(o,r)})),n=Fi.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?u[0]?nb(u[0].x):tb(t):(t=u.length,function(l){for(var d=0,c;d<t;++d)s[(c=u[d]).i]=c.x(l);return s.join("")})}function Tn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Jo(t):(n==="number"?dt:n==="string"?(o=Rt(t))?(t=o,so):qi:t instanceof Rt?so:t instanceof Date?Jh:jh(t)?Kh:Array.isArray(t)?Qh:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?eb:dt)(e,t)}var hl=180/Math.PI,Gi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function vl(e,t,n,o,r,i){var a,s,u;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(u=e*n+t*o)&&(n-=e*u,o-=t*u),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,u/=s),e*o<t*n&&(e=-e,t=-t,u=-u,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*hl,skewX:Math.atan(u)*hl,scaleX:a,scaleY:s}}var Qo;function ob(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Gi:vl(t.a,t.b,t.c,t.d,t.e,t.f)}function rb(e){return e==null||(Qo||(Qo=document.createElementNS("http://www.w3.org/2000/svg","g")),Qo.setAttribute("transform",e),!(e=Qo.transform.baseVal.consolidate()))?Gi:(e=e.matrix,vl(e.a,e.b,e.c,e.d,e.e,e.f))}function kl(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,d,c,p,m,h){if(l!==c||d!==p){var g=m.push("translate(",null,t,null,n);h.push({i:g-4,x:dt(l,c)},{i:g-2,x:dt(d,p)})}else(c||p)&&m.push("translate("+c+t+p+n)}function a(l,d,c,p){l!==d?(l-d>180?d+=360:d-l>180&&(l+=360),p.push({i:c.push(r(c)+"rotate(",null,o)-2,x:dt(l,d)})):d&&c.push(r(c)+"rotate("+d+o)}function s(l,d,c,p){l!==d?p.push({i:c.push(r(c)+"skewX(",null,o)-2,x:dt(l,d)}):d&&c.push(r(c)+"skewX("+d+o)}function u(l,d,c,p,m,h){if(l!==c||d!==p){var g=m.push(r(m)+"scale(",null,",",null,")");h.push({i:g-4,x:dt(l,c)},{i:g-2,x:dt(d,p)})}else(c!==1||p!==1)&&m.push(r(m)+"scale("+c+","+p+")")}return function(l,d){var c=[],p=[];return l=e(l),d=e(d),i(l.translateX,l.translateY,d.translateX,d.translateY,c,p),a(l.rotate,d.rotate,c,p),s(l.skewX,d.skewX,c,p),u(l.scaleX,l.scaleY,d.scaleX,d.scaleY,c,p),l=d=null,function(m){for(var h=-1,g=p.length,y;++h<g;)c[(y=p[h]).i]=y.x(m);return c.join("")}}}var Sl=kl(ob,"px, ","px)","deg)"),Cl=kl(rb,", ",")",")"),ib=1e-12;function bl(e){return((e=Math.exp(e))+1/e)/2}function ab(e){return((e=Math.exp(e))-1/e)/2}function sb(e){return((e=Math.exp(2*e))-1)/(e+1)}var An=(function e(t,n,o){function r(i,a){var s=i[0],u=i[1],l=i[2],d=a[0],c=a[1],p=a[2],m=d-s,h=c-u,g=m*m+h*h,y,b;if(g<ib)b=Math.log(p/l)/t,y=function(N){return[s+N*m,u+N*h,l*Math.exp(t*N*b)]};else{var w=Math.sqrt(g),f=(p*p-l*l+o*g)/(2*l*n*w),v=(p*p-l*l-o*g)/(2*p*n*w),S=Math.log(Math.sqrt(f*f+1)-f),k=Math.log(Math.sqrt(v*v+1)-v);b=(k-S)/t,y=function(N){var M=N*b,E=bl(S),L=l/(n*w)*(E*sb(t*M+S)-ab(S));return[s+L*m,u+L*h,l*E/bl(t*M+S)]}}return y.duration=Math.abs(b)*1e3*t/Math.SQRT2,y}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,u=s*s;return e(a,s,u)},r})(Math.SQRT2,2,4);function Nl(e){return function(t,n){var o=e((t=Yo(t)).h,(n=Yo(n)).h),r=Ye(t.s,n.s),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var L1=Nl(Xi),$1=Nl(Ye);function Ml(e){return function(t,n){var o=e((t=Zo(t)).h,(n=Zo(n)).h),r=Ye(t.c,n.c),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var H1=Ml(Xi),B1=Ml(Ye);function El(e){return(function t(n){n=+n;function o(r,i){var a=e((r=jo(r)).h,(i=jo(i)).h),s=Ye(r.s,i.s),u=Ye(r.l,i.l),l=Ye(r.opacity,i.opacity);return function(d){return r.h=a(d),r.s=s(d),r.l=u(Math.pow(d,n)),r.opacity=l(d),r+""}}return o.gamma=t,o})(1)}var W1=El(Xi),F1=El(Ye);var On=0,co=0,lo=0,Il=1e3,er,uo,tr=0,mn=0,or=0,po=typeof performance=="object"&&performance.now?performance:Date,Pl=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function rr(){return mn||(Pl(lb),mn=po.now()+or)}function lb(){mn=0}function nr(){this._call=this._time=this._next=null}nr.prototype=Yi.prototype={constructor:nr,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?rr():+n)+(t==null?0:+t),!this._next&&uo!==this&&(uo?uo._next=this:er=this,uo=this),this._call=e,this._time=n,Ui()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ui())}};function Yi(e,t,n){var o=new nr;return o.restart(e,t,n),o}function cb(){rr(),++On;for(var e=er,t;e;)(t=mn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--On}function _l(){mn=(tr=po.now())+or,On=co=0;try{cb()}finally{On=0,db(),mn=0}}function ub(){var e=po.now(),t=e-tr;t>Il&&(or-=t,tr=e)}function db(){for(var e,t=er,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:er=n);uo=e,Ui(o)}function Ui(e){if(!On){co&&(co=clearTimeout(co));var t=e-mn;t>24?(e<1/0&&(co=setTimeout(_l,Math.ceil(e-po.now()-or)+1)),lo&&(lo=clearInterval(lo))):(lo||(tr=po.now(),lo=setInterval(ub,Il)),On=1,Pl(_l))}}function Zi(e,t,n){var o=new nr;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function Rl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Ki=3,X1=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(Ki),q1=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(Ki),U1=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(Ki),pb=Math.PI,Y1=pb/2;function ir(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var zl=4/11,Z1=6/11,K1=8/11,j1=3/4,Q1=9/11,J1=10/11,ek=15/16,tk=21/22,nk=63/64,ok=1/zl/zl;var ji=1.70158,rk=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(ji),ik=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(ji),ak=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(ji),Ln=2*Math.PI,Qi=1,Ji=.3,sk=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return t*ir(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Qi,Ji),lk=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return 1-t*ir(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Qi,Ji),ck=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Ln);function r(i){return((i=i*2-1)<0?t*ir(-i)*Math.sin((o-i)/n):2-t*ir(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Ln)},r.period=function(i){return e(t,i)},r})(Qi,Ji);var mb=an("start","end","cancel","interrupt"),fb=[],Al=0,Dl=1,ea=2,ar=3,Tl=4,ta=5,sr=6;function lr(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;gb(e,n,{name:t,index:o,group:r,on:mb,tween:fb,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Al})}function na(e,t){var n=pt(e,t);if(n.state>Al)throw new Error("too late; already scheduled");return n}function bt(e,t){var n=pt(e,t);if(n.state>ar)throw new Error("too late; already running");return n}function pt(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function gb(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=Yi(i,0,n.time);function i(l){n.state=Dl,n.timer.restart(a,n.delay,n.time),n.delay<=l&&a(l-n.delay)}function a(l){var d,c,p,m;if(n.state!==Dl)return u();for(d in o)if(m=o[d],m.name===n.name){if(m.state===ar)return Zi(a);m.state===Tl?(m.state=sr,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete o[d]):+d<t&&(m.state=sr,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete o[d])}if(Zi(function(){n.state===ar&&(n.state=Tl,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=ea,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ea){for(n.state=ar,r=new Array(p=n.tween.length),d=0,c=-1;d<p;++d)(m=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(r[++c]=m);r.length=c+1}}function s(l){for(var d=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(u),n.state=ta,1),c=-1,p=r.length;++c<p;)r[c].call(e,d);n.state===ta&&(n.on.call("end",e,e.__data__,n.index,n.group),u())}function u(){n.state=sr,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function mo(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>ea&&o.state<ta,o.state=sr,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function hb(e){return this.each(function(){mo(this,e)})}function bb(e,t){var n,o;return function(){var r=bt(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function yb(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=bt(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},u=0,l=r.length;u<l;++u)if(r[u].name===t){r[u]=s;break}u===l&&r.push(s)}i.tween=r}}function xb(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=pt(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?bb:yb)(n,e,t))}function oa(e,t,n){var o=e._id;return e.each(function(){var r=bt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return pt(r,o).value[t]}}function Ol(e,t){var n;return(typeof t=="number"?dt:t instanceof Rt?so:(n=Rt(t))?(t=n,so):qi)(e,t)}function wb(e){return function(){this.removeAttribute(e)}}function vb(e){return function(){this.removeAttributeNS(e.space,e.local)}}function kb(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function Sb(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function Cb(e,t,n){var o,r,i;return function(){var a,s=n(this),u;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),u=s+"",a===u?null:a===o&&u===r?i:(r=u,i=t(o=a,s)))}}function Nb(e,t,n){var o,r,i;return function(){var a,s=n(this),u;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),u=s+"",a===u?null:a===o&&u===r?i:(r=u,i=t(o=a,s)))}}function Mb(e,t){var n=to(e),o=n==="transform"?Cl:Ol;return this.attrTween(e,typeof t=="function"?(n.local?Nb:Cb)(n,o,oa(this,"attr."+e,t)):t==null?(n.local?vb:wb)(n):(n.local?Sb:kb)(n,o,t))}function Eb(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function _b(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Ib(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&_b(e,i)),n}return r._value=t,r}function Pb(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Eb(e,i)),n}return r._value=t,r}function zb(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=to(e);return this.tween(n,(o.local?Ib:Pb)(o,t))}function Rb(e,t){return function(){na(this,e).delay=+t.apply(this,arguments)}}function Db(e,t){return t=+t,function(){na(this,e).delay=t}}function Tb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Rb:Db)(t,e)):pt(this.node(),t).delay}function Ab(e,t){return function(){bt(this,e).duration=+t.apply(this,arguments)}}function Ob(e,t){return t=+t,function(){bt(this,e).duration=t}}function Lb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ab:Ob)(t,e)):pt(this.node(),t).duration}function $b(e,t){if(typeof t!="function")throw new Error;return function(){bt(this,e).ease=t}}function Hb(e){var t=this._id;return arguments.length?this.each($b(t,e)):pt(this.node(),t).ease}function Bb(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;bt(this,e).ease=n}}function Wb(e){if(typeof e!="function")throw new Error;return this.each(Bb(this._id,e))}function Fb(e){typeof e!="function"&&(e=Ei(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],u,l=0;l<a;++l)(u=i[l])&&e.call(u,u.__data__,l,i)&&s.push(u);return new Tt(o,this._parents,this._name,this._id)}function Vb(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var u=t[s],l=n[s],d=u.length,c=a[s]=new Array(d),p,m=0;m<d;++m)(p=u[m]||l[m])&&(c[m]=p);for(;s<o;++s)a[s]=t[s];return new Tt(a,this._parents,this._name,this._id)}function Gb(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Xb(e,t,n){var o,r,i=Gb(t)?na:bt;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function qb(e,t){var n=this._id;return arguments.length<2?pt(this.node(),n).on.on(e):this.each(Xb(n,e,t))}function Ub(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Yb(){return this.on("end.remove",Ub(this._id))}function Zb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Fo(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],u=s.length,l=i[a]=new Array(u),d,c,p=0;p<u;++p)(d=s[p])&&(c=e.call(d,d.__data__,p,s))&&("__data__"in d&&(c.__data__=d.__data__),l[p]=c,lr(l[p],t,n,p,l,pt(d,n)));return new Tt(i,this._parents,t,n)}function Kb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Mi(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var u=o[s],l=u.length,d,c=0;c<l;++c)if(d=u[c]){for(var p=e.call(d,d.__data__,c,u),m,h=pt(d,n),g=0,y=p.length;g<y;++g)(m=p[g])&&lr(m,t,n,g,p,h);i.push(p),a.push(d)}return new Tt(i,a,t,n)}var jb=ln.prototype.constructor;function Qb(){return new jb(this._groups,this._parents)}function Jb(e,t){var n,o,r;return function(){var i=sn(this,e),a=(this.style.removeProperty(e),sn(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function Ll(e){return function(){this.style.removeProperty(e)}}function ey(e,t,n){var o,r=n+"",i;return function(){var a=sn(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function ty(e,t,n){var o,r,i;return function(){var a=sn(this,e),s=n(this),u=s+"";return s==null&&(u=s=(this.style.removeProperty(e),sn(this,e))),a===u?null:a===o&&u===r?i:(r=u,i=t(o=a,s))}}function ny(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var u=bt(this,e),l=u.on,d=u.value[i]==null?s||(s=Ll(t)):void 0;(l!==n||r!==d)&&(o=(n=l).copy()).on(a,r=d),u.on=o}}function oy(e,t,n){var o=(e+="")=="transform"?Sl:Ol;return t==null?this.styleTween(e,Jb(e,o)).on("end.style."+e,Ll(e)):typeof t=="function"?this.styleTween(e,ty(e,o,oa(this,"style."+e,t))).each(ny(this._id,e)):this.styleTween(e,ey(e,o,t),n).on("end.style."+e,null)}function ry(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function iy(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&ry(e,a,n)),o}return i._value=t,i}function ay(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,iy(e,t,n??""))}function sy(e){return function(){this.textContent=e}}function ly(e){return function(){var t=e(this);this.textContent=t??""}}function cy(e){return this.tween("text",typeof e=="function"?ly(oa(this,"text",e)):sy(e==null?"":e+""))}function uy(e){return function(t){this.textContent=e.call(this,t)}}function dy(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&uy(r)),t}return o._value=e,o}function py(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,dy(e))}function my(){for(var e=this._name,t=this._id,n=$l(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,u,l=0;l<s;++l)if(u=a[l]){var d=pt(u,t);lr(u,e,n,l,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Tt(o,this._parents,e,n)}function fy(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},u={value:function(){--r===0&&i()}};n.each(function(){var l=bt(this,o),d=l.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(u)),l.on=t}),r===0&&i()})}var gy=0;function Tt(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function hy(e){return ln().transition(e)}function $l(){return++gy}var Dt=ln.prototype;Tt.prototype=hy.prototype={constructor:Tt,select:Zb,selectAll:Kb,selectChild:Dt.selectChild,selectChildren:Dt.selectChildren,filter:Fb,merge:Vb,selection:Qb,transition:my,call:Dt.call,nodes:Dt.nodes,node:Dt.node,size:Dt.size,empty:Dt.empty,each:Dt.each,on:qb,attr:Mb,attrTween:zb,style:oy,styleTween:ay,text:cy,textTween:py,remove:Yb,tween:xb,delay:Tb,duration:Lb,ease:Hb,easeVarying:Wb,end:fy,[Symbol.iterator]:Dt[Symbol.iterator]};var by={time:null,delay:0,duration:250,ease:Rl};function yy(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function xy(e){var t,n;e instanceof Tt?(t=e._id,e=e._name):(t=$l(),(n=by).time=rr(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,u,l=0;l<s;++l)(u=a[l])&&lr(u,e,t,l,a,n||yy(u,t));return new Tt(o,this._parents,e,t)}ln.prototype.interrupt=hb;ln.prototype.transition=xy;var cr=e=>()=>e;function wy(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function At(e,t,n){this.k=e,this.x=t,this.y=n}At.prototype={constructor:At,scale:function(e){return e===1?this:new At(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new At(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var go=new At(1,0,0);ia.prototype=At.prototype;function ia(e){for(;!e.__zoom;)if(!(e=e.parentNode))return go;return e.__zoom}function ra(e){e.stopImmediatePropagation()}function fo(e){e.preventDefault(),e.stopImmediatePropagation()}function vy(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function ky(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Hl(){return this.__zoom||go}function Sy(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Cy(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ny(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function aa(){var e=vy,t=ky,n=Ny,o=Sy,r=Cy,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,u=An,l=an("start","zoom","end"),d,c,p,m=500,h=150,g=0,y=10;function b(x){x.property("__zoom",Hl).on("wheel.zoom",M,{passive:!1}).on("mousedown.zoom",E).on("dblclick.zoom",L).filter(r).on("touchstart.zoom",R).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",D).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}b.transform=function(x,_,I,C){var P=x.selection?x.selection():x;P.property("__zoom",Hl),x!==P?S(x,_,I,C):P.interrupt().each(function(){k(this,arguments).event(C).start().zoom(null,typeof _=="function"?_.apply(this,arguments):_).end()})},b.scaleBy=function(x,_,I,C){b.scaleTo(x,function(){var P=this.__zoom.k,A=typeof _=="function"?_.apply(this,arguments):_;return P*A},I,C)},b.scaleTo=function(x,_,I,C){b.transform(x,function(){var P=t.apply(this,arguments),A=this.__zoom,V=I==null?v(P):typeof I=="function"?I.apply(this,arguments):I,G=A.invert(V),z=typeof _=="function"?_.apply(this,arguments):_;return n(f(w(A,z),V,G),P,a)},I,C)},b.translateBy=function(x,_,I,C){b.transform(x,function(){return n(this.__zoom.translate(typeof _=="function"?_.apply(this,arguments):_,typeof I=="function"?I.apply(this,arguments):I),t.apply(this,arguments),a)},null,C)},b.translateTo=function(x,_,I,C,P){b.transform(x,function(){var A=t.apply(this,arguments),V=this.__zoom,G=C==null?v(A):typeof C=="function"?C.apply(this,arguments):C;return n(go.translate(G[0],G[1]).scale(V.k).translate(typeof _=="function"?-_.apply(this,arguments):-_,typeof I=="function"?-I.apply(this,arguments):-I),A,a)},C,P)};function w(x,_){return _=Math.max(i[0],Math.min(i[1],_)),_===x.k?x:new At(_,x.x,x.y)}function f(x,_,I){var C=_[0]-I[0]*x.k,P=_[1]-I[1]*x.k;return C===x.x&&P===x.y?x:new At(x.k,C,P)}function v(x){return[(+x[0][0]+ +x[1][0])/2,(+x[0][1]+ +x[1][1])/2]}function S(x,_,I,C){x.on("start.zoom",function(){k(this,arguments).event(C).start()}).on("interrupt.zoom end.zoom",function(){k(this,arguments).event(C).end()}).tween("zoom",function(){var P=this,A=arguments,V=k(P,A).event(C),G=t.apply(P,A),z=I==null?v(G):typeof I=="function"?I.apply(P,A):I,U=Math.max(G[1][0]-G[0][0],G[1][1]-G[0][1]),Z=P.__zoom,q=typeof _=="function"?_.apply(P,A):_,ne=u(Z.invert(z).concat(U/Z.k),q.invert(z).concat(U/q.k));return function(W){if(W===1)W=q;else{var O=ne(W),Y=U/O[2];W=new At(Y,z[0]-O[0]*Y,z[1]-O[1]*Y)}V.zoom(null,W)}})}function k(x,_,I){return!I&&x.__zooming||new N(x,_)}function N(x,_){this.that=x,this.args=_,this.active=0,this.sourceEvent=null,this.extent=t.apply(x,_),this.taps=0}N.prototype={event:function(x){return x&&(this.sourceEvent=x),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(x,_){return this.mouse&&x!=="mouse"&&(this.mouse[1]=_.invert(this.mouse[0])),this.touch0&&x!=="touch"&&(this.touch0[1]=_.invert(this.touch0[0])),this.touch1&&x!=="touch"&&(this.touch1[1]=_.invert(this.touch1[0])),this.that.__zoom=_,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(x){var _=He(this.that).datum();l.call(x,this.that,new wy(x,{sourceEvent:this.sourceEvent,target:b,transform:this.that.__zoom,dispatch:l}),_)}};function M(x,..._){if(!e.apply(this,arguments))return;var I=k(this,_).event(x),C=this.__zoom,P=Math.max(i[0],Math.min(i[1],C.k*Math.pow(2,o.apply(this,arguments)))),A=Ue(x);if(I.wheel)(I.mouse[0][0]!==A[0]||I.mouse[0][1]!==A[1])&&(I.mouse[1]=C.invert(I.mouse[0]=A)),clearTimeout(I.wheel);else{if(C.k===P)return;I.mouse=[A,C.invert(A)],mo(this),I.start()}fo(x),I.wheel=setTimeout(V,h),I.zoom("mouse",n(f(w(C,P),I.mouse[0],I.mouse[1]),I.extent,a));function V(){I.wheel=null,I.end()}}function E(x,..._){if(p||!e.apply(this,arguments))return;var I=x.currentTarget,C=k(this,_,!0).event(x),P=He(x.view).on("mousemove.zoom",z,!0).on("mouseup.zoom",U,!0),A=Ue(x,I),V=x.clientX,G=x.clientY;zi(x.view),ra(x),C.mouse=[A,this.__zoom.invert(A)],mo(this),C.start();function z(Z){if(fo(Z),!C.moved){var q=Z.clientX-V,ne=Z.clientY-G;C.moved=q*q+ne*ne>g}C.event(Z).zoom("mouse",n(f(C.that.__zoom,C.mouse[0]=Ue(Z,I),C.mouse[1]),C.extent,a))}function U(Z){P.on("mousemove.zoom mouseup.zoom",null),Ri(Z.view,C.moved),fo(Z),C.event(Z).end()}}function L(x,..._){if(e.apply(this,arguments)){var I=this.__zoom,C=Ue(x.changedTouches?x.changedTouches[0]:x,this),P=I.invert(C),A=I.k*(x.shiftKey?.5:2),V=n(f(w(I,A),C,P),t.apply(this,_),a);fo(x),s>0?He(this).transition().duration(s).call(S,V,C,x):He(this).call(b.transform,V,C,x)}}function R(x,..._){if(e.apply(this,arguments)){var I=x.touches,C=I.length,P=k(this,_,x.changedTouches.length===C).event(x),A,V,G,z;for(ra(x),V=0;V<C;++V)G=I[V],z=Ue(G,this),z=[z,this.__zoom.invert(z),G.identifier],P.touch0?!P.touch1&&P.touch0[2]!==z[2]&&(P.touch1=z,P.taps=0):(P.touch0=z,A=!0,P.taps=1+!!d);d&&(d=clearTimeout(d)),A&&(P.taps<2&&(c=z[0],d=setTimeout(function(){d=null},m)),mo(this),P.start())}}function B(x,..._){if(this.__zooming){var I=k(this,_).event(x),C=x.changedTouches,P=C.length,A,V,G,z;for(fo(x),A=0;A<P;++A)V=C[A],G=Ue(V,this),I.touch0&&I.touch0[2]===V.identifier?I.touch0[0]=G:I.touch1&&I.touch1[2]===V.identifier&&(I.touch1[0]=G);if(V=I.that.__zoom,I.touch1){var U=I.touch0[0],Z=I.touch0[1],q=I.touch1[0],ne=I.touch1[1],W=(W=q[0]-U[0])*W+(W=q[1]-U[1])*W,O=(O=ne[0]-Z[0])*O+(O=ne[1]-Z[1])*O;V=w(V,Math.sqrt(W/O)),G=[(U[0]+q[0])/2,(U[1]+q[1])/2],z=[(Z[0]+ne[0])/2,(Z[1]+ne[1])/2]}else if(I.touch0)G=I.touch0[0],z=I.touch0[1];else return;I.zoom("touch",n(f(V,G,z),I.extent,a))}}function D(x,..._){if(this.__zooming){var I=k(this,_).event(x),C=x.changedTouches,P=C.length,A,V;for(ra(x),p&&clearTimeout(p),p=setTimeout(function(){p=null},m),A=0;A<P;++A)V=C[A],I.touch0&&I.touch0[2]===V.identifier?delete I.touch0:I.touch1&&I.touch1[2]===V.identifier&&delete I.touch1;if(I.touch1&&!I.touch0&&(I.touch0=I.touch1,delete I.touch1),I.touch0)I.touch0[1]=this.__zoom.invert(I.touch0[0]);else if(I.end(),I.taps===2&&(V=Ue(V,this),Math.hypot(c[0]-V[0],c[1]-V[1])<y)){var G=He(this).on("dblclick.zoom");G&&G.apply(this,arguments)}}}return b.wheelDelta=function(x){return arguments.length?(o=typeof x=="function"?x:cr(+x),b):o},b.filter=function(x){return arguments.length?(e=typeof x=="function"?x:cr(!!x),b):e},b.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:cr(!!x),b):r},b.extent=function(x){return arguments.length?(t=typeof x=="function"?x:cr([[+x[0][0],+x[0][1]],[+x[1][0],+x[1][1]]]),b):t},b.scaleExtent=function(x){return arguments.length?(i[0]=+x[0],i[1]=+x[1],b):[i[0],i[1]]},b.translateExtent=function(x){return arguments.length?(a[0][0]=+x[0][0],a[1][0]=+x[1][0],a[0][1]=+x[0][1],a[1][1]=+x[1][1],b):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},b.constrain=function(x){return arguments.length?(n=x,b):n},b.duration=function(x){return arguments.length?(s=+x,b):s},b.interpolate=function(x){return arguments.length?(u=x,b):u},b.on=function(){var x=l.on.apply(l,arguments);return x===l?b:x},b.clickDistance=function(x){return arguments.length?(g=(x=+x)*x,b):Math.sqrt(g)},b.tapDistance=function(x){return arguments.length?(y=+x,b):y},b}var tt={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Fn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],da=["Enter"," ","Escape"],pa={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Xt;(function(e){e.Strict="strict",e.Loose="loose"})(Xt||(Xt={}));var Ot;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ot||(Ot={}));var fn;(function(e){e.Partial="partial",e.Full="full"})(fn||(fn={}));var ma={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},yt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(yt||(yt={}));var Bn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Bn||(Bn={}));var te;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(te||(te={}));var Bl={[te.Left]:te.Right,[te.Right]:te.Left,[te.Top]:te.Bottom,[te.Bottom]:te.Top};function fa(e){return e===null?null:e?"valid":"invalid"}var ga=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Jl=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),ha=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var bo=(e,t=[0,0])=>{let{width:n,height:o}=mt(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},ba=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):ha(r)?r:t.nodeLookup.get(r.id));let s=a?pr(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return gr(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return hr(n)},Vn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=gr(n,pr(r)),o=!0)}),o?hr(n):{x:0,y:0,width:0,height:0}},mr=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,u=(t.y-o)/r,l=t.width/r,d=t.height/r,c=[];for(let p of e.values()){let{measured:m,selectable:h=!0,hidden:g=!1}=p;if(a&&!h||g)continue;let y=m.width??p.width??p.initialWidth??0,b=m.height??p.height??p.initialHeight??0,{x:w,y:f}=p.internals.positionAbsolute,v=rc(s,u,l,d,w,f,y,b),S=y*b,k=i&&v>0;(!p.internals.handleBounds||k||v>=S||p.dragging)&&c.push(p)}return c},ec=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function My(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=mt(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function tc({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=My(e,a),u=Vn(s),l=xo(u,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function ya({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:u,y:l}=s?s.internals.positionAbsolute:{x:0,y:0},d=a.origin??o,c=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",tt.error005());else{let m=s.measured.width,h=s.measured.height;m&&h&&(c=[[u,l],[u+m,l+h]])}else s&&bn(a.extent)&&(c=[[a.extent[0][0]+u,a.extent[0][1]+l],[a.extent[1][0]+u,a.extent[1][1]+l]]);let p=bn(c)?gn(t,c,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",tt.error015()),{position:{x:p.x-u+(a.measured.width??0)*d[0],y:p.y-l+(a.measured.height??0)*d[1]},positionAbsolute:p}}async function nc({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(p=>p.id)),a=[];for(let p of n){if(p.deletable===!1)continue;let m=i.has(p.id),h=!m&&p.parentId&&a.find(g=>g.id===p.parentId);(m||h)&&a.push(p)}let s=new Set(t.map(p=>p.id)),u=o.filter(p=>p.deletable!==!1),d=ec(a,u);for(let p of u)s.has(p.id)&&!d.find(h=>h.id===p.id)&&d.push(p);if(!r)return{edges:d,nodes:a};let c=await r({nodes:a,edges:d});return typeof c=="boolean"?c?{edges:d,nodes:a}:{edges:[],nodes:[]}:c}var Wn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),gn=(e={x:0,y:0},t,n)=>({x:Wn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Wn(e.y,t[0][1],t[1][1]-(n?.height??0))});function oc(e,t,n){let{width:o,height:r}=mt(n),{x:i,y:a}=n.internals.positionAbsolute;return gn(e,[[i,a],[i+o,a+r]],t)}var Wl=(e,t,n)=>e<t?Wn(Math.abs(e-t),1,t)/t:e>n?-Wn(Math.abs(e-n),1,t)/t:0,fr=(e,t,n=15,o=40)=>{let r=Wl(e.x,o,t.width-o)*n,i=Wl(e.y,o,t.height-o)*n;return[r,i]},gr=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),ua=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),hr=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Gn=(e,t=[0,0])=>{let{x:n,y:o}=ha(e)?e.internals.positionAbsolute:bo(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},pr=(e,t=[0,0])=>{let{x:n,y:o}=ha(e)?e.internals.positionAbsolute:bo(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},xa=(e,t)=>hr(gr(ua(e),ua(t))),rc=(e,t,n,o,r,i,a,s)=>{let u=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(u*l)},yo=(e,t)=>rc(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),wa=e=>ot(e.width)&&ot(e.height)&&ot(e.x)&&ot(e.y),ot=e=>!isNaN(e)&&isFinite(e),va=(e,t)=>(n,o)=>{},Xn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),qn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?Xn(s,a):s},hn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function $n(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Ey(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=$n(e,n),r=$n(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=$n(e.top??e.y??0,n),r=$n(e.bottom??e.y??0,n),i=$n(e.left??e.x??0,t),a=$n(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function _y(e,t,n,o,r,i){let{x:a,y:s}=hn(e,[t,n,o]),{x:u,y:l}=hn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),d=r-u,c=i-l;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(d),bottom:Math.floor(c)}}var xo=(e,t,n,o,r,i)=>{let a=Ey(i,t,n),s=(t-a.x)/e.width,u=(n-a.y)/e.height,l=Math.min(s,u),d=Wn(l,o,r),c=e.x+e.width/2,p=e.y+e.height/2,m=t/2-c*d,h=n/2-p*d,g=_y(e,m,h,d,t,n),y={left:Math.min(g.left-a.left,0),top:Math.min(g.top-a.top,0),right:Math.min(g.right-a.right,0),bottom:Math.min(g.bottom-a.bottom,0)};return{x:m-y.left+y.right,y:h-y.top+y.bottom,zoom:d}},Un=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function bn(e){return e!=null&&e!=="parent"}function mt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function ka(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Sa(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function Ca(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function ic(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function ac(e){return{...pa,...e||{}}}function ho(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=rt(e),s=qn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:u,y:l}=n?Xn(s,t):s;return{xSnapped:u,ySnapped:l,...s}}var br=e=>({width:e.offsetWidth,height:e.offsetHeight}),Na=e=>e?.getRootNode?.()||window?.document,Iy=["INPUT","SELECT","TEXTAREA"];function Ma(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Iy.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Ea=e=>"clientX"in e,rt=(e,t)=>{let n=Ea(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Fl=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...br(a)}})};function yr({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let u=e*.125+r*.375+a*.375+n*.125,l=t*.125+i*.375+s*.375+o*.125,d=Math.abs(u-e),c=Math.abs(l-t);return[u,l,d,c]}function ur(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Vl({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case te.Left:return[t-ur(t-o,i),n];case te.Right:return[t+ur(o-t,i),n];case te.Top:return[t,n-ur(n-r,i)];case te.Bottom:return[t,n+ur(r-n,i)]}}function xr({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,curvature:a=.25}){let[s,u]=Vl({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[l,d]=Vl({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[c,p,m,h]=yr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:u,targetControlX:l,targetControlY:d});return[`M${e},${t} C${s},${u} ${l},${d} ${o},${r}`,c,p,m,h]}function _a({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function sc({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function lc({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=gr(pr(e),pr(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return yo(a,hr(i))>0}var Py=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,zy=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),cc=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",tt.error006()),t;let o=n.getEdgeId||Py,r;return ga(e)?r={...e}:r={...e,id:o(e)},zy(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function wr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=_a({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var Gl={[te.Left]:{x:-1,y:0},[te.Right]:{x:1,y:0},[te.Top]:{x:0,y:-1},[te.Bottom]:{x:0,y:1}},Ry=({source:e,sourcePosition:t=te.Bottom,target:n})=>t===te.Left||t===te.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Xl=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Dy({source:e,sourcePosition:t=te.Bottom,target:n,targetPosition:o=te.Top,center:r,offset:i,stepPosition:a}){let s=Gl[t],u=Gl[o],l={x:e.x+s.x*i,y:e.y+s.y*i},d={x:n.x+u.x*i,y:n.y+u.y*i},c=Ry({source:l,sourcePosition:t,target:d}),p=c.x!==0?"x":"y",m=c[p],h=[],g,y,b={x:0,y:0},w={x:0,y:0},[,,f,v]=_a({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[p]*u[p]===-1){p==="x"?(g=r.x??l.x+(d.x-l.x)*a,y=r.y??(l.y+d.y)/2):(g=r.x??(l.x+d.x)/2,y=r.y??l.y+(d.y-l.y)*a);let M=[{x:g,y:l.y},{x:g,y:d.y}],E=[{x:l.x,y},{x:d.x,y}];s[p]===m?h=p==="x"?M:E:h=p==="x"?E:M}else{let M=[{x:l.x,y:d.y}],E=[{x:d.x,y:l.y}];if(p==="x"?h=s.x===m?E:M:h=s.y===m?M:E,t===o){let x=Math.abs(e[p]-n[p]);if(x<=i){let _=Math.min(i-1,i-x);s[p]===m?b[p]=(l[p]>e[p]?-1:1)*_:w[p]=(d[p]>n[p]?-1:1)*_}}if(t!==o){let x=p==="x"?"y":"x",_=s[p]===u[x],I=l[x]>d[x],C=l[x]<d[x];(s[p]===1&&(!_&&I||_&&C)||s[p]!==1&&(!_&&C||_&&I))&&(h=p==="x"?M:E)}let L={x:l.x+b.x,y:l.y+b.y},R={x:d.x+w.x,y:d.y+w.y},B=Math.max(Math.abs(L.x-h[0].x),Math.abs(R.x-h[0].x)),D=Math.max(Math.abs(L.y-h[0].y),Math.abs(R.y-h[0].y));B>=D?(g=(L.x+R.x)/2,y=h[0].y):(g=h[0].x,y=(L.y+R.y)/2)}let S={x:l.x+b.x,y:l.y+b.y},k={x:d.x+w.x,y:d.y+w.y};return[[e,...S.x!==h[0].x||S.y!==h[0].y?[S]:[],...h,...k.x!==h[h.length-1].x||k.y!==h[h.length-1].y?[k]:[],n],g,y,f,v]}function Ty(e,t,n,o){let r=Math.min(Xl(e,t)/2,Xl(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let l=e.x<n.x?-1:1,d=e.y<n.y?1:-1;return`L ${i+r*l},${a}Q ${i},${a} ${i},${a+r*d}`}let s=e.x<n.x?1:-1,u=e.y<n.y?-1:1;return`L ${i},${a+r*u}Q ${i},${a} ${i+r*s},${a}`}function wo({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,borderRadius:a=5,centerX:s,centerY:u,offset:l=20,stepPosition:d=.5}){let[c,p,m,h,g]=Dy({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:u},offset:l,stepPosition:d}),y=`M${c[0].x} ${c[0].y}`;for(let b=1;b<c.length-1;b++)y+=Ty(c[b-1],c[b],c[b+1],a);return y+=`L${c[c.length-1].x} ${c[c.length-1].y}`,[y,p,m,h,g]}function ql(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function uc(e){let{sourceNode:t,targetNode:n}=e;if(!ql(t)||!ql(n))return null;let o=t.internals.handleBounds||Ul(t.handles),r=n.internals.handleBounds||Ul(n.handles),i=Yl(o?.source??[],e.sourceHandle),a=Yl(e.connectionMode===Xt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",tt.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||te.Bottom,u=a?.position||te.Top,l=qt(t,i,s),d=qt(n,a,u);return{sourceX:l.x,sourceY:l.y,targetX:d.x,targetY:d.y,sourcePosition:s,targetPosition:u}}function Ul(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function qt(e,t,n=te.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??mt(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case te.Top:return{x:r+a/2,y:i};case te.Right:return{x:r+a,y:i+s/2};case te.Bottom:return{x:r+a/2,y:i+s};case te.Left:return{x:r,y:i+s/2}}}function Yl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function vr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function dc(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(u=>{if(u&&typeof u=="object"){let l=vr(u,t);i.has(l)||(a.push({id:l,color:u.color||n,...u}),i.add(l))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var pc=1e3,Ay=10,Ia={nodeOrigin:[0,0],nodeExtent:Fn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},Oy={...Ia,checkEquality:!0};function Pa(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function mc(e,t,n){let o=Pa(Ia,n);for(let r of e.values())if(r.parentId)Ra(r,e,t,o);else{let i=bo(r,o.nodeOrigin),a=bn(r.extent)?r.extent:o.nodeExtent,s=gn(i,a,mt(r));r.internals.positionAbsolute=s}}function Ly(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function za(e){return e==="manual"}function kr(e,t,n,o={}){let r=Pa(Oy,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!za(r.zIndexMode)?pc:0,u=e.length>0,l=!1;t.clear(),n.clear();for(let d of e){let c=a.get(d.id);if(r.checkEquality&&d===c?.internals.userNode)t.set(d.id,c);else{let p=bo(d,r.nodeOrigin),m=bn(d.extent)?d.extent:r.nodeExtent,h=gn(p,m,mt(d));c={...r.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:h,handleBounds:Ly(d,c),z:fc(d,s,r.zIndexMode),userNode:d}},t.set(d.id,c)}(c.measured===void 0||c.measured.width===void 0||c.measured.height===void 0)&&!c.hidden&&(u=!1),d.parentId&&Ra(c,t,n,o,i),l||=d.selected??!1}return{nodesInitialized:u,hasSelectedNodes:l}}function $y(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Ra(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:u}=Pa(Ia,o),l=e.parentId,d=t.get(l);if(!d){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}$y(e,n),r&&!d.parentId&&d.internals.rootParentIndex===void 0&&u==="auto"&&(d.internals.rootParentIndex=++r.i,d.internals.z=d.internals.z+r.i*Ay),r&&d.internals.rootParentIndex!==void 0&&(r.i=d.internals.rootParentIndex);let c=i&&!za(u)?pc:0,{x:p,y:m,z:h}=Hy(e,d,a,s,c,u),{positionAbsolute:g}=e.internals,y=p!==g.x||m!==g.y;(y||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:p,y:m}:g,z:h}})}function fc(e,t,n){let o=ot(e.zIndex)?e.zIndex:0;return za(n)?o:o+(e.selected?t:0)}function Hy(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,u=mt(e),l=bo(e,n),d=bn(e.extent)?gn(l,e.extent,u):l,c=gn({x:a+d.x,y:s+d.y},o,u);e.extent==="parent"&&(c=oc(c,u,t));let p=fc(e,r,i),m=t.internals.z??0;return{x:c.x,y:c.y,z:m>=p?m+1:p}}function Sr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let u=i.get(a.parentId)?.expandedRect??Gn(s),l=xa(u,a.rect);i.set(a.parentId,{expandedRect:l,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},u)=>{let l=s.internals.positionAbsolute,d=mt(s),c=s.origin??o,p=a.x<l.x?Math.round(Math.abs(l.x-a.x)):0,m=a.y<l.y?Math.round(Math.abs(l.y-a.y)):0,h=Math.max(d.width,Math.round(a.width)),g=Math.max(d.height,Math.round(a.height)),y=(h-d.width)*c[0],b=(g-d.height)*c[1];(p>0||m>0||y||b)&&(r.push({id:u,type:"position",position:{x:s.position.x-p+y,y:s.position.y-m+b}}),n.get(u)?.forEach(w=>{e.some(f=>f.id===w.id)||r.push({id:w.id,type:"position",position:{x:w.position.x+p,y:w.position.y+m}})})),(d.width<a.width||d.height<a.height||p||m)&&r.push({id:u,type:"dimensions",setAttributes:!0,dimensions:{width:h+(p?c[0]*p-y:0),height:g+(m?c[1]*m-b:0)}})}),r}function gc(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),u=!1;if(!s)return{changes:[],updatedInternals:u};let l=[],d=window.getComputedStyle(s),{m22:c}=new window.DOMMatrixReadOnly(d.transform),p=[];for(let m of e.values()){let h=t.get(m.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),u=!0;continue}let g=br(m.nodeElement),y=h.measured.width!==g.width||h.measured.height!==g.height;if(!!(g.width&&g.height&&(y||!h.internals.handleBounds||m.force))){let w=m.nodeElement.getBoundingClientRect(),f=bn(h.extent)?h.extent:i,{positionAbsolute:v}=h.internals;if(h.parentId&&h.extent==="parent"){let k=t.get(h.parentId);k&&(v=oc(v,g,k))}else f&&(v=gn(v,f,g));let S={...h,measured:g,internals:{...h.internals,positionAbsolute:v,handleBounds:{source:Fl("source",m.nodeElement,w,c,h.id),target:Fl("target",m.nodeElement,w,c,h.id)}}};t.set(h.id,S),h.parentId&&Ra(S,t,n,{nodeOrigin:r,zIndexMode:a}),u=!0,y&&(l.push({id:h.id,type:"dimensions",dimensions:g}),h.expandParent&&h.parentId&&p.push({id:h.id,parentId:h.parentId,rect:Gn(S,r)}))}}if(p.length>0){let m=Sr(p,t,n,r);l.push(...m)}return{changes:l,updatedInternals:u}}async function hc({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function Zl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let u=o.get(a)||new Map;if(o.set(a,u.set(n,t)),i){a=`${r}-${e}-${i}`;let l=o.get(a)||new Map;o.set(a,l.set(n,t))}}function Da(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,u={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},l=`${r}-${a}--${i}-${s}`,d=`${i}-${s}--${r}-${a}`;Zl("source",u,d,e,r,a),Zl("target",u,l,e,i,s),t.set(o.id,o)}}function bc(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:bc(n,t):!1}function Kl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function By(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!bc(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function sa({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let u=n.get(a)?.internals.userNode;u&&r.push({...u,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Wy({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=Xn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function yc({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,u=!1,l={x:0,y:0},d=null,c=!1,p=null,m=!1,h=!1,g=null;function y({noDragClassName:w,handleSelector:f,domNode:v,isSelectable:S,nodeId:k,nodeClickDistance:N=0}){p=He(v);function M({x:B,y:D}){let{nodeLookup:x,nodeExtent:_,snapGrid:I,snapToGrid:C,nodeOrigin:P,onNodeDrag:A,onSelectionDrag:V,onError:G,updateNodePositions:z}=t();i={x:B,y:D};let U=!1,Z=s.size>1,q=Z&&_?ua(Vn(s)):null,ne=Z&&C?Wy({dragItems:s,snapGrid:I,x:B,y:D}):null;for(let[W,O]of s){if(!x.has(W))continue;let Y={x:B-O.distance.x,y:D-O.distance.y};C&&(Y=ne?{x:Math.round(Y.x+ne.x),y:Math.round(Y.y+ne.y)}:Xn(Y,I));let re=null;if(Z&&_&&!O.extent&&q){let{positionAbsolute:ee}=O.internals,ce=ee.x-q.x+_[0][0],F=ee.x+O.measured.width-q.x2+_[1][0],ie=ee.y-q.y+_[0][1],pe=ee.y+O.measured.height-q.y2+_[1][1];re=[[ce,ie],[F,pe]]}let{position:se,positionAbsolute:Q}=ya({nodeId:W,nextPosition:Y,nodeLookup:x,nodeExtent:re||_,nodeOrigin:P,onError:G});U=U||O.position.x!==se.x||O.position.y!==se.y,O.position=se,O.internals.positionAbsolute=Q}if(h=h||U,!!U&&(z(s,!0),g&&(o||A||!k&&V))){let[W,O]=sa({nodeId:k,dragItems:s,nodeLookup:x});o?.(g,s,W,O),A?.(g,W,O),k||V?.(g,O)}}async function E(){if(!d)return;let{transform:B,panBy:D,autoPanSpeed:x,autoPanOnNodeDrag:_}=t();if(!_){u=!1,cancelAnimationFrame(a);return}let[I,C]=fr(l,d,x);(I!==0||C!==0)&&(i.x=(i.x??0)-I/B[2],i.y=(i.y??0)-C/B[2],await D({x:I,y:C})&&M(i)),a=requestAnimationFrame(E)}function L(B){let{nodeLookup:D,multiSelectionActive:x,nodesDraggable:_,transform:I,snapGrid:C,snapToGrid:P,selectNodesOnDrag:A,onNodeDragStart:V,onSelectionDragStart:G,unselectNodesAndEdges:z}=t();c=!0,(!A||!S)&&!x&&k&&(D.get(k)?.selected||z()),S&&A&&k&&e?.(k);let U=ho(B.sourceEvent,{transform:I,snapGrid:C,snapToGrid:P,containerBounds:d});if(i=U,s=By(D,_,U,k),s.size>0&&(n||V||!k&&G)){let[Z,q]=sa({nodeId:k,dragItems:s,nodeLookup:D});n?.(B.sourceEvent,s,Z,q),V?.(B.sourceEvent,Z,q),k||G?.(B.sourceEvent,q)}}let R=Di().clickDistance(N).on("start",B=>{let{domNode:D,nodeDragThreshold:x,transform:_,snapGrid:I,snapToGrid:C}=t();d=D?.getBoundingClientRect()||null,m=!1,h=!1,g=B.sourceEvent,x===0&&L(B),i=ho(B.sourceEvent,{transform:_,snapGrid:I,snapToGrid:C,containerBounds:d}),l=rt(B.sourceEvent,d)}).on("drag",B=>{let{autoPanOnNodeDrag:D,transform:x,snapGrid:_,snapToGrid:I,nodeDragThreshold:C,nodeLookup:P}=t(),A=ho(B.sourceEvent,{transform:x,snapGrid:_,snapToGrid:I,containerBounds:d});if(g=B.sourceEvent,(B.sourceEvent.type==="touchmove"&&B.sourceEvent.touches.length>1||k&&!P.has(k))&&(m=!0),!m){if(!u&&D&&c&&(u=!0,E()),!c){let V=rt(B.sourceEvent,d),G=V.x-l.x,z=V.y-l.y;Math.sqrt(G*G+z*z)>C&&L(B)}(i.x!==A.xSnapped||i.y!==A.ySnapped)&&s&&c&&(l=rt(B.sourceEvent,d),M(A))}}).on("end",B=>{if(!c||m){m&&s.size>0&&t().updateNodePositions(s,!1);return}if(u=!1,c=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:D,updateNodePositions:x,onNodeDragStop:_,onSelectionDragStop:I}=t();if(h&&(x(s,!1),h=!1),r||_||!k&&I){let[C,P]=sa({nodeId:k,dragItems:s,nodeLookup:D,dragging:!1});r?.(B.sourceEvent,s,C,P),_?.(B.sourceEvent,C,P),k||I?.(B.sourceEvent,P)}}}).filter(B=>{let D=B.target;return!B.button&&(!w||!Kl(D,`.${w}`,v))&&(!f||Kl(D,f,v))});p.call(R)}function b(){p?.on(".drag",null)}return{update:y,destroy:b}}function Fy(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())yo(r,Gn(i))>0&&o.push(i);return o}var Vy=250;function Gy(e,t,n,o){let r=[],i=1/0,a=Fy(e,n,t+Vy);for(let s of a){let u=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let l of u){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:d,y:c}=qt(s,l,l.position,!0),p=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(c-e.y,2));p>t||(p<i?(r=[{...l,x:d,y:c}],i=p):p===i&&r.push({...l,x:d,y:c}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(u=>u.type===s)??r[0]}return r[0]}function xc(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],u=(n?s?.find(l=>l.id===n):s?.[0])??null;return u&&i?{...u,...qt(a,u,u.position,!0)}:u}function wc(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Xy(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var vc=()=>!0;function qy(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:u,lib:l,autoPanOnConnect:d,flowId:c,panBy:p,cancelConnection:m,onConnectStart:h,onConnect:g,onConnectEnd:y,isValidConnection:b=vc,onReconnectEnd:w,updateConnection:f,getTransform:v,getFromHandle:S,autoPanSpeed:k,dragThreshold:N=1,handleDomNode:M}){let E=Na(e.target),L=0,R,{x:B,y:D}=rt(e),x=wc(i,M),_=s?.getBoundingClientRect(),I=!1;if(!_||!x)return;let C=xc(r,x,o,u,t);if(!C)return;let P=rt(e,_),A=!1,V=null,G=!1,z=null;function U(){if(!d||!_)return;let[se,Q]=fr(P,_,k);p({x:se,y:Q}),L=requestAnimationFrame(U)}let Z={...C,nodeId:r,type:x,position:C.position},q=u.get(r),W={inProgress:!0,isValid:null,from:qt(q,Z,te.Left,!0),fromHandle:Z,fromPosition:Z.position,fromNode:q,to:P,toHandle:null,toPosition:Bl[Z.position],toNode:null,pointer:P};function O(){I=!0,f(W),h?.(e,{nodeId:r,handleId:o,handleType:x})}N===0&&O();function Y(se){if(!I){let{x:pe,y:Ne}=rt(se),Te=pe-B,Xe=Ne-D;if(!(Te*Te+Xe*Xe>N*N))return;O()}if(!S()||!Z){re(se);return}let Q=v();P=rt(se,_),R=Gy(qn(P,Q,!1,[1,1]),n,u,Z),A||(U(),A=!0);let ee=kc(se,{handle:R,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:b,doc:E,lib:l,flowId:c,nodeLookup:u});z=ee.handleDomNode,V=ee.connection,G=Xy(!!R,ee.isValid);let ce=u.get(r),F=ce?qt(ce,Z,te.Left,!0):W.from,ie={...W,from:F,isValid:G,to:ee.toHandle&&G?hn({x:ee.toHandle.x,y:ee.toHandle.y},Q):P,toHandle:ee.toHandle,toPosition:G&&ee.toHandle?ee.toHandle.position:Bl[Z.position],toNode:ee.toHandle?u.get(ee.toHandle.nodeId):null,pointer:P};f(ie),W=ie}function re(se){if(!("touches"in se&&se.touches.length>0)){if(I){(R||z)&&V&&G&&g?.(V);let{inProgress:Q,...ee}=W,ce={...ee,toPosition:W.toHandle?W.toPosition:null};y?.(se,ce),i&&w?.(se,ce)}m(),cancelAnimationFrame(L),A=!1,G=!1,V=null,z=null,E.removeEventListener("mousemove",Y),E.removeEventListener("mouseup",re),E.removeEventListener("touchmove",Y),E.removeEventListener("touchend",re)}}E.addEventListener("mousemove",Y),E.addEventListener("mouseup",re),E.addEventListener("touchmove",Y),E.addEventListener("touchend",re)}function kc(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:u,isValidConnection:l=vc,nodeLookup:d}){let c=i==="target",p=t?a.querySelector(`.${s}-flow__handle[data-id="${u}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:m,y:h}=rt(e),g=a.elementFromPoint(m,h),y=g?.classList.contains(`${s}-flow__handle`)?g:p,b={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let w=wc(void 0,y),f=y.getAttribute("data-nodeid"),v=y.getAttribute("data-handleid"),S=y.classList.contains("connectable"),k=y.classList.contains("connectableend");if(!f||!w)return b;let N={source:c?f:o,sourceHandle:c?v:r,target:c?o:f,targetHandle:c?r:v};b.connection=N;let E=S&&k&&(n===Xt.Strict?c&&w==="source"||!c&&w==="target":f!==o||v!==r);b.isValid=E&&l(N),b.toHandle=xc(f,w,v,d,n,!0)}return b}var Cr={onPointerDown:qy,isValid:kc};function Sc({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=He(e);function i({translateExtent:s,width:u,height:l,zoomStep:d=1,pannable:c=!0,zoomable:p=!0,inversePan:m=!1}){let h=f=>{if(f.sourceEvent.type!=="wheel"||!t)return;let v=n(),S=f.sourceEvent.ctrlKey&&Un()?10:1,k=-f.sourceEvent.deltaY*(f.sourceEvent.deltaMode===1?.05:f.sourceEvent.deltaMode?1:.002)*d,N=v[2]*Math.pow(2,k*S);t.scaleTo(N)},g=[0,0],y=f=>{(f.sourceEvent.type==="mousedown"||f.sourceEvent.type==="touchstart")&&(g=[f.sourceEvent.clientX??f.sourceEvent.touches[0].clientX,f.sourceEvent.clientY??f.sourceEvent.touches[0].clientY])},b=f=>{let v=n();if(f.sourceEvent.type!=="mousemove"&&f.sourceEvent.type!=="touchmove"||!t)return;let S=[f.sourceEvent.clientX??f.sourceEvent.touches[0].clientX,f.sourceEvent.clientY??f.sourceEvent.touches[0].clientY],k=[S[0]-g[0],S[1]-g[1]];g=S;let N=o()*Math.max(v[2],Math.log(v[2]))*(m?-1:1),M={x:v[0]-k[0]*N,y:v[1]-k[1]*N},E=[[0,0],[u,l]];t.setViewportConstrained({x:M.x,y:M.y,zoom:v[2]},E,s)},w=aa().on("start",y).on("zoom",c?b:null).on("zoom.wheel",p?h:null);r.call(w,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Ue}}var Nr=e=>({x:e.x,y:e.y,zoom:e.k}),la=({x:e,y:t,zoom:n})=>go.translate(e,t).scale(n),Hn=(e,t)=>e.target.closest(`.${t}`),Cc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Uy=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,ca=(e,t=0,n=Uy,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},Nc=e=>{let t=e.ctrlKey&&Un()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Yy({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:u,onPanZoomEnd:l}){return d=>{if(Hn(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let c=n.property("__zoom").k||1;if(d.ctrlKey&&a){let y=Ue(d),b=Nc(d),w=c*Math.pow(2,b);o.scaleTo(n,w,y,d);return}let p=d.deltaMode===1?20:1,m=r===Ot.Vertical?0:d.deltaX*p,h=r===Ot.Horizontal?0:d.deltaY*p;!Un()&&d.shiftKey&&r!==Ot.Vertical&&(m=d.deltaY*p,h=0),o.translateBy(n,-(m/c)*i,-(h/c)*i,{internal:!0});let g=Nr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?u?.(d,g):(e.isPanScrolling=!0,s?.(d,g)),e.panScrollTimeout=setTimeout(()=>{l?.(d,g),e.isPanScrolling=!1},150)}}function Zy({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=Hn(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function Ky({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=Nr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function jy({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&Cc(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,Nr(i.transform))}}function Qy({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Cc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=Nr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function Jy({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:u,lib:l,connectionInProgress:d}){return c=>{let p=e||t,m=n&&c.ctrlKey,h=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(Hn(c,`${l}-flow__node`)||Hn(c,`${l}-flow__edge`)))return!0;if(!o&&!p&&!r&&!i&&!n||a||d&&!h||Hn(c,s)&&h||Hn(c,u)&&(!h||r&&h&&!e)||!n&&c.ctrlKey&&h)return!1;if(!n&&c.type==="touchstart"&&c.touches?.length>1)return c.preventDefault(),!1;if(!p&&!r&&!m&&h||!o&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(o)&&!o.includes(c.button)&&c.type==="mousedown")return!1;let g=Array.isArray(o)&&o.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||h)&&g}}function Mc({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:u}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),c=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(D=>{let x=D[0];x&&(c=[[0,0],[x.contentRect.width,x.contentRect.height]])}):null)?.observe(e);let m=aa().extent(()=>c).scaleExtent([t,n]).translateExtent(o),h=He(e).call(m);v({x:r.x,y:r.y,zoom:Wn(r.zoom,t,n)},[[0,0],[d.width,d.height]],o);let g=h.on("wheel.zoom"),y=h.on("dblclick.zoom");m.wheelDelta(Nc);async function b(D,x){return h?new Promise(_=>{m?.interpolate(x?.interpolate==="linear"?Tn:An).transform(ca(h,x?.duration,x?.ease,()=>_(!0)),D)}):!1}function w({noWheelClassName:D,noPanClassName:x,onPaneContextMenu:_,userSelectionActive:I,panOnScroll:C,panOnDrag:P,panOnScrollMode:A,panOnScrollSpeed:V,preventScrolling:G,zoomOnPinch:z,zoomOnScroll:U,zoomOnDoubleClick:Z,zoomActivationKeyPressed:q,lib:ne,onTransformChange:W,connectionInProgress:O,paneClickDistance:Y,selectionOnDrag:re}){I&&!l.isZoomingOrPanning&&f();let se=C&&!q&&!I;m.clickDistance(re?1/0:!ot(Y)||Y<0?0:Y);let Q=se?Yy({zoomPanValues:l,noWheelClassName:D,d3Selection:h,d3Zoom:m,panOnScrollMode:A,panOnScrollSpeed:V,zoomOnPinch:z,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):Zy({noWheelClassName:D,preventScrolling:G,d3ZoomHandler:g});h.on("wheel.zoom",Q,{passive:!1});let ee=Ky({zoomPanValues:l,onDraggingChange:u,onPanZoomStart:a});m.on("start",ee);let ce=jy({zoomPanValues:l,panOnDrag:P,onPaneContextMenu:!!_,onPanZoom:i,onTransformChange:W});m.on("zoom",ce);let F=Qy({zoomPanValues:l,panOnDrag:P,panOnScroll:C,onPaneContextMenu:_,onPanZoomEnd:s,onDraggingChange:u});m.on("end",F);let ie=Jy({zoomActivationKeyPressed:q,panOnDrag:P,zoomOnScroll:U,panOnScroll:C,zoomOnDoubleClick:Z,zoomOnPinch:z,userSelectionActive:I,noPanClassName:x,noWheelClassName:D,lib:ne,connectionInProgress:O});m.filter(ie),Z?h.on("dblclick.zoom",y):h.on("dblclick.zoom",null)}function f(){m.on("zoom",null)}async function v(D,x,_){let I=la(D),C=m?.constrain()(I,x,_);return C&&await b(C),C}async function S(D,x){let _=la(D);return await b(_,x),_}function k(D){if(h){let x=la(D),_=h.property("__zoom");(_.k!==D.zoom||_.x!==D.x||_.y!==D.y)&&m?.transform(h,x,null,{sync:!0})}}function N(){let D=h?ia(h.node()):{x:0,y:0,k:1};return{x:D.x,y:D.y,zoom:D.k}}async function M(D,x){return h?new Promise(_=>{m?.interpolate(x?.interpolate==="linear"?Tn:An).scaleTo(ca(h,x?.duration,x?.ease,()=>_(!0)),D)}):!1}async function E(D,x){return h?new Promise(_=>{m?.interpolate(x?.interpolate==="linear"?Tn:An).scaleBy(ca(h,x?.duration,x?.ease,()=>_(!0)),D)}):!1}function L(D){m?.scaleExtent(D)}function R(D){m?.translateExtent(D)}function B(D){let x=!ot(D)||D<0?0:D;m?.clickDistance(x)}return{update:w,destroy:f,setViewport:S,setViewportConstrained:v,getViewport:N,scaleTo:M,scaleBy:E,setScaleExtent:L,setTranslateExtent:R,syncViewport:k,setClickDistance:B}}var Ut;(function(e){e.Line="line",e.Handle="handle"})(Ut||(Ut={}));function e0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,u=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(u[0]=u[0]*-1),s&&i&&(u[1]=u[1]*-1),u}function jl(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Vt(e,t){return Math.max(0,t-e)}function Gt(e,t){return Math.max(0,e-t)}function dr(e,t,n){return Math.max(0,t-e,e-n)}function Ql(e,t){return e?!t:t}function t0(e,t,n,o,r,i,a,s){let{affectsX:u,affectsY:l}=t,{isHorizontal:d,isVertical:c}=t,p=d&&c,{xSnapped:m,ySnapped:h}=n,{minWidth:g,maxWidth:y,minHeight:b,maxHeight:w}=o,{x:f,y:v,width:S,height:k,aspectRatio:N}=e,M=Math.floor(d?m-e.pointerX:0),E=Math.floor(c?h-e.pointerY:0),L=S+(u?-M:M),R=k+(l?-E:E),B=-i[0]*S,D=-i[1]*k,x=dr(L,g,y),_=dr(R,b,w);if(a){let P=0,A=0;u&&M<0?P=Vt(f+M+B,a[0][0]):!u&&M>0&&(P=Gt(f+L+B,a[1][0])),l&&E<0?A=Vt(v+E+D,a[0][1]):!l&&E>0&&(A=Gt(v+R+D,a[1][1])),x=Math.max(x,P),_=Math.max(_,A)}if(s){let P=0,A=0;u&&M>0?P=Gt(f+M,s[0][0]):!u&&M<0&&(P=Vt(f+L,s[1][0])),l&&E>0?A=Gt(v+E,s[0][1]):!l&&E<0&&(A=Vt(v+R,s[1][1])),x=Math.max(x,P),_=Math.max(_,A)}if(r){if(d){let P=dr(L/N,b,w)*N;if(x=Math.max(x,P),a){let A=0;!u&&!l||u&&!l&&p?A=Gt(v+D+L/N,a[1][1])*N:A=Vt(v+D+(u?M:-M)/N,a[0][1])*N,x=Math.max(x,A)}if(s){let A=0;!u&&!l||u&&!l&&p?A=Vt(v+L/N,s[1][1])*N:A=Gt(v+(u?M:-M)/N,s[0][1])*N,x=Math.max(x,A)}}if(c){let P=dr(R*N,g,y)/N;if(_=Math.max(_,P),a){let A=0;!u&&!l||l&&!u&&p?A=Gt(f+R*N+B,a[1][0])/N:A=Vt(f+(l?E:-E)*N+B,a[0][0])/N,_=Math.max(_,A)}if(s){let A=0;!u&&!l||l&&!u&&p?A=Vt(f+R*N,s[1][0])/N:A=Gt(f+(l?E:-E)*N,s[0][0])/N,_=Math.max(_,A)}}}E=E+(E<0?_:-_),M=M+(M<0?x:-x),r&&(p?L>R*N?E=(Ql(u,l)?-M:M)/N:M=(Ql(u,l)?-E:E)*N:d?(E=M/N,l=u):(M=E*N,u=l));let I=u?f+M:f,C=l?v+E:v;return{width:S+(u?-M:M),height:k+(l?-E:E),x:i[0]*M*(u?-1:1)+I,y:i[1]*E*(l?-1:1)+C}}var Ec={width:0,height:0,x:0,y:0},n0={...Ec,pointerX:0,pointerY:0,aspectRatio:1};function o0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,u=n[1]*a;return[[o-s,r-u],[o+i-s,r+a-u]]}function _c({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=He(e),a={controlDirection:jl("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:l,boundaries:d,keepAspectRatio:c,resizeDirection:p,onResizeStart:m,onResize:h,onResizeEnd:g,shouldResize:y}){let b={...Ec},w={...n0};a={boundaries:d,resizeDirection:p,keepAspectRatio:c,controlDirection:jl(l)};let f,v=null,S=[],k,N,M,E=!1,L=Di().on("start",R=>{let{nodeLookup:B,transform:D,snapGrid:x,snapToGrid:_,nodeOrigin:I,paneDomNode:C}=n();if(f=B.get(t),!f)return;v=C?.getBoundingClientRect()??null;let{xSnapped:P,ySnapped:A}=ho(R.sourceEvent,{transform:D,snapGrid:x,snapToGrid:_,containerBounds:v});b={width:f.measured.width??0,height:f.measured.height??0,x:f.position.x??0,y:f.position.y??0},w={...b,pointerX:P,pointerY:A,aspectRatio:b.width/b.height},k=void 0,N=bn(f.extent)?f.extent:void 0,f.parentId&&(f.extent==="parent"||f.expandParent)&&(k=B.get(f.parentId)),k&&f.extent==="parent"&&(N=[[0,0],[k.measured.width,k.measured.height]]),S=[],M=void 0;for(let[V,G]of B)if(G.parentId===t&&(S.push({id:V,position:{...G.position},extent:G.extent}),G.extent==="parent"||G.expandParent)){let z=o0(G,f,G.origin??I);M?M=[[Math.min(z[0][0],M[0][0]),Math.min(z[0][1],M[0][1])],[Math.max(z[1][0],M[1][0]),Math.max(z[1][1],M[1][1])]]:M=z}m?.(R,{...b})}).on("drag",R=>{let{transform:B,snapGrid:D,snapToGrid:x,nodeOrigin:_}=n(),I=ho(R.sourceEvent,{transform:B,snapGrid:D,snapToGrid:x,containerBounds:v}),C=[];if(!f)return;let{x:P,y:A,width:V,height:G}=b,z={},U=f.origin??_,{width:Z,height:q,x:ne,y:W}=t0(w,a.controlDirection,I,a.boundaries,a.keepAspectRatio,U,N,M),O=Z!==V,Y=q!==G,re=ne!==P&&O,se=W!==A&&Y;if(!re&&!se&&!O&&!Y)return;if((re||se||U[0]===1||U[1]===1)&&(z.x=re?ne:b.x,z.y=se?W:b.y,b.x=z.x,b.y=z.y,S.length>0)){let F=ne-P,ie=W-A;for(let pe of S)pe.position={x:pe.position.x-F+U[0]*(Z-V),y:pe.position.y-ie+U[1]*(q-G)},C.push(pe)}if((O||Y)&&(z.width=O&&(!a.resizeDirection||a.resizeDirection==="horizontal")?Z:b.width,z.height=Y&&(!a.resizeDirection||a.resizeDirection==="vertical")?q:b.height,b.width=z.width,b.height=z.height),k&&f.expandParent){let F=U[0]*(z.width??0);z.x&&z.x<F&&(b.x=F,w.x=w.x-(z.x-F));let ie=U[1]*(z.height??0);z.y&&z.y<ie&&(b.y=ie,w.y=w.y-(z.y-ie))}let Q=e0({width:b.width,prevWidth:V,height:b.height,prevHeight:G,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),ee={...b,direction:Q};y?.(R,ee)!==!1&&(E=!0,h?.(R,ee),o(z,C))}).on("end",R=>{E&&(g?.(R,{...b}),r?.({...b}),E=!1)});i.call(L)}function u(){i.on(".drag",null)}return{update:s,destroy:u}}var Wc=Ts(require("react"),1),Fc=Ts(Oc(),1);var $c={},Lc=e=>{let t,n=new Set,o=(d,c)=>{let p=typeof d=="function"?d(t):d;if(!Object.is(p,t)){let m=t;t=c??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(h=>h(t,m))}},r=()=>t,u={setState:o,getState:r,getInitialState:()=>l,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{($c.env?$c.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,u);return u},Hc=e=>e?Lc(e):Lc;var{useDebugValue:v0}=Wc.default,{useSyncExternalStoreWithSelector:k0}=Fc.default,S0=e=>e;function Aa(e,t=S0,n){let o=k0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return v0(o),o}var Bc=(e,t)=>{let n=Hc(e),o=(r,i=t)=>Aa(n,r,i);return Object.assign(o,n),o},Vc=(e,t)=>e?Bc(e,t):Bc;function Ce(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var hu=require("react-dom"),Pr=(0,$.createContext)(null),C0=Pr.Provider,bu=tt.error001("react");function fe(e,t){let n=(0,$.useContext)(Pr);if(n===null)throw new Error(bu);return Aa(n,e,t)}function ve(){let e=(0,$.useContext)(Pr);if(e===null)throw new Error(bu);return(0,$.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Gc={display:"none"},N0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},yu="react-flow__node-desc",xu="react-flow__edge-desc",M0="react-flow__aria-live",E0=e=>e.ariaLiveMessage,_0=e=>e.ariaLabelConfig;function I0({rfId:e}){let t=fe(E0);return(0,H.jsx)("div",{id:`${M0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:N0,children:t})}function P0({rfId:e,disableKeyboardA11y:t}){let n=fe(_0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{id:`${yu}-${e}`,style:Gc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,H.jsx)("div",{id:`${xu}-${e}`,style:Gc,children:n["edge.a11yDescription.default"]}),!t&&(0,H.jsx)(I0,{rfId:e})]})}var zr=(0,$.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,H.jsx)("div",{className:_e(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});zr.displayName="Panel";var Xc="https://reactflow.dev?utm_source=attribution";function z0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,H.jsx)(zr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Xc}`,children:(0,H.jsx)("a",{href:Xc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var R0=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},Er=e=>e.id;function D0(e,t){return Ce(e.selectedNodes.map(Er),t.selectedNodes.map(Er))&&Ce(e.selectedEdges.map(Er),t.selectedEdges.map(Er))}function T0({onSelectionChange:e}){let t=ve(),{selectedNodes:n,selectedEdges:o}=fe(R0,D0);return(0,$.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var A0=e=>!!e.onSelectionChangeHandlers;function O0({onSelectionChange:e}){let t=fe(A0);return e||t?(0,H.jsx)(T0,{onSelectionChange:e}):null}var wu=[0,0],L0={x:0,y:0,zoom:1},$0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],qc=[...$0,"rfId"],H0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Uc={translateExtent:Fn,nodeOrigin:wu,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function B0(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:u}=fe(H0,Ce),l=ve();(0,$.useEffect)(()=>(u(e.defaultNodes,e.defaultEdges),()=>{d.current=Uc,s()}),[]);let d=(0,$.useRef)(Uc);return(0,$.useEffect)(()=>{for(let c of qc){let p=e[c],m=d.current[c];p!==m&&(typeof e[c]>"u"||(c==="nodes"?t(p):c==="edges"?n(p):c==="minZoom"?o(p):c==="maxZoom"?r(p):c==="translateExtent"?i(p):c==="nodeExtent"?a(p):c==="ariaLabelConfig"?l.setState({ariaLabelConfig:ac(p)}):c==="fitView"?l.setState({fitViewQueued:p}):c==="fitViewOptions"?l.setState({fitViewOptions:p}):l.setState({[c]:p})))}d.current=e},qc.map(c=>e[c])),null}function Yc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function W0(e){let[t,n]=(0,$.useState)(e==="system"?null:e);return(0,$.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Yc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Yc()?.matches?"dark":"light"}var Zc=typeof document<"u"?document:null;function vo(e=null,t={target:Zc,actInsideInputWithModifier:!0}){let[n,o]=(0,$.useState)(!1),r=(0,$.useRef)(!1),i=(0,$.useRef)(new Set([])),[a,s]=(0,$.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(c=>typeof c=="string").map(c=>c.replace("+",`
`).replace(`

`,`
+`).split(`
`)),d=l.reduce((c,p)=>c.concat(...p),[]);return[l,d]}return[[],[]]},[e]);return(0,$.useEffect)(()=>{let u=t?.target??Zc,l=t?.actInsideInputWithModifier??!0;if(e!==null){let d=m=>{if(r.current=m.ctrlKey||m.metaKey||m.shiftKey||m.altKey,(!r.current||r.current&&!l)&&Ma(m))return!1;let g=jc(m.code,s);if(i.current.add(m[g]),Kc(a,i.current,!1)){let y=m.composedPath?.()?.[0]||m.target,b=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(r.current||!b)&&m.preventDefault(),o(!0)}},c=m=>{let h=jc(m.code,s);Kc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(m[h]),m.key==="Meta"&&i.current.clear(),r.current=!1},p=()=>{i.current.clear(),o(!1)};return u?.addEventListener("keydown",d),u?.addEventListener("keyup",c),window.addEventListener("blur",p),window.addEventListener("contextmenu",p),()=>{u?.removeEventListener("keydown",d),u?.removeEventListener("keyup",c),window.removeEventListener("blur",p),window.removeEventListener("contextmenu",p)}}},[e,o]),n}function Kc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function jc(e,t){return t.includes(e)?"code":"key"}var F0=()=>{let e=ve();return(0,$.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),u=xo(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(u,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:u}=a.getBoundingClientRect(),l={x:t.x-s,y:t.y-u},d=n.snapGrid??r,c=n.snapToGrid??i;return qn(l,o,c,d)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=hn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function vu(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let u of a)V0(u,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function V0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function ku(e,t){return vu(e,t)}function Su(e,t){return vu(e,t)}function yn(e,t){return{id:e,type:"select",selected:t}}function Zn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(yn(i.id,a)))}return o}function Qc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Jc(e){return{id:e.id,type:"remove"}}var G0=va("React Flow","https://reactflow.dev/");function X0(e,t,n={}){return cc(e,t,{...n,onError:n.onError??G0})}var eu=e=>Jl(e),q0=e=>ga(e);function Cu(e){return(0,$.forwardRef)(e)}var Nu=typeof window<"u"?$.useLayoutEffect:$.useEffect;function tu(e){let[t,n]=(0,$.useState)(BigInt(0)),[o]=(0,$.useState)(()=>U0(()=>n(r=>r+BigInt(1))));return Nu(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function U0(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Mu=(0,$.createContext)(null);function Y0({children:e}){let t=ve(),n=(0,$.useCallback)(s=>{let{nodes:u=[],setNodes:l,hasDefaultNodes:d,onNodesChange:c,nodeLookup:p,fitViewQueued:m,onNodesChangeMiddlewareMap:h}=t.getState(),g=u;for(let b of s)g=typeof b=="function"?b(g):b;let y=Qc({items:g,lookup:p});for(let b of h.values())y=b(y);d&&l(g),y.length>0?c?.(y):m&&window.requestAnimationFrame(()=>{let{fitViewQueued:b,nodes:w,setNodes:f}=t.getState();b&&f(w)})},[]),o=tu(n),r=(0,$.useCallback)(s=>{let{edges:u=[],setEdges:l,hasDefaultEdges:d,onEdgesChange:c,edgeLookup:p}=t.getState(),m=u;for(let h of s)m=typeof h=="function"?h(m):h;d?l(m):c&&c(Qc({items:m,lookup:p}))},[]),i=tu(r),a=(0,$.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,H.jsx)(Mu.Provider,{value:a,children:e})}function Z0(){let e=(0,$.useContext)(Mu);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var K0=e=>!!e.panZoom;function Ha(){let e=F0(),t=ve(),n=Z0(),o=fe(K0),r=(0,$.useMemo)(()=>{let i=c=>t.getState().nodeLookup.get(c),a=c=>{n.nodeQueue.push(c)},s=c=>{n.edgeQueue.push(c)},u=c=>{let{nodeLookup:p,nodeOrigin:m}=t.getState(),h=eu(c)?c:p.get(c.id),g=h.parentId?Sa(h.position,h.measured,h.parentId,p,m):h.position,y={...h,position:g,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return Gn(y)},l=(c,p,m={replace:!1})=>{a(h=>h.map(g=>{if(g.id===c){let y=typeof p=="function"?p(g):p;return m.replace&&eu(y)?y:{...g,...y}}return g}))},d=(c,p,m={replace:!1})=>{s(h=>h.map(g=>{if(g.id===c){let y=typeof p=="function"?p(g):p;return m.replace&&q0(y)?y:{...g,...y}}return g}))};return{getNodes:()=>t.getState().nodes.map(c=>({...c})),getNode:c=>i(c)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:c=[]}=t.getState();return c.map(p=>({...p}))},getEdge:c=>t.getState().edgeLookup.get(c),setNodes:a,setEdges:s,addNodes:c=>{let p=Array.isArray(c)?c:[c];n.nodeQueue.push(m=>[...m,...p])},addEdges:c=>{let p=Array.isArray(c)?c:[c];n.edgeQueue.push(m=>[...m,...p])},toObject:()=>{let{nodes:c=[],edges:p=[],transform:m}=t.getState(),[h,g,y]=m;return{nodes:c.map(b=>({...b})),edges:p.map(b=>({...b})),viewport:{x:h,y:g,zoom:y}}},deleteElements:async({nodes:c=[],edges:p=[]})=>{let{nodes:m,edges:h,onNodesDelete:g,onEdgesDelete:y,triggerNodeChanges:b,triggerEdgeChanges:w,onDelete:f,onBeforeDelete:v}=t.getState(),{nodes:S,edges:k}=await nc({nodesToRemove:c,edgesToRemove:p,nodes:m,edges:h,onBeforeDelete:v}),N=k.length>0,M=S.length>0;if(N){let E=k.map(Jc);y?.(k),w(E)}if(M){let E=S.map(Jc);g?.(S),b(E)}return(M||N)&&f?.({nodes:S,edges:k}),{deletedNodes:S,deletedEdges:k}},getIntersectingNodes:(c,p=!0,m)=>{let h=wa(c),g=h?c:u(c),y=m!==void 0;return g?(m||t.getState().nodes).filter(b=>{let w=t.getState().nodeLookup.get(b.id);if(w&&!h&&(b.id===c.id||!w.internals.positionAbsolute))return!1;let f=Gn(y?b:w),v=yo(f,g);return p&&v>0||v>=f.width*f.height||v>=g.width*g.height}):[]},isNodeIntersecting:(c,p,m=!0)=>{let g=wa(c)?c:u(c);if(!g)return!1;let y=yo(g,p);return m&&y>0||y>=p.width*p.height||y>=g.width*g.height},updateNode:l,updateNodeData:(c,p,m={replace:!1})=>{l(c,h=>{let g=typeof p=="function"?p(h):p;return m.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},m)},updateEdge:d,updateEdgeData:(c,p,m={replace:!1})=>{d(c,h=>{let g=typeof p=="function"?p(h):p;return m.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},m)},getNodesBounds:c=>{let{nodeLookup:p,nodeOrigin:m}=t.getState();return ba(c,{nodeLookup:p,nodeOrigin:m})},getHandleConnections:({type:c,id:p,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}-${c}${p?`-${p}`:""}`)?.values()??[]),getNodeConnections:({type:c,handleId:p,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}${c?p?`-${c}-${p}`:`-${c}`:""}`)?.values()??[]),fitView:async c=>{let p=t.getState().fitViewResolver??ic();return t.setState({fitViewQueued:!0,fitViewOptions:c,fitViewResolver:p}),n.nodeQueue.push(m=>[...m]),p.promise}}},[]);return(0,$.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var nu=e=>e.selected,j0=typeof window<"u"?window:void 0;function Q0({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=ve(),{deleteElements:o}=Ha(),r=vo(e,{actInsideInputWithModifier:!1}),i=vo(t,{target:j0});(0,$.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(nu),edges:a.filter(nu)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,$.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function J0(e){let t=ve();(0,$.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=br(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",tt.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var Rr={position:"absolute",width:"100%",height:"100%",top:0,left:0},ex=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function tx({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=Ot.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:u,translateExtent:l,minZoom:d,maxZoom:c,zoomActivationKeyCode:p,preventScrolling:m=!0,children:h,noWheelClassName:g,noPanClassName:y,onViewportChange:b,isControlledViewport:w,paneClickDistance:f,selectionOnDrag:v}){let S=ve(),k=(0,$.useRef)(null),{userSelectionActive:N,lib:M,connectionInProgress:E}=fe(ex,Ce),L=vo(p),R=(0,$.useRef)();J0(k);let B=(0,$.useCallback)(D=>{b?.({x:D[0],y:D[1],zoom:D[2]}),w||S.setState({transform:D})},[b,w]);return(0,$.useEffect)(()=>{if(k.current){R.current=Mc({domNode:k.current,minZoom:d,maxZoom:c,translateExtent:l,viewport:u,onDraggingChange:I=>S.setState(C=>C.paneDragging===I?C:{paneDragging:I}),onPanZoomStart:(I,C)=>{let{onViewportChangeStart:P,onMoveStart:A}=S.getState();A?.(I,C),P?.(C)},onPanZoom:(I,C)=>{let{onViewportChange:P,onMove:A}=S.getState();A?.(I,C),P?.(C)},onPanZoomEnd:(I,C)=>{let{onViewportChangeEnd:P,onMoveEnd:A}=S.getState();A?.(I,C),P?.(C)}});let{x:D,y:x,zoom:_}=R.current.getViewport();return S.setState({panZoom:R.current,transform:[D,x,_],domNode:k.current.closest(".react-flow")}),()=>{R.current?.destroy()}}},[]),(0,$.useEffect)(()=>{R.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:L,preventScrolling:m,noPanClassName:y,userSelectionActive:N,noWheelClassName:g,lib:M,onTransformChange:B,connectionInProgress:E,selectionOnDrag:v,paneClickDistance:f})},[e,t,n,o,r,i,a,s,L,m,y,N,g,M,B,E,v,f]),(0,H.jsx)("div",{className:"react-flow__renderer",ref:k,style:Rr,children:h})}var nx=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function ox(){let{userSelectionActive:e,userSelectionRect:t}=fe(nx,Ce);return e&&t?(0,H.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Oa=(e,t)=>n=>{n.target===t.current&&e?.(n)},rx=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function ix({isSelecting:e,selectionKeyPressed:t,selectionMode:n=fn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:u,onPaneClick:l,onPaneContextMenu:d,onPaneScroll:c,onPaneMouseEnter:p,onPaneMouseMove:m,onPaneMouseLeave:h,children:g}){let y=(0,$.useRef)(0),b=ve(),{userSelectionActive:w,elementsSelectable:f,dragging:v,panBy:S,autoPanSpeed:k}=fe(rx,Ce),N=f&&(e||w),M=(0,$.useRef)(null),E=(0,$.useRef)(),L=(0,$.useRef)(new Set),R=(0,$.useRef)(new Set),B=(0,$.useRef)(!1),D=(0,$.useRef)(!1),x=(0,$.useRef)({x:0,y:0}),_=(0,$.useRef)(!1),I=O=>{if(D.current||B.current||b.getState().connection.inProgress){D.current=!1,B.current=!1;return}l?.(O),b.getState().resetSelectedElements(),b.setState({nodesSelectionActive:!1})},C=O=>{if(Array.isArray(o)&&o?.includes(2)){O.preventDefault();return}d?.(O)},P=c?O=>c(O):void 0,A=O=>{D.current&&(O.stopPropagation(),D.current=!1)},V=O=>{let{domNode:Y,transform:re}=b.getState();if(E.current=Y?.getBoundingClientRect(),!E.current)return;let se=O.target===M.current;if(!se&&!!O.target.closest(".nokey")||!e||!(a&&se||t)||O.button!==0||!O.isPrimary)return;O.target?.setPointerCapture?.(O.pointerId),D.current=!1;let{x:ce,y:F}=rt(O.nativeEvent,E.current),ie=qn({x:ce,y:F},re);b.setState({userSelectionRect:{width:0,height:0,startX:ie.x,startY:ie.y,x:ce,y:F}}),se||(O.stopPropagation(),O.preventDefault())};function G(O,Y){let{userSelectionRect:re}=b.getState();if(!re)return;let{transform:se,nodeLookup:Q,edgeLookup:ee,connectionLookup:ce,triggerNodeChanges:F,triggerEdgeChanges:ie,defaultEdgeOptions:pe}=b.getState(),Ne={x:re.startX,y:re.startY},{x:Te,y:Xe}=hn(Ne,se),je={startX:Ne.x,startY:Ne.y,x:O<Te?O:Te,y:Y<Xe?Y:Xe,width:Math.abs(O-Te),height:Math.abs(Y-Xe)},Bt=L.current,Mt=R.current;L.current=new Set(mr(Q,je,se,n===fn.Partial,!0).map(Qe=>Qe.id)),R.current=new Set;let Et=pe?.selectable??!0;for(let Qe of L.current){let lt=ce.get(Qe);if(lt)for(let{edgeId:ct}of lt.values()){let Je=ee.get(ct);Je&&(Je.selectable??Et)&&R.current.add(ct)}}if(!Ca(Bt,L.current)){let Qe=Zn(Q,L.current,!0);F(Qe)}if(!Ca(Mt,R.current)){let Qe=Zn(ee,R.current);ie(Qe)}b.setState({userSelectionRect:je,userSelectionActive:!0,nodesSelectionActive:!1})}function z(){if(!r||!E.current)return;let[O,Y]=fr(x.current,E.current,k);S({x:O,y:Y}).then(re=>{if(!D.current||!re){y.current=requestAnimationFrame(z);return}let{x:se,y:Q}=x.current;G(se,Q),y.current=requestAnimationFrame(z)})}let U=()=>{cancelAnimationFrame(y.current),y.current=0,_.current=!1};(0,$.useEffect)(()=>()=>U(),[]);let Z=O=>{let{userSelectionRect:Y,transform:re,resetSelectedElements:se}=b.getState();if(!E.current||!Y)return;let{x:Q,y:ee}=rt(O.nativeEvent,E.current);x.current={x:Q,y:ee};let ce=hn({x:Y.startX,y:Y.startY},re);if(!D.current){let F=t?0:i;if(Math.hypot(Q-ce.x,ee-ce.y)<=F)return;se(),s?.(O)}D.current=!0,_.current||(z(),_.current=!0),G(Q,ee)},q=O=>{if(!N){O.target===M.current&&b.getState().connection.inProgress&&(B.current=!0);return}O.button===0&&(O.target?.releasePointerCapture?.(O.pointerId),!w&&O.target===M.current&&b.getState().userSelectionRect&&I?.(O),b.setState({userSelectionActive:!1,userSelectionRect:null}),D.current&&(u?.(O),b.setState({nodesSelectionActive:L.current.size>0})),U())},ne=O=>{O.target?.releasePointerCapture?.(O.pointerId),U()},W=o===!0||Array.isArray(o)&&o.includes(0);return(0,H.jsxs)("div",{className:_e(["react-flow__pane",{draggable:W,dragging:v,selection:e}]),onClick:N?void 0:Oa(I,M),onContextMenu:Oa(C,M),onWheel:Oa(P,M),onPointerEnter:N?void 0:p,onPointerMove:N?Z:m,onPointerUp:q,onPointerCancel:N?ne:void 0,onPointerDownCapture:N?V:void 0,onClickCapture:N?A:void 0,onPointerLeave:h,ref:M,style:Rr,children:[g,(0,H.jsx)(ox,{})]})}function $a({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:u}=t.getState(),l=s.get(e);if(!l){u?.("012",tt.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&a)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Eu({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=ve(),[u,l]=(0,$.useState)(!1),d=(0,$.useRef)();return(0,$.useEffect)(()=>{if(!t)return d.current=yc({getStoreItems:()=>s.getState(),onNodeMouseDown:c=>{$a({id:c,store:s,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,s,e]),(0,$.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),u}var ax=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function _u(){let e=ve();return(0,$.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:u,nodeLookup:l,nodeOrigin:d}=e.getState(),c=new Map,p=ax(a),m=r?i[0]:5,h=r?i[1]:5,g=n.direction.x*m*n.factor,y=n.direction.y*h*n.factor;for(let[,b]of l){if(!p(b))continue;let w={x:b.internals.positionAbsolute.x+g,y:b.internals.positionAbsolute.y+y};r&&(w=Xn(w,i));let{position:f,positionAbsolute:v}=ya({nodeId:b.id,nextPosition:w,nodeLookup:l,nodeExtent:o,nodeOrigin:d,onError:s});b.position=f,b.internals.positionAbsolute=v,c.set(b.id,b)}u(c)},[])}var Ba=(0,$.createContext)(null),sx=Ba.Provider;Ba.Consumer;var Iu=()=>(0,$.useContext)(Ba),lx=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Pu=(0,$.createContext)(null);function cx({children:e}){let t=fe(lx,Ce);return(0,H.jsx)(Pu.Provider,{value:t,children:e})}function ux(){let e=(0,$.useContext)(Pu);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var dx={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},px=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:u,isValid:l}=a;if(!s&&!r)return dx;let d=u?.nodeId===e&&u?.id===t&&u?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:d,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Xt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:d&&l}};function mx({type:e="source",position:t=te.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:u,className:l,onMouseDown:d,onTouchStart:c,...p},m){let h=a||null,g=e==="target",y=ve(),b=Iu(),{connectOnClick:w,noPanClassName:f,rfId:v}=ux(),{connectingFrom:S,connectingTo:k,clickConnecting:N,isPossibleEndHandle:M,connectionInProcess:E,clickConnectionInProcess:L,valid:R}=fe(px(b,h,e),Ce);b||y.getState().onError?.("010",tt.error010());let B=_=>{let{defaultEdgeOptions:I,onConnect:C,hasDefaultEdges:P}=y.getState(),A={...I,..._};if(P){let{edges:V,setEdges:G,onError:z}=y.getState();G(X0(A,V,{onError:z}))}C?.(A),s?.(A)},D=_=>{if(!b)return;let I=Ea(_.nativeEvent);if(r&&(I&&_.button===0||!I)){let C=y.getState();Cr.onPointerDown(_.nativeEvent,{handleDomNode:_.currentTarget,autoPanOnConnect:C.autoPanOnConnect,connectionMode:C.connectionMode,connectionRadius:C.connectionRadius,domNode:C.domNode,nodeLookup:C.nodeLookup,lib:C.lib,isTarget:g,handleId:h,nodeId:b,flowId:C.rfId,panBy:C.panBy,cancelConnection:C.cancelConnection,onConnectStart:C.onConnectStart,onConnectEnd:(...P)=>y.getState().onConnectEnd?.(...P),updateConnection:C.updateConnection,onConnect:B,isValidConnection:n||((...P)=>y.getState().isValidConnection?.(...P)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:C.autoPanSpeed,dragThreshold:C.connectionDragThreshold})}I?d?.(_):c?.(_)},x=_=>{let{onClickConnectStart:I,onClickConnectEnd:C,connectionClickStartHandle:P,connectionMode:A,isValidConnection:V,lib:G,rfId:z,nodeLookup:U,connection:Z}=y.getState();if(!b||!P&&!r)return;if(!P){I?.(_.nativeEvent,{nodeId:b,handleId:h,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:b,type:e,id:h}});return}let q=Na(_.target),ne=n||V,{connection:W,isValid:O}=Cr.isValid(_.nativeEvent,{handle:{nodeId:b,id:h,type:e},connectionMode:A,fromNodeId:P.nodeId,fromHandleId:P.id||null,fromType:P.type,isValidConnection:ne,flowId:z,doc:q,lib:G,nodeLookup:U});O&&W&&B(W);let Y=structuredClone(Z);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,C?.(_,Y),y.setState({connectionClickStartHandle:null})};return(0,H.jsx)("div",{"data-handleid":h,"data-nodeid":b,"data-handlepos":t,"data-id":`${v}-${b}-${h}-${e}`,className:_e(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",f,l,{source:!g,target:g,connectable:o,connectablestart:r,connectableend:i,clickconnecting:N,connectingfrom:S,connectingto:k,valid:R,connectionindicator:o&&(!E||M)&&(E||L?i:r)}]),onMouseDown:D,onTouchStart:D,onClick:w?x:void 0,ref:m,...p,children:u})}var xn=(0,$.memo)(Cu(mx));function fx({data:e,isConnectable:t,sourcePosition:n=te.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[e?.label,(0,H.jsx)(xn,{type:"source",position:n,isConnectable:t})]})}function gx({data:e,isConnectable:t,targetPosition:n=te.Top,sourcePosition:o=te.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(xn,{type:"target",position:n,isConnectable:t}),e?.label,(0,H.jsx)(xn,{type:"source",position:o,isConnectable:t})]})}function hx(){return null}function bx({data:e,isConnectable:t,targetPosition:n=te.Top}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(xn,{type:"target",position:n,isConnectable:t}),e?.label]})}var Ir={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},ou={input:fx,default:gx,output:bx,group:hx};function yx(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var xx=e=>{let{width:t,height:n,x:o,y:r}=Vn(e.nodeLookup,{filter:i=>!!i.selected});return{width:ot(t)?t:null,height:ot(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function wx({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=ve(),{width:r,height:i,transformString:a,userSelectionActive:s}=fe(xx,Ce),u=_u(),l=(0,$.useRef)(null);(0,$.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let d=!s&&r!==null&&i!==null;if(Eu({nodeRef:l,disabled:!d}),!d)return null;let c=e?m=>{let h=o.getState().nodes.filter(g=>g.selected);e(m,h)}:void 0,p=m=>{Object.prototype.hasOwnProperty.call(Ir,m.key)&&(m.preventDefault(),u({direction:Ir[m.key],factor:m.shiftKey?4:1}))};return(0,H.jsx)("div",{className:_e(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,H.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:c,tabIndex:n?void 0:-1,onKeyDown:n?void 0:p,style:{width:r,height:i}})})}var ru=typeof window<"u"?window:void 0,vx=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function zu({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:u,selectionKeyCode:l,selectionOnDrag:d,selectionMode:c,onSelectionStart:p,onSelectionEnd:m,multiSelectionKeyCode:h,panActivationKeyCode:g,zoomActivationKeyCode:y,elementsSelectable:b,zoomOnScroll:w,zoomOnPinch:f,panOnScroll:v,panOnScrollSpeed:S,panOnScrollMode:k,zoomOnDoubleClick:N,panOnDrag:M,autoPanOnSelection:E,defaultViewport:L,translateExtent:R,minZoom:B,maxZoom:D,preventScrolling:x,onSelectionContextMenu:_,noWheelClassName:I,noPanClassName:C,disableKeyboardA11y:P,onViewportChange:A,isControlledViewport:V}){let{nodesSelectionActive:G,userSelectionActive:z}=fe(vx,Ce),U=vo(l,{target:ru}),Z=vo(g,{target:ru}),q=Z||M,ne=Z||v,W=d&&q!==!0,O=U||z||W;return Q0({deleteKeyCode:u,multiSelectionKeyCode:h}),(0,H.jsx)(tx,{onPaneContextMenu:i,elementsSelectable:b,zoomOnScroll:w,zoomOnPinch:f,panOnScroll:ne,panOnScrollSpeed:S,panOnScrollMode:k,zoomOnDoubleClick:N,panOnDrag:!U&&q,defaultViewport:L,translateExtent:R,minZoom:B,maxZoom:D,zoomActivationKeyCode:y,preventScrolling:x,noWheelClassName:I,noPanClassName:C,onViewportChange:A,isControlledViewport:V,paneClickDistance:s,selectionOnDrag:W,children:(0,H.jsxs)(ix,{onSelectionStart:p,onSelectionEnd:m,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:q,autoPanOnSelection:E,isSelecting:!!O,selectionMode:c,selectionKeyPressed:U,paneClickDistance:s,selectionOnDrag:W,children:[e,G&&(0,H.jsx)(wx,{onSelectionContextMenu:_,noPanClassName:C,disableKeyboardA11y:P})]})})}zu.displayName="FlowRenderer";var kx=(0,$.memo)(zu),Sx=e=>t=>e?mr(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function Cx(e){return fe((0,$.useCallback)(Sx(e),[e]),Ce)}var Nx=e=>e.updateNodeInternals;function Mx(){let e=fe(Nx),[t]=(0,$.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,$.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Ex({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=ve(),i=(0,$.useRef)(null),a=(0,$.useRef)(null),s=(0,$.useRef)(e.sourcePosition),u=(0,$.useRef)(e.targetPosition),l=(0,$.useRef)(t),d=n&&!!e.internals.handleBounds;return(0,$.useEffect)(()=>{i.current&&!e.hidden&&(!d||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[d,e.hidden]),(0,$.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,$.useEffect)(()=>{if(i.current){let c=l.current!==t,p=s.current!==e.sourcePosition,m=u.current!==e.targetPosition;(c||p||m)&&(l.current=t,s.current=e.sourcePosition,u.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function _x({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:u,nodesConnectable:l,nodesFocusable:d,resizeObserver:c,noDragClassName:p,noPanClassName:m,disableKeyboardA11y:h,rfId:g,nodeTypes:y,nodeClickDistance:b,onError:w}){let{node:f,internals:v,isParent:S}=fe(O=>{let Y=O.nodeLookup.get(e),re=O.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:re}},Ce),k=f.type||"default",N=y?.[k]||ou[k];N===void 0&&(w?.("003",tt.error003(k)),k="default",N=y?.default||ou.default);let M=!!(f.draggable||s&&typeof f.draggable>"u"),E=!!(f.selectable||u&&typeof f.selectable>"u"),L=!!(f.connectable||l&&typeof f.connectable>"u"),R=!!(f.focusable||d&&typeof f.focusable>"u"),B=ve(),D=ka(f),x=Ex({node:f,nodeType:k,hasDimensions:D,resizeObserver:c}),_=Eu({nodeRef:x,disabled:f.hidden||!M,noDragClassName:p,handleSelector:f.dragHandle,nodeId:e,isSelectable:E,nodeClickDistance:b}),I=_u();if(f.hidden)return null;let C=mt(f),P=yx(f),A=E||M||t||n||o||r,V=n?O=>n(O,{...v.userNode}):void 0,G=o?O=>o(O,{...v.userNode}):void 0,z=r?O=>r(O,{...v.userNode}):void 0,U=i?O=>i(O,{...v.userNode}):void 0,Z=a?O=>a(O,{...v.userNode}):void 0,q=O=>{let{selectNodesOnDrag:Y,nodeDragThreshold:re}=B.getState();E&&(!Y||!M||re>0)&&$a({id:e,store:B,nodeRef:x}),t&&t(O,{...v.userNode})},ne=O=>{if(!(Ma(O.nativeEvent)||h)){if(da.includes(O.key)&&E){let Y=O.key==="Escape";$a({id:e,store:B,unselect:Y,nodeRef:x})}else if(M&&f.selected&&Object.prototype.hasOwnProperty.call(Ir,O.key)){O.preventDefault();let{ariaLabelConfig:Y}=B.getState();B.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:O.key.replace("Arrow","").toLowerCase(),x:~~v.positionAbsolute.x,y:~~v.positionAbsolute.y})}),I({direction:Ir[O.key],factor:O.shiftKey?4:1})}}},W=()=>{if(h||!x.current?.matches(":focus-visible"))return;let{transform:O,width:Y,height:re,autoPanOnNodeFocus:se,setCenter:Q}=B.getState();if(!se)return;mr(new Map([[e,f]]),{x:0,y:0,width:Y,height:re},O,!0).length>0||Q(f.position.x+C.width/2,f.position.y+C.height/2,{zoom:O[2]})};return(0,H.jsx)("div",{className:_e(["react-flow__node",`react-flow__node-${k}`,{[m]:M},f.className,{selected:f.selected,selectable:E,parent:S,draggable:M,dragging:_}]),ref:x,style:{zIndex:v.z,transform:`translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,pointerEvents:A?"all":"none",visibility:D?"visible":"hidden",...f.style,...P},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:G,onMouseLeave:z,onContextMenu:U,onClick:q,onDoubleClick:Z,onKeyDown:R?ne:void 0,tabIndex:R?0:void 0,onFocus:R?W:void 0,role:f.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${yu}-${g}`,"aria-label":f.ariaLabel,...f.domAttributes,children:(0,H.jsx)(sx,{value:e,children:(0,H.jsx)(N,{id:e,data:f.data,type:k,positionAbsoluteX:v.positionAbsolute.x,positionAbsoluteY:v.positionAbsolute.y,selected:f.selected??!1,selectable:E,draggable:M,deletable:f.deletable??!0,isConnectable:L,sourcePosition:f.sourcePosition,targetPosition:f.targetPosition,dragging:_,dragHandle:f.dragHandle,zIndex:v.z,parentId:f.parentId,...C})})})}var Ix=(0,$.memo)(_x),Px=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Ru(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=fe(Px,Ce),i=Cx(e.onlyRenderVisibleElements),a=Mx();return(0,H.jsx)("div",{className:"react-flow__nodes",style:Rr,children:i.map(s=>(0,H.jsx)(Ix,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}Ru.displayName="NodeRenderer";var zx=(0,$.memo)(Ru);function Rx(e){return fe((0,$.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&lc({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),Ce)}var Dx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,H.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Tx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,H.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},iu={[Bn.Arrow]:Dx,[Bn.ArrowClosed]:Tx};function Ax(e){let t=ve();return(0,$.useMemo)(()=>Object.prototype.hasOwnProperty.call(iu,e)?iu[e]:(t.getState().onError?.("009",tt.error009(e)),null),[e])}var Ox=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let u=Ax(t);return u?(0,H.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,H.jsx)(u,{color:n,strokeWidth:a})}):null},Du=({defaultColor:e,rfId:t})=>{let n=fe(i=>i.edges),o=fe(i=>i.defaultEdgeOptions),r=(0,$.useMemo)(()=>dc(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,H.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,H.jsx)("defs",{children:r.map(i=>(0,H.jsx)(Ox,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Du.displayName="MarkerDefinitions";var Lx=(0,$.memo)(Du);function Tu({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:u,className:l,...d}){let[c,p]=(0,$.useState)({x:1,y:0,width:0,height:0}),m=_e(["react-flow__edge-textwrapper",l]),h=(0,$.useRef)(null);return(0,$.useEffect)(()=>{if(h.current){let g=h.current.getBBox();p({x:g.x,y:g.y,width:g.width,height:g.height})}},[n]),n?(0,H.jsxs)("g",{transform:`translate(${e-c.width/2} ${t-c.height/2})`,className:m,visibility:c.width?"visible":"hidden",...d,children:[r&&(0,H.jsx)("rect",{width:c.width+2*a[0],x:-a[0],y:-a[1],height:c.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,H.jsx)("text",{className:"react-flow__edge-text",y:c.height/2,dy:"0.3em",ref:h,style:o,children:n}),u]}):null}Tu.displayName="EdgeText";var $x=(0,$.memo)(Tu);function Dr({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:u,interactionWidth:l=20,...d}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("path",{...d,d:e,fill:"none",className:_e(["react-flow__edge-path",d.className])}),l?(0,H.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&ot(t)&&ot(n)?(0,H.jsx)($x,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:u}):null]})}function au({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===te.Left||e===te.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Au({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top}){let[a,s]=au({pos:n,x1:e,y1:t,x2:o,y2:r}),[u,l]=au({pos:i,x1:o,y1:r,x2:e,y2:t}),[d,c,p,m]=yr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:u,targetControlY:l});return[`M${e},${t} C${a},${s} ${u},${l} ${o},${r}`,d,c,p,m]}function Ou(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:u,labelStyle:l,labelShowBg:d,labelBgStyle:c,labelBgPadding:p,labelBgBorderRadius:m,style:h,markerEnd:g,markerStart:y,interactionWidth:b})=>{let[w,f,v]=Au({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),S=e.isInternal?void 0:t;return(0,H.jsx)(Dr,{id:S,path:w,labelX:f,labelY:v,label:u,labelStyle:l,labelShowBg:d,labelBgStyle:c,labelBgPadding:p,labelBgBorderRadius:m,style:h,markerEnd:g,markerStart:y,interactionWidth:b})})}var Hx=Ou({isInternal:!1}),Lu=Ou({isInternal:!0});Hx.displayName="SimpleBezierEdge";Lu.displayName="SimpleBezierEdgeInternal";function $u(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:c,style:p,sourcePosition:m=te.Bottom,targetPosition:h=te.Top,markerEnd:g,markerStart:y,pathOptions:b,interactionWidth:w})=>{let[f,v,S]=wo({sourceX:n,sourceY:o,sourcePosition:m,targetX:r,targetY:i,targetPosition:h,borderRadius:b?.borderRadius,offset:b?.offset,stepPosition:b?.stepPosition}),k=e.isInternal?void 0:t;return(0,H.jsx)(Dr,{id:k,path:f,labelX:v,labelY:S,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:c,style:p,markerEnd:g,markerStart:y,interactionWidth:w})})}var Hu=$u({isInternal:!1}),Bu=$u({isInternal:!0});Hu.displayName="SmoothStepEdge";Bu.displayName="SmoothStepEdgeInternal";function Wu(e){return(0,$.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,H.jsx)(Hu,{...n,id:o,pathOptions:(0,$.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Bx=Wu({isInternal:!1}),Fu=Wu({isInternal:!0});Bx.displayName="StepEdge";Fu.displayName="StepEdgeInternal";function Vu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:c,style:p,markerEnd:m,markerStart:h,interactionWidth:g})=>{let[y,b,w]=wr({sourceX:n,sourceY:o,targetX:r,targetY:i}),f=e.isInternal?void 0:t;return(0,H.jsx)(Dr,{id:f,path:y,labelX:b,labelY:w,label:a,labelStyle:s,labelShowBg:u,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:c,style:p,markerEnd:m,markerStart:h,interactionWidth:g})})}var Wx=Vu({isInternal:!1}),Gu=Vu({isInternal:!0});Wx.displayName="StraightEdge";Gu.displayName="StraightEdgeInternal";function Xu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=te.Bottom,targetPosition:s=te.Top,label:u,labelStyle:l,labelShowBg:d,labelBgStyle:c,labelBgPadding:p,labelBgBorderRadius:m,style:h,markerEnd:g,markerStart:y,pathOptions:b,interactionWidth:w})=>{let[f,v,S]=xr({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:b?.curvature}),k=e.isInternal?void 0:t;return(0,H.jsx)(Dr,{id:k,path:f,labelX:v,labelY:S,label:u,labelStyle:l,labelShowBg:d,labelBgStyle:c,labelBgPadding:p,labelBgBorderRadius:m,style:h,markerEnd:g,markerStart:y,interactionWidth:w})})}var Fx=Xu({isInternal:!1}),qu=Xu({isInternal:!0});Fx.displayName="BezierEdge";qu.displayName="BezierEdgeInternal";var su={default:qu,straight:Gu,step:Fu,smoothstep:Bu,simplebezier:Lu},lu={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Vx=(e,t,n)=>n===te.Left?e-t:n===te.Right?e+t:e,Gx=(e,t,n)=>n===te.Top?e-t:n===te.Bottom?e+t:e,cu="react-flow__edgeupdater";function uu({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,H.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:_e([cu,`${cu}-${s}`]),cx:Vx(t,o,e),cy:Gx(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function Xx({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:u,onReconnect:l,onReconnectStart:d,onReconnectEnd:c,setReconnecting:p,setUpdateHover:m}){let h=ve(),g=(v,S)=>{if(v.button!==0)return;let{autoPanOnConnect:k,domNode:N,connectionMode:M,connectionRadius:E,lib:L,onConnectStart:R,cancelConnection:B,nodeLookup:D,rfId:x,panBy:_,updateConnection:I}=h.getState(),C=S.type==="target",P=(G,z)=>{p(!1),c?.(G,n,S.type,z)},A=G=>l?.(n,G),V=(G,z)=>{p(!0),d?.(v,n,S.type),R?.(G,z)};Cr.onPointerDown(v.nativeEvent,{autoPanOnConnect:k,connectionMode:M,connectionRadius:E,domNode:N,handleId:S.id,nodeId:S.nodeId,nodeLookup:D,isTarget:C,edgeUpdaterType:S.type,lib:L,flowId:x,cancelConnection:B,panBy:_,isValidConnection:(...G)=>h.getState().isValidConnection?.(...G)??!0,onConnect:A,onConnectStart:V,onConnectEnd:(...G)=>h.getState().onConnectEnd?.(...G),onReconnectEnd:P,updateConnection:I,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:v.currentTarget})},y=v=>g(v,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),b=v=>g(v,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),w=()=>m(!0),f=()=>m(!1);return(0,H.jsxs)(H.Fragment,{children:[(e===!0||e==="source")&&(0,H.jsx)(uu,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:y,onMouseEnter:w,onMouseOut:f,type:"source"}),(e===!0||e==="target")&&(0,H.jsx)(uu,{position:u,centerX:i,centerY:a,radius:t,onMouseDown:b,onMouseEnter:w,onMouseOut:f,type:"target"})]})}function qx({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:u,onMouseLeave:l,reconnectRadius:d,onReconnect:c,onReconnectStart:p,onReconnectEnd:m,rfId:h,edgeTypes:g,noPanClassName:y,onError:b,disableKeyboardA11y:w}){let f=fe(Q=>Q.edgeLookup.get(e)),v=fe(Q=>Q.defaultEdgeOptions);f=v?{...v,...f}:f;let S=f.type||"default",k=g?.[S]||su[S];k===void 0&&(b?.("011",tt.error011(S)),S="default",k=g?.default||su.default);let N=!!(f.focusable||t&&typeof f.focusable>"u"),M=typeof c<"u"&&(f.reconnectable||n&&typeof f.reconnectable>"u"),E=!!(f.selectable||o&&typeof f.selectable>"u"),L=(0,$.useRef)(null),[R,B]=(0,$.useState)(!1),[D,x]=(0,$.useState)(!1),_=ve(),{zIndex:I=f.zIndex,sourceX:C,sourceY:P,targetX:A,targetY:V,sourcePosition:G,targetPosition:z}=fe((0,$.useCallback)(Q=>{let ee=Q.nodeLookup.get(f.source),ce=Q.nodeLookup.get(f.target);if(!ee||!ce)return lu;let F=uc({id:e,sourceNode:ee,targetNode:ce,sourceHandle:f.sourceHandle||null,targetHandle:f.targetHandle||null,connectionMode:Q.connectionMode,onError:b}),ie=sc({selected:f.selected,zIndex:f.zIndex,sourceNode:ee,targetNode:ce,elevateOnSelect:Q.elevateEdgesOnSelect,zIndexMode:Q.zIndexMode});return{...F||lu,zIndex:ie}},[f.source,f.target,f.sourceHandle,f.targetHandle,f.selected,f.zIndex]),Ce),U=(0,$.useMemo)(()=>f.markerStart?`url('#${vr(f.markerStart,h)}')`:void 0,[f.markerStart,h]),Z=(0,$.useMemo)(()=>f.markerEnd?`url('#${vr(f.markerEnd,h)}')`:void 0,[f.markerEnd,h]);if(f.hidden||C===null||P===null||A===null||V===null)return null;let q=Q=>{let{addSelectedEdges:ee,unselectNodesAndEdges:ce,multiSelectionActive:F}=_.getState();E&&(_.setState({nodesSelectionActive:!1}),f.selected&&F?(ce({nodes:[],edges:[f]}),L.current?.blur()):ee([e])),r&&r(Q,f)},ne=i?Q=>{i(Q,{...f})}:void 0,W=a?Q=>{a(Q,{...f})}:void 0,O=s?Q=>{s(Q,{...f})}:void 0,Y=u?Q=>{u(Q,{...f})}:void 0,re=l?Q=>{l(Q,{...f})}:void 0,se=Q=>{if(!w&&da.includes(Q.key)&&E){let{unselectNodesAndEdges:ee,addSelectedEdges:ce}=_.getState();Q.key==="Escape"?(L.current?.blur(),ee({edges:[f]})):ce([e])}};return(0,H.jsx)("svg",{style:{zIndex:I},children:(0,H.jsxs)("g",{className:_e(["react-flow__edge",`react-flow__edge-${S}`,f.className,y,{selected:f.selected,animated:f.animated,inactive:!E&&!r,updating:R,selectable:E}]),onClick:q,onDoubleClick:ne,onContextMenu:W,onMouseEnter:O,onMouseMove:Y,onMouseLeave:re,onKeyDown:N?se:void 0,tabIndex:N?0:void 0,role:f.ariaRole??(N?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":f.ariaLabel===null?void 0:f.ariaLabel||`Edge from ${f.source} to ${f.target}`,"aria-describedby":N?`${xu}-${h}`:void 0,ref:L,...f.domAttributes,children:[!D&&(0,H.jsx)(k,{id:e,source:f.source,target:f.target,type:f.type,selected:f.selected,animated:f.animated,selectable:E,deletable:f.deletable??!0,label:f.label,labelStyle:f.labelStyle,labelShowBg:f.labelShowBg,labelBgStyle:f.labelBgStyle,labelBgPadding:f.labelBgPadding,labelBgBorderRadius:f.labelBgBorderRadius,sourceX:C,sourceY:P,targetX:A,targetY:V,sourcePosition:G,targetPosition:z,data:f.data,style:f.style,sourceHandleId:f.sourceHandle,targetHandleId:f.targetHandle,markerStart:U,markerEnd:Z,pathOptions:"pathOptions"in f?f.pathOptions:void 0,interactionWidth:f.interactionWidth}),M&&(0,H.jsx)(Xx,{edge:f,isReconnectable:M,reconnectRadius:d,onReconnect:c,onReconnectStart:p,onReconnectEnd:m,sourceX:C,sourceY:P,targetX:A,targetY:V,sourcePosition:G,targetPosition:z,setUpdateHover:B,setReconnecting:x})]})})}var Ux=(0,$.memo)(qx),Yx=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Uu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:u,onEdgeMouseLeave:l,onEdgeClick:d,reconnectRadius:c,onEdgeDoubleClick:p,onReconnectStart:m,onReconnectEnd:h,disableKeyboardA11y:g}){let{edgesFocusable:y,edgesReconnectable:b,elementsSelectable:w,onError:f}=fe(Yx,Ce),v=Rx(t);return(0,H.jsxs)("div",{className:"react-flow__edges",children:[(0,H.jsx)(Lx,{defaultColor:e,rfId:n}),v.map(S=>(0,H.jsx)(Ux,{id:S,edgesFocusable:y,edgesReconnectable:b,elementsSelectable:w,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:u,onMouseLeave:l,onClick:d,reconnectRadius:c,onDoubleClick:p,onReconnectStart:m,onReconnectEnd:h,rfId:n,onError:f,edgeTypes:o,disableKeyboardA11y:g},S))]})}Uu.displayName="EdgeRenderer";var Zx=(0,$.memo)(Uu),du=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Kx({children:e}){let t=ve(),n=(0,$.useRef)(null),[o]=(0,$.useState)(()=>t.getState().transform);return Nu(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=du(a)))};return i(),t.subscribe(i)},[t]),(0,H.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:du(o)},children:e})}function jx(e){let t=Ha(),n=(0,$.useRef)(!1);(0,$.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Qx=e=>e.panZoom?.syncViewport;function Jx(e){let t=fe(Qx),n=ve();return(0,$.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function pu(e){return e.connection.inProgress?{...e.connection,to:qn(e.connection.to,e.transform)}:{...e.connection}}function ew(e){return e?n=>{let o=pu(n);return e(o)}:pu}function tw(e){let t=ew(e);return fe(t,Ce)}var nw=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function ow({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:u}=fe(nw,Ce);return!(i&&r&&u)?null:(0,H.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,H.jsx)("g",{className:_e(["react-flow__connection",fa(s)]),children:(0,H.jsx)(Yu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var Yu=({style:e,type:t=yt.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:u,to:l,toNode:d,toHandle:c,toPosition:p,pointer:m}=tw();if(!r)return;if(n)return(0,H.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:u,toPosition:p,connectionStatus:fa(o),toNode:d,toHandle:c,pointer:m});let h="",g={sourceX:i.x,sourceY:i.y,sourcePosition:u,targetX:l.x,targetY:l.y,targetPosition:p};switch(t){case yt.Bezier:[h]=xr(g);break;case yt.SimpleBezier:[h]=Au(g);break;case yt.Step:[h]=wo({...g,borderRadius:0});break;case yt.SmoothStep:[h]=wo(g);break;default:[h]=wr(g)}return(0,H.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};Yu.displayName="ConnectionLine";var rw={};function mu(e=rw){let t=(0,$.useRef)(e),n=ve();(0,$.useEffect)(()=>{},[e])}function iw(){let e=ve(),t=(0,$.useRef)(!1);(0,$.useEffect)(()=>{},[])}function Zu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:u,onNodeMouseLeave:l,onNodeContextMenu:d,onSelectionContextMenu:c,onSelectionStart:p,onSelectionEnd:m,connectionLineType:h,connectionLineStyle:g,connectionLineComponent:y,connectionLineContainerStyle:b,selectionKeyCode:w,selectionOnDrag:f,selectionMode:v,multiSelectionKeyCode:S,panActivationKeyCode:k,zoomActivationKeyCode:N,deleteKeyCode:M,onlyRenderVisibleElements:E,elementsSelectable:L,defaultViewport:R,translateExtent:B,minZoom:D,maxZoom:x,preventScrolling:_,defaultMarkerColor:I,zoomOnScroll:C,zoomOnPinch:P,panOnScroll:A,panOnScrollSpeed:V,panOnScrollMode:G,zoomOnDoubleClick:z,panOnDrag:U,autoPanOnSelection:Z,onPaneClick:q,onPaneMouseEnter:ne,onPaneMouseMove:W,onPaneMouseLeave:O,onPaneScroll:Y,onPaneContextMenu:re,paneClickDistance:se,nodeClickDistance:Q,onEdgeContextMenu:ee,onEdgeMouseEnter:ce,onEdgeMouseMove:F,onEdgeMouseLeave:ie,reconnectRadius:pe,onReconnect:Ne,onReconnectStart:Te,onReconnectEnd:Xe,noDragClassName:je,noWheelClassName:Bt,noPanClassName:Mt,disableKeyboardA11y:Et,nodeExtent:Qe,rfId:lt,viewport:ct,onViewportChange:Je,nodesDraggable:Jn}){return mu(e),mu(t),iw(),jx(n),Jx(ct),(0,H.jsx)(kx,{onPaneClick:q,onPaneMouseEnter:ne,onPaneMouseMove:W,onPaneMouseLeave:O,onPaneContextMenu:re,onPaneScroll:Y,paneClickDistance:se,deleteKeyCode:M,selectionKeyCode:w,selectionOnDrag:f,selectionMode:v,onSelectionStart:p,onSelectionEnd:m,multiSelectionKeyCode:S,panActivationKeyCode:k,zoomActivationKeyCode:N,elementsSelectable:L,zoomOnScroll:C,zoomOnPinch:P,zoomOnDoubleClick:z,panOnScroll:A,panOnScrollSpeed:V,panOnScrollMode:G,panOnDrag:U,autoPanOnSelection:Z,defaultViewport:R,translateExtent:B,minZoom:D,maxZoom:x,onSelectionContextMenu:c,preventScrolling:_,noDragClassName:je,noWheelClassName:Bt,noPanClassName:Mt,disableKeyboardA11y:Et,onViewportChange:Je,isControlledViewport:!!ct,children:(0,H.jsxs)(Kx,{children:[(0,H.jsx)(Zx,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:Ne,onReconnectStart:Te,onReconnectEnd:Xe,onlyRenderVisibleElements:E,onEdgeContextMenu:ee,onEdgeMouseEnter:ce,onEdgeMouseMove:F,onEdgeMouseLeave:ie,reconnectRadius:pe,defaultMarkerColor:I,noPanClassName:Mt,disableKeyboardA11y:Et,rfId:lt}),(0,H.jsx)(ow,{style:g,type:h,component:y,containerStyle:b}),(0,H.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,H.jsx)(zx,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:u,onNodeMouseLeave:l,onNodeContextMenu:d,nodeClickDistance:Q,onlyRenderVisibleElements:E,noPanClassName:Mt,noDragClassName:je,disableKeyboardA11y:Et,nodeExtent:Qe,rfId:lt,nodesDraggable:Jn}),(0,H.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Zu.displayName="GraphView";var aw=(0,$.memo)(Zu),sw=va("React Flow","https://reactflow.dev/"),fu=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:u=.5,maxZoom:l=2,nodeOrigin:d,nodeExtent:c,zIndexMode:p="basic"}={})=>{let m=new Map,h=new Map,g=new Map,y=new Map,b=o??t??[],w=n??e??[],f=d??[0,0],v=c??Fn;Da(g,y,b);let{nodesInitialized:S}=kr(w,m,h,{nodeOrigin:f,nodeExtent:v,zIndexMode:p}),k=[0,0,1];if(a&&r&&i){let N=Vn(m,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:M,y:E,zoom:L}=xo(N,r,i,u,l,s?.padding??.1);k=[M,E,L]}return{rfId:"1",width:r??0,height:i??0,transform:k,nodes:w,nodesInitialized:S,nodeLookup:m,parentLookup:h,edges:b,edgeLookup:y,connectionLookup:g,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:u,maxZoom:l,translateExtent:Fn,nodeExtent:v,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Xt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:f,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...ma},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:sw,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:pa,zIndexMode:p,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},lw=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:u,maxZoom:l,nodeOrigin:d,nodeExtent:c,zIndexMode:p})=>Vc((m,h)=>{async function g(){let{nodeLookup:y,panZoom:b,fitViewOptions:w,fitViewResolver:f,width:v,height:S,minZoom:k,maxZoom:N}=h();b&&(await tc({nodes:y,width:v,height:S,panZoom:b,minZoom:k,maxZoom:N},w),f?.resolve(!0),m({fitViewResolver:null}))}return{...fu({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:u,maxZoom:l,nodeOrigin:d,nodeExtent:c,defaultNodes:n,defaultEdges:o,zIndexMode:p}),setNodes:y=>{let{nodeLookup:b,parentLookup:w,nodeOrigin:f,elevateNodesOnSelect:v,fitViewQueued:S,zIndexMode:k,nodesSelectionActive:N}=h(),{nodesInitialized:M,hasSelectedNodes:E}=kr(y,b,w,{nodeOrigin:f,nodeExtent:c,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:k}),L=N&&E;S&&M?(g(),m({nodes:y,nodesInitialized:M,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:L})):m({nodes:y,nodesInitialized:M,nodesSelectionActive:L})},setEdges:y=>{let{connectionLookup:b,edgeLookup:w}=h();Da(b,w,y),m({edges:y})},setDefaultNodesAndEdges:(y,b)=>{if(y){let{setNodes:w}=h();w(y),m({hasDefaultNodes:!0})}if(b){let{setEdges:w}=h();w(b),m({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:b,nodeLookup:w,parentLookup:f,domNode:v,nodeOrigin:S,nodeExtent:k,debug:N,fitViewQueued:M,zIndexMode:E}=h(),{changes:L,updatedInternals:R}=gc(y,w,f,v,S,k,E);R&&(mc(w,f,{nodeOrigin:S,nodeExtent:k,zIndexMode:E}),M?(g(),m({fitViewQueued:!1,fitViewOptions:void 0})):m({}),L?.length>0&&(N&&console.log("React Flow: trigger node changes",L),b?.(L)))},updateNodePositions:(y,b=!1)=>{let w=[],f=[],{nodeLookup:v,triggerNodeChanges:S,connection:k,updateConnection:N,onNodesChangeMiddlewareMap:M}=h();for(let[E,L]of y){let R=v.get(E),B=!!(R?.expandParent&&R?.parentId&&L?.position),D={id:E,type:"position",position:B?{x:Math.max(0,L.position.x),y:Math.max(0,L.position.y)}:L.position,dragging:b};if(R&&k.inProgress&&k.fromNode.id===R.id){let x=qt(R,k.fromHandle,te.Left,!0);N({...k,from:x})}B&&R.parentId&&w.push({id:E,parentId:R.parentId,rect:{...L.internals.positionAbsolute,width:L.measured.width??0,height:L.measured.height??0}}),f.push(D)}if(w.length>0){let{parentLookup:E,nodeOrigin:L}=h(),R=Sr(w,v,E,L);f.push(...R)}for(let E of M.values())f=E(f);S(f)},triggerNodeChanges:y=>{let{onNodesChange:b,setNodes:w,nodes:f,hasDefaultNodes:v,debug:S}=h();if(y?.length){if(v){let k=ku(y,f);w(k)}S&&console.log("React Flow: trigger node changes",y),b?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:b,setEdges:w,edges:f,hasDefaultEdges:v,debug:S}=h();if(y?.length){if(v){let k=Su(y,f);w(k)}S&&console.log("React Flow: trigger edge changes",y),b?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:b,edgeLookup:w,nodeLookup:f,triggerNodeChanges:v,triggerEdgeChanges:S}=h();if(b){let k=y.map(N=>yn(N,!0));v(k);return}v(Zn(f,new Set([...y]),!0)),S(Zn(w))},addSelectedEdges:y=>{let{multiSelectionActive:b,edgeLookup:w,nodeLookup:f,triggerNodeChanges:v,triggerEdgeChanges:S}=h();if(b){let k=y.map(N=>yn(N,!0));S(k);return}S(Zn(w,new Set([...y]))),v(Zn(f,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:b}={})=>{let{edges:w,nodes:f,nodeLookup:v,triggerNodeChanges:S,triggerEdgeChanges:k}=h(),N=y||f,M=b||w,E=[];for(let R of N){if(!R.selected)continue;let B=v.get(R.id);B&&(B.selected=!1),E.push(yn(R.id,!1))}let L=[];for(let R of M)R.selected&&L.push(yn(R.id,!1));S(E),k(L)},setMinZoom:y=>{let{panZoom:b,maxZoom:w}=h();b?.setScaleExtent([y,w]),m({minZoom:y})},setMaxZoom:y=>{let{panZoom:b,minZoom:w}=h();b?.setScaleExtent([w,y]),m({maxZoom:y})},setTranslateExtent:y=>{h().panZoom?.setTranslateExtent(y),m({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:b,triggerNodeChanges:w,triggerEdgeChanges:f,elementsSelectable:v}=h();if(!v)return;let S=b.reduce((N,M)=>M.selected?[...N,yn(M.id,!1)]:N,[]),k=y.reduce((N,M)=>M.selected?[...N,yn(M.id,!1)]:N,[]);w(S),f(k)},setNodeExtent:y=>{let{nodes:b,nodeLookup:w,parentLookup:f,nodeOrigin:v,elevateNodesOnSelect:S,nodeExtent:k,zIndexMode:N}=h();y[0][0]===k[0][0]&&y[0][1]===k[0][1]&&y[1][0]===k[1][0]&&y[1][1]===k[1][1]||(kr(b,w,f,{nodeOrigin:v,nodeExtent:y,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:N}),m({nodeExtent:y}))},panBy:y=>{let{transform:b,width:w,height:f,panZoom:v,translateExtent:S}=h();return hc({delta:y,panZoom:v,transform:b,translateExtent:S,width:w,height:f})},setCenter:async(y,b,w)=>{let{width:f,height:v,maxZoom:S,panZoom:k}=h();if(!k)return!1;let N=typeof w?.zoom<"u"?w.zoom:S;return await k.setViewport({x:f/2-y*N,y:v/2-b*N,zoom:N},{duration:w?.duration,ease:w?.ease,interpolate:w?.interpolate}),!0},cancelConnection:()=>{m({connection:{...ma}})},updateConnection:y=>{m({connection:y})},reset:()=>m({...fu()})}},Object.is);function cw({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:u,fitView:l,nodeOrigin:d,nodeExtent:c,zIndexMode:p,children:m}){let[h]=(0,$.useState)(()=>lw({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:a,maxZoom:s,fitViewOptions:u,nodeOrigin:d,nodeExtent:c,zIndexMode:p}));return(0,H.jsx)(C0,{value:h,children:(0,H.jsx)(Y0,{children:(0,H.jsx)(cx,{children:m})})})}function uw({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:u,minZoom:l,maxZoom:d,nodeOrigin:c,nodeExtent:p,zIndexMode:m}){return(0,$.useContext)(Pr)?(0,H.jsx)(H.Fragment,{children:e}):(0,H.jsx)(cw,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:u,initialMinZoom:l,initialMaxZoom:d,nodeOrigin:c,nodeExtent:p,zIndexMode:m,children:e})}var dw={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function pw({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:u,onInit:l,onMove:d,onMoveStart:c,onMoveEnd:p,onConnect:m,onConnectStart:h,onConnectEnd:g,onClickConnectStart:y,onClickConnectEnd:b,onNodeMouseEnter:w,onNodeMouseMove:f,onNodeMouseLeave:v,onNodeContextMenu:S,onNodeDoubleClick:k,onNodeDragStart:N,onNodeDrag:M,onNodeDragStop:E,onNodesDelete:L,onEdgesDelete:R,onDelete:B,onSelectionChange:D,onSelectionDragStart:x,onSelectionDrag:_,onSelectionDragStop:I,onSelectionContextMenu:C,onSelectionStart:P,onSelectionEnd:A,onBeforeDelete:V,connectionMode:G,connectionLineType:z=yt.Bezier,connectionLineStyle:U,connectionLineComponent:Z,connectionLineContainerStyle:q,deleteKeyCode:ne="Backspace",selectionKeyCode:W="Shift",selectionOnDrag:O=!1,selectionMode:Y=fn.Full,panActivationKeyCode:re="Space",multiSelectionKeyCode:se=Un()?"Meta":"Control",zoomActivationKeyCode:Q=Un()?"Meta":"Control",snapToGrid:ee,snapGrid:ce,onlyRenderVisibleElements:F=!1,selectNodesOnDrag:ie,nodesDraggable:pe,autoPanOnNodeFocus:Ne,nodesConnectable:Te,nodesFocusable:Xe,nodeOrigin:je=wu,edgesFocusable:Bt,edgesReconnectable:Mt,elementsSelectable:Et=!0,defaultViewport:Qe=L0,minZoom:lt=.5,maxZoom:ct=2,translateExtent:Je=Fn,preventScrolling:Jn=!0,nodeExtent:tn,defaultMarkerColor:Po="#b1b1b7",zoomOnScroll:eo=!0,zoomOnPinch:zo=!0,panOnScroll:Wt=!1,panOnScrollSpeed:En=.5,panOnScrollMode:$e=Ot.Free,zoomOnDoubleClick:Ro=!0,panOnDrag:Do=!0,onPaneClick:To,onPaneMouseEnter:di,onPaneMouseMove:pi,onPaneMouseLeave:mi,onPaneScroll:fi,onPaneContextMenu:gi,paneClickDistance:hi=1,nodeClickDistance:bi=0,children:yi,onReconnect:xi,onReconnectStart:nn,onReconnectEnd:_t,onEdgeContextMenu:Ao,onEdgeDoubleClick:It,onEdgeMouseEnter:Pt,onEdgeMouseMove:wi,onEdgeMouseLeave:Oo,reconnectRadius:_n=10,onNodesChange:Lo,onEdgesChange:vi,noDragClassName:ki="nodrag",noWheelClassName:T="nowheel",noPanClassName:X="nopan",fitView:j,fitViewOptions:le,connectOnClick:Me,attributionPosition:on,proOptions:rn,defaultEdgeOptions:mf,elevateNodesOnSelect:ff=!0,elevateEdgesOnSelect:gf=!1,disableKeyboardA11y:Es=!1,autoPanOnConnect:hf,autoPanOnNodeDrag:bf,autoPanOnSelection:yf=!0,autoPanSpeed:xf,connectionRadius:wf,isValidConnection:vf,onError:kf,style:Sf,id:_s,nodeDragThreshold:Cf,connectionDragThreshold:Nf,viewport:Mf,onViewportChange:Ef,width:_f,height:If,colorMode:Pf="light",debug:zf,onScroll:Is,ariaLabelConfig:Rf,zIndexMode:Ps="basic",...Df},Tf){let Si=_s||"1",Af=W0(Pf),Of=(0,$.useCallback)(zs=>{zs.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Is?.(zs)},[Is]);return(0,H.jsx)("div",{"data-testid":"rf__wrapper",...Df,onScroll:Of,style:{...Sf,...dw},ref:Tf,className:_e(["react-flow",r,Af]),id:_s,role:"application",children:(0,H.jsxs)(uw,{nodes:e,edges:t,width:_f,height:If,fitView:j,fitViewOptions:le,minZoom:lt,maxZoom:ct,nodeOrigin:je,nodeExtent:tn,zIndexMode:Ps,children:[(0,H.jsx)(B0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:m,onConnectStart:h,onConnectEnd:g,onClickConnectStart:y,onClickConnectEnd:b,nodesDraggable:pe,autoPanOnNodeFocus:Ne,nodesConnectable:Te,nodesFocusable:Xe,edgesFocusable:Bt,edgesReconnectable:Mt,elementsSelectable:Et,elevateNodesOnSelect:ff,elevateEdgesOnSelect:gf,minZoom:lt,maxZoom:ct,nodeExtent:tn,onNodesChange:Lo,onEdgesChange:vi,snapToGrid:ee,snapGrid:ce,connectionMode:G,translateExtent:Je,connectOnClick:Me,defaultEdgeOptions:mf,fitView:j,fitViewOptions:le,onNodesDelete:L,onEdgesDelete:R,onDelete:B,onNodeDragStart:N,onNodeDrag:M,onNodeDragStop:E,onSelectionDrag:_,onSelectionDragStart:x,onSelectionDragStop:I,onMove:d,onMoveStart:c,onMoveEnd:p,noPanClassName:X,nodeOrigin:je,rfId:Si,autoPanOnConnect:hf,autoPanOnNodeDrag:bf,autoPanSpeed:xf,onError:kf,connectionRadius:wf,isValidConnection:vf,selectNodesOnDrag:ie,nodeDragThreshold:Cf,connectionDragThreshold:Nf,onBeforeDelete:V,debug:zf,ariaLabelConfig:Rf,zIndexMode:Ps}),(0,H.jsx)(aw,{onInit:l,onNodeClick:s,onEdgeClick:u,onNodeMouseEnter:w,onNodeMouseMove:f,onNodeMouseLeave:v,onNodeContextMenu:S,onNodeDoubleClick:k,nodeTypes:i,edgeTypes:a,connectionLineType:z,connectionLineStyle:U,connectionLineComponent:Z,connectionLineContainerStyle:q,selectionKeyCode:W,selectionOnDrag:O,selectionMode:Y,deleteKeyCode:ne,multiSelectionKeyCode:se,panActivationKeyCode:re,zoomActivationKeyCode:Q,onlyRenderVisibleElements:F,defaultViewport:Qe,translateExtent:Je,minZoom:lt,maxZoom:ct,preventScrolling:Jn,zoomOnScroll:eo,zoomOnPinch:zo,zoomOnDoubleClick:Ro,panOnScroll:Wt,panOnScrollSpeed:En,panOnScrollMode:$e,panOnDrag:Do,autoPanOnSelection:yf,onPaneClick:To,onPaneMouseEnter:di,onPaneMouseMove:pi,onPaneMouseLeave:mi,onPaneScroll:fi,onPaneContextMenu:gi,paneClickDistance:hi,nodeClickDistance:bi,onSelectionContextMenu:C,onSelectionStart:P,onSelectionEnd:A,onReconnect:xi,onReconnectStart:nn,onReconnectEnd:_t,onEdgeContextMenu:Ao,onEdgeDoubleClick:It,onEdgeMouseEnter:Pt,onEdgeMouseMove:wi,onEdgeMouseLeave:Oo,reconnectRadius:_n,defaultMarkerColor:Po,noDragClassName:ki,noWheelClassName:T,noPanClassName:X,rfId:Si,disableKeyboardA11y:Es,nodeExtent:tn,viewport:Mf,onViewportChange:Ef,nodesDraggable:pe}),(0,H.jsx)(O0,{onSelectionChange:D}),yi,(0,H.jsx)(z0,{proOptions:rn,position:on}),(0,H.jsx)(P0,{rfId:Si,disableKeyboardA11y:Es})]})})}var Ku=Cu(pw);var mw=e=>e.domNode?.querySelector(".react-flow__viewport-portal");function ju({children:e}){let t=fe(mw);return t?(0,hu.createPortal)(e,t):null}function Qu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>ku(r,i)),[]);return[t,n,o]}function Ju(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>Su(r,i)),[]);return[t,n,o]}var jk=tt.error014();function fw({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,H.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:_e(["react-flow__background-pattern",n,o])})}function gw({radius:e,className:t}){return(0,H.jsx)("circle",{cx:e,cy:e,r:e,className:_e(["react-flow__background-pattern","dots",t])})}var xt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(xt||(xt={}));var hw={[xt.Dots]:1,[xt.Lines]:1,[xt.Cross]:6},bw=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function ed({id:e,variant:t=xt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:u,className:l,patternClassName:d}){let c=(0,$.useRef)(null),{transform:p,patternId:m}=fe(bw,Ce),h=o||hw[t],g=t===xt.Dots,y=t===xt.Cross,b=Array.isArray(n)?n:[n,n],w=[b[0]*p[2]||1,b[1]*p[2]||1],f=h*p[2],v=Array.isArray(i)?i:[i,i],S=y?[f,f]:w,k=[v[0]*p[2]||1+S[0]/2,v[1]*p[2]||1+S[1]/2],N=`${m}${e||""}`;return(0,H.jsxs)("svg",{className:_e(["react-flow__background",l]),style:{...u,...Rr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:c,"data-testid":"rf__background",children:[(0,H.jsx)("pattern",{id:N,x:p[0]%w[0],y:p[1]%w[1],width:w[0],height:w[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${k[0]},-${k[1]})`,children:g?(0,H.jsx)(gw,{radius:f/2,className:d}):(0,H.jsx)(fw,{dimensions:S,lineWidth:r,variant:t,className:d})}),(0,H.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${N})`})]})}ed.displayName="Background";var td=(0,$.memo)(ed);function yw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,H.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function xw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,H.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function ww(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,H.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function vw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function kw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function _r({children:e,className:t,...n}){return(0,H.jsx)("button",{type:"button",className:_e(["react-flow__controls-button",t]),...n,children:e})}var Sw=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function nd({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:u,className:l,children:d,position:c="bottom-left",orientation:p="vertical","aria-label":m}){let h=ve(),{isInteractive:g,minZoomReached:y,maxZoomReached:b,ariaLabelConfig:w}=fe(Sw,Ce),{zoomIn:f,zoomOut:v,fitView:S}=Ha(),k=()=>{f(),i?.()},N=()=>{v(),a?.()},M=()=>{S(r),s?.()},E=()=>{h.setState({nodesDraggable:!g,nodesConnectable:!g,elementsSelectable:!g}),u?.(!g)};return(0,H.jsxs)(zr,{className:_e(["react-flow__controls",p==="horizontal"?"horizontal":"vertical",l]),position:c,style:e,"data-testid":"rf__controls","aria-label":m??w["controls.ariaLabel"],children:[t&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(_r,{onClick:k,className:"react-flow__controls-zoomin",title:w["controls.zoomIn.ariaLabel"],"aria-label":w["controls.zoomIn.ariaLabel"],disabled:b,children:(0,H.jsx)(yw,{})}),(0,H.jsx)(_r,{onClick:N,className:"react-flow__controls-zoomout",title:w["controls.zoomOut.ariaLabel"],"aria-label":w["controls.zoomOut.ariaLabel"],disabled:y,children:(0,H.jsx)(xw,{})})]}),n&&(0,H.jsx)(_r,{className:"react-flow__controls-fitview",onClick:M,title:w["controls.fitView.ariaLabel"],"aria-label":w["controls.fitView.ariaLabel"],children:(0,H.jsx)(ww,{})}),o&&(0,H.jsx)(_r,{className:"react-flow__controls-interactive",onClick:E,title:w["controls.interactive.ariaLabel"],"aria-label":w["controls.interactive.ariaLabel"],children:g?(0,H.jsx)(kw,{}):(0,H.jsx)(vw,{})}),d]})}nd.displayName="Controls";var Qk=(0,$.memo)(nd);function Cw({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:u,className:l,borderRadius:d,shapeRendering:c,selected:p,onClick:m}){let{background:h,backgroundColor:g}=i||{},y=a||h||g;return(0,H.jsx)("rect",{className:_e(["react-flow__minimap-node",{selected:p},l]),x:t,y:n,rx:d,ry:d,width:o,height:r,style:{fill:y,stroke:s,strokeWidth:u},shapeRendering:c,onClick:m?b=>m(b,e):void 0})}var Nw=(0,$.memo)(Cw),Mw=e=>e.nodes.map(t=>t.id),La=e=>e instanceof Function?e:()=>e;function Ew({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=Nw,onClick:a}){let s=fe(Mw,Ce),u=La(t),l=La(e),d=La(n),c=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,H.jsx)(H.Fragment,{children:s.map(p=>(0,H.jsx)(Iw,{id:p,nodeColorFunc:u,nodeStrokeColorFunc:l,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:c},p))})}function _w({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:u}){let{node:l,x:d,y:c,width:p,height:m}=fe(h=>{let g=h.nodeLookup.get(e);if(!g)return{node:void 0,x:0,y:0,width:0,height:0};let y=g.internals.userNode,{x:b,y:w}=g.internals.positionAbsolute,{width:f,height:v}=mt(y);return{node:y,x:b,y:w,width:f,height:v}},Ce);return!l||l.hidden||!ka(l)?null:(0,H.jsx)(s,{x:d,y:c,width:p,height:m,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:a,onClick:u,id:l.id})}var Iw=(0,$.memo)(_w),Pw=(0,$.memo)(Ew),zw=200,Rw=150,Dw=e=>!e.hidden,Tw=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?xa(Vn(e.nodeLookup,{filter:Dw}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},gu=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Aw=(e,t)=>gu(e.viewBB,t.viewBB)&&gu(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Ow="react-flow__minimap-desc";function od({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:u,maskColor:l,maskStrokeColor:d,maskStrokeWidth:c,position:p="bottom-right",onClick:m,onNodeClick:h,pannable:g=!1,zoomable:y=!1,ariaLabel:b,inversePan:w,zoomStep:f=1,offsetScale:v=5}){let S=ve(),k=(0,$.useRef)(null),{boundingRect:N,viewBB:M,rfId:E,panZoom:L,translateExtent:R,flowWidth:B,flowHeight:D,ariaLabelConfig:x}=fe(Tw,Aw),_=e?.width??zw,I=e?.height??Rw,C=N.width/_,P=N.height/I,A=Math.max(C,P),V=A*_,G=A*I,z=v*A,U=N.x-(V-N.width)/2-z,Z=N.y-(G-N.height)/2-z,q=V+z*2,ne=G+z*2,W=`${Ow}-${E}`,O=(0,$.useRef)(0),Y=(0,$.useRef)();O.current=A,(0,$.useEffect)(()=>{if(k.current&&L)return Y.current=Sc({domNode:k.current,panZoom:L,getTransform:()=>S.getState().transform,getViewScale:()=>O.current}),()=>{Y.current?.destroy()}},[L]),(0,$.useEffect)(()=>{Y.current?.update({translateExtent:R,width:B,height:D,inversePan:w,pannable:g,zoomStep:f,zoomable:y})},[g,y,w,f,R,B,D]);let re=m?ee=>{let[ce,F]=Y.current?.pointer(ee)||[0,0];m(ee,{x:ce,y:F})}:void 0,se=h?(0,$.useCallback)((ee,ce)=>{let F=S.getState().nodeLookup.get(ce).internals.userNode;h(ee,F)},[]):void 0,Q=b??x["minimap.ariaLabel"];return(0,H.jsx)(zr,{position:p,style:{...e,"--xy-minimap-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof c=="number"?c*A:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:_e(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,H.jsxs)("svg",{width:_,height:I,viewBox:`${U} ${Z} ${q} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":W,ref:k,onClick:re,children:[Q&&(0,H.jsx)("title",{id:W,children:Q}),(0,H.jsx)(Pw,{onClick:se,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,H.jsx)("path",{className:"react-flow__minimap-mask",d:`M${U-z},${Z-z}h${q+z*2}v${ne+z*2}h${-q-z*2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}od.displayName="MiniMap";var rd=(0,$.memo)(od),Lw=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,$w={[Ut.Line]:"right",[Ut.Handle]:"bottom-right"};function Hw({nodeId:e,position:t,variant:n=Ut.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:u=10,maxWidth:l=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:c=!1,resizeDirection:p,autoScale:m=!0,shouldResize:h,onResizeStart:g,onResize:y,onResizeEnd:b}){let w=Iu(),f=typeof e=="string"?e:w,v=ve(),S=(0,$.useRef)(null),k=n===Ut.Handle,N=fe((0,$.useCallback)(Lw(k&&m),[k,m]),Ce),M=(0,$.useRef)(null),E=t??$w[n];(0,$.useEffect)(()=>{if(!(!S.current||!f))return M.current||(M.current=_c({domNode:S.current,nodeId:f,getStoreItems:()=>{let{nodeLookup:R,transform:B,snapGrid:D,snapToGrid:x,nodeOrigin:_,domNode:I}=v.getState();return{nodeLookup:R,transform:B,snapGrid:D,snapToGrid:x,nodeOrigin:_,paneDomNode:I}},onChange:(R,B)=>{let{triggerNodeChanges:D,nodeLookup:x,parentLookup:_,nodeOrigin:I}=v.getState(),C=[],P={x:R.x,y:R.y},A=x.get(f);if(A&&A.expandParent&&A.parentId){let V=A.origin??I,G=R.width??A.measured.width??0,z=R.height??A.measured.height??0,U={id:A.id,parentId:A.parentId,rect:{width:G,height:z,...Sa({x:R.x??A.position.x,y:R.y??A.position.y},{width:G,height:z},A.parentId,x,V)}},Z=Sr([U],x,_,I);C.push(...Z),P.x=R.x?Math.max(V[0]*G,R.x):void 0,P.y=R.y?Math.max(V[1]*z,R.y):void 0}if(P.x!==void 0&&P.y!==void 0){let V={id:f,type:"position",position:{...P}};C.push(V)}if(R.width!==void 0&&R.height!==void 0){let G={id:f,type:"dimensions",resizing:!0,setAttributes:p?p==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};C.push(G)}for(let V of B){let G={...V,type:"position"};C.push(G)}D(C)},onEnd:({width:R,height:B})=>{let D={id:f,type:"dimensions",resizing:!1,dimensions:{width:R,height:B}};v.getState().triggerNodeChanges([D])}})),M.current.update({controlPosition:E,boundaries:{minWidth:s,minHeight:u,maxWidth:l,maxHeight:d},keepAspectRatio:c,resizeDirection:p,onResizeStart:g,onResize:y,onResizeEnd:b,shouldResize:h}),()=>{M.current?.destroy()}},[E,s,u,l,d,c,g,y,b,h]);let L=E.split("-");return(0,H.jsx)("div",{className:_e(["react-flow__resize-control","nodrag",...L,n,o]),ref:S,style:{...r,scale:N,...a&&{[k?"backgroundColor":"borderColor"]:a}},children:i})}var Jk=(0,$.memo)(Hw);var id=/[\w\u4e00-\u9fa5.-]/;var Bw=/[\p{L}\p{N}]/u;function ad(e){return e===void 0?!0:!Bw.test(e)}function sd(e){return e.trim().replace(/\s+/g," ")}function Ww(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&ad(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&id.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!id.test(i))break;r+=1}ad(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function Fw(e){let t=[];for(let n of Ww(e))n.kind==="ref"&&t.push(n.token);return t}function ld(e,t){let n=Fw(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let u of t){let l=sd(u.name);if(l==="")continue;let d=o.get(l);d===void 0?o.set(l,[u.id]):d.includes(u.id)||d.push(u.id)}let r=[],i=new Set,a=[],s=new Set;for(let u of n){let l=sd(u.name),d=o.get(l);if(d===void 0){s.has(l)||(s.add(l),a.push(l));continue}for(let c of d)i.has(c)||(i.add(c),r.push(c))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var Vw=/\.(png|jpe?g|webp|gif|bmp)$/i;function Or(e){return e.type.startsWith("image/")?!0:Vw.test(e.name)}var cd=30,ud=200;function dd(e,t){if(t&&Math.abs(t.x-e.x)<ud&&Math.abs(t.y-e.y)<ud){let n={x:t.x+cd,y:t.y+cd};return{position:n,next:n}}return{position:e,next:e}}var Gw=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Wa(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!Gw.test(n));return t.length?t.join(" "):void 0}function wn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function pd(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function md(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function Xw(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function Fa(e,t,n,o){let r=new Set(n),i=typeof o?.size=="string"&&o.size?o.size:"1024x1024",a=typeof o?.quality=="string"&&o.quality?o.quality:"high",s=g=>typeof g=="string"?g:"",u=g=>typeof g=="number"&&Number.isFinite(g)?g:0,l=g=>{if(!g||typeof g!="object")return null;let{x:y,y:b}=g;return typeof y!="number"||typeof b!="number"||!Number.isFinite(y)||!Number.isFinite(b)?null:{x:y,y:b}},d=new Set(["image","prompt","group"]),c=[],p=new Set,m=e.flatMap(g=>{if(!g||typeof g!="object")return c.push({id:"?",reason:"\u4E0D\u662F\u4E00\u4E2A\u8282\u70B9\u5BF9\u8C61"}),[];let y=s(g.id);if(!y)return c.push({id:"?",reason:"\u6CA1\u6709 id"}),[];let b=s(g.type);if(!d.has(b))return c.push({id:y,reason:b?`\u8BA4\u4E0D\u51FA\u7684\u8282\u70B9\u7C7B\u578B\u300C${b}\u300D`:"\u6CA1\u6709\u8282\u70B9\u7C7B\u578B"}),[];let w=l(g.position);if(!w)return c.push({id:y,reason:"\u6CA1\u6709\u6709\u6548\u5750\u6807"}),[];let f=g.data;if(!f||typeof f!="object")return c.push({id:y,reason:"\u6CA1\u6709 data"}),[];p.add(y);let v=Wa(g.className),S={...g,position:w};v===void 0?delete S.className:S.className=v;let k=f;if(b==="image"){let N=s(k.registryId);return[{...S,type:"image",data:{...k,registryId:N,name:s(k.name),url:s(k.url),size:u(k.size),ext:s(k.ext),...r.has(N)?{missing:!0}:{}}}]}return b==="group"?[{...S,type:"group",data:{...k,name:s(k.name),imageCount:u(k.imageCount),totalSize:u(k.totalSize)}}]:[{...S,type:"prompt",data:{...k,prompt:s(k.prompt),size:s(k.size)||i,quality:s(k.quality)||a,outputDir:s(k.outputDir),status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}]}),h=Xw(t.filter(g=>p.has(s(g?.source))&&p.has(s(g?.target))));return{nodes:m,edges:h,dropped:c}}function fd(e){return e.filter(t=>t.type==="prompt").map(t=>({nodeId:t.id,taskId:String(t.data.taskId??"")})).filter(t=>!!t.taskId)}function it(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function gd(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function qw(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Uw(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,u=[...r.get(i.id)??[]];for(;u.length;){let l=u.pop();if(a.has(l))continue;a.add(l);let d=o.get(l);d&&(d.type==="prompt"?s.add(l):d.type==="group"&&u.push(...r.get(l)??[]))}n.set(i.data.registryId,s.size)}}function hd(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let u of r.get(e)??[]){let l=o.get(u);if(l){if(l.type==="image")a+=1,s.push(l.data.registryId);else if(l.type==="group"){let d=hd(u,t,n);a+=d.count,s.push(...d.ids)}}}return t.delete(e),{count:a,ids:s}}function Yw(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:u}=hd(a.id,new Set,t),l=new Set(u);n.set(a.id,l.size),o.set(a.id,Array.from(l).reduce((d,c)=>d+(i.get(c)??0),0)),r.set(a.id,s-l.size)}}function bd(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=qw(e,t);return Uw(e,a,n),Yw(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function Zw(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let u=o.get(s);u&&(u.type==="image"?r.push(u):u.type==="group"&&t.filter(l=>l.target===s).forEach(l=>a.push(l.source)))}return r}function yd(e,t,n,o){let r=Zw(e,t,n),i=r.map(l=>({id:l.id,name:l.type==="image"?l.data.name:""})),a=ld(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(l=>[l.id,l])),u=[];for(let l of a.ids){let d=s.get(l);d&&u.push(d)}return{images:u,unknown:a.unknown,mode:a.mode}}function Tr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function Ar(e,t){return t.reduce((n,o)=>!n||Tr(e,o)<Tr(e,n)?o:n,null)}function ko(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function Kw(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=Ar(r,n);if(i&&r.position.y>i.position.y){ko(e,i,r);continue}let a=Ar(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||Tr(r,a)<Tr(r,i))?ko(e,r,a):i&&ko(e,r,i)}}function jw(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=Ar(r,n);a&&ko(e,r,a)}}function Qw(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(l=>{let d=o.get(l.source)?.type;return l.target===a.id&&(d==="image"||d==="group")}))continue;let u=Ar(a,i);u&&ko(e,u,a)}}function Va(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return Kw(a,e,n,o),jw(a,o,n,i),Qw(a,n,o,r),a.next}function xd(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?Va(o,t):t}function wd(e,t){return{nodes:e.map(n=>{let o=Wa(n.className),r={...n};if(o===void 0?delete r.className:r.className=o,r.type==="image"){let{maskDataUrl:c,...p}=r.data;return{...r,data:p}}if(r.type!=="prompt")return r;let{startedAtMs:i,resultCount:a,message:s,cancelRequested:u,...l}=r.data,d=c=>typeof c=="string"?c:"";return{...r,data:{...l,prompt:d(l.prompt),size:d(l.size),quality:d(l.quality)||"high",outputDir:d(l.outputDir),status:"idle"}}}),edges:[...t]}}async function Ee(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:r})}return r}function qe(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var vd=()=>Ee("config");var kd=()=>Ee("assets"),Lr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},Sd=e=>Ee("asset/delete",qe({id:e})),Ga=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Ee(`history?${t.toString()}`)},$r=(e=14)=>Ee(`history/stats?days=${e}`),Xa=e=>Ee("generate",qe(e)),Cd=e=>Ee(`task?id=${encodeURIComponent(e)}`),Nd=e=>Ee("task/cancel",qe({id:e})),Md=(e,t,n)=>Ee("workflow/save",qe({name:e,nodes:t,edges:n})),qa=()=>Ee("workflow/list"),Ed=e=>Ee(`workflow/load?name=${encodeURIComponent(e)}`),Ua=(e,t)=>Ee("recovery/save",qe({...wd(e,t)})),_d=()=>Ee("recovery/latest"),Hr=e=>Ee("settings",qe({model:e})),Br=e=>Ee("settings",qe({profile:e})),Id=e=>Ee("settings",qe({outputDir:e})),Pd=e=>Ee("settings",qe({budget:e})),zd=e=>Ee("settings",qe({imagoraRoot:e})),Rd=(e={})=>Ee("pick-folder",qe(e)),Wr=e=>Ee("reveal",qe({path:e})),Ya=e=>Ee("provider",qe(e)),Dd=e=>Ee("provider/probe",qe(e));var Td=e=>Ee("budget",qe(e));function me(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var Jw=/^=== (.+) ===\s*$/,Od=/^```(?:text)?\s*$/,ev=/^ratio:\s*(\d+):(\d+)\s*$/,tv=/^ratio\b/i;function Ad(e){return e.split(`
`).some(t=>Od.test(t))}function Ld(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((l,d)=>{let c=l.match(Jw)?.[1];c!==void 0&&a.push({title:c.trim(),line:d})}),a.length===0){let l=t.trim();return l&&i.push(l),Ad(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),Ad(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let u=new Set;for(let l=0;l<a.length;l++){let d=a[l];if(d===void 0)continue;let{title:c}=d,p=d.line+1,m=a[l+1],h=m===void 0?n.length:m.line,g=n.slice(p,h);if(u.has(c)){r.push({code:"duplicate-title",title:c,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${c}\u300D`});continue}u.add(c);let y=[];g.forEach((L,R)=>{Od.test(L)&&y.push(R)});let b=y[0],w=y[y.length-1];if(b===void 0||w===void 0){r.push({code:"missing-fence",title:c,message:`\u300C${c}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let f=g.slice(0,b).join(`
`).trim();f&&i.push(f);let v=g.slice(b+1,w),S=v.findIndex(L=>L.trim()!=="");if(S===-1){r.push({code:"missing-ratio",title:c,message:`\u300C${c}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let k=(v[S]??"").trim(),N=k.match(ev);if(!N){tv.test(k)?r.push({code:"bad-ratio",title:c,message:`\u300C${c}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${k}`}):r.push({code:"missing-ratio",title:c,message:`\u300C${c}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let M=`${N[1]}:${N[2]}`,E=v.slice(S+1).join(`
`).trim();if(!E){r.push({code:"empty-prompt",title:c,message:`\u300C${c}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:c,ratio:M,prompt:E})}return{cards:o,issues:r,skippedText:i}}function Ka(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function $d(e,t,n){let o=av(n,e.length);return e.map((r,i)=>{let a=Ka(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var Za=380,nv=326,Hd=40,ov=74,rv=Za+Hd,iv=nv+ov,Fr=3;function av(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/Fr),a=r%Fr,s=Math.min(Fr,n-i*Fr),u=s*Za+(s-1)*Hd,l=e.x+Za/2-u/2;o.push({x:l+a*rv,y:e.y+i*iv})}return o}var sv={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function Be(e){let t=e.measured,n=sv[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var Yt={layerGap:60,resultGap:60,nodeGap:16,leftMargin:60,topMargin:40},lv={image:0,group:0,prompt:1},Bd="\u63D0\u793A\u8BCD\u751F\u6210";function Wd(e,t,n,o){let r=n.get(e);if(r!==void 0)return r;if(o.has(e))return-1;o.add(e);let i=0;for(let a of t.get(e)??[]){let s=Wd(a,t,n,o);s>=0&&(i=Math.max(i,s+1))}return o.delete(e),n.set(e,i),i}function cv(e,t){return e.type!=="prompt"?null:(t.get(e.id)??[]).slice().sort().join("|")}function uv(e,t,n,o,r){let i=new Map(e.map(g=>[g.id,g])),a=new Map,s=new Map;for(let g of t){if(!i.has(g.source)||!i.has(g.target))continue;let y=a.get(g.target)??[];y.push(g.source),a.set(g.target,y);let b=s.get(g.source)??[];b.push(g.target),s.set(g.source,b)}let u=new Map,l=new Set;for(let g of e){let y=Math.max(Wd(g.id,a,u,l),lv[g.type]);u.set(g.id,y)}let d=new Map;for(let g of e){let y=d.get(u.get(g.id)??0)??[];y.push(g),d.set(u.get(g.id)??0,y)}let c=[...d.keys()].sort((g,y)=>g-y),p=new Map;for(let g of e)n.has(g.id)||p.set(g.id,{x:g.position.x-(o?.x??0),y:g.position.y-(o?.y??0)});let m=g=>(p.get(g.id)?.x??g.position.x)+Be(g).width/2,h=new Map;{let g=r;for(let y of c){let b=d.get(y).reduce((w,f)=>{let v=p.get(f.id);return v&&!n.has(f.id)?Math.max(w,v.y+Be(f).height):Math.max(w,g+Be(f).height)},g);h.set(y,g),g=b+Yt.layerGap}}return{byId:i,preds:a,succs:s,layerGroups:d,sortedLayers:c,positions:p,centerOf:m,bandY:h}}function dv(e){let{nodes:t,edges:n,moves:o,origin:r,boundsWidth:i}=e;if(!t.length)return t;let a=r?0:Yt.leftMargin,s=r?0:Yt.topMargin,u=uv(t,n,o,r,s),{positions:l}=u;return mv(u,o,a),fv(u,o,a),gv(t,o,a,i,l),t.map(d=>{if(!o.has(d.id))return d;let c=l.get(d.id);return!c||!Number.isFinite(c.x)||!Number.isFinite(c.y)?d:r?{...d,position:{x:c.x+r.x,y:c.y+r.y}}:{...d,position:c}})}function pv(e,t,n){let{byId:o,preds:r,positions:i,centerOf:a}=t,s=(r.get(e.id)??[]).map(u=>o.get(u)).filter(u=>u!==void 0&&i.has(u.id)).map(u=>a(u));return s.length?s.reduce((u,l)=>u+l,0)/s.length:n+Be(e).width/2}function Fd(e,t,n,o,r){let{layerGroups:i,preds:a,positions:s,bandY:u}=n,l=i.get(e).filter(y=>o.has(y.id));if(!l.length)return;let d=new Map;for(let y of l)d.set(y.id,t(y));let c=y=>cv(y,a),p=[...l].sort((y,b)=>{let w=d.get(y.id),f=d.get(b.id);if(Math.abs(w-f)>=.5)return w-f;let v=c(y),S=c(b);if(v!==null&&S!==null&&v===S&&y.type==="prompt"&&b.type==="prompt"){let k=y.data.title??Bd,N=b.data.title??Bd,M=k.localeCompare(N,"zh");if(M!==0)return M}return y.position.x-b.position.x}),m=(y,b)=>y.every(w=>c(w)===null||c(w)===c(b)),h=r-Yt.nodeGap,g=0;for(;g<p.length;){let y=p[g];if(y===void 0)break;let b=d.get(y.id),w=g,f=p[w+1];for(;f!==void 0&&Math.abs(d.get(f.id)-b)<.5&&m(p.slice(g,w+1),f);)w+=1,f=p[w+1];let v=p.slice(g,w+1),S=v.reduce((M,E,L)=>M+Be(E).width+(L?Yt.nodeGap:0),0),k=u.get(e),N=Math.max(h+Yt.nodeGap,b-S/2);for(let M of v)s.set(M.id,{x:N,y:k}),N+=Be(M).width+Yt.nodeGap;h=N-Yt.nodeGap,g=w+1}}function mv(e,t,n){for(let o of e.sortedLayers)Fd(o,r=>pv(r,e,n),e,t,n)}function fv(e,t,n){let{sortedLayers:o,succs:r,byId:i,positions:a,centerOf:s}=e;for(let u of[...o].reverse())Fd(u,l=>{let d=(r.get(l.id)??[]).map(p=>i.get(p)).filter(p=>p!==void 0&&a.has(p.id)).map(p=>s(p));if(d.length)return d.reduce((p,m)=>p+m,0)/d.length;let c=a.get(l.id);return c?c.x+Be(l).width/2:n+Be(l).width/2},e,t,n)}function gv(e,t,n,o,r){if(o!==void 0){let i=e.filter(a=>t.has(a.id));if(i.length){let a=Math.min(...i.map(l=>r.get(l.id).x)),s=Math.max(...i.map(l=>r.get(l.id).x+Be(l).width)),u=n+o/2-(a+s)/2;if(u!==0)for(let l of i){let d=r.get(l.id);r.set(l.id,{x:d.x+u,y:d.y})}}}}function Vd(e,t,n){if(!n.size)return e;let o=e.filter(p=>n.has(p.id));if(!o.length)return e;let r=t.filter(p=>n.has(p.source)||n.has(p.target)),i=new Set;for(let p of r)n.has(p.source)||i.add(p.source),n.has(p.target)||i.add(p.target);let a=e.filter(p=>i.has(p.id)),s=Math.min(...o.map(p=>p.position.x)),u=Math.max(...o.map(p=>p.position.x+Be(p).width)),l=Math.min(...o.map(p=>p.position.y)),d=dv({nodes:[...o,...a],edges:r,moves:n,origin:{x:s,y:l},boundsWidth:i.size===0?Math.max(u-s,1):void 0}),c=new Map(d.map(p=>[p.id,p]));return e.map(p=>c.get(p.id)??p)}var ja=[0,.5,1];function Gd(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function qd(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Xd(e,t,n,o){let r=ja.map(s=>Gd(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let u=t[s];if(u!==void 0&&u.id!==e.id&&qd(u))for(let l=0;l<ja.length;l+=1){let d=ja[l];if(d===void 0)continue;let c=Gd(u,n,d);for(let p=0;p<r.length;p+=1){let m=r[p];if(m===void 0)continue;let h=c-m,g=Math.abs(h);g>=o||g>=a||(a=g,i={delta:h,position:c,targetId:u.id})}}}return i}function Vr(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!qd(e)||!Number.isFinite(n)||n<=0)return o;let r=Xd(e,t,"x",n),i=Xd(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var Ud="imagora.canvas-snap.v1";function Yd(){try{let e=window.localStorage.getItem(Ud);return e===null?!0:e!=="0"}catch{return!0}}function Zd(e){try{window.localStorage.setItem(Ud,e?"1":"0")}catch{}}function Co(e){let t=Be(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var So=[];function Kd(e,t,n){if(!n)return{changes:e,guides:So};let o=[];for(let c of e){let p=c;p.type==="position"&&p.dragging===!0&&p.position!==void 0&&o.push(p)}if(o.length!==1)return{changes:e,guides:So};let r=o[0];if(!r)return{changes:e,guides:So};let i=t.find(c=>c.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:So};let s={...Co(i),x:a.x,y:a.y},u=[];for(let c of t)c.id!==r.id&&u.push(Co(c));let l=Vr(s,u);return l.guides.length===0?{changes:e,guides:So}:{changes:e.map(c=>c.id===r.id&&c.type==="position"?{...c,position:{x:l.x,y:l.y}}:c),guides:l.guides}}var Ae=require("react");var Xr=require("react");var Zt=new Map,Qa=new Map;function hv(e,t,n=512){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||e<=0||t<=0||n<=0||e<=n&&t<=n)return null;let o=n/Math.max(e,t);return{width:Math.max(1,Math.round(e*o)),height:Math.max(1,Math.round(t*o))}}function Gr(e){let t=Zt.get(e);return t===void 0?null:(Zt.delete(e),Zt.set(e,t),t)}function bv(e,t){for(Zt.set(e,t);Zt.size>240;){let n=Zt.keys().next();if(n.done===!0)break;let o=Zt.get(n.value);Zt.delete(n.value),o!==void 0&&URL.revokeObjectURL(o)}}async function yv(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u7F29\u7565\u56FE\u53D6\u56FE\u5931\u8D25\uFF1A${n.status}`);let o=await n.blob(),r=await createImageBitmap(o),i=hv(r.width,r.height,t);if(i===null)return r.close(),e;let a=document.createElement("canvas");a.width=i.width,a.height=i.height;let s=a.getContext("2d");if(s===null)return r.close(),e;s.drawImage(r,0,0,i.width,i.height),r.close();let u=await new Promise(l=>a.toBlob(l,"image/webp",.9));return u===null?e:URL.createObjectURL(u)}function jd(e,t=512){let n=Gr(e);if(n!==null)return Promise.resolve(n);let o=Qa.get(e);if(o!==void 0)return o;let r=yv(e,t).catch(()=>e).then(i=>(Qa.delete(e),i!==e&&bv(e,i),i));return Qa.set(e,r),r}function Qd(e){let[t,n]=(0,Xr.useState)(()=>{if(!e)return null;let o=Gr(e);return o===null?null:{src:e,url:o}});return(0,Xr.useEffect)(()=>{if(!e)return;let o=Gr(e);if(o!==null){n({src:e,url:o});return}let r=!1;return jd(e).then(i=>{r||n({src:e,url:i})}),()=>{r=!0}},[e]),t===null||t.src!==e?null:t.url}var Ja=require("react/jsx-runtime"),Jd={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function ze({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=Jd[e]||Jd.help;return(0,Ja.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,Ja.jsx)("path",{d:r})})}var ke=require("react"),sp=require("react-dom");var xv={id:"__custom",label:"\u81EA\u5B9A\u4E49"},wv=64;function ep(e){return typeof e!="string"?"":e.trim().replace(/\s+/g," ")}function vv(e,t){return e.some(n=>n.value===t)}function tp(e,t){let n=ep(t);return n===""||vv(e,n)?e:[...e,{value:n,label:n,group:xv}]}function np(e){let t=ep(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>wv?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function op(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var qr=0;function Ur(){qr+=1}function Yr(){qr=Math.max(0,qr-1)}function rp(){return qr>0}var kv=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function es(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=kv.has(o)?"-":n}return t}function ip(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function Sv(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+ip(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,u=n,l=n;for(let[d,c]of o.entries()){if(u!==n&&(l=Math.max(l,u+d-2)),e.charAt(d)===t.charAt(i)){let p=1+ip(e,d),m=n;s!==n&&(m=s+p+4),l!==n&&(m=Math.max(m,l+p+1-d)),a[d]=m}u=s,s=c}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function ap(e,t){let n=es(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,u;for(let l of a){let d=es(l).toLowerCase(),c=Sv(d,n);c!==void 0&&(s||=d.startsWith(n),u=u===void 0?c:Math.max(u,c))}u!==void 0&&o.push({item:r,index:i,prefix:s,score:u})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var ye=require("react/jsx-runtime"),Cv=4;function ft({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:u,"aria-describedby":l,"aria-invalid":d,renderOption:c,title:p}){let[m,h]=(0,ke.useState)(!1),[g,y]=(0,ke.useState)(-1),[b,w]=(0,ke.useState)(""),[f,v]=(0,ke.useState)(null),S=(0,ke.useRef)(null),k=(0,ke.useRef)(null),N=(0,ke.useRef)(null),M=(0,ke.useId)(),E=`${r??`select-${M}`}-listbox`,L=`${E}-search`,R=(0,ke.useMemo)(()=>{if(b.trim()==="")return e;let W=e.map(O=>({name:O.value,label:O.label,option:O}));return ap(W,b).map(O=>O.option)},[e,b]),B=i===void 0||i==="auto"?e.length>Cv:i,D=R.findIndex(W=>W.value===t),x=e.find(W=>W.value===t),_=W=>`${E}-option-${W}`,I=B&&s===!0,C=(0,ke.useMemo)(()=>{let W=b.trim();if(W!=="")return R.find(O=>O.value===W||O.label===W)},[R,b]),P=(0,ke.useMemo)(()=>{if(!I||C!==void 0)return null;let W=np(b);return W.ok?W.value:null},[I,C,b]),A=(W=D>=0?D:0)=>{!e.length&&!I||(y(e.length===0?-1:Math.min(Math.max(W,0),e.length-1)),h(!0),B||window.setTimeout(()=>k.current?.focus(),0))},V=(W=!1)=>{h(!1),w(""),W&&window.setTimeout(()=>k.current?.focus(),0)},G=W=>{let O=R[W];O&&(n(O.value),V(!0))},z=W=>{u?.(W),V(!0)},U=()=>{let W=k.current;if(!W)return;let O=W.getBoundingClientRect(),Y=4,re=8,se=W.offsetWidth||O.width,Q=Math.max(re,Math.min(O.left,window.innerWidth-se-re)),ee=window.innerHeight-O.bottom-Y-re,ce=O.top-Y-re,F=ee<160&&ce>ee,ie=Math.max(120,Math.min(240,F?ce:ee));v({left:Q,top:F?Math.max(re,O.top-Y-ie):O.bottom+Y,width:se,maxHeight:ie})};(0,ke.useEffect)(()=>{if(m)return Ur(),()=>Yr()},[m]),(0,ke.useLayoutEffect)(()=>{if(!m)return;U();let W=()=>U();window.addEventListener("scroll",W,!0),window.addEventListener("resize",W);let O=typeof ResizeObserver>"u"?null:new ResizeObserver(W);return k.current&&O?.observe(k.current),()=>{O?.disconnect(),window.removeEventListener("scroll",W,!0),window.removeEventListener("resize",W)}},[m]),(0,ke.useEffect)(()=>{m&&B&&f&&N.current?.focus()},[m,B,f]),(0,ke.useEffect)(()=>{m&&y(W=>R.length===0?-1:Math.min(Math.max(W,0),R.length-1))},[m,R.length]),(0,ke.useEffect)(()=>{!e.length&&!I&&m&&(h(!1),y(-1))},[m,e.length,I]),(0,ke.useEffect)(()=>{let W=O=>{let Y=O.target;S.current?.contains(Y)||document.getElementById(E)?.contains(Y)||V()};return document.addEventListener("mousedown",W,!0),()=>document.removeEventListener("mousedown",W,!0)},[E]);let Z=(W,O)=>{if(W.key==="Tab"){V();return}if(W.key==="Escape"){m&&(W.preventDefault(),V(!0));return}if(W.key==="ArrowDown"||W.key==="ArrowUp"){if(W.preventDefault(),!m){A();return}if(R.length===0)return;let Y=W.key==="ArrowDown"?1:-1;y(re=>(re+Y+R.length)%R.length);return}if(W.key==="Home"||W.key==="End"){if(R.length===0)return;W.preventDefault(),m||h(!0),y(W.key==="Home"?0:R.length-1);return}if(W.key==="Enter"){if(W.preventDefault(),!m){A();return}if(I&&b.trim()!==""){C!==void 0?(n(C.value),V(!0)):P!==null&&z(P);return}G(g);return}!O&&W.key===" "&&(W.preventDefault(),m?G(g):A())},q=(0,ke.useMemo)(()=>op(R),[R]),ne=(0,ke.useMemo)(()=>{let W=new Map;return R.forEach((O,Y)=>W.set(O,Y)),W},[R]);return(0,ye.jsxs)("div",{ref:S,className:`im-select-root ${o}`.trim(),children:[(0,ye.jsxs)("button",{ref:k,type:"button",id:r,title:p,onClick:()=>m?V():A(),onKeyDown:W=>Z(W,!1),"aria-expanded":m,"aria-haspopup":"listbox","aria-controls":E,"aria-activedescendant":m&&g>=0?_(g):void 0,"aria-describedby":l,"aria-invalid":d,className:`im-select-trigger${m?" is-open":""}`,children:[c&&x?(0,ye.jsxs)("span",{className:"im-select-value",children:[c(x),(0,ye.jsx)("span",{className:"im-select-label",children:x.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:x?.label??"\u8BF7\u9009\u62E9"}),(0,ye.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ye.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),m&&f&&(0,sp.createPortal)((0,ye.jsxs)("div",{id:E,"data-portal":"select-list",className:"im-select-list",style:{left:f.left,top:f.top,width:f.width,maxHeight:f.maxHeight},children:[B&&(0,ye.jsx)("div",{className:"im-select-search",children:(0,ye.jsx)("input",{ref:N,id:L,type:"text",className:"im-select-search-input",value:b,onChange:W=>w(W.target.value),onKeyDown:W=>Z(W,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":E,"aria-activedescendant":g>=0?_(g):void 0})}),(0,ye.jsxs)("ul",{role:"listbox","aria-labelledby":B?L:void 0,className:"im-select-rows",children:[R.length===0&&(0,ye.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),q.map(W=>(0,ye.jsxs)("li",{role:"presentation",className:"im-select-group",children:[W.label!==""&&(0,ye.jsx)("div",{className:"im-select-group-title",role:"presentation",children:W.label}),(0,ye.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:W.rows.map(O=>{let Y=ne.get(O)??-1,re=O.value===t,se=Y===g;return(0,ye.jsxs)("li",{id:_(Y),role:"option","aria-selected":re,className:`im-select-option${re?" is-selected":""}${se?" is-active":""}`,onMouseEnter:()=>y(Y),onMouseDown:Q=>Q.preventDefault(),onClick:()=>G(Y),children:[c?(0,ye.jsxs)("span",{className:"im-select-value",children:[c(O),(0,ye.jsx)("span",{className:"im-select-label",children:O.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:O.label}),re&&(0,ye.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ye.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},O.value)})})]},W.id||"__ungrouped"))]}),P!==null&&(0,ye.jsx)("div",{className:"im-select-custom",children:(0,ye.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:W=>W.preventDefault(),onClick:()=>z(P),children:(0,ye.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",P,"\u201D"]})})})]}),document.body)]})}var Zr=require("react");var No="imagora",ts={"common.notSet":"\uFF08\u672A\u8BBE\u7F6E\uFF09","common.save":"\u4FDD\u5B58","common.saving":"\u4FDD\u5B58\u4E2D\u2026","common.cancel":"\u53D6\u6D88","common.close":"\u5173\u95ED","common.confirm":"\u786E\u5B9A","common.reset":"\u91CD\u7F6E","common.delete":"\u5220\u9664","panel.entry":"\u81EA\u7531\u753B\u5E03","toolbar.profile.follow":"\u8DDF\u968F imagora \u7684 .env","toolbar.profile.title":"\u6765\u6E90\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5","toolbar.model.title":"{profile} \xB7 \u5F53\u524D\u6A21\u578B","toolbar.settings":"\u8BBE\u7F6E","toolbar.settings.title":"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55","toolbar.upload":"\u4E0A\u4F20\u56FE\u7247","toolbar.upload.title":"\u4ECE\u672C\u673A\u9009\u56FE\u7247\uFF08\u4E5F\u53EF\u62D6\u5165\u6216\u7C98\u8D34\uFF09","toolbar.paste":"\u7C98\u8D34\u5BFC\u5165","toolbar.paste.title":"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u62C6\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361","toolbar.newPrompt":"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247","toolbar.newPrompt.title":"\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E","toolbar.newGroup":"\u65B0\u5EFA\u56FE\u7247\u7EC4","toolbar.newGroup.title":"\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E","toolbar.save":"\u4FDD\u5B58\u5DE5\u4F5C\u6D41","toolbar.save.title":"\u7ED9\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765","toolbar.load":"\u52A0\u8F7D\u5DE5\u4F5C\u6D41","toolbar.load.title":"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED","toolbar.history":"\u751F\u6210\u5386\u53F2","toolbar.history.title":"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\uFF0C\u5220\u6389\u8282\u70B9\u4E5F\u80FD\u627E\u56DE","toolbar.outputDir":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84","toolbar.outputDir.title":"\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF1A{dir}","toolbar.undo":"\u64A4\u9500","toolbar.undo.title":"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09","toolbar.redo":"\u6062\u590D","toolbar.redo.title":"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09","toolbar.autoConnect":"\u81EA\u52A8\u8FDE\u7EBF","toolbar.autoConnect.title":"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u5173\u7CFB\uFF1A\u56FE\u7247 \u2192 \u63D0\u793A\u8BCD \u2192 \u56FE\u7247","toolbar.runAll":"\u5168\u90E8\u8FD0\u884C","toolbar.runAll.title":"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247","toolbar.cancelAll":"\u53D6\u6D88\u5168\u90E8 ({count})","toolbar.cancelAll.title":"\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09","flash.autoConnect.done":"\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF","flash.autoConnect.noneSelected":"\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9","flash.autoConnect.selection":"\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF","flash.outputDir.set":"\u5DF2\u628A\u9009\u4E2D\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A {dir}","flash.outputDir.cleared":"\u5DF2\u628A\u9009\u4E2D\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D","flash.noNodes":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9","flash.layout.noneSelected":"\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9","flash.drop.noImage":"\u6CA1\u6709\u53EF\u7528\u7684\u56FE\u7247\u6587\u4EF6\uFF1A\u652F\u6301 png / jpg / webp / gif / bmp","flash.image.noFile":"\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6","flash.mask.cleared":"\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248","flash.prompt.copied":"\u5DF2\u590D\u5236\u63D0\u793A\u8BCD","flash.prompt.copyFailed":"\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE","flash.readFailed":"\u8BFB\u53D6\u5931\u8D25\uFF1A{reason}","flash.split.done":"\u5DF2\u5207\u51FA {count} \u5F20","flash.drop.images":"\u5DF2\u653E\u5165 {count} \u5F20\u56FE","flash.import.prompts":"\u5DF2\u5EFA {count} \u5F20\u63D0\u793A\u8BCD\u5361","flash.snap.on":"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45","flash.snap.off":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E","flash.lock.on":"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8 / \u8FDE\u7EBF / \u9009\u4E2D / \u5E73\u79FB\u90FD\u505C\u4E86","flash.lock.off":"\u753B\u5E03\u5DF2\u89E3\u9501","flash.renderError":"\u753B\u5E03\u6E32\u67D3\u51FA\u9519\uFF1A{reason}","canvas.goSettings":"\u53BB\u8BBE\u7F6E","canvas.minimap":"\u753B\u5E03\u5C0F\u5730\u56FE","menu.preview":"\u9884\u89C8\u5927\u56FE","menu.crop":"\u88C1\u526A","menu.upscale":"\u653E\u5927","menu.split":"\u5207\u5206","menu.mask":"\u8499\u7248\u91CD\u7ED8","menu.replace":"\u66FF\u6362\u56FE\u7247","menu.run":"\u8FD0\u884C","menu.copyPrompt":"\u590D\u5236\u63D0\u793A\u8BCD","menu.deleteSelection":"\u5220\u9664\u6240\u9009 {count} \u9879","menu.delete":"\u5220\u9664","menu.deleteOnly":"\u4EC5\u5220\u9664\u6B64\u9879","menu.aria":"\u8282\u70B9\u64CD\u4F5C","upscale.title":"\u653E\u5927\u56FE\u7247","upscale.subtitle":"\u672C\u5730\u6309\u957F\u8FB9\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002","upscale.longEdge":"\u957F\u8FB9\u76EE\u6807","upscale.algorithm":"\u7B97\u6CD5","upscale.algo.high":"\u9AD8\u8D28\u91CF","upscale.algo.bilinear":"\u5E73\u6ED1","upscale.algo.nearest":"\u4FDD\u50CF\u7D20","upscale.original":"\u539F\u56FE {width} \xD7 {height}","upscale.scale":"{ratio}\xD7","upscale.shrink":"\u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F","upscale.reading":"\u8BFB\u53D6\u4E2D\u2026","upscale.note":"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF1A\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\u3002\u60F3\u8981\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\uFF0C\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002","upscale.busy":"\u5904\u7406\u4E2D\u2026","upscale.confirm":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03","upscale.failed":"\u653E\u5927\u5931\u8D25\uFF1A{reason}","upscale.resultName":"\u653E\u5927 {width}\xD7{height} \xB7 {algorithm}","crop.title":"\u88C1\u526A\u56FE\u7247","crop.subtitle":"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002","crop.ratio":"\u6BD4\u4F8B","crop.ratio.free":"\u81EA\u7531","crop.ratio.group":"\u88C1\u526A\u6BD4\u4F8B","crop.note":"\u88C1\u526A\u540E {width} \xD7 {height}","crop.note.original":"\u539F\u56FE {width} \xD7 {height}","crop.note.gcd":"\u539F\u6BD4\u4F8B {ratio}","crop.note.hint":"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F {min}%","crop.alt":"\u5F85\u88C1\u526A","crop.busy":"\u5904\u7406\u4E2D\u2026","crop.confirm":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03","crop.failed":"\u88C1\u526A\u5931\u8D25\uFF1A{reason}","crop.resultName":"\u88C1\u526A {width}\xD7{height}","crop.resultName.ratio":"\u88C1\u526A {width}\xD7{height} \xB7 {ratio}","split.title":"\u5207\u5206\u56FE\u7247","split.subtitle":"\u6309\u884C \xD7 \u5217\u5207\u5F00\u8FD9\u5F20\u56FE\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002","split.cols":"\u5217","split.rows":"\u884C","split.summary":"{count} \u5F20","split.summary.cell":"{count} \u5F20 \xB7 \u6BCF\u5F20 {width} \xD7 {height}","split.original":"\u539F\u56FE {width} \xD7 {height}","split.readingOriginal":"\u6B63\u5728\u8BFB\u53D6\u539F\u56FE\u5C3A\u5BF8\u2026","split.busy":"\u5904\u7406\u4E2D\u2026","split.confirm":"\u786E\u8BA4\u5207\u5206\uFF08{count} \u5F20\uFF09","split.needTwo":"\u81F3\u5C11 2 \u5F20","split.more":"\u2026\u7B49 {count} \u4E2A","split.tooSmall":"1 \xD7 1 \u7B49\u4E8E\u4E0D\u5207\u3002\u628A\u884C\u6216\u5217\u8C03\u5927\u4E00\u70B9\u3002","split.note":"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u5404\u81EA\u6210\u4E3A\u4E00\u4E2A\u56FE\u7247\u8282\u70B9\u3002","split.failed":"\u5207\u5206\u5931\u8D25\uFF1A{reason}","split.resultName":"\u5207\u5206 {index}/{total}","mask.title":"\u8499\u7248\u91CD\u7ED8","mask.subtitle":"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002","mask.mode.paint":"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09","mask.mode.erase":"\u64E6","mask.brush":"\u7B14\u5237","mask.clear":"\u6E05\u7A7A","mask.strokes":"{count} \u7B14","mask.noStrokes":"\u8FD8\u6CA1\u6D82","mask.note":"\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002","mask.note.original":"\u539F\u56FE {width} \xD7 {height}","mask.busy":"\u5BFC\u51FA\u4E2D\u2026","mask.confirm":"\u6302\u4E0A\u8499\u7248","mask.failed":"\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A{reason}","mask.noBase":"\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D","mask.noCanvas":"\u753B\u5E03\u4E0D\u53EF\u7528","mask.resultName":"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8","import.title":"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247","import.subtitle":"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002","import.aria":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C","import.placeholder":`=== \u79CB\u65E5\u901A\u52E4\u5305 ===
\`	ext
ratio: 3:2

linen tote bag on warm concrete, soft top light
\`

=== \u51AC\u65E5\u56F4\u5DFE ===
\`	ext
ratio: 2:3

wool scarf on linen, morning window light
\``,"import.summary":"\u8BC6\u522B {count} \u5F20\u5361\u7247","import.summaryIssues":"\u53D1\u73B0 {count} \u4E2A\u95EE\u9898","import.card.untitled":"\u7B2C {index} \u5F20","import.card.defaultRatio":"\u9ED8\u8BA4\u6BD4\u4F8B","import.card.fallback":"\u5C3A\u5BF8\u56DE\u9000","import.card.empty":"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09","import.hint":"\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C === \u540D\u5B57 ===\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ratio: 3:2\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002\u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08{count} \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002","import.waiting":"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8","import.confirm":"\u786E\u8BA4\u5EFA\u5361\uFF08{count}\uFF09","save.title":"\u4FDD\u5B58\u5DE5\u4F5C\u6D41","save.subtitle":"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002","save.defaultName":"\u753B\u5E03 {stamp}","save.nameAria":"\u5DE5\u4F5C\u6D41\u540D\u79F0","save.namePlaceholder":"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57","save.where":"\u5B58\u5230 {dir}","save.where.shared":"\u5B58\u5230 {dir}\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09","save.where.fallback":"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09","save.overwriteMore":"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09","save.overwriteTitle":"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F","save.overwriteSubtitle":"\u300C{name}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002","save.overwriteWarn":"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002","save.back":"\u8FD4\u56DE\u6539\u540D","save.overwrite":"\u8986\u76D6\u4FDD\u5B58","load.title":"\u52A0\u8F7D\u5DE5\u4F5C\u6D41","load.subtitle":"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002","load.empty":"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41","load.where":"\u8BFB\u7684\u662F {dir}","help.title":"\u64CD\u4F5C\u5E2E\u52A9","help.subtitle":"\u62D6\u5165\u56FE\u7247 \xB7 \u53F3\u952E\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u51FA\u83DC\u5355","help.rows.canvas":"\u753B\u5E03","help.rows.canvasText":"\u53F3\u952E\u62D6\u62FD\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u5F39\u83DC\u5355 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8","help.rows.node":"\u8282\u70B9","help.rows.nodeText":"\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C / \u6574\u7406 / \u8FDE\u7EBF / \u8BBE\u8DEF\u5F84 / \u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88","help.rows.edge":"\u8FDE\u7EBF","help.rows.edgeText":"\u56FE\u7247\u2192\u63D0\u793A\u8BCD / \u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u53EA\u6709\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408","help.rows.keys":"\u5FEB\u6377\u952E","help.rows.keysText":"Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete \u5220\u9664\u8FDE\u7EBF","help.rows.refs":"\u5F15\u7528","help.rows.refsText":"\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247","help.rows.run":"\u8FD0\u884C","help.rows.runText":"\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D","help.rows.save":"\u4FDD\u5B58","help.rows.saveText":"\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167","help.config":"\u914D\u7F6E\u6765\u6E90\uFF1A{source} \xB7 \u6A21\u578B {model}","help.config.plugin":"\u63D2\u4EF6\u5185\u914D\u7F6E","help.config.missing":"\u672A\u627E\u5230","help.output":"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 {dir}","dialog.readImageFailed":"\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A{reason}","node.missing":"\u6587\u4EF6\u7F3A\u5931","node.imageMissing":"\u56FE\u7247\u7F3A\u5931","node.mask.title":"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","node.mask.clear":"\u6E05\u9664\u8499\u7248","node.mask.badge":"\u8499\u7248","node.refs":"\u5F15\u7528 {count} \u5904","node.noRefs":"\u672A\u5F15\u7528","node.image.preview":"\u9884\u89C8\u5927\u56FE","node.image.crop":"\u88C1\u526A\u56FE\u7247","node.image.upscale":"\u653E\u5927\u56FE\u7247","node.image.split":"\u5207\u5206\u56FE\u7247","node.image.mask":"\u8499\u7248\u91CD\u7ED8","node.image.replace":"\u66FF\u6362\u56FE\u7247","node.image.delete":"\u5220\u9664\u56FE\u7247","node.group.delete":"\u5220\u9664\u56FE\u7247\u7EC4","node.group.count":"{count} \u5F20\u56FE","node.group.dedup":"\u53BB\u91CD","node.group.dedup.title":"\u5DF2\u53BB\u6389 {count} \u5F20\u91CD\u590D\u56FE\u7247","node.prompt.placeholder":"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background","node.prompt.untitled":"\u63D0\u793A\u8BCD\u751F\u6210","node.prompt.delete":"\u5220\u9664\u63D0\u793A\u8BCD","node.prompt.size":"\u5C3A\u5BF8","node.prompt.size.title":"\u8F93\u51FA\u5C3A\u5BF8","node.prompt.quality":"\u8D28\u91CF","node.prompt.quality.title":"\u751F\u6210\u8D28\u91CF","node.prompt.outputDir":"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09","node.prompt.customSize":"{size}\uFF08\u81EA\u5B9A\u4E49\uFF09","node.prompt.run":"\u8FD0\u884C","node.prompt.cancel":"\u53D6\u6D88","node.prompt.cancelling":"\u53D6\u6D88\u4E2D\u2026","node.prompt.queueing":"\u6392\u961F\u4E2D\u2026","node.prompt.cancel.title":"\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F","status.idle":"\u5C31\u7EEA","status.queued":"\u6392\u961F\u4E2D","status.running":"\u751F\u6210\u4E2D","status.done":"\u5B8C\u6210","status.failed":"\u5931\u8D25","status.generating":"\u751F\u6210\u4E2D {seconds}s","status.done.withCount":"\u5B8C\u6210 \xB7 {count} \u5F20","status.failed.withReason":"\u5931\u8D25\uFF1A{reason}"},lp={"common.notSet":"Not set","common.save":"Save","common.saving":"Saving\u2026","common.cancel":"Cancel","common.close":"Close","common.confirm":"OK","common.reset":"Reset","common.delete":"Delete","panel.entry":"Freeform canvas","toolbar.profile.follow":"Follow imagora's .env","toolbar.profile.title":"Profile: picks the endpoint and the API key","toolbar.model.title":"{profile} \xB7 current model","toolbar.settings":"Settings","toolbar.settings.title":"Endpoint, API key, model, and folders","toolbar.upload":"Upload","toolbar.upload.title":"Pick images from this machine \u2014 or drag them in, or paste","toolbar.paste":"Paste prompts","toolbar.paste.title":"Paste a model reply; each line becomes a prompt card","toolbar.newPrompt":"New prompt card","toolbar.newPrompt.title":"Drag onto the canvas to drop it where you let go","toolbar.newGroup":"New image group","toolbar.newGroup.title":"Drag onto the canvas to drop it where you let go","toolbar.save":"Save workflow","toolbar.save.title":"Name this canvas and keep it","toolbar.load":"Load workflow","toolbar.load.title":"Continue from a saved canvas","toolbar.history":"Generation history","toolbar.history.title":"Every image on disk, even ones you deleted from the canvas","toolbar.outputDir":"Default output folder","toolbar.outputDir.title":"New cards start here: {dir}","toolbar.undo":"Undo","toolbar.undo.title":"Undo the last step (Ctrl+Z)","toolbar.redo":"Redo","toolbar.redo.title":"Reapply the step you undid (Ctrl+Y)","toolbar.autoConnect":"Auto-connect","toolbar.autoConnect.title":"Wire up the obvious links by position: image \u2192 prompt \u2192 image","toolbar.runAll":"Run all","toolbar.runAll.title":"Run every prompt card","toolbar.cancelAll":"Cancel all ({count})","toolbar.cancelAll.title":"Queued jobs won't start; the running one is discarded after it finishes (it still lands on disk and is still billed)","flash.autoConnect.done":"Filled in the obvious links","flash.autoConnect.noneSelected":"Select the nodes to connect first","flash.autoConnect.selection":"Linked the selected nodes","flash.outputDir.set":"Output folder for the selected cards: {dir}","flash.outputDir.cleared":"Selected cards now stay on the canvas only","flash.noNodes":"Nothing on the canvas yet","flash.layout.noneSelected":"Select the nodes to tidy first","flash.drop.noImage":"No usable image: png / jpg / webp / gif / bmp","flash.image.noFile":"This image has no file yet","flash.mask.cleared":"Mask cleared","flash.prompt.copied":"Prompt copied","flash.prompt.copyFailed":"Copy failed: the browser blocked clipboard access","flash.readFailed":"Could not read: {reason}","flash.split.done":"Split into {count} images","flash.drop.images":"Added {count} images","flash.import.prompts":"Created {count} prompt cards","flash.snap.on":"Snapping on: dragged cards line up with their neighbours","flash.snap.off":"Snapping off: cards go wherever you put them","flash.lock.on":"Canvas locked: zoom only \u2014 no dragging, connecting, selecting, or panning","flash.lock.off":"Canvas unlocked","flash.renderError":"Canvas failed to render: {reason}","canvas.goSettings":"Open settings","canvas.minimap":"Canvas minimap","menu.preview":"View full size","menu.crop":"Crop","menu.upscale":"Upscale","menu.split":"Split into a grid","menu.mask":"Repaint with a mask","menu.replace":"Replace image","menu.run":"Run","menu.copyPrompt":"Copy prompt","menu.deleteSelection":"Delete {count} selected","menu.delete":"Delete","menu.deleteOnly":"Delete just this one","menu.aria":"Node actions","upscale.title":"Upscale","upscale.subtitle":"Resampled locally to a target long edge. No API call, no cost.","upscale.longEdge":"Long edge","upscale.algorithm":"Algorithm","upscale.algo.high":"High quality","upscale.algo.bilinear":"Smooth","upscale.algo.nearest":"Keep pixels","upscale.original":"Original {width} \xD7 {height}","upscale.scale":"{ratio}\xD7","upscale.shrink":"Smaller than the original \u2014 this shrinks it","upscale.reading":"Reading\u2026","upscale.note":"Upscaling resamples locally; it cannot invent detail. For a sharper image, rewrite the prompt and generate again.","upscale.busy":"Working\u2026","upscale.confirm":"Upscale and add to canvas","upscale.failed":"Upscale failed: {reason}","upscale.resultName":"Upscale {width}\xD7{height} \xB7 {algorithm}","dialog.readImageFailed":"Could not read this image: {reason}","crop.title":"Crop","crop.subtitle":"Drag inside the frame to move it, drag a handle to resize, then confirm.","crop.ratio":"Ratio","crop.ratio.free":"Free","crop.ratio.group":"Crop ratio","crop.note":"Result {width} \xD7 {height}","crop.note.original":"Original {width} \xD7 {height}","crop.note.gcd":"Native ratio {ratio}","crop.note.hint":"Drag inside to move \xB7 drag a handle to resize \xB7 down to {min}%","crop.alt":"Image to crop","crop.busy":"Working\u2026","crop.confirm":"Crop and add to canvas","crop.failed":"Crop failed: {reason}","crop.resultName":"Crop {width}\xD7{height}","crop.resultName.ratio":"Crop {width}\xD7{height} \xB7 {ratio}","split.title":"Split image","split.subtitle":"Cut this image into a rows \xD7 columns grid; each cell becomes its own node.","split.cols":"Columns","split.rows":"Rows","split.summary":"{count} images","split.summary.cell":"{count} images \xB7 {width} \xD7 {height} each","split.original":"Original {width} \xD7 {height}","split.readingOriginal":"Reading the original size\u2026","split.busy":"Working\u2026","split.confirm":"Split into {count}","split.needTwo":"At least 2 needed","split.more":"\u2026{count} in total","split.tooSmall":"1 \xD7 1 is no split at all. Raise the rows or columns.","split.note":"Each piece becomes its own image node on the canvas.","split.failed":"Split failed: {reason}","split.resultName":"Split {index}/{total}","mask.title":"Repaint with a mask","mask.subtitle":"Paint the area to repaint; the exported PNG mask matches the original size.","mask.mode.paint":"Paint (to repaint)","mask.mode.erase":"Erase","mask.brush":"Brush","mask.clear":"Clear","mask.strokes":"{count} strokes","mask.noStrokes":"Nothing painted yet","mask.note":"Painted areas get repainted; everything else stays. The exported mask is a PNG at the original size.","mask.note.original":"Original {width} \xD7 {height}","mask.busy":"Exporting\u2026","mask.confirm":"Attach mask","mask.failed":"Could not export the mask: {reason}","mask.noBase":"The image has not loaded yet","mask.noCanvas":"Canvas unavailable","mask.resultName":"Mask attached \u2014 painted areas will be repainted","import.title":"Paste prompt cards","import.subtitle":"Paste a model reply. Each card is a title, a fenced block, and a ratio on the first line.","import.aria":"Prompt text to import","import.placeholder":`=== Autumn commute bag ===
\`	ext
ratio: 3:2

linen tote bag on warm concrete, soft top light
\`

=== Winter scarf ===
\`	ext
ratio: 2:3

wool scarf on linen, morning window light
\``,"import.summary":"{count} cards recognised","import.summaryIssues":"{count} problems found","import.card.untitled":"Card {index}","import.card.defaultRatio":"Default ratio","import.card.fallback":"Size fell back","import.card.empty":"(empty prompt)","import.hint":"One card per block: a title line === name ===, then ratio: 3:2 inside the fence, then a blank line and the prompt. Sizes come from the current config ({count} options); if no ratio parses, the first one is used.","import.waiting":"Paste something to see a live preview here","import.confirm":"Create {count} cards","save.title":"Save workflow","save.subtitle":"Name this canvas so you can load it again later.","save.defaultName":"Canvas {stamp}","save.nameAria":"Workflow name","save.namePlaceholder":"Name this canvas","save.where":"Saved to {dir}","save.where.shared":"Saved to {dir} (shared with original Imagora)","save.where.fallback":"the plugin's own data folder (no imagora folder set)","save.overwriteMore":"Or overwrite an existing one (click to fill in the name)","save.overwriteTitle":"Overwrite this workflow?","save.overwriteSubtitle":"\u201C{name}\u201D already exists. Saving replaces it.","save.overwriteWarn":"The old copy is gone for good. Go back and rename if you want to keep it.","save.back":"Back","save.overwrite":"Overwrite","load.title":"Load workflow","load.subtitle":"Continue from a saved canvas.","load.empty":"No workflows in this folder yet","load.where":"Looked in {dir}","help.title":"How to use this canvas","help.subtitle":"Drop images in \xB7 right-drag to box-select \xB7 right-click a node for its menu","help.rows.canvas":"Canvas","help.rows.canvasText":"Right-drag to box-select \xB7 right-click a node for its menu \xB7 Ctrl/Cmd+click to add to the selection \xB7 wheel to zoom \xB7 drag empty space to pan \xB7 \u201CFit\u201D at bottom-left for an overview \xB7 double-click an image to enlarge","help.rows.node":"Nodes","help.rows.nodeText":"Hover for the action rail \xB7 once selected, run / tidy / connect / set folder / delete from the top-right bar \xB7 a running card can be cancelled on its own","help.rows.edge":"Links","help.rows.edgeText":"image \u2192 prompt or group \xB7 group \u2192 prompt \xB7 prompt \u2192 image. A prompt takes one incoming link; multiple images are aggregated through a group","help.rows.keys":"Keys","help.rows.keysText":"Ctrl+A select all \xB7 Ctrl+Z/Y undo and redo \xB7 Delete removes the selection \xB7 Ctrl+S saves \xB7 double-click a link, or select it and press Delete","help.rows.refs":"References","help.rows.refsText":"Write @image-name in a prompt to use only those images; leave it out to use every incoming image","help.rows.run":"Running","help.rows.runText":"\u201CRun\u201D on a single card \xB7 \u201CRun all\u201D, \u201CRun selected\u201D, \u201CCancel all\u201D in the toolbar","help.rows.save":"Saving","help.rows.saveText":"Save under a name to keep it as a workflow; canvas edits also land in a recovery snapshot","help.config":"Config from {source} \xB7 model {model}","help.config.plugin":"the plugin settings","help.config.missing":"not found","help.output":"Output defaults to {dir}","node.missing":"File missing","node.imageMissing":"No image","node.mask.title":"This image has a mask; every re-run repaints only inside it. Click to clear","node.mask.clear":"Clear mask","node.mask.badge":"Mask","node.refs":"Used {count}\xD7","node.noRefs":"Unused","node.image.preview":"View full size","node.image.crop":"Crop","node.image.upscale":"Upscale","node.image.split":"Split into a grid","node.image.mask":"Repaint with a mask","node.image.replace":"Replace image","node.image.delete":"Delete image","node.group.delete":"Delete group","node.group.count":"{count} images","node.group.dedup":"Deduped","node.group.dedup.title":"Removed {count} duplicate images","node.prompt.placeholder":"English prompt, e.g. a red apple on white background","node.prompt.untitled":"Prompt output","node.prompt.delete":"Delete prompt","node.prompt.size":"Size","node.prompt.size.title":"Output size","node.prompt.quality":"Quality","node.prompt.quality.title":"Generation quality","node.prompt.outputDir":"Output folder (empty = canvas only)","node.prompt.customSize":"{size} (custom)","node.prompt.run":"Run","node.prompt.cancel":"Cancel","node.prompt.cancelling":"Cancelling\u2026","node.prompt.queueing":"Queued\u2026","node.prompt.cancel.title":"Queued jobs won't start; the running one is discarded once it finishes","status.idle":"Ready","status.queued":"Queued","status.running":"Generating","status.done":"Done","status.failed":"Failed","status.generating":"Generating {seconds}s","status.done.withCount":"Done \xB7 {count}","status.failed.withReason":"Failed: {reason}"};function Nv(e,t){return t?e.replace(/\{(\w+)\}/g,(n,o)=>Object.prototype.hasOwnProperty.call(t,o)?String(t[o]):n):e}var ns=(e,t)=>Nv(ts[e],t);var dp=require("react/jsx-runtime"),cp=(0,Zr.createContext)(null);function up({translate:e,children:t}){return(0,dp.jsx)(cp.Provider,{value:e??ns,children:t})}function xe(){return(0,Zr.useContext)(cp)??ns}var K=require("react/jsx-runtime"),os=(0,Ae.createContext)(null),rs=(0,Ae.createContext)(!1);function is(){return(0,Ae.useContext)(rs)}function as(){let e=(0,Ae.useContext)(os);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function Mv({value:e,onChange:t}){let[n,o]=(0,Ae.useState)(e),r=(0,Ae.useRef)(!1),i=xe();return(0,Ae.useEffect)(()=>{r.current||o(e)},[e]),(0,K.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n,placeholder:i("node.prompt.placeholder"),onCompositionStart:()=>{r.current=!0},onCompositionEnd:a=>{r.current=!1,o(a.currentTarget.value),t(a.currentTarget.value)},onChange:a=>{let s=a.target.value;o(s),r.current||t(s)}})}function Kr(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(xn,{type:"target",position:te.Top,className:"im-handle"}),(0,K.jsx)(xn,{type:"source",position:te.Bottom,className:"im-handle"})]})}function ss({children:e}){return(0,K.jsx)("div",{className:"im-rail nodrag",children:e})}function Lt({label:e,onClick:t,danger:n,children:o}){return(0,K.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var fp=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=as(),i=is(),a=xe(),[s,u]=(0,Ae.useState)(!1),l=n.missing||s,d=Qd(n.url);return(0,K.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${l?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,K.jsx)(Kr,{}),l?(0,K.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:a("node.missing")}):null,n.maskDataUrl?(0,K.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:a("node.mask.title"),"aria-label":a("node.mask.clear"),onClick:c=>{c.stopPropagation(),r.clearMask(t)},children:a("node.mask.badge")}):null,i?null:(0,K.jsxs)(ss,{children:[(0,K.jsx)(Lt,{label:a("node.image.preview"),onClick:()=>r.zoomImage(t),children:(0,K.jsx)(ze,{name:"eye"})}),(0,K.jsx)(Lt,{label:a("node.image.crop"),onClick:()=>r.cropImage(t),children:(0,K.jsx)(ze,{name:"crop"})}),(0,K.jsx)(Lt,{label:a("node.image.upscale"),onClick:()=>r.upscaleImage(t),children:(0,K.jsx)(ze,{name:"expand"})}),(0,K.jsx)(Lt,{label:a("node.image.split"),onClick:()=>r.splitImage(t),children:(0,K.jsx)(ze,{name:"grid"})}),(0,K.jsx)(Lt,{label:a("node.image.mask"),onClick:()=>r.maskImage(t),children:(0,K.jsx)(ze,{name:"wand"})}),(0,K.jsx)(Lt,{label:a("node.image.replace"),onClick:()=>r.replaceImage(t),children:(0,K.jsx)(ze,{name:"image"})}),(0,K.jsx)(Lt,{label:a("node.image.delete"),danger:!0,onClick:()=>r.deleteNode(t),children:(0,K.jsx)(ze,{name:"trash"})})]}),(0,K.jsx)("div",{className:"im-thumb",onDoubleClick:c=>{c.stopPropagation(),r.zoomImage(t)},children:n.url&&d?(0,K.jsx)("img",{src:d,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>u(!0)}):n.url?(0,K.jsx)("span",{className:"im-thumb-placeholder","aria-hidden":!0}):(0,K.jsx)("span",{className:"im-muted",style:{fontSize:11},children:a("node.imageMissing")})}),(0,K.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,K.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?a("node.refs",{count:n.refCount}):a("node.noRefs")})]})}),pp=4,gp=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=as(),i=is(),a=xe(),s=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",u=n.duplicateCount??0,l=Math.min(Math.max(n.imageCount-1,0),3);return(0,K.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,K.jsx)(Kr,{}),i?null:(0,K.jsx)(ss,{children:(0,K.jsx)(Lt,{label:a("node.group.delete"),danger:!0,onClick:()=>r.deleteNode(t),children:(0,K.jsx)(ze,{name:"trash"})})}),(0,K.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:l},(d,c)=>(0,K.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(c+1)*pp}px, ${-(c+1)*pp}px)`}},c)),(0,K.jsxs)("div",{className:"im-group-face",children:[(0,K.jsx)("div",{className:"im-group-count",children:a("node.group.count",{count:n.imageCount})}),(0,K.jsxs)("div",{className:"im-group-size",children:[s," MB"]}),u>0?(0,K.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:a("node.group.dedup.title",{count:u}),children:a("node.group.dedup")}):null]})]})]})});function mp({from:e}){let t=xe(),[n,o]=(0,Ae.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ae.useEffect)(()=>{if(!e)return;let r=window.setInterval(()=>o(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(r)},[e]),(0,K.jsx)(K.Fragment,{children:t("status.generating",{seconds:n})})}var Ev={idle:"status.idle",queued:"status.queued",running:"status.running",done:"status.done",failed:"status.failed"};function _v(e,t){switch(e.status){case"queued":return{text:t("status.queued"),detail:t("status.queued"),tone:"is-queued"};case"running":return{text:t("status.running"),detail:t("status.running"),tone:"is-running"};case"done":{let n=t("status.done.withCount",{count:e.resultCount??0});return{text:n,detail:n,tone:"is-done"}}case"failed":return{text:t("status.failed"),detail:e.message?t("status.failed.withReason",{reason:e.message}):t("status.failed"),tone:"is-failed"};default:return{text:t("status.idle"),detail:t("status.idle"),tone:"is-idle"}}}var hp=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=as(),i=is(),a=xe(),s=r.config,u=n.status==="queued"||n.status==="running",l=s?.sizes??[],d=s?.qualities??[],c=l.some(m=>m.value===n.size)||!n.size?l:[...l,{value:n.size,label:a("node.prompt.customSize",{size:n.size}),cost:0}],p=s?.qualityEffective!==!1;if(i){let m=_v(n,a);return(0,K.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,K.jsx)(Kr,{}),(0,K.jsx)("div",{className:"im-lod-title",title:n.title??a("node.prompt.untitled"),children:n.title??a("node.prompt.untitled")}),(0,K.jsx)("div",{className:`im-lod-status ${m.tone}`,title:m.detail,children:n.status==="running"?(0,K.jsx)(mp,{from:n.startedAtMs}):m.text})]})}return(0,K.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,K.jsx)(Kr,{}),(0,K.jsxs)(ss,{children:[(0,K.jsx)("span",{className:"im-rail-dot",title:a(Ev[n.status]??"status.idle"),children:(0,K.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,K.jsx)(Lt,{label:a("node.prompt.delete"),danger:!0,onClick:()=>r.deleteNode(t),children:(0,K.jsx)(ze,{name:"trash"})})]}),(0,K.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??a("node.prompt.untitled")}),(0,K.jsx)(Mv,{value:n.prompt,onChange:m=>r.updatePrompt(t,{prompt:m})}),(0,K.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:p?"7fr 3fr":"1fr",marginTop:8},children:[(0,K.jsxs)("div",{style:{minWidth:0},children:[(0,K.jsx)("span",{className:"im-label",children:a("node.prompt.size")}),(0,K.jsx)(ft,{className:"im-select-fill",options:tp(c,n.size),value:n.size,title:a("node.prompt.size.title"),onChange:m=>r.updatePrompt(t,{size:m})})]}),p?(0,K.jsxs)("div",{style:{minWidth:0},children:[(0,K.jsx)("span",{className:"im-label",children:a("node.prompt.quality")}),(0,K.jsx)(ft,{className:"im-select-fill",options:d.map(m=>({value:m,label:m})),value:n.quality,title:a("node.prompt.quality.title"),onChange:m=>r.updatePrompt(t,{quality:m})})]}):null]}),(0,K.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,K.jsx)("span",{className:"im-label",children:a("node.prompt.outputDir")}),(0,K.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:s?.defaultOutputDir??"",onChange:m=>r.updatePrompt(t,{outputDir:m.target.value})})]}),n.status==="failed"&&n.message?(0,K.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,K.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,K.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${u?" im-btn-busy":""}`,style:{flex:1},disabled:u||!(n.prompt??"").trim(),onClick:m=>{m.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,K.jsx)(mp,{from:n.startedAtMs}):n.status==="queued"?a("node.prompt.queueing"):a("node.prompt.run")}),u?(0,K.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:a("node.prompt.cancel.title"),onClick:m=>{m.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?a("node.prompt.cancelling"):a("node.prompt.cancel")}):null]})]})});var bp=`
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

  /* \u5C3A\u5BF8\u9636\u68AF\uFF08**\u63A7\u4EF6\u9AD8\u5EA6\u53EA\u6709\u8FD9\u4E24\u6863\uFF0C\u89C1\u4E0B**\uFF09\uFF1A\u7D27\u51D1 28 \u2192 \u8868\u5355 38\u3002
   *
   * \u26A0\uFE0F \u8FD9\u4E24\u884C\u7684\u7EAA\u5F8B\uFF1A\u4EFB\u4F55\u300C\u53EF\u70B9/\u53EF\u8F93\u5165\u300D\u7684\u63A7\u4EF6\u90FD\u5FC5\u987B\u4E8C\u9009\u4E00\uFF0C\u4E0D\u8BB8\u81EA\u5DF1\u7528
   * padding + line-height \u6491\u9AD8\u3002\u5B9E\u6D4B\u8FC7\u4E00\u904D\u5168\u9879\u76EE\uFF0C\u5404\u5199\u5404\u7684\u4F1A\u6F02\u6210 10 \u79CD\uFF1A
   *   13.8 / 17.2 / 18 / 21.2 / 22.4 / 23.1 / 28 / 36.4 / 40.4 / 87.5
   * \u5176\u4E2D 40.4 \u662F .im-field \u9760 padding: 8px 20px + 14px/1.6 \u7B97\u51FA\u6765\u7684\uFF0C
   * \u800C\u7D27\u6328\u7740\u5B83\u7684\u4E0B\u62C9\u89E6\u53D1\u5668\u5199\u6B7B --im-h-ctl(28) \u2014\u2014 \u540C\u4E00\u884C\u5DEE 12.4px\uFF0C
   * \u5C31\u662F\u7EF4\u62A4\u8005\u62A5\u7684\u300C\u4E0B\u62C9\u6846\u53C8\u662F\u4E00\u4E2A\u9AD8\u5EA6\u3001\u8DDF\u8F93\u5165\u6846\u5BF9\u4E0D\u9F50\u300D\u3002
   *
   * \u5206\u4E24\u6863\u800C\u4E0D\u662F\u4E00\u6863\uFF0C\u662F\u56E0\u4E3A\u4E24\u5904\u573A\u666F\u672C\u6765\u5C31\u4E0D\u540C\uFF1A
   *   \u7D27\u51D1\u6863 28\uFF1A\u9876\u680F\u3001\u5DE5\u5177\u680F\u3001\u8282\u70B9\u5361\u5185\u90E8\u3001\u751F\u6210\u5386\u53F2\u90A3\u4E24\u6761\u5E26\u5B50
   *   \u8868\u5355\u6863 38\uFF1A\u8BBE\u7F6E / \u4FDD\u5B58 / \u52A0\u8F7D / \u7C98\u8D34\u5BFC\u5165\u8FD9\u4E9B\u8868\u5355\u5F39\u7A97
   * \u5F39\u7A97\u91CC\u8981\u5E76\u6392\u7684\u6309\u94AE\u8DDF\u8F93\u5165\u6846\u540C\u6863\uFF08\u300C.im-field-control\u300D \u90A3\u6761\u89C4\u5219\uFF09\u3002
   *
   * \u4F8B\u5916\uFF08\u4E0D\u7B97\u8FDB\u9636\u68AF\uFF09\uFF1Atextarea \u9AD8\u5EA6\u81EA\u9002\u5E94\u3001.im-chip \u662F\u89D2\u6807\u4E0D\u662F\u63A7\u4EF6\uFF0818\uFF09\u3001
   * .im-icon-btn \u662F\u6B63\u65B9\u5F62\u56FE\u6807\u6309\u94AE\uFF08\u5BBD=\u9AD8=\u7D27\u51D1\u6863\uFF09\u3002 */
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
  /* \u9AD8\u5EA6\u8D70 token\uFF0C\u4E0D\u7528 padding \u6491\u3002\u9ED8\u8BA4\u52A8\u4F5C\u6309\u94AE\uFF08\u4E0D\u5E26 -sm / -xs\uFF09\u662F\u8868\u5355\u6863 38\uFF0C
     \u4E0E\u540C\u5C4F\u7684\u8F93\u5165\u6846\u7B49\u9AD8\uFF1B-sm \u624D\u662F\u7D27\u51D1\u6863 28\u3002\u65E9\u5148\u9760 padding: 8px 16px \u6491\uFF0C
     \u7B97\u51FA\u6765 33.6px \u2014\u2014 \u53C8\u4E00\u4E2A\u300C\u8DDF\u8C01\u90FD\u4E0D\u76F8\u7B49\u300D\u7684\u9AD8\u5EA6\u3002 */
  height: var(--im-h-field);
  padding: 0 16px;
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
/* \u5C0F\u6309\u94AE\uFF1A\u7D27\u51D1\u6863 28\uFF08\u9876\u680F\u3001\u5DE5\u5177\u680F\u3001\u8282\u70B9\u64CD\u4F5C\u680F\u3001\u5386\u53F2\u884C\uFF09\u3002\u9AD8\u5EA6\u8D70 token \u800C\u4E0D\u662F
 * padding \u2014\u2014 4px 12px \u6491\u51FA\u6765\u662F 22.4px\uFF0C\u4E0E\u65C1\u8FB9 28px \u7684\u4E0B\u62C9/\u8F93\u5165\u6C38\u8FDC\u5DEE\u534A\u6863\u3002 */
.im-btn-sm { height: var(--im-h-ctl); padding: 0 12px; font-size: 12px; }
/* \u6781\u5C0F\u6863\uFF1A\u53EA\u7ED9\u300C\u884C\u5185\u9644\u5C5E\u52A8\u4F5C\u300D\u7528\uFF08\u5386\u53F2\u6761\u76EE\u91CC\u90A3\u51E0\u4E2A\u3001\u9519\u8BEF\u8FB9\u754C\u91CC\u7684\u91CD\u8BD5\uFF09\u3002
 * 24px \u662F\u7D27\u51D1\u6863\u4E0E 18px \u89D2\u6807\u4E4B\u95F4\u7684\u4E2D\u95F4\u6863\uFF0C\u4E0D\u662F\u968F\u624B\u53D6\u7684\u6570\uFF1A\u518D\u5C0F\u70B9\u51FB\u533A\u57DF\u5C31\u4E0D\u591F\u4E86\u3002 */
.im-btn-xs { height: 24px; padding: 0 8px; font-size: 11px; }
/* \u5371\u9669\u4FEE\u9970\uFF1A\u6587\u5B57\u4E0E\u6D9F\u6F2A\u540C\u4E3A\u7EA2\u8272\uFF0C\u914D\u5408 ghost \u4F7F\u7528 */
.im-btn-danger { color: var(--im-danger); --im-btn-fill: var(--im-danger); }

.im-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* \u539F\u7248 .btn-icon--sm \u58F0\u660E 30\xD730 / \u5706\u89D2 8\uFF0C\u4F46\u771F\u673A\u5B9E\u6D4B\u5706\u89D2\u662F **10**\uFF1A
     .btn-ghost { border-radius: 10px } \u5199\u5728\u672A\u5206\u5C42\u89C4\u5219\u91CC\uFF0C\u538B\u8FC7\u4E86 @layer \u91CC\u7684
     btn-icon--sm\u3002\u4E24\u5904\u53E0\u7528\u65F6\u7684\u5B9E\u9645\u503C\u4EE5\u5B9E\u6D4B\u4E3A\u51C6\u3002
     \u5C3A\u5BF8\u53D6\u7D27\u51D1\u6863\uFF0828\xD728\uFF09\uFF1A\u5B83\u540C\u65F6\u5E26 .im-btn-ghost\uFF0C\u800C\u90A3\u6761\u57FA\u7840\u89C4\u5219\u73B0\u5728\u628A\u9AD8\u5EA6
     \u9489\u5728\u8868\u5355\u6863 38 \u2014\u2014 \u4E0D\u5728\u8FD9\u91CC\u663E\u5F0F\u8986\u76D6\uFF0C\u56FE\u6807\u6309\u94AE\u4F1A\u6BD4\u540C\u4E00\u680F\u7684\u6587\u5B57\u6309\u94AE\u9AD8\u4E00\u5708\u3002 */
  width: var(--im-h-ctl);
  min-width: var(--im-h-ctl);
  height: var(--im-h-ctl);
  min-height: var(--im-h-ctl);
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
  /* \u4E0E\u9876\u680F\u90A3\u6392\u6309\u94AE\u540C\u9AD8\uFF08\u7D27\u51D1\u6863\uFF09\u3002\u5199 22 \u65F6\u5B83\u5939\u5728 28 \u9AD8\u7684\u6309\u94AE\u4E2D\u95F4\u77EE\u4E00\u622A\uFF0C
     \u800C\u5B83\u672C\u6765\u662F\u300C\u4E00\u773C\u626B\u5230\u82B1\u9500\u300D\u7684\u4E1C\u897F\uFF0C\u77EE\u4E0B\u53BB\u53CD\u800C\u4E0D\u663E\u773C\u3002 */
  height: var(--im-h-ctl);
  padding: 0 10px;
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

/* ---------------- \u63A7\u4EF6\u9762\uFF1A\u8F93\u5165\u6846\u4E0E\u4E0B\u62C9\u89E6\u53D1\u5668 ----------------
 *
 * **\u4E24\u8005\u5171\u7528\u4E00\u7EC4\u58F0\u660E**\uFF0C\u8FD9\u662F\u7167\u4E0A\u6E38\u7684\u7ED3\u6784\u6765\u7684\uFF1A\u4E0A\u6E38 Select \u7684\u89E6\u53D1\u5668\u662F
 * \u300CclassName="field-control select-trigger \u2026"\u300D \u2014\u2014 \u5B83\u540C\u65F6\u5E26\u8F93\u5165\u63A7\u4EF6\u7684\u7C7B\uFF0C\u6240\u4EE5\u9AD8\u5EA6\u3001
 * \u5DE6\u53F3\u5185\u8FB9\u8DDD\u3001\u8FB9\u6846\u3001\u5706\u89D2\u3001\u5E95\u8272\u3001\u5B57\u53F7\u3001\u805A\u7126\u73AF**\u5929\u751F\u540C\u6E90**\uFF0C\u4E0D\u5B58\u5728\u300C\u5404\u5199\u4E00\u4EFD\u7136\u540E\u5BF9\u4E0D\u9F50\u300D\u3002
 *
 * \u63D2\u4EF6\u6B64\u524D\u628A \u300C.im-select-trigger\u300D \u5199\u6210\u72EC\u7ACB\u7C7B\u3001\u81EA\u5DF1\u7ED9 \u300Cpadding: 0 10px\u300D\uFF0C\u800C \u300C.im-field\u300D
 * \u662F 20px \u2014\u2014 \u540C\u4E00\u884C\u91CC\u8F93\u5165\u6846\u7684\u5B57\u4ECE 20px \u8D77\u3001\u4E0B\u62C9\u7684\u5B57\u4ECE 10px \u8D77\uFF0C\u7EF4\u62A4\u8005\u4E00\u773C\u770B\u51FA\u7684
 * \u300C\u5DE6\u8FB9\u8DDD\u6CA1\u7EDF\u4E00\u300D\u5C31\u662F\u8FD9\u4E2A\u3002\u73B0\u5728\u6539\u6210\u4E00\u4E2A\u89C4\u5219\u5757\uFF0C\u4EE5\u540E\u8981\u8C03\u5185\u8FB9\u8DDD\u53EA\u6539\u8FD9\u4E00\u5904\u3002
 *
 * transition \u53EA\u542B border/box-shadow\uFF1A\u542B\u5C3A\u5BF8\u4F1A\u8BA9 textarea \u62D6\u62FD resize \u5361\u987F\u3002 */
.im-field,
.im-select-trigger {
  width: 100%;
  height: var(--im-h-field);
  /* 20px \u5BF9\u9F50\u4E0A\u6E38 .field-control \u7684 px-5\uFF1B\u7D27\u51D1\u6863\uFF08\u9876\u680F / \u8282\u70B9\u5361 / \u5386\u53F2\u4E24\u6761\u5E26\u5B50\uFF09
     \u5728\u5404\u81EA\u5BB9\u5668\u4E0A\u8986\u5199\u6210 10px\uFF0C\u4E0E\u4E0A\u6E38 .compact-controls \u7684 padding-inline: 10px \u540C\u503C\u3002 */
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid var(--im-line-strong);
  /* \u539F\u7248 .field-control = rounded-lg\uFF088px\uFF09\uFF0C\u4E0D\u662F --r-control(10) */
  border-radius: var(--im-r-sm);
  background: var(--im-surface);
  color: var(--im-ink);
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.im-field {
  line-height: 1.6;
  resize: vertical;
}
/* textarea \u4E0D\u53D7\u9AD8\u5EA6 token \u7EA6\u675F\uFF1A\u5B83\u8981\u8DDF\u7740\u5185\u5BB9\u957F\u3001\u8FD8\u8981\u80FD\u62D6\u53F3\u4E0B\u89D2\u62C9\u9AD8\u3002
   min-height \u7528\u8868\u5355\u6863\u515C\u4F4F\u300C\u7A7A\u7740\u65F6\u53EA\u5269\u4E00\u6761\u7EBF\u300D\u3002 */
textarea.im-field {
  height: auto;
  min-height: var(--im-h-field);
  padding: 8px 20px;
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
  /* \u9AD8\u5EA6\u8D70\u8868\u5355\u6863\uFF1A\u5B83\u65C1\u8FB9\u5C31\u662F\u9884\u8BBE chip \u4E0E\u300C\u786E\u8BA4\u5207\u5206\u300D\u6309\u94AE\uFF0C\u81EA\u5DF1\u7528 padding \u6491\u4F1A
     \u591A\u51FA\u7B2C\u56DB\u79CD\u9AD8\u5EA6\uFF08\u5B9E\u6D4B\u662F 36.4px\uFF09\u3002 */
  height: var(--im-h-field);
  padding: 0 8px;
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
/* \u8868\u5355\u884C\u91CC\u7684\u52A8\u4F5C\u6309\u94AE\uFF08\u9009\u62E9\u2026 / \u6D4B\u8BD5\u8FDE\u901A / \u6253\u5F00 / \u65E5\u9884\u7B97\u5728\u54EA\u8BBE\uFF09\uFF1A\u63D0\u5230\u8868\u5355\u6863\uFF0C
 * \u4E0E\u540C\u884C\u8F93\u5165\u6846\u7B49\u9AD8\u3002\u5426\u5219\u4F1A\u51FA\u73B0\u622A\u56FE\u91CC\u90A3\u79CD\u300C\u8F93\u5165\u6846\u5F88\u9AD8\u3001\u65C1\u8FB9\u6309\u94AE\u4E00\u622A\u300D\u3002
 * \u5224\u636E\u6302\u5728\u5BB9\u5668\u4E0A\u800C\u4E0D\u662F\u8BA9\u6BCF\u4E2A\u8C03\u7528\u70B9\u5199\u5185\u8054 style \u2014\u2014 \u4E00\u5904\u7EF4\u62A4\u3002 */
.im-field-control > .im-btn-ghost,
.im-field-control > .im-btn-primary {
  height: var(--im-h-field);
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

/* \u89E6\u53D1\u5668\uFF1A\u5916\u5F62**\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A\u5171\u7528\u89C4\u5219\u5757**\uFF08\u4E0E .im-field \u540C\u6E90\uFF1A\u7B49\u9AD8\u3001\u540C\u5185\u8FB9\u8DDD\u3001
 * \u540C\u8FB9\u6846\u3001\u540C\u5706\u89D2\u3001\u540C\u5E95\u8272\u3001\u540C\u5B57\u53F7\u3001\u540C\u805A\u7126\u73AF\uFF09\u3002\u8FD9\u91CC\u53EA\u8865\u5B83\u72EC\u6709\u7684\u4E09\u4EF6\u4E8B\uFF1A
 * \u6A2A\u5411\u6392\u5E03\u3001\u5149\u6807\u3001\u6587\u5B57\u5BF9\u9F50\u3002
 *
 * \u26A0\uFE0F \u4E0D\u8BB8\u5728\u8FD9\u91CC\u91CD\u5199 height / padding / font-size \u2014\u2014 \u4E00\u65E6\u91CD\u5199\u5C31\u53C8\u53D8\u6210\u300C\u4E24\u4EFD\u503C\u300D\uFF0C
 * \u90A3\u6B63\u662F\u7EF4\u62A4\u8005\u770B\u5230\u7684\u300C\u4E0B\u62C9\u548C\u8F93\u5165\u6846\u5DE6\u8FB9\u8DDD\u4E0D\u4E00\u6837\u300D\u3002\u7D27\u51D1\u573A\u666F\u5728\u5BB9\u5668\u4E0A\u8986\u5199
 * \uFF08\u89C1 .im-canvas .im-select-trigger \u4E0E .im-history-bar \u90A3\u4E24\u6761\uFF09\u3002 */
.im-select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  text-align: left;
  cursor: pointer;
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
  /* \u7D27\u51D1\u6863 + \u4E0E\u5176\u5B83\u63A7\u4EF6\u540C\u4E00\u4E2A\u5DE6\u53F3\u5185\u8FB9\u8DDD\u3002\u539F\u5148\u662F 30 / 9px \u2014\u2014 \u4E24\u4E2A\u90FD\u662F\u9636\u68AF\u5916\u7684\u624B\u5199\u503C\uFF0C
     \u4E8E\u662F\u4E0B\u62C9\u5C55\u5F00\u540E\u6D6E\u5C42\u91CC\u7684\u8F93\u5165\u6846\u4E0E\u753B\u5E03\u4E0A\u7684\u63A7\u4EF6\u53C8\u4E0D\u662F\u4E00\u4E2A\u9AD8\u5EA6\u3002 */
  height: var(--im-h-ctl);
  padding: 0 10px;
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
  /* \u753B\u5E03\u5185\u7684\u4E0B\u62C9\uFF08\u8282\u70B9\u5361\u91CC\u7684\u5C3A\u5BF8/\u8D28\u91CF\u3001\u9876\u680F\u90A3\u4E24\u4E2A\uFF09\u53D6\u7D27\u51D1\u6863\u3002
     \u4E0E\u540C\u5BB9\u5668\u7684 .im-field \u7528\u540C\u4E00\u7EC4\u5185\u8FB9\u8DDD\uFF08\u89C1\u4E0B\u4E00\u6761\u6CE8\u91CA\uFF09\uFF0C\u5426\u5219\u540C\u4E00\u5F20\u5361\u91CC
     \u8F93\u5165\u6846\u7684\u5B57\u4E0E\u4E0B\u62C9\u7684\u5B57\u53C8\u662F\u4E24\u4E2A\u8D77\u70B9\u3002 */
  height: var(--im-h-ctl);
  padding: 0 10px;
  font-size: 12px;
}

/* \u9876\u680F\u90A3\u4E24\u4E2A\u4E0B\u62C9\uFF08\u6765\u6E90 / \u6A21\u578B\uFF09\uFF1A**\u7D27\u51D1\u6863**\u3002
 *
 * \u57FA\u7840\u89C4\u5219\u7ED9\u7684\u662F\u8868\u5355\u6863\uFF0838 / 20px\uFF0C\u4E0E\u8F93\u5165\u6846\u540C\u6E90\uFF09\uFF0C\u800C\u9876\u680F\u662F 28 \u9AD8\u7684\u4E00\u6392\uFF0C
 * \u6240\u4EE5\u8FD9\u91CC\u8986\u5199\u6210\u7D27\u51D1\u6863 \u2014\u2014 \u4E0E\u4E0A\u6E38 .compact-controls \u7684
 * \u300Cheight: var(--row-h); padding-inline: 10px; font-size: 12px\u300D \u540C\u4E00\u7EC4\u503C\u3002 */
.im-select-profile .im-select-trigger,
.im-select-model .im-select-trigger {
  height: var(--im-h-ctl);
  padding: 0 10px;
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

/* \u8282\u70B9\u5185\u7684\u8F93\u5165/\u4E0B\u62C9\u7528\u7D27\u51D1\u6863\uFF1A\u5B57\u53F7\u538B\u5230 12px\u3001\u5185\u8FB9\u8DDD\u6536\u5230 10px\uFF08\u4E0E\u540C\u5361\u5185\u7684\u4E0B\u62C9\u540C\u4E00\u7EC4\u503C\uFF09\u3002
 * \u539F\u7248\u8282\u70B9\u91CC\u7684 textarea \u5B9E\u6D4B\u662F padding: 8px 20px \u2014\u2014 \u90A3\u662F**\u591A\u884C**\u63A7\u4EF6\uFF0C\u5DE6\u53F3\u7559\u767D\u66F4\u5BBD
 * \u624D\u4E0D\u663E\u5F97\u5B57\u8D34\u8FB9\uFF1B\u5355\u884C\u7684\u8F93\u5165\u6846\u4E0E\u4E0B\u62C9\u5728\u5361\u91CC\u53EA\u6709\u4E00\u884C\u7684\u5BBD\u5EA6\uFF0C20px \u4F1A\u628A
 * \u300C1024x1024 (1:1)\u300D\u8FD9\u7C7B\u6807\u7B7E\u6324\u6210\u7701\u7565\u53F7\uFF08\u4E0A\u6E38 index.css \u91CC\u4E3A\u6B64\u4E13\u95E8\u5199\u8FC7\u4E00\u6BB5\uFF09\u3002 */
.im-field--compact,
.im-canvas .im-field {
  height: var(--im-h-ctl);
  padding: 0 10px;
  font-size: 12px;
}
.im-canvas textarea.im-field {
  height: auto;
  min-height: 64px;
  padding: 8px 16px;
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
  /* \u5185\u8FB9\u8DDD\u4E5F\u8981\u4E00\u8D77\u6536\uFF1A\u53EA\u7EDF\u4E00\u9AD8\u5EA6\u7684\u8BDD\uFF0C\u8F93\u5165\u6846\u7684\u5B57\u4ECE 20px \u8D77\u3001\u4E0B\u62C9\u7684\u5B57\u4ECE 10px \u8D77\uFF0C
     \u540C\u4E00\u884C\u91CC\u5DE6\u7AEF\u8FD8\u662F\u53C2\u5DEE\uFF08\u4E0A\u6E38 .compact-controls \u5C31\u662F\u8FD9\u4E48\u5199\u7684\uFF1A
     height + padding-block: 0 + padding-inline: 10px + font-size 12px \u56DB\u4EF6\u4E00\u8D77\uFF09\u3002 */
  padding-block: 0;
  padding-inline: 10px;
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
  /* \u5BBD\u5EA6\u8865\u507F\u5230 88px\uFF1A\u5185\u8FB9\u8DDD\u4ECE 6 \u63D0\u5230\u6574\u884C\u7EDF\u4E00\u7684 10\uFF0C\u4E0D\u8865\u5BBD\u5EA6\u6570\u5B57\u4F1A\u88AB\u6324\u3002
     \u5185\u8FB9\u8DDD\u5FC5\u987B\u4E0E\u540C\u884C\u5176\u5B83\u63A7\u4EF6\u4E00\u81F4\uFF0C\u5426\u5219\u8FD9\u4E00\u884C\u7684\u5B57\u53C8\u4ECE\u4E24\u4E2A\u8D77\u70B9\u5F00\u59CB\u3002 */
  width: 88px;
  padding-inline: 10px;
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
  /* \u53D6\u7D27\u51D1\u6863\uFF0C\u4E0D\u518D\u5355\u5199 30\uFF1A\u6574\u6761\u9636\u68AF\u53EA\u6709 28 / 38 \u4E24\u6863\u63A7\u4EF6\u9AD8\u5EA6\uFF0C
     \u591A\u4E00\u4E2A 30 \u5C31\u662F\u300C\u770B\u8D77\u6765\u90FD\u5DEE\u4E0D\u591A\u3001\u4F46\u5C31\u662F\u5BF9\u4E0D\u9F50\u300D\u7684\u6765\u6E90\u3002 */
  height: var(--im-h-ctl);
  min-height: var(--im-h-ctl);
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
`;var yp=require("react"),We=require("react/jsx-runtime"),Kn=class extends yp.Component{state={error:null};static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[dsh-imagora-desk] \u6E32\u67D3\u51FA\u9519",t,n.componentStack),this.props.onError?.(t,n)}reset=()=>this.setState({error:null});render(){return this.state.error?this.props.fallback(this.state.error,this.reset):this.props.children}};function xp(e){let t=String(e?.message??e??"\u672A\u77E5\u9519\u8BEF").split(`
`)[0]??"";return t.length>140?`${t.slice(0,140)}\u2026`:t}function jr({nodeId:e,children:t}){return(0,We.jsx)(Kn,{fallback:(n,o)=>(0,We.jsxs)("div",{className:"im-node-error","data-node-id":e,title:String(n?.stack??n),children:[(0,We.jsx)("div",{className:"im-node-error-title",children:"\u8FD9\u5F20\u5361\u51FA\u9519\u4E86"}),(0,We.jsx)("p",{className:"im-node-error-msg",children:xp(n)}),(0,We.jsx)("p",{className:"im-node-error-hint",children:"\u9009\u4E2D\u5B83\u6309 Delete \u5220\u6389\u5373\u53EF\uFF0C\u5176\u4F59\u5361\u7247\u4E0D\u53D7\u5F71\u54CD"}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs nodrag",onClick:o,children:"\u91CD\u8BD5"})]}),children:t})}function Qr({children:e,onCrash:t,onClear:n}){return(0,We.jsx)(Kn,{onError:o=>t?.(o),fallback:(o,r)=>(0,We.jsxs)("div",{className:"im-canvas-error",role:"alert",children:[(0,We.jsx)("h3",{className:"im-canvas-error-title",children:"\u753B\u5E03\u6E32\u67D3\u51FA\u9519"}),(0,We.jsx)("p",{className:"im-canvas-error-msg",children:xp(o)}),(0,We.jsx)("p",{className:"im-canvas-error-hint",children:"\u4F60\u7684\u5DE5\u4F5C\u6D41\u6587\u4EF6\u8FD8\u5728\u78C1\u76D8\u4E0A\uFF0C\u6CA1\u6709\u4E22\u3002\u53EF\u4EE5\u5148\u91CD\u8BD5\uFF1B\u5982\u679C\u8FD8\u662F\u4E0D\u884C\uFF0C\u6E05\u7A7A\u753B\u5E03\u518D\u4ECE \u5DE5\u4F5C\u6D41\u91CC\u91CD\u65B0\u52A0\u8F7D\u3002"}),(0,We.jsxs)("div",{className:"im-canvas-error-actions",children:[(0,We.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",onClick:r,children:"\u91CD\u8BD5"}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>{n(),r()},children:"\u6E05\u7A7A\u753B\u5E03"})]})]}),children:e})}var cs=require("react/jsx-runtime");function ls(e){function t(n){return(0,cs.jsx)(jr,{nodeId:n?.id,children:(0,cs.jsx)(e,{...n})})}return t.displayName=`Bounded(${e.displayName||e.name||"Node"})`,t}var wp={image:ls(fp),prompt:ls(hp),group:ls(gp)};var Jr=Math.round(5),vp=Math.round(200);function Iv(e){return Number.isNaN(e)?Jr:e===Number.POSITIVE_INFINITY?vp:e===Number.NEGATIVE_INFINITY?Jr:Math.min(vp,Math.max(Jr,Math.round(e)))}function kp(e){return Number.isNaN(e)||e<=0?Jr:Iv(e*100)}var us=.15,Pv=.2;function Sp(e,t){return!e&&t<us?!0:e&&t>Pv?!1:e}var vn=require("react/jsx-runtime"),zv="0 0 1024 1024",Rv="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function ds({size:e=30,fill:t="var(--im-brand)"}){return(0,vn.jsx)("svg",{width:e,height:e,viewBox:zv,fill:t,"aria-hidden":"true",children:(0,vn.jsx)("path",{d:Rv})})}function Cp({onClick:e}){return(0,vn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,vn.jsx)(ds,{}),(0,vn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var Np=require("react"),kn=require("react/jsx-runtime");function Dv(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function Mp(e){return(0,Np.useMemo)(()=>Dv(e),[e])}function Ep({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,kn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,kn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,kn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,kn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,kn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Ie=require("react/jsx-runtime");function _p(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=xe(),u=(l,d,c)=>(0,Ie.jsx)("button",{type:"button",className:`${c.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:c.title,disabled:c.disabled,onClick:d,children:l});return(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsxs)("div",{className:"im-header",children:[(0,Ie.jsx)(Cp,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Ie.jsx)(ft,{className:"im-select-profile",options:[...(t.profiles??[]).map(l=>({value:l.name,label:l.label})),{value:"",label:s("toolbar.profile.follow")}],value:t.profile,title:s("toolbar.profile.title"),onChange:l=>e.onSwitchProfile(l)}):null,t&&(t.models?.length??0)>1?(0,Ie.jsx)(ft,{className:"im-select-model",options:t.models.map(l=>({value:l.id,label:l.label})),value:t.model,title:s("toolbar.model.title",{profile:t.profileLabel||t.profile}),onChange:l=>e.onSwitchModel(l)}):null,(0,Ie.jsx)(Ep,{summary:e.cost,budget:t?.budget??0}),(0,Ie.jsx)("span",{className:"im-spacer"}),u(s("toolbar.settings"),e.onOpenSettings,{title:s("toolbar.settings.title")})]}),(0,Ie.jsxs)("div",{className:"im-toolbar",children:[(0,Ie.jsxs)("div",{className:"im-toolbar-group",children:[u(s("toolbar.upload"),e.onPickFiles,{title:s("toolbar.upload.title"),primary:!0}),u(s("toolbar.paste"),e.onPasteImport,{title:s("toolbar.paste.title")}),(0,Ie.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:s("toolbar.newPrompt.title"),draggable:!0,onDragStart:l=>e.onDragCreateNode(l,"prompt"),onClick:e.onAddPrompt,children:[s("toolbar.newPrompt"),(0,Ie.jsx)("span",{className:"im-drag-grip",children:(0,Ie.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,Ie.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:s("toolbar.newGroup.title"),draggable:!0,onDragStart:l=>e.onDragCreateNode(l,"group"),onClick:e.onAddGroup,children:[s("toolbar.newGroup"),(0,Ie.jsx)("span",{className:"im-drag-grip",children:(0,Ie.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,Ie.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[u(s("toolbar.save"),e.onOpenSave,{title:s("toolbar.save.title")}),u(s("toolbar.load"),e.onOpenLoad,{title:s("toolbar.load.title")}),u(s("toolbar.history"),e.onOpenHistory,{title:s("toolbar.history.title")}),u(s("toolbar.outputDir"),e.onOpenDefaultOutputDir,{title:s("toolbar.outputDir.title",{dir:t?.defaultOutputDir||s("common.notSet")})}),u(s("toolbar.undo"),e.onUndo,{disabled:!i,title:s("toolbar.undo.title")}),u(s("toolbar.redo"),e.onRestore,{disabled:!a,title:s("toolbar.redo.title")}),u(s("toolbar.autoConnect"),e.onAutoConnect,{title:s("toolbar.autoConnect.title")}),u(s("toolbar.runAll"),()=>e.onRun(o),{title:s("toolbar.runAll.title"),disabled:!n}),r>0?(0,Ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:s("toolbar.cancelAll.title"),onClick:e.onCancelAll,children:s("toolbar.cancelAll",{count:r})}):null]})]})]})}var Fe=require("react/jsx-runtime");function Kt({icon:e,label:t,title:n,active:o,onClick:r}){return(0,Fe.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,Fe.jsx)(ze,{name:e,size:14}),(0,Fe.jsx)("span",{className:"im-dock-row-label",children:t})]})}function Ip(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,Fe.jsxs)("div",{className:"im-dock nodrag",children:[(0,Fe.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,Fe.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[kp(t),"%"]})}),(0,Fe.jsx)(Kt,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,Fe.jsx)(Kt,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,Fe.jsx)(Kt,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,Fe.jsx)(Kt,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,Fe.jsx)(Kt,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,Fe.jsx)(Kt,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,Fe.jsx)(Kt,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,Fe.jsx)(Kt,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Ve=require("react"),Tp=require("react-dom");var ps="application/x-dsh-imagora-canvas",ei={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},Pp="\u677E\u5F00\u53D6\u6D88";function ms(e){return e.dataTransfer?.types.includes("Files")??!1}function Mo(e,t){if(ms(e))return"images";let n=e.dataTransfer?.getData(ps);return n==="prompt"||n==="group"?n:t}function zp(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Rp(e){return Array.from(e?.files??[]).filter(Or)}function Dp(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":ei[e]}function fs(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var $t=require("react/jsx-runtime"),Tv=22,Av=28,ti=8;function Ap(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a,onRejectFiles:s}=e,[u,l]=(0,Ve.useState)(null),d=(0,Ve.useRef)(null),c=(0,Ve.useRef)(0),p=(0,Ve.useRef)(null),m=(0,Ve.useRef)(null),h=(0,Ve.useRef)(null),g=(0,Ve.useCallback)((k,N)=>{d.current=k,l(k);let M=h.current;M&&M.textContent!==N&&(M.textContent=N)},[]),y=(0,Ve.useCallback)(()=>{d.current=null,c.current=0,l(null),m.current?.classList.remove("is-outside")},[]),b=(0,Ve.useCallback)((k,N)=>{let M=p.current;if(!M)return;let E=Math.min(k+Tv,window.innerWidth-M.offsetWidth-ti),L=Math.min(N+Av,window.innerHeight-M.offsetHeight-ti);M.style.transform=`translate(${Math.max(ti,E)}px, ${Math.max(ti,L)}px)`},[]),w=(0,Ve.useCallback)((k,N,M)=>{let E=t.current;if(!E)return o();let L=E.getBoundingClientRect(),R=M?Math.min(Math.max(k,L.left),L.left+L.width):k,B=M?Math.min(Math.max(N,L.top),L.top+L.height):N;return r({x:R,y:B})},[t,o,r]);(0,Ve.useEffect)(()=>{let k=E=>{ms(E)&&E.preventDefault()},N=E=>{let L=d.current;if(!L||L==="images")return;b(E.clientX,E.clientY);let R=t.current,B=!!(R&&fs(E.clientX,E.clientY,R.getBoundingClientRect())),D=B?ei[L]:Pp,x=h.current;x&&x.textContent!==D&&(x.textContent=D),m.current?.classList.toggle("is-outside",!B)},M=()=>{c.current=0,y()};return window.addEventListener("dragover",k),window.addEventListener("dragover",N),window.addEventListener("drop",k),window.addEventListener("dragend",M),window.addEventListener("blur",M),()=>{window.removeEventListener("dragover",k),window.removeEventListener("dragover",N),window.removeEventListener("drop",k),window.removeEventListener("dragend",M),window.removeEventListener("blur",M)}},[t,y,b]);let f={onDragEnter:k=>{if(n)return;let N=Mo(k,d.current);N&&(k.preventDefault(),N==="images"&&(c.current+=1),g(N,Dp(N,zp(k.dataTransfer))),b(k.clientX,k.clientY))},onDragOver:k=>{n||!Mo(k,d.current)||(k.preventDefault(),k.dataTransfer.dropEffect="copy",b(k.clientX,k.clientY))},onDragLeave:k=>{n||Mo(k,d.current)==="images"&&(c.current-=1,c.current<=0&&y())},onDrop:k=>{if(n)return;let N=Mo(k,d.current);if(!N)return;k.preventDefault();let M=t.current,E=!M||fs(k.clientX,k.clientY,M.getBoundingClientRect());if(y(),N==="images"){let L=Rp(k.dataTransfer);if(!L.length){s();return}i(L,w(k.clientX,k.clientY,!0));return}E&&a(N,w(k.clientX,k.clientY,!1))}},v=(0,Ve.useCallback)((k,N)=>{k.dataTransfer.setData(ps,N),k.dataTransfer.effectAllowed="copy",g(N,ei[N]),b(k.clientX,k.clientY)},[b,g]),S=(0,Tp.createPortal)((0,$t.jsx)("div",{ref:p,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,$t.jsxs)("div",{ref:m,className:`im-drop-chip${u?" show":""}`,children:[(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,$t.jsx)(ze,{name:u==="group"?"layers":u==="images"?"image":"plus",size:14})}),(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,$t.jsx)(ze,{name:"close",size:14})}),(0,$t.jsx)("span",{ref:h,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:u,dropChip:S,dragHandlers:f,startToolbarDrag:v,hideDropChip:y}}var Ht=require("react");var Op=2;function Lp({rootRef:e,canvasRef:t,instanceRef:n,setNodes:o,modalOpen:r}){let[i,a]=(0,Ht.useState)(null),[s,u]=(0,Ht.useState)(null),l=(0,Ht.useRef)(null),d=(0,Ht.useCallback)(()=>a(null),[]);return(0,Ht.useEffect)(()=>{if(r){l.current=null,u(null);return}let c=t.current,p=e.current;if(!c||!p)return;let m=w=>{if(w.button!==2)return;let f=n.current;if(!f)return;let v=w.target instanceof Element?w.target:null;if(v?.closest("input, textarea, [contenteditable]"))return;let S=f.screenToFlowPosition({x:w.clientX,y:w.clientY}),k=v?.closest(".react-flow__node"),N=k instanceof HTMLElement?k.dataset.id??null:null;l.current={startFlow:S,nodeId:N,clientX:w.clientX,clientY:w.clientY},u({x:S.x,y:S.y,width:0,height:0}),w.preventDefault()},h=w=>{let f=l.current,v=n.current;if(!f||!v)return;let S=v.screenToFlowPosition({x:w.clientX,y:w.clientY});u({x:Math.min(f.startFlow.x,S.x),y:Math.min(f.startFlow.y,S.y),width:Math.abs(S.x-f.startFlow.x),height:Math.abs(S.y-f.startFlow.y)})},g=w=>{let f=l.current,v=n.current;if(!f||!v)return;l.current=null;let S=v.screenToFlowPosition({x:w.clientX,y:w.clientY}),k={x:Math.min(f.startFlow.x,S.x),y:Math.min(f.startFlow.y,S.y),width:Math.abs(S.x-f.startFlow.x),height:Math.abs(S.y-f.startFlow.y)};if(u(null),k.width<Op&&k.height<Op){a(f.nodeId?{x:f.clientX,y:f.clientY,nodeId:f.nodeId}:null);return}a(null),o(N=>{let M=!1,E=N.map(L=>{let R=Be(L),B=L.position.x>=k.x&&L.position.y>=k.y&&L.position.x+R.width<=k.x+k.width&&L.position.y+R.height<=k.y+k.height;return B===!!L.selected?L:(M=!0,{...L,selected:B})});return M?E:N})},y=w=>{let f=w.target instanceof Element?w.target:null;f&&(f.closest("input, textarea, [contenteditable]")||w.preventDefault())},b=()=>{l.current&&(l.current=null,u(null))};return c.addEventListener("mousedown",m),window.addEventListener("mousemove",h),window.addEventListener("mouseup",g),p.addEventListener("contextmenu",y,!0),window.addEventListener("blur",b),()=>{c.removeEventListener("mousedown",m),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",g),p.removeEventListener("contextmenu",y,!0),window.removeEventListener("blur",b)}},[t,e,n,o,r]),{nodeMenu:i,boxRect:s,closeMenu:d,setNodeMenu:a}}var vt=require("react"),Wp=require("react-dom");function wt(e,t,n={}){let o={id:e,label:t};return n.danger&&(o.danger=!0),n.disabled&&(o.disabled=!0),{kind:"action",action:o}}var gs={kind:"separator"};function $p(e,t){let n=[];if(t.selectedCount>1&&(n.push(wt("delete-selection",`\u5220\u9664\u6240\u9009 ${t.selectedCount} \u9879`,{danger:!0})),n.push(gs)),e==="image"){let r=!t.hasUrl;n.push(wt("preview","\u9884\u89C8\u5927\u56FE",{disabled:r}),wt("crop","\u88C1\u526A",{disabled:r}),wt("upscale","\u653E\u5927",{disabled:r}),wt("split","\u5207\u5206",{disabled:r}),wt("mask","\u8499\u7248\u91CD\u7ED8",{disabled:r}),wt("replace","\u66FF\u6362\u56FE\u7247"),gs)}else e==="prompt"&&n.push(wt("run","\u8FD0\u884C"),wt("copy-prompt","\u590D\u5236\u63D0\u793A\u8BCD"),gs);let o=t.selectedCount>1?"\u4EC5\u5220\u9664\u6B64\u9879":"\u5220\u9664";return n.push(wt("delete",o,{danger:!0})),n}function hs(e,t,n,o=8){let r=Math.max(0,n.width-t.width-o),i=Math.max(0,n.height-t.height-o);return{x:Math.min(Math.max(0,e.x),r),y:Math.min(Math.max(0,e.y),i)}}function Hp(e){return e.reduce((t,n)=>t+(n.kind==="action"?28:9),0)}function Bp(e){return e==="Escape"||e==="Tab"}var ni=require("react/jsx-runtime");function Fp(){return{width:window.innerWidth,height:window.innerHeight}}function Lv(e,t,n){return hs({x:e,y:t},{width:200,height:Hp(n)},Fp())}function Vp({x:e,y:t,items:n,onPick:o,onClose:r}){let i=xe(),a=(0,vt.useRef)(null),[s,u]=(0,vt.useState)(()=>Lv(e,t,n)),[l,d]=(0,vt.useState)(null);return(0,vt.useEffect)(()=>(Ur(),()=>Yr()),[]),(0,vt.useLayoutEffect)(()=>{let c=a.current?.getBoundingClientRect().height??0;if(c<=0)return;let p=hs({x:e,y:t},{width:200,height:c},Fp());u(m=>m.x===p.x&&m.y===p.y?m:p)},[e,t]),(0,vt.useEffect)(()=>{let c=h=>{let g=h.target;g instanceof Node&&a.current?.contains(g)||r()},p=h=>{h.defaultPrevented||Bp(h.key)&&r()},m=()=>r();return document.addEventListener("pointerdown",c),document.addEventListener("keydown",p),window.addEventListener("resize",m),window.addEventListener("scroll",m,!0),()=>{document.removeEventListener("pointerdown",c),document.removeEventListener("keydown",p),window.removeEventListener("resize",m),window.removeEventListener("scroll",m,!0)}},[r]),(0,Wp.createPortal)((0,ni.jsx)("div",{ref:a,role:"menu","aria-label":i("menu.aria"),"data-testid":"node-context-menu",className:"im-select-list",style:{left:s.x,top:s.y,width:200,zIndex:72,userSelect:"none"},children:n.map((c,p)=>{if(c.kind==="separator")return(0,ni.jsx)("div",{role:"separator",className:"im-menu-separator"},`separator-${p}`);let{action:m}=c,h=m.disabled===!0;return(0,ni.jsx)("button",{type:"button",role:"menuitem","data-testid":`node-menu-${m.id}`,"aria-disabled":h?"true":void 0,className:`im-select-option${l===m.id?" is-active":""}${m.danger?" is-danger":""}${h?" is-disabled":""}`,style:{height:28,minHeight:0,paddingTop:0,paddingBottom:0},onClick:()=>{h||o(m.id)},onMouseEnter:()=>d(m.id),onMouseLeave:()=>d(null),children:m.label},m.id)})}),document.body)}var $v={"delete-selection":"menu.deleteSelection",preview:"menu.preview",crop:"menu.crop",upscale:"menu.upscale",split:"menu.split",mask:"menu.mask",replace:"menu.replace",run:"menu.run","copy-prompt":"menu.copyPrompt",delete:"menu.delete"};function Gp(e,t,n){if(e==="delete")return n(t>1?"menu.deleteOnly":"menu.delete");if(e==="delete-selection")return n("menu.deleteSelection",{count:t});let o=$v[e];return o?n(o):e}var Xp="dsh-imagora.canvas-minimap.v1";function qp(){try{let e=localStorage.getItem(Xp);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Up(e){try{localStorage.setItem(Xp,e?"1":"0")}catch{}}var jt=require("react/jsx-runtime");function Yp(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,jt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,jt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u6309\u53C2\u8003\u5173\u7CFB\u5206\u5C42\u91CD\u6392\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u63D0\u793A\u8BCD\u5361 / \u7ED3\u679C\u56FE / \u56FE\u7247\u7EC4\u4E00\u8D77\u53C2\u4E0E\uFF0C\u540C\u5C42\u6309\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,jt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var Ze=require("react/jsx-runtime");function Zp(){return(0,Ze.jsxs)("div",{className:"im-empty",children:[(0,Ze.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,Ze.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,Ze.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var Hv=5;function Kp({logs:e}){if(!e.length)return null;let t=e.slice(-Hv);return(0,Ze.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,Ze.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var Bv={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function jp({text:e}){return e?(0,Ze.jsx)("div",{style:Bv,children:e}):null}function Qp({tone:e,children:t,action:n}){return(0,Ze.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ze.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ze.jsx)(ze,{name:e==="error"?"help":"clock"})}),(0,Ze.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ze.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var Se=require("react"),im=require("react-dom");async function Wv(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function Jp(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await Wv(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function em(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var Eo=e=>Math.min(8,Math.max(.2,e));function tm(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function nm(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function om(e,t,n){return Math.round(e*nm(t,n)*100)}function rm(e,t){let n=nm(e,t);return n?Eo(1/n):1}var he=require("react/jsx-runtime"),oi=1.2,Fv=5;function ri({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,Se.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,Se.useState)(!1),[u,l]=(0,Se.useState)(null),d=(0,Se.useRef)(null),c=(0,Se.useRef)(!1),p=u?.kind==="copying",m=(0,Se.useRef)(null),[h,g]=(0,Se.useState)(null),y=(0,Se.useRef)({width:0,height:0}),b=(0,Se.useRef)(null),w=(0,Se.useRef)(null),f=(0,Se.useRef)(null),v=(0,Se.useRef)(null),S=(0,Se.useCallback)(C=>{let P=f.current;return P?{zoom:C.zoom,pan:tm(C.pan,C.zoom,y.current,{width:P.clientWidth,height:P.clientHeight})}:C},[]),k=(0,Se.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),N=(0,Se.useCallback)(()=>{let C=v.current;if(!C)return;y.current={width:C.clientWidth,height:C.clientHeight};let P={width:C.naturalWidth,height:C.naturalHeight};m.current=P,g(A=>A&&A.width===P.width&&A.height===P.height?A:P)},[]);(0,Se.useEffect)(()=>{let C=()=>N();return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[N]);let M=(0,Se.useCallback)(()=>{let C=rm(m.current,y.current);i(P=>S({zoom:C,pan:P.pan}))},[S]),E=(0,Se.useCallback)(()=>{let C=m.current,P=w.current;if(!C||!P)return;let A=P.clientWidth*.98,V=P.clientHeight*.98,G=Eo(Math.min(1,A/C.width,V/C.height));i({zoom:G,pan:{x:0,y:0}})},[]);(0,Se.useEffect)(()=>{let C=f.current;if(!C)return;let P=A=>{A.preventDefault(),A.stopPropagation();let V=C.getBoundingClientRect(),G=A.clientX-V.left-V.width/2,z=A.clientY-V.top-V.height/2;i(U=>{let Z=Eo(A.deltaY<0?U.zoom*oi:U.zoom/oi);if(Z===U.zoom)return U;let q=Z/U.zoom;return S({zoom:Z,pan:{x:G-(G-U.pan.x)*q,y:z-(z-U.pan.y)*q}})})};return C.addEventListener("wheel",P,{passive:!1}),()=>C.removeEventListener("wheel",P)},[S]),(0,Se.useEffect)(()=>{let C=P=>{P.key==="Escape"&&o()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[o]),(0,Se.useEffect)(()=>()=>{d.current&&window.clearTimeout(d.current)},[]);let L=(C,P)=>{l({kind:C,text:P}),d.current&&window.clearTimeout(d.current),d.current=C==="copying"?null:window.setTimeout(()=>l(null),1200)},R=async(C,P)=>{if(!c.current){c.current=!0,L("copying","\u590D\u5236\u4E2D\u2026");try{await C(),L("copied",P)}catch(A){L("failed",A instanceof Error?A.message:"\u590D\u5236\u5931\u8D25")}finally{c.current=!1}}},B=C=>{r.zoom<=1||(C.preventDefault(),C.stopPropagation(),C.currentTarget instanceof Element&&C.currentTarget.setPointerCapture(C.pointerId),b.current={startX:C.clientX,startY:C.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:C.target===v.current},s(!0))},D=C=>{let P=b.current;if(!P)return;let A=C.clientX-P.startX,V=C.clientY-P.startY;!P.moved&&Math.hypot(A,V)<=Fv||(P.moved=!0,i(G=>S({...G,pan:{x:P.panX+A,y:P.panY+V}})))},x=()=>{let C=b.current;b.current=null,s(!1),C&&!C.moved&&!C.onImage&&o()},_=C=>{let P=C.target instanceof Element?C.target:null;P&&(P.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},I=C=>i(P=>S({...P,zoom:Eo(P.zoom*C)}));return(0,im.createPortal)((0,he.jsxs)("div",{ref:w,className:"im-zoom-overlay",onPointerDown:_,onClick:C=>C.stopPropagation(),children:[(0,he.jsx)("div",{ref:f,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:B,onPointerMove:D,onPointerUp:x,onPointerCancel:x,onDoubleClick:C=>{C.stopPropagation(),k()},children:(0,he.jsx)("img",{ref:v,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let C=v.current;C&&(m.current={width:C.naturalWidth,height:C.naturalHeight},y.current={width:C.clientWidth,height:C.clientHeight},N())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,he.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,he.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,he.jsx)("div",{"aria-hidden":!0}),(0,he.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,he.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,he.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>I(1/oi),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9"})})}),(0,he.jsxs)("span",{className:"im-zoom-readout",title:`${h?`${h.width}\xD7${h.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[om(r.zoom,h,y.current),"%"]}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>I(oi),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:E,children:"\u9002\u5E94\u7A97\u53E3"}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:M,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:p,onClick:()=>void R(()=>Jp(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:p,onClick:()=>void R(()=>em(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,he.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),u?(0,he.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${u.kind==="failed"?" is-failed":u.kind==="copied"?" is-copied":""}`,children:u.text}):null]})})]}),document.body)}var ys=require("react");var Qt=require("react"),lm=require("react-dom");var kt=require("react/jsx-runtime"),am=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),_o=[];function sm(e){return _o[_o.length-1]===e}function Oe({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:u=!1,headerless:l=!1}){let d=`im-modal-${(0,Qt.useId)()}`,c=`${d}-title`,p=(0,Qt.useRef)(null),m=(0,Qt.useRef)(null),h=(0,Qt.useRef)(o);return h.current=o,(0,Qt.useEffect)(()=>{m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,_o.push(d);let y=p.current;(a?.current??y?.querySelector(am)??y)?.focus();let w=f=>{if(!sm(d))return;if(f.key==="Escape"){if(rp())return;f.preventDefault(),f.stopPropagation(),h.current();return}if(f.key!=="Tab"||!y)return;let v=Array.from(y.querySelectorAll(am)).filter(N=>!N.hidden&&N.getAttribute("aria-hidden")!=="true");if(!v.length){f.preventDefault(),y.focus();return}let S=v[0],k=v[v.length-1];!S||!k||(f.shiftKey&&(document.activeElement===S||!y.contains(document.activeElement))?(f.preventDefault(),k.focus()):!f.shiftKey&&document.activeElement===k&&(f.preventDefault(),S.focus()))};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0);let f=_o.lastIndexOf(d);f>=0&&_o.splice(f,1);let v=m.current;window.setTimeout(()=>v?.focus(),0)}},[a]),(0,lm.createPortal)((0,kt.jsx)("div",{className:`im-modal-shell${u?" im-modal-shell--nested":""}`,onMouseDown:y=>{s&&y.target===y.currentTarget&&sm(d)&&o()},children:(0,kt.jsxs)("section",{ref:p,role:"dialog","aria-modal":"true","aria-labelledby":c,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:y=>y.stopPropagation(),children:[l?(0,kt.jsx)("h2",{id:c,className:"visually-hidden",children:e}):(0,kt.jsxs)("header",{className:"im-modal-header",children:[(0,kt.jsx)("h2",{id:c,className:"im-modal-title",children:e}),t?(0,kt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,kt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,kt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ue=require("react/jsx-runtime");function cm({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let r=xe(),[i,a]=(0,ys.useState)(()=>r("save.defaultName",{stamp:new Date().toISOString().slice(5,16).replace("T"," ")})),[s,u]=(0,ys.useState)(null),l=i.trim(),d=e.some(m=>m.name===l),c=()=>{if(l){if(d&&s!==l){u(l);return}n(l)}},p=o?r("save.where.shared",{dir:`${o}\\output\\workflows`}):r("save.where",{dir:r("save.where.fallback")});return s?(0,ue.jsx)(Oe,{title:r("save.overwriteTitle"),subtitle:r("save.overwriteSubtitle",{name:s}),size:"sm",onClose:()=>u(null),footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>u(null),children:r("save.back")}),(0,ue.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(s),children:r("save.overwrite")})]}),children:(0,ue.jsx)("p",{className:"im-modal-note",children:r("save.overwriteWarn")})}):(0,ue.jsxs)(Oe,{title:r("save.title"),subtitle:r("save.subtitle"),size:"sm",onClose:t,footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:r("common.cancel")}),(0,ue.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!l,onClick:c,children:r("common.save")})]}),children:[(0,ue.jsx)("input",{autoFocus:!0,value:i,"aria-label":r("save.nameAria"),placeholder:r("save.namePlaceholder"),className:"im-field",onChange:m=>a(m.target.value),onKeyDown:m=>{m.key==="Enter"&&c()}}),(0,ue.jsx)("p",{className:"im-modal-note",style:{marginTop:8},children:p}),e.length?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:r("save.overwriteMore")}),(0,ue.jsx)("div",{className:"im-pick-list",children:e.map(m=>(0,ue.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>a(m.name),children:[(0,ue.jsx)("span",{className:"im-pick-name",children:m.name}),(0,ue.jsx)("span",{className:"im-pick-meta",children:m.modified})]},m.name))})]}):null]})}function um({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=xe(),i=o?r("load.where",{dir:`${o}\\output\\workflows`}):r("load.where",{dir:r("save.where.fallback")});return(0,ue.jsx)(Oe,{title:r("load.title"),subtitle:r("load.subtitle"),size:"sm",onClose:t,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:r("common.close")}),children:e.length?(0,ue.jsx)("div",{className:"im-workflow-list",children:e.map(a=>(0,ue.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(a.name),children:[(0,ue.jsx)("span",{className:"im-workflow-list__name",children:a.name}),(0,ue.jsx)("span",{className:"im-workflow-list__meta",children:new Date(a.modified).toLocaleString()})]},a.name))}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("div",{className:"im-modal-empty",children:r("load.empty")}),(0,ue.jsx)("p",{className:"im-modal-note",children:i})]})})}var Vv=[["help.rows.canvas","help.rows.canvasText"],["help.rows.node","help.rows.nodeText"],["help.rows.edge","help.rows.edgeText"],["help.rows.keys","help.rows.keysText"],["help.rows.refs","help.rows.refsText"],["help.rows.run","help.rows.runText"],["help.rows.save","help.rows.saveText"]];function dm({onClose:e,config:t}){let n=xe();return(0,ue.jsx)(Oe,{title:n("help.title"),subtitle:n("help.subtitle"),size:"md",onClose:e,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:n("common.close")}),children:(0,ue.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ue.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:Vv.map(([o,r])=>(0,ue.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,ue.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n(o)}),(0,ue.jsx)("span",{style:{lineHeight:1.6},children:n(r)})]},o))}),t?(0,ue.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:[n("help.config",{source:t.source==="plugin"?n("help.config.plugin"):t.root||n("help.config.missing"),model:t.modelLabel}),(0,ue.jsx)("br",{}),n("help.output",{dir:t.defaultOutputDir})]}):null]})})}var nt=require("react");function Ke(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function mm(e,t=.06){let n=Ke(e.width,t,1),o=Ke(e.height,t,1);return{width:n,height:o,x:Ke(e.x,0,1-n),y:Ke(e.y,0,1-o)}}function fm(e,t,n){return{...e,x:Ke(e.x+t,0,1-e.width),y:Ke(e.y+n,0,1-e.height)}}function gm(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let d=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=d,a.height*=d,a.width<.06||a.height<.06){let m=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=m,a.height*=m}a.width=Ke(a.width,.06,1),a.height=Ke(a.height,.06,1);let c=Math.min(a.width,a.height*s,1),p=Math.min(a.height,c/s,1);a.width=p*s,a.height=p}else a.width=Ke(a.width,.06,1),a.height=Ke(a.height,.06,1);return a.x=Ke(a.x,0,1-a.width),a.y=Ke(a.y,0,1-a.height),a}function hm(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ke(e.x+(e.width-r)/2,0,1-r),y:Ke(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function xs(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Gv(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function bm(e,t){let n=Gv(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function ws(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Jt(e){let t=await ws(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function ii(e,t){let n=await ws(e);if(t)return pm(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return pm(n,r,i,o,o)}async function ym(e,t){let n=await ws(e),{width:o,height:r}=xs(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?Xv(n,o,r):xm(n,n.width,n.height,o,r,t.algorithm)}function pm(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function Xv(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=wm(o,r,i,a,s,"high"),r=a,i=s}return xm(o,r,i,t,n,"high")}function xm(e,t,n,o,r,i){return wm(e,t,n,o,r,i).toDataURL("image/png")}function wm(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Re=require("react/jsx-runtime"),vm=[{label:null,ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}];function km(e,t){return e.label??t("crop.ratio.free")}var Uv=["nw","n","ne","e","se","s","sw","w"],vs={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function Sm({src:e,name:t,onClose:n,onConfirm:o}){let r=xe(),i=(0,nt.useRef)(null),[a,s]=(0,nt.useState)(null),[u,l]=(0,nt.useState)({x:.08,y:.08,width:.84,height:.84}),[d,c]=(0,nt.useState)(null),[p,m]=(0,nt.useState)(!1),[h,g]=(0,nt.useState)(null),y=(0,nt.useRef)(null);(0,nt.useEffect)(()=>{let M=!0;return Jt(e).then(E=>{M&&(s(E),l(mm({x:.06,y:.06,width:.88,height:.88})))}).catch(E=>{M&&g(r("dialog.readImageFailed",{reason:me(E)}))}),()=>{M=!1}},[e]);let b=M=>{c(M),a&&M!==null&&l(E=>hm(E,M,a))},w=(M,E)=>{M.stopPropagation(),M.target.setPointerCapture?.(M.pointerId),y.current={mode:E,startX:M.clientX,startY:M.clientY,base:u}},f=(0,nt.useCallback)(M=>{let E=y.current,L=i.current;if(!E||!L)return;let R=L.getBoundingClientRect();if(!R.width||!R.height)return;let B=(M.clientX-E.startX)/R.width,D=(M.clientY-E.startY)/R.height;l(E.mode==="move"?fm(E.base,B,D):gm(E.base,B,D,E.mode,d,a??{width:1,height:1}))},[d,a]),v=()=>{y.current=null},S=async()=>{m(!0),g(null);try{let M=await ii(e,u),E=Math.round(u.width*(a?.width??0)),L=Math.round(u.height*(a?.height??0)),R=d?km(vm.find(B=>B.ratio===d),r):null;await o(M,R?r("crop.resultName.ratio",{width:E,height:L,ratio:R}):r("crop.resultName",{width:E,height:L}))}catch(M){g(r("crop.failed",{reason:me(M)}))}finally{m(!1)}},k=a?Math.round(u.width*a.width):0,N=a?Math.round(u.height*a.height):0;return(0,Re.jsx)(Oe,{title:r("crop.title"),subtitle:r("crop.subtitle"),size:"lg",onClose:n,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)("span",{className:"im-modal-note",children:[r("crop.note",{width:k,height:N}),a?` \xB7 ${r("crop.note.original",{width:a.width,height:a.height})}`:"",a?` \xB7 ${r("crop.note.gcd",{ratio:bm(a.width,a.height)})}`:"",(0,Re.jsx)("br",{}),r("crop.note.hint",{min:Math.round(.06*100)})]}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:r("common.cancel")}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:p||!a||k<8||N<8,onClick:()=>void S(),children:r(p?"crop.busy":"crop.confirm")})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":r("crop.ratio.group"),children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:r("crop.ratio")}),vm.map(M=>{let E=M.ratio===d;return(0,Re.jsx)("button",{type:"button","aria-pressed":E,className:`im-chip im-chip--sm im-chip--action${E?" is-brand":""}`,onClick:()=>b(M.ratio),children:km(M,r)},M.label??"free")}),(0,Re.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[k," \xD7 ",N,"px"]})]}),(0,Re.jsxs)("div",{ref:i,onPointerMove:f,onPointerUp:v,onPointerCancel:v,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Re.jsx)("img",{src:e,alt:t??r("crop.alt"),style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Re.jsx)("div",{onPointerDown:M=>w(M,"move"),style:{position:"absolute",left:`${u.x*100}%`,top:`${u.y*100}%`,width:`${u.width*100}%`,height:`${u.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:Uv.map(M=>(0,Re.jsx)("span",{onPointerDown:E=>w(E,M),style:{position:"absolute",left:vs[M].left,top:vs[M].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:vs[M].cursor}},M))})]}),h?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:h}):null]})})}var Ge=require("react");function ks(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Ss(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Cs(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Ss(e)*n/2}function Cm(e,t,n=.004){if(!ks(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function Nm(e,t,n,o){if(!ks(e)||!ks(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let u=Math.ceil(s/r);if(u<=1)return[];let l=Math.min(u,2048),d=[];for(let c=1;c<l;c+=1){let p=c/l;d.push({x:e.x+(t.x-e.x)*p,y:e.y+(t.y-e.y)*p})}return d}function Yv(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function Mm(e){return!Yv(e)}var De=require("react/jsx-runtime"),ai=640;function Em({src:e,name:t,onClose:n,onConfirm:o}){let r=xe(),i=(0,Ge.useRef)(null),a=(0,Ge.useRef)(!1),[s,u]=(0,Ge.useState)(null),[l,d]=(0,Ge.useState)(null),[c,p]=(0,Ge.useState)([]),[m,h]=(0,Ge.useState)("paint"),[g,y]=(0,Ge.useState)(.08),[b,w]=(0,Ge.useState)(!1),[f,v]=(0,Ge.useState)(null);(0,Ge.useEffect)(()=>{let D=!0;Jt(e).then(_=>{D&&u(_)}).catch(_=>{D&&v(r("dialog.readImageFailed",{reason:me(_)}))});let x=new Image;return x.crossOrigin="anonymous",x.onload=()=>{D&&d(x)},x.src=e,()=>{D=!1,d(null)}},[e]);let S=(0,Ge.useMemo)(()=>s?s.width>=s.height?{width:ai,height:Math.round(s.height/s.width*ai)}:{width:Math.round(s.width/s.height*ai),height:ai}:{width:0,height:0},[s]);(0,Ge.useEffect)(()=>{let D=i.current;if(!D||!l||!S.width)return;let x=D.getContext("2d");if(!x||(D.width=S.width,D.height=S.height,x.clearRect(0,0,S.width,S.height),x.drawImage(l,0,0,S.width,S.height),!s))return;let _=Cs(g,{width:S.width,height:S.height});x.save(),x.globalAlpha=.55,x.fillStyle="#ffffff",x.strokeStyle="#ffffff",x.lineWidth=_*2,x.lineCap="round",x.lineJoin="round";for(let I of c){I.mode==="erase"?(x.globalCompositeOperation="destination-out",x.strokeStyle="#000",x.fillStyle="#000"):(x.globalCompositeOperation="source-over",x.strokeStyle="#ffffff",x.fillStyle="#ffffff");let C=I.points;if(C.length&&(x.beginPath(),x.arc(C[0].x*S.width,C[0].y*S.height,_,0,Math.PI*2),x.fill(),C.length>1)){x.beginPath(),x.moveTo(C[0].x*S.width,C[0].y*S.height);for(let P of C.slice(1))x.lineTo(P.x*S.width,P.y*S.height);x.stroke()}}x.restore()},[S,c,g,s,l]);let k=D=>{let x=i.current;if(!x)return null;let _=x.getBoundingClientRect();return!_.width||!_.height?null:{x:Math.min(1,Math.max(0,(D.clientX-_.left)/_.width)),y:Math.min(1,Math.max(0,(D.clientY-_.top)/_.height))}},N=D=>{let x=k(D);x&&(D.currentTarget.setPointerCapture?.(D.pointerId),a.current=!0,p(_=>[..._,{mode:m,size:g,points:[x]}]))},M=D=>{if(!a.current)return;let x=k(D);x&&p(_=>{let I=_[_.length-1];if(!I)return _;let C=Cm(I.points,x);return C===I.points?_:[..._.slice(0,-1),{...I,points:C}]})},E=()=>{a.current=!1},L=async()=>{if(!l||!s)throw new Error(r("mask.noBase"));let D=document.createElement("canvas");D.width=s.width,D.height=s.height;let x=D.getContext("2d");if(!x)throw new Error(r("mask.noCanvas"));x.fillStyle="#ffffff",x.fillRect(0,0,s.width,s.height);let _=Cs(g,{width:s.width,height:s.height});x.globalCompositeOperation="destination-out",x.lineWidth=_*2,x.lineCap="round",x.lineJoin="round",x.strokeStyle="#000",x.fillStyle="#000";for(let I of c){if(I.mode!=="paint")continue;let C=Nm(I.points[0],I.points[I.points.length-1],_/4,{width:s.width,height:s.height});if(C.length&&(x.beginPath(),x.arc(C[0].x*s.width,C[0].y*s.height,_,0,Math.PI*2),x.fill(),C.length>1)){x.beginPath(),x.moveTo(C[0].x*s.width,C[0].y*s.height);for(let P of C.slice(1))x.lineTo(P.x*s.width,P.y*s.height);x.stroke()}}return D.toDataURL("image/png")},R=async()=>{w(!0),v(null);try{let D=await L();await o(D,r("mask.resultName"))}catch(D){v(r("mask.failed",{reason:me(D)}))}finally{w(!1)}},B=Mm(c);return(0,De.jsx)(Oe,{title:r("mask.title"),subtitle:r("mask.subtitle"),size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:r("common.cancel")}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:b||B,onClick:()=>void R(),children:r(b?"mask.busy":"mask.confirm")})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",key:"mask.mode.paint"},{mode:"erase",key:"mask.mode.erase"}].map(D=>(0,De.jsx)("button",{type:"button","aria-pressed":m===D.mode,className:`im-chip im-chip--sm im-chip--action${m===D.mode?" is-brand":""}`,onClick:()=>h(D.mode),children:r(D.key)},D.mode)),(0,De.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:[r("mask.brush"),(0,De.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(g*100),onChange:D=>y(Ss(Number(D.target.value)/100)),className:"im-range"}),(0,De.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(g*100),"%"]})]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!c.length,onClick:()=>p([]),children:r("mask.clear")}),(0,De.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:c.length?r("mask.strokes",{count:c.length}):r("mask.noStrokes")})]}),(0,De.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,De.jsx)("canvas",{ref:i,onPointerDown:N,onPointerMove:M,onPointerUp:E,onPointerCancel:E,style:{width:S.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,De.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:[r("mask.note"),t?` \xB7 ${t}`:"",s?` \xB7 ${r("mask.note.original",{width:s.width,height:s.height})}`:""]}),f?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:f}):null]})})}var ge=require("react");function si(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(2)} \u5143`}function Qv(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(1)}%`}function Jv(e){if(typeof e!="number"||!Number.isFinite(e)||e<=0)return"-";if(e<60)return`${e.toFixed(1)}s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}m${String(n).padStart(2,"0")}s`}function _m(e){return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:si(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:si(e.cost)},{label:"\u6210\u529F\u7387",value:`${Qv(e.successRate)}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:Jv(e.avgSeconds)}]}var en=require("react"),Im=require("react-dom"),Sn=require("react/jsx-runtime");function Pm({text:e}){let t=(0,en.useRef)(null),n=(0,en.useRef)(null),[o,r]=(0,en.useState)(null),[i,a]=(0,en.useState)(0),s=d=>{let c=t.current;c&&c.scrollHeight>c.clientHeight&&r(d.clientY)},u=d=>{r(c=>c!==null?d.clientY:c)},l=()=>{r(null),a(0)};return(0,en.useLayoutEffect)(()=>{if(o!==null&&n.current){let d=n.current.getBoundingClientRect();a(Math.max(8,Math.min(o+16,window.innerHeight-d.height-8)))}},[o,e]),(0,Sn.jsxs)(Sn.Fragment,{children:[(0,Sn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:u,onMouseLeave:l,children:e}),o!==null?(0,Im.createPortal)((0,Sn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var J=require("react/jsx-runtime"),zm=60;function e1(e){return e.replace(/[\\/][^\\/]+$/,"")}function Rm({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,u]=(0,ge.useState)(""),[l,d]=(0,ge.useState)(!1),[c,p]=(0,ge.useState)(0),[m,h]=(0,ge.useState)(!0),[g,y]=(0,ge.useState)(!1),[b,w]=(0,ge.useState)(""),[f,v]=(0,ge.useState)("ledger"),[S,k]=(0,ge.useState)(""),[N,M]=(0,ge.useState)(null),[E,L]=(0,ge.useState)(new Map),[R,B]=(0,ge.useState)(null),[D,x]=(0,ge.useState)({dailyLimit:"",singleRunLimit:""}),[_,I]=(0,ge.useState)(!1),[C,P]=(0,ge.useState)(""),A=(0,ge.useRef)(null),V=(0,ge.useRef)(0),G=(0,ge.useRef)([]),z=(0,ge.useRef)(i),U=(0,ge.useRef)(s);z.current=i,U.current=s;let Z=(0,ge.useCallback)(async F=>{let ie=++V.current;h(!0),w("");try{let pe=await Ga({limit:zm,offset:0,query:F?.query??z.current,status:F?.status??U.current});if(ie!==V.current)return;let Ne=Array.isArray(pe.items)?pe.items:[];v(pe.source==="ledger"?"ledger":"none"),k(typeof pe.ledgerPath=="string"?pe.ledgerPath:""),r(Ne),G.current=Ne,d(pe.hasMore===!0),p(Number(pe.total)||Ne.length)}catch(pe){ie===V.current&&w(me(pe))}finally{ie===V.current&&h(!1)}},[]),q=(0,ge.useCallback)(async()=>{if(g||!l)return;let F=V.current;y(!0);try{let ie=await Ga({limit:zm,offset:G.current.length,query:z.current,status:U.current});if(F!==V.current)return;let pe=Array.isArray(ie.items)?ie.items:[];r(Ne=>[...Ne,...pe]),G.current=[...G.current,...pe],d(ie.hasMore===!0),p(Number(ie.total)||G.current.length)}catch(ie){F===V.current&&w(me(ie))}finally{F===V.current&&y(!1)}},[l,g]);(0,ge.useEffect)(()=>{Z(),$r().then(M).catch(()=>M(null)),kd().then(F=>L(new Map((F?.images??[]).map(ie=>[ie.id,ie])))).catch(()=>L(new Map))},[Z]);let ne=(0,ge.useRef)(!1);(0,ge.useEffect)(()=>{!N?.localBudget||ne.current||x({dailyLimit:N.localBudget.dailyLimit?String(N.localBudget.dailyLimit):"0",singleRunLimit:N.localBudget.singleRunLimit?String(N.localBudget.singleRunLimit):"0"})},[N]);let W=F=>{ne.current=!0,P(""),x(ie=>({...ie,...F}))},O=async()=>{I(!0),P("");let F={dailyLimit:Math.max(0,Number(D.dailyLimit)||0),singleRunLimit:Math.max(0,Number(D.singleRunLimit)||0)};try{await Td(F);let ie=await $r();M(ie),ne.current=!1,P("\u9884\u7B97\u5DF2\u4FDD\u5B58")}catch(ie){P(`\u4FDD\u5B58\u5931\u8D25\uFF1A${me(ie)}`)}finally{I(!1)}},Y=600,re=(0,ge.useCallback)(()=>{let F=A.current;F&&F.scrollHeight-F.scrollTop-F.clientHeight<Y&&q()},[q]),se=(0,ge.useMemo)(()=>o.filter(F=>F.status==="error"&&F.inputRefMissing).length,[o]),Q=N?_m(N):[],ee=N?.bySize.slice(0,3)??[],ce=S||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Oe,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,J.jsxs)("div",{className:"im-history",children:[(0,J.jsxs)("div",{className:"im-history-bar",children:[(0,J.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,J.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:F=>a(F.target.value),onKeyDown:F=>{F.key==="Enter"&&Z()}}),(0,J.jsx)(ft,{className:"im-history-status",value:s,title:"\u6309\u72B6\u6001\u7B5B\u9009",options:[{value:"",label:"\u5168\u90E8\u72B6\u6001"},{value:"ok",label:"\u6210\u529F"},{value:"error",label:"\u5931\u8D25"}],onChange:F=>{u(F),Z({status:F})}}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void Z(),children:"\u641C\u7D22"}),(0,J.jsxs)("div",{className:"im-history-bar-end",children:[se>0?(0,J.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[se," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),Q.length?(0,J.jsxs)("div",{className:"im-history-stats",children:[(0,J.jsxs)("div",{className:"im-history-stat-row",children:[(0,J.jsx)("div",{className:"im-history-stat-grid",children:Q.map(F=>(0,J.jsxs)("div",{className:"im-history-stat",children:[(0,J.jsx)("div",{className:"im-history-stat-label",children:F.label}),(0,J.jsx)("div",{className:"im-history-stat-value",children:F.value})]},F.label))}),(0,J.jsxs)("div",{className:"im-history-budget",children:[(0,J.jsxs)("label",{className:"im-history-budget-field",children:[(0,J.jsx)("span",{className:"im-history-budget-label",children:"\u65E5\u9884\u7B97"}),(0,J.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:D.dailyLimit,title:"\u5F53\u65E5\u7D2F\u8BA1\u8D39\u7528\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4",onChange:F=>W({dailyLimit:F.target.value})})]}),(0,J.jsxs)("label",{className:"im-history-budget-field",children:[(0,J.jsx)("span",{className:"im-history-budget-label",children:"\u5355\u6B21\u4E0A\u9650"}),(0,J.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:D.singleRunLimit,title:"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650",onChange:F=>W({singleRunLimit:F.target.value})})]}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:_||m,onClick:()=>void O(),children:_?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u9884\u7B97"}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:m,onClick:()=>void $r().then(M).catch(()=>{}),children:"\u5237\u65B0"}),C?(0,J.jsx)("span",{className:"im-history-budget-tip",children:C}):null]})]}),ee.length?(0,J.jsxs)("div",{className:"im-history-sizes",children:[(0,J.jsx)("span",{className:"im-history-sizes-label",children:"\u6309\u5C3A\u5BF8"}),ee.map(F=>(0,J.jsxs)("span",{className:"im-history-sizes-row",children:[F.size," ",(0,J.jsxs)("span",{className:"im-history-sizes-label",children:["\xD7",F.count]})," \xB7 ",si(F.cost)]},F.size))]}):null]}):null,(0,J.jsxs)("div",{ref:A,className:"im-history-list",onScroll:re,"data-testid":"history-list",children:[b?(0,J.jsx)("div",{className:"im-history-error",children:b}):null,m?(0,J.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("ul",{className:"im-history-rows",children:o.map((F,ie)=>{let pe=F.assetId?E.get(F.assetId):void 0,Ne=!!pe;return(0,J.jsxs)("li",{className:"im-history-row",children:[(0,J.jsx)("div",{className:"im-history-thumb",children:F.url?(0,J.jsx)("img",{src:F.url,alt:F.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>B({url:F.url,path:F.path})}):(0,J.jsx)("span",{className:"im-history-thumb-empty",children:F.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,J.jsxs)("div",{className:"im-history-main",children:[(0,J.jsx)(Pm,{text:F.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,J.jsxs)("p",{className:"im-history-meta",children:[F.time||"-"," \xB7 ",F.quality||"-"," \xB7 ",F.size||"-"]}),F.inputRefs.length?(0,J.jsx)("div",{className:"im-history-refs",children:F.inputRefs.map(Te=>(0,J.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,J.jsx)("img",{src:Te.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>B({url:Te.url,path:Te.path})})},Te.id))}):null,F.inputRefMissing?(0,J.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,J.jsxs)("div",{className:"im-history-actions",children:[(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!F.prompt,onClick:()=>void navigator.clipboard.writeText(F.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!F.path,onClick:()=>void Wr(e1(F.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,J.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Ne,title:Ne?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{pe&&t([pe])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${F.time}-${F.output}-${ie}`)})}),(0,J.jsx)("div",{className:"im-history-pager",children:g?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":l?(0,J.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void q(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",c,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${c} \u6761\u8BB0\u5F55`})]}):f==="none"?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,J.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,J.jsx)("code",{children:ce}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,J.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),R?(0,J.jsx)(ri,{imageUrl:R.url,...R.path?{copyPath:R.path}:{},onClose:()=>B(null)}):null]})}var at=require("react");var t1=8,n1=8,Tm=[{label:"2 \xD7 2",rows:2,cols:2},{label:"2 \xD7 3",rows:2,cols:3},{label:"3 \xD7 2",rows:3,cols:2},{label:"3 \xD7 3",rows:3,cols:3},{label:"4 \xD7 4",rows:4,cols:4}];var o1=40,r1=/[\\/:*?"<>|]/g,i1="image";function Dm(e,t){let n=Math.round(e);return Number.isFinite(n)?Math.min(t,Math.max(1,n)):1}function li(e,t){return{rows:Dm(e,t1),cols:Dm(t,n1)}}function a1(e){let{rows:t,cols:n}=li(e.rows,e.cols),o=[];for(let r=0;r<t;r+=1){let i=r/t,a=r===t-1?1-i:1/t;for(let s=0;s<n;s+=1){let u=s/n,l=s===n-1?1-u:1/n;o.push({x:u,y:i,width:l,height:a})}}return o}function Am(e){let{rows:t,cols:n}=li(e.rows,e.cols);return t*n}function s1(e){let t=e.lastIndexOf(".");if(t<=0)return e;let n=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>n?e.slice(0,t):e}function l1(e){let t=e.trim(),n=Array.from(t).slice(0,o1).join("");return n.length>0?n:i1}function Om(e,t,n,o,r){let i=l1(s1(e).replace(r1,"_")),a=Number.isFinite(t)?Math.max(1,Math.round(t)):1;return`${i}-${o}x${r}-${a}.png`}async function Lm(e,t){return Promise.all(a1(t).map(n=>ii(e,n)))}var be=require("react/jsx-runtime"),c1="52vh";function $m({id:e,label:t,value:n,max:o,onChange:r}){return(0,be.jsxs)("label",{className:"im-split-axis",htmlFor:e,children:[(0,be.jsx)("span",{className:"im-split-axis-label",children:t}),(0,be.jsx)("input",{id:e,className:"im-field im-split-axis-input",inputMode:"numeric",value:n,placeholder:"1",onChange:i=>r(i.target.value),onBlur:()=>{let i=Number(n);r(String(Number.isFinite(i)?Math.min(o,Math.max(1,Math.round(i))):1))}})]})}function Hm({src:e,name:t,onClose:n,onConfirm:o}){let r=xe(),[i,a]=(0,at.useState)(null),[s,u]=(0,at.useState)("2"),[l,d]=(0,at.useState)("2"),[c,p]=(0,at.useState)(!1),[m,h]=(0,at.useState)(null);(0,at.useEffect)(()=>{let S=!0;return Jt(e).then(k=>{S&&a(k)}).catch(k=>{S&&h(r("dialog.readImageFailed",{reason:me(k)}))}),()=>{S=!1}},[e]);let g=(0,at.useMemo)(()=>li(Number(l)||1,Number(s)||1),[l,s]),y=Am(g),b=y>=2,w=(0,at.useMemo)(()=>i?{w:Math.floor(i.width/g.cols),h:Math.floor(i.height/g.rows)}:{w:0,h:0},[i,g]),f=(0,at.useMemo)(()=>{let S=(t??"image").replace(/\.[^.]+$/,"");return Array.from({length:Math.min(3,y)},(k,N)=>Om(S,N+1,y,g.rows,g.cols))},[t,y,g]),v=async()=>{if(b){p(!0),h(null);try{let S=await Lm(e,g);await o(S.map((k,N)=>({dataUrl:k,note:r("split.resultName",{index:N+1,total:S.length})})))}catch(S){h(r("split.failed",{reason:me(S)}))}finally{p(!1)}}};return(0,be.jsx)(Oe,{title:r("split.title"),subtitle:r("split.subtitle"),size:"lg",onClose:n,footer:(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("p",{className:"im-modal-note",children:i?r("split.original",{width:i.width,height:i.height}):r("split.readingOriginal")}),(0,be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:r("common.cancel")}),(0,be.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!b,onClick:()=>void v(),children:c?r("split.busy"):b?r("split.confirm",{count:y}):r("split.needTwo")})]}),children:(0,be.jsxs)("div",{className:"im-split",children:[(0,be.jsx)("div",{className:"im-split-presets",children:Tm.map(S=>(0,be.jsx)("button",{type:"button",className:`im-chip im-chip--sm im-chip--action${S.cols===g.cols&&S.rows===g.rows?" is-brand":""}`,onClick:()=>{u(String(S.cols)),d(String(S.rows))},children:S.label},S.label))}),(0,be.jsxs)("div",{className:"im-split-controls",children:[(0,be.jsx)($m,{id:"split-cols",label:r("split.cols"),value:s,max:8,onChange:u}),(0,be.jsx)($m,{id:"split-rows",label:r("split.rows"),value:l,max:8,onChange:d}),(0,be.jsx)("span",{className:"im-split-summary",children:w.w>0?r("split.summary.cell",{count:y,width:w.w,height:w.h}):r("split.summary",{count:y})})]}),(0,be.jsx)("div",{className:"im-split-stage-wrap",children:(0,be.jsxs)("div",{className:"im-split-stage",style:{width:i&&i.height>0?`min(100%, calc(${c1} * ${(i.width/i.height).toFixed(4)}))`:"100%",aspectRatio:i&&i.height>0?`${i.width} / ${i.height}`:"1 / 1",backgroundImage:`url(${e})`},children:[Array.from({length:g.cols-1},(S,k)=>(0,be.jsx)("span",{className:"im-split-line",style:{left:`${(k+1)/g.cols*100}%`,top:0,bottom:0,width:2}},`v${k}`)),Array.from({length:g.rows-1},(S,k)=>(0,be.jsx)("span",{className:"im-split-line",style:{top:`${(k+1)/g.rows*100}%`,left:0,right:0,height:2}},`h${k}`))]})}),b?(0,be.jsxs)("div",{className:"im-split-names",children:[f.map(S=>(0,be.jsx)("span",{className:"im-split-name",children:S},S)),y>f.length?(0,be.jsx)("span",{className:"im-muted",children:r("split.more",{count:y})}):null]}):(0,be.jsx)("p",{className:"im-split-note",children:r("split.tooSmall")}),(0,be.jsx)("p",{className:"im-split-note",children:r("split.note")}),m?(0,be.jsx)("p",{className:"im-split-error",role:"status",children:m}):null]})})}var St=require("react");var Pe=require("react/jsx-runtime"),Bm=[{value:"high",key:"upscale.algo.high"},{value:"bilinear",key:"upscale.algo.bilinear"},{value:"nearest",key:"upscale.algo.nearest"}],Wm=[1024,1536,2048,3072,4096];function Vm({src:e,onClose:t,onConfirm:n}){let o=xe(),[r,i]=(0,St.useState)(null),[a,s]=(0,St.useState)(2048),[u,l]=(0,St.useState)("high"),[d,c]=(0,St.useState)(!1),[p,m]=(0,St.useState)(null);(0,St.useEffect)(()=>{let w=!0;return Jt(e).then(f=>{if(!w)return;i(f);let v=Math.max(f.width,f.height),S=Wm.find(k=>k>v)??4096;s(S)}).catch(f=>{w&&m(o("dialog.readImageFailed",{reason:me(f)}))}),()=>{w=!1}},[e]);let h=(0,St.useMemo)(()=>r?xs(r.width,r.height,a):{width:0,height:0},[r,a]),g=r&&r.width>0?h.width/r.width:0,y=!!r&&h.width<r.width,b=async()=>{c(!0),m(null);try{let w=await ym(e,{targetLongEdge:a,algorithm:u}),f=o(Bm.find(v=>v.value===u).key);await n(w,o("upscale.resultName",{width:h.width,height:h.height,algorithm:f}))}catch(w){m(o("upscale.failed",{reason:me(w)}))}finally{c(!1)}};return(0,Pe.jsx)(Oe,{title:o("upscale.title"),subtitle:o("upscale.subtitle"),size:"md",onClose:t,footer:(0,Pe.jsxs)(Pe.Fragment,{children:[(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:o("common.cancel")}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!r||h.width<8||h.height<8,onClick:()=>void b(),children:o(d?"upscale.busy":"upscale.confirm")})]}),children:(0,Pe.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Pe.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Pe.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:o("upscale.longEdge")}),Wm.map(w=>(0,Pe.jsx)("button",{type:"button","aria-pressed":w===a,className:`im-btn-sm ${w===a?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>s(w),children:w},w))]}),(0,Pe.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Pe.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:o("upscale.algorithm")}),Bm.map(w=>(0,Pe.jsx)("button",{type:"button","aria-pressed":w.value===u,className:`im-btn-sm ${w.value===u?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>l(w.value),children:o(w.key)},w.value))]}),(0,Pe.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:r?(0,Pe.jsxs)(Pe.Fragment,{children:[o("upscale.original",{width:r.width,height:r.height})," \u2192 ",(0,Pe.jsxs)("b",{style:{color:y?"var(--im-warn)":"var(--im-brand)"},children:[h.width," \xD7 ",h.height]}),g?` \xB7 ${o("upscale.scale",{ratio:g.toFixed(2)})}`:"",y?` \xB7 ${o("upscale.shrink")}`:""]}):o("upscale.reading")}),(0,Pe.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:o("upscale.note")}),p?(0,Pe.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Ns=require("react/jsx-runtime"),ci=2e4;function Gm({guides:e}){return e.length?(0,Ns.jsx)(ju,{children:e.map(t=>(0,Ns.jsx)("div",{className:"snap-guide","data-axis":t.axis,"data-testid":"snap-guide",style:t.axis==="x"?{left:t.position,top:-ci/2,width:1,height:ci}:{left:-ci/2,top:t.position,width:ci,height:1}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var jn=require("react");var we=require("react/jsx-runtime");function Xm({sizes:e,onCancel:t,onConfirm:n}){let o=xe(),[r,i]=(0,jn.useState)(""),a=(0,jn.useRef)(null),s=(0,jn.useMemo)(()=>Ld(r),[r]),u=r.trim().length>0,l=s.cards,d=s.issues??[];return(0,we.jsx)(Oe,{title:o("import.title"),subtitle:o("import.subtitle"),size:"lg",onClose:t,initialFocusRef:a,footer:(0,we.jsxs)(we.Fragment,{children:[(0,we.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:o("common.cancel")}),(0,we.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!l.length||d.length>0,onClick:()=>n(l),children:o("import.confirm",{count:l.length})})]}),children:(0,we.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,we.jsx)("textarea",{ref:a,value:r,onChange:c=>i(c.target.value),rows:10,spellCheck:!1,"aria-label":o("import.aria"),className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:o("import.placeholder")}),(0,we.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:u?(0,we.jsxs)(we.Fragment,{children:[(0,we.jsxs)("div",{className:"im-import-summary",children:[(0,we.jsx)("span",{children:o("import.summary",{count:l.length})}),d.length?(0,we.jsx)("span",{className:"im-import-summary-error",children:o("import.summaryIssues",{count:d.length})}):null]}),l.map((c,p)=>{let m=Ka(c.ratio??"1:1",e);return(0,we.jsxs)("article",{className:"im-import-card",children:[(0,we.jsxs)("div",{className:"im-import-card-meta",children:[(0,we.jsx)("strong",{children:c.title||o("import.card.untitled",{index:p+1})}),(0,we.jsx)("span",{children:c.ratio?c.ratio:o("import.card.defaultRatio")}),(0,we.jsx)("span",{children:m.value}),m.fallback?(0,we.jsx)("span",{className:"im-import-card-fallback",children:o("import.card.fallback")}):null]}),(0,we.jsx)("p",{className:"im-import-card-text",title:c.prompt||"",children:c.prompt||o("import.card.empty")})]},`${p}-${c.title??""}`)}),d.map((c,p)=>(0,we.jsx)("div",{className:"im-import-issue",children:c.message},`issue-${p}`))]}):(0,we.jsx)("div",{className:"im-import-summary",children:o("import.waiting")})}),(0,we.jsx)("p",{className:"im-field-hint",children:o("import.hint",{count:e.length})})]})})}var Nn=require("react");var oe=require("react/jsx-runtime");function Cn({id:e,label:t,hint:n,action:o,children:r}){let i=`${e}-message`;return(0,oe.jsxs)("div",{className:"im-field-row",children:[(0,oe.jsx)("label",{className:"im-field-label",htmlFor:e,children:t}),(0,oe.jsxs)("div",{className:"im-field-main",children:[(0,oe.jsxs)("div",{className:"im-field-control",children:[r,o]}),n?(0,oe.jsx)("p",{className:"im-field-hint",id:i,children:n}):null]})]})}function qm({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",a=i?"plugin":e?.profile??"",s=r?.model||e?.model||"",u=Number(e?.budget??0),[l,d]=(0,Nn.useState)({source:a||"plugin",model:s,baseUrl:r?.baseUrl??"",apiKey:"",imagoraRoot:e?.imagoraRoot??"",outputDir:e?.outputDirOverride??"",budget:u?String(u):""}),[c,p]=(0,Nn.useState)(!1),[m,h]=(0,Nn.useState)(!1),[g,y]=(0,Nn.useState)(null),[b,w]=(0,Nn.useState)([]),[f,v]=(0,Nn.useState)(!1),S=z=>d(U=>({...U,...z})),k=e?.profiles??[],N=l.source==="plugin",M=N||!!r?.baseUrl,E=[{value:"plugin",label:"\u63D2\u4EF6\u5185\u914D\u7F6E"},...k.map(z=>({value:z.name,label:z.label||z.name}))],L=i&&!N,R=N?l.model?[{value:l.model,label:l.model}]:[]:(e?.models??[]).map(z=>({value:z.id,label:z.label||z.id})),B=(()=>{let z=Number(l.budget.trim());return Number.isFinite(z)&&z>0?z:0})(),D={source:l.source!==(a||"plugin"),model:l.model.trim()!==""&&l.model.trim()!==s,baseUrl:l.baseUrl.trim()!==(r?.baseUrl??""),apiKey:l.apiKey.trim()!=="",imagoraRoot:l.imagoraRoot.trim()!==(e?.imagoraRoot??""),outputDir:l.outputDir.trim()!==(e?.outputDirOverride??""),budget:B!==u},x=Object.values(D).some(Boolean),_=z=>{S({source:z,model:""})},I=async()=>{p(!0),y(null);try{let z=await Dd({baseUrl:l.baseUrl.trim(),apiKey:l.apiKey.trim()});w(z.models??[]),y(z.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${z.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(z){w([]),y(`\u8FDE\u4E0D\u901A\uFF1A${me(z)}`)}finally{p(!1)}},C=async z=>{p(!0);try{let U=await Rd({title:z==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:z==="root"?l.imagoraRoot.trim():l.outputDir.trim()||e?.defaultOutputDir||""});if(!U.ok){if(U.reason==="cancelled")return;o(U.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${U.reason||"\u672A\u77E5\u539F\u56E0"}`);return}S(z==="root"?{imagoraRoot:U.path||""}:{outputDir:U.path||""})}finally{p(!1)}},P=async()=>{p(!0);try{let z=null;!L&&!N&&D.source&&(z=await Br(l.source)),!L&&!N&&D.model&&l.model.trim()&&(z=await Hr(l.model.trim()));let U=N||!!l.baseUrl.trim()||!!l.apiKey.trim(),Z=D.baseUrl||D.apiKey||N&&l.model.trim()!==""&&D.model;U&&Z&&(z=await Ya({baseUrl:l.baseUrl.trim(),model:l.model.trim(),apiKey:l.apiKey.trim()})),D.imagoraRoot&&(z=await zd(l.imagoraRoot.trim())),D.outputDir&&(z=await Id(l.outputDir.trim())),D.budget&&(z=await Pd(B)),z&&n(z),d(q=>({...q,apiKey:"",budget:B?String(B):""})),h(!0),window.setTimeout(()=>h(!1),2e3),o("\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548")}catch(z){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${me(z)}`)}finally{p(!1)}},A=async()=>{p(!0);try{let z=await Ya({reset:!0});n(z),v(!1),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E")}catch(z){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${me(z)}`)}finally{p(!1)}},V=i?"\u63D2\u4EF6\u5185\u914D\u7F6E":e?.profileLabel||e?.profile||"\u2014",G=r?.apiKeyConfigured?"\u5BC6\u94A5\u5DF2\u914D\u7F6E":"\u5BC6\u94A5\u672A\u914D\u7F6E";return(0,oe.jsx)(Oe,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\uFF1B\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002",size:"lg",onClose:t,footer:(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)("p",{className:"im-modal-note",children:m?"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548":x?"\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8":"\u6240\u6709\u6539\u52A8\u5DF2\u4FDD\u5B58"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:t,children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!x,onClick:()=>void P(),children:c?"\u4FDD\u5B58\u4E2D\u2026":m?"\u2713 \u5DF2\u4FDD\u5B58":"\u4FDD\u5B58"})]}),children:(0,oe.jsxs)("div",{className:"im-settings",children:[(0,oe.jsxs)("p",{className:"im-settings-status",children:["\u5F53\u524D\u751F\u6548\uFF1A",(0,oe.jsx)("b",{children:V})," \xB7 ",e?.modelLabel||e?.model||"\u2014"," \xB7 ",G,L?(0,oe.jsx)("span",{className:"im-chip is-brand im-settings-chip",children:"\u88AB\u63D2\u4EF6\u5185\u914D\u7F6E\u63A5\u7BA1"}):null]}),(0,oe.jsxs)("section",{className:"im-settings-group",children:[(0,oe.jsx)("h3",{className:"im-settings-group-title",children:"\u7528\u54EA\u5957\u63A5\u53E3"}),(0,oe.jsx)(Cn,{id:"imagora-profile",label:"\u914D\u7F6E\u6765\u6E90",hint:N?"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\u3002":"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u4EF7\u76EE\u8868\u3002",children:(0,oe.jsx)(ft,{id:"imagora-profile",className:"is-block",options:E,value:l.source,searchable:"auto",onChange:_,title:"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"})}),(0,oe.jsx)(Cn,{id:"imagora-model-select",label:"\u9ED8\u8BA4\u6A21\u578B",hint:N?"\u586B\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\u3002":"\u6E05\u5355\u5916\u7684 id \u4E5F\u53EF\u4EE5\u624B\u586B\u3002",children:(0,oe.jsx)(ft,{id:"imagora-model-select",className:"is-block",options:R,value:l.model,searchable:!0,allowCustom:!0,emptyLabel:"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id",onChange:z=>S({model:z}),onCreateCustom:z=>S({model:z}),title:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare"})}),M?(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(Cn,{id:"imagora-provider-base-url",label:"\u63A5\u53E3\u5730\u5740",hint:"OpenAI \u517C\u5BB9\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002",children:(0,oe.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:l.baseUrl,placeholder:"https://api.example.com/v1",disabled:c,title:"\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90",onChange:z=>S({baseUrl:z.target.value})})}),(0,oe.jsx)(Cn,{id:"imagora-provider-api-key",label:"API Key",hint:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF1B\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\u3002":"\u53EA\u5B58\u5728\u672C\u673A settings.json\u3002",action:(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c||!l.baseUrl.trim(),onClick:()=>void I(),title:l.baseUrl.trim()?"\u53EA\u8BFB\u4E00\u6B21\u6A21\u578B\u6E05\u5355\uFF0C\u4E0D\u751F\u6210\u56FE\u3001\u4E0D\u82B1\u94B1":"\u5148\u586B\u63A5\u53E3\u5730\u5740",children:"\u6D4B\u8BD5\u8FDE\u901A"}),children:(0,oe.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:l.apiKey,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:c,onChange:z=>S({apiKey:z.target.value})})})]}):(0,oe.jsx)("p",{className:"im-settings-hint-line",children:"\u8FD9\u4E00\u680F\u7684\u5730\u5740\u4E0E\u5BC6\u94A5\u6CBF\u7528\u672C\u673A Imagora \u7684\u90A3\u4E00\u4EFD\u3002\u8981\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\uFF0C\u628A\u4E0A\u9762\u7684\u300C\u914D\u7F6E\u6765\u6E90\u300D\u6539\u6210 \u300C\u63D2\u4EF6\u5185\u914D\u7F6E\u300D\u3002"}),g?(0,oe.jsx)("p",{className:"im-field-hint im-settings-probe",role:"status",children:g}):null,b.length?(0,oe.jsxs)("div",{className:"im-settings-chips",children:[b.slice(0,24).map(z=>(0,oe.jsx)("button",{type:"button",className:`im-chip im-chip--action${z===l.model?" is-brand":""}`,onClick:()=>S({model:z}),children:z},z)),b.length>24?(0,oe.jsxs)("span",{className:"im-muted",children:["\u2026\u8FD8\u6709 ",b.length-24," \u4E2A"]}):null]}):null,i?f?(0,oe.jsxs)("div",{className:"im-settings-danger",children:[(0,oe.jsx)("p",{className:"im-settings-danger-text",children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF1F\u4E4B\u540E\u56DE\u5230\u672C\u673A Imagora \u7684\u6765\u6E90\u3002"}),(0,oe.jsxs)("div",{className:"im-settings-danger-actions",children:[(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>v(!1),children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",disabled:c,onClick:()=>void A(),children:"\u786E\u8BA4\u6E05\u7A7A"})]})]}):(0,oe.jsx)("button",{type:"button",className:"im-settings-danger-link",disabled:c,onClick:()=>v(!0),children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E"}):null]}),(0,oe.jsxs)("section",{className:"im-settings-group",children:[(0,oe.jsx)("h3",{className:"im-settings-group-title",children:"\u6587\u4EF6\u843D\u5728\u54EA"}),(0,oe.jsx)(Cn,{id:"imagora-root",label:"Imagora \u76EE\u5F55",hint:"\u6307\u5411\u540E\u5DE5\u4F5C\u6D41\u4E0E\u751F\u6210\u5386\u53F2\u76F4\u63A5\u8BFB\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002\u7559\u7A7A = \u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002",action:(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void C("root"),children:"\u9009\u62E9\u2026"}),children:(0,oe.jsx)("input",{id:"imagora-root",className:"im-field",value:l.imagoraRoot,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:c,onChange:z=>S({imagoraRoot:z.target.value})})}),(0,oe.jsx)(Cn,{id:"imagora-output-override",label:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",hint:`\u5F53\u524D\u751F\u6548\uFF1A${e?.defaultOutputDir||"\uFF08\u672A\u786E\u5B9A\uFF09"}`,action:(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void C("output"),children:"\u9009\u62E9\u2026"}),(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c||!e?.defaultOutputDir,onClick:()=>void Wr(e?.defaultOutputDir??""),children:"\u6253\u5F00"})]}),children:(0,oe.jsx)("input",{id:"imagora-output-override",className:"im-field",value:l.outputDir,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55",disabled:c,onChange:z=>S({outputDir:z.target.value})})})]}),(0,oe.jsxs)("section",{className:"im-settings-group",children:[(0,oe.jsx)("h3",{className:"im-settings-group-title",children:"\u82B1\u94B1\u4E0A\u9650"}),(0,oe.jsx)(Cn,{id:"imagora-budget",label:"\u672C\u753B\u5E03\u7D2F\u8BA1\u4E0A\u9650",hint:"\u82B1\u5230\u4E0A\u9650\u5373\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF09\u3002",action:(0,oe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>o("\u65E5\u9884\u7B97 / \u5355\u6B21\u4E0A\u9650\u5728\u300C\u751F\u6210\u5386\u53F2\u300D\u9876\u90E8\u7684\u6210\u672C\u6761\u91CC\u8BBE"),title:"\u65E5\u9884\u7B97 / \u5355\u6B21\u4E0A\u9650\u662F\u53E6\u4E00\u5C42\uFF08\u8D85\u9650\u9700\u786E\u8BA4\uFF09\uFF0C\u5728\u751F\u6210\u5386\u53F2\u7684\u6210\u672C\u6761\u91CC\u8BBE",children:"\u65E5\u9884\u7B97\u5728\u54EA\u8BBE"}),children:(0,oe.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:l.budget,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",disabled:c,onChange:z=>S({budget:z.target.value})})})]})]})})}var Qn=require("react");function Um({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i,record:a}){let s=(0,Qn.useCallback)(async(p,m)=>{let h=p.filter(Or);if(!h.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}a?.();for(let[g,y]of h.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let b=await Lr(y,y.name||`pasted-${Date.now()}.png`),w=wn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},{x:m.x+g*172,y:m.y});t(f=>[...f,w]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`)}catch(b){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${me(b)}`)}},[t,o,r,a]),u=(0,Qn.useCallback)((p,m,h)=>{let g=m?h(m):n();s(p,g)},[s,n]),l=(0,Qn.useCallback)(p=>{let m=document.createElement("input");m.type="file",m.accept="image/*",m.onchange=async()=>{let h=m.files?.[0];if(h)try{let g=await Lr(h,h.name);t(y=>y.map(b=>b.id===p&&b.type==="image"?{...b,data:{...b.data,registryId:g.id,name:g.name,url:g.url,size:g.size,ext:g.ext,absPath:g.absPath,missing:!1}}:b)),o(`\u5DF2\u66FF\u6362\u4E3A ${g.name}`)}catch(g){o(`\u66FF\u6362\u5931\u8D25\uFF1A${me(g)}`)}},m.click()},[t,o]),d=(0,Qn.useCallback)(p=>{let m=e.current.find(h=>h.id===p);!m||m.type!=="image"||!m.data.url||i({url:m.data.url,name:m.data.name,path:m.data.absPath})},[e,i]),c=(0,Qn.useCallback)(async(p,m,h)=>{let g=await fetch(p).then(v=>v.blob()),y=m.endsWith(".png")?m:`${m}.png`,b=await Lr(g,y),w=h??n(),f=wn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},w);return t(v=>[...v,f]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`),b},[t,o,n]);return{addImages:s,dropFiles:u,replaceImage:l,openPreview:d,addDataUrl:c}}function Ym(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Ct=require("react");function Zm({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let u=(0,Ct.useCallback)(async g=>{try{return await Xa(g)}catch(y){let b=y.body?.overBudget;if(!b)throw y;let w=b.reason||me(y);if(!window.confirm(`${w}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`))throw new Error(`\u5DF2\u6309\u9884\u7B97\u53D6\u6D88\uFF1A${w}`);return r(`\u8D85\u9884\u7B97\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A${w}`),await Xa({...g,allowOverBudget:!0})}},[r]),l=(0,Ct.useCallback)((g,y)=>{let w=(Array.isArray(y.results)?y.results:[]).filter(N=>N.status==="ok"&&N.assetId&&N.url),f=e.current.find(N=>N.id===g&&N.type==="prompt"),v=[];if(f&&f.type==="prompt"){let N=Be(f).height;w.forEach((M,E)=>{v.push(wn({id:String(M.assetId),relPath:M.name??"result.png",name:M.name??"result.png",url:String(M.url),size:M.bytes??0,ext:String(M.ext??"png"),absPath:M.absPath??"",createdAt:new Date().toISOString()},{x:f.position.x+E*172,y:f.position.y+N+56}))})}n(N=>{let M=new Set(N.map(R=>R.id)),E=v.filter(R=>!M.has(R.id)),L=E.length?[...N,...E]:N;return it(L,g,{status:y.status==="done"?"done":y.status==="cancelled"?"idle":"failed",resultCount:w.length,message:y.error??void 0,startedAtMs:void 0,cancelRequested:!1,taskId:void 0})}),v.length&&o(N=>{let M=v.map(E=>({id:`${g}->${E.id}`,source:g,target:E.id,animated:!0})).filter(E=>!N.some(L=>L.id===E.id));return M.length?[...N,...M]:N}),a.current.delete(g);let S=s.current.get(g);S&&window.clearTimeout(S),s.current.delete(g);let k=y.totalCost??0;k>0&&n(N=>{let M=N.find(L=>L.id===g),E=Number(M?.data?.cost??0);return it(N,g,{cost:E+k})}),r(y.status==="done"?`\u5B8C\u6210 \xB7 ${w.length} \u5F20${k?` \xB7 ${k.toFixed(2)} \u5143`:""}`:`${y.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${y.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),d=(0,Ct.useCallback)((g,y)=>{let b=async()=>{try{let w=await Cd(y);if(w.status==="queued")n(f=>it(f,g,{status:"queued"}));else if(w.status==="running")n(f=>it(f,g,{status:"running",startedAtMs:w.startedAt??Date.now(),cancelRequested:w.cancelRequested}));else{l(g,w);return}}catch(w){if(w.status===404){let f=s.current.get(g);f!==void 0&&window.clearTimeout(f),s.current.delete(g),n(v=>it(v,g,{status:"failed",message:"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF08\u5BBF\u4E3B\u91CD\u542F\u6216\u4EFB\u52A1\u8FC7\u671F\uFF09\uFF0C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF",startedAtMs:void 0,cancelRequested:!1})),r("\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF1A\u505C\u6B62\u8F6E\u8BE2");return}r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${me(w)}`)}s.current.set(g,window.setTimeout(b,1200))};b()},[l,r,n,s]),c=(0,Ct.useCallback)(async g=>{let y=e.current.find(w=>w.id===g);if(!y||y.type!=="prompt")return;if(!(y.data.prompt??"").trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let b=yd(e.current,t.current,g,y.data.prompt);if(b.mode==="invalid"){let w=b.unknown.map(f=>`@${f}`).join("\u3001");n(f=>it(f,g,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${w}`}));return}try{let w=await u({prompt:y.data.prompt,size:y.data.size,quality:y.data.quality,refIds:b.images.map(f=>f.type==="image"?f.data.registryId:"").filter(Boolean),outputDir:y.data.outputDir,spent:e.current.reduce((f,v)=>f+Number(v.data?.cost??0),0),mask:b.images.map(f=>f.type==="image"?f.data.maskDataUrl:"").find(Boolean)||""});a.current.set(g,w.taskId),n(f=>it(f,g,{status:"queued",taskId:w.taskId,startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${b.images.length} \u5F20 \xB7 ${y.data.size}`),d(g,w.taskId)}catch(w){let f=me(w);n(v=>it(v,g,{status:"failed",message:f})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${f}`)}},[e,t,n,i,r,d,a]),p=(0,Ct.useCallback)(async g=>{let y=a.current.get(g);if(n(b=>it(b,g,{cancelRequested:!0})),!!y)try{await Nd(y)}catch(b){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${me(b)}`)}},[n,r,a]),m=(0,Ct.useCallback)(g=>{for(let y of g)c(y)},[c]),h=(0,Ct.useCallback)(g=>{for(let{nodeId:y,taskId:b}of fd(g))a.current.set(y,b),d(y,b)},[a,d]);return(0,Ct.useEffect)(()=>{let g=s.current;return()=>{for(let y of g.values())window.clearTimeout(y);g.clear()}},[s]),{runPrompt:c,cancelPrompt:p,runMany:m,resumeTasks:h}}var st=require("react");function Km(e){let[t,n]=(0,st.useState)(null),[o,r]=(0,st.useState)([]),i=(0,st.useRef)(null),a=(0,st.useCallback)(d=>{let c={...d,profiles:Array.isArray(d?.profiles)?d.profiles:[],models:Array.isArray(d?.models)?d.models:[],sizes:Array.isArray(d?.sizes)?d.sizes:[],qualities:Array.isArray(d?.qualities)?d.qualities:[],issues:Array.isArray(d?.issues)?d.issues:[]};n(c),i.current=c,r(c.issues)},[]),s=(0,st.useCallback)(async()=>{try{a(await vd())}catch(d){r([me(d)])}},[a]);(0,st.useEffect)(()=>{s()},[s]);let u=(0,st.useCallback)(async d=>{try{let c=await Br(d);a(c),e(`\u5DF2\u5207\u5230 ${c.profileLabel||c.profile}`)}catch(c){e(`\u5207\u6362\u5931\u8D25\uFF1A${me(c)}`)}},[a,e]),l=(0,st.useCallback)(async d=>{try{let c=await Hr(d);a(c),e(`\u5DF2\u5207\u6362\u5230 ${c.modelLabel}`)}catch(c){e(`\u5207\u6362\u5931\u8D25\uFF1A${me(c)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:u,switchModel:l,replaceConfig:a}}var Mn=require("react");function Io(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function jm(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(Io(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(Io(r)),Io(i)):null},restore(r){let i=o.shift();return i?(n.push(Io(r)),Io(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Qm({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,Mn.useRef)(jm(50)),a=(0,Mn.useCallback)(p=>{i.current.record({nodes:e.current,edges:t.current},p)},[e,t]),s=(0,Mn.useCallback)(()=>{let p=i.current.undo({nodes:e.current,edges:t.current});if(!p){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(p.nodes),o(p.edges)},[e,t,n,o,r]),u=(0,Mn.useCallback)(()=>{let p=i.current.restore({nodes:e.current,edges:t.current});if(!p){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(p.nodes),o(p.edges)},[e,t,n,o,r]),l=(0,Mn.useCallback)(()=>i.current.clear(),[]),d=i.current.canUndo(),c=i.current.canRestore();return{record:a,undo:s,restore:u,clear:l,canUndo:d,canRestore:c}}var Jm=require("react");function u1(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function ef(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:u,onClosePreview:l,hasPreview:d}=e;(0,Jm.useEffect)(()=>{let c=p=>{if(p.key==="Escape"&&d){l();return}if(u1(p.target))return;let m=p.ctrlKey||p.metaKey,h=p.key.toLowerCase();if(m&&h==="a"){if(p.preventDefault(),!t.current.length)return;e.setNodes(y=>y.some(b=>!b.selected)?y.map(b=>({...b,selected:!0})):y);return}if(m&&h==="z"){p.preventDefault(),p.shiftKey?s():a();return}if(m&&h==="y"){p.preventDefault(),s();return}if(m&&h==="s"){p.preventDefault(),u();return}if(p.key==="Delete"&&n.length){p.preventDefault(),r(n);return}(p.key==="Delete"||p.key==="Backspace")&&o&&(p.preventDefault(),i(o))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t,n,o,r,i,a,s,u,l,d,e])}var Nt=require("react");var d1=2500;function tf({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:u,closeDialog:l,defaultsRef:d,crashedRef:c,onRestored:p}){let m=(0,Nt.useRef)(null),h=(0,Nt.useRef)(()=>{});h.current=()=>{m.current&&(window.clearTimeout(m.current),m.current=null),!c.current&&n.current.length&&Ua(n.current,o.current).catch(()=>{})},(0,Nt.useEffect)(()=>{e.length&&(m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>{m.current=null,!c.current&&Ua(n.current,o.current).catch(()=>{})},d1))},[e,t,n,o,c]),(0,Nt.useEffect)(()=>{let b=()=>{document.visibilityState==="hidden"&&h.current()},w=()=>h.current();return document.addEventListener("visibilitychange",b),window.addEventListener("pagehide",w),()=>{document.removeEventListener("visibilitychange",b),window.removeEventListener("pagehide",w),h.current()}},[]),(0,Nt.useEffect)(()=>{let b=!1;return(async()=>{let f=n.current;try{let v=await _d();if(b)return;if(!v.empty&&v.nodes?.length&&!n.current.length){let S=Fa(v.nodes,v.edges??[],[],d.current);r(S.nodes),i(S.edges),f=S.nodes,s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${v.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`),S.dropped.length&&s(`${S.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${S.dropped[0]?.reason??""}\uFF09`)}}catch{}b||p?.(f)})(),()=>{b=!0}},[r,i,s,n,p]);let g=(0,Nt.useCallback)(async b=>{try{let w=await Md(b,n.current,o.current);l(),u(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${w.name||b}\u300D`)}catch(w){u(`\u4FDD\u5B58\u5931\u8D25\uFF1A${me(w)}`)}},[n,o,l,u]),y=(0,Nt.useCallback)(async b=>{try{let w=await Ed(b),f=Fa(w.nodes,w.edges,w.missing??[],d.current);r(f.nodes),i(f.edges),l(),u(`\u5DF2\u52A0\u8F7D\u300C${w.name||b}\u300D`),f.dropped.length&&u(`${f.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${f.dropped[0]?.reason??""}\uFF09`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(w){u(`\u52A0\u8F7D\u5931\u8D25\uFF1A${me(w)}`)}},[r,i,a,l,u,d]);return{doSave:g,doLoad:y}}var de=require("react/jsx-runtime");function Ms({t:e}={}){return(0,de.jsx)(up,{translate:e,children:(0,de.jsx)(y1,{})})}function y1(){let e=xe(),[t,n,o]=Qu([]),[r,i,a]=Ju([]),[s,u]=(0,ae.useState)([]),[l,d]=(0,ae.useState)(null),[c,p]=(0,ae.useState)(null),[m,h]=(0,ae.useState)(null),[g,y]=(0,ae.useState)(1),[b,w]=(0,ae.useState)(!1),[f,v]=(0,ae.useState)(()=>qp()),[S,k]=(0,ae.useState)([]),[N,M]=(0,ae.useState)(null),[E,L]=(0,ae.useState)(()=>Yd()),[R,B]=(0,ae.useState)(!1),[D,x]=(0,ae.useState)([]),_=(0,ae.useRef)(null),I=(0,ae.useRef)(null),C=(0,ae.useRef)(null),P=(0,ae.useRef)(null),A=(0,ae.useRef)(null),V=(0,ae.useRef)(new Map),G=(0,ae.useRef)(new Map),z=(0,ae.useRef)(t),U=(0,ae.useRef)(r);z.current=t,U.current=r;let Z=(0,ae.useCallback)(T=>{u(X=>[...X.slice(-8),T])},[]),q=(0,ae.useCallback)(T=>{d(T),window.setTimeout(()=>d(X=>X===T?null:X),2600)},[]),{config:ne,configIssues:W,configRef:O,switchProfile:Y,switchModel:re,replaceConfig:se}=Km(q),Q=(0,ae.useRef)(!1),ee=(0,ae.useRef)({});ee.current={size:O.current?.sizes[0]?.value,quality:O.current?.qualities[0]};let ce=(0,ae.useRef)(!1);(0,ae.useEffect)(()=>{!ne||ce.current||!(!ne.provider?.apiKeyConfigured&&(ne.source==="plugin"||ne.issues.length>0))||(ce.current=!0,p({kind:"settings"}))},[ne]);let F=Qm({nodesRef:z,edgesRef:U,setNodes:n,setEdges:i,flash:q}),{addImages:ie,replaceImage:pe,openPreview:Ne,addDataUrl:Te}=Um({nodesRef:z,setNodes:n,createPosition:()=>Ro.current(),log:Z,flash:q,setPreview:h,record:F.record}),{runPrompt:Xe,cancelPrompt:je,runMany:Bt,resumeTasks:Mt}=Zm({nodesRef:z,edgesRef:U,setNodes:n,setEdges:i,log:Z,flash:q,taskIdsRef:G,timersRef:V}),{doSave:Et,doLoad:Qe}=tf({nodes:t,edges:r,nodesRef:z,edgesRef:U,setNodes:n,setEdges:i,instanceRef:C,log:Z,flash:q,closeDialog:()=>p(null),defaultsRef:ee,crashedRef:Q,onRestored:Mt}),lt=Mp(t),ct=(0,ae.useMemo)(()=>({animated:!b}),[b]),Je=(0,ae.useMemo)(()=>bd(t,r),[t,r]),Jn=(0,ae.useMemo)(()=>t.map(T=>{if(T.type==="image"){let X=Je.refCounts.get(T.data.registryId)??0;return(T.data.refCount??0)===X?T:{...T,data:{...T.data,refCount:X}}}if(T.type==="group"){let X=Je.groupCounts.get(T.id)??0,j=Je.groupSizes.get(T.id)??0,le=Je.groupDups.get(T.id)??0;return T.data.imageCount===X&&T.data.totalSize===j&&T.data.duplicateCount===le?T:{...T,data:{...T.data,imageCount:X,totalSize:j,duplicateCount:le}}}return T}),[t,Je]),tn=t.filter(T=>T.type==="prompt"),Po=tn.filter(T=>T.data.status==="queued"||T.data.status==="running").map(T=>T.id),eo=tn.filter(T=>(T.data.prompt??"").trim()&&T.data.status!=="running"&&T.data.status!=="queued").map(T=>T.id),zo=(0,ae.useCallback)((T,X)=>{n(j=>it(j,T,X))},[n]),Wt=(0,ae.useCallback)(T=>{F.record();let X=new Set(T);n(j=>j.filter(le=>!X.has(le.id))),i(j=>j.filter(le=>!X.has(le.source)&&!X.has(le.target)))},[n,i,F]),En=(0,ae.useCallback)(T=>{let X=z.current.find(j=>j.id===T);Wt([T]),X?.type==="image"&&Sd(X.data.registryId).catch(()=>{})},[Wt]),$e=(0,ae.useCallback)(()=>{let T=C.current,X=_.current?.getBoundingClientRect(),j=T&&X?T.screenToFlowPosition({x:X.width/2,y:X.height/2}):{x:140,y:120},{position:le,next:Me}=dd(j,A.current);return A.current=Me,le},[]),Ro=(0,ae.useRef)($e);Ro.current=$e;let Do=(0,ae.useCallback)(T=>{let X=pd(T??$e(),{size:ee.current.size??"1024x1024",quality:ee.current.quality??"high",outputDir:""});F.record(),n(j=>[...j,X])},[$e,n,O,F]),To=(0,ae.useCallback)(T=>{F.record(),n(X=>[...X,md(T??$e())])},[$e,n,F]),di=(0,ae.useCallback)(()=>{i(Va(z.current,U.current)),q(e("flash.autoConnect.done"))},[i,q]),pi=(0,ae.useCallback)(()=>{let T=new Set(S);if(!T.size){q(e("flash.autoConnect.noneSelected"));return}F.record(),i(xd(z.current,U.current,T)),q(e("flash.autoConnect.selection"))},[S,i,q,F]),mi=(0,ae.useCallback)(()=>{let T=new Set(S),X=O.current?.defaultOutputDir??"";T.size&&(F.record(),n(j=>j.map(le=>le.type==="prompt"&&T.has(le.id)?{...le,data:{...le.data,outputDir:X}}:le)),q(X?e("flash.outputDir.set",{dir:X}):e("flash.outputDir.cleared")))},[S,n,q,F]),fi=(0,ae.useCallback)(()=>{let T=C.current;if(!T)return;let X=z.current.filter(le=>S.includes(le.id)),j=X.length?X:z.current;if(!j.length){q(e("flash.noNodes"));return}T.fitView({nodes:j,padding:.25,duration:300,maxZoom:1.6})},[S,q]),gi=(0,ae.useCallback)(()=>{let T=new Set(S);if(!T.size){q(e("flash.layout.noneSelected"));return}F.record({preserveRedo:!0}),n(X=>Vd(X,U.current,T))},[S,n,q,F,U]),{dropIntent:hi,dragHandlers:bi,startToolbarDrag:yi,dropChip:xi}=Ap({canvasRef:_,modalOpen:!!c||!!m,getCreatePosition:()=>$e(),toFlowPosition:T=>C.current?C.current.screenToFlowPosition(T):$e(),onDropFiles:(T,X)=>void ie(T,X),onDropNode:(T,X)=>{T==="prompt"?Do(X):To(X)},onRejectFiles:()=>q(e("flash.drop.noImage"))});(0,ae.useEffect)(()=>{let T=X=>{let j=X.target;if(j&&(j.tagName==="TEXTAREA"||j.tagName==="INPUT"))return;let le=Array.from(X.clipboardData?.files??[]);le.length&&(X.preventDefault(),ie(le,$e()))};return window.addEventListener("paste",T),()=>window.removeEventListener("paste",T)},[ie,$e]),ef({nodesRef:z,edgesRef:U,setNodes:n,setEdges:i,selectedIds:S,selectedEdgeId:N,onDeleteNodes:Wt,onDeleteEdge:T=>{F.record(),i(X=>X.filter(j=>j.id!==T)),M(null)},onUndo:F.undo,onRestore:F.restore,onSave:()=>p({kind:"save"}),onClosePreview:()=>h(null),hasPreview:!!m});let nn=(0,ae.useCallback)(T=>X=>{let j=z.current.find(le=>le.id===X);if(!j||j.type!=="image"||!j.data.url){q(e("flash.image.noFile"));return}p({kind:T,target:{nodeId:X,src:j.data.url,name:j.data.name}})},[z,q]),_t=(0,ae.useMemo)(()=>({cropImage:nn("crop"),splitImage:nn("split"),upscaleImage:nn("upscale"),maskImage:nn("mask")}),[nn]),Ao=(0,ae.useCallback)(T=>{F.record(),n(X=>X.map(j=>j.id===T&&j.type==="image"?{...j,data:{...j.data,maskDataUrl:void 0}}:j)),q(e("flash.mask.cleared"))},[n,F,q]),{nodeMenu:It,boxRect:Pt,closeMenu:wi,setNodeMenu:Oo}=Lp({rootRef:I,canvasRef:_,instanceRef:C,setNodes:n,modalOpen:!!c||!!m}),_n=It?t.find(T=>T.id===It.nodeId):void 0,Lo=_n?$p(_n.type??"image",{hasUrl:_n.type==="image"?!!_n.data.url:!1,selectedCount:S.length}).map(T=>T.kind==="action"?{...T,action:{...T.action,label:Gp(T.action.id,S.length,e)}}:T):[],vi=(0,ae.useCallback)(T=>{let X=It;if(Oo(null),!X)return;let j=X.nodeId;switch(T){case"delete-selection":Wt(S),k([]);break;case"preview":Ne(j);break;case"crop":_t.cropImage(j);break;case"upscale":_t.upscaleImage(j);break;case"split":_t.splitImage(j);break;case"mask":_t.maskImage(j);break;case"replace":pe(j);break;case"run":Xe(j);break;case"copy-prompt":{let le=z.current.find(Me=>Me.id===j);if(le?.type!=="prompt")break;navigator.clipboard.writeText(le.data.prompt).then(()=>q(e("flash.prompt.copied"))).catch(()=>q(e("flash.prompt.copyFailed")));break}case"delete":En(j);break;default:break}},[It,Oo,Wt,Ne,_t,pe,Xe,En,S,q]),ki=(0,ae.useMemo)(()=>({updatePrompt:zo,runPrompt:T=>{Xe(T)},cancelPrompt:T=>{je(T)},deleteNode:En,zoomImage:Ne,replaceImage:pe,..._t,clearMask:Ao,config:ne}),[zo,Xe,je,En,Ne,pe,_t,Ao,ne]);return(0,de.jsxs)(os.Provider,{value:ki,children:[(0,de.jsx)("style",{children:bp}),(0,de.jsxs)("div",{className:"im-root",ref:I,children:[(0,de.jsx)(_p,{config:ne,promptCount:tn.length,runnableIds:eo,busyIds:Po.length,snapEnabled:E,canvasLocked:R,cost:lt,canUndo:F.canUndo,canRestore:F.canRestore,onUndo:F.undo,onRestore:F.restore,onAddPrompt:()=>Do(),onPickFiles:()=>P.current?.click(),onAddGroup:()=>To(),onPasteImport:()=>p({kind:"import"}),onDragCreateNode:yi,onRun:Bt,onCancelAll:()=>Po.forEach(T=>void je(T)),onAutoConnect:di,onOpenDefaultOutputDir:()=>p({kind:"settings"}),onSwitchProfile:T=>void Y(T),onSwitchModel:T=>void re(T),onOpenSave:async()=>{try{let T=await qa();p({kind:"save",workflows:T.workflows})}catch{p({kind:"save"})}},onOpenLoad:async()=>{try{let T=await qa();p({kind:"load",workflows:T.workflows})}catch(T){q(e("flash.readFailed",{reason:me(T)}))}},onOpenSettings:()=>p({kind:"settings"}),onOpenHelp:()=>p({kind:"help"}),onOpenHistory:()=>p({kind:"history"})}),W.length?(0,de.jsx)(Qp,{tone:"error",action:(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>p({kind:"settings"}),children:e("canvas.goSettings")}),children:(0,de.jsx)("ul",{className:"im-banner-list",children:W.map(T=>(0,de.jsx)("li",{children:T},T))})}):null,(0,de.jsxs)("div",{className:`im-canvas${hi?" is-drop-active":""}`,ref:_,...bi,children:[(0,de.jsx)(Yp,{selectedCount:S.length,selectedPromptCount:S.filter(T=>t.some(X=>X.id===T&&X.type==="prompt")).length,selectedRunnableIds:eo.filter(T=>S.includes(T)),pickingOutputDir:!1,onRunSelected:()=>Bt(eo.filter(T=>S.includes(T))),onAutoLayout:gi,onAutoConnectSelected:pi,onSetOutputDir:mi,onDeleteSelected:()=>{Wt(S),k([])}}),(0,de.jsx)(rs.Provider,{value:b,children:(0,de.jsx)(Qr,{onCrash:T=>{Q.current=!0,Z(e("flash.renderError",{reason:T.message}))},onClear:()=>{n([]),i([]),k([])},children:(0,de.jsxs)(Ku,{nodes:Jn,edges:r,nodeTypes:wp,onNodesChange:T=>{let X=Kd(T,z.current,E);x(X.guides),o(X.changes)},onEdgesChange:T=>a(T),onConnect:Ym(i),isValidConnection:T=>gd(z.current,U.current,{source:String(T.source??""),target:String(T.target??"")}),onInit:T=>{C.current=T,w(T.getViewport().zoom<us)},onNodeDragStop:(T,X)=>{if(x([]),!E)return;let j=Co(X),le=z.current.filter(on=>on.id!==X.id).map(Co),Me=Vr(j,le);Me.x===j.x&&Me.y===j.y||n(on=>on.map(rn=>rn.id===X.id?{...rn,position:{x:Me.x,y:Me.y}}:rn))},onMove:(T,X)=>{y(X.zoom),w(j=>Sp(j,X.zoom))},onEdgeDoubleClick:(T,X)=>{F.record(),i(j=>j.filter(le=>le.id!==X.id)),M(null)},onSelectionChange:({nodes:T,edges:X})=>{let j=T.map(Me=>Me.id);k(Me=>Me.length===j.length&&Me.every((on,rn)=>on===j[rn])?Me:j);let le=X.length===1?X[0].id:null;M(Me=>Me===le?Me:le)},fitView:!0,fitViewOptions:{padding:.15,minZoom:.02,maxZoom:1},minZoom:.05,maxZoom:2,proOptions:{hideAttribution:!0},defaultEdgeOptions:ct,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!R,nodesConnectable:!R,elementsSelectable:!R,panOnDrag:!R,selectionOnDrag:!1,selectionKeyCode:null,multiSelectionKeyCode:["Meta","Control"],children:[(0,de.jsx)(td,{variant:xt.Dots,gap:18,size:1.4}),f?(0,de.jsx)(rd,{ariaLabel:e("canvas.minimap"),pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:T=>T.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,de.jsx)(Gm,{guides:D})]})})}),(0,de.jsx)(Ip,{zoom:g,snapEnabled:E,canvasLocked:R,minimapOpen:f,onZoomIn:()=>void C.current?.zoomIn({duration:180}),onZoomOut:()=>void C.current?.zoomOut({duration:180}),onFitView:()=>C.current?.fitView({padding:.15,duration:300,minZoom:.02,maxZoom:2}),onFocusSelected:fi,onToggleSnap:()=>L(T=>{let X=!T;return Zd(X),X||x([]),q(e(X?"flash.snap.on":"flash.snap.off")),X}),onToggleLock:()=>B(T=>{let X=!T;return q(e(X?"flash.lock.on":"flash.lock.off")),X}),onToggleMinimap:()=>v(T=>{let X=!T;return Up(X),X}),onOpenHelp:()=>p({kind:"help"})}),Pt&&C.current&&_.current?(()=>{let T=C.current.flowToScreenPosition({x:Pt.x,y:Pt.y}),X=C.current.flowToScreenPosition({x:Pt.x+Pt.width,y:Pt.y+Pt.height}),j=_.current.getBoundingClientRect();return(0,de.jsx)("div",{className:"im-marquee",style:{left:T.x-j.left,top:T.y-j.top,width:X.x-T.x,height:X.y-T.y}})})():null,t.length===0?(0,de.jsx)(Zp,{}):null,(0,de.jsx)(Kp,{logs:s}),(0,de.jsx)(jp,{text:l}),xi]}),It&&Lo.length>0?(0,de.jsx)(Vp,{x:It.x,y:It.y,items:Lo,onPick:vi,onClose:wi}):null,(0,de.jsx)("input",{ref:P,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:T=>{let X=Array.from(T.target.files??[]);T.target.value="",ie(X,$e())}}),m?(0,de.jsx)(ri,{imageUrl:m.url,name:m.name,copyPath:m.path,onClose:()=>h(null)}):null,c?.kind==="save"?(0,de.jsx)(cm,{workflows:c.workflows??[],imagoraRoot:ne?.imagoraRoot,onCancel:()=>p(null),onSubmit:T=>void Et(T)}):null,c?.kind==="load"?(0,de.jsx)(um,{workflows:c.workflows??[],imagoraRoot:ne?.imagoraRoot,onCancel:()=>p(null),onPick:T=>void Qe(T)}):null,c?.kind==="crop"&&c.target?(0,de.jsx)(Sm,{src:c.target.src,name:c.target.name,onClose:()=>p(null),onConfirm:async(T,X)=>{F.record(),await Te(T,`${c.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),p(null),q(X)}}):null,c?.kind==="split"&&c.target?(0,de.jsx)(Hm,{src:c.target.src,name:c.target.name,onClose:()=>p(null),onConfirm:async T=>{F.record();let X=c.target.name.replace(/\.[^.]+$/,""),j=$e();for(let[le,Me]of T.entries())await Te(Me.dataUrl,`${X}_${le+1}.png`,{x:j.x+le*160,y:j.y});p(null),q(e("flash.split.done",{count:T.length}))}}):null,c?.kind==="upscale"&&c.target?(0,de.jsx)(Vm,{src:c.target.src,onClose:()=>p(null),onConfirm:async(T,X)=>{F.record(),await Te(T,`${c.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),p(null),q(X)}}):null,c?.kind==="mask"&&c.target?(0,de.jsx)(Em,{src:c.target.src,name:c.target.name,onClose:()=>p(null),onConfirm:async(T,X)=>{F.record(),n(j=>j.map(le=>le.id===c.target.nodeId&&le.type==="image"?{...le,data:{...le.data,maskDataUrl:T}}:le)),p(null),q(X)}}):null,c?.kind==="help"?(0,de.jsx)(dm,{config:ne,onClose:()=>p(null)}):null,c?.kind==="history"?(0,de.jsx)(Rm,{imagoraRoot:ne?.imagoraRoot,onClose:()=>p(null),onImport:T=>{if(!T.length)return;F.record();let X=$e(),j=T.map((le,Me)=>wn(le,{x:X.x+Me*172,y:X.y}));n(le=>[...le,...j]),q(e("flash.drop.images",{count:j.length}))}}):null,c?.kind==="import"?(0,de.jsx)(Xm,{sizes:ne?.sizes??[],onCancel:()=>p(null),onConfirm:T=>{F.record();let X=O.current,j=$d(T,{sizes:X?.sizes??[],defaultQuality:X?.qualities[0]??"high",defaultOutputDir:""},$e());n(le=>[...le,...j]),p(null),q(e("flash.import.prompts",{count:j.length}))}}):null,c?.kind==="settings"?(0,de.jsx)(qm,{config:ne,onClose:()=>p(null),onSaved:se,onFlash:q}):null]})]})}var sf=`/* this gets exported as style.css and can be used for the default theming */
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
`;var pf=require("react/jsx-runtime"),v1=["slots","locale"],df="imagora";globalThis.__dshImagoraCanvas=Ms;var k1={ErrorBoundary:Kn,NodeBoundary:jr,CanvasBoundary:Qr};globalThis.__dshImagoraBoundary=k1;function S1({size:e=16}){return(0,pf.jsx)(ds,{size:e,fill:"currentColor"})}function C1(e){e.effect(()=>e.locale.register(No,{zh:ts,en:lp}),"dsh-imagora-desk: \u6587\u6848\u8BCD\u5178");let t=e.locale.bind(No);e.effect(()=>{let n=document.createElement("style");return n.setAttribute("data-dsh-imagora-desk","xyflow"),n.textContent=sf,document.head.appendChild(n),()=>n.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(uf(),cf)).then(({primitives:n})=>{try{n()}catch(o){console.error("[dsh-imagora-desk]",o)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:df,locale:No},Ms)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:df,order:6,locale:No,label:()=>t("panel.entry")},S1)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
