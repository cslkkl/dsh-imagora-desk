window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var Rp=Object.create;var ko=Object.defineProperty;var Dp=Object.getOwnPropertyDescriptor;var Ap=Object.getOwnPropertyNames;var Op=Object.getPrototypeOf,Tp=Object.prototype.hasOwnProperty;var $p=(e,t)=>()=>(e&&(t=e(e=0)),t);var So=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Za=(e,t)=>{for(var n in t)ko(e,n,{get:t[n],enumerable:!0})},Ka=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ap(t))!Tp.call(e,r)&&r!==n&&ko(e,r,{get:()=>t[r],enumerable:!(o=Dp(t,r))||o.enumerable});return e};var ja=(e,t,n)=>(n=e!=null?Rp(Op(e)):{},Ka(t||!e||!e.__esModule?ko(n,"default",{value:e,enumerable:!0}):n,e)),Lp=e=>Ka(ko({},"__esModule",{value:!0}),e);var Yl=So(ql=>{"use strict";var On=require("react");function Jb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var e0=typeof Object.is=="function"?Object.is:Jb,t0=On.useState,n0=On.useEffect,o0=On.useLayoutEffect,r0=On.useDebugValue;function i0(e,t){var n=t(),o=t0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return o0(function(){r.value=n,r.getSnapshot=t,na(r)&&i({inst:r})},[e,n,t]),n0(function(){return na(r)&&i({inst:r}),e(function(){na(r)&&i({inst:r})})},[e]),r0(n),n}function na(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!e0(e,n)}catch{return!0}}function a0(e,t){return t()}var s0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?a0:i0;ql.useSyncExternalStore=On.useSyncExternalStore!==void 0?On.useSyncExternalStore:s0});var Zl=So((Yv,Ul)=>{"use strict";Ul.exports=Yl()});var jl=So(Kl=>{"use strict";var ur=require("react"),l0=Zl();function c0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var u0=typeof Object.is=="function"?Object.is:c0,d0=l0.useSyncExternalStore,f0=ur.useRef,p0=ur.useEffect,m0=ur.useMemo,g0=ur.useDebugValue;Kl.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=f0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=m0(function(){function c(p){if(!l){if(l=!0,u=p,p=o(p),r!==void 0&&a.hasValue){var m=a.value;if(r(m,p))return d=m}return d=p}if(m=d,u0(u,p))return m;var y=o(p);return r!==void 0&&r(m,y)?(u=p,m):(u=p,d=y)}var l=!1,u,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var s=d0(e,i[0],i[1]);return p0(function(){a.hasValue=!0,a.value=s},[s]),g0(s),s}});var Jl=So((Zv,Ql)=>{"use strict";Ql.exports=jl()});var Lf={};Za(Lf,{primitives:()=>$a});function Tw(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function $a(){if(Rr)return Rr;let e=require($f),t=Tw(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${$f}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Rr=t,Rr}var $f,Rr,La=$p(()=>{"use strict";$f="@deepseek-ai/dsh-client-ui-primitives",Rr=null});var Fw={};Za(Fw,{apply:()=>Ww,inject:()=>Hw});module.exports=Lp(Fw);var ie=require("react");var L=require("react/jsx-runtime"),T=require("react");function Ce(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=Ce(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Hp={value:()=>{}};function Yt(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Co(n)}function Co(e){this._=e}function Bp(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Co.prototype=Yt.prototype={constructor:Co,on:function(e,t){var n=this._,o=Bp(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=Wp(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=Qa(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Qa(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Co(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function Wp(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Qa(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Hp,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var qr="http://www.w3.org/1999/xhtml",Ja={svg:"http://www.w3.org/2000/svg",xhtml:qr,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Wn(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Ja.hasOwnProperty(t)?{space:Ja[t],local:e}:e}function Fp(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===qr&&t.documentElement.namespaceURI===qr?t.createElement(e):t.createElementNS(n,e)}}function Vp(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function es(e){var t=Wn(e);return(t.local?Vp:Fp)(t)}function Gp(){}function Eo(e){return e==null?Gp:function(){return this.querySelector(e)}}function Xp(e){typeof e!="function"&&(e=Eo(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),c,l,u=0;u<a;++u)(c=i[u])&&(l=e.call(c,c.__data__,u,i))&&("__data__"in c&&(l.__data__=c.__data__),s[u]=l);return new Qe(o,this._parents)}function qp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Yp(){return[]}function Ur(e){return e==null?Yp:function(){return this.querySelectorAll(e)}}function Up(e){return function(){return qp(e.apply(this,arguments))}}function Zp(e){typeof e=="function"?e=Up(e):e=Ur(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,l=0;l<s;++l)(c=a[l])&&(o.push(e.call(c,c.__data__,l,a)),r.push(c));return new Qe(o,r)}function Zr(e){return function(){return this.matches(e)}}function ts(e){return function(t){return t.matches(e)}}var Kp=Array.prototype.find;function jp(e){return function(){return Kp.call(this.children,e)}}function Qp(){return this.firstElementChild}function Jp(e){return this.select(e==null?Qp:jp(typeof e=="function"?e:ts(e)))}var em=Array.prototype.filter;function tm(){return Array.from(this.children)}function nm(e){return function(){return em.call(this.children,e)}}function om(e){return this.selectAll(e==null?tm:nm(typeof e=="function"?e:ts(e)))}function rm(e){typeof e!="function"&&(e=Zr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,l=0;l<a;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&s.push(c);return new Qe(o,this._parents)}function ns(e){return new Array(e.length)}function im(){return new Qe(this._enter||this._groups.map(ns),this._parents)}function _o(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}_o.prototype={constructor:_o,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function am(e){return function(){return e}}function sm(e,t,n,o,r,i){for(var a=0,s,c=t.length,l=i.length;a<l;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new _o(e,i[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function lm(e,t,n,o,r,i,a){var s,c,l=new Map,u=t.length,d=i.length,f=new Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=a.call(c,c.__data__,s,t)+"",l.has(p)?r[s]=c:l.set(p,c));for(s=0;s<d;++s)p=a.call(e,i[s],s,i)+"",(c=l.get(p))?(o[s]=c,c.__data__=i[s],l.delete(p)):n[s]=new _o(e,i[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(r[s]=c)}function cm(e){return e.__data__}function um(e,t){if(!arguments.length)return Array.from(this,cm);var n=t?lm:sm,o=this._parents,r=this._groups;typeof e!="function"&&(e=am(e));for(var i=r.length,a=new Array(i),s=new Array(i),c=new Array(i),l=0;l<i;++l){var u=o[l],d=r[l],f=d.length,p=dm(e.call(u,u&&u.__data__,l,o)),m=p.length,y=s[l]=new Array(m),b=a[l]=new Array(m),g=c[l]=new Array(f);n(u,d,y,b,g,p,t);for(var _=0,h=0,w,x;_<m;++_)if(w=y[_]){for(_>=h&&(h=_+1);!(x=b[h])&&++h<m;);w._next=x||null}}return a=new Qe(a,o),a._enter=s,a._exit=c,a}function dm(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function fm(){return new Qe(this._exit||this._groups.map(ns),this._parents)}function pm(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function mm(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),c=0;c<a;++c)for(var l=n[c],u=o[c],d=l.length,f=s[c]=new Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<r;++c)s[c]=n[c];return new Qe(s,this._parents)}function gm(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function hm(e){e||(e=bm);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,c=r[i]=new Array(s),l,u=0;u<s;++u)(l=a[u])&&(c[u]=l);c.sort(t)}return new Qe(r,this._parents).order()}function bm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ym(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function xm(){return Array.from(this)}function wm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function vm(){let e=0;for(let t of this)++e;return e}function km(){return!this.node()}function Sm(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function Cm(e){return function(){this.removeAttribute(e)}}function _m(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Em(e,t){return function(){this.setAttribute(e,t)}}function Nm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Mm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Im(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Pm(e,t){var n=Wn(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?_m:Cm:typeof t=="function"?n.local?Im:Mm:n.local?Nm:Em)(n,t))}function os(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function zm(e){return function(){this.style.removeProperty(e)}}function Rm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Dm(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Am(e,t,n){return arguments.length>1?this.each((t==null?zm:typeof t=="function"?Dm:Rm)(e,t,n??"")):Ut(this.node(),e)}function Ut(e,t){return e.style.getPropertyValue(t)||os(e).getComputedStyle(e,null).getPropertyValue(t)}function Om(e){return function(){delete this[e]}}function Tm(e,t){return function(){this[e]=t}}function $m(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Lm(e,t){return arguments.length>1?this.each((t==null?Om:typeof t=="function"?$m:Tm)(e,t)):this.node()[e]}function rs(e){return e.trim().split(/^|\s+/)}function Kr(e){return e.classList||new is(e)}function is(e){this._node=e,this._names=rs(e.getAttribute("class")||"")}is.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function as(e,t){for(var n=Kr(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function ss(e,t){for(var n=Kr(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Hm(e){return function(){as(this,e)}}function Bm(e){return function(){ss(this,e)}}function Wm(e,t){return function(){(t.apply(this,arguments)?as:ss)(this,e)}}function Fm(e,t){var n=rs(e+"");if(arguments.length<2){for(var o=Kr(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?Wm:t?Hm:Bm)(n,t))}function Vm(){this.textContent=""}function Gm(e){return function(){this.textContent=e}}function Xm(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function qm(e){return arguments.length?this.each(e==null?Vm:(typeof e=="function"?Xm:Gm)(e)):this.node().textContent}function Ym(){this.innerHTML=""}function Um(e){return function(){this.innerHTML=e}}function Zm(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Km(e){return arguments.length?this.each(e==null?Ym:(typeof e=="function"?Zm:Um)(e)):this.node().innerHTML}function jm(){this.nextSibling&&this.parentNode.appendChild(this)}function Qm(){return this.each(jm)}function Jm(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function eg(){return this.each(Jm)}function tg(e){var t=typeof e=="function"?e:es(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ng(){return null}function og(e,t){var n=typeof e=="function"?e:es(e),o=t==null?ng:typeof t=="function"?t:Eo(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function rg(){var e=this.parentNode;e&&e.removeChild(this)}function ig(){return this.each(rg)}function ag(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function sg(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function lg(e){return this.select(e?sg:ag)}function cg(e){return arguments.length?this.property("__data__",e):this.node().__data__}function ug(e){return function(t){e.call(this,t,this.__data__)}}function dg(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function fg(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function pg(e,t,n){return function(){var o=this.__on,r,i=ug(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function mg(e,t,n){var o=dg(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(r=0,u=s[c];r<i;++r)if((a=o[r]).type===u.type&&a.name===u.name)return u.value}return}for(s=t?pg:fg,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function ls(e,t,n){var o=os(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function gg(e,t){return function(){return ls(this,e,t)}}function hg(e,t){return function(){return ls(this,e,t.apply(this,arguments))}}function bg(e,t){return this.each((typeof t=="function"?hg:gg)(e,t))}function*yg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var cs=[null];function Qe(e,t){this._groups=e,this._parents=t}function Zt(){return new Qe([[document.documentElement]],cs)}function xg(){return this}Qe.prototype=Zt.prototype={constructor:Qe,select:Xp,selectAll:Zp,selectChild:Jp,selectChildren:om,filter:rm,data:um,enter:im,exit:fm,join:pm,merge:mm,selection:xg,order:gm,sort:hm,call:ym,nodes:xm,node:wm,size:vm,empty:km,each:Sm,attr:Pm,style:Am,property:Lm,classed:Fm,text:qm,html:Km,raise:Qm,lower:eg,append:tg,insert:og,remove:ig,clone:lg,datum:cg,on:mg,dispatch:bg,[Symbol.iterator]:yg};function Le(e){return typeof e=="string"?new Qe([[document.querySelector(e)]],[document.documentElement]):new Qe([[e]],cs)}var wg=0;function vg(){return new Yr}function Yr(){this._="@"+(++wg).toString(36)}Yr.prototype=vg.prototype={constructor:Yr,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function kg(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ge(e,t){if(e=kg(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var Sg={passive:!1},Fn={capture:!0,passive:!1};function jr(e){e.stopImmediatePropagation()}function hn(e){e.preventDefault(),e.stopImmediatePropagation()}function Jr(e){var t=e.document.documentElement,n=Le(e).on("dragstart.drag",hn,Fn);"onselectstart"in t?n.on("selectstart.drag",hn,Fn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function ei(e,t){var n=e.document.documentElement,o=Le(e).on("dragstart.drag",null);t&&(o.on("click.drag",hn,Fn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var No=e=>()=>e;function Qr(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}Qr.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Cg(e){return!e.ctrlKey&&!e.button}function _g(){return this.parentNode}function Eg(e,t){return t??{x:e.x,y:e.y}}function Ng(){return navigator.maxTouchPoints||"ontouchstart"in this}function ti(){var e=Cg,t=_g,n=Eg,o=Ng,r={},i=Yt("start","drag","end"),a=0,s,c,l,u,d=0;function f(w){w.on("mousedown.drag",p).filter(o).on("touchstart.drag",b).on("touchmove.drag",g,Sg).on("touchend.drag touchcancel.drag",_).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(w,x){if(!(u||!e.call(this,w,x))){var C=h(this,t.call(this,w,x),w,x,"mouse");C&&(Le(w.view).on("mousemove.drag",m,Fn).on("mouseup.drag",y,Fn),Jr(w.view),jr(w),l=!1,s=w.clientX,c=w.clientY,C("start",w))}}function m(w){if(hn(w),!l){var x=w.clientX-s,C=w.clientY-c;l=x*x+C*C>d}r.mouse("drag",w)}function y(w){Le(w.view).on("mousemove.drag mouseup.drag",null),ei(w.view,l),hn(w),r.mouse("end",w)}function b(w,x){if(e.call(this,w,x)){var C=w.changedTouches,k=t.call(this,w,x),M=C.length,R,W;for(R=0;R<M;++R)(W=h(this,k,w,x,C[R].identifier,C[R]))&&(jr(w),W("start",w,C[R]))}}function g(w){var x=w.changedTouches,C=x.length,k,M;for(k=0;k<C;++k)(M=r[x[k].identifier])&&(hn(w),M("drag",w,x[k]))}function _(w){var x=w.changedTouches,C=x.length,k,M;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),k=0;k<C;++k)(M=r[x[k].identifier])&&(jr(w),M("end",w,x[k]))}function h(w,x,C,k,M,R){var W=i.copy(),P=Ge(R||C,x),H,I,v;if((v=n.call(w,new Qr("beforestart",{sourceEvent:C,target:f,identifier:M,active:a,x:P[0],y:P[1],dx:0,dy:0,dispatch:W}),k))!=null)return H=v.x-P[0]||0,I=v.y-P[1]||0,function E(N,S,z){var A=P,B;switch(N){case"start":r[M]=E,B=a++;break;case"end":delete r[M],--a;case"drag":P=Ge(z||S,x),B=a;break}W.call(N,w,new Qr(N,{sourceEvent:S,subject:v,target:f,identifier:M,active:B,x:P[0]+H,y:P[1]+I,dx:P[0]-A[0],dy:P[1]-A[1],dispatch:W}),k)}}return f.filter=function(w){return arguments.length?(e=typeof w=="function"?w:No(!!w),f):e},f.container=function(w){return arguments.length?(t=typeof w=="function"?w:No(w),f):t},f.subject=function(w){return arguments.length?(n=typeof w=="function"?w:No(w),f):n},f.touchable=function(w){return arguments.length?(o=typeof w=="function"?w:No(!!w),f):o},f.on=function(){var w=i.on.apply(i,arguments);return w===i?f:w},f.clickDistance=function(w){return arguments.length?(d=(w=+w)*w,f):Math.sqrt(d)},f}function wn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Xn(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Dt(){}var Jt=.7,xn=1/Jt,bn="\\s*([+-]?\\d+)\\s*",Vn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Mg=/^#([0-9a-f]{3,8})$/,Ig=new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`),Pg=new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`),zg=new RegExp(`^rgba\\(${bn},${bn},${bn},${Vn}\\)$`),Rg=new RegExp(`^rgba\\(${mt},${mt},${mt},${Vn}\\)$`),Dg=new RegExp(`^hsl\\(${Vn},${mt},${mt}\\)$`),Ag=new RegExp(`^hsla\\(${Vn},${mt},${mt},${Vn}\\)$`),us={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wn(Dt,_t,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:ds,formatHex:ds,formatHex8:Og,formatHsl:Tg,formatRgb:fs,toString:fs});function ds(){return this.rgb().formatHex()}function Og(){return this.rgb().formatHex8()}function Tg(){return vs(this).formatHsl()}function fs(){return this.rgb().formatRgb()}function _t(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Mg.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ps(t):n===3?new Te(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Mo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Mo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ig.exec(e))?new Te(t[1],t[2],t[3],1):(t=Pg.exec(e))?new Te(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=zg.exec(e))?Mo(t[1],t[2],t[3],t[4]):(t=Rg.exec(e))?Mo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Dg.exec(e))?hs(t[1],t[2]/100,t[3]/100,1):(t=Ag.exec(e))?hs(t[1],t[2]/100,t[3]/100,t[4]):us.hasOwnProperty(e)?ps(us[e]):e==="transparent"?new Te(NaN,NaN,NaN,0):null}function ps(e){return new Te(e>>16&255,e>>8&255,e&255,1)}function Mo(e,t,n,o){return o<=0&&(e=t=n=NaN),new Te(e,t,n,o)}function si(e){return e instanceof Dt||(e=_t(e)),e?(e=e.rgb(),new Te(e.r,e.g,e.b,e.opacity)):new Te}function qn(e,t,n,o){return arguments.length===1?si(e):new Te(e,t,n,o??1)}function Te(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}wn(Te,qn,Xn(Dt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new Te(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Jt:Math.pow(Jt,e),new Te(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Te(jt(this.r),jt(this.g),jt(this.b),Po(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ms,formatHex:ms,formatHex8:$g,formatRgb:gs,toString:gs}));function ms(){return`#${Kt(this.r)}${Kt(this.g)}${Kt(this.b)}`}function $g(){return`#${Kt(this.r)}${Kt(this.g)}${Kt(this.b)}${Kt((isNaN(this.opacity)?1:this.opacity)*255)}`}function gs(){let e=Po(this.opacity);return`${e===1?"rgb(":"rgba("}${jt(this.r)}, ${jt(this.g)}, ${jt(this.b)}${e===1?")":`, ${e})`}`}function Po(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function jt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Kt(e){return e=jt(e),(e<16?"0":"")+e.toString(16)}function hs(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new lt(e,t,n,o)}function vs(e){if(e instanceof lt)return new lt(e.h,e.s,e.l,e.opacity);if(e instanceof Dt||(e=_t(e)),!e)return new lt;if(e instanceof lt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,c=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+r:2-i-r,a*=60):s=c>0&&c<1?0:a,new lt(a,s,c,e.opacity)}function Ro(e,t,n,o){return arguments.length===1?vs(e):new lt(e,t,n,o??1)}function lt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}wn(lt,Ro,Xn(Dt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new lt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Jt:Math.pow(Jt,e),new lt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Te(ni(e>=240?e-240:e+120,r,o),ni(e,r,o),ni(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new lt(bs(this.h),Io(this.s),Io(this.l),Po(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Po(this.opacity);return`${e===1?"hsl(":"hsla("}${bs(this.h)}, ${Io(this.s)*100}%, ${Io(this.l)*100}%${e===1?")":`, ${e})`}`}}));function bs(e){return e=(e||0)%360,e<0?e+360:e}function Io(e){return Math.max(0,Math.min(1,e||0))}function ni(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var ks=Math.PI/180,Ss=180/Math.PI,zo=18,Cs=.96422,_s=1,Es=.82521,Ns=4/29,yn=6/29,Ms=3*yn*yn,Lg=yn*yn*yn;function Is(e){if(e instanceof gt)return new gt(e.l,e.a,e.b,e.opacity);if(e instanceof Ct)return zs(e);e instanceof Te||(e=si(e));var t=ai(e.r),n=ai(e.g),o=ai(e.b),r=oi((.2225045*t+.7168786*n+.0606169*o)/_s),i,a;return t===n&&n===o?i=a=r:(i=oi((.4360747*t+.3850649*n+.1430804*o)/Cs),a=oi((.0139322*t+.0971045*n+.7141733*o)/Es)),new gt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function Ps(e,t,n,o){return arguments.length===1?Is(e):new gt(e,t,n,o??1)}function gt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}wn(gt,Ps,Xn(Dt,{brighter(e){return new gt(this.l+zo*(e??1),this.a,this.b,this.opacity)},darker(e){return new gt(this.l-zo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=Cs*ri(t),e=_s*ri(e),n=Es*ri(n),new Te(ii(3.1338561*t-1.6168667*e-.4906146*n),ii(-.9787684*t+1.9161415*e+.033454*n),ii(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function oi(e){return e>Lg?Math.pow(e,1/3):e/Ms+Ns}function ri(e){return e>yn?e*e*e:Ms*(e-Ns)}function ii(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function ai(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Hg(e){if(e instanceof Ct)return new Ct(e.h,e.c,e.l,e.opacity);if(e instanceof gt||(e=Is(e)),e.a===0&&e.b===0)return new Ct(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*Ss;return new Ct(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Do(e,t,n,o){return arguments.length===1?Hg(e):new Ct(e,t,n,o??1)}function Ct(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function zs(e){if(isNaN(e.h))return new gt(e.l,0,0,e.opacity);var t=e.h*ks;return new gt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}wn(Ct,Do,Xn(Dt,{brighter(e){return new Ct(this.h,this.c,this.l+zo*(e??1),this.opacity)},darker(e){return new Ct(this.h,this.c,this.l-zo*(e??1),this.opacity)},rgb(){return zs(this).rgb()}}));var Rs=-.14861,li=1.78277,ci=-.29227,Ao=-.90649,Gn=1.97294,ys=Gn*Ao,xs=Gn*li,ws=li*ci-Ao*Rs;function Bg(e){if(e instanceof Qt)return new Qt(e.h,e.s,e.l,e.opacity);e instanceof Te||(e=si(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(ws*o+ys*t-xs*n)/(ws+ys-xs),i=o-r,a=(Gn*(n-r)-ci*i)/Ao,s=Math.sqrt(a*a+i*i)/(Gn*r*(1-r)),c=s?Math.atan2(a,i)*Ss-120:NaN;return new Qt(c<0?c+360:c,s,r,e.opacity)}function Oo(e,t,n,o){return arguments.length===1?Bg(e):new Qt(e,t,n,o??1)}function Qt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}wn(Qt,Oo,Xn(Dt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new Qt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Jt:Math.pow(Jt,e),new Qt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*ks,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Te(255*(t+n*(Rs*o+li*r)),255*(t+n*(ci*o+Ao*r)),255*(t+n*(Gn*o)),this.opacity)}}));function Os(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function Wg(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return Os((n-o/t)*t,a,r,i,s)}}function Fg(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return Os((n-o/t)*t,r,i,a,s)}}var $o=e=>()=>e;function Ts(e,t){return function(n){return e+n*t}}function Vg(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function pi(e,t){var n=t-e;return n?Ts(e,n>180||n<-180?n-360*Math.round(n/360):n):$o(isNaN(e)?t:e)}function Gg(e){return(e=+e)==1?Xe:function(t,n){return n-t?Vg(t,n,e):$o(isNaN(t)?n:t)}}function Xe(e,t){var n=t-e;return n?Ts(e,n):$o(isNaN(e)?t:e)}var Yn=(function e(t){var n=Gg(t);function o(r,i){var a=n((r=qn(r)).r,(i=qn(i)).r),s=n(r.g,i.g),c=n(r.b,i.b),l=Xe(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=s(u),r.b=c(u),r.opacity=l(u),r+""}}return o.gamma=e,o})(1);function $s(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=qn(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(c){return s.r=o(c),s.g=r(c),s.b=i(c),s+""}}}var Qw=$s(Wg),Jw=$s(Fg);function Xg(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function qg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Yg(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=vn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function Ug(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ct(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Zg(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=vn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var di=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ui=new RegExp(di.source,"g");function Kg(e){return function(){return e}}function jg(e){return function(t){return e(t)+""}}function mi(e,t){var n=di.lastIndex=ui.lastIndex=0,o,r,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(o=di.exec(e))&&(r=ui.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:ct(o,r)})),n=ui.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?jg(c[0].x):Kg(t):(t=c.length,function(l){for(var u=0,d;u<t;++u)s[(d=c[u]).i]=d.x(l);return s.join("")})}function vn(e,t){var n=typeof t,o;return t==null||n==="boolean"?$o(t):(n==="number"?ct:n==="string"?(o=_t(t))?(t=o,Yn):mi:t instanceof _t?Yn:t instanceof Date?Ug:qg(t)?Xg:Array.isArray(t)?Yg:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Zg:ct)(e,t)}var Ds=180/Math.PI,fi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ls(e,t,n,o,r,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,c/=s),e*o<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*Ds,skewX:Math.atan(c)*Ds,scaleX:a,scaleY:s}}var To;function Qg(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?fi:Ls(t.a,t.b,t.c,t.d,t.e,t.f)}function Jg(e){return e==null||(To||(To=document.createElementNS("http://www.w3.org/2000/svg","g")),To.setAttribute("transform",e),!(e=To.transform.baseVal.consolidate()))?fi:(e=e.matrix,Ls(e.a,e.b,e.c,e.d,e.e,e.f))}function Hs(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push("translate(",null,t,null,n);m.push({i:y-4,x:ct(l,d)},{i:y-2,x:ct(u,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function a(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:ct(l,u)})):u&&d.push(r(d)+"rotate("+u+o)}function s(l,u,d,f){l!==u?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:ct(l,u)}):u&&d.push(r(d)+"skewX("+u+o)}function c(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push(r(p)+"scale(",null,",",null,")");m.push({i:y-4,x:ct(l,d)},{i:y-2,x:ct(u,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=e(l),u=e(u),i(l.translateX,l.translateY,u.translateX,u.translateY,d,f),a(l.rotate,u.rotate,d,f),s(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(p){for(var m=-1,y=f.length,b;++m<y;)d[(b=f[m]).i]=b.x(p);return d.join("")}}}var Bs=Hs(Qg,"px, ","px)","deg)"),Ws=Hs(Jg,", ",")",")"),eh=1e-12;function As(e){return((e=Math.exp(e))+1/e)/2}function th(e){return((e=Math.exp(e))-1/e)/2}function nh(e){return((e=Math.exp(2*e))-1)/(e+1)}var kn=(function e(t,n,o){function r(i,a){var s=i[0],c=i[1],l=i[2],u=a[0],d=a[1],f=a[2],p=u-s,m=d-c,y=p*p+m*m,b,g;if(y<eh)g=Math.log(f/l)/t,b=function(k){return[s+k*p,c+k*m,l*Math.exp(t*k*g)]};else{var _=Math.sqrt(y),h=(f*f-l*l+o*y)/(2*l*n*_),w=(f*f-l*l-o*y)/(2*f*n*_),x=Math.log(Math.sqrt(h*h+1)-h),C=Math.log(Math.sqrt(w*w+1)-w);g=(C-x)/t,b=function(k){var M=k*g,R=As(x),W=l/(n*_)*(R*nh(t*M+x)-th(x));return[s+W*p,c+W*m,l*R/As(t*M+x)]}}return b.duration=Math.abs(g)*1e3*t/Math.SQRT2,b}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},r})(Math.SQRT2,2,4);function Fs(e){return function(t,n){var o=e((t=Ro(t)).h,(n=Ro(n)).h),r=Xe(t.s,n.s),i=Xe(t.l,n.l),a=Xe(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var ev=Fs(pi),tv=Fs(Xe);function Vs(e){return function(t,n){var o=e((t=Do(t)).h,(n=Do(n)).h),r=Xe(t.c,n.c),i=Xe(t.l,n.l),a=Xe(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var nv=Vs(pi),ov=Vs(Xe);function Gs(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Oo(r)).h,(i=Oo(i)).h),s=Xe(r.s,i.s),c=Xe(r.l,i.l),l=Xe(r.opacity,i.opacity);return function(u){return r.h=a(u),r.s=s(u),r.l=c(Math.pow(u,n)),r.opacity=l(u),r+""}}return o.gamma=t,o})(1)}var rv=Gs(pi),iv=Gs(Xe);var Sn=0,Zn=0,Un=0,qs=1e3,Lo,Kn,Ho=0,en=0,Wo=0,jn=typeof performance=="object"&&performance.now?performance:Date,Ys=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Fo(){return en||(Ys(oh),en=jn.now()+Wo)}function oh(){en=0}function Bo(){this._call=this._time=this._next=null}Bo.prototype=hi.prototype={constructor:Bo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Fo():+n)+(t==null?0:+t),!this._next&&Kn!==this&&(Kn?Kn._next=this:Lo=this,Kn=this),this._call=e,this._time=n,gi()},stop:function(){this._call&&(this._call=null,this._time=1/0,gi())}};function hi(e,t,n){var o=new Bo;return o.restart(e,t,n),o}function rh(){Fo(),++Sn;for(var e=Lo,t;e;)(t=en-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Sn}function Xs(){en=(Ho=jn.now())+Wo,Sn=Zn=0;try{rh()}finally{Sn=0,ah(),en=0}}function ih(){var e=jn.now(),t=e-Ho;t>qs&&(Wo-=t,Ho=e)}function ah(){for(var e,t=Lo,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Lo=n);Kn=e,gi(o)}function gi(e){if(!Sn){Zn&&(Zn=clearTimeout(Zn));var t=e-en;t>24?(e<1/0&&(Zn=setTimeout(Xs,Math.ceil(e-jn.now()-Wo)+1)),Un&&(Un=clearInterval(Un))):(Un||(Ho=jn.now(),Un=setInterval(ih,qs)),Sn=1,Ys(Xs))}}function bi(e,t,n){var o=new Bo;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function Zs(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var yi=3,lv=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(yi),cv=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(yi),uv=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(yi),sh=Math.PI,dv=sh/2;function Vo(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Us=4/11,fv=6/11,pv=8/11,mv=3/4,gv=9/11,hv=10/11,bv=15/16,yv=21/22,xv=63/64,wv=1/Us/Us;var xi=1.70158,vv=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(xi),kv=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(xi),Sv=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(xi),Cn=2*Math.PI,wi=1,vi=.3,Cv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return t*Vo(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(wi,vi),_v=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return 1-t*Vo(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(wi,vi),Ev=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return((i=i*2-1)<0?t*Vo(-i)*Math.sin((o-i)/n):2-t*Vo(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(wi,vi);var lh=Yt("start","end","cancel","interrupt"),ch=[],Qs=0,Ks=1,ki=2,Go=3,js=4,Si=5,Xo=6;function qo(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;uh(e,n,{name:t,index:o,group:r,on:lh,tween:ch,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Qs})}function Ci(e,t){var n=ut(e,t);if(n.state>Qs)throw new Error("too late; already scheduled");return n}function ht(e,t){var n=ut(e,t);if(n.state>Go)throw new Error("too late; already running");return n}function ut(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function uh(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=hi(i,0,n.time);function i(l){n.state=Ks,n.timer.restart(a,n.delay,n.time),n.delay<=l&&a(l-n.delay)}function a(l){var u,d,f,p;if(n.state!==Ks)return c();for(u in o)if(p=o[u],p.name===n.name){if(p.state===Go)return bi(a);p.state===js?(p.state=Xo,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[u]):+u<t&&(p.state=Xo,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[u])}if(bi(function(){n.state===Go&&(n.state=js,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=ki,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ki){for(n.state=Go,r=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(p=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function s(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=Si,1),d=-1,f=r.length;++d<f;)r[d].call(e,u);n.state===Si&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Xo,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function Qn(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>ki&&o.state<Si,o.state=Xo,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function dh(e){return this.each(function(){Qn(this,e)})}function fh(e,t){var n,o;return function(){var r=ht(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function ph(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=ht(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=s;break}c===l&&r.push(s)}i.tween=r}}function mh(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ut(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?fh:ph)(n,e,t))}function _i(e,t,n){var o=e._id;return e.each(function(){var r=ht(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ut(r,o).value[t]}}function Js(e,t){var n;return(typeof t=="number"?ct:t instanceof _t?Yn:(n=_t(t))?(t=n,Yn):mi)(e,t)}function gh(e){return function(){this.removeAttribute(e)}}function hh(e){return function(){this.removeAttributeNS(e.space,e.local)}}function bh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function yh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function xh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function wh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function vh(e,t){var n=Wn(e),o=n==="transform"?Ws:Js;return this.attrTween(e,typeof t=="function"?(n.local?wh:xh)(n,o,_i(this,"attr."+e,t)):t==null?(n.local?hh:gh)(n):(n.local?yh:bh)(n,o,t))}function kh(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Sh(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Ch(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Sh(e,i)),n}return r._value=t,r}function _h(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&kh(e,i)),n}return r._value=t,r}function Eh(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Wn(e);return this.tween(n,(o.local?Ch:_h)(o,t))}function Nh(e,t){return function(){Ci(this,e).delay=+t.apply(this,arguments)}}function Mh(e,t){return t=+t,function(){Ci(this,e).delay=t}}function Ih(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Nh:Mh)(t,e)):ut(this.node(),t).delay}function Ph(e,t){return function(){ht(this,e).duration=+t.apply(this,arguments)}}function zh(e,t){return t=+t,function(){ht(this,e).duration=t}}function Rh(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ph:zh)(t,e)):ut(this.node(),t).duration}function Dh(e,t){if(typeof t!="function")throw new Error;return function(){ht(this,e).ease=t}}function Ah(e){var t=this._id;return arguments.length?this.each(Dh(t,e)):ut(this.node(),t).ease}function Oh(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;ht(this,e).ease=n}}function Th(e){if(typeof e!="function")throw new Error;return this.each(Oh(this._id,e))}function $h(e){typeof e!="function"&&(e=Zr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,l=0;l<a;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&s.push(c);return new Nt(o,this._parents,this._name,this._id)}function Lh(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var c=t[s],l=n[s],u=c.length,d=a[s]=new Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<o;++s)a[s]=t[s];return new Nt(a,this._parents,this._name,this._id)}function Hh(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Bh(e,t,n){var o,r,i=Hh(t)?Ci:ht;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function Wh(e,t){var n=this._id;return arguments.length<2?ut(this.node(),n).on.on(e):this.each(Bh(n,e,t))}function Fh(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Vh(){return this.on("end.remove",Fh(this._id))}function Gh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Eo(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],c=s.length,l=i[a]=new Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,qo(l[f],t,n,f,l,ut(u,n)));return new Nt(i,this._parents,t,n)}function Xh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Ur(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var c=o[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=ut(u,n),y=0,b=f.length;y<b;++y)(p=f[y])&&qo(p,t,n,y,f,m);i.push(f),a.push(u)}return new Nt(i,a,t,n)}var qh=Zt.prototype.constructor;function Yh(){return new qh(this._groups,this._parents)}function Uh(e,t){var n,o,r;return function(){var i=Ut(this,e),a=(this.style.removeProperty(e),Ut(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function el(e){return function(){this.style.removeProperty(e)}}function Zh(e,t,n){var o,r=n+"",i;return function(){var a=Ut(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function Kh(e,t,n){var o,r,i;return function(){var a=Ut(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),Ut(this,e))),a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s))}}function jh(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var c=ht(this,e),l=c.on,u=c.value[i]==null?s||(s=el(t)):void 0;(l!==n||r!==u)&&(o=(n=l).copy()).on(a,r=u),c.on=o}}function Qh(e,t,n){var o=(e+="")=="transform"?Bs:Js;return t==null?this.styleTween(e,Uh(e,o)).on("end.style."+e,el(e)):typeof t=="function"?this.styleTween(e,Kh(e,o,_i(this,"style."+e,t))).each(jh(this._id,e)):this.styleTween(e,Zh(e,o,t),n).on("end.style."+e,null)}function Jh(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function eb(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&Jh(e,a,n)),o}return i._value=t,i}function tb(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,eb(e,t,n??""))}function nb(e){return function(){this.textContent=e}}function ob(e){return function(){var t=e(this);this.textContent=t??""}}function rb(e){return this.tween("text",typeof e=="function"?ob(_i(this,"text",e)):nb(e==null?"":e+""))}function ib(e){return function(t){this.textContent=e.call(this,t)}}function ab(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&ib(r)),t}return o._value=e,o}function sb(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,ab(e))}function lb(){for(var e=this._name,t=this._id,n=tl(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,l=0;l<s;++l)if(c=a[l]){var u=ut(c,t);qo(c,e,n,l,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Nt(o,this._parents,e,n)}function cb(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--r===0&&i()}};n.each(function(){var l=ht(this,o),u=l.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),l.on=t}),r===0&&i()})}var ub=0;function Nt(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function db(e){return Zt().transition(e)}function tl(){return++ub}var Et=Zt.prototype;Nt.prototype=db.prototype={constructor:Nt,select:Gh,selectAll:Xh,selectChild:Et.selectChild,selectChildren:Et.selectChildren,filter:$h,merge:Lh,selection:Yh,transition:lb,call:Et.call,nodes:Et.nodes,node:Et.node,size:Et.size,empty:Et.empty,each:Et.each,on:Wh,attr:vh,attrTween:Eh,style:Qh,styleTween:tb,text:rb,textTween:sb,remove:Vh,tween:mh,delay:Ih,duration:Rh,ease:Ah,easeVarying:Th,end:cb,[Symbol.iterator]:Et[Symbol.iterator]};var fb={time:null,delay:0,duration:250,ease:Zs};function pb(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function mb(e){var t,n;e instanceof Nt?(t=e._id,e=e._name):(t=tl(),(n=fb).time=Fo(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,l=0;l<s;++l)(c=a[l])&&qo(c,e,t,l,a,n||pb(c,t));return new Nt(o,this._parents,e,t)}Zt.prototype.interrupt=dh;Zt.prototype.transition=mb;var Yo=e=>()=>e;function gb(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Mt(e,t,n){this.k=e,this.x=t,this.y=n}Mt.prototype={constructor:Mt,scale:function(e){return e===1?this:new Mt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Mt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var eo=new Mt(1,0,0);Ni.prototype=Mt.prototype;function Ni(e){for(;!e.__zoom;)if(!(e=e.parentNode))return eo;return e.__zoom}function Ei(e){e.stopImmediatePropagation()}function Jn(e){e.preventDefault(),e.stopImmediatePropagation()}function hb(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function bb(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function nl(){return this.__zoom||eo}function yb(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function xb(){return navigator.maxTouchPoints||"ontouchstart"in this}function wb(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Mi(){var e=hb,t=bb,n=wb,o=yb,r=xb,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=kn,l=Yt("start","zoom","end"),u,d,f,p=500,m=150,y=0,b=10;function g(v){v.property("__zoom",nl).on("wheel.zoom",M,{passive:!1}).on("mousedown.zoom",R).on("dblclick.zoom",W).filter(r).on("touchstart.zoom",P).on("touchmove.zoom",H).on("touchend.zoom touchcancel.zoom",I).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(v,E,N,S){var z=v.selection?v.selection():v;z.property("__zoom",nl),v!==z?x(v,E,N,S):z.interrupt().each(function(){C(this,arguments).event(S).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},g.scaleBy=function(v,E,N,S){g.scaleTo(v,function(){var z=this.__zoom.k,A=typeof E=="function"?E.apply(this,arguments):E;return z*A},N,S)},g.scaleTo=function(v,E,N,S){g.transform(v,function(){var z=t.apply(this,arguments),A=this.__zoom,B=N==null?w(z):typeof N=="function"?N.apply(this,arguments):N,F=A.invert(B),V=typeof E=="function"?E.apply(this,arguments):E;return n(h(_(A,V),B,F),z,a)},N,S)},g.translateBy=function(v,E,N,S){g.transform(v,function(){return n(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof N=="function"?N.apply(this,arguments):N),t.apply(this,arguments),a)},null,S)},g.translateTo=function(v,E,N,S,z){g.transform(v,function(){var A=t.apply(this,arguments),B=this.__zoom,F=S==null?w(A):typeof S=="function"?S.apply(this,arguments):S;return n(eo.translate(F[0],F[1]).scale(B.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof N=="function"?-N.apply(this,arguments):-N),A,a)},S,z)};function _(v,E){return E=Math.max(i[0],Math.min(i[1],E)),E===v.k?v:new Mt(E,v.x,v.y)}function h(v,E,N){var S=E[0]-N[0]*v.k,z=E[1]-N[1]*v.k;return S===v.x&&z===v.y?v:new Mt(v.k,S,z)}function w(v){return[(+v[0][0]+ +v[1][0])/2,(+v[0][1]+ +v[1][1])/2]}function x(v,E,N,S){v.on("start.zoom",function(){C(this,arguments).event(S).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(S).end()}).tween("zoom",function(){var z=this,A=arguments,B=C(z,A).event(S),F=t.apply(z,A),V=N==null?w(F):typeof N=="function"?N.apply(z,A):N,X=Math.max(F[1][0]-F[0][0],F[1][1]-F[0][1]),U=z.__zoom,Q=typeof E=="function"?E.apply(z,A):E,q=c(U.invert(V).concat(X/U.k),Q.invert(V).concat(X/Q.k));return function($){if($===1)$=Q;else{var D=q($),Y=X/D[2];$=new Mt(Y,V[0]-D[0]*Y,V[1]-D[1]*Y)}B.zoom(null,$)}})}function C(v,E,N){return!N&&v.__zooming||new k(v,E)}function k(v,E){this.that=v,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(v,E),this.taps=0}k.prototype={event:function(v){return v&&(this.sourceEvent=v),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(v,E){return this.mouse&&v!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&v!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&v!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(v){var E=Le(this.that).datum();l.call(v,this.that,new gb(v,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:l}),E)}};function M(v,...E){if(!e.apply(this,arguments))return;var N=C(this,E).event(v),S=this.__zoom,z=Math.max(i[0],Math.min(i[1],S.k*Math.pow(2,o.apply(this,arguments)))),A=Ge(v);if(N.wheel)(N.mouse[0][0]!==A[0]||N.mouse[0][1]!==A[1])&&(N.mouse[1]=S.invert(N.mouse[0]=A)),clearTimeout(N.wheel);else{if(S.k===z)return;N.mouse=[A,S.invert(A)],Qn(this),N.start()}Jn(v),N.wheel=setTimeout(B,m),N.zoom("mouse",n(h(_(S,z),N.mouse[0],N.mouse[1]),N.extent,a));function B(){N.wheel=null,N.end()}}function R(v,...E){if(f||!e.apply(this,arguments))return;var N=v.currentTarget,S=C(this,E,!0).event(v),z=Le(v.view).on("mousemove.zoom",V,!0).on("mouseup.zoom",X,!0),A=Ge(v,N),B=v.clientX,F=v.clientY;Jr(v.view),Ei(v),S.mouse=[A,this.__zoom.invert(A)],Qn(this),S.start();function V(U){if(Jn(U),!S.moved){var Q=U.clientX-B,q=U.clientY-F;S.moved=Q*Q+q*q>y}S.event(U).zoom("mouse",n(h(S.that.__zoom,S.mouse[0]=Ge(U,N),S.mouse[1]),S.extent,a))}function X(U){z.on("mousemove.zoom mouseup.zoom",null),ei(U.view,S.moved),Jn(U),S.event(U).end()}}function W(v,...E){if(e.apply(this,arguments)){var N=this.__zoom,S=Ge(v.changedTouches?v.changedTouches[0]:v,this),z=N.invert(S),A=N.k*(v.shiftKey?.5:2),B=n(h(_(N,A),S,z),t.apply(this,E),a);Jn(v),s>0?Le(this).transition().duration(s).call(x,B,S,v):Le(this).call(g.transform,B,S,v)}}function P(v,...E){if(e.apply(this,arguments)){var N=v.touches,S=N.length,z=C(this,E,v.changedTouches.length===S).event(v),A,B,F,V;for(Ei(v),B=0;B<S;++B)F=N[B],V=Ge(F,this),V=[V,this.__zoom.invert(V),F.identifier],z.touch0?!z.touch1&&z.touch0[2]!==V[2]&&(z.touch1=V,z.taps=0):(z.touch0=V,A=!0,z.taps=1+!!u);u&&(u=clearTimeout(u)),A&&(z.taps<2&&(d=V[0],u=setTimeout(function(){u=null},p)),Qn(this),z.start())}}function H(v,...E){if(this.__zooming){var N=C(this,E).event(v),S=v.changedTouches,z=S.length,A,B,F,V;for(Jn(v),A=0;A<z;++A)B=S[A],F=Ge(B,this),N.touch0&&N.touch0[2]===B.identifier?N.touch0[0]=F:N.touch1&&N.touch1[2]===B.identifier&&(N.touch1[0]=F);if(B=N.that.__zoom,N.touch1){var X=N.touch0[0],U=N.touch0[1],Q=N.touch1[0],q=N.touch1[1],$=($=Q[0]-X[0])*$+($=Q[1]-X[1])*$,D=(D=q[0]-U[0])*D+(D=q[1]-U[1])*D;B=_(B,Math.sqrt($/D)),F=[(X[0]+Q[0])/2,(X[1]+Q[1])/2],V=[(U[0]+q[0])/2,(U[1]+q[1])/2]}else if(N.touch0)F=N.touch0[0],V=N.touch0[1];else return;N.zoom("touch",n(h(B,F,V),N.extent,a))}}function I(v,...E){if(this.__zooming){var N=C(this,E).event(v),S=v.changedTouches,z=S.length,A,B;for(Ei(v),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),A=0;A<z;++A)B=S[A],N.touch0&&N.touch0[2]===B.identifier?delete N.touch0:N.touch1&&N.touch1[2]===B.identifier&&delete N.touch1;if(N.touch1&&!N.touch0&&(N.touch0=N.touch1,delete N.touch1),N.touch0)N.touch0[1]=this.__zoom.invert(N.touch0[0]);else if(N.end(),N.taps===2&&(B=Ge(B,this),Math.hypot(d[0]-B[0],d[1]-B[1])<b)){var F=Le(this).on("dblclick.zoom");F&&F.apply(this,arguments)}}}return g.wheelDelta=function(v){return arguments.length?(o=typeof v=="function"?v:Yo(+v),g):o},g.filter=function(v){return arguments.length?(e=typeof v=="function"?v:Yo(!!v),g):e},g.touchable=function(v){return arguments.length?(r=typeof v=="function"?v:Yo(!!v),g):r},g.extent=function(v){return arguments.length?(t=typeof v=="function"?v:Yo([[+v[0][0],+v[0][1]],[+v[1][0],+v[1][1]]]),g):t},g.scaleExtent=function(v){return arguments.length?(i[0]=+v[0],i[1]=+v[1],g):[i[0],i[1]]},g.translateExtent=function(v){return arguments.length?(a[0][0]=+v[0][0],a[1][0]=+v[1][0],a[0][1]=+v[0][1],a[1][1]=+v[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(v){return arguments.length?(n=v,g):n},g.duration=function(v){return arguments.length?(s=+v,g):s},g.interpolate=function(v){return arguments.length?(c=v,g):c},g.on=function(){var v=l.on.apply(l,arguments);return v===l?g:v},g.clickDistance=function(v){return arguments.length?(y=(v=+v)*v,g):Math.sqrt(y)},g.tapDistance=function(v){return arguments.length?(b=+v,g):b},g}var Je={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},In=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Di=["Enter"," ","Escape"],Ai={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Tt;(function(e){e.Strict="strict",e.Loose="loose"})(Tt||(Tt={}));var It;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(It||(It={}));var tn;(function(e){e.Partial="partial",e.Full="full"})(tn||(tn={}));var Oi={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},bt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(bt||(bt={}));var Nn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Nn||(Nn={}));var ee;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ee||(ee={}));var ol={[ee.Left]:ee.Right,[ee.Right]:ee.Left,[ee.Top]:ee.Bottom,[ee.Bottom]:ee.Top};function Ti(e){return e===null?null:e?"valid":"invalid"}var $i=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,hl=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Li=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var no=(e,t=[0,0])=>{let{width:n,height:o}=dt(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},Hi=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):Li(r)?r:t.nodeLookup.get(r.id));let s=a?Ko(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return Jo(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return er(n)},Pn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=Jo(n,Ko(r)),o=!0)}),o?er(n):{x:0,y:0,width:0,height:0}},jo=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,u=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:m=!0,hidden:y=!1}=f;if(a&&!m||y)continue;let b=p.width??f.width??f.initialWidth??0,g=p.height??f.height??f.initialHeight??0,{x:_,y:h}=f.internals.positionAbsolute,w=vl(s,c,l,u,_,h,b,g),x=b*g,C=i&&w>0;(!f.internals.handleBounds||C||w>=x||f.dragging)&&d.push(f)}return d},bl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function vb(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=dt(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function yl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=vb(e,a),c=Pn(s),l=ro(c,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function Bi({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:l}=s?s.internals.positionAbsolute:{x:0,y:0},u=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",Je.error005());else{let p=s.measured.width,m=s.measured.height;p&&m&&(d=[[c,l],[c+p,l+m]])}else s&&rn(a.extent)&&(d=[[a.extent[0][0]+c,a.extent[0][1]+l],[a.extent[1][0]+c,a.extent[1][1]+l]]);let f=rn(d)?nn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",Je.error015()),{position:{x:f.x-c+(a.measured.width??0)*u[0],y:f.y-l+(a.measured.height??0)*u[1]},positionAbsolute:f}}async function xl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),m=!p&&f.parentId&&a.find(y=>y.id===f.parentId);(p||m)&&a.push(f)}let s=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),u=bl(a,c);for(let f of c)s.has(f.id)&&!u.find(m=>m.id===f.id)&&u.push(f);if(!r)return{edges:u,nodes:a};let d=await r({nodes:a,edges:u});return typeof d=="boolean"?d?{edges:u,nodes:a}:{edges:[],nodes:[]}:d}var Mn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),nn=(e={x:0,y:0},t,n)=>({x:Mn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Mn(e.y,t[0][1],t[1][1]-(n?.height??0))});function wl(e,t,n){let{width:o,height:r}=dt(n),{x:i,y:a}=n.internals.positionAbsolute;return nn(e,[[i,a],[i+o,a+r]],t)}var rl=(e,t,n)=>e<t?Mn(Math.abs(e-t),1,t)/t:e>n?-Mn(Math.abs(e-n),1,t)/t:0,Qo=(e,t,n=15,o=40)=>{let r=rl(e.x,o,t.width-o)*n,i=rl(e.y,o,t.height-o)*n;return[r,i]},Jo=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Ri=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),er=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),zn=(e,t=[0,0])=>{let{x:n,y:o}=Li(e)?e.internals.positionAbsolute:no(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Ko=(e,t=[0,0])=>{let{x:n,y:o}=Li(e)?e.internals.positionAbsolute:no(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Wi=(e,t)=>er(Jo(Ri(e),Ri(t))),vl=(e,t,n,o,r,i,a,s)=>{let c=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(c*l)},oo=(e,t)=>vl(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Fi=e=>ot(e.width)&&ot(e.height)&&ot(e.x)&&ot(e.y),ot=e=>!isNaN(e)&&isFinite(e),Vi=(e,t)=>(n,o)=>{},Rn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Dn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?Rn(s,a):s},on=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function _n(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function kb(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=_n(e,n),r=_n(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=_n(e.top??e.y??0,n),r=_n(e.bottom??e.y??0,n),i=_n(e.left??e.x??0,t),a=_n(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Sb(e,t,n,o,r,i){let{x:a,y:s}=on(e,[t,n,o]),{x:c,y:l}=on({x:e.x+e.width,y:e.y+e.height},[t,n,o]),u=r-c,d=i-l;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(u),bottom:Math.floor(d)}}var ro=(e,t,n,o,r,i)=>{let a=kb(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,l=Math.min(s,c),u=Mn(l,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*u,m=n/2-f*u,y=Sb(e,p,m,u,t,n),b={left:Math.min(y.left-a.left,0),top:Math.min(y.top-a.top,0),right:Math.min(y.right-a.right,0),bottom:Math.min(y.bottom-a.bottom,0)};return{x:p-b.left+b.right,y:m-b.top+b.bottom,zoom:u}},An=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function rn(e){return e!=null&&e!=="parent"}function dt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Gi(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Xi(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function qi(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function kl(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function Sl(e){return{...Ai,...e||{}}}function to(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=rt(e),s=Dn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:c,y:l}=n?Rn(s,t):s;return{xSnapped:c,ySnapped:l,...s}}var tr=e=>({width:e.offsetWidth,height:e.offsetHeight}),Yi=e=>e?.getRootNode?.()||window?.document,Cb=["INPUT","SELECT","TEXTAREA"];function Ui(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Cb.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Zi=e=>"clientX"in e,rt=(e,t)=>{let n=Zi(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},il=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...tr(a)}})};function nr({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+r*.375+a*.375+n*.125,l=t*.125+i*.375+s*.375+o*.125,u=Math.abs(c-e),d=Math.abs(l-t);return[c,l,u,d]}function Uo(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function al({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case ee.Left:return[t-Uo(t-o,i),n];case ee.Right:return[t+Uo(o-t,i),n];case ee.Top:return[t,n-Uo(n-r,i)];case ee.Bottom:return[t,n+Uo(r-n,i)]}}function or({sourceX:e,sourceY:t,sourcePosition:n=ee.Bottom,targetX:o,targetY:r,targetPosition:i=ee.Top,curvature:a=.25}){let[s,c]=al({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[l,u]=al({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,p,m]=nr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:c,targetControlX:l,targetControlY:u});return[`M${e},${t} C${s},${c} ${l},${u} ${o},${r}`,d,f,p,m]}function Ki({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function Cl({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function _l({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=Jo(Ko(e),Ko(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return oo(a,er(i))>0}var _b=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,Eb=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),El=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Je.error006()),t;let o=n.getEdgeId||_b,r;return $i(e)?r={...e}:r={...e,id:o(e)},Eb(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function rr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=Ki({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var sl={[ee.Left]:{x:-1,y:0},[ee.Right]:{x:1,y:0},[ee.Top]:{x:0,y:-1},[ee.Bottom]:{x:0,y:1}},Nb=({source:e,sourcePosition:t=ee.Bottom,target:n})=>t===ee.Left||t===ee.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},ll=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Mb({source:e,sourcePosition:t=ee.Bottom,target:n,targetPosition:o=ee.Top,center:r,offset:i,stepPosition:a}){let s=sl[t],c=sl[o],l={x:e.x+s.x*i,y:e.y+s.y*i},u={x:n.x+c.x*i,y:n.y+c.y*i},d=Nb({source:l,sourcePosition:t,target:u}),f=d.x!==0?"x":"y",p=d[f],m=[],y,b,g={x:0,y:0},_={x:0,y:0},[,,h,w]=Ki({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f==="x"?(y=r.x??l.x+(u.x-l.x)*a,b=r.y??(l.y+u.y)/2):(y=r.x??(l.x+u.x)/2,b=r.y??l.y+(u.y-l.y)*a);let M=[{x:y,y:l.y},{x:y,y:u.y}],R=[{x:l.x,y:b},{x:u.x,y:b}];s[f]===p?m=f==="x"?M:R:m=f==="x"?R:M}else{let M=[{x:l.x,y:u.y}],R=[{x:u.x,y:l.y}];if(f==="x"?m=s.x===p?R:M:m=s.y===p?M:R,t===o){let v=Math.abs(e[f]-n[f]);if(v<=i){let E=Math.min(i-1,i-v);s[f]===p?g[f]=(l[f]>e[f]?-1:1)*E:_[f]=(u[f]>n[f]?-1:1)*E}}if(t!==o){let v=f==="x"?"y":"x",E=s[f]===c[v],N=l[v]>u[v],S=l[v]<u[v];(s[f]===1&&(!E&&N||E&&S)||s[f]!==1&&(!E&&S||E&&N))&&(m=f==="x"?M:R)}let W={x:l.x+g.x,y:l.y+g.y},P={x:u.x+_.x,y:u.y+_.y},H=Math.max(Math.abs(W.x-m[0].x),Math.abs(P.x-m[0].x)),I=Math.max(Math.abs(W.y-m[0].y),Math.abs(P.y-m[0].y));H>=I?(y=(W.x+P.x)/2,b=m[0].y):(y=m[0].x,b=(W.y+P.y)/2)}let x={x:l.x+g.x,y:l.y+g.y},C={x:u.x+_.x,y:u.y+_.y};return[[e,...x.x!==m[0].x||x.y!==m[0].y?[x]:[],...m,...C.x!==m[m.length-1].x||C.y!==m[m.length-1].y?[C]:[],n],y,b,h,w]}function Ib(e,t,n,o){let r=Math.min(ll(e,t)/2,ll(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let l=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+r*l},${a}Q ${i},${a} ${i},${a+r*u}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+r*c}Q ${i},${a} ${i+r*s},${a}`}function io({sourceX:e,sourceY:t,sourcePosition:n=ee.Bottom,targetX:o,targetY:r,targetPosition:i=ee.Top,borderRadius:a=5,centerX:s,centerY:c,offset:l=20,stepPosition:u=.5}){let[d,f,p,m,y]=Mb({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:c},offset:l,stepPosition:u}),b=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)b+=Ib(d[g-1],d[g],d[g+1],a);return b+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[b,f,p,m,y]}function cl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Nl(e){let{sourceNode:t,targetNode:n}=e;if(!cl(t)||!cl(n))return null;let o=t.internals.handleBounds||ul(t.handles),r=n.internals.handleBounds||ul(n.handles),i=dl(o?.source??[],e.sourceHandle),a=dl(e.connectionMode===Tt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",Je.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||ee.Bottom,c=a?.position||ee.Top,l=$t(t,i,s),u=$t(n,a,c);return{sourceX:l.x,sourceY:l.y,targetX:u.x,targetY:u.y,sourcePosition:s,targetPosition:c}}function ul(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function $t(e,t,n=ee.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??dt(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case ee.Top:return{x:r+a/2,y:i};case ee.Right:return{x:r+a,y:i+s/2};case ee.Bottom:return{x:r+a/2,y:i+s};case ee.Left:return{x:r,y:i+s/2}}}function dl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function ir(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Ml(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=ir(c,t);i.has(l)||(a.push({id:l,color:c.color||n,...c}),i.add(l))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var Il=1e3,Pb=10,ji={nodeOrigin:[0,0],nodeExtent:In,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},zb={...ji,checkEquality:!0};function Qi(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function Pl(e,t,n){let o=Qi(ji,n);for(let r of e.values())if(r.parentId)ea(r,e,t,o);else{let i=no(r,o.nodeOrigin),a=rn(r.extent)?r.extent:o.nodeExtent,s=nn(i,a,dt(r));r.internals.positionAbsolute=s}}function Rb(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function Ji(e){return e==="manual"}function ar(e,t,n,o={}){let r=Qi(zb,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!Ji(r.zIndexMode)?Il:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let u of e){let d=a.get(u.id);if(r.checkEquality&&u===d?.internals.userNode)t.set(u.id,d);else{let f=no(u,r.nodeOrigin),p=rn(u.extent)?u.extent:r.nodeExtent,m=nn(f,p,dt(u));d={...r.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:m,handleBounds:Rb(u,d),z:zl(u,s,r.zIndexMode),userNode:u}},t.set(u.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),u.parentId&&ea(d,t,n,o,i),l||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function Db(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function ea(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=Qi(ji,o),l=e.parentId,u=t.get(l);if(!u){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Db(e,n),r&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++r.i,u.internals.z=u.internals.z+r.i*Pb),r&&u.internals.rootParentIndex!==void 0&&(r.i=u.internals.rootParentIndex);let d=i&&!Ji(c)?Il:0,{x:f,y:p,z:m}=Ab(e,u,a,s,d,c),{positionAbsolute:y}=e.internals,b=f!==y.x||p!==y.y;(b||m!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:b?{x:f,y:p}:y,z:m}})}function zl(e,t,n){let o=ot(e.zIndex)?e.zIndex:0;return Ji(n)?o:o+(e.selected?t:0)}function Ab(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,c=dt(e),l=no(e,n),u=rn(e.extent)?nn(l,e.extent,c):l,d=nn({x:a+u.x,y:s+u.y},o,c);e.extent==="parent"&&(d=wl(d,c,t));let f=zl(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function sr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??zn(s),l=Wi(c,a.rect);i.set(a.parentId,{expandedRect:l,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let l=s.internals.positionAbsolute,u=dt(s),d=s.origin??o,f=a.x<l.x?Math.round(Math.abs(l.x-a.x)):0,p=a.y<l.y?Math.round(Math.abs(l.y-a.y)):0,m=Math.max(u.width,Math.round(a.width)),y=Math.max(u.height,Math.round(a.height)),b=(m-u.width)*d[0],g=(y-u.height)*d[1];(f>0||p>0||b||g)&&(r.push({id:c,type:"position",position:{x:s.position.x-f+b,y:s.position.y-p+g}}),n.get(c)?.forEach(_=>{e.some(h=>h.id===_.id)||r.push({id:_.id,type:"position",position:{x:_.position.x+f,y:_.position.y+p}})})),(u.width<a.width||u.height<a.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:m+(f?d[0]*f-b:0),height:y+(p?d[1]*p-g:0)}})}),r}function Rl(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let l=[],u=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(u.transform),f=[];for(let p of e.values()){let m=t.get(p.id);if(!m)continue;if(m.hidden){t.set(m.id,{...m,internals:{...m.internals,handleBounds:void 0}}),c=!0;continue}let y=tr(p.nodeElement),b=m.measured.width!==y.width||m.measured.height!==y.height;if(!!(y.width&&y.height&&(b||!m.internals.handleBounds||p.force))){let _=p.nodeElement.getBoundingClientRect(),h=rn(m.extent)?m.extent:i,{positionAbsolute:w}=m.internals;if(m.parentId&&m.extent==="parent"){let C=t.get(m.parentId);C&&(w=wl(w,y,C))}else h&&(w=nn(w,h,y));let x={...m,measured:y,internals:{...m.internals,positionAbsolute:w,handleBounds:{source:il("source",p.nodeElement,_,d,m.id),target:il("target",p.nodeElement,_,d,m.id)}}};t.set(m.id,x),m.parentId&&ea(x,t,n,{nodeOrigin:r,zIndexMode:a}),c=!0,b&&(l.push({id:m.id,type:"dimensions",dimensions:y}),m.expandParent&&m.parentId&&f.push({id:m.id,parentId:m.parentId,rect:zn(x,r)}))}}if(f.length>0){let p=sr(f,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function Dl({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function fl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let c=o.get(a)||new Map;if(o.set(a,c.set(n,t)),i){a=`${r}-${e}-${i}`;let l=o.get(a)||new Map;o.set(a,l.set(n,t))}}function ta(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},l=`${r}-${a}--${i}-${s}`,u=`${i}-${s}--${r}-${a}`;fl("source",c,u,e,r,a),fl("target",c,l,e,i,s),t.set(o.id,o)}}function Al(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Al(n,t):!1}function pl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function Ob(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!Al(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function Ii({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&r.push({...c,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Tb({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=Rn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function Ol({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,c=!1,l={x:0,y:0},u=null,d=!1,f=null,p=!1,m=!1,y=null;function b({noDragClassName:_,handleSelector:h,domNode:w,isSelectable:x,nodeId:C,nodeClickDistance:k=0}){f=Le(w);function M({x:H,y:I}){let{nodeLookup:v,nodeExtent:E,snapGrid:N,snapToGrid:S,nodeOrigin:z,onNodeDrag:A,onSelectionDrag:B,onError:F,updateNodePositions:V}=t();i={x:H,y:I};let X=!1,U=s.size>1,Q=U&&E?Ri(Pn(s)):null,q=U&&S?Tb({dragItems:s,snapGrid:N,x:H,y:I}):null;for(let[$,D]of s){if(!v.has($))continue;let Y={x:H-D.distance.x,y:I-D.distance.y};S&&(Y=q?{x:Math.round(Y.x+q.x),y:Math.round(Y.y+q.y)}:Rn(Y,N));let J=null;if(U&&E&&!D.extent&&Q){let{positionAbsolute:te}=D.internals,se=te.x-Q.x+E[0][0],ce=te.x+D.measured.width-Q.x2+E[1][0],pe=te.y-Q.y+E[0][1],Oe=te.y+D.measured.height-Q.y2+E[1][1];J=[[se,pe],[ce,Oe]]}let{position:oe,positionAbsolute:j}=Bi({nodeId:$,nextPosition:Y,nodeLookup:v,nodeExtent:J||E,nodeOrigin:z,onError:F});X=X||D.position.x!==oe.x||D.position.y!==oe.y,D.position=oe,D.internals.positionAbsolute=j}if(m=m||X,!!X&&(V(s,!0),y&&(o||A||!C&&B))){let[$,D]=Ii({nodeId:C,dragItems:s,nodeLookup:v});o?.(y,s,$,D),A?.(y,$,D),C||B?.(y,D)}}async function R(){if(!u)return;let{transform:H,panBy:I,autoPanSpeed:v,autoPanOnNodeDrag:E}=t();if(!E){c=!1,cancelAnimationFrame(a);return}let[N,S]=Qo(l,u,v);(N!==0||S!==0)&&(i.x=(i.x??0)-N/H[2],i.y=(i.y??0)-S/H[2],await I({x:N,y:S})&&M(i)),a=requestAnimationFrame(R)}function W(H){let{nodeLookup:I,multiSelectionActive:v,nodesDraggable:E,transform:N,snapGrid:S,snapToGrid:z,selectNodesOnDrag:A,onNodeDragStart:B,onSelectionDragStart:F,unselectNodesAndEdges:V}=t();d=!0,(!A||!x)&&!v&&C&&(I.get(C)?.selected||V()),x&&A&&C&&e?.(C);let X=to(H.sourceEvent,{transform:N,snapGrid:S,snapToGrid:z,containerBounds:u});if(i=X,s=Ob(I,E,X,C),s.size>0&&(n||B||!C&&F)){let[U,Q]=Ii({nodeId:C,dragItems:s,nodeLookup:I});n?.(H.sourceEvent,s,U,Q),B?.(H.sourceEvent,U,Q),C||F?.(H.sourceEvent,Q)}}let P=ti().clickDistance(k).on("start",H=>{let{domNode:I,nodeDragThreshold:v,transform:E,snapGrid:N,snapToGrid:S}=t();u=I?.getBoundingClientRect()||null,p=!1,m=!1,y=H.sourceEvent,v===0&&W(H),i=to(H.sourceEvent,{transform:E,snapGrid:N,snapToGrid:S,containerBounds:u}),l=rt(H.sourceEvent,u)}).on("drag",H=>{let{autoPanOnNodeDrag:I,transform:v,snapGrid:E,snapToGrid:N,nodeDragThreshold:S,nodeLookup:z}=t(),A=to(H.sourceEvent,{transform:v,snapGrid:E,snapToGrid:N,containerBounds:u});if(y=H.sourceEvent,(H.sourceEvent.type==="touchmove"&&H.sourceEvent.touches.length>1||C&&!z.has(C))&&(p=!0),!p){if(!c&&I&&d&&(c=!0,R()),!d){let B=rt(H.sourceEvent,u),F=B.x-l.x,V=B.y-l.y;Math.sqrt(F*F+V*V)>S&&W(H)}(i.x!==A.xSnapped||i.y!==A.ySnapped)&&s&&d&&(l=rt(H.sourceEvent,u),M(A))}}).on("end",H=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:I,updateNodePositions:v,onNodeDragStop:E,onSelectionDragStop:N}=t();if(m&&(v(s,!1),m=!1),r||E||!C&&N){let[S,z]=Ii({nodeId:C,dragItems:s,nodeLookup:I,dragging:!1});r?.(H.sourceEvent,s,S,z),E?.(H.sourceEvent,S,z),C||N?.(H.sourceEvent,z)}}}).filter(H=>{let I=H.target;return!H.button&&(!_||!pl(I,`.${_}`,w))&&(!h||pl(I,h,w))});f.call(P)}function g(){f?.on(".drag",null)}return{update:b,destroy:g}}function $b(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())oo(r,zn(i))>0&&o.push(i);return o}var Lb=250;function Hb(e,t,n,o){let r=[],i=1/0,a=$b(e,n,t+Lb);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:u,y:d}=$t(s,l,l.position,!0),f=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...l,x:u,y:d}],i=f):f===i&&r.push({...l,x:u,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(c=>c.type===s)??r[0]}return r[0]}function Tl(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(l=>l.id===n):s?.[0])??null;return c&&i?{...c,...$t(a,c,c.position,!0)}:c}function $l(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Bb(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var Ll=()=>!0;function Wb(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:l,autoPanOnConnect:u,flowId:d,panBy:f,cancelConnection:p,onConnectStart:m,onConnect:y,onConnectEnd:b,isValidConnection:g=Ll,onReconnectEnd:_,updateConnection:h,getTransform:w,getFromHandle:x,autoPanSpeed:C,dragThreshold:k=1,handleDomNode:M}){let R=Yi(e.target),W=0,P,{x:H,y:I}=rt(e),v=$l(i,M),E=s?.getBoundingClientRect(),N=!1;if(!E||!v)return;let S=Tl(r,v,o,c,t);if(!S)return;let z=rt(e,E),A=!1,B=null,F=!1,V=null;function X(){if(!u||!E)return;let[oe,j]=Qo(z,E,C);f({x:oe,y:j}),W=requestAnimationFrame(X)}let U={...S,nodeId:r,type:v,position:S.position},Q=c.get(r),$={inProgress:!0,isValid:null,from:$t(Q,U,ee.Left,!0),fromHandle:U,fromPosition:U.position,fromNode:Q,to:z,toHandle:null,toPosition:ol[U.position],toNode:null,pointer:z};function D(){N=!0,h($),m?.(e,{nodeId:r,handleId:o,handleType:v})}k===0&&D();function Y(oe){if(!N){let{x:Oe,y:at}=rt(oe),tt=Oe-H,ue=at-I;if(!(tt*tt+ue*ue>k*k))return;D()}if(!x()||!U){J(oe);return}let j=w();z=rt(oe,E),P=Hb(Dn(z,j,!1,[1,1]),n,c,U),A||(X(),A=!0);let te=Hl(oe,{handle:P,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:g,doc:R,lib:l,flowId:d,nodeLookup:c});V=te.handleDomNode,B=te.connection,F=Bb(!!P,te.isValid);let se=c.get(r),ce=se?$t(se,U,ee.Left,!0):$.from,pe={...$,from:ce,isValid:F,to:te.toHandle&&F?on({x:te.toHandle.x,y:te.toHandle.y},j):z,toHandle:te.toHandle,toPosition:F&&te.toHandle?te.toHandle.position:ol[U.position],toNode:te.toHandle?c.get(te.toHandle.nodeId):null,pointer:z};h(pe),$=pe}function J(oe){if(!("touches"in oe&&oe.touches.length>0)){if(N){(P||V)&&B&&F&&y?.(B);let{inProgress:j,...te}=$,se={...te,toPosition:$.toHandle?$.toPosition:null};b?.(oe,se),i&&_?.(oe,se)}p(),cancelAnimationFrame(W),A=!1,F=!1,B=null,V=null,R.removeEventListener("mousemove",Y),R.removeEventListener("mouseup",J),R.removeEventListener("touchmove",Y),R.removeEventListener("touchend",J)}}R.addEventListener("mousemove",Y),R.addEventListener("mouseup",J),R.addEventListener("touchmove",Y),R.addEventListener("touchend",J)}function Hl(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:l=Ll,nodeLookup:u}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:m}=rt(e),y=a.elementFromPoint(p,m),b=y?.classList.contains(`${s}-flow__handle`)?y:f,g={handleDomNode:b,isValid:!1,connection:null,toHandle:null};if(b){let _=$l(void 0,b),h=b.getAttribute("data-nodeid"),w=b.getAttribute("data-handleid"),x=b.classList.contains("connectable"),C=b.classList.contains("connectableend");if(!h||!_)return g;let k={source:d?h:o,sourceHandle:d?w:r,target:d?o:h,targetHandle:d?r:w};g.connection=k;let R=x&&C&&(n===Tt.Strict?d&&_==="source"||!d&&_==="target":h!==o||w!==r);g.isValid=R&&l(k),g.toHandle=Tl(h,_,w,u,n,!0)}return g}var lr={onPointerDown:Wb,isValid:Hl};function Bl({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=Le(e);function i({translateExtent:s,width:c,height:l,zoomStep:u=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let m=h=>{if(h.sourceEvent.type!=="wheel"||!t)return;let w=n(),x=h.sourceEvent.ctrlKey&&An()?10:1,C=-h.sourceEvent.deltaY*(h.sourceEvent.deltaMode===1?.05:h.sourceEvent.deltaMode?1:.002)*u,k=w[2]*Math.pow(2,C*x);t.scaleTo(k)},y=[0,0],b=h=>{(h.sourceEvent.type==="mousedown"||h.sourceEvent.type==="touchstart")&&(y=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY])},g=h=>{let w=n();if(h.sourceEvent.type!=="mousemove"&&h.sourceEvent.type!=="touchmove"||!t)return;let x=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY],C=[x[0]-y[0],x[1]-y[1]];y=x;let k=o()*Math.max(w[2],Math.log(w[2]))*(p?-1:1),M={x:w[0]-C[0]*k,y:w[1]-C[1]*k},R=[[0,0],[c,l]];t.setViewportConstrained({x:M.x,y:M.y,zoom:w[2]},R,s)},_=Mi().on("start",b).on("zoom",d?g:null).on("zoom.wheel",f?m:null);r.call(_,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Ge}}var cr=e=>({x:e.x,y:e.y,zoom:e.k}),Pi=({x:e,y:t,zoom:n})=>eo.translate(e,t).scale(n),En=(e,t)=>e.target.closest(`.${t}`),Wl=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Fb=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,zi=(e,t=0,n=Fb,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},Fl=e=>{let t=e.ctrlKey&&An()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Vb({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:l}){return u=>{if(En(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(u.ctrlKey&&a){let b=Ge(u),g=Fl(u),_=d*Math.pow(2,g);o.scaleTo(n,_,b,u);return}let f=u.deltaMode===1?20:1,p=r===It.Vertical?0:u.deltaX*f,m=r===It.Horizontal?0:u.deltaY*f;!An()&&u.shiftKey&&r!==It.Vertical&&(p=u.deltaY*f,m=0),o.translateBy(n,-(p/d)*i,-(m/d)*i,{internal:!0});let y=cr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,y):(e.isPanScrolling=!0,s?.(u,y)),e.panScrollTimeout=setTimeout(()=>{l?.(u,y),e.isPanScrolling=!1},150)}}function Gb({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=En(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function Xb({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=cr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function qb({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&Wl(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,cr(i.transform))}}function Yb({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Wl(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=cr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function Ub({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:l,connectionInProgress:u}){return d=>{let f=e||t,p=n&&d.ctrlKey,m=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(En(d,`${l}-flow__node`)||En(d,`${l}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||u&&!m||En(d,s)&&m||En(d,c)&&(!m||r&&m&&!e)||!n&&d.ctrlKey&&m)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&m||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let y=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||m)&&y}}function Vl({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),d=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(I=>{let v=I[0];v&&(d=[[0,0],[v.contentRect.width,v.contentRect.height]])}):null)?.observe(e);let p=Mi().extent(()=>d).scaleExtent([t,n]).translateExtent(o),m=Le(e).call(p);w({x:r.x,y:r.y,zoom:Mn(r.zoom,t,n)},[[0,0],[u.width,u.height]],o);let y=m.on("wheel.zoom"),b=m.on("dblclick.zoom");p.wheelDelta(Fl);async function g(I,v){return m?new Promise(E=>{p?.interpolate(v?.interpolate==="linear"?vn:kn).transform(zi(m,v?.duration,v?.ease,()=>E(!0)),I)}):!1}function _({noWheelClassName:I,noPanClassName:v,onPaneContextMenu:E,userSelectionActive:N,panOnScroll:S,panOnDrag:z,panOnScrollMode:A,panOnScrollSpeed:B,preventScrolling:F,zoomOnPinch:V,zoomOnScroll:X,zoomOnDoubleClick:U,zoomActivationKeyPressed:Q,lib:q,onTransformChange:$,connectionInProgress:D,paneClickDistance:Y,selectionOnDrag:J}){N&&!l.isZoomingOrPanning&&h();let oe=S&&!Q&&!N;p.clickDistance(J?1/0:!ot(Y)||Y<0?0:Y);let j=oe?Vb({zoomPanValues:l,noWheelClassName:I,d3Selection:m,d3Zoom:p,panOnScrollMode:A,panOnScrollSpeed:B,zoomOnPinch:V,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):Gb({noWheelClassName:I,preventScrolling:F,d3ZoomHandler:y});m.on("wheel.zoom",j,{passive:!1});let te=Xb({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:a});p.on("start",te);let se=qb({zoomPanValues:l,panOnDrag:z,onPaneContextMenu:!!E,onPanZoom:i,onTransformChange:$});p.on("zoom",se);let ce=Yb({zoomPanValues:l,panOnDrag:z,panOnScroll:S,onPaneContextMenu:E,onPanZoomEnd:s,onDraggingChange:c});p.on("end",ce);let pe=Ub({zoomActivationKeyPressed:Q,panOnDrag:z,zoomOnScroll:X,panOnScroll:S,zoomOnDoubleClick:U,zoomOnPinch:V,userSelectionActive:N,noPanClassName:v,noWheelClassName:I,lib:q,connectionInProgress:D});p.filter(pe),U?m.on("dblclick.zoom",b):m.on("dblclick.zoom",null)}function h(){p.on("zoom",null)}async function w(I,v,E){let N=Pi(I),S=p?.constrain()(N,v,E);return S&&await g(S),S}async function x(I,v){let E=Pi(I);return await g(E,v),E}function C(I){if(m){let v=Pi(I),E=m.property("__zoom");(E.k!==I.zoom||E.x!==I.x||E.y!==I.y)&&p?.transform(m,v,null,{sync:!0})}}function k(){let I=m?Ni(m.node()):{x:0,y:0,k:1};return{x:I.x,y:I.y,zoom:I.k}}async function M(I,v){return m?new Promise(E=>{p?.interpolate(v?.interpolate==="linear"?vn:kn).scaleTo(zi(m,v?.duration,v?.ease,()=>E(!0)),I)}):!1}async function R(I,v){return m?new Promise(E=>{p?.interpolate(v?.interpolate==="linear"?vn:kn).scaleBy(zi(m,v?.duration,v?.ease,()=>E(!0)),I)}):!1}function W(I){p?.scaleExtent(I)}function P(I){p?.translateExtent(I)}function H(I){let v=!ot(I)||I<0?0:I;p?.clickDistance(v)}return{update:_,destroy:h,setViewport:x,setViewportConstrained:w,getViewport:k,scaleTo:M,scaleBy:R,setScaleExtent:W,setTranslateExtent:P,syncViewport:C,setClickDistance:H}}var Lt;(function(e){e.Line="line",e.Handle="handle"})(Lt||(Lt={}));function Zb({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function ml(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function At(e,t){return Math.max(0,t-e)}function Ot(e,t){return Math.max(0,e-t)}function Zo(e,t,n){return Math.max(0,t-e,e-n)}function gl(e,t){return e?!t:t}function Kb(e,t,n,o,r,i,a,s){let{affectsX:c,affectsY:l}=t,{isHorizontal:u,isVertical:d}=t,f=u&&d,{xSnapped:p,ySnapped:m}=n,{minWidth:y,maxWidth:b,minHeight:g,maxHeight:_}=o,{x:h,y:w,width:x,height:C,aspectRatio:k}=e,M=Math.floor(u?p-e.pointerX:0),R=Math.floor(d?m-e.pointerY:0),W=x+(c?-M:M),P=C+(l?-R:R),H=-i[0]*x,I=-i[1]*C,v=Zo(W,y,b),E=Zo(P,g,_);if(a){let z=0,A=0;c&&M<0?z=At(h+M+H,a[0][0]):!c&&M>0&&(z=Ot(h+W+H,a[1][0])),l&&R<0?A=At(w+R+I,a[0][1]):!l&&R>0&&(A=Ot(w+P+I,a[1][1])),v=Math.max(v,z),E=Math.max(E,A)}if(s){let z=0,A=0;c&&M>0?z=Ot(h+M,s[0][0]):!c&&M<0&&(z=At(h+W,s[1][0])),l&&R>0?A=Ot(w+R,s[0][1]):!l&&R<0&&(A=At(w+P,s[1][1])),v=Math.max(v,z),E=Math.max(E,A)}if(r){if(u){let z=Zo(W/k,g,_)*k;if(v=Math.max(v,z),a){let A=0;!c&&!l||c&&!l&&f?A=Ot(w+I+W/k,a[1][1])*k:A=At(w+I+(c?M:-M)/k,a[0][1])*k,v=Math.max(v,A)}if(s){let A=0;!c&&!l||c&&!l&&f?A=At(w+W/k,s[1][1])*k:A=Ot(w+(c?M:-M)/k,s[0][1])*k,v=Math.max(v,A)}}if(d){let z=Zo(P*k,y,b)/k;if(E=Math.max(E,z),a){let A=0;!c&&!l||l&&!c&&f?A=Ot(h+P*k+H,a[1][0])/k:A=At(h+(l?R:-R)*k+H,a[0][0])/k,E=Math.max(E,A)}if(s){let A=0;!c&&!l||l&&!c&&f?A=At(h+P*k,s[1][0])/k:A=Ot(h+(l?R:-R)*k,s[0][0])/k,E=Math.max(E,A)}}}R=R+(R<0?E:-E),M=M+(M<0?v:-v),r&&(f?W>P*k?R=(gl(c,l)?-M:M)/k:M=(gl(c,l)?-R:R)*k:u?(R=M/k,l=c):(M=R*k,c=l));let N=c?h+M:h,S=l?w+R:w;return{width:x+(c?-M:M),height:C+(l?-R:R),x:i[0]*M*(c?-1:1)+N,y:i[1]*R*(l?-1:1)+S}}var Gl={width:0,height:0,x:0,y:0},jb={...Gl,pointerX:0,pointerY:0,aspectRatio:1};function Qb(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[o-s,r-c],[o+i-s,r+a-c]]}function Xl({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=Le(e),a={controlDirection:ml("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:l,boundaries:u,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:m,onResizeEnd:y,shouldResize:b}){let g={...Gl},_={...jb};a={boundaries:u,resizeDirection:f,keepAspectRatio:d,controlDirection:ml(l)};let h,w=null,x=[],C,k,M,R=!1,W=ti().on("start",P=>{let{nodeLookup:H,transform:I,snapGrid:v,snapToGrid:E,nodeOrigin:N,paneDomNode:S}=n();if(h=H.get(t),!h)return;w=S?.getBoundingClientRect()??null;let{xSnapped:z,ySnapped:A}=to(P.sourceEvent,{transform:I,snapGrid:v,snapToGrid:E,containerBounds:w});g={width:h.measured.width??0,height:h.measured.height??0,x:h.position.x??0,y:h.position.y??0},_={...g,pointerX:z,pointerY:A,aspectRatio:g.width/g.height},C=void 0,k=rn(h.extent)?h.extent:void 0,h.parentId&&(h.extent==="parent"||h.expandParent)&&(C=H.get(h.parentId)),C&&h.extent==="parent"&&(k=[[0,0],[C.measured.width,C.measured.height]]),x=[],M=void 0;for(let[B,F]of H)if(F.parentId===t&&(x.push({id:B,position:{...F.position},extent:F.extent}),F.extent==="parent"||F.expandParent)){let V=Qb(F,h,F.origin??N);M?M=[[Math.min(V[0][0],M[0][0]),Math.min(V[0][1],M[0][1])],[Math.max(V[1][0],M[1][0]),Math.max(V[1][1],M[1][1])]]:M=V}p?.(P,{...g})}).on("drag",P=>{let{transform:H,snapGrid:I,snapToGrid:v,nodeOrigin:E}=n(),N=to(P.sourceEvent,{transform:H,snapGrid:I,snapToGrid:v,containerBounds:w}),S=[];if(!h)return;let{x:z,y:A,width:B,height:F}=g,V={},X=h.origin??E,{width:U,height:Q,x:q,y:$}=Kb(_,a.controlDirection,N,a.boundaries,a.keepAspectRatio,X,k,M),D=U!==B,Y=Q!==F,J=q!==z&&D,oe=$!==A&&Y;if(!J&&!oe&&!D&&!Y)return;if((J||oe||X[0]===1||X[1]===1)&&(V.x=J?q:g.x,V.y=oe?$:g.y,g.x=V.x,g.y=V.y,x.length>0)){let ce=q-z,pe=$-A;for(let Oe of x)Oe.position={x:Oe.position.x-ce+X[0]*(U-B),y:Oe.position.y-pe+X[1]*(Q-F)},S.push(Oe)}if((D||Y)&&(V.width=D&&(!a.resizeDirection||a.resizeDirection==="horizontal")?U:g.width,V.height=Y&&(!a.resizeDirection||a.resizeDirection==="vertical")?Q:g.height,g.width=V.width,g.height=V.height),C&&h.expandParent){let ce=X[0]*(V.width??0);V.x&&V.x<ce&&(g.x=ce,_.x=_.x-(V.x-ce));let pe=X[1]*(V.height??0);V.y&&V.y<pe&&(g.y=pe,_.y=_.y-(V.y-pe))}let j=Zb({width:g.width,prevWidth:B,height:g.height,prevHeight:F,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),te={...g,direction:j};b?.(P,te)!==!1&&(R=!0,m?.(P,te),o(V,S))}).on("end",P=>{R&&(y?.(P,{...g}),r?.({...g}),R=!1)});i.call(W)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var rc=ja(require("react"),1),ic=ja(Jl(),1);var tc={},ec=e=>{let t,n=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(tc.env?tc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},nc=e=>e?ec(e):ec;var{useDebugValue:h0}=rc.default,{useSyncExternalStoreWithSelector:b0}=ic.default,y0=e=>e;function oa(e,t=y0,n){let o=b0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return h0(o),o}var oc=(e,t)=>{let n=nc(e),o=(r,i=t)=>oa(n,r,i);return Object.assign(o,n),o},ac=(e,t)=>e?oc(e,t):oc;function ve(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var x0=require("react-dom"),mr=(0,T.createContext)(null),w0=mr.Provider,Dc=Je.error001("react");function de(e,t){let n=(0,T.useContext)(mr);if(n===null)throw new Error(Dc);return oa(n,e,t)}function ye(){let e=(0,T.useContext)(mr);if(e===null)throw new Error(Dc);return(0,T.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var sc={display:"none"},v0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Ac="react-flow__node-desc",Oc="react-flow__edge-desc",k0="react-flow__aria-live",S0=e=>e.ariaLiveMessage,C0=e=>e.ariaLabelConfig;function _0({rfId:e}){let t=de(S0);return(0,L.jsx)("div",{id:`${k0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:v0,children:t})}function E0({rfId:e,disableKeyboardA11y:t}){let n=de(C0);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{id:`${Ac}-${e}`,style:sc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,L.jsx)("div",{id:`${Oc}-${e}`,style:sc,children:n["edge.a11yDescription.default"]}),!t&&(0,L.jsx)(_0,{rfId:e})]})}var gr=(0,T.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,L.jsx)("div",{className:Ce(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});gr.displayName="Panel";var lc="https://reactflow.dev?utm_source=attribution";function N0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,L.jsx)(gr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${lc}`,children:(0,L.jsx)("a",{href:lc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var M0=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},dr=e=>e.id;function I0(e,t){return ve(e.selectedNodes.map(dr),t.selectedNodes.map(dr))&&ve(e.selectedEdges.map(dr),t.selectedEdges.map(dr))}function P0({onSelectionChange:e}){let t=ye(),{selectedNodes:n,selectedEdges:o}=de(M0,I0);return(0,T.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var z0=e=>!!e.onSelectionChangeHandlers;function R0({onSelectionChange:e}){let t=de(z0);return e||t?(0,L.jsx)(P0,{onSelectionChange:e}):null}var Tc=[0,0],D0={x:0,y:0,zoom:1},A0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],cc=[...A0,"rfId"],O0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),uc={translateExtent:In,nodeOrigin:Tc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function T0(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=de(O0,ve),l=ye();(0,T.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=uc,s()}),[]);let u=(0,T.useRef)(uc);return(0,T.useEffect)(()=>{for(let d of cc){let f=e[d],p=u.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?l.setState({ariaLabelConfig:Sl(f)}):d==="fitView"?l.setState({fitViewQueued:f}):d==="fitViewOptions"?l.setState({fitViewOptions:f}):l.setState({[d]:f})))}u.current=e},cc.map(d=>e[d])),null}function dc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function $0(e){let[t,n]=(0,T.useState)(e==="system"?null:e);return(0,T.useEffect)(()=>{if(e!=="system"){n(e);return}let o=dc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:dc()?.matches?"dark":"light"}var fc=typeof document<"u"?document:null;function ao(e=null,t={target:fc,actInsideInputWithModifier:!0}){let[n,o]=(0,T.useState)(!1),r=(0,T.useRef)(!1),i=(0,T.useRef)(new Set([])),[a,s]=(0,T.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),u=l.reduce((d,f)=>d.concat(...f),[]);return[l,u]}return[[],[]]},[e]);return(0,T.useEffect)(()=>{let c=t?.target??fc,l=t?.actInsideInputWithModifier??!0;if(e!==null){let u=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&Ui(p))return!1;let y=mc(p.code,s);if(i.current.add(p[y]),pc(a,i.current,!1)){let b=p.composedPath?.()?.[0]||p.target,g=b?.nodeName==="BUTTON"||b?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},d=p=>{let m=mc(p.code,s);pc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[m]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",u),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",u),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function pc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function mc(e,t){return t.includes(e)?"code":"key"}var L0=()=>{let e=ye();return(0,T.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=ro(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),l={x:t.x-s,y:t.y-c},u=n.snapGrid??r,d=n.snapToGrid??i;return Dn(l,o,d,u)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=on(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function $c(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)H0(c,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function H0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Lc(e,t){return $c(e,t)}function Hc(e,t){return $c(e,t)}function an(e,t){return{id:e,type:"select",selected:t}}function Tn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(an(i.id,a)))}return o}function gc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function hc(e){return{id:e.id,type:"remove"}}var B0=Vi("React Flow","https://reactflow.dev/");function W0(e,t,n={}){return El(e,t,{...n,onError:n.onError??B0})}var bc=e=>hl(e),F0=e=>$i(e);function Bc(e){return(0,T.forwardRef)(e)}var Wc=typeof window<"u"?T.useLayoutEffect:T.useEffect;function yc(e){let[t,n]=(0,T.useState)(BigInt(0)),[o]=(0,T.useState)(()=>V0(()=>n(r=>r+BigInt(1))));return Wc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function V0(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Fc=(0,T.createContext)(null);function G0({children:e}){let t=ye(),n=(0,T.useCallback)(s=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:u,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:m}=t.getState(),y=c;for(let g of s)y=typeof g=="function"?g(y):g;let b=gc({items:y,lookup:f});for(let g of m.values())b=g(b);u&&l(y),b.length>0?d?.(b):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:_,setNodes:h}=t.getState();g&&h(_)})},[]),o=yc(n),r=(0,T.useCallback)(s=>{let{edges:c=[],setEdges:l,hasDefaultEdges:u,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let m of s)p=typeof m=="function"?m(p):m;u?l(p):d&&d(gc({items:p,lookup:f}))},[]),i=yc(r),a=(0,T.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,L.jsx)(Fc.Provider,{value:a,children:e})}function X0(){let e=(0,T.useContext)(Fc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var q0=e=>!!e.panZoom;function sa(){let e=L0(),t=ye(),n=X0(),o=de(q0),r=(0,T.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),m=bc(d)?d:f.get(d.id),y=m.parentId?Xi(m.position,m.measured,m.parentId,f,p):m.position,b={...m,position:y,width:m.measured?.width??m.width,height:m.measured?.height??m.height};return zn(b)},l=(d,f,p={replace:!1})=>{a(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&bc(b)?b:{...y,...b}}return y}))},u=(d,f,p={replace:!1})=>{s(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&F0(b)?b:{...y,...b}}return y}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[m,y,b]=p;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:m,y,zoom:b}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:m,onNodesDelete:y,onEdgesDelete:b,triggerNodeChanges:g,triggerEdgeChanges:_,onDelete:h,onBeforeDelete:w}=t.getState(),{nodes:x,edges:C}=await xl({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:m,onBeforeDelete:w}),k=C.length>0,M=x.length>0;if(k){let R=C.map(hc);b?.(C),_(R)}if(M){let R=x.map(hc);y?.(x),g(R)}return(M||k)&&h?.({nodes:x,edges:C}),{deletedNodes:x,deletedEdges:C}},getIntersectingNodes:(d,f=!0,p)=>{let m=Fi(d),y=m?d:c(d),b=p!==void 0;return y?(p||t.getState().nodes).filter(g=>{let _=t.getState().nodeLookup.get(g.id);if(_&&!m&&(g.id===d.id||!_.internals.positionAbsolute))return!1;let h=zn(b?g:_),w=oo(h,y);return f&&w>0||w>=h.width*h.height||w>=y.width*y.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let y=Fi(d)?d:c(d);if(!y)return!1;let b=oo(y,f);return p&&b>0||b>=f.width*f.height||b>=y.width*y.height},updateNode:l,updateNodeData:(d,f,p={replace:!1})=>{l(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},updateEdge:u,updateEdgeData:(d,f,p={replace:!1})=>{u(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return Hi(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??kl();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,T.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var xc=e=>e.selected,Y0=typeof window<"u"?window:void 0;function U0({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=ye(),{deleteElements:o}=sa(),r=ao(e,{actInsideInputWithModifier:!1}),i=ao(t,{target:Y0});(0,T.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(xc),edges:a.filter(xc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,T.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function Z0(e){let t=ye();(0,T.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=tr(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Je.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var hr={position:"absolute",width:"100%",height:"100%",top:0,left:0},K0=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function j0({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=It.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:l,minZoom:u,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:m,noWheelClassName:y,noPanClassName:b,onViewportChange:g,isControlledViewport:_,paneClickDistance:h,selectionOnDrag:w}){let x=ye(),C=(0,T.useRef)(null),{userSelectionActive:k,lib:M,connectionInProgress:R}=de(K0,ve),W=ao(f),P=(0,T.useRef)();Z0(C);let H=(0,T.useCallback)(I=>{g?.({x:I[0],y:I[1],zoom:I[2]}),_||x.setState({transform:I})},[g,_]);return(0,T.useEffect)(()=>{if(C.current){P.current=Vl({domNode:C.current,minZoom:u,maxZoom:d,translateExtent:l,viewport:c,onDraggingChange:N=>x.setState(S=>S.paneDragging===N?S:{paneDragging:N}),onPanZoomStart:(N,S)=>{let{onViewportChangeStart:z,onMoveStart:A}=x.getState();A?.(N,S),z?.(S)},onPanZoom:(N,S)=>{let{onViewportChange:z,onMove:A}=x.getState();A?.(N,S),z?.(S)},onPanZoomEnd:(N,S)=>{let{onViewportChangeEnd:z,onMoveEnd:A}=x.getState();A?.(N,S),z?.(S)}});let{x:I,y:v,zoom:E}=P.current.getViewport();return x.setState({panZoom:P.current,transform:[I,v,E],domNode:C.current.closest(".react-flow")}),()=>{P.current?.destroy()}}},[]),(0,T.useEffect)(()=>{P.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:W,preventScrolling:p,noPanClassName:b,userSelectionActive:k,noWheelClassName:y,lib:M,onTransformChange:H,connectionInProgress:R,selectionOnDrag:w,paneClickDistance:h})},[e,t,n,o,r,i,a,s,W,p,b,k,y,M,H,R,w,h]),(0,L.jsx)("div",{className:"react-flow__renderer",ref:C,style:hr,children:m})}var Q0=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function J0(){let{userSelectionActive:e,userSelectionRect:t}=de(Q0,ve);return e&&t?(0,L.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var ra=(e,t)=>n=>{n.target===t.current&&e?.(n)},ey=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function ty({isSelecting:e,selectionKeyPressed:t,selectionMode:n=tn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:m,children:y}){let b=(0,T.useRef)(0),g=ye(),{userSelectionActive:_,elementsSelectable:h,dragging:w,panBy:x,autoPanSpeed:C}=de(ey,ve),k=h&&(e||_),M=(0,T.useRef)(null),R=(0,T.useRef)(),W=(0,T.useRef)(new Set),P=(0,T.useRef)(new Set),H=(0,T.useRef)(!1),I=(0,T.useRef)(!1),v=(0,T.useRef)({x:0,y:0}),E=(0,T.useRef)(!1),N=D=>{if(I.current||H.current||g.getState().connection.inProgress){I.current=!1,H.current=!1;return}l?.(D),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},S=D=>{if(Array.isArray(o)&&o?.includes(2)){D.preventDefault();return}u?.(D)},z=d?D=>d(D):void 0,A=D=>{I.current&&(D.stopPropagation(),I.current=!1)},B=D=>{let{domNode:Y,transform:J}=g.getState();if(R.current=Y?.getBoundingClientRect(),!R.current)return;let oe=D.target===M.current;if(!oe&&!!D.target.closest(".nokey")||!e||!(a&&oe||t)||D.button!==0||!D.isPrimary)return;D.target?.setPointerCapture?.(D.pointerId),I.current=!1;let{x:se,y:ce}=rt(D.nativeEvent,R.current),pe=Dn({x:se,y:ce},J);g.setState({userSelectionRect:{width:0,height:0,startX:pe.x,startY:pe.y,x:se,y:ce}}),oe||(D.stopPropagation(),D.preventDefault())};function F(D,Y){let{userSelectionRect:J}=g.getState();if(!J)return;let{transform:oe,nodeLookup:j,edgeLookup:te,connectionLookup:se,triggerNodeChanges:ce,triggerEdgeChanges:pe,defaultEdgeOptions:Oe}=g.getState(),at={x:J.startX,y:J.startY},{x:tt,y:ue}=on(at,oe),st={startX:at.x,startY:at.y,x:D<tt?D:tt,y:Y<ue?Y:ue,width:Math.abs(D-tt),height:Math.abs(Y-ue)},Xt=W.current,Ke=P.current;W.current=new Set(jo(j,st,oe,n===tn.Partial,!0).map(Fe=>Fe.id)),P.current=new Set;let kt=Oe?.selectable??!0;for(let Fe of W.current){let nt=se.get(Fe);if(nt)for(let{edgeId:je}of nt.values()){let pt=te.get(je);pt&&(pt.selectable??kt)&&P.current.add(je)}}if(!qi(Xt,W.current)){let Fe=Tn(j,W.current,!0);ce(Fe)}if(!qi(Ke,P.current)){let Fe=Tn(te,P.current);pe(Fe)}g.setState({userSelectionRect:st,userSelectionActive:!0,nodesSelectionActive:!1})}function V(){if(!r||!R.current)return;let[D,Y]=Qo(v.current,R.current,C);x({x:D,y:Y}).then(J=>{if(!I.current||!J){b.current=requestAnimationFrame(V);return}let{x:oe,y:j}=v.current;F(oe,j),b.current=requestAnimationFrame(V)})}let X=()=>{cancelAnimationFrame(b.current),b.current=0,E.current=!1};(0,T.useEffect)(()=>()=>X(),[]);let U=D=>{let{userSelectionRect:Y,transform:J,resetSelectedElements:oe}=g.getState();if(!R.current||!Y)return;let{x:j,y:te}=rt(D.nativeEvent,R.current);v.current={x:j,y:te};let se=on({x:Y.startX,y:Y.startY},J);if(!I.current){let ce=t?0:i;if(Math.hypot(j-se.x,te-se.y)<=ce)return;oe(),s?.(D)}I.current=!0,E.current||(V(),E.current=!0),F(j,te)},Q=D=>{if(!k){D.target===M.current&&g.getState().connection.inProgress&&(H.current=!0);return}D.button===0&&(D.target?.releasePointerCapture?.(D.pointerId),!_&&D.target===M.current&&g.getState().userSelectionRect&&N?.(D),g.setState({userSelectionActive:!1,userSelectionRect:null}),I.current&&(c?.(D),g.setState({nodesSelectionActive:W.current.size>0})),X())},q=D=>{D.target?.releasePointerCapture?.(D.pointerId),X()},$=o===!0||Array.isArray(o)&&o.includes(0);return(0,L.jsxs)("div",{className:Ce(["react-flow__pane",{draggable:$,dragging:w,selection:e}]),onClick:k?void 0:ra(N,M),onContextMenu:ra(S,M),onWheel:ra(z,M),onPointerEnter:k?void 0:f,onPointerMove:k?U:p,onPointerUp:Q,onPointerCancel:k?q:void 0,onPointerDownCapture:k?B:void 0,onClickCapture:k?A:void 0,onPointerLeave:m,ref:M,style:hr,children:[y,(0,L.jsx)(J0,{})]})}function aa({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),l=s.get(e);if(!l){c?.("012",Je.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&a)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Vc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=ye(),[c,l]=(0,T.useState)(!1),u=(0,T.useRef)();return(0,T.useEffect)(()=>{if(!t)return u.current=Ol({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{aa({id:d,store:s,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,s,e]),(0,T.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),c}var ny=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Gc(){let e=ye();return(0,T.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:l,nodeOrigin:u}=e.getState(),d=new Map,f=ny(a),p=r?i[0]:5,m=r?i[1]:5,y=n.direction.x*p*n.factor,b=n.direction.y*m*n.factor;for(let[,g]of l){if(!f(g))continue;let _={x:g.internals.positionAbsolute.x+y,y:g.internals.positionAbsolute.y+b};r&&(_=Rn(_,i));let{position:h,positionAbsolute:w}=Bi({nodeId:g.id,nextPosition:_,nodeLookup:l,nodeExtent:o,nodeOrigin:u,onError:s});g.position=h,g.internals.positionAbsolute=w,d.set(g.id,g)}c(d)},[])}var la=(0,T.createContext)(null),oy=la.Provider;la.Consumer;var Xc=()=>(0,T.useContext)(la),ry=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),qc=(0,T.createContext)(null);function iy({children:e}){let t=de(ry,ve);return(0,L.jsx)(qc.Provider,{value:t,children:e})}function ay(){let e=(0,T.useContext)(qc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var sy={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},ly=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:c,isValid:l}=a;if(!s&&!r)return sy;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:u,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Tt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:u&&l}};function cy({type:e="source",position:t=ee.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:l,onMouseDown:u,onTouchStart:d,...f},p){let m=a||null,y=e==="target",b=ye(),g=Xc(),{connectOnClick:_,noPanClassName:h,rfId:w}=ay(),{connectingFrom:x,connectingTo:C,clickConnecting:k,isPossibleEndHandle:M,connectionInProcess:R,clickConnectionInProcess:W,valid:P}=de(ly(g,m,e),ve);g||b.getState().onError?.("010",Je.error010());let H=E=>{let{defaultEdgeOptions:N,onConnect:S,hasDefaultEdges:z}=b.getState(),A={...N,...E};if(z){let{edges:B,setEdges:F,onError:V}=b.getState();F(W0(A,B,{onError:V}))}S?.(A),s?.(A)},I=E=>{if(!g)return;let N=Zi(E.nativeEvent);if(r&&(N&&E.button===0||!N)){let S=b.getState();lr.onPointerDown(E.nativeEvent,{handleDomNode:E.currentTarget,autoPanOnConnect:S.autoPanOnConnect,connectionMode:S.connectionMode,connectionRadius:S.connectionRadius,domNode:S.domNode,nodeLookup:S.nodeLookup,lib:S.lib,isTarget:y,handleId:m,nodeId:g,flowId:S.rfId,panBy:S.panBy,cancelConnection:S.cancelConnection,onConnectStart:S.onConnectStart,onConnectEnd:(...z)=>b.getState().onConnectEnd?.(...z),updateConnection:S.updateConnection,onConnect:H,isValidConnection:n||((...z)=>b.getState().isValidConnection?.(...z)??!0),getTransform:()=>b.getState().transform,getFromHandle:()=>b.getState().connection.fromHandle,autoPanSpeed:S.autoPanSpeed,dragThreshold:S.connectionDragThreshold})}N?u?.(E):d?.(E)},v=E=>{let{onClickConnectStart:N,onClickConnectEnd:S,connectionClickStartHandle:z,connectionMode:A,isValidConnection:B,lib:F,rfId:V,nodeLookup:X,connection:U}=b.getState();if(!g||!z&&!r)return;if(!z){N?.(E.nativeEvent,{nodeId:g,handleId:m,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:g,type:e,id:m}});return}let Q=Yi(E.target),q=n||B,{connection:$,isValid:D}=lr.isValid(E.nativeEvent,{handle:{nodeId:g,id:m,type:e},connectionMode:A,fromNodeId:z.nodeId,fromHandleId:z.id||null,fromType:z.type,isValidConnection:q,flowId:V,doc:Q,lib:F,nodeLookup:X});D&&$&&H($);let Y=structuredClone(U);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,S?.(E,Y),b.setState({connectionClickStartHandle:null})};return(0,L.jsx)("div",{"data-handleid":m,"data-nodeid":g,"data-handlepos":t,"data-id":`${w}-${g}-${m}-${e}`,className:Ce(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",h,l,{source:!y,target:y,connectable:o,connectablestart:r,connectableend:i,clickconnecting:k,connectingfrom:x,connectingto:C,valid:P,connectionindicator:o&&(!R||M)&&(R||W?i:r)}]),onMouseDown:I,onTouchStart:I,onClick:_?v:void 0,ref:p,...f,children:c})}var sn=(0,T.memo)(Bc(cy));function uy({data:e,isConnectable:t,sourcePosition:n=ee.Bottom}){return(0,L.jsxs)(L.Fragment,{children:[e?.label,(0,L.jsx)(sn,{type:"source",position:n,isConnectable:t})]})}function dy({data:e,isConnectable:t,targetPosition:n=ee.Top,sourcePosition:o=ee.Bottom}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(sn,{type:"target",position:n,isConnectable:t}),e?.label,(0,L.jsx)(sn,{type:"source",position:o,isConnectable:t})]})}function fy(){return null}function py({data:e,isConnectable:t,targetPosition:n=ee.Top}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(sn,{type:"target",position:n,isConnectable:t}),e?.label]})}var pr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},wc={input:uy,default:dy,output:py,group:fy};function my(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var gy=e=>{let{width:t,height:n,x:o,y:r}=Pn(e.nodeLookup,{filter:i=>!!i.selected});return{width:ot(t)?t:null,height:ot(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function hy({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=ye(),{width:r,height:i,transformString:a,userSelectionActive:s}=de(gy,ve),c=Gc(),l=(0,T.useRef)(null);(0,T.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let u=!s&&r!==null&&i!==null;if(Vc({nodeRef:l,disabled:!u}),!u)return null;let d=e?p=>{let m=o.getState().nodes.filter(y=>y.selected);e(p,m)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(pr,p.key)&&(p.preventDefault(),c({direction:pr[p.key],factor:p.shiftKey?4:1}))};return(0,L.jsx)("div",{className:Ce(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,L.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var vc=typeof window<"u"?window:void 0,by=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Yc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:u,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:m,panActivationKeyCode:y,zoomActivationKeyCode:b,elementsSelectable:g,zoomOnScroll:_,zoomOnPinch:h,panOnScroll:w,panOnScrollSpeed:x,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:M,autoPanOnSelection:R,defaultViewport:W,translateExtent:P,minZoom:H,maxZoom:I,preventScrolling:v,onSelectionContextMenu:E,noWheelClassName:N,noPanClassName:S,disableKeyboardA11y:z,onViewportChange:A,isControlledViewport:B}){let{nodesSelectionActive:F,userSelectionActive:V}=de(by,ve),X=ao(l,{target:vc}),U=ao(y,{target:vc}),Q=U||M,q=U||w,$=u&&Q!==!0,D=X||V||$;return U0({deleteKeyCode:c,multiSelectionKeyCode:m}),(0,L.jsx)(j0,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:_,zoomOnPinch:h,panOnScroll:q,panOnScrollSpeed:x,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:!X&&Q,defaultViewport:W,translateExtent:P,minZoom:H,maxZoom:I,zoomActivationKeyCode:b,preventScrolling:v,noWheelClassName:N,noPanClassName:S,onViewportChange:A,isControlledViewport:B,paneClickDistance:s,selectionOnDrag:$,children:(0,L.jsxs)(ty,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:Q,autoPanOnSelection:R,isSelecting:!!D,selectionMode:d,selectionKeyPressed:X,paneClickDistance:s,selectionOnDrag:$,children:[e,F&&(0,L.jsx)(hy,{onSelectionContextMenu:E,noPanClassName:S,disableKeyboardA11y:z})]})})}Yc.displayName="FlowRenderer";var yy=(0,T.memo)(Yc),xy=e=>t=>e?jo(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function wy(e){return de((0,T.useCallback)(xy(e),[e]),ve)}var vy=e=>e.updateNodeInternals;function ky(){let e=de(vy),[t]=(0,T.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,T.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Sy({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=ye(),i=(0,T.useRef)(null),a=(0,T.useRef)(null),s=(0,T.useRef)(e.sourcePosition),c=(0,T.useRef)(e.targetPosition),l=(0,T.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,T.useEffect)(()=>{i.current&&!e.hidden&&(!u||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[u,e.hidden]),(0,T.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,T.useEffect)(()=>{if(i.current){let d=l.current!==t,f=s.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(l.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function Cy({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:l,nodesFocusable:u,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:m,rfId:y,nodeTypes:b,nodeClickDistance:g,onError:_}){let{node:h,internals:w,isParent:x}=de(D=>{let Y=D.nodeLookup.get(e),J=D.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:J}},ve),C=h.type||"default",k=b?.[C]||wc[C];k===void 0&&(_?.("003",Je.error003(C)),C="default",k=b?.default||wc.default);let M=!!(h.draggable||s&&typeof h.draggable>"u"),R=!!(h.selectable||c&&typeof h.selectable>"u"),W=!!(h.connectable||l&&typeof h.connectable>"u"),P=!!(h.focusable||u&&typeof h.focusable>"u"),H=ye(),I=Gi(h),v=Sy({node:h,nodeType:C,hasDimensions:I,resizeObserver:d}),E=Vc({nodeRef:v,disabled:h.hidden||!M,noDragClassName:f,handleSelector:h.dragHandle,nodeId:e,isSelectable:R,nodeClickDistance:g}),N=Gc();if(h.hidden)return null;let S=dt(h),z=my(h),A=R||M||t||n||o||r,B=n?D=>n(D,{...w.userNode}):void 0,F=o?D=>o(D,{...w.userNode}):void 0,V=r?D=>r(D,{...w.userNode}):void 0,X=i?D=>i(D,{...w.userNode}):void 0,U=a?D=>a(D,{...w.userNode}):void 0,Q=D=>{let{selectNodesOnDrag:Y,nodeDragThreshold:J}=H.getState();R&&(!Y||!M||J>0)&&aa({id:e,store:H,nodeRef:v}),t&&t(D,{...w.userNode})},q=D=>{if(!(Ui(D.nativeEvent)||m)){if(Di.includes(D.key)&&R){let Y=D.key==="Escape";aa({id:e,store:H,unselect:Y,nodeRef:v})}else if(M&&h.selected&&Object.prototype.hasOwnProperty.call(pr,D.key)){D.preventDefault();let{ariaLabelConfig:Y}=H.getState();H.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:D.key.replace("Arrow","").toLowerCase(),x:~~w.positionAbsolute.x,y:~~w.positionAbsolute.y})}),N({direction:pr[D.key],factor:D.shiftKey?4:1})}}},$=()=>{if(m||!v.current?.matches(":focus-visible"))return;let{transform:D,width:Y,height:J,autoPanOnNodeFocus:oe,setCenter:j}=H.getState();if(!oe)return;jo(new Map([[e,h]]),{x:0,y:0,width:Y,height:J},D,!0).length>0||j(h.position.x+S.width/2,h.position.y+S.height/2,{zoom:D[2]})};return(0,L.jsx)("div",{className:Ce(["react-flow__node",`react-flow__node-${C}`,{[p]:M},h.className,{selected:h.selected,selectable:R,parent:x,draggable:M,dragging:E}]),ref:v,style:{zIndex:w.z,transform:`translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,pointerEvents:A?"all":"none",visibility:I?"visible":"hidden",...h.style,...z},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:B,onMouseMove:F,onMouseLeave:V,onContextMenu:X,onClick:Q,onDoubleClick:U,onKeyDown:P?q:void 0,tabIndex:P?0:void 0,onFocus:P?$:void 0,role:h.ariaRole??(P?"group":void 0),"aria-roledescription":"node","aria-describedby":m?void 0:`${Ac}-${y}`,"aria-label":h.ariaLabel,...h.domAttributes,children:(0,L.jsx)(oy,{value:e,children:(0,L.jsx)(k,{id:e,data:h.data,type:C,positionAbsoluteX:w.positionAbsolute.x,positionAbsoluteY:w.positionAbsolute.y,selected:h.selected??!1,selectable:R,draggable:M,deletable:h.deletable??!0,isConnectable:W,sourcePosition:h.sourcePosition,targetPosition:h.targetPosition,dragging:E,dragHandle:h.dragHandle,zIndex:w.z,parentId:h.parentId,...S})})})}var _y=(0,T.memo)(Cy),Ey=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Uc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=de(Ey,ve),i=wy(e.onlyRenderVisibleElements),a=ky();return(0,L.jsx)("div",{className:"react-flow__nodes",style:hr,children:i.map(s=>(0,L.jsx)(_y,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}Uc.displayName="NodeRenderer";var Ny=(0,T.memo)(Uc);function My(e){return de((0,T.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&_l({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),ve)}var Iy=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,L.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Py=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,L.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},kc={[Nn.Arrow]:Iy,[Nn.ArrowClosed]:Py};function zy(e){let t=ye();return(0,T.useMemo)(()=>Object.prototype.hasOwnProperty.call(kc,e)?kc[e]:(t.getState().onError?.("009",Je.error009(e)),null),[e])}var Ry=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=zy(t);return c?(0,L.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,L.jsx)(c,{color:n,strokeWidth:a})}):null},Zc=({defaultColor:e,rfId:t})=>{let n=de(i=>i.edges),o=de(i=>i.defaultEdgeOptions),r=(0,T.useMemo)(()=>Ml(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,L.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,L.jsx)("defs",{children:r.map(i=>(0,L.jsx)(Ry,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Zc.displayName="MarkerDefinitions";var Dy=(0,T.memo)(Zc);function Kc({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:l,...u}){let[d,f]=(0,T.useState)({x:1,y:0,width:0,height:0}),p=Ce(["react-flow__edge-textwrapper",l]),m=(0,T.useRef)(null);return(0,T.useEffect)(()=>{if(m.current){let y=m.current.getBBox();f({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,L.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...u,children:[r&&(0,L.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,L.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:m,style:o,children:n}),c]}):null}Kc.displayName="EdgeText";var Ay=(0,T.memo)(Kc);function br({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:l=20,...u}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("path",{...u,d:e,fill:"none",className:Ce(["react-flow__edge-path",u.className])}),l?(0,L.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&ot(t)&&ot(n)?(0,L.jsx)(Ay,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function Sc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===ee.Left||e===ee.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function jc({sourceX:e,sourceY:t,sourcePosition:n=ee.Bottom,targetX:o,targetY:r,targetPosition:i=ee.Top}){let[a,s]=Sc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=Sc({pos:i,x1:o,y1:r,x2:e,y2:t}),[u,d,f,p]=nr({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:l});return[`M${e},${t} C${a},${s} ${c},${l} ${o},${r}`,u,d,f,p]}function Qc(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})=>{let[_,h,w]=jc({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),x=e.isInternal?void 0:t;return(0,L.jsx)(br,{id:x,path:_,labelX:h,labelY:w,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})})}var Oy=Qc({isInternal:!1}),Jc=Qc({isInternal:!0});Oy.displayName="SimpleBezierEdge";Jc.displayName="SimpleBezierEdgeInternal";function eu(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,sourcePosition:p=ee.Bottom,targetPosition:m=ee.Top,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:_})=>{let[h,w,x]=io({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:m,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),C=e.isInternal?void 0:t;return(0,L.jsx)(br,{id:C,path:h,labelX:w,labelY:x,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:y,markerStart:b,interactionWidth:_})})}var tu=eu({isInternal:!1}),nu=eu({isInternal:!0});tu.displayName="SmoothStepEdge";nu.displayName="SmoothStepEdgeInternal";function ou(e){return(0,T.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,L.jsx)(tu,{...n,id:o,pathOptions:(0,T.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Ty=ou({isInternal:!1}),ru=ou({isInternal:!0});Ty.displayName="StepEdge";ru.displayName="StepEdgeInternal";function iu(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})=>{let[b,g,_]=rr({sourceX:n,sourceY:o,targetX:r,targetY:i}),h=e.isInternal?void 0:t;return(0,L.jsx)(br,{id:h,path:b,labelX:g,labelY:_,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})})}var $y=iu({isInternal:!1}),au=iu({isInternal:!0});$y.displayName="StraightEdge";au.displayName="StraightEdgeInternal";function su(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=ee.Bottom,targetPosition:s=ee.Top,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:_})=>{let[h,w,x]=or({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:g?.curvature}),C=e.isInternal?void 0:t;return(0,L.jsx)(br,{id:C,path:h,labelX:w,labelY:x,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:_})})}var Ly=su({isInternal:!1}),lu=su({isInternal:!0});Ly.displayName="BezierEdge";lu.displayName="BezierEdgeInternal";var Cc={default:lu,straight:au,step:ru,smoothstep:nu,simplebezier:Jc},_c={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Hy=(e,t,n)=>n===ee.Left?e-t:n===ee.Right?e+t:e,By=(e,t,n)=>n===ee.Top?e-t:n===ee.Bottom?e+t:e,Ec="react-flow__edgeupdater";function Nc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,L.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:Ce([Ec,`${Ec}-${s}`]),cx:Hy(t,o,e),cy:By(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function Wy({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:l,onReconnectStart:u,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let m=ye(),y=(w,x)=>{if(w.button!==0)return;let{autoPanOnConnect:C,domNode:k,connectionMode:M,connectionRadius:R,lib:W,onConnectStart:P,cancelConnection:H,nodeLookup:I,rfId:v,panBy:E,updateConnection:N}=m.getState(),S=x.type==="target",z=(F,V)=>{f(!1),d?.(F,n,x.type,V)},A=F=>l?.(n,F),B=(F,V)=>{f(!0),u?.(w,n,x.type),P?.(F,V)};lr.onPointerDown(w.nativeEvent,{autoPanOnConnect:C,connectionMode:M,connectionRadius:R,domNode:k,handleId:x.id,nodeId:x.nodeId,nodeLookup:I,isTarget:S,edgeUpdaterType:x.type,lib:W,flowId:v,cancelConnection:H,panBy:E,isValidConnection:(...F)=>m.getState().isValidConnection?.(...F)??!0,onConnect:A,onConnectStart:B,onConnectEnd:(...F)=>m.getState().onConnectEnd?.(...F),onReconnectEnd:z,updateConnection:N,getTransform:()=>m.getState().transform,getFromHandle:()=>m.getState().connection.fromHandle,dragThreshold:m.getState().connectionDragThreshold,handleDomNode:w.currentTarget})},b=w=>y(w,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=w=>y(w,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),_=()=>p(!0),h=()=>p(!1);return(0,L.jsxs)(L.Fragment,{children:[(e===!0||e==="source")&&(0,L.jsx)(Nc,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:b,onMouseEnter:_,onMouseOut:h,type:"source"}),(e===!0||e==="target")&&(0,L.jsx)(Nc,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:g,onMouseEnter:_,onMouseOut:h,type:"target"})]})}function Fy({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:m,edgeTypes:y,noPanClassName:b,onError:g,disableKeyboardA11y:_}){let h=de(j=>j.edgeLookup.get(e)),w=de(j=>j.defaultEdgeOptions);h=w?{...w,...h}:h;let x=h.type||"default",C=y?.[x]||Cc[x];C===void 0&&(g?.("011",Je.error011(x)),x="default",C=y?.default||Cc.default);let k=!!(h.focusable||t&&typeof h.focusable>"u"),M=typeof d<"u"&&(h.reconnectable||n&&typeof h.reconnectable>"u"),R=!!(h.selectable||o&&typeof h.selectable>"u"),W=(0,T.useRef)(null),[P,H]=(0,T.useState)(!1),[I,v]=(0,T.useState)(!1),E=ye(),{zIndex:N=h.zIndex,sourceX:S,sourceY:z,targetX:A,targetY:B,sourcePosition:F,targetPosition:V}=de((0,T.useCallback)(j=>{let te=j.nodeLookup.get(h.source),se=j.nodeLookup.get(h.target);if(!te||!se)return _c;let ce=Nl({id:e,sourceNode:te,targetNode:se,sourceHandle:h.sourceHandle||null,targetHandle:h.targetHandle||null,connectionMode:j.connectionMode,onError:g}),pe=Cl({selected:h.selected,zIndex:h.zIndex,sourceNode:te,targetNode:se,elevateOnSelect:j.elevateEdgesOnSelect,zIndexMode:j.zIndexMode});return{...ce||_c,zIndex:pe}},[h.source,h.target,h.sourceHandle,h.targetHandle,h.selected,h.zIndex]),ve),X=(0,T.useMemo)(()=>h.markerStart?`url('#${ir(h.markerStart,m)}')`:void 0,[h.markerStart,m]),U=(0,T.useMemo)(()=>h.markerEnd?`url('#${ir(h.markerEnd,m)}')`:void 0,[h.markerEnd,m]);if(h.hidden||S===null||z===null||A===null||B===null)return null;let Q=j=>{let{addSelectedEdges:te,unselectNodesAndEdges:se,multiSelectionActive:ce}=E.getState();R&&(E.setState({nodesSelectionActive:!1}),h.selected&&ce?(se({nodes:[],edges:[h]}),W.current?.blur()):te([e])),r&&r(j,h)},q=i?j=>{i(j,{...h})}:void 0,$=a?j=>{a(j,{...h})}:void 0,D=s?j=>{s(j,{...h})}:void 0,Y=c?j=>{c(j,{...h})}:void 0,J=l?j=>{l(j,{...h})}:void 0,oe=j=>{if(!_&&Di.includes(j.key)&&R){let{unselectNodesAndEdges:te,addSelectedEdges:se}=E.getState();j.key==="Escape"?(W.current?.blur(),te({edges:[h]})):se([e])}};return(0,L.jsx)("svg",{style:{zIndex:N},children:(0,L.jsxs)("g",{className:Ce(["react-flow__edge",`react-flow__edge-${x}`,h.className,b,{selected:h.selected,animated:h.animated,inactive:!R&&!r,updating:P,selectable:R}]),onClick:Q,onDoubleClick:q,onContextMenu:$,onMouseEnter:D,onMouseMove:Y,onMouseLeave:J,onKeyDown:k?oe:void 0,tabIndex:k?0:void 0,role:h.ariaRole??(k?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":h.ariaLabel===null?void 0:h.ariaLabel||`Edge from ${h.source} to ${h.target}`,"aria-describedby":k?`${Oc}-${m}`:void 0,ref:W,...h.domAttributes,children:[!I&&(0,L.jsx)(C,{id:e,source:h.source,target:h.target,type:h.type,selected:h.selected,animated:h.animated,selectable:R,deletable:h.deletable??!0,label:h.label,labelStyle:h.labelStyle,labelShowBg:h.labelShowBg,labelBgStyle:h.labelBgStyle,labelBgPadding:h.labelBgPadding,labelBgBorderRadius:h.labelBgBorderRadius,sourceX:S,sourceY:z,targetX:A,targetY:B,sourcePosition:F,targetPosition:V,data:h.data,style:h.style,sourceHandleId:h.sourceHandle,targetHandleId:h.targetHandle,markerStart:X,markerEnd:U,pathOptions:"pathOptions"in h?h.pathOptions:void 0,interactionWidth:h.interactionWidth}),M&&(0,L.jsx)(Wy,{edge:h,isReconnectable:M,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:S,sourceY:z,targetX:A,targetY:B,sourcePosition:F,targetPosition:V,setUpdateHover:H,setReconnecting:v})]})})}var Vy=(0,T.memo)(Fy),Gy=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function cu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:u,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,disableKeyboardA11y:y}){let{edgesFocusable:b,edgesReconnectable:g,elementsSelectable:_,onError:h}=de(Gy,ve),w=My(t);return(0,L.jsxs)("div",{className:"react-flow__edges",children:[(0,L.jsx)(Dy,{defaultColor:e,rfId:n}),w.map(x=>(0,L.jsx)(Vy,{id:x,edgesFocusable:b,edgesReconnectable:g,elementsSelectable:_,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,onClick:u,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,rfId:n,onError:h,edgeTypes:o,disableKeyboardA11y:y},x))]})}cu.displayName="EdgeRenderer";var Xy=(0,T.memo)(cu),Mc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function qy({children:e}){let t=ye(),n=(0,T.useRef)(null),[o]=(0,T.useState)(()=>t.getState().transform);return Wc(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=Mc(a)))};return i(),t.subscribe(i)},[t]),(0,L.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:Mc(o)},children:e})}function Yy(e){let t=sa(),n=(0,T.useRef)(!1);(0,T.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Uy=e=>e.panZoom?.syncViewport;function Zy(e){let t=de(Uy),n=ye();return(0,T.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Ic(e){return e.connection.inProgress?{...e.connection,to:Dn(e.connection.to,e.transform)}:{...e.connection}}function Ky(e){return e?n=>{let o=Ic(n);return e(o)}:Ic}function jy(e){let t=Ky(e);return de(t,ve)}var Qy=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Jy({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:c}=de(Qy,ve);return!(i&&r&&c)?null:(0,L.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,L.jsx)("g",{className:Ce(["react-flow__connection",Ti(s)]),children:(0,L.jsx)(uu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var uu=({style:e,type:t=bt.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:l,toNode:u,toHandle:d,toPosition:f,pointer:p}=jy();if(!r)return;if(n)return(0,L.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:f,connectionStatus:Ti(o),toNode:u,toHandle:d,pointer:p});let m="",y={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case bt.Bezier:[m]=or(y);break;case bt.SimpleBezier:[m]=jc(y);break;case bt.Step:[m]=io({...y,borderRadius:0});break;case bt.SmoothStep:[m]=io(y);break;default:[m]=rr(y)}return(0,L.jsx)("path",{d:m,fill:"none",className:"react-flow__connection-path",style:e})};uu.displayName="ConnectionLine";var ex={};function Pc(e=ex){let t=(0,T.useRef)(e),n=ye();(0,T.useEffect)(()=>{},[e])}function tx(){let e=ye(),t=(0,T.useRef)(!1);(0,T.useEffect)(()=>{},[])}function du({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:m,connectionLineStyle:y,connectionLineComponent:b,connectionLineContainerStyle:g,selectionKeyCode:_,selectionOnDrag:h,selectionMode:w,multiSelectionKeyCode:x,panActivationKeyCode:C,zoomActivationKeyCode:k,deleteKeyCode:M,onlyRenderVisibleElements:R,elementsSelectable:W,defaultViewport:P,translateExtent:H,minZoom:I,maxZoom:v,preventScrolling:E,defaultMarkerColor:N,zoomOnScroll:S,zoomOnPinch:z,panOnScroll:A,panOnScrollSpeed:B,panOnScrollMode:F,zoomOnDoubleClick:V,panOnDrag:X,autoPanOnSelection:U,onPaneClick:Q,onPaneMouseEnter:q,onPaneMouseMove:$,onPaneMouseLeave:D,onPaneScroll:Y,onPaneContextMenu:J,paneClickDistance:oe,nodeClickDistance:j,onEdgeContextMenu:te,onEdgeMouseEnter:se,onEdgeMouseMove:ce,onEdgeMouseLeave:pe,reconnectRadius:Oe,onReconnect:at,onReconnectStart:tt,onReconnectEnd:ue,noDragClassName:st,noWheelClassName:Xt,noPanClassName:Ke,disableKeyboardA11y:kt,nodeExtent:Fe,rfId:nt,viewport:je,onViewportChange:pt,nodesDraggable:Rt}){return Pc(e),Pc(t),tx(),Yy(n),Zy(je),(0,L.jsx)(yy,{onPaneClick:Q,onPaneMouseEnter:q,onPaneMouseMove:$,onPaneMouseLeave:D,onPaneContextMenu:J,onPaneScroll:Y,paneClickDistance:oe,deleteKeyCode:M,selectionKeyCode:_,selectionOnDrag:h,selectionMode:w,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:x,panActivationKeyCode:C,zoomActivationKeyCode:k,elementsSelectable:W,zoomOnScroll:S,zoomOnPinch:z,zoomOnDoubleClick:V,panOnScroll:A,panOnScrollSpeed:B,panOnScrollMode:F,panOnDrag:X,autoPanOnSelection:U,defaultViewport:P,translateExtent:H,minZoom:I,maxZoom:v,onSelectionContextMenu:d,preventScrolling:E,noDragClassName:st,noWheelClassName:Xt,noPanClassName:Ke,disableKeyboardA11y:kt,onViewportChange:pt,isControlledViewport:!!je,children:(0,L.jsxs)(qy,{children:[(0,L.jsx)(Xy,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:at,onReconnectStart:tt,onReconnectEnd:ue,onlyRenderVisibleElements:R,onEdgeContextMenu:te,onEdgeMouseEnter:se,onEdgeMouseMove:ce,onEdgeMouseLeave:pe,reconnectRadius:Oe,defaultMarkerColor:N,noPanClassName:Ke,disableKeyboardA11y:kt,rfId:nt}),(0,L.jsx)(Jy,{style:y,type:m,component:b,containerStyle:g}),(0,L.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,L.jsx)(Ny,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,nodeClickDistance:j,onlyRenderVisibleElements:R,noPanClassName:Ke,noDragClassName:st,disableKeyboardA11y:kt,nodeExtent:Fe,rfId:nt,nodesDraggable:Rt}),(0,L.jsx)("div",{className:"react-flow__viewport-portal"})]})})}du.displayName="GraphView";var nx=(0,T.memo)(du),ox=Vi("React Flow","https://reactflow.dev/"),zc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:l=2,nodeOrigin:u,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,m=new Map,y=new Map,b=new Map,g=o??t??[],_=n??e??[],h=u??[0,0],w=d??In;ta(y,b,g);let{nodesInitialized:x}=ar(_,p,m,{nodeOrigin:h,nodeExtent:w,zIndexMode:f}),C=[0,0,1];if(a&&r&&i){let k=Pn(p,{filter:P=>!!((P.width||P.initialWidth)&&(P.height||P.initialHeight))}),{x:M,y:R,zoom:W}=ro(k,r,i,c,l,s?.padding??.1);C=[M,R,W]}return{rfId:"1",width:r??0,height:i??0,transform:C,nodes:_,nodesInitialized:x,nodeLookup:p,parentLookup:m,edges:g,edgeLookup:b,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:In,nodeExtent:w,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Tt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:h,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...Oi},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:ox,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Ai,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},rx=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f})=>ac((p,m)=>{async function y(){let{nodeLookup:b,panZoom:g,fitViewOptions:_,fitViewResolver:h,width:w,height:x,minZoom:C,maxZoom:k}=m();g&&(await yl({nodes:b,width:w,height:x,panZoom:g,minZoom:C,maxZoom:k},_),h?.resolve(!0),p({fitViewResolver:null}))}return{...zc({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:b=>{let{nodeLookup:g,parentLookup:_,nodeOrigin:h,elevateNodesOnSelect:w,fitViewQueued:x,zIndexMode:C,nodesSelectionActive:k}=m(),{nodesInitialized:M,hasSelectedNodes:R}=ar(b,g,_,{nodeOrigin:h,nodeExtent:d,elevateNodesOnSelect:w,checkEquality:!0,zIndexMode:C}),W=k&&R;x&&M?(y(),p({nodes:b,nodesInitialized:M,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:W})):p({nodes:b,nodesInitialized:M,nodesSelectionActive:W})},setEdges:b=>{let{connectionLookup:g,edgeLookup:_}=m();ta(g,_,b),p({edges:b})},setDefaultNodesAndEdges:(b,g)=>{if(b){let{setNodes:_}=m();_(b),p({hasDefaultNodes:!0})}if(g){let{setEdges:_}=m();_(g),p({hasDefaultEdges:!0})}},updateNodeInternals:b=>{let{triggerNodeChanges:g,nodeLookup:_,parentLookup:h,domNode:w,nodeOrigin:x,nodeExtent:C,debug:k,fitViewQueued:M,zIndexMode:R}=m(),{changes:W,updatedInternals:P}=Rl(b,_,h,w,x,C,R);P&&(Pl(_,h,{nodeOrigin:x,nodeExtent:C,zIndexMode:R}),M?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),W?.length>0&&(k&&console.log("React Flow: trigger node changes",W),g?.(W)))},updateNodePositions:(b,g=!1)=>{let _=[],h=[],{nodeLookup:w,triggerNodeChanges:x,connection:C,updateConnection:k,onNodesChangeMiddlewareMap:M}=m();for(let[R,W]of b){let P=w.get(R),H=!!(P?.expandParent&&P?.parentId&&W?.position),I={id:R,type:"position",position:H?{x:Math.max(0,W.position.x),y:Math.max(0,W.position.y)}:W.position,dragging:g};if(P&&C.inProgress&&C.fromNode.id===P.id){let v=$t(P,C.fromHandle,ee.Left,!0);k({...C,from:v})}H&&P.parentId&&_.push({id:R,parentId:P.parentId,rect:{...W.internals.positionAbsolute,width:W.measured.width??0,height:W.measured.height??0}}),h.push(I)}if(_.length>0){let{parentLookup:R,nodeOrigin:W}=m(),P=sr(_,w,R,W);h.push(...P)}for(let R of M.values())h=R(h);x(h)},triggerNodeChanges:b=>{let{onNodesChange:g,setNodes:_,nodes:h,hasDefaultNodes:w,debug:x}=m();if(b?.length){if(w){let C=Lc(b,h);_(C)}x&&console.log("React Flow: trigger node changes",b),g?.(b)}},triggerEdgeChanges:b=>{let{onEdgesChange:g,setEdges:_,edges:h,hasDefaultEdges:w,debug:x}=m();if(b?.length){if(w){let C=Hc(b,h);_(C)}x&&console.log("React Flow: trigger edge changes",b),g?.(b)}},addSelectedNodes:b=>{let{multiSelectionActive:g,edgeLookup:_,nodeLookup:h,triggerNodeChanges:w,triggerEdgeChanges:x}=m();if(g){let C=b.map(k=>an(k,!0));w(C);return}w(Tn(h,new Set([...b]),!0)),x(Tn(_))},addSelectedEdges:b=>{let{multiSelectionActive:g,edgeLookup:_,nodeLookup:h,triggerNodeChanges:w,triggerEdgeChanges:x}=m();if(g){let C=b.map(k=>an(k,!0));x(C);return}x(Tn(_,new Set([...b]))),w(Tn(h,new Set,!0))},unselectNodesAndEdges:({nodes:b,edges:g}={})=>{let{edges:_,nodes:h,nodeLookup:w,triggerNodeChanges:x,triggerEdgeChanges:C}=m(),k=b||h,M=g||_,R=[];for(let P of k){if(!P.selected)continue;let H=w.get(P.id);H&&(H.selected=!1),R.push(an(P.id,!1))}let W=[];for(let P of M)P.selected&&W.push(an(P.id,!1));x(R),C(W)},setMinZoom:b=>{let{panZoom:g,maxZoom:_}=m();g?.setScaleExtent([b,_]),p({minZoom:b})},setMaxZoom:b=>{let{panZoom:g,minZoom:_}=m();g?.setScaleExtent([_,b]),p({maxZoom:b})},setTranslateExtent:b=>{m().panZoom?.setTranslateExtent(b),p({translateExtent:b})},resetSelectedElements:()=>{let{edges:b,nodes:g,triggerNodeChanges:_,triggerEdgeChanges:h,elementsSelectable:w}=m();if(!w)return;let x=g.reduce((k,M)=>M.selected?[...k,an(M.id,!1)]:k,[]),C=b.reduce((k,M)=>M.selected?[...k,an(M.id,!1)]:k,[]);_(x),h(C)},setNodeExtent:b=>{let{nodes:g,nodeLookup:_,parentLookup:h,nodeOrigin:w,elevateNodesOnSelect:x,nodeExtent:C,zIndexMode:k}=m();b[0][0]===C[0][0]&&b[0][1]===C[0][1]&&b[1][0]===C[1][0]&&b[1][1]===C[1][1]||(ar(g,_,h,{nodeOrigin:w,nodeExtent:b,elevateNodesOnSelect:x,checkEquality:!1,zIndexMode:k}),p({nodeExtent:b}))},panBy:b=>{let{transform:g,width:_,height:h,panZoom:w,translateExtent:x}=m();return Dl({delta:b,panZoom:w,transform:g,translateExtent:x,width:_,height:h})},setCenter:async(b,g,_)=>{let{width:h,height:w,maxZoom:x,panZoom:C}=m();if(!C)return!1;let k=typeof _?.zoom<"u"?_.zoom:x;return await C.setViewport({x:h/2-b*k,y:w/2-g*k,zoom:k},{duration:_?.duration,ease:_?.ease,interpolate:_?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Oi}})},updateConnection:b=>{p({connection:b})},reset:()=>p({...zc()})}},Object.is);function ix({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f,children:p}){let[m]=(0,T.useState)(()=>rx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}));return(0,L.jsx)(w0,{value:m,children:(0,L.jsx)(G0,{children:(0,L.jsx)(iy,{children:p})})})}function ax({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,T.useContext)(mr)?(0,L.jsx)(L.Fragment,{children:e}):(0,L.jsx)(ix,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var sx={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function lx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:l,onMove:u,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,onNodeMouseEnter:_,onNodeMouseMove:h,onNodeMouseLeave:w,onNodeContextMenu:x,onNodeDoubleClick:C,onNodeDragStart:k,onNodeDrag:M,onNodeDragStop:R,onNodesDelete:W,onEdgesDelete:P,onDelete:H,onSelectionChange:I,onSelectionDragStart:v,onSelectionDrag:E,onSelectionDragStop:N,onSelectionContextMenu:S,onSelectionStart:z,onSelectionEnd:A,onBeforeDelete:B,connectionMode:F,connectionLineType:V=bt.Bezier,connectionLineStyle:X,connectionLineComponent:U,connectionLineContainerStyle:Q,deleteKeyCode:q="Backspace",selectionKeyCode:$="Shift",selectionOnDrag:D=!1,selectionMode:Y=tn.Full,panActivationKeyCode:J="Space",multiSelectionKeyCode:oe=An()?"Meta":"Control",zoomActivationKeyCode:j=An()?"Meta":"Control",snapToGrid:te,snapGrid:se,onlyRenderVisibleElements:ce=!1,selectNodesOnDrag:pe,nodesDraggable:Oe,autoPanOnNodeFocus:at,nodesConnectable:tt,nodesFocusable:ue,nodeOrigin:st=Tc,edgesFocusable:Xt,edgesReconnectable:Ke,elementsSelectable:kt=!0,defaultViewport:Fe=D0,minZoom:nt=.5,maxZoom:je=2,translateExtent:pt=In,preventScrolling:Rt=!0,nodeExtent:mn,defaultMarkerColor:$e="#b1b1b7",zoomOnScroll:bo=!0,zoomOnPinch:yo=!0,panOnScroll:xo=!1,panOnScrollSpeed:Or=.5,panOnScrollMode:Tr=It.Free,zoomOnDoubleClick:$r=!0,panOnDrag:Lr=!0,onPaneClick:Hr,onPaneMouseEnter:Br,onPaneMouseMove:Wr,onPaneMouseLeave:Fr,onPaneScroll:Vr,onPaneContextMenu:qt,paneClickDistance:wo=1,nodeClickDistance:vo=0,children:Gr,onReconnect:O,onReconnectStart:G,onReconnectEnd:K,onEdgeContextMenu:re,onEdgeDoubleClick:ke,onEdgeMouseEnter:St,onEdgeMouseMove:Ie,onEdgeMouseLeave:gn,reconnectRadius:ep=10,onNodesChange:tp,onEdgesChange:np,noDragClassName:op="nodrag",noWheelClassName:rp="nowheel",noPanClassName:Wa="nopan",fitView:Fa,fitViewOptions:Va,connectOnClick:ip,attributionPosition:ap,proOptions:sp,defaultEdgeOptions:lp,elevateNodesOnSelect:cp=!0,elevateEdgesOnSelect:up=!1,disableKeyboardA11y:Ga=!1,autoPanOnConnect:dp,autoPanOnNodeDrag:fp,autoPanOnSelection:pp=!0,autoPanSpeed:mp,connectionRadius:gp,isValidConnection:hp,onError:bp,style:yp,id:Xa,nodeDragThreshold:xp,connectionDragThreshold:wp,viewport:vp,onViewportChange:kp,width:Sp,height:Cp,colorMode:_p="light",debug:Ep,onScroll:qa,ariaLabelConfig:Np,zIndexMode:Ya="basic",...Mp},Ip){let Xr=Xa||"1",Pp=$0(_p),zp=(0,T.useCallback)(Ua=>{Ua.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),qa?.(Ua)},[qa]);return(0,L.jsx)("div",{"data-testid":"rf__wrapper",...Mp,onScroll:zp,style:{...yp,...sx},ref:Ip,className:Ce(["react-flow",r,Pp]),id:Xa,role:"application",children:(0,L.jsxs)(ax,{nodes:e,edges:t,width:Sp,height:Cp,fitView:Fa,fitViewOptions:Va,minZoom:nt,maxZoom:je,nodeOrigin:st,nodeExtent:mn,zIndexMode:Ya,children:[(0,L.jsx)(T0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,nodesDraggable:Oe,autoPanOnNodeFocus:at,nodesConnectable:tt,nodesFocusable:ue,edgesFocusable:Xt,edgesReconnectable:Ke,elementsSelectable:kt,elevateNodesOnSelect:cp,elevateEdgesOnSelect:up,minZoom:nt,maxZoom:je,nodeExtent:mn,onNodesChange:tp,onEdgesChange:np,snapToGrid:te,snapGrid:se,connectionMode:F,translateExtent:pt,connectOnClick:ip,defaultEdgeOptions:lp,fitView:Fa,fitViewOptions:Va,onNodesDelete:W,onEdgesDelete:P,onDelete:H,onNodeDragStart:k,onNodeDrag:M,onNodeDragStop:R,onSelectionDrag:E,onSelectionDragStart:v,onSelectionDragStop:N,onMove:u,onMoveStart:d,onMoveEnd:f,noPanClassName:Wa,nodeOrigin:st,rfId:Xr,autoPanOnConnect:dp,autoPanOnNodeDrag:fp,autoPanSpeed:mp,onError:bp,connectionRadius:gp,isValidConnection:hp,selectNodesOnDrag:pe,nodeDragThreshold:xp,connectionDragThreshold:wp,onBeforeDelete:B,debug:Ep,ariaLabelConfig:Np,zIndexMode:Ya}),(0,L.jsx)(nx,{onInit:l,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:_,onNodeMouseMove:h,onNodeMouseLeave:w,onNodeContextMenu:x,onNodeDoubleClick:C,nodeTypes:i,edgeTypes:a,connectionLineType:V,connectionLineStyle:X,connectionLineComponent:U,connectionLineContainerStyle:Q,selectionKeyCode:$,selectionOnDrag:D,selectionMode:Y,deleteKeyCode:q,multiSelectionKeyCode:oe,panActivationKeyCode:J,zoomActivationKeyCode:j,onlyRenderVisibleElements:ce,defaultViewport:Fe,translateExtent:pt,minZoom:nt,maxZoom:je,preventScrolling:Rt,zoomOnScroll:bo,zoomOnPinch:yo,zoomOnDoubleClick:$r,panOnScroll:xo,panOnScrollSpeed:Or,panOnScrollMode:Tr,panOnDrag:Lr,autoPanOnSelection:pp,onPaneClick:Hr,onPaneMouseEnter:Br,onPaneMouseMove:Wr,onPaneMouseLeave:Fr,onPaneScroll:Vr,onPaneContextMenu:qt,paneClickDistance:wo,nodeClickDistance:vo,onSelectionContextMenu:S,onSelectionStart:z,onSelectionEnd:A,onReconnect:O,onReconnectStart:G,onReconnectEnd:K,onEdgeContextMenu:re,onEdgeDoubleClick:ke,onEdgeMouseEnter:St,onEdgeMouseMove:Ie,onEdgeMouseLeave:gn,reconnectRadius:ep,defaultMarkerColor:$e,noDragClassName:op,noWheelClassName:rp,noPanClassName:Wa,rfId:Xr,disableKeyboardA11y:Ga,nodeExtent:mn,viewport:vp,onViewportChange:kp,nodesDraggable:Oe}),(0,L.jsx)(R0,{onSelectionChange:I}),Gr,(0,L.jsx)(N0,{proOptions:sp,position:ap}),(0,L.jsx)(E0,{rfId:Xr,disableKeyboardA11y:Ga})]})})}var fu=Bc(lx);function pu(e){let[t,n]=(0,T.useState)(e),o=(0,T.useCallback)(r=>n(i=>Lc(r,i)),[]);return[t,n,o]}function mu(e){let[t,n]=(0,T.useState)(e),o=(0,T.useCallback)(r=>n(i=>Hc(r,i)),[]);return[t,n,o]}var m1=Je.error014();function cx({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,L.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Ce(["react-flow__background-pattern",n,o])})}function ux({radius:e,className:t}){return(0,L.jsx)("circle",{cx:e,cy:e,r:e,className:Ce(["react-flow__background-pattern","dots",t])})}var yt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(yt||(yt={}));var dx={[yt.Dots]:1,[yt.Lines]:1,[yt.Cross]:6},fx=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function gu({id:e,variant:t=yt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:c,className:l,patternClassName:u}){let d=(0,T.useRef)(null),{transform:f,patternId:p}=de(fx,ve),m=o||dx[t],y=t===yt.Dots,b=t===yt.Cross,g=Array.isArray(n)?n:[n,n],_=[g[0]*f[2]||1,g[1]*f[2]||1],h=m*f[2],w=Array.isArray(i)?i:[i,i],x=b?[h,h]:_,C=[w[0]*f[2]||1+x[0]/2,w[1]*f[2]||1+x[1]/2],k=`${p}${e||""}`;return(0,L.jsxs)("svg",{className:Ce(["react-flow__background",l]),style:{...c,...hr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,L.jsx)("pattern",{id:k,x:f[0]%_[0],y:f[1]%_[1],width:_[0],height:_[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:y?(0,L.jsx)(ux,{radius:h/2,className:u}):(0,L.jsx)(cx,{dimensions:x,lineWidth:r,variant:t,className:u})}),(0,L.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${k})`})]})}gu.displayName="Background";var hu=(0,T.memo)(gu);function px(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,L.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function mx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,L.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function gx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,L.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function hx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,L.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function bx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,L.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function fr({children:e,className:t,...n}){return(0,L.jsx)("button",{type:"button",className:Ce(["react-flow__controls-button",t]),...n,children:e})}var yx=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function bu({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:l,children:u,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let m=ye(),{isInteractive:y,minZoomReached:b,maxZoomReached:g,ariaLabelConfig:_}=de(yx,ve),{zoomIn:h,zoomOut:w,fitView:x}=sa(),C=()=>{h(),i?.()},k=()=>{w(),a?.()},M=()=>{x(r),s?.()},R=()=>{m.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),c?.(!y)};return(0,L.jsxs)(gr,{className:Ce(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",l]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??_["controls.ariaLabel"],children:[t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(fr,{onClick:C,className:"react-flow__controls-zoomin",title:_["controls.zoomIn.ariaLabel"],"aria-label":_["controls.zoomIn.ariaLabel"],disabled:g,children:(0,L.jsx)(px,{})}),(0,L.jsx)(fr,{onClick:k,className:"react-flow__controls-zoomout",title:_["controls.zoomOut.ariaLabel"],"aria-label":_["controls.zoomOut.ariaLabel"],disabled:b,children:(0,L.jsx)(mx,{})})]}),n&&(0,L.jsx)(fr,{className:"react-flow__controls-fitview",onClick:M,title:_["controls.fitView.ariaLabel"],"aria-label":_["controls.fitView.ariaLabel"],children:(0,L.jsx)(gx,{})}),o&&(0,L.jsx)(fr,{className:"react-flow__controls-interactive",onClick:R,title:_["controls.interactive.ariaLabel"],"aria-label":_["controls.interactive.ariaLabel"],children:y?(0,L.jsx)(bx,{}):(0,L.jsx)(hx,{})}),u]})}bu.displayName="Controls";var g1=(0,T.memo)(bu);function xx({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:c,className:l,borderRadius:u,shapeRendering:d,selected:f,onClick:p}){let{background:m,backgroundColor:y}=i||{},b=a||m||y;return(0,L.jsx)("rect",{className:Ce(["react-flow__minimap-node",{selected:f},l]),x:t,y:n,rx:u,ry:u,width:o,height:r,style:{fill:b,stroke:s,strokeWidth:c},shapeRendering:d,onClick:p?g=>p(g,e):void 0})}var wx=(0,T.memo)(xx),vx=e=>e.nodes.map(t=>t.id),ia=e=>e instanceof Function?e:()=>e;function kx({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=wx,onClick:a}){let s=de(vx,ve),c=ia(t),l=ia(e),u=ia(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,L.jsx)(L.Fragment,{children:s.map(f=>(0,L.jsx)(Cx,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:u,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function Sx({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:l,x:u,y:d,width:f,height:p}=de(m=>{let y=m.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let b=y.internals.userNode,{x:g,y:_}=y.internals.positionAbsolute,{width:h,height:w}=dt(b);return{node:b,x:g,y:_,width:h,height:w}},ve);return!l||l.hidden||!Gi(l)?null:(0,L.jsx)(s,{x:u,y:d,width:f,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:a,onClick:c,id:l.id})}var Cx=(0,T.memo)(Sx),_x=(0,T.memo)(kx),Ex=200,Nx=150,Mx=e=>!e.hidden,Ix=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Wi(Pn(e.nodeLookup,{filter:Mx}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Rc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Px=(e,t)=>Rc(e.viewBB,t.viewBB)&&Rc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,zx="react-flow__minimap-desc";function yu({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:l,maskStrokeColor:u,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:m,pannable:y=!1,zoomable:b=!1,ariaLabel:g,inversePan:_,zoomStep:h=1,offsetScale:w=5}){let x=ye(),C=(0,T.useRef)(null),{boundingRect:k,viewBB:M,rfId:R,panZoom:W,translateExtent:P,flowWidth:H,flowHeight:I,ariaLabelConfig:v}=de(Ix,Px),E=e?.width??Ex,N=e?.height??Nx,S=k.width/E,z=k.height/N,A=Math.max(S,z),B=A*E,F=A*N,V=w*A,X=k.x-(B-k.width)/2-V,U=k.y-(F-k.height)/2-V,Q=B+V*2,q=F+V*2,$=`${zx}-${R}`,D=(0,T.useRef)(0),Y=(0,T.useRef)();D.current=A,(0,T.useEffect)(()=>{if(C.current&&W)return Y.current=Bl({domNode:C.current,panZoom:W,getTransform:()=>x.getState().transform,getViewScale:()=>D.current}),()=>{Y.current?.destroy()}},[W]),(0,T.useEffect)(()=>{Y.current?.update({translateExtent:P,width:H,height:I,inversePan:_,pannable:y,zoomStep:h,zoomable:b})},[y,b,_,h,P,H,I]);let J=p?te=>{let[se,ce]=Y.current?.pointer(te)||[0,0];p(te,{x:se,y:ce})}:void 0,oe=m?(0,T.useCallback)((te,se)=>{let ce=x.getState().nodeLookup.get(se).internals.userNode;m(te,ce)},[]):void 0,j=g??v["minimap.ariaLabel"];return(0,L.jsx)(gr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*A:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:Ce(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,L.jsxs)("svg",{width:E,height:N,viewBox:`${X} ${U} ${Q} ${q}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":$,ref:C,onClick:J,children:[j&&(0,L.jsx)("title",{id:$,children:j}),(0,L.jsx)(_x,{onClick:oe,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,L.jsx)("path",{className:"react-flow__minimap-mask",d:`M${X-V},${U-V}h${Q+V*2}v${q+V*2}h${-Q-V*2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}yu.displayName="MiniMap";var xu=(0,T.memo)(yu),Rx=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Dx={[Lt.Line]:"right",[Lt.Handle]:"bottom-right"};function Ax({nodeId:e,position:t,variant:n=Lt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:m,onResizeStart:y,onResize:b,onResizeEnd:g}){let _=Xc(),h=typeof e=="string"?e:_,w=ye(),x=(0,T.useRef)(null),C=n===Lt.Handle,k=de((0,T.useCallback)(Rx(C&&p),[C,p]),ve),M=(0,T.useRef)(null),R=t??Dx[n];(0,T.useEffect)(()=>{if(!(!x.current||!h))return M.current||(M.current=Xl({domNode:x.current,nodeId:h,getStoreItems:()=>{let{nodeLookup:P,transform:H,snapGrid:I,snapToGrid:v,nodeOrigin:E,domNode:N}=w.getState();return{nodeLookup:P,transform:H,snapGrid:I,snapToGrid:v,nodeOrigin:E,paneDomNode:N}},onChange:(P,H)=>{let{triggerNodeChanges:I,nodeLookup:v,parentLookup:E,nodeOrigin:N}=w.getState(),S=[],z={x:P.x,y:P.y},A=v.get(h);if(A&&A.expandParent&&A.parentId){let B=A.origin??N,F=P.width??A.measured.width??0,V=P.height??A.measured.height??0,X={id:A.id,parentId:A.parentId,rect:{width:F,height:V,...Xi({x:P.x??A.position.x,y:P.y??A.position.y},{width:F,height:V},A.parentId,v,B)}},U=sr([X],v,E,N);S.push(...U),z.x=P.x?Math.max(B[0]*F,P.x):void 0,z.y=P.y?Math.max(B[1]*V,P.y):void 0}if(z.x!==void 0&&z.y!==void 0){let B={id:h,type:"position",position:{...z}};S.push(B)}if(P.width!==void 0&&P.height!==void 0){let F={id:h,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:P.width,height:P.height}};S.push(F)}for(let B of H){let F={...B,type:"position"};S.push(F)}I(S)},onEnd:({width:P,height:H})=>{let I={id:h,type:"dimensions",resizing:!1,dimensions:{width:P,height:H}};w.getState().triggerNodeChanges([I])}})),M.current.update({controlPosition:R,boundaries:{minWidth:s,minHeight:c,maxWidth:l,maxHeight:u},keepAspectRatio:d,resizeDirection:f,onResizeStart:y,onResize:b,onResizeEnd:g,shouldResize:m}),()=>{M.current?.destroy()}},[R,s,c,l,u,d,y,b,g,m]);let W=R.split("-");return(0,L.jsx)("div",{className:Ce(["react-flow__resize-control","nodrag",...W,n,o]),ref:x,style:{...r,scale:k,...a&&{[C?"backgroundColor":"borderColor"]:a}},children:i})}var h1=(0,T.memo)(Ax);async function _e(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status})}return r}function qe(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var wu=()=>_e("config");var vu=()=>_e("assets"),yr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},ku=e=>_e("asset/delete",qe({id:e})),ca=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),_e(`history?${t.toString()}`)},Su=(e=14)=>_e(`history/stats?days=${e}`),Cu=e=>_e("generate",qe(e)),_u=e=>_e(`task?id=${encodeURIComponent(e)}`),Eu=e=>_e("task/cancel",qe({id:e})),Nu=(e,t,n)=>_e("workflow/save",qe({name:e,nodes:t,edges:n})),ua=()=>_e("workflow/list"),Mu=e=>_e(`workflow/load?name=${encodeURIComponent(e)}`),Iu=(e,t)=>_e("recovery/save",qe({nodes:e,edges:t})),Pu=()=>_e("recovery/latest"),zu=e=>_e("settings",qe({model:e})),Ru=e=>_e("settings",qe({profile:e})),so=e=>_e("settings",qe({outputDir:e})),Du=e=>_e("settings",qe({budget:e})),da=e=>_e("settings",qe({imagoraRoot:e})),Au=(e={})=>_e("pick-folder",qe(e)),$n=e=>_e("reveal",qe({path:e})),fa=e=>_e("provider",qe(e)),Ou=e=>_e("provider/probe",qe(e));var Tu=/[\w\u4e00-\u9fa5.-]/;var Ox=/[\p{L}\p{N}]/u;function $u(e){return e===void 0?!0:!Ox.test(e)}function Lu(e){return e.trim().replace(/\s+/g," ")}function Tx(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&$u(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Tu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Tu.test(i))break;r+=1}$u(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function $x(e){let t=[];for(let n of Tx(e))n.kind==="ref"&&t.push(n.token);return t}function Hu(e,t){let n=$x(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let l=Lu(c.name);if(l==="")continue;let u=o.get(l);u===void 0?o.set(l,[c.id]):u.includes(c.id)||u.push(c.id)}let r=[],i=new Set,a=[],s=new Set;for(let c of n){let l=Lu(c.name),u=o.get(l);if(u===void 0){s.has(l)||(s.add(l),a.push(l));continue}for(let d of u)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var Lx=/\.(png|jpe?g|webp|gif|bmp)$/i;function Fu(e){return e.type.startsWith("image/")?!0:Lx.test(e.name)}var Bu=30,Wu=200;function Vu(e,t){if(t&&Math.abs(t.x-e.x)<Wu&&Math.abs(t.y-e.y)<Wu){let n={x:t.x+Bu,y:t.y+Bu};return{position:n,next:n}}return{position:e,next:e}}var Hx=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Bx(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!Hx.test(n));return t.length?t.join(" "):void 0}function ln(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function Gu(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function Xu(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function Wx(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function pa(e,t,n){let o=new Set(n);return{nodes:e.map(i=>{let a=Bx(i.className),s={...i};return a===void 0?delete s.className:s.className=a,s.type==="image"&&o.has(s.data.registryId)?{...s,data:{...s.data,missing:!0}}:s.type==="prompt"?{...s,data:{...s.data,quality:s.data.quality??"high",status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}:s}),edges:Wx(t)}}function ft(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function qu(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function Fx(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Vx(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let l=c.pop();if(a.has(l))continue;a.add(l);let u=o.get(l);u&&(u.type==="prompt"?s.add(l):u.type==="group"&&c.push(...r.get(l)??[]))}n.set(i.data.registryId,s.size)}}function Yu(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of r.get(e)??[]){let l=o.get(c);if(l){if(l.type==="image")a+=1,s.push(l.data.registryId);else if(l.type==="group"){let u=Yu(c,t,n);a+=u.count,s.push(...u.ids)}}}return t.delete(e),{count:a,ids:s}}function Gx(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=Yu(a.id,new Set,t),l=new Set(c);n.set(a.id,l.size),o.set(a.id,Array.from(l).reduce((u,d)=>u+(i.get(d)??0),0)),r.set(a.id,s-l.size)}}function Uu(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=Fx(e,t);return Vx(e,a,n),Gx(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function Xx(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=o.get(s);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(l=>l.target===s).forEach(l=>a.push(l.source)))}return r}function Zu(e,t,n,o){let r=Xx(e,t,n),i=r.map(l=>({id:l.id,name:l.type==="image"?l.data.name:""})),a=Hu(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(l=>[l.id,l])),c=[];for(let l of a.ids){let u=s.get(l);u&&c.push(u)}return{images:c,unknown:a.unknown,mode:a.mode}}function xr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function wr(e,t){return t.reduce((n,o)=>!n||xr(e,o)<xr(e,n)?o:n,null)}function lo(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function qx(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=wr(r,n);if(i&&r.position.y>i.position.y){lo(e,i,r);continue}let a=wr(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||xr(r,a)<xr(r,i))?lo(e,r,a):i&&lo(e,r,i)}}function Yx(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=wr(r,n);a&&lo(e,r,a)}}function Ux(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(l=>{let u=o.get(l.source)?.type;return l.target===a.id&&(u==="image"||u==="group")}))continue;let c=wr(a,i);c&&lo(e,c,a)}}function ma(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return qx(a,e,n,o),Yx(a,o,n,i),Ux(a,n,o,r),a.next}function Ku(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?ma(o,t):t}function ju(e){return`\u751F\u6210\u4E2D ${e}s`}function le(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var Zx=/^=== (.+) ===\s*$/,Ju=/^```(?:text)?\s*$/,Kx=/^ratio:\s*(\d+):(\d+)\s*$/,jx=/^ratio\b/i;function Qu(e){return e.split(`
`).some(t=>Ju.test(t))}function ed(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((l,u)=>{let d=l.match(Zx)?.[1];d!==void 0&&a.push({title:d.trim(),line:u})}),a.length===0){let l=t.trim();return l&&i.push(l),Qu(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),Qu(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let l=0;l<a.length;l++){let u=a[l];if(u===void 0)continue;let{title:d}=u,f=u.line+1,p=a[l+1],m=p===void 0?n.length:p.line,y=n.slice(f,m);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let b=[];y.forEach((W,P)=>{Ju.test(W)&&b.push(P)});let g=b[0],_=b[b.length-1];if(g===void 0||_===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let h=y.slice(0,g).join(`
`).trim();h&&i.push(h);let w=y.slice(g+1,_),x=w.findIndex(W=>W.trim()!=="");if(x===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let C=(w[x]??"").trim(),k=C.match(Kx);if(!k){jx.test(C)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${C}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let M=`${k[1]}:${k[2]}`,R=w.slice(x+1).join(`
`).trim();if(!R){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:M,prompt:R})}return{cards:o,issues:r,skippedText:i}}function Qx(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function td(e,t,n){let o=ow(n,e.length);return e.map((r,i)=>{let a=Qx(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var ga=380,Jx=326,nd=40,ew=74,tw=ga+nd,nw=Jx+ew,vr=3;function ow(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/vr),a=r%vr,s=Math.min(vr,n-i*vr),c=s*ga+(s-1)*nd,l=e.x+ga/2-c/2;o.push({x:l+a*tw,y:e.y+i*nw})}return o}var rw={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function kr(e){let t=e.measured,n=rw[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var ha=[0,.5,1];function od(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function id(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function rd(e,t,n,o){let r=ha.map(s=>od(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&id(c))for(let l=0;l<ha.length;l+=1){let u=ha[l];if(u===void 0)continue;let d=od(c,n,u);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let m=d-p,y=Math.abs(m);y>=o||y>=a||(a=y,i={delta:m,position:d,targetId:c.id})}}}return i}function Sr(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!id(e)||!Number.isFinite(n)||n<=0)return o;let r=rd(e,t,"x",n),i=rd(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var ad="imagora.canvas-snap.v1";function sd(){try{let e=window.localStorage.getItem(ad);return e===null?!0:e!=="0"}catch{return!0}}function ld(e){try{window.localStorage.setItem(ad,e?"1":"0")}catch{}}function uo(e){let t=kr(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var co=[];function cd(e,t,n){if(!n)return{changes:e,guides:co};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:co};let r=o[0];if(!r)return{changes:e,guides:co};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:co};let s={...uo(i),x:a.x,y:a.y},c=[];for(let d of t)d.id!==r.id&&c.push(uo(d));let l=Sr(s,c);return l.guides.length===0?{changes:e,guides:co}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:l.x,y:l.y}}:d),guides:l.guides}}var Ve=require("react");var ba=require("react/jsx-runtime"),ud={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function Pe({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=ud[e]||ud.help;return(0,ba.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,ba.jsx)("path",{d:r})})}var Ln=require("react");var ya=["\u6B63\u5728\u7406\u89E3\u63D0\u793A\u8BCD\u2026","\u6B63\u5728\u6784\u56FE\u2026","\u6B63\u5728\u94FA\u8BBE\u5149\u5F71\u2026","\u6B63\u5728\u7EC6\u5316\u7EC6\u8282\u2026","\u5FEB\u597D\u4E86\uFF0C\u6B63\u5728\u6536\u5C3E\u2026"];function iw(e){let t=Number.isFinite(e)&&e>0?e:0,n=10+(1-Math.exp(-t/28))*88;return Math.min(98,Math.max(10,n))}function dd(e){return iw(e)/100}function xa(e){let t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/2)%ya.length;return ya[n]??ya[0]??""}function fd(e){let t=Number.isFinite(e)&&e>0?Math.floor(e):0;return`\u751F\u6210\u4E2D ${t}s \xB7 ${xa(t)}`}var cn=require("react/jsx-runtime");function pd({className:e}){let[t,n]=(0,Ln.useState)(0),o=(0,Ln.useRef)(!0);(0,Ln.useEffect)(()=>{o.current=!0;let a=window.setInterval(()=>{o.current&&n(s=>s+1)},1e3);return()=>{o.current=!1,window.clearInterval(a)}},[]);let r=fd(t),i=dd(t);return(0,cn.jsxs)("div",{className:`im-pending${e?` ${e}`:""}`,role:"status","aria-live":"polite","aria-label":r,children:[(0,cn.jsx)("div",{className:"im-pending-label",title:r,children:r}),(0,cn.jsx)("div",{className:"im-pending-track","aria-hidden":!0,children:(0,cn.jsx)("div",{className:"im-pending-bar",style:{transform:`scaleX(${i.toFixed(4)})`}})}),(0,cn.jsx)("span",{className:"visually-hidden",children:xa(t)})]})}var xe=require("react"),Sd=require("react-dom");var aw={id:"__custom",label:"\u81EA\u5B9A\u4E49"},sw=64;function md(e){return e.trim().replace(/\s+/g," ")}function lw(e,t){return e.some(n=>n.value===t)}function gd(e,t){let n=md(t);return n===""||lw(e,n)?e:[...e,{value:n,label:n,group:aw}]}function hd(e){let t=md(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>sw?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function bd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var Cr=0;function yd(){Cr+=1}function xd(){Cr=Math.max(0,Cr-1)}function wd(){return Cr>0}var cw=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function wa(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=cw.has(o)?"-":n}return t}function vd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function uw(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+vd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,l=n;for(let[u,d]of o.entries()){if(c!==n&&(l=Math.max(l,c+u-2)),e.charAt(u)===t.charAt(i)){let f=1+vd(e,u),p=n;s!==n&&(p=s+f+4),l!==n&&(p=Math.max(p,l+f+1-u)),a[u]=p}c=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function kd(e,t){let n=wa(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,c;for(let l of a){let u=wa(l).toLowerCase(),d=uw(u,n);d!==void 0&&(s||=u.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:s,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var be=require("react/jsx-runtime"),dw=4;function Hn({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:c,"aria-describedby":l,"aria-invalid":u,renderOption:d,title:f}){let[p,m]=(0,xe.useState)(!1),[y,b]=(0,xe.useState)(-1),[g,_]=(0,xe.useState)(""),[h,w]=(0,xe.useState)(null),x=(0,xe.useRef)(null),C=(0,xe.useRef)(null),k=(0,xe.useRef)(null),M=(0,xe.useId)(),R=`${r??`select-${M}`}-listbox`,W=`${R}-search`,P=(0,xe.useMemo)(()=>{if(g.trim()==="")return e;let $=e.map(D=>({name:D.value,label:D.label,option:D}));return kd($,g).map(D=>D.option)},[e,g]),H=i===void 0||i==="auto"?e.length>dw:i,I=P.findIndex($=>$.value===t),v=e.find($=>$.value===t),E=$=>`${R}-option-${$}`,N=H&&s===!0,S=(0,xe.useMemo)(()=>{let $=g.trim();if($!=="")return P.find(D=>D.value===$||D.label===$)},[P,g]),z=(0,xe.useMemo)(()=>{if(!N||S!==void 0)return null;let $=hd(g);return $.ok?$.value:null},[N,S,g]),A=($=I>=0?I:0)=>{!e.length&&!N||(b(e.length===0?-1:Math.min(Math.max($,0),e.length-1)),m(!0),H||window.setTimeout(()=>C.current?.focus(),0))},B=($=!1)=>{m(!1),_(""),$&&window.setTimeout(()=>C.current?.focus(),0)},F=$=>{let D=P[$];D&&(n(D.value),B(!0))},V=$=>{c?.($),B(!0)},X=()=>{let $=C.current;if(!$)return;let D=$.getBoundingClientRect(),Y=4,J=8,oe=$.offsetWidth||D.width,j=Math.max(J,Math.min(D.left,window.innerWidth-oe-J)),te=window.innerHeight-D.bottom-Y-J,se=D.top-Y-J,ce=te<160&&se>te,pe=Math.max(120,Math.min(240,ce?se:te));w({left:j,top:ce?Math.max(J,D.top-Y-pe):D.bottom+Y,width:oe,maxHeight:pe})};(0,xe.useEffect)(()=>{if(p)return yd(),()=>xd()},[p]),(0,xe.useLayoutEffect)(()=>{if(!p)return;X();let $=()=>X();window.addEventListener("scroll",$,!0),window.addEventListener("resize",$);let D=typeof ResizeObserver>"u"?null:new ResizeObserver($);return C.current&&D?.observe(C.current),()=>{D?.disconnect(),window.removeEventListener("scroll",$,!0),window.removeEventListener("resize",$)}},[p]),(0,xe.useEffect)(()=>{p&&H&&h&&k.current?.focus()},[p,H,h]),(0,xe.useEffect)(()=>{p&&b($=>P.length===0?-1:Math.min(Math.max($,0),P.length-1))},[p,P.length]),(0,xe.useEffect)(()=>{!e.length&&!N&&p&&(m(!1),b(-1))},[p,e.length,N]),(0,xe.useEffect)(()=>{let $=D=>{let Y=D.target;x.current?.contains(Y)||document.getElementById(R)?.contains(Y)||B()};return document.addEventListener("mousedown",$,!0),()=>document.removeEventListener("mousedown",$,!0)},[R]);let U=($,D)=>{if($.key==="Tab"){B();return}if($.key==="Escape"){p&&($.preventDefault(),B(!0));return}if($.key==="ArrowDown"||$.key==="ArrowUp"){if($.preventDefault(),!p){A();return}if(P.length===0)return;let Y=$.key==="ArrowDown"?1:-1;b(J=>(J+Y+P.length)%P.length);return}if($.key==="Home"||$.key==="End"){if(P.length===0)return;$.preventDefault(),p||m(!0),b($.key==="Home"?0:P.length-1);return}if($.key==="Enter"){if($.preventDefault(),!p){A();return}if(N&&g.trim()!==""){S!==void 0?(n(S.value),B(!0)):z!==null&&V(z);return}F(y);return}!D&&$.key===" "&&($.preventDefault(),p?F(y):A())},Q=(0,xe.useMemo)(()=>bd(P),[P]),q=(0,xe.useMemo)(()=>{let $=new Map;return P.forEach((D,Y)=>$.set(D,Y)),$},[P]);return(0,be.jsxs)("div",{ref:x,className:`im-select-root ${o}`.trim(),children:[(0,be.jsxs)("button",{ref:C,type:"button",id:r,title:f,onClick:()=>p?B():A(),onKeyDown:$=>U($,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":R,"aria-activedescendant":p&&y>=0?E(y):void 0,"aria-describedby":l,"aria-invalid":u,className:`im-select-trigger${p?" is-open":""}`,children:[d&&v?(0,be.jsxs)("span",{className:"im-select-value",children:[d(v),(0,be.jsx)("span",{className:"im-select-label",children:v.label})]}):(0,be.jsx)("span",{className:"im-select-label",children:v?.label??"\u8BF7\u9009\u62E9"}),(0,be.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,be.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&h&&(0,Sd.createPortal)((0,be.jsxs)("div",{id:R,"data-portal":"select-list",className:"im-select-list",style:{left:h.left,top:h.top,width:h.width,maxHeight:h.maxHeight},children:[H&&(0,be.jsx)("div",{className:"im-select-search",children:(0,be.jsx)("input",{ref:k,id:W,type:"text",className:"im-select-search-input",value:g,onChange:$=>_($.target.value),onKeyDown:$=>U($,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":R,"aria-activedescendant":y>=0?E(y):void 0})}),(0,be.jsxs)("ul",{role:"listbox","aria-labelledby":H?W:void 0,className:"im-select-rows",children:[P.length===0&&(0,be.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),Q.map($=>(0,be.jsxs)("li",{role:"presentation",className:"im-select-group",children:[$.label!==""&&(0,be.jsx)("div",{className:"im-select-group-title",role:"presentation",children:$.label}),(0,be.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:$.rows.map(D=>{let Y=q.get(D)??-1,J=D.value===t,oe=Y===y;return(0,be.jsxs)("li",{id:E(Y),role:"option","aria-selected":J,className:`im-select-option${J?" is-selected":""}${oe?" is-active":""}`,onMouseEnter:()=>b(Y),onMouseDown:j=>j.preventDefault(),onClick:()=>F(Y),children:[d?(0,be.jsxs)("span",{className:"im-select-value",children:[d(D),(0,be.jsx)("span",{className:"im-select-label",children:D.label})]}):(0,be.jsx)("span",{className:"im-select-label",children:D.label}),J&&(0,be.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,be.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},D.value)})})]},$.id||"__ungrouped"))]}),z!==null&&(0,be.jsx)("div",{className:"im-select-custom",children:(0,be.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:$=>$.preventDefault(),onClick:()=>V(z),children:(0,be.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",z,"\u201D"]})})})]}),document.body)]})}var Z=require("react/jsx-runtime"),va=(0,Ve.createContext)(null),ka=(0,Ve.createContext)(!1);function Sa(){return(0,Ve.useContext)(ka)}function Ca(){let e=(0,Ve.useContext)(va);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function _r(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(sn,{type:"target",position:ee.Top,className:"im-handle"}),(0,Z.jsx)(sn,{type:"source",position:ee.Bottom,className:"im-handle"})]})}function _a({children:e}){return(0,Z.jsx)("div",{className:"im-rail nodrag",children:e})}function Pt({label:e,onClick:t,danger:n,children:o}){return(0,Z.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var Ed=(0,Ve.memo)(function({id:t,data:n,selected:o}){let r=Ca(),i=Sa(),[a,s]=(0,Ve.useState)(!1),c=n.missing||a;return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${c?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,Z.jsx)(_r,{}),c?(0,Z.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,Z.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:l=>{l.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,i?null:(0,Z.jsxs)(_a,{children:[(0,Z.jsx)(Pt,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,Z.jsx)(Pe,{name:"eye"})}),(0,Z.jsx)(Pt,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,Z.jsx)(Pe,{name:"crop"})}),(0,Z.jsx)(Pt,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,Z.jsx)(Pe,{name:"expand"})}),(0,Z.jsx)(Pt,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,Z.jsx)(Pe,{name:"grid"})}),(0,Z.jsx)(Pt,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,Z.jsx)(Pe,{name:"wand"})}),(0,Z.jsx)(Pt,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,Z.jsx)(Pe,{name:"image"})}),(0,Z.jsx)(Pt,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Pe,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-thumb",onDoubleClick:l=>{l.stopPropagation(),r.zoomImage(t)},children:n.url?(0,Z.jsx)("img",{src:n.url,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):(0,Z.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,Z.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Z.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),Cd=4,Nd=(0,Ve.memo)(function({id:t,data:n,selected:o}){let r=Ca(),i=Sa(),a=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,c=Math.min(Math.max(n.imageCount-1,0),3);return(0,Z.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,Z.jsx)(_r,{}),i?null:(0,Z.jsx)(_a,{children:(0,Z.jsx)(Pt,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Pe,{name:"trash"})})}),(0,Z.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:c},(l,u)=>(0,Z.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(u+1)*Cd}px, ${-(u+1)*Cd}px)`}},u)),(0,Z.jsxs)("div",{className:"im-group-face",children:[(0,Z.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,Z.jsxs)("div",{className:"im-group-size",children:[a," MB"]}),s>0?(0,Z.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function _d({from:e}){let[t,n]=(0,Ve.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ve.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Z.jsx)(Z.Fragment,{children:ju(t)})}var fw={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"};function pw(e){switch(e.status){case"queued":return{text:"\u6392\u961F\u4E2D",detail:"\u6392\u961F\u4E2D",tone:"is-queued"};case"running":return{text:"\u751F\u6210\u4E2D",detail:"\u751F\u6210\u4E2D",tone:"is-running"};case"done":return{text:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,detail:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,tone:"is-done"};case"failed":return{text:"\u5931\u8D25",detail:e.message?`\u5931\u8D25\uFF1A${e.message}`:"\u5931\u8D25",tone:"is-failed"};default:return{text:"\u5C31\u7EEA",detail:"\u5C31\u7EEA",tone:"is-idle"}}}var Md=(0,Ve.memo)(function({id:t,data:n,selected:o}){let r=Ca(),i=Sa(),a=r.config,s=n.status==="queued"||n.status==="running",c=a?.sizes??[],l=a?.qualities??[],u=c.some(f=>f.value===n.size)||!n.size?c:[...c,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],d=a?.qualityEffective!==!1;if(i){let f=pw(n);return(0,Z.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(_r,{}),(0,Z.jsx)("div",{className:"im-lod-title",title:n.title??"\u63D0\u793A\u8BCD\u751F\u6210",children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("div",{className:`im-lod-status ${f.tone}`,title:f.detail,children:n.status==="running"?(0,Z.jsx)(_d,{from:n.startedAtMs}):f.text})]})}return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(_r,{}),(0,Z.jsxs)(_a,{children:[(0,Z.jsx)("span",{className:"im-rail-dot",title:fw[n.status]??"\u5C31\u7EEA",children:(0,Z.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Z.jsx)(Pt,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(Pe,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n.prompt,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onChange:f=>r.updatePrompt(t,{prompt:f.target.value})}),(0,Z.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:d?"7fr 3fr":"1fr",marginTop:8},children:[(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,Z.jsx)(Hn,{className:"im-select-fill",options:gd(u,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:f=>r.updatePrompt(t,{size:f})})]}),d?(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,Z.jsx)(Hn,{className:"im-select-fill",options:l.map(f=>({value:f,label:f})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:f=>r.updatePrompt(t,{quality:f})})]}):null]}),(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,Z.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:a?.defaultOutputDir??"",onChange:f=>r.updatePrompt(t,{outputDir:f.target.value})})]}),n.status==="running"?(0,Z.jsx)(pd,{}):null,n.status==="failed"&&n.message?(0,Z.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Z.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!n.prompt.trim(),onClick:f=>{f.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,Z.jsx)(_d,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,Z.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:f=>{f.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var Id=`
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
/* \u6210\u672C\u6761\uFF1A\u6307\u6807\u7B49\u5BBD\u6210\u5217\uFF08\u6807\u7B7E\u5728\u4E0A\u3001\u6570\u503C\u5728\u4E0B\uFF09\uFF0C\u4E0E\u539F\u7248 CostBoard \u540C\u6784\u3002
   \u539F\u7248\u8FD8\u5E26\u300C\u65E5\u9884\u7B97 / \u5355\u6B21\u4E0A\u9650\u300D\u4E24\u4E2A\u8F93\u5165\u6846 \u2014\u2014 \u90A3\u662F\u5199\u63A5\u53E3\uFF0C\u672C\u6B65\u6CA1\u505A\uFF08\u89C1 PR \u8BF4\u660E\uFF09\u3002 */
.im-history-stats {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  gap: 16px 24px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-surface-float);
}
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
/* \u63D0\u793A\u8BCD\uFF1A2 \u884C\u622A\u65AD\uFF08\u539F\u7248 line-clamp-2\uFF09\u3002\u5B8C\u6574\u5185\u5BB9\u8D70 title \u2014\u2014 \u63D2\u4EF6\u7EDF\u4E00\u7528\u539F\u751F title\uFF0C
   \u4E0D\u5F15\u5BBF\u4E3B\u6C14\u6CE1\uFF08\u89C1\u6839 AGENTS \u7684\u300C\u539F\u751F title\u300D\u90A3\u6761\u5751\uFF09\u3002 */
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
`;var Pd={image:Ed,prompt:Md,group:Nd};function zd(e,t){return!e&&t<.1?!0:e&&t>.2?!1:e}var un=require("react/jsx-runtime"),mw="0 0 1024 1024",gw="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function Ea({size:e=30,fill:t="var(--im-brand)"}){return(0,un.jsx)("svg",{width:e,height:e,viewBox:mw,fill:t,"aria-hidden":"true",children:(0,un.jsx)("path",{d:gw})})}function Rd({onClick:e}){return(0,un.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,un.jsx)(Ea,{}),(0,un.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var Dd=require("react"),dn=require("react/jsx-runtime");function hw(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function Ad(e){return(0,Dd.useMemo)(()=>hw(e),[e])}function Od({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,dn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,dn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,dn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,dn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,dn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Ee=require("react/jsx-runtime");function Td(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(c,l,u)=>(0,Ee.jsx)("button",{type:"button",className:`${u.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:u.title,disabled:u.disabled,onClick:l,children:c});return(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsxs)("div",{className:"im-header",children:[(0,Ee.jsx)(Rd,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Ee.jsx)(Hn,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,Ee.jsx)(Hn,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,Ee.jsx)(Od,{summary:e.cost,budget:t?.budget??0}),(0,Ee.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,Ee.jsxs)("div",{className:"im-toolbar",children:[(0,Ee.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,Ee.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,Ee.jsx)("span",{className:"im-drag-grip",children:(0,Ee.jsx)(Pe,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,Ee.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,Ee.jsx)("span",{className:"im-drag-grip",children:(0,Ee.jsx)(Pe,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,Ee.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,Ee.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var He=require("react/jsx-runtime");function Ht({icon:e,label:t,title:n,active:o,onClick:r}){return(0,He.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,He.jsx)(Pe,{name:e,size:14}),(0,He.jsx)("span",{className:"im-dock-row-label",children:t})]})}function $d(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,He.jsxs)("div",{className:"im-dock nodrag",children:[(0,He.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,He.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,He.jsx)(Ht,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,He.jsx)(Ht,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,He.jsx)(Ht,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,He.jsx)(Ht,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,He.jsx)(Ht,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,He.jsx)(Ht,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,He.jsx)(Ht,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,He.jsx)(Ht,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Be=require("react"),Wd=require("react-dom");var Na="application/x-dsh-imagora-canvas",Er={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},Ld="\u677E\u5F00\u53D6\u6D88";function Ma(e){return e.dataTransfer?.types.includes("Files")??!1}function fo(e,t){if(Ma(e))return"images";let n=e.dataTransfer?.getData(Na);return n==="prompt"||n==="group"?n:t}function Hd(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Bd(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":Er[e]}function Ia(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var zt=require("react/jsx-runtime"),bw=22,yw=28,Nr=8;function Fd(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,c]=(0,Be.useState)(null),l=(0,Be.useRef)(null),u=(0,Be.useRef)(0),d=(0,Be.useRef)(null),f=(0,Be.useRef)(null),p=(0,Be.useRef)(null),m=(0,Be.useCallback)((x,C)=>{l.current=x,c(x);let k=p.current;k&&k.textContent!==C&&(k.textContent=C)},[]),y=(0,Be.useCallback)(()=>{l.current=null,u.current=0,c(null),f.current?.classList.remove("is-outside")},[]),b=(0,Be.useCallback)((x,C)=>{let k=d.current;if(!k)return;let M=Math.min(x+bw,window.innerWidth-k.offsetWidth-Nr),R=Math.min(C+yw,window.innerHeight-k.offsetHeight-Nr);k.style.transform=`translate(${Math.max(Nr,M)}px, ${Math.max(Nr,R)}px)`},[]),g=(0,Be.useCallback)((x,C,k)=>{let M=t.current;if(!M)return o();let R=M.getBoundingClientRect(),W=k?Math.min(Math.max(x,R.left),R.left+R.width):x,P=k?Math.min(Math.max(C,R.top),R.top+R.height):C;return r({x:W,y:P})},[t,o,r]);(0,Be.useEffect)(()=>{let x=M=>{Ma(M)&&M.preventDefault()},C=M=>{let R=l.current;if(!R||R==="images")return;b(M.clientX,M.clientY);let W=t.current,P=!!(W&&Ia(M.clientX,M.clientY,W.getBoundingClientRect())),H=P?Er[R]:Ld,I=p.current;I&&I.textContent!==H&&(I.textContent=H),f.current?.classList.toggle("is-outside",!P)},k=()=>{u.current=0,y()};return window.addEventListener("dragover",x),window.addEventListener("dragover",C),window.addEventListener("drop",x),window.addEventListener("dragend",k),window.addEventListener("blur",k),()=>{window.removeEventListener("dragover",x),window.removeEventListener("dragover",C),window.removeEventListener("drop",x),window.removeEventListener("dragend",k),window.removeEventListener("blur",k)}},[t,y,b]);let _={onDragEnter:x=>{if(n)return;let C=fo(x,l.current);C&&(x.preventDefault(),C==="images"&&(u.current+=1),m(C,Bd(C,Hd(x.dataTransfer))),b(x.clientX,x.clientY))},onDragOver:x=>{n||!fo(x,l.current)||(x.preventDefault(),x.dataTransfer.dropEffect="copy",b(x.clientX,x.clientY))},onDragLeave:x=>{n||fo(x,l.current)==="images"&&(u.current-=1,u.current<=0&&y())},onDrop:x=>{if(n)return;let C=fo(x,l.current);if(!C)return;x.preventDefault();let k=t.current,M=!k||Ia(x.clientX,x.clientY,k.getBoundingClientRect());if(y(),C==="images"){let R=Array.from(x.dataTransfer.files??[]);if(!R.length)return;i(R,g(x.clientX,x.clientY,!0));return}M&&a(C,g(x.clientX,x.clientY,!1))}},h=(0,Be.useCallback)((x,C)=>{x.dataTransfer.setData(Na,C),x.dataTransfer.effectAllowed="copy",m(C,Er[C]),b(x.clientX,x.clientY)},[b,m]),w=(0,Wd.createPortal)((0,zt.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,zt.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,zt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,zt.jsx)(Pe,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,zt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,zt.jsx)(Pe,{name:"close",size:14})}),(0,zt.jsx)("span",{ref:p,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:w,dragHandlers:_,startToolbarDrag:h,hideDropChip:y}}var Vd="dsh-imagora.canvas-minimap.v1";function Gd(){try{let e=localStorage.getItem(Vd);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Xd(e){try{localStorage.setItem(Vd,e?"1":"0")}catch{}}var Bt=require("react/jsx-runtime");function qd(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,Bt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Bt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u5C40\u90E8\u6574\u7406\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u540C\u5C42\u63D0\u793A\u8BCD\u5361\u7247\u6309\u5DE6\u4E0A\u89D2\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Bt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var Ye=require("react/jsx-runtime");function Yd(){return(0,Ye.jsxs)("div",{className:"im-empty",children:[(0,Ye.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,Ye.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,Ye.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var xw=5;function Ud({logs:e}){if(!e.length)return null;let t=e.slice(-xw);return(0,Ye.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,Ye.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var ww={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Zd({text:e}){return e?(0,Ye.jsx)("div",{style:ww,children:e}):null}function Kd({tone:e,children:t,action:n}){return(0,Ye.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ye.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ye.jsx)(Pe,{name:e==="error"?"help":"clock"})}),(0,Ye.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ye.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var we=require("react"),of=require("react-dom");async function vw(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function jd(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await vw(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function Qd(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var po=e=>Math.min(8,Math.max(.2,e));function Jd(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function ef(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function tf(e,t,n){return Math.round(e*ef(t,n)*100)}function nf(e,t){let n=ef(e,t);return n?po(1/n):1}var me=require("react/jsx-runtime"),Mr=1.2,kw=5;function Ir({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,we.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,we.useState)(!1),[c,l]=(0,we.useState)(null),u=(0,we.useRef)(null),d=(0,we.useRef)(!1),f=c?.kind==="copying",p=(0,we.useRef)(null),[m,y]=(0,we.useState)(null),b=(0,we.useRef)({width:0,height:0}),g=(0,we.useRef)(null),_=(0,we.useRef)(null),h=(0,we.useRef)(null),w=(0,we.useRef)(null),x=(0,we.useCallback)(S=>{let z=h.current;return z?{zoom:S.zoom,pan:Jd(S.pan,S.zoom,b.current,{width:z.clientWidth,height:z.clientHeight})}:S},[]),C=(0,we.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),k=(0,we.useCallback)(()=>{let S=w.current;if(!S)return;b.current={width:S.clientWidth,height:S.clientHeight};let z={width:S.naturalWidth,height:S.naturalHeight};p.current=z,y(A=>A&&A.width===z.width&&A.height===z.height?A:z)},[]);(0,we.useEffect)(()=>{let S=()=>k();return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[k]);let M=(0,we.useCallback)(()=>{let S=nf(p.current,b.current);i(z=>x({zoom:S,pan:z.pan}))},[x]),R=(0,we.useCallback)(()=>{let S=p.current,z=_.current;if(!S||!z)return;let A=z.clientWidth*.98,B=z.clientHeight*.98,F=po(Math.min(1,A/S.width,B/S.height));i({zoom:F,pan:{x:0,y:0}})},[]);(0,we.useEffect)(()=>{let S=h.current;if(!S)return;let z=A=>{A.preventDefault(),A.stopPropagation();let B=S.getBoundingClientRect(),F=A.clientX-B.left-B.width/2,V=A.clientY-B.top-B.height/2;i(X=>{let U=po(A.deltaY<0?X.zoom*Mr:X.zoom/Mr);if(U===X.zoom)return X;let Q=U/X.zoom;return x({zoom:U,pan:{x:F-(F-X.pan.x)*Q,y:V-(V-X.pan.y)*Q}})})};return S.addEventListener("wheel",z,{passive:!1}),()=>S.removeEventListener("wheel",z)},[x]),(0,we.useEffect)(()=>{let S=z=>{z.key==="Escape"&&o()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[o]),(0,we.useEffect)(()=>()=>{u.current&&window.clearTimeout(u.current)},[]);let W=(S,z)=>{l({kind:S,text:z}),u.current&&window.clearTimeout(u.current),u.current=S==="copying"?null:window.setTimeout(()=>l(null),1200)},P=async(S,z)=>{if(!d.current){d.current=!0,W("copying","\u590D\u5236\u4E2D\u2026");try{await S(),W("copied",z)}catch(A){W("failed",A instanceof Error?A.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},H=S=>{r.zoom<=1||(S.preventDefault(),S.stopPropagation(),S.currentTarget instanceof Element&&S.currentTarget.setPointerCapture(S.pointerId),g.current={startX:S.clientX,startY:S.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:S.target===w.current},s(!0))},I=S=>{let z=g.current;if(!z)return;let A=S.clientX-z.startX,B=S.clientY-z.startY;!z.moved&&Math.hypot(A,B)<=kw||(z.moved=!0,i(F=>x({...F,pan:{x:z.panX+A,y:z.panY+B}})))},v=()=>{let S=g.current;g.current=null,s(!1),S&&!S.moved&&!S.onImage&&o()},E=S=>{let z=S.target instanceof Element?S.target:null;z&&(z.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},N=S=>i(z=>x({...z,zoom:po(z.zoom*S)}));return(0,of.createPortal)((0,me.jsxs)("div",{ref:_,className:"im-zoom-overlay",onPointerDown:E,onClick:S=>S.stopPropagation(),children:[(0,me.jsx)("div",{ref:h,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:H,onPointerMove:I,onPointerUp:v,onPointerCancel:v,onDoubleClick:S=>{S.stopPropagation(),C()},children:(0,me.jsx)("img",{ref:w,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let S=w.current;S&&(p.current={width:S.naturalWidth,height:S.naturalHeight},b.current={width:S.clientWidth,height:S.clientHeight},k())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,me.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,me.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,me.jsx)("div",{"aria-hidden":!0}),(0,me.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,me.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,me.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,me.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,me.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,me.jsxs)("div",{className:"im-zoom-group",children:[(0,me.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>N(1/Mr),children:(0,me.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,me.jsx)("path",{d:"M3.5 8h9"})})}),(0,me.jsxs)("span",{className:"im-zoom-readout",title:`${m?`${m.width}\xD7${m.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[tf(r.zoom,m,b.current),"%"]}),(0,me.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>N(Mr),children:(0,me.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,me.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,me.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,me.jsxs)("div",{className:"im-zoom-group",children:[(0,me.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:R,children:"\u9002\u5E94\u7A97\u53E3"}),(0,me.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:M,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,me.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,me.jsxs)("div",{className:"im-zoom-group",children:[(0,me.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void P(()=>jd(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,me.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void P(()=>Qd(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,me.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),c?(0,me.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var go=require("react");var Wt=require("react"),sf=require("react-dom");var xt=require("react/jsx-runtime"),rf=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),mo=[];function af(e){return mo[mo.length-1]===e}function Re({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:c=!1,headerless:l=!1}){let u=`im-modal-${(0,Wt.useId)()}`,d=`${u}-title`,f=(0,Wt.useRef)(null),p=(0,Wt.useRef)(null),m=(0,Wt.useRef)(o);return m.current=o,(0,Wt.useEffect)(()=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,mo.push(u);let b=f.current;(a?.current??b?.querySelector(rf)??b)?.focus();let _=h=>{if(!af(u))return;if(h.key==="Escape"){if(wd())return;h.preventDefault(),h.stopPropagation(),m.current();return}if(h.key!=="Tab"||!b)return;let w=Array.from(b.querySelectorAll(rf)).filter(k=>!k.hidden&&k.getAttribute("aria-hidden")!=="true");if(!w.length){h.preventDefault(),b.focus();return}let x=w[0],C=w[w.length-1];!x||!C||(h.shiftKey&&(document.activeElement===x||!b.contains(document.activeElement))?(h.preventDefault(),C.focus()):!h.shiftKey&&document.activeElement===C&&(h.preventDefault(),x.focus()))};return document.addEventListener("keydown",_,!0),()=>{document.removeEventListener("keydown",_,!0);let h=mo.lastIndexOf(u);h>=0&&mo.splice(h,1);let w=p.current;window.setTimeout(()=>w?.focus(),0)}},[a]),(0,sf.createPortal)((0,xt.jsx)("div",{className:`im-modal-shell${c?" im-modal-shell--nested":""}`,onMouseDown:b=>{s&&b.target===b.currentTarget&&af(u)&&o()},children:(0,xt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:b=>b.stopPropagation(),children:[l?(0,xt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,xt.jsxs)("header",{className:"im-modal-header",children:[(0,xt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,xt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,xt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,xt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ae=require("react/jsx-runtime");function lf({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,go.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,go.useState)(null),c=r.trim(),l=e.some(d=>d.name===c),u=()=>{if(c){if(l&&a!==c){s(c);return}n(c)}};return a?(0,ae.jsx)(Re,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,ae.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,ae.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,ae.jsxs)(Re,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c,onClick:u,children:"\u4FDD\u5B58"})]}),children:[(0,ae.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&u()}}),(0,ae.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,ae.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,ae.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,ae.jsx)("span",{className:"im-pick-name",children:d.name}),(0,ae.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function cf({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,ae.jsx)(Re,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,ae.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,ae.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,ae.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,ae.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,ae.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var Sw=[["\u753B\u5E03","\u6EDA\u8F6E\u7F29\u653E \xB7 \u5DE6\u952E\u62D6\u7A7A\u767D\u5E73\u79FB \xB7 Shift+\u62D6\u62FD\u6846\u9009 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927"],["\u8282\u70B9","\u60AC\u505C\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 Del \u5220\u9664\u9009\u4E2D"],["\u8FDE\u7EBF","\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF08\u53C2\u8003\u56FE\uFF09\uFF1B\u63D0\u793A\u8BCD \u2192 \u56FE\u7247\uFF08\u4EA7\u51FA\uFF09"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 Delete \u5220\u9664"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function uf({onClose:e,config:t}){return(0,ae.jsx)(Re,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u753B\u5E03\u3001\u8282\u70B9\u3001\u8FDE\u7EBF\u4E0E\u5FEB\u6377\u952E\u901F\u67E5\u3002",size:"lg",onClose:e,footer:(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ae.jsx)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12,fontSize:12},children:Sw.map(([n,o])=>(0,ae.jsxs)(go.Fragment,{children:[(0,ae.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,ae.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,ae.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,ae.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var et=require("react");function Ue(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function ff(e,t=.06){let n=Ue(e.width,t,1),o=Ue(e.height,t,1);return{width:n,height:o,x:Ue(e.x,0,1-n),y:Ue(e.y,0,1-o)}}function pf(e,t,n){return{...e,x:Ue(e.x+t,0,1-e.width),y:Ue(e.y+n,0,1-e.height)}}function mf(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let u=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=u,a.height*=u,a.width<.06||a.height<.06){let p=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=p,a.height*=p}a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);return a.x=Ue(a.x,0,1-a.width),a.y=Ue(a.y,0,1-a.height),a}function gf(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ue(e.x+(e.width-r)/2,0,1-r),y:Ue(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function Pa(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Cw(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function hf(e,t){let n=Cw(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function za(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Ft(e){let t=await za(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function bf(e,t){let n=await za(e);if(t)return df(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return df(n,r,i,o,o)}async function yf(e,t){let n=await za(e),{width:o,height:r}=Pa(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?_w(n,o,r):xf(n,n.width,n.height,o,r,t.algorithm)}function df(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function _w(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=wf(o,r,i,a,s,"high"),r=a,i=s}return xf(o,r,i,t,n,"high")}function xf(e,t,n,o,r,i){return wf(e,t,n,o,r,i).toDataURL("image/png")}function wf(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var De=require("react/jsx-runtime"),vf=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],Nw=["nw","n","ne","e","se","s","sw","w"],Ra={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function kf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,et.useRef)(null),[i,a]=(0,et.useState)(null),[s,c]=(0,et.useState)({x:.08,y:.08,width:.84,height:.84}),[l,u]=(0,et.useState)(null),[d,f]=(0,et.useState)(!1),[p,m]=(0,et.useState)(null),y=(0,et.useRef)(null);(0,et.useEffect)(()=>{let k=!0;return Ft(e).then(M=>{k&&(a(M),c(ff({x:.06,y:.06,width:.88,height:.88})))}).catch(M=>{k&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(M)}`)}),()=>{k=!1}},[e]);let b=k=>{u(k),i&&k!==null&&c(M=>gf(M,k,i))},g=(k,M)=>{k.stopPropagation(),k.target.setPointerCapture?.(k.pointerId),y.current={mode:M,startX:k.clientX,startY:k.clientY,base:s}},_=(0,et.useCallback)(k=>{let M=y.current,R=r.current;if(!M||!R)return;let W=R.getBoundingClientRect();if(!W.width||!W.height)return;let P=(k.clientX-M.startX)/W.width,H=(k.clientY-M.startY)/W.height;c(M.mode==="move"?pf(M.base,P,H):mf(M.base,P,H,M.mode,l,i??{width:1,height:1}))},[l,i]),h=()=>{y.current=null},w=async()=>{f(!0),m(null);try{let k=await bf(e,s),M=Math.round(s.width*(i?.width??0)),R=Math.round(s.height*(i?.height??0));await o(k,`\u88C1\u526A ${M}\xD7${R}${l?` \xB7 ${vf.find(W=>W.ratio===l)?.label}`:""}`)}catch(k){m(`\u88C1\u526A\u5931\u8D25\uFF1A${le(k)}`)}finally{f(!1)}},x=i?Math.round(s.width*i.width):0,C=i?Math.round(s.height*i.height):0;return(0,De.jsx)(Re,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",x," \xD7 ",C,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${hf(i.width,i.height)}`:"",(0,De.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||x<8||C<8,onClick:()=>void w(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},children:[(0,De.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),vf.map(k=>(0,De.jsx)("button",{type:"button","aria-pressed":k.ratio===l,className:`im-btn-sm ${k.ratio===l?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>b(k.ratio),children:k.label},k.label))]}),(0,De.jsxs)("div",{ref:r,onPointerMove:_,onPointerUp:h,onPointerCancel:h,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,De.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,De.jsx)("div",{onPointerDown:k=>g(k,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:Nw.map(k=>(0,De.jsx)("span",{onPointerDown:M=>g(M,k),style:{position:"absolute",left:Ra[k].left,top:Ra[k].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:Ra[k].cursor}},k))})]}),p?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var We=require("react");function Da(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Aa(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Oa(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Aa(e)*n/2}function Sf(e,t,n=.004){if(!Da(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function Cf(e,t,n,o){if(!Da(e)||!Da(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/r);if(c<=1)return[];let l=Math.min(c,2048),u=[];for(let d=1;d<l;d+=1){let f=d/l;u.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return u}function Mw(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function _f(e){return!Mw(e)}var Ne=require("react/jsx-runtime"),Pr=640;function Ef({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,We.useRef)(null),i=(0,We.useRef)(null),a=(0,We.useRef)(!1),[s,c]=(0,We.useState)(null),[l,u]=(0,We.useState)([]),[d,f]=(0,We.useState)("paint"),[p,m]=(0,We.useState)(.08),[y,b]=(0,We.useState)(!1),[g,_]=(0,We.useState)(null);(0,We.useEffect)(()=>{let P=!0;Ft(e).then(I=>{P&&c(I)}).catch(I=>{P&&_(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(I)}`)});let H=new Image;return H.crossOrigin="anonymous",H.onload=()=>{i.current=H},H.src=e,()=>{P=!1,i.current=null}},[e]);let h=(0,We.useMemo)(()=>s?s.width>=s.height?{width:Pr,height:Math.round(s.height/s.width*Pr)}:{width:Math.round(s.width/s.height*Pr),height:Pr}:{width:0,height:0},[s]);(0,We.useEffect)(()=>{let P=r.current,H=i.current;if(!P||!H||!h.width)return;let I=P.getContext("2d");if(!I||(P.width=h.width,P.height=h.height,I.clearRect(0,0,h.width,h.height),I.drawImage(H,0,0,h.width,h.height),!s))return;let v=Oa(p,{width:h.width,height:h.height});I.save(),I.globalAlpha=.55,I.fillStyle="#ffffff",I.strokeStyle="#ffffff",I.lineWidth=v*2,I.lineCap="round",I.lineJoin="round";for(let E of l){E.mode==="erase"?(I.globalCompositeOperation="destination-out",I.strokeStyle="#000",I.fillStyle="#000"):(I.globalCompositeOperation="source-over",I.strokeStyle="#ffffff",I.fillStyle="#ffffff");let N=E.points;if(N.length&&(I.beginPath(),I.arc(N[0].x*h.width,N[0].y*h.height,v,0,Math.PI*2),I.fill(),N.length>1)){I.beginPath(),I.moveTo(N[0].x*h.width,N[0].y*h.height);for(let S of N.slice(1))I.lineTo(S.x*h.width,S.y*h.height);I.stroke()}}I.restore()},[h,l,p,s]);let w=P=>{let H=r.current;if(!H)return null;let I=H.getBoundingClientRect();return!I.width||!I.height?null:{x:Math.min(1,Math.max(0,(P.clientX-I.left)/I.width)),y:Math.min(1,Math.max(0,(P.clientY-I.top)/I.height))}},x=P=>{let H=w(P);H&&(P.currentTarget.setPointerCapture?.(P.pointerId),a.current=!0,u(I=>[...I,{mode:d,size:p,points:[H]}]))},C=P=>{if(!a.current)return;let H=w(P);H&&u(I=>{let v=I[I.length-1];if(!v)return I;let E=Sf(v.points,H);return E===v.points?I:[...I.slice(0,-1),{...v,points:E}]})},k=()=>{a.current=!1},M=async()=>{if(!i.current||!s)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let H=document.createElement("canvas");H.width=s.width,H.height=s.height;let I=H.getContext("2d");if(!I)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");I.fillStyle="#ffffff",I.fillRect(0,0,s.width,s.height);let v=Oa(p,{width:s.width,height:s.height});I.globalCompositeOperation="destination-out",I.lineWidth=v*2,I.lineCap="round",I.lineJoin="round",I.strokeStyle="#000",I.fillStyle="#000";for(let E of l){if(E.mode!=="paint")continue;let N=Cf(E.points[0],E.points[E.points.length-1],v/4,{width:s.width,height:s.height});if(N.length&&(I.beginPath(),I.arc(N[0].x*s.width,N[0].y*s.height,v,0,Math.PI*2),I.fill(),N.length>1)){I.beginPath(),I.moveTo(N[0].x*s.width,N[0].y*s.height);for(let S of N.slice(1))I.lineTo(S.x*s.width,S.y*s.height);I.stroke()}}return H.toDataURL("image/png")},R=async()=>{b(!0),_(null);try{let P=await M();await o(P,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(P){_(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${le(P)}`)}finally{b(!1)}},W=_f(l);return(0,Ne.jsx)(Re,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Ne.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:y||W,onClick:()=>void R(),children:y?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,Ne.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ne.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ne.jsx)("button",{type:"button","aria-pressed":d==="paint",className:`im-btn-sm ${d==="paint"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("paint"),children:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"}),(0,Ne.jsx)("button",{type:"button","aria-pressed":d==="erase",className:`im-btn-sm ${d==="erase"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("erase"),children:"\u64E6"}),(0,Ne.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,Ne.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(p*100),onChange:P=>m(Aa(Number(P.target.value)/100)),className:"im-range"}),(0,Ne.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(p*100),"%"]})]}),(0,Ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>u([]),children:"\u6E05\u7A7A"}),(0,Ne.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,Ne.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,Ne.jsx)("canvas",{ref:r,onPointerDown:x,onPointerMove:C,onPointerUp:k,onPointerCancel:k,style:{width:h.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,Ne.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",s?` \xB7 \u539F\u56FE ${s.width} \xD7 ${s.height}`:""]}),g?(0,Ne.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:g}):null]})})}var ge=require("react");var ne=require("react/jsx-runtime"),Nf=60;function Mf(e){return Number.isFinite(e)?`${e.toFixed(2)} \u5143`:"-"}function Rw(e){let t=e.total?`${e.successRate.toFixed(1)}%`:"-";return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:Mf(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:Mf(e.cost)},{label:"\u6210\u529F\u7387",value:`${t}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:e.avgSeconds>0?`${e.avgSeconds.toFixed(1)}s`:"-"}]}function Dw(e){return e.replace(/[\\/][^\\/]+$/,"")}function If({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,c]=(0,ge.useState)(""),[l,u]=(0,ge.useState)(!1),[d,f]=(0,ge.useState)(0),[p,m]=(0,ge.useState)(!0),[y,b]=(0,ge.useState)(!1),[g,_]=(0,ge.useState)(""),[h,w]=(0,ge.useState)("ledger"),[x,C]=(0,ge.useState)(""),[k,M]=(0,ge.useState)(null),[R,W]=(0,ge.useState)(new Map),[P,H]=(0,ge.useState)(null),I=(0,ge.useRef)(null),v=(0,ge.useRef)(0),E=(0,ge.useRef)([]),N=(0,ge.useRef)(i),S=(0,ge.useRef)(s);N.current=i,S.current=s;let z=(0,ge.useCallback)(async q=>{let $=++v.current;m(!0),_("");try{let D=await ca({limit:Nf,offset:0,query:q?.query??N.current,status:q?.status??S.current});if($!==v.current)return;let Y=Array.isArray(D.items)?D.items:[];w(D.source==="ledger"?"ledger":"none"),C(typeof D.ledgerPath=="string"?D.ledgerPath:""),r(Y),E.current=Y,u(D.hasMore===!0),f(Number(D.total)||Y.length)}catch(D){$===v.current&&_(le(D))}finally{$===v.current&&m(!1)}},[]),A=(0,ge.useCallback)(async()=>{if(y||!l)return;let q=v.current;b(!0);try{let $=await ca({limit:Nf,offset:E.current.length,query:N.current,status:S.current});if(q!==v.current)return;let D=Array.isArray($.items)?$.items:[];r(Y=>[...Y,...D]),E.current=[...E.current,...D],u($.hasMore===!0),f(Number($.total)||E.current.length)}catch($){q===v.current&&_(le($))}finally{q===v.current&&b(!1)}},[l,y]);(0,ge.useEffect)(()=>{z(),Su().then(M).catch(()=>M(null)),vu().then(q=>W(new Map((q?.images??[]).map($=>[$.id,$])))).catch(()=>W(new Map))},[z]);let B=600,F=(0,ge.useCallback)(()=>{let q=I.current;q&&q.scrollHeight-q.scrollTop-q.clientHeight<B&&A()},[A]),V=(0,ge.useMemo)(()=>o.filter(q=>q.status==="error"&&q.inputRefMissing).length,[o]),X=k?Rw(k):[],U=k?.bySize.slice(0,3)??[],Q=x||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(Re,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,ne.jsxs)("div",{className:"im-history",children:[(0,ne.jsxs)("div",{className:"im-history-bar",children:[(0,ne.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,ne.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:q=>a(q.target.value),onKeyDown:q=>{q.key==="Enter"&&z()}}),(0,ne.jsxs)("select",{className:"im-field im-history-status",value:s,"aria-label":"\u6309\u72B6\u6001\u7B5B\u9009",onChange:q=>{c(q.target.value),z({status:q.target.value})},children:[(0,ne.jsx)("option",{value:"",children:"\u5168\u90E8\u72B6\u6001"}),(0,ne.jsx)("option",{value:"ok",children:"\u6210\u529F"}),(0,ne.jsx)("option",{value:"error",children:"\u5931\u8D25"})]}),(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void z(),children:"\u641C\u7D22"}),(0,ne.jsxs)("div",{className:"im-history-bar-end",children:[V>0?(0,ne.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[V," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),X.length?(0,ne.jsxs)("div",{className:"im-history-stats",children:[X.map(q=>(0,ne.jsxs)("div",{className:"im-history-stat",children:[(0,ne.jsx)("div",{className:"im-history-stat-label",children:q.label}),(0,ne.jsx)("div",{className:"im-history-stat-value",children:q.value})]},q.label)),U.length?(0,ne.jsxs)("div",{className:"im-history-stat",children:[(0,ne.jsx)("div",{className:"im-history-stat-label",children:"\u6309\u5C3A\u5BF8"}),(0,ne.jsx)("div",{className:"im-history-stat-value",children:U.map(q=>`${q.size} \xD7${q.count}`).join(" \xB7 ")})]}):null]}):null,(0,ne.jsxs)("div",{ref:I,className:"im-history-list",onScroll:F,"data-testid":"history-list",children:[g?(0,ne.jsx)("div",{className:"im-history-error",children:g}):null,p?(0,ne.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("ul",{className:"im-history-rows",children:o.map((q,$)=>{let D=q.assetId?R.get(q.assetId):void 0,Y=!!D;return(0,ne.jsxs)("li",{className:"im-history-row",children:[(0,ne.jsx)("div",{className:"im-history-thumb",children:q.url?(0,ne.jsx)("img",{src:q.url,alt:q.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>H({url:q.url,path:q.path})}):(0,ne.jsx)("span",{className:"im-history-thumb-empty",children:q.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,ne.jsxs)("div",{className:"im-history-main",children:[(0,ne.jsx)("p",{className:"im-history-prompt",title:q.prompt||"\uFF08\u65E0\u63D0\u793A\u8BCD\uFF09",children:q.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,ne.jsxs)("p",{className:"im-history-meta",children:[q.time||"-"," \xB7 ",q.quality||"-"," \xB7 ",q.size||"-"]}),q.inputRefs.length?(0,ne.jsx)("div",{className:"im-history-refs",children:q.inputRefs.map(J=>(0,ne.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,ne.jsx)("img",{src:J.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>H({url:J.url,path:J.path})})},J.id))}):null,q.inputRefMissing?(0,ne.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,ne.jsxs)("div",{className:"im-history-actions",children:[(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.prompt,onClick:()=>void navigator.clipboard.writeText(q.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.path,onClick:()=>void $n(Dw(q.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,ne.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Y,title:Y?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{D&&t([D])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${q.time}-${q.output}-${$}`)})}),(0,ne.jsx)("div",{className:"im-history-pager",children:y?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":l?(0,ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void A(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):h==="none"?(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,ne.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,ne.jsx)("code",{children:Q}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,ne.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),P?(0,ne.jsx)(Ir,{imageUrl:P.url,...P.path?{copyPath:P.path}:{},onClose:()=>H(null)}):null]})}var wt=require("react");var Se=require("react/jsx-runtime");async function Aw(e,t,n,o){let r=await new Promise((c,l)=>{let u=new Image;u.onload=()=>c(u),u.onerror=()=>l(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),u.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let c=0;c<n;c+=1)for(let l=0;l<t;l+=1){let u=document.createElement("canvas");u.width=i,u.height=a;let d=u.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,l*i,c*a,i,a,0,0,i,a),s.push(u.toDataURL("image/png"))}return s}var Ow="52vh";function Pf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,wt.useState)(null),[i,a]=(0,wt.useState)(2),[s,c]=(0,wt.useState)(2),[l,u]=(0,wt.useState)(!1),[d,f]=(0,wt.useState)(null);(0,wt.useEffect)(()=>{let b=!0;return Ft(e).then(g=>{b&&r(g)}).catch(g=>{b&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(g)}`)}),()=>{b=!1}},[e]);let p=(0,wt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),m=async()=>{if(o){u(!0),f(null);try{let b=await Aw(e,i,s,o);await n(b.map((g,_)=>({dataUrl:g,note:`\u5207\u5206 ${_+1}/${b.length}`})))}catch(b){f(`\u5207\u5206\u5931\u8D25\uFF1A${le(b)}`)}finally{u(!1)}}},y=i*s;return(0,Se.jsx)(Re,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Se.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||y<2,onClick:()=>void m(),children:l?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${y} \u5F20`})]}),children:(0,Se.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Se.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,Se.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,Se.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:b=>a(Number(b.target.value)),className:"im-range"}),(0,Se.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,Se.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,Se.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:b=>c(Number(b.target.value)),className:"im-range"}),(0,Se.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,Se.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[y," \u5F20 \xB7 \u6BCF\u5F20 ",p.w," \xD7 ",p.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,Se.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,Se.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${Ow} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(b,g)=>(0,Se.jsx)("span",{style:{position:"absolute",left:`${(g+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${g}`)),Array.from({length:s-1},(b,g)=>(0,Se.jsx)("span",{style:{position:"absolute",top:`${(g+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${g}`))]})}),(0,Se.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,Se.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var vt=require("react");var Me=require("react/jsx-runtime"),zf=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],Rf=[1024,1536,2048,3072,4096];function Af({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,vt.useState)(null),[i,a]=(0,vt.useState)(2048),[s,c]=(0,vt.useState)("high"),[l,u]=(0,vt.useState)(!1),[d,f]=(0,vt.useState)(null);(0,vt.useEffect)(()=>{let g=!0;return Ft(e).then(_=>{if(!g)return;r(_);let h=Math.max(_.width,_.height),w=Rf.find(x=>x>h)??4096;a(w)}).catch(_=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(_)}`)}),()=>{g=!1}},[e]);let p=(0,vt.useMemo)(()=>o?Pa(o.width,o.height,i):{width:0,height:0},[o,i]),m=o&&o.width>0?p.width/o.width:0,y=!!o&&p.width<o.width,b=async()=>{u(!0),f(null);try{let g=await yf(e,{targetLongEdge:i,algorithm:s});await n(g,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${zf.find(_=>_.value===s)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${le(g)}`)}finally{u(!1)}};return(0,Me.jsx)(Re,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||p.width<8||p.height<8,onClick:()=>void b(),children:l?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Me.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Me.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Me.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),Rf.map(g=>(0,Me.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(g),children:g},g))]}),(0,Me.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Me.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),zf.map(g=>(0,Me.jsx)("button",{type:"button","aria-pressed":g.value===s,className:`im-btn-sm ${g.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(g.value),children:g.label},g.value))]}),(0,Me.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Me.jsxs)(Me.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Me.jsxs)("b",{style:{color:y?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),m?` \xB7 ${m.toFixed(2)}\xD7`:"",y?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Me.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Me.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var Ta=require("react/jsx-runtime");function Of({guides:e}){return e.length?(0,Ta.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,Ta.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var zr=require("react");var Ae=require("react/jsx-runtime");function Tf({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,zr.useState)(""),i=(0,zr.useMemo)(()=>ed(o),[o]),a=o.trim().length>0,s=i.cards,c=i.issues??[];return(0,Ae.jsx)(Re,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u5B9E\u65F6\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u3002",size:"lg",onClose:t,footer:(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ae.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!s.length||c.length>0,onClick:()=>n(s),children:["\u5EFA ",s.length," \u5F20\u5361"]})]}),children:(0,Ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ae.jsxs)("p",{style:{margin:0,fontSize:12.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,Ae.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,Ae.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u683C\u5F0F\u4E0D\u5BF9\u7684\u5757\u4E0D\u4F1A\u5EFA\u5361\uFF0C\u4F1A\u5728\u4E0B\u9762\u6807\u51FA\u6765\u3002"]}),(0,Ae.jsx)("textarea",{value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace"},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),a?(0,Ae.jsxs)("div",{style:{fontSize:12,display:"grid",gap:4},children:[(0,Ae.jsxs)("strong",{style:{fontWeight:600},children:["\u8BC6\u522B\u5230 ",s.length," \u5F20\u5361",c.length?`\uFF0C${c.length} \u5904\u9700\u8981\u4FEE\u6B63`:""]}),s.slice(0,8).map((l,u)=>(0,Ae.jsxs)("div",{style:{color:"var(--im-ink-2)"},children:[u+1,". ",l.title?`${l.title} \xB7 `:"",l.ratio?`\u6BD4\u4F8B ${l.ratio}`:"\u6BD4\u4F8B\u6309\u9ED8\u8BA4",l.prompt?` \xB7 ${l.prompt.slice(0,46)}${l.prompt.length>46?"\u2026":""}`:" \xB7 \u63D0\u793A\u8BCD\u4E3A\u7A7A"]},`${u}-${l.title??""}`)),s.length>8?(0,Ae.jsxs)("div",{style:{color:"var(--im-ink-3)"},children:["\u2026\u8FD8\u6709 ",s.length-8," \u5F20"]}):null,c.slice(0,5).map((l,u)=>(0,Ae.jsxs)("div",{style:{color:"var(--im-danger)"},children:[l.title?`\u300C${l.title}\u300D\uFF1A`:"",l.message]},`issue-${u}`))]}):null,(0,Ae.jsxs)("span",{style:{fontSize:11,color:"var(--im-ink-3)"},children:["\u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var fn=require("react");var Dr=require("react");La();var Ze=require("react/jsx-runtime");function Hf({config:e,onSaved:t,onFlash:n}){let o=$a(),[r,i]=(0,Dr.useState)(""),[a,s]=(0,Dr.useState)(""),[c,l]=(0,Dr.useState)(!1),u=e?.defaultOutputDir??"",d=async p=>{l(!0);try{let m=await so(p);t(m),i(""),n(p?"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0":"\u5DF2\u56DE\u5230\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(m)}`)}finally{l(!1)}},f=async p=>{l(!0);try{let m=await Du(p);t(m),s(""),n(p>0?`\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${p.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(m)}`)}finally{l(!1)}};return(0,Ze.jsxs)("div",{style:{display:"grid",gap:8,paddingTop:10,borderTop:"1px solid var(--im-line)"},children:[(0,Ze.jsx)("span",{className:"im-label",children:"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84"}),(0,Ze.jsx)(o.SettingsValueField,{id:"imagora-output-dir",label:"\u56FE\u7247\u843D\u76D8\u76EE\u5F55",hint:`\u7559\u7A7A\u5219\u7528 ${u||"\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output"}\uFF1B\u5DF2\u4FDD\u5B58\u7684\u503C\u4F1A\u4E00\u76F4\u751F\u6548`,text:r===""?u:r,placeholder:"\u7559\u7A7A = \u7528\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output",disabled:c,onEdit:p=>i(p)}),(0,Ze.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void $n(u),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!r.trim()||r.trim()===u,onClick:()=>void d(r.trim()),children:"\u8BBE\u4E3A\u9ED8\u8BA4"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void d(""),children:"\u56DE\u5230\u9ED8\u8BA4"})]}),(0,Ze.jsx)("span",{className:"im-label",style:{marginTop:6},children:"\u9884\u7B97\u4E0A\u9650"}),(0,Ze.jsx)(o.SettingsValueField,{id:"imagora-budget",label:"\u672C\u753B\u5E03\u6700\u591A\u82B1\u591A\u5C11\uFF08\u5143\uFF09",hint:e?.budget?`\u5F53\u524D\u4E0A\u9650 \xA5${e.budget.toFixed(2)}\uFF1B\u82B1\u5230\u4E0A\u9650\u65F6\u65B0\u4EFB\u52A1\u4F1A\u88AB\u62D2\u7EDD`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\uFF1B\u8BBE\u4E86\u4E4B\u540E\u82B1\u5230\u4E0A\u9650\u4F1A\u62D2\u7EDD\u65B0\u4EFB\u52A1",text:a===""?e?.budget?String(e.budget):"":a,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",numeric:!0,disabled:c,onEdit:p=>s(p)}),(0,Ze.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!a.trim(),onClick:()=>void f(Number(a)),children:"\u4FDD\u5B58\u9884\u7B97"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c||!e?.budget,onClick:()=>void f(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})}var Ar=require("react");var ze=require("react/jsx-runtime");function Bf({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,Ar.useState)(""),[i,a]=(0,Ar.useState)(""),[s,c]=(0,Ar.useState)(!1),l=e?.imagoraRoot??"",u=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async m=>{c(!0);try{let y=await Au({title:m==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:m==="root"?l:d});if(!y.ok){if(y.reason==="cancelled")return;n(y.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${y.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let b=m==="root"?await da(y.path||""):await so(y.path||"");t(b),m==="root"?r(""):a(""),n(m==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(y){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(y)}`)}finally{c(!1)}},p=async(m,y)=>{c(!0);try{let b=m==="root"?await da(y):await so(y);t(b),m==="root"?r(""):a(""),n(y?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(b)}`)}finally{c(!1)}};return(0,ze.jsxs)("div",{className:"im-fieldset",children:[(0,ze.jsxs)("div",{children:[(0,ze.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,ze.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?l:o,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:m=>r(m.target.value)}),(0,ze.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,ze.jsxs)("div",{className:"im-field-actions",children:[(0,ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===l,onClick:()=>void p("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!l,onClick:()=>void p("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,ze.jsxs)("div",{children:[(0,ze.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,ze.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?u:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:m=>a(m.target.value)}),(0,ze.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",u?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,ze.jsxs)("div",{className:"im-field-actions",children:[(0,ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===u,onClick:()=>void p("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void $n(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void p("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var he=require("react/jsx-runtime");function Ha({id:e,label:t,hint:n,state:o,stateTone:r,children:i}){return(0,he.jsxs)("div",{children:[(0,he.jsxs)("label",{className:"im-label",htmlFor:e,children:[t,o?(0,he.jsx)("span",{className:`im-field-state is-${r??"ok"}`,children:o}):null]}),i,n?(0,he.jsx)("p",{className:"im-field-hint",children:n}):null]})}function Wf({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,fn.useState)(r?.baseUrl??""),[c,l]=(0,fn.useState)(r?.model??""),[u,d]=(0,fn.useState)(""),[f,p]=(0,fn.useState)(!1),[m,y]=(0,fn.useState)(null),[b,g]=(0,fn.useState)([]),_=async()=>{p(!0);try{let x=await fa({baseUrl:a.trim(),model:c.trim(),apiKey:u.trim()});n(x),d(""),o("\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(x){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${le(x)}`)}finally{p(!1)}},h=async()=>{p(!0);try{let x=await fa({reset:!0});n(x),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(x){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${le(x)}`)}finally{p(!1)}},w=async()=>{p(!0),y(null);try{let x=await Ou({baseUrl:a.trim(),apiKey:u.trim()});g(x.models??[]),y(x.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${x.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(x){g([]),y(`\u8FDE\u4E0D\u901A\uFF1A${le(x)}`)}finally{p(!1)}};return(0,he.jsx)(Re,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u586B\u4E00\u6B21\u63A5\u53E3\u5730\u5740\u548C API Key \u5C31\u80FD\u7528\uFF0C\u4E0D\u9700\u8981\u672C\u673A\u88C5 Imagora\u3002",size:"lg",onClose:t,footer:(0,he.jsxs)(he.Fragment,{children:[i?(0,he.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void h(),children:"\u6E05\u7A7A\u5E76\u56DE\u5230 Imagora \u914D\u7F6E"}):null,(0,he.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:t,children:"\u53D6\u6D88"}),(0,he.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:f||!a.trim(),onClick:()=>void _(),children:"\u4FDD\u5B58"})]}),children:(0,he.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,he.jsx)("p",{style:{margin:0,fontSize:12.5,color:"var(--im-ink-3)",lineHeight:1.7},children:i?"\u5F53\u524D\u7528\u7684\u662F\u63D2\u4EF6\u5185\u914D\u7F6E\u3002":"\u5F53\u524D\u7528\u7684\u662F\u672C\u673A Imagora \u7684\u914D\u7F6E\u3002"}),(0,he.jsx)(Ha,{id:"imagora-provider-base-url",label:"\u63A5\u53E3\u5730\u5740",hint:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\uFF0C\u4F8B\u5982 https://api.example.com/v1",children:(0,he.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:f,onChange:x=>s(x.target.value)})}),(0,he.jsx)(Ha,{id:"imagora-provider-api-key",label:"API Key",hint:"\u53EA\u5B58\u5728\u672C\u673A ~/.dsh/imagora/settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7",state:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E",stateTone:r?.apiKeyConfigured?"ok":"warn",children:(0,he.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:u,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:f,onChange:x=>d(x.target.value)})}),(0,he.jsx)(Ha,{id:"imagora-provider-model",label:"\u6A21\u578B\u540D",hint:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628",children:(0,he.jsx)("input",{id:"imagora-provider-model",className:"im-field",value:c,placeholder:"gpt-image-2.5-flare",disabled:f,onChange:x=>l(x.target.value)})}),(0,he.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,he.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void w(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),m?(0,he.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:m}):null]}),b.length?(0,he.jsx)("div",{style:{fontSize:12,color:"var(--im-ink-2)"},children:b.slice(0,40).map(x=>(0,he.jsx)("button",{type:"button",onClick:()=>l(x),style:{display:"block",border:"none",background:"none",padding:"2px 0",cursor:"pointer",color:x===c?"var(--im-brand)":"var(--im-ink-2)",font:"inherit",textAlign:"left"},children:x},x))}):null,(0,he.jsx)(Bf,{config:e,onSaved:n,onFlash:o}),(0,he.jsx)(Hf,{config:e,onSaved:n,onFlash:o})]})})}var Bn=require("react");function Ff({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i}){let a=(0,Bn.useCallback)(async(d,f)=>{let p=d.filter(Fu);if(!p.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}for(let[m,y]of p.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let b=await yr(y,y.name||`pasted-${Date.now()}.png`),g=ln({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},{x:f.x+m*172,y:f.y});t(_=>[..._,g]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`)}catch(b){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${le(b)}`)}},[t,o,r]),s=(0,Bn.useCallback)((d,f,p)=>{let m=f?p(f):n();a(d,m)},[a,n]),c=(0,Bn.useCallback)(d=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let p=f.files?.[0];if(p)try{let m=await yr(p,p.name);t(y=>y.map(b=>b.id===d&&b.type==="image"?{...b,data:{...b.data,registryId:m.id,name:m.name,url:m.url,size:m.size,ext:m.ext,absPath:m.absPath,missing:!1}}:b)),o(`\u5DF2\u66FF\u6362\u4E3A ${m.name}`)}catch(m){o(`\u66FF\u6362\u5931\u8D25\uFF1A${le(m)}`)}},f.click()},[t,o]),l=(0,Bn.useCallback)(d=>{let f=e.current.find(p=>p.id===d);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name,path:f.data.absPath})},[e,i]),u=(0,Bn.useCallback)(async(d,f,p)=>{let m=await fetch(d).then(h=>h.blob()),y=f.endsWith(".png")?f:`${f}.png`,b=await yr(m,y),g=p??n(),_=ln({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},g);return t(h=>[...h,_]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`),b},[t,o,n]);return{addImages:a,dropFiles:s,replaceImage:c,openPreview:l,addDataUrl:u}}function Vf(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Vt=require("react");function Gf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let c=(0,Vt.useCallback)((p,m)=>{let b=(Array.isArray(m.results)?m.results:[]).filter(x=>x.status==="ok"&&x.assetId&&x.url),g=e.current.find(x=>x.id===p&&x.type==="prompt"),_=[];if(g&&g.type==="prompt"){let x=kr(g).height;b.forEach((C,k)=>{_.push(ln({id:String(C.assetId),relPath:C.name??"result.png",name:C.name??"result.png",url:String(C.url),size:C.bytes??0,ext:String(C.ext??"png"),absPath:C.absPath??"",createdAt:new Date().toISOString()},{x:g.position.x+k*172,y:g.position.y+x+56}))})}n(x=>{let C=[...x,..._];return ft(C,p,{status:m.status==="done"?"done":m.status==="cancelled"?"idle":"failed",resultCount:b.length,message:m.error??void 0,startedAtMs:void 0,cancelRequested:!1})}),_.length&&o(x=>{let C=_.map(k=>({id:`${p}->${k.id}`,source:p,target:k.id,animated:!0})).filter(k=>!x.some(M=>M.id===k.id));return C.length?[...x,...C]:x}),a.current.delete(p);let h=s.current.get(p);h&&window.clearTimeout(h),s.current.delete(p);let w=m.totalCost??0;w>0&&n(x=>{let C=x.find(M=>M.id===p),k=Number(C?.data?.cost??0);return ft(x,p,{cost:k+w})}),r(m.status==="done"?`\u5B8C\u6210 \xB7 ${b.length} \u5F20${w?` \xB7 ${w.toFixed(2)} \u5143`:""}`:`${m.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${m.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),l=(0,Vt.useCallback)((p,m)=>{let y=async()=>{try{let b=await _u(m);if(b.status==="queued")n(g=>ft(g,p,{status:"queued"}));else if(b.status==="running")n(g=>ft(g,p,{status:"running",startedAtMs:b.startedAt??Date.now(),cancelRequested:b.cancelRequested}));else{c(p,b);return}}catch(b){r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${le(b)}`)}s.current.set(p,window.setTimeout(y,1200))};y()},[c,r,n,s]),u=(0,Vt.useCallback)(async p=>{let m=e.current.find(b=>b.id===p);if(!m||m.type!=="prompt")return;if(!m.data.prompt.trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let y=Zu(e.current,t.current,p,m.data.prompt);if(y.mode==="invalid"){let b=y.unknown.map(g=>`@${g}`).join("\u3001");n(g=>ft(g,p,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${b}`}));return}try{let b=await Cu({prompt:m.data.prompt,size:m.data.size,quality:m.data.quality,refIds:y.images.map(g=>g.type==="image"?g.data.registryId:"").filter(Boolean),outputDir:m.data.outputDir,spent:e.current.reduce((g,_)=>g+Number(_.data?.cost??0),0),mask:y.images.map(g=>g.type==="image"?g.data.maskDataUrl:"").find(Boolean)||""});a.current.set(p,b.taskId),n(g=>ft(g,p,{status:"queued",startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${y.images.length} \u5F20 \xB7 ${m.data.size}`),l(p,b.taskId)}catch(b){let g=le(b);n(_=>ft(_,p,{status:"failed",message:g})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${g}`)}},[e,t,n,i,r,l,a]),d=(0,Vt.useCallback)(async p=>{let m=a.current.get(p);if(n(y=>ft(y,p,{cancelRequested:!0})),!!m)try{await Eu(m)}catch(y){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${le(y)}`)}},[n,r,a]),f=(0,Vt.useCallback)(p=>{for(let m of p)u(m)},[u]);return(0,Vt.useEffect)(()=>{let p=s.current;return()=>{for(let m of p.values())window.clearTimeout(m);p.clear()}},[s]),{runPrompt:u,cancelPrompt:d,runMany:f}}var it=require("react");function Xf(e){let[t,n]=(0,it.useState)(null),[o,r]=(0,it.useState)([]),i=(0,it.useRef)(null),a=(0,it.useCallback)(u=>{n(u),i.current=u,r(u.issues)},[]),s=(0,it.useCallback)(async()=>{try{a(await wu())}catch(u){r([le(u)])}},[a]);(0,it.useEffect)(()=>{s()},[s]);let c=(0,it.useCallback)(async u=>{try{let d=await Ru(u);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${le(d)}`)}},[a,e]),l=(0,it.useCallback)(async u=>{try{let d=await zu(u);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${le(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:l,replaceConfig:a}}var pn=require("react");function ho(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function qf(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(ho(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(ho(r)),ho(i)):null},restore(r){let i=o.shift();return i?(n.push(ho(r)),ho(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Yf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,pn.useRef)(qf(50)),a=(0,pn.useCallback)(()=>{i.current.record({nodes:e.current,edges:t.current})},[e,t]),s=(0,pn.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,pn.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),l=(0,pn.useCallback)(()=>i.current.clear(),[]),u=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:c,clear:l,canUndo:u,canRestore:d}}var Uf=require("react");function $w(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Zf(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:l,hasPreview:u}=e;(0,Uf.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&u){l();return}if($w(f.target))return;let p=f.ctrlKey||f.metaKey,m=f.key.toLowerCase();if(p&&m==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(b=>b.some(g=>!g.selected)?b.map(g=>({...g,selected:!0})):b);return}if(p&&m==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(p&&m==="y"){f.preventDefault(),s();return}if(p&&m==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,c,l,u,e])}var Gt=require("react");var Lw=2500;function Kf({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:l}){let u=(0,Gt.useRef)(null);(0,Gt.useEffect)(()=>{if(e.length)return u.current&&window.clearTimeout(u.current),u.current=window.setTimeout(()=>{Iu(n.current,o.current).catch(()=>{})},Lw),()=>{u.current&&window.clearTimeout(u.current)}},[e,t,n,o]),(0,Gt.useEffect)(()=>{let p=!1;return(async()=>{try{let y=await Pu();if(p||y.empty||!y.nodes?.length)return;let b=pa(y.nodes,y.edges??[],[]);r(b.nodes),i(b.edges),s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${y.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`)}catch{}})(),()=>{p=!0}},[r,i,s]);let d=(0,Gt.useCallback)(async p=>{try{let m=await Nu(p,n.current,o.current);l(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${m.name||p}\u300D`)}catch(m){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${le(m)}`)}},[n,o,l,c]),f=(0,Gt.useCallback)(async p=>{try{let m=await Mu(p),y=pa(m.nodes,m.edges,m.missing??[]);r(y.nodes),i(y.edges),l(),c(`\u5DF2\u52A0\u8F7D\u300C${m.name||p}\u300D`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(m){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${le(m)}`)}},[r,i,a,l,c]);return{doSave:d,doLoad:f}}var fe=require("react/jsx-runtime");function Ba(){let[e,t,n]=pu([]),[o,r,i]=mu([]),[a,s]=(0,ie.useState)([]),[c,l]=(0,ie.useState)(null),[u,d]=(0,ie.useState)(null),[f,p]=(0,ie.useState)(null),[m,y]=(0,ie.useState)(1),[b,g]=(0,ie.useState)(!1),[_,h]=(0,ie.useState)(()=>Gd()),[w,x]=(0,ie.useState)([]),[C,k]=(0,ie.useState)(null),[M,R]=(0,ie.useState)(()=>sd()),[W,P]=(0,ie.useState)(!1),[H,I]=(0,ie.useState)([]),v=(0,ie.useRef)(null),E=(0,ie.useRef)(null),N=(0,ie.useRef)(null),S=(0,ie.useRef)(null),z=(0,ie.useRef)(new Map),A=(0,ie.useRef)(new Map),B=(0,ie.useRef)(e),F=(0,ie.useRef)(o);B.current=e,F.current=o;let V=(0,ie.useCallback)(O=>{s(G=>[...G.slice(-8),O])},[]),X=(0,ie.useCallback)(O=>{l(O),window.setTimeout(()=>l(G=>G===O?null:G),2600)},[]),{config:U,configIssues:Q,configRef:q,switchProfile:$,switchModel:D,replaceConfig:Y}=Xf(X),J=(0,ie.useRef)(!1);(0,ie.useEffect)(()=>{!U||J.current||!(!U.provider?.apiKeyConfigured&&(U.source==="plugin"||U.issues.length>0))||(J.current=!0,d({kind:"settings"}))},[U]);let{addImages:oe,replaceImage:j,openPreview:te,addDataUrl:se}=Ff({nodesRef:B,setNodes:t,createPosition:()=>bo.current(),log:V,flash:X,setPreview:p}),{runPrompt:ce,cancelPrompt:pe,runMany:Oe}=Gf({nodesRef:B,edgesRef:F,setNodes:t,setEdges:r,log:V,flash:X,taskIdsRef:A,timersRef:z}),{doSave:at,doLoad:tt}=Kf({nodes:e,edges:o,nodesRef:B,edgesRef:F,setNodes:t,setEdges:r,instanceRef:E,log:V,flash:X,closeDialog:()=>d(null)}),ue=Yf({nodesRef:B,edgesRef:F,setNodes:t,setEdges:r,flash:X}),st=Ad(e),Xt=(0,ie.useMemo)(()=>({animated:!b}),[b]),Ke=(0,ie.useMemo)(()=>Uu(e,o),[e,o]),kt=(0,ie.useMemo)(()=>e.map(O=>{if(O.type==="image"){let G=Ke.refCounts.get(O.data.registryId)??0;return(O.data.refCount??0)===G?O:{...O,data:{...O.data,refCount:G}}}if(O.type==="group"){let G=Ke.groupCounts.get(O.id)??0,K=Ke.groupSizes.get(O.id)??0,re=Ke.groupDups.get(O.id)??0;return O.data.imageCount===G&&O.data.totalSize===K&&O.data.duplicateCount===re?O:{...O,data:{...O.data,imageCount:G,totalSize:K,duplicateCount:re}}}return O}),[e,Ke]),Fe=e.filter(O=>O.type==="prompt"),nt=Fe.filter(O=>O.data.status==="queued"||O.data.status==="running").map(O=>O.id),je=Fe.filter(O=>O.data.prompt.trim()&&O.data.status!=="running"&&O.data.status!=="queued").map(O=>O.id),pt=(0,ie.useCallback)((O,G)=>{t(K=>ft(K,O,G))},[t]),Rt=(0,ie.useCallback)(O=>{ue.record();let G=new Set(O);t(K=>K.filter(re=>!G.has(re.id))),r(K=>K.filter(re=>!G.has(re.source)&&!G.has(re.target)))},[t,r,ue]),mn=(0,ie.useCallback)(O=>{let G=B.current.find(K=>K.id===O);Rt([O]),G?.type==="image"&&ku(G.data.registryId).catch(()=>{})},[Rt]),$e=(0,ie.useCallback)(()=>{let O=E.current,G=v.current?.getBoundingClientRect(),K=O&&G?O.screenToFlowPosition({x:G.width/2,y:G.height/2}):{x:140,y:120},{position:re,next:ke}=Vu(K,S.current);return S.current=ke,re},[]),bo=(0,ie.useRef)($e);bo.current=$e;let yo=(0,ie.useCallback)(O=>{let G=q.current,K=Gu(O??$e(),{size:G?.sizes[0]?.value??"1024x1024",quality:G?.qualities[0]??"high",outputDir:""});t(re=>[...re,K])},[$e,t,q]),xo=(0,ie.useCallback)(O=>{t(G=>[...G,Xu(O??$e())])},[$e,t]),Or=(0,ie.useCallback)(()=>{r(ma(B.current,F.current)),X("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,X]),Tr=(0,ie.useCallback)(()=>{let O=new Set(w);if(!O.size){X("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}ue.record(),r(Ku(B.current,F.current,O)),X("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[w,r,X,ue]),$r=(0,ie.useCallback)(()=>{let O=new Set(w),G=q.current?.defaultOutputDir??"";O.size&&(ue.record(),t(K=>K.map(re=>re.type==="prompt"&&O.has(re.id)?{...re,data:{...re.data,outputDir:G}}:re)),X(G?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${G}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[w,t,X,ue]),Lr=(0,ie.useCallback)(()=>{let O=E.current;if(!O)return;let G=B.current.filter(re=>w.includes(re.id)),K=G.length?G:B.current;if(!K.length){X("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}O.fitView({nodes:K,padding:.25,duration:300,maxZoom:1.6})},[w,X]),Hr=(0,ie.useCallback)(()=>{let O=new Set(w);if(!O.size){X("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}ue.record(),t(G=>{let K=G.filter(Ie=>O.has(Ie.id)&&Ie.type==="image");if(!K.length)return G;let re=Math.min(...K.map(Ie=>Ie.position.x)),ke=Math.min(...K.map(Ie=>Ie.position.y)),St=new Map(K.map((Ie,gn)=>[Ie.id,gn]));return G.map(Ie=>{let gn=St.get(Ie.id);return gn===void 0?Ie:{...Ie,position:{x:re+gn*172,y:ke}}})})},[w,t,X,ue]),{dropIntent:Br,dragHandlers:Wr,startToolbarDrag:Fr,dropChip:Vr}=Fd({canvasRef:v,modalOpen:!!u||!!f,getCreatePosition:()=>$e(),toFlowPosition:O=>E.current?E.current.screenToFlowPosition(O):$e(),onDropFiles:(O,G)=>void oe(O,G),onDropNode:(O,G)=>{ue.record(),O==="prompt"?yo(G):xo(G)}});(0,ie.useEffect)(()=>{let O=G=>{let K=G.target;if(K&&(K.tagName==="TEXTAREA"||K.tagName==="INPUT"))return;let re=Array.from(G.clipboardData?.files??[]);re.length&&(G.preventDefault(),oe(re,$e()))};return window.addEventListener("paste",O),()=>window.removeEventListener("paste",O)},[oe,$e]),Zf({nodesRef:B,edgesRef:F,setNodes:t,setEdges:r,selectedIds:w,selectedEdgeId:C,onDeleteNodes:Rt,onDeleteEdge:O=>{ue.record(),r(G=>G.filter(K=>K.id!==O)),k(null)},onUndo:ue.undo,onRestore:ue.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let qt=(0,ie.useCallback)(O=>G=>{let K=B.current.find(re=>re.id===G);if(!K||K.type!=="image"||!K.data.url){X("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:O,target:{nodeId:G,src:K.data.url,name:K.data.name}})},[B,X]),wo=(0,ie.useMemo)(()=>({cropImage:qt("crop"),splitImage:qt("split"),upscaleImage:qt("upscale"),maskImage:qt("mask")}),[qt]),vo=(0,ie.useCallback)(O=>{ue.record(),t(G=>G.map(K=>K.id===O&&K.type==="image"?{...K,data:{...K.data,maskDataUrl:void 0}}:K)),X("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,ue,X]),Gr=(0,ie.useMemo)(()=>({updatePrompt:pt,runPrompt:O=>{ce(O)},cancelPrompt:O=>{pe(O)},deleteNode:mn,zoomImage:te,replaceImage:j,...wo,clearMask:vo,config:U}),[pt,ce,pe,mn,te,j,wo,vo,U]);return(0,fe.jsxs)(va.Provider,{value:Gr,children:[(0,fe.jsx)("style",{children:Id}),(0,fe.jsxs)("div",{className:"im-root",children:[(0,fe.jsx)(Td,{config:U,promptCount:Fe.length,runnableIds:je,busyIds:nt.length,snapEnabled:M,canvasLocked:W,cost:st,canUndo:ue.canUndo,canRestore:ue.canRestore,onUndo:()=>{ue.record(),ue.undo()},onRestore:ue.restore,onAddPrompt:()=>yo(),onPickFiles:()=>N.current?.click(),onAddGroup:()=>xo(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:Fr,onRun:Oe,onCancelAll:()=>nt.forEach(O=>void pe(O)),onAutoConnect:Or,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:O=>void $(O),onSwitchModel:O=>void D(O),onOpenSave:async()=>{try{let O=await ua();d({kind:"save",workflows:O.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let O=await ua();d({kind:"load",workflows:O.workflows})}catch(O){X(`\u8BFB\u53D6\u5931\u8D25\uFF1A${le(O)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),Q.length?(0,fe.jsx)(Kd,{tone:"error",action:(0,fe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,fe.jsx)("ul",{className:"im-banner-list",children:Q.map(O=>(0,fe.jsx)("li",{children:O},O))})}):null,(0,fe.jsxs)("div",{className:`im-canvas${Br?" is-drop-active":""}`,ref:v,...Wr,children:[(0,fe.jsx)(qd,{selectedCount:w.length,selectedPromptCount:w.filter(O=>e.some(G=>G.id===O&&G.type==="prompt")).length,selectedRunnableIds:je.filter(O=>w.includes(O)),pickingOutputDir:!1,onRunSelected:()=>Oe(je.filter(O=>w.includes(O))),onAutoLayout:Hr,onAutoConnectSelected:Tr,onSetOutputDir:$r,onDeleteSelected:()=>{Rt(w),x([])}}),(0,fe.jsx)(ka.Provider,{value:b,children:(0,fe.jsxs)(fu,{nodes:kt,edges:o,nodeTypes:Pd,onNodesChange:O=>{let G=cd(O,B.current,M);I(G.guides),n(G.changes)},onEdgesChange:O=>i(O),onConnect:Vf(r),isValidConnection:O=>qu(B.current,F.current,{source:String(O.source??""),target:String(O.target??"")}),onInit:O=>{E.current=O},onNodeDragStop:(O,G)=>{if(I([]),!M)return;let K=uo(G),re=B.current.filter(St=>St.id!==G.id).map(uo),ke=Sr(K,re);ke.x===K.x&&ke.y===K.y||t(St=>St.map(Ie=>Ie.id===G.id?{...Ie,position:{x:ke.x,y:ke.y}}:Ie))},onMove:(O,G)=>{y(G.zoom),g(K=>zd(K,G.zoom))},onEdgeDoubleClick:(O,G)=>{ue.record(),r(K=>K.filter(re=>re.id!==G.id)),k(null)},onSelectionChange:({nodes:O,edges:G})=>{let K=O.map(ke=>ke.id);x(ke=>ke.length===K.length&&ke.every((St,Ie)=>St===K[Ie])?ke:K);let re=G.length===1?G[0].id:null;k(ke=>ke===re?ke:re)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:Xt,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!W,nodesConnectable:!W,elementsSelectable:!W,panOnDrag:!W,selectionOnDrag:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:["Meta","Control"],children:[(0,fe.jsx)(hu,{variant:yt.Dots,gap:18,size:1.4}),_?(0,fe.jsx)(xu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:O=>O.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,fe.jsx)(Of,{guides:H})]})}),(0,fe.jsx)($d,{zoom:m,snapEnabled:M,canvasLocked:W,minimapOpen:_,onZoomIn:()=>void E.current?.zoomIn({duration:180}),onZoomOut:()=>void E.current?.zoomOut({duration:180}),onFitView:()=>E.current?.fitView({padding:.2,duration:300}),onFocusSelected:Lr,onToggleSnap:()=>R(O=>{let G=!O;return ld(G),G||I([]),X(G?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),G}),onToggleLock:()=>P(O=>{let G=!O;return X(G?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),G}),onToggleMinimap:()=>h(O=>{let G=!O;return Xd(G),G}),onOpenHelp:()=>d({kind:"help"})}),e.length===0?(0,fe.jsx)(Yd,{}):null,(0,fe.jsx)(Ud,{logs:a}),(0,fe.jsx)(Zd,{text:c}),Vr]}),(0,fe.jsx)("input",{ref:N,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:O=>{let G=Array.from(O.target.files??[]);O.target.value="",oe(G,$e())}}),f?(0,fe.jsx)(Ir,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>p(null)}):null,u?.kind==="save"?(0,fe.jsx)(lf,{workflows:u.workflows??[],imagoraRoot:U?.imagoraRoot,onCancel:()=>d(null),onSubmit:O=>void at(O)}):null,u?.kind==="load"?(0,fe.jsx)(cf,{workflows:u.workflows??[],imagoraRoot:U?.imagoraRoot,onCancel:()=>d(null),onPick:O=>void tt(O)}):null,u?.kind==="crop"&&u.target?(0,fe.jsx)(kf,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(O,G)=>{ue.record(),await se(O,`${u.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),X(G)}}):null,u?.kind==="split"&&u.target?(0,fe.jsx)(Pf,{src:u.target.src,onClose:()=>d(null),onConfirm:async O=>{ue.record();let G=u.target.name.replace(/\.[^.]+$/,""),K=$e();for(let[re,ke]of O.entries())await se(ke.dataUrl,`${G}_${re+1}.png`,{x:K.x+re*160,y:K.y});d(null),X(`\u5DF2\u5207\u51FA ${O.length} \u5F20`)}}):null,u?.kind==="upscale"&&u.target?(0,fe.jsx)(Af,{src:u.target.src,onClose:()=>d(null),onConfirm:async(O,G)=>{ue.record(),await se(O,`${u.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),X(G)}}):null,u?.kind==="mask"&&u.target?(0,fe.jsx)(Ef,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(O,G)=>{ue.record(),t(K=>K.map(re=>re.id===u.target.nodeId&&re.type==="image"?{...re,data:{...re.data,maskDataUrl:O}}:re)),d(null),X(G)}}):null,u?.kind==="help"?(0,fe.jsx)(uf,{config:U,onClose:()=>d(null)}):null,u?.kind==="history"?(0,fe.jsx)(If,{imagoraRoot:U?.imagoraRoot,onClose:()=>d(null),onImport:O=>{if(!O.length)return;ue.record();let G=$e(),K=O.map((re,ke)=>ln(re,{x:G.x+ke*172,y:G.y}));t(re=>[...re,...K]),X(`\u5DF2\u653E\u5165 ${K.length} \u5F20\u56FE`)}}):null,u?.kind==="import"?(0,fe.jsx)(Tf,{sizes:U?.sizes??[],onCancel:()=>d(null),onConfirm:O=>{ue.record();let G=q.current,K=td(O,{sizes:G?.sizes??[],defaultQuality:G?.qualities[0]??"high",defaultOutputDir:""},$e());t(re=>[...re,...K]),d(null),X(`\u5DF2\u5EFA ${K.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,u?.kind==="settings"?(0,fe.jsx)(Wf,{config:U,onClose:()=>d(null),onSaved:Y,onFlash:X}):null]})]})}var jf=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Jf=require("react/jsx-runtime"),Hw=["slots"],Qf="imagora";globalThis.__dshImagoraCanvas=Ba;function Bw({size:e=16}){return(0,Jf.jsx)(Ea,{size:e,fill:"currentColor"})}function Ww(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=jf,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(La(),Lf)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Qf},Ba)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Qf,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Bw)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
