window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var $f=Object.create;var Vo=Object.defineProperty;var Ff=Object.getOwnPropertyDescriptor;var Wf=Object.getOwnPropertyNames;var Vf=Object.getPrototypeOf,Uf=Object.prototype.hasOwnProperty;var Gf=(e,t)=>()=>(e&&(t=e(e=0)),t);var Uo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),$s=(e,t)=>{for(var n in t)Vo(e,n,{get:t[n],enumerable:!0})},Fs=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Wf(t))!Uf.call(e,o)&&o!==n&&Vo(e,o,{get:()=>t[o],enumerable:!(r=Ff(t,o))||r.enumerable});return e};var Ws=(e,t,n)=>(n=e!=null?$f(Vf(e)):{},Fs(t||!e||!e.__esModule?Vo(n,"default",{value:e,enumerable:!0}):n,e)),Xf=e=>Fs(Vo({},"__esModule",{value:!0}),e);var Hc=Uo(Lc=>{"use strict";var Kn=require("react");function s0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var l0=typeof Object.is=="function"?Object.is:s0,c0=Kn.useState,d0=Kn.useEffect,u0=Kn.useLayoutEffect,p0=Kn.useDebugValue;function m0(e,t){var n=t(),r=c0({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return u0(function(){o.value=n,o.getSnapshot=t,$a(o)&&i({inst:o})},[e,n,t]),d0(function(){return $a(o)&&i({inst:o}),e(function(){$a(o)&&i({inst:o})})},[e]),p0(n),n}function $a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!l0(e,n)}catch{return!0}}function f0(e,t){return t()}var g0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f0:m0;Lc.useSyncExternalStore=Kn.useSyncExternalStore!==void 0?Kn.useSyncExternalStore:g0});var $c=Uo((Rk,Bc)=>{"use strict";Bc.exports=Hc()});var Wc=Uo(Fc=>{"use strict";var zr=require("react"),h0=$c();function b0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var y0=typeof Object.is=="function"?Object.is:b0,x0=h0.useSyncExternalStore,w0=zr.useRef,v0=zr.useEffect,k0=zr.useMemo,S0=zr.useDebugValue;Fc.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=w0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=k0(function(){function l(m){if(!c){if(c=!0,u=m,m=r(m),o!==void 0&&a.hasValue){var f=a.value;if(o(f,m))return d=f}return d=m}if(f=d,y0(u,m))return f;var y=r(m);return o!==void 0&&o(f,y)?(u=m,f):(u=m,d=y)}var c=!1,u,d,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,o]);var s=x0(e,i[0],i[1]);return v0(function(){a.hasValue=!0,a.value=s},[s]),S0(s),s}});var Uc=Uo((Dk,Vc)=>{"use strict";Vc.exports=Wc()});var hf={};$s(hf,{primitives:()=>k1});function v1(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function k1(){if(gi)return gi;let e=require(gf),t=v1(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${gf}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return gi=t,gi}var gf,gi,bf=Gf(()=>{"use strict";gf="@deepseek-ai/dsh-client-ui-primitives",gi=null});var E1={};$s(E1,{apply:()=>M1,inject:()=>S1});module.exports=Xf(E1);var le=require("react");var B=require("react/jsx-runtime"),H=require("react");function Ie(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,r;n<e.length;n++)(r=Ie(e[n]))!==""&&(t+=(t&&" ")+r);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var qf={value:()=>{}};function sn(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Go(n)}function Go(e){this._=e}function Yf(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Go.prototype=sn.prototype={constructor:Go,on:function(e,t){var n=this._,r=Yf(e+"",n),o,i=-1,a=r.length;if(arguments.length<2){for(;++i<a;)if((o=(e=r[i]).type)&&(o=Kf(n[o],e.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(o=(e=r[i]).type)n[o]=Vs(n[o],e.name,t);else if(t==null)for(o in n)n[o]=Vs(n[o],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Go(e)},call:function(e,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,i;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],r=0,o=i.length;r<o;++r)i[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],o=0,i=r.length;o<i;++o)r[o].value.apply(t,n)}};function Kf(e,t){for(var n=0,r=e.length,o;n<r;++n)if((o=e[n]).name===t)return o.value}function Vs(e,t,n){for(var r=0,o=e.length;r<o;++r)if(e[r].name===t){e[r]=qf,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Pi="http://www.w3.org/1999/xhtml",Us={svg:"http://www.w3.org/2000/svg",xhtml:Pi,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ro(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Us.hasOwnProperty(t)?{space:Us[t],local:e}:e}function Zf(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Pi&&t.documentElement.namespaceURI===Pi?t.createElement(e):t.createElementNS(n,e)}}function jf(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Gs(e){var t=ro(e);return(t.local?jf:Zf)(t)}function Qf(){}function qo(e){return e==null?Qf:function(){return this.querySelector(e)}}function Jf(e){typeof e!="function"&&(e=qo(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var i=t[o],a=i.length,s=r[o]=new Array(a),l,c,u=0;u<a;++u)(l=i[u])&&(c=e.call(l,l.__data__,u,i))&&("__data__"in l&&(c.__data__=l.__data__),s[u]=c);return new et(r,this._parents)}function eg(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function tg(){return[]}function Ri(e){return e==null?tg:function(){return this.querySelectorAll(e)}}function ng(e){return function(){return eg(e.apply(this,arguments))}}function og(e){typeof e=="function"?e=ng(e):e=Ri(e);for(var t=this._groups,n=t.length,r=[],o=[],i=0;i<n;++i)for(var a=t[i],s=a.length,l,c=0;c<s;++c)(l=a[c])&&(r.push(e.call(l,l.__data__,c,a)),o.push(l));return new et(r,o)}function Ti(e){return function(){return this.matches(e)}}function Xs(e){return function(t){return t.matches(e)}}var rg=Array.prototype.find;function ig(e){return function(){return rg.call(this.children,e)}}function ag(){return this.firstElementChild}function sg(e){return this.select(e==null?ag:ig(typeof e=="function"?e:Xs(e)))}var lg=Array.prototype.filter;function cg(){return Array.from(this.children)}function dg(e){return function(){return lg.call(this.children,e)}}function ug(e){return this.selectAll(e==null?cg:dg(typeof e=="function"?e:Xs(e)))}function pg(e){typeof e!="function"&&(e=Ti(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var i=t[o],a=i.length,s=r[o]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&s.push(l);return new et(r,this._parents)}function qs(e){return new Array(e.length)}function mg(){return new et(this._enter||this._groups.map(qs),this._parents)}function Xo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Xo.prototype={constructor:Xo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function fg(e){return function(){return e}}function gg(e,t,n,r,o,i){for(var a=0,s,l=t.length,c=i.length;a<c;++a)(s=t[a])?(s.__data__=i[a],r[a]=s):n[a]=new Xo(e,i[a]);for(;a<l;++a)(s=t[a])&&(o[a]=s)}function hg(e,t,n,r,o,i,a){var s,l,c=new Map,u=t.length,d=i.length,p=new Array(u),m;for(s=0;s<u;++s)(l=t[s])&&(p[s]=m=a.call(l,l.__data__,s,t)+"",c.has(m)?o[s]=l:c.set(m,l));for(s=0;s<d;++s)m=a.call(e,i[s],s,i)+"",(l=c.get(m))?(r[s]=l,l.__data__=i[s],c.delete(m)):n[s]=new Xo(e,i[s]);for(s=0;s<u;++s)(l=t[s])&&c.get(p[s])===l&&(o[s]=l)}function bg(e){return e.__data__}function yg(e,t){if(!arguments.length)return Array.from(this,bg);var n=t?hg:gg,r=this._parents,o=this._groups;typeof e!="function"&&(e=fg(e));for(var i=o.length,a=new Array(i),s=new Array(i),l=new Array(i),c=0;c<i;++c){var u=r[c],d=o[c],p=d.length,m=xg(e.call(u,u&&u.__data__,c,r)),f=m.length,y=s[c]=new Array(f),h=a[c]=new Array(f),b=l[c]=new Array(p);n(u,d,y,h,b,m,t);for(var w=0,g=0,x,k;w<f;++w)if(x=y[w]){for(w>=g&&(g=w+1);!(k=h[g])&&++g<f;);x._next=k||null}}return a=new et(a,r),a._enter=s,a._exit=l,a}function xg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function wg(){return new et(this._exit||this._groups.map(qs),this._parents)}function vg(e,t,n){var r=this.enter(),o=this,i=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?i.remove():n(i),r&&o?r.merge(o).order():o}function kg(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,o=n.length,i=r.length,a=Math.min(o,i),s=new Array(o),l=0;l<a;++l)for(var c=n[l],u=r[l],d=c.length,p=s[l]=new Array(d),m,f=0;f<d;++f)(m=c[f]||u[f])&&(p[f]=m);for(;l<o;++l)s[l]=n[l];return new et(s,this._parents)}function Sg(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],o=r.length-1,i=r[o],a;--o>=0;)(a=r[o])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function Cg(e){e||(e=Ng);function t(d,p){return d&&p?e(d.__data__,p.__data__):!d-!p}for(var n=this._groups,r=n.length,o=new Array(r),i=0;i<r;++i){for(var a=n[i],s=a.length,l=o[i]=new Array(s),c,u=0;u<s;++u)(c=a[u])&&(l[u]=c);l.sort(t)}return new et(o,this._parents).order()}function Ng(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Mg(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Eg(){return Array.from(this)}function _g(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,i=r.length;o<i;++o){var a=r[o];if(a)return a}return null}function Ig(){let e=0;for(let t of this)++e;return e}function Pg(){return!this.node()}function zg(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],i=0,a=o.length,s;i<a;++i)(s=o[i])&&e.call(s,s.__data__,i,o);return this}function Rg(e){return function(){this.removeAttribute(e)}}function Tg(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Dg(e,t){return function(){this.setAttribute(e,t)}}function Ag(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Og(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Lg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Hg(e,t){var n=ro(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?Tg:Rg:typeof t=="function"?n.local?Lg:Og:n.local?Ag:Dg)(n,t))}function Ys(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Bg(e){return function(){this.style.removeProperty(e)}}function $g(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Fg(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Wg(e,t,n){return arguments.length>1?this.each((t==null?Bg:typeof t=="function"?Fg:$g)(e,t,n??"")):ln(this.node(),e)}function ln(e,t){return e.style.getPropertyValue(t)||Ys(e).getComputedStyle(e,null).getPropertyValue(t)}function Vg(e){return function(){delete this[e]}}function Ug(e,t){return function(){this[e]=t}}function Gg(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Xg(e,t){return arguments.length>1?this.each((t==null?Vg:typeof t=="function"?Gg:Ug)(e,t)):this.node()[e]}function Ks(e){return e.trim().split(/^|\s+/)}function Di(e){return e.classList||new Zs(e)}function Zs(e){this._node=e,this._names=Ks(e.getAttribute("class")||"")}Zs.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function js(e,t){for(var n=Di(e),r=-1,o=t.length;++r<o;)n.add(t[r])}function Qs(e,t){for(var n=Di(e),r=-1,o=t.length;++r<o;)n.remove(t[r])}function qg(e){return function(){js(this,e)}}function Yg(e){return function(){Qs(this,e)}}function Kg(e,t){return function(){(t.apply(this,arguments)?js:Qs)(this,e)}}function Zg(e,t){var n=Ks(e+"");if(arguments.length<2){for(var r=Di(this.node()),o=-1,i=n.length;++o<i;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?Kg:t?qg:Yg)(n,t))}function jg(){this.textContent=""}function Qg(e){return function(){this.textContent=e}}function Jg(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function eh(e){return arguments.length?this.each(e==null?jg:(typeof e=="function"?Jg:Qg)(e)):this.node().textContent}function th(){this.innerHTML=""}function nh(e){return function(){this.innerHTML=e}}function oh(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function rh(e){return arguments.length?this.each(e==null?th:(typeof e=="function"?oh:nh)(e)):this.node().innerHTML}function ih(){this.nextSibling&&this.parentNode.appendChild(this)}function ah(){return this.each(ih)}function sh(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function lh(){return this.each(sh)}function ch(e){var t=typeof e=="function"?e:Gs(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function dh(){return null}function uh(e,t){var n=typeof e=="function"?e:Gs(e),r=t==null?dh:typeof t=="function"?t:qo(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function ph(){var e=this.parentNode;e&&e.removeChild(this)}function mh(){return this.each(ph)}function fh(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function gh(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function hh(e){return this.select(e?gh:fh)}function bh(e){return arguments.length?this.property("__data__",e):this.node().__data__}function yh(e){return function(t){e.call(this,t,this.__data__)}}function xh(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function wh(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,i;n<o;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++r]=i;++r?t.length=r:delete this.__on}}}function vh(e,t,n){return function(){var r=this.__on,o,i=yh(t);if(r){for(var a=0,s=r.length;a<s;++a)if((o=r[a]).type===e.type&&o.name===e.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=i,o.options=n),o.value=t;return}}this.addEventListener(e.type,i,n),o={type:e.type,name:e.name,value:t,listener:i,options:n},r?r.push(o):this.__on=[o]}}function kh(e,t,n){var r=xh(e+""),o,i=r.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,c=s.length,u;l<c;++l)for(o=0,u=s[l];o<i;++o)if((a=r[o]).type===u.type&&a.name===u.name)return u.value}return}for(s=t?vh:wh,o=0;o<i;++o)this.each(s(r[o],t,n));return this}function Js(e,t,n){var r=Ys(e),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),e.dispatchEvent(o)}function Sh(e,t){return function(){return Js(this,e,t)}}function Ch(e,t){return function(){return Js(this,e,t.apply(this,arguments))}}function Nh(e,t){return this.each((typeof t=="function"?Ch:Sh)(e,t))}function*Mh(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,i=r.length,a;o<i;++o)(a=r[o])&&(yield a)}var el=[null];function et(e,t){this._groups=e,this._parents=t}function cn(){return new et([[document.documentElement]],el)}function Eh(){return this}et.prototype=cn.prototype={constructor:et,select:Jf,selectAll:og,selectChild:sg,selectChildren:ug,filter:pg,data:yg,enter:mg,exit:wg,join:vg,merge:kg,selection:Eh,order:Sg,sort:Cg,call:Mg,nodes:Eg,node:_g,size:Ig,empty:Pg,each:zg,attr:Hg,style:Wg,property:Xg,classed:Zg,text:eh,html:rh,raise:ah,lower:lh,append:ch,insert:uh,remove:mh,clone:hh,datum:bh,on:kh,dispatch:Nh,[Symbol.iterator]:Mh};function $e(e){return typeof e=="string"?new et([[document.querySelector(e)]],[document.documentElement]):new et([[e]],el)}var _h=0;function Ih(){return new zi}function zi(){this._="@"+(++_h).toString(36)}zi.prototype=Ih.prototype={constructor:zi,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function Ph(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Xe(e,t){if(e=Ph(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var o=t.getBoundingClientRect();return[e.clientX-o.left-t.clientLeft,e.clientY-o.top-t.clientTop]}}return[e.pageX,e.pageY]}var zh={passive:!1},io={capture:!0,passive:!1};function Ai(e){e.stopImmediatePropagation()}function Pn(e){e.preventDefault(),e.stopImmediatePropagation()}function Li(e){var t=e.document.documentElement,n=$e(e).on("dragstart.drag",Pn,io);"onselectstart"in t?n.on("selectstart.drag",Pn,io):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Hi(e,t){var n=e.document.documentElement,r=$e(e).on("dragstart.drag",null);t&&(r.on("click.drag",Pn,io),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Yo=e=>()=>e;function Oi(e,{sourceEvent:t,subject:n,target:r,identifier:o,active:i,x:a,y:s,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}Oi.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Rh(e){return!e.ctrlKey&&!e.button}function Th(){return this.parentNode}function Dh(e,t){return t??{x:e.x,y:e.y}}function Ah(){return navigator.maxTouchPoints||"ontouchstart"in this}function Bi(){var e=Rh,t=Th,n=Dh,r=Ah,o={},i=sn("start","drag","end"),a=0,s,l,c,u,d=0;function p(x){x.on("mousedown.drag",m).filter(r).on("touchstart.drag",h).on("touchmove.drag",b,zh).on("touchend.drag touchcancel.drag",w).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(x,k){if(!(u||!e.call(this,x,k))){var S=g(this,t.call(this,x,k),x,k,"mouse");S&&($e(x.view).on("mousemove.drag",f,io).on("mouseup.drag",y,io),Li(x.view),Ai(x),c=!1,s=x.clientX,l=x.clientY,S("start",x))}}function f(x){if(Pn(x),!c){var k=x.clientX-s,S=x.clientY-l;c=k*k+S*S>d}o.mouse("drag",x)}function y(x){$e(x.view).on("mousemove.drag mouseup.drag",null),Hi(x.view,c),Pn(x),o.mouse("end",x)}function h(x,k){if(e.call(this,x,k)){var S=x.changedTouches,N=t.call(this,x,k),C=S.length,M,O;for(M=0;M<C;++M)(O=g(this,N,x,k,S[M].identifier,S[M]))&&(Ai(x),O("start",x,S[M]))}}function b(x){var k=x.changedTouches,S=k.length,N,C;for(N=0;N<S;++N)(C=o[k[N].identifier])&&(Pn(x),C("drag",x,k[N]))}function w(x){var k=x.changedTouches,S=k.length,N,C;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),N=0;N<S;++N)(C=o[k[N].identifier])&&(Ai(x),C("end",x,k[N]))}function g(x,k,S,N,C,M){var O=i.copy(),D=Xe(M||S,k),L,T,v;if((v=n.call(x,new Oi("beforestart",{sourceEvent:S,target:p,identifier:C,active:a,x:D[0],y:D[1],dx:0,dy:0,dispatch:O}),N))!=null)return L=v.x-D[0]||0,T=v.y-D[1]||0,function E(z,I,_){var R=D,V;switch(z){case"start":o[C]=E,V=a++;break;case"end":delete o[C],--a;case"drag":D=Xe(_||I,k),V=a;break}O.call(z,x,new Oi(z,{sourceEvent:I,subject:v,target:p,identifier:C,active:V,x:D[0]+L,y:D[1]+T,dx:D[0]-R[0],dy:D[1]-R[1],dispatch:O}),N)}}return p.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Yo(!!x),p):e},p.container=function(x){return arguments.length?(t=typeof x=="function"?x:Yo(x),p):t},p.subject=function(x){return arguments.length?(n=typeof x=="function"?x:Yo(x),p):n},p.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:Yo(!!x),p):r},p.on=function(){var x=i.on.apply(i,arguments);return x===i?p:x},p.clickDistance=function(x){return arguments.length?(d=(x=+x)*x,p):Math.sqrt(d)},p}function Dn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function lo(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Vt(){}var mn=.7,Tn=1/mn,zn="\\s*([+-]?\\d+)\\s*",ao="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ht="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Oh=/^#([0-9a-f]{3,8})$/,Lh=new RegExp(`^rgb\\(${zn},${zn},${zn}\\)$`),Hh=new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`),Bh=new RegExp(`^rgba\\(${zn},${zn},${zn},${ao}\\)$`),$h=new RegExp(`^rgba\\(${ht},${ht},${ht},${ao}\\)$`),Fh=new RegExp(`^hsl\\(${ao},${ht},${ht}\\)$`),Wh=new RegExp(`^hsla\\(${ao},${ht},${ht},${ao}\\)$`),tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Dn(Vt,Tt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:nl,formatHex:nl,formatHex8:Vh,formatHsl:Uh,formatRgb:ol,toString:ol});function nl(){return this.rgb().formatHex()}function Vh(){return this.rgb().formatHex8()}function Uh(){return pl(this).formatHsl()}function ol(){return this.rgb().formatRgb()}function Tt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Oh.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?rl(t):n===3?new He(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ko(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ko(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Lh.exec(e))?new He(t[1],t[2],t[3],1):(t=Hh.exec(e))?new He(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Bh.exec(e))?Ko(t[1],t[2],t[3],t[4]):(t=$h.exec(e))?Ko(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Fh.exec(e))?sl(t[1],t[2]/100,t[3]/100,1):(t=Wh.exec(e))?sl(t[1],t[2]/100,t[3]/100,t[4]):tl.hasOwnProperty(e)?rl(tl[e]):e==="transparent"?new He(NaN,NaN,NaN,0):null}function rl(e){return new He(e>>16&255,e>>8&255,e&255,1)}function Ko(e,t,n,r){return r<=0&&(e=t=n=NaN),new He(e,t,n,r)}function Gi(e){return e instanceof Vt||(e=Tt(e)),e?(e=e.rgb(),new He(e.r,e.g,e.b,e.opacity)):new He}function co(e,t,n,r){return arguments.length===1?Gi(e):new He(e,t,n,r??1)}function He(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Dn(He,co,lo(Vt,{brighter(e){return e=e==null?Tn:Math.pow(Tn,e),new He(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new He(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new He(un(this.r),un(this.g),un(this.b),jo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:il,formatHex:il,formatHex8:Gh,formatRgb:al,toString:al}));function il(){return`#${dn(this.r)}${dn(this.g)}${dn(this.b)}`}function Gh(){return`#${dn(this.r)}${dn(this.g)}${dn(this.b)}${dn((isNaN(this.opacity)?1:this.opacity)*255)}`}function al(){let e=jo(this.opacity);return`${e===1?"rgb(":"rgba("}${un(this.r)}, ${un(this.g)}, ${un(this.b)}${e===1?")":`, ${e})`}`}function jo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function un(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function dn(e){return e=un(e),(e<16?"0":"")+e.toString(16)}function sl(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ut(e,t,n,r)}function pl(e){if(e instanceof ut)return new ut(e.h,e.s,e.l,e.opacity);if(e instanceof Vt||(e=Tt(e)),!e)return new ut;if(e instanceof ut)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,o=Math.min(t,n,r),i=Math.max(t,n,r),a=NaN,s=i-o,l=(i+o)/2;return s?(t===i?a=(n-r)/s+(n<r)*6:n===i?a=(r-t)/s+2:a=(t-n)/s+4,s/=l<.5?i+o:2-i-o,a*=60):s=l>0&&l<1?0:a,new ut(a,s,l,e.opacity)}function Jo(e,t,n,r){return arguments.length===1?pl(e):new ut(e,t,n,r??1)}function ut(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Dn(ut,Jo,lo(Vt,{brighter(e){return e=e==null?Tn:Math.pow(Tn,e),new ut(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new ut(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new He($i(e>=240?e-240:e+120,o,r),$i(e,o,r),$i(e<120?e+240:e-120,o,r),this.opacity)},clamp(){return new ut(ll(this.h),Zo(this.s),Zo(this.l),jo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=jo(this.opacity);return`${e===1?"hsl(":"hsla("}${ll(this.h)}, ${Zo(this.s)*100}%, ${Zo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function ll(e){return e=(e||0)%360,e<0?e+360:e}function Zo(e){return Math.max(0,Math.min(1,e||0))}function $i(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var ml=Math.PI/180,fl=180/Math.PI,Qo=18,gl=.96422,hl=1,bl=.82521,yl=4/29,Rn=6/29,xl=3*Rn*Rn,Xh=Rn*Rn*Rn;function wl(e){if(e instanceof bt)return new bt(e.l,e.a,e.b,e.opacity);if(e instanceof Rt)return kl(e);e instanceof He||(e=Gi(e));var t=Ui(e.r),n=Ui(e.g),r=Ui(e.b),o=Fi((.2225045*t+.7168786*n+.0606169*r)/hl),i,a;return t===n&&n===r?i=a=o:(i=Fi((.4360747*t+.3850649*n+.1430804*r)/gl),a=Fi((.0139322*t+.0971045*n+.7141733*r)/bl)),new bt(116*o-16,500*(i-o),200*(o-a),e.opacity)}function vl(e,t,n,r){return arguments.length===1?wl(e):new bt(e,t,n,r??1)}function bt(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}Dn(bt,vl,lo(Vt,{brighter(e){return new bt(this.l+Qo*(e??1),this.a,this.b,this.opacity)},darker(e){return new bt(this.l-Qo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=gl*Wi(t),e=hl*Wi(e),n=bl*Wi(n),new He(Vi(3.1338561*t-1.6168667*e-.4906146*n),Vi(-.9787684*t+1.9161415*e+.033454*n),Vi(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Fi(e){return e>Xh?Math.pow(e,1/3):e/xl+yl}function Wi(e){return e>Rn?e*e*e:xl*(e-yl)}function Vi(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ui(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function qh(e){if(e instanceof Rt)return new Rt(e.h,e.c,e.l,e.opacity);if(e instanceof bt||(e=wl(e)),e.a===0&&e.b===0)return new Rt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*fl;return new Rt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function er(e,t,n,r){return arguments.length===1?qh(e):new Rt(e,t,n,r??1)}function Rt(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}function kl(e){if(isNaN(e.h))return new bt(e.l,0,0,e.opacity);var t=e.h*ml;return new bt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Dn(Rt,er,lo(Vt,{brighter(e){return new Rt(this.h,this.c,this.l+Qo*(e??1),this.opacity)},darker(e){return new Rt(this.h,this.c,this.l-Qo*(e??1),this.opacity)},rgb(){return kl(this).rgb()}}));var Sl=-.14861,Xi=1.78277,qi=-.29227,tr=-.90649,so=1.97294,cl=so*tr,dl=so*Xi,ul=Xi*qi-tr*Sl;function Yh(e){if(e instanceof pn)return new pn(e.h,e.s,e.l,e.opacity);e instanceof He||(e=Gi(e));var t=e.r/255,n=e.g/255,r=e.b/255,o=(ul*r+cl*t-dl*n)/(ul+cl-dl),i=r-o,a=(so*(n-o)-qi*i)/tr,s=Math.sqrt(a*a+i*i)/(so*o*(1-o)),l=s?Math.atan2(a,i)*fl-120:NaN;return new pn(l<0?l+360:l,s,o,e.opacity)}function nr(e,t,n,r){return arguments.length===1?Yh(e):new pn(e,t,n,r??1)}function pn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Dn(pn,nr,lo(Vt,{brighter(e){return e=e==null?Tn:Math.pow(Tn,e),new pn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new pn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*ml,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(e),o=Math.sin(e);return new He(255*(t+n*(Sl*r+Xi*o)),255*(t+n*(qi*r+tr*o)),255*(t+n*(so*r)),this.opacity)}}));function Ml(e,t,n,r,o){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*r+a*o)/6}function Kh(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),o=e[r],i=e[r+1],a=r>0?e[r-1]:2*o-i,s=r<t-1?e[r+2]:2*i-o;return Ml((n-r/t)*t,a,o,i,s)}}function Zh(e){var t=e.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),o=e[(r+t-1)%t],i=e[r%t],a=e[(r+1)%t],s=e[(r+2)%t];return Ml((n-r/t)*t,o,i,a,s)}}var rr=e=>()=>e;function El(e,t){return function(n){return e+n*t}}function jh(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function ji(e,t){var n=t-e;return n?El(e,n>180||n<-180?n-360*Math.round(n/360):n):rr(isNaN(e)?t:e)}function Qh(e){return(e=+e)==1?qe:function(t,n){return n-t?jh(t,n,e):rr(isNaN(t)?n:t)}}function qe(e,t){var n=t-e;return n?El(e,n):rr(isNaN(e)?t:e)}var uo=(function e(t){var n=Qh(t);function r(o,i){var a=n((o=co(o)).r,(i=co(i)).r),s=n(o.g,i.g),l=n(o.b,i.b),c=qe(o.opacity,i.opacity);return function(u){return o.r=a(u),o.g=s(u),o.b=l(u),o.opacity=c(u),o+""}}return r.gamma=e,r})(1);function _l(e){return function(t){var n=t.length,r=new Array(n),o=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=co(t[a]),r[a]=s.r||0,o[a]=s.g||0,i[a]=s.b||0;return r=e(r),o=e(o),i=e(i),s.opacity=1,function(l){return s.r=r(l),s.g=o(l),s.b=i(l),s+""}}}var L1=_l(Kh),H1=_l(Zh);function Jh(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),o;return function(i){for(o=0;o<n;++o)r[o]=e[o]*(1-i)+t[o]*i;return r}}function eb(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tb(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,o=new Array(r),i=new Array(n),a;for(a=0;a<r;++a)o[a]=An(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<r;++a)i[a]=o[a](s);return i}}function nb(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function pt(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function ob(e,t){var n={},r={},o;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in e?n[o]=An(e[o],t[o]):r[o]=t[o];return function(i){for(o in n)r[o]=n[o](i);return r}}var Ki=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Yi=new RegExp(Ki.source,"g");function rb(e){return function(){return e}}function ib(e){return function(t){return e(t)+""}}function Qi(e,t){var n=Ki.lastIndex=Yi.lastIndex=0,r,o,i,a=-1,s=[],l=[];for(e=e+"",t=t+"";(r=Ki.exec(e))&&(o=Yi.exec(t));)(i=o.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(r=r[0])===(o=o[0])?s[a]?s[a]+=o:s[++a]=o:(s[++a]=null,l.push({i:a,x:pt(r,o)})),n=Yi.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?l[0]?ib(l[0].x):rb(t):(t=l.length,function(c){for(var u=0,d;u<t;++u)s[(d=l[u]).i]=d.x(c);return s.join("")})}function An(e,t){var n=typeof t,r;return t==null||n==="boolean"?rr(t):(n==="number"?pt:n==="string"?(r=Tt(t))?(t=r,uo):Qi:t instanceof Tt?uo:t instanceof Date?nb:eb(t)?Jh:Array.isArray(t)?tb:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ob:pt)(e,t)}var Cl=180/Math.PI,Zi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Il(e,t,n,r,o,i){var a,s,l;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,l/=s),e*r<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:o,translateY:i,rotate:Math.atan2(t,e)*Cl,skewX:Math.atan(l)*Cl,scaleX:a,scaleY:s}}var or;function ab(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Zi:Il(t.a,t.b,t.c,t.d,t.e,t.f)}function sb(e){return e==null||(or||(or=document.createElementNS("http://www.w3.org/2000/svg","g")),or.setAttribute("transform",e),!(e=or.transform.baseVal.consolidate()))?Zi:(e=e.matrix,Il(e.a,e.b,e.c,e.d,e.e,e.f))}function Pl(e,t,n,r){function o(c){return c.length?c.pop()+" ":""}function i(c,u,d,p,m,f){if(c!==d||u!==p){var y=m.push("translate(",null,t,null,n);f.push({i:y-4,x:pt(c,d)},{i:y-2,x:pt(u,p)})}else(d||p)&&m.push("translate("+d+t+p+n)}function a(c,u,d,p){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),p.push({i:d.push(o(d)+"rotate(",null,r)-2,x:pt(c,u)})):u&&d.push(o(d)+"rotate("+u+r)}function s(c,u,d,p){c!==u?p.push({i:d.push(o(d)+"skewX(",null,r)-2,x:pt(c,u)}):u&&d.push(o(d)+"skewX("+u+r)}function l(c,u,d,p,m,f){if(c!==d||u!==p){var y=m.push(o(m)+"scale(",null,",",null,")");f.push({i:y-4,x:pt(c,d)},{i:y-2,x:pt(u,p)})}else(d!==1||p!==1)&&m.push(o(m)+"scale("+d+","+p+")")}return function(c,u){var d=[],p=[];return c=e(c),u=e(u),i(c.translateX,c.translateY,u.translateX,u.translateY,d,p),a(c.rotate,u.rotate,d,p),s(c.skewX,u.skewX,d,p),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,d,p),c=u=null,function(m){for(var f=-1,y=p.length,h;++f<y;)d[(h=p[f]).i]=h.x(m);return d.join("")}}}var zl=Pl(ab,"px, ","px)","deg)"),Rl=Pl(sb,", ",")",")"),lb=1e-12;function Nl(e){return((e=Math.exp(e))+1/e)/2}function cb(e){return((e=Math.exp(e))-1/e)/2}function db(e){return((e=Math.exp(2*e))-1)/(e+1)}var On=(function e(t,n,r){function o(i,a){var s=i[0],l=i[1],c=i[2],u=a[0],d=a[1],p=a[2],m=u-s,f=d-l,y=m*m+f*f,h,b;if(y<lb)b=Math.log(p/c)/t,h=function(N){return[s+N*m,l+N*f,c*Math.exp(t*N*b)]};else{var w=Math.sqrt(y),g=(p*p-c*c+r*y)/(2*c*n*w),x=(p*p-c*c-r*y)/(2*p*n*w),k=Math.log(Math.sqrt(g*g+1)-g),S=Math.log(Math.sqrt(x*x+1)-x);b=(S-k)/t,h=function(N){var C=N*b,M=Nl(k),O=c/(n*w)*(M*db(t*C+k)-cb(k));return[s+O*m,l+O*f,c*M/Nl(t*C+k)]}}return h.duration=Math.abs(b)*1e3*t/Math.SQRT2,h}return o.rho=function(i){var a=Math.max(.001,+i),s=a*a,l=s*s;return e(a,s,l)},o})(Math.SQRT2,2,4);function Tl(e){return function(t,n){var r=e((t=Jo(t)).h,(n=Jo(n)).h),o=qe(t.s,n.s),i=qe(t.l,n.l),a=qe(t.opacity,n.opacity);return function(s){return t.h=r(s),t.s=o(s),t.l=i(s),t.opacity=a(s),t+""}}}var B1=Tl(ji),$1=Tl(qe);function Dl(e){return function(t,n){var r=e((t=er(t)).h,(n=er(n)).h),o=qe(t.c,n.c),i=qe(t.l,n.l),a=qe(t.opacity,n.opacity);return function(s){return t.h=r(s),t.c=o(s),t.l=i(s),t.opacity=a(s),t+""}}}var F1=Dl(ji),W1=Dl(qe);function Al(e){return(function t(n){n=+n;function r(o,i){var a=e((o=nr(o)).h,(i=nr(i)).h),s=qe(o.s,i.s),l=qe(o.l,i.l),c=qe(o.opacity,i.opacity);return function(u){return o.h=a(u),o.s=s(u),o.l=l(Math.pow(u,n)),o.opacity=c(u),o+""}}return r.gamma=t,r})(1)}var V1=Al(ji),U1=Al(qe);var Ln=0,mo=0,po=0,Ll=1e3,ir,fo,ar=0,fn=0,lr=0,go=typeof performance=="object"&&performance.now?performance:Date,Hl=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function cr(){return fn||(Hl(ub),fn=go.now()+lr)}function ub(){fn=0}function sr(){this._call=this._time=this._next=null}sr.prototype=ea.prototype={constructor:sr,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?cr():+n)+(t==null?0:+t),!this._next&&fo!==this&&(fo?fo._next=this:ir=this,fo=this),this._call=e,this._time=n,Ji()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ji())}};function ea(e,t,n){var r=new sr;return r.restart(e,t,n),r}function pb(){cr(),++Ln;for(var e=ir,t;e;)(t=fn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ln}function Ol(){fn=(ar=go.now())+lr,Ln=mo=0;try{pb()}finally{Ln=0,fb(),fn=0}}function mb(){var e=go.now(),t=e-ar;t>Ll&&(lr-=t,ar=e)}function fb(){for(var e,t=ir,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:ir=n);fo=e,Ji(r)}function Ji(e){if(!Ln){mo&&(mo=clearTimeout(mo));var t=e-fn;t>24?(e<1/0&&(mo=setTimeout(Ol,Math.ceil(e-go.now()-lr)+1)),po&&(po=clearInterval(po))):(po||(ar=go.now(),po=setInterval(mb,Ll)),Ln=1,Hl(Ol))}}function ta(e,t,n){var r=new sr;return t=t==null?0:+t,r.restart(o=>{r.stop(),e(o+t)},t,n),r}function $l(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var na=3,q1=(function e(t){t=+t;function n(r){return Math.pow(r,t)}return n.exponent=e,n})(na),Y1=(function e(t){t=+t;function n(r){return 1-Math.pow(1-r,t)}return n.exponent=e,n})(na),K1=(function e(t){t=+t;function n(r){return((r*=2)<=1?Math.pow(r,t):2-Math.pow(2-r,t))/2}return n.exponent=e,n})(na),gb=Math.PI,Z1=gb/2;function dr(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Bl=4/11,j1=6/11,Q1=8/11,J1=3/4,ek=9/11,tk=10/11,nk=15/16,ok=21/22,rk=63/64,ik=1/Bl/Bl;var oa=1.70158,ak=(function e(t){t=+t;function n(r){return(r=+r)*r*(t*(r-1)+r)}return n.overshoot=e,n})(oa),sk=(function e(t){t=+t;function n(r){return--r*r*((r+1)*t+r)+1}return n.overshoot=e,n})(oa),lk=(function e(t){t=+t;function n(r){return((r*=2)<1?r*r*((t+1)*r-t):(r-=2)*r*((t+1)*r+t)+2)/2}return n.overshoot=e,n})(oa),Hn=2*Math.PI,ra=1,ia=.3,ck=(function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Hn);function o(i){return t*dr(- --i)*Math.sin((r-i)/n)}return o.amplitude=function(i){return e(i,n*Hn)},o.period=function(i){return e(t,i)},o})(ra,ia),dk=(function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Hn);function o(i){return 1-t*dr(i=+i)*Math.sin((i+r)/n)}return o.amplitude=function(i){return e(i,n*Hn)},o.period=function(i){return e(t,i)},o})(ra,ia),uk=(function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Hn);function o(i){return((i=i*2-1)<0?t*dr(-i)*Math.sin((r-i)/n):2-t*dr(i)*Math.sin((r+i)/n))/2}return o.amplitude=function(i){return e(i,n*Hn)},o.period=function(i){return e(t,i)},o})(ra,ia);var hb=sn("start","end","cancel","interrupt"),bb=[],Vl=0,Fl=1,aa=2,ur=3,Wl=4,sa=5,pr=6;function mr(e,t,n,r,o,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;yb(e,n,{name:t,index:r,group:o,on:hb,tween:bb,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Vl})}function la(e,t){var n=mt(e,t);if(n.state>Vl)throw new Error("too late; already scheduled");return n}function yt(e,t){var n=mt(e,t);if(n.state>ur)throw new Error("too late; already running");return n}function mt(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function yb(e,t,n){var r=e.__transition,o;r[t]=n,n.timer=ea(i,0,n.time);function i(c){n.state=Fl,n.timer.restart(a,n.delay,n.time),n.delay<=c&&a(c-n.delay)}function a(c){var u,d,p,m;if(n.state!==Fl)return l();for(u in r)if(m=r[u],m.name===n.name){if(m.state===ur)return ta(a);m.state===Wl?(m.state=pr,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete r[u]):+u<t&&(m.state=pr,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete r[u])}if(ta(function(){n.state===ur&&(n.state=Wl,n.timer.restart(s,n.delay,n.time),s(c))}),n.state=aa,n.on.call("start",e,e.__data__,n.index,n.group),n.state===aa){for(n.state=ur,o=new Array(p=n.tween.length),u=0,d=-1;u<p;++u)(m=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(o[++d]=m);o.length=d+1}}function s(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=sa,1),d=-1,p=o.length;++d<p;)o[d].call(e,u);n.state===sa&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=pr,n.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function ho(e,t){var n=e.__transition,r,o,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){i=!1;continue}o=r.state>aa&&r.state<sa,r.state=pr,r.timer.stop(),r.on.call(o?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}i&&delete e.__transition}}function xb(e){return this.each(function(){ho(this,e)})}function wb(e,t){var n,r;return function(){var o=yt(this,e),i=o.tween;if(i!==n){r=n=i;for(var a=0,s=r.length;a<s;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}o.tween=r}}function vb(e,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var i=yt(this,e),a=i.tween;if(a!==r){o=(r=a).slice();for(var s={name:t,value:n},l=0,c=o.length;l<c;++l)if(o[l].name===t){o[l]=s;break}l===c&&o.push(s)}i.tween=o}}function kb(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=mt(this.node(),n).tween,o=0,i=r.length,a;o<i;++o)if((a=r[o]).name===e)return a.value;return null}return this.each((t==null?wb:vb)(n,e,t))}function ca(e,t,n){var r=e._id;return e.each(function(){var o=yt(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return mt(o,r).value[t]}}function Ul(e,t){var n;return(typeof t=="number"?pt:t instanceof Tt?uo:(n=Tt(t))?(t=n,uo):Qi)(e,t)}function Sb(e){return function(){this.removeAttribute(e)}}function Cb(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Nb(e,t,n){var r,o=n+"",i;return function(){var a=this.getAttribute(e);return a===o?null:a===r?i:i=t(r=a,n)}}function Mb(e,t,n){var r,o=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===o?null:a===r?i:i=t(r=a,n)}}function Eb(e,t,n){var r,o,i;return function(){var a,s=n(this),l;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),l=s+"",a===l?null:a===r&&l===o?i:(o=l,i=t(r=a,s)))}}function _b(e,t,n){var r,o,i;return function(){var a,s=n(this),l;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),l=s+"",a===l?null:a===r&&l===o?i:(o=l,i=t(r=a,s)))}}function Ib(e,t){var n=ro(e),r=n==="transform"?Rl:Ul;return this.attrTween(e,typeof t=="function"?(n.local?_b:Eb)(n,r,ca(this,"attr."+e,t)):t==null?(n.local?Cb:Sb)(n):(n.local?Mb:Nb)(n,r,t))}function Pb(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function zb(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Rb(e,t){var n,r;function o(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&zb(e,i)),n}return o._value=t,o}function Tb(e,t){var n,r;function o(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Pb(e,i)),n}return o._value=t,o}function Db(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=ro(e);return this.tween(n,(r.local?Rb:Tb)(r,t))}function Ab(e,t){return function(){la(this,e).delay=+t.apply(this,arguments)}}function Ob(e,t){return t=+t,function(){la(this,e).delay=t}}function Lb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ab:Ob)(t,e)):mt(this.node(),t).delay}function Hb(e,t){return function(){yt(this,e).duration=+t.apply(this,arguments)}}function Bb(e,t){return t=+t,function(){yt(this,e).duration=t}}function $b(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Hb:Bb)(t,e)):mt(this.node(),t).duration}function Fb(e,t){if(typeof t!="function")throw new Error;return function(){yt(this,e).ease=t}}function Wb(e){var t=this._id;return arguments.length?this.each(Fb(t,e)):mt(this.node(),t).ease}function Vb(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;yt(this,e).ease=n}}function Ub(e){if(typeof e!="function")throw new Error;return this.each(Vb(this._id,e))}function Gb(e){typeof e!="function"&&(e=Ti(e));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var i=t[o],a=i.length,s=r[o]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&s.push(l);return new At(r,this._parents,this._name,this._id)}function Xb(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,o=n.length,i=Math.min(r,o),a=new Array(r),s=0;s<i;++s)for(var l=t[s],c=n[s],u=l.length,d=a[s]=new Array(u),p,m=0;m<u;++m)(p=l[m]||c[m])&&(d[m]=p);for(;s<r;++s)a[s]=t[s];return new At(a,this._parents,this._name,this._id)}function qb(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Yb(e,t,n){var r,o,i=qb(t)?la:yt;return function(){var a=i(this,e),s=a.on;s!==r&&(o=(r=s).copy()).on(t,n),a.on=o}}function Kb(e,t){var n=this._id;return arguments.length<2?mt(this.node(),n).on.on(e):this.each(Yb(n,e,t))}function Zb(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function jb(){return this.on("end.remove",Zb(this._id))}function Qb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=qo(e));for(var r=this._groups,o=r.length,i=new Array(o),a=0;a<o;++a)for(var s=r[a],l=s.length,c=i[a]=new Array(l),u,d,p=0;p<l;++p)(u=s[p])&&(d=e.call(u,u.__data__,p,s))&&("__data__"in u&&(d.__data__=u.__data__),c[p]=d,mr(c[p],t,n,p,c,mt(u,n)));return new At(i,this._parents,t,n)}function Jb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Ri(e));for(var r=this._groups,o=r.length,i=[],a=[],s=0;s<o;++s)for(var l=r[s],c=l.length,u,d=0;d<c;++d)if(u=l[d]){for(var p=e.call(u,u.__data__,d,l),m,f=mt(u,n),y=0,h=p.length;y<h;++y)(m=p[y])&&mr(m,t,n,y,p,f);i.push(p),a.push(u)}return new At(i,a,t,n)}var ey=cn.prototype.constructor;function ty(){return new ey(this._groups,this._parents)}function ny(e,t){var n,r,o;return function(){var i=ln(this,e),a=(this.style.removeProperty(e),ln(this,e));return i===a?null:i===n&&a===r?o:o=t(n=i,r=a)}}function Gl(e){return function(){this.style.removeProperty(e)}}function oy(e,t,n){var r,o=n+"",i;return function(){var a=ln(this,e);return a===o?null:a===r?i:i=t(r=a,n)}}function ry(e,t,n){var r,o,i;return function(){var a=ln(this,e),s=n(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(e),ln(this,e))),a===l?null:a===r&&l===o?i:(o=l,i=t(r=a,s))}}function iy(e,t){var n,r,o,i="style."+t,a="end."+i,s;return function(){var l=yt(this,e),c=l.on,u=l.value[i]==null?s||(s=Gl(t)):void 0;(c!==n||o!==u)&&(r=(n=c).copy()).on(a,o=u),l.on=r}}function ay(e,t,n){var r=(e+="")=="transform"?zl:Ul;return t==null?this.styleTween(e,ny(e,r)).on("end.style."+e,Gl(e)):typeof t=="function"?this.styleTween(e,ry(e,r,ca(this,"style."+e,t))).each(iy(this._id,e)):this.styleTween(e,oy(e,r,t),n).on("end.style."+e,null)}function sy(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function ly(e,t,n){var r,o;function i(){var a=t.apply(this,arguments);return a!==o&&(r=(o=a)&&sy(e,a,n)),r}return i._value=t,i}function cy(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,ly(e,t,n??""))}function dy(e){return function(){this.textContent=e}}function uy(e){return function(){var t=e(this);this.textContent=t??""}}function py(e){return this.tween("text",typeof e=="function"?uy(ca(this,"text",e)):dy(e==null?"":e+""))}function my(e){return function(t){this.textContent=e.call(this,t)}}function fy(e){var t,n;function r(){var o=e.apply(this,arguments);return o!==n&&(t=(n=o)&&my(o)),t}return r._value=e,r}function gy(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,fy(e))}function hy(){for(var e=this._name,t=this._id,n=Xl(),r=this._groups,o=r.length,i=0;i<o;++i)for(var a=r[i],s=a.length,l,c=0;c<s;++c)if(l=a[c]){var u=mt(l,t);mr(l,e,n,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new At(r,this._parents,e,n)}function by(){var e,t,n=this,r=n._id,o=n.size();return new Promise(function(i,a){var s={value:a},l={value:function(){--o===0&&i()}};n.each(function(){var c=yt(this,r),u=c.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(l)),c.on=t}),o===0&&i()})}var yy=0;function At(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function xy(e){return cn().transition(e)}function Xl(){return++yy}var Dt=cn.prototype;At.prototype=xy.prototype={constructor:At,select:Qb,selectAll:Jb,selectChild:Dt.selectChild,selectChildren:Dt.selectChildren,filter:Gb,merge:Xb,selection:ty,transition:hy,call:Dt.call,nodes:Dt.nodes,node:Dt.node,size:Dt.size,empty:Dt.empty,each:Dt.each,on:Kb,attr:Ib,attrTween:Db,style:ay,styleTween:cy,text:py,textTween:gy,remove:jb,tween:kb,delay:Lb,duration:$b,ease:Wb,easeVarying:Ub,end:by,[Symbol.iterator]:Dt[Symbol.iterator]};var wy={time:null,delay:0,duration:250,ease:$l};function vy(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function ky(e){var t,n;e instanceof At?(t=e._id,e=e._name):(t=Xl(),(n=wy).time=cr(),e=e==null?null:e+"");for(var r=this._groups,o=r.length,i=0;i<o;++i)for(var a=r[i],s=a.length,l,c=0;c<s;++c)(l=a[c])&&mr(l,e,t,c,a,n||vy(l,t));return new At(r,this._parents,e,t)}cn.prototype.interrupt=xb;cn.prototype.transition=ky;var fr=e=>()=>e;function Sy(e,{sourceEvent:t,target:n,transform:r,dispatch:o}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:o}})}function Ot(e,t,n){this.k=e,this.x=t,this.y=n}Ot.prototype={constructor:Ot,scale:function(e){return e===1?this:new Ot(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ot(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var yo=new Ot(1,0,0);ua.prototype=Ot.prototype;function ua(e){for(;!e.__zoom;)if(!(e=e.parentNode))return yo;return e.__zoom}function da(e){e.stopImmediatePropagation()}function bo(e){e.preventDefault(),e.stopImmediatePropagation()}function Cy(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Ny(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function ql(){return this.__zoom||yo}function My(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Ey(){return navigator.maxTouchPoints||"ontouchstart"in this}function _y(e,t,n){var r=e.invertX(t[0][0])-n[0][0],o=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(o>r?(r+o)/2:Math.min(0,r)||Math.max(0,o),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function pa(){var e=Cy,t=Ny,n=_y,r=My,o=Ey,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,l=On,c=sn("start","zoom","end"),u,d,p,m=500,f=150,y=0,h=10;function b(v){v.property("__zoom",ql).on("wheel.zoom",C,{passive:!1}).on("mousedown.zoom",M).on("dblclick.zoom",O).filter(o).on("touchstart.zoom",D).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",T).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}b.transform=function(v,E,z,I){var _=v.selection?v.selection():v;_.property("__zoom",ql),v!==_?k(v,E,z,I):_.interrupt().each(function(){S(this,arguments).event(I).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},b.scaleBy=function(v,E,z,I){b.scaleTo(v,function(){var _=this.__zoom.k,R=typeof E=="function"?E.apply(this,arguments):E;return _*R},z,I)},b.scaleTo=function(v,E,z,I){b.transform(v,function(){var _=t.apply(this,arguments),R=this.__zoom,V=z==null?x(_):typeof z=="function"?z.apply(this,arguments):z,W=R.invert(V),F=typeof E=="function"?E.apply(this,arguments):E;return n(g(w(R,F),V,W),_,a)},z,I)},b.translateBy=function(v,E,z,I){b.transform(v,function(){return n(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof z=="function"?z.apply(this,arguments):z),t.apply(this,arguments),a)},null,I)},b.translateTo=function(v,E,z,I,_){b.transform(v,function(){var R=t.apply(this,arguments),V=this.__zoom,W=I==null?x(R):typeof I=="function"?I.apply(this,arguments):I;return n(yo.translate(W[0],W[1]).scale(V.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof z=="function"?-z.apply(this,arguments):-z),R,a)},I,_)};function w(v,E){return E=Math.max(i[0],Math.min(i[1],E)),E===v.k?v:new Ot(E,v.x,v.y)}function g(v,E,z){var I=E[0]-z[0]*v.k,_=E[1]-z[1]*v.k;return I===v.x&&_===v.y?v:new Ot(v.k,I,_)}function x(v){return[(+v[0][0]+ +v[1][0])/2,(+v[0][1]+ +v[1][1])/2]}function k(v,E,z,I){v.on("start.zoom",function(){S(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(I).end()}).tween("zoom",function(){var _=this,R=arguments,V=S(_,R).event(I),W=t.apply(_,R),F=z==null?x(W):typeof z=="function"?z.apply(_,R):z,$=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),Y=_.__zoom,U=typeof E=="function"?E.apply(_,R):E,ee=l(Y.invert(F).concat($/Y.k),U.invert(F).concat($/U.k));return function(ne){if(ne===1)ne=U;else{var P=ee(ne),X=$/P[2];ne=new Ot(X,F[0]-P[0]*X,F[1]-P[1]*X)}V.zoom(null,ne)}})}function S(v,E,z){return!z&&v.__zooming||new N(v,E)}function N(v,E){this.that=v,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(v,E),this.taps=0}N.prototype={event:function(v){return v&&(this.sourceEvent=v),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(v,E){return this.mouse&&v!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&v!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&v!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(v){var E=$e(this.that).datum();c.call(v,this.that,new Sy(v,{sourceEvent:this.sourceEvent,target:b,transform:this.that.__zoom,dispatch:c}),E)}};function C(v,...E){if(!e.apply(this,arguments))return;var z=S(this,E).event(v),I=this.__zoom,_=Math.max(i[0],Math.min(i[1],I.k*Math.pow(2,r.apply(this,arguments)))),R=Xe(v);if(z.wheel)(z.mouse[0][0]!==R[0]||z.mouse[0][1]!==R[1])&&(z.mouse[1]=I.invert(z.mouse[0]=R)),clearTimeout(z.wheel);else{if(I.k===_)return;z.mouse=[R,I.invert(R)],ho(this),z.start()}bo(v),z.wheel=setTimeout(V,f),z.zoom("mouse",n(g(w(I,_),z.mouse[0],z.mouse[1]),z.extent,a));function V(){z.wheel=null,z.end()}}function M(v,...E){if(p||!e.apply(this,arguments))return;var z=v.currentTarget,I=S(this,E,!0).event(v),_=$e(v.view).on("mousemove.zoom",F,!0).on("mouseup.zoom",$,!0),R=Xe(v,z),V=v.clientX,W=v.clientY;Li(v.view),da(v),I.mouse=[R,this.__zoom.invert(R)],ho(this),I.start();function F(Y){if(bo(Y),!I.moved){var U=Y.clientX-V,ee=Y.clientY-W;I.moved=U*U+ee*ee>y}I.event(Y).zoom("mouse",n(g(I.that.__zoom,I.mouse[0]=Xe(Y,z),I.mouse[1]),I.extent,a))}function $(Y){_.on("mousemove.zoom mouseup.zoom",null),Hi(Y.view,I.moved),bo(Y),I.event(Y).end()}}function O(v,...E){if(e.apply(this,arguments)){var z=this.__zoom,I=Xe(v.changedTouches?v.changedTouches[0]:v,this),_=z.invert(I),R=z.k*(v.shiftKey?.5:2),V=n(g(w(z,R),I,_),t.apply(this,E),a);bo(v),s>0?$e(this).transition().duration(s).call(k,V,I,v):$e(this).call(b.transform,V,I,v)}}function D(v,...E){if(e.apply(this,arguments)){var z=v.touches,I=z.length,_=S(this,E,v.changedTouches.length===I).event(v),R,V,W,F;for(da(v),V=0;V<I;++V)W=z[V],F=Xe(W,this),F=[F,this.__zoom.invert(F),W.identifier],_.touch0?!_.touch1&&_.touch0[2]!==F[2]&&(_.touch1=F,_.taps=0):(_.touch0=F,R=!0,_.taps=1+!!u);u&&(u=clearTimeout(u)),R&&(_.taps<2&&(d=F[0],u=setTimeout(function(){u=null},m)),ho(this),_.start())}}function L(v,...E){if(this.__zooming){var z=S(this,E).event(v),I=v.changedTouches,_=I.length,R,V,W,F;for(bo(v),R=0;R<_;++R)V=I[R],W=Xe(V,this),z.touch0&&z.touch0[2]===V.identifier?z.touch0[0]=W:z.touch1&&z.touch1[2]===V.identifier&&(z.touch1[0]=W);if(V=z.that.__zoom,z.touch1){var $=z.touch0[0],Y=z.touch0[1],U=z.touch1[0],ee=z.touch1[1],ne=(ne=U[0]-$[0])*ne+(ne=U[1]-$[1])*ne,P=(P=ee[0]-Y[0])*P+(P=ee[1]-Y[1])*P;V=w(V,Math.sqrt(ne/P)),W=[($[0]+U[0])/2,($[1]+U[1])/2],F=[(Y[0]+ee[0])/2,(Y[1]+ee[1])/2]}else if(z.touch0)W=z.touch0[0],F=z.touch0[1];else return;z.zoom("touch",n(g(V,W,F),z.extent,a))}}function T(v,...E){if(this.__zooming){var z=S(this,E).event(v),I=v.changedTouches,_=I.length,R,V;for(da(v),p&&clearTimeout(p),p=setTimeout(function(){p=null},m),R=0;R<_;++R)V=I[R],z.touch0&&z.touch0[2]===V.identifier?delete z.touch0:z.touch1&&z.touch1[2]===V.identifier&&delete z.touch1;if(z.touch1&&!z.touch0&&(z.touch0=z.touch1,delete z.touch1),z.touch0)z.touch0[1]=this.__zoom.invert(z.touch0[0]);else if(z.end(),z.taps===2&&(V=Xe(V,this),Math.hypot(d[0]-V[0],d[1]-V[1])<h)){var W=$e(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return b.wheelDelta=function(v){return arguments.length?(r=typeof v=="function"?v:fr(+v),b):r},b.filter=function(v){return arguments.length?(e=typeof v=="function"?v:fr(!!v),b):e},b.touchable=function(v){return arguments.length?(o=typeof v=="function"?v:fr(!!v),b):o},b.extent=function(v){return arguments.length?(t=typeof v=="function"?v:fr([[+v[0][0],+v[0][1]],[+v[1][0],+v[1][1]]]),b):t},b.scaleExtent=function(v){return arguments.length?(i[0]=+v[0],i[1]=+v[1],b):[i[0],i[1]]},b.translateExtent=function(v){return arguments.length?(a[0][0]=+v[0][0],a[1][0]=+v[1][0],a[0][1]=+v[0][1],a[1][1]=+v[1][1],b):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},b.constrain=function(v){return arguments.length?(n=v,b):n},b.duration=function(v){return arguments.length?(s=+v,b):s},b.interpolate=function(v){return arguments.length?(l=v,b):l},b.on=function(){var v=c.on.apply(c,arguments);return v===c?b:v},b.clickDistance=function(v){return arguments.length?(y=(v=+v)*v,b):Math.sqrt(y)},b.tapDistance=function(v){return arguments.length?(h=+v,b):h},b}var tt={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:r})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:r}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Vn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],ba=["Enter"," ","Escape"],ya={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Xt;(function(e){e.Strict="strict",e.Loose="loose"})(Xt||(Xt={}));var Lt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Lt||(Lt={}));var gn;(function(e){e.Partial="partial",e.Full="full"})(gn||(gn={}));var xa={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},xt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(xt||(xt={}));var Fn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Fn||(Fn={}));var ie;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ie||(ie={}));var Yl={[ie.Left]:ie.Right,[ie.Right]:ie.Left,[ie.Top]:ie.Bottom,[ie.Bottom]:ie.Top};function wa(e){return e===null?null:e?"valid":"invalid"}var va=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,sc=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),ka=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var wo=(e,t=[0,0])=>{let{width:n,height:r}=ft(e),o=e.origin??t,i=n*o[0],a=r*o[1];return{x:e.position.x-i,y:e.position.y-a}},Sa=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((r,o)=>{let i=typeof o=="string",a=!t.nodeLookup&&!i?o:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(o):ka(o)?o:t.nodeLookup.get(o.id));let s=a?br(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return wr(r,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return vr(n)},Un=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},r=!1;return e.forEach(o=>{(t.filter===void 0||t.filter(o))&&(n=wr(n,br(o)),r=!0)}),r?vr(n):{x:0,y:0,width:0,height:0}},yr=(e,t,[n,r,o]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/o,l=(t.y-r)/o,c=t.width/o,u=t.height/o,d=[];for(let p of e.values()){let{measured:m,selectable:f=!0,hidden:y=!1}=p;if(a&&!f||y)continue;let h=m.width??p.width??p.initialWidth??0,b=m.height??p.height??p.initialHeight??0,{x:w,y:g}=p.internals.positionAbsolute,x=pc(s,l,c,u,w,g,h,b),k=h*b,S=i&&x>0;(!p.internals.handleBounds||S||x>=k||p.dragging)&&d.push(p)}return d},lc=(e,t)=>{let n=new Set;return e.forEach(r=>{n.add(r.id)}),t.filter(r=>n.has(r.source)||n.has(r.target))};function Iy(e,t){let n=new Map,r=t?.nodes?new Set(t.nodes.map(o=>o.id)):null;return e.forEach(o=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=ft(o);i=a>0&&s>0}else i=!!(o.measured.width&&o.measured.height&&!o.hidden);i&&(!r||r.has(o.id))&&n.set(o.id,o)}),n}async function cc({nodes:e,width:t,height:n,panZoom:r,minZoom:o,maxZoom:i},a){if(e.size===0)return!0;let s=Iy(e,a),l=Un(s),c=ko(l,t,n,a?.minZoom??o,a?.maxZoom??i,a?.padding??.1);return await r.setViewport(c,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function Ca({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:r=[0,0],nodeExtent:o,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:l,y:c}=s?s.internals.positionAbsolute:{x:0,y:0},u=a.origin??r,d=a.extent||o;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",tt.error005());else{let m=s.measured.width,f=s.measured.height;m&&f&&(d=[[l,c],[l+m,c+f]])}else s&&yn(a.extent)&&(d=[[a.extent[0][0]+l,a.extent[0][1]+c],[a.extent[1][0]+l,a.extent[1][1]+c]]);let p=yn(d)?hn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",tt.error015()),{position:{x:p.x-l+(a.measured.width??0)*u[0],y:p.y-c+(a.measured.height??0)*u[1]},positionAbsolute:p}}async function dc({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:r,onBeforeDelete:o}){let i=new Set(e.map(p=>p.id)),a=[];for(let p of n){if(p.deletable===!1)continue;let m=i.has(p.id),f=!m&&p.parentId&&a.find(y=>y.id===p.parentId);(m||f)&&a.push(p)}let s=new Set(t.map(p=>p.id)),l=r.filter(p=>p.deletable!==!1),u=lc(a,l);for(let p of l)s.has(p.id)&&!u.find(f=>f.id===p.id)&&u.push(p);if(!o)return{edges:u,nodes:a};let d=await o({nodes:a,edges:u});return typeof d=="boolean"?d?{edges:u,nodes:a}:{edges:[],nodes:[]}:d}var Wn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),hn=(e={x:0,y:0},t,n)=>({x:Wn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Wn(e.y,t[0][1],t[1][1]-(n?.height??0))});function uc(e,t,n){let{width:r,height:o}=ft(n),{x:i,y:a}=n.internals.positionAbsolute;return hn(e,[[i,a],[i+r,a+o]],t)}var Kl=(e,t,n)=>e<t?Wn(Math.abs(e-t),1,t)/t:e>n?-Wn(Math.abs(e-n),1,t)/t:0,xr=(e,t,n=15,r=40)=>{let o=Kl(e.x,r,t.width-r)*n,i=Kl(e.y,r,t.height-r)*n;return[o,i]},wr=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),ha=({x:e,y:t,width:n,height:r})=>({x:e,y:t,x2:e+n,y2:t+r}),vr=({x:e,y:t,x2:n,y2:r})=>({x:e,y:t,width:n-e,height:r-t}),Gn=(e,t=[0,0])=>{let{x:n,y:r}=ka(e)?e.internals.positionAbsolute:wo(e,t);return{x:n,y:r,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},br=(e,t=[0,0])=>{let{x:n,y:r}=ka(e)?e.internals.positionAbsolute:wo(e,t);return{x:n,y:r,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:r+(e.measured?.height??e.height??e.initialHeight??0)}},Na=(e,t)=>vr(wr(ha(e),ha(t))),pc=(e,t,n,r,o,i,a,s)=>{let l=Math.max(0,Math.min(e+n,o+a)-Math.max(e,o)),c=Math.max(0,Math.min(t+r,i+s)-Math.max(t,i));return Math.ceil(l*c)},vo=(e,t)=>pc(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Ma=e=>ot(e.width)&&ot(e.height)&&ot(e.x)&&ot(e.y),ot=e=>!isNaN(e)&&isFinite(e),Ea=(e,t)=>(n,r)=>{},Xn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),qn=({x:e,y:t},[n,r,o],i=!1,a=[1,1])=>{let s={x:(e-n)/o,y:(t-r)/o};return i?Xn(s,a):s},bn=({x:e,y:t},[n,r,o])=>({x:e*o+n,y:t*o+r});function Bn(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Py(e,t,n){if(typeof e=="string"||typeof e=="number"){let r=Bn(e,n),o=Bn(e,t);return{top:r,right:o,bottom:r,left:o,x:o*2,y:r*2}}if(typeof e=="object"){let r=Bn(e.top??e.y??0,n),o=Bn(e.bottom??e.y??0,n),i=Bn(e.left??e.x??0,t),a=Bn(e.right??e.x??0,t);return{top:r,right:a,bottom:o,left:i,x:i+a,y:r+o}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function zy(e,t,n,r,o,i){let{x:a,y:s}=bn(e,[t,n,r]),{x:l,y:c}=bn({x:e.x+e.width,y:e.y+e.height},[t,n,r]),u=o-l,d=i-c;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(u),bottom:Math.floor(d)}}var ko=(e,t,n,r,o,i)=>{let a=Py(i,t,n),s=(t-a.x)/e.width,l=(n-a.y)/e.height,c=Math.min(s,l),u=Wn(c,r,o),d=e.x+e.width/2,p=e.y+e.height/2,m=t/2-d*u,f=n/2-p*u,y=zy(e,m,f,u,t,n),h={left:Math.min(y.left-a.left,0),top:Math.min(y.top-a.top,0),right:Math.min(y.right-a.right,0),bottom:Math.min(y.bottom-a.bottom,0)};return{x:m-h.left+h.right,y:f-h.top+h.bottom,zoom:u}},Yn=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function yn(e){return e!=null&&e!=="parent"}function ft(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function _a(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Ia(e,t={width:0,height:0},n,r,o){let i={...e},a=r.get(n);if(a){let s=a.origin||o;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function Pa(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function mc(){let e,t;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}function fc(e){return{...ya,...e||{}}}function xo(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:r,containerBounds:o}){let{x:i,y:a}=rt(e),s=qn({x:i-(o?.left??0),y:a-(o?.top??0)},r),{x:l,y:c}=n?Xn(s,t):s;return{xSnapped:l,ySnapped:c,...s}}var kr=e=>({width:e.offsetWidth,height:e.offsetHeight}),za=e=>e?.getRootNode?.()||window?.document,Ry=["INPUT","SELECT","TEXTAREA"];function Ra(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Ry.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Ta=e=>"clientX"in e,rt=(e,t)=>{let n=Ta(e),r=n?e.clientX:e.touches?.[0].clientX,o=n?e.clientY:e.touches?.[0].clientY;return{x:r-(t?.left??0),y:o-(t?.top??0)}},Zl=(e,t,n,r,o)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:o,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/r,y:(s.top-n.top)/r,...kr(a)}})};function Sr({sourceX:e,sourceY:t,targetX:n,targetY:r,sourceControlX:o,sourceControlY:i,targetControlX:a,targetControlY:s}){let l=e*.125+o*.375+a*.375+n*.125,c=t*.125+i*.375+s*.375+r*.125,u=Math.abs(l-e),d=Math.abs(c-t);return[l,c,u,d]}function gr(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function jl({pos:e,x1:t,y1:n,x2:r,y2:o,c:i}){switch(e){case ie.Left:return[t-gr(t-r,i),n];case ie.Right:return[t+gr(r-t,i),n];case ie.Top:return[t,n-gr(n-o,i)];case ie.Bottom:return[t,n+gr(o-n,i)]}}function Cr({sourceX:e,sourceY:t,sourcePosition:n=ie.Bottom,targetX:r,targetY:o,targetPosition:i=ie.Top,curvature:a=.25}){let[s,l]=jl({pos:n,x1:e,y1:t,x2:r,y2:o,c:a}),[c,u]=jl({pos:i,x1:r,y1:o,x2:e,y2:t,c:a}),[d,p,m,f]=Sr({sourceX:e,sourceY:t,targetX:r,targetY:o,sourceControlX:s,sourceControlY:l,targetControlX:c,targetControlY:u});return[`M${e},${t} C${s},${l} ${c},${u} ${r},${o}`,d,p,m,f]}function Da({sourceX:e,sourceY:t,targetX:n,targetY:r}){let o=Math.abs(n-e)/2,i=n<e?n+o:n-o,a=Math.abs(r-t)/2,s=r<t?r+a:r-a;return[i,s,o,a]}function gc({sourceNode:e,targetNode:t,selected:n=!1,zIndex:r=0,elevateOnSelect:o=!1,zIndexMode:i="basic"}){if(i==="manual")return r;let a=o&&n?r+1e3:r,s=Math.max(e.parentId||o&&e.selected?e.internals.z:0,t.parentId||o&&t.selected?t.internals.z:0);return a+s}function hc({sourceNode:e,targetNode:t,width:n,height:r,transform:o}){let i=wr(br(e),br(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-o[0]/o[2],y:-o[1]/o[2],width:n/o[2],height:r/o[2]};return vo(a,vr(i))>0}var Ty=({source:e,sourceHandle:t,target:n,targetHandle:r})=>`xy-edge__${e}${t||""}-${n}${r||""}`,Dy=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),bc=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",tt.error006()),t;let r=n.getEdgeId||Ty,o;return va(e)?o={...e}:o={...e,id:r(e)},Dy(o,t)?t:(o.sourceHandle===null&&delete o.sourceHandle,o.targetHandle===null&&delete o.targetHandle,t.concat(o))};function Nr({sourceX:e,sourceY:t,targetX:n,targetY:r}){let[o,i,a,s]=Da({sourceX:e,sourceY:t,targetX:n,targetY:r});return[`M ${e},${t}L ${n},${r}`,o,i,a,s]}var Ql={[ie.Left]:{x:-1,y:0},[ie.Right]:{x:1,y:0},[ie.Top]:{x:0,y:-1},[ie.Bottom]:{x:0,y:1}},Ay=({source:e,sourcePosition:t=ie.Bottom,target:n})=>t===ie.Left||t===ie.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Jl=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Oy({source:e,sourcePosition:t=ie.Bottom,target:n,targetPosition:r=ie.Top,center:o,offset:i,stepPosition:a}){let s=Ql[t],l=Ql[r],c={x:e.x+s.x*i,y:e.y+s.y*i},u={x:n.x+l.x*i,y:n.y+l.y*i},d=Ay({source:c,sourcePosition:t,target:u}),p=d.x!==0?"x":"y",m=d[p],f=[],y,h,b={x:0,y:0},w={x:0,y:0},[,,g,x]=Da({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[p]*l[p]===-1){p==="x"?(y=o.x??c.x+(u.x-c.x)*a,h=o.y??(c.y+u.y)/2):(y=o.x??(c.x+u.x)/2,h=o.y??c.y+(u.y-c.y)*a);let C=[{x:y,y:c.y},{x:y,y:u.y}],M=[{x:c.x,y:h},{x:u.x,y:h}];s[p]===m?f=p==="x"?C:M:f=p==="x"?M:C}else{let C=[{x:c.x,y:u.y}],M=[{x:u.x,y:c.y}];if(p==="x"?f=s.x===m?M:C:f=s.y===m?C:M,t===r){let v=Math.abs(e[p]-n[p]);if(v<=i){let E=Math.min(i-1,i-v);s[p]===m?b[p]=(c[p]>e[p]?-1:1)*E:w[p]=(u[p]>n[p]?-1:1)*E}}if(t!==r){let v=p==="x"?"y":"x",E=s[p]===l[v],z=c[v]>u[v],I=c[v]<u[v];(s[p]===1&&(!E&&z||E&&I)||s[p]!==1&&(!E&&I||E&&z))&&(f=p==="x"?C:M)}let O={x:c.x+b.x,y:c.y+b.y},D={x:u.x+w.x,y:u.y+w.y},L=Math.max(Math.abs(O.x-f[0].x),Math.abs(D.x-f[0].x)),T=Math.max(Math.abs(O.y-f[0].y),Math.abs(D.y-f[0].y));L>=T?(y=(O.x+D.x)/2,h=f[0].y):(y=f[0].x,h=(O.y+D.y)/2)}let k={x:c.x+b.x,y:c.y+b.y},S={x:u.x+w.x,y:u.y+w.y};return[[e,...k.x!==f[0].x||k.y!==f[0].y?[k]:[],...f,...S.x!==f[f.length-1].x||S.y!==f[f.length-1].y?[S]:[],n],y,h,g,x]}function Ly(e,t,n,r){let o=Math.min(Jl(e,t)/2,Jl(t,n)/2,r),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let c=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+o*c},${a}Q ${i},${a} ${i},${a+o*u}`}let s=e.x<n.x?1:-1,l=e.y<n.y?-1:1;return`L ${i},${a+o*l}Q ${i},${a} ${i+o*s},${a}`}function So({sourceX:e,sourceY:t,sourcePosition:n=ie.Bottom,targetX:r,targetY:o,targetPosition:i=ie.Top,borderRadius:a=5,centerX:s,centerY:l,offset:c=20,stepPosition:u=.5}){let[d,p,m,f,y]=Oy({source:{x:e,y:t},sourcePosition:n,target:{x:r,y:o},targetPosition:i,center:{x:s,y:l},offset:c,stepPosition:u}),h=`M${d[0].x} ${d[0].y}`;for(let b=1;b<d.length-1;b++)h+=Ly(d[b-1],d[b],d[b+1],a);return h+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[h,p,m,f,y]}function ec(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function yc(e){let{sourceNode:t,targetNode:n}=e;if(!ec(t)||!ec(n))return null;let r=t.internals.handleBounds||tc(t.handles),o=n.internals.handleBounds||tc(n.handles),i=nc(r?.source??[],e.sourceHandle),a=nc(e.connectionMode===Xt.Strict?o?.target??[]:(o?.target??[]).concat(o?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",tt.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||ie.Bottom,l=a?.position||ie.Top,c=qt(t,i,s),u=qt(n,a,l);return{sourceX:c.x,sourceY:c.y,targetX:u.x,targetY:u.y,sourcePosition:s,targetPosition:l}}function tc(e){if(!e)return null;let t=[],n=[];for(let r of e)r.width=r.width??1,r.height=r.height??1,r.type==="source"?t.push(r):r.type==="target"&&n.push(r);return{source:t,target:n}}function qt(e,t,n=ie.Left,r=!1){let o=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??ft(e);if(r)return{x:o+a/2,y:i+s/2};switch(t?.position??n){case ie.Top:return{x:o+a/2,y:i};case ie.Right:return{x:o+a,y:i+s/2};case ie.Bottom:return{x:o+a/2,y:i+s};case ie.Left:return{x:o,y:i+s/2}}}function nc(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function Mr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`:""}function xc(e,{id:t,defaultColor:n,defaultMarkerStart:r,defaultMarkerEnd:o}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||r,s.markerEnd||o].forEach(l=>{if(l&&typeof l=="object"){let c=Mr(l,t);i.has(c)||(a.push({id:c,color:l.color||n,...l}),i.add(c))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var wc=1e3,Hy=10,Aa={nodeOrigin:[0,0],nodeExtent:Vn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},By={...Aa,checkEquality:!0};function Oa(e,t){let n={...e};for(let r in t)t[r]!==void 0&&(n[r]=t[r]);return n}function vc(e,t,n){let r=Oa(Aa,n);for(let o of e.values())if(o.parentId)Ha(o,e,t,r);else{let i=wo(o,r.nodeOrigin),a=yn(o.extent)?o.extent:r.nodeExtent,s=hn(i,a,ft(o));o.internals.positionAbsolute=s}}function $y(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],r=[];for(let o of e.handles){let i={id:o.id,width:o.width??1,height:o.height??1,nodeId:e.id,x:o.x,y:o.y,position:o.position,type:o.type};o.type==="source"?n.push(i):o.type==="target"&&r.push(i)}return{source:n,target:r}}function La(e){return e==="manual"}function Er(e,t,n,r={}){let o=Oa(By,r),i={i:0},a=new Map(t),s=o?.elevateNodesOnSelect&&!La(o.zIndexMode)?wc:0,l=e.length>0,c=!1;t.clear(),n.clear();for(let u of e){let d=a.get(u.id);if(o.checkEquality&&u===d?.internals.userNode)t.set(u.id,d);else{let p=wo(u,o.nodeOrigin),m=yn(u.extent)?u.extent:o.nodeExtent,f=hn(p,m,ft(u));d={...o.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:f,handleBounds:$y(u,d),z:kc(u,s,o.zIndexMode),userNode:u}},t.set(u.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(l=!1),u.parentId&&Ha(d,t,n,r,i),c||=u.selected??!1}return{nodesInitialized:l,hasSelectedNodes:c}}function Fy(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Ha(e,t,n,r,o){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:l}=Oa(Aa,r),c=e.parentId,u=t.get(c);if(!u){console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Fy(e,n),o&&!u.parentId&&u.internals.rootParentIndex===void 0&&l==="auto"&&(u.internals.rootParentIndex=++o.i,u.internals.z=u.internals.z+o.i*Hy),o&&u.internals.rootParentIndex!==void 0&&(o.i=u.internals.rootParentIndex);let d=i&&!La(l)?wc:0,{x:p,y:m,z:f}=Wy(e,u,a,s,d,l),{positionAbsolute:y}=e.internals,h=p!==y.x||m!==y.y;(h||f!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:h?{x:p,y:m}:y,z:f}})}function kc(e,t,n){let r=ot(e.zIndex)?e.zIndex:0;return La(n)?r:r+(e.selected?t:0)}function Wy(e,t,n,r,o,i){let{x:a,y:s}=t.internals.positionAbsolute,l=ft(e),c=wo(e,n),u=yn(e.extent)?hn(c,e.extent,l):c,d=hn({x:a+u.x,y:s+u.y},r,l);e.extent==="parent"&&(d=uc(d,l,t));let p=kc(e,o,i),m=t.internals.z??0;return{x:d.x,y:d.y,z:m>=p?m+1:p}}function _r(e,t,n,r=[0,0]){let o=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let l=i.get(a.parentId)?.expandedRect??Gn(s),c=Na(l,a.rect);i.set(a.parentId,{expandedRect:c,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},l)=>{let c=s.internals.positionAbsolute,u=ft(s),d=s.origin??r,p=a.x<c.x?Math.round(Math.abs(c.x-a.x)):0,m=a.y<c.y?Math.round(Math.abs(c.y-a.y)):0,f=Math.max(u.width,Math.round(a.width)),y=Math.max(u.height,Math.round(a.height)),h=(f-u.width)*d[0],b=(y-u.height)*d[1];(p>0||m>0||h||b)&&(o.push({id:l,type:"position",position:{x:s.position.x-p+h,y:s.position.y-m+b}}),n.get(l)?.forEach(w=>{e.some(g=>g.id===w.id)||o.push({id:w.id,type:"position",position:{x:w.position.x+p,y:w.position.y+m}})})),(u.width<a.width||u.height<a.height||p||m)&&o.push({id:l,type:"dimensions",setAttributes:!0,dimensions:{width:f+(p?d[0]*p-h:0),height:y+(m?d[1]*m-b:0)}})}),o}function Sc(e,t,n,r,o,i,a){let s=r?.querySelector(".xyflow__viewport"),l=!1;if(!s)return{changes:[],updatedInternals:l};let c=[],u=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(u.transform),p=[];for(let m of e.values()){let f=t.get(m.id);if(!f)continue;if(f.hidden){t.set(f.id,{...f,internals:{...f.internals,handleBounds:void 0}}),l=!0;continue}let y=kr(m.nodeElement),h=f.measured.width!==y.width||f.measured.height!==y.height;if(!!(y.width&&y.height&&(h||!f.internals.handleBounds||m.force))){let w=m.nodeElement.getBoundingClientRect(),g=yn(f.extent)?f.extent:i,{positionAbsolute:x}=f.internals;if(f.parentId&&f.extent==="parent"){let S=t.get(f.parentId);S&&(x=uc(x,y,S))}else g&&(x=hn(x,g,y));let k={...f,measured:y,internals:{...f.internals,positionAbsolute:x,handleBounds:{source:Zl("source",m.nodeElement,w,d,f.id),target:Zl("target",m.nodeElement,w,d,f.id)}}};t.set(f.id,k),f.parentId&&Ha(k,t,n,{nodeOrigin:o,zIndexMode:a}),l=!0,h&&(c.push({id:f.id,type:"dimensions",dimensions:y}),f.expandParent&&f.parentId&&p.push({id:f.id,parentId:f.parentId,rect:Gn(k,o)}))}}if(p.length>0){let m=_r(p,t,n,o);c.push(...m)}return{changes:c,updatedInternals:l}}async function Cc({delta:e,panZoom:t,transform:n,translateExtent:r,width:o,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[o,i]],r);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function oc(e,t,n,r,o,i){let a=o,s=r.get(a)||new Map;r.set(a,s.set(n,t)),a=`${o}-${e}`;let l=r.get(a)||new Map;if(r.set(a,l.set(n,t)),i){a=`${o}-${e}-${i}`;let c=r.get(a)||new Map;r.set(a,c.set(n,t))}}function Ba(e,t,n){e.clear(),t.clear();for(let r of n){let{source:o,target:i,sourceHandle:a=null,targetHandle:s=null}=r,l={edgeId:r.id,source:o,target:i,sourceHandle:a,targetHandle:s},c=`${o}-${a}--${i}-${s}`,u=`${i}-${s}--${o}-${a}`;oc("source",l,u,e,o,a),oc("target",l,c,e,i,s),t.set(r.id,r)}}function Nc(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Nc(n,t):!1}function rc(e,t,n){let r=e;do{if(r?.matches?.(t))return!0;if(r===n)return!1;r=r?.parentElement}while(r);return!1}function Vy(e,t,n,r){let o=new Map;for(let[i,a]of e)if((a.selected||a.id===r)&&(!a.parentId||!Nc(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&o.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return o}function ma({nodeId:e,dragItems:t,nodeLookup:n,dragging:r=!0}){let o=[];for(let[a,s]of t){let l=n.get(a)?.internals.userNode;l&&o.push({...l,position:s.position,dragging:r})}if(!e)return[o[0],o];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:r}:o[0],o]}function Uy({dragItems:e,snapGrid:t,x:n,y:r}){let o=e.values().next().value;if(!o)return null;let i={x:n-o.distance.x,y:r-o.distance.y},a=Xn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function Mc({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:r,onDragStop:o}){let i={x:null,y:null},a=0,s=new Map,l=!1,c={x:0,y:0},u=null,d=!1,p=null,m=!1,f=!1,y=null;function h({noDragClassName:w,handleSelector:g,domNode:x,isSelectable:k,nodeId:S,nodeClickDistance:N=0}){p=$e(x);function C({x:L,y:T}){let{nodeLookup:v,nodeExtent:E,snapGrid:z,snapToGrid:I,nodeOrigin:_,onNodeDrag:R,onSelectionDrag:V,onError:W,updateNodePositions:F}=t();i={x:L,y:T};let $=!1,Y=s.size>1,U=Y&&E?ha(Un(s)):null,ee=Y&&I?Uy({dragItems:s,snapGrid:z,x:L,y:T}):null;for(let[ne,P]of s){if(!v.has(ne))continue;let X={x:L-P.distance.x,y:T-P.distance.y};I&&(X=ee?{x:Math.round(X.x+ee.x),y:Math.round(X.y+ee.y)}:Xn(X,z));let oe=null;if(Y&&E&&!P.extent&&U){let{positionAbsolute:te}=P.internals,ue=te.x-U.x+E[0][0],Q=te.x+P.measured.width-U.x2+E[1][0],q=te.y-U.y+E[0][1],de=te.y+P.measured.height-U.y2+E[1][1];oe=[[ue,q],[Q,de]]}let{position:re,positionAbsolute:j}=Ca({nodeId:ne,nextPosition:X,nodeLookup:v,nodeExtent:oe||E,nodeOrigin:_,onError:W});$=$||P.position.x!==re.x||P.position.y!==re.y,P.position=re,P.internals.positionAbsolute=j}if(f=f||$,!!$&&(F(s,!0),y&&(r||R||!S&&V))){let[ne,P]=ma({nodeId:S,dragItems:s,nodeLookup:v});r?.(y,s,ne,P),R?.(y,ne,P),S||V?.(y,P)}}async function M(){if(!u)return;let{transform:L,panBy:T,autoPanSpeed:v,autoPanOnNodeDrag:E}=t();if(!E){l=!1,cancelAnimationFrame(a);return}let[z,I]=xr(c,u,v);(z!==0||I!==0)&&(i.x=(i.x??0)-z/L[2],i.y=(i.y??0)-I/L[2],await T({x:z,y:I})&&C(i)),a=requestAnimationFrame(M)}function O(L){let{nodeLookup:T,multiSelectionActive:v,nodesDraggable:E,transform:z,snapGrid:I,snapToGrid:_,selectNodesOnDrag:R,onNodeDragStart:V,onSelectionDragStart:W,unselectNodesAndEdges:F}=t();d=!0,(!R||!k)&&!v&&S&&(T.get(S)?.selected||F()),k&&R&&S&&e?.(S);let $=xo(L.sourceEvent,{transform:z,snapGrid:I,snapToGrid:_,containerBounds:u});if(i=$,s=Vy(T,E,$,S),s.size>0&&(n||V||!S&&W)){let[Y,U]=ma({nodeId:S,dragItems:s,nodeLookup:T});n?.(L.sourceEvent,s,Y,U),V?.(L.sourceEvent,Y,U),S||W?.(L.sourceEvent,U)}}let D=Bi().clickDistance(N).on("start",L=>{let{domNode:T,nodeDragThreshold:v,transform:E,snapGrid:z,snapToGrid:I}=t();u=T?.getBoundingClientRect()||null,m=!1,f=!1,y=L.sourceEvent,v===0&&O(L),i=xo(L.sourceEvent,{transform:E,snapGrid:z,snapToGrid:I,containerBounds:u}),c=rt(L.sourceEvent,u)}).on("drag",L=>{let{autoPanOnNodeDrag:T,transform:v,snapGrid:E,snapToGrid:z,nodeDragThreshold:I,nodeLookup:_}=t(),R=xo(L.sourceEvent,{transform:v,snapGrid:E,snapToGrid:z,containerBounds:u});if(y=L.sourceEvent,(L.sourceEvent.type==="touchmove"&&L.sourceEvent.touches.length>1||S&&!_.has(S))&&(m=!0),!m){if(!l&&T&&d&&(l=!0,M()),!d){let V=rt(L.sourceEvent,u),W=V.x-c.x,F=V.y-c.y;Math.sqrt(W*W+F*F)>I&&O(L)}(i.x!==R.xSnapped||i.y!==R.ySnapped)&&s&&d&&(c=rt(L.sourceEvent,u),C(R))}}).on("end",L=>{if(!d||m){m&&s.size>0&&t().updateNodePositions(s,!1);return}if(l=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:T,updateNodePositions:v,onNodeDragStop:E,onSelectionDragStop:z}=t();if(f&&(v(s,!1),f=!1),o||E||!S&&z){let[I,_]=ma({nodeId:S,dragItems:s,nodeLookup:T,dragging:!1});o?.(L.sourceEvent,s,I,_),E?.(L.sourceEvent,I,_),S||z?.(L.sourceEvent,_)}}}).filter(L=>{let T=L.target;return!L.button&&(!w||!rc(T,`.${w}`,x))&&(!g||rc(T,g,x))});p.call(D)}function b(){p?.on(".drag",null)}return{update:h,destroy:b}}function Gy(e,t,n){let r=[],o={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())vo(o,Gn(i))>0&&r.push(i);return r}var Xy=250;function qy(e,t,n,r){let o=[],i=1/0,a=Gy(e,n,t+Xy);for(let s of a){let l=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let c of l){if(r.nodeId===c.nodeId&&r.type===c.type&&r.id===c.id)continue;let{x:u,y:d}=qt(s,c,c.position,!0),p=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(d-e.y,2));p>t||(p<i?(o=[{...c,x:u,y:d}],i=p):p===i&&o.push({...c,x:u,y:d}))}}if(!o.length)return null;if(o.length>1){let s=r.type==="source"?"target":"source";return o.find(l=>l.type===s)??o[0]}return o[0]}function Ec(e,t,n,r,o,i=!1){let a=r.get(e);if(!a)return null;let s=o==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],l=(n?s?.find(c=>c.id===n):s?.[0])??null;return l&&i?{...l,...qt(a,l,l.position,!0)}:l}function _c(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Yy(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var Ic=()=>!0;function Ky(e,{connectionMode:t,connectionRadius:n,handleId:r,nodeId:o,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:l,lib:c,autoPanOnConnect:u,flowId:d,panBy:p,cancelConnection:m,onConnectStart:f,onConnect:y,onConnectEnd:h,isValidConnection:b=Ic,onReconnectEnd:w,updateConnection:g,getTransform:x,getFromHandle:k,autoPanSpeed:S,dragThreshold:N=1,handleDomNode:C}){let M=za(e.target),O=0,D,{x:L,y:T}=rt(e),v=_c(i,C),E=s?.getBoundingClientRect(),z=!1;if(!E||!v)return;let I=Ec(o,v,r,l,t);if(!I)return;let _=rt(e,E),R=!1,V=null,W=!1,F=null;function $(){if(!u||!E)return;let[re,j]=xr(_,E,S);p({x:re,y:j}),O=requestAnimationFrame($)}let Y={...I,nodeId:o,type:v,position:I.position},U=l.get(o),ne={inProgress:!0,isValid:null,from:qt(U,Y,ie.Left,!0),fromHandle:Y,fromPosition:Y.position,fromNode:U,to:_,toHandle:null,toPosition:Yl[Y.position],toNode:null,pointer:_};function P(){z=!0,g(ne),f?.(e,{nodeId:o,handleId:r,handleType:v})}N===0&&P();function X(re){if(!z){let{x:de,y:be}=rt(re),Ee=de-L,Te=be-T;if(!(Ee*Ee+Te*Te>N*N))return;P()}if(!k()||!Y){oe(re);return}let j=x();_=rt(re,E),D=qy(qn(_,j,!1,[1,1]),n,l,Y),R||($(),R=!0);let te=Pc(re,{handle:D,connectionMode:t,fromNodeId:o,fromHandleId:r,fromType:a?"target":"source",isValidConnection:b,doc:M,lib:c,flowId:d,nodeLookup:l});F=te.handleDomNode,V=te.connection,W=Yy(!!D,te.isValid);let ue=l.get(o),Q=ue?qt(ue,Y,ie.Left,!0):ne.from,q={...ne,from:Q,isValid:W,to:te.toHandle&&W?bn({x:te.toHandle.x,y:te.toHandle.y},j):_,toHandle:te.toHandle,toPosition:W&&te.toHandle?te.toHandle.position:Yl[Y.position],toNode:te.toHandle?l.get(te.toHandle.nodeId):null,pointer:_};g(q),ne=q}function oe(re){if(!("touches"in re&&re.touches.length>0)){if(z){(D||F)&&V&&W&&y?.(V);let{inProgress:j,...te}=ne,ue={...te,toPosition:ne.toHandle?ne.toPosition:null};h?.(re,ue),i&&w?.(re,ue)}m(),cancelAnimationFrame(O),R=!1,W=!1,V=null,F=null,M.removeEventListener("mousemove",X),M.removeEventListener("mouseup",oe),M.removeEventListener("touchmove",X),M.removeEventListener("touchend",oe)}}M.addEventListener("mousemove",X),M.addEventListener("mouseup",oe),M.addEventListener("touchmove",X),M.addEventListener("touchend",oe)}function Pc(e,{handle:t,connectionMode:n,fromNodeId:r,fromHandleId:o,fromType:i,doc:a,lib:s,flowId:l,isValidConnection:c=Ic,nodeLookup:u}){let d=i==="target",p=t?a.querySelector(`.${s}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:m,y:f}=rt(e),y=a.elementFromPoint(m,f),h=y?.classList.contains(`${s}-flow__handle`)?y:p,b={handleDomNode:h,isValid:!1,connection:null,toHandle:null};if(h){let w=_c(void 0,h),g=h.getAttribute("data-nodeid"),x=h.getAttribute("data-handleid"),k=h.classList.contains("connectable"),S=h.classList.contains("connectableend");if(!g||!w)return b;let N={source:d?g:r,sourceHandle:d?x:o,target:d?r:g,targetHandle:d?o:x};b.connection=N;let M=k&&S&&(n===Xt.Strict?d&&w==="source"||!d&&w==="target":g!==r||x!==o);b.isValid=M&&c(N),b.toHandle=Ec(g,w,x,u,n,!0)}return b}var Ir={onPointerDown:Ky,isValid:Pc};function zc({domNode:e,panZoom:t,getTransform:n,getViewScale:r}){let o=$e(e);function i({translateExtent:s,width:l,height:c,zoomStep:u=1,pannable:d=!0,zoomable:p=!0,inversePan:m=!1}){let f=g=>{if(g.sourceEvent.type!=="wheel"||!t)return;let x=n(),k=g.sourceEvent.ctrlKey&&Yn()?10:1,S=-g.sourceEvent.deltaY*(g.sourceEvent.deltaMode===1?.05:g.sourceEvent.deltaMode?1:.002)*u,N=x[2]*Math.pow(2,S*k);t.scaleTo(N)},y=[0,0],h=g=>{(g.sourceEvent.type==="mousedown"||g.sourceEvent.type==="touchstart")&&(y=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY])},b=g=>{let x=n();if(g.sourceEvent.type!=="mousemove"&&g.sourceEvent.type!=="touchmove"||!t)return;let k=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY],S=[k[0]-y[0],k[1]-y[1]];y=k;let N=r()*Math.max(x[2],Math.log(x[2]))*(m?-1:1),C={x:x[0]-S[0]*N,y:x[1]-S[1]*N},M=[[0,0],[l,c]];t.setViewportConstrained({x:C.x,y:C.y,zoom:x[2]},M,s)},w=pa().on("start",h).on("zoom",d?b:null).on("zoom.wheel",p?f:null);o.call(w,{})}function a(){o.on("zoom",null)}return{update:i,destroy:a,pointer:Xe}}var Pr=e=>({x:e.x,y:e.y,zoom:e.k}),fa=({x:e,y:t,zoom:n})=>yo.translate(e,t).scale(n),$n=(e,t)=>e.target.closest(`.${t}`),Rc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Zy=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,ga=(e,t=0,n=Zy,r=()=>{})=>{let o=typeof t=="number"&&t>0;return o||r(),o?e.transition().duration(t).ease(n).on("end",r):e},Tc=e=>{let t=e.ctrlKey&&Yn()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function jy({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:r,panOnScrollMode:o,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:l,onPanZoomEnd:c}){return u=>{if($n(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(u.ctrlKey&&a){let h=Xe(u),b=Tc(u),w=d*Math.pow(2,b);r.scaleTo(n,w,h,u);return}let p=u.deltaMode===1?20:1,m=o===Lt.Vertical?0:u.deltaX*p,f=o===Lt.Horizontal?0:u.deltaY*p;!Yn()&&u.shiftKey&&o!==Lt.Vertical&&(m=u.deltaY*p,f=0),r.translateBy(n,-(m/d)*i,-(f/d)*i,{internal:!0});let y=Pr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?l?.(u,y):(e.isPanScrolling=!0,s?.(u,y)),e.panScrollTimeout=setTimeout(()=>{c?.(u,y),e.isPanScrolling=!1},150)}}function Qy({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(r,o){let i=r.type==="wheel",a=!t&&i&&!r.ctrlKey,s=$n(r,e);if(r.ctrlKey&&i&&s&&r.preventDefault(),a||s)return null;r.preventDefault(),n.call(this,r,o)}}function Jy({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return r=>{if(r.sourceEvent?.internal)return;let o=Pr(r.transform);e.mouseButton=r.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=o,r.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(r.sourceEvent,o)}}function e0({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:r,onPanZoom:o}){return i=>{e.usedRightMouseButton=!!(n&&Rc(t,e.mouseButton??0)),i.sourceEvent?.sync||r([i.transform.x,i.transform.y,i.transform.k]),o&&!i.sourceEvent?.internal&&o?.(i.sourceEvent,Pr(i.transform))}}function t0({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:r,onPanZoomEnd:o,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Rc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,r(!1),o)){let s=Pr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{o?.(a.sourceEvent,s)},n?150:0)}}}function n0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:r,panOnScroll:o,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:l,lib:c,connectionInProgress:u}){return d=>{let p=e||t,m=n&&d.ctrlKey,f=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&($n(d,`${c}-flow__node`)||$n(d,`${c}-flow__edge`)))return!0;if(!r&&!p&&!o&&!i&&!n||a||u&&!f||$n(d,s)&&f||$n(d,l)&&(!f||o&&f&&!e)||!n&&d.ctrlKey&&f)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!p&&!o&&!m&&f||!r&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(r)&&!r.includes(d.button)&&d.type==="mousedown")return!1;let y=Array.isArray(r)&&r.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||f)&&y}}function Dc({domNode:e,minZoom:t,maxZoom:n,translateExtent:r,viewport:o,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:l}){let c={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),d=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(T=>{let v=T[0];v&&(d=[[0,0],[v.contentRect.width,v.contentRect.height]])}):null)?.observe(e);let m=pa().extent(()=>d).scaleExtent([t,n]).translateExtent(r),f=$e(e).call(m);x({x:o.x,y:o.y,zoom:Wn(o.zoom,t,n)},[[0,0],[u.width,u.height]],r);let y=f.on("wheel.zoom"),h=f.on("dblclick.zoom");m.wheelDelta(Tc);async function b(T,v){return f?new Promise(E=>{m?.interpolate(v?.interpolate==="linear"?An:On).transform(ga(f,v?.duration,v?.ease,()=>E(!0)),T)}):!1}function w({noWheelClassName:T,noPanClassName:v,onPaneContextMenu:E,userSelectionActive:z,panOnScroll:I,panOnDrag:_,panOnScrollMode:R,panOnScrollSpeed:V,preventScrolling:W,zoomOnPinch:F,zoomOnScroll:$,zoomOnDoubleClick:Y,zoomActivationKeyPressed:U,lib:ee,onTransformChange:ne,connectionInProgress:P,paneClickDistance:X,selectionOnDrag:oe}){z&&!c.isZoomingOrPanning&&g();let re=I&&!U&&!z;m.clickDistance(oe?1/0:!ot(X)||X<0?0:X);let j=re?jy({zoomPanValues:c,noWheelClassName:T,d3Selection:f,d3Zoom:m,panOnScrollMode:R,panOnScrollSpeed:V,zoomOnPinch:F,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):Qy({noWheelClassName:T,preventScrolling:W,d3ZoomHandler:y});f.on("wheel.zoom",j,{passive:!1});let te=Jy({zoomPanValues:c,onDraggingChange:l,onPanZoomStart:a});m.on("start",te);let ue=e0({zoomPanValues:c,panOnDrag:_,onPaneContextMenu:!!E,onPanZoom:i,onTransformChange:ne});m.on("zoom",ue);let Q=t0({zoomPanValues:c,panOnDrag:_,panOnScroll:I,onPaneContextMenu:E,onPanZoomEnd:s,onDraggingChange:l});m.on("end",Q);let q=n0({zoomActivationKeyPressed:U,panOnDrag:_,zoomOnScroll:$,panOnScroll:I,zoomOnDoubleClick:Y,zoomOnPinch:F,userSelectionActive:z,noPanClassName:v,noWheelClassName:T,lib:ee,connectionInProgress:P});m.filter(q),Y?f.on("dblclick.zoom",h):f.on("dblclick.zoom",null)}function g(){m.on("zoom",null)}async function x(T,v,E){let z=fa(T),I=m?.constrain()(z,v,E);return I&&await b(I),I}async function k(T,v){let E=fa(T);return await b(E,v),E}function S(T){if(f){let v=fa(T),E=f.property("__zoom");(E.k!==T.zoom||E.x!==T.x||E.y!==T.y)&&m?.transform(f,v,null,{sync:!0})}}function N(){let T=f?ua(f.node()):{x:0,y:0,k:1};return{x:T.x,y:T.y,zoom:T.k}}async function C(T,v){return f?new Promise(E=>{m?.interpolate(v?.interpolate==="linear"?An:On).scaleTo(ga(f,v?.duration,v?.ease,()=>E(!0)),T)}):!1}async function M(T,v){return f?new Promise(E=>{m?.interpolate(v?.interpolate==="linear"?An:On).scaleBy(ga(f,v?.duration,v?.ease,()=>E(!0)),T)}):!1}function O(T){m?.scaleExtent(T)}function D(T){m?.translateExtent(T)}function L(T){let v=!ot(T)||T<0?0:T;m?.clickDistance(v)}return{update:w,destroy:g,setViewport:k,setViewportConstrained:x,getViewport:N,scaleTo:C,scaleBy:M,setScaleExtent:O,setTranslateExtent:D,syncViewport:S,setClickDistance:L}}var Yt;(function(e){e.Line="line",e.Handle="handle"})(Yt||(Yt={}));function o0({width:e,prevWidth:t,height:n,prevHeight:r,affectsX:o,affectsY:i}){let a=e-t,s=n-r,l=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&o&&(l[0]=l[0]*-1),s&&i&&(l[1]=l[1]*-1),l}function ic(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),r=e.includes("left"),o=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:r,affectsY:o}}function Ut(e,t){return Math.max(0,t-e)}function Gt(e,t){return Math.max(0,e-t)}function hr(e,t,n){return Math.max(0,t-e,e-n)}function ac(e,t){return e?!t:t}function r0(e,t,n,r,o,i,a,s){let{affectsX:l,affectsY:c}=t,{isHorizontal:u,isVertical:d}=t,p=u&&d,{xSnapped:m,ySnapped:f}=n,{minWidth:y,maxWidth:h,minHeight:b,maxHeight:w}=r,{x:g,y:x,width:k,height:S,aspectRatio:N}=e,C=Math.floor(u?m-e.pointerX:0),M=Math.floor(d?f-e.pointerY:0),O=k+(l?-C:C),D=S+(c?-M:M),L=-i[0]*k,T=-i[1]*S,v=hr(O,y,h),E=hr(D,b,w);if(a){let _=0,R=0;l&&C<0?_=Ut(g+C+L,a[0][0]):!l&&C>0&&(_=Gt(g+O+L,a[1][0])),c&&M<0?R=Ut(x+M+T,a[0][1]):!c&&M>0&&(R=Gt(x+D+T,a[1][1])),v=Math.max(v,_),E=Math.max(E,R)}if(s){let _=0,R=0;l&&C>0?_=Gt(g+C,s[0][0]):!l&&C<0&&(_=Ut(g+O,s[1][0])),c&&M>0?R=Gt(x+M,s[0][1]):!c&&M<0&&(R=Ut(x+D,s[1][1])),v=Math.max(v,_),E=Math.max(E,R)}if(o){if(u){let _=hr(O/N,b,w)*N;if(v=Math.max(v,_),a){let R=0;!l&&!c||l&&!c&&p?R=Gt(x+T+O/N,a[1][1])*N:R=Ut(x+T+(l?C:-C)/N,a[0][1])*N,v=Math.max(v,R)}if(s){let R=0;!l&&!c||l&&!c&&p?R=Ut(x+O/N,s[1][1])*N:R=Gt(x+(l?C:-C)/N,s[0][1])*N,v=Math.max(v,R)}}if(d){let _=hr(D*N,y,h)/N;if(E=Math.max(E,_),a){let R=0;!l&&!c||c&&!l&&p?R=Gt(g+D*N+L,a[1][0])/N:R=Ut(g+(c?M:-M)*N+L,a[0][0])/N,E=Math.max(E,R)}if(s){let R=0;!l&&!c||c&&!l&&p?R=Ut(g+D*N,s[1][0])/N:R=Gt(g+(c?M:-M)*N,s[0][0])/N,E=Math.max(E,R)}}}M=M+(M<0?E:-E),C=C+(C<0?v:-v),o&&(p?O>D*N?M=(ac(l,c)?-C:C)/N:C=(ac(l,c)?-M:M)*N:u?(M=C/N,c=l):(C=M*N,l=c));let z=l?g+C:g,I=c?x+M:x;return{width:k+(l?-C:C),height:S+(c?-M:M),x:i[0]*C*(l?-1:1)+z,y:i[1]*M*(c?-1:1)+I}}var Ac={width:0,height:0,x:0,y:0},i0={...Ac,pointerX:0,pointerY:0,aspectRatio:1};function a0(e,t,n){let r=t.position.x+e.position.x,o=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,l=n[1]*a;return[[r-s,o-l],[r+i-s,o+a-l]]}function Oc({domNode:e,nodeId:t,getStoreItems:n,onChange:r,onEnd:o}){let i=$e(e),a={controlDirection:ic("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:c,boundaries:u,keepAspectRatio:d,resizeDirection:p,onResizeStart:m,onResize:f,onResizeEnd:y,shouldResize:h}){let b={...Ac},w={...i0};a={boundaries:u,resizeDirection:p,keepAspectRatio:d,controlDirection:ic(c)};let g,x=null,k=[],S,N,C,M=!1,O=Bi().on("start",D=>{let{nodeLookup:L,transform:T,snapGrid:v,snapToGrid:E,nodeOrigin:z,paneDomNode:I}=n();if(g=L.get(t),!g)return;x=I?.getBoundingClientRect()??null;let{xSnapped:_,ySnapped:R}=xo(D.sourceEvent,{transform:T,snapGrid:v,snapToGrid:E,containerBounds:x});b={width:g.measured.width??0,height:g.measured.height??0,x:g.position.x??0,y:g.position.y??0},w={...b,pointerX:_,pointerY:R,aspectRatio:b.width/b.height},S=void 0,N=yn(g.extent)?g.extent:void 0,g.parentId&&(g.extent==="parent"||g.expandParent)&&(S=L.get(g.parentId)),S&&g.extent==="parent"&&(N=[[0,0],[S.measured.width,S.measured.height]]),k=[],C=void 0;for(let[V,W]of L)if(W.parentId===t&&(k.push({id:V,position:{...W.position},extent:W.extent}),W.extent==="parent"||W.expandParent)){let F=a0(W,g,W.origin??z);C?C=[[Math.min(F[0][0],C[0][0]),Math.min(F[0][1],C[0][1])],[Math.max(F[1][0],C[1][0]),Math.max(F[1][1],C[1][1])]]:C=F}m?.(D,{...b})}).on("drag",D=>{let{transform:L,snapGrid:T,snapToGrid:v,nodeOrigin:E}=n(),z=xo(D.sourceEvent,{transform:L,snapGrid:T,snapToGrid:v,containerBounds:x}),I=[];if(!g)return;let{x:_,y:R,width:V,height:W}=b,F={},$=g.origin??E,{width:Y,height:U,x:ee,y:ne}=r0(w,a.controlDirection,z,a.boundaries,a.keepAspectRatio,$,N,C),P=Y!==V,X=U!==W,oe=ee!==_&&P,re=ne!==R&&X;if(!oe&&!re&&!P&&!X)return;if((oe||re||$[0]===1||$[1]===1)&&(F.x=oe?ee:b.x,F.y=re?ne:b.y,b.x=F.x,b.y=F.y,k.length>0)){let Q=ee-_,q=ne-R;for(let de of k)de.position={x:de.position.x-Q+$[0]*(Y-V),y:de.position.y-q+$[1]*(U-W)},I.push(de)}if((P||X)&&(F.width=P&&(!a.resizeDirection||a.resizeDirection==="horizontal")?Y:b.width,F.height=X&&(!a.resizeDirection||a.resizeDirection==="vertical")?U:b.height,b.width=F.width,b.height=F.height),S&&g.expandParent){let Q=$[0]*(F.width??0);F.x&&F.x<Q&&(b.x=Q,w.x=w.x-(F.x-Q));let q=$[1]*(F.height??0);F.y&&F.y<q&&(b.y=q,w.y=w.y-(F.y-q))}let j=o0({width:b.width,prevWidth:V,height:b.height,prevHeight:W,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),te={...b,direction:j};h?.(D,te)!==!1&&(M=!0,f?.(D,te),r(F,I))}).on("end",D=>{M&&(y?.(D,{...b}),o?.({...b}),M=!1)});i.call(O)}function l(){i.on(".drag",null)}return{update:s,destroy:l}}var Kc=Ws(require("react"),1),Zc=Ws(Uc(),1);var Xc={},Gc=e=>{let t,n=new Set,r=(u,d)=>{let p=typeof u=="function"?u(t):u;if(!Object.is(p,t)){let m=t;t=d??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(f=>f(t,m))}},o=()=>t,l={setState:r,getState:o,getInitialState:()=>c,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(Xc.env?Xc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,o,l);return l},qc=e=>e?Gc(e):Gc;var{useDebugValue:C0}=Kc.default,{useSyncExternalStoreWithSelector:N0}=Zc.default,M0=e=>e;function Fa(e,t=M0,n){let r=N0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return C0(r),r}var Yc=(e,t)=>{let n=qc(e),r=(o,i=t)=>Fa(n,o,i);return Object.assign(r,n),r},jc=(e,t)=>e?Yc(e,t):Yc;function Me(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}var Cd=require("react-dom"),Ar=(0,H.createContext)(null),E0=Ar.Provider,Nd=tt.error001("react");function ge(e,t){let n=(0,H.useContext)(Ar);if(n===null)throw new Error(Nd);return Fa(n,e,t)}function Se(){let e=(0,H.useContext)(Ar);if(e===null)throw new Error(Nd);return(0,H.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Qc={display:"none"},_0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Md="react-flow__node-desc",Ed="react-flow__edge-desc",I0="react-flow__aria-live",P0=e=>e.ariaLiveMessage,z0=e=>e.ariaLabelConfig;function R0({rfId:e}){let t=ge(P0);return(0,B.jsx)("div",{id:`${I0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:_0,children:t})}function T0({rfId:e,disableKeyboardA11y:t}){let n=ge(z0);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{id:`${Md}-${e}`,style:Qc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,B.jsx)("div",{id:`${Ed}-${e}`,style:Qc,children:n["edge.a11yDescription.default"]}),!t&&(0,B.jsx)(R0,{rfId:e})]})}var Or=(0,H.forwardRef)(({position:e="top-left",children:t,className:n,style:r,...o},i)=>{let a=`${e}`.split("-");return(0,B.jsx)("div",{className:Ie(["react-flow__panel",n,...a]),style:r,ref:i,...o,children:t})});Or.displayName="Panel";var Jc="https://reactflow.dev?utm_source=attribution";function D0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,B.jsx)(Or,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Jc}`,children:(0,B.jsx)("a",{href:Jc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var A0=e=>{let t=[],n=[];for(let[,r]of e.nodeLookup)r.selected&&t.push(r.internals.userNode);for(let[,r]of e.edgeLookup)r.selected&&n.push(r);return{selectedNodes:t,selectedEdges:n}},Rr=e=>e.id;function O0(e,t){return Me(e.selectedNodes.map(Rr),t.selectedNodes.map(Rr))&&Me(e.selectedEdges.map(Rr),t.selectedEdges.map(Rr))}function L0({onSelectionChange:e}){let t=Se(),{selectedNodes:n,selectedEdges:r}=ge(A0,O0);return(0,H.useEffect)(()=>{let o={nodes:n,edges:r};e?.(o),t.getState().onSelectionChangeHandlers.forEach(i=>i(o))},[n,r,e]),null}var H0=e=>!!e.onSelectionChangeHandlers;function B0({onSelectionChange:e}){let t=ge(H0);return e||t?(0,B.jsx)(L0,{onSelectionChange:e}):null}var _d=[0,0],$0={x:0,y:0,zoom:1},F0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],ed=[...F0,"rfId"],W0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),td={translateExtent:Vn,nodeOrigin:_d,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function V0(e){let{setNodes:t,setEdges:n,setMinZoom:r,setMaxZoom:o,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:l}=ge(W0,Me),c=Se();(0,H.useEffect)(()=>(l(e.defaultNodes,e.defaultEdges),()=>{u.current=td,s()}),[]);let u=(0,H.useRef)(td);return(0,H.useEffect)(()=>{for(let d of ed){let p=e[d],m=u.current[d];p!==m&&(typeof e[d]>"u"||(d==="nodes"?t(p):d==="edges"?n(p):d==="minZoom"?r(p):d==="maxZoom"?o(p):d==="translateExtent"?i(p):d==="nodeExtent"?a(p):d==="ariaLabelConfig"?c.setState({ariaLabelConfig:fc(p)}):d==="fitView"?c.setState({fitViewQueued:p}):d==="fitViewOptions"?c.setState({fitViewOptions:p}):c.setState({[d]:p})))}u.current=e},ed.map(d=>e[d])),null}function nd(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function U0(e){let[t,n]=(0,H.useState)(e==="system"?null:e);return(0,H.useEffect)(()=>{if(e!=="system"){n(e);return}let r=nd(),o=()=>n(r?.matches?"dark":"light");return o(),r?.addEventListener("change",o),()=>{r?.removeEventListener("change",o)}},[e]),t!==null?t:nd()?.matches?"dark":"light"}var od=typeof document<"u"?document:null;function Co(e=null,t={target:od,actInsideInputWithModifier:!0}){let[n,r]=(0,H.useState)(!1),o=(0,H.useRef)(!1),i=(0,H.useRef)(new Set([])),[a,s]=(0,H.useMemo)(()=>{if(e!==null){let c=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),u=c.reduce((d,p)=>d.concat(...p),[]);return[c,u]}return[[],[]]},[e]);return(0,H.useEffect)(()=>{let l=t?.target??od,c=t?.actInsideInputWithModifier??!0;if(e!==null){let u=m=>{if(o.current=m.ctrlKey||m.metaKey||m.shiftKey||m.altKey,(!o.current||o.current&&!c)&&Ra(m))return!1;let y=id(m.code,s);if(i.current.add(m[y]),rd(a,i.current,!1)){let h=m.composedPath?.()?.[0]||m.target,b=h?.nodeName==="BUTTON"||h?.nodeName==="A";t.preventDefault!==!1&&(o.current||!b)&&m.preventDefault(),r(!0)}},d=m=>{let f=id(m.code,s);rd(a,i.current,!0)?(r(!1),i.current.clear()):i.current.delete(m[f]),m.key==="Meta"&&i.current.clear(),o.current=!1},p=()=>{i.current.clear(),r(!1)};return l?.addEventListener("keydown",u),l?.addEventListener("keyup",d),window.addEventListener("blur",p),window.addEventListener("contextmenu",p),()=>{l?.removeEventListener("keydown",u),l?.removeEventListener("keyup",d),window.removeEventListener("blur",p),window.removeEventListener("contextmenu",p)}}},[e,r]),n}function rd(e,t,n){return e.filter(r=>n||r.length===t.size).some(r=>r.every(o=>t.has(o)))}function id(e,t){return t.includes(e)?"code":"key"}var G0=()=>{let e=Se();return(0,H.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:r}=e.getState();return r?r.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[r,o,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??r,y:t.y??o,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,r]=e.getState().transform;return{x:t,y:n,zoom:r}},setCenter:async(t,n,r)=>e.getState().setCenter(t,n,r),fitBounds:async(t,n)=>{let{width:r,height:o,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),l=ko(t,r,o,i,a,n?.padding??.1);return s?(await s.setViewport(l,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:r,snapGrid:o,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:l}=a.getBoundingClientRect(),c={x:t.x-s,y:t.y-l},u=n.snapGrid??o,d=n.snapToGrid??i;return qn(c,r,d,u)},flowToScreenPosition:t=>{let{transform:n,domNode:r}=e.getState();if(!r)return t;let{x:o,y:i}=r.getBoundingClientRect(),a=bn(t,n);return{x:a.x+o,y:a.y+i}}}),[])};function Id(e,t){let n=[],r=new Map,o=[];for(let i of e)if(i.type==="add"){o.push(i);continue}else if(i.type==="remove"||i.type==="replace")r.set(i.id,[i]);else{let a=r.get(i.id);a?a.push(i):r.set(i.id,[i])}for(let i of t){let a=r.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let l of a)X0(l,s);n.push(s)}return o.length&&o.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function X0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Pd(e,t){return Id(e,t)}function zd(e,t){return Id(e,t)}function xn(e,t){return{id:e,type:"select",selected:t}}function Zn(e,t=new Set,n=!1){let r=[];for(let[o,i]of e){let a=t.has(o);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),r.push(xn(i.id,a)))}return r}function ad({items:e=[],lookup:t}){let n=[],r=new Map(e.map(o=>[o.id,o]));for(let[o,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:o})}for(let[o]of t)r.get(o)===void 0&&n.push({id:o,type:"remove"});return n}function sd(e){return{id:e.id,type:"remove"}}var q0=Ea("React Flow","https://reactflow.dev/");function Y0(e,t,n={}){return bc(e,t,{...n,onError:n.onError??q0})}var ld=e=>sc(e),K0=e=>va(e);function Rd(e){return(0,H.forwardRef)(e)}var Td=typeof window<"u"?H.useLayoutEffect:H.useEffect;function cd(e){let[t,n]=(0,H.useState)(BigInt(0)),[r]=(0,H.useState)(()=>Z0(()=>n(o=>o+BigInt(1))));return Td(()=>{let o=r.get();o.length&&(e(o),r.reset())},[t]),r}function Z0(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Dd=(0,H.createContext)(null);function j0({children:e}){let t=Se(),n=(0,H.useCallback)(s=>{let{nodes:l=[],setNodes:c,hasDefaultNodes:u,onNodesChange:d,nodeLookup:p,fitViewQueued:m,onNodesChangeMiddlewareMap:f}=t.getState(),y=l;for(let b of s)y=typeof b=="function"?b(y):b;let h=ad({items:y,lookup:p});for(let b of f.values())h=b(h);u&&c(y),h.length>0?d?.(h):m&&window.requestAnimationFrame(()=>{let{fitViewQueued:b,nodes:w,setNodes:g}=t.getState();b&&g(w)})},[]),r=cd(n),o=(0,H.useCallback)(s=>{let{edges:l=[],setEdges:c,hasDefaultEdges:u,onEdgesChange:d,edgeLookup:p}=t.getState(),m=l;for(let f of s)m=typeof f=="function"?f(m):f;u?c(m):d&&d(ad({items:m,lookup:p}))},[]),i=cd(o),a=(0,H.useMemo)(()=>({nodeQueue:r,edgeQueue:i}),[]);return(0,B.jsx)(Dd.Provider,{value:a,children:e})}function Q0(){let e=(0,H.useContext)(Dd);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var J0=e=>!!e.panZoom;function Ga(){let e=G0(),t=Se(),n=Q0(),r=ge(J0),o=(0,H.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},l=d=>{let{nodeLookup:p,nodeOrigin:m}=t.getState(),f=ld(d)?d:p.get(d.id),y=f.parentId?Ia(f.position,f.measured,f.parentId,p,m):f.position,h={...f,position:y,width:f.measured?.width??f.width,height:f.measured?.height??f.height};return Gn(h)},c=(d,p,m={replace:!1})=>{a(f=>f.map(y=>{if(y.id===d){let h=typeof p=="function"?p(y):p;return m.replace&&ld(h)?h:{...y,...h}}return y}))},u=(d,p,m={replace:!1})=>{s(f=>f.map(y=>{if(y.id===d){let h=typeof p=="function"?p(y):p;return m.replace&&K0(h)?h:{...y,...h}}return y}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(p=>({...p}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let p=Array.isArray(d)?d:[d];n.nodeQueue.push(m=>[...m,...p])},addEdges:d=>{let p=Array.isArray(d)?d:[d];n.edgeQueue.push(m=>[...m,...p])},toObject:()=>{let{nodes:d=[],edges:p=[],transform:m}=t.getState(),[f,y,h]=m;return{nodes:d.map(b=>({...b})),edges:p.map(b=>({...b})),viewport:{x:f,y,zoom:h}}},deleteElements:async({nodes:d=[],edges:p=[]})=>{let{nodes:m,edges:f,onNodesDelete:y,onEdgesDelete:h,triggerNodeChanges:b,triggerEdgeChanges:w,onDelete:g,onBeforeDelete:x}=t.getState(),{nodes:k,edges:S}=await dc({nodesToRemove:d,edgesToRemove:p,nodes:m,edges:f,onBeforeDelete:x}),N=S.length>0,C=k.length>0;if(N){let M=S.map(sd);h?.(S),w(M)}if(C){let M=k.map(sd);y?.(k),b(M)}return(C||N)&&g?.({nodes:k,edges:S}),{deletedNodes:k,deletedEdges:S}},getIntersectingNodes:(d,p=!0,m)=>{let f=Ma(d),y=f?d:l(d),h=m!==void 0;return y?(m||t.getState().nodes).filter(b=>{let w=t.getState().nodeLookup.get(b.id);if(w&&!f&&(b.id===d.id||!w.internals.positionAbsolute))return!1;let g=Gn(h?b:w),x=vo(g,y);return p&&x>0||x>=g.width*g.height||x>=y.width*y.height}):[]},isNodeIntersecting:(d,p,m=!0)=>{let y=Ma(d)?d:l(d);if(!y)return!1;let h=vo(y,p);return m&&h>0||h>=p.width*p.height||h>=y.width*y.height},updateNode:c,updateNodeData:(d,p,m={replace:!1})=>{c(d,f=>{let y=typeof p=="function"?p(f):p;return m.replace?{...f,data:y}:{...f,data:{...f.data,...y}}},m)},updateEdge:u,updateEdgeData:(d,p,m={replace:!1})=>{u(d,f=>{let y=typeof p=="function"?p(f):p;return m.replace?{...f,data:y}:{...f,data:{...f.data,...y}}},m)},getNodesBounds:d=>{let{nodeLookup:p,nodeOrigin:m}=t.getState();return Sa(d,{nodeLookup:p,nodeOrigin:m})},getHandleConnections:({type:d,id:p,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}-${d}${p?`-${p}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:p,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}${d?p?`-${d}-${p}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let p=t.getState().fitViewResolver??mc();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:p}),n.nodeQueue.push(m=>[...m]),p.promise}}},[]);return(0,H.useMemo)(()=>({...o,...e,viewportInitialized:r}),[r])}var dd=e=>e.selected,ex=typeof window<"u"?window:void 0;function tx({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=Se(),{deleteElements:r}=Ga(),o=Co(e,{actInsideInputWithModifier:!1}),i=Co(t,{target:ex});(0,H.useEffect)(()=>{if(o){let{edges:a,nodes:s}=n.getState();r({nodes:s.filter(dd),edges:a.filter(dd)}),n.setState({nodesSelectionActive:!1})}},[o]),(0,H.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function nx(e){let t=Se();(0,H.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let r=kr(e.current);(r.height===0||r.width===0)&&t.getState().onError?.("004",tt.error004()),t.setState({width:r.width||500,height:r.height||500})};if(e.current){n(),window.addEventListener("resize",n);let r=new ResizeObserver(()=>n());return r.observe(e.current),()=>{window.removeEventListener("resize",n),r&&e.current&&r.unobserve(e.current)}}},[])}var Lr={position:"absolute",width:"100%",height:"100%",top:0,left:0},ox=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function rx({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:r=!1,panOnScrollSpeed:o=.5,panOnScrollMode:i=Lt.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:l,translateExtent:c,minZoom:u,maxZoom:d,zoomActivationKeyCode:p,preventScrolling:m=!0,children:f,noWheelClassName:y,noPanClassName:h,onViewportChange:b,isControlledViewport:w,paneClickDistance:g,selectionOnDrag:x}){let k=Se(),S=(0,H.useRef)(null),{userSelectionActive:N,lib:C,connectionInProgress:M}=ge(ox,Me),O=Co(p),D=(0,H.useRef)();nx(S);let L=(0,H.useCallback)(T=>{b?.({x:T[0],y:T[1],zoom:T[2]}),w||k.setState({transform:T})},[b,w]);return(0,H.useEffect)(()=>{if(S.current){D.current=Dc({domNode:S.current,minZoom:u,maxZoom:d,translateExtent:c,viewport:l,onDraggingChange:z=>k.setState(I=>I.paneDragging===z?I:{paneDragging:z}),onPanZoomStart:(z,I)=>{let{onViewportChangeStart:_,onMoveStart:R}=k.getState();R?.(z,I),_?.(I)},onPanZoom:(z,I)=>{let{onViewportChange:_,onMove:R}=k.getState();R?.(z,I),_?.(I)},onPanZoomEnd:(z,I)=>{let{onViewportChangeEnd:_,onMoveEnd:R}=k.getState();R?.(z,I),_?.(I)}});let{x:T,y:v,zoom:E}=D.current.getViewport();return k.setState({panZoom:D.current,transform:[T,v,E],domNode:S.current.closest(".react-flow")}),()=>{D.current?.destroy()}}},[]),(0,H.useEffect)(()=>{D.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:r,panOnScrollSpeed:o,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:O,preventScrolling:m,noPanClassName:h,userSelectionActive:N,noWheelClassName:y,lib:C,onTransformChange:L,connectionInProgress:M,selectionOnDrag:x,paneClickDistance:g})},[e,t,n,r,o,i,a,s,O,m,h,N,y,C,L,M,x,g]),(0,B.jsx)("div",{className:"react-flow__renderer",ref:S,style:Lr,children:f})}var ix=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function ax(){let{userSelectionActive:e,userSelectionRect:t}=ge(ix,Me);return e&&t?(0,B.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Wa=(e,t)=>n=>{n.target===t.current&&e?.(n)},sx=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function lx({isSelecting:e,selectionKeyPressed:t,selectionMode:n=gn.Full,panOnDrag:r,autoPanOnSelection:o,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:l,onPaneClick:c,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:p,onPaneMouseMove:m,onPaneMouseLeave:f,children:y}){let h=(0,H.useRef)(0),b=Se(),{userSelectionActive:w,elementsSelectable:g,dragging:x,panBy:k,autoPanSpeed:S}=ge(sx,Me),N=g&&(e||w),C=(0,H.useRef)(null),M=(0,H.useRef)(),O=(0,H.useRef)(new Set),D=(0,H.useRef)(new Set),L=(0,H.useRef)(!1),T=(0,H.useRef)(!1),v=(0,H.useRef)({x:0,y:0}),E=(0,H.useRef)(!1),z=P=>{if(T.current||L.current||b.getState().connection.inProgress){T.current=!1,L.current=!1;return}c?.(P),b.getState().resetSelectedElements(),b.setState({nodesSelectionActive:!1})},I=P=>{if(Array.isArray(r)&&r?.includes(2)){P.preventDefault();return}u?.(P)},_=d?P=>d(P):void 0,R=P=>{T.current&&(P.stopPropagation(),T.current=!1)},V=P=>{let{domNode:X,transform:oe}=b.getState();if(M.current=X?.getBoundingClientRect(),!M.current)return;let re=P.target===C.current;if(!re&&!!P.target.closest(".nokey")||!e||!(a&&re||t)||P.button!==0||!P.isPrimary)return;P.target?.setPointerCapture?.(P.pointerId),T.current=!1;let{x:ue,y:Q}=rt(P.nativeEvent,M.current),q=qn({x:ue,y:Q},oe);b.setState({userSelectionRect:{width:0,height:0,startX:q.x,startY:q.y,x:ue,y:Q}}),re||(P.stopPropagation(),P.preventDefault())};function W(P,X){let{userSelectionRect:oe}=b.getState();if(!oe)return;let{transform:re,nodeLookup:j,edgeLookup:te,connectionLookup:ue,triggerNodeChanges:Q,triggerEdgeChanges:q,defaultEdgeOptions:de}=b.getState(),be={x:oe.startX,y:oe.startY},{x:Ee,y:Te}=bn(be,re),je={startX:be.x,startY:be.y,x:P<Ee?P:Ee,y:X<Te?X:Te,width:Math.abs(P-Ee),height:Math.abs(X-Te)},Ft=O.current,Et=D.current;O.current=new Set(yr(j,je,re,n===gn.Partial,!0).map(Qe=>Qe.id)),D.current=new Set;let _t=de?.selectable??!0;for(let Qe of O.current){let lt=ue.get(Qe);if(lt)for(let{edgeId:ct}of lt.values()){let Je=te.get(ct);Je&&(Je.selectable??_t)&&D.current.add(ct)}}if(!Pa(Ft,O.current)){let Qe=Zn(j,O.current,!0);Q(Qe)}if(!Pa(Et,D.current)){let Qe=Zn(te,D.current);q(Qe)}b.setState({userSelectionRect:je,userSelectionActive:!0,nodesSelectionActive:!1})}function F(){if(!o||!M.current)return;let[P,X]=xr(v.current,M.current,S);k({x:P,y:X}).then(oe=>{if(!T.current||!oe){h.current=requestAnimationFrame(F);return}let{x:re,y:j}=v.current;W(re,j),h.current=requestAnimationFrame(F)})}let $=()=>{cancelAnimationFrame(h.current),h.current=0,E.current=!1};(0,H.useEffect)(()=>()=>$(),[]);let Y=P=>{let{userSelectionRect:X,transform:oe,resetSelectedElements:re}=b.getState();if(!M.current||!X)return;let{x:j,y:te}=rt(P.nativeEvent,M.current);v.current={x:j,y:te};let ue=bn({x:X.startX,y:X.startY},oe);if(!T.current){let Q=t?0:i;if(Math.hypot(j-ue.x,te-ue.y)<=Q)return;re(),s?.(P)}T.current=!0,E.current||(F(),E.current=!0),W(j,te)},U=P=>{if(!N){P.target===C.current&&b.getState().connection.inProgress&&(L.current=!0);return}P.button===0&&(P.target?.releasePointerCapture?.(P.pointerId),!w&&P.target===C.current&&b.getState().userSelectionRect&&z?.(P),b.setState({userSelectionActive:!1,userSelectionRect:null}),T.current&&(l?.(P),b.setState({nodesSelectionActive:O.current.size>0})),$())},ee=P=>{P.target?.releasePointerCapture?.(P.pointerId),$()},ne=r===!0||Array.isArray(r)&&r.includes(0);return(0,B.jsxs)("div",{className:Ie(["react-flow__pane",{draggable:ne,dragging:x,selection:e}]),onClick:N?void 0:Wa(z,C),onContextMenu:Wa(I,C),onWheel:Wa(_,C),onPointerEnter:N?void 0:p,onPointerMove:N?Y:m,onPointerUp:U,onPointerCancel:N?ee:void 0,onPointerDownCapture:N?V:void 0,onClickCapture:N?R:void 0,onPointerLeave:f,ref:C,style:Lr,children:[y,(0,B.jsx)(ax,{})]})}function Ua({id:e,store:t,unselect:n=!1,nodeRef:r}){let{addSelectedNodes:o,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:l}=t.getState(),c=s.get(e);if(!c){l?.("012",tt.error012(e));return}t.setState({nodesSelectionActive:!1}),c.selected?(n||c.selected&&a)&&(i({nodes:[c],edges:[]}),requestAnimationFrame(()=>r?.current?.blur())):o([e])}function Ad({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:r,nodeId:o,isSelectable:i,nodeClickDistance:a}){let s=Se(),[l,c]=(0,H.useState)(!1),u=(0,H.useRef)();return(0,H.useEffect)(()=>{if(!t)return u.current=Mc({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{Ua({id:d,store:s,nodeRef:e})},onDragStart:()=>{c(!0)},onDragStop:()=>{c(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,s,e]),(0,H.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:r,domNode:e.current,isSelectable:i,nodeId:o,nodeClickDistance:a})},[n,r,t,i,e,o,a]),l}var cx=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Od(){let e=Se();return(0,H.useCallback)(n=>{let{nodeExtent:r,snapToGrid:o,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:l,nodeLookup:c,nodeOrigin:u}=e.getState(),d=new Map,p=cx(a),m=o?i[0]:5,f=o?i[1]:5,y=n.direction.x*m*n.factor,h=n.direction.y*f*n.factor;for(let[,b]of c){if(!p(b))continue;let w={x:b.internals.positionAbsolute.x+y,y:b.internals.positionAbsolute.y+h};o&&(w=Xn(w,i));let{position:g,positionAbsolute:x}=Ca({nodeId:b.id,nextPosition:w,nodeLookup:c,nodeExtent:r,nodeOrigin:u,onError:s});b.position=g,b.internals.positionAbsolute=x,d.set(b.id,b)}l(d)},[])}var Xa=(0,H.createContext)(null),dx=Xa.Provider;Xa.Consumer;var Ld=()=>(0,H.useContext)(Xa),ux=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Hd=(0,H.createContext)(null);function px({children:e}){let t=ge(ux,Me);return(0,B.jsx)(Hd.Provider,{value:t,children:e})}function mx(){let e=(0,H.useContext)(Hd);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var fx={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},gx=(e,t,n)=>r=>{let{connectionClickStartHandle:o,connectionMode:i,connection:a}=r,{fromHandle:s,toHandle:l,isValid:c}=a;if(!s&&!o)return fx;let u=l?.nodeId===e&&l?.id===t&&l?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:u,clickConnecting:o?.nodeId===e&&o?.id===t&&o?.type===n,isPossibleEndHandle:i===Xt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!o,valid:u&&c}};function hx({type:e="source",position:t=ie.Top,isValidConnection:n,isConnectable:r=!0,isConnectableStart:o=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:l,className:c,onMouseDown:u,onTouchStart:d,...p},m){let f=a||null,y=e==="target",h=Se(),b=Ld(),{connectOnClick:w,noPanClassName:g,rfId:x}=mx(),{connectingFrom:k,connectingTo:S,clickConnecting:N,isPossibleEndHandle:C,connectionInProcess:M,clickConnectionInProcess:O,valid:D}=ge(gx(b,f,e),Me);b||h.getState().onError?.("010",tt.error010());let L=E=>{let{defaultEdgeOptions:z,onConnect:I,hasDefaultEdges:_}=h.getState(),R={...z,...E};if(_){let{edges:V,setEdges:W,onError:F}=h.getState();W(Y0(R,V,{onError:F}))}I?.(R),s?.(R)},T=E=>{if(!b)return;let z=Ta(E.nativeEvent);if(o&&(z&&E.button===0||!z)){let I=h.getState();Ir.onPointerDown(E.nativeEvent,{handleDomNode:E.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:y,handleId:f,nodeId:b,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(..._)=>h.getState().onConnectEnd?.(..._),updateConnection:I.updateConnection,onConnect:L,isValidConnection:n||((..._)=>h.getState().isValidConnection?.(..._)??!0),getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}z?u?.(E):d?.(E)},v=E=>{let{onClickConnectStart:z,onClickConnectEnd:I,connectionClickStartHandle:_,connectionMode:R,isValidConnection:V,lib:W,rfId:F,nodeLookup:$,connection:Y}=h.getState();if(!b||!_&&!o)return;if(!_){z?.(E.nativeEvent,{nodeId:b,handleId:f,handleType:e}),h.setState({connectionClickStartHandle:{nodeId:b,type:e,id:f}});return}let U=za(E.target),ee=n||V,{connection:ne,isValid:P}=Ir.isValid(E.nativeEvent,{handle:{nodeId:b,id:f,type:e},connectionMode:R,fromNodeId:_.nodeId,fromHandleId:_.id||null,fromType:_.type,isValidConnection:ee,flowId:F,doc:U,lib:W,nodeLookup:$});P&&ne&&L(ne);let X=structuredClone(Y);delete X.inProgress,X.toPosition=X.toHandle?X.toHandle.position:null,I?.(E,X),h.setState({connectionClickStartHandle:null})};return(0,B.jsx)("div",{"data-handleid":f,"data-nodeid":b,"data-handlepos":t,"data-id":`${x}-${b}-${f}-${e}`,className:Ie(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",g,c,{source:!y,target:y,connectable:r,connectablestart:o,connectableend:i,clickconnecting:N,connectingfrom:k,connectingto:S,valid:D,connectionindicator:r&&(!M||C)&&(M||O?i:o)}]),onMouseDown:T,onTouchStart:T,onClick:w?v:void 0,ref:m,...p,children:l})}var wn=(0,H.memo)(Rd(hx));function bx({data:e,isConnectable:t,sourcePosition:n=ie.Bottom}){return(0,B.jsxs)(B.Fragment,{children:[e?.label,(0,B.jsx)(wn,{type:"source",position:n,isConnectable:t})]})}function yx({data:e,isConnectable:t,targetPosition:n=ie.Top,sourcePosition:r=ie.Bottom}){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label,(0,B.jsx)(wn,{type:"source",position:r,isConnectable:t})]})}function xx(){return null}function wx({data:e,isConnectable:t,targetPosition:n=ie.Top}){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(wn,{type:"target",position:n,isConnectable:t}),e?.label]})}var Dr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},ud={input:bx,default:yx,output:wx,group:xx};function vx(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var kx=e=>{let{width:t,height:n,x:r,y:o}=Un(e.nodeLookup,{filter:i=>!!i.selected});return{width:ot(t)?t:null,height:ot(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`}};function Sx({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let r=Se(),{width:o,height:i,transformString:a,userSelectionActive:s}=ge(kx,Me),l=Od(),c=(0,H.useRef)(null);(0,H.useEffect)(()=>{n||c.current?.focus({preventScroll:!0})},[n]);let u=!s&&o!==null&&i!==null;if(Ad({nodeRef:c,disabled:!u}),!u)return null;let d=e?m=>{let f=r.getState().nodes.filter(y=>y.selected);e(m,f)}:void 0,p=m=>{Object.prototype.hasOwnProperty.call(Dr,m.key)&&(m.preventDefault(),l({direction:Dr[m.key],factor:m.shiftKey?4:1}))};return(0,B.jsx)("div",{className:Ie(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,B.jsx)("div",{ref:c,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:p,style:{width:o,height:i}})})}var pd=typeof window<"u"?window:void 0,Cx=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Bd({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:l,selectionKeyCode:c,selectionOnDrag:u,selectionMode:d,onSelectionStart:p,onSelectionEnd:m,multiSelectionKeyCode:f,panActivationKeyCode:y,zoomActivationKeyCode:h,elementsSelectable:b,zoomOnScroll:w,zoomOnPinch:g,panOnScroll:x,panOnScrollSpeed:k,panOnScrollMode:S,zoomOnDoubleClick:N,panOnDrag:C,autoPanOnSelection:M,defaultViewport:O,translateExtent:D,minZoom:L,maxZoom:T,preventScrolling:v,onSelectionContextMenu:E,noWheelClassName:z,noPanClassName:I,disableKeyboardA11y:_,onViewportChange:R,isControlledViewport:V}){let{nodesSelectionActive:W,userSelectionActive:F}=ge(Cx,Me),$=Co(c,{target:pd}),Y=Co(y,{target:pd}),U=Y||C,ee=Y||x,ne=u&&U!==!0,P=$||F||ne;return tx({deleteKeyCode:l,multiSelectionKeyCode:f}),(0,B.jsx)(rx,{onPaneContextMenu:i,elementsSelectable:b,zoomOnScroll:w,zoomOnPinch:g,panOnScroll:ee,panOnScrollSpeed:k,panOnScrollMode:S,zoomOnDoubleClick:N,panOnDrag:!$&&U,defaultViewport:O,translateExtent:D,minZoom:L,maxZoom:T,zoomActivationKeyCode:h,preventScrolling:v,noWheelClassName:z,noPanClassName:I,onViewportChange:R,isControlledViewport:V,paneClickDistance:s,selectionOnDrag:ne,children:(0,B.jsxs)(lx,{onSelectionStart:p,onSelectionEnd:m,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:r,onPaneMouseLeave:o,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:U,autoPanOnSelection:M,isSelecting:!!P,selectionMode:d,selectionKeyPressed:$,paneClickDistance:s,selectionOnDrag:ne,children:[e,W&&(0,B.jsx)(Sx,{onSelectionContextMenu:E,noPanClassName:I,disableKeyboardA11y:_})]})})}Bd.displayName="FlowRenderer";var Nx=(0,H.memo)(Bd),Mx=e=>t=>e?yr(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function Ex(e){return ge((0,H.useCallback)(Mx(e),[e]),Me)}var _x=e=>e.updateNodeInternals;function Ix(){let e=ge(_x),[t]=(0,H.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let r=new Map;n.forEach(o=>{let i=o.target.getAttribute("data-id");r.set(i,{id:i,nodeElement:o.target,force:!0})}),e(r)}));return(0,H.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Px({node:e,nodeType:t,hasDimensions:n,resizeObserver:r}){let o=Se(),i=(0,H.useRef)(null),a=(0,H.useRef)(null),s=(0,H.useRef)(e.sourcePosition),l=(0,H.useRef)(e.targetPosition),c=(0,H.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,H.useEffect)(()=>{i.current&&!e.hidden&&(!u||a.current!==i.current)&&(a.current&&r?.unobserve(a.current),r?.observe(i.current),a.current=i.current)},[u,e.hidden]),(0,H.useEffect)(()=>()=>{a.current&&(r?.unobserve(a.current),a.current=null)},[]),(0,H.useEffect)(()=>{if(i.current){let d=c.current!==t,p=s.current!==e.sourcePosition,m=l.current!==e.targetPosition;(d||p||m)&&(c.current=t,s.current=e.sourcePosition,l.current=e.targetPosition,o.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function zx({id:e,onClick:t,onMouseEnter:n,onMouseMove:r,onMouseLeave:o,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:l,nodesConnectable:c,nodesFocusable:u,resizeObserver:d,noDragClassName:p,noPanClassName:m,disableKeyboardA11y:f,rfId:y,nodeTypes:h,nodeClickDistance:b,onError:w}){let{node:g,internals:x,isParent:k}=ge(P=>{let X=P.nodeLookup.get(e),oe=P.parentLookup.has(e);return{node:X,internals:X.internals,isParent:oe}},Me),S=g.type||"default",N=h?.[S]||ud[S];N===void 0&&(w?.("003",tt.error003(S)),S="default",N=h?.default||ud.default);let C=!!(g.draggable||s&&typeof g.draggable>"u"),M=!!(g.selectable||l&&typeof g.selectable>"u"),O=!!(g.connectable||c&&typeof g.connectable>"u"),D=!!(g.focusable||u&&typeof g.focusable>"u"),L=Se(),T=_a(g),v=Px({node:g,nodeType:S,hasDimensions:T,resizeObserver:d}),E=Ad({nodeRef:v,disabled:g.hidden||!C,noDragClassName:p,handleSelector:g.dragHandle,nodeId:e,isSelectable:M,nodeClickDistance:b}),z=Od();if(g.hidden)return null;let I=ft(g),_=vx(g),R=M||C||t||n||r||o,V=n?P=>n(P,{...x.userNode}):void 0,W=r?P=>r(P,{...x.userNode}):void 0,F=o?P=>o(P,{...x.userNode}):void 0,$=i?P=>i(P,{...x.userNode}):void 0,Y=a?P=>a(P,{...x.userNode}):void 0,U=P=>{let{selectNodesOnDrag:X,nodeDragThreshold:oe}=L.getState();M&&(!X||!C||oe>0)&&Ua({id:e,store:L,nodeRef:v}),t&&t(P,{...x.userNode})},ee=P=>{if(!(Ra(P.nativeEvent)||f)){if(ba.includes(P.key)&&M){let X=P.key==="Escape";Ua({id:e,store:L,unselect:X,nodeRef:v})}else if(C&&g.selected&&Object.prototype.hasOwnProperty.call(Dr,P.key)){P.preventDefault();let{ariaLabelConfig:X}=L.getState();L.setState({ariaLiveMessage:X["node.a11yDescription.ariaLiveMessage"]({direction:P.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),z({direction:Dr[P.key],factor:P.shiftKey?4:1})}}},ne=()=>{if(f||!v.current?.matches(":focus-visible"))return;let{transform:P,width:X,height:oe,autoPanOnNodeFocus:re,setCenter:j}=L.getState();if(!re)return;yr(new Map([[e,g]]),{x:0,y:0,width:X,height:oe},P,!0).length>0||j(g.position.x+I.width/2,g.position.y+I.height/2,{zoom:P[2]})};return(0,B.jsx)("div",{className:Ie(["react-flow__node",`react-flow__node-${S}`,{[m]:C},g.className,{selected:g.selected,selectable:M,parent:k,draggable:C,dragging:E}]),ref:v,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:R?"all":"none",visibility:T?"visible":"hidden",...g.style,..._},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:W,onMouseLeave:F,onContextMenu:$,onClick:U,onDoubleClick:Y,onKeyDown:D?ee:void 0,tabIndex:D?0:void 0,onFocus:D?ne:void 0,role:g.ariaRole??(D?"group":void 0),"aria-roledescription":"node","aria-describedby":f?void 0:`${Md}-${y}`,"aria-label":g.ariaLabel,...g.domAttributes,children:(0,B.jsx)(dx,{value:e,children:(0,B.jsx)(N,{id:e,data:g.data,type:S,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:g.selected??!1,selectable:M,draggable:C,deletable:g.deletable??!0,isConnectable:O,sourcePosition:g.sourcePosition,targetPosition:g.targetPosition,dragging:E,dragHandle:g.dragHandle,zIndex:x.z,parentId:g.parentId,...I})})})}var Rx=(0,H.memo)(zx),Tx=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function $d(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:r,onError:o}=ge(Tx,Me),i=Ex(e.onlyRenderVisibleElements),a=Ix();return(0,B.jsx)("div",{className:"react-flow__nodes",style:Lr,children:i.map(s=>(0,B.jsx)(Rx,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:r,nodeClickDistance:e.nodeClickDistance,onError:o},s))})}$d.displayName="NodeRenderer";var Dx=(0,H.memo)($d);function Ax(e){return ge((0,H.useCallback)(n=>{if(!e)return n.edges.map(o=>o.id);let r=[];if(n.width&&n.height)for(let o of n.edges){let i=n.nodeLookup.get(o.source),a=n.nodeLookup.get(o.target);i&&a&&hc({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&r.push(o.id)}return r},[e]),Me)}var Ox=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,B.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Lx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,B.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},md={[Fn.Arrow]:Ox,[Fn.ArrowClosed]:Lx};function Hx(e){let t=Se();return(0,H.useMemo)(()=>Object.prototype.hasOwnProperty.call(md,e)?md[e]:(t.getState().onError?.("009",tt.error009(e)),null),[e])}var Bx=({id:e,type:t,color:n,width:r=12.5,height:o=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let l=Hx(t);return l?(0,B.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${r}`,markerHeight:`${o}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,B.jsx)(l,{color:n,strokeWidth:a})}):null},Fd=({defaultColor:e,rfId:t})=>{let n=ge(i=>i.edges),r=ge(i=>i.defaultEdgeOptions),o=(0,H.useMemo)(()=>xc(n,{id:t,defaultColor:e,defaultMarkerStart:r?.markerStart,defaultMarkerEnd:r?.markerEnd}),[n,r,t,e]);return o.length?(0,B.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,B.jsx)("defs",{children:o.map(i=>(0,B.jsx)(Bx,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Fd.displayName="MarkerDefinitions";var $x=(0,H.memo)(Fd);function Wd({x:e,y:t,label:n,labelStyle:r,labelShowBg:o=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:l,className:c,...u}){let[d,p]=(0,H.useState)({x:1,y:0,width:0,height:0}),m=Ie(["react-flow__edge-textwrapper",c]),f=(0,H.useRef)(null);return(0,H.useEffect)(()=>{if(f.current){let y=f.current.getBBox();p({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,B.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:m,visibility:d.width?"visible":"hidden",...u,children:[o&&(0,B.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,B.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:f,style:r,children:n}),l]}):null}Wd.displayName="EdgeText";var Fx=(0,H.memo)(Wd);function Hr({path:e,labelX:t,labelY:n,label:r,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:l,interactionWidth:c=20,...u}){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("path",{...u,d:e,fill:"none",className:Ie(["react-flow__edge-path",u.className])}),c?(0,B.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:c,className:"react-flow__edge-interaction"}):null,r&&ot(t)&&ot(n)?(0,B.jsx)(Fx,{x:t,y:n,label:r,labelStyle:o,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:l}):null]})}function fd({pos:e,x1:t,y1:n,x2:r,y2:o}){return e===ie.Left||e===ie.Right?[.5*(t+r),n]:[t,.5*(n+o)]}function Vd({sourceX:e,sourceY:t,sourcePosition:n=ie.Bottom,targetX:r,targetY:o,targetPosition:i=ie.Top}){let[a,s]=fd({pos:n,x1:e,y1:t,x2:r,y2:o}),[l,c]=fd({pos:i,x1:r,y1:o,x2:e,y2:t}),[u,d,p,m]=Sr({sourceX:e,sourceY:t,targetX:r,targetY:o,sourceControlX:a,sourceControlY:s,targetControlX:l,targetControlY:c});return[`M${e},${t} C${a},${s} ${l},${c} ${r},${o}`,u,d,p,m]}function Ud(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,sourcePosition:a,targetPosition:s,label:l,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,interactionWidth:b})=>{let[w,g,x]=Vd({sourceX:n,sourceY:r,sourcePosition:a,targetX:o,targetY:i,targetPosition:s}),k=e.isInternal?void 0:t;return(0,B.jsx)(Hr,{id:k,path:w,labelX:g,labelY:x,label:l,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,interactionWidth:b})})}var Wx=Ud({isInternal:!1}),Gd=Ud({isInternal:!0});Wx.displayName="SimpleBezierEdge";Gd.displayName="SimpleBezierEdgeInternal";function Xd(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:p,sourcePosition:m=ie.Bottom,targetPosition:f=ie.Top,markerEnd:y,markerStart:h,pathOptions:b,interactionWidth:w})=>{let[g,x,k]=So({sourceX:n,sourceY:r,sourcePosition:m,targetX:o,targetY:i,targetPosition:f,borderRadius:b?.borderRadius,offset:b?.offset,stepPosition:b?.stepPosition}),S=e.isInternal?void 0:t;return(0,B.jsx)(Hr,{id:S,path:g,labelX:x,labelY:k,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:p,markerEnd:y,markerStart:h,interactionWidth:w})})}var qd=Xd({isInternal:!1}),Yd=Xd({isInternal:!0});qd.displayName="SmoothStepEdge";Yd.displayName="SmoothStepEdgeInternal";function Kd(e){return(0,H.memo)(({id:t,...n})=>{let r=e.isInternal?void 0:t;return(0,B.jsx)(qd,{...n,id:r,pathOptions:(0,H.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Vx=Kd({isInternal:!1}),Zd=Kd({isInternal:!0});Vx.displayName="StepEdge";Zd.displayName="StepEdgeInternal";function jd(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:p,markerEnd:m,markerStart:f,interactionWidth:y})=>{let[h,b,w]=Nr({sourceX:n,sourceY:r,targetX:o,targetY:i}),g=e.isInternal?void 0:t;return(0,B.jsx)(Hr,{id:g,path:h,labelX:b,labelY:w,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:c,labelBgPadding:u,labelBgBorderRadius:d,style:p,markerEnd:m,markerStart:f,interactionWidth:y})})}var Ux=jd({isInternal:!1}),Qd=jd({isInternal:!0});Ux.displayName="StraightEdge";Qd.displayName="StraightEdgeInternal";function Jd(e){return(0,H.memo)(({id:t,sourceX:n,sourceY:r,targetX:o,targetY:i,sourcePosition:a=ie.Bottom,targetPosition:s=ie.Top,label:l,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,pathOptions:b,interactionWidth:w})=>{let[g,x,k]=Cr({sourceX:n,sourceY:r,sourcePosition:a,targetX:o,targetY:i,targetPosition:s,curvature:b?.curvature}),S=e.isInternal?void 0:t;return(0,B.jsx)(Hr,{id:S,path:g,labelX:x,labelY:k,label:l,labelStyle:c,labelShowBg:u,labelBgStyle:d,labelBgPadding:p,labelBgBorderRadius:m,style:f,markerEnd:y,markerStart:h,interactionWidth:w})})}var Gx=Jd({isInternal:!1}),eu=Jd({isInternal:!0});Gx.displayName="BezierEdge";eu.displayName="BezierEdgeInternal";var gd={default:eu,straight:Qd,step:Zd,smoothstep:Yd,simplebezier:Gd},hd={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Xx=(e,t,n)=>n===ie.Left?e-t:n===ie.Right?e+t:e,qx=(e,t,n)=>n===ie.Top?e-t:n===ie.Bottom?e+t:e,bd="react-flow__edgeupdater";function yd({position:e,centerX:t,centerY:n,radius:r=10,onMouseDown:o,onMouseEnter:i,onMouseOut:a,type:s}){return(0,B.jsx)("circle",{onMouseDown:o,onMouseEnter:i,onMouseOut:a,className:Ie([bd,`${bd}-${s}`]),cx:Xx(t,r,e),cy:qx(n,r,e),r,stroke:"transparent",fill:"transparent"})}function Yx({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:r,sourceY:o,targetX:i,targetY:a,sourcePosition:s,targetPosition:l,onReconnect:c,onReconnectStart:u,onReconnectEnd:d,setReconnecting:p,setUpdateHover:m}){let f=Se(),y=(x,k)=>{if(x.button!==0)return;let{autoPanOnConnect:S,domNode:N,connectionMode:C,connectionRadius:M,lib:O,onConnectStart:D,cancelConnection:L,nodeLookup:T,rfId:v,panBy:E,updateConnection:z}=f.getState(),I=k.type==="target",_=(W,F)=>{p(!1),d?.(W,n,k.type,F)},R=W=>c?.(n,W),V=(W,F)=>{p(!0),u?.(x,n,k.type),D?.(W,F)};Ir.onPointerDown(x.nativeEvent,{autoPanOnConnect:S,connectionMode:C,connectionRadius:M,domNode:N,handleId:k.id,nodeId:k.nodeId,nodeLookup:T,isTarget:I,edgeUpdaterType:k.type,lib:O,flowId:v,cancelConnection:L,panBy:E,isValidConnection:(...W)=>f.getState().isValidConnection?.(...W)??!0,onConnect:R,onConnectStart:V,onConnectEnd:(...W)=>f.getState().onConnectEnd?.(...W),onReconnectEnd:_,updateConnection:z,getTransform:()=>f.getState().transform,getFromHandle:()=>f.getState().connection.fromHandle,dragThreshold:f.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},h=x=>y(x,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),b=x=>y(x,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),w=()=>m(!0),g=()=>m(!1);return(0,B.jsxs)(B.Fragment,{children:[(e===!0||e==="source")&&(0,B.jsx)(yd,{position:s,centerX:r,centerY:o,radius:t,onMouseDown:h,onMouseEnter:w,onMouseOut:g,type:"source"}),(e===!0||e==="target")&&(0,B.jsx)(yd,{position:l,centerX:i,centerY:a,radius:t,onMouseDown:b,onMouseEnter:w,onMouseOut:g,type:"target"})]})}function Kx({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:r,onClick:o,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:l,onMouseLeave:c,reconnectRadius:u,onReconnect:d,onReconnectStart:p,onReconnectEnd:m,rfId:f,edgeTypes:y,noPanClassName:h,onError:b,disableKeyboardA11y:w}){let g=ge(j=>j.edgeLookup.get(e)),x=ge(j=>j.defaultEdgeOptions);g=x?{...x,...g}:g;let k=g.type||"default",S=y?.[k]||gd[k];S===void 0&&(b?.("011",tt.error011(k)),k="default",S=y?.default||gd.default);let N=!!(g.focusable||t&&typeof g.focusable>"u"),C=typeof d<"u"&&(g.reconnectable||n&&typeof g.reconnectable>"u"),M=!!(g.selectable||r&&typeof g.selectable>"u"),O=(0,H.useRef)(null),[D,L]=(0,H.useState)(!1),[T,v]=(0,H.useState)(!1),E=Se(),{zIndex:z=g.zIndex,sourceX:I,sourceY:_,targetX:R,targetY:V,sourcePosition:W,targetPosition:F}=ge((0,H.useCallback)(j=>{let te=j.nodeLookup.get(g.source),ue=j.nodeLookup.get(g.target);if(!te||!ue)return hd;let Q=yc({id:e,sourceNode:te,targetNode:ue,sourceHandle:g.sourceHandle||null,targetHandle:g.targetHandle||null,connectionMode:j.connectionMode,onError:b}),q=gc({selected:g.selected,zIndex:g.zIndex,sourceNode:te,targetNode:ue,elevateOnSelect:j.elevateEdgesOnSelect,zIndexMode:j.zIndexMode});return{...Q||hd,zIndex:q}},[g.source,g.target,g.sourceHandle,g.targetHandle,g.selected,g.zIndex]),Me),$=(0,H.useMemo)(()=>g.markerStart?`url('#${Mr(g.markerStart,f)}')`:void 0,[g.markerStart,f]),Y=(0,H.useMemo)(()=>g.markerEnd?`url('#${Mr(g.markerEnd,f)}')`:void 0,[g.markerEnd,f]);if(g.hidden||I===null||_===null||R===null||V===null)return null;let U=j=>{let{addSelectedEdges:te,unselectNodesAndEdges:ue,multiSelectionActive:Q}=E.getState();M&&(E.setState({nodesSelectionActive:!1}),g.selected&&Q?(ue({nodes:[],edges:[g]}),O.current?.blur()):te([e])),o&&o(j,g)},ee=i?j=>{i(j,{...g})}:void 0,ne=a?j=>{a(j,{...g})}:void 0,P=s?j=>{s(j,{...g})}:void 0,X=l?j=>{l(j,{...g})}:void 0,oe=c?j=>{c(j,{...g})}:void 0,re=j=>{if(!w&&ba.includes(j.key)&&M){let{unselectNodesAndEdges:te,addSelectedEdges:ue}=E.getState();j.key==="Escape"?(O.current?.blur(),te({edges:[g]})):ue([e])}};return(0,B.jsx)("svg",{style:{zIndex:z},children:(0,B.jsxs)("g",{className:Ie(["react-flow__edge",`react-flow__edge-${k}`,g.className,h,{selected:g.selected,animated:g.animated,inactive:!M&&!o,updating:D,selectable:M}]),onClick:U,onDoubleClick:ee,onContextMenu:ne,onMouseEnter:P,onMouseMove:X,onMouseLeave:oe,onKeyDown:N?re:void 0,tabIndex:N?0:void 0,role:g.ariaRole??(N?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":g.ariaLabel===null?void 0:g.ariaLabel||`Edge from ${g.source} to ${g.target}`,"aria-describedby":N?`${Ed}-${f}`:void 0,ref:O,...g.domAttributes,children:[!T&&(0,B.jsx)(S,{id:e,source:g.source,target:g.target,type:g.type,selected:g.selected,animated:g.animated,selectable:M,deletable:g.deletable??!0,label:g.label,labelStyle:g.labelStyle,labelShowBg:g.labelShowBg,labelBgStyle:g.labelBgStyle,labelBgPadding:g.labelBgPadding,labelBgBorderRadius:g.labelBgBorderRadius,sourceX:I,sourceY:_,targetX:R,targetY:V,sourcePosition:W,targetPosition:F,data:g.data,style:g.style,sourceHandleId:g.sourceHandle,targetHandleId:g.targetHandle,markerStart:$,markerEnd:Y,pathOptions:"pathOptions"in g?g.pathOptions:void 0,interactionWidth:g.interactionWidth}),C&&(0,B.jsx)(Yx,{edge:g,isReconnectable:C,reconnectRadius:u,onReconnect:d,onReconnectStart:p,onReconnectEnd:m,sourceX:I,sourceY:_,targetX:R,targetY:V,sourcePosition:W,targetPosition:F,setUpdateHover:L,setReconnecting:v})]})})}var Zx=(0,H.memo)(Kx),jx=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function tu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:r,noPanClassName:o,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:l,onEdgeMouseLeave:c,onEdgeClick:u,reconnectRadius:d,onEdgeDoubleClick:p,onReconnectStart:m,onReconnectEnd:f,disableKeyboardA11y:y}){let{edgesFocusable:h,edgesReconnectable:b,elementsSelectable:w,onError:g}=ge(jx,Me),x=Ax(t);return(0,B.jsxs)("div",{className:"react-flow__edges",children:[(0,B.jsx)($x,{defaultColor:e,rfId:n}),x.map(k=>(0,B.jsx)(Zx,{id:k,edgesFocusable:h,edgesReconnectable:b,elementsSelectable:w,noPanClassName:o,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:l,onMouseLeave:c,onClick:u,reconnectRadius:d,onDoubleClick:p,onReconnectStart:m,onReconnectEnd:f,rfId:n,onError:g,edgeTypes:r,disableKeyboardA11y:y},k))]})}tu.displayName="EdgeRenderer";var Qx=(0,H.memo)(tu),xd=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Jx({children:e}){let t=Se(),n=(0,H.useRef)(null),[r]=(0,H.useState)(()=>t.getState().transform);return Td(()=>{let o=null,i=()=>{let a=t.getState().transform;o&&a[0]===o[0]&&a[1]===o[1]&&a[2]===o[2]||(o=a,n.current&&(n.current.style.transform=xd(a)))};return i(),t.subscribe(i)},[t]),(0,B.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:xd(r)},children:e})}function ew(e){let t=Ga(),n=(0,H.useRef)(!1);(0,H.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var tw=e=>e.panZoom?.syncViewport;function nw(e){let t=ge(tw),n=Se();return(0,H.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function wd(e){return e.connection.inProgress?{...e.connection,to:qn(e.connection.to,e.transform)}:{...e.connection}}function ow(e){return e?n=>{let r=wd(n);return e(r)}:wd}function rw(e){let t=ow(e);return ge(t,Me)}var iw=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function aw({containerStyle:e,style:t,type:n,component:r}){let{nodesConnectable:o,width:i,height:a,isValid:s,inProgress:l}=ge(iw,Me);return!(i&&o&&l)?null:(0,B.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,B.jsx)("g",{className:Ie(["react-flow__connection",wa(s)]),children:(0,B.jsx)(nu,{style:t,type:n,CustomComponent:r,isValid:s})})})}var nu=({style:e,type:t=xt.Bezier,CustomComponent:n,isValid:r})=>{let{inProgress:o,from:i,fromNode:a,fromHandle:s,fromPosition:l,to:c,toNode:u,toHandle:d,toPosition:p,pointer:m}=rw();if(!o)return;if(n)return(0,B.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:c.x,toY:c.y,fromPosition:l,toPosition:p,connectionStatus:wa(r),toNode:u,toHandle:d,pointer:m});let f="",y={sourceX:i.x,sourceY:i.y,sourcePosition:l,targetX:c.x,targetY:c.y,targetPosition:p};switch(t){case xt.Bezier:[f]=Cr(y);break;case xt.SimpleBezier:[f]=Vd(y);break;case xt.Step:[f]=So({...y,borderRadius:0});break;case xt.SmoothStep:[f]=So(y);break;default:[f]=Nr(y)}return(0,B.jsx)("path",{d:f,fill:"none",className:"react-flow__connection-path",style:e})};nu.displayName="ConnectionLine";var sw={};function vd(e=sw){let t=(0,H.useRef)(e),n=Se();(0,H.useEffect)(()=>{},[e])}function lw(){let e=Se(),t=(0,H.useRef)(!1);(0,H.useEffect)(()=>{},[])}function ou({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:r,onEdgeClick:o,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:c,onNodeContextMenu:u,onSelectionContextMenu:d,onSelectionStart:p,onSelectionEnd:m,connectionLineType:f,connectionLineStyle:y,connectionLineComponent:h,connectionLineContainerStyle:b,selectionKeyCode:w,selectionOnDrag:g,selectionMode:x,multiSelectionKeyCode:k,panActivationKeyCode:S,zoomActivationKeyCode:N,deleteKeyCode:C,onlyRenderVisibleElements:M,elementsSelectable:O,defaultViewport:D,translateExtent:L,minZoom:T,maxZoom:v,preventScrolling:E,defaultMarkerColor:z,zoomOnScroll:I,zoomOnPinch:_,panOnScroll:R,panOnScrollSpeed:V,panOnScrollMode:W,zoomOnDoubleClick:F,panOnDrag:$,autoPanOnSelection:Y,onPaneClick:U,onPaneMouseEnter:ee,onPaneMouseMove:ne,onPaneMouseLeave:P,onPaneScroll:X,onPaneContextMenu:oe,paneClickDistance:re,nodeClickDistance:j,onEdgeContextMenu:te,onEdgeMouseEnter:ue,onEdgeMouseMove:Q,onEdgeMouseLeave:q,reconnectRadius:de,onReconnect:be,onReconnectStart:Ee,onReconnectEnd:Te,noDragClassName:je,noWheelClassName:Ft,noPanClassName:Et,disableKeyboardA11y:_t,nodeExtent:Qe,rfId:lt,viewport:ct,onViewportChange:Je,nodesDraggable:eo}){return vd(e),vd(t),lw(),ew(n),nw(ct),(0,B.jsx)(Nx,{onPaneClick:U,onPaneMouseEnter:ee,onPaneMouseMove:ne,onPaneMouseLeave:P,onPaneContextMenu:oe,onPaneScroll:X,paneClickDistance:re,deleteKeyCode:C,selectionKeyCode:w,selectionOnDrag:g,selectionMode:x,onSelectionStart:p,onSelectionEnd:m,multiSelectionKeyCode:k,panActivationKeyCode:S,zoomActivationKeyCode:N,elementsSelectable:O,zoomOnScroll:I,zoomOnPinch:_,zoomOnDoubleClick:F,panOnScroll:R,panOnScrollSpeed:V,panOnScrollMode:W,panOnDrag:$,autoPanOnSelection:Y,defaultViewport:D,translateExtent:L,minZoom:T,maxZoom:v,onSelectionContextMenu:d,preventScrolling:E,noDragClassName:je,noWheelClassName:Ft,noPanClassName:Et,disableKeyboardA11y:_t,onViewportChange:Je,isControlledViewport:!!ct,children:(0,B.jsxs)(Jx,{children:[(0,B.jsx)(Qx,{edgeTypes:t,onEdgeClick:o,onEdgeDoubleClick:a,onReconnect:be,onReconnectStart:Ee,onReconnectEnd:Te,onlyRenderVisibleElements:M,onEdgeContextMenu:te,onEdgeMouseEnter:ue,onEdgeMouseMove:Q,onEdgeMouseLeave:q,reconnectRadius:de,defaultMarkerColor:z,noPanClassName:Et,disableKeyboardA11y:_t,rfId:lt}),(0,B.jsx)(aw,{style:y,type:f,component:h,containerStyle:b}),(0,B.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,B.jsx)(Dx,{nodeTypes:e,onNodeClick:r,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:c,onNodeContextMenu:u,nodeClickDistance:j,onlyRenderVisibleElements:M,noPanClassName:Et,noDragClassName:je,disableKeyboardA11y:_t,nodeExtent:Qe,rfId:lt,nodesDraggable:eo}),(0,B.jsx)("div",{className:"react-flow__viewport-portal"})]})})}ou.displayName="GraphView";var cw=(0,H.memo)(ou),dw=Ea("React Flow","https://reactflow.dev/"),kd=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:o,height:i,fitView:a,fitViewOptions:s,minZoom:l=.5,maxZoom:c=2,nodeOrigin:u,nodeExtent:d,zIndexMode:p="basic"}={})=>{let m=new Map,f=new Map,y=new Map,h=new Map,b=r??t??[],w=n??e??[],g=u??[0,0],x=d??Vn;Ba(y,h,b);let{nodesInitialized:k}=Er(w,m,f,{nodeOrigin:g,nodeExtent:x,zIndexMode:p}),S=[0,0,1];if(a&&o&&i){let N=Un(m,{filter:D=>!!((D.width||D.initialWidth)&&(D.height||D.initialHeight))}),{x:C,y:M,zoom:O}=ko(N,o,i,l,c,s?.padding??.1);S=[C,M,O]}return{rfId:"1",width:o??0,height:i??0,transform:S,nodes:w,nodesInitialized:k,nodeLookup:m,parentLookup:f,edges:b,edgeLookup:h,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:r!==void 0,panZoom:null,minZoom:l,maxZoom:c,translateExtent:Vn,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Xt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:g,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...xa},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:dw,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:ya,zIndexMode:p,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},uw=({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:o,height:i,fitView:a,fitViewOptions:s,minZoom:l,maxZoom:c,nodeOrigin:u,nodeExtent:d,zIndexMode:p})=>jc((m,f)=>{async function y(){let{nodeLookup:h,panZoom:b,fitViewOptions:w,fitViewResolver:g,width:x,height:k,minZoom:S,maxZoom:N}=f();b&&(await cc({nodes:h,width:x,height:k,panZoom:b,minZoom:S,maxZoom:N},w),g?.resolve(!0),m({fitViewResolver:null}))}return{...kd({nodes:e,edges:t,width:o,height:i,fitView:a,fitViewOptions:s,minZoom:l,maxZoom:c,nodeOrigin:u,nodeExtent:d,defaultNodes:n,defaultEdges:r,zIndexMode:p}),setNodes:h=>{let{nodeLookup:b,parentLookup:w,nodeOrigin:g,elevateNodesOnSelect:x,fitViewQueued:k,zIndexMode:S,nodesSelectionActive:N}=f(),{nodesInitialized:C,hasSelectedNodes:M}=Er(h,b,w,{nodeOrigin:g,nodeExtent:d,elevateNodesOnSelect:x,checkEquality:!0,zIndexMode:S}),O=N&&M;k&&C?(y(),m({nodes:h,nodesInitialized:C,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:O})):m({nodes:h,nodesInitialized:C,nodesSelectionActive:O})},setEdges:h=>{let{connectionLookup:b,edgeLookup:w}=f();Ba(b,w,h),m({edges:h})},setDefaultNodesAndEdges:(h,b)=>{if(h){let{setNodes:w}=f();w(h),m({hasDefaultNodes:!0})}if(b){let{setEdges:w}=f();w(b),m({hasDefaultEdges:!0})}},updateNodeInternals:h=>{let{triggerNodeChanges:b,nodeLookup:w,parentLookup:g,domNode:x,nodeOrigin:k,nodeExtent:S,debug:N,fitViewQueued:C,zIndexMode:M}=f(),{changes:O,updatedInternals:D}=Sc(h,w,g,x,k,S,M);D&&(vc(w,g,{nodeOrigin:k,nodeExtent:S,zIndexMode:M}),C?(y(),m({fitViewQueued:!1,fitViewOptions:void 0})):m({}),O?.length>0&&(N&&console.log("React Flow: trigger node changes",O),b?.(O)))},updateNodePositions:(h,b=!1)=>{let w=[],g=[],{nodeLookup:x,triggerNodeChanges:k,connection:S,updateConnection:N,onNodesChangeMiddlewareMap:C}=f();for(let[M,O]of h){let D=x.get(M),L=!!(D?.expandParent&&D?.parentId&&O?.position),T={id:M,type:"position",position:L?{x:Math.max(0,O.position.x),y:Math.max(0,O.position.y)}:O.position,dragging:b};if(D&&S.inProgress&&S.fromNode.id===D.id){let v=qt(D,S.fromHandle,ie.Left,!0);N({...S,from:v})}L&&D.parentId&&w.push({id:M,parentId:D.parentId,rect:{...O.internals.positionAbsolute,width:O.measured.width??0,height:O.measured.height??0}}),g.push(T)}if(w.length>0){let{parentLookup:M,nodeOrigin:O}=f(),D=_r(w,x,M,O);g.push(...D)}for(let M of C.values())g=M(g);k(g)},triggerNodeChanges:h=>{let{onNodesChange:b,setNodes:w,nodes:g,hasDefaultNodes:x,debug:k}=f();if(h?.length){if(x){let S=Pd(h,g);w(S)}k&&console.log("React Flow: trigger node changes",h),b?.(h)}},triggerEdgeChanges:h=>{let{onEdgesChange:b,setEdges:w,edges:g,hasDefaultEdges:x,debug:k}=f();if(h?.length){if(x){let S=zd(h,g);w(S)}k&&console.log("React Flow: trigger edge changes",h),b?.(h)}},addSelectedNodes:h=>{let{multiSelectionActive:b,edgeLookup:w,nodeLookup:g,triggerNodeChanges:x,triggerEdgeChanges:k}=f();if(b){let S=h.map(N=>xn(N,!0));x(S);return}x(Zn(g,new Set([...h]),!0)),k(Zn(w))},addSelectedEdges:h=>{let{multiSelectionActive:b,edgeLookup:w,nodeLookup:g,triggerNodeChanges:x,triggerEdgeChanges:k}=f();if(b){let S=h.map(N=>xn(N,!0));k(S);return}k(Zn(w,new Set([...h]))),x(Zn(g,new Set,!0))},unselectNodesAndEdges:({nodes:h,edges:b}={})=>{let{edges:w,nodes:g,nodeLookup:x,triggerNodeChanges:k,triggerEdgeChanges:S}=f(),N=h||g,C=b||w,M=[];for(let D of N){if(!D.selected)continue;let L=x.get(D.id);L&&(L.selected=!1),M.push(xn(D.id,!1))}let O=[];for(let D of C)D.selected&&O.push(xn(D.id,!1));k(M),S(O)},setMinZoom:h=>{let{panZoom:b,maxZoom:w}=f();b?.setScaleExtent([h,w]),m({minZoom:h})},setMaxZoom:h=>{let{panZoom:b,minZoom:w}=f();b?.setScaleExtent([w,h]),m({maxZoom:h})},setTranslateExtent:h=>{f().panZoom?.setTranslateExtent(h),m({translateExtent:h})},resetSelectedElements:()=>{let{edges:h,nodes:b,triggerNodeChanges:w,triggerEdgeChanges:g,elementsSelectable:x}=f();if(!x)return;let k=b.reduce((N,C)=>C.selected?[...N,xn(C.id,!1)]:N,[]),S=h.reduce((N,C)=>C.selected?[...N,xn(C.id,!1)]:N,[]);w(k),g(S)},setNodeExtent:h=>{let{nodes:b,nodeLookup:w,parentLookup:g,nodeOrigin:x,elevateNodesOnSelect:k,nodeExtent:S,zIndexMode:N}=f();h[0][0]===S[0][0]&&h[0][1]===S[0][1]&&h[1][0]===S[1][0]&&h[1][1]===S[1][1]||(Er(b,w,g,{nodeOrigin:x,nodeExtent:h,elevateNodesOnSelect:k,checkEquality:!1,zIndexMode:N}),m({nodeExtent:h}))},panBy:h=>{let{transform:b,width:w,height:g,panZoom:x,translateExtent:k}=f();return Cc({delta:h,panZoom:x,transform:b,translateExtent:k,width:w,height:g})},setCenter:async(h,b,w)=>{let{width:g,height:x,maxZoom:k,panZoom:S}=f();if(!S)return!1;let N=typeof w?.zoom<"u"?w.zoom:k;return await S.setViewport({x:g/2-h*N,y:x/2-b*N,zoom:N},{duration:w?.duration,ease:w?.ease,interpolate:w?.interpolate}),!0},cancelConnection:()=>{m({connection:{...xa}})},updateConnection:h=>{m({connection:h})},reset:()=>m({...kd()})}},Object.is);function pw({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:r,initialWidth:o,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:l,fitView:c,nodeOrigin:u,nodeExtent:d,zIndexMode:p,children:m}){let[f]=(0,H.useState)(()=>uw({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,width:o,height:i,fitView:c,minZoom:a,maxZoom:s,fitViewOptions:l,nodeOrigin:u,nodeExtent:d,zIndexMode:p}));return(0,B.jsx)(E0,{value:f,children:(0,B.jsx)(j0,{children:(0,B.jsx)(px,{children:m})})})}function mw({children:e,nodes:t,edges:n,defaultNodes:r,defaultEdges:o,width:i,height:a,fitView:s,fitViewOptions:l,minZoom:c,maxZoom:u,nodeOrigin:d,nodeExtent:p,zIndexMode:m}){return(0,H.useContext)(Ar)?(0,B.jsx)(B.Fragment,{children:e}):(0,B.jsx)(pw,{initialNodes:t,initialEdges:n,defaultNodes:r,defaultEdges:o,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:l,initialMinZoom:c,initialMaxZoom:u,nodeOrigin:d,nodeExtent:p,zIndexMode:m,children:e})}var fw={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function gw({nodes:e,edges:t,defaultNodes:n,defaultEdges:r,className:o,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:l,onInit:c,onMove:u,onMoveStart:d,onMoveEnd:p,onConnect:m,onConnectStart:f,onConnectEnd:y,onClickConnectStart:h,onClickConnectEnd:b,onNodeMouseEnter:w,onNodeMouseMove:g,onNodeMouseLeave:x,onNodeContextMenu:k,onNodeDoubleClick:S,onNodeDragStart:N,onNodeDrag:C,onNodeDragStop:M,onNodesDelete:O,onEdgesDelete:D,onDelete:L,onSelectionChange:T,onSelectionDragStart:v,onSelectionDrag:E,onSelectionDragStop:z,onSelectionContextMenu:I,onSelectionStart:_,onSelectionEnd:R,onBeforeDelete:V,connectionMode:W,connectionLineType:F=xt.Bezier,connectionLineStyle:$,connectionLineComponent:Y,connectionLineContainerStyle:U,deleteKeyCode:ee="Backspace",selectionKeyCode:ne="Shift",selectionOnDrag:P=!1,selectionMode:X=gn.Full,panActivationKeyCode:oe="Space",multiSelectionKeyCode:re=Yn()?"Meta":"Control",zoomActivationKeyCode:j=Yn()?"Meta":"Control",snapToGrid:te,snapGrid:ue,onlyRenderVisibleElements:Q=!1,selectNodesOnDrag:q,nodesDraggable:de,autoPanOnNodeFocus:be,nodesConnectable:Ee,nodesFocusable:Te,nodeOrigin:je=_d,edgesFocusable:Ft,edgesReconnectable:Et,elementsSelectable:_t=!0,defaultViewport:Qe=$0,minZoom:lt=.5,maxZoom:ct=2,translateExtent:Je=Vn,preventScrolling:eo=!0,nodeExtent:nn,defaultMarkerColor:Do="#b1b1b7",zoomOnScroll:to=!0,zoomOnPinch:Ao=!0,panOnScroll:Wt=!1,panOnScrollSpeed:_n=.5,panOnScrollMode:Be=Lt.Free,zoomOnDoubleClick:Oo=!0,panOnDrag:Lo=!0,onPaneClick:Ho,onPaneMouseEnter:hi,onPaneMouseMove:bi,onPaneMouseLeave:In,onPaneScroll:no,onPaneContextMenu:Bo,paneClickDistance:yi=1,nodeClickDistance:xi=0,children:wi,onReconnect:vi,onReconnectStart:ki,onReconnectEnd:Si,onEdgeContextMenu:Ci,onEdgeDoubleClick:Ni,onEdgeMouseEnter:Mi,onEdgeMouseMove:on,onEdgeMouseLeave:It,reconnectRadius:$o=10,onNodesChange:Pt,onEdgesChange:zt,noDragClassName:Ei="nodrag",noWheelClassName:Fo="nowheel",noPanClassName:rn="nopan",fitView:oo,fitViewOptions:Wo,connectOnClick:_i,attributionPosition:A,proOptions:G,defaultEdgeOptions:Z,elevateNodesOnSelect:ce=!0,elevateEdgesOnSelect:we=!1,disableKeyboardA11y:dt=!1,autoPanOnConnect:an,autoPanOnNodeDrag:wf,autoPanOnSelection:vf=!0,autoPanSpeed:kf,connectionRadius:Sf,isValidConnection:Cf,onError:Nf,style:Mf,id:Os,nodeDragThreshold:Ef,connectionDragThreshold:_f,viewport:If,onViewportChange:Pf,width:zf,height:Rf,colorMode:Tf="light",debug:Df,onScroll:Ls,ariaLabelConfig:Af,zIndexMode:Hs="basic",...Of},Lf){let Ii=Os||"1",Hf=U0(Tf),Bf=(0,H.useCallback)(Bs=>{Bs.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Ls?.(Bs)},[Ls]);return(0,B.jsx)("div",{"data-testid":"rf__wrapper",...Of,onScroll:Bf,style:{...Mf,...fw},ref:Lf,className:Ie(["react-flow",o,Hf]),id:Os,role:"application",children:(0,B.jsxs)(mw,{nodes:e,edges:t,width:zf,height:Rf,fitView:oo,fitViewOptions:Wo,minZoom:lt,maxZoom:ct,nodeOrigin:je,nodeExtent:nn,zIndexMode:Hs,children:[(0,B.jsx)(V0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:r,onConnect:m,onConnectStart:f,onConnectEnd:y,onClickConnectStart:h,onClickConnectEnd:b,nodesDraggable:de,autoPanOnNodeFocus:be,nodesConnectable:Ee,nodesFocusable:Te,edgesFocusable:Ft,edgesReconnectable:Et,elementsSelectable:_t,elevateNodesOnSelect:ce,elevateEdgesOnSelect:we,minZoom:lt,maxZoom:ct,nodeExtent:nn,onNodesChange:Pt,onEdgesChange:zt,snapToGrid:te,snapGrid:ue,connectionMode:W,translateExtent:Je,connectOnClick:_i,defaultEdgeOptions:Z,fitView:oo,fitViewOptions:Wo,onNodesDelete:O,onEdgesDelete:D,onDelete:L,onNodeDragStart:N,onNodeDrag:C,onNodeDragStop:M,onSelectionDrag:E,onSelectionDragStart:v,onSelectionDragStop:z,onMove:u,onMoveStart:d,onMoveEnd:p,noPanClassName:rn,nodeOrigin:je,rfId:Ii,autoPanOnConnect:an,autoPanOnNodeDrag:wf,autoPanSpeed:kf,onError:Nf,connectionRadius:Sf,isValidConnection:Cf,selectNodesOnDrag:q,nodeDragThreshold:Ef,connectionDragThreshold:_f,onBeforeDelete:V,debug:Df,ariaLabelConfig:Af,zIndexMode:Hs}),(0,B.jsx)(cw,{onInit:c,onNodeClick:s,onEdgeClick:l,onNodeMouseEnter:w,onNodeMouseMove:g,onNodeMouseLeave:x,onNodeContextMenu:k,onNodeDoubleClick:S,nodeTypes:i,edgeTypes:a,connectionLineType:F,connectionLineStyle:$,connectionLineComponent:Y,connectionLineContainerStyle:U,selectionKeyCode:ne,selectionOnDrag:P,selectionMode:X,deleteKeyCode:ee,multiSelectionKeyCode:re,panActivationKeyCode:oe,zoomActivationKeyCode:j,onlyRenderVisibleElements:Q,defaultViewport:Qe,translateExtent:Je,minZoom:lt,maxZoom:ct,preventScrolling:eo,zoomOnScroll:to,zoomOnPinch:Ao,zoomOnDoubleClick:Oo,panOnScroll:Wt,panOnScrollSpeed:_n,panOnScrollMode:Be,panOnDrag:Lo,autoPanOnSelection:vf,onPaneClick:Ho,onPaneMouseEnter:hi,onPaneMouseMove:bi,onPaneMouseLeave:In,onPaneScroll:no,onPaneContextMenu:Bo,paneClickDistance:yi,nodeClickDistance:xi,onSelectionContextMenu:I,onSelectionStart:_,onSelectionEnd:R,onReconnect:vi,onReconnectStart:ki,onReconnectEnd:Si,onEdgeContextMenu:Ci,onEdgeDoubleClick:Ni,onEdgeMouseEnter:Mi,onEdgeMouseMove:on,onEdgeMouseLeave:It,reconnectRadius:$o,defaultMarkerColor:Do,noDragClassName:Ei,noWheelClassName:Fo,noPanClassName:rn,rfId:Ii,disableKeyboardA11y:dt,nodeExtent:nn,viewport:If,onViewportChange:Pf,nodesDraggable:de}),(0,B.jsx)(B0,{onSelectionChange:T}),wi,(0,B.jsx)(D0,{proOptions:G,position:A}),(0,B.jsx)(T0,{rfId:Ii,disableKeyboardA11y:dt})]})})}var ru=Rd(gw);var hw=e=>e.domNode?.querySelector(".react-flow__viewport-portal");function iu({children:e}){let t=ge(hw);return t?(0,Cd.createPortal)(e,t):null}function au(e){let[t,n]=(0,H.useState)(e),r=(0,H.useCallback)(o=>n(i=>Pd(o,i)),[]);return[t,n,r]}function su(e){let[t,n]=(0,H.useState)(e),r=(0,H.useCallback)(o=>n(i=>zd(o,i)),[]);return[t,n,r]}var Jk=tt.error014();function bw({dimensions:e,lineWidth:t,variant:n,className:r}){return(0,B.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Ie(["react-flow__background-pattern",n,r])})}function yw({radius:e,className:t}){return(0,B.jsx)("circle",{cx:e,cy:e,r:e,className:Ie(["react-flow__background-pattern","dots",t])})}var wt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(wt||(wt={}));var xw={[wt.Dots]:1,[wt.Lines]:1,[wt.Cross]:6},ww=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function lu({id:e,variant:t=wt.Dots,gap:n=20,size:r,lineWidth:o=1,offset:i=0,color:a,bgColor:s,style:l,className:c,patternClassName:u}){let d=(0,H.useRef)(null),{transform:p,patternId:m}=ge(ww,Me),f=r||xw[t],y=t===wt.Dots,h=t===wt.Cross,b=Array.isArray(n)?n:[n,n],w=[b[0]*p[2]||1,b[1]*p[2]||1],g=f*p[2],x=Array.isArray(i)?i:[i,i],k=h?[g,g]:w,S=[x[0]*p[2]||1+k[0]/2,x[1]*p[2]||1+k[1]/2],N=`${m}${e||""}`;return(0,B.jsxs)("svg",{className:Ie(["react-flow__background",c]),style:{...l,...Lr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,B.jsx)("pattern",{id:N,x:p[0]%w[0],y:p[1]%w[1],width:w[0],height:w[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:y?(0,B.jsx)(yw,{radius:g/2,className:u}):(0,B.jsx)(bw,{dimensions:k,lineWidth:o,variant:t,className:u})}),(0,B.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${N})`})]})}lu.displayName="Background";var cu=(0,H.memo)(lu);function vw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,B.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function kw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,B.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Sw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,B.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Cw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,B.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Nw(){return(0,B.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,B.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Tr({children:e,className:t,...n}){return(0,B.jsx)("button",{type:"button",className:Ie(["react-flow__controls-button",t]),...n,children:e})}var Mw=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function du({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:r=!0,fitViewOptions:o,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:l,className:c,children:u,position:d="bottom-left",orientation:p="vertical","aria-label":m}){let f=Se(),{isInteractive:y,minZoomReached:h,maxZoomReached:b,ariaLabelConfig:w}=ge(Mw,Me),{zoomIn:g,zoomOut:x,fitView:k}=Ga(),S=()=>{g(),i?.()},N=()=>{x(),a?.()},C=()=>{k(o),s?.()},M=()=>{f.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),l?.(!y)};return(0,B.jsxs)(Or,{className:Ie(["react-flow__controls",p==="horizontal"?"horizontal":"vertical",c]),position:d,style:e,"data-testid":"rf__controls","aria-label":m??w["controls.ariaLabel"],children:[t&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Tr,{onClick:S,className:"react-flow__controls-zoomin",title:w["controls.zoomIn.ariaLabel"],"aria-label":w["controls.zoomIn.ariaLabel"],disabled:b,children:(0,B.jsx)(vw,{})}),(0,B.jsx)(Tr,{onClick:N,className:"react-flow__controls-zoomout",title:w["controls.zoomOut.ariaLabel"],"aria-label":w["controls.zoomOut.ariaLabel"],disabled:h,children:(0,B.jsx)(kw,{})})]}),n&&(0,B.jsx)(Tr,{className:"react-flow__controls-fitview",onClick:C,title:w["controls.fitView.ariaLabel"],"aria-label":w["controls.fitView.ariaLabel"],children:(0,B.jsx)(Sw,{})}),r&&(0,B.jsx)(Tr,{className:"react-flow__controls-interactive",onClick:M,title:w["controls.interactive.ariaLabel"],"aria-label":w["controls.interactive.ariaLabel"],children:y?(0,B.jsx)(Nw,{}):(0,B.jsx)(Cw,{})}),u]})}du.displayName="Controls";var e2=(0,H.memo)(du);function Ew({id:e,x:t,y:n,width:r,height:o,style:i,color:a,strokeColor:s,strokeWidth:l,className:c,borderRadius:u,shapeRendering:d,selected:p,onClick:m}){let{background:f,backgroundColor:y}=i||{},h=a||f||y;return(0,B.jsx)("rect",{className:Ie(["react-flow__minimap-node",{selected:p},c]),x:t,y:n,rx:u,ry:u,width:r,height:o,style:{fill:h,stroke:s,strokeWidth:l},shapeRendering:d,onClick:m?b=>m(b,e):void 0})}var _w=(0,H.memo)(Ew),Iw=e=>e.nodes.map(t=>t.id),Va=e=>e instanceof Function?e:()=>e;function Pw({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:r=5,nodeStrokeWidth:o,nodeComponent:i=_w,onClick:a}){let s=ge(Iw,Me),l=Va(t),c=Va(e),u=Va(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,B.jsx)(B.Fragment,{children:s.map(p=>(0,B.jsx)(Rw,{id:p,nodeColorFunc:l,nodeStrokeColorFunc:c,nodeClassNameFunc:u,nodeBorderRadius:r,nodeStrokeWidth:o,NodeComponent:i,onClick:a,shapeRendering:d},p))})}function zw({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:r,nodeBorderRadius:o,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:l}){let{node:c,x:u,y:d,width:p,height:m}=ge(f=>{let y=f.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let h=y.internals.userNode,{x:b,y:w}=y.internals.positionAbsolute,{width:g,height:x}=ft(h);return{node:h,x:b,y:w,width:g,height:x}},Me);return!c||c.hidden||!_a(c)?null:(0,B.jsx)(s,{x:u,y:d,width:p,height:m,style:c.style,selected:!!c.selected,className:r(c),color:t(c),borderRadius:o,strokeColor:n(c),strokeWidth:i,shapeRendering:a,onClick:l,id:c.id})}var Rw=(0,H.memo)(zw),Tw=(0,H.memo)(Pw),Dw=200,Aw=150,Ow=e=>!e.hidden,Lw=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Na(Un(e.nodeLookup,{filter:Ow}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Sd=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Hw=(e,t)=>Sd(e.viewBB,t.viewBB)&&Sd(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Bw="react-flow__minimap-desc";function uu({style:e,className:t,nodeStrokeColor:n,nodeColor:r,nodeClassName:o="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:l,maskColor:c,maskStrokeColor:u,maskStrokeWidth:d,position:p="bottom-right",onClick:m,onNodeClick:f,pannable:y=!1,zoomable:h=!1,ariaLabel:b,inversePan:w,zoomStep:g=1,offsetScale:x=5}){let k=Se(),S=(0,H.useRef)(null),{boundingRect:N,viewBB:C,rfId:M,panZoom:O,translateExtent:D,flowWidth:L,flowHeight:T,ariaLabelConfig:v}=ge(Lw,Hw),E=e?.width??Dw,z=e?.height??Aw,I=N.width/E,_=N.height/z,R=Math.max(I,_),V=R*E,W=R*z,F=x*R,$=N.x-(V-N.width)/2-F,Y=N.y-(W-N.height)/2-F,U=V+F*2,ee=W+F*2,ne=`${Bw}-${M}`,P=(0,H.useRef)(0),X=(0,H.useRef)();P.current=R,(0,H.useEffect)(()=>{if(S.current&&O)return X.current=zc({domNode:S.current,panZoom:O,getTransform:()=>k.getState().transform,getViewScale:()=>P.current}),()=>{X.current?.destroy()}},[O]),(0,H.useEffect)(()=>{X.current?.update({translateExtent:D,width:L,height:T,inversePan:w,pannable:y,zoomStep:g,zoomable:h})},[y,h,w,g,D,L,T]);let oe=m?te=>{let[ue,Q]=X.current?.pointer(te)||[0,0];m(te,{x:ue,y:Q})}:void 0,re=f?(0,H.useCallback)((te,ue)=>{let Q=k.getState().nodeLookup.get(ue).internals.userNode;f(te,Q)},[]):void 0,j=b??v["minimap.ariaLabel"];return(0,B.jsx)(Or,{position:p,style:{...e,"--xy-minimap-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*R:void 0,"--xy-minimap-node-background-color-props":typeof r=="string"?r:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:Ie(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,B.jsxs)("svg",{width:E,height:z,viewBox:`${$} ${Y} ${U} ${ee}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":ne,ref:S,onClick:oe,children:[j&&(0,B.jsx)("title",{id:ne,children:j}),(0,B.jsx)(Tw,{onClick:re,nodeColor:r,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:o,nodeStrokeWidth:a,nodeComponent:s}),(0,B.jsx)("path",{className:"react-flow__minimap-mask",d:`M${$-F},${Y-F}h${U+F*2}v${ee+F*2}h${-U-F*2}z
        M${C.x},${C.y}h${C.width}v${C.height}h${-C.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}uu.displayName="MiniMap";var pu=(0,H.memo)(uu),$w=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Fw={[Yt.Line]:"right",[Yt.Handle]:"bottom-right"};function Ww({nodeId:e,position:t,variant:n=Yt.Handle,className:r,style:o=void 0,children:i,color:a,minWidth:s=10,minHeight:l=10,maxWidth:c=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:p,autoScale:m=!0,shouldResize:f,onResizeStart:y,onResize:h,onResizeEnd:b}){let w=Ld(),g=typeof e=="string"?e:w,x=Se(),k=(0,H.useRef)(null),S=n===Yt.Handle,N=ge((0,H.useCallback)($w(S&&m),[S,m]),Me),C=(0,H.useRef)(null),M=t??Fw[n];(0,H.useEffect)(()=>{if(!(!k.current||!g))return C.current||(C.current=Oc({domNode:k.current,nodeId:g,getStoreItems:()=>{let{nodeLookup:D,transform:L,snapGrid:T,snapToGrid:v,nodeOrigin:E,domNode:z}=x.getState();return{nodeLookup:D,transform:L,snapGrid:T,snapToGrid:v,nodeOrigin:E,paneDomNode:z}},onChange:(D,L)=>{let{triggerNodeChanges:T,nodeLookup:v,parentLookup:E,nodeOrigin:z}=x.getState(),I=[],_={x:D.x,y:D.y},R=v.get(g);if(R&&R.expandParent&&R.parentId){let V=R.origin??z,W=D.width??R.measured.width??0,F=D.height??R.measured.height??0,$={id:R.id,parentId:R.parentId,rect:{width:W,height:F,...Ia({x:D.x??R.position.x,y:D.y??R.position.y},{width:W,height:F},R.parentId,v,V)}},Y=_r([$],v,E,z);I.push(...Y),_.x=D.x?Math.max(V[0]*W,D.x):void 0,_.y=D.y?Math.max(V[1]*F,D.y):void 0}if(_.x!==void 0&&_.y!==void 0){let V={id:g,type:"position",position:{..._}};I.push(V)}if(D.width!==void 0&&D.height!==void 0){let W={id:g,type:"dimensions",resizing:!0,setAttributes:p?p==="horizontal"?"width":"height":!0,dimensions:{width:D.width,height:D.height}};I.push(W)}for(let V of L){let W={...V,type:"position"};I.push(W)}T(I)},onEnd:({width:D,height:L})=>{let T={id:g,type:"dimensions",resizing:!1,dimensions:{width:D,height:L}};x.getState().triggerNodeChanges([T])}})),C.current.update({controlPosition:M,boundaries:{minWidth:s,minHeight:l,maxWidth:c,maxHeight:u},keepAspectRatio:d,resizeDirection:p,onResizeStart:y,onResize:h,onResizeEnd:b,shouldResize:f}),()=>{C.current?.destroy()}},[M,s,l,c,u,d,y,h,b,f]);let O=M.split("-");return(0,B.jsx)("div",{className:Ie(["react-flow__resize-control","nodrag",...O,n,r]),ref:k,style:{...o,scale:N,...a&&{[S?"backgroundColor":"borderColor"]:a}},children:i})}var t2=(0,H.memo)(Ww);var mu=/[\w\u4e00-\u9fa5.-]/;var Vw=/[\p{L}\p{N}]/u;function fu(e){return e===void 0?!0:!Vw.test(e)}function gu(e){return e.trim().replace(/\s+/g," ")}function Uw(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let r=e[n+1];if(r==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(r==="{"){let o=e.indexOf("}",n+2);if(o===-1){n+=1;continue}let i=e.slice(n+2,o);i.trim()!==""&&fu(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:o+1}}),n=o+1;continue}if(r!==void 0&&mu.test(r)){let o=n+1;for(;o<e.length;){let i=e[o];if(i===void 0||!mu.test(i))break;o+=1}fu(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,o),start:n,end:o}}),n=o;continue}n+=1}return t}function Gw(e){let t=[];for(let n of Uw(e))n.kind==="ref"&&t.push(n.token);return t}function hu(e,t){let n=Gw(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let r=new Map;for(let l of t){let c=gu(l.name);if(c==="")continue;let u=r.get(c);u===void 0?r.set(c,[l.id]):u.includes(l.id)||u.push(l.id)}let o=[],i=new Set,a=[],s=new Set;for(let l of n){let c=gu(l.name),u=r.get(c);if(u===void 0){s.has(c)||(s.add(c),a.push(c));continue}for(let d of u)i.has(d)||(i.add(d),o.push(d))}return a.length>0?{mode:"invalid",ids:o,unknown:a}:{mode:"explicit",ids:o,unknown:[]}}var Xw=/\.(png|jpe?g|webp|gif|bmp)$/i;function Fr(e){return e.type.startsWith("image/")?!0:Xw.test(e.name)}var bu=30,yu=200;function xu(e,t){if(t&&Math.abs(t.x-e.x)<yu&&Math.abs(t.y-e.y)<yu){let n={x:t.x+bu,y:t.y+bu};return{position:n,next:n}}return{position:e,next:e}}var qw=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function qa(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!qw.test(n));return t.length?t.join(" "):void 0}function vn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function wu(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function vu(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function Yw(e){let t=!1,n=e.map(r=>{let o=r;if(!(o.style!==void 0||o.className!==void 0||o.animated!==void 0||o.markerEnd!==void 0||o.markerStart!==void 0))return r;t=!0;let a={...r};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function Ya(e,t,n,r){let o=new Set(n),i=typeof r?.size=="string"&&r.size?r.size:"1024x1024",a=typeof r?.quality=="string"&&r.quality?r.quality:"high",s=y=>typeof y=="string"?y:"",l=y=>typeof y=="number"&&Number.isFinite(y)?y:0,c=y=>{if(!y||typeof y!="object")return null;let{x:h,y:b}=y;return typeof h!="number"||typeof b!="number"||!Number.isFinite(h)||!Number.isFinite(b)?null:{x:h,y:b}},u=new Set(["image","prompt","group"]),d=[],p=new Set,m=e.flatMap(y=>{if(!y||typeof y!="object")return d.push({id:"?",reason:"\u4E0D\u662F\u4E00\u4E2A\u8282\u70B9\u5BF9\u8C61"}),[];let h=s(y.id);if(!h)return d.push({id:"?",reason:"\u6CA1\u6709 id"}),[];let b=s(y.type);if(!u.has(b))return d.push({id:h,reason:b?`\u8BA4\u4E0D\u51FA\u7684\u8282\u70B9\u7C7B\u578B\u300C${b}\u300D`:"\u6CA1\u6709\u8282\u70B9\u7C7B\u578B"}),[];let w=c(y.position);if(!w)return d.push({id:h,reason:"\u6CA1\u6709\u6709\u6548\u5750\u6807"}),[];let g=y.data;if(!g||typeof g!="object")return d.push({id:h,reason:"\u6CA1\u6709 data"}),[];p.add(h);let x=qa(y.className),k={...y,position:w};x===void 0?delete k.className:k.className=x;let S=g;if(b==="image"){let N=s(S.registryId);return[{...k,type:"image",data:{...S,registryId:N,name:s(S.name),url:s(S.url),size:l(S.size),ext:s(S.ext),...o.has(N)?{missing:!0}:{}}}]}return b==="group"?[{...k,type:"group",data:{...S,name:s(S.name),imageCount:l(S.imageCount),totalSize:l(S.totalSize)}}]:[{...k,type:"prompt",data:{...S,prompt:s(S.prompt),size:s(S.size)||i,quality:s(S.quality)||a,outputDir:s(S.outputDir),status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}]}),f=Yw(t.filter(y=>p.has(s(y?.source))&&p.has(s(y?.target))));return{nodes:m,edges:f,dropped:d}}function ku(e){return e.filter(t=>t.type==="prompt").map(t=>({nodeId:t.id,taskId:String(t.data.taskId??"")})).filter(t=>!!t.taskId)}function it(e,t,n){let r=!1,o=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(r=!0,{...i,data:{...i.data,...n}}));return r?o:e}function Su(e,t,n){let r=0,o=e.map(i=>i.type!=="prompt"||!t.has(i.id)||i.data.outputDir===n?i:(r+=1,{...i,data:{...i.data,outputDir:n}}));return{nodes:r?o:e,changedCount:r}}function Cu(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let r=new Map(e.map(a=>[a.id,a])),o=r.get(n.source),i=r.get(n.target);return o?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):o?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):o?.type==="prompt"?i?.type==="image":!1}function Kw(e,t){let n=new Map,r=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=r.get(i.source);s?s.push(i.target):r.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:r}}function Zw(e,t,n){let{byId:r,outEdges:o}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,l=[...o.get(i.id)??[]];for(;l.length;){let c=l.pop();if(a.has(c))continue;a.add(c);let u=r.get(c);u&&(u.type==="prompt"?s.add(c):u.type==="group"&&l.push(...o.get(c)??[]))}n.set(i.data.registryId,s.size)}}function Nu(e,t,n){let{byId:r,incoming:o}=n;if(t.has(e))return{count:0,ids:[]};if(r.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let l of o.get(e)??[]){let c=r.get(l);if(c){if(c.type==="image")a+=1,s.push(c.data.registryId);else if(c.type==="group"){let u=Nu(l,t,n);a+=u.count,s.push(...u.ids)}}}return t.delete(e),{count:a,ids:s}}function jw(e,t,n,r,o){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:l}=Nu(a.id,new Set,t),c=new Set(l);n.set(a.id,c.size),r.set(a.id,Array.from(c).reduce((u,d)=>u+(i.get(d)??0),0)),o.set(a.id,s-c.size)}}function Mu(e,t){let n=new Map,r=new Map,o=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(r.set(s.id,0),o.set(s.id,0),i.set(s.id,0));let a=Kw(e,t);return Zw(e,a,n),jw(e,a,r,o,i),{refCounts:n,groupCounts:r,groupSizes:o,groupDups:i}}function Qw(e,t,n){let r=new Map(e.map(s=>[s.id,s])),o=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let l=r.get(s);l&&(l.type==="image"?o.push(l):l.type==="group"&&t.filter(c=>c.target===s).forEach(c=>a.push(c.source)))}return o}function Eu(e,t,n,r){let o=Qw(e,t,n),i=o.map(c=>({id:c.id,name:c.type==="image"?c.data.name:""})),a=hu(r,i);if(a.mode==="all")return{images:o,unknown:[],mode:"all"};let s=new Map(o.map(c=>[c.id,c])),l=[];for(let c of a.ids){let u=s.get(c);u&&l.push(u)}return{images:l,unknown:a.unknown,mode:a.mode}}function Br(e,t){let n=e.position.x-t.position.x,r=e.position.y-t.position.y;return n*n+r*r}function $r(e,t){return t.reduce((n,r)=>!n||Br(e,r)<Br(e,n)?r:n,null)}function No(e,t,n){let r=`${t.id}->${n.id}`;e.pairs.has(r)||(e.next.push({id:r,source:t.id,target:n.id}),e.pairs.add(r),e.connected.add(t.id))}function Jw(e,t,n,r){for(let o of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=$r(o,n);if(i&&o.position.y>i.position.y){No(e,i,o);continue}let a=$r(o,r.filter(s=>s.position.y>=o.position.y));a&&(!i||Br(o,a)<Br(o,i))?No(e,o,a):i&&No(e,o,i)}}function ev(e,t,n,r){for(let o of t)if(!e.next.some(a=>a.source===o.id&&r.has(a.target))){let a=$r(o,n);a&&No(e,o,a)}}function tv(e,t,n,r){let o=n.filter(a=>e.next.some(s=>s.target===a.id&&r.get(s.source)?.type==="image")),i=o.length?o:n;for(let a of t){if(e.next.some(c=>{let u=r.get(c.source)?.type;return c.target===a.id&&(u==="image"||u==="group")}))continue;let l=$r(a,i);l&&No(e,l,a)}}function Ka(e,t){let n=e.filter(s=>s.type==="prompt"),r=e.filter(s=>s.type==="group");if(!n.length&&!r.length)return t;let o=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return Jw(a,e,n,r),ev(a,r,n,i),tv(a,n,r,o),a.next}function _u(e,t,n){if(!n.size)return t;let r=e.filter(o=>n.has(o.id));return r.length?Ka(r,t):t}function Iu(e,t){return{nodes:e.map(n=>{let r=qa(n.className),o={...n};if(r===void 0?delete o.className:o.className=r,o.type==="image"){let{maskDataUrl:d,...p}=o.data;return{...o,data:p}}if(o.type!=="prompt")return o;let{startedAtMs:i,resultCount:a,message:s,cancelRequested:l,...c}=o.data,u=d=>typeof d=="string"?d:"";return{...o,data:{...c,prompt:u(c.prompt),size:u(c.size),quality:u(c.quality)||"high",outputDir:u(c.outputDir),status:"idle"}}}),edges:[...t]}}async function Pe(e,t){let n=await fetch(`imagora/${e}`,t),r=await n.text(),o=null;try{o=r?JSON.parse(r):null}catch{o=null}if(!n.ok){let i=(o&&typeof o=="object"&&"error"in o?String(o.error):"")||r.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:o})}return o}function Ye(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var Pu=()=>Pe("config");var zu=()=>Pe("assets"),Wr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),r=await n.text(),o=r?JSON.parse(r):{};if(!n.ok)throw new Error(o.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return o.image},Za=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Pe(`history?${t.toString()}`)},Vr=(e=14)=>Pe(`history/stats?days=${e}`),ja=e=>Pe("generate",Ye(e)),Ru=e=>Pe(`task?id=${encodeURIComponent(e)}`),Tu=e=>Pe("task/cancel",Ye({id:e})),Du=(e,t,n)=>Pe("workflow/save",Ye({name:e,nodes:t,edges:n})),Qa=()=>Pe("workflow/list"),Au=e=>Pe(`workflow/load?name=${encodeURIComponent(e)}`),Ja=(e,t)=>Pe("recovery/save",Ye({...Iu(e,t)})),Ou=()=>Pe("recovery/latest"),Ur=e=>Pe("settings",Ye({model:e})),Gr=e=>Pe("settings",Ye({profile:e})),Xr=e=>Pe("settings",Ye({outputDir:e})),Lu=e=>Pe("settings",Ye({budget:e})),Hu=e=>Pe("settings",Ye({imagoraRoot:e})),Bu=(e={})=>Pe("pick-folder",Ye(e)),qr=e=>Pe("reveal",Ye({path:e})),es=e=>Pe("provider",Ye(e)),$u=e=>Pe("provider/probe",Ye(e));var Fu=e=>Pe("budget",Ye(e));function me(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var nv=/^=== (.+) ===\s*$/,Vu=/^```(?:text)?\s*$/,ov=/^ratio:\s*(\d+):(\d+)\s*$/,rv=/^ratio\b/i;function Wu(e){return e.split(`
`).some(t=>Vu.test(t))}function Uu(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),r=[],o=[],i=[],a=[];if(n.forEach((c,u)=>{let d=c.match(nv)?.[1];d!==void 0&&a.push({title:d.trim(),line:u})}),a.length===0){let c=t.trim();return c&&i.push(c),Wu(t)&&o.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:r,issues:o,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),Wu(s)&&o.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let l=new Set;for(let c=0;c<a.length;c++){let u=a[c];if(u===void 0)continue;let{title:d}=u,p=u.line+1,m=a[c+1],f=m===void 0?n.length:m.line,y=n.slice(p,f);if(l.has(d)){o.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}l.add(d);let h=[];y.forEach((O,D)=>{Vu.test(O)&&h.push(D)});let b=h[0],w=h[h.length-1];if(b===void 0||w===void 0){o.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let g=y.slice(0,b).join(`
`).trim();g&&i.push(g);let x=y.slice(b+1,w),k=x.findIndex(O=>O.trim()!=="");if(k===-1){o.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let S=(x[k]??"").trim(),N=S.match(ov);if(!N){rv.test(S)?o.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${S}`}):o.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let C=`${N[1]}:${N[2]}`,M=x.slice(k+1).join(`
`).trim();if(!M){o.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}r.push({title:d,ratio:C,prompt:M})}return{cards:r,issues:o,skippedText:i}}function ns(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let r=t.find(o=>o.label.includes(`(${e}`));return r?{value:r.value,fallback:!1}:{value:n.value,fallback:!0}}function Gu(e,t,n){let r=cv(n,e.length);return e.map((o,i)=>{let a=ns(o.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:r[i]??n,data:{prompt:o.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:o.title}}})}var ts=380,iv=326,Xu=40,av=74,sv=ts+Xu,lv=iv+av,Yr=3;function cv(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,r=[];for(let o=0;o<n;o++){let i=Math.floor(o/Yr),a=o%Yr,s=Math.min(Yr,n-i*Yr),l=s*ts+(s-1)*Xu,c=e.x+ts/2-l/2;r.push({x:c+a*sv,y:e.y+i*lv})}return r}var dv={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function Fe(e){let t=e.measured,n=dv[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var Kt={layerGap:60,resultGap:60,nodeGap:16,leftMargin:60,topMargin:40},uv={image:0,group:0,prompt:1},qu="\u63D0\u793A\u8BCD\u751F\u6210";function Yu(e,t,n,r){let o=n.get(e);if(o!==void 0)return o;if(r.has(e))return-1;r.add(e);let i=0;for(let a of t.get(e)??[]){let s=Yu(a,t,n,r);s>=0&&(i=Math.max(i,s+1))}return r.delete(e),n.set(e,i),i}function pv(e,t){return e.type!=="prompt"?null:(t.get(e.id)??[]).slice().sort().join("|")}function mv(e,t,n,r,o){let i=new Map(e.map(y=>[y.id,y])),a=new Map,s=new Map;for(let y of t){if(!i.has(y.source)||!i.has(y.target))continue;let h=a.get(y.target)??[];h.push(y.source),a.set(y.target,h);let b=s.get(y.source)??[];b.push(y.target),s.set(y.source,b)}let l=new Map,c=new Set;for(let y of e){let h=Math.max(Yu(y.id,a,l,c),uv[y.type]);l.set(y.id,h)}let u=new Map;for(let y of e){let h=u.get(l.get(y.id)??0)??[];h.push(y),u.set(l.get(y.id)??0,h)}let d=[...u.keys()].sort((y,h)=>y-h),p=new Map;for(let y of e)n.has(y.id)||p.set(y.id,{x:y.position.x-(r?.x??0),y:y.position.y-(r?.y??0)});let m=y=>(p.get(y.id)?.x??y.position.x)+Fe(y).width/2,f=new Map;{let y=o;for(let h of d){let b=u.get(h).reduce((w,g)=>{let x=p.get(g.id);return x&&!n.has(g.id)?Math.max(w,x.y+Fe(g).height):Math.max(w,y+Fe(g).height)},y);f.set(h,y),y=b+Kt.layerGap}}return{byId:i,preds:a,succs:s,layerGroups:u,sortedLayers:d,positions:p,centerOf:m,bandY:f}}function fv(e){let{nodes:t,edges:n,moves:r,origin:o,boundsWidth:i}=e;if(!t.length)return t;let a=o?0:Kt.leftMargin,s=o?0:Kt.topMargin,l=mv(t,n,r,o,s),{positions:c}=l;return hv(l,r,a),bv(l,r,a),yv(t,r,a,i,c),t.map(u=>{if(!r.has(u.id))return u;let d=c.get(u.id);return!d||!Number.isFinite(d.x)||!Number.isFinite(d.y)?u:o?{...u,position:{x:d.x+o.x,y:d.y+o.y}}:{...u,position:d}})}function gv(e,t,n){let{byId:r,preds:o,positions:i,centerOf:a}=t,s=(o.get(e.id)??[]).map(l=>r.get(l)).filter(l=>l!==void 0&&i.has(l.id)).map(l=>a(l));return s.length?s.reduce((l,c)=>l+c,0)/s.length:n+Fe(e).width/2}function Ku(e,t,n,r,o){let{layerGroups:i,preds:a,positions:s,bandY:l}=n,c=i.get(e).filter(h=>r.has(h.id));if(!c.length)return;let u=new Map;for(let h of c)u.set(h.id,t(h));let d=h=>pv(h,a),p=[...c].sort((h,b)=>{let w=u.get(h.id),g=u.get(b.id);if(Math.abs(w-g)>=.5)return w-g;let x=d(h),k=d(b);if(x!==null&&k!==null&&x===k&&h.type==="prompt"&&b.type==="prompt"){let S=h.data.title??qu,N=b.data.title??qu,C=S.localeCompare(N,"zh");if(C!==0)return C}return h.position.x-b.position.x}),m=(h,b)=>h.every(w=>d(w)===null||d(w)===d(b)),f=o-Kt.nodeGap,y=0;for(;y<p.length;){let h=p[y];if(h===void 0)break;let b=u.get(h.id),w=y,g=p[w+1];for(;g!==void 0&&Math.abs(u.get(g.id)-b)<.5&&m(p.slice(y,w+1),g);)w+=1,g=p[w+1];let x=p.slice(y,w+1),k=x.reduce((C,M,O)=>C+Fe(M).width+(O?Kt.nodeGap:0),0),S=l.get(e),N=Math.max(f+Kt.nodeGap,b-k/2);for(let C of x)s.set(C.id,{x:N,y:S}),N+=Fe(C).width+Kt.nodeGap;f=N-Kt.nodeGap,y=w+1}}function hv(e,t,n){for(let r of e.sortedLayers)Ku(r,o=>gv(o,e,n),e,t,n)}function bv(e,t,n){let{sortedLayers:r,succs:o,byId:i,positions:a,centerOf:s}=e;for(let l of[...r].reverse())Ku(l,c=>{let u=(o.get(c.id)??[]).map(p=>i.get(p)).filter(p=>p!==void 0&&a.has(p.id)).map(p=>s(p));if(u.length)return u.reduce((p,m)=>p+m,0)/u.length;let d=a.get(c.id);return d?d.x+Fe(c).width/2:n+Fe(c).width/2},e,t,n)}function yv(e,t,n,r,o){if(r!==void 0){let i=e.filter(a=>t.has(a.id));if(i.length){let a=Math.min(...i.map(c=>o.get(c.id).x)),s=Math.max(...i.map(c=>o.get(c.id).x+Fe(c).width)),l=n+r/2-(a+s)/2;if(l!==0)for(let c of i){let u=o.get(c.id);o.set(c.id,{x:u.x+l,y:u.y})}}}}function Zu(e,t,n){if(!n.size)return e;let r=e.filter(p=>n.has(p.id));if(!r.length)return e;let o=t.filter(p=>n.has(p.source)||n.has(p.target)),i=new Set;for(let p of o)n.has(p.source)||i.add(p.source),n.has(p.target)||i.add(p.target);let a=e.filter(p=>i.has(p.id)),s=Math.min(...r.map(p=>p.position.x)),l=Math.max(...r.map(p=>p.position.x+Fe(p).width)),c=Math.min(...r.map(p=>p.position.y)),u=fv({nodes:[...r,...a],edges:o,moves:n,origin:{x:s,y:c},boundsWidth:i.size===0?Math.max(l-s,1):void 0}),d=new Map(u.map(p=>[p.id,p]));return e.map(p=>d.get(p.id)??p)}var os=[0,.5,1];function ju(e,t,n){let r=t==="x"?e.x:e.y,o=t==="x"?e.width:e.height;return r+o*n}function Ju(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Qu(e,t,n,r){let o=os.map(s=>ju(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let l=t[s];if(l!==void 0&&l.id!==e.id&&Ju(l))for(let c=0;c<os.length;c+=1){let u=os[c];if(u===void 0)continue;let d=ju(l,n,u);for(let p=0;p<o.length;p+=1){let m=o[p];if(m===void 0)continue;let f=d-m,y=Math.abs(f);y>=r||y>=a||(a=y,i={delta:f,position:d,targetId:l.id})}}}return i}function Kr(e,t,n=6){let r={x:e.x,y:e.y,guides:[]};if(!Ju(e)||!Number.isFinite(n)||n<=0)return r;let o=Qu(e,t,"x",n),i=Qu(e,t,"y",n),a=[];return o!==null&&a.push({axis:"x",position:o.position,targetId:o.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:o===null?e.x:e.x+o.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var ep="imagora.canvas-snap.v1";function tp(){try{let e=window.localStorage.getItem(ep);return e===null?!0:e!=="0"}catch{return!0}}function np(e){try{window.localStorage.setItem(ep,e?"1":"0")}catch{}}function Eo(e){let t=Fe(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var Mo=[];function op(e,t,n){if(!n)return{changes:e,guides:Mo};let r=[];for(let d of e){let p=d;p.type==="position"&&p.dragging===!0&&p.position!==void 0&&r.push(p)}if(r.length!==1)return{changes:e,guides:Mo};let o=r[0];if(!o)return{changes:e,guides:Mo};let i=t.find(d=>d.id===o.id),a=o.position;if(!i||!a)return{changes:e,guides:Mo};let s={...Eo(i),x:a.x,y:a.y},l=[];for(let d of t)d.id!==o.id&&l.push(Eo(d));let c=Kr(s,l);return c.guides.length===0?{changes:e,guides:Mo}:{changes:e.map(d=>d.id===o.id&&d.type==="position"?{...d,position:{x:c.x,y:c.y}}:d),guides:c.guides}}var Oe=require("react");var jr=require("react");var Zt=new Map,rs=new Map;function xv(e,t,n=512){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||e<=0||t<=0||n<=0||e<=n&&t<=n)return null;let r=n/Math.max(e,t);return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(t*r))}}function Zr(e){let t=Zt.get(e);return t===void 0?null:(Zt.delete(e),Zt.set(e,t),t)}function wv(e,t){for(Zt.set(e,t);Zt.size>240;){let n=Zt.keys().next();if(n.done===!0)break;let r=Zt.get(n.value);Zt.delete(n.value),r!==void 0&&URL.revokeObjectURL(r)}}async function vv(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u7F29\u7565\u56FE\u53D6\u56FE\u5931\u8D25\uFF1A${n.status}`);let r=await n.blob(),o=await createImageBitmap(r),i=xv(o.width,o.height,t);if(i===null)return o.close(),e;let a=document.createElement("canvas");a.width=i.width,a.height=i.height;let s=a.getContext("2d");if(s===null)return o.close(),e;s.drawImage(o,0,0,i.width,i.height),o.close();let l=await new Promise(c=>a.toBlob(c,"image/webp",.9));return l===null?e:URL.createObjectURL(l)}function rp(e,t=512){let n=Zr(e);if(n!==null)return Promise.resolve(n);let r=rs.get(e);if(r!==void 0)return r;let o=vv(e,t).catch(()=>e).then(i=>(rs.delete(e),i!==e&&wv(e,i),i));return rs.set(e,o),o}function ip(e){let[t,n]=(0,jr.useState)(()=>{if(!e)return null;let r=Zr(e);return r===null?null:{src:e,url:r}});return(0,jr.useEffect)(()=>{if(!e)return;let r=Zr(e);if(r!==null){n({src:e,url:r});return}let o=!1;return rp(e).then(i=>{o||n({src:e,url:i})}),()=>{o=!0}},[e]),t===null||t.src!==e?null:t.url}var is=require("react/jsx-runtime"),ap={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function _e({name:e,size:t=14,strokeWidth:n=1.7,style:r}){let o=ap[e]||ap.help;return(0,is.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...r},children:(0,is.jsx)("path",{d:o})})}var Ce=require("react"),yp=require("react-dom");var kv={id:"__custom",label:"\u81EA\u5B9A\u4E49"},Sv=64;function sp(e){return typeof e!="string"?"":e.trim().replace(/\s+/g," ")}function Cv(e,t){return e.some(n=>n.value===t)}function lp(e,t){let n=sp(t);return n===""||Cv(e,n)?e:[...e,{value:n,label:n,group:kv}]}function cp(e){let t=sp(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>Sv?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function dp(e){let t=new Map,n=[];for(let o of e){let i=o.group;if(i===void 0){n.push(o);continue}let a=t.get(i.id);a!==void 0?a.rows.push(o):t.set(i.id,{label:i.label,rows:[o]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let r=[...t].map(([o,i])=>({id:o,label:i.label,rows:i.rows}));return n.length>0&&r.push({id:"",label:"",rows:n}),r}var Qr=0;function Jr(){Qr+=1}function ei(){Qr=Math.max(0,Qr-1)}function up(){return Qr>0}var Nv=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function as(e){if(!e)return"";let t="";for(let n of e){let r=n.codePointAt(0)??0;t+=Nv.has(r)?"-":n}return t}function pp(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function Mv(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,r=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(r[i]=1+pp(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,l=n,c=n;for(let[u,d]of r.entries()){if(l!==n&&(c=Math.max(c,l+u-2)),e.charAt(u)===t.charAt(i)){let p=1+pp(e,u),m=n;s!==n&&(m=s+p+4),c!==n&&(m=Math.max(m,c+p+1-u)),a[u]=m}l=s,s=d}r=a}let o=n;for(let i of r)o=Math.max(o,i);return o===n?void 0:o}function mp(e,t){let n=as(t).toLowerCase();if(n==="")return e;let r=[];return e.forEach((o,i)=>{let a=o.label===void 0?[o.name]:[o.name,o.label],s=!1,l;for(let c of a){let u=as(c).toLowerCase(),d=Mv(u,n);d!==void 0&&(s||=u.startsWith(n),l=l===void 0?d:Math.max(l,d))}l!==void 0&&r.push({item:o,index:i,prefix:s,score:l})}),r.sort((o,i)=>Number(i.prefix)-Number(o.prefix)||i.score-o.score||o.index-i.index),r.map(o=>o.item)}var ti=require("react");var _o="imagora",ss={"common.notSet":"\uFF08\u672A\u8BBE\u7F6E\uFF09","common.save":"\u4FDD\u5B58","common.saving":"\u4FDD\u5B58\u4E2D\u2026","common.cancel":"\u53D6\u6D88","common.close":"\u5173\u95ED","common.chooseFolder":"\u9009\u62E9\u6587\u4EF6\u5939","common.choosing":"\u9009\u62E9\u4E2D\u2026","panel.entry":"\u81EA\u7531\u753B\u5E03","toolbar.profile.follow":"\u8DDF\u968F imagora \u7684 .env","toolbar.profile.title":"\u6765\u6E90\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5","toolbar.model.title":"{profile} \xB7 \u5F53\u524D\u6A21\u578B","toolbar.settings":"\u8BBE\u7F6E","toolbar.settings.title":"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55","toolbar.upload":"\u4E0A\u4F20\u56FE\u7247","toolbar.upload.title":"\u4ECE\u672C\u673A\u9009\u56FE\u7247\uFF08\u4E5F\u53EF\u62D6\u5165\u6216\u7C98\u8D34\uFF09","toolbar.paste":"\u7C98\u8D34\u5BFC\u5165","toolbar.paste.title":"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u62C6\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361","toolbar.newPrompt":"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247","toolbar.newPrompt.title":"\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E","toolbar.newGroup":"\u65B0\u5EFA\u56FE\u7247\u7EC4","toolbar.newGroup.title":"\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E","toolbar.save":"\u4FDD\u5B58\u5DE5\u4F5C\u6D41","toolbar.save.title":"\u7ED9\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765","toolbar.load":"\u52A0\u8F7D\u5DE5\u4F5C\u6D41","toolbar.load.title":"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED","toolbar.history":"\u751F\u6210\u5386\u53F2","toolbar.history.title":"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\uFF0C\u5220\u6389\u8282\u70B9\u4E5F\u80FD\u627E\u56DE","toolbar.outputDir":"\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939","toolbar.outputDir.title":"\u70B9\u8FD9\u91CC\u6362\u4E00\u4E2A\u76EE\u5F55\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u5B83\uFF0C\u5361\u4E0A\u7559\u7A7A\u4E5F\u7528\u5B83\uFF09\xB7 \u5F53\u524D\uFF1A{dir}","toolbar.undo":"\u64A4\u9500","toolbar.undo.title":"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09","toolbar.redo":"\u6062\u590D","toolbar.redo.title":"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09","toolbar.autoConnect":"\u81EA\u52A8\u8FDE\u7EBF","toolbar.autoConnect.title":"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u5173\u7CFB\uFF1A\u56FE\u7247 \u2192 \u63D0\u793A\u8BCD \u2192 \u56FE\u7247","toolbar.runAll":"\u5168\u90E8\u8FD0\u884C","toolbar.runAll.title":"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247","toolbar.cancelAll":"\u53D6\u6D88\u5168\u90E8 ({count})","toolbar.cancelAll.title":"\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09","flash.autoConnect.done":"\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF","flash.autoConnect.noneSelected":"\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9","flash.autoConnect.selection":"\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF","flash.outputDir.set":"\u5DF2\u628A\u9009\u4E2D\u5361\u7247\u7684\u8F93\u51FA\u6587\u4EF6\u5939\u8BBE\u4E3A {dir}","flash.outputDir.same":"\u6240\u9009\u5361\u7247\u672C\u6765\u5C31\u7528 {dir}","flash.defaultOutputDir.set":"\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939\u5DF2\u8BBE\u4E3A {dir}\uFF08\u53EA\u5F71\u54CD\u4EE5\u540E\u65B0\u5EFA\u7684\u5361\u7247\uFF09","flash.noNodes":"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9","flash.layout.noneSelected":"\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9","flash.drop.noImage":"\u6CA1\u6709\u53EF\u7528\u7684\u56FE\u7247\u6587\u4EF6\uFF1A\u652F\u6301 png / jpg / webp / gif / bmp","flash.image.noFile":"\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6","flash.mask.cleared":"\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248","flash.deleted.kept":"\u5DF2\u4ECE\u753B\u5E03\u79FB\u9664 {count} \u4E2A\u8282\u70B9\uFF1B\u56FE\u7247\u4ECD\u7559\u5728\u78C1\u76D8\u4E0A\uFF0C\u751F\u6210\u5386\u53F2\u91CC\u80FD\u627E\u56DE","flash.prompt.copied":"\u5DF2\u590D\u5236\u63D0\u793A\u8BCD","flash.prompt.copyFailed":"\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE","flash.readFailed":"\u8BFB\u53D6\u5931\u8D25\uFF1A{reason}","flash.split.done":"\u5DF2\u5207\u51FA {count} \u5F20","flash.drop.images":"\u5DF2\u653E\u5165 {count} \u5F20\u56FE","flash.import.prompts":"\u5DF2\u5EFA {count} \u5F20\u63D0\u793A\u8BCD\u5361","flash.snap.on":"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45","flash.snap.off":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E","flash.lock.on":"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8 / \u8FDE\u7EBF / \u9009\u4E2D / \u5E73\u79FB\u90FD\u505C\u4E86","flash.lock.off":"\u753B\u5E03\u5DF2\u89E3\u9501","flash.renderError":"\u753B\u5E03\u6E32\u67D3\u51FA\u9519\uFF1A{reason}","flash.profile.switched":"\u5DF2\u5207\u5230 {name}","flash.profile.failed":"\u5207\u6362\u5931\u8D25\uFF1A{reason}","flash.model.switched":"\u5DF2\u5207\u6362\u5230 {model}","canvas.goSettings":"\u53BB\u8BBE\u7F6E","canvas.minimap":"\u753B\u5E03\u5C0F\u5730\u56FE","menu.preview":"\u9884\u89C8\u5927\u56FE","menu.crop":"\u88C1\u526A","menu.upscale":"\u653E\u5927","menu.split":"\u5207\u5206","menu.mask":"\u8499\u7248\u91CD\u7ED8","menu.replace":"\u66FF\u6362\u56FE\u7247","menu.run":"\u8FD0\u884C","menu.copyPrompt":"\u590D\u5236\u63D0\u793A\u8BCD","menu.deleteSelection":"\u5220\u9664\u6240\u9009 {count} \u9879","menu.delete":"\u5220\u9664","menu.deleteOnly":"\u4EC5\u5220\u9664\u6B64\u9879","menu.aria":"\u8282\u70B9\u64CD\u4F5C","upscale.title":"\u653E\u5927\u56FE\u7247","upscale.subtitle":"\u672C\u5730\u6309\u957F\u8FB9\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002","upscale.longEdge":"\u957F\u8FB9\u76EE\u6807","upscale.algorithm":"\u7B97\u6CD5","upscale.algo.high":"\u9AD8\u8D28\u91CF","upscale.algo.bilinear":"\u5E73\u6ED1","upscale.algo.nearest":"\u4FDD\u50CF\u7D20","upscale.original":"\u539F\u56FE {width} \xD7 {height}","upscale.scale":"{ratio}\xD7","upscale.shrink":"\u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F","upscale.reading":"\u8BFB\u53D6\u4E2D\u2026","upscale.note":"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF1A\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\u3002\u60F3\u8981\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\uFF0C\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002","upscale.busy":"\u5904\u7406\u4E2D\u2026","upscale.confirm":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03","upscale.failed":"\u653E\u5927\u5931\u8D25\uFF1A{reason}","upscale.resultName":"\u653E\u5927 {width}\xD7{height} \xB7 {algorithm}","crop.title":"\u88C1\u526A\u56FE\u7247","crop.subtitle":"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002","crop.ratio":"\u6BD4\u4F8B","crop.ratio.free":"\u81EA\u7531","crop.ratio.group":"\u88C1\u526A\u6BD4\u4F8B","crop.note":"\u88C1\u526A\u540E {width} \xD7 {height}","crop.note.original":"\u539F\u56FE {width} \xD7 {height}","crop.note.gcd":"\u539F\u6BD4\u4F8B {ratio}","crop.note.hint":"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F {min}%","crop.alt":"\u5F85\u88C1\u526A","crop.busy":"\u5904\u7406\u4E2D\u2026","crop.confirm":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03","crop.failed":"\u88C1\u526A\u5931\u8D25\uFF1A{reason}","crop.resultName":"\u88C1\u526A {width}\xD7{height}","crop.resultName.ratio":"\u88C1\u526A {width}\xD7{height} \xB7 {ratio}","split.title":"\u5207\u5206\u56FE\u7247","split.subtitle":"\u6309\u884C \xD7 \u5217\u5207\u5F00\u8FD9\u5F20\u56FE\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002","split.cols":"\u5217","split.rows":"\u884C","split.summary":"{count} \u5F20","split.summary.cell":"{count} \u5F20 \xB7 \u6BCF\u5F20 {width} \xD7 {height}","split.original":"\u539F\u56FE {width} \xD7 {height}","split.readingOriginal":"\u6B63\u5728\u8BFB\u53D6\u539F\u56FE\u5C3A\u5BF8\u2026","split.busy":"\u5904\u7406\u4E2D\u2026","split.confirm":"\u786E\u8BA4\u5207\u5206\uFF08{count} \u5F20\uFF09","split.needTwo":"\u81F3\u5C11 2 \u5F20","split.more":"\u2026\u7B49 {count} \u4E2A","split.tooSmall":"1 \xD7 1 \u7B49\u4E8E\u4E0D\u5207\u3002\u628A\u884C\u6216\u5217\u8C03\u5927\u4E00\u70B9\u3002","split.note":"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u5404\u81EA\u6210\u4E3A\u4E00\u4E2A\u56FE\u7247\u8282\u70B9\u3002","split.failed":"\u5207\u5206\u5931\u8D25\uFF1A{reason}","split.resultName":"\u5207\u5206 {index}/{total}","mask.title":"\u8499\u7248\u91CD\u7ED8","mask.subtitle":"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002","mask.mode.paint":"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09","mask.mode.erase":"\u64E6","mask.brush":"\u7B14\u5237","mask.clear":"\u6E05\u7A7A","mask.strokes":"{count} \u7B14","mask.noStrokes":"\u8FD8\u6CA1\u6D82","mask.note":"\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002","mask.note.original":"\u539F\u56FE {width} \xD7 {height}","mask.busy":"\u5BFC\u51FA\u4E2D\u2026","mask.confirm":"\u6302\u4E0A\u8499\u7248","mask.failed":"\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A{reason}","mask.noBase":"\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D","mask.noCanvas":"\u753B\u5E03\u4E0D\u53EF\u7528","mask.resultName":"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8","import.title":"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247","import.subtitle":"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002","import.aria":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C","import.placeholder":`=== \u79CB\u65E5\u901A\u52E4\u5305 ===
\`	ext
ratio: 3:2

linen tote bag on warm concrete, soft top light
\`

=== \u51AC\u65E5\u56F4\u5DFE ===
\`	ext
ratio: 2:3

wool scarf on linen, morning window light
\``,"import.summary":"\u8BC6\u522B {count} \u5F20\u5361\u7247","import.summaryIssues":"\u53D1\u73B0 {count} \u4E2A\u95EE\u9898","import.card.untitled":"\u7B2C {index} \u5F20","import.card.defaultRatio":"\u9ED8\u8BA4\u6BD4\u4F8B","import.card.fallback":"\u5C3A\u5BF8\u56DE\u9000","import.card.empty":"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09","import.hint":"\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C === \u540D\u5B57 ===\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ratio: 3:2\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002\u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08{count} \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002","import.waiting":"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8","import.confirm":"\u786E\u8BA4\u5EFA\u5361\uFF08{count}\uFF09","save.title":"\u4FDD\u5B58\u5DE5\u4F5C\u6D41","save.subtitle":"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002","save.defaultName":"\u753B\u5E03 {stamp}","save.nameAria":"\u5DE5\u4F5C\u6D41\u540D\u79F0","save.namePlaceholder":"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57","save.where":"\u5B58\u5230 {dir}","save.where.shared":"\u5B58\u5230 {dir}\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09","save.where.fallback":"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09","save.overwriteMore":"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09","save.overwriteTitle":"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F","save.overwriteSubtitle":"\u300C{name}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002","save.overwriteWarn":"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002","save.back":"\u8FD4\u56DE\u6539\u540D","save.overwrite":"\u8986\u76D6\u4FDD\u5B58","load.title":"\u52A0\u8F7D\u5DE5\u4F5C\u6D41","load.subtitle":"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002","load.empty":"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41","load.where":"\u8BFB\u7684\u662F {dir}","help.title":"\u64CD\u4F5C\u5E2E\u52A9","help.subtitle":"\u62D6\u5165\u56FE\u7247 \xB7 \u53F3\u952E\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u51FA\u83DC\u5355","help.rows.canvas":"\u753B\u5E03","help.rows.canvasText":"\u53F3\u952E\u62D6\u62FD\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u5F39\u83DC\u5355 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8","help.rows.node":"\u8282\u70B9","help.rows.nodeText":"\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C / \u6574\u7406 / \u8FDE\u7EBF / \u8BBE\u8DEF\u5F84 / \u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88","help.rows.edge":"\u8FDE\u7EBF","help.rows.edgeText":"\u56FE\u7247\u2192\u63D0\u793A\u8BCD / \u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u53EA\u6709\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408","help.rows.keys":"\u5FEB\u6377\u952E","help.rows.keysText":"Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete \u5220\u9664\u8FDE\u7EBF","help.rows.refs":"\u5F15\u7528","help.rows.refsText":"\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247","help.rows.run":"\u8FD0\u884C","help.rows.runText":"\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D","help.rows.save":"\u4FDD\u5B58","help.rows.saveText":"\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167","help.config":"\u914D\u7F6E\u6765\u6E90\uFF1A{source} \xB7 \u6A21\u578B {model}","help.config.plugin":"\u63D2\u4EF6\u5185\u914D\u7F6E","help.config.missing":"\u672A\u627E\u5230","help.output":"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 {dir}","settings.title":"\u753B\u5E03\u8BBE\u7F6E","settings.subtitle":"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\u3002\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002","settings.status":"\u5F53\u524D\u751F\u6548\uFF1A","settings.status.takenOver":"\u88AB\u63D2\u4EF6\u5185\u914D\u7F6E\u63A5\u7BA1","settings.status.saved":"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548","settings.status.dirty":"\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8","settings.status.clean":"\u6240\u6709\u6539\u52A8\u5DF2\u4FDD\u5B58","settings.status.savedTick":"\u2713 \u5DF2\u4FDD\u5B58","settings.group.endpoint":"\u7528\u54EA\u5957\u63A5\u53E3","settings.group.files":"\u6587\u4EF6\u843D\u5728\u54EA","settings.group.budget":"\u82B1\u94B1\u4E0A\u9650","settings.profile.label":"\u914D\u7F6E\u6765\u6E90","settings.profile.hint.plugin":"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\u3002","settings.profile.hint.imagora":"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u4EF7\u76EE\u8868\u3002","settings.profile.title":"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868","settings.profile.plugin":"\u63D2\u4EF6\u5185\u914D\u7F6E","settings.model.label":"\u9ED8\u8BA4\u6A21\u578B","settings.model.hint.plugin":"\u586B\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\u3002","settings.model.hint.imagora":"\u6E05\u5355\u5916\u7684 id \u4E5F\u53EF\u4EE5\u624B\u586B\u3002","settings.model.empty":"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id","settings.model.title":"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare","settings.baseUrl.label":"\u63A5\u53E3\u5730\u5740","settings.baseUrl.hint":"OpenAI \u517C\u5BB9\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002","settings.baseUrl.title":"\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90","settings.apiKey.label":"API Key","settings.apiKey.hint.configured":"\u5DF2\u914D\u7F6E\uFF1B\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\u3002","settings.apiKey.hint.plain":"\u53EA\u5B58\u5728\u672C\u673A settings.json\u3002","settings.apiKey.placeholder.keep":"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539","settings.apiKey.placeholder.paste":"\u7C98\u8D34 API Key","settings.probe.run":"\u6D4B\u8BD5\u8FDE\u901A","settings.probe.title.ready":"\u53EA\u8BFB\u4E00\u6B21\u6A21\u578B\u6E05\u5355\uFF0C\u4E0D\u751F\u6210\u56FE\u3001\u4E0D\u82B1\u94B1","settings.probe.title.needUrl":"\u5148\u586B\u63A5\u53E3\u5730\u5740","settings.probe.ok":"\u8FDE\u901A\uFF0C\u8BFB\u5230 {count} \u4E2A\u6A21\u578B","settings.probe.okNoList":"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09","settings.probe.fail":"\u8FDE\u4E0D\u901A\uFF1A{reason}","settings.probe.more":"\u2026\u8FD8\u6709 {count} \u4E2A","settings.inheritHint":"\u8FD9\u4E00\u680F\u7684\u5730\u5740\u4E0E\u5BC6\u94A5\u6CBF\u7528\u672C\u673A Imagora \u7684\u90A3\u4E00\u4EFD\u3002\u8981\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\uFF0C\u628A\u4E0A\u9762\u7684\u300C\u914D\u7F6E\u6765\u6E90\u300D\u6539\u6210\u300C\u63D2\u4EF6\u5185\u914D\u7F6E\u300D\u3002","settings.reset.confirm":"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF1F\u4E4B\u540E\u56DE\u5230\u672C\u673A Imagora \u7684\u6765\u6E90\u3002","settings.reset.confirmAction":"\u786E\u8BA4\u6E05\u7A7A","settings.reset.link":"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E","settings.reset.done":"\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E","settings.root.label":"Imagora \u76EE\u5F55","settings.root.hint":"\u6307\u5411\u540E\u5DE5\u4F5C\u6D41\u4E0E\u751F\u6210\u5386\u53F2\u76F4\u63A5\u8BFB\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002\u7559\u7A7A = \u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002","settings.root.placeholder":"\u4F8B\u5982 D:/imagora\uFF08\u542B config.json \u4E0E .env\uFF09","settings.reveal":"\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00","settings.pick.root":"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09","settings.pick.output":"\u9009\u62E9\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939","settings.pick.unsupported":"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84","settings.pick.failed":"\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A{reason}","settings.pick.unknown":"\u672A\u77E5\u539F\u56E0","settings.outputDir.label":"\u9ED8\u8BA4\u8F93\u51FA\u6587\u4EF6\u5939","settings.outputDir.hint":"\u5361\u4E0A\u7559\u7A7A\u65F6\u7528\u5B83\u3002\u5F53\u524D\uFF1A{dir}","settings.outputDir.placeholder":"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55","settings.budget.label":"\u672C\u753B\u5E03\u7D2F\u8BA1\u4E0A\u9650","settings.budget.hint":"\u82B1\u5230\u4E0A\u9650\u5373\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF09\u3002","settings.budget.placeholder":"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650","settings.keyConfigured":"\u5BC6\u94A5\u5DF2\u914D\u7F6E","settings.keyMissing":"\u5BC6\u94A5\u672A\u914D\u7F6E","settings.save.done":"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548","settings.save.failed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{reason}","settings.reset.failed":"\u64CD\u4F5C\u5931\u8D25\uFF1A{reason}","cost.money":"{value} \u5143","cost.title":"\u672C\u753B\u5E03\u7D2F\u8BA1 {spent} \xB7 {cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE {images} \u5F20","cost.title.withBudget":"\u672C\u753B\u5E03\u7D2F\u8BA1 {spent} / \u4E0A\u9650 {cap} \xB7 {cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE {images} \u5F20","cost.over":"\u5DF2\u8FBE\u4E0A\u9650","dock.zoomIn":"\u653E\u5927","dock.zoomIn.title":"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09","dock.zoomOut":"\u7F29\u5C0F","dock.zoomOut.title":"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09","dock.fit":"\u9002\u5E94","dock.fit.title":"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1","dock.focus":"\u805A\u7126","dock.focus.title":"\u805A\u7126\uFF1A\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE","dock.snap":"\u5438\u9644","dock.snap.on":"\u5173\u95ED\u62D6\u62FD\u5438\u9644","dock.snap.off":"\u5F00\u542F\u62D6\u62FD\u5438\u9644","dock.minimap":"\u5730\u56FE","dock.minimap.on":"\u9690\u85CF\u5C0F\u5730\u56FE","dock.minimap.off":"\u663E\u793A\u5C0F\u5730\u56FE","dock.lock":"\u9501\u5B9A","dock.locked":"\u5DF2\u9501","dock.lock.lock":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09","dock.lock.unlock":"\u89E3\u9501\u753B\u5E03","dock.help":"\u5E2E\u52A9","dock.help.title":"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E","inspector.runOne":"\u8FD0\u884C\u6240\u9009","inspector.runMany":"\u8FD0\u884C\u6240\u9009\uFF08{count}\uFF09","inspector.run.title.one":"\u8FD0\u884C\u9009\u4E2D\u7684 1 \u5F20\u63D0\u793A\u8BCD\u5361\u7247","inspector.run.title.many":"\u8FD0\u884C\u9009\u4E2D\u7684 {count} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247\u4E0E\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09","inspector.layout":"\u81EA\u52A8\u6574\u7406","inspector.layout.title":"\u6309\u53C2\u8003\u5173\u7CFB\u5206\u5C42\u91CD\u6392\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D","inspector.connect":"\u81EA\u52A8\u8FDE\u7EBF","inspector.connect.title":"\u53EA\u7ED9\u9009\u4E2D\u7684\u8282\u70B9\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u7684\u4E0D\u53D7\u5F71\u54CD","inspector.outputDir":"\u8BBE\u7F6E\u8F93\u51FA\u6587\u4EF6\u5939","inspector.outputDir.title.one":"\u4E3A\u9009\u4E2D\u7684\u90A3\u5F20\u63D0\u793A\u8BCD\u5361\u7247\u9009\u4E00\u4E2A\u8F93\u51FA\u6587\u4EF6\u5939","inspector.outputDir.title.many":"\u4E3A\u9009\u4E2D\u7684 {count} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u9009\u4E00\u4E2A\u8F93\u51FA\u6587\u4EF6\u5939","inspector.delete":"\u5220\u9664\u6240\u9009","inspector.countSuffix":"\uFF08{count}\uFF09","empty.title":"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03","empty.line1":"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002","empty.line2":"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB","drop.releaseImage":"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247","drop.prompt":"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361","drop.group":"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4","drop.cancel":"\u677E\u5F00\u53D6\u6D88","drop.images":"\u677E\u5F00\u6DFB\u52A0 {count} \u5F20\u56FE\u7247","drop.noImage":"\u672A\u68C0\u6D4B\u5230\u56FE\u7247","error.nodeTitle":"\u8FD9\u5F20\u5361\u51FA\u9519\u4E86","error.nodeHint":"\u9009\u4E2D\u5B83\u6309 Delete \u5220\u6389\u5373\u53EF\uFF0C\u5176\u4F59\u5361\u7247\u4E0D\u53D7\u5F71\u54CD","error.retry":"\u91CD\u8BD5","error.canvasTitle":"\u753B\u5E03\u6E32\u67D3\u51FA\u9519","error.canvasBody":"\u4F60\u7684\u5DE5\u4F5C\u6D41\u6587\u4EF6\u8FD8\u5728\u78C1\u76D8\u4E0A\uFF0C\u6CA1\u6709\u4E22\u3002\u53EF\u4EE5\u5148\u91CD\u8BD5\uFF1B\u5982\u679C\u8FD8\u662F\u4E0D\u884C\uFF0C\u6E05\u7A7A\u753B\u5E03\u540E\u518D\u4ECE\u5DE5\u4F5C\u6D41\u91CC\u91CD\u65B0\u52A0\u8F7D\u3002","error.clearCanvas":"\u6E05\u7A7A\u753B\u5E03","error.unknown":"\u672A\u77E5\u9519\u8BEF","select.empty":"\u6CA1\u6709\u5339\u914D\u9879","select.placeholder":"\u8BF7\u9009\u62E9","select.searchPlaceholder":"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009","select.searchAria":"\u7B5B\u9009\u9009\u9879","select.use":"\u4F7F\u7528 \u201C{value}\u201D","select.customGroup":"\u81EA\u5B9A\u4E49","history.nothingToUndo":"\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C","history.nothingToRedo":"\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C","images.onlyImage":"\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6","images.clipboard":"\u526A\u8D34\u677F\u56FE\u7247","images.uploading":"\u4E0A\u4F20 {name} \u2026","images.added":"\u5DF2\u6DFB\u52A0 {name}","images.uploadFailed":"\u4E0A\u4F20\u5931\u8D25\uFF1A{reason}","images.replaced":"\u5DF2\u66FF\u6362\u4E3A {name}","images.replaceFailed":"\u66FF\u6362\u5931\u8D25\uFF1A{reason}","task.budget.confirm":`{reason}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`,"task.budget.cancelled":"\u5DF2\u6309\u4E0A\u9650\u53D6\u6D88\uFF1A{reason}","task.budget.overridden":"\u8D85\u4E0A\u9650\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A{reason}","task.done":"\u5B8C\u6210 \xB7 {count} \u5F20","task.done.cost":"\u5B8C\u6210 \xB7 {count} \u5F20 \xB7 {cost}","task.cancelled":"\u5DF2\u53D6\u6D88","task.failed":"\u5931\u8D25","task.failed.withReason":"{status} \xB7 {reason}","task.seeLog":"\u89C1\u65E5\u5FD7","task.lost":"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF08\u5BBF\u4E3B\u91CD\u542F\u6216\u4EFB\u52A1\u8FC7\u671F\uFF09\uFF0C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF","task.lostLog":"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF1A\u505C\u6B62\u8F6E\u8BE2","task.pollFailed":"\u8F6E\u8BE2\u5931\u8D25\uFF1A{reason}","task.emptyPrompt":"\u63D0\u793A\u8BCD\u662F\u7A7A\u7684","task.missingRefs":"\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A{names}","task.submit":"\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE {count} \u5F20 \xB7 {size}","task.submitFailed":"\u63D0\u4EA4\u5931\u8D25\uFF1A{reason}","task.cancelFailed":"\u53D6\u6D88\u5931\u8D25\uFF1A{reason}","workflow.restored":"\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08{name}\uFF09","workflow.restored.auto":"\u81EA\u52A8\u6062\u590D","workflow.dropped":"{count} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08{reason}\uFF09","workflow.saved":"\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C{name}\u300D","workflow.saveFailed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{reason}","workflow.loaded":"\u5DF2\u52A0\u8F7D\u300C{name}\u300D","workflow.loadFailed":"\u52A0\u8F7D\u5931\u8D25\uFF1A{reason}","brand.title":"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E","history.title":"\u751F\u6210\u5386\u53F2","history.search.placeholder":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","history.filter.title":"\u6309\u72B6\u6001\u7B5B\u9009","history.filter.all":"\u5168\u90E8\u72B6\u6001","history.filter.ok":"\u6210\u529F","history.filter.error":"\u5931\u8D25","history.search":"\u641C\u7D22","history.lostRefs":"{count} \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931","history.lostRefs.title":"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F","history.budget.daily":"\u6BCF\u65E5\u4E0A\u9650","history.budget.daily.title":"\u6BCF\u65E5\u7D2F\u8BA1\u82B1\u8D39\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4","history.budget.single":"\u5355\u6B21\u4E0A\u9650","history.budget.single.title":"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650","history.budget.save":"\u4FDD\u5B58\u4E0A\u9650","history.budget.saved":"\u4E0A\u9650\u5DF2\u4FDD\u5B58","history.budget.saveFailed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{reason}","history.refresh":"\u5237\u65B0","history.bySize":"\u6309\u5C3A\u5BF8","history.bySize.row":"{count} \u6B21 \xB7 {cost}","history.reading":"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026","history.imageAlt":"\u751F\u6210\u7ED3\u679C","history.zoom.title":"\u53CC\u51FB\u653E\u5927\u9884\u89C8","history.failed":"\u751F\u6210\u5931\u8D25","history.moved":"\u6587\u4EF6\u5DF2\u79FB\u52A8","history.noPrompt":"\u65E0\u63D0\u793A\u8BCD","history.ref.title":"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927","history.ref.alt":"\u53C2\u8003\u56FE","history.refMissing":"\u53C2\u8003\u56FE\u7F3A\u5931","history.copyPrompt":"\u590D\u5236\u63D0\u793A\u8BCD","history.openDir":"\u6253\u5F00\u76EE\u5F55","history.import":"\u5BFC\u5165\u753B\u5E03","history.import.title":"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03","history.import.noAsset":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528","history.loadingMore":"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026","history.loadMore":"\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A {shown} / {total}\uFF09","history.allShown":"\u5DF2\u663E\u793A\u5168\u90E8 {total} \u6761\u8BB0\u5F55","history.empty":"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2","history.empty.noteBefore":"\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C","history.empty.noteAfter":"\u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B\u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002","history.noMatch":"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55","history.where.fallback":"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09","history.stat.todayCost":"\u4ECA\u65E5\u82B1\u8D39","history.stat.cost":"\u7D2F\u8BA1\u82B1\u8D39","history.stat.successRate":"\u6210\u529F\u7387","history.stat.successRate.value":"{rate}\uFF08{ok}/{total}\uFF09","history.stat.error":"\u5931\u8D25","history.stat.avgSeconds":"\u6210\u529F\u5E73\u5747\u8017\u65F6","zoom.copying":"\u590D\u5236\u4E2D\u2026","zoom.copyFailed":"\u590D\u5236\u5931\u8D25","zoom.copied":"\u5DF2\u590D\u5236\u56FE\u7247","zoom.copiedPath":"\u5DF2\u590D\u5236\u8DEF\u5F84","zoom.alt":"\u9884\u89C8","zoom.close":"\u5173\u95ED\u9884\u89C8","zoom.close.title":"\u5173\u95ED\uFF08Esc\uFF09","zoom.dock.title":"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED","zoom.out":"\u7F29\u5C0F","zoom.scale.title":"\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B","zoom.scale.natural":"{width}\xD7{height} \xB7 \u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B","zoom.in":"\u653E\u5927","zoom.fit":"\u9002\u5E94\u7A97\u53E3","zoom.actual":"\u5B9E\u9645\u5927\u5C0F","zoom.actual.title":"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09","zoom.copyImage":"\u590D\u5236\u56FE\u7247","zoom.copyPath":"\u590D\u5236\u8DEF\u5F84","zoom.openTab":"\u65B0\u6807\u7B7E\u6253\u5F00","dialog.readImageFailed":"\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A{reason}","node.missing":"\u6587\u4EF6\u7F3A\u5931","node.imageMissing":"\u56FE\u7247\u7F3A\u5931","node.mask.title":"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","node.mask.clear":"\u6E05\u9664\u8499\u7248","node.mask.badge":"\u8499\u7248","node.refs":"\u5F15\u7528 {count} \u5904","node.noRefs":"\u672A\u5F15\u7528","node.image.preview":"\u9884\u89C8\u5927\u56FE","node.image.crop":"\u88C1\u526A\u56FE\u7247","node.image.upscale":"\u653E\u5927\u56FE\u7247","node.image.split":"\u5207\u5206\u56FE\u7247","node.image.mask":"\u8499\u7248\u91CD\u7ED8","node.image.replace":"\u66FF\u6362\u56FE\u7247","node.image.delete":"\u5220\u9664\u56FE\u7247","node.group.delete":"\u5220\u9664\u56FE\u7247\u7EC4","node.group.count":"{count} \u5F20\u56FE","node.group.dedup":"\u53BB\u91CD","node.group.dedup.title":"\u5DF2\u53BB\u6389 {count} \u5F20\u91CD\u590D\u56FE\u7247","node.prompt.placeholder":"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background","node.prompt.untitled":"\u63D0\u793A\u8BCD\u751F\u6210","node.prompt.delete":"\u5220\u9664\u63D0\u793A\u8BCD","node.prompt.size":"\u5C3A\u5BF8","node.prompt.size.title":"\u8F93\u51FA\u5C3A\u5BF8","node.prompt.quality":"\u8D28\u91CF","node.prompt.quality.title":"\u751F\u6210\u8D28\u91CF","node.prompt.outputDir":"\u8F93\u51FA\u6587\u4EF6\u5939\uFF08\u7559\u7A7A = \u7528\u9ED8\u8BA4\uFF09","node.prompt.customSize":"{size}\uFF08\u81EA\u5B9A\u4E49\uFF09","node.prompt.run":"\u8FD0\u884C","node.prompt.cancel":"\u53D6\u6D88","node.prompt.cancelling":"\u53D6\u6D88\u4E2D\u2026","node.prompt.queueing":"\u6392\u961F\u4E2D\u2026","node.prompt.cancel.title":"\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F","status.idle":"\u5C31\u7EEA","status.queued":"\u6392\u961F\u4E2D","status.running":"\u751F\u6210\u4E2D","status.done":"\u5B8C\u6210","status.failed":"\u5931\u8D25","status.generating":"\u751F\u6210\u4E2D {seconds}s","status.done.withCount":"\u5B8C\u6210 \xB7 {count} \u5F20","status.failed.withReason":"\u5931\u8D25\uFF1A{reason}"},fp={"common.notSet":"Not set","common.save":"Save","common.saving":"Saving\u2026","common.cancel":"Cancel","common.close":"Close","common.chooseFolder":"Choose folder","common.choosing":"Choosing\u2026","panel.entry":"Freeform canvas","toolbar.profile.follow":"Follow imagora's .env","toolbar.profile.title":"Profile: picks the endpoint and the API key","toolbar.model.title":"{profile} \xB7 current model","toolbar.settings":"Settings","toolbar.settings.title":"Endpoint, API key, model, and folders","toolbar.upload":"Upload","toolbar.upload.title":"Pick images from this machine \u2014 or drag them in, or paste","toolbar.paste":"Paste prompts","toolbar.paste.title":"Paste a model reply; each line becomes a prompt card","toolbar.newPrompt":"Prompt card","toolbar.newPrompt.title":"Drag onto the canvas to drop it where you let go","toolbar.newGroup":"Image group","toolbar.newGroup.title":"Drag onto the canvas to drop it where you let go","toolbar.save":"Save workflow","toolbar.save.title":"Name this canvas and keep it","toolbar.load":"Load workflow","toolbar.load.title":"Continue from a saved canvas","toolbar.history":"History","toolbar.history.title":"Every image on disk, even ones you deleted from the canvas","toolbar.outputDir":"Default output folder","toolbar.outputDir.title":"Pick a different folder (used by new cards, and by any card left empty) \xB7 now: {dir}","toolbar.undo":"Undo","toolbar.undo.title":"Undo the last step (Ctrl+Z)","toolbar.redo":"Redo","toolbar.redo.title":"Reapply the step you undid (Ctrl+Y)","toolbar.autoConnect":"Auto-connect","toolbar.autoConnect.title":"Wire up the obvious links by position: image \u2192 prompt \u2192 image","toolbar.runAll":"Run all","toolbar.runAll.title":"Run every prompt card","toolbar.cancelAll":"Cancel all ({count})","toolbar.cancelAll.title":"Queued jobs won't start; the running one is discarded after it finishes (it still lands on disk and is still billed)","flash.autoConnect.done":"Filled in the obvious links","flash.autoConnect.noneSelected":"Select the nodes to connect first","flash.autoConnect.selection":"Linked the selected nodes","flash.outputDir.set":"Output folder for the selected cards: {dir}","flash.outputDir.same":"Those cards already use {dir}","flash.defaultOutputDir.set":"Default output folder set to {dir} (affects new cards only)","flash.noNodes":"Nothing on the canvas yet","flash.layout.noneSelected":"Select the nodes to tidy first","flash.drop.noImage":"No usable image: png / jpg / webp / gif / bmp","flash.image.noFile":"This image has no file yet","flash.mask.cleared":"Mask cleared","flash.deleted.kept":"Removed {count} node(s) from the canvas; the images stay on disk and in history","flash.prompt.copied":"Prompt copied","flash.prompt.copyFailed":"Copy failed: the browser blocked clipboard access","flash.readFailed":"Could not read: {reason}","flash.split.done":"Split into {count} images","flash.drop.images":"Added {count} images","flash.import.prompts":"Created {count} prompt cards","flash.snap.on":"Snapping on: dragged cards line up with their neighbours","flash.snap.off":"Snapping off: cards go wherever you put them","flash.lock.on":"Canvas locked: zoom only \u2014 no dragging, connecting, selecting, or panning","flash.lock.off":"Canvas unlocked","flash.renderError":"Canvas failed to render: {reason}","flash.profile.switched":"Switched to {name}","flash.profile.failed":"Switch failed: {reason}","flash.model.switched":"Switched to {model}","canvas.goSettings":"Open settings","canvas.minimap":"Canvas minimap","menu.preview":"View full size","menu.crop":"Crop","menu.upscale":"Upscale","menu.split":"Split into a grid","menu.mask":"Repaint with a mask","menu.replace":"Replace image","menu.run":"Run","menu.copyPrompt":"Copy prompt","menu.deleteSelection":"Delete {count} selected","menu.delete":"Delete","menu.deleteOnly":"Delete just this one","menu.aria":"Node actions","upscale.title":"Upscale","upscale.subtitle":"Resampled locally to a target long edge. No API call, no cost.","upscale.longEdge":"Long edge","upscale.algorithm":"Algorithm","upscale.algo.high":"High quality","upscale.algo.bilinear":"Smooth","upscale.algo.nearest":"Keep pixels","upscale.original":"Original {width} \xD7 {height}","upscale.scale":"{ratio}\xD7","upscale.shrink":"Smaller than the original \u2014 this shrinks it","upscale.reading":"Reading\u2026","upscale.note":"Upscaling resamples locally; it cannot invent detail. For a sharper image, rewrite the prompt and generate again.","upscale.busy":"Working\u2026","upscale.confirm":"Upscale and add to canvas","upscale.failed":"Upscale failed: {reason}","upscale.resultName":"Upscale {width}\xD7{height} \xB7 {algorithm}","dialog.readImageFailed":"Could not read this image: {reason}","crop.title":"Crop","crop.subtitle":"Drag inside the frame to move it, drag a handle to resize, then confirm.","crop.ratio":"Ratio","crop.ratio.free":"Free","crop.ratio.group":"Crop ratio","crop.note":"Result {width} \xD7 {height}","crop.note.original":"Original {width} \xD7 {height}","crop.note.gcd":"Native ratio {ratio}","crop.note.hint":"Drag inside to move \xB7 drag a handle to resize \xB7 down to {min}%","crop.alt":"Image to crop","crop.busy":"Working\u2026","crop.confirm":"Crop and add to canvas","crop.failed":"Crop failed: {reason}","crop.resultName":"Crop {width}\xD7{height}","crop.resultName.ratio":"Crop {width}\xD7{height} \xB7 {ratio}","split.title":"Split image","split.subtitle":"Cut this image into a rows \xD7 columns grid; each cell becomes its own node.","split.cols":"Columns","split.rows":"Rows","split.summary":"{count} images","split.summary.cell":"{count} images \xB7 {width} \xD7 {height} each","split.original":"Original {width} \xD7 {height}","split.readingOriginal":"Reading the original size\u2026","split.busy":"Working\u2026","split.confirm":"Split into {count}","split.needTwo":"At least 2 needed","split.more":"\u2026{count} in total","split.tooSmall":"1 \xD7 1 is no split at all. Raise the rows or columns.","split.note":"Each piece becomes its own image node on the canvas.","split.failed":"Split failed: {reason}","split.resultName":"Split {index}/{total}","mask.title":"Repaint with a mask","mask.subtitle":"Paint the area to repaint; the exported PNG mask matches the original size.","mask.mode.paint":"Paint (to repaint)","mask.mode.erase":"Erase","mask.brush":"Brush","mask.clear":"Clear","mask.strokes":"{count} strokes","mask.noStrokes":"Nothing painted yet","mask.note":"Painted areas get repainted; everything else stays. The exported mask is a PNG at the original size.","mask.note.original":"Original {width} \xD7 {height}","mask.busy":"Exporting\u2026","mask.confirm":"Attach mask","mask.failed":"Could not export the mask: {reason}","mask.noBase":"The image has not loaded yet","mask.noCanvas":"Canvas unavailable","mask.resultName":"Mask attached \u2014 painted areas will be repainted","import.title":"Paste prompt cards","import.subtitle":"Paste a model reply. Each card is a title, a fenced block, and a ratio on the first line.","import.aria":"Prompt text to import","import.placeholder":`=== Autumn commute bag ===
\`	ext
ratio: 3:2

linen tote bag on warm concrete, soft top light
\`

=== Winter scarf ===
\`	ext
ratio: 2:3

wool scarf on linen, morning window light
\``,"import.summary":"{count} cards recognised","import.summaryIssues":"{count} problems found","import.card.untitled":"Card {index}","import.card.defaultRatio":"Default ratio","import.card.fallback":"Size fell back","import.card.empty":"(empty prompt)","import.hint":"One card per block: a title line === name ===, then ratio: 3:2 inside the fence, then a blank line and the prompt. Sizes come from the current config ({count} options); if no ratio parses, the first one is used.","import.waiting":"Paste something to see a live preview here","import.confirm":"Create {count} cards","save.title":"Save workflow","save.subtitle":"Name this canvas so you can load it again later.","save.defaultName":"Canvas {stamp}","save.nameAria":"Workflow name","save.namePlaceholder":"Name this canvas","save.where":"Saved to {dir}","save.where.shared":"Saved to {dir} (shared with original Imagora)","save.where.fallback":"the plugin's own data folder (no imagora folder set)","save.overwriteMore":"Or overwrite an existing one (click to fill in the name)","save.overwriteTitle":"Overwrite this workflow?","save.overwriteSubtitle":"\u201C{name}\u201D already exists. Saving replaces it.","save.overwriteWarn":"The old copy is gone for good. Go back and rename if you want to keep it.","save.back":"Back","save.overwrite":"Overwrite","load.title":"Load workflow","load.subtitle":"Continue from a saved canvas.","load.empty":"No workflows in this folder yet","load.where":"Looked in {dir}","help.title":"How to use this canvas","help.subtitle":"Drop images in \xB7 right-drag to box-select \xB7 right-click a node for its menu","help.rows.canvas":"Canvas","help.rows.canvasText":"Right-drag to box-select \xB7 right-click a node for its menu \xB7 Ctrl/Cmd+click to add to the selection \xB7 wheel to zoom \xB7 drag empty space to pan \xB7 \u201CFit\u201D at bottom-left for an overview \xB7 double-click an image to enlarge","help.rows.node":"Nodes","help.rows.nodeText":"Hover for the action rail \xB7 once selected, run / tidy / connect / set folder / delete from the top-right bar \xB7 a running card can be cancelled on its own","help.rows.edge":"Links","help.rows.edgeText":"image \u2192 prompt or group \xB7 group \u2192 prompt \xB7 prompt \u2192 image. A prompt takes one incoming link; multiple images are aggregated through a group","help.rows.keys":"Keys","help.rows.keysText":"Ctrl+A select all \xB7 Ctrl+Z/Y undo and redo \xB7 Delete removes the selection \xB7 Ctrl+S saves \xB7 double-click a link, or select it and press Delete","help.rows.refs":"References","help.rows.refsText":"Write @image-name in a prompt to use only those images; leave it out to use every incoming image","help.rows.run":"Running","help.rows.runText":"\u201CRun\u201D on a single card \xB7 \u201CRun all\u201D, \u201CRun selected\u201D, \u201CCancel all\u201D in the toolbar","help.rows.save":"Saving","help.rows.saveText":"Save under a name to keep it as a workflow; canvas edits also land in a recovery snapshot","help.config":"Config from {source} \xB7 model {model}","help.config.plugin":"the plugin settings","help.config.missing":"not found","help.output":"Output defaults to {dir}","settings.title":"Canvas settings","settings.subtitle":"Pick one source and model. The endpoint and key stay on this machine \u2014 never on screen, never in a log.","settings.status":"In effect:","settings.status.takenOver":"Overridden by plugin settings","settings.status.saved":"Saved and live","settings.status.dirty":"Unsaved changes","settings.status.clean":"Everything saved","settings.status.savedTick":"\u2713 Saved","settings.group.endpoint":"Which endpoint","settings.group.files":"Where files land","settings.group.budget":"Spending cap","settings.profile.label":"Config source","settings.profile.hint.plugin":"Use the plugin\u2019s own endpoint and key.","settings.profile.hint.imagora":"Switching the source switches the endpoint, model, and price table.","settings.profile.title":"Switching the source switches the endpoint, model, and size price table","settings.profile.plugin":"Plugin settings","settings.model.label":"Default model","settings.model.hint.plugin":"Enter the model id your provider expects.","settings.model.hint.imagora":"An id outside the list can be typed in.","settings.model.empty":"This source reports no model list \u2014 type the model id","settings.model.title":"The model id your provider expects, e.g. gpt-image-2.5-flare","settings.baseUrl.label":"Endpoint","settings.baseUrl.hint":"An OpenAI-compatible endpoint, usually ending in /v1.","settings.baseUrl.title":"Once filled in, this takes priority over the Imagora source above","settings.apiKey.label":"API key","settings.apiKey.hint.configured":"Configured. Leave empty to keep it as is.","settings.apiKey.hint.plain":"Stored only in the local settings.json.","settings.apiKey.placeholder.keep":"Leave empty to keep","settings.apiKey.placeholder.paste":"Paste the API key","settings.probe.run":"Test","settings.probe.title.ready":"Reads the model list once \u2014 generates nothing, costs nothing","settings.probe.title.needUrl":"Fill in the endpoint first","settings.probe.ok":"Reachable \u2014 {count} models reported","settings.probe.okNoList":"Reachable, but this endpoint reports no model list (you can type one in)","settings.probe.fail":"Unreachable: {reason}","settings.probe.more":"\u2026{count} more","settings.inheritHint":"This endpoint and key come from the local Imagora setup. To use the plugin\u2019s own, switch \u201CConfig source\u201D above to \u201CPlugin settings\u201D.","settings.reset.confirm":"Clear the plugin settings and fall back to the local Imagora source?","settings.reset.confirmAction":"Clear it","settings.reset.link":"Clear plugin settings","settings.reset.done":"Plugin settings cleared \u2014 back to the local Imagora config","settings.root.label":"Imagora folder","settings.root.hint":"Once pointed at it, workflows and generation history are read from there rather than copied. Empty = the plugin\u2019s own data folder only.","settings.root.placeholder":"e.g. D:/imagora (holding config.json and .env)","settings.reveal":"Reveal in file manager","settings.pick.root":"Choose the Imagora folder (holding config.json)","settings.pick.output":"Choose the default output folder","settings.pick.unsupported":"This machine cannot show a folder dialog \u2014 type the path instead","settings.pick.failed":"No folder dialog appeared: {reason}","settings.pick.unknown":"unknown reason","settings.outputDir.label":"Default output folder","settings.outputDir.hint":"Used by any card left empty. Now: {dir}","settings.outputDir.placeholder":"Empty = follow the Imagora folder above","settings.budget.label":"Cap for this canvas","settings.budget.hint":"Once the cap is hit, new jobs are refused outright.","settings.budget.placeholder":"Empty = no cap","settings.keyConfigured":"Key configured","settings.keyMissing":"No key configured","settings.save.done":"Saved and live","settings.save.failed":"Could not save: {reason}","settings.reset.failed":"That did not work: {reason}","cost.money":"\xA5{value}","cost.title":"This canvas: {spent} \xB7 {cards} cards billed, {images} images made","cost.title.withBudget":"This canvas: {spent} of {cap} \xB7 {cards} cards billed, {images} images made","cost.over":"At cap","dock.zoomIn":"Zoom in","dock.zoomIn.title":"Zoom into the canvas (the wheel does this too)","dock.zoomOut":"Zoom out","dock.zoomOut.title":"Zoom out of the canvas (the wheel does this too)","dock.fit":"Fit","dock.fit.title":"Fit the view: bring every node into one screen","dock.focus":"Focus","dock.focus.title":"Focus: show the selection only, or the whole canvas when nothing is selected","dock.snap":"Snap","dock.snap.on":"Turn drag snapping off","dock.snap.off":"Turn drag snapping on","dock.minimap":"Map","dock.minimap.on":"Hide the minimap","dock.minimap.off":"Show the minimap","dock.lock":"Lock","dock.locked":"Locked","dock.lock.lock":"Lock the canvas so nodes cannot be dragged by accident (wheel zoom and Fit still work)","dock.lock.unlock":"Unlock the canvas","dock.help":"Help","dock.help.title":"How to use this canvas, plus shortcuts","inspector.runOne":"Run selected","inspector.runMany":"Run selected ({count})","inspector.run.title.one":"Run the one selected prompt card","inspector.run.title.many":"Run the {count} selected prompt cards (prompts only; images and groups are ignored)","inspector.layout":"Tidy up","inspector.layout.title":"Re-lay the selected nodes by reference depth and leave the rest where they are","inspector.connect":"Auto-connect","inspector.connect.title":"Wire up the obvious links among the selected nodes only","inspector.outputDir":"Set output folder","inspector.outputDir.title.one":"Pick an output folder for the one selected prompt card","inspector.outputDir.title.many":"Pick an output folder for the {count} selected prompt cards","inspector.delete":"Delete selected","inspector.countSuffix":" ({count})","empty.title":"This is a freeform canvas","empty.line1":"Start with a prompt card, drop images in as references \u2014 every link is a reference.","empty.line2":"Double-click an image to enlarge \xB7 wheel to zoom \xB7 drag empty space to pan","drop.releaseImage":"Release to add the image","drop.prompt":"Release to add a prompt card","drop.group":"Release to add an image group","drop.cancel":"Release to cancel","drop.images":"Release to add {count} images","drop.noImage":"No image detected","error.nodeTitle":"This card broke","error.nodeHint":"Select it and press Delete; the other cards are unaffected","error.retry":"Retry","error.canvasTitle":"The canvas failed to render","error.canvasBody":"Your workflow file is still on disk \u2014 nothing is lost. Try again first; if that fails, clear the canvas and load the workflow again.","error.clearCanvas":"Clear canvas","error.unknown":"Unknown error","select.empty":"No matches","select.placeholder":"Choose\u2026","select.searchPlaceholder":"Type to filter","select.searchAria":"Filter options","select.use":"Use \u201C{value}\u201D","select.customGroup":"Custom","history.nothingToUndo":"Nothing to undo","history.nothingToRedo":"Nothing to redo","images.onlyImage":"Images only, please","images.clipboard":"clipboard image","images.uploading":"Uploading {name} \u2026","images.added":"Added {name}","images.uploadFailed":"Upload failed: {reason}","images.replaced":"Replaced with {name}","images.replaceFailed":"Replace failed: {reason}","task.budget.confirm":`{reason}

Submit this job anyway?`,"task.budget.cancelled":"Cancelled by the cap: {reason}","task.budget.overridden":"Over the cap, confirmed \u2014 submitting: {reason}","task.done":"Done \xB7 {count}","task.done.cost":"Done \xB7 {count} \xB7 {cost}","task.cancelled":"Cancelled","task.failed":"Failed","task.failed.withReason":"{status} \xB7 {reason}","task.seeLog":"see the log","task.lost":"This job is gone (the host restarted or the job expired). Run it again.","task.lostLog":"Job lost \u2014 stopped polling","task.pollFailed":"Polling failed: {reason}","task.emptyPrompt":"The prompt is empty","task.missingRefs":"The prompt references images that are not on the canvas: {names}","task.submit":"Submit \xB7 {count} reference images \xB7 {size}","task.submitFailed":"Submit failed: {reason}","task.cancelFailed":"Cancel failed: {reason}","workflow.restored":"Restored your last canvas ({name})","workflow.restored.auto":"auto-recovered","workflow.dropped":"{count} nodes had incomplete data and were skipped ({reason})","workflow.saved":"Saved workflow \u201C{name}\u201D","workflow.saveFailed":"Could not save: {reason}","workflow.loaded":"Loaded \u201C{name}\u201D","workflow.loadFailed":"Could not load: {reason}","brand.title":"Freeform canvas \xB7 how to use it, plus shortcuts","history.title":"Generation history","history.search.placeholder":"Search prompts, quality, or filenames","history.filter.title":"Filter by status","history.filter.all":"Any status","history.filter.ok":"Succeeded","history.filter.error":"Failed","history.search":"Search","history.lostRefs":"{count} reference images lost","history.lostRefs.title":"An image-to-image run whose reference images can no longer be found in the asset store, so it cannot be reproduced","history.budget.daily":"Daily cap","history.budget.daily.title":"Today's spending cap in CNY; 0 = no cap. Over the cap you are asked to confirm before submitting","history.budget.single":"Per-run cap","history.budget.single.title":"Estimated cap for one submission in CNY; 0 = no cap","history.budget.save":"Save caps","history.budget.saved":"Caps saved","history.budget.saveFailed":"Could not save: {reason}","history.refresh":"Refresh","history.bySize":"By size","history.bySize.row":"{count} runs \xB7 {cost}","history.reading":"Reading history\u2026","history.imageAlt":"Generated image","history.zoom.title":"Double-click to enlarge","history.failed":"Generation failed","history.moved":"File moved","history.noPrompt":"No prompt","history.ref.title":"Reference image \xB7 double-click to enlarge","history.ref.alt":"Reference image","history.refMissing":"Reference image missing","history.copyPrompt":"Copy prompt","history.openDir":"Open folder","history.import":"Add to canvas","history.import.title":"Add as an image node on the canvas","history.import.noAsset":"This row has only a path and no asset copy \u2014 importing it would break the reference","history.loadingMore":"Loading more\u2026","history.loadMore":"Load more (showing {shown} of {total})","history.allShown":"All {total} records shown","history.empty":"No generation history yet","history.empty.noteBefore":"History reads Imagora's own ledger at","history.empty.noteAfter":"Point \u201CSettings\u201D at your local Imagora folder to read it. Images this plugin makes go into the asset store instead.","history.noMatch":"No matching records","history.where.fallback":"(no imagora folder set)","history.stat.todayCost":"Spent today","history.stat.cost":"Spent total","history.stat.successRate":"Success rate","history.stat.successRate.value":"{rate} ({ok}/{total})","history.stat.error":"Failed","history.stat.avgSeconds":"Avg time (successful)","zoom.copying":"Copying\u2026","zoom.copyFailed":"Copy failed","zoom.copied":"Image copied","zoom.copiedPath":"Path copied","zoom.alt":"Preview","zoom.close":"Close the preview","zoom.close.title":"Close (Esc)","zoom.dock.title":"Wheel to zoom \xB7 drag to pan once zoomed in \xB7 double-click to fit the window \xB7 click empty space or press Esc to close","zoom.out":"Zoom out","zoom.scale.title":"Actual on-screen scale relative to the original","zoom.scale.natural":"{width}\xD7{height} \xB7 actual on-screen scale relative to the original","zoom.in":"Zoom in","zoom.fit":"Fit window","zoom.actual":"Actual size","zoom.actual.title":"Actual size: one image pixel per screen pixel (a large image overflows the window \u2014 drag to look around)","zoom.copyImage":"Copy image","zoom.copyPath":"Copy path","zoom.openTab":"Open in a new tab","node.missing":"File missing","node.imageMissing":"No image","node.mask.title":"This image has a mask; every re-run repaints only inside it. Click to clear","node.mask.clear":"Clear mask","node.mask.badge":"Mask","node.refs":"Used {count}\xD7","node.noRefs":"Unused","node.image.preview":"View full size","node.image.crop":"Crop","node.image.upscale":"Upscale","node.image.split":"Split into a grid","node.image.mask":"Repaint with a mask","node.image.replace":"Replace image","node.image.delete":"Delete image","node.group.delete":"Delete group","node.group.count":"{count} images","node.group.dedup":"Deduped","node.group.dedup.title":"Removed {count} duplicate images","node.prompt.placeholder":"English prompt, e.g. a red apple on white background","node.prompt.untitled":"Prompt output","node.prompt.delete":"Delete prompt","node.prompt.size":"Size","node.prompt.size.title":"Output size","node.prompt.quality":"Quality","node.prompt.quality.title":"Generation quality","node.prompt.outputDir":"Output folder (empty = use the default)","node.prompt.customSize":"{size} (custom)","node.prompt.run":"Run","node.prompt.cancel":"Cancel","node.prompt.cancelling":"Cancelling\u2026","node.prompt.queueing":"Queued\u2026","node.prompt.cancel.title":"Queued jobs won't start; the running one is discarded once it finishes","status.idle":"Ready","status.queued":"Queued","status.running":"Generating","status.done":"Done","status.failed":"Failed","status.generating":"Generating {seconds}s","status.done.withCount":"Done \xB7 {count}","status.failed.withReason":"Failed: {reason}"};function Ev(e,t){return t?e.replace(/\{(\w+)\}/g,(n,r)=>Object.prototype.hasOwnProperty.call(t,r)?String(t[r]):n):e}var ls=(e,t)=>Ev(ss[e],t);var bp=require("react/jsx-runtime"),gp=(0,ti.createContext)(null);function hp({translate:e,children:t}){return(0,bp.jsx)(gp.Provider,{value:e??ls,children:t})}function ae(){return(0,ti.useContext)(gp)??ls}var ve=require("react/jsx-runtime"),_v=4;function gt({options:e,value:t,onChange:n,className:r="",id:o,searchable:i,emptyLabel:a,allowCustom:s=!1,onCreateCustom:l,"aria-describedby":c,"aria-invalid":u,renderOption:d,title:p}){let m=ae(),[f,y]=(0,Ce.useState)(!1),[h,b]=(0,Ce.useState)(-1),[w,g]=(0,Ce.useState)(""),[x,k]=(0,Ce.useState)(null),S=(0,Ce.useRef)(null),N=(0,Ce.useRef)(null),C=(0,Ce.useRef)(null),M=(0,Ce.useId)(),O=`${o??`select-${M}`}-listbox`,D=`${O}-search`,L=(0,Ce.useMemo)(()=>{if(w.trim()==="")return e;let P=e.map(X=>({name:X.value,label:X.label,option:X}));return mp(P,w).map(X=>X.option)},[e,w]),T=i===void 0||i==="auto"?e.length>_v:i,v=L.findIndex(P=>P.value===t),E=e.find(P=>P.value===t),z=P=>`${O}-option-${P}`,I=T&&s===!0,_=(0,Ce.useMemo)(()=>{let P=w.trim();if(P!=="")return L.find(X=>X.value===P||X.label===P)},[L,w]),R=(0,Ce.useMemo)(()=>{if(!I||_!==void 0)return null;let P=cp(w);return P.ok?P.value:null},[I,_,w]),V=(P=v>=0?v:0)=>{!e.length&&!I||(b(e.length===0?-1:Math.min(Math.max(P,0),e.length-1)),y(!0),T||window.setTimeout(()=>N.current?.focus(),0))},W=(P=!1)=>{y(!1),g(""),P&&window.setTimeout(()=>N.current?.focus(),0)},F=P=>{let X=L[P];X&&(n(X.value),W(!0))},$=P=>{l?.(P),W(!0)},Y=()=>{let P=N.current;if(!P)return;let X=P.getBoundingClientRect(),oe=4,re=8,j=P.offsetWidth||X.width,te=Math.max(re,Math.min(X.left,window.innerWidth-j-re)),ue=window.innerHeight-X.bottom-oe-re,Q=X.top-oe-re,q=ue<160&&Q>ue,de=Math.max(120,Math.min(240,q?Q:ue));k({left:te,top:q?Math.max(re,X.top-oe-de):X.bottom+oe,width:j,maxHeight:de})};(0,Ce.useEffect)(()=>{if(f)return Jr(),()=>ei()},[f]),(0,Ce.useLayoutEffect)(()=>{if(!f)return;Y();let P=()=>Y();window.addEventListener("scroll",P,!0),window.addEventListener("resize",P);let X=typeof ResizeObserver>"u"?null:new ResizeObserver(P);return N.current&&X?.observe(N.current),()=>{X?.disconnect(),window.removeEventListener("scroll",P,!0),window.removeEventListener("resize",P)}},[f]),(0,Ce.useEffect)(()=>{f&&T&&x&&C.current?.focus()},[f,T,x]),(0,Ce.useEffect)(()=>{f&&b(P=>L.length===0?-1:Math.min(Math.max(P,0),L.length-1))},[f,L.length]),(0,Ce.useEffect)(()=>{!e.length&&!I&&f&&(y(!1),b(-1))},[f,e.length,I]),(0,Ce.useEffect)(()=>{let P=X=>{let oe=X.target;S.current?.contains(oe)||document.getElementById(O)?.contains(oe)||W()};return document.addEventListener("mousedown",P,!0),()=>document.removeEventListener("mousedown",P,!0)},[O]);let U=(P,X)=>{if(P.key==="Tab"){W();return}if(P.key==="Escape"){f&&(P.preventDefault(),W(!0));return}if(P.key==="ArrowDown"||P.key==="ArrowUp"){if(P.preventDefault(),!f){V();return}if(L.length===0)return;let oe=P.key==="ArrowDown"?1:-1;b(re=>(re+oe+L.length)%L.length);return}if(P.key==="Home"||P.key==="End"){if(L.length===0)return;P.preventDefault(),f||y(!0),b(P.key==="Home"?0:L.length-1);return}if(P.key==="Enter"){if(P.preventDefault(),!f){V();return}if(I&&w.trim()!==""){_!==void 0?(n(_.value),W(!0)):R!==null&&$(R);return}F(h);return}!X&&P.key===" "&&(P.preventDefault(),f?F(h):V())},ee=(0,Ce.useMemo)(()=>dp(L),[L]),ne=(0,Ce.useMemo)(()=>{let P=new Map;return L.forEach((X,oe)=>P.set(X,oe)),P},[L]);return(0,ve.jsxs)("div",{ref:S,className:`im-select-root ${r}`.trim(),children:[(0,ve.jsxs)("button",{ref:N,type:"button",id:o,title:p,onClick:()=>f?W():V(),onKeyDown:P=>U(P,!1),"aria-expanded":f,"aria-haspopup":"listbox","aria-controls":O,"aria-activedescendant":f&&h>=0?z(h):void 0,"aria-describedby":c,"aria-invalid":u,className:`im-select-trigger${f?" is-open":""}`,children:[d&&E?(0,ve.jsxs)("span",{className:"im-select-value",children:[d(E),(0,ve.jsx)("span",{className:"im-select-label",children:E.label})]}):(0,ve.jsx)("span",{className:"im-select-label",children:E?.label??m("select.placeholder")}),(0,ve.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ve.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),f&&x&&(0,yp.createPortal)((0,ve.jsxs)("div",{id:O,"data-portal":"select-list",className:"im-select-list",style:{left:x.left,top:x.top,width:x.width,maxHeight:x.maxHeight},children:[T&&(0,ve.jsx)("div",{className:"im-select-search",children:(0,ve.jsx)("input",{ref:C,id:D,type:"text",className:"im-select-search-input",value:w,onChange:P=>g(P.target.value),onKeyDown:P=>U(P,!0),placeholder:m("select.searchPlaceholder"),autoComplete:"off","aria-label":m("select.searchAria"),"aria-controls":O,"aria-activedescendant":h>=0?z(h):void 0})}),(0,ve.jsxs)("ul",{role:"listbox","aria-labelledby":T?D:void 0,className:"im-select-rows",children:[L.length===0&&(0,ve.jsx)("li",{role:"presentation",className:"im-select-empty",children:a??m("select.empty")}),ee.map(P=>(0,ve.jsxs)("li",{role:"presentation",className:"im-select-group",children:[P.label!==""&&(0,ve.jsx)("div",{className:"im-select-group-title",role:"presentation",children:P.id==="__custom"?m("select.customGroup"):P.label}),(0,ve.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:P.rows.map(X=>{let oe=ne.get(X)??-1,re=X.value===t,j=oe===h;return(0,ve.jsxs)("li",{id:z(oe),role:"option","aria-selected":re,className:`im-select-option${re?" is-selected":""}${j?" is-active":""}`,onMouseEnter:()=>b(oe),onMouseDown:te=>te.preventDefault(),onClick:()=>F(oe),children:[d?(0,ve.jsxs)("span",{className:"im-select-value",children:[d(X),(0,ve.jsx)("span",{className:"im-select-label",children:X.label})]}):(0,ve.jsx)("span",{className:"im-select-label",children:X.label}),re&&(0,ve.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ve.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},X.value)})})]},P.id||"__ungrouped"))]}),R!==null&&(0,ve.jsx)("div",{className:"im-select-custom",children:(0,ve.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:P=>P.preventDefault(),onClick:()=>$(R),children:(0,ve.jsx)("span",{className:"im-select-label",children:m("select.use",{value:R})})})})]}),document.body)]})}var K=require("react/jsx-runtime"),cs=(0,Oe.createContext)(null),ds=(0,Oe.createContext)(!1);function us(){return(0,Oe.useContext)(ds)}function ps(){let e=(0,Oe.useContext)(cs);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function Iv({value:e,onChange:t}){let[n,r]=(0,Oe.useState)(e),o=(0,Oe.useRef)(!1),i=ae();return(0,Oe.useEffect)(()=>{o.current||r(e)},[e]),(0,K.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n,placeholder:i("node.prompt.placeholder"),onCompositionStart:()=>{o.current=!0},onCompositionEnd:a=>{o.current=!1,r(a.currentTarget.value),t(a.currentTarget.value)},onChange:a=>{let s=a.target.value;r(s),o.current||t(s)}})}function ni(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(wn,{type:"target",position:ie.Top,className:"im-handle"}),(0,K.jsx)(wn,{type:"source",position:ie.Bottom,className:"im-handle"})]})}function ms({children:e}){return(0,K.jsx)("div",{className:"im-rail nodrag",children:e})}function Ht({label:e,onClick:t,danger:n,children:r}){return(0,K.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:o=>{o.stopPropagation(),t()},children:r})}var vp=(0,Oe.memo)(function({id:t,data:n,selected:r}){let o=ps(),i=us(),a=ae(),[s,l]=(0,Oe.useState)(!1),c=n.missing||s,u=ip(n.url);return(0,K.jsxs)("div",{className:`im-panel-card${r?" is-selected":""}${c?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,K.jsx)(ni,{}),c?(0,K.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:a("node.missing")}):null,n.maskDataUrl?(0,K.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:a("node.mask.title"),"aria-label":a("node.mask.clear"),onClick:d=>{d.stopPropagation(),o.clearMask(t)},children:a("node.mask.badge")}):null,i?null:(0,K.jsxs)(ms,{children:[(0,K.jsx)(Ht,{label:a("node.image.preview"),onClick:()=>o.zoomImage(t),children:(0,K.jsx)(_e,{name:"eye"})}),(0,K.jsx)(Ht,{label:a("node.image.crop"),onClick:()=>o.cropImage(t),children:(0,K.jsx)(_e,{name:"crop"})}),(0,K.jsx)(Ht,{label:a("node.image.upscale"),onClick:()=>o.upscaleImage(t),children:(0,K.jsx)(_e,{name:"expand"})}),(0,K.jsx)(Ht,{label:a("node.image.split"),onClick:()=>o.splitImage(t),children:(0,K.jsx)(_e,{name:"grid"})}),(0,K.jsx)(Ht,{label:a("node.image.mask"),onClick:()=>o.maskImage(t),children:(0,K.jsx)(_e,{name:"wand"})}),(0,K.jsx)(Ht,{label:a("node.image.replace"),onClick:()=>o.replaceImage(t),children:(0,K.jsx)(_e,{name:"image"})}),(0,K.jsx)(Ht,{label:a("node.image.delete"),danger:!0,onClick:()=>o.deleteNode(t),children:(0,K.jsx)(_e,{name:"trash"})})]}),(0,K.jsx)("div",{className:"im-thumb",onDoubleClick:d=>{d.stopPropagation(),o.zoomImage(t)},children:n.url&&u?(0,K.jsx)("img",{src:u,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>l(!0)}):n.url?(0,K.jsx)("span",{className:"im-thumb-placeholder","aria-hidden":!0}):(0,K.jsx)("span",{className:"im-muted",style:{fontSize:11},children:a("node.imageMissing")})}),(0,K.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,K.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?a("node.refs",{count:n.refCount}):a("node.noRefs")})]})}),xp=4,kp=(0,Oe.memo)(function({id:t,data:n,selected:r}){let o=ps(),i=us(),a=ae(),s=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",l=n.duplicateCount??0,c=Math.min(Math.max(n.imageCount-1,0),3);return(0,K.jsxs)("div",{className:`im-group-node${r?" is-selected":""}`,children:[(0,K.jsx)(ni,{}),i?null:(0,K.jsx)(ms,{children:(0,K.jsx)(Ht,{label:a("node.group.delete"),danger:!0,onClick:()=>o.deleteNode(t),children:(0,K.jsx)(_e,{name:"trash"})})}),(0,K.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:c},(u,d)=>(0,K.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(d+1)*xp}px, ${-(d+1)*xp}px)`}},d)),(0,K.jsxs)("div",{className:"im-group-face",children:[(0,K.jsx)("div",{className:"im-group-count",children:a("node.group.count",{count:n.imageCount})}),(0,K.jsxs)("div",{className:"im-group-size",children:[s," MB"]}),l>0?(0,K.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:a("node.group.dedup.title",{count:l}),children:a("node.group.dedup")}):null]})]})]})});function wp({from:e}){let t=ae(),[n,r]=(0,Oe.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Oe.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>r(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,K.jsx)(K.Fragment,{children:t("status.generating",{seconds:n})})}var Pv={idle:"status.idle",queued:"status.queued",running:"status.running",done:"status.done",failed:"status.failed"};function zv(e,t){switch(e.status){case"queued":return{text:t("status.queued"),detail:t("status.queued"),tone:"is-queued"};case"running":return{text:t("status.running"),detail:t("status.running"),tone:"is-running"};case"done":{let n=t("status.done.withCount",{count:e.resultCount??0});return{text:n,detail:n,tone:"is-done"}}case"failed":return{text:t("status.failed"),detail:e.message?t("status.failed.withReason",{reason:e.message}):t("status.failed"),tone:"is-failed"};default:return{text:t("status.idle"),detail:t("status.idle"),tone:"is-idle"}}}var Sp=(0,Oe.memo)(function({id:t,data:n,selected:r}){let o=ps(),i=us(),a=ae(),s=o.config,l=n.status==="queued"||n.status==="running",c=s?.sizes??[],u=s?.qualities??[],d=c.some(m=>m.value===n.size)||!n.size?c:[...c,{value:n.size,label:a("node.prompt.customSize",{size:n.size}),cost:0}],p=s?.qualityEffective!==!1;if(i){let m=zv(n,a);return(0,K.jsxs)("div",{className:`im-panel-card im-node-lod${r?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,K.jsx)(ni,{}),(0,K.jsx)("div",{className:"im-lod-title",title:n.title??a("node.prompt.untitled"),children:n.title??a("node.prompt.untitled")}),(0,K.jsx)("div",{className:`im-lod-status ${m.tone}`,title:m.detail,children:n.status==="running"?(0,K.jsx)(wp,{from:n.startedAtMs}):m.text})]})}return(0,K.jsxs)("div",{className:`im-panel-card${r?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,K.jsx)(ni,{}),(0,K.jsxs)(ms,{children:[(0,K.jsx)("span",{className:"im-rail-dot",title:a(Pv[n.status]??"status.idle"),children:(0,K.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,K.jsx)(Ht,{label:a("node.prompt.delete"),danger:!0,onClick:()=>o.deleteNode(t),children:(0,K.jsx)(_e,{name:"trash"})})]}),(0,K.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??a("node.prompt.untitled")}),(0,K.jsx)(Iv,{value:n.prompt,onChange:m=>o.updatePrompt(t,{prompt:m})}),(0,K.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:p?"7fr 3fr":"1fr",marginTop:8},children:[(0,K.jsxs)("div",{style:{minWidth:0},children:[(0,K.jsx)("span",{className:"im-label",children:a("node.prompt.size")}),(0,K.jsx)(gt,{className:"im-select-fill",options:lp(d,n.size),value:n.size,title:a("node.prompt.size.title"),onChange:m=>o.updatePrompt(t,{size:m})})]}),p?(0,K.jsxs)("div",{style:{minWidth:0},children:[(0,K.jsx)("span",{className:"im-label",children:a("node.prompt.quality")}),(0,K.jsx)(gt,{className:"im-select-fill",options:u.map(m=>({value:m,label:m})),value:n.quality,title:a("node.prompt.quality.title"),onChange:m=>o.updatePrompt(t,{quality:m})})]}):null]}),(0,K.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,K.jsx)("span",{className:"im-label",children:a("node.prompt.outputDir")}),(0,K.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,K.jsx)("input",{className:"im-field",style:{minWidth:0,flex:1},value:n.outputDir,placeholder:s?.defaultOutputDir??"",title:n.outputDir||s?.defaultOutputDir||"",onChange:m=>o.updatePrompt(t,{outputDir:m.target.value})}),(0,K.jsx)("button",{type:"button",className:"im-icon-btn im-btn-ghost nodrag",title:a("common.chooseFolder"),"aria-label":a("common.chooseFolder"),onClick:m=>{m.stopPropagation(),o.pickOutputDir(t)},children:(0,K.jsx)(_e,{name:"folder"})})]})]}),n.status==="failed"&&n.message?(0,K.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,K.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,K.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${l?" im-btn-busy":""}`,style:{flex:1},disabled:l||!(n.prompt??"").trim(),onClick:m=>{m.stopPropagation(),o.runPrompt(t)},children:n.status==="running"?(0,K.jsx)(wp,{from:n.startedAtMs}):n.status==="queued"?a("node.prompt.queueing"):a("node.prompt.run")}),l?(0,K.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:a("node.prompt.cancel.title"),onClick:m=>{m.stopPropagation(),o.cancelPrompt(t)},children:n.cancelRequested?a("node.prompt.cancelling"):a("node.prompt.cancel")}):null]})]})});var Cp=`
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
`;var Np=require("react");var We=require("react/jsx-runtime"),jn=class extends Np.Component{state={error:null};static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[dsh-imagora-desk] \u6E32\u67D3\u51FA\u9519",t,n.componentStack),this.props.onError?.(t,n)}reset=()=>this.setState({error:null});render(){return this.state.error?this.props.fallback(this.state.error,this.reset):this.props.children}};function Mp(e,t){let n=String(e?.message??e??t("error.unknown")).split(`
`)[0]??"";return n.length>140?`${n.slice(0,140)}\u2026`:n}function oi({nodeId:e,children:t}){let n=ae();return(0,We.jsx)(jn,{fallback:(r,o)=>(0,We.jsxs)("div",{className:"im-node-error","data-node-id":e,title:String(r?.stack??r),children:[(0,We.jsx)("div",{className:"im-node-error-title",children:n("error.nodeTitle")}),(0,We.jsx)("p",{className:"im-node-error-msg",children:Mp(r,n)}),(0,We.jsx)("p",{className:"im-node-error-hint",children:n("error.nodeHint")}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs nodrag",onClick:o,children:n("error.retry")})]}),children:t})}function ri({children:e,onCrash:t,onClear:n}){let r=ae();return(0,We.jsx)(jn,{onError:o=>t?.(o),fallback:(o,i)=>(0,We.jsxs)("div",{className:"im-canvas-error",role:"alert",children:[(0,We.jsx)("h3",{className:"im-canvas-error-title",children:r("error.canvasTitle")}),(0,We.jsx)("p",{className:"im-canvas-error-msg",children:Mp(o,r)}),(0,We.jsx)("p",{className:"im-canvas-error-hint",children:r("error.canvasBody")}),(0,We.jsxs)("div",{className:"im-canvas-error-actions",children:[(0,We.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",onClick:i,children:r("error.retry")}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>{n(),i()},children:r("error.clearCanvas")})]})]}),children:e})}var gs=require("react/jsx-runtime");function fs(e){function t(n){return(0,gs.jsx)(oi,{nodeId:n?.id,children:(0,gs.jsx)(e,{...n})})}return t.displayName=`Bounded(${e.displayName||e.name||"Node"})`,t}var Ep={image:fs(vp),prompt:fs(Sp),group:fs(kp)};var ii=Math.round(5),_p=Math.round(200);function Rv(e){return Number.isNaN(e)?ii:e===Number.POSITIVE_INFINITY?_p:e===Number.NEGATIVE_INFINITY?ii:Math.min(_p,Math.max(ii,Math.round(e)))}function Ip(e){return Number.isNaN(e)||e<=0?ii:Rv(e*100)}var hs=.15,Tv=.2;function Pp(e,t){return!e&&t<hs?!0:e&&t>Tv?!1:e}var kn=require("react/jsx-runtime"),Dv="0 0 1024 1024",Av="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function bs({size:e=30,fill:t="var(--im-brand)"}){return(0,kn.jsx)("svg",{width:e,height:e,viewBox:Dv,fill:t,"aria-hidden":"true",children:(0,kn.jsx)("path",{d:Av})})}function zp({onClick:e}){let t=ae();return(0,kn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:t("brand.title"),children:[(0,kn.jsx)(bs,{}),(0,kn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var Tp=require("react");var Sn=require("react/jsx-runtime");function Ov(e){let t=0,n=0,r=0;for(let o of e){if(o.type!=="prompt")continue;let i=Number(o.data?.cost??0);i>0&&(t+=i,r+=1),n+=Number(o.data?.resultCount??0)}return{total:t,images:n,cards:r}}function Dp(e){return(0,Tp.useMemo)(()=>Ov(e),[e])}function Rp(e,t){return e("cost.money",{value:t.toFixed(2)})}function Ap({summary:e,budget:t}){let n=ae(),r=e.total,o=Number.isFinite(t)&&t>0,i=o?Math.min(1,r/t):0,a=o&&r>=t,s=Rp(n,r);return(0,Sn.jsxs)("span",{className:`im-cost${a?" is-over":""}`,title:o?n("cost.title.withBudget",{spent:s,cap:Rp(n,t),cards:e.cards,images:e.images}):n("cost.title",{spent:s,cards:e.cards,images:e.images}),children:[(0,Sn.jsx)("span",{className:"im-cost-num",children:s}),o?(0,Sn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,Sn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(i*100)}%`}})}):null,a?(0,Sn.jsx)("span",{className:"im-cost-flag",children:n("cost.over")}):null]})}var ze=require("react/jsx-runtime");function Op(e){let{config:t,promptCount:n,runnableIds:r,busyIds:o,canUndo:i,canRestore:a}=e,s=ae(),l=(c,u,d)=>(0,ze.jsx)("button",{type:"button",className:`${d.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:d.title,disabled:d.disabled,onClick:u,children:c});return(0,ze.jsxs)(ze.Fragment,{children:[(0,ze.jsxs)("div",{className:"im-header",children:[(0,ze.jsx)(zp,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,ze.jsx)(gt,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:s("toolbar.profile.follow")}],value:t.profile,title:s("toolbar.profile.title"),onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,ze.jsx)(gt,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:s("toolbar.model.title",{profile:t.profileLabel||t.profile}),onChange:c=>e.onSwitchModel(c)}):null,(0,ze.jsx)(Ap,{summary:e.cost,budget:t?.budget??0}),(0,ze.jsx)("span",{className:"im-spacer"}),l(s("toolbar.settings"),e.onOpenSettings,{title:s("toolbar.settings.title")})]}),(0,ze.jsxs)("div",{className:"im-toolbar",children:[(0,ze.jsxs)("div",{className:"im-toolbar-group",children:[l(s("toolbar.upload"),e.onPickFiles,{title:s("toolbar.upload.title"),primary:!0}),l(s("toolbar.paste"),e.onPasteImport,{title:s("toolbar.paste.title")}),(0,ze.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:s("toolbar.newPrompt.title"),draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:[s("toolbar.newPrompt"),(0,ze.jsx)("span",{className:"im-drag-grip",children:(0,ze.jsx)(_e,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,ze.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:s("toolbar.newGroup.title"),draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:[s("toolbar.newGroup"),(0,ze.jsx)("span",{className:"im-drag-grip",children:(0,ze.jsx)(_e,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,ze.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[l(s("toolbar.save"),e.onOpenSave,{title:s("toolbar.save.title")}),l(s("toolbar.load"),e.onOpenLoad,{title:s("toolbar.load.title")}),l(s("toolbar.history"),e.onOpenHistory,{title:s("toolbar.history.title")}),l(s("toolbar.outputDir"),e.onOpenDefaultOutputDir,{title:s("toolbar.outputDir.title",{dir:t?.defaultOutputDir||s("common.notSet")})}),l(s("toolbar.undo"),e.onUndo,{disabled:!i,title:s("toolbar.undo.title")}),l(s("toolbar.redo"),e.onRestore,{disabled:!a,title:s("toolbar.redo.title")}),l(s("toolbar.autoConnect"),e.onAutoConnect,{title:s("toolbar.autoConnect.title")}),l(s("toolbar.runAll"),()=>e.onRun(r),{title:s("toolbar.runAll.title"),disabled:!n}),o>0?(0,ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:s("toolbar.cancelAll.title"),onClick:e.onCancelAll,children:s("toolbar.cancelAll",{count:o})}):null]})]})]})}async function Io(e,t,n){try{let r=await Bu({title:t.title,startAt:t.startAt??""});return r.ok?r.path??null:(r.reason==="cancelled"||n?.(r.reason==="unsupported"?e("settings.pick.unsupported"):e("settings.pick.failed",{reason:r.reason||e("settings.pick.unknown")})),null)}catch(r){return n?.(e("settings.pick.failed",{reason:r?.message||e("settings.pick.unknown")})),null}}var Ve=require("react/jsx-runtime");function jt({icon:e,label:t,title:n,active:r,onClick:o}){return(0,Ve.jsxs)("button",{type:"button",className:`im-dock-row nodrag${r?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":r===void 0?void 0:r,onClick:o,children:[(0,Ve.jsx)(_e,{name:e,size:14}),(0,Ve.jsx)("span",{className:"im-dock-row-label",children:t})]})}function Lp(e){let{zoom:t,snapEnabled:n,canvasLocked:r,minimapOpen:o}=e,i=ae();return(0,Ve.jsxs)("div",{className:"im-dock nodrag",children:[(0,Ve.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,Ve.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Ip(t),"%"]})}),(0,Ve.jsx)(jt,{icon:"zoomIn",label:i("dock.zoomIn"),title:i("dock.zoomIn.title"),onClick:e.onZoomIn}),(0,Ve.jsx)(jt,{icon:"zoomOut",label:i("dock.zoomOut"),title:i("dock.zoomOut.title"),onClick:e.onZoomOut}),(0,Ve.jsx)(jt,{icon:"maximize",label:i("dock.fit"),title:i("dock.fit.title"),onClick:e.onFitView}),(0,Ve.jsx)(jt,{icon:"focus",label:i("dock.focus"),title:i("dock.focus.title"),onClick:e.onFocusSelected}),(0,Ve.jsx)(jt,{icon:"magnet",label:i("dock.snap"),title:i(n?"dock.snap.on":"dock.snap.off"),active:n,onClick:e.onToggleSnap}),(0,Ve.jsx)(jt,{icon:"map",label:i("dock.minimap"),title:i(o?"dock.minimap.on":"dock.minimap.off"),active:o,onClick:e.onToggleMinimap}),(0,Ve.jsx)(jt,{icon:r?"lock":"unlock",label:i(r?"dock.locked":"dock.lock"),title:i(r?"dock.lock.unlock":"dock.lock.lock"),active:r,onClick:e.onToggleLock}),(0,Ve.jsx)(jt,{icon:"help",label:i("dock.help"),title:i("dock.help.title"),onClick:e.onOpenHelp})]})}var Ue=require("react"),$p=require("react-dom");var ys="application/x-dsh-imagora-canvas";function xs(e){return e.dataTransfer?.types.includes("Files")??!1}function Po(e,t){if(xs(e))return"images";let n=e.dataTransfer?.getData(ys);return n==="prompt"||n==="group"?n:t}function Hp(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Bp(e){return Array.from(e?.files??[]).filter(Fr)}function ws(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var Bt=require("react/jsx-runtime");function vs(e,t,n,r){return t==="images"?e("drop.images",{count:n}):e(r?t==="prompt"?"drop.prompt":"drop.group":"drop.cancel")}var Lv=22,Hv=28,ai=8;function Fp(e){let t=ae(),{canvasRef:n,modalOpen:r,getCreatePosition:o,toFlowPosition:i,onDropFiles:a,onDropNode:s,onRejectFiles:l}=e,[c,u]=(0,Ue.useState)(null),d=(0,Ue.useRef)(null),p=(0,Ue.useRef)(0),m=(0,Ue.useRef)(null),f=(0,Ue.useRef)(null),y=(0,Ue.useRef)(null),h=(0,Ue.useCallback)((N,C)=>{d.current=N,u(N);let M=y.current;M&&M.textContent!==C&&(M.textContent=C)},[]),b=(0,Ue.useCallback)(()=>{d.current=null,p.current=0,u(null),f.current?.classList.remove("is-outside")},[]),w=(0,Ue.useCallback)((N,C)=>{let M=m.current;if(!M)return;let O=Math.min(N+Lv,window.innerWidth-M.offsetWidth-ai),D=Math.min(C+Hv,window.innerHeight-M.offsetHeight-ai);M.style.transform=`translate(${Math.max(ai,O)}px, ${Math.max(ai,D)}px)`},[]),g=(0,Ue.useCallback)((N,C,M)=>{let O=n.current;if(!O)return o();let D=O.getBoundingClientRect(),L=M?Math.min(Math.max(N,D.left),D.left+D.width):N,T=M?Math.min(Math.max(C,D.top),D.top+D.height):C;return i({x:L,y:T})},[n,o,i]);(0,Ue.useEffect)(()=>{let N=O=>{xs(O)&&O.preventDefault()},C=O=>{let D=d.current;if(!D||D==="images")return;w(O.clientX,O.clientY);let L=n.current,T=!!(L&&ws(O.clientX,O.clientY,L.getBoundingClientRect())),v=vs(t,D,0,T),E=y.current;E&&E.textContent!==v&&(E.textContent=v),f.current?.classList.toggle("is-outside",!T)},M=()=>{p.current=0,b()};return window.addEventListener("dragover",N),window.addEventListener("dragover",C),window.addEventListener("drop",N),window.addEventListener("dragend",M),window.addEventListener("blur",M),()=>{window.removeEventListener("dragover",N),window.removeEventListener("dragover",C),window.removeEventListener("drop",N),window.removeEventListener("dragend",M),window.removeEventListener("blur",M)}},[n,b,w]);let x={onDragEnter:N=>{if(r)return;let C=Po(N,d.current);if(!C)return;N.preventDefault(),C==="images"&&(p.current+=1);let M=Hp(N.dataTransfer);h(C,M>=1?vs(t,"images",M,!0):t("drop.noImage")),w(N.clientX,N.clientY)},onDragOver:N=>{r||!Po(N,d.current)||(N.preventDefault(),N.dataTransfer.dropEffect="copy",w(N.clientX,N.clientY))},onDragLeave:N=>{r||Po(N,d.current)==="images"&&(p.current-=1,p.current<=0&&b())},onDrop:N=>{if(r)return;let C=Po(N,d.current);if(!C)return;N.preventDefault();let M=n.current,O=!M||ws(N.clientX,N.clientY,M.getBoundingClientRect());if(b(),C==="images"){let D=Bp(N.dataTransfer);if(!D.length){l();return}a(D,g(N.clientX,N.clientY,!0));return}O&&s(C,g(N.clientX,N.clientY,!1))}},k=(0,Ue.useCallback)((N,C)=>{N.dataTransfer.setData(ys,C),N.dataTransfer.effectAllowed="copy",h(C,vs(t,C,0,!0)),w(N.clientX,N.clientY)},[w,h]),S=(0,$p.createPortal)((0,Bt.jsx)("div",{ref:m,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,Bt.jsxs)("div",{ref:f,className:`im-drop-chip${c?" show":""}`,children:[(0,Bt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,Bt.jsx)(_e,{name:c==="group"?"layers":c==="images"?"image":"plus",size:14})}),(0,Bt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,Bt.jsx)(_e,{name:"close",size:14})}),(0,Bt.jsx)("span",{ref:y,children:t("drop.releaseImage")})]})}),document.body);return{dropIntent:c,dropChip:S,dragHandlers:x,startToolbarDrag:k,hideDropChip:b}}var $t=require("react");var Wp=2;function Vp({rootRef:e,canvasRef:t,instanceRef:n,setNodes:r,modalOpen:o}){let[i,a]=(0,$t.useState)(null),[s,l]=(0,$t.useState)(null),c=(0,$t.useRef)(null),u=(0,$t.useCallback)(()=>a(null),[]);return(0,$t.useEffect)(()=>{if(o){c.current=null,l(null);return}let d=t.current,p=e.current;if(!d||!p)return;let m=w=>{if(w.button!==2)return;let g=n.current;if(!g)return;let x=w.target instanceof Element?w.target:null;if(x?.closest("input, textarea, [contenteditable]"))return;let k=g.screenToFlowPosition({x:w.clientX,y:w.clientY}),S=x?.closest(".react-flow__node"),N=S instanceof HTMLElement?S.dataset.id??null:null;c.current={startFlow:k,nodeId:N,clientX:w.clientX,clientY:w.clientY},l({x:k.x,y:k.y,width:0,height:0}),w.preventDefault()},f=w=>{let g=c.current,x=n.current;if(!g||!x)return;let k=x.screenToFlowPosition({x:w.clientX,y:w.clientY});l({x:Math.min(g.startFlow.x,k.x),y:Math.min(g.startFlow.y,k.y),width:Math.abs(k.x-g.startFlow.x),height:Math.abs(k.y-g.startFlow.y)})},y=w=>{let g=c.current,x=n.current;if(!g||!x)return;c.current=null;let k=x.screenToFlowPosition({x:w.clientX,y:w.clientY}),S={x:Math.min(g.startFlow.x,k.x),y:Math.min(g.startFlow.y,k.y),width:Math.abs(k.x-g.startFlow.x),height:Math.abs(k.y-g.startFlow.y)};if(l(null),S.width<Wp&&S.height<Wp){a(g.nodeId?{x:g.clientX,y:g.clientY,nodeId:g.nodeId}:null);return}a(null),r(N=>{let C=!1,M=N.map(O=>{let D=Fe(O),L=O.position.x>=S.x&&O.position.y>=S.y&&O.position.x+D.width<=S.x+S.width&&O.position.y+D.height<=S.y+S.height;return L===!!O.selected?O:(C=!0,{...O,selected:L})});return C?M:N})},h=w=>{let g=w.target instanceof Element?w.target:null;g&&(g.closest("input, textarea, [contenteditable]")||w.preventDefault())},b=()=>{c.current&&(c.current=null,l(null))};return d.addEventListener("mousedown",m),window.addEventListener("mousemove",f),window.addEventListener("mouseup",y),p.addEventListener("contextmenu",h,!0),window.addEventListener("blur",b),()=>{d.removeEventListener("mousedown",m),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",y),p.removeEventListener("contextmenu",h,!0),window.removeEventListener("blur",b)}},[t,e,n,r,o]),{nodeMenu:i,boxRect:s,closeMenu:u,setNodeMenu:a}}var kt=require("react"),qp=require("react-dom");function vt(e,t,n={}){let r={id:e,label:t};return n.danger&&(r.danger=!0),n.disabled&&(r.disabled=!0),{kind:"action",action:r}}var ks={kind:"separator"};function Up(e,t){let n=[];if(t.selectedCount>1&&(n.push(vt("delete-selection",`\u5220\u9664\u6240\u9009 ${t.selectedCount} \u9879`,{danger:!0})),n.push(ks)),e==="image"){let o=!t.hasUrl;n.push(vt("preview","\u9884\u89C8\u5927\u56FE",{disabled:o}),vt("crop","\u88C1\u526A",{disabled:o}),vt("upscale","\u653E\u5927",{disabled:o}),vt("split","\u5207\u5206",{disabled:o}),vt("mask","\u8499\u7248\u91CD\u7ED8",{disabled:o}),vt("replace","\u66FF\u6362\u56FE\u7247"),ks)}else e==="prompt"&&n.push(vt("run","\u8FD0\u884C"),vt("copy-prompt","\u590D\u5236\u63D0\u793A\u8BCD"),ks);let r=t.selectedCount>1?"\u4EC5\u5220\u9664\u6B64\u9879":"\u5220\u9664";return n.push(vt("delete",r,{danger:!0})),n}function Ss(e,t,n,r=8){let o=Math.max(0,n.width-t.width-r),i=Math.max(0,n.height-t.height-r);return{x:Math.min(Math.max(0,e.x),o),y:Math.min(Math.max(0,e.y),i)}}function Gp(e){return e.reduce((t,n)=>t+(n.kind==="action"?28:9),0)}function Xp(e){return e==="Escape"||e==="Tab"}var si=require("react/jsx-runtime");function Yp(){return{width:window.innerWidth,height:window.innerHeight}}function $v(e,t,n){return Ss({x:e,y:t},{width:200,height:Gp(n)},Yp())}function Kp({x:e,y:t,items:n,onPick:r,onClose:o}){let i=ae(),a=(0,kt.useRef)(null),[s,l]=(0,kt.useState)(()=>$v(e,t,n)),[c,u]=(0,kt.useState)(null);return(0,kt.useEffect)(()=>(Jr(),()=>ei()),[]),(0,kt.useLayoutEffect)(()=>{let d=a.current?.getBoundingClientRect().height??0;if(d<=0)return;let p=Ss({x:e,y:t},{width:200,height:d},Yp());l(m=>m.x===p.x&&m.y===p.y?m:p)},[e,t]),(0,kt.useEffect)(()=>{let d=f=>{let y=f.target;y instanceof Node&&a.current?.contains(y)||o()},p=f=>{f.defaultPrevented||Xp(f.key)&&o()},m=()=>o();return document.addEventListener("pointerdown",d),document.addEventListener("keydown",p),window.addEventListener("resize",m),window.addEventListener("scroll",m,!0),()=>{document.removeEventListener("pointerdown",d),document.removeEventListener("keydown",p),window.removeEventListener("resize",m),window.removeEventListener("scroll",m,!0)}},[o]),(0,qp.createPortal)((0,si.jsx)("div",{ref:a,role:"menu","aria-label":i("menu.aria"),"data-testid":"node-context-menu",className:"im-select-list",style:{left:s.x,top:s.y,width:200,zIndex:72,userSelect:"none"},children:n.map((d,p)=>{if(d.kind==="separator")return(0,si.jsx)("div",{role:"separator",className:"im-menu-separator"},`separator-${p}`);let{action:m}=d,f=m.disabled===!0;return(0,si.jsx)("button",{type:"button",role:"menuitem","data-testid":`node-menu-${m.id}`,"aria-disabled":f?"true":void 0,className:`im-select-option${c===m.id?" is-active":""}${m.danger?" is-danger":""}${f?" is-disabled":""}`,style:{height:28,minHeight:0,paddingTop:0,paddingBottom:0},onClick:()=>{f||r(m.id)},onMouseEnter:()=>u(m.id),onMouseLeave:()=>u(null),children:m.label},m.id)})}),document.body)}var Fv={"delete-selection":"menu.deleteSelection",preview:"menu.preview",crop:"menu.crop",upscale:"menu.upscale",split:"menu.split",mask:"menu.mask",replace:"menu.replace",run:"menu.run","copy-prompt":"menu.copyPrompt",delete:"menu.delete"};function Zp(e,t,n){if(e==="delete")return n(t>1?"menu.deleteOnly":"menu.delete");if(e==="delete-selection")return n("menu.deleteSelection",{count:t});let r=Fv[e];return r?n(r):e}var jp="dsh-imagora.canvas-minimap.v1";function Qp(){try{let e=localStorage.getItem(jp);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Jp(e){try{localStorage.setItem(jp,e?"1":"0")}catch{}}var Qt=require("react/jsx-runtime");function li(e,t){return t>1?e("inspector.countSuffix",{count:t}):""}function Ns(e,t,n,r,o={}){return e(t>1?r:n,{count:t,...o})}function em(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:r,pickingOutputDir:o}=e,i=ae();return t<1?null:(0,Qt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Qt.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!r.length,title:Ns(i,r.length,"inspector.run.title.one","inspector.run.title.many"),onClick:e.onRunSelected,children:Ns(i,r.length,"inspector.runOne","inspector.runMany")}):null,(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:i("inspector.layout.title"),onClick:e.onAutoLayout,children:[i("inspector.layout"),li(i,t)]}),(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:i("inspector.connect.title"),onClick:e.onAutoConnectSelected,children:[i("inspector.connect"),li(i,t)]}),n>0?(0,Qt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:o,title:Ns(i,n,"inspector.outputDir.title.one","inspector.outputDir.title.many"),onClick:e.onSetOutputDir,children:o?i("common.choosing"):`${i("inspector.outputDir")}${li(i,n)}`}):null,(0,Qt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:[i("inspector.delete"),li(i,t)]})]})}var Ke=require("react/jsx-runtime");function tm(){let e=ae();return(0,Ke.jsxs)("div",{className:"im-empty",children:[(0,Ke.jsx)("strong",{children:e("empty.title")}),(0,Ke.jsx)("span",{children:e("empty.line1")}),(0,Ke.jsx)("span",{children:e("empty.line2")})]})}var Wv=5;function nm({logs:e}){if(!e.length)return null;let t=e.slice(-Wv);return(0,Ke.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,r)=>(0,Ke.jsx)("div",{className:"im-log-line",children:n},`${r}-${n}`))})}var Vv={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function om({text:e}){return e?(0,Ke.jsx)("div",{style:Vv,children:e}):null}function rm({tone:e,children:t,action:n}){return(0,Ke.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ke.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ke.jsx)(_e,{name:e==="error"?"help":"clock"})}),(0,Ke.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ke.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var Ne=require("react"),um=require("react-dom");async function Uv(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let r=await createImageBitmap(n);try{let o=document.createElement("canvas");o.width=r.width,o.height=r.height;let i=o.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(r,0,0);let a=await new Promise(s=>o.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{r.close()}}async function im(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await Uv(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function am(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var zo=e=>Math.min(8,Math.max(.2,e));function sm(e,t,n,r){if(!n.width||!n.height)return e;let o=n.width*t,i=n.height*t,a=Math.max(0,(o-r.width)/2),s=Math.max(0,(i-r.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function lm(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function cm(e,t,n){return Math.round(e*lm(t,n)*100)}function dm(e,t){let n=lm(e,t);return n?zo(1/n):1}var ye=require("react/jsx-runtime"),ci=1.2,Gv=5;function di({imageUrl:e,name:t,copyPath:n,onClose:r}){let o=ae(),[i,a]=(0,Ne.useState)({zoom:1,pan:{x:0,y:0}}),[s,l]=(0,Ne.useState)(!1),[c,u]=(0,Ne.useState)(null),d=(0,Ne.useRef)(null),p=(0,Ne.useRef)(!1),m=c?.kind==="copying",f=(0,Ne.useRef)(null),[y,h]=(0,Ne.useState)(null),b=(0,Ne.useRef)({width:0,height:0}),w=(0,Ne.useRef)(null),g=(0,Ne.useRef)(null),x=(0,Ne.useRef)(null),k=(0,Ne.useRef)(null),S=(0,Ne.useCallback)(_=>{let R=x.current;return R?{zoom:_.zoom,pan:sm(_.pan,_.zoom,b.current,{width:R.clientWidth,height:R.clientHeight})}:_},[]),N=(0,Ne.useCallback)(()=>a({zoom:1,pan:{x:0,y:0}}),[]),C=(0,Ne.useCallback)(()=>{let _=k.current;if(!_)return;b.current={width:_.clientWidth,height:_.clientHeight};let R={width:_.naturalWidth,height:_.naturalHeight};f.current=R,h(V=>V&&V.width===R.width&&V.height===R.height?V:R)},[]);(0,Ne.useEffect)(()=>{let _=()=>C();return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[C]);let M=(0,Ne.useCallback)(()=>{let _=dm(f.current,b.current);a(R=>S({zoom:_,pan:R.pan}))},[S]),O=(0,Ne.useCallback)(()=>{let _=f.current,R=g.current;if(!_||!R)return;let V=R.clientWidth*.98,W=R.clientHeight*.98,F=zo(Math.min(1,V/_.width,W/_.height));a({zoom:F,pan:{x:0,y:0}})},[]);(0,Ne.useEffect)(()=>{let _=x.current;if(!_)return;let R=V=>{V.preventDefault(),V.stopPropagation();let W=_.getBoundingClientRect(),F=V.clientX-W.left-W.width/2,$=V.clientY-W.top-W.height/2;a(Y=>{let U=zo(V.deltaY<0?Y.zoom*ci:Y.zoom/ci);if(U===Y.zoom)return Y;let ee=U/Y.zoom;return S({zoom:U,pan:{x:F-(F-Y.pan.x)*ee,y:$-($-Y.pan.y)*ee}})})};return _.addEventListener("wheel",R,{passive:!1}),()=>_.removeEventListener("wheel",R)},[S]),(0,Ne.useEffect)(()=>{let _=R=>{R.key==="Escape"&&r()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[r]),(0,Ne.useEffect)(()=>()=>{d.current&&window.clearTimeout(d.current)},[]);let D=(_,R)=>{u({kind:_,text:R}),d.current&&window.clearTimeout(d.current),d.current=_==="copying"?null:window.setTimeout(()=>u(null),1200)},L=async(_,R)=>{if(!p.current){p.current=!0,D("copying",o("zoom.copying"));try{await _(),D("copied",R)}catch(V){D("failed",V instanceof Error?V.message:o("zoom.copyFailed"))}finally{p.current=!1}}},T=_=>{i.zoom<=1||(_.preventDefault(),_.stopPropagation(),_.currentTarget instanceof Element&&_.currentTarget.setPointerCapture(_.pointerId),w.current={startX:_.clientX,startY:_.clientY,panX:i.pan.x,panY:i.pan.y,moved:!1,onImage:_.target===k.current},l(!0))},v=_=>{let R=w.current;if(!R)return;let V=_.clientX-R.startX,W=_.clientY-R.startY;!R.moved&&Math.hypot(V,W)<=Gv||(R.moved=!0,a(F=>S({...F,pan:{x:R.panX+V,y:R.panY+W}})))},E=()=>{let _=w.current;w.current=null,l(!1),_&&!_.moved&&!_.onImage&&r()},z=_=>{let R=_.target instanceof Element?_.target:null;R&&(R.closest("button, a, [data-zoom-image], [data-zoom-controls]")||r())},I=_=>a(R=>S({...R,zoom:zo(R.zoom*_)}));return(0,um.createPortal)((0,ye.jsxs)("div",{ref:g,className:"im-zoom-overlay",onPointerDown:z,onClick:_=>_.stopPropagation(),children:[(0,ye.jsx)("div",{ref:x,className:"im-zoom-viewport",style:{cursor:s?"grabbing":i.zoom>1?"grab":"zoom-in"},onPointerDown:T,onPointerMove:v,onPointerUp:E,onPointerCancel:E,onDoubleClick:_=>{_.stopPropagation(),N()},children:(0,ye.jsx)("img",{ref:k,"data-zoom-image":!0,src:e,alt:t??o("zoom.alt"),draggable:!1,onLoad:()=>{let _=k.current;_&&(f.current={width:_.naturalWidth,height:_.naturalHeight},b.current={width:_.clientWidth,height:_.clientHeight},C())},className:"im-zoom-image",style:{transform:`translate(${i.pan.x}px, ${i.pan.y}px) scale(${i.zoom})`,transition:s?"none":"transform 0.1s ease-out"}})}),(0,ye.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,ye.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,ye.jsx)("div",{"aria-hidden":!0}),(0,ye.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":o("zoom.close"),title:o("zoom.close.title"),onClick:r,children:(0,ye.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,ye.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,ye.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,ye.jsxs)("div",{className:"im-zoom-dock",title:o("zoom.dock.title"),children:[(0,ye.jsxs)("div",{className:"im-zoom-group",children:[(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":o("zoom.out"),title:o("zoom.out"),onClick:()=>I(1/ci),children:(0,ye.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,ye.jsx)("path",{d:"M3.5 8h9"})})}),(0,ye.jsxs)("span",{className:"im-zoom-readout",title:y?o("zoom.scale.natural",{width:y.width,height:y.height}):o("zoom.scale.title"),children:[cm(i.zoom,y,b.current),"%"]}),(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":o("zoom.in"),title:o("zoom.in"),onClick:()=>I(ci),children:(0,ye.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,ye.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,ye.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,ye.jsxs)("div",{className:"im-zoom-group",children:[(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:O,children:o("zoom.fit")}),(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:M,title:o("zoom.actual.title"),children:o("zoom.actual")})]}),(0,ye.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,ye.jsxs)("div",{className:"im-zoom-group",children:[(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:m,onClick:()=>void L(()=>im(e),o("zoom.copied")),children:o("zoom.copyImage")}),n?(0,ye.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:m,onClick:()=>void L(()=>am(n),o("zoom.copiedPath")),children:o("zoom.copyPath")}):null,(0,ye.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:o("zoom.openTab")})]}),c?(0,ye.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var Ms=require("react");var Jt=require("react"),fm=require("react-dom");var St=require("react/jsx-runtime"),pm=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),Ro=[];function mm(e){return Ro[Ro.length-1]===e}function Le({title:e,subtitle:t,children:n,onClose:r,size:o="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:l=!1,headerless:c=!1}){let u=`im-modal-${(0,Jt.useId)()}`,d=`${u}-title`,p=(0,Jt.useRef)(null),m=(0,Jt.useRef)(null),f=(0,Jt.useRef)(r);return f.current=r,(0,Jt.useEffect)(()=>{m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,Ro.push(u);let h=p.current;(a?.current??h?.querySelector(pm)??h)?.focus();let w=g=>{if(!mm(u))return;if(g.key==="Escape"){if(up())return;g.preventDefault(),g.stopPropagation(),f.current();return}if(g.key!=="Tab"||!h)return;let x=Array.from(h.querySelectorAll(pm)).filter(N=>!N.hidden&&N.getAttribute("aria-hidden")!=="true");if(!x.length){g.preventDefault(),h.focus();return}let k=x[0],S=x[x.length-1];!k||!S||(g.shiftKey&&(document.activeElement===k||!h.contains(document.activeElement))?(g.preventDefault(),S.focus()):!g.shiftKey&&document.activeElement===S&&(g.preventDefault(),k.focus()))};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0);let g=Ro.lastIndexOf(u);g>=0&&Ro.splice(g,1);let x=m.current;window.setTimeout(()=>x?.focus(),0)}},[a]),(0,fm.createPortal)((0,St.jsx)("div",{className:`im-modal-shell${l?" im-modal-shell--nested":""}`,onMouseDown:h=>{s&&h.target===h.currentTarget&&mm(u)&&r()},children:(0,St.jsxs)("section",{ref:p,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${o}`,onMouseDown:h=>h.stopPropagation(),children:[c?(0,St.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,St.jsxs)("header",{className:"im-modal-header",children:[(0,St.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,St.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,St.jsx)("div",{className:"im-modal-body",children:n}),i?(0,St.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var pe=require("react/jsx-runtime");function gm({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:r}){let o=ae(),[i,a]=(0,Ms.useState)(()=>o("save.defaultName",{stamp:new Date().toISOString().slice(5,16).replace("T"," ")})),[s,l]=(0,Ms.useState)(null),c=i.trim(),u=e.some(m=>m.name===c),d=()=>{if(c){if(u&&s!==c){l(c);return}n(c)}},p=r?o("save.where.shared",{dir:`${r}\\output\\workflows`}):o("save.where",{dir:o("save.where.fallback")});return s?(0,pe.jsx)(Le,{title:o("save.overwriteTitle"),subtitle:o("save.overwriteSubtitle",{name:s}),size:"sm",onClose:()=>l(null),footer:(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>l(null),children:o("save.back")}),(0,pe.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(s),children:o("save.overwrite")})]}),children:(0,pe.jsx)("p",{className:"im-modal-note",children:o("save.overwriteWarn")})}):(0,pe.jsxs)(Le,{title:o("save.title"),subtitle:o("save.subtitle"),size:"sm",onClose:t,footer:(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:o("common.cancel")}),(0,pe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c,onClick:d,children:o("common.save")})]}),children:[(0,pe.jsx)("input",{autoFocus:!0,value:i,"aria-label":o("save.nameAria"),placeholder:o("save.namePlaceholder"),className:"im-field",onChange:m=>a(m.target.value),onKeyDown:m=>{m.key==="Enter"&&d()}}),(0,pe.jsx)("p",{className:"im-modal-note",style:{marginTop:8},children:p}),e.length?(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:o("save.overwriteMore")}),(0,pe.jsx)("div",{className:"im-pick-list",children:e.map(m=>(0,pe.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>a(m.name),children:[(0,pe.jsx)("span",{className:"im-pick-name",children:m.name}),(0,pe.jsx)("span",{className:"im-pick-meta",children:m.modified})]},m.name))})]}):null]})}function hm({workflows:e,onCancel:t,onPick:n,imagoraRoot:r}){let o=ae(),i=r?o("load.where",{dir:`${r}\\output\\workflows`}):o("load.where",{dir:o("save.where.fallback")});return(0,pe.jsx)(Le,{title:o("load.title"),subtitle:o("load.subtitle"),size:"sm",onClose:t,footer:(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:o("common.close")}),children:e.length?(0,pe.jsx)("div",{className:"im-workflow-list",children:e.map(a=>(0,pe.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(a.name),children:[(0,pe.jsx)("span",{className:"im-workflow-list__name",children:a.name}),(0,pe.jsx)("span",{className:"im-workflow-list__meta",children:new Date(a.modified).toLocaleString()})]},a.name))}):(0,pe.jsxs)(pe.Fragment,{children:[(0,pe.jsx)("div",{className:"im-modal-empty",children:o("load.empty")}),(0,pe.jsx)("p",{className:"im-modal-note",children:i})]})})}var Xv=[["help.rows.canvas","help.rows.canvasText"],["help.rows.node","help.rows.nodeText"],["help.rows.edge","help.rows.edgeText"],["help.rows.keys","help.rows.keysText"],["help.rows.refs","help.rows.refsText"],["help.rows.run","help.rows.runText"],["help.rows.save","help.rows.saveText"]];function bm({onClose:e,config:t}){let n=ae();return(0,pe.jsx)(Le,{title:n("help.title"),subtitle:n("help.subtitle"),size:"md",onClose:e,footer:(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:n("common.close")}),children:(0,pe.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,pe.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:Xv.map(([r,o])=>(0,pe.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,pe.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n(r)}),(0,pe.jsx)("span",{style:{lineHeight:1.6},children:n(o)})]},r))}),t?(0,pe.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:[n("help.config",{source:t.source==="plugin"?n("help.config.plugin"):t.root||n("help.config.missing"),model:t.modelLabel}),(0,pe.jsx)("br",{}),n("help.output",{dir:t.defaultOutputDir})]}):null]})})}var nt=require("react");function Ze(e,t,n){if(Number.isNaN(e))return t;let r=Math.min(t,n),o=Math.max(t,n);return Math.min(o,Math.max(r,e))}function xm(e,t=.06){let n=Ze(e.width,t,1),r=Ze(e.height,t,1);return{width:n,height:r,x:Ze(e.x,0,1-n),y:Ze(e.y,0,1-r)}}function wm(e,t,n){return{...e,x:Ze(e.x+t,0,1-e.width),y:Ze(e.y+n,0,1-e.height)}}function vm(e,t,n,r,o,i){let a={...e};if(r.includes("e")&&(a.width=e.width+t),r.includes("s")&&(a.height=e.height+n),r.includes("w")&&(a.x=e.x+t,a.width=e.width-t),r.includes("n")&&(a.y=e.y+n,a.height=e.height-n),o!==null&&o>0&&i.width>0&&i.height>0){let s=o*(i.height/i.width);(r.includes("e")||r.includes("w"))&&!r.includes("n")&&!r.includes("s")||r.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,r.includes("w")&&(a.x=e.x+e.width-a.width),r.includes("n")&&(a.y=e.y+e.height-a.height);let u=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=u,a.height*=u,a.width<.06||a.height<.06){let m=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=m,a.height*=m}a.width=Ze(a.width,.06,1),a.height=Ze(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),p=Math.min(a.height,d/s,1);a.width=p*s,a.height=p}else a.width=Ze(a.width,.06,1),a.height=Ze(a.height,.06,1);return a.x=Ze(a.x,0,1-a.width),a.y=Ze(a.y,0,1-a.height),a}function km(e,t,n){let r=t*(n.height/n.width),o=e.width,i=o/r;return i>e.height&&(i=e.height,o=i*r),o>1&&(o=1,i=o/r),i>1&&(i=1,o=i*r),{x:Ze(e.x+(e.width-o)/2,0,1-o),y:Ze(e.y+(e.height-i)/2,0,1-i),width:o,height:i}}function Es(e,t,n){let r=Math.max(1,e,t),o=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(o)))/r;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function qv(e,t){let n=Math.abs(Math.round(e)),r=Math.abs(Math.round(t));for(;r;){let o=n%r;n=r,r=o}return Math.max(1,n)}function Sm(e,t){let n=qv(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function _s(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),r.src=e})}async function en(e){let t=await _s(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function ui(e,t){let n=await _s(e);if(t)return ym(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let r=Math.min(n.width,n.height),o=Math.max(0,Math.floor((n.width-r)/2)),i=Math.max(0,Math.floor((n.height-r)/2));return ym(n,o,i,r,r)}async function Cm(e,t){let n=await _s(e),{width:r,height:o}=Es(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?Yv(n,r,o):Nm(n,n.width,n.height,r,o,t.algorithm)}function ym(e,t,n,r,o){let i=document.createElement("canvas");i.width=Math.max(1,r),i.height=Math.max(1,o);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,r,o,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function Yv(e,t,n){let r=e,o=e.width,i=e.height;for(;o*2<t&&i*2<n;){let a=o*2,s=i*2;r=Mm(r,o,i,a,s,"high"),o=a,i=s}return Nm(r,o,i,t,n,"high")}function Nm(e,t,n,r,o,i){return Mm(e,t,n,r,o,i).toDataURL("image/png")}function Mm(e,t,n,r,o,i){let a=document.createElement("canvas");a.width=r,a.height=o;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,r,o)),a}var De=require("react/jsx-runtime"),Em=[{label:null,ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}];function _m(e,t){return e.label??t("crop.ratio.free")}var Zv=["nw","n","ne","e","se","s","sw","w"],Is={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function Im({src:e,name:t,onClose:n,onConfirm:r}){let o=ae(),i=(0,nt.useRef)(null),[a,s]=(0,nt.useState)(null),[l,c]=(0,nt.useState)({x:.08,y:.08,width:.84,height:.84}),[u,d]=(0,nt.useState)(null),[p,m]=(0,nt.useState)(!1),[f,y]=(0,nt.useState)(null),h=(0,nt.useRef)(null);(0,nt.useEffect)(()=>{let C=!0;return en(e).then(M=>{C&&(s(M),c(xm({x:.06,y:.06,width:.88,height:.88})))}).catch(M=>{C&&y(o("dialog.readImageFailed",{reason:me(M)}))}),()=>{C=!1}},[e]);let b=C=>{d(C),a&&C!==null&&c(M=>km(M,C,a))},w=(C,M)=>{C.stopPropagation(),C.target.setPointerCapture?.(C.pointerId),h.current={mode:M,startX:C.clientX,startY:C.clientY,base:l}},g=(0,nt.useCallback)(C=>{let M=h.current,O=i.current;if(!M||!O)return;let D=O.getBoundingClientRect();if(!D.width||!D.height)return;let L=(C.clientX-M.startX)/D.width,T=(C.clientY-M.startY)/D.height;c(M.mode==="move"?wm(M.base,L,T):vm(M.base,L,T,M.mode,u,a??{width:1,height:1}))},[u,a]),x=()=>{h.current=null},k=async()=>{m(!0),y(null);try{let C=await ui(e,l),M=Math.round(l.width*(a?.width??0)),O=Math.round(l.height*(a?.height??0)),D=u?_m(Em.find(L=>L.ratio===u),o):null;await r(C,D?o("crop.resultName.ratio",{width:M,height:O,ratio:D}):o("crop.resultName",{width:M,height:O}))}catch(C){y(o("crop.failed",{reason:me(C)}))}finally{m(!1)}},S=a?Math.round(l.width*a.width):0,N=a?Math.round(l.height*a.height):0;return(0,De.jsx)(Le,{title:o("crop.title"),subtitle:o("crop.subtitle"),size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsxs)("span",{className:"im-modal-note",children:[o("crop.note",{width:S,height:N}),a?` \xB7 ${o("crop.note.original",{width:a.width,height:a.height})}`:"",a?` \xB7 ${o("crop.note.gcd",{ratio:Sm(a.width,a.height)})}`:"",(0,De.jsx)("br",{}),o("crop.note.hint",{min:Math.round(.06*100)})]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:o("common.cancel")}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:p||!a||S<8||N<8,onClick:()=>void k(),children:o(p?"crop.busy":"crop.confirm")})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":o("crop.ratio.group"),children:[(0,De.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:o("crop.ratio")}),Em.map(C=>{let M=C.ratio===u;return(0,De.jsx)("button",{type:"button","aria-pressed":M,className:`im-chip im-chip--sm im-chip--action${M?" is-brand":""}`,onClick:()=>b(C.ratio),children:_m(C,o)},C.label??"free")}),(0,De.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[S," \xD7 ",N,"px"]})]}),(0,De.jsxs)("div",{ref:i,onPointerMove:g,onPointerUp:x,onPointerCancel:x,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,De.jsx)("img",{src:e,alt:t??o("crop.alt"),style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,De.jsx)("div",{onPointerDown:C=>w(C,"move"),style:{position:"absolute",left:`${l.x*100}%`,top:`${l.y*100}%`,width:`${l.width*100}%`,height:`${l.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:Zv.map(C=>(0,De.jsx)("span",{onPointerDown:M=>w(M,C),style:{position:"absolute",left:Is[C].left,top:Is[C].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:Is[C].cursor}},C))})]}),f?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:f}):null]})})}var Ge=require("react");function Ps(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function zs(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Rs(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:zs(e)*n/2}function Pm(e,t,n=.004){if(!Ps(t))return e;let r=e[e.length-1];if(!r)return[t];let o=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-r.x,t.y-r.y)<=o?e:[...e,t]}function zm(e,t,n,r){if(!Ps(e)||!Ps(t))return[];if(!(r.width>0)||!(r.height>0))return[];if(!Number.isFinite(r.width)||!Number.isFinite(r.height))return[];let o=n/4;if(!Number.isFinite(o)||o<=0)return[];let i=(t.x-e.x)*r.width,a=(t.y-e.y)*r.height,s=Math.hypot(i,a);if(!(s>0))return[];let l=Math.ceil(s/o);if(l<=1)return[];let c=Math.min(l,2048),u=[];for(let d=1;d<c;d+=1){let p=d/c;u.push({x:e.x+(t.x-e.x)*p,y:e.y+(t.y-e.y)*p})}return u}function jv(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function Rm(e){return!jv(e)}var Ae=require("react/jsx-runtime"),pi=640;function Tm({src:e,name:t,onClose:n,onConfirm:r}){let o=ae(),i=(0,Ge.useRef)(null),a=(0,Ge.useRef)(!1),[s,l]=(0,Ge.useState)(null),[c,u]=(0,Ge.useState)(null),[d,p]=(0,Ge.useState)([]),[m,f]=(0,Ge.useState)("paint"),[y,h]=(0,Ge.useState)(.08),[b,w]=(0,Ge.useState)(!1),[g,x]=(0,Ge.useState)(null);(0,Ge.useEffect)(()=>{let T=!0;en(e).then(E=>{T&&l(E)}).catch(E=>{T&&x(o("dialog.readImageFailed",{reason:me(E)}))});let v=new Image;return v.crossOrigin="anonymous",v.onload=()=>{T&&u(v)},v.src=e,()=>{T=!1,u(null)}},[e]);let k=(0,Ge.useMemo)(()=>s?s.width>=s.height?{width:pi,height:Math.round(s.height/s.width*pi)}:{width:Math.round(s.width/s.height*pi),height:pi}:{width:0,height:0},[s]);(0,Ge.useEffect)(()=>{let T=i.current;if(!T||!c||!k.width)return;let v=T.getContext("2d");if(!v||(T.width=k.width,T.height=k.height,v.clearRect(0,0,k.width,k.height),v.drawImage(c,0,0,k.width,k.height),!s))return;let E=Rs(y,{width:k.width,height:k.height});v.save(),v.globalAlpha=.55,v.fillStyle="#ffffff",v.strokeStyle="#ffffff",v.lineWidth=E*2,v.lineCap="round",v.lineJoin="round";for(let z of d){z.mode==="erase"?(v.globalCompositeOperation="destination-out",v.strokeStyle="#000",v.fillStyle="#000"):(v.globalCompositeOperation="source-over",v.strokeStyle="#ffffff",v.fillStyle="#ffffff");let I=z.points;if(I.length&&(v.beginPath(),v.arc(I[0].x*k.width,I[0].y*k.height,E,0,Math.PI*2),v.fill(),I.length>1)){v.beginPath(),v.moveTo(I[0].x*k.width,I[0].y*k.height);for(let _ of I.slice(1))v.lineTo(_.x*k.width,_.y*k.height);v.stroke()}}v.restore()},[k,d,y,s,c]);let S=T=>{let v=i.current;if(!v)return null;let E=v.getBoundingClientRect();return!E.width||!E.height?null:{x:Math.min(1,Math.max(0,(T.clientX-E.left)/E.width)),y:Math.min(1,Math.max(0,(T.clientY-E.top)/E.height))}},N=T=>{let v=S(T);v&&(T.currentTarget.setPointerCapture?.(T.pointerId),a.current=!0,p(E=>[...E,{mode:m,size:y,points:[v]}]))},C=T=>{if(!a.current)return;let v=S(T);v&&p(E=>{let z=E[E.length-1];if(!z)return E;let I=Pm(z.points,v);return I===z.points?E:[...E.slice(0,-1),{...z,points:I}]})},M=()=>{a.current=!1},O=async()=>{if(!c||!s)throw new Error(o("mask.noBase"));let T=document.createElement("canvas");T.width=s.width,T.height=s.height;let v=T.getContext("2d");if(!v)throw new Error(o("mask.noCanvas"));v.fillStyle="#ffffff",v.fillRect(0,0,s.width,s.height);let E=Rs(y,{width:s.width,height:s.height});v.globalCompositeOperation="destination-out",v.lineWidth=E*2,v.lineCap="round",v.lineJoin="round",v.strokeStyle="#000",v.fillStyle="#000";for(let z of d){if(z.mode!=="paint")continue;let I=zm(z.points[0],z.points[z.points.length-1],E/4,{width:s.width,height:s.height});if(I.length&&(v.beginPath(),v.arc(I[0].x*s.width,I[0].y*s.height,E,0,Math.PI*2),v.fill(),I.length>1)){v.beginPath(),v.moveTo(I[0].x*s.width,I[0].y*s.height);for(let _ of I.slice(1))v.lineTo(_.x*s.width,_.y*s.height);v.stroke()}}return T.toDataURL("image/png")},D=async()=>{w(!0),x(null);try{let T=await O();await r(T,o("mask.resultName"))}catch(T){x(o("mask.failed",{reason:me(T)}))}finally{w(!1)}},L=Rm(d);return(0,Ae.jsx)(Le,{title:o("mask.title"),subtitle:o("mask.subtitle"),size:"lg",onClose:n,footer:(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:o("common.cancel")}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:b||L,onClick:()=>void D(),children:o(b?"mask.busy":"mask.confirm")})]}),children:(0,Ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ae.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",key:"mask.mode.paint"},{mode:"erase",key:"mask.mode.erase"}].map(T=>(0,Ae.jsx)("button",{type:"button","aria-pressed":m===T.mode,className:`im-chip im-chip--sm im-chip--action${m===T.mode?" is-brand":""}`,onClick:()=>f(T.mode),children:o(T.key)},T.mode)),(0,Ae.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:[o("mask.brush"),(0,Ae.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(y*100),onChange:T=>h(zs(Number(T.target.value)/100)),className:"im-range"}),(0,Ae.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(y*100),"%"]})]}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!d.length,onClick:()=>p([]),children:o("mask.clear")}),(0,Ae.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:d.length?o("mask.strokes",{count:d.length}):o("mask.noStrokes")})]}),(0,Ae.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,Ae.jsx)("canvas",{ref:i,onPointerDown:N,onPointerMove:C,onPointerUp:M,onPointerCancel:M,style:{width:k.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,Ae.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:[o("mask.note"),t?` \xB7 ${t}`:"",s?` \xB7 ${o("mask.note.original",{width:s.width,height:s.height})}`:""]}),g?(0,Ae.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:g}):null]})})}var he=require("react");function Dm(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(1)}%`}function Am(e){if(typeof e!="number"||!Number.isFinite(e)||e<=0)return"-";if(e<60)return`${e.toFixed(1)}s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}m${String(n).padStart(2,"0")}s`}var tn=require("react"),Om=require("react-dom"),Cn=require("react/jsx-runtime");function Lm({text:e}){let t=(0,tn.useRef)(null),n=(0,tn.useRef)(null),[r,o]=(0,tn.useState)(null),[i,a]=(0,tn.useState)(0),s=u=>{let d=t.current;d&&d.scrollHeight>d.clientHeight&&o(u.clientY)},l=u=>{o(d=>d!==null?u.clientY:d)},c=()=>{o(null),a(0)};return(0,tn.useLayoutEffect)(()=>{if(r!==null&&n.current){let u=n.current.getBoundingClientRect();a(Math.max(8,Math.min(r+16,window.innerHeight-u.height-8)))}},[r,e]),(0,Cn.jsxs)(Cn.Fragment,{children:[(0,Cn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:l,onMouseLeave:c,children:e}),r!==null?(0,Om.createPortal)((0,Cn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var J=require("react/jsx-runtime");function Ts(e,t){return e("cost.money",{value:t.toFixed(2)})}function t1(e,t){return[{label:e("history.stat.todayCost"),value:Ts(e,t.todayCost)},{label:e("history.stat.cost"),value:Ts(e,t.cost)},{label:e("history.stat.successRate"),value:e("history.stat.successRate.value",{rate:Dm(t.successRate),ok:t.ok,total:t.total})},{label:e("history.stat.error"),value:String(t.error)},{label:e("history.stat.avgSeconds"),value:Am(t.avgSeconds)}]}var Hm=60;function n1(e){return e.replace(/[\\/][^\\/]+$/,"")}function Bm({onClose:e,onImport:t,imagoraRoot:n}){let r=ae(),[o,i]=(0,he.useState)([]),[a,s]=(0,he.useState)(""),[l,c]=(0,he.useState)(""),[u,d]=(0,he.useState)(!1),[p,m]=(0,he.useState)(0),[f,y]=(0,he.useState)(!0),[h,b]=(0,he.useState)(!1),[w,g]=(0,he.useState)(""),[x,k]=(0,he.useState)("ledger"),[S,N]=(0,he.useState)(""),[C,M]=(0,he.useState)(null),[O,D]=(0,he.useState)(new Map),[L,T]=(0,he.useState)(null),[v,E]=(0,he.useState)({dailyLimit:"",singleRunLimit:""}),[z,I]=(0,he.useState)(!1),[_,R]=(0,he.useState)(""),V=(0,he.useRef)(null),W=(0,he.useRef)(0),F=(0,he.useRef)([]),$=(0,he.useRef)(a),Y=(0,he.useRef)(l);$.current=a,Y.current=l;let U=(0,he.useCallback)(async q=>{let de=++W.current;y(!0),g("");try{let be=await Za({limit:Hm,offset:0,query:q?.query??$.current,status:q?.status??Y.current});if(de!==W.current)return;let Ee=Array.isArray(be.items)?be.items:[];k(be.source==="ledger"?"ledger":"none"),N(typeof be.ledgerPath=="string"?be.ledgerPath:""),i(Ee),F.current=Ee,d(be.hasMore===!0),m(Number(be.total)||Ee.length)}catch(be){de===W.current&&g(me(be))}finally{de===W.current&&y(!1)}},[]),ee=(0,he.useCallback)(async()=>{if(h||!u)return;let q=W.current;b(!0);try{let de=await Za({limit:Hm,offset:F.current.length,query:$.current,status:Y.current});if(q!==W.current)return;let be=Array.isArray(de.items)?de.items:[];i(Ee=>[...Ee,...be]),F.current=[...F.current,...be],d(de.hasMore===!0),m(Number(de.total)||F.current.length)}catch(de){q===W.current&&g(me(de))}finally{q===W.current&&b(!1)}},[u,h]);(0,he.useEffect)(()=>{U(),Vr().then(M).catch(()=>M(null)),zu().then(q=>D(new Map((q?.images??[]).map(de=>[de.id,de])))).catch(()=>D(new Map))},[U]);let ne=(0,he.useRef)(!1);(0,he.useEffect)(()=>{!C?.localBudget||ne.current||E({dailyLimit:C.localBudget.dailyLimit?String(C.localBudget.dailyLimit):"0",singleRunLimit:C.localBudget.singleRunLimit?String(C.localBudget.singleRunLimit):"0"})},[C]);let P=q=>{ne.current=!0,R(""),E(de=>({...de,...q}))},X=async()=>{I(!0),R("");let q={dailyLimit:Math.max(0,Number(v.dailyLimit)||0),singleRunLimit:Math.max(0,Number(v.singleRunLimit)||0)};try{await Fu(q);let de=await Vr();M(de),ne.current=!1,R(r("history.budget.saved"))}catch(de){R(r("history.budget.saveFailed",{reason:me(de)}))}finally{I(!1)}},oe=600,re=(0,he.useCallback)(()=>{let q=V.current;q&&q.scrollHeight-q.scrollTop-q.clientHeight<oe&&ee()},[ee]),j=(0,he.useMemo)(()=>o.filter(q=>q.status==="error"&&q.inputRefMissing).length,[o]),te=C?t1(r,C):[],ue=C?.bySize.slice(0,3)??[],Q=S||(n?`${n}\\logs\\generation.jsonl`:r("history.where.fallback"));return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Le,{title:r("history.title"),size:"wide",headerless:!0,onClose:e,children:(0,J.jsxs)("div",{className:"im-history",children:[(0,J.jsxs)("div",{className:"im-history-bar",children:[(0,J.jsx)("h2",{className:"im-history-title",children:r("history.title")}),(0,J.jsx)("input",{className:"im-field im-history-search",value:a,placeholder:r("history.search.placeholder"),"aria-label":r("history.search.placeholder"),onChange:q=>s(q.target.value),onKeyDown:q=>{q.key==="Enter"&&U()}}),(0,J.jsx)(gt,{className:"im-history-status",value:l,title:r("history.filter.title"),options:[{value:"",label:r("history.filter.all")},{value:"ok",label:r("history.filter.ok")},{value:"error",label:r("history.filter.error")}],onChange:q=>{c(q),U({status:q})}}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void U(),children:r("history.search")}),(0,J.jsxs)("div",{className:"im-history-bar-end",children:[j>0?(0,J.jsx)("span",{className:"im-history-warn",title:r("history.lostRefs.title"),children:r("history.lostRefs",{count:j})}):null,(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:r("common.close")})]})]}),te.length?(0,J.jsxs)("div",{className:"im-history-stats",children:[(0,J.jsxs)("div",{className:"im-history-stat-row",children:[(0,J.jsx)("div",{className:"im-history-stat-grid",children:te.map(q=>(0,J.jsxs)("div",{className:"im-history-stat",children:[(0,J.jsx)("div",{className:"im-history-stat-label",children:q.label}),(0,J.jsx)("div",{className:"im-history-stat-value",children:q.value})]},q.label))}),(0,J.jsxs)("div",{className:"im-history-budget",children:[(0,J.jsxs)("label",{className:"im-history-budget-field",children:[(0,J.jsx)("span",{className:"im-history-budget-label",children:r("history.budget.daily")}),(0,J.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:v.dailyLimit,title:r("history.budget.daily.title"),onChange:q=>P({dailyLimit:q.target.value})})]}),(0,J.jsxs)("label",{className:"im-history-budget-field",children:[(0,J.jsx)("span",{className:"im-history-budget-label",children:r("history.budget.single")}),(0,J.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:v.singleRunLimit,title:r("history.budget.single.title"),onChange:q=>P({singleRunLimit:q.target.value})})]}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:z||f,onClick:()=>void X(),children:r(z?"common.saving":"history.budget.save")}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:f,onClick:()=>void Vr().then(M).catch(()=>{}),children:r("history.refresh")}),_?(0,J.jsx)("span",{className:"im-history-budget-tip",children:_}):null]})]}),ue.length?(0,J.jsxs)("div",{className:"im-history-sizes",children:[(0,J.jsx)("span",{className:"im-history-sizes-label",children:r("history.bySize")}),ue.map(q=>(0,J.jsxs)("span",{className:"im-history-sizes-row",children:[q.size," ",(0,J.jsx)("span",{className:"im-history-sizes-label",children:r("history.bySize.row",{count:q.count,cost:Ts(r,q.cost)})})]},q.size))]}):null]}):null,(0,J.jsxs)("div",{ref:V,className:"im-history-list",onScroll:re,"data-testid":"history-list",children:[w?(0,J.jsx)("div",{className:"im-history-error",children:w}):null,f?(0,J.jsx)("div",{className:"im-history-empty",children:r("history.reading")}):o.length?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("ul",{className:"im-history-rows",children:o.map((q,de)=>{let be=q.assetId?O.get(q.assetId):void 0,Ee=!!be;return(0,J.jsxs)("li",{className:"im-history-row",children:[(0,J.jsx)("div",{className:"im-history-thumb",children:q.url?(0,J.jsx)("img",{src:q.url,alt:q.prompt||r("history.imageAlt"),loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:r("history.zoom.title"),onDoubleClick:()=>T({url:q.url,path:q.path})}):(0,J.jsx)("span",{className:"im-history-thumb-empty",children:q.status==="error"?r("history.failed"):r("history.moved")})}),(0,J.jsxs)("div",{className:"im-history-main",children:[(0,J.jsx)(Lm,{text:q.prompt||r("history.noPrompt")}),(0,J.jsxs)("p",{className:"im-history-meta",children:[q.time||"-"," \xB7 ",q.quality||"-"," \xB7 ",q.size||"-"]}),q.inputRefs.length?(0,J.jsx)("div",{className:"im-history-refs",children:q.inputRefs.map(Te=>(0,J.jsx)("div",{className:"im-history-ref",title:r("history.ref.title"),children:(0,J.jsx)("img",{src:Te.url,alt:r("history.ref.alt"),loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>T({url:Te.url,path:Te.path})})},Te.id))}):null,q.inputRefMissing?(0,J.jsx)("span",{className:"im-history-ref-missing",children:r("history.refMissing")}):null,(0,J.jsxs)("div",{className:"im-history-actions",children:[(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.prompt,onClick:()=>void navigator.clipboard.writeText(q.prompt||""),children:r("history.copyPrompt")}),(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.path,onClick:()=>void qr(n1(q.path)),children:r("history.openDir")}),(0,J.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Ee,title:r(Ee?"history.import.title":"history.import.noAsset"),onClick:()=>{be&&t([be])},children:r("history.import")})]})]})]},`${q.time}-${q.output}-${de}`)})}),(0,J.jsx)("div",{className:"im-history-pager",children:h?r("history.loadingMore"):u?(0,J.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void ee(),children:r("history.loadMore",{shown:o.length,total:p})}):r("history.allShown",{total:p})})]}):x==="none"?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("div",{className:"im-history-empty",children:r("history.empty")}),(0,J.jsxs)("p",{className:"im-history-note",children:[r("history.empty.noteBefore")," ",(0,J.jsx)("code",{children:Q}),r("history.empty.noteAfter")]})]}):(0,J.jsx)("div",{className:"im-history-empty",children:r("history.noMatch")})]})]})}),L?(0,J.jsx)(di,{imageUrl:L.url,...L.path?{copyPath:L.path}:{},onClose:()=>T(null)}):null]})}var at=require("react");var o1=8,r1=8,Fm=[{label:"2 \xD7 2",rows:2,cols:2},{label:"2 \xD7 3",rows:2,cols:3},{label:"3 \xD7 2",rows:3,cols:2},{label:"3 \xD7 3",rows:3,cols:3},{label:"4 \xD7 4",rows:4,cols:4}];var i1=40,a1=/[\\/:*?"<>|]/g,s1="image";function $m(e,t){let n=Math.round(e);return Number.isFinite(n)?Math.min(t,Math.max(1,n)):1}function mi(e,t){return{rows:$m(e,o1),cols:$m(t,r1)}}function l1(e){let{rows:t,cols:n}=mi(e.rows,e.cols),r=[];for(let o=0;o<t;o+=1){let i=o/t,a=o===t-1?1-i:1/t;for(let s=0;s<n;s+=1){let l=s/n,c=s===n-1?1-l:1/n;r.push({x:l,y:i,width:c,height:a})}}return r}function Wm(e){let{rows:t,cols:n}=mi(e.rows,e.cols);return t*n}function c1(e){let t=e.lastIndexOf(".");if(t<=0)return e;let n=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>n?e.slice(0,t):e}function d1(e){let t=e.trim(),n=Array.from(t).slice(0,i1).join("");return n.length>0?n:s1}function Vm(e,t,n,r,o){let i=d1(c1(e).replace(a1,"_")),a=Number.isFinite(t)?Math.max(1,Math.round(t)):1;return`${i}-${r}x${o}-${a}.png`}async function Um(e,t){return Promise.all(l1(t).map(n=>ui(e,n)))}var xe=require("react/jsx-runtime"),u1="52vh";function Gm({id:e,label:t,value:n,max:r,onChange:o}){return(0,xe.jsxs)("label",{className:"im-split-axis",htmlFor:e,children:[(0,xe.jsx)("span",{className:"im-split-axis-label",children:t}),(0,xe.jsx)("input",{id:e,className:"im-field im-split-axis-input",inputMode:"numeric",value:n,placeholder:"1",onChange:i=>o(i.target.value),onBlur:()=>{let i=Number(n);o(String(Number.isFinite(i)?Math.min(r,Math.max(1,Math.round(i))):1))}})]})}function Xm({src:e,name:t,onClose:n,onConfirm:r}){let o=ae(),[i,a]=(0,at.useState)(null),[s,l]=(0,at.useState)("2"),[c,u]=(0,at.useState)("2"),[d,p]=(0,at.useState)(!1),[m,f]=(0,at.useState)(null);(0,at.useEffect)(()=>{let k=!0;return en(e).then(S=>{k&&a(S)}).catch(S=>{k&&f(o("dialog.readImageFailed",{reason:me(S)}))}),()=>{k=!1}},[e]);let y=(0,at.useMemo)(()=>mi(Number(c)||1,Number(s)||1),[c,s]),h=Wm(y),b=h>=2,w=(0,at.useMemo)(()=>i?{w:Math.floor(i.width/y.cols),h:Math.floor(i.height/y.rows)}:{w:0,h:0},[i,y]),g=(0,at.useMemo)(()=>{let k=(t??"image").replace(/\.[^.]+$/,"");return Array.from({length:Math.min(3,h)},(S,N)=>Vm(k,N+1,h,y.rows,y.cols))},[t,h,y]),x=async()=>{if(b){p(!0),f(null);try{let k=await Um(e,y);await r(k.map((S,N)=>({dataUrl:S,note:o("split.resultName",{index:N+1,total:k.length})})))}catch(k){f(o("split.failed",{reason:me(k)}))}finally{p(!1)}}};return(0,xe.jsx)(Le,{title:o("split.title"),subtitle:o("split.subtitle"),size:"lg",onClose:n,footer:(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("p",{className:"im-modal-note",children:i?o("split.original",{width:i.width,height:i.height}):o("split.readingOriginal")}),(0,xe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:o("common.cancel")}),(0,xe.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!b,onClick:()=>void x(),children:d?o("split.busy"):b?o("split.confirm",{count:h}):o("split.needTwo")})]}),children:(0,xe.jsxs)("div",{className:"im-split",children:[(0,xe.jsx)("div",{className:"im-split-presets",children:Fm.map(k=>(0,xe.jsx)("button",{type:"button",className:`im-chip im-chip--sm im-chip--action${k.cols===y.cols&&k.rows===y.rows?" is-brand":""}`,onClick:()=>{l(String(k.cols)),u(String(k.rows))},children:k.label},k.label))}),(0,xe.jsxs)("div",{className:"im-split-controls",children:[(0,xe.jsx)(Gm,{id:"split-cols",label:o("split.cols"),value:s,max:8,onChange:l}),(0,xe.jsx)(Gm,{id:"split-rows",label:o("split.rows"),value:c,max:8,onChange:u}),(0,xe.jsx)("span",{className:"im-split-summary",children:w.w>0?o("split.summary.cell",{count:h,width:w.w,height:w.h}):o("split.summary",{count:h})})]}),(0,xe.jsx)("div",{className:"im-split-stage-wrap",children:(0,xe.jsxs)("div",{className:"im-split-stage",style:{width:i&&i.height>0?`min(100%, calc(${u1} * ${(i.width/i.height).toFixed(4)}))`:"100%",aspectRatio:i&&i.height>0?`${i.width} / ${i.height}`:"1 / 1",backgroundImage:`url(${e})`},children:[Array.from({length:y.cols-1},(k,S)=>(0,xe.jsx)("span",{className:"im-split-line",style:{left:`${(S+1)/y.cols*100}%`,top:0,bottom:0,width:2}},`v${S}`)),Array.from({length:y.rows-1},(k,S)=>(0,xe.jsx)("span",{className:"im-split-line",style:{top:`${(S+1)/y.rows*100}%`,left:0,right:0,height:2}},`h${S}`))]})}),b?(0,xe.jsxs)("div",{className:"im-split-names",children:[g.map(k=>(0,xe.jsx)("span",{className:"im-split-name",children:k},k)),h>g.length?(0,xe.jsx)("span",{className:"im-muted",children:o("split.more",{count:h})}):null]}):(0,xe.jsx)("p",{className:"im-split-note",children:o("split.tooSmall")}),(0,xe.jsx)("p",{className:"im-split-note",children:o("split.note")}),m?(0,xe.jsx)("p",{className:"im-split-error",role:"status",children:m}):null]})})}var Ct=require("react");var Re=require("react/jsx-runtime"),qm=[{value:"high",key:"upscale.algo.high"},{value:"bilinear",key:"upscale.algo.bilinear"},{value:"nearest",key:"upscale.algo.nearest"}],Ym=[1024,1536,2048,3072,4096];function Zm({src:e,onClose:t,onConfirm:n}){let r=ae(),[o,i]=(0,Ct.useState)(null),[a,s]=(0,Ct.useState)(2048),[l,c]=(0,Ct.useState)("high"),[u,d]=(0,Ct.useState)(!1),[p,m]=(0,Ct.useState)(null);(0,Ct.useEffect)(()=>{let w=!0;return en(e).then(g=>{if(!w)return;i(g);let x=Math.max(g.width,g.height),k=Ym.find(S=>S>x)??4096;s(k)}).catch(g=>{w&&m(r("dialog.readImageFailed",{reason:me(g)}))}),()=>{w=!1}},[e]);let f=(0,Ct.useMemo)(()=>o?Es(o.width,o.height,a):{width:0,height:0},[o,a]),y=o&&o.width>0?f.width/o.width:0,h=!!o&&f.width<o.width,b=async()=>{d(!0),m(null);try{let w=await Cm(e,{targetLongEdge:a,algorithm:l}),g=r(qm.find(x=>x.value===l).key);await n(w,r("upscale.resultName",{width:f.width,height:f.height,algorithm:g}))}catch(w){m(r("upscale.failed",{reason:me(w)}))}finally{d(!1)}};return(0,Re.jsx)(Le,{title:r("upscale.title"),subtitle:r("upscale.subtitle"),size:"md",onClose:t,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:r("common.cancel")}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||f.width<8||f.height<8,onClick:()=>void b(),children:r(u?"upscale.busy":"upscale.confirm")})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:r("upscale.longEdge")}),Ym.map(w=>(0,Re.jsx)("button",{type:"button","aria-pressed":w===a,className:`im-btn-sm ${w===a?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>s(w),children:w},w))]}),(0,Re.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:r("upscale.algorithm")}),qm.map(w=>(0,Re.jsx)("button",{type:"button","aria-pressed":w.value===l,className:`im-btn-sm ${w.value===l?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(w.value),children:r(w.key)},w.value))]}),(0,Re.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Re.jsxs)(Re.Fragment,{children:[r("upscale.original",{width:o.width,height:o.height})," \u2192 ",(0,Re.jsxs)("b",{style:{color:h?"var(--im-warn)":"var(--im-brand)"},children:[f.width," \xD7 ",f.height]}),y?` \xB7 ${r("upscale.scale",{ratio:y.toFixed(2)})}`:"",h?` \xB7 ${r("upscale.shrink")}`:""]}):r("upscale.reading")}),(0,Re.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:r("upscale.note")}),p?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Ds=require("react/jsx-runtime"),fi=2e4;function jm({guides:e}){return e.length?(0,Ds.jsx)(iu,{children:e.map(t=>(0,Ds.jsx)("div",{className:"snap-guide","data-axis":t.axis,"data-testid":"snap-guide",style:t.axis==="x"?{left:t.position,top:-fi/2,width:1,height:fi}:{left:-fi/2,top:t.position,width:fi,height:1}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Qn=require("react");var ke=require("react/jsx-runtime");function Qm({sizes:e,onCancel:t,onConfirm:n}){let r=ae(),[o,i]=(0,Qn.useState)(""),a=(0,Qn.useRef)(null),s=(0,Qn.useMemo)(()=>Uu(o),[o]),l=o.trim().length>0,c=s.cards,u=s.issues??[];return(0,ke.jsx)(Le,{title:r("import.title"),subtitle:r("import.subtitle"),size:"lg",onClose:t,initialFocusRef:a,footer:(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:r("common.cancel")}),(0,ke.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c.length||u.length>0,onClick:()=>n(c),children:r("import.confirm",{count:c.length})})]}),children:(0,ke.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,ke.jsx)("textarea",{ref:a,value:o,onChange:d=>i(d.target.value),rows:10,spellCheck:!1,"aria-label":r("import.aria"),className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:r("import.placeholder")}),(0,ke.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:l?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsxs)("div",{className:"im-import-summary",children:[(0,ke.jsx)("span",{children:r("import.summary",{count:c.length})}),u.length?(0,ke.jsx)("span",{className:"im-import-summary-error",children:r("import.summaryIssues",{count:u.length})}):null]}),c.map((d,p)=>{let m=ns(d.ratio??"1:1",e);return(0,ke.jsxs)("article",{className:"im-import-card",children:[(0,ke.jsxs)("div",{className:"im-import-card-meta",children:[(0,ke.jsx)("strong",{children:d.title||r("import.card.untitled",{index:p+1})}),(0,ke.jsx)("span",{children:d.ratio?d.ratio:r("import.card.defaultRatio")}),(0,ke.jsx)("span",{children:m.value}),m.fallback?(0,ke.jsx)("span",{className:"im-import-card-fallback",children:r("import.card.fallback")}):null]}),(0,ke.jsx)("p",{className:"im-import-card-text",title:d.prompt||"",children:d.prompt||r("import.card.empty")})]},`${p}-${d.title??""}`)}),u.map((d,p)=>(0,ke.jsx)("div",{className:"im-import-issue",children:d.message},`issue-${p}`))]}):(0,ke.jsx)("div",{className:"im-import-summary",children:r("import.waiting")})}),(0,ke.jsx)("p",{className:"im-field-hint",children:r("import.hint",{count:e.length})})]})})}var Mn=require("react");var se=require("react/jsx-runtime");function Nn({id:e,label:t,hint:n,action:r,children:o}){let i=`${e}-message`;return(0,se.jsxs)("div",{className:"im-field-row",children:[(0,se.jsx)("label",{className:"im-field-label",htmlFor:e,children:t}),(0,se.jsxs)("div",{className:"im-field-main",children:[(0,se.jsxs)("div",{className:"im-field-control",children:[o,r]}),n?(0,se.jsx)("p",{className:"im-field-hint",id:i,children:n}):null]})]})}function Jm({config:e,onClose:t,onSaved:n,onFlash:r}){let o=ae(),i=e?.provider,a=e?.source==="plugin",s=a?"plugin":e?.profile??"",l=i?.model||e?.model||"",c=Number(e?.budget??0),[u,d]=(0,Mn.useState)({source:s||"plugin",model:l,baseUrl:i?.baseUrl??"",apiKey:"",imagoraRoot:e?.imagoraRoot??"",outputDir:e?.outputDirOverride??"",budget:c?String(c):""}),[p,m]=(0,Mn.useState)(!1),[f,y]=(0,Mn.useState)(!1),[h,b]=(0,Mn.useState)(null),[w,g]=(0,Mn.useState)([]),[x,k]=(0,Mn.useState)(!1),S=$=>d(Y=>({...Y,...$})),N=e?.profiles??[],C=u.source==="plugin",M=C||!!i?.baseUrl,O=[{value:"plugin",label:o("settings.profile.plugin")},...N.map($=>({value:$.name,label:$.label||$.name}))],D=a&&!C,L=C?u.model?[{value:u.model,label:u.model}]:[]:(e?.models??[]).map($=>({value:$.id,label:$.label||$.id})),T=(()=>{let $=Number(u.budget.trim());return Number.isFinite($)&&$>0?$:0})(),v={source:u.source!==(s||"plugin"),model:u.model.trim()!==""&&u.model.trim()!==l,baseUrl:u.baseUrl.trim()!==(i?.baseUrl??""),apiKey:u.apiKey.trim()!=="",imagoraRoot:u.imagoraRoot.trim()!==(e?.imagoraRoot??""),outputDir:u.outputDir.trim()!==(e?.outputDirOverride??""),budget:T!==c},E=Object.values(v).some(Boolean),z=$=>{S({source:$,model:""})},I=async()=>{m(!0),b(null);try{let $=await $u({baseUrl:u.baseUrl.trim(),apiKey:u.apiKey.trim()});g($.models??[]),b($.models?.length?o("settings.probe.ok",{count:$.models.length}):o("settings.probe.okNoList"))}catch($){g([]),b(o("settings.probe.fail",{reason:me($)}))}finally{m(!1)}},_=async $=>{m(!0);try{let Y=await Io(o,{title:o($==="root"?"settings.pick.root":"settings.pick.output"),startAt:$==="root"?u.imagoraRoot.trim():u.outputDir.trim()||e?.defaultOutputDir||""},r);if(!Y)return;S($==="root"?{imagoraRoot:Y}:{outputDir:Y})}finally{m(!1)}},R=async()=>{m(!0);try{let $=null;!D&&!C&&v.source&&($=await Gr(u.source)),!D&&!C&&v.model&&u.model.trim()&&($=await Ur(u.model.trim()));let Y=C||!!u.baseUrl.trim()||!!u.apiKey.trim(),U=v.baseUrl||v.apiKey||C&&u.model.trim()!==""&&v.model;Y&&U&&($=await es({baseUrl:u.baseUrl.trim(),model:u.model.trim(),apiKey:u.apiKey.trim()})),v.imagoraRoot&&($=await Hu(u.imagoraRoot.trim())),v.outputDir&&($=await Xr(u.outputDir.trim())),v.budget&&($=await Lu(T)),$&&n($),d(ee=>({...ee,apiKey:"",budget:T?String(T):""})),y(!0),window.setTimeout(()=>y(!1),2e3),r(o("settings.save.done"))}catch($){r(o("settings.save.failed",{reason:me($)}))}finally{m(!1)}},V=async()=>{m(!0);try{let $=await es({reset:!0});n($),k(!1),r(o("settings.reset.done"))}catch($){r(o("settings.reset.failed",{reason:me($)}))}finally{m(!1)}},W=a?o("settings.profile.plugin"):e?.profileLabel||e?.profile||"\u2014",F=i?.apiKeyConfigured?o("settings.keyConfigured"):o("settings.keyMissing");return(0,se.jsx)(Le,{title:o("settings.title"),subtitle:o("settings.subtitle"),size:"lg",onClose:t,footer:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("p",{className:"im-modal-note",children:o(f?"settings.status.saved":E?"settings.status.dirty":"settings.status.clean")}),(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:t,children:o("common.cancel")}),(0,se.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:p||!E,onClick:()=>void R(),children:o(p?"common.saving":f?"settings.status.savedTick":"common.save")})]}),children:(0,se.jsxs)("div",{className:"im-settings",children:[(0,se.jsxs)("p",{className:"im-settings-status",children:[o("settings.status")," ",(0,se.jsx)("b",{children:W})," \xB7 ",e?.modelLabel||e?.model||"\u2014"," \xB7 ",F,D?(0,se.jsx)("span",{className:"im-chip is-brand im-settings-chip",children:o("settings.status.takenOver")}):null]}),(0,se.jsxs)("section",{className:"im-settings-group",children:[(0,se.jsx)("h3",{className:"im-settings-group-title",children:o("settings.group.endpoint")}),(0,se.jsx)(Nn,{id:"imagora-profile",label:o("settings.profile.label"),hint:o(C?"settings.profile.hint.plugin":"settings.profile.hint.imagora"),children:(0,se.jsx)(gt,{id:"imagora-profile",className:"is-block",options:O,value:u.source,searchable:"auto",onChange:z,title:o("settings.profile.title")})}),(0,se.jsx)(Nn,{id:"imagora-model-select",label:o("settings.model.label"),hint:o(C?"settings.model.hint.plugin":"settings.model.hint.imagora"),children:(0,se.jsx)(gt,{id:"imagora-model-select",className:"is-block",options:L,value:u.model,searchable:!0,allowCustom:!0,emptyLabel:o("settings.model.empty"),onChange:$=>S({model:$}),onCreateCustom:$=>S({model:$}),title:o("settings.model.title")})}),M?(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(Nn,{id:"imagora-provider-base-url",label:o("settings.baseUrl.label"),hint:o("settings.baseUrl.hint"),children:(0,se.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:u.baseUrl,placeholder:"https://api.example.com/v1",disabled:p,title:o("settings.baseUrl.title"),onChange:$=>S({baseUrl:$.target.value})})}),(0,se.jsx)(Nn,{id:"imagora-provider-api-key",label:o("settings.apiKey.label"),hint:i?.apiKeyConfigured?o("settings.apiKey.hint.configured"):o("settings.apiKey.hint.plain"),action:(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p||!u.baseUrl.trim(),onClick:()=>void I(),title:u.baseUrl.trim()?o("settings.probe.title.ready"):o("settings.probe.title.needUrl"),children:o("settings.probe.run")}),children:(0,se.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:u.apiKey,autoComplete:"off",placeholder:i?.apiKeyConfigured?o("settings.apiKey.placeholder.keep"):o("settings.apiKey.placeholder.paste"),disabled:p,onChange:$=>S({apiKey:$.target.value})})})]}):(0,se.jsx)("p",{className:"im-settings-hint-line",children:o("settings.inheritHint")}),h?(0,se.jsx)("p",{className:"im-field-hint im-settings-probe",role:"status",children:h}):null,w.length?(0,se.jsxs)("div",{className:"im-settings-chips",children:[w.slice(0,24).map($=>(0,se.jsx)("button",{type:"button",className:`im-chip im-chip--action${$===u.model?" is-brand":""}`,onClick:()=>S({model:$}),children:$},$)),w.length>24?(0,se.jsx)("span",{className:"im-muted",children:o("settings.probe.more",{count:w.length-24})}):null]}):null,a?x?(0,se.jsxs)("div",{className:"im-settings-danger",children:[(0,se.jsx)("p",{className:"im-settings-danger-text",children:o("settings.reset.confirm")}),(0,se.jsxs)("div",{className:"im-settings-danger-actions",children:[(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>k(!1),children:o("common.cancel")}),(0,se.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",disabled:p,onClick:()=>void V(),children:o("settings.reset.confirmAction")})]})]}):(0,se.jsx)("button",{type:"button",className:"im-settings-danger-link",disabled:p,onClick:()=>k(!0),children:o("settings.reset.link")}):null]}),(0,se.jsxs)("section",{className:"im-settings-group",children:[(0,se.jsx)("h3",{className:"im-settings-group-title",children:o("settings.group.files")}),(0,se.jsx)(Nn,{id:"imagora-root",label:o("settings.root.label"),hint:o("settings.root.hint"),action:(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void _("root"),children:o("common.chooseFolder")}),children:(0,se.jsx)("input",{id:"imagora-root",className:"im-field",value:u.imagoraRoot,placeholder:o("settings.root.placeholder"),disabled:p,onChange:$=>S({imagoraRoot:$.target.value})})}),(0,se.jsx)(Nn,{id:"imagora-output-override",label:o("settings.outputDir.label"),hint:o("settings.outputDir.hint",{dir:e?.defaultOutputDir||o("common.notSet")}),action:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void _("output"),children:o("common.chooseFolder")}),(0,se.jsx)("button",{type:"button",className:"im-btn-ghost im-icon-btn",disabled:p||!e?.defaultOutputDir,title:o("settings.reveal"),"aria-label":o("settings.reveal"),onClick:()=>void qr(e?.defaultOutputDir??""),children:(0,se.jsx)(_e,{name:"folder",size:14})})]}),children:(0,se.jsx)("input",{id:"imagora-output-override",className:"im-field",value:u.outputDir,placeholder:o("settings.outputDir.placeholder"),disabled:p,onChange:$=>S({outputDir:$.target.value})})})]}),(0,se.jsxs)("section",{className:"im-settings-group",children:[(0,se.jsx)("h3",{className:"im-settings-group-title",children:o("settings.group.budget")}),(0,se.jsx)(Nn,{id:"imagora-budget",label:o("settings.budget.label"),hint:o("settings.budget.hint"),children:(0,se.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:u.budget,placeholder:o("settings.budget.placeholder"),disabled:p,onChange:$=>S({budget:$.target.value})})})]})]})})}var Jn=require("react");function ef({nodesRef:e,setNodes:t,createPosition:n,log:r,flash:o,setPreview:i,record:a}){let s=ae(),l=(0,Jn.useCallback)(async(m,f)=>{let y=m.filter(Fr);if(!y.length){o(s("images.onlyImage"));return}a?.();for(let[h,b]of y.entries())try{r(s("images.uploading",{name:b.name||s("images.clipboard")}));let w=await Wr(b,b.name||`pasted-${Date.now()}.png`),g=vn({...w,relPath:w.name,createdAt:w.createdAt??new Date().toISOString()},{x:f.x+h*172,y:f.y});t(x=>[...x,g]),r(s("images.added",{name:w.name}))}catch(w){r(s("images.uploadFailed",{reason:me(w)}))}},[t,r,o,a]),c=(0,Jn.useCallback)((m,f,y)=>{let h=f?y(f):n();l(m,h)},[l,n]),u=(0,Jn.useCallback)(m=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let y=f.files?.[0];if(y)try{let h=await Wr(y,y.name);t(b=>b.map(w=>w.id===m&&w.type==="image"?{...w,data:{...w.data,registryId:h.id,name:h.name,url:h.url,size:h.size,ext:h.ext,absPath:h.absPath,missing:!1}}:w)),r(s("images.replaced",{name:h.name}))}catch(h){r(s("images.replaceFailed",{reason:me(h)}))}},f.click()},[t,r]),d=(0,Jn.useCallback)(m=>{let f=e.current.find(y=>y.id===m);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name,path:f.data.absPath})},[e,i]),p=(0,Jn.useCallback)(async(m,f,y)=>{let h=await fetch(m).then(k=>k.blob()),b=f.endsWith(".png")?f:`${f}.png`,w=await Wr(h,b),g=y??n(),x=vn({...w,relPath:w.name,createdAt:w.createdAt??new Date().toISOString()},g);return t(k=>[...k,x]),r(s("images.added",{name:w.name})),w},[t,r,n]);return{addImages:l,dropFiles:c,replaceImage:u,openPreview:d,addDataUrl:p}}function tf(e){return t=>{let n=String(t.source??""),r=String(t.target??"");!n||!r||e(o=>{let i=`${n}->${r}`;return o.some(a=>a.id===i)?o:[...o,{id:i,source:n,target:r,animated:!0}]})}}var Nt=require("react");function nf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:r,log:o,flash:i,taskIdsRef:a,timersRef:s}){let l=ae(),c=(0,Nt.useCallback)(async h=>{try{return await ja(h)}catch(b){let w=b.body?.overBudget;if(!w)throw b;let g=w.reason||me(b);if(!window.confirm(l("task.budget.confirm",{reason:g})))throw new Error(l("task.budget.cancelled",{reason:g}));return o(l("task.budget.overridden",{reason:g})),await ja({...h,allowOverBudget:!0})}},[o]),u=(0,Nt.useCallback)((h,b)=>{let g=(Array.isArray(b.results)?b.results:[]).filter(C=>C.status==="ok"&&C.assetId&&C.url),x=e.current.find(C=>C.id===h&&C.type==="prompt"),k=[];if(x&&x.type==="prompt"){let C=Fe(x).height;g.forEach((M,O)=>{k.push(vn({id:String(M.assetId),relPath:M.name??"result.png",name:M.name??"result.png",url:String(M.url),size:M.bytes??0,ext:String(M.ext??"png"),absPath:M.absPath??"",createdAt:new Date().toISOString()},{x:x.position.x+O*172,y:x.position.y+C+56}))})}n(C=>{let M=new Set(C.map(L=>L.id)),O=k.filter(L=>!M.has(L.id)),D=O.length?[...C,...O]:C;return it(D,h,{status:b.status==="done"?"done":b.status==="cancelled"?"idle":"failed",resultCount:g.length,message:b.error??void 0,startedAtMs:void 0,cancelRequested:!1,taskId:void 0})}),k.length&&r(C=>{let M=k.map(O=>({id:`${h}->${O.id}`,source:h,target:O.id,animated:!0})).filter(O=>!C.some(D=>D.id===O.id));return M.length?[...C,...M]:C}),a.current.delete(h);let S=s.current.get(h);S&&window.clearTimeout(S),s.current.delete(h);let N=b.totalCost??0;N>0&&n(C=>{let M=C.find(D=>D.id===h),O=Number(M?.data?.cost??0);return it(C,h,{cost:O+N})}),o(b.status==="done"?N?l("task.done.cost",{count:g.length,cost:l("cost.money",{value:N.toFixed(2)})}):l("task.done",{count:g.length}):l("task.failed.withReason",{status:b.status==="cancelled"?l("task.cancelled"):l("task.failed"),reason:b.error??l("task.seeLog")}))},[e,n,r,o,a,s]),d=(0,Nt.useCallback)((h,b)=>{let w=async()=>{try{let g=await Ru(b);if(g.status==="queued")n(x=>it(x,h,{status:"queued"}));else if(g.status==="running")n(x=>it(x,h,{status:"running",startedAtMs:g.startedAt??Date.now(),cancelRequested:g.cancelRequested}));else{u(h,g);return}}catch(g){if(g.status===404){let x=s.current.get(h);x!==void 0&&window.clearTimeout(x),s.current.delete(h),n(k=>it(k,h,{status:"failed",message:l("task.lost"),startedAtMs:void 0,cancelRequested:!1})),o(l("task.lostLog"));return}o(l("task.pollFailed",{reason:me(g)}))}s.current.set(h,window.setTimeout(w,1200))};w()},[u,o,n,s]),p=(0,Nt.useCallback)(async h=>{let b=e.current.find(g=>g.id===h);if(!b||b.type!=="prompt")return;if(!(b.data.prompt??"").trim()){i(l("task.emptyPrompt"));return}let w=Eu(e.current,t.current,h,b.data.prompt);if(w.mode==="invalid"){let g=w.unknown.map(x=>`@${x}`).join("\u3001");n(x=>it(x,h,{status:"failed",message:l("task.missingRefs",{names:g})}));return}try{let g=await c({prompt:b.data.prompt,size:b.data.size,quality:b.data.quality,refIds:w.images.map(x=>x.type==="image"?x.data.registryId:"").filter(Boolean),outputDir:b.data.outputDir,spent:e.current.reduce((x,k)=>x+Number(k.data?.cost??0),0),mask:w.images.map(x=>x.type==="image"?x.data.maskDataUrl:"").find(Boolean)||""});a.current.set(h,g.taskId),n(x=>it(x,h,{status:"queued",taskId:g.taskId,startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),o(l("task.submit",{count:w.images.length,size:b.data.size})),d(h,g.taskId)}catch(g){let x=me(g);n(k=>it(k,h,{status:"failed",message:x})),o(l("task.submitFailed",{reason:x}))}},[e,t,n,i,o,d,a]),m=(0,Nt.useCallback)(async h=>{let b=a.current.get(h);if(n(w=>it(w,h,{cancelRequested:!0})),!!b)try{await Tu(b)}catch(w){o(l("task.cancelFailed",{reason:me(w)}))}},[n,o,a]),f=(0,Nt.useCallback)(h=>{for(let b of h)p(b)},[p]),y=(0,Nt.useCallback)(h=>{for(let{nodeId:b,taskId:w}of ku(h))a.current.set(b,w),d(b,w)},[a,d]);return(0,Nt.useEffect)(()=>{let h=s.current;return()=>{for(let b of h.values())window.clearTimeout(b);h.clear()}},[s]),{runPrompt:p,cancelPrompt:m,runMany:f,resumeTasks:y}}var st=require("react");function of(e){let t=ae(),[n,r]=(0,st.useState)(null),[o,i]=(0,st.useState)([]),a=(0,st.useRef)(null),s=(0,st.useCallback)(d=>{let p={...d,profiles:Array.isArray(d?.profiles)?d.profiles:[],models:Array.isArray(d?.models)?d.models:[],sizes:Array.isArray(d?.sizes)?d.sizes:[],qualities:Array.isArray(d?.qualities)?d.qualities:[],issues:Array.isArray(d?.issues)?d.issues:[]};r(p),a.current=p,i(p.issues)},[]),l=(0,st.useCallback)(async()=>{try{s(await Pu())}catch(d){i([me(d)])}},[s]);(0,st.useEffect)(()=>{l()},[l]);let c=(0,st.useCallback)(async d=>{try{let p=await Gr(d);s(p),e(t("flash.profile.switched",{name:p.profileLabel||p.profile}))}catch(p){e(t("flash.profile.failed",{reason:me(p)}))}},[s,e]),u=(0,st.useCallback)(async d=>{try{let p=await Ur(d);s(p),e(t("flash.model.switched",{model:p.modelLabel}))}catch(p){e(t("flash.profile.failed",{reason:me(p)}))}},[s,e]);return{config:n,configIssues:o,configRef:a,switchProfile:c,switchModel:u,replaceConfig:s}}var En=require("react");function To(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function rf(e=50){let t=Math.max(1,Math.floor(e)),n=[],r=[];return{record(o,i){n.push(To(o)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(r.length=0)},undo(o){let i=n.pop();return i?(r.unshift(To(o)),To(i)):null},restore(o){let i=r.shift();return i?(n.push(To(o)),To(i)):null},canUndo:()=>n.length>0,canRestore:()=>r.length>0,clear(){n.length=0,r.length=0}}}function af({nodesRef:e,edgesRef:t,setNodes:n,setEdges:r,flash:o}){let i=ae(),a=(0,En.useRef)(rf(50)),s=(0,En.useCallback)(m=>{a.current.record({nodes:e.current,edges:t.current},m)},[e,t]),l=(0,En.useCallback)(()=>{let m=a.current.undo({nodes:e.current,edges:t.current});if(!m){o(i("history.nothingToUndo"));return}n(m.nodes),r(m.edges)},[e,t,n,r,o]),c=(0,En.useCallback)(()=>{let m=a.current.restore({nodes:e.current,edges:t.current});if(!m){o(i("history.nothingToRedo"));return}n(m.nodes),r(m.edges)},[e,t,n,r,o]),u=(0,En.useCallback)(()=>a.current.clear(),[]),d=a.current.canUndo(),p=a.current.canRestore();return{record:s,undo:l,restore:c,clear:u,canUndo:d,canRestore:p}}var sf=require("react");function p1(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function lf(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:r,onDeleteNodes:o,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:l,onClosePreview:c,hasPreview:u}=e;(0,sf.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&u){c();return}if(p1(p.target))return;let m=p.ctrlKey||p.metaKey,f=p.key.toLowerCase();if(m&&f==="a"){if(p.preventDefault(),!t.current.length)return;e.setNodes(h=>h.some(b=>!b.selected)?h.map(b=>({...b,selected:!0})):h);return}if(m&&f==="z"){p.preventDefault(),p.shiftKey?s():a();return}if(m&&f==="y"){p.preventDefault(),s();return}if(m&&f==="s"){p.preventDefault(),l();return}if(p.key==="Delete"&&n.length){p.preventDefault(),o(n);return}(p.key==="Delete"||p.key==="Backspace")&&r&&(p.preventDefault(),i(r))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,r,o,i,a,s,l,c,u,e])}var Mt=require("react");var m1=2500;function cf({nodes:e,edges:t,nodesRef:n,edgesRef:r,setNodes:o,setEdges:i,instanceRef:a,log:s,flash:l,closeDialog:c,defaultsRef:u,crashedRef:d,onRestored:p}){let m=ae(),f=(0,Mt.useRef)(null),y=(0,Mt.useRef)(()=>{});y.current=()=>{f.current&&(window.clearTimeout(f.current),f.current=null),!d.current&&n.current.length&&Ja(n.current,r.current).catch(()=>{})},(0,Mt.useEffect)(()=>{e.length&&(f.current&&window.clearTimeout(f.current),f.current=window.setTimeout(()=>{f.current=null,!d.current&&Ja(n.current,r.current).catch(()=>{})},m1))},[e,t,n,r,d]),(0,Mt.useEffect)(()=>{let w=()=>{document.visibilityState==="hidden"&&y.current()},g=()=>y.current();return document.addEventListener("visibilitychange",w),window.addEventListener("pagehide",g),()=>{document.removeEventListener("visibilitychange",w),window.removeEventListener("pagehide",g),y.current()}},[]),(0,Mt.useEffect)(()=>{let w=!1;return(async()=>{let x=n.current;try{let k=await Ou();if(w)return;if(!k.empty&&k.nodes?.length&&!n.current.length){let S=Ya(k.nodes,k.edges??[],[],u.current);o(S.nodes),i(S.edges),x=S.nodes,s(m("workflow.restored",{name:k.name??m("workflow.restored.auto")})),S.dropped.length&&s(m("workflow.dropped",{count:S.dropped.length,reason:S.dropped[0]?.reason??""}))}}catch{}w||p?.(x)})(),()=>{w=!0}},[o,i,s,n,p]);let h=(0,Mt.useCallback)(async w=>{try{let g=await Du(w,n.current,r.current);c(),l(m("workflow.saved",{name:g.name||w}))}catch(g){l(m("workflow.saveFailed",{reason:me(g)}))}},[n,r,c,l]),b=(0,Mt.useCallback)(async w=>{try{let g=await Au(w),x=Ya(g.nodes,g.edges,g.missing??[],u.current);o(x.nodes),i(x.edges),c(),l(m("workflow.loaded",{name:g.name||w})),x.dropped.length&&l(m("workflow.dropped",{count:x.dropped.length,reason:x.dropped[0]?.reason??""})),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(g){l(m("workflow.loadFailed",{reason:me(g)}))}},[o,i,a,c,l,u]);return{doSave:h,doLoad:b}}var fe=require("react/jsx-runtime");function As({t:e}={}){return(0,fe.jsx)(hp,{translate:e,children:(0,fe.jsx)(w1,{})})}function w1(){let e=ae(),[t,n,r]=au([]),[o,i,a]=su([]),[s,l]=(0,le.useState)([]),[c,u]=(0,le.useState)(null),[d,p]=(0,le.useState)(null),[m,f]=(0,le.useState)(null),[y,h]=(0,le.useState)(1),[b,w]=(0,le.useState)(!1),[g,x]=(0,le.useState)(()=>Qp()),[k,S]=(0,le.useState)([]),[N,C]=(0,le.useState)(null),[M,O]=(0,le.useState)(()=>tp()),[D,L]=(0,le.useState)(!1),[T,v]=(0,le.useState)([]),E=(0,le.useRef)(null),z=(0,le.useRef)(null),I=(0,le.useRef)(null),_=(0,le.useRef)(null),R=(0,le.useRef)(null),V=(0,le.useRef)(new Map),W=(0,le.useRef)(new Map),F=(0,le.useRef)(t),$=(0,le.useRef)(o);F.current=t,$.current=o;let Y=(0,le.useCallback)(A=>{l(G=>[...G.slice(-8),A])},[]),U=(0,le.useCallback)(A=>{u(A),window.setTimeout(()=>u(G=>G===A?null:G),2600)},[]),{config:ee,configIssues:ne,configRef:P,switchProfile:X,switchModel:oe,replaceConfig:re}=of(U),j=(0,le.useRef)(!1),te=(0,le.useRef)({});te.current={size:P.current?.sizes[0]?.value,quality:P.current?.qualities[0]};let ue=(0,le.useRef)(!1);(0,le.useEffect)(()=>{!ee||ue.current||!(!ee.provider?.apiKeyConfigured&&(ee.source==="plugin"||ee.issues.length>0))||(ue.current=!0,p({kind:"settings"}))},[ee]);let Q=af({nodesRef:F,edgesRef:$,setNodes:n,setEdges:i,flash:U}),{addImages:q,replaceImage:de,openPreview:be,addDataUrl:Ee}=ef({nodesRef:F,setNodes:n,createPosition:()=>Oo.current(),log:Y,flash:U,setPreview:f,record:Q.record}),{runPrompt:Te,cancelPrompt:je,runMany:Ft,resumeTasks:Et}=nf({nodesRef:F,edgesRef:$,setNodes:n,setEdges:i,log:Y,flash:U,taskIdsRef:W,timersRef:V}),{doSave:_t,doLoad:Qe}=cf({nodes:t,edges:o,nodesRef:F,edgesRef:$,setNodes:n,setEdges:i,instanceRef:I,log:Y,flash:U,closeDialog:()=>p(null),defaultsRef:te,crashedRef:j,onRestored:Et}),lt=Dp(t),ct=(0,le.useMemo)(()=>({animated:!b}),[b]),Je=(0,le.useMemo)(()=>Mu(t,o),[t,o]),eo=(0,le.useMemo)(()=>t.map(A=>{if(A.type==="image"){let G=Je.refCounts.get(A.data.registryId)??0;return(A.data.refCount??0)===G?A:{...A,data:{...A.data,refCount:G}}}if(A.type==="group"){let G=Je.groupCounts.get(A.id)??0,Z=Je.groupSizes.get(A.id)??0,ce=Je.groupDups.get(A.id)??0;return A.data.imageCount===G&&A.data.totalSize===Z&&A.data.duplicateCount===ce?A:{...A,data:{...A.data,imageCount:G,totalSize:Z,duplicateCount:ce}}}return A}),[t,Je]),nn=t.filter(A=>A.type==="prompt"),Do=nn.filter(A=>A.data.status==="queued"||A.data.status==="running").map(A=>A.id),to=nn.filter(A=>(A.data.prompt??"").trim()&&A.data.status!=="running"&&A.data.status!=="queued").map(A=>A.id),Ao=(0,le.useCallback)((A,G)=>{n(Z=>it(Z,A,G))},[n]),Wt=(0,le.useCallback)(A=>{if(!A.length)return;Q.record();let G=new Set(A);n(Z=>Z.filter(ce=>!G.has(ce.id))),i(Z=>Z.filter(ce=>!G.has(ce.source)&&!G.has(ce.target))),U(e("flash.deleted.kept",{count:A.length}))},[n,i,Q,U,e]),_n=(0,le.useCallback)(A=>Wt([A]),[Wt]),Be=(0,le.useCallback)(()=>{let A=I.current,G=E.current?.getBoundingClientRect(),Z=A&&G?A.screenToFlowPosition({x:G.width/2,y:G.height/2}):{x:140,y:120},{position:ce,next:we}=xu(Z,R.current);return R.current=we,ce},[]),Oo=(0,le.useRef)(Be);Oo.current=Be;let Lo=(0,le.useCallback)(A=>{let G=wu(A??Be(),{size:te.current.size??"1024x1024",quality:te.current.quality??"high",outputDir:P.current?.defaultOutputDir??""});Q.record(),n(Z=>[...Z,G])},[Be,n,P,Q]),Ho=(0,le.useCallback)(A=>{Q.record(),n(G=>[...G,vu(A??Be())])},[Be,n,Q]),hi=(0,le.useCallback)(()=>{i(Ka(F.current,$.current)),U(e("flash.autoConnect.done"))},[i,U]),bi=(0,le.useCallback)(()=>{let A=new Set(k);if(!A.size){U(e("flash.autoConnect.noneSelected"));return}Q.record(),i(_u(F.current,$.current,A)),U(e("flash.autoConnect.selection"))},[k,i,U,Q]),In=(0,le.useCallback)(async A=>{let G=new Set(A),Z=F.current.find(dt=>dt.type==="prompt"&&G.has(dt.id));if(!Z||Z.type!=="prompt")return;let ce=await Io(e,{title:e("settings.pick.output"),startAt:Z.data.outputDir||P.current?.defaultOutputDir||""},U);if(!ce)return;let we=Su(F.current,G,ce);if(!we.changedCount){U(e("flash.outputDir.same",{dir:ce}));return}Q.record(),n(we.nodes),U(e("flash.outputDir.set",{dir:ce}))},[F,P,U,Q,n,e]),[no,Bo]=(0,le.useState)(!1),yi=(0,le.useCallback)(async()=>{if(!no){Bo(!0);try{await In(k)}finally{Bo(!1)}}},[no,In,k]),xi=(0,le.useCallback)(async A=>{await In([A])},[In]),wi=(0,le.useCallback)(async()=>{let A=await Io(e,{title:e("settings.pick.output"),startAt:P.current?.defaultOutputDir||""},U);if(A)try{re(await Xr(A)),U(e("flash.defaultOutputDir.set",{dir:A}))}catch(G){U(e("settings.save.failed",{reason:me(G)}))}},[P,U,re,e]),vi=(0,le.useCallback)(()=>{let A=I.current;if(!A)return;let G=F.current.filter(ce=>k.includes(ce.id)),Z=G.length?G:F.current;if(!Z.length){U(e("flash.noNodes"));return}A.fitView({nodes:Z,padding:.25,duration:300,maxZoom:1.6})},[k,U]),ki=(0,le.useCallback)(()=>{let A=new Set(k);if(!A.size){U(e("flash.layout.noneSelected"));return}Q.record({preserveRedo:!0}),n(G=>Zu(G,$.current,A))},[k,n,U,Q,$]),{dropIntent:Si,dragHandlers:Ci,startToolbarDrag:Ni,dropChip:Mi}=Fp({canvasRef:E,modalOpen:!!d||!!m,getCreatePosition:()=>Be(),toFlowPosition:A=>I.current?I.current.screenToFlowPosition(A):Be(),onDropFiles:(A,G)=>void q(A,G),onDropNode:(A,G)=>{A==="prompt"?Lo(G):Ho(G)},onRejectFiles:()=>U(e("flash.drop.noImage"))});(0,le.useEffect)(()=>{let A=G=>{let Z=G.target;if(Z&&(Z.tagName==="TEXTAREA"||Z.tagName==="INPUT"))return;let ce=Array.from(G.clipboardData?.files??[]);ce.length&&(G.preventDefault(),q(ce,Be()))};return window.addEventListener("paste",A),()=>window.removeEventListener("paste",A)},[q,Be]),lf({nodesRef:F,edgesRef:$,setNodes:n,setEdges:i,selectedIds:k,selectedEdgeId:N,onDeleteNodes:Wt,onDeleteEdge:A=>{Q.record(),i(G=>G.filter(Z=>Z.id!==A)),C(null)},onUndo:Q.undo,onRestore:Q.restore,onSave:()=>p({kind:"save"}),onClosePreview:()=>f(null),hasPreview:!!m});let on=(0,le.useCallback)(A=>G=>{let Z=F.current.find(ce=>ce.id===G);if(!Z||Z.type!=="image"||!Z.data.url){U(e("flash.image.noFile"));return}p({kind:A,target:{nodeId:G,src:Z.data.url,name:Z.data.name}})},[F,U]),It=(0,le.useMemo)(()=>({cropImage:on("crop"),splitImage:on("split"),upscaleImage:on("upscale"),maskImage:on("mask")}),[on]),$o=(0,le.useCallback)(A=>{Q.record(),n(G=>G.map(Z=>Z.id===A&&Z.type==="image"?{...Z,data:{...Z.data,maskDataUrl:void 0}}:Z)),U(e("flash.mask.cleared"))},[n,Q,U]),{nodeMenu:Pt,boxRect:zt,closeMenu:Ei,setNodeMenu:Fo}=Vp({rootRef:z,canvasRef:E,instanceRef:I,setNodes:n,modalOpen:!!d||!!m}),rn=Pt?t.find(A=>A.id===Pt.nodeId):void 0,oo=rn?Up(rn.type??"image",{hasUrl:rn.type==="image"?!!rn.data.url:!1,selectedCount:k.length}).map(A=>A.kind==="action"?{...A,action:{...A.action,label:Zp(A.action.id,k.length,e)}}:A):[],Wo=(0,le.useCallback)(A=>{let G=Pt;if(Fo(null),!G)return;let Z=G.nodeId;switch(A){case"delete-selection":Wt(k),S([]);break;case"preview":be(Z);break;case"crop":It.cropImage(Z);break;case"upscale":It.upscaleImage(Z);break;case"split":It.splitImage(Z);break;case"mask":It.maskImage(Z);break;case"replace":de(Z);break;case"run":Te(Z);break;case"copy-prompt":{let ce=F.current.find(we=>we.id===Z);if(ce?.type!=="prompt")break;navigator.clipboard.writeText(ce.data.prompt).then(()=>U(e("flash.prompt.copied"))).catch(()=>U(e("flash.prompt.copyFailed")));break}case"delete":_n(Z);break;default:break}},[Pt,Fo,Wt,be,It,de,Te,_n,k,U]),_i=(0,le.useMemo)(()=>({updatePrompt:Ao,runPrompt:A=>{Te(A)},cancelPrompt:A=>{je(A)},deleteNode:_n,pickOutputDir:xi,zoomImage:be,replaceImage:de,...It,clearMask:$o,config:ee}),[Ao,Te,je,_n,be,de,It,$o,ee]);return(0,fe.jsxs)(cs.Provider,{value:_i,children:[(0,fe.jsx)("style",{children:Cp}),(0,fe.jsxs)("div",{className:"im-root",ref:z,children:[(0,fe.jsx)(Op,{config:ee,promptCount:nn.length,runnableIds:to,busyIds:Do.length,snapEnabled:M,canvasLocked:D,cost:lt,canUndo:Q.canUndo,canRestore:Q.canRestore,onUndo:Q.undo,onRestore:Q.restore,onAddPrompt:()=>Lo(),onPickFiles:()=>_.current?.click(),onAddGroup:()=>Ho(),onPasteImport:()=>p({kind:"import"}),onDragCreateNode:Ni,onRun:Ft,onCancelAll:()=>Do.forEach(A=>void je(A)),onAutoConnect:hi,onOpenDefaultOutputDir:()=>void wi(),onSwitchProfile:A=>void X(A),onSwitchModel:A=>void oe(A),onOpenSave:async()=>{try{let A=await Qa();p({kind:"save",workflows:A.workflows})}catch{p({kind:"save"})}},onOpenLoad:async()=>{try{let A=await Qa();p({kind:"load",workflows:A.workflows})}catch(A){U(e("flash.readFailed",{reason:me(A)}))}},onOpenSettings:()=>p({kind:"settings"}),onOpenHelp:()=>p({kind:"help"}),onOpenHistory:()=>p({kind:"history"})}),ne.length?(0,fe.jsx)(rm,{tone:"error",action:(0,fe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>p({kind:"settings"}),children:e("canvas.goSettings")}),children:(0,fe.jsx)("ul",{className:"im-banner-list",children:ne.map(A=>(0,fe.jsx)("li",{children:A},A))})}):null,(0,fe.jsxs)("div",{className:`im-canvas${Si?" is-drop-active":""}`,ref:E,...Ci,children:[(0,fe.jsx)(em,{selectedCount:k.length,selectedPromptCount:k.filter(A=>t.some(G=>G.id===A&&G.type==="prompt")).length,selectedRunnableIds:to.filter(A=>k.includes(A)),pickingOutputDir:no,onRunSelected:()=>Ft(to.filter(A=>k.includes(A))),onAutoLayout:ki,onAutoConnectSelected:bi,onSetOutputDir:()=>void yi(),onDeleteSelected:()=>{Wt(k),S([])}}),(0,fe.jsx)(ds.Provider,{value:b,children:(0,fe.jsx)(ri,{onCrash:A=>{j.current=!0,Y(e("flash.renderError",{reason:A.message}))},onClear:()=>{n([]),i([]),S([])},children:(0,fe.jsxs)(ru,{nodes:eo,edges:o,nodeTypes:Ep,onNodesChange:A=>{let G=op(A,F.current,M);v(G.guides),r(G.changes)},onEdgesChange:A=>a(A),onConnect:tf(i),isValidConnection:A=>Cu(F.current,$.current,{source:String(A.source??""),target:String(A.target??"")}),onInit:A=>{I.current=A,w(A.getViewport().zoom<hs)},onNodeDragStop:(A,G)=>{if(v([]),!M)return;let Z=Eo(G),ce=F.current.filter(dt=>dt.id!==G.id).map(Eo),we=Kr(Z,ce);we.x===Z.x&&we.y===Z.y||n(dt=>dt.map(an=>an.id===G.id?{...an,position:{x:we.x,y:we.y}}:an))},onMove:(A,G)=>{h(G.zoom),w(Z=>Pp(Z,G.zoom))},onEdgeDoubleClick:(A,G)=>{Q.record(),i(Z=>Z.filter(ce=>ce.id!==G.id)),C(null)},onSelectionChange:({nodes:A,edges:G})=>{let Z=A.map(we=>we.id);S(we=>we.length===Z.length&&we.every((dt,an)=>dt===Z[an])?we:Z);let ce=G.length===1?G[0].id:null;C(we=>we===ce?we:ce)},fitView:!0,fitViewOptions:{padding:.15,minZoom:.02,maxZoom:1},minZoom:.05,maxZoom:2,proOptions:{hideAttribution:!0},defaultEdgeOptions:ct,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!D,nodesConnectable:!D,elementsSelectable:!D,panOnDrag:!D,selectionOnDrag:!1,selectionKeyCode:null,multiSelectionKeyCode:["Meta","Control"],children:[(0,fe.jsx)(cu,{variant:wt.Dots,gap:18,size:1.4}),g?(0,fe.jsx)(pu,{ariaLabel:e("canvas.minimap"),pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:A=>A.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,fe.jsx)(jm,{guides:T})]})})}),(0,fe.jsx)(Lp,{zoom:y,snapEnabled:M,canvasLocked:D,minimapOpen:g,onZoomIn:()=>void I.current?.zoomIn({duration:180}),onZoomOut:()=>void I.current?.zoomOut({duration:180}),onFitView:()=>I.current?.fitView({padding:.15,duration:300,minZoom:.02,maxZoom:2}),onFocusSelected:vi,onToggleSnap:()=>O(A=>{let G=!A;return np(G),G||v([]),U(e(G?"flash.snap.on":"flash.snap.off")),G}),onToggleLock:()=>L(A=>{let G=!A;return U(e(G?"flash.lock.on":"flash.lock.off")),G}),onToggleMinimap:()=>x(A=>{let G=!A;return Jp(G),G}),onOpenHelp:()=>p({kind:"help"})}),zt&&I.current&&E.current?(()=>{let A=I.current.flowToScreenPosition({x:zt.x,y:zt.y}),G=I.current.flowToScreenPosition({x:zt.x+zt.width,y:zt.y+zt.height}),Z=E.current.getBoundingClientRect();return(0,fe.jsx)("div",{className:"im-marquee",style:{left:A.x-Z.left,top:A.y-Z.top,width:G.x-A.x,height:G.y-A.y}})})():null,t.length===0?(0,fe.jsx)(tm,{}):null,(0,fe.jsx)(nm,{logs:s}),(0,fe.jsx)(om,{text:c}),Mi]}),Pt&&oo.length>0?(0,fe.jsx)(Kp,{x:Pt.x,y:Pt.y,items:oo,onPick:Wo,onClose:Ei}):null,(0,fe.jsx)("input",{ref:_,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:A=>{let G=Array.from(A.target.files??[]);A.target.value="",q(G,Be())}}),m?(0,fe.jsx)(di,{imageUrl:m.url,name:m.name,copyPath:m.path,onClose:()=>f(null)}):null,d?.kind==="save"?(0,fe.jsx)(gm,{workflows:d.workflows??[],imagoraRoot:ee?.imagoraRoot,onCancel:()=>p(null),onSubmit:A=>void _t(A)}):null,d?.kind==="load"?(0,fe.jsx)(hm,{workflows:d.workflows??[],imagoraRoot:ee?.imagoraRoot,onCancel:()=>p(null),onPick:A=>void Qe(A)}):null,d?.kind==="crop"&&d.target?(0,fe.jsx)(Im,{src:d.target.src,name:d.target.name,onClose:()=>p(null),onConfirm:async(A,G)=>{Q.record(),await Ee(A,`${d.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),p(null),U(G)}}):null,d?.kind==="split"&&d.target?(0,fe.jsx)(Xm,{src:d.target.src,name:d.target.name,onClose:()=>p(null),onConfirm:async A=>{Q.record();let G=d.target.name.replace(/\.[^.]+$/,""),Z=Be();for(let[ce,we]of A.entries())await Ee(we.dataUrl,`${G}_${ce+1}.png`,{x:Z.x+ce*160,y:Z.y});p(null),U(e("flash.split.done",{count:A.length}))}}):null,d?.kind==="upscale"&&d.target?(0,fe.jsx)(Zm,{src:d.target.src,onClose:()=>p(null),onConfirm:async(A,G)=>{Q.record(),await Ee(A,`${d.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),p(null),U(G)}}):null,d?.kind==="mask"&&d.target?(0,fe.jsx)(Tm,{src:d.target.src,name:d.target.name,onClose:()=>p(null),onConfirm:async(A,G)=>{Q.record(),n(Z=>Z.map(ce=>ce.id===d.target.nodeId&&ce.type==="image"?{...ce,data:{...ce.data,maskDataUrl:A}}:ce)),p(null),U(G)}}):null,d?.kind==="help"?(0,fe.jsx)(bm,{config:ee,onClose:()=>p(null)}):null,d?.kind==="history"?(0,fe.jsx)(Bm,{imagoraRoot:ee?.imagoraRoot,onClose:()=>p(null),onImport:A=>{if(!A.length)return;Q.record();let G=Be(),Z=A.map((ce,we)=>vn(ce,{x:G.x+we*172,y:G.y}));n(ce=>[...ce,...Z]),U(e("flash.drop.images",{count:Z.length}))}}):null,d?.kind==="import"?(0,fe.jsx)(Qm,{sizes:ee?.sizes??[],onCancel:()=>p(null),onConfirm:A=>{Q.record();let G=P.current,Z=Gu(A,{sizes:G?.sizes??[],defaultQuality:G?.qualities[0]??"high",defaultOutputDir:G?.defaultOutputDir??""},Be());n(ce=>[...ce,...Z]),p(null),U(e("flash.import.prompts",{count:Z.length}))}}):null,d?.kind==="settings"?(0,fe.jsx)(Jm,{config:ee,onClose:()=>p(null),onSaved:re,onFlash:U}):null]})]})}var ff=`/* this gets exported as style.css and can be used for the default theming */
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
`;var xf=require("react/jsx-runtime"),S1=["slots","locale"],yf="imagora";globalThis.__dshImagoraCanvas=As;var C1={ErrorBoundary:jn,NodeBoundary:oi,CanvasBoundary:ri};globalThis.__dshImagoraBoundary=C1;function N1({size:e=16}){return(0,xf.jsx)(bs,{size:e,fill:"currentColor"})}function M1(e){e.effect(()=>e.locale.register(_o,{zh:ss,en:fp}),"dsh-imagora-desk: \u6587\u6848\u8BCD\u5178");let t=e.locale.bind(_o);e.effect(()=>{let n=document.createElement("style");return n.setAttribute("data-dsh-imagora-desk","xyflow"),n.textContent=ff,document.head.appendChild(n),()=>n.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(bf(),hf)).then(({primitives:n})=>{try{n()}catch(r){console.error("[dsh-imagora-desk]",r)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:yf,locale:_o},As)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:yf,order:6,locale:_o,label:()=>t("panel.entry")},N1)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
