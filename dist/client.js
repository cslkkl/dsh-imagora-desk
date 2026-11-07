window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var Cp=Object.create;var yo=Object.defineProperty;var Ep=Object.getOwnPropertyDescriptor;var _p=Object.getOwnPropertyNames;var Np=Object.getPrototypeOf,Mp=Object.prototype.hasOwnProperty;var Ip=(e,t)=>()=>(e&&(t=e(e=0)),t);var xo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Fa=(e,t)=>{for(var n in t)yo(e,n,{get:t[n],enumerable:!0})},Va=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of _p(t))!Mp.call(e,r)&&r!==n&&yo(e,r,{get:()=>t[r],enumerable:!(o=Ep(t,r))||o.enumerable});return e};var Ga=(e,t,n)=>(n=e!=null?Cp(Np(e)):{},Va(t||!e||!e.__esModule?yo(n,"default",{value:e,enumerable:!0}):n,e)),Pp=e=>Va(yo({},"__esModule",{value:!0}),e);var Bl=xo(Hl=>{"use strict";var An=require("react");function Xb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yb=typeof Object.is=="function"?Object.is:Xb,qb=An.useState,Ub=An.useEffect,Zb=An.useLayoutEffect,Kb=An.useDebugValue;function jb(e,t){var n=t(),o=qb({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return Zb(function(){r.value=n,r.getSnapshot=t,ji(r)&&i({inst:r})},[e,n,t]),Ub(function(){return ji(r)&&i({inst:r}),e(function(){ji(r)&&i({inst:r})})},[e]),Kb(n),n}function ji(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yb(e,n)}catch{return!0}}function Qb(e,t){return t()}var Jb=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Qb:jb;Hl.useSyncExternalStore=An.useSyncExternalStore!==void 0?An.useSyncExternalStore:Jb});var Fl=xo(($v,Wl)=>{"use strict";Wl.exports=Bl()});var Gl=xo(Vl=>{"use strict";var ar=require("react"),e0=Fl();function t0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var n0=typeof Object.is=="function"?Object.is:t0,o0=e0.useSyncExternalStore,r0=ar.useRef,i0=ar.useEffect,a0=ar.useMemo,s0=ar.useDebugValue;Vl.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=r0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=a0(function(){function c(p){if(!l){if(l=!0,u=p,p=o(p),r!==void 0&&a.hasValue){var m=a.value;if(r(m,p))return d=m}return d=p}if(m=d,n0(u,p))return m;var y=o(p);return r!==void 0&&r(m,y)?(u=p,m):(u=p,d=y)}var l=!1,u,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var s=o0(e,i[0],i[1]);return i0(function(){a.hasValue=!0,a.value=s},[s]),s0(s),s}});var Yl=xo((Hv,Xl)=>{"use strict";Xl.exports=Gl()});var Nf={};Fa(Nf,{primitives:()=>Pa});function _w(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Pa(){if(Nr)return Nr;let e=require(_f),t=_w(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${_f}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Nr=t,Nr}var _f,Nr,za=Ip(()=>{"use strict";_f="@deepseek-ai/dsh-client-ui-primitives",Nr=null});var Rw={};Fa(Rw,{apply:()=>zw,inject:()=>Iw});module.exports=Pp(Rw);var oe=require("react");var $=require("react/jsx-runtime"),O=require("react");function Se(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=Se(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var zp={value:()=>{}};function Yt(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new wo(n)}function wo(e){this._=e}function Rp(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}wo.prototype=Yt.prototype={constructor:wo,on:function(e,t){var n=this._,o=Rp(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=Dp(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=Xa(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Xa(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new wo(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function Dp(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Xa(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=zp,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var Wr="http://www.w3.org/1999/xhtml",Ya={svg:"http://www.w3.org/2000/svg",xhtml:Wr,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Hn(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Ya.hasOwnProperty(t)?{space:Ya[t],local:e}:e}function Ap(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Wr&&t.documentElement.namespaceURI===Wr?t.createElement(e):t.createElementNS(n,e)}}function Tp(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function qa(e){var t=Hn(e);return(t.local?Tp:Ap)(t)}function Op(){}function ko(e){return e==null?Op:function(){return this.querySelector(e)}}function $p(e){typeof e!="function"&&(e=ko(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),c,l,u=0;u<a;++u)(c=i[u])&&(l=e.call(c,c.__data__,u,i))&&("__data__"in c&&(l.__data__=c.__data__),s[u]=l);return new Ke(o,this._parents)}function Lp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Hp(){return[]}function Vr(e){return e==null?Hp:function(){return this.querySelectorAll(e)}}function Bp(e){return function(){return Lp(e.apply(this,arguments))}}function Wp(e){typeof e=="function"?e=Bp(e):e=Vr(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,l=0;l<s;++l)(c=a[l])&&(o.push(e.call(c,c.__data__,l,a)),r.push(c));return new Ke(o,r)}function Gr(e){return function(){return this.matches(e)}}function Ua(e){return function(t){return t.matches(e)}}var Fp=Array.prototype.find;function Vp(e){return function(){return Fp.call(this.children,e)}}function Gp(){return this.firstElementChild}function Xp(e){return this.select(e==null?Gp:Vp(typeof e=="function"?e:Ua(e)))}var Yp=Array.prototype.filter;function qp(){return Array.from(this.children)}function Up(e){return function(){return Yp.call(this.children,e)}}function Zp(e){return this.selectAll(e==null?qp:Up(typeof e=="function"?e:Ua(e)))}function Kp(e){typeof e!="function"&&(e=Gr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,l=0;l<a;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&s.push(c);return new Ke(o,this._parents)}function Za(e){return new Array(e.length)}function jp(){return new Ke(this._enter||this._groups.map(Za),this._parents)}function vo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}vo.prototype={constructor:vo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Qp(e){return function(){return e}}function Jp(e,t,n,o,r,i){for(var a=0,s,c=t.length,l=i.length;a<l;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new vo(e,i[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function em(e,t,n,o,r,i,a){var s,c,l=new Map,u=t.length,d=i.length,f=new Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=a.call(c,c.__data__,s,t)+"",l.has(p)?r[s]=c:l.set(p,c));for(s=0;s<d;++s)p=a.call(e,i[s],s,i)+"",(c=l.get(p))?(o[s]=c,c.__data__=i[s],l.delete(p)):n[s]=new vo(e,i[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(r[s]=c)}function tm(e){return e.__data__}function nm(e,t){if(!arguments.length)return Array.from(this,tm);var n=t?em:Jp,o=this._parents,r=this._groups;typeof e!="function"&&(e=Qp(e));for(var i=r.length,a=new Array(i),s=new Array(i),c=new Array(i),l=0;l<i;++l){var u=o[l],d=r[l],f=d.length,p=om(e.call(u,u&&u.__data__,l,o)),m=p.length,y=s[l]=new Array(m),b=a[l]=new Array(m),g=c[l]=new Array(f);n(u,d,y,b,g,p,t);for(var k=0,h=0,v,x;k<m;++k)if(v=y[k]){for(k>=h&&(h=k+1);!(x=b[h])&&++h<m;);v._next=x||null}}return a=new Ke(a,o),a._enter=s,a._exit=c,a}function om(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function rm(){return new Ke(this._exit||this._groups.map(Za),this._parents)}function im(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function am(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),c=0;c<a;++c)for(var l=n[c],u=o[c],d=l.length,f=s[c]=new Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<r;++c)s[c]=n[c];return new Ke(s,this._parents)}function sm(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function lm(e){e||(e=cm);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,c=r[i]=new Array(s),l,u=0;u<s;++u)(l=a[u])&&(c[u]=l);c.sort(t)}return new Ke(r,this._parents).order()}function cm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function um(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function dm(){return Array.from(this)}function fm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function pm(){let e=0;for(let t of this)++e;return e}function mm(){return!this.node()}function gm(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function hm(e){return function(){this.removeAttribute(e)}}function bm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ym(e,t){return function(){this.setAttribute(e,t)}}function xm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function wm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function vm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function km(e,t){var n=Hn(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?bm:hm:typeof t=="function"?n.local?vm:wm:n.local?xm:ym)(n,t))}function Ka(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Sm(e){return function(){this.style.removeProperty(e)}}function Cm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Em(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function _m(e,t,n){return arguments.length>1?this.each((t==null?Sm:typeof t=="function"?Em:Cm)(e,t,n??"")):qt(this.node(),e)}function qt(e,t){return e.style.getPropertyValue(t)||Ka(e).getComputedStyle(e,null).getPropertyValue(t)}function Nm(e){return function(){delete this[e]}}function Mm(e,t){return function(){this[e]=t}}function Im(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Pm(e,t){return arguments.length>1?this.each((t==null?Nm:typeof t=="function"?Im:Mm)(e,t)):this.node()[e]}function ja(e){return e.trim().split(/^|\s+/)}function Xr(e){return e.classList||new Qa(e)}function Qa(e){this._node=e,this._names=ja(e.getAttribute("class")||"")}Qa.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Ja(e,t){for(var n=Xr(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function es(e,t){for(var n=Xr(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function zm(e){return function(){Ja(this,e)}}function Rm(e){return function(){es(this,e)}}function Dm(e,t){return function(){(t.apply(this,arguments)?Ja:es)(this,e)}}function Am(e,t){var n=ja(e+"");if(arguments.length<2){for(var o=Xr(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?Dm:t?zm:Rm)(n,t))}function Tm(){this.textContent=""}function Om(e){return function(){this.textContent=e}}function $m(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Lm(e){return arguments.length?this.each(e==null?Tm:(typeof e=="function"?$m:Om)(e)):this.node().textContent}function Hm(){this.innerHTML=""}function Bm(e){return function(){this.innerHTML=e}}function Wm(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Fm(e){return arguments.length?this.each(e==null?Hm:(typeof e=="function"?Wm:Bm)(e)):this.node().innerHTML}function Vm(){this.nextSibling&&this.parentNode.appendChild(this)}function Gm(){return this.each(Vm)}function Xm(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ym(){return this.each(Xm)}function qm(e){var t=typeof e=="function"?e:qa(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Um(){return null}function Zm(e,t){var n=typeof e=="function"?e:qa(e),o=t==null?Um:typeof t=="function"?t:ko(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Km(){var e=this.parentNode;e&&e.removeChild(this)}function jm(){return this.each(Km)}function Qm(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Jm(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function eg(e){return this.select(e?Jm:Qm)}function tg(e){return arguments.length?this.property("__data__",e):this.node().__data__}function ng(e){return function(t){e.call(this,t,this.__data__)}}function og(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function rg(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function ig(e,t,n){return function(){var o=this.__on,r,i=ng(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function ag(e,t,n){var o=og(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(r=0,u=s[c];r<i;++r)if((a=o[r]).type===u.type&&a.name===u.name)return u.value}return}for(s=t?ig:rg,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function ts(e,t,n){var o=Ka(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function sg(e,t){return function(){return ts(this,e,t)}}function lg(e,t){return function(){return ts(this,e,t.apply(this,arguments))}}function cg(e,t){return this.each((typeof t=="function"?lg:sg)(e,t))}function*ug(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var ns=[null];function Ke(e,t){this._groups=e,this._parents=t}function Ut(){return new Ke([[document.documentElement]],ns)}function dg(){return this}Ke.prototype=Ut.prototype={constructor:Ke,select:$p,selectAll:Wp,selectChild:Xp,selectChildren:Zp,filter:Kp,data:nm,enter:jp,exit:rm,join:im,merge:am,selection:dg,order:sm,sort:lm,call:um,nodes:dm,node:fm,size:pm,empty:mm,each:gm,attr:km,style:_m,property:Pm,classed:Am,text:Lm,html:Fm,raise:Gm,lower:Ym,append:qm,insert:Zm,remove:jm,clone:eg,datum:tg,on:ag,dispatch:cg,[Symbol.iterator]:ug};function Le(e){return typeof e=="string"?new Ke([[document.querySelector(e)]],[document.documentElement]):new Ke([[e]],ns)}var fg=0;function pg(){return new Fr}function Fr(){this._="@"+(++fg).toString(36)}Fr.prototype=pg.prototype={constructor:Fr,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function mg(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ge(e,t){if(e=mg(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var gg={passive:!1},Bn={capture:!0,passive:!1};function Yr(e){e.stopImmediatePropagation()}function hn(e){e.preventDefault(),e.stopImmediatePropagation()}function Ur(e){var t=e.document.documentElement,n=Le(e).on("dragstart.drag",hn,Bn);"onselectstart"in t?n.on("selectstart.drag",hn,Bn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Zr(e,t){var n=e.document.documentElement,o=Le(e).on("dragstart.drag",null);t&&(o.on("click.drag",hn,Bn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var So=e=>()=>e;function qr(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}qr.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function hg(e){return!e.ctrlKey&&!e.button}function bg(){return this.parentNode}function yg(e,t){return t??{x:e.x,y:e.y}}function xg(){return navigator.maxTouchPoints||"ontouchstart"in this}function Kr(){var e=hg,t=bg,n=yg,o=xg,r={},i=Yt("start","drag","end"),a=0,s,c,l,u,d=0;function f(v){v.on("mousedown.drag",p).filter(o).on("touchstart.drag",b).on("touchmove.drag",g,gg).on("touchend.drag touchcancel.drag",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(v,x){if(!(u||!e.call(this,v,x))){var S=h(this,t.call(this,v,x),v,x,"mouse");S&&(Le(v.view).on("mousemove.drag",m,Bn).on("mouseup.drag",y,Bn),Ur(v.view),Yr(v),l=!1,s=v.clientX,c=v.clientY,S("start",v))}}function m(v){if(hn(v),!l){var x=v.clientX-s,S=v.clientY-c;l=x*x+S*S>d}r.mouse("drag",v)}function y(v){Le(v.view).on("mousemove.drag mouseup.drag",null),Zr(v.view,l),hn(v),r.mouse("end",v)}function b(v,x){if(e.call(this,v,x)){var S=v.changedTouches,C=t.call(this,v,x),M=S.length,R,W;for(R=0;R<M;++R)(W=h(this,C,v,x,S[R].identifier,S[R]))&&(Yr(v),W("start",v,S[R]))}}function g(v){var x=v.changedTouches,S=x.length,C,M;for(C=0;C<S;++C)(M=r[x[C].identifier])&&(hn(v),M("drag",v,x[C]))}function k(v){var x=v.changedTouches,S=x.length,C,M;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),C=0;C<S;++C)(M=r[x[C].identifier])&&(Yr(v),M("end",v,x[C]))}function h(v,x,S,C,M,R){var W=i.copy(),z=Ge(R||S,x),L,N,w;if((w=n.call(v,new qr("beforestart",{sourceEvent:S,target:f,identifier:M,active:a,x:z[0],y:z[1],dx:0,dy:0,dispatch:W}),C))!=null)return L=w.x-z[0]||0,N=w.y-z[1]||0,function I(_,E,P){var D=z,F;switch(_){case"start":r[M]=I,F=a++;break;case"end":delete r[M],--a;case"drag":z=Ge(P||E,x),F=a;break}W.call(_,v,new qr(_,{sourceEvent:E,subject:w,target:f,identifier:M,active:F,x:z[0]+L,y:z[1]+N,dx:z[0]-D[0],dy:z[1]-D[1],dispatch:W}),C)}}return f.filter=function(v){return arguments.length?(e=typeof v=="function"?v:So(!!v),f):e},f.container=function(v){return arguments.length?(t=typeof v=="function"?v:So(v),f):t},f.subject=function(v){return arguments.length?(n=typeof v=="function"?v:So(v),f):n},f.touchable=function(v){return arguments.length?(o=typeof v=="function"?v:So(!!v),f):o},f.on=function(){var v=i.on.apply(i,arguments);return v===i?f:v},f.clickDistance=function(v){return arguments.length?(d=(v=+v)*v,f):Math.sqrt(d)},f}function wn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Vn(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Rt(){}var Qt=.7,xn=1/Qt,bn="\\s*([+-]?\\d+)\\s*",Wn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",wg=/^#([0-9a-f]{3,8})$/,vg=new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`),kg=new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`),Sg=new RegExp(`^rgba\\(${bn},${bn},${bn},${Wn}\\)$`),Cg=new RegExp(`^rgba\\(${pt},${pt},${pt},${Wn}\\)$`),Eg=new RegExp(`^hsl\\(${Wn},${pt},${pt}\\)$`),_g=new RegExp(`^hsla\\(${Wn},${pt},${pt},${Wn}\\)$`),os={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wn(Rt,St,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:rs,formatHex:rs,formatHex8:Ng,formatHsl:Mg,formatRgb:is,toString:is});function rs(){return this.rgb().formatHex()}function Ng(){return this.rgb().formatHex8()}function Mg(){return ms(this).formatHsl()}function is(){return this.rgb().formatRgb()}function St(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=wg.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?as(t):n===3?new Te(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Co(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Co(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=vg.exec(e))?new Te(t[1],t[2],t[3],1):(t=kg.exec(e))?new Te(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Sg.exec(e))?Co(t[1],t[2],t[3],t[4]):(t=Cg.exec(e))?Co(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Eg.exec(e))?cs(t[1],t[2]/100,t[3]/100,1):(t=_g.exec(e))?cs(t[1],t[2]/100,t[3]/100,t[4]):os.hasOwnProperty(e)?as(os[e]):e==="transparent"?new Te(NaN,NaN,NaN,0):null}function as(e){return new Te(e>>16&255,e>>8&255,e&255,1)}function Co(e,t,n,o){return o<=0&&(e=t=n=NaN),new Te(e,t,n,o)}function ni(e){return e instanceof Rt||(e=St(e)),e?(e=e.rgb(),new Te(e.r,e.g,e.b,e.opacity)):new Te}function Gn(e,t,n,o){return arguments.length===1?ni(e):new Te(e,t,n,o??1)}function Te(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}wn(Te,Gn,Vn(Rt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new Te(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new Te(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Te(Kt(this.r),Kt(this.g),Kt(this.b),_o(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ss,formatHex:ss,formatHex8:Ig,formatRgb:ls,toString:ls}));function ss(){return`#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}`}function Ig(){return`#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}${Zt((isNaN(this.opacity)?1:this.opacity)*255)}`}function ls(){let e=_o(this.opacity);return`${e===1?"rgb(":"rgba("}${Kt(this.r)}, ${Kt(this.g)}, ${Kt(this.b)}${e===1?")":`, ${e})`}`}function _o(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Kt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Zt(e){return e=Kt(e),(e<16?"0":"")+e.toString(16)}function cs(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new st(e,t,n,o)}function ms(e){if(e instanceof st)return new st(e.h,e.s,e.l,e.opacity);if(e instanceof Rt||(e=St(e)),!e)return new st;if(e instanceof st)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,c=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+r:2-i-r,a*=60):s=c>0&&c<1?0:a,new st(a,s,c,e.opacity)}function Mo(e,t,n,o){return arguments.length===1?ms(e):new st(e,t,n,o??1)}function st(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}wn(st,Mo,Vn(Rt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new st(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new st(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Te(jr(e>=240?e-240:e+120,r,o),jr(e,r,o),jr(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new st(us(this.h),Eo(this.s),Eo(this.l),_o(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=_o(this.opacity);return`${e===1?"hsl(":"hsla("}${us(this.h)}, ${Eo(this.s)*100}%, ${Eo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function us(e){return e=(e||0)%360,e<0?e+360:e}function Eo(e){return Math.max(0,Math.min(1,e||0))}function jr(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var gs=Math.PI/180,hs=180/Math.PI,No=18,bs=.96422,ys=1,xs=.82521,ws=4/29,yn=6/29,vs=3*yn*yn,Pg=yn*yn*yn;function ks(e){if(e instanceof mt)return new mt(e.l,e.a,e.b,e.opacity);if(e instanceof kt)return Cs(e);e instanceof Te||(e=ni(e));var t=ti(e.r),n=ti(e.g),o=ti(e.b),r=Qr((.2225045*t+.7168786*n+.0606169*o)/ys),i,a;return t===n&&n===o?i=a=r:(i=Qr((.4360747*t+.3850649*n+.1430804*o)/bs),a=Qr((.0139322*t+.0971045*n+.7141733*o)/xs)),new mt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function Ss(e,t,n,o){return arguments.length===1?ks(e):new mt(e,t,n,o??1)}function mt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}wn(mt,Ss,Vn(Rt,{brighter(e){return new mt(this.l+No*(e??1),this.a,this.b,this.opacity)},darker(e){return new mt(this.l-No*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=bs*Jr(t),e=ys*Jr(e),n=xs*Jr(n),new Te(ei(3.1338561*t-1.6168667*e-.4906146*n),ei(-.9787684*t+1.9161415*e+.033454*n),ei(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Qr(e){return e>Pg?Math.pow(e,1/3):e/vs+ws}function Jr(e){return e>yn?e*e*e:vs*(e-ws)}function ei(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function ti(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function zg(e){if(e instanceof kt)return new kt(e.h,e.c,e.l,e.opacity);if(e instanceof mt||(e=ks(e)),e.a===0&&e.b===0)return new kt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*hs;return new kt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Io(e,t,n,o){return arguments.length===1?zg(e):new kt(e,t,n,o??1)}function kt(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function Cs(e){if(isNaN(e.h))return new mt(e.l,0,0,e.opacity);var t=e.h*gs;return new mt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}wn(kt,Io,Vn(Rt,{brighter(e){return new kt(this.h,this.c,this.l+No*(e??1),this.opacity)},darker(e){return new kt(this.h,this.c,this.l-No*(e??1),this.opacity)},rgb(){return Cs(this).rgb()}}));var Es=-.14861,oi=1.78277,ri=-.29227,Po=-.90649,Fn=1.97294,ds=Fn*Po,fs=Fn*oi,ps=oi*ri-Po*Es;function Rg(e){if(e instanceof jt)return new jt(e.h,e.s,e.l,e.opacity);e instanceof Te||(e=ni(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(ps*o+ds*t-fs*n)/(ps+ds-fs),i=o-r,a=(Fn*(n-r)-ri*i)/Po,s=Math.sqrt(a*a+i*i)/(Fn*r*(1-r)),c=s?Math.atan2(a,i)*hs-120:NaN;return new jt(c<0?c+360:c,s,r,e.opacity)}function zo(e,t,n,o){return arguments.length===1?Rg(e):new jt(e,t,n,o??1)}function jt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}wn(jt,zo,Vn(Rt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new jt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new jt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*gs,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Te(255*(t+n*(Es*o+oi*r)),255*(t+n*(ri*o+Po*r)),255*(t+n*(Fn*o)),this.opacity)}}));function Ms(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function Dg(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return Ms((n-o/t)*t,a,r,i,s)}}function Ag(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return Ms((n-o/t)*t,r,i,a,s)}}var Do=e=>()=>e;function Is(e,t){return function(n){return e+n*t}}function Tg(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function li(e,t){var n=t-e;return n?Is(e,n>180||n<-180?n-360*Math.round(n/360):n):Do(isNaN(e)?t:e)}function Og(e){return(e=+e)==1?Xe:function(t,n){return n-t?Tg(t,n,e):Do(isNaN(t)?n:t)}}function Xe(e,t){var n=t-e;return n?Is(e,n):Do(isNaN(e)?t:e)}var Xn=(function e(t){var n=Og(t);function o(r,i){var a=n((r=Gn(r)).r,(i=Gn(i)).r),s=n(r.g,i.g),c=n(r.b,i.b),l=Xe(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=s(u),r.b=c(u),r.opacity=l(u),r+""}}return o.gamma=e,o})(1);function Ps(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=Gn(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(c){return s.r=o(c),s.g=r(c),s.b=i(c),s+""}}}var Fw=Ps(Dg),Vw=Ps(Ag);function $g(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Lg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hg(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=vn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function Bg(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function lt(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Wg(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=vn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var ai=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ii=new RegExp(ai.source,"g");function Fg(e){return function(){return e}}function Vg(e){return function(t){return e(t)+""}}function ci(e,t){var n=ai.lastIndex=ii.lastIndex=0,o,r,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(o=ai.exec(e))&&(r=ii.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:lt(o,r)})),n=ii.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?Vg(c[0].x):Fg(t):(t=c.length,function(l){for(var u=0,d;u<t;++u)s[(d=c[u]).i]=d.x(l);return s.join("")})}function vn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Do(t):(n==="number"?lt:n==="string"?(o=St(t))?(t=o,Xn):ci:t instanceof St?Xn:t instanceof Date?Bg:Lg(t)?$g:Array.isArray(t)?Hg:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Wg:lt)(e,t)}var _s=180/Math.PI,si={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function zs(e,t,n,o,r,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,c/=s),e*o<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*_s,skewX:Math.atan(c)*_s,scaleX:a,scaleY:s}}var Ro;function Gg(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?si:zs(t.a,t.b,t.c,t.d,t.e,t.f)}function Xg(e){return e==null||(Ro||(Ro=document.createElementNS("http://www.w3.org/2000/svg","g")),Ro.setAttribute("transform",e),!(e=Ro.transform.baseVal.consolidate()))?si:(e=e.matrix,zs(e.a,e.b,e.c,e.d,e.e,e.f))}function Rs(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push("translate(",null,t,null,n);m.push({i:y-4,x:lt(l,d)},{i:y-2,x:lt(u,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function a(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:lt(l,u)})):u&&d.push(r(d)+"rotate("+u+o)}function s(l,u,d,f){l!==u?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:lt(l,u)}):u&&d.push(r(d)+"skewX("+u+o)}function c(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push(r(p)+"scale(",null,",",null,")");m.push({i:y-4,x:lt(l,d)},{i:y-2,x:lt(u,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=e(l),u=e(u),i(l.translateX,l.translateY,u.translateX,u.translateY,d,f),a(l.rotate,u.rotate,d,f),s(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(p){for(var m=-1,y=f.length,b;++m<y;)d[(b=f[m]).i]=b.x(p);return d.join("")}}}var Ds=Rs(Gg,"px, ","px)","deg)"),As=Rs(Xg,", ",")",")"),Yg=1e-12;function Ns(e){return((e=Math.exp(e))+1/e)/2}function qg(e){return((e=Math.exp(e))-1/e)/2}function Ug(e){return((e=Math.exp(2*e))-1)/(e+1)}var kn=(function e(t,n,o){function r(i,a){var s=i[0],c=i[1],l=i[2],u=a[0],d=a[1],f=a[2],p=u-s,m=d-c,y=p*p+m*m,b,g;if(y<Yg)g=Math.log(f/l)/t,b=function(C){return[s+C*p,c+C*m,l*Math.exp(t*C*g)]};else{var k=Math.sqrt(y),h=(f*f-l*l+o*y)/(2*l*n*k),v=(f*f-l*l-o*y)/(2*f*n*k),x=Math.log(Math.sqrt(h*h+1)-h),S=Math.log(Math.sqrt(v*v+1)-v);g=(S-x)/t,b=function(C){var M=C*g,R=Ns(x),W=l/(n*k)*(R*Ug(t*M+x)-qg(x));return[s+W*p,c+W*m,l*R/Ns(t*M+x)]}}return b.duration=Math.abs(g)*1e3*t/Math.SQRT2,b}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},r})(Math.SQRT2,2,4);function Ts(e){return function(t,n){var o=e((t=Mo(t)).h,(n=Mo(n)).h),r=Xe(t.s,n.s),i=Xe(t.l,n.l),a=Xe(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var Gw=Ts(li),Xw=Ts(Xe);function Os(e){return function(t,n){var o=e((t=Io(t)).h,(n=Io(n)).h),r=Xe(t.c,n.c),i=Xe(t.l,n.l),a=Xe(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var Yw=Os(li),qw=Os(Xe);function $s(e){return(function t(n){n=+n;function o(r,i){var a=e((r=zo(r)).h,(i=zo(i)).h),s=Xe(r.s,i.s),c=Xe(r.l,i.l),l=Xe(r.opacity,i.opacity);return function(u){return r.h=a(u),r.s=s(u),r.l=c(Math.pow(u,n)),r.opacity=l(u),r+""}}return o.gamma=t,o})(1)}var Uw=$s(li),Zw=$s(Xe);var Sn=0,qn=0,Yn=0,Hs=1e3,Ao,Un,To=0,Jt=0,$o=0,Zn=typeof performance=="object"&&performance.now?performance:Date,Bs=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Lo(){return Jt||(Bs(Zg),Jt=Zn.now()+$o)}function Zg(){Jt=0}function Oo(){this._call=this._time=this._next=null}Oo.prototype=di.prototype={constructor:Oo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Lo():+n)+(t==null?0:+t),!this._next&&Un!==this&&(Un?Un._next=this:Ao=this,Un=this),this._call=e,this._time=n,ui()},stop:function(){this._call&&(this._call=null,this._time=1/0,ui())}};function di(e,t,n){var o=new Oo;return o.restart(e,t,n),o}function Kg(){Lo(),++Sn;for(var e=Ao,t;e;)(t=Jt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Sn}function Ls(){Jt=(To=Zn.now())+$o,Sn=qn=0;try{Kg()}finally{Sn=0,Qg(),Jt=0}}function jg(){var e=Zn.now(),t=e-To;t>Hs&&($o-=t,To=e)}function Qg(){for(var e,t=Ao,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ao=n);Un=e,ui(o)}function ui(e){if(!Sn){qn&&(qn=clearTimeout(qn));var t=e-Jt;t>24?(e<1/0&&(qn=setTimeout(Ls,Math.ceil(e-Zn.now()-$o)+1)),Yn&&(Yn=clearInterval(Yn))):(Yn||(To=Zn.now(),Yn=setInterval(jg,Hs)),Sn=1,Bs(Ls))}}function fi(e,t,n){var o=new Oo;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function Fs(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var pi=3,Qw=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(pi),Jw=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(pi),ev=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(pi),Jg=Math.PI,tv=Jg/2;function Ho(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Ws=4/11,nv=6/11,ov=8/11,rv=3/4,iv=9/11,av=10/11,sv=15/16,lv=21/22,cv=63/64,uv=1/Ws/Ws;var mi=1.70158,dv=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(mi),fv=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(mi),pv=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(mi),Cn=2*Math.PI,gi=1,hi=.3,mv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return t*Ho(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(gi,hi),gv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return 1-t*Ho(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(gi,hi),hv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return((i=i*2-1)<0?t*Ho(-i)*Math.sin((o-i)/n):2-t*Ho(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(gi,hi);var eh=Yt("start","end","cancel","interrupt"),th=[],Xs=0,Vs=1,bi=2,Bo=3,Gs=4,yi=5,Wo=6;function Fo(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;nh(e,n,{name:t,index:o,group:r,on:eh,tween:th,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Xs})}function xi(e,t){var n=ct(e,t);if(n.state>Xs)throw new Error("too late; already scheduled");return n}function gt(e,t){var n=ct(e,t);if(n.state>Bo)throw new Error("too late; already running");return n}function ct(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function nh(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=di(i,0,n.time);function i(l){n.state=Vs,n.timer.restart(a,n.delay,n.time),n.delay<=l&&a(l-n.delay)}function a(l){var u,d,f,p;if(n.state!==Vs)return c();for(u in o)if(p=o[u],p.name===n.name){if(p.state===Bo)return fi(a);p.state===Gs?(p.state=Wo,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[u]):+u<t&&(p.state=Wo,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[u])}if(fi(function(){n.state===Bo&&(n.state=Gs,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=bi,n.on.call("start",e,e.__data__,n.index,n.group),n.state===bi){for(n.state=Bo,r=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(p=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function s(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=yi,1),d=-1,f=r.length;++d<f;)r[d].call(e,u);n.state===yi&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Wo,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function Kn(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>bi&&o.state<yi,o.state=Wo,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function oh(e){return this.each(function(){Kn(this,e)})}function rh(e,t){var n,o;return function(){var r=gt(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function ih(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=gt(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=s;break}c===l&&r.push(s)}i.tween=r}}function ah(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ct(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?rh:ih)(n,e,t))}function wi(e,t,n){var o=e._id;return e.each(function(){var r=gt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ct(r,o).value[t]}}function Ys(e,t){var n;return(typeof t=="number"?lt:t instanceof St?Xn:(n=St(t))?(t=n,Xn):ci)(e,t)}function sh(e){return function(){this.removeAttribute(e)}}function lh(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ch(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function uh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function dh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function fh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function ph(e,t){var n=Hn(e),o=n==="transform"?As:Ys;return this.attrTween(e,typeof t=="function"?(n.local?fh:dh)(n,o,wi(this,"attr."+e,t)):t==null?(n.local?lh:sh)(n):(n.local?uh:ch)(n,o,t))}function mh(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function gh(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function hh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&gh(e,i)),n}return r._value=t,r}function bh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&mh(e,i)),n}return r._value=t,r}function yh(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Hn(e);return this.tween(n,(o.local?hh:bh)(o,t))}function xh(e,t){return function(){xi(this,e).delay=+t.apply(this,arguments)}}function wh(e,t){return t=+t,function(){xi(this,e).delay=t}}function vh(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?xh:wh)(t,e)):ct(this.node(),t).delay}function kh(e,t){return function(){gt(this,e).duration=+t.apply(this,arguments)}}function Sh(e,t){return t=+t,function(){gt(this,e).duration=t}}function Ch(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?kh:Sh)(t,e)):ct(this.node(),t).duration}function Eh(e,t){if(typeof t!="function")throw new Error;return function(){gt(this,e).ease=t}}function _h(e){var t=this._id;return arguments.length?this.each(Eh(t,e)):ct(this.node(),t).ease}function Nh(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;gt(this,e).ease=n}}function Mh(e){if(typeof e!="function")throw new Error;return this.each(Nh(this._id,e))}function Ih(e){typeof e!="function"&&(e=Gr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,l=0;l<a;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&s.push(c);return new Et(o,this._parents,this._name,this._id)}function Ph(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var c=t[s],l=n[s],u=c.length,d=a[s]=new Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<o;++s)a[s]=t[s];return new Et(a,this._parents,this._name,this._id)}function zh(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Rh(e,t,n){var o,r,i=zh(t)?xi:gt;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function Dh(e,t){var n=this._id;return arguments.length<2?ct(this.node(),n).on.on(e):this.each(Rh(n,e,t))}function Ah(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Th(){return this.on("end.remove",Ah(this._id))}function Oh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=ko(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],c=s.length,l=i[a]=new Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,Fo(l[f],t,n,f,l,ct(u,n)));return new Et(i,this._parents,t,n)}function $h(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Vr(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var c=o[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=ct(u,n),y=0,b=f.length;y<b;++y)(p=f[y])&&Fo(p,t,n,y,f,m);i.push(f),a.push(u)}return new Et(i,a,t,n)}var Lh=Ut.prototype.constructor;function Hh(){return new Lh(this._groups,this._parents)}function Bh(e,t){var n,o,r;return function(){var i=qt(this,e),a=(this.style.removeProperty(e),qt(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function qs(e){return function(){this.style.removeProperty(e)}}function Wh(e,t,n){var o,r=n+"",i;return function(){var a=qt(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function Fh(e,t,n){var o,r,i;return function(){var a=qt(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),qt(this,e))),a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s))}}function Vh(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var c=gt(this,e),l=c.on,u=c.value[i]==null?s||(s=qs(t)):void 0;(l!==n||r!==u)&&(o=(n=l).copy()).on(a,r=u),c.on=o}}function Gh(e,t,n){var o=(e+="")=="transform"?Ds:Ys;return t==null?this.styleTween(e,Bh(e,o)).on("end.style."+e,qs(e)):typeof t=="function"?this.styleTween(e,Fh(e,o,wi(this,"style."+e,t))).each(Vh(this._id,e)):this.styleTween(e,Wh(e,o,t),n).on("end.style."+e,null)}function Xh(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Yh(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&Xh(e,a,n)),o}return i._value=t,i}function qh(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Yh(e,t,n??""))}function Uh(e){return function(){this.textContent=e}}function Zh(e){return function(){var t=e(this);this.textContent=t??""}}function Kh(e){return this.tween("text",typeof e=="function"?Zh(wi(this,"text",e)):Uh(e==null?"":e+""))}function jh(e){return function(t){this.textContent=e.call(this,t)}}function Qh(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&jh(r)),t}return o._value=e,o}function Jh(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Qh(e))}function eb(){for(var e=this._name,t=this._id,n=Us(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,l=0;l<s;++l)if(c=a[l]){var u=ct(c,t);Fo(c,e,n,l,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Et(o,this._parents,e,n)}function tb(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--r===0&&i()}};n.each(function(){var l=gt(this,o),u=l.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),l.on=t}),r===0&&i()})}var nb=0;function Et(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function ob(e){return Ut().transition(e)}function Us(){return++nb}var Ct=Ut.prototype;Et.prototype=ob.prototype={constructor:Et,select:Oh,selectAll:$h,selectChild:Ct.selectChild,selectChildren:Ct.selectChildren,filter:Ih,merge:Ph,selection:Hh,transition:eb,call:Ct.call,nodes:Ct.nodes,node:Ct.node,size:Ct.size,empty:Ct.empty,each:Ct.each,on:Dh,attr:ph,attrTween:yh,style:Gh,styleTween:qh,text:Kh,textTween:Jh,remove:Th,tween:ah,delay:vh,duration:Ch,ease:_h,easeVarying:Mh,end:tb,[Symbol.iterator]:Ct[Symbol.iterator]};var rb={time:null,delay:0,duration:250,ease:Fs};function ib(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function ab(e){var t,n;e instanceof Et?(t=e._id,e=e._name):(t=Us(),(n=rb).time=Lo(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,l=0;l<s;++l)(c=a[l])&&Fo(c,e,t,l,a,n||ib(c,t));return new Et(o,this._parents,e,t)}Ut.prototype.interrupt=oh;Ut.prototype.transition=ab;var Vo=e=>()=>e;function sb(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function _t(e,t,n){this.k=e,this.x=t,this.y=n}_t.prototype={constructor:_t,scale:function(e){return e===1?this:new _t(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new _t(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Qn=new _t(1,0,0);ki.prototype=_t.prototype;function ki(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Qn;return e.__zoom}function vi(e){e.stopImmediatePropagation()}function jn(e){e.preventDefault(),e.stopImmediatePropagation()}function lb(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function cb(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Zs(){return this.__zoom||Qn}function ub(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function db(){return navigator.maxTouchPoints||"ontouchstart"in this}function fb(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Si(){var e=lb,t=cb,n=fb,o=ub,r=db,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=kn,l=Yt("start","zoom","end"),u,d,f,p=500,m=150,y=0,b=10;function g(w){w.property("__zoom",Zs).on("wheel.zoom",M,{passive:!1}).on("mousedown.zoom",R).on("dblclick.zoom",W).filter(r).on("touchstart.zoom",z).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",N).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(w,I,_,E){var P=w.selection?w.selection():w;P.property("__zoom",Zs),w!==P?x(w,I,_,E):P.interrupt().each(function(){S(this,arguments).event(E).start().zoom(null,typeof I=="function"?I.apply(this,arguments):I).end()})},g.scaleBy=function(w,I,_,E){g.scaleTo(w,function(){var P=this.__zoom.k,D=typeof I=="function"?I.apply(this,arguments):I;return P*D},_,E)},g.scaleTo=function(w,I,_,E){g.transform(w,function(){var P=t.apply(this,arguments),D=this.__zoom,F=_==null?v(P):typeof _=="function"?_.apply(this,arguments):_,H=D.invert(F),V=typeof I=="function"?I.apply(this,arguments):I;return n(h(k(D,V),F,H),P,a)},_,E)},g.translateBy=function(w,I,_,E){g.transform(w,function(){return n(this.__zoom.translate(typeof I=="function"?I.apply(this,arguments):I,typeof _=="function"?_.apply(this,arguments):_),t.apply(this,arguments),a)},null,E)},g.translateTo=function(w,I,_,E,P){g.transform(w,function(){var D=t.apply(this,arguments),F=this.__zoom,H=E==null?v(D):typeof E=="function"?E.apply(this,arguments):E;return n(Qn.translate(H[0],H[1]).scale(F.k).translate(typeof I=="function"?-I.apply(this,arguments):-I,typeof _=="function"?-_.apply(this,arguments):-_),D,a)},E,P)};function k(w,I){return I=Math.max(i[0],Math.min(i[1],I)),I===w.k?w:new _t(I,w.x,w.y)}function h(w,I,_){var E=I[0]-_[0]*w.k,P=I[1]-_[1]*w.k;return E===w.x&&P===w.y?w:new _t(w.k,E,P)}function v(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function x(w,I,_,E){w.on("start.zoom",function(){S(this,arguments).event(E).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(E).end()}).tween("zoom",function(){var P=this,D=arguments,F=S(P,D).event(E),H=t.apply(P,D),V=_==null?v(H):typeof _=="function"?_.apply(P,D):_,U=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),Y=P.__zoom,Q=typeof I=="function"?I.apply(P,D):I,re=c(Y.invert(V).concat(U/Y.k),Q.invert(V).concat(U/Q.k));return function(B){if(B===1)B=Q;else{var A=re(B),X=U/A[2];B=new _t(X,V[0]-A[0]*X,V[1]-A[1]*X)}F.zoom(null,B)}})}function S(w,I,_){return!_&&w.__zooming||new C(w,I)}function C(w,I){this.that=w,this.args=I,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,I),this.taps=0}C.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,I){return this.mouse&&w!=="mouse"&&(this.mouse[1]=I.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=I.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=I.invert(this.touch1[0])),this.that.__zoom=I,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var I=Le(this.that).datum();l.call(w,this.that,new sb(w,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:l}),I)}};function M(w,...I){if(!e.apply(this,arguments))return;var _=S(this,I).event(w),E=this.__zoom,P=Math.max(i[0],Math.min(i[1],E.k*Math.pow(2,o.apply(this,arguments)))),D=Ge(w);if(_.wheel)(_.mouse[0][0]!==D[0]||_.mouse[0][1]!==D[1])&&(_.mouse[1]=E.invert(_.mouse[0]=D)),clearTimeout(_.wheel);else{if(E.k===P)return;_.mouse=[D,E.invert(D)],Kn(this),_.start()}jn(w),_.wheel=setTimeout(F,m),_.zoom("mouse",n(h(k(E,P),_.mouse[0],_.mouse[1]),_.extent,a));function F(){_.wheel=null,_.end()}}function R(w,...I){if(f||!e.apply(this,arguments))return;var _=w.currentTarget,E=S(this,I,!0).event(w),P=Le(w.view).on("mousemove.zoom",V,!0).on("mouseup.zoom",U,!0),D=Ge(w,_),F=w.clientX,H=w.clientY;Ur(w.view),vi(w),E.mouse=[D,this.__zoom.invert(D)],Kn(this),E.start();function V(Y){if(jn(Y),!E.moved){var Q=Y.clientX-F,re=Y.clientY-H;E.moved=Q*Q+re*re>y}E.event(Y).zoom("mouse",n(h(E.that.__zoom,E.mouse[0]=Ge(Y,_),E.mouse[1]),E.extent,a))}function U(Y){P.on("mousemove.zoom mouseup.zoom",null),Zr(Y.view,E.moved),jn(Y),E.event(Y).end()}}function W(w,...I){if(e.apply(this,arguments)){var _=this.__zoom,E=Ge(w.changedTouches?w.changedTouches[0]:w,this),P=_.invert(E),D=_.k*(w.shiftKey?.5:2),F=n(h(k(_,D),E,P),t.apply(this,I),a);jn(w),s>0?Le(this).transition().duration(s).call(x,F,E,w):Le(this).call(g.transform,F,E,w)}}function z(w,...I){if(e.apply(this,arguments)){var _=w.touches,E=_.length,P=S(this,I,w.changedTouches.length===E).event(w),D,F,H,V;for(vi(w),F=0;F<E;++F)H=_[F],V=Ge(H,this),V=[V,this.__zoom.invert(V),H.identifier],P.touch0?!P.touch1&&P.touch0[2]!==V[2]&&(P.touch1=V,P.taps=0):(P.touch0=V,D=!0,P.taps=1+!!u);u&&(u=clearTimeout(u)),D&&(P.taps<2&&(d=V[0],u=setTimeout(function(){u=null},p)),Kn(this),P.start())}}function L(w,...I){if(this.__zooming){var _=S(this,I).event(w),E=w.changedTouches,P=E.length,D,F,H,V;for(jn(w),D=0;D<P;++D)F=E[D],H=Ge(F,this),_.touch0&&_.touch0[2]===F.identifier?_.touch0[0]=H:_.touch1&&_.touch1[2]===F.identifier&&(_.touch1[0]=H);if(F=_.that.__zoom,_.touch1){var U=_.touch0[0],Y=_.touch0[1],Q=_.touch1[0],re=_.touch1[1],B=(B=Q[0]-U[0])*B+(B=Q[1]-U[1])*B,A=(A=re[0]-Y[0])*A+(A=re[1]-Y[1])*A;F=k(F,Math.sqrt(B/A)),H=[(U[0]+Q[0])/2,(U[1]+Q[1])/2],V=[(Y[0]+re[0])/2,(Y[1]+re[1])/2]}else if(_.touch0)H=_.touch0[0],V=_.touch0[1];else return;_.zoom("touch",n(h(F,H,V),_.extent,a))}}function N(w,...I){if(this.__zooming){var _=S(this,I).event(w),E=w.changedTouches,P=E.length,D,F;for(vi(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),D=0;D<P;++D)F=E[D],_.touch0&&_.touch0[2]===F.identifier?delete _.touch0:_.touch1&&_.touch1[2]===F.identifier&&delete _.touch1;if(_.touch1&&!_.touch0&&(_.touch0=_.touch1,delete _.touch1),_.touch0)_.touch0[1]=this.__zoom.invert(_.touch0[0]);else if(_.end(),_.taps===2&&(F=Ge(F,this),Math.hypot(d[0]-F[0],d[1]-F[1])<b)){var H=Le(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return g.wheelDelta=function(w){return arguments.length?(o=typeof w=="function"?w:Vo(+w),g):o},g.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Vo(!!w),g):e},g.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:Vo(!!w),g):r},g.extent=function(w){return arguments.length?(t=typeof w=="function"?w:Vo([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),g):t},g.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],g):[i[0],i[1]]},g.translateExtent=function(w){return arguments.length?(a[0][0]=+w[0][0],a[1][0]=+w[1][0],a[0][1]=+w[0][1],a[1][1]=+w[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(w){return arguments.length?(n=w,g):n},g.duration=function(w){return arguments.length?(s=+w,g):s},g.interpolate=function(w){return arguments.length?(c=w,g):c},g.on=function(){var w=l.on.apply(l,arguments);return w===l?g:w},g.clickDistance=function(w){return arguments.length?(y=(w=+w)*w,g):Math.sqrt(y)},g.tapDistance=function(w){return arguments.length?(b=+w,g):b},g}var je={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Mn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Mi=["Enter"," ","Escape"],Ii={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Tt;(function(e){e.Strict="strict",e.Loose="loose"})(Tt||(Tt={}));var Nt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Nt||(Nt={}));var en;(function(e){e.Partial="partial",e.Full="full"})(en||(en={}));var Pi={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},ht;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(ht||(ht={}));var Ot;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Ot||(Ot={}));var j;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(j||(j={}));var Ks={[j.Left]:j.Right,[j.Right]:j.Left,[j.Top]:j.Bottom,[j.Bottom]:j.Top};function zi(e){return e===null?null:e?"valid":"invalid"}var Ri=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,cl=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Di=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var eo=(e,t=[0,0])=>{let{width:n,height:o}=ut(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},Ai=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):Di(r)?r:t.nodeLookup.get(r.id));let s=a?Yo(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return Zo(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return Ko(n)},In=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=Zo(n,Yo(r)),o=!0)}),o?Ko(n):{x:0,y:0,width:0,height:0}},qo=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,u=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:m=!0,hidden:y=!1}=f;if(a&&!m||y)continue;let b=p.width??f.width??f.initialWidth??0,g=p.height??f.height??f.initialHeight??0,{x:k,y:h}=f.internals.positionAbsolute,v=ml(s,c,l,u,k,h,b,g),x=b*g,S=i&&v>0;(!f.internals.handleBounds||S||v>=x||f.dragging)&&d.push(f)}return d},ul=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function pb(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=ut(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function dl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=pb(e,a),c=In(s),l=no(c,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function Ti({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:l}=s?s.internals.positionAbsolute:{x:0,y:0},u=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",je.error005());else{let p=s.measured.width,m=s.measured.height;p&&m&&(d=[[c,l],[c+p,l+m]])}else s&&on(a.extent)&&(d=[[a.extent[0][0]+c,a.extent[0][1]+l],[a.extent[1][0]+c,a.extent[1][1]+l]]);let f=on(d)?tn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",je.error015()),{position:{x:f.x-c+(a.measured.width??0)*u[0],y:f.y-l+(a.measured.height??0)*u[1]},positionAbsolute:f}}async function fl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),m=!p&&f.parentId&&a.find(y=>y.id===f.parentId);(p||m)&&a.push(f)}let s=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),u=ul(a,c);for(let f of c)s.has(f.id)&&!u.find(m=>m.id===f.id)&&u.push(f);if(!r)return{edges:u,nodes:a};let d=await r({nodes:a,edges:u});return typeof d=="boolean"?d?{edges:u,nodes:a}:{edges:[],nodes:[]}:d}var Nn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),tn=(e={x:0,y:0},t,n)=>({x:Nn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Nn(e.y,t[0][1],t[1][1]-(n?.height??0))});function pl(e,t,n){let{width:o,height:r}=ut(n),{x:i,y:a}=n.internals.positionAbsolute;return tn(e,[[i,a],[i+o,a+r]],t)}var js=(e,t,n)=>e<t?Nn(Math.abs(e-t),1,t)/t:e>n?-Nn(Math.abs(e-n),1,t)/t:0,Uo=(e,t,n=15,o=40)=>{let r=js(e.x,o,t.width-o)*n,i=js(e.y,o,t.height-o)*n;return[r,i]},Zo=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Ni=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),Ko=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Pn=(e,t=[0,0])=>{let{x:n,y:o}=Di(e)?e.internals.positionAbsolute:eo(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Yo=(e,t=[0,0])=>{let{x:n,y:o}=Di(e)?e.internals.positionAbsolute:eo(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Oi=(e,t)=>Ko(Zo(Ni(e),Ni(t))),ml=(e,t,n,o,r,i,a,s)=>{let c=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(c*l)},to=(e,t)=>ml(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),$i=e=>nt(e.width)&&nt(e.height)&&nt(e.x)&&nt(e.y),nt=e=>!isNaN(e)&&isFinite(e),Li=(e,t)=>(n,o)=>{},zn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Rn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?zn(s,a):s},nn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function En(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function mb(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=En(e,n),r=En(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=En(e.top??e.y??0,n),r=En(e.bottom??e.y??0,n),i=En(e.left??e.x??0,t),a=En(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function gb(e,t,n,o,r,i){let{x:a,y:s}=nn(e,[t,n,o]),{x:c,y:l}=nn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),u=r-c,d=i-l;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(u),bottom:Math.floor(d)}}var no=(e,t,n,o,r,i)=>{let a=mb(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,l=Math.min(s,c),u=Nn(l,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*u,m=n/2-f*u,y=gb(e,p,m,u,t,n),b={left:Math.min(y.left-a.left,0),top:Math.min(y.top-a.top,0),right:Math.min(y.right-a.right,0),bottom:Math.min(y.bottom-a.bottom,0)};return{x:p-b.left+b.right,y:m-b.top+b.bottom,zoom:u}},Dn=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function on(e){return e!=null&&e!=="parent"}function ut(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Hi(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Bi(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function Wi(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function gl(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function hl(e){return{...Ii,...e||{}}}function Jn(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=ot(e),s=Rn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:c,y:l}=n?zn(s,t):s;return{xSnapped:c,ySnapped:l,...s}}var jo=e=>({width:e.offsetWidth,height:e.offsetHeight}),Fi=e=>e?.getRootNode?.()||window?.document,hb=["INPUT","SELECT","TEXTAREA"];function Vi(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:hb.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Gi=e=>"clientX"in e,ot=(e,t)=>{let n=Gi(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Qs=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...jo(a)}})};function Qo({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+r*.375+a*.375+n*.125,l=t*.125+i*.375+s*.375+o*.125,u=Math.abs(c-e),d=Math.abs(l-t);return[c,l,u,d]}function Go(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Js({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case j.Left:return[t-Go(t-o,i),n];case j.Right:return[t+Go(o-t,i),n];case j.Top:return[t,n-Go(n-r,i)];case j.Bottom:return[t,n+Go(r-n,i)]}}function Jo({sourceX:e,sourceY:t,sourcePosition:n=j.Bottom,targetX:o,targetY:r,targetPosition:i=j.Top,curvature:a=.25}){let[s,c]=Js({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[l,u]=Js({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,p,m]=Qo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:c,targetControlX:l,targetControlY:u});return[`M${e},${t} C${s},${c} ${l},${u} ${o},${r}`,d,f,p,m]}function Xi({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function bl({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function yl({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=Zo(Yo(e),Yo(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return to(a,Ko(i))>0}var bb=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,yb=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),xl=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",je.error006()),t;let o=n.getEdgeId||bb,r;return Ri(e)?r={...e}:r={...e,id:o(e)},yb(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function er({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=Xi({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var el={[j.Left]:{x:-1,y:0},[j.Right]:{x:1,y:0},[j.Top]:{x:0,y:-1},[j.Bottom]:{x:0,y:1}},xb=({source:e,sourcePosition:t=j.Bottom,target:n})=>t===j.Left||t===j.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},tl=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function wb({source:e,sourcePosition:t=j.Bottom,target:n,targetPosition:o=j.Top,center:r,offset:i,stepPosition:a}){let s=el[t],c=el[o],l={x:e.x+s.x*i,y:e.y+s.y*i},u={x:n.x+c.x*i,y:n.y+c.y*i},d=xb({source:l,sourcePosition:t,target:u}),f=d.x!==0?"x":"y",p=d[f],m=[],y,b,g={x:0,y:0},k={x:0,y:0},[,,h,v]=Xi({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f==="x"?(y=r.x??l.x+(u.x-l.x)*a,b=r.y??(l.y+u.y)/2):(y=r.x??(l.x+u.x)/2,b=r.y??l.y+(u.y-l.y)*a);let M=[{x:y,y:l.y},{x:y,y:u.y}],R=[{x:l.x,y:b},{x:u.x,y:b}];s[f]===p?m=f==="x"?M:R:m=f==="x"?R:M}else{let M=[{x:l.x,y:u.y}],R=[{x:u.x,y:l.y}];if(f==="x"?m=s.x===p?R:M:m=s.y===p?M:R,t===o){let w=Math.abs(e[f]-n[f]);if(w<=i){let I=Math.min(i-1,i-w);s[f]===p?g[f]=(l[f]>e[f]?-1:1)*I:k[f]=(u[f]>n[f]?-1:1)*I}}if(t!==o){let w=f==="x"?"y":"x",I=s[f]===c[w],_=l[w]>u[w],E=l[w]<u[w];(s[f]===1&&(!I&&_||I&&E)||s[f]!==1&&(!I&&E||I&&_))&&(m=f==="x"?M:R)}let W={x:l.x+g.x,y:l.y+g.y},z={x:u.x+k.x,y:u.y+k.y},L=Math.max(Math.abs(W.x-m[0].x),Math.abs(z.x-m[0].x)),N=Math.max(Math.abs(W.y-m[0].y),Math.abs(z.y-m[0].y));L>=N?(y=(W.x+z.x)/2,b=m[0].y):(y=m[0].x,b=(W.y+z.y)/2)}let x={x:l.x+g.x,y:l.y+g.y},S={x:u.x+k.x,y:u.y+k.y};return[[e,...x.x!==m[0].x||x.y!==m[0].y?[x]:[],...m,...S.x!==m[m.length-1].x||S.y!==m[m.length-1].y?[S]:[],n],y,b,h,v]}function vb(e,t,n,o){let r=Math.min(tl(e,t)/2,tl(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let l=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+r*l},${a}Q ${i},${a} ${i},${a+r*u}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+r*c}Q ${i},${a} ${i+r*s},${a}`}function oo({sourceX:e,sourceY:t,sourcePosition:n=j.Bottom,targetX:o,targetY:r,targetPosition:i=j.Top,borderRadius:a=5,centerX:s,centerY:c,offset:l=20,stepPosition:u=.5}){let[d,f,p,m,y]=wb({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:c},offset:l,stepPosition:u}),b=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)b+=vb(d[g-1],d[g],d[g+1],a);return b+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[b,f,p,m,y]}function nl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function wl(e){let{sourceNode:t,targetNode:n}=e;if(!nl(t)||!nl(n))return null;let o=t.internals.handleBounds||ol(t.handles),r=n.internals.handleBounds||ol(n.handles),i=rl(o?.source??[],e.sourceHandle),a=rl(e.connectionMode===Tt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",je.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||j.Bottom,c=a?.position||j.Top,l=$t(t,i,s),u=$t(n,a,c);return{sourceX:l.x,sourceY:l.y,targetX:u.x,targetY:u.y,sourcePosition:s,targetPosition:c}}function ol(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function $t(e,t,n=j.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??ut(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case j.Top:return{x:r+a/2,y:i};case j.Right:return{x:r+a,y:i+s/2};case j.Bottom:return{x:r+a/2,y:i+s};case j.Left:return{x:r,y:i+s/2}}}function rl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function tr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function vl(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=tr(c,t);i.has(l)||(a.push({id:l,color:c.color||n,...c}),i.add(l))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var kl=1e3,kb=10,Yi={nodeOrigin:[0,0],nodeExtent:Mn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},Sb={...Yi,checkEquality:!0};function qi(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function Sl(e,t,n){let o=qi(Yi,n);for(let r of e.values())if(r.parentId)Zi(r,e,t,o);else{let i=eo(r,o.nodeOrigin),a=on(r.extent)?r.extent:o.nodeExtent,s=tn(i,a,ut(r));r.internals.positionAbsolute=s}}function Cb(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function Ui(e){return e==="manual"}function nr(e,t,n,o={}){let r=qi(Sb,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!Ui(r.zIndexMode)?kl:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let u of e){let d=a.get(u.id);if(r.checkEquality&&u===d?.internals.userNode)t.set(u.id,d);else{let f=eo(u,r.nodeOrigin),p=on(u.extent)?u.extent:r.nodeExtent,m=tn(f,p,ut(u));d={...r.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:m,handleBounds:Cb(u,d),z:Cl(u,s,r.zIndexMode),userNode:u}},t.set(u.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),u.parentId&&Zi(d,t,n,o,i),l||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function Eb(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Zi(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=qi(Yi,o),l=e.parentId,u=t.get(l);if(!u){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Eb(e,n),r&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++r.i,u.internals.z=u.internals.z+r.i*kb),r&&u.internals.rootParentIndex!==void 0&&(r.i=u.internals.rootParentIndex);let d=i&&!Ui(c)?kl:0,{x:f,y:p,z:m}=_b(e,u,a,s,d,c),{positionAbsolute:y}=e.internals,b=f!==y.x||p!==y.y;(b||m!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:b?{x:f,y:p}:y,z:m}})}function Cl(e,t,n){let o=nt(e.zIndex)?e.zIndex:0;return Ui(n)?o:o+(e.selected?t:0)}function _b(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,c=ut(e),l=eo(e,n),u=on(e.extent)?tn(l,e.extent,c):l,d=tn({x:a+u.x,y:s+u.y},o,c);e.extent==="parent"&&(d=pl(d,c,t));let f=Cl(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function or(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??Pn(s),l=Oi(c,a.rect);i.set(a.parentId,{expandedRect:l,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let l=s.internals.positionAbsolute,u=ut(s),d=s.origin??o,f=a.x<l.x?Math.round(Math.abs(l.x-a.x)):0,p=a.y<l.y?Math.round(Math.abs(l.y-a.y)):0,m=Math.max(u.width,Math.round(a.width)),y=Math.max(u.height,Math.round(a.height)),b=(m-u.width)*d[0],g=(y-u.height)*d[1];(f>0||p>0||b||g)&&(r.push({id:c,type:"position",position:{x:s.position.x-f+b,y:s.position.y-p+g}}),n.get(c)?.forEach(k=>{e.some(h=>h.id===k.id)||r.push({id:k.id,type:"position",position:{x:k.position.x+f,y:k.position.y+p}})})),(u.width<a.width||u.height<a.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:m+(f?d[0]*f-b:0),height:y+(p?d[1]*p-g:0)}})}),r}function El(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let l=[],u=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(u.transform),f=[];for(let p of e.values()){let m=t.get(p.id);if(!m)continue;if(m.hidden){t.set(m.id,{...m,internals:{...m.internals,handleBounds:void 0}}),c=!0;continue}let y=jo(p.nodeElement),b=m.measured.width!==y.width||m.measured.height!==y.height;if(!!(y.width&&y.height&&(b||!m.internals.handleBounds||p.force))){let k=p.nodeElement.getBoundingClientRect(),h=on(m.extent)?m.extent:i,{positionAbsolute:v}=m.internals;if(m.parentId&&m.extent==="parent"){let S=t.get(m.parentId);S&&(v=pl(v,y,S))}else h&&(v=tn(v,h,y));let x={...m,measured:y,internals:{...m.internals,positionAbsolute:v,handleBounds:{source:Qs("source",p.nodeElement,k,d,m.id),target:Qs("target",p.nodeElement,k,d,m.id)}}};t.set(m.id,x),m.parentId&&Zi(x,t,n,{nodeOrigin:r,zIndexMode:a}),c=!0,b&&(l.push({id:m.id,type:"dimensions",dimensions:y}),m.expandParent&&m.parentId&&f.push({id:m.id,parentId:m.parentId,rect:Pn(x,r)}))}}if(f.length>0){let p=or(f,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function _l({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function il(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let c=o.get(a)||new Map;if(o.set(a,c.set(n,t)),i){a=`${r}-${e}-${i}`;let l=o.get(a)||new Map;o.set(a,l.set(n,t))}}function Ki(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},l=`${r}-${a}--${i}-${s}`,u=`${i}-${s}--${r}-${a}`;il("source",c,u,e,r,a),il("target",c,l,e,i,s),t.set(o.id,o)}}function Nl(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Nl(n,t):!1}function al(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function Nb(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!Nl(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function Ci({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&r.push({...c,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Mb({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=zn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function Ml({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,c=!1,l={x:0,y:0},u=null,d=!1,f=null,p=!1,m=!1,y=null;function b({noDragClassName:k,handleSelector:h,domNode:v,isSelectable:x,nodeId:S,nodeClickDistance:C=0}){f=Le(v);function M({x:L,y:N}){let{nodeLookup:w,nodeExtent:I,snapGrid:_,snapToGrid:E,nodeOrigin:P,onNodeDrag:D,onSelectionDrag:F,onError:H,updateNodePositions:V}=t();i={x:L,y:N};let U=!1,Y=s.size>1,Q=Y&&I?Ni(In(s)):null,re=Y&&E?Mb({dragItems:s,snapGrid:_,x:L,y:N}):null;for(let[B,A]of s){if(!w.has(B))continue;let X={x:L-A.distance.x,y:N-A.distance.y};E&&(X=re?{x:Math.round(X.x+re.x),y:Math.round(X.y+re.y)}:zn(X,_));let ee=null;if(Y&&I&&!A.extent&&Q){let{positionAbsolute:J}=A.internals,ie=J.x-Q.x+I[0][0],le=J.x+A.measured.width-Q.x2+I[1][0],pe=J.y-Q.y+I[0][1],Oe=J.y+A.measured.height-Q.y2+I[1][1];ee=[[ie,pe],[le,Oe]]}let{position:te,positionAbsolute:K}=Ti({nodeId:B,nextPosition:X,nodeLookup:w,nodeExtent:ee||I,nodeOrigin:P,onError:H});U=U||A.position.x!==te.x||A.position.y!==te.y,A.position=te,A.internals.positionAbsolute=K}if(m=m||U,!!U&&(V(s,!0),y&&(o||D||!S&&F))){let[B,A]=Ci({nodeId:S,dragItems:s,nodeLookup:w});o?.(y,s,B,A),D?.(y,B,A),S||F?.(y,A)}}async function R(){if(!u)return;let{transform:L,panBy:N,autoPanSpeed:w,autoPanOnNodeDrag:I}=t();if(!I){c=!1,cancelAnimationFrame(a);return}let[_,E]=Uo(l,u,w);(_!==0||E!==0)&&(i.x=(i.x??0)-_/L[2],i.y=(i.y??0)-E/L[2],await N({x:_,y:E})&&M(i)),a=requestAnimationFrame(R)}function W(L){let{nodeLookup:N,multiSelectionActive:w,nodesDraggable:I,transform:_,snapGrid:E,snapToGrid:P,selectNodesOnDrag:D,onNodeDragStart:F,onSelectionDragStart:H,unselectNodesAndEdges:V}=t();d=!0,(!D||!x)&&!w&&S&&(N.get(S)?.selected||V()),x&&D&&S&&e?.(S);let U=Jn(L.sourceEvent,{transform:_,snapGrid:E,snapToGrid:P,containerBounds:u});if(i=U,s=Nb(N,I,U,S),s.size>0&&(n||F||!S&&H)){let[Y,Q]=Ci({nodeId:S,dragItems:s,nodeLookup:N});n?.(L.sourceEvent,s,Y,Q),F?.(L.sourceEvent,Y,Q),S||H?.(L.sourceEvent,Q)}}let z=Kr().clickDistance(C).on("start",L=>{let{domNode:N,nodeDragThreshold:w,transform:I,snapGrid:_,snapToGrid:E}=t();u=N?.getBoundingClientRect()||null,p=!1,m=!1,y=L.sourceEvent,w===0&&W(L),i=Jn(L.sourceEvent,{transform:I,snapGrid:_,snapToGrid:E,containerBounds:u}),l=ot(L.sourceEvent,u)}).on("drag",L=>{let{autoPanOnNodeDrag:N,transform:w,snapGrid:I,snapToGrid:_,nodeDragThreshold:E,nodeLookup:P}=t(),D=Jn(L.sourceEvent,{transform:w,snapGrid:I,snapToGrid:_,containerBounds:u});if(y=L.sourceEvent,(L.sourceEvent.type==="touchmove"&&L.sourceEvent.touches.length>1||S&&!P.has(S))&&(p=!0),!p){if(!c&&N&&d&&(c=!0,R()),!d){let F=ot(L.sourceEvent,u),H=F.x-l.x,V=F.y-l.y;Math.sqrt(H*H+V*V)>E&&W(L)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&s&&d&&(l=ot(L.sourceEvent,u),M(D))}}).on("end",L=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:N,updateNodePositions:w,onNodeDragStop:I,onSelectionDragStop:_}=t();if(m&&(w(s,!1),m=!1),r||I||!S&&_){let[E,P]=Ci({nodeId:S,dragItems:s,nodeLookup:N,dragging:!1});r?.(L.sourceEvent,s,E,P),I?.(L.sourceEvent,E,P),S||_?.(L.sourceEvent,P)}}}).filter(L=>{let N=L.target;return!L.button&&(!k||!al(N,`.${k}`,v))&&(!h||al(N,h,v))});f.call(z)}function g(){f?.on(".drag",null)}return{update:b,destroy:g}}function Ib(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())to(r,Pn(i))>0&&o.push(i);return o}var Pb=250;function zb(e,t,n,o){let r=[],i=1/0,a=Ib(e,n,t+Pb);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:u,y:d}=$t(s,l,l.position,!0),f=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...l,x:u,y:d}],i=f):f===i&&r.push({...l,x:u,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(c=>c.type===s)??r[0]}return r[0]}function Il(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(l=>l.id===n):s?.[0])??null;return c&&i?{...c,...$t(a,c,c.position,!0)}:c}function Pl(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Rb(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var zl=()=>!0;function Db(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:l,autoPanOnConnect:u,flowId:d,panBy:f,cancelConnection:p,onConnectStart:m,onConnect:y,onConnectEnd:b,isValidConnection:g=zl,onReconnectEnd:k,updateConnection:h,getTransform:v,getFromHandle:x,autoPanSpeed:S,dragThreshold:C=1,handleDomNode:M}){let R=Fi(e.target),W=0,z,{x:L,y:N}=ot(e),w=Pl(i,M),I=s?.getBoundingClientRect(),_=!1;if(!I||!w)return;let E=Il(r,w,o,c,t);if(!E)return;let P=ot(e,I),D=!1,F=null,H=!1,V=null;function U(){if(!u||!I)return;let[te,K]=Uo(P,I,S);f({x:te,y:K}),W=requestAnimationFrame(U)}let Y={...E,nodeId:r,type:w,position:E.position},Q=c.get(r),B={inProgress:!0,isValid:null,from:$t(Q,Y,j.Left,!0),fromHandle:Y,fromPosition:Y.position,fromNode:Q,to:P,toHandle:null,toPosition:Ks[Y.position],toNode:null,pointer:P};function A(){_=!0,h(B),m?.(e,{nodeId:r,handleId:o,handleType:w})}C===0&&A();function X(te){if(!_){let{x:Oe,y:ce}=ot(te),et=Oe-L,$e=ce-N;if(!(et*et+$e*$e>C*C))return;A()}if(!x()||!Y){ee(te);return}let K=v();P=ot(te,I),z=zb(Rn(P,K,!1,[1,1]),n,c,Y),D||(U(),D=!0);let J=Rl(te,{handle:z,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:g,doc:R,lib:l,flowId:d,nodeLookup:c});V=J.handleDomNode,F=J.connection,H=Rb(!!z,J.isValid);let ie=c.get(r),le=ie?$t(ie,Y,j.Left,!0):B.from,pe={...B,from:le,isValid:H,to:J.toHandle&&H?nn({x:J.toHandle.x,y:J.toHandle.y},K):P,toHandle:J.toHandle,toPosition:H&&J.toHandle?J.toHandle.position:Ks[Y.position],toNode:J.toHandle?c.get(J.toHandle.nodeId):null,pointer:P};h(pe),B=pe}function ee(te){if(!("touches"in te&&te.touches.length>0)){if(_){(z||V)&&F&&H&&y?.(F);let{inProgress:K,...J}=B,ie={...J,toPosition:B.toHandle?B.toPosition:null};b?.(te,ie),i&&k?.(te,ie)}p(),cancelAnimationFrame(W),D=!1,H=!1,F=null,V=null,R.removeEventListener("mousemove",X),R.removeEventListener("mouseup",ee),R.removeEventListener("touchmove",X),R.removeEventListener("touchend",ee)}}R.addEventListener("mousemove",X),R.addEventListener("mouseup",ee),R.addEventListener("touchmove",X),R.addEventListener("touchend",ee)}function Rl(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:l=zl,nodeLookup:u}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:m}=ot(e),y=a.elementFromPoint(p,m),b=y?.classList.contains(`${s}-flow__handle`)?y:f,g={handleDomNode:b,isValid:!1,connection:null,toHandle:null};if(b){let k=Pl(void 0,b),h=b.getAttribute("data-nodeid"),v=b.getAttribute("data-handleid"),x=b.classList.contains("connectable"),S=b.classList.contains("connectableend");if(!h||!k)return g;let C={source:d?h:o,sourceHandle:d?v:r,target:d?o:h,targetHandle:d?r:v};g.connection=C;let R=x&&S&&(n===Tt.Strict?d&&k==="source"||!d&&k==="target":h!==o||v!==r);g.isValid=R&&l(C),g.toHandle=Il(h,k,v,u,n,!0)}return g}var rr={onPointerDown:Db,isValid:Rl};function Dl({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=Le(e);function i({translateExtent:s,width:c,height:l,zoomStep:u=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let m=h=>{if(h.sourceEvent.type!=="wheel"||!t)return;let v=n(),x=h.sourceEvent.ctrlKey&&Dn()?10:1,S=-h.sourceEvent.deltaY*(h.sourceEvent.deltaMode===1?.05:h.sourceEvent.deltaMode?1:.002)*u,C=v[2]*Math.pow(2,S*x);t.scaleTo(C)},y=[0,0],b=h=>{(h.sourceEvent.type==="mousedown"||h.sourceEvent.type==="touchstart")&&(y=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY])},g=h=>{let v=n();if(h.sourceEvent.type!=="mousemove"&&h.sourceEvent.type!=="touchmove"||!t)return;let x=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY],S=[x[0]-y[0],x[1]-y[1]];y=x;let C=o()*Math.max(v[2],Math.log(v[2]))*(p?-1:1),M={x:v[0]-S[0]*C,y:v[1]-S[1]*C},R=[[0,0],[c,l]];t.setViewportConstrained({x:M.x,y:M.y,zoom:v[2]},R,s)},k=Si().on("start",b).on("zoom",d?g:null).on("zoom.wheel",f?m:null);r.call(k,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Ge}}var ir=e=>({x:e.x,y:e.y,zoom:e.k}),Ei=({x:e,y:t,zoom:n})=>Qn.translate(e,t).scale(n),_n=(e,t)=>e.target.closest(`.${t}`),Al=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Ab=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,_i=(e,t=0,n=Ab,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},Tl=e=>{let t=e.ctrlKey&&Dn()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Tb({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:l}){return u=>{if(_n(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(u.ctrlKey&&a){let b=Ge(u),g=Tl(u),k=d*Math.pow(2,g);o.scaleTo(n,k,b,u);return}let f=u.deltaMode===1?20:1,p=r===Nt.Vertical?0:u.deltaX*f,m=r===Nt.Horizontal?0:u.deltaY*f;!Dn()&&u.shiftKey&&r!==Nt.Vertical&&(p=u.deltaY*f,m=0),o.translateBy(n,-(p/d)*i,-(m/d)*i,{internal:!0});let y=ir(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,y):(e.isPanScrolling=!0,s?.(u,y)),e.panScrollTimeout=setTimeout(()=>{l?.(u,y),e.isPanScrolling=!1},150)}}function Ob({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=_n(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function $b({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=ir(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function Lb({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&Al(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,ir(i.transform))}}function Hb({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Al(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=ir(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function Bb({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:l,connectionInProgress:u}){return d=>{let f=e||t,p=n&&d.ctrlKey,m=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(_n(d,`${l}-flow__node`)||_n(d,`${l}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||u&&!m||_n(d,s)&&m||_n(d,c)&&(!m||r&&m&&!e)||!n&&d.ctrlKey&&m)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&m||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let y=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||m)&&y}}function Ol({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),d=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(N=>{let w=N[0];w&&(d=[[0,0],[w.contentRect.width,w.contentRect.height]])}):null)?.observe(e);let p=Si().extent(()=>d).scaleExtent([t,n]).translateExtent(o),m=Le(e).call(p);v({x:r.x,y:r.y,zoom:Nn(r.zoom,t,n)},[[0,0],[u.width,u.height]],o);let y=m.on("wheel.zoom"),b=m.on("dblclick.zoom");p.wheelDelta(Tl);async function g(N,w){return m?new Promise(I=>{p?.interpolate(w?.interpolate==="linear"?vn:kn).transform(_i(m,w?.duration,w?.ease,()=>I(!0)),N)}):!1}function k({noWheelClassName:N,noPanClassName:w,onPaneContextMenu:I,userSelectionActive:_,panOnScroll:E,panOnDrag:P,panOnScrollMode:D,panOnScrollSpeed:F,preventScrolling:H,zoomOnPinch:V,zoomOnScroll:U,zoomOnDoubleClick:Y,zoomActivationKeyPressed:Q,lib:re,onTransformChange:B,connectionInProgress:A,paneClickDistance:X,selectionOnDrag:ee}){_&&!l.isZoomingOrPanning&&h();let te=E&&!Q&&!_;p.clickDistance(ee?1/0:!nt(X)||X<0?0:X);let K=te?Tb({zoomPanValues:l,noWheelClassName:N,d3Selection:m,d3Zoom:p,panOnScrollMode:D,panOnScrollSpeed:F,zoomOnPinch:V,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):Ob({noWheelClassName:N,preventScrolling:H,d3ZoomHandler:y});m.on("wheel.zoom",K,{passive:!1});let J=$b({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:a});p.on("start",J);let ie=Lb({zoomPanValues:l,panOnDrag:P,onPaneContextMenu:!!I,onPanZoom:i,onTransformChange:B});p.on("zoom",ie);let le=Hb({zoomPanValues:l,panOnDrag:P,panOnScroll:E,onPaneContextMenu:I,onPanZoomEnd:s,onDraggingChange:c});p.on("end",le);let pe=Bb({zoomActivationKeyPressed:Q,panOnDrag:P,zoomOnScroll:U,panOnScroll:E,zoomOnDoubleClick:Y,zoomOnPinch:V,userSelectionActive:_,noPanClassName:w,noWheelClassName:N,lib:re,connectionInProgress:A});p.filter(pe),Y?m.on("dblclick.zoom",b):m.on("dblclick.zoom",null)}function h(){p.on("zoom",null)}async function v(N,w,I){let _=Ei(N),E=p?.constrain()(_,w,I);return E&&await g(E),E}async function x(N,w){let I=Ei(N);return await g(I,w),I}function S(N){if(m){let w=Ei(N),I=m.property("__zoom");(I.k!==N.zoom||I.x!==N.x||I.y!==N.y)&&p?.transform(m,w,null,{sync:!0})}}function C(){let N=m?ki(m.node()):{x:0,y:0,k:1};return{x:N.x,y:N.y,zoom:N.k}}async function M(N,w){return m?new Promise(I=>{p?.interpolate(w?.interpolate==="linear"?vn:kn).scaleTo(_i(m,w?.duration,w?.ease,()=>I(!0)),N)}):!1}async function R(N,w){return m?new Promise(I=>{p?.interpolate(w?.interpolate==="linear"?vn:kn).scaleBy(_i(m,w?.duration,w?.ease,()=>I(!0)),N)}):!1}function W(N){p?.scaleExtent(N)}function z(N){p?.translateExtent(N)}function L(N){let w=!nt(N)||N<0?0:N;p?.clickDistance(w)}return{update:k,destroy:h,setViewport:x,setViewportConstrained:v,getViewport:C,scaleTo:M,scaleBy:R,setScaleExtent:W,setTranslateExtent:z,syncViewport:S,setClickDistance:L}}var Lt;(function(e){e.Line="line",e.Handle="handle"})(Lt||(Lt={}));function Wb({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function sl(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Dt(e,t){return Math.max(0,t-e)}function At(e,t){return Math.max(0,e-t)}function Xo(e,t,n){return Math.max(0,t-e,e-n)}function ll(e,t){return e?!t:t}function Fb(e,t,n,o,r,i,a,s){let{affectsX:c,affectsY:l}=t,{isHorizontal:u,isVertical:d}=t,f=u&&d,{xSnapped:p,ySnapped:m}=n,{minWidth:y,maxWidth:b,minHeight:g,maxHeight:k}=o,{x:h,y:v,width:x,height:S,aspectRatio:C}=e,M=Math.floor(u?p-e.pointerX:0),R=Math.floor(d?m-e.pointerY:0),W=x+(c?-M:M),z=S+(l?-R:R),L=-i[0]*x,N=-i[1]*S,w=Xo(W,y,b),I=Xo(z,g,k);if(a){let P=0,D=0;c&&M<0?P=Dt(h+M+L,a[0][0]):!c&&M>0&&(P=At(h+W+L,a[1][0])),l&&R<0?D=Dt(v+R+N,a[0][1]):!l&&R>0&&(D=At(v+z+N,a[1][1])),w=Math.max(w,P),I=Math.max(I,D)}if(s){let P=0,D=0;c&&M>0?P=At(h+M,s[0][0]):!c&&M<0&&(P=Dt(h+W,s[1][0])),l&&R>0?D=At(v+R,s[0][1]):!l&&R<0&&(D=Dt(v+z,s[1][1])),w=Math.max(w,P),I=Math.max(I,D)}if(r){if(u){let P=Xo(W/C,g,k)*C;if(w=Math.max(w,P),a){let D=0;!c&&!l||c&&!l&&f?D=At(v+N+W/C,a[1][1])*C:D=Dt(v+N+(c?M:-M)/C,a[0][1])*C,w=Math.max(w,D)}if(s){let D=0;!c&&!l||c&&!l&&f?D=Dt(v+W/C,s[1][1])*C:D=At(v+(c?M:-M)/C,s[0][1])*C,w=Math.max(w,D)}}if(d){let P=Xo(z*C,y,b)/C;if(I=Math.max(I,P),a){let D=0;!c&&!l||l&&!c&&f?D=At(h+z*C+L,a[1][0])/C:D=Dt(h+(l?R:-R)*C+L,a[0][0])/C,I=Math.max(I,D)}if(s){let D=0;!c&&!l||l&&!c&&f?D=Dt(h+z*C,s[1][0])/C:D=At(h+(l?R:-R)*C,s[0][0])/C,I=Math.max(I,D)}}}R=R+(R<0?I:-I),M=M+(M<0?w:-w),r&&(f?W>z*C?R=(ll(c,l)?-M:M)/C:M=(ll(c,l)?-R:R)*C:u?(R=M/C,l=c):(M=R*C,c=l));let _=c?h+M:h,E=l?v+R:v;return{width:x+(c?-M:M),height:S+(l?-R:R),x:i[0]*M*(c?-1:1)+_,y:i[1]*R*(l?-1:1)+E}}var $l={width:0,height:0,x:0,y:0},Vb={...$l,pointerX:0,pointerY:0,aspectRatio:1};function Gb(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[o-s,r-c],[o+i-s,r+a-c]]}function Ll({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=Le(e),a={controlDirection:sl("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:l,boundaries:u,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:m,onResizeEnd:y,shouldResize:b}){let g={...$l},k={...Vb};a={boundaries:u,resizeDirection:f,keepAspectRatio:d,controlDirection:sl(l)};let h,v=null,x=[],S,C,M,R=!1,W=Kr().on("start",z=>{let{nodeLookup:L,transform:N,snapGrid:w,snapToGrid:I,nodeOrigin:_,paneDomNode:E}=n();if(h=L.get(t),!h)return;v=E?.getBoundingClientRect()??null;let{xSnapped:P,ySnapped:D}=Jn(z.sourceEvent,{transform:N,snapGrid:w,snapToGrid:I,containerBounds:v});g={width:h.measured.width??0,height:h.measured.height??0,x:h.position.x??0,y:h.position.y??0},k={...g,pointerX:P,pointerY:D,aspectRatio:g.width/g.height},S=void 0,C=on(h.extent)?h.extent:void 0,h.parentId&&(h.extent==="parent"||h.expandParent)&&(S=L.get(h.parentId)),S&&h.extent==="parent"&&(C=[[0,0],[S.measured.width,S.measured.height]]),x=[],M=void 0;for(let[F,H]of L)if(H.parentId===t&&(x.push({id:F,position:{...H.position},extent:H.extent}),H.extent==="parent"||H.expandParent)){let V=Gb(H,h,H.origin??_);M?M=[[Math.min(V[0][0],M[0][0]),Math.min(V[0][1],M[0][1])],[Math.max(V[1][0],M[1][0]),Math.max(V[1][1],M[1][1])]]:M=V}p?.(z,{...g})}).on("drag",z=>{let{transform:L,snapGrid:N,snapToGrid:w,nodeOrigin:I}=n(),_=Jn(z.sourceEvent,{transform:L,snapGrid:N,snapToGrid:w,containerBounds:v}),E=[];if(!h)return;let{x:P,y:D,width:F,height:H}=g,V={},U=h.origin??I,{width:Y,height:Q,x:re,y:B}=Fb(k,a.controlDirection,_,a.boundaries,a.keepAspectRatio,U,C,M),A=Y!==F,X=Q!==H,ee=re!==P&&A,te=B!==D&&X;if(!ee&&!te&&!A&&!X)return;if((ee||te||U[0]===1||U[1]===1)&&(V.x=ee?re:g.x,V.y=te?B:g.y,g.x=V.x,g.y=V.y,x.length>0)){let le=re-P,pe=B-D;for(let Oe of x)Oe.position={x:Oe.position.x-le+U[0]*(Y-F),y:Oe.position.y-pe+U[1]*(Q-H)},E.push(Oe)}if((A||X)&&(V.width=A&&(!a.resizeDirection||a.resizeDirection==="horizontal")?Y:g.width,V.height=X&&(!a.resizeDirection||a.resizeDirection==="vertical")?Q:g.height,g.width=V.width,g.height=V.height),S&&h.expandParent){let le=U[0]*(V.width??0);V.x&&V.x<le&&(g.x=le,k.x=k.x-(V.x-le));let pe=U[1]*(V.height??0);V.y&&V.y<pe&&(g.y=pe,k.y=k.y-(V.y-pe))}let K=Wb({width:g.width,prevWidth:F,height:g.height,prevHeight:H,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),J={...g,direction:K};b?.(z,J)!==!1&&(R=!0,m?.(z,J),o(V,E))}).on("end",z=>{R&&(y?.(z,{...g}),r?.({...g}),R=!1)});i.call(W)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var jl=Ga(require("react"),1),Ql=Ga(Yl(),1);var Ul={},ql=e=>{let t,n=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(Ul.env?Ul.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},Zl=e=>e?ql(e):ql;var{useDebugValue:l0}=jl.default,{useSyncExternalStoreWithSelector:c0}=Ql.default,u0=e=>e;function Qi(e,t=u0,n){let o=c0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return l0(o),o}var Kl=(e,t)=>{let n=Zl(e),o=(r,i=t)=>Qi(n,r,i);return Object.assign(o,n),o},Jl=(e,t)=>e?Kl(e,t):Kl;function xe(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var d0=require("react-dom"),ur=(0,O.createContext)(null),f0=ur.Provider,_c=je.error001("react");function ue(e,t){let n=(0,O.useContext)(ur);if(n===null)throw new Error(_c);return Qi(n,e,t)}function he(){let e=(0,O.useContext)(ur);if(e===null)throw new Error(_c);return(0,O.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var ec={display:"none"},p0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Nc="react-flow__node-desc",Mc="react-flow__edge-desc",m0="react-flow__aria-live",g0=e=>e.ariaLiveMessage,h0=e=>e.ariaLabelConfig;function b0({rfId:e}){let t=ue(g0);return(0,$.jsx)("div",{id:`${m0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:p0,children:t})}function y0({rfId:e,disableKeyboardA11y:t}){let n=ue(h0);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("div",{id:`${Nc}-${e}`,style:ec,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,$.jsx)("div",{id:`${Mc}-${e}`,style:ec,children:n["edge.a11yDescription.default"]}),!t&&(0,$.jsx)(b0,{rfId:e})]})}var dr=(0,O.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,$.jsx)("div",{className:Se(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});dr.displayName="Panel";var tc="https://reactflow.dev?utm_source=attribution";function x0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,$.jsx)(dr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${tc}`,children:(0,$.jsx)("a",{href:tc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var w0=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},sr=e=>e.id;function v0(e,t){return xe(e.selectedNodes.map(sr),t.selectedNodes.map(sr))&&xe(e.selectedEdges.map(sr),t.selectedEdges.map(sr))}function k0({onSelectionChange:e}){let t=he(),{selectedNodes:n,selectedEdges:o}=ue(w0,v0);return(0,O.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var S0=e=>!!e.onSelectionChangeHandlers;function C0({onSelectionChange:e}){let t=ue(S0);return e||t?(0,$.jsx)(k0,{onSelectionChange:e}):null}var Ic=[0,0],E0={x:0,y:0,zoom:1},_0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],nc=[..._0,"rfId"],N0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),oc={translateExtent:Mn,nodeOrigin:Ic,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function M0(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=ue(N0,xe),l=he();(0,O.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=oc,s()}),[]);let u=(0,O.useRef)(oc);return(0,O.useEffect)(()=>{for(let d of nc){let f=e[d],p=u.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?l.setState({ariaLabelConfig:hl(f)}):d==="fitView"?l.setState({fitViewQueued:f}):d==="fitViewOptions"?l.setState({fitViewOptions:f}):l.setState({[d]:f})))}u.current=e},nc.map(d=>e[d])),null}function rc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function I0(e){let[t,n]=(0,O.useState)(e==="system"?null:e);return(0,O.useEffect)(()=>{if(e!=="system"){n(e);return}let o=rc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:rc()?.matches?"dark":"light"}var ic=typeof document<"u"?document:null;function ro(e=null,t={target:ic,actInsideInputWithModifier:!0}){let[n,o]=(0,O.useState)(!1),r=(0,O.useRef)(!1),i=(0,O.useRef)(new Set([])),[a,s]=(0,O.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),u=l.reduce((d,f)=>d.concat(...f),[]);return[l,u]}return[[],[]]},[e]);return(0,O.useEffect)(()=>{let c=t?.target??ic,l=t?.actInsideInputWithModifier??!0;if(e!==null){let u=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&Vi(p))return!1;let y=sc(p.code,s);if(i.current.add(p[y]),ac(a,i.current,!1)){let b=p.composedPath?.()?.[0]||p.target,g=b?.nodeName==="BUTTON"||b?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},d=p=>{let m=sc(p.code,s);ac(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[m]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",u),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",u),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function ac(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function sc(e,t){return t.includes(e)?"code":"key"}var P0=()=>{let e=he();return(0,O.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=no(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),l={x:t.x-s,y:t.y-c},u=n.snapGrid??r,d=n.snapToGrid??i;return Rn(l,o,d,u)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=nn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function Pc(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)z0(c,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function z0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function zc(e,t){return Pc(e,t)}function Rc(e,t){return Pc(e,t)}function rn(e,t){return{id:e,type:"select",selected:t}}function Tn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(rn(i.id,a)))}return o}function lc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function cc(e){return{id:e.id,type:"remove"}}var R0=Li("React Flow","https://reactflow.dev/");function D0(e,t,n={}){return xl(e,t,{...n,onError:n.onError??R0})}var uc=e=>cl(e),A0=e=>Ri(e);function Dc(e){return(0,O.forwardRef)(e)}var Ac=typeof window<"u"?O.useLayoutEffect:O.useEffect;function dc(e){let[t,n]=(0,O.useState)(BigInt(0)),[o]=(0,O.useState)(()=>T0(()=>n(r=>r+BigInt(1))));return Ac(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function T0(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Tc=(0,O.createContext)(null);function O0({children:e}){let t=he(),n=(0,O.useCallback)(s=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:u,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:m}=t.getState(),y=c;for(let g of s)y=typeof g=="function"?g(y):g;let b=lc({items:y,lookup:f});for(let g of m.values())b=g(b);u&&l(y),b.length>0?d?.(b):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:k,setNodes:h}=t.getState();g&&h(k)})},[]),o=dc(n),r=(0,O.useCallback)(s=>{let{edges:c=[],setEdges:l,hasDefaultEdges:u,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let m of s)p=typeof m=="function"?m(p):m;u?l(p):d&&d(lc({items:p,lookup:f}))},[]),i=dc(r),a=(0,O.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,$.jsx)(Tc.Provider,{value:a,children:e})}function $0(){let e=(0,O.useContext)(Tc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var L0=e=>!!e.panZoom;function na(){let e=P0(),t=he(),n=$0(),o=ue(L0),r=(0,O.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),m=uc(d)?d:f.get(d.id),y=m.parentId?Bi(m.position,m.measured,m.parentId,f,p):m.position,b={...m,position:y,width:m.measured?.width??m.width,height:m.measured?.height??m.height};return Pn(b)},l=(d,f,p={replace:!1})=>{a(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&uc(b)?b:{...y,...b}}return y}))},u=(d,f,p={replace:!1})=>{s(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&A0(b)?b:{...y,...b}}return y}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[m,y,b]=p;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:m,y,zoom:b}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:m,onNodesDelete:y,onEdgesDelete:b,triggerNodeChanges:g,triggerEdgeChanges:k,onDelete:h,onBeforeDelete:v}=t.getState(),{nodes:x,edges:S}=await fl({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:m,onBeforeDelete:v}),C=S.length>0,M=x.length>0;if(C){let R=S.map(cc);b?.(S),k(R)}if(M){let R=x.map(cc);y?.(x),g(R)}return(M||C)&&h?.({nodes:x,edges:S}),{deletedNodes:x,deletedEdges:S}},getIntersectingNodes:(d,f=!0,p)=>{let m=$i(d),y=m?d:c(d),b=p!==void 0;return y?(p||t.getState().nodes).filter(g=>{let k=t.getState().nodeLookup.get(g.id);if(k&&!m&&(g.id===d.id||!k.internals.positionAbsolute))return!1;let h=Pn(b?g:k),v=to(h,y);return f&&v>0||v>=h.width*h.height||v>=y.width*y.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let y=$i(d)?d:c(d);if(!y)return!1;let b=to(y,f);return p&&b>0||b>=f.width*f.height||b>=y.width*y.height},updateNode:l,updateNodeData:(d,f,p={replace:!1})=>{l(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},updateEdge:u,updateEdgeData:(d,f,p={replace:!1})=>{u(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return Ai(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??gl();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,O.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var fc=e=>e.selected,H0=typeof window<"u"?window:void 0;function B0({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=he(),{deleteElements:o}=na(),r=ro(e,{actInsideInputWithModifier:!1}),i=ro(t,{target:H0});(0,O.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(fc),edges:a.filter(fc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,O.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function W0(e){let t=he();(0,O.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=jo(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",je.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var fr={position:"absolute",width:"100%",height:"100%",top:0,left:0},F0=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function V0({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=Nt.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:l,minZoom:u,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:m,noWheelClassName:y,noPanClassName:b,onViewportChange:g,isControlledViewport:k,paneClickDistance:h,selectionOnDrag:v}){let x=he(),S=(0,O.useRef)(null),{userSelectionActive:C,lib:M,connectionInProgress:R}=ue(F0,xe),W=ro(f),z=(0,O.useRef)();W0(S);let L=(0,O.useCallback)(N=>{g?.({x:N[0],y:N[1],zoom:N[2]}),k||x.setState({transform:N})},[g,k]);return(0,O.useEffect)(()=>{if(S.current){z.current=Ol({domNode:S.current,minZoom:u,maxZoom:d,translateExtent:l,viewport:c,onDraggingChange:_=>x.setState(E=>E.paneDragging===_?E:{paneDragging:_}),onPanZoomStart:(_,E)=>{let{onViewportChangeStart:P,onMoveStart:D}=x.getState();D?.(_,E),P?.(E)},onPanZoom:(_,E)=>{let{onViewportChange:P,onMove:D}=x.getState();D?.(_,E),P?.(E)},onPanZoomEnd:(_,E)=>{let{onViewportChangeEnd:P,onMoveEnd:D}=x.getState();D?.(_,E),P?.(E)}});let{x:N,y:w,zoom:I}=z.current.getViewport();return x.setState({panZoom:z.current,transform:[N,w,I],domNode:S.current.closest(".react-flow")}),()=>{z.current?.destroy()}}},[]),(0,O.useEffect)(()=>{z.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:W,preventScrolling:p,noPanClassName:b,userSelectionActive:C,noWheelClassName:y,lib:M,onTransformChange:L,connectionInProgress:R,selectionOnDrag:v,paneClickDistance:h})},[e,t,n,o,r,i,a,s,W,p,b,C,y,M,L,R,v,h]),(0,$.jsx)("div",{className:"react-flow__renderer",ref:S,style:fr,children:m})}var G0=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function X0(){let{userSelectionActive:e,userSelectionRect:t}=ue(G0,xe);return e&&t?(0,$.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Ji=(e,t)=>n=>{n.target===t.current&&e?.(n)},Y0=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function q0({isSelecting:e,selectionKeyPressed:t,selectionMode:n=en.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:m,children:y}){let b=(0,O.useRef)(0),g=he(),{userSelectionActive:k,elementsSelectable:h,dragging:v,panBy:x,autoPanSpeed:S}=ue(Y0,xe),C=h&&(e||k),M=(0,O.useRef)(null),R=(0,O.useRef)(),W=(0,O.useRef)(new Set),z=(0,O.useRef)(new Set),L=(0,O.useRef)(!1),N=(0,O.useRef)(!1),w=(0,O.useRef)({x:0,y:0}),I=(0,O.useRef)(!1),_=A=>{if(N.current||L.current||g.getState().connection.inProgress){N.current=!1,L.current=!1;return}l?.(A),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},E=A=>{if(Array.isArray(o)&&o?.includes(2)){A.preventDefault();return}u?.(A)},P=d?A=>d(A):void 0,D=A=>{N.current&&(A.stopPropagation(),N.current=!1)},F=A=>{let{domNode:X,transform:ee}=g.getState();if(R.current=X?.getBoundingClientRect(),!R.current)return;let te=A.target===M.current;if(!te&&!!A.target.closest(".nokey")||!e||!(a&&te||t)||A.button!==0||!A.isPrimary)return;A.target?.setPointerCapture?.(A.pointerId),N.current=!1;let{x:ie,y:le}=ot(A.nativeEvent,R.current),pe=Rn({x:ie,y:le},ee);g.setState({userSelectionRect:{width:0,height:0,startX:pe.x,startY:pe.y,x:ie,y:le}}),te||(A.stopPropagation(),A.preventDefault())};function H(A,X){let{userSelectionRect:ee}=g.getState();if(!ee)return;let{transform:te,nodeLookup:K,edgeLookup:J,connectionLookup:ie,triggerNodeChanges:le,triggerEdgeChanges:pe,defaultEdgeOptions:Oe}=g.getState(),ce={x:ee.startX,y:ee.startY},{x:et,y:$e}=nn(ce,te),it={startX:ce.x,startY:ce.y,x:A<et?A:et,y:X<$e?X:$e,width:Math.abs(A-et),height:Math.abs(X-$e)},wt=W.current,ft=z.current;W.current=new Set(qo(K,it,te,n===en.Partial,!0).map(Fe=>Fe.id)),z.current=new Set;let at=Oe?.selectable??!0;for(let Fe of W.current){let Ve=ie.get(Fe);if(Ve)for(let{edgeId:tt}of Ve.values()){let ke=J.get(tt);ke&&(ke.selectable??at)&&z.current.add(tt)}}if(!Wi(wt,W.current)){let Fe=Tn(K,W.current,!0);le(Fe)}if(!Wi(ft,z.current)){let Fe=Tn(J,z.current);pe(Fe)}g.setState({userSelectionRect:it,userSelectionActive:!0,nodesSelectionActive:!1})}function V(){if(!r||!R.current)return;let[A,X]=Uo(w.current,R.current,S);x({x:A,y:X}).then(ee=>{if(!N.current||!ee){b.current=requestAnimationFrame(V);return}let{x:te,y:K}=w.current;H(te,K),b.current=requestAnimationFrame(V)})}let U=()=>{cancelAnimationFrame(b.current),b.current=0,I.current=!1};(0,O.useEffect)(()=>()=>U(),[]);let Y=A=>{let{userSelectionRect:X,transform:ee,resetSelectedElements:te}=g.getState();if(!R.current||!X)return;let{x:K,y:J}=ot(A.nativeEvent,R.current);w.current={x:K,y:J};let ie=nn({x:X.startX,y:X.startY},ee);if(!N.current){let le=t?0:i;if(Math.hypot(K-ie.x,J-ie.y)<=le)return;te(),s?.(A)}N.current=!0,I.current||(V(),I.current=!0),H(K,J)},Q=A=>{if(!C){A.target===M.current&&g.getState().connection.inProgress&&(L.current=!0);return}A.button===0&&(A.target?.releasePointerCapture?.(A.pointerId),!k&&A.target===M.current&&g.getState().userSelectionRect&&_?.(A),g.setState({userSelectionActive:!1,userSelectionRect:null}),N.current&&(c?.(A),g.setState({nodesSelectionActive:W.current.size>0})),U())},re=A=>{A.target?.releasePointerCapture?.(A.pointerId),U()},B=o===!0||Array.isArray(o)&&o.includes(0);return(0,$.jsxs)("div",{className:Se(["react-flow__pane",{draggable:B,dragging:v,selection:e}]),onClick:C?void 0:Ji(_,M),onContextMenu:Ji(E,M),onWheel:Ji(P,M),onPointerEnter:C?void 0:f,onPointerMove:C?Y:p,onPointerUp:Q,onPointerCancel:C?re:void 0,onPointerDownCapture:C?F:void 0,onClickCapture:C?D:void 0,onPointerLeave:m,ref:M,style:fr,children:[y,(0,$.jsx)(X0,{})]})}function ta({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),l=s.get(e);if(!l){c?.("012",je.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&a)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Oc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=he(),[c,l]=(0,O.useState)(!1),u=(0,O.useRef)();return(0,O.useEffect)(()=>{if(!t)return u.current=Ml({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{ta({id:d,store:s,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,s,e]),(0,O.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),c}var U0=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function $c(){let e=he();return(0,O.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:l,nodeOrigin:u}=e.getState(),d=new Map,f=U0(a),p=r?i[0]:5,m=r?i[1]:5,y=n.direction.x*p*n.factor,b=n.direction.y*m*n.factor;for(let[,g]of l){if(!f(g))continue;let k={x:g.internals.positionAbsolute.x+y,y:g.internals.positionAbsolute.y+b};r&&(k=zn(k,i));let{position:h,positionAbsolute:v}=Ti({nodeId:g.id,nextPosition:k,nodeLookup:l,nodeExtent:o,nodeOrigin:u,onError:s});g.position=h,g.internals.positionAbsolute=v,d.set(g.id,g)}c(d)},[])}var oa=(0,O.createContext)(null),Z0=oa.Provider;oa.Consumer;var Lc=()=>(0,O.useContext)(oa),K0=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Hc=(0,O.createContext)(null);function j0({children:e}){let t=ue(K0,xe);return(0,$.jsx)(Hc.Provider,{value:t,children:e})}function Q0(){let e=(0,O.useContext)(Hc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var J0={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},ey=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:c,isValid:l}=a;if(!s&&!r)return J0;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:u,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Tt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:u&&l}};function ty({type:e="source",position:t=j.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:l,onMouseDown:u,onTouchStart:d,...f},p){let m=a||null,y=e==="target",b=he(),g=Lc(),{connectOnClick:k,noPanClassName:h,rfId:v}=Q0(),{connectingFrom:x,connectingTo:S,clickConnecting:C,isPossibleEndHandle:M,connectionInProcess:R,clickConnectionInProcess:W,valid:z}=ue(ey(g,m,e),xe);g||b.getState().onError?.("010",je.error010());let L=I=>{let{defaultEdgeOptions:_,onConnect:E,hasDefaultEdges:P}=b.getState(),D={..._,...I};if(P){let{edges:F,setEdges:H,onError:V}=b.getState();H(D0(D,F,{onError:V}))}E?.(D),s?.(D)},N=I=>{if(!g)return;let _=Gi(I.nativeEvent);if(r&&(_&&I.button===0||!_)){let E=b.getState();rr.onPointerDown(I.nativeEvent,{handleDomNode:I.currentTarget,autoPanOnConnect:E.autoPanOnConnect,connectionMode:E.connectionMode,connectionRadius:E.connectionRadius,domNode:E.domNode,nodeLookup:E.nodeLookup,lib:E.lib,isTarget:y,handleId:m,nodeId:g,flowId:E.rfId,panBy:E.panBy,cancelConnection:E.cancelConnection,onConnectStart:E.onConnectStart,onConnectEnd:(...P)=>b.getState().onConnectEnd?.(...P),updateConnection:E.updateConnection,onConnect:L,isValidConnection:n||((...P)=>b.getState().isValidConnection?.(...P)??!0),getTransform:()=>b.getState().transform,getFromHandle:()=>b.getState().connection.fromHandle,autoPanSpeed:E.autoPanSpeed,dragThreshold:E.connectionDragThreshold})}_?u?.(I):d?.(I)},w=I=>{let{onClickConnectStart:_,onClickConnectEnd:E,connectionClickStartHandle:P,connectionMode:D,isValidConnection:F,lib:H,rfId:V,nodeLookup:U,connection:Y}=b.getState();if(!g||!P&&!r)return;if(!P){_?.(I.nativeEvent,{nodeId:g,handleId:m,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:g,type:e,id:m}});return}let Q=Fi(I.target),re=n||F,{connection:B,isValid:A}=rr.isValid(I.nativeEvent,{handle:{nodeId:g,id:m,type:e},connectionMode:D,fromNodeId:P.nodeId,fromHandleId:P.id||null,fromType:P.type,isValidConnection:re,flowId:V,doc:Q,lib:H,nodeLookup:U});A&&B&&L(B);let X=structuredClone(Y);delete X.inProgress,X.toPosition=X.toHandle?X.toHandle.position:null,E?.(I,X),b.setState({connectionClickStartHandle:null})};return(0,$.jsx)("div",{"data-handleid":m,"data-nodeid":g,"data-handlepos":t,"data-id":`${v}-${g}-${m}-${e}`,className:Se(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",h,l,{source:!y,target:y,connectable:o,connectablestart:r,connectableend:i,clickconnecting:C,connectingfrom:x,connectingto:S,valid:z,connectionindicator:o&&(!R||M)&&(R||W?i:r)}]),onMouseDown:N,onTouchStart:N,onClick:k?w:void 0,ref:p,...f,children:c})}var an=(0,O.memo)(Dc(ty));function ny({data:e,isConnectable:t,sourcePosition:n=j.Bottom}){return(0,$.jsxs)($.Fragment,{children:[e?.label,(0,$.jsx)(an,{type:"source",position:n,isConnectable:t})]})}function oy({data:e,isConnectable:t,targetPosition:n=j.Top,sourcePosition:o=j.Bottom}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(an,{type:"target",position:n,isConnectable:t}),e?.label,(0,$.jsx)(an,{type:"source",position:o,isConnectable:t})]})}function ry(){return null}function iy({data:e,isConnectable:t,targetPosition:n=j.Top}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(an,{type:"target",position:n,isConnectable:t}),e?.label]})}var cr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},pc={input:ny,default:oy,output:iy,group:ry};function ay(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var sy=e=>{let{width:t,height:n,x:o,y:r}=In(e.nodeLookup,{filter:i=>!!i.selected});return{width:nt(t)?t:null,height:nt(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function ly({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=he(),{width:r,height:i,transformString:a,userSelectionActive:s}=ue(sy,xe),c=$c(),l=(0,O.useRef)(null);(0,O.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let u=!s&&r!==null&&i!==null;if(Oc({nodeRef:l,disabled:!u}),!u)return null;let d=e?p=>{let m=o.getState().nodes.filter(y=>y.selected);e(p,m)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(cr,p.key)&&(p.preventDefault(),c({direction:cr[p.key],factor:p.shiftKey?4:1}))};return(0,$.jsx)("div",{className:Se(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,$.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var mc=typeof window<"u"?window:void 0,cy=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Bc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:u,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:m,panActivationKeyCode:y,zoomActivationKeyCode:b,elementsSelectable:g,zoomOnScroll:k,zoomOnPinch:h,panOnScroll:v,panOnScrollSpeed:x,panOnScrollMode:S,zoomOnDoubleClick:C,panOnDrag:M,autoPanOnSelection:R,defaultViewport:W,translateExtent:z,minZoom:L,maxZoom:N,preventScrolling:w,onSelectionContextMenu:I,noWheelClassName:_,noPanClassName:E,disableKeyboardA11y:P,onViewportChange:D,isControlledViewport:F}){let{nodesSelectionActive:H,userSelectionActive:V}=ue(cy,xe),U=ro(l,{target:mc}),Y=ro(y,{target:mc}),Q=Y||M,re=Y||v,B=u&&Q!==!0,A=U||V||B;return B0({deleteKeyCode:c,multiSelectionKeyCode:m}),(0,$.jsx)(V0,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:k,zoomOnPinch:h,panOnScroll:re,panOnScrollSpeed:x,panOnScrollMode:S,zoomOnDoubleClick:C,panOnDrag:!U&&Q,defaultViewport:W,translateExtent:z,minZoom:L,maxZoom:N,zoomActivationKeyCode:b,preventScrolling:w,noWheelClassName:_,noPanClassName:E,onViewportChange:D,isControlledViewport:F,paneClickDistance:s,selectionOnDrag:B,children:(0,$.jsxs)(q0,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:Q,autoPanOnSelection:R,isSelecting:!!A,selectionMode:d,selectionKeyPressed:U,paneClickDistance:s,selectionOnDrag:B,children:[e,H&&(0,$.jsx)(ly,{onSelectionContextMenu:I,noPanClassName:E,disableKeyboardA11y:P})]})})}Bc.displayName="FlowRenderer";var uy=(0,O.memo)(Bc),dy=e=>t=>e?qo(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function fy(e){return ue((0,O.useCallback)(dy(e),[e]),xe)}var py=e=>e.updateNodeInternals;function my(){let e=ue(py),[t]=(0,O.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,O.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function gy({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=he(),i=(0,O.useRef)(null),a=(0,O.useRef)(null),s=(0,O.useRef)(e.sourcePosition),c=(0,O.useRef)(e.targetPosition),l=(0,O.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,O.useEffect)(()=>{i.current&&!e.hidden&&(!u||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[u,e.hidden]),(0,O.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,O.useEffect)(()=>{if(i.current){let d=l.current!==t,f=s.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(l.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function hy({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:l,nodesFocusable:u,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:m,rfId:y,nodeTypes:b,nodeClickDistance:g,onError:k}){let{node:h,internals:v,isParent:x}=ue(A=>{let X=A.nodeLookup.get(e),ee=A.parentLookup.has(e);return{node:X,internals:X.internals,isParent:ee}},xe),S=h.type||"default",C=b?.[S]||pc[S];C===void 0&&(k?.("003",je.error003(S)),S="default",C=b?.default||pc.default);let M=!!(h.draggable||s&&typeof h.draggable>"u"),R=!!(h.selectable||c&&typeof h.selectable>"u"),W=!!(h.connectable||l&&typeof h.connectable>"u"),z=!!(h.focusable||u&&typeof h.focusable>"u"),L=he(),N=Hi(h),w=gy({node:h,nodeType:S,hasDimensions:N,resizeObserver:d}),I=Oc({nodeRef:w,disabled:h.hidden||!M,noDragClassName:f,handleSelector:h.dragHandle,nodeId:e,isSelectable:R,nodeClickDistance:g}),_=$c();if(h.hidden)return null;let E=ut(h),P=ay(h),D=R||M||t||n||o||r,F=n?A=>n(A,{...v.userNode}):void 0,H=o?A=>o(A,{...v.userNode}):void 0,V=r?A=>r(A,{...v.userNode}):void 0,U=i?A=>i(A,{...v.userNode}):void 0,Y=a?A=>a(A,{...v.userNode}):void 0,Q=A=>{let{selectNodesOnDrag:X,nodeDragThreshold:ee}=L.getState();R&&(!X||!M||ee>0)&&ta({id:e,store:L,nodeRef:w}),t&&t(A,{...v.userNode})},re=A=>{if(!(Vi(A.nativeEvent)||m)){if(Mi.includes(A.key)&&R){let X=A.key==="Escape";ta({id:e,store:L,unselect:X,nodeRef:w})}else if(M&&h.selected&&Object.prototype.hasOwnProperty.call(cr,A.key)){A.preventDefault();let{ariaLabelConfig:X}=L.getState();L.setState({ariaLiveMessage:X["node.a11yDescription.ariaLiveMessage"]({direction:A.key.replace("Arrow","").toLowerCase(),x:~~v.positionAbsolute.x,y:~~v.positionAbsolute.y})}),_({direction:cr[A.key],factor:A.shiftKey?4:1})}}},B=()=>{if(m||!w.current?.matches(":focus-visible"))return;let{transform:A,width:X,height:ee,autoPanOnNodeFocus:te,setCenter:K}=L.getState();if(!te)return;qo(new Map([[e,h]]),{x:0,y:0,width:X,height:ee},A,!0).length>0||K(h.position.x+E.width/2,h.position.y+E.height/2,{zoom:A[2]})};return(0,$.jsx)("div",{className:Se(["react-flow__node",`react-flow__node-${S}`,{[p]:M},h.className,{selected:h.selected,selectable:R,parent:x,draggable:M,dragging:I}]),ref:w,style:{zIndex:v.z,transform:`translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:N?"visible":"hidden",...h.style,...P},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:F,onMouseMove:H,onMouseLeave:V,onContextMenu:U,onClick:Q,onDoubleClick:Y,onKeyDown:z?re:void 0,tabIndex:z?0:void 0,onFocus:z?B:void 0,role:h.ariaRole??(z?"group":void 0),"aria-roledescription":"node","aria-describedby":m?void 0:`${Nc}-${y}`,"aria-label":h.ariaLabel,...h.domAttributes,children:(0,$.jsx)(Z0,{value:e,children:(0,$.jsx)(C,{id:e,data:h.data,type:S,positionAbsoluteX:v.positionAbsolute.x,positionAbsoluteY:v.positionAbsolute.y,selected:h.selected??!1,selectable:R,draggable:M,deletable:h.deletable??!0,isConnectable:W,sourcePosition:h.sourcePosition,targetPosition:h.targetPosition,dragging:I,dragHandle:h.dragHandle,zIndex:v.z,parentId:h.parentId,...E})})})}var by=(0,O.memo)(hy),yy=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Wc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=ue(yy,xe),i=fy(e.onlyRenderVisibleElements),a=my();return(0,$.jsx)("div",{className:"react-flow__nodes",style:fr,children:i.map(s=>(0,$.jsx)(by,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}Wc.displayName="NodeRenderer";var xy=(0,O.memo)(Wc);function wy(e){return ue((0,O.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&yl({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),xe)}var vy=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,$.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},ky=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,$.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},gc={[Ot.Arrow]:vy,[Ot.ArrowClosed]:ky};function Sy(e){let t=he();return(0,O.useMemo)(()=>Object.prototype.hasOwnProperty.call(gc,e)?gc[e]:(t.getState().onError?.("009",je.error009(e)),null),[e])}var Cy=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=Sy(t);return c?(0,$.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,$.jsx)(c,{color:n,strokeWidth:a})}):null},Fc=({defaultColor:e,rfId:t})=>{let n=ue(i=>i.edges),o=ue(i=>i.defaultEdgeOptions),r=(0,O.useMemo)(()=>vl(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,$.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,$.jsx)("defs",{children:r.map(i=>(0,$.jsx)(Cy,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Fc.displayName="MarkerDefinitions";var Ey=(0,O.memo)(Fc);function Vc({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:l,...u}){let[d,f]=(0,O.useState)({x:1,y:0,width:0,height:0}),p=Se(["react-flow__edge-textwrapper",l]),m=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(m.current){let y=m.current.getBBox();f({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,$.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...u,children:[r&&(0,$.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,$.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:m,style:o,children:n}),c]}):null}Vc.displayName="EdgeText";var _y=(0,O.memo)(Vc);function pr({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:l=20,...u}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("path",{...u,d:e,fill:"none",className:Se(["react-flow__edge-path",u.className])}),l?(0,$.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&nt(t)&&nt(n)?(0,$.jsx)(_y,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function hc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===j.Left||e===j.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Gc({sourceX:e,sourceY:t,sourcePosition:n=j.Bottom,targetX:o,targetY:r,targetPosition:i=j.Top}){let[a,s]=hc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=hc({pos:i,x1:o,y1:r,x2:e,y2:t}),[u,d,f,p]=Qo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:l});return[`M${e},${t} C${a},${s} ${c},${l} ${o},${r}`,u,d,f,p]}function Xc(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})=>{let[k,h,v]=Gc({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),x=e.isInternal?void 0:t;return(0,$.jsx)(pr,{id:x,path:k,labelX:h,labelY:v,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})})}var Ny=Xc({isInternal:!1}),Yc=Xc({isInternal:!0});Ny.displayName="SimpleBezierEdge";Yc.displayName="SimpleBezierEdgeInternal";function qc(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,sourcePosition:p=j.Bottom,targetPosition:m=j.Top,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:k})=>{let[h,v,x]=oo({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:m,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),S=e.isInternal?void 0:t;return(0,$.jsx)(pr,{id:S,path:h,labelX:v,labelY:x,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:y,markerStart:b,interactionWidth:k})})}var Uc=qc({isInternal:!1}),Zc=qc({isInternal:!0});Uc.displayName="SmoothStepEdge";Zc.displayName="SmoothStepEdgeInternal";function Kc(e){return(0,O.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,$.jsx)(Uc,{...n,id:o,pathOptions:(0,O.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var My=Kc({isInternal:!1}),jc=Kc({isInternal:!0});My.displayName="StepEdge";jc.displayName="StepEdgeInternal";function Qc(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})=>{let[b,g,k]=er({sourceX:n,sourceY:o,targetX:r,targetY:i}),h=e.isInternal?void 0:t;return(0,$.jsx)(pr,{id:h,path:b,labelX:g,labelY:k,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})})}var Iy=Qc({isInternal:!1}),Jc=Qc({isInternal:!0});Iy.displayName="StraightEdge";Jc.displayName="StraightEdgeInternal";function eu(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=j.Bottom,targetPosition:s=j.Top,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:k})=>{let[h,v,x]=Jo({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:g?.curvature}),S=e.isInternal?void 0:t;return(0,$.jsx)(pr,{id:S,path:h,labelX:v,labelY:x,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:k})})}var Py=eu({isInternal:!1}),tu=eu({isInternal:!0});Py.displayName="BezierEdge";tu.displayName="BezierEdgeInternal";var bc={default:tu,straight:Jc,step:jc,smoothstep:Zc,simplebezier:Yc},yc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},zy=(e,t,n)=>n===j.Left?e-t:n===j.Right?e+t:e,Ry=(e,t,n)=>n===j.Top?e-t:n===j.Bottom?e+t:e,xc="react-flow__edgeupdater";function wc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,$.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:Se([xc,`${xc}-${s}`]),cx:zy(t,o,e),cy:Ry(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function Dy({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:l,onReconnectStart:u,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let m=he(),y=(v,x)=>{if(v.button!==0)return;let{autoPanOnConnect:S,domNode:C,connectionMode:M,connectionRadius:R,lib:W,onConnectStart:z,cancelConnection:L,nodeLookup:N,rfId:w,panBy:I,updateConnection:_}=m.getState(),E=x.type==="target",P=(H,V)=>{f(!1),d?.(H,n,x.type,V)},D=H=>l?.(n,H),F=(H,V)=>{f(!0),u?.(v,n,x.type),z?.(H,V)};rr.onPointerDown(v.nativeEvent,{autoPanOnConnect:S,connectionMode:M,connectionRadius:R,domNode:C,handleId:x.id,nodeId:x.nodeId,nodeLookup:N,isTarget:E,edgeUpdaterType:x.type,lib:W,flowId:w,cancelConnection:L,panBy:I,isValidConnection:(...H)=>m.getState().isValidConnection?.(...H)??!0,onConnect:D,onConnectStart:F,onConnectEnd:(...H)=>m.getState().onConnectEnd?.(...H),onReconnectEnd:P,updateConnection:_,getTransform:()=>m.getState().transform,getFromHandle:()=>m.getState().connection.fromHandle,dragThreshold:m.getState().connectionDragThreshold,handleDomNode:v.currentTarget})},b=v=>y(v,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=v=>y(v,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),k=()=>p(!0),h=()=>p(!1);return(0,$.jsxs)($.Fragment,{children:[(e===!0||e==="source")&&(0,$.jsx)(wc,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:b,onMouseEnter:k,onMouseOut:h,type:"source"}),(e===!0||e==="target")&&(0,$.jsx)(wc,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:g,onMouseEnter:k,onMouseOut:h,type:"target"})]})}function Ay({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:m,edgeTypes:y,noPanClassName:b,onError:g,disableKeyboardA11y:k}){let h=ue(K=>K.edgeLookup.get(e)),v=ue(K=>K.defaultEdgeOptions);h=v?{...v,...h}:h;let x=h.type||"default",S=y?.[x]||bc[x];S===void 0&&(g?.("011",je.error011(x)),x="default",S=y?.default||bc.default);let C=!!(h.focusable||t&&typeof h.focusable>"u"),M=typeof d<"u"&&(h.reconnectable||n&&typeof h.reconnectable>"u"),R=!!(h.selectable||o&&typeof h.selectable>"u"),W=(0,O.useRef)(null),[z,L]=(0,O.useState)(!1),[N,w]=(0,O.useState)(!1),I=he(),{zIndex:_=h.zIndex,sourceX:E,sourceY:P,targetX:D,targetY:F,sourcePosition:H,targetPosition:V}=ue((0,O.useCallback)(K=>{let J=K.nodeLookup.get(h.source),ie=K.nodeLookup.get(h.target);if(!J||!ie)return yc;let le=wl({id:e,sourceNode:J,targetNode:ie,sourceHandle:h.sourceHandle||null,targetHandle:h.targetHandle||null,connectionMode:K.connectionMode,onError:g}),pe=bl({selected:h.selected,zIndex:h.zIndex,sourceNode:J,targetNode:ie,elevateOnSelect:K.elevateEdgesOnSelect,zIndexMode:K.zIndexMode});return{...le||yc,zIndex:pe}},[h.source,h.target,h.sourceHandle,h.targetHandle,h.selected,h.zIndex]),xe),U=(0,O.useMemo)(()=>h.markerStart?`url('#${tr(h.markerStart,m)}')`:void 0,[h.markerStart,m]),Y=(0,O.useMemo)(()=>h.markerEnd?`url('#${tr(h.markerEnd,m)}')`:void 0,[h.markerEnd,m]);if(h.hidden||E===null||P===null||D===null||F===null)return null;let Q=K=>{let{addSelectedEdges:J,unselectNodesAndEdges:ie,multiSelectionActive:le}=I.getState();R&&(I.setState({nodesSelectionActive:!1}),h.selected&&le?(ie({nodes:[],edges:[h]}),W.current?.blur()):J([e])),r&&r(K,h)},re=i?K=>{i(K,{...h})}:void 0,B=a?K=>{a(K,{...h})}:void 0,A=s?K=>{s(K,{...h})}:void 0,X=c?K=>{c(K,{...h})}:void 0,ee=l?K=>{l(K,{...h})}:void 0,te=K=>{if(!k&&Mi.includes(K.key)&&R){let{unselectNodesAndEdges:J,addSelectedEdges:ie}=I.getState();K.key==="Escape"?(W.current?.blur(),J({edges:[h]})):ie([e])}};return(0,$.jsx)("svg",{style:{zIndex:_},children:(0,$.jsxs)("g",{className:Se(["react-flow__edge",`react-flow__edge-${x}`,h.className,b,{selected:h.selected,animated:h.animated,inactive:!R&&!r,updating:z,selectable:R}]),onClick:Q,onDoubleClick:re,onContextMenu:B,onMouseEnter:A,onMouseMove:X,onMouseLeave:ee,onKeyDown:C?te:void 0,tabIndex:C?0:void 0,role:h.ariaRole??(C?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":h.ariaLabel===null?void 0:h.ariaLabel||`Edge from ${h.source} to ${h.target}`,"aria-describedby":C?`${Mc}-${m}`:void 0,ref:W,...h.domAttributes,children:[!N&&(0,$.jsx)(S,{id:e,source:h.source,target:h.target,type:h.type,selected:h.selected,animated:h.animated,selectable:R,deletable:h.deletable??!0,label:h.label,labelStyle:h.labelStyle,labelShowBg:h.labelShowBg,labelBgStyle:h.labelBgStyle,labelBgPadding:h.labelBgPadding,labelBgBorderRadius:h.labelBgBorderRadius,sourceX:E,sourceY:P,targetX:D,targetY:F,sourcePosition:H,targetPosition:V,data:h.data,style:h.style,sourceHandleId:h.sourceHandle,targetHandleId:h.targetHandle,markerStart:U,markerEnd:Y,pathOptions:"pathOptions"in h?h.pathOptions:void 0,interactionWidth:h.interactionWidth}),M&&(0,$.jsx)(Dy,{edge:h,isReconnectable:M,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:E,sourceY:P,targetX:D,targetY:F,sourcePosition:H,targetPosition:V,setUpdateHover:L,setReconnecting:w})]})})}var Ty=(0,O.memo)(Ay),Oy=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function nu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:u,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,disableKeyboardA11y:y}){let{edgesFocusable:b,edgesReconnectable:g,elementsSelectable:k,onError:h}=ue(Oy,xe),v=wy(t);return(0,$.jsxs)("div",{className:"react-flow__edges",children:[(0,$.jsx)(Ey,{defaultColor:e,rfId:n}),v.map(x=>(0,$.jsx)(Ty,{id:x,edgesFocusable:b,edgesReconnectable:g,elementsSelectable:k,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,onClick:u,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,rfId:n,onError:h,edgeTypes:o,disableKeyboardA11y:y},x))]})}nu.displayName="EdgeRenderer";var $y=(0,O.memo)(nu),vc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Ly({children:e}){let t=he(),n=(0,O.useRef)(null),[o]=(0,O.useState)(()=>t.getState().transform);return Ac(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=vc(a)))};return i(),t.subscribe(i)},[t]),(0,$.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:vc(o)},children:e})}function Hy(e){let t=na(),n=(0,O.useRef)(!1);(0,O.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var By=e=>e.panZoom?.syncViewport;function Wy(e){let t=ue(By),n=he();return(0,O.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function kc(e){return e.connection.inProgress?{...e.connection,to:Rn(e.connection.to,e.transform)}:{...e.connection}}function Fy(e){return e?n=>{let o=kc(n);return e(o)}:kc}function Vy(e){let t=Fy(e);return ue(t,xe)}var Gy=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Xy({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:c}=ue(Gy,xe);return!(i&&r&&c)?null:(0,$.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,$.jsx)("g",{className:Se(["react-flow__connection",zi(s)]),children:(0,$.jsx)(ou,{style:t,type:n,CustomComponent:o,isValid:s})})})}var ou=({style:e,type:t=ht.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:l,toNode:u,toHandle:d,toPosition:f,pointer:p}=Vy();if(!r)return;if(n)return(0,$.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:f,connectionStatus:zi(o),toNode:u,toHandle:d,pointer:p});let m="",y={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case ht.Bezier:[m]=Jo(y);break;case ht.SimpleBezier:[m]=Gc(y);break;case ht.Step:[m]=oo({...y,borderRadius:0});break;case ht.SmoothStep:[m]=oo(y);break;default:[m]=er(y)}return(0,$.jsx)("path",{d:m,fill:"none",className:"react-flow__connection-path",style:e})};ou.displayName="ConnectionLine";var Yy={};function Sc(e=Yy){let t=(0,O.useRef)(e),n=he();(0,O.useEffect)(()=>{},[e])}function qy(){let e=he(),t=(0,O.useRef)(!1);(0,O.useEffect)(()=>{},[])}function ru({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:m,connectionLineStyle:y,connectionLineComponent:b,connectionLineContainerStyle:g,selectionKeyCode:k,selectionOnDrag:h,selectionMode:v,multiSelectionKeyCode:x,panActivationKeyCode:S,zoomActivationKeyCode:C,deleteKeyCode:M,onlyRenderVisibleElements:R,elementsSelectable:W,defaultViewport:z,translateExtent:L,minZoom:N,maxZoom:w,preventScrolling:I,defaultMarkerColor:_,zoomOnScroll:E,zoomOnPinch:P,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:H,zoomOnDoubleClick:V,panOnDrag:U,autoPanOnSelection:Y,onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:B,onPaneMouseLeave:A,onPaneScroll:X,onPaneContextMenu:ee,paneClickDistance:te,nodeClickDistance:K,onEdgeContextMenu:J,onEdgeMouseEnter:ie,onEdgeMouseMove:le,onEdgeMouseLeave:pe,reconnectRadius:Oe,onReconnect:ce,onReconnectStart:et,onReconnectEnd:$e,noDragClassName:it,noWheelClassName:wt,noPanClassName:ft,disableKeyboardA11y:at,nodeExtent:Fe,rfId:Ve,viewport:tt,onViewportChange:ke,nodesDraggable:pn}){return Sc(e),Sc(t),qy(),Hy(n),Wy(tt),(0,$.jsx)(uy,{onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:B,onPaneMouseLeave:A,onPaneContextMenu:ee,onPaneScroll:X,paneClickDistance:te,deleteKeyCode:M,selectionKeyCode:k,selectionOnDrag:h,selectionMode:v,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:x,panActivationKeyCode:S,zoomActivationKeyCode:C,elementsSelectable:W,zoomOnScroll:E,zoomOnPinch:P,zoomOnDoubleClick:V,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:H,panOnDrag:U,autoPanOnSelection:Y,defaultViewport:z,translateExtent:L,minZoom:N,maxZoom:w,onSelectionContextMenu:d,preventScrolling:I,noDragClassName:it,noWheelClassName:wt,noPanClassName:ft,disableKeyboardA11y:at,onViewportChange:ke,isControlledViewport:!!tt,children:(0,$.jsxs)(Ly,{children:[(0,$.jsx)($y,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:ce,onReconnectStart:et,onReconnectEnd:$e,onlyRenderVisibleElements:R,onEdgeContextMenu:J,onEdgeMouseEnter:ie,onEdgeMouseMove:le,onEdgeMouseLeave:pe,reconnectRadius:Oe,defaultMarkerColor:_,noPanClassName:ft,disableKeyboardA11y:at,rfId:Ve}),(0,$.jsx)(Xy,{style:y,type:m,component:b,containerStyle:g}),(0,$.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,$.jsx)(xy,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,nodeClickDistance:K,onlyRenderVisibleElements:R,noPanClassName:ft,noDragClassName:it,disableKeyboardA11y:at,nodeExtent:Fe,rfId:Ve,nodesDraggable:pn}),(0,$.jsx)("div",{className:"react-flow__viewport-portal"})]})})}ru.displayName="GraphView";var Uy=(0,O.memo)(ru),Zy=Li("React Flow","https://reactflow.dev/"),Cc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:l=2,nodeOrigin:u,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,m=new Map,y=new Map,b=new Map,g=o??t??[],k=n??e??[],h=u??[0,0],v=d??Mn;Ki(y,b,g);let{nodesInitialized:x}=nr(k,p,m,{nodeOrigin:h,nodeExtent:v,zIndexMode:f}),S=[0,0,1];if(a&&r&&i){let C=In(p,{filter:z=>!!((z.width||z.initialWidth)&&(z.height||z.initialHeight))}),{x:M,y:R,zoom:W}=no(C,r,i,c,l,s?.padding??.1);S=[M,R,W]}return{rfId:"1",width:r??0,height:i??0,transform:S,nodes:k,nodesInitialized:x,nodeLookup:p,parentLookup:m,edges:g,edgeLookup:b,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:Mn,nodeExtent:v,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Tt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:h,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...Pi},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Zy,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Ii,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},Ky=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f})=>Jl((p,m)=>{async function y(){let{nodeLookup:b,panZoom:g,fitViewOptions:k,fitViewResolver:h,width:v,height:x,minZoom:S,maxZoom:C}=m();g&&(await dl({nodes:b,width:v,height:x,panZoom:g,minZoom:S,maxZoom:C},k),h?.resolve(!0),p({fitViewResolver:null}))}return{...Cc({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:b=>{let{nodeLookup:g,parentLookup:k,nodeOrigin:h,elevateNodesOnSelect:v,fitViewQueued:x,zIndexMode:S,nodesSelectionActive:C}=m(),{nodesInitialized:M,hasSelectedNodes:R}=nr(b,g,k,{nodeOrigin:h,nodeExtent:d,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:S}),W=C&&R;x&&M?(y(),p({nodes:b,nodesInitialized:M,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:W})):p({nodes:b,nodesInitialized:M,nodesSelectionActive:W})},setEdges:b=>{let{connectionLookup:g,edgeLookup:k}=m();Ki(g,k,b),p({edges:b})},setDefaultNodesAndEdges:(b,g)=>{if(b){let{setNodes:k}=m();k(b),p({hasDefaultNodes:!0})}if(g){let{setEdges:k}=m();k(g),p({hasDefaultEdges:!0})}},updateNodeInternals:b=>{let{triggerNodeChanges:g,nodeLookup:k,parentLookup:h,domNode:v,nodeOrigin:x,nodeExtent:S,debug:C,fitViewQueued:M,zIndexMode:R}=m(),{changes:W,updatedInternals:z}=El(b,k,h,v,x,S,R);z&&(Sl(k,h,{nodeOrigin:x,nodeExtent:S,zIndexMode:R}),M?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),W?.length>0&&(C&&console.log("React Flow: trigger node changes",W),g?.(W)))},updateNodePositions:(b,g=!1)=>{let k=[],h=[],{nodeLookup:v,triggerNodeChanges:x,connection:S,updateConnection:C,onNodesChangeMiddlewareMap:M}=m();for(let[R,W]of b){let z=v.get(R),L=!!(z?.expandParent&&z?.parentId&&W?.position),N={id:R,type:"position",position:L?{x:Math.max(0,W.position.x),y:Math.max(0,W.position.y)}:W.position,dragging:g};if(z&&S.inProgress&&S.fromNode.id===z.id){let w=$t(z,S.fromHandle,j.Left,!0);C({...S,from:w})}L&&z.parentId&&k.push({id:R,parentId:z.parentId,rect:{...W.internals.positionAbsolute,width:W.measured.width??0,height:W.measured.height??0}}),h.push(N)}if(k.length>0){let{parentLookup:R,nodeOrigin:W}=m(),z=or(k,v,R,W);h.push(...z)}for(let R of M.values())h=R(h);x(h)},triggerNodeChanges:b=>{let{onNodesChange:g,setNodes:k,nodes:h,hasDefaultNodes:v,debug:x}=m();if(b?.length){if(v){let S=zc(b,h);k(S)}x&&console.log("React Flow: trigger node changes",b),g?.(b)}},triggerEdgeChanges:b=>{let{onEdgesChange:g,setEdges:k,edges:h,hasDefaultEdges:v,debug:x}=m();if(b?.length){if(v){let S=Rc(b,h);k(S)}x&&console.log("React Flow: trigger edge changes",b),g?.(b)}},addSelectedNodes:b=>{let{multiSelectionActive:g,edgeLookup:k,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:x}=m();if(g){let S=b.map(C=>rn(C,!0));v(S);return}v(Tn(h,new Set([...b]),!0)),x(Tn(k))},addSelectedEdges:b=>{let{multiSelectionActive:g,edgeLookup:k,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:x}=m();if(g){let S=b.map(C=>rn(C,!0));x(S);return}x(Tn(k,new Set([...b]))),v(Tn(h,new Set,!0))},unselectNodesAndEdges:({nodes:b,edges:g}={})=>{let{edges:k,nodes:h,nodeLookup:v,triggerNodeChanges:x,triggerEdgeChanges:S}=m(),C=b||h,M=g||k,R=[];for(let z of C){if(!z.selected)continue;let L=v.get(z.id);L&&(L.selected=!1),R.push(rn(z.id,!1))}let W=[];for(let z of M)z.selected&&W.push(rn(z.id,!1));x(R),S(W)},setMinZoom:b=>{let{panZoom:g,maxZoom:k}=m();g?.setScaleExtent([b,k]),p({minZoom:b})},setMaxZoom:b=>{let{panZoom:g,minZoom:k}=m();g?.setScaleExtent([k,b]),p({maxZoom:b})},setTranslateExtent:b=>{m().panZoom?.setTranslateExtent(b),p({translateExtent:b})},resetSelectedElements:()=>{let{edges:b,nodes:g,triggerNodeChanges:k,triggerEdgeChanges:h,elementsSelectable:v}=m();if(!v)return;let x=g.reduce((C,M)=>M.selected?[...C,rn(M.id,!1)]:C,[]),S=b.reduce((C,M)=>M.selected?[...C,rn(M.id,!1)]:C,[]);k(x),h(S)},setNodeExtent:b=>{let{nodes:g,nodeLookup:k,parentLookup:h,nodeOrigin:v,elevateNodesOnSelect:x,nodeExtent:S,zIndexMode:C}=m();b[0][0]===S[0][0]&&b[0][1]===S[0][1]&&b[1][0]===S[1][0]&&b[1][1]===S[1][1]||(nr(g,k,h,{nodeOrigin:v,nodeExtent:b,elevateNodesOnSelect:x,checkEquality:!1,zIndexMode:C}),p({nodeExtent:b}))},panBy:b=>{let{transform:g,width:k,height:h,panZoom:v,translateExtent:x}=m();return _l({delta:b,panZoom:v,transform:g,translateExtent:x,width:k,height:h})},setCenter:async(b,g,k)=>{let{width:h,height:v,maxZoom:x,panZoom:S}=m();if(!S)return!1;let C=typeof k?.zoom<"u"?k.zoom:x;return await S.setViewport({x:h/2-b*C,y:v/2-g*C,zoom:C},{duration:k?.duration,ease:k?.ease,interpolate:k?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Pi}})},updateConnection:b=>{p({connection:b})},reset:()=>p({...Cc()})}},Object.is);function jy({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f,children:p}){let[m]=(0,O.useState)(()=>Ky({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}));return(0,$.jsx)(f0,{value:m,children:(0,$.jsx)(O0,{children:(0,$.jsx)(j0,{children:p})})})}function Qy({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,O.useContext)(ur)?(0,$.jsx)($.Fragment,{children:e}):(0,$.jsx)(jy,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var Jy={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function ex({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:l,onMove:u,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,onNodeMouseEnter:k,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:x,onNodeDoubleClick:S,onNodeDragStart:C,onNodeDrag:M,onNodeDragStop:R,onNodesDelete:W,onEdgesDelete:z,onDelete:L,onSelectionChange:N,onSelectionDragStart:w,onSelectionDrag:I,onSelectionDragStop:_,onSelectionContextMenu:E,onSelectionStart:P,onSelectionEnd:D,onBeforeDelete:F,connectionMode:H,connectionLineType:V=ht.Bezier,connectionLineStyle:U,connectionLineComponent:Y,connectionLineContainerStyle:Q,deleteKeyCode:re="Backspace",selectionKeyCode:B="Shift",selectionOnDrag:A=!1,selectionMode:X=en.Full,panActivationKeyCode:ee="Space",multiSelectionKeyCode:te=Dn()?"Meta":"Control",zoomActivationKeyCode:K=Dn()?"Meta":"Control",snapToGrid:J,snapGrid:ie,onlyRenderVisibleElements:le=!1,selectNodesOnDrag:pe,nodesDraggable:Oe,autoPanOnNodeFocus:ce,nodesConnectable:et,nodesFocusable:$e,nodeOrigin:it=Ic,edgesFocusable:wt,edgesReconnectable:ft,elementsSelectable:at=!0,defaultViewport:Fe=E0,minZoom:Ve=.5,maxZoom:tt=2,translateExtent:ke=Mn,preventScrolling:pn=!0,nodeExtent:mn,defaultMarkerColor:go="#b1b1b7",zoomOnScroll:Pr=!0,zoomOnPinch:zr=!0,panOnScroll:Rr=!1,panOnScrollSpeed:Dr=.5,panOnScrollMode:Ar=Nt.Free,zoomOnDoubleClick:Tr=!0,panOnDrag:Or=!0,onPaneClick:$r,onPaneMouseEnter:Lr,onPaneMouseMove:Xt,onPaneMouseLeave:ho,onPaneScroll:bo,onPaneContextMenu:Hr,paneClickDistance:T=1,nodeClickDistance:G=0,children:Z,onReconnect:ne,onReconnectStart:we,onReconnectEnd:vt,onEdgeContextMenu:_e,onEdgeDoubleClick:gn,onEdgeMouseEnter:Vf,onEdgeMouseMove:Gf,onEdgeMouseLeave:Xf,reconnectRadius:Yf=10,onNodesChange:qf,onEdgesChange:Uf,noDragClassName:Zf="nodrag",noWheelClassName:Kf="nowheel",noPanClassName:Aa="nopan",fitView:Ta,fitViewOptions:Oa,connectOnClick:jf,attributionPosition:Qf,proOptions:Jf,defaultEdgeOptions:ep,elevateNodesOnSelect:tp=!0,elevateEdgesOnSelect:np=!1,disableKeyboardA11y:$a=!1,autoPanOnConnect:op,autoPanOnNodeDrag:rp,autoPanOnSelection:ip=!0,autoPanSpeed:ap,connectionRadius:sp,isValidConnection:lp,onError:cp,style:up,id:La,nodeDragThreshold:dp,connectionDragThreshold:fp,viewport:pp,onViewportChange:mp,width:gp,height:hp,colorMode:bp="light",debug:yp,onScroll:Ha,ariaLabelConfig:xp,zIndexMode:Ba="basic",...wp},vp){let Br=La||"1",kp=I0(bp),Sp=(0,O.useCallback)(Wa=>{Wa.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Ha?.(Wa)},[Ha]);return(0,$.jsx)("div",{"data-testid":"rf__wrapper",...wp,onScroll:Sp,style:{...up,...Jy},ref:vp,className:Se(["react-flow",r,kp]),id:La,role:"application",children:(0,$.jsxs)(Qy,{nodes:e,edges:t,width:gp,height:hp,fitView:Ta,fitViewOptions:Oa,minZoom:Ve,maxZoom:tt,nodeOrigin:it,nodeExtent:mn,zIndexMode:Ba,children:[(0,$.jsx)(M0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,nodesDraggable:Oe,autoPanOnNodeFocus:ce,nodesConnectable:et,nodesFocusable:$e,edgesFocusable:wt,edgesReconnectable:ft,elementsSelectable:at,elevateNodesOnSelect:tp,elevateEdgesOnSelect:np,minZoom:Ve,maxZoom:tt,nodeExtent:mn,onNodesChange:qf,onEdgesChange:Uf,snapToGrid:J,snapGrid:ie,connectionMode:H,translateExtent:ke,connectOnClick:jf,defaultEdgeOptions:ep,fitView:Ta,fitViewOptions:Oa,onNodesDelete:W,onEdgesDelete:z,onDelete:L,onNodeDragStart:C,onNodeDrag:M,onNodeDragStop:R,onSelectionDrag:I,onSelectionDragStart:w,onSelectionDragStop:_,onMove:u,onMoveStart:d,onMoveEnd:f,noPanClassName:Aa,nodeOrigin:it,rfId:Br,autoPanOnConnect:op,autoPanOnNodeDrag:rp,autoPanSpeed:ap,onError:cp,connectionRadius:sp,isValidConnection:lp,selectNodesOnDrag:pe,nodeDragThreshold:dp,connectionDragThreshold:fp,onBeforeDelete:F,debug:yp,ariaLabelConfig:xp,zIndexMode:Ba}),(0,$.jsx)(Uy,{onInit:l,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:k,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:x,onNodeDoubleClick:S,nodeTypes:i,edgeTypes:a,connectionLineType:V,connectionLineStyle:U,connectionLineComponent:Y,connectionLineContainerStyle:Q,selectionKeyCode:B,selectionOnDrag:A,selectionMode:X,deleteKeyCode:re,multiSelectionKeyCode:te,panActivationKeyCode:ee,zoomActivationKeyCode:K,onlyRenderVisibleElements:le,defaultViewport:Fe,translateExtent:ke,minZoom:Ve,maxZoom:tt,preventScrolling:pn,zoomOnScroll:Pr,zoomOnPinch:zr,zoomOnDoubleClick:Tr,panOnScroll:Rr,panOnScrollSpeed:Dr,panOnScrollMode:Ar,panOnDrag:Or,autoPanOnSelection:ip,onPaneClick:$r,onPaneMouseEnter:Lr,onPaneMouseMove:Xt,onPaneMouseLeave:ho,onPaneScroll:bo,onPaneContextMenu:Hr,paneClickDistance:T,nodeClickDistance:G,onSelectionContextMenu:E,onSelectionStart:P,onSelectionEnd:D,onReconnect:ne,onReconnectStart:we,onReconnectEnd:vt,onEdgeContextMenu:_e,onEdgeDoubleClick:gn,onEdgeMouseEnter:Vf,onEdgeMouseMove:Gf,onEdgeMouseLeave:Xf,reconnectRadius:Yf,defaultMarkerColor:go,noDragClassName:Zf,noWheelClassName:Kf,noPanClassName:Aa,rfId:Br,disableKeyboardA11y:$a,nodeExtent:mn,viewport:pp,onViewportChange:mp,nodesDraggable:Oe}),(0,$.jsx)(C0,{onSelectionChange:N}),Z,(0,$.jsx)(x0,{proOptions:Jf,position:Qf}),(0,$.jsx)(y0,{rfId:Br,disableKeyboardA11y:$a})]})})}var iu=Dc(ex);function au(e){let[t,n]=(0,O.useState)(e),o=(0,O.useCallback)(r=>n(i=>zc(r,i)),[]);return[t,n,o]}function su(e){let[t,n]=(0,O.useState)(e),o=(0,O.useCallback)(r=>n(i=>Rc(r,i)),[]);return[t,n,o]}var r1=je.error014();function tx({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,$.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Se(["react-flow__background-pattern",n,o])})}function nx({radius:e,className:t}){return(0,$.jsx)("circle",{cx:e,cy:e,r:e,className:Se(["react-flow__background-pattern","dots",t])})}var bt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(bt||(bt={}));var ox={[bt.Dots]:1,[bt.Lines]:1,[bt.Cross]:6},rx=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function lu({id:e,variant:t=bt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:c,className:l,patternClassName:u}){let d=(0,O.useRef)(null),{transform:f,patternId:p}=ue(rx,xe),m=o||ox[t],y=t===bt.Dots,b=t===bt.Cross,g=Array.isArray(n)?n:[n,n],k=[g[0]*f[2]||1,g[1]*f[2]||1],h=m*f[2],v=Array.isArray(i)?i:[i,i],x=b?[h,h]:k,S=[v[0]*f[2]||1+x[0]/2,v[1]*f[2]||1+x[1]/2],C=`${p}${e||""}`;return(0,$.jsxs)("svg",{className:Se(["react-flow__background",l]),style:{...c,...fr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,$.jsx)("pattern",{id:C,x:f[0]%k[0],y:f[1]%k[1],width:k[0],height:k[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:y?(0,$.jsx)(nx,{radius:h/2,className:u}):(0,$.jsx)(tx,{dimensions:x,lineWidth:r,variant:t,className:u})}),(0,$.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${C})`})]})}lu.displayName="Background";var cu=(0,O.memo)(lu);function ix(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,$.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function ax(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,$.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function sx(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,$.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function lx(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,$.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function cx(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,$.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function lr({children:e,className:t,...n}){return(0,$.jsx)("button",{type:"button",className:Se(["react-flow__controls-button",t]),...n,children:e})}var ux=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function uu({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:l,children:u,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let m=he(),{isInteractive:y,minZoomReached:b,maxZoomReached:g,ariaLabelConfig:k}=ue(ux,xe),{zoomIn:h,zoomOut:v,fitView:x}=na(),S=()=>{h(),i?.()},C=()=>{v(),a?.()},M=()=>{x(r),s?.()},R=()=>{m.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),c?.(!y)};return(0,$.jsxs)(dr,{className:Se(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",l]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??k["controls.ariaLabel"],children:[t&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(lr,{onClick:S,className:"react-flow__controls-zoomin",title:k["controls.zoomIn.ariaLabel"],"aria-label":k["controls.zoomIn.ariaLabel"],disabled:g,children:(0,$.jsx)(ix,{})}),(0,$.jsx)(lr,{onClick:C,className:"react-flow__controls-zoomout",title:k["controls.zoomOut.ariaLabel"],"aria-label":k["controls.zoomOut.ariaLabel"],disabled:b,children:(0,$.jsx)(ax,{})})]}),n&&(0,$.jsx)(lr,{className:"react-flow__controls-fitview",onClick:M,title:k["controls.fitView.ariaLabel"],"aria-label":k["controls.fitView.ariaLabel"],children:(0,$.jsx)(sx,{})}),o&&(0,$.jsx)(lr,{className:"react-flow__controls-interactive",onClick:R,title:k["controls.interactive.ariaLabel"],"aria-label":k["controls.interactive.ariaLabel"],children:y?(0,$.jsx)(cx,{}):(0,$.jsx)(lx,{})}),u]})}uu.displayName="Controls";var i1=(0,O.memo)(uu);function dx({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:c,className:l,borderRadius:u,shapeRendering:d,selected:f,onClick:p}){let{background:m,backgroundColor:y}=i||{},b=a||m||y;return(0,$.jsx)("rect",{className:Se(["react-flow__minimap-node",{selected:f},l]),x:t,y:n,rx:u,ry:u,width:o,height:r,style:{fill:b,stroke:s,strokeWidth:c},shapeRendering:d,onClick:p?g=>p(g,e):void 0})}var fx=(0,O.memo)(dx),px=e=>e.nodes.map(t=>t.id),ea=e=>e instanceof Function?e:()=>e;function mx({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=fx,onClick:a}){let s=ue(px,xe),c=ea(t),l=ea(e),u=ea(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,$.jsx)($.Fragment,{children:s.map(f=>(0,$.jsx)(hx,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:u,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function gx({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:l,x:u,y:d,width:f,height:p}=ue(m=>{let y=m.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let b=y.internals.userNode,{x:g,y:k}=y.internals.positionAbsolute,{width:h,height:v}=ut(b);return{node:b,x:g,y:k,width:h,height:v}},xe);return!l||l.hidden||!Hi(l)?null:(0,$.jsx)(s,{x:u,y:d,width:f,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:a,onClick:c,id:l.id})}var hx=(0,O.memo)(gx),bx=(0,O.memo)(mx),yx=200,xx=150,wx=e=>!e.hidden,vx=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Oi(In(e.nodeLookup,{filter:wx}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Ec=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,kx=(e,t)=>Ec(e.viewBB,t.viewBB)&&Ec(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Sx="react-flow__minimap-desc";function du({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:l,maskStrokeColor:u,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:m,pannable:y=!1,zoomable:b=!1,ariaLabel:g,inversePan:k,zoomStep:h=1,offsetScale:v=5}){let x=he(),S=(0,O.useRef)(null),{boundingRect:C,viewBB:M,rfId:R,panZoom:W,translateExtent:z,flowWidth:L,flowHeight:N,ariaLabelConfig:w}=ue(vx,kx),I=e?.width??yx,_=e?.height??xx,E=C.width/I,P=C.height/_,D=Math.max(E,P),F=D*I,H=D*_,V=v*D,U=C.x-(F-C.width)/2-V,Y=C.y-(H-C.height)/2-V,Q=F+V*2,re=H+V*2,B=`${Sx}-${R}`,A=(0,O.useRef)(0),X=(0,O.useRef)();A.current=D,(0,O.useEffect)(()=>{if(S.current&&W)return X.current=Dl({domNode:S.current,panZoom:W,getTransform:()=>x.getState().transform,getViewScale:()=>A.current}),()=>{X.current?.destroy()}},[W]),(0,O.useEffect)(()=>{X.current?.update({translateExtent:z,width:L,height:N,inversePan:k,pannable:y,zoomStep:h,zoomable:b})},[y,b,k,h,z,L,N]);let ee=p?J=>{let[ie,le]=X.current?.pointer(J)||[0,0];p(J,{x:ie,y:le})}:void 0,te=m?(0,O.useCallback)((J,ie)=>{let le=x.getState().nodeLookup.get(ie).internals.userNode;m(J,le)},[]):void 0,K=g??w["minimap.ariaLabel"];return(0,$.jsx)(dr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:Se(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,$.jsxs)("svg",{width:I,height:_,viewBox:`${U} ${Y} ${Q} ${re}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":B,ref:S,onClick:ee,children:[K&&(0,$.jsx)("title",{id:B,children:K}),(0,$.jsx)(bx,{onClick:te,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,$.jsx)("path",{className:"react-flow__minimap-mask",d:`M${U-V},${Y-V}h${Q+V*2}v${re+V*2}h${-Q-V*2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}du.displayName="MiniMap";var fu=(0,O.memo)(du),Cx=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Ex={[Lt.Line]:"right",[Lt.Handle]:"bottom-right"};function _x({nodeId:e,position:t,variant:n=Lt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:m,onResizeStart:y,onResize:b,onResizeEnd:g}){let k=Lc(),h=typeof e=="string"?e:k,v=he(),x=(0,O.useRef)(null),S=n===Lt.Handle,C=ue((0,O.useCallback)(Cx(S&&p),[S,p]),xe),M=(0,O.useRef)(null),R=t??Ex[n];(0,O.useEffect)(()=>{if(!(!x.current||!h))return M.current||(M.current=Ll({domNode:x.current,nodeId:h,getStoreItems:()=>{let{nodeLookup:z,transform:L,snapGrid:N,snapToGrid:w,nodeOrigin:I,domNode:_}=v.getState();return{nodeLookup:z,transform:L,snapGrid:N,snapToGrid:w,nodeOrigin:I,paneDomNode:_}},onChange:(z,L)=>{let{triggerNodeChanges:N,nodeLookup:w,parentLookup:I,nodeOrigin:_}=v.getState(),E=[],P={x:z.x,y:z.y},D=w.get(h);if(D&&D.expandParent&&D.parentId){let F=D.origin??_,H=z.width??D.measured.width??0,V=z.height??D.measured.height??0,U={id:D.id,parentId:D.parentId,rect:{width:H,height:V,...Bi({x:z.x??D.position.x,y:z.y??D.position.y},{width:H,height:V},D.parentId,w,F)}},Y=or([U],w,I,_);E.push(...Y),P.x=z.x?Math.max(F[0]*H,z.x):void 0,P.y=z.y?Math.max(F[1]*V,z.y):void 0}if(P.x!==void 0&&P.y!==void 0){let F={id:h,type:"position",position:{...P}};E.push(F)}if(z.width!==void 0&&z.height!==void 0){let H={id:h,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:z.width,height:z.height}};E.push(H)}for(let F of L){let H={...F,type:"position"};E.push(H)}N(E)},onEnd:({width:z,height:L})=>{let N={id:h,type:"dimensions",resizing:!1,dimensions:{width:z,height:L}};v.getState().triggerNodeChanges([N])}})),M.current.update({controlPosition:R,boundaries:{minWidth:s,minHeight:c,maxWidth:l,maxHeight:u},keepAspectRatio:d,resizeDirection:f,onResizeStart:y,onResize:b,onResizeEnd:g,shouldResize:m}),()=>{M.current?.destroy()}},[R,s,c,l,u,d,y,b,g,m]);let W=R.split("-");return(0,$.jsx)("div",{className:Se(["react-flow__resize-control","nodrag",...W,n,o]),ref:x,style:{...r,scale:C,...a&&{[S?"backgroundColor":"borderColor"]:a}},children:i})}var a1=(0,O.memo)(_x);async function Ne(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status})}return r}function Ye(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var pu=()=>Ne("config");var mu=()=>Ne("assets"),mr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},gu=e=>Ne("asset/delete",Ye({id:e})),hu=e=>Ne("generate",Ye(e)),bu=e=>Ne(`task?id=${encodeURIComponent(e)}`),yu=e=>Ne("task/cancel",Ye({id:e})),xu=(e,t,n)=>Ne("workflow/save",Ye({name:e,nodes:t,edges:n})),ra=()=>Ne("workflow/list"),wu=e=>Ne(`workflow/load?name=${encodeURIComponent(e)}`),vu=(e,t)=>Ne("recovery/save",Ye({nodes:e,edges:t})),ku=()=>Ne("recovery/latest"),Su=e=>Ne("settings",Ye({model:e})),Cu=e=>Ne("settings",Ye({profile:e})),io=e=>Ne("settings",Ye({outputDir:e})),Eu=e=>Ne("settings",Ye({budget:e})),ia=e=>Ne("settings",Ye({imagoraRoot:e})),_u=(e={})=>Ne("pick-folder",Ye(e)),gr=e=>Ne("reveal",Ye({path:e})),aa=e=>Ne("provider",Ye(e)),Nu=e=>Ne("provider/probe",Ye(e));var Mu=/[\w\u4e00-\u9fa5.-]/;var Nx=/[\p{L}\p{N}]/u;function Iu(e){return e===void 0?!0:!Nx.test(e)}function Pu(e){return e.trim().replace(/\s+/g," ")}function Mx(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&Iu(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Mu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Mu.test(i))break;r+=1}Iu(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function Ix(e){let t=[];for(let n of Mx(e))n.kind==="ref"&&t.push(n.token);return t}function zu(e,t){let n=Ix(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let l=Pu(c.name);if(l==="")continue;let u=o.get(l);u===void 0?o.set(l,[c.id]):u.includes(c.id)||u.push(c.id)}let r=[],i=new Set,a=[],s=new Set;for(let c of n){let l=Pu(c.name),u=o.get(l);if(u===void 0){s.has(l)||(s.add(l),a.push(l));continue}for(let d of u)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var Px=/\.(png|jpe?g|webp|gif|bmp)$/i;function Au(e){return e.type.startsWith("image/")?!0:Px.test(e.name)}var Ru=30,Du=200;function Tu(e,t){if(t&&Math.abs(t.x-e.x)<Du&&Math.abs(t.y-e.y)<Du){let n={x:t.x+Ru,y:t.y+Ru};return{position:n,next:n}}return{position:e,next:e}}var zx=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Rx(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!zx.test(n));return t.length?t.join(" "):void 0}function sn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function Ou(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function $u(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function sa(e,t,n){let o=new Set(n);return{nodes:e.map(i=>{let a=Rx(i.className),s={...i};return a===void 0?delete s.className:s.className=a,s.type==="image"&&o.has(s.data.registryId)?{...s,data:{...s.data,missing:!0}}:s.type==="prompt"?{...s,data:{...s.data,quality:s.data.quality??"high",status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}:s}),edges:t}}function dt(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function Lu(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function Dx(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Ax(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let l=c.pop();if(a.has(l))continue;a.add(l);let u=o.get(l);u&&(u.type==="prompt"?s.add(l):u.type==="group"&&c.push(...r.get(l)??[]))}n.set(i.data.registryId,s.size)}}function Hu(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of r.get(e)??[]){let l=o.get(c);if(l){if(l.type==="image")a+=1,s.push(l.data.registryId);else if(l.type==="group"){let u=Hu(c,t,n);a+=u.count,s.push(...u.ids)}}}return t.delete(e),{count:a,ids:s}}function Tx(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=Hu(a.id,new Set,t),l=new Set(c);n.set(a.id,l.size),o.set(a.id,Array.from(l).reduce((u,d)=>u+(i.get(d)??0),0)),r.set(a.id,s-l.size)}}function Bu(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=Dx(e,t);return Ax(e,a,n),Tx(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function Ox(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=o.get(s);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(l=>l.target===s).forEach(l=>a.push(l.source)))}return r}function Wu(e,t,n,o){let r=Ox(e,t,n),i=r.map(l=>({id:l.id,name:l.type==="image"?l.data.name:""})),a=zu(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(l=>[l.id,l])),c=[];for(let l of a.ids){let u=s.get(l);u&&c.push(u)}return{images:c,unknown:a.unknown,mode:a.mode}}function hr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function br(e,t){return t.reduce((n,o)=>!n||hr(e,o)<hr(e,n)?o:n,null)}function ao(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function $x(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=br(r,n);if(i&&r.position.y>i.position.y){ao(e,i,r);continue}let a=br(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||hr(r,a)<hr(r,i))?ao(e,r,a):i&&ao(e,r,i)}}function Lx(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=br(r,n);a&&ao(e,r,a)}}function Hx(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(l=>{let u=o.get(l.source)?.type;return l.target===a.id&&(u==="image"||u==="group")}))continue;let c=br(a,i);c&&ao(e,c,a)}}function la(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return $x(a,e,n,o),Lx(a,o,n,i),Hx(a,n,o,r),a.next}function Fu(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?la(o,t):t}function Vu(e){return`\u751F\u6210\u4E2D ${e}s`}function ae(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var Bx=/^=== (.+) ===\s*$/,Xu=/^```(?:text)?\s*$/,Wx=/^ratio:\s*(\d+):(\d+)\s*$/,Fx=/^ratio\b/i;function Gu(e){return e.split(`
`).some(t=>Xu.test(t))}function Yu(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((l,u)=>{let d=l.match(Bx)?.[1];d!==void 0&&a.push({title:d.trim(),line:u})}),a.length===0){let l=t.trim();return l&&i.push(l),Gu(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),Gu(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let l=0;l<a.length;l++){let u=a[l];if(u===void 0)continue;let{title:d}=u,f=u.line+1,p=a[l+1],m=p===void 0?n.length:p.line,y=n.slice(f,m);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let b=[];y.forEach((W,z)=>{Xu.test(W)&&b.push(z)});let g=b[0],k=b[b.length-1];if(g===void 0||k===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let h=y.slice(0,g).join(`
`).trim();h&&i.push(h);let v=y.slice(g+1,k),x=v.findIndex(W=>W.trim()!=="");if(x===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let S=(v[x]??"").trim(),C=S.match(Wx);if(!C){Fx.test(S)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${S}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let M=`${C[1]}:${C[2]}`,R=v.slice(x+1).join(`
`).trim();if(!R){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:M,prompt:R})}return{cards:o,issues:r,skippedText:i}}function Vx(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function qu(e,t,n){let o=Ux(n,e.length);return e.map((r,i)=>{let a=Vx(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var ca=380,Gx=326,Uu=40,Xx=74,Yx=ca+Uu,qx=Gx+Xx,yr=3;function Ux(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/yr),a=r%yr,s=Math.min(yr,n-i*yr),c=s*ca+(s-1)*Uu,l=e.x+ca/2-c/2;o.push({x:l+a*Yx,y:e.y+i*qx})}return o}var Zx={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function xr(e){let t=e.measured,n=Zx[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var ua=[0,.5,1];function Zu(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function ju(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Ku(e,t,n,o){let r=ua.map(s=>Zu(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&ju(c))for(let l=0;l<ua.length;l+=1){let u=ua[l];if(u===void 0)continue;let d=Zu(c,n,u);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let m=d-p,y=Math.abs(m);y>=o||y>=a||(a=y,i={delta:m,position:d,targetId:c.id})}}}return i}function wr(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!ju(e)||!Number.isFinite(n)||n<=0)return o;let r=Ku(e,t,"x",n),i=Ku(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var Qu="imagora.canvas-snap.v1";function Ju(){try{let e=window.localStorage.getItem(Qu);return e===null?!0:e!=="0"}catch{return!0}}function ed(e){try{window.localStorage.setItem(Qu,e?"1":"0")}catch{}}function lo(e){let t=xr(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var so=[];function td(e,t,n){if(!n)return{changes:e,guides:so};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:so};let r=o[0];if(!r)return{changes:e,guides:so};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:so};let s={...lo(i),x:a.x,y:a.y},c=[];for(let d of t)d.id!==r.id&&c.push(lo(d));let l=wr(s,c);return l.guides.length===0?{changes:e,guides:so}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:l.x,y:l.y}}:d),guides:l.guides}}var Qe=require("react");var da=require("react/jsx-runtime"),nd={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function Me({name:e,size:t=14,style:n}){let o=nd[e]||nd.help;return(0,da.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...n},children:(0,da.jsx)("path",{d:o})})}var On=require("react");var fa=["\u6B63\u5728\u7406\u89E3\u63D0\u793A\u8BCD\u2026","\u6B63\u5728\u6784\u56FE\u2026","\u6B63\u5728\u94FA\u8BBE\u5149\u5F71\u2026","\u6B63\u5728\u7EC6\u5316\u7EC6\u8282\u2026","\u5FEB\u597D\u4E86\uFF0C\u6B63\u5728\u6536\u5C3E\u2026"];function Kx(e){let t=Number.isFinite(e)&&e>0?e:0,n=10+(1-Math.exp(-t/28))*88;return Math.min(98,Math.max(10,n))}function od(e){return Kx(e)/100}function pa(e){let t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/2)%fa.length;return fa[n]??fa[0]??""}function rd(e){let t=Number.isFinite(e)&&e>0?Math.floor(e):0;return`\u751F\u6210\u4E2D ${t}s \xB7 ${pa(t)}`}var ln=require("react/jsx-runtime");function id({className:e}){let[t,n]=(0,On.useState)(0),o=(0,On.useRef)(!0);(0,On.useEffect)(()=>{o.current=!0;let a=window.setInterval(()=>{o.current&&n(s=>s+1)},1e3);return()=>{o.current=!1,window.clearInterval(a)}},[]);let r=rd(t),i=od(t);return(0,ln.jsxs)("div",{className:`im-pending${e?` ${e}`:""}`,role:"status","aria-live":"polite","aria-label":r,children:[(0,ln.jsx)("div",{className:"im-pending-label",title:r,children:r}),(0,ln.jsx)("div",{className:"im-pending-track","aria-hidden":!0,children:(0,ln.jsx)("div",{className:"im-pending-bar",style:{transform:`scaleX(${i.toFixed(4)})`}})}),(0,ln.jsx)("span",{className:"visually-hidden",children:pa(t)})]})}var be=require("react"),gd=require("react-dom");var jx={id:"__custom",label:"\u81EA\u5B9A\u4E49"},Qx=64;function ad(e){return e.trim().replace(/\s+/g," ")}function Jx(e,t){return e.some(n=>n.value===t)}function sd(e,t){let n=ad(t);return n===""||Jx(e,n)?e:[...e,{value:n,label:n,group:jx}]}function ld(e){let t=ad(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>Qx?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function cd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var vr=0;function ud(){vr+=1}function dd(){vr=Math.max(0,vr-1)}function fd(){return vr>0}var ew=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function ma(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=ew.has(o)?"-":n}return t}function pd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function tw(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+pd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,l=n;for(let[u,d]of o.entries()){if(c!==n&&(l=Math.max(l,c+u-2)),e.charAt(u)===t.charAt(i)){let f=1+pd(e,u),p=n;s!==n&&(p=s+f+4),l!==n&&(p=Math.max(p,l+f+1-u)),a[u]=p}c=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function md(e,t){let n=ma(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,c;for(let l of a){let u=ma(l).toLowerCase(),d=tw(u,n);d!==void 0&&(s||=u.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:s,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var ge=require("react/jsx-runtime"),nw=4;function $n({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:c,"aria-describedby":l,"aria-invalid":u,renderOption:d,title:f}){let[p,m]=(0,be.useState)(!1),[y,b]=(0,be.useState)(-1),[g,k]=(0,be.useState)(""),[h,v]=(0,be.useState)(null),x=(0,be.useRef)(null),S=(0,be.useRef)(null),C=(0,be.useRef)(null),M=(0,be.useId)(),R=`${r??`select-${M}`}-listbox`,W=`${R}-search`,z=(0,be.useMemo)(()=>{if(g.trim()==="")return e;let B=e.map(A=>({name:A.value,label:A.label,option:A}));return md(B,g).map(A=>A.option)},[e,g]),L=i===void 0||i==="auto"?e.length>nw:i,N=z.findIndex(B=>B.value===t),w=e.find(B=>B.value===t),I=B=>`${R}-option-${B}`,_=L&&s===!0,E=(0,be.useMemo)(()=>{let B=g.trim();if(B!=="")return z.find(A=>A.value===B||A.label===B)},[z,g]),P=(0,be.useMemo)(()=>{if(!_||E!==void 0)return null;let B=ld(g);return B.ok?B.value:null},[_,E,g]),D=(B=N>=0?N:0)=>{!e.length&&!_||(b(e.length===0?-1:Math.min(Math.max(B,0),e.length-1)),m(!0),L||window.setTimeout(()=>S.current?.focus(),0))},F=(B=!1)=>{m(!1),k(""),B&&window.setTimeout(()=>S.current?.focus(),0)},H=B=>{let A=z[B];A&&(n(A.value),F(!0))},V=B=>{c?.(B),F(!0)},U=()=>{let B=S.current;if(!B)return;let A=B.getBoundingClientRect(),X=4,ee=8,te=B.offsetWidth||A.width,K=Math.max(ee,Math.min(A.left,window.innerWidth-te-ee)),J=window.innerHeight-A.bottom-X-ee,ie=A.top-X-ee,le=J<160&&ie>J,pe=Math.max(120,Math.min(240,le?ie:J));v({left:K,top:le?Math.max(ee,A.top-X-pe):A.bottom+X,width:te,maxHeight:pe})};(0,be.useEffect)(()=>{if(p)return ud(),()=>dd()},[p]),(0,be.useLayoutEffect)(()=>{if(!p)return;U();let B=()=>U();window.addEventListener("scroll",B,!0),window.addEventListener("resize",B);let A=typeof ResizeObserver>"u"?null:new ResizeObserver(B);return S.current&&A?.observe(S.current),()=>{A?.disconnect(),window.removeEventListener("scroll",B,!0),window.removeEventListener("resize",B)}},[p]),(0,be.useEffect)(()=>{p&&L&&h&&C.current?.focus()},[p,L,h]),(0,be.useEffect)(()=>{p&&b(B=>z.length===0?-1:Math.min(Math.max(B,0),z.length-1))},[p,z.length]),(0,be.useEffect)(()=>{!e.length&&!_&&p&&(m(!1),b(-1))},[p,e.length,_]),(0,be.useEffect)(()=>{let B=A=>{let X=A.target;x.current?.contains(X)||document.getElementById(R)?.contains(X)||F()};return document.addEventListener("mousedown",B,!0),()=>document.removeEventListener("mousedown",B,!0)},[R]);let Y=(B,A)=>{if(B.key==="Tab"){F();return}if(B.key==="Escape"){p&&(B.preventDefault(),F(!0));return}if(B.key==="ArrowDown"||B.key==="ArrowUp"){if(B.preventDefault(),!p){D();return}if(z.length===0)return;let X=B.key==="ArrowDown"?1:-1;b(ee=>(ee+X+z.length)%z.length);return}if(B.key==="Home"||B.key==="End"){if(z.length===0)return;B.preventDefault(),p||m(!0),b(B.key==="Home"?0:z.length-1);return}if(B.key==="Enter"){if(B.preventDefault(),!p){D();return}if(_&&g.trim()!==""){E!==void 0?(n(E.value),F(!0)):P!==null&&V(P);return}H(y);return}!A&&B.key===" "&&(B.preventDefault(),p?H(y):D())},Q=(0,be.useMemo)(()=>cd(z),[z]),re=(0,be.useMemo)(()=>{let B=new Map;return z.forEach((A,X)=>B.set(A,X)),B},[z]);return(0,ge.jsxs)("div",{ref:x,className:`im-select-root ${o}`.trim(),children:[(0,ge.jsxs)("button",{ref:S,type:"button",id:r,title:f,onClick:()=>p?F():D(),onKeyDown:B=>Y(B,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":R,"aria-activedescendant":p&&y>=0?I(y):void 0,"aria-describedby":l,"aria-invalid":u,className:`im-select-trigger${p?" is-open":""}`,children:[d&&w?(0,ge.jsxs)("span",{className:"im-select-value",children:[d(w),(0,ge.jsx)("span",{className:"im-select-label",children:w.label})]}):(0,ge.jsx)("span",{className:"im-select-label",children:w?.label??"\u8BF7\u9009\u62E9"}),(0,ge.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ge.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&h&&(0,gd.createPortal)((0,ge.jsxs)("div",{id:R,"data-portal":"select-list",className:"im-select-list",style:{left:h.left,top:h.top,width:h.width,maxHeight:h.maxHeight},children:[L&&(0,ge.jsx)("div",{className:"im-select-search",children:(0,ge.jsx)("input",{ref:C,id:W,type:"text",className:"im-select-search-input",value:g,onChange:B=>k(B.target.value),onKeyDown:B=>Y(B,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":R,"aria-activedescendant":y>=0?I(y):void 0})}),(0,ge.jsxs)("ul",{role:"listbox","aria-labelledby":L?W:void 0,className:"im-select-rows",children:[z.length===0&&(0,ge.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),Q.map(B=>(0,ge.jsxs)("li",{role:"presentation",className:"im-select-group",children:[B.label!==""&&(0,ge.jsx)("div",{className:"im-select-group-title",role:"presentation",children:B.label}),(0,ge.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:B.rows.map(A=>{let X=re.get(A)??-1,ee=A.value===t,te=X===y;return(0,ge.jsxs)("li",{id:I(X),role:"option","aria-selected":ee,className:`im-select-option${ee?" is-selected":""}${te?" is-active":""}`,onMouseEnter:()=>b(X),onMouseDown:K=>K.preventDefault(),onClick:()=>H(X),children:[d?(0,ge.jsxs)("span",{className:"im-select-value",children:[d(A),(0,ge.jsx)("span",{className:"im-select-label",children:A.label})]}):(0,ge.jsx)("span",{className:"im-select-label",children:A.label}),ee&&(0,ge.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ge.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},A.value)})})]},B.id||"__ungrouped"))]}),P!==null&&(0,ge.jsx)("div",{className:"im-select-custom",children:(0,ge.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:B=>B.preventDefault(),onClick:()=>V(P),children:(0,ge.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",P,"\u201D"]})})})]}),document.body)]})}var q=require("react/jsx-runtime"),ga=(0,Qe.createContext)(null);function ha(){let e=(0,Qe.useContext)(ga);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function ba(){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(an,{type:"target",position:j.Top,className:"im-handle"}),(0,q.jsx)(an,{type:"source",position:j.Bottom,className:"im-handle"})]})}function ya({children:e}){return(0,q.jsx)("div",{className:"im-rail nodrag",children:e})}function Mt({label:e,onClick:t,danger:n,children:o}){return(0,q.jsx)("button",{type:"button",className:`im-icon-btn nodrag${n?" is-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var bd=(0,Qe.memo)(function({id:t,data:n,selected:o}){let r=ha(),[i,a]=(0,Qe.useState)(!1),s=n.missing||i;return(0,q.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${s?" is-missing":""}`,style:{padding:8,width:144},children:[(0,q.jsx)(ba,{}),s?(0,q.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,q.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:c=>{c.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,(0,q.jsxs)(ya,{children:[(0,q.jsx)(Mt,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,q.jsx)(Me,{name:"eye"})}),(0,q.jsx)(Mt,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,q.jsx)(Me,{name:"crop"})}),(0,q.jsx)(Mt,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,q.jsx)(Me,{name:"expand"})}),(0,q.jsx)(Mt,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,q.jsx)(Me,{name:"grid"})}),(0,q.jsx)(Mt,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,q.jsx)(Me,{name:"wand"})}),(0,q.jsx)(Mt,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,q.jsx)(Me,{name:"image"})}),(0,q.jsx)(Mt,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,q.jsx)(Me,{name:"trash"})})]}),(0,q.jsx)("div",{className:"im-thumb",onDoubleClick:c=>{c.stopPropagation(),r.zoomImage(t)},children:n.url?(0,q.jsx)("img",{src:n.url,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>a(!0)}):(0,q.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,q.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,q.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),hd=4,yd=(0,Qe.memo)(function({id:t,data:n,selected:o}){let r=ha(),i=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",a=n.duplicateCount??0,s=Math.min(Math.max(n.imageCount-1,0),3);return(0,q.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,q.jsx)(ba,{}),(0,q.jsx)(ya,{children:(0,q.jsx)(Mt,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,q.jsx)(Me,{name:"trash"})})}),(0,q.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:s},(c,l)=>(0,q.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*hd}px, ${-(l+1)*hd}px)`}},l)),(0,q.jsxs)("div",{className:"im-group-face",children:[(0,q.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,q.jsxs)("div",{className:"im-group-size",children:[i," MB"]}),a>0?(0,q.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${a} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function ow({from:e}){let[t,n]=(0,Qe.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Qe.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,q.jsx)(q.Fragment,{children:Vu(t)})}var rw={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"},xd=(0,Qe.memo)(function({id:t,data:n,selected:o}){let r=ha(),i=r.config,a=n.status==="queued"||n.status==="running",s=i?.sizes??[],c=i?.qualities??[],l=s.some(d=>d.value===n.size)||!n.size?s:[...s,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],u=i?.qualityEffective!==!1;return(0,q.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,q.jsx)(ba,{}),(0,q.jsxs)(ya,{children:[(0,q.jsx)("span",{className:"im-rail-dot",title:rw[n.status]??"\u5C31\u7EEA",children:(0,q.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,q.jsx)(Mt,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,q.jsx)(Me,{name:"trash"})})]}),(0,q.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,q.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n.prompt,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onChange:d=>r.updatePrompt(t,{prompt:d.target.value})}),(0,q.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:u?"7fr 3fr":"1fr",marginTop:8},children:[(0,q.jsxs)("div",{style:{minWidth:0},children:[(0,q.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,q.jsx)($n,{className:"im-select-fill",options:sd(l,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:d=>r.updatePrompt(t,{size:d})})]}),u?(0,q.jsxs)("div",{style:{minWidth:0},children:[(0,q.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,q.jsx)($n,{className:"im-select-fill",options:c.map(d=>({value:d,label:d})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:d=>r.updatePrompt(t,{quality:d})})]}):null]}),(0,q.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,q.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,q.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:i?.defaultOutputDir??"",onChange:d=>r.updatePrompt(t,{outputDir:d.target.value})})]}),n.status==="running"?(0,q.jsx)(id,{}):null,n.status==="failed"&&n.message?(0,q.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,q.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,q.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${a?" im-btn-busy":""}`,style:{flex:1},disabled:a||!n.prompt.trim(),onClick:d=>{d.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,q.jsx)(ow,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),a?(0,q.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:d=>{d.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var wd=`
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
  --im-r-xs: 4px;
  /* \u8FD9\u4E24\u4E2A\u662F\u539F\u7248\u91CC\u4E13\u5C5E\u7684\u6863\uFF1A\u5DE5\u5177\u680F 13\u3001\u54C1\u724C\u533A hover 12 */
  --im-r-toolbar: 13px;
  --im-r-brand: 12px;

  /* \u9634\u5F71\u8D70\u5BBF\u4E3B elevation\uFF1A\u5199\u6B7B rgba \u5728\u6DF1\u8272\u4E3B\u9898\u4E0B\u7B49\u4E8E\u6CA1\u6709\u9634\u5F71 */
  --im-shadow-card: var(--dsw-elevation-soft, 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.04));
  --im-shadow-float: var(--dsw-elevation-panel, 0 6px 22px rgba(0, 0, 0, 0.12));
  --im-shadow-modal: var(--dsw-elevation-prominent, 0 24px 70px rgba(15, 20, 25, 0.26));
  /* \u5F39\u7A97\u906E\u7F69\uFF1A\u534A\u900F\u660E\u7EAF\u8272\uFF0C\u4E0D\u4E0E\u4EFB\u4F55\u524D\u666F\u914D\u5BF9 */
  --im-scrim: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.32));
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
  padding: 9px 10px;
  position: relative;
  border: 1px solid var(--im-edge-idle);
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
  min-width: 30px;
  min-height: 30px;
  padding: 0;
  border: 0;
  border-radius: var(--im-r-sm);
  background: transparent;
  color: var(--im-ink-2);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.im-icon-btn:hover { background: var(--im-hover); color: var(--im-ink); }
.im-icon-btn.is-danger { color: var(--im-danger); }
.im-icon-btn.is-danger:hover {
  /* \u5E95\u8272\u5FC5\u987B\u4ECE\u540C\u4E00\u4E2A --im-danger \u6D3E\u751F\uFF1A\u76F4\u63A5\u7528\u5BBF\u4E3B\u7684 hover-danger token\uFF0C
     \u5B83\u4F1A\u548C\u8FD9\u91CC\u7684 --im-danger \u6587\u5B57\u8272\u6765\u81EA\u4E24\u5957\u4F53\u7CFB\uFF0C\u6697\u8272\u4E3B\u9898\u4E0B\u5BB9\u6613\u649E\u6210\u770B\u4E0D\u6E05
     \uFF08\u540C\u7C7B\u4E8B\u6545\u89C1\u63D0\u793A\u6761\u300C\u9ED1\u5E95\u9ED1\u5B57\u300D\uFF09\u3002 */
  background: color-mix(in srgb, var(--im-danger) 12%, transparent);
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
  border-radius: var(--im-r-xs);
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
  border-radius: var(--im-r-sm);
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
  /* \u95F4\u8DDD\u7531 .im-root \u7684 gap \u63D0\u4F9B\uFF0C\u8FD9\u91CC\u4E0D\u81EA\u7559\u8FB9\u8DDD */
  margin: 0;
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
  box-shadow: var(--im-shadow-modal);
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

/* ---------------- \u5927\u56FE\u9884\u89C8\uFF08\u79FB\u690D ZoomModal\uFF09 ----------------
   \u906E\u7F69\u4E0E\u575E\u4E0A\u7684\u63A7\u4EF6\u90FD\u538B\u5728\u56FE\u7247\u4E0A\uFF0C\u989C\u8272\u5FC5\u987B\u4E0E\u56FE\u7247\u5185\u5BB9\u5F62\u6210\u5BF9\u6BD4\u3001\u53C8\u4E0E\u4E3B\u9898\u81EA\u6D3D\u3002
   \u505A\u6CD5\uFF1A\u4E00\u5F8B\u4ECE --im-ink \u4E0E --im-surface \u6D3E\u751F\uFF08\u6D45\u8272\u4E3B\u9898 \u2192 \u6DF1\u5E95\u6D45\u5B57\uFF0C\u6697\u8272\u4E3B\u9898 \u2192 \u6D45\u5E95\u6DF1\u5B57\uFF09\uFF0C
   \u4E0D\u5199\u6B7B\u989C\u8272\u3001\u4E5F\u4E0D\u6DF7\u7528\u5BBF\u4E3B\u7684 --dsw-* token\u3002

   \u6CE8\u610F\u8FD9\u4E00\u7EC4\u63A7\u4EF6**\u6545\u610F**\u8DDF\u968F\u4E3B\u9898\u7FFB\u8F6C\uFF0C\u800C\u539F\u7248\u662F\u6052\u5B9A\u6DF1\u5E95\u6D45\u5B57\uFF1A\u539F\u7248\u662F\u72EC\u7ACB\u5E94\u7528\u3001
   \u9884\u89C8\u6C38\u8FDC\u5728\u6DF1\u8272\u80F6\u7247\u4E0A\uFF1B\u63D2\u4EF6\u8981\u8DDF\u5BBF\u4E3B\u660E\u6697\u4E00\u8D77\u8D70\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8BA9\u5BF9\u6BD4\u65B9\u5411\u8DDF\u7740\u4E3B\u9898\u3002
   \u4E24\u79CD\u505A\u6CD5\u90FD\u80FD\u4FDD\u8BC1\u53EF\u8BFB\uFF0C\u8DE8\u4F53\u7CFB\u6DF7\u8272\u624D\u4F1A\u51FA\u73B0\u300C\u9ED1\u5E95\u9ED1\u5B57\u300D\u3002 */
.im-zoom-overlay {
  --im-chrome-bg: color-mix(in srgb, var(--im-ink) 58%, transparent);
  --im-chrome-bg-hover: color-mix(in srgb, var(--im-ink) 76%, transparent);
  --im-chrome-ink: var(--im-surface);
  --im-chrome-line: color-mix(in srgb, var(--im-surface) 24%, transparent);

  position: fixed;
  inset: 0;
  z-index: 60;
  user-select: none;
  background: color-mix(in srgb, var(--im-ink) 62%, transparent);
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
`;var vd={image:bd,prompt:xd,group:yd};var cn=require("react/jsx-runtime"),iw="0 0 1024 1024",aw="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function xa({size:e=30}){return(0,cn.jsx)("svg",{width:e,height:e,viewBox:iw,fill:"var(--im-brand)","aria-hidden":"true",children:(0,cn.jsx)("path",{d:aw})})}function kd({onClick:e}){return(0,cn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,cn.jsx)(xa,{}),(0,cn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var Sd=require("react"),un=require("react/jsx-runtime");function sw(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function Cd(e){return(0,Sd.useMemo)(()=>sw(e),[e])}function Ed({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,un.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,un.jsx)("span",{className:"im-cost-num",children:a}),o?(0,un.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,un.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,un.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Ie=require("react/jsx-runtime");function _d(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(c,l,u)=>(0,Ie.jsx)("button",{type:"button",className:`${u.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:u.title,disabled:u.disabled,onClick:l,children:c});return(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsxs)("div",{className:"im-header",children:[(0,Ie.jsx)(kd,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Ie.jsx)($n,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,Ie.jsx)($n,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,Ie.jsx)(Ed,{summary:e.cost,budget:t?.budget??0}),(0,Ie.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,Ie.jsxs)("div",{className:"im-toolbar",children:[(0,Ie.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,Ie.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,Ie.jsx)(Me,{name:"grip",size:12})]}),(0,Ie.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,Ie.jsx)(Me,{name:"grip",size:12})]})]}),(0,Ie.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,Ie.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var He=require("react/jsx-runtime");function Ht({icon:e,label:t,title:n,active:o,onClick:r}){return(0,He.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,He.jsx)(Me,{name:e,size:14}),(0,He.jsx)("span",{className:"im-dock-row-label",children:t})]})}function Nd(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,He.jsxs)("div",{className:"im-dock nodrag",children:[(0,He.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,He.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,He.jsx)(Ht,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,He.jsx)(Ht,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,He.jsx)(Ht,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,He.jsx)(Ht,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,He.jsx)(Ht,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,He.jsx)(Ht,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,He.jsx)(Ht,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,He.jsx)(Ht,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Be=require("react"),zd=require("react-dom");var wa="application/x-dsh-imagora-canvas",kr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},Md="\u677E\u5F00\u53D6\u6D88";function va(e){return e.dataTransfer?.types.includes("Files")??!1}function co(e,t){if(va(e))return"images";let n=e.dataTransfer?.getData(wa);return n==="prompt"||n==="group"?n:t}function Id(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Pd(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":kr[e]}function ka(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var It=require("react/jsx-runtime"),lw=22,cw=28,Sr=8;function Rd(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,c]=(0,Be.useState)(null),l=(0,Be.useRef)(null),u=(0,Be.useRef)(0),d=(0,Be.useRef)(null),f=(0,Be.useRef)(null),p=(0,Be.useRef)(null),m=(0,Be.useCallback)((x,S)=>{l.current=x,c(x);let C=p.current;C&&C.textContent!==S&&(C.textContent=S)},[]),y=(0,Be.useCallback)(()=>{l.current=null,u.current=0,c(null),f.current?.classList.remove("is-outside")},[]),b=(0,Be.useCallback)((x,S)=>{let C=d.current;if(!C)return;let M=Math.min(x+lw,window.innerWidth-C.offsetWidth-Sr),R=Math.min(S+cw,window.innerHeight-C.offsetHeight-Sr);C.style.transform=`translate(${Math.max(Sr,M)}px, ${Math.max(Sr,R)}px)`},[]),g=(0,Be.useCallback)((x,S,C)=>{let M=t.current;if(!M)return o();let R=M.getBoundingClientRect(),W=C?Math.min(Math.max(x,R.left),R.left+R.width):x,z=C?Math.min(Math.max(S,R.top),R.top+R.height):S;return r({x:W,y:z})},[t,o,r]);(0,Be.useEffect)(()=>{let x=M=>{va(M)&&M.preventDefault()},S=M=>{let R=l.current;if(!R||R==="images")return;b(M.clientX,M.clientY);let W=t.current,z=!!(W&&ka(M.clientX,M.clientY,W.getBoundingClientRect())),L=z?kr[R]:Md,N=p.current;N&&N.textContent!==L&&(N.textContent=L),f.current?.classList.toggle("is-outside",!z)},C=()=>{u.current=0,y()};return window.addEventListener("dragover",x),window.addEventListener("dragover",S),window.addEventListener("drop",x),window.addEventListener("dragend",C),window.addEventListener("blur",C),()=>{window.removeEventListener("dragover",x),window.removeEventListener("dragover",S),window.removeEventListener("drop",x),window.removeEventListener("dragend",C),window.removeEventListener("blur",C)}},[t,y,b]);let k={onDragEnter:x=>{if(n)return;let S=co(x,l.current);S&&(x.preventDefault(),S==="images"&&(u.current+=1),m(S,Pd(S,Id(x.dataTransfer))),b(x.clientX,x.clientY))},onDragOver:x=>{n||!co(x,l.current)||(x.preventDefault(),x.dataTransfer.dropEffect="copy",b(x.clientX,x.clientY))},onDragLeave:x=>{n||co(x,l.current)==="images"&&(u.current-=1,u.current<=0&&y())},onDrop:x=>{if(n)return;let S=co(x,l.current);if(!S)return;x.preventDefault();let C=t.current,M=!C||ka(x.clientX,x.clientY,C.getBoundingClientRect());if(y(),S==="images"){let R=Array.from(x.dataTransfer.files??[]);if(!R.length)return;i(R,g(x.clientX,x.clientY,!0));return}M&&a(S,g(x.clientX,x.clientY,!1))}},h=(0,Be.useCallback)((x,S)=>{x.dataTransfer.setData(wa,S),x.dataTransfer.effectAllowed="copy",m(S,kr[S]),b(x.clientX,x.clientY)},[b,m]),v=(0,zd.createPortal)((0,It.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,It.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,It.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,It.jsx)(Me,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,It.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,It.jsx)(Me,{name:"close",size:14})}),(0,It.jsx)("span",{ref:p,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:v,dragHandlers:k,startToolbarDrag:h,hideDropChip:y}}var Dd="dsh-imagora.canvas-minimap.v1";function Ad(){try{let e=localStorage.getItem(Dd);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Td(e){try{localStorage.setItem(Dd,e?"1":"0")}catch{}}var Bt=require("react/jsx-runtime");function Od(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,Bt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Bt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u5C40\u90E8\u6574\u7406\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u540C\u5C42\u63D0\u793A\u8BCD\u5361\u7247\u6309\u5DE6\u4E0A\u89D2\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Bt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var qe=require("react/jsx-runtime");function $d(){return(0,qe.jsxs)("div",{className:"im-empty",children:[(0,qe.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,qe.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,qe.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var uw=5;function Ld({logs:e}){if(!e.length)return null;let t=e.slice(-uw);return(0,qe.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,qe.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var dw={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Hd({text:e}){return e?(0,qe.jsx)("div",{style:dw,children:e}):null}function Bd({tone:e,children:t,action:n}){return(0,qe.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,qe.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,qe.jsx)(Me,{name:e==="error"?"help":"clock"})}),(0,qe.jsx)("span",{className:"im-banner-text",children:t}),n?(0,qe.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var ye=require("react"),qd=require("react-dom");async function fw(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function Wd(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await fw(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function Fd(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var uo=e=>Math.min(8,Math.max(.2,e));function Vd(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function Gd(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function Xd(e,t,n){return Math.round(e*Gd(t,n)*100)}function Yd(e,t){let n=Gd(e,t);return n?uo(1/n):1}var fe=require("react/jsx-runtime"),Cr=1.2,pw=5;function Ud({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,ye.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,ye.useState)(!1),[c,l]=(0,ye.useState)(null),u=(0,ye.useRef)(null),d=(0,ye.useRef)(!1),f=c?.kind==="copying",p=(0,ye.useRef)(null),[m,y]=(0,ye.useState)(null),b=(0,ye.useRef)({width:0,height:0}),g=(0,ye.useRef)(null),k=(0,ye.useRef)(null),h=(0,ye.useRef)(null),v=(0,ye.useRef)(null),x=(0,ye.useCallback)(E=>{let P=h.current;return P?{zoom:E.zoom,pan:Vd(E.pan,E.zoom,b.current,{width:P.clientWidth,height:P.clientHeight})}:E},[]),S=(0,ye.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),C=(0,ye.useCallback)(()=>{let E=v.current;if(!E)return;b.current={width:E.clientWidth,height:E.clientHeight};let P={width:E.naturalWidth,height:E.naturalHeight};p.current=P,y(D=>D&&D.width===P.width&&D.height===P.height?D:P)},[]);(0,ye.useEffect)(()=>{let E=()=>C();return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[C]);let M=(0,ye.useCallback)(()=>{let E=Yd(p.current,b.current);i(P=>x({zoom:E,pan:P.pan}))},[x]),R=(0,ye.useCallback)(()=>{let E=p.current,P=k.current;if(!E||!P)return;let D=P.clientWidth*.98,F=P.clientHeight*.98,H=uo(Math.min(1,D/E.width,F/E.height));i({zoom:H,pan:{x:0,y:0}})},[]);(0,ye.useEffect)(()=>{let E=h.current;if(!E)return;let P=D=>{D.preventDefault(),D.stopPropagation();let F=E.getBoundingClientRect(),H=D.clientX-F.left-F.width/2,V=D.clientY-F.top-F.height/2;i(U=>{let Y=uo(D.deltaY<0?U.zoom*Cr:U.zoom/Cr);if(Y===U.zoom)return U;let Q=Y/U.zoom;return x({zoom:Y,pan:{x:H-(H-U.pan.x)*Q,y:V-(V-U.pan.y)*Q}})})};return E.addEventListener("wheel",P,{passive:!1}),()=>E.removeEventListener("wheel",P)},[x]),(0,ye.useEffect)(()=>{let E=P=>{P.key==="Escape"&&o()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[o]),(0,ye.useEffect)(()=>()=>{u.current&&window.clearTimeout(u.current)},[]);let W=(E,P)=>{l({kind:E,text:P}),u.current&&window.clearTimeout(u.current),u.current=E==="copying"?null:window.setTimeout(()=>l(null),1200)},z=async(E,P)=>{if(!d.current){d.current=!0,W("copying","\u590D\u5236\u4E2D\u2026");try{await E(),W("copied",P)}catch(D){W("failed",D instanceof Error?D.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},L=E=>{r.zoom<=1||(E.preventDefault(),E.stopPropagation(),E.currentTarget instanceof Element&&E.currentTarget.setPointerCapture(E.pointerId),g.current={startX:E.clientX,startY:E.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:E.target===v.current},s(!0))},N=E=>{let P=g.current;if(!P)return;let D=E.clientX-P.startX,F=E.clientY-P.startY;!P.moved&&Math.hypot(D,F)<=pw||(P.moved=!0,i(H=>x({...H,pan:{x:P.panX+D,y:P.panY+F}})))},w=()=>{let E=g.current;g.current=null,s(!1),E&&!E.moved&&!E.onImage&&o()},I=E=>{let P=E.target instanceof Element?E.target:null;P&&(P.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},_=E=>i(P=>x({...P,zoom:uo(P.zoom*E)}));return(0,qd.createPortal)((0,fe.jsxs)("div",{ref:k,className:"im-zoom-overlay",onPointerDown:I,onClick:E=>E.stopPropagation(),children:[(0,fe.jsx)("div",{ref:h,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:L,onPointerMove:N,onPointerUp:w,onPointerCancel:w,onDoubleClick:E=>{E.stopPropagation(),S()},children:(0,fe.jsx)("img",{ref:v,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let E=v.current;E&&(p.current={width:E.naturalWidth,height:E.naturalHeight},b.current={width:E.clientWidth,height:E.clientHeight},C())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,fe.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,fe.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,fe.jsx)("div",{"aria-hidden":!0}),(0,fe.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,fe.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,fe.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,fe.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,fe.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,fe.jsxs)("div",{className:"im-zoom-group",children:[(0,fe.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>_(1/Cr),children:(0,fe.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,fe.jsx)("path",{d:"M3.5 8h9"})})}),(0,fe.jsxs)("span",{className:"im-zoom-readout",title:`${m?`${m.width}\xD7${m.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[Xd(r.zoom,m,b.current),"%"]}),(0,fe.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>_(Cr),children:(0,fe.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,fe.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,fe.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,fe.jsxs)("div",{className:"im-zoom-group",children:[(0,fe.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:R,children:"\u9002\u5E94\u7A97\u53E3"}),(0,fe.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:M,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,fe.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,fe.jsxs)("div",{className:"im-zoom-group",children:[(0,fe.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void z(()=>Wd(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,fe.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void z(()=>Fd(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,fe.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),c?(0,fe.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var po=require("react");var Wt=require("react"),jd=require("react-dom");var Pt=require("react/jsx-runtime"),Zd=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),fo=[];function Kd(e){return fo[fo.length-1]===e}function ze({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0}){let c=`im-modal-${(0,Wt.useId)()}`,l=`${c}-title`,u=(0,Wt.useRef)(null),d=(0,Wt.useRef)(null),f=(0,Wt.useRef)(o);return f.current=o,(0,Wt.useEffect)(()=>{d.current=document.activeElement instanceof HTMLElement?document.activeElement:null,fo.push(c);let m=u.current;(a?.current??m?.querySelector(Zd)??m)?.focus();let b=g=>{if(!Kd(c))return;if(g.key==="Escape"){if(fd())return;g.preventDefault(),g.stopPropagation(),f.current();return}if(g.key!=="Tab"||!m)return;let k=Array.from(m.querySelectorAll(Zd)).filter(x=>!x.hidden&&x.getAttribute("aria-hidden")!=="true");if(!k.length){g.preventDefault(),m.focus();return}let h=k[0],v=k[k.length-1];!h||!v||(g.shiftKey&&(document.activeElement===h||!m.contains(document.activeElement))?(g.preventDefault(),v.focus()):!g.shiftKey&&document.activeElement===v&&(g.preventDefault(),h.focus()))};return document.addEventListener("keydown",b,!0),()=>{document.removeEventListener("keydown",b,!0);let g=fo.lastIndexOf(c);g>=0&&fo.splice(g,1);let k=d.current;window.setTimeout(()=>k?.focus(),0)}},[a]),(0,jd.createPortal)((0,Pt.jsx)("div",{className:"im-modal-shell",onMouseDown:m=>{s&&m.target===m.currentTarget&&Kd(c)&&o()},children:(0,Pt.jsxs)("section",{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:m=>m.stopPropagation(),children:[(0,Pt.jsxs)("header",{className:"im-modal-header",children:[(0,Pt.jsx)("h2",{id:l,className:"im-modal-title",children:e}),t?(0,Pt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,Pt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,Pt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var se=require("react/jsx-runtime");function Qd({workflows:e=[],onCancel:t,onSubmit:n}){let[o,r]=(0,po.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[i,a]=(0,po.useState)(null),s=o.trim(),c=e.some(u=>u.name===s),l=()=>{if(s){if(c&&i!==s){a(s);return}n(s)}};return i?(0,se.jsx)(ze,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${i}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>a(null),footer:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>a(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,se.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(i),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,se.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,se.jsxs)(ze,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,se.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!s,onClick:l,children:"\u4FDD\u5B58"})]}),children:[(0,se.jsx)("input",{autoFocus:!0,value:o,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:u=>r(u.target.value),onKeyDown:u=>{u.key==="Enter"&&l()}}),e.length?(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,se.jsx)("div",{className:"im-pick-list",children:e.map(u=>(0,se.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>r(u.name),children:[(0,se.jsx)("span",{className:"im-pick-name",children:u.name}),(0,se.jsx)("span",{className:"im-pick-meta",children:u.modified})]},u.name))})]}):null]})}function Jd({workflows:e,onCancel:t,onPick:n}){return(0,se.jsx)(ze,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,se.jsx)("div",{style:{display:"grid",gap:2},children:e.map(o=>(0,se.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",style:{display:"flex",justifyContent:"space-between",width:"100%"},onClick:()=>n(o.name),children:[(0,se.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o.name}),(0,se.jsx)("span",{style:{color:"var(--im-ink-3)",fontSize:11,flex:"none"},children:new Date(o.modified).toLocaleString()})]},o.name))}):(0,se.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-ink-3)"},children:"\u8FD8\u6CA1\u6709\u4FDD\u5B58\u8FC7\u7684\u5DE5\u4F5C\u6D41\u3002"})})}var mw=[["\u753B\u5E03","\u6EDA\u8F6E\u7F29\u653E \xB7 \u5DE6\u952E\u62D6\u7A7A\u767D\u5E73\u79FB \xB7 Shift+\u62D6\u62FD\u6846\u9009 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927"],["\u8282\u70B9","\u60AC\u505C\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 Del \u5220\u9664\u9009\u4E2D"],["\u8FDE\u7EBF","\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF08\u53C2\u8003\u56FE\uFF09\uFF1B\u63D0\u793A\u8BCD \u2192 \u56FE\u7247\uFF08\u4EA7\u51FA\uFF09"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 Delete \u5220\u9664"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function ef({onClose:e,config:t}){return(0,se.jsx)(ze,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u753B\u5E03\u3001\u8282\u70B9\u3001\u8FDE\u7EBF\u4E0E\u5FEB\u6377\u952E\u901F\u67E5\u3002",size:"lg",onClose:e,footer:(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,se.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,se.jsx)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12,fontSize:12},children:mw.map(([n,o])=>(0,se.jsxs)(po.Fragment,{children:[(0,se.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,se.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,se.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,se.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var Je=require("react");function Ue(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function nf(e,t=.06){let n=Ue(e.width,t,1),o=Ue(e.height,t,1);return{width:n,height:o,x:Ue(e.x,0,1-n),y:Ue(e.y,0,1-o)}}function of(e,t,n){return{...e,x:Ue(e.x+t,0,1-e.width),y:Ue(e.y+n,0,1-e.height)}}function rf(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let u=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=u,a.height*=u,a.width<.06||a.height<.06){let p=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=p,a.height*=p}a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);return a.x=Ue(a.x,0,1-a.width),a.y=Ue(a.y,0,1-a.height),a}function af(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ue(e.x+(e.width-r)/2,0,1-r),y:Ue(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function Sa(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function gw(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function sf(e,t){let n=gw(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function Ca(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Ft(e){let t=await Ca(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function lf(e,t){let n=await Ca(e);if(t)return tf(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return tf(n,r,i,o,o)}async function cf(e,t){let n=await Ca(e),{width:o,height:r}=Sa(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?hw(n,o,r):uf(n,n.width,n.height,o,r,t.algorithm)}function tf(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function hw(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=df(o,r,i,a,s,"high"),r=a,i=s}return uf(o,r,i,t,n,"high")}function uf(e,t,n,o,r,i){return df(e,t,n,o,r,i).toDataURL("image/png")}function df(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Re=require("react/jsx-runtime"),ff=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],yw=["nw","n","ne","e","se","s","sw","w"],Ea={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function pf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Je.useRef)(null),[i,a]=(0,Je.useState)(null),[s,c]=(0,Je.useState)({x:.08,y:.08,width:.84,height:.84}),[l,u]=(0,Je.useState)(null),[d,f]=(0,Je.useState)(!1),[p,m]=(0,Je.useState)(null),y=(0,Je.useRef)(null);(0,Je.useEffect)(()=>{let C=!0;return Ft(e).then(M=>{C&&(a(M),c(nf({x:.06,y:.06,width:.88,height:.88})))}).catch(M=>{C&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ae(M)}`)}),()=>{C=!1}},[e]);let b=C=>{u(C),i&&C!==null&&c(M=>af(M,C,i))},g=(C,M)=>{C.stopPropagation(),C.target.setPointerCapture?.(C.pointerId),y.current={mode:M,startX:C.clientX,startY:C.clientY,base:s}},k=(0,Je.useCallback)(C=>{let M=y.current,R=r.current;if(!M||!R)return;let W=R.getBoundingClientRect();if(!W.width||!W.height)return;let z=(C.clientX-M.startX)/W.width,L=(C.clientY-M.startY)/W.height;c(M.mode==="move"?of(M.base,z,L):rf(M.base,z,L,M.mode,l,i??{width:1,height:1}))},[l,i]),h=()=>{y.current=null},v=async()=>{f(!0),m(null);try{let C=await lf(e,s),M=Math.round(s.width*(i?.width??0)),R=Math.round(s.height*(i?.height??0));await o(C,`\u88C1\u526A ${M}\xD7${R}${l?` \xB7 ${ff.find(W=>W.ratio===l)?.label}`:""}`)}catch(C){m(`\u88C1\u526A\u5931\u8D25\uFF1A${ae(C)}`)}finally{f(!1)}},x=i?Math.round(s.width*i.width):0,S=i?Math.round(s.height*i.height):0;return(0,Re.jsx)(ze,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",x," \xD7 ",S,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${sf(i.width,i.height)}`:"",(0,Re.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||x<8||S<8,onClick:()=>void v(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),ff.map(C=>(0,Re.jsx)("button",{type:"button","aria-pressed":C.ratio===l,className:`im-btn-sm ${C.ratio===l?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>b(C.ratio),children:C.label},C.label))]}),(0,Re.jsxs)("div",{ref:r,onPointerMove:k,onPointerUp:h,onPointerCancel:h,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Re.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Re.jsx)("div",{onPointerDown:C=>g(C,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:yw.map(C=>(0,Re.jsx)("span",{onPointerDown:M=>g(M,C),style:{position:"absolute",left:Ea[C].left,top:Ea[C].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:Ea[C].cursor}},C))})]}),p?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var We=require("react");function _a(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Na(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Ma(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Na(e)*n/2}function mf(e,t,n=.004){if(!_a(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function gf(e,t,n,o){if(!_a(e)||!_a(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/r);if(c<=1)return[];let l=Math.min(c,2048),u=[];for(let d=1;d<l;d+=1){let f=d/l;u.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return u}function xw(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function hf(e){return!xw(e)}var Ce=require("react/jsx-runtime"),Er=640;function bf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,We.useRef)(null),i=(0,We.useRef)(null),a=(0,We.useRef)(!1),[s,c]=(0,We.useState)(null),[l,u]=(0,We.useState)([]),[d,f]=(0,We.useState)("paint"),[p,m]=(0,We.useState)(.08),[y,b]=(0,We.useState)(!1),[g,k]=(0,We.useState)(null);(0,We.useEffect)(()=>{let z=!0;Ft(e).then(N=>{z&&c(N)}).catch(N=>{z&&k(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ae(N)}`)});let L=new Image;return L.crossOrigin="anonymous",L.onload=()=>{i.current=L},L.src=e,()=>{z=!1,i.current=null}},[e]);let h=(0,We.useMemo)(()=>s?s.width>=s.height?{width:Er,height:Math.round(s.height/s.width*Er)}:{width:Math.round(s.width/s.height*Er),height:Er}:{width:0,height:0},[s]);(0,We.useEffect)(()=>{let z=r.current,L=i.current;if(!z||!L||!h.width)return;let N=z.getContext("2d");if(!N||(z.width=h.width,z.height=h.height,N.clearRect(0,0,h.width,h.height),N.drawImage(L,0,0,h.width,h.height),!s))return;let w=Ma(p,{width:h.width,height:h.height});N.save(),N.globalAlpha=.55,N.fillStyle="#ffffff",N.strokeStyle="#ffffff",N.lineWidth=w*2,N.lineCap="round",N.lineJoin="round";for(let I of l){I.mode==="erase"?(N.globalCompositeOperation="destination-out",N.strokeStyle="#000",N.fillStyle="#000"):(N.globalCompositeOperation="source-over",N.strokeStyle="#ffffff",N.fillStyle="#ffffff");let _=I.points;if(_.length&&(N.beginPath(),N.arc(_[0].x*h.width,_[0].y*h.height,w,0,Math.PI*2),N.fill(),_.length>1)){N.beginPath(),N.moveTo(_[0].x*h.width,_[0].y*h.height);for(let E of _.slice(1))N.lineTo(E.x*h.width,E.y*h.height);N.stroke()}}N.restore()},[h,l,p,s]);let v=z=>{let L=r.current;if(!L)return null;let N=L.getBoundingClientRect();return!N.width||!N.height?null:{x:Math.min(1,Math.max(0,(z.clientX-N.left)/N.width)),y:Math.min(1,Math.max(0,(z.clientY-N.top)/N.height))}},x=z=>{let L=v(z);L&&(z.currentTarget.setPointerCapture?.(z.pointerId),a.current=!0,u(N=>[...N,{mode:d,size:p,points:[L]}]))},S=z=>{if(!a.current)return;let L=v(z);L&&u(N=>{let w=N[N.length-1];if(!w)return N;let I=mf(w.points,L);return I===w.points?N:[...N.slice(0,-1),{...w,points:I}]})},C=()=>{a.current=!1},M=async()=>{if(!i.current||!s)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let L=document.createElement("canvas");L.width=s.width,L.height=s.height;let N=L.getContext("2d");if(!N)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");N.fillStyle="#ffffff",N.fillRect(0,0,s.width,s.height);let w=Ma(p,{width:s.width,height:s.height});N.globalCompositeOperation="destination-out",N.lineWidth=w*2,N.lineCap="round",N.lineJoin="round",N.strokeStyle="#000",N.fillStyle="#000";for(let I of l){if(I.mode!=="paint")continue;let _=gf(I.points[0],I.points[I.points.length-1],w/4,{width:s.width,height:s.height});if(_.length&&(N.beginPath(),N.arc(_[0].x*s.width,_[0].y*s.height,w,0,Math.PI*2),N.fill(),_.length>1)){N.beginPath(),N.moveTo(_[0].x*s.width,_[0].y*s.height);for(let E of _.slice(1))N.lineTo(E.x*s.width,E.y*s.height);N.stroke()}}return L.toDataURL("image/png")},R=async()=>{b(!0),k(null);try{let z=await M();await o(z,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(z){k(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${ae(z)}`)}finally{b(!1)}},W=hf(l);return(0,Ce.jsx)(ze,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Ce.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:y||W,onClick:()=>void R(),children:y?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,Ce.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ce.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ce.jsx)("button",{type:"button","aria-pressed":d==="paint",className:`im-btn-sm ${d==="paint"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("paint"),children:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"}),(0,Ce.jsx)("button",{type:"button","aria-pressed":d==="erase",className:`im-btn-sm ${d==="erase"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("erase"),children:"\u64E6"}),(0,Ce.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,Ce.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(p*100),onChange:z=>m(Na(Number(z.target.value)/100)),className:"im-range"}),(0,Ce.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(p*100),"%"]})]}),(0,Ce.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>u([]),children:"\u6E05\u7A7A"}),(0,Ce.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,Ce.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,Ce.jsx)("canvas",{ref:r,onPointerDown:x,onPointerMove:S,onPointerUp:C,onPointerCancel:C,style:{width:h.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,Ce.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",s?` \xB7 \u539F\u56FE ${s.width} \xD7 ${s.height}`:""]}),g?(0,Ce.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:g}):null]})})}var zt=require("react");var De=require("react/jsx-runtime"),Sw={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(132px, 1fr))",gap:10};function yf({onClose:e,onImport:t}){let[n,o]=(0,zt.useState)(null),[r,i]=(0,zt.useState)(null),[a,s]=(0,zt.useState)([]),[c,l]=(0,zt.useState)("");(0,zt.useEffect)(()=>{let f=!1;return mu().then(p=>{if(f)return;let m=[...p.images].sort((y,b)=>String(b.createdAt).localeCompare(String(y.createdAt)));o(m)}).catch(p=>{f||i(ae(p))}),()=>{f=!0}},[]);let u=(0,zt.useMemo)(()=>{if(!n)return[];let f=c.trim().toLowerCase();return f?n.filter(p=>p.name.toLowerCase().includes(f)):n},[n,c]),d=f=>{s(p=>p.includes(f)?p.filter(m=>m!==f):[...p,f])};return(0,De.jsx)(ze,{title:"\u751F\u6210\u5386\u53F2",subtitle:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE\u3002",size:"wide",onClose:e,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!a.length,onClick:()=>t((n??[]).filter(f=>a.includes(f.id))),children:"\u653E\u5165\u753B\u5E03"})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("p",{className:"im-modal-note",children:["\u5171 ",u.length," \u5F20",c.trim()?"\uFF08\u5DF2\u7B5B\u9009\uFF09":"",a.length?` \xB7 \u9009\u4E2D ${a.length}`:""]}),(0,De.jsx)("input",{type:"search",value:c,placeholder:"\u6309\u6587\u4EF6\u540D\u7B5B\u9009","aria-label":"\u6309\u6587\u4EF6\u540D\u7B5B\u9009",className:"im-field",onChange:f=>l(f.target.value)}),r?(0,De.jsxs)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:["\u8BFB\u53D6\u5931\u8D25\uFF1A",r]}):null,n===null&&!r?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-ink-3)"},children:"\u8BFB\u53D6\u4E2D\u2026"}):null,n&&n.length===0?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-ink-3)"},children:"\u8FD8\u6CA1\u6709\u751F\u6210\u8FC7\u56FE\u7247\u3002"}):null,u.length?(0,De.jsx)("div",{style:Sw,children:u.map(f=>{let p=a.includes(f.id);return(0,De.jsxs)("button",{type:"button",onClick:()=>d(f.id),title:`${f.name}
${f.createdAt}`,style:{position:"relative",padding:0,border:`2px solid ${p?"var(--im-brand)":"var(--im-line)"}`,borderRadius:8,overflow:"hidden",background:"var(--im-surface-inset)",cursor:"pointer",aspectRatio:"1 / 1"},children:[(0,De.jsx)("img",{src:f.url,alt:f.name,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),(0,De.jsx)("span",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"3px 5px",fontSize:10,lineHeight:1.4,textAlign:"left",color:"#fff",background:"linear-gradient(transparent, rgba(0,0,0,.72))",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name})]},f.id)})}):null,(0,De.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u9009\u4E2D\u7684\u56FE\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03\u3002"})]})})}var yt=require("react");var ve=require("react/jsx-runtime");async function Cw(e,t,n,o){let r=await new Promise((c,l)=>{let u=new Image;u.onload=()=>c(u),u.onerror=()=>l(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),u.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let c=0;c<n;c+=1)for(let l=0;l<t;l+=1){let u=document.createElement("canvas");u.width=i,u.height=a;let d=u.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,l*i,c*a,i,a,0,0,i,a),s.push(u.toDataURL("image/png"))}return s}var Ew="52vh";function xf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,yt.useState)(null),[i,a]=(0,yt.useState)(2),[s,c]=(0,yt.useState)(2),[l,u]=(0,yt.useState)(!1),[d,f]=(0,yt.useState)(null);(0,yt.useEffect)(()=>{let b=!0;return Ft(e).then(g=>{b&&r(g)}).catch(g=>{b&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ae(g)}`)}),()=>{b=!1}},[e]);let p=(0,yt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),m=async()=>{if(o){u(!0),f(null);try{let b=await Cw(e,i,s,o);await n(b.map((g,k)=>({dataUrl:g,note:`\u5207\u5206 ${k+1}/${b.length}`})))}catch(b){f(`\u5207\u5206\u5931\u8D25\uFF1A${ae(b)}`)}finally{u(!1)}}},y=i*s;return(0,ve.jsx)(ze,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ve.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||y<2,onClick:()=>void m(),children:l?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${y} \u5F20`})]}),children:(0,ve.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ve.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,ve.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,ve.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:b=>a(Number(b.target.value)),className:"im-range"}),(0,ve.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,ve.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,ve.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:b=>c(Number(b.target.value)),className:"im-range"}),(0,ve.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,ve.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[y," \u5F20 \xB7 \u6BCF\u5F20 ",p.w," \xD7 ",p.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,ve.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,ve.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${Ew} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(b,g)=>(0,ve.jsx)("span",{style:{position:"absolute",left:`${(g+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${g}`)),Array.from({length:s-1},(b,g)=>(0,ve.jsx)("span",{style:{position:"absolute",top:`${(g+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${g}`))]})}),(0,ve.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,ve.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var xt=require("react");var Ee=require("react/jsx-runtime"),wf=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],vf=[1024,1536,2048,3072,4096];function Sf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,xt.useState)(null),[i,a]=(0,xt.useState)(2048),[s,c]=(0,xt.useState)("high"),[l,u]=(0,xt.useState)(!1),[d,f]=(0,xt.useState)(null);(0,xt.useEffect)(()=>{let g=!0;return Ft(e).then(k=>{if(!g)return;r(k);let h=Math.max(k.width,k.height),v=vf.find(x=>x>h)??4096;a(v)}).catch(k=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ae(k)}`)}),()=>{g=!1}},[e]);let p=(0,xt.useMemo)(()=>o?Sa(o.width,o.height,i):{width:0,height:0},[o,i]),m=o&&o.width>0?p.width/o.width:0,y=!!o&&p.width<o.width,b=async()=>{u(!0),f(null);try{let g=await cf(e,{targetLongEdge:i,algorithm:s});await n(g,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${wf.find(k=>k.value===s)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${ae(g)}`)}finally{u(!1)}};return(0,Ee.jsx)(ze,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||p.width<8||p.height<8,onClick:()=>void b(),children:l?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ee.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Ee.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ee.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),vf.map(g=>(0,Ee.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(g),children:g},g))]}),(0,Ee.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ee.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),wf.map(g=>(0,Ee.jsx)("button",{type:"button","aria-pressed":g.value===s,className:`im-btn-sm ${g.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(g.value),children:g.label},g.value))]}),(0,Ee.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Ee.jsxs)(Ee.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Ee.jsxs)("b",{style:{color:y?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),m?` \xB7 ${m.toFixed(2)}\xD7`:"",y?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Ee.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Ee.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var Ia=require("react/jsx-runtime");function Cf({guides:e}){return e.length?(0,Ia.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,Ia.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var _r=require("react");var Ae=require("react/jsx-runtime");function Ef({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,_r.useState)(""),i=(0,_r.useMemo)(()=>Yu(o),[o]),a=o.trim().length>0,s=i.cards,c=i.issues??[];return(0,Ae.jsx)(ze,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u5B9E\u65F6\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u3002",size:"lg",onClose:t,footer:(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ae.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!s.length||c.length>0,onClick:()=>n(s),children:["\u5EFA ",s.length," \u5F20\u5361"]})]}),children:(0,Ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ae.jsxs)("p",{style:{margin:0,fontSize:12.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,Ae.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,Ae.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u683C\u5F0F\u4E0D\u5BF9\u7684\u5757\u4E0D\u4F1A\u5EFA\u5361\uFF0C\u4F1A\u5728\u4E0B\u9762\u6807\u51FA\u6765\u3002"]}),(0,Ae.jsx)("textarea",{value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace"},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),a?(0,Ae.jsxs)("div",{style:{fontSize:12,display:"grid",gap:4},children:[(0,Ae.jsxs)("strong",{style:{fontWeight:600},children:["\u8BC6\u522B\u5230 ",s.length," \u5F20\u5361",c.length?`\uFF0C${c.length} \u5904\u9700\u8981\u4FEE\u6B63`:""]}),s.slice(0,8).map((l,u)=>(0,Ae.jsxs)("div",{style:{color:"var(--im-ink-2)"},children:[u+1,". ",l.title?`${l.title} \xB7 `:"",l.ratio?`\u6BD4\u4F8B ${l.ratio}`:"\u6BD4\u4F8B\u6309\u9ED8\u8BA4",l.prompt?` \xB7 ${l.prompt.slice(0,46)}${l.prompt.length>46?"\u2026":""}`:" \xB7 \u63D0\u793A\u8BCD\u4E3A\u7A7A"]},`${u}-${l.title??""}`)),s.length>8?(0,Ae.jsxs)("div",{style:{color:"var(--im-ink-3)"},children:["\u2026\u8FD8\u6709 ",s.length-8," \u5F20"]}):null,c.slice(0,5).map((l,u)=>(0,Ae.jsxs)("div",{style:{color:"var(--im-danger)"},children:[l.title?`\u300C${l.title}\u300D\uFF1A`:"",l.message]},`issue-${u}`))]}):null,(0,Ae.jsxs)("span",{style:{fontSize:11,color:"var(--im-ink-3)"},children:["\u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var dn=require("react");var Mr=require("react");za();var Ze=require("react/jsx-runtime");function Mf({config:e,onSaved:t,onFlash:n}){let o=Pa(),[r,i]=(0,Mr.useState)(""),[a,s]=(0,Mr.useState)(""),[c,l]=(0,Mr.useState)(!1),u=e?.defaultOutputDir??"",d=async p=>{l(!0);try{let m=await io(p);t(m),i(""),n(p?"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0":"\u5DF2\u56DE\u5230\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ae(m)}`)}finally{l(!1)}},f=async p=>{l(!0);try{let m=await Eu(p);t(m),s(""),n(p>0?`\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${p.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ae(m)}`)}finally{l(!1)}};return(0,Ze.jsxs)("div",{style:{display:"grid",gap:8,paddingTop:10,borderTop:"1px solid var(--im-line)"},children:[(0,Ze.jsx)("span",{className:"im-label",children:"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84"}),(0,Ze.jsx)(o.SettingsValueField,{id:"imagora-output-dir",label:"\u56FE\u7247\u843D\u76D8\u76EE\u5F55",hint:`\u7559\u7A7A\u5219\u7528 ${u||"\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output"}\uFF1B\u5DF2\u4FDD\u5B58\u7684\u503C\u4F1A\u4E00\u76F4\u751F\u6548`,text:r===""?u:r,placeholder:"\u7559\u7A7A = \u7528\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output",disabled:c,onEdit:p=>i(p)}),(0,Ze.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void gr(u),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!r.trim()||r.trim()===u,onClick:()=>void d(r.trim()),children:"\u8BBE\u4E3A\u9ED8\u8BA4"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void d(""),children:"\u56DE\u5230\u9ED8\u8BA4"})]}),(0,Ze.jsx)("span",{className:"im-label",style:{marginTop:6},children:"\u9884\u7B97\u4E0A\u9650"}),(0,Ze.jsx)(o.SettingsValueField,{id:"imagora-budget",label:"\u672C\u753B\u5E03\u6700\u591A\u82B1\u591A\u5C11\uFF08\u5143\uFF09",hint:e?.budget?`\u5F53\u524D\u4E0A\u9650 \xA5${e.budget.toFixed(2)}\uFF1B\u82B1\u5230\u4E0A\u9650\u65F6\u65B0\u4EFB\u52A1\u4F1A\u88AB\u62D2\u7EDD`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\uFF1B\u8BBE\u4E86\u4E4B\u540E\u82B1\u5230\u4E0A\u9650\u4F1A\u62D2\u7EDD\u65B0\u4EFB\u52A1",text:a===""?e?.budget?String(e.budget):"":a,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",numeric:!0,disabled:c,onEdit:p=>s(p)}),(0,Ze.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!a.trim(),onClick:()=>void f(Number(a)),children:"\u4FDD\u5B58\u9884\u7B97"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c||!e?.budget,onClick:()=>void f(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})}var Ir=require("react");var Pe=require("react/jsx-runtime");function If({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,Ir.useState)(""),[i,a]=(0,Ir.useState)(""),[s,c]=(0,Ir.useState)(!1),l=e?.imagoraRoot??"",u=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async m=>{c(!0);try{let y=await _u({title:m==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:m==="root"?l:d});if(!y.ok){if(y.reason==="cancelled")return;n(y.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${y.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let b=m==="root"?await ia(y.path||""):await io(y.path||"");t(b),m==="root"?r(""):a(""),n(m==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(y){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ae(y)}`)}finally{c(!1)}},p=async(m,y)=>{c(!0);try{let b=m==="root"?await ia(y):await io(y);t(b),m==="root"?r(""):a(""),n(y?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ae(b)}`)}finally{c(!1)}};return(0,Pe.jsxs)("div",{className:"im-fieldset",children:[(0,Pe.jsxs)("div",{children:[(0,Pe.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,Pe.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?l:o,placeholder:"\u4F8B\u5982 D:\\ProjectSomething\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:m=>r(m.target.value)}),(0,Pe.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,Pe.jsxs)("div",{className:"im-field-actions",children:[(0,Pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===l,onClick:()=>void p("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!l,onClick:()=>void p("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,Pe.jsxs)("div",{children:[(0,Pe.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,Pe.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?u:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:m=>a(m.target.value)}),(0,Pe.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",u?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,Pe.jsxs)("div",{className:"im-field-actions",children:[(0,Pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===u,onClick:()=>void p("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void gr(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void p("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var me=require("react/jsx-runtime");function Ra({id:e,label:t,hint:n,state:o,stateTone:r,children:i}){return(0,me.jsxs)("div",{children:[(0,me.jsxs)("label",{className:"im-label",htmlFor:e,children:[t,o?(0,me.jsx)("span",{className:`im-field-state is-${r??"ok"}`,children:o}):null]}),i,n?(0,me.jsx)("p",{className:"im-field-hint",children:n}):null]})}function Pf({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,dn.useState)(r?.baseUrl??""),[c,l]=(0,dn.useState)(r?.model??""),[u,d]=(0,dn.useState)(""),[f,p]=(0,dn.useState)(!1),[m,y]=(0,dn.useState)(null),[b,g]=(0,dn.useState)([]),k=async()=>{p(!0);try{let x=await aa({baseUrl:a.trim(),model:c.trim(),apiKey:u.trim()});n(x),d(""),o("\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(x){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ae(x)}`)}finally{p(!1)}},h=async()=>{p(!0);try{let x=await aa({reset:!0});n(x),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(x){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${ae(x)}`)}finally{p(!1)}},v=async()=>{p(!0),y(null);try{let x=await Nu({baseUrl:a.trim(),apiKey:u.trim()});g(x.models??[]),y(x.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${x.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(x){g([]),y(`\u8FDE\u4E0D\u901A\uFF1A${ae(x)}`)}finally{p(!1)}};return(0,me.jsx)(ze,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u586B\u4E00\u6B21\u63A5\u53E3\u5730\u5740\u548C API Key \u5C31\u80FD\u7528\uFF0C\u4E0D\u9700\u8981\u672C\u673A\u88C5 Imagora\u3002",size:"lg",onClose:t,footer:(0,me.jsxs)(me.Fragment,{children:[i?(0,me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void h(),children:"\u6E05\u7A7A\u5E76\u56DE\u5230 Imagora \u914D\u7F6E"}):null,(0,me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:t,children:"\u53D6\u6D88"}),(0,me.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:f||!a.trim(),onClick:()=>void k(),children:"\u4FDD\u5B58"})]}),children:(0,me.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,me.jsx)("p",{style:{margin:0,fontSize:12.5,color:"var(--im-ink-3)",lineHeight:1.7},children:i?"\u5F53\u524D\u7528\u7684\u662F\u63D2\u4EF6\u5185\u914D\u7F6E\u3002":"\u5F53\u524D\u7528\u7684\u662F\u672C\u673A Imagora \u7684\u914D\u7F6E\u3002"}),(0,me.jsx)(Ra,{id:"imagora-provider-base-url",label:"\u63A5\u53E3\u5730\u5740",hint:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\uFF0C\u4F8B\u5982 https://api.example.com/v1",children:(0,me.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:f,onChange:x=>s(x.target.value)})}),(0,me.jsx)(Ra,{id:"imagora-provider-api-key",label:"API Key",hint:"\u53EA\u5B58\u5728\u672C\u673A ~/.dsh/imagora/settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7",state:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E",stateTone:r?.apiKeyConfigured?"ok":"warn",children:(0,me.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:u,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:f,onChange:x=>d(x.target.value)})}),(0,me.jsx)(Ra,{id:"imagora-provider-model",label:"\u6A21\u578B\u540D",hint:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628",children:(0,me.jsx)("input",{id:"imagora-provider-model",className:"im-field",value:c,placeholder:"gpt-image-2.5-flare",disabled:f,onChange:x=>l(x.target.value)})}),(0,me.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void v(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),m?(0,me.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:m}):null]}),b.length?(0,me.jsx)("div",{style:{fontSize:12,color:"var(--im-ink-2)"},children:b.slice(0,40).map(x=>(0,me.jsx)("button",{type:"button",onClick:()=>l(x),style:{display:"block",border:"none",background:"none",padding:"2px 0",cursor:"pointer",color:x===c?"var(--im-brand)":"var(--im-ink-2)",font:"inherit",textAlign:"left"},children:x},x))}):null,(0,me.jsx)(If,{config:e,onSaved:n,onFlash:o}),(0,me.jsx)(Mf,{config:e,onSaved:n,onFlash:o})]})})}var Ln=require("react");function zf({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i}){let a=(0,Ln.useCallback)(async(d,f)=>{let p=d.filter(Au);if(!p.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}for(let[m,y]of p.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let b=await mr(y,y.name||`pasted-${Date.now()}.png`),g=sn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},{x:f.x+m*172,y:f.y});t(k=>[...k,g]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`)}catch(b){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${ae(b)}`)}},[t,o,r]),s=(0,Ln.useCallback)((d,f,p)=>{let m=f?p(f):n();a(d,m)},[a,n]),c=(0,Ln.useCallback)(d=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let p=f.files?.[0];if(p)try{let m=await mr(p,p.name);t(y=>y.map(b=>b.id===d&&b.type==="image"?{...b,data:{...b.data,registryId:m.id,name:m.name,url:m.url,size:m.size,ext:m.ext,absPath:m.absPath,missing:!1}}:b)),o(`\u5DF2\u66FF\u6362\u4E3A ${m.name}`)}catch(m){o(`\u66FF\u6362\u5931\u8D25\uFF1A${ae(m)}`)}},f.click()},[t,o]),l=(0,Ln.useCallback)(d=>{let f=e.current.find(p=>p.id===d);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name,path:f.data.absPath})},[e,i]),u=(0,Ln.useCallback)(async(d,f,p)=>{let m=await fetch(d).then(h=>h.blob()),y=f.endsWith(".png")?f:`${f}.png`,b=await mr(m,y),g=p??n(),k=sn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},g);return t(h=>[...h,k]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`),b},[t,o,n]);return{addImages:a,dropFiles:s,replaceImage:c,openPreview:l,addDataUrl:u}}function Rf(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Vt=require("react");function Df({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let c=(0,Vt.useCallback)((p,m)=>{let b=(Array.isArray(m.results)?m.results:[]).filter(x=>x.status==="ok"&&x.assetId&&x.url),g=e.current.find(x=>x.id===p&&x.type==="prompt"),k=[];if(g&&g.type==="prompt"){let x=xr(g).height;b.forEach((S,C)=>{k.push(sn({id:String(S.assetId),relPath:S.name??"result.png",name:S.name??"result.png",url:String(S.url),size:S.bytes??0,ext:String(S.ext??"png"),absPath:S.absPath??"",createdAt:new Date().toISOString()},{x:g.position.x+C*172,y:g.position.y+x+56}))})}n(x=>{let S=[...x,...k];return dt(S,p,{status:m.status==="done"?"done":m.status==="cancelled"?"idle":"failed",resultCount:b.length,message:m.error??void 0,startedAtMs:void 0,cancelRequested:!1})}),k.length&&o(x=>{let S=k.map(C=>({id:`${p}->${C.id}`,source:p,target:C.id,animated:!0})).filter(C=>!x.some(M=>M.id===C.id));return S.length?[...x,...S]:x}),a.current.delete(p);let h=s.current.get(p);h&&window.clearTimeout(h),s.current.delete(p);let v=m.totalCost??0;v>0&&n(x=>{let S=x.find(M=>M.id===p),C=Number(S?.data?.cost??0);return dt(x,p,{cost:C+v})}),r(m.status==="done"?`\u5B8C\u6210 \xB7 ${b.length} \u5F20${v?` \xB7 ${v.toFixed(2)} \u5143`:""}`:`${m.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${m.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),l=(0,Vt.useCallback)((p,m)=>{let y=async()=>{try{let b=await bu(m);if(b.status==="queued")n(g=>dt(g,p,{status:"queued"}));else if(b.status==="running")n(g=>dt(g,p,{status:"running",startedAtMs:b.startedAt??Date.now(),cancelRequested:b.cancelRequested}));else{c(p,b);return}}catch(b){r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${ae(b)}`)}s.current.set(p,window.setTimeout(y,1200))};y()},[c,r,n,s]),u=(0,Vt.useCallback)(async p=>{let m=e.current.find(b=>b.id===p);if(!m||m.type!=="prompt")return;if(!m.data.prompt.trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let y=Wu(e.current,t.current,p,m.data.prompt);if(y.mode==="invalid"){let b=y.unknown.map(g=>`@${g}`).join("\u3001");n(g=>dt(g,p,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${b}`}));return}try{let b=await hu({prompt:m.data.prompt,size:m.data.size,quality:m.data.quality,refIds:y.images.map(g=>g.type==="image"?g.data.registryId:"").filter(Boolean),outputDir:m.data.outputDir,spent:e.current.reduce((g,k)=>g+Number(k.data?.cost??0),0),mask:y.images.map(g=>g.type==="image"?g.data.maskDataUrl:"").find(Boolean)||""});a.current.set(p,b.taskId),n(g=>dt(g,p,{status:"queued",startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${y.images.length} \u5F20 \xB7 ${m.data.size}`),l(p,b.taskId)}catch(b){let g=ae(b);n(k=>dt(k,p,{status:"failed",message:g})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${g}`)}},[e,t,n,i,r,l,a]),d=(0,Vt.useCallback)(async p=>{let m=a.current.get(p);if(n(y=>dt(y,p,{cancelRequested:!0})),!!m)try{await yu(m)}catch(y){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${ae(y)}`)}},[n,r,a]),f=(0,Vt.useCallback)(p=>{for(let m of p)u(m)},[u]);return(0,Vt.useEffect)(()=>{let p=s.current;return()=>{for(let m of p.values())window.clearTimeout(m);p.clear()}},[s]),{runPrompt:u,cancelPrompt:d,runMany:f}}var rt=require("react");function Af(e){let[t,n]=(0,rt.useState)(null),[o,r]=(0,rt.useState)([]),i=(0,rt.useRef)(null),a=(0,rt.useCallback)(u=>{n(u),i.current=u,r(u.issues)},[]),s=(0,rt.useCallback)(async()=>{try{a(await pu())}catch(u){r([ae(u)])}},[a]);(0,rt.useEffect)(()=>{s()},[s]);let c=(0,rt.useCallback)(async u=>{try{let d=await Cu(u);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ae(d)}`)}},[a,e]),l=(0,rt.useCallback)(async u=>{try{let d=await Su(u);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ae(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:l,replaceConfig:a}}var fn=require("react");function mo(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Tf(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(mo(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(mo(r)),mo(i)):null},restore(r){let i=o.shift();return i?(n.push(mo(r)),mo(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Of({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,fn.useRef)(Tf(50)),a=(0,fn.useCallback)(()=>{i.current.record({nodes:e.current,edges:t.current})},[e,t]),s=(0,fn.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,fn.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),l=(0,fn.useCallback)(()=>i.current.clear(),[]),u=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:c,clear:l,canUndo:u,canRestore:d}}var $f=require("react");function Nw(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Lf(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:l,hasPreview:u}=e;(0,$f.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&u){l();return}if(Nw(f.target))return;let p=f.ctrlKey||f.metaKey,m=f.key.toLowerCase();if(p&&m==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(b=>b.some(g=>!g.selected)?b.map(g=>({...g,selected:!0})):b);return}if(p&&m==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(p&&m==="y"){f.preventDefault(),s();return}if(p&&m==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,c,l,u,e])}var Gt=require("react");var Mw=2500;function Hf({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:l}){let u=(0,Gt.useRef)(null);(0,Gt.useEffect)(()=>{if(e.length)return u.current&&window.clearTimeout(u.current),u.current=window.setTimeout(()=>{vu(n.current,o.current).catch(()=>{})},Mw),()=>{u.current&&window.clearTimeout(u.current)}},[e,t,n,o]),(0,Gt.useEffect)(()=>{let p=!1;return(async()=>{try{let y=await ku();if(p||y.empty||!y.nodes?.length)return;let b=sa(y.nodes,y.edges??[],[]);r(b.nodes),i(b.edges),s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${y.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`)}catch{}})(),()=>{p=!0}},[r,i,s]);let d=(0,Gt.useCallback)(async p=>{try{let m=await xu(p,n.current,o.current);l(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${m.name||p}\u300D`)}catch(m){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ae(m)}`)}},[n,o,l,c]),f=(0,Gt.useCallback)(async p=>{try{let m=await wu(p),y=sa(m.nodes,m.edges,m.missing??[]);r(y.nodes),i(y.edges),l(),c(`\u5DF2\u52A0\u8F7D\u300C${m.name||p}\u300D`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(m){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${ae(m)}`)}},[r,i,a,l,c]);return{doSave:d,doLoad:f}}var de=require("react/jsx-runtime");function Da(){let[e,t,n]=au([]),[o,r,i]=su([]),[a,s]=(0,oe.useState)([]),[c,l]=(0,oe.useState)(null),[u,d]=(0,oe.useState)(null),[f,p]=(0,oe.useState)(null),[m,y]=(0,oe.useState)(1),[b,g]=(0,oe.useState)(()=>Ad()),[k,h]=(0,oe.useState)([]),[v,x]=(0,oe.useState)(null),[S,C]=(0,oe.useState)(()=>Ju()),[M,R]=(0,oe.useState)(!1),[W,z]=(0,oe.useState)([]),L=(0,oe.useRef)(null),N=(0,oe.useRef)(null),w=(0,oe.useRef)(null),I=(0,oe.useRef)(null),_=(0,oe.useRef)(new Map),E=(0,oe.useRef)(new Map),P=(0,oe.useRef)(e),D=(0,oe.useRef)(o);P.current=e,D.current=o;let F=(0,oe.useCallback)(T=>{s(G=>[...G.slice(-8),T])},[]),H=(0,oe.useCallback)(T=>{l(T),window.setTimeout(()=>l(G=>G===T?null:G),2600)},[]),{config:V,configIssues:U,configRef:Y,switchProfile:Q,switchModel:re,replaceConfig:B}=Af(H),A=(0,oe.useRef)(!1);(0,oe.useEffect)(()=>{!V||A.current||!(!V.provider?.apiKeyConfigured&&(V.source==="plugin"||V.issues.length>0))||(A.current=!0,d({kind:"settings"}))},[V]);let{addImages:X,replaceImage:ee,openPreview:te,addDataUrl:K}=zf({nodesRef:P,setNodes:t,createPosition:()=>pn.current(),log:F,flash:H,setPreview:p}),{runPrompt:J,cancelPrompt:ie,runMany:le}=Df({nodesRef:P,edgesRef:D,setNodes:t,setEdges:r,log:F,flash:H,taskIdsRef:E,timersRef:_}),{doSave:pe,doLoad:Oe}=Hf({nodes:e,edges:o,nodesRef:P,edgesRef:D,setNodes:t,setEdges:r,instanceRef:N,log:F,flash:H,closeDialog:()=>d(null)}),ce=Of({nodesRef:P,edgesRef:D,setNodes:t,setEdges:r,flash:H}),et=Cd(e),$e=(0,oe.useMemo)(()=>Bu(e,o),[e,o]),it=(0,oe.useMemo)(()=>e.map(T=>{if(T.type==="image"){let G=$e.refCounts.get(T.data.registryId)??0;return(T.data.refCount??0)===G?T:{...T,data:{...T.data,refCount:G}}}if(T.type==="group"){let G=$e.groupCounts.get(T.id)??0,Z=$e.groupSizes.get(T.id)??0,ne=$e.groupDups.get(T.id)??0;return T.data.imageCount===G&&T.data.totalSize===Z&&T.data.duplicateCount===ne?T:{...T,data:{...T.data,imageCount:G,totalSize:Z,duplicateCount:ne}}}return T}),[e,$e]),wt=e.filter(T=>T.type==="prompt"),ft=wt.filter(T=>T.data.status==="queued"||T.data.status==="running").map(T=>T.id),at=wt.filter(T=>T.data.prompt.trim()&&T.data.status!=="running"&&T.data.status!=="queued").map(T=>T.id),Fe=(0,oe.useCallback)((T,G)=>{t(Z=>dt(Z,T,G))},[t]),Ve=(0,oe.useCallback)(T=>{ce.record();let G=new Set(T);t(Z=>Z.filter(ne=>!G.has(ne.id))),r(Z=>Z.filter(ne=>!G.has(ne.source)&&!G.has(ne.target)))},[t,r,ce]),tt=(0,oe.useCallback)(T=>{let G=P.current.find(Z=>Z.id===T);Ve([T]),G?.type==="image"&&gu(G.data.registryId).catch(()=>{})},[Ve]),ke=(0,oe.useCallback)(()=>{let T=N.current,G=L.current?.getBoundingClientRect(),Z=T&&G?T.screenToFlowPosition({x:G.width/2,y:G.height/2}):{x:140,y:120},{position:ne,next:we}=Tu(Z,I.current);return I.current=we,ne},[]),pn=(0,oe.useRef)(ke);pn.current=ke;let mn=(0,oe.useCallback)(T=>{let G=Y.current,Z=Ou(T??ke(),{size:G?.sizes[0]?.value??"1024x1024",quality:G?.qualities[0]??"high",outputDir:""});t(ne=>[...ne,Z])},[ke,t,Y]),go=(0,oe.useCallback)(T=>{t(G=>[...G,$u(T??ke())])},[ke,t]),Pr=(0,oe.useCallback)(()=>{r(la(P.current,D.current)),H("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,H]),zr=(0,oe.useCallback)(()=>{let T=new Set(k);if(!T.size){H("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}ce.record(),r(Fu(P.current,D.current,T)),H("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[k,r,H,ce]),Rr=(0,oe.useCallback)(()=>{let T=new Set(k),G=Y.current?.defaultOutputDir??"";T.size&&(ce.record(),t(Z=>Z.map(ne=>ne.type==="prompt"&&T.has(ne.id)?{...ne,data:{...ne.data,outputDir:G}}:ne)),H(G?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${G}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[k,t,H,ce]),Dr=(0,oe.useCallback)(()=>{let T=N.current;if(!T)return;let G=P.current.filter(ne=>k.includes(ne.id)),Z=G.length?G:P.current;if(!Z.length){H("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}T.fitView({nodes:Z,padding:.25,duration:300,maxZoom:1.6})},[k,H]),Ar=(0,oe.useCallback)(()=>{let T=new Set(k);if(!T.size){H("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}ce.record(),t(G=>{let Z=G.filter(_e=>T.has(_e.id)&&_e.type==="image");if(!Z.length)return G;let ne=Math.min(...Z.map(_e=>_e.position.x)),we=Math.min(...Z.map(_e=>_e.position.y)),vt=new Map(Z.map((_e,gn)=>[_e.id,gn]));return G.map(_e=>{let gn=vt.get(_e.id);return gn===void 0?_e:{..._e,position:{x:ne+gn*172,y:we}}})})},[k,t,H,ce]),{dropIntent:Tr,dragHandlers:Or,startToolbarDrag:$r,dropChip:Lr}=Rd({canvasRef:L,modalOpen:!!u||!!f,getCreatePosition:()=>ke(),toFlowPosition:T=>N.current?N.current.screenToFlowPosition(T):ke(),onDropFiles:(T,G)=>void X(T,G),onDropNode:(T,G)=>{ce.record(),T==="prompt"?mn(G):go(G)}});(0,oe.useEffect)(()=>{let T=G=>{let Z=G.target;if(Z&&(Z.tagName==="TEXTAREA"||Z.tagName==="INPUT"))return;let ne=Array.from(G.clipboardData?.files??[]);ne.length&&(G.preventDefault(),X(ne,ke()))};return window.addEventListener("paste",T),()=>window.removeEventListener("paste",T)},[X,ke]),Lf({nodesRef:P,edgesRef:D,setNodes:t,setEdges:r,selectedIds:k,selectedEdgeId:v,onDeleteNodes:Ve,onDeleteEdge:T=>{ce.record(),r(G=>G.filter(Z=>Z.id!==T)),x(null)},onUndo:ce.undo,onRestore:ce.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let Xt=(0,oe.useCallback)(T=>G=>{let Z=P.current.find(ne=>ne.id===G);if(!Z||Z.type!=="image"||!Z.data.url){H("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:T,target:{nodeId:G,src:Z.data.url,name:Z.data.name}})},[P,H]),ho=(0,oe.useMemo)(()=>({cropImage:Xt("crop"),splitImage:Xt("split"),upscaleImage:Xt("upscale"),maskImage:Xt("mask")}),[Xt]),bo=(0,oe.useCallback)(T=>{ce.record(),t(G=>G.map(Z=>Z.id===T&&Z.type==="image"?{...Z,data:{...Z.data,maskDataUrl:void 0}}:Z)),H("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,ce,H]),Hr=(0,oe.useMemo)(()=>({updatePrompt:Fe,runPrompt:T=>{J(T)},cancelPrompt:T=>{ie(T)},deleteNode:tt,zoomImage:te,replaceImage:ee,...ho,clearMask:bo,config:V}),[Fe,J,ie,tt,te,ee,ho,bo,V]);return(0,de.jsxs)(ga.Provider,{value:Hr,children:[(0,de.jsx)("style",{children:wd}),(0,de.jsxs)("div",{className:"im-root",children:[(0,de.jsx)(_d,{config:V,promptCount:wt.length,runnableIds:at,busyIds:ft.length,snapEnabled:S,canvasLocked:M,cost:et,canUndo:ce.canUndo,canRestore:ce.canRestore,onUndo:()=>{ce.record(),ce.undo()},onRestore:ce.restore,onAddPrompt:()=>mn(),onPickFiles:()=>w.current?.click(),onAddGroup:()=>go(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:$r,onRun:le,onCancelAll:()=>ft.forEach(T=>void ie(T)),onAutoConnect:Pr,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:T=>void Q(T),onSwitchModel:T=>void re(T),onOpenSave:async()=>{try{let T=await ra();d({kind:"save",workflows:T.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let T=await ra();d({kind:"load",workflows:T.workflows})}catch(T){H(`\u8BFB\u53D6\u5931\u8D25\uFF1A${ae(T)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),U.length?(0,de.jsx)(Bd,{tone:"error",action:(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,de.jsx)("ul",{className:"im-banner-list",children:U.map(T=>(0,de.jsx)("li",{children:T},T))})}):null,(0,de.jsxs)("div",{className:`im-canvas${Tr?" is-drop-active":""}`,ref:L,...Or,children:[(0,de.jsx)(Od,{selectedCount:k.length,selectedPromptCount:k.filter(T=>e.some(G=>G.id===T&&G.type==="prompt")).length,selectedRunnableIds:at.filter(T=>k.includes(T)),pickingOutputDir:!1,onRunSelected:()=>le(at.filter(T=>k.includes(T))),onAutoLayout:Ar,onAutoConnectSelected:zr,onSetOutputDir:Rr,onDeleteSelected:()=>{Ve(k),h([])}}),(0,de.jsxs)(iu,{nodes:it,edges:o,nodeTypes:vd,onNodesChange:T=>{let G=td(T,P.current,S);z(G.guides),n(G.changes)},onEdgesChange:T=>i(T),onConnect:Rf(r),isValidConnection:T=>Lu(P.current,D.current,{source:String(T.source??""),target:String(T.target??"")}),onInit:T=>{N.current=T},onNodeDragStop:(T,G)=>{if(z([]),!S)return;let Z=lo(G),ne=P.current.filter(vt=>vt.id!==G.id).map(lo),we=wr(Z,ne);we.x===Z.x&&we.y===Z.y||t(vt=>vt.map(_e=>_e.id===G.id?{..._e,position:{x:we.x,y:we.y}}:_e))},onMove:(T,G)=>y(G.zoom),onEdgeDoubleClick:(T,G)=>{ce.record(),r(Z=>Z.filter(ne=>ne.id!==G.id)),x(null)},onSelectionChange:({nodes:T,edges:G})=>{let Z=T.map(we=>we.id);h(we=>we.length===Z.length&&we.every((vt,_e)=>vt===Z[_e])?we:Z);let ne=G.length===1?G[0].id:null;x(we=>we===ne?we:ne)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:{animated:!0,markerEnd:{type:Ot.ArrowClosed}},deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!M,nodesConnectable:!M,elementsSelectable:!M,panOnDrag:!M,selectionOnDrag:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:["Meta","Control"],children:[(0,de.jsx)(cu,{variant:bt.Dots,gap:18,size:1.4}),b?(0,de.jsx)(fu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:T=>T.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,de.jsx)(Cf,{guides:W})]}),(0,de.jsx)(Nd,{zoom:m,snapEnabled:S,canvasLocked:M,minimapOpen:b,onZoomIn:()=>void N.current?.zoomIn({duration:180}),onZoomOut:()=>void N.current?.zoomOut({duration:180}),onFitView:()=>N.current?.fitView({padding:.2,duration:300}),onFocusSelected:Dr,onToggleSnap:()=>C(T=>{let G=!T;return ed(G),G||z([]),H(G?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),G}),onToggleLock:()=>R(T=>{let G=!T;return H(G?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),G}),onToggleMinimap:()=>g(T=>{let G=!T;return Td(G),G}),onOpenHelp:()=>d({kind:"help"})}),e.length===0?(0,de.jsx)($d,{}):null,(0,de.jsx)(Ld,{logs:a}),(0,de.jsx)(Hd,{text:c}),Lr]}),(0,de.jsx)("input",{ref:w,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:T=>{let G=Array.from(T.target.files??[]);T.target.value="",X(G,ke())}}),f?(0,de.jsx)(Ud,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>p(null)}):null,u?.kind==="save"?(0,de.jsx)(Qd,{workflows:u.workflows??[],onCancel:()=>d(null),onSubmit:T=>void pe(T)}):null,u?.kind==="load"?(0,de.jsx)(Jd,{workflows:u.workflows??[],onCancel:()=>d(null),onPick:T=>void Oe(T)}):null,u?.kind==="crop"&&u.target?(0,de.jsx)(pf,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(T,G)=>{ce.record(),await K(T,`${u.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),H(G)}}):null,u?.kind==="split"&&u.target?(0,de.jsx)(xf,{src:u.target.src,onClose:()=>d(null),onConfirm:async T=>{ce.record();let G=u.target.name.replace(/\.[^.]+$/,""),Z=ke();for(let[ne,we]of T.entries())await K(we.dataUrl,`${G}_${ne+1}.png`,{x:Z.x+ne*160,y:Z.y});d(null),H(`\u5DF2\u5207\u51FA ${T.length} \u5F20`)}}):null,u?.kind==="upscale"&&u.target?(0,de.jsx)(Sf,{src:u.target.src,onClose:()=>d(null),onConfirm:async(T,G)=>{ce.record(),await K(T,`${u.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),H(G)}}):null,u?.kind==="mask"&&u.target?(0,de.jsx)(bf,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(T,G)=>{ce.record(),t(Z=>Z.map(ne=>ne.id===u.target.nodeId&&ne.type==="image"?{...ne,data:{...ne.data,maskDataUrl:T}}:ne)),d(null),H(G)}}):null,u?.kind==="help"?(0,de.jsx)(ef,{config:V,onClose:()=>d(null)}):null,u?.kind==="history"?(0,de.jsx)(yf,{onClose:()=>d(null),onImport:T=>{if(!T.length)return;ce.record();let G=ke(),Z=T.map((ne,we)=>sn(ne,{x:G.x+we*172,y:G.y}));t(ne=>[...ne,...Z]),d(null),H(`\u5DF2\u653E\u5165 ${Z.length} \u5F20\u56FE`)}}):null,u?.kind==="import"?(0,de.jsx)(Ef,{sizes:V?.sizes??[],onCancel:()=>d(null),onConfirm:T=>{ce.record();let G=Y.current,Z=qu(T,{sizes:G?.sizes??[],defaultQuality:G?.qualities[0]??"high",defaultOutputDir:""},ke());t(ne=>[...ne,...Z]),d(null),H(`\u5DF2\u5EFA ${Z.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,u?.kind==="settings"?(0,de.jsx)(Pf,{config:V,onClose:()=>d(null),onSaved:B,onFlash:H}):null]})]})}var Bf=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Ff=require("react/jsx-runtime"),Iw=["slots"],Wf="imagora";globalThis.__dshImagoraCanvas=Da;function Pw({size:e=16}){return(0,Ff.jsx)(xa,{size:e})}function zw(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=Bf,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(za(),Nf)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Wf},Da)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Wf,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Pw)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
