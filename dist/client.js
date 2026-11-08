window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var $p=Object.create;var So=Object.defineProperty;var Lp=Object.getOwnPropertyDescriptor;var Hp=Object.getOwnPropertyNames;var Bp=Object.getPrototypeOf,Wp=Object.prototype.hasOwnProperty;var Fp=(e,t)=>()=>(e&&(t=e(e=0)),t);var Co=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ja=(e,t)=>{for(var n in t)So(e,n,{get:t[n],enumerable:!0})},es=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Hp(t))!Wp.call(e,r)&&r!==n&&So(e,r,{get:()=>t[r],enumerable:!(o=Lp(t,r))||o.enumerable});return e};var ts=(e,t,n)=>(n=e!=null?$p(Bp(e)):{},es(t||!e||!e.__esModule?So(n,"default",{value:e,enumerable:!0}):n,e)),Vp=e=>es(So({},"__esModule",{value:!0}),e);var jl=Co(Kl=>{"use strict";var Ln=require("react");function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var i0=typeof Object.is=="function"?Object.is:r0,a0=Ln.useState,s0=Ln.useEffect,l0=Ln.useLayoutEffect,c0=Ln.useDebugValue;function u0(e,t){var n=t(),o=a0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return l0(function(){r.value=n,r.getSnapshot=t,ra(r)&&i({inst:r})},[e,n,t]),s0(function(){return ra(r)&&i({inst:r}),e(function(){ra(r)&&i({inst:r})})},[e]),c0(n),n}function ra(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i0(e,n)}catch{return!0}}function d0(e,t){return t()}var f0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?d0:u0;Kl.useSyncExternalStore=Ln.useSyncExternalStore!==void 0?Ln.useSyncExternalStore:f0});var Jl=Co((Qv,Ql)=>{"use strict";Ql.exports=jl()});var tc=Co(ec=>{"use strict";var dr=require("react"),p0=Jl();function m0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var g0=typeof Object.is=="function"?Object.is:m0,h0=p0.useSyncExternalStore,b0=dr.useRef,y0=dr.useEffect,x0=dr.useMemo,w0=dr.useDebugValue;ec.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=b0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=x0(function(){function c(m){if(!u){if(u=!0,l=m,m=o(m),r!==void 0&&a.hasValue){var p=a.value;if(r(p,m))return d=p}return d=m}if(p=d,g0(l,m))return p;var x=o(m);return r!==void 0&&r(p,x)?(l=m,p):(l=m,d=x)}var u=!1,l,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var s=h0(e,i[0],i[1]);return y0(function(){a.hasValue=!0,a.value=s},[s]),w0(s),s}});var oc=Co((e1,nc)=>{"use strict";nc.exports=tc()});var tp={};Ja(tp,{primitives:()=>Vw});function Fw(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Vw(){if(Or)return Or;let e=require(ep),t=Fw(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${ep}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Or=t,Or}var ep,Or,np=Fp(()=>{"use strict";ep="@deepseek-ai/dsh-client-ui-primitives",Or=null});var qw={};Ja(qw,{apply:()=>Yw,inject:()=>Gw});module.exports=Vp(qw);var se=require("react");var L=require("react/jsx-runtime"),$=require("react");function _e(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=_e(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Gp={value:()=>{}};function Kt(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new No(n)}function No(e){this._=e}function Xp(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}No.prototype=Kt.prototype={constructor:No,on:function(e,t){var n=this._,o=Xp(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=Yp(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=ns(n[r],e.name,t);else if(t==null)for(r in n)n[r]=ns(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new No(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function Yp(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function ns(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Gp,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var Ur="http://www.w3.org/1999/xhtml",os={svg:"http://www.w3.org/2000/svg",xhtml:Ur,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Vn(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),os.hasOwnProperty(t)?{space:os[t],local:e}:e}function qp(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Ur&&t.documentElement.namespaceURI===Ur?t.createElement(e):t.createElementNS(n,e)}}function Up(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function rs(e){var t=Vn(e);return(t.local?Up:qp)(t)}function Zp(){}function _o(e){return e==null?Zp:function(){return this.querySelector(e)}}function Kp(e){typeof e!="function"&&(e=_o(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),c,u,l=0;l<a;++l)(c=i[l])&&(u=e.call(c,c.__data__,l,i))&&("__data__"in c&&(u.__data__=c.__data__),s[l]=u);return new je(o,this._parents)}function jp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Qp(){return[]}function Kr(e){return e==null?Qp:function(){return this.querySelectorAll(e)}}function Jp(e){return function(){return jp(e.apply(this,arguments))}}function em(e){typeof e=="function"?e=Jp(e):e=Kr(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&(o.push(e.call(c,c.__data__,u,a)),r.push(c));return new je(o,r)}function jr(e){return function(){return this.matches(e)}}function is(e){return function(t){return t.matches(e)}}var tm=Array.prototype.find;function nm(e){return function(){return tm.call(this.children,e)}}function om(){return this.firstElementChild}function rm(e){return this.select(e==null?om:nm(typeof e=="function"?e:is(e)))}var im=Array.prototype.filter;function am(){return Array.from(this.children)}function sm(e){return function(){return im.call(this.children,e)}}function lm(e){return this.selectAll(e==null?am:sm(typeof e=="function"?e:is(e)))}function cm(e){typeof e!="function"&&(e=jr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new je(o,this._parents)}function as(e){return new Array(e.length)}function um(){return new je(this._enter||this._groups.map(as),this._parents)}function Eo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Eo.prototype={constructor:Eo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function dm(e){return function(){return e}}function fm(e,t,n,o,r,i){for(var a=0,s,c=t.length,u=i.length;a<u;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new Eo(e,i[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function pm(e,t,n,o,r,i,a){var s,c,u=new Map,l=t.length,d=i.length,f=new Array(l),m;for(s=0;s<l;++s)(c=t[s])&&(f[s]=m=a.call(c,c.__data__,s,t)+"",u.has(m)?r[s]=c:u.set(m,c));for(s=0;s<d;++s)m=a.call(e,i[s],s,i)+"",(c=u.get(m))?(o[s]=c,c.__data__=i[s],u.delete(m)):n[s]=new Eo(e,i[s]);for(s=0;s<l;++s)(c=t[s])&&u.get(f[s])===c&&(r[s]=c)}function mm(e){return e.__data__}function gm(e,t){if(!arguments.length)return Array.from(this,mm);var n=t?pm:fm,o=this._parents,r=this._groups;typeof e!="function"&&(e=dm(e));for(var i=r.length,a=new Array(i),s=new Array(i),c=new Array(i),u=0;u<i;++u){var l=o[u],d=r[u],f=d.length,m=hm(e.call(l,l&&l.__data__,u,o)),p=m.length,x=s[u]=new Array(p),b=a[u]=new Array(p),g=c[u]=new Array(f);n(l,d,x,b,g,m,t);for(var k=0,h=0,w,S;k<p;++k)if(w=x[k]){for(k>=h&&(h=k+1);!(S=b[h])&&++h<p;);w._next=S||null}}return a=new je(a,o),a._enter=s,a._exit=c,a}function hm(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function bm(){return new je(this._exit||this._groups.map(as),this._parents)}function ym(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function xm(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),c=0;c<a;++c)for(var u=n[c],l=o[c],d=u.length,f=s[c]=new Array(d),m,p=0;p<d;++p)(m=u[p]||l[p])&&(f[p]=m);for(;c<r;++c)s[c]=n[c];return new je(s,this._parents)}function wm(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function vm(e){e||(e=km);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,c=r[i]=new Array(s),u,l=0;l<s;++l)(u=a[l])&&(c[l]=u);c.sort(t)}return new je(r,this._parents).order()}function km(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Sm(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Cm(){return Array.from(this)}function Nm(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function Em(){let e=0;for(let t of this)++e;return e}function _m(){return!this.node()}function Mm(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function Im(e){return function(){this.removeAttribute(e)}}function Pm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function zm(e,t){return function(){this.setAttribute(e,t)}}function Rm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Dm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Am(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Tm(e,t){var n=Vn(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?Pm:Im:typeof t=="function"?n.local?Am:Dm:n.local?Rm:zm)(n,t))}function ss(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Om(e){return function(){this.style.removeProperty(e)}}function $m(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Lm(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Hm(e,t,n){return arguments.length>1?this.each((t==null?Om:typeof t=="function"?Lm:$m)(e,t,n??"")):jt(this.node(),e)}function jt(e,t){return e.style.getPropertyValue(t)||ss(e).getComputedStyle(e,null).getPropertyValue(t)}function Bm(e){return function(){delete this[e]}}function Wm(e,t){return function(){this[e]=t}}function Fm(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Vm(e,t){return arguments.length>1?this.each((t==null?Bm:typeof t=="function"?Fm:Wm)(e,t)):this.node()[e]}function ls(e){return e.trim().split(/^|\s+/)}function Qr(e){return e.classList||new cs(e)}function cs(e){this._node=e,this._names=ls(e.getAttribute("class")||"")}cs.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function us(e,t){for(var n=Qr(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function ds(e,t){for(var n=Qr(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Gm(e){return function(){us(this,e)}}function Xm(e){return function(){ds(this,e)}}function Ym(e,t){return function(){(t.apply(this,arguments)?us:ds)(this,e)}}function qm(e,t){var n=ls(e+"");if(arguments.length<2){for(var o=Qr(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?Ym:t?Gm:Xm)(n,t))}function Um(){this.textContent=""}function Zm(e){return function(){this.textContent=e}}function Km(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function jm(e){return arguments.length?this.each(e==null?Um:(typeof e=="function"?Km:Zm)(e)):this.node().textContent}function Qm(){this.innerHTML=""}function Jm(e){return function(){this.innerHTML=e}}function eg(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function tg(e){return arguments.length?this.each(e==null?Qm:(typeof e=="function"?eg:Jm)(e)):this.node().innerHTML}function ng(){this.nextSibling&&this.parentNode.appendChild(this)}function og(){return this.each(ng)}function rg(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ig(){return this.each(rg)}function ag(e){var t=typeof e=="function"?e:rs(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function sg(){return null}function lg(e,t){var n=typeof e=="function"?e:rs(e),o=t==null?sg:typeof t=="function"?t:_o(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function cg(){var e=this.parentNode;e&&e.removeChild(this)}function ug(){return this.each(cg)}function dg(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function fg(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function pg(e){return this.select(e?fg:dg)}function mg(e){return arguments.length?this.property("__data__",e):this.node().__data__}function gg(e){return function(t){e.call(this,t,this.__data__)}}function hg(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function bg(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function yg(e,t,n){return function(){var o=this.__on,r,i=gg(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function xg(e,t,n){var o=hg(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,u=s.length,l;c<u;++c)for(r=0,l=s[c];r<i;++r)if((a=o[r]).type===l.type&&a.name===l.name)return l.value}return}for(s=t?yg:bg,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function fs(e,t,n){var o=ss(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function wg(e,t){return function(){return fs(this,e,t)}}function vg(e,t){return function(){return fs(this,e,t.apply(this,arguments))}}function kg(e,t){return this.each((typeof t=="function"?vg:wg)(e,t))}function*Sg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var ps=[null];function je(e,t){this._groups=e,this._parents=t}function Qt(){return new je([[document.documentElement]],ps)}function Cg(){return this}je.prototype=Qt.prototype={constructor:je,select:Kp,selectAll:em,selectChild:rm,selectChildren:lm,filter:cm,data:gm,enter:um,exit:bm,join:ym,merge:xm,selection:Cg,order:wm,sort:vm,call:Sm,nodes:Cm,node:Nm,size:Em,empty:_m,each:Mm,attr:Tm,style:Hm,property:Vm,classed:qm,text:jm,html:tg,raise:og,lower:ig,append:ag,insert:lg,remove:ug,clone:pg,datum:mg,on:xg,dispatch:kg,[Symbol.iterator]:Sg};function Le(e){return typeof e=="string"?new je([[document.querySelector(e)]],[document.documentElement]):new je([[e]],ps)}var Ng=0;function Eg(){return new Zr}function Zr(){this._="@"+(++Ng).toString(36)}Zr.prototype=Eg.prototype={constructor:Zr,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function _g(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Xe(e,t){if(e=_g(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var Mg={passive:!1},Gn={capture:!0,passive:!1};function Jr(e){e.stopImmediatePropagation()}function xn(e){e.preventDefault(),e.stopImmediatePropagation()}function ti(e){var t=e.document.documentElement,n=Le(e).on("dragstart.drag",xn,Gn);"onselectstart"in t?n.on("selectstart.drag",xn,Gn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function ni(e,t){var n=e.document.documentElement,o=Le(e).on("dragstart.drag",null);t&&(o.on("click.drag",xn,Gn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Mo=e=>()=>e;function ei(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:c,dy:u,dispatch:l}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:l}})}ei.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Ig(e){return!e.ctrlKey&&!e.button}function Pg(){return this.parentNode}function zg(e,t){return t??{x:e.x,y:e.y}}function Rg(){return navigator.maxTouchPoints||"ontouchstart"in this}function oi(){var e=Ig,t=Pg,n=zg,o=Rg,r={},i=Kt("start","drag","end"),a=0,s,c,u,l,d=0;function f(w){w.on("mousedown.drag",m).filter(o).on("touchstart.drag",b).on("touchmove.drag",g,Mg).on("touchend.drag touchcancel.drag",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(w,S){if(!(l||!e.call(this,w,S))){var C=h(this,t.call(this,w,S),w,S,"mouse");C&&(Le(w.view).on("mousemove.drag",p,Gn).on("mouseup.drag",x,Gn),ti(w.view),Jr(w),u=!1,s=w.clientX,c=w.clientY,C("start",w))}}function p(w){if(xn(w),!u){var S=w.clientX-s,C=w.clientY-c;u=S*S+C*C>d}r.mouse("drag",w)}function x(w){Le(w.view).on("mousemove.drag mouseup.drag",null),ni(w.view,u),xn(w),r.mouse("end",w)}function b(w,S){if(e.call(this,w,S)){var C=w.changedTouches,v=t.call(this,w,S),E=C.length,P,B;for(P=0;P<E;++P)(B=h(this,v,w,S,C[P].identifier,C[P]))&&(Jr(w),B("start",w,C[P]))}}function g(w){var S=w.changedTouches,C=S.length,v,E;for(v=0;v<C;++v)(E=r[S[v].identifier])&&(xn(w),E("drag",w,S[v]))}function k(w){var S=w.changedTouches,C=S.length,v,E;for(l&&clearTimeout(l),l=setTimeout(function(){l=null},500),v=0;v<C;++v)(E=r[S[v].identifier])&&(Jr(w),E("end",w,S[v]))}function h(w,S,C,v,E,P){var B=i.copy(),R=Xe(P||C,S),A,I,y;if((y=n.call(w,new ei("beforestart",{sourceEvent:C,target:f,identifier:E,active:a,x:R[0],y:R[1],dx:0,dy:0,dispatch:B}),v))!=null)return A=y.x-R[0]||0,I=y.y-R[1]||0,function _(M,N,z){var D=R,H;switch(M){case"start":r[E]=_,H=a++;break;case"end":delete r[E],--a;case"drag":R=Xe(z||N,S),H=a;break}B.call(M,w,new ei(M,{sourceEvent:N,subject:y,target:f,identifier:E,active:H,x:R[0]+A,y:R[1]+I,dx:R[0]-D[0],dy:R[1]-D[1],dispatch:B}),v)}}return f.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Mo(!!w),f):e},f.container=function(w){return arguments.length?(t=typeof w=="function"?w:Mo(w),f):t},f.subject=function(w){return arguments.length?(n=typeof w=="function"?w:Mo(w),f):n},f.touchable=function(w){return arguments.length?(o=typeof w=="function"?w:Mo(!!w),f):o},f.on=function(){var w=i.on.apply(i,arguments);return w===i?f:w},f.clickDistance=function(w){return arguments.length?(d=(w=+w)*w,f):Math.sqrt(d)},f}function Sn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function qn(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Tt(){}var nn=.7,kn=1/nn,wn="\\s*([+-]?\\d+)\\s*",Xn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Dg=/^#([0-9a-f]{3,8})$/,Ag=new RegExp(`^rgb\\(${wn},${wn},${wn}\\)$`),Tg=new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`),Og=new RegExp(`^rgba\\(${wn},${wn},${wn},${Xn}\\)$`),$g=new RegExp(`^rgba\\(${pt},${pt},${pt},${Xn}\\)$`),Lg=new RegExp(`^hsl\\(${Xn},${pt},${pt}\\)$`),Hg=new RegExp(`^hsla\\(${Xn},${pt},${pt},${Xn}\\)$`),ms={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Sn(Tt,Nt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:gs,formatHex:gs,formatHex8:Bg,formatHsl:Wg,formatRgb:hs,toString:hs});function gs(){return this.rgb().formatHex()}function Bg(){return this.rgb().formatHex8()}function Wg(){return Ns(this).formatHsl()}function hs(){return this.rgb().formatRgb()}function Nt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Dg.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?bs(t):n===3?new Oe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Io(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Io(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ag.exec(e))?new Oe(t[1],t[2],t[3],1):(t=Tg.exec(e))?new Oe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Og.exec(e))?Io(t[1],t[2],t[3],t[4]):(t=$g.exec(e))?Io(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Lg.exec(e))?ws(t[1],t[2]/100,t[3]/100,1):(t=Hg.exec(e))?ws(t[1],t[2]/100,t[3]/100,t[4]):ms.hasOwnProperty(e)?bs(ms[e]):e==="transparent"?new Oe(NaN,NaN,NaN,0):null}function bs(e){return new Oe(e>>16&255,e>>8&255,e&255,1)}function Io(e,t,n,o){return o<=0&&(e=t=n=NaN),new Oe(e,t,n,o)}function ci(e){return e instanceof Tt||(e=Nt(e)),e?(e=e.rgb(),new Oe(e.r,e.g,e.b,e.opacity)):new Oe}function Un(e,t,n,o){return arguments.length===1?ci(e):new Oe(e,t,n,o??1)}function Oe(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Sn(Oe,Un,qn(Tt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?nn:Math.pow(nn,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Oe(en(this.r),en(this.g),en(this.b),zo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ys,formatHex:ys,formatHex8:Fg,formatRgb:xs,toString:xs}));function ys(){return`#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}`}function Fg(){return`#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}${Jt((isNaN(this.opacity)?1:this.opacity)*255)}`}function xs(){let e=zo(this.opacity);return`${e===1?"rgb(":"rgba("}${en(this.r)}, ${en(this.g)}, ${en(this.b)}${e===1?")":`, ${e})`}`}function zo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function en(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Jt(e){return e=en(e),(e<16?"0":"")+e.toString(16)}function ws(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new st(e,t,n,o)}function Ns(e){if(e instanceof st)return new st(e.h,e.s,e.l,e.opacity);if(e instanceof Tt||(e=Nt(e)),!e)return new st;if(e instanceof st)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,c=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+r:2-i-r,a*=60):s=c>0&&c<1?0:a,new st(a,s,c,e.opacity)}function Do(e,t,n,o){return arguments.length===1?Ns(e):new st(e,t,n,o??1)}function st(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Sn(st,Do,qn(Tt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new st(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?nn:Math.pow(nn,e),new st(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Oe(ri(e>=240?e-240:e+120,r,o),ri(e,r,o),ri(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new st(vs(this.h),Po(this.s),Po(this.l),zo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=zo(this.opacity);return`${e===1?"hsl(":"hsla("}${vs(this.h)}, ${Po(this.s)*100}%, ${Po(this.l)*100}%${e===1?")":`, ${e})`}`}}));function vs(e){return e=(e||0)%360,e<0?e+360:e}function Po(e){return Math.max(0,Math.min(1,e||0))}function ri(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Es=Math.PI/180,_s=180/Math.PI,Ro=18,Ms=.96422,Is=1,Ps=.82521,zs=4/29,vn=6/29,Rs=3*vn*vn,Vg=vn*vn*vn;function Ds(e){if(e instanceof mt)return new mt(e.l,e.a,e.b,e.opacity);if(e instanceof Ct)return Ts(e);e instanceof Oe||(e=ci(e));var t=li(e.r),n=li(e.g),o=li(e.b),r=ii((.2225045*t+.7168786*n+.0606169*o)/Is),i,a;return t===n&&n===o?i=a=r:(i=ii((.4360747*t+.3850649*n+.1430804*o)/Ms),a=ii((.0139322*t+.0971045*n+.7141733*o)/Ps)),new mt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function As(e,t,n,o){return arguments.length===1?Ds(e):new mt(e,t,n,o??1)}function mt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Sn(mt,As,qn(Tt,{brighter(e){return new mt(this.l+Ro*(e??1),this.a,this.b,this.opacity)},darker(e){return new mt(this.l-Ro*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=Ms*ai(t),e=Is*ai(e),n=Ps*ai(n),new Oe(si(3.1338561*t-1.6168667*e-.4906146*n),si(-.9787684*t+1.9161415*e+.033454*n),si(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function ii(e){return e>Vg?Math.pow(e,1/3):e/Rs+zs}function ai(e){return e>vn?e*e*e:Rs*(e-zs)}function si(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function li(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Gg(e){if(e instanceof Ct)return new Ct(e.h,e.c,e.l,e.opacity);if(e instanceof mt||(e=Ds(e)),e.a===0&&e.b===0)return new Ct(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*_s;return new Ct(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Ao(e,t,n,o){return arguments.length===1?Gg(e):new Ct(e,t,n,o??1)}function Ct(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function Ts(e){if(isNaN(e.h))return new mt(e.l,0,0,e.opacity);var t=e.h*Es;return new mt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Sn(Ct,Ao,qn(Tt,{brighter(e){return new Ct(this.h,this.c,this.l+Ro*(e??1),this.opacity)},darker(e){return new Ct(this.h,this.c,this.l-Ro*(e??1),this.opacity)},rgb(){return Ts(this).rgb()}}));var Os=-.14861,ui=1.78277,di=-.29227,To=-.90649,Yn=1.97294,ks=Yn*To,Ss=Yn*ui,Cs=ui*di-To*Os;function Xg(e){if(e instanceof tn)return new tn(e.h,e.s,e.l,e.opacity);e instanceof Oe||(e=ci(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(Cs*o+ks*t-Ss*n)/(Cs+ks-Ss),i=o-r,a=(Yn*(n-r)-di*i)/To,s=Math.sqrt(a*a+i*i)/(Yn*r*(1-r)),c=s?Math.atan2(a,i)*_s-120:NaN;return new tn(c<0?c+360:c,s,r,e.opacity)}function Oo(e,t,n,o){return arguments.length===1?Xg(e):new tn(e,t,n,o??1)}function tn(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Sn(tn,Oo,qn(Tt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new tn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?nn:Math.pow(nn,e),new tn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*Es,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Oe(255*(t+n*(Os*o+ui*r)),255*(t+n*(di*o+To*r)),255*(t+n*(Yn*o)),this.opacity)}}));function Hs(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function Yg(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return Hs((n-o/t)*t,a,r,i,s)}}function qg(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return Hs((n-o/t)*t,r,i,a,s)}}var Lo=e=>()=>e;function Bs(e,t){return function(n){return e+n*t}}function Ug(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function gi(e,t){var n=t-e;return n?Bs(e,n>180||n<-180?n-360*Math.round(n/360):n):Lo(isNaN(e)?t:e)}function Zg(e){return(e=+e)==1?Ye:function(t,n){return n-t?Ug(t,n,e):Lo(isNaN(t)?n:t)}}function Ye(e,t){var n=t-e;return n?Bs(e,n):Lo(isNaN(e)?t:e)}var Zn=(function e(t){var n=Zg(t);function o(r,i){var a=n((r=Un(r)).r,(i=Un(i)).r),s=n(r.g,i.g),c=n(r.b,i.b),u=Ye(r.opacity,i.opacity);return function(l){return r.r=a(l),r.g=s(l),r.b=c(l),r.opacity=u(l),r+""}}return o.gamma=e,o})(1);function Ws(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=Un(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(c){return s.r=o(c),s.g=r(c),s.b=i(c),s+""}}}var ov=Ws(Yg),rv=Ws(qg);function Kg(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function jg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qg(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=Cn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function Jg(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function lt(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function eh(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Cn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var pi=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,fi=new RegExp(pi.source,"g");function th(e){return function(){return e}}function nh(e){return function(t){return e(t)+""}}function hi(e,t){var n=pi.lastIndex=fi.lastIndex=0,o,r,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(o=pi.exec(e))&&(r=fi.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:lt(o,r)})),n=fi.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?nh(c[0].x):th(t):(t=c.length,function(u){for(var l=0,d;l<t;++l)s[(d=c[l]).i]=d.x(u);return s.join("")})}function Cn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Lo(t):(n==="number"?lt:n==="string"?(o=Nt(t))?(t=o,Zn):hi:t instanceof Nt?Zn:t instanceof Date?Jg:jg(t)?Kg:Array.isArray(t)?Qg:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?eh:lt)(e,t)}var $s=180/Math.PI,mi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Fs(e,t,n,o,r,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,c/=s),e*o<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*$s,skewX:Math.atan(c)*$s,scaleX:a,scaleY:s}}var $o;function oh(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?mi:Fs(t.a,t.b,t.c,t.d,t.e,t.f)}function rh(e){return e==null||($o||($o=document.createElementNS("http://www.w3.org/2000/svg","g")),$o.setAttribute("transform",e),!(e=$o.transform.baseVal.consolidate()))?mi:(e=e.matrix,Fs(e.a,e.b,e.c,e.d,e.e,e.f))}function Vs(e,t,n,o){function r(u){return u.length?u.pop()+" ":""}function i(u,l,d,f,m,p){if(u!==d||l!==f){var x=m.push("translate(",null,t,null,n);p.push({i:x-4,x:lt(u,d)},{i:x-2,x:lt(l,f)})}else(d||f)&&m.push("translate("+d+t+f+n)}function a(u,l,d,f){u!==l?(u-l>180?l+=360:l-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:lt(u,l)})):l&&d.push(r(d)+"rotate("+l+o)}function s(u,l,d,f){u!==l?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:lt(u,l)}):l&&d.push(r(d)+"skewX("+l+o)}function c(u,l,d,f,m,p){if(u!==d||l!==f){var x=m.push(r(m)+"scale(",null,",",null,")");p.push({i:x-4,x:lt(u,d)},{i:x-2,x:lt(l,f)})}else(d!==1||f!==1)&&m.push(r(m)+"scale("+d+","+f+")")}return function(u,l){var d=[],f=[];return u=e(u),l=e(l),i(u.translateX,u.translateY,l.translateX,l.translateY,d,f),a(u.rotate,l.rotate,d,f),s(u.skewX,l.skewX,d,f),c(u.scaleX,u.scaleY,l.scaleX,l.scaleY,d,f),u=l=null,function(m){for(var p=-1,x=f.length,b;++p<x;)d[(b=f[p]).i]=b.x(m);return d.join("")}}}var Gs=Vs(oh,"px, ","px)","deg)"),Xs=Vs(rh,", ",")",")"),ih=1e-12;function Ls(e){return((e=Math.exp(e))+1/e)/2}function ah(e){return((e=Math.exp(e))-1/e)/2}function sh(e){return((e=Math.exp(2*e))-1)/(e+1)}var Nn=(function e(t,n,o){function r(i,a){var s=i[0],c=i[1],u=i[2],l=a[0],d=a[1],f=a[2],m=l-s,p=d-c,x=m*m+p*p,b,g;if(x<ih)g=Math.log(f/u)/t,b=function(v){return[s+v*m,c+v*p,u*Math.exp(t*v*g)]};else{var k=Math.sqrt(x),h=(f*f-u*u+o*x)/(2*u*n*k),w=(f*f-u*u-o*x)/(2*f*n*k),S=Math.log(Math.sqrt(h*h+1)-h),C=Math.log(Math.sqrt(w*w+1)-w);g=(C-S)/t,b=function(v){var E=v*g,P=Ls(S),B=u/(n*k)*(P*sh(t*E+S)-ah(S));return[s+B*m,c+B*p,u*P/Ls(t*E+S)]}}return b.duration=Math.abs(g)*1e3*t/Math.SQRT2,b}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},r})(Math.SQRT2,2,4);function Ys(e){return function(t,n){var o=e((t=Do(t)).h,(n=Do(n)).h),r=Ye(t.s,n.s),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var iv=Ys(gi),av=Ys(Ye);function qs(e){return function(t,n){var o=e((t=Ao(t)).h,(n=Ao(n)).h),r=Ye(t.c,n.c),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var sv=qs(gi),lv=qs(Ye);function Us(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Oo(r)).h,(i=Oo(i)).h),s=Ye(r.s,i.s),c=Ye(r.l,i.l),u=Ye(r.opacity,i.opacity);return function(l){return r.h=a(l),r.s=s(l),r.l=c(Math.pow(l,n)),r.opacity=u(l),r+""}}return o.gamma=t,o})(1)}var cv=Us(gi),uv=Us(Ye);var En=0,jn=0,Kn=0,Ks=1e3,Ho,Qn,Bo=0,on=0,Fo=0,Jn=typeof performance=="object"&&performance.now?performance:Date,js=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Vo(){return on||(js(lh),on=Jn.now()+Fo)}function lh(){on=0}function Wo(){this._call=this._time=this._next=null}Wo.prototype=yi.prototype={constructor:Wo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Vo():+n)+(t==null?0:+t),!this._next&&Qn!==this&&(Qn?Qn._next=this:Ho=this,Qn=this),this._call=e,this._time=n,bi()},stop:function(){this._call&&(this._call=null,this._time=1/0,bi())}};function yi(e,t,n){var o=new Wo;return o.restart(e,t,n),o}function ch(){Vo(),++En;for(var e=Ho,t;e;)(t=on-e._time)>=0&&e._call.call(void 0,t),e=e._next;--En}function Zs(){on=(Bo=Jn.now())+Fo,En=jn=0;try{ch()}finally{En=0,dh(),on=0}}function uh(){var e=Jn.now(),t=e-Bo;t>Ks&&(Fo-=t,Bo=e)}function dh(){for(var e,t=Ho,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ho=n);Qn=e,bi(o)}function bi(e){if(!En){jn&&(jn=clearTimeout(jn));var t=e-on;t>24?(e<1/0&&(jn=setTimeout(Zs,Math.ceil(e-Jn.now()-Fo)+1)),Kn&&(Kn=clearInterval(Kn))):(Kn||(Bo=Jn.now(),Kn=setInterval(uh,Ks)),En=1,js(Zs))}}function xi(e,t,n){var o=new Wo;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function Js(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var wi=3,pv=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(wi),mv=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(wi),gv=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(wi),fh=Math.PI,hv=fh/2;function Go(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Qs=4/11,bv=6/11,yv=8/11,xv=3/4,wv=9/11,vv=10/11,kv=15/16,Sv=21/22,Cv=63/64,Nv=1/Qs/Qs;var vi=1.70158,Ev=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(vi),_v=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(vi),Mv=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(vi),_n=2*Math.PI,ki=1,Si=.3,Iv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=_n);function r(i){return t*Go(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*_n)},r.period=function(i){return e(t,i)},r})(ki,Si),Pv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=_n);function r(i){return 1-t*Go(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*_n)},r.period=function(i){return e(t,i)},r})(ki,Si),zv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=_n);function r(i){return((i=i*2-1)<0?t*Go(-i)*Math.sin((o-i)/n):2-t*Go(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*_n)},r.period=function(i){return e(t,i)},r})(ki,Si);var ph=Kt("start","end","cancel","interrupt"),mh=[],nl=0,el=1,Ci=2,Xo=3,tl=4,Ni=5,Yo=6;function qo(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;gh(e,n,{name:t,index:o,group:r,on:ph,tween:mh,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:nl})}function Ei(e,t){var n=ct(e,t);if(n.state>nl)throw new Error("too late; already scheduled");return n}function gt(e,t){var n=ct(e,t);if(n.state>Xo)throw new Error("too late; already running");return n}function ct(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function gh(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=yi(i,0,n.time);function i(u){n.state=el,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var l,d,f,m;if(n.state!==el)return c();for(l in o)if(m=o[l],m.name===n.name){if(m.state===Xo)return xi(a);m.state===tl?(m.state=Yo,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete o[l]):+l<t&&(m.state=Yo,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete o[l])}if(xi(function(){n.state===Xo&&(n.state=tl,n.timer.restart(s,n.delay,n.time),s(u))}),n.state=Ci,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Ci){for(n.state=Xo,r=new Array(f=n.tween.length),l=0,d=-1;l<f;++l)(m=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=m);r.length=d+1}}function s(u){for(var l=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Ni,1),d=-1,f=r.length;++d<f;)r[d].call(e,l);n.state===Ni&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Yo,n.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function eo(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>Ci&&o.state<Ni,o.state=Yo,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function hh(e){return this.each(function(){eo(this,e)})}function bh(e,t){var n,o;return function(){var r=gt(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function yh(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=gt(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},c=0,u=r.length;c<u;++c)if(r[c].name===t){r[c]=s;break}c===u&&r.push(s)}i.tween=r}}function xh(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ct(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?bh:yh)(n,e,t))}function _i(e,t,n){var o=e._id;return e.each(function(){var r=gt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ct(r,o).value[t]}}function ol(e,t){var n;return(typeof t=="number"?lt:t instanceof Nt?Zn:(n=Nt(t))?(t=n,Zn):hi)(e,t)}function wh(e){return function(){this.removeAttribute(e)}}function vh(e){return function(){this.removeAttributeNS(e.space,e.local)}}function kh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function Sh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function Ch(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function Nh(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function Eh(e,t){var n=Vn(e),o=n==="transform"?Xs:ol;return this.attrTween(e,typeof t=="function"?(n.local?Nh:Ch)(n,o,_i(this,"attr."+e,t)):t==null?(n.local?vh:wh)(n):(n.local?Sh:kh)(n,o,t))}function _h(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Mh(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Ih(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Mh(e,i)),n}return r._value=t,r}function Ph(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&_h(e,i)),n}return r._value=t,r}function zh(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Vn(e);return this.tween(n,(o.local?Ih:Ph)(o,t))}function Rh(e,t){return function(){Ei(this,e).delay=+t.apply(this,arguments)}}function Dh(e,t){return t=+t,function(){Ei(this,e).delay=t}}function Ah(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Rh:Dh)(t,e)):ct(this.node(),t).delay}function Th(e,t){return function(){gt(this,e).duration=+t.apply(this,arguments)}}function Oh(e,t){return t=+t,function(){gt(this,e).duration=t}}function $h(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Th:Oh)(t,e)):ct(this.node(),t).duration}function Lh(e,t){if(typeof t!="function")throw new Error;return function(){gt(this,e).ease=t}}function Hh(e){var t=this._id;return arguments.length?this.each(Lh(t,e)):ct(this.node(),t).ease}function Bh(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;gt(this,e).ease=n}}function Wh(e){if(typeof e!="function")throw new Error;return this.each(Bh(this._id,e))}function Fh(e){typeof e!="function"&&(e=jr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new _t(o,this._parents,this._name,this._id)}function Vh(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var c=t[s],u=n[s],l=c.length,d=a[s]=new Array(l),f,m=0;m<l;++m)(f=c[m]||u[m])&&(d[m]=f);for(;s<o;++s)a[s]=t[s];return new _t(a,this._parents,this._name,this._id)}function Gh(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Xh(e,t,n){var o,r,i=Gh(t)?Ei:gt;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function Yh(e,t){var n=this._id;return arguments.length<2?ct(this.node(),n).on.on(e):this.each(Xh(n,e,t))}function qh(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Uh(){return this.on("end.remove",qh(this._id))}function Zh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=_o(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],c=s.length,u=i[a]=new Array(c),l,d,f=0;f<c;++f)(l=s[f])&&(d=e.call(l,l.__data__,f,s))&&("__data__"in l&&(d.__data__=l.__data__),u[f]=d,qo(u[f],t,n,f,u,ct(l,n)));return new _t(i,this._parents,t,n)}function Kh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Kr(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var c=o[s],u=c.length,l,d=0;d<u;++d)if(l=c[d]){for(var f=e.call(l,l.__data__,d,c),m,p=ct(l,n),x=0,b=f.length;x<b;++x)(m=f[x])&&qo(m,t,n,x,f,p);i.push(f),a.push(l)}return new _t(i,a,t,n)}var jh=Qt.prototype.constructor;function Qh(){return new jh(this._groups,this._parents)}function Jh(e,t){var n,o,r;return function(){var i=jt(this,e),a=(this.style.removeProperty(e),jt(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function rl(e){return function(){this.style.removeProperty(e)}}function eb(e,t,n){var o,r=n+"",i;return function(){var a=jt(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function tb(e,t,n){var o,r,i;return function(){var a=jt(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),jt(this,e))),a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s))}}function nb(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var c=gt(this,e),u=c.on,l=c.value[i]==null?s||(s=rl(t)):void 0;(u!==n||r!==l)&&(o=(n=u).copy()).on(a,r=l),c.on=o}}function ob(e,t,n){var o=(e+="")=="transform"?Gs:ol;return t==null?this.styleTween(e,Jh(e,o)).on("end.style."+e,rl(e)):typeof t=="function"?this.styleTween(e,tb(e,o,_i(this,"style."+e,t))).each(nb(this._id,e)):this.styleTween(e,eb(e,o,t),n).on("end.style."+e,null)}function rb(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function ib(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&rb(e,a,n)),o}return i._value=t,i}function ab(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,ib(e,t,n??""))}function sb(e){return function(){this.textContent=e}}function lb(e){return function(){var t=e(this);this.textContent=t??""}}function cb(e){return this.tween("text",typeof e=="function"?lb(_i(this,"text",e)):sb(e==null?"":e+""))}function ub(e){return function(t){this.textContent=e.call(this,t)}}function db(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&ub(r)),t}return o._value=e,o}function fb(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,db(e))}function pb(){for(var e=this._name,t=this._id,n=il(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)if(c=a[u]){var l=ct(c,t);qo(c,e,n,u,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new _t(o,this._parents,e,n)}function mb(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--r===0&&i()}};n.each(function(){var u=gt(this,o),l=u.on;l!==e&&(t=(e=l).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),u.on=t}),r===0&&i()})}var gb=0;function _t(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function hb(e){return Qt().transition(e)}function il(){return++gb}var Et=Qt.prototype;_t.prototype=hb.prototype={constructor:_t,select:Zh,selectAll:Kh,selectChild:Et.selectChild,selectChildren:Et.selectChildren,filter:Fh,merge:Vh,selection:Qh,transition:pb,call:Et.call,nodes:Et.nodes,node:Et.node,size:Et.size,empty:Et.empty,each:Et.each,on:Yh,attr:Eh,attrTween:zh,style:ob,styleTween:ab,text:cb,textTween:fb,remove:Uh,tween:xh,delay:Ah,duration:$h,ease:Hh,easeVarying:Wh,end:mb,[Symbol.iterator]:Et[Symbol.iterator]};var bb={time:null,delay:0,duration:250,ease:Js};function yb(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function xb(e){var t,n;e instanceof _t?(t=e._id,e=e._name):(t=il(),(n=bb).time=Vo(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&qo(c,e,t,u,a,n||yb(c,t));return new _t(o,this._parents,e,t)}Qt.prototype.interrupt=hh;Qt.prototype.transition=xb;var Uo=e=>()=>e;function wb(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Mt(e,t,n){this.k=e,this.x=t,this.y=n}Mt.prototype={constructor:Mt,scale:function(e){return e===1?this:new Mt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Mt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var no=new Mt(1,0,0);Ii.prototype=Mt.prototype;function Ii(e){for(;!e.__zoom;)if(!(e=e.parentNode))return no;return e.__zoom}function Mi(e){e.stopImmediatePropagation()}function to(e){e.preventDefault(),e.stopImmediatePropagation()}function vb(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function kb(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function al(){return this.__zoom||no}function Sb(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Cb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Nb(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Pi(){var e=vb,t=kb,n=Nb,o=Sb,r=Cb,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=Nn,u=Kt("start","zoom","end"),l,d,f,m=500,p=150,x=0,b=10;function g(y){y.property("__zoom",al).on("wheel.zoom",E,{passive:!1}).on("mousedown.zoom",P).on("dblclick.zoom",B).filter(r).on("touchstart.zoom",R).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",I).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(y,_,M,N){var z=y.selection?y.selection():y;z.property("__zoom",al),y!==z?S(y,_,M,N):z.interrupt().each(function(){C(this,arguments).event(N).start().zoom(null,typeof _=="function"?_.apply(this,arguments):_).end()})},g.scaleBy=function(y,_,M,N){g.scaleTo(y,function(){var z=this.__zoom.k,D=typeof _=="function"?_.apply(this,arguments):_;return z*D},M,N)},g.scaleTo=function(y,_,M,N){g.transform(y,function(){var z=t.apply(this,arguments),D=this.__zoom,H=M==null?w(z):typeof M=="function"?M.apply(this,arguments):M,F=D.invert(H),G=typeof _=="function"?_.apply(this,arguments):_;return n(h(k(D,G),H,F),z,a)},M,N)},g.translateBy=function(y,_,M,N){g.transform(y,function(){return n(this.__zoom.translate(typeof _=="function"?_.apply(this,arguments):_,typeof M=="function"?M.apply(this,arguments):M),t.apply(this,arguments),a)},null,N)},g.translateTo=function(y,_,M,N,z){g.transform(y,function(){var D=t.apply(this,arguments),H=this.__zoom,F=N==null?w(D):typeof N=="function"?N.apply(this,arguments):N;return n(no.translate(F[0],F[1]).scale(H.k).translate(typeof _=="function"?-_.apply(this,arguments):-_,typeof M=="function"?-M.apply(this,arguments):-M),D,a)},N,z)};function k(y,_){return _=Math.max(i[0],Math.min(i[1],_)),_===y.k?y:new Mt(_,y.x,y.y)}function h(y,_,M){var N=_[0]-M[0]*y.k,z=_[1]-M[1]*y.k;return N===y.x&&z===y.y?y:new Mt(y.k,N,z)}function w(y){return[(+y[0][0]+ +y[1][0])/2,(+y[0][1]+ +y[1][1])/2]}function S(y,_,M,N){y.on("start.zoom",function(){C(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(N).end()}).tween("zoom",function(){var z=this,D=arguments,H=C(z,D).event(N),F=t.apply(z,D),G=M==null?w(F):typeof M=="function"?M.apply(z,D):M,Y=Math.max(F[1][0]-F[0][0],F[1][1]-F[0][1]),q=z.__zoom,J=typeof _=="function"?_.apply(z,D):_,le=c(q.invert(G).concat(Y/q.k),J.invert(G).concat(Y/J.k));return function(W){if(W===1)W=J;else{var T=le(W),U=Y/T[2];W=new Mt(U,G[0]-T[0]*U,G[1]-T[1]*U)}H.zoom(null,W)}})}function C(y,_,M){return!M&&y.__zooming||new v(y,_)}function v(y,_){this.that=y,this.args=_,this.active=0,this.sourceEvent=null,this.extent=t.apply(y,_),this.taps=0}v.prototype={event:function(y){return y&&(this.sourceEvent=y),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(y,_){return this.mouse&&y!=="mouse"&&(this.mouse[1]=_.invert(this.mouse[0])),this.touch0&&y!=="touch"&&(this.touch0[1]=_.invert(this.touch0[0])),this.touch1&&y!=="touch"&&(this.touch1[1]=_.invert(this.touch1[0])),this.that.__zoom=_,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(y){var _=Le(this.that).datum();u.call(y,this.that,new wb(y,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),_)}};function E(y,..._){if(!e.apply(this,arguments))return;var M=C(this,_).event(y),N=this.__zoom,z=Math.max(i[0],Math.min(i[1],N.k*Math.pow(2,o.apply(this,arguments)))),D=Xe(y);if(M.wheel)(M.mouse[0][0]!==D[0]||M.mouse[0][1]!==D[1])&&(M.mouse[1]=N.invert(M.mouse[0]=D)),clearTimeout(M.wheel);else{if(N.k===z)return;M.mouse=[D,N.invert(D)],eo(this),M.start()}to(y),M.wheel=setTimeout(H,p),M.zoom("mouse",n(h(k(N,z),M.mouse[0],M.mouse[1]),M.extent,a));function H(){M.wheel=null,M.end()}}function P(y,..._){if(f||!e.apply(this,arguments))return;var M=y.currentTarget,N=C(this,_,!0).event(y),z=Le(y.view).on("mousemove.zoom",G,!0).on("mouseup.zoom",Y,!0),D=Xe(y,M),H=y.clientX,F=y.clientY;ti(y.view),Mi(y),N.mouse=[D,this.__zoom.invert(D)],eo(this),N.start();function G(q){if(to(q),!N.moved){var J=q.clientX-H,le=q.clientY-F;N.moved=J*J+le*le>x}N.event(q).zoom("mouse",n(h(N.that.__zoom,N.mouse[0]=Xe(q,M),N.mouse[1]),N.extent,a))}function Y(q){z.on("mousemove.zoom mouseup.zoom",null),ni(q.view,N.moved),to(q),N.event(q).end()}}function B(y,..._){if(e.apply(this,arguments)){var M=this.__zoom,N=Xe(y.changedTouches?y.changedTouches[0]:y,this),z=M.invert(N),D=M.k*(y.shiftKey?.5:2),H=n(h(k(M,D),N,z),t.apply(this,_),a);to(y),s>0?Le(this).transition().duration(s).call(S,H,N,y):Le(this).call(g.transform,H,N,y)}}function R(y,..._){if(e.apply(this,arguments)){var M=y.touches,N=M.length,z=C(this,_,y.changedTouches.length===N).event(y),D,H,F,G;for(Mi(y),H=0;H<N;++H)F=M[H],G=Xe(F,this),G=[G,this.__zoom.invert(G),F.identifier],z.touch0?!z.touch1&&z.touch0[2]!==G[2]&&(z.touch1=G,z.taps=0):(z.touch0=G,D=!0,z.taps=1+!!l);l&&(l=clearTimeout(l)),D&&(z.taps<2&&(d=G[0],l=setTimeout(function(){l=null},m)),eo(this),z.start())}}function A(y,..._){if(this.__zooming){var M=C(this,_).event(y),N=y.changedTouches,z=N.length,D,H,F,G;for(to(y),D=0;D<z;++D)H=N[D],F=Xe(H,this),M.touch0&&M.touch0[2]===H.identifier?M.touch0[0]=F:M.touch1&&M.touch1[2]===H.identifier&&(M.touch1[0]=F);if(H=M.that.__zoom,M.touch1){var Y=M.touch0[0],q=M.touch0[1],J=M.touch1[0],le=M.touch1[1],W=(W=J[0]-Y[0])*W+(W=J[1]-Y[1])*W,T=(T=le[0]-q[0])*T+(T=le[1]-q[1])*T;H=k(H,Math.sqrt(W/T)),F=[(Y[0]+J[0])/2,(Y[1]+J[1])/2],G=[(q[0]+le[0])/2,(q[1]+le[1])/2]}else if(M.touch0)F=M.touch0[0],G=M.touch0[1];else return;M.zoom("touch",n(h(H,F,G),M.extent,a))}}function I(y,..._){if(this.__zooming){var M=C(this,_).event(y),N=y.changedTouches,z=N.length,D,H;for(Mi(y),f&&clearTimeout(f),f=setTimeout(function(){f=null},m),D=0;D<z;++D)H=N[D],M.touch0&&M.touch0[2]===H.identifier?delete M.touch0:M.touch1&&M.touch1[2]===H.identifier&&delete M.touch1;if(M.touch1&&!M.touch0&&(M.touch0=M.touch1,delete M.touch1),M.touch0)M.touch0[1]=this.__zoom.invert(M.touch0[0]);else if(M.end(),M.taps===2&&(H=Xe(H,this),Math.hypot(d[0]-H[0],d[1]-H[1])<b)){var F=Le(this).on("dblclick.zoom");F&&F.apply(this,arguments)}}}return g.wheelDelta=function(y){return arguments.length?(o=typeof y=="function"?y:Uo(+y),g):o},g.filter=function(y){return arguments.length?(e=typeof y=="function"?y:Uo(!!y),g):e},g.touchable=function(y){return arguments.length?(r=typeof y=="function"?y:Uo(!!y),g):r},g.extent=function(y){return arguments.length?(t=typeof y=="function"?y:Uo([[+y[0][0],+y[0][1]],[+y[1][0],+y[1][1]]]),g):t},g.scaleExtent=function(y){return arguments.length?(i[0]=+y[0],i[1]=+y[1],g):[i[0],i[1]]},g.translateExtent=function(y){return arguments.length?(a[0][0]=+y[0][0],a[1][0]=+y[1][0],a[0][1]=+y[0][1],a[1][1]=+y[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(y){return arguments.length?(n=y,g):n},g.duration=function(y){return arguments.length?(s=+y,g):s},g.interpolate=function(y){return arguments.length?(c=y,g):c},g.on=function(){var y=u.on.apply(u,arguments);return y===u?g:y},g.clickDistance=function(y){return arguments.length?(x=(y=+y)*y,g):Math.sqrt(x)},g.tapDistance=function(y){return arguments.length?(b=+y,g):b},g}var Qe={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Rn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Ti=["Enter"," ","Escape"],Oi={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Lt;(function(e){e.Strict="strict",e.Loose="loose"})(Lt||(Lt={}));var It;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(It||(It={}));var rn;(function(e){e.Partial="partial",e.Full="full"})(rn||(rn={}));var $i={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},ht;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(ht||(ht={}));var Pn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Pn||(Pn={}));var te;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(te||(te={}));var sl={[te.Left]:te.Right,[te.Right]:te.Left,[te.Top]:te.Bottom,[te.Bottom]:te.Top};function Li(e){return e===null?null:e?"valid":"invalid"}var Hi=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,wl=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Bi=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var ro=(e,t=[0,0])=>{let{width:n,height:o}=ut(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},Wi=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):Bi(r)?r:t.nodeLookup.get(r.id));let s=a?jo(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return er(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return tr(n)},Dn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=er(n,jo(r)),o=!0)}),o?tr(n):{x:0,y:0,width:0,height:0}},Qo=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,c=(t.y-o)/r,u=t.width/r,l=t.height/r,d=[];for(let f of e.values()){let{measured:m,selectable:p=!0,hidden:x=!1}=f;if(a&&!p||x)continue;let b=m.width??f.width??f.initialWidth??0,g=m.height??f.height??f.initialHeight??0,{x:k,y:h}=f.internals.positionAbsolute,w=Nl(s,c,u,l,k,h,b,g),S=b*g,C=i&&w>0;(!f.internals.handleBounds||C||w>=S||f.dragging)&&d.push(f)}return d},vl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function Eb(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=ut(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function kl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=Eb(e,a),c=Dn(s),u=ao(c,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(u,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function Fi({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},l=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",Qe.error005());else{let m=s.measured.width,p=s.measured.height;m&&p&&(d=[[c,u],[c+m,u+p]])}else s&&ln(a.extent)&&(d=[[a.extent[0][0]+c,a.extent[0][1]+u],[a.extent[1][0]+c,a.extent[1][1]+u]]);let f=ln(d)?an(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",Qe.error015()),{position:{x:f.x-c+(a.measured.width??0)*l[0],y:f.y-u+(a.measured.height??0)*l[1]},positionAbsolute:f}}async function Sl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let m=i.has(f.id),p=!m&&f.parentId&&a.find(x=>x.id===f.parentId);(m||p)&&a.push(f)}let s=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),l=vl(a,c);for(let f of c)s.has(f.id)&&!l.find(p=>p.id===f.id)&&l.push(f);if(!r)return{edges:l,nodes:a};let d=await r({nodes:a,edges:l});return typeof d=="boolean"?d?{edges:l,nodes:a}:{edges:[],nodes:[]}:d}var zn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),an=(e={x:0,y:0},t,n)=>({x:zn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:zn(e.y,t[0][1],t[1][1]-(n?.height??0))});function Cl(e,t,n){let{width:o,height:r}=ut(n),{x:i,y:a}=n.internals.positionAbsolute;return an(e,[[i,a],[i+o,a+r]],t)}var ll=(e,t,n)=>e<t?zn(Math.abs(e-t),1,t)/t:e>n?-zn(Math.abs(e-n),1,t)/t:0,Jo=(e,t,n=15,o=40)=>{let r=ll(e.x,o,t.width-o)*n,i=ll(e.y,o,t.height-o)*n;return[r,i]},er=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Ai=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),tr=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),An=(e,t=[0,0])=>{let{x:n,y:o}=Bi(e)?e.internals.positionAbsolute:ro(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},jo=(e,t=[0,0])=>{let{x:n,y:o}=Bi(e)?e.internals.positionAbsolute:ro(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Vi=(e,t)=>tr(er(Ai(e),Ai(t))),Nl=(e,t,n,o,r,i,a,s)=>{let c=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),u=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(c*u)},io=(e,t)=>Nl(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Gi=e=>nt(e.width)&&nt(e.height)&&nt(e.x)&&nt(e.y),nt=e=>!isNaN(e)&&isFinite(e),Xi=(e,t)=>(n,o)=>{},Tn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),On=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?Tn(s,a):s},sn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function Mn(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function _b(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=Mn(e,n),r=Mn(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=Mn(e.top??e.y??0,n),r=Mn(e.bottom??e.y??0,n),i=Mn(e.left??e.x??0,t),a=Mn(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Mb(e,t,n,o,r,i){let{x:a,y:s}=sn(e,[t,n,o]),{x:c,y:u}=sn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),l=r-c,d=i-u;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(l),bottom:Math.floor(d)}}var ao=(e,t,n,o,r,i)=>{let a=_b(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,u=Math.min(s,c),l=zn(u,o,r),d=e.x+e.width/2,f=e.y+e.height/2,m=t/2-d*l,p=n/2-f*l,x=Mb(e,m,p,l,t,n),b={left:Math.min(x.left-a.left,0),top:Math.min(x.top-a.top,0),right:Math.min(x.right-a.right,0),bottom:Math.min(x.bottom-a.bottom,0)};return{x:m-b.left+b.right,y:p-b.top+b.bottom,zoom:l}},$n=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function ln(e){return e!=null&&e!=="parent"}function ut(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Yi(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function qi(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function Ui(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function El(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function _l(e){return{...Oi,...e||{}}}function oo(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=ot(e),s=On({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:c,y:u}=n?Tn(s,t):s;return{xSnapped:c,ySnapped:u,...s}}var nr=e=>({width:e.offsetWidth,height:e.offsetHeight}),Zi=e=>e?.getRootNode?.()||window?.document,Ib=["INPUT","SELECT","TEXTAREA"];function Ki(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Ib.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var ji=e=>"clientX"in e,ot=(e,t)=>{let n=ji(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},cl=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...nr(a)}})};function or({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+r*.375+a*.375+n*.125,u=t*.125+i*.375+s*.375+o*.125,l=Math.abs(c-e),d=Math.abs(u-t);return[c,u,l,d]}function Zo(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function ul({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case te.Left:return[t-Zo(t-o,i),n];case te.Right:return[t+Zo(o-t,i),n];case te.Top:return[t,n-Zo(n-r,i)];case te.Bottom:return[t,n+Zo(r-n,i)]}}function rr({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,curvature:a=.25}){let[s,c]=ul({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[u,l]=ul({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,m,p]=or({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:c,targetControlX:u,targetControlY:l});return[`M${e},${t} C${s},${c} ${u},${l} ${o},${r}`,d,f,m,p]}function Qi({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function Ml({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function Il({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=er(jo(e),jo(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return io(a,tr(i))>0}var Pb=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,zb=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),Pl=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Qe.error006()),t;let o=n.getEdgeId||Pb,r;return Hi(e)?r={...e}:r={...e,id:o(e)},zb(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function ir({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=Qi({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var dl={[te.Left]:{x:-1,y:0},[te.Right]:{x:1,y:0},[te.Top]:{x:0,y:-1},[te.Bottom]:{x:0,y:1}},Rb=({source:e,sourcePosition:t=te.Bottom,target:n})=>t===te.Left||t===te.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},fl=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Db({source:e,sourcePosition:t=te.Bottom,target:n,targetPosition:o=te.Top,center:r,offset:i,stepPosition:a}){let s=dl[t],c=dl[o],u={x:e.x+s.x*i,y:e.y+s.y*i},l={x:n.x+c.x*i,y:n.y+c.y*i},d=Rb({source:u,sourcePosition:t,target:l}),f=d.x!==0?"x":"y",m=d[f],p=[],x,b,g={x:0,y:0},k={x:0,y:0},[,,h,w]=Qi({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f==="x"?(x=r.x??u.x+(l.x-u.x)*a,b=r.y??(u.y+l.y)/2):(x=r.x??(u.x+l.x)/2,b=r.y??u.y+(l.y-u.y)*a);let E=[{x,y:u.y},{x,y:l.y}],P=[{x:u.x,y:b},{x:l.x,y:b}];s[f]===m?p=f==="x"?E:P:p=f==="x"?P:E}else{let E=[{x:u.x,y:l.y}],P=[{x:l.x,y:u.y}];if(f==="x"?p=s.x===m?P:E:p=s.y===m?E:P,t===o){let y=Math.abs(e[f]-n[f]);if(y<=i){let _=Math.min(i-1,i-y);s[f]===m?g[f]=(u[f]>e[f]?-1:1)*_:k[f]=(l[f]>n[f]?-1:1)*_}}if(t!==o){let y=f==="x"?"y":"x",_=s[f]===c[y],M=u[y]>l[y],N=u[y]<l[y];(s[f]===1&&(!_&&M||_&&N)||s[f]!==1&&(!_&&N||_&&M))&&(p=f==="x"?E:P)}let B={x:u.x+g.x,y:u.y+g.y},R={x:l.x+k.x,y:l.y+k.y},A=Math.max(Math.abs(B.x-p[0].x),Math.abs(R.x-p[0].x)),I=Math.max(Math.abs(B.y-p[0].y),Math.abs(R.y-p[0].y));A>=I?(x=(B.x+R.x)/2,b=p[0].y):(x=p[0].x,b=(B.y+R.y)/2)}let S={x:u.x+g.x,y:u.y+g.y},C={x:l.x+k.x,y:l.y+k.y};return[[e,...S.x!==p[0].x||S.y!==p[0].y?[S]:[],...p,...C.x!==p[p.length-1].x||C.y!==p[p.length-1].y?[C]:[],n],x,b,h,w]}function Ab(e,t,n,o){let r=Math.min(fl(e,t)/2,fl(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let u=e.x<n.x?-1:1,l=e.y<n.y?1:-1;return`L ${i+r*u},${a}Q ${i},${a} ${i},${a+r*l}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+r*c}Q ${i},${a} ${i+r*s},${a}`}function so({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,borderRadius:a=5,centerX:s,centerY:c,offset:u=20,stepPosition:l=.5}){let[d,f,m,p,x]=Db({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:c},offset:u,stepPosition:l}),b=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)b+=Ab(d[g-1],d[g],d[g+1],a);return b+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[b,f,m,p,x]}function pl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function zl(e){let{sourceNode:t,targetNode:n}=e;if(!pl(t)||!pl(n))return null;let o=t.internals.handleBounds||ml(t.handles),r=n.internals.handleBounds||ml(n.handles),i=gl(o?.source??[],e.sourceHandle),a=gl(e.connectionMode===Lt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",Qe.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||te.Bottom,c=a?.position||te.Top,u=Ht(t,i,s),l=Ht(n,a,c);return{sourceX:u.x,sourceY:u.y,targetX:l.x,targetY:l.y,sourcePosition:s,targetPosition:c}}function ml(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function Ht(e,t,n=te.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??ut(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case te.Top:return{x:r+a/2,y:i};case te.Right:return{x:r+a,y:i+s/2};case te.Bottom:return{x:r+a/2,y:i+s};case te.Left:return{x:r,y:i+s/2}}}function gl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function ar(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Rl(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let u=ar(c,t);i.has(u)||(a.push({id:u,color:c.color||n,...c}),i.add(u))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var Dl=1e3,Tb=10,Ji={nodeOrigin:[0,0],nodeExtent:Rn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},Ob={...Ji,checkEquality:!0};function ea(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function Al(e,t,n){let o=ea(Ji,n);for(let r of e.values())if(r.parentId)na(r,e,t,o);else{let i=ro(r,o.nodeOrigin),a=ln(r.extent)?r.extent:o.nodeExtent,s=an(i,a,ut(r));r.internals.positionAbsolute=s}}function $b(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function ta(e){return e==="manual"}function sr(e,t,n,o={}){let r=ea(Ob,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!ta(r.zIndexMode)?Dl:0,c=e.length>0,u=!1;t.clear(),n.clear();for(let l of e){let d=a.get(l.id);if(r.checkEquality&&l===d?.internals.userNode)t.set(l.id,d);else{let f=ro(l,r.nodeOrigin),m=ln(l.extent)?l.extent:r.nodeExtent,p=an(f,m,ut(l));d={...r.defaults,...l,measured:{width:l.measured?.width,height:l.measured?.height},internals:{positionAbsolute:p,handleBounds:$b(l,d),z:Tl(l,s,r.zIndexMode),userNode:l}},t.set(l.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),l.parentId&&na(d,t,n,o,i),u||=l.selected??!1}return{nodesInitialized:c,hasSelectedNodes:u}}function Lb(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function na(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=ea(Ji,o),u=e.parentId,l=t.get(u);if(!l){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Lb(e,n),r&&!l.parentId&&l.internals.rootParentIndex===void 0&&c==="auto"&&(l.internals.rootParentIndex=++r.i,l.internals.z=l.internals.z+r.i*Tb),r&&l.internals.rootParentIndex!==void 0&&(r.i=l.internals.rootParentIndex);let d=i&&!ta(c)?Dl:0,{x:f,y:m,z:p}=Hb(e,l,a,s,d,c),{positionAbsolute:x}=e.internals,b=f!==x.x||m!==x.y;(b||p!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:b?{x:f,y:m}:x,z:p}})}function Tl(e,t,n){let o=nt(e.zIndex)?e.zIndex:0;return ta(n)?o:o+(e.selected?t:0)}function Hb(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,c=ut(e),u=ro(e,n),l=ln(e.extent)?an(u,e.extent,c):u,d=an({x:a+l.x,y:s+l.y},o,c);e.extent==="parent"&&(d=Cl(d,c,t));let f=Tl(e,r,i),m=t.internals.z??0;return{x:d.x,y:d.y,z:m>=f?m+1:f}}function lr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??An(s),u=Vi(c,a.rect);i.set(a.parentId,{expandedRect:u,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let u=s.internals.positionAbsolute,l=ut(s),d=s.origin??o,f=a.x<u.x?Math.round(Math.abs(u.x-a.x)):0,m=a.y<u.y?Math.round(Math.abs(u.y-a.y)):0,p=Math.max(l.width,Math.round(a.width)),x=Math.max(l.height,Math.round(a.height)),b=(p-l.width)*d[0],g=(x-l.height)*d[1];(f>0||m>0||b||g)&&(r.push({id:c,type:"position",position:{x:s.position.x-f+b,y:s.position.y-m+g}}),n.get(c)?.forEach(k=>{e.some(h=>h.id===k.id)||r.push({id:k.id,type:"position",position:{x:k.position.x+f,y:k.position.y+m}})})),(l.width<a.width||l.height<a.height||f||m)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:p+(f?d[0]*f-b:0),height:x+(m?d[1]*m-g:0)}})}),r}function Ol(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let u=[],l=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(l.transform),f=[];for(let m of e.values()){let p=t.get(m.id);if(!p)continue;if(p.hidden){t.set(p.id,{...p,internals:{...p.internals,handleBounds:void 0}}),c=!0;continue}let x=nr(m.nodeElement),b=p.measured.width!==x.width||p.measured.height!==x.height;if(!!(x.width&&x.height&&(b||!p.internals.handleBounds||m.force))){let k=m.nodeElement.getBoundingClientRect(),h=ln(p.extent)?p.extent:i,{positionAbsolute:w}=p.internals;if(p.parentId&&p.extent==="parent"){let C=t.get(p.parentId);C&&(w=Cl(w,x,C))}else h&&(w=an(w,h,x));let S={...p,measured:x,internals:{...p.internals,positionAbsolute:w,handleBounds:{source:cl("source",m.nodeElement,k,d,p.id),target:cl("target",m.nodeElement,k,d,p.id)}}};t.set(p.id,S),p.parentId&&na(S,t,n,{nodeOrigin:r,zIndexMode:a}),c=!0,b&&(u.push({id:p.id,type:"dimensions",dimensions:x}),p.expandParent&&p.parentId&&f.push({id:p.id,parentId:p.parentId,rect:An(S,r)}))}}if(f.length>0){let m=lr(f,t,n,r);u.push(...m)}return{changes:u,updatedInternals:c}}async function $l({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function hl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let c=o.get(a)||new Map;if(o.set(a,c.set(n,t)),i){a=`${r}-${e}-${i}`;let u=o.get(a)||new Map;o.set(a,u.set(n,t))}}function oa(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},u=`${r}-${a}--${i}-${s}`,l=`${i}-${s}--${r}-${a}`;hl("source",c,l,e,r,a),hl("target",c,u,e,i,s),t.set(o.id,o)}}function Ll(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Ll(n,t):!1}function bl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function Bb(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!Ll(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function zi({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&r.push({...c,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Wb({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=Tn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function Hl({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,c=!1,u={x:0,y:0},l=null,d=!1,f=null,m=!1,p=!1,x=null;function b({noDragClassName:k,handleSelector:h,domNode:w,isSelectable:S,nodeId:C,nodeClickDistance:v=0}){f=Le(w);function E({x:A,y:I}){let{nodeLookup:y,nodeExtent:_,snapGrid:M,snapToGrid:N,nodeOrigin:z,onNodeDrag:D,onSelectionDrag:H,onError:F,updateNodePositions:G}=t();i={x:A,y:I};let Y=!1,q=s.size>1,J=q&&_?Ai(Dn(s)):null,le=q&&N?Wb({dragItems:s,snapGrid:M,x:A,y:I}):null;for(let[W,T]of s){if(!y.has(W))continue;let U={x:A-T.distance.x,y:I-T.distance.y};N&&(U=le?{x:Math.round(U.x+le.x),y:Math.round(U.y+le.y)}:Tn(U,M));let ne=null;if(q&&_&&!T.extent&&J){let{positionAbsolute:V}=T.internals,ee=V.x-J.x+_[0][0],re=V.x+T.measured.width-J.x2+_[1][0],de=V.y-J.y+_[0][1],Se=V.y+T.measured.height-J.y2+_[1][1];ne=[[ee,de],[re,Se]]}let{position:oe,positionAbsolute:Q}=Fi({nodeId:W,nextPosition:U,nodeLookup:y,nodeExtent:ne||_,nodeOrigin:z,onError:F});Y=Y||T.position.x!==oe.x||T.position.y!==oe.y,T.position=oe,T.internals.positionAbsolute=Q}if(p=p||Y,!!Y&&(G(s,!0),x&&(o||D||!C&&H))){let[W,T]=zi({nodeId:C,dragItems:s,nodeLookup:y});o?.(x,s,W,T),D?.(x,W,T),C||H?.(x,T)}}async function P(){if(!l)return;let{transform:A,panBy:I,autoPanSpeed:y,autoPanOnNodeDrag:_}=t();if(!_){c=!1,cancelAnimationFrame(a);return}let[M,N]=Jo(u,l,y);(M!==0||N!==0)&&(i.x=(i.x??0)-M/A[2],i.y=(i.y??0)-N/A[2],await I({x:M,y:N})&&E(i)),a=requestAnimationFrame(P)}function B(A){let{nodeLookup:I,multiSelectionActive:y,nodesDraggable:_,transform:M,snapGrid:N,snapToGrid:z,selectNodesOnDrag:D,onNodeDragStart:H,onSelectionDragStart:F,unselectNodesAndEdges:G}=t();d=!0,(!D||!S)&&!y&&C&&(I.get(C)?.selected||G()),S&&D&&C&&e?.(C);let Y=oo(A.sourceEvent,{transform:M,snapGrid:N,snapToGrid:z,containerBounds:l});if(i=Y,s=Bb(I,_,Y,C),s.size>0&&(n||H||!C&&F)){let[q,J]=zi({nodeId:C,dragItems:s,nodeLookup:I});n?.(A.sourceEvent,s,q,J),H?.(A.sourceEvent,q,J),C||F?.(A.sourceEvent,J)}}let R=oi().clickDistance(v).on("start",A=>{let{domNode:I,nodeDragThreshold:y,transform:_,snapGrid:M,snapToGrid:N}=t();l=I?.getBoundingClientRect()||null,m=!1,p=!1,x=A.sourceEvent,y===0&&B(A),i=oo(A.sourceEvent,{transform:_,snapGrid:M,snapToGrid:N,containerBounds:l}),u=ot(A.sourceEvent,l)}).on("drag",A=>{let{autoPanOnNodeDrag:I,transform:y,snapGrid:_,snapToGrid:M,nodeDragThreshold:N,nodeLookup:z}=t(),D=oo(A.sourceEvent,{transform:y,snapGrid:_,snapToGrid:M,containerBounds:l});if(x=A.sourceEvent,(A.sourceEvent.type==="touchmove"&&A.sourceEvent.touches.length>1||C&&!z.has(C))&&(m=!0),!m){if(!c&&I&&d&&(c=!0,P()),!d){let H=ot(A.sourceEvent,l),F=H.x-u.x,G=H.y-u.y;Math.sqrt(F*F+G*G)>N&&B(A)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&s&&d&&(u=ot(A.sourceEvent,l),E(D))}}).on("end",A=>{if(!d||m){m&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:I,updateNodePositions:y,onNodeDragStop:_,onSelectionDragStop:M}=t();if(p&&(y(s,!1),p=!1),r||_||!C&&M){let[N,z]=zi({nodeId:C,dragItems:s,nodeLookup:I,dragging:!1});r?.(A.sourceEvent,s,N,z),_?.(A.sourceEvent,N,z),C||M?.(A.sourceEvent,z)}}}).filter(A=>{let I=A.target;return!A.button&&(!k||!bl(I,`.${k}`,w))&&(!h||bl(I,h,w))});f.call(R)}function g(){f?.on(".drag",null)}return{update:b,destroy:g}}function Fb(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())io(r,An(i))>0&&o.push(i);return o}var Vb=250;function Gb(e,t,n,o){let r=[],i=1/0,a=Fb(e,n,t+Vb);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of c){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:l,y:d}=Ht(s,u,u.position,!0),f=Math.sqrt(Math.pow(l-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...u,x:l,y:d}],i=f):f===i&&r.push({...u,x:l,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(c=>c.type===s)??r[0]}return r[0]}function Bl(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(u=>u.id===n):s?.[0])??null;return c&&i?{...c,...Ht(a,c,c.position,!0)}:c}function Wl(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Xb(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var Fl=()=>!0;function Yb(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:u,autoPanOnConnect:l,flowId:d,panBy:f,cancelConnection:m,onConnectStart:p,onConnect:x,onConnectEnd:b,isValidConnection:g=Fl,onReconnectEnd:k,updateConnection:h,getTransform:w,getFromHandle:S,autoPanSpeed:C,dragThreshold:v=1,handleDomNode:E}){let P=Zi(e.target),B=0,R,{x:A,y:I}=ot(e),y=Wl(i,E),_=s?.getBoundingClientRect(),M=!1;if(!_||!y)return;let N=Bl(r,y,o,c,t);if(!N)return;let z=ot(e,_),D=!1,H=null,F=!1,G=null;function Y(){if(!l||!_)return;let[oe,Q]=Jo(z,_,C);f({x:oe,y:Q}),B=requestAnimationFrame(Y)}let q={...N,nodeId:r,type:y,position:N.position},J=c.get(r),W={inProgress:!0,isValid:null,from:Ht(J,q,te.Left,!0),fromHandle:q,fromPosition:q.position,fromNode:J,to:z,toHandle:null,toPosition:sl[q.position],toNode:null,pointer:z};function T(){M=!0,h(W),p?.(e,{nodeId:r,handleId:o,handleType:y})}v===0&&T();function U(oe){if(!M){let{x:Se,y:it}=ot(oe),et=Se-A,fe=it-I;if(!(et*et+fe*fe>v*v))return;T()}if(!S()||!q){ne(oe);return}let Q=w();z=ot(oe,_),R=Gb(On(z,Q,!1,[1,1]),n,c,q),D||(Y(),D=!0);let V=Vl(oe,{handle:R,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:g,doc:P,lib:u,flowId:d,nodeLookup:c});G=V.handleDomNode,H=V.connection,F=Xb(!!R,V.isValid);let ee=c.get(r),re=ee?Ht(ee,q,te.Left,!0):W.from,de={...W,from:re,isValid:F,to:V.toHandle&&F?sn({x:V.toHandle.x,y:V.toHandle.y},Q):z,toHandle:V.toHandle,toPosition:F&&V.toHandle?V.toHandle.position:sl[q.position],toNode:V.toHandle?c.get(V.toHandle.nodeId):null,pointer:z};h(de),W=de}function ne(oe){if(!("touches"in oe&&oe.touches.length>0)){if(M){(R||G)&&H&&F&&x?.(H);let{inProgress:Q,...V}=W,ee={...V,toPosition:W.toHandle?W.toPosition:null};b?.(oe,ee),i&&k?.(oe,ee)}m(),cancelAnimationFrame(B),D=!1,F=!1,H=null,G=null,P.removeEventListener("mousemove",U),P.removeEventListener("mouseup",ne),P.removeEventListener("touchmove",U),P.removeEventListener("touchend",ne)}}P.addEventListener("mousemove",U),P.addEventListener("mouseup",ne),P.addEventListener("touchmove",U),P.addEventListener("touchend",ne)}function Vl(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:u=Fl,nodeLookup:l}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:m,y:p}=ot(e),x=a.elementFromPoint(m,p),b=x?.classList.contains(`${s}-flow__handle`)?x:f,g={handleDomNode:b,isValid:!1,connection:null,toHandle:null};if(b){let k=Wl(void 0,b),h=b.getAttribute("data-nodeid"),w=b.getAttribute("data-handleid"),S=b.classList.contains("connectable"),C=b.classList.contains("connectableend");if(!h||!k)return g;let v={source:d?h:o,sourceHandle:d?w:r,target:d?o:h,targetHandle:d?r:w};g.connection=v;let P=S&&C&&(n===Lt.Strict?d&&k==="source"||!d&&k==="target":h!==o||w!==r);g.isValid=P&&u(v),g.toHandle=Bl(h,k,w,l,n,!0)}return g}var cr={onPointerDown:Yb,isValid:Vl};function Gl({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=Le(e);function i({translateExtent:s,width:c,height:u,zoomStep:l=1,pannable:d=!0,zoomable:f=!0,inversePan:m=!1}){let p=h=>{if(h.sourceEvent.type!=="wheel"||!t)return;let w=n(),S=h.sourceEvent.ctrlKey&&$n()?10:1,C=-h.sourceEvent.deltaY*(h.sourceEvent.deltaMode===1?.05:h.sourceEvent.deltaMode?1:.002)*l,v=w[2]*Math.pow(2,C*S);t.scaleTo(v)},x=[0,0],b=h=>{(h.sourceEvent.type==="mousedown"||h.sourceEvent.type==="touchstart")&&(x=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY])},g=h=>{let w=n();if(h.sourceEvent.type!=="mousemove"&&h.sourceEvent.type!=="touchmove"||!t)return;let S=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY],C=[S[0]-x[0],S[1]-x[1]];x=S;let v=o()*Math.max(w[2],Math.log(w[2]))*(m?-1:1),E={x:w[0]-C[0]*v,y:w[1]-C[1]*v},P=[[0,0],[c,u]];t.setViewportConstrained({x:E.x,y:E.y,zoom:w[2]},P,s)},k=Pi().on("start",b).on("zoom",d?g:null).on("zoom.wheel",f?p:null);r.call(k,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Xe}}var ur=e=>({x:e.x,y:e.y,zoom:e.k}),Ri=({x:e,y:t,zoom:n})=>no.translate(e,t).scale(n),In=(e,t)=>e.target.closest(`.${t}`),Xl=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),qb=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Di=(e,t=0,n=qb,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},Yl=e=>{let t=e.ctrlKey&&$n()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Ub({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:u}){return l=>{if(In(l,t))return l.ctrlKey&&l.preventDefault(),!1;l.preventDefault(),l.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(l.ctrlKey&&a){let b=Xe(l),g=Yl(l),k=d*Math.pow(2,g);o.scaleTo(n,k,b,l);return}let f=l.deltaMode===1?20:1,m=r===It.Vertical?0:l.deltaX*f,p=r===It.Horizontal?0:l.deltaY*f;!$n()&&l.shiftKey&&r!==It.Vertical&&(m=l.deltaY*f,p=0),o.translateBy(n,-(m/d)*i,-(p/d)*i,{internal:!0});let x=ur(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(l,x):(e.isPanScrolling=!0,s?.(l,x)),e.panScrollTimeout=setTimeout(()=>{u?.(l,x),e.isPanScrolling=!1},150)}}function Zb({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=In(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function Kb({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=ur(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function jb({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&Xl(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,ur(i.transform))}}function Qb({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Xl(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=ur(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function Jb({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:u,connectionInProgress:l}){return d=>{let f=e||t,m=n&&d.ctrlKey,p=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(In(d,`${u}-flow__node`)||In(d,`${u}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||l&&!p||In(d,s)&&p||In(d,c)&&(!p||r&&p&&!e)||!n&&d.ctrlKey&&p)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!m&&p||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let x=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||p)&&x}}function ql({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},l=e.getBoundingClientRect(),d=[[0,0],[l.width,l.height]];(typeof ResizeObserver<"u"?new ResizeObserver(I=>{let y=I[0];y&&(d=[[0,0],[y.contentRect.width,y.contentRect.height]])}):null)?.observe(e);let m=Pi().extent(()=>d).scaleExtent([t,n]).translateExtent(o),p=Le(e).call(m);w({x:r.x,y:r.y,zoom:zn(r.zoom,t,n)},[[0,0],[l.width,l.height]],o);let x=p.on("wheel.zoom"),b=p.on("dblclick.zoom");m.wheelDelta(Yl);async function g(I,y){return p?new Promise(_=>{m?.interpolate(y?.interpolate==="linear"?Cn:Nn).transform(Di(p,y?.duration,y?.ease,()=>_(!0)),I)}):!1}function k({noWheelClassName:I,noPanClassName:y,onPaneContextMenu:_,userSelectionActive:M,panOnScroll:N,panOnDrag:z,panOnScrollMode:D,panOnScrollSpeed:H,preventScrolling:F,zoomOnPinch:G,zoomOnScroll:Y,zoomOnDoubleClick:q,zoomActivationKeyPressed:J,lib:le,onTransformChange:W,connectionInProgress:T,paneClickDistance:U,selectionOnDrag:ne}){M&&!u.isZoomingOrPanning&&h();let oe=N&&!J&&!M;m.clickDistance(ne?1/0:!nt(U)||U<0?0:U);let Q=oe?Ub({zoomPanValues:u,noWheelClassName:I,d3Selection:p,d3Zoom:m,panOnScrollMode:D,panOnScrollSpeed:H,zoomOnPinch:G,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):Zb({noWheelClassName:I,preventScrolling:F,d3ZoomHandler:x});p.on("wheel.zoom",Q,{passive:!1});let V=Kb({zoomPanValues:u,onDraggingChange:c,onPanZoomStart:a});m.on("start",V);let ee=jb({zoomPanValues:u,panOnDrag:z,onPaneContextMenu:!!_,onPanZoom:i,onTransformChange:W});m.on("zoom",ee);let re=Qb({zoomPanValues:u,panOnDrag:z,panOnScroll:N,onPaneContextMenu:_,onPanZoomEnd:s,onDraggingChange:c});m.on("end",re);let de=Jb({zoomActivationKeyPressed:J,panOnDrag:z,zoomOnScroll:Y,panOnScroll:N,zoomOnDoubleClick:q,zoomOnPinch:G,userSelectionActive:M,noPanClassName:y,noWheelClassName:I,lib:le,connectionInProgress:T});m.filter(de),q?p.on("dblclick.zoom",b):p.on("dblclick.zoom",null)}function h(){m.on("zoom",null)}async function w(I,y,_){let M=Ri(I),N=m?.constrain()(M,y,_);return N&&await g(N),N}async function S(I,y){let _=Ri(I);return await g(_,y),_}function C(I){if(p){let y=Ri(I),_=p.property("__zoom");(_.k!==I.zoom||_.x!==I.x||_.y!==I.y)&&m?.transform(p,y,null,{sync:!0})}}function v(){let I=p?Ii(p.node()):{x:0,y:0,k:1};return{x:I.x,y:I.y,zoom:I.k}}async function E(I,y){return p?new Promise(_=>{m?.interpolate(y?.interpolate==="linear"?Cn:Nn).scaleTo(Di(p,y?.duration,y?.ease,()=>_(!0)),I)}):!1}async function P(I,y){return p?new Promise(_=>{m?.interpolate(y?.interpolate==="linear"?Cn:Nn).scaleBy(Di(p,y?.duration,y?.ease,()=>_(!0)),I)}):!1}function B(I){m?.scaleExtent(I)}function R(I){m?.translateExtent(I)}function A(I){let y=!nt(I)||I<0?0:I;m?.clickDistance(y)}return{update:k,destroy:h,setViewport:S,setViewportConstrained:w,getViewport:v,scaleTo:E,scaleBy:P,setScaleExtent:B,setTranslateExtent:R,syncViewport:C,setClickDistance:A}}var Bt;(function(e){e.Line="line",e.Handle="handle"})(Bt||(Bt={}));function e0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function yl(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Ot(e,t){return Math.max(0,t-e)}function $t(e,t){return Math.max(0,e-t)}function Ko(e,t,n){return Math.max(0,t-e,e-n)}function xl(e,t){return e?!t:t}function t0(e,t,n,o,r,i,a,s){let{affectsX:c,affectsY:u}=t,{isHorizontal:l,isVertical:d}=t,f=l&&d,{xSnapped:m,ySnapped:p}=n,{minWidth:x,maxWidth:b,minHeight:g,maxHeight:k}=o,{x:h,y:w,width:S,height:C,aspectRatio:v}=e,E=Math.floor(l?m-e.pointerX:0),P=Math.floor(d?p-e.pointerY:0),B=S+(c?-E:E),R=C+(u?-P:P),A=-i[0]*S,I=-i[1]*C,y=Ko(B,x,b),_=Ko(R,g,k);if(a){let z=0,D=0;c&&E<0?z=Ot(h+E+A,a[0][0]):!c&&E>0&&(z=$t(h+B+A,a[1][0])),u&&P<0?D=Ot(w+P+I,a[0][1]):!u&&P>0&&(D=$t(w+R+I,a[1][1])),y=Math.max(y,z),_=Math.max(_,D)}if(s){let z=0,D=0;c&&E>0?z=$t(h+E,s[0][0]):!c&&E<0&&(z=Ot(h+B,s[1][0])),u&&P>0?D=$t(w+P,s[0][1]):!u&&P<0&&(D=Ot(w+R,s[1][1])),y=Math.max(y,z),_=Math.max(_,D)}if(r){if(l){let z=Ko(B/v,g,k)*v;if(y=Math.max(y,z),a){let D=0;!c&&!u||c&&!u&&f?D=$t(w+I+B/v,a[1][1])*v:D=Ot(w+I+(c?E:-E)/v,a[0][1])*v,y=Math.max(y,D)}if(s){let D=0;!c&&!u||c&&!u&&f?D=Ot(w+B/v,s[1][1])*v:D=$t(w+(c?E:-E)/v,s[0][1])*v,y=Math.max(y,D)}}if(d){let z=Ko(R*v,x,b)/v;if(_=Math.max(_,z),a){let D=0;!c&&!u||u&&!c&&f?D=$t(h+R*v+A,a[1][0])/v:D=Ot(h+(u?P:-P)*v+A,a[0][0])/v,_=Math.max(_,D)}if(s){let D=0;!c&&!u||u&&!c&&f?D=Ot(h+R*v,s[1][0])/v:D=$t(h+(u?P:-P)*v,s[0][0])/v,_=Math.max(_,D)}}}P=P+(P<0?_:-_),E=E+(E<0?y:-y),r&&(f?B>R*v?P=(xl(c,u)?-E:E)/v:E=(xl(c,u)?-P:P)*v:l?(P=E/v,u=c):(E=P*v,c=u));let M=c?h+E:h,N=u?w+P:w;return{width:S+(c?-E:E),height:C+(u?-P:P),x:i[0]*E*(c?-1:1)+M,y:i[1]*P*(u?-1:1)+N}}var Ul={width:0,height:0,x:0,y:0},n0={...Ul,pointerX:0,pointerY:0,aspectRatio:1};function o0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[o-s,r-c],[o+i-s,r+a-c]]}function Zl({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=Le(e),a={controlDirection:yl("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:l,keepAspectRatio:d,resizeDirection:f,onResizeStart:m,onResize:p,onResizeEnd:x,shouldResize:b}){let g={...Ul},k={...n0};a={boundaries:l,resizeDirection:f,keepAspectRatio:d,controlDirection:yl(u)};let h,w=null,S=[],C,v,E,P=!1,B=oi().on("start",R=>{let{nodeLookup:A,transform:I,snapGrid:y,snapToGrid:_,nodeOrigin:M,paneDomNode:N}=n();if(h=A.get(t),!h)return;w=N?.getBoundingClientRect()??null;let{xSnapped:z,ySnapped:D}=oo(R.sourceEvent,{transform:I,snapGrid:y,snapToGrid:_,containerBounds:w});g={width:h.measured.width??0,height:h.measured.height??0,x:h.position.x??0,y:h.position.y??0},k={...g,pointerX:z,pointerY:D,aspectRatio:g.width/g.height},C=void 0,v=ln(h.extent)?h.extent:void 0,h.parentId&&(h.extent==="parent"||h.expandParent)&&(C=A.get(h.parentId)),C&&h.extent==="parent"&&(v=[[0,0],[C.measured.width,C.measured.height]]),S=[],E=void 0;for(let[H,F]of A)if(F.parentId===t&&(S.push({id:H,position:{...F.position},extent:F.extent}),F.extent==="parent"||F.expandParent)){let G=o0(F,h,F.origin??M);E?E=[[Math.min(G[0][0],E[0][0]),Math.min(G[0][1],E[0][1])],[Math.max(G[1][0],E[1][0]),Math.max(G[1][1],E[1][1])]]:E=G}m?.(R,{...g})}).on("drag",R=>{let{transform:A,snapGrid:I,snapToGrid:y,nodeOrigin:_}=n(),M=oo(R.sourceEvent,{transform:A,snapGrid:I,snapToGrid:y,containerBounds:w}),N=[];if(!h)return;let{x:z,y:D,width:H,height:F}=g,G={},Y=h.origin??_,{width:q,height:J,x:le,y:W}=t0(k,a.controlDirection,M,a.boundaries,a.keepAspectRatio,Y,v,E),T=q!==H,U=J!==F,ne=le!==z&&T,oe=W!==D&&U;if(!ne&&!oe&&!T&&!U)return;if((ne||oe||Y[0]===1||Y[1]===1)&&(G.x=ne?le:g.x,G.y=oe?W:g.y,g.x=G.x,g.y=G.y,S.length>0)){let re=le-z,de=W-D;for(let Se of S)Se.position={x:Se.position.x-re+Y[0]*(q-H),y:Se.position.y-de+Y[1]*(J-F)},N.push(Se)}if((T||U)&&(G.width=T&&(!a.resizeDirection||a.resizeDirection==="horizontal")?q:g.width,G.height=U&&(!a.resizeDirection||a.resizeDirection==="vertical")?J:g.height,g.width=G.width,g.height=G.height),C&&h.expandParent){let re=Y[0]*(G.width??0);G.x&&G.x<re&&(g.x=re,k.x=k.x-(G.x-re));let de=Y[1]*(G.height??0);G.y&&G.y<de&&(g.y=de,k.y=k.y-(G.y-de))}let Q=e0({width:g.width,prevWidth:H,height:g.height,prevHeight:F,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),V={...g,direction:Q};b?.(R,V)!==!1&&(P=!0,p?.(R,V),o(G,N))}).on("end",R=>{P&&(x?.(R,{...g}),r?.({...g}),P=!1)});i.call(B)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var lc=ts(require("react"),1),cc=ts(oc(),1);var ic={},rc=e=>{let t,n=new Set,o=(l,d)=>{let f=typeof l=="function"?l(t):l;if(!Object.is(f,t)){let m=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(p=>p(t,m))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>u,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(ic.env?ic.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(o,r,c);return c},ac=e=>e?rc(e):rc;var{useDebugValue:v0}=lc.default,{useSyncExternalStoreWithSelector:k0}=cc.default,S0=e=>e;function ia(e,t=S0,n){let o=k0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return v0(o),o}var sc=(e,t)=>{let n=ac(e),o=(r,i=t)=>ia(n,r,i);return Object.assign(o,n),o},uc=(e,t)=>e?sc(e,t):sc;function ke(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var C0=require("react-dom"),gr=(0,$.createContext)(null),N0=gr.Provider,$c=Qe.error001("react");function pe(e,t){let n=(0,$.useContext)(gr);if(n===null)throw new Error($c);return ia(n,e,t)}function xe(){let e=(0,$.useContext)(gr);if(e===null)throw new Error($c);return(0,$.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var dc={display:"none"},E0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Lc="react-flow__node-desc",Hc="react-flow__edge-desc",_0="react-flow__aria-live",M0=e=>e.ariaLiveMessage,I0=e=>e.ariaLabelConfig;function P0({rfId:e}){let t=pe(M0);return(0,L.jsx)("div",{id:`${_0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:E0,children:t})}function z0({rfId:e,disableKeyboardA11y:t}){let n=pe(I0);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{id:`${Lc}-${e}`,style:dc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,L.jsx)("div",{id:`${Hc}-${e}`,style:dc,children:n["edge.a11yDescription.default"]}),!t&&(0,L.jsx)(P0,{rfId:e})]})}var hr=(0,$.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,L.jsx)("div",{className:_e(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});hr.displayName="Panel";var fc="https://reactflow.dev?utm_source=attribution";function R0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,L.jsx)(hr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${fc}`,children:(0,L.jsx)("a",{href:fc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var D0=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},fr=e=>e.id;function A0(e,t){return ke(e.selectedNodes.map(fr),t.selectedNodes.map(fr))&&ke(e.selectedEdges.map(fr),t.selectedEdges.map(fr))}function T0({onSelectionChange:e}){let t=xe(),{selectedNodes:n,selectedEdges:o}=pe(D0,A0);return(0,$.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var O0=e=>!!e.onSelectionChangeHandlers;function $0({onSelectionChange:e}){let t=pe(O0);return e||t?(0,L.jsx)(T0,{onSelectionChange:e}):null}var Bc=[0,0],L0={x:0,y:0,zoom:1},H0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],pc=[...H0,"rfId"],B0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),mc={translateExtent:Rn,nodeOrigin:Bc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function W0(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=pe(B0,ke),u=xe();(0,$.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{l.current=mc,s()}),[]);let l=(0,$.useRef)(mc);return(0,$.useEffect)(()=>{for(let d of pc){let f=e[d],m=l.current[d];f!==m&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?u.setState({ariaLabelConfig:_l(f)}):d==="fitView"?u.setState({fitViewQueued:f}):d==="fitViewOptions"?u.setState({fitViewOptions:f}):u.setState({[d]:f})))}l.current=e},pc.map(d=>e[d])),null}function gc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function F0(e){let[t,n]=(0,$.useState)(e==="system"?null:e);return(0,$.useEffect)(()=>{if(e!=="system"){n(e);return}let o=gc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:gc()?.matches?"dark":"light"}var hc=typeof document<"u"?document:null;function lo(e=null,t={target:hc,actInsideInputWithModifier:!0}){let[n,o]=(0,$.useState)(!1),r=(0,$.useRef)(!1),i=(0,$.useRef)(new Set([])),[a,s]=(0,$.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),l=u.reduce((d,f)=>d.concat(...f),[]);return[u,l]}return[[],[]]},[e]);return(0,$.useEffect)(()=>{let c=t?.target??hc,u=t?.actInsideInputWithModifier??!0;if(e!==null){let l=m=>{if(r.current=m.ctrlKey||m.metaKey||m.shiftKey||m.altKey,(!r.current||r.current&&!u)&&Ki(m))return!1;let x=yc(m.code,s);if(i.current.add(m[x]),bc(a,i.current,!1)){let b=m.composedPath?.()?.[0]||m.target,g=b?.nodeName==="BUTTON"||b?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&m.preventDefault(),o(!0)}},d=m=>{let p=yc(m.code,s);bc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(m[p]),m.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",l),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",l),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function bc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function yc(e,t){return t.includes(e)?"code":"key"}var V0=()=>{let e=xe();return(0,$.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=ao(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),u={x:t.x-s,y:t.y-c},l=n.snapGrid??r,d=n.snapToGrid??i;return On(u,o,d,l)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=sn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function Wc(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)G0(c,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function G0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Fc(e,t){return Wc(e,t)}function Vc(e,t){return Wc(e,t)}function cn(e,t){return{id:e,type:"select",selected:t}}function Hn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(cn(i.id,a)))}return o}function xc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function wc(e){return{id:e.id,type:"remove"}}var X0=Xi("React Flow","https://reactflow.dev/");function Y0(e,t,n={}){return Pl(e,t,{...n,onError:n.onError??X0})}var vc=e=>wl(e),q0=e=>Hi(e);function Gc(e){return(0,$.forwardRef)(e)}var Xc=typeof window<"u"?$.useLayoutEffect:$.useEffect;function kc(e){let[t,n]=(0,$.useState)(BigInt(0)),[o]=(0,$.useState)(()=>U0(()=>n(r=>r+BigInt(1))));return Xc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function U0(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Yc=(0,$.createContext)(null);function Z0({children:e}){let t=xe(),n=(0,$.useCallback)(s=>{let{nodes:c=[],setNodes:u,hasDefaultNodes:l,onNodesChange:d,nodeLookup:f,fitViewQueued:m,onNodesChangeMiddlewareMap:p}=t.getState(),x=c;for(let g of s)x=typeof g=="function"?g(x):g;let b=xc({items:x,lookup:f});for(let g of p.values())b=g(b);l&&u(x),b.length>0?d?.(b):m&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:k,setNodes:h}=t.getState();g&&h(k)})},[]),o=kc(n),r=(0,$.useCallback)(s=>{let{edges:c=[],setEdges:u,hasDefaultEdges:l,onEdgesChange:d,edgeLookup:f}=t.getState(),m=c;for(let p of s)m=typeof p=="function"?p(m):p;l?u(m):d&&d(xc({items:m,lookup:f}))},[]),i=kc(r),a=(0,$.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,L.jsx)(Yc.Provider,{value:a,children:e})}function K0(){let e=(0,$.useContext)(Yc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var j0=e=>!!e.panZoom;function ca(){let e=V0(),t=xe(),n=K0(),o=pe(j0),r=(0,$.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:m}=t.getState(),p=vc(d)?d:f.get(d.id),x=p.parentId?qi(p.position,p.measured,p.parentId,f,m):p.position,b={...p,position:x,width:p.measured?.width??p.width,height:p.measured?.height??p.height};return An(b)},u=(d,f,m={replace:!1})=>{a(p=>p.map(x=>{if(x.id===d){let b=typeof f=="function"?f(x):f;return m.replace&&vc(b)?b:{...x,...b}}return x}))},l=(d,f,m={replace:!1})=>{s(p=>p.map(x=>{if(x.id===d){let b=typeof f=="function"?f(x):f;return m.replace&&q0(b)?b:{...x,...b}}return x}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(m=>[...m,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(m=>[...m,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:m}=t.getState(),[p,x,b]=m;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:p,y:x,zoom:b}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:m,edges:p,onNodesDelete:x,onEdgesDelete:b,triggerNodeChanges:g,triggerEdgeChanges:k,onDelete:h,onBeforeDelete:w}=t.getState(),{nodes:S,edges:C}=await Sl({nodesToRemove:d,edgesToRemove:f,nodes:m,edges:p,onBeforeDelete:w}),v=C.length>0,E=S.length>0;if(v){let P=C.map(wc);b?.(C),k(P)}if(E){let P=S.map(wc);x?.(S),g(P)}return(E||v)&&h?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(d,f=!0,m)=>{let p=Gi(d),x=p?d:c(d),b=m!==void 0;return x?(m||t.getState().nodes).filter(g=>{let k=t.getState().nodeLookup.get(g.id);if(k&&!p&&(g.id===d.id||!k.internals.positionAbsolute))return!1;let h=An(b?g:k),w=io(h,x);return f&&w>0||w>=h.width*h.height||w>=x.width*x.height}):[]},isNodeIntersecting:(d,f,m=!0)=>{let x=Gi(d)?d:c(d);if(!x)return!1;let b=io(x,f);return m&&b>0||b>=f.width*f.height||b>=x.width*x.height},updateNode:u,updateNodeData:(d,f,m={replace:!1})=>{u(d,p=>{let x=typeof f=="function"?f(p):f;return m.replace?{...p,data:x}:{...p,data:{...p.data,...x}}},m)},updateEdge:l,updateEdgeData:(d,f,m={replace:!1})=>{l(d,p=>{let x=typeof f=="function"?f(p):f;return m.replace?{...p,data:x}:{...p,data:{...p.data,...x}}},m)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:m}=t.getState();return Wi(d,{nodeLookup:f,nodeOrigin:m})},getHandleConnections:({type:d,id:f,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??El();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(m=>[...m]),f.promise}}},[]);return(0,$.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Sc=e=>e.selected,Q0=typeof window<"u"?window:void 0;function J0({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=xe(),{deleteElements:o}=ca(),r=lo(e,{actInsideInputWithModifier:!1}),i=lo(t,{target:Q0});(0,$.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(Sc),edges:a.filter(Sc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,$.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function ey(e){let t=xe();(0,$.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=nr(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Qe.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var br={position:"absolute",width:"100%",height:"100%",top:0,left:0},ty=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function ny({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=It.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:u,minZoom:l,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:m=!0,children:p,noWheelClassName:x,noPanClassName:b,onViewportChange:g,isControlledViewport:k,paneClickDistance:h,selectionOnDrag:w}){let S=xe(),C=(0,$.useRef)(null),{userSelectionActive:v,lib:E,connectionInProgress:P}=pe(ty,ke),B=lo(f),R=(0,$.useRef)();ey(C);let A=(0,$.useCallback)(I=>{g?.({x:I[0],y:I[1],zoom:I[2]}),k||S.setState({transform:I})},[g,k]);return(0,$.useEffect)(()=>{if(C.current){R.current=ql({domNode:C.current,minZoom:l,maxZoom:d,translateExtent:u,viewport:c,onDraggingChange:M=>S.setState(N=>N.paneDragging===M?N:{paneDragging:M}),onPanZoomStart:(M,N)=>{let{onViewportChangeStart:z,onMoveStart:D}=S.getState();D?.(M,N),z?.(N)},onPanZoom:(M,N)=>{let{onViewportChange:z,onMove:D}=S.getState();D?.(M,N),z?.(N)},onPanZoomEnd:(M,N)=>{let{onViewportChangeEnd:z,onMoveEnd:D}=S.getState();D?.(M,N),z?.(N)}});let{x:I,y,zoom:_}=R.current.getViewport();return S.setState({panZoom:R.current,transform:[I,y,_],domNode:C.current.closest(".react-flow")}),()=>{R.current?.destroy()}}},[]),(0,$.useEffect)(()=>{R.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:B,preventScrolling:m,noPanClassName:b,userSelectionActive:v,noWheelClassName:x,lib:E,onTransformChange:A,connectionInProgress:P,selectionOnDrag:w,paneClickDistance:h})},[e,t,n,o,r,i,a,s,B,m,b,v,x,E,A,P,w,h]),(0,L.jsx)("div",{className:"react-flow__renderer",ref:C,style:br,children:p})}var oy=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function ry(){let{userSelectionActive:e,userSelectionRect:t}=pe(oy,ke);return e&&t?(0,L.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var aa=(e,t)=>n=>{n.target===t.current&&e?.(n)},iy=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function ay({isSelecting:e,selectionKeyPressed:t,selectionMode:n=rn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:u,onPaneContextMenu:l,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:m,onPaneMouseLeave:p,children:x}){let b=(0,$.useRef)(0),g=xe(),{userSelectionActive:k,elementsSelectable:h,dragging:w,panBy:S,autoPanSpeed:C}=pe(iy,ke),v=h&&(e||k),E=(0,$.useRef)(null),P=(0,$.useRef)(),B=(0,$.useRef)(new Set),R=(0,$.useRef)(new Set),A=(0,$.useRef)(!1),I=(0,$.useRef)(!1),y=(0,$.useRef)({x:0,y:0}),_=(0,$.useRef)(!1),M=T=>{if(I.current||A.current||g.getState().connection.inProgress){I.current=!1,A.current=!1;return}u?.(T),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},N=T=>{if(Array.isArray(o)&&o?.includes(2)){T.preventDefault();return}l?.(T)},z=d?T=>d(T):void 0,D=T=>{I.current&&(T.stopPropagation(),I.current=!1)},H=T=>{let{domNode:U,transform:ne}=g.getState();if(P.current=U?.getBoundingClientRect(),!P.current)return;let oe=T.target===E.current;if(!oe&&!!T.target.closest(".nokey")||!e||!(a&&oe||t)||T.button!==0||!T.isPrimary)return;T.target?.setPointerCapture?.(T.pointerId),I.current=!1;let{x:ee,y:re}=ot(T.nativeEvent,P.current),de=On({x:ee,y:re},ne);g.setState({userSelectionRect:{width:0,height:0,startX:de.x,startY:de.y,x:ee,y:re}}),oe||(T.stopPropagation(),T.preventDefault())};function F(T,U){let{userSelectionRect:ne}=g.getState();if(!ne)return;let{transform:oe,nodeLookup:Q,edgeLookup:V,connectionLookup:ee,triggerNodeChanges:re,triggerEdgeChanges:de,defaultEdgeOptions:Se}=g.getState(),it={x:ne.startX,y:ne.startY},{x:et,y:fe}=sn(it,oe),at={startX:it.x,startY:it.y,x:T<et?T:et,y:U<fe?U:fe,width:Math.abs(T-et),height:Math.abs(U-fe)},Ut=B.current,Ze=R.current;B.current=new Set(Qo(Q,at,oe,n===rn.Partial,!0).map(Fe=>Fe.id)),R.current=new Set;let kt=Se?.selectable??!0;for(let Fe of B.current){let tt=ee.get(Fe);if(tt)for(let{edgeId:Ke}of tt.values()){let ft=V.get(Ke);ft&&(ft.selectable??kt)&&R.current.add(Ke)}}if(!Ui(Ut,B.current)){let Fe=Hn(Q,B.current,!0);re(Fe)}if(!Ui(Ze,R.current)){let Fe=Hn(V,R.current);de(Fe)}g.setState({userSelectionRect:at,userSelectionActive:!0,nodesSelectionActive:!1})}function G(){if(!r||!P.current)return;let[T,U]=Jo(y.current,P.current,C);S({x:T,y:U}).then(ne=>{if(!I.current||!ne){b.current=requestAnimationFrame(G);return}let{x:oe,y:Q}=y.current;F(oe,Q),b.current=requestAnimationFrame(G)})}let Y=()=>{cancelAnimationFrame(b.current),b.current=0,_.current=!1};(0,$.useEffect)(()=>()=>Y(),[]);let q=T=>{let{userSelectionRect:U,transform:ne,resetSelectedElements:oe}=g.getState();if(!P.current||!U)return;let{x:Q,y:V}=ot(T.nativeEvent,P.current);y.current={x:Q,y:V};let ee=sn({x:U.startX,y:U.startY},ne);if(!I.current){let re=t?0:i;if(Math.hypot(Q-ee.x,V-ee.y)<=re)return;oe(),s?.(T)}I.current=!0,_.current||(G(),_.current=!0),F(Q,V)},J=T=>{if(!v){T.target===E.current&&g.getState().connection.inProgress&&(A.current=!0);return}T.button===0&&(T.target?.releasePointerCapture?.(T.pointerId),!k&&T.target===E.current&&g.getState().userSelectionRect&&M?.(T),g.setState({userSelectionActive:!1,userSelectionRect:null}),I.current&&(c?.(T),g.setState({nodesSelectionActive:B.current.size>0})),Y())},le=T=>{T.target?.releasePointerCapture?.(T.pointerId),Y()},W=o===!0||Array.isArray(o)&&o.includes(0);return(0,L.jsxs)("div",{className:_e(["react-flow__pane",{draggable:W,dragging:w,selection:e}]),onClick:v?void 0:aa(M,E),onContextMenu:aa(N,E),onWheel:aa(z,E),onPointerEnter:v?void 0:f,onPointerMove:v?q:m,onPointerUp:J,onPointerCancel:v?le:void 0,onPointerDownCapture:v?H:void 0,onClickCapture:v?D:void 0,onPointerLeave:p,ref:E,style:br,children:[x,(0,L.jsx)(ry,{})]})}function la({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),u=s.get(e);if(!u){c?.("012",Qe.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&a)&&(i({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function qc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=xe(),[c,u]=(0,$.useState)(!1),l=(0,$.useRef)();return(0,$.useEffect)(()=>{if(!t)return l.current=Hl({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{la({id:d,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{l.current?.destroy(),l.current=void 0}},[t,s,e]),(0,$.useEffect)(()=>{t||!e.current||!l.current||l.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),c}var sy=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Uc(){let e=xe();return(0,$.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:u,nodeOrigin:l}=e.getState(),d=new Map,f=sy(a),m=r?i[0]:5,p=r?i[1]:5,x=n.direction.x*m*n.factor,b=n.direction.y*p*n.factor;for(let[,g]of u){if(!f(g))continue;let k={x:g.internals.positionAbsolute.x+x,y:g.internals.positionAbsolute.y+b};r&&(k=Tn(k,i));let{position:h,positionAbsolute:w}=Fi({nodeId:g.id,nextPosition:k,nodeLookup:u,nodeExtent:o,nodeOrigin:l,onError:s});g.position=h,g.internals.positionAbsolute=w,d.set(g.id,g)}c(d)},[])}var ua=(0,$.createContext)(null),ly=ua.Provider;ua.Consumer;var Zc=()=>(0,$.useContext)(ua),cy=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Kc=(0,$.createContext)(null);function uy({children:e}){let t=pe(cy,ke);return(0,L.jsx)(Kc.Provider,{value:t,children:e})}function dy(){let e=(0,$.useContext)(Kc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var fy={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},py=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:c,isValid:u}=a;if(!s&&!r)return fy;let l=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:l,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Lt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:l&&u}};function my({type:e="source",position:t=te.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:u,onMouseDown:l,onTouchStart:d,...f},m){let p=a||null,x=e==="target",b=xe(),g=Zc(),{connectOnClick:k,noPanClassName:h,rfId:w}=dy(),{connectingFrom:S,connectingTo:C,clickConnecting:v,isPossibleEndHandle:E,connectionInProcess:P,clickConnectionInProcess:B,valid:R}=pe(py(g,p,e),ke);g||b.getState().onError?.("010",Qe.error010());let A=_=>{let{defaultEdgeOptions:M,onConnect:N,hasDefaultEdges:z}=b.getState(),D={...M,..._};if(z){let{edges:H,setEdges:F,onError:G}=b.getState();F(Y0(D,H,{onError:G}))}N?.(D),s?.(D)},I=_=>{if(!g)return;let M=ji(_.nativeEvent);if(r&&(M&&_.button===0||!M)){let N=b.getState();cr.onPointerDown(_.nativeEvent,{handleDomNode:_.currentTarget,autoPanOnConnect:N.autoPanOnConnect,connectionMode:N.connectionMode,connectionRadius:N.connectionRadius,domNode:N.domNode,nodeLookup:N.nodeLookup,lib:N.lib,isTarget:x,handleId:p,nodeId:g,flowId:N.rfId,panBy:N.panBy,cancelConnection:N.cancelConnection,onConnectStart:N.onConnectStart,onConnectEnd:(...z)=>b.getState().onConnectEnd?.(...z),updateConnection:N.updateConnection,onConnect:A,isValidConnection:n||((...z)=>b.getState().isValidConnection?.(...z)??!0),getTransform:()=>b.getState().transform,getFromHandle:()=>b.getState().connection.fromHandle,autoPanSpeed:N.autoPanSpeed,dragThreshold:N.connectionDragThreshold})}M?l?.(_):d?.(_)},y=_=>{let{onClickConnectStart:M,onClickConnectEnd:N,connectionClickStartHandle:z,connectionMode:D,isValidConnection:H,lib:F,rfId:G,nodeLookup:Y,connection:q}=b.getState();if(!g||!z&&!r)return;if(!z){M?.(_.nativeEvent,{nodeId:g,handleId:p,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:g,type:e,id:p}});return}let J=Zi(_.target),le=n||H,{connection:W,isValid:T}=cr.isValid(_.nativeEvent,{handle:{nodeId:g,id:p,type:e},connectionMode:D,fromNodeId:z.nodeId,fromHandleId:z.id||null,fromType:z.type,isValidConnection:le,flowId:G,doc:J,lib:F,nodeLookup:Y});T&&W&&A(W);let U=structuredClone(q);delete U.inProgress,U.toPosition=U.toHandle?U.toHandle.position:null,N?.(_,U),b.setState({connectionClickStartHandle:null})};return(0,L.jsx)("div",{"data-handleid":p,"data-nodeid":g,"data-handlepos":t,"data-id":`${w}-${g}-${p}-${e}`,className:_e(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",h,u,{source:!x,target:x,connectable:o,connectablestart:r,connectableend:i,clickconnecting:v,connectingfrom:S,connectingto:C,valid:R,connectionindicator:o&&(!P||E)&&(P||B?i:r)}]),onMouseDown:I,onTouchStart:I,onClick:k?y:void 0,ref:m,...f,children:c})}var un=(0,$.memo)(Gc(my));function gy({data:e,isConnectable:t,sourcePosition:n=te.Bottom}){return(0,L.jsxs)(L.Fragment,{children:[e?.label,(0,L.jsx)(un,{type:"source",position:n,isConnectable:t})]})}function hy({data:e,isConnectable:t,targetPosition:n=te.Top,sourcePosition:o=te.Bottom}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(un,{type:"target",position:n,isConnectable:t}),e?.label,(0,L.jsx)(un,{type:"source",position:o,isConnectable:t})]})}function by(){return null}function yy({data:e,isConnectable:t,targetPosition:n=te.Top}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(un,{type:"target",position:n,isConnectable:t}),e?.label]})}var mr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Cc={input:gy,default:hy,output:yy,group:by};function xy(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var wy=e=>{let{width:t,height:n,x:o,y:r}=Dn(e.nodeLookup,{filter:i=>!!i.selected});return{width:nt(t)?t:null,height:nt(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function vy({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=xe(),{width:r,height:i,transformString:a,userSelectionActive:s}=pe(wy,ke),c=Uc(),u=(0,$.useRef)(null);(0,$.useEffect)(()=>{n||u.current?.focus({preventScroll:!0})},[n]);let l=!s&&r!==null&&i!==null;if(qc({nodeRef:u,disabled:!l}),!l)return null;let d=e?m=>{let p=o.getState().nodes.filter(x=>x.selected);e(m,p)}:void 0,f=m=>{Object.prototype.hasOwnProperty.call(mr,m.key)&&(m.preventDefault(),c({direction:mr[m.key],factor:m.shiftKey?4:1}))};return(0,L.jsx)("div",{className:_e(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,L.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var Nc=typeof window<"u"?window:void 0,ky=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function jc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:u,selectionOnDrag:l,selectionMode:d,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:p,panActivationKeyCode:x,zoomActivationKeyCode:b,elementsSelectable:g,zoomOnScroll:k,zoomOnPinch:h,panOnScroll:w,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:E,autoPanOnSelection:P,defaultViewport:B,translateExtent:R,minZoom:A,maxZoom:I,preventScrolling:y,onSelectionContextMenu:_,noWheelClassName:M,noPanClassName:N,disableKeyboardA11y:z,onViewportChange:D,isControlledViewport:H}){let{nodesSelectionActive:F,userSelectionActive:G}=pe(ky,ke),Y=lo(u,{target:Nc}),q=lo(x,{target:Nc}),J=q||E,le=q||w,W=l&&J!==!0,T=Y||G||W;return J0({deleteKeyCode:c,multiSelectionKeyCode:p}),(0,L.jsx)(ny,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:k,zoomOnPinch:h,panOnScroll:le,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:!Y&&J,defaultViewport:B,translateExtent:R,minZoom:A,maxZoom:I,zoomActivationKeyCode:b,preventScrolling:y,noWheelClassName:M,noPanClassName:N,onViewportChange:D,isControlledViewport:H,paneClickDistance:s,selectionOnDrag:W,children:(0,L.jsxs)(ay,{onSelectionStart:f,onSelectionEnd:m,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:J,autoPanOnSelection:P,isSelecting:!!T,selectionMode:d,selectionKeyPressed:Y,paneClickDistance:s,selectionOnDrag:W,children:[e,F&&(0,L.jsx)(vy,{onSelectionContextMenu:_,noPanClassName:N,disableKeyboardA11y:z})]})})}jc.displayName="FlowRenderer";var Sy=(0,$.memo)(jc),Cy=e=>t=>e?Qo(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function Ny(e){return pe((0,$.useCallback)(Cy(e),[e]),ke)}var Ey=e=>e.updateNodeInternals;function _y(){let e=pe(Ey),[t]=(0,$.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,$.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function My({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=xe(),i=(0,$.useRef)(null),a=(0,$.useRef)(null),s=(0,$.useRef)(e.sourcePosition),c=(0,$.useRef)(e.targetPosition),u=(0,$.useRef)(t),l=n&&!!e.internals.handleBounds;return(0,$.useEffect)(()=>{i.current&&!e.hidden&&(!l||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[l,e.hidden]),(0,$.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,$.useEffect)(()=>{if(i.current){let d=u.current!==t,f=s.current!==e.sourcePosition,m=c.current!==e.targetPosition;(d||f||m)&&(u.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function Iy({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:u,nodesFocusable:l,resizeObserver:d,noDragClassName:f,noPanClassName:m,disableKeyboardA11y:p,rfId:x,nodeTypes:b,nodeClickDistance:g,onError:k}){let{node:h,internals:w,isParent:S}=pe(T=>{let U=T.nodeLookup.get(e),ne=T.parentLookup.has(e);return{node:U,internals:U.internals,isParent:ne}},ke),C=h.type||"default",v=b?.[C]||Cc[C];v===void 0&&(k?.("003",Qe.error003(C)),C="default",v=b?.default||Cc.default);let E=!!(h.draggable||s&&typeof h.draggable>"u"),P=!!(h.selectable||c&&typeof h.selectable>"u"),B=!!(h.connectable||u&&typeof h.connectable>"u"),R=!!(h.focusable||l&&typeof h.focusable>"u"),A=xe(),I=Yi(h),y=My({node:h,nodeType:C,hasDimensions:I,resizeObserver:d}),_=qc({nodeRef:y,disabled:h.hidden||!E,noDragClassName:f,handleSelector:h.dragHandle,nodeId:e,isSelectable:P,nodeClickDistance:g}),M=Uc();if(h.hidden)return null;let N=ut(h),z=xy(h),D=P||E||t||n||o||r,H=n?T=>n(T,{...w.userNode}):void 0,F=o?T=>o(T,{...w.userNode}):void 0,G=r?T=>r(T,{...w.userNode}):void 0,Y=i?T=>i(T,{...w.userNode}):void 0,q=a?T=>a(T,{...w.userNode}):void 0,J=T=>{let{selectNodesOnDrag:U,nodeDragThreshold:ne}=A.getState();P&&(!U||!E||ne>0)&&la({id:e,store:A,nodeRef:y}),t&&t(T,{...w.userNode})},le=T=>{if(!(Ki(T.nativeEvent)||p)){if(Ti.includes(T.key)&&P){let U=T.key==="Escape";la({id:e,store:A,unselect:U,nodeRef:y})}else if(E&&h.selected&&Object.prototype.hasOwnProperty.call(mr,T.key)){T.preventDefault();let{ariaLabelConfig:U}=A.getState();A.setState({ariaLiveMessage:U["node.a11yDescription.ariaLiveMessage"]({direction:T.key.replace("Arrow","").toLowerCase(),x:~~w.positionAbsolute.x,y:~~w.positionAbsolute.y})}),M({direction:mr[T.key],factor:T.shiftKey?4:1})}}},W=()=>{if(p||!y.current?.matches(":focus-visible"))return;let{transform:T,width:U,height:ne,autoPanOnNodeFocus:oe,setCenter:Q}=A.getState();if(!oe)return;Qo(new Map([[e,h]]),{x:0,y:0,width:U,height:ne},T,!0).length>0||Q(h.position.x+N.width/2,h.position.y+N.height/2,{zoom:T[2]})};return(0,L.jsx)("div",{className:_e(["react-flow__node",`react-flow__node-${C}`,{[m]:E},h.className,{selected:h.selected,selectable:P,parent:S,draggable:E,dragging:_}]),ref:y,style:{zIndex:w.z,transform:`translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:I?"visible":"hidden",...h.style,...z},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:H,onMouseMove:F,onMouseLeave:G,onContextMenu:Y,onClick:J,onDoubleClick:q,onKeyDown:R?le:void 0,tabIndex:R?0:void 0,onFocus:R?W:void 0,role:h.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":p?void 0:`${Lc}-${x}`,"aria-label":h.ariaLabel,...h.domAttributes,children:(0,L.jsx)(ly,{value:e,children:(0,L.jsx)(v,{id:e,data:h.data,type:C,positionAbsoluteX:w.positionAbsolute.x,positionAbsoluteY:w.positionAbsolute.y,selected:h.selected??!1,selectable:P,draggable:E,deletable:h.deletable??!0,isConnectable:B,sourcePosition:h.sourcePosition,targetPosition:h.targetPosition,dragging:_,dragHandle:h.dragHandle,zIndex:w.z,parentId:h.parentId,...N})})})}var Py=(0,$.memo)(Iy),zy=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Qc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=pe(zy,ke),i=Ny(e.onlyRenderVisibleElements),a=_y();return(0,L.jsx)("div",{className:"react-flow__nodes",style:br,children:i.map(s=>(0,L.jsx)(Py,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}Qc.displayName="NodeRenderer";var Ry=(0,$.memo)(Qc);function Dy(e){return pe((0,$.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&Il({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),ke)}var Ay=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,L.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Ty=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,L.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Ec={[Pn.Arrow]:Ay,[Pn.ArrowClosed]:Ty};function Oy(e){let t=xe();return(0,$.useMemo)(()=>Object.prototype.hasOwnProperty.call(Ec,e)?Ec[e]:(t.getState().onError?.("009",Qe.error009(e)),null),[e])}var $y=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=Oy(t);return c?(0,L.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,L.jsx)(c,{color:n,strokeWidth:a})}):null},Jc=({defaultColor:e,rfId:t})=>{let n=pe(i=>i.edges),o=pe(i=>i.defaultEdgeOptions),r=(0,$.useMemo)(()=>Rl(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,L.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,L.jsx)("defs",{children:r.map(i=>(0,L.jsx)($y,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Jc.displayName="MarkerDefinitions";var Ly=(0,$.memo)(Jc);function eu({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:u,...l}){let[d,f]=(0,$.useState)({x:1,y:0,width:0,height:0}),m=_e(["react-flow__edge-textwrapper",u]),p=(0,$.useRef)(null);return(0,$.useEffect)(()=>{if(p.current){let x=p.current.getBBox();f({x:x.x,y:x.y,width:x.width,height:x.height})}},[n]),n?(0,L.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:m,visibility:d.width?"visible":"hidden",...l,children:[r&&(0,L.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,L.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:p,style:o,children:n}),c]}):null}eu.displayName="EdgeText";var Hy=(0,$.memo)(eu);function yr({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:u=20,...l}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("path",{...l,d:e,fill:"none",className:_e(["react-flow__edge-path",l.className])}),u?(0,L.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&nt(t)&&nt(n)?(0,L.jsx)(Hy,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function _c({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===te.Left||e===te.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function tu({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top}){let[a,s]=_c({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,u]=_c({pos:i,x1:o,y1:r,x2:e,y2:t}),[l,d,f,m]=or({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:u});return[`M${e},${t} C${a},${s} ${c},${u} ${o},${r}`,l,d,f,m]}function nu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:x,markerStart:b,interactionWidth:g})=>{let[k,h,w]=tu({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),S=e.isInternal?void 0:t;return(0,L.jsx)(yr,{id:S,path:k,labelX:h,labelY:w,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:x,markerStart:b,interactionWidth:g})})}var By=nu({isInternal:!1}),ou=nu({isInternal:!0});By.displayName="SimpleBezierEdge";ou.displayName="SimpleBezierEdgeInternal";function ru(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,sourcePosition:m=te.Bottom,targetPosition:p=te.Top,markerEnd:x,markerStart:b,pathOptions:g,interactionWidth:k})=>{let[h,w,S]=so({sourceX:n,sourceY:o,sourcePosition:m,targetX:r,targetY:i,targetPosition:p,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),C=e.isInternal?void 0:t;return(0,L.jsx)(yr,{id:C,path:h,labelX:w,labelY:S,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:x,markerStart:b,interactionWidth:k})})}var iu=ru({isInternal:!1}),au=ru({isInternal:!0});iu.displayName="SmoothStepEdge";au.displayName="SmoothStepEdgeInternal";function su(e){return(0,$.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,L.jsx)(iu,{...n,id:o,pathOptions:(0,$.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Wy=su({isInternal:!1}),lu=su({isInternal:!0});Wy.displayName="StepEdge";lu.displayName="StepEdgeInternal";function cu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:p,interactionWidth:x})=>{let[b,g,k]=ir({sourceX:n,sourceY:o,targetX:r,targetY:i}),h=e.isInternal?void 0:t;return(0,L.jsx)(yr,{id:h,path:b,labelX:g,labelY:k,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:p,interactionWidth:x})})}var Fy=cu({isInternal:!1}),uu=cu({isInternal:!0});Fy.displayName="StraightEdge";uu.displayName="StraightEdgeInternal";function du(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=te.Bottom,targetPosition:s=te.Top,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:x,markerStart:b,pathOptions:g,interactionWidth:k})=>{let[h,w,S]=rr({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:g?.curvature}),C=e.isInternal?void 0:t;return(0,L.jsx)(yr,{id:C,path:h,labelX:w,labelY:S,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:x,markerStart:b,interactionWidth:k})})}var Vy=du({isInternal:!1}),fu=du({isInternal:!0});Vy.displayName="BezierEdge";fu.displayName="BezierEdgeInternal";var Mc={default:fu,straight:uu,step:lu,smoothstep:au,simplebezier:ou},Ic={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Gy=(e,t,n)=>n===te.Left?e-t:n===te.Right?e+t:e,Xy=(e,t,n)=>n===te.Top?e-t:n===te.Bottom?e+t:e,Pc="react-flow__edgeupdater";function zc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,L.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:_e([Pc,`${Pc}-${s}`]),cx:Gy(t,o,e),cy:Xy(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function Yy({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:u,onReconnectStart:l,onReconnectEnd:d,setReconnecting:f,setUpdateHover:m}){let p=xe(),x=(w,S)=>{if(w.button!==0)return;let{autoPanOnConnect:C,domNode:v,connectionMode:E,connectionRadius:P,lib:B,onConnectStart:R,cancelConnection:A,nodeLookup:I,rfId:y,panBy:_,updateConnection:M}=p.getState(),N=S.type==="target",z=(F,G)=>{f(!1),d?.(F,n,S.type,G)},D=F=>u?.(n,F),H=(F,G)=>{f(!0),l?.(w,n,S.type),R?.(F,G)};cr.onPointerDown(w.nativeEvent,{autoPanOnConnect:C,connectionMode:E,connectionRadius:P,domNode:v,handleId:S.id,nodeId:S.nodeId,nodeLookup:I,isTarget:N,edgeUpdaterType:S.type,lib:B,flowId:y,cancelConnection:A,panBy:_,isValidConnection:(...F)=>p.getState().isValidConnection?.(...F)??!0,onConnect:D,onConnectStart:H,onConnectEnd:(...F)=>p.getState().onConnectEnd?.(...F),onReconnectEnd:z,updateConnection:M,getTransform:()=>p.getState().transform,getFromHandle:()=>p.getState().connection.fromHandle,dragThreshold:p.getState().connectionDragThreshold,handleDomNode:w.currentTarget})},b=w=>x(w,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=w=>x(w,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),k=()=>m(!0),h=()=>m(!1);return(0,L.jsxs)(L.Fragment,{children:[(e===!0||e==="source")&&(0,L.jsx)(zc,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:b,onMouseEnter:k,onMouseOut:h,type:"source"}),(e===!0||e==="target")&&(0,L.jsx)(zc,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:g,onMouseEnter:k,onMouseOut:h,type:"target"})]})}function qy({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:m,rfId:p,edgeTypes:x,noPanClassName:b,onError:g,disableKeyboardA11y:k}){let h=pe(Q=>Q.edgeLookup.get(e)),w=pe(Q=>Q.defaultEdgeOptions);h=w?{...w,...h}:h;let S=h.type||"default",C=x?.[S]||Mc[S];C===void 0&&(g?.("011",Qe.error011(S)),S="default",C=x?.default||Mc.default);let v=!!(h.focusable||t&&typeof h.focusable>"u"),E=typeof d<"u"&&(h.reconnectable||n&&typeof h.reconnectable>"u"),P=!!(h.selectable||o&&typeof h.selectable>"u"),B=(0,$.useRef)(null),[R,A]=(0,$.useState)(!1),[I,y]=(0,$.useState)(!1),_=xe(),{zIndex:M=h.zIndex,sourceX:N,sourceY:z,targetX:D,targetY:H,sourcePosition:F,targetPosition:G}=pe((0,$.useCallback)(Q=>{let V=Q.nodeLookup.get(h.source),ee=Q.nodeLookup.get(h.target);if(!V||!ee)return Ic;let re=zl({id:e,sourceNode:V,targetNode:ee,sourceHandle:h.sourceHandle||null,targetHandle:h.targetHandle||null,connectionMode:Q.connectionMode,onError:g}),de=Ml({selected:h.selected,zIndex:h.zIndex,sourceNode:V,targetNode:ee,elevateOnSelect:Q.elevateEdgesOnSelect,zIndexMode:Q.zIndexMode});return{...re||Ic,zIndex:de}},[h.source,h.target,h.sourceHandle,h.targetHandle,h.selected,h.zIndex]),ke),Y=(0,$.useMemo)(()=>h.markerStart?`url('#${ar(h.markerStart,p)}')`:void 0,[h.markerStart,p]),q=(0,$.useMemo)(()=>h.markerEnd?`url('#${ar(h.markerEnd,p)}')`:void 0,[h.markerEnd,p]);if(h.hidden||N===null||z===null||D===null||H===null)return null;let J=Q=>{let{addSelectedEdges:V,unselectNodesAndEdges:ee,multiSelectionActive:re}=_.getState();P&&(_.setState({nodesSelectionActive:!1}),h.selected&&re?(ee({nodes:[],edges:[h]}),B.current?.blur()):V([e])),r&&r(Q,h)},le=i?Q=>{i(Q,{...h})}:void 0,W=a?Q=>{a(Q,{...h})}:void 0,T=s?Q=>{s(Q,{...h})}:void 0,U=c?Q=>{c(Q,{...h})}:void 0,ne=u?Q=>{u(Q,{...h})}:void 0,oe=Q=>{if(!k&&Ti.includes(Q.key)&&P){let{unselectNodesAndEdges:V,addSelectedEdges:ee}=_.getState();Q.key==="Escape"?(B.current?.blur(),V({edges:[h]})):ee([e])}};return(0,L.jsx)("svg",{style:{zIndex:M},children:(0,L.jsxs)("g",{className:_e(["react-flow__edge",`react-flow__edge-${S}`,h.className,b,{selected:h.selected,animated:h.animated,inactive:!P&&!r,updating:R,selectable:P}]),onClick:J,onDoubleClick:le,onContextMenu:W,onMouseEnter:T,onMouseMove:U,onMouseLeave:ne,onKeyDown:v?oe:void 0,tabIndex:v?0:void 0,role:h.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":h.ariaLabel===null?void 0:h.ariaLabel||`Edge from ${h.source} to ${h.target}`,"aria-describedby":v?`${Hc}-${p}`:void 0,ref:B,...h.domAttributes,children:[!I&&(0,L.jsx)(C,{id:e,source:h.source,target:h.target,type:h.type,selected:h.selected,animated:h.animated,selectable:P,deletable:h.deletable??!0,label:h.label,labelStyle:h.labelStyle,labelShowBg:h.labelShowBg,labelBgStyle:h.labelBgStyle,labelBgPadding:h.labelBgPadding,labelBgBorderRadius:h.labelBgBorderRadius,sourceX:N,sourceY:z,targetX:D,targetY:H,sourcePosition:F,targetPosition:G,data:h.data,style:h.style,sourceHandleId:h.sourceHandle,targetHandleId:h.targetHandle,markerStart:Y,markerEnd:q,pathOptions:"pathOptions"in h?h.pathOptions:void 0,interactionWidth:h.interactionWidth}),E&&(0,L.jsx)(Yy,{edge:h,isReconnectable:E,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:m,sourceX:N,sourceY:z,targetX:D,targetY:H,sourcePosition:F,targetPosition:G,setUpdateHover:A,setReconnecting:y})]})})}var Uy=(0,$.memo)(qy),Zy=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function pu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:u,onEdgeClick:l,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:m,onReconnectEnd:p,disableKeyboardA11y:x}){let{edgesFocusable:b,edgesReconnectable:g,elementsSelectable:k,onError:h}=pe(Zy,ke),w=Dy(t);return(0,L.jsxs)("div",{className:"react-flow__edges",children:[(0,L.jsx)(Ly,{defaultColor:e,rfId:n}),w.map(S=>(0,L.jsx)(Uy,{id:S,edgesFocusable:b,edgesReconnectable:g,elementsSelectable:k,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,onClick:l,reconnectRadius:d,onDoubleClick:f,onReconnectStart:m,onReconnectEnd:p,rfId:n,onError:h,edgeTypes:o,disableKeyboardA11y:x},S))]})}pu.displayName="EdgeRenderer";var Ky=(0,$.memo)(pu),Rc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function jy({children:e}){let t=xe(),n=(0,$.useRef)(null),[o]=(0,$.useState)(()=>t.getState().transform);return Xc(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=Rc(a)))};return i(),t.subscribe(i)},[t]),(0,L.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:Rc(o)},children:e})}function Qy(e){let t=ca(),n=(0,$.useRef)(!1);(0,$.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Jy=e=>e.panZoom?.syncViewport;function ex(e){let t=pe(Jy),n=xe();return(0,$.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Dc(e){return e.connection.inProgress?{...e.connection,to:On(e.connection.to,e.transform)}:{...e.connection}}function tx(e){return e?n=>{let o=Dc(n);return e(o)}:Dc}function nx(e){let t=tx(e);return pe(t,ke)}var ox=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function rx({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:c}=pe(ox,ke);return!(i&&r&&c)?null:(0,L.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,L.jsx)("g",{className:_e(["react-flow__connection",Li(s)]),children:(0,L.jsx)(mu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var mu=({style:e,type:t=ht.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:u,toNode:l,toHandle:d,toPosition:f,pointer:m}=nx();if(!r)return;if(n)return(0,L.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:u.x,toY:u.y,fromPosition:c,toPosition:f,connectionStatus:Li(o),toNode:l,toHandle:d,pointer:m});let p="",x={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:u.x,targetY:u.y,targetPosition:f};switch(t){case ht.Bezier:[p]=rr(x);break;case ht.SimpleBezier:[p]=tu(x);break;case ht.Step:[p]=so({...x,borderRadius:0});break;case ht.SmoothStep:[p]=so(x);break;default:[p]=ir(x)}return(0,L.jsx)("path",{d:p,fill:"none",className:"react-flow__connection-path",style:e})};mu.displayName="ConnectionLine";var ix={};function Ac(e=ix){let t=(0,$.useRef)(e),n=xe();(0,$.useEffect)(()=>{},[e])}function ax(){let e=xe(),t=(0,$.useRef)(!1);(0,$.useEffect)(()=>{},[])}function gu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:m,connectionLineType:p,connectionLineStyle:x,connectionLineComponent:b,connectionLineContainerStyle:g,selectionKeyCode:k,selectionOnDrag:h,selectionMode:w,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,deleteKeyCode:E,onlyRenderVisibleElements:P,elementsSelectable:B,defaultViewport:R,translateExtent:A,minZoom:I,maxZoom:y,preventScrolling:_,defaultMarkerColor:M,zoomOnScroll:N,zoomOnPinch:z,panOnScroll:D,panOnScrollSpeed:H,panOnScrollMode:F,zoomOnDoubleClick:G,panOnDrag:Y,autoPanOnSelection:q,onPaneClick:J,onPaneMouseEnter:le,onPaneMouseMove:W,onPaneMouseLeave:T,onPaneScroll:U,onPaneContextMenu:ne,paneClickDistance:oe,nodeClickDistance:Q,onEdgeContextMenu:V,onEdgeMouseEnter:ee,onEdgeMouseMove:re,onEdgeMouseLeave:de,reconnectRadius:Se,onReconnect:it,onReconnectStart:et,onReconnectEnd:fe,noDragClassName:at,noWheelClassName:Ut,noPanClassName:Ze,disableKeyboardA11y:kt,nodeExtent:Fe,rfId:tt,viewport:Ke,onViewportChange:ft,nodesDraggable:At}){return Ac(e),Ac(t),ax(),Qy(n),ex(Ke),(0,L.jsx)(Sy,{onPaneClick:J,onPaneMouseEnter:le,onPaneMouseMove:W,onPaneMouseLeave:T,onPaneContextMenu:ne,onPaneScroll:U,paneClickDistance:oe,deleteKeyCode:E,selectionKeyCode:k,selectionOnDrag:h,selectionMode:w,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,elementsSelectable:B,zoomOnScroll:N,zoomOnPinch:z,zoomOnDoubleClick:G,panOnScroll:D,panOnScrollSpeed:H,panOnScrollMode:F,panOnDrag:Y,autoPanOnSelection:q,defaultViewport:R,translateExtent:A,minZoom:I,maxZoom:y,onSelectionContextMenu:d,preventScrolling:_,noDragClassName:at,noWheelClassName:Ut,noPanClassName:Ze,disableKeyboardA11y:kt,onViewportChange:ft,isControlledViewport:!!Ke,children:(0,L.jsxs)(jy,{children:[(0,L.jsx)(Ky,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:it,onReconnectStart:et,onReconnectEnd:fe,onlyRenderVisibleElements:P,onEdgeContextMenu:V,onEdgeMouseEnter:ee,onEdgeMouseMove:re,onEdgeMouseLeave:de,reconnectRadius:Se,defaultMarkerColor:M,noPanClassName:Ze,disableKeyboardA11y:kt,rfId:tt}),(0,L.jsx)(rx,{style:x,type:p,component:b,containerStyle:g}),(0,L.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,L.jsx)(Ry,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,nodeClickDistance:Q,onlyRenderVisibleElements:P,noPanClassName:Ze,noDragClassName:at,disableKeyboardA11y:kt,nodeExtent:Fe,rfId:tt,nodesDraggable:At}),(0,L.jsx)("div",{className:"react-flow__viewport-portal"})]})})}gu.displayName="GraphView";var sx=(0,$.memo)(gu),lx=Xi("React Flow","https://reactflow.dev/"),Tc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:u=2,nodeOrigin:l,nodeExtent:d,zIndexMode:f="basic"}={})=>{let m=new Map,p=new Map,x=new Map,b=new Map,g=o??t??[],k=n??e??[],h=l??[0,0],w=d??Rn;oa(x,b,g);let{nodesInitialized:S}=sr(k,m,p,{nodeOrigin:h,nodeExtent:w,zIndexMode:f}),C=[0,0,1];if(a&&r&&i){let v=Dn(m,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:E,y:P,zoom:B}=ao(v,r,i,c,u,s?.padding??.1);C=[E,P,B]}return{rfId:"1",width:r??0,height:i??0,transform:C,nodes:k,nodesInitialized:S,nodeLookup:m,parentLookup:p,edges:g,edgeLookup:b,connectionLookup:x,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:u,translateExtent:Rn,nodeExtent:w,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Lt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:h,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...$i},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:lx,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Oi,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},cx=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f})=>uc((m,p)=>{async function x(){let{nodeLookup:b,panZoom:g,fitViewOptions:k,fitViewResolver:h,width:w,height:S,minZoom:C,maxZoom:v}=p();g&&(await kl({nodes:b,width:w,height:S,panZoom:g,minZoom:C,maxZoom:v},k),h?.resolve(!0),m({fitViewResolver:null}))}return{...Tc({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:b=>{let{nodeLookup:g,parentLookup:k,nodeOrigin:h,elevateNodesOnSelect:w,fitViewQueued:S,zIndexMode:C,nodesSelectionActive:v}=p(),{nodesInitialized:E,hasSelectedNodes:P}=sr(b,g,k,{nodeOrigin:h,nodeExtent:d,elevateNodesOnSelect:w,checkEquality:!0,zIndexMode:C}),B=v&&P;S&&E?(x(),m({nodes:b,nodesInitialized:E,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:B})):m({nodes:b,nodesInitialized:E,nodesSelectionActive:B})},setEdges:b=>{let{connectionLookup:g,edgeLookup:k}=p();oa(g,k,b),m({edges:b})},setDefaultNodesAndEdges:(b,g)=>{if(b){let{setNodes:k}=p();k(b),m({hasDefaultNodes:!0})}if(g){let{setEdges:k}=p();k(g),m({hasDefaultEdges:!0})}},updateNodeInternals:b=>{let{triggerNodeChanges:g,nodeLookup:k,parentLookup:h,domNode:w,nodeOrigin:S,nodeExtent:C,debug:v,fitViewQueued:E,zIndexMode:P}=p(),{changes:B,updatedInternals:R}=Ol(b,k,h,w,S,C,P);R&&(Al(k,h,{nodeOrigin:S,nodeExtent:C,zIndexMode:P}),E?(x(),m({fitViewQueued:!1,fitViewOptions:void 0})):m({}),B?.length>0&&(v&&console.log("React Flow: trigger node changes",B),g?.(B)))},updateNodePositions:(b,g=!1)=>{let k=[],h=[],{nodeLookup:w,triggerNodeChanges:S,connection:C,updateConnection:v,onNodesChangeMiddlewareMap:E}=p();for(let[P,B]of b){let R=w.get(P),A=!!(R?.expandParent&&R?.parentId&&B?.position),I={id:P,type:"position",position:A?{x:Math.max(0,B.position.x),y:Math.max(0,B.position.y)}:B.position,dragging:g};if(R&&C.inProgress&&C.fromNode.id===R.id){let y=Ht(R,C.fromHandle,te.Left,!0);v({...C,from:y})}A&&R.parentId&&k.push({id:P,parentId:R.parentId,rect:{...B.internals.positionAbsolute,width:B.measured.width??0,height:B.measured.height??0}}),h.push(I)}if(k.length>0){let{parentLookup:P,nodeOrigin:B}=p(),R=lr(k,w,P,B);h.push(...R)}for(let P of E.values())h=P(h);S(h)},triggerNodeChanges:b=>{let{onNodesChange:g,setNodes:k,nodes:h,hasDefaultNodes:w,debug:S}=p();if(b?.length){if(w){let C=Fc(b,h);k(C)}S&&console.log("React Flow: trigger node changes",b),g?.(b)}},triggerEdgeChanges:b=>{let{onEdgesChange:g,setEdges:k,edges:h,hasDefaultEdges:w,debug:S}=p();if(b?.length){if(w){let C=Vc(b,h);k(C)}S&&console.log("React Flow: trigger edge changes",b),g?.(b)}},addSelectedNodes:b=>{let{multiSelectionActive:g,edgeLookup:k,nodeLookup:h,triggerNodeChanges:w,triggerEdgeChanges:S}=p();if(g){let C=b.map(v=>cn(v,!0));w(C);return}w(Hn(h,new Set([...b]),!0)),S(Hn(k))},addSelectedEdges:b=>{let{multiSelectionActive:g,edgeLookup:k,nodeLookup:h,triggerNodeChanges:w,triggerEdgeChanges:S}=p();if(g){let C=b.map(v=>cn(v,!0));S(C);return}S(Hn(k,new Set([...b]))),w(Hn(h,new Set,!0))},unselectNodesAndEdges:({nodes:b,edges:g}={})=>{let{edges:k,nodes:h,nodeLookup:w,triggerNodeChanges:S,triggerEdgeChanges:C}=p(),v=b||h,E=g||k,P=[];for(let R of v){if(!R.selected)continue;let A=w.get(R.id);A&&(A.selected=!1),P.push(cn(R.id,!1))}let B=[];for(let R of E)R.selected&&B.push(cn(R.id,!1));S(P),C(B)},setMinZoom:b=>{let{panZoom:g,maxZoom:k}=p();g?.setScaleExtent([b,k]),m({minZoom:b})},setMaxZoom:b=>{let{panZoom:g,minZoom:k}=p();g?.setScaleExtent([k,b]),m({maxZoom:b})},setTranslateExtent:b=>{p().panZoom?.setTranslateExtent(b),m({translateExtent:b})},resetSelectedElements:()=>{let{edges:b,nodes:g,triggerNodeChanges:k,triggerEdgeChanges:h,elementsSelectable:w}=p();if(!w)return;let S=g.reduce((v,E)=>E.selected?[...v,cn(E.id,!1)]:v,[]),C=b.reduce((v,E)=>E.selected?[...v,cn(E.id,!1)]:v,[]);k(S),h(C)},setNodeExtent:b=>{let{nodes:g,nodeLookup:k,parentLookup:h,nodeOrigin:w,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:v}=p();b[0][0]===C[0][0]&&b[0][1]===C[0][1]&&b[1][0]===C[1][0]&&b[1][1]===C[1][1]||(sr(g,k,h,{nodeOrigin:w,nodeExtent:b,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:v}),m({nodeExtent:b}))},panBy:b=>{let{transform:g,width:k,height:h,panZoom:w,translateExtent:S}=p();return $l({delta:b,panZoom:w,transform:g,translateExtent:S,width:k,height:h})},setCenter:async(b,g,k)=>{let{width:h,height:w,maxZoom:S,panZoom:C}=p();if(!C)return!1;let v=typeof k?.zoom<"u"?k.zoom:S;return await C.setViewport({x:h/2-b*v,y:w/2-g*v,zoom:v},{duration:k?.duration,ease:k?.ease,interpolate:k?.interpolate}),!0},cancelConnection:()=>{m({connection:{...$i}})},updateConnection:b=>{m({connection:b})},reset:()=>m({...Tc()})}},Object.is);function ux({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f,children:m}){let[p]=(0,$.useState)(()=>cx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:u,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:l,nodeExtent:d,zIndexMode:f}));return(0,L.jsx)(N0,{value:p,children:(0,L.jsx)(Z0,{children:(0,L.jsx)(uy,{children:m})})})}function dx({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:u,maxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:m}){return(0,$.useContext)(gr)?(0,L.jsx)(L.Fragment,{children:e}):(0,L.jsx)(ux,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:u,initialMaxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:m,children:e})}var fx={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function px({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:u,onMove:l,onMoveStart:d,onMoveEnd:f,onConnect:m,onConnectStart:p,onConnectEnd:x,onClickConnectStart:b,onClickConnectEnd:g,onNodeMouseEnter:k,onNodeMouseMove:h,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:v,onNodeDrag:E,onNodeDragStop:P,onNodesDelete:B,onEdgesDelete:R,onDelete:A,onSelectionChange:I,onSelectionDragStart:y,onSelectionDrag:_,onSelectionDragStop:M,onSelectionContextMenu:N,onSelectionStart:z,onSelectionEnd:D,onBeforeDelete:H,connectionMode:F,connectionLineType:G=ht.Bezier,connectionLineStyle:Y,connectionLineComponent:q,connectionLineContainerStyle:J,deleteKeyCode:le="Backspace",selectionKeyCode:W="Shift",selectionOnDrag:T=!1,selectionMode:U=rn.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:oe=$n()?"Meta":"Control",zoomActivationKeyCode:Q=$n()?"Meta":"Control",snapToGrid:V,snapGrid:ee,onlyRenderVisibleElements:re=!1,selectNodesOnDrag:de,nodesDraggable:Se,autoPanOnNodeFocus:it,nodesConnectable:et,nodesFocusable:fe,nodeOrigin:at=Bc,edgesFocusable:Ut,edgesReconnectable:Ze,elementsSelectable:kt=!0,defaultViewport:Fe=L0,minZoom:tt=.5,maxZoom:Ke=2,translateExtent:ft=Rn,preventScrolling:At=!0,nodeExtent:bn,defaultMarkerColor:$e="#b1b1b7",zoomOnScroll:yo=!0,zoomOnPinch:xo=!0,panOnScroll:wo=!1,panOnScrollSpeed:$r=.5,panOnScrollMode:Lr=It.Free,zoomOnDoubleClick:Hr=!0,panOnDrag:Br=!0,onPaneClick:Wr,onPaneMouseEnter:Fr,onPaneMouseMove:Vr,onPaneMouseLeave:Gr,onPaneScroll:Xr,onPaneContextMenu:Zt,paneClickDistance:vo=1,nodeClickDistance:ko=0,children:Yr,onReconnect:O,onReconnectStart:X,onReconnectEnd:K,onEdgeContextMenu:ae,onEdgeDoubleClick:Ce,onEdgeMouseEnter:St,onEdgeMouseMove:Pe,onEdgeMouseLeave:yn,reconnectRadius:ip=10,onNodesChange:ap,onEdgesChange:sp,noDragClassName:lp="nodrag",noWheelClassName:cp="nowheel",noPanClassName:Xa="nopan",fitView:Ya,fitViewOptions:qa,connectOnClick:up,attributionPosition:dp,proOptions:fp,defaultEdgeOptions:pp,elevateNodesOnSelect:mp=!0,elevateEdgesOnSelect:gp=!1,disableKeyboardA11y:Ua=!1,autoPanOnConnect:hp,autoPanOnNodeDrag:bp,autoPanOnSelection:yp=!0,autoPanSpeed:xp,connectionRadius:wp,isValidConnection:vp,onError:kp,style:Sp,id:Za,nodeDragThreshold:Cp,connectionDragThreshold:Np,viewport:Ep,onViewportChange:_p,width:Mp,height:Ip,colorMode:Pp="light",debug:zp,onScroll:Ka,ariaLabelConfig:Rp,zIndexMode:ja="basic",...Dp},Ap){let qr=Za||"1",Tp=F0(Pp),Op=(0,$.useCallback)(Qa=>{Qa.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Ka?.(Qa)},[Ka]);return(0,L.jsx)("div",{"data-testid":"rf__wrapper",...Dp,onScroll:Op,style:{...Sp,...fx},ref:Ap,className:_e(["react-flow",r,Tp]),id:Za,role:"application",children:(0,L.jsxs)(dx,{nodes:e,edges:t,width:Mp,height:Ip,fitView:Ya,fitViewOptions:qa,minZoom:tt,maxZoom:Ke,nodeOrigin:at,nodeExtent:bn,zIndexMode:ja,children:[(0,L.jsx)(W0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:m,onConnectStart:p,onConnectEnd:x,onClickConnectStart:b,onClickConnectEnd:g,nodesDraggable:Se,autoPanOnNodeFocus:it,nodesConnectable:et,nodesFocusable:fe,edgesFocusable:Ut,edgesReconnectable:Ze,elementsSelectable:kt,elevateNodesOnSelect:mp,elevateEdgesOnSelect:gp,minZoom:tt,maxZoom:Ke,nodeExtent:bn,onNodesChange:ap,onEdgesChange:sp,snapToGrid:V,snapGrid:ee,connectionMode:F,translateExtent:ft,connectOnClick:up,defaultEdgeOptions:pp,fitView:Ya,fitViewOptions:qa,onNodesDelete:B,onEdgesDelete:R,onDelete:A,onNodeDragStart:v,onNodeDrag:E,onNodeDragStop:P,onSelectionDrag:_,onSelectionDragStart:y,onSelectionDragStop:M,onMove:l,onMoveStart:d,onMoveEnd:f,noPanClassName:Xa,nodeOrigin:at,rfId:qr,autoPanOnConnect:hp,autoPanOnNodeDrag:bp,autoPanSpeed:xp,onError:kp,connectionRadius:wp,isValidConnection:vp,selectNodesOnDrag:de,nodeDragThreshold:Cp,connectionDragThreshold:Np,onBeforeDelete:H,debug:zp,ariaLabelConfig:Rp,zIndexMode:ja}),(0,L.jsx)(sx,{onInit:u,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:k,onNodeMouseMove:h,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:i,edgeTypes:a,connectionLineType:G,connectionLineStyle:Y,connectionLineComponent:q,connectionLineContainerStyle:J,selectionKeyCode:W,selectionOnDrag:T,selectionMode:U,deleteKeyCode:le,multiSelectionKeyCode:oe,panActivationKeyCode:ne,zoomActivationKeyCode:Q,onlyRenderVisibleElements:re,defaultViewport:Fe,translateExtent:ft,minZoom:tt,maxZoom:Ke,preventScrolling:At,zoomOnScroll:yo,zoomOnPinch:xo,zoomOnDoubleClick:Hr,panOnScroll:wo,panOnScrollSpeed:$r,panOnScrollMode:Lr,panOnDrag:Br,autoPanOnSelection:yp,onPaneClick:Wr,onPaneMouseEnter:Fr,onPaneMouseMove:Vr,onPaneMouseLeave:Gr,onPaneScroll:Xr,onPaneContextMenu:Zt,paneClickDistance:vo,nodeClickDistance:ko,onSelectionContextMenu:N,onSelectionStart:z,onSelectionEnd:D,onReconnect:O,onReconnectStart:X,onReconnectEnd:K,onEdgeContextMenu:ae,onEdgeDoubleClick:Ce,onEdgeMouseEnter:St,onEdgeMouseMove:Pe,onEdgeMouseLeave:yn,reconnectRadius:ip,defaultMarkerColor:$e,noDragClassName:lp,noWheelClassName:cp,noPanClassName:Xa,rfId:qr,disableKeyboardA11y:Ua,nodeExtent:bn,viewport:Ep,onViewportChange:_p,nodesDraggable:Se}),(0,L.jsx)($0,{onSelectionChange:I}),Yr,(0,L.jsx)(R0,{proOptions:fp,position:dp}),(0,L.jsx)(z0,{rfId:qr,disableKeyboardA11y:Ua})]})})}var hu=Gc(px);function bu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>Fc(r,i)),[]);return[t,n,o]}function yu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>Vc(r,i)),[]);return[t,n,o]}var x1=Qe.error014();function mx({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,L.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:_e(["react-flow__background-pattern",n,o])})}function gx({radius:e,className:t}){return(0,L.jsx)("circle",{cx:e,cy:e,r:e,className:_e(["react-flow__background-pattern","dots",t])})}var bt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(bt||(bt={}));var hx={[bt.Dots]:1,[bt.Lines]:1,[bt.Cross]:6},bx=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function xu({id:e,variant:t=bt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:c,className:u,patternClassName:l}){let d=(0,$.useRef)(null),{transform:f,patternId:m}=pe(bx,ke),p=o||hx[t],x=t===bt.Dots,b=t===bt.Cross,g=Array.isArray(n)?n:[n,n],k=[g[0]*f[2]||1,g[1]*f[2]||1],h=p*f[2],w=Array.isArray(i)?i:[i,i],S=b?[h,h]:k,C=[w[0]*f[2]||1+S[0]/2,w[1]*f[2]||1+S[1]/2],v=`${m}${e||""}`;return(0,L.jsxs)("svg",{className:_e(["react-flow__background",u]),style:{...c,...br,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,L.jsx)("pattern",{id:v,x:f[0]%k[0],y:f[1]%k[1],width:k[0],height:k[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:x?(0,L.jsx)(gx,{radius:h/2,className:l}):(0,L.jsx)(mx,{dimensions:S,lineWidth:r,variant:t,className:l})}),(0,L.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}xu.displayName="Background";var wu=(0,$.memo)(xu);function yx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,L.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function xx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,L.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function wx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,L.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function vx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,L.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function kx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,L.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function pr({children:e,className:t,...n}){return(0,L.jsx)("button",{type:"button",className:_e(["react-flow__controls-button",t]),...n,children:e})}var Sx=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function vu({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:u,children:l,position:d="bottom-left",orientation:f="vertical","aria-label":m}){let p=xe(),{isInteractive:x,minZoomReached:b,maxZoomReached:g,ariaLabelConfig:k}=pe(Sx,ke),{zoomIn:h,zoomOut:w,fitView:S}=ca(),C=()=>{h(),i?.()},v=()=>{w(),a?.()},E=()=>{S(r),s?.()},P=()=>{p.setState({nodesDraggable:!x,nodesConnectable:!x,elementsSelectable:!x}),c?.(!x)};return(0,L.jsxs)(hr,{className:_e(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",u]),position:d,style:e,"data-testid":"rf__controls","aria-label":m??k["controls.ariaLabel"],children:[t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(pr,{onClick:C,className:"react-flow__controls-zoomin",title:k["controls.zoomIn.ariaLabel"],"aria-label":k["controls.zoomIn.ariaLabel"],disabled:g,children:(0,L.jsx)(yx,{})}),(0,L.jsx)(pr,{onClick:v,className:"react-flow__controls-zoomout",title:k["controls.zoomOut.ariaLabel"],"aria-label":k["controls.zoomOut.ariaLabel"],disabled:b,children:(0,L.jsx)(xx,{})})]}),n&&(0,L.jsx)(pr,{className:"react-flow__controls-fitview",onClick:E,title:k["controls.fitView.ariaLabel"],"aria-label":k["controls.fitView.ariaLabel"],children:(0,L.jsx)(wx,{})}),o&&(0,L.jsx)(pr,{className:"react-flow__controls-interactive",onClick:P,title:k["controls.interactive.ariaLabel"],"aria-label":k["controls.interactive.ariaLabel"],children:x?(0,L.jsx)(kx,{}):(0,L.jsx)(vx,{})}),l]})}vu.displayName="Controls";var w1=(0,$.memo)(vu);function Cx({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:c,className:u,borderRadius:l,shapeRendering:d,selected:f,onClick:m}){let{background:p,backgroundColor:x}=i||{},b=a||p||x;return(0,L.jsx)("rect",{className:_e(["react-flow__minimap-node",{selected:f},u]),x:t,y:n,rx:l,ry:l,width:o,height:r,style:{fill:b,stroke:s,strokeWidth:c},shapeRendering:d,onClick:m?g=>m(g,e):void 0})}var Nx=(0,$.memo)(Cx),Ex=e=>e.nodes.map(t=>t.id),sa=e=>e instanceof Function?e:()=>e;function _x({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=Nx,onClick:a}){let s=pe(Ex,ke),c=sa(t),u=sa(e),l=sa(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,L.jsx)(L.Fragment,{children:s.map(f=>(0,L.jsx)(Ix,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:u,nodeClassNameFunc:l,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function Mx({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:u,x:l,y:d,width:f,height:m}=pe(p=>{let x=p.nodeLookup.get(e);if(!x)return{node:void 0,x:0,y:0,width:0,height:0};let b=x.internals.userNode,{x:g,y:k}=x.internals.positionAbsolute,{width:h,height:w}=ut(b);return{node:b,x:g,y:k,width:h,height:w}},ke);return!u||u.hidden||!Yi(u)?null:(0,L.jsx)(s,{x:l,y:d,width:f,height:m,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:r,strokeColor:n(u),strokeWidth:i,shapeRendering:a,onClick:c,id:u.id})}var Ix=(0,$.memo)(Mx),Px=(0,$.memo)(_x),zx=200,Rx=150,Dx=e=>!e.hidden,Ax=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Vi(Dn(e.nodeLookup,{filter:Dx}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Oc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Tx=(e,t)=>Oc(e.viewBB,t.viewBB)&&Oc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,Ox="react-flow__minimap-desc";function ku({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:u,maskStrokeColor:l,maskStrokeWidth:d,position:f="bottom-right",onClick:m,onNodeClick:p,pannable:x=!1,zoomable:b=!1,ariaLabel:g,inversePan:k,zoomStep:h=1,offsetScale:w=5}){let S=xe(),C=(0,$.useRef)(null),{boundingRect:v,viewBB:E,rfId:P,panZoom:B,translateExtent:R,flowWidth:A,flowHeight:I,ariaLabelConfig:y}=pe(Ax,Tx),_=e?.width??zx,M=e?.height??Rx,N=v.width/_,z=v.height/M,D=Math.max(N,z),H=D*_,F=D*M,G=w*D,Y=v.x-(H-v.width)/2-G,q=v.y-(F-v.height)/2-G,J=H+G*2,le=F+G*2,W=`${Ox}-${P}`,T=(0,$.useRef)(0),U=(0,$.useRef)();T.current=D,(0,$.useEffect)(()=>{if(C.current&&B)return U.current=Gl({domNode:C.current,panZoom:B,getTransform:()=>S.getState().transform,getViewScale:()=>T.current}),()=>{U.current?.destroy()}},[B]),(0,$.useEffect)(()=>{U.current?.update({translateExtent:R,width:A,height:I,inversePan:k,pannable:x,zoomStep:h,zoomable:b})},[x,b,k,h,R,A,I]);let ne=m?V=>{let[ee,re]=U.current?.pointer(V)||[0,0];m(V,{x:ee,y:re})}:void 0,oe=p?(0,$.useCallback)((V,ee)=>{let re=S.getState().nodeLookup.get(ee).internals.userNode;p(V,re)},[]):void 0,Q=g??y["minimap.ariaLabel"];return(0,L.jsx)(hr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:_e(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,L.jsxs)("svg",{width:_,height:M,viewBox:`${Y} ${q} ${J} ${le}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":W,ref:C,onClick:ne,children:[Q&&(0,L.jsx)("title",{id:W,children:Q}),(0,L.jsx)(Px,{onClick:oe,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,L.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Y-G},${q-G}h${J+G*2}v${le+G*2}h${-J-G*2}z
        M${E.x},${E.y}h${E.width}v${E.height}h${-E.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}ku.displayName="MiniMap";var Su=(0,$.memo)(ku),$x=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Lx={[Bt.Line]:"right",[Bt.Handle]:"bottom-right"};function Hx({nodeId:e,position:t,variant:n=Bt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:u=Number.MAX_VALUE,maxHeight:l=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:m=!0,shouldResize:p,onResizeStart:x,onResize:b,onResizeEnd:g}){let k=Zc(),h=typeof e=="string"?e:k,w=xe(),S=(0,$.useRef)(null),C=n===Bt.Handle,v=pe((0,$.useCallback)($x(C&&m),[C,m]),ke),E=(0,$.useRef)(null),P=t??Lx[n];(0,$.useEffect)(()=>{if(!(!S.current||!h))return E.current||(E.current=Zl({domNode:S.current,nodeId:h,getStoreItems:()=>{let{nodeLookup:R,transform:A,snapGrid:I,snapToGrid:y,nodeOrigin:_,domNode:M}=w.getState();return{nodeLookup:R,transform:A,snapGrid:I,snapToGrid:y,nodeOrigin:_,paneDomNode:M}},onChange:(R,A)=>{let{triggerNodeChanges:I,nodeLookup:y,parentLookup:_,nodeOrigin:M}=w.getState(),N=[],z={x:R.x,y:R.y},D=y.get(h);if(D&&D.expandParent&&D.parentId){let H=D.origin??M,F=R.width??D.measured.width??0,G=R.height??D.measured.height??0,Y={id:D.id,parentId:D.parentId,rect:{width:F,height:G,...qi({x:R.x??D.position.x,y:R.y??D.position.y},{width:F,height:G},D.parentId,y,H)}},q=lr([Y],y,_,M);N.push(...q),z.x=R.x?Math.max(H[0]*F,R.x):void 0,z.y=R.y?Math.max(H[1]*G,R.y):void 0}if(z.x!==void 0&&z.y!==void 0){let H={id:h,type:"position",position:{...z}};N.push(H)}if(R.width!==void 0&&R.height!==void 0){let F={id:h,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};N.push(F)}for(let H of A){let F={...H,type:"position"};N.push(F)}I(N)},onEnd:({width:R,height:A})=>{let I={id:h,type:"dimensions",resizing:!1,dimensions:{width:R,height:A}};w.getState().triggerNodeChanges([I])}})),E.current.update({controlPosition:P,boundaries:{minWidth:s,minHeight:c,maxWidth:u,maxHeight:l},keepAspectRatio:d,resizeDirection:f,onResizeStart:x,onResize:b,onResizeEnd:g,shouldResize:p}),()=>{E.current?.destroy()}},[P,s,c,u,l,d,x,b,g,p]);let B=P.split("-");return(0,L.jsx)("div",{className:_e(["react-flow__resize-control","nodrag",...B,n,o]),ref:S,style:{...r,scale:v,...a&&{[C?"backgroundColor":"borderColor"]:a}},children:i})}var v1=(0,$.memo)(Hx);async function Ne(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:r})}return r}function Ve(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var Cu=()=>Ne("config");var Nu=()=>Ne("assets"),xr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},Eu=e=>Ne("asset/delete",Ve({id:e})),da=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Ne(`history?${t.toString()}`)},wr=(e=14)=>Ne(`history/stats?days=${e}`),fa=e=>Ne("generate",Ve(e)),_u=e=>Ne(`task?id=${encodeURIComponent(e)}`),Mu=e=>Ne("task/cancel",Ve({id:e})),Iu=(e,t,n)=>Ne("workflow/save",Ve({name:e,nodes:t,edges:n})),pa=()=>Ne("workflow/list"),Pu=e=>Ne(`workflow/load?name=${encodeURIComponent(e)}`),zu=(e,t)=>Ne("recovery/save",Ve({nodes:e,edges:t})),Ru=()=>Ne("recovery/latest"),Du=e=>Ne("settings",Ve({model:e})),vr=e=>Ne("settings",Ve({profile:e})),ma=e=>Ne("settings",Ve({outputDir:e})),Au=e=>Ne("settings",Ve({budget:e})),ga=e=>Ne("settings",Ve({imagoraRoot:e})),Tu=(e={})=>Ne("pick-folder",Ve(e)),kr=e=>Ne("reveal",Ve({path:e})),ha=e=>Ne("provider",Ve(e)),Ou=e=>Ne("provider/probe",Ve(e));var $u=e=>Ne("budget",Ve(e));var Lu=/[\w\u4e00-\u9fa5.-]/;var Bx=/[\p{L}\p{N}]/u;function Hu(e){return e===void 0?!0:!Bx.test(e)}function Bu(e){return e.trim().replace(/\s+/g," ")}function Wx(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&Hu(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Lu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Lu.test(i))break;r+=1}Hu(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function Fx(e){let t=[];for(let n of Wx(e))n.kind==="ref"&&t.push(n.token);return t}function Wu(e,t){let n=Fx(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let u=Bu(c.name);if(u==="")continue;let l=o.get(u);l===void 0?o.set(u,[c.id]):l.includes(c.id)||l.push(c.id)}let r=[],i=new Set,a=[],s=new Set;for(let c of n){let u=Bu(c.name),l=o.get(u);if(l===void 0){s.has(u)||(s.add(u),a.push(u));continue}for(let d of l)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var Vx=/\.(png|jpe?g|webp|gif|bmp)$/i;function Gu(e){return e.type.startsWith("image/")?!0:Vx.test(e.name)}var Fu=30,Vu=200;function Xu(e,t){if(t&&Math.abs(t.x-e.x)<Vu&&Math.abs(t.y-e.y)<Vu){let n={x:t.x+Fu,y:t.y+Fu};return{position:n,next:n}}return{position:e,next:e}}var Gx=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Xx(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!Gx.test(n));return t.length?t.join(" "):void 0}function dn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function Yu(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function qu(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function Yx(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function ba(e,t,n){let o=new Set(n);return{nodes:e.map(i=>{let a=Xx(i.className),s={...i};return a===void 0?delete s.className:s.className=a,s.type==="image"&&o.has(s.data.registryId)?{...s,data:{...s.data,missing:!0}}:s.type==="prompt"?{...s,data:{...s.data,quality:s.data.quality??"high",status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}:s}),edges:Yx(t)}}function dt(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function Uu(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function qx(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Ux(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let u=c.pop();if(a.has(u))continue;a.add(u);let l=o.get(u);l&&(l.type==="prompt"?s.add(u):l.type==="group"&&c.push(...r.get(u)??[]))}n.set(i.data.registryId,s.size)}}function Zu(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of r.get(e)??[]){let u=o.get(c);if(u){if(u.type==="image")a+=1,s.push(u.data.registryId);else if(u.type==="group"){let l=Zu(c,t,n);a+=l.count,s.push(...l.ids)}}}return t.delete(e),{count:a,ids:s}}function Zx(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=Zu(a.id,new Set,t),u=new Set(c);n.set(a.id,u.size),o.set(a.id,Array.from(u).reduce((l,d)=>l+(i.get(d)??0),0)),r.set(a.id,s-u.size)}}function Ku(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=qx(e,t);return Ux(e,a,n),Zx(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function Kx(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=o.get(s);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(u=>u.target===s).forEach(u=>a.push(u.source)))}return r}function ju(e,t,n,o){let r=Kx(e,t,n),i=r.map(u=>({id:u.id,name:u.type==="image"?u.data.name:""})),a=Wu(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(u=>[u.id,u])),c=[];for(let u of a.ids){let l=s.get(u);l&&c.push(l)}return{images:c,unknown:a.unknown,mode:a.mode}}function Sr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function Cr(e,t){return t.reduce((n,o)=>!n||Sr(e,o)<Sr(e,n)?o:n,null)}function co(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function jx(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=Cr(r,n);if(i&&r.position.y>i.position.y){co(e,i,r);continue}let a=Cr(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||Sr(r,a)<Sr(r,i))?co(e,r,a):i&&co(e,r,i)}}function Qx(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=Cr(r,n);a&&co(e,r,a)}}function Jx(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(u=>{let l=o.get(u.source)?.type;return u.target===a.id&&(l==="image"||l==="group")}))continue;let c=Cr(a,i);c&&co(e,c,a)}}function ya(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return jx(a,e,n,o),Qx(a,o,n,i),Jx(a,n,o,r),a.next}function Qu(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?ya(o,t):t}function Ju(e){return`\u751F\u6210\u4E2D ${e}s`}function ce(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var ew=/^=== (.+) ===\s*$/,td=/^```(?:text)?\s*$/,tw=/^ratio:\s*(\d+):(\d+)\s*$/,nw=/^ratio\b/i;function ed(e){return e.split(`
`).some(t=>td.test(t))}function nd(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((u,l)=>{let d=u.match(ew)?.[1];d!==void 0&&a.push({title:d.trim(),line:l})}),a.length===0){let u=t.trim();return u&&i.push(u),ed(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),ed(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let u=0;u<a.length;u++){let l=a[u];if(l===void 0)continue;let{title:d}=l,f=l.line+1,m=a[u+1],p=m===void 0?n.length:m.line,x=n.slice(f,p);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let b=[];x.forEach((B,R)=>{td.test(B)&&b.push(R)});let g=b[0],k=b[b.length-1];if(g===void 0||k===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let h=x.slice(0,g).join(`
`).trim();h&&i.push(h);let w=x.slice(g+1,k),S=w.findIndex(B=>B.trim()!=="");if(S===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let C=(w[S]??"").trim(),v=C.match(tw);if(!v){nw.test(C)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${C}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let E=`${v[1]}:${v[2]}`,P=w.slice(S+1).join(`
`).trim();if(!P){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:E,prompt:P})}return{cards:o,issues:r,skippedText:i}}function wa(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function od(e,t,n){let o=sw(n,e.length);return e.map((r,i)=>{let a=wa(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var xa=380,ow=326,rd=40,rw=74,iw=xa+rd,aw=ow+rw,Nr=3;function sw(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/Nr),a=r%Nr,s=Math.min(Nr,n-i*Nr),c=s*xa+(s-1)*rd,u=e.x+xa/2-c/2;o.push({x:u+a*iw,y:e.y+i*aw})}return o}var lw={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function Er(e){let t=e.measured,n=lw[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var va=[0,.5,1];function id(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function sd(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function ad(e,t,n,o){let r=va.map(s=>id(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&sd(c))for(let u=0;u<va.length;u+=1){let l=va[u];if(l===void 0)continue;let d=id(c,n,l);for(let f=0;f<r.length;f+=1){let m=r[f];if(m===void 0)continue;let p=d-m,x=Math.abs(p);x>=o||x>=a||(a=x,i={delta:p,position:d,targetId:c.id})}}}return i}function _r(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!sd(e)||!Number.isFinite(n)||n<=0)return o;let r=ad(e,t,"x",n),i=ad(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var ld="imagora.canvas-snap.v1";function cd(){try{let e=window.localStorage.getItem(ld);return e===null?!0:e!=="0"}catch{return!0}}function ud(e){try{window.localStorage.setItem(ld,e?"1":"0")}catch{}}function fo(e){let t=Er(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var uo=[];function dd(e,t,n){if(!n)return{changes:e,guides:uo};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:uo};let r=o[0];if(!r)return{changes:e,guides:uo};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:uo};let s={...fo(i),x:a.x,y:a.y},c=[];for(let d of t)d.id!==r.id&&c.push(fo(d));let u=_r(s,c);return u.guides.length===0?{changes:e,guides:uo}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:u.x,y:u.y}}:d),guides:u.guides}}var Ge=require("react");var ka=require("react/jsx-runtime"),fd={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function ze({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=fd[e]||fd.help;return(0,ka.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,ka.jsx)("path",{d:r})})}var Bn=require("react");var Sa=["\u6B63\u5728\u7406\u89E3\u63D0\u793A\u8BCD\u2026","\u6B63\u5728\u6784\u56FE\u2026","\u6B63\u5728\u94FA\u8BBE\u5149\u5F71\u2026","\u6B63\u5728\u7EC6\u5316\u7EC6\u8282\u2026","\u5FEB\u597D\u4E86\uFF0C\u6B63\u5728\u6536\u5C3E\u2026"];function cw(e){let t=Number.isFinite(e)&&e>0?e:0,n=10+(1-Math.exp(-t/28))*88;return Math.min(98,Math.max(10,n))}function pd(e){return cw(e)/100}function Ca(e){let t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/2)%Sa.length;return Sa[n]??Sa[0]??""}function md(e){let t=Number.isFinite(e)&&e>0?Math.floor(e):0;return`\u751F\u6210\u4E2D ${t}s \xB7 ${Ca(t)}`}var fn=require("react/jsx-runtime");function gd({className:e}){let[t,n]=(0,Bn.useState)(0),o=(0,Bn.useRef)(!0);(0,Bn.useEffect)(()=>{o.current=!0;let a=window.setInterval(()=>{o.current&&n(s=>s+1)},1e3);return()=>{o.current=!1,window.clearInterval(a)}},[]);let r=md(t),i=pd(t);return(0,fn.jsxs)("div",{className:`im-pending${e?` ${e}`:""}`,role:"status","aria-live":"polite","aria-label":r,children:[(0,fn.jsx)("div",{className:"im-pending-label",title:r,children:r}),(0,fn.jsx)("div",{className:"im-pending-track","aria-hidden":!0,children:(0,fn.jsx)("div",{className:"im-pending-bar",style:{transform:`scaleX(${i.toFixed(4)})`}})}),(0,fn.jsx)("span",{className:"visually-hidden",children:Ca(t)})]})}var we=require("react"),Nd=require("react-dom");var uw={id:"__custom",label:"\u81EA\u5B9A\u4E49"},dw=64;function hd(e){return e.trim().replace(/\s+/g," ")}function fw(e,t){return e.some(n=>n.value===t)}function bd(e,t){let n=hd(t);return n===""||fw(e,n)?e:[...e,{value:n,label:n,group:uw}]}function yd(e){let t=hd(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>dw?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function xd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var Mr=0;function wd(){Mr+=1}function vd(){Mr=Math.max(0,Mr-1)}function kd(){return Mr>0}var pw=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function Na(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=pw.has(o)?"-":n}return t}function Sd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function mw(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+Sd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,u=n;for(let[l,d]of o.entries()){if(c!==n&&(u=Math.max(u,c+l-2)),e.charAt(l)===t.charAt(i)){let f=1+Sd(e,l),m=n;s!==n&&(m=s+f+4),u!==n&&(m=Math.max(m,u+f+1-l)),a[l]=m}c=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function Cd(e,t){let n=Na(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,c;for(let u of a){let l=Na(u).toLowerCase(),d=mw(l,n);d!==void 0&&(s||=l.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:s,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var ye=require("react/jsx-runtime"),gw=4;function Pt({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:c,"aria-describedby":u,"aria-invalid":l,renderOption:d,title:f}){let[m,p]=(0,we.useState)(!1),[x,b]=(0,we.useState)(-1),[g,k]=(0,we.useState)(""),[h,w]=(0,we.useState)(null),S=(0,we.useRef)(null),C=(0,we.useRef)(null),v=(0,we.useRef)(null),E=(0,we.useId)(),P=`${r??`select-${E}`}-listbox`,B=`${P}-search`,R=(0,we.useMemo)(()=>{if(g.trim()==="")return e;let W=e.map(T=>({name:T.value,label:T.label,option:T}));return Cd(W,g).map(T=>T.option)},[e,g]),A=i===void 0||i==="auto"?e.length>gw:i,I=R.findIndex(W=>W.value===t),y=e.find(W=>W.value===t),_=W=>`${P}-option-${W}`,M=A&&s===!0,N=(0,we.useMemo)(()=>{let W=g.trim();if(W!=="")return R.find(T=>T.value===W||T.label===W)},[R,g]),z=(0,we.useMemo)(()=>{if(!M||N!==void 0)return null;let W=yd(g);return W.ok?W.value:null},[M,N,g]),D=(W=I>=0?I:0)=>{!e.length&&!M||(b(e.length===0?-1:Math.min(Math.max(W,0),e.length-1)),p(!0),A||window.setTimeout(()=>C.current?.focus(),0))},H=(W=!1)=>{p(!1),k(""),W&&window.setTimeout(()=>C.current?.focus(),0)},F=W=>{let T=R[W];T&&(n(T.value),H(!0))},G=W=>{c?.(W),H(!0)},Y=()=>{let W=C.current;if(!W)return;let T=W.getBoundingClientRect(),U=4,ne=8,oe=W.offsetWidth||T.width,Q=Math.max(ne,Math.min(T.left,window.innerWidth-oe-ne)),V=window.innerHeight-T.bottom-U-ne,ee=T.top-U-ne,re=V<160&&ee>V,de=Math.max(120,Math.min(240,re?ee:V));w({left:Q,top:re?Math.max(ne,T.top-U-de):T.bottom+U,width:oe,maxHeight:de})};(0,we.useEffect)(()=>{if(m)return wd(),()=>vd()},[m]),(0,we.useLayoutEffect)(()=>{if(!m)return;Y();let W=()=>Y();window.addEventListener("scroll",W,!0),window.addEventListener("resize",W);let T=typeof ResizeObserver>"u"?null:new ResizeObserver(W);return C.current&&T?.observe(C.current),()=>{T?.disconnect(),window.removeEventListener("scroll",W,!0),window.removeEventListener("resize",W)}},[m]),(0,we.useEffect)(()=>{m&&A&&h&&v.current?.focus()},[m,A,h]),(0,we.useEffect)(()=>{m&&b(W=>R.length===0?-1:Math.min(Math.max(W,0),R.length-1))},[m,R.length]),(0,we.useEffect)(()=>{!e.length&&!M&&m&&(p(!1),b(-1))},[m,e.length,M]),(0,we.useEffect)(()=>{let W=T=>{let U=T.target;S.current?.contains(U)||document.getElementById(P)?.contains(U)||H()};return document.addEventListener("mousedown",W,!0),()=>document.removeEventListener("mousedown",W,!0)},[P]);let q=(W,T)=>{if(W.key==="Tab"){H();return}if(W.key==="Escape"){m&&(W.preventDefault(),H(!0));return}if(W.key==="ArrowDown"||W.key==="ArrowUp"){if(W.preventDefault(),!m){D();return}if(R.length===0)return;let U=W.key==="ArrowDown"?1:-1;b(ne=>(ne+U+R.length)%R.length);return}if(W.key==="Home"||W.key==="End"){if(R.length===0)return;W.preventDefault(),m||p(!0),b(W.key==="Home"?0:R.length-1);return}if(W.key==="Enter"){if(W.preventDefault(),!m){D();return}if(M&&g.trim()!==""){N!==void 0?(n(N.value),H(!0)):z!==null&&G(z);return}F(x);return}!T&&W.key===" "&&(W.preventDefault(),m?F(x):D())},J=(0,we.useMemo)(()=>xd(R),[R]),le=(0,we.useMemo)(()=>{let W=new Map;return R.forEach((T,U)=>W.set(T,U)),W},[R]);return(0,ye.jsxs)("div",{ref:S,className:`im-select-root ${o}`.trim(),children:[(0,ye.jsxs)("button",{ref:C,type:"button",id:r,title:f,onClick:()=>m?H():D(),onKeyDown:W=>q(W,!1),"aria-expanded":m,"aria-haspopup":"listbox","aria-controls":P,"aria-activedescendant":m&&x>=0?_(x):void 0,"aria-describedby":u,"aria-invalid":l,className:`im-select-trigger${m?" is-open":""}`,children:[d&&y?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(y),(0,ye.jsx)("span",{className:"im-select-label",children:y.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:y?.label??"\u8BF7\u9009\u62E9"}),(0,ye.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ye.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),m&&h&&(0,Nd.createPortal)((0,ye.jsxs)("div",{id:P,"data-portal":"select-list",className:"im-select-list",style:{left:h.left,top:h.top,width:h.width,maxHeight:h.maxHeight},children:[A&&(0,ye.jsx)("div",{className:"im-select-search",children:(0,ye.jsx)("input",{ref:v,id:B,type:"text",className:"im-select-search-input",value:g,onChange:W=>k(W.target.value),onKeyDown:W=>q(W,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":P,"aria-activedescendant":x>=0?_(x):void 0})}),(0,ye.jsxs)("ul",{role:"listbox","aria-labelledby":A?B:void 0,className:"im-select-rows",children:[R.length===0&&(0,ye.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),J.map(W=>(0,ye.jsxs)("li",{role:"presentation",className:"im-select-group",children:[W.label!==""&&(0,ye.jsx)("div",{className:"im-select-group-title",role:"presentation",children:W.label}),(0,ye.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:W.rows.map(T=>{let U=le.get(T)??-1,ne=T.value===t,oe=U===x;return(0,ye.jsxs)("li",{id:_(U),role:"option","aria-selected":ne,className:`im-select-option${ne?" is-selected":""}${oe?" is-active":""}`,onMouseEnter:()=>b(U),onMouseDown:Q=>Q.preventDefault(),onClick:()=>F(U),children:[d?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(T),(0,ye.jsx)("span",{className:"im-select-label",children:T.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:T.label}),ne&&(0,ye.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ye.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},T.value)})})]},W.id||"__ungrouped"))]}),z!==null&&(0,ye.jsx)("div",{className:"im-select-custom",children:(0,ye.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:W=>W.preventDefault(),onClick:()=>G(z),children:(0,ye.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",z,"\u201D"]})})})]}),document.body)]})}var Z=require("react/jsx-runtime"),Ea=(0,Ge.createContext)(null),_a=(0,Ge.createContext)(!1);function Ma(){return(0,Ge.useContext)(_a)}function Ia(){let e=(0,Ge.useContext)(Ea);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function Ir(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(un,{type:"target",position:te.Top,className:"im-handle"}),(0,Z.jsx)(un,{type:"source",position:te.Bottom,className:"im-handle"})]})}function Pa({children:e}){return(0,Z.jsx)("div",{className:"im-rail nodrag",children:e})}function zt({label:e,onClick:t,danger:n,children:o}){return(0,Z.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var Md=(0,Ge.memo)(function({id:t,data:n,selected:o}){let r=Ia(),i=Ma(),[a,s]=(0,Ge.useState)(!1),c=n.missing||a;return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${c?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,Z.jsx)(Ir,{}),c?(0,Z.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,Z.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:u=>{u.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,i?null:(0,Z.jsxs)(Pa,{children:[(0,Z.jsx)(zt,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,Z.jsx)(ze,{name:"eye"})}),(0,Z.jsx)(zt,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,Z.jsx)(ze,{name:"crop"})}),(0,Z.jsx)(zt,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,Z.jsx)(ze,{name:"expand"})}),(0,Z.jsx)(zt,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,Z.jsx)(ze,{name:"grid"})}),(0,Z.jsx)(zt,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,Z.jsx)(ze,{name:"wand"})}),(0,Z.jsx)(zt,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,Z.jsx)(ze,{name:"image"})}),(0,Z.jsx)(zt,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-thumb",onDoubleClick:u=>{u.stopPropagation(),r.zoomImage(t)},children:n.url?(0,Z.jsx)("img",{src:n.url,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):(0,Z.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,Z.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Z.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),Ed=4,Id=(0,Ge.memo)(function({id:t,data:n,selected:o}){let r=Ia(),i=Ma(),a=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,c=Math.min(Math.max(n.imageCount-1,0),3);return(0,Z.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,Z.jsx)(Ir,{}),i?null:(0,Z.jsx)(Pa,{children:(0,Z.jsx)(zt,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})}),(0,Z.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:c},(u,l)=>(0,Z.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*Ed}px, ${-(l+1)*Ed}px)`}},l)),(0,Z.jsxs)("div",{className:"im-group-face",children:[(0,Z.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,Z.jsxs)("div",{className:"im-group-size",children:[a," MB"]}),s>0?(0,Z.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function _d({from:e}){let[t,n]=(0,Ge.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ge.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Z.jsx)(Z.Fragment,{children:Ju(t)})}var hw={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"};function bw(e){switch(e.status){case"queued":return{text:"\u6392\u961F\u4E2D",detail:"\u6392\u961F\u4E2D",tone:"is-queued"};case"running":return{text:"\u751F\u6210\u4E2D",detail:"\u751F\u6210\u4E2D",tone:"is-running"};case"done":return{text:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,detail:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,tone:"is-done"};case"failed":return{text:"\u5931\u8D25",detail:e.message?`\u5931\u8D25\uFF1A${e.message}`:"\u5931\u8D25",tone:"is-failed"};default:return{text:"\u5C31\u7EEA",detail:"\u5C31\u7EEA",tone:"is-idle"}}}var Pd=(0,Ge.memo)(function({id:t,data:n,selected:o}){let r=Ia(),i=Ma(),a=r.config,s=n.status==="queued"||n.status==="running",c=a?.sizes??[],u=a?.qualities??[],l=c.some(f=>f.value===n.size)||!n.size?c:[...c,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],d=a?.qualityEffective!==!1;if(i){let f=bw(n);return(0,Z.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Ir,{}),(0,Z.jsx)("div",{className:"im-lod-title",title:n.title??"\u63D0\u793A\u8BCD\u751F\u6210",children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("div",{className:`im-lod-status ${f.tone}`,title:f.detail,children:n.status==="running"?(0,Z.jsx)(_d,{from:n.startedAtMs}):f.text})]})}return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Ir,{}),(0,Z.jsxs)(Pa,{children:[(0,Z.jsx)("span",{className:"im-rail-dot",title:hw[n.status]??"\u5C31\u7EEA",children:(0,Z.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Z.jsx)(zt,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n.prompt,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onChange:f=>r.updatePrompt(t,{prompt:f.target.value})}),(0,Z.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:d?"7fr 3fr":"1fr",marginTop:8},children:[(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,Z.jsx)(Pt,{className:"im-select-fill",options:bd(l,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:f=>r.updatePrompt(t,{size:f})})]}),d?(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,Z.jsx)(Pt,{className:"im-select-fill",options:u.map(f=>({value:f,label:f})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:f=>r.updatePrompt(t,{quality:f})})]}):null]}),(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,Z.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:a?.defaultOutputDir??"",onChange:f=>r.updatePrompt(t,{outputDir:f.target.value})})]}),n.status==="running"?(0,Z.jsx)(gd,{}):null,n.status==="failed"&&n.message?(0,Z.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Z.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!n.prompt.trim(),onClick:f=>{f.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,Z.jsx)(_d,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,Z.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:f=>{f.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var zd=`
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
`;var Rd={image:Md,prompt:Pd,group:Id};function Dd(e,t){return!e&&t<.1?!0:e&&t>.2?!1:e}var pn=require("react/jsx-runtime"),yw="0 0 1024 1024",xw="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function za({size:e=30,fill:t="var(--im-brand)"}){return(0,pn.jsx)("svg",{width:e,height:e,viewBox:yw,fill:t,"aria-hidden":"true",children:(0,pn.jsx)("path",{d:xw})})}function Ad({onClick:e}){return(0,pn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,pn.jsx)(za,{}),(0,pn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var Td=require("react"),mn=require("react/jsx-runtime");function ww(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function Od(e){return(0,Td.useMemo)(()=>ww(e),[e])}function $d({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,mn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,mn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,mn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,mn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,mn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Me=require("react/jsx-runtime");function Ld(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(c,u,l)=>(0,Me.jsx)("button",{type:"button",className:`${l.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:l.title,disabled:l.disabled,onClick:u,children:c});return(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsxs)("div",{className:"im-header",children:[(0,Me.jsx)(Ad,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Me.jsx)(Pt,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,Me.jsx)(Pt,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,Me.jsx)($d,{summary:e.cost,budget:t?.budget??0}),(0,Me.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,Me.jsxs)("div",{className:"im-toolbar",children:[(0,Me.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,Me.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,Me.jsx)("span",{className:"im-drag-grip",children:(0,Me.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,Me.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,Me.jsx)("span",{className:"im-drag-grip",children:(0,Me.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,Me.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,Me.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var He=require("react/jsx-runtime");function Wt({icon:e,label:t,title:n,active:o,onClick:r}){return(0,He.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,He.jsx)(ze,{name:e,size:14}),(0,He.jsx)("span",{className:"im-dock-row-label",children:t})]})}function Hd(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,He.jsxs)("div",{className:"im-dock nodrag",children:[(0,He.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,He.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,He.jsx)(Wt,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,He.jsx)(Wt,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,He.jsx)(Wt,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,He.jsx)(Wt,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,He.jsx)(Wt,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,He.jsx)(Wt,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,He.jsx)(Wt,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,He.jsx)(Wt,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Be=require("react"),Vd=require("react-dom");var Ra="application/x-dsh-imagora-canvas",Pr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},Bd="\u677E\u5F00\u53D6\u6D88";function Da(e){return e.dataTransfer?.types.includes("Files")??!1}function po(e,t){if(Da(e))return"images";let n=e.dataTransfer?.getData(Ra);return n==="prompt"||n==="group"?n:t}function Wd(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Fd(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":Pr[e]}function Aa(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var Rt=require("react/jsx-runtime"),vw=22,kw=28,zr=8;function Gd(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,c]=(0,Be.useState)(null),u=(0,Be.useRef)(null),l=(0,Be.useRef)(0),d=(0,Be.useRef)(null),f=(0,Be.useRef)(null),m=(0,Be.useRef)(null),p=(0,Be.useCallback)((S,C)=>{u.current=S,c(S);let v=m.current;v&&v.textContent!==C&&(v.textContent=C)},[]),x=(0,Be.useCallback)(()=>{u.current=null,l.current=0,c(null),f.current?.classList.remove("is-outside")},[]),b=(0,Be.useCallback)((S,C)=>{let v=d.current;if(!v)return;let E=Math.min(S+vw,window.innerWidth-v.offsetWidth-zr),P=Math.min(C+kw,window.innerHeight-v.offsetHeight-zr);v.style.transform=`translate(${Math.max(zr,E)}px, ${Math.max(zr,P)}px)`},[]),g=(0,Be.useCallback)((S,C,v)=>{let E=t.current;if(!E)return o();let P=E.getBoundingClientRect(),B=v?Math.min(Math.max(S,P.left),P.left+P.width):S,R=v?Math.min(Math.max(C,P.top),P.top+P.height):C;return r({x:B,y:R})},[t,o,r]);(0,Be.useEffect)(()=>{let S=E=>{Da(E)&&E.preventDefault()},C=E=>{let P=u.current;if(!P||P==="images")return;b(E.clientX,E.clientY);let B=t.current,R=!!(B&&Aa(E.clientX,E.clientY,B.getBoundingClientRect())),A=R?Pr[P]:Bd,I=m.current;I&&I.textContent!==A&&(I.textContent=A),f.current?.classList.toggle("is-outside",!R)},v=()=>{l.current=0,x()};return window.addEventListener("dragover",S),window.addEventListener("dragover",C),window.addEventListener("drop",S),window.addEventListener("dragend",v),window.addEventListener("blur",v),()=>{window.removeEventListener("dragover",S),window.removeEventListener("dragover",C),window.removeEventListener("drop",S),window.removeEventListener("dragend",v),window.removeEventListener("blur",v)}},[t,x,b]);let k={onDragEnter:S=>{if(n)return;let C=po(S,u.current);C&&(S.preventDefault(),C==="images"&&(l.current+=1),p(C,Fd(C,Wd(S.dataTransfer))),b(S.clientX,S.clientY))},onDragOver:S=>{n||!po(S,u.current)||(S.preventDefault(),S.dataTransfer.dropEffect="copy",b(S.clientX,S.clientY))},onDragLeave:S=>{n||po(S,u.current)==="images"&&(l.current-=1,l.current<=0&&x())},onDrop:S=>{if(n)return;let C=po(S,u.current);if(!C)return;S.preventDefault();let v=t.current,E=!v||Aa(S.clientX,S.clientY,v.getBoundingClientRect());if(x(),C==="images"){let P=Array.from(S.dataTransfer.files??[]);if(!P.length)return;i(P,g(S.clientX,S.clientY,!0));return}E&&a(C,g(S.clientX,S.clientY,!1))}},h=(0,Be.useCallback)((S,C)=>{S.dataTransfer.setData(Ra,C),S.dataTransfer.effectAllowed="copy",p(C,Pr[C]),b(S.clientX,S.clientY)},[b,p]),w=(0,Vd.createPortal)((0,Rt.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,Rt.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,Rt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,Rt.jsx)(ze,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,Rt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,Rt.jsx)(ze,{name:"close",size:14})}),(0,Rt.jsx)("span",{ref:m,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:w,dragHandlers:k,startToolbarDrag:h,hideDropChip:x}}var Xd="dsh-imagora.canvas-minimap.v1";function Yd(){try{let e=localStorage.getItem(Xd);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function qd(e){try{localStorage.setItem(Xd,e?"1":"0")}catch{}}var Ft=require("react/jsx-runtime");function Ud(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,Ft.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Ft.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Ft.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u5C40\u90E8\u6574\u7406\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u540C\u5C42\u63D0\u793A\u8BCD\u5361\u7247\u6309\u5DE6\u4E0A\u89D2\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Ft.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Ft.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Ft.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var qe=require("react/jsx-runtime");function Zd(){return(0,qe.jsxs)("div",{className:"im-empty",children:[(0,qe.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,qe.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,qe.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var Sw=5;function Kd({logs:e}){if(!e.length)return null;let t=e.slice(-Sw);return(0,qe.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,qe.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var Cw={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function jd({text:e}){return e?(0,qe.jsx)("div",{style:Cw,children:e}):null}function Qd({tone:e,children:t,action:n}){return(0,qe.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,qe.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,qe.jsx)(ze,{name:e==="error"?"help":"clock"})}),(0,qe.jsx)("span",{className:"im-banner-text",children:t}),n?(0,qe.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var ve=require("react"),af=require("react-dom");async function Nw(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function Jd(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await Nw(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function ef(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var mo=e=>Math.min(8,Math.max(.2,e));function tf(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function nf(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function of(e,t,n){return Math.round(e*nf(t,n)*100)}function rf(e,t){let n=nf(e,t);return n?mo(1/n):1}var he=require("react/jsx-runtime"),Rr=1.2,Ew=5;function Dr({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,ve.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,ve.useState)(!1),[c,u]=(0,ve.useState)(null),l=(0,ve.useRef)(null),d=(0,ve.useRef)(!1),f=c?.kind==="copying",m=(0,ve.useRef)(null),[p,x]=(0,ve.useState)(null),b=(0,ve.useRef)({width:0,height:0}),g=(0,ve.useRef)(null),k=(0,ve.useRef)(null),h=(0,ve.useRef)(null),w=(0,ve.useRef)(null),S=(0,ve.useCallback)(N=>{let z=h.current;return z?{zoom:N.zoom,pan:tf(N.pan,N.zoom,b.current,{width:z.clientWidth,height:z.clientHeight})}:N},[]),C=(0,ve.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),v=(0,ve.useCallback)(()=>{let N=w.current;if(!N)return;b.current={width:N.clientWidth,height:N.clientHeight};let z={width:N.naturalWidth,height:N.naturalHeight};m.current=z,x(D=>D&&D.width===z.width&&D.height===z.height?D:z)},[]);(0,ve.useEffect)(()=>{let N=()=>v();return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[v]);let E=(0,ve.useCallback)(()=>{let N=rf(m.current,b.current);i(z=>S({zoom:N,pan:z.pan}))},[S]),P=(0,ve.useCallback)(()=>{let N=m.current,z=k.current;if(!N||!z)return;let D=z.clientWidth*.98,H=z.clientHeight*.98,F=mo(Math.min(1,D/N.width,H/N.height));i({zoom:F,pan:{x:0,y:0}})},[]);(0,ve.useEffect)(()=>{let N=h.current;if(!N)return;let z=D=>{D.preventDefault(),D.stopPropagation();let H=N.getBoundingClientRect(),F=D.clientX-H.left-H.width/2,G=D.clientY-H.top-H.height/2;i(Y=>{let q=mo(D.deltaY<0?Y.zoom*Rr:Y.zoom/Rr);if(q===Y.zoom)return Y;let J=q/Y.zoom;return S({zoom:q,pan:{x:F-(F-Y.pan.x)*J,y:G-(G-Y.pan.y)*J}})})};return N.addEventListener("wheel",z,{passive:!1}),()=>N.removeEventListener("wheel",z)},[S]),(0,ve.useEffect)(()=>{let N=z=>{z.key==="Escape"&&o()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[o]),(0,ve.useEffect)(()=>()=>{l.current&&window.clearTimeout(l.current)},[]);let B=(N,z)=>{u({kind:N,text:z}),l.current&&window.clearTimeout(l.current),l.current=N==="copying"?null:window.setTimeout(()=>u(null),1200)},R=async(N,z)=>{if(!d.current){d.current=!0,B("copying","\u590D\u5236\u4E2D\u2026");try{await N(),B("copied",z)}catch(D){B("failed",D instanceof Error?D.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},A=N=>{r.zoom<=1||(N.preventDefault(),N.stopPropagation(),N.currentTarget instanceof Element&&N.currentTarget.setPointerCapture(N.pointerId),g.current={startX:N.clientX,startY:N.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:N.target===w.current},s(!0))},I=N=>{let z=g.current;if(!z)return;let D=N.clientX-z.startX,H=N.clientY-z.startY;!z.moved&&Math.hypot(D,H)<=Ew||(z.moved=!0,i(F=>S({...F,pan:{x:z.panX+D,y:z.panY+H}})))},y=()=>{let N=g.current;g.current=null,s(!1),N&&!N.moved&&!N.onImage&&o()},_=N=>{let z=N.target instanceof Element?N.target:null;z&&(z.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},M=N=>i(z=>S({...z,zoom:mo(z.zoom*N)}));return(0,af.createPortal)((0,he.jsxs)("div",{ref:k,className:"im-zoom-overlay",onPointerDown:_,onClick:N=>N.stopPropagation(),children:[(0,he.jsx)("div",{ref:h,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:A,onPointerMove:I,onPointerUp:y,onPointerCancel:y,onDoubleClick:N=>{N.stopPropagation(),C()},children:(0,he.jsx)("img",{ref:w,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let N=w.current;N&&(m.current={width:N.naturalWidth,height:N.naturalHeight},b.current={width:N.clientWidth,height:N.clientHeight},v())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,he.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,he.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,he.jsx)("div",{"aria-hidden":!0}),(0,he.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,he.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,he.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>M(1/Rr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9"})})}),(0,he.jsxs)("span",{className:"im-zoom-readout",title:`${p?`${p.width}\xD7${p.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[of(r.zoom,p,b.current),"%"]}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>M(Rr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:P,children:"\u9002\u5E94\u7A97\u53E3"}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:E,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void R(()=>Jd(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void R(()=>ef(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,he.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),c?(0,he.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var Ta=require("react");var Vt=require("react"),cf=require("react-dom");var yt=require("react/jsx-runtime"),sf=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),go=[];function lf(e){return go[go.length-1]===e}function Te({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:c=!1,headerless:u=!1}){let l=`im-modal-${(0,Vt.useId)()}`,d=`${l}-title`,f=(0,Vt.useRef)(null),m=(0,Vt.useRef)(null),p=(0,Vt.useRef)(o);return p.current=o,(0,Vt.useEffect)(()=>{m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,go.push(l);let b=f.current;(a?.current??b?.querySelector(sf)??b)?.focus();let k=h=>{if(!lf(l))return;if(h.key==="Escape"){if(kd())return;h.preventDefault(),h.stopPropagation(),p.current();return}if(h.key!=="Tab"||!b)return;let w=Array.from(b.querySelectorAll(sf)).filter(v=>!v.hidden&&v.getAttribute("aria-hidden")!=="true");if(!w.length){h.preventDefault(),b.focus();return}let S=w[0],C=w[w.length-1];!S||!C||(h.shiftKey&&(document.activeElement===S||!b.contains(document.activeElement))?(h.preventDefault(),C.focus()):!h.shiftKey&&document.activeElement===C&&(h.preventDefault(),S.focus()))};return document.addEventListener("keydown",k,!0),()=>{document.removeEventListener("keydown",k,!0);let h=go.lastIndexOf(l);h>=0&&go.splice(h,1);let w=m.current;window.setTimeout(()=>w?.focus(),0)}},[a]),(0,cf.createPortal)((0,yt.jsx)("div",{className:`im-modal-shell${c?" im-modal-shell--nested":""}`,onMouseDown:b=>{s&&b.target===b.currentTarget&&lf(l)&&o()},children:(0,yt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:b=>b.stopPropagation(),children:[u?(0,yt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,yt.jsxs)("header",{className:"im-modal-header",children:[(0,yt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,yt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,yt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,yt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ue=require("react/jsx-runtime");function uf({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,Ta.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,Ta.useState)(null),c=r.trim(),u=e.some(d=>d.name===c),l=()=>{if(c){if(u&&a!==c){s(c);return}n(c)}};return a?(0,ue.jsx)(Te,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,ue.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,ue.jsxs)(Te,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c,onClick:l,children:"\u4FDD\u5B58"})]}),children:[(0,ue.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&l()}}),(0,ue.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,ue.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,ue.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,ue.jsx)("span",{className:"im-pick-name",children:d.name}),(0,ue.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function df({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,ue.jsx)(Te,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,ue.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,ue.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,ue.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,ue.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,ue.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var _w=[["\u753B\u5E03","Shift+\u62D6\u62FD\u6846\u9009 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8"],["\u8282\u70B9","\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C/\u6574\u7406/\u8FDE\u7EBF/\u8BBE\u8DEF\u5F84/\u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88"],["\u8FDE\u7EBF","\u56FE\u7247\u2192\u63D0\u793A\u8BCD/\u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u4EC5\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete/Backspace \u5220\u9664\u8FDE\u7EBF"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function ff({onClose:e,config:t}){return(0,ue.jsx)(Te,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u62D6\u5165\u56FE\u7247 \xB7 Shift+\u62D6\u62FD\u6846\u9009",size:"md",onClose:e,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,ue.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ue.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:_w.map(([n,o])=>(0,ue.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,ue.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,ue.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,ue.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,ue.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var Je=require("react");function Ue(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function mf(e,t=.06){let n=Ue(e.width,t,1),o=Ue(e.height,t,1);return{width:n,height:o,x:Ue(e.x,0,1-n),y:Ue(e.y,0,1-o)}}function gf(e,t,n){return{...e,x:Ue(e.x+t,0,1-e.width),y:Ue(e.y+n,0,1-e.height)}}function hf(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let l=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=l,a.height*=l,a.width<.06||a.height<.06){let m=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=m,a.height*=m}a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);return a.x=Ue(a.x,0,1-a.width),a.y=Ue(a.y,0,1-a.height),a}function bf(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ue(e.x+(e.width-r)/2,0,1-r),y:Ue(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function Oa(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Mw(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function yf(e,t){let n=Mw(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function $a(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Gt(e){let t=await $a(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function xf(e,t){let n=await $a(e);if(t)return pf(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return pf(n,r,i,o,o)}async function wf(e,t){let n=await $a(e),{width:o,height:r}=Oa(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?Iw(n,o,r):vf(n,n.width,n.height,o,r,t.algorithm)}function pf(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function Iw(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=kf(o,r,i,a,s,"high"),r=a,i=s}return vf(o,r,i,t,n,"high")}function vf(e,t,n,o,r,i){return kf(e,t,n,o,r,i).toDataURL("image/png")}function kf(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Re=require("react/jsx-runtime"),Sf=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],zw=["nw","n","ne","e","se","s","sw","w"],La={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function Cf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Je.useRef)(null),[i,a]=(0,Je.useState)(null),[s,c]=(0,Je.useState)({x:.08,y:.08,width:.84,height:.84}),[u,l]=(0,Je.useState)(null),[d,f]=(0,Je.useState)(!1),[m,p]=(0,Je.useState)(null),x=(0,Je.useRef)(null);(0,Je.useEffect)(()=>{let v=!0;return Gt(e).then(E=>{v&&(a(E),c(mf({x:.06,y:.06,width:.88,height:.88})))}).catch(E=>{v&&p(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(E)}`)}),()=>{v=!1}},[e]);let b=v=>{l(v),i&&v!==null&&c(E=>bf(E,v,i))},g=(v,E)=>{v.stopPropagation(),v.target.setPointerCapture?.(v.pointerId),x.current={mode:E,startX:v.clientX,startY:v.clientY,base:s}},k=(0,Je.useCallback)(v=>{let E=x.current,P=r.current;if(!E||!P)return;let B=P.getBoundingClientRect();if(!B.width||!B.height)return;let R=(v.clientX-E.startX)/B.width,A=(v.clientY-E.startY)/B.height;c(E.mode==="move"?gf(E.base,R,A):hf(E.base,R,A,E.mode,u,i??{width:1,height:1}))},[u,i]),h=()=>{x.current=null},w=async()=>{f(!0),p(null);try{let v=await xf(e,s),E=Math.round(s.width*(i?.width??0)),P=Math.round(s.height*(i?.height??0));await o(v,`\u88C1\u526A ${E}\xD7${P}${u?` \xB7 ${Sf.find(B=>B.ratio===u)?.label}`:""}`)}catch(v){p(`\u88C1\u526A\u5931\u8D25\uFF1A${ce(v)}`)}finally{f(!1)}},S=i?Math.round(s.width*i.width):0,C=i?Math.round(s.height*i.height):0;return(0,Re.jsx)(Te,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",S," \xD7 ",C,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${yf(i.width,i.height)}`:"",(0,Re.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||S<8||C<8,onClick:()=>void w(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":"\u88C1\u526A\u6BD4\u4F8B",children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),Sf.map(v=>{let E=v.ratio===u;return(0,Re.jsx)("button",{type:"button","aria-pressed":E,className:`im-chip im-chip--sm im-chip--action${E?" is-brand":""}`,onClick:()=>b(v.ratio),children:v.label},v.label)}),(0,Re.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[S," \xD7 ",C,"px"]})]}),(0,Re.jsxs)("div",{ref:r,onPointerMove:k,onPointerUp:h,onPointerCancel:h,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Re.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Re.jsx)("div",{onPointerDown:v=>g(v,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:zw.map(v=>(0,Re.jsx)("span",{onPointerDown:E=>g(E,v),style:{position:"absolute",left:La[v].left,top:La[v].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:La[v].cursor}},v))})]}),m?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:m}):null]})})}var We=require("react");function Ha(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Ba(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Wa(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Ba(e)*n/2}function Nf(e,t,n=.004){if(!Ha(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function Ef(e,t,n,o){if(!Ha(e)||!Ha(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/r);if(c<=1)return[];let u=Math.min(c,2048),l=[];for(let d=1;d<u;d+=1){let f=d/u;l.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return l}function Rw(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function _f(e){return!Rw(e)}var De=require("react/jsx-runtime"),Ar=640;function Mf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,We.useRef)(null),i=(0,We.useRef)(!1),[a,s]=(0,We.useState)(null),[c,u]=(0,We.useState)(null),[l,d]=(0,We.useState)([]),[f,m]=(0,We.useState)("paint"),[p,x]=(0,We.useState)(.08),[b,g]=(0,We.useState)(!1),[k,h]=(0,We.useState)(null);(0,We.useEffect)(()=>{let A=!0;Gt(e).then(y=>{A&&s(y)}).catch(y=>{A&&h(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(y)}`)});let I=new Image;return I.crossOrigin="anonymous",I.onload=()=>{A&&u(I)},I.src=e,()=>{A=!1,u(null)}},[e]);let w=(0,We.useMemo)(()=>a?a.width>=a.height?{width:Ar,height:Math.round(a.height/a.width*Ar)}:{width:Math.round(a.width/a.height*Ar),height:Ar}:{width:0,height:0},[a]);(0,We.useEffect)(()=>{let A=r.current;if(!A||!c||!w.width)return;let I=A.getContext("2d");if(!I||(A.width=w.width,A.height=w.height,I.clearRect(0,0,w.width,w.height),I.drawImage(c,0,0,w.width,w.height),!a))return;let y=Wa(p,{width:w.width,height:w.height});I.save(),I.globalAlpha=.55,I.fillStyle="#ffffff",I.strokeStyle="#ffffff",I.lineWidth=y*2,I.lineCap="round",I.lineJoin="round";for(let _ of l){_.mode==="erase"?(I.globalCompositeOperation="destination-out",I.strokeStyle="#000",I.fillStyle="#000"):(I.globalCompositeOperation="source-over",I.strokeStyle="#ffffff",I.fillStyle="#ffffff");let M=_.points;if(M.length&&(I.beginPath(),I.arc(M[0].x*w.width,M[0].y*w.height,y,0,Math.PI*2),I.fill(),M.length>1)){I.beginPath(),I.moveTo(M[0].x*w.width,M[0].y*w.height);for(let N of M.slice(1))I.lineTo(N.x*w.width,N.y*w.height);I.stroke()}}I.restore()},[w,l,p,a,c]);let S=A=>{let I=r.current;if(!I)return null;let y=I.getBoundingClientRect();return!y.width||!y.height?null:{x:Math.min(1,Math.max(0,(A.clientX-y.left)/y.width)),y:Math.min(1,Math.max(0,(A.clientY-y.top)/y.height))}},C=A=>{let I=S(A);I&&(A.currentTarget.setPointerCapture?.(A.pointerId),i.current=!0,d(y=>[...y,{mode:f,size:p,points:[I]}]))},v=A=>{if(!i.current)return;let I=S(A);I&&d(y=>{let _=y[y.length-1];if(!_)return y;let M=Nf(_.points,I);return M===_.points?y:[...y.slice(0,-1),{..._,points:M}]})},E=()=>{i.current=!1},P=async()=>{if(!c||!a)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let A=document.createElement("canvas");A.width=a.width,A.height=a.height;let I=A.getContext("2d");if(!I)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");I.fillStyle="#ffffff",I.fillRect(0,0,a.width,a.height);let y=Wa(p,{width:a.width,height:a.height});I.globalCompositeOperation="destination-out",I.lineWidth=y*2,I.lineCap="round",I.lineJoin="round",I.strokeStyle="#000",I.fillStyle="#000";for(let _ of l){if(_.mode!=="paint")continue;let M=Ef(_.points[0],_.points[_.points.length-1],y/4,{width:a.width,height:a.height});if(M.length&&(I.beginPath(),I.arc(M[0].x*a.width,M[0].y*a.height,y,0,Math.PI*2),I.fill(),M.length>1)){I.beginPath(),I.moveTo(M[0].x*a.width,M[0].y*a.height);for(let N of M.slice(1))I.lineTo(N.x*a.width,N.y*a.height);I.stroke()}}return A.toDataURL("image/png")},B=async()=>{g(!0),h(null);try{let A=await P();await o(A,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(A){h(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${ce(A)}`)}finally{g(!1)}},R=_f(l);return(0,De.jsx)(Te,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:b||R,onClick:()=>void B(),children:b?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",label:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"},{mode:"erase",label:"\u64E6"}].map(A=>(0,De.jsx)("button",{type:"button","aria-pressed":f===A.mode,className:`im-chip im-chip--sm im-chip--action${f===A.mode?" is-brand":""}`,onClick:()=>m(A.mode),children:A.label},A.mode)),(0,De.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,De.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(p*100),onChange:A=>x(Ba(Number(A.target.value)/100)),className:"im-range"}),(0,De.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(p*100),"%"]})]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>d([]),children:"\u6E05\u7A7A"}),(0,De.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,De.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,De.jsx)("canvas",{ref:r,onPointerDown:C,onPointerMove:v,onPointerUp:E,onPointerCancel:E,style:{width:w.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,De.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",a?` \xB7 \u539F\u56FE ${a.width} \xD7 ${a.height}`:""]}),k?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:k}):null]})})}var ge=require("react");var Xt=require("react"),If=require("react-dom"),gn=require("react/jsx-runtime");function Pf({text:e}){let t=(0,Xt.useRef)(null),n=(0,Xt.useRef)(null),[o,r]=(0,Xt.useState)(null),[i,a]=(0,Xt.useState)(0),s=l=>{let d=t.current;d&&d.scrollHeight>d.clientHeight&&r(l.clientY)},c=l=>{r(d=>d!==null?l.clientY:d)},u=()=>{r(null),a(0)};return(0,Xt.useLayoutEffect)(()=>{if(o!==null&&n.current){let l=n.current.getBoundingClientRect();a(Math.max(8,Math.min(o+16,window.innerHeight-l.height-8)))}},[o,e]),(0,gn.jsxs)(gn.Fragment,{children:[(0,gn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:c,onMouseLeave:u,children:e}),o!==null?(0,If.createPortal)((0,gn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var j=require("react/jsx-runtime"),zf=60;function Rf(e){return Number.isFinite(e)?`${e.toFixed(2)} \u5143`:"-"}function Ow(e){let t=e.total?`${e.successRate.toFixed(1)}%`:"-";return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:Rf(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:Rf(e.cost)},{label:"\u6210\u529F\u7387",value:`${t}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:e.avgSeconds>0?`${e.avgSeconds.toFixed(1)}s`:"-"}]}function $w(e){return e.replace(/[\\/][^\\/]+$/,"")}function Df({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,c]=(0,ge.useState)(""),[u,l]=(0,ge.useState)(!1),[d,f]=(0,ge.useState)(0),[m,p]=(0,ge.useState)(!0),[x,b]=(0,ge.useState)(!1),[g,k]=(0,ge.useState)(""),[h,w]=(0,ge.useState)("ledger"),[S,C]=(0,ge.useState)(""),[v,E]=(0,ge.useState)(null),[P,B]=(0,ge.useState)(new Map),[R,A]=(0,ge.useState)(null),[I,y]=(0,ge.useState)({dailyLimit:0,singleRunLimit:0}),[_,M]=(0,ge.useState)(!1),[N,z]=(0,ge.useState)(""),D=(0,ge.useRef)(null),H=(0,ge.useRef)(0),F=(0,ge.useRef)([]),G=(0,ge.useRef)(i),Y=(0,ge.useRef)(s);G.current=i,Y.current=s;let q=(0,ge.useCallback)(async V=>{let ee=++H.current;p(!0),k("");try{let re=await da({limit:zf,offset:0,query:V?.query??G.current,status:V?.status??Y.current});if(ee!==H.current)return;let de=Array.isArray(re.items)?re.items:[];w(re.source==="ledger"?"ledger":"none"),C(typeof re.ledgerPath=="string"?re.ledgerPath:""),r(de),F.current=de,l(re.hasMore===!0),f(Number(re.total)||de.length)}catch(re){ee===H.current&&k(ce(re))}finally{ee===H.current&&p(!1)}},[]),J=(0,ge.useCallback)(async()=>{if(x||!u)return;let V=H.current;b(!0);try{let ee=await da({limit:zf,offset:F.current.length,query:G.current,status:Y.current});if(V!==H.current)return;let re=Array.isArray(ee.items)?ee.items:[];r(de=>[...de,...re]),F.current=[...F.current,...re],l(ee.hasMore===!0),f(Number(ee.total)||F.current.length)}catch(ee){V===H.current&&k(ce(ee))}finally{V===H.current&&b(!1)}},[u,x]);(0,ge.useEffect)(()=>{q(),wr().then(E).catch(()=>E(null)),Nu().then(V=>B(new Map((V?.images??[]).map(ee=>[ee.id,ee])))).catch(()=>B(new Map))},[q]),(0,ge.useEffect)(()=>{v?.localBudget&&y({dailyLimit:v.localBudget.dailyLimit,singleRunLimit:v.localBudget.singleRunLimit})},[v]);let le=async()=>{M(!0),z("");try{await $u(I);let V=await wr();E(V),z("\u9884\u7B97\u5DF2\u4FDD\u5B58")}catch(V){z(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(V)}`)}finally{M(!1)}},W=600,T=(0,ge.useCallback)(()=>{let V=D.current;V&&V.scrollHeight-V.scrollTop-V.clientHeight<W&&J()},[J]),U=(0,ge.useMemo)(()=>o.filter(V=>V.status==="error"&&V.inputRefMissing).length,[o]),ne=v?Ow(v):[],oe=v?.bySize.slice(0,3)??[],Q=S||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Te,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,j.jsxs)("div",{className:"im-history",children:[(0,j.jsxs)("div",{className:"im-history-bar",children:[(0,j.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,j.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:V=>a(V.target.value),onKeyDown:V=>{V.key==="Enter"&&q()}}),(0,j.jsxs)("select",{className:"im-field im-history-status",value:s,"aria-label":"\u6309\u72B6\u6001\u7B5B\u9009",onChange:V=>{c(V.target.value),q({status:V.target.value})},children:[(0,j.jsx)("option",{value:"",children:"\u5168\u90E8\u72B6\u6001"}),(0,j.jsx)("option",{value:"ok",children:"\u6210\u529F"}),(0,j.jsx)("option",{value:"error",children:"\u5931\u8D25"})]}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void q(),children:"\u641C\u7D22"}),(0,j.jsxs)("div",{className:"im-history-bar-end",children:[U>0?(0,j.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[U," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),ne.length?(0,j.jsxs)("div",{className:"im-history-stats",children:[(0,j.jsxs)("div",{className:"im-history-stat-grid",children:[ne.map(V=>(0,j.jsxs)("div",{className:"im-history-stat",children:[(0,j.jsx)("div",{className:"im-history-stat-label",children:V.label}),(0,j.jsx)("div",{className:"im-history-stat-value",children:V.value})]},V.label)),oe.length?(0,j.jsxs)("div",{className:"im-history-stat",children:[(0,j.jsx)("div",{className:"im-history-stat-label",children:"\u6309\u5C3A\u5BF8"}),(0,j.jsx)("div",{className:"im-history-stat-value",children:oe.map(V=>`${V.size} \xD7${V.count}`).join(" \xB7 ")})]}):null]}),(0,j.jsxs)("div",{className:"im-history-budget",children:[(0,j.jsxs)("label",{className:"im-history-budget-field",children:[(0,j.jsx)("span",{className:"im-history-budget-label",children:"\u65E5\u9884\u7B97"}),(0,j.jsx)("input",{type:"number",min:0,step:.01,className:"im-field im-history-budget-input",value:I.dailyLimit,title:"\u5F53\u65E5\u7D2F\u8BA1\u8D39\u7528\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4",onChange:V=>y(ee=>({...ee,dailyLimit:Number(V.target.value)||0}))})]}),(0,j.jsxs)("label",{className:"im-history-budget-field",children:[(0,j.jsx)("span",{className:"im-history-budget-label",children:"\u5355\u6B21\u4E0A\u9650"}),(0,j.jsx)("input",{type:"number",min:0,step:.01,className:"im-field im-history-budget-input",value:I.singleRunLimit,title:"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650",onChange:V=>y(ee=>({...ee,singleRunLimit:Number(V.target.value)||0}))})]}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:_||m,onClick:()=>void le(),children:_?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u9884\u7B97"}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:m,onClick:()=>void wr().then(E).catch(()=>{}),children:"\u5237\u65B0"}),N?(0,j.jsx)("span",{className:"im-history-budget-tip",children:N}):null]})]}):null,(0,j.jsxs)("div",{ref:D,className:"im-history-list",onScroll:T,"data-testid":"history-list",children:[g?(0,j.jsx)("div",{className:"im-history-error",children:g}):null,m?(0,j.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("ul",{className:"im-history-rows",children:o.map((V,ee)=>{let re=V.assetId?P.get(V.assetId):void 0,de=!!re;return(0,j.jsxs)("li",{className:"im-history-row",children:[(0,j.jsx)("div",{className:"im-history-thumb",children:V.url?(0,j.jsx)("img",{src:V.url,alt:V.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>A({url:V.url,path:V.path})}):(0,j.jsx)("span",{className:"im-history-thumb-empty",children:V.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,j.jsxs)("div",{className:"im-history-main",children:[(0,j.jsx)(Pf,{text:V.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,j.jsxs)("p",{className:"im-history-meta",children:[V.time||"-"," \xB7 ",V.quality||"-"," \xB7 ",V.size||"-"]}),V.inputRefs.length?(0,j.jsx)("div",{className:"im-history-refs",children:V.inputRefs.map(Se=>(0,j.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,j.jsx)("img",{src:Se.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>A({url:Se.url,path:Se.path})})},Se.id))}):null,V.inputRefMissing?(0,j.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,j.jsxs)("div",{className:"im-history-actions",children:[(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!V.prompt,onClick:()=>void navigator.clipboard.writeText(V.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!V.path,onClick:()=>void kr($w(V.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,j.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!de,title:de?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{re&&t([re])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${V.time}-${V.output}-${ee}`)})}),(0,j.jsx)("div",{className:"im-history-pager",children:x?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":u?(0,j.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void J(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):h==="none"?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,j.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,j.jsx)("code",{children:Q}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,j.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),R?(0,j.jsx)(Dr,{imageUrl:R.url,...R.path?{copyPath:R.path}:{},onClose:()=>A(null)}):null]})}var xt=require("react");var Ee=require("react/jsx-runtime");async function Lw(e,t,n,o){let r=await new Promise((c,u)=>{let l=new Image;l.onload=()=>c(l),l.onerror=()=>u(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),l.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let c=0;c<n;c+=1)for(let u=0;u<t;u+=1){let l=document.createElement("canvas");l.width=i,l.height=a;let d=l.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,u*i,c*a,i,a,0,0,i,a),s.push(l.toDataURL("image/png"))}return s}var Hw="52vh";function Af({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,xt.useState)(null),[i,a]=(0,xt.useState)(2),[s,c]=(0,xt.useState)(2),[u,l]=(0,xt.useState)(!1),[d,f]=(0,xt.useState)(null);(0,xt.useEffect)(()=>{let b=!0;return Gt(e).then(g=>{b&&r(g)}).catch(g=>{b&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(g)}`)}),()=>{b=!1}},[e]);let m=(0,xt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),p=async()=>{if(o){l(!0),f(null);try{let b=await Lw(e,i,s,o);await n(b.map((g,k)=>({dataUrl:g,note:`\u5207\u5206 ${k+1}/${b.length}`})))}catch(b){f(`\u5207\u5206\u5931\u8D25\uFF1A${ce(b)}`)}finally{l(!1)}}},x=i*s;return(0,Ee.jsx)(Te,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||x<2,onClick:()=>void p(),children:u?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${x} \u5F20`})]}),children:(0,Ee.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ee.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,Ee.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,Ee.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:b=>a(Number(b.target.value)),className:"im-range"}),(0,Ee.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,Ee.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,Ee.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:b=>c(Number(b.target.value)),className:"im-range"}),(0,Ee.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,Ee.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[x," \u5F20 \xB7 \u6BCF\u5F20 ",m.w," \xD7 ",m.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,Ee.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,Ee.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${Hw} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(b,g)=>(0,Ee.jsx)("span",{style:{position:"absolute",left:`${(g+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${g}`)),Array.from({length:s-1},(b,g)=>(0,Ee.jsx)("span",{style:{position:"absolute",top:`${(g+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${g}`))]})}),(0,Ee.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,Ee.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var wt=require("react");var Ie=require("react/jsx-runtime"),Tf=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],Of=[1024,1536,2048,3072,4096];function Lf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,wt.useState)(null),[i,a]=(0,wt.useState)(2048),[s,c]=(0,wt.useState)("high"),[u,l]=(0,wt.useState)(!1),[d,f]=(0,wt.useState)(null);(0,wt.useEffect)(()=>{let g=!0;return Gt(e).then(k=>{if(!g)return;r(k);let h=Math.max(k.width,k.height),w=Of.find(S=>S>h)??4096;a(w)}).catch(k=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(k)}`)}),()=>{g=!1}},[e]);let m=(0,wt.useMemo)(()=>o?Oa(o.width,o.height,i):{width:0,height:0},[o,i]),p=o&&o.width>0?m.width/o.width:0,x=!!o&&m.width<o.width,b=async()=>{l(!0),f(null);try{let g=await wf(e,{targetLongEdge:i,algorithm:s});await n(g,`\u653E\u5927 ${m.width}\xD7${m.height} \xB7 ${Tf.find(k=>k.value===s)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${ce(g)}`)}finally{l(!1)}};return(0,Ie.jsx)(Te,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||m.width<8||m.height<8,onClick:()=>void b(),children:u?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ie.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),Of.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(g),children:g},g))]}),(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),Tf.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g.value===s,className:`im-btn-sm ${g.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(g.value),children:g.label},g.value))]}),(0,Ie.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Ie.jsxs)(Ie.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Ie.jsxs)("b",{style:{color:x?"var(--im-warn)":"var(--im-brand)"},children:[m.width," \xD7 ",m.height]}),p?` \xB7 ${p.toFixed(2)}\xD7`:"",x?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Ie.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Ie.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var Fa=require("react/jsx-runtime");function Hf({guides:e}){return e.length?(0,Fa.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,Fa.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Wn=require("react");var be=require("react/jsx-runtime");function Bf({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,Wn.useState)(""),i=(0,Wn.useRef)(null),a=(0,Wn.useMemo)(()=>nd(o),[o]),s=o.trim().length>0,c=a.cards,u=a.issues??[];return(0,be.jsx)(Te,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002",size:"lg",onClose:t,initialFocusRef:i,footer:(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,be.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c.length||u.length>0,onClick:()=>n(c),children:["\u786E\u8BA4\u5EFA\u5361\uFF08",c.length,"\uFF09"]})]}),children:(0,be.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,be.jsx)("textarea",{ref:i,value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),(0,be.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:s?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("div",{className:"im-import-summary",children:[(0,be.jsxs)("span",{children:["\u8BC6\u522B ",c.length," \u5F20\u5361\u7247"]}),u.length?(0,be.jsxs)("span",{className:"im-import-summary-error",children:["\u53D1\u73B0 ",u.length," \u4E2A\u95EE\u9898"]}):null]}),c.map((l,d)=>{let f=wa(l.ratio??"1:1",e);return(0,be.jsxs)("article",{className:"im-import-card",children:[(0,be.jsxs)("div",{className:"im-import-card-meta",children:[(0,be.jsx)("strong",{children:l.title||`\u7B2C ${d+1} \u5F20`}),(0,be.jsx)("span",{children:l.ratio?l.ratio:"\u9ED8\u8BA4\u6BD4\u4F8B"}),(0,be.jsx)("span",{children:f.value}),f.fallback?(0,be.jsx)("span",{className:"im-import-card-fallback",children:"\u5C3A\u5BF8\u56DE\u9000"}):null]}),(0,be.jsx)("p",{className:"im-import-card-text",title:l.prompt||"",children:l.prompt||"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09"})]},`${d}-${l.title??""}`)}),u.map((l,d)=>(0,be.jsx)("div",{className:"im-import-issue",children:l.message},`issue-${d}`))]}):(0,be.jsx)("div",{className:"im-import-summary",children:"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8"})}),(0,be.jsxs)("p",{className:"im-field-hint",children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,be.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,be.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var Yt=require("react");var Va=require("react");var vt=require("react/jsx-runtime");function Wf({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,Va.useState)(""),[i,a]=(0,Va.useState)(!1),s=Number(e?.budget??0),c=async u=>{a(!0);try{let l=await Au(u);t(l),r(""),n(u>0?`\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${u.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(l){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(l)}`)}finally{a(!1)}};return(0,vt.jsx)("div",{className:"im-fieldset",children:(0,vt.jsxs)("div",{children:[(0,vt.jsx)("label",{className:"im-label",htmlFor:"imagora-budget",children:"\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650"}),(0,vt.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:o===""?s?String(s):"":o,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",disabled:i,onChange:u=>r(u.target.value)}),(0,vt.jsx)("p",{className:"im-field-hint",children:s?`\u5F53\u524D\u4E0A\u9650 \xA5${s.toFixed(2)}\uFF1B\u672C\u753B\u5E03\u82B1\u5230\u4E0A\u9650\u5C31\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF0C\u4E0D\u7ECF\u786E\u8BA4\uFF09`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\u3002\u8FD9\u4E2A\u4E0A\u9650\u7BA1\u7684\u662F\u8FD9\u4E2A\u753B\u5E03\u7D2F\u8BA1\u82B1\u4E86\u591A\u5C11\uFF1B\u8981\u7BA1\u300C\u4ECA\u5929 / \u5355\u6B21\u82B1\u591A\u5C11\u300D\uFF0C\u53BB\u751F\u6210\u5386\u53F2\u7684\u6210\u672C\u6761\u8BBE\u3002"}),(0,vt.jsxs)("div",{className:"im-field-actions",children:[(0,vt.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:i||!o.trim(),onClick:()=>void c(Number(o)),children:"\u4FDD\u5B58\u4E0A\u9650"}),(0,vt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:i||!s,onClick:()=>void c(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})})}var Tr=require("react");var Ae=require("react/jsx-runtime");function Ff({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,Tr.useState)(""),[i,a]=(0,Tr.useState)(""),[s,c]=(0,Tr.useState)(!1),u=e?.imagoraRoot??"",l=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async p=>{c(!0);try{let x=await Tu({title:p==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:p==="root"?u:d});if(!x.ok){if(x.reason==="cancelled")return;n(x.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${x.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let b=p==="root"?await ga(x.path||""):await ma(x.path||"");t(b),p==="root"?r(""):a(""),n(p==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(x){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(x)}`)}finally{c(!1)}},m=async(p,x)=>{c(!0);try{let b=p==="root"?await ga(x):await ma(x);t(b),p==="root"?r(""):a(""),n(x?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(b)}`)}finally{c(!1)}};return(0,Ae.jsxs)("div",{className:"im-fieldset",children:[(0,Ae.jsxs)("div",{children:[(0,Ae.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,Ae.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?u:o,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:p=>r(p.target.value)}),(0,Ae.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,Ae.jsxs)("div",{className:"im-field-actions",children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===u,onClick:()=>void m("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void m("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,Ae.jsxs)("div",{children:[(0,Ae.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,Ae.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?l:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:p=>a(p.target.value)}),(0,Ae.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",l?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,Ae.jsxs)("div",{className:"im-field-actions",children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===l,onClick:()=>void m("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void kr(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!l,onClick:()=>void m("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var ie=require("react/jsx-runtime");function ho({label:e,value:t,mono:n}){return(0,ie.jsxs)("div",{className:"im-spec-row",children:[(0,ie.jsx)("span",{className:"im-spec-key",children:e}),(0,ie.jsx)("span",{className:`im-spec-val${n?" im-spec-mono":""}`,title:t,children:t})]})}function Vf({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,Yt.useState)(r?.baseUrl??""),[c,u]=(0,Yt.useState)(r?.model??e?.model??""),[l,d]=(0,Yt.useState)(""),[f,m]=(0,Yt.useState)(null),[p,x]=(0,Yt.useState)(!1),[b,g]=(0,Yt.useState)(null),[k,h]=(0,Yt.useState)([]),w=e?.profiles??[],S=i?"plugin":e?.profile??"",C=[{value:"plugin",label:"\u63D2\u4EF6\u5185\u914D\u7F6E"},...w.map(y=>({value:y.name,label:y.label||y.name}))],v=(e?.models??[]).map(y=>({value:y.id,label:y.label||y.id})),E=f??S,P=i&&E!=="plugin",B=async()=>{x(!0);try{let y=null;!P&&!i&&E&&E!==e?.profile&&(y=await vr(E));let _=a.trim()!==(r?.baseUrl??"")||c.trim()!==(r?.model??"")||l.trim();_&&(y=await ha({baseUrl:a.trim(),model:c.trim(),apiKey:l.trim()})),y&&n(y),d(""),m(null),o(_?"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548":"\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(y){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(y)}`)}finally{x(!1)}},R=async()=>{x(!0);try{let y=await ha({reset:!0});n(y),m(null),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(y){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${ce(y)}`)}finally{x(!1)}},A=async()=>{x(!0),g(null);try{let y=await Ou({baseUrl:a.trim(),apiKey:l.trim()});h(y.models??[]),g(y.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${y.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(y){h([]),g(`\u8FDE\u4E0D\u901A\uFF1A${ce(y)}`)}finally{x(!1)}},I=!p&&(a.trim().length>0||!i&&E!==S);return(0,ie.jsx)(Te,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\u3002\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002",size:"lg",onClose:t,footer:(0,ie.jsxs)(ie.Fragment,{children:[i?(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void R(),children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E"}):null,(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:t,children:"\u53D6\u6D88"}),(0,ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!I,onClick:()=>void B(),children:"\u4FDD\u5B58"})]}),children:(0,ie.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-profile",children:"\u914D\u7F6E\u6765\u6E90"}),(0,ie.jsx)(Pt,{id:"imagora-profile",className:"is-block",options:C,value:E,searchable:"auto",onChange:y=>m(y),title:"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"}),(0,ie.jsx)("p",{className:"im-field-hint",children:E==="plugin"?"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\uFF0C\u4E0D\u4F9D\u8D56\u672C\u673A Imagora\u3002\u586B\u597D\u4E0B\u9762\u4E24\u9879\u5373\u53EF\u3002":(w.find(y=>y.name===E)?.label??"")||"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-model-select",children:"\u9ED8\u8BA4\u6A21\u578B"}),(0,ie.jsx)(Pt,{id:"imagora-model-select",className:"is-block",options:v,value:c,searchable:!0,allowCustom:!0,emptyLabel:"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id",onChange:y=>u(y),onCreateCustom:y=>u(y),title:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628"}),(0,ie.jsx)("p",{className:"im-field-hint",children:(e?.models??[]).find(y=>y.id===c)?.note||"\u8BE5\u6765\u6E90\u4E0B\u7684\u53EF\u9009\u6A21\u578B"})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u63D2\u4EF6\u5185\u63A5\u53E3"}),(0,ie.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-provider-base-url",children:"\u63A5\u53E3\u5730\u5740"}),(0,ie.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:p,onChange:y=>s(y.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("label",{className:"im-label",htmlFor:"imagora-provider-api-key",children:["API Key",(0,ie.jsx)("span",{className:`im-field-state is-${r?.apiKeyConfigured?"ok":"warn"}`,children:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E"})]}),(0,ie.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:l,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:p,onChange:y=>d(y.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"\u53EA\u5B58\u5728\u672C\u673A settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void A(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),b?(0,ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:b}):null]}),k.length?(0,ie.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8},children:[k.slice(0,24).map(y=>(0,ie.jsx)("button",{type:"button",className:`im-chip im-chip--action${y===c?" is-brand":""}`,onClick:()=>u(y),children:y},y)),k.length>24?(0,ie.jsxs)("span",{className:"im-muted",children:["\u2026\u8FD8\u6709 ",k.length-24," \u4E2A"]}):null]}):null]})]})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u751F\u6548\u4E2D"}),(0,ie.jsxs)("div",{className:"im-spec-list is-roomy",children:[(0,ie.jsx)(ho,{label:"\u6765\u6E90",value:e?.profileLabel||(i?"\u63D2\u4EF6\u5185\u914D\u7F6E":"\u2014")}),(0,ie.jsx)(ho,{label:"\u6A21\u578B",value:e?.modelLabel||e?.model||"\u2014"}),(0,ie.jsx)(ho,{label:"API Key",value:r?.apiKeyConfigured?"\u25CF \u5DF2\u8BBE\u7F6E":"\u25CB \u672A\u914D\u7F6E"}),r?.baseUrl?(0,ie.jsx)(ho,{label:"\u63A5\u53E3\u5730\u5740",value:r.baseUrl,mono:!0}):null,e?.imagoraRoot?(0,ie.jsx)(ho,{label:"Imagora \u76EE\u5F55",value:e.imagoraRoot,mono:!0}):null]}),(0,ie.jsx)("p",{className:"im-pending-line",style:{marginTop:8},children:"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\uFF08host \u6BCF\u6B21\u8BF7\u6C42\u90FD\u91CD\u8BFB\u914D\u7F6E\uFF0C\u4E0D\u50CF\u539F\u7248\u8981\u91CD\u542F\u5DE5\u4F5C\u53F0\uFF09\u3002"}),P?(0,ie.jsxs)("p",{className:"im-pending-line",style:{marginTop:6},children:[(0,ie.jsx)("span",{className:"im-chip is-brand",children:"\u88AB\u538B\u4F4F"}),"\u5F53\u524D\u751F\u6548\u7684\u662F\u63D2\u4EF6\u5185\u63A5\u53E3\uFF1B\u8981\u8BA9\u300C",w.find(y=>y.name===E)?.label??E,"\u300D\u751F\u6548\uFF0C\u5148\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\u3002"]}):null]}),(0,ie.jsx)(Ff,{config:e,onSaved:n,onFlash:o}),(0,ie.jsx)(Wf,{config:e,onSaved:n,onFlash:o})]})})}var Fn=require("react");function Gf({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i}){let a=(0,Fn.useCallback)(async(d,f)=>{let m=d.filter(Gu);if(!m.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}for(let[p,x]of m.entries())try{o(`\u4E0A\u4F20 ${x.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let b=await xr(x,x.name||`pasted-${Date.now()}.png`),g=dn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},{x:f.x+p*172,y:f.y});t(k=>[...k,g]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`)}catch(b){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${ce(b)}`)}},[t,o,r]),s=(0,Fn.useCallback)((d,f,m)=>{let p=f?m(f):n();a(d,p)},[a,n]),c=(0,Fn.useCallback)(d=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let m=f.files?.[0];if(m)try{let p=await xr(m,m.name);t(x=>x.map(b=>b.id===d&&b.type==="image"?{...b,data:{...b.data,registryId:p.id,name:p.name,url:p.url,size:p.size,ext:p.ext,absPath:p.absPath,missing:!1}}:b)),o(`\u5DF2\u66FF\u6362\u4E3A ${p.name}`)}catch(p){o(`\u66FF\u6362\u5931\u8D25\uFF1A${ce(p)}`)}},f.click()},[t,o]),u=(0,Fn.useCallback)(d=>{let f=e.current.find(m=>m.id===d);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name,path:f.data.absPath})},[e,i]),l=(0,Fn.useCallback)(async(d,f,m)=>{let p=await fetch(d).then(h=>h.blob()),x=f.endsWith(".png")?f:`${f}.png`,b=await xr(p,x),g=m??n(),k=dn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},g);return t(h=>[...h,k]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`),b},[t,o,n]);return{addImages:a,dropFiles:s,replaceImage:c,openPreview:u,addDataUrl:l}}function Xf(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Dt=require("react");function Yf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let c=(0,Dt.useCallback)(async p=>{try{return await fa(p)}catch(x){let b=x.body?.overBudget;if(!b)throw x;let g=b.reason||ce(x);if(!window.confirm(`${g}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`))throw new Error(`\u5DF2\u6309\u9884\u7B97\u53D6\u6D88\uFF1A${g}`);return r(`\u8D85\u9884\u7B97\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A${g}`),await fa({...p,allowOverBudget:!0})}},[r]),u=(0,Dt.useCallback)((p,x)=>{let g=(Array.isArray(x.results)?x.results:[]).filter(C=>C.status==="ok"&&C.assetId&&C.url),k=e.current.find(C=>C.id===p&&C.type==="prompt"),h=[];if(k&&k.type==="prompt"){let C=Er(k).height;g.forEach((v,E)=>{h.push(dn({id:String(v.assetId),relPath:v.name??"result.png",name:v.name??"result.png",url:String(v.url),size:v.bytes??0,ext:String(v.ext??"png"),absPath:v.absPath??"",createdAt:new Date().toISOString()},{x:k.position.x+E*172,y:k.position.y+C+56}))})}n(C=>{let v=[...C,...h];return dt(v,p,{status:x.status==="done"?"done":x.status==="cancelled"?"idle":"failed",resultCount:g.length,message:x.error??void 0,startedAtMs:void 0,cancelRequested:!1})}),h.length&&o(C=>{let v=h.map(E=>({id:`${p}->${E.id}`,source:p,target:E.id,animated:!0})).filter(E=>!C.some(P=>P.id===E.id));return v.length?[...C,...v]:C}),a.current.delete(p);let w=s.current.get(p);w&&window.clearTimeout(w),s.current.delete(p);let S=x.totalCost??0;S>0&&n(C=>{let v=C.find(P=>P.id===p),E=Number(v?.data?.cost??0);return dt(C,p,{cost:E+S})}),r(x.status==="done"?`\u5B8C\u6210 \xB7 ${g.length} \u5F20${S?` \xB7 ${S.toFixed(2)} \u5143`:""}`:`${x.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${x.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),l=(0,Dt.useCallback)((p,x)=>{let b=async()=>{try{let g=await _u(x);if(g.status==="queued")n(k=>dt(k,p,{status:"queued"}));else if(g.status==="running")n(k=>dt(k,p,{status:"running",startedAtMs:g.startedAt??Date.now(),cancelRequested:g.cancelRequested}));else{u(p,g);return}}catch(g){r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${ce(g)}`)}s.current.set(p,window.setTimeout(b,1200))};b()},[u,r,n,s]),d=(0,Dt.useCallback)(async p=>{let x=e.current.find(g=>g.id===p);if(!x||x.type!=="prompt")return;if(!x.data.prompt.trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let b=ju(e.current,t.current,p,x.data.prompt);if(b.mode==="invalid"){let g=b.unknown.map(k=>`@${k}`).join("\u3001");n(k=>dt(k,p,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${g}`}));return}try{let g=await c({prompt:x.data.prompt,size:x.data.size,quality:x.data.quality,refIds:b.images.map(k=>k.type==="image"?k.data.registryId:"").filter(Boolean),outputDir:x.data.outputDir,spent:e.current.reduce((k,h)=>k+Number(h.data?.cost??0),0),mask:b.images.map(k=>k.type==="image"?k.data.maskDataUrl:"").find(Boolean)||""});a.current.set(p,g.taskId),n(k=>dt(k,p,{status:"queued",startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${b.images.length} \u5F20 \xB7 ${x.data.size}`),l(p,g.taskId)}catch(g){let k=ce(g);n(h=>dt(h,p,{status:"failed",message:k})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${k}`)}},[e,t,n,i,r,l,a]),f=(0,Dt.useCallback)(async p=>{let x=a.current.get(p);if(n(b=>dt(b,p,{cancelRequested:!0})),!!x)try{await Mu(x)}catch(b){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${ce(b)}`)}},[n,r,a]),m=(0,Dt.useCallback)(p=>{for(let x of p)d(x)},[d]);return(0,Dt.useEffect)(()=>{let p=s.current;return()=>{for(let x of p.values())window.clearTimeout(x);p.clear()}},[s]),{runPrompt:d,cancelPrompt:f,runMany:m}}var rt=require("react");function qf(e){let[t,n]=(0,rt.useState)(null),[o,r]=(0,rt.useState)([]),i=(0,rt.useRef)(null),a=(0,rt.useCallback)(l=>{let d={...l,profiles:Array.isArray(l?.profiles)?l.profiles:[],models:Array.isArray(l?.models)?l.models:[],sizes:Array.isArray(l?.sizes)?l.sizes:[],qualities:Array.isArray(l?.qualities)?l.qualities:[],issues:Array.isArray(l?.issues)?l.issues:[]};n(d),i.current=d,r(d.issues)},[]),s=(0,rt.useCallback)(async()=>{try{a(await Cu())}catch(l){r([ce(l)])}},[a]);(0,rt.useEffect)(()=>{s()},[s]);let c=(0,rt.useCallback)(async l=>{try{let d=await vr(l);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ce(d)}`)}},[a,e]),u=(0,rt.useCallback)(async l=>{try{let d=await Du(l);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ce(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:u,replaceConfig:a}}var hn=require("react");function bo(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Uf(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(bo(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(bo(r)),bo(i)):null},restore(r){let i=o.shift();return i?(n.push(bo(r)),bo(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Zf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,hn.useRef)(Uf(50)),a=(0,hn.useCallback)(()=>{i.current.record({nodes:e.current,edges:t.current})},[e,t]),s=(0,hn.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,hn.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),u=(0,hn.useCallback)(()=>i.current.clear(),[]),l=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:c,clear:u,canUndo:l,canRestore:d}}var Kf=require("react");function Bw(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function jf(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:u,hasPreview:l}=e;(0,Kf.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&l){u();return}if(Bw(f.target))return;let m=f.ctrlKey||f.metaKey,p=f.key.toLowerCase();if(m&&p==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(b=>b.some(g=>!g.selected)?b.map(g=>({...g,selected:!0})):b);return}if(m&&p==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(m&&p==="y"){f.preventDefault(),s();return}if(m&&p==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,c,u,l,e])}var qt=require("react");var Ww=2500;function Qf({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:u}){let l=(0,qt.useRef)(null);(0,qt.useEffect)(()=>{if(e.length)return l.current&&window.clearTimeout(l.current),l.current=window.setTimeout(()=>{zu(n.current,o.current).catch(()=>{})},Ww),()=>{l.current&&window.clearTimeout(l.current)}},[e,t,n,o]),(0,qt.useEffect)(()=>{let m=!1;return(async()=>{try{let x=await Ru();if(m||x.empty||!x.nodes?.length)return;let b=ba(x.nodes,x.edges??[],[]);r(b.nodes),i(b.edges),s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${x.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`)}catch{}})(),()=>{m=!0}},[r,i,s]);let d=(0,qt.useCallback)(async m=>{try{let p=await Iu(m,n.current,o.current);u(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${p.name||m}\u300D`)}catch(p){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(p)}`)}},[n,o,u,c]),f=(0,qt.useCallback)(async m=>{try{let p=await Pu(m),x=ba(p.nodes,p.edges,p.missing??[]);r(x.nodes),i(x.edges),u(),c(`\u5DF2\u52A0\u8F7D\u300C${p.name||m}\u300D`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(p){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${ce(p)}`)}},[r,i,a,u,c]);return{doSave:d,doLoad:f}}var me=require("react/jsx-runtime");function Ga(){let[e,t,n]=bu([]),[o,r,i]=yu([]),[a,s]=(0,se.useState)([]),[c,u]=(0,se.useState)(null),[l,d]=(0,se.useState)(null),[f,m]=(0,se.useState)(null),[p,x]=(0,se.useState)(1),[b,g]=(0,se.useState)(!1),[k,h]=(0,se.useState)(()=>Yd()),[w,S]=(0,se.useState)([]),[C,v]=(0,se.useState)(null),[E,P]=(0,se.useState)(()=>cd()),[B,R]=(0,se.useState)(!1),[A,I]=(0,se.useState)([]),y=(0,se.useRef)(null),_=(0,se.useRef)(null),M=(0,se.useRef)(null),N=(0,se.useRef)(null),z=(0,se.useRef)(new Map),D=(0,se.useRef)(new Map),H=(0,se.useRef)(e),F=(0,se.useRef)(o);H.current=e,F.current=o;let G=(0,se.useCallback)(O=>{s(X=>[...X.slice(-8),O])},[]),Y=(0,se.useCallback)(O=>{u(O),window.setTimeout(()=>u(X=>X===O?null:X),2600)},[]),{config:q,configIssues:J,configRef:le,switchProfile:W,switchModel:T,replaceConfig:U}=qf(Y),ne=(0,se.useRef)(!1);(0,se.useEffect)(()=>{!q||ne.current||!(!q.provider?.apiKeyConfigured&&(q.source==="plugin"||q.issues.length>0))||(ne.current=!0,d({kind:"settings"}))},[q]);let{addImages:oe,replaceImage:Q,openPreview:V,addDataUrl:ee}=Gf({nodesRef:H,setNodes:t,createPosition:()=>yo.current(),log:G,flash:Y,setPreview:m}),{runPrompt:re,cancelPrompt:de,runMany:Se}=Yf({nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,log:G,flash:Y,taskIdsRef:D,timersRef:z}),{doSave:it,doLoad:et}=Qf({nodes:e,edges:o,nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,instanceRef:_,log:G,flash:Y,closeDialog:()=>d(null)}),fe=Zf({nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,flash:Y}),at=Od(e),Ut=(0,se.useMemo)(()=>({animated:!b}),[b]),Ze=(0,se.useMemo)(()=>Ku(e,o),[e,o]),kt=(0,se.useMemo)(()=>e.map(O=>{if(O.type==="image"){let X=Ze.refCounts.get(O.data.registryId)??0;return(O.data.refCount??0)===X?O:{...O,data:{...O.data,refCount:X}}}if(O.type==="group"){let X=Ze.groupCounts.get(O.id)??0,K=Ze.groupSizes.get(O.id)??0,ae=Ze.groupDups.get(O.id)??0;return O.data.imageCount===X&&O.data.totalSize===K&&O.data.duplicateCount===ae?O:{...O,data:{...O.data,imageCount:X,totalSize:K,duplicateCount:ae}}}return O}),[e,Ze]),Fe=e.filter(O=>O.type==="prompt"),tt=Fe.filter(O=>O.data.status==="queued"||O.data.status==="running").map(O=>O.id),Ke=Fe.filter(O=>O.data.prompt.trim()&&O.data.status!=="running"&&O.data.status!=="queued").map(O=>O.id),ft=(0,se.useCallback)((O,X)=>{t(K=>dt(K,O,X))},[t]),At=(0,se.useCallback)(O=>{fe.record();let X=new Set(O);t(K=>K.filter(ae=>!X.has(ae.id))),r(K=>K.filter(ae=>!X.has(ae.source)&&!X.has(ae.target)))},[t,r,fe]),bn=(0,se.useCallback)(O=>{let X=H.current.find(K=>K.id===O);At([O]),X?.type==="image"&&Eu(X.data.registryId).catch(()=>{})},[At]),$e=(0,se.useCallback)(()=>{let O=_.current,X=y.current?.getBoundingClientRect(),K=O&&X?O.screenToFlowPosition({x:X.width/2,y:X.height/2}):{x:140,y:120},{position:ae,next:Ce}=Xu(K,N.current);return N.current=Ce,ae},[]),yo=(0,se.useRef)($e);yo.current=$e;let xo=(0,se.useCallback)(O=>{let X=le.current,K=Yu(O??$e(),{size:X?.sizes[0]?.value??"1024x1024",quality:X?.qualities[0]??"high",outputDir:""});t(ae=>[...ae,K])},[$e,t,le]),wo=(0,se.useCallback)(O=>{t(X=>[...X,qu(O??$e())])},[$e,t]),$r=(0,se.useCallback)(()=>{r(ya(H.current,F.current)),Y("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,Y]),Lr=(0,se.useCallback)(()=>{let O=new Set(w);if(!O.size){Y("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}fe.record(),r(Qu(H.current,F.current,O)),Y("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[w,r,Y,fe]),Hr=(0,se.useCallback)(()=>{let O=new Set(w),X=le.current?.defaultOutputDir??"";O.size&&(fe.record(),t(K=>K.map(ae=>ae.type==="prompt"&&O.has(ae.id)?{...ae,data:{...ae.data,outputDir:X}}:ae)),Y(X?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${X}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[w,t,Y,fe]),Br=(0,se.useCallback)(()=>{let O=_.current;if(!O)return;let X=H.current.filter(ae=>w.includes(ae.id)),K=X.length?X:H.current;if(!K.length){Y("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}O.fitView({nodes:K,padding:.25,duration:300,maxZoom:1.6})},[w,Y]),Wr=(0,se.useCallback)(()=>{let O=new Set(w);if(!O.size){Y("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}fe.record(),t(X=>{let K=X.filter(Pe=>O.has(Pe.id)&&Pe.type==="image");if(!K.length)return X;let ae=Math.min(...K.map(Pe=>Pe.position.x)),Ce=Math.min(...K.map(Pe=>Pe.position.y)),St=new Map(K.map((Pe,yn)=>[Pe.id,yn]));return X.map(Pe=>{let yn=St.get(Pe.id);return yn===void 0?Pe:{...Pe,position:{x:ae+yn*172,y:Ce}}})})},[w,t,Y,fe]),{dropIntent:Fr,dragHandlers:Vr,startToolbarDrag:Gr,dropChip:Xr}=Gd({canvasRef:y,modalOpen:!!l||!!f,getCreatePosition:()=>$e(),toFlowPosition:O=>_.current?_.current.screenToFlowPosition(O):$e(),onDropFiles:(O,X)=>void oe(O,X),onDropNode:(O,X)=>{fe.record(),O==="prompt"?xo(X):wo(X)}});(0,se.useEffect)(()=>{let O=X=>{let K=X.target;if(K&&(K.tagName==="TEXTAREA"||K.tagName==="INPUT"))return;let ae=Array.from(X.clipboardData?.files??[]);ae.length&&(X.preventDefault(),oe(ae,$e()))};return window.addEventListener("paste",O),()=>window.removeEventListener("paste",O)},[oe,$e]),jf({nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,selectedIds:w,selectedEdgeId:C,onDeleteNodes:At,onDeleteEdge:O=>{fe.record(),r(X=>X.filter(K=>K.id!==O)),v(null)},onUndo:fe.undo,onRestore:fe.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>m(null),hasPreview:!!f});let Zt=(0,se.useCallback)(O=>X=>{let K=H.current.find(ae=>ae.id===X);if(!K||K.type!=="image"||!K.data.url){Y("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:O,target:{nodeId:X,src:K.data.url,name:K.data.name}})},[H,Y]),vo=(0,se.useMemo)(()=>({cropImage:Zt("crop"),splitImage:Zt("split"),upscaleImage:Zt("upscale"),maskImage:Zt("mask")}),[Zt]),ko=(0,se.useCallback)(O=>{fe.record(),t(X=>X.map(K=>K.id===O&&K.type==="image"?{...K,data:{...K.data,maskDataUrl:void 0}}:K)),Y("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,fe,Y]),Yr=(0,se.useMemo)(()=>({updatePrompt:ft,runPrompt:O=>{re(O)},cancelPrompt:O=>{de(O)},deleteNode:bn,zoomImage:V,replaceImage:Q,...vo,clearMask:ko,config:q}),[ft,re,de,bn,V,Q,vo,ko,q]);return(0,me.jsxs)(Ea.Provider,{value:Yr,children:[(0,me.jsx)("style",{children:zd}),(0,me.jsxs)("div",{className:"im-root",children:[(0,me.jsx)(Ld,{config:q,promptCount:Fe.length,runnableIds:Ke,busyIds:tt.length,snapEnabled:E,canvasLocked:B,cost:at,canUndo:fe.canUndo,canRestore:fe.canRestore,onUndo:()=>{fe.record(),fe.undo()},onRestore:fe.restore,onAddPrompt:()=>xo(),onPickFiles:()=>M.current?.click(),onAddGroup:()=>wo(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:Gr,onRun:Se,onCancelAll:()=>tt.forEach(O=>void de(O)),onAutoConnect:$r,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:O=>void W(O),onSwitchModel:O=>void T(O),onOpenSave:async()=>{try{let O=await pa();d({kind:"save",workflows:O.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let O=await pa();d({kind:"load",workflows:O.workflows})}catch(O){Y(`\u8BFB\u53D6\u5931\u8D25\uFF1A${ce(O)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),J.length?(0,me.jsx)(Qd,{tone:"error",action:(0,me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,me.jsx)("ul",{className:"im-banner-list",children:J.map(O=>(0,me.jsx)("li",{children:O},O))})}):null,(0,me.jsxs)("div",{className:`im-canvas${Fr?" is-drop-active":""}`,ref:y,...Vr,children:[(0,me.jsx)(Ud,{selectedCount:w.length,selectedPromptCount:w.filter(O=>e.some(X=>X.id===O&&X.type==="prompt")).length,selectedRunnableIds:Ke.filter(O=>w.includes(O)),pickingOutputDir:!1,onRunSelected:()=>Se(Ke.filter(O=>w.includes(O))),onAutoLayout:Wr,onAutoConnectSelected:Lr,onSetOutputDir:Hr,onDeleteSelected:()=>{At(w),S([])}}),(0,me.jsx)(_a.Provider,{value:b,children:(0,me.jsxs)(hu,{nodes:kt,edges:o,nodeTypes:Rd,onNodesChange:O=>{let X=dd(O,H.current,E);I(X.guides),n(X.changes)},onEdgesChange:O=>i(O),onConnect:Xf(r),isValidConnection:O=>Uu(H.current,F.current,{source:String(O.source??""),target:String(O.target??"")}),onInit:O=>{_.current=O},onNodeDragStop:(O,X)=>{if(I([]),!E)return;let K=fo(X),ae=H.current.filter(St=>St.id!==X.id).map(fo),Ce=_r(K,ae);Ce.x===K.x&&Ce.y===K.y||t(St=>St.map(Pe=>Pe.id===X.id?{...Pe,position:{x:Ce.x,y:Ce.y}}:Pe))},onMove:(O,X)=>{x(X.zoom),g(K=>Dd(K,X.zoom))},onEdgeDoubleClick:(O,X)=>{fe.record(),r(K=>K.filter(ae=>ae.id!==X.id)),v(null)},onSelectionChange:({nodes:O,edges:X})=>{let K=O.map(Ce=>Ce.id);S(Ce=>Ce.length===K.length&&Ce.every((St,Pe)=>St===K[Pe])?Ce:K);let ae=X.length===1?X[0].id:null;v(Ce=>Ce===ae?Ce:ae)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:Ut,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!B,nodesConnectable:!B,elementsSelectable:!B,panOnDrag:!B,selectionOnDrag:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:["Meta","Control"],children:[(0,me.jsx)(wu,{variant:bt.Dots,gap:18,size:1.4}),k?(0,me.jsx)(Su,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:O=>O.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,me.jsx)(Hf,{guides:A})]})}),(0,me.jsx)(Hd,{zoom:p,snapEnabled:E,canvasLocked:B,minimapOpen:k,onZoomIn:()=>void _.current?.zoomIn({duration:180}),onZoomOut:()=>void _.current?.zoomOut({duration:180}),onFitView:()=>_.current?.fitView({padding:.2,duration:300}),onFocusSelected:Br,onToggleSnap:()=>P(O=>{let X=!O;return ud(X),X||I([]),Y(X?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),X}),onToggleLock:()=>R(O=>{let X=!O;return Y(X?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),X}),onToggleMinimap:()=>h(O=>{let X=!O;return qd(X),X}),onOpenHelp:()=>d({kind:"help"})}),e.length===0?(0,me.jsx)(Zd,{}):null,(0,me.jsx)(Kd,{logs:a}),(0,me.jsx)(jd,{text:c}),Xr]}),(0,me.jsx)("input",{ref:M,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:O=>{let X=Array.from(O.target.files??[]);O.target.value="",oe(X,$e())}}),f?(0,me.jsx)(Dr,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>m(null)}):null,l?.kind==="save"?(0,me.jsx)(uf,{workflows:l.workflows??[],imagoraRoot:q?.imagoraRoot,onCancel:()=>d(null),onSubmit:O=>void it(O)}):null,l?.kind==="load"?(0,me.jsx)(df,{workflows:l.workflows??[],imagoraRoot:q?.imagoraRoot,onCancel:()=>d(null),onPick:O=>void et(O)}):null,l?.kind==="crop"&&l.target?(0,me.jsx)(Cf,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(O,X)=>{fe.record(),await ee(O,`${l.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),Y(X)}}):null,l?.kind==="split"&&l.target?(0,me.jsx)(Af,{src:l.target.src,onClose:()=>d(null),onConfirm:async O=>{fe.record();let X=l.target.name.replace(/\.[^.]+$/,""),K=$e();for(let[ae,Ce]of O.entries())await ee(Ce.dataUrl,`${X}_${ae+1}.png`,{x:K.x+ae*160,y:K.y});d(null),Y(`\u5DF2\u5207\u51FA ${O.length} \u5F20`)}}):null,l?.kind==="upscale"&&l.target?(0,me.jsx)(Lf,{src:l.target.src,onClose:()=>d(null),onConfirm:async(O,X)=>{fe.record(),await ee(O,`${l.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),Y(X)}}):null,l?.kind==="mask"&&l.target?(0,me.jsx)(Mf,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(O,X)=>{fe.record(),t(K=>K.map(ae=>ae.id===l.target.nodeId&&ae.type==="image"?{...ae,data:{...ae.data,maskDataUrl:O}}:ae)),d(null),Y(X)}}):null,l?.kind==="help"?(0,me.jsx)(ff,{config:q,onClose:()=>d(null)}):null,l?.kind==="history"?(0,me.jsx)(Df,{imagoraRoot:q?.imagoraRoot,onClose:()=>d(null),onImport:O=>{if(!O.length)return;fe.record();let X=$e(),K=O.map((ae,Ce)=>dn(ae,{x:X.x+Ce*172,y:X.y}));t(ae=>[...ae,...K]),Y(`\u5DF2\u653E\u5165 ${K.length} \u5F20\u56FE`)}}):null,l?.kind==="import"?(0,me.jsx)(Bf,{sizes:q?.sizes??[],onCancel:()=>d(null),onConfirm:O=>{fe.record();let X=le.current,K=od(O,{sizes:X?.sizes??[],defaultQuality:X?.qualities[0]??"high",defaultOutputDir:""},$e());t(ae=>[...ae,...K]),d(null),Y(`\u5DF2\u5EFA ${K.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,l?.kind==="settings"?(0,me.jsx)(Vf,{config:q,onClose:()=>d(null),onSaved:U,onFlash:Y}):null]})]})}var Jf=`/* this gets exported as style.css and can be used for the default theming */
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
`;var rp=require("react/jsx-runtime"),Gw=["slots"],op="imagora";globalThis.__dshImagoraCanvas=Ga;function Xw({size:e=16}){return(0,rp.jsx)(za,{size:e,fill:"currentColor"})}function Yw(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=Jf,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(np(),tp)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:op},Ga)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:op,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Xw)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
