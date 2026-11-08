window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var Lp=Object.create;var No=Object.defineProperty;var Hp=Object.getOwnPropertyDescriptor;var Bp=Object.getOwnPropertyNames;var Wp=Object.getPrototypeOf,Fp=Object.prototype.hasOwnProperty;var Vp=(e,t)=>()=>(e&&(t=e(e=0)),t);var Eo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ts=(e,t)=>{for(var n in t)No(e,n,{get:t[n],enumerable:!0})},ns=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Bp(t))!Fp.call(e,r)&&r!==n&&No(e,r,{get:()=>t[r],enumerable:!(o=Hp(t,r))||o.enumerable});return e};var os=(e,t,n)=>(n=e!=null?Lp(Wp(e)):{},ns(t||!e||!e.__esModule?No(n,"default",{value:e,enumerable:!0}):n,e)),Gp=e=>ns(No({},"__esModule",{value:!0}),e);var Jl=Eo(Ql=>{"use strict";var Ln=require("react");function i0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a0=typeof Object.is=="function"?Object.is:i0,s0=Ln.useState,l0=Ln.useEffect,c0=Ln.useLayoutEffect,u0=Ln.useDebugValue;function d0(e,t){var n=t(),o=s0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return c0(function(){r.value=n,r.getSnapshot=t,aa(r)&&i({inst:r})},[e,n,t]),l0(function(){return aa(r)&&i({inst:r}),e(function(){aa(r)&&i({inst:r})})},[e]),u0(n),n}function aa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a0(e,n)}catch{return!0}}function f0(e,t){return t()}var p0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f0:d0;Ql.useSyncExternalStore=Ln.useSyncExternalStore!==void 0?Ln.useSyncExternalStore:p0});var tc=Eo((Qv,ec)=>{"use strict";ec.exports=Jl()});var oc=Eo(nc=>{"use strict";var pr=require("react"),m0=tc();function g0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var h0=typeof Object.is=="function"?Object.is:g0,b0=m0.useSyncExternalStore,y0=pr.useRef,x0=pr.useEffect,w0=pr.useMemo,v0=pr.useDebugValue;nc.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=y0(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=w0(function(){function l(m){if(!u){if(u=!0,c=m,m=o(m),r!==void 0&&a.hasValue){var p=a.value;if(r(p,m))return d=p}return d=m}if(p=d,h0(c,m))return p;var y=o(m);return r!==void 0&&r(p,y)?(c=m,p):(c=m,d=y)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,o,r]);var s=b0(e,i[0],i[1]);return x0(function(){a.hasValue=!0,a.value=s},[s]),v0(s),s}});var ic=Eo((e1,rc)=>{"use strict";rc.exports=oc()});var Gf={};ts(Gf,{primitives:()=>Ga});function Ww(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Ga(){if(Or)return Or;let e=require(Vf),t=Ww(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${Vf}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return Or=t,Or}var Vf,Or,Xa=Vp(()=>{"use strict";Vf="@deepseek-ai/dsh-client-ui-primitives",Or=null});var qw={};ts(qw,{apply:()=>Yw,inject:()=>Gw});module.exports=Gp(qw);var se=require("react");var L=require("react/jsx-runtime"),$=require("react");function _e(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=_e(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Xp={value:()=>{}};function Kt(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new _o(n)}function _o(e){this._=e}function Yp(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}_o.prototype=Kt.prototype={constructor:_o,on:function(e,t){var n=this._,o=Yp(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=qp(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=rs(n[r],e.name,t);else if(t==null)for(r in n)n[r]=rs(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new _o(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function qp(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function rs(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Xp,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var Kr="http://www.w3.org/1999/xhtml",is={svg:"http://www.w3.org/2000/svg",xhtml:Kr,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Gn(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),is.hasOwnProperty(t)?{space:is[t],local:e}:e}function Up(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Kr&&t.documentElement.namespaceURI===Kr?t.createElement(e):t.createElementNS(n,e)}}function Zp(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function as(e){var t=Gn(e);return(t.local?Zp:Up)(t)}function Kp(){}function Io(e){return e==null?Kp:function(){return this.querySelector(e)}}function jp(e){typeof e!="function"&&(e=Io(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),l,u,c=0;c<a;++c)(l=i[c])&&(u=e.call(l,l.__data__,c,i))&&("__data__"in l&&(u.__data__=l.__data__),s[c]=u);return new Qe(o,this._parents)}function Qp(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Jp(){return[]}function Qr(e){return e==null?Jp:function(){return this.querySelectorAll(e)}}function em(e){return function(){return Qp(e.apply(this,arguments))}}function tm(e){typeof e=="function"?e=em(e):e=Qr(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,l,u=0;u<s;++u)(l=a[u])&&(o.push(e.call(l,l.__data__,u,a)),r.push(l));return new Qe(o,r)}function Jr(e){return function(){return this.matches(e)}}function ss(e){return function(t){return t.matches(e)}}var nm=Array.prototype.find;function om(e){return function(){return nm.call(this.children,e)}}function rm(){return this.firstElementChild}function im(e){return this.select(e==null?rm:om(typeof e=="function"?e:ss(e)))}var am=Array.prototype.filter;function sm(){return Array.from(this.children)}function lm(e){return function(){return am.call(this.children,e)}}function cm(e){return this.selectAll(e==null?sm:lm(typeof e=="function"?e:ss(e)))}function um(e){typeof e!="function"&&(e=Jr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],l,u=0;u<a;++u)(l=i[u])&&e.call(l,l.__data__,u,i)&&s.push(l);return new Qe(o,this._parents)}function ls(e){return new Array(e.length)}function dm(){return new Qe(this._enter||this._groups.map(ls),this._parents)}function Mo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Mo.prototype={constructor:Mo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function fm(e){return function(){return e}}function pm(e,t,n,o,r,i){for(var a=0,s,l=t.length,u=i.length;a<u;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new Mo(e,i[a]);for(;a<l;++a)(s=t[a])&&(r[a]=s)}function mm(e,t,n,o,r,i,a){var s,l,u=new Map,c=t.length,d=i.length,f=new Array(c),m;for(s=0;s<c;++s)(l=t[s])&&(f[s]=m=a.call(l,l.__data__,s,t)+"",u.has(m)?r[s]=l:u.set(m,l));for(s=0;s<d;++s)m=a.call(e,i[s],s,i)+"",(l=u.get(m))?(o[s]=l,l.__data__=i[s],u.delete(m)):n[s]=new Mo(e,i[s]);for(s=0;s<c;++s)(l=t[s])&&u.get(f[s])===l&&(r[s]=l)}function gm(e){return e.__data__}function hm(e,t){if(!arguments.length)return Array.from(this,gm);var n=t?mm:pm,o=this._parents,r=this._groups;typeof e!="function"&&(e=fm(e));for(var i=r.length,a=new Array(i),s=new Array(i),l=new Array(i),u=0;u<i;++u){var c=o[u],d=r[u],f=d.length,m=bm(e.call(c,c&&c.__data__,u,o)),p=m.length,y=s[u]=new Array(p),b=a[u]=new Array(p),h=l[u]=new Array(f);n(c,d,y,b,h,m,t);for(var k=0,g=0,w,S;k<p;++k)if(w=y[k]){for(k>=g&&(g=k+1);!(S=b[g])&&++g<p;);w._next=S||null}}return a=new Qe(a,o),a._enter=s,a._exit=l,a}function bm(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ym(){return new Qe(this._exit||this._groups.map(ls),this._parents)}function xm(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function wm(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),l=0;l<a;++l)for(var u=n[l],c=o[l],d=u.length,f=s[l]=new Array(d),m,p=0;p<d;++p)(m=u[p]||c[p])&&(f[p]=m);for(;l<r;++l)s[l]=n[l];return new Qe(s,this._parents)}function vm(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function km(e){e||(e=Sm);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,l=r[i]=new Array(s),u,c=0;c<s;++c)(u=a[c])&&(l[c]=u);l.sort(t)}return new Qe(r,this._parents).order()}function Sm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Cm(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Nm(){return Array.from(this)}function Em(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function _m(){let e=0;for(let t of this)++e;return e}function Mm(){return!this.node()}function Im(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function Pm(e){return function(){this.removeAttribute(e)}}function zm(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Rm(e,t){return function(){this.setAttribute(e,t)}}function Dm(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Am(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Tm(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Om(e,t){var n=Gn(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?zm:Pm:typeof t=="function"?n.local?Tm:Am:n.local?Dm:Rm)(n,t))}function cs(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function $m(e){return function(){this.style.removeProperty(e)}}function Lm(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Hm(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Bm(e,t,n){return arguments.length>1?this.each((t==null?$m:typeof t=="function"?Hm:Lm)(e,t,n??"")):jt(this.node(),e)}function jt(e,t){return e.style.getPropertyValue(t)||cs(e).getComputedStyle(e,null).getPropertyValue(t)}function Wm(e){return function(){delete this[e]}}function Fm(e,t){return function(){this[e]=t}}function Vm(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Gm(e,t){return arguments.length>1?this.each((t==null?Wm:typeof t=="function"?Vm:Fm)(e,t)):this.node()[e]}function us(e){return e.trim().split(/^|\s+/)}function ei(e){return e.classList||new ds(e)}function ds(e){this._node=e,this._names=us(e.getAttribute("class")||"")}ds.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function fs(e,t){for(var n=ei(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function ps(e,t){for(var n=ei(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Xm(e){return function(){fs(this,e)}}function Ym(e){return function(){ps(this,e)}}function qm(e,t){return function(){(t.apply(this,arguments)?fs:ps)(this,e)}}function Um(e,t){var n=us(e+"");if(arguments.length<2){for(var o=ei(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?qm:t?Xm:Ym)(n,t))}function Zm(){this.textContent=""}function Km(e){return function(){this.textContent=e}}function jm(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Qm(e){return arguments.length?this.each(e==null?Zm:(typeof e=="function"?jm:Km)(e)):this.node().textContent}function Jm(){this.innerHTML=""}function eg(e){return function(){this.innerHTML=e}}function tg(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function ng(e){return arguments.length?this.each(e==null?Jm:(typeof e=="function"?tg:eg)(e)):this.node().innerHTML}function og(){this.nextSibling&&this.parentNode.appendChild(this)}function rg(){return this.each(og)}function ig(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ag(){return this.each(ig)}function sg(e){var t=typeof e=="function"?e:as(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function lg(){return null}function cg(e,t){var n=typeof e=="function"?e:as(e),o=t==null?lg:typeof t=="function"?t:Io(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function ug(){var e=this.parentNode;e&&e.removeChild(this)}function dg(){return this.each(ug)}function fg(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function pg(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function mg(e){return this.select(e?pg:fg)}function gg(e){return arguments.length?this.property("__data__",e):this.node().__data__}function hg(e){return function(t){e.call(this,t,this.__data__)}}function bg(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function yg(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function xg(e,t,n){return function(){var o=this.__on,r,i=hg(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function wg(e,t,n){var o=bg(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,u=s.length,c;l<u;++l)for(r=0,c=s[l];r<i;++r)if((a=o[r]).type===c.type&&a.name===c.name)return c.value}return}for(s=t?xg:yg,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function ms(e,t,n){var o=cs(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function vg(e,t){return function(){return ms(this,e,t)}}function kg(e,t){return function(){return ms(this,e,t.apply(this,arguments))}}function Sg(e,t){return this.each((typeof t=="function"?kg:vg)(e,t))}function*Cg(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var gs=[null];function Qe(e,t){this._groups=e,this._parents=t}function Qt(){return new Qe([[document.documentElement]],gs)}function Ng(){return this}Qe.prototype=Qt.prototype={constructor:Qe,select:jp,selectAll:tm,selectChild:im,selectChildren:cm,filter:um,data:hm,enter:dm,exit:ym,join:xm,merge:wm,selection:Ng,order:vm,sort:km,call:Cm,nodes:Nm,node:Em,size:_m,empty:Mm,each:Im,attr:Om,style:Bm,property:Gm,classed:Um,text:Qm,html:ng,raise:rg,lower:ag,append:sg,insert:cg,remove:dg,clone:mg,datum:gg,on:wg,dispatch:Sg,[Symbol.iterator]:Cg};function Le(e){return typeof e=="string"?new Qe([[document.querySelector(e)]],[document.documentElement]):new Qe([[e]],gs)}var Eg=0;function _g(){return new jr}function jr(){this._="@"+(++Eg).toString(36)}jr.prototype=_g.prototype={constructor:jr,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function Mg(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Xe(e,t){if(e=Mg(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var Ig={passive:!1},Xn={capture:!0,passive:!1};function ti(e){e.stopImmediatePropagation()}function xn(e){e.preventDefault(),e.stopImmediatePropagation()}function oi(e){var t=e.document.documentElement,n=Le(e).on("dragstart.drag",xn,Xn);"onselectstart"in t?n.on("selectstart.drag",xn,Xn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function ri(e,t){var n=e.document.documentElement,o=Le(e).on("dragstart.drag",null);t&&(o.on("click.drag",xn,Xn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Po=e=>()=>e;function ni(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}ni.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Pg(e){return!e.ctrlKey&&!e.button}function zg(){return this.parentNode}function Rg(e,t){return t??{x:e.x,y:e.y}}function Dg(){return navigator.maxTouchPoints||"ontouchstart"in this}function ii(){var e=Pg,t=zg,n=Rg,o=Dg,r={},i=Kt("start","drag","end"),a=0,s,l,u,c,d=0;function f(w){w.on("mousedown.drag",m).filter(o).on("touchstart.drag",b).on("touchmove.drag",h,Ig).on("touchend.drag touchcancel.drag",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(w,S){if(!(c||!e.call(this,w,S))){var C=g(this,t.call(this,w,S),w,S,"mouse");C&&(Le(w.view).on("mousemove.drag",p,Xn).on("mouseup.drag",y,Xn),oi(w.view),ti(w),u=!1,s=w.clientX,l=w.clientY,C("start",w))}}function p(w){if(xn(w),!u){var S=w.clientX-s,C=w.clientY-l;u=S*S+C*C>d}r.mouse("drag",w)}function y(w){Le(w.view).on("mousemove.drag mouseup.drag",null),ri(w.view,u),xn(w),r.mouse("end",w)}function b(w,S){if(e.call(this,w,S)){var C=w.changedTouches,v=t.call(this,w,S),E=C.length,z,B;for(z=0;z<E;++z)(B=g(this,v,w,S,C[z].identifier,C[z]))&&(ti(w),B("start",w,C[z]))}}function h(w){var S=w.changedTouches,C=S.length,v,E;for(v=0;v<C;++v)(E=r[S[v].identifier])&&(xn(w),E("drag",w,S[v]))}function k(w){var S=w.changedTouches,C=S.length,v,E;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),v=0;v<C;++v)(E=r[S[v].identifier])&&(ti(w),E("end",w,S[v]))}function g(w,S,C,v,E,z){var B=i.copy(),P=Xe(z||C,S),O,I,x;if((x=n.call(w,new ni("beforestart",{sourceEvent:C,target:f,identifier:E,active:a,x:P[0],y:P[1],dx:0,dy:0,dispatch:B}),v))!=null)return O=x.x-P[0]||0,I=x.y-P[1]||0,function _(M,N,R){var D=P,H;switch(M){case"start":r[E]=_,H=a++;break;case"end":delete r[E],--a;case"drag":P=Xe(R||N,S),H=a;break}B.call(M,w,new ni(M,{sourceEvent:N,subject:x,target:f,identifier:E,active:H,x:P[0]+O,y:P[1]+I,dx:P[0]-D[0],dy:P[1]-D[1],dispatch:B}),v)}}return f.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Po(!!w),f):e},f.container=function(w){return arguments.length?(t=typeof w=="function"?w:Po(w),f):t},f.subject=function(w){return arguments.length?(n=typeof w=="function"?w:Po(w),f):n},f.touchable=function(w){return arguments.length?(o=typeof w=="function"?w:Po(!!w),f):o},f.on=function(){var w=i.on.apply(i,arguments);return w===i?f:w},f.clickDistance=function(w){return arguments.length?(d=(w=+w)*w,f):Math.sqrt(d)},f}function Sn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Un(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Tt(){}var nn=.7,kn=1/nn,wn="\\s*([+-]?\\d+)\\s*",Yn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ag=/^#([0-9a-f]{3,8})$/,Tg=new RegExp(`^rgb\\(${wn},${wn},${wn}\\)$`),Og=new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`),$g=new RegExp(`^rgba\\(${wn},${wn},${wn},${Yn}\\)$`),Lg=new RegExp(`^rgba\\(${mt},${mt},${mt},${Yn}\\)$`),Hg=new RegExp(`^hsl\\(${Yn},${mt},${mt}\\)$`),Bg=new RegExp(`^hsla\\(${Yn},${mt},${mt},${Yn}\\)$`),hs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Sn(Tt,Nt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:bs,formatHex:bs,formatHex8:Wg,formatHsl:Fg,formatRgb:ys,toString:ys});function bs(){return this.rgb().formatHex()}function Wg(){return this.rgb().formatHex8()}function Fg(){return _s(this).formatHsl()}function ys(){return this.rgb().formatRgb()}function Nt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Ag.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?xs(t):n===3?new Oe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?zo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?zo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Tg.exec(e))?new Oe(t[1],t[2],t[3],1):(t=Og.exec(e))?new Oe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=$g.exec(e))?zo(t[1],t[2],t[3],t[4]):(t=Lg.exec(e))?zo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Hg.exec(e))?ks(t[1],t[2]/100,t[3]/100,1):(t=Bg.exec(e))?ks(t[1],t[2]/100,t[3]/100,t[4]):hs.hasOwnProperty(e)?xs(hs[e]):e==="transparent"?new Oe(NaN,NaN,NaN,0):null}function xs(e){return new Oe(e>>16&255,e>>8&255,e&255,1)}function zo(e,t,n,o){return o<=0&&(e=t=n=NaN),new Oe(e,t,n,o)}function di(e){return e instanceof Tt||(e=Nt(e)),e?(e=e.rgb(),new Oe(e.r,e.g,e.b,e.opacity)):new Oe}function Zn(e,t,n,o){return arguments.length===1?di(e):new Oe(e,t,n,o??1)}function Oe(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Sn(Oe,Zn,Un(Tt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?nn:Math.pow(nn,e),new Oe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Oe(en(this.r),en(this.g),en(this.b),Do(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ws,formatHex:ws,formatHex8:Vg,formatRgb:vs,toString:vs}));function ws(){return`#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}`}function Vg(){return`#${Jt(this.r)}${Jt(this.g)}${Jt(this.b)}${Jt((isNaN(this.opacity)?1:this.opacity)*255)}`}function vs(){let e=Do(this.opacity);return`${e===1?"rgb(":"rgba("}${en(this.r)}, ${en(this.g)}, ${en(this.b)}${e===1?")":`, ${e})`}`}function Do(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function en(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Jt(e){return e=en(e),(e<16?"0":"")+e.toString(16)}function ks(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new lt(e,t,n,o)}function _s(e){if(e instanceof lt)return new lt(e.h,e.s,e.l,e.opacity);if(e instanceof Tt||(e=Nt(e)),!e)return new lt;if(e instanceof lt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,l=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=l<.5?i+r:2-i-r,a*=60):s=l>0&&l<1?0:a,new lt(a,s,l,e.opacity)}function To(e,t,n,o){return arguments.length===1?_s(e):new lt(e,t,n,o??1)}function lt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Sn(lt,To,Un(Tt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new lt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?nn:Math.pow(nn,e),new lt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Oe(ai(e>=240?e-240:e+120,r,o),ai(e,r,o),ai(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new lt(Ss(this.h),Ro(this.s),Ro(this.l),Do(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Do(this.opacity);return`${e===1?"hsl(":"hsla("}${Ss(this.h)}, ${Ro(this.s)*100}%, ${Ro(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Ss(e){return e=(e||0)%360,e<0?e+360:e}function Ro(e){return Math.max(0,Math.min(1,e||0))}function ai(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Ms=Math.PI/180,Is=180/Math.PI,Ao=18,Ps=.96422,zs=1,Rs=.82521,Ds=4/29,vn=6/29,As=3*vn*vn,Gg=vn*vn*vn;function Ts(e){if(e instanceof gt)return new gt(e.l,e.a,e.b,e.opacity);if(e instanceof Ct)return $s(e);e instanceof Oe||(e=di(e));var t=ui(e.r),n=ui(e.g),o=ui(e.b),r=si((.2225045*t+.7168786*n+.0606169*o)/zs),i,a;return t===n&&n===o?i=a=r:(i=si((.4360747*t+.3850649*n+.1430804*o)/Ps),a=si((.0139322*t+.0971045*n+.7141733*o)/Rs)),new gt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function Os(e,t,n,o){return arguments.length===1?Ts(e):new gt(e,t,n,o??1)}function gt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Sn(gt,Os,Un(Tt,{brighter(e){return new gt(this.l+Ao*(e??1),this.a,this.b,this.opacity)},darker(e){return new gt(this.l-Ao*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=Ps*li(t),e=zs*li(e),n=Rs*li(n),new Oe(ci(3.1338561*t-1.6168667*e-.4906146*n),ci(-.9787684*t+1.9161415*e+.033454*n),ci(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function si(e){return e>Gg?Math.pow(e,1/3):e/As+Ds}function li(e){return e>vn?e*e*e:As*(e-Ds)}function ci(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function ui(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Xg(e){if(e instanceof Ct)return new Ct(e.h,e.c,e.l,e.opacity);if(e instanceof gt||(e=Ts(e)),e.a===0&&e.b===0)return new Ct(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*Is;return new Ct(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Oo(e,t,n,o){return arguments.length===1?Xg(e):new Ct(e,t,n,o??1)}function Ct(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function $s(e){if(isNaN(e.h))return new gt(e.l,0,0,e.opacity);var t=e.h*Ms;return new gt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Sn(Ct,Oo,Un(Tt,{brighter(e){return new Ct(this.h,this.c,this.l+Ao*(e??1),this.opacity)},darker(e){return new Ct(this.h,this.c,this.l-Ao*(e??1),this.opacity)},rgb(){return $s(this).rgb()}}));var Ls=-.14861,fi=1.78277,pi=-.29227,$o=-.90649,qn=1.97294,Cs=qn*$o,Ns=qn*fi,Es=fi*pi-$o*Ls;function Yg(e){if(e instanceof tn)return new tn(e.h,e.s,e.l,e.opacity);e instanceof Oe||(e=di(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(Es*o+Cs*t-Ns*n)/(Es+Cs-Ns),i=o-r,a=(qn*(n-r)-pi*i)/$o,s=Math.sqrt(a*a+i*i)/(qn*r*(1-r)),l=s?Math.atan2(a,i)*Is-120:NaN;return new tn(l<0?l+360:l,s,r,e.opacity)}function Lo(e,t,n,o){return arguments.length===1?Yg(e):new tn(e,t,n,o??1)}function tn(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Sn(tn,Lo,Un(Tt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new tn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?nn:Math.pow(nn,e),new tn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*Ms,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Oe(255*(t+n*(Ls*o+fi*r)),255*(t+n*(pi*o+$o*r)),255*(t+n*(qn*o)),this.opacity)}}));function Ws(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function qg(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return Ws((n-o/t)*t,a,r,i,s)}}function Ug(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return Ws((n-o/t)*t,r,i,a,s)}}var Bo=e=>()=>e;function Fs(e,t){return function(n){return e+n*t}}function Zg(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function bi(e,t){var n=t-e;return n?Fs(e,n>180||n<-180?n-360*Math.round(n/360):n):Bo(isNaN(e)?t:e)}function Kg(e){return(e=+e)==1?Ye:function(t,n){return n-t?Zg(t,n,e):Bo(isNaN(t)?n:t)}}function Ye(e,t){var n=t-e;return n?Fs(e,n):Bo(isNaN(e)?t:e)}var Kn=(function e(t){var n=Kg(t);function o(r,i){var a=n((r=Zn(r)).r,(i=Zn(i)).r),s=n(r.g,i.g),l=n(r.b,i.b),u=Ye(r.opacity,i.opacity);return function(c){return r.r=a(c),r.g=s(c),r.b=l(c),r.opacity=u(c),r+""}}return o.gamma=e,o})(1);function Vs(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=Zn(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(l){return s.r=o(l),s.g=r(l),s.b=i(l),s+""}}}var ov=Vs(qg),rv=Vs(Ug);function jg(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Qg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jg(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=Cn(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function eh(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ct(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function th(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Cn(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var gi=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,mi=new RegExp(gi.source,"g");function nh(e){return function(){return e}}function oh(e){return function(t){return e(t)+""}}function yi(e,t){var n=gi.lastIndex=mi.lastIndex=0,o,r,i,a=-1,s=[],l=[];for(e=e+"",t=t+"";(o=gi.exec(e))&&(r=mi.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,l.push({i:a,x:ct(o,r)})),n=mi.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?l[0]?oh(l[0].x):nh(t):(t=l.length,function(u){for(var c=0,d;c<t;++c)s[(d=l[c]).i]=d.x(u);return s.join("")})}function Cn(e,t){var n=typeof t,o;return t==null||n==="boolean"?Bo(t):(n==="number"?ct:n==="string"?(o=Nt(t))?(t=o,Kn):yi:t instanceof Nt?Kn:t instanceof Date?eh:Qg(t)?jg:Array.isArray(t)?Jg:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?th:ct)(e,t)}var Hs=180/Math.PI,hi={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Gs(e,t,n,o,r,i){var a,s,l;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*o)&&(n-=e*l,o-=t*l),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,l/=s),e*o<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*Hs,skewX:Math.atan(l)*Hs,scaleX:a,scaleY:s}}var Ho;function rh(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?hi:Gs(t.a,t.b,t.c,t.d,t.e,t.f)}function ih(e){return e==null||(Ho||(Ho=document.createElementNS("http://www.w3.org/2000/svg","g")),Ho.setAttribute("transform",e),!(e=Ho.transform.baseVal.consolidate()))?hi:(e=e.matrix,Gs(e.a,e.b,e.c,e.d,e.e,e.f))}function Xs(e,t,n,o){function r(u){return u.length?u.pop()+" ":""}function i(u,c,d,f,m,p){if(u!==d||c!==f){var y=m.push("translate(",null,t,null,n);p.push({i:y-4,x:ct(u,d)},{i:y-2,x:ct(c,f)})}else(d||f)&&m.push("translate("+d+t+f+n)}function a(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:ct(u,c)})):c&&d.push(r(d)+"rotate("+c+o)}function s(u,c,d,f){u!==c?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:ct(u,c)}):c&&d.push(r(d)+"skewX("+c+o)}function l(u,c,d,f,m,p){if(u!==d||c!==f){var y=m.push(r(m)+"scale(",null,",",null,")");p.push({i:y-4,x:ct(u,d)},{i:y-2,x:ct(c,f)})}else(d!==1||f!==1)&&m.push(r(m)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=e(u),c=e(c),i(u.translateX,u.translateY,c.translateX,c.translateY,d,f),a(u.rotate,c.rotate,d,f),s(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(m){for(var p=-1,y=f.length,b;++p<y;)d[(b=f[p]).i]=b.x(m);return d.join("")}}}var Ys=Xs(rh,"px, ","px)","deg)"),qs=Xs(ih,", ",")",")"),ah=1e-12;function Bs(e){return((e=Math.exp(e))+1/e)/2}function sh(e){return((e=Math.exp(e))-1/e)/2}function lh(e){return((e=Math.exp(2*e))-1)/(e+1)}var Nn=(function e(t,n,o){function r(i,a){var s=i[0],l=i[1],u=i[2],c=a[0],d=a[1],f=a[2],m=c-s,p=d-l,y=m*m+p*p,b,h;if(y<ah)h=Math.log(f/u)/t,b=function(v){return[s+v*m,l+v*p,u*Math.exp(t*v*h)]};else{var k=Math.sqrt(y),g=(f*f-u*u+o*y)/(2*u*n*k),w=(f*f-u*u-o*y)/(2*f*n*k),S=Math.log(Math.sqrt(g*g+1)-g),C=Math.log(Math.sqrt(w*w+1)-w);h=(C-S)/t,b=function(v){var E=v*h,z=Bs(S),B=u/(n*k)*(z*lh(t*E+S)-sh(S));return[s+B*m,l+B*p,u*z/Bs(t*E+S)]}}return b.duration=Math.abs(h)*1e3*t/Math.SQRT2,b}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,l=s*s;return e(a,s,l)},r})(Math.SQRT2,2,4);function Us(e){return function(t,n){var o=e((t=To(t)).h,(n=To(n)).h),r=Ye(t.s,n.s),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var iv=Us(bi),av=Us(Ye);function Zs(e){return function(t,n){var o=e((t=Oo(t)).h,(n=Oo(n)).h),r=Ye(t.c,n.c),i=Ye(t.l,n.l),a=Ye(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var sv=Zs(bi),lv=Zs(Ye);function Ks(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Lo(r)).h,(i=Lo(i)).h),s=Ye(r.s,i.s),l=Ye(r.l,i.l),u=Ye(r.opacity,i.opacity);return function(c){return r.h=a(c),r.s=s(c),r.l=l(Math.pow(c,n)),r.opacity=u(c),r+""}}return o.gamma=t,o})(1)}var cv=Ks(bi),uv=Ks(Ye);var En=0,Qn=0,jn=0,Qs=1e3,Wo,Jn,Fo=0,on=0,Go=0,eo=typeof performance=="object"&&performance.now?performance:Date,Js=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Xo(){return on||(Js(ch),on=eo.now()+Go)}function ch(){on=0}function Vo(){this._call=this._time=this._next=null}Vo.prototype=wi.prototype={constructor:Vo,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Xo():+n)+(t==null?0:+t),!this._next&&Jn!==this&&(Jn?Jn._next=this:Wo=this,Jn=this),this._call=e,this._time=n,xi()},stop:function(){this._call&&(this._call=null,this._time=1/0,xi())}};function wi(e,t,n){var o=new Vo;return o.restart(e,t,n),o}function uh(){Xo(),++En;for(var e=Wo,t;e;)(t=on-e._time)>=0&&e._call.call(void 0,t),e=e._next;--En}function js(){on=(Fo=eo.now())+Go,En=Qn=0;try{uh()}finally{En=0,fh(),on=0}}function dh(){var e=eo.now(),t=e-Fo;t>Qs&&(Go-=t,Fo=e)}function fh(){for(var e,t=Wo,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Wo=n);Jn=e,xi(o)}function xi(e){if(!En){Qn&&(Qn=clearTimeout(Qn));var t=e-on;t>24?(e<1/0&&(Qn=setTimeout(js,Math.ceil(e-eo.now()-Go)+1)),jn&&(jn=clearInterval(jn))):(jn||(Fo=eo.now(),jn=setInterval(dh,Qs)),En=1,Js(js))}}function vi(e,t,n){var o=new Vo;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function tl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var ki=3,pv=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(ki),mv=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(ki),gv=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(ki),ph=Math.PI,hv=ph/2;function Yo(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var el=4/11,bv=6/11,yv=8/11,xv=3/4,wv=9/11,vv=10/11,kv=15/16,Sv=21/22,Cv=63/64,Nv=1/el/el;var Si=1.70158,Ev=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(Si),_v=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(Si),Mv=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(Si),_n=2*Math.PI,Ci=1,Ni=.3,Iv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=_n);function r(i){return t*Yo(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*_n)},r.period=function(i){return e(t,i)},r})(Ci,Ni),Pv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=_n);function r(i){return 1-t*Yo(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*_n)},r.period=function(i){return e(t,i)},r})(Ci,Ni),zv=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=_n);function r(i){return((i=i*2-1)<0?t*Yo(-i)*Math.sin((o-i)/n):2-t*Yo(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*_n)},r.period=function(i){return e(t,i)},r})(Ci,Ni);var mh=Kt("start","end","cancel","interrupt"),gh=[],rl=0,nl=1,Ei=2,qo=3,ol=4,_i=5,Uo=6;function Zo(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;hh(e,n,{name:t,index:o,group:r,on:mh,tween:gh,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:rl})}function Mi(e,t){var n=ut(e,t);if(n.state>rl)throw new Error("too late; already scheduled");return n}function ht(e,t){var n=ut(e,t);if(n.state>qo)throw new Error("too late; already running");return n}function ut(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function hh(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=wi(i,0,n.time);function i(u){n.state=nl,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var c,d,f,m;if(n.state!==nl)return l();for(c in o)if(m=o[c],m.name===n.name){if(m.state===qo)return vi(a);m.state===ol?(m.state=Uo,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete o[c]):+c<t&&(m.state=Uo,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete o[c])}if(vi(function(){n.state===qo&&(n.state=ol,n.timer.restart(s,n.delay,n.time),s(u))}),n.state=Ei,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Ei){for(n.state=qo,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(m=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=m);r.length=d+1}}function s(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=_i,1),d=-1,f=r.length;++d<f;)r[d].call(e,c);n.state===_i&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=Uo,n.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function to(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>Ei&&o.state<_i,o.state=Uo,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function bh(e){return this.each(function(){to(this,e)})}function yh(e,t){var n,o;return function(){var r=ht(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function xh(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=ht(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===t){r[l]=s;break}l===u&&r.push(s)}i.tween=r}}function wh(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ut(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?yh:xh)(n,e,t))}function Ii(e,t,n){var o=e._id;return e.each(function(){var r=ht(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ut(r,o).value[t]}}function il(e,t){var n;return(typeof t=="number"?ct:t instanceof Nt?Kn:(n=Nt(t))?(t=n,Kn):yi)(e,t)}function vh(e){return function(){this.removeAttribute(e)}}function kh(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Sh(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function Ch(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function Nh(e,t,n){var o,r,i;return function(){var a,s=n(this),l;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),l=s+"",a===l?null:a===o&&l===r?i:(r=l,i=t(o=a,s)))}}function Eh(e,t,n){var o,r,i;return function(){var a,s=n(this),l;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),l=s+"",a===l?null:a===o&&l===r?i:(r=l,i=t(o=a,s)))}}function _h(e,t){var n=Gn(e),o=n==="transform"?qs:il;return this.attrTween(e,typeof t=="function"?(n.local?Eh:Nh)(n,o,Ii(this,"attr."+e,t)):t==null?(n.local?kh:vh)(n):(n.local?Ch:Sh)(n,o,t))}function Mh(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Ih(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Ph(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Ih(e,i)),n}return r._value=t,r}function zh(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Mh(e,i)),n}return r._value=t,r}function Rh(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Gn(e);return this.tween(n,(o.local?Ph:zh)(o,t))}function Dh(e,t){return function(){Mi(this,e).delay=+t.apply(this,arguments)}}function Ah(e,t){return t=+t,function(){Mi(this,e).delay=t}}function Th(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Dh:Ah)(t,e)):ut(this.node(),t).delay}function Oh(e,t){return function(){ht(this,e).duration=+t.apply(this,arguments)}}function $h(e,t){return t=+t,function(){ht(this,e).duration=t}}function Lh(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Oh:$h)(t,e)):ut(this.node(),t).duration}function Hh(e,t){if(typeof t!="function")throw new Error;return function(){ht(this,e).ease=t}}function Bh(e){var t=this._id;return arguments.length?this.each(Hh(t,e)):ut(this.node(),t).ease}function Wh(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;ht(this,e).ease=n}}function Fh(e){if(typeof e!="function")throw new Error;return this.each(Wh(this._id,e))}function Vh(e){typeof e!="function"&&(e=Jr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],l,u=0;u<a;++u)(l=i[u])&&e.call(l,l.__data__,u,i)&&s.push(l);return new _t(o,this._parents,this._name,this._id)}function Gh(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var l=t[s],u=n[s],c=l.length,d=a[s]=new Array(c),f,m=0;m<c;++m)(f=l[m]||u[m])&&(d[m]=f);for(;s<o;++s)a[s]=t[s];return new _t(a,this._parents,this._name,this._id)}function Xh(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Yh(e,t,n){var o,r,i=Xh(t)?Mi:ht;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function qh(e,t){var n=this._id;return arguments.length<2?ut(this.node(),n).on.on(e):this.each(Yh(n,e,t))}function Uh(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Zh(){return this.on("end.remove",Uh(this._id))}function Kh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Io(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],l=s.length,u=i[a]=new Array(l),c,d,f=0;f<l;++f)(c=s[f])&&(d=e.call(c,c.__data__,f,s))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,Zo(u[f],t,n,f,u,ut(c,n)));return new _t(i,this._parents,t,n)}function jh(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Qr(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var l=o[s],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=e.call(c,c.__data__,d,l),m,p=ut(c,n),y=0,b=f.length;y<b;++y)(m=f[y])&&Zo(m,t,n,y,f,p);i.push(f),a.push(c)}return new _t(i,a,t,n)}var Qh=Qt.prototype.constructor;function Jh(){return new Qh(this._groups,this._parents)}function eb(e,t){var n,o,r;return function(){var i=jt(this,e),a=(this.style.removeProperty(e),jt(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function al(e){return function(){this.style.removeProperty(e)}}function tb(e,t,n){var o,r=n+"",i;return function(){var a=jt(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function nb(e,t,n){var o,r,i;return function(){var a=jt(this,e),s=n(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(e),jt(this,e))),a===l?null:a===o&&l===r?i:(r=l,i=t(o=a,s))}}function ob(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var l=ht(this,e),u=l.on,c=l.value[i]==null?s||(s=al(t)):void 0;(u!==n||r!==c)&&(o=(n=u).copy()).on(a,r=c),l.on=o}}function rb(e,t,n){var o=(e+="")=="transform"?Ys:il;return t==null?this.styleTween(e,eb(e,o)).on("end.style."+e,al(e)):typeof t=="function"?this.styleTween(e,nb(e,o,Ii(this,"style."+e,t))).each(ob(this._id,e)):this.styleTween(e,tb(e,o,t),n).on("end.style."+e,null)}function ib(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function ab(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&ib(e,a,n)),o}return i._value=t,i}function sb(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,ab(e,t,n??""))}function lb(e){return function(){this.textContent=e}}function cb(e){return function(){var t=e(this);this.textContent=t??""}}function ub(e){return this.tween("text",typeof e=="function"?cb(Ii(this,"text",e)):lb(e==null?"":e+""))}function db(e){return function(t){this.textContent=e.call(this,t)}}function fb(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&db(r)),t}return o._value=e,o}function pb(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,fb(e))}function mb(){for(var e=this._name,t=this._id,n=sl(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,l,u=0;u<s;++u)if(l=a[u]){var c=ut(l,t);Zo(l,e,n,u,a,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new _t(o,this._parents,e,n)}function gb(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},l={value:function(){--r===0&&i()}};n.each(function(){var u=ht(this,o),c=u.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(l)),u.on=t}),r===0&&i()})}var hb=0;function _t(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function bb(e){return Qt().transition(e)}function sl(){return++hb}var Et=Qt.prototype;_t.prototype=bb.prototype={constructor:_t,select:Kh,selectAll:jh,selectChild:Et.selectChild,selectChildren:Et.selectChildren,filter:Vh,merge:Gh,selection:Jh,transition:mb,call:Et.call,nodes:Et.nodes,node:Et.node,size:Et.size,empty:Et.empty,each:Et.each,on:qh,attr:_h,attrTween:Rh,style:rb,styleTween:sb,text:ub,textTween:pb,remove:Zh,tween:wh,delay:Th,duration:Lh,ease:Bh,easeVarying:Fh,end:gb,[Symbol.iterator]:Et[Symbol.iterator]};var yb={time:null,delay:0,duration:250,ease:tl};function xb(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function wb(e){var t,n;e instanceof _t?(t=e._id,e=e._name):(t=sl(),(n=yb).time=Xo(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,l,u=0;u<s;++u)(l=a[u])&&Zo(l,e,t,u,a,n||xb(l,t));return new _t(o,this._parents,e,t)}Qt.prototype.interrupt=bh;Qt.prototype.transition=wb;var Ko=e=>()=>e;function vb(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Mt(e,t,n){this.k=e,this.x=t,this.y=n}Mt.prototype={constructor:Mt,scale:function(e){return e===1?this:new Mt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Mt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var oo=new Mt(1,0,0);zi.prototype=Mt.prototype;function zi(e){for(;!e.__zoom;)if(!(e=e.parentNode))return oo;return e.__zoom}function Pi(e){e.stopImmediatePropagation()}function no(e){e.preventDefault(),e.stopImmediatePropagation()}function kb(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Sb(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function ll(){return this.__zoom||oo}function Cb(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Nb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Eb(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Ri(){var e=kb,t=Sb,n=Eb,o=Cb,r=Nb,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,l=Nn,u=Kt("start","zoom","end"),c,d,f,m=500,p=150,y=0,b=10;function h(x){x.property("__zoom",ll).on("wheel.zoom",E,{passive:!1}).on("mousedown.zoom",z).on("dblclick.zoom",B).filter(r).on("touchstart.zoom",P).on("touchmove.zoom",O).on("touchend.zoom touchcancel.zoom",I).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}h.transform=function(x,_,M,N){var R=x.selection?x.selection():x;R.property("__zoom",ll),x!==R?S(x,_,M,N):R.interrupt().each(function(){C(this,arguments).event(N).start().zoom(null,typeof _=="function"?_.apply(this,arguments):_).end()})},h.scaleBy=function(x,_,M,N){h.scaleTo(x,function(){var R=this.__zoom.k,D=typeof _=="function"?_.apply(this,arguments):_;return R*D},M,N)},h.scaleTo=function(x,_,M,N){h.transform(x,function(){var R=t.apply(this,arguments),D=this.__zoom,H=M==null?w(R):typeof M=="function"?M.apply(this,arguments):M,F=D.invert(H),G=typeof _=="function"?_.apply(this,arguments):_;return n(g(k(D,G),H,F),R,a)},M,N)},h.translateBy=function(x,_,M,N){h.transform(x,function(){return n(this.__zoom.translate(typeof _=="function"?_.apply(this,arguments):_,typeof M=="function"?M.apply(this,arguments):M),t.apply(this,arguments),a)},null,N)},h.translateTo=function(x,_,M,N,R){h.transform(x,function(){var D=t.apply(this,arguments),H=this.__zoom,F=N==null?w(D):typeof N=="function"?N.apply(this,arguments):N;return n(oo.translate(F[0],F[1]).scale(H.k).translate(typeof _=="function"?-_.apply(this,arguments):-_,typeof M=="function"?-M.apply(this,arguments):-M),D,a)},N,R)};function k(x,_){return _=Math.max(i[0],Math.min(i[1],_)),_===x.k?x:new Mt(_,x.x,x.y)}function g(x,_,M){var N=_[0]-M[0]*x.k,R=_[1]-M[1]*x.k;return N===x.x&&R===x.y?x:new Mt(x.k,N,R)}function w(x){return[(+x[0][0]+ +x[1][0])/2,(+x[0][1]+ +x[1][1])/2]}function S(x,_,M,N){x.on("start.zoom",function(){C(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(N).end()}).tween("zoom",function(){var R=this,D=arguments,H=C(R,D).event(N),F=t.apply(R,D),G=M==null?w(F):typeof M=="function"?M.apply(R,D):M,Y=Math.max(F[1][0]-F[0][0],F[1][1]-F[0][1]),q=R.__zoom,J=typeof _=="function"?_.apply(R,D):_,le=l(q.invert(G).concat(Y/q.k),J.invert(G).concat(Y/J.k));return function(W){if(W===1)W=J;else{var A=le(W),U=Y/A[2];W=new Mt(U,G[0]-A[0]*U,G[1]-A[1]*U)}H.zoom(null,W)}})}function C(x,_,M){return!M&&x.__zooming||new v(x,_)}function v(x,_){this.that=x,this.args=_,this.active=0,this.sourceEvent=null,this.extent=t.apply(x,_),this.taps=0}v.prototype={event:function(x){return x&&(this.sourceEvent=x),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(x,_){return this.mouse&&x!=="mouse"&&(this.mouse[1]=_.invert(this.mouse[0])),this.touch0&&x!=="touch"&&(this.touch0[1]=_.invert(this.touch0[0])),this.touch1&&x!=="touch"&&(this.touch1[1]=_.invert(this.touch1[0])),this.that.__zoom=_,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(x){var _=Le(this.that).datum();u.call(x,this.that,new vb(x,{sourceEvent:this.sourceEvent,target:h,transform:this.that.__zoom,dispatch:u}),_)}};function E(x,..._){if(!e.apply(this,arguments))return;var M=C(this,_).event(x),N=this.__zoom,R=Math.max(i[0],Math.min(i[1],N.k*Math.pow(2,o.apply(this,arguments)))),D=Xe(x);if(M.wheel)(M.mouse[0][0]!==D[0]||M.mouse[0][1]!==D[1])&&(M.mouse[1]=N.invert(M.mouse[0]=D)),clearTimeout(M.wheel);else{if(N.k===R)return;M.mouse=[D,N.invert(D)],to(this),M.start()}no(x),M.wheel=setTimeout(H,p),M.zoom("mouse",n(g(k(N,R),M.mouse[0],M.mouse[1]),M.extent,a));function H(){M.wheel=null,M.end()}}function z(x,..._){if(f||!e.apply(this,arguments))return;var M=x.currentTarget,N=C(this,_,!0).event(x),R=Le(x.view).on("mousemove.zoom",G,!0).on("mouseup.zoom",Y,!0),D=Xe(x,M),H=x.clientX,F=x.clientY;oi(x.view),Pi(x),N.mouse=[D,this.__zoom.invert(D)],to(this),N.start();function G(q){if(no(q),!N.moved){var J=q.clientX-H,le=q.clientY-F;N.moved=J*J+le*le>y}N.event(q).zoom("mouse",n(g(N.that.__zoom,N.mouse[0]=Xe(q,M),N.mouse[1]),N.extent,a))}function Y(q){R.on("mousemove.zoom mouseup.zoom",null),ri(q.view,N.moved),no(q),N.event(q).end()}}function B(x,..._){if(e.apply(this,arguments)){var M=this.__zoom,N=Xe(x.changedTouches?x.changedTouches[0]:x,this),R=M.invert(N),D=M.k*(x.shiftKey?.5:2),H=n(g(k(M,D),N,R),t.apply(this,_),a);no(x),s>0?Le(this).transition().duration(s).call(S,H,N,x):Le(this).call(h.transform,H,N,x)}}function P(x,..._){if(e.apply(this,arguments)){var M=x.touches,N=M.length,R=C(this,_,x.changedTouches.length===N).event(x),D,H,F,G;for(Pi(x),H=0;H<N;++H)F=M[H],G=Xe(F,this),G=[G,this.__zoom.invert(G),F.identifier],R.touch0?!R.touch1&&R.touch0[2]!==G[2]&&(R.touch1=G,R.taps=0):(R.touch0=G,D=!0,R.taps=1+!!c);c&&(c=clearTimeout(c)),D&&(R.taps<2&&(d=G[0],c=setTimeout(function(){c=null},m)),to(this),R.start())}}function O(x,..._){if(this.__zooming){var M=C(this,_).event(x),N=x.changedTouches,R=N.length,D,H,F,G;for(no(x),D=0;D<R;++D)H=N[D],F=Xe(H,this),M.touch0&&M.touch0[2]===H.identifier?M.touch0[0]=F:M.touch1&&M.touch1[2]===H.identifier&&(M.touch1[0]=F);if(H=M.that.__zoom,M.touch1){var Y=M.touch0[0],q=M.touch0[1],J=M.touch1[0],le=M.touch1[1],W=(W=J[0]-Y[0])*W+(W=J[1]-Y[1])*W,A=(A=le[0]-q[0])*A+(A=le[1]-q[1])*A;H=k(H,Math.sqrt(W/A)),F=[(Y[0]+J[0])/2,(Y[1]+J[1])/2],G=[(q[0]+le[0])/2,(q[1]+le[1])/2]}else if(M.touch0)F=M.touch0[0],G=M.touch0[1];else return;M.zoom("touch",n(g(H,F,G),M.extent,a))}}function I(x,..._){if(this.__zooming){var M=C(this,_).event(x),N=x.changedTouches,R=N.length,D,H;for(Pi(x),f&&clearTimeout(f),f=setTimeout(function(){f=null},m),D=0;D<R;++D)H=N[D],M.touch0&&M.touch0[2]===H.identifier?delete M.touch0:M.touch1&&M.touch1[2]===H.identifier&&delete M.touch1;if(M.touch1&&!M.touch0&&(M.touch0=M.touch1,delete M.touch1),M.touch0)M.touch0[1]=this.__zoom.invert(M.touch0[0]);else if(M.end(),M.taps===2&&(H=Xe(H,this),Math.hypot(d[0]-H[0],d[1]-H[1])<b)){var F=Le(this).on("dblclick.zoom");F&&F.apply(this,arguments)}}}return h.wheelDelta=function(x){return arguments.length?(o=typeof x=="function"?x:Ko(+x),h):o},h.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Ko(!!x),h):e},h.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:Ko(!!x),h):r},h.extent=function(x){return arguments.length?(t=typeof x=="function"?x:Ko([[+x[0][0],+x[0][1]],[+x[1][0],+x[1][1]]]),h):t},h.scaleExtent=function(x){return arguments.length?(i[0]=+x[0],i[1]=+x[1],h):[i[0],i[1]]},h.translateExtent=function(x){return arguments.length?(a[0][0]=+x[0][0],a[1][0]=+x[1][0],a[0][1]=+x[0][1],a[1][1]=+x[1][1],h):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},h.constrain=function(x){return arguments.length?(n=x,h):n},h.duration=function(x){return arguments.length?(s=+x,h):s},h.interpolate=function(x){return arguments.length?(l=x,h):l},h.on=function(){var x=u.on.apply(u,arguments);return x===u?h:x},h.clickDistance=function(x){return arguments.length?(y=(x=+x)*x,h):Math.sqrt(y)},h.tapDistance=function(x){return arguments.length?(b=+x,h):b},h}var Je={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Rn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],$i=["Enter"," ","Escape"],Li={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Lt;(function(e){e.Strict="strict",e.Loose="loose"})(Lt||(Lt={}));var It;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(It||(It={}));var rn;(function(e){e.Partial="partial",e.Full="full"})(rn||(rn={}));var Hi={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},bt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(bt||(bt={}));var Pn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Pn||(Pn={}));var te;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(te||(te={}));var cl={[te.Left]:te.Right,[te.Right]:te.Left,[te.Top]:te.Bottom,[te.Bottom]:te.Top};function Bi(e){return e===null?null:e?"valid":"invalid"}var Wi=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,kl=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Fi=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var io=(e,t=[0,0])=>{let{width:n,height:o}=dt(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},Vi=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):Fi(r)?r:t.nodeLookup.get(r.id));let s=a?Jo(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return nr(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return or(n)},Dn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=nr(n,Jo(r)),o=!0)}),o?or(n):{x:0,y:0,width:0,height:0}},er=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,l=(t.y-o)/r,u=t.width/r,c=t.height/r,d=[];for(let f of e.values()){let{measured:m,selectable:p=!0,hidden:y=!1}=f;if(a&&!p||y)continue;let b=m.width??f.width??f.initialWidth??0,h=m.height??f.height??f.initialHeight??0,{x:k,y:g}=f.internals.positionAbsolute,w=_l(s,l,u,c,k,g,b,h),S=b*h,C=i&&w>0;(!f.internals.handleBounds||C||w>=S||f.dragging)&&d.push(f)}return d},Sl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function _b(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=dt(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Cl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=_b(e,a),l=Dn(s),u=so(l,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(u,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function Gi({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:l,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},c=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",Je.error005());else{let m=s.measured.width,p=s.measured.height;m&&p&&(d=[[l,u],[l+m,u+p]])}else s&&ln(a.extent)&&(d=[[a.extent[0][0]+l,a.extent[0][1]+u],[a.extent[1][0]+l,a.extent[1][1]+u]]);let f=ln(d)?an(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",Je.error015()),{position:{x:f.x-l+(a.measured.width??0)*c[0],y:f.y-u+(a.measured.height??0)*c[1]},positionAbsolute:f}}async function Nl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let m=i.has(f.id),p=!m&&f.parentId&&a.find(y=>y.id===f.parentId);(m||p)&&a.push(f)}let s=new Set(t.map(f=>f.id)),l=o.filter(f=>f.deletable!==!1),c=Sl(a,l);for(let f of l)s.has(f.id)&&!c.find(p=>p.id===f.id)&&c.push(f);if(!r)return{edges:c,nodes:a};let d=await r({nodes:a,edges:c});return typeof d=="boolean"?d?{edges:c,nodes:a}:{edges:[],nodes:[]}:d}var zn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),an=(e={x:0,y:0},t,n)=>({x:zn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:zn(e.y,t[0][1],t[1][1]-(n?.height??0))});function El(e,t,n){let{width:o,height:r}=dt(n),{x:i,y:a}=n.internals.positionAbsolute;return an(e,[[i,a],[i+o,a+r]],t)}var ul=(e,t,n)=>e<t?zn(Math.abs(e-t),1,t)/t:e>n?-zn(Math.abs(e-n),1,t)/t:0,tr=(e,t,n=15,o=40)=>{let r=ul(e.x,o,t.width-o)*n,i=ul(e.y,o,t.height-o)*n;return[r,i]},nr=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Oi=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),or=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),An=(e,t=[0,0])=>{let{x:n,y:o}=Fi(e)?e.internals.positionAbsolute:io(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Jo=(e,t=[0,0])=>{let{x:n,y:o}=Fi(e)?e.internals.positionAbsolute:io(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Xi=(e,t)=>or(nr(Oi(e),Oi(t))),_l=(e,t,n,o,r,i,a,s)=>{let l=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),u=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(l*u)},ao=(e,t)=>_l(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Yi=e=>ot(e.width)&&ot(e.height)&&ot(e.x)&&ot(e.y),ot=e=>!isNaN(e)&&isFinite(e),qi=(e,t)=>(n,o)=>{},Tn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),On=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?Tn(s,a):s},sn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function Mn(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Mb(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=Mn(e,n),r=Mn(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=Mn(e.top??e.y??0,n),r=Mn(e.bottom??e.y??0,n),i=Mn(e.left??e.x??0,t),a=Mn(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Ib(e,t,n,o,r,i){let{x:a,y:s}=sn(e,[t,n,o]),{x:l,y:u}=sn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),c=r-l,d=i-u;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(c),bottom:Math.floor(d)}}var so=(e,t,n,o,r,i)=>{let a=Mb(i,t,n),s=(t-a.x)/e.width,l=(n-a.y)/e.height,u=Math.min(s,l),c=zn(u,o,r),d=e.x+e.width/2,f=e.y+e.height/2,m=t/2-d*c,p=n/2-f*c,y=Ib(e,m,p,c,t,n),b={left:Math.min(y.left-a.left,0),top:Math.min(y.top-a.top,0),right:Math.min(y.right-a.right,0),bottom:Math.min(y.bottom-a.bottom,0)};return{x:m-b.left+b.right,y:p-b.top+b.bottom,zoom:c}},$n=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function ln(e){return e!=null&&e!=="parent"}function dt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Ui(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Zi(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function Ki(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Ml(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function Il(e){return{...Li,...e||{}}}function ro(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=rt(e),s=On({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:l,y:u}=n?Tn(s,t):s;return{xSnapped:l,ySnapped:u,...s}}var rr=e=>({width:e.offsetWidth,height:e.offsetHeight}),ji=e=>e?.getRootNode?.()||window?.document,Pb=["INPUT","SELECT","TEXTAREA"];function Qi(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Pb.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Ji=e=>"clientX"in e,rt=(e,t)=>{let n=Ji(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},dl=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...rr(a)}})};function ir({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let l=e*.125+r*.375+a*.375+n*.125,u=t*.125+i*.375+s*.375+o*.125,c=Math.abs(l-e),d=Math.abs(u-t);return[l,u,c,d]}function jo(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function fl({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case te.Left:return[t-jo(t-o,i),n];case te.Right:return[t+jo(o-t,i),n];case te.Top:return[t,n-jo(n-r,i)];case te.Bottom:return[t,n+jo(r-n,i)]}}function ar({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,curvature:a=.25}){let[s,l]=fl({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[u,c]=fl({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,m,p]=ir({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${e},${t} C${s},${l} ${u},${c} ${o},${r}`,d,f,m,p]}function ea({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function Pl({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function zl({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=nr(Jo(e),Jo(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return ao(a,or(i))>0}var zb=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,Rb=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),Rl=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Je.error006()),t;let o=n.getEdgeId||zb,r;return Wi(e)?r={...e}:r={...e,id:o(e)},Rb(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function sr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=ea({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var pl={[te.Left]:{x:-1,y:0},[te.Right]:{x:1,y:0},[te.Top]:{x:0,y:-1},[te.Bottom]:{x:0,y:1}},Db=({source:e,sourcePosition:t=te.Bottom,target:n})=>t===te.Left||t===te.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},ml=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Ab({source:e,sourcePosition:t=te.Bottom,target:n,targetPosition:o=te.Top,center:r,offset:i,stepPosition:a}){let s=pl[t],l=pl[o],u={x:e.x+s.x*i,y:e.y+s.y*i},c={x:n.x+l.x*i,y:n.y+l.y*i},d=Db({source:u,sourcePosition:t,target:c}),f=d.x!==0?"x":"y",m=d[f],p=[],y,b,h={x:0,y:0},k={x:0,y:0},[,,g,w]=ea({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*l[f]===-1){f==="x"?(y=r.x??u.x+(c.x-u.x)*a,b=r.y??(u.y+c.y)/2):(y=r.x??(u.x+c.x)/2,b=r.y??u.y+(c.y-u.y)*a);let E=[{x:y,y:u.y},{x:y,y:c.y}],z=[{x:u.x,y:b},{x:c.x,y:b}];s[f]===m?p=f==="x"?E:z:p=f==="x"?z:E}else{let E=[{x:u.x,y:c.y}],z=[{x:c.x,y:u.y}];if(f==="x"?p=s.x===m?z:E:p=s.y===m?E:z,t===o){let x=Math.abs(e[f]-n[f]);if(x<=i){let _=Math.min(i-1,i-x);s[f]===m?h[f]=(u[f]>e[f]?-1:1)*_:k[f]=(c[f]>n[f]?-1:1)*_}}if(t!==o){let x=f==="x"?"y":"x",_=s[f]===l[x],M=u[x]>c[x],N=u[x]<c[x];(s[f]===1&&(!_&&M||_&&N)||s[f]!==1&&(!_&&N||_&&M))&&(p=f==="x"?E:z)}let B={x:u.x+h.x,y:u.y+h.y},P={x:c.x+k.x,y:c.y+k.y},O=Math.max(Math.abs(B.x-p[0].x),Math.abs(P.x-p[0].x)),I=Math.max(Math.abs(B.y-p[0].y),Math.abs(P.y-p[0].y));O>=I?(y=(B.x+P.x)/2,b=p[0].y):(y=p[0].x,b=(B.y+P.y)/2)}let S={x:u.x+h.x,y:u.y+h.y},C={x:c.x+k.x,y:c.y+k.y};return[[e,...S.x!==p[0].x||S.y!==p[0].y?[S]:[],...p,...C.x!==p[p.length-1].x||C.y!==p[p.length-1].y?[C]:[],n],y,b,g,w]}function Tb(e,t,n,o){let r=Math.min(ml(e,t)/2,ml(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let u=e.x<n.x?-1:1,c=e.y<n.y?1:-1;return`L ${i+r*u},${a}Q ${i},${a} ${i},${a+r*c}`}let s=e.x<n.x?1:-1,l=e.y<n.y?-1:1;return`L ${i},${a+r*l}Q ${i},${a} ${i+r*s},${a}`}function lo({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top,borderRadius:a=5,centerX:s,centerY:l,offset:u=20,stepPosition:c=.5}){let[d,f,m,p,y]=Ab({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:l},offset:u,stepPosition:c}),b=`M${d[0].x} ${d[0].y}`;for(let h=1;h<d.length-1;h++)b+=Tb(d[h-1],d[h],d[h+1],a);return b+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[b,f,m,p,y]}function gl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Dl(e){let{sourceNode:t,targetNode:n}=e;if(!gl(t)||!gl(n))return null;let o=t.internals.handleBounds||hl(t.handles),r=n.internals.handleBounds||hl(n.handles),i=bl(o?.source??[],e.sourceHandle),a=bl(e.connectionMode===Lt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",Je.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||te.Bottom,l=a?.position||te.Top,u=Ht(t,i,s),c=Ht(n,a,l);return{sourceX:u.x,sourceY:u.y,targetX:c.x,targetY:c.y,sourcePosition:s,targetPosition:l}}function hl(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function Ht(e,t,n=te.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??dt(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case te.Top:return{x:r+a/2,y:i};case te.Right:return{x:r+a,y:i+s/2};case te.Bottom:return{x:r+a/2,y:i+s};case te.Left:return{x:r,y:i+s/2}}}function bl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function lr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Al(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(l=>{if(l&&typeof l=="object"){let u=lr(l,t);i.has(u)||(a.push({id:u,color:l.color||n,...l}),i.add(u))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var Tl=1e3,Ob=10,ta={nodeOrigin:[0,0],nodeExtent:Rn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},$b={...ta,checkEquality:!0};function na(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function Ol(e,t,n){let o=na(ta,n);for(let r of e.values())if(r.parentId)ra(r,e,t,o);else{let i=io(r,o.nodeOrigin),a=ln(r.extent)?r.extent:o.nodeExtent,s=an(i,a,dt(r));r.internals.positionAbsolute=s}}function Lb(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function oa(e){return e==="manual"}function cr(e,t,n,o={}){let r=na($b,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!oa(r.zIndexMode)?Tl:0,l=e.length>0,u=!1;t.clear(),n.clear();for(let c of e){let d=a.get(c.id);if(r.checkEquality&&c===d?.internals.userNode)t.set(c.id,d);else{let f=io(c,r.nodeOrigin),m=ln(c.extent)?c.extent:r.nodeExtent,p=an(f,m,dt(c));d={...r.defaults,...c,measured:{width:c.measured?.width,height:c.measured?.height},internals:{positionAbsolute:p,handleBounds:Lb(c,d),z:$l(c,s,r.zIndexMode),userNode:c}},t.set(c.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(l=!1),c.parentId&&ra(d,t,n,o,i),u||=c.selected??!1}return{nodesInitialized:l,hasSelectedNodes:u}}function Hb(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function ra(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:l}=na(ta,o),u=e.parentId,c=t.get(u);if(!c){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Hb(e,n),r&&!c.parentId&&c.internals.rootParentIndex===void 0&&l==="auto"&&(c.internals.rootParentIndex=++r.i,c.internals.z=c.internals.z+r.i*Ob),r&&c.internals.rootParentIndex!==void 0&&(r.i=c.internals.rootParentIndex);let d=i&&!oa(l)?Tl:0,{x:f,y:m,z:p}=Bb(e,c,a,s,d,l),{positionAbsolute:y}=e.internals,b=f!==y.x||m!==y.y;(b||p!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:b?{x:f,y:m}:y,z:p}})}function $l(e,t,n){let o=ot(e.zIndex)?e.zIndex:0;return oa(n)?o:o+(e.selected?t:0)}function Bb(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,l=dt(e),u=io(e,n),c=ln(e.extent)?an(u,e.extent,l):u,d=an({x:a+c.x,y:s+c.y},o,l);e.extent==="parent"&&(d=El(d,l,t));let f=$l(e,r,i),m=t.internals.z??0;return{x:d.x,y:d.y,z:m>=f?m+1:f}}function ur(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let l=i.get(a.parentId)?.expandedRect??An(s),u=Xi(l,a.rect);i.set(a.parentId,{expandedRect:u,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},l)=>{let u=s.internals.positionAbsolute,c=dt(s),d=s.origin??o,f=a.x<u.x?Math.round(Math.abs(u.x-a.x)):0,m=a.y<u.y?Math.round(Math.abs(u.y-a.y)):0,p=Math.max(c.width,Math.round(a.width)),y=Math.max(c.height,Math.round(a.height)),b=(p-c.width)*d[0],h=(y-c.height)*d[1];(f>0||m>0||b||h)&&(r.push({id:l,type:"position",position:{x:s.position.x-f+b,y:s.position.y-m+h}}),n.get(l)?.forEach(k=>{e.some(g=>g.id===k.id)||r.push({id:k.id,type:"position",position:{x:k.position.x+f,y:k.position.y+m}})})),(c.width<a.width||c.height<a.height||f||m)&&r.push({id:l,type:"dimensions",setAttributes:!0,dimensions:{width:p+(f?d[0]*f-b:0),height:y+(m?d[1]*m-h:0)}})}),r}function Ll(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),l=!1;if(!s)return{changes:[],updatedInternals:l};let u=[],c=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(c.transform),f=[];for(let m of e.values()){let p=t.get(m.id);if(!p)continue;if(p.hidden){t.set(p.id,{...p,internals:{...p.internals,handleBounds:void 0}}),l=!0;continue}let y=rr(m.nodeElement),b=p.measured.width!==y.width||p.measured.height!==y.height;if(!!(y.width&&y.height&&(b||!p.internals.handleBounds||m.force))){let k=m.nodeElement.getBoundingClientRect(),g=ln(p.extent)?p.extent:i,{positionAbsolute:w}=p.internals;if(p.parentId&&p.extent==="parent"){let C=t.get(p.parentId);C&&(w=El(w,y,C))}else g&&(w=an(w,g,y));let S={...p,measured:y,internals:{...p.internals,positionAbsolute:w,handleBounds:{source:dl("source",m.nodeElement,k,d,p.id),target:dl("target",m.nodeElement,k,d,p.id)}}};t.set(p.id,S),p.parentId&&ra(S,t,n,{nodeOrigin:r,zIndexMode:a}),l=!0,b&&(u.push({id:p.id,type:"dimensions",dimensions:y}),p.expandParent&&p.parentId&&f.push({id:p.id,parentId:p.parentId,rect:An(S,r)}))}}if(f.length>0){let m=ur(f,t,n,r);u.push(...m)}return{changes:u,updatedInternals:l}}async function Hl({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function yl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let l=o.get(a)||new Map;if(o.set(a,l.set(n,t)),i){a=`${r}-${e}-${i}`;let u=o.get(a)||new Map;o.set(a,u.set(n,t))}}function ia(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,l={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},u=`${r}-${a}--${i}-${s}`,c=`${i}-${s}--${r}-${a}`;yl("source",l,c,e,r,a),yl("target",l,u,e,i,s),t.set(o.id,o)}}function Bl(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Bl(n,t):!1}function xl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function Wb(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!Bl(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function Di({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let l=n.get(a)?.internals.userNode;l&&r.push({...l,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Fb({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=Tn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function Wl({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,l=!1,u={x:0,y:0},c=null,d=!1,f=null,m=!1,p=!1,y=null;function b({noDragClassName:k,handleSelector:g,domNode:w,isSelectable:S,nodeId:C,nodeClickDistance:v=0}){f=Le(w);function E({x:O,y:I}){let{nodeLookup:x,nodeExtent:_,snapGrid:M,snapToGrid:N,nodeOrigin:R,onNodeDrag:D,onSelectionDrag:H,onError:F,updateNodePositions:G}=t();i={x:O,y:I};let Y=!1,q=s.size>1,J=q&&_?Oi(Dn(s)):null,le=q&&N?Fb({dragItems:s,snapGrid:M,x:O,y:I}):null;for(let[W,A]of s){if(!x.has(W))continue;let U={x:O-A.distance.x,y:I-A.distance.y};N&&(U=le?{x:Math.round(U.x+le.x),y:Math.round(U.y+le.y)}:Tn(U,M));let ne=null;if(q&&_&&!A.extent&&J){let{positionAbsolute:V}=A.internals,ee=V.x-J.x+_[0][0],re=V.x+A.measured.width-J.x2+_[1][0],de=V.y-J.y+_[0][1],Se=V.y+A.measured.height-J.y2+_[1][1];ne=[[ee,de],[re,Se]]}let{position:oe,positionAbsolute:Q}=Gi({nodeId:W,nextPosition:U,nodeLookup:x,nodeExtent:ne||_,nodeOrigin:R,onError:F});Y=Y||A.position.x!==oe.x||A.position.y!==oe.y,A.position=oe,A.internals.positionAbsolute=Q}if(p=p||Y,!!Y&&(G(s,!0),y&&(o||D||!C&&H))){let[W,A]=Di({nodeId:C,dragItems:s,nodeLookup:x});o?.(y,s,W,A),D?.(y,W,A),C||H?.(y,A)}}async function z(){if(!c)return;let{transform:O,panBy:I,autoPanSpeed:x,autoPanOnNodeDrag:_}=t();if(!_){l=!1,cancelAnimationFrame(a);return}let[M,N]=tr(u,c,x);(M!==0||N!==0)&&(i.x=(i.x??0)-M/O[2],i.y=(i.y??0)-N/O[2],await I({x:M,y:N})&&E(i)),a=requestAnimationFrame(z)}function B(O){let{nodeLookup:I,multiSelectionActive:x,nodesDraggable:_,transform:M,snapGrid:N,snapToGrid:R,selectNodesOnDrag:D,onNodeDragStart:H,onSelectionDragStart:F,unselectNodesAndEdges:G}=t();d=!0,(!D||!S)&&!x&&C&&(I.get(C)?.selected||G()),S&&D&&C&&e?.(C);let Y=ro(O.sourceEvent,{transform:M,snapGrid:N,snapToGrid:R,containerBounds:c});if(i=Y,s=Wb(I,_,Y,C),s.size>0&&(n||H||!C&&F)){let[q,J]=Di({nodeId:C,dragItems:s,nodeLookup:I});n?.(O.sourceEvent,s,q,J),H?.(O.sourceEvent,q,J),C||F?.(O.sourceEvent,J)}}let P=ii().clickDistance(v).on("start",O=>{let{domNode:I,nodeDragThreshold:x,transform:_,snapGrid:M,snapToGrid:N}=t();c=I?.getBoundingClientRect()||null,m=!1,p=!1,y=O.sourceEvent,x===0&&B(O),i=ro(O.sourceEvent,{transform:_,snapGrid:M,snapToGrid:N,containerBounds:c}),u=rt(O.sourceEvent,c)}).on("drag",O=>{let{autoPanOnNodeDrag:I,transform:x,snapGrid:_,snapToGrid:M,nodeDragThreshold:N,nodeLookup:R}=t(),D=ro(O.sourceEvent,{transform:x,snapGrid:_,snapToGrid:M,containerBounds:c});if(y=O.sourceEvent,(O.sourceEvent.type==="touchmove"&&O.sourceEvent.touches.length>1||C&&!R.has(C))&&(m=!0),!m){if(!l&&I&&d&&(l=!0,z()),!d){let H=rt(O.sourceEvent,c),F=H.x-u.x,G=H.y-u.y;Math.sqrt(F*F+G*G)>N&&B(O)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&s&&d&&(u=rt(O.sourceEvent,c),E(D))}}).on("end",O=>{if(!d||m){m&&s.size>0&&t().updateNodePositions(s,!1);return}if(l=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:I,updateNodePositions:x,onNodeDragStop:_,onSelectionDragStop:M}=t();if(p&&(x(s,!1),p=!1),r||_||!C&&M){let[N,R]=Di({nodeId:C,dragItems:s,nodeLookup:I,dragging:!1});r?.(O.sourceEvent,s,N,R),_?.(O.sourceEvent,N,R),C||M?.(O.sourceEvent,R)}}}).filter(O=>{let I=O.target;return!O.button&&(!k||!xl(I,`.${k}`,w))&&(!g||xl(I,g,w))});f.call(P)}function h(){f?.on(".drag",null)}return{update:b,destroy:h}}function Vb(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())ao(r,An(i))>0&&o.push(i);return o}var Gb=250;function Xb(e,t,n,o){let r=[],i=1/0,a=Vb(e,n,t+Gb);for(let s of a){let l=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of l){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:c,y:d}=Ht(s,u,u.position,!0),f=Math.sqrt(Math.pow(c-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...u,x:c,y:d}],i=f):f===i&&r.push({...u,x:c,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(l=>l.type===s)??r[0]}return r[0]}function Fl(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],l=(n?s?.find(u=>u.id===n):s?.[0])??null;return l&&i?{...l,...Ht(a,l,l.position,!0)}:l}function Vl(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Yb(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var Gl=()=>!0;function qb(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:l,lib:u,autoPanOnConnect:c,flowId:d,panBy:f,cancelConnection:m,onConnectStart:p,onConnect:y,onConnectEnd:b,isValidConnection:h=Gl,onReconnectEnd:k,updateConnection:g,getTransform:w,getFromHandle:S,autoPanSpeed:C,dragThreshold:v=1,handleDomNode:E}){let z=ji(e.target),B=0,P,{x:O,y:I}=rt(e),x=Vl(i,E),_=s?.getBoundingClientRect(),M=!1;if(!_||!x)return;let N=Fl(r,x,o,l,t);if(!N)return;let R=rt(e,_),D=!1,H=null,F=!1,G=null;function Y(){if(!c||!_)return;let[oe,Q]=tr(R,_,C);f({x:oe,y:Q}),B=requestAnimationFrame(Y)}let q={...N,nodeId:r,type:x,position:N.position},J=l.get(r),W={inProgress:!0,isValid:null,from:Ht(J,q,te.Left,!0),fromHandle:q,fromPosition:q.position,fromNode:J,to:R,toHandle:null,toPosition:cl[q.position],toNode:null,pointer:R};function A(){M=!0,g(W),p?.(e,{nodeId:r,handleId:o,handleType:x})}v===0&&A();function U(oe){if(!M){let{x:Se,y:at}=rt(oe),tt=Se-O,fe=at-I;if(!(tt*tt+fe*fe>v*v))return;A()}if(!S()||!q){ne(oe);return}let Q=w();R=rt(oe,_),P=Xb(On(R,Q,!1,[1,1]),n,l,q),D||(Y(),D=!0);let V=Xl(oe,{handle:P,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:h,doc:z,lib:u,flowId:d,nodeLookup:l});G=V.handleDomNode,H=V.connection,F=Yb(!!P,V.isValid);let ee=l.get(r),re=ee?Ht(ee,q,te.Left,!0):W.from,de={...W,from:re,isValid:F,to:V.toHandle&&F?sn({x:V.toHandle.x,y:V.toHandle.y},Q):R,toHandle:V.toHandle,toPosition:F&&V.toHandle?V.toHandle.position:cl[q.position],toNode:V.toHandle?l.get(V.toHandle.nodeId):null,pointer:R};g(de),W=de}function ne(oe){if(!("touches"in oe&&oe.touches.length>0)){if(M){(P||G)&&H&&F&&y?.(H);let{inProgress:Q,...V}=W,ee={...V,toPosition:W.toHandle?W.toPosition:null};b?.(oe,ee),i&&k?.(oe,ee)}m(),cancelAnimationFrame(B),D=!1,F=!1,H=null,G=null,z.removeEventListener("mousemove",U),z.removeEventListener("mouseup",ne),z.removeEventListener("touchmove",U),z.removeEventListener("touchend",ne)}}z.addEventListener("mousemove",U),z.addEventListener("mouseup",ne),z.addEventListener("touchmove",U),z.addEventListener("touchend",ne)}function Xl(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:l,isValidConnection:u=Gl,nodeLookup:c}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:m,y:p}=rt(e),y=a.elementFromPoint(m,p),b=y?.classList.contains(`${s}-flow__handle`)?y:f,h={handleDomNode:b,isValid:!1,connection:null,toHandle:null};if(b){let k=Vl(void 0,b),g=b.getAttribute("data-nodeid"),w=b.getAttribute("data-handleid"),S=b.classList.contains("connectable"),C=b.classList.contains("connectableend");if(!g||!k)return h;let v={source:d?g:o,sourceHandle:d?w:r,target:d?o:g,targetHandle:d?r:w};h.connection=v;let z=S&&C&&(n===Lt.Strict?d&&k==="source"||!d&&k==="target":g!==o||w!==r);h.isValid=z&&u(v),h.toHandle=Fl(g,k,w,c,n,!0)}return h}var dr={onPointerDown:qb,isValid:Xl};function Yl({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=Le(e);function i({translateExtent:s,width:l,height:u,zoomStep:c=1,pannable:d=!0,zoomable:f=!0,inversePan:m=!1}){let p=g=>{if(g.sourceEvent.type!=="wheel"||!t)return;let w=n(),S=g.sourceEvent.ctrlKey&&$n()?10:1,C=-g.sourceEvent.deltaY*(g.sourceEvent.deltaMode===1?.05:g.sourceEvent.deltaMode?1:.002)*c,v=w[2]*Math.pow(2,C*S);t.scaleTo(v)},y=[0,0],b=g=>{(g.sourceEvent.type==="mousedown"||g.sourceEvent.type==="touchstart")&&(y=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY])},h=g=>{let w=n();if(g.sourceEvent.type!=="mousemove"&&g.sourceEvent.type!=="touchmove"||!t)return;let S=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY],C=[S[0]-y[0],S[1]-y[1]];y=S;let v=o()*Math.max(w[2],Math.log(w[2]))*(m?-1:1),E={x:w[0]-C[0]*v,y:w[1]-C[1]*v},z=[[0,0],[l,u]];t.setViewportConstrained({x:E.x,y:E.y,zoom:w[2]},z,s)},k=Ri().on("start",b).on("zoom",d?h:null).on("zoom.wheel",f?p:null);r.call(k,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Xe}}var fr=e=>({x:e.x,y:e.y,zoom:e.k}),Ai=({x:e,y:t,zoom:n})=>oo.translate(e,t).scale(n),In=(e,t)=>e.target.closest(`.${t}`),ql=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Ub=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Ti=(e,t=0,n=Ub,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},Ul=e=>{let t=e.ctrlKey&&$n()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Zb({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:l,onPanZoomEnd:u}){return c=>{if(In(c,t))return c.ctrlKey&&c.preventDefault(),!1;c.preventDefault(),c.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(c.ctrlKey&&a){let b=Xe(c),h=Ul(c),k=d*Math.pow(2,h);o.scaleTo(n,k,b,c);return}let f=c.deltaMode===1?20:1,m=r===It.Vertical?0:c.deltaX*f,p=r===It.Horizontal?0:c.deltaY*f;!$n()&&c.shiftKey&&r!==It.Vertical&&(m=c.deltaY*f,p=0),o.translateBy(n,-(m/d)*i,-(p/d)*i,{internal:!0});let y=fr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?l?.(c,y):(e.isPanScrolling=!0,s?.(c,y)),e.panScrollTimeout=setTimeout(()=>{u?.(c,y),e.isPanScrolling=!1},150)}}function Kb({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=In(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function jb({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=fr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function Qb({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&ql(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,fr(i.transform))}}function Jb({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&ql(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=fr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function e0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:l,lib:u,connectionInProgress:c}){return d=>{let f=e||t,m=n&&d.ctrlKey,p=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(In(d,`${u}-flow__node`)||In(d,`${u}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||c&&!p||In(d,s)&&p||In(d,l)&&(!p||r&&p&&!e)||!n&&d.ctrlKey&&p)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!m&&p||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let y=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||p)&&y}}function Zl({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:l}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},c=e.getBoundingClientRect(),d=[[0,0],[c.width,c.height]];(typeof ResizeObserver<"u"?new ResizeObserver(I=>{let x=I[0];x&&(d=[[0,0],[x.contentRect.width,x.contentRect.height]])}):null)?.observe(e);let m=Ri().extent(()=>d).scaleExtent([t,n]).translateExtent(o),p=Le(e).call(m);w({x:r.x,y:r.y,zoom:zn(r.zoom,t,n)},[[0,0],[c.width,c.height]],o);let y=p.on("wheel.zoom"),b=p.on("dblclick.zoom");m.wheelDelta(Ul);async function h(I,x){return p?new Promise(_=>{m?.interpolate(x?.interpolate==="linear"?Cn:Nn).transform(Ti(p,x?.duration,x?.ease,()=>_(!0)),I)}):!1}function k({noWheelClassName:I,noPanClassName:x,onPaneContextMenu:_,userSelectionActive:M,panOnScroll:N,panOnDrag:R,panOnScrollMode:D,panOnScrollSpeed:H,preventScrolling:F,zoomOnPinch:G,zoomOnScroll:Y,zoomOnDoubleClick:q,zoomActivationKeyPressed:J,lib:le,onTransformChange:W,connectionInProgress:A,paneClickDistance:U,selectionOnDrag:ne}){M&&!u.isZoomingOrPanning&&g();let oe=N&&!J&&!M;m.clickDistance(ne?1/0:!ot(U)||U<0?0:U);let Q=oe?Zb({zoomPanValues:u,noWheelClassName:I,d3Selection:p,d3Zoom:m,panOnScrollMode:D,panOnScrollSpeed:H,zoomOnPinch:G,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):Kb({noWheelClassName:I,preventScrolling:F,d3ZoomHandler:y});p.on("wheel.zoom",Q,{passive:!1});let V=jb({zoomPanValues:u,onDraggingChange:l,onPanZoomStart:a});m.on("start",V);let ee=Qb({zoomPanValues:u,panOnDrag:R,onPaneContextMenu:!!_,onPanZoom:i,onTransformChange:W});m.on("zoom",ee);let re=Jb({zoomPanValues:u,panOnDrag:R,panOnScroll:N,onPaneContextMenu:_,onPanZoomEnd:s,onDraggingChange:l});m.on("end",re);let de=e0({zoomActivationKeyPressed:J,panOnDrag:R,zoomOnScroll:Y,panOnScroll:N,zoomOnDoubleClick:q,zoomOnPinch:G,userSelectionActive:M,noPanClassName:x,noWheelClassName:I,lib:le,connectionInProgress:A});m.filter(de),q?p.on("dblclick.zoom",b):p.on("dblclick.zoom",null)}function g(){m.on("zoom",null)}async function w(I,x,_){let M=Ai(I),N=m?.constrain()(M,x,_);return N&&await h(N),N}async function S(I,x){let _=Ai(I);return await h(_,x),_}function C(I){if(p){let x=Ai(I),_=p.property("__zoom");(_.k!==I.zoom||_.x!==I.x||_.y!==I.y)&&m?.transform(p,x,null,{sync:!0})}}function v(){let I=p?zi(p.node()):{x:0,y:0,k:1};return{x:I.x,y:I.y,zoom:I.k}}async function E(I,x){return p?new Promise(_=>{m?.interpolate(x?.interpolate==="linear"?Cn:Nn).scaleTo(Ti(p,x?.duration,x?.ease,()=>_(!0)),I)}):!1}async function z(I,x){return p?new Promise(_=>{m?.interpolate(x?.interpolate==="linear"?Cn:Nn).scaleBy(Ti(p,x?.duration,x?.ease,()=>_(!0)),I)}):!1}function B(I){m?.scaleExtent(I)}function P(I){m?.translateExtent(I)}function O(I){let x=!ot(I)||I<0?0:I;m?.clickDistance(x)}return{update:k,destroy:g,setViewport:S,setViewportConstrained:w,getViewport:v,scaleTo:E,scaleBy:z,setScaleExtent:B,setTranslateExtent:P,syncViewport:C,setClickDistance:O}}var Bt;(function(e){e.Line="line",e.Handle="handle"})(Bt||(Bt={}));function t0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,l=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(l[0]=l[0]*-1),s&&i&&(l[1]=l[1]*-1),l}function wl(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Ot(e,t){return Math.max(0,t-e)}function $t(e,t){return Math.max(0,e-t)}function Qo(e,t,n){return Math.max(0,t-e,e-n)}function vl(e,t){return e?!t:t}function n0(e,t,n,o,r,i,a,s){let{affectsX:l,affectsY:u}=t,{isHorizontal:c,isVertical:d}=t,f=c&&d,{xSnapped:m,ySnapped:p}=n,{minWidth:y,maxWidth:b,minHeight:h,maxHeight:k}=o,{x:g,y:w,width:S,height:C,aspectRatio:v}=e,E=Math.floor(c?m-e.pointerX:0),z=Math.floor(d?p-e.pointerY:0),B=S+(l?-E:E),P=C+(u?-z:z),O=-i[0]*S,I=-i[1]*C,x=Qo(B,y,b),_=Qo(P,h,k);if(a){let R=0,D=0;l&&E<0?R=Ot(g+E+O,a[0][0]):!l&&E>0&&(R=$t(g+B+O,a[1][0])),u&&z<0?D=Ot(w+z+I,a[0][1]):!u&&z>0&&(D=$t(w+P+I,a[1][1])),x=Math.max(x,R),_=Math.max(_,D)}if(s){let R=0,D=0;l&&E>0?R=$t(g+E,s[0][0]):!l&&E<0&&(R=Ot(g+B,s[1][0])),u&&z>0?D=$t(w+z,s[0][1]):!u&&z<0&&(D=Ot(w+P,s[1][1])),x=Math.max(x,R),_=Math.max(_,D)}if(r){if(c){let R=Qo(B/v,h,k)*v;if(x=Math.max(x,R),a){let D=0;!l&&!u||l&&!u&&f?D=$t(w+I+B/v,a[1][1])*v:D=Ot(w+I+(l?E:-E)/v,a[0][1])*v,x=Math.max(x,D)}if(s){let D=0;!l&&!u||l&&!u&&f?D=Ot(w+B/v,s[1][1])*v:D=$t(w+(l?E:-E)/v,s[0][1])*v,x=Math.max(x,D)}}if(d){let R=Qo(P*v,y,b)/v;if(_=Math.max(_,R),a){let D=0;!l&&!u||u&&!l&&f?D=$t(g+P*v+O,a[1][0])/v:D=Ot(g+(u?z:-z)*v+O,a[0][0])/v,_=Math.max(_,D)}if(s){let D=0;!l&&!u||u&&!l&&f?D=Ot(g+P*v,s[1][0])/v:D=$t(g+(u?z:-z)*v,s[0][0])/v,_=Math.max(_,D)}}}z=z+(z<0?_:-_),E=E+(E<0?x:-x),r&&(f?B>P*v?z=(vl(l,u)?-E:E)/v:E=(vl(l,u)?-z:z)*v:c?(z=E/v,u=l):(E=z*v,l=u));let M=l?g+E:g,N=u?w+z:w;return{width:S+(l?-E:E),height:C+(u?-z:z),x:i[0]*E*(l?-1:1)+M,y:i[1]*z*(u?-1:1)+N}}var Kl={width:0,height:0,x:0,y:0},o0={...Kl,pointerX:0,pointerY:0,aspectRatio:1};function r0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,l=n[1]*a;return[[o-s,r-l],[o+i-s,r+a-l]]}function jl({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=Le(e),a={controlDirection:wl("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:c,keepAspectRatio:d,resizeDirection:f,onResizeStart:m,onResize:p,onResizeEnd:y,shouldResize:b}){let h={...Kl},k={...o0};a={boundaries:c,resizeDirection:f,keepAspectRatio:d,controlDirection:wl(u)};let g,w=null,S=[],C,v,E,z=!1,B=ii().on("start",P=>{let{nodeLookup:O,transform:I,snapGrid:x,snapToGrid:_,nodeOrigin:M,paneDomNode:N}=n();if(g=O.get(t),!g)return;w=N?.getBoundingClientRect()??null;let{xSnapped:R,ySnapped:D}=ro(P.sourceEvent,{transform:I,snapGrid:x,snapToGrid:_,containerBounds:w});h={width:g.measured.width??0,height:g.measured.height??0,x:g.position.x??0,y:g.position.y??0},k={...h,pointerX:R,pointerY:D,aspectRatio:h.width/h.height},C=void 0,v=ln(g.extent)?g.extent:void 0,g.parentId&&(g.extent==="parent"||g.expandParent)&&(C=O.get(g.parentId)),C&&g.extent==="parent"&&(v=[[0,0],[C.measured.width,C.measured.height]]),S=[],E=void 0;for(let[H,F]of O)if(F.parentId===t&&(S.push({id:H,position:{...F.position},extent:F.extent}),F.extent==="parent"||F.expandParent)){let G=r0(F,g,F.origin??M);E?E=[[Math.min(G[0][0],E[0][0]),Math.min(G[0][1],E[0][1])],[Math.max(G[1][0],E[1][0]),Math.max(G[1][1],E[1][1])]]:E=G}m?.(P,{...h})}).on("drag",P=>{let{transform:O,snapGrid:I,snapToGrid:x,nodeOrigin:_}=n(),M=ro(P.sourceEvent,{transform:O,snapGrid:I,snapToGrid:x,containerBounds:w}),N=[];if(!g)return;let{x:R,y:D,width:H,height:F}=h,G={},Y=g.origin??_,{width:q,height:J,x:le,y:W}=n0(k,a.controlDirection,M,a.boundaries,a.keepAspectRatio,Y,v,E),A=q!==H,U=J!==F,ne=le!==R&&A,oe=W!==D&&U;if(!ne&&!oe&&!A&&!U)return;if((ne||oe||Y[0]===1||Y[1]===1)&&(G.x=ne?le:h.x,G.y=oe?W:h.y,h.x=G.x,h.y=G.y,S.length>0)){let re=le-R,de=W-D;for(let Se of S)Se.position={x:Se.position.x-re+Y[0]*(q-H),y:Se.position.y-de+Y[1]*(J-F)},N.push(Se)}if((A||U)&&(G.width=A&&(!a.resizeDirection||a.resizeDirection==="horizontal")?q:h.width,G.height=U&&(!a.resizeDirection||a.resizeDirection==="vertical")?J:h.height,h.width=G.width,h.height=G.height),C&&g.expandParent){let re=Y[0]*(G.width??0);G.x&&G.x<re&&(h.x=re,k.x=k.x-(G.x-re));let de=Y[1]*(G.height??0);G.y&&G.y<de&&(h.y=de,k.y=k.y-(G.y-de))}let Q=t0({width:h.width,prevWidth:H,height:h.height,prevHeight:F,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),V={...h,direction:Q};b?.(P,V)!==!1&&(z=!0,p?.(P,V),o(G,N))}).on("end",P=>{z&&(y?.(P,{...h}),r?.({...h}),z=!1)});i.call(B)}function l(){i.on(".drag",null)}return{update:s,destroy:l}}var uc=os(require("react"),1),dc=os(ic(),1);var sc={},ac=e=>{let t,n=new Set,o=(c,d)=>{let f=typeof c=="function"?c(t):c;if(!Object.is(f,t)){let m=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(p=>p(t,m))}},r=()=>t,l={setState:o,getState:r,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(sc.env?sc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(o,r,l);return l},lc=e=>e?ac(e):ac;var{useDebugValue:k0}=uc.default,{useSyncExternalStoreWithSelector:S0}=dc.default,C0=e=>e;function sa(e,t=C0,n){let o=S0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return k0(o),o}var cc=(e,t)=>{let n=lc(e),o=(r,i=t)=>sa(n,r,i);return Object.assign(o,n),o},fc=(e,t)=>e?cc(e,t):cc;function ke(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var N0=require("react-dom"),br=(0,$.createContext)(null),E0=br.Provider,Hc=Je.error001("react");function pe(e,t){let n=(0,$.useContext)(br);if(n===null)throw new Error(Hc);return sa(n,e,t)}function xe(){let e=(0,$.useContext)(br);if(e===null)throw new Error(Hc);return(0,$.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var pc={display:"none"},_0={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Bc="react-flow__node-desc",Wc="react-flow__edge-desc",M0="react-flow__aria-live",I0=e=>e.ariaLiveMessage,P0=e=>e.ariaLabelConfig;function z0({rfId:e}){let t=pe(I0);return(0,L.jsx)("div",{id:`${M0}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:_0,children:t})}function R0({rfId:e,disableKeyboardA11y:t}){let n=pe(P0);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{id:`${Bc}-${e}`,style:pc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,L.jsx)("div",{id:`${Wc}-${e}`,style:pc,children:n["edge.a11yDescription.default"]}),!t&&(0,L.jsx)(z0,{rfId:e})]})}var yr=(0,$.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,L.jsx)("div",{className:_e(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});yr.displayName="Panel";var mc="https://reactflow.dev?utm_source=attribution";function D0({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,L.jsx)(yr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${mc}`,children:(0,L.jsx)("a",{href:mc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var A0=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},mr=e=>e.id;function T0(e,t){return ke(e.selectedNodes.map(mr),t.selectedNodes.map(mr))&&ke(e.selectedEdges.map(mr),t.selectedEdges.map(mr))}function O0({onSelectionChange:e}){let t=xe(),{selectedNodes:n,selectedEdges:o}=pe(A0,T0);return(0,$.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var $0=e=>!!e.onSelectionChangeHandlers;function L0({onSelectionChange:e}){let t=pe($0);return e||t?(0,L.jsx)(O0,{onSelectionChange:e}):null}var Fc=[0,0],H0={x:0,y:0,zoom:1},B0=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],gc=[...B0,"rfId"],W0=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),hc={translateExtent:Rn,nodeOrigin:Fc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function F0(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:l}=pe(W0,ke),u=xe();(0,$.useEffect)(()=>(l(e.defaultNodes,e.defaultEdges),()=>{c.current=hc,s()}),[]);let c=(0,$.useRef)(hc);return(0,$.useEffect)(()=>{for(let d of gc){let f=e[d],m=c.current[d];f!==m&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?u.setState({ariaLabelConfig:Il(f)}):d==="fitView"?u.setState({fitViewQueued:f}):d==="fitViewOptions"?u.setState({fitViewOptions:f}):u.setState({[d]:f})))}c.current=e},gc.map(d=>e[d])),null}function bc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function V0(e){let[t,n]=(0,$.useState)(e==="system"?null:e);return(0,$.useEffect)(()=>{if(e!=="system"){n(e);return}let o=bc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:bc()?.matches?"dark":"light"}var yc=typeof document<"u"?document:null;function co(e=null,t={target:yc,actInsideInputWithModifier:!0}){let[n,o]=(0,$.useState)(!1),r=(0,$.useRef)(!1),i=(0,$.useRef)(new Set([])),[a,s]=(0,$.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),c=u.reduce((d,f)=>d.concat(...f),[]);return[u,c]}return[[],[]]},[e]);return(0,$.useEffect)(()=>{let l=t?.target??yc,u=t?.actInsideInputWithModifier??!0;if(e!==null){let c=m=>{if(r.current=m.ctrlKey||m.metaKey||m.shiftKey||m.altKey,(!r.current||r.current&&!u)&&Qi(m))return!1;let y=wc(m.code,s);if(i.current.add(m[y]),xc(a,i.current,!1)){let b=m.composedPath?.()?.[0]||m.target,h=b?.nodeName==="BUTTON"||b?.nodeName==="A";t.preventDefault!==!1&&(r.current||!h)&&m.preventDefault(),o(!0)}},d=m=>{let p=wc(m.code,s);xc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(m[p]),m.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return l?.addEventListener("keydown",c),l?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{l?.removeEventListener("keydown",c),l?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function xc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function wc(e,t){return t.includes(e)?"code":"key"}var G0=()=>{let e=xe();return(0,$.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),l=so(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(l,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:l}=a.getBoundingClientRect(),u={x:t.x-s,y:t.y-l},c=n.snapGrid??r,d=n.snapToGrid??i;return On(u,o,d,c)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=sn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function Vc(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let l of a)X0(l,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function X0(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Gc(e,t){return Vc(e,t)}function Xc(e,t){return Vc(e,t)}function cn(e,t){return{id:e,type:"select",selected:t}}function Hn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(cn(i.id,a)))}return o}function vc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function kc(e){return{id:e.id,type:"remove"}}var Y0=qi("React Flow","https://reactflow.dev/");function q0(e,t,n={}){return Rl(e,t,{...n,onError:n.onError??Y0})}var Sc=e=>kl(e),U0=e=>Wi(e);function Yc(e){return(0,$.forwardRef)(e)}var qc=typeof window<"u"?$.useLayoutEffect:$.useEffect;function Cc(e){let[t,n]=(0,$.useState)(BigInt(0)),[o]=(0,$.useState)(()=>Z0(()=>n(r=>r+BigInt(1))));return qc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function Z0(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Uc=(0,$.createContext)(null);function K0({children:e}){let t=xe(),n=(0,$.useCallback)(s=>{let{nodes:l=[],setNodes:u,hasDefaultNodes:c,onNodesChange:d,nodeLookup:f,fitViewQueued:m,onNodesChangeMiddlewareMap:p}=t.getState(),y=l;for(let h of s)y=typeof h=="function"?h(y):h;let b=vc({items:y,lookup:f});for(let h of p.values())b=h(b);c&&u(y),b.length>0?d?.(b):m&&window.requestAnimationFrame(()=>{let{fitViewQueued:h,nodes:k,setNodes:g}=t.getState();h&&g(k)})},[]),o=Cc(n),r=(0,$.useCallback)(s=>{let{edges:l=[],setEdges:u,hasDefaultEdges:c,onEdgesChange:d,edgeLookup:f}=t.getState(),m=l;for(let p of s)m=typeof p=="function"?p(m):p;c?u(m):d&&d(vc({items:m,lookup:f}))},[]),i=Cc(r),a=(0,$.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,L.jsx)(Uc.Provider,{value:a,children:e})}function j0(){let e=(0,$.useContext)(Uc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var Q0=e=>!!e.panZoom;function da(){let e=G0(),t=xe(),n=j0(),o=pe(Q0),r=(0,$.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},l=d=>{let{nodeLookup:f,nodeOrigin:m}=t.getState(),p=Sc(d)?d:f.get(d.id),y=p.parentId?Zi(p.position,p.measured,p.parentId,f,m):p.position,b={...p,position:y,width:p.measured?.width??p.width,height:p.measured?.height??p.height};return An(b)},u=(d,f,m={replace:!1})=>{a(p=>p.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return m.replace&&Sc(b)?b:{...y,...b}}return y}))},c=(d,f,m={replace:!1})=>{s(p=>p.map(y=>{if(y.id===d){let b=typeof f=="function"?f(y):f;return m.replace&&U0(b)?b:{...y,...b}}return y}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(m=>[...m,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(m=>[...m,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:m}=t.getState(),[p,y,b]=m;return{nodes:d.map(h=>({...h})),edges:f.map(h=>({...h})),viewport:{x:p,y,zoom:b}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:m,edges:p,onNodesDelete:y,onEdgesDelete:b,triggerNodeChanges:h,triggerEdgeChanges:k,onDelete:g,onBeforeDelete:w}=t.getState(),{nodes:S,edges:C}=await Nl({nodesToRemove:d,edgesToRemove:f,nodes:m,edges:p,onBeforeDelete:w}),v=C.length>0,E=S.length>0;if(v){let z=C.map(kc);b?.(C),k(z)}if(E){let z=S.map(kc);y?.(S),h(z)}return(E||v)&&g?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(d,f=!0,m)=>{let p=Yi(d),y=p?d:l(d),b=m!==void 0;return y?(m||t.getState().nodes).filter(h=>{let k=t.getState().nodeLookup.get(h.id);if(k&&!p&&(h.id===d.id||!k.internals.positionAbsolute))return!1;let g=An(b?h:k),w=ao(g,y);return f&&w>0||w>=g.width*g.height||w>=y.width*y.height}):[]},isNodeIntersecting:(d,f,m=!0)=>{let y=Yi(d)?d:l(d);if(!y)return!1;let b=ao(y,f);return m&&b>0||b>=f.width*f.height||b>=y.width*y.height},updateNode:u,updateNodeData:(d,f,m={replace:!1})=>{u(d,p=>{let y=typeof f=="function"?f(p):f;return m.replace?{...p,data:y}:{...p,data:{...p.data,...y}}},m)},updateEdge:c,updateEdgeData:(d,f,m={replace:!1})=>{c(d,p=>{let y=typeof f=="function"?f(p):f;return m.replace?{...p,data:y}:{...p,data:{...p.data,...y}}},m)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:m}=t.getState();return Vi(d,{nodeLookup:f,nodeOrigin:m})},getHandleConnections:({type:d,id:f,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:m})=>Array.from(t.getState().connectionLookup.get(`${m}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??Ml();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(m=>[...m]),f.promise}}},[]);return(0,$.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Nc=e=>e.selected,J0=typeof window<"u"?window:void 0;function ey({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=xe(),{deleteElements:o}=da(),r=co(e,{actInsideInputWithModifier:!1}),i=co(t,{target:J0});(0,$.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(Nc),edges:a.filter(Nc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,$.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function ty(e){let t=xe();(0,$.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=rr(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Je.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var xr={position:"absolute",width:"100%",height:"100%",top:0,left:0},ny=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function oy({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=It.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:l,translateExtent:u,minZoom:c,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:m=!0,children:p,noWheelClassName:y,noPanClassName:b,onViewportChange:h,isControlledViewport:k,paneClickDistance:g,selectionOnDrag:w}){let S=xe(),C=(0,$.useRef)(null),{userSelectionActive:v,lib:E,connectionInProgress:z}=pe(ny,ke),B=co(f),P=(0,$.useRef)();ty(C);let O=(0,$.useCallback)(I=>{h?.({x:I[0],y:I[1],zoom:I[2]}),k||S.setState({transform:I})},[h,k]);return(0,$.useEffect)(()=>{if(C.current){P.current=Zl({domNode:C.current,minZoom:c,maxZoom:d,translateExtent:u,viewport:l,onDraggingChange:M=>S.setState(N=>N.paneDragging===M?N:{paneDragging:M}),onPanZoomStart:(M,N)=>{let{onViewportChangeStart:R,onMoveStart:D}=S.getState();D?.(M,N),R?.(N)},onPanZoom:(M,N)=>{let{onViewportChange:R,onMove:D}=S.getState();D?.(M,N),R?.(N)},onPanZoomEnd:(M,N)=>{let{onViewportChangeEnd:R,onMoveEnd:D}=S.getState();D?.(M,N),R?.(N)}});let{x:I,y:x,zoom:_}=P.current.getViewport();return S.setState({panZoom:P.current,transform:[I,x,_],domNode:C.current.closest(".react-flow")}),()=>{P.current?.destroy()}}},[]),(0,$.useEffect)(()=>{P.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:B,preventScrolling:m,noPanClassName:b,userSelectionActive:v,noWheelClassName:y,lib:E,onTransformChange:O,connectionInProgress:z,selectionOnDrag:w,paneClickDistance:g})},[e,t,n,o,r,i,a,s,B,m,b,v,y,E,O,z,w,g]),(0,L.jsx)("div",{className:"react-flow__renderer",ref:C,style:xr,children:p})}var ry=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function iy(){let{userSelectionActive:e,userSelectionRect:t}=pe(ry,ke);return e&&t?(0,L.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var la=(e,t)=>n=>{n.target===t.current&&e?.(n)},ay=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function sy({isSelecting:e,selectionKeyPressed:t,selectionMode:n=rn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:l,onPaneClick:u,onPaneContextMenu:c,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:m,onPaneMouseLeave:p,children:y}){let b=(0,$.useRef)(0),h=xe(),{userSelectionActive:k,elementsSelectable:g,dragging:w,panBy:S,autoPanSpeed:C}=pe(ay,ke),v=g&&(e||k),E=(0,$.useRef)(null),z=(0,$.useRef)(),B=(0,$.useRef)(new Set),P=(0,$.useRef)(new Set),O=(0,$.useRef)(!1),I=(0,$.useRef)(!1),x=(0,$.useRef)({x:0,y:0}),_=(0,$.useRef)(!1),M=A=>{if(I.current||O.current||h.getState().connection.inProgress){I.current=!1,O.current=!1;return}u?.(A),h.getState().resetSelectedElements(),h.setState({nodesSelectionActive:!1})},N=A=>{if(Array.isArray(o)&&o?.includes(2)){A.preventDefault();return}c?.(A)},R=d?A=>d(A):void 0,D=A=>{I.current&&(A.stopPropagation(),I.current=!1)},H=A=>{let{domNode:U,transform:ne}=h.getState();if(z.current=U?.getBoundingClientRect(),!z.current)return;let oe=A.target===E.current;if(!oe&&!!A.target.closest(".nokey")||!e||!(a&&oe||t)||A.button!==0||!A.isPrimary)return;A.target?.setPointerCapture?.(A.pointerId),I.current=!1;let{x:ee,y:re}=rt(A.nativeEvent,z.current),de=On({x:ee,y:re},ne);h.setState({userSelectionRect:{width:0,height:0,startX:de.x,startY:de.y,x:ee,y:re}}),oe||(A.stopPropagation(),A.preventDefault())};function F(A,U){let{userSelectionRect:ne}=h.getState();if(!ne)return;let{transform:oe,nodeLookup:Q,edgeLookup:V,connectionLookup:ee,triggerNodeChanges:re,triggerEdgeChanges:de,defaultEdgeOptions:Se}=h.getState(),at={x:ne.startX,y:ne.startY},{x:tt,y:fe}=sn(at,oe),st={startX:at.x,startY:at.y,x:A<tt?A:tt,y:U<fe?U:fe,width:Math.abs(A-tt),height:Math.abs(U-fe)},Ut=B.current,Ke=P.current;B.current=new Set(er(Q,st,oe,n===rn.Partial,!0).map(Fe=>Fe.id)),P.current=new Set;let kt=Se?.selectable??!0;for(let Fe of B.current){let nt=ee.get(Fe);if(nt)for(let{edgeId:je}of nt.values()){let pt=V.get(je);pt&&(pt.selectable??kt)&&P.current.add(je)}}if(!Ki(Ut,B.current)){let Fe=Hn(Q,B.current,!0);re(Fe)}if(!Ki(Ke,P.current)){let Fe=Hn(V,P.current);de(Fe)}h.setState({userSelectionRect:st,userSelectionActive:!0,nodesSelectionActive:!1})}function G(){if(!r||!z.current)return;let[A,U]=tr(x.current,z.current,C);S({x:A,y:U}).then(ne=>{if(!I.current||!ne){b.current=requestAnimationFrame(G);return}let{x:oe,y:Q}=x.current;F(oe,Q),b.current=requestAnimationFrame(G)})}let Y=()=>{cancelAnimationFrame(b.current),b.current=0,_.current=!1};(0,$.useEffect)(()=>()=>Y(),[]);let q=A=>{let{userSelectionRect:U,transform:ne,resetSelectedElements:oe}=h.getState();if(!z.current||!U)return;let{x:Q,y:V}=rt(A.nativeEvent,z.current);x.current={x:Q,y:V};let ee=sn({x:U.startX,y:U.startY},ne);if(!I.current){let re=t?0:i;if(Math.hypot(Q-ee.x,V-ee.y)<=re)return;oe(),s?.(A)}I.current=!0,_.current||(G(),_.current=!0),F(Q,V)},J=A=>{if(!v){A.target===E.current&&h.getState().connection.inProgress&&(O.current=!0);return}A.button===0&&(A.target?.releasePointerCapture?.(A.pointerId),!k&&A.target===E.current&&h.getState().userSelectionRect&&M?.(A),h.setState({userSelectionActive:!1,userSelectionRect:null}),I.current&&(l?.(A),h.setState({nodesSelectionActive:B.current.size>0})),Y())},le=A=>{A.target?.releasePointerCapture?.(A.pointerId),Y()},W=o===!0||Array.isArray(o)&&o.includes(0);return(0,L.jsxs)("div",{className:_e(["react-flow__pane",{draggable:W,dragging:w,selection:e}]),onClick:v?void 0:la(M,E),onContextMenu:la(N,E),onWheel:la(R,E),onPointerEnter:v?void 0:f,onPointerMove:v?q:m,onPointerUp:J,onPointerCancel:v?le:void 0,onPointerDownCapture:v?H:void 0,onClickCapture:v?D:void 0,onPointerLeave:p,ref:E,style:xr,children:[y,(0,L.jsx)(iy,{})]})}function ua({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:l}=t.getState(),u=s.get(e);if(!u){l?.("012",Je.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&a)&&(i({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Zc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=xe(),[l,u]=(0,$.useState)(!1),c=(0,$.useRef)();return(0,$.useEffect)(()=>{if(!t)return c.current=Wl({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{ua({id:d,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{c.current?.destroy(),c.current=void 0}},[t,s,e]),(0,$.useEffect)(()=>{t||!e.current||!c.current||c.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),l}var ly=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Kc(){let e=xe();return(0,$.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:l,nodeLookup:u,nodeOrigin:c}=e.getState(),d=new Map,f=ly(a),m=r?i[0]:5,p=r?i[1]:5,y=n.direction.x*m*n.factor,b=n.direction.y*p*n.factor;for(let[,h]of u){if(!f(h))continue;let k={x:h.internals.positionAbsolute.x+y,y:h.internals.positionAbsolute.y+b};r&&(k=Tn(k,i));let{position:g,positionAbsolute:w}=Gi({nodeId:h.id,nextPosition:k,nodeLookup:u,nodeExtent:o,nodeOrigin:c,onError:s});h.position=g,h.internals.positionAbsolute=w,d.set(h.id,h)}l(d)},[])}var fa=(0,$.createContext)(null),cy=fa.Provider;fa.Consumer;var jc=()=>(0,$.useContext)(fa),uy=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Qc=(0,$.createContext)(null);function dy({children:e}){let t=pe(uy,ke);return(0,L.jsx)(Qc.Provider,{value:t,children:e})}function fy(){let e=(0,$.useContext)(Qc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var py={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},my=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:l,isValid:u}=a;if(!s&&!r)return py;let c=l?.nodeId===e&&l?.id===t&&l?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:c,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Lt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:c&&u}};function gy({type:e="source",position:t=te.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:l,className:u,onMouseDown:c,onTouchStart:d,...f},m){let p=a||null,y=e==="target",b=xe(),h=jc(),{connectOnClick:k,noPanClassName:g,rfId:w}=fy(),{connectingFrom:S,connectingTo:C,clickConnecting:v,isPossibleEndHandle:E,connectionInProcess:z,clickConnectionInProcess:B,valid:P}=pe(my(h,p,e),ke);h||b.getState().onError?.("010",Je.error010());let O=_=>{let{defaultEdgeOptions:M,onConnect:N,hasDefaultEdges:R}=b.getState(),D={...M,..._};if(R){let{edges:H,setEdges:F,onError:G}=b.getState();F(q0(D,H,{onError:G}))}N?.(D),s?.(D)},I=_=>{if(!h)return;let M=Ji(_.nativeEvent);if(r&&(M&&_.button===0||!M)){let N=b.getState();dr.onPointerDown(_.nativeEvent,{handleDomNode:_.currentTarget,autoPanOnConnect:N.autoPanOnConnect,connectionMode:N.connectionMode,connectionRadius:N.connectionRadius,domNode:N.domNode,nodeLookup:N.nodeLookup,lib:N.lib,isTarget:y,handleId:p,nodeId:h,flowId:N.rfId,panBy:N.panBy,cancelConnection:N.cancelConnection,onConnectStart:N.onConnectStart,onConnectEnd:(...R)=>b.getState().onConnectEnd?.(...R),updateConnection:N.updateConnection,onConnect:O,isValidConnection:n||((...R)=>b.getState().isValidConnection?.(...R)??!0),getTransform:()=>b.getState().transform,getFromHandle:()=>b.getState().connection.fromHandle,autoPanSpeed:N.autoPanSpeed,dragThreshold:N.connectionDragThreshold})}M?c?.(_):d?.(_)},x=_=>{let{onClickConnectStart:M,onClickConnectEnd:N,connectionClickStartHandle:R,connectionMode:D,isValidConnection:H,lib:F,rfId:G,nodeLookup:Y,connection:q}=b.getState();if(!h||!R&&!r)return;if(!R){M?.(_.nativeEvent,{nodeId:h,handleId:p,handleType:e}),b.setState({connectionClickStartHandle:{nodeId:h,type:e,id:p}});return}let J=ji(_.target),le=n||H,{connection:W,isValid:A}=dr.isValid(_.nativeEvent,{handle:{nodeId:h,id:p,type:e},connectionMode:D,fromNodeId:R.nodeId,fromHandleId:R.id||null,fromType:R.type,isValidConnection:le,flowId:G,doc:J,lib:F,nodeLookup:Y});A&&W&&O(W);let U=structuredClone(q);delete U.inProgress,U.toPosition=U.toHandle?U.toHandle.position:null,N?.(_,U),b.setState({connectionClickStartHandle:null})};return(0,L.jsx)("div",{"data-handleid":p,"data-nodeid":h,"data-handlepos":t,"data-id":`${w}-${h}-${p}-${e}`,className:_e(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",g,u,{source:!y,target:y,connectable:o,connectablestart:r,connectableend:i,clickconnecting:v,connectingfrom:S,connectingto:C,valid:P,connectionindicator:o&&(!z||E)&&(z||B?i:r)}]),onMouseDown:I,onTouchStart:I,onClick:k?x:void 0,ref:m,...f,children:l})}var un=(0,$.memo)(Yc(gy));function hy({data:e,isConnectable:t,sourcePosition:n=te.Bottom}){return(0,L.jsxs)(L.Fragment,{children:[e?.label,(0,L.jsx)(un,{type:"source",position:n,isConnectable:t})]})}function by({data:e,isConnectable:t,targetPosition:n=te.Top,sourcePosition:o=te.Bottom}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(un,{type:"target",position:n,isConnectable:t}),e?.label,(0,L.jsx)(un,{type:"source",position:o,isConnectable:t})]})}function yy(){return null}function xy({data:e,isConnectable:t,targetPosition:n=te.Top}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(un,{type:"target",position:n,isConnectable:t}),e?.label]})}var hr={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Ec={input:hy,default:by,output:xy,group:yy};function wy(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var vy=e=>{let{width:t,height:n,x:o,y:r}=Dn(e.nodeLookup,{filter:i=>!!i.selected});return{width:ot(t)?t:null,height:ot(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function ky({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=xe(),{width:r,height:i,transformString:a,userSelectionActive:s}=pe(vy,ke),l=Kc(),u=(0,$.useRef)(null);(0,$.useEffect)(()=>{n||u.current?.focus({preventScroll:!0})},[n]);let c=!s&&r!==null&&i!==null;if(Zc({nodeRef:u,disabled:!c}),!c)return null;let d=e?m=>{let p=o.getState().nodes.filter(y=>y.selected);e(m,p)}:void 0,f=m=>{Object.prototype.hasOwnProperty.call(hr,m.key)&&(m.preventDefault(),l({direction:hr[m.key],factor:m.shiftKey?4:1}))};return(0,L.jsx)("div",{className:_e(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,L.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var _c=typeof window<"u"?window:void 0,Sy=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Jc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:l,selectionKeyCode:u,selectionOnDrag:c,selectionMode:d,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:p,panActivationKeyCode:y,zoomActivationKeyCode:b,elementsSelectable:h,zoomOnScroll:k,zoomOnPinch:g,panOnScroll:w,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:E,autoPanOnSelection:z,defaultViewport:B,translateExtent:P,minZoom:O,maxZoom:I,preventScrolling:x,onSelectionContextMenu:_,noWheelClassName:M,noPanClassName:N,disableKeyboardA11y:R,onViewportChange:D,isControlledViewport:H}){let{nodesSelectionActive:F,userSelectionActive:G}=pe(Sy,ke),Y=co(u,{target:_c}),q=co(y,{target:_c}),J=q||E,le=q||w,W=c&&J!==!0,A=Y||G||W;return ey({deleteKeyCode:l,multiSelectionKeyCode:p}),(0,L.jsx)(oy,{onPaneContextMenu:i,elementsSelectable:h,zoomOnScroll:k,zoomOnPinch:g,panOnScroll:le,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:v,panOnDrag:!Y&&J,defaultViewport:B,translateExtent:P,minZoom:O,maxZoom:I,zoomActivationKeyCode:b,preventScrolling:x,noWheelClassName:M,noPanClassName:N,onViewportChange:D,isControlledViewport:H,paneClickDistance:s,selectionOnDrag:W,children:(0,L.jsxs)(sy,{onSelectionStart:f,onSelectionEnd:m,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:J,autoPanOnSelection:z,isSelecting:!!A,selectionMode:d,selectionKeyPressed:Y,paneClickDistance:s,selectionOnDrag:W,children:[e,F&&(0,L.jsx)(ky,{onSelectionContextMenu:_,noPanClassName:N,disableKeyboardA11y:R})]})})}Jc.displayName="FlowRenderer";var Cy=(0,$.memo)(Jc),Ny=e=>t=>e?er(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function Ey(e){return pe((0,$.useCallback)(Ny(e),[e]),ke)}var _y=e=>e.updateNodeInternals;function My(){let e=pe(_y),[t]=(0,$.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,$.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Iy({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=xe(),i=(0,$.useRef)(null),a=(0,$.useRef)(null),s=(0,$.useRef)(e.sourcePosition),l=(0,$.useRef)(e.targetPosition),u=(0,$.useRef)(t),c=n&&!!e.internals.handleBounds;return(0,$.useEffect)(()=>{i.current&&!e.hidden&&(!c||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[c,e.hidden]),(0,$.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,$.useEffect)(()=>{if(i.current){let d=u.current!==t,f=s.current!==e.sourcePosition,m=l.current!==e.targetPosition;(d||f||m)&&(u.current=t,s.current=e.sourcePosition,l.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function Py({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:l,nodesConnectable:u,nodesFocusable:c,resizeObserver:d,noDragClassName:f,noPanClassName:m,disableKeyboardA11y:p,rfId:y,nodeTypes:b,nodeClickDistance:h,onError:k}){let{node:g,internals:w,isParent:S}=pe(A=>{let U=A.nodeLookup.get(e),ne=A.parentLookup.has(e);return{node:U,internals:U.internals,isParent:ne}},ke),C=g.type||"default",v=b?.[C]||Ec[C];v===void 0&&(k?.("003",Je.error003(C)),C="default",v=b?.default||Ec.default);let E=!!(g.draggable||s&&typeof g.draggable>"u"),z=!!(g.selectable||l&&typeof g.selectable>"u"),B=!!(g.connectable||u&&typeof g.connectable>"u"),P=!!(g.focusable||c&&typeof g.focusable>"u"),O=xe(),I=Ui(g),x=Iy({node:g,nodeType:C,hasDimensions:I,resizeObserver:d}),_=Zc({nodeRef:x,disabled:g.hidden||!E,noDragClassName:f,handleSelector:g.dragHandle,nodeId:e,isSelectable:z,nodeClickDistance:h}),M=Kc();if(g.hidden)return null;let N=dt(g),R=wy(g),D=z||E||t||n||o||r,H=n?A=>n(A,{...w.userNode}):void 0,F=o?A=>o(A,{...w.userNode}):void 0,G=r?A=>r(A,{...w.userNode}):void 0,Y=i?A=>i(A,{...w.userNode}):void 0,q=a?A=>a(A,{...w.userNode}):void 0,J=A=>{let{selectNodesOnDrag:U,nodeDragThreshold:ne}=O.getState();z&&(!U||!E||ne>0)&&ua({id:e,store:O,nodeRef:x}),t&&t(A,{...w.userNode})},le=A=>{if(!(Qi(A.nativeEvent)||p)){if($i.includes(A.key)&&z){let U=A.key==="Escape";ua({id:e,store:O,unselect:U,nodeRef:x})}else if(E&&g.selected&&Object.prototype.hasOwnProperty.call(hr,A.key)){A.preventDefault();let{ariaLabelConfig:U}=O.getState();O.setState({ariaLiveMessage:U["node.a11yDescription.ariaLiveMessage"]({direction:A.key.replace("Arrow","").toLowerCase(),x:~~w.positionAbsolute.x,y:~~w.positionAbsolute.y})}),M({direction:hr[A.key],factor:A.shiftKey?4:1})}}},W=()=>{if(p||!x.current?.matches(":focus-visible"))return;let{transform:A,width:U,height:ne,autoPanOnNodeFocus:oe,setCenter:Q}=O.getState();if(!oe)return;er(new Map([[e,g]]),{x:0,y:0,width:U,height:ne},A,!0).length>0||Q(g.position.x+N.width/2,g.position.y+N.height/2,{zoom:A[2]})};return(0,L.jsx)("div",{className:_e(["react-flow__node",`react-flow__node-${C}`,{[m]:E},g.className,{selected:g.selected,selectable:z,parent:S,draggable:E,dragging:_}]),ref:x,style:{zIndex:w.z,transform:`translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:I?"visible":"hidden",...g.style,...R},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:H,onMouseMove:F,onMouseLeave:G,onContextMenu:Y,onClick:J,onDoubleClick:q,onKeyDown:P?le:void 0,tabIndex:P?0:void 0,onFocus:P?W:void 0,role:g.ariaRole??(P?"group":void 0),"aria-roledescription":"node","aria-describedby":p?void 0:`${Bc}-${y}`,"aria-label":g.ariaLabel,...g.domAttributes,children:(0,L.jsx)(cy,{value:e,children:(0,L.jsx)(v,{id:e,data:g.data,type:C,positionAbsoluteX:w.positionAbsolute.x,positionAbsoluteY:w.positionAbsolute.y,selected:g.selected??!1,selectable:z,draggable:E,deletable:g.deletable??!0,isConnectable:B,sourcePosition:g.sourcePosition,targetPosition:g.targetPosition,dragging:_,dragHandle:g.dragHandle,zIndex:w.z,parentId:g.parentId,...N})})})}var zy=(0,$.memo)(Py),Ry=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function eu(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=pe(Ry,ke),i=Ey(e.onlyRenderVisibleElements),a=My();return(0,L.jsx)("div",{className:"react-flow__nodes",style:xr,children:i.map(s=>(0,L.jsx)(zy,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}eu.displayName="NodeRenderer";var Dy=(0,$.memo)(eu);function Ay(e){return pe((0,$.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&zl({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),ke)}var Ty=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,L.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},Oy=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,L.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Mc={[Pn.Arrow]:Ty,[Pn.ArrowClosed]:Oy};function $y(e){let t=xe();return(0,$.useMemo)(()=>Object.prototype.hasOwnProperty.call(Mc,e)?Mc[e]:(t.getState().onError?.("009",Je.error009(e)),null),[e])}var Ly=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let l=$y(t);return l?(0,L.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,L.jsx)(l,{color:n,strokeWidth:a})}):null},tu=({defaultColor:e,rfId:t})=>{let n=pe(i=>i.edges),o=pe(i=>i.defaultEdgeOptions),r=(0,$.useMemo)(()=>Al(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,L.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,L.jsx)("defs",{children:r.map(i=>(0,L.jsx)(Ly,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};tu.displayName="MarkerDefinitions";var Hy=(0,$.memo)(tu);function nu({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:l,className:u,...c}){let[d,f]=(0,$.useState)({x:1,y:0,width:0,height:0}),m=_e(["react-flow__edge-textwrapper",u]),p=(0,$.useRef)(null);return(0,$.useEffect)(()=>{if(p.current){let y=p.current.getBBox();f({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,L.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:m,visibility:d.width?"visible":"hidden",...c,children:[r&&(0,L.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,L.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:p,style:o,children:n}),l]}):null}nu.displayName="EdgeText";var By=(0,$.memo)(nu);function wr({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:l,interactionWidth:u=20,...c}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("path",{...c,d:e,fill:"none",className:_e(["react-flow__edge-path",c.className])}),u?(0,L.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&ot(t)&&ot(n)?(0,L.jsx)(By,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:l}):null]})}function Ic({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===te.Left||e===te.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function ou({sourceX:e,sourceY:t,sourcePosition:n=te.Bottom,targetX:o,targetY:r,targetPosition:i=te.Top}){let[a,s]=Ic({pos:n,x1:e,y1:t,x2:o,y2:r}),[l,u]=Ic({pos:i,x1:o,y1:r,x2:e,y2:t}),[c,d,f,m]=ir({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:l,targetControlY:u});return[`M${e},${t} C${a},${s} ${l},${u} ${o},${r}`,c,d,f,m]}function ru(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:l,labelStyle:u,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:y,markerStart:b,interactionWidth:h})=>{let[k,g,w]=ou({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),S=e.isInternal?void 0:t;return(0,L.jsx)(wr,{id:S,path:k,labelX:g,labelY:w,label:l,labelStyle:u,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:y,markerStart:b,interactionWidth:h})})}var Wy=ru({isInternal:!1}),iu=ru({isInternal:!0});Wy.displayName="SimpleBezierEdge";iu.displayName="SimpleBezierEdgeInternal";function au(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,sourcePosition:m=te.Bottom,targetPosition:p=te.Top,markerEnd:y,markerStart:b,pathOptions:h,interactionWidth:k})=>{let[g,w,S]=lo({sourceX:n,sourceY:o,sourcePosition:m,targetX:r,targetY:i,targetPosition:p,borderRadius:h?.borderRadius,offset:h?.offset,stepPosition:h?.stepPosition}),C=e.isInternal?void 0:t;return(0,L.jsx)(wr,{id:C,path:g,labelX:w,labelY:S,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:y,markerStart:b,interactionWidth:k})})}var su=au({isInternal:!1}),lu=au({isInternal:!0});su.displayName="SmoothStepEdge";lu.displayName="SmoothStepEdgeInternal";function cu(e){return(0,$.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,L.jsx)(su,{...n,id:o,pathOptions:(0,$.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Fy=cu({isInternal:!1}),uu=cu({isInternal:!0});Fy.displayName="StepEdge";uu.displayName="StepEdgeInternal";function du(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:p,interactionWidth:y})=>{let[b,h,k]=sr({sourceX:n,sourceY:o,targetX:r,targetY:i}),g=e.isInternal?void 0:t;return(0,L.jsx)(wr,{id:g,path:b,labelX:h,labelY:k,label:a,labelStyle:s,labelShowBg:l,labelBgStyle:u,labelBgPadding:c,labelBgBorderRadius:d,style:f,markerEnd:m,markerStart:p,interactionWidth:y})})}var Vy=du({isInternal:!1}),fu=du({isInternal:!0});Vy.displayName="StraightEdge";fu.displayName="StraightEdgeInternal";function pu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=te.Bottom,targetPosition:s=te.Top,label:l,labelStyle:u,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:y,markerStart:b,pathOptions:h,interactionWidth:k})=>{let[g,w,S]=ar({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:h?.curvature}),C=e.isInternal?void 0:t;return(0,L.jsx)(wr,{id:C,path:g,labelX:w,labelY:S,label:l,labelStyle:u,labelShowBg:c,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:m,style:p,markerEnd:y,markerStart:b,interactionWidth:k})})}var Gy=pu({isInternal:!1}),mu=pu({isInternal:!0});Gy.displayName="BezierEdge";mu.displayName="BezierEdgeInternal";var Pc={default:mu,straight:fu,step:uu,smoothstep:lu,simplebezier:iu},zc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Xy=(e,t,n)=>n===te.Left?e-t:n===te.Right?e+t:e,Yy=(e,t,n)=>n===te.Top?e-t:n===te.Bottom?e+t:e,Rc="react-flow__edgeupdater";function Dc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,L.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:_e([Rc,`${Rc}-${s}`]),cx:Xy(t,o,e),cy:Yy(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function qy({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:l,onReconnect:u,onReconnectStart:c,onReconnectEnd:d,setReconnecting:f,setUpdateHover:m}){let p=xe(),y=(w,S)=>{if(w.button!==0)return;let{autoPanOnConnect:C,domNode:v,connectionMode:E,connectionRadius:z,lib:B,onConnectStart:P,cancelConnection:O,nodeLookup:I,rfId:x,panBy:_,updateConnection:M}=p.getState(),N=S.type==="target",R=(F,G)=>{f(!1),d?.(F,n,S.type,G)},D=F=>u?.(n,F),H=(F,G)=>{f(!0),c?.(w,n,S.type),P?.(F,G)};dr.onPointerDown(w.nativeEvent,{autoPanOnConnect:C,connectionMode:E,connectionRadius:z,domNode:v,handleId:S.id,nodeId:S.nodeId,nodeLookup:I,isTarget:N,edgeUpdaterType:S.type,lib:B,flowId:x,cancelConnection:O,panBy:_,isValidConnection:(...F)=>p.getState().isValidConnection?.(...F)??!0,onConnect:D,onConnectStart:H,onConnectEnd:(...F)=>p.getState().onConnectEnd?.(...F),onReconnectEnd:R,updateConnection:M,getTransform:()=>p.getState().transform,getFromHandle:()=>p.getState().connection.fromHandle,dragThreshold:p.getState().connectionDragThreshold,handleDomNode:w.currentTarget})},b=w=>y(w,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),h=w=>y(w,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),k=()=>m(!0),g=()=>m(!1);return(0,L.jsxs)(L.Fragment,{children:[(e===!0||e==="source")&&(0,L.jsx)(Dc,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:b,onMouseEnter:k,onMouseOut:g,type:"source"}),(e===!0||e==="target")&&(0,L.jsx)(Dc,{position:l,centerX:i,centerY:a,radius:t,onMouseDown:h,onMouseEnter:k,onMouseOut:g,type:"target"})]})}function Uy({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,reconnectRadius:c,onReconnect:d,onReconnectStart:f,onReconnectEnd:m,rfId:p,edgeTypes:y,noPanClassName:b,onError:h,disableKeyboardA11y:k}){let g=pe(Q=>Q.edgeLookup.get(e)),w=pe(Q=>Q.defaultEdgeOptions);g=w?{...w,...g}:g;let S=g.type||"default",C=y?.[S]||Pc[S];C===void 0&&(h?.("011",Je.error011(S)),S="default",C=y?.default||Pc.default);let v=!!(g.focusable||t&&typeof g.focusable>"u"),E=typeof d<"u"&&(g.reconnectable||n&&typeof g.reconnectable>"u"),z=!!(g.selectable||o&&typeof g.selectable>"u"),B=(0,$.useRef)(null),[P,O]=(0,$.useState)(!1),[I,x]=(0,$.useState)(!1),_=xe(),{zIndex:M=g.zIndex,sourceX:N,sourceY:R,targetX:D,targetY:H,sourcePosition:F,targetPosition:G}=pe((0,$.useCallback)(Q=>{let V=Q.nodeLookup.get(g.source),ee=Q.nodeLookup.get(g.target);if(!V||!ee)return zc;let re=Dl({id:e,sourceNode:V,targetNode:ee,sourceHandle:g.sourceHandle||null,targetHandle:g.targetHandle||null,connectionMode:Q.connectionMode,onError:h}),de=Pl({selected:g.selected,zIndex:g.zIndex,sourceNode:V,targetNode:ee,elevateOnSelect:Q.elevateEdgesOnSelect,zIndexMode:Q.zIndexMode});return{...re||zc,zIndex:de}},[g.source,g.target,g.sourceHandle,g.targetHandle,g.selected,g.zIndex]),ke),Y=(0,$.useMemo)(()=>g.markerStart?`url('#${lr(g.markerStart,p)}')`:void 0,[g.markerStart,p]),q=(0,$.useMemo)(()=>g.markerEnd?`url('#${lr(g.markerEnd,p)}')`:void 0,[g.markerEnd,p]);if(g.hidden||N===null||R===null||D===null||H===null)return null;let J=Q=>{let{addSelectedEdges:V,unselectNodesAndEdges:ee,multiSelectionActive:re}=_.getState();z&&(_.setState({nodesSelectionActive:!1}),g.selected&&re?(ee({nodes:[],edges:[g]}),B.current?.blur()):V([e])),r&&r(Q,g)},le=i?Q=>{i(Q,{...g})}:void 0,W=a?Q=>{a(Q,{...g})}:void 0,A=s?Q=>{s(Q,{...g})}:void 0,U=l?Q=>{l(Q,{...g})}:void 0,ne=u?Q=>{u(Q,{...g})}:void 0,oe=Q=>{if(!k&&$i.includes(Q.key)&&z){let{unselectNodesAndEdges:V,addSelectedEdges:ee}=_.getState();Q.key==="Escape"?(B.current?.blur(),V({edges:[g]})):ee([e])}};return(0,L.jsx)("svg",{style:{zIndex:M},children:(0,L.jsxs)("g",{className:_e(["react-flow__edge",`react-flow__edge-${S}`,g.className,b,{selected:g.selected,animated:g.animated,inactive:!z&&!r,updating:P,selectable:z}]),onClick:J,onDoubleClick:le,onContextMenu:W,onMouseEnter:A,onMouseMove:U,onMouseLeave:ne,onKeyDown:v?oe:void 0,tabIndex:v?0:void 0,role:g.ariaRole??(v?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":g.ariaLabel===null?void 0:g.ariaLabel||`Edge from ${g.source} to ${g.target}`,"aria-describedby":v?`${Wc}-${p}`:void 0,ref:B,...g.domAttributes,children:[!I&&(0,L.jsx)(C,{id:e,source:g.source,target:g.target,type:g.type,selected:g.selected,animated:g.animated,selectable:z,deletable:g.deletable??!0,label:g.label,labelStyle:g.labelStyle,labelShowBg:g.labelShowBg,labelBgStyle:g.labelBgStyle,labelBgPadding:g.labelBgPadding,labelBgBorderRadius:g.labelBgBorderRadius,sourceX:N,sourceY:R,targetX:D,targetY:H,sourcePosition:F,targetPosition:G,data:g.data,style:g.style,sourceHandleId:g.sourceHandle,targetHandleId:g.targetHandle,markerStart:Y,markerEnd:q,pathOptions:"pathOptions"in g?g.pathOptions:void 0,interactionWidth:g.interactionWidth}),E&&(0,L.jsx)(qy,{edge:g,isReconnectable:E,reconnectRadius:c,onReconnect:d,onReconnectStart:f,onReconnectEnd:m,sourceX:N,sourceY:R,targetX:D,targetY:H,sourcePosition:F,targetPosition:G,setUpdateHover:O,setReconnecting:x})]})})}var Zy=(0,$.memo)(Uy),Ky=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function gu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:l,onEdgeMouseLeave:u,onEdgeClick:c,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:m,onReconnectEnd:p,disableKeyboardA11y:y}){let{edgesFocusable:b,edgesReconnectable:h,elementsSelectable:k,onError:g}=pe(Ky,ke),w=Ay(t);return(0,L.jsxs)("div",{className:"react-flow__edges",children:[(0,L.jsx)(Hy,{defaultColor:e,rfId:n}),w.map(S=>(0,L.jsx)(Zy,{id:S,edgesFocusable:b,edgesReconnectable:h,elementsSelectable:k,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:l,onMouseLeave:u,onClick:c,reconnectRadius:d,onDoubleClick:f,onReconnectStart:m,onReconnectEnd:p,rfId:n,onError:g,edgeTypes:o,disableKeyboardA11y:y},S))]})}gu.displayName="EdgeRenderer";var jy=(0,$.memo)(gu),Ac=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Qy({children:e}){let t=xe(),n=(0,$.useRef)(null),[o]=(0,$.useState)(()=>t.getState().transform);return qc(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=Ac(a)))};return i(),t.subscribe(i)},[t]),(0,L.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:Ac(o)},children:e})}function Jy(e){let t=da(),n=(0,$.useRef)(!1);(0,$.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var ex=e=>e.panZoom?.syncViewport;function tx(e){let t=pe(ex),n=xe();return(0,$.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Tc(e){return e.connection.inProgress?{...e.connection,to:On(e.connection.to,e.transform)}:{...e.connection}}function nx(e){return e?n=>{let o=Tc(n);return e(o)}:Tc}function ox(e){let t=nx(e);return pe(t,ke)}var rx=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function ix({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:l}=pe(rx,ke);return!(i&&r&&l)?null:(0,L.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,L.jsx)("g",{className:_e(["react-flow__connection",Bi(s)]),children:(0,L.jsx)(hu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var hu=({style:e,type:t=bt.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:l,to:u,toNode:c,toHandle:d,toPosition:f,pointer:m}=ox();if(!r)return;if(n)return(0,L.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:u.x,toY:u.y,fromPosition:l,toPosition:f,connectionStatus:Bi(o),toNode:c,toHandle:d,pointer:m});let p="",y={sourceX:i.x,sourceY:i.y,sourcePosition:l,targetX:u.x,targetY:u.y,targetPosition:f};switch(t){case bt.Bezier:[p]=ar(y);break;case bt.SimpleBezier:[p]=ou(y);break;case bt.Step:[p]=lo({...y,borderRadius:0});break;case bt.SmoothStep:[p]=lo(y);break;default:[p]=sr(y)}return(0,L.jsx)("path",{d:p,fill:"none",className:"react-flow__connection-path",style:e})};hu.displayName="ConnectionLine";var ax={};function Oc(e=ax){let t=(0,$.useRef)(e),n=xe();(0,$.useEffect)(()=>{},[e])}function sx(){let e=xe(),t=(0,$.useRef)(!1);(0,$.useEffect)(()=>{},[])}function bu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:c,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:m,connectionLineType:p,connectionLineStyle:y,connectionLineComponent:b,connectionLineContainerStyle:h,selectionKeyCode:k,selectionOnDrag:g,selectionMode:w,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,deleteKeyCode:E,onlyRenderVisibleElements:z,elementsSelectable:B,defaultViewport:P,translateExtent:O,minZoom:I,maxZoom:x,preventScrolling:_,defaultMarkerColor:M,zoomOnScroll:N,zoomOnPinch:R,panOnScroll:D,panOnScrollSpeed:H,panOnScrollMode:F,zoomOnDoubleClick:G,panOnDrag:Y,autoPanOnSelection:q,onPaneClick:J,onPaneMouseEnter:le,onPaneMouseMove:W,onPaneMouseLeave:A,onPaneScroll:U,onPaneContextMenu:ne,paneClickDistance:oe,nodeClickDistance:Q,onEdgeContextMenu:V,onEdgeMouseEnter:ee,onEdgeMouseMove:re,onEdgeMouseLeave:de,reconnectRadius:Se,onReconnect:at,onReconnectStart:tt,onReconnectEnd:fe,noDragClassName:st,noWheelClassName:Ut,noPanClassName:Ke,disableKeyboardA11y:kt,nodeExtent:Fe,rfId:nt,viewport:je,onViewportChange:pt,nodesDraggable:At}){return Oc(e),Oc(t),sx(),Jy(n),tx(je),(0,L.jsx)(Cy,{onPaneClick:J,onPaneMouseEnter:le,onPaneMouseMove:W,onPaneMouseLeave:A,onPaneContextMenu:ne,onPaneScroll:U,paneClickDistance:oe,deleteKeyCode:E,selectionKeyCode:k,selectionOnDrag:g,selectionMode:w,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:v,elementsSelectable:B,zoomOnScroll:N,zoomOnPinch:R,zoomOnDoubleClick:G,panOnScroll:D,panOnScrollSpeed:H,panOnScrollMode:F,panOnDrag:Y,autoPanOnSelection:q,defaultViewport:P,translateExtent:O,minZoom:I,maxZoom:x,onSelectionContextMenu:d,preventScrolling:_,noDragClassName:st,noWheelClassName:Ut,noPanClassName:Ke,disableKeyboardA11y:kt,onViewportChange:pt,isControlledViewport:!!je,children:(0,L.jsxs)(Qy,{children:[(0,L.jsx)(jy,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:at,onReconnectStart:tt,onReconnectEnd:fe,onlyRenderVisibleElements:z,onEdgeContextMenu:V,onEdgeMouseEnter:ee,onEdgeMouseMove:re,onEdgeMouseLeave:de,reconnectRadius:Se,defaultMarkerColor:M,noPanClassName:Ke,disableKeyboardA11y:kt,rfId:nt}),(0,L.jsx)(ix,{style:y,type:p,component:b,containerStyle:h}),(0,L.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,L.jsx)(Dy,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:l,onNodeMouseLeave:u,onNodeContextMenu:c,nodeClickDistance:Q,onlyRenderVisibleElements:z,noPanClassName:Ke,noDragClassName:st,disableKeyboardA11y:kt,nodeExtent:Fe,rfId:nt,nodesDraggable:At}),(0,L.jsx)("div",{className:"react-flow__viewport-portal"})]})})}bu.displayName="GraphView";var lx=(0,$.memo)(bu),cx=qi("React Flow","https://reactflow.dev/"),$c=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:l=.5,maxZoom:u=2,nodeOrigin:c,nodeExtent:d,zIndexMode:f="basic"}={})=>{let m=new Map,p=new Map,y=new Map,b=new Map,h=o??t??[],k=n??e??[],g=c??[0,0],w=d??Rn;ia(y,b,h);let{nodesInitialized:S}=cr(k,m,p,{nodeOrigin:g,nodeExtent:w,zIndexMode:f}),C=[0,0,1];if(a&&r&&i){let v=Dn(m,{filter:P=>!!((P.width||P.initialWidth)&&(P.height||P.initialHeight))}),{x:E,y:z,zoom:B}=so(v,r,i,l,u,s?.padding??.1);C=[E,z,B]}return{rfId:"1",width:r??0,height:i??0,transform:C,nodes:k,nodesInitialized:S,nodeLookup:m,parentLookup:p,edges:h,edgeLookup:b,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:l,maxZoom:u,translateExtent:Rn,nodeExtent:w,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Lt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:g,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...Hi},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:cx,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Li,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},ux=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:c,nodeExtent:d,zIndexMode:f})=>fc((m,p)=>{async function y(){let{nodeLookup:b,panZoom:h,fitViewOptions:k,fitViewResolver:g,width:w,height:S,minZoom:C,maxZoom:v}=p();h&&(await Cl({nodes:b,width:w,height:S,panZoom:h,minZoom:C,maxZoom:v},k),g?.resolve(!0),m({fitViewResolver:null}))}return{...$c({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:l,maxZoom:u,nodeOrigin:c,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:b=>{let{nodeLookup:h,parentLookup:k,nodeOrigin:g,elevateNodesOnSelect:w,fitViewQueued:S,zIndexMode:C,nodesSelectionActive:v}=p(),{nodesInitialized:E,hasSelectedNodes:z}=cr(b,h,k,{nodeOrigin:g,nodeExtent:d,elevateNodesOnSelect:w,checkEquality:!0,zIndexMode:C}),B=v&&z;S&&E?(y(),m({nodes:b,nodesInitialized:E,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:B})):m({nodes:b,nodesInitialized:E,nodesSelectionActive:B})},setEdges:b=>{let{connectionLookup:h,edgeLookup:k}=p();ia(h,k,b),m({edges:b})},setDefaultNodesAndEdges:(b,h)=>{if(b){let{setNodes:k}=p();k(b),m({hasDefaultNodes:!0})}if(h){let{setEdges:k}=p();k(h),m({hasDefaultEdges:!0})}},updateNodeInternals:b=>{let{triggerNodeChanges:h,nodeLookup:k,parentLookup:g,domNode:w,nodeOrigin:S,nodeExtent:C,debug:v,fitViewQueued:E,zIndexMode:z}=p(),{changes:B,updatedInternals:P}=Ll(b,k,g,w,S,C,z);P&&(Ol(k,g,{nodeOrigin:S,nodeExtent:C,zIndexMode:z}),E?(y(),m({fitViewQueued:!1,fitViewOptions:void 0})):m({}),B?.length>0&&(v&&console.log("React Flow: trigger node changes",B),h?.(B)))},updateNodePositions:(b,h=!1)=>{let k=[],g=[],{nodeLookup:w,triggerNodeChanges:S,connection:C,updateConnection:v,onNodesChangeMiddlewareMap:E}=p();for(let[z,B]of b){let P=w.get(z),O=!!(P?.expandParent&&P?.parentId&&B?.position),I={id:z,type:"position",position:O?{x:Math.max(0,B.position.x),y:Math.max(0,B.position.y)}:B.position,dragging:h};if(P&&C.inProgress&&C.fromNode.id===P.id){let x=Ht(P,C.fromHandle,te.Left,!0);v({...C,from:x})}O&&P.parentId&&k.push({id:z,parentId:P.parentId,rect:{...B.internals.positionAbsolute,width:B.measured.width??0,height:B.measured.height??0}}),g.push(I)}if(k.length>0){let{parentLookup:z,nodeOrigin:B}=p(),P=ur(k,w,z,B);g.push(...P)}for(let z of E.values())g=z(g);S(g)},triggerNodeChanges:b=>{let{onNodesChange:h,setNodes:k,nodes:g,hasDefaultNodes:w,debug:S}=p();if(b?.length){if(w){let C=Gc(b,g);k(C)}S&&console.log("React Flow: trigger node changes",b),h?.(b)}},triggerEdgeChanges:b=>{let{onEdgesChange:h,setEdges:k,edges:g,hasDefaultEdges:w,debug:S}=p();if(b?.length){if(w){let C=Xc(b,g);k(C)}S&&console.log("React Flow: trigger edge changes",b),h?.(b)}},addSelectedNodes:b=>{let{multiSelectionActive:h,edgeLookup:k,nodeLookup:g,triggerNodeChanges:w,triggerEdgeChanges:S}=p();if(h){let C=b.map(v=>cn(v,!0));w(C);return}w(Hn(g,new Set([...b]),!0)),S(Hn(k))},addSelectedEdges:b=>{let{multiSelectionActive:h,edgeLookup:k,nodeLookup:g,triggerNodeChanges:w,triggerEdgeChanges:S}=p();if(h){let C=b.map(v=>cn(v,!0));S(C);return}S(Hn(k,new Set([...b]))),w(Hn(g,new Set,!0))},unselectNodesAndEdges:({nodes:b,edges:h}={})=>{let{edges:k,nodes:g,nodeLookup:w,triggerNodeChanges:S,triggerEdgeChanges:C}=p(),v=b||g,E=h||k,z=[];for(let P of v){if(!P.selected)continue;let O=w.get(P.id);O&&(O.selected=!1),z.push(cn(P.id,!1))}let B=[];for(let P of E)P.selected&&B.push(cn(P.id,!1));S(z),C(B)},setMinZoom:b=>{let{panZoom:h,maxZoom:k}=p();h?.setScaleExtent([b,k]),m({minZoom:b})},setMaxZoom:b=>{let{panZoom:h,minZoom:k}=p();h?.setScaleExtent([k,b]),m({maxZoom:b})},setTranslateExtent:b=>{p().panZoom?.setTranslateExtent(b),m({translateExtent:b})},resetSelectedElements:()=>{let{edges:b,nodes:h,triggerNodeChanges:k,triggerEdgeChanges:g,elementsSelectable:w}=p();if(!w)return;let S=h.reduce((v,E)=>E.selected?[...v,cn(E.id,!1)]:v,[]),C=b.reduce((v,E)=>E.selected?[...v,cn(E.id,!1)]:v,[]);k(S),g(C)},setNodeExtent:b=>{let{nodes:h,nodeLookup:k,parentLookup:g,nodeOrigin:w,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:v}=p();b[0][0]===C[0][0]&&b[0][1]===C[0][1]&&b[1][0]===C[1][0]&&b[1][1]===C[1][1]||(cr(h,k,g,{nodeOrigin:w,nodeExtent:b,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:v}),m({nodeExtent:b}))},panBy:b=>{let{transform:h,width:k,height:g,panZoom:w,translateExtent:S}=p();return Hl({delta:b,panZoom:w,transform:h,translateExtent:S,width:k,height:g})},setCenter:async(b,h,k)=>{let{width:g,height:w,maxZoom:S,panZoom:C}=p();if(!C)return!1;let v=typeof k?.zoom<"u"?k.zoom:S;return await C.setViewport({x:g/2-b*v,y:w/2-h*v,zoom:v},{duration:k?.duration,ease:k?.ease,interpolate:k?.interpolate}),!0},cancelConnection:()=>{m({connection:{...Hi}})},updateConnection:b=>{m({connection:b})},reset:()=>m({...$c()})}},Object.is);function dx({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:l,fitView:u,nodeOrigin:c,nodeExtent:d,zIndexMode:f,children:m}){let[p]=(0,$.useState)(()=>ux({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:u,minZoom:a,maxZoom:s,fitViewOptions:l,nodeOrigin:c,nodeExtent:d,zIndexMode:f}));return(0,L.jsx)(E0,{value:p,children:(0,L.jsx)(K0,{children:(0,L.jsx)(dy,{children:m})})})}function fx({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:l,minZoom:u,maxZoom:c,nodeOrigin:d,nodeExtent:f,zIndexMode:m}){return(0,$.useContext)(br)?(0,L.jsx)(L.Fragment,{children:e}):(0,L.jsx)(dx,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:l,initialMinZoom:u,initialMaxZoom:c,nodeOrigin:d,nodeExtent:f,zIndexMode:m,children:e})}var px={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function mx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:l,onInit:u,onMove:c,onMoveStart:d,onMoveEnd:f,onConnect:m,onConnectStart:p,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:h,onNodeMouseEnter:k,onNodeMouseMove:g,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:v,onNodeDrag:E,onNodeDragStop:z,onNodesDelete:B,onEdgesDelete:P,onDelete:O,onSelectionChange:I,onSelectionDragStart:x,onSelectionDrag:_,onSelectionDragStop:M,onSelectionContextMenu:N,onSelectionStart:R,onSelectionEnd:D,onBeforeDelete:H,connectionMode:F,connectionLineType:G=bt.Bezier,connectionLineStyle:Y,connectionLineComponent:q,connectionLineContainerStyle:J,deleteKeyCode:le="Backspace",selectionKeyCode:W="Shift",selectionOnDrag:A=!1,selectionMode:U=rn.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:oe=$n()?"Meta":"Control",zoomActivationKeyCode:Q=$n()?"Meta":"Control",snapToGrid:V,snapGrid:ee,onlyRenderVisibleElements:re=!1,selectNodesOnDrag:de,nodesDraggable:Se,autoPanOnNodeFocus:at,nodesConnectable:tt,nodesFocusable:fe,nodeOrigin:st=Fc,edgesFocusable:Ut,edgesReconnectable:Ke,elementsSelectable:kt=!0,defaultViewport:Fe=H0,minZoom:nt=.5,maxZoom:je=2,translateExtent:pt=Rn,preventScrolling:At=!0,nodeExtent:bn,defaultMarkerColor:$e="#b1b1b7",zoomOnScroll:wo=!0,zoomOnPinch:vo=!0,panOnScroll:ko=!1,panOnScrollSpeed:Hr=.5,panOnScrollMode:Br=It.Free,zoomOnDoubleClick:Wr=!0,panOnDrag:Fr=!0,onPaneClick:Vr,onPaneMouseEnter:Gr,onPaneMouseMove:Xr,onPaneMouseLeave:Yr,onPaneScroll:qr,onPaneContextMenu:Zt,paneClickDistance:So=1,nodeClickDistance:Co=0,children:Ur,onReconnect:T,onReconnectStart:X,onReconnectEnd:K,onEdgeContextMenu:ae,onEdgeDoubleClick:Ce,onEdgeMouseEnter:St,onEdgeMouseMove:Pe,onEdgeMouseLeave:yn,reconnectRadius:ap=10,onNodesChange:sp,onEdgesChange:lp,noDragClassName:cp="nodrag",noWheelClassName:up="nowheel",noPanClassName:qa="nopan",fitView:Ua,fitViewOptions:Za,connectOnClick:dp,attributionPosition:fp,proOptions:pp,defaultEdgeOptions:mp,elevateNodesOnSelect:gp=!0,elevateEdgesOnSelect:hp=!1,disableKeyboardA11y:Ka=!1,autoPanOnConnect:bp,autoPanOnNodeDrag:yp,autoPanOnSelection:xp=!0,autoPanSpeed:wp,connectionRadius:vp,isValidConnection:kp,onError:Sp,style:Cp,id:ja,nodeDragThreshold:Np,connectionDragThreshold:Ep,viewport:_p,onViewportChange:Mp,width:Ip,height:Pp,colorMode:zp="light",debug:Rp,onScroll:Qa,ariaLabelConfig:Dp,zIndexMode:Ja="basic",...Ap},Tp){let Zr=ja||"1",Op=V0(zp),$p=(0,$.useCallback)(es=>{es.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Qa?.(es)},[Qa]);return(0,L.jsx)("div",{"data-testid":"rf__wrapper",...Ap,onScroll:$p,style:{...Cp,...px},ref:Tp,className:_e(["react-flow",r,Op]),id:ja,role:"application",children:(0,L.jsxs)(fx,{nodes:e,edges:t,width:Ip,height:Pp,fitView:Ua,fitViewOptions:Za,minZoom:nt,maxZoom:je,nodeOrigin:st,nodeExtent:bn,zIndexMode:Ja,children:[(0,L.jsx)(F0,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:m,onConnectStart:p,onConnectEnd:y,onClickConnectStart:b,onClickConnectEnd:h,nodesDraggable:Se,autoPanOnNodeFocus:at,nodesConnectable:tt,nodesFocusable:fe,edgesFocusable:Ut,edgesReconnectable:Ke,elementsSelectable:kt,elevateNodesOnSelect:gp,elevateEdgesOnSelect:hp,minZoom:nt,maxZoom:je,nodeExtent:bn,onNodesChange:sp,onEdgesChange:lp,snapToGrid:V,snapGrid:ee,connectionMode:F,translateExtent:pt,connectOnClick:dp,defaultEdgeOptions:mp,fitView:Ua,fitViewOptions:Za,onNodesDelete:B,onEdgesDelete:P,onDelete:O,onNodeDragStart:v,onNodeDrag:E,onNodeDragStop:z,onSelectionDrag:_,onSelectionDragStart:x,onSelectionDragStop:M,onMove:c,onMoveStart:d,onMoveEnd:f,noPanClassName:qa,nodeOrigin:st,rfId:Zr,autoPanOnConnect:bp,autoPanOnNodeDrag:yp,autoPanSpeed:wp,onError:Sp,connectionRadius:vp,isValidConnection:kp,selectNodesOnDrag:de,nodeDragThreshold:Np,connectionDragThreshold:Ep,onBeforeDelete:H,debug:Rp,ariaLabelConfig:Dp,zIndexMode:Ja}),(0,L.jsx)(lx,{onInit:u,onNodeClick:s,onEdgeClick:l,onNodeMouseEnter:k,onNodeMouseMove:g,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:i,edgeTypes:a,connectionLineType:G,connectionLineStyle:Y,connectionLineComponent:q,connectionLineContainerStyle:J,selectionKeyCode:W,selectionOnDrag:A,selectionMode:U,deleteKeyCode:le,multiSelectionKeyCode:oe,panActivationKeyCode:ne,zoomActivationKeyCode:Q,onlyRenderVisibleElements:re,defaultViewport:Fe,translateExtent:pt,minZoom:nt,maxZoom:je,preventScrolling:At,zoomOnScroll:wo,zoomOnPinch:vo,zoomOnDoubleClick:Wr,panOnScroll:ko,panOnScrollSpeed:Hr,panOnScrollMode:Br,panOnDrag:Fr,autoPanOnSelection:xp,onPaneClick:Vr,onPaneMouseEnter:Gr,onPaneMouseMove:Xr,onPaneMouseLeave:Yr,onPaneScroll:qr,onPaneContextMenu:Zt,paneClickDistance:So,nodeClickDistance:Co,onSelectionContextMenu:N,onSelectionStart:R,onSelectionEnd:D,onReconnect:T,onReconnectStart:X,onReconnectEnd:K,onEdgeContextMenu:ae,onEdgeDoubleClick:Ce,onEdgeMouseEnter:St,onEdgeMouseMove:Pe,onEdgeMouseLeave:yn,reconnectRadius:ap,defaultMarkerColor:$e,noDragClassName:cp,noWheelClassName:up,noPanClassName:qa,rfId:Zr,disableKeyboardA11y:Ka,nodeExtent:bn,viewport:_p,onViewportChange:Mp,nodesDraggable:Se}),(0,L.jsx)(L0,{onSelectionChange:I}),Ur,(0,L.jsx)(D0,{proOptions:pp,position:fp}),(0,L.jsx)(R0,{rfId:Zr,disableKeyboardA11y:Ka})]})})}var yu=Yc(mx);function xu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>Gc(r,i)),[]);return[t,n,o]}function wu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>Xc(r,i)),[]);return[t,n,o]}var x1=Je.error014();function gx({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,L.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:_e(["react-flow__background-pattern",n,o])})}function hx({radius:e,className:t}){return(0,L.jsx)("circle",{cx:e,cy:e,r:e,className:_e(["react-flow__background-pattern","dots",t])})}var yt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(yt||(yt={}));var bx={[yt.Dots]:1,[yt.Lines]:1,[yt.Cross]:6},yx=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function vu({id:e,variant:t=yt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:l,className:u,patternClassName:c}){let d=(0,$.useRef)(null),{transform:f,patternId:m}=pe(yx,ke),p=o||bx[t],y=t===yt.Dots,b=t===yt.Cross,h=Array.isArray(n)?n:[n,n],k=[h[0]*f[2]||1,h[1]*f[2]||1],g=p*f[2],w=Array.isArray(i)?i:[i,i],S=b?[g,g]:k,C=[w[0]*f[2]||1+S[0]/2,w[1]*f[2]||1+S[1]/2],v=`${m}${e||""}`;return(0,L.jsxs)("svg",{className:_e(["react-flow__background",u]),style:{...l,...xr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,L.jsx)("pattern",{id:v,x:f[0]%k[0],y:f[1]%k[1],width:k[0],height:k[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:y?(0,L.jsx)(hx,{radius:g/2,className:c}):(0,L.jsx)(gx,{dimensions:S,lineWidth:r,variant:t,className:c})}),(0,L.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${v})`})]})}vu.displayName="Background";var ku=(0,$.memo)(vu);function xx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,L.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function wx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,L.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function vx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,L.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function kx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,L.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Sx(){return(0,L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,L.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function gr({children:e,className:t,...n}){return(0,L.jsx)("button",{type:"button",className:_e(["react-flow__controls-button",t]),...n,children:e})}var Cx=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function Su({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:l,className:u,children:c,position:d="bottom-left",orientation:f="vertical","aria-label":m}){let p=xe(),{isInteractive:y,minZoomReached:b,maxZoomReached:h,ariaLabelConfig:k}=pe(Cx,ke),{zoomIn:g,zoomOut:w,fitView:S}=da(),C=()=>{g(),i?.()},v=()=>{w(),a?.()},E=()=>{S(r),s?.()},z=()=>{p.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),l?.(!y)};return(0,L.jsxs)(yr,{className:_e(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",u]),position:d,style:e,"data-testid":"rf__controls","aria-label":m??k["controls.ariaLabel"],children:[t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(gr,{onClick:C,className:"react-flow__controls-zoomin",title:k["controls.zoomIn.ariaLabel"],"aria-label":k["controls.zoomIn.ariaLabel"],disabled:h,children:(0,L.jsx)(xx,{})}),(0,L.jsx)(gr,{onClick:v,className:"react-flow__controls-zoomout",title:k["controls.zoomOut.ariaLabel"],"aria-label":k["controls.zoomOut.ariaLabel"],disabled:b,children:(0,L.jsx)(wx,{})})]}),n&&(0,L.jsx)(gr,{className:"react-flow__controls-fitview",onClick:E,title:k["controls.fitView.ariaLabel"],"aria-label":k["controls.fitView.ariaLabel"],children:(0,L.jsx)(vx,{})}),o&&(0,L.jsx)(gr,{className:"react-flow__controls-interactive",onClick:z,title:k["controls.interactive.ariaLabel"],"aria-label":k["controls.interactive.ariaLabel"],children:y?(0,L.jsx)(Sx,{}):(0,L.jsx)(kx,{})}),c]})}Su.displayName="Controls";var w1=(0,$.memo)(Su);function Nx({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:l,className:u,borderRadius:c,shapeRendering:d,selected:f,onClick:m}){let{background:p,backgroundColor:y}=i||{},b=a||p||y;return(0,L.jsx)("rect",{className:_e(["react-flow__minimap-node",{selected:f},u]),x:t,y:n,rx:c,ry:c,width:o,height:r,style:{fill:b,stroke:s,strokeWidth:l},shapeRendering:d,onClick:m?h=>m(h,e):void 0})}var Ex=(0,$.memo)(Nx),_x=e=>e.nodes.map(t=>t.id),ca=e=>e instanceof Function?e:()=>e;function Mx({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=Ex,onClick:a}){let s=pe(_x,ke),l=ca(t),u=ca(e),c=ca(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,L.jsx)(L.Fragment,{children:s.map(f=>(0,L.jsx)(Px,{id:f,nodeColorFunc:l,nodeStrokeColorFunc:u,nodeClassNameFunc:c,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function Ix({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:l}){let{node:u,x:c,y:d,width:f,height:m}=pe(p=>{let y=p.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let b=y.internals.userNode,{x:h,y:k}=y.internals.positionAbsolute,{width:g,height:w}=dt(b);return{node:b,x:h,y:k,width:g,height:w}},ke);return!u||u.hidden||!Ui(u)?null:(0,L.jsx)(s,{x:c,y:d,width:f,height:m,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:r,strokeColor:n(u),strokeWidth:i,shapeRendering:a,onClick:l,id:u.id})}var Px=(0,$.memo)(Ix),zx=(0,$.memo)(Mx),Rx=200,Dx=150,Ax=e=>!e.hidden,Tx=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?Xi(Dn(e.nodeLookup,{filter:Ax}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Lc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Ox=(e,t)=>Lc(e.viewBB,t.viewBB)&&Lc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,$x="react-flow__minimap-desc";function Cu({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:l,maskColor:u,maskStrokeColor:c,maskStrokeWidth:d,position:f="bottom-right",onClick:m,onNodeClick:p,pannable:y=!1,zoomable:b=!1,ariaLabel:h,inversePan:k,zoomStep:g=1,offsetScale:w=5}){let S=xe(),C=(0,$.useRef)(null),{boundingRect:v,viewBB:E,rfId:z,panZoom:B,translateExtent:P,flowWidth:O,flowHeight:I,ariaLabelConfig:x}=pe(Tx,Ox),_=e?.width??Rx,M=e?.height??Dx,N=v.width/_,R=v.height/M,D=Math.max(N,R),H=D*_,F=D*M,G=w*D,Y=v.x-(H-v.width)/2-G,q=v.y-(F-v.height)/2-G,J=H+G*2,le=F+G*2,W=`${$x}-${z}`,A=(0,$.useRef)(0),U=(0,$.useRef)();A.current=D,(0,$.useEffect)(()=>{if(C.current&&B)return U.current=Yl({domNode:C.current,panZoom:B,getTransform:()=>S.getState().transform,getViewScale:()=>A.current}),()=>{U.current?.destroy()}},[B]),(0,$.useEffect)(()=>{U.current?.update({translateExtent:P,width:O,height:I,inversePan:k,pannable:y,zoomStep:g,zoomable:b})},[y,b,k,g,P,O,I]);let ne=m?V=>{let[ee,re]=U.current?.pointer(V)||[0,0];m(V,{x:ee,y:re})}:void 0,oe=p?(0,$.useCallback)((V,ee)=>{let re=S.getState().nodeLookup.get(ee).internals.userNode;p(V,re)},[]):void 0,Q=h??x["minimap.ariaLabel"];return(0,L.jsx)(yr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:_e(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,L.jsxs)("svg",{width:_,height:M,viewBox:`${Y} ${q} ${J} ${le}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":W,ref:C,onClick:ne,children:[Q&&(0,L.jsx)("title",{id:W,children:Q}),(0,L.jsx)(zx,{onClick:oe,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,L.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Y-G},${q-G}h${J+G*2}v${le+G*2}h${-J-G*2}z
        M${E.x},${E.y}h${E.width}v${E.height}h${-E.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Cu.displayName="MiniMap";var Nu=(0,$.memo)(Cu),Lx=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Hx={[Bt.Line]:"right",[Bt.Handle]:"bottom-right"};function Bx({nodeId:e,position:t,variant:n=Bt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:l=10,maxWidth:u=Number.MAX_VALUE,maxHeight:c=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:m=!0,shouldResize:p,onResizeStart:y,onResize:b,onResizeEnd:h}){let k=jc(),g=typeof e=="string"?e:k,w=xe(),S=(0,$.useRef)(null),C=n===Bt.Handle,v=pe((0,$.useCallback)(Lx(C&&m),[C,m]),ke),E=(0,$.useRef)(null),z=t??Hx[n];(0,$.useEffect)(()=>{if(!(!S.current||!g))return E.current||(E.current=jl({domNode:S.current,nodeId:g,getStoreItems:()=>{let{nodeLookup:P,transform:O,snapGrid:I,snapToGrid:x,nodeOrigin:_,domNode:M}=w.getState();return{nodeLookup:P,transform:O,snapGrid:I,snapToGrid:x,nodeOrigin:_,paneDomNode:M}},onChange:(P,O)=>{let{triggerNodeChanges:I,nodeLookup:x,parentLookup:_,nodeOrigin:M}=w.getState(),N=[],R={x:P.x,y:P.y},D=x.get(g);if(D&&D.expandParent&&D.parentId){let H=D.origin??M,F=P.width??D.measured.width??0,G=P.height??D.measured.height??0,Y={id:D.id,parentId:D.parentId,rect:{width:F,height:G,...Zi({x:P.x??D.position.x,y:P.y??D.position.y},{width:F,height:G},D.parentId,x,H)}},q=ur([Y],x,_,M);N.push(...q),R.x=P.x?Math.max(H[0]*F,P.x):void 0,R.y=P.y?Math.max(H[1]*G,P.y):void 0}if(R.x!==void 0&&R.y!==void 0){let H={id:g,type:"position",position:{...R}};N.push(H)}if(P.width!==void 0&&P.height!==void 0){let F={id:g,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:P.width,height:P.height}};N.push(F)}for(let H of O){let F={...H,type:"position"};N.push(F)}I(N)},onEnd:({width:P,height:O})=>{let I={id:g,type:"dimensions",resizing:!1,dimensions:{width:P,height:O}};w.getState().triggerNodeChanges([I])}})),E.current.update({controlPosition:z,boundaries:{minWidth:s,minHeight:l,maxWidth:u,maxHeight:c},keepAspectRatio:d,resizeDirection:f,onResizeStart:y,onResize:b,onResizeEnd:h,shouldResize:p}),()=>{E.current?.destroy()}},[z,s,l,u,c,d,y,b,h,p]);let B=z.split("-");return(0,L.jsx)("div",{className:_e(["react-flow__resize-control","nodrag",...B,n,o]),ref:S,style:{...r,scale:v,...a&&{[C?"backgroundColor":"borderColor"]:a}},children:i})}var v1=(0,$.memo)(Bx);async function Ne(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:r})}return r}function Ve(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var Eu=()=>Ne("config");var _u=()=>Ne("assets"),vr=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},Mu=e=>Ne("asset/delete",Ve({id:e})),pa=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Ne(`history?${t.toString()}`)},kr=(e=14)=>Ne(`history/stats?days=${e}`),ma=e=>Ne("generate",Ve(e)),Iu=e=>Ne(`task?id=${encodeURIComponent(e)}`),Pu=e=>Ne("task/cancel",Ve({id:e})),zu=(e,t,n)=>Ne("workflow/save",Ve({name:e,nodes:t,edges:n})),ga=()=>Ne("workflow/list"),Ru=e=>Ne(`workflow/load?name=${encodeURIComponent(e)}`),Du=(e,t)=>Ne("recovery/save",Ve({nodes:e,edges:t})),Au=()=>Ne("recovery/latest"),Tu=e=>Ne("settings",Ve({model:e})),Sr=e=>Ne("settings",Ve({profile:e})),uo=e=>Ne("settings",Ve({outputDir:e})),Ou=e=>Ne("settings",Ve({budget:e})),ha=e=>Ne("settings",Ve({imagoraRoot:e})),$u=(e={})=>Ne("pick-folder",Ve(e)),Bn=e=>Ne("reveal",Ve({path:e})),ba=e=>Ne("provider",Ve(e)),Lu=e=>Ne("provider/probe",Ve(e));var Hu=e=>Ne("budget",Ve(e));var Bu=/[\w\u4e00-\u9fa5.-]/;var Wx=/[\p{L}\p{N}]/u;function Wu(e){return e===void 0?!0:!Wx.test(e)}function Fu(e){return e.trim().replace(/\s+/g," ")}function Fx(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&Wu(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Bu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Bu.test(i))break;r+=1}Wu(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function Vx(e){let t=[];for(let n of Fx(e))n.kind==="ref"&&t.push(n.token);return t}function Vu(e,t){let n=Vx(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let l of t){let u=Fu(l.name);if(u==="")continue;let c=o.get(u);c===void 0?o.set(u,[l.id]):c.includes(l.id)||c.push(l.id)}let r=[],i=new Set,a=[],s=new Set;for(let l of n){let u=Fu(l.name),c=o.get(u);if(c===void 0){s.has(u)||(s.add(u),a.push(u));continue}for(let d of c)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var Gx=/\.(png|jpe?g|webp|gif|bmp)$/i;function Yu(e){return e.type.startsWith("image/")?!0:Gx.test(e.name)}var Gu=30,Xu=200;function qu(e,t){if(t&&Math.abs(t.x-e.x)<Xu&&Math.abs(t.y-e.y)<Xu){let n={x:t.x+Gu,y:t.y+Gu};return{position:n,next:n}}return{position:e,next:e}}var Xx=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Yx(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!Xx.test(n));return t.length?t.join(" "):void 0}function dn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function Uu(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function Zu(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function qx(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function ya(e,t,n){let o=new Set(n);return{nodes:e.map(i=>{let a=Yx(i.className),s={...i};return a===void 0?delete s.className:s.className=a,s.type==="image"&&o.has(s.data.registryId)?{...s,data:{...s.data,missing:!0}}:s.type==="prompt"?{...s,data:{...s.data,quality:s.data.quality??"high",status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}:s}),edges:qx(t)}}function ft(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function Ku(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function Ux(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Zx(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,l=[...r.get(i.id)??[]];for(;l.length;){let u=l.pop();if(a.has(u))continue;a.add(u);let c=o.get(u);c&&(c.type==="prompt"?s.add(u):c.type==="group"&&l.push(...r.get(u)??[]))}n.set(i.data.registryId,s.size)}}function ju(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let l of r.get(e)??[]){let u=o.get(l);if(u){if(u.type==="image")a+=1,s.push(u.data.registryId);else if(u.type==="group"){let c=ju(l,t,n);a+=c.count,s.push(...c.ids)}}}return t.delete(e),{count:a,ids:s}}function Kx(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:l}=ju(a.id,new Set,t),u=new Set(l);n.set(a.id,u.size),o.set(a.id,Array.from(u).reduce((c,d)=>c+(i.get(d)??0),0)),r.set(a.id,s-u.size)}}function Qu(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=Ux(e,t);return Zx(e,a,n),Kx(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function jx(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let l=o.get(s);l&&(l.type==="image"?r.push(l):l.type==="group"&&t.filter(u=>u.target===s).forEach(u=>a.push(u.source)))}return r}function Ju(e,t,n,o){let r=jx(e,t,n),i=r.map(u=>({id:u.id,name:u.type==="image"?u.data.name:""})),a=Vu(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(u=>[u.id,u])),l=[];for(let u of a.ids){let c=s.get(u);c&&l.push(c)}return{images:l,unknown:a.unknown,mode:a.mode}}function Cr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function Nr(e,t){return t.reduce((n,o)=>!n||Cr(e,o)<Cr(e,n)?o:n,null)}function fo(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function Qx(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=Nr(r,n);if(i&&r.position.y>i.position.y){fo(e,i,r);continue}let a=Nr(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||Cr(r,a)<Cr(r,i))?fo(e,r,a):i&&fo(e,r,i)}}function Jx(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=Nr(r,n);a&&fo(e,r,a)}}function ew(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(u=>{let c=o.get(u.source)?.type;return u.target===a.id&&(c==="image"||c==="group")}))continue;let l=Nr(a,i);l&&fo(e,l,a)}}function xa(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return Qx(a,e,n,o),Jx(a,o,n,i),ew(a,n,o,r),a.next}function ed(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?xa(o,t):t}function td(e){return`\u751F\u6210\u4E2D ${e}s`}function ce(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var tw=/^=== (.+) ===\s*$/,od=/^```(?:text)?\s*$/,nw=/^ratio:\s*(\d+):(\d+)\s*$/,ow=/^ratio\b/i;function nd(e){return e.split(`
`).some(t=>od.test(t))}function rd(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((u,c)=>{let d=u.match(tw)?.[1];d!==void 0&&a.push({title:d.trim(),line:c})}),a.length===0){let u=t.trim();return u&&i.push(u),nd(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),nd(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let l=new Set;for(let u=0;u<a.length;u++){let c=a[u];if(c===void 0)continue;let{title:d}=c,f=c.line+1,m=a[u+1],p=m===void 0?n.length:m.line,y=n.slice(f,p);if(l.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}l.add(d);let b=[];y.forEach((B,P)=>{od.test(B)&&b.push(P)});let h=b[0],k=b[b.length-1];if(h===void 0||k===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let g=y.slice(0,h).join(`
`).trim();g&&i.push(g);let w=y.slice(h+1,k),S=w.findIndex(B=>B.trim()!=="");if(S===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let C=(w[S]??"").trim(),v=C.match(nw);if(!v){ow.test(C)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${C}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let E=`${v[1]}:${v[2]}`,z=w.slice(S+1).join(`
`).trim();if(!z){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:E,prompt:z})}return{cards:o,issues:r,skippedText:i}}function va(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function id(e,t,n){let o=lw(n,e.length);return e.map((r,i)=>{let a=va(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var wa=380,rw=326,ad=40,iw=74,aw=wa+ad,sw=rw+iw,Er=3;function lw(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/Er),a=r%Er,s=Math.min(Er,n-i*Er),l=s*wa+(s-1)*ad,u=e.x+wa/2-l/2;o.push({x:u+a*aw,y:e.y+i*sw})}return o}var cw={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function _r(e){let t=e.measured,n=cw[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var ka=[0,.5,1];function sd(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function cd(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function ld(e,t,n,o){let r=ka.map(s=>sd(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let l=t[s];if(l!==void 0&&l.id!==e.id&&cd(l))for(let u=0;u<ka.length;u+=1){let c=ka[u];if(c===void 0)continue;let d=sd(l,n,c);for(let f=0;f<r.length;f+=1){let m=r[f];if(m===void 0)continue;let p=d-m,y=Math.abs(p);y>=o||y>=a||(a=y,i={delta:p,position:d,targetId:l.id})}}}return i}function Mr(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!cd(e)||!Number.isFinite(n)||n<=0)return o;let r=ld(e,t,"x",n),i=ld(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var ud="imagora.canvas-snap.v1";function dd(){try{let e=window.localStorage.getItem(ud);return e===null?!0:e!=="0"}catch{return!0}}function fd(e){try{window.localStorage.setItem(ud,e?"1":"0")}catch{}}function mo(e){let t=_r(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var po=[];function pd(e,t,n){if(!n)return{changes:e,guides:po};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:po};let r=o[0];if(!r)return{changes:e,guides:po};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:po};let s={...mo(i),x:a.x,y:a.y},l=[];for(let d of t)d.id!==r.id&&l.push(mo(d));let u=Mr(s,l);return u.guides.length===0?{changes:e,guides:po}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:u.x,y:u.y}}:d),guides:u.guides}}var Ge=require("react");var Sa=require("react/jsx-runtime"),md={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function ze({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=md[e]||md.help;return(0,Sa.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,Sa.jsx)("path",{d:r})})}var Wn=require("react");var Ca=["\u6B63\u5728\u7406\u89E3\u63D0\u793A\u8BCD\u2026","\u6B63\u5728\u6784\u56FE\u2026","\u6B63\u5728\u94FA\u8BBE\u5149\u5F71\u2026","\u6B63\u5728\u7EC6\u5316\u7EC6\u8282\u2026","\u5FEB\u597D\u4E86\uFF0C\u6B63\u5728\u6536\u5C3E\u2026"];function uw(e){let t=Number.isFinite(e)&&e>0?e:0,n=10+(1-Math.exp(-t/28))*88;return Math.min(98,Math.max(10,n))}function gd(e){return uw(e)/100}function Na(e){let t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/2)%Ca.length;return Ca[n]??Ca[0]??""}function hd(e){let t=Number.isFinite(e)&&e>0?Math.floor(e):0;return`\u751F\u6210\u4E2D ${t}s \xB7 ${Na(t)}`}var fn=require("react/jsx-runtime");function bd({className:e}){let[t,n]=(0,Wn.useState)(0),o=(0,Wn.useRef)(!0);(0,Wn.useEffect)(()=>{o.current=!0;let a=window.setInterval(()=>{o.current&&n(s=>s+1)},1e3);return()=>{o.current=!1,window.clearInterval(a)}},[]);let r=hd(t),i=gd(t);return(0,fn.jsxs)("div",{className:`im-pending${e?` ${e}`:""}`,role:"status","aria-live":"polite","aria-label":r,children:[(0,fn.jsx)("div",{className:"im-pending-label",title:r,children:r}),(0,fn.jsx)("div",{className:"im-pending-track","aria-hidden":!0,children:(0,fn.jsx)("div",{className:"im-pending-bar",style:{transform:`scaleX(${i.toFixed(4)})`}})}),(0,fn.jsx)("span",{className:"visually-hidden",children:Na(t)})]})}var we=require("react"),_d=require("react-dom");var dw={id:"__custom",label:"\u81EA\u5B9A\u4E49"},fw=64;function yd(e){return e.trim().replace(/\s+/g," ")}function pw(e,t){return e.some(n=>n.value===t)}function xd(e,t){let n=yd(t);return n===""||pw(e,n)?e:[...e,{value:n,label:n,group:dw}]}function wd(e){let t=yd(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>fw?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function vd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var Ir=0;function kd(){Ir+=1}function Sd(){Ir=Math.max(0,Ir-1)}function Cd(){return Ir>0}var mw=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function Ea(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=mw.has(o)?"-":n}return t}function Nd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function gw(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+Nd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,l=n,u=n;for(let[c,d]of o.entries()){if(l!==n&&(u=Math.max(u,l+c-2)),e.charAt(c)===t.charAt(i)){let f=1+Nd(e,c),m=n;s!==n&&(m=s+f+4),u!==n&&(m=Math.max(m,u+f+1-c)),a[c]=m}l=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function Ed(e,t){let n=Ea(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,l;for(let u of a){let c=Ea(u).toLowerCase(),d=gw(c,n);d!==void 0&&(s||=c.startsWith(n),l=l===void 0?d:Math.max(l,d))}l!==void 0&&o.push({item:r,index:i,prefix:s,score:l})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var ye=require("react/jsx-runtime"),hw=4;function Pt({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:l,"aria-describedby":u,"aria-invalid":c,renderOption:d,title:f}){let[m,p]=(0,we.useState)(!1),[y,b]=(0,we.useState)(-1),[h,k]=(0,we.useState)(""),[g,w]=(0,we.useState)(null),S=(0,we.useRef)(null),C=(0,we.useRef)(null),v=(0,we.useRef)(null),E=(0,we.useId)(),z=`${r??`select-${E}`}-listbox`,B=`${z}-search`,P=(0,we.useMemo)(()=>{if(h.trim()==="")return e;let W=e.map(A=>({name:A.value,label:A.label,option:A}));return Ed(W,h).map(A=>A.option)},[e,h]),O=i===void 0||i==="auto"?e.length>hw:i,I=P.findIndex(W=>W.value===t),x=e.find(W=>W.value===t),_=W=>`${z}-option-${W}`,M=O&&s===!0,N=(0,we.useMemo)(()=>{let W=h.trim();if(W!=="")return P.find(A=>A.value===W||A.label===W)},[P,h]),R=(0,we.useMemo)(()=>{if(!M||N!==void 0)return null;let W=wd(h);return W.ok?W.value:null},[M,N,h]),D=(W=I>=0?I:0)=>{!e.length&&!M||(b(e.length===0?-1:Math.min(Math.max(W,0),e.length-1)),p(!0),O||window.setTimeout(()=>C.current?.focus(),0))},H=(W=!1)=>{p(!1),k(""),W&&window.setTimeout(()=>C.current?.focus(),0)},F=W=>{let A=P[W];A&&(n(A.value),H(!0))},G=W=>{l?.(W),H(!0)},Y=()=>{let W=C.current;if(!W)return;let A=W.getBoundingClientRect(),U=4,ne=8,oe=W.offsetWidth||A.width,Q=Math.max(ne,Math.min(A.left,window.innerWidth-oe-ne)),V=window.innerHeight-A.bottom-U-ne,ee=A.top-U-ne,re=V<160&&ee>V,de=Math.max(120,Math.min(240,re?ee:V));w({left:Q,top:re?Math.max(ne,A.top-U-de):A.bottom+U,width:oe,maxHeight:de})};(0,we.useEffect)(()=>{if(m)return kd(),()=>Sd()},[m]),(0,we.useLayoutEffect)(()=>{if(!m)return;Y();let W=()=>Y();window.addEventListener("scroll",W,!0),window.addEventListener("resize",W);let A=typeof ResizeObserver>"u"?null:new ResizeObserver(W);return C.current&&A?.observe(C.current),()=>{A?.disconnect(),window.removeEventListener("scroll",W,!0),window.removeEventListener("resize",W)}},[m]),(0,we.useEffect)(()=>{m&&O&&g&&v.current?.focus()},[m,O,g]),(0,we.useEffect)(()=>{m&&b(W=>P.length===0?-1:Math.min(Math.max(W,0),P.length-1))},[m,P.length]),(0,we.useEffect)(()=>{!e.length&&!M&&m&&(p(!1),b(-1))},[m,e.length,M]),(0,we.useEffect)(()=>{let W=A=>{let U=A.target;S.current?.contains(U)||document.getElementById(z)?.contains(U)||H()};return document.addEventListener("mousedown",W,!0),()=>document.removeEventListener("mousedown",W,!0)},[z]);let q=(W,A)=>{if(W.key==="Tab"){H();return}if(W.key==="Escape"){m&&(W.preventDefault(),H(!0));return}if(W.key==="ArrowDown"||W.key==="ArrowUp"){if(W.preventDefault(),!m){D();return}if(P.length===0)return;let U=W.key==="ArrowDown"?1:-1;b(ne=>(ne+U+P.length)%P.length);return}if(W.key==="Home"||W.key==="End"){if(P.length===0)return;W.preventDefault(),m||p(!0),b(W.key==="Home"?0:P.length-1);return}if(W.key==="Enter"){if(W.preventDefault(),!m){D();return}if(M&&h.trim()!==""){N!==void 0?(n(N.value),H(!0)):R!==null&&G(R);return}F(y);return}!A&&W.key===" "&&(W.preventDefault(),m?F(y):D())},J=(0,we.useMemo)(()=>vd(P),[P]),le=(0,we.useMemo)(()=>{let W=new Map;return P.forEach((A,U)=>W.set(A,U)),W},[P]);return(0,ye.jsxs)("div",{ref:S,className:`im-select-root ${o}`.trim(),children:[(0,ye.jsxs)("button",{ref:C,type:"button",id:r,title:f,onClick:()=>m?H():D(),onKeyDown:W=>q(W,!1),"aria-expanded":m,"aria-haspopup":"listbox","aria-controls":z,"aria-activedescendant":m&&y>=0?_(y):void 0,"aria-describedby":u,"aria-invalid":c,className:`im-select-trigger${m?" is-open":""}`,children:[d&&x?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(x),(0,ye.jsx)("span",{className:"im-select-label",children:x.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:x?.label??"\u8BF7\u9009\u62E9"}),(0,ye.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ye.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),m&&g&&(0,_d.createPortal)((0,ye.jsxs)("div",{id:z,"data-portal":"select-list",className:"im-select-list",style:{left:g.left,top:g.top,width:g.width,maxHeight:g.maxHeight},children:[O&&(0,ye.jsx)("div",{className:"im-select-search",children:(0,ye.jsx)("input",{ref:v,id:B,type:"text",className:"im-select-search-input",value:h,onChange:W=>k(W.target.value),onKeyDown:W=>q(W,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":z,"aria-activedescendant":y>=0?_(y):void 0})}),(0,ye.jsxs)("ul",{role:"listbox","aria-labelledby":O?B:void 0,className:"im-select-rows",children:[P.length===0&&(0,ye.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),J.map(W=>(0,ye.jsxs)("li",{role:"presentation",className:"im-select-group",children:[W.label!==""&&(0,ye.jsx)("div",{className:"im-select-group-title",role:"presentation",children:W.label}),(0,ye.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:W.rows.map(A=>{let U=le.get(A)??-1,ne=A.value===t,oe=U===y;return(0,ye.jsxs)("li",{id:_(U),role:"option","aria-selected":ne,className:`im-select-option${ne?" is-selected":""}${oe?" is-active":""}`,onMouseEnter:()=>b(U),onMouseDown:Q=>Q.preventDefault(),onClick:()=>F(U),children:[d?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(A),(0,ye.jsx)("span",{className:"im-select-label",children:A.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:A.label}),ne&&(0,ye.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ye.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},A.value)})})]},W.id||"__ungrouped"))]}),R!==null&&(0,ye.jsx)("div",{className:"im-select-custom",children:(0,ye.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:W=>W.preventDefault(),onClick:()=>G(R),children:(0,ye.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",R,"\u201D"]})})})]}),document.body)]})}var Z=require("react/jsx-runtime"),_a=(0,Ge.createContext)(null),Ma=(0,Ge.createContext)(!1);function Ia(){return(0,Ge.useContext)(Ma)}function Pa(){let e=(0,Ge.useContext)(_a);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function Pr(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(un,{type:"target",position:te.Top,className:"im-handle"}),(0,Z.jsx)(un,{type:"source",position:te.Bottom,className:"im-handle"})]})}function za({children:e}){return(0,Z.jsx)("div",{className:"im-rail nodrag",children:e})}function zt({label:e,onClick:t,danger:n,children:o}){return(0,Z.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var Pd=(0,Ge.memo)(function({id:t,data:n,selected:o}){let r=Pa(),i=Ia(),[a,s]=(0,Ge.useState)(!1),l=n.missing||a;return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${l?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,Z.jsx)(Pr,{}),l?(0,Z.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,Z.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:u=>{u.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,i?null:(0,Z.jsxs)(za,{children:[(0,Z.jsx)(zt,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,Z.jsx)(ze,{name:"eye"})}),(0,Z.jsx)(zt,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,Z.jsx)(ze,{name:"crop"})}),(0,Z.jsx)(zt,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,Z.jsx)(ze,{name:"expand"})}),(0,Z.jsx)(zt,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,Z.jsx)(ze,{name:"grid"})}),(0,Z.jsx)(zt,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,Z.jsx)(ze,{name:"wand"})}),(0,Z.jsx)(zt,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,Z.jsx)(ze,{name:"image"})}),(0,Z.jsx)(zt,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-thumb",onDoubleClick:u=>{u.stopPropagation(),r.zoomImage(t)},children:n.url?(0,Z.jsx)("img",{src:n.url,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):(0,Z.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,Z.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,Z.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),Md=4,zd=(0,Ge.memo)(function({id:t,data:n,selected:o}){let r=Pa(),i=Ia(),a=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,l=Math.min(Math.max(n.imageCount-1,0),3);return(0,Z.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,Z.jsx)(Pr,{}),i?null:(0,Z.jsx)(za,{children:(0,Z.jsx)(zt,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})}),(0,Z.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:l},(u,c)=>(0,Z.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(c+1)*Md}px, ${-(c+1)*Md}px)`}},c)),(0,Z.jsxs)("div",{className:"im-group-face",children:[(0,Z.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,Z.jsxs)("div",{className:"im-group-size",children:[a," MB"]}),s>0?(0,Z.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function Id({from:e}){let[t,n]=(0,Ge.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ge.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,Z.jsx)(Z.Fragment,{children:td(t)})}var bw={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"};function yw(e){switch(e.status){case"queued":return{text:"\u6392\u961F\u4E2D",detail:"\u6392\u961F\u4E2D",tone:"is-queued"};case"running":return{text:"\u751F\u6210\u4E2D",detail:"\u751F\u6210\u4E2D",tone:"is-running"};case"done":return{text:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,detail:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,tone:"is-done"};case"failed":return{text:"\u5931\u8D25",detail:e.message?`\u5931\u8D25\uFF1A${e.message}`:"\u5931\u8D25",tone:"is-failed"};default:return{text:"\u5C31\u7EEA",detail:"\u5C31\u7EEA",tone:"is-idle"}}}var Rd=(0,Ge.memo)(function({id:t,data:n,selected:o}){let r=Pa(),i=Ia(),a=r.config,s=n.status==="queued"||n.status==="running",l=a?.sizes??[],u=a?.qualities??[],c=l.some(f=>f.value===n.size)||!n.size?l:[...l,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],d=a?.qualityEffective!==!1;if(i){let f=yw(n);return(0,Z.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Pr,{}),(0,Z.jsx)("div",{className:"im-lod-title",title:n.title??"\u63D0\u793A\u8BCD\u751F\u6210",children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("div",{className:`im-lod-status ${f.tone}`,title:f.detail,children:n.status==="running"?(0,Z.jsx)(Id,{from:n.startedAtMs}):f.text})]})}return(0,Z.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,Z.jsx)(Pr,{}),(0,Z.jsxs)(za,{children:[(0,Z.jsx)("span",{className:"im-rail-dot",title:bw[n.status]??"\u5C31\u7EEA",children:(0,Z.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,Z.jsx)(zt,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,Z.jsx)(ze,{name:"trash"})})]}),(0,Z.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,Z.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n.prompt,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onChange:f=>r.updatePrompt(t,{prompt:f.target.value})}),(0,Z.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:d?"7fr 3fr":"1fr",marginTop:8},children:[(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,Z.jsx)(Pt,{className:"im-select-fill",options:xd(c,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:f=>r.updatePrompt(t,{size:f})})]}),d?(0,Z.jsxs)("div",{style:{minWidth:0},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,Z.jsx)(Pt,{className:"im-select-fill",options:u.map(f=>({value:f,label:f})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:f=>r.updatePrompt(t,{quality:f})})]}):null]}),(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,Z.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,Z.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:a?.defaultOutputDir??"",onChange:f=>r.updatePrompt(t,{outputDir:f.target.value})})]}),n.status==="running"?(0,Z.jsx)(bd,{}):null,n.status==="failed"&&n.message?(0,Z.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,Z.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,Z.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!n.prompt.trim(),onClick:f=>{f.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,Z.jsx)(Id,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,Z.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:f=>{f.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var Dd=`
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
`;var Ad={image:Pd,prompt:Rd,group:zd};function Td(e,t){return!e&&t<.1?!0:e&&t>.2?!1:e}var pn=require("react/jsx-runtime"),xw="0 0 1024 1024",ww="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function Ra({size:e=30,fill:t="var(--im-brand)"}){return(0,pn.jsx)("svg",{width:e,height:e,viewBox:xw,fill:t,"aria-hidden":"true",children:(0,pn.jsx)("path",{d:ww})})}function Od({onClick:e}){return(0,pn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,pn.jsx)(Ra,{}),(0,pn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var $d=require("react"),mn=require("react/jsx-runtime");function vw(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function Ld(e){return(0,$d.useMemo)(()=>vw(e),[e])}function Hd({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,mn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,mn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,mn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,mn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,mn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var Me=require("react/jsx-runtime");function Bd(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(l,u,c)=>(0,Me.jsx)("button",{type:"button",className:`${c.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:c.title,disabled:c.disabled,onClick:u,children:l});return(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsxs)("div",{className:"im-header",children:[(0,Me.jsx)(Od,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,Me.jsx)(Pt,{className:"im-select-profile",options:[...(t.profiles??[]).map(l=>({value:l.name,label:l.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:l=>e.onSwitchProfile(l)}):null,t&&(t.models?.length??0)>1?(0,Me.jsx)(Pt,{className:"im-select-model",options:t.models.map(l=>({value:l.id,label:l.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:l=>e.onSwitchModel(l)}):null,(0,Me.jsx)(Hd,{summary:e.cost,budget:t?.budget??0}),(0,Me.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,Me.jsxs)("div",{className:"im-toolbar",children:[(0,Me.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,Me.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:l=>e.onDragCreateNode(l,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,Me.jsx)("span",{className:"im-drag-grip",children:(0,Me.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,Me.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:l=>e.onDragCreateNode(l,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,Me.jsx)("span",{className:"im-drag-grip",children:(0,Me.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,Me.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,Me.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var He=require("react/jsx-runtime");function Wt({icon:e,label:t,title:n,active:o,onClick:r}){return(0,He.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,He.jsx)(ze,{name:e,size:14}),(0,He.jsx)("span",{className:"im-dock-row-label",children:t})]})}function Wd(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,He.jsxs)("div",{className:"im-dock nodrag",children:[(0,He.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,He.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[Math.round(t*100),"%"]})}),(0,He.jsx)(Wt,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,He.jsx)(Wt,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,He.jsx)(Wt,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,He.jsx)(Wt,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,He.jsx)(Wt,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,He.jsx)(Wt,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,He.jsx)(Wt,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,He.jsx)(Wt,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Be=require("react"),Xd=require("react-dom");var Da="application/x-dsh-imagora-canvas",zr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},Fd="\u677E\u5F00\u53D6\u6D88";function Aa(e){return e.dataTransfer?.types.includes("Files")??!1}function go(e,t){if(Aa(e))return"images";let n=e.dataTransfer?.getData(Da);return n==="prompt"||n==="group"?n:t}function Vd(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Gd(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":zr[e]}function Ta(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var Rt=require("react/jsx-runtime"),kw=22,Sw=28,Rr=8;function Yd(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,l]=(0,Be.useState)(null),u=(0,Be.useRef)(null),c=(0,Be.useRef)(0),d=(0,Be.useRef)(null),f=(0,Be.useRef)(null),m=(0,Be.useRef)(null),p=(0,Be.useCallback)((S,C)=>{u.current=S,l(S);let v=m.current;v&&v.textContent!==C&&(v.textContent=C)},[]),y=(0,Be.useCallback)(()=>{u.current=null,c.current=0,l(null),f.current?.classList.remove("is-outside")},[]),b=(0,Be.useCallback)((S,C)=>{let v=d.current;if(!v)return;let E=Math.min(S+kw,window.innerWidth-v.offsetWidth-Rr),z=Math.min(C+Sw,window.innerHeight-v.offsetHeight-Rr);v.style.transform=`translate(${Math.max(Rr,E)}px, ${Math.max(Rr,z)}px)`},[]),h=(0,Be.useCallback)((S,C,v)=>{let E=t.current;if(!E)return o();let z=E.getBoundingClientRect(),B=v?Math.min(Math.max(S,z.left),z.left+z.width):S,P=v?Math.min(Math.max(C,z.top),z.top+z.height):C;return r({x:B,y:P})},[t,o,r]);(0,Be.useEffect)(()=>{let S=E=>{Aa(E)&&E.preventDefault()},C=E=>{let z=u.current;if(!z||z==="images")return;b(E.clientX,E.clientY);let B=t.current,P=!!(B&&Ta(E.clientX,E.clientY,B.getBoundingClientRect())),O=P?zr[z]:Fd,I=m.current;I&&I.textContent!==O&&(I.textContent=O),f.current?.classList.toggle("is-outside",!P)},v=()=>{c.current=0,y()};return window.addEventListener("dragover",S),window.addEventListener("dragover",C),window.addEventListener("drop",S),window.addEventListener("dragend",v),window.addEventListener("blur",v),()=>{window.removeEventListener("dragover",S),window.removeEventListener("dragover",C),window.removeEventListener("drop",S),window.removeEventListener("dragend",v),window.removeEventListener("blur",v)}},[t,y,b]);let k={onDragEnter:S=>{if(n)return;let C=go(S,u.current);C&&(S.preventDefault(),C==="images"&&(c.current+=1),p(C,Gd(C,Vd(S.dataTransfer))),b(S.clientX,S.clientY))},onDragOver:S=>{n||!go(S,u.current)||(S.preventDefault(),S.dataTransfer.dropEffect="copy",b(S.clientX,S.clientY))},onDragLeave:S=>{n||go(S,u.current)==="images"&&(c.current-=1,c.current<=0&&y())},onDrop:S=>{if(n)return;let C=go(S,u.current);if(!C)return;S.preventDefault();let v=t.current,E=!v||Ta(S.clientX,S.clientY,v.getBoundingClientRect());if(y(),C==="images"){let z=Array.from(S.dataTransfer.files??[]);if(!z.length)return;i(z,h(S.clientX,S.clientY,!0));return}E&&a(C,h(S.clientX,S.clientY,!1))}},g=(0,Be.useCallback)((S,C)=>{S.dataTransfer.setData(Da,C),S.dataTransfer.effectAllowed="copy",p(C,zr[C]),b(S.clientX,S.clientY)},[b,p]),w=(0,Xd.createPortal)((0,Rt.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,Rt.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,Rt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,Rt.jsx)(ze,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,Rt.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,Rt.jsx)(ze,{name:"close",size:14})}),(0,Rt.jsx)("span",{ref:m,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:w,dragHandlers:k,startToolbarDrag:g,hideDropChip:y}}var qd="dsh-imagora.canvas-minimap.v1";function Ud(){try{let e=localStorage.getItem(qd);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Zd(e){try{localStorage.setItem(qd,e?"1":"0")}catch{}}var Ft=require("react/jsx-runtime");function Kd(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,Ft.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,Ft.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,Ft.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u5C40\u90E8\u6574\u7406\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u540C\u5C42\u63D0\u793A\u8BCD\u5361\u7247\u6309\u5DE6\u4E0A\u89D2\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,Ft.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,Ft.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,Ft.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var qe=require("react/jsx-runtime");function jd(){return(0,qe.jsxs)("div",{className:"im-empty",children:[(0,qe.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,qe.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,qe.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var Cw=5;function Qd({logs:e}){if(!e.length)return null;let t=e.slice(-Cw);return(0,qe.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,qe.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var Nw={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Jd({text:e}){return e?(0,qe.jsx)("div",{style:Nw,children:e}):null}function ef({tone:e,children:t,action:n}){return(0,qe.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,qe.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,qe.jsx)(ze,{name:e==="error"?"help":"clock"})}),(0,qe.jsx)("span",{className:"im-banner-text",children:t}),n?(0,qe.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var ve=require("react"),lf=require("react-dom");async function Ew(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function tf(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await Ew(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function nf(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var ho=e=>Math.min(8,Math.max(.2,e));function of(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function rf(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function af(e,t,n){return Math.round(e*rf(t,n)*100)}function sf(e,t){let n=rf(e,t);return n?ho(1/n):1}var he=require("react/jsx-runtime"),Dr=1.2,_w=5;function Ar({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,ve.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,ve.useState)(!1),[l,u]=(0,ve.useState)(null),c=(0,ve.useRef)(null),d=(0,ve.useRef)(!1),f=l?.kind==="copying",m=(0,ve.useRef)(null),[p,y]=(0,ve.useState)(null),b=(0,ve.useRef)({width:0,height:0}),h=(0,ve.useRef)(null),k=(0,ve.useRef)(null),g=(0,ve.useRef)(null),w=(0,ve.useRef)(null),S=(0,ve.useCallback)(N=>{let R=g.current;return R?{zoom:N.zoom,pan:of(N.pan,N.zoom,b.current,{width:R.clientWidth,height:R.clientHeight})}:N},[]),C=(0,ve.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),v=(0,ve.useCallback)(()=>{let N=w.current;if(!N)return;b.current={width:N.clientWidth,height:N.clientHeight};let R={width:N.naturalWidth,height:N.naturalHeight};m.current=R,y(D=>D&&D.width===R.width&&D.height===R.height?D:R)},[]);(0,ve.useEffect)(()=>{let N=()=>v();return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[v]);let E=(0,ve.useCallback)(()=>{let N=sf(m.current,b.current);i(R=>S({zoom:N,pan:R.pan}))},[S]),z=(0,ve.useCallback)(()=>{let N=m.current,R=k.current;if(!N||!R)return;let D=R.clientWidth*.98,H=R.clientHeight*.98,F=ho(Math.min(1,D/N.width,H/N.height));i({zoom:F,pan:{x:0,y:0}})},[]);(0,ve.useEffect)(()=>{let N=g.current;if(!N)return;let R=D=>{D.preventDefault(),D.stopPropagation();let H=N.getBoundingClientRect(),F=D.clientX-H.left-H.width/2,G=D.clientY-H.top-H.height/2;i(Y=>{let q=ho(D.deltaY<0?Y.zoom*Dr:Y.zoom/Dr);if(q===Y.zoom)return Y;let J=q/Y.zoom;return S({zoom:q,pan:{x:F-(F-Y.pan.x)*J,y:G-(G-Y.pan.y)*J}})})};return N.addEventListener("wheel",R,{passive:!1}),()=>N.removeEventListener("wheel",R)},[S]),(0,ve.useEffect)(()=>{let N=R=>{R.key==="Escape"&&o()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[o]),(0,ve.useEffect)(()=>()=>{c.current&&window.clearTimeout(c.current)},[]);let B=(N,R)=>{u({kind:N,text:R}),c.current&&window.clearTimeout(c.current),c.current=N==="copying"?null:window.setTimeout(()=>u(null),1200)},P=async(N,R)=>{if(!d.current){d.current=!0,B("copying","\u590D\u5236\u4E2D\u2026");try{await N(),B("copied",R)}catch(D){B("failed",D instanceof Error?D.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},O=N=>{r.zoom<=1||(N.preventDefault(),N.stopPropagation(),N.currentTarget instanceof Element&&N.currentTarget.setPointerCapture(N.pointerId),h.current={startX:N.clientX,startY:N.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:N.target===w.current},s(!0))},I=N=>{let R=h.current;if(!R)return;let D=N.clientX-R.startX,H=N.clientY-R.startY;!R.moved&&Math.hypot(D,H)<=_w||(R.moved=!0,i(F=>S({...F,pan:{x:R.panX+D,y:R.panY+H}})))},x=()=>{let N=h.current;h.current=null,s(!1),N&&!N.moved&&!N.onImage&&o()},_=N=>{let R=N.target instanceof Element?N.target:null;R&&(R.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},M=N=>i(R=>S({...R,zoom:ho(R.zoom*N)}));return(0,lf.createPortal)((0,he.jsxs)("div",{ref:k,className:"im-zoom-overlay",onPointerDown:_,onClick:N=>N.stopPropagation(),children:[(0,he.jsx)("div",{ref:g,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:O,onPointerMove:I,onPointerUp:x,onPointerCancel:x,onDoubleClick:N=>{N.stopPropagation(),C()},children:(0,he.jsx)("img",{ref:w,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let N=w.current;N&&(m.current={width:N.naturalWidth,height:N.naturalHeight},b.current={width:N.clientWidth,height:N.clientHeight},v())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,he.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,he.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,he.jsx)("div",{"aria-hidden":!0}),(0,he.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,he.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,he.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>M(1/Dr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9"})})}),(0,he.jsxs)("span",{className:"im-zoom-readout",title:`${p?`${p.width}\xD7${p.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[af(r.zoom,p,b.current),"%"]}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>M(Dr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:z,children:"\u9002\u5E94\u7A97\u53E3"}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:E,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void P(()=>tf(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void P(()=>nf(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,he.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),l?(0,he.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${l.kind==="failed"?" is-failed":l.kind==="copied"?" is-copied":""}`,children:l.text}):null]})})]}),document.body)}var Oa=require("react");var Vt=require("react"),df=require("react-dom");var xt=require("react/jsx-runtime"),cf=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),bo=[];function uf(e){return bo[bo.length-1]===e}function Te({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:l=!1,headerless:u=!1}){let c=`im-modal-${(0,Vt.useId)()}`,d=`${c}-title`,f=(0,Vt.useRef)(null),m=(0,Vt.useRef)(null),p=(0,Vt.useRef)(o);return p.current=o,(0,Vt.useEffect)(()=>{m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,bo.push(c);let b=f.current;(a?.current??b?.querySelector(cf)??b)?.focus();let k=g=>{if(!uf(c))return;if(g.key==="Escape"){if(Cd())return;g.preventDefault(),g.stopPropagation(),p.current();return}if(g.key!=="Tab"||!b)return;let w=Array.from(b.querySelectorAll(cf)).filter(v=>!v.hidden&&v.getAttribute("aria-hidden")!=="true");if(!w.length){g.preventDefault(),b.focus();return}let S=w[0],C=w[w.length-1];!S||!C||(g.shiftKey&&(document.activeElement===S||!b.contains(document.activeElement))?(g.preventDefault(),C.focus()):!g.shiftKey&&document.activeElement===C&&(g.preventDefault(),S.focus()))};return document.addEventListener("keydown",k,!0),()=>{document.removeEventListener("keydown",k,!0);let g=bo.lastIndexOf(c);g>=0&&bo.splice(g,1);let w=m.current;window.setTimeout(()=>w?.focus(),0)}},[a]),(0,df.createPortal)((0,xt.jsx)("div",{className:`im-modal-shell${l?" im-modal-shell--nested":""}`,onMouseDown:b=>{s&&b.target===b.currentTarget&&uf(c)&&o()},children:(0,xt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:b=>b.stopPropagation(),children:[u?(0,xt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,xt.jsxs)("header",{className:"im-modal-header",children:[(0,xt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,xt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,xt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,xt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var ue=require("react/jsx-runtime");function ff({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,Oa.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,Oa.useState)(null),l=r.trim(),u=e.some(d=>d.name===l),c=()=>{if(l){if(u&&a!==l){s(l);return}n(l)}};return a?(0,ue.jsx)(Te,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,ue.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,ue.jsxs)(Te,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,ue.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!l,onClick:c,children:"\u4FDD\u5B58"})]}),children:[(0,ue.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&c()}}),(0,ue.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,ue.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,ue.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,ue.jsx)("span",{className:"im-pick-name",children:d.name}),(0,ue.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function pf({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,ue.jsx)(Te,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,ue.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,ue.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,ue.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,ue.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,ue.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var Mw=[["\u753B\u5E03","Shift+\u62D6\u62FD\u6846\u9009 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8"],["\u8282\u70B9","\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C/\u6574\u7406/\u8FDE\u7EBF/\u8BBE\u8DEF\u5F84/\u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88"],["\u8FDE\u7EBF","\u56FE\u7247\u2192\u63D0\u793A\u8BCD/\u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u4EC5\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete/Backspace \u5220\u9664\u8FDE\u7EBF"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function mf({onClose:e,config:t}){return(0,ue.jsx)(Te,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u62D6\u5165\u56FE\u7247 \xB7 Shift+\u62D6\u62FD\u6846\u9009",size:"md",onClose:e,footer:(0,ue.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,ue.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ue.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:Mw.map(([n,o])=>(0,ue.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,ue.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,ue.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,ue.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,ue.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var et=require("react");function Ue(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function hf(e,t=.06){let n=Ue(e.width,t,1),o=Ue(e.height,t,1);return{width:n,height:o,x:Ue(e.x,0,1-n),y:Ue(e.y,0,1-o)}}function bf(e,t,n){return{...e,x:Ue(e.x+t,0,1-e.width),y:Ue(e.y+n,0,1-e.height)}}function yf(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let c=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=c,a.height*=c,a.width<.06||a.height<.06){let m=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=m,a.height*=m}a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=Ue(a.width,.06,1),a.height=Ue(a.height,.06,1);return a.x=Ue(a.x,0,1-a.width),a.y=Ue(a.y,0,1-a.height),a}function xf(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:Ue(e.x+(e.width-r)/2,0,1-r),y:Ue(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function $a(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Iw(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function wf(e,t){let n=Iw(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function La(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Gt(e){let t=await La(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function vf(e,t){let n=await La(e);if(t)return gf(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return gf(n,r,i,o,o)}async function kf(e,t){let n=await La(e),{width:o,height:r}=$a(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?Pw(n,o,r):Sf(n,n.width,n.height,o,r,t.algorithm)}function gf(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function Pw(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=Cf(o,r,i,a,s,"high"),r=a,i=s}return Sf(o,r,i,t,n,"high")}function Sf(e,t,n,o,r,i){return Cf(e,t,n,o,r,i).toDataURL("image/png")}function Cf(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Re=require("react/jsx-runtime"),Nf=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],Rw=["nw","n","ne","e","se","s","sw","w"],Ha={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function Ef({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,et.useRef)(null),[i,a]=(0,et.useState)(null),[s,l]=(0,et.useState)({x:.08,y:.08,width:.84,height:.84}),[u,c]=(0,et.useState)(null),[d,f]=(0,et.useState)(!1),[m,p]=(0,et.useState)(null),y=(0,et.useRef)(null);(0,et.useEffect)(()=>{let v=!0;return Gt(e).then(E=>{v&&(a(E),l(hf({x:.06,y:.06,width:.88,height:.88})))}).catch(E=>{v&&p(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(E)}`)}),()=>{v=!1}},[e]);let b=v=>{c(v),i&&v!==null&&l(E=>xf(E,v,i))},h=(v,E)=>{v.stopPropagation(),v.target.setPointerCapture?.(v.pointerId),y.current={mode:E,startX:v.clientX,startY:v.clientY,base:s}},k=(0,et.useCallback)(v=>{let E=y.current,z=r.current;if(!E||!z)return;let B=z.getBoundingClientRect();if(!B.width||!B.height)return;let P=(v.clientX-E.startX)/B.width,O=(v.clientY-E.startY)/B.height;l(E.mode==="move"?bf(E.base,P,O):yf(E.base,P,O,E.mode,u,i??{width:1,height:1}))},[u,i]),g=()=>{y.current=null},w=async()=>{f(!0),p(null);try{let v=await vf(e,s),E=Math.round(s.width*(i?.width??0)),z=Math.round(s.height*(i?.height??0));await o(v,`\u88C1\u526A ${E}\xD7${z}${u?` \xB7 ${Nf.find(B=>B.ratio===u)?.label}`:""}`)}catch(v){p(`\u88C1\u526A\u5931\u8D25\uFF1A${ce(v)}`)}finally{f(!1)}},S=i?Math.round(s.width*i.width):0,C=i?Math.round(s.height*i.height):0;return(0,Re.jsx)(Te,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",S," \xD7 ",C,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${wf(i.width,i.height)}`:"",(0,Re.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||S<8||C<8,onClick:()=>void w(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":"\u88C1\u526A\u6BD4\u4F8B",children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),Nf.map(v=>{let E=v.ratio===u;return(0,Re.jsx)("button",{type:"button","aria-pressed":E,className:`im-chip im-chip--sm im-chip--action${E?" is-brand":""}`,onClick:()=>b(v.ratio),children:v.label},v.label)}),(0,Re.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[S," \xD7 ",C,"px"]})]}),(0,Re.jsxs)("div",{ref:r,onPointerMove:k,onPointerUp:g,onPointerCancel:g,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Re.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Re.jsx)("div",{onPointerDown:v=>h(v,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:Rw.map(v=>(0,Re.jsx)("span",{onPointerDown:E=>h(E,v),style:{position:"absolute",left:Ha[v].left,top:Ha[v].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:Ha[v].cursor}},v))})]}),m?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:m}):null]})})}var We=require("react");function Ba(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function Wa(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function Fa(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:Wa(e)*n/2}function _f(e,t,n=.004){if(!Ba(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function Mf(e,t,n,o){if(!Ba(e)||!Ba(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let l=Math.ceil(s/r);if(l<=1)return[];let u=Math.min(l,2048),c=[];for(let d=1;d<u;d+=1){let f=d/u;c.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return c}function Dw(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function If(e){return!Dw(e)}var De=require("react/jsx-runtime"),Tr=640;function Pf({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,We.useRef)(null),i=(0,We.useRef)(null),a=(0,We.useRef)(!1),[s,l]=(0,We.useState)(null),[u,c]=(0,We.useState)([]),[d,f]=(0,We.useState)("paint"),[m,p]=(0,We.useState)(.08),[y,b]=(0,We.useState)(!1),[h,k]=(0,We.useState)(null);(0,We.useEffect)(()=>{let P=!0;Gt(e).then(I=>{P&&l(I)}).catch(I=>{P&&k(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(I)}`)});let O=new Image;return O.crossOrigin="anonymous",O.onload=()=>{i.current=O},O.src=e,()=>{P=!1,i.current=null}},[e]);let g=(0,We.useMemo)(()=>s?s.width>=s.height?{width:Tr,height:Math.round(s.height/s.width*Tr)}:{width:Math.round(s.width/s.height*Tr),height:Tr}:{width:0,height:0},[s]);(0,We.useEffect)(()=>{let P=r.current,O=i.current;if(!P||!O||!g.width)return;let I=P.getContext("2d");if(!I||(P.width=g.width,P.height=g.height,I.clearRect(0,0,g.width,g.height),I.drawImage(O,0,0,g.width,g.height),!s))return;let x=Fa(m,{width:g.width,height:g.height});I.save(),I.globalAlpha=.55,I.fillStyle="#ffffff",I.strokeStyle="#ffffff",I.lineWidth=x*2,I.lineCap="round",I.lineJoin="round";for(let _ of u){_.mode==="erase"?(I.globalCompositeOperation="destination-out",I.strokeStyle="#000",I.fillStyle="#000"):(I.globalCompositeOperation="source-over",I.strokeStyle="#ffffff",I.fillStyle="#ffffff");let M=_.points;if(M.length&&(I.beginPath(),I.arc(M[0].x*g.width,M[0].y*g.height,x,0,Math.PI*2),I.fill(),M.length>1)){I.beginPath(),I.moveTo(M[0].x*g.width,M[0].y*g.height);for(let N of M.slice(1))I.lineTo(N.x*g.width,N.y*g.height);I.stroke()}}I.restore()},[g,u,m,s]);let w=P=>{let O=r.current;if(!O)return null;let I=O.getBoundingClientRect();return!I.width||!I.height?null:{x:Math.min(1,Math.max(0,(P.clientX-I.left)/I.width)),y:Math.min(1,Math.max(0,(P.clientY-I.top)/I.height))}},S=P=>{let O=w(P);O&&(P.currentTarget.setPointerCapture?.(P.pointerId),a.current=!0,c(I=>[...I,{mode:d,size:m,points:[O]}]))},C=P=>{if(!a.current)return;let O=w(P);O&&c(I=>{let x=I[I.length-1];if(!x)return I;let _=_f(x.points,O);return _===x.points?I:[...I.slice(0,-1),{...x,points:_}]})},v=()=>{a.current=!1},E=async()=>{if(!i.current||!s)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let O=document.createElement("canvas");O.width=s.width,O.height=s.height;let I=O.getContext("2d");if(!I)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");I.fillStyle="#ffffff",I.fillRect(0,0,s.width,s.height);let x=Fa(m,{width:s.width,height:s.height});I.globalCompositeOperation="destination-out",I.lineWidth=x*2,I.lineCap="round",I.lineJoin="round",I.strokeStyle="#000",I.fillStyle="#000";for(let _ of u){if(_.mode!=="paint")continue;let M=Mf(_.points[0],_.points[_.points.length-1],x/4,{width:s.width,height:s.height});if(M.length&&(I.beginPath(),I.arc(M[0].x*s.width,M[0].y*s.height,x,0,Math.PI*2),I.fill(),M.length>1)){I.beginPath(),I.moveTo(M[0].x*s.width,M[0].y*s.height);for(let N of M.slice(1))I.lineTo(N.x*s.width,N.y*s.height);I.stroke()}}return O.toDataURL("image/png")},z=async()=>{b(!0),k(null);try{let P=await E();await o(P,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(P){k(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${ce(P)}`)}finally{b(!1)}},B=If(u);return(0,De.jsx)(Te,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:y||B,onClick:()=>void z(),children:y?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",label:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"},{mode:"erase",label:"\u64E6"}].map(P=>(0,De.jsx)("button",{type:"button","aria-pressed":d===P.mode,className:`im-chip im-chip--sm im-chip--action${d===P.mode?" is-brand":""}`,onClick:()=>f(P.mode),children:P.label},P.mode)),(0,De.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,De.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(m*100),onChange:P=>p(Wa(Number(P.target.value)/100)),className:"im-range"}),(0,De.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(m*100),"%"]})]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!u.length,onClick:()=>c([]),children:"\u6E05\u7A7A"}),(0,De.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:u.length?`${u.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,De.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,De.jsx)("canvas",{ref:r,onPointerDown:S,onPointerMove:C,onPointerUp:v,onPointerCancel:v,style:{width:g.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,De.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",s?` \xB7 \u539F\u56FE ${s.width} \xD7 ${s.height}`:""]}),h?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:h}):null]})})}var ge=require("react");var Xt=require("react"),zf=require("react-dom"),gn=require("react/jsx-runtime");function Rf({text:e}){let t=(0,Xt.useRef)(null),n=(0,Xt.useRef)(null),[o,r]=(0,Xt.useState)(null),[i,a]=(0,Xt.useState)(0),s=c=>{let d=t.current;d&&d.scrollHeight>d.clientHeight&&r(c.clientY)},l=c=>{r(d=>d!==null?c.clientY:d)},u=()=>{r(null),a(0)};return(0,Xt.useLayoutEffect)(()=>{if(o!==null&&n.current){let c=n.current.getBoundingClientRect();a(Math.max(8,Math.min(o+16,window.innerHeight-c.height-8)))}},[o,e]),(0,gn.jsxs)(gn.Fragment,{children:[(0,gn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:l,onMouseLeave:u,children:e}),o!==null?(0,zf.createPortal)((0,gn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var j=require("react/jsx-runtime"),Df=60;function Af(e){return Number.isFinite(e)?`${e.toFixed(2)} \u5143`:"-"}function $w(e){let t=e.total?`${e.successRate.toFixed(1)}%`:"-";return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:Af(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:Af(e.cost)},{label:"\u6210\u529F\u7387",value:`${t}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:e.avgSeconds>0?`${e.avgSeconds.toFixed(1)}s`:"-"}]}function Lw(e){return e.replace(/[\\/][^\\/]+$/,"")}function Tf({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,l]=(0,ge.useState)(""),[u,c]=(0,ge.useState)(!1),[d,f]=(0,ge.useState)(0),[m,p]=(0,ge.useState)(!0),[y,b]=(0,ge.useState)(!1),[h,k]=(0,ge.useState)(""),[g,w]=(0,ge.useState)("ledger"),[S,C]=(0,ge.useState)(""),[v,E]=(0,ge.useState)(null),[z,B]=(0,ge.useState)(new Map),[P,O]=(0,ge.useState)(null),[I,x]=(0,ge.useState)({dailyLimit:0,singleRunLimit:0}),[_,M]=(0,ge.useState)(!1),[N,R]=(0,ge.useState)(""),D=(0,ge.useRef)(null),H=(0,ge.useRef)(0),F=(0,ge.useRef)([]),G=(0,ge.useRef)(i),Y=(0,ge.useRef)(s);G.current=i,Y.current=s;let q=(0,ge.useCallback)(async V=>{let ee=++H.current;p(!0),k("");try{let re=await pa({limit:Df,offset:0,query:V?.query??G.current,status:V?.status??Y.current});if(ee!==H.current)return;let de=Array.isArray(re.items)?re.items:[];w(re.source==="ledger"?"ledger":"none"),C(typeof re.ledgerPath=="string"?re.ledgerPath:""),r(de),F.current=de,c(re.hasMore===!0),f(Number(re.total)||de.length)}catch(re){ee===H.current&&k(ce(re))}finally{ee===H.current&&p(!1)}},[]),J=(0,ge.useCallback)(async()=>{if(y||!u)return;let V=H.current;b(!0);try{let ee=await pa({limit:Df,offset:F.current.length,query:G.current,status:Y.current});if(V!==H.current)return;let re=Array.isArray(ee.items)?ee.items:[];r(de=>[...de,...re]),F.current=[...F.current,...re],c(ee.hasMore===!0),f(Number(ee.total)||F.current.length)}catch(ee){V===H.current&&k(ce(ee))}finally{V===H.current&&b(!1)}},[u,y]);(0,ge.useEffect)(()=>{q(),kr().then(E).catch(()=>E(null)),_u().then(V=>B(new Map((V?.images??[]).map(ee=>[ee.id,ee])))).catch(()=>B(new Map))},[q]),(0,ge.useEffect)(()=>{v?.localBudget&&x({dailyLimit:v.localBudget.dailyLimit,singleRunLimit:v.localBudget.singleRunLimit})},[v]);let le=async()=>{M(!0),R("");try{await Hu(I);let V=await kr();E(V),R("\u9884\u7B97\u5DF2\u4FDD\u5B58")}catch(V){R(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(V)}`)}finally{M(!1)}},W=600,A=(0,ge.useCallback)(()=>{let V=D.current;V&&V.scrollHeight-V.scrollTop-V.clientHeight<W&&J()},[J]),U=(0,ge.useMemo)(()=>o.filter(V=>V.status==="error"&&V.inputRefMissing).length,[o]),ne=v?$w(v):[],oe=v?.bySize.slice(0,3)??[],Q=S||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Te,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,j.jsxs)("div",{className:"im-history",children:[(0,j.jsxs)("div",{className:"im-history-bar",children:[(0,j.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,j.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:V=>a(V.target.value),onKeyDown:V=>{V.key==="Enter"&&q()}}),(0,j.jsxs)("select",{className:"im-field im-history-status",value:s,"aria-label":"\u6309\u72B6\u6001\u7B5B\u9009",onChange:V=>{l(V.target.value),q({status:V.target.value})},children:[(0,j.jsx)("option",{value:"",children:"\u5168\u90E8\u72B6\u6001"}),(0,j.jsx)("option",{value:"ok",children:"\u6210\u529F"}),(0,j.jsx)("option",{value:"error",children:"\u5931\u8D25"})]}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void q(),children:"\u641C\u7D22"}),(0,j.jsxs)("div",{className:"im-history-bar-end",children:[U>0?(0,j.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[U," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),ne.length?(0,j.jsxs)("div",{className:"im-history-stats",children:[(0,j.jsxs)("div",{className:"im-history-stat-grid",children:[ne.map(V=>(0,j.jsxs)("div",{className:"im-history-stat",children:[(0,j.jsx)("div",{className:"im-history-stat-label",children:V.label}),(0,j.jsx)("div",{className:"im-history-stat-value",children:V.value})]},V.label)),oe.length?(0,j.jsxs)("div",{className:"im-history-stat",children:[(0,j.jsx)("div",{className:"im-history-stat-label",children:"\u6309\u5C3A\u5BF8"}),(0,j.jsx)("div",{className:"im-history-stat-value",children:oe.map(V=>`${V.size} \xD7${V.count}`).join(" \xB7 ")})]}):null]}),(0,j.jsxs)("div",{className:"im-history-budget",children:[(0,j.jsxs)("label",{className:"im-history-budget-field",children:[(0,j.jsx)("span",{className:"im-history-budget-label",children:"\u65E5\u9884\u7B97"}),(0,j.jsx)("input",{type:"number",min:0,step:.01,className:"im-field im-history-budget-input",value:I.dailyLimit,title:"\u5F53\u65E5\u7D2F\u8BA1\u8D39\u7528\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4",onChange:V=>x(ee=>({...ee,dailyLimit:Number(V.target.value)||0}))})]}),(0,j.jsxs)("label",{className:"im-history-budget-field",children:[(0,j.jsx)("span",{className:"im-history-budget-label",children:"\u5355\u6B21\u4E0A\u9650"}),(0,j.jsx)("input",{type:"number",min:0,step:.01,className:"im-field im-history-budget-input",value:I.singleRunLimit,title:"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650",onChange:V=>x(ee=>({...ee,singleRunLimit:Number(V.target.value)||0}))})]}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:_||m,onClick:()=>void le(),children:_?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u9884\u7B97"}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:m,onClick:()=>void kr().then(E).catch(()=>{}),children:"\u5237\u65B0"}),N?(0,j.jsx)("span",{className:"im-history-budget-tip",children:N}):null]})]}):null,(0,j.jsxs)("div",{ref:D,className:"im-history-list",onScroll:A,"data-testid":"history-list",children:[h?(0,j.jsx)("div",{className:"im-history-error",children:h}):null,m?(0,j.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("ul",{className:"im-history-rows",children:o.map((V,ee)=>{let re=V.assetId?z.get(V.assetId):void 0,de=!!re;return(0,j.jsxs)("li",{className:"im-history-row",children:[(0,j.jsx)("div",{className:"im-history-thumb",children:V.url?(0,j.jsx)("img",{src:V.url,alt:V.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>O({url:V.url,path:V.path})}):(0,j.jsx)("span",{className:"im-history-thumb-empty",children:V.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,j.jsxs)("div",{className:"im-history-main",children:[(0,j.jsx)(Rf,{text:V.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,j.jsxs)("p",{className:"im-history-meta",children:[V.time||"-"," \xB7 ",V.quality||"-"," \xB7 ",V.size||"-"]}),V.inputRefs.length?(0,j.jsx)("div",{className:"im-history-refs",children:V.inputRefs.map(Se=>(0,j.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,j.jsx)("img",{src:Se.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>O({url:Se.url,path:Se.path})})},Se.id))}):null,V.inputRefMissing?(0,j.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,j.jsxs)("div",{className:"im-history-actions",children:[(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!V.prompt,onClick:()=>void navigator.clipboard.writeText(V.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,j.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!V.path,onClick:()=>void Bn(Lw(V.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,j.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!de,title:de?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{re&&t([re])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${V.time}-${V.output}-${ee}`)})}),(0,j.jsx)("div",{className:"im-history-pager",children:y?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":u?(0,j.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void J(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):g==="none"?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,j.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,j.jsx)("code",{children:Q}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,j.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),P?(0,j.jsx)(Ar,{imageUrl:P.url,...P.path?{copyPath:P.path}:{},onClose:()=>O(null)}):null]})}var wt=require("react");var Ee=require("react/jsx-runtime");async function Hw(e,t,n,o){let r=await new Promise((l,u)=>{let c=new Image;c.onload=()=>l(c),c.onerror=()=>u(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),c.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let l=0;l<n;l+=1)for(let u=0;u<t;u+=1){let c=document.createElement("canvas");c.width=i,c.height=a;let d=c.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,u*i,l*a,i,a,0,0,i,a),s.push(c.toDataURL("image/png"))}return s}var Bw="52vh";function Of({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,wt.useState)(null),[i,a]=(0,wt.useState)(2),[s,l]=(0,wt.useState)(2),[u,c]=(0,wt.useState)(!1),[d,f]=(0,wt.useState)(null);(0,wt.useEffect)(()=>{let b=!0;return Gt(e).then(h=>{b&&r(h)}).catch(h=>{b&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(h)}`)}),()=>{b=!1}},[e]);let m=(0,wt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),p=async()=>{if(o){c(!0),f(null);try{let b=await Hw(e,i,s,o);await n(b.map((h,k)=>({dataUrl:h,note:`\u5207\u5206 ${k+1}/${b.length}`})))}catch(b){f(`\u5207\u5206\u5931\u8D25\uFF1A${ce(b)}`)}finally{c(!1)}}},y=i*s;return(0,Ee.jsx)(Te,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||y<2,onClick:()=>void p(),children:u?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${y} \u5F20`})]}),children:(0,Ee.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ee.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,Ee.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,Ee.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:b=>a(Number(b.target.value)),className:"im-range"}),(0,Ee.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,Ee.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,Ee.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:b=>l(Number(b.target.value)),className:"im-range"}),(0,Ee.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,Ee.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[y," \u5F20 \xB7 \u6BCF\u5F20 ",m.w," \xD7 ",m.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,Ee.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,Ee.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${Bw} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(b,h)=>(0,Ee.jsx)("span",{style:{position:"absolute",left:`${(h+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${h}`)),Array.from({length:s-1},(b,h)=>(0,Ee.jsx)("span",{style:{position:"absolute",top:`${(h+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${h}`))]})}),(0,Ee.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,Ee.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var vt=require("react");var Ie=require("react/jsx-runtime"),$f=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],Lf=[1024,1536,2048,3072,4096];function Bf({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,vt.useState)(null),[i,a]=(0,vt.useState)(2048),[s,l]=(0,vt.useState)("high"),[u,c]=(0,vt.useState)(!1),[d,f]=(0,vt.useState)(null);(0,vt.useEffect)(()=>{let h=!0;return Gt(e).then(k=>{if(!h)return;r(k);let g=Math.max(k.width,k.height),w=Lf.find(S=>S>g)??4096;a(w)}).catch(k=>{h&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ce(k)}`)}),()=>{h=!1}},[e]);let m=(0,vt.useMemo)(()=>o?$a(o.width,o.height,i):{width:0,height:0},[o,i]),p=o&&o.width>0?m.width/o.width:0,y=!!o&&m.width<o.width,b=async()=>{c(!0),f(null);try{let h=await kf(e,{targetLongEdge:i,algorithm:s});await n(h,`\u653E\u5927 ${m.width}\xD7${m.height} \xB7 ${$f.find(k=>k.value===s)?.label}`)}catch(h){f(`\u653E\u5927\u5931\u8D25\uFF1A${ce(h)}`)}finally{c(!1)}};return(0,Ie.jsx)(Te,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||m.width<8||m.height<8,onClick:()=>void b(),children:u?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ie.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),Lf.map(h=>(0,Ie.jsx)("button",{type:"button","aria-pressed":h===i,className:`im-btn-sm ${h===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(h),children:h},h))]}),(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),$f.map(h=>(0,Ie.jsx)("button",{type:"button","aria-pressed":h.value===s,className:`im-btn-sm ${h.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>l(h.value),children:h.label},h.value))]}),(0,Ie.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Ie.jsxs)(Ie.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Ie.jsxs)("b",{style:{color:y?"var(--im-warn)":"var(--im-brand)"},children:[m.width," \xD7 ",m.height]}),p?` \xB7 ${p.toFixed(2)}\xD7`:"",y?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Ie.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Ie.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var Va=require("react/jsx-runtime");function Wf({guides:e}){return e.length?(0,Va.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,Va.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Fn=require("react");var be=require("react/jsx-runtime");function Ff({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,Fn.useState)(""),i=(0,Fn.useRef)(null),a=(0,Fn.useMemo)(()=>rd(o),[o]),s=o.trim().length>0,l=a.cards,u=a.issues??[];return(0,be.jsx)(Te,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002",size:"lg",onClose:t,initialFocusRef:i,footer:(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,be.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!l.length||u.length>0,onClick:()=>n(l),children:["\u786E\u8BA4\u5EFA\u5361\uFF08",l.length,"\uFF09"]})]}),children:(0,be.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,be.jsx)("textarea",{ref:i,value:o,onChange:c=>r(c.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),(0,be.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:s?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("div",{className:"im-import-summary",children:[(0,be.jsxs)("span",{children:["\u8BC6\u522B ",l.length," \u5F20\u5361\u7247"]}),u.length?(0,be.jsxs)("span",{className:"im-import-summary-error",children:["\u53D1\u73B0 ",u.length," \u4E2A\u95EE\u9898"]}):null]}),l.map((c,d)=>{let f=va(c.ratio??"1:1",e);return(0,be.jsxs)("article",{className:"im-import-card",children:[(0,be.jsxs)("div",{className:"im-import-card-meta",children:[(0,be.jsx)("strong",{children:c.title||`\u7B2C ${d+1} \u5F20`}),(0,be.jsx)("span",{children:c.ratio?c.ratio:"\u9ED8\u8BA4\u6BD4\u4F8B"}),(0,be.jsx)("span",{children:f.value}),f.fallback?(0,be.jsx)("span",{className:"im-import-card-fallback",children:"\u5C3A\u5BF8\u56DE\u9000"}):null]}),(0,be.jsx)("p",{className:"im-import-card-text",title:c.prompt||"",children:c.prompt||"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09"})]},`${d}-${c.title??""}`)}),u.map((c,d)=>(0,be.jsxs)("div",{className:"im-import-issue",children:[c.title?`\u300C${c.title}\u300D\uFF1A`:"\u5F53\u524D\u5185\u5BB9\uFF1A",c.message]},`issue-${d}`))]}):(0,be.jsx)("div",{className:"im-import-summary",children:"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8"})}),(0,be.jsxs)("p",{className:"im-field-hint",children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,be.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,be.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var Yt=require("react");var $r=require("react");Xa();var Ze=require("react/jsx-runtime");function Xf({config:e,onSaved:t,onFlash:n}){let o=Ga(),[r,i]=(0,$r.useState)(""),[a,s]=(0,$r.useState)(""),[l,u]=(0,$r.useState)(!1),c=e?.defaultOutputDir??"",d=async m=>{u(!0);try{let p=await uo(m);t(p),i(""),n(m?"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0":"\u5DF2\u56DE\u5230\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55")}catch(p){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(p)}`)}finally{u(!1)}},f=async m=>{u(!0);try{let p=await Ou(m);t(p),s(""),n(m>0?`\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${m.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(p){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(p)}`)}finally{u(!1)}};return(0,Ze.jsxs)("div",{style:{display:"grid",gap:8,paddingTop:10,borderTop:"1px solid var(--im-line)"},children:[(0,Ze.jsx)("span",{className:"im-label",children:"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84"}),(0,Ze.jsx)(o.SettingsValueField,{id:"imagora-output-dir",label:"\u56FE\u7247\u843D\u76D8\u76EE\u5F55",hint:`\u7559\u7A7A\u5219\u7528 ${c||"\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output"}\uFF1B\u5DF2\u4FDD\u5B58\u7684\u503C\u4F1A\u4E00\u76F4\u751F\u6548`,text:r===""?c:r,placeholder:"\u7559\u7A7A = \u7528\u6765\u6E90\u6839\u76EE\u5F55\u4E0B\u7684 output",disabled:l,onEdit:m=>i(m)}),(0,Ze.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:l,onClick:()=>void Bn(c),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!r.trim()||r.trim()===c,onClick:()=>void d(r.trim()),children:"\u8BBE\u4E3A\u9ED8\u8BA4"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:l,onClick:()=>void d(""),children:"\u56DE\u5230\u9ED8\u8BA4"})]}),(0,Ze.jsx)("span",{className:"im-label",style:{marginTop:6},children:"\u9884\u7B97\u4E0A\u9650"}),(0,Ze.jsx)(o.SettingsValueField,{id:"imagora-budget",label:"\u672C\u753B\u5E03\u6700\u591A\u82B1\u591A\u5C11\uFF08\u5143\uFF09",hint:e?.budget?`\u5F53\u524D\u4E0A\u9650 \xA5${e.budget.toFixed(2)}\uFF1B\u82B1\u5230\u4E0A\u9650\u65F6\u65B0\u4EFB\u52A1\u4F1A\u88AB\u62D2\u7EDD`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\uFF1B\u8BBE\u4E86\u4E4B\u540E\u82B1\u5230\u4E0A\u9650\u4F1A\u62D2\u7EDD\u65B0\u4EFB\u52A1",text:a===""?e?.budget?String(e.budget):"":a,placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",numeric:!0,disabled:l,onEdit:m=>s(m)}),(0,Ze.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,Ze.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:l||!a.trim(),onClick:()=>void f(Number(a)),children:"\u4FDD\u5B58\u9884\u7B97"}),(0,Ze.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:l||!e?.budget,onClick:()=>void f(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})}var Lr=require("react");var Ae=require("react/jsx-runtime");function Yf({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,Lr.useState)(""),[i,a]=(0,Lr.useState)(""),[s,l]=(0,Lr.useState)(!1),u=e?.imagoraRoot??"",c=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async p=>{l(!0);try{let y=await $u({title:p==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:p==="root"?u:d});if(!y.ok){if(y.reason==="cancelled")return;n(y.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${y.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let b=p==="root"?await ha(y.path||""):await uo(y.path||"");t(b),p==="root"?r(""):a(""),n(p==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(y){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(y)}`)}finally{l(!1)}},m=async(p,y)=>{l(!0);try{let b=p==="root"?await ha(y):await uo(y);t(b),p==="root"?r(""):a(""),n(y?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(b){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ce(b)}`)}finally{l(!1)}};return(0,Ae.jsxs)("div",{className:"im-fieldset",children:[(0,Ae.jsxs)("div",{children:[(0,Ae.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,Ae.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?u:o,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:p=>r(p.target.value)}),(0,Ae.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,Ae.jsxs)("div",{className:"im-field-actions",children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===u,onClick:()=>void m("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void m("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,Ae.jsxs)("div",{children:[(0,Ae.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,Ae.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?c:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:p=>a(p.target.value)}),(0,Ae.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",c?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,Ae.jsxs)("div",{className:"im-field-actions",children:[(0,Ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===c,onClick:()=>void m("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void Bn(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!c,onClick:()=>void m("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var ie=require("react/jsx-runtime");function yo({label:e,value:t,mono:n}){return(0,ie.jsxs)("div",{className:"im-spec-row",children:[(0,ie.jsx)("span",{className:"im-spec-key",children:e}),(0,ie.jsx)("span",{className:`im-spec-val${n?" im-spec-mono":""}`,title:t,children:t})]})}function qf({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,Yt.useState)(r?.baseUrl??""),[l,u]=(0,Yt.useState)(r?.model??e?.model??""),[c,d]=(0,Yt.useState)(""),[f,m]=(0,Yt.useState)(null),[p,y]=(0,Yt.useState)(!1),[b,h]=(0,Yt.useState)(null),[k,g]=(0,Yt.useState)([]),w=e?.profiles??[],S=i?"plugin":e?.profile??"",C=[{value:"plugin",label:"\u63D2\u4EF6\u5185\u914D\u7F6E"},...w.map(x=>({value:x.name,label:x.label||x.name}))],v=(e?.models??[]).map(x=>({value:x.id,label:x.label||x.id})),E=f??S,z=i&&E!=="plugin",B=async()=>{y(!0);try{let x=null;!z&&!i&&E&&E!==e?.profile&&(x=await Sr(E));let _=a.trim()!==(r?.baseUrl??"")||l.trim()!==(r?.model??"")||c.trim();_&&(x=await ba({baseUrl:a.trim(),model:l.trim(),apiKey:c.trim()})),x&&n(x),d(""),m(null),o(_?"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548":"\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(x){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(x)}`)}finally{y(!1)}},P=async()=>{y(!0);try{let x=await ba({reset:!0});n(x),m(null),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(x){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${ce(x)}`)}finally{y(!1)}},O=async()=>{y(!0),h(null);try{let x=await Lu({baseUrl:a.trim(),apiKey:c.trim()});g(x.models??[]),h(x.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${x.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(x){g([]),h(`\u8FDE\u4E0D\u901A\uFF1A${ce(x)}`)}finally{y(!1)}},I=!p&&(a.trim().length>0||!i&&E!==S);return(0,ie.jsx)(Te,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\u3002\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002",size:"lg",onClose:t,footer:(0,ie.jsxs)(ie.Fragment,{children:[i?(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void P(),children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E"}):null,(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:t,children:"\u53D6\u6D88"}),(0,ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!I,onClick:()=>void B(),children:"\u4FDD\u5B58"})]}),children:(0,ie.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-profile",children:"\u914D\u7F6E\u6765\u6E90"}),(0,ie.jsx)(Pt,{id:"imagora-profile",className:"is-block",options:C,value:E,searchable:"auto",onChange:x=>m(x),title:"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"}),(0,ie.jsx)("p",{className:"im-field-hint",children:E==="plugin"?"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\uFF0C\u4E0D\u4F9D\u8D56\u672C\u673A Imagora\u3002\u586B\u597D\u4E0B\u9762\u4E24\u9879\u5373\u53EF\u3002":(w.find(x=>x.name===E)?.label??"")||"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-model-select",children:"\u9ED8\u8BA4\u6A21\u578B"}),(0,ie.jsx)(Pt,{id:"imagora-model-select",className:"is-block",options:v,value:l,searchable:!0,allowCustom:!0,emptyLabel:"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id",onChange:x=>u(x),onCreateCustom:x=>u(x),title:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628"}),(0,ie.jsx)("p",{className:"im-field-hint",children:(e?.models??[]).find(x=>x.id===l)?.note||"\u8BE5\u6765\u6E90\u4E0B\u7684\u53EF\u9009\u6A21\u578B"})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u63D2\u4EF6\u5185\u63A5\u53E3"}),(0,ie.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ie.jsxs)("div",{children:[(0,ie.jsx)("label",{className:"im-label",htmlFor:"imagora-provider-base-url",children:"\u63A5\u53E3\u5730\u5740"}),(0,ie.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:p,onChange:x=>s(x.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("label",{className:"im-label",htmlFor:"imagora-provider-api-key",children:["API Key",(0,ie.jsx)("span",{className:`im-field-state is-${r?.apiKeyConfigured?"ok":"warn"}`,children:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E"})]}),(0,ie.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:c,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:p,onChange:x=>d(x.target.value)}),(0,ie.jsx)("p",{className:"im-field-hint",children:"\u53EA\u5B58\u5728\u672C\u673A settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7\u3002"})]}),(0,ie.jsxs)("div",{children:[(0,ie.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void O(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),b?(0,ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:b}):null]}),k.length?(0,ie.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8},children:[k.slice(0,24).map(x=>(0,ie.jsx)("button",{type:"button",className:`im-chip im-chip--action${x===l?" is-brand":""}`,onClick:()=>u(x),children:x},x)),k.length>24?(0,ie.jsxs)("span",{className:"im-muted",children:["\u2026\u8FD8\u6709 ",k.length-24," \u4E2A"]}):null]}):null]})]})]}),(0,ie.jsxs)("div",{className:"im-section",children:[(0,ie.jsx)("span",{className:"im-section-label",children:"\u751F\u6548\u4E2D"}),(0,ie.jsxs)("div",{className:"im-spec-list is-roomy",children:[(0,ie.jsx)(yo,{label:"\u6765\u6E90",value:e?.profileLabel||(i?"\u63D2\u4EF6\u5185\u914D\u7F6E":"\u2014")}),(0,ie.jsx)(yo,{label:"\u6A21\u578B",value:e?.modelLabel||e?.model||"\u2014"}),(0,ie.jsx)(yo,{label:"API Key",value:r?.apiKeyConfigured?"\u25CF \u5DF2\u8BBE\u7F6E":"\u25CB \u672A\u914D\u7F6E"}),r?.baseUrl?(0,ie.jsx)(yo,{label:"\u63A5\u53E3\u5730\u5740",value:r.baseUrl,mono:!0}):null,e?.imagoraRoot?(0,ie.jsx)(yo,{label:"Imagora \u76EE\u5F55",value:e.imagoraRoot,mono:!0}):null]}),(0,ie.jsx)("p",{className:"im-pending-line",style:{marginTop:8},children:"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\uFF08host \u6BCF\u6B21\u8BF7\u6C42\u90FD\u91CD\u8BFB\u914D\u7F6E\uFF0C\u4E0D\u50CF\u539F\u7248\u8981\u91CD\u542F\u5DE5\u4F5C\u53F0\uFF09\u3002"}),z?(0,ie.jsxs)("p",{className:"im-pending-line",style:{marginTop:6},children:[(0,ie.jsx)("span",{className:"im-chip is-brand",children:"\u88AB\u538B\u4F4F"}),"\u5F53\u524D\u751F\u6548\u7684\u662F\u63D2\u4EF6\u5185\u63A5\u53E3\uFF1B\u8981\u8BA9\u300C",w.find(x=>x.name===E)?.label??E,"\u300D\u751F\u6548\uFF0C\u5148\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\u3002"]}):null]}),(0,ie.jsx)(Yf,{config:e,onSaved:n,onFlash:o}),(0,ie.jsx)(Xf,{config:e,onSaved:n,onFlash:o})]})})}var Vn=require("react");function Uf({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i}){let a=(0,Vn.useCallback)(async(d,f)=>{let m=d.filter(Yu);if(!m.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}for(let[p,y]of m.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let b=await vr(y,y.name||`pasted-${Date.now()}.png`),h=dn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},{x:f.x+p*172,y:f.y});t(k=>[...k,h]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`)}catch(b){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${ce(b)}`)}},[t,o,r]),s=(0,Vn.useCallback)((d,f,m)=>{let p=f?m(f):n();a(d,p)},[a,n]),l=(0,Vn.useCallback)(d=>{let f=document.createElement("input");f.type="file",f.accept="image/*",f.onchange=async()=>{let m=f.files?.[0];if(m)try{let p=await vr(m,m.name);t(y=>y.map(b=>b.id===d&&b.type==="image"?{...b,data:{...b.data,registryId:p.id,name:p.name,url:p.url,size:p.size,ext:p.ext,absPath:p.absPath,missing:!1}}:b)),o(`\u5DF2\u66FF\u6362\u4E3A ${p.name}`)}catch(p){o(`\u66FF\u6362\u5931\u8D25\uFF1A${ce(p)}`)}},f.click()},[t,o]),u=(0,Vn.useCallback)(d=>{let f=e.current.find(m=>m.id===d);!f||f.type!=="image"||!f.data.url||i({url:f.data.url,name:f.data.name,path:f.data.absPath})},[e,i]),c=(0,Vn.useCallback)(async(d,f,m)=>{let p=await fetch(d).then(g=>g.blob()),y=f.endsWith(".png")?f:`${f}.png`,b=await vr(p,y),h=m??n(),k=dn({...b,relPath:b.name,createdAt:b.createdAt??new Date().toISOString()},h);return t(g=>[...g,k]),o(`\u5DF2\u6DFB\u52A0 ${b.name}`),b},[t,o,n]);return{addImages:a,dropFiles:s,replaceImage:l,openPreview:u,addDataUrl:c}}function Zf(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Dt=require("react");function Kf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let l=(0,Dt.useCallback)(async p=>{try{return await ma(p)}catch(y){let b=y.body?.overBudget;if(!b)throw y;let h=b.reason||ce(y);if(!window.confirm(`${h}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`))throw new Error(`\u5DF2\u6309\u9884\u7B97\u53D6\u6D88\uFF1A${h}`);return r(`\u8D85\u9884\u7B97\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A${h}`),await ma({...p,allowOverBudget:!0})}},[r]),u=(0,Dt.useCallback)((p,y)=>{let h=(Array.isArray(y.results)?y.results:[]).filter(C=>C.status==="ok"&&C.assetId&&C.url),k=e.current.find(C=>C.id===p&&C.type==="prompt"),g=[];if(k&&k.type==="prompt"){let C=_r(k).height;h.forEach((v,E)=>{g.push(dn({id:String(v.assetId),relPath:v.name??"result.png",name:v.name??"result.png",url:String(v.url),size:v.bytes??0,ext:String(v.ext??"png"),absPath:v.absPath??"",createdAt:new Date().toISOString()},{x:k.position.x+E*172,y:k.position.y+C+56}))})}n(C=>{let v=[...C,...g];return ft(v,p,{status:y.status==="done"?"done":y.status==="cancelled"?"idle":"failed",resultCount:h.length,message:y.error??void 0,startedAtMs:void 0,cancelRequested:!1})}),g.length&&o(C=>{let v=g.map(E=>({id:`${p}->${E.id}`,source:p,target:E.id,animated:!0})).filter(E=>!C.some(z=>z.id===E.id));return v.length?[...C,...v]:C}),a.current.delete(p);let w=s.current.get(p);w&&window.clearTimeout(w),s.current.delete(p);let S=y.totalCost??0;S>0&&n(C=>{let v=C.find(z=>z.id===p),E=Number(v?.data?.cost??0);return ft(C,p,{cost:E+S})}),r(y.status==="done"?`\u5B8C\u6210 \xB7 ${h.length} \u5F20${S?` \xB7 ${S.toFixed(2)} \u5143`:""}`:`${y.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${y.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),c=(0,Dt.useCallback)((p,y)=>{let b=async()=>{try{let h=await Iu(y);if(h.status==="queued")n(k=>ft(k,p,{status:"queued"}));else if(h.status==="running")n(k=>ft(k,p,{status:"running",startedAtMs:h.startedAt??Date.now(),cancelRequested:h.cancelRequested}));else{u(p,h);return}}catch(h){r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${ce(h)}`)}s.current.set(p,window.setTimeout(b,1200))};b()},[u,r,n,s]),d=(0,Dt.useCallback)(async p=>{let y=e.current.find(h=>h.id===p);if(!y||y.type!=="prompt")return;if(!y.data.prompt.trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let b=Ju(e.current,t.current,p,y.data.prompt);if(b.mode==="invalid"){let h=b.unknown.map(k=>`@${k}`).join("\u3001");n(k=>ft(k,p,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${h}`}));return}try{let h=await l({prompt:y.data.prompt,size:y.data.size,quality:y.data.quality,refIds:b.images.map(k=>k.type==="image"?k.data.registryId:"").filter(Boolean),outputDir:y.data.outputDir,spent:e.current.reduce((k,g)=>k+Number(g.data?.cost??0),0),mask:b.images.map(k=>k.type==="image"?k.data.maskDataUrl:"").find(Boolean)||""});a.current.set(p,h.taskId),n(k=>ft(k,p,{status:"queued",startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${b.images.length} \u5F20 \xB7 ${y.data.size}`),c(p,h.taskId)}catch(h){let k=ce(h);n(g=>ft(g,p,{status:"failed",message:k})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${k}`)}},[e,t,n,i,r,c,a]),f=(0,Dt.useCallback)(async p=>{let y=a.current.get(p);if(n(b=>ft(b,p,{cancelRequested:!0})),!!y)try{await Pu(y)}catch(b){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${ce(b)}`)}},[n,r,a]),m=(0,Dt.useCallback)(p=>{for(let y of p)d(y)},[d]);return(0,Dt.useEffect)(()=>{let p=s.current;return()=>{for(let y of p.values())window.clearTimeout(y);p.clear()}},[s]),{runPrompt:d,cancelPrompt:f,runMany:m}}var it=require("react");function jf(e){let[t,n]=(0,it.useState)(null),[o,r]=(0,it.useState)([]),i=(0,it.useRef)(null),a=(0,it.useCallback)(c=>{n(c),i.current=c,r(c.issues)},[]),s=(0,it.useCallback)(async()=>{try{a(await Eu())}catch(c){r([ce(c)])}},[a]);(0,it.useEffect)(()=>{s()},[s]);let l=(0,it.useCallback)(async c=>{try{let d=await Sr(c);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ce(d)}`)}},[a,e]),u=(0,it.useCallback)(async c=>{try{let d=await Tu(c);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ce(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:l,switchModel:u,replaceConfig:a}}var hn=require("react");function xo(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Qf(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(xo(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(xo(r)),xo(i)):null},restore(r){let i=o.shift();return i?(n.push(xo(r)),xo(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Jf({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,hn.useRef)(Qf(50)),a=(0,hn.useCallback)(()=>{i.current.record({nodes:e.current,edges:t.current})},[e,t]),s=(0,hn.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),l=(0,hn.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),u=(0,hn.useCallback)(()=>i.current.clear(),[]),c=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:l,clear:u,canUndo:c,canRestore:d}}var ep=require("react");function Fw(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function tp(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:l,onClosePreview:u,hasPreview:c}=e;(0,ep.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&c){u();return}if(Fw(f.target))return;let m=f.ctrlKey||f.metaKey,p=f.key.toLowerCase();if(m&&p==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(b=>b.some(h=>!h.selected)?b.map(h=>({...h,selected:!0})):b);return}if(m&&p==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(m&&p==="y"){f.preventDefault(),s();return}if(m&&p==="s"){f.preventDefault(),l();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,l,u,c,e])}var qt=require("react");var Vw=2500;function np({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:l,closeDialog:u}){let c=(0,qt.useRef)(null);(0,qt.useEffect)(()=>{if(e.length)return c.current&&window.clearTimeout(c.current),c.current=window.setTimeout(()=>{Du(n.current,o.current).catch(()=>{})},Vw),()=>{c.current&&window.clearTimeout(c.current)}},[e,t,n,o]),(0,qt.useEffect)(()=>{let m=!1;return(async()=>{try{let y=await Au();if(m||y.empty||!y.nodes?.length)return;let b=ya(y.nodes,y.edges??[],[]);r(b.nodes),i(b.edges),s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${y.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`)}catch{}})(),()=>{m=!0}},[r,i,s]);let d=(0,qt.useCallback)(async m=>{try{let p=await zu(m,n.current,o.current);u(),l(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${p.name||m}\u300D`)}catch(p){l(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ce(p)}`)}},[n,o,u,l]),f=(0,qt.useCallback)(async m=>{try{let p=await Ru(m),y=ya(p.nodes,p.edges,p.missing??[]);r(y.nodes),i(y.edges),u(),l(`\u5DF2\u52A0\u8F7D\u300C${p.name||m}\u300D`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(p){l(`\u52A0\u8F7D\u5931\u8D25\uFF1A${ce(p)}`)}},[r,i,a,u,l]);return{doSave:d,doLoad:f}}var me=require("react/jsx-runtime");function Ya(){let[e,t,n]=xu([]),[o,r,i]=wu([]),[a,s]=(0,se.useState)([]),[l,u]=(0,se.useState)(null),[c,d]=(0,se.useState)(null),[f,m]=(0,se.useState)(null),[p,y]=(0,se.useState)(1),[b,h]=(0,se.useState)(!1),[k,g]=(0,se.useState)(()=>Ud()),[w,S]=(0,se.useState)([]),[C,v]=(0,se.useState)(null),[E,z]=(0,se.useState)(()=>dd()),[B,P]=(0,se.useState)(!1),[O,I]=(0,se.useState)([]),x=(0,se.useRef)(null),_=(0,se.useRef)(null),M=(0,se.useRef)(null),N=(0,se.useRef)(null),R=(0,se.useRef)(new Map),D=(0,se.useRef)(new Map),H=(0,se.useRef)(e),F=(0,se.useRef)(o);H.current=e,F.current=o;let G=(0,se.useCallback)(T=>{s(X=>[...X.slice(-8),T])},[]),Y=(0,se.useCallback)(T=>{u(T),window.setTimeout(()=>u(X=>X===T?null:X),2600)},[]),{config:q,configIssues:J,configRef:le,switchProfile:W,switchModel:A,replaceConfig:U}=jf(Y),ne=(0,se.useRef)(!1);(0,se.useEffect)(()=>{!q||ne.current||!(!q.provider?.apiKeyConfigured&&(q.source==="plugin"||q.issues.length>0))||(ne.current=!0,d({kind:"settings"}))},[q]);let{addImages:oe,replaceImage:Q,openPreview:V,addDataUrl:ee}=Uf({nodesRef:H,setNodes:t,createPosition:()=>wo.current(),log:G,flash:Y,setPreview:m}),{runPrompt:re,cancelPrompt:de,runMany:Se}=Kf({nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,log:G,flash:Y,taskIdsRef:D,timersRef:R}),{doSave:at,doLoad:tt}=np({nodes:e,edges:o,nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,instanceRef:_,log:G,flash:Y,closeDialog:()=>d(null)}),fe=Jf({nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,flash:Y}),st=Ld(e),Ut=(0,se.useMemo)(()=>({animated:!b}),[b]),Ke=(0,se.useMemo)(()=>Qu(e,o),[e,o]),kt=(0,se.useMemo)(()=>e.map(T=>{if(T.type==="image"){let X=Ke.refCounts.get(T.data.registryId)??0;return(T.data.refCount??0)===X?T:{...T,data:{...T.data,refCount:X}}}if(T.type==="group"){let X=Ke.groupCounts.get(T.id)??0,K=Ke.groupSizes.get(T.id)??0,ae=Ke.groupDups.get(T.id)??0;return T.data.imageCount===X&&T.data.totalSize===K&&T.data.duplicateCount===ae?T:{...T,data:{...T.data,imageCount:X,totalSize:K,duplicateCount:ae}}}return T}),[e,Ke]),Fe=e.filter(T=>T.type==="prompt"),nt=Fe.filter(T=>T.data.status==="queued"||T.data.status==="running").map(T=>T.id),je=Fe.filter(T=>T.data.prompt.trim()&&T.data.status!=="running"&&T.data.status!=="queued").map(T=>T.id),pt=(0,se.useCallback)((T,X)=>{t(K=>ft(K,T,X))},[t]),At=(0,se.useCallback)(T=>{fe.record();let X=new Set(T);t(K=>K.filter(ae=>!X.has(ae.id))),r(K=>K.filter(ae=>!X.has(ae.source)&&!X.has(ae.target)))},[t,r,fe]),bn=(0,se.useCallback)(T=>{let X=H.current.find(K=>K.id===T);At([T]),X?.type==="image"&&Mu(X.data.registryId).catch(()=>{})},[At]),$e=(0,se.useCallback)(()=>{let T=_.current,X=x.current?.getBoundingClientRect(),K=T&&X?T.screenToFlowPosition({x:X.width/2,y:X.height/2}):{x:140,y:120},{position:ae,next:Ce}=qu(K,N.current);return N.current=Ce,ae},[]),wo=(0,se.useRef)($e);wo.current=$e;let vo=(0,se.useCallback)(T=>{let X=le.current,K=Uu(T??$e(),{size:X?.sizes[0]?.value??"1024x1024",quality:X?.qualities[0]??"high",outputDir:""});t(ae=>[...ae,K])},[$e,t,le]),ko=(0,se.useCallback)(T=>{t(X=>[...X,Zu(T??$e())])},[$e,t]),Hr=(0,se.useCallback)(()=>{r(xa(H.current,F.current)),Y("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,Y]),Br=(0,se.useCallback)(()=>{let T=new Set(w);if(!T.size){Y("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}fe.record(),r(ed(H.current,F.current,T)),Y("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[w,r,Y,fe]),Wr=(0,se.useCallback)(()=>{let T=new Set(w),X=le.current?.defaultOutputDir??"";T.size&&(fe.record(),t(K=>K.map(ae=>ae.type==="prompt"&&T.has(ae.id)?{...ae,data:{...ae.data,outputDir:X}}:ae)),Y(X?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${X}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[w,t,Y,fe]),Fr=(0,se.useCallback)(()=>{let T=_.current;if(!T)return;let X=H.current.filter(ae=>w.includes(ae.id)),K=X.length?X:H.current;if(!K.length){Y("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}T.fitView({nodes:K,padding:.25,duration:300,maxZoom:1.6})},[w,Y]),Vr=(0,se.useCallback)(()=>{let T=new Set(w);if(!T.size){Y("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}fe.record(),t(X=>{let K=X.filter(Pe=>T.has(Pe.id)&&Pe.type==="image");if(!K.length)return X;let ae=Math.min(...K.map(Pe=>Pe.position.x)),Ce=Math.min(...K.map(Pe=>Pe.position.y)),St=new Map(K.map((Pe,yn)=>[Pe.id,yn]));return X.map(Pe=>{let yn=St.get(Pe.id);return yn===void 0?Pe:{...Pe,position:{x:ae+yn*172,y:Ce}}})})},[w,t,Y,fe]),{dropIntent:Gr,dragHandlers:Xr,startToolbarDrag:Yr,dropChip:qr}=Yd({canvasRef:x,modalOpen:!!c||!!f,getCreatePosition:()=>$e(),toFlowPosition:T=>_.current?_.current.screenToFlowPosition(T):$e(),onDropFiles:(T,X)=>void oe(T,X),onDropNode:(T,X)=>{fe.record(),T==="prompt"?vo(X):ko(X)}});(0,se.useEffect)(()=>{let T=X=>{let K=X.target;if(K&&(K.tagName==="TEXTAREA"||K.tagName==="INPUT"))return;let ae=Array.from(X.clipboardData?.files??[]);ae.length&&(X.preventDefault(),oe(ae,$e()))};return window.addEventListener("paste",T),()=>window.removeEventListener("paste",T)},[oe,$e]),tp({nodesRef:H,edgesRef:F,setNodes:t,setEdges:r,selectedIds:w,selectedEdgeId:C,onDeleteNodes:At,onDeleteEdge:T=>{fe.record(),r(X=>X.filter(K=>K.id!==T)),v(null)},onUndo:fe.undo,onRestore:fe.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>m(null),hasPreview:!!f});let Zt=(0,se.useCallback)(T=>X=>{let K=H.current.find(ae=>ae.id===X);if(!K||K.type!=="image"||!K.data.url){Y("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:T,target:{nodeId:X,src:K.data.url,name:K.data.name}})},[H,Y]),So=(0,se.useMemo)(()=>({cropImage:Zt("crop"),splitImage:Zt("split"),upscaleImage:Zt("upscale"),maskImage:Zt("mask")}),[Zt]),Co=(0,se.useCallback)(T=>{fe.record(),t(X=>X.map(K=>K.id===T&&K.type==="image"?{...K,data:{...K.data,maskDataUrl:void 0}}:K)),Y("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,fe,Y]),Ur=(0,se.useMemo)(()=>({updatePrompt:pt,runPrompt:T=>{re(T)},cancelPrompt:T=>{de(T)},deleteNode:bn,zoomImage:V,replaceImage:Q,...So,clearMask:Co,config:q}),[pt,re,de,bn,V,Q,So,Co,q]);return(0,me.jsxs)(_a.Provider,{value:Ur,children:[(0,me.jsx)("style",{children:Dd}),(0,me.jsxs)("div",{className:"im-root",children:[(0,me.jsx)(Bd,{config:q,promptCount:Fe.length,runnableIds:je,busyIds:nt.length,snapEnabled:E,canvasLocked:B,cost:st,canUndo:fe.canUndo,canRestore:fe.canRestore,onUndo:()=>{fe.record(),fe.undo()},onRestore:fe.restore,onAddPrompt:()=>vo(),onPickFiles:()=>M.current?.click(),onAddGroup:()=>ko(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:Yr,onRun:Se,onCancelAll:()=>nt.forEach(T=>void de(T)),onAutoConnect:Hr,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:T=>void W(T),onSwitchModel:T=>void A(T),onOpenSave:async()=>{try{let T=await ga();d({kind:"save",workflows:T.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let T=await ga();d({kind:"load",workflows:T.workflows})}catch(T){Y(`\u8BFB\u53D6\u5931\u8D25\uFF1A${ce(T)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),J.length?(0,me.jsx)(ef,{tone:"error",action:(0,me.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,me.jsx)("ul",{className:"im-banner-list",children:J.map(T=>(0,me.jsx)("li",{children:T},T))})}):null,(0,me.jsxs)("div",{className:`im-canvas${Gr?" is-drop-active":""}`,ref:x,...Xr,children:[(0,me.jsx)(Kd,{selectedCount:w.length,selectedPromptCount:w.filter(T=>e.some(X=>X.id===T&&X.type==="prompt")).length,selectedRunnableIds:je.filter(T=>w.includes(T)),pickingOutputDir:!1,onRunSelected:()=>Se(je.filter(T=>w.includes(T))),onAutoLayout:Vr,onAutoConnectSelected:Br,onSetOutputDir:Wr,onDeleteSelected:()=>{At(w),S([])}}),(0,me.jsx)(Ma.Provider,{value:b,children:(0,me.jsxs)(yu,{nodes:kt,edges:o,nodeTypes:Ad,onNodesChange:T=>{let X=pd(T,H.current,E);I(X.guides),n(X.changes)},onEdgesChange:T=>i(T),onConnect:Zf(r),isValidConnection:T=>Ku(H.current,F.current,{source:String(T.source??""),target:String(T.target??"")}),onInit:T=>{_.current=T},onNodeDragStop:(T,X)=>{if(I([]),!E)return;let K=mo(X),ae=H.current.filter(St=>St.id!==X.id).map(mo),Ce=Mr(K,ae);Ce.x===K.x&&Ce.y===K.y||t(St=>St.map(Pe=>Pe.id===X.id?{...Pe,position:{x:Ce.x,y:Ce.y}}:Pe))},onMove:(T,X)=>{y(X.zoom),h(K=>Td(K,X.zoom))},onEdgeDoubleClick:(T,X)=>{fe.record(),r(K=>K.filter(ae=>ae.id!==X.id)),v(null)},onSelectionChange:({nodes:T,edges:X})=>{let K=T.map(Ce=>Ce.id);S(Ce=>Ce.length===K.length&&Ce.every((St,Pe)=>St===K[Pe])?Ce:K);let ae=X.length===1?X[0].id:null;v(Ce=>Ce===ae?Ce:ae)},fitView:!0,fitViewOptions:{padding:.25,maxZoom:1},minZoom:.05,maxZoom:2.5,proOptions:{hideAttribution:!0},defaultEdgeOptions:Ut,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!B,nodesConnectable:!B,elementsSelectable:!B,panOnDrag:!B,selectionOnDrag:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:["Meta","Control"],children:[(0,me.jsx)(ku,{variant:yt.Dots,gap:18,size:1.4}),k?(0,me.jsx)(Nu,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:T=>T.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,me.jsx)(Wf,{guides:O})]})}),(0,me.jsx)(Wd,{zoom:p,snapEnabled:E,canvasLocked:B,minimapOpen:k,onZoomIn:()=>void _.current?.zoomIn({duration:180}),onZoomOut:()=>void _.current?.zoomOut({duration:180}),onFitView:()=>_.current?.fitView({padding:.2,duration:300}),onFocusSelected:Fr,onToggleSnap:()=>z(T=>{let X=!T;return fd(X),X||I([]),Y(X?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),X}),onToggleLock:()=>P(T=>{let X=!T;return Y(X?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),X}),onToggleMinimap:()=>g(T=>{let X=!T;return Zd(X),X}),onOpenHelp:()=>d({kind:"help"})}),e.length===0?(0,me.jsx)(jd,{}):null,(0,me.jsx)(Qd,{logs:a}),(0,me.jsx)(Jd,{text:l}),qr]}),(0,me.jsx)("input",{ref:M,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:T=>{let X=Array.from(T.target.files??[]);T.target.value="",oe(X,$e())}}),f?(0,me.jsx)(Ar,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>m(null)}):null,c?.kind==="save"?(0,me.jsx)(ff,{workflows:c.workflows??[],imagoraRoot:q?.imagoraRoot,onCancel:()=>d(null),onSubmit:T=>void at(T)}):null,c?.kind==="load"?(0,me.jsx)(pf,{workflows:c.workflows??[],imagoraRoot:q?.imagoraRoot,onCancel:()=>d(null),onPick:T=>void tt(T)}):null,c?.kind==="crop"&&c.target?(0,me.jsx)(Ef,{src:c.target.src,name:c.target.name,onClose:()=>d(null),onConfirm:async(T,X)=>{fe.record(),await ee(T,`${c.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),Y(X)}}):null,c?.kind==="split"&&c.target?(0,me.jsx)(Of,{src:c.target.src,onClose:()=>d(null),onConfirm:async T=>{fe.record();let X=c.target.name.replace(/\.[^.]+$/,""),K=$e();for(let[ae,Ce]of T.entries())await ee(Ce.dataUrl,`${X}_${ae+1}.png`,{x:K.x+ae*160,y:K.y});d(null),Y(`\u5DF2\u5207\u51FA ${T.length} \u5F20`)}}):null,c?.kind==="upscale"&&c.target?(0,me.jsx)(Bf,{src:c.target.src,onClose:()=>d(null),onConfirm:async(T,X)=>{fe.record(),await ee(T,`${c.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),Y(X)}}):null,c?.kind==="mask"&&c.target?(0,me.jsx)(Pf,{src:c.target.src,name:c.target.name,onClose:()=>d(null),onConfirm:async(T,X)=>{fe.record(),t(K=>K.map(ae=>ae.id===c.target.nodeId&&ae.type==="image"?{...ae,data:{...ae.data,maskDataUrl:T}}:ae)),d(null),Y(X)}}):null,c?.kind==="help"?(0,me.jsx)(mf,{config:q,onClose:()=>d(null)}):null,c?.kind==="history"?(0,me.jsx)(Tf,{imagoraRoot:q?.imagoraRoot,onClose:()=>d(null),onImport:T=>{if(!T.length)return;fe.record();let X=$e(),K=T.map((ae,Ce)=>dn(ae,{x:X.x+Ce*172,y:X.y}));t(ae=>[...ae,...K]),Y(`\u5DF2\u653E\u5165 ${K.length} \u5F20\u56FE`)}}):null,c?.kind==="import"?(0,me.jsx)(Ff,{sizes:q?.sizes??[],onCancel:()=>d(null),onConfirm:T=>{fe.record();let X=le.current,K=id(T,{sizes:X?.sizes??[],defaultQuality:X?.qualities[0]??"high",defaultOutputDir:""},$e());t(ae=>[...ae,...K]),d(null),Y(`\u5DF2\u5EFA ${K.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,c?.kind==="settings"?(0,me.jsx)(qf,{config:q,onClose:()=>d(null),onSaved:U,onFlash:Y}):null]})]})}var op=`/* this gets exported as style.css and can be used for the default theming */
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
`;var ip=require("react/jsx-runtime"),Gw=["slots"],rp="imagora";globalThis.__dshImagoraCanvas=Ya;function Xw({size:e=16}){return(0,ip.jsx)(Ra,{size:e,fill:"currentColor"})}function Yw(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=op,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(Xa(),Gf)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:rp},Ya)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:rp,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Xw)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
