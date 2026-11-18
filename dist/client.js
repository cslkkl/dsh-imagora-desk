window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var Gf=Object.create;var Go=Object.defineProperty;var Uf=Object.getOwnPropertyDescriptor;var Xf=Object.getOwnPropertyNames;var qf=Object.getPrototypeOf,Yf=Object.prototype.hasOwnProperty;var Zf=(e,t)=>()=>(e&&(t=e(e=0)),t);var Uo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ws=(e,t)=>{for(var n in t)Go(e,n,{get:t[n],enumerable:!0})},Vs=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Xf(t))!Yf.call(e,o)&&o!==n&&Go(e,o,{get:()=>t[o],enumerable:!(r=Uf(t,o))||r.enumerable});return e};var Gs=(e,t,n)=>(n=e!=null?Gf(qf(e)):{},Vs(t||!e||!e.__esModule?Go(n,"default",{value:e,enumerable:!0}):n,e)),Kf=e=>Vs(Go({},"__esModule",{value:!0}),e);var $c=Uo(Bc=>{"use strict";var Zn=require("react");function u0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var p0=typeof Object.is=="function"?Object.is:u0,m0=Zn.useState,f0=Zn.useEffect,g0=Zn.useLayoutEffect,h0=Zn.useDebugValue;function b0(e,t){var n=t(),r=m0({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return g0(function(){o.value=n,o.getSnapshot=t,Fa(o)&&i({inst:o})},[e,n,t]),f0(function(){return Fa(o)&&i({inst:o}),e(function(){Fa(o)&&i({inst:o})})},[e]),h0(n),n}function Fa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!p0(e,n)}catch{return!0}}function y0(e,t){return t()}var x0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y0:b0;Bc.useSyncExternalStore=Zn.useSyncExternalStore!==void 0?Zn.useSyncExternalStore:x0});var Wc=Uo((Lk,Fc)=>{"use strict";Fc.exports=$c()});var Gc=Uo(Vc=>{"use strict";var Rr=require("react"),w0=Wc();function v0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var k0=typeof Object.is=="function"?Object.is:v0,S0=w0.useSyncExternalStore,C0=Rr.useRef,N0=Rr.useEffect,M0=Rr.useMemo,E0=Rr.useDebugValue;Vc.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=C0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=M0(function(){function c(m){if(!d){if(d=!0,u=m,m=r(m),o!==void 0&&a.hasValue){var f=a.value;if(o(f,m))return l=f}return l=m}if(f=l,k0(u,m))return f;var y=r(m);return o!==void 0&&o(f,y)?(u=m,f):(u=m,l=y)}var d=!1,u,l,p=n===void 0?null:n;return[function(){return c(t())},p===null?void 0:function(){return c(p())}]},[t,n,r,o]);var s=S0(e,i[0],i[1]);return N0(function(){a.hasValue=!0,a.value=s},[s]),E0(s),s}});var Xc=Uo((Bk,Uc)=>{"use strict";Uc.exports=Gc()});var wf={};Ws(wf,{primitives:()=>E1});function M1(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function E1(){if(hi)return hi;let e=require(xf),t=M1(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${xf}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return hi=t,hi}var xf,hi,vf=Zf(()=>{"use strict";xf="@deepseek-ai/dsh-client-ui-primitives",hi=null});var R1={};Ws(R1,{apply:()=>z1,inject:()=>_1});module.exports=Kf(R1);var le=require("react");var $=require("react/jsx-runtime"),B=require("react");function _e(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,r;n<e.length;n++)(r=_e(e[n]))!==""&&(t+=(t&&" ")+r);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var jf={value:()=>{}};function sn(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Xo(n)}function Xo(e){this._=e}function Qf(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Xo.prototype=sn.prototype={constructor:Xo,on:function(e,t){var n=this._,r=Qf(e+"",n),o,i=-1,a=r.length;if(arguments.length<2){for(;++i<a;)if((o=(e=r[i]).type)&&(o=Jf(n[o],e.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(o=(e=r[i]).type)n[o]=Us(n[o],e.name,t);else if(t==null)for(o in n)n[o]=Us(n[o],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Xo(e)},call:function(e,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,i;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],r=0,o=i.length;r<o;++r)i[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],o=0,i=r.length;o<i;++o)r[o].value.apply(t,n)}};function Jf(e,t){for(var n=0,r=e.length,o;n<r;++n)if((o=e[n]).name===t)return o.value}function Us(e,t,n){for(var r=0,o=e.length;r<o;++r)if(e[r].name===t){e[r]=jf,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var zi="http://www.w3.org/1999/xhtml",Xs={svg:"http://www.w3.org/2000/svg",xhtml:zi,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ro(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Xs.hasOwnProperty(t)?{space:Xs[t],local:e}:e}function eg(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===zi&&t.documentElement.namespaceURI===zi?t.createElement(e):t.createElementNS(n,e)}}function tg(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function qs(e){var t=ro(e);return(t.local?tg:eg)(t)}function ng(){}function Yo(e){return e==null?ng:function(){return this.querySelector(e)}}function og(e){typeof e!="function"&&(e=Yo(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var i=t[o],a=i.length,s=r[o]=new Array(a),c,d,u=0;u<a;++u)(c=i[u])&&(d=e.call(c,c.__data__,u,i))&&("__data__"in c&&(d.__data__=c.__data__),s[u]=d);return new et(r,this._parents)}function rg(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function ig(){return[]}function Ti(e){return e==null?ig:function(){return this.querySelectorAll(e)}}function ag(e){return function(){return rg(e.apply(this,arguments))}}function sg(e){typeof e=="function"?e=ag(e):e=Ti(e);for(var t=this._groups,n=t.length,r=[],o=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,d=0;d<s;++d)(c=a[d])&&(r.push(e.call(c,c.__data__,d,a)),o.push(c));return new et(r,o)}function Di(e){return function(){return this.matches(e)}}function Ys(e){return function(t){return t.matches(e)}}var lg=Array.prototype.find;function cg(e){return function(){return lg.call(this.children,e)}}function dg(){return this.firstElementChild}function ug(e){return this.select(e==null?dg:cg(typeof e=="function"?e:Ys(e)))}var pg=Array.prototype.filter;function mg(){return Array.from(this.children)}function fg(e){return function(){return pg.call(this.children,e)}}function gg(e){return this.selectAll(e==null?mg:fg(typeof e=="function"?e:Ys(e)))}function hg(e){typeof e!="function"&&(e=Di(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var i=t[o],a=i.length,s=r[o]=[],c,d=0;d<a;++d)(c=i[d])&&e.call(c,c.__data__,d,i)&&s.push(c);return new et(r,this._parents)}function Zs(e){return new Array(e.length)}function bg(){return new et(this._enter||this._groups.map(Zs),this._parents)}function qo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}qo.prototype={constructor:qo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function yg(e){return function(){return e}}function xg(e,t,n,r,o,i){for(var a=0,s,c=t.length,d=i.length;a<d;++a)(s=t[a])?(s.__data__=i[a],r[a]=s):n[a]=new qo(e,i[a]);for(;a<c;++a)(s=t[a])&&(o[a]=s)}function wg(e,t,n,r,o,i,a){var s,c,d=new Map,u=t.length,l=i.length,p=new Array(u),m;for(s=0;s<u;++s)(c=t[s])&&(p[s]=m=a.call(c,c.__data__,s,t)+"",d.has(m)?o[s]=c:d.set(m,c));for(s=0;s<l;++s)m=a.call(e,i[s],s,i)+"",(c=d.get(m))?(r[s]=c,c.__data__=i[s],d.delete(m)):n[s]=new qo(e,i[s]);for(s=0;s<u;++s)(c=t[s])&&d.get(p[s])===c&&(o[s]=c)}function vg(e){return e.__data__}function kg(e,t){if(!arguments.length)return Array.from(this,vg);var n=t?wg:xg,r=this._parents,o=this._groups;typeof e!="function"&&(e=yg(e));for(var i=o.length,a=new Array(i),s=new Array(i),c=new Array(i),d=0;d<i;++d){var u=r[d],l=o[d],p=l.length,m=Sg(e.call(u,u&&u.__data__,d,r)),f=m.length,y=s[d]=new Array(f),h=a[d]=new Array(f),b=c[d]=new Array(p);n(u,l,y,h,b,m,t);for(var x=0,g=0,w,k;x<f;++x)if(w=y[x]){for(x>=g&&(g=x+1);!(k=h[g])&&++g<f;);w._next=k||null}}return a=new et(a,r),a._enter=s,a._exit=c,a}function Sg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Cg(){return new et(this._exit||this._groups.map(Zs),this._parents)}function Ng(e,t,n){var r=this.enter(),o=this,i=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?i.remove():n(i),r&&o?r.merge(o).order():o}function Mg(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,o=n.length,i=r.length,a=Math.min(o,i),s=new Array(o),c=0;c<a;++c)for(var d=n[c],u=r[c],l=d.length,p=s[c]=new Array(l),m,f=0;f<l;++f)(m=d[f]||u[f])&&(p[f]=m);for(;c<o;++c)s[c]=n[c];return new et(s,this._parents)}function Eg(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],o=r.length-1,i=r[o],a;--o>=0;)(a=r[o])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function _g(e){e||(e=Ig);function t(l,p){return l&&p?e(l.__data__,p.__data__):!l-!p}for(var n=this._groups,r=n.length,o=new Array(r),i=0;i<r;++i){for(var a=n[i],s=a.length,c=o[i]=new Array(s),d,u=0;u<s;++u)(d=a[u])&&(c[u]=d);c.sort(t)}return new et(o,this._parents).order()}function Ig(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Pg(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function zg(){return Array.from(this)}function Rg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,i=r.length;o<i;++o){var a=r[o];if(a)return a}return null}function Tg(){let e=0;for(let t of this)++e;return e}function Dg(){return!this.node()}function Ag(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],i=0,a=o.length,s;i<a;++i)(s=o[i])&&e.call(s,s.__data__,i,o);return this}function Og(e){return function(){this.removeAttribute(e)}}function Lg(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Hg(e,t){return function(){this.setAttribute(e,t)}}function Bg(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function $g(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Fg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Wg(e,t){var n=ro(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?Lg:Og:typeof t=="function"?n.local?Fg:$g:n.local?Bg:Hg)(n,t))}function Ks(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Vg(e){return function(){this.style.removeProperty(e)}}function Gg(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Ug(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Xg(e,t,n){return arguments.length>1?this.each((t==null?Vg:typeof t=="function"?Ug:Gg)(e,t,n??"")):ln(this.node(),e)}function ln(e,t){return e.style.getPropertyValue(t)||Ks(e).getComputedStyle(e,null).getPropertyValue(t)}function qg(e){return function(){delete this[e]}}function Yg(e,t){return function(){this[e]=t}}function Zg(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Kg(e,t){return arguments.length>1?this.each((t==null?qg:typeof t=="function"?Zg:Yg)(e,t)):this.node()[e]}function js(e){return e.trim().split(/^|\s+/)}function Ai(e){return e.classList||new Qs(e)}function Qs(e){this._node=e,this._names=js(e.getAttribute("class")||"")}Qs.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Js(e,t){for(var n=Ai(e),r=-1,o=t.length;++r<o;)n.add(t[r])}function el(e,t){for(var n=Ai(e),r=-1,o=t.length;++r<o;)n.remove(t[r])}function jg(e){return function(){Js(this,e)}}function Qg(e){return function(){el(this,e)}}function Jg(e,t){return function(){(t.apply(this,arguments)?Js:el)(this,e)}}function eh(e,t){var n=js(e+"");if(arguments.length<2){for(var r=Ai(this.node()),o=-1,i=n.length;++o<i;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?Jg:t?jg:Qg)(n,t))}function th(){this.textContent=""}function nh(e){return function(){this.textContent=e}}function oh(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function rh(e){return arguments.length?this.each(e==null?th:(typeof e=="function"?oh:nh)(e)):this.node().textContent}function ih(){this.innerHTML=""}function ah(e){return function(){this.innerHTML=e}}function sh(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function lh(e){return arguments.length?this.each(e==null?ih:(typeof e=="function"?sh:ah)(e)):this.node().innerHTML}function ch(){this.nextSibling&&this.parentNode.appendChild(this)}function dh(){return this.each(ch)}function uh(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ph(){return this.each(uh)}function mh(e){var t=typeof e=="function"?e:qs(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function fh(){return null}function gh(e,t){var n=typeof e=="function"?e:qs(e),r=t==null?fh:typeof t=="function"?t:Yo(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function hh(){var e=this.parentNode;e&&e.removeChild(this)}function bh(){return this.each(hh)}function yh(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xh(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function wh(e){return this.select(e?xh:yh)}function vh(e){return arguments.length?this.property("__data__",e):this.node().__data__}function kh(e){return function(t){e.call(this,t,this.__data__)}}function Sh(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Ch(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,i;n<o;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++r]=i;++r?t.length=r:delete this.__on}}}function Nh(e,t,n){return function(){var r=this.__on,o,i=kh(t);if(r){for(var a=0,s=r.length;a<s;++a)if((o=r[a]).type===e.type&&o.name===e.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=i,o.options=n),o.value=t;return}}this.addEventListener(e.type,i,n),o={type:e.type,name:e.name,value:t,listener:i,options:n},r?r.push(o):this.__on=[o]}}function Mh(e,t,n){var r=Sh(e+""),o,i=r.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,d=s.length,u;c<d;++c)for(o=0,u=s[c];o<i;++o)if((a=r[o]).type===u.type&&a.name===u.name)return u.value}return}for(s=t?Nh:Ch,o=0;o<i;++o)this.each(s(r[o],t,n));return this}function tl(e,t,n){var r=Ks(e),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),e.dispatchEvent(o)}function Eh(e,t){return function(){return tl(this,e,t)}}function _h(e,t){return function(){return tl(this,e,t.apply(this,arguments))}}function Ih(e,t){return this.each((typeof t=="function"?_h:Eh)(e,t))}function*Ph(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,i=r.length,a;o<i;++o)(a=r[o])&&(yield a)}var nl=[null];function et(e,t){this._groups=e,this._parents=t}function cn(){return new et([[document.documentElement]],nl)}function zh(){return this}et.prototype=cn.prototype={constructor:et,select:og,selectAll:sg,selectChild:ug,selectChildren:gg,filter:hg,data:kg,enter:bg,exit:Cg,join:Ng,merge:Mg,selection:zh,order:Eg,sort:_g,call:Pg,nodes:zg,node:Rg,size:Tg,empty:Dg,each:Ag,attr:Wg,style:Xg,property:Kg,classed:eh,text:rh,html:lh,raise:dh,lower:ph,append:mh,insert:gh,remove:bh,clone:wh,datum:vh,on:Mh,dispatch:Ih,[Symbol.iterator]:Ph};function Fe(e){return typeof e=="string"?new et([[document.querySelector(e)]],[document.documentElement]):new et([[e]],nl)}var Rh=0;function Th(){return new Ri}function Ri(){this._="@"+(++Rh).toString(36)}Ri.prototype=Th.prototype={constructor:Ri,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function Dh(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Xe(e,t){if(e=Dh(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var o=t.getBoundingClientRect();return[e.clientX-o.left-t.clientLeft,e.clientY-o.top-t.clientTop]}}return[e.pageX,e.pageY]}var Ah={passive:!1},io={capture:!0,passive:!1};function Oi(e){e.stopImmediatePropagation()}function Pn(e){e.preventDefault(),e.stopImmediatePropagation()}function Hi(e){var t=e.document.documentElement,n=Fe(e).on("dragstart.drag",Pn,io);"onselectstart"in t?n.on("selectstart.drag",Pn,io):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Bi(e,t){var n=e.document.documentElement,r=Fe(e).on("dragstart.drag",null);t&&(r.on("click.drag",Pn,io),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Zo=e=>()=>e;function Li(e,{sourceEvent:t,subject:n,target:r,identifier:o,active:i,x:a,y:s,dx:c,dy:d,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:d,enumerable:!0,configurable:!0},_:{value:u}})}Li.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Oh(e){return!e.ctrlKey&&!e.button}function Lh(){return this.parentNode}function Hh(e,t){return t??{x:e.x,y:e.y}}function Bh(){return navigator.maxTouchPoints||"ontouchstart"in this}function $i(){var e=Oh,t=Lh,n=Hh,r=Bh,o={},i=sn("start","drag","end"),a=0,s,c,d,u,l=0;function p(w){w.on("mousedown.drag",m).filter(r).on("touchstart.drag",h).on("touchmove.drag",b,Ah).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(w,k){if(!(u||!e.call(this,w,k))){var S=g(this,t.call(this,w,k),w,k,"mouse");S&&(Fe(w.view).on("mousemove.drag",f,io).on("mouseup.drag",y,io),Hi(w.view),Oi(w),d=!1,s=w.clientX,c=w.clientY,S("start",w))}}function f(w){if(Pn(w),!d){var k=w.clientX-s,S=w.clientY-c;d=k*k+S*S>l}o.mouse("drag",w)}function y(w){Fe(w.view).on("mousemove.drag mouseup.drag",null),Bi(w.view,d),Pn(w),o.mouse("end",w)}function h(w,k){if(e.call(this,w,k)){var S=w.changedTouches,N=t.call(this,w,k),C=S.length,M,O;for(M=0;M<C;++M)(O=g(this,N,w,k,S[M].identifier,S[M]))&&(Oi(w),O("start",w,S[M]))}}function b(w){var k=w.changedTouches,S=k.length,N,C;for(N=0;N<S;++N)(C=o[k[N].identifier])&&(Pn(w),C("drag",w,k[N]))}function x(w){var k=w.changedTouches,S=k.length,N,C;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),N=0;N<S;++N)(C=o[k[N].identifier])&&(Oi(w),C("end",w,k[N]))}function g(w,k,S,N,C,M){var O=i.copy(),D=Xe(M||S,k),L,T,v;if((v=n.call(w,new Li("beforestart",{sourceEvent:S,target:p,identifier:C,active:a,x:D[0],y:D[1],dx:0,dy:0,dispatch:O}),N))!=null)return L=v.x-D[0]||0,T=v.y-D[1]||0,function E(z,I,_){var R=D,V;switch(z){case"start":o[C]=E,V=a++;break;case"end":delete o[C],--a;case"drag":D=Xe(_||I,k),V=a;break}O.call(z,w,new Li(z,{sourceEvent:I,subject:v,target:p,identifier:C,active:V,x:D[0]+L,y:D[1]+T,dx:D[0]-R[0],dy:D[1]-R[1],dispatch:O}),N)}}return p.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Zo(!!w),p):e},p.container=function(w){return arguments.length?(t=typeof w=="function"?w:Zo(w),p):t},p.subject=function(w){return arguments.length?(n=typeof w=="function"?w:Zo(w),p):n},p.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:Zo(!!w),p):r},p.on=function(){var w=i.on.apply(i,arguments);return w===i?p:w},p.clickDistance=function(w){return arguments.length?(l=(w=+w)*w,p):Math.sqrt(l)},p}function Dn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function lo(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Gt(){}var mn=.7,Tn=1/mn,zn="\\s*([+-]?\\d+)\\s*",ao="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",bt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",$h=/^#([0-9a-f]{3,8})$/,Fh=new RegExp(`^rgb\\(${zn},${zn},${zn}\\)$`),Wh=new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`),Vh=new RegExp(`^rgba\\(${zn},${zn},${zn},${ao}\\)$`),Gh=new RegExp(`^rgba\\(${bt},${bt},${bt},${ao}\\)$`),Uh=new RegExp(`^hsl\\(${ao},${bt},${bt}\\)$`),Xh=new RegExp(`^hsla\\(${ao},${bt},${bt},${ao}\\)$`),ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dn(Gt,Dt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:rl,formatHex:rl,formatHex8:qh,formatHsl:Yh,formatRgb:il,toString:il});function rl(){return this.rgb().formatHex()}function qh(){return this.rgb().formatHex8()}function Yh(){return fl(this).formatHsl()}function il(){return this.rgb().formatRgb()}function Dt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=$h.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?al(t):n===3?new He(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ko(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ko(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Fh.exec(e))?new He(t[1],t[2],t[3],1):(t=Wh.exec(e))?new He(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Vh.exec(e))?Ko(t[1],t[2],t[3],t[4]):(t=Gh.exec(e))?Ko(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Uh.exec(e))?cl(t[1],t[2]/100,t[3]/100,1):(t=Xh.exec(e))?cl(t[1],t[2]/100,t[3]/100,t[4]):ol.hasOwnProperty(e)?al(ol[e]):e==="transparent"?new He(NaN,NaN,NaN,0):null}function al(e){return new He(e>>16&255,e>>8&255,e&255,1)}function Ko(e,t,n,r){return r<=0&&(e=t=n=NaN),new He(e,t,n,r)}function Xi(e){return e instanceof Gt||(e=Dt(e)),e?(e=e.rgb(),new He(e.r,e.g,e.b,e.opacity)):new He}function co(e,t,n,r){return arguments.length===1?Xi(e):new He(e,t,n,r??1)}function He(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Dn(He,co,lo(Gt,{brighter(e){return e=e==null?Tn:Math.pow(Tn,e),new He(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new He(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new He(un(this.r),un(this.g),un(this.b),Qo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:sl,formatHex:sl,formatHex8:Zh,formatRgb:ll,toString:ll}));function sl(){return`#${dn(this.r)}${dn(this.g)}${dn(this.b)}`}function Zh(){return`#${dn(this.r)}${dn(this.g)}${dn(this.b)}${dn((isNaN(this.opacity)?1:this.opacity)*255)}`}function ll(){let e=Qo(this.opacity);return`${e===1?"rgb(":"rgba("}${un(this.r)}, ${un(this.g)}, ${un(this.b)}${e===1?")":`, ${e})`}`}function Qo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function un(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function dn(e){return e=un(e),(e<16?"0":"")+e.toString(16)}function cl(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ut(e,t,n,r)}function fl(e){if(e instanceof ut)return new ut(e.h,e.s,e.l,e.opacity);if(e instanceof Gt||(e=Dt(e)),!e)return new ut;if(e instanceof ut)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,o=Math.min(t,n,r),i=Math.max(t,n,r),a=NaN,s=i-o,c=(i+o)/2;return s?(t===i?a=(n-r)/s+(n<r)*6:n===i?a=(r-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+o:2-i-o,a*=60):s=c>0&&c<1?0:a,new ut(a,s,c,e.opacity)}function er(e,t,n,r){return arguments.length===1?fl(e):new ut(e,t,n,r??1)}function ut(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Dn(ut,er,lo(Gt,{brighter(e){return e=e==null?Tn:Math.pow(Tn,e),new ut(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new ut(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new He(Fi(e>=240?e-240:e+120,o,r),Fi(e,o,r),Fi(e<120?e+240:e-120,o,r),this.opacity)},clamp(){return new ut(dl(this.h),jo(this.s),jo(this.l),Qo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Qo(this.opacity);return`${e===1?"hsl(":"hsla("}${dl(this.h)}, ${jo(this.s)*100}%, ${jo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function dl(e){return e=(e||0)%360,e<0?e+360:e}function jo(e){return Math.max(0,Math.min(1,e||0))}function Fi(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var gl=Math.PI/180,hl=180/Math.PI,Jo=18,bl=.96422,yl=1,xl=.82521,wl=4/29,Rn=6/29,vl=3*Rn*Rn,Kh=Rn*Rn*Rn;function kl(e){if(e instanceof yt)return new yt(e.l,e.a,e.b,e.opacity);if(e instanceof Tt)return Cl(e);e instanceof He||(e=Xi(e));var t=Ui(e.r),n=Ui(e.g),r=Ui(e.b),o=Wi((.2225045*t+.7168786*n+.0606169*r)/yl),i,a;return t===n&&n===r?i=a=o:(i=Wi((.4360747*t+.3850649*n+.1430804*r)/bl),a=Wi((.0139322*t+.0971045*n+.7141733*r)/xl)),new yt(116*o-16,500*(i-o),200*(o-a),e.opacity)}function Sl(e,t,n,r){return arguments.length===1?kl(e):new yt(e,t,n,r??1)}function yt(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}Dn(yt,Sl,lo(Gt,{brighter(e){return new yt(this.l+Jo*(e??1),this.a,this.b,this.opacity)},darker(e){return new yt(this.l-Jo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=bl*Vi(t),e=yl*Vi(e),n=xl*Vi(n),new He(Gi(3.1338561*t-1.6168667*e-.4906146*n),Gi(-.9787684*t+1.9161415*e+.033454*n),Gi(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Wi(e){return e>Kh?Math.pow(e,1/3):e/vl+wl}function Vi(e){return e>Rn?e*e*e:vl*(e-wl)}function Gi(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ui(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function jh(e){if(e instanceof Tt)return new Tt(e.h,e.c,e.l,e.opacity);if(e instanceof yt||(e=kl(e)),e.a===0&&e.b===0)return new Tt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*hl;return new Tt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function tr(e,t,n,r){return arguments.length===1?jh(e):new Tt(e,t,n,r??1)}function Tt(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}function Cl(e){if(isNaN(e.h))return new yt(e.l,0,0,e.opacity);var t=e.h*gl;return new yt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Dn(Tt,tr,lo(Gt,{brighter(e){return new Tt(this.h,this.c,this.l+Jo*(e??1),this.opacity)},darker(e){return new Tt(this.h,this.c,this.l-Jo*(e??1),this.opacity)},rgb(){return Cl(this).rgb()}}));var Nl=-.14861,qi=1.78277,Yi=-.29227,nr=-.90649,so=1.97294,ul=so*nr,pl=so*qi,ml=qi*Yi-nr*Nl;function Qh(e){if(e instanceof pn)return new pn(e.h,e.s,e.l,e.opacity);e instanceof He||(e=Xi(e));var t=e.r/255,n=e.g/255,r=e.b/255,o=(ml*r+ul*t-pl*n)/(ml+ul-pl),i=r-o,a=(so*(n-o)-Yi*i)/nr,s=Math.sqrt(a*a+i*i)/(so*o*(1-o)),c=s?Math.atan2(a,i)*hl-120:NaN;return new pn(c<0?c+360:c,s,o,e.opacity)}function or(e,t,n,r){return arguments.length===1?Qh(e):new pn(e,t,n,r??1)}function pn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Dn(pn,or,lo(Gt,{brighter(e){return e=e==null?Tn:Math.pow(Tn,e),new pn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new pn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*gl,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(e),o=Math.sin(e);return new He(255*(t+n*(Nl*r+qi*o)),255*(t+n*(Yi*r+nr*o)),255*(t+n*(so*r)),this.opacity)}}));function _l(e,t,n,r,o){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*r+a*o)/6}function Jh(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),o=e[r],i=e[r+1],a=r>0?e[r-1]:2*o-i,s=r<t-1?e[r+2]:2*i-o;return _l((n-r/t)*t,a,o,i,s)}}function eb(e){var t=e.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),o=e[(r+t-1)%t],i=e[r%t],a=e[(r+1)%t],s=e[(r+2)%t];return _l((n-r/t)*t,o,i,a,s)}}var ir=e=>()=>e;function Il(e,t){return function(n){return e+n*t}}function tb(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Qi(e,t){var n=t-e;return n?Il(e,n>180||n<-180?n-360*Math.round(n/360):n):ir(isNaN(e)?t:e)}function nb(e){return(e=+e)==1?qe:function(t,n){return n-t?tb(t,n,e):ir(isNaN(t)?n:t)}}function qe(e,t){var n=t-e;return n?Il(e,n):ir(isNaN(e)?t:e)}var uo=(function e(t){var n=nb(t);function r(o,i){var a=n((o=co(o)).r,(i=co(i)).r),s=n(o.g,i.g),c=n(o.b,i.b),d=qe(o.opacity,i.opacity);return function(u){return o.r=a(u),o.g=s(u),o.b=c(u),o.opacity=d(u),o+""}}return r.gamma=e,r})(1);function Pl(e){return function(t){var n=t.length,r=new Array(n),o=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=co(t[a]),r[a]=s.r||0,o[a]=s.g||0,i[a]=s.b||0;return r=e(r),o=e(o),i=e(i),s.opacity=1,function(c){return s.r=r(c),s.g=o(c),s.b=i(c),s+""}}}var W1=Pl(Jh),V1=Pl(eb);function ob(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),o;return function(i){for(o=0;o<n;++o)r[o]=e[o]*(1-i)+t[o]*i;return r}}function rb(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ib(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,o=new Array(r),i=new Array(n),a;for(a=0;a<r;++a)o[a]=An(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<r;++a)i[a]=o[a](s);return i}}function ab(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function pt(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function sb(e,t){var n={},r={},o;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in e?n[o]=An(e[o],t[o]):r[o]=t[o];return function(i){for(o in n)r[o]=n[o](i);return r}}var Ki=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Zi=new RegExp(Ki.source,"g");function lb(e){return function(){return e}}function cb(e){return function(t){return e(t)+""}}function Ji(e,t){var n=Ki.lastIndex=Zi.lastIndex=0,r,o,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(r=Ki.exec(e))&&(o=Zi.exec(t));)(i=o.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(r=r[0])===(o=o[0])?s[a]?s[a]+=o:s[++a]=o:(s[++a]=null,c.push({i:a,x:pt(r,o)})),n=Zi.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?cb(c[0].x):lb(t):(t=c.length,function(d){for(var u=0,l;u<t;++u)s[(l=c[u]).i]=l.x(d);return s.join("")})}function An(e,t){var n=typeof t,r;return t==null||n==="boolean"?ir(t):(n==="number"?pt:n==="string"?(r=Dt(t))?(t=r,uo):Ji:t instanceof Dt?uo:t instanceof Date?ab:rb(t)?ob:Array.isArray(t)?ib:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?sb:pt)(e,t)}var Ml=180/Math.PI,ji={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function zl(e,t,n,r,o,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:o,translateY:i,rotate:Math.atan2(t,e)*Ml,skewX:Math.atan(c)*Ml,scaleX:a,scaleY:s}}var rr;function db(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?ji:zl(t.a,t.b,t.c,t.d,t.e,t.f)}function ub(e){return e==null||(rr||(rr=document.createElementNS("http://www.w3.org/2000/svg","g")),rr.setAttribute("transform",e),!(e=rr.transform.baseVal.consolidate()))?ji:(e=e.matrix,zl(e.a,e.b,e.c,e.d,e.e,e.f))}function Rl(e,t,n,r){function o(d){return d.length?d.pop()+" ":""}function i(d,u,l,p,m,f){if(d!==l||u!==p){var y=m.push("translate(",null,t,null,n);f.push({i:y-4,x:pt(d,l)},{i:y-2,x:pt(u,p)})}else(l||p)&&m.push("translate("+l+t+p+n)}function a(d,u,l,p){d!==u?(d-u>180?u+=360:u-d>180&&(d+=360),p.push({i:l.push(o(l)+"rotate(",null,r)-2,x:pt(d,u)})):u&&l.push(o(l)+"rotate("+u+r)}function s(d,u,l,p){d!==u?p.push({i:l.push(o(l)+"skewX(",null,r)-2,x:pt(d,u)}):u&&l.push(o(l)+"skewX("+u+r)}function c(d,u,l,p,m,f){if(d!==l||u!==p){var y=m.push(o(m)+"scale(",null,",",null,")");f.push({i:y-4,x:pt(d,l)},{i:y-2,x:pt(u,p)})}else(l!==1||p!==1)&&m.push(o(m)+"scale("+l+","+p+")")}return function(d,u){var l=[],p=[];return d=e(d),u=e(u),i(d.translateX,d.translateY,u.translateX,u.translateY,l,p),a(d.rotate,u.rotate,l,p),s(d.skewX,u.skewX,l,p),c(d.scaleX,d.scaleY,u.scaleX,u.scaleY,l,p),d=u=null,function(m){for(var f=-1,y=p.length,h;++f<y;)l[(h=p[f]).i]=h.x(m);return l.join("")}}}var Tl=Rl(db,"px, ","px)","deg)"),Dl=Rl(ub,", ",")",")"),pb=1e-12;function El(e){return((e=Math.exp(e))+1/e)/2}function mb(e){return((e=Math.exp(e))-1/e)/2}function fb(e){return((e=Math.exp(2*e))-1)/(e+1)}var On=(function e(t,n,r){function o(i,a){var s=i[0],c=i[1],d=i[2],u=a[0],l=a[1],p=a[2],m=u-s,f=l-c,y=m*m+f*f,h,b;if(y<pb)b=Math.log(p/d)/t,h=function(N){return[s+N*m,c+N*f,d*Math.exp(t*N*b)]};else{var x=Math.sqrt(y),g=(p*p-d*d+r*y)/(2*d*n*x),w=(p*p-d*d-r*y)/(2*p*n*x),k=Math.log(Math.sqrt(g*g+1)-g),S=Math.log(Math.sqrt(w*w+1)-w);b=(S-k)/t,h=function(N){var C=N*b,M=El(k),O=d/(n*x)*(M*fb(t*C+k)-mb(k));return[s+O*m,c+O*f,d*M/El(t*C+k)]}}return h.duration=Math.abs(b)*1e3*t/Math.SQRT2,h}return o.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},o})(Math.SQRT2,2,4);function Al(e){return function(t,n){var r=e((t=er(t)).h,(n=er(n)).h),o=qe(t.s,n.s),i=qe(t.l,n.l),a=qe(t.opacity,n.opacity);return function(s){return t.h=r(s),t.s=o(s),t.l=i(s),t.opacity=a(s),t+""}}}var G1=Al(Qi),U1=Al(qe);function Ol(e){return function(t,n){var r=e((t=tr(t)).h,(n=tr(n)).h),o=qe(t.c,n.c),i=qe(t.l,n.l),a=qe(t.opacity,n.opacity);return function(s){return t.h=r(s),t.c=o(s),t.l=i(s),t.opacity=a(s),t+""}}}var X1=Ol(Qi),q1=Ol(qe);function Ll(e){return(function t(n){n=+n;function r(o,i){var a=e((o=or(o)).h,(i=or(i)).h),s=qe(o.s,i.s),c=qe(o.l,i.l),d=qe(o.opacity,i.opacity);return function(u){return o.h=a(u),o.s=s(u),o.l=c(Math.pow(u,n)),o.opacity=d(u),o+""}}return r.gamma=t,r})(1)}var Y1=Ll(Qi),Z1=Ll(qe);var Ln=0,mo=0,po=0,Bl=1e3,ar,fo,sr=0,fn=0,cr=0,go=typeof performance=="object"&&performance.now?performance:Date,$l=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function dr(){return fn||($l(gb),fn=go.now()+cr)}function gb(){fn=0}function lr(){this._call=this._time=this._next=null}lr.prototype=ta.prototype={constructor:lr,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?dr():+n)+(t==null?0:+t),!this._next&&fo!==this&&(fo?fo._next=this:ar=this,fo=this),this._call=e,this._time=n,ea()},stop:function(){this._call&&(this._call=null,this._time=1/0,ea())}};function ta(e,t,n){var r=new lr;return r.restart(e,t,n),r}function hb(){dr(),++Ln;for(var e=ar,t;e;)(t=fn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ln}function Hl(){fn=(sr=go.now())+cr,Ln=mo=0;try{hb()}finally{Ln=0,yb(),fn=0}}function bb(){var e=go.now(),t=e-sr;t>Bl&&(cr-=t,sr=e)}function yb(){for(var e,t=ar,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:ar=n);fo=e,ea(r)}function ea(e){if(!Ln){mo&&(mo=clearTimeout(mo));var t=e-fn;t>24?(e<1/0&&(mo=setTimeout(Hl,Math.ceil(e-go.now()-cr)+1)),po&&(po=clearInterval(po))):(po||(sr=go.now(),po=setInterval(bb,Bl)),Ln=1,$l(Hl))}}function na(e,t,n){var r=new lr;return t=t==null?0:+t,r.restart(o=>{r.stop(),e(o+t)},t,n),r}function Wl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var oa=3,Q1=(function e(t){t=+t;function n(r){return Math.pow(r,t)}return n.exponent=e,n})(oa),J1=(function e(t){t=+t;function n(r){return 1-Math.pow(1-r,t)}return n.exponent=e,n})(oa),ek=(function e(t){t=+t;function n(r){return((r*=2)<=1?Math.pow(r,t):2-Math.pow(2-r,t))/2}return n.exponent=e,n})(oa),xb=Math.PI,tk=xb/2;function ur(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Fl=4/11,nk=6/11,ok=8/11,rk=3/4,ik=9/11,ak=10/11,sk=15/16,lk=21/22,ck=63/64,dk=1/Fl/Fl;var ra=1.70158,uk=(function e(t){t=+t;function n(r){return(r=+r)*r*(t*(r-1)+r)}return n.overshoot=e,n})(ra),pk=(function e(t){t=+t;function n(r){return--r*r*((r+1)*t+r)+1}return n.overshoot=e,n})(ra),mk=(function e(t){t=+t;function n(r){return((r*=2)<1?r*r*((t+1)*r-t):(r-=2)*r*((t+1)*r+t)+2)/2}return n.overshoot=e,n})(ra),Hn=2*Math.PI,ia=1,aa=.3,fk=(function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Hn);function o(i){return t*ur(- --i)*Math.sin((r-i)/n)}return o.amplitude=function(i){return e(i,n*Hn)},o.period=function(i){return e(t,i)},o})(ia,aa),gk=(function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Hn);function o(i){return 1-t*ur(i=+i)*Math.sin((i+r)/n)}return o.amplitude=function(i){return e(i,n*Hn)},o.period=function(i){return e(t,i)},o})(ia,aa),hk=(function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Hn);function o(i){return((i=i*2-1)<0?t*ur(-i)*Math.sin((r-i)/n):2-t*ur(i)*Math.sin((r+i)/n))/2}return o.amplitude=function(i){return e(i,n*Hn)},o.period=function(i){return e(t,i)},o})(ia,aa);var wb=sn("start","end","cancel","interrupt"),vb=[],Ul=0,Vl=1,sa=2,pr=3,Gl=4,la=5,mr=6;function fr(e,t,n,r,o,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;kb(e,n,{name:t,index:r,group:o,on:wb,tween:vb,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Ul})}function ca(e,t){var n=mt(e,t);if(n.state>Ul)throw new Error("too late; already scheduled");return n}function xt(e,t){var n=mt(e,t);if(n.state>pr)throw new Error("too late; already running");return n}function mt(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function kb(e,t,n){var r=e.__transition,o;r[t]=n,n.timer=ta(i,0,n.time);function i(d){n.state=Vl,n.timer.restart(a,n.delay,n.time),n.delay<=d&&a(d-n.delay)}function a(d){var u,l,p,m;if(n.state!==Vl)return c();for(u in r)if(m=r[u],m.name===n.name){if(m.state===pr)return na(a);m.state===Gl?(m.state=mr,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete r[u]):+u<t&&(m.state=mr,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete r[u])}if(na(function(){n.state===pr&&(n.state=Gl,n.timer.restart(s,n.delay,n.time),s(d))}),n.state=sa,n.on.call("start",e,e.__data__,n.index,n.group),n.state===sa){for(n.state=pr,o=new Array(p=n.tween.length),u=0,l=-1;u<p;++u)(m=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(o[++l]=m);o.length=l+1}}function s(d){for(var u=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(c),n.state=la,1),l=-1,p=o.length;++l<p;)o[l].call(e,u);n.state===la&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=mr,n.timer.stop(),delete r[t];for(var d in r)return;delete e.__transition}}function ho(e,t){var n=e.__transition,r,o,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){i=!1;continue}o=r.state>sa&&r.state<la,r.state=mr,r.timer.stop(),r.on.call(o?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}i&&delete e.__transition}}function Sb(e){return this.each(function(){ho(this,e)})}function Cb(e,t){var n,r;return function(){var o=xt(this,e),i=o.tween;if(i!==n){r=n=i;for(var a=0,s=r.length;a<s;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}o.tween=r}}function Nb(e,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var i=xt(this,e),a=i.tween;if(a!==r){o=(r=a).slice();for(var s={name:t,value:n},c=0,d=o.length;c<d;++c)if(o[c].name===t){o[c]=s;break}c===d&&o.push(s)}i.tween=o}}function Mb(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=mt(this.node(),n).tween,o=0,i=r.length,a;o<i;++o)if((a=r[o]).name===e)return a.value;return null}return this.each((t==null?Cb:Nb)(n,e,t))}function da(e,t,n){var r=e._id;return e.each(function(){var o=xt(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return mt(o,r).value[t]}}function Xl(e,t){var n;return(typeof t=="number"?pt:t instanceof Dt?uo:(n=Dt(t))?(t=n,uo):Ji)(e,t)}function Eb(e){return function(){this.removeAttribute(e)}}function _b(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Ib(e,t,n){var r,o=n+"",i;return function(){var a=this.getAttribute(e);return a===o?null:a===r?i:i=t(r=a,n)}}function Pb(e,t,n){var r,o=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===o?null:a===r?i:i=t(r=a,n)}}function zb(e,t,n){var r,o,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===r&&c===o?i:(o=c,i=t(r=a,s)))}}function Rb(e,t,n){var r,o,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===r&&c===o?i:(o=c,i=t(r=a,s)))}}function Tb(e,t){var n=ro(e),r=n==="transform"?Dl:Xl;return this.attrTween(e,typeof t=="function"?(n.local?Rb:zb)(n,r,da(this,"attr."+e,t)):t==null?(n.local?_b:Eb)(n):(n.local?Pb:Ib)(n,r,t))}function Db(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Ab(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Ob(e,t){var n,r;function o(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Ab(e,i)),n}return o._value=t,o}function Lb(e,t){var n,r;function o(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Db(e,i)),n}return o._value=t,o}function Hb(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=ro(e);return this.tween(n,(r.local?Ob:Lb)(r,t))}function Bb(e,t){return function(){ca(this,e).delay=+t.apply(this,arguments)}}function $b(e,t){return t=+t,function(){ca(this,e).delay=t}}function Fb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Bb:$b)(t,e)):mt(this.node(),t).delay}function Wb(e,t){return function(){xt(this,e).duration=+t.apply(this,arguments)}}function Vb(e,t){return t=+t,function(){xt(this,e).duration=t}}function Gb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Wb:Vb)(t,e)):mt(this.node(),t).duration}function Ub(e,t){if(typeof t!="function")throw new Error;return function(){xt(this,e).ease=t}}function Xb(e){var t=this._id;return arguments.length?this.each(Ub(t,e)):mt(this.node(),t).ease}function qb(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;xt(this,e).ease=n}}function Yb(e){if(typeof e!="function")throw new Error;return this.each(qb(this._id,e))}function Zb(e){typeof e!="function"&&(e=Di(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var i=t[o],a=i.length,s=r[o]=[],c,d=0;d<a;++d)(c=i[d])&&e.call(c,c.__data__,d,i)&&s.push(c);return new Ot(r,this._parents,this._name,this._id)}function Kb(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,o=n.length,i=Math.min(r,o),a=new Array(r),s=0;s<i;++s)for(var c=t[s],d=n[s],u=c.length,l=a[s]=new Array(u),p,m=0;m<u;++m)(p=c[m]||d[m])&&(l[m]=p);for(;s<r;++s)a[s]=t[s];return new Ot(a,this._parents,this._name,this._id)}function jb(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Qb(e,t,n){var r,o,i=jb(t)?ca:xt;return function(){var a=i(this,e),s=a.on;s!==r&&(o=(r=s).copy()).on(t,n),a.on=o}}function Jb(e,t){var n=this._id;return arguments.length<2?mt(this.node(),n).on.on(e):this.each(Qb(n,e,t))}function ey(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ty(){return this.on("end.remove",ey(this._id))}function ny(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Yo(e));for(var r=this._groups,o=r.length,i=new Array(o),a=0;a<o;++a)for(var s=r[a],c=s.length,d=i[a]=new Array(c),u,l,p=0;p<c;++p)(u=s[p])&&(l=e.call(u,u.__data__,p,s))&&("__data__"in u&&(l.__data__=u.__data__),d[p]=l,fr(d[p],t,n,p,d,mt(u,n)));return new Ot(i,this._parents,t,n)}function oy(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Ti(e));for(var r=this._groups,o=r.length,i=[],a=[],s=0;s<o;++s)for(var c=r[s],d=c.length,u,l=0;l<d;++l)if(u=c[l]){for(var p=e.call(u,u.__data__,l,c),m,f=mt(u,n),y=0,h=p.length;y<h;++y)(m=p[y])&&fr(m,t,n,y,p,f);i.push(p),a.push(u)}return new Ot(i,a,t,n)}var ry=cn.prototype.constructor;function iy(){return new ry(this._groups,this._parents)}function ay(e,t){var n,r,o;return function(){var i=ln(this,e),a=(this.style.removeProperty(e),ln(this,e));return i===a?null:i===n&&a===r?o:o=t(n=i,r=a)}}function ql(e){return function(){this.style.removeProperty(e)}}function sy(e,t,n){var r,o=n+"",i;return function(){var a=ln(this,e);return a===o?null:a===r?i:i=t(r=a,n)}}function ly(e,t,n){var r,o,i;return function(){var a=ln(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),ln(this,e))),a===c?null:a===r&&c===o?i:(o=c,i=t(r=a,s))}}function cy(e,t){var n,r,o,i="style."+t,a="end."+i,s;return function(){var c=xt(this,e),d=c.on,u=c.value[i]==null?s||(s=ql(t)):void 0;(d!==n||o!==u)&&(r=(n=d).copy()).on(a,o=u),c.on=r}}function dy(e,t,n){var r=(e+="")=="transform"?Tl:Xl;return t==null?this.styleTween(e,ay(e,r)).on("end.style."+e,ql(e)):typeof t=="function"?this.styleTween(e,ly(e,r,da(this,"style."+e,t))).each(cy(this._id,e)):this.styleTween(e,sy(e,r,t),n).on("end.style."+e,null)}function uy(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function py(e,t,n){var r,o;function i(){var a=t.apply(this,arguments);return a!==o&&(r=(o=a)&&uy(e,a,n)),r}return i._value=t,i}function my(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,py(e,t,n??""))}function fy(e){return function(){this.textContent=e}}function gy(e){return function(){var t=e(this);this.textContent=t??""}}function hy(e){return this.tween("text",typeof e=="function"?gy(da(this,"text",e)):fy(e==null?"":e+""))}function by(e){return function(t){this.textContent=e.call(this,t)}}function yy(e){var t,n;function r(){var o=e.apply(this,arguments);return o!==n&&(t=(n=o)&&by(o)),t}return r._value=e,r}function xy(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,yy(e))}function wy(){for(var e=this._name,t=this._id,n=Yl(),r=this._groups,o=r.length,i=0;i<o;++i)for(var a=r[i],s=a.length,c,d=0;d<s;++d)if(c=a[d]){var u=mt(c,t);fr(c,e,n,d,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Ot(r,this._parents,e,n)}function vy(){var e,t,n=this,r=n._id,o=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--o===0&&i()}};n.each(function(){var d=xt(this,r),u=d.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),d.on=t}),o===0&&i()})}var ky=0;function Ot(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Sy(e){return cn().transition(e)}function Yl(){return++ky}var At=cn.prototype;Ot.prototype=Sy.prototype={constructor:Ot,select:ny,selectAll:oy,selectChild:At.selectChild,selectChildren:At.selectChildren,filter:Zb,merge:Kb,selection:iy,transition:wy,call:At.call,nodes:At.nodes,node:At.node,size:At.size,empty:At.empty,each:At.each,on:Jb,attr:Tb,attrTween:Hb,style:dy,styleTween:my,text:hy,textTween:xy,remove:ty,tween:Mb,delay:Fb,duration:Gb,ease:Xb,easeVarying:Yb,end:vy,[Symbol.iterator]:At[Symbol.iterator]};var Cy={time:null,delay:0,duration:250,ease:Wl};function Ny(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function My(e){var t,n;e instanceof Ot?(t=e._id,e=e._name):(t=Yl(),(n=Cy).time=dr(),e=e==null?null:e+"");for(var r=this._groups,o=r.length,i=0;i<o;++i)for(var a=r[i],s=a.length,c,d=0;d<s;++d)(c=a[d])&&fr(c,e,t,d,a,n||Ny(c,t));return new Ot(r,this._parents,e,t)}cn.prototype.interrupt=Sb;cn.prototype.transition=My;var gr=e=>()=>e;function Ey(e,{sourceEvent:t,target:n,transform:r,dispatch:o}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:o}})}function Lt(e,t,n){this.k=e,this.x=t,this.y=n}Lt.prototype={constructor:Lt,scale:function(e){return e===1?this:new Lt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Lt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var yo=new Lt(1,0,0);pa.prototype=Lt.prototype;function pa(e){for(;!e.__zoom;)if(!(e=e.parentNode))return yo;return e.__zoom}function ua(e){e.stopImmediatePropagation()}function bo(e){e.preventDefault(),e.stopImmediatePropagation()}function _y(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Iy(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Zl(){return this.__zoom||yo}function Py(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function zy(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ry(e,t,n){var r=e.invertX(t[0][0])-n[0][0],o=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(o>r?(r+o)/2:Math.min(0,r)||Math.max(0,o),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function ma(){var e=_y,t=Iy,n=Ry,r=Py,o=zy,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=On,d=sn("start","zoom","end"),u,l,p,m=500,f=150,y=0,h=10;function b(v){v.property("__zoom",Zl).on("wheel.zoom",C,{passive:!1}).on("mousedown.zoom",M).on("dblclick.zoom",O).filter(o).on("touchstart.zoom",D).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",T).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}b.transform=function(v,E,z,I){var _=v.selection?v.selection():v;_.property("__zoom",Zl),v!==_?k(v,E,z,I):_.interrupt().each(function(){S(this,arguments).event(I).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},b.scaleBy=function(v,E,z,I){b.scaleTo(v,function(){var _=this.__zoom.k,R=typeof E=="function"?E.apply(this,arguments):E;return _*R},z,I)},b.scaleTo=function(v,E,z,I){b.transform(v,function(){var _=t.apply(this,arguments),R=this.__zoom,V=z==null?w(_):typeof z=="function"?z.apply(this,arguments):z,W=R.invert(V),F=typeof E=="function"?E.apply(this,arguments):E;return n(g(x(R,F),V,W),_,a)},z,I)},b.translateBy=function(v,E,z,I){b.transform(v,function(){return n(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof z=="function"?z.apply(this,arguments):z),t.apply(this,arguments),a)},null,I)},b.translateTo=function(v,E,z,I,_){b.transform(v,function(){var R=t.apply(this,arguments),V=this.__zoom,W=I==null?w(R):typeof I=="function"?I.apply(this,arguments):I;return n(yo.translate(W[0],W[1]).scale(V.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof z=="function"?-z.apply(this,arguments):-z),R,a)},I,_)};function x(v,E){return E=Math.max(i[0],Math.min(i[1],E)),E===v.k?v:new Lt(E,v.x,v.y)}function g(v,E,z){var I=E[0]-z[0]*v.k,_=E[1]-z[1]*v.k;return I===v.x&&_===v.y?v:new Lt(v.k,I,_)}function w(v){return[(+v[0][0]+ +v[1][0])/2,(+v[0][1]+ +v[1][1])/2]}function k(v,E,z,I){v.on("start.zoom",function(){S(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(I).end()}).tween("zoom",function(){var _=this,R=arguments,V=S(_,R).event(I),W=t.apply(_,R),F=z==null?w(W):typeof z=="function"?z.apply(_,R):z,Z=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),H=_.__zoom,G=typeof E=="function"?E.apply(_,R):E,te=c(H.invert(F).concat(Z/H.k),G.invert(F).concat(Z/G.k));return function(ee){if(ee===1)ee=G;else{var P=te(ee),X=Z/P[2];ee=new Lt(X,F[0]-P[0]*X,F[1]-P[1]*X)}V.zoom(null,ee)}})}function S(v,E,z){return!z&&v.__zooming||new N(v,E)}function N(v,E){this.that=v,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(v,E),this.taps=0}N.prototype={event:function(v){return v&&(this.sourceEvent=v),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(v,E){return this.mouse&&v!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&v!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&v!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(v){var E=Fe(this.that).datum();d.call(v,this.that,new Ey(v,{sourceEvent:this.sourceEvent,target:b,transform:this.that.__zoom,dispatch:d}),E)}};function C(v,...E){if(!e.apply(this,arguments))return;var z=S(this,E).event(v),I=this.__zoom,_=Math.max(i[0],Math.min(i[1],I.k*Math.pow(2,r.apply(this,arguments)))),R=Xe(v);if(z.wheel)(z.mouse[0][0]!==R[0]||z.mouse[0][1]!==R[1])&&(z.mouse[1]=I.invert(z.mouse[0]=R)),clearTimeout(z.wheel);else{if(I.k===_)return;z.mouse=[R,I.invert(R)],ho(this),z.start()}bo(v),z.wheel=setTimeout(V,f),z.zoom("mouse",n(g(x(I,_),z.mouse[0],z.mouse[1]),z.extent,a));function V(){z.wheel=null,z.end()}}function M(v,...E){if(p||!e.apply(this,arguments))return;var z=v.currentTarget,I=S(this,E,!0).event(v),_=Fe(v.view).on("mousemove.zoom",F,!0).on("mouseup.zoom",Z,!0),R=Xe(v,z),V=v.clientX,W=v.clientY;Hi(v.view),ua(v),I.mouse=[R,this.__zoom.invert(R)],ho(this),I.start();function F(H){if(bo(H),!I.moved){var G=H.clientX-V,te=H.clientY-W;I.moved=G*G+te*te>y}I.event(H).zoom("mouse",n(g(I.that.__zoom,I.mouse[0]=Xe(H,z),I.mouse[1]),I.extent,a))}function Z(H){_.on("mousemove.zoom mouseup.zoom",null),Bi(H.view,I.moved),bo(H),I.event(H).end()}}function O(v,...E){if(e.apply(this,arguments)){var z=this.__zoom,I=Xe(v.changedTouches?v.changedTouches[0]:v,this),_=z.invert(I),R=z.k*(v.shiftKey?.5:2),V=n(g(x(z,R),I,_),t.apply(this,E),a);bo(v),s>0?Fe(this).transition().duration(s).call(k,V,I,v):Fe(this).call(b.transform,V,I,v)}}function D(v,...E){if(e.apply(this,arguments)){var z=v.touches,I=z.length,_=S(this,E,v.changedTouches.length===I).event(v),R,V,W,F;for(ua(v),V=0;V<I;++V)W=z[V],F=Xe(W,this),F=[F,this.__zoom.invert(F),W.identifier],_.touch0?!_.touch1&&_.touch0[2]!==F[2]&&(_.touch1=F,_.taps=0):(_.touch0=F,R=!0,_.taps=1+!!u);u&&(u=clearTimeout(u)),R&&(_.taps<2&&(l=F[0],u=setTimeout(function(){u=null},m)),ho(this),_.start())}}function L(v,...E){if(this.__zooming){var z=S(this,E).event(v),I=v.changedTouches,_=I.length,R,V,W,F;for(bo(v),R=0;R<_;++R)V=I[R],W=Xe(V,this),z.touch0&&z.touch0[2]===V.identifier?z.touch0[0]=W:z.touch1&&z.touch1[2]===V.identifier&&(z.touch1[0]=W);if(V=z.that.__zoom,z.touch1){var Z=z.touch0[0],H=z.touch0[1],G=z.touch1[0],te=z.touch1[1],ee=(ee=G[0]-Z[0])*ee+(ee=G[1]-Z[1])*ee,P=(P=te[0]-H[0])*P+(P=te[1]-H[1])*P;V=x(V,Math.sqrt(ee/P)),W=[(Z[0]+G[0])/2,(Z[1]+G[1])/2],F=[(H[0]+te[0])/2,(H[1]+te[1])/2]}else if(z.touch0)W=z.touch0[0],F=z.touch0[1];else return;z.zoom("touch",n(g(V,W,F),z.extent,a))}}function T(v,...E){if(this.__zooming){var z=S(this,E).event(v),I=v.changedTouches,_=I.length,R,V;for(ua(v),p&&clearTimeout(p),p=setTimeout(function(){p=null},m),R=0;R<_;++R)V=I[R],z.touch0&&z.touch0[2]===V.identifier?delete z.touch0:z.touch1&&z.touch1[2]===V.identifier&&delete z.touch1;if(z.touch1&&!z.touch0&&(z.touch0=z.touch1,delete z.touch1),z.touch0)z.touch0[1]=this.__zoom.invert(z.touch0[0]);else if(z.end(),z.taps===2&&(V=Xe(V,this),Math.hypot(l[0]-V[0],l[1]-V[1])<h)){var W=Fe(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return b.wheelDelta=function(v){return arguments.length?(r=typeof v=="function"?v:gr(+v),b):r},b.filter=function(v){return arguments.length?(e=typeof v=="function"?v:gr(!!v),b):e},b.touchable=function(v){return arguments.length?(o=typeof v=="function"?v:gr(!!v),b):o},b.extent=function(v){return arguments.length?(t=typeof v=="function"?v:gr([[+v[0][0],+v[0][1]],[+v[1][0],+v[1][1]]]),b):t},b.scaleExtent=function(v){return arguments.length?(i[0]=+v[0],i[1]=+v[1],b):[i[0],i[1]]},b.translateExtent=function(v){return arguments.length?(a[0][0]=+v[0][0],a[1][0]=+v[1][0],a[0][1]=+v[0][1],a[1][1]=+v[1][1],b):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},b.constrain=function(v){return arguments.length?(n=v,b):n},b.duration=function(v){return arguments.length?(s=+v,b):s},b.interpolate=function(v){return arguments.length?(c=v,b):c},b.on=function(){var v=d.on.apply(d,arguments);return v===d?b:v},b.clickDistance=function(v){return arguments.length?(y=(v=+v)*v,b):Math.sqrt(y)},b.tapDistance=function(v){return arguments.length?(h=+v,b):h},b}var tt={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:r})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:r}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Vn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],ya=["Enter"," ","Escape"],xa={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},qt;(function(e){e.Strict="strict",e.Loose="loose"})(qt||(qt={}));var Ht;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ht||(Ht={}));var gn;(function(e){e.Partial="partial",e.Full="full"})(gn||(gn={}));var wa={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},wt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(wt||(wt={}));var Fn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Fn||(Fn={}));var ie;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ie||(ie={}));var Kl={[ie.Left]:ie.Right,[ie.Right]:ie.Left,[ie.Top]:ie.Bottom,[ie.Bottom]:ie.Top};function va(e){return e===null?null:e?"valid":"invalid"}var ka=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,cc=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Sa=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var wo=(e,t=[0,0])=>{let{width:n,height:r}=ft(e),o=e.origin??t,i=n*o[0],a=r*o[1];return{x:e.position.x-i,y:e.position.y-a}},Ca=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((r,o)=>{let i=typeof o=="string",a=!t.nodeLookup&&!i?o:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(o):Sa(o)?o:t.nodeLookup.get(o.id));let s=a?yr(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return vr(r,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return kr(n)},Gn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},r=!1;return e.forEach(o=>{(t.filter===void 0||t.filter(o))&&(n=vr(n,yr(o)),r=!0)}),r?kr(n):{x:0,y:0,width:0,height:0}},xr=(e,t,[n,r,o]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/o,c=(t.y-r)/o,d=t.width/o,u=t.height/o,l=[];for(let p of e.values()){let{measured:m,selectable:f=!0,hidden:y=!1}=p;if(a&&!f||y)continue;let h=m.width??p.width??p.initialWidth??0,b=m.height??p.height??p.initialHeight??0,{x,y:g}=p.internals.positionAbsolute,w=fc(s,c,d,u,x,g,h,b),k=h*b,S=i&&w>0;(!p.internals.handleBounds||S||w>=k||p.dragging)&&l.push(p)}return l},dc=(e,t)=>{let n=new Set;return e.forEach(r=>{n.add(r.id)}),t.filter(r=>n.has(r.source)||n.has(r.target))};function Ty(e,t){let n=new Map,r=t?.nodes?new Set(t.nodes.map(o=>o.id)):null;return e.forEach(o=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=ft(o);i=a>0&&s>0}else i=!!(o.measured.width&&o.measured.height&&!o.hidden);i&&(!r||r.has(o.id))&&n.set(o.id,o)}),n}async function uc({nodes:e,width:t,height:n,panZoom:r,minZoom:o,maxZoom:i},a){if(e.size===0)return!0;let s=Ty(e,a),c=Gn(s),d=ko(c,t,n,a?.minZoom??o,a?.maxZoom??i,a?.padding??.1);return await r.setViewport(d,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function Na({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:r=[0,0],nodeExtent:o,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:d}=s?s.internals.positionAbsolute:{x:0,y:0},u=a.origin??r,l=a.extent||o;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",tt.error005());else{let m=s.measured.width,f=s.measured.height;m&&f&&(l=[[c,d],[c+m,d+f]])}else s&&yn(a.extent)&&(l=[[a.extent[0][0]+c,a.extent[0][1]+d],[a.extent[1][0]+c,a.extent[1][1]+d]]);let p=yn(l)?hn(t,l,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",tt.error015()),{position:{x:p.x-c+(a.measured.width??0)*u[0],y:p.y-d+(a.measured.height??0)*u[1]},positionAbsolute:p}}async function pc({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:r,onBeforeDelete:o}){let i=new Set(e.map(p=>p.id)),a=[];for(let p of n){if(p.deletable===!1)continue;let m=i.has(p.id),f=!m&&p.parentId&&a.find(y=>y.id===p.parentId);(m||f)&&a.push(p)}let s=new Set(t.map(p=>p.id)),c=r.filter(p=>p.deletable!==!1),u=dc(a,c);for(let p of c)s.has(p.id)&&!u.find(f=>f.id===p.id)&&u.push(p);if(!o)return{edges:u,nodes:a};let l=await o({nodes:a,edges:u});return typeof l=="boolean"?l?{edges:u,nodes:a}:{edges:[],nodes:[]}:l}var Wn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),hn=(e={x:0,y:0},t,n)=>({x:Wn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Wn(e.y,t[0][1],t[1][1]-(n?.height??0))});function mc(e,t,n){let{width:r,height:o}=ft(n),{x:i,y:a}=n.internals.positionAbsolute;return hn(e,[[i,a],[i+r,a+o]],t)}var jl=(e,t,n)=>e<t?Wn(Math.abs(e-t),1,t)/t:e>n?-Wn(Math.abs(e-n),1,t)/t:0,wr=(e,t,n=15,r=40)=>{let o=jl(e.x,r,t.width-r)*n,i=jl(e.y,r,t.height-r)*n;return[o,i]},vr=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),ba=({x:e,y:t,width:n,height:r})=>({x:e,y:t,x2:e+n,y2:t+r}),kr=({x:e,y:t,x2:n,y2:r})=>({x:e,y:t,width:n-e,height:r-t}),Un=(e,t=[0,0])=>{let{x:n,y:r}=Sa(e)?e.internals.positionAbsolute:wo(e,t);return{x:n,y:r,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},yr=(e,t=[0,0])=>{let{x:n,y:r}=Sa(e)?e.internals.positionAbsolute:wo(e,t);return{x:n,y:r,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:r+(e.measured?.height??e.height??e.initialHeight??0)}},Ma=(e,t)=>kr(vr(ba(e),ba(t))),fc=(e,t,n,r,o,i,a,s)=>{let c=Math.max(0,Math.min(e+n,o+a)-Math.max(e,o)),d=Math.max(0,Math.min(t+r,i+s)-Math.max(t,i));return Math.ceil(c*d)},vo=(e,t)=>fc(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Ea=e=>ot(e.width)&&ot(e.height)&&ot(e.x)&&ot(e.y),ot=e=>!isNaN(e)&&isFinite(e),_a=(e,t)=>(n,r)=>{},Xn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),qn=({x:e,y:t},[n,r,o],i=!1,a=[1,1])=>{let s={x:(e-n)/o,y:(t-r)/o};return i?Xn(s,a):s},bn=({x:e,y:t},[n,r,o])=>({x:e*o+n,y:t*o+r});function Bn(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Dy(e,t,n){if(typeof e=="string"||typeof e=="number"){let r=Bn(e,n),o=Bn(e,t);return{top:r,right:o,bottom:r,left:o,x:o*2,y:r*2}}if(typeof e=="object"){let r=Bn(e.top??e.y??0,n),o=Bn(e.bottom??e.y??0,n),i=Bn(e.left??e.x??0,t),a=Bn(e.right??e.x??0,t);return{top:r,right:a,bottom:o,left:i,x:i+a,y:r+o}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Ay(e,t,n,r,o,i){let{x:a,y:s}=bn(e,[t,n,r]),{x:c,y:d}=bn({x:e.x+e.width,y:e.y+e.height},[t,n,r]),u=o-c,l=i-d;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(u),bottom:Math.floor(l)}}var ko=(e,t,n,r,o,i)=>{let a=Dy(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,d=Math.min(s,c),u=Wn(d,r,o),l=e.x+e.width/2,p=e.y+e.height/2,m=t/2-l*u,f=n/2-p*u,y=Ay(e,m,f,u,t,n),h={left:Math.min(y.left-a.left,0),top:Math.min(y.top-a.top,0),right:Math.min(y.right-a.right,0),bottom:Math.min(y.bottom-a.bottom,0)};return{x:m-h.left+h.right,y:f-h.top+h.bottom,zoom:u}},Yn=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function yn(e){return e!=null&&e!=="parent"}function ft(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Ia(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Pa(e,t={width:0,height:0},n,r,o){let i={...e},a=r.get(n);if(a){let s=a.origin||o;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function za(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function gc(){let e,t;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}function hc(e){return{...xa,...e||{}}}function xo(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:r,containerBounds:o}){let{x:i,y:a}=rt(e),s=qn({x:i-(o?.left??0),y:a-(o?.top??0)},r),{x:c,y:d}=n?Xn(s,t):s;return{xSnapped:c,ySnapped:d,...s}}var Sr=e=>({width:e.offsetWidth,height:e.offsetHeight}),Ra=e=>e?.getRootNode?.()||window?.document,Oy=["INPUT","SELECT","TEXTAREA"];function Ta(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Oy.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Da=e=>"clientX"in e,rt=(e,t)=>{let n=Da(e),r=n?e.clientX:e.touches?.[0].clientX,o=n?e.clientY:e.touches?.[0].clientY;return{x:r-(t?.left??0),y:o-(t?.top??0)}},Ql=(e,t,n,r,o)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:o,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/r,y:(s.top-n.top)/r,...Sr(a)}})};function Cr({sourceX:e,sourceY:t,targetX:n,targetY:r,sourceControlX:o,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+o*.375+a*.375+n*.125,d=t*.125+i*.375+s*.375+r*.125,u=Math.abs(c-e),l=Math.abs(d-t);return[c,d,u,l]}function hr(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Jl({pos:e,x1:t,y1:n,x2:r,y2:o,c:i}){switch(e){case ie.Left:return[t-hr(t-r,i),n];case ie.Right:return[t+hr(r-t,i),n];case ie.Top:return[t,n-hr(n-o,i)];case ie.Bottom:return[t,n+hr(o-n,i)]}}function Nr({sourceX:e,sourceY:t,sourcePosition:n=ie.Bottom,targetX:r,targetY:o,targetPosition:i=ie.Top,curvature:a=.25}){let[s,c]=Jl({pos:n,x1:e,y1:t,x2:r,y2:o,c:a}),[d,u]=Jl({pos:i,x1:r,y1:o,x2:e,y2:t,c:a}),[l,p,m,f]=Cr({sourceX:e,sourceY:t,targetX:r,targetY:o,sourceControlX:s,sourceControlY:c,targetControlX:d,targetControlY:u});return[`M${e},${t} C${s},${c} ${d},${u} ${r},${o}`,l,p,m,f]}function Aa({sourceX:e,sourceY:t,targetX:n,targetY:r}){let o=Math.abs(n-e)/2,i=n<e?n+o:n-o,a=Math.abs(r-t)/2,s=r<t?r+a:r-a;return[i,s,o,a]}function bc({sourceNode:e,targetNode:t,selected:n=!1,zIndex:r=0,elevateOnSelect:o=!1,zIndexMode:i="basic"}){if(i==="manual")return r;let a=o&&n?r+1e3:r,s=Math.max(e.parentId||o&&e.selected?e.internals.z:0,t.parentId||o&&t.selected?t.internals.z:0);return a+s}function yc({sourceNode:e,targetNode:t,width:n,height:r,transform:o}){let i=vr(yr(e),yr(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-o[0]/o[2],y:-o[1]/o[2],width:n/o[2],height:r/o[2]};return vo(a,kr(i))>0}var Ly=({source:e,sourceHandle:t,target:n,targetHandle:r})=>`xy-edge__${e}${t||""}-${n}${r||""}`,Hy=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),xc=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",tt.error006()),t;let r=n.getEdgeId||Ly,o;return ka(e)?o={...e}:o={...e,id:r(e)},Hy(o,t)?t:(o.sourceHandle===null&&delete o.sourceHandle,o.targetHandle===null&&delete o.targetHandle,t.concat(o))};function Mr({sourceX:e,sourceY:t,targetX:n,targetY:r}){let[o,i,a,s]=Aa({sourceX:e,sourceY:t,targetX:n,targetY:r});return[`M ${e},${t}L ${n},${r}`,o,i,a,s]}var ec={[ie.Left]:{x:-1,y:0},[ie.Right]:{x:1,y:0},[ie.Top]:{x:0,y:-1},[ie.Bottom]:{x:0,y:1}},By=({source:e,sourcePosition:t=ie.Bottom,target:n})=>t===ie.Left||t===ie.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},tc=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function $y({source:e,sourcePosition:t=ie.Bottom,target:n,targetPosition:r=ie.Top,center:o,offset:i,stepPosition:a}){let s=ec[t],c=ec[r],d={x:e.x+s.x*i,y:e.y+s.y*i},u={x:n.x+c.x*i,y:n.y+c.y*i},l=By({source:d,sourcePosition:t,target:u}),p=l.x!==0?"x":"y",m=l[p],f=[],y,h,b={x:0,y:0},x={x:0,y:0},[,,g,w]=Aa({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[p]*c[p]===-1){p==="x"?(y=o.x??d.x+(u.x-d.x)*a,h=o.y??(d.y+u.y)/2):(y=o.x??(d.x+u.x)/2,h=o.y??d.y+(u.y-d.y)*a);let C=[{x:y,y:d.y},{x:y,y:u.y}],M=[{x:d.x,y:h},{x:u.x,y:h}];s[p]===m?f=p==="x"?C:M:f=p==="x"?M:C}else{let C=[{x:d.x,y:u.y}],M=[{x:u.x,y:d.y}];if(p==="x"?f=s.x===m?M:C:f=s.y===m?C:M,t===r){let v=Math.abs(e[p]-n[p]);if(v<=i){let E=Math.min(i-1,i-v);s[p]===m?b[p]=(d[p]>e[p]?-1:1)*E:x[p]=(u[p]>n[p]?-1:1)*E}}if(t!==r){let v=p==="x"?"y":"x",E=s[p]===c[v],z=d[v]>u[v],I=d[v]<u[v];(s[p]===1&&(!E&&z||E&&I)||s[p]!==1&&(!E&&I||E&&z))&&(f=p==="x"?C:M)}let O={x:d.x+b.x,y:d.y+b.y},D={x:u.x+x.x,y:u.y+x.y},L=Math.max(Math.abs(O.x-f[0].x),Math.abs(D.x-f[0].x)),T=Math.max(Math.abs(O.y-f[0].y),Math.abs(D.y-f[0].y));L>=T?(y=(O.x+D.x)/2,h=f[0].y):(y=f[0].x,h=(O.y+D.y)/2)}let k={x:d.x+b.x,y:d.y+b.y},S={x:u.x+x.x,y:u.y+x.y};return[[e,...k.x!==f[0].x||k.y!==f[0].y?[k]:[],...f,...S.x!==f[f.length-1].x||S.y!==f[f.length-1].y?[S]:[],n],y,h,g,w]}function Fy(e,t,n,r){let o=Math.min(tc(e,t)/2,tc(t,n)/2,r),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let d=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+o*d},${a}Q ${i},${a} ${i},${a+o*u}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+o*c}Q ${i},${a} ${i+o*s},${a}`}function So({sourceX:e,sourceY:t,sourcePosition:n=ie.Bottom,targetX:r,targetY:o,targetPosition:i=ie.Top,borderRadius:a=5,centerX:s,centerY:c,offset:d=20,stepPosition:u=.5}){let[l,p,m,f,y]=$y({source:{x:e,y:t},sourcePosition:n,target:{x:r,y:o},targetPosition:i,center:{x:s,y:c},offset:d,stepPosition:u}),h=`M${l[0].x} ${l[0].y}`;for(let b=1;b<l.length-1;b++)h+=Fy(l[b-1],l[b],l[b+1],a);return h+=`L${l[l.length-1].x} ${l[l.length-1].y}`,[h,p,m,f,y]}function nc(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function wc(e){let{sourceNode:t,targetNode:n}=e;if(!nc(t)||!nc(n))return null;let r=t.internals.handleBounds||oc(t.handles),o=n.internals.handleBounds||oc(n.handles),i=rc(r?.source??[],e.sourceHandle),a=rc(e.connectionMode===qt.Strict?o?.target??[]:(o?.target??[]).concat(o?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",tt.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||ie.Bottom,c=a?.position||ie.Top,d=Yt(t,i,s),u=Yt(n,a,c);return{sourceX:d.x,sourceY:d.y,targetX:u.x,targetY:u.y,sourcePosition:s,targetPosition:c}}function oc(e){if(!e)return null;let t=[],n=[];for(let r of e)r.width=r.width??1,r.height=r.height??1,r.type==="source"?t.push(r):r.type==="target"&&n.push(r);return{source:t,target:n}}function Yt(e,t,n=ie.Left,r=!1){let o=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??ft(e);if(r)return{x:o+a/2,y:i+s/2};switch(t?.position??n){case ie.Top:return{x:o+a/2,y:i};case ie.Right:return{x:o+a,y:i+s/2};case ie.Bottom:return{x:o+a/2,y:i+s};case ie.Left:return{x:o,y:i+s/2}}}function rc(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function Er(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`:""}function vc(e,{id:t,defaultColor:n,defaultMarkerStart:r,defaultMarkerEnd:o}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||r,s.markerEnd||o].forEach(c=>{if(c&&typeof c=="object"){let d=Er(c,t);i.has(d)||(a.push({id:d,color:c.color||n,...c}),i.add(d))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var kc=1e3,Wy=10,Oa={nodeOrigin:[0,0],nodeExtent:Vn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},Vy={...Oa,checkEquality:!0};function La(e,t){let n={...e};for(let r in t)t[r]!==void 0&&(n[r]=t[r]);return n}function Sc(e,t,n){let r=La(Oa,n);for(let o of e.values())if(o.parentId)Ba(o,e,t,r);else{let i=wo(o,r.nodeOrigin),a=yn(o.extent)?o.extent:r.nodeExtent,s=hn(i,a,ft(o));o.internals.positionAbsolute=s}}function Gy(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],r=[];for(let o of e.handles){let i={id:o.id,width:o.width??1,height:o.height??1,nodeId:e.id,x:o.x,y:o.y,position:o.position,type:o.type};o.type==="source"?n.push(i):o.type==="target"&&r.push(i)}return{source:n,target:r}}function Ha(e){return e==="manual"}function _r(e,t,n,r={}){let o=La(Vy,r),i={i:0},a=new Map(t),s=o?.elevateNodesOnSelect&&!Ha(o.zIndexMode)?kc:0,c=e.length>0,d=!1;t.clear(),n.clear();for(let u of e){let l=a.get(u.id);if(o.checkEquality&&u===l?.internals.userNode)t.set(u.id,l);else{let p=wo(u,o.nodeOrigin),m=yn(u.extent)?u.extent:o.nodeExtent,f=hn(p,m,ft(u));l={...o.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:f,handleBounds:Gy(u,l),z:Cc(u,s,o.zIndexMode),userNode:u}},t.set(u.id,l)}(l.measured===void 0||l.measured.width===void 0||l.measured.height===void 0)&&!l.hidden&&(c=!1),u.parentId&&Ba(l,t,n,r,i),d||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:d}}function Uy(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Ba(e,t,n,r,o){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=La(Oa,r),d=e.parentId,u=t.get(d);if(!u){console.warn(`Parent node ${d} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Uy(e,n),o&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++o.i,u.internals.z=u.internals.z+o.i*Wy),o&&u.internals.rootParentIndex!==void 0&&(o.i=u.internals.rootParentIndex);let l=i&&!Ha(c)?kc:0,{x:p,y:m,z:f}=Xy(e,u,a,s,l,c),{positionAbsolute:y}=e.internals,h=p!==y.x||m!==y.y;(h||f!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:h?{x:p,y:m}:y,z:f}})}function Cc(e,t,n){let r=ot(e.zIndex)?e.zIndex:0;return Ha(n)?r:r+(e.selected?t:0)}function Xy(e,t,n,r,o,i){let{x:a,y:s}=t.internals.positionAbsolute,c=ft(e),d=wo(e,n),u=yn(e.extent)?hn(d,e.extent,c):d,l=hn({x:a+u.x,y:s+u.y},r,c);e.extent==="parent"&&(l=mc(l,c,t));let p=Cc(e,o,i),m=t.internals.z??0;return{x:l.x,y:l.y,z:m>=p?m+1:p}}function Ir(e,t,n,r=[0,0]){let o=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??Un(s),d=Ma(c,a.rect);i.set(a.parentId,{expandedRect:d,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let d=s.internals.positionAbsolute,u=ft(s),l=s.origin??r,p=a.x<d.x?Math.round(Math.abs(d.x-a.x)):0,m=a.y<d.y?Math.round(Math.abs(d.y-a.y)):0,f=Math.max(u.width,Math.round(a.width)),y=Math.max(u.height,Math.round(a.height)),h=(f-u.width)*l[0],b=(y-u.height)*l[1];(p>0||m>0||h||b)&&(o.push({id:c,type:"position",position:{x:s.position.x-p+h,y:s.position.y-m+b}}),n.get(c)?.forEach(x=>{e.some(g=>g.id===x.id)||o.push({id:x.id,type:"position",position:{x:x.position.x+p,y:x.position.y+m}})})),(u.width<a.width||u.height<a.height||p||m)&&o.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:f+(p?l[0]*p-h:0),height:y+(m?l[1]*m-b:0)}})}),o}function Nc(e,t,n,r,o,i,a){let s=r?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let d=[],u=window.getComputedStyle(s),{m22:l}=new window.DOMMatrixReadOnly(u.transform),p=[];for(let m of e.values()){let f=t.get(m.id);if(!f)continue;if(f.hidden){t.set(f.id,{...f,internals:{...f.internals,handleBounds:void 0}}),c=!0;continue}let y=Sr(m.nodeElement),h=f.measured.width!==y.width||f.measured.height!==y.height;if(!!(y.width&&y.height&&(h||!f.internals.handleBounds||m.force))){let x=m.nodeElement.getBoundingClientRect(),g=yn(f.extent)?f.extent:i,{positionAbsolute:w}=f.internals;if(f.parentId&&f.extent==="parent"){let S=t.get(f.parentId);S&&(w=mc(w,y,S))}else g&&(w=hn(w,g,y));let k={...f,measured:y,internals:{...f.internals,positionAbsolute:w,handleBounds:{source:Ql("source",m.nodeElement,x,l,f.id),target:Ql("target",m.nodeElement,x,l,f.id)}}};t.set(f.id,k),f.parentId&&Ba(k,t,n,{nodeOrigin:o,zIndexMode:a}),c=!0,h&&(d.push({id:f.id,type:"dimensions",dimensions:y}),f.expandParent&&f.parentId&&p.push({id:f.id,parentId:f.parentId,rect:Un(k,o)}))}}if(p.length>0){let m=Ir(p,t,n,o);d.push(...m)}return{changes:d,updatedInternals:c}}async function Mc({delta:e,panZoom:t,transform:n,translateExtent:r,width:o,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[o,i]],r);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function ic(e,t,n,r,o,i){let a=o,s=r.get(a)||new Map;r.set(a,s.set(n,t)),a=`${o}-${e}`;let c=r.get(a)||new Map;if(r.set(a,c.set(n,t)),i){a=`${o}-${e}-${i}`;let d=r.get(a)||new Map;r.set(a,d.set(n,t))}}function $a(e,t,n){e.clear(),t.clear();for(let r of n){let{source:o,target:i,sourceHandle:a=null,targetHandle:s=null}=r,c={edgeId:r.id,source:o,target:i,sourceHandle:a,targetHandle:s},d=`${o}-${a}--${i}-${s}`,u=`${i}-${s}--${o}-${a}`;ic("source",c,u,e,o,a),ic("target",c,d,e,i,s),t.set(r.id,r)}}function Ec(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Ec(n,t):!1}function ac(e,t,n){let r=e;do{if(r?.matches?.(t))return!0;if(r===n)return!1;r=r?.parentElement}while(r);return!1}function qy(e,t,n,r){let o=new Map;for(let[i,a]of e)if((a.selected||a.id===r)&&(!a.parentId||!Ec(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&o.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return o}function fa({nodeId:e,dragItems:t,nodeLookup:n,dragging:r=!0}){let o=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&o.push({...c,position:s.position,dragging:r})}if(!e)return[o[0],o];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:r}:o[0],o]}function Yy({dragItems:e,snapGrid:t,x:n,y:r}){let o=e.values().next().value;if(!o)return null;let i={x:n-o.distance.x,y:r-o.distance.y},a=Xn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function _c({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:r,onDragStop:o}){let i={x:null,y:null},a=0,s=new Map,c=!1,d={x:0,y:0},u=null,l=!1,p=null,m=!1,f=!1,y=null;function h({noDragClassName:x,handleSelector:g,domNode:w,isSelectable:k,nodeId:S,nodeClickDistance:N=0}){p=Fe(w);function C({x:L,y:T}){let{nodeLookup:v,nodeExtent:E,snapGrid:z,snapToGrid:I,nodeOrigin:_,onNodeDrag:R,onSelectionDrag:V,onError:W,updateNodePositions:F}=t();i={x:L,y:T};let Z=!1,H=s.size>1,G=H&&E?ba(Gn(s)):null,te=H&&I?Yy({dragItems:s,snapGrid:z,x:L,y:T}):null;for(let[ee,P]of s){if(!v.has(ee))continue;let X={x:L-P.distance.x,y:T-P.distance.y};I&&(X=te?{x:Math.round(X.x+te.x),y:Math.round(X.y+te.y)}:Xn(X,z));let oe=null;if(H&&E&&!P.extent&&G){let{positionAbsolute:ne}=P.internals,ue=ne.x-G.x+E[0][0],Q=ne.x+P.measured.width-G.x2+E[1][0],q=ne.y-G.y+E[0][1],de=ne.y+P.measured.height-G.y2+E[1][1];oe=[[ue,q],[Q,de]]}let{position:re,positionAbsolute:j}=Na({nodeId:ee,nextPosition:X,nodeLookup:v,nodeExtent:oe||E,nodeOrigin:_,onError:W});Z=Z||P.position.x!==re.x||P.position.y!==re.y,P.position=re,P.internals.positionAbsolute=j}if(f=f||Z,!!Z&&(F(s,!0),y&&(r||R||!S&&V))){let[ee,P]=fa({nodeId:S,dragItems:s,nodeLookup:v});r?.(y,s,ee,P),R?.(y,ee,P),S||V?.(y,P)}}async function M(){if(!u)return;let{transform:L,panBy:T,autoPanSpeed:v,autoPanOnNodeDrag:E}=t();if(!E){c=!1,cancelAnimationFrame(a);return}let[z,I]=wr(d,u,v);(z!==0||I!==0)&&(i.x=(i.x??0)-z/L[2],i.y=(i.y??0)-I/L[2],await T({x:z,y:I})&&C(i)),a=requestAnimationFrame(M)}function O(L){let{nodeLookup:T,multiSelectionActive:v,nodesDraggable:E,transform:z,snapGrid:I,snapToGrid:_,selectNodesOnDrag:R,onNodeDragStart:V,onSelectionDragStart:W,unselectNodesAndEdges:F}=t();l=!0,(!R||!k)&&!v&&S&&(T.get(S)?.selected||F()),k&&R&&S&&e?.(S);let Z=xo(L.sourceEvent,{transform:z,snapGrid:I,snapToGrid:_,containerBounds:u});if(i=Z,s=qy(T,E,Z,S),s.size>0&&(n||V||!S&&W)){let[H,G]=fa({nodeId:S,dragItems:s,nodeLookup:T});n?.(L.sourceEvent,s,H,G),V?.(L.sourceEvent,H,G),S||W?.(L.sourceEvent,G)}}let D=$i().clickDistance(N).on("start",L=>{let{domNode:T,nodeDragThreshold:v,transform:E,snapGrid:z,snapToGrid:I}=t();u=T?.getBoundingClientRect()||null,m=!1,f=!1,y=L.sourceEvent,v===0&&O(L),i=xo(L.sourceEvent,{transform:E,snapGrid:z,snapToGrid:I,containerBounds:u}),d=rt(L.sourceEvent,u)}).on("drag",L=>{let{autoPanOnNodeDrag:T,transform:v,snapGrid:E,snapToGrid:z,nodeDragThreshold:I,nodeLookup:_}=t(),R=xo(L.sourceEvent,{transform:v,snapGrid:E,snapToGrid:z,containerBounds:u});if(y=L.sourceEvent,(L.sourceEvent.type==="touchmove"&&L.sourceEvent.touches.length>1||S&&!_.has(S))&&(m=!0),!m){if(!c&&T&&l&&(c=!0,M()),!l){let V=rt(L.sourceEvent,u),W=V.x-d.x,F=V.y-d.y;Math.sqrt(W*W+F*F)>I&&O(L)}(i.x!==R.xSnapped||i.y!==R.ySnapped)&&s&&l&&(d=rt(L.sourceEvent,u),C(R))}}).on("end",L=>{if(!l||m){m&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,l=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:T,updateNodePositions:v,onNodeDragStop:E,onSelectionDragStop:z}=t();if(f&&(v(s,!1),f=!1),o||E||!S&&z){let[I,_]=fa({nodeId:S,dragItems:s,nodeLookup:T,dragging:!1});o?.(L.sourceEvent,s,I,_),E?.(L.sourceEvent,I,_),S||z?.(L.sourceEvent,_)}}}).filter(L=>{let T=L.target;return!L.button&&(!x||!ac(T,`.${x}`,w))&&(!g||ac(T,g,w))});p.call(D)}function b(){p?.on(".drag",null)}return{update:h,destroy:b}}function Zy(e,t,n){let r=[],o={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())vo(o,Un(i))>0&&r.push(i);return r}var Ky=250;function jy(e,t,n,r){let o=[],i=1/0,a=Zy(e,n,t+Ky);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let d of c){if(r.nodeId===d.nodeId&&r.type===d.type&&r.id===d.id)continue;let{x:u,y:l}=Yt(s,d,d.position,!0),p=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(l-e.y,2));p>t||(p<i?(o=[{...d,x:u,y:l}],i=p):p===i&&o.push({...d,x:u,y:l}))}}if(!o.length)return null;if(o.length>1){let s=r.type==="source"?"target":"source";return o.find(c=>c.type===s)??o[0]}return o[0]}function Ic(e,t,n,r,o,i=!1){let a=r.get(e);if(!a)return null;let s=o==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(d=>d.id===n):s?.[0])??null;return c&&i?{...c,...Yt(a,c,c.position,!0)}:c}function Pc(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Qy(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var zc=()=>!0;function Jy(e,{connectionMode:t,connectionRadius:n,handleId:r,nodeId:o,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:d,autoPanOnConnect:u,flowId:l,panBy:p,cancelConnection:m,onConnectStart:f,onConnect:y,onConnectEnd:h,isValidConnection:b=zc,onReconnectEnd:x,updateConnection:g,getTransform:w,getFromHandle:k,autoPanSpeed:S,dragThreshold:N=1,handleDomNode:C}){let M=Ra(e.target),O=0,D,{x:L,y:T}=rt(e),v=Pc(i,C),E=s?.getBoundingClientRect(),z=!1;if(!E||!v)return;let I=Ic(o,v,r,c,t);if(!I)return;let _=rt(e,E),R=!1,V=null,W=!1,F=null;function Z(){if(!u||!E)return;let[re,j]=wr(_,E,S);p({x:re,y:j}),O=requestAnimationFrame(Z)}let H={...I,nodeId:o,type:v,position:I.position},G=c.get(o),ee={inProgress:!0,isValid:null,from:Yt(G,H,ie.Left,!0),fromHandle:H,fromPosition:H.position,fromNode:G,to:_,toHandle:null,toPosition:Kl[H.position],toNode:null,pointer:_};function P(){z=!0,g(ee),f?.(e,{nodeId:o,handleId:r,handleType:v})}N===0&&P();function X(re){if(!z){let{x:de,y:be}=rt(re),Ee=de-L,Te=be-T;if(!(Ee*Ee+Te*Te>N*N))return;P()}if(!k()||!H){oe(re);return}let j=w();_=rt(re,E),D=jy(qn(_,j,!1,[1,1]),n,c,H),R||(Z(),R=!0);let ne=Rc(re,{handle:D,connectionMode:t,fromNodeId:o,fromHandleId:r,fromType:a?"target":"source",isValidConnection:b,doc:M,lib:d,flowId:l,nodeLookup:c});F=ne.handleDomNode,V=ne.connection,W=Qy(!!D,ne.isValid);let ue=c.get(o),Q=ue?Yt(ue,H,ie.Left,!0):ee.from,q={...ee,from:Q,isValid:W,to:ne.toHandle&&W?bn({x:ne.toHandle.x,y:ne.toHandle.y},j):_,toHandle:ne.toHandle,toPosition:W&&ne.toHandle?ne.toHandle.position:Kl[H.position],toNode:ne.toHandle?c.get(ne.toHandle.nodeId):null,pointer:_};g(q),ee=q}function oe(re){if(!("touches"in re&&re.touches.length>0)){if(z){(D||F)&&V&&W&&y?.(V);let{inProgress:j,...ne}=ee,ue={...ne,toPosition:ee.toHandle?ee.toPosition:null};h?.(re,ue),i&&x?.(re,ue)}m(),cancelAnimationFrame(O),R=!1,W=!1,V=null,F=null,M.removeEventListener("mousemove",X),M.removeEventListener("mouseup",oe),M.removeEventListener("touchmove",X),M.removeEventListener("touchend",oe)}}M.addEventListener("mousemove",X),M.addEventListener("mouseup",oe),M.addEventListener("touchmove",X),M.addEventListener("touchend",oe)}function Rc(e,{handle:t,connectionMode:n,fromNodeId:r,fromHandleId:o,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:d=zc,nodeLookup:u}){let l=i==="target",p=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:m,y:f}=rt(e),y=a.elementFromPoint(m,f),h=y?.classList.contains(`${s}-flow__handle`)?y:p,b={handleDomNode:h,isValid:!1,connection:null,toHandle:null};if(h){let x=Pc(void 0,h),g=h.getAttribute("data-nodeid"),w=h.getAttribute("data-handleid"),k=h.classList.contains("connectable"),S=h.classList.contains("connectableend");if(!g||!x)return b;let N={source:l?g:r,sourceHandle:l?w:o,target:l?r:g,targetHandle:l?o:w};b.connection=N;let M=k&&S&&(n===qt.Strict?l&&x==="source"||!l&&x==="target":g!==r||w!==o);b.isValid=M&&d(N),b.toHandle=Ic(g,x,w,u,n,!0)}return b}var Pr={onPointerDown:Jy,isValid:Rc};function Tc({domNode:e,panZoom:t,getTransform:n,getViewScale:r}){let o=Fe(e);function i({translateExtent:s,width:c,height:d,zoomStep:u=1,pannable:l=!0,zoomable:p=!0,inversePan:m=!1}){let f=g=>{if(g.sourceEvent.type!=="wheel"||!t)return;let w=n(),k=g.sourceEvent.ctrlKey&&Yn()?10:1,S=-g.sourceEvent.deltaY*(g.sourceEvent.deltaMode===1?.05:g.sourceEvent.deltaMode?1:.002)*u,N=w[2]*Math.pow(2,S*k);t.scaleTo(N)},y=[0,0],h=g=>{(g.sourceEvent.type==="mousedown"||g.sourceEvent.type==="touchstart")&&(y=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY])},b=g=>{let w=n();if(g.sourceEvent.type!=="mousemove"&&g.sourceEvent.type!=="touchmove"||!t)return;let k=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY],S=[k[0]-y[0],k[1]-y[1]];y=k;let N=r()*Math.max(w[2],Math.log(w[2]))*(m?-1:1),C={x:w[0]-S[0]*N,y:w[1]-S[1]*N},M=[[0,0],[c,d]];t.setViewportConstrained({x:C.x,y:C.y,zoom:w[2]},M,s)},x=ma().on("start",h).on("zoom",l?b:null).on("zoom.wheel",p?f:null);o.call(x,{})}function a(){o.on("zoom",null)}return{update:i,destroy:a,pointer:Xe}}var zr=e=>({x:e.x,y:e.y,zoom:e.k}),ga=({x:e,y:t,zoom:n})=>yo.translate(e,t).scale(n),$n=(e,t)=>e.target.closest(`.${t}`),Dc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),e0=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,ha=(e,t=0,n=e0,r=()=>{})=>{let o=typeof t=="number"&&t>0;return o||r(),o?e.transition().duration(t).ease(n).on("end",r):e},Ac=e=>{let t=e.ctrlKey&&Yn()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function t0({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:r,panOnScrollMode:o,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:d}){return u=>{if($n(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let l=n.property("__zoom").k||1;if(u.ctrlKey&&a){let h=Xe(u),b=Ac(u),x=l*Math.pow(2,b);r.scaleTo(n,x,h,u);return}let p=u.deltaMode===1?20:1,m=o===Ht.Vertical?0:u.deltaX*p,f=o===Ht.Horizontal?0:u.deltaY*p;!Yn()&&u.shiftKey&&o!==Ht.Vertical&&(m=u.deltaY*p,f=0),r.translateBy(n,-(m/l)*i,-(f/l)*i,{internal:!0});let y=zr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,y):(e.isPanScrolling=!0,s?.(u,y)),e.panScrollTimeout=setTimeout(()=>{d?.(u,y),e.isPanScrolling=!1},150)}}function n0({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(r,o){let i=r.type==="wheel",a=!t&&i&&!r.ctrlKey,s=$n(r,e);if(r.ctrlKey&&i&&s&&r.preventDefault(),a||s)return null;r.preventDefault(),n.call(this,r,o)}}function o0({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return r=>{if(r.sourceEvent?.internal)return;let o=zr(r.transform);e.mouseButton=r.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=o,r.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(r.sourceEvent,o)}}function r0({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:r,onPanZoom:o}){return i=>{e.usedRightMouseButton=!!(n&&Dc(t,e.mouseButton??0)),i.sourceEvent?.sync||r([i.transform.x,i.transform.y,i.transform.k]),o&&!i.sourceEvent?.internal&&o?.(i.sourceEvent,zr(i.transform))}}function i0({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:r,onPanZoomEnd:o,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Dc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,r(!1),o)){let s=zr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{o?.(a.sourceEvent,s)},n?150:0)}}}function a0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:r,panOnScroll:o,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:d,connectionInProgress:u}){return l=>{let p=e||t,m=n&&l.ctrlKey,f=l.type==="wheel";if(l.button===1&&l.type==="mousedown"&&($n(l,`${d}-flow__node`)||$n(l,`${d}-flow__edge`)))return!0;if(!r&&!p&&!o&&!i&&!n||a||u&&!f||$n(l,s)&&f||$n(l,c)&&(!f||o&&f&&!e)||!n&&l.ctrlKey&&f)return!1;if(!n&&l.type==="touchstart"&&l.touches?.length>1)return l.preventDefault(),!1;if(!p&&!o&&!m&&f||!r&&(l.type==="mousedown"||l.type==="touchstart")||Array.isArray(r)&&!r.includes(l.button)&&l.type==="mousedown")return!1;let y=Array.isArray(r)&&r.includes(l.button)||!l.button||l.button<=1;return(!l.ctrlKey||f)&&y}}function Oc({domNode:e,minZoom:t,maxZoom:n,translateExtent:r,viewport:o,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let d={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),l=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(T=>{let v=T[0];v&&(l=[[0,0],[v.contentRect.width,v.contentRect.height]])}):null)?.observe(e);let m=ma().extent(()=>l).scaleExtent([t,n]).translateExtent(r),f=Fe(e).call(m);w({x:o.x,y:o.y,zoom:Wn(o.zoom,t,n)},[[0,0],[u.width,u.height]],r);let y=f.on("wheel.zoom"),h=f.on("dblclick.zoom");m.wheelDelta(Ac);async function b(T,v){return f?new Promise(E=>{m?.interpolate(v?.interpolate==="linear"?An:On).transform(ha(f,v?.duration,v?.ease,()=>E(!0)),T)}):!1}function x({noWheelClassName:T,noPanClassName:v,onPaneContextMenu:E,userSelectionActive:z,panOnScroll:I,panOnDrag:_,panOnScrollMode:R,panOnScrollSpeed:V,preventScrolling:W,zoomOnPinch:F,zoomOnScroll:Z,zoomOnDoubleClick:H,zoomActivationKeyPressed:G,lib:te,onTransformChange:ee,connectionInProgress:P,paneClickDistance:X,selectionOnDrag:oe}){z&&!d.isZoomingOrPanning&&g();let re=I&&!G&&!z;m.clickDistance(oe?1/0:!ot(X)||X<0?0:X);let j=re?t0({zoomPanValues:d,noWheelClassName:T,d3Selection:f,d3Zoom:m,panOnScrollMode:R,panOnScrollSpeed:V,zoomOnPinch:F,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):n0({noWheelClassName:T,preventScrolling:W,d3ZoomHandler:y});f.on("wheel.zoom",j,{passive:!1});let ne=o0({zoomPanValues:d,onDraggingChange:c,onPanZoomStart:a});m.on("start",ne);let ue=r0({zoomPanValues:d,panOnDrag:_,onPaneContextMenu:!!E,onPanZoom:i,onTransformChange:ee});m.on("zoom",ue);let Q=i0({zoomPanValues:d,panOnDrag:_,panOnScroll:I,onPaneContextMenu:E,onPanZoomEnd:s,onDraggingChange:c});m.on("end",Q);let q=a0({zoomActivationKeyPressed:G,panOnDrag:_,zoomOnScroll:Z,panOnScroll:I,zoomOnDoubleClick:H,zoomOnPinch:F,userSelectionActive:z,noPanClassName:v,noWheelClassName:T,lib:te,connectionInProgress:P});m.filter(q),H?f.on("dblclick.zoom",h):f.on("dblclick.zoom",null)}function g(){m.on("zoom",null)}async function w(T,v,E){let z=ga(T),I=m?.constrain()(z,v,E);return I&&await b(I),I}async function k(T,v){let E=ga(T);return await b(E,v),E}function S(T){if(f){let v=ga(T),E=f.property("__zoom");(E.k!==T.zoom||E.x!==T.x||E.y!==T.y)&&m?.transform(f,v,null,{sync:!0})}}function N(){let T=f?pa(f.node()):{x:0,y:0,k:1};return{x:T.x,y:T.y,zoom:T.k}}async function C(T,v){return f?new Promise(E=>{m?.interpolate(v?.interpolate==="linear"?An:On).scaleTo(ha(f,v?.duration,v?.ease,()=>E(!0)),T)}):!1}async function M(T,v){return f?new Promise(E=>{m?.interpolate(v?.interpolate==="linear"?An:On).scaleBy(ha(f,v?.duration,v?.ease,()=>E(!0)),T)}):!1}function O(T){m?.scaleExtent(T)}function D(T){m?.translateExtent(T)}function L(T){let v=!ot(T)||T<0?0:T;m?.clickDistance(v)}return{update:x,destroy:g,setViewport:k,setViewportConstrained:w,getViewport:N,scaleTo:C,scaleBy:M,setScaleExtent:O,setTranslateExtent:D,syncViewport:S,setClickDistance:L}}var Zt;(function(e){e.Line="line",e.Handle="handle"})(Zt||(Zt={}));function s0({width:e,prevWidth:t,height:n,prevHeight:r,affectsX:o,affectsY:i}){let a=e-t,s=n-r,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&o&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function sc(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),r=e.includes("left"),o=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:r,affectsY:o}}function Ut(e,t){return Math.max(0,t-e)}function Xt(e,t){return Math.max(0,e-t)}function br(e,t,n){return Math.max(0,t-e,e-n)}function lc(e,t){return e?!t:t}function l0(e,t,n,r,o,i,a,s){let{affectsX:c,affectsY:d}=t,{isHorizontal:u,isVertical:l}=t,p=u&&l,{xSnapped:m,ySnapped:f}=n,{minWidth:y,maxWidth:h,minHeight:b,maxHeight:x}=r,{x:g,y:w,width:k,height:S,aspectRatio:N}=e,C=Math.floor(u?m-e.pointerX:0),M=Math.floor(l?f-e.pointerY:0),O=k+(c?-C:C),D=S+(d?-M:M),L=-i[0]*k,T=-i[1]*S,v=br(O,y,h),E=br(D,b,x);if(a){let _=0,R=0;c&&C<0?_=Ut(g+C+L,a[0][0]):!c&&C>0&&(_=Xt(g+O+L,a[1][0])),d&&M<0?R=Ut(w+M+T,a[0][1]):!d&&M>0&&(R=Xt(w+D+T,a[1][1])),v=Math.max(v,_),E=Math.max(E,R)}if(s){let _=0,R=0;c&&C>0?_=Xt(g+C,s[0][0]):!c&&C<0&&(_=Ut(g+O,s[1][0])),d&&M>0?R=Xt(w+M,s[0][1]):!d&&M<0&&(R=Ut(w+D,s[1][1])),v=Math.max(v,_),E=Math.max(E,R)}if(o){if(u){let _=br(O/N,b,x)*N;if(v=Math.max(v,_),a){let R=0;!c&&!d||c&&!d&&p?R=Xt(w+T+O/N,a[1][1])*N:R=Ut(w+T+(c?C:-C)/N,a[0][1])*N,v=Math.max(v,R)}if(s){let R=0;!c&&!d||c&&!d&&p?R=Ut(w+O/N,s[1][1])*N:R=Xt(w+(c?C:-C)/N,s[0][1])*N,v=Math.max(v,R)}}if(l){let _=br(D*N,y,h)/N;if(E=Math.max(E,_),a){let R=0;!c&&!d||d&&!c&&p?R=Xt(g+D*N+L,a[1][0])/N:R=Ut(g+(d?M:-M)*N+L,a[0][0])/N,E=Math.max(E,R)}if(s){let R=0;!c&&!d||d&&!c&&p?R=Ut(g+D*N,s[1][0])/N:R=Xt(g+(d?M:-M)*N,s[0][0])/N,E=Math.max(E,R)}}}M=M+(M<0?E:-E),C=C+(C<0?v:-v),o&&(p?O>D*N?M=(lc(c,d)?-C:C)/N:C=(lc(c,d)?-M:M)*N:u?(M=C/N,d=c):(C=M*N,c=d));let z=c?g+C:g,I=d?w+M:w;return{width:k+(c?-C:C),height:S+(d?-M:M),x:i[0]*C*(c?-1:1)+z,y:i[1]*M*(d?-1:1)+I}}var Lc={width:0,height:0,x:0,y:0},c0={...Lc,pointerX:0,pointerY:0,aspectRatio:1};function d0(e,t,n){let r=t.position.x+e.position.x,o=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[r-s,o-c],[r+i-s,o+a-c]]}function Hc({domNode:e,nodeId:t,getStoreItems:n,onChange:r,onEnd:o}){let i=Fe(e),a={controlDirection:sc("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:d,boundaries:u,keepAspectRatio:l,resizeDirection:p,onResizeStart:m,onResize:f,onResizeEnd:y,shouldResize:h}){let b={...Lc},x={...c0};a={boundaries:u,resizeDirection:p,keepAspectRatio:l,controlDirection:sc(d)};let g,w=null,k=[],S,N,C,M=!1,O=$i().on("start",D=>{let{nodeLookup:L,transform:T,snapGrid:v,snapToGrid:E,nodeOrigin:z,paneDomNode:I}=n();if(g=L.get(t),!g)return;w=I?.getBoundingClientRect()??null;let{xSnapped:_,ySnapped:R}=xo(D.sourceEvent,{transform:T,snapGrid:v,snapToGrid:E,containerBounds:w});b={width:g.measured.width??0,height:g.measured.height??0,x:g.position.x??0,y:g.position.y??0},x={...b,pointerX:_,pointerY:R,aspectRatio:b.width/b.height},S=void 0,N=yn(g.extent)?g.extent:void 0,g.parentId&&(g.extent==="parent"||g.expandParent)&&(S=L.get(g.parentId)),S&&g.extent==="parent"&&(N=[[0,0],[S.measured.width,S.measured.height]]),k=[],C=void 0;for(let[V,W]of L)if(W.parentId===t&&(k.push({id:V,position:{...W.position},extent:W.extent}),W.extent==="parent"||W.expandParent)){let F=d0(W,g,W.origin??z);C?C=[[Math.min(F[0][0],C[0][0]),Math.min(F[0][1],C[0][1])],[Math.max(F[1][0],C[1][0]),Math.max(F[1][1],C[1][1])]]:C=F}m?.(D,{...b})}).on("drag",D=>{let{transform:L,snapGrid:T,snapToGrid:v,nodeOrigin:E}=n(),z=xo(D.sourceEvent,{transform:L,snapGrid:T,snapToGrid:v,containerBounds:w}),I=[];if(!g)return;let{x:_,y:R,width:V,height:W}=b,F={},Z=g.origin??E,{width:H,height:G,x:te,y:ee}=l0(x,a.controlDirection,z,a.boundaries,a.keepAspectRatio,Z,N,C),P=H!==V,X=G!==W,oe=te!==_&&P,re=ee!==R&&X;if(!oe&&!re&&!P&&!X)return;if((oe||re||Z[0]===1||Z[1]===1)&&(F.x=oe?te:b.x,F.y=re?ee:b.y,b.x=F.x,b.y=F.y,k.length>0)){let Q=te-_,q=ee-R;for(let de of k)de.position={x:de.position.x-Q+Z[0]*(H-V),y:de.position.y-q+Z[1]*(G-W)},I.push(de)}if((P||X)&&(F.width=P&&(!a.resizeDirection||a.resizeDirection==="horizontal")?H:b.width,F.height=X&&(!a.resizeDirection||a.resizeDirection==="vertical")?G:b.height,b.width=F.width,b.height=F.height),S&&g.expandParent){let Q=Z[0]*(F.width??0);F.x&&F.x<Q&&(b.x=Q,x.x=x.x-(F.x-Q));let q=Z[1]*(F.height??0);F.y&&F.y<q&&(b.y=q,x.y=x.y-(F.y-q))}let j=s0({width:b.width,prevWidth:V,height:b.height,prevHeight:W,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),ne={...b,direction:j};h?.(D,ne)!==!1&&(M=!0,f?.(D,ne),r(F,I))}).on("end",D=>{M&&(y?.(D,{...b}),o?.({...b}),M=!1)});i.call(O)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var jc=Gs(require("react"),1),Qc=Gs(Xc(),1);var Yc={},qc=e=>{let t,n=new Set,r=(u,l)=>{let p=typeof u=="function"?u(t):u;if(!Object.is(p,t)){let m=t;t=l??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(f=>f(t,m))}},o=()=>t,c={setState:r,getState:o,getInitialState:()=>d,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(Yc.env?Yc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},d=t=e(r,o,c);return c},Zc=e=>e?qc(e):qc;var{useDebugValue:_0}=jc.default,{useSyncExternalStoreWithSelector:I0}=Qc.default,P0=e=>e;function Wa(e,t=P0,n){let r=I0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return _0(r),r}var Kc=(e,t)=>{let n=Zc(e),r=(o,i=t)=>Wa(n,o,i);return Object.assign(r,n),r},Jc=(e,t)=>e?Kc(e,t):Kc;function Me(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}var Md=require("react-dom"),Or=(0,B.createContext)(null),z0=Or.Provider,Ed=tt.error001("react");function ge(e,t){let n=(0,B.useContext)(Or);if(n===null)throw new Error(Ed);return Wa(n,e,t)}function Se(){let e=(0,B.useContext)(Or);if(e===null)throw new Error(Ed);return(0,B.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var ed={display:"none"},R0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},_d="react-flow__node-desc",Id="react-flow__edge-desc",T0="react-flow__aria-live",D0=e=>e.ariaLiveMessage,A0=e=>e.ariaLabelConfig;function O0({rfId:e}){let t=ge(D0);return(0,$.jsx)("div",{id:`${T0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:R0,children:t})}function L0({rfId:e,disableKeyboardA11y:t}){let n=ge(A0);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("div",{id:`${_d}-${e}`,style:ed,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,$.jsx)("div",{id:`${Id}-${e}`,style:ed,children:n["edge.a11yDescription.default"]}),!t&&(0,$.jsx)(O0,{rfId:e})]})}var Lr=(0,B.forwardRef)(({position:e="top-left",children:t,className:n,style:r,...o},i)=>{let a=`${e}`.split("-");return(0,$.jsx)("div",{className:_e(["react-flow__panel",n,...a]),style:r,ref:i,...o,children:t})});Lr.displayName="Panel";var td="https://reactflow.dev?utm_source=attribution";function H0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,$.jsx)(Lr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${td}`,children:(0,$.jsx)("a",{href:td,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var B0=e=>{let t=[],n=[];for(let[,r]of e.nodeLookup)r.selected&&t.push(r.internals.userNode);for(let[,r]of e.edgeLookup)r.selected&&n.push(r);return{selectedNodes:t,selectedEdges:n}},Tr=e=>e.id;function $0(e,t){return Me(e.selectedNodes.map(Tr),t.selectedNodes.map(Tr))&&Me(e.selectedEdges.map(Tr),t.selectedEdges.map(Tr))}function F0({onSelectionChange:e}){let t=Se(),{selectedNodes:n,selectedEdges:r}=ge(B0,$0);return(0,B.useEffect)(()=>{let o={nodes:n,edges:r};e?.(o),t.getState().onSelectionChangeHandlers.forEach(i=>i(o))},[n,r,e]),null}var W0=e=>!!e.onSelectionChangeHandlers;function V0({onSelectionChange:e}){let t=ge(W0);return e||t?(0,$.jsx)(F0,{onSelectionChange:e}):null}var Pd=[0,0],G0={x:0,y:0,zoom:1},U0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],nd=[...U0,"rfId"],X0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),od={translateExtent:Vn,nodeOrigin:Pd,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function q0(e){let{setNodes:t,setEdges:n,setMinZoom:r,setMaxZoom:o,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=ge(X0,Me),d=Se();(0,B.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=od,s()}),[]);let u=(0,B.useRef)(od);return(0,B.useEffect)(()=>{for(let l of nd){let p=e[l],m=u.current[l];p!==m&&(typeof e[l]>"u"||(l==="nodes"?t(p):l==="edges"?n(p):l==="minZoom"?r(p):l==="maxZoom"?o(p):l==="translateExtent"?i(p):l==="nodeExtent"?a(p):l==="ariaLabelConfig"?d.setState({ariaLabelConfig:hc(p)}):l==="fitView"?d.setState({fitViewQueued:p}):l==="fitViewOptions"?d.setState({fitViewOptions:p}):d.setState({[l]:p})))}u.current=e},nd.map(l=>e[l])),null}function rd(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function Y0(e){let[t,n]=(0,B.useState)(e==="system"?null:e);return(0,B.useEffect)(()=>{if(e!=="system"){n(e);return}let r=rd(),o=()=>n(r?.matches?"dark":"light");return o(),r?.addEventListener("change",o),()=>{r?.removeEventListener("change",o)}},[e]),t!==null?t:rd()?.matches?"dark":"light"}var id=typeof document<"u"?document:null;function Co(e=null,t={target:id,actInsideInputWithModifier:!0}){let[n,r]=(0,B.useState)(!1),o=(0,B.useRef)(!1),i=(0,B.useRef)(new Set([])),[a,s]=(0,B.useMemo)(()=>{if(e!==null){let d=(Array.isArray(e)?e:[e]).filter(l=>typeof l=="string").map(l=>l.replace("+",`
`).replace(`

`,`
+`).split(`
`)),u=d.reduce((l,p)=>l.concat(...p),[]);return[d,u]}return[[],[]]},[e]);return(0,B.useEffect)(()=>{let c=t?.target??id,d=t?.actInsideInputWithModifier??!0;if(e!==null){let u=m=>{if(o.current=m.ctrlKey||m.metaKey||m.shiftKey||m.altKey,(!o.current||o.current&&!d)&&Ta(m))return!1;let y=sd(m.code,s);if(i.current.add(m[y]),ad(a,i.current,!1)){let h=m.composedPath?.()?.[0]||m.target,b=h?.nodeName==="BUTTON"||h?.nodeName==="A";t.preventDefault!==!1&&(o.current||!b)&&m.preventDefault(),r(!0)}},l=m=>{let f=sd(m.code,s);ad(a,i.current,!0)?(r(!1),i.current.clear()):i.current.delete(m[f]),m.key==="Meta"&&i.current.clear(),o.current=!1},p=()=>{i.current.clear(),r(!1)};return c?.addEventListener("keydown",u),c?.addEventListener("keyup",l),window.addEventListener("blur",p),window.addEventListener("contextmenu",p),()=>{c?.removeEventListener("keydown",u),c?.removeEventListener("keyup",l),window.removeEventListener("blur",p),window.removeEventListener("contextmenu",p)}}},[e,r]),n}function ad(e,t,n){return e.filter(r=>n||r.length===t.size).some(r=>r.every(o=>t.has(o)))}function sd(e,t){return t.includes(e)?"code":"key"}var Z0=()=>{let e=Se();return(0,B.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:r}=e.getState();return r?r.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[r,o,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??r,y:t.y??o,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,r]=e.getState().transform;return{x:t,y:n,zoom:r}},setCenter:async(t,n,r)=>e.getState().setCenter(t,n,r),fitBounds:async(t,n)=>{let{width:r,height:o,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=ko(t,r,o,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:r,snapGrid:o,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),d={x:t.x-s,y:t.y-c},u=n.snapGrid??o,l=n.snapToGrid??i;return qn(d,r,l,u)},flowToScreenPosition:t=>{let{transform:n,domNode:r}=e.getState();if(!r)return t;let{x:o,y:i}=r.getBoundingClientRect(),a=bn(t,n);return{x:a.x+o,y:a.y+i}}}),[])};function zd(e,t){let n=[],r=new Map,o=[];for(let i of e)if(i.type==="add"){o.push(i);continue}else if(i.type==="remove"||i.type==="replace")r.set(i.id,[i]);else{let a=r.get(i.id);a?a.push(i):r.set(i.id,[i])}for(let i of t){let a=r.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)K0(c,s);n.push(s)}return o.length&&o.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function K0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Rd(e,t){return zd(e,t)}function Td(e,t){return zd(e,t)}function xn(e,t){return{id:e,type:"select",selected:t}}function Kn(e,t=new Set,n=!1){let r=[];for(let[o,i]of e){let a=t.has(o);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),r.push(xn(i.id,a)))}return r}function ld({items:e=[],lookup:t}){let n=[],r=new Map(e.map(o=>[o.id,o]));for(let[o,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:o})}for(let[o]of t)r.get(o)===void 0&&n.push({id:o,type:"remove"});return n}function cd(e){return{id:e.id,type:"remove"}}var j0=_a("React Flow","https://reactflow.dev/");function Q0(e,t,n={}){return xc(e,t,{...n,onError:n.onError??j0})}var dd=e=>cc(e),J0=e=>ka(e);function Dd(e){return(0,B.forwardRef)(e)}var Ad=typeof window<"u"?B.useLayoutEffect:B.useEffect;function ud(e){let[t,n]=(0,B.useState)(BigInt(0)),[r]=(0,B.useState)(()=>ex(()=>n(o=>o+BigInt(1))));return Ad(()=>{let o=r.get();o.length&&(e(o),r.reset())},[t]),r}function ex(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Od=(0,B.createContext)(null);function tx({children:e}){let t=Se(),n=(0,B.useCallback)(s=>{let{nodes:c=[],setNodes:d,hasDefaultNodes:u,onNodesChange:l,nodeLookup:p,fitViewQueued:m,onNodesChangeMiddlewareMap:f}=t.getState(),y=c;for(let b of s)y=typeof b=="function"?b(y):b;let h=ld({items:y,lookup:p});for(let b of f.values())h=b(h);u&&d(y),h.length>0?l?.(h):m&&window.requestAnimationFrame(()=>{let{fitViewQueued:b,nodes:x,setNodes:g}=t.getState();b&&g(x)})},[]),r=ud(n),o=(0,B.useCallback)(s=>{let{edges:c=[],setEdges:d,hasDefaultEdges:u,onEdgesChange:l,edgeLookup:p}=t.getState(),m=c;for(let f of s)m=typeof f=="function"?f(m):f;u?d(m):l&&l(ld({items:m,lookup:p}))},[]),i=ud(o),a=(0,B.useMemo)(()=>({nodeQueue:r,edgeQueue:i}),[]);return(0,$.jsx)(Od.Provider,{value:a,children:e})}function nx(){let e=(0,B.useContext)(Od);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var ox=e=>!!e.panZoom;function Xa(){let e=Z0(),t=Se(),n=nx(),r=ge(ox),o=(0,B.useMemo)(()=>{let i=l=>t.getState().nodeLookup.get(l),a=l=>{n.nodeQueue.push(l)},s=l=>{n.edgeQueue.push(l)},c=l=>{let{nodeLookup:p,nodeOrigin:m}=t.getState(),f=dd(l)?l:p.get(l.id),y=f.parentId?Pa(f.position,f.measured,f.parentId,p,m):f.position,h={...f,position:y,width:f.measured?.width??f.width,height:f.measured?.height??f.height};return Un(h)},d=(l,p,m={replace:!1})=>{a(f=>f.map(y=>{if(y.id===l){let h=typeof p=="function"?p(y):p;return m.replace&&dd(h)?h:{...y,...h}}return y}))},u=(l,p,m={replace:!1})=>{s(f=>f.map(y=>{if(y.id===l){let h=typeof p=="function"?p(y):p;return m.replace&&J0(h)?h:{...y,...h}}return y}))};return{getNodes:()=>t.getState().nodes.map(l=>({...l})),getNode:l=>i(l)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:l=[]}=t.getState();return l.map(p=>({...p}))},getEdge:l=>t.getState().edgeLookup.get(l),setNodes:a,setEdges:s,addNodes:l=>{let p=Array.isArray(l)?l:[l];n.nodeQueue.push(m=>[...m,...p])},addEdges:l=>{let p=Array.isArray(l)?l:[l];n.edgeQueue.push(m=>[...m,...p])},toObject:()=>{let{nodes:l=[],edges:p=[],transform:m}=t.getState(),[f,y,h]=m;return{nodes:l.map(b=>({...b})),edges:p.map(b=>({...b})),viewport:{x:f,y,zoom:h}}},deleteElements:async({nodes:l=[],edges:p=[]})=>{let{nodes:m,edges:f,onNodesDelete:y,onEdgesDelete:h,triggerNodeChanges:b,triggerEdgeChanges:x,onDelete:g,onBeforeDelete:w}=t.getState(),{nodes:k,edges:S}=await pc({nodesToRemove:l,edgesToRemove:p,nodes:m,edges:f,onBeforeDelete:w}),N=S.length>0,C=k.length>0;if(N){let M=S.map(cd);h?.(S),x(M)}if(C){let M=k.map(cd);y?.(k),b(M)}return(C||N)&&g?.({nodes:k,edges:S}),{deletedNodes:k,deletedEdges:S}},getIntersectingNodes:(l,p=!0,m)=>{let f=Ea(l),y=f?l:c(l),h=m!==void 0;return y?(m||t.getState().nodes).filter(b=>{let x=t.getState().nodeLookup.get(b.id);if(x&&!f&&(b.id===l.id||!x.internals.positionAbsolute))return!1;let g=Un(h?b:x),w=vo(g,y);return p&&w>0||w>=g.width*g.height||w>=y.width*y.height}):[]},isNodeIntersecting:(l,p,m=!0)=>{let y=Ea(l)?l:c(l);if(!y)return!1;let h=vo(y,p);return m&&h>0||h>=p.width*p.height||h>=y.width*y.height},updateNode:d,updateNodeData:(l,p,m={replace:!1})=>{d(l,f=>{let y=typeof p=="function"?p(f):p;return m.replace?{...f,data:y}:{...f,data:{...f.data,...y}}},m)},updateEdge:u,updateEdgeData:(l,p,m={replace:!1})=>{u(l,f=>{let y=typeof p=="function"?p(f):p;return m.replace?{...f,data:y}:{...f,data:{...f.data,...y}}},m)},getNodesBounds:l=>{let{nodeLookup:p,nodeOrigin:m}=t.getState();return Ca(l,{nodeLookup:p,nodeOrigin:m})},getHandleConnections:({type:l,id:p,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}-${l}${p?`-${p}`:""}`)?.values()??[]),getNodeConnections:({type:l,handleId:p,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}${l?p?`-${l}-${p}`:`-${l}`:""}`)?.values()??[]),fitView:async l=>{let p=t.getState().fitViewResolver??gc();return t.setState({fitViewQueued:!0,fitViewOptions:l,fitViewResolver:p}),n.nodeQueue.push(m=>[...m]),p.promise}}},[]);return(0,B.useMemo)(()=>({...o,...e,viewportInitialized:r}),[r])}var pd=e=>e.selected,rx=typeof window<"u"?window:void 0;function ix({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=Se(),{deleteElements:r}=Xa(),o=Co(e,{actInsideInputWithModifier:!1}),i=Co(t,{target:rx});(0,B.useEffect)(()=>{if(o){let{edges:a,nodes:s}=n.getState();r({nodes:s.filter(pd),edges:a.filter(pd)}),n.setState({nodesSelectionActive:!1})}},[o]),(0,B.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function ax(e){let t=Se();(0,B.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let r=Sr(e.current);(r.height===0||r.width===0)&&t.getState().onError?.("004",tt.error004()),t.setState({width:r.width||500,height:r.height||500})};if(e.current){n(),window.addEventListener("resize",n);let r=new ResizeObserver(()=>n());return r.observe(e.current),()=>{window.removeEventListener("resize",n),r&&e.current&&r.unobserve(e.current)}}},[])}var Hr={position:"absolute",width:"100%",height:"100%",top:0,left:0},sx=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function lx({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:r=!1,panOnScrollSpeed:o=.5,panOnScrollMode:i=Ht.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:d,minZoom:u,maxZoom:l,zoomActivationKeyCode:p,preventScrolling:m=!0,children:f,noWheelClassName:y,noPanClassName:h,onViewportChange:b,isControlledViewport:x,paneClickDistance:g,selectionOnDrag:w}){let k=Se(),S=(0,B.useRef)(null),{userSelectionActive:N,lib:C,connectionInProgress:M}=ge(sx,Me),O=Co(p),D=(0,B.useRef)();ax(S);let L=(0,B.useCallback)(T=>{b?.({x:T[0],y:T[1],zoom:T[2]}),x||k.setState({transform:T})},[b,x]);return(0,B.useEffect)(()=>{if(S.current){D.current=Oc({domNode:S.current,minZoom:u,maxZoom:l,translateExtent:d,viewport:c,onDraggingChange:z=>k.setState(I=>I.paneDragging===z?I:{paneDragging:z}),onPanZoomStart:(z,I)=>{let{onViewportChangeStart:_,onMoveStart:R}=k.getState();R?.(z,I),_?.(I)},onPanZoom:(z,I)=>{let{onViewportChange:_,onMove:R}=k.getState();R?.(z,I),_?.(I)},onPanZoomEnd:(z,I)=>{let{onViewportChangeEnd:_,onMoveEnd:R}=k.getState();R?.(z,I),_?.(I)}});let{x:T,y:v,zoom:E}=D.current.getViewport();return k.setState({panZoom:D.current,transform:[T,v,E],domNode:S.current.closest(".react-flow")}),()=>{D.current?.destroy()}}},[]),(0,B.useEffect)(()=>{D.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:r,panOnScrollSpeed:o,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:O,preventScrolling:m,noPanClassName:h,userSelectionActive:N,noWheelClassName:y,lib:C,onTransformChange:L,connectionInProgress:M,selectionOnDrag:w,paneClickDistance:g})},[e,t,n,r,o,i,a,s,O,m,h,N,y,C,L,M,w,g]),(0,$.jsx)("div",{className:"react-flow__renderer",ref:S,style:Hr,children:f})}var cx=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function dx(){let{userSelectionActive:e,userSelectionRect:t}=ge(cx,Me);return e&&t?(0,$.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Va=(e,t)=>n=>{n.target===t.current&&e?.(n)},ux=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function px({isSelecting:e,selectionKeyPressed:t,selectionMode:n=gn.Full,panOnDrag:r,autoPanOnSelection:o,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:d,onPaneContextMenu:u,onPaneScroll:l,onPaneMouseEnter:p,onPaneMouseMove:m,onPaneMouseLeave:f,children:y}){let h=(0,B.useRef)(0),b=Se(),{userSelectionActive:x,elementsSelectable:g,dragging:w,panBy:k,autoPanSpeed:S}=ge(ux,Me),N=g&&(e||x),C=(0,B.useRef)(null),M=(0,B.useRef)(),O=(0,B.useRef)(new Set),D=(0,B.useRef)(new Set),L=(0,B.useRef)(!1),T=(0,B.useRef)(!1),v=(0,B.useRef)({x:0,y:0}),E=(0,B.useRef)(!1),z=P=>{if(T.current||L.current||b.getState().connection.inProgress){T.current=!1,L.current=!1;return}d?.(P),b.getState().resetSelectedElements(),b.setState({nodesSelectionActive:!1})},I=P=>{if(Array.isArray(r)&&r?.includes(2)){P.preventDefault();return}u?.(P)},_=l?P=>l(P):void 0,R=P=>{T.current&&(P.stopPropagation(),T.current=!1)},V=P=>{let{domNode:X,transform:oe}=b.getState();if(M.current=X?.getBoundingClientRect(),!M.current)return;let re=P.target===C.current;if(!re&&!!P.target.closest(".nokey")||!e||!(a&&re||t)||P.button!==0||!P.isPrimary)return;P.target?.setPointerCapture?.(P.pointerId),T.current=!1;let{x:ue,y:Q}=rt(P.nativeEvent,M.current),q=qn({x:ue,y:Q},oe);b.setState({userSelectionRect:{width:0,height:0,startX:q.x,startY:q.y,x:ue,y:Q}}),re||(P.stopPropagation(),P.preventDefault())};function W(P,X){let{userSelectionRect:oe}=b.getState();if(!oe)return;let{transform:re,nodeLookup:j,edgeLookup:ne,connectionLookup:ue,triggerNodeChanges:Q,triggerEdgeChanges:q,defaultEdgeOptions:de}=b.getState(),be={x:oe.startX,y:oe.startY},{x:Ee,y:Te}=bn(be,re),je={startX:be.x,startY:be.y,x:P<Ee?P:Ee,y:X<Te?X:Te,width:Math.abs(P-Ee),height:Math.abs(X-Te)},Wt=O.current,_t=D.current;O.current=new Set(xr(j,je,re,n===gn.Partial,!0).map(Qe=>Qe.id)),D.current=new Set;let It=de?.selectable??!0;for(let Qe of O.current){let lt=ue.get(Qe);if(lt)for(let{edgeId:ct}of lt.values()){let Je=ne.get(ct);Je&&(Je.selectable??It)&&D.current.add(ct)}}if(!za(Wt,O.current)){let Qe=Kn(j,O.current,!0);Q(Qe)}if(!za(_t,D.current)){let Qe=Kn(ne,D.current);q(Qe)}b.setState({userSelectionRect:je,userSelectionActive:!0,nodesSelectionActive:!1})}function F(){if(!o||!M.current)return;let[P,X]=wr(v.current,M.current,S);k({x:P,y:X}).then(oe=>{if(!T.current||!oe){h.current=requestAnimationFrame(F);return}let{x:re,y:j}=v.current;W(re,j),h.current=requestAnimationFrame(F)})}let Z=()=>{cancelAnimationFrame(h.current),h.current=0,E.current=!1};(0,B.useEffect)(()=>()=>Z(),[]);let H=P=>{let{userSelectionRect:X,transform:oe,resetSelectedElements:re}=b.getState();if(!M.current||!X)return;let{x:j,y:ne}=rt(P.nativeEvent,M.current);v.current={x:j,y:ne};let ue=bn({x:X.startX,y:X.startY},oe);if(!T.current){let Q=t?0:i;if(Math.hypot(j-ue.x,ne-ue.y)<=Q)return;re(),s?.(P)}T.current=!0,E.current||(F(),E.current=!0),W(j,ne)},G=P=>{if(!N){P.target===C.current&&b.getState().connection.inProgress&&(L.current=!0);return}P.button===0&&(P.target?.releasePointerCapture?.(P.pointerId),!x&&P.target===C.current&&b.getState().userSelectionRect&&z?.(P),b.setState({userSelectionActive:!1,userSelectionRect:null}),T.current&&(c?.(P),b.setState({nodesSelectionActive:O.current.size>0})),Z())},te=P=>{P.target?.releasePointerCapture?.(P.pointerId),Z()},ee=r===!0||Array.isArray(r)&&r.includes(0);return(0,$.jsxs)("div",{className:_e(["react-flow__pane",{draggable:ee,dragging:w,selection:e}]),onClick:N?void 0:Va(z,C),onContextMenu:Va(I,C),onWheel:Va(_,C),onPointerEnter:N?void 0:p,onPointerMove:N?H:m,onPointerUp:G,onPointerCancel:N?te:void 0,onPointerDownCapture:N?V:void 0,onClickCapture:N?R:void 0,onPointerLeave:f,ref:C,style:Hr,children:[y,(0,$.jsx)(dx,{})]})}function Ua({id:e,store:t,unselect:n=!1,nodeRef:r}){let{addSelectedNodes:o,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),d=s.get(e);if(!d){c?.("012",tt.error012(e));return}t.setState({nodesSelectionActive:!1}),d.selected?(n||d.selected&&a)&&(i({nodes:[d],edges:[]}),requestAnimationFrame(()=>r?.current?.blur())):o([e])}function Ld({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:r,nodeId:o,isSelectable:i,nodeClickDistance:a}){let s=Se(),[c,d]=(0,B.useState)(!1),u=(0,B.useRef)();return(0,B.useEffect)(()=>{if(!t)return u.current=_c({getStoreItems:()=>s.getState(),onNodeMouseDown:l=>{Ua({id:l,store:s,nodeRef:e})},onDragStart:()=>{d(!0)},onDragStop:()=>{d(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,s,e]),(0,B.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:r,domNode:e.current,isSelectable:i,nodeId:o,nodeClickDistance:a})},[n,r,t,i,e,o,a]),c}var mx=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Hd(){let e=Se();return(0,B.useCallback)(n=>{let{nodeExtent:r,snapToGrid:o,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:d,nodeOrigin:u}=e.getState(),l=new Map,p=mx(a),m=o?i[0]:5,f=o?i[1]:5,y=n.direction.x*m*n.factor,h=n.direction.y*f*n.factor;for(let[,b]of d){if(!p(b))continue;let x={x:b.internals.positionAbsolute.x+y,y:b.internals.positionAbsolute.y+h};o&&(x=Xn(x,i));let{position:g,positionAbsolute:w}=Na({nodeId:b.id,nextPosition:x,nodeLookup:d,nodeExtent:r,nodeOrigin:u,onError:s});b.position=g,b.internals.positionAbsolute=w,l.set(b.id,b)}c(l)},[])}var qa=(0,B.createContext)(null),fx=qa.Provider;qa.Consumer;var Bd=()=>(0,B.useContext)(qa),gx=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),$d=(0,B.createContext)(null);function hx({children:e}){let t=ge(gx,Me);return(0,$.jsx)($d.Provider,{value:t,children:e})}function bx(){let e=(0,B.useContext)($d);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var yx={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},xx=(e,t,n)=>r=>{let{connectionClickStartHandle:o,connectionMode:i,connection:a}=r,{fromHandle:s,toHandle:c,isValid:d}=a;if(!s&&!o)return yx;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:u,clickConnecting:o?.nodeId===e&&o?.id===t&&o?.type===n,isPossibleEndHandle:i===qt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!o,valid:u&&d}};function wx({type:e="source",position:t=ie.Top,isValidConnection:n,isConnectable:r=!0,isConnectableStart:o=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:d,onMouseDown:u,onTouchStart:l,...p},m){let f=a||null,y=e==="target",h=Se(),b=Bd(),{connectOnClick:x,noPanClassName:g,rfId:w}=bx(),{connectingFrom:k,connectingTo:S,clickConnecting:N,isPossibleEndHandle:C,connectionInProcess:M,clickConnectionInProcess:O,valid:D}=ge(xx(b,f,e),Me);b||h.getState().onError?.("010",tt.error010());let L=E=>{let{defaultEdgeOptions:z,onConnect:I,hasDefaultEdges:_}=h.getState(),R={...z,...E};if(_){let{edges:V,setEdges:W,onError:F}=h.getState();W(Q0(R,V,{onError:F}))}I?.(R),s?.(R)},T=E=>{if(!b)return;let z=Da(E.nativeEvent);if(o&&(z&&E.button===0||!z)){let I=h.getState();Pr.onPointerDown(E.nativeEvent,{handleDomNode:E.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:y,handleId:f,nodeId:b,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(..._)=>h.getState().onConnectEnd?.(..._),updateConnection:I.updateConnection,onConnect:L,isValidConnection:n||((..._)=>h.getState().isValidConnection?.(..._)??!0),getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}z?u?.(E):l?.(E)},v=E=>{let{onClickConnectStart:z,onClickConnectEnd:I,connectionClickStartHandle:_,connectionMode:R,isValidConnection:V,lib:W,rfId:F,nodeLookup:Z,connection:H}=h.getState();if(!b||!_&&!o)return;if(!_){z?.(E.nativeEvent,{nodeId:b,handleId:f,handleType:e}),h.setState({connectionClickStartHandle:{nodeId:b,type:e,id:f}});return}let G=Ra(E.target),te=n||V,{connection:ee,isValid:P}=Pr.isValid(E.nativeEvent,{handle:{nodeId:b,id:f,type:e},connectionMode:R,fromNodeId:_.nodeId,fromHandleId:_.id||null,fromType:_.type,isValidConnection:te,flowId:F,doc:G,lib:W,nodeLookup:Z});P&&ee&&L(ee);let X=structuredClone(H);delete X.inProgress,X.toPosition=X.toHandle?X.toHandle.position:null,I?.(E,X),h.setState({connectionClickStartHandle:null})};return(0,$.jsx)("div",{"data-handleid":f,"data-nodeid":b,"data-handlepos":t,"data-id":`${w}-${b}-${f}-${e}`,className:_e(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",g,d,{source:!y,target:y,connectable:r,connectablestart:o,connectableend:i,clickconnecting:N,connectingfrom:k,connectingto:S,valid:D,connectionindicator:r&&(!M||C)&&(M||O?i:o)}]),onMouseDown:T,onTouchStart:T,onClick:x?v:void 0,ref:m,...p,children:c})}var wn=(0,B.memo)(Dd(wx));function vx({data:e,isConnectable:t,sourcePosition:n=ie.Bottom}){return(0,$.jsxs)($.Fragment,{children:[e?.label,(0,$.jsx)(wn,{type:"source",position:n,isConnectable:t})]})}function kx({data:e,isConnectable:t,targetPosition:n=ie.Top,sourcePosition:r=ie.Bottom}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label,(0,$.jsx)(wn,{type:"source",position:r,isConnectable:t})]})}function Sx(){return null}function Cx({data:e,isConnectable:t,targetPosition:n=ie.Top}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label]})}var Ar={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},md={input:vx,default:kx,output:Cx,group:Sx};function Nx(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Mx=e=>{let{width:t,height:n,x:r,y:o}=Gn(e.nodeLookup,{filter:i=>!!i.selected});return{width:ot(t)?t:null,height:ot(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`}};function Ex({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let r=Se(),{width:o,height:i,transformString:a,userSelectionActive:s}=ge(Mx,Me),c=Hd(),d=(0,B.useRef)(null);(0,B.useEffect)(()=>{n||d.current?.focus({preventScroll:!0})},[n]);let u=!s&&o!==null&&i!==null;if(Ld({nodeRef:d,disabled:!u}),!u)return null;let l=e?m=>{let f=r.getState().nodes.filter(y=>y.selected);e(m,f)}:void 0,p=m=>{Object.prototype.hasOwnProperty.call(Ar,m.key)&&(m.preventDefault(),c({direction:Ar[m.key],factor:m.shiftKey?4:1}))};return(0,$.jsx)("div",{className:_e(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,$.jsx)("div",{ref:d,className:"react-flow__nodesselection-rect",onContextMenu:l,tabIndex:n?void 0:-1,onKeyDown:n?void 0:p,style:{width:o,height:i}})})}var fd=typeof window<"u"?window:void 0,_x=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Fd({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:d,selectionOnDrag:u,selectionMode:l,onSelectionStart:p,onSelectionEnd:m,multiSelectionKeyCode:f,panActivationKeyCode:y,zoomActivationKeyCode:h,elementsSelectable:b,zoomOnScroll:x,zoomOnPinch:g,panOnScroll:w,panOnScrollSpeed:k,panOnScrollMode:S,zoomOnDoubleClick:N,panOnDrag:C,autoPanOnSelection:M,defaultViewport:O,translateExtent:D,minZoom:L,maxZoom:T,preventScrolling:v,onSelectionContextMenu:E,noWheelClassName:z,noPanClassName:I,disableKeyboardA11y:_,onViewportChange:R,isControlledViewport:V}){let{nodesSelectionActive:W,userSelectionActive:F}=ge(_x,Me),Z=Co(d,{target:fd}),H=Co(y,{target:fd}),G=H||C,te=H||w,ee=u&&G!==!0,P=Z||F||ee;return ix({deleteKeyCode:c,multiSelectionKeyCode:f}),(0,$.jsx)(lx,{onPaneContextMenu:i,elementsSelectable:b,zoomOnScroll:x,zoomOnPinch:g,panOnScroll:te,panOnScrollSpeed:k,panOnScrollMode:S,zoomOnDoubleClick:N,panOnDrag:!Z&&G,defaultViewport:O,translateExtent:D,minZoom:L,maxZoom:T,zoomActivationKeyCode:h,preventScrolling:v,noWheelClassName:z,noPanClassName:I,onViewportChange:R,isControlledViewport:V,paneClickDistance:s,selectionOnDrag:ee,children:(0,$.jsxs)(px,{onSelectionStart:p,onSelectionEnd:m,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:G,autoPanOnSelection:M,isSelecting:!!P,selectionMode:l,selectionKeyPressed:Z,paneClickDistance:s,selectionOnDrag:ee,children:[e,W&&(0,$.jsx)(Ex,{onSelectionContextMenu:E,noPanClassName:I,disableKeyboardA11y:_})]})})}Fd.displayName="FlowRenderer";var Ix=(0,B.memo)(Fd),Px=e=>t=>e?xr(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function zx(e){return ge((0,B.useCallback)(Px(e),[e]),Me)}var Rx=e=>e.updateNodeInternals;function Tx(){let e=ge(Rx),[t]=(0,B.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let r=new Map;n.forEach(o=>{let i=o.target.getAttribute("data-id");r.set(i,{id:i,nodeElement:o.target,force:!0})}),e(r)}));return(0,B.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Dx({node:e,nodeType:t,hasDimensions:n,resizeObserver:r}){let o=Se(),i=(0,B.useRef)(null),a=(0,B.useRef)(null),s=(0,B.useRef)(e.sourcePosition),c=(0,B.useRef)(e.targetPosition),d=(0,B.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,B.useEffect)(()=>{i.current&&!e.hidden&&(!u||a.current!==i.current)&&(a.current&&r?.unobserve(a.current),r?.observe(i.current),a.current=i.current)},[u,e.hidden]),(0,B.useEffect)(()=>()=>{a.current&&(r?.unobserve(a.current),a.current=null)},[]),(0,B.useEffect)(()=>{if(i.current){let l=d.current!==t,p=s.current!==e.sourcePosition,m=c.current!==e.targetPosition;(l||p||m)&&(d.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,o.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function Ax({id:e,onClick:t,onMouseEnter:n,onMouseMove:r,onMouseLeave:o,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:d,nodesFocusable:u,resizeObserver:l,noDragClassName:p,noPanClassName:m,disableKeyboardA11y:f,rfId:y,nodeTypes:h,nodeClickDistance:b,onError:x}){let{node:g,internals:w,isParent:k}=ge(P=>{let X=P.nodeLookup.get(e),oe=P.parentLookup.has(e);return{node:X,internals:X.internals,isParent:oe}},Me),S=g.type||"default",N=h?.[S]||md[S];N===void 0&&(x?.("003",tt.error003(S)),S="default",N=h?.default||md.default);let C=!!(g.draggable||s&&typeof g.draggable>"u"),M=!!(g.selectable||c&&typeof g.selectable>"u"),O=!!(g.connectable||d&&typeof g.connectable>"u"),D=!!(g.focusable||u&&typeof g.focusable>"u"),L=Se(),T=Ia(g),v=Dx({node:g,nodeType:S,hasDimensions:T,resizeObserver:l}),E=Ld({nodeRef:v,disabled:g.hidden||!C,noDragClassName:p,handleSelector:g.dragHandle,nodeId:e,isSelectable:M,nodeClickDistance:b}),z=Hd();if(g.hidden)return null;let I=ft(g),_=Nx(g),R=M||C||t||n||r||o,V=n?P=>n(P,{...w.userNode}):void 0,W=r?P=>r(P,{...w.userNode}):void 0,F=o?P=>o(P,{...w.userNode}):void 0,Z=i?P=>i(P,{...w.userNode}):void 0,H=a?P=>a(P,{...w.userNode}):void 0,G=P=>{let{selectNodesOnDrag:X,nodeDragThreshold:oe}=L.getState();M&&(!X||!C||oe>0)&&Ua({id:e,store:L,nodeRef:v}),t&&t(P,{...w.userNode})},te=P=>{if(!(Ta(P.nativeEvent)||f)){if(ya.includes(P.key)&&M){let X=P.key==="Escape";Ua({id:e,store:L,unselect:X,nodeRef:v})}else if(C&&g.selected&&Object.prototype.hasOwnProperty.call(Ar,P.key)){P.preventDefault();let{ariaLabelConfig:X}=L.getState();L.setState({ariaLiveMessage:X["node.a11yDescription.ariaLiveMessage"]({direction:P.key.replace("Arrow","").toLowerCase(),x:~~w.positionAbsolute.x,y:~~w.positionAbsolute.y})}),z({direction:Ar[P.key],factor:P.shiftKey?4:1})}}},ee=()=>{if(f||!v.current?.matches(":focus-visible"))return;let{transform:P,width:X,height:oe,autoPanOnNodeFocus:re,setCenter:j}=L.getState();if(!re)return;xr(new Map([[e,g]]),{x:0,y:0,width:X,height:oe},P,!0).length>0||j(g.position.x+I.width/2,g.position.y+I.height/2,{zoom:P[2]})};return(0,$.jsx)("div",{className:_e(["react-flow__node",`react-flow__node-${S}`,{[m]:C},g.className,{selected:g.selected,selectable:M,parent:k,draggable:C,dragging:E}]),ref:v,style:{zIndex:w.z,transform:`translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,pointerEvents:R?"all":"none",visibility:T?"visible":"hidden",...g.style,..._},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:W,onMouseLeave:F,onContextMenu:Z,onClick:G,onDoubleClick:H,onKeyDown:D?te:void 0,tabIndex:D?0:void 0,onFocus:D?ee:void 0,role:g.ariaRole??(D?"group":void 0),"aria-roledescription":"node","aria-describedby":f?void 0:`${_d}-${y}`,"aria-label":g.ariaLabel,...g.domAttributes,children:(0,$.jsx)(fx,{value:e,children:(0,$.jsx)(N,{id:e,data:g.data,type:S,positionAbsoluteX:w.positionAbsolute.x,positionAbsoluteY:w.positionAbsolute.y,selected:g.selected??!1,selectable:M,draggable:C,deletable:g.deletable??!0,isConnectable:O,sourcePosition:g.sourcePosition,targetPosition:g.targetPosition,dragging:E,dragHandle:g.dragHandle,zIndex:w.z,parentId:g.parentId,...I})})})}var Ox=(0,B.memo)(Ax),Lx=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Wd(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:r,onError:o}=ge(Lx,Me),i=zx(e.onlyRenderVisibleElements),a=Tx();return(0,$.jsx)("div",{className:"react-flow__nodes",style:Hr,children:i.map(s=>(0,$.jsx)(Ox,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:r,nodeClickDistance:e.nodeClickDistance,onError:o},s))})}Wd.displayName="NodeRenderer";var Hx=(0,B.memo)(Wd);function Bx(e){return ge((0,B.useCallback)(n=>{if(!e)return n.edges.map(o=>o.id);let r=[];if(n.width&&n.height)for(let o of n.edges){let i=n.nodeLookup.get(o.source),a=n.nodeLookup.get(o.target);i&&a&&yc({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&r.push(o.id)}return r},[e]),Me)}var $x=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,$.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Fx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,$.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},gd={[Fn.Arrow]:$x,[Fn.ArrowClosed]:Fx};function Wx(e){let t=Se();return(0,B.useMemo)(()=>Object.prototype.hasOwnProperty.call(gd,e)?gd[e]:(t.getState().onError?.("009",tt.error009(e)),null),[e])}var Vx=({id:e,type:t,color:n,width:r=12.5,height:o=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=Wx(t);return c?(0,$.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${r}`,markerHeight:`${o}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,$.jsx)(c,{color:n,strokeWidth:a})}):null},Vd=({defaultColor:e,rfId:t})=>{let n=ge(i=>i.edges),r=ge(i=>i.defaultEdgeOptions),o=(0,B.useMemo)(()=>vc(n,{id:t,defaultColor:e,defaultMarkerStart:r?.markerStart,defaultMarkerEnd:r?.markerEnd}),[n,r,t,e]);return o.length?(0,$.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,$.jsx)("defs",{children:o.map(i=>(0,$.jsx)(Vx,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Vd.displayName="MarkerDefinitions";var Gx=(0,B.memo)(Vd);function Gd({x:e,y:t,label:n,labelStyle:r,labelShowBg:o=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:d,...u}){let[l,p]=(0,B.useState)({x:1,y:0,width:0,height:0}),m=_e(["react-flow__edge-textwrapper",d]),f=(0,B.useRef)(null);return(0,B.useEffect)(()=>{if(f.current){let y=f.current.getBBox();p({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,$.jsxs)("g",{transform:`translate(${e-l.width/2} ${t-l.height/2})`,className:m,visibility:l.width?"visible":"hidden",...u,children:[o&&(0,$.jsx)("rect",{width:l.width+2*a[0],x:-a[0],y:-a[1],height:l.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,$.jsx)("text",{className:"react-flow__edge-text",y:l.height/2,dy:"0.3em",ref:f,style:r,children:n}),c]}):null}Gd.displayName="EdgeText";var Ux=(0,B.memo)(Gd);function Br({path:e,labelX:t,labelY:n,label:r,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:d=20,...u}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("path",{...u,d:e,fill:"none",className:_e(["react-flow__edge-path",u.className])}),d?(0,$.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:d,className:"react-flow__edge-interaction"}):null,r&&ot(t)&&ot(n)?(0,$.jsx)(Ux,{x:t,y:n,label:r,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function hd({pos:e,x1:t,y1:n,x2:r,y2:o}){return e===ie.Left||e===ie.Right?[.5*(t+r),n]:[t,.5*(n+o)]}function Ud({sourceX:e,sourceY:t,sourcePosition:n=ie.Bottom,targetX:r,targetY:o,targetPosition:i=ie.Top}){let[a,s]=hd({pos:n,x1:e,y1:t,x2:r,y2:o}),[c,d]=hd({pos:i,x1:r,y1:o,x2:e,y2:t}),[u,l,p,m]=Cr({sourceX:e,sourceY:t,targetX:r,targetY:o,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:d});return[`M${e},${t} C${a},${s} ${c},${d} ${r},${o}`,u,l,p,m]}function Xd(e){return(0,B.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:d,labelShowBg:u,labelBgStyle:l,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,interactionWidth:b})=>{let[x,g,w]=Ud({sourceX:n,sourceY:r,sourcePosition:a,targetX:o,targetY:i,targetPosition:s}),k=e.isInternal?void 0:t;return(0,$.jsx)(Br,{id:k,path:x,labelX:g,labelY:w,label:c,labelStyle:d,labelShowBg:u,labelBgStyle:l,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,interactionWidth:b})})}var Xx=Xd({isInternal:!1}),qd=Xd({isInternal:!0});Xx.displayName="SimpleBezierEdge";qd.displayName="SimpleBezierEdgeInternal";function Yd(e){return(0,B.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:l,style:p,sourcePosition:m=ie.Bottom,targetPosition:f=ie.Top,markerEnd:y,markerStart:h,pathOptions:b,interactionWidth:x})=>{let[g,w,k]=So({sourceX:n,sourceY:r,sourcePosition:m,targetX:o,targetY:i,targetPosition:f,borderRadius:b?.borderRadius,offset:b?.offset,stepPosition:b?.stepPosition}),S=e.isInternal?void 0:t;return(0,$.jsx)(Br,{id:S,path:g,labelX:w,labelY:k,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:l,style:p,markerEnd:y,markerStart:h,interactionWidth:x})})}var Zd=Yd({isInternal:!1}),Kd=Yd({isInternal:!0});Zd.displayName="SmoothStepEdge";Kd.displayName="SmoothStepEdgeInternal";function jd(e){return(0,B.memo)(({id:t,...n})=>{let r=e.isInternal?void 0:t;return(0,$.jsx)(Zd,{...n,id:r,pathOptions:(0,B.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var qx=jd({isInternal:!1}),Qd=jd({isInternal:!0});qx.displayName="StepEdge";Qd.displayName="StepEdgeInternal";function Jd(e){return(0,B.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:l,style:p,markerEnd:m,markerStart:f,interactionWidth:y})=>{let[h,b,x]=Mr({sourceX:n,sourceY:r,targetX:o,targetY:i}),g=e.isInternal?void 0:t;return(0,$.jsx)(Br,{id:g,path:h,labelX:b,labelY:x,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:d,labelBgPadding:u,labelBgBorderRadius:l,style:p,markerEnd:m,markerStart:f,interactionWidth:y})})}var Yx=Jd({isInternal:!1}),eu=Jd({isInternal:!0});Yx.displayName="StraightEdge";eu.displayName="StraightEdgeInternal";function tu(e){return(0,B.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,sourcePosition:a=ie.Bottom,targetPosition:s=ie.Top,label:c,labelStyle:d,labelShowBg:u,labelBgStyle:l,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,pathOptions:b,interactionWidth:x})=>{let[g,w,k]=Nr({sourceX:n,sourceY:r,sourcePosition:a,targetX:o,targetY:i,targetPosition:s,curvature:b?.curvature}),S=e.isInternal?void 0:t;return(0,$.jsx)(Br,{id:S,path:g,labelX:w,labelY:k,label:c,labelStyle:d,labelShowBg:u,labelBgStyle:l,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,interactionWidth:x})})}var Zx=tu({isInternal:!1}),nu=tu({isInternal:!0});Zx.displayName="BezierEdge";nu.displayName="BezierEdgeInternal";var bd={default:nu,straight:eu,step:Qd,smoothstep:Kd,simplebezier:qd},yd={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Kx=(e,t,n)=>n===ie.Left?e-t:n===ie.Right?e+t:e,jx=(e,t,n)=>n===ie.Top?e-t:n===ie.Bottom?e+t:e,xd="react-flow__edgeupdater";function wd({position:e,centerX:t,centerY:n,radius:r=10,onMouseDown:o,onMouseEnter:i,onMouseOut:a,type:s}){return(0,$.jsx)("circle",{onMouseDown:o,onMouseEnter:i,onMouseOut:a,className:_e([xd,`${xd}-${s}`]),cx:Kx(t,r,e),cy:jx(n,r,e),r,stroke:"transparent",fill:"transparent"})}function Qx({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:r,sourceY:o,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:d,onReconnectStart:u,onReconnectEnd:l,setReconnecting:p,setUpdateHover:m}){let f=Se(),y=(w,k)=>{if(w.button!==0)return;let{autoPanOnConnect:S,domNode:N,connectionMode:C,connectionRadius:M,lib:O,onConnectStart:D,cancelConnection:L,nodeLookup:T,rfId:v,panBy:E,updateConnection:z}=f.getState(),I=k.type==="target",_=(W,F)=>{p(!1),l?.(W,n,k.type,F)},R=W=>d?.(n,W),V=(W,F)=>{p(!0),u?.(w,n,k.type),D?.(W,F)};Pr.onPointerDown(w.nativeEvent,{autoPanOnConnect:S,connectionMode:C,connectionRadius:M,domNode:N,handleId:k.id,nodeId:k.nodeId,nodeLookup:T,isTarget:I,edgeUpdaterType:k.type,lib:O,flowId:v,cancelConnection:L,panBy:E,isValidConnection:(...W)=>f.getState().isValidConnection?.(...W)??!0,onConnect:R,onConnectStart:V,onConnectEnd:(...W)=>f.getState().onConnectEnd?.(...W),onReconnectEnd:_,updateConnection:z,getTransform:()=>f.getState().transform,getFromHandle:()=>f.getState().connection.fromHandle,dragThreshold:f.getState().connectionDragThreshold,handleDomNode:w.currentTarget})},h=w=>y(w,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),b=w=>y(w,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),x=()=>m(!0),g=()=>m(!1);return(0,$.jsxs)($.Fragment,{children:[(e===!0||e==="source")&&(0,$.jsx)(wd,{position:s,centerX:r,centerY:o,radius:t,onMouseDown:h,onMouseEnter:x,onMouseOut:g,type:"source"}),(e===!0||e==="target")&&(0,$.jsx)(wd,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:b,onMouseEnter:x,onMouseOut:g,type:"target"})]})}function Jx({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:r,onClick:o,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:d,reconnectRadius:u,onReconnect:l,onReconnectStart:p,onReconnectEnd:m,rfId:f,edgeTypes:y,noPanClassName:h,onError:b,disableKeyboardA11y:x}){let g=ge(j=>j.edgeLookup.get(e)),w=ge(j=>j.defaultEdgeOptions);g=w?{...w,...g}:g;let k=g.type||"default",S=y?.[k]||bd[k];S===void 0&&(b?.("011",tt.error011(k)),k="default",S=y?.default||bd.default);let N=!!(g.focusable||t&&typeof g.focusable>"u"),C=typeof l<"u"&&(g.reconnectable||n&&typeof g.reconnectable>"u"),M=!!(g.selectable||r&&typeof g.selectable>"u"),O=(0,B.useRef)(null),[D,L]=(0,B.useState)(!1),[T,v]=(0,B.useState)(!1),E=Se(),{zIndex:z=g.zIndex,sourceX:I,sourceY:_,targetX:R,targetY:V,sourcePosition:W,targetPosition:F}=ge((0,B.useCallback)(j=>{let ne=j.nodeLookup.get(g.source),ue=j.nodeLookup.get(g.target);if(!ne||!ue)return yd;let Q=wc({id:e,sourceNode:ne,targetNode:ue,sourceHandle:g.sourceHandle||null,targetHandle:g.targetHandle||null,connectionMode:j.connectionMode,onError:b}),q=bc({selected:g.selected,zIndex:g.zIndex,sourceNode:ne,targetNode:ue,elevateOnSelect:j.elevateEdgesOnSelect,zIndexMode:j.zIndexMode});return{...Q||yd,zIndex:q}},[g.source,g.target,g.sourceHandle,g.targetHandle,g.selected,g.zIndex]),Me),Z=(0,B.useMemo)(()=>g.markerStart?`url('#${Er(g.markerStart,f)}')`:void 0,[g.markerStart,f]),H=(0,B.useMemo)(()=>g.markerEnd?`url('#${Er(g.markerEnd,f)}')`:void 0,[g.markerEnd,f]);if(g.hidden||I===null||_===null||R===null||V===null)return null;let G=j=>{let{addSelectedEdges:ne,unselectNodesAndEdges:ue,multiSelectionActive:Q}=E.getState();M&&(E.setState({nodesSelectionActive:!1}),g.selected&&Q?(ue({nodes:[],edges:[g]}),O.current?.blur()):ne([e])),o&&o(j,g)},te=i?j=>{i(j,{...g})}:void 0,ee=a?j=>{a(j,{...g})}:void 0,P=s?j=>{s(j,{...g})}:void 0,X=c?j=>{c(j,{...g})}:void 0,oe=d?j=>{d(j,{...g})}:void 0,re=j=>{if(!x&&ya.includes(j.key)&&M){let{unselectNodesAndEdges:ne,addSelectedEdges:ue}=E.getState();j.key==="Escape"?(O.current?.blur(),ne({edges:[g]})):ue([e])}};return(0,$.jsx)("svg",{style:{zIndex:z},children:(0,$.jsxs)("g",{className:_e(["react-flow__edge",`react-flow__edge-${k}`,g.className,h,{selected:g.selected,animated:g.animated,inactive:!M&&!o,updating:D,selectable:M}]),onClick:G,onDoubleClick:te,onContextMenu:ee,onMouseEnter:P,onMouseMove:X,onMouseLeave:oe,onKeyDown:N?re:void 0,tabIndex:N?0:void 0,role:g.ariaRole??(N?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":g.ariaLabel===null?void 0:g.ariaLabel||`Edge from ${g.source} to ${g.target}`,"aria-describedby":N?`${Id}-${f}`:void 0,ref:O,...g.domAttributes,children:[!T&&(0,$.jsx)(S,{id:e,source:g.source,target:g.target,type:g.type,selected:g.selected,animated:g.animated,selectable:M,deletable:g.deletable??!0,label:g.label,labelStyle:g.labelStyle,labelShowBg:g.labelShowBg,labelBgStyle:g.labelBgStyle,labelBgPadding:g.labelBgPadding,labelBgBorderRadius:g.labelBgBorderRadius,sourceX:I,sourceY:_,targetX:R,targetY:V,sourcePosition:W,targetPosition:F,data:g.data,style:g.style,sourceHandleId:g.sourceHandle,targetHandleId:g.targetHandle,markerStart:Z,markerEnd:H,pathOptions:"pathOptions"in g?g.pathOptions:void 0,interactionWidth:g.interactionWidth}),C&&(0,$.jsx)(Qx,{edge:g,isReconnectable:C,reconnectRadius:u,onReconnect:l,onReconnectStart:p,onReconnectEnd:m,sourceX:I,sourceY:_,targetX:R,targetY:V,sourcePosition:W,targetPosition:F,setUpdateHover:L,setReconnecting:v})]})})}var ew=(0,B.memo)(Jx),tw=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function ou({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:r,noPanClassName:o,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:d,onEdgeClick:u,reconnectRadius:l,onEdgeDoubleClick:p,onReconnectStart:m,onReconnectEnd:f,disableKeyboardA11y:y}){let{edgesFocusable:h,edgesReconnectable:b,elementsSelectable:x,onError:g}=ge(tw,Me),w=Bx(t);return(0,$.jsxs)("div",{className:"react-flow__edges",children:[(0,$.jsx)(Gx,{defaultColor:e,rfId:n}),w.map(k=>(0,$.jsx)(ew,{id:k,edgesFocusable:h,edgesReconnectable:b,elementsSelectable:x,noPanClassName:o,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:d,onClick:u,reconnectRadius:l,onDoubleClick:p,onReconnectStart:m,onReconnectEnd:f,rfId:n,onError:g,edgeTypes:r,disableKeyboardA11y:y},k))]})}ou.displayName="EdgeRenderer";var nw=(0,B.memo)(ou),vd=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function ow({children:e}){let t=Se(),n=(0,B.useRef)(null),[r]=(0,B.useState)(()=>t.getState().transform);return Ad(()=>{let o=null,i=()=>{let a=t.getState().transform;o&&a[0]===o[0]&&a[1]===o[1]&&a[2]===o[2]||(o=a,n.current&&(n.current.style.transform=vd(a)))};return i(),t.subscribe(i)},[t]),(0,$.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:vd(r)},children:e})}function rw(e){let t=Xa(),n=(0,B.useRef)(!1);(0,B.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var iw=e=>e.panZoom?.syncViewport;function aw(e){let t=ge(iw),n=Se();return(0,B.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function kd(e){return e.connection.inProgress?{...e.connection,to:qn(e.connection.to,e.transform)}:{...e.connection}}function sw(e){return e?n=>{let r=kd(n);return e(r)}:kd}function lw(e){let t=sw(e);return ge(t,Me)}var cw=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function dw({containerStyle:e,style:t,type:n,component:r}){let{nodesConnectable:o,width:i,height:a,isValid:s,inProgress:c}=ge(cw,Me);return!(i&&o&&c)?null:(0,$.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,$.jsx)("g",{className:_e(["react-flow__connection",va(s)]),children:(0,$.jsx)(ru,{style:t,type:n,CustomComponent:r,isValid:s})})})}var ru=({style:e,type:t=wt.Bezier,CustomComponent:n,isValid:r})=>{let{inProgress:o,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:d,toNode:u,toHandle:l,toPosition:p,pointer:m}=lw();if(!o)return;if(n)return(0,$.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:d.x,toY:d.y,fromPosition:c,toPosition:p,connectionStatus:va(r),toNode:u,toHandle:l,pointer:m});let f="",y={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:d.x,targetY:d.y,targetPosition:p};switch(t){case wt.Bezier:[f]=Nr(y);break;case wt.SimpleBezier:[f]=Ud(y);break;case wt.Step:[f]=So({...y,borderRadius:0});break;case wt.SmoothStep:[f]=So(y);break;default:[f]=Mr(y)}return(0,$.jsx)("path",{d:f,fill:"none",className:"react-flow__connection-path",style:e})};ru.displayName="ConnectionLine";var uw={};function Sd(e=uw){let t=(0,B.useRef)(e),n=Se();(0,B.useEffect)(()=>{},[e])}function pw(){let e=Se(),t=(0,B.useRef)(!1);(0,B.useEffect)(()=>{},[])}function iu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:r,onEdgeClick:o,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:d,onNodeContextMenu:u,onSelectionContextMenu:l,onSelectionStart:p,onSelectionEnd:m,connectionLineType:f,connectionLineStyle:y,connectionLineComponent:h,connectionLineContainerStyle:b,selectionKeyCode:x,selectionOnDrag:g,selectionMode:w,multiSelectionKeyCode:k,panActivationKeyCode:S,zoomActivationKeyCode:N,deleteKeyCode:C,onlyRenderVisibleElements:M,elementsSelectable:O,defaultViewport:D,translateExtent:L,minZoom:T,maxZoom:v,preventScrolling:E,defaultMarkerColor:z,zoomOnScroll:I,zoomOnPinch:_,panOnScroll:R,panOnScrollSpeed:V,panOnScrollMode:W,zoomOnDoubleClick:F,panOnDrag:Z,autoPanOnSelection:H,onPaneClick:G,onPaneMouseEnter:te,onPaneMouseMove:ee,onPaneMouseLeave:P,onPaneScroll:X,onPaneContextMenu:oe,paneClickDistance:re,nodeClickDistance:j,onEdgeContextMenu:ne,onEdgeMouseEnter:ue,onEdgeMouseMove:Q,onEdgeMouseLeave:q,reconnectRadius:de,onReconnect:be,onReconnectStart:Ee,onReconnectEnd:Te,noDragClassName:je,noWheelClassName:Wt,noPanClassName:_t,disableKeyboardA11y:It,nodeExtent:Qe,rfId:lt,viewport:ct,onViewportChange:Je,nodesDraggable:eo}){return Sd(e),Sd(t),pw(),rw(n),aw(ct),(0,$.jsx)(Ix,{onPaneClick:G,onPaneMouseEnter:te,onPaneMouseMove:ee,onPaneMouseLeave:P,onPaneContextMenu:oe,onPaneScroll:X,paneClickDistance:re,deleteKeyCode:C,selectionKeyCode:x,selectionOnDrag:g,selectionMode:w,onSelectionStart:p,onSelectionEnd:m,multiSelectionKeyCode:k,panActivationKeyCode:S,zoomActivationKeyCode:N,elementsSelectable:O,zoomOnScroll:I,zoomOnPinch:_,zoomOnDoubleClick:F,panOnScroll:R,panOnScrollSpeed:V,panOnScrollMode:W,panOnDrag:Z,autoPanOnSelection:H,defaultViewport:D,translateExtent:L,minZoom:T,maxZoom:v,onSelectionContextMenu:l,preventScrolling:E,noDragClassName:je,noWheelClassName:Wt,noPanClassName:_t,disableKeyboardA11y:It,onViewportChange:Je,isControlledViewport:!!ct,children:(0,$.jsxs)(ow,{children:[(0,$.jsx)(nw,{edgeTypes:t,onEdgeClick:o,onEdgeDoubleClick:a,onReconnect:be,onReconnectStart:Ee,onReconnectEnd:Te,onlyRenderVisibleElements:M,onEdgeContextMenu:ne,onEdgeMouseEnter:ue,onEdgeMouseMove:Q,onEdgeMouseLeave:q,reconnectRadius:de,defaultMarkerColor:z,noPanClassName:_t,disableKeyboardA11y:It,rfId:lt}),(0,$.jsx)(dw,{style:y,type:f,component:h,containerStyle:b}),(0,$.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,$.jsx)(Hx,{nodeTypes:e,onNodeClick:r,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:d,onNodeContextMenu:u,nodeClickDistance:j,onlyRenderVisibleElements:M,noPanClassName:_t,noDragClassName:je,disableKeyboardA11y:It,nodeExtent:Qe,rfId:lt,nodesDraggable:eo}),(0,$.jsx)("div",{className:"react-flow__viewport-portal"})]})})}iu.displayName="GraphView";var mw=(0,B.memo)(iu),fw=_a("React Flow","https://reactflow.dev/"),Cd=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:o,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:d=2,nodeOrigin:u,nodeExtent:l,zIndexMode:p="basic"}={})=>{let m=new Map,f=new Map,y=new Map,h=new Map,b=r??t??[],x=n??e??[],g=u??[0,0],w=l??Vn;$a(y,h,b);let{nodesInitialized:k}=_r(x,m,f,{nodeOrigin:g,nodeExtent:w,zIndexMode:p}),S=[0,0,1];if(a&&o&&i){let N=Gn(m,{filter:D=>!!((D.width||D.initialWidth)&&(D.height||D.initialHeight))}),{x:C,y:M,zoom:O}=ko(N,o,i,c,d,s?.padding??.1);S=[C,M,O]}return{rfId:"1",width:o??0,height:i??0,transform:S,nodes:x,nodesInitialized:k,nodeLookup:m,parentLookup:f,edges:b,edgeLookup:h,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:r!==void 0,panZoom:null,minZoom:c,maxZoom:d,translateExtent:Vn,nodeExtent:w,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:qt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:g,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...wa},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:fw,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:xa,zIndexMode:p,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},gw=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:o,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:d,nodeOrigin:u,nodeExtent:l,zIndexMode:p})=>Jc((m,f)=>{async function y(){let{nodeLookup:h,panZoom:b,fitViewOptions:x,fitViewResolver:g,width:w,height:k,minZoom:S,maxZoom:N}=f();b&&(await uc({nodes:h,width:w,height:k,panZoom:b,minZoom:S,maxZoom:N},x),g?.resolve(!0),m({fitViewResolver:null}))}return{...Cd({nodes:e,edges:t,width:o,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:d,nodeOrigin:u,nodeExtent:l,defaultNodes:n,defaultEdges:r,zIndexMode:p}),setNodes:h=>{let{nodeLookup:b,parentLookup:x,nodeOrigin:g,elevateNodesOnSelect:w,fitViewQueued:k,zIndexMode:S,nodesSelectionActive:N}=f(),{nodesInitialized:C,hasSelectedNodes:M}=_r(h,b,x,{nodeOrigin:g,nodeExtent:l,elevateNodesOnSelect:w,checkEquality:!0,zIndexMode:S}),O=N&&M;k&&C?(y(),m({nodes:h,nodesInitialized:C,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:O})):m({nodes:h,nodesInitialized:C,nodesSelectionActive:O})},setEdges:h=>{let{connectionLookup:b,edgeLookup:x}=f();$a(b,x,h),m({edges:h})},setDefaultNodesAndEdges:(h,b)=>{if(h){let{setNodes:x}=f();x(h),m({hasDefaultNodes:!0})}if(b){let{setEdges:x}=f();x(b),m({hasDefaultEdges:!0})}},updateNodeInternals:h=>{let{triggerNodeChanges:b,nodeLookup:x,parentLookup:g,domNode:w,nodeOrigin:k,nodeExtent:S,debug:N,fitViewQueued:C,zIndexMode:M}=f(),{changes:O,updatedInternals:D}=Nc(h,x,g,w,k,S,M);D&&(Sc(x,g,{nodeOrigin:k,nodeExtent:S,zIndexMode:M}),C?(y(),m({fitViewQueued:!1,fitViewOptions:void 0})):m({}),O?.length>0&&(N&&console.log("React Flow: trigger node changes",O),b?.(O)))},updateNodePositions:(h,b=!1)=>{let x=[],g=[],{nodeLookup:w,triggerNodeChanges:k,connection:S,updateConnection:N,onNodesChangeMiddlewareMap:C}=f();for(let[M,O]of h){let D=w.get(M),L=!!(D?.expandParent&&D?.parentId&&O?.position),T={id:M,type:"position",position:L?{x:Math.max(0,O.position.x),y:Math.max(0,O.position.y)}:O.position,dragging:b};if(D&&S.inProgress&&S.fromNode.id===D.id){let v=Yt(D,S.fromHandle,ie.Left,!0);N({...S,from:v})}L&&D.parentId&&x.push({id:M,parentId:D.parentId,rect:{...O.internals.positionAbsolute,width:O.measured.width??0,height:O.measured.height??0}}),g.push(T)}if(x.length>0){let{parentLookup:M,nodeOrigin:O}=f(),D=Ir(x,w,M,O);g.push(...D)}for(let M of C.values())g=M(g);k(g)},triggerNodeChanges:h=>{let{onNodesChange:b,setNodes:x,nodes:g,hasDefaultNodes:w,debug:k}=f();if(h?.length){if(w){let S=Rd(h,g);x(S)}k&&console.log("React Flow: trigger node changes",h),b?.(h)}},triggerEdgeChanges:h=>{let{onEdgesChange:b,setEdges:x,edges:g,hasDefaultEdges:w,debug:k}=f();if(h?.length){if(w){let S=Td(h,g);x(S)}k&&console.log("React Flow: trigger edge changes",h),b?.(h)}},addSelectedNodes:h=>{let{multiSelectionActive:b,edgeLookup:x,nodeLookup:g,triggerNodeChanges:w,triggerEdgeChanges:k}=f();if(b){let S=h.map(N=>xn(N,!0));w(S);return}w(Kn(g,new Set([...h]),!0)),k(Kn(x))},addSelectedEdges:h=>{let{multiSelectionActive:b,edgeLookup:x,nodeLookup:g,triggerNodeChanges:w,triggerEdgeChanges:k}=f();if(b){let S=h.map(N=>xn(N,!0));k(S);return}k(Kn(x,new Set([...h]))),w(Kn(g,new Set,!0))},unselectNodesAndEdges:({nodes:h,edges:b}={})=>{let{edges:x,nodes:g,nodeLookup:w,triggerNodeChanges:k,triggerEdgeChanges:S}=f(),N=h||g,C=b||x,M=[];for(let D of N){if(!D.selected)continue;let L=w.get(D.id);L&&(L.selected=!1),M.push(xn(D.id,!1))}let O=[];for(let D of C)D.selected&&O.push(xn(D.id,!1));k(M),S(O)},setMinZoom:h=>{let{panZoom:b,maxZoom:x}=f();b?.setScaleExtent([h,x]),m({minZoom:h})},setMaxZoom:h=>{let{panZoom:b,minZoom:x}=f();b?.setScaleExtent([x,h]),m({maxZoom:h})},setTranslateExtent:h=>{f().panZoom?.setTranslateExtent(h),m({translateExtent:h})},resetSelectedElements:()=>{let{edges:h,nodes:b,triggerNodeChanges:x,triggerEdgeChanges:g,elementsSelectable:w}=f();if(!w)return;let k=b.reduce((N,C)=>C.selected?[...N,xn(C.id,!1)]:N,[]),S=h.reduce((N,C)=>C.selected?[...N,xn(C.id,!1)]:N,[]);x(k),g(S)},setNodeExtent:h=>{let{nodes:b,nodeLookup:x,parentLookup:g,nodeOrigin:w,elevateNodesOnSelect:k,nodeExtent:S,zIndexMode:N}=f();h[0][0]===S[0][0]&&h[0][1]===S[0][1]&&h[1][0]===S[1][0]&&h[1][1]===S[1][1]||(_r(b,x,g,{nodeOrigin:w,nodeExtent:h,elevateNodesOnSelect:k,checkEquality:!1,zIndexMode:N}),m({nodeExtent:h}))},panBy:h=>{let{transform:b,width:x,height:g,panZoom:w,translateExtent:k}=f();return Mc({delta:h,panZoom:w,transform:b,translateExtent:k,width:x,height:g})},setCenter:async(h,b,x)=>{let{width:g,height:w,maxZoom:k,panZoom:S}=f();if(!S)return!1;let N=typeof x?.zoom<"u"?x.zoom:k;return await S.setViewport({x:g/2-h*N,y:w/2-b*N,zoom:N},{duration:x?.duration,ease:x?.ease,interpolate:x?.interpolate}),!0},cancelConnection:()=>{m({connection:{...wa}})},updateConnection:h=>{m({connection:h})},reset:()=>m({...Cd()})}},Object.is);function hw({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:r,initialWidth:o,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:d,nodeOrigin:u,nodeExtent:l,zIndexMode:p,children:m}){let[f]=(0,B.useState)(()=>gw({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:o,height:i,fitView:d,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:u,nodeExtent:l,zIndexMode:p}));return(0,$.jsx)(z0,{value:f,children:(0,$.jsx)(tx,{children:(0,$.jsx)(hx,{children:m})})})}function bw({children:e,nodes:t,edges:n,defaultNodes:r,defaultEdges:o,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:d,maxZoom:u,nodeOrigin:l,nodeExtent:p,zIndexMode:m}){return(0,B.useContext)(Or)?(0,$.jsx)($.Fragment,{children:e}):(0,$.jsx)(hw,{initialNodes:t,initialEdges:n,defaultNodes:r,defaultEdges:o,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:d,initialMaxZoom:u,nodeOrigin:l,nodeExtent:p,zIndexMode:m,children:e})}var yw={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function xw({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,className:o,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:d,onMove:u,onMoveStart:l,onMoveEnd:p,onConnect:m,onConnectStart:f,onConnectEnd:y,onClickConnectStart:h,onClickConnectEnd:b,onNodeMouseEnter:x,onNodeMouseMove:g,onNodeMouseLeave:w,onNodeContextMenu:k,onNodeDoubleClick:S,onNodeDragStart:N,onNodeDrag:C,onNodeDragStop:M,onNodesDelete:O,onEdgesDelete:D,onDelete:L,onSelectionChange:T,onSelectionDragStart:v,onSelectionDrag:E,onSelectionDragStop:z,onSelectionContextMenu:I,onSelectionStart:_,onSelectionEnd:R,onBeforeDelete:V,connectionMode:W,connectionLineType:F=wt.Bezier,connectionLineStyle:Z,connectionLineComponent:H,connectionLineContainerStyle:G,deleteKeyCode:te="Backspace",selectionKeyCode:ee="Shift",selectionOnDrag:P=!1,selectionMode:X=gn.Full,panActivationKeyCode:oe="Space",multiSelectionKeyCode:re=Yn()?"Meta":"Control",zoomActivationKeyCode:j=Yn()?"Meta":"Control",snapToGrid:ne,snapGrid:ue,onlyRenderVisibleElements:Q=!1,selectNodesOnDrag:q,nodesDraggable:de,autoPanOnNodeFocus:be,nodesConnectable:Ee,nodesFocusable:Te,nodeOrigin:je=Pd,edgesFocusable:Wt,edgesReconnectable:_t,elementsSelectable:It=!0,defaultViewport:Qe=G0,minZoom:lt=.5,maxZoom:ct=2,translateExtent:Je=Vn,preventScrolling:eo=!0,nodeExtent:nn,defaultMarkerColor:Ao="#b1b1b7",zoomOnScroll:to=!0,zoomOnPinch:Oo=!0,panOnScroll:Vt=!1,panOnScrollSpeed:_n=.5,panOnScrollMode:$e=Ht.Free,zoomOnDoubleClick:Lo=!0,panOnDrag:Ho=!0,onPaneClick:Bo,onPaneMouseEnter:bi,onPaneMouseMove:yi,onPaneMouseLeave:In,onPaneScroll:no,onPaneContextMenu:$o,paneClickDistance:xi=1,nodeClickDistance:wi=0,children:vi,onReconnect:ki,onReconnectStart:Si,onReconnectEnd:Ci,onEdgeContextMenu:Ni,onEdgeDoubleClick:Mi,onEdgeMouseEnter:Ei,onEdgeMouseMove:on,onEdgeMouseLeave:Pt,reconnectRadius:Fo=10,onNodesChange:zt,onEdgesChange:Rt,noDragClassName:_i="nodrag",noWheelClassName:Wo="nowheel",noPanClassName:rn="nopan",fitView:oo,fitViewOptions:Vo,connectOnClick:Ii,attributionPosition:A,proOptions:U,defaultEdgeOptions:K,elevateNodesOnSelect:ce=!0,elevateEdgesOnSelect:we=!1,disableKeyboardA11y:dt=!1,autoPanOnConnect:an,autoPanOnNodeDrag:Cf,autoPanOnSelection:Nf=!0,autoPanSpeed:Mf,connectionRadius:Ef,isValidConnection:_f,onError:If,style:Pf,id:Hs,nodeDragThreshold:zf,connectionDragThreshold:Rf,viewport:Tf,onViewportChange:Df,width:Af,height:Of,colorMode:Lf="light",debug:Hf,onScroll:Bs,ariaLabelConfig:Bf,zIndexMode:$s="basic",...$f},Ff){let Pi=Hs||"1",Wf=Y0(Lf),Vf=(0,B.useCallback)(Fs=>{Fs.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Bs?.(Fs)},[Bs]);return(0,$.jsx)("div",{"data-testid":"rf__wrapper",...$f,onScroll:Vf,style:{...Pf,...yw},ref:Ff,className:_e(["react-flow",o,Wf]),id:Hs,role:"application",children:(0,$.jsxs)(bw,{nodes:e,edges:t,width:Af,height:Of,fitView:oo,fitViewOptions:Vo,minZoom:lt,maxZoom:ct,nodeOrigin:je,nodeExtent:nn,zIndexMode:$s,children:[(0,$.jsx)(q0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:r,onConnect:m,onConnectStart:f,onConnectEnd:y,onClickConnectStart:h,onClickConnectEnd:b,nodesDraggable:de,autoPanOnNodeFocus:be,nodesConnectable:Ee,nodesFocusable:Te,edgesFocusable:Wt,edgesReconnectable:_t,elementsSelectable:It,elevateNodesOnSelect:ce,elevateEdgesOnSelect:we,minZoom:lt,maxZoom:ct,nodeExtent:nn,onNodesChange:zt,onEdgesChange:Rt,snapToGrid:ne,snapGrid:ue,connectionMode:W,translateExtent:Je,connectOnClick:Ii,defaultEdgeOptions:K,fitView:oo,fitViewOptions:Vo,onNodesDelete:O,onEdgesDelete:D,onDelete:L,onNodeDragStart:N,onNodeDrag:C,onNodeDragStop:M,onSelectionDrag:E,onSelectionDragStart:v,onSelectionDragStop:z,onMove:u,onMoveStart:l,onMoveEnd:p,noPanClassName:rn,nodeOrigin:je,rfId:Pi,autoPanOnConnect:an,autoPanOnNodeDrag:Cf,autoPanSpeed:Mf,onError:If,connectionRadius:Ef,isValidConnection:_f,selectNodesOnDrag:q,nodeDragThreshold:zf,connectionDragThreshold:Rf,onBeforeDelete:V,debug:Hf,ariaLabelConfig:Bf,zIndexMode:$s}),(0,$.jsx)(mw,{onInit:d,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:x,onNodeMouseMove:g,onNodeMouseLeave:w,onNodeContextMenu:k,onNodeDoubleClick:S,nodeTypes:i,edgeTypes:a,connectionLineType:F,connectionLineStyle:Z,connectionLineComponent:H,connectionLineContainerStyle:G,selectionKeyCode:ee,selectionOnDrag:P,selectionMode:X,deleteKeyCode:te,multiSelectionKeyCode:re,panActivationKeyCode:oe,zoomActivationKeyCode:j,onlyRenderVisibleElements:Q,defaultViewport:Qe,translateExtent:Je,minZoom:lt,maxZoom:ct,preventScrolling:eo,zoomOnScroll:to,zoomOnPinch:Oo,zoomOnDoubleClick:Lo,panOnScroll:Vt,panOnScrollSpeed:_n,panOnScrollMode:$e,panOnDrag:Ho,autoPanOnSelection:Nf,onPaneClick:Bo,onPaneMouseEnter:bi,onPaneMouseMove:yi,onPaneMouseLeave:In,onPaneScroll:no,onPaneContextMenu:$o,paneClickDistance:xi,nodeClickDistance:wi,onSelectionContextMenu:I,onSelectionStart:_,onSelectionEnd:R,onReconnect:ki,onReconnectStart:Si,onReconnectEnd:Ci,onEdgeContextMenu:Ni,onEdgeDoubleClick:Mi,onEdgeMouseEnter:Ei,onEdgeMouseMove:on,onEdgeMouseLeave:Pt,reconnectRadius:Fo,defaultMarkerColor:Ao,noDragClassName:_i,noWheelClassName:Wo,noPanClassName:rn,rfId:Pi,disableKeyboardA11y:dt,nodeExtent:nn,viewport:Tf,onViewportChange:Df,nodesDraggable:de}),(0,$.jsx)(V0,{onSelectionChange:T}),vi,(0,$.jsx)(H0,{proOptions:U,position:A}),(0,$.jsx)(L0,{rfId:Pi,disableKeyboardA11y:dt})]})})}var au=Dd(xw);var ww=e=>e.domNode?.querySelector(".react-flow__viewport-portal");function su({children:e}){let t=ge(ww);return t?(0,Md.createPortal)(e,t):null}function lu(e){let[t,n]=(0,B.useState)(e),r=(0,B.useCallback)(o=>n(i=>Rd(o,i)),[]);return[t,n,r]}function cu(e){let[t,n]=(0,B.useState)(e),r=(0,B.useCallback)(o=>n(i=>Td(o,i)),[]);return[t,n,r]}var r2=tt.error014();function vw({dimensions:e,lineWidth:t,variant:n,className:r}){return(0,$.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:_e(["react-flow__background-pattern",n,r])})}function kw({radius:e,className:t}){return(0,$.jsx)("circle",{cx:e,cy:e,r:e,className:_e(["react-flow__background-pattern","dots",t])})}var vt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(vt||(vt={}));var Sw={[vt.Dots]:1,[vt.Lines]:1,[vt.Cross]:6},Cw=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function du({id:e,variant:t=vt.Dots,gap:n=20,size:r,lineWidth:o=1,offset:i=0,color:a,bgColor:s,style:c,className:d,patternClassName:u}){let l=(0,B.useRef)(null),{transform:p,patternId:m}=ge(Cw,Me),f=r||Sw[t],y=t===vt.Dots,h=t===vt.Cross,b=Array.isArray(n)?n:[n,n],x=[b[0]*p[2]||1,b[1]*p[2]||1],g=f*p[2],w=Array.isArray(i)?i:[i,i],k=h?[g,g]:x,S=[w[0]*p[2]||1+k[0]/2,w[1]*p[2]||1+k[1]/2],N=`${m}${e||""}`;return(0,$.jsxs)("svg",{className:_e(["react-flow__background",d]),style:{...c,...Hr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:l,"data-testid":"rf__background",children:[(0,$.jsx)("pattern",{id:N,x:p[0]%x[0],y:p[1]%x[1],width:x[0],height:x[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:y?(0,$.jsx)(kw,{radius:g/2,className:u}):(0,$.jsx)(vw,{dimensions:k,lineWidth:o,variant:t,className:u})}),(0,$.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${N})`})]})}du.displayName="Background";var uu=(0,B.memo)(du);function Nw(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,$.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Mw(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,$.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Ew(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,$.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function _w(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,$.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Iw(){return(0,$.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,$.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Dr({children:e,className:t,...n}){return(0,$.jsx)("button",{type:"button",className:_e(["react-flow__controls-button",t]),...n,children:e})}var Pw=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function pu({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:r=!0,fitViewOptions:o,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:d,children:u,position:l="bottom-left",orientation:p="vertical","aria-label":m}){let f=Se(),{isInteractive:y,minZoomReached:h,maxZoomReached:b,ariaLabelConfig:x}=ge(Pw,Me),{zoomIn:g,zoomOut:w,fitView:k}=Xa(),S=()=>{g(),i?.()},N=()=>{w(),a?.()},C=()=>{k(o),s?.()},M=()=>{f.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),c?.(!y)};return(0,$.jsxs)(Lr,{className:_e(["react-flow__controls",p==="horizontal"?"horizontal":"vertical",d]),position:l,style:e,"data-testid":"rf__controls","aria-label":m??x["controls.ariaLabel"],children:[t&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Dr,{onClick:S,className:"react-flow__controls-zoomin",title:x["controls.zoomIn.ariaLabel"],"aria-label":x["controls.zoomIn.ariaLabel"],disabled:b,children:(0,$.jsx)(Nw,{})}),(0,$.jsx)(Dr,{onClick:N,className:"react-flow__controls-zoomout",title:x["controls.zoomOut.ariaLabel"],"aria-label":x["controls.zoomOut.ariaLabel"],disabled:h,children:(0,$.jsx)(Mw,{})})]}),n&&(0,$.jsx)(Dr,{className:"react-flow__controls-fitview",onClick:C,title:x["controls.fitView.ariaLabel"],"aria-label":x["controls.fitView.ariaLabel"],children:(0,$.jsx)(Ew,{})}),r&&(0,$.jsx)(Dr,{className:"react-flow__controls-interactive",onClick:M,title:x["controls.interactive.ariaLabel"],"aria-label":x["controls.interactive.ariaLabel"],children:y?(0,$.jsx)(Iw,{}):(0,$.jsx)(_w,{})}),u]})}pu.displayName="Controls";var i2=(0,B.memo)(pu);function zw({id:e,x:t,y:n,width:r,height:o,style:i,color:a,strokeColor:s,strokeWidth:c,className:d,borderRadius:u,shapeRendering:l,selected:p,onClick:m}){let{background:f,backgroundColor:y}=i||{},h=a||f||y;return(0,$.jsx)("rect",{className:_e(["react-flow__minimap-node",{selected:p},d]),x:t,y:n,rx:u,ry:u,width:r,height:o,style:{fill:h,stroke:s,strokeWidth:c},shapeRendering:l,onClick:m?b=>m(b,e):void 0})}var Rw=(0,B.memo)(zw),Tw=e=>e.nodes.map(t=>t.id),Ga=e=>e instanceof Function?e:()=>e;function Dw({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:o,nodeComponent:i=Rw,onClick:a}){let s=ge(Tw,Me),c=Ga(t),d=Ga(e),u=Ga(n),l=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,$.jsx)($.Fragment,{children:s.map(p=>(0,$.jsx)(Ow,{id:p,nodeColorFunc:c,nodeStrokeColorFunc:d,nodeClassNameFunc:u,nodeBorderRadius:r,nodeStrokeWidth:o,NodeComponent:i,onClick:a,shapeRendering:l},p))})}function Aw({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:r,nodeBorderRadius:o,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:d,x:u,y:l,width:p,height:m}=ge(f=>{let y=f.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let h=y.internals.userNode,{x:b,y:x}=y.internals.positionAbsolute,{width:g,height:w}=ft(h);return{node:h,x:b,y:x,width:g,height:w}},Me);return!d||d.hidden||!Ia(d)?null:(0,$.jsx)(s,{x:u,y:l,width:p,height:m,style:d.style,selected:!!d.selected,className:r(d),color:t(d),borderRadius:o,strokeColor:n(d),strokeWidth:i,shapeRendering:a,onClick:c,id:d.id})}var Ow=(0,B.memo)(Aw),Lw=(0,B.memo)(Dw),Hw=200,Bw=150,$w=e=>!e.hidden,Fw=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Ma(Gn(e.nodeLookup,{filter:$w}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Nd=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Ww=(e,t)=>Nd(e.viewBB,t.viewBB)&&Nd(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Vw="react-flow__minimap-desc";function mu({style:e,className:t,nodeStrokeColor:n,nodeColor:r,nodeClassName:o="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:d,maskStrokeColor:u,maskStrokeWidth:l,position:p="bottom-right",onClick:m,onNodeClick:f,pannable:y=!1,zoomable:h=!1,ariaLabel:b,inversePan:x,zoomStep:g=1,offsetScale:w=5}){let k=Se(),S=(0,B.useRef)(null),{boundingRect:N,viewBB:C,rfId:M,panZoom:O,translateExtent:D,flowWidth:L,flowHeight:T,ariaLabelConfig:v}=ge(Fw,Ww),E=e?.width??Hw,z=e?.height??Bw,I=N.width/E,_=N.height/z,R=Math.max(I,_),V=R*E,W=R*z,F=w*R,Z=N.x-(V-N.width)/2-F,H=N.y-(W-N.height)/2-F,G=V+F*2,te=W+F*2,ee=`${Vw}-${M}`,P=(0,B.useRef)(0),X=(0,B.useRef)();P.current=R,(0,B.useEffect)(()=>{if(S.current&&O)return X.current=Tc({domNode:S.current,panZoom:O,getTransform:()=>k.getState().transform,getViewScale:()=>P.current}),()=>{X.current?.destroy()}},[O]),(0,B.useEffect)(()=>{X.current?.update({translateExtent:D,width:L,height:T,inversePan:x,pannable:y,zoomStep:g,zoomable:h})},[y,h,x,g,D,L,T]);let oe=m?ne=>{let[ue,Q]=X.current?.pointer(ne)||[0,0];m(ne,{x:ue,y:Q})}:void 0,re=f?(0,B.useCallback)((ne,ue)=>{let Q=k.getState().nodeLookup.get(ue).internals.userNode;f(ne,Q)},[]):void 0,j=b??v["minimap.ariaLabel"];return(0,$.jsx)(Lr,{position:p,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof l=="number"?l*R:void 0,"--xy-minimap-node-background-color-props":typeof r=="string"?r:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:_e(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,$.jsxs)("svg",{width:E,height:z,viewBox:`${Z} ${H} ${G} ${te}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ee,ref:S,onClick:oe,children:[j&&(0,$.jsx)("title",{id:ee,children:j}),(0,$.jsx)(Lw,{onClick:re,nodeColor:r,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:o,nodeStrokeWidth:a,nodeComponent:s}),(0,$.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Z-F},${H-F}h${G+F*2}v${te+F*2}h${-G-F*2}z
        M${C.x},${C.y}h${C.width}v${C.height}h${-C.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}mu.displayName="MiniMap";var fu=(0,B.memo)(mu),Gw=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Uw={[Zt.Line]:"right",[Zt.Handle]:"bottom-right"};function Xw({nodeId:e,position:t,variant:n=Zt.Handle,className:r,style:o=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:d=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:l=!1,resizeDirection:p,autoScale:m=!0,shouldResize:f,onResizeStart:y,onResize:h,onResizeEnd:b}){let x=Bd(),g=typeof e=="string"?e:x,w=Se(),k=(0,B.useRef)(null),S=n===Zt.Handle,N=ge((0,B.useCallback)(Gw(S&&m),[S,m]),Me),C=(0,B.useRef)(null),M=t??Uw[n];(0,B.useEffect)(()=>{if(!(!k.current||!g))return C.current||(C.current=Hc({domNode:k.current,nodeId:g,getStoreItems:()=>{let{nodeLookup:D,transform:L,snapGrid:T,snapToGrid:v,nodeOrigin:E,domNode:z}=w.getState();return{nodeLookup:D,transform:L,snapGrid:T,snapToGrid:v,nodeOrigin:E,paneDomNode:z}},onChange:(D,L)=>{let{triggerNodeChanges:T,nodeLookup:v,parentLookup:E,nodeOrigin:z}=w.getState(),I=[],_={x:D.x,y:D.y},R=v.get(g);if(R&&R.expandParent&&R.parentId){let V=R.origin??z,W=D.width??R.measured.width??0,F=D.height??R.measured.height??0,Z={id:R.id,parentId:R.parentId,rect:{width:W,height:F,...Pa({x:D.x??R.position.x,y:D.y??R.position.y},{width:W,height:F},R.parentId,v,V)}},H=Ir([Z],v,E,z);I.push(...H),_.x=D.x?Math.max(V[0]*W,D.x):void 0,_.y=D.y?Math.max(V[1]*F,D.y):void 0}if(_.x!==void 0&&_.y!==void 0){let V={id:g,type:"position",position:{..._}};I.push(V)}if(D.width!==void 0&&D.height!==void 0){let W={id:g,type:"dimensions",resizing:!0,setAttributes:p?p==="horizontal"?"width":"height":!0,dimensions:{width:D.width,height:D.height}};I.push(W)}for(let V of L){let W={...V,type:"position"};I.push(W)}T(I)},onEnd:({width:D,height:L})=>{let T={id:g,type:"dimensions",resizing:!1,dimensions:{width:D,height:L}};w.getState().triggerNodeChanges([T])}})),C.current.update({controlPosition:M,boundaries:{minWidth:s,minHeight:c,maxWidth:d,maxHeight:u},keepAspectRatio:l,resizeDirection:p,onResizeStart:y,onResize:h,onResizeEnd:b,shouldResize:f}),()=>{C.current?.destroy()}},[M,s,c,d,u,l,y,h,b,f]);let O=M.split("-");return(0,$.jsx)("div",{className:_e(["react-flow__resize-control","nodrag",...O,n,r]),ref:k,style:{...o,scale:N,...a&&{[S?"backgroundColor":"borderColor"]:a}},children:i})}var a2=(0,B.memo)(Xw);var gu=/[\w\u4e00-\u9fa5.-]/;var qw=/[\p{L}\p{N}]/u;function hu(e){return e===void 0?!0:!qw.test(e)}function bu(e){return e.trim().replace(/\s+/g," ")}function Yw(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let r=e[n+1];if(r==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(r==="{"){let o=e.indexOf("}",n+2);if(o===-1){n+=1;continue}let i=e.slice(n+2,o);i.trim()!==""&&hu(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:o+1}}),n=o+1;continue}if(r!==void 0&&gu.test(r)){let o=n+1;for(;o<e.length;){let i=e[o];if(i===void 0||!gu.test(i))break;o+=1}hu(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,o),start:n,end:o}}),n=o;continue}n+=1}return t}function Zw(e){let t=[];for(let n of Yw(e))n.kind==="ref"&&t.push(n.token);return t}function yu(e,t){let n=Zw(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let r=new Map;for(let c of t){let d=bu(c.name);if(d==="")continue;let u=r.get(d);u===void 0?r.set(d,[c.id]):u.includes(c.id)||u.push(c.id)}let o=[],i=new Set,a=[],s=new Set;for(let c of n){let d=bu(c.name),u=r.get(d);if(u===void 0){s.has(d)||(s.add(d),a.push(d));continue}for(let l of u)i.has(l)||(i.add(l),o.push(l))}return a.length>0?{mode:"invalid",ids:o,unknown:a}:{mode:"explicit",ids:o,unknown:[]}}var Kw=/\.(png|jpe?g|webp|gif|bmp)$/i;function Wr(e){return e.type.startsWith("image/")?!0:Kw.test(e.name)}var xu=30,wu=200;function vu(e,t){if(t&&Math.abs(t.x-e.x)<wu&&Math.abs(t.y-e.y)<wu){let n={x:t.x+xu,y:t.y+xu};return{position:n,next:n}}return{position:e,next:e}}var jw=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Ya(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!jw.test(n));return t.length?t.join(" "):void 0}function vn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function ku(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function Su(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function Qw(e){let t=!1,n=e.map(r=>{let o=r;if(!(o.style!==void 0||o.className!==void 0||o.animated!==void 0||o.markerEnd!==void 0||o.markerStart!==void 0))return r;t=!0;let a={...r};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function Za(e,t,n,r){let o=new Set(n),i=typeof r?.size=="string"&&r.size?r.size:"1024x1024",a=typeof r?.quality=="string"&&r.quality?r.quality:"high",s=y=>typeof y=="string"?y:"",c=y=>typeof y=="number"&&Number.isFinite(y)?y:0,d=y=>{if(!y||typeof y!="object")return null;let{x:h,y:b}=y;return typeof h!="number"||typeof b!="number"||!Number.isFinite(h)||!Number.isFinite(b)?null:{x:h,y:b}},u=new Set(["image","prompt","group"]),l=[],p=new Set,m=e.flatMap(y=>{if(!y||typeof y!="object")return l.push({id:"?",reason:"\u4E0D\u662F\u4E00\u4E2A\u8282\u70B9\u5BF9\u8C61"}),[];let h=s(y.id);if(!h)return l.push({id:"?",reason:"\u6CA1\u6709 id"}),[];let b=s(y.type);if(!u.has(b))return l.push({id:h,reason:b?`\u8BA4\u4E0D\u51FA\u7684\u8282\u70B9\u7C7B\u578B\u300C${b}\u300D`:"\u6CA1\u6709\u8282\u70B9\u7C7B\u578B"}),[];let x=d(y.position);if(!x)return l.push({id:h,reason:"\u6CA1\u6709\u6709\u6548\u5750\u6807"}),[];let g=y.data;if(!g||typeof g!="object")return l.push({id:h,reason:"\u6CA1\u6709 data"}),[];p.add(h);let w=Ya(y.className),k={...y,position:x};w===void 0?delete k.className:k.className=w;let S=g;if(b==="image"){let N=s(S.registryId);return[{...k,type:"image",data:{...S,registryId:N,name:s(S.name),url:s(S.url),size:c(S.size),ext:s(S.ext),...o.has(N)?{missing:!0}:{}}}]}return b==="group"?[{...k,type:"group",data:{...S,name:s(S.name),imageCount:c(S.imageCount),totalSize:c(S.totalSize)}}]:[{...k,type:"prompt",data:{...S,prompt:s(S.prompt),size:s(S.size)||i,quality:s(S.quality)||a,outputDir:s(S.outputDir),status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}]}),f=Qw(t.filter(y=>p.has(s(y?.source))&&p.has(s(y?.target))));return{nodes:m,edges:f,dropped:l}}function Cu(e){return e.filter(t=>t.type==="prompt").map(t=>({nodeId:t.id,taskId:String(t.data.taskId??"")})).filter(t=>!!t.taskId)}function it(e,t,n){let r=!1,o=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(r=!0,{...i,data:{...i.data,...n}}));return r?o:e}function Nu(e,t,n){let r=0,o=e.map(i=>i.type!=="prompt"||!t.has(i.id)||i.data.outputDir===n?i:(r+=1,{...i,data:{...i.data,outputDir:n}}));return{nodes:r?o:e,changedCount:r}}function Mu(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let r=new Map(e.map(a=>[a.id,a])),o=r.get(n.source),i=r.get(n.target);return o?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):o?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):o?.type==="prompt"?i?.type==="image":!1}function Jw(e,t){let n=new Map,r=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=r.get(i.source);s?s.push(i.target):r.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:r}}function ev(e,t,n){let{byId:r,outEdges:o}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...o.get(i.id)??[]];for(;c.length;){let d=c.pop();if(a.has(d))continue;a.add(d);let u=r.get(d);u&&(u.type==="prompt"?s.add(d):u.type==="group"&&c.push(...o.get(d)??[]))}n.set(i.data.registryId,s.size)}}function Eu(e,t,n){let{byId:r,incoming:o}=n;if(t.has(e))return{count:0,ids:[]};if(r.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of o.get(e)??[]){let d=r.get(c);if(d){if(d.type==="image")a+=1,s.push(d.data.registryId);else if(d.type==="group"){let u=Eu(c,t,n);a+=u.count,s.push(...u.ids)}}}return t.delete(e),{count:a,ids:s}}function tv(e,t,n,r,o){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=Eu(a.id,new Set,t),d=new Set(c);n.set(a.id,d.size),r.set(a.id,Array.from(d).reduce((u,l)=>u+(i.get(l)??0),0)),o.set(a.id,s-d.size)}}function _u(e,t){let n=new Map,r=new Map,o=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(r.set(s.id,0),o.set(s.id,0),i.set(s.id,0));let a=Jw(e,t);return ev(e,a,n),tv(e,a,r,o,i),{refCounts:n,groupCounts:r,groupSizes:o,groupDups:i}}function nv(e,t,n){let r=new Map(e.map(s=>[s.id,s])),o=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=r.get(s);c&&(c.type==="image"?o.push(c):c.type==="group"&&t.filter(d=>d.target===s).forEach(d=>a.push(d.source)))}return o}function Iu(e,t,n,r){let o=nv(e,t,n),i=o.map(d=>({id:d.id,name:d.type==="image"?d.data.name:""})),a=yu(r,i);if(a.mode==="all")return{images:o,unknown:[],mode:"all"};let s=new Map(o.map(d=>[d.id,d])),c=[];for(let d of a.ids){let u=s.get(d);u&&c.push(u)}return{images:c,unknown:a.unknown,mode:a.mode}}function $r(e,t){let n=e.position.x-t.position.x,r=e.position.y-t.position.y;return n*n+r*r}function Fr(e,t){return t.reduce((n,r)=>!n||$r(e,r)<$r(e,n)?r:n,null)}function No(e,t,n){let r=`${t.id}->${n.id}`;e.pairs.has(r)||(e.next.push({id:r,source:t.id,target:n.id}),e.pairs.add(r),e.connected.add(t.id))}function ov(e,t,n,r){for(let o of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=Fr(o,n);if(i&&o.position.y>i.position.y){No(e,i,o);continue}let a=Fr(o,r.filter(s=>s.position.y>=o.position.y));a&&(!i||$r(o,a)<$r(o,i))?No(e,o,a):i&&No(e,o,i)}}function rv(e,t,n,r){for(let o of t)if(!e.next.some(a=>a.source===o.id&&r.has(a.target))){let a=Fr(o,n);a&&No(e,o,a)}}function iv(e,t,n,r){let o=n.filter(a=>e.next.some(s=>s.target===a.id&&r.get(s.source)?.type==="image")),i=o.length?o:n;for(let a of t){if(e.next.some(d=>{let u=r.get(d.source)?.type;return d.target===a.id&&(u==="image"||u==="group")}))continue;let c=Fr(a,i);c&&No(e,c,a)}}function Ka(e,t){let n=e.filter(s=>s.type==="prompt"),r=e.filter(s=>s.type==="group");if(!n.length&&!r.length)return t;let o=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return ov(a,e,n,r),rv(a,r,n,i),iv(a,n,r,o),a.next}function Pu(e,t,n){if(!n.size)return t;let r=e.filter(o=>n.has(o.id));return r.length?Ka(r,t):t}function zu(e,t){return{nodes:e.map(n=>{let r=Ya(n.className),o={...n};if(r===void 0?delete o.className:o.className=r,o.type==="image"){let{maskDataUrl:l,...p}=o.data;return{...o,data:p}}if(o.type!=="prompt")return o;let{startedAtMs:i,resultCount:a,message:s,cancelRequested:c,...d}=o.data,u=l=>typeof l=="string"?l:"";return{...o,data:{...d,prompt:u(d.prompt),size:u(d.size),quality:u(d.quality)||"high",outputDir:u(d.outputDir),status:"idle"}}}),edges:[...t]}}async function Ie(e,t){let n=await fetch(`imagora/${e}`,t),r=await n.text(),o=null;try{o=r?JSON.parse(r):null}catch{o=null}if(!n.ok){let i=(o&&typeof o=="object"&&"error"in o?String(o.error):"")||r.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:o})}return o}function Ye(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var Ru=()=>Ie("config");var Tu=()=>Ie("assets"),Vr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),r=await n.text(),o=r?JSON.parse(r):{};if(!n.ok)throw new Error(o.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return o.image},ja=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Ie(`history?${t.toString()}`)},Gr=(e=14)=>Ie(`history/stats?days=${e}`),Qa=e=>Ie("generate",Ye(e)),Du=e=>Ie(`task?id=${encodeURIComponent(e)}`),Au=e=>Ie("task/cancel",Ye({id:e})),Ou=(e,t,n)=>Ie("workflow/save",Ye({name:e,nodes:t,edges:n})),Ja=()=>Ie("workflow/list"),Lu=e=>Ie(`workflow/load?name=${encodeURIComponent(e)}`),es=(e,t)=>Ie("recovery/save",Ye({...zu(e,t)})),Hu=()=>Ie("recovery/latest"),Ur=e=>Ie("settings",Ye({model:e})),Xr=e=>Ie("settings",Ye({profile:e})),qr=e=>Ie("settings",Ye({outputDir:e})),Bu=e=>Ie("settings",Ye({budget:e})),$u=e=>Ie("settings",Ye({imagoraRoot:e})),Fu=(e={})=>Ie("pick-folder",Ye(e)),Yr=e=>Ie("reveal",Ye({path:e})),ts=e=>Ie("provider",Ye(e)),Wu=e=>Ie("provider/probe",Ye(e));var Vu=e=>Ie("budget",Ye(e));function me(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var av=/^=== (.+) ===\s*$/,Uu=/^```(?:text)?\s*$/,sv=/^ratio:\s*(\d+):(\d+)\s*$/,lv=/^ratio\b/i;function Gu(e){return e.split(`
`).some(t=>Uu.test(t))}function Xu(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),r=[],o=[],i=[],a=[];if(n.forEach((d,u)=>{let l=d.match(av)?.[1];l!==void 0&&a.push({title:l.trim(),line:u})}),a.length===0){let d=t.trim();return d&&i.push(d),Gu(t)&&o.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:r,issues:o,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),Gu(s)&&o.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let d=0;d<a.length;d++){let u=a[d];if(u===void 0)continue;let{title:l}=u,p=u.line+1,m=a[d+1],f=m===void 0?n.length:m.line,y=n.slice(p,f);if(c.has(l)){o.push({code:"duplicate-title",title:l,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${l}\u300D`});continue}c.add(l);let h=[];y.forEach((O,D)=>{Uu.test(O)&&h.push(D)});let b=h[0],x=h[h.length-1];if(b===void 0||x===void 0){o.push({code:"missing-fence",title:l,message:`\u300C${l}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let g=y.slice(0,b).join(`
`).trim();g&&i.push(g);let w=y.slice(b+1,x),k=w.findIndex(O=>O.trim()!=="");if(k===-1){o.push({code:"missing-ratio",title:l,message:`\u300C${l}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let S=(w[k]??"").trim(),N=S.match(sv);if(!N){lv.test(S)?o.push({code:"bad-ratio",title:l,message:`\u300C${l}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${S}`}):o.push({code:"missing-ratio",title:l,message:`\u300C${l}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let C=`${N[1]}:${N[2]}`,M=w.slice(k+1).join(`
`).trim();if(!M){o.push({code:"empty-prompt",title:l,message:`\u300C${l}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}r.push({title:l,ratio:C,prompt:M})}return{cards:r,issues:o,skippedText:i}}function os(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let r=t.find(o=>o.label.includes(`(${e}`));return r?{value:r.value,fallback:!1}:{value:n.value,fallback:!0}}function qu(e,t,n){let r=mv(n,e.length);return e.map((o,i)=>{let a=os(o.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:r[i]??n,data:{prompt:o.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:o.title}}})}var ns=380,cv=326,Yu=40,dv=74,uv=ns+Yu,pv=cv+dv,Zr=3;function mv(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,r=[];for(let o=0;o<n;o++){let i=Math.floor(o/Zr),a=o%Zr,s=Math.min(Zr,n-i*Zr),c=s*ns+(s-1)*Yu,d=e.x+ns/2-c/2;r.push({x:d+a*uv,y:e.y+i*pv})}return r}var fv={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function Be(e){let t=e.measured,n=fv[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var gt={layerGap:60,resultGap:60,nodeGap:16,leftMargin:60,topMargin:40},gv={image:0,group:0,prompt:1},Zu="\u63D0\u793A\u8BCD\u751F\u6210";function Ku(e,t,n,r){let o=n.get(e);if(o!==void 0)return o;if(r.has(e))return-1;r.add(e);let i=0;for(let a of t.get(e)??[]){let s=Ku(a,t,n,r);s>=0&&(i=Math.max(i,s+1))}return r.delete(e),n.set(e,i),i}function ju(e,t,n){let r=new Map(e.map(l=>[l.id,l])),o=r.get(n);if(o?.type!=="prompt")return e;let i=new Set,a=t.filter(l=>l.source===n).map(l=>r.get(l.target)).filter(l=>l?.type!=="image"||i.has(l.id)?!1:(i.add(l.id),!0));if(!a.length)return e;let s=a.reduce((l,p,m)=>l+Be(p).width+(m?gt.nodeGap:0),0),c=o.position.x+Be(o).width/2-s/2,d=o.position.y+Be(o).height+gt.resultGap,u=new Map;for(let l of a)u.set(l.id,{x:c,y:d}),c+=Be(l).width+gt.nodeGap;return e.map(l=>{let p=u.get(l.id);return p?{...l,position:p}:l})}function hv(e,t){return e.type!=="prompt"?null:(t.get(e.id)??[]).slice().sort().join("|")}function bv(e,t,n,r,o){let i=new Map(e.map(y=>[y.id,y])),a=new Map,s=new Map;for(let y of t){if(!i.has(y.source)||!i.has(y.target))continue;let h=a.get(y.target)??[];h.push(y.source),a.set(y.target,h);let b=s.get(y.source)??[];b.push(y.target),s.set(y.source,b)}let c=new Map,d=new Set;for(let y of e){let h=Math.max(Ku(y.id,a,c,d),gv[y.type]);c.set(y.id,h)}let u=new Map;for(let y of e){let h=u.get(c.get(y.id)??0)??[];h.push(y),u.set(c.get(y.id)??0,h)}let l=[...u.keys()].sort((y,h)=>y-h),p=new Map;for(let y of e)n.has(y.id)||p.set(y.id,{x:y.position.x-(r?.x??0),y:y.position.y-(r?.y??0)});let m=y=>(p.get(y.id)?.x??y.position.x)+Be(y).width/2,f=new Map;{let y=o;for(let h of l){let b=u.get(h).reduce((x,g)=>{let w=p.get(g.id);return w&&!n.has(g.id)?Math.max(x,w.y+Be(g).height):Math.max(x,y+Be(g).height)},y);f.set(h,y),y=b+gt.layerGap}}return{byId:i,preds:a,succs:s,layerGroups:u,sortedLayers:l,positions:p,centerOf:m,bandY:f}}function yv(e){let{nodes:t,edges:n,moves:r,origin:o,boundsWidth:i}=e;if(!t.length)return t;let a=o?0:gt.leftMargin,s=o?0:gt.topMargin,c=bv(t,n,r,o,s),{positions:d}=c;return wv(c,r,a),vv(c,r,a),kv(t,r,a,i,d),t.map(u=>{if(!r.has(u.id))return u;let l=d.get(u.id);return!l||!Number.isFinite(l.x)||!Number.isFinite(l.y)?u:o?{...u,position:{x:l.x+o.x,y:l.y+o.y}}:{...u,position:l}})}function xv(e,t,n){let{byId:r,preds:o,positions:i,centerOf:a}=t,s=(o.get(e.id)??[]).map(c=>r.get(c)).filter(c=>c!==void 0&&i.has(c.id)).map(c=>a(c));return s.length?s.reduce((c,d)=>c+d,0)/s.length:n+Be(e).width/2}function Qu(e,t,n,r,o){let{layerGroups:i,preds:a,positions:s,bandY:c}=n,d=i.get(e).filter(h=>r.has(h.id));if(!d.length)return;let u=new Map;for(let h of d)u.set(h.id,t(h));let l=h=>hv(h,a),p=[...d].sort((h,b)=>{let x=u.get(h.id),g=u.get(b.id);if(Math.abs(x-g)>=.5)return x-g;let w=l(h),k=l(b);if(w!==null&&k!==null&&w===k&&h.type==="prompt"&&b.type==="prompt"){let S=h.data.title??Zu,N=b.data.title??Zu,C=S.localeCompare(N,"zh");if(C!==0)return C}return h.position.x-b.position.x}),m=(h,b)=>h.every(x=>l(x)===null||l(x)===l(b)),f=o-gt.nodeGap,y=0;for(;y<p.length;){let h=p[y];if(h===void 0)break;let b=u.get(h.id),x=y,g=p[x+1];for(;g!==void 0&&Math.abs(u.get(g.id)-b)<.5&&m(p.slice(y,x+1),g);)x+=1,g=p[x+1];let w=p.slice(y,x+1),k=w.reduce((C,M,O)=>C+Be(M).width+(O?gt.nodeGap:0),0),S=c.get(e),N=Math.max(f+gt.nodeGap,b-k/2);for(let C of w)s.set(C.id,{x:N,y:S}),N+=Be(C).width+gt.nodeGap;f=N-gt.nodeGap,y=x+1}}function wv(e,t,n){for(let r of e.sortedLayers)Qu(r,o=>xv(o,e,n),e,t,n)}function vv(e,t,n){let{sortedLayers:r,succs:o,byId:i,positions:a,centerOf:s}=e;for(let c of[...r].reverse())Qu(c,d=>{let u=(o.get(d.id)??[]).map(p=>i.get(p)).filter(p=>p!==void 0&&a.has(p.id)).map(p=>s(p));if(u.length)return u.reduce((p,m)=>p+m,0)/u.length;let l=a.get(d.id);return l?l.x+Be(d).width/2:n+Be(d).width/2},e,t,n)}function kv(e,t,n,r,o){if(r!==void 0){let i=e.filter(a=>t.has(a.id));if(i.length){let a=Math.min(...i.map(d=>o.get(d.id).x)),s=Math.max(...i.map(d=>o.get(d.id).x+Be(d).width)),c=n+r/2-(a+s)/2;if(c!==0)for(let d of i){let u=o.get(d.id);o.set(d.id,{x:u.x+c,y:u.y})}}}}function Ju(e,t,n){if(!n.size)return e;let r=e.filter(p=>n.has(p.id));if(!r.length)return e;let o=t.filter(p=>n.has(p.source)||n.has(p.target)),i=new Set;for(let p of o)n.has(p.source)||i.add(p.source),n.has(p.target)||i.add(p.target);let a=e.filter(p=>i.has(p.id)),s=Math.min(...r.map(p=>p.position.x)),c=Math.max(...r.map(p=>p.position.x+Be(p).width)),d=Math.min(...r.map(p=>p.position.y)),u=yv({nodes:[...r,...a],edges:o,moves:n,origin:{x:s,y:d},boundsWidth:i.size===0?Math.max(c-s,1):void 0}),l=new Map(u.map(p=>[p.id,p]));return e.map(p=>l.get(p.id)??p)}var rs=[0,.5,1];function ep(e,t,n){let r=t==="x"?e.x:e.y,o=t==="x"?e.width:e.height;return r+o*n}function np(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function tp(e,t,n,r){let o=rs.map(s=>ep(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&np(c))for(let d=0;d<rs.length;d+=1){let u=rs[d];if(u===void 0)continue;let l=ep(c,n,u);for(let p=0;p<o.length;p+=1){let m=o[p];if(m===void 0)continue;let f=l-m,y=Math.abs(f);y>=r||y>=a||(a=y,i={delta:f,position:l,targetId:c.id})}}}return i}function Kr(e,t,n=6){let r={x:e.x,y:e.y,guides:[]};if(!np(e)||!Number.isFinite(n)||n<=0)return r;let o=tp(e,t,"x",n),i=tp(e,t,"y",n),a=[];return o!==null&&a.push({axis:"x",position:o.position,targetId:o.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:o===null?e.x:e.x+o.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var op="imagora.canvas-snap.v1";function rp(){try{let e=window.localStorage.getItem(op);return e===null?!0:e!=="0"}catch{return!0}}function ip(e){try{window.localStorage.setItem(op,e?"1":"0")}catch{}}function Eo(e){let t=Be(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var Mo=[];function ap(e,t,n){if(!n)return{changes:e,guides:Mo};let r=[];for(let l of e){let p=l;p.type==="position"&&p.dragging===!0&&p.position!==void 0&&r.push(p)}if(r.length!==1)return{changes:e,guides:Mo};let o=r[0];if(!o)return{changes:e,guides:Mo};let i=t.find(l=>l.id===o.id),a=o.position;if(!i||!a)return{changes:e,guides:Mo};let s={...Eo(i),x:a.x,y:a.y},c=[];for(let l of t)l.id!==o.id&&c.push(Eo(l));let d=Kr(s,c);return d.guides.length===0?{changes:e,guides:Mo}:{changes:e.map(l=>l.id===o.id&&l.type==="position"?{...l,position:{x:d.x,y:d.y}}:l),guides:d.guides}}var Oe=require("react");var Qr=require("react");var Kt=new Map,is=new Map;function Sv(e,t,n=512){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||e<=0||t<=0||n<=0||e<=n&&t<=n)return null;let r=n/Math.max(e,t);return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(t*r))}}function jr(e){let t=Kt.get(e);return t===void 0?null:(Kt.delete(e),Kt.set(e,t),t)}function Cv(e,t){for(Kt.set(e,t);Kt.size>240;){let n=Kt.keys().next();if(n.done===!0)break;let r=Kt.get(n.value);Kt.delete(n.value),r!==void 0&&URL.revokeObjectURL(r)}}async function Nv(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u7F29\u7565\u56FE\u53D6\u56FE\u5931\u8D25\uFF1A${n.status}`);let r=await n.blob(),o=await createImageBitmap(r),i=Sv(o.width,o.height,t);if(i===null)return o.close(),e;let a=document.createElement("canvas");a.width=i.width,a.height=i.height;let s=a.getContext("2d");if(s===null)return o.close(),e;s.drawImage(o,0,0,i.width,i.height),o.close();let c=await new Promise(d=>a.toBlob(d,"image/webp",.9));return c===null?e:URL.createObjectURL(c)}function sp(e,t=512){let n=jr(e);if(n!==null)return Promise.resolve(n);let r=is.get(e);if(r!==void 0)return r;let o=Nv(e,t).catch(()=>e).then(i=>(is.delete(e),i!==e&&Cv(e,i),i));return is.set(e,o),o}function lp(e){let[t,n]=(0,Qr.useState)(()=>{if(!e)return null;let r=jr(e);return r===null?null:{src:e,url:r}});return(0,Qr.useEffect)(()=>{if(!e)return;let r=jr(e);if(r!==null){n({src:e,url:r});return}let o=!1;return sp(e).then(i=>{o||n({src:e,url:i})}),()=>{o=!0}},[e]),t===null||t.src!==e?null:t.url}var as=require("react/jsx-runtime"),cp={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function Pe({name:e,size:t=14,strokeWidth:n=1.7,style:r}){let o=cp[e]||cp.help;return(0,as.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...r},children:(0,as.jsx)("path",{d:o})})}var ss=require("react/jsx-runtime");function _o({label:e,disabled:t,onClick:n}){return(0,ss.jsx)("button",{type:"button",className:"im-btn-ghost im-icon-btn nodrag",title:e,"aria-label":e,disabled:t,onClick:r=>{r.stopPropagation(),n()},children:(0,ss.jsx)(Pe,{name:"folder",size:14})})}var Ce=require("react"),vp=require("react-dom");var Mv={id:"__custom",label:"\u81EA\u5B9A\u4E49"},Ev=64;function dp(e){return typeof e!="string"?"":e.trim().replace(/\s+/g," ")}function _v(e,t){return e.some(n=>n.value===t)}function up(e,t){let n=dp(t);return n===""||_v(e,n)?e:[...e,{value:n,label:n,group:Mv}]}function pp(e){let t=dp(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>Ev?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function mp(e){let t=new Map,n=[];for(let o of e){let i=o.group;if(i===void 0){n.push(o);continue}let a=t.get(i.id);a!==void 0?a.rows.push(o):t.set(i.id,{label:i.label,rows:[o]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let r=[...t].map(([o,i])=>({id:o,label:i.label,rows:i.rows}));return n.length>0&&r.push({id:"",label:"",rows:n}),r}var Jr=0;function ei(){Jr+=1}function ti(){Jr=Math.max(0,Jr-1)}function fp(){return Jr>0}var Iv=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function ls(e){if(!e)return"";let t="";for(let n of e){let r=n.codePointAt(0)??0;t+=Iv.has(r)?"-":n}return t}function gp(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function Pv(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,r=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(r[i]=1+gp(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,d=n;for(let[u,l]of r.entries()){if(c!==n&&(d=Math.max(d,c+u-2)),e.charAt(u)===t.charAt(i)){let p=1+gp(e,u),m=n;s!==n&&(m=s+p+4),d!==n&&(m=Math.max(m,d+p+1-u)),a[u]=m}c=s,s=l}r=a}let o=n;for(let i of r)o=Math.max(o,i);return o===n?void 0:o}function hp(e,t){let n=ls(t).toLowerCase();if(n==="")return e;let r=[];return e.forEach((o,i)=>{let a=o.label===void 0?[o.name]:[o.name,o.label],s=!1,c;for(let d of a){let u=ls(d).toLowerCase(),l=Pv(u,n);l!==void 0&&(s||=u.startsWith(n),c=c===void 0?l:Math.max(c,l))}c!==void 0&&r.push({item:o,index:i,prefix:s,score:c})}),r.sort((o,i)=>Number(i.prefix)-Number(o.prefix)||i.score-o.score||o.index-i.index),r.map(o=>o.item)}var ni=require("react");var Io="imagora",cs={"common.notSet":"\uFF08\u672A\u8BBE\u7F6E\uFF09","common.save":"\u4FDD\u5B58","common.saving":"\u4FDD\u5B58\u4E2D\u2026","common.cancel":"\u53D6\u6D88","common.close":"\u5173\u95ED","common.chooseFolder":"\u9009\u62E9\u6587\u4EF6\u5939","common.choosing":"\u9009\u62E9\u4E2D\u2026","panel.entry":"\u81EA\u7531\u753B\u5E03","toolbar.profile.follow":"\u8DDF\u968F imagora \u7684 .env","toolbar.profile.title":"\u6765\u6E90\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5","toolbar.model.title":"{profile} \xB7 \u5F53\u524D\u6A21\u578B","toolbar.settings":"\u8BBE\u7F6E","toolbar.settings.title":"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55","toolbar.upload":"\u4E0A\u4F20\u56FE\u7247","toolbar.upload.title":"\u4ECE\u672C\u673A\u9009\u56FE\u7247\uFF08\u4E5F\u53EF\u62D6\u5165\u6216\u7C98\u8D34\uFF09","toolbar.paste":"\u7C98\u8D34\u5BFC\u5165","toolbar.paste.title":"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u62C6\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361","toolbar.newPrompt":"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247","toolbar.newPrompt.title":"\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E","toolbar.newGroup":"\u65B0\u5EFA\u56FE\u7247\u7EC4","toolbar.newGroup.title":"\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E","toolbar.save":"\u4FDD\u5B58\u5DE5\u4F5C\u6D41","toolbar.save.title":"\u7ED9\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765","toolbar.load":"\u52A0\u8F7D\u5DE5\u4F5C\u6D41","toolbar.load.title":"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED","toolbar.history":"\u751F\u6210\u5386\u53F2","toolbar.history.title":"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\uFF0C\u5220\u6389\u8282\u70B9\u4E5F\u80FD\u627E\u56DE","toolbar.outputDir":"\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939","toolbar.outputDir.title":"\u70B9\u8FD9\u91CC\u6362\u4E00\u4E2A\u76EE\u5F55\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u5B83\uFF0C\u5361\u4E0A\u7559\u7A7A\u4E5F\u7528\u5B83\uFF09\xB7 \u5F53\u524D\uFF1A{dir}","toolbar.undo":"\u64A4\u9500","toolbar.undo.title":"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09","toolbar.redo":"\u6062\u590D","toolbar.redo.title":"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09","toolbar.autoConnect":"\u81EA\u52A8\u8FDE\u7EBF","toolbar.autoConnect.title":"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u5173\u7CFB\uFF1A\u56FE\u7247 \u2192 \u63D0\u793A\u8BCD \u2192 \u56FE\u7247","toolbar.runAll":"\u5168\u90E8\u8FD0\u884C","toolbar.runAll.title":"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247","toolbar.cancelAll":"\u53D6\u6D88\u5168\u90E8 ({count})","toolbar.cancelAll.title":"\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09","flash.autoConnect.done":"\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF","flash.autoConnect.noneSelected":"\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9","flash.autoConnect.selection":"\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF","flash.outputDir.set":"\u5DF2\u628A\u9009\u4E2D\u5361\u7247\u7684\u8F93\u51FA\u6587\u4EF6\u5939\u8BBE\u4E3A {dir}","flash.outputDir.same":"\u6240\u9009\u5361\u7247\u672C\u6765\u5C31\u7528 {dir}","flash.defaultOutputDir.set":"\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939\u5DF2\u8BBE\u4E3A {dir}\uFF08\u53EA\u5F71\u54CD\u4EE5\u540E\u65B0\u5EFA\u7684\u5361\u7247\uFF09","flash.noNodes":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9","flash.layout.noneSelected":"\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9","flash.drop.noImage":"\u6CA1\u6709\u53EF\u7528\u7684\u56FE\u7247\u6587\u4EF6\uFF1A\u652F\u6301 png / jpg / webp / gif / bmp","flash.image.noFile":"\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6","flash.mask.cleared":"\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248","flash.deleted.kept":"\u5DF2\u4ECE\u753B\u5E03\u79FB\u9664 {count} \u4E2A\u8282\u70B9\uFF1B\u56FE\u7247\u4ECD\u7559\u5728\u78C1\u76D8\u4E0A\uFF0C\u751F\u6210\u5386\u53F2\u91CC\u80FD\u627E\u56DE","flash.prompt.copied":"\u5DF2\u590D\u5236\u63D0\u793A\u8BCD","flash.prompt.copyFailed":"\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE","flash.readFailed":"\u8BFB\u53D6\u5931\u8D25\uFF1A{reason}","flash.split.done":"\u5DF2\u5207\u51FA {count} \u5F20","flash.drop.images":"\u5DF2\u653E\u5165 {count} \u5F20\u56FE","flash.import.prompts":"\u5DF2\u5EFA {count} \u5F20\u63D0\u793A\u8BCD\u5361","flash.snap.on":"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45","flash.snap.off":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E","flash.lock.on":"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8 / \u8FDE\u7EBF / \u9009\u4E2D / \u5E73\u79FB\u90FD\u505C\u4E86","flash.lock.off":"\u753B\u5E03\u5DF2\u89E3\u9501","flash.renderError":"\u753B\u5E03\u6E32\u67D3\u51FA\u9519\uFF1A{reason}","flash.profile.switched":"\u5DF2\u5207\u5230 {name}","flash.profile.failed":"\u5207\u6362\u5931\u8D25\uFF1A{reason}","flash.model.switched":"\u5DF2\u5207\u6362\u5230 {model}","canvas.goSettings":"\u53BB\u8BBE\u7F6E","canvas.minimap":"\u753B\u5E03\u5C0F\u5730\u56FE","menu.preview":"\u9884\u89C8\u5927\u56FE","menu.crop":"\u88C1\u526A","menu.upscale":"\u653E\u5927","menu.split":"\u5207\u5206","menu.mask":"\u8499\u7248\u91CD\u7ED8","menu.replace":"\u66FF\u6362\u56FE\u7247","menu.run":"\u8FD0\u884C","menu.copyPrompt":"\u590D\u5236\u63D0\u793A\u8BCD","menu.deleteSelection":"\u5220\u9664\u6240\u9009 {count} \u9879","menu.delete":"\u5220\u9664","menu.deleteOnly":"\u4EC5\u5220\u9664\u6B64\u9879","menu.aria":"\u8282\u70B9\u64CD\u4F5C","upscale.title":"\u653E\u5927\u56FE\u7247","upscale.subtitle":"\u672C\u5730\u6309\u957F\u8FB9\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002","upscale.longEdge":"\u957F\u8FB9\u76EE\u6807","upscale.algorithm":"\u7B97\u6CD5","upscale.algo.high":"\u9AD8\u8D28\u91CF","upscale.algo.bilinear":"\u5E73\u6ED1","upscale.algo.nearest":"\u4FDD\u50CF\u7D20","upscale.original":"\u539F\u56FE {width} \xD7 {height}","upscale.scale":"{ratio}\xD7","upscale.shrink":"\u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F","upscale.reading":"\u8BFB\u53D6\u4E2D\u2026","upscale.note":"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF1A\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\u3002\u60F3\u8981\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\uFF0C\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002","upscale.busy":"\u5904\u7406\u4E2D\u2026","upscale.confirm":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03","upscale.failed":"\u653E\u5927\u5931\u8D25\uFF1A{reason}","upscale.resultName":"\u653E\u5927 {width}\xD7{height} \xB7 {algorithm}","crop.title":"\u88C1\u526A\u56FE\u7247","crop.subtitle":"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002","crop.ratio":"\u6BD4\u4F8B","crop.ratio.free":"\u81EA\u7531","crop.ratio.group":"\u88C1\u526A\u6BD4\u4F8B","crop.note":"\u88C1\u526A\u540E {width} \xD7 {height}","crop.note.original":"\u539F\u56FE {width} \xD7 {height}","crop.note.gcd":"\u539F\u6BD4\u4F8B {ratio}","crop.note.hint":"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F {min}%","crop.alt":"\u5F85\u88C1\u526A","crop.busy":"\u5904\u7406\u4E2D\u2026","crop.confirm":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03","crop.failed":"\u88C1\u526A\u5931\u8D25\uFF1A{reason}","crop.resultName":"\u88C1\u526A {width}\xD7{height}","crop.resultName.ratio":"\u88C1\u526A {width}\xD7{height} \xB7 {ratio}","split.title":"\u5207\u5206\u56FE\u7247","split.subtitle":"\u6309\u884C \xD7 \u5217\u5207\u5F00\u8FD9\u5F20\u56FE\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002","split.cols":"\u5217","split.rows":"\u884C","split.summary":"{count} \u5F20","split.summary.cell":"{count} \u5F20 \xB7 \u6BCF\u5F20 {width} \xD7 {height}","split.original":"\u539F\u56FE {width} \xD7 {height}","split.readingOriginal":"\u6B63\u5728\u8BFB\u53D6\u539F\u56FE\u5C3A\u5BF8\u2026","split.busy":"\u5904\u7406\u4E2D\u2026","split.confirm":"\u786E\u8BA4\u5207\u5206\uFF08{count} \u5F20\uFF09","split.needTwo":"\u81F3\u5C11 2 \u5F20","split.more":"\u2026\u7B49 {count} \u4E2A","split.tooSmall":"1 \xD7 1 \u7B49\u4E8E\u4E0D\u5207\u3002\u628A\u884C\u6216\u5217\u8C03\u5927\u4E00\u70B9\u3002","split.note":"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u5404\u81EA\u6210\u4E3A\u4E00\u4E2A\u56FE\u7247\u8282\u70B9\u3002","split.failed":"\u5207\u5206\u5931\u8D25\uFF1A{reason}","split.resultName":"\u5207\u5206 {index}/{total}","mask.title":"\u8499\u7248\u91CD\u7ED8","mask.subtitle":"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002","mask.mode.paint":"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09","mask.mode.erase":"\u64E6","mask.brush":"\u7B14\u5237","mask.clear":"\u6E05\u7A7A","mask.strokes":"{count} \u7B14","mask.noStrokes":"\u8FD8\u6CA1\u6D82","mask.note":"\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002","mask.note.original":"\u539F\u56FE {width} \xD7 {height}","mask.busy":"\u5BFC\u51FA\u4E2D\u2026","mask.confirm":"\u6302\u4E0A\u8499\u7248","mask.failed":"\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A{reason}","mask.noBase":"\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D","mask.noCanvas":"\u753B\u5E03\u4E0D\u53EF\u7528","mask.resultName":"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8","import.title":"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247","import.subtitle":"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002","import.aria":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C","import.placeholder":`=== \u79CB\u65E5\u901A\u52E4\u5305 ===
\`	ext
ratio: 3:2

linen tote bag on warm concrete, soft top light
\`

=== \u51AC\u65E5\u56F4\u5DFE ===
\`	ext
ratio: 2:3

wool scarf on linen, morning window light
\``,"import.summary":"\u8BC6\u522B {count} \u5F20\u5361\u7247","import.summaryIssues":"\u53D1\u73B0 {count} \u4E2A\u95EE\u9898","import.card.untitled":"\u7B2C {index} \u5F20","import.card.defaultRatio":"\u9ED8\u8BA4\u6BD4\u4F8B","import.card.fallback":"\u5C3A\u5BF8\u56DE\u9000","import.card.empty":"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09","import.hint":"\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C === \u540D\u5B57 ===\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ratio: 3:2\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002\u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08{count} \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002","import.waiting":"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8","import.confirm":"\u786E\u8BA4\u5EFA\u5361\uFF08{count}\uFF09","save.title":"\u4FDD\u5B58\u5DE5\u4F5C\u6D41","save.subtitle":"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002","save.defaultName":"\u753B\u5E03 {stamp}","save.nameAria":"\u5DE5\u4F5C\u6D41\u540D\u79F0","save.namePlaceholder":"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57","save.where":"\u5B58\u5230 {dir}","save.where.shared":"\u5B58\u5230 {dir}\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09","save.where.fallback":"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09","save.overwriteMore":"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09","save.overwriteTitle":"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F","save.overwriteSubtitle":"\u300C{name}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002","save.overwriteWarn":"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002","save.back":"\u8FD4\u56DE\u6539\u540D","save.overwrite":"\u8986\u76D6\u4FDD\u5B58","load.title":"\u52A0\u8F7D\u5DE5\u4F5C\u6D41","load.subtitle":"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002","load.empty":"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41","load.where":"\u8BFB\u7684\u662F {dir}","help.title":"\u64CD\u4F5C\u5E2E\u52A9","help.subtitle":"\u62D6\u5165\u56FE\u7247 \xB7 \u53F3\u952E\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u51FA\u83DC\u5355","help.rows.canvas":"\u753B\u5E03","help.rows.canvasText":"\u53F3\u952E\u62D6\u62FD\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u5F39\u83DC\u5355 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8","help.rows.node":"\u8282\u70B9","help.rows.nodeText":"\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C / \u6574\u7406 / \u8FDE\u7EBF / \u8BBE\u8DEF\u5F84 / \u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88","help.rows.edge":"\u8FDE\u7EBF","help.rows.edgeText":"\u56FE\u7247\u2192\u63D0\u793A\u8BCD / \u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u53EA\u6709\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408","help.rows.keys":"\u5FEB\u6377\u952E","help.rows.keysText":"Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete \u5220\u9664\u8FDE\u7EBF","help.rows.refs":"\u5F15\u7528","help.rows.refsText":"\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247","help.rows.run":"\u8FD0\u884C","help.rows.runText":"\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D","help.rows.save":"\u4FDD\u5B58","help.rows.saveText":"\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167","help.config":"\u914D\u7F6E\u6765\u6E90\uFF1A{source} \xB7 \u6A21\u578B {model}","help.config.plugin":"\u63D2\u4EF6\u5185\u914D\u7F6E","help.config.missing":"\u672A\u627E\u5230","help.output":"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 {dir}","settings.title":"\u753B\u5E03\u8BBE\u7F6E","settings.subtitle":"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\u3002\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002","settings.status":"\u5F53\u524D\u751F\u6548\uFF1A","settings.status.takenOver":"\u88AB\u63D2\u4EF6\u5185\u914D\u7F6E\u63A5\u7BA1","settings.status.saved":"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548","settings.status.dirty":"\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8","settings.status.clean":"\u6240\u6709\u6539\u52A8\u5DF2\u4FDD\u5B58","settings.status.savedTick":"\u2713 \u5DF2\u4FDD\u5B58","settings.group.endpoint":"\u7528\u54EA\u5957\u63A5\u53E3","settings.group.files":"\u6587\u4EF6\u843D\u5728\u54EA","settings.group.budget":"\u82B1\u94B1\u4E0A\u9650","settings.profile.label":"\u914D\u7F6E\u6765\u6E90","settings.profile.hint.plugin":"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\u3002","settings.profile.hint.imagora":"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u4EF7\u76EE\u8868\u3002","settings.profile.title":"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868","settings.profile.plugin":"\u63D2\u4EF6\u5185\u914D\u7F6E","settings.model.label":"\u9ED8\u8BA4\u6A21\u578B","settings.model.hint.plugin":"\u586B\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\u3002","settings.model.hint.imagora":"\u6E05\u5355\u5916\u7684 id \u4E5F\u53EF\u4EE5\u624B\u586B\u3002","settings.model.empty":"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id","settings.model.title":"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare","settings.baseUrl.label":"\u63A5\u53E3\u5730\u5740","settings.baseUrl.hint":"OpenAI \u517C\u5BB9\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002","settings.baseUrl.title":"\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90","settings.apiKey.label":"API Key","settings.apiKey.hint.configured":"\u5DF2\u914D\u7F6E\uFF1B\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\u3002","settings.apiKey.hint.plain":"\u53EA\u5B58\u5728\u672C\u673A settings.json\u3002","settings.apiKey.placeholder.keep":"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539","settings.apiKey.placeholder.paste":"\u7C98\u8D34 API Key","settings.probe.run":"\u6D4B\u8BD5\u8FDE\u901A","settings.probe.title.ready":"\u53EA\u8BFB\u4E00\u6B21\u6A21\u578B\u6E05\u5355\uFF0C\u4E0D\u751F\u6210\u56FE\u3001\u4E0D\u82B1\u94B1","settings.probe.title.needUrl":"\u5148\u586B\u63A5\u53E3\u5730\u5740","settings.probe.ok":"\u8FDE\u901A\uFF0C\u8BFB\u5230 {count} \u4E2A\u6A21\u578B","settings.probe.okNoList":"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09","settings.probe.fail":"\u8FDE\u4E0D\u901A\uFF1A{reason}","settings.probe.more":"\u2026\u8FD8\u6709 {count} \u4E2A","settings.inheritHint":"\u8FD9\u4E00\u680F\u7684\u5730\u5740\u4E0E\u5BC6\u94A5\u6CBF\u7528\u672C\u673A Imagora \u7684\u90A3\u4E00\u4EFD\u3002\u8981\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\uFF0C\u628A\u4E0A\u9762\u7684\u300C\u914D\u7F6E\u6765\u6E90\u300D\u6539\u6210\u300C\u63D2\u4EF6\u5185\u914D\u7F6E\u300D\u3002","settings.reset.confirm":"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF1F\u4E4B\u540E\u56DE\u5230\u672C\u673A Imagora \u7684\u6765\u6E90\u3002","settings.reset.confirmAction":"\u786E\u8BA4\u6E05\u7A7A","settings.reset.link":"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E","settings.reset.done":"\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E","settings.root.label":"Imagora \u76EE\u5F55","settings.root.hint":"\u6307\u5411\u540E\u5DE5\u4F5C\u6D41\u4E0E\u751F\u6210\u5386\u53F2\u76F4\u63A5\u8BFB\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002\u7559\u7A7A = \u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002","settings.root.placeholder":"\u4F8B\u5982 D:/imagora\uFF08\u542B config.json \u4E0E .env\uFF09","settings.reveal":"\u6253\u5F00\u6587\u4EF6\u5939","settings.reveal.title":"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00\u8FD9\u4E2A\u6587\u4EF6\u5939","settings.pick.root":"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09","settings.pick.output":"\u9009\u62E9\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939","settings.pick.unsupported":"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84","settings.pick.failed":"\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A{reason}","settings.pick.unknown":"\u672A\u77E5\u539F\u56E0","settings.outputDir.label":"\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939","settings.outputDir.hint":"\u5361\u4E0A\u7559\u7A7A\u65F6\u7528\u5B83\u3002\u5F53\u524D\uFF1A{dir}","settings.outputDir.placeholder":"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55","settings.budget.label":"\u672C\u753B\u5E03\u7D2F\u8BA1\u4E0A\u9650","settings.budget.hint":"\u82B1\u5230\u4E0A\u9650\u5373\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF09\u3002","settings.budget.placeholder":"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650","settings.keyConfigured":"\u5BC6\u94A5\u5DF2\u914D\u7F6E","settings.keyConfiguredFromEnv":"\u5BC6\u94A5\u5DF2\u914D\u7F6E\uFF08\u6765\u81EA .env\uFF09","settings.keyMissing":"\u5BC6\u94A5\u672A\u914D\u7F6E","settings.save.done":"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548","settings.save.failed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{reason}","settings.reset.failed":"\u64CD\u4F5C\u5931\u8D25\uFF1A{reason}","cost.money":"{value} \u5143","cost.title":"\u672C\u753B\u5E03\u7D2F\u8BA1 {spent} \xB7 {cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE {images} \u5F20","cost.title.withBudget":"\u672C\u753B\u5E03\u7D2F\u8BA1 {spent} / \u4E0A\u9650 {cap} \xB7 {cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE {images} \u5F20","cost.over":"\u5DF2\u8FBE\u4E0A\u9650","dock.zoomIn":"\u653E\u5927","dock.zoomIn.title":"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09","dock.zoomOut":"\u7F29\u5C0F","dock.zoomOut.title":"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09","dock.fit":"\u9002\u5E94","dock.fit.title":"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1","dock.focus":"\u805A\u7126","dock.focus.title":"\u805A\u7126\uFF1A\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE","dock.snap":"\u5438\u9644","dock.snap.on":"\u5173\u95ED\u62D6\u62FD\u5438\u9644","dock.snap.off":"\u5F00\u542F\u62D6\u62FD\u5438\u9644","dock.minimap":"\u5730\u56FE","dock.minimap.on":"\u9690\u85CF\u5C0F\u5730\u56FE","dock.minimap.off":"\u663E\u793A\u5C0F\u5730\u56FE","dock.lock":"\u9501\u5B9A","dock.locked":"\u5DF2\u9501","dock.lock.lock":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09","dock.lock.unlock":"\u89E3\u9501\u753B\u5E03","dock.help":"\u5E2E\u52A9","dock.help.title":"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E","inspector.runOne":"\u8FD0\u884C\u6240\u9009","inspector.runMany":"\u8FD0\u884C\u6240\u9009\uFF08{count}\uFF09","inspector.run.title.one":"\u8FD0\u884C\u9009\u4E2D\u7684 1 \u5F20\u63D0\u793A\u8BCD\u5361\u7247","inspector.run.title.many":"\u8FD0\u884C\u9009\u4E2D\u7684 {count} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247\u4E0E\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09","inspector.layout":"\u81EA\u52A8\u6574\u7406","inspector.layout.title":"\u6309\u53C2\u8003\u5173\u7CFB\u5206\u5C42\u91CD\u6392\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D","inspector.connect":"\u81EA\u52A8\u8FDE\u7EBF","inspector.connect.title":"\u53EA\u7ED9\u9009\u4E2D\u7684\u8282\u70B9\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u7684\u4E0D\u53D7\u5F71\u54CD","inspector.outputDir":"\u8BBE\u7F6E\u8F93\u51FA\u6587\u4EF6\u5939","inspector.outputDir.title.one":"\u4E3A\u9009\u4E2D\u7684\u90A3\u5F20\u63D0\u793A\u8BCD\u5361\u7247\u9009\u4E00\u4E2A\u8F93\u51FA\u6587\u4EF6\u5939","inspector.outputDir.title.many":"\u4E3A\u9009\u4E2D\u7684 {count} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u9009\u4E00\u4E2A\u8F93\u51FA\u6587\u4EF6\u5939","inspector.delete":"\u5220\u9664\u6240\u9009","inspector.countSuffix":"\uFF08{count}\uFF09","empty.title":"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03","empty.line1":"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002","empty.line2":"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB","drop.releaseImage":"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247","drop.prompt":"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361","drop.group":"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4","drop.cancel":"\u677E\u5F00\u53D6\u6D88","drop.images":"\u677E\u5F00\u6DFB\u52A0 {count} \u5F20\u56FE\u7247","drop.noImage":"\u672A\u68C0\u6D4B\u5230\u56FE\u7247","error.nodeTitle":"\u8FD9\u5F20\u5361\u51FA\u9519\u4E86","error.nodeHint":"\u9009\u4E2D\u5B83\u6309 Delete \u5220\u6389\u5373\u53EF\uFF0C\u5176\u4F59\u5361\u7247\u4E0D\u53D7\u5F71\u54CD","error.retry":"\u91CD\u8BD5","error.canvasTitle":"\u753B\u5E03\u6E32\u67D3\u51FA\u9519","error.canvasBody":"\u4F60\u7684\u5DE5\u4F5C\u6D41\u6587\u4EF6\u8FD8\u5728\u78C1\u76D8\u4E0A\uFF0C\u6CA1\u6709\u4E22\u3002\u53EF\u4EE5\u5148\u91CD\u8BD5\uFF1B\u5982\u679C\u8FD8\u662F\u4E0D\u884C\uFF0C\u6E05\u7A7A\u753B\u5E03\u540E\u518D\u4ECE\u5DE5\u4F5C\u6D41\u91CC\u91CD\u65B0\u52A0\u8F7D\u3002","error.clearCanvas":"\u6E05\u7A7A\u753B\u5E03","error.unknown":"\u672A\u77E5\u9519\u8BEF","select.empty":"\u6CA1\u6709\u5339\u914D\u9879","select.placeholder":"\u8BF7\u9009\u62E9","select.searchPlaceholder":"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009","select.searchAria":"\u7B5B\u9009\u9009\u9879","select.use":"\u4F7F\u7528 \u201C{value}\u201D","select.customGroup":"\u81EA\u5B9A\u4E49","history.nothingToUndo":"\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C","history.nothingToRedo":"\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C","images.onlyImage":"\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6","images.clipboard":"\u526A\u8D34\u677F\u56FE\u7247","images.uploading":"\u4E0A\u4F20 {name} \u2026","images.added":"\u5DF2\u6DFB\u52A0 {name}","images.uploadFailed":"\u4E0A\u4F20\u5931\u8D25\uFF1A{reason}","images.replaced":"\u5DF2\u66FF\u6362\u4E3A {name}","images.replaceFailed":"\u66FF\u6362\u5931\u8D25\uFF1A{reason}","task.budget.confirm":`{reason}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`,"task.budget.cancelled":"\u5DF2\u6309\u4E0A\u9650\u53D6\u6D88\uFF1A{reason}","task.budget.overridden":"\u8D85\u4E0A\u9650\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A{reason}","task.done":"\u5B8C\u6210 \xB7 {count} \u5F20","task.done.cost":"\u5B8C\u6210 \xB7 {count} \u5F20 \xB7 {cost}","task.cancelled":"\u5DF2\u53D6\u6D88","task.failed":"\u5931\u8D25","task.failed.withReason":"{status} \xB7 {reason}","task.seeLog":"\u89C1\u65E5\u5FD7","task.lost":"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF08\u5BBF\u4E3B\u91CD\u542F\u6216\u4EFB\u52A1\u8FC7\u671F\uFF09\uFF0C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF","task.lostLog":"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF1A\u505C\u6B62\u8F6E\u8BE2","task.pollFailed":"\u8F6E\u8BE2\u5931\u8D25\uFF1A{reason}","task.emptyPrompt":"\u63D0\u793A\u8BCD\u662F\u7A7A\u7684","task.missingRefs":"\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A{names}","task.submit":"\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE {count} \u5F20 \xB7 {size}","task.submitFailed":"\u63D0\u4EA4\u5931\u8D25\uFF1A{reason}","task.cancelFailed":"\u53D6\u6D88\u5931\u8D25\uFF1A{reason}","workflow.restored":"\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08{name}\uFF09","workflow.restored.auto":"\u81EA\u52A8\u6062\u590D","workflow.dropped":"{count} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08{reason}\uFF09","workflow.saved":"\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C{name}\u300D","workflow.saveFailed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{reason}","workflow.loaded":"\u5DF2\u52A0\u8F7D\u300C{name}\u300D","workflow.loadFailed":"\u52A0\u8F7D\u5931\u8D25\uFF1A{reason}","brand.title":"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E","history.title":"\u751F\u6210\u5386\u53F2","history.search.placeholder":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","history.filter.title":"\u6309\u72B6\u6001\u7B5B\u9009","history.filter.all":"\u5168\u90E8\u72B6\u6001","history.filter.ok":"\u6210\u529F","history.filter.error":"\u5931\u8D25","history.search":"\u641C\u7D22","history.lostRefs":"{count} \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931","history.lostRefs.title":"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F","history.budget.daily":"\u6BCF\u65E5\u4E0A\u9650","history.budget.daily.title":"\u6BCF\u65E5\u7D2F\u8BA1\u82B1\u8D39\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4","history.budget.single":"\u5355\u6B21\u4E0A\u9650","history.budget.single.title":"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650","history.budget.save":"\u4FDD\u5B58\u4E0A\u9650","history.budget.saved":"\u4E0A\u9650\u5DF2\u4FDD\u5B58","history.budget.saveFailed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{reason}","history.refresh":"\u5237\u65B0","history.bySize":"\u6309\u5C3A\u5BF8","history.bySize.row":"{count} \u6B21 \xB7 {cost}","history.reading":"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026","history.imageAlt":"\u751F\u6210\u7ED3\u679C","history.zoom.title":"\u53CC\u51FB\u653E\u5927\u9884\u89C8","history.failed":"\u751F\u6210\u5931\u8D25","history.moved":"\u6587\u4EF6\u5DF2\u79FB\u52A8","history.noPrompt":"\u65E0\u63D0\u793A\u8BCD","history.ref.title":"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927","history.ref.alt":"\u53C2\u8003\u56FE","history.refMissing":"\u53C2\u8003\u56FE\u7F3A\u5931","history.copyPrompt":"\u590D\u5236\u63D0\u793A\u8BCD","history.openDir":"\u6253\u5F00\u76EE\u5F55","history.import":"\u5BFC\u5165\u753B\u5E03","history.import.title":"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03","history.import.noAsset":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528","history.loadingMore":"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026","history.loadMore":"\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A {shown} / {total}\uFF09","history.allShown":"\u5DF2\u663E\u793A\u5168\u90E8 {total} \u6761\u8BB0\u5F55","history.empty":"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2","history.empty.noteBefore":"\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C","history.empty.noteAfter":"\u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B\u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002","history.noMatch":"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55","history.where.fallback":"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09","history.stat.todayCost":"\u4ECA\u65E5\u82B1\u8D39","history.stat.cost":"\u7D2F\u8BA1\u82B1\u8D39","history.stat.successRate":"\u6210\u529F\u7387","history.stat.successRate.value":"{rate}\uFF08{ok}/{total}\uFF09","history.stat.error":"\u5931\u8D25","history.stat.avgSeconds":"\u6210\u529F\u5E73\u5747\u8017\u65F6","zoom.copying":"\u590D\u5236\u4E2D\u2026","zoom.copyFailed":"\u590D\u5236\u5931\u8D25","zoom.copied":"\u5DF2\u590D\u5236\u56FE\u7247","zoom.copiedPath":"\u5DF2\u590D\u5236\u8DEF\u5F84","zoom.alt":"\u9884\u89C8","zoom.close":"\u5173\u95ED\u9884\u89C8","zoom.close.title":"\u5173\u95ED\uFF08Esc\uFF09","zoom.dock.title":"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED","zoom.out":"\u7F29\u5C0F","zoom.scale.title":"\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B","zoom.scale.natural":"{width}\xD7{height} \xB7 \u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B","zoom.in":"\u653E\u5927","zoom.fit":"\u9002\u5E94\u7A97\u53E3","zoom.actual":"\u5B9E\u9645\u5927\u5C0F","zoom.actual.title":"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09","zoom.copyImage":"\u590D\u5236\u56FE\u7247","zoom.copyPath":"\u590D\u5236\u8DEF\u5F84","zoom.openTab":"\u65B0\u6807\u7B7E\u6253\u5F00","dialog.readImageFailed":"\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A{reason}","node.missing":"\u6587\u4EF6\u7F3A\u5931","node.imageMissing":"\u56FE\u7247\u7F3A\u5931","node.mask.title":"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","node.mask.clear":"\u6E05\u9664\u8499\u7248","node.mask.badge":"\u8499\u7248","node.refs":"\u5F15\u7528 {count} \u5904","node.noRefs":"\u672A\u5F15\u7528","node.image.preview":"\u9884\u89C8\u5927\u56FE","node.image.crop":"\u88C1\u526A\u56FE\u7247","node.image.upscale":"\u653E\u5927\u56FE\u7247","node.image.split":"\u5207\u5206\u56FE\u7247","node.image.mask":"\u8499\u7248\u91CD\u7ED8","node.image.replace":"\u66FF\u6362\u56FE\u7247","node.image.delete":"\u5220\u9664\u56FE\u7247","node.group.delete":"\u5220\u9664\u56FE\u7247\u7EC4","node.group.count":"{count} \u5F20\u56FE","node.group.dedup":"\u53BB\u91CD","node.group.dedup.title":"\u5DF2\u53BB\u6389 {count} \u5F20\u91CD\u590D\u56FE\u7247","node.prompt.placeholder":"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background","node.prompt.untitled":"\u63D0\u793A\u8BCD\u751F\u6210","node.prompt.delete":"\u5220\u9664\u63D0\u793A\u8BCD","node.prompt.size":"\u5C3A\u5BF8","node.prompt.size.title":"\u8F93\u51FA\u5C3A\u5BF8","node.prompt.quality":"\u8D28\u91CF","node.prompt.quality.title":"\u751F\u6210\u8D28\u91CF","node.prompt.outputDir":"\u8F93\u51FA\u6587\u4EF6\u5939\uFF08\u7559\u7A7A = \u7528\u9ED8\u8BA4\uFF09","node.prompt.customSize":"{size}\uFF08\u81EA\u5B9A\u4E49\uFF09","node.prompt.run":"\u8FD0\u884C","node.prompt.cancel":"\u53D6\u6D88","node.prompt.cancelling":"\u53D6\u6D88\u4E2D\u2026","node.prompt.queueing":"\u6392\u961F\u4E2D\u2026","node.prompt.cancel.title":"\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F","status.idle":"\u5C31\u7EEA","status.queued":"\u6392\u961F\u4E2D","status.running":"\u751F\u6210\u4E2D","status.done":"\u5B8C\u6210","status.failed":"\u5931\u8D25","status.generating":"\u751F\u6210\u4E2D {seconds}s","status.done.withCount":"\u5B8C\u6210 \xB7 {count} \u5F20","status.failed.withReason":"\u5931\u8D25\uFF1A{reason}"},bp={"common.notSet":"Not set","common.save":"Save","common.saving":"Saving\u2026","common.cancel":"Cancel","common.close":"Close","common.chooseFolder":"Choose folder","common.choosing":"Choosing\u2026","panel.entry":"Freeform canvas","toolbar.profile.follow":"Follow imagora's .env","toolbar.profile.title":"Profile: picks the endpoint and the API key","toolbar.model.title":"{profile} \xB7 current model","toolbar.settings":"Settings","toolbar.settings.title":"Endpoint, API key, model, and folders","toolbar.upload":"Upload","toolbar.upload.title":"Pick images from this machine \u2014 or drag them in, or paste","toolbar.paste":"Paste prompts","toolbar.paste.title":"Paste a model reply; each line becomes a prompt card","toolbar.newPrompt":"Prompt card","toolbar.newPrompt.title":"Drag onto the canvas to drop it where you let go","toolbar.newGroup":"Image group","toolbar.newGroup.title":"Drag onto the canvas to drop it where you let go","toolbar.save":"Save workflow","toolbar.save.title":"Name this canvas and keep it","toolbar.load":"Load workflow","toolbar.load.title":"Continue from a saved canvas","toolbar.history":"History","toolbar.history.title":"Every image on disk, even ones you deleted from the canvas","toolbar.outputDir":"Default output folder","toolbar.outputDir.title":"Pick a different folder (used by new cards, and by any card left empty) \xB7 now: {dir}","toolbar.undo":"Undo","toolbar.undo.title":"Undo the last step (Ctrl+Z)","toolbar.redo":"Redo","toolbar.redo.title":"Reapply the step you undid (Ctrl+Y)","toolbar.autoConnect":"Auto-connect","toolbar.autoConnect.title":"Wire up the obvious links by position: image \u2192 prompt \u2192 image","toolbar.runAll":"Run all","toolbar.runAll.title":"Run every prompt card","toolbar.cancelAll":"Cancel all ({count})","toolbar.cancelAll.title":"Queued jobs won't start; the running one is discarded after it finishes (it still lands on disk and is still billed)","flash.autoConnect.done":"Filled in the obvious links","flash.autoConnect.noneSelected":"Select the nodes to connect first","flash.autoConnect.selection":"Linked the selected nodes","flash.outputDir.set":"Output folder for the selected cards: {dir}","flash.outputDir.same":"Those cards already use {dir}","flash.defaultOutputDir.set":"Default output folder set to {dir} (affects new cards only)","flash.noNodes":"Nothing on the canvas yet","flash.layout.noneSelected":"Select the nodes to tidy first","flash.drop.noImage":"No usable image: png / jpg / webp / gif / bmp","flash.image.noFile":"This image has no file yet","flash.mask.cleared":"Mask cleared","flash.deleted.kept":"Removed {count} node(s) from the canvas; the images stay on disk and in history","flash.prompt.copied":"Prompt copied","flash.prompt.copyFailed":"Copy failed: the browser blocked clipboard access","flash.readFailed":"Could not read: {reason}","flash.split.done":"Split into {count} images","flash.drop.images":"Added {count} images","flash.import.prompts":"Created {count} prompt cards","flash.snap.on":"Snapping on: dragged cards line up with their neighbours","flash.snap.off":"Snapping off: cards go wherever you put them","flash.lock.on":"Canvas locked: zoom only \u2014 no dragging, connecting, selecting, or panning","flash.lock.off":"Canvas unlocked","flash.renderError":"Canvas failed to render: {reason}","flash.profile.switched":"Switched to {name}","flash.profile.failed":"Switch failed: {reason}","flash.model.switched":"Switched to {model}","canvas.goSettings":"Open settings","canvas.minimap":"Canvas minimap","menu.preview":"View full size","menu.crop":"Crop","menu.upscale":"Upscale","menu.split":"Split into a grid","menu.mask":"Repaint with a mask","menu.replace":"Replace image","menu.run":"Run","menu.copyPrompt":"Copy prompt","menu.deleteSelection":"Delete {count} selected","menu.delete":"Delete","menu.deleteOnly":"Delete just this one","menu.aria":"Node actions","upscale.title":"Upscale","upscale.subtitle":"Resampled locally to a target long edge. No API call, no cost.","upscale.longEdge":"Long edge","upscale.algorithm":"Algorithm","upscale.algo.high":"High quality","upscale.algo.bilinear":"Smooth","upscale.algo.nearest":"Keep pixels","upscale.original":"Original {width} \xD7 {height}","upscale.scale":"{ratio}\xD7","upscale.shrink":"Smaller than the original \u2014 this shrinks it","upscale.reading":"Reading\u2026","upscale.note":"Upscaling resamples locally; it cannot invent detail. For a sharper image, rewrite the prompt and generate again.","upscale.busy":"Working\u2026","upscale.confirm":"Upscale and add to canvas","upscale.failed":"Upscale failed: {reason}","upscale.resultName":"Upscale {width}\xD7{height} \xB7 {algorithm}","dialog.readImageFailed":"Could not read this image: {reason}","crop.title":"Crop","crop.subtitle":"Drag inside the frame to move it, drag a handle to resize, then confirm.","crop.ratio":"Ratio","crop.ratio.free":"Free","crop.ratio.group":"Crop ratio","crop.note":"Result {width} \xD7 {height}","crop.note.original":"Original {width} \xD7 {height}","crop.note.gcd":"Native ratio {ratio}","crop.note.hint":"Drag inside to move \xB7 drag a handle to resize \xB7 down to {min}%","crop.alt":"Image to crop","crop.busy":"Working\u2026","crop.confirm":"Crop and add to canvas","crop.failed":"Crop failed: {reason}","crop.resultName":"Crop {width}\xD7{height}","crop.resultName.ratio":"Crop {width}\xD7{height} \xB7 {ratio}","split.title":"Split image","split.subtitle":"Cut this image into a rows \xD7 columns grid; each cell becomes its own node.","split.cols":"Columns","split.rows":"Rows","split.summary":"{count} images","split.summary.cell":"{count} images \xB7 {width} \xD7 {height} each","split.original":"Original {width} \xD7 {height}","split.readingOriginal":"Reading the original size\u2026","split.busy":"Working\u2026","split.confirm":"Split into {count}","split.needTwo":"At least 2 needed","split.more":"\u2026{count} in total","split.tooSmall":"1 \xD7 1 is no split at all. Raise the rows or columns.","split.note":"Each piece becomes its own image node on the canvas.","split.failed":"Split failed: {reason}","split.resultName":"Split {index}/{total}","mask.title":"Repaint with a mask","mask.subtitle":"Paint the area to repaint; the exported PNG mask matches the original size.","mask.mode.paint":"Paint (to repaint)","mask.mode.erase":"Erase","mask.brush":"Brush","mask.clear":"Clear","mask.strokes":"{count} strokes","mask.noStrokes":"Nothing painted yet","mask.note":"Painted areas get repainted; everything else stays. The exported mask is a PNG at the original size.","mask.note.original":"Original {width} \xD7 {height}","mask.busy":"Exporting\u2026","mask.confirm":"Attach mask","mask.failed":"Could not export the mask: {reason}","mask.noBase":"The image has not loaded yet","mask.noCanvas":"Canvas unavailable","mask.resultName":"Mask attached \u2014 painted areas will be repainted","import.title":"Paste prompt cards","import.subtitle":"Paste a model reply. Each card is a title, a fenced block, and a ratio on the first line.","import.aria":"Prompt text to import","import.placeholder":`=== Autumn commute bag ===
\`	ext
ratio: 3:2

linen tote bag on warm concrete, soft top light
\`

=== Winter scarf ===
\`	ext
ratio: 2:3

wool scarf on linen, morning window light
\``,"import.summary":"{count} cards recognised","import.summaryIssues":"{count} problems found","import.card.untitled":"Card {index}","import.card.defaultRatio":"Default ratio","import.card.fallback":"Size fell back","import.card.empty":"(empty prompt)","import.hint":"One card per block: a title line === name ===, then ratio: 3:2 inside the fence, then a blank line and the prompt. Sizes come from the current config ({count} options); if no ratio parses, the first one is used.","import.waiting":"Paste something to see a live preview here","import.confirm":"Create {count} cards","save.title":"Save workflow","save.subtitle":"Name this canvas so you can load it again later.","save.defaultName":"Canvas {stamp}","save.nameAria":"Workflow name","save.namePlaceholder":"Name this canvas","save.where":"Saved to {dir}","save.where.shared":"Saved to {dir} (shared with original Imagora)","save.where.fallback":"the plugin's own data folder (no imagora folder set)","save.overwriteMore":"Or overwrite an existing one (click to fill in the name)","save.overwriteTitle":"Overwrite this workflow?","save.overwriteSubtitle":"\u201C{name}\u201D already exists. Saving replaces it.","save.overwriteWarn":"The old copy is gone for good. Go back and rename if you want to keep it.","save.back":"Back","save.overwrite":"Overwrite","load.title":"Load workflow","load.subtitle":"Continue from a saved canvas.","load.empty":"No workflows in this folder yet","load.where":"Looked in {dir}","help.title":"How to use this canvas","help.subtitle":"Drop images in \xB7 right-drag to box-select \xB7 right-click a node for its menu","help.rows.canvas":"Canvas","help.rows.canvasText":"Right-drag to box-select \xB7 right-click a node for its menu \xB7 Ctrl/Cmd+click to add to the selection \xB7 wheel to zoom \xB7 drag empty space to pan \xB7 \u201CFit\u201D at bottom-left for an overview \xB7 double-click an image to enlarge","help.rows.node":"Nodes","help.rows.nodeText":"Hover for the action rail \xB7 once selected, run / tidy / connect / set folder / delete from the top-right bar \xB7 a running card can be cancelled on its own","help.rows.edge":"Links","help.rows.edgeText":"image \u2192 prompt or group \xB7 group \u2192 prompt \xB7 prompt \u2192 image. A prompt takes one incoming link; multiple images are aggregated through a group","help.rows.keys":"Keys","help.rows.keysText":"Ctrl+A select all \xB7 Ctrl+Z/Y undo and redo \xB7 Delete removes the selection \xB7 Ctrl+S saves \xB7 double-click a link, or select it and press Delete","help.rows.refs":"References","help.rows.refsText":"Write @image-name in a prompt to use only those images; leave it out to use every incoming image","help.rows.run":"Running","help.rows.runText":"\u201CRun\u201D on a single card \xB7 \u201CRun all\u201D, \u201CRun selected\u201D, \u201CCancel all\u201D in the toolbar","help.rows.save":"Saving","help.rows.saveText":"Save under a name to keep it as a workflow; canvas edits also land in a recovery snapshot","help.config":"Config from {source} \xB7 model {model}","help.config.plugin":"the plugin settings","help.config.missing":"not found","help.output":"Output defaults to {dir}","settings.title":"Canvas settings","settings.subtitle":"Pick one source and model. The endpoint and key stay on this machine \u2014 never on screen, never in a log.","settings.status":"In effect:","settings.status.takenOver":"Overridden by plugin settings","settings.status.saved":"Saved and live","settings.status.dirty":"Unsaved changes","settings.status.clean":"Everything saved","settings.status.savedTick":"\u2713 Saved","settings.group.endpoint":"Which endpoint","settings.group.files":"Where files land","settings.group.budget":"Spending cap","settings.profile.label":"Config source","settings.profile.hint.plugin":"Use the plugin\u2019s own endpoint and key.","settings.profile.hint.imagora":"Switching the source switches the endpoint, model, and price table.","settings.profile.title":"Switching the source switches the endpoint, model, and size price table","settings.profile.plugin":"Plugin settings","settings.model.label":"Default model","settings.model.hint.plugin":"Enter the model id your provider expects.","settings.model.hint.imagora":"An id outside the list can be typed in.","settings.model.empty":"This source reports no model list \u2014 type the model id","settings.model.title":"The model id your provider expects, e.g. gpt-image-2.5-flare","settings.baseUrl.label":"Endpoint","settings.baseUrl.hint":"An OpenAI-compatible endpoint, usually ending in /v1.","settings.baseUrl.title":"Once filled in, this takes priority over the Imagora source above","settings.apiKey.label":"API key","settings.apiKey.hint.configured":"Configured. Leave empty to keep it as is.","settings.apiKey.hint.plain":"Stored only in the local settings.json.","settings.apiKey.placeholder.keep":"Leave empty to keep","settings.apiKey.placeholder.paste":"Paste the API key","settings.probe.run":"Test","settings.probe.title.ready":"Reads the model list once \u2014 generates nothing, costs nothing","settings.probe.title.needUrl":"Fill in the endpoint first","settings.probe.ok":"Reachable \u2014 {count} models reported","settings.probe.okNoList":"Reachable, but this endpoint reports no model list (you can type one in)","settings.probe.fail":"Unreachable: {reason}","settings.probe.more":"\u2026{count} more","settings.inheritHint":"This endpoint and key come from the local Imagora setup. To use the plugin\u2019s own, switch \u201CConfig source\u201D above to \u201CPlugin settings\u201D.","settings.reset.confirm":"Clear the plugin settings and fall back to the local Imagora source?","settings.reset.confirmAction":"Clear it","settings.reset.link":"Clear plugin settings","settings.reset.done":"Plugin settings cleared \u2014 back to the local Imagora config","settings.root.label":"Imagora folder","settings.root.hint":"Once pointed at it, workflows and generation history are read from there rather than copied. Empty = the plugin\u2019s own data folder only.","settings.root.placeholder":"e.g. D:/imagora (holding config.json and .env)","settings.reveal":"Open folder","settings.reveal.title":"Open this folder in the file manager","settings.pick.root":"Choose the Imagora folder (holding config.json)","settings.pick.output":"Choose the default output folder","settings.pick.unsupported":"This machine cannot show a folder dialog \u2014 type the path instead","settings.pick.failed":"No folder dialog appeared: {reason}","settings.pick.unknown":"unknown reason","settings.outputDir.label":"Default output folder","settings.outputDir.hint":"Used by any card left empty. Now: {dir}","settings.outputDir.placeholder":"Empty = follow the Imagora folder above","settings.budget.label":"Cap for this canvas","settings.budget.hint":"Once the cap is hit, new jobs are refused outright.","settings.budget.placeholder":"Empty = no cap","settings.keyConfigured":"Key configured","settings.keyConfiguredFromEnv":"Key configured (from .env)","settings.keyMissing":"No key configured","settings.save.done":"Saved and live","settings.save.failed":"Could not save: {reason}","settings.reset.failed":"That did not work: {reason}","cost.money":"\xA5{value}","cost.title":"This canvas: {spent} \xB7 {cards} cards billed, {images} images made","cost.title.withBudget":"This canvas: {spent} of {cap} \xB7 {cards} cards billed, {images} images made","cost.over":"At cap","dock.zoomIn":"Zoom in","dock.zoomIn.title":"Zoom into the canvas (the wheel does this too)","dock.zoomOut":"Zoom out","dock.zoomOut.title":"Zoom out of the canvas (the wheel does this too)","dock.fit":"Fit","dock.fit.title":"Fit the view: bring every node into one screen","dock.focus":"Focus","dock.focus.title":"Focus: show the selection only, or the whole canvas when nothing is selected","dock.snap":"Snap","dock.snap.on":"Turn drag snapping off","dock.snap.off":"Turn drag snapping on","dock.minimap":"Map","dock.minimap.on":"Hide the minimap","dock.minimap.off":"Show the minimap","dock.lock":"Lock","dock.locked":"Locked","dock.lock.lock":"Lock the canvas so nodes cannot be dragged by accident (wheel zoom and Fit still work)","dock.lock.unlock":"Unlock the canvas","dock.help":"Help","dock.help.title":"How to use this canvas, plus shortcuts","inspector.runOne":"Run selected","inspector.runMany":"Run selected ({count})","inspector.run.title.one":"Run the one selected prompt card","inspector.run.title.many":"Run the {count} selected prompt cards (prompts only; images and groups are ignored)","inspector.layout":"Tidy up","inspector.layout.title":"Re-lay the selected nodes by reference depth and leave the rest where they are","inspector.connect":"Auto-connect","inspector.connect.title":"Wire up the obvious links among the selected nodes only","inspector.outputDir":"Set output folder","inspector.outputDir.title.one":"Pick an output folder for the one selected prompt card","inspector.outputDir.title.many":"Pick an output folder for the {count} selected prompt cards","inspector.delete":"Delete selected","inspector.countSuffix":" ({count})","empty.title":"This is a freeform canvas","empty.line1":"Start with a prompt card, drop images in as references \u2014 every link is a reference.","empty.line2":"Double-click an image to enlarge \xB7 wheel to zoom \xB7 drag empty space to pan","drop.releaseImage":"Release to add the image","drop.prompt":"Release to add a prompt card","drop.group":"Release to add an image group","drop.cancel":"Release to cancel","drop.images":"Release to add {count} images","drop.noImage":"No image detected","error.nodeTitle":"This card broke","error.nodeHint":"Select it and press Delete; the other cards are unaffected","error.retry":"Retry","error.canvasTitle":"The canvas failed to render","error.canvasBody":"Your workflow file is still on disk \u2014 nothing is lost. Try again first; if that fails, clear the canvas and load the workflow again.","error.clearCanvas":"Clear canvas","error.unknown":"Unknown error","select.empty":"No matches","select.placeholder":"Choose\u2026","select.searchPlaceholder":"Type to filter","select.searchAria":"Filter options","select.use":"Use \u201C{value}\u201D","select.customGroup":"Custom","history.nothingToUndo":"Nothing to undo","history.nothingToRedo":"Nothing to redo","images.onlyImage":"Images only, please","images.clipboard":"clipboard image","images.uploading":"Uploading {name} \u2026","images.added":"Added {name}","images.uploadFailed":"Upload failed: {reason}","images.replaced":"Replaced with {name}","images.replaceFailed":"Replace failed: {reason}","task.budget.confirm":`{reason}

Submit this job anyway?`,"task.budget.cancelled":"Cancelled by the cap: {reason}","task.budget.overridden":"Over the cap, confirmed \u2014 submitting: {reason}","task.done":"Done \xB7 {count}","task.done.cost":"Done \xB7 {count} \xB7 {cost}","task.cancelled":"Cancelled","task.failed":"Failed","task.failed.withReason":"{status} \xB7 {reason}","task.seeLog":"see the log","task.lost":"This job is gone (the host restarted or the job expired). Run it again.","task.lostLog":"Job lost \u2014 stopped polling","task.pollFailed":"Polling failed: {reason}","task.emptyPrompt":"The prompt is empty","task.missingRefs":"The prompt references images that are not on the canvas: {names}","task.submit":"Submit \xB7 {count} reference images \xB7 {size}","task.submitFailed":"Submit failed: {reason}","task.cancelFailed":"Cancel failed: {reason}","workflow.restored":"Restored your last canvas ({name})","workflow.restored.auto":"auto-recovered","workflow.dropped":"{count} nodes had incomplete data and were skipped ({reason})","workflow.saved":"Saved workflow \u201C{name}\u201D","workflow.saveFailed":"Could not save: {reason}","workflow.loaded":"Loaded \u201C{name}\u201D","workflow.loadFailed":"Could not load: {reason}","brand.title":"Freeform canvas \xB7 how to use it, plus shortcuts","history.title":"Generation history","history.search.placeholder":"Search prompts, quality, or filenames","history.filter.title":"Filter by status","history.filter.all":"Any status","history.filter.ok":"Succeeded","history.filter.error":"Failed","history.search":"Search","history.lostRefs":"{count} reference images lost","history.lostRefs.title":"An image-to-image run whose reference images can no longer be found in the asset store, so it cannot be reproduced","history.budget.daily":"Daily cap","history.budget.daily.title":"Today's spending cap in CNY; 0 = no cap. Over the cap you are asked to confirm before submitting","history.budget.single":"Per-run cap","history.budget.single.title":"Estimated cap for one submission in CNY; 0 = no cap","history.budget.save":"Save caps","history.budget.saved":"Caps saved","history.budget.saveFailed":"Could not save: {reason}","history.refresh":"Refresh","history.bySize":"By size","history.bySize.row":"{count} runs \xB7 {cost}","history.reading":"Reading history\u2026","history.imageAlt":"Generated image","history.zoom.title":"Double-click to enlarge","history.failed":"Generation failed","history.moved":"File moved","history.noPrompt":"No prompt","history.ref.title":"Reference image \xB7 double-click to enlarge","history.ref.alt":"Reference image","history.refMissing":"Reference image missing","history.copyPrompt":"Copy prompt","history.openDir":"Open folder","history.import":"Add to canvas","history.import.title":"Add as an image node on the canvas","history.import.noAsset":"This row has only a path and no asset copy \u2014 importing it would break the reference","history.loadingMore":"Loading more\u2026","history.loadMore":"Load more (showing {shown} of {total})","history.allShown":"All {total} records shown","history.empty":"No generation history yet","history.empty.noteBefore":"History reads Imagora's own ledger at","history.empty.noteAfter":"Point \u201CSettings\u201D at your local Imagora folder to read it. Images this plugin makes go into the asset store instead.","history.noMatch":"No matching records","history.where.fallback":"(no imagora folder set)","history.stat.todayCost":"Spent today","history.stat.cost":"Spent total","history.stat.successRate":"Success rate","history.stat.successRate.value":"{rate} ({ok}/{total})","history.stat.error":"Failed","history.stat.avgSeconds":"Avg time (successful)","zoom.copying":"Copying\u2026","zoom.copyFailed":"Copy failed","zoom.copied":"Image copied","zoom.copiedPath":"Path copied","zoom.alt":"Preview","zoom.close":"Close the preview","zoom.close.title":"Close (Esc)","zoom.dock.title":"Wheel to zoom \xB7 drag to pan once zoomed in \xB7 double-click to fit the window \xB7 click empty space or press Esc to close","zoom.out":"Zoom out","zoom.scale.title":"Actual on-screen scale relative to the original","zoom.scale.natural":"{width}\xD7{height} \xB7 actual on-screen scale relative to the original","zoom.in":"Zoom in","zoom.fit":"Fit window","zoom.actual":"Actual size","zoom.actual.title":"Actual size: one image pixel per screen pixel (a large image overflows the window \u2014 drag to look around)","zoom.copyImage":"Copy image","zoom.copyPath":"Copy path","zoom.openTab":"Open in a new tab","node.missing":"File missing","node.imageMissing":"No image","node.mask.title":"This image has a mask; every re-run repaints only inside it. Click to clear","node.mask.clear":"Clear mask","node.mask.badge":"Mask","node.refs":"Used {count}\xD7","node.noRefs":"Unused","node.image.preview":"View full size","node.image.crop":"Crop","node.image.upscale":"Upscale","node.image.split":"Split into a grid","node.image.mask":"Repaint with a mask","node.image.replace":"Replace image","node.image.delete":"Delete image","node.group.delete":"Delete group","node.group.count":"{count} images","node.group.dedup":"Deduped","node.group.dedup.title":"Removed {count} duplicate images","node.prompt.placeholder":"English prompt, e.g. a red apple on white background","node.prompt.untitled":"Prompt output","node.prompt.delete":"Delete prompt","node.prompt.size":"Size","node.prompt.size.title":"Output size","node.prompt.quality":"Quality","node.prompt.quality.title":"Generation quality","node.prompt.outputDir":"Output folder (empty = use the default)","node.prompt.customSize":"{size} (custom)","node.prompt.run":"Run","node.prompt.cancel":"Cancel","node.prompt.cancelling":"Cancelling\u2026","node.prompt.queueing":"Queued\u2026","node.prompt.cancel.title":"Queued jobs won't start; the running one is discarded once it finishes","status.idle":"Ready","status.queued":"Queued","status.running":"Generating","status.done":"Done","status.failed":"Failed","status.generating":"Generating {seconds}s","status.done.withCount":"Done \xB7 {count}","status.failed.withReason":"Failed: {reason}"};function zv(e,t){return t?e.replace(/\{(\w+)\}/g,(n,r)=>Object.prototype.hasOwnProperty.call(t,r)?String(t[r]):n):e}var ds=(e,t)=>zv(cs[e],t);var wp=require("react/jsx-runtime"),yp=(0,ni.createContext)(null);function xp({translate:e,children:t}){return(0,wp.jsx)(yp.Provider,{value:e??ds,children:t})}function ae(){return(0,ni.useContext)(yp)??ds}var ve=require("react/jsx-runtime"),Rv=4;function ht({options:e,value:t,onChange:n,className:r="",id:o,searchable:i,emptyLabel:a,allowCustom:s=!1,onCreateCustom:c,"aria-describedby":d,"aria-invalid":u,renderOption:l,title:p}){let m=ae(),[f,y]=(0,Ce.useState)(!1),[h,b]=(0,Ce.useState)(-1),[x,g]=(0,Ce.useState)(""),[w,k]=(0,Ce.useState)(null),S=(0,Ce.useRef)(null),N=(0,Ce.useRef)(null),C=(0,Ce.useRef)(null),M=(0,Ce.useId)(),O=`${o??`select-${M}`}-listbox`,D=`${O}-search`,L=(0,Ce.useMemo)(()=>{if(x.trim()==="")return e;let P=e.map(X=>({name:X.value,label:X.label,option:X}));return hp(P,x).map(X=>X.option)},[e,x]),T=i===void 0||i==="auto"?e.length>Rv:i,v=L.findIndex(P=>P.value===t),E=e.find(P=>P.value===t),z=P=>`${O}-option-${P}`,I=T&&s===!0,_=(0,Ce.useMemo)(()=>{let P=x.trim();if(P!=="")return L.find(X=>X.value===P||X.label===P)},[L,x]),R=(0,Ce.useMemo)(()=>{if(!I||_!==void 0)return null;let P=pp(x);return P.ok?P.value:null},[I,_,x]),V=(P=v>=0?v:0)=>{!e.length&&!I||(b(e.length===0?-1:Math.min(Math.max(P,0),e.length-1)),y(!0),T||window.setTimeout(()=>N.current?.focus(),0))},W=(P=!1)=>{y(!1),g(""),P&&window.setTimeout(()=>N.current?.focus(),0)},F=P=>{let X=L[P];X&&(n(X.value),W(!0))},Z=P=>{c?.(P),W(!0)},H=()=>{let P=N.current;if(!P)return;let X=P.getBoundingClientRect(),oe=4,re=8,j=P.offsetWidth||X.width,ne=Math.max(re,Math.min(X.left,window.innerWidth-j-re)),ue=window.innerHeight-X.bottom-oe-re,Q=X.top-oe-re,q=ue<160&&Q>ue,de=Math.max(120,Math.min(240,q?Q:ue));k({left:ne,top:q?Math.max(re,X.top-oe-de):X.bottom+oe,width:j,maxHeight:de})};(0,Ce.useEffect)(()=>{if(f)return ei(),()=>ti()},[f]),(0,Ce.useLayoutEffect)(()=>{if(!f)return;H();let P=()=>H();window.addEventListener("scroll",P,!0),window.addEventListener("resize",P);let X=typeof ResizeObserver>"u"?null:new ResizeObserver(P);return N.current&&X?.observe(N.current),()=>{X?.disconnect(),window.removeEventListener("scroll",P,!0),window.removeEventListener("resize",P)}},[f]),(0,Ce.useEffect)(()=>{f&&T&&w&&C.current?.focus()},[f,T,w]),(0,Ce.useEffect)(()=>{f&&b(P=>L.length===0?-1:Math.min(Math.max(P,0),L.length-1))},[f,L.length]),(0,Ce.useEffect)(()=>{!e.length&&!I&&f&&(y(!1),b(-1))},[f,e.length,I]),(0,Ce.useEffect)(()=>{let P=X=>{let oe=X.target;S.current?.contains(oe)||document.getElementById(O)?.contains(oe)||W()};return document.addEventListener("mousedown",P,!0),()=>document.removeEventListener("mousedown",P,!0)},[O]);let G=(P,X)=>{if(P.key==="Tab"){W();return}if(P.key==="Escape"){f&&(P.preventDefault(),W(!0));return}if(P.key==="ArrowDown"||P.key==="ArrowUp"){if(P.preventDefault(),!f){V();return}if(L.length===0)return;let oe=P.key==="ArrowDown"?1:-1;b(re=>(re+oe+L.length)%L.length);return}if(P.key==="Home"||P.key==="End"){if(L.length===0)return;P.preventDefault(),f||y(!0),b(P.key==="Home"?0:L.length-1);return}if(P.key==="Enter"){if(P.preventDefault(),!f){V();return}if(I&&x.trim()!==""){_!==void 0?(n(_.value),W(!0)):R!==null&&Z(R);return}F(h);return}!X&&P.key===" "&&(P.preventDefault(),f?F(h):V())},te=(0,Ce.useMemo)(()=>mp(L),[L]),ee=(0,Ce.useMemo)(()=>{let P=new Map;return L.forEach((X,oe)=>P.set(X,oe)),P},[L]);return(0,ve.jsxs)("div",{ref:S,className:`im-select-root ${r}`.trim(),children:[(0,ve.jsxs)("button",{ref:N,type:"button",id:o,title:p,onClick:()=>f?W():V(),onKeyDown:P=>G(P,!1),"aria-expanded":f,"aria-haspopup":"listbox","aria-controls":O,"aria-activedescendant":f&&h>=0?z(h):void 0,"aria-describedby":d,"aria-invalid":u,className:`im-select-trigger${f?" is-open":""}`,children:[l&&E?(0,ve.jsxs)("span",{className:"im-select-value",children:[l(E),(0,ve.jsx)("span",{className:"im-select-label",children:E.label})]}):(0,ve.jsx)("span",{className:"im-select-label",children:E?.label??m("select.placeholder")}),(0,ve.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ve.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),f&&w&&(0,vp.createPortal)((0,ve.jsxs)("div",{id:O,"data-portal":"select-list",className:"im-select-list",style:{left:w.left,top:w.top,width:w.width,maxHeight:w.maxHeight},children:[T&&(0,ve.jsx)("div",{className:"im-select-search",children:(0,ve.jsx)("input",{ref:C,id:D,type:"text",className:"im-select-search-input",value:x,onChange:P=>g(P.target.value),onKeyDown:P=>G(P,!0),placeholder:m("select.searchPlaceholder"),autoComplete:"off","aria-label":m("select.searchAria"),"aria-controls":O,"aria-activedescendant":h>=0?z(h):void 0})}),(0,ve.jsxs)("ul",{role:"listbox","aria-labelledby":T?D:void 0,className:"im-select-rows",children:[L.length===0&&(0,ve.jsx)("li",{role:"presentation",className:"im-select-empty",children:a??m("select.empty")}),te.map(P=>(0,ve.jsxs)("li",{role:"presentation",className:"im-select-group",children:[P.label!==""&&(0,ve.jsx)("div",{className:"im-select-group-title",role:"presentation",children:P.id==="__custom"?m("select.customGroup"):P.label}),(0,ve.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:P.rows.map(X=>{let oe=ee.get(X)??-1,re=X.value===t,j=oe===h;return(0,ve.jsxs)("li",{id:z(oe),role:"option","aria-selected":re,className:`im-select-option${re?" is-selected":""}${j?" is-active":""}`,onMouseEnter:()=>b(oe),onMouseDown:ne=>ne.preventDefault(),onClick:()=>F(oe),children:[l?(0,ve.jsxs)("span",{className:"im-select-value",children:[l(X),(0,ve.jsx)("span",{className:"im-select-label",children:X.label})]}):(0,ve.jsx)("span",{className:"im-select-label",children:X.label}),re&&(0,ve.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ve.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},X.value)})})]},P.id||"__ungrouped"))]}),R!==null&&(0,ve.jsx)("div",{className:"im-select-custom",children:(0,ve.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:P=>P.preventDefault(),onClick:()=>Z(R),children:(0,ve.jsx)("span",{className:"im-select-label",children:m("select.use",{value:R})})})})]}),document.body)]})}var Y=require("react/jsx-runtime"),us=(0,Oe.createContext)(null),ps=(0,Oe.createContext)(!1);function ms(){return(0,Oe.useContext)(ps)}function fs(){let e=(0,Oe.useContext)(us);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function Tv({value:e,onChange:t}){let[n,r]=(0,Oe.useState)(e),o=(0,Oe.useRef)(!1),i=ae();return(0,Oe.useEffect)(()=>{o.current||r(e)},[e]),(0,Y.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n,placeholder:i("node.prompt.placeholder"),onCompositionStart:()=>{o.current=!0},onCompositionEnd:a=>{o.current=!1,r(a.currentTarget.value),t(a.currentTarget.value)},onChange:a=>{let s=a.target.value;r(s),o.current||t(s)}})}function oi(){return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(wn,{type:"target",position:ie.Top,className:"im-handle"}),(0,Y.jsx)(wn,{type:"source",position:ie.Bottom,className:"im-handle"})]})}function gs({children:e}){return(0,Y.jsx)("div",{className:"im-rail nodrag",children:e})}function Bt({label:e,onClick:t,danger:n,children:r}){return(0,Y.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:o=>{o.stopPropagation(),t()},children:r})}var Cp=(0,Oe.memo)(function({id:t,data:n,selected:r}){let o=fs(),i=ms(),a=ae(),[s,c]=(0,Oe.useState)(!1),d=n.missing||s,u=lp(n.url);return(0,Y.jsxs)("div",{className:`im-panel-card${r?" is-selected":""}${d?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,Y.jsx)(oi,{}),d?(0,Y.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:a("node.missing")}):null,n.maskDataUrl?(0,Y.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:a("node.mask.title"),"aria-label":a("node.mask.clear"),onClick:l=>{l.stopPropagation(),o.clearMask(t)},children:a("node.mask.badge")}):null,i?null:(0,Y.jsxs)(gs,{children:[(0,Y.jsx)(Bt,{label:a("node.image.preview"),onClick:()=>o.zoomImage(t),children:(0,Y.jsx)(Pe,{name:"eye"})}),(0,Y.jsx)(Bt,{label:a("node.image.crop"),onClick:()=>o.cropImage(t),children:(0,Y.jsx)(Pe,{name:"crop"})}),(0,Y.jsx)(Bt,{label:a("node.image.upscale"),onClick:()=>o.upscaleImage(t),children:(0,Y.jsx)(Pe,{name:"expand"})}),(0,Y.jsx)(Bt,{label:a("node.image.split"),onClick:()=>o.splitImage(t),children:(0,Y.jsx)(Pe,{name:"grid"})}),(0,Y.jsx)(Bt,{label:a("node.image.mask"),onClick:()=>o.maskImage(t),children:(0,Y.jsx)(Pe,{name:"wand"})}),(0,Y.jsx)(Bt,{label:a("node.image.replace"),onClick:()=>o.replaceImage(t),children:(0,Y.jsx)(Pe,{name:"image"})}),(0,Y.jsx)(Bt,{label:a("node.image.delete"),danger:!0,onClick:()=>o.deleteNode(t),children:(0,Y.jsx)(Pe,{name:"trash"})})]}),(0,Y.jsx)("div",{className:"im-thumb",onDoubleClick:l=>{l.stopPropagation(),o.zoomImage(t)},children:n.url&&u?(0,Y.jsx)("img",{src:u,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>c(!0)}):n.url?(0,Y.jsx)("span",{className:"im-thumb-placeholder","aria-hidden":!0}):(0,Y.jsx)("span",{className:"im-muted",style:{fontSize:11},children:a("node.imageMissing")})}),(0,Y.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Y.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?a("node.refs",{count:n.refCount}):a("node.noRefs")})]})}),kp=4,Np=(0,Oe.memo)(function({id:t,data:n,selected:r}){let o=fs(),i=ms(),a=ae(),s=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",c=n.duplicateCount??0,d=Math.min(Math.max(n.imageCount-1,0),3);return(0,Y.jsxs)("div",{className:`im-group-node${r?" is-selected":""}`,children:[(0,Y.jsx)(oi,{}),i?null:(0,Y.jsx)(gs,{children:(0,Y.jsx)(Bt,{label:a("node.group.delete"),danger:!0,onClick:()=>o.deleteNode(t),children:(0,Y.jsx)(Pe,{name:"trash"})})}),(0,Y.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:d},(u,l)=>(0,Y.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*kp}px, ${-(l+1)*kp}px)`}},l)),(0,Y.jsxs)("div",{className:"im-group-face",children:[(0,Y.jsx)("div",{className:"im-group-count",children:a("node.group.count",{count:n.imageCount})}),(0,Y.jsxs)("div",{className:"im-group-size",children:[s," MB"]}),c>0?(0,Y.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:a("node.group.dedup.title",{count:c}),children:a("node.group.dedup")}):null]})]})]})});function Sp({from:e}){let t=ae(),[n,r]=(0,Oe.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Oe.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>r(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Y.jsx)(Y.Fragment,{children:t("status.generating",{seconds:n})})}var Dv={idle:"status.idle",queued:"status.queued",running:"status.running",done:"status.done",failed:"status.failed"};function Av(e,t){switch(e.status){case"queued":return{text:t("status.queued"),detail:t("status.queued"),tone:"is-queued"};case"running":return{text:t("status.running"),detail:t("status.running"),tone:"is-running"};case"done":{let n=t("status.done.withCount",{count:e.resultCount??0});return{text:n,detail:n,tone:"is-done"}}case"failed":return{text:t("status.failed"),detail:e.message?t("status.failed.withReason",{reason:e.message}):t("status.failed"),tone:"is-failed"};default:return{text:t("status.idle"),detail:t("status.idle"),tone:"is-idle"}}}var Mp=(0,Oe.memo)(function({id:t,data:n,selected:r}){let o=fs(),i=ms(),a=ae(),s=o.config,c=n.status==="queued"||n.status==="running",d=s?.sizes??[],u=s?.qualities??[],l=d.some(m=>m.value===n.size)||!n.size?d:[...d,{value:n.size,label:a("node.prompt.customSize",{size:n.size}),cost:0}],p=s?.qualityEffective!==!1;if(i){let m=Av(n,a);return(0,Y.jsxs)("div",{className:`im-panel-card im-node-lod${r?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,Y.jsx)(oi,{}),(0,Y.jsx)("div",{className:"im-lod-title",title:n.title??a("node.prompt.untitled"),children:n.title??a("node.prompt.untitled")}),(0,Y.jsx)("div",{className:`im-lod-status ${m.tone}`,title:m.detail,children:n.status==="running"?(0,Y.jsx)(Sp,{from:n.startedAtMs}):m.text})]})}return(0,Y.jsxs)("div",{className:`im-panel-card${r?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Y.jsx)(oi,{}),(0,Y.jsxs)(gs,{children:[(0,Y.jsx)("span",{className:"im-rail-dot",title:a(Dv[n.status]??"status.idle"),children:(0,Y.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Y.jsx)(Bt,{label:a("node.prompt.delete"),danger:!0,onClick:()=>o.deleteNode(t),children:(0,Y.jsx)(Pe,{name:"trash"})})]}),(0,Y.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??a("node.prompt.untitled")}),(0,Y.jsx)(Tv,{value:n.prompt,onChange:m=>o.updatePrompt(t,{prompt:m})}),(0,Y.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:p?"7fr 3fr":"1fr",marginTop:8},children:[(0,Y.jsxs)("div",{style:{minWidth:0},children:[(0,Y.jsx)("span",{className:"im-label",children:a("node.prompt.size")}),(0,Y.jsx)(ht,{className:"im-select-fill",options:up(l,n.size),value:n.size,title:a("node.prompt.size.title"),onChange:m=>o.updatePrompt(t,{size:m})})]}),p?(0,Y.jsxs)("div",{style:{minWidth:0},children:[(0,Y.jsx)("span",{className:"im-label",children:a("node.prompt.quality")}),(0,Y.jsx)(ht,{className:"im-select-fill",options:u.map(m=>({value:m,label:m})),value:n.quality,title:a("node.prompt.quality.title"),onChange:m=>o.updatePrompt(t,{quality:m})})]}):null]}),(0,Y.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Y.jsx)("span",{className:"im-label",children:a("node.prompt.outputDir")}),(0,Y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,Y.jsx)("input",{className:"im-field",style:{minWidth:0,flex:1},value:n.outputDir,placeholder:s?.defaultOutputDir??"",title:n.outputDir||s?.defaultOutputDir||"",onChange:m=>o.updatePrompt(t,{outputDir:m.target.value})}),(0,Y.jsx)(_o,{label:a("common.chooseFolder"),onClick:()=>void o.pickOutputDir(t)})]})]}),n.status==="failed"&&n.message?(0,Y.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Y.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Y.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${c?" im-btn-busy":""}`,style:{flex:1},disabled:c||!(n.prompt??"").trim(),onClick:m=>{m.stopPropagation(),o.runPrompt(t)},children:n.status==="running"?(0,Y.jsx)(Sp,{from:n.startedAtMs}):n.status==="queued"?a("node.prompt.queueing"):a("node.prompt.run")}),c?(0,Y.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:a("node.prompt.cancel.title"),onClick:m=>{m.stopPropagation(),o.cancelPrompt(t)},children:n.cancelRequested?a("node.prompt.cancelling"):a("node.prompt.cancel")}):null]})]})});var Ep=`
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

  /* \u900F\u660E\u5E95\u683C\u7EB9\uFF08\u68CB\u76D8\u683C\uFF09\uFF1A\u53EA\u5728**\u753B\u5E03\u8282\u70B9**\u91CC\u7528 \u2014\u2014 \u90A3\u91CC\u8981\u4E00\u773C\u770B\u51FA\u300C\u56FE\u662F\u900F\u660E\u7684\u300D\uFF0C
     \u800C\u4E0D\u662F\u300C\u56FE\u672C\u8EAB\u662F\u767D\u7684\u300D\u3002\u653E\u5927\u9884\u89C8\u523B\u610F\u4E0D\u7528\uFF08\u90A3\u8FB9\u770B\u7684\u662F\u6210\u54C1\u4E0E\u7EC6\u8282\uFF09\u3002
     \u4E24\u683C\u6DF1\u6D45\u5DEE\u7EA6 12/255\uFF1A\u591F\u8FA8\u8BA4\uFF0C\u53C8\u4E0D\u81F3\u4E8E\u62A2\u56FE\u3002\u6697\u8272\u5728\u4E0B\u65B9\u4E3B\u9898\u5757\u91CC\u6539\u5199\u3002 */
  --im-checker-base: #ffffff;
  --im-checker-tile: #ededed;

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
  /* \u68CB\u76D8\u683C\u5728\u6697\u8272\u4E0B\u8981\u53CD\u8FC7\u6765\uFF1A\u767D\u5E95\u683C\u7EB9\u5728\u6697\u754C\u9762\u91CC\u50CF\u8D34\u4E86\u4E00\u5F20\u7EB8\u3002
     \u4E24\u683C\u5DEE\u540C\u6837\u7EA6 12/255\uFF0C\u4E0E\u6D45\u8272\u4E00\u81F4\u3002 */
  --im-checker-base: #2a2a2c;
  --im-checker-tile: #363639;
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
/* \u8868\u5355\u884C\u91CC\u7684**\u56FE\u6807**\u6309\u94AE\uFF08\u76EE\u524D\u7684\u300C\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00\u300D\uFF09\uFF1A\u505A\u6210\u4E0E\u5B57\u6BB5\u7B49\u9AD8\u7684\u6B63\u65B9\u5F62\u3002
 *
 * \u4E0D\u8FD9\u4E48\u5199\u5C31\u662F\u4E2A 28\xD738 \u7684\u7A84\u6761 \u2014\u2014 \u5BBD\u9AD8\u6BD4\u522B\u626D\uFF0C\u800C\u4E14\u548C\u65C1\u8FB9\u90A3\u9897\u6587\u5B57\u6309\u94AE\u6324\u5728\u4E00\u8D77\u65F6
 * \u770B\u4E0D\u51FA\u662F\u4E00\u9897\u72EC\u7ACB\u6309\u94AE\u3002\u5BBD\u5EA6\u8DDF --im-h-field \u8D70\uFF0C\u6240\u4EE5\u6362\u9636\u68AF\u65F6\u5B83\u81EA\u5DF1\u8DDF\u7740\u53D8\u3002 */
.im-field-control > .im-icon-btn {
  flex: none;
  width: var(--im-h-field);
  height: var(--im-h-field);
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
  /* \u68CB\u76D8\u683C\u57AB\u5E95\uFF1A\u900F\u660E\u5E95 PNG \u5728\u8FD9\u91CC\u8981\u4E00\u773C\u770B\u51FA\u900F\u660E\uFF08\u4E0E Imagora \u7684 .checker \u540C\u753B\u6CD5\uFF09\u3002
     \u4E0D\u7528 --im-surface-inset \u2014\u2014 \u90A3\u53EA\u662F\u4E00\u5757\u7EAF\u8272\uFF0C\u900F\u660E\u56FE\u4F1A\u770B\u7740\u50CF\u767D\u5E95\u56FE\u3002 */
  background-color: var(--im-checker-base);
  background-image: linear-gradient(
      45deg,
      var(--im-checker-tile) 25%,
      transparent 25%,
      transparent 75%,
      var(--im-checker-tile) 75%
    ),
    linear-gradient(
      45deg,
      var(--im-checker-tile) 25%,
      transparent 25%,
      transparent 75%,
      var(--im-checker-tile) 75%
    );
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
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
  /* \u5BBD\u5EA6\u7531**\u6700\u5BBD\u7684\u4E00\u884C**\u51B3\u5B9A\uFF0C\u4E0D\u5728\u5BB9\u5668\u4E0A\u53E6\u5199 min-width\uFF08\u90A3\u4F1A\u591A\u51FA\u4E00\u6761\u53F3\u4FA7\u7A7A\u767D\uFF09\u3002
   *
   * \u66FE\u7ECF\u8FD9\u91CC\u628A\u884C\u5BBD\u9489\u6210\u56FA\u5B9A 64px \u2014\u2014 \u90A3\u662F\u6309\u4E2D\u6587\u4E24\u5B57\u6807\u7B7E\uFF08\u300C\u653E\u5927\u300D\u300C\u9002\u5E94\u300D\uFF09\u7B97\u7684\u3002
   * \u82F1\u6587\u6807\u7B7E\u957F\u5F97\u591A\uFF08\u300CZoom out\u300D\u6BD4\u300C\u7F29\u5C0F\u300D\u5BBD\u7EA6\u4E8C\u5341\u50CF\u7D20\uFF09\uFF0C\u56FA\u5B9A\u5BBD\u5EA6\u76F4\u63A5\u628A\u6587\u5B57\u88C1\u5728
   * \u5217\u7684\u53F3\u8FB9\u7F18\u4E0A\uFF0C\u800C\u4E14\u56E0\u4E3A overflow \u6CA1\u5F00\u3001\u6587\u5B57\u53EA\u662F\u6EA2\u51FA\u538B\u5230\u90BB\u5C45\uFF0C\u770B\u4E0D\u51FA\u662F\u5E03\u5C40\u95EE\u9898\u3002
   * \u73B0\u5728\uFF1A**\u5217\u5BBD = max-content\uFF0C\u884C\u53EA\u7ED9 64px \u4E0B\u9650**\uFF0C\u4E2D\u6587\u7248\u89C6\u89C9\u4E0E\u4EE5\u524D\u5B8C\u5168\u4E00\u81F4\u3002 */
  width: max-content;
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
  /* 64px \u662F**\u4E0B\u9650**\u4E0D\u662F\u5B9A\u5BBD\uFF1A\u56DB\u4F4D\u6570\u767E\u5206\u6BD4\u4E0E\u4E2D\u6587\u4E24\u5B57\u6807\u7B7E\u90FD\u653E\u5F97\u4E0B\uFF0C
     \u800C\u82F1\u6587\u6807\u7B7E\u9700\u8981\u7684\u90A3\u70B9\u989D\u5916\u5BBD\u5EA6\u7531 max-content \u81EA\u52A8\u7ED9\u51FA\uFF0C\u4E0D\u518D\u88AB\u88C1\u3002
     box-sizing \u5FC5\u987B\u5199\uFF1A\u4E0D\u5199\u7684\u8BDD\u5BBD\u5EA6\u662F\u5185\u5BB9\u5BBD\uFF0C\u52A0\u4E0A\u5DE6\u53F3\u5404 8px \u5185\u8FB9\u8DDD\u4F1A\u591A\u51FA 16px\u3002 */
  box-sizing: border-box;
  min-width: 64px;
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
`;var _p=require("react");var We=require("react/jsx-runtime"),jn=class extends _p.Component{state={error:null};static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[dsh-imagora-desk] \u6E32\u67D3\u51FA\u9519",t,n.componentStack),this.props.onError?.(t,n)}reset=()=>this.setState({error:null});render(){return this.state.error?this.props.fallback(this.state.error,this.reset):this.props.children}};function Ip(e,t){let n=String(e?.message??e??t("error.unknown")).split(`
`)[0]??"";return n.length>140?`${n.slice(0,140)}\u2026`:n}function ri({nodeId:e,children:t}){let n=ae();return(0,We.jsx)(jn,{fallback:(r,o)=>(0,We.jsxs)("div",{className:"im-node-error","data-node-id":e,title:String(r?.stack??r),children:[(0,We.jsx)("div",{className:"im-node-error-title",children:n("error.nodeTitle")}),(0,We.jsx)("p",{className:"im-node-error-msg",children:Ip(r,n)}),(0,We.jsx)("p",{className:"im-node-error-hint",children:n("error.nodeHint")}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs nodrag",onClick:o,children:n("error.retry")})]}),children:t})}function ii({children:e,onCrash:t,onClear:n}){let r=ae();return(0,We.jsx)(jn,{onError:o=>t?.(o),fallback:(o,i)=>(0,We.jsxs)("div",{className:"im-canvas-error",role:"alert",children:[(0,We.jsx)("h3",{className:"im-canvas-error-title",children:r("error.canvasTitle")}),(0,We.jsx)("p",{className:"im-canvas-error-msg",children:Ip(o,r)}),(0,We.jsx)("p",{className:"im-canvas-error-hint",children:r("error.canvasBody")}),(0,We.jsxs)("div",{className:"im-canvas-error-actions",children:[(0,We.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",onClick:i,children:r("error.retry")}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>{n(),i()},children:r("error.clearCanvas")})]})]}),children:e})}var bs=require("react/jsx-runtime");function hs(e){function t(n){return(0,bs.jsx)(ri,{nodeId:n?.id,children:(0,bs.jsx)(e,{...n})})}return t.displayName=`Bounded(${e.displayName||e.name||"Node"})`,t}var Pp={image:hs(Cp),prompt:hs(Mp),group:hs(Np)};var ai=Math.round(5),zp=Math.round(200);function Ov(e){return Number.isNaN(e)?ai:e===Number.POSITIVE_INFINITY?zp:e===Number.NEGATIVE_INFINITY?ai:Math.min(zp,Math.max(ai,Math.round(e)))}function Rp(e){return Number.isNaN(e)||e<=0?ai:Ov(e*100)}var ys=.15,Lv=.2;function Tp(e,t){return!e&&t<ys?!0:e&&t>Lv?!1:e}var kn=require("react/jsx-runtime"),Hv="0 0 1024 1024",Bv="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function xs({size:e=30,fill:t="var(--im-brand)"}){return(0,kn.jsx)("svg",{width:e,height:e,viewBox:Hv,fill:t,"aria-hidden":"true",children:(0,kn.jsx)("path",{d:Bv})})}function Dp({onClick:e}){let t=ae();return(0,kn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:t("brand.title"),children:[(0,kn.jsx)(xs,{}),(0,kn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var Op=require("react");var Sn=require("react/jsx-runtime");function $v(e){let t=0,n=0,r=0;for(let o of e){if(o.type!=="prompt")continue;let i=Number(o.data?.cost??0);i>0&&(t+=i,r+=1),n+=Number(o.data?.resultCount??0)}return{total:t,images:n,cards:r}}function Lp(e){return(0,Op.useMemo)(()=>$v(e),[e])}function Ap(e,t){return e("cost.money",{value:t.toFixed(2)})}function Hp({summary:e,budget:t}){let n=ae(),r=e.total,o=Number.isFinite(t)&&t>0,i=o?Math.min(1,r/t):0,a=o&&r>=t,s=Ap(n,r);return(0,Sn.jsxs)("span",{className:`im-cost${a?" is-over":""}`,title:o?n("cost.title.withBudget",{spent:s,cap:Ap(n,t),cards:e.cards,images:e.images}):n("cost.title",{spent:s,cards:e.cards,images:e.images}),children:[(0,Sn.jsx)("span",{className:"im-cost-num",children:s}),o?(0,Sn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,Sn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(i*100)}%`}})}):null,a?(0,Sn.jsx)("span",{className:"im-cost-flag",children:n("cost.over")}):null]})}var ze=require("react/jsx-runtime");function Bp(e){let{config:t,promptCount:n,runnableIds:r,busyIds:o,canUndo:i,canRestore:a}=e,s=ae(),c=(d,u,l)=>(0,ze.jsx)("button",{type:"button",className:`${l.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:l.title,disabled:l.disabled,onClick:u,children:d});return(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsxs)("div",{className:"im-header",children:[(0,ze.jsx)(Dp,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,ze.jsx)(ht,{className:"im-select-profile",options:[...(t.profiles??[]).map(d=>({value:d.name,label:d.label})),{value:"",label:s("toolbar.profile.follow")}],value:t.profile,title:s("toolbar.profile.title"),onChange:d=>e.onSwitchProfile(d)}):null,t&&(t.models?.length??0)>1?(0,ze.jsx)(ht,{className:"im-select-model",options:t.models.map(d=>({value:d.id,label:d.label})),value:t.model,title:s("toolbar.model.title",{profile:t.profileLabel||t.profile}),onChange:d=>e.onSwitchModel(d)}):null,(0,ze.jsx)(Hp,{summary:e.cost,budget:t?.budget??0}),(0,ze.jsx)("span",{className:"im-spacer"}),c(s("toolbar.settings"),e.onOpenSettings,{title:s("toolbar.settings.title")})]}),(0,ze.jsxs)("div",{className:"im-toolbar",children:[(0,ze.jsxs)("div",{className:"im-toolbar-group",children:[c(s("toolbar.upload"),e.onPickFiles,{title:s("toolbar.upload.title"),primary:!0}),c(s("toolbar.paste"),e.onPasteImport,{title:s("toolbar.paste.title")}),(0,ze.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:s("toolbar.newPrompt.title"),draggable:!0,onDragStart:d=>e.onDragCreateNode(d,"prompt"),onClick:e.onAddPrompt,children:[s("toolbar.newPrompt"),(0,ze.jsx)("span",{className:"im-drag-grip",children:(0,ze.jsx)(Pe,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,ze.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:s("toolbar.newGroup.title"),draggable:!0,onDragStart:d=>e.onDragCreateNode(d,"group"),onClick:e.onAddGroup,children:[s("toolbar.newGroup"),(0,ze.jsx)("span",{className:"im-drag-grip",children:(0,ze.jsx)(Pe,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,ze.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[c(s("toolbar.save"),e.onOpenSave,{title:s("toolbar.save.title")}),c(s("toolbar.load"),e.onOpenLoad,{title:s("toolbar.load.title")}),c(s("toolbar.history"),e.onOpenHistory,{title:s("toolbar.history.title")}),c(s("toolbar.outputDir"),e.onOpenDefaultOutputDir,{title:s("toolbar.outputDir.title",{dir:t?.defaultOutputDir||s("common.notSet")})}),c(s("toolbar.undo"),e.onUndo,{disabled:!i,title:s("toolbar.undo.title")}),c(s("toolbar.redo"),e.onRestore,{disabled:!a,title:s("toolbar.redo.title")}),c(s("toolbar.autoConnect"),e.onAutoConnect,{title:s("toolbar.autoConnect.title")}),c(s("toolbar.runAll"),()=>e.onRun(r),{title:s("toolbar.runAll.title"),disabled:!n}),o>0?(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:s("toolbar.cancelAll.title"),onClick:e.onCancelAll,children:s("toolbar.cancelAll",{count:o})}):null]})]})]})}async function Po(e,t,n){try{let r=await Fu({title:t.title,startAt:t.startAt??""});return r.ok?r.path??null:(r.reason==="cancelled"||n?.(r.reason==="unsupported"?e("settings.pick.unsupported"):e("settings.pick.failed",{reason:r.reason||e("settings.pick.unknown")})),null)}catch(r){return n?.(e("settings.pick.failed",{reason:r?.message||e("settings.pick.unknown")})),null}}var Ve=require("react/jsx-runtime");function jt({icon:e,label:t,title:n,active:r,onClick:o}){return(0,Ve.jsxs)("button",{type:"button",className:`im-dock-row nodrag${r?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":r===void 0?void 0:r,onClick:o,children:[(0,Ve.jsx)(Pe,{name:e,size:14}),(0,Ve.jsx)("span",{className:"im-dock-row-label",children:t})]})}function $p(e){let{zoom:t,snapEnabled:n,canvasLocked:r,minimapOpen:o}=e,i=ae();return(0,Ve.jsxs)("div",{className:"im-dock nodrag",children:[(0,Ve.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,Ve.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Rp(t),"%"]})}),(0,Ve.jsx)(jt,{icon:"zoomIn",label:i("dock.zoomIn"),title:i("dock.zoomIn.title"),onClick:e.onZoomIn}),(0,Ve.jsx)(jt,{icon:"zoomOut",label:i("dock.zoomOut"),title:i("dock.zoomOut.title"),onClick:e.onZoomOut}),(0,Ve.jsx)(jt,{icon:"maximize",label:i("dock.fit"),title:i("dock.fit.title"),onClick:e.onFitView}),(0,Ve.jsx)(jt,{icon:"focus",label:i("dock.focus"),title:i("dock.focus.title"),onClick:e.onFocusSelected}),(0,Ve.jsx)(jt,{icon:"magnet",label:i("dock.snap"),title:i(n?"dock.snap.on":"dock.snap.off"),active:n,onClick:e.onToggleSnap}),(0,Ve.jsx)(jt,{icon:"map",label:i("dock.minimap"),title:i(o?"dock.minimap.on":"dock.minimap.off"),active:o,onClick:e.onToggleMinimap}),(0,Ve.jsx)(jt,{icon:r?"lock":"unlock",label:i(r?"dock.locked":"dock.lock"),title:i(r?"dock.lock.unlock":"dock.lock.lock"),active:r,onClick:e.onToggleLock}),(0,Ve.jsx)(jt,{icon:"help",label:i("dock.help"),title:i("dock.help.title"),onClick:e.onOpenHelp})]})}var Ge=require("react"),Vp=require("react-dom");var ws="application/x-dsh-imagora-canvas";function vs(e){return e.dataTransfer?.types.includes("Files")??!1}function zo(e,t){if(vs(e))return"images";let n=e.dataTransfer?.getData(ws);return n==="prompt"||n==="group"?n:t}function Fp(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Wp(e){return Array.from(e?.files??[]).filter(Wr)}function ks(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var $t=require("react/jsx-runtime");function Ss(e,t,n,r){return t==="images"?e("drop.images",{count:n}):e(r?t==="prompt"?"drop.prompt":"drop.group":"drop.cancel")}var Fv=22,Wv=28,si=8;function Gp(e){let t=ae(),{canvasRef:n,modalOpen:r,getCreatePosition:o,toFlowPosition:i,onDropFiles:a,onDropNode:s,onRejectFiles:c}=e,[d,u]=(0,Ge.useState)(null),l=(0,Ge.useRef)(null),p=(0,Ge.useRef)(0),m=(0,Ge.useRef)(null),f=(0,Ge.useRef)(null),y=(0,Ge.useRef)(null),h=(0,Ge.useCallback)((N,C)=>{l.current=N,u(N);let M=y.current;M&&M.textContent!==C&&(M.textContent=C)},[]),b=(0,Ge.useCallback)(()=>{l.current=null,p.current=0,u(null),f.current?.classList.remove("is-outside")},[]),x=(0,Ge.useCallback)((N,C)=>{let M=m.current;if(!M)return;let O=Math.min(N+Fv,window.innerWidth-M.offsetWidth-si),D=Math.min(C+Wv,window.innerHeight-M.offsetHeight-si);M.style.transform=`translate(${Math.max(si,O)}px, ${Math.max(si,D)}px)`},[]),g=(0,Ge.useCallback)((N,C,M)=>{let O=n.current;if(!O)return o();let D=O.getBoundingClientRect(),L=M?Math.min(Math.max(N,D.left),D.left+D.width):N,T=M?Math.min(Math.max(C,D.top),D.top+D.height):C;return i({x:L,y:T})},[n,o,i]);(0,Ge.useEffect)(()=>{let N=O=>{vs(O)&&O.preventDefault()},C=O=>{let D=l.current;if(!D||D==="images")return;x(O.clientX,O.clientY);let L=n.current,T=!!(L&&ks(O.clientX,O.clientY,L.getBoundingClientRect())),v=Ss(t,D,0,T),E=y.current;E&&E.textContent!==v&&(E.textContent=v),f.current?.classList.toggle("is-outside",!T)},M=()=>{p.current=0,b()};return window.addEventListener("dragover",N),window.addEventListener("dragover",C),window.addEventListener("drop",N),window.addEventListener("dragend",M),window.addEventListener("blur",M),()=>{window.removeEventListener("dragover",N),window.removeEventListener("dragover",C),window.removeEventListener("drop",N),window.removeEventListener("dragend",M),window.removeEventListener("blur",M)}},[n,b,x]);let w={onDragEnter:N=>{if(r)return;let C=zo(N,l.current);if(!C)return;N.preventDefault(),C==="images"&&(p.current+=1);let M=Fp(N.dataTransfer);h(C,M>=1?Ss(t,"images",M,!0):t("drop.noImage")),x(N.clientX,N.clientY)},onDragOver:N=>{r||!zo(N,l.current)||(N.preventDefault(),N.dataTransfer.dropEffect="copy",x(N.clientX,N.clientY))},onDragLeave:N=>{r||zo(N,l.current)==="images"&&(p.current-=1,p.current<=0&&b())},onDrop:N=>{if(r)return;let C=zo(N,l.current);if(!C)return;N.preventDefault();let M=n.current,O=!M||ks(N.clientX,N.clientY,M.getBoundingClientRect());if(b(),C==="images"){let D=Wp(N.dataTransfer);if(!D.length){c();return}a(D,g(N.clientX,N.clientY,!0));return}O&&s(C,g(N.clientX,N.clientY,!1))}},k=(0,Ge.useCallback)((N,C)=>{N.dataTransfer.setData(ws,C),N.dataTransfer.effectAllowed="copy",h(C,Ss(t,C,0,!0)),x(N.clientX,N.clientY)},[x,h]),S=(0,Vp.createPortal)((0,$t.jsx)("div",{ref:m,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,$t.jsxs)("div",{ref:f,className:`im-drop-chip${d?" show":""}`,children:[(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,$t.jsx)(Pe,{name:d==="group"?"layers":d==="images"?"image":"plus",size:14})}),(0,$t.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,$t.jsx)(Pe,{name:"close",size:14})}),(0,$t.jsx)("span",{ref:y,children:t("drop.releaseImage")})]})}),document.body);return{dropIntent:d,dropChip:S,dragHandlers:w,startToolbarDrag:k,hideDropChip:b}}var Ft=require("react");var Up=2;function Xp({rootRef:e,canvasRef:t,instanceRef:n,setNodes:r,modalOpen:o}){let[i,a]=(0,Ft.useState)(null),[s,c]=(0,Ft.useState)(null),d=(0,Ft.useRef)(null),u=(0,Ft.useCallback)(()=>a(null),[]);return(0,Ft.useEffect)(()=>{if(o){d.current=null,c(null);return}let l=t.current,p=e.current;if(!l||!p)return;let m=x=>{if(x.button!==2)return;let g=n.current;if(!g)return;let w=x.target instanceof Element?x.target:null;if(w?.closest("input, textarea, [contenteditable]"))return;let k=g.screenToFlowPosition({x:x.clientX,y:x.clientY}),S=w?.closest(".react-flow__node"),N=S instanceof HTMLElement?S.dataset.id??null:null;d.current={startFlow:k,nodeId:N,clientX:x.clientX,clientY:x.clientY},c({x:k.x,y:k.y,width:0,height:0}),x.preventDefault()},f=x=>{let g=d.current,w=n.current;if(!g||!w)return;let k=w.screenToFlowPosition({x:x.clientX,y:x.clientY});c({x:Math.min(g.startFlow.x,k.x),y:Math.min(g.startFlow.y,k.y),width:Math.abs(k.x-g.startFlow.x),height:Math.abs(k.y-g.startFlow.y)})},y=x=>{let g=d.current,w=n.current;if(!g||!w)return;d.current=null;let k=w.screenToFlowPosition({x:x.clientX,y:x.clientY}),S={x:Math.min(g.startFlow.x,k.x),y:Math.min(g.startFlow.y,k.y),width:Math.abs(k.x-g.startFlow.x),height:Math.abs(k.y-g.startFlow.y)};if(c(null),S.width<Up&&S.height<Up){a(g.nodeId?{x:g.clientX,y:g.clientY,nodeId:g.nodeId}:null);return}a(null),r(N=>{let C=!1,M=N.map(O=>{let D=Be(O),L=O.position.x>=S.x&&O.position.y>=S.y&&O.position.x+D.width<=S.x+S.width&&O.position.y+D.height<=S.y+S.height;return L===!!O.selected?O:(C=!0,{...O,selected:L})});return C?M:N})},h=x=>{let g=x.target instanceof Element?x.target:null;g&&(g.closest("input, textarea, [contenteditable]")||x.preventDefault())},b=()=>{d.current&&(d.current=null,c(null))};return l.addEventListener("mousedown",m),window.addEventListener("mousemove",f),window.addEventListener("mouseup",y),p.addEventListener("contextmenu",h,!0),window.addEventListener("blur",b),()=>{l.removeEventListener("mousedown",m),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",y),p.removeEventListener("contextmenu",h,!0),window.removeEventListener("blur",b)}},[t,e,n,r,o]),{nodeMenu:i,boxRect:s,closeMenu:u,setNodeMenu:a}}var St=require("react"),Kp=require("react-dom");function kt(e,t,n={}){let r={id:e,label:t};return n.danger&&(r.danger=!0),n.disabled&&(r.disabled=!0),{kind:"action",action:r}}var Cs={kind:"separator"};function qp(e,t){let n=[];if(t.selectedCount>1&&(n.push(kt("delete-selection",`\u5220\u9664\u6240\u9009 ${t.selectedCount} \u9879`,{danger:!0})),n.push(Cs)),e==="image"){let o=!t.hasUrl;n.push(kt("preview","\u9884\u89C8\u5927\u56FE",{disabled:o}),kt("crop","\u88C1\u526A",{disabled:o}),kt("upscale","\u653E\u5927",{disabled:o}),kt("split","\u5207\u5206",{disabled:o}),kt("mask","\u8499\u7248\u91CD\u7ED8",{disabled:o}),kt("replace","\u66FF\u6362\u56FE\u7247"),Cs)}else e==="prompt"&&n.push(kt("run","\u8FD0\u884C"),kt("copy-prompt","\u590D\u5236\u63D0\u793A\u8BCD"),Cs);let r=t.selectedCount>1?"\u4EC5\u5220\u9664\u6B64\u9879":"\u5220\u9664";return n.push(kt("delete",r,{danger:!0})),n}function Ns(e,t,n,r=8){let o=Math.max(0,n.width-t.width-r),i=Math.max(0,n.height-t.height-r);return{x:Math.min(Math.max(0,e.x),o),y:Math.min(Math.max(0,e.y),i)}}function Yp(e){return e.reduce((t,n)=>t+(n.kind==="action"?28:9),0)}function Zp(e){return e==="Escape"||e==="Tab"}var li=require("react/jsx-runtime");function jp(){return{width:window.innerWidth,height:window.innerHeight}}function Gv(e,t,n){return Ns({x:e,y:t},{width:200,height:Yp(n)},jp())}function Qp({x:e,y:t,items:n,onPick:r,onClose:o}){let i=ae(),a=(0,St.useRef)(null),[s,c]=(0,St.useState)(()=>Gv(e,t,n)),[d,u]=(0,St.useState)(null);return(0,St.useEffect)(()=>(ei(),()=>ti()),[]),(0,St.useLayoutEffect)(()=>{let l=a.current?.getBoundingClientRect().height??0;if(l<=0)return;let p=Ns({x:e,y:t},{width:200,height:l},jp());c(m=>m.x===p.x&&m.y===p.y?m:p)},[e,t]),(0,St.useEffect)(()=>{let l=f=>{let y=f.target;y instanceof Node&&a.current?.contains(y)||o()},p=f=>{f.defaultPrevented||Zp(f.key)&&o()},m=()=>o();return document.addEventListener("pointerdown",l),document.addEventListener("keydown",p),window.addEventListener("resize",m),window.addEventListener("scroll",m,!0),()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",p),window.removeEventListener("resize",m),window.removeEventListener("scroll",m,!0)}},[o]),(0,Kp.createPortal)((0,li.jsx)("div",{ref:a,role:"menu","aria-label":i("menu.aria"),"data-testid":"node-context-menu",className:"im-select-list",style:{left:s.x,top:s.y,width:200,zIndex:72,userSelect:"none"},children:n.map((l,p)=>{if(l.kind==="separator")return(0,li.jsx)("div",{role:"separator",className:"im-menu-separator"},`separator-${p}`);let{action:m}=l,f=m.disabled===!0;return(0,li.jsx)("button",{type:"button",role:"menuitem","data-testid":`node-menu-${m.id}`,"aria-disabled":f?"true":void 0,className:`im-select-option${d===m.id?" is-active":""}${m.danger?" is-danger":""}${f?" is-disabled":""}`,style:{height:28,minHeight:0,paddingTop:0,paddingBottom:0},onClick:()=>{f||r(m.id)},onMouseEnter:()=>u(m.id),onMouseLeave:()=>u(null),children:m.label},m.id)})}),document.body)}var Uv={"delete-selection":"menu.deleteSelection",preview:"menu.preview",crop:"menu.crop",upscale:"menu.upscale",split:"menu.split",mask:"menu.mask",replace:"menu.replace",run:"menu.run","copy-prompt":"menu.copyPrompt",delete:"menu.delete"};function Jp(e,t,n){if(e==="delete")return n(t>1?"menu.deleteOnly":"menu.delete");if(e==="delete-selection")return n("menu.deleteSelection",{count:t});let r=Uv[e];return r?n(r):e}var em="dsh-imagora.canvas-minimap.v1";function tm(){try{let e=localStorage.getItem(em);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function nm(e){try{localStorage.setItem(em,e?"1":"0")}catch{}}var Qt=require("react/jsx-runtime");function ci(e,t){return t>1?e("inspector.countSuffix",{count:t}):""}function Es(e,t,n,r,o={}){return e(t>1?r:n,{count:t,...o})}function om(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:r,pickingOutputDir:o}=e,i=ae();return t<1?null:(0,Qt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Qt.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!r.length,title:Es(i,r.length,"inspector.run.title.one","inspector.run.title.many"),onClick:e.onRunSelected,children:Es(i,r.length,"inspector.runOne","inspector.runMany")}):null,(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:i("inspector.layout.title"),onClick:e.onAutoLayout,children:[i("inspector.layout"),ci(i,t)]}),(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:i("inspector.connect.title"),onClick:e.onAutoConnectSelected,children:[i("inspector.connect"),ci(i,t)]}),n>0?(0,Qt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:o,title:Es(i,n,"inspector.outputDir.title.one","inspector.outputDir.title.many"),onClick:e.onSetOutputDir,children:o?i("common.choosing"):`${i("inspector.outputDir")}${ci(i,n)}`}):null,(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:[i("inspector.delete"),ci(i,t)]})]})}var Ze=require("react/jsx-runtime");function rm(){let e=ae();return(0,Ze.jsxs)("div",{className:"im-empty",children:[(0,Ze.jsx)("strong",{children:e("empty.title")}),(0,Ze.jsx)("span",{children:e("empty.line1")}),(0,Ze.jsx)("span",{children:e("empty.line2")})]})}var Xv=5;function im({logs:e}){if(!e.length)return null;let t=e.slice(-Xv);return(0,Ze.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,r)=>(0,Ze.jsx)("div",{className:"im-log-line",children:n},`${r}-${n}`))})}var qv={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function am({text:e}){return e?(0,Ze.jsx)("div",{style:qv,children:e}):null}function sm({tone:e,children:t,action:n}){return(0,Ze.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ze.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ze.jsx)(Pe,{name:e==="error"?"help":"clock"})}),(0,Ze.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ze.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var Ne=require("react"),gm=require("react-dom");async function Yv(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let r=await createImageBitmap(n);try{let o=document.createElement("canvas");o.width=r.width,o.height=r.height;let i=o.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(r,0,0);let a=await new Promise(s=>o.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{r.close()}}async function lm(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await Yv(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function cm(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var Ro=e=>Math.min(8,Math.max(.2,e));function dm(e,t,n,r){if(!n.width||!n.height)return e;let o=n.width*t,i=n.height*t,a=Math.max(0,(o-r.width)/2),s=Math.max(0,(i-r.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function um(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function pm(e,t,n){return Math.round(e*um(t,n)*100)}function mm(e,t){let n=um(e,t);return n?Ro(1/n):1}var Zv=.1;function fm(e,t,n=Zv){let r=1-2*n,o=t.width*r,i=t.height*r;return!e.width||!e.height||o<=0||i<=0?1:Ro(Math.min(o/e.width,i/e.height))}var ye=require("react/jsx-runtime"),di=1.2,Kv=5;function ui({imageUrl:e,name:t,copyPath:n,onClose:r}){let o=ae(),[i,a]=(0,Ne.useState)({zoom:1,pan:{x:0,y:0}}),[s,c]=(0,Ne.useState)(!1),[d,u]=(0,Ne.useState)(null),l=(0,Ne.useRef)(null),p=(0,Ne.useRef)(!1),m=d?.kind==="copying",f=(0,Ne.useRef)(null),[y,h]=(0,Ne.useState)(null),b=(0,Ne.useRef)({width:0,height:0}),x=(0,Ne.useRef)(null),g=(0,Ne.useRef)(null),w=(0,Ne.useRef)(null),k=(0,Ne.useRef)(null),S=(0,Ne.useCallback)(_=>{let R=w.current;return R?{zoom:_.zoom,pan:dm(_.pan,_.zoom,b.current,{width:R.clientWidth,height:R.clientHeight})}:_},[]),N=(0,Ne.useCallback)(()=>a({zoom:1,pan:{x:0,y:0}}),[]),C=(0,Ne.useCallback)(()=>{let _=k.current;if(!_)return;b.current={width:_.clientWidth,height:_.clientHeight};let R={width:_.naturalWidth,height:_.naturalHeight};f.current=R,h(V=>V&&V.width===R.width&&V.height===R.height?V:R)},[]);(0,Ne.useEffect)(()=>{let _=()=>C();return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[C]);let M=(0,Ne.useCallback)(()=>{let _=mm(f.current,b.current);a(R=>S({zoom:_,pan:R.pan}))},[S]),O=(0,Ne.useCallback)(()=>{let _=g.current;if(!_)return;let R=fm(b.current,{width:_.clientWidth,height:_.clientHeight});a({zoom:R,pan:{x:0,y:0}})},[]);(0,Ne.useEffect)(()=>{let _=w.current;if(!_)return;let R=V=>{V.preventDefault(),V.stopPropagation();let W=_.getBoundingClientRect(),F=V.clientX-W.left-W.width/2,Z=V.clientY-W.top-W.height/2;a(H=>{let G=Ro(V.deltaY<0?H.zoom*di:H.zoom/di);if(G===H.zoom)return H;let te=G/H.zoom;return S({zoom:G,pan:{x:F-(F-H.pan.x)*te,y:Z-(Z-H.pan.y)*te}})})};return _.addEventListener("wheel",R,{passive:!1}),()=>_.removeEventListener("wheel",R)},[S]),(0,Ne.useEffect)(()=>{let _=R=>{R.key==="Escape"&&r()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[r]),(0,Ne.useEffect)(()=>()=>{l.current&&window.clearTimeout(l.current)},[]);let D=(_,R)=>{u({kind:_,text:R}),l.current&&window.clearTimeout(l.current),l.current=_==="copying"?null:window.setTimeout(()=>u(null),1200)},L=async(_,R)=>{if(!p.current){p.current=!0,D("copying",o("zoom.copying"));try{await _(),D("copied",R)}catch(V){D("failed",V instanceof Error?V.message:o("zoom.copyFailed"))}finally{p.current=!1}}},T=_=>{i.zoom<=1||(_.preventDefault(),_.stopPropagation(),_.currentTarget instanceof Element&&_.currentTarget.setPointerCapture(_.pointerId),x.current={startX:_.clientX,startY:_.clientY,panX:i.pan.x,panY:i.pan.y,moved:!1,onImage:_.target===k.current},c(!0))},v=_=>{let R=x.current;if(!R)return;let V=_.clientX-R.startX,W=_.clientY-R.startY;!R.moved&&Math.hypot(V,W)<=Kv||(R.moved=!0,a(F=>S({...F,pan:{x:R.panX+V,y:R.panY+W}})))},E=()=>{let _=x.current;x.current=null,c(!1),_&&!_.moved&&!_.onImage&&r()},z=_=>{let R=_.target instanceof Element?_.target:null;R&&(R.closest("button, a, [data-zoom-image], [data-zoom-controls]")||r())},I=_=>a(R=>S({...R,zoom:Ro(R.zoom*_)}));return(0,gm.createPortal)((0,ye.jsxs)("div",{ref:g,className:"im-zoom-overlay",onPointerDown:z,onClick:_=>_.stopPropagation(),children:[(0,ye.jsx)("div",{ref:w,className:"im-zoom-viewport",style:{cursor:s?"grabbing":i.zoom>1?"grab":"zoom-in"},onPointerDown:T,onPointerMove:v,onPointerUp:E,onPointerCancel:E,onDoubleClick:_=>{_.stopPropagation(),N()},children:(0,ye.jsx)("img",{ref:k,"data-zoom-image":!0,src:e,alt:t??o("zoom.alt"),draggable:!1,onLoad:()=>{let _=k.current;_&&(f.current={width:_.naturalWidth,height:_.naturalHeight},b.current={width:_.clientWidth,height:_.clientHeight},C())},className:"im-zoom-image",style:{transform:`translate(${i.pan.x}px, ${i.pan.y}px) scale(${i.zoom})`,transition:s?"none":"transform 0.1s ease-out"}})}),(0,ye.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,ye.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,ye.jsx)("div",{"aria-hidden":!0}),(0,ye.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":o("zoom.close"),title:o("zoom.close.title"),onClick:r,children:(0,ye.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,ye.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,ye.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,ye.jsxs)("div",{className:"im-zoom-dock",title:o("zoom.dock.title"),children:[(0,ye.jsxs)("div",{className:"im-zoom-group",children:[(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":o("zoom.out"),title:o("zoom.out"),onClick:()=>I(1/di),children:(0,ye.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,ye.jsx)("path",{d:"M3.5 8h9"})})}),(0,ye.jsxs)("span",{className:"im-zoom-readout",title:y?o("zoom.scale.natural",{width:y.width,height:y.height}):o("zoom.scale.title"),children:[pm(i.zoom,y,b.current),"%"]}),(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":o("zoom.in"),title:o("zoom.in"),onClick:()=>I(di),children:(0,ye.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,ye.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,ye.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,ye.jsxs)("div",{className:"im-zoom-group",children:[(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:O,children:o("zoom.fit")}),(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:M,title:o("zoom.actual.title"),children:o("zoom.actual")})]}),(0,ye.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,ye.jsxs)("div",{className:"im-zoom-group",children:[(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:m,onClick:()=>void L(()=>lm(e),o("zoom.copied")),children:o("zoom.copyImage")}),n?(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:m,onClick:()=>void L(()=>cm(n),o("zoom.copiedPath")),children:o("zoom.copyPath")}):null,(0,ye.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:o("zoom.openTab")})]}),d?(0,ye.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${d.kind==="failed"?" is-failed":d.kind==="copied"?" is-copied":""}`,children:d.text}):null]})})]}),document.body)}var _s=require("react");var Jt=require("react"),ym=require("react-dom");var Ct=require("react/jsx-runtime"),hm=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),To=[];function bm(e){return To[To.length-1]===e}function Le({title:e,subtitle:t,children:n,onClose:r,size:o="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:c=!1,headerless:d=!1}){let u=`im-modal-${(0,Jt.useId)()}`,l=`${u}-title`,p=(0,Jt.useRef)(null),m=(0,Jt.useRef)(null),f=(0,Jt.useRef)(r);return f.current=r,(0,Jt.useEffect)(()=>{m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,To.push(u);let h=p.current;(a?.current??h?.querySelector(hm)??h)?.focus();let x=g=>{if(!bm(u))return;if(g.key==="Escape"){if(fp())return;g.preventDefault(),g.stopPropagation(),f.current();return}if(g.key!=="Tab"||!h)return;let w=Array.from(h.querySelectorAll(hm)).filter(N=>!N.hidden&&N.getAttribute("aria-hidden")!=="true");if(!w.length){g.preventDefault(),h.focus();return}let k=w[0],S=w[w.length-1];!k||!S||(g.shiftKey&&(document.activeElement===k||!h.contains(document.activeElement))?(g.preventDefault(),S.focus()):!g.shiftKey&&document.activeElement===S&&(g.preventDefault(),k.focus()))};return document.addEventListener("keydown",x,!0),()=>{document.removeEventListener("keydown",x,!0);let g=To.lastIndexOf(u);g>=0&&To.splice(g,1);let w=m.current;window.setTimeout(()=>w?.focus(),0)}},[a]),(0,ym.createPortal)((0,Ct.jsx)("div",{className:`im-modal-shell${c?" im-modal-shell--nested":""}`,onMouseDown:h=>{s&&h.target===h.currentTarget&&bm(u)&&r()},children:(0,Ct.jsxs)("section",{ref:p,role:"dialog","aria-modal":"true","aria-labelledby":l,tabIndex:-1,className:`im-modal-panel im-modal-panel--${o}`,onMouseDown:h=>h.stopPropagation(),children:[d?(0,Ct.jsx)("h2",{id:l,className:"visually-hidden",children:e}):(0,Ct.jsxs)("header",{className:"im-modal-header",children:[(0,Ct.jsx)("h2",{id:l,className:"im-modal-title",children:e}),t?(0,Ct.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,Ct.jsx)("div",{className:"im-modal-body",children:n}),i?(0,Ct.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var pe=require("react/jsx-runtime");function xm({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:r}){let o=ae(),[i,a]=(0,_s.useState)(()=>o("save.defaultName",{stamp:new Date().toISOString().slice(5,16).replace("T"," ")})),[s,c]=(0,_s.useState)(null),d=i.trim(),u=e.some(m=>m.name===d),l=()=>{if(d){if(u&&s!==d){c(d);return}n(d)}},p=r?o("save.where.shared",{dir:`${r}\\output\\workflows`}):o("save.where",{dir:o("save.where.fallback")});return s?(0,pe.jsx)(Le,{title:o("save.overwriteTitle"),subtitle:o("save.overwriteSubtitle",{name:s}),size:"sm",onClose:()=>c(null),footer:(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>c(null),children:o("save.back")}),(0,pe.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(s),children:o("save.overwrite")})]}),children:(0,pe.jsx)("p",{className:"im-modal-note",children:o("save.overwriteWarn")})}):(0,pe.jsxs)(Le,{title:o("save.title"),subtitle:o("save.subtitle"),size:"sm",onClose:t,footer:(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:o("common.cancel")}),(0,pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!d,onClick:l,children:o("common.save")})]}),children:[(0,pe.jsx)("input",{autoFocus:!0,value:i,"aria-label":o("save.nameAria"),placeholder:o("save.namePlaceholder"),className:"im-field",onChange:m=>a(m.target.value),onKeyDown:m=>{m.key==="Enter"&&l()}}),(0,pe.jsx)("p",{className:"im-modal-note",style:{marginTop:8},children:p}),e.length?(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:o("save.overwriteMore")}),(0,pe.jsx)("div",{className:"im-pick-list",children:e.map(m=>(0,pe.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>a(m.name),children:[(0,pe.jsx)("span",{className:"im-pick-name",children:m.name}),(0,pe.jsx)("span",{className:"im-pick-meta",children:m.modified})]},m.name))})]}):null]})}function wm({workflows:e,onCancel:t,onPick:n,imagoraRoot:r}){let o=ae(),i=r?o("load.where",{dir:`${r}\\output\\workflows`}):o("load.where",{dir:o("save.where.fallback")});return(0,pe.jsx)(Le,{title:o("load.title"),subtitle:o("load.subtitle"),size:"sm",onClose:t,footer:(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:o("common.close")}),children:e.length?(0,pe.jsx)("div",{className:"im-workflow-list",children:e.map(a=>(0,pe.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(a.name),children:[(0,pe.jsx)("span",{className:"im-workflow-list__name",children:a.name}),(0,pe.jsx)("span",{className:"im-workflow-list__meta",children:new Date(a.modified).toLocaleString()})]},a.name))}):(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("div",{className:"im-modal-empty",children:o("load.empty")}),(0,pe.jsx)("p",{className:"im-modal-note",children:i})]})})}var jv=[["help.rows.canvas","help.rows.canvasText"],["help.rows.node","help.rows.nodeText"],["help.rows.edge","help.rows.edgeText"],["help.rows.keys","help.rows.keysText"],["help.rows.refs","help.rows.refsText"],["help.rows.run","help.rows.runText"],["help.rows.save","help.rows.saveText"]];function vm({onClose:e,config:t}){let n=ae();return(0,pe.jsx)(Le,{title:n("help.title"),subtitle:n("help.subtitle"),size:"md",onClose:e,footer:(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:n("common.close")}),children:(0,pe.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,pe.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:jv.map(([r,o])=>(0,pe.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,pe.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n(r)}),(0,pe.jsx)("span",{style:{lineHeight:1.6},children:n(o)})]},r))}),t?(0,pe.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:[n("help.config",{source:t.source==="plugin"?n("help.config.plugin"):t.root||n("help.config.missing"),model:t.modelLabel}),(0,pe.jsx)("br",{}),n("help.output",{dir:t.defaultOutputDir})]}):null]})})}var nt=require("react");function Ke(e,t,n){if(Number.isNaN(e))return t;let r=Math.min(t,n),o=Math.max(t,n);return Math.min(o,Math.max(r,e))}function Sm(e,t=.06){let n=Ke(e.width,t,1),r=Ke(e.height,t,1);return{width:n,height:r,x:Ke(e.x,0,1-n),y:Ke(e.y,0,1-r)}}function Cm(e,t,n){return{...e,x:Ke(e.x+t,0,1-e.width),y:Ke(e.y+n,0,1-e.height)}}function Nm(e,t,n,r,o,i){let a={...e};if(r.includes("e")&&(a.width=e.width+t),r.includes("s")&&(a.height=e.height+n),r.includes("w")&&(a.x=e.x+t,a.width=e.width-t),r.includes("n")&&(a.y=e.y+n,a.height=e.height-n),o!==null&&o>0&&i.width>0&&i.height>0){let s=o*(i.height/i.width);(r.includes("e")||r.includes("w"))&&!r.includes("n")&&!r.includes("s")||r.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,r.includes("w")&&(a.x=e.x+e.width-a.width),r.includes("n")&&(a.y=e.y+e.height-a.height);let u=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=u,a.height*=u,a.width<.06||a.height<.06){let m=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=m,a.height*=m}a.width=Ke(a.width,.06,1),a.height=Ke(a.height,.06,1);let l=Math.min(a.width,a.height*s,1),p=Math.min(a.height,l/s,1);a.width=p*s,a.height=p}else a.width=Ke(a.width,.06,1),a.height=Ke(a.height,.06,1);return a.x=Ke(a.x,0,1-a.width),a.y=Ke(a.y,0,1-a.height),a}function Mm(e,t,n){let r=t*(n.height/n.width),o=e.width,i=o/r;return i>e.height&&(i=e.height,o=i*r),o>1&&(o=1,i=o/r),i>1&&(i=1,o=i*r),{x:Ke(e.x+(e.width-o)/2,0,1-o),y:Ke(e.y+(e.height-i)/2,0,1-i),width:o,height:i}}function Is(e,t,n){let r=Math.max(1,e,t),o=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(o)))/r;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Qv(e,t){let n=Math.abs(Math.round(e)),r=Math.abs(Math.round(t));for(;r;){let o=n%r;n=r,r=o}return Math.max(1,n)}function Em(e,t){let n=Qv(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function Ps(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),r.src=e})}async function en(e){let t=await Ps(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function pi(e,t){let n=await Ps(e);if(t)return km(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let r=Math.min(n.width,n.height),o=Math.max(0,Math.floor((n.width-r)/2)),i=Math.max(0,Math.floor((n.height-r)/2));return km(n,o,i,r,r)}async function _m(e,t){let n=await Ps(e),{width:r,height:o}=Is(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?Jv(n,r,o):Im(n,n.width,n.height,r,o,t.algorithm)}function km(e,t,n,r,o){let i=document.createElement("canvas");i.width=Math.max(1,r),i.height=Math.max(1,o);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,r,o,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function Jv(e,t,n){let r=e,o=e.width,i=e.height;for(;o*2<t&&i*2<n;){let a=o*2,s=i*2;r=Pm(r,o,i,a,s,"high"),o=a,i=s}return Im(r,o,i,t,n,"high")}function Im(e,t,n,r,o,i){return Pm(e,t,n,r,o,i).toDataURL("image/png")}function Pm(e,t,n,r,o,i){let a=document.createElement("canvas");a.width=r,a.height=o;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,r,o)),a}var De=require("react/jsx-runtime"),zm=[{label:null,ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}];function Rm(e,t){return e.label??t("crop.ratio.free")}var t1=["nw","n","ne","e","se","s","sw","w"],zs={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function Tm({src:e,name:t,onClose:n,onConfirm:r}){let o=ae(),i=(0,nt.useRef)(null),[a,s]=(0,nt.useState)(null),[c,d]=(0,nt.useState)({x:.08,y:.08,width:.84,height:.84}),[u,l]=(0,nt.useState)(null),[p,m]=(0,nt.useState)(!1),[f,y]=(0,nt.useState)(null),h=(0,nt.useRef)(null);(0,nt.useEffect)(()=>{let C=!0;return en(e).then(M=>{C&&(s(M),d(Sm({x:.06,y:.06,width:.88,height:.88})))}).catch(M=>{C&&y(o("dialog.readImageFailed",{reason:me(M)}))}),()=>{C=!1}},[e]);let b=C=>{l(C),a&&C!==null&&d(M=>Mm(M,C,a))},x=(C,M)=>{C.stopPropagation(),C.target.setPointerCapture?.(C.pointerId),h.current={mode:M,startX:C.clientX,startY:C.clientY,base:c}},g=(0,nt.useCallback)(C=>{let M=h.current,O=i.current;if(!M||!O)return;let D=O.getBoundingClientRect();if(!D.width||!D.height)return;let L=(C.clientX-M.startX)/D.width,T=(C.clientY-M.startY)/D.height;d(M.mode==="move"?Cm(M.base,L,T):Nm(M.base,L,T,M.mode,u,a??{width:1,height:1}))},[u,a]),w=()=>{h.current=null},k=async()=>{m(!0),y(null);try{let C=await pi(e,c),M=Math.round(c.width*(a?.width??0)),O=Math.round(c.height*(a?.height??0)),D=u?Rm(zm.find(L=>L.ratio===u),o):null;await r(C,D?o("crop.resultName.ratio",{width:M,height:O,ratio:D}):o("crop.resultName",{width:M,height:O}))}catch(C){y(o("crop.failed",{reason:me(C)}))}finally{m(!1)}},S=a?Math.round(c.width*a.width):0,N=a?Math.round(c.height*a.height):0;return(0,De.jsx)(Le,{title:o("crop.title"),subtitle:o("crop.subtitle"),size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsxs)("span",{className:"im-modal-note",children:[o("crop.note",{width:S,height:N}),a?` \xB7 ${o("crop.note.original",{width:a.width,height:a.height})}`:"",a?` \xB7 ${o("crop.note.gcd",{ratio:Em(a.width,a.height)})}`:"",(0,De.jsx)("br",{}),o("crop.note.hint",{min:Math.round(.06*100)})]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:o("common.cancel")}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:p||!a||S<8||N<8,onClick:()=>void k(),children:o(p?"crop.busy":"crop.confirm")})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":o("crop.ratio.group"),children:[(0,De.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:o("crop.ratio")}),zm.map(C=>{let M=C.ratio===u;return(0,De.jsx)("button",{type:"button","aria-pressed":M,className:`im-chip im-chip--sm im-chip--action${M?" is-brand":""}`,onClick:()=>b(C.ratio),children:Rm(C,o)},C.label??"free")}),(0,De.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[S," \xD7 ",N,"px"]})]}),(0,De.jsxs)("div",{ref:i,onPointerMove:g,onPointerUp:w,onPointerCancel:w,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,De.jsx)("img",{src:e,alt:t??o("crop.alt"),style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,De.jsx)("div",{onPointerDown:C=>x(C,"move"),style:{position:"absolute",left:`${c.x*100}%`,top:`${c.y*100}%`,width:`${c.width*100}%`,height:`${c.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:t1.map(C=>(0,De.jsx)("span",{onPointerDown:M=>x(M,C),style:{position:"absolute",left:zs[C].left,top:zs[C].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:zs[C].cursor}},C))})]}),f?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:f}):null]})})}var Ue=require("react");function Rs(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Ts(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Ds(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Ts(e)*n/2}function Dm(e,t,n=.004){if(!Rs(t))return e;let r=e[e.length-1];if(!r)return[t];let o=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-r.x,t.y-r.y)<=o?e:[...e,t]}function Am(e,t,n,r){if(!Rs(e)||!Rs(t))return[];if(!(r.width>0)||!(r.height>0))return[];if(!Number.isFinite(r.width)||!Number.isFinite(r.height))return[];let o=n/4;if(!Number.isFinite(o)||o<=0)return[];let i=(t.x-e.x)*r.width,a=(t.y-e.y)*r.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/o);if(c<=1)return[];let d=Math.min(c,2048),u=[];for(let l=1;l<d;l+=1){let p=l/d;u.push({x:e.x+(t.x-e.x)*p,y:e.y+(t.y-e.y)*p})}return u}function n1(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function Om(e){return!n1(e)}var Ae=require("react/jsx-runtime"),mi=640;function Lm({src:e,name:t,onClose:n,onConfirm:r}){let o=ae(),i=(0,Ue.useRef)(null),a=(0,Ue.useRef)(!1),[s,c]=(0,Ue.useState)(null),[d,u]=(0,Ue.useState)(null),[l,p]=(0,Ue.useState)([]),[m,f]=(0,Ue.useState)("paint"),[y,h]=(0,Ue.useState)(.08),[b,x]=(0,Ue.useState)(!1),[g,w]=(0,Ue.useState)(null);(0,Ue.useEffect)(()=>{let T=!0;en(e).then(E=>{T&&c(E)}).catch(E=>{T&&w(o("dialog.readImageFailed",{reason:me(E)}))});let v=new Image;return v.crossOrigin="anonymous",v.onload=()=>{T&&u(v)},v.src=e,()=>{T=!1,u(null)}},[e]);let k=(0,Ue.useMemo)(()=>s?s.width>=s.height?{width:mi,height:Math.round(s.height/s.width*mi)}:{width:Math.round(s.width/s.height*mi),height:mi}:{width:0,height:0},[s]);(0,Ue.useEffect)(()=>{let T=i.current;if(!T||!d||!k.width)return;let v=T.getContext("2d");if(!v||(T.width=k.width,T.height=k.height,v.clearRect(0,0,k.width,k.height),v.drawImage(d,0,0,k.width,k.height),!s))return;let E=Ds(y,{width:k.width,height:k.height});v.save(),v.globalAlpha=.55,v.fillStyle="#ffffff",v.strokeStyle="#ffffff",v.lineWidth=E*2,v.lineCap="round",v.lineJoin="round";for(let z of l){z.mode==="erase"?(v.globalCompositeOperation="destination-out",v.strokeStyle="#000",v.fillStyle="#000"):(v.globalCompositeOperation="source-over",v.strokeStyle="#ffffff",v.fillStyle="#ffffff");let I=z.points;if(I.length&&(v.beginPath(),v.arc(I[0].x*k.width,I[0].y*k.height,E,0,Math.PI*2),v.fill(),I.length>1)){v.beginPath(),v.moveTo(I[0].x*k.width,I[0].y*k.height);for(let _ of I.slice(1))v.lineTo(_.x*k.width,_.y*k.height);v.stroke()}}v.restore()},[k,l,y,s,d]);let S=T=>{let v=i.current;if(!v)return null;let E=v.getBoundingClientRect();return!E.width||!E.height?null:{x:Math.min(1,Math.max(0,(T.clientX-E.left)/E.width)),y:Math.min(1,Math.max(0,(T.clientY-E.top)/E.height))}},N=T=>{let v=S(T);v&&(T.currentTarget.setPointerCapture?.(T.pointerId),a.current=!0,p(E=>[...E,{mode:m,size:y,points:[v]}]))},C=T=>{if(!a.current)return;let v=S(T);v&&p(E=>{let z=E[E.length-1];if(!z)return E;let I=Dm(z.points,v);return I===z.points?E:[...E.slice(0,-1),{...z,points:I}]})},M=()=>{a.current=!1},O=async()=>{if(!d||!s)throw new Error(o("mask.noBase"));let T=document.createElement("canvas");T.width=s.width,T.height=s.height;let v=T.getContext("2d");if(!v)throw new Error(o("mask.noCanvas"));v.fillStyle="#ffffff",v.fillRect(0,0,s.width,s.height);let E=Ds(y,{width:s.width,height:s.height});v.globalCompositeOperation="destination-out",v.lineWidth=E*2,v.lineCap="round",v.lineJoin="round",v.strokeStyle="#000",v.fillStyle="#000";for(let z of l){if(z.mode!=="paint")continue;let I=Am(z.points[0],z.points[z.points.length-1],E/4,{width:s.width,height:s.height});if(I.length&&(v.beginPath(),v.arc(I[0].x*s.width,I[0].y*s.height,E,0,Math.PI*2),v.fill(),I.length>1)){v.beginPath(),v.moveTo(I[0].x*s.width,I[0].y*s.height);for(let _ of I.slice(1))v.lineTo(_.x*s.width,_.y*s.height);v.stroke()}}return T.toDataURL("image/png")},D=async()=>{x(!0),w(null);try{let T=await O();await r(T,o("mask.resultName"))}catch(T){w(o("mask.failed",{reason:me(T)}))}finally{x(!1)}},L=Om(l);return(0,Ae.jsx)(Le,{title:o("mask.title"),subtitle:o("mask.subtitle"),size:"lg",onClose:n,footer:(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:o("common.cancel")}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:b||L,onClick:()=>void D(),children:o(b?"mask.busy":"mask.confirm")})]}),children:(0,Ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ae.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",key:"mask.mode.paint"},{mode:"erase",key:"mask.mode.erase"}].map(T=>(0,Ae.jsx)("button",{type:"button","aria-pressed":m===T.mode,className:`im-chip im-chip--sm im-chip--action${m===T.mode?" is-brand":""}`,onClick:()=>f(T.mode),children:o(T.key)},T.mode)),(0,Ae.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:[o("mask.brush"),(0,Ae.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(y*100),onChange:T=>h(Ts(Number(T.target.value)/100)),className:"im-range"}),(0,Ae.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(y*100),"%"]})]}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>p([]),children:o("mask.clear")}),(0,Ae.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?o("mask.strokes",{count:l.length}):o("mask.noStrokes")})]}),(0,Ae.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,Ae.jsx)("canvas",{ref:i,onPointerDown:N,onPointerMove:C,onPointerUp:M,onPointerCancel:M,style:{width:k.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,Ae.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:[o("mask.note"),t?` \xB7 ${t}`:"",s?` \xB7 ${o("mask.note.original",{width:s.width,height:s.height})}`:""]}),g?(0,Ae.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:g}):null]})})}var he=require("react");function Hm(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(1)}%`}function Bm(e){if(typeof e!="number"||!Number.isFinite(e)||e<=0)return"-";if(e<60)return`${e.toFixed(1)}s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}m${String(n).padStart(2,"0")}s`}var tn=require("react"),$m=require("react-dom"),Cn=require("react/jsx-runtime");function Fm({text:e}){let t=(0,tn.useRef)(null),n=(0,tn.useRef)(null),[r,o]=(0,tn.useState)(null),[i,a]=(0,tn.useState)(0),s=u=>{let l=t.current;l&&l.scrollHeight>l.clientHeight&&o(u.clientY)},c=u=>{o(l=>l!==null?u.clientY:l)},d=()=>{o(null),a(0)};return(0,tn.useLayoutEffect)(()=>{if(r!==null&&n.current){let u=n.current.getBoundingClientRect();a(Math.max(8,Math.min(r+16,window.innerHeight-u.height-8)))}},[r,e]),(0,Cn.jsxs)(Cn.Fragment,{children:[(0,Cn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:c,onMouseLeave:d,children:e}),r!==null?(0,$m.createPortal)((0,Cn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var J=require("react/jsx-runtime");function As(e,t){return e("cost.money",{value:t.toFixed(2)})}function a1(e,t){return[{label:e("history.stat.todayCost"),value:As(e,t.todayCost)},{label:e("history.stat.cost"),value:As(e,t.cost)},{label:e("history.stat.successRate"),value:e("history.stat.successRate.value",{rate:Hm(t.successRate),ok:t.ok,total:t.total})},{label:e("history.stat.error"),value:String(t.error)},{label:e("history.stat.avgSeconds"),value:Bm(t.avgSeconds)}]}var Wm=60;function s1(e){return e.replace(/[\\/][^\\/]+$/,"")}function Vm({onClose:e,onImport:t,imagoraRoot:n}){let r=ae(),[o,i]=(0,he.useState)([]),[a,s]=(0,he.useState)(""),[c,d]=(0,he.useState)(""),[u,l]=(0,he.useState)(!1),[p,m]=(0,he.useState)(0),[f,y]=(0,he.useState)(!0),[h,b]=(0,he.useState)(!1),[x,g]=(0,he.useState)(""),[w,k]=(0,he.useState)("ledger"),[S,N]=(0,he.useState)(""),[C,M]=(0,he.useState)(null),[O,D]=(0,he.useState)(new Map),[L,T]=(0,he.useState)(null),[v,E]=(0,he.useState)({dailyLimit:"",singleRunLimit:""}),[z,I]=(0,he.useState)(!1),[_,R]=(0,he.useState)(""),V=(0,he.useRef)(null),W=(0,he.useRef)(0),F=(0,he.useRef)([]),Z=(0,he.useRef)(a),H=(0,he.useRef)(c);Z.current=a,H.current=c;let G=(0,he.useCallback)(async q=>{let de=++W.current;y(!0),g("");try{let be=await ja({limit:Wm,offset:0,query:q?.query??Z.current,status:q?.status??H.current});if(de!==W.current)return;let Ee=Array.isArray(be.items)?be.items:[];k(be.source==="ledger"?"ledger":"none"),N(typeof be.ledgerPath=="string"?be.ledgerPath:""),i(Ee),F.current=Ee,l(be.hasMore===!0),m(Number(be.total)||Ee.length)}catch(be){de===W.current&&g(me(be))}finally{de===W.current&&y(!1)}},[]),te=(0,he.useCallback)(async()=>{if(h||!u)return;let q=W.current;b(!0);try{let de=await ja({limit:Wm,offset:F.current.length,query:Z.current,status:H.current});if(q!==W.current)return;let be=Array.isArray(de.items)?de.items:[];i(Ee=>[...Ee,...be]),F.current=[...F.current,...be],l(de.hasMore===!0),m(Number(de.total)||F.current.length)}catch(de){q===W.current&&g(me(de))}finally{q===W.current&&b(!1)}},[u,h]);(0,he.useEffect)(()=>{G(),Gr().then(M).catch(()=>M(null)),Tu().then(q=>D(new Map((q?.images??[]).map(de=>[de.id,de])))).catch(()=>D(new Map))},[G]);let ee=(0,he.useRef)(!1);(0,he.useEffect)(()=>{!C?.localBudget||ee.current||E({dailyLimit:C.localBudget.dailyLimit?String(C.localBudget.dailyLimit):"0",singleRunLimit:C.localBudget.singleRunLimit?String(C.localBudget.singleRunLimit):"0"})},[C]);let P=q=>{ee.current=!0,R(""),E(de=>({...de,...q}))},X=async()=>{I(!0),R("");let q={dailyLimit:Math.max(0,Number(v.dailyLimit)||0),singleRunLimit:Math.max(0,Number(v.singleRunLimit)||0)};try{await Vu(q);let de=await Gr();M(de),ee.current=!1,R(r("history.budget.saved"))}catch(de){R(r("history.budget.saveFailed",{reason:me(de)}))}finally{I(!1)}},oe=600,re=(0,he.useCallback)(()=>{let q=V.current;q&&q.scrollHeight-q.scrollTop-q.clientHeight<oe&&te()},[te]),j=(0,he.useMemo)(()=>o.filter(q=>q.status==="error"&&q.inputRefMissing).length,[o]),ne=C?a1(r,C):[],ue=C?.bySize.slice(0,3)??[],Q=S||(n?`${n}\\logs\\generation.jsonl`:r("history.where.fallback"));return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Le,{title:r("history.title"),size:"wide",headerless:!0,onClose:e,children:(0,J.jsxs)("div",{className:"im-history",children:[(0,J.jsxs)("div",{className:"im-history-bar",children:[(0,J.jsx)("h2",{className:"im-history-title",children:r("history.title")}),(0,J.jsx)("input",{className:"im-field im-history-search",value:a,placeholder:r("history.search.placeholder"),"aria-label":r("history.search.placeholder"),onChange:q=>s(q.target.value),onKeyDown:q=>{q.key==="Enter"&&G()}}),(0,J.jsx)(ht,{className:"im-history-status",value:c,title:r("history.filter.title"),options:[{value:"",label:r("history.filter.all")},{value:"ok",label:r("history.filter.ok")},{value:"error",label:r("history.filter.error")}],onChange:q=>{d(q),G({status:q})}}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void G(),children:r("history.search")}),(0,J.jsxs)("div",{className:"im-history-bar-end",children:[j>0?(0,J.jsx)("span",{className:"im-history-warn",title:r("history.lostRefs.title"),children:r("history.lostRefs",{count:j})}):null,(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:r("common.close")})]})]}),ne.length?(0,J.jsxs)("div",{className:"im-history-stats",children:[(0,J.jsxs)("div",{className:"im-history-stat-row",children:[(0,J.jsx)("div",{className:"im-history-stat-grid",children:ne.map(q=>(0,J.jsxs)("div",{className:"im-history-stat",children:[(0,J.jsx)("div",{className:"im-history-stat-label",children:q.label}),(0,J.jsx)("div",{className:"im-history-stat-value",children:q.value})]},q.label))}),(0,J.jsxs)("div",{className:"im-history-budget",children:[(0,J.jsxs)("label",{className:"im-history-budget-field",children:[(0,J.jsx)("span",{className:"im-history-budget-label",children:r("history.budget.daily")}),(0,J.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:v.dailyLimit,title:r("history.budget.daily.title"),onChange:q=>P({dailyLimit:q.target.value})})]}),(0,J.jsxs)("label",{className:"im-history-budget-field",children:[(0,J.jsx)("span",{className:"im-history-budget-label",children:r("history.budget.single")}),(0,J.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:v.singleRunLimit,title:r("history.budget.single.title"),onChange:q=>P({singleRunLimit:q.target.value})})]}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:z||f,onClick:()=>void X(),children:r(z?"common.saving":"history.budget.save")}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void Gr().then(M).catch(()=>{}),children:r("history.refresh")}),_?(0,J.jsx)("span",{className:"im-history-budget-tip",children:_}):null]})]}),ue.length?(0,J.jsxs)("div",{className:"im-history-sizes",children:[(0,J.jsx)("span",{className:"im-history-sizes-label",children:r("history.bySize")}),ue.map(q=>(0,J.jsxs)("span",{className:"im-history-sizes-row",children:[q.size," ",(0,J.jsx)("span",{className:"im-history-sizes-label",children:r("history.bySize.row",{count:q.count,cost:As(r,q.cost)})})]},q.size))]}):null]}):null,(0,J.jsxs)("div",{ref:V,className:"im-history-list",onScroll:re,"data-testid":"history-list",children:[x?(0,J.jsx)("div",{className:"im-history-error",children:x}):null,f?(0,J.jsx)("div",{className:"im-history-empty",children:r("history.reading")}):o.length?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("ul",{className:"im-history-rows",children:o.map((q,de)=>{let be=q.assetId?O.get(q.assetId):void 0,Ee=!!be;return(0,J.jsxs)("li",{className:"im-history-row",children:[(0,J.jsx)("div",{className:"im-history-thumb",children:q.url?(0,J.jsx)("img",{src:q.url,alt:q.prompt||r("history.imageAlt"),loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:r("history.zoom.title"),onDoubleClick:()=>T({url:q.url,path:q.path})}):(0,J.jsx)("span",{className:"im-history-thumb-empty",children:q.status==="error"?r("history.failed"):r("history.moved")})}),(0,J.jsxs)("div",{className:"im-history-main",children:[(0,J.jsx)(Fm,{text:q.prompt||r("history.noPrompt")}),(0,J.jsxs)("p",{className:"im-history-meta",children:[q.time||"-"," \xB7 ",q.quality||"-"," \xB7 ",q.size||"-"]}),q.inputRefs.length?(0,J.jsx)("div",{className:"im-history-refs",children:q.inputRefs.map(Te=>(0,J.jsx)("div",{className:"im-history-ref",title:r("history.ref.title"),children:(0,J.jsx)("img",{src:Te.url,alt:r("history.ref.alt"),loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>T({url:Te.url,path:Te.path})})},Te.id))}):null,q.inputRefMissing?(0,J.jsx)("span",{className:"im-history-ref-missing",children:r("history.refMissing")}):null,(0,J.jsxs)("div",{className:"im-history-actions",children:[(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.prompt,onClick:()=>void navigator.clipboard.writeText(q.prompt||""),children:r("history.copyPrompt")}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.path,onClick:()=>void Yr(s1(q.path)),children:r("history.openDir")}),(0,J.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Ee,title:r(Ee?"history.import.title":"history.import.noAsset"),onClick:()=>{be&&t([be])},children:r("history.import")})]})]})]},`${q.time}-${q.output}-${de}`)})}),(0,J.jsx)("div",{className:"im-history-pager",children:h?r("history.loadingMore"):u?(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void te(),children:r("history.loadMore",{shown:o.length,total:p})}):r("history.allShown",{total:p})})]}):w==="none"?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("div",{className:"im-history-empty",children:r("history.empty")}),(0,J.jsxs)("p",{className:"im-history-note",children:[r("history.empty.noteBefore")," ",(0,J.jsx)("code",{children:Q}),r("history.empty.noteAfter")]})]}):(0,J.jsx)("div",{className:"im-history-empty",children:r("history.noMatch")})]})]})}),L?(0,J.jsx)(ui,{imageUrl:L.url,...L.path?{copyPath:L.path}:{},onClose:()=>T(null)}):null]})}var at=require("react");var l1=8,c1=8,Um=[{label:"2 \xD7 2",rows:2,cols:2},{label:"2 \xD7 3",rows:2,cols:3},{label:"3 \xD7 2",rows:3,cols:2},{label:"3 \xD7 3",rows:3,cols:3},{label:"4 \xD7 4",rows:4,cols:4}];var d1=40,u1=/[\\/:*?"<>|]/g,p1="image";function Gm(e,t){let n=Math.round(e);return Number.isFinite(n)?Math.min(t,Math.max(1,n)):1}function fi(e,t){return{rows:Gm(e,l1),cols:Gm(t,c1)}}function m1(e){let{rows:t,cols:n}=fi(e.rows,e.cols),r=[];for(let o=0;o<t;o+=1){let i=o/t,a=o===t-1?1-i:1/t;for(let s=0;s<n;s+=1){let c=s/n,d=s===n-1?1-c:1/n;r.push({x:c,y:i,width:d,height:a})}}return r}function Xm(e){let{rows:t,cols:n}=fi(e.rows,e.cols);return t*n}function f1(e){let t=e.lastIndexOf(".");if(t<=0)return e;let n=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>n?e.slice(0,t):e}function g1(e){let t=e.trim(),n=Array.from(t).slice(0,d1).join("");return n.length>0?n:p1}function qm(e,t,n,r,o){let i=g1(f1(e).replace(u1,"_")),a=Number.isFinite(t)?Math.max(1,Math.round(t)):1;return`${i}-${r}x${o}-${a}.png`}async function Ym(e,t){return Promise.all(m1(t).map(n=>pi(e,n)))}var xe=require("react/jsx-runtime"),h1="52vh";function Zm({id:e,label:t,value:n,max:r,onChange:o}){return(0,xe.jsxs)("label",{className:"im-split-axis",htmlFor:e,children:[(0,xe.jsx)("span",{className:"im-split-axis-label",children:t}),(0,xe.jsx)("input",{id:e,className:"im-field im-split-axis-input",inputMode:"numeric",value:n,placeholder:"1",onChange:i=>o(i.target.value),onBlur:()=>{let i=Number(n);o(String(Number.isFinite(i)?Math.min(r,Math.max(1,Math.round(i))):1))}})]})}function Km({src:e,name:t,onClose:n,onConfirm:r}){let o=ae(),[i,a]=(0,at.useState)(null),[s,c]=(0,at.useState)("2"),[d,u]=(0,at.useState)("2"),[l,p]=(0,at.useState)(!1),[m,f]=(0,at.useState)(null);(0,at.useEffect)(()=>{let k=!0;return en(e).then(S=>{k&&a(S)}).catch(S=>{k&&f(o("dialog.readImageFailed",{reason:me(S)}))}),()=>{k=!1}},[e]);let y=(0,at.useMemo)(()=>fi(Number(d)||1,Number(s)||1),[d,s]),h=Xm(y),b=h>=2,x=(0,at.useMemo)(()=>i?{w:Math.floor(i.width/y.cols),h:Math.floor(i.height/y.rows)}:{w:0,h:0},[i,y]),g=(0,at.useMemo)(()=>{let k=(t??"image").replace(/\.[^.]+$/,"");return Array.from({length:Math.min(3,h)},(S,N)=>qm(k,N+1,h,y.rows,y.cols))},[t,h,y]),w=async()=>{if(b){p(!0),f(null);try{let k=await Ym(e,y);await r(k.map((S,N)=>({dataUrl:S,note:o("split.resultName",{index:N+1,total:k.length})})))}catch(k){f(o("split.failed",{reason:me(k)}))}finally{p(!1)}}};return(0,xe.jsx)(Le,{title:o("split.title"),subtitle:o("split.subtitle"),size:"lg",onClose:n,footer:(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("p",{className:"im-modal-note",children:i?o("split.original",{width:i.width,height:i.height}):o("split.readingOriginal")}),(0,xe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:o("common.cancel")}),(0,xe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!b,onClick:()=>void w(),children:l?o("split.busy"):b?o("split.confirm",{count:h}):o("split.needTwo")})]}),children:(0,xe.jsxs)("div",{className:"im-split",children:[(0,xe.jsx)("div",{className:"im-split-presets",children:Um.map(k=>(0,xe.jsx)("button",{type:"button",className:`im-chip im-chip--sm im-chip--action${k.cols===y.cols&&k.rows===y.rows?" is-brand":""}`,onClick:()=>{c(String(k.cols)),u(String(k.rows))},children:k.label},k.label))}),(0,xe.jsxs)("div",{className:"im-split-controls",children:[(0,xe.jsx)(Zm,{id:"split-cols",label:o("split.cols"),value:s,max:8,onChange:c}),(0,xe.jsx)(Zm,{id:"split-rows",label:o("split.rows"),value:d,max:8,onChange:u}),(0,xe.jsx)("span",{className:"im-split-summary",children:x.w>0?o("split.summary.cell",{count:h,width:x.w,height:x.h}):o("split.summary",{count:h})})]}),(0,xe.jsx)("div",{className:"im-split-stage-wrap",children:(0,xe.jsxs)("div",{className:"im-split-stage",style:{width:i&&i.height>0?`min(100%, calc(${h1} * ${(i.width/i.height).toFixed(4)}))`:"100%",aspectRatio:i&&i.height>0?`${i.width} / ${i.height}`:"1 / 1",backgroundImage:`url(${e})`},children:[Array.from({length:y.cols-1},(k,S)=>(0,xe.jsx)("span",{className:"im-split-line",style:{left:`${(S+1)/y.cols*100}%`,top:0,bottom:0,width:2}},`v${S}`)),Array.from({length:y.rows-1},(k,S)=>(0,xe.jsx)("span",{className:"im-split-line",style:{top:`${(S+1)/y.rows*100}%`,left:0,right:0,height:2}},`h${S}`))]})}),b?(0,xe.jsxs)("div",{className:"im-split-names",children:[g.map(k=>(0,xe.jsx)("span",{className:"im-split-name",children:k},k)),h>g.length?(0,xe.jsx)("span",{className:"im-muted",children:o("split.more",{count:h})}):null]}):(0,xe.jsx)("p",{className:"im-split-note",children:o("split.tooSmall")}),(0,xe.jsx)("p",{className:"im-split-note",children:o("split.note")}),m?(0,xe.jsx)("p",{className:"im-split-error",role:"status",children:m}):null]})})}var Nt=require("react");var Re=require("react/jsx-runtime"),jm=[{value:"high",key:"upscale.algo.high"},{value:"bilinear",key:"upscale.algo.bilinear"},{value:"nearest",key:"upscale.algo.nearest"}],Qm=[1024,1536,2048,3072,4096];function ef({src:e,onClose:t,onConfirm:n}){let r=ae(),[o,i]=(0,Nt.useState)(null),[a,s]=(0,Nt.useState)(2048),[c,d]=(0,Nt.useState)("high"),[u,l]=(0,Nt.useState)(!1),[p,m]=(0,Nt.useState)(null);(0,Nt.useEffect)(()=>{let x=!0;return en(e).then(g=>{if(!x)return;i(g);let w=Math.max(g.width,g.height),k=Qm.find(S=>S>w)??4096;s(k)}).catch(g=>{x&&m(r("dialog.readImageFailed",{reason:me(g)}))}),()=>{x=!1}},[e]);let f=(0,Nt.useMemo)(()=>o?Is(o.width,o.height,a):{width:0,height:0},[o,a]),y=o&&o.width>0?f.width/o.width:0,h=!!o&&f.width<o.width,b=async()=>{l(!0),m(null);try{let x=await _m(e,{targetLongEdge:a,algorithm:c}),g=r(jm.find(w=>w.value===c).key);await n(x,r("upscale.resultName",{width:f.width,height:f.height,algorithm:g}))}catch(x){m(r("upscale.failed",{reason:me(x)}))}finally{l(!1)}};return(0,Re.jsx)(Le,{title:r("upscale.title"),subtitle:r("upscale.subtitle"),size:"md",onClose:t,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:r("common.cancel")}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||f.width<8||f.height<8,onClick:()=>void b(),children:r(u?"upscale.busy":"upscale.confirm")})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:r("upscale.longEdge")}),Qm.map(x=>(0,Re.jsx)("button",{type:"button","aria-pressed":x===a,className:`im-btn-sm ${x===a?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>s(x),children:x},x))]}),(0,Re.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:r("upscale.algorithm")}),jm.map(x=>(0,Re.jsx)("button",{type:"button","aria-pressed":x.value===c,className:`im-btn-sm ${x.value===c?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>d(x.value),children:r(x.key)},x.value))]}),(0,Re.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Re.jsxs)(Re.Fragment,{children:[r("upscale.original",{width:o.width,height:o.height})," \u2192 ",(0,Re.jsxs)("b",{style:{color:h?"var(--im-warn)":"var(--im-brand)"},children:[f.width," \xD7 ",f.height]}),y?` \xB7 ${r("upscale.scale",{ratio:y.toFixed(2)})}`:"",h?` \xB7 ${r("upscale.shrink")}`:""]}):r("upscale.reading")}),(0,Re.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:r("upscale.note")}),p?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Os=require("react/jsx-runtime"),gi=2e4;function tf({guides:e}){return e.length?(0,Os.jsx)(su,{children:e.map(t=>(0,Os.jsx)("div",{className:"snap-guide","data-axis":t.axis,"data-testid":"snap-guide",style:t.axis==="x"?{left:t.position,top:-gi/2,width:1,height:gi}:{left:-gi/2,top:t.position,width:gi,height:1}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Qn=require("react");var ke=require("react/jsx-runtime");function nf({sizes:e,onCancel:t,onConfirm:n}){let r=ae(),[o,i]=(0,Qn.useState)(""),a=(0,Qn.useRef)(null),s=(0,Qn.useMemo)(()=>Xu(o),[o]),c=o.trim().length>0,d=s.cards,u=s.issues??[];return(0,ke.jsx)(Le,{title:r("import.title"),subtitle:r("import.subtitle"),size:"lg",onClose:t,initialFocusRef:a,footer:(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:r("common.cancel")}),(0,ke.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!d.length||u.length>0,onClick:()=>n(d),children:r("import.confirm",{count:d.length})})]}),children:(0,ke.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,ke.jsx)("textarea",{ref:a,value:o,onChange:l=>i(l.target.value),rows:10,spellCheck:!1,"aria-label":r("import.aria"),className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:r("import.placeholder")}),(0,ke.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:c?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsxs)("div",{className:"im-import-summary",children:[(0,ke.jsx)("span",{children:r("import.summary",{count:d.length})}),u.length?(0,ke.jsx)("span",{className:"im-import-summary-error",children:r("import.summaryIssues",{count:u.length})}):null]}),d.map((l,p)=>{let m=os(l.ratio??"1:1",e);return(0,ke.jsxs)("article",{className:"im-import-card",children:[(0,ke.jsxs)("div",{className:"im-import-card-meta",children:[(0,ke.jsx)("strong",{children:l.title||r("import.card.untitled",{index:p+1})}),(0,ke.jsx)("span",{children:l.ratio?l.ratio:r("import.card.defaultRatio")}),(0,ke.jsx)("span",{children:m.value}),m.fallback?(0,ke.jsx)("span",{className:"im-import-card-fallback",children:r("import.card.fallback")}):null]}),(0,ke.jsx)("p",{className:"im-import-card-text",title:l.prompt||"",children:l.prompt||r("import.card.empty")})]},`${p}-${l.title??""}`)}),u.map((l,p)=>(0,ke.jsx)("div",{className:"im-import-issue",children:l.message},`issue-${p}`))]}):(0,ke.jsx)("div",{className:"im-import-summary",children:r("import.waiting")})}),(0,ke.jsx)("p",{className:"im-field-hint",children:r("import.hint",{count:e.length})})]})})}var Mn=require("react");var se=require("react/jsx-runtime");function Nn({id:e,label:t,hint:n,action:r,children:o}){let i=`${e}-message`;return(0,se.jsxs)("div",{className:"im-field-row",children:[(0,se.jsx)("label",{className:"im-field-label",htmlFor:e,children:t}),(0,se.jsxs)("div",{className:"im-field-main",children:[(0,se.jsxs)("div",{className:"im-field-control",children:[o,r]}),n?(0,se.jsx)("p",{className:"im-field-hint",id:i,children:n}):null]})]})}function of({config:e,onClose:t,onSaved:n,onFlash:r}){let o=ae(),i=e?.provider,a=e?.source==="plugin",s=a?"plugin":e?.profile??"",c=i?.model||e?.model||"",d=Number(e?.budget??0),[u,l]=(0,Mn.useState)({source:s||"plugin",model:c,baseUrl:i?.baseUrl??"",apiKey:"",imagoraRoot:e?.imagoraRoot??"",outputDir:e?.outputDirOverride??"",budget:d?String(d):""}),[p,m]=(0,Mn.useState)(!1),[f,y]=(0,Mn.useState)(!1),[h,b]=(0,Mn.useState)(null),[x,g]=(0,Mn.useState)([]),[w,k]=(0,Mn.useState)(!1),S=H=>l(G=>({...G,...H})),N=e?.profiles??[],C=u.source==="plugin",M=C||!!i?.baseUrl,O=[{value:"plugin",label:o("settings.profile.plugin")},...N.map(H=>({value:H.name,label:H.label||H.name}))],D=a&&!C,L=C?u.model?[{value:u.model,label:u.model}]:[]:(e?.models??[]).map(H=>({value:H.id,label:H.label||H.id})),T=(()=>{let H=Number(u.budget.trim());return Number.isFinite(H)&&H>0?H:0})(),v={source:u.source!==(s||"plugin"),model:u.model.trim()!==""&&u.model.trim()!==c,baseUrl:u.baseUrl.trim()!==(i?.baseUrl??""),apiKey:u.apiKey.trim()!=="",imagoraRoot:u.imagoraRoot.trim()!==(e?.imagoraRoot??""),outputDir:u.outputDir.trim()!==(e?.outputDirOverride??""),budget:T!==d},E=Object.values(v).some(Boolean),z=H=>{S({source:H,model:""})},I=async()=>{m(!0),b(null);try{let H=await Wu({baseUrl:u.baseUrl.trim(),apiKey:u.apiKey.trim()});g(H.models??[]),b(H.models?.length?o("settings.probe.ok",{count:H.models.length}):o("settings.probe.okNoList"))}catch(H){g([]),b(o("settings.probe.fail",{reason:me(H)}))}finally{m(!1)}},_=async H=>{m(!0);try{let G=await Po(o,{title:o(H==="root"?"settings.pick.root":"settings.pick.output"),startAt:H==="root"?u.imagoraRoot.trim():u.outputDir.trim()||e?.defaultOutputDir||""},r);if(!G)return;S(H==="root"?{imagoraRoot:G}:{outputDir:G})}finally{m(!1)}},R=async()=>{m(!0);try{let H=null;!D&&!C&&v.source&&(H=await Xr(u.source)),!D&&!C&&v.model&&u.model.trim()&&(H=await Ur(u.model.trim()));let G=C||!!u.baseUrl.trim()||!!u.apiKey.trim(),te=v.baseUrl||v.apiKey||C&&u.model.trim()!==""&&v.model;G&&te&&(H=await ts({baseUrl:u.baseUrl.trim(),model:u.model.trim(),apiKey:u.apiKey.trim()})),v.imagoraRoot&&(H=await $u(u.imagoraRoot.trim())),v.outputDir&&(H=await qr(u.outputDir.trim())),v.budget&&(H=await Bu(T)),H&&n(H),l(ee=>({...ee,apiKey:"",budget:T?String(T):""})),y(!0),window.setTimeout(()=>y(!1),2e3),r(o("settings.save.done"))}catch(H){r(o("settings.save.failed",{reason:me(H)}))}finally{m(!1)}},V=async()=>{m(!0);try{let H=await ts({reset:!0});n(H),k(!1),r(o("settings.reset.done"))}catch(H){r(o("settings.reset.failed",{reason:me(H)}))}finally{m(!1)}},W=a?o("settings.profile.plugin"):e?.profileLabel||e?.profile||"\u2014",F=e?.credential,Z=F?.configured?F.from==="imagora"?o("settings.keyConfiguredFromEnv"):o("settings.keyConfigured"):o("settings.keyMissing");return(0,se.jsx)(Le,{title:o("settings.title"),subtitle:o("settings.subtitle"),size:"lg",onClose:t,footer:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("p",{className:"im-modal-note",children:o(f?"settings.status.saved":E?"settings.status.dirty":"settings.status.clean")}),(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:t,children:o("common.cancel")}),(0,se.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:p||!E,onClick:()=>void R(),children:o(p?"common.saving":f?"settings.status.savedTick":"common.save")})]}),children:(0,se.jsxs)("div",{className:"im-settings",children:[(0,se.jsxs)("p",{className:"im-settings-status",children:[o("settings.status")," ",(0,se.jsx)("b",{children:W})," \xB7 ",e?.modelLabel||e?.model||"\u2014"," \xB7 ",Z,D?(0,se.jsx)("span",{className:"im-chip is-brand im-settings-chip",children:o("settings.status.takenOver")}):null]}),(0,se.jsxs)("section",{className:"im-settings-group",children:[(0,se.jsx)("h3",{className:"im-settings-group-title",children:o("settings.group.endpoint")}),(0,se.jsx)(Nn,{id:"imagora-profile",label:o("settings.profile.label"),hint:o(C?"settings.profile.hint.plugin":"settings.profile.hint.imagora"),children:(0,se.jsx)(ht,{id:"imagora-profile",className:"is-block",options:O,value:u.source,searchable:"auto",onChange:z,title:o("settings.profile.title")})}),(0,se.jsx)(Nn,{id:"imagora-model-select",label:o("settings.model.label"),hint:o(C?"settings.model.hint.plugin":"settings.model.hint.imagora"),children:(0,se.jsx)(ht,{id:"imagora-model-select",className:"is-block",options:L,value:u.model,searchable:!0,allowCustom:!0,emptyLabel:o("settings.model.empty"),onChange:H=>S({model:H}),onCreateCustom:H=>S({model:H}),title:o("settings.model.title")})}),M?(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(Nn,{id:"imagora-provider-base-url",label:o("settings.baseUrl.label"),hint:o("settings.baseUrl.hint"),children:(0,se.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:u.baseUrl,placeholder:"https://api.example.com/v1",disabled:p,title:o("settings.baseUrl.title"),onChange:H=>S({baseUrl:H.target.value})})}),(0,se.jsx)(Nn,{id:"imagora-provider-api-key",label:o("settings.apiKey.label"),hint:i?.apiKeyConfigured?o("settings.apiKey.hint.configured"):o("settings.apiKey.hint.plain"),action:(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p||!u.baseUrl.trim(),onClick:()=>void I(),title:u.baseUrl.trim()?o("settings.probe.title.ready"):o("settings.probe.title.needUrl"),children:o("settings.probe.run")}),children:(0,se.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:u.apiKey,autoComplete:"off",placeholder:i?.apiKeyConfigured?o("settings.apiKey.placeholder.keep"):o("settings.apiKey.placeholder.paste"),disabled:p,onChange:H=>S({apiKey:H.target.value})})})]}):(0,se.jsx)("p",{className:"im-settings-hint-line",children:o("settings.inheritHint")}),h?(0,se.jsx)("p",{className:"im-field-hint im-settings-probe",role:"status",children:h}):null,x.length?(0,se.jsxs)("div",{className:"im-settings-chips",children:[x.slice(0,24).map(H=>(0,se.jsx)("button",{type:"button",className:`im-chip im-chip--action${H===u.model?" is-brand":""}`,onClick:()=>S({model:H}),children:H},H)),x.length>24?(0,se.jsx)("span",{className:"im-muted",children:o("settings.probe.more",{count:x.length-24})}):null]}):null,a?w?(0,se.jsxs)("div",{className:"im-settings-danger",children:[(0,se.jsx)("p",{className:"im-settings-danger-text",children:o("settings.reset.confirm")}),(0,se.jsxs)("div",{className:"im-settings-danger-actions",children:[(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>k(!1),children:o("common.cancel")}),(0,se.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",disabled:p,onClick:()=>void V(),children:o("settings.reset.confirmAction")})]})]}):(0,se.jsx)("button",{type:"button",className:"im-settings-danger-link",disabled:p,onClick:()=>k(!0),children:o("settings.reset.link")}):null]}),(0,se.jsxs)("section",{className:"im-settings-group",children:[(0,se.jsx)("h3",{className:"im-settings-group-title",children:o("settings.group.files")}),(0,se.jsx)(Nn,{id:"imagora-root",label:o("settings.root.label"),hint:o("settings.root.hint"),action:(0,se.jsx)(_o,{label:o("common.chooseFolder"),disabled:p,onClick:()=>void _("root")}),children:(0,se.jsx)("input",{id:"imagora-root",className:"im-field",value:u.imagoraRoot,placeholder:o("settings.root.placeholder"),disabled:p,onChange:H=>S({imagoraRoot:H.target.value})})}),(0,se.jsx)(Nn,{id:"imagora-output-override",label:o("settings.outputDir.label"),hint:o("settings.outputDir.hint",{dir:e?.defaultOutputDir||o("common.notSet")}),action:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(_o,{label:o("common.chooseFolder"),disabled:p,onClick:()=>void _("output")}),(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p||!e?.defaultOutputDir,title:o("settings.reveal.title"),onClick:()=>void Yr(e?.defaultOutputDir??""),children:o("settings.reveal")})]}),children:(0,se.jsx)("input",{id:"imagora-output-override",className:"im-field",value:u.outputDir,placeholder:o("settings.outputDir.placeholder"),disabled:p,onChange:H=>S({outputDir:H.target.value})})})]}),(0,se.jsxs)("section",{className:"im-settings-group",children:[(0,se.jsx)("h3",{className:"im-settings-group-title",children:o("settings.group.budget")}),(0,se.jsx)(Nn,{id:"imagora-budget",label:o("settings.budget.label"),hint:o("settings.budget.hint"),children:(0,se.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:u.budget,placeholder:o("settings.budget.placeholder"),disabled:p,onChange:H=>S({budget:H.target.value})})})]})]})})}var Jn=require("react");function rf({nodesRef:e,setNodes:t,createPosition:n,log:r,flash:o,setPreview:i,record:a}){let s=ae(),c=(0,Jn.useCallback)(async(m,f)=>{let y=m.filter(Wr);if(!y.length){o(s("images.onlyImage"));return}a?.();for(let[h,b]of y.entries())try{r(s("images.uploading",{name:b.name||s("images.clipboard")}));let x=await Vr(b,b.name||`pasted-${Date.now()}.png`),g=vn({...x,relPath:x.name,createdAt:x.createdAt??new Date().toISOString()},{x:f.x+h*172,y:f.y});t(w=>[...w,g]),r(s("images.added",{name:x.name}))}catch(x){r(s("images.uploadFailed",{reason:me(x)}))}},[t,r,o,a]),d=(0,Jn.useCallback)((m,f,y)=>{let h=f?y(f):n();c(m,h)},[c,n]),u=(0,Jn.useCallback)(m=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let y=f.files?.[0];if(y)try{let h=await Vr(y,y.name);t(b=>b.map(x=>x.id===m&&x.type==="image"?{...x,data:{...x.data,registryId:h.id,name:h.name,url:h.url,size:h.size,ext:h.ext,absPath:h.absPath,missing:!1}}:x)),r(s("images.replaced",{name:h.name}))}catch(h){r(s("images.replaceFailed",{reason:me(h)}))}},f.click()},[t,r]),l=(0,Jn.useCallback)(m=>{let f=e.current.find(y=>y.id===m);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name,path:f.data.absPath})},[e,i]),p=(0,Jn.useCallback)(async(m,f,y)=>{let h=await fetch(m).then(k=>k.blob()),b=f.endsWith(".png")?f:`${f}.png`,x=await Vr(h,b),g=y??n(),w=vn({...x,relPath:x.name,createdAt:x.createdAt??new Date().toISOString()},g);return t(k=>[...k,w]),r(s("images.added",{name:x.name})),x},[t,r,n]);return{addImages:c,dropFiles:d,replaceImage:u,openPreview:l,addDataUrl:p}}function af(e){return t=>{let n=String(t.source??""),r=String(t.target??"");!n||!r||e(o=>{let i=`${n}->${r}`;return o.some(a=>a.id===i)?o:[...o,{id:i,source:n,target:r,animated:!0}]})}}var Mt=require("react");function sf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:r,log:o,flash:i,taskIdsRef:a,timersRef:s}){let c=ae(),d=(0,Mt.useCallback)(async h=>{try{return await Qa(h)}catch(b){let x=b.body?.overBudget;if(!x)throw b;let g=x.reason||me(b);if(!window.confirm(c("task.budget.confirm",{reason:g})))throw new Error(c("task.budget.cancelled",{reason:g}));return o(c("task.budget.overridden",{reason:g})),await Qa({...h,allowOverBudget:!0})}},[o]),u=(0,Mt.useCallback)((h,b)=>{let g=(Array.isArray(b.results)?b.results:[]).filter(M=>M.status==="ok"&&M.assetId&&M.url),w=e.current.find(M=>M.id===h&&M.type==="prompt"),k=[];w&&w.type==="prompt"&&g.forEach(M=>{k.push(vn({id:String(M.assetId),relPath:M.name??"result.png",name:M.name??"result.png",url:String(M.url),size:M.bytes??0,ext:String(M.ext??"png"),absPath:M.absPath??"",createdAt:new Date().toISOString()},w.position))});let S=k.map(M=>({id:`${h}->${M.id}`,source:h,target:M.id,animated:!0}));n(M=>{let O=new Set(M.map(v=>v.id)),D=k.filter(v=>!O.has(v.id)),L=D.length?[...M,...D]:M,T=D.length?ju(L,[...t.current,...S],h):L;return it(T,h,{status:b.status==="done"?"done":b.status==="cancelled"?"idle":"failed",resultCount:g.length,message:b.error??void 0,startedAtMs:void 0,cancelRequested:!1,taskId:void 0})}),S.length&&r(M=>{let O=S.filter(D=>!M.some(L=>L.id===D.id));return O.length?[...M,...O]:M}),a.current.delete(h);let N=s.current.get(h);N&&window.clearTimeout(N),s.current.delete(h);let C=b.totalCost??0;C>0&&n(M=>{let O=M.find(L=>L.id===h),D=Number(O?.data?.cost??0);return it(M,h,{cost:D+C})}),o(b.status==="done"?C?c("task.done.cost",{count:g.length,cost:c("cost.money",{value:C.toFixed(2)})}):c("task.done",{count:g.length}):c("task.failed.withReason",{status:b.status==="cancelled"?c("task.cancelled"):c("task.failed"),reason:b.error??c("task.seeLog")}))},[e,n,r,o,a,s]),l=(0,Mt.useCallback)((h,b)=>{let x=async()=>{try{let g=await Du(b);if(g.status==="queued")n(w=>it(w,h,{status:"queued"}));else if(g.status==="running")n(w=>it(w,h,{status:"running",startedAtMs:g.startedAt??Date.now(),cancelRequested:g.cancelRequested}));else{u(h,g);return}}catch(g){if(g.status===404){let w=s.current.get(h);w!==void 0&&window.clearTimeout(w),s.current.delete(h),n(k=>it(k,h,{status:"failed",message:c("task.lost"),startedAtMs:void 0,cancelRequested:!1})),o(c("task.lostLog"));return}o(c("task.pollFailed",{reason:me(g)}))}s.current.set(h,window.setTimeout(x,1200))};x()},[u,o,n,s]),p=(0,Mt.useCallback)(async h=>{let b=e.current.find(g=>g.id===h);if(!b||b.type!=="prompt")return;if(!(b.data.prompt??"").trim()){i(c("task.emptyPrompt"));return}let x=Iu(e.current,t.current,h,b.data.prompt);if(x.mode==="invalid"){let g=x.unknown.map(w=>`@${w}`).join("\u3001");n(w=>it(w,h,{status:"failed",message:c("task.missingRefs",{names:g})}));return}try{let g=await d({prompt:b.data.prompt,size:b.data.size,quality:b.data.quality,refIds:x.images.map(w=>w.type==="image"?w.data.registryId:"").filter(Boolean),outputDir:b.data.outputDir,spent:e.current.reduce((w,k)=>w+Number(k.data?.cost??0),0),mask:x.images.map(w=>w.type==="image"?w.data.maskDataUrl:"").find(Boolean)||""});a.current.set(h,g.taskId),n(w=>it(w,h,{status:"queued",taskId:g.taskId,startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),o(c("task.submit",{count:x.images.length,size:b.data.size})),l(h,g.taskId)}catch(g){let w=me(g);n(k=>it(k,h,{status:"failed",message:w})),o(c("task.submitFailed",{reason:w}))}},[e,t,n,i,o,l,a]),m=(0,Mt.useCallback)(async h=>{let b=a.current.get(h);if(n(x=>it(x,h,{cancelRequested:!0})),!!b)try{await Au(b)}catch(x){o(c("task.cancelFailed",{reason:me(x)}))}},[n,o,a]),f=(0,Mt.useCallback)(h=>{for(let b of h)p(b)},[p]),y=(0,Mt.useCallback)(h=>{for(let{nodeId:b,taskId:x}of Cu(h))a.current.set(b,x),l(b,x)},[a,l]);return(0,Mt.useEffect)(()=>{let h=s.current;return()=>{for(let b of h.values())window.clearTimeout(b);h.clear()}},[s]),{runPrompt:p,cancelPrompt:m,runMany:f,resumeTasks:y}}var st=require("react");function lf(e){let t=ae(),[n,r]=(0,st.useState)(null),[o,i]=(0,st.useState)([]),a=(0,st.useRef)(null),s=(0,st.useCallback)(l=>{let p={...l,profiles:Array.isArray(l?.profiles)?l.profiles:[],models:Array.isArray(l?.models)?l.models:[],sizes:Array.isArray(l?.sizes)?l.sizes:[],qualities:Array.isArray(l?.qualities)?l.qualities:[],issues:Array.isArray(l?.issues)?l.issues:[]};r(p),a.current=p,i(p.issues)},[]),c=(0,st.useCallback)(async()=>{try{s(await Ru())}catch(l){i([me(l)])}},[s]);(0,st.useEffect)(()=>{c()},[c]);let d=(0,st.useCallback)(async l=>{try{let p=await Xr(l);s(p),e(t("flash.profile.switched",{name:p.profileLabel||p.profile}))}catch(p){e(t("flash.profile.failed",{reason:me(p)}))}},[s,e]),u=(0,st.useCallback)(async l=>{try{let p=await Ur(l);s(p),e(t("flash.model.switched",{model:p.modelLabel}))}catch(p){e(t("flash.profile.failed",{reason:me(p)}))}},[s,e]);return{config:n,configIssues:o,configRef:a,switchProfile:d,switchModel:u,replaceConfig:s}}var En=require("react");function Do(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function cf(e=50){let t=Math.max(1,Math.floor(e)),n=[],r=[];return{record(o,i){n.push(Do(o)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(r.length=0)},undo(o){let i=n.pop();return i?(r.unshift(Do(o)),Do(i)):null},restore(o){let i=r.shift();return i?(n.push(Do(o)),Do(i)):null},canUndo:()=>n.length>0,canRestore:()=>r.length>0,clear(){n.length=0,r.length=0}}}function df({nodesRef:e,edgesRef:t,setNodes:n,setEdges:r,flash:o}){let i=ae(),a=(0,En.useRef)(cf(50)),s=(0,En.useCallback)(m=>{a.current.record({nodes:e.current,edges:t.current},m)},[e,t]),c=(0,En.useCallback)(()=>{let m=a.current.undo({nodes:e.current,edges:t.current});if(!m){o(i("history.nothingToUndo"));return}n(m.nodes),r(m.edges)},[e,t,n,r,o]),d=(0,En.useCallback)(()=>{let m=a.current.restore({nodes:e.current,edges:t.current});if(!m){o(i("history.nothingToRedo"));return}n(m.nodes),r(m.edges)},[e,t,n,r,o]),u=(0,En.useCallback)(()=>a.current.clear(),[]),l=a.current.canUndo(),p=a.current.canRestore();return{record:s,undo:c,restore:d,clear:u,canUndo:l,canRestore:p}}var uf=require("react");function b1(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function pf(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:r,onDeleteNodes:o,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:d,hasPreview:u}=e;(0,uf.useEffect)(()=>{let l=p=>{if(p.key==="Escape"&&u){d();return}if(b1(p.target))return;let m=p.ctrlKey||p.metaKey,f=p.key.toLowerCase();if(m&&f==="a"){if(p.preventDefault(),!t.current.length)return;e.setNodes(h=>h.some(b=>!b.selected)?h.map(b=>({...b,selected:!0})):h);return}if(m&&f==="z"){p.preventDefault(),p.shiftKey?s():a();return}if(m&&f==="y"){p.preventDefault(),s();return}if(m&&f==="s"){p.preventDefault(),c();return}if(p.key==="Delete"&&n.length){p.preventDefault(),o(n);return}(p.key==="Delete"||p.key==="Backspace")&&r&&(p.preventDefault(),i(r))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t,n,r,o,i,a,s,c,d,u,e])}var Et=require("react");var y1=2500;function mf({nodes:e,edges:t,nodesRef:n,edgesRef:r,setNodes:o,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:d,defaultsRef:u,crashedRef:l,onRestored:p}){let m=ae(),f=(0,Et.useRef)(null),y=(0,Et.useRef)(()=>{});y.current=()=>{f.current&&(window.clearTimeout(f.current),f.current=null),!l.current&&n.current.length&&es(n.current,r.current).catch(()=>{})},(0,Et.useEffect)(()=>{e.length&&(f.current&&window.clearTimeout(f.current),f.current=window.setTimeout(()=>{f.current=null,!l.current&&es(n.current,r.current).catch(()=>{})},y1))},[e,t,n,r,l]),(0,Et.useEffect)(()=>{let x=()=>{document.visibilityState==="hidden"&&y.current()},g=()=>y.current();return document.addEventListener("visibilitychange",x),window.addEventListener("pagehide",g),()=>{document.removeEventListener("visibilitychange",x),window.removeEventListener("pagehide",g),y.current()}},[]),(0,Et.useEffect)(()=>{let x=!1;return(async()=>{let w=n.current;try{let k=await Hu();if(x)return;if(!k.empty&&k.nodes?.length&&!n.current.length){let S=Za(k.nodes,k.edges??[],[],u.current);o(S.nodes),i(S.edges),w=S.nodes,s(m("workflow.restored",{name:k.name??m("workflow.restored.auto")})),S.dropped.length&&s(m("workflow.dropped",{count:S.dropped.length,reason:S.dropped[0]?.reason??""}))}}catch{}x||p?.(w)})(),()=>{x=!0}},[o,i,s,n,p]);let h=(0,Et.useCallback)(async x=>{try{let g=await Ou(x,n.current,r.current);d(),c(m("workflow.saved",{name:g.name||x}))}catch(g){c(m("workflow.saveFailed",{reason:me(g)}))}},[n,r,d,c]),b=(0,Et.useCallback)(async x=>{try{let g=await Lu(x),w=Za(g.nodes,g.edges,g.missing??[],u.current);o(w.nodes),i(w.edges),d(),c(m("workflow.loaded",{name:g.name||x})),w.dropped.length&&c(m("workflow.dropped",{count:w.dropped.length,reason:w.dropped[0]?.reason??""})),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(g){c(m("workflow.loadFailed",{reason:me(g)}))}},[o,i,a,d,c,u]);return{doSave:h,doLoad:b}}var fe=require("react/jsx-runtime");function Ls({t:e}={}){return(0,fe.jsx)(xp,{translate:e,children:(0,fe.jsx)(N1,{})})}function N1(){let e=ae(),[t,n,r]=lu([]),[o,i,a]=cu([]),[s,c]=(0,le.useState)([]),[d,u]=(0,le.useState)(null),[l,p]=(0,le.useState)(null),[m,f]=(0,le.useState)(null),[y,h]=(0,le.useState)(1),[b,x]=(0,le.useState)(!1),[g,w]=(0,le.useState)(()=>tm()),[k,S]=(0,le.useState)([]),[N,C]=(0,le.useState)(null),[M,O]=(0,le.useState)(()=>rp()),[D,L]=(0,le.useState)(!1),[T,v]=(0,le.useState)([]),E=(0,le.useRef)(null),z=(0,le.useRef)(null),I=(0,le.useRef)(null),_=(0,le.useRef)(null),R=(0,le.useRef)(null),V=(0,le.useRef)(new Map),W=(0,le.useRef)(new Map),F=(0,le.useRef)(t),Z=(0,le.useRef)(o);F.current=t,Z.current=o;let H=(0,le.useCallback)(A=>{c(U=>[...U.slice(-8),A])},[]),G=(0,le.useCallback)(A=>{u(A),window.setTimeout(()=>u(U=>U===A?null:U),2600)},[]),{config:te,configIssues:ee,configRef:P,switchProfile:X,switchModel:oe,replaceConfig:re}=lf(G),j=(0,le.useRef)(!1),ne=(0,le.useRef)({});ne.current={size:P.current?.sizes[0]?.value,quality:P.current?.qualities[0]};let ue=(0,le.useRef)(!1);(0,le.useEffect)(()=>{!te||ue.current||te.credential?.configured===!1&&(ue.current=!0,p({kind:"settings"}))},[te]);let Q=df({nodesRef:F,edgesRef:Z,setNodes:n,setEdges:i,flash:G}),{addImages:q,replaceImage:de,openPreview:be,addDataUrl:Ee}=rf({nodesRef:F,setNodes:n,createPosition:()=>Lo.current(),log:H,flash:G,setPreview:f,record:Q.record}),{runPrompt:Te,cancelPrompt:je,runMany:Wt,resumeTasks:_t}=sf({nodesRef:F,edgesRef:Z,setNodes:n,setEdges:i,log:H,flash:G,taskIdsRef:W,timersRef:V}),{doSave:It,doLoad:Qe}=mf({nodes:t,edges:o,nodesRef:F,edgesRef:Z,setNodes:n,setEdges:i,instanceRef:I,log:H,flash:G,closeDialog:()=>p(null),defaultsRef:ne,crashedRef:j,onRestored:_t}),lt=Lp(t),ct=(0,le.useMemo)(()=>({animated:!b}),[b]),Je=(0,le.useMemo)(()=>_u(t,o),[t,o]),eo=(0,le.useMemo)(()=>t.map(A=>{if(A.type==="image"){let U=Je.refCounts.get(A.data.registryId)??0;return(A.data.refCount??0)===U?A:{...A,data:{...A.data,refCount:U}}}if(A.type==="group"){let U=Je.groupCounts.get(A.id)??0,K=Je.groupSizes.get(A.id)??0,ce=Je.groupDups.get(A.id)??0;return A.data.imageCount===U&&A.data.totalSize===K&&A.data.duplicateCount===ce?A:{...A,data:{...A.data,imageCount:U,totalSize:K,duplicateCount:ce}}}return A}),[t,Je]),nn=t.filter(A=>A.type==="prompt"),Ao=nn.filter(A=>A.data.status==="queued"||A.data.status==="running").map(A=>A.id),to=nn.filter(A=>(A.data.prompt??"").trim()&&A.data.status!=="running"&&A.data.status!=="queued").map(A=>A.id),Oo=(0,le.useCallback)((A,U)=>{n(K=>it(K,A,U))},[n]),Vt=(0,le.useCallback)(A=>{if(!A.length)return;Q.record();let U=new Set(A);n(K=>K.filter(ce=>!U.has(ce.id))),i(K=>K.filter(ce=>!U.has(ce.source)&&!U.has(ce.target))),G(e("flash.deleted.kept",{count:A.length}))},[n,i,Q,G,e]),_n=(0,le.useCallback)(A=>Vt([A]),[Vt]),$e=(0,le.useCallback)(()=>{let A=I.current,U=E.current?.getBoundingClientRect(),K=A&&U?A.screenToFlowPosition({x:U.width/2,y:U.height/2}):{x:140,y:120},{position:ce,next:we}=vu(K,R.current);return R.current=we,ce},[]),Lo=(0,le.useRef)($e);Lo.current=$e;let Ho=(0,le.useCallback)(A=>{let U=ku(A??$e(),{size:ne.current.size??"1024x1024",quality:ne.current.quality??"high",outputDir:P.current?.defaultOutputDir??""});Q.record(),n(K=>[...K,U])},[$e,n,P,Q]),Bo=(0,le.useCallback)(A=>{Q.record(),n(U=>[...U,Su(A??$e())])},[$e,n,Q]),bi=(0,le.useCallback)(()=>{i(Ka(F.current,Z.current)),G(e("flash.autoConnect.done"))},[i,G]),yi=(0,le.useCallback)(()=>{let A=new Set(k);if(!A.size){G(e("flash.autoConnect.noneSelected"));return}Q.record(),i(Pu(F.current,Z.current,A)),G(e("flash.autoConnect.selection"))},[k,i,G,Q]),In=(0,le.useCallback)(async A=>{let U=new Set(A),K=F.current.find(dt=>dt.type==="prompt"&&U.has(dt.id));if(!K||K.type!=="prompt")return;let ce=await Po(e,{title:e("settings.pick.output"),startAt:K.data.outputDir||P.current?.defaultOutputDir||""},G);if(!ce)return;let we=Nu(F.current,U,ce);if(!we.changedCount){G(e("flash.outputDir.same",{dir:ce}));return}Q.record(),n(we.nodes),G(e("flash.outputDir.set",{dir:ce}))},[F,P,G,Q,n,e]),[no,$o]=(0,le.useState)(!1),xi=(0,le.useCallback)(async()=>{if(!no){$o(!0);try{await In(k)}finally{$o(!1)}}},[no,In,k]),wi=(0,le.useCallback)(async A=>{await In([A])},[In]),vi=(0,le.useCallback)(async()=>{let A=await Po(e,{title:e("settings.pick.output"),startAt:P.current?.defaultOutputDir||""},G);if(A)try{re(await qr(A)),G(e("flash.defaultOutputDir.set",{dir:A}))}catch(U){G(e("settings.save.failed",{reason:me(U)}))}},[P,G,re,e]),ki=(0,le.useCallback)(()=>{let A=I.current;if(!A)return;let U=F.current.filter(ce=>k.includes(ce.id)),K=U.length?U:F.current;if(!K.length){G(e("flash.noNodes"));return}A.fitView({nodes:K,padding:.25,duration:300,maxZoom:1.6})},[k,G]),Si=(0,le.useCallback)(()=>{let A=new Set(k);if(!A.size){G(e("flash.layout.noneSelected"));return}Q.record({preserveRedo:!0}),n(U=>Ju(U,Z.current,A))},[k,n,G,Q,Z]),{dropIntent:Ci,dragHandlers:Ni,startToolbarDrag:Mi,dropChip:Ei}=Gp({canvasRef:E,modalOpen:!!l||!!m,getCreatePosition:()=>$e(),toFlowPosition:A=>I.current?I.current.screenToFlowPosition(A):$e(),onDropFiles:(A,U)=>void q(A,U),onDropNode:(A,U)=>{A==="prompt"?Ho(U):Bo(U)},onRejectFiles:()=>G(e("flash.drop.noImage"))});(0,le.useEffect)(()=>{let A=U=>{let K=U.target;if(K&&(K.tagName==="TEXTAREA"||K.tagName==="INPUT"))return;let ce=Array.from(U.clipboardData?.files??[]);ce.length&&(U.preventDefault(),q(ce,$e()))};return window.addEventListener("paste",A),()=>window.removeEventListener("paste",A)},[q,$e]),pf({nodesRef:F,edgesRef:Z,setNodes:n,setEdges:i,selectedIds:k,selectedEdgeId:N,onDeleteNodes:Vt,onDeleteEdge:A=>{Q.record(),i(U=>U.filter(K=>K.id!==A)),C(null)},onUndo:Q.undo,onRestore:Q.restore,onSave:()=>p({kind:"save"}),onClosePreview:()=>f(null),hasPreview:!!m});let on=(0,le.useCallback)(A=>U=>{let K=F.current.find(ce=>ce.id===U);if(!K||K.type!=="image"||!K.data.url){G(e("flash.image.noFile"));return}p({kind:A,target:{nodeId:U,src:K.data.url,name:K.data.name}})},[F,G]),Pt=(0,le.useMemo)(()=>({cropImage:on("crop"),splitImage:on("split"),upscaleImage:on("upscale"),maskImage:on("mask")}),[on]),Fo=(0,le.useCallback)(A=>{Q.record(),n(U=>U.map(K=>K.id===A&&K.type==="image"?{...K,data:{...K.data,maskDataUrl:void 0}}:K)),G(e("flash.mask.cleared"))},[n,Q,G]),{nodeMenu:zt,boxRect:Rt,closeMenu:_i,setNodeMenu:Wo}=Xp({rootRef:z,canvasRef:E,instanceRef:I,setNodes:n,modalOpen:!!l||!!m}),rn=zt?t.find(A=>A.id===zt.nodeId):void 0,oo=rn?qp(rn.type??"image",{hasUrl:rn.type==="image"?!!rn.data.url:!1,selectedCount:k.length}).map(A=>A.kind==="action"?{...A,action:{...A.action,label:Jp(A.action.id,k.length,e)}}:A):[],Vo=(0,le.useCallback)(A=>{let U=zt;if(Wo(null),!U)return;let K=U.nodeId;switch(A){case"delete-selection":Vt(k),S([]);break;case"preview":be(K);break;case"crop":Pt.cropImage(K);break;case"upscale":Pt.upscaleImage(K);break;case"split":Pt.splitImage(K);break;case"mask":Pt.maskImage(K);break;case"replace":de(K);break;case"run":Te(K);break;case"copy-prompt":{let ce=F.current.find(we=>we.id===K);if(ce?.type!=="prompt")break;navigator.clipboard.writeText(ce.data.prompt).then(()=>G(e("flash.prompt.copied"))).catch(()=>G(e("flash.prompt.copyFailed")));break}case"delete":_n(K);break;default:break}},[zt,Wo,Vt,be,Pt,de,Te,_n,k,G]),Ii=(0,le.useMemo)(()=>({updatePrompt:Oo,runPrompt:A=>{Te(A)},cancelPrompt:A=>{je(A)},deleteNode:_n,pickOutputDir:wi,zoomImage:be,replaceImage:de,...Pt,clearMask:Fo,config:te}),[Oo,Te,je,_n,be,de,Pt,Fo,te]);return(0,fe.jsxs)(us.Provider,{value:Ii,children:[(0,fe.jsx)("style",{children:Ep}),(0,fe.jsxs)("div",{className:"im-root",ref:z,children:[(0,fe.jsx)(Bp,{config:te,promptCount:nn.length,runnableIds:to,busyIds:Ao.length,snapEnabled:M,canvasLocked:D,cost:lt,canUndo:Q.canUndo,canRestore:Q.canRestore,onUndo:Q.undo,onRestore:Q.restore,onAddPrompt:()=>Ho(),onPickFiles:()=>_.current?.click(),onAddGroup:()=>Bo(),onPasteImport:()=>p({kind:"import"}),onDragCreateNode:Mi,onRun:Wt,onCancelAll:()=>Ao.forEach(A=>void je(A)),onAutoConnect:bi,onOpenDefaultOutputDir:()=>void vi(),onSwitchProfile:A=>void X(A),onSwitchModel:A=>void oe(A),onOpenSave:async()=>{try{let A=await Ja();p({kind:"save",workflows:A.workflows})}catch{p({kind:"save"})}},onOpenLoad:async()=>{try{let A=await Ja();p({kind:"load",workflows:A.workflows})}catch(A){G(e("flash.readFailed",{reason:me(A)}))}},onOpenSettings:()=>p({kind:"settings"}),onOpenHelp:()=>p({kind:"help"}),onOpenHistory:()=>p({kind:"history"})}),ee.length?(0,fe.jsx)(sm,{tone:"error",action:(0,fe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>p({kind:"settings"}),children:e("canvas.goSettings")}),children:(0,fe.jsx)("ul",{className:"im-banner-list",children:ee.map(A=>(0,fe.jsx)("li",{children:A},A))})}):null,(0,fe.jsxs)("div",{className:`im-canvas${Ci?" is-drop-active":""}`,ref:E,...Ni,children:[(0,fe.jsx)(om,{selectedCount:k.length,selectedPromptCount:k.filter(A=>t.some(U=>U.id===A&&U.type==="prompt")).length,selectedRunnableIds:to.filter(A=>k.includes(A)),pickingOutputDir:no,onRunSelected:()=>Wt(to.filter(A=>k.includes(A))),onAutoLayout:Si,onAutoConnectSelected:yi,onSetOutputDir:()=>void xi(),onDeleteSelected:()=>{Vt(k),S([])}}),(0,fe.jsx)(ps.Provider,{value:b,children:(0,fe.jsx)(ii,{onCrash:A=>{j.current=!0,H(e("flash.renderError",{reason:A.message}))},onClear:()=>{n([]),i([]),S([])},children:(0,fe.jsxs)(au,{nodes:eo,edges:o,nodeTypes:Pp,onNodesChange:A=>{let U=ap(A,F.current,M);v(U.guides),r(U.changes)},onEdgesChange:A=>a(A),onConnect:af(i),isValidConnection:A=>Mu(F.current,Z.current,{source:String(A.source??""),target:String(A.target??"")}),onInit:A=>{I.current=A,x(A.getViewport().zoom<ys)},onNodeDragStop:(A,U)=>{if(v([]),!M)return;let K=Eo(U),ce=F.current.filter(dt=>dt.id!==U.id).map(Eo),we=Kr(K,ce);we.x===K.x&&we.y===K.y||n(dt=>dt.map(an=>an.id===U.id?{...an,position:{x:we.x,y:we.y}}:an))},onMove:(A,U)=>{h(U.zoom),x(K=>Tp(K,U.zoom))},onEdgeDoubleClick:(A,U)=>{Q.record(),i(K=>K.filter(ce=>ce.id!==U.id)),C(null)},onSelectionChange:({nodes:A,edges:U})=>{let K=A.map(we=>we.id);S(we=>we.length===K.length&&we.every((dt,an)=>dt===K[an])?we:K);let ce=U.length===1?U[0].id:null;C(we=>we===ce?we:ce)},fitView:!0,fitViewOptions:{padding:.15,minZoom:.02,maxZoom:1},minZoom:.05,maxZoom:2,proOptions:{hideAttribution:!0},defaultEdgeOptions:ct,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!D,nodesConnectable:!D,elementsSelectable:!D,panOnDrag:!D,selectionOnDrag:!1,selectionKeyCode:null,multiSelectionKeyCode:["Meta","Control"],children:[(0,fe.jsx)(uu,{variant:vt.Dots,gap:18,size:1.4}),g?(0,fe.jsx)(fu,{ariaLabel:e("canvas.minimap"),pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:A=>A.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,fe.jsx)(tf,{guides:T})]})})}),(0,fe.jsx)($p,{zoom:y,snapEnabled:M,canvasLocked:D,minimapOpen:g,onZoomIn:()=>void I.current?.zoomIn({duration:180}),onZoomOut:()=>void I.current?.zoomOut({duration:180}),onFitView:()=>I.current?.fitView({padding:.15,duration:300,minZoom:.02,maxZoom:2}),onFocusSelected:ki,onToggleSnap:()=>O(A=>{let U=!A;return ip(U),U||v([]),G(e(U?"flash.snap.on":"flash.snap.off")),U}),onToggleLock:()=>L(A=>{let U=!A;return G(e(U?"flash.lock.on":"flash.lock.off")),U}),onToggleMinimap:()=>w(A=>{let U=!A;return nm(U),U}),onOpenHelp:()=>p({kind:"help"})}),Rt&&I.current&&E.current?(()=>{let A=I.current.flowToScreenPosition({x:Rt.x,y:Rt.y}),U=I.current.flowToScreenPosition({x:Rt.x+Rt.width,y:Rt.y+Rt.height}),K=E.current.getBoundingClientRect();return(0,fe.jsx)("div",{className:"im-marquee",style:{left:A.x-K.left,top:A.y-K.top,width:U.x-A.x,height:U.y-A.y}})})():null,t.length===0?(0,fe.jsx)(rm,{}):null,(0,fe.jsx)(im,{logs:s}),(0,fe.jsx)(am,{text:d}),Ei]}),zt&&oo.length>0?(0,fe.jsx)(Qp,{x:zt.x,y:zt.y,items:oo,onPick:Vo,onClose:_i}):null,(0,fe.jsx)("input",{ref:_,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:A=>{let U=Array.from(A.target.files??[]);A.target.value="",q(U,$e())}}),m?(0,fe.jsx)(ui,{imageUrl:m.url,name:m.name,copyPath:m.path,onClose:()=>f(null)}):null,l?.kind==="save"?(0,fe.jsx)(xm,{workflows:l.workflows??[],imagoraRoot:te?.imagoraRoot,onCancel:()=>p(null),onSubmit:A=>void It(A)}):null,l?.kind==="load"?(0,fe.jsx)(wm,{workflows:l.workflows??[],imagoraRoot:te?.imagoraRoot,onCancel:()=>p(null),onPick:A=>void Qe(A)}):null,l?.kind==="crop"&&l.target?(0,fe.jsx)(Tm,{src:l.target.src,name:l.target.name,onClose:()=>p(null),onConfirm:async(A,U)=>{Q.record(),await Ee(A,`${l.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),p(null),G(U)}}):null,l?.kind==="split"&&l.target?(0,fe.jsx)(Km,{src:l.target.src,name:l.target.name,onClose:()=>p(null),onConfirm:async A=>{Q.record();let U=l.target.name.replace(/\.[^.]+$/,""),K=$e();for(let[ce,we]of A.entries())await Ee(we.dataUrl,`${U}_${ce+1}.png`,{x:K.x+ce*160,y:K.y});p(null),G(e("flash.split.done",{count:A.length}))}}):null,l?.kind==="upscale"&&l.target?(0,fe.jsx)(ef,{src:l.target.src,onClose:()=>p(null),onConfirm:async(A,U)=>{Q.record(),await Ee(A,`${l.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),p(null),G(U)}}):null,l?.kind==="mask"&&l.target?(0,fe.jsx)(Lm,{src:l.target.src,name:l.target.name,onClose:()=>p(null),onConfirm:async(A,U)=>{Q.record(),n(K=>K.map(ce=>ce.id===l.target.nodeId&&ce.type==="image"?{...ce,data:{...ce.data,maskDataUrl:A}}:ce)),p(null),G(U)}}):null,l?.kind==="help"?(0,fe.jsx)(vm,{config:te,onClose:()=>p(null)}):null,l?.kind==="history"?(0,fe.jsx)(Vm,{imagoraRoot:te?.imagoraRoot,onClose:()=>p(null),onImport:A=>{if(!A.length)return;Q.record();let U=$e(),K=A.map((ce,we)=>vn(ce,{x:U.x+we*172,y:U.y}));n(ce=>[...ce,...K]),G(e("flash.drop.images",{count:K.length}))}}):null,l?.kind==="import"?(0,fe.jsx)(nf,{sizes:te?.sizes??[],onCancel:()=>p(null),onConfirm:A=>{Q.record();let U=P.current,K=qu(A,{sizes:U?.sizes??[],defaultQuality:U?.qualities[0]??"high",defaultOutputDir:U?.defaultOutputDir??""},$e());n(ce=>[...ce,...K]),p(null),G(e("flash.import.prompts",{count:K.length}))}}):null,l?.kind==="settings"?(0,fe.jsx)(of,{config:te,onClose:()=>p(null),onSaved:re,onFlash:G}):null]})]})}var yf=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Sf=require("react/jsx-runtime"),_1=["slots","locale"],kf="imagora";globalThis.__dshImagoraCanvas=Ls;var I1={ErrorBoundary:jn,NodeBoundary:ri,CanvasBoundary:ii};globalThis.__dshImagoraBoundary=I1;function P1({size:e=16}){return(0,Sf.jsx)(xs,{size:e,fill:"currentColor"})}function z1(e){e.effect(()=>e.locale.register(Io,{zh:cs,en:bp}),"dsh-imagora-desk: \u6587\u6848\u8BCD\u5178");let t=e.locale.bind(Io);e.effect(()=>{let n=document.createElement("style");return n.setAttribute("data-dsh-imagora-desk","xyflow"),n.textContent=yf,document.head.appendChild(n),()=>n.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(vf(),wf)).then(({primitives:n})=>{try{n()}catch(r){console.error("[dsh-imagora-desk]",r)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:kf,locale:Io},Ls)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:kf,order:6,locale:Io,label:()=>t("panel.entry")},P1)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
