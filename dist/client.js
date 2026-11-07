window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var Mp=Object.create;var xo=Object.defineProperty;var Ip=Object.getOwnPropertyDescriptor;var Pp=Object.getOwnPropertyNames;var zp=Object.getPrototypeOf,Rp=Object.prototype.hasOwnProperty;var Dp=(e,t)=>()=>(e&&(t=e(e=0)),t);var wo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ga=(e,t)=>{for(var n in t)xo(e,n,{get:t[n],enumerable:!0})},Xa=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Pp(t))!Rp.call(e,r)&&r!==n&&xo(e,r,{get:()=>t[r],enumerable:!(o=Ip(t,r))||o.enumerable});return e};var Ya=(e,t,n)=>(n=e!=null?Mp(zp(e)):{},Xa(t||!e||!e.__esModule?xo(n,"default",{value:e,enumerable:!0}):n,e)),Ap=e=>Xa(xo({},"__esModule",{value:!0}),e);var Fl=wo(Wl=>{"use strict";var An=require("react");function Zb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kb=typeof Object.is=="function"?Object.is:Zb,jb=An.useState,Qb=An.useEffect,Jb=An.useLayoutEffect,e0=An.useDebugValue;function t0(e,t){var n=t(),o=jb({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return Jb(function(){r.value=n,r.getSnapshot=t,Qi(r)&&i({inst:r})},[e,n,t]),Qb(function(){return Qi(r)&&i({inst:r}),e(function(){Qi(r)&&i({inst:r})})},[e]),e0(n),n}function Qi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kb(e,n)}catch{return!0}}function n0(e,t){return t()}var o0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?n0:t0;Wl.useSyncExternalStore=An.useSyncExternalStore!==void 0?An.useSyncExternalStore:o0});var Gl=wo((Fv,Vl)=>{"use strict";Vl.exports=Fl()});var Yl=wo(Xl=>{"use strict";var sr=require("react"),r0=Gl();function i0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a0=typeof Object.is=="function"?Object.is:i0,s0=r0.useSyncExternalStore,l0=sr.useRef,c0=sr.useEffect,u0=sr.useMemo,d0=sr.useDebugValue;Xl.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=l0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=u0(function(){function c(p){if(!l){if(l=!0,u=p,p=o(p),r!==void 0&&a.hasValue){var m=a.value;if(r(m,p))return d=m}return d=p}if(m=d,a0(u,p))return m;var y=o(p);return r!==void 0&&r(m,y)?(u=p,m):(u=p,d=y)}var l=!1,u,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var s=s0(e,i[0],i[1]);return c0(function(){a.hasValue=!0,a.value=s},[s]),d0(s),s}});var Ul=wo((Gv,ql)=>{"use strict";ql.exports=Yl()});var zf={};Ga(zf,{primitives:()=>Ra});function zw(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Ra(){if(Mr)return Mr;let e=require(Pf),t=zw(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${Pf}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Mr=t,Mr}var Pf,Mr,Da=Dp(()=>{"use strict";Pf="@deepseek-ai/dsh-client-ui-primitives",Mr=null});var $w={};Ga($w,{apply:()=>Ow,inject:()=>Aw});module.exports=Ap($w);var ie=require("react");var H=require("react/jsx-runtime"),$=require("react");function _e(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=_e(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Tp={value:()=>{}};function Yt(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new vo(n)}function vo(e){this._=e}function Op(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}vo.prototype=Yt.prototype={constructor:vo,on:function(e,t){var n=this._,o=Op(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=$p(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=qa(n[r],e.name,t);else if(t==null)for(r in n)n[r]=qa(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new vo(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function $p(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function qa(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Tp,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var Fr="http://www.w3.org/1999/xhtml",Ua={svg:"http://www.w3.org/2000/svg",xhtml:Fr,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Bn(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Ua.hasOwnProperty(t)?{space:Ua[t],local:e}:e}function Lp(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Fr&&t.documentElement.namespaceURI===Fr?t.createElement(e):t.createElementNS(n,e)}}function Hp(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Za(e){var t=Bn(e);return(t.local?Hp:Lp)(t)}function Bp(){}function So(e){return e==null?Bp:function(){return this.querySelector(e)}}function Wp(e){typeof e!="function"&&(e=So(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),c,l,u=0;u<a;++u)(c=i[u])&&(l=e.call(c,c.__data__,u,i))&&("__data__"in c&&(l.__data__=c.__data__),s[u]=l);return new je(o,this._parents)}function Fp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Vp(){return[]}function Gr(e){return e==null?Vp:function(){return this.querySelectorAll(e)}}function Gp(e){return function(){return Fp(e.apply(this,arguments))}}function Xp(e){typeof e=="function"?e=Gp(e):e=Gr(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,l=0;l<s;++l)(c=a[l])&&(o.push(e.call(c,c.__data__,l,a)),r.push(c));return new je(o,r)}function Xr(e){return function(){return this.matches(e)}}function Ka(e){return function(t){return t.matches(e)}}var Yp=Array.prototype.find;function qp(e){return function(){return Yp.call(this.children,e)}}function Up(){return this.firstElementChild}function Zp(e){return this.select(e==null?Up:qp(typeof e=="function"?e:Ka(e)))}var Kp=Array.prototype.filter;function jp(){return Array.from(this.children)}function Qp(e){return function(){return Kp.call(this.children,e)}}function Jp(e){return this.selectAll(e==null?jp:Qp(typeof e=="function"?e:Ka(e)))}function em(e){typeof e!="function"&&(e=Xr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,l=0;l<a;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&s.push(c);return new je(o,this._parents)}function ja(e){return new Array(e.length)}function tm(){return new je(this._enter||this._groups.map(ja),this._parents)}function ko(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}ko.prototype={constructor:ko,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function nm(e){return function(){return e}}function om(e,t,n,o,r,i){for(var a=0,s,c=t.length,l=i.length;a<l;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new ko(e,i[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function rm(e,t,n,o,r,i,a){var s,c,l=new Map,u=t.length,d=i.length,f=new Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=a.call(c,c.__data__,s,t)+"",l.has(p)?r[s]=c:l.set(p,c));for(s=0;s<d;++s)p=a.call(e,i[s],s,i)+"",(c=l.get(p))?(o[s]=c,c.__data__=i[s],l.delete(p)):n[s]=new ko(e,i[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(r[s]=c)}function im(e){return e.__data__}function am(e,t){if(!arguments.length)return Array.from(this,im);var n=t?rm:om,o=this._parents,r=this._groups;typeof e!="function"&&(e=nm(e));for(var i=r.length,a=new Array(i),s=new Array(i),c=new Array(i),l=0;l<i;++l){var u=o[l],d=r[l],f=d.length,p=sm(e.call(u,u&&u.__data__,l,o)),m=p.length,y=s[l]=new Array(m),b=a[l]=new Array(m),g=c[l]=new Array(f);n(u,d,y,b,g,p,t);for(var S=0,h=0,v,x;S<m;++S)if(v=y[S]){for(S>=h&&(h=S+1);!(x=b[h])&&++h<m;);v._next=x||null}}return a=new je(a,o),a._enter=s,a._exit=c,a}function sm(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function lm(){return new je(this._exit||this._groups.map(ja),this._parents)}function cm(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function um(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),c=0;c<a;++c)for(var l=n[c],u=o[c],d=l.length,f=s[c]=new Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<r;++c)s[c]=n[c];return new je(s,this._parents)}function dm(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function fm(e){e||(e=pm);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,c=r[i]=new Array(s),l,u=0;u<s;++u)(l=a[u])&&(c[u]=l);c.sort(t)}return new je(r,this._parents).order()}function pm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function mm(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function gm(){return Array.from(this)}function hm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function bm(){let e=0;for(let t of this)++e;return e}function ym(){return!this.node()}function xm(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function wm(e){return function(){this.removeAttribute(e)}}function vm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function km(e,t){return function(){this.setAttribute(e,t)}}function Sm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Cm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function _m(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Em(e,t){var n=Bn(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?vm:wm:typeof t=="function"?n.local?_m:Cm:n.local?Sm:km)(n,t))}function Qa(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Nm(e){return function(){this.style.removeProperty(e)}}function Mm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Im(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Pm(e,t,n){return arguments.length>1?this.each((t==null?Nm:typeof t=="function"?Im:Mm)(e,t,n??"")):qt(this.node(),e)}function qt(e,t){return e.style.getPropertyValue(t)||Qa(e).getComputedStyle(e,null).getPropertyValue(t)}function zm(e){return function(){delete this[e]}}function Rm(e,t){return function(){this[e]=t}}function Dm(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Am(e,t){return arguments.length>1?this.each((t==null?zm:typeof t=="function"?Dm:Rm)(e,t)):this.node()[e]}function Ja(e){return e.trim().split(/^|\s+/)}function Yr(e){return e.classList||new es(e)}function es(e){this._node=e,this._names=Ja(e.getAttribute("class")||"")}es.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function ts(e,t){for(var n=Yr(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function ns(e,t){for(var n=Yr(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Tm(e){return function(){ts(this,e)}}function Om(e){return function(){ns(this,e)}}function $m(e,t){return function(){(t.apply(this,arguments)?ts:ns)(this,e)}}function Lm(e,t){var n=Ja(e+"");if(arguments.length<2){for(var o=Yr(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?$m:t?Tm:Om)(n,t))}function Hm(){this.textContent=""}function Bm(e){return function(){this.textContent=e}}function Wm(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Fm(e){return arguments.length?this.each(e==null?Hm:(typeof e=="function"?Wm:Bm)(e)):this.node().textContent}function Vm(){this.innerHTML=""}function Gm(e){return function(){this.innerHTML=e}}function Xm(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Ym(e){return arguments.length?this.each(e==null?Vm:(typeof e=="function"?Xm:Gm)(e)):this.node().innerHTML}function qm(){this.nextSibling&&this.parentNode.appendChild(this)}function Um(){return this.each(qm)}function Zm(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Km(){return this.each(Zm)}function jm(e){var t=typeof e=="function"?e:Za(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Qm(){return null}function Jm(e,t){var n=typeof e=="function"?e:Za(e),o=t==null?Qm:typeof t=="function"?t:So(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function eg(){var e=this.parentNode;e&&e.removeChild(this)}function tg(){return this.each(eg)}function ng(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function og(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function rg(e){return this.select(e?og:ng)}function ig(e){return arguments.length?this.property("__data__",e):this.node().__data__}function ag(e){return function(t){e.call(this,t,this.__data__)}}function sg(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function lg(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function cg(e,t,n){return function(){var o=this.__on,r,i=ag(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function ug(e,t,n){var o=sg(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(r=0,u=s[c];r<i;++r)if((a=o[r]).type===u.type&&a.name===u.name)return u.value}return}for(s=t?cg:lg,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function os(e,t,n){var o=Qa(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function dg(e,t){return function(){return os(this,e,t)}}function fg(e,t){return function(){return os(this,e,t.apply(this,arguments))}}function pg(e,t){return this.each((typeof t=="function"?fg:dg)(e,t))}function*mg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var rs=[null];function je(e,t){this._groups=e,this._parents=t}function Ut(){return new je([[document.documentElement]],rs)}function gg(){return this}je.prototype=Ut.prototype={constructor:je,select:Wp,selectAll:Xp,selectChild:Zp,selectChildren:Jp,filter:em,data:am,enter:tm,exit:lm,join:cm,merge:um,selection:gg,order:dm,sort:fm,call:mm,nodes:gm,node:hm,size:bm,empty:ym,each:xm,attr:Em,style:Pm,property:Am,classed:Lm,text:Fm,html:Ym,raise:Um,lower:Km,append:jm,insert:Jm,remove:tg,clone:rg,datum:ig,on:ug,dispatch:pg,[Symbol.iterator]:mg};function He(e){return typeof e=="string"?new je([[document.querySelector(e)]],[document.documentElement]):new je([[e]],rs)}var hg=0;function bg(){return new Vr}function Vr(){this._="@"+(++hg).toString(36)}Vr.prototype=bg.prototype={constructor:Vr,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function yg(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Xe(e,t){if(e=yg(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var xg={passive:!1},Wn={capture:!0,passive:!1};function qr(e){e.stopImmediatePropagation()}function hn(e){e.preventDefault(),e.stopImmediatePropagation()}function Zr(e){var t=e.document.documentElement,n=He(e).on("dragstart.drag",hn,Wn);"onselectstart"in t?n.on("selectstart.drag",hn,Wn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Kr(e,t){var n=e.document.documentElement,o=He(e).on("dragstart.drag",null);t&&(o.on("click.drag",hn,Wn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Co=e=>()=>e;function Ur(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}Ur.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function wg(e){return!e.ctrlKey&&!e.button}function vg(){return this.parentNode}function kg(e,t){return t??{x:e.x,y:e.y}}function Sg(){return navigator.maxTouchPoints||"ontouchstart"in this}function jr(){var e=wg,t=vg,n=kg,o=Sg,r={},i=Yt("start","drag","end"),a=0,s,c,l,u,d=0;function f(v){v.on("mousedown.drag",p).filter(o).on("touchstart.drag",b).on("touchmove.drag",g,xg).on("touchend.drag touchcancel.drag",S).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(v,x){if(!(u||!e.call(this,v,x))){var C=h(this,t.call(this,v,x),v,x,"mouse");C&&(He(v.view).on("mousemove.drag",m,Wn).on("mouseup.drag",y,Wn),Zr(v.view),qr(v),l=!1,s=v.clientX,c=v.clientY,C("start",v))}}function m(v){if(hn(v),!l){var x=v.clientX-s,C=v.clientY-c;l=x*x+C*C>d}r.mouse("drag",v)}function y(v){He(v.view).on("mousemove.drag mouseup.drag",null),Kr(v.view,l),hn(v),r.mouse("end",v)}function b(v,x){if(e.call(this,v,x)){var C=v.changedTouches,k=t.call(this,v,x),I=C.length,R,F;for(R=0;R<I;++R)(F=h(this,k,v,x,C[R].identifier,C[R]))&&(qr(v),F("start",v,C[R]))}}function g(v){var x=v.changedTouches,C=x.length,k,I;for(k=0;k<C;++k)(I=r[x[k].identifier])&&(hn(v),I("drag",v,x[k]))}function S(v){var x=v.changedTouches,C=x.length,k,I;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),k=0;k<C;++k)(I=r[x[k].identifier])&&(qr(v),I("end",v,x[k]))}function h(v,x,C,k,I,R){var F=i.copy(),z=Xe(R||C,x),O,N,w;if((w=n.call(v,new Ur("beforestart",{sourceEvent:C,target:f,identifier:I,active:a,x:z[0],y:z[1],dx:0,dy:0,dispatch:F}),k))!=null)return O=w.x-z[0]||0,N=w.y-z[1]||0,function M(E,_,P){var A=z,V;switch(E){case"start":r[I]=M,V=a++;break;case"end":delete r[I],--a;case"drag":z=Xe(P||_,x),V=a;break}F.call(E,v,new Ur(E,{sourceEvent:_,subject:w,target:f,identifier:I,active:V,x:z[0]+O,y:z[1]+N,dx:z[0]-A[0],dy:z[1]-A[1],dispatch:F}),k)}}return f.filter=function(v){return arguments.length?(e=typeof v=="function"?v:Co(!!v),f):e},f.container=function(v){return arguments.length?(t=typeof v=="function"?v:Co(v),f):t},f.subject=function(v){return arguments.length?(n=typeof v=="function"?v:Co(v),f):n},f.touchable=function(v){return arguments.length?(o=typeof v=="function"?v:Co(!!v),f):o},f.on=function(){var v=i.on.apply(i,arguments);return v===i?f:v},f.clickDistance=function(v){return arguments.length?(d=(v=+v)*v,f):Math.sqrt(d)},f}function wn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Gn(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Rt(){}var Qt=.7,xn=1/Qt,bn="\\s*([+-]?\\d+)\\s*",Fn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Cg=/^#([0-9a-f]{3,8})$/,_g=new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`),Eg=new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`),Ng=new RegExp(`^rgba\\(${bn},${bn},${bn},${Fn}\\)$`),Mg=new RegExp(`^rgba\\(${mt},${mt},${mt},${Fn}\\)$`),Ig=new RegExp(`^hsl\\(${Fn},${mt},${mt}\\)$`),Pg=new RegExp(`^hsla\\(${Fn},${mt},${mt},${Fn}\\)$`),is={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wn(Rt,_t,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:as,formatHex:as,formatHex8:zg,formatHsl:Rg,formatRgb:ss,toString:ss});function as(){return this.rgb().formatHex()}function zg(){return this.rgb().formatHex8()}function Rg(){return hs(this).formatHsl()}function ss(){return this.rgb().formatRgb()}function _t(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Cg.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ls(t):n===3?new Oe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?_o(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?_o(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=_g.exec(e))?new Oe(t[1],t[2],t[3],1):(t=Eg.exec(e))?new Oe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Ng.exec(e))?_o(t[1],t[2],t[3],t[4]):(t=Mg.exec(e))?_o(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Ig.exec(e))?ds(t[1],t[2]/100,t[3]/100,1):(t=Pg.exec(e))?ds(t[1],t[2]/100,t[3]/100,t[4]):is.hasOwnProperty(e)?ls(is[e]):e==="transparent"?new Oe(NaN,NaN,NaN,0):null}function ls(e){return new Oe(e>>16&255,e>>8&255,e&255,1)}function _o(e,t,n,o){return o<=0&&(e=t=n=NaN),new Oe(e,t,n,o)}function oi(e){return e instanceof Rt||(e=_t(e)),e?(e=e.rgb(),new Oe(e.r,e.g,e.b,e.opacity)):new Oe}function Xn(e,t,n,o){return arguments.length===1?oi(e):new Oe(e,t,n,o??1)}function Oe(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}wn(Oe,Xn,Gn(Rt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Oe(Kt(this.r),Kt(this.g),Kt(this.b),No(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:cs,formatHex:cs,formatHex8:Dg,formatRgb:us,toString:us}));function cs(){return`#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}`}function Dg(){return`#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}${Zt((isNaN(this.opacity)?1:this.opacity)*255)}`}function us(){let e=No(this.opacity);return`${e===1?"rgb(":"rgba("}${Kt(this.r)}, ${Kt(this.g)}, ${Kt(this.b)}${e===1?")":`, ${e})`}`}function No(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Kt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Zt(e){return e=Kt(e),(e<16?"0":"")+e.toString(16)}function ds(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new lt(e,t,n,o)}function hs(e){if(e instanceof lt)return new lt(e.h,e.s,e.l,e.opacity);if(e instanceof Rt||(e=_t(e)),!e)return new lt;if(e instanceof lt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,c=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+r:2-i-r,a*=60):s=c>0&&c<1?0:a,new lt(a,s,c,e.opacity)}function Io(e,t,n,o){return arguments.length===1?hs(e):new lt(e,t,n,o??1)}function lt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}wn(lt,Io,Gn(Rt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new lt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new lt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Oe(Qr(e>=240?e-240:e+120,r,o),Qr(e,r,o),Qr(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new lt(fs(this.h),Eo(this.s),Eo(this.l),No(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=No(this.opacity);return`${e===1?"hsl(":"hsla("}${fs(this.h)}, ${Eo(this.s)*100}%, ${Eo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function fs(e){return e=(e||0)%360,e<0?e+360:e}function Eo(e){return Math.max(0,Math.min(1,e||0))}function Qr(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var bs=Math.PI/180,ys=180/Math.PI,Mo=18,xs=.96422,ws=1,vs=.82521,ks=4/29,yn=6/29,Ss=3*yn*yn,Ag=yn*yn*yn;function Cs(e){if(e instanceof gt)return new gt(e.l,e.a,e.b,e.opacity);if(e instanceof Ct)return Es(e);e instanceof Oe||(e=oi(e));var t=ni(e.r),n=ni(e.g),o=ni(e.b),r=Jr((.2225045*t+.7168786*n+.0606169*o)/ws),i,a;return t===n&&n===o?i=a=r:(i=Jr((.4360747*t+.3850649*n+.1430804*o)/xs),a=Jr((.0139322*t+.0971045*n+.7141733*o)/vs)),new gt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function _s(e,t,n,o){return arguments.length===1?Cs(e):new gt(e,t,n,o??1)}function gt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}wn(gt,_s,Gn(Rt,{brighter(e){return new gt(this.l+Mo*(e??1),this.a,this.b,this.opacity)},darker(e){return new gt(this.l-Mo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=xs*ei(t),e=ws*ei(e),n=vs*ei(n),new Oe(ti(3.1338561*t-1.6168667*e-.4906146*n),ti(-.9787684*t+1.9161415*e+.033454*n),ti(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Jr(e){return e>Ag?Math.pow(e,1/3):e/Ss+ks}function ei(e){return e>yn?e*e*e:Ss*(e-ks)}function ti(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function ni(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Tg(e){if(e instanceof Ct)return new Ct(e.h,e.c,e.l,e.opacity);if(e instanceof gt||(e=Cs(e)),e.a===0&&e.b===0)return new Ct(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*ys;return new Ct(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Po(e,t,n,o){return arguments.length===1?Tg(e):new Ct(e,t,n,o??1)}function Ct(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function Es(e){if(isNaN(e.h))return new gt(e.l,0,0,e.opacity);var t=e.h*bs;return new gt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}wn(Ct,Po,Gn(Rt,{brighter(e){return new Ct(this.h,this.c,this.l+Mo*(e??1),this.opacity)},darker(e){return new Ct(this.h,this.c,this.l-Mo*(e??1),this.opacity)},rgb(){return Es(this).rgb()}}));var Ns=-.14861,ri=1.78277,ii=-.29227,zo=-.90649,Vn=1.97294,ps=Vn*zo,ms=Vn*ri,gs=ri*ii-zo*Ns;function Og(e){if(e instanceof jt)return new jt(e.h,e.s,e.l,e.opacity);e instanceof Oe||(e=oi(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(gs*o+ps*t-ms*n)/(gs+ps-ms),i=o-r,a=(Vn*(n-r)-ii*i)/zo,s=Math.sqrt(a*a+i*i)/(Vn*r*(1-r)),c=s?Math.atan2(a,i)*ys-120:NaN;return new jt(c<0?c+360:c,s,r,e.opacity)}function Ro(e,t,n,o){return arguments.length===1?Og(e):new jt(e,t,n,o??1)}function jt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}wn(jt,Ro,Gn(Rt,{brighter(e){return e=e==null?xn:Math.pow(xn,e),new jt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new jt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*bs,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Oe(255*(t+n*(Ns*o+ri*r)),255*(t+n*(ii*o+zo*r)),255*(t+n*(Vn*o)),this.opacity)}}));function Ps(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function $g(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return Ps((n-o/t)*t,a,r,i,s)}}function Lg(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return Ps((n-o/t)*t,r,i,a,s)}}var Ao=e=>()=>e;function zs(e,t){return function(n){return e+n*t}}function Hg(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function ci(e,t){var n=t-e;return n?zs(e,n>180||n<-180?n-360*Math.round(n/360):n):Ao(isNaN(e)?t:e)}function Bg(e){return(e=+e)==1?Ye:function(t,n){return n-t?Hg(t,n,e):Ao(isNaN(t)?n:t)}}function Ye(e,t){var n=t-e;return n?zs(e,n):Ao(isNaN(e)?t:e)}var Yn=(function e(t){var n=Bg(t);function o(r,i){var a=n((r=Xn(r)).r,(i=Xn(i)).r),s=n(r.g,i.g),c=n(r.b,i.b),l=Ye(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=s(u),r.b=c(u),r.opacity=l(u),r+""}}return o.gamma=e,o})(1);function Rs(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=Xn(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(c){return s.r=o(c),s.g=r(c),s.b=i(c),s+""}}}var qw=Rs($g),Uw=Rs(Lg);function Wg(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Fg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Vg(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=vn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function Gg(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ct(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Xg(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=vn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var si=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ai=new RegExp(si.source,"g");function Yg(e){return function(){return e}}function qg(e){return function(t){return e(t)+""}}function ui(e,t){var n=si.lastIndex=ai.lastIndex=0,o,r,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(o=si.exec(e))&&(r=ai.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:ct(o,r)})),n=ai.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?qg(c[0].x):Yg(t):(t=c.length,function(l){for(var u=0,d;u<t;++u)s[(d=c[u]).i]=d.x(l);return s.join("")})}function vn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Ao(t):(n==="number"?ct:n==="string"?(o=_t(t))?(t=o,Yn):ui:t instanceof _t?Yn:t instanceof Date?Gg:Fg(t)?Wg:Array.isArray(t)?Vg:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Xg:ct)(e,t)}var Ms=180/Math.PI,li={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ds(e,t,n,o,r,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,c/=s),e*o<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*Ms,skewX:Math.atan(c)*Ms,scaleX:a,scaleY:s}}var Do;function Ug(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?li:Ds(t.a,t.b,t.c,t.d,t.e,t.f)}function Zg(e){return e==null||(Do||(Do=document.createElementNS("http://www.w3.org/2000/svg","g")),Do.setAttribute("transform",e),!(e=Do.transform.baseVal.consolidate()))?li:(e=e.matrix,Ds(e.a,e.b,e.c,e.d,e.e,e.f))}function As(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push("translate(",null,t,null,n);m.push({i:y-4,x:ct(l,d)},{i:y-2,x:ct(u,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function a(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:ct(l,u)})):u&&d.push(r(d)+"rotate("+u+o)}function s(l,u,d,f){l!==u?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:ct(l,u)}):u&&d.push(r(d)+"skewX("+u+o)}function c(l,u,d,f,p,m){if(l!==d||u!==f){var y=p.push(r(p)+"scale(",null,",",null,")");m.push({i:y-4,x:ct(l,d)},{i:y-2,x:ct(u,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=e(l),u=e(u),i(l.translateX,l.translateY,u.translateX,u.translateY,d,f),a(l.rotate,u.rotate,d,f),s(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(p){for(var m=-1,y=f.length,b;++m<y;)d[(b=f[m]).i]=b.x(p);return d.join("")}}}var Ts=As(Ug,"px, ","px)","deg)"),Os=As(Zg,", ",")",")"),Kg=1e-12;function Is(e){return((e=Math.exp(e))+1/e)/2}function jg(e){return((e=Math.exp(e))-1/e)/2}function Qg(e){return((e=Math.exp(2*e))-1)/(e+1)}var kn=(function e(t,n,o){function r(i,a){var s=i[0],c=i[1],l=i[2],u=a[0],d=a[1],f=a[2],p=u-s,m=d-c,y=p*p+m*m,b,g;if(y<Kg)g=Math.log(f/l)/t,b=function(k){return[s+k*p,c+k*m,l*Math.exp(t*k*g)]};else{var S=Math.sqrt(y),h=(f*f-l*l+o*y)/(2*l*n*S),v=(f*f-l*l-o*y)/(2*f*n*S),x=Math.log(Math.sqrt(h*h+1)-h),C=Math.log(Math.sqrt(v*v+1)-v);g=(C-x)/t,b=function(k){var I=k*g,R=Is(x),F=l/(n*S)*(R*Qg(t*I+x)-jg(x));return[s+F*p,c+F*m,l*R/Is(t*I+x)]}}return b.duration=Math.abs(g)*1e3*t/Math.SQRT2,b}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},r})(Math.SQRT2,2,4);function $s(e){return function(t,n){var o=e((t=Io(t)).h,(n=Io(n)).h),r=Ye(t.s,n.s),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var Zw=$s(ci),Kw=$s(Ye);function Ls(e){return function(t,n){var o=e((t=Po(t)).h,(n=Po(n)).h),r=Ye(t.c,n.c),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var jw=Ls(ci),Qw=Ls(Ye);function Hs(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Ro(r)).h,(i=Ro(i)).h),s=Ye(r.s,i.s),c=Ye(r.l,i.l),l=Ye(r.opacity,i.opacity);return function(u){return r.h=a(u),r.s=s(u),r.l=c(Math.pow(u,n)),r.opacity=l(u),r+""}}return o.gamma=t,o})(1)}var Jw=Hs(ci),ev=Hs(Ye);var Sn=0,Un=0,qn=0,Ws=1e3,To,Zn,Oo=0,Jt=0,Lo=0,Kn=typeof performance=="object"&&performance.now?performance:Date,Fs=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Ho(){return Jt||(Fs(Jg),Jt=Kn.now()+Lo)}function Jg(){Jt=0}function $o(){this._call=this._time=this._next=null}$o.prototype=fi.prototype={constructor:$o,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Ho():+n)+(t==null?0:+t),!this._next&&Zn!==this&&(Zn?Zn._next=this:To=this,Zn=this),this._call=e,this._time=n,di()},stop:function(){this._call&&(this._call=null,this._time=1/0,di())}};function fi(e,t,n){var o=new $o;return o.restart(e,t,n),o}function eh(){Ho(),++Sn;for(var e=To,t;e;)(t=Jt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Sn}function Bs(){Jt=(Oo=Kn.now())+Lo,Sn=Un=0;try{eh()}finally{Sn=0,nh(),Jt=0}}function th(){var e=Kn.now(),t=e-Oo;t>Ws&&(Lo-=t,Oo=e)}function nh(){for(var e,t=To,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:To=n);Zn=e,di(o)}function di(e){if(!Sn){Un&&(Un=clearTimeout(Un));var t=e-Jt;t>24?(e<1/0&&(Un=setTimeout(Bs,Math.ceil(e-Kn.now()-Lo)+1)),qn&&(qn=clearInterval(qn))):(qn||(Oo=Kn.now(),qn=setInterval(th,Ws)),Sn=1,Fs(Bs))}}function pi(e,t,n){var o=new $o;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function Gs(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var mi=3,ov=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(mi),rv=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(mi),iv=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(mi),oh=Math.PI,av=oh/2;function Bo(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Vs=4/11,sv=6/11,lv=8/11,cv=3/4,uv=9/11,dv=10/11,fv=15/16,pv=21/22,mv=63/64,gv=1/Vs/Vs;var gi=1.70158,hv=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(gi),bv=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(gi),yv=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(gi),Cn=2*Math.PI,hi=1,bi=.3,xv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return t*Bo(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(hi,bi),wv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return 1-t*Bo(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(hi,bi),vv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Cn);function r(i){return((i=i*2-1)<0?t*Bo(-i)*Math.sin((o-i)/n):2-t*Bo(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Cn)},r.period=function(i){return e(t,i)},r})(hi,bi);var rh=Yt("start","end","cancel","interrupt"),ih=[],qs=0,Xs=1,yi=2,Wo=3,Ys=4,xi=5,Fo=6;function Vo(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;ah(e,n,{name:t,index:o,group:r,on:rh,tween:ih,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:qs})}function wi(e,t){var n=ut(e,t);if(n.state>qs)throw new Error("too late; already scheduled");return n}function ht(e,t){var n=ut(e,t);if(n.state>Wo)throw new Error("too late; already running");return n}function ut(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function ah(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=fi(i,0,n.time);function i(l){n.state=Xs,n.timer.restart(a,n.delay,n.time),n.delay<=l&&a(l-n.delay)}function a(l){var u,d,f,p;if(n.state!==Xs)return c();for(u in o)if(p=o[u],p.name===n.name){if(p.state===Wo)return pi(a);p.state===Ys?(p.state=Fo,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[u]):+u<t&&(p.state=Fo,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[u])}if(pi(function(){n.state===Wo&&(n.state=Ys,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=yi,n.on.call("start",e,e.__data__,n.index,n.group),n.state===yi){for(n.state=Wo,r=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(p=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function s(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=xi,1),d=-1,f=r.length;++d<f;)r[d].call(e,u);n.state===xi&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Fo,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function jn(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>yi&&o.state<xi,o.state=Fo,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function sh(e){return this.each(function(){jn(this,e)})}function lh(e,t){var n,o;return function(){var r=ht(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function ch(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=ht(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=s;break}c===l&&r.push(s)}i.tween=r}}function uh(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ut(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?lh:ch)(n,e,t))}function vi(e,t,n){var o=e._id;return e.each(function(){var r=ht(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ut(r,o).value[t]}}function Us(e,t){var n;return(typeof t=="number"?ct:t instanceof _t?Yn:(n=_t(t))?(t=n,Yn):ui)(e,t)}function dh(e){return function(){this.removeAttribute(e)}}function fh(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ph(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function mh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function gh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function hh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function bh(e,t){var n=Bn(e),o=n==="transform"?Os:Us;return this.attrTween(e,typeof t=="function"?(n.local?hh:gh)(n,o,vi(this,"attr."+e,t)):t==null?(n.local?fh:dh)(n):(n.local?mh:ph)(n,o,t))}function yh(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function xh(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function wh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&xh(e,i)),n}return r._value=t,r}function vh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&yh(e,i)),n}return r._value=t,r}function kh(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Bn(e);return this.tween(n,(o.local?wh:vh)(o,t))}function Sh(e,t){return function(){wi(this,e).delay=+t.apply(this,arguments)}}function Ch(e,t){return t=+t,function(){wi(this,e).delay=t}}function _h(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Sh:Ch)(t,e)):ut(this.node(),t).delay}function Eh(e,t){return function(){ht(this,e).duration=+t.apply(this,arguments)}}function Nh(e,t){return t=+t,function(){ht(this,e).duration=t}}function Mh(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Eh:Nh)(t,e)):ut(this.node(),t).duration}function Ih(e,t){if(typeof t!="function")throw new Error;return function(){ht(this,e).ease=t}}function Ph(e){var t=this._id;return arguments.length?this.each(Ih(t,e)):ut(this.node(),t).ease}function zh(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;ht(this,e).ease=n}}function Rh(e){if(typeof e!="function")throw new Error;return this.each(zh(this._id,e))}function Dh(e){typeof e!="function"&&(e=Xr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,l=0;l<a;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&s.push(c);return new Nt(o,this._parents,this._name,this._id)}function Ah(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var c=t[s],l=n[s],u=c.length,d=a[s]=new Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<o;++s)a[s]=t[s];return new Nt(a,this._parents,this._name,this._id)}function Th(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Oh(e,t,n){var o,r,i=Th(t)?wi:ht;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function $h(e,t){var n=this._id;return arguments.length<2?ut(this.node(),n).on.on(e):this.each(Oh(n,e,t))}function Lh(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Hh(){return this.on("end.remove",Lh(this._id))}function Bh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=So(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],c=s.length,l=i[a]=new Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,Vo(l[f],t,n,f,l,ut(u,n)));return new Nt(i,this._parents,t,n)}function Wh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Gr(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var c=o[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=ut(u,n),y=0,b=f.length;y<b;++y)(p=f[y])&&Vo(p,t,n,y,f,m);i.push(f),a.push(u)}return new Nt(i,a,t,n)}var Fh=Ut.prototype.constructor;function Vh(){return new Fh(this._groups,this._parents)}function Gh(e,t){var n,o,r;return function(){var i=qt(this,e),a=(this.style.removeProperty(e),qt(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function Zs(e){return function(){this.style.removeProperty(e)}}function Xh(e,t,n){var o,r=n+"",i;return function(){var a=qt(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function Yh(e,t,n){var o,r,i;return function(){var a=qt(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),qt(this,e))),a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s))}}function qh(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var c=ht(this,e),l=c.on,u=c.value[i]==null?s||(s=Zs(t)):void 0;(l!==n||r!==u)&&(o=(n=l).copy()).on(a,r=u),c.on=o}}function Uh(e,t,n){var o=(e+="")=="transform"?Ts:Us;return t==null?this.styleTween(e,Gh(e,o)).on("end.style."+e,Zs(e)):typeof t=="function"?this.styleTween(e,Yh(e,o,vi(this,"style."+e,t))).each(qh(this._id,e)):this.styleTween(e,Xh(e,o,t),n).on("end.style."+e,null)}function Zh(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Kh(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&Zh(e,a,n)),o}return i._value=t,i}function jh(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Kh(e,t,n??""))}function Qh(e){return function(){this.textContent=e}}function Jh(e){return function(){var t=e(this);this.textContent=t??""}}function eb(e){return this.tween("text",typeof e=="function"?Jh(vi(this,"text",e)):Qh(e==null?"":e+""))}function tb(e){return function(t){this.textContent=e.call(this,t)}}function nb(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&tb(r)),t}return o._value=e,o}function ob(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,nb(e))}function rb(){for(var e=this._name,t=this._id,n=Ks(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,l=0;l<s;++l)if(c=a[l]){var u=ut(c,t);Vo(c,e,n,l,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Nt(o,this._parents,e,n)}function ib(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--r===0&&i()}};n.each(function(){var l=ht(this,o),u=l.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),l.on=t}),r===0&&i()})}var ab=0;function Nt(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function sb(e){return Ut().transition(e)}function Ks(){return++ab}var Et=Ut.prototype;Nt.prototype=sb.prototype={constructor:Nt,select:Bh,selectAll:Wh,selectChild:Et.selectChild,selectChildren:Et.selectChildren,filter:Dh,merge:Ah,selection:Vh,transition:rb,call:Et.call,nodes:Et.nodes,node:Et.node,size:Et.size,empty:Et.empty,each:Et.each,on:$h,attr:bh,attrTween:kh,style:Uh,styleTween:jh,text:eb,textTween:ob,remove:Hh,tween:uh,delay:_h,duration:Mh,ease:Ph,easeVarying:Rh,end:ib,[Symbol.iterator]:Et[Symbol.iterator]};var lb={time:null,delay:0,duration:250,ease:Gs};function cb(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function ub(e){var t,n;e instanceof Nt?(t=e._id,e=e._name):(t=Ks(),(n=lb).time=Ho(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,l=0;l<s;++l)(c=a[l])&&Vo(c,e,t,l,a,n||cb(c,t));return new Nt(o,this._parents,e,t)}Ut.prototype.interrupt=sh;Ut.prototype.transition=ub;var Go=e=>()=>e;function db(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Mt(e,t,n){this.k=e,this.x=t,this.y=n}Mt.prototype={constructor:Mt,scale:function(e){return e===1?this:new Mt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Mt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Jn=new Mt(1,0,0);Si.prototype=Mt.prototype;function Si(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Jn;return e.__zoom}function ki(e){e.stopImmediatePropagation()}function Qn(e){e.preventDefault(),e.stopImmediatePropagation()}function fb(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function pb(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function js(){return this.__zoom||Jn}function mb(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function gb(){return navigator.maxTouchPoints||"ontouchstart"in this}function hb(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Ci(){var e=fb,t=pb,n=hb,o=mb,r=gb,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=kn,l=Yt("start","zoom","end"),u,d,f,p=500,m=150,y=0,b=10;function g(w){w.property("__zoom",js).on("wheel.zoom",I,{passive:!1}).on("mousedown.zoom",R).on("dblclick.zoom",F).filter(r).on("touchstart.zoom",z).on("touchmove.zoom",O).on("touchend.zoom touchcancel.zoom",N).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(w,M,E,_){var P=w.selection?w.selection():w;P.property("__zoom",js),w!==P?x(w,M,E,_):P.interrupt().each(function(){C(this,arguments).event(_).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},g.scaleBy=function(w,M,E,_){g.scaleTo(w,function(){var P=this.__zoom.k,A=typeof M=="function"?M.apply(this,arguments):M;return P*A},E,_)},g.scaleTo=function(w,M,E,_){g.transform(w,function(){var P=t.apply(this,arguments),A=this.__zoom,V=E==null?v(P):typeof E=="function"?E.apply(this,arguments):E,B=A.invert(V),W=typeof M=="function"?M.apply(this,arguments):M;return n(h(S(A,W),V,B),P,a)},E,_)},g.translateBy=function(w,M,E,_){g.transform(w,function(){return n(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),a)},null,_)},g.translateTo=function(w,M,E,_,P){g.transform(w,function(){var A=t.apply(this,arguments),V=this.__zoom,B=_==null?v(A):typeof _=="function"?_.apply(this,arguments):_;return n(Jn.translate(B[0],B[1]).scale(V.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof E=="function"?-E.apply(this,arguments):-E),A,a)},_,P)};function S(w,M){return M=Math.max(i[0],Math.min(i[1],M)),M===w.k?w:new Mt(M,w.x,w.y)}function h(w,M,E){var _=M[0]-E[0]*w.k,P=M[1]-E[1]*w.k;return _===w.x&&P===w.y?w:new Mt(w.k,_,P)}function v(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function x(w,M,E,_){w.on("start.zoom",function(){C(this,arguments).event(_).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(_).end()}).tween("zoom",function(){var P=this,A=arguments,V=C(P,A).event(_),B=t.apply(P,A),W=E==null?v(B):typeof E=="function"?E.apply(P,A):E,U=Math.max(B[1][0]-B[0][0],B[1][1]-B[0][1]),q=P.__zoom,Q=typeof M=="function"?M.apply(P,A):M,X=c(q.invert(W).concat(U/q.k),Q.invert(W).concat(U/Q.k));return function(L){if(L===1)L=Q;else{var D=X(L),Y=U/D[2];L=new Mt(Y,W[0]-D[0]*Y,W[1]-D[1]*Y)}V.zoom(null,L)}})}function C(w,M,E){return!E&&w.__zooming||new k(w,M)}function k(w,M){this.that=w,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,M),this.taps=0}k.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,M){return this.mouse&&w!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var M=He(this.that).datum();l.call(w,this.that,new db(w,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:l}),M)}};function I(w,...M){if(!e.apply(this,arguments))return;var E=C(this,M).event(w),_=this.__zoom,P=Math.max(i[0],Math.min(i[1],_.k*Math.pow(2,o.apply(this,arguments)))),A=Xe(w);if(E.wheel)(E.mouse[0][0]!==A[0]||E.mouse[0][1]!==A[1])&&(E.mouse[1]=_.invert(E.mouse[0]=A)),clearTimeout(E.wheel);else{if(_.k===P)return;E.mouse=[A,_.invert(A)],jn(this),E.start()}Qn(w),E.wheel=setTimeout(V,m),E.zoom("mouse",n(h(S(_,P),E.mouse[0],E.mouse[1]),E.extent,a));function V(){E.wheel=null,E.end()}}function R(w,...M){if(f||!e.apply(this,arguments))return;var E=w.currentTarget,_=C(this,M,!0).event(w),P=He(w.view).on("mousemove.zoom",W,!0).on("mouseup.zoom",U,!0),A=Xe(w,E),V=w.clientX,B=w.clientY;Zr(w.view),ki(w),_.mouse=[A,this.__zoom.invert(A)],jn(this),_.start();function W(q){if(Qn(q),!_.moved){var Q=q.clientX-V,X=q.clientY-B;_.moved=Q*Q+X*X>y}_.event(q).zoom("mouse",n(h(_.that.__zoom,_.mouse[0]=Xe(q,E),_.mouse[1]),_.extent,a))}function U(q){P.on("mousemove.zoom mouseup.zoom",null),Kr(q.view,_.moved),Qn(q),_.event(q).end()}}function F(w,...M){if(e.apply(this,arguments)){var E=this.__zoom,_=Xe(w.changedTouches?w.changedTouches[0]:w,this),P=E.invert(_),A=E.k*(w.shiftKey?.5:2),V=n(h(S(E,A),_,P),t.apply(this,M),a);Qn(w),s>0?He(this).transition().duration(s).call(x,V,_,w):He(this).call(g.transform,V,_,w)}}function z(w,...M){if(e.apply(this,arguments)){var E=w.touches,_=E.length,P=C(this,M,w.changedTouches.length===_).event(w),A,V,B,W;for(ki(w),V=0;V<_;++V)B=E[V],W=Xe(B,this),W=[W,this.__zoom.invert(W),B.identifier],P.touch0?!P.touch1&&P.touch0[2]!==W[2]&&(P.touch1=W,P.taps=0):(P.touch0=W,A=!0,P.taps=1+!!u);u&&(u=clearTimeout(u)),A&&(P.taps<2&&(d=W[0],u=setTimeout(function(){u=null},p)),jn(this),P.start())}}function O(w,...M){if(this.__zooming){var E=C(this,M).event(w),_=w.changedTouches,P=_.length,A,V,B,W;for(Qn(w),A=0;A<P;++A)V=_[A],B=Xe(V,this),E.touch0&&E.touch0[2]===V.identifier?E.touch0[0]=B:E.touch1&&E.touch1[2]===V.identifier&&(E.touch1[0]=B);if(V=E.that.__zoom,E.touch1){var U=E.touch0[0],q=E.touch0[1],Q=E.touch1[0],X=E.touch1[1],L=(L=Q[0]-U[0])*L+(L=Q[1]-U[1])*L,D=(D=X[0]-q[0])*D+(D=X[1]-q[1])*D;V=S(V,Math.sqrt(L/D)),B=[(U[0]+Q[0])/2,(U[1]+Q[1])/2],W=[(q[0]+X[0])/2,(q[1]+X[1])/2]}else if(E.touch0)B=E.touch0[0],W=E.touch0[1];else return;E.zoom("touch",n(h(V,B,W),E.extent,a))}}function N(w,...M){if(this.__zooming){var E=C(this,M).event(w),_=w.changedTouches,P=_.length,A,V;for(ki(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),A=0;A<P;++A)V=_[A],E.touch0&&E.touch0[2]===V.identifier?delete E.touch0:E.touch1&&E.touch1[2]===V.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(V=Xe(V,this),Math.hypot(d[0]-V[0],d[1]-V[1])<b)){var B=He(this).on("dblclick.zoom");B&&B.apply(this,arguments)}}}return g.wheelDelta=function(w){return arguments.length?(o=typeof w=="function"?w:Go(+w),g):o},g.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Go(!!w),g):e},g.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:Go(!!w),g):r},g.extent=function(w){return arguments.length?(t=typeof w=="function"?w:Go([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),g):t},g.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],g):[i[0],i[1]]},g.translateExtent=function(w){return arguments.length?(a[0][0]=+w[0][0],a[1][0]=+w[1][0],a[0][1]=+w[0][1],a[1][1]=+w[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(w){return arguments.length?(n=w,g):n},g.duration=function(w){return arguments.length?(s=+w,g):s},g.interpolate=function(w){return arguments.length?(c=w,g):c},g.on=function(){var w=l.on.apply(l,arguments);return w===l?g:w},g.clickDistance=function(w){return arguments.length?(y=(w=+w)*w,g):Math.sqrt(y)},g.tapDistance=function(w){return arguments.length?(b=+w,g):b},g}var Qe={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Mn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Ii=["Enter"," ","Escape"],Pi={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Tt;(function(e){e.Strict="strict",e.Loose="loose"})(Tt||(Tt={}));var It;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(It||(It={}));var en;(function(e){e.Partial="partial",e.Full="full"})(en||(en={}));var zi={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},bt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(bt||(bt={}));var Ot;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Ot||(Ot={}));var ee;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ee||(ee={}));var Qs={[ee.Left]:ee.Right,[ee.Right]:ee.Left,[ee.Top]:ee.Bottom,[ee.Bottom]:ee.Top};function Ri(e){return e===null?null:e?"valid":"invalid"}var Di=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,dl=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Ai=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var to=(e,t=[0,0])=>{let{width:n,height:o}=dt(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},Ti=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):Ai(r)?r:t.nodeLookup.get(r.id));let s=a?qo(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return Ko(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return jo(n)},In=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=Ko(n,qo(r)),o=!0)}),o?jo(n):{x:0,y:0,width:0,height:0}},Uo=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,u=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:m=!0,hidden:y=!1}=f;if(a&&!m||y)continue;let b=p.width??f.width??f.initialWidth??0,g=p.height??f.height??f.initialHeight??0,{x:S,y:h}=f.internals.positionAbsolute,v=hl(s,c,l,u,S,h,b,g),x=b*g,C=i&&v>0;(!f.internals.handleBounds||C||v>=x||f.dragging)&&d.push(f)}return d},fl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function bb(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=dt(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function pl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=bb(e,a),c=In(s),l=oo(c,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(l,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function Oi({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:l}=s?s.internals.positionAbsolute:{x:0,y:0},u=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",Qe.error005());else{let p=s.measured.width,m=s.measured.height;p&&m&&(d=[[c,l],[c+p,l+m]])}else s&&on(a.extent)&&(d=[[a.extent[0][0]+c,a.extent[0][1]+l],[a.extent[1][0]+c,a.extent[1][1]+l]]);let f=on(d)?tn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",Qe.error015()),{position:{x:f.x-c+(a.measured.width??0)*u[0],y:f.y-l+(a.measured.height??0)*u[1]},positionAbsolute:f}}async function ml({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),m=!p&&f.parentId&&a.find(y=>y.id===f.parentId);(p||m)&&a.push(f)}let s=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),u=fl(a,c);for(let f of c)s.has(f.id)&&!u.find(m=>m.id===f.id)&&u.push(f);if(!r)return{edges:u,nodes:a};let d=await r({nodes:a,edges:u});return typeof d=="boolean"?d?{edges:u,nodes:a}:{edges:[],nodes:[]}:d}var Nn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),tn=(e={x:0,y:0},t,n)=>({x:Nn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Nn(e.y,t[0][1],t[1][1]-(n?.height??0))});function gl(e,t,n){let{width:o,height:r}=dt(n),{x:i,y:a}=n.internals.positionAbsolute;return tn(e,[[i,a],[i+o,a+r]],t)}var Js=(e,t,n)=>e<t?Nn(Math.abs(e-t),1,t)/t:e>n?-Nn(Math.abs(e-n),1,t)/t:0,Zo=(e,t,n=15,o=40)=>{let r=Js(e.x,o,t.width-o)*n,i=Js(e.y,o,t.height-o)*n;return[r,i]},Ko=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Mi=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),jo=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Pn=(e,t=[0,0])=>{let{x:n,y:o}=Ai(e)?e.internals.positionAbsolute:to(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},qo=(e,t=[0,0])=>{let{x:n,y:o}=Ai(e)?e.internals.positionAbsolute:to(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},$i=(e,t)=>jo(Ko(Mi(e),Mi(t))),hl=(e,t,n,o,r,i,a,s)=>{let c=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(c*l)},no=(e,t)=>hl(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Li=e=>ot(e.width)&&ot(e.height)&&ot(e.x)&&ot(e.y),ot=e=>!isNaN(e)&&isFinite(e),Hi=(e,t)=>(n,o)=>{},zn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Rn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?zn(s,a):s},nn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function _n(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function yb(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=_n(e,n),r=_n(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=_n(e.top??e.y??0,n),r=_n(e.bottom??e.y??0,n),i=_n(e.left??e.x??0,t),a=_n(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function xb(e,t,n,o,r,i){let{x:a,y:s}=nn(e,[t,n,o]),{x:c,y:l}=nn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),u=r-c,d=i-l;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(u),bottom:Math.floor(d)}}var oo=(e,t,n,o,r,i)=>{let a=yb(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,l=Math.min(s,c),u=Nn(l,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*u,m=n/2-f*u,y=xb(e,p,m,u,t,n),b={left:Math.min(y.left-a.left,0),top:Math.min(y.top-a.top,0),right:Math.min(y.right-a.right,0),bottom:Math.min(y.bottom-a.bottom,0)};return{x:p-b.left+b.right,y:m-b.top+b.bottom,zoom:u}},Dn=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function on(e){return e!=null&&e!=="parent"}function dt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Bi(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Wi(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function Fi(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function bl(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function yl(e){return{...Pi,...e||{}}}function eo(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=rt(e),s=Rn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:c,y:l}=n?zn(s,t):s;return{xSnapped:c,ySnapped:l,...s}}var Qo=e=>({width:e.offsetWidth,height:e.offsetHeight}),Vi=e=>e?.getRootNode?.()||window?.document,wb=["INPUT","SELECT","TEXTAREA"];function Gi(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:wb.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Xi=e=>"clientX"in e,rt=(e,t)=>{let n=Xi(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},el=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...Qo(a)}})};function Jo({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+r*.375+a*.375+n*.125,l=t*.125+i*.375+s*.375+o*.125,u=Math.abs(c-e),d=Math.abs(l-t);return[c,l,u,d]}function Xo(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function tl({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case ee.Left:return[t-Xo(t-o,i),n];case ee.Right:return[t+Xo(o-t,i),n];case ee.Top:return[t,n-Xo(n-r,i)];case ee.Bottom:return[t,n+Xo(r-n,i)]}}function er({sourceX:e,sourceY:t,sourcePosition:n=ee.Bottom,targetX:o,targetY:r,targetPosition:i=ee.Top,curvature:a=.25}){let[s,c]=tl({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[l,u]=tl({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,p,m]=Jo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:c,targetControlX:l,targetControlY:u});return[`M${e},${t} C${s},${c} ${l},${u} ${o},${r}`,d,f,p,m]}function Yi({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function xl({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function wl({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=Ko(qo(e),qo(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return no(a,jo(i))>0}var vb=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,kb=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),vl=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Qe.error006()),t;let o=n.getEdgeId||vb,r;return Di(e)?r={...e}:r={...e,id:o(e)},kb(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function tr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=Yi({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var nl={[ee.Left]:{x:-1,y:0},[ee.Right]:{x:1,y:0},[ee.Top]:{x:0,y:-1},[ee.Bottom]:{x:0,y:1}},Sb=({source:e,sourcePosition:t=ee.Bottom,target:n})=>t===ee.Left||t===ee.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},ol=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Cb({source:e,sourcePosition:t=ee.Bottom,target:n,targetPosition:o=ee.Top,center:r,offset:i,stepPosition:a}){let s=nl[t],c=nl[o],l={x:e.x+s.x*i,y:e.y+s.y*i},u={x:n.x+c.x*i,y:n.y+c.y*i},d=Sb({source:l,sourcePosition:t,target:u}),f=d.x!==0?"x":"y",p=d[f],m=[],y,b,g={x:0,y:0},S={x:0,y:0},[,,h,v]=Yi({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f==="x"?(y=r.x??l.x+(u.x-l.x)*a,b=r.y??(l.y+u.y)/2):(y=r.x??(l.x+u.x)/2,b=r.y??l.y+(u.y-l.y)*a);let I=[{x:y,y:l.y},{x:y,y:u.y}],R=[{x:l.x,y:b},{x:u.x,y:b}];s[f]===p?m=f==="x"?I:R:m=f==="x"?R:I}else{let I=[{x:l.x,y:u.y}],R=[{x:u.x,y:l.y}];if(f==="x"?m=s.x===p?R:I:m=s.y===p?I:R,t===o){let w=Math.abs(e[f]-n[f]);if(w<=i){let M=Math.min(i-1,i-w);s[f]===p?g[f]=(l[f]>e[f]?-1:1)*M:S[f]=(u[f]>n[f]?-1:1)*M}}if(t!==o){let w=f==="x"?"y":"x",M=s[f]===c[w],E=l[w]>u[w],_=l[w]<u[w];(s[f]===1&&(!M&&E||M&&_)||s[f]!==1&&(!M&&_||M&&E))&&(m=f==="x"?I:R)}let F={x:l.x+g.x,y:l.y+g.y},z={x:u.x+S.x,y:u.y+S.y},O=Math.max(Math.abs(F.x-m[0].x),Math.abs(z.x-m[0].x)),N=Math.max(Math.abs(F.y-m[0].y),Math.abs(z.y-m[0].y));O>=N?(y=(F.x+z.x)/2,b=m[0].y):(y=m[0].x,b=(F.y+z.y)/2)}let x={x:l.x+g.x,y:l.y+g.y},C={x:u.x+S.x,y:u.y+S.y};return[[e,...x.x!==m[0].x||x.y!==m[0].y?[x]:[],...m,...C.x!==m[m.length-1].x||C.y!==m[m.length-1].y?[C]:[],n],y,b,h,v]}function _b(e,t,n,o){let r=Math.min(ol(e,t)/2,ol(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let l=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+r*l},${a}Q ${i},${a} ${i},${a+r*u}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+r*c}Q ${i},${a} ${i+r*s},${a}`}function ro({sourceX:e,sourceY:t,sourcePosition:n=ee.Bottom,targetX:o,targetY:r,targetPosition:i=ee.Top,borderRadius:a=5,centerX:s,centerY:c,offset:l=20,stepPosition:u=.5}){let[d,f,p,m,y]=Cb({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:c},offset:l,stepPosition:u}),b=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)b+=_b(d[g-1],d[g],d[g+1],a);return b+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[b,f,p,m,y]}function rl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function kl(e){let{sourceNode:t,targetNode:n}=e;if(!rl(t)||!rl(n))return null;let o=t.internals.handleBounds||il(t.handles),r=n.internals.handleBounds||il(n.handles),i=al(o?.source??[],e.sourceHandle),a=al(e.connectionMode===Tt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",Qe.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||ee.Bottom,c=a?.position||ee.Top,l=$t(t,i,s),u=$t(n,a,c);return{sourceX:l.x,sourceY:l.y,targetX:u.x,targetY:u.y,sourcePosition:s,targetPosition:c}}function il(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function $t(e,t,n=ee.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??dt(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case ee.Top:return{x:r+a/2,y:i};case ee.Right:return{x:r+a,y:i+s/2};case ee.Bottom:return{x:r+a/2,y:i+s};case ee.Left:return{x:r,y:i+s/2}}}function al(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function nr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Sl(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=nr(c,t);i.has(l)||(a.push({id:l,color:c.color||n,...c}),i.add(l))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var Cl=1e3,Eb=10,qi={nodeOrigin:[0,0],nodeExtent:Mn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},Nb={...qi,checkEquality:!0};function Ui(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function _l(e,t,n){let o=Ui(qi,n);for(let r of e.values())if(r.parentId)Ki(r,e,t,o);else{let i=to(r,o.nodeOrigin),a=on(r.extent)?r.extent:o.nodeExtent,s=tn(i,a,dt(r));r.internals.positionAbsolute=s}}function Mb(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function Zi(e){return e==="manual"}function or(e,t,n,o={}){let r=Ui(Nb,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!Zi(r.zIndexMode)?Cl:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let u of e){let d=a.get(u.id);if(r.checkEquality&&u===d?.internals.userNode)t.set(u.id,d);else{let f=to(u,r.nodeOrigin),p=on(u.extent)?u.extent:r.nodeExtent,m=tn(f,p,dt(u));d={...r.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:m,handleBounds:Mb(u,d),z:El(u,s,r.zIndexMode),userNode:u}},t.set(u.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),u.parentId&&Ki(d,t,n,o,i),l||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function Ib(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Ki(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=Ui(qi,o),l=e.parentId,u=t.get(l);if(!u){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Ib(e,n),r&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++r.i,u.internals.z=u.internals.z+r.i*Eb),r&&u.internals.rootParentIndex!==void 0&&(r.i=u.internals.rootParentIndex);let d=i&&!Zi(c)?Cl:0,{x:f,y:p,z:m}=Pb(e,u,a,s,d,c),{positionAbsolute:y}=e.internals,b=f!==y.x||p!==y.y;(b||m!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:b?{x:f,y:p}:y,z:m}})}function El(e,t,n){let o=ot(e.zIndex)?e.zIndex:0;return Zi(n)?o:o+(e.selected?t:0)}function Pb(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,c=dt(e),l=to(e,n),u=on(e.extent)?tn(l,e.extent,c):l,d=tn({x:a+u.x,y:s+u.y},o,c);e.extent==="parent"&&(d=gl(d,c,t));let f=El(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function rr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??Pn(s),l=$i(c,a.rect);i.set(a.parentId,{expandedRect:l,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let l=s.internals.positionAbsolute,u=dt(s),d=s.origin??o,f=a.x<l.x?Math.round(Math.abs(l.x-a.x)):0,p=a.y<l.y?Math.round(Math.abs(l.y-a.y)):0,m=Math.max(u.width,Math.round(a.width)),y=Math.max(u.height,Math.round(a.height)),b=(m-u.width)*d[0],g=(y-u.height)*d[1];(f>0||p>0||b||g)&&(r.push({id:c,type:"position",position:{x:s.position.x-f+b,y:s.position.y-p+g}}),n.get(c)?.forEach(S=>{e.some(h=>h.id===S.id)||r.push({id:S.id,type:"position",position:{x:S.position.x+f,y:S.position.y+p}})})),(u.width<a.width||u.height<a.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:m+(f?d[0]*f-b:0),height:y+(p?d[1]*p-g:0)}})}),r}function Nl(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let l=[],u=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(u.transform),f=[];for(let p of e.values()){let m=t.get(p.id);if(!m)continue;if(m.hidden){t.set(m.id,{...m,internals:{...m.internals,handleBounds:void 0}}),c=!0;continue}let y=Qo(p.nodeElement),b=m.measured.width!==y.width||m.measured.height!==y.height;if(!!(y.width&&y.height&&(b||!m.internals.handleBounds||p.force))){let S=p.nodeElement.getBoundingClientRect(),h=on(m.extent)?m.extent:i,{positionAbsolute:v}=m.internals;if(m.parentId&&m.extent==="parent"){let C=t.get(m.parentId);C&&(v=gl(v,y,C))}else h&&(v=tn(v,h,y));let x={...m,measured:y,internals:{...m.internals,positionAbsolute:v,handleBounds:{source:el("source",p.nodeElement,S,d,m.id),target:el("target",p.nodeElement,S,d,m.id)}}};t.set(m.id,x),m.parentId&&Ki(x,t,n,{nodeOrigin:r,zIndexMode:a}),c=!0,b&&(l.push({id:m.id,type:"dimensions",dimensions:y}),m.expandParent&&m.parentId&&f.push({id:m.id,parentId:m.parentId,rect:Pn(x,r)}))}}if(f.length>0){let p=rr(f,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function Ml({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function sl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let c=o.get(a)||new Map;if(o.set(a,c.set(n,t)),i){a=`${r}-${e}-${i}`;let l=o.get(a)||new Map;o.set(a,l.set(n,t))}}function ji(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},l=`${r}-${a}--${i}-${s}`,u=`${i}-${s}--${r}-${a}`;sl("source",c,u,e,r,a),sl("target",c,l,e,i,s),t.set(o.id,o)}}function Il(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Il(n,t):!1}function ll(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function zb(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!Il(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function _i({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&r.push({...c,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Rb({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=zn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function Pl({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,c=!1,l={x:0,y:0},u=null,d=!1,f=null,p=!1,m=!1,y=null;function b({noDragClassName:S,handleSelector:h,domNode:v,isSelectable:x,nodeId:C,nodeClickDistance:k=0}){f=He(v);function I({x:O,y:N}){let{nodeLookup:w,nodeExtent:M,snapGrid:E,snapToGrid:_,nodeOrigin:P,onNodeDrag:A,onSelectionDrag:V,onError:B,updateNodePositions:W}=t();i={x:O,y:N};let U=!1,q=s.size>1,Q=q&&M?Mi(In(s)):null,X=q&&_?Rb({dragItems:s,snapGrid:E,x:O,y:N}):null;for(let[L,D]of s){if(!w.has(L))continue;let Y={x:O-D.distance.x,y:N-D.distance.y};_&&(Y=X?{x:Math.round(Y.x+X.x),y:Math.round(Y.y+X.y)}:zn(Y,E));let J=null;if(q&&M&&!D.extent&&Q){let{positionAbsolute:te}=D.internals,se=te.x-Q.x+M[0][0],ce=te.x+D.measured.width-Q.x2+M[1][0],me=te.y-Q.y+M[0][1],$e=te.y+D.measured.height-Q.y2+M[1][1];J=[[se,me],[ce,$e]]}let{position:oe,positionAbsolute:j}=Oi({nodeId:L,nextPosition:Y,nodeLookup:w,nodeExtent:J||M,nodeOrigin:P,onError:B});U=U||D.position.x!==oe.x||D.position.y!==oe.y,D.position=oe,D.internals.positionAbsolute=j}if(m=m||U,!!U&&(W(s,!0),y&&(o||A||!C&&V))){let[L,D]=_i({nodeId:C,dragItems:s,nodeLookup:w});o?.(y,s,L,D),A?.(y,L,D),C||V?.(y,D)}}async function R(){if(!u)return;let{transform:O,panBy:N,autoPanSpeed:w,autoPanOnNodeDrag:M}=t();if(!M){c=!1,cancelAnimationFrame(a);return}let[E,_]=Zo(l,u,w);(E!==0||_!==0)&&(i.x=(i.x??0)-E/O[2],i.y=(i.y??0)-_/O[2],await N({x:E,y:_})&&I(i)),a=requestAnimationFrame(R)}function F(O){let{nodeLookup:N,multiSelectionActive:w,nodesDraggable:M,transform:E,snapGrid:_,snapToGrid:P,selectNodesOnDrag:A,onNodeDragStart:V,onSelectionDragStart:B,unselectNodesAndEdges:W}=t();d=!0,(!A||!x)&&!w&&C&&(N.get(C)?.selected||W()),x&&A&&C&&e?.(C);let U=eo(O.sourceEvent,{transform:E,snapGrid:_,snapToGrid:P,containerBounds:u});if(i=U,s=zb(N,M,U,C),s.size>0&&(n||V||!C&&B)){let[q,Q]=_i({nodeId:C,dragItems:s,nodeLookup:N});n?.(O.sourceEvent,s,q,Q),V?.(O.sourceEvent,q,Q),C||B?.(O.sourceEvent,Q)}}let z=jr().clickDistance(k).on("start",O=>{let{domNode:N,nodeDragThreshold:w,transform:M,snapGrid:E,snapToGrid:_}=t();u=N?.getBoundingClientRect()||null,p=!1,m=!1,y=O.sourceEvent,w===0&&F(O),i=eo(O.sourceEvent,{transform:M,snapGrid:E,snapToGrid:_,containerBounds:u}),l=rt(O.sourceEvent,u)}).on("drag",O=>{let{autoPanOnNodeDrag:N,transform:w,snapGrid:M,snapToGrid:E,nodeDragThreshold:_,nodeLookup:P}=t(),A=eo(O.sourceEvent,{transform:w,snapGrid:M,snapToGrid:E,containerBounds:u});if(y=O.sourceEvent,(O.sourceEvent.type==="touchmove"&&O.sourceEvent.touches.length>1||C&&!P.has(C))&&(p=!0),!p){if(!c&&N&&d&&(c=!0,R()),!d){let V=rt(O.sourceEvent,u),B=V.x-l.x,W=V.y-l.y;Math.sqrt(B*B+W*W)>_&&F(O)}(i.x!==A.xSnapped||i.y!==A.ySnapped)&&s&&d&&(l=rt(O.sourceEvent,u),I(A))}}).on("end",O=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:N,updateNodePositions:w,onNodeDragStop:M,onSelectionDragStop:E}=t();if(m&&(w(s,!1),m=!1),r||M||!C&&E){let[_,P]=_i({nodeId:C,dragItems:s,nodeLookup:N,dragging:!1});r?.(O.sourceEvent,s,_,P),M?.(O.sourceEvent,_,P),C||E?.(O.sourceEvent,P)}}}).filter(O=>{let N=O.target;return!O.button&&(!S||!ll(N,`.${S}`,v))&&(!h||ll(N,h,v))});f.call(z)}function g(){f?.on(".drag",null)}return{update:b,destroy:g}}function Db(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())no(r,Pn(i))>0&&o.push(i);return o}var Ab=250;function Tb(e,t,n,o){let r=[],i=1/0,a=Db(e,n,t+Ab);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:u,y:d}=$t(s,l,l.position,!0),f=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...l,x:u,y:d}],i=f):f===i&&r.push({...l,x:u,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(c=>c.type===s)??r[0]}return r[0]}function zl(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(l=>l.id===n):s?.[0])??null;return c&&i?{...c,...$t(a,c,c.position,!0)}:c}function Rl(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Ob(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var Dl=()=>!0;function $b(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:l,autoPanOnConnect:u,flowId:d,panBy:f,cancelConnection:p,onConnectStart:m,onConnect:y,onConnectEnd:b,isValidConnection:g=Dl,onReconnectEnd:S,updateConnection:h,getTransform:v,getFromHandle:x,autoPanSpeed:C,dragThreshold:k=1,handleDomNode:I}){let R=Vi(e.target),F=0,z,{x:O,y:N}=rt(e),w=Rl(i,I),M=s?.getBoundingClientRect(),E=!1;if(!M||!w)return;let _=zl(r,w,o,c,t);if(!_)return;let P=rt(e,M),A=!1,V=null,B=!1,W=null;function U(){if(!u||!M)return;let[oe,j]=Zo(P,M,C);f({x:oe,y:j}),F=requestAnimationFrame(U)}let q={..._,nodeId:r,type:w,position:_.position},Q=c.get(r),L={inProgress:!0,isValid:null,from:$t(Q,q,ee.Left,!0),fromHandle:q,fromPosition:q.position,fromNode:Q,to:P,toHandle:null,toPosition:Qs[q.position],toNode:null,pointer:P};function D(){E=!0,h(L),m?.(e,{nodeId:r,handleId:o,handleType:w})}k===0&&D();function Y(oe){if(!E){let{x:$e,y:ue}=rt(oe),tt=$e-O,Le=ue-N;if(!(tt*tt+Le*Le>k*k))return;D()}if(!x()||!q){J(oe);return}let j=v();P=rt(oe,M),z=Tb(Rn(P,j,!1,[1,1]),n,c,q),A||(U(),A=!0);let te=Al(oe,{handle:z,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:g,doc:R,lib:l,flowId:d,nodeLookup:c});W=te.handleDomNode,V=te.connection,B=Ob(!!z,te.isValid);let se=c.get(r),ce=se?$t(se,q,ee.Left,!0):L.from,me={...L,from:ce,isValid:B,to:te.toHandle&&B?nn({x:te.toHandle.x,y:te.toHandle.y},j):P,toHandle:te.toHandle,toPosition:B&&te.toHandle?te.toHandle.position:Qs[q.position],toNode:te.toHandle?c.get(te.toHandle.nodeId):null,pointer:P};h(me),L=me}function J(oe){if(!("touches"in oe&&oe.touches.length>0)){if(E){(z||W)&&V&&B&&y?.(V);let{inProgress:j,...te}=L,se={...te,toPosition:L.toHandle?L.toPosition:null};b?.(oe,se),i&&S?.(oe,se)}p(),cancelAnimationFrame(F),A=!1,B=!1,V=null,W=null,R.removeEventListener("mousemove",Y),R.removeEventListener("mouseup",J),R.removeEventListener("touchmove",Y),R.removeEventListener("touchend",J)}}R.addEventListener("mousemove",Y),R.addEventListener("mouseup",J),R.addEventListener("touchmove",Y),R.addEventListener("touchend",J)}function Al(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:l=Dl,nodeLookup:u}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:m}=rt(e),y=a.elementFromPoint(p,m),b=y?.classList.contains(`${s}-flow__handle`)?y:f,g={handleDomNode:b,isValid:!1,connection:null,toHandle:null};if(b){let S=Rl(void 0,b),h=b.getAttribute("data-nodeid"),v=b.getAttribute("data-handleid"),x=b.classList.contains("connectable"),C=b.classList.contains("connectableend");if(!h||!S)return g;let k={source:d?h:o,sourceHandle:d?v:r,target:d?o:h,targetHandle:d?r:v};g.connection=k;let R=x&&C&&(n===Tt.Strict?d&&S==="source"||!d&&S==="target":h!==o||v!==r);g.isValid=R&&l(k),g.toHandle=zl(h,S,v,u,n,!0)}return g}var ir={onPointerDown:$b,isValid:Al};function Tl({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=He(e);function i({translateExtent:s,width:c,height:l,zoomStep:u=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let m=h=>{if(h.sourceEvent.type!=="wheel"||!t)return;let v=n(),x=h.sourceEvent.ctrlKey&&Dn()?10:1,C=-h.sourceEvent.deltaY*(h.sourceEvent.deltaMode===1?.05:h.sourceEvent.deltaMode?1:.002)*u,k=v[2]*Math.pow(2,C*x);t.scaleTo(k)},y=[0,0],b=h=>{(h.sourceEvent.type==="mousedown"||h.sourceEvent.type==="touchstart")&&(y=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY])},g=h=>{let v=n();if(h.sourceEvent.type!=="mousemove"&&h.sourceEvent.type!=="touchmove"||!t)return;let x=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY],C=[x[0]-y[0],x[1]-y[1]];y=x;let k=o()*Math.max(v[2],Math.log(v[2]))*(p?-1:1),I={x:v[0]-C[0]*k,y:v[1]-C[1]*k},R=[[0,0],[c,l]];t.setViewportConstrained({x:I.x,y:I.y,zoom:v[2]},R,s)},S=Ci().on("start",b).on("zoom",d?g:null).on("zoom.wheel",f?m:null);r.call(S,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Xe}}var ar=e=>({x:e.x,y:e.y,zoom:e.k}),Ei=({x:e,y:t,zoom:n})=>Jn.translate(e,t).scale(n),En=(e,t)=>e.target.closest(`.${t}`),Ol=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Lb=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Ni=(e,t=0,n=Lb,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},$l=e=>{let t=e.ctrlKey&&Dn()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Hb({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:l}){return u=>{if(En(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(u.ctrlKey&&a){let b=Xe(u),g=$l(u),S=d*Math.pow(2,g);o.scaleTo(n,S,b,u);return}let f=u.deltaMode===1?20:1,p=r===It.Vertical?0:u.deltaX*f,m=r===It.Horizontal?0:u.deltaY*f;!Dn()&&u.shiftKey&&r!==It.Vertical&&(p=u.deltaY*f,m=0),o.translateBy(n,-(p/d)*i,-(m/d)*i,{internal:!0});let y=ar(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,y):(e.isPanScrolling=!0,s?.(u,y)),e.panScrollTimeout=setTimeout(()=>{l?.(u,y),e.isPanScrolling=!1},150)}}function Bb({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=En(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function Wb({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=ar(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function Fb({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&Ol(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,ar(i.transform))}}function Vb({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Ol(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=ar(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function Gb({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:l,connectionInProgress:u}){return d=>{let f=e||t,p=n&&d.ctrlKey,m=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(En(d,`${l}-flow__node`)||En(d,`${l}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||u&&!m||En(d,s)&&m||En(d,c)&&(!m||r&&m&&!e)||!n&&d.ctrlKey&&m)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&m||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let y=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||m)&&y}}function Ll({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),d=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(N=>{let w=N[0];w&&(d=[[0,0],[w.contentRect.width,w.contentRect.height]])}):null)?.observe(e);let p=Ci().extent(()=>d).scaleExtent([t,n]).translateExtent(o),m=He(e).call(p);v({x:r.x,y:r.y,zoom:Nn(r.zoom,t,n)},[[0,0],[u.width,u.height]],o);let y=m.on("wheel.zoom"),b=m.on("dblclick.zoom");p.wheelDelta($l);async function g(N,w){return m?new Promise(M=>{p?.interpolate(w?.interpolate==="linear"?vn:kn).transform(Ni(m,w?.duration,w?.ease,()=>M(!0)),N)}):!1}function S({noWheelClassName:N,noPanClassName:w,onPaneContextMenu:M,userSelectionActive:E,panOnScroll:_,panOnDrag:P,panOnScrollMode:A,panOnScrollSpeed:V,preventScrolling:B,zoomOnPinch:W,zoomOnScroll:U,zoomOnDoubleClick:q,zoomActivationKeyPressed:Q,lib:X,onTransformChange:L,connectionInProgress:D,paneClickDistance:Y,selectionOnDrag:J}){E&&!l.isZoomingOrPanning&&h();let oe=_&&!Q&&!E;p.clickDistance(J?1/0:!ot(Y)||Y<0?0:Y);let j=oe?Hb({zoomPanValues:l,noWheelClassName:N,d3Selection:m,d3Zoom:p,panOnScrollMode:A,panOnScrollSpeed:V,zoomOnPinch:W,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):Bb({noWheelClassName:N,preventScrolling:B,d3ZoomHandler:y});m.on("wheel.zoom",j,{passive:!1});let te=Wb({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:a});p.on("start",te);let se=Fb({zoomPanValues:l,panOnDrag:P,onPaneContextMenu:!!M,onPanZoom:i,onTransformChange:L});p.on("zoom",se);let ce=Vb({zoomPanValues:l,panOnDrag:P,panOnScroll:_,onPaneContextMenu:M,onPanZoomEnd:s,onDraggingChange:c});p.on("end",ce);let me=Gb({zoomActivationKeyPressed:Q,panOnDrag:P,zoomOnScroll:U,panOnScroll:_,zoomOnDoubleClick:q,zoomOnPinch:W,userSelectionActive:E,noPanClassName:w,noWheelClassName:N,lib:X,connectionInProgress:D});p.filter(me),q?m.on("dblclick.zoom",b):m.on("dblclick.zoom",null)}function h(){p.on("zoom",null)}async function v(N,w,M){let E=Ei(N),_=p?.constrain()(E,w,M);return _&&await g(_),_}async function x(N,w){let M=Ei(N);return await g(M,w),M}function C(N){if(m){let w=Ei(N),M=m.property("__zoom");(M.k!==N.zoom||M.x!==N.x||M.y!==N.y)&&p?.transform(m,w,null,{sync:!0})}}function k(){let N=m?Si(m.node()):{x:0,y:0,k:1};return{x:N.x,y:N.y,zoom:N.k}}async function I(N,w){return m?new Promise(M=>{p?.interpolate(w?.interpolate==="linear"?vn:kn).scaleTo(Ni(m,w?.duration,w?.ease,()=>M(!0)),N)}):!1}async function R(N,w){return m?new Promise(M=>{p?.interpolate(w?.interpolate==="linear"?vn:kn).scaleBy(Ni(m,w?.duration,w?.ease,()=>M(!0)),N)}):!1}function F(N){p?.scaleExtent(N)}function z(N){p?.translateExtent(N)}function O(N){let w=!ot(N)||N<0?0:N;p?.clickDistance(w)}return{update:S,destroy:h,setViewport:x,setViewportConstrained:v,getViewport:k,scaleTo:I,scaleBy:R,setScaleExtent:F,setTranslateExtent:z,syncViewport:C,setClickDistance:O}}var Lt;(function(e){e.Line="line",e.Handle="handle"})(Lt||(Lt={}));function Xb({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function cl(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Dt(e,t){return Math.max(0,t-e)}function At(e,t){return Math.max(0,e-t)}function Yo(e,t,n){return Math.max(0,t-e,e-n)}function ul(e,t){return e?!t:t}function Yb(e,t,n,o,r,i,a,s){let{affectsX:c,affectsY:l}=t,{isHorizontal:u,isVertical:d}=t,f=u&&d,{xSnapped:p,ySnapped:m}=n,{minWidth:y,maxWidth:b,minHeight:g,maxHeight:S}=o,{x:h,y:v,width:x,height:C,aspectRatio:k}=e,I=Math.floor(u?p-e.pointerX:0),R=Math.floor(d?m-e.pointerY:0),F=x+(c?-I:I),z=C+(l?-R:R),O=-i[0]*x,N=-i[1]*C,w=Yo(F,y,b),M=Yo(z,g,S);if(a){let P=0,A=0;c&&I<0?P=Dt(h+I+O,a[0][0]):!c&&I>0&&(P=At(h+F+O,a[1][0])),l&&R<0?A=Dt(v+R+N,a[0][1]):!l&&R>0&&(A=At(v+z+N,a[1][1])),w=Math.max(w,P),M=Math.max(M,A)}if(s){let P=0,A=0;c&&I>0?P=At(h+I,s[0][0]):!c&&I<0&&(P=Dt(h+F,s[1][0])),l&&R>0?A=At(v+R,s[0][1]):!l&&R<0&&(A=Dt(v+z,s[1][1])),w=Math.max(w,P),M=Math.max(M,A)}if(r){if(u){let P=Yo(F/k,g,S)*k;if(w=Math.max(w,P),a){let A=0;!c&&!l||c&&!l&&f?A=At(v+N+F/k,a[1][1])*k:A=Dt(v+N+(c?I:-I)/k,a[0][1])*k,w=Math.max(w,A)}if(s){let A=0;!c&&!l||c&&!l&&f?A=Dt(v+F/k,s[1][1])*k:A=At(v+(c?I:-I)/k,s[0][1])*k,w=Math.max(w,A)}}if(d){let P=Yo(z*k,y,b)/k;if(M=Math.max(M,P),a){let A=0;!c&&!l||l&&!c&&f?A=At(h+z*k+O,a[1][0])/k:A=Dt(h+(l?R:-R)*k+O,a[0][0])/k,M=Math.max(M,A)}if(s){let A=0;!c&&!l||l&&!c&&f?A=Dt(h+z*k,s[1][0])/k:A=At(h+(l?R:-R)*k,s[0][0])/k,M=Math.max(M,A)}}}R=R+(R<0?M:-M),I=I+(I<0?w:-w),r&&(f?F>z*k?R=(ul(c,l)?-I:I)/k:I=(ul(c,l)?-R:R)*k:u?(R=I/k,l=c):(I=R*k,c=l));let E=c?h+I:h,_=l?v+R:v;return{width:x+(c?-I:I),height:C+(l?-R:R),x:i[0]*I*(c?-1:1)+E,y:i[1]*R*(l?-1:1)+_}}var Hl={width:0,height:0,x:0,y:0},qb={...Hl,pointerX:0,pointerY:0,aspectRatio:1};function Ub(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[o-s,r-c],[o+i-s,r+a-c]]}function Bl({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=He(e),a={controlDirection:cl("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:l,boundaries:u,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:m,onResizeEnd:y,shouldResize:b}){let g={...Hl},S={...qb};a={boundaries:u,resizeDirection:f,keepAspectRatio:d,controlDirection:cl(l)};let h,v=null,x=[],C,k,I,R=!1,F=jr().on("start",z=>{let{nodeLookup:O,transform:N,snapGrid:w,snapToGrid:M,nodeOrigin:E,paneDomNode:_}=n();if(h=O.get(t),!h)return;v=_?.getBoundingClientRect()??null;let{xSnapped:P,ySnapped:A}=eo(z.sourceEvent,{transform:N,snapGrid:w,snapToGrid:M,containerBounds:v});g={width:h.measured.width??0,height:h.measured.height??0,x:h.position.x??0,y:h.position.y??0},S={...g,pointerX:P,pointerY:A,aspectRatio:g.width/g.height},C=void 0,k=on(h.extent)?h.extent:void 0,h.parentId&&(h.extent==="parent"||h.expandParent)&&(C=O.get(h.parentId)),C&&h.extent==="parent"&&(k=[[0,0],[C.measured.width,C.measured.height]]),x=[],I=void 0;for(let[V,B]of O)if(B.parentId===t&&(x.push({id:V,position:{...B.position},extent:B.extent}),B.extent==="parent"||B.expandParent)){let W=Ub(B,h,B.origin??E);I?I=[[Math.min(W[0][0],I[0][0]),Math.min(W[0][1],I[0][1])],[Math.max(W[1][0],I[1][0]),Math.max(W[1][1],I[1][1])]]:I=W}p?.(z,{...g})}).on("drag",z=>{let{transform:O,snapGrid:N,snapToGrid:w,nodeOrigin:M}=n(),E=eo(z.sourceEvent,{transform:O,snapGrid:N,snapToGrid:w,containerBounds:v}),_=[];if(!h)return;let{x:P,y:A,width:V,height:B}=g,W={},U=h.origin??M,{width:q,height:Q,x:X,y:L}=Yb(S,a.controlDirection,E,a.boundaries,a.keepAspectRatio,U,k,I),D=q!==V,Y=Q!==B,J=X!==P&&D,oe=L!==A&&Y;if(!J&&!oe&&!D&&!Y)return;if((J||oe||U[0]===1||U[1]===1)&&(W.x=J?X:g.x,W.y=oe?L:g.y,g.x=W.x,g.y=W.y,x.length>0)){let ce=X-P,me=L-A;for(let $e of x)$e.position={x:$e.position.x-ce+U[0]*(q-V),y:$e.position.y-me+U[1]*(Q-B)},_.push($e)}if((D||Y)&&(W.width=D&&(!a.resizeDirection||a.resizeDirection==="horizontal")?q:g.width,W.height=Y&&(!a.resizeDirection||a.resizeDirection==="vertical")?Q:g.height,g.width=W.width,g.height=W.height),C&&h.expandParent){let ce=U[0]*(W.width??0);W.x&&W.x<ce&&(g.x=ce,S.x=S.x-(W.x-ce));let me=U[1]*(W.height??0);W.y&&W.y<me&&(g.y=me,S.y=S.y-(W.y-me))}let j=Xb({width:g.width,prevWidth:V,height:g.height,prevHeight:B,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),te={...g,direction:j};b?.(z,te)!==!1&&(R=!0,m?.(z,te),o(W,_))}).on("end",z=>{R&&(y?.(z,{...g}),r?.({...g}),R=!1)});i.call(F)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var Jl=Ya(require("react"),1),ec=Ya(Ul(),1);var Kl={},Zl=e=>{let t,n=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(Kl.env?Kl.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},jl=e=>e?Zl(e):Zl;var{useDebugValue:f0}=Jl.default,{useSyncExternalStoreWithSelector:p0}=ec.default,m0=e=>e;function Ji(e,t=m0,n){let o=p0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return f0(o),o}var Ql=(e,t)=>{let n=jl(e),o=(r,i=t)=>Ji(n,r,i);return Object.assign(o,n),o},tc=(e,t)=>e?Ql(e,t):Ql;function ve(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var g0=require("react-dom"),dr=(0,$.createContext)(null),h0=dr.Provider,Mc=Qe.error001("react");function de(e,t){let n=(0,$.useContext)(dr);if(n===null)throw new Error(Mc);return Ji(n,e,t)}function ye(){let e=(0,$.useContext)(dr);if(e===null)throw new Error(Mc);return(0,$.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var nc={display:"none"},b0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Ic="react-flow__node-desc",Pc="react-flow__edge-desc",y0="react-flow__aria-live",x0=e=>e.ariaLiveMessage,w0=e=>e.ariaLabelConfig;function v0({rfId:e}){let t=de(x0);return(0,H.jsx)("div",{id:`${y0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:b0,children:t})}function k0({rfId:e,disableKeyboardA11y:t}){let n=de(w0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{id:`${Ic}-${e}`,style:nc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,H.jsx)("div",{id:`${Pc}-${e}`,style:nc,children:n["edge.a11yDescription.default"]}),!t&&(0,H.jsx)(v0,{rfId:e})]})}var fr=(0,$.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,H.jsx)("div",{className:_e(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});fr.displayName="Panel";var oc="https://reactflow.dev?utm_source=attribution";function S0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,H.jsx)(fr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${oc}`,children:(0,H.jsx)("a",{href:oc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var C0=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},lr=e=>e.id;function _0(e,t){return ve(e.selectedNodes.map(lr),t.selectedNodes.map(lr))&&ve(e.selectedEdges.map(lr),t.selectedEdges.map(lr))}function E0({onSelectionChange:e}){let t=ye(),{selectedNodes:n,selectedEdges:o}=de(C0,_0);return(0,$.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var N0=e=>!!e.onSelectionChangeHandlers;function M0({onSelectionChange:e}){let t=de(N0);return e||t?(0,H.jsx)(E0,{onSelectionChange:e}):null}var zc=[0,0],I0={x:0,y:0,zoom:1},P0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],rc=[...P0,"rfId"],z0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),ic={translateExtent:Mn,nodeOrigin:zc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function R0(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=de(z0,ve),l=ye();(0,$.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=ic,s()}),[]);let u=(0,$.useRef)(ic);return(0,$.useEffect)(()=>{for(let d of rc){let f=e[d],p=u.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?l.setState({ariaLabelConfig:yl(f)}):d==="fitView"?l.setState({fitViewQueued:f}):d==="fitViewOptions"?l.setState({fitViewOptions:f}):l.setState({[d]:f})))}u.current=e},rc.map(d=>e[d])),null}function ac(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function D0(e){let[t,n]=(0,$.useState)(e==="system"?null:e);return(0,$.useEffect)(()=>{if(e!=="system"){n(e);return}let o=ac(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:ac()?.matches?"dark":"light"}var sc=typeof document<"u"?document:null;function io(e=null,t={target:sc,actInsideInputWithModifier:!0}){let[n,o]=(0,$.useState)(!1),r=(0,$.useRef)(!1),i=(0,$.useRef)(new Set([])),[a,s]=(0,$.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),u=l.reduce((d,f)=>d.concat(...f),[]);return[l,u]}return[[],[]]},[e]);return(0,$.useEffect)(()=>{let c=t?.target??sc,l=t?.actInsideInputWithModifier??!0;if(e!==null){let u=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&Gi(p))return!1;let y=cc(p.code,s);if(i.current.add(p[y]),lc(a,i.current,!1)){let b=p.composedPath?.()?.[0]||p.target,g=b?.nodeName==="BUTTON"||b?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},d=p=>{let m=cc(p.code,s);lc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[m]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",u),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",u),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function lc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function cc(e,t){return t.includes(e)?"code":"key"}var A0=()=>{let e=ye();return(0,$.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=oo(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),l={x:t.x-s,y:t.y-c},u=n.snapGrid??r,d=n.snapToGrid??i;return Rn(l,o,d,u)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=nn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function Rc(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)T0(c,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function T0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Dc(e,t){return Rc(e,t)}function Ac(e,t){return Rc(e,t)}function rn(e,t){return{id:e,type:"select",selected:t}}function Tn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(rn(i.id,a)))}return o}function uc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function dc(e){return{id:e.id,type:"remove"}}var O0=Hi("React Flow","https://reactflow.dev/");function $0(e,t,n={}){return vl(e,t,{...n,onError:n.onError??O0})}var fc=e=>dl(e),L0=e=>Di(e);function Tc(e){return(0,$.forwardRef)(e)}var Oc=typeof window<"u"?$.useLayoutEffect:$.useEffect;function pc(e){let[t,n]=(0,$.useState)(BigInt(0)),[o]=(0,$.useState)(()=>H0(()=>n(r=>r+BigInt(1))));return Oc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function H0(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var $c=(0,$.createContext)(null);function B0({children:e}){let t=ye(),n=(0,$.useCallback)(s=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:u,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:m}=t.getState(),y=c;for(let g of s)y=typeof g=="function"?g(y):g;let b=uc({items:y,lookup:f});for(let g of m.values())b=g(b);u&&l(y),b.length>0?d?.(b):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:S,setNodes:h}=t.getState();g&&h(S)})},[]),o=pc(n),r=(0,$.useCallback)(s=>{let{edges:c=[],setEdges:l,hasDefaultEdges:u,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let m of s)p=typeof m=="function"?m(p):m;u?l(p):d&&d(uc({items:p,lookup:f}))},[]),i=pc(r),a=(0,$.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,H.jsx)($c.Provider,{value:a,children:e})}function W0(){let e=(0,$.useContext)($c);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var F0=e=>!!e.panZoom;function oa(){let e=A0(),t=ye(),n=W0(),o=de(F0),r=(0,$.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),m=fc(d)?d:f.get(d.id),y=m.parentId?Wi(m.position,m.measured,m.parentId,f,p):m.position,b={...m,position:y,width:m.measured?.width??m.width,height:m.measured?.height??m.height};return Pn(b)},l=(d,f,p={replace:!1})=>{a(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&fc(b)?b:{...y,...b}}return y}))},u=(d,f,p={replace:!1})=>{s(m=>m.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return p.replace&&L0(b)?b:{...y,...b}}return y}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[m,y,b]=p;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:m,y,zoom:b}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:m,onNodesDelete:y,onEdgesDelete:b,triggerNodeChanges:g,triggerEdgeChanges:S,onDelete:h,onBeforeDelete:v}=t.getState(),{nodes:x,edges:C}=await ml({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:m,onBeforeDelete:v}),k=C.length>0,I=x.length>0;if(k){let R=C.map(dc);b?.(C),S(R)}if(I){let R=x.map(dc);y?.(x),g(R)}return(I||k)&&h?.({nodes:x,edges:C}),{deletedNodes:x,deletedEdges:C}},getIntersectingNodes:(d,f=!0,p)=>{let m=Li(d),y=m?d:c(d),b=p!==void 0;return y?(p||t.getState().nodes).filter(g=>{let S=t.getState().nodeLookup.get(g.id);if(S&&!m&&(g.id===d.id||!S.internals.positionAbsolute))return!1;let h=Pn(b?g:S),v=no(h,y);return f&&v>0||v>=h.width*h.height||v>=y.width*y.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let y=Li(d)?d:c(d);if(!y)return!1;let b=no(y,f);return p&&b>0||b>=f.width*f.height||b>=y.width*y.height},updateNode:l,updateNodeData:(d,f,p={replace:!1})=>{l(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},updateEdge:u,updateEdgeData:(d,f,p={replace:!1})=>{u(d,m=>{let y=typeof f=="function"?f(m):f;return p.replace?{...m,data:y}:{...m,data:{...m.data,...y}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return Ti(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??bl();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,$.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var mc=e=>e.selected,V0=typeof window<"u"?window:void 0;function G0({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=ye(),{deleteElements:o}=oa(),r=io(e,{actInsideInputWithModifier:!1}),i=io(t,{target:V0});(0,$.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(mc),edges:a.filter(mc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,$.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function X0(e){let t=ye();(0,$.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Qo(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Qe.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var pr={position:"absolute",width:"100%",height:"100%",top:0,left:0},Y0=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function q0({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=It.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:l,minZoom:u,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:m,noWheelClassName:y,noPanClassName:b,onViewportChange:g,isControlledViewport:S,paneClickDistance:h,selectionOnDrag:v}){let x=ye(),C=(0,$.useRef)(null),{userSelectionActive:k,lib:I,connectionInProgress:R}=de(Y0,ve),F=io(f),z=(0,$.useRef)();X0(C);let O=(0,$.useCallback)(N=>{g?.({x:N[0],y:N[1],zoom:N[2]}),S||x.setState({transform:N})},[g,S]);return(0,$.useEffect)(()=>{if(C.current){z.current=Ll({domNode:C.current,minZoom:u,maxZoom:d,translateExtent:l,viewport:c,onDraggingChange:E=>x.setState(_=>_.paneDragging===E?_:{paneDragging:E}),onPanZoomStart:(E,_)=>{let{onViewportChangeStart:P,onMoveStart:A}=x.getState();A?.(E,_),P?.(_)},onPanZoom:(E,_)=>{let{onViewportChange:P,onMove:A}=x.getState();A?.(E,_),P?.(_)},onPanZoomEnd:(E,_)=>{let{onViewportChangeEnd:P,onMoveEnd:A}=x.getState();A?.(E,_),P?.(_)}});let{x:N,y:w,zoom:M}=z.current.getViewport();return x.setState({panZoom:z.current,transform:[N,w,M],domNode:C.current.closest(".react-flow")}),()=>{z.current?.destroy()}}},[]),(0,$.useEffect)(()=>{z.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:F,preventScrolling:p,noPanClassName:b,userSelectionActive:k,noWheelClassName:y,lib:I,onTransformChange:O,connectionInProgress:R,selectionOnDrag:v,paneClickDistance:h})},[e,t,n,o,r,i,a,s,F,p,b,k,y,I,O,R,v,h]),(0,H.jsx)("div",{className:"react-flow__renderer",ref:C,style:pr,children:m})}var U0=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Z0(){let{userSelectionActive:e,userSelectionRect:t}=de(U0,ve);return e&&t?(0,H.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var ea=(e,t)=>n=>{n.target===t.current&&e?.(n)},K0=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function j0({isSelecting:e,selectionKeyPressed:t,selectionMode:n=en.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:m,children:y}){let b=(0,$.useRef)(0),g=ye(),{userSelectionActive:S,elementsSelectable:h,dragging:v,panBy:x,autoPanSpeed:C}=de(K0,ve),k=h&&(e||S),I=(0,$.useRef)(null),R=(0,$.useRef)(),F=(0,$.useRef)(new Set),z=(0,$.useRef)(new Set),O=(0,$.useRef)(!1),N=(0,$.useRef)(!1),w=(0,$.useRef)({x:0,y:0}),M=(0,$.useRef)(!1),E=D=>{if(N.current||O.current||g.getState().connection.inProgress){N.current=!1,O.current=!1;return}l?.(D),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},_=D=>{if(Array.isArray(o)&&o?.includes(2)){D.preventDefault();return}u?.(D)},P=d?D=>d(D):void 0,A=D=>{N.current&&(D.stopPropagation(),N.current=!1)},V=D=>{let{domNode:Y,transform:J}=g.getState();if(R.current=Y?.getBoundingClientRect(),!R.current)return;let oe=D.target===I.current;if(!oe&&!!D.target.closest(".nokey")||!e||!(a&&oe||t)||D.button!==0||!D.isPrimary)return;D.target?.setPointerCapture?.(D.pointerId),N.current=!1;let{x:se,y:ce}=rt(D.nativeEvent,R.current),me=Rn({x:se,y:ce},J);g.setState({userSelectionRect:{width:0,height:0,startX:me.x,startY:me.y,x:se,y:ce}}),oe||(D.stopPropagation(),D.preventDefault())};function B(D,Y){let{userSelectionRect:J}=g.getState();if(!J)return;let{transform:oe,nodeLookup:j,edgeLookup:te,connectionLookup:se,triggerNodeChanges:ce,triggerEdgeChanges:me,defaultEdgeOptions:$e}=g.getState(),ue={x:J.startX,y:J.startY},{x:tt,y:Le}=nn(ue,oe),at={startX:ue.x,startY:ue.y,x:D<tt?D:tt,y:Y<Le?Y:Le,width:Math.abs(D-tt),height:Math.abs(Y-Le)},kt=F.current,pt=z.current;F.current=new Set(Uo(j,at,oe,n===en.Partial,!0).map(Ve=>Ve.id)),z.current=new Set;let st=$e?.selectable??!0;for(let Ve of F.current){let Ge=se.get(Ve);if(Ge)for(let{edgeId:nt}of Ge.values()){let Ce=te.get(nt);Ce&&(Ce.selectable??st)&&z.current.add(nt)}}if(!Fi(kt,F.current)){let Ve=Tn(j,F.current,!0);ce(Ve)}if(!Fi(pt,z.current)){let Ve=Tn(te,z.current);me(Ve)}g.setState({userSelectionRect:at,userSelectionActive:!0,nodesSelectionActive:!1})}function W(){if(!r||!R.current)return;let[D,Y]=Zo(w.current,R.current,C);x({x:D,y:Y}).then(J=>{if(!N.current||!J){b.current=requestAnimationFrame(W);return}let{x:oe,y:j}=w.current;B(oe,j),b.current=requestAnimationFrame(W)})}let U=()=>{cancelAnimationFrame(b.current),b.current=0,M.current=!1};(0,$.useEffect)(()=>()=>U(),[]);let q=D=>{let{userSelectionRect:Y,transform:J,resetSelectedElements:oe}=g.getState();if(!R.current||!Y)return;let{x:j,y:te}=rt(D.nativeEvent,R.current);w.current={x:j,y:te};let se=nn({x:Y.startX,y:Y.startY},J);if(!N.current){let ce=t?0:i;if(Math.hypot(j-se.x,te-se.y)<=ce)return;oe(),s?.(D)}N.current=!0,M.current||(W(),M.current=!0),B(j,te)},Q=D=>{if(!k){D.target===I.current&&g.getState().connection.inProgress&&(O.current=!0);return}D.button===0&&(D.target?.releasePointerCapture?.(D.pointerId),!S&&D.target===I.current&&g.getState().userSelectionRect&&E?.(D),g.setState({userSelectionActive:!1,userSelectionRect:null}),N.current&&(c?.(D),g.setState({nodesSelectionActive:F.current.size>0})),U())},X=D=>{D.target?.releasePointerCapture?.(D.pointerId),U()},L=o===!0||Array.isArray(o)&&o.includes(0);return(0,H.jsxs)("div",{className:_e(["react-flow__pane",{draggable:L,dragging:v,selection:e}]),onClick:k?void 0:ea(E,I),onContextMenu:ea(_,I),onWheel:ea(P,I),onPointerEnter:k?void 0:f,onPointerMove:k?q:p,onPointerUp:Q,onPointerCancel:k?X:void 0,onPointerDownCapture:k?V:void 0,onClickCapture:k?A:void 0,onPointerLeave:m,ref:I,style:pr,children:[y,(0,H.jsx)(Z0,{})]})}function na({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),l=s.get(e);if(!l){c?.("012",Qe.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&a)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Lc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=ye(),[c,l]=(0,$.useState)(!1),u=(0,$.useRef)();return(0,$.useEffect)(()=>{if(!t)return u.current=Pl({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{na({id:d,store:s,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,s,e]),(0,$.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),c}var Q0=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Hc(){let e=ye();return(0,$.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:l,nodeOrigin:u}=e.getState(),d=new Map,f=Q0(a),p=r?i[0]:5,m=r?i[1]:5,y=n.direction.x*p*n.factor,b=n.direction.y*m*n.factor;for(let[,g]of l){if(!f(g))continue;let S={x:g.internals.positionAbsolute.x+y,y:g.internals.positionAbsolute.y+b};r&&(S=zn(S,i));let{position:h,positionAbsolute:v}=Oi({nodeId:g.id,nextPosition:S,nodeLookup:l,nodeExtent:o,nodeOrigin:u,onError:s});g.position=h,g.internals.positionAbsolute=v,d.set(g.id,g)}c(d)},[])}var ra=(0,$.createContext)(null),J0=ra.Provider;ra.Consumer;var Bc=()=>(0,$.useContext)(ra),ey=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Wc=(0,$.createContext)(null);function ty({children:e}){let t=de(ey,ve);return(0,H.jsx)(Wc.Provider,{value:t,children:e})}function ny(){let e=(0,$.useContext)(Wc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var oy={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},ry=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:c,isValid:l}=a;if(!s&&!r)return oy;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:u,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Tt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:u&&l}};function iy({type:e="source",position:t=ee.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:l,onMouseDown:u,onTouchStart:d,...f},p){let m=a||null,y=e==="target",b=ye(),g=Bc(),{connectOnClick:S,noPanClassName:h,rfId:v}=ny(),{connectingFrom:x,connectingTo:C,clickConnecting:k,isPossibleEndHandle:I,connectionInProcess:R,clickConnectionInProcess:F,valid:z}=de(ry(g,m,e),ve);g||b.getState().onError?.("010",Qe.error010());let O=M=>{let{defaultEdgeOptions:E,onConnect:_,hasDefaultEdges:P}=b.getState(),A={...E,...M};if(P){let{edges:V,setEdges:B,onError:W}=b.getState();B($0(A,V,{onError:W}))}_?.(A),s?.(A)},N=M=>{if(!g)return;let E=Xi(M.nativeEvent);if(r&&(E&&M.button===0||!E)){let _=b.getState();ir.onPointerDown(M.nativeEvent,{handleDomNode:M.currentTarget,autoPanOnConnect:_.autoPanOnConnect,connectionMode:_.connectionMode,connectionRadius:_.connectionRadius,domNode:_.domNode,nodeLookup:_.nodeLookup,lib:_.lib,isTarget:y,handleId:m,nodeId:g,flowId:_.rfId,panBy:_.panBy,cancelConnection:_.cancelConnection,onConnectStart:_.onConnectStart,onConnectEnd:(...P)=>b.getState().onConnectEnd?.(...P),updateConnection:_.updateConnection,onConnect:O,isValidConnection:n||((...P)=>b.getState().isValidConnection?.(...P)??!0),getTransform:()=>b.getState().transform,getFromHandle:()=>b.getState().connection.fromHandle,autoPanSpeed:_.autoPanSpeed,dragThreshold:_.connectionDragThreshold})}E?u?.(M):d?.(M)},w=M=>{let{onClickConnectStart:E,onClickConnectEnd:_,connectionClickStartHandle:P,connectionMode:A,isValidConnection:V,lib:B,rfId:W,nodeLookup:U,connection:q}=b.getState();if(!g||!P&&!r)return;if(!P){E?.(M.nativeEvent,{nodeId:g,handleId:m,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:g,type:e,id:m}});return}let Q=Vi(M.target),X=n||V,{connection:L,isValid:D}=ir.isValid(M.nativeEvent,{handle:{nodeId:g,id:m,type:e},connectionMode:A,fromNodeId:P.nodeId,fromHandleId:P.id||null,fromType:P.type,isValidConnection:X,flowId:W,doc:Q,lib:B,nodeLookup:U});D&&L&&O(L);let Y=structuredClone(q);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,_?.(M,Y),b.setState({connectionClickStartHandle:null})};return(0,H.jsx)("div",{"data-handleid":m,"data-nodeid":g,"data-handlepos":t,"data-id":`${v}-${g}-${m}-${e}`,className:_e(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",h,l,{source:!y,target:y,connectable:o,connectablestart:r,connectableend:i,clickconnecting:k,connectingfrom:x,connectingto:C,valid:z,connectionindicator:o&&(!R||I)&&(R||F?i:r)}]),onMouseDown:N,onTouchStart:N,onClick:S?w:void 0,ref:p,...f,children:c})}var an=(0,$.memo)(Tc(iy));function ay({data:e,isConnectable:t,sourcePosition:n=ee.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[e?.label,(0,H.jsx)(an,{type:"source",position:n,isConnectable:t})]})}function sy({data:e,isConnectable:t,targetPosition:n=ee.Top,sourcePosition:o=ee.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(an,{type:"target",position:n,isConnectable:t}),e?.label,(0,H.jsx)(an,{type:"source",position:o,isConnectable:t})]})}function ly(){return null}function cy({data:e,isConnectable:t,targetPosition:n=ee.Top}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(an,{type:"target",position:n,isConnectable:t}),e?.label]})}var ur={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},gc={input:ay,default:sy,output:cy,group:ly};function uy(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var dy=e=>{let{width:t,height:n,x:o,y:r}=In(e.nodeLookup,{filter:i=>!!i.selected});return{width:ot(t)?t:null,height:ot(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function fy({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=ye(),{width:r,height:i,transformString:a,userSelectionActive:s}=de(dy,ve),c=Hc(),l=(0,$.useRef)(null);(0,$.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let u=!s&&r!==null&&i!==null;if(Lc({nodeRef:l,disabled:!u}),!u)return null;let d=e?p=>{let m=o.getState().nodes.filter(y=>y.selected);e(p,m)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(ur,p.key)&&(p.preventDefault(),c({direction:ur[p.key],factor:p.shiftKey?4:1}))};return(0,H.jsx)("div",{className:_e(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,H.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var hc=typeof window<"u"?window:void 0,py=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Fc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:u,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:m,panActivationKeyCode:y,zoomActivationKeyCode:b,elementsSelectable:g,zoomOnScroll:S,zoomOnPinch:h,panOnScroll:v,panOnScrollSpeed:x,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:I,autoPanOnSelection:R,defaultViewport:F,translateExtent:z,minZoom:O,maxZoom:N,preventScrolling:w,onSelectionContextMenu:M,noWheelClassName:E,noPanClassName:_,disableKeyboardA11y:P,onViewportChange:A,isControlledViewport:V}){let{nodesSelectionActive:B,userSelectionActive:W}=de(py,ve),U=io(l,{target:hc}),q=io(y,{target:hc}),Q=q||I,X=q||v,L=u&&Q!==!0,D=U||W||L;return G0({deleteKeyCode:c,multiSelectionKeyCode:m}),(0,H.jsx)(q0,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:S,zoomOnPinch:h,panOnScroll:X,panOnScrollSpeed:x,panOnScrollMode:C,zoomOnDoubleClick:k,panOnDrag:!U&&Q,defaultViewport:F,translateExtent:z,minZoom:O,maxZoom:N,zoomActivationKeyCode:b,preventScrolling:w,noWheelClassName:E,noPanClassName:_,onViewportChange:A,isControlledViewport:V,paneClickDistance:s,selectionOnDrag:L,children:(0,H.jsxs)(j0,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:Q,autoPanOnSelection:R,isSelecting:!!D,selectionMode:d,selectionKeyPressed:U,paneClickDistance:s,selectionOnDrag:L,children:[e,B&&(0,H.jsx)(fy,{onSelectionContextMenu:M,noPanClassName:_,disableKeyboardA11y:P})]})})}Fc.displayName="FlowRenderer";var my=(0,$.memo)(Fc),gy=e=>t=>e?Uo(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function hy(e){return de((0,$.useCallback)(gy(e),[e]),ve)}var by=e=>e.updateNodeInternals;function yy(){let e=de(by),[t]=(0,$.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,$.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function xy({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=ye(),i=(0,$.useRef)(null),a=(0,$.useRef)(null),s=(0,$.useRef)(e.sourcePosition),c=(0,$.useRef)(e.targetPosition),l=(0,$.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,$.useEffect)(()=>{i.current&&!e.hidden&&(!u||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[u,e.hidden]),(0,$.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,$.useEffect)(()=>{if(i.current){let d=l.current!==t,f=s.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(l.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function wy({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:l,nodesFocusable:u,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:m,rfId:y,nodeTypes:b,nodeClickDistance:g,onError:S}){let{node:h,internals:v,isParent:x}=de(D=>{let Y=D.nodeLookup.get(e),J=D.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:J}},ve),C=h.type||"default",k=b?.[C]||gc[C];k===void 0&&(S?.("003",Qe.error003(C)),C="default",k=b?.default||gc.default);let I=!!(h.draggable||s&&typeof h.draggable>"u"),R=!!(h.selectable||c&&typeof h.selectable>"u"),F=!!(h.connectable||l&&typeof h.connectable>"u"),z=!!(h.focusable||u&&typeof h.focusable>"u"),O=ye(),N=Bi(h),w=xy({node:h,nodeType:C,hasDimensions:N,resizeObserver:d}),M=Lc({nodeRef:w,disabled:h.hidden||!I,noDragClassName:f,handleSelector:h.dragHandle,nodeId:e,isSelectable:R,nodeClickDistance:g}),E=Hc();if(h.hidden)return null;let _=dt(h),P=uy(h),A=R||I||t||n||o||r,V=n?D=>n(D,{...v.userNode}):void 0,B=o?D=>o(D,{...v.userNode}):void 0,W=r?D=>r(D,{...v.userNode}):void 0,U=i?D=>i(D,{...v.userNode}):void 0,q=a?D=>a(D,{...v.userNode}):void 0,Q=D=>{let{selectNodesOnDrag:Y,nodeDragThreshold:J}=O.getState();R&&(!Y||!I||J>0)&&na({id:e,store:O,nodeRef:w}),t&&t(D,{...v.userNode})},X=D=>{if(!(Gi(D.nativeEvent)||m)){if(Ii.includes(D.key)&&R){let Y=D.key==="Escape";na({id:e,store:O,unselect:Y,nodeRef:w})}else if(I&&h.selected&&Object.prototype.hasOwnProperty.call(ur,D.key)){D.preventDefault();let{ariaLabelConfig:Y}=O.getState();O.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:D.key.replace("Arrow","").toLowerCase(),x:~~v.positionAbsolute.x,y:~~v.positionAbsolute.y})}),E({direction:ur[D.key],factor:D.shiftKey?4:1})}}},L=()=>{if(m||!w.current?.matches(":focus-visible"))return;let{transform:D,width:Y,height:J,autoPanOnNodeFocus:oe,setCenter:j}=O.getState();if(!oe)return;Uo(new Map([[e,h]]),{x:0,y:0,width:Y,height:J},D,!0).length>0||j(h.position.x+_.width/2,h.position.y+_.height/2,{zoom:D[2]})};return(0,H.jsx)("div",{className:_e(["react-flow__node",`react-flow__node-${C}`,{[p]:I},h.className,{selected:h.selected,selectable:R,parent:x,draggable:I,dragging:M}]),ref:w,style:{zIndex:v.z,transform:`translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,pointerEvents:A?"all":"none",visibility:N?"visible":"hidden",...h.style,...P},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:B,onMouseLeave:W,onContextMenu:U,onClick:Q,onDoubleClick:q,onKeyDown:z?X:void 0,tabIndex:z?0:void 0,onFocus:z?L:void 0,role:h.ariaRole??(z?"group":void 0),"aria-roledescription":"node","aria-describedby":m?void 0:`${Ic}-${y}`,"aria-label":h.ariaLabel,...h.domAttributes,children:(0,H.jsx)(J0,{value:e,children:(0,H.jsx)(k,{id:e,data:h.data,type:C,positionAbsoluteX:v.positionAbsolute.x,positionAbsoluteY:v.positionAbsolute.y,selected:h.selected??!1,selectable:R,draggable:I,deletable:h.deletable??!0,isConnectable:F,sourcePosition:h.sourcePosition,targetPosition:h.targetPosition,dragging:M,dragHandle:h.dragHandle,zIndex:v.z,parentId:h.parentId,..._})})})}var vy=(0,$.memo)(wy),ky=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Vc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=de(ky,ve),i=hy(e.onlyRenderVisibleElements),a=yy();return(0,H.jsx)("div",{className:"react-flow__nodes",style:pr,children:i.map(s=>(0,H.jsx)(vy,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}Vc.displayName="NodeRenderer";var Sy=(0,$.memo)(Vc);function Cy(e){return de((0,$.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&wl({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),ve)}var _y=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,H.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Ey=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,H.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},bc={[Ot.Arrow]:_y,[Ot.ArrowClosed]:Ey};function Ny(e){let t=ye();return(0,$.useMemo)(()=>Object.prototype.hasOwnProperty.call(bc,e)?bc[e]:(t.getState().onError?.("009",Qe.error009(e)),null),[e])}var My=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=Ny(t);return c?(0,H.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,H.jsx)(c,{color:n,strokeWidth:a})}):null},Gc=({defaultColor:e,rfId:t})=>{let n=de(i=>i.edges),o=de(i=>i.defaultEdgeOptions),r=(0,$.useMemo)(()=>Sl(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,H.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,H.jsx)("defs",{children:r.map(i=>(0,H.jsx)(My,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Gc.displayName="MarkerDefinitions";var Iy=(0,$.memo)(Gc);function Xc({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:l,...u}){let[d,f]=(0,$.useState)({x:1,y:0,width:0,height:0}),p=_e(["react-flow__edge-textwrapper",l]),m=(0,$.useRef)(null);return(0,$.useEffect)(()=>{if(m.current){let y=m.current.getBBox();f({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,H.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...u,children:[r&&(0,H.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,H.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:m,style:o,children:n}),c]}):null}Xc.displayName="EdgeText";var Py=(0,$.memo)(Xc);function mr({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:l=20,...u}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("path",{...u,d:e,fill:"none",className:_e(["react-flow__edge-path",u.className])}),l?(0,H.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&ot(t)&&ot(n)?(0,H.jsx)(Py,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function yc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===ee.Left||e===ee.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Yc({sourceX:e,sourceY:t,sourcePosition:n=ee.Bottom,targetX:o,targetY:r,targetPosition:i=ee.Top}){let[a,s]=yc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=yc({pos:i,x1:o,y1:r,x2:e,y2:t}),[u,d,f,p]=Jo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:l});return[`M${e},${t} C${a},${s} ${c},${l} ${o},${r}`,u,d,f,p]}function qc(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})=>{let[S,h,v]=Yc({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),x=e.isInternal?void 0:t;return(0,H.jsx)(mr,{id:x,path:S,labelX:h,labelY:v,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:g})})}var zy=qc({isInternal:!1}),Uc=qc({isInternal:!0});zy.displayName="SimpleBezierEdge";Uc.displayName="SimpleBezierEdgeInternal";function Zc(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,sourcePosition:p=ee.Bottom,targetPosition:m=ee.Top,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:S})=>{let[h,v,x]=ro({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:m,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),C=e.isInternal?void 0:t;return(0,H.jsx)(mr,{id:C,path:h,labelX:v,labelY:x,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:y,markerStart:b,interactionWidth:S})})}var Kc=Zc({isInternal:!1}),jc=Zc({isInternal:!0});Kc.displayName="SmoothStepEdge";jc.displayName="SmoothStepEdgeInternal";function Qc(e){return(0,$.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,H.jsx)(Kc,{...n,id:o,pathOptions:(0,$.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Ry=Qc({isInternal:!1}),Jc=Qc({isInternal:!0});Ry.displayName="StepEdge";Jc.displayName="StepEdgeInternal";function eu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})=>{let[b,g,S]=tr({sourceX:n,sourceY:o,targetX:r,targetY:i}),h=e.isInternal?void 0:t;return(0,H.jsx)(mr,{id:h,path:b,labelX:g,labelY:S,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:m,interactionWidth:y})})}var Dy=eu({isInternal:!1}),tu=eu({isInternal:!0});Dy.displayName="StraightEdge";tu.displayName="StraightEdgeInternal";function nu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=ee.Bottom,targetPosition:s=ee.Top,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,pathOptions:g,interactionWidth:S})=>{let[h,v,x]=er({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:g?.curvature}),C=e.isInternal?void 0:t;return(0,H.jsx)(mr,{id:C,path:h,labelX:v,labelY:x,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:m,markerEnd:y,markerStart:b,interactionWidth:S})})}var Ay=nu({isInternal:!1}),ou=nu({isInternal:!0});Ay.displayName="BezierEdge";ou.displayName="BezierEdgeInternal";var xc={default:ou,straight:tu,step:Jc,smoothstep:jc,simplebezier:Uc},wc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Ty=(e,t,n)=>n===ee.Left?e-t:n===ee.Right?e+t:e,Oy=(e,t,n)=>n===ee.Top?e-t:n===ee.Bottom?e+t:e,vc="react-flow__edgeupdater";function kc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,H.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:_e([vc,`${vc}-${s}`]),cx:Ty(t,o,e),cy:Oy(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function $y({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:l,onReconnectStart:u,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let m=ye(),y=(v,x)=>{if(v.button!==0)return;let{autoPanOnConnect:C,domNode:k,connectionMode:I,connectionRadius:R,lib:F,onConnectStart:z,cancelConnection:O,nodeLookup:N,rfId:w,panBy:M,updateConnection:E}=m.getState(),_=x.type==="target",P=(B,W)=>{f(!1),d?.(B,n,x.type,W)},A=B=>l?.(n,B),V=(B,W)=>{f(!0),u?.(v,n,x.type),z?.(B,W)};ir.onPointerDown(v.nativeEvent,{autoPanOnConnect:C,connectionMode:I,connectionRadius:R,domNode:k,handleId:x.id,nodeId:x.nodeId,nodeLookup:N,isTarget:_,edgeUpdaterType:x.type,lib:F,flowId:w,cancelConnection:O,panBy:M,isValidConnection:(...B)=>m.getState().isValidConnection?.(...B)??!0,onConnect:A,onConnectStart:V,onConnectEnd:(...B)=>m.getState().onConnectEnd?.(...B),onReconnectEnd:P,updateConnection:E,getTransform:()=>m.getState().transform,getFromHandle:()=>m.getState().connection.fromHandle,dragThreshold:m.getState().connectionDragThreshold,handleDomNode:v.currentTarget})},b=v=>y(v,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=v=>y(v,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),S=()=>p(!0),h=()=>p(!1);return(0,H.jsxs)(H.Fragment,{children:[(e===!0||e==="source")&&(0,H.jsx)(kc,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:b,onMouseEnter:S,onMouseOut:h,type:"source"}),(e===!0||e==="target")&&(0,H.jsx)(kc,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:g,onMouseEnter:S,onMouseOut:h,type:"target"})]})}function Ly({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:m,edgeTypes:y,noPanClassName:b,onError:g,disableKeyboardA11y:S}){let h=de(j=>j.edgeLookup.get(e)),v=de(j=>j.defaultEdgeOptions);h=v?{...v,...h}:h;let x=h.type||"default",C=y?.[x]||xc[x];C===void 0&&(g?.("011",Qe.error011(x)),x="default",C=y?.default||xc.default);let k=!!(h.focusable||t&&typeof h.focusable>"u"),I=typeof d<"u"&&(h.reconnectable||n&&typeof h.reconnectable>"u"),R=!!(h.selectable||o&&typeof h.selectable>"u"),F=(0,$.useRef)(null),[z,O]=(0,$.useState)(!1),[N,w]=(0,$.useState)(!1),M=ye(),{zIndex:E=h.zIndex,sourceX:_,sourceY:P,targetX:A,targetY:V,sourcePosition:B,targetPosition:W}=de((0,$.useCallback)(j=>{let te=j.nodeLookup.get(h.source),se=j.nodeLookup.get(h.target);if(!te||!se)return wc;let ce=kl({id:e,sourceNode:te,targetNode:se,sourceHandle:h.sourceHandle||null,targetHandle:h.targetHandle||null,connectionMode:j.connectionMode,onError:g}),me=xl({selected:h.selected,zIndex:h.zIndex,sourceNode:te,targetNode:se,elevateOnSelect:j.elevateEdgesOnSelect,zIndexMode:j.zIndexMode});return{...ce||wc,zIndex:me}},[h.source,h.target,h.sourceHandle,h.targetHandle,h.selected,h.zIndex]),ve),U=(0,$.useMemo)(()=>h.markerStart?`url('#${nr(h.markerStart,m)}')`:void 0,[h.markerStart,m]),q=(0,$.useMemo)(()=>h.markerEnd?`url('#${nr(h.markerEnd,m)}')`:void 0,[h.markerEnd,m]);if(h.hidden||_===null||P===null||A===null||V===null)return null;let Q=j=>{let{addSelectedEdges:te,unselectNodesAndEdges:se,multiSelectionActive:ce}=M.getState();R&&(M.setState({nodesSelectionActive:!1}),h.selected&&ce?(se({nodes:[],edges:[h]}),F.current?.blur()):te([e])),r&&r(j,h)},X=i?j=>{i(j,{...h})}:void 0,L=a?j=>{a(j,{...h})}:void 0,D=s?j=>{s(j,{...h})}:void 0,Y=c?j=>{c(j,{...h})}:void 0,J=l?j=>{l(j,{...h})}:void 0,oe=j=>{if(!S&&Ii.includes(j.key)&&R){let{unselectNodesAndEdges:te,addSelectedEdges:se}=M.getState();j.key==="Escape"?(F.current?.blur(),te({edges:[h]})):se([e])}};return(0,H.jsx)("svg",{style:{zIndex:E},children:(0,H.jsxs)("g",{className:_e(["react-flow__edge",`react-flow__edge-${x}`,h.className,b,{selected:h.selected,animated:h.animated,inactive:!R&&!r,updating:z,selectable:R}]),onClick:Q,onDoubleClick:X,onContextMenu:L,onMouseEnter:D,onMouseMove:Y,onMouseLeave:J,onKeyDown:k?oe:void 0,tabIndex:k?0:void 0,role:h.ariaRole??(k?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":h.ariaLabel===null?void 0:h.ariaLabel||`Edge from ${h.source} to ${h.target}`,"aria-describedby":k?`${Pc}-${m}`:void 0,ref:F,...h.domAttributes,children:[!N&&(0,H.jsx)(C,{id:e,source:h.source,target:h.target,type:h.type,selected:h.selected,animated:h.animated,selectable:R,deletable:h.deletable??!0,label:h.label,labelStyle:h.labelStyle,labelShowBg:h.labelShowBg,labelBgStyle:h.labelBgStyle,labelBgPadding:h.labelBgPadding,labelBgBorderRadius:h.labelBgBorderRadius,sourceX:_,sourceY:P,targetX:A,targetY:V,sourcePosition:B,targetPosition:W,data:h.data,style:h.style,sourceHandleId:h.sourceHandle,targetHandleId:h.targetHandle,markerStart:U,markerEnd:q,pathOptions:"pathOptions"in h?h.pathOptions:void 0,interactionWidth:h.interactionWidth}),I&&(0,H.jsx)($y,{edge:h,isReconnectable:I,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:_,sourceY:P,targetX:A,targetY:V,sourcePosition:B,targetPosition:W,setUpdateHover:O,setReconnecting:w})]})})}var Hy=(0,$.memo)(Ly),By=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function ru({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:u,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,disableKeyboardA11y:y}){let{edgesFocusable:b,edgesReconnectable:g,elementsSelectable:S,onError:h}=de(By,ve),v=Cy(t);return(0,H.jsxs)("div",{className:"react-flow__edges",children:[(0,H.jsx)(Iy,{defaultColor:e,rfId:n}),v.map(x=>(0,H.jsx)(Hy,{id:x,edgesFocusable:b,edgesReconnectable:g,elementsSelectable:S,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:l,onClick:u,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:m,rfId:n,onError:h,edgeTypes:o,disableKeyboardA11y:y},x))]})}ru.displayName="EdgeRenderer";var Wy=(0,$.memo)(ru),Sc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Fy({children:e}){let t=ye(),n=(0,$.useRef)(null),[o]=(0,$.useState)(()=>t.getState().transform);return Oc(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=Sc(a)))};return i(),t.subscribe(i)},[t]),(0,H.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:Sc(o)},children:e})}function Vy(e){let t=oa(),n=(0,$.useRef)(!1);(0,$.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Gy=e=>e.panZoom?.syncViewport;function Xy(e){let t=de(Gy),n=ye();return(0,$.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Cc(e){return e.connection.inProgress?{...e.connection,to:Rn(e.connection.to,e.transform)}:{...e.connection}}function Yy(e){return e?n=>{let o=Cc(n);return e(o)}:Cc}function qy(e){let t=Yy(e);return de(t,ve)}var Uy=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Zy({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:c}=de(Uy,ve);return!(i&&r&&c)?null:(0,H.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,H.jsx)("g",{className:_e(["react-flow__connection",Ri(s)]),children:(0,H.jsx)(iu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var iu=({style:e,type:t=bt.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:l,toNode:u,toHandle:d,toPosition:f,pointer:p}=qy();if(!r)return;if(n)return(0,H.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:f,connectionStatus:Ri(o),toNode:u,toHandle:d,pointer:p});let m="",y={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case bt.Bezier:[m]=er(y);break;case bt.SimpleBezier:[m]=Yc(y);break;case bt.Step:[m]=ro({...y,borderRadius:0});break;case bt.SmoothStep:[m]=ro(y);break;default:[m]=tr(y)}return(0,H.jsx)("path",{d:m,fill:"none",className:"react-flow__connection-path",style:e})};iu.displayName="ConnectionLine";var Ky={};function _c(e=Ky){let t=(0,$.useRef)(e),n=ye();(0,$.useEffect)(()=>{},[e])}function jy(){let e=ye(),t=(0,$.useRef)(!1);(0,$.useEffect)(()=>{},[])}function au({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:m,connectionLineStyle:y,connectionLineComponent:b,connectionLineContainerStyle:g,selectionKeyCode:S,selectionOnDrag:h,selectionMode:v,multiSelectionKeyCode:x,panActivationKeyCode:C,zoomActivationKeyCode:k,deleteKeyCode:I,onlyRenderVisibleElements:R,elementsSelectable:F,defaultViewport:z,translateExtent:O,minZoom:N,maxZoom:w,preventScrolling:M,defaultMarkerColor:E,zoomOnScroll:_,zoomOnPinch:P,panOnScroll:A,panOnScrollSpeed:V,panOnScrollMode:B,zoomOnDoubleClick:W,panOnDrag:U,autoPanOnSelection:q,onPaneClick:Q,onPaneMouseEnter:X,onPaneMouseMove:L,onPaneMouseLeave:D,onPaneScroll:Y,onPaneContextMenu:J,paneClickDistance:oe,nodeClickDistance:j,onEdgeContextMenu:te,onEdgeMouseEnter:se,onEdgeMouseMove:ce,onEdgeMouseLeave:me,reconnectRadius:$e,onReconnect:ue,onReconnectStart:tt,onReconnectEnd:Le,noDragClassName:at,noWheelClassName:kt,noPanClassName:pt,disableKeyboardA11y:st,nodeExtent:Ve,rfId:Ge,viewport:nt,onViewportChange:Ce,nodesDraggable:pn}){return _c(e),_c(t),jy(),Vy(n),Xy(nt),(0,H.jsx)(my,{onPaneClick:Q,onPaneMouseEnter:X,onPaneMouseMove:L,onPaneMouseLeave:D,onPaneContextMenu:J,onPaneScroll:Y,paneClickDistance:oe,deleteKeyCode:I,selectionKeyCode:S,selectionOnDrag:h,selectionMode:v,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:x,panActivationKeyCode:C,zoomActivationKeyCode:k,elementsSelectable:F,zoomOnScroll:_,zoomOnPinch:P,zoomOnDoubleClick:W,panOnScroll:A,panOnScrollSpeed:V,panOnScrollMode:B,panOnDrag:U,autoPanOnSelection:q,defaultViewport:z,translateExtent:O,minZoom:N,maxZoom:w,onSelectionContextMenu:d,preventScrolling:M,noDragClassName:at,noWheelClassName:kt,noPanClassName:pt,disableKeyboardA11y:st,onViewportChange:Ce,isControlledViewport:!!nt,children:(0,H.jsxs)(Fy,{children:[(0,H.jsx)(Wy,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:ue,onReconnectStart:tt,onReconnectEnd:Le,onlyRenderVisibleElements:R,onEdgeContextMenu:te,onEdgeMouseEnter:se,onEdgeMouseMove:ce,onEdgeMouseLeave:me,reconnectRadius:$e,defaultMarkerColor:E,noPanClassName:pt,disableKeyboardA11y:st,rfId:Ge}),(0,H.jsx)(Zy,{style:y,type:m,component:b,containerStyle:g}),(0,H.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,H.jsx)(Sy,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,nodeClickDistance:j,onlyRenderVisibleElements:R,noPanClassName:pt,noDragClassName:at,disableKeyboardA11y:st,nodeExtent:Ve,rfId:Ge,nodesDraggable:pn}),(0,H.jsx)("div",{className:"react-flow__viewport-portal"})]})})}au.displayName="GraphView";var Qy=(0,$.memo)(au),Jy=Hi("React Flow","https://reactflow.dev/"),Ec=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:l=2,nodeOrigin:u,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,m=new Map,y=new Map,b=new Map,g=o??t??[],S=n??e??[],h=u??[0,0],v=d??Mn;ji(y,b,g);let{nodesInitialized:x}=or(S,p,m,{nodeOrigin:h,nodeExtent:v,zIndexMode:f}),C=[0,0,1];if(a&&r&&i){let k=In(p,{filter:z=>!!((z.width||z.initialWidth)&&(z.height||z.initialHeight))}),{x:I,y:R,zoom:F}=oo(k,r,i,c,l,s?.padding??.1);C=[I,R,F]}return{rfId:"1",width:r??0,height:i??0,transform:C,nodes:S,nodesInitialized:x,nodeLookup:p,parentLookup:m,edges:g,edgeLookup:b,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:Mn,nodeExtent:v,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Tt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:h,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...zi},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Jy,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Pi,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},ex=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f})=>tc((p,m)=>{async function y(){let{nodeLookup:b,panZoom:g,fitViewOptions:S,fitViewResolver:h,width:v,height:x,minZoom:C,maxZoom:k}=m();g&&(await pl({nodes:b,width:v,height:x,panZoom:g,minZoom:C,maxZoom:k},S),h?.resolve(!0),p({fitViewResolver:null}))}return{...Ec({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:b=>{let{nodeLookup:g,parentLookup:S,nodeOrigin:h,elevateNodesOnSelect:v,fitViewQueued:x,zIndexMode:C,nodesSelectionActive:k}=m(),{nodesInitialized:I,hasSelectedNodes:R}=or(b,g,S,{nodeOrigin:h,nodeExtent:d,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:C}),F=k&&R;x&&I?(y(),p({nodes:b,nodesInitialized:I,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:F})):p({nodes:b,nodesInitialized:I,nodesSelectionActive:F})},setEdges:b=>{let{connectionLookup:g,edgeLookup:S}=m();ji(g,S,b),p({edges:b})},setDefaultNodesAndEdges:(b,g)=>{if(b){let{setNodes:S}=m();S(b),p({hasDefaultNodes:!0})}if(g){let{setEdges:S}=m();S(g),p({hasDefaultEdges:!0})}},updateNodeInternals:b=>{let{triggerNodeChanges:g,nodeLookup:S,parentLookup:h,domNode:v,nodeOrigin:x,nodeExtent:C,debug:k,fitViewQueued:I,zIndexMode:R}=m(),{changes:F,updatedInternals:z}=Nl(b,S,h,v,x,C,R);z&&(_l(S,h,{nodeOrigin:x,nodeExtent:C,zIndexMode:R}),I?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),F?.length>0&&(k&&console.log("React Flow: trigger node changes",F),g?.(F)))},updateNodePositions:(b,g=!1)=>{let S=[],h=[],{nodeLookup:v,triggerNodeChanges:x,connection:C,updateConnection:k,onNodesChangeMiddlewareMap:I}=m();for(let[R,F]of b){let z=v.get(R),O=!!(z?.expandParent&&z?.parentId&&F?.position),N={id:R,type:"position",position:O?{x:Math.max(0,F.position.x),y:Math.max(0,F.position.y)}:F.position,dragging:g};if(z&&C.inProgress&&C.fromNode.id===z.id){let w=$t(z,C.fromHandle,ee.Left,!0);k({...C,from:w})}O&&z.parentId&&S.push({id:R,parentId:z.parentId,rect:{...F.internals.positionAbsolute,width:F.measured.width??0,height:F.measured.height??0}}),h.push(N)}if(S.length>0){let{parentLookup:R,nodeOrigin:F}=m(),z=rr(S,v,R,F);h.push(...z)}for(let R of I.values())h=R(h);x(h)},triggerNodeChanges:b=>{let{onNodesChange:g,setNodes:S,nodes:h,hasDefaultNodes:v,debug:x}=m();if(b?.length){if(v){let C=Dc(b,h);S(C)}x&&console.log("React Flow: trigger node changes",b),g?.(b)}},triggerEdgeChanges:b=>{let{onEdgesChange:g,setEdges:S,edges:h,hasDefaultEdges:v,debug:x}=m();if(b?.length){if(v){let C=Ac(b,h);S(C)}x&&console.log("React Flow: trigger edge changes",b),g?.(b)}},addSelectedNodes:b=>{let{multiSelectionActive:g,edgeLookup:S,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:x}=m();if(g){let C=b.map(k=>rn(k,!0));v(C);return}v(Tn(h,new Set([...b]),!0)),x(Tn(S))},addSelectedEdges:b=>{let{multiSelectionActive:g,edgeLookup:S,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:x}=m();if(g){let C=b.map(k=>rn(k,!0));x(C);return}x(Tn(S,new Set([...b]))),v(Tn(h,new Set,!0))},unselectNodesAndEdges:({nodes:b,edges:g}={})=>{let{edges:S,nodes:h,nodeLookup:v,triggerNodeChanges:x,triggerEdgeChanges:C}=m(),k=b||h,I=g||S,R=[];for(let z of k){if(!z.selected)continue;let O=v.get(z.id);O&&(O.selected=!1),R.push(rn(z.id,!1))}let F=[];for(let z of I)z.selected&&F.push(rn(z.id,!1));x(R),C(F)},setMinZoom:b=>{let{panZoom:g,maxZoom:S}=m();g?.setScaleExtent([b,S]),p({minZoom:b})},setMaxZoom:b=>{let{panZoom:g,minZoom:S}=m();g?.setScaleExtent([S,b]),p({maxZoom:b})},setTranslateExtent:b=>{m().panZoom?.setTranslateExtent(b),p({translateExtent:b})},resetSelectedElements:()=>{let{edges:b,nodes:g,triggerNodeChanges:S,triggerEdgeChanges:h,elementsSelectable:v}=m();if(!v)return;let x=g.reduce((k,I)=>I.selected?[...k,rn(I.id,!1)]:k,[]),C=b.reduce((k,I)=>I.selected?[...k,rn(I.id,!1)]:k,[]);S(x),h(C)},setNodeExtent:b=>{let{nodes:g,nodeLookup:S,parentLookup:h,nodeOrigin:v,elevateNodesOnSelect:x,nodeExtent:C,zIndexMode:k}=m();b[0][0]===C[0][0]&&b[0][1]===C[0][1]&&b[1][0]===C[1][0]&&b[1][1]===C[1][1]||(or(g,S,h,{nodeOrigin:v,nodeExtent:b,elevateNodesOnSelect:x,checkEquality:!1,zIndexMode:k}),p({nodeExtent:b}))},panBy:b=>{let{transform:g,width:S,height:h,panZoom:v,translateExtent:x}=m();return Ml({delta:b,panZoom:v,transform:g,translateExtent:x,width:S,height:h})},setCenter:async(b,g,S)=>{let{width:h,height:v,maxZoom:x,panZoom:C}=m();if(!C)return!1;let k=typeof S?.zoom<"u"?S.zoom:x;return await C.setViewport({x:h/2-b*k,y:v/2-g*k,zoom:k},{duration:S?.duration,ease:S?.ease,interpolate:S?.interpolate}),!0},cancelConnection:()=>{p({connection:{...zi}})},updateConnection:b=>{p({connection:b})},reset:()=>p({...Ec()})}},Object.is);function tx({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f,children:p}){let[m]=(0,$.useState)(()=>ex({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}));return(0,H.jsx)(h0,{value:m,children:(0,H.jsx)(B0,{children:(0,H.jsx)(ty,{children:p})})})}function nx({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,$.useContext)(dr)?(0,H.jsx)(H.Fragment,{children:e}):(0,H.jsx)(tx,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var ox={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function rx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:l,onMove:u,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,onNodeMouseEnter:S,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:x,onNodeDoubleClick:C,onNodeDragStart:k,onNodeDrag:I,onNodeDragStop:R,onNodesDelete:F,onEdgesDelete:z,onDelete:O,onSelectionChange:N,onSelectionDragStart:w,onSelectionDrag:M,onSelectionDragStop:E,onSelectionContextMenu:_,onSelectionStart:P,onSelectionEnd:A,onBeforeDelete:V,connectionMode:B,connectionLineType:W=bt.Bezier,connectionLineStyle:U,connectionLineComponent:q,connectionLineContainerStyle:Q,deleteKeyCode:X="Backspace",selectionKeyCode:L="Shift",selectionOnDrag:D=!1,selectionMode:Y=en.Full,panActivationKeyCode:J="Space",multiSelectionKeyCode:oe=Dn()?"Meta":"Control",zoomActivationKeyCode:j=Dn()?"Meta":"Control",snapToGrid:te,snapGrid:se,onlyRenderVisibleElements:ce=!1,selectNodesOnDrag:me,nodesDraggable:$e,autoPanOnNodeFocus:ue,nodesConnectable:tt,nodesFocusable:Le,nodeOrigin:at=zc,edgesFocusable:kt,edgesReconnectable:pt,elementsSelectable:st=!0,defaultViewport:Ve=I0,minZoom:Ge=.5,maxZoom:nt=2,translateExtent:Ce=Mn,preventScrolling:pn=!0,nodeExtent:mn,defaultMarkerColor:ho="#b1b1b7",zoomOnScroll:zr=!0,zoomOnPinch:Rr=!0,panOnScroll:Dr=!1,panOnScrollSpeed:Ar=.5,panOnScrollMode:Tr=It.Free,zoomOnDoubleClick:Or=!0,panOnDrag:$r=!0,onPaneClick:Lr,onPaneMouseEnter:Hr,onPaneMouseMove:Xt,onPaneMouseLeave:bo,onPaneScroll:yo,onPaneContextMenu:Br,paneClickDistance:T=1,nodeClickDistance:G=0,children:K,onReconnect:re,onReconnectStart:ke,onReconnectEnd:St,onEdgeContextMenu:Pe,onEdgeDoubleClick:gn,onEdgeMouseEnter:qf,onEdgeMouseMove:Uf,onEdgeMouseLeave:Zf,reconnectRadius:Kf=10,onNodesChange:jf,onEdgesChange:Qf,noDragClassName:Jf="nodrag",noWheelClassName:ep="nowheel",noPanClassName:Oa="nopan",fitView:$a,fitViewOptions:La,connectOnClick:tp,attributionPosition:np,proOptions:op,defaultEdgeOptions:rp,elevateNodesOnSelect:ip=!0,elevateEdgesOnSelect:ap=!1,disableKeyboardA11y:Ha=!1,autoPanOnConnect:sp,autoPanOnNodeDrag:lp,autoPanOnSelection:cp=!0,autoPanSpeed:up,connectionRadius:dp,isValidConnection:fp,onError:pp,style:mp,id:Ba,nodeDragThreshold:gp,connectionDragThreshold:hp,viewport:bp,onViewportChange:yp,width:xp,height:wp,colorMode:vp="light",debug:kp,onScroll:Wa,ariaLabelConfig:Sp,zIndexMode:Fa="basic",...Cp},_p){let Wr=Ba||"1",Ep=D0(vp),Np=(0,$.useCallback)(Va=>{Va.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Wa?.(Va)},[Wa]);return(0,H.jsx)("div",{"data-testid":"rf__wrapper",...Cp,onScroll:Np,style:{...mp,...ox},ref:_p,className:_e(["react-flow",r,Ep]),id:Ba,role:"application",children:(0,H.jsxs)(nx,{nodes:e,edges:t,width:xp,height:wp,fitView:$a,fitViewOptions:La,minZoom:Ge,maxZoom:nt,nodeOrigin:at,nodeExtent:mn,zIndexMode:Fa,children:[(0,H.jsx)(R0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:m,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:g,nodesDraggable:$e,autoPanOnNodeFocus:ue,nodesConnectable:tt,nodesFocusable:Le,edgesFocusable:kt,edgesReconnectable:pt,elementsSelectable:st,elevateNodesOnSelect:ip,elevateEdgesOnSelect:ap,minZoom:Ge,maxZoom:nt,nodeExtent:mn,onNodesChange:jf,onEdgesChange:Qf,snapToGrid:te,snapGrid:se,connectionMode:B,translateExtent:Ce,connectOnClick:tp,defaultEdgeOptions:rp,fitView:$a,fitViewOptions:La,onNodesDelete:F,onEdgesDelete:z,onDelete:O,onNodeDragStart:k,onNodeDrag:I,onNodeDragStop:R,onSelectionDrag:M,onSelectionDragStart:w,onSelectionDragStop:E,onMove:u,onMoveStart:d,onMoveEnd:f,noPanClassName:Oa,nodeOrigin:at,rfId:Wr,autoPanOnConnect:sp,autoPanOnNodeDrag:lp,autoPanSpeed:up,onError:pp,connectionRadius:dp,isValidConnection:fp,selectNodesOnDrag:me,nodeDragThreshold:gp,connectionDragThreshold:hp,onBeforeDelete:V,debug:kp,ariaLabelConfig:Sp,zIndexMode:Fa}),(0,H.jsx)(Qy,{onInit:l,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:S,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:x,onNodeDoubleClick:C,nodeTypes:i,edgeTypes:a,connectionLineType:W,connectionLineStyle:U,connectionLineComponent:q,connectionLineContainerStyle:Q,selectionKeyCode:L,selectionOnDrag:D,selectionMode:Y,deleteKeyCode:X,multiSelectionKeyCode:oe,panActivationKeyCode:J,zoomActivationKeyCode:j,onlyRenderVisibleElements:ce,defaultViewport:Ve,translateExtent:Ce,minZoom:Ge,maxZoom:nt,preventScrolling:pn,zoomOnScroll:zr,zoomOnPinch:Rr,zoomOnDoubleClick:Or,panOnScroll:Dr,panOnScrollSpeed:Ar,panOnScrollMode:Tr,panOnDrag:$r,autoPanOnSelection:cp,onPaneClick:Lr,onPaneMouseEnter:Hr,onPaneMouseMove:Xt,onPaneMouseLeave:bo,onPaneScroll:yo,onPaneContextMenu:Br,paneClickDistance:T,nodeClickDistance:G,onSelectionContextMenu:_,onSelectionStart:P,onSelectionEnd:A,onReconnect:re,onReconnectStart:ke,onReconnectEnd:St,onEdgeContextMenu:Pe,onEdgeDoubleClick:gn,onEdgeMouseEnter:qf,onEdgeMouseMove:Uf,onEdgeMouseLeave:Zf,reconnectRadius:Kf,defaultMarkerColor:ho,noDragClassName:Jf,noWheelClassName:ep,noPanClassName:Oa,rfId:Wr,disableKeyboardA11y:Ha,nodeExtent:mn,viewport:bp,onViewportChange:yp,nodesDraggable:$e}),(0,H.jsx)(M0,{onSelectionChange:N}),K,(0,H.jsx)(S0,{proOptions:op,position:np}),(0,H.jsx)(k0,{rfId:Wr,disableKeyboardA11y:Ha})]})})}var su=Tc(rx);function lu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>Dc(r,i)),[]);return[t,n,o]}function cu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>Ac(r,i)),[]);return[t,n,o]}var c1=Qe.error014();function ix({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,H.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:_e(["react-flow__background-pattern",n,o])})}function ax({radius:e,className:t}){return(0,H.jsx)("circle",{cx:e,cy:e,r:e,className:_e(["react-flow__background-pattern","dots",t])})}var yt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(yt||(yt={}));var sx={[yt.Dots]:1,[yt.Lines]:1,[yt.Cross]:6},lx=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function uu({id:e,variant:t=yt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:c,className:l,patternClassName:u}){let d=(0,$.useRef)(null),{transform:f,patternId:p}=de(lx,ve),m=o||sx[t],y=t===yt.Dots,b=t===yt.Cross,g=Array.isArray(n)?n:[n,n],S=[g[0]*f[2]||1,g[1]*f[2]||1],h=m*f[2],v=Array.isArray(i)?i:[i,i],x=b?[h,h]:S,C=[v[0]*f[2]||1+x[0]/2,v[1]*f[2]||1+x[1]/2],k=`${p}${e||""}`;return(0,H.jsxs)("svg",{className:_e(["react-flow__background",l]),style:{...c,...pr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,H.jsx)("pattern",{id:k,x:f[0]%S[0],y:f[1]%S[1],width:S[0],height:S[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:y?(0,H.jsx)(ax,{radius:h/2,className:u}):(0,H.jsx)(ix,{dimensions:x,lineWidth:r,variant:t,className:u})}),(0,H.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${k})`})]})}uu.displayName="Background";var du=(0,$.memo)(uu);function cx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,H.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function ux(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,H.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function dx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,H.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function fx(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function px(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function cr({children:e,className:t,...n}){return(0,H.jsx)("button",{type:"button",className:_e(["react-flow__controls-button",t]),...n,children:e})}var mx=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function fu({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:l,children:u,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let m=ye(),{isInteractive:y,minZoomReached:b,maxZoomReached:g,ariaLabelConfig:S}=de(mx,ve),{zoomIn:h,zoomOut:v,fitView:x}=oa(),C=()=>{h(),i?.()},k=()=>{v(),a?.()},I=()=>{x(r),s?.()},R=()=>{m.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),c?.(!y)};return(0,H.jsxs)(fr,{className:_e(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",l]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??S["controls.ariaLabel"],children:[t&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(cr,{onClick:C,className:"react-flow__controls-zoomin",title:S["controls.zoomIn.ariaLabel"],"aria-label":S["controls.zoomIn.ariaLabel"],disabled:g,children:(0,H.jsx)(cx,{})}),(0,H.jsx)(cr,{onClick:k,className:"react-flow__controls-zoomout",title:S["controls.zoomOut.ariaLabel"],"aria-label":S["controls.zoomOut.ariaLabel"],disabled:b,children:(0,H.jsx)(ux,{})})]}),n&&(0,H.jsx)(cr,{className:"react-flow__controls-fitview",onClick:I,title:S["controls.fitView.ariaLabel"],"aria-label":S["controls.fitView.ariaLabel"],children:(0,H.jsx)(dx,{})}),o&&(0,H.jsx)(cr,{className:"react-flow__controls-interactive",onClick:R,title:S["controls.interactive.ariaLabel"],"aria-label":S["controls.interactive.ariaLabel"],children:y?(0,H.jsx)(px,{}):(0,H.jsx)(fx,{})}),u]})}fu.displayName="Controls";var u1=(0,$.memo)(fu);function gx({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:c,className:l,borderRadius:u,shapeRendering:d,selected:f,onClick:p}){let{background:m,backgroundColor:y}=i||{},b=a||m||y;return(0,H.jsx)("rect",{className:_e(["react-flow__minimap-node",{selected:f},l]),x:t,y:n,rx:u,ry:u,width:o,height:r,style:{fill:b,stroke:s,strokeWidth:c},shapeRendering:d,onClick:p?g=>p(g,e):void 0})}var hx=(0,$.memo)(gx),bx=e=>e.nodes.map(t=>t.id),ta=e=>e instanceof Function?e:()=>e;function yx({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=hx,onClick:a}){let s=de(bx,ve),c=ta(t),l=ta(e),u=ta(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,H.jsx)(H.Fragment,{children:s.map(f=>(0,H.jsx)(wx,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:u,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function xx({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:l,x:u,y:d,width:f,height:p}=de(m=>{let y=m.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let b=y.internals.userNode,{x:g,y:S}=y.internals.positionAbsolute,{width:h,height:v}=dt(b);return{node:b,x:g,y:S,width:h,height:v}},ve);return!l||l.hidden||!Bi(l)?null:(0,H.jsx)(s,{x:u,y:d,width:f,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:a,onClick:c,id:l.id})}var wx=(0,$.memo)(xx),vx=(0,$.memo)(yx),kx=200,Sx=150,Cx=e=>!e.hidden,_x=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?$i(In(e.nodeLookup,{filter:Cx}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Nc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Ex=(e,t)=>Nc(e.viewBB,t.viewBB)&&Nc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Nx="react-flow__minimap-desc";function pu({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:l,maskStrokeColor:u,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:m,pannable:y=!1,zoomable:b=!1,ariaLabel:g,inversePan:S,zoomStep:h=1,offsetScale:v=5}){let x=ye(),C=(0,$.useRef)(null),{boundingRect:k,viewBB:I,rfId:R,panZoom:F,translateExtent:z,flowWidth:O,flowHeight:N,ariaLabelConfig:w}=de(_x,Ex),M=e?.width??kx,E=e?.height??Sx,_=k.width/M,P=k.height/E,A=Math.max(_,P),V=A*M,B=A*E,W=v*A,U=k.x-(V-k.width)/2-W,q=k.y-(B-k.height)/2-W,Q=V+W*2,X=B+W*2,L=`${Nx}-${R}`,D=(0,$.useRef)(0),Y=(0,$.useRef)();D.current=A,(0,$.useEffect)(()=>{if(C.current&&F)return Y.current=Tl({domNode:C.current,panZoom:F,getTransform:()=>x.getState().transform,getViewScale:()=>D.current}),()=>{Y.current?.destroy()}},[F]),(0,$.useEffect)(()=>{Y.current?.update({translateExtent:z,width:O,height:N,inversePan:S,pannable:y,zoomStep:h,zoomable:b})},[y,b,S,h,z,O,N]);let J=p?te=>{let[se,ce]=Y.current?.pointer(te)||[0,0];p(te,{x:se,y:ce})}:void 0,oe=m?(0,$.useCallback)((te,se)=>{let ce=x.getState().nodeLookup.get(se).internals.userNode;m(te,ce)},[]):void 0,j=g??w["minimap.ariaLabel"];return(0,H.jsx)(fr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*A:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:_e(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,H.jsxs)("svg",{width:M,height:E,viewBox:`${U} ${q} ${Q} ${X}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":L,ref:C,onClick:J,children:[j&&(0,H.jsx)("title",{id:L,children:j}),(0,H.jsx)(vx,{onClick:oe,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,H.jsx)("path",{className:"react-flow__minimap-mask",d:`M${U-W},${q-W}h${Q+W*2}v${X+W*2}h${-Q-W*2}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}pu.displayName="MiniMap";var mu=(0,$.memo)(pu),Mx=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Ix={[Lt.Line]:"right",[Lt.Handle]:"bottom-right"};function Px({nodeId:e,position:t,variant:n=Lt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:m,onResizeStart:y,onResize:b,onResizeEnd:g}){let S=Bc(),h=typeof e=="string"?e:S,v=ye(),x=(0,$.useRef)(null),C=n===Lt.Handle,k=de((0,$.useCallback)(Mx(C&&p),[C,p]),ve),I=(0,$.useRef)(null),R=t??Ix[n];(0,$.useEffect)(()=>{if(!(!x.current||!h))return I.current||(I.current=Bl({domNode:x.current,nodeId:h,getStoreItems:()=>{let{nodeLookup:z,transform:O,snapGrid:N,snapToGrid:w,nodeOrigin:M,domNode:E}=v.getState();return{nodeLookup:z,transform:O,snapGrid:N,snapToGrid:w,nodeOrigin:M,paneDomNode:E}},onChange:(z,O)=>{let{triggerNodeChanges:N,nodeLookup:w,parentLookup:M,nodeOrigin:E}=v.getState(),_=[],P={x:z.x,y:z.y},A=w.get(h);if(A&&A.expandParent&&A.parentId){let V=A.origin??E,B=z.width??A.measured.width??0,W=z.height??A.measured.height??0,U={id:A.id,parentId:A.parentId,rect:{width:B,height:W,...Wi({x:z.x??A.position.x,y:z.y??A.position.y},{width:B,height:W},A.parentId,w,V)}},q=rr([U],w,M,E);_.push(...q),P.x=z.x?Math.max(V[0]*B,z.x):void 0,P.y=z.y?Math.max(V[1]*W,z.y):void 0}if(P.x!==void 0&&P.y!==void 0){let V={id:h,type:"position",position:{...P}};_.push(V)}if(z.width!==void 0&&z.height!==void 0){let B={id:h,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:z.width,height:z.height}};_.push(B)}for(let V of O){let B={...V,type:"position"};_.push(B)}N(_)},onEnd:({width:z,height:O})=>{let N={id:h,type:"dimensions",resizing:!1,dimensions:{width:z,height:O}};v.getState().triggerNodeChanges([N])}})),I.current.update({controlPosition:R,boundaries:{minWidth:s,minHeight:c,maxWidth:l,maxHeight:u},keepAspectRatio:d,resizeDirection:f,onResizeStart:y,onResize:b,onResizeEnd:g,shouldResize:m}),()=>{I.current?.destroy()}},[R,s,c,l,u,d,y,b,g,m]);let F=R.split("-");return(0,H.jsx)("div",{className:_e(["react-flow__resize-control","nodrag",...F,n,o]),ref:x,style:{...r,scale:k,...a&&{[C?"backgroundColor":"borderColor"]:a}},children:i})}var d1=(0,$.memo)(Px);async function Ee(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status})}return r}function qe(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var gu=()=>Ee("config");var hu=()=>Ee("assets"),gr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},bu=e=>Ee("asset/delete",qe({id:e})),ia=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Ee(`history?${t.toString()}`)},yu=(e=14)=>Ee(`history/stats?days=${e}`),xu=e=>Ee("generate",qe(e)),wu=e=>Ee(`task?id=${encodeURIComponent(e)}`),vu=e=>Ee("task/cancel",qe({id:e})),ku=(e,t,n)=>Ee("workflow/save",qe({name:e,nodes:t,edges:n})),aa=()=>Ee("workflow/list"),Su=e=>Ee(`workflow/load?name=${encodeURIComponent(e)}`),Cu=(e,t)=>Ee("recovery/save",qe({nodes:e,edges:t})),_u=()=>Ee("recovery/latest"),Eu=e=>Ee("settings",qe({model:e})),Nu=e=>Ee("settings",qe({profile:e})),ao=e=>Ee("settings",qe({outputDir:e})),Mu=e=>Ee("settings",qe({budget:e})),sa=e=>Ee("settings",qe({imagoraRoot:e})),Iu=(e={})=>Ee("pick-folder",qe(e)),On=e=>Ee("reveal",qe({path:e})),la=e=>Ee("provider",qe(e)),Pu=e=>Ee("provider/probe",qe(e));var zu=/[\w\u4e00-\u9fa5.-]/;var zx=/[\p{L}\p{N}]/u;function Ru(e){return e===void 0?!0:!zx.test(e)}function Du(e){return e.trim().replace(/\s+/g," ")}function Rx(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&Ru(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&zu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!zu.test(i))break;r+=1}Ru(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function Dx(e){let t=[];for(let n of Rx(e))n.kind==="ref"&&t.push(n.token);return t}function Au(e,t){let n=Dx(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let l=Du(c.name);if(l==="")continue;let u=o.get(l);u===void 0?o.set(l,[c.id]):u.includes(c.id)||u.push(c.id)}let r=[],i=new Set,a=[],s=new Set;for(let c of n){let l=Du(c.name),u=o.get(l);if(u===void 0){s.has(l)||(s.add(l),a.push(l));continue}for(let d of u)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var Ax=/\.(png|jpe?g|webp|gif|bmp)$/i;function $u(e){return e.type.startsWith("image/")?!0:Ax.test(e.name)}var Tu=30,Ou=200;function Lu(e,t){if(t&&Math.abs(t.x-e.x)<Ou&&Math.abs(t.y-e.y)<Ou){let n={x:t.x+Tu,y:t.y+Tu};return{position:n,next:n}}return{position:e,next:e}}var Tx=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Ox(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!Tx.test(n));return t.length?t.join(" "):void 0}function sn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function Hu(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function Bu(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function ca(e,t,n){let o=new Set(n);return{nodes:e.map(i=>{let a=Ox(i.className),s={...i};return a===void 0?delete s.className:s.className=a,s.type==="image"&&o.has(s.data.registryId)?{...s,data:{...s.data,missing:!0}}:s.type==="prompt"?{...s,data:{...s.data,quality:s.data.quality??"high",status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}:s}),edges:t}}function ft(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function Wu(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function $x(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Lx(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let l=c.pop();if(a.has(l))continue;a.add(l);let u=o.get(l);u&&(u.type==="prompt"?s.add(l):u.type==="group"&&c.push(...r.get(l)??[]))}n.set(i.data.registryId,s.size)}}function Fu(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of r.get(e)??[]){let l=o.get(c);if(l){if(l.type==="image")a+=1,s.push(l.data.registryId);else if(l.type==="group"){let u=Fu(c,t,n);a+=u.count,s.push(...u.ids)}}}return t.delete(e),{count:a,ids:s}}function Hx(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=Fu(a.id,new Set,t),l=new Set(c);n.set(a.id,l.size),o.set(a.id,Array.from(l).reduce((u,d)=>u+(i.get(d)??0),0)),r.set(a.id,s-l.size)}}function Vu(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=$x(e,t);return Lx(e,a,n),Hx(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function Bx(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=o.get(s);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(l=>l.target===s).forEach(l=>a.push(l.source)))}return r}function Gu(e,t,n,o){let r=Bx(e,t,n),i=r.map(l=>({id:l.id,name:l.type==="image"?l.data.name:""})),a=Au(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(l=>[l.id,l])),c=[];for(let l of a.ids){let u=s.get(l);u&&c.push(u)}return{images:c,unknown:a.unknown,mode:a.mode}}function hr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function br(e,t){return t.reduce((n,o)=>!n||hr(e,o)<hr(e,n)?o:n,null)}function so(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function Wx(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=br(r,n);if(i&&r.position.y>i.position.y){so(e,i,r);continue}let a=br(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||hr(r,a)<hr(r,i))?so(e,r,a):i&&so(e,r,i)}}function Fx(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=br(r,n);a&&so(e,r,a)}}function Vx(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(l=>{let u=o.get(l.source)?.type;return l.target===a.id&&(u==="image"||u==="group")}))continue;let c=br(a,i);c&&so(e,c,a)}}function ua(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return Wx(a,e,n,o),Fx(a,o,n,i),Vx(a,n,o,r),a.next}function Xu(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?ua(o,t):t}function Yu(e){return`\u751F\u6210\u4E2D ${e}s`}function le(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var Gx=/^=== (.+) ===\s*$/,Uu=/^```(?:text)?\s*$/,Xx=/^ratio:\s*(\d+):(\d+)\s*$/,Yx=/^ratio\b/i;function qu(e){return e.split(`
`).some(t=>Uu.test(t))}function Zu(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((l,u)=>{let d=l.match(Gx)?.[1];d!==void 0&&a.push({title:d.trim(),line:u})}),a.length===0){let l=t.trim();return l&&i.push(l),qu(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),qu(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let l=0;l<a.length;l++){let u=a[l];if(u===void 0)continue;let{title:d}=u,f=u.line+1,p=a[l+1],m=p===void 0?n.length:p.line,y=n.slice(f,m);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let b=[];y.forEach((F,z)=>{Uu.test(F)&&b.push(z)});let g=b[0],S=b[b.length-1];if(g===void 0||S===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let h=y.slice(0,g).join(`
`).trim();h&&i.push(h);let v=y.slice(g+1,S),x=v.findIndex(F=>F.trim()!=="");if(x===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let C=(v[x]??"").trim(),k=C.match(Xx);if(!k){Yx.test(C)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${C}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let I=`${k[1]}:${k[2]}`,R=v.slice(x+1).join(`
`).trim();if(!R){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:I,prompt:R})}return{cards:o,issues:r,skippedText:i}}function qx(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function Ku(e,t,n){let o=Qx(n,e.length);return e.map((r,i)=>{let a=qx(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var da=380,Ux=326,ju=40,Zx=74,Kx=da+ju,jx=Ux+Zx,yr=3;function Qx(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/yr),a=r%yr,s=Math.min(yr,n-i*yr),c=s*da+(s-1)*ju,l=e.x+da/2-c/2;o.push({x:l+a*Kx,y:e.y+i*jx})}return o}var Jx={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function xr(e){let t=e.measured,n=Jx[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var fa=[0,.5,1];function Qu(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function ed(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Ju(e,t,n,o){let r=fa.map(s=>Qu(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&ed(c))for(let l=0;l<fa.length;l+=1){let u=fa[l];if(u===void 0)continue;let d=Qu(c,n,u);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let m=d-p,y=Math.abs(m);y>=o||y>=a||(a=y,i={delta:m,position:d,targetId:c.id})}}}return i}function wr(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!ed(e)||!Number.isFinite(n)||n<=0)return o;let r=Ju(e,t,"x",n),i=Ju(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var td="imagora.canvas-snap.v1";function nd(){try{let e=window.localStorage.getItem(td);return e===null?!0:e!=="0"}catch{return!0}}function od(e){try{window.localStorage.setItem(td,e?"1":"0")}catch{}}function co(e){let t=xr(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var lo=[];function rd(e,t,n){if(!n)return{changes:e,guides:lo};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:lo};let r=o[0];if(!r)return{changes:e,guides:lo};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:lo};let s={...co(i),x:a.x,y:a.y},c=[];for(let d of t)d.id!==r.id&&c.push(co(d));let l=wr(s,c);return l.guides.length===0?{changes:e,guides:lo}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:l.x,y:l.y}}:d),guides:l.guides}}var Je=require("react");var pa=require("react/jsx-runtime"),id={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function ze({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=id[e]||id.help;return(0,pa.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,pa.jsx)("path",{d:r})})}var $n=require("react");var ma=["\u6B63\u5728\u7406\u89E3\u63D0\u793A\u8BCD\u2026","\u6B63\u5728\u6784\u56FE\u2026","\u6B63\u5728\u94FA\u8BBE\u5149\u5F71\u2026","\u6B63\u5728\u7EC6\u5316\u7EC6\u8282\u2026","\u5FEB\u597D\u4E86\uFF0C\u6B63\u5728\u6536\u5C3E\u2026"];function ew(e){let t=Number.isFinite(e)&&e>0?e:0,n=10+(1-Math.exp(-t/28))*88;return Math.min(98,Math.max(10,n))}function ad(e){return ew(e)/100}function ga(e){let t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/2)%ma.length;return ma[n]??ma[0]??""}function sd(e){let t=Number.isFinite(e)&&e>0?Math.floor(e):0;return`\u751F\u6210\u4E2D ${t}s \xB7 ${ga(t)}`}var ln=require("react/jsx-runtime");function ld({className:e}){let[t,n]=(0,$n.useState)(0),o=(0,$n.useRef)(!0);(0,$n.useEffect)(()=>{o.current=!0;let a=window.setInterval(()=>{o.current&&n(s=>s+1)},1e3);return()=>{o.current=!1,window.clearInterval(a)}},[]);let r=sd(t),i=ad(t);return(0,ln.jsxs)("div",{className:`im-pending${e?` ${e}`:""}`,role:"status","aria-live":"polite","aria-label":r,children:[(0,ln.jsx)("div",{className:"im-pending-label",title:r,children:r}),(0,ln.jsx)("div",{className:"im-pending-track","aria-hidden":!0,children:(0,ln.jsx)("div",{className:"im-pending-bar",style:{transform:`scaleX(${i.toFixed(4)})`}})}),(0,ln.jsx)("span",{className:"visually-hidden",children:ga(t)})]})}var xe=require("react"),yd=require("react-dom");var tw={id:"__custom",label:"\u81EA\u5B9A\u4E49"},nw=64;function cd(e){return e.trim().replace(/\s+/g," ")}function ow(e,t){return e.some(n=>n.value===t)}function ud(e,t){let n=cd(t);return n===""||ow(e,n)?e:[...e,{value:n,label:n,group:tw}]}function dd(e){let t=cd(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>nw?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function fd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var vr=0;function pd(){vr+=1}function md(){vr=Math.max(0,vr-1)}function gd(){return vr>0}var rw=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function ha(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=rw.has(o)?"-":n}return t}function hd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function iw(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+hd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,l=n;for(let[u,d]of o.entries()){if(c!==n&&(l=Math.max(l,c+u-2)),e.charAt(u)===t.charAt(i)){let f=1+hd(e,u),p=n;s!==n&&(p=s+f+4),l!==n&&(p=Math.max(p,l+f+1-u)),a[u]=p}c=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function bd(e,t){let n=ha(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,c;for(let l of a){let u=ha(l).toLowerCase(),d=iw(u,n);d!==void 0&&(s||=u.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:s,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var be=require("react/jsx-runtime"),aw=4;function Ln({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:c,"aria-describedby":l,"aria-invalid":u,renderOption:d,title:f}){let[p,m]=(0,xe.useState)(!1),[y,b]=(0,xe.useState)(-1),[g,S]=(0,xe.useState)(""),[h,v]=(0,xe.useState)(null),x=(0,xe.useRef)(null),C=(0,xe.useRef)(null),k=(0,xe.useRef)(null),I=(0,xe.useId)(),R=`${r??`select-${I}`}-listbox`,F=`${R}-search`,z=(0,xe.useMemo)(()=>{if(g.trim()==="")return e;let L=e.map(D=>({name:D.value,label:D.label,option:D}));return bd(L,g).map(D=>D.option)},[e,g]),O=i===void 0||i==="auto"?e.length>aw:i,N=z.findIndex(L=>L.value===t),w=e.find(L=>L.value===t),M=L=>`${R}-option-${L}`,E=O&&s===!0,_=(0,xe.useMemo)(()=>{let L=g.trim();if(L!=="")return z.find(D=>D.value===L||D.label===L)},[z,g]),P=(0,xe.useMemo)(()=>{if(!E||_!==void 0)return null;let L=dd(g);return L.ok?L.value:null},[E,_,g]),A=(L=N>=0?N:0)=>{!e.length&&!E||(b(e.length===0?-1:Math.min(Math.max(L,0),e.length-1)),m(!0),O||window.setTimeout(()=>C.current?.focus(),0))},V=(L=!1)=>{m(!1),S(""),L&&window.setTimeout(()=>C.current?.focus(),0)},B=L=>{let D=z[L];D&&(n(D.value),V(!0))},W=L=>{c?.(L),V(!0)},U=()=>{let L=C.current;if(!L)return;let D=L.getBoundingClientRect(),Y=4,J=8,oe=L.offsetWidth||D.width,j=Math.max(J,Math.min(D.left,window.innerWidth-oe-J)),te=window.innerHeight-D.bottom-Y-J,se=D.top-Y-J,ce=te<160&&se>te,me=Math.max(120,Math.min(240,ce?se:te));v({left:j,top:ce?Math.max(J,D.top-Y-me):D.bottom+Y,width:oe,maxHeight:me})};(0,xe.useEffect)(()=>{if(p)return pd(),()=>md()},[p]),(0,xe.useLayoutEffect)(()=>{if(!p)return;U();let L=()=>U();window.addEventListener("scroll",L,!0),window.addEventListener("resize",L);let D=typeof ResizeObserver>"u"?null:new ResizeObserver(L);return C.current&&D?.observe(C.current),()=>{D?.disconnect(),window.removeEventListener("scroll",L,!0),window.removeEventListener("resize",L)}},[p]),(0,xe.useEffect)(()=>{p&&O&&h&&k.current?.focus()},[p,O,h]),(0,xe.useEffect)(()=>{p&&b(L=>z.length===0?-1:Math.min(Math.max(L,0),z.length-1))},[p,z.length]),(0,xe.useEffect)(()=>{!e.length&&!E&&p&&(m(!1),b(-1))},[p,e.length,E]),(0,xe.useEffect)(()=>{let L=D=>{let Y=D.target;x.current?.contains(Y)||document.getElementById(R)?.contains(Y)||V()};return document.addEventListener("mousedown",L,!0),()=>document.removeEventListener("mousedown",L,!0)},[R]);let q=(L,D)=>{if(L.key==="Tab"){V();return}if(L.key==="Escape"){p&&(L.preventDefault(),V(!0));return}if(L.key==="ArrowDown"||L.key==="ArrowUp"){if(L.preventDefault(),!p){A();return}if(z.length===0)return;let Y=L.key==="ArrowDown"?1:-1;b(J=>(J+Y+z.length)%z.length);return}if(L.key==="Home"||L.key==="End"){if(z.length===0)return;L.preventDefault(),p||m(!0),b(L.key==="Home"?0:z.length-1);return}if(L.key==="Enter"){if(L.preventDefault(),!p){A();return}if(E&&g.trim()!==""){_!==void 0?(n(_.value),V(!0)):P!==null&&W(P);return}B(y);return}!D&&L.key===" "&&(L.preventDefault(),p?B(y):A())},Q=(0,xe.useMemo)(()=>fd(z),[z]),X=(0,xe.useMemo)(()=>{let L=new Map;return z.forEach((D,Y)=>L.set(D,Y)),L},[z]);return(0,be.jsxs)("div",{ref:x,className:`im-select-root ${o}`.trim(),children:[(0,be.jsxs)("button",{ref:C,type:"button",id:r,title:f,onClick:()=>p?V():A(),onKeyDown:L=>q(L,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":R,"aria-activedescendant":p&&y>=0?M(y):void 0,"aria-describedby":l,"aria-invalid":u,className:`im-select-trigger${p?" is-open":""}`,children:[d&&w?(0,be.jsxs)("span",{className:"im-select-value",children:[d(w),(0,be.jsx)("span",{className:"im-select-label",children:w.label})]}):(0,be.jsx)("span",{className:"im-select-label",children:w?.label??"\u8BF7\u9009\u62E9"}),(0,be.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,be.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&h&&(0,yd.createPortal)((0,be.jsxs)("div",{id:R,"data-portal":"select-list",className:"im-select-list",style:{left:h.left,top:h.top,width:h.width,maxHeight:h.maxHeight},children:[O&&(0,be.jsx)("div",{className:"im-select-search",children:(0,be.jsx)("input",{ref:k,id:F,type:"text",className:"im-select-search-input",value:g,onChange:L=>S(L.target.value),onKeyDown:L=>q(L,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":R,"aria-activedescendant":y>=0?M(y):void 0})}),(0,be.jsxs)("ul",{role:"listbox","aria-labelledby":O?F:void 0,className:"im-select-rows",children:[z.length===0&&(0,be.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),Q.map(L=>(0,be.jsxs)("li",{role:"presentation",className:"im-select-group",children:[L.label!==""&&(0,be.jsx)("div",{className:"im-select-group-title",role:"presentation",children:L.label}),(0,be.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:L.rows.map(D=>{let Y=X.get(D)??-1,J=D.value===t,oe=Y===y;return(0,be.jsxs)("li",{id:M(Y),role:"option","aria-selected":J,className:`im-select-option${J?" is-selected":""}${oe?" is-active":""}`,onMouseEnter:()=>b(Y),onMouseDown:j=>j.preventDefault(),onClick:()=>B(Y),children:[d?(0,be.jsxs)("span",{className:"im-select-value",children:[d(D),(0,be.jsx)("span",{className:"im-select-label",children:D.label})]}):(0,be.jsx)("span",{className:"im-select-label",children:D.label}),J&&(0,be.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,be.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},D.value)})})]},L.id||"__ungrouped"))]}),P!==null&&(0,be.jsx)("div",{className:"im-select-custom",children:(0,be.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:L=>L.preventDefault(),onClick:()=>W(P),children:(0,be.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",P,"\u201D"]})})})]}),document.body)]})}var Z=require("react/jsx-runtime"),ba=(0,Je.createContext)(null);function ya(){let e=(0,Je.useContext)(ba);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function xa(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(an,{type:"target",position:ee.Top,className:"im-handle"}),(0,Z.jsx)(an,{type:"source",position:ee.Bottom,className:"im-handle"})]})}function wa({children:e}){return(0,Z.jsx)("div",{className:"im-rail nodrag",children:e})}function Pt({label:e,onClick:t,danger:n,children:o}){return(0,Z.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var wd=(0,Je.memo)(function({id:t,data:n,selected:o}){let r=ya(),[i,a]=(0,Je.useState)(!1),s=n.missing||i;return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${s?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,Z.jsx)(xa,{}),s?(0,Z.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,Z.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:c=>{c.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,(0,Z.jsxs)(wa,{children:[(0,Z.jsx)(Pt,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,Z.jsx)(ze,{name:"eye"})}),(0,Z.jsx)(Pt,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,Z.jsx)(ze,{name:"crop"})}),(0,Z.jsx)(Pt,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,Z.jsx)(ze,{name:"expand"})}),(0,Z.jsx)(Pt,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,Z.jsx)(ze,{name:"grid"})}),(0,Z.jsx)(Pt,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,Z.jsx)(ze,{name:"wand"})}),(0,Z.jsx)(Pt,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,Z.jsx)(ze,{name:"image"})}),(0,Z.jsx)(Pt,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-thumb",onDoubleClick:c=>{c.stopPropagation(),r.zoomImage(t)},children:n.url?(0,Z.jsx)("img",{src:n.url,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>a(!0)}):(0,Z.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,Z.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Z.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),xd=4,vd=(0,Je.memo)(function({id:t,data:n,selected:o}){let r=ya(),i=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",a=n.duplicateCount??0,s=Math.min(Math.max(n.imageCount-1,0),3);return(0,Z.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,Z.jsx)(xa,{}),(0,Z.jsx)(wa,{children:(0,Z.jsx)(Pt,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})}),(0,Z.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:s},(c,l)=>(0,Z.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*xd}px, ${-(l+1)*xd}px)`}},l)),(0,Z.jsxs)("div",{className:"im-group-face",children:[(0,Z.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,Z.jsxs)("div",{className:"im-group-size",children:[i," MB"]}),a>0?(0,Z.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${a} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function sw({from:e}){let[t,n]=(0,Je.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Je.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Z.jsx)(Z.Fragment,{children:Yu(t)})}var lw={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"},kd=(0,Je.memo)(function({id:t,data:n,selected:o}){let r=ya(),i=r.config,a=n.status==="queued"||n.status==="running",s=i?.sizes??[],c=i?.qualities??[],l=s.some(d=>d.value===n.size)||!n.size?s:[...s,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],u=i?.qualityEffective!==!1;return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(xa,{}),(0,Z.jsxs)(wa,{children:[(0,Z.jsx)("span",{className:"im-rail-dot",title:lw[n.status]??"\u5C31\u7EEA",children:(0,Z.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Z.jsx)(Pt,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n.prompt,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onChange:d=>r.updatePrompt(t,{prompt:d.target.value})}),(0,Z.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:u?"7fr 3fr":"1fr",marginTop:8},children:[(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,Z.jsx)(Ln,{className:"im-select-fill",options:ud(l,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:d=>r.updatePrompt(t,{size:d})})]}),u?(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,Z.jsx)(Ln,{className:"im-select-fill",options:c.map(d=>({value:d,label:d})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:d=>r.updatePrompt(t,{quality:d})})]}):null]}),(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,Z.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:i?.defaultOutputDir??"",onChange:d=>r.updatePrompt(t,{outputDir:d.target.value})})]}),n.status==="running"?(0,Z.jsx)(ld,{}):null,n.status==="failed"&&n.message?(0,Z.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Z.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${a?" im-btn-busy":""}`,style:{flex:1},disabled:a||!n.prompt.trim(),onClick:d=>{d.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,Z.jsx)(sw,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),a?(0,Z.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:d=>{d.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var Sd=`
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
`;var Cd={image:wd,prompt:kd,group:vd};var cn=require("react/jsx-runtime"),cw="0 0 1024 1024",uw="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function va({size:e=30,fill:t="var(--im-brand)"}){return(0,cn.jsx)("svg",{width:e,height:e,viewBox:cw,fill:t,"aria-hidden":"true",children:(0,cn.jsx)("path",{d:uw})})}function _d({onClick:e}){return(0,cn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,cn.jsx)(va,{}),(0,cn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var Ed=require("react"),un=require("react/jsx-runtime");function dw(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function Nd(e){return(0,Ed.useMemo)(()=>dw(e),[e])}function Md({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,un.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,un.jsx)("span",{className:"im-cost-num",children:a}),o?(0,un.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,un.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,un.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Ne=require("react/jsx-runtime");function Id(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(c,l,u)=>(0,Ne.jsx)("button",{type:"button",className:`${u.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:u.title,disabled:u.disabled,onClick:l,children:c});return(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsxs)("div",{className:"im-header",children:[(0,Ne.jsx)(_d,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Ne.jsx)(Ln,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,Ne.jsx)(Ln,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,Ne.jsx)(Md,{summary:e.cost,budget:t?.budget??0}),(0,Ne.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,Ne.jsxs)("div",{className:"im-toolbar",children:[(0,Ne.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,Ne.jsx)("span",{className:"im-drag-grip",children:(0,Ne.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,Ne.jsx)("span",{className:"im-drag-grip",children:(0,Ne.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,Ne.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,Ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var Be=require("react/jsx-runtime");function Ht({icon:e,label:t,title:n,active:o,onClick:r}){return(0,Be.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,Be.jsx)(ze,{name:e,size:14}),(0,Be.jsx)("span",{className:"im-dock-row-label",children:t})]})}function Pd(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,Be.jsxs)("div",{className:"im-dock nodrag",children:[(0,Be.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,Be.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,Be.jsx)(Ht,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,Be.jsx)(Ht,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,Be.jsx)(Ht,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,Be.jsx)(Ht,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,Be.jsx)(Ht,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,Be.jsx)(Ht,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,Be.jsx)(Ht,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,Be.jsx)(Ht,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var We=require("react"),Ad=require("react-dom");var ka="application/x-dsh-imagora-canvas",kr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},zd="\u677E\u5F00\u53D6\u6D88";function Sa(e){return e.dataTransfer?.types.includes("Files")??!1}function uo(e,t){if(Sa(e))return"images";let n=e.dataTransfer?.getData(ka);return n==="prompt"||n==="group"?n:t}function Rd(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Dd(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":kr[e]}function Ca(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var zt=require("react/jsx-runtime"),fw=22,pw=28,Sr=8;function Td(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,c]=(0,We.useState)(null),l=(0,We.useRef)(null),u=(0,We.useRef)(0),d=(0,We.useRef)(null),f=(0,We.useRef)(null),p=(0,We.useRef)(null),m=(0,We.useCallback)((x,C)=>{l.current=x,c(x);let k=p.current;k&&k.textContent!==C&&(k.textContent=C)},[]),y=(0,We.useCallback)(()=>{l.current=null,u.current=0,c(null),f.current?.classList.remove("is-outside")},[]),b=(0,We.useCallback)((x,C)=>{let k=d.current;if(!k)return;let I=Math.min(x+fw,window.innerWidth-k.offsetWidth-Sr),R=Math.min(C+pw,window.innerHeight-k.offsetHeight-Sr);k.style.transform=`translate(${Math.max(Sr,I)}px, ${Math.max(Sr,R)}px)`},[]),g=(0,We.useCallback)((x,C,k)=>{let I=t.current;if(!I)return o();let R=I.getBoundingClientRect(),F=k?Math.min(Math.max(x,R.left),R.left+R.width):x,z=k?Math.min(Math.max(C,R.top),R.top+R.height):C;return r({x:F,y:z})},[t,o,r]);(0,We.useEffect)(()=>{let x=I=>{Sa(I)&&I.preventDefault()},C=I=>{let R=l.current;if(!R||R==="images")return;b(I.clientX,I.clientY);let F=t.current,z=!!(F&&Ca(I.clientX,I.clientY,F.getBoundingClientRect())),O=z?kr[R]:zd,N=p.current;N&&N.textContent!==O&&(N.textContent=O),f.current?.classList.toggle("is-outside",!z)},k=()=>{u.current=0,y()};return window.addEventListener("dragover",x),window.addEventListener("dragover",C),window.addEventListener("drop",x),window.addEventListener("dragend",k),window.addEventListener("blur",k),()=>{window.removeEventListener("dragover",x),window.removeEventListener("dragover",C),window.removeEventListener("drop",x),window.removeEventListener("dragend",k),window.removeEventListener("blur",k)}},[t,y,b]);let S={onDragEnter:x=>{if(n)return;let C=uo(x,l.current);C&&(x.preventDefault(),C==="images"&&(u.current+=1),m(C,Dd(C,Rd(x.dataTransfer))),b(x.clientX,x.clientY))},onDragOver:x=>{n||!uo(x,l.current)||(x.preventDefault(),x.dataTransfer.dropEffect="copy",b(x.clientX,x.clientY))},onDragLeave:x=>{n||uo(x,l.current)==="images"&&(u.current-=1,u.current<=0&&y())},onDrop:x=>{if(n)return;let C=uo(x,l.current);if(!C)return;x.preventDefault();let k=t.current,I=!k||Ca(x.clientX,x.clientY,k.getBoundingClientRect());if(y(),C==="images"){let R=Array.from(x.dataTransfer.files??[]);if(!R.length)return;i(R,g(x.clientX,x.clientY,!0));return}I&&a(C,g(x.clientX,x.clientY,!1))}},h=(0,We.useCallback)((x,C)=>{x.dataTransfer.setData(ka,C),x.dataTransfer.effectAllowed="copy",m(C,kr[C]),b(x.clientX,x.clientY)},[b,m]),v=(0,Ad.createPortal)((0,zt.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,zt.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,zt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,zt.jsx)(ze,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,zt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,zt.jsx)(ze,{name:"close",size:14})}),(0,zt.jsx)("span",{ref:p,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:v,dragHandlers:S,startToolbarDrag:h,hideDropChip:y}}var Od="dsh-imagora.canvas-minimap.v1";function $d(){try{let e=localStorage.getItem(Od);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Ld(e){try{localStorage.setItem(Od,e?"1":"0")}catch{}}var Bt=require("react/jsx-runtime");function Hd(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,Bt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Bt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u5C40\u90E8\u6574\u7406\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u540C\u5C42\u63D0\u793A\u8BCD\u5361\u7247\u6309\u5DE6\u4E0A\u89D2\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Bt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Bt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var Ue=require("react/jsx-runtime");function Bd(){return(0,Ue.jsxs)("div",{className:"im-empty",children:[(0,Ue.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,Ue.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,Ue.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var mw=5;function Wd({logs:e}){if(!e.length)return null;let t=e.slice(-mw);return(0,Ue.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,Ue.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var gw={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Fd({text:e}){return e?(0,Ue.jsx)("div",{style:gw,children:e}):null}function Vd({tone:e,children:t,action:n}){return(0,Ue.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ue.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ue.jsx)(ze,{name:e==="error"?"help":"clock"})}),(0,Ue.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ue.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var we=require("react"),Kd=require("react-dom");async function hw(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function Gd(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await hw(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function Xd(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var fo=e=>Math.min(8,Math.max(.2,e));function Yd(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function qd(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function Ud(e,t,n){return Math.round(e*qd(t,n)*100)}function Zd(e,t){let n=qd(e,t);return n?fo(1/n):1}var pe=require("react/jsx-runtime"),Cr=1.2,bw=5;function _r({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,we.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,we.useState)(!1),[c,l]=(0,we.useState)(null),u=(0,we.useRef)(null),d=(0,we.useRef)(!1),f=c?.kind==="copying",p=(0,we.useRef)(null),[m,y]=(0,we.useState)(null),b=(0,we.useRef)({width:0,height:0}),g=(0,we.useRef)(null),S=(0,we.useRef)(null),h=(0,we.useRef)(null),v=(0,we.useRef)(null),x=(0,we.useCallback)(_=>{let P=h.current;return P?{zoom:_.zoom,pan:Yd(_.pan,_.zoom,b.current,{width:P.clientWidth,height:P.clientHeight})}:_},[]),C=(0,we.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),k=(0,we.useCallback)(()=>{let _=v.current;if(!_)return;b.current={width:_.clientWidth,height:_.clientHeight};let P={width:_.naturalWidth,height:_.naturalHeight};p.current=P,y(A=>A&&A.width===P.width&&A.height===P.height?A:P)},[]);(0,we.useEffect)(()=>{let _=()=>k();return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[k]);let I=(0,we.useCallback)(()=>{let _=Zd(p.current,b.current);i(P=>x({zoom:_,pan:P.pan}))},[x]),R=(0,we.useCallback)(()=>{let _=p.current,P=S.current;if(!_||!P)return;let A=P.clientWidth*.98,V=P.clientHeight*.98,B=fo(Math.min(1,A/_.width,V/_.height));i({zoom:B,pan:{x:0,y:0}})},[]);(0,we.useEffect)(()=>{let _=h.current;if(!_)return;let P=A=>{A.preventDefault(),A.stopPropagation();let V=_.getBoundingClientRect(),B=A.clientX-V.left-V.width/2,W=A.clientY-V.top-V.height/2;i(U=>{let q=fo(A.deltaY<0?U.zoom*Cr:U.zoom/Cr);if(q===U.zoom)return U;let Q=q/U.zoom;return x({zoom:q,pan:{x:B-(B-U.pan.x)*Q,y:W-(W-U.pan.y)*Q}})})};return _.addEventListener("wheel",P,{passive:!1}),()=>_.removeEventListener("wheel",P)},[x]),(0,we.useEffect)(()=>{let _=P=>{P.key==="Escape"&&o()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[o]),(0,we.useEffect)(()=>()=>{u.current&&window.clearTimeout(u.current)},[]);let F=(_,P)=>{l({kind:_,text:P}),u.current&&window.clearTimeout(u.current),u.current=_==="copying"?null:window.setTimeout(()=>l(null),1200)},z=async(_,P)=>{if(!d.current){d.current=!0,F("copying","\u590D\u5236\u4E2D\u2026");try{await _(),F("copied",P)}catch(A){F("failed",A instanceof Error?A.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},O=_=>{r.zoom<=1||(_.preventDefault(),_.stopPropagation(),_.currentTarget instanceof Element&&_.currentTarget.setPointerCapture(_.pointerId),g.current={startX:_.clientX,startY:_.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:_.target===v.current},s(!0))},N=_=>{let P=g.current;if(!P)return;let A=_.clientX-P.startX,V=_.clientY-P.startY;!P.moved&&Math.hypot(A,V)<=bw||(P.moved=!0,i(B=>x({...B,pan:{x:P.panX+A,y:P.panY+V}})))},w=()=>{let _=g.current;g.current=null,s(!1),_&&!_.moved&&!_.onImage&&o()},M=_=>{let P=_.target instanceof Element?_.target:null;P&&(P.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},E=_=>i(P=>x({...P,zoom:fo(P.zoom*_)}));return(0,Kd.createPortal)((0,pe.jsxs)("div",{ref:S,className:"im-zoom-overlay",onPointerDown:M,onClick:_=>_.stopPropagation(),children:[(0,pe.jsx)("div",{ref:h,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:O,onPointerMove:N,onPointerUp:w,onPointerCancel:w,onDoubleClick:_=>{_.stopPropagation(),C()},children:(0,pe.jsx)("img",{ref:v,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let _=v.current;_&&(p.current={width:_.naturalWidth,height:_.naturalHeight},b.current={width:_.clientWidth,height:_.clientHeight},k())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,pe.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,pe.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,pe.jsx)("div",{"aria-hidden":!0}),(0,pe.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,pe.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,pe.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,pe.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,pe.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,pe.jsxs)("div",{className:"im-zoom-group",children:[(0,pe.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>E(1/Cr),children:(0,pe.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,pe.jsx)("path",{d:"M3.5 8h9"})})}),(0,pe.jsxs)("span",{className:"im-zoom-readout",title:`${m?`${m.width}\xD7${m.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[Ud(r.zoom,m,b.current),"%"]}),(0,pe.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>E(Cr),children:(0,pe.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,pe.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,pe.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,pe.jsxs)("div",{className:"im-zoom-group",children:[(0,pe.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:R,children:"\u9002\u5E94\u7A97\u53E3"}),(0,pe.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:I,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,pe.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,pe.jsxs)("div",{className:"im-zoom-group",children:[(0,pe.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void z(()=>Gd(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,pe.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void z(()=>Xd(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,pe.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),c?(0,pe.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var mo=require("react");var Wt=require("react"),Jd=require("react-dom");var xt=require("react/jsx-runtime"),jd=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),po=[];function Qd(e){return po[po.length-1]===e}function De({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:c=!1,headerless:l=!1}){let u=`im-modal-${(0,Wt.useId)()}`,d=`${u}-title`,f=(0,Wt.useRef)(null),p=(0,Wt.useRef)(null),m=(0,Wt.useRef)(o);return m.current=o,(0,Wt.useEffect)(()=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,po.push(u);let b=f.current;(a?.current??b?.querySelector(jd)??b)?.focus();let S=h=>{if(!Qd(u))return;if(h.key==="Escape"){if(gd())return;h.preventDefault(),h.stopPropagation(),m.current();return}if(h.key!=="Tab"||!b)return;let v=Array.from(b.querySelectorAll(jd)).filter(k=>!k.hidden&&k.getAttribute("aria-hidden")!=="true");if(!v.length){h.preventDefault(),b.focus();return}let x=v[0],C=v[v.length-1];!x||!C||(h.shiftKey&&(document.activeElement===x||!b.contains(document.activeElement))?(h.preventDefault(),C.focus()):!h.shiftKey&&document.activeElement===C&&(h.preventDefault(),x.focus()))};return document.addEventListener("keydown",S,!0),()=>{document.removeEventListener("keydown",S,!0);let h=po.lastIndexOf(u);h>=0&&po.splice(h,1);let v=p.current;window.setTimeout(()=>v?.focus(),0)}},[a]),(0,Jd.createPortal)((0,xt.jsx)("div",{className:`im-modal-shell${c?" im-modal-shell--nested":""}`,onMouseDown:b=>{s&&b.target===b.currentTarget&&Qd(u)&&o()},children:(0,xt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:b=>b.stopPropagation(),children:[l?(0,xt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,xt.jsxs)("header",{className:"im-modal-header",children:[(0,xt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,xt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,xt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,xt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ae=require("react/jsx-runtime");function ef({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,mo.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,mo.useState)(null),c=r.trim(),l=e.some(d=>d.name===c),u=()=>{if(c){if(l&&a!==c){s(c);return}n(c)}};return a?(0,ae.jsx)(De,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,ae.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,ae.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,ae.jsxs)(De,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c,onClick:u,children:"\u4FDD\u5B58"})]}),children:[(0,ae.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&u()}}),(0,ae.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,ae.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,ae.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,ae.jsx)("span",{className:"im-pick-name",children:d.name}),(0,ae.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function tf({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,ae.jsx)(De,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,ae.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,ae.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,ae.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,ae.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,ae.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var yw=[["\u753B\u5E03","\u6EDA\u8F6E\u7F29\u653E \xB7 \u5DE6\u952E\u62D6\u7A7A\u767D\u5E73\u79FB \xB7 Shift+\u62D6\u62FD\u6846\u9009 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927"],["\u8282\u70B9","\u60AC\u505C\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 Del \u5220\u9664\u9009\u4E2D"],["\u8FDE\u7EBF","\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF08\u53C2\u8003\u56FE\uFF09\uFF1B\u63D0\u793A\u8BCD \u2192 \u56FE\u7247\uFF08\u4EA7\u51FA\uFF09"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 Delete \u5220\u9664"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function nf({onClose:e,config:t}){return(0,ae.jsx)(De,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u753B\u5E03\u3001\u8282\u70B9\u3001\u8FDE\u7EBF\u4E0E\u5FEB\u6377\u952E\u901F\u67E5\u3002",size:"lg",onClose:e,footer:(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ae.jsx)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12,fontSize:12},children:yw.map(([n,o])=>(0,ae.jsxs)(mo.Fragment,{children:[(0,ae.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,ae.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,ae.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,ae.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var et=require("react");function Ze(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function rf(e,t=.06){let n=Ze(e.width,t,1),o=Ze(e.height,t,1);return{width:n,height:o,x:Ze(e.x,0,1-n),y:Ze(e.y,0,1-o)}}function af(e,t,n){return{...e,x:Ze(e.x+t,0,1-e.width),y:Ze(e.y+n,0,1-e.height)}}function sf(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let u=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=u,a.height*=u,a.width<.06||a.height<.06){let p=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=p,a.height*=p}a.width=Ze(a.width,.06,1),a.height=Ze(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=Ze(a.width,.06,1),a.height=Ze(a.height,.06,1);return a.x=Ze(a.x,0,1-a.width),a.y=Ze(a.y,0,1-a.height),a}function lf(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ze(e.x+(e.width-r)/2,0,1-r),y:Ze(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function _a(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function xw(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function cf(e,t){let n=xw(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function Ea(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Ft(e){let t=await Ea(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function uf(e,t){let n=await Ea(e);if(t)return of(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return of(n,r,i,o,o)}async function df(e,t){let n=await Ea(e),{width:o,height:r}=_a(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?ww(n,o,r):ff(n,n.width,n.height,o,r,t.algorithm)}function of(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function ww(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=pf(o,r,i,a,s,"high"),r=a,i=s}return ff(o,r,i,t,n,"high")}function ff(e,t,n,o,r,i){return pf(e,t,n,o,r,i).toDataURL("image/png")}function pf(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Ae=require("react/jsx-runtime"),mf=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],kw=["nw","n","ne","e","se","s","sw","w"],Na={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function gf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,et.useRef)(null),[i,a]=(0,et.useState)(null),[s,c]=(0,et.useState)({x:.08,y:.08,width:.84,height:.84}),[l,u]=(0,et.useState)(null),[d,f]=(0,et.useState)(!1),[p,m]=(0,et.useState)(null),y=(0,et.useRef)(null);(0,et.useEffect)(()=>{let k=!0;return Ft(e).then(I=>{k&&(a(I),c(rf({x:.06,y:.06,width:.88,height:.88})))}).catch(I=>{k&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(I)}`)}),()=>{k=!1}},[e]);let b=k=>{u(k),i&&k!==null&&c(I=>lf(I,k,i))},g=(k,I)=>{k.stopPropagation(),k.target.setPointerCapture?.(k.pointerId),y.current={mode:I,startX:k.clientX,startY:k.clientY,base:s}},S=(0,et.useCallback)(k=>{let I=y.current,R=r.current;if(!I||!R)return;let F=R.getBoundingClientRect();if(!F.width||!F.height)return;let z=(k.clientX-I.startX)/F.width,O=(k.clientY-I.startY)/F.height;c(I.mode==="move"?af(I.base,z,O):sf(I.base,z,O,I.mode,l,i??{width:1,height:1}))},[l,i]),h=()=>{y.current=null},v=async()=>{f(!0),m(null);try{let k=await uf(e,s),I=Math.round(s.width*(i?.width??0)),R=Math.round(s.height*(i?.height??0));await o(k,`\u88C1\u526A ${I}\xD7${R}${l?` \xB7 ${mf.find(F=>F.ratio===l)?.label}`:""}`)}catch(k){m(`\u88C1\u526A\u5931\u8D25\uFF1A${le(k)}`)}finally{f(!1)}},x=i?Math.round(s.width*i.width):0,C=i?Math.round(s.height*i.height):0;return(0,Ae.jsx)(De,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",x," \xD7 ",C,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${cf(i.width,i.height)}`:"",(0,Ae.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||x<8||C<8,onClick:()=>void v(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ae.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},children:[(0,Ae.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),mf.map(k=>(0,Ae.jsx)("button",{type:"button","aria-pressed":k.ratio===l,className:`im-btn-sm ${k.ratio===l?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>b(k.ratio),children:k.label},k.label))]}),(0,Ae.jsxs)("div",{ref:r,onPointerMove:S,onPointerUp:h,onPointerCancel:h,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Ae.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Ae.jsx)("div",{onPointerDown:k=>g(k,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:kw.map(k=>(0,Ae.jsx)("span",{onPointerDown:I=>g(I,k),style:{position:"absolute",left:Na[k].left,top:Na[k].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:Na[k].cursor}},k))})]}),p?(0,Ae.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Fe=require("react");function Ma(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Ia(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Pa(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Ia(e)*n/2}function hf(e,t,n=.004){if(!Ma(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function bf(e,t,n,o){if(!Ma(e)||!Ma(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/r);if(c<=1)return[];let l=Math.min(c,2048),u=[];for(let d=1;d<l;d+=1){let f=d/l;u.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return u}function Sw(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function yf(e){return!Sw(e)}var Me=require("react/jsx-runtime"),Er=640;function xf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Fe.useRef)(null),i=(0,Fe.useRef)(null),a=(0,Fe.useRef)(!1),[s,c]=(0,Fe.useState)(null),[l,u]=(0,Fe.useState)([]),[d,f]=(0,Fe.useState)("paint"),[p,m]=(0,Fe.useState)(.08),[y,b]=(0,Fe.useState)(!1),[g,S]=(0,Fe.useState)(null);(0,Fe.useEffect)(()=>{let z=!0;Ft(e).then(N=>{z&&c(N)}).catch(N=>{z&&S(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(N)}`)});let O=new Image;return O.crossOrigin="anonymous",O.onload=()=>{i.current=O},O.src=e,()=>{z=!1,i.current=null}},[e]);let h=(0,Fe.useMemo)(()=>s?s.width>=s.height?{width:Er,height:Math.round(s.height/s.width*Er)}:{width:Math.round(s.width/s.height*Er),height:Er}:{width:0,height:0},[s]);(0,Fe.useEffect)(()=>{let z=r.current,O=i.current;if(!z||!O||!h.width)return;let N=z.getContext("2d");if(!N||(z.width=h.width,z.height=h.height,N.clearRect(0,0,h.width,h.height),N.drawImage(O,0,0,h.width,h.height),!s))return;let w=Pa(p,{width:h.width,height:h.height});N.save(),N.globalAlpha=.55,N.fillStyle="#ffffff",N.strokeStyle="#ffffff",N.lineWidth=w*2,N.lineCap="round",N.lineJoin="round";for(let M of l){M.mode==="erase"?(N.globalCompositeOperation="destination-out",N.strokeStyle="#000",N.fillStyle="#000"):(N.globalCompositeOperation="source-over",N.strokeStyle="#ffffff",N.fillStyle="#ffffff");let E=M.points;if(E.length&&(N.beginPath(),N.arc(E[0].x*h.width,E[0].y*h.height,w,0,Math.PI*2),N.fill(),E.length>1)){N.beginPath(),N.moveTo(E[0].x*h.width,E[0].y*h.height);for(let _ of E.slice(1))N.lineTo(_.x*h.width,_.y*h.height);N.stroke()}}N.restore()},[h,l,p,s]);let v=z=>{let O=r.current;if(!O)return null;let N=O.getBoundingClientRect();return!N.width||!N.height?null:{x:Math.min(1,Math.max(0,(z.clientX-N.left)/N.width)),y:Math.min(1,Math.max(0,(z.clientY-N.top)/N.height))}},x=z=>{let O=v(z);O&&(z.currentTarget.setPointerCapture?.(z.pointerId),a.current=!0,u(N=>[...N,{mode:d,size:p,points:[O]}]))},C=z=>{if(!a.current)return;let O=v(z);O&&u(N=>{let w=N[N.length-1];if(!w)return N;let M=hf(w.points,O);return M===w.points?N:[...N.slice(0,-1),{...w,points:M}]})},k=()=>{a.current=!1},I=async()=>{if(!i.current||!s)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let O=document.createElement("canvas");O.width=s.width,O.height=s.height;let N=O.getContext("2d");if(!N)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");N.fillStyle="#ffffff",N.fillRect(0,0,s.width,s.height);let w=Pa(p,{width:s.width,height:s.height});N.globalCompositeOperation="destination-out",N.lineWidth=w*2,N.lineCap="round",N.lineJoin="round",N.strokeStyle="#000",N.fillStyle="#000";for(let M of l){if(M.mode!=="paint")continue;let E=bf(M.points[0],M.points[M.points.length-1],w/4,{width:s.width,height:s.height});if(E.length&&(N.beginPath(),N.arc(E[0].x*s.width,E[0].y*s.height,w,0,Math.PI*2),N.fill(),E.length>1)){N.beginPath(),N.moveTo(E[0].x*s.width,E[0].y*s.height);for(let _ of E.slice(1))N.lineTo(_.x*s.width,_.y*s.height);N.stroke()}}return O.toDataURL("image/png")},R=async()=>{b(!0),S(null);try{let z=await I();await o(z,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(z){S(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${le(z)}`)}finally{b(!1)}},F=yf(l);return(0,Me.jsx)(De,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Me.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:y||F,onClick:()=>void R(),children:y?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,Me.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Me.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Me.jsx)("button",{type:"button","aria-pressed":d==="paint",className:`im-btn-sm ${d==="paint"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("paint"),children:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"}),(0,Me.jsx)("button",{type:"button","aria-pressed":d==="erase",className:`im-btn-sm ${d==="erase"?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>f("erase"),children:"\u64E6"}),(0,Me.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,Me.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(p*100),onChange:z=>m(Ia(Number(z.target.value)/100)),className:"im-range"}),(0,Me.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(p*100),"%"]})]}),(0,Me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>u([]),children:"\u6E05\u7A7A"}),(0,Me.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,Me.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,Me.jsx)("canvas",{ref:r,onPointerDown:x,onPointerMove:C,onPointerUp:k,onPointerCancel:k,style:{width:h.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,Me.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",s?` \xB7 \u539F\u56FE ${s.width} \xD7 ${s.height}`:""]}),g?(0,Me.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:g}):null]})})}var ge=require("react");var ne=require("react/jsx-runtime"),wf=60;function vf(e){return Number.isFinite(e)?`${e.toFixed(2)} \u5143`:"-"}function Nw(e){let t=e.total?`${e.successRate.toFixed(1)}%`:"-";return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:vf(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:vf(e.cost)},{label:"\u6210\u529F\u7387",value:`${t}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:e.avgSeconds>0?`${e.avgSeconds.toFixed(1)}s`:"-"}]}function Mw(e){return e.replace(/[\\/][^\\/]+$/,"")}function kf({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,c]=(0,ge.useState)(""),[l,u]=(0,ge.useState)(!1),[d,f]=(0,ge.useState)(0),[p,m]=(0,ge.useState)(!0),[y,b]=(0,ge.useState)(!1),[g,S]=(0,ge.useState)(""),[h,v]=(0,ge.useState)("ledger"),[x,C]=(0,ge.useState)(""),[k,I]=(0,ge.useState)(null),[R,F]=(0,ge.useState)(new Map),[z,O]=(0,ge.useState)(null),N=(0,ge.useRef)(null),w=(0,ge.useRef)(0),M=(0,ge.useRef)([]),E=(0,ge.useRef)(i),_=(0,ge.useRef)(s);E.current=i,_.current=s;let P=(0,ge.useCallback)(async X=>{let L=++w.current;m(!0),S("");try{let D=await ia({limit:wf,offset:0,query:X?.query??E.current,status:X?.status??_.current});if(L!==w.current)return;let Y=Array.isArray(D.items)?D.items:[];v(D.source==="ledger"?"ledger":"none"),C(typeof D.ledgerPath=="string"?D.ledgerPath:""),r(Y),M.current=Y,u(D.hasMore===!0),f(Number(D.total)||Y.length)}catch(D){L===w.current&&S(le(D))}finally{L===w.current&&m(!1)}},[]),A=(0,ge.useCallback)(async()=>{if(y||!l)return;let X=w.current;b(!0);try{let L=await ia({limit:wf,offset:M.current.length,query:E.current,status:_.current});if(X!==w.current)return;let D=Array.isArray(L.items)?L.items:[];r(Y=>[...Y,...D]),M.current=[...M.current,...D],u(L.hasMore===!0),f(Number(L.total)||M.current.length)}catch(L){X===w.current&&S(le(L))}finally{X===w.current&&b(!1)}},[l,y]);(0,ge.useEffect)(()=>{P(),yu().then(I).catch(()=>I(null)),hu().then(X=>F(new Map((X?.images??[]).map(L=>[L.id,L])))).catch(()=>F(new Map))},[P]);let V=600,B=(0,ge.useCallback)(()=>{let X=N.current;X&&X.scrollHeight-X.scrollTop-X.clientHeight<V&&A()},[A]),W=(0,ge.useMemo)(()=>o.filter(X=>X.status==="error"&&X.inputRefMissing).length,[o]),U=k?Nw(k):[],q=k?.bySize.slice(0,3)??[],Q=x||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(De,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,ne.jsxs)("div",{className:"im-history",children:[(0,ne.jsxs)("div",{className:"im-history-bar",children:[(0,ne.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,ne.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:X=>a(X.target.value),onKeyDown:X=>{X.key==="Enter"&&P()}}),(0,ne.jsxs)("select",{className:"im-field im-history-status",value:s,"aria-label":"\u6309\u72B6\u6001\u7B5B\u9009",onChange:X=>{c(X.target.value),P({status:X.target.value})},children:[(0,ne.jsx)("option",{value:"",children:"\u5168\u90E8\u72B6\u6001"}),(0,ne.jsx)("option",{value:"ok",children:"\u6210\u529F"}),(0,ne.jsx)("option",{value:"error",children:"\u5931\u8D25"})]}),(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void P(),children:"\u641C\u7D22"}),(0,ne.jsxs)("div",{className:"im-history-bar-end",children:[W>0?(0,ne.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[W," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),U.length?(0,ne.jsxs)("div",{className:"im-history-stats",children:[U.map(X=>(0,ne.jsxs)("div",{className:"im-history-stat",children:[(0,ne.jsx)("div",{className:"im-history-stat-label",children:X.label}),(0,ne.jsx)("div",{className:"im-history-stat-value",children:X.value})]},X.label)),q.length?(0,ne.jsxs)("div",{className:"im-history-stat",children:[(0,ne.jsx)("div",{className:"im-history-stat-label",children:"\u6309\u5C3A\u5BF8"}),(0,ne.jsx)("div",{className:"im-history-stat-value",children:q.map(X=>`${X.size} \xD7${X.count}`).join(" \xB7 ")})]}):null]}):null,(0,ne.jsxs)("div",{ref:N,className:"im-history-list",onScroll:B,"data-testid":"history-list",children:[g?(0,ne.jsx)("div",{className:"im-history-error",children:g}):null,p?(0,ne.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("ul",{className:"im-history-rows",children:o.map((X,L)=>{let D=X.assetId?R.get(X.assetId):void 0,Y=!!D;return(0,ne.jsxs)("li",{className:"im-history-row",children:[(0,ne.jsx)("div",{className:"im-history-thumb",children:X.url?(0,ne.jsx)("img",{src:X.url,alt:X.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>O({url:X.url,path:X.path})}):(0,ne.jsx)("span",{className:"im-history-thumb-empty",children:X.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,ne.jsxs)("div",{className:"im-history-main",children:[(0,ne.jsx)("p",{className:"im-history-prompt",title:X.prompt||"\uFF08\u65E0\u63D0\u793A\u8BCD\uFF09",children:X.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,ne.jsxs)("p",{className:"im-history-meta",children:[X.time||"-"," \xB7 ",X.quality||"-"," \xB7 ",X.size||"-"]}),X.inputRefs.length?(0,ne.jsx)("div",{className:"im-history-refs",children:X.inputRefs.map(J=>(0,ne.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,ne.jsx)("img",{src:J.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>O({url:J.url,path:J.path})})},J.id))}):null,X.inputRefMissing?(0,ne.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,ne.jsxs)("div",{className:"im-history-actions",children:[(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!X.prompt,onClick:()=>void navigator.clipboard.writeText(X.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!X.path,onClick:()=>void On(Mw(X.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,ne.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Y,title:Y?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{D&&t([D])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${X.time}-${X.output}-${L}`)})}),(0,ne.jsx)("div",{className:"im-history-pager",children:y?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":l?(0,ne.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void A(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):h==="none"?(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,ne.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,ne.jsx)("code",{children:Q}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,ne.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),z?(0,ne.jsx)(_r,{imageUrl:z.url,...z.path?{copyPath:z.path}:{},onClose:()=>O(null)}):null]})}var wt=require("react");var Se=require("react/jsx-runtime");async function Iw(e,t,n,o){let r=await new Promise((c,l)=>{let u=new Image;u.onload=()=>c(u),u.onerror=()=>l(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),u.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let c=0;c<n;c+=1)for(let l=0;l<t;l+=1){let u=document.createElement("canvas");u.width=i,u.height=a;let d=u.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,l*i,c*a,i,a,0,0,i,a),s.push(u.toDataURL("image/png"))}return s}var Pw="52vh";function Sf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,wt.useState)(null),[i,a]=(0,wt.useState)(2),[s,c]=(0,wt.useState)(2),[l,u]=(0,wt.useState)(!1),[d,f]=(0,wt.useState)(null);(0,wt.useEffect)(()=>{let b=!0;return Ft(e).then(g=>{b&&r(g)}).catch(g=>{b&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(g)}`)}),()=>{b=!1}},[e]);let p=(0,wt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),m=async()=>{if(o){u(!0),f(null);try{let b=await Iw(e,i,s,o);await n(b.map((g,S)=>({dataUrl:g,note:`\u5207\u5206 ${S+1}/${b.length}`})))}catch(b){f(`\u5207\u5206\u5931\u8D25\uFF1A${le(b)}`)}finally{u(!1)}}},y=i*s;return(0,Se.jsx)(De,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Se.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||y<2,onClick:()=>void m(),children:l?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${y} \u5F20`})]}),children:(0,Se.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Se.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,Se.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,Se.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:b=>a(Number(b.target.value)),className:"im-range"}),(0,Se.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,Se.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,Se.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:b=>c(Number(b.target.value)),className:"im-range"}),(0,Se.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,Se.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[y," \u5F20 \xB7 \u6BCF\u5F20 ",p.w," \xD7 ",p.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,Se.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,Se.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${Pw} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(b,g)=>(0,Se.jsx)("span",{style:{position:"absolute",left:`${(g+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${g}`)),Array.from({length:s-1},(b,g)=>(0,Se.jsx)("span",{style:{position:"absolute",top:`${(g+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${g}`))]})}),(0,Se.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,Se.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var vt=require("react");var Ie=require("react/jsx-runtime"),Cf=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],_f=[1024,1536,2048,3072,4096];function Nf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,vt.useState)(null),[i,a]=(0,vt.useState)(2048),[s,c]=(0,vt.useState)("high"),[l,u]=(0,vt.useState)(!1),[d,f]=(0,vt.useState)(null);(0,vt.useEffect)(()=>{let g=!0;return Ft(e).then(S=>{if(!g)return;r(S);let h=Math.max(S.width,S.height),v=_f.find(x=>x>h)??4096;a(v)}).catch(S=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${le(S)}`)}),()=>{g=!1}},[e]);let p=(0,vt.useMemo)(()=>o?_a(o.width,o.height,i):{width:0,height:0},[o,i]),m=o&&o.width>0?p.width/o.width:0,y=!!o&&p.width<o.width,b=async()=>{u(!0),f(null);try{let g=await df(e,{targetLongEdge:i,algorithm:s});await n(g,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${Cf.find(S=>S.value===s)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${le(g)}`)}finally{u(!1)}};return(0,Ie.jsx)(De,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!o||p.width<8||p.height<8,onClick:()=>void b(),children:l?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ie.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),_f.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(g),children:g},g))]}),(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),Cf.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g.value===s,className:`im-btn-sm ${g.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(g.value),children:g.label},g.value))]}),(0,Ie.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Ie.jsxs)(Ie.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Ie.jsxs)("b",{style:{color:y?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),m?` \xB7 ${m.toFixed(2)}\xD7`:"",y?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Ie.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Ie.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var za=require("react/jsx-runtime");function Mf({guides:e}){return e.length?(0,za.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,za.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Nr=require("react");var Te=require("react/jsx-runtime");function If({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,Nr.useState)(""),i=(0,Nr.useMemo)(()=>Zu(o),[o]),a=o.trim().length>0,s=i.cards,c=i.issues??[];return(0,Te.jsx)(De,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u5B9E\u65F6\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u3002",size:"lg",onClose:t,footer:(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Te.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!s.length||c.length>0,onClick:()=>n(s),children:["\u5EFA ",s.length," \u5F20\u5361"]})]}),children:(0,Te.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Te.jsxs)("p",{style:{margin:0,fontSize:12.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,Te.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,Te.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u683C\u5F0F\u4E0D\u5BF9\u7684\u5757\u4E0D\u4F1A\u5EFA\u5361\uFF0C\u4F1A\u5728\u4E0B\u9762\u6807\u51FA\u6765\u3002"]}),(0,Te.jsx)("textarea",{value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace"},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),a?(0,Te.jsxs)("div",{style:{fontSize:12,display:"grid",gap:4},children:[(0,Te.jsxs)("strong",{style:{fontWeight:600},children:["\u8BC6\u522B\u5230 ",s.length," \u5F20\u5361",c.length?`\uFF0C${c.length} \u5904\u9700\u8981\u4FEE\u6B63`:""]}),s.slice(0,8).map((l,u)=>(0,Te.jsxs)("div",{style:{color:"var(--im-ink-2)"},children:[u+1,". ",l.title?`${l.title} \xB7 `:"",l.ratio?`\u6BD4\u4F8B ${l.ratio}`:"\u6BD4\u4F8B\u6309\u9ED8\u8BA4",l.prompt?` \xB7 ${l.prompt.slice(0,46)}${l.prompt.length>46?"\u2026":""}`:" \xB7 \u63D0\u793A\u8BCD\u4E3A\u7A7A"]},`${u}-${l.title??""}`)),s.length>8?(0,Te.jsxs)("div",{style:{color:"var(--im-ink-3)"},children:["\u2026\u8FD8\u6709 ",s.length-8," \u5F20"]}):null,c.slice(0,5).map((l,u)=>(0,Te.jsxs)("div",{style:{color:"var(--im-danger)"},children:[l.title?`\u300C${l.title}\u300D\uFF1A`:"",l.message]},`issue-${u}`))]}):null,(0,Te.jsxs)("span",{style:{fontSize:11,color:"var(--im-ink-3)"},children:["\u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var dn=require("react");var Ir=require("react");Da();var Ke=require("react/jsx-runtime");function Rf({config:e,onSaved:t,onFlash:n}){let o=Ra(),[r,i]=(0,Ir.useState)(""),[a,s]=(0,Ir.useState)(""),[c,l]=(0,Ir.useState)(!1),u=e?.defaultOutputDir??"",d=async p=>{l(!0);try{let m=await ao(p);t(m),i(""),n(p?"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0":"\u5DF2\u56DE\u5230\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(m)}`)}finally{l(!1)}},f=async p=>{l(!0);try{let m=await Mu(p);t(m),s(""),n(p>0?`\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${p.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(m){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(m)}`)}finally{l(!1)}};return(0,Ke.jsxs)("div",{style:{display:"grid",gap:8,paddingTop:10,borderTop:"1px solid var(--im-line)"},children:[(0,Ke.jsx)("span",{className:"im-label",children:"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84"}),(0,Ke.jsx)(o.SettingsValueField,{id:"imagora-output-dir",label:"\u56FE\u7247\u843D\u76D8\u76EE\u5F55",hint:`\u7559\u7A7A\u5219\u7528 ${u||"\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output"}\uFF1B\u5DF2\u4FDD\u5B58\u7684\u503C\u4F1A\u4E00\u76F4\u751F\u6548`,text:r===""?u:r,placeholder:"\u7559\u7A7A = \u7528\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output",disabled:c,onEdit:p=>i(p)}),(0,Ke.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ke.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void On(u),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Ke.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!r.trim()||r.trim()===u,onClick:()=>void d(r.trim()),children:"\u8BBE\u4E3A\u9ED8\u8BA4"}),(0,Ke.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c,onClick:()=>void d(""),children:"\u56DE\u5230\u9ED8\u8BA4"})]}),(0,Ke.jsx)("span",{className:"im-label",style:{marginTop:6},children:"\u9884\u7B97\u4E0A\u9650"}),(0,Ke.jsx)(o.SettingsValueField,{id:"imagora-budget",label:"\u672C\u753B\u5E03\u6700\u591A\u82B1\u591A\u5C11\uFF08\u5143\uFF09",hint:e?.budget?`\u5F53\u524D\u4E0A\u9650 \xA5${e.budget.toFixed(2)}\uFF1B\u82B1\u5230\u4E0A\u9650\u65F6\u65B0\u4EFB\u52A1\u4F1A\u88AB\u62D2\u7EDD`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\uFF1B\u8BBE\u4E86\u4E4B\u540E\u82B1\u5230\u4E0A\u9650\u4F1A\u62D2\u7EDD\u65B0\u4EFB\u52A1",text:a===""?e?.budget?String(e.budget):"":a,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",numeric:!0,disabled:c,onEdit:p=>s(p)}),(0,Ke.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ke.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:c||!a.trim(),onClick:()=>void f(Number(a)),children:"\u4FDD\u5B58\u9884\u7B97"}),(0,Ke.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:c||!e?.budget,onClick:()=>void f(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})}var Pr=require("react");var Re=require("react/jsx-runtime");function Df({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,Pr.useState)(""),[i,a]=(0,Pr.useState)(""),[s,c]=(0,Pr.useState)(!1),l=e?.imagoraRoot??"",u=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async m=>{c(!0);try{let y=await Iu({title:m==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:m==="root"?l:d});if(!y.ok){if(y.reason==="cancelled")return;n(y.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${y.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let b=m==="root"?await sa(y.path||""):await ao(y.path||"");t(b),m==="root"?r(""):a(""),n(m==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(y){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(y)}`)}finally{c(!1)}},p=async(m,y)=>{c(!0);try{let b=m==="root"?await sa(y):await ao(y);t(b),m==="root"?r(""):a(""),n(y?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${le(b)}`)}finally{c(!1)}};return(0,Re.jsxs)("div",{className:"im-fieldset",children:[(0,Re.jsxs)("div",{children:[(0,Re.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,Re.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?l:o,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:m=>r(m.target.value)}),(0,Re.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,Re.jsxs)("div",{className:"im-field-actions",children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===l,onClick:()=>void p("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!l,onClick:()=>void p("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,Re.jsxs)("div",{children:[(0,Re.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,Re.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?u:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:m=>a(m.target.value)}),(0,Re.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",u?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,Re.jsxs)("div",{className:"im-field-actions",children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===u,onClick:()=>void p("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void On(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void p("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var he=require("react/jsx-runtime");function Aa({id:e,label:t,hint:n,state:o,stateTone:r,children:i}){return(0,he.jsxs)("div",{children:[(0,he.jsxs)("label",{className:"im-label",htmlFor:e,children:[t,o?(0,he.jsx)("span",{className:`im-field-state is-${r??"ok"}`,children:o}):null]}),i,n?(0,he.jsx)("p",{className:"im-field-hint",children:n}):null]})}function Af({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,dn.useState)(r?.baseUrl??""),[c,l]=(0,dn.useState)(r?.model??""),[u,d]=(0,dn.useState)(""),[f,p]=(0,dn.useState)(!1),[m,y]=(0,dn.useState)(null),[b,g]=(0,dn.useState)([]),S=async()=>{p(!0);try{let x=await la({baseUrl:a.trim(),model:c.trim(),apiKey:u.trim()});n(x),d(""),o("\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(x){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${le(x)}`)}finally{p(!1)}},h=async()=>{p(!0);try{let x=await la({reset:!0});n(x),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(x){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${le(x)}`)}finally{p(!1)}},v=async()=>{p(!0),y(null);try{let x=await Pu({baseUrl:a.trim(),apiKey:u.trim()});g(x.models??[]),y(x.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${x.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(x){g([]),y(`\u8FDE\u4E0D\u901A\uFF1A${le(x)}`)}finally{p(!1)}};return(0,he.jsx)(De,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u586B\u4E00\u6B21\u63A5\u53E3\u5730\u5740\u548C API Key \u5C31\u80FD\u7528\uFF0C\u4E0D\u9700\u8981\u672C\u673A\u88C5 Imagora\u3002",size:"lg",onClose:t,footer:(0,he.jsxs)(he.Fragment,{children:[i?(0,he.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void h(),children:"\u6E05\u7A7A\u5E76\u56DE\u5230 Imagora \u914D\u7F6E"}):null,(0,he.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:t,children:"\u53D6\u6D88"}),(0,he.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:f||!a.trim(),onClick:()=>void S(),children:"\u4FDD\u5B58"})]}),children:(0,he.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,he.jsx)("p",{style:{margin:0,fontSize:12.5,color:"var(--im-ink-3)",lineHeight:1.7},children:i?"\u5F53\u524D\u7528\u7684\u662F\u63D2\u4EF6\u5185\u914D\u7F6E\u3002":"\u5F53\u524D\u7528\u7684\u662F\u672C\u673A Imagora \u7684\u914D\u7F6E\u3002"}),(0,he.jsx)(Aa,{id:"imagora-provider-base-url",label:"\u63A5\u53E3\u5730\u5740",hint:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\uFF0C\u4F8B\u5982 https://api.example.com/v1",children:(0,he.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:f,onChange:x=>s(x.target.value)})}),(0,he.jsx)(Aa,{id:"imagora-provider-api-key",label:"API Key",hint:"\u53EA\u5B58\u5728\u672C\u673A ~/.dsh/imagora/settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7",state:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E",stateTone:r?.apiKeyConfigured?"ok":"warn",children:(0,he.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:u,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:f,onChange:x=>d(x.target.value)})}),(0,he.jsx)(Aa,{id:"imagora-provider-model",label:"\u6A21\u578B\u540D",hint:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628",children:(0,he.jsx)("input",{id:"imagora-provider-model",className:"im-field",value:c,placeholder:"gpt-image-2.5-flare",disabled:f,onChange:x=>l(x.target.value)})}),(0,he.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,he.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void v(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),m?(0,he.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:m}):null]}),b.length?(0,he.jsx)("div",{style:{fontSize:12,color:"var(--im-ink-2)"},children:b.slice(0,40).map(x=>(0,he.jsx)("button",{type:"button",onClick:()=>l(x),style:{display:"block",border:"none",background:"none",padding:"2px 0",cursor:"pointer",color:x===c?"var(--im-brand)":"var(--im-ink-2)",font:"inherit",textAlign:"left"},children:x},x))}):null,(0,he.jsx)(Df,{config:e,onSaved:n,onFlash:o}),(0,he.jsx)(Rf,{config:e,onSaved:n,onFlash:o})]})})}var Hn=require("react");function Tf({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i}){let a=(0,Hn.useCallback)(async(d,f)=>{let p=d.filter($u);if(!p.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}for(let[m,y]of p.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let b=await gr(y,y.name||`pasted-${Date.now()}.png`),g=sn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},{x:f.x+m*172,y:f.y});t(S=>[...S,g]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`)}catch(b){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${le(b)}`)}},[t,o,r]),s=(0,Hn.useCallback)((d,f,p)=>{let m=f?p(f):n();a(d,m)},[a,n]),c=(0,Hn.useCallback)(d=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let p=f.files?.[0];if(p)try{let m=await gr(p,p.name);t(y=>y.map(b=>b.id===d&&b.type==="image"?{...b,data:{...b.data,registryId:m.id,name:m.name,url:m.url,size:m.size,ext:m.ext,absPath:m.absPath,missing:!1}}:b)),o(`\u5DF2\u66FF\u6362\u4E3A ${m.name}`)}catch(m){o(`\u66FF\u6362\u5931\u8D25\uFF1A${le(m)}`)}},f.click()},[t,o]),l=(0,Hn.useCallback)(d=>{let f=e.current.find(p=>p.id===d);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name,path:f.data.absPath})},[e,i]),u=(0,Hn.useCallback)(async(d,f,p)=>{let m=await fetch(d).then(h=>h.blob()),y=f.endsWith(".png")?f:`${f}.png`,b=await gr(m,y),g=p??n(),S=sn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},g);return t(h=>[...h,S]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`),b},[t,o,n]);return{addImages:a,dropFiles:s,replaceImage:c,openPreview:l,addDataUrl:u}}function Of(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Vt=require("react");function $f({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let c=(0,Vt.useCallback)((p,m)=>{let b=(Array.isArray(m.results)?m.results:[]).filter(x=>x.status==="ok"&&x.assetId&&x.url),g=e.current.find(x=>x.id===p&&x.type==="prompt"),S=[];if(g&&g.type==="prompt"){let x=xr(g).height;b.forEach((C,k)=>{S.push(sn({id:String(C.assetId),relPath:C.name??"result.png",name:C.name??"result.png",url:String(C.url),size:C.bytes??0,ext:String(C.ext??"png"),absPath:C.absPath??"",createdAt:new Date().toISOString()},{x:g.position.x+k*172,y:g.position.y+x+56}))})}n(x=>{let C=[...x,...S];return ft(C,p,{status:m.status==="done"?"done":m.status==="cancelled"?"idle":"failed",resultCount:b.length,message:m.error??void 0,startedAtMs:void 0,cancelRequested:!1})}),S.length&&o(x=>{let C=S.map(k=>({id:`${p}->${k.id}`,source:p,target:k.id,animated:!0})).filter(k=>!x.some(I=>I.id===k.id));return C.length?[...x,...C]:x}),a.current.delete(p);let h=s.current.get(p);h&&window.clearTimeout(h),s.current.delete(p);let v=m.totalCost??0;v>0&&n(x=>{let C=x.find(I=>I.id===p),k=Number(C?.data?.cost??0);return ft(x,p,{cost:k+v})}),r(m.status==="done"?`\u5B8C\u6210 \xB7 ${b.length} \u5F20${v?` \xB7 ${v.toFixed(2)} \u5143`:""}`:`${m.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${m.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),l=(0,Vt.useCallback)((p,m)=>{let y=async()=>{try{let b=await wu(m);if(b.status==="queued")n(g=>ft(g,p,{status:"queued"}));else if(b.status==="running")n(g=>ft(g,p,{status:"running",startedAtMs:b.startedAt??Date.now(),cancelRequested:b.cancelRequested}));else{c(p,b);return}}catch(b){r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${le(b)}`)}s.current.set(p,window.setTimeout(y,1200))};y()},[c,r,n,s]),u=(0,Vt.useCallback)(async p=>{let m=e.current.find(b=>b.id===p);if(!m||m.type!=="prompt")return;if(!m.data.prompt.trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let y=Gu(e.current,t.current,p,m.data.prompt);if(y.mode==="invalid"){let b=y.unknown.map(g=>`@${g}`).join("\u3001");n(g=>ft(g,p,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${b}`}));return}try{let b=await xu({prompt:m.data.prompt,size:m.data.size,quality:m.data.quality,refIds:y.images.map(g=>g.type==="image"?g.data.registryId:"").filter(Boolean),outputDir:m.data.outputDir,spent:e.current.reduce((g,S)=>g+Number(S.data?.cost??0),0),mask:y.images.map(g=>g.type==="image"?g.data.maskDataUrl:"").find(Boolean)||""});a.current.set(p,b.taskId),n(g=>ft(g,p,{status:"queued",startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${y.images.length} \u5F20 \xB7 ${m.data.size}`),l(p,b.taskId)}catch(b){let g=le(b);n(S=>ft(S,p,{status:"failed",message:g})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${g}`)}},[e,t,n,i,r,l,a]),d=(0,Vt.useCallback)(async p=>{let m=a.current.get(p);if(n(y=>ft(y,p,{cancelRequested:!0})),!!m)try{await vu(m)}catch(y){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${le(y)}`)}},[n,r,a]),f=(0,Vt.useCallback)(p=>{for(let m of p)u(m)},[u]);return(0,Vt.useEffect)(()=>{let p=s.current;return()=>{for(let m of p.values())window.clearTimeout(m);p.clear()}},[s]),{runPrompt:u,cancelPrompt:d,runMany:f}}var it=require("react");function Lf(e){let[t,n]=(0,it.useState)(null),[o,r]=(0,it.useState)([]),i=(0,it.useRef)(null),a=(0,it.useCallback)(u=>{n(u),i.current=u,r(u.issues)},[]),s=(0,it.useCallback)(async()=>{try{a(await gu())}catch(u){r([le(u)])}},[a]);(0,it.useEffect)(()=>{s()},[s]);let c=(0,it.useCallback)(async u=>{try{let d=await Nu(u);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${le(d)}`)}},[a,e]),l=(0,it.useCallback)(async u=>{try{let d=await Eu(u);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${le(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:l,replaceConfig:a}}var fn=require("react");function go(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Hf(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(go(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(go(r)),go(i)):null},restore(r){let i=o.shift();return i?(n.push(go(r)),go(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Bf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,fn.useRef)(Hf(50)),a=(0,fn.useCallback)(()=>{i.current.record({nodes:e.current,edges:t.current})},[e,t]),s=(0,fn.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,fn.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),l=(0,fn.useCallback)(()=>i.current.clear(),[]),u=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:c,clear:l,canUndo:u,canRestore:d}}var Wf=require("react");function Rw(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Ff(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:l,hasPreview:u}=e;(0,Wf.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&u){l();return}if(Rw(f.target))return;let p=f.ctrlKey||f.metaKey,m=f.key.toLowerCase();if(p&&m==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(b=>b.some(g=>!g.selected)?b.map(g=>({...g,selected:!0})):b);return}if(p&&m==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(p&&m==="y"){f.preventDefault(),s();return}if(p&&m==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,c,l,u,e])}var Gt=require("react");var Dw=2500;function Vf({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:l}){let u=(0,Gt.useRef)(null);(0,Gt.useEffect)(()=>{if(e.length)return u.current&&window.clearTimeout(u.current),u.current=window.setTimeout(()=>{Cu(n.current,o.current).catch(()=>{})},Dw),()=>{u.current&&window.clearTimeout(u.current)}},[e,t,n,o]),(0,Gt.useEffect)(()=>{let p=!1;return(async()=>{try{let y=await _u();if(p||y.empty||!y.nodes?.length)return;let b=ca(y.nodes,y.edges??[],[]);r(b.nodes),i(b.edges),s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${y.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`)}catch{}})(),()=>{p=!0}},[r,i,s]);let d=(0,Gt.useCallback)(async p=>{try{let m=await ku(p,n.current,o.current);l(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${m.name||p}\u300D`)}catch(m){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${le(m)}`)}},[n,o,l,c]),f=(0,Gt.useCallback)(async p=>{try{let m=await Su(p),y=ca(m.nodes,m.edges,m.missing??[]);r(y.nodes),i(y.edges),l(),c(`\u5DF2\u52A0\u8F7D\u300C${m.name||p}\u300D`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(m){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${le(m)}`)}},[r,i,a,l,c]);return{doSave:d,doLoad:f}}var fe=require("react/jsx-runtime");function Ta(){let[e,t,n]=lu([]),[o,r,i]=cu([]),[a,s]=(0,ie.useState)([]),[c,l]=(0,ie.useState)(null),[u,d]=(0,ie.useState)(null),[f,p]=(0,ie.useState)(null),[m,y]=(0,ie.useState)(1),[b,g]=(0,ie.useState)(()=>$d()),[S,h]=(0,ie.useState)([]),[v,x]=(0,ie.useState)(null),[C,k]=(0,ie.useState)(()=>nd()),[I,R]=(0,ie.useState)(!1),[F,z]=(0,ie.useState)([]),O=(0,ie.useRef)(null),N=(0,ie.useRef)(null),w=(0,ie.useRef)(null),M=(0,ie.useRef)(null),E=(0,ie.useRef)(new Map),_=(0,ie.useRef)(new Map),P=(0,ie.useRef)(e),A=(0,ie.useRef)(o);P.current=e,A.current=o;let V=(0,ie.useCallback)(T=>{s(G=>[...G.slice(-8),T])},[]),B=(0,ie.useCallback)(T=>{l(T),window.setTimeout(()=>l(G=>G===T?null:G),2600)},[]),{config:W,configIssues:U,configRef:q,switchProfile:Q,switchModel:X,replaceConfig:L}=Lf(B),D=(0,ie.useRef)(!1);(0,ie.useEffect)(()=>{!W||D.current||!(!W.provider?.apiKeyConfigured&&(W.source==="plugin"||W.issues.length>0))||(D.current=!0,d({kind:"settings"}))},[W]);let{addImages:Y,replaceImage:J,openPreview:oe,addDataUrl:j}=Tf({nodesRef:P,setNodes:t,createPosition:()=>pn.current(),log:V,flash:B,setPreview:p}),{runPrompt:te,cancelPrompt:se,runMany:ce}=$f({nodesRef:P,edgesRef:A,setNodes:t,setEdges:r,log:V,flash:B,taskIdsRef:_,timersRef:E}),{doSave:me,doLoad:$e}=Vf({nodes:e,edges:o,nodesRef:P,edgesRef:A,setNodes:t,setEdges:r,instanceRef:N,log:V,flash:B,closeDialog:()=>d(null)}),ue=Bf({nodesRef:P,edgesRef:A,setNodes:t,setEdges:r,flash:B}),tt=Nd(e),Le=(0,ie.useMemo)(()=>Vu(e,o),[e,o]),at=(0,ie.useMemo)(()=>e.map(T=>{if(T.type==="image"){let G=Le.refCounts.get(T.data.registryId)??0;return(T.data.refCount??0)===G?T:{...T,data:{...T.data,refCount:G}}}if(T.type==="group"){let G=Le.groupCounts.get(T.id)??0,K=Le.groupSizes.get(T.id)??0,re=Le.groupDups.get(T.id)??0;return T.data.imageCount===G&&T.data.totalSize===K&&T.data.duplicateCount===re?T:{...T,data:{...T.data,imageCount:G,totalSize:K,duplicateCount:re}}}return T}),[e,Le]),kt=e.filter(T=>T.type==="prompt"),pt=kt.filter(T=>T.data.status==="queued"||T.data.status==="running").map(T=>T.id),st=kt.filter(T=>T.data.prompt.trim()&&T.data.status!=="running"&&T.data.status!=="queued").map(T=>T.id),Ve=(0,ie.useCallback)((T,G)=>{t(K=>ft(K,T,G))},[t]),Ge=(0,ie.useCallback)(T=>{ue.record();let G=new Set(T);t(K=>K.filter(re=>!G.has(re.id))),r(K=>K.filter(re=>!G.has(re.source)&&!G.has(re.target)))},[t,r,ue]),nt=(0,ie.useCallback)(T=>{let G=P.current.find(K=>K.id===T);Ge([T]),G?.type==="image"&&bu(G.data.registryId).catch(()=>{})},[Ge]),Ce=(0,ie.useCallback)(()=>{let T=N.current,G=O.current?.getBoundingClientRect(),K=T&&G?T.screenToFlowPosition({x:G.width/2,y:G.height/2}):{x:140,y:120},{position:re,next:ke}=Lu(K,M.current);return M.current=ke,re},[]),pn=(0,ie.useRef)(Ce);pn.current=Ce;let mn=(0,ie.useCallback)(T=>{let G=q.current,K=Hu(T??Ce(),{size:G?.sizes[0]?.value??"1024x1024",quality:G?.qualities[0]??"high",outputDir:""});t(re=>[...re,K])},[Ce,t,q]),ho=(0,ie.useCallback)(T=>{t(G=>[...G,Bu(T??Ce())])},[Ce,t]),zr=(0,ie.useCallback)(()=>{r(ua(P.current,A.current)),B("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,B]),Rr=(0,ie.useCallback)(()=>{let T=new Set(S);if(!T.size){B("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}ue.record(),r(Xu(P.current,A.current,T)),B("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[S,r,B,ue]),Dr=(0,ie.useCallback)(()=>{let T=new Set(S),G=q.current?.defaultOutputDir??"";T.size&&(ue.record(),t(K=>K.map(re=>re.type==="prompt"&&T.has(re.id)?{...re,data:{...re.data,outputDir:G}}:re)),B(G?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${G}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[S,t,B,ue]),Ar=(0,ie.useCallback)(()=>{let T=N.current;if(!T)return;let G=P.current.filter(re=>S.includes(re.id)),K=G.length?G:P.current;if(!K.length){B("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}T.fitView({nodes:K,padding:.25,duration:300,maxZoom:1.6})},[S,B]),Tr=(0,ie.useCallback)(()=>{let T=new Set(S);if(!T.size){B("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}ue.record(),t(G=>{let K=G.filter(Pe=>T.has(Pe.id)&&Pe.type==="image");if(!K.length)return G;let re=Math.min(...K.map(Pe=>Pe.position.x)),ke=Math.min(...K.map(Pe=>Pe.position.y)),St=new Map(K.map((Pe,gn)=>[Pe.id,gn]));return G.map(Pe=>{let gn=St.get(Pe.id);return gn===void 0?Pe:{...Pe,position:{x:re+gn*172,y:ke}}})})},[S,t,B,ue]),{dropIntent:Or,dragHandlers:$r,startToolbarDrag:Lr,dropChip:Hr}=Td({canvasRef:O,modalOpen:!!u||!!f,getCreatePosition:()=>Ce(),toFlowPosition:T=>N.current?N.current.screenToFlowPosition(T):Ce(),onDropFiles:(T,G)=>void Y(T,G),onDropNode:(T,G)=>{ue.record(),T==="prompt"?mn(G):ho(G)}});(0,ie.useEffect)(()=>{let T=G=>{let K=G.target;if(K&&(K.tagName==="TEXTAREA"||K.tagName==="INPUT"))return;let re=Array.from(G.clipboardData?.files??[]);re.length&&(G.preventDefault(),Y(re,Ce()))};return window.addEventListener("paste",T),()=>window.removeEventListener("paste",T)},[Y,Ce]),Ff({nodesRef:P,edgesRef:A,setNodes:t,setEdges:r,selectedIds:S,selectedEdgeId:v,onDeleteNodes:Ge,onDeleteEdge:T=>{ue.record(),r(G=>G.filter(K=>K.id!==T)),x(null)},onUndo:ue.undo,onRestore:ue.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let Xt=(0,ie.useCallback)(T=>G=>{let K=P.current.find(re=>re.id===G);if(!K||K.type!=="image"||!K.data.url){B("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:T,target:{nodeId:G,src:K.data.url,name:K.data.name}})},[P,B]),bo=(0,ie.useMemo)(()=>({cropImage:Xt("crop"),splitImage:Xt("split"),upscaleImage:Xt("upscale"),maskImage:Xt("mask")}),[Xt]),yo=(0,ie.useCallback)(T=>{ue.record(),t(G=>G.map(K=>K.id===T&&K.type==="image"?{...K,data:{...K.data,maskDataUrl:void 0}}:K)),B("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,ue,B]),Br=(0,ie.useMemo)(()=>({updatePrompt:Ve,runPrompt:T=>{te(T)},cancelPrompt:T=>{se(T)},deleteNode:nt,zoomImage:oe,replaceImage:J,...bo,clearMask:yo,config:W}),[Ve,te,se,nt,oe,J,bo,yo,W]);return(0,fe.jsxs)(ba.Provider,{value:Br,children:[(0,fe.jsx)("style",{children:Sd}),(0,fe.jsxs)("div",{className:"im-root",children:[(0,fe.jsx)(Id,{config:W,promptCount:kt.length,runnableIds:st,busyIds:pt.length,snapEnabled:C,canvasLocked:I,cost:tt,canUndo:ue.canUndo,canRestore:ue.canRestore,onUndo:()=>{ue.record(),ue.undo()},onRestore:ue.restore,onAddPrompt:()=>mn(),onPickFiles:()=>w.current?.click(),onAddGroup:()=>ho(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:Lr,onRun:ce,onCancelAll:()=>pt.forEach(T=>void se(T)),onAutoConnect:zr,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:T=>void Q(T),onSwitchModel:T=>void X(T),onOpenSave:async()=>{try{let T=await aa();d({kind:"save",workflows:T.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let T=await aa();d({kind:"load",workflows:T.workflows})}catch(T){B(`\u8BFB\u53D6\u5931\u8D25\uFF1A${le(T)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),U.length?(0,fe.jsx)(Vd,{tone:"error",action:(0,fe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,fe.jsx)("ul",{className:"im-banner-list",children:U.map(T=>(0,fe.jsx)("li",{children:T},T))})}):null,(0,fe.jsxs)("div",{className:`im-canvas${Or?" is-drop-active":""}`,ref:O,...$r,children:[(0,fe.jsx)(Hd,{selectedCount:S.length,selectedPromptCount:S.filter(T=>e.some(G=>G.id===T&&G.type==="prompt")).length,selectedRunnableIds:st.filter(T=>S.includes(T)),pickingOutputDir:!1,onRunSelected:()=>ce(st.filter(T=>S.includes(T))),onAutoLayout:Tr,onAutoConnectSelected:Rr,onSetOutputDir:Dr,onDeleteSelected:()=>{Ge(S),h([])}}),(0,fe.jsxs)(su,{nodes:at,edges:o,nodeTypes:Cd,onNodesChange:T=>{let G=rd(T,P.current,C);z(G.guides),n(G.changes)},onEdgesChange:T=>i(T),onConnect:Of(r),isValidConnection:T=>Wu(P.current,A.current,{source:String(T.source??""),target:String(T.target??"")}),onInit:T=>{N.current=T},onNodeDragStop:(T,G)=>{if(z([]),!C)return;let K=co(G),re=P.current.filter(St=>St.id!==G.id).map(co),ke=wr(K,re);ke.x===K.x&&ke.y===K.y||t(St=>St.map(Pe=>Pe.id===G.id?{...Pe,position:{x:ke.x,y:ke.y}}:Pe))},onMove:(T,G)=>y(G.zoom),onEdgeDoubleClick:(T,G)=>{ue.record(),r(K=>K.filter(re=>re.id!==G.id)),x(null)},onSelectionChange:({nodes:T,edges:G})=>{let K=T.map(ke=>ke.id);h(ke=>ke.length===K.length&&ke.every((St,Pe)=>St===K[Pe])?ke:K);let re=G.length===1?G[0].id:null;x(ke=>ke===re?ke:re)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:{animated:!0,markerEnd:{type:Ot.ArrowClosed}},deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!I,nodesConnectable:!I,elementsSelectable:!I,panOnDrag:!I,selectionOnDrag:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:["Meta","Control"],children:[(0,fe.jsx)(du,{variant:yt.Dots,gap:18,size:1.4}),b?(0,fe.jsx)(mu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:T=>T.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,fe.jsx)(Mf,{guides:F})]}),(0,fe.jsx)(Pd,{zoom:m,snapEnabled:C,canvasLocked:I,minimapOpen:b,onZoomIn:()=>void N.current?.zoomIn({duration:180}),onZoomOut:()=>void N.current?.zoomOut({duration:180}),onFitView:()=>N.current?.fitView({padding:.2,duration:300}),onFocusSelected:Ar,onToggleSnap:()=>k(T=>{let G=!T;return od(G),G||z([]),B(G?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),G}),onToggleLock:()=>R(T=>{let G=!T;return B(G?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),G}),onToggleMinimap:()=>g(T=>{let G=!T;return Ld(G),G}),onOpenHelp:()=>d({kind:"help"})}),e.length===0?(0,fe.jsx)(Bd,{}):null,(0,fe.jsx)(Wd,{logs:a}),(0,fe.jsx)(Fd,{text:c}),Hr]}),(0,fe.jsx)("input",{ref:w,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:T=>{let G=Array.from(T.target.files??[]);T.target.value="",Y(G,Ce())}}),f?(0,fe.jsx)(_r,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>p(null)}):null,u?.kind==="save"?(0,fe.jsx)(ef,{workflows:u.workflows??[],imagoraRoot:W?.imagoraRoot,onCancel:()=>d(null),onSubmit:T=>void me(T)}):null,u?.kind==="load"?(0,fe.jsx)(tf,{workflows:u.workflows??[],imagoraRoot:W?.imagoraRoot,onCancel:()=>d(null),onPick:T=>void $e(T)}):null,u?.kind==="crop"&&u.target?(0,fe.jsx)(gf,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(T,G)=>{ue.record(),await j(T,`${u.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),B(G)}}):null,u?.kind==="split"&&u.target?(0,fe.jsx)(Sf,{src:u.target.src,onClose:()=>d(null),onConfirm:async T=>{ue.record();let G=u.target.name.replace(/\.[^.]+$/,""),K=Ce();for(let[re,ke]of T.entries())await j(ke.dataUrl,`${G}_${re+1}.png`,{x:K.x+re*160,y:K.y});d(null),B(`\u5DF2\u5207\u51FA ${T.length} \u5F20`)}}):null,u?.kind==="upscale"&&u.target?(0,fe.jsx)(Nf,{src:u.target.src,onClose:()=>d(null),onConfirm:async(T,G)=>{ue.record(),await j(T,`${u.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),B(G)}}):null,u?.kind==="mask"&&u.target?(0,fe.jsx)(xf,{src:u.target.src,name:u.target.name,onClose:()=>d(null),onConfirm:async(T,G)=>{ue.record(),t(K=>K.map(re=>re.id===u.target.nodeId&&re.type==="image"?{...re,data:{...re.data,maskDataUrl:T}}:re)),d(null),B(G)}}):null,u?.kind==="help"?(0,fe.jsx)(nf,{config:W,onClose:()=>d(null)}):null,u?.kind==="history"?(0,fe.jsx)(kf,{imagoraRoot:W?.imagoraRoot,onClose:()=>d(null),onImport:T=>{if(!T.length)return;ue.record();let G=Ce(),K=T.map((re,ke)=>sn(re,{x:G.x+ke*172,y:G.y}));t(re=>[...re,...K]),B(`\u5DF2\u653E\u5165 ${K.length} \u5F20\u56FE`)}}):null,u?.kind==="import"?(0,fe.jsx)(If,{sizes:W?.sizes??[],onCancel:()=>d(null),onConfirm:T=>{ue.record();let G=q.current,K=Ku(T,{sizes:G?.sizes??[],defaultQuality:G?.qualities[0]??"high",defaultOutputDir:""},Ce());t(re=>[...re,...K]),d(null),B(`\u5DF2\u5EFA ${K.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,u?.kind==="settings"?(0,fe.jsx)(Af,{config:W,onClose:()=>d(null),onSaved:L,onFlash:B}):null]})]})}var Gf=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Yf=require("react/jsx-runtime"),Aw=["slots"],Xf="imagora";globalThis.__dshImagoraCanvas=Ta;function Tw({size:e=16}){return(0,Yf.jsx)(va,{size:e,fill:"currentColor"})}function Ow(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=Gf,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(Da(),zf)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Xf},Ta)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Xf,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Tw)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
