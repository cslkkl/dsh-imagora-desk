window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;
"use strict";var km=Object.create;var Lo=Object.defineProperty;var Sm=Object.getOwnPropertyDescriptor;var Mm=Object.getOwnPropertyNames;var Nm=Object.getPrototypeOf,Cm=Object.prototype.hasOwnProperty;var Em=(e,t)=>()=>(e&&(t=e(e=0)),t);var $o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Es=(e,t)=>{for(var n in t)Lo(e,n,{get:t[n],enumerable:!0})},_s=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Mm(t))!Cm.call(e,r)&&r!==n&&Lo(e,r,{get:()=>t[r],enumerable:!(o=Sm(t,r))||o.enumerable});return e};var Is=(e,t,n)=>(n=e!=null?km(Nm(e)):{},_s(t||!e||!e.__esModule?Lo(n,"default",{value:e,enumerable:!0}):n,e)),_m=e=>_s(Lo({},"__esModule",{value:!0}),e);var Nc=$o(Mc=>{"use strict";var Zn=require("react");function V0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var X0=typeof Object.is=="function"?Object.is:V0,G0=Zn.useState,q0=Zn.useEffect,Y0=Zn.useLayoutEffect,U0=Zn.useDebugValue;function Z0(e,t){var n=t(),o=G0({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return Y0(function(){r.value=n,r.getSnapshot=t,_a(r)&&i({inst:r})},[e,n,t]),q0(function(){return _a(r)&&i({inst:r}),e(function(){_a(r)&&i({inst:r})})},[e]),U0(n),n}function _a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!X0(e,n)}catch{return!0}}function K0(e,t){return t()}var j0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?K0:Z0;Mc.useSyncExternalStore=Zn.useSyncExternalStore!==void 0?Zn.useSyncExternalStore:j0});var Ec=$o((ik,Cc)=>{"use strict";Cc.exports=Nc()});var Ic=$o(_c=>{"use strict";var Nr=require("react"),Q0=Ec();function J0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ey=typeof Object.is=="function"?Object.is:J0,ty=Q0.useSyncExternalStore,ny=Nr.useRef,oy=Nr.useEffect,ry=Nr.useMemo,iy=Nr.useDebugValue;_c.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=ny(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=ry(function(){function c(p){if(!u){if(u=!0,l=p,p=o(p),r!==void 0&&a.hasValue){var b=a.value;if(r(b,p))return d=b}return d=p}if(b=d,ey(l,p))return b;var h=o(p);return r!==void 0&&r(b,h)?(l=p,b):(l=p,d=h)}var u=!1,l,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var s=ty(e,i[0],i[1]);return oy(function(){a.hasValue=!0,a.value=s},[s]),iy(s),s}});var zc=$o((sk,Pc)=>{"use strict";Pc.exports=Ic()});var Yp={};Es(Yp,{primitives:()=>Zv});function Uv(e){if(!e||typeof e!="object"&&typeof e!="function")return null;let t=e;if(t.Button)return t;let n=t.default;return n&&typeof n=="object"&&n.Button?n:null}function Zv(){if(ri)return ri;let e=require(qp),t=Uv(e);if(!t){let n=e&&typeof e=="object"?Object.keys(e).slice(0,8).join(", "):String(e);throw new Error(`\u5BBF\u4E3B\u6CA1\u6709\u63D0\u4F9B ${qp}\uFF08\u62FF\u5230\u7684\u6210\u5458\uFF1A${n||"\u7A7A"}\uFF09`)}return ri=t,ri}var qp,ri,Up=Em(()=>{"use strict";qp="@deepseek-ai/dsh-client-ui-primitives",ri=null});var e1={};Es(e1,{apply:()=>Jv,inject:()=>Kv});module.exports=_m(e1);var se=require("react");var H=require("react/jsx-runtime"),$=require("react");function Ee(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=Ee(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Im={value:()=>{}};function ln(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Ho(n)}function Ho(e){this._=e}function Pm(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Ho.prototype=ln.prototype={constructor:Ho,on:function(e,t){var n=this._,o=Pm(e+"",n),r,i=-1,a=o.length;if(arguments.length<2){for(;++i<a;)if((r=(e=o[i]).type)&&(r=zm(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(r=(e=o[i]).type)n[r]=Ps(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Ps(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ho(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function zm(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Ps(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Im,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var yi="http://www.w3.org/1999/xhtml",zs={svg:"http://www.w3.org/2000/svg",xhtml:yi,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function to(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),zs.hasOwnProperty(t)?{space:zs[t],local:e}:e}function Rm(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===yi&&t.documentElement.namespaceURI===yi?t.createElement(e):t.createElementNS(n,e)}}function Dm(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Rs(e){var t=to(e);return(t.local?Dm:Rm)(t)}function Tm(){}function Wo(e){return e==null?Tm:function(){return this.querySelector(e)}}function Am(e){typeof e!="function"&&(e=Wo(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=new Array(a),c,u,l=0;l<a;++l)(c=i[l])&&(u=e.call(c,c.__data__,l,i))&&("__data__"in c&&(u.__data__=c.__data__),s[l]=u);return new Je(o,this._parents)}function Om(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Lm(){return[]}function wi(e){return e==null?Lm:function(){return this.querySelectorAll(e)}}function $m(e){return function(){return Om(e.apply(this,arguments))}}function Hm(e){typeof e=="function"?e=$m(e):e=wi(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var a=t[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&(o.push(e.call(c,c.__data__,u,a)),r.push(c));return new Je(o,r)}function vi(e){return function(){return this.matches(e)}}function Ds(e){return function(t){return t.matches(e)}}var Bm=Array.prototype.find;function Wm(e){return function(){return Bm.call(this.children,e)}}function Fm(){return this.firstElementChild}function Vm(e){return this.select(e==null?Fm:Wm(typeof e=="function"?e:Ds(e)))}var Xm=Array.prototype.filter;function Gm(){return Array.from(this.children)}function qm(e){return function(){return Xm.call(this.children,e)}}function Ym(e){return this.selectAll(e==null?Gm:qm(typeof e=="function"?e:Ds(e)))}function Um(e){typeof e!="function"&&(e=vi(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new Je(o,this._parents)}function Ts(e){return new Array(e.length)}function Zm(){return new Je(this._enter||this._groups.map(Ts),this._parents)}function Bo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Bo.prototype={constructor:Bo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Km(e){return function(){return e}}function jm(e,t,n,o,r,i){for(var a=0,s,c=t.length,u=i.length;a<u;++a)(s=t[a])?(s.__data__=i[a],o[a]=s):n[a]=new Bo(e,i[a]);for(;a<c;++a)(s=t[a])&&(r[a]=s)}function Qm(e,t,n,o,r,i,a){var s,c,u=new Map,l=t.length,d=i.length,f=new Array(l),p;for(s=0;s<l;++s)(c=t[s])&&(f[s]=p=a.call(c,c.__data__,s,t)+"",u.has(p)?r[s]=c:u.set(p,c));for(s=0;s<d;++s)p=a.call(e,i[s],s,i)+"",(c=u.get(p))?(o[s]=c,c.__data__=i[s],u.delete(p)):n[s]=new Bo(e,i[s]);for(s=0;s<l;++s)(c=t[s])&&u.get(f[s])===c&&(r[s]=c)}function Jm(e){return e.__data__}function eg(e,t){if(!arguments.length)return Array.from(this,Jm);var n=t?Qm:jm,o=this._parents,r=this._groups;typeof e!="function"&&(e=Km(e));for(var i=r.length,a=new Array(i),s=new Array(i),c=new Array(i),u=0;u<i;++u){var l=o[u],d=r[u],f=d.length,p=tg(e.call(l,l&&l.__data__,u,o)),b=p.length,h=s[u]=new Array(b),y=a[u]=new Array(b),g=c[u]=new Array(f);n(l,d,h,y,g,p,t);for(var v=0,m=0,x,k;v<b;++v)if(x=h[v]){for(v>=m&&(m=v+1);!(k=y[m])&&++m<b;);x._next=k||null}}return a=new Je(a,o),a._enter=s,a._exit=c,a}function tg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ng(){return new Je(this._exit||this._groups.map(Ts),this._parents)}function og(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function rg(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,a=Math.min(r,i),s=new Array(r),c=0;c<a;++c)for(var u=n[c],l=o[c],d=u.length,f=s[c]=new Array(d),p,b=0;b<d;++b)(p=u[b]||l[b])&&(f[b]=p);for(;c<r;++c)s[c]=n[c];return new Je(s,this._parents)}function ig(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],a;--r>=0;)(a=o[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function ag(e){e||(e=sg);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var a=n[i],s=a.length,c=r[i]=new Array(s),u,l=0;l<s;++l)(u=a[l])&&(c[l]=u);c.sort(t)}return new Je(r,this._parents).order()}function sg(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function lg(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function cg(){return Array.from(this)}function ug(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var a=o[r];if(a)return a}return null}function dg(){let e=0;for(let t of this)++e;return e}function fg(){return!this.node()}function pg(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,a=r.length,s;i<a;++i)(s=r[i])&&e.call(s,s.__data__,i,r);return this}function mg(e){return function(){this.removeAttribute(e)}}function gg(e){return function(){this.removeAttributeNS(e.space,e.local)}}function hg(e,t){return function(){this.setAttribute(e,t)}}function bg(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function yg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function xg(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function wg(e,t){var n=to(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?gg:mg:typeof t=="function"?n.local?xg:yg:n.local?bg:hg)(n,t))}function As(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function vg(e){return function(){this.style.removeProperty(e)}}function kg(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Sg(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Mg(e,t,n){return arguments.length>1?this.each((t==null?vg:typeof t=="function"?Sg:kg)(e,t,n??"")):cn(this.node(),e)}function cn(e,t){return e.style.getPropertyValue(t)||As(e).getComputedStyle(e,null).getPropertyValue(t)}function Ng(e){return function(){delete this[e]}}function Cg(e,t){return function(){this[e]=t}}function Eg(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function _g(e,t){return arguments.length>1?this.each((t==null?Ng:typeof t=="function"?Eg:Cg)(e,t)):this.node()[e]}function Os(e){return e.trim().split(/^|\s+/)}function ki(e){return e.classList||new Ls(e)}function Ls(e){this._node=e,this._names=Os(e.getAttribute("class")||"")}Ls.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function $s(e,t){for(var n=ki(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function Hs(e,t){for(var n=ki(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Ig(e){return function(){$s(this,e)}}function Pg(e){return function(){Hs(this,e)}}function zg(e,t){return function(){(t.apply(this,arguments)?$s:Hs)(this,e)}}function Rg(e,t){var n=Os(e+"");if(arguments.length<2){for(var o=ki(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?zg:t?Ig:Pg)(n,t))}function Dg(){this.textContent=""}function Tg(e){return function(){this.textContent=e}}function Ag(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Og(e){return arguments.length?this.each(e==null?Dg:(typeof e=="function"?Ag:Tg)(e)):this.node().textContent}function Lg(){this.innerHTML=""}function $g(e){return function(){this.innerHTML=e}}function Hg(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Bg(e){return arguments.length?this.each(e==null?Lg:(typeof e=="function"?Hg:$g)(e)):this.node().innerHTML}function Wg(){this.nextSibling&&this.parentNode.appendChild(this)}function Fg(){return this.each(Wg)}function Vg(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Xg(){return this.each(Vg)}function Gg(e){var t=typeof e=="function"?e:Rs(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function qg(){return null}function Yg(e,t){var n=typeof e=="function"?e:Rs(e),o=t==null?qg:typeof t=="function"?t:Wo(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Ug(){var e=this.parentNode;e&&e.removeChild(this)}function Zg(){return this.each(Ug)}function Kg(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function jg(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Qg(e){return this.select(e?jg:Kg)}function Jg(e){return arguments.length?this.property("__data__",e):this.node().__data__}function eh(e){return function(t){e.call(this,t,this.__data__)}}function th(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function nh(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function oh(e,t,n){return function(){var o=this.__on,r,i=eh(t);if(o){for(var a=0,s=o.length;a<s;++a)if((r=o[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function rh(e,t,n){var o=th(e+""),r,i=o.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,u=s.length,l;c<u;++c)for(r=0,l=s[c];r<i;++r)if((a=o[r]).type===l.type&&a.name===l.name)return l.value}return}for(s=t?oh:nh,r=0;r<i;++r)this.each(s(o[r],t,n));return this}function Bs(e,t,n){var o=As(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function ih(e,t){return function(){return Bs(this,e,t)}}function ah(e,t){return function(){return Bs(this,e,t.apply(this,arguments))}}function sh(e,t){return this.each((typeof t=="function"?ah:ih)(e,t))}function*lh(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,a;r<i;++r)(a=o[r])&&(yield a)}var Ws=[null];function Je(e,t){this._groups=e,this._parents=t}function un(){return new Je([[document.documentElement]],Ws)}function ch(){return this}Je.prototype=un.prototype={constructor:Je,select:Am,selectAll:Hm,selectChild:Vm,selectChildren:Ym,filter:Um,data:eg,enter:Zm,exit:ng,join:og,merge:rg,selection:ch,order:ig,sort:ag,call:lg,nodes:cg,node:ug,size:dg,empty:fg,each:pg,attr:wg,style:Mg,property:_g,classed:Rg,text:Og,html:Bg,raise:Fg,lower:Xg,append:Gg,insert:Yg,remove:Zg,clone:Qg,datum:Jg,on:rh,dispatch:sh,[Symbol.iterator]:lh};function He(e){return typeof e=="string"?new Je([[document.querySelector(e)]],[document.documentElement]):new Je([[e]],Ws)}var uh=0;function dh(){return new xi}function xi(){this._="@"+(++uh).toString(36)}xi.prototype=dh.prototype={constructor:xi,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function fh(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ue(e,t){if(e=fh(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var ph={passive:!1},no={capture:!0,passive:!1};function Si(e){e.stopImmediatePropagation()}function Pn(e){e.preventDefault(),e.stopImmediatePropagation()}function Ni(e){var t=e.document.documentElement,n=He(e).on("dragstart.drag",Pn,no);"onselectstart"in t?n.on("selectstart.drag",Pn,no):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Ci(e,t){var n=e.document.documentElement,o=He(e).on("dragstart.drag",null);t&&(o.on("click.drag",Pn,no),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Fo=e=>()=>e;function Mi(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:a,y:s,dx:c,dy:u,dispatch:l}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:l}})}Mi.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function mh(e){return!e.ctrlKey&&!e.button}function gh(){return this.parentNode}function hh(e,t){return t??{x:e.x,y:e.y}}function bh(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ei(){var e=mh,t=gh,n=hh,o=bh,r={},i=ln("start","drag","end"),a=0,s,c,u,l,d=0;function f(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",y).on("touchmove.drag",g,ph).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,k){if(!(l||!e.call(this,x,k))){var M=m(this,t.call(this,x,k),x,k,"mouse");M&&(He(x.view).on("mousemove.drag",b,no).on("mouseup.drag",h,no),Ni(x.view),Si(x),u=!1,s=x.clientX,c=x.clientY,M("start",x))}}function b(x){if(Pn(x),!u){var k=x.clientX-s,M=x.clientY-c;u=k*k+M*M>d}r.mouse("drag",x)}function h(x){He(x.view).on("mousemove.drag mouseup.drag",null),Ci(x.view,u),Pn(x),r.mouse("end",x)}function y(x,k){if(e.call(this,x,k)){var M=x.changedTouches,S=t.call(this,x,k),C=M.length,I,L;for(I=0;I<C;++I)(L=m(this,S,x,k,M[I].identifier,M[I]))&&(Si(x),L("start",x,M[I]))}}function g(x){var k=x.changedTouches,M=k.length,S,C;for(S=0;S<M;++S)(C=r[k[S].identifier])&&(Pn(x),C("drag",x,k[S]))}function v(x){var k=x.changedTouches,M=k.length,S,C;for(l&&clearTimeout(l),l=setTimeout(function(){l=null},500),S=0;S<M;++S)(C=r[k[S].identifier])&&(Si(x),C("end",x,k[S]))}function m(x,k,M,S,C,I){var L=i.copy(),R=Ue(I||M,k),A,P,w;if((w=n.call(x,new Mi("beforestart",{sourceEvent:M,target:f,identifier:C,active:a,x:R[0],y:R[1],dx:0,dy:0,dispatch:L}),S))!=null)return A=w.x-R[0]||0,P=w.y-R[1]||0,function _(E,N,z){var D=R,F;switch(E){case"start":r[C]=_,F=a++;break;case"end":delete r[C],--a;case"drag":R=Ue(z||N,k),F=a;break}L.call(E,x,new Mi(E,{sourceEvent:N,subject:w,target:f,identifier:C,active:F,x:R[0]+A,y:R[1]+P,dx:R[0]-D[0],dy:R[1]-D[1],dispatch:L}),S)}}return f.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Fo(!!x),f):e},f.container=function(x){return arguments.length?(t=typeof x=="function"?x:Fo(x),f):t},f.subject=function(x){return arguments.length?(n=typeof x=="function"?x:Fo(x),f):n},f.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:Fo(!!x),f):o},f.on=function(){var x=i.on.apply(i,arguments);return x===i?f:x},f.clickDistance=function(x){return arguments.length?(d=(x=+x)*x,f):Math.sqrt(d)},f}function Tn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function io(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Ft(){}var mn=.7,Dn=1/mn,zn="\\s*([+-]?\\d+)\\s*",oo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",yh=/^#([0-9a-f]{3,8})$/,xh=new RegExp(`^rgb\\(${zn},${zn},${zn}\\)$`),wh=new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`),vh=new RegExp(`^rgba\\(${zn},${zn},${zn},${oo}\\)$`),kh=new RegExp(`^rgba\\(${pt},${pt},${pt},${oo}\\)$`),Sh=new RegExp(`^hsl\\(${oo},${pt},${pt}\\)$`),Mh=new RegExp(`^hsla\\(${oo},${pt},${pt},${oo}\\)$`),Fs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Tn(Ft,Dt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Vs,formatHex:Vs,formatHex8:Nh,formatHsl:Ch,formatRgb:Xs,toString:Xs});function Vs(){return this.rgb().formatHex()}function Nh(){return this.rgb().formatHex8()}function Ch(){return Js(this).formatHsl()}function Xs(){return this.rgb().formatRgb()}function Dt(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=yh.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Gs(t):n===3?new Le(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Vo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Vo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=xh.exec(e))?new Le(t[1],t[2],t[3],1):(t=wh.exec(e))?new Le(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=vh.exec(e))?Vo(t[1],t[2],t[3],t[4]):(t=kh.exec(e))?Vo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Sh.exec(e))?Us(t[1],t[2]/100,t[3]/100,1):(t=Mh.exec(e))?Us(t[1],t[2]/100,t[3]/100,t[4]):Fs.hasOwnProperty(e)?Gs(Fs[e]):e==="transparent"?new Le(NaN,NaN,NaN,0):null}function Gs(e){return new Le(e>>16&255,e>>8&255,e&255,1)}function Vo(e,t,n,o){return o<=0&&(e=t=n=NaN),new Le(e,t,n,o)}function Di(e){return e instanceof Ft||(e=Dt(e)),e?(e=e.rgb(),new Le(e.r,e.g,e.b,e.opacity)):new Le}function ao(e,t,n,o){return arguments.length===1?Di(e):new Le(e,t,n,o??1)}function Le(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Tn(Le,ao,io(Ft,{brighter(e){return e=e==null?Dn:Math.pow(Dn,e),new Le(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new Le(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Le(fn(this.r),fn(this.g),fn(this.b),Go(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:qs,formatHex:qs,formatHex8:Eh,formatRgb:Ys,toString:Ys}));function qs(){return`#${dn(this.r)}${dn(this.g)}${dn(this.b)}`}function Eh(){return`#${dn(this.r)}${dn(this.g)}${dn(this.b)}${dn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ys(){let e=Go(this.opacity);return`${e===1?"rgb(":"rgba("}${fn(this.r)}, ${fn(this.g)}, ${fn(this.b)}${e===1?")":`, ${e})`}`}function Go(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function fn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function dn(e){return e=fn(e),(e<16?"0":"")+e.toString(16)}function Us(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new lt(e,t,n,o)}function Js(e){if(e instanceof lt)return new lt(e.h,e.s,e.l,e.opacity);if(e instanceof Ft||(e=Dt(e)),!e)return new lt;if(e instanceof lt)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),a=NaN,s=i-r,c=(i+r)/2;return s?(t===i?a=(n-o)/s+(n<o)*6:n===i?a=(o-t)/s+2:a=(t-n)/s+4,s/=c<.5?i+r:2-i-r,a*=60):s=c>0&&c<1?0:a,new lt(a,s,c,e.opacity)}function Yo(e,t,n,o){return arguments.length===1?Js(e):new lt(e,t,n,o??1)}function lt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Tn(lt,Yo,io(Ft,{brighter(e){return e=e==null?Dn:Math.pow(Dn,e),new lt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new lt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Le(_i(e>=240?e-240:e+120,r,o),_i(e,r,o),_i(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new lt(Zs(this.h),Xo(this.s),Xo(this.l),Go(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Go(this.opacity);return`${e===1?"hsl(":"hsla("}${Zs(this.h)}, ${Xo(this.s)*100}%, ${Xo(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Zs(e){return e=(e||0)%360,e<0?e+360:e}function Xo(e){return Math.max(0,Math.min(1,e||0))}function _i(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var el=Math.PI/180,tl=180/Math.PI,qo=18,nl=.96422,ol=1,rl=.82521,il=4/29,Rn=6/29,al=3*Rn*Rn,_h=Rn*Rn*Rn;function sl(e){if(e instanceof mt)return new mt(e.l,e.a,e.b,e.opacity);if(e instanceof Rt)return cl(e);e instanceof Le||(e=Di(e));var t=Ri(e.r),n=Ri(e.g),o=Ri(e.b),r=Ii((.2225045*t+.7168786*n+.0606169*o)/ol),i,a;return t===n&&n===o?i=a=r:(i=Ii((.4360747*t+.3850649*n+.1430804*o)/nl),a=Ii((.0139322*t+.0971045*n+.7141733*o)/rl)),new mt(116*r-16,500*(i-r),200*(r-a),e.opacity)}function ll(e,t,n,o){return arguments.length===1?sl(e):new mt(e,t,n,o??1)}function mt(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Tn(mt,ll,io(Ft,{brighter(e){return new mt(this.l+qo*(e??1),this.a,this.b,this.opacity)},darker(e){return new mt(this.l-qo*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=nl*Pi(t),e=ol*Pi(e),n=rl*Pi(n),new Le(zi(3.1338561*t-1.6168667*e-.4906146*n),zi(-.9787684*t+1.9161415*e+.033454*n),zi(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Ii(e){return e>_h?Math.pow(e,1/3):e/al+il}function Pi(e){return e>Rn?e*e*e:al*(e-il)}function zi(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Ri(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ih(e){if(e instanceof Rt)return new Rt(e.h,e.c,e.l,e.opacity);if(e instanceof mt||(e=sl(e)),e.a===0&&e.b===0)return new Rt(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*tl;return new Rt(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Uo(e,t,n,o){return arguments.length===1?Ih(e):new Rt(e,t,n,o??1)}function Rt(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function cl(e){if(isNaN(e.h))return new mt(e.l,0,0,e.opacity);var t=e.h*el;return new mt(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Tn(Rt,Uo,io(Ft,{brighter(e){return new Rt(this.h,this.c,this.l+qo*(e??1),this.opacity)},darker(e){return new Rt(this.h,this.c,this.l-qo*(e??1),this.opacity)},rgb(){return cl(this).rgb()}}));var ul=-.14861,Ti=1.78277,Ai=-.29227,Zo=-.90649,ro=1.97294,Ks=ro*Zo,js=ro*Ti,Qs=Ti*Ai-Zo*ul;function Ph(e){if(e instanceof pn)return new pn(e.h,e.s,e.l,e.opacity);e instanceof Le||(e=Di(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(Qs*o+Ks*t-js*n)/(Qs+Ks-js),i=o-r,a=(ro*(n-r)-Ai*i)/Zo,s=Math.sqrt(a*a+i*i)/(ro*r*(1-r)),c=s?Math.atan2(a,i)*tl-120:NaN;return new pn(c<0?c+360:c,s,r,e.opacity)}function Ko(e,t,n,o){return arguments.length===1?Ph(e):new pn(e,t,n,o??1)}function pn(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Tn(pn,Ko,io(Ft,{brighter(e){return e=e==null?Dn:Math.pow(Dn,e),new pn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?mn:Math.pow(mn,e),new pn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*el,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new Le(255*(t+n*(ul*o+Ti*r)),255*(t+n*(Ai*o+Zo*r)),255*(t+n*(ro*o)),this.opacity)}}));function pl(e,t,n,o,r){var i=e*e,a=i*e;return((1-3*e+3*i-a)*t+(4-6*i+3*a)*n+(1+3*e+3*i-3*a)*o+a*r)/6}function zh(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],a=o>0?e[o-1]:2*r-i,s=o<t-1?e[o+2]:2*i-r;return pl((n-o/t)*t,a,r,i,s)}}function Rh(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],a=e[(o+1)%t],s=e[(o+2)%t];return pl((n-o/t)*t,r,i,a,s)}}var Qo=e=>()=>e;function ml(e,t){return function(n){return e+n*t}}function Dh(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function Hi(e,t){var n=t-e;return n?ml(e,n>180||n<-180?n-360*Math.round(n/360):n):Qo(isNaN(e)?t:e)}function Th(e){return(e=+e)==1?Ze:function(t,n){return n-t?Dh(t,n,e):Qo(isNaN(t)?n:t)}}function Ze(e,t){var n=t-e;return n?ml(e,n):Qo(isNaN(e)?t:e)}var so=(function e(t){var n=Th(t);function o(r,i){var a=n((r=ao(r)).r,(i=ao(i)).r),s=n(r.g,i.g),c=n(r.b,i.b),u=Ze(r.opacity,i.opacity);return function(l){return r.r=a(l),r.g=s(l),r.b=c(l),r.opacity=u(l),r+""}}return o.gamma=e,o})(1);function gl(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),a,s;for(a=0;a<n;++a)s=ao(t[a]),o[a]=s.r||0,r[a]=s.g||0,i[a]=s.b||0;return o=e(o),r=e(r),i=e(i),s.opacity=1,function(c){return s.r=o(c),s.g=r(c),s.b=i(c),s+""}}}var u1=gl(zh),d1=gl(Rh);function Ah(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Oh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Lh(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),a;for(a=0;a<o;++a)r[a]=An(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(s){for(a=0;a<o;++a)i[a]=r[a](s);return i}}function $h(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ct(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Hh(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=An(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var Li=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Oi=new RegExp(Li.source,"g");function Bh(e){return function(){return e}}function Wh(e){return function(t){return e(t)+""}}function Bi(e,t){var n=Li.lastIndex=Oi.lastIndex=0,o,r,i,a=-1,s=[],c=[];for(e=e+"",t=t+"";(o=Li.exec(e))&&(r=Oi.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),s[a]?s[a]+=i:s[++a]=i),(o=o[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,c.push({i:a,x:ct(o,r)})),n=Oi.lastIndex;return n<t.length&&(i=t.slice(n),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?Wh(c[0].x):Bh(t):(t=c.length,function(u){for(var l=0,d;l<t;++l)s[(d=c[l]).i]=d.x(u);return s.join("")})}function An(e,t){var n=typeof t,o;return t==null||n==="boolean"?Qo(t):(n==="number"?ct:n==="string"?(o=Dt(t))?(t=o,so):Bi:t instanceof Dt?so:t instanceof Date?$h:Oh(t)?Ah:Array.isArray(t)?Lh:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Hh:ct)(e,t)}var dl=180/Math.PI,$i={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function hl(e,t,n,o,r,i){var a,s,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(s=Math.sqrt(n*n+o*o))&&(n/=s,o/=s,c/=s),e*o<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*dl,skewX:Math.atan(c)*dl,scaleX:a,scaleY:s}}var jo;function Fh(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?$i:hl(t.a,t.b,t.c,t.d,t.e,t.f)}function Vh(e){return e==null||(jo||(jo=document.createElementNS("http://www.w3.org/2000/svg","g")),jo.setAttribute("transform",e),!(e=jo.transform.baseVal.consolidate()))?$i:(e=e.matrix,hl(e.a,e.b,e.c,e.d,e.e,e.f))}function bl(e,t,n,o){function r(u){return u.length?u.pop()+" ":""}function i(u,l,d,f,p,b){if(u!==d||l!==f){var h=p.push("translate(",null,t,null,n);b.push({i:h-4,x:ct(u,d)},{i:h-2,x:ct(l,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function a(u,l,d,f){u!==l?(u-l>180?l+=360:l-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:ct(u,l)})):l&&d.push(r(d)+"rotate("+l+o)}function s(u,l,d,f){u!==l?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:ct(u,l)}):l&&d.push(r(d)+"skewX("+l+o)}function c(u,l,d,f,p,b){if(u!==d||l!==f){var h=p.push(r(p)+"scale(",null,",",null,")");b.push({i:h-4,x:ct(u,d)},{i:h-2,x:ct(l,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(u,l){var d=[],f=[];return u=e(u),l=e(l),i(u.translateX,u.translateY,l.translateX,l.translateY,d,f),a(u.rotate,l.rotate,d,f),s(u.skewX,l.skewX,d,f),c(u.scaleX,u.scaleY,l.scaleX,l.scaleY,d,f),u=l=null,function(p){for(var b=-1,h=f.length,y;++b<h;)d[(y=f[b]).i]=y.x(p);return d.join("")}}}var yl=bl(Fh,"px, ","px)","deg)"),xl=bl(Vh,", ",")",")"),Xh=1e-12;function fl(e){return((e=Math.exp(e))+1/e)/2}function Gh(e){return((e=Math.exp(e))-1/e)/2}function qh(e){return((e=Math.exp(2*e))-1)/(e+1)}var On=(function e(t,n,o){function r(i,a){var s=i[0],c=i[1],u=i[2],l=a[0],d=a[1],f=a[2],p=l-s,b=d-c,h=p*p+b*b,y,g;if(h<Xh)g=Math.log(f/u)/t,y=function(S){return[s+S*p,c+S*b,u*Math.exp(t*S*g)]};else{var v=Math.sqrt(h),m=(f*f-u*u+o*h)/(2*u*n*v),x=(f*f-u*u-o*h)/(2*f*n*v),k=Math.log(Math.sqrt(m*m+1)-m),M=Math.log(Math.sqrt(x*x+1)-x);g=(M-k)/t,y=function(S){var C=S*g,I=fl(k),L=u/(n*v)*(I*qh(t*C+k)-Gh(k));return[s+L*p,c+L*b,u*I/fl(t*C+k)]}}return y.duration=Math.abs(g)*1e3*t/Math.SQRT2,y}return r.rho=function(i){var a=Math.max(.001,+i),s=a*a,c=s*s;return e(a,s,c)},r})(Math.SQRT2,2,4);function wl(e){return function(t,n){var o=e((t=Yo(t)).h,(n=Yo(n)).h),r=Ze(t.s,n.s),i=Ze(t.l,n.l),a=Ze(t.opacity,n.opacity);return function(s){return t.h=o(s),t.s=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var f1=wl(Hi),p1=wl(Ze);function vl(e){return function(t,n){var o=e((t=Uo(t)).h,(n=Uo(n)).h),r=Ze(t.c,n.c),i=Ze(t.l,n.l),a=Ze(t.opacity,n.opacity);return function(s){return t.h=o(s),t.c=r(s),t.l=i(s),t.opacity=a(s),t+""}}}var m1=vl(Hi),g1=vl(Ze);function kl(e){return(function t(n){n=+n;function o(r,i){var a=e((r=Ko(r)).h,(i=Ko(i)).h),s=Ze(r.s,i.s),c=Ze(r.l,i.l),u=Ze(r.opacity,i.opacity);return function(l){return r.h=a(l),r.s=s(l),r.l=c(Math.pow(l,n)),r.opacity=u(l),r+""}}return o.gamma=t,o})(1)}var h1=kl(Hi),b1=kl(Ze);var Ln=0,co=0,lo=0,Ml=1e3,Jo,uo,er=0,gn=0,nr=0,fo=typeof performance=="object"&&performance.now?performance:Date,Nl=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function or(){return gn||(Nl(Yh),gn=fo.now()+nr)}function Yh(){gn=0}function tr(){this._call=this._time=this._next=null}tr.prototype=Fi.prototype={constructor:tr,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?or():+n)+(t==null?0:+t),!this._next&&uo!==this&&(uo?uo._next=this:Jo=this,uo=this),this._call=e,this._time=n,Wi()},stop:function(){this._call&&(this._call=null,this._time=1/0,Wi())}};function Fi(e,t,n){var o=new tr;return o.restart(e,t,n),o}function Uh(){or(),++Ln;for(var e=Jo,t;e;)(t=gn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ln}function Sl(){gn=(er=fo.now())+nr,Ln=co=0;try{Uh()}finally{Ln=0,Kh(),gn=0}}function Zh(){var e=fo.now(),t=e-er;t>Ml&&(nr-=t,er=e)}function Kh(){for(var e,t=Jo,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Jo=n);uo=e,Wi(o)}function Wi(e){if(!Ln){co&&(co=clearTimeout(co));var t=e-gn;t>24?(e<1/0&&(co=setTimeout(Sl,Math.ceil(e-fo.now()-nr)+1)),lo&&(lo=clearInterval(lo))):(lo||(er=fo.now(),lo=setInterval(Zh,Ml)),Ln=1,Nl(Sl))}}function Vi(e,t,n){var o=new tr;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function El(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Xi=3,w1=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(Xi),v1=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(Xi),k1=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(Xi),jh=Math.PI,S1=jh/2;function rr(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Cl=4/11,M1=6/11,N1=8/11,C1=3/4,E1=9/11,_1=10/11,I1=15/16,P1=21/22,z1=63/64,R1=1/Cl/Cl;var Gi=1.70158,D1=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(Gi),T1=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(Gi),A1=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(Gi),$n=2*Math.PI,qi=1,Yi=.3,O1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=$n);function r(i){return t*rr(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*$n)},r.period=function(i){return e(t,i)},r})(qi,Yi),L1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=$n);function r(i){return 1-t*rr(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*$n)},r.period=function(i){return e(t,i)},r})(qi,Yi),$1=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=$n);function r(i){return((i=i*2-1)<0?t*rr(-i)*Math.sin((o-i)/n):2-t*rr(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*$n)},r.period=function(i){return e(t,i)},r})(qi,Yi);var Qh=ln("start","end","cancel","interrupt"),Jh=[],Pl=0,_l=1,Ui=2,ir=3,Il=4,Zi=5,ar=6;function sr(e,t,n,o,r,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;eb(e,n,{name:t,index:o,group:r,on:Qh,tween:Jh,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Pl})}function Ki(e,t){var n=ut(e,t);if(n.state>Pl)throw new Error("too late; already scheduled");return n}function gt(e,t){var n=ut(e,t);if(n.state>ir)throw new Error("too late; already running");return n}function ut(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function eb(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=Fi(i,0,n.time);function i(u){n.state=_l,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var l,d,f,p;if(n.state!==_l)return c();for(l in o)if(p=o[l],p.name===n.name){if(p.state===ir)return Vi(a);p.state===Il?(p.state=ar,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[l]):+l<t&&(p.state=ar,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[l])}if(Vi(function(){n.state===ir&&(n.state=Il,n.timer.restart(s,n.delay,n.time),s(u))}),n.state=Ui,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Ui){for(n.state=ir,r=new Array(f=n.tween.length),l=0,d=-1;l<f;++l)(p=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function s(u){for(var l=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Zi,1),d=-1,f=r.length;++d<f;)r[d].call(e,l);n.state===Zi&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=ar,n.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function po(e,t){var n=e.__transition,o,r,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((o=n[a]).name!==t){i=!1;continue}r=o.state>Ui&&o.state<Zi,o.state=ar,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[a]}i&&delete e.__transition}}function tb(e){return this.each(function(){po(this,e)})}function nb(e,t){var n,o;return function(){var r=gt(this,e),i=r.tween;if(i!==n){o=n=i;for(var a=0,s=o.length;a<s;++a)if(o[a].name===t){o=o.slice(),o.splice(a,1);break}}r.tween=o}}function ob(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=gt(this,e),a=i.tween;if(a!==o){r=(o=a).slice();for(var s={name:t,value:n},c=0,u=r.length;c<u;++c)if(r[c].name===t){r[c]=s;break}c===u&&r.push(s)}i.tween=r}}function rb(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ut(this.node(),n).tween,r=0,i=o.length,a;r<i;++r)if((a=o[r]).name===e)return a.value;return null}return this.each((t==null?nb:ob)(n,e,t))}function ji(e,t,n){var o=e._id;return e.each(function(){var r=gt(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ut(r,o).value[t]}}function zl(e,t){var n;return(typeof t=="number"?ct:t instanceof Dt?so:(n=Dt(t))?(t=n,so):Bi)(e,t)}function ib(e){return function(){this.removeAttribute(e)}}function ab(e){return function(){this.removeAttributeNS(e.space,e.local)}}function sb(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===o?i:i=t(o=a,n)}}function lb(e,t,n){var o,r=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===o?i:i=t(o=a,n)}}function cb(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function ub(e,t,n){var o,r,i;return function(){var a,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=s+"",a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s)))}}function db(e,t){var n=to(e),o=n==="transform"?xl:zl;return this.attrTween(e,typeof t=="function"?(n.local?ub:cb)(n,o,ji(this,"attr."+e,t)):t==null?(n.local?ab:ib)(n):(n.local?lb:sb)(n,o,t))}function fb(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function pb(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function mb(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&pb(e,i)),n}return r._value=t,r}function gb(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&fb(e,i)),n}return r._value=t,r}function hb(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=to(e);return this.tween(n,(o.local?mb:gb)(o,t))}function bb(e,t){return function(){Ki(this,e).delay=+t.apply(this,arguments)}}function yb(e,t){return t=+t,function(){Ki(this,e).delay=t}}function xb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?bb:yb)(t,e)):ut(this.node(),t).delay}function wb(e,t){return function(){gt(this,e).duration=+t.apply(this,arguments)}}function vb(e,t){return t=+t,function(){gt(this,e).duration=t}}function kb(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?wb:vb)(t,e)):ut(this.node(),t).duration}function Sb(e,t){if(typeof t!="function")throw new Error;return function(){gt(this,e).ease=t}}function Mb(e){var t=this._id;return arguments.length?this.each(Sb(t,e)):ut(this.node(),t).ease}function Nb(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;gt(this,e).ease=n}}function Cb(e){if(typeof e!="function")throw new Error;return this.each(Nb(this._id,e))}function Eb(e){typeof e!="function"&&(e=vi(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],a=i.length,s=o[r]=[],c,u=0;u<a;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&s.push(c);return new At(o,this._parents,this._name,this._id)}function _b(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),a=new Array(o),s=0;s<i;++s)for(var c=t[s],u=n[s],l=c.length,d=a[s]=new Array(l),f,p=0;p<l;++p)(f=c[p]||u[p])&&(d[p]=f);for(;s<o;++s)a[s]=t[s];return new At(a,this._parents,this._name,this._id)}function Ib(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Pb(e,t,n){var o,r,i=Ib(t)?Ki:gt;return function(){var a=i(this,e),s=a.on;s!==o&&(r=(o=s).copy()).on(t,n),a.on=r}}function zb(e,t){var n=this._id;return arguments.length<2?ut(this.node(),n).on.on(e):this.each(Pb(n,e,t))}function Rb(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Db(){return this.on("end.remove",Rb(this._id))}function Tb(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Wo(e));for(var o=this._groups,r=o.length,i=new Array(r),a=0;a<r;++a)for(var s=o[a],c=s.length,u=i[a]=new Array(c),l,d,f=0;f<c;++f)(l=s[f])&&(d=e.call(l,l.__data__,f,s))&&("__data__"in l&&(d.__data__=l.__data__),u[f]=d,sr(u[f],t,n,f,u,ut(l,n)));return new At(i,this._parents,t,n)}function Ab(e){var t=this._name,n=this._id;typeof e!="function"&&(e=wi(e));for(var o=this._groups,r=o.length,i=[],a=[],s=0;s<r;++s)for(var c=o[s],u=c.length,l,d=0;d<u;++d)if(l=c[d]){for(var f=e.call(l,l.__data__,d,c),p,b=ut(l,n),h=0,y=f.length;h<y;++h)(p=f[h])&&sr(p,t,n,h,f,b);i.push(f),a.push(l)}return new At(i,a,t,n)}var Ob=un.prototype.constructor;function Lb(){return new Ob(this._groups,this._parents)}function $b(e,t){var n,o,r;return function(){var i=cn(this,e),a=(this.style.removeProperty(e),cn(this,e));return i===a?null:i===n&&a===o?r:r=t(n=i,o=a)}}function Rl(e){return function(){this.style.removeProperty(e)}}function Hb(e,t,n){var o,r=n+"",i;return function(){var a=cn(this,e);return a===r?null:a===o?i:i=t(o=a,n)}}function Bb(e,t,n){var o,r,i;return function(){var a=cn(this,e),s=n(this),c=s+"";return s==null&&(c=s=(this.style.removeProperty(e),cn(this,e))),a===c?null:a===o&&c===r?i:(r=c,i=t(o=a,s))}}function Wb(e,t){var n,o,r,i="style."+t,a="end."+i,s;return function(){var c=gt(this,e),u=c.on,l=c.value[i]==null?s||(s=Rl(t)):void 0;(u!==n||r!==l)&&(o=(n=u).copy()).on(a,r=l),c.on=o}}function Fb(e,t,n){var o=(e+="")=="transform"?yl:zl;return t==null?this.styleTween(e,$b(e,o)).on("end.style."+e,Rl(e)):typeof t=="function"?this.styleTween(e,Bb(e,o,ji(this,"style."+e,t))).each(Wb(this._id,e)):this.styleTween(e,Hb(e,o,t),n).on("end.style."+e,null)}function Vb(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Xb(e,t,n){var o,r;function i(){var a=t.apply(this,arguments);return a!==r&&(o=(r=a)&&Vb(e,a,n)),o}return i._value=t,i}function Gb(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Xb(e,t,n??""))}function qb(e){return function(){this.textContent=e}}function Yb(e){return function(){var t=e(this);this.textContent=t??""}}function Ub(e){return this.tween("text",typeof e=="function"?Yb(ji(this,"text",e)):qb(e==null?"":e+""))}function Zb(e){return function(t){this.textContent=e.call(this,t)}}function Kb(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Zb(r)),t}return o._value=e,o}function jb(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Kb(e))}function Qb(){for(var e=this._name,t=this._id,n=Dl(),o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)if(c=a[u]){var l=ut(c,t);sr(c,e,n,u,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new At(o,this._parents,e,n)}function Jb(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,a){var s={value:a},c={value:function(){--r===0&&i()}};n.each(function(){var u=gt(this,o),l=u.on;l!==e&&(t=(e=l).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),u.on=t}),r===0&&i()})}var e0=0;function At(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function t0(e){return un().transition(e)}function Dl(){return++e0}var Tt=un.prototype;At.prototype=t0.prototype={constructor:At,select:Tb,selectAll:Ab,selectChild:Tt.selectChild,selectChildren:Tt.selectChildren,filter:Eb,merge:_b,selection:Lb,transition:Qb,call:Tt.call,nodes:Tt.nodes,node:Tt.node,size:Tt.size,empty:Tt.empty,each:Tt.each,on:zb,attr:db,attrTween:hb,style:Fb,styleTween:Gb,text:Ub,textTween:jb,remove:Db,tween:rb,delay:xb,duration:kb,ease:Mb,easeVarying:Cb,end:Jb,[Symbol.iterator]:Tt[Symbol.iterator]};var n0={time:null,delay:0,duration:250,ease:El};function o0(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function r0(e){var t,n;e instanceof At?(t=e._id,e=e._name):(t=Dl(),(n=n0).time=or(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var a=o[i],s=a.length,c,u=0;u<s;++u)(c=a[u])&&sr(c,e,t,u,a,n||o0(c,t));return new At(o,this._parents,e,t)}un.prototype.interrupt=tb;un.prototype.transition=r0;var lr=e=>()=>e;function i0(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Ot(e,t,n){this.k=e,this.x=t,this.y=n}Ot.prototype={constructor:Ot,scale:function(e){return e===1?this:new Ot(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ot(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var go=new Ot(1,0,0);Ji.prototype=Ot.prototype;function Ji(e){for(;!e.__zoom;)if(!(e=e.parentNode))return go;return e.__zoom}function Qi(e){e.stopImmediatePropagation()}function mo(e){e.preventDefault(),e.stopImmediatePropagation()}function a0(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function s0(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Tl(){return this.__zoom||go}function l0(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function c0(){return navigator.maxTouchPoints||"ontouchstart"in this}function u0(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function ea(){var e=a0,t=s0,n=u0,o=l0,r=c0,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],s=250,c=On,u=ln("start","zoom","end"),l,d,f,p=500,b=150,h=0,y=10;function g(w){w.property("__zoom",Tl).on("wheel.zoom",C,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",L).filter(r).on("touchstart.zoom",R).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",P).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(w,_,E,N){var z=w.selection?w.selection():w;z.property("__zoom",Tl),w!==z?k(w,_,E,N):z.interrupt().each(function(){M(this,arguments).event(N).start().zoom(null,typeof _=="function"?_.apply(this,arguments):_).end()})},g.scaleBy=function(w,_,E,N){g.scaleTo(w,function(){var z=this.__zoom.k,D=typeof _=="function"?_.apply(this,arguments):_;return z*D},E,N)},g.scaleTo=function(w,_,E,N){g.transform(w,function(){var z=t.apply(this,arguments),D=this.__zoom,F=E==null?x(z):typeof E=="function"?E.apply(this,arguments):E,W=D.invert(F),V=typeof _=="function"?_.apply(this,arguments):_;return n(m(v(D,V),F,W),z,a)},E,N)},g.translateBy=function(w,_,E,N){g.transform(w,function(){return n(this.__zoom.translate(typeof _=="function"?_.apply(this,arguments):_,typeof E=="function"?E.apply(this,arguments):E),t.apply(this,arguments),a)},null,N)},g.translateTo=function(w,_,E,N,z){g.transform(w,function(){var D=t.apply(this,arguments),F=this.__zoom,W=N==null?x(D):typeof N=="function"?N.apply(this,arguments):N;return n(go.translate(W[0],W[1]).scale(F.k).translate(typeof _=="function"?-_.apply(this,arguments):-_,typeof E=="function"?-E.apply(this,arguments):-E),D,a)},N,z)};function v(w,_){return _=Math.max(i[0],Math.min(i[1],_)),_===w.k?w:new Ot(_,w.x,w.y)}function m(w,_,E){var N=_[0]-E[0]*w.k,z=_[1]-E[1]*w.k;return N===w.x&&z===w.y?w:new Ot(w.k,N,z)}function x(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function k(w,_,E,N){w.on("start.zoom",function(){M(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){M(this,arguments).event(N).end()}).tween("zoom",function(){var z=this,D=arguments,F=M(z,D).event(N),W=t.apply(z,D),V=E==null?x(W):typeof E=="function"?E.apply(z,D):E,K=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),X=z.__zoom,j=typeof _=="function"?_.apply(z,D):_,ce=c(X.invert(V).concat(K/X.k),j.invert(V).concat(K/j.k));return function(B){if(B===1)B=j;else{var O=ce(B),Y=K/O[2];B=new Ot(Y,V[0]-O[0]*Y,V[1]-O[1]*Y)}F.zoom(null,B)}})}function M(w,_,E){return!E&&w.__zooming||new S(w,_)}function S(w,_){this.that=w,this.args=_,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,_),this.taps=0}S.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,_){return this.mouse&&w!=="mouse"&&(this.mouse[1]=_.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=_.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=_.invert(this.touch1[0])),this.that.__zoom=_,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var _=He(this.that).datum();u.call(w,this.that,new i0(w,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),_)}};function C(w,..._){if(!e.apply(this,arguments))return;var E=M(this,_).event(w),N=this.__zoom,z=Math.max(i[0],Math.min(i[1],N.k*Math.pow(2,o.apply(this,arguments)))),D=Ue(w);if(E.wheel)(E.mouse[0][0]!==D[0]||E.mouse[0][1]!==D[1])&&(E.mouse[1]=N.invert(E.mouse[0]=D)),clearTimeout(E.wheel);else{if(N.k===z)return;E.mouse=[D,N.invert(D)],po(this),E.start()}mo(w),E.wheel=setTimeout(F,b),E.zoom("mouse",n(m(v(N,z),E.mouse[0],E.mouse[1]),E.extent,a));function F(){E.wheel=null,E.end()}}function I(w,..._){if(f||!e.apply(this,arguments))return;var E=w.currentTarget,N=M(this,_,!0).event(w),z=He(w.view).on("mousemove.zoom",V,!0).on("mouseup.zoom",K,!0),D=Ue(w,E),F=w.clientX,W=w.clientY;Ni(w.view),Qi(w),N.mouse=[D,this.__zoom.invert(D)],po(this),N.start();function V(X){if(mo(X),!N.moved){var j=X.clientX-F,ce=X.clientY-W;N.moved=j*j+ce*ce>h}N.event(X).zoom("mouse",n(m(N.that.__zoom,N.mouse[0]=Ue(X,E),N.mouse[1]),N.extent,a))}function K(X){z.on("mousemove.zoom mouseup.zoom",null),Ci(X.view,N.moved),mo(X),N.event(X).end()}}function L(w,..._){if(e.apply(this,arguments)){var E=this.__zoom,N=Ue(w.changedTouches?w.changedTouches[0]:w,this),z=E.invert(N),D=E.k*(w.shiftKey?.5:2),F=n(m(v(E,D),N,z),t.apply(this,_),a);mo(w),s>0?He(this).transition().duration(s).call(k,F,N,w):He(this).call(g.transform,F,N,w)}}function R(w,..._){if(e.apply(this,arguments)){var E=w.touches,N=E.length,z=M(this,_,w.changedTouches.length===N).event(w),D,F,W,V;for(Qi(w),F=0;F<N;++F)W=E[F],V=Ue(W,this),V=[V,this.__zoom.invert(V),W.identifier],z.touch0?!z.touch1&&z.touch0[2]!==V[2]&&(z.touch1=V,z.taps=0):(z.touch0=V,D=!0,z.taps=1+!!l);l&&(l=clearTimeout(l)),D&&(z.taps<2&&(d=V[0],l=setTimeout(function(){l=null},p)),po(this),z.start())}}function A(w,..._){if(this.__zooming){var E=M(this,_).event(w),N=w.changedTouches,z=N.length,D,F,W,V;for(mo(w),D=0;D<z;++D)F=N[D],W=Ue(F,this),E.touch0&&E.touch0[2]===F.identifier?E.touch0[0]=W:E.touch1&&E.touch1[2]===F.identifier&&(E.touch1[0]=W);if(F=E.that.__zoom,E.touch1){var K=E.touch0[0],X=E.touch0[1],j=E.touch1[0],ce=E.touch1[1],B=(B=j[0]-K[0])*B+(B=j[1]-K[1])*B,O=(O=ce[0]-X[0])*O+(O=ce[1]-X[1])*O;F=v(F,Math.sqrt(B/O)),W=[(K[0]+j[0])/2,(K[1]+j[1])/2],V=[(X[0]+ce[0])/2,(X[1]+ce[1])/2]}else if(E.touch0)W=E.touch0[0],V=E.touch0[1];else return;E.zoom("touch",n(m(F,W,V),E.extent,a))}}function P(w,..._){if(this.__zooming){var E=M(this,_).event(w),N=w.changedTouches,z=N.length,D,F;for(Qi(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),D=0;D<z;++D)F=N[D],E.touch0&&E.touch0[2]===F.identifier?delete E.touch0:E.touch1&&E.touch1[2]===F.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(F=Ue(F,this),Math.hypot(d[0]-F[0],d[1]-F[1])<y)){var W=He(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return g.wheelDelta=function(w){return arguments.length?(o=typeof w=="function"?w:lr(+w),g):o},g.filter=function(w){return arguments.length?(e=typeof w=="function"?w:lr(!!w),g):e},g.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:lr(!!w),g):r},g.extent=function(w){return arguments.length?(t=typeof w=="function"?w:lr([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),g):t},g.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],g):[i[0],i[1]]},g.translateExtent=function(w){return arguments.length?(a[0][0]=+w[0][0],a[1][0]=+w[1][0],a[0][1]=+w[0][1],a[1][1]=+w[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(w){return arguments.length?(n=w,g):n},g.duration=function(w){return arguments.length?(s=+w,g):s},g.interpolate=function(w){return arguments.length?(c=w,g):c},g.on=function(){var w=u.on.apply(u,arguments);return w===u?g:w},g.clickDistance=function(w){return arguments.length?(h=(w=+w)*w,g):Math.sqrt(h)},g.tapDistance=function(w){return arguments.length?(y=+w,g):y},g}var et={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Vn=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],ia=["Enter"," ","Escape"],aa={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Gt;(function(e){e.Strict="strict",e.Loose="loose"})(Gt||(Gt={}));var Lt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Lt||(Lt={}));var hn;(function(e){e.Partial="partial",e.Full="full"})(hn||(hn={}));var sa={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},ht;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(ht||(ht={}));var Wn;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Wn||(Wn={}));var ne;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ne||(ne={}));var Al={[ne.Left]:ne.Right,[ne.Right]:ne.Left,[ne.Top]:ne.Bottom,[ne.Bottom]:ne.Top};function la(e){return e===null?null:e?"valid":"invalid"}var ca=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Ul=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),ua=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var bo=(e,t=[0,0])=>{let{width:n,height:o}=dt(e),r=e.origin??t,i=n*r[0],a=o*r[1];return{x:e.position.x-i,y:e.position.y-a}},da=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=e.reduce((o,r)=>{let i=typeof r=="string",a=!t.nodeLookup&&!i?r:void 0;t.nodeLookup&&(a=i?t.nodeLookup.get(r):ua(r)?r:t.nodeLookup.get(r.id));let s=a?dr(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return mr(o,s)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return gr(n)},Xn=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=mr(n,dr(r)),o=!0)}),o?gr(n):{x:0,y:0,width:0,height:0}},fr=(e,t,[n,o,r]=[0,0,1],i=!1,a=!1)=>{let s=(t.x-n)/r,c=(t.y-o)/r,u=t.width/r,l=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:b=!0,hidden:h=!1}=f;if(a&&!b||h)continue;let y=p.width??f.width??f.initialWidth??0,g=p.height??f.height??f.initialHeight??0,{x:v,y:m}=f.internals.positionAbsolute,x=Jl(s,c,u,l,v,m,y,g),k=y*g,M=i&&x>0;(!f.internals.handleBounds||M||x>=k||f.dragging)&&d.push(f)}return d},Zl=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function d0(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:a,height:s}=dt(r);i=a>0&&s>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Kl({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},a){if(e.size===0)return!0;let s=d0(e,a),c=Xn(s),u=xo(c,t,n,a?.minZoom??r,a?.maxZoom??i,a?.padding??.1);return await o.setViewport(u,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),!0}function fa({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let a=n.get(e),s=a.parentId?n.get(a.parentId):void 0,{x:c,y:u}=s?s.internals.positionAbsolute:{x:0,y:0},l=a.origin??o,d=a.extent||r;if(a.extent==="parent"&&!a.expandParent)if(!s)i?.("005",et.error005());else{let p=s.measured.width,b=s.measured.height;p&&b&&(d=[[c,u],[c+p,u+b]])}else s&&xn(a.extent)&&(d=[[a.extent[0][0]+c,a.extent[0][1]+u],[a.extent[1][0]+c,a.extent[1][1]+u]]);let f=xn(d)?bn(t,d,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&i?.("015",et.error015()),{position:{x:f.x-c+(a.measured.width??0)*l[0],y:f.y-u+(a.measured.height??0)*l[1]},positionAbsolute:f}}async function jl({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),a=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),b=!p&&f.parentId&&a.find(h=>h.id===f.parentId);(p||b)&&a.push(f)}let s=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),l=Zl(a,c);for(let f of c)s.has(f.id)&&!l.find(b=>b.id===f.id)&&l.push(f);if(!r)return{edges:l,nodes:a};let d=await r({nodes:a,edges:l});return typeof d=="boolean"?d?{edges:l,nodes:a}:{edges:[],nodes:[]}:d}var Fn=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),bn=(e={x:0,y:0},t,n)=>({x:Fn(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Fn(e.y,t[0][1],t[1][1]-(n?.height??0))});function Ql(e,t,n){let{width:o,height:r}=dt(n),{x:i,y:a}=n.internals.positionAbsolute;return bn(e,[[i,a],[i+o,a+r]],t)}var Ol=(e,t,n)=>e<t?Fn(Math.abs(e-t),1,t)/t:e>n?-Fn(Math.abs(e-n),1,t)/t:0,pr=(e,t,n=15,o=40)=>{let r=Ol(e.x,o,t.width-o)*n,i=Ol(e.y,o,t.height-o)*n;return[r,i]},mr=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),ra=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),gr=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Gn=(e,t=[0,0])=>{let{x:n,y:o}=ua(e)?e.internals.positionAbsolute:bo(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},dr=(e,t=[0,0])=>{let{x:n,y:o}=ua(e)?e.internals.positionAbsolute:bo(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},pa=(e,t)=>gr(mr(ra(e),ra(t))),Jl=(e,t,n,o,r,i,a,s)=>{let c=Math.max(0,Math.min(e+n,r+a)-Math.max(e,r)),u=Math.max(0,Math.min(t+o,i+s)-Math.max(t,i));return Math.ceil(c*u)},yo=(e,t)=>Jl(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),ma=e=>ot(e.width)&&ot(e.height)&&ot(e.x)&&ot(e.y),ot=e=>!isNaN(e)&&isFinite(e),ga=(e,t)=>(n,o)=>{},qn=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Yn=({x:e,y:t},[n,o,r],i=!1,a=[1,1])=>{let s={x:(e-n)/r,y:(t-o)/r};return i?qn(s,a):s},yn=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function Hn(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function f0(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=Hn(e,n),r=Hn(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=Hn(e.top??e.y??0,n),r=Hn(e.bottom??e.y??0,n),i=Hn(e.left??e.x??0,t),a=Hn(e.right??e.x??0,t);return{top:o,right:a,bottom:r,left:i,x:i+a,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function p0(e,t,n,o,r,i){let{x:a,y:s}=yn(e,[t,n,o]),{x:c,y:u}=yn({x:e.x+e.width,y:e.y+e.height},[t,n,o]),l=r-c,d=i-u;return{left:Math.floor(a),top:Math.floor(s),right:Math.floor(l),bottom:Math.floor(d)}}var xo=(e,t,n,o,r,i)=>{let a=f0(i,t,n),s=(t-a.x)/e.width,c=(n-a.y)/e.height,u=Math.min(s,c),l=Fn(u,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*l,b=n/2-f*l,h=p0(e,p,b,l,t,n),y={left:Math.min(h.left-a.left,0),top:Math.min(h.top-a.top,0),right:Math.min(h.right-a.right,0),bottom:Math.min(h.bottom-a.bottom,0)};return{x:p-y.left+y.right,y:b-y.top+y.bottom,zoom:l}},Un=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function xn(e){return e!=null&&e!=="parent"}function dt(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function ha(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function ba(e,t={width:0,height:0},n,o,r){let i={...e},a=o.get(n);if(a){let s=a.origin||r;i.x+=a.internals.positionAbsolute.x-(t.width??0)*s[0],i.y+=a.internals.positionAbsolute.y-(t.height??0)*s[1]}return i}function ya(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function ec(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function tc(e){return{...aa,...e||{}}}function ho(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:a}=rt(e),s=Yn({x:i-(r?.left??0),y:a-(r?.top??0)},o),{x:c,y:u}=n?qn(s,t):s;return{xSnapped:c,ySnapped:u,...s}}var hr=e=>({width:e.offsetWidth,height:e.offsetHeight}),xa=e=>e?.getRootNode?.()||window?.document,m0=["INPUT","SELECT","TEXTAREA"];function wa(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:m0.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var va=e=>"clientX"in e,rt=(e,t)=>{let n=va(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Ll=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(a=>{let s=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:r,position:a.getAttribute("data-handlepos"),x:(s.left-n.left)/o,y:(s.top-n.top)/o,...hr(a)}})};function br({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:a,targetControlY:s}){let c=e*.125+r*.375+a*.375+n*.125,u=t*.125+i*.375+s*.375+o*.125,l=Math.abs(c-e),d=Math.abs(u-t);return[c,u,l,d]}function cr(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function $l({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case ne.Left:return[t-cr(t-o,i),n];case ne.Right:return[t+cr(o-t,i),n];case ne.Top:return[t,n-cr(n-r,i)];case ne.Bottom:return[t,n+cr(r-n,i)]}}function yr({sourceX:e,sourceY:t,sourcePosition:n=ne.Bottom,targetX:o,targetY:r,targetPosition:i=ne.Top,curvature:a=.25}){let[s,c]=$l({pos:n,x1:e,y1:t,x2:o,y2:r,c:a}),[u,l]=$l({pos:i,x1:o,y1:r,x2:e,y2:t,c:a}),[d,f,p,b]=br({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:c,targetControlX:u,targetControlY:l});return[`M${e},${t} C${s},${c} ${u},${l} ${o},${r}`,d,f,p,b]}function ka({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,a=Math.abs(o-t)/2,s=o<t?o+a:o-a;return[i,s,r,a]}function nc({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let a=r&&n?o+1e3:o,s=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return a+s}function oc({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=mr(dr(e),dr(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let a={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return yo(a,gr(i))>0}var g0=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,h0=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),rc=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",et.error006()),t;let o=n.getEdgeId||g0,r;return ca(e)?r={...e}:r={...e,id:o(e)},h0(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function xr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,a,s]=ka({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,a,s]}var Hl={[ne.Left]:{x:-1,y:0},[ne.Right]:{x:1,y:0},[ne.Top]:{x:0,y:-1},[ne.Bottom]:{x:0,y:1}},b0=({source:e,sourcePosition:t=ne.Bottom,target:n})=>t===ne.Left||t===ne.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Bl=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function y0({source:e,sourcePosition:t=ne.Bottom,target:n,targetPosition:o=ne.Top,center:r,offset:i,stepPosition:a}){let s=Hl[t],c=Hl[o],u={x:e.x+s.x*i,y:e.y+s.y*i},l={x:n.x+c.x*i,y:n.y+c.y*i},d=b0({source:u,sourcePosition:t,target:l}),f=d.x!==0?"x":"y",p=d[f],b=[],h,y,g={x:0,y:0},v={x:0,y:0},[,,m,x]=ka({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(s[f]*c[f]===-1){f==="x"?(h=r.x??u.x+(l.x-u.x)*a,y=r.y??(u.y+l.y)/2):(h=r.x??(u.x+l.x)/2,y=r.y??u.y+(l.y-u.y)*a);let C=[{x:h,y:u.y},{x:h,y:l.y}],I=[{x:u.x,y},{x:l.x,y}];s[f]===p?b=f==="x"?C:I:b=f==="x"?I:C}else{let C=[{x:u.x,y:l.y}],I=[{x:l.x,y:u.y}];if(f==="x"?b=s.x===p?I:C:b=s.y===p?C:I,t===o){let w=Math.abs(e[f]-n[f]);if(w<=i){let _=Math.min(i-1,i-w);s[f]===p?g[f]=(u[f]>e[f]?-1:1)*_:v[f]=(l[f]>n[f]?-1:1)*_}}if(t!==o){let w=f==="x"?"y":"x",_=s[f]===c[w],E=u[w]>l[w],N=u[w]<l[w];(s[f]===1&&(!_&&E||_&&N)||s[f]!==1&&(!_&&N||_&&E))&&(b=f==="x"?C:I)}let L={x:u.x+g.x,y:u.y+g.y},R={x:l.x+v.x,y:l.y+v.y},A=Math.max(Math.abs(L.x-b[0].x),Math.abs(R.x-b[0].x)),P=Math.max(Math.abs(L.y-b[0].y),Math.abs(R.y-b[0].y));A>=P?(h=(L.x+R.x)/2,y=b[0].y):(h=b[0].x,y=(L.y+R.y)/2)}let k={x:u.x+g.x,y:u.y+g.y},M={x:l.x+v.x,y:l.y+v.y};return[[e,...k.x!==b[0].x||k.y!==b[0].y?[k]:[],...b,...M.x!==b[b.length-1].x||M.y!==b[b.length-1].y?[M]:[],n],h,y,m,x]}function x0(e,t,n,o){let r=Math.min(Bl(e,t)/2,Bl(t,n)/2,o),{x:i,y:a}=t;if(e.x===i&&i===n.x||e.y===a&&a===n.y)return`L${i} ${a}`;if(e.y===a){let u=e.x<n.x?-1:1,l=e.y<n.y?1:-1;return`L ${i+r*u},${a}Q ${i},${a} ${i},${a+r*l}`}let s=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${a+r*c}Q ${i},${a} ${i+r*s},${a}`}function wo({sourceX:e,sourceY:t,sourcePosition:n=ne.Bottom,targetX:o,targetY:r,targetPosition:i=ne.Top,borderRadius:a=5,centerX:s,centerY:c,offset:u=20,stepPosition:l=.5}){let[d,f,p,b,h]=y0({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:s,y:c},offset:u,stepPosition:l}),y=`M${d[0].x} ${d[0].y}`;for(let g=1;g<d.length-1;g++)y+=x0(d[g-1],d[g],d[g+1],a);return y+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[y,f,p,b,h]}function Wl(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function ic(e){let{sourceNode:t,targetNode:n}=e;if(!Wl(t)||!Wl(n))return null;let o=t.internals.handleBounds||Fl(t.handles),r=n.internals.handleBounds||Fl(n.handles),i=Vl(o?.source??[],e.sourceHandle),a=Vl(e.connectionMode===Gt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!a)return e.onError?.("008",et.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let s=i?.position||ne.Bottom,c=a?.position||ne.Top,u=qt(t,i,s),l=qt(n,a,c);return{sourceX:u.x,sourceY:u.y,targetX:l.x,targetY:l.y,sourcePosition:s,targetPosition:c}}function Fl(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function qt(e,t,n=ne.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:s}=t??dt(e);if(o)return{x:r+a/2,y:i+s/2};switch(t?.position??n){case ne.Top:return{x:r+a/2,y:i};case ne.Right:return{x:r+a,y:i+s/2};case ne.Bottom:return{x:r+a/2,y:i+s};case ne.Left:return{x:r,y:i+s/2}}}function Vl(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function wr(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function ac(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((a,s)=>([s.markerStart||o,s.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let u=wr(c,t);i.has(u)||(a.push({id:u,color:c.color||n,...c}),i.add(u))}}),a),[]).sort((a,s)=>a.id.localeCompare(s.id))}var sc=1e3,w0=10,Sa={nodeOrigin:[0,0],nodeExtent:Vn,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},v0={...Sa,checkEquality:!0};function Ma(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function lc(e,t,n){let o=Ma(Sa,n);for(let r of e.values())if(r.parentId)Ca(r,e,t,o);else{let i=bo(r,o.nodeOrigin),a=xn(r.extent)?r.extent:o.nodeExtent,s=bn(i,a,dt(r));r.internals.positionAbsolute=s}}function k0(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function Na(e){return e==="manual"}function vr(e,t,n,o={}){let r=Ma(v0,o),i={i:0},a=new Map(t),s=r?.elevateNodesOnSelect&&!Na(r.zIndexMode)?sc:0,c=e.length>0,u=!1;t.clear(),n.clear();for(let l of e){let d=a.get(l.id);if(r.checkEquality&&l===d?.internals.userNode)t.set(l.id,d);else{let f=bo(l,r.nodeOrigin),p=xn(l.extent)?l.extent:r.nodeExtent,b=bn(f,p,dt(l));d={...r.defaults,...l,measured:{width:l.measured?.width,height:l.measured?.height},internals:{positionAbsolute:b,handleBounds:k0(l,d),z:cc(l,s,r.zIndexMode),userNode:l}},t.set(l.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),l.parentId&&Ca(d,t,n,o,i),u||=l.selected??!1}return{nodesInitialized:c,hasSelectedNodes:u}}function S0(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function Ca(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:a,nodeExtent:s,zIndexMode:c}=Ma(Sa,o),u=e.parentId,l=t.get(u);if(!l){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}S0(e,n),r&&!l.parentId&&l.internals.rootParentIndex===void 0&&c==="auto"&&(l.internals.rootParentIndex=++r.i,l.internals.z=l.internals.z+r.i*w0),r&&l.internals.rootParentIndex!==void 0&&(r.i=l.internals.rootParentIndex);let d=i&&!Na(c)?sc:0,{x:f,y:p,z:b}=M0(e,l,a,s,d,c),{positionAbsolute:h}=e.internals,y=f!==h.x||p!==h.y;(y||b!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:y?{x:f,y:p}:h,z:b}})}function cc(e,t,n){let o=ot(e.zIndex)?e.zIndex:0;return Na(n)?o:o+(e.selected?t:0)}function M0(e,t,n,o,r,i){let{x:a,y:s}=t.internals.positionAbsolute,c=dt(e),u=bo(e,n),l=xn(e.extent)?bn(u,e.extent,c):u,d=bn({x:a+l.x,y:s+l.y},o,c);e.extent==="parent"&&(d=Ql(d,c,t));let f=cc(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function kr(e,t,n,o=[0,0]){let r=[],i=new Map;for(let a of e){let s=t.get(a.parentId);if(!s)continue;let c=i.get(a.parentId)?.expandedRect??Gn(s),u=pa(c,a.rect);i.set(a.parentId,{expandedRect:u,parent:s})}return i.size>0&&i.forEach(({expandedRect:a,parent:s},c)=>{let u=s.internals.positionAbsolute,l=dt(s),d=s.origin??o,f=a.x<u.x?Math.round(Math.abs(u.x-a.x)):0,p=a.y<u.y?Math.round(Math.abs(u.y-a.y)):0,b=Math.max(l.width,Math.round(a.width)),h=Math.max(l.height,Math.round(a.height)),y=(b-l.width)*d[0],g=(h-l.height)*d[1];(f>0||p>0||y||g)&&(r.push({id:c,type:"position",position:{x:s.position.x-f+y,y:s.position.y-p+g}}),n.get(c)?.forEach(v=>{e.some(m=>m.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+f,y:v.position.y+p}})})),(l.width<a.width||l.height<a.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:b+(f?d[0]*f-y:0),height:h+(p?d[1]*p-g:0)}})}),r}function uc(e,t,n,o,r,i,a){let s=o?.querySelector(".xyflow__viewport"),c=!1;if(!s)return{changes:[],updatedInternals:c};let u=[],l=window.getComputedStyle(s),{m22:d}=new window.DOMMatrixReadOnly(l.transform),f=[];for(let p of e.values()){let b=t.get(p.id);if(!b)continue;if(b.hidden){t.set(b.id,{...b,internals:{...b.internals,handleBounds:void 0}}),c=!0;continue}let h=hr(p.nodeElement),y=b.measured.width!==h.width||b.measured.height!==h.height;if(!!(h.width&&h.height&&(y||!b.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),m=xn(b.extent)?b.extent:i,{positionAbsolute:x}=b.internals;if(b.parentId&&b.extent==="parent"){let M=t.get(b.parentId);M&&(x=Ql(x,h,M))}else m&&(x=bn(x,m,h));let k={...b,measured:h,internals:{...b.internals,positionAbsolute:x,handleBounds:{source:Ll("source",p.nodeElement,v,d,b.id),target:Ll("target",p.nodeElement,v,d,b.id)}}};t.set(b.id,k),b.parentId&&Ca(k,t,n,{nodeOrigin:r,zIndexMode:a}),c=!0,y&&(u.push({id:b.id,type:"dimensions",dimensions:h}),b.expandParent&&b.parentId&&f.push({id:b.id,parentId:b.parentId,rect:Gn(k,r)}))}}if(f.length>0){let p=kr(f,t,n,r);u.push(...p)}return{changes:u,updatedInternals:c}}async function dc({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2])}function Xl(e,t,n,o,r,i){let a=r,s=o.get(a)||new Map;o.set(a,s.set(n,t)),a=`${r}-${e}`;let c=o.get(a)||new Map;if(o.set(a,c.set(n,t)),i){a=`${r}-${e}-${i}`;let u=o.get(a)||new Map;o.set(a,u.set(n,t))}}function Ea(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:a=null,targetHandle:s=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:a,targetHandle:s},u=`${r}-${a}--${i}-${s}`,l=`${i}-${s}--${r}-${a}`;Xl("source",c,l,e,r,a),Xl("target",c,u,e,i,s),t.set(o.id,o)}}function fc(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:fc(n,t):!1}function Gl(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function N0(e,t,n,o){let r=new Map;for(let[i,a]of e)if((a.selected||a.id===o)&&(!a.parentId||!fc(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){let s=e.get(i);s&&r.set(i,{id:i,position:s.position||{x:0,y:0},distance:{x:n.x-s.internals.positionAbsolute.x,y:n.y-s.internals.positionAbsolute.y},extent:s.extent,parentId:s.parentId,origin:s.origin,expandParent:s.expandParent,internals:{positionAbsolute:s.internals.positionAbsolute||{x:0,y:0}},measured:{width:s.measured.width??0,height:s.measured.height??0}})}return r}function ta({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[a,s]of t){let c=n.get(a)?.internals.userNode;c&&r.push({...c,position:s.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function C0({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},a=qn(i,t);return{x:a.x-i.x,y:a.y-i.y}}function pc({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},a=0,s=new Map,c=!1,u={x:0,y:0},l=null,d=!1,f=null,p=!1,b=!1,h=null;function y({noDragClassName:v,handleSelector:m,domNode:x,isSelectable:k,nodeId:M,nodeClickDistance:S=0}){f=He(x);function C({x:A,y:P}){let{nodeLookup:w,nodeExtent:_,snapGrid:E,snapToGrid:N,nodeOrigin:z,onNodeDrag:D,onSelectionDrag:F,onError:W,updateNodePositions:V}=t();i={x:A,y:P};let K=!1,X=s.size>1,j=X&&_?ra(Xn(s)):null,ce=X&&N?C0({dragItems:s,snapGrid:E,x:A,y:P}):null;for(let[B,O]of s){if(!w.has(B))continue;let Y={x:A-O.distance.x,y:P-O.distance.y};N&&(Y=ce?{x:Math.round(Y.x+ce.x),y:Math.round(Y.y+ce.y)}:qn(Y,E));let oe=null;if(X&&_&&!O.extent&&j){let{positionAbsolute:te}=O.internals,Q=te.x-j.x+_[0][0],q=te.x+O.measured.width-j.x2+_[1][0],re=te.y-j.y+_[0][1],fe=te.y+O.measured.height-j.y2+_[1][1];oe=[[Q,re],[q,fe]]}let{position:ie,positionAbsolute:J}=fa({nodeId:B,nextPosition:Y,nodeLookup:w,nodeExtent:oe||_,nodeOrigin:z,onError:W});K=K||O.position.x!==ie.x||O.position.y!==ie.y,O.position=ie,O.internals.positionAbsolute=J}if(b=b||K,!!K&&(V(s,!0),h&&(o||D||!M&&F))){let[B,O]=ta({nodeId:M,dragItems:s,nodeLookup:w});o?.(h,s,B,O),D?.(h,B,O),M||F?.(h,O)}}async function I(){if(!l)return;let{transform:A,panBy:P,autoPanSpeed:w,autoPanOnNodeDrag:_}=t();if(!_){c=!1,cancelAnimationFrame(a);return}let[E,N]=pr(u,l,w);(E!==0||N!==0)&&(i.x=(i.x??0)-E/A[2],i.y=(i.y??0)-N/A[2],await P({x:E,y:N})&&C(i)),a=requestAnimationFrame(I)}function L(A){let{nodeLookup:P,multiSelectionActive:w,nodesDraggable:_,transform:E,snapGrid:N,snapToGrid:z,selectNodesOnDrag:D,onNodeDragStart:F,onSelectionDragStart:W,unselectNodesAndEdges:V}=t();d=!0,(!D||!k)&&!w&&M&&(P.get(M)?.selected||V()),k&&D&&M&&e?.(M);let K=ho(A.sourceEvent,{transform:E,snapGrid:N,snapToGrid:z,containerBounds:l});if(i=K,s=N0(P,_,K,M),s.size>0&&(n||F||!M&&W)){let[X,j]=ta({nodeId:M,dragItems:s,nodeLookup:P});n?.(A.sourceEvent,s,X,j),F?.(A.sourceEvent,X,j),M||W?.(A.sourceEvent,j)}}let R=Ei().clickDistance(S).on("start",A=>{let{domNode:P,nodeDragThreshold:w,transform:_,snapGrid:E,snapToGrid:N}=t();l=P?.getBoundingClientRect()||null,p=!1,b=!1,h=A.sourceEvent,w===0&&L(A),i=ho(A.sourceEvent,{transform:_,snapGrid:E,snapToGrid:N,containerBounds:l}),u=rt(A.sourceEvent,l)}).on("drag",A=>{let{autoPanOnNodeDrag:P,transform:w,snapGrid:_,snapToGrid:E,nodeDragThreshold:N,nodeLookup:z}=t(),D=ho(A.sourceEvent,{transform:w,snapGrid:_,snapToGrid:E,containerBounds:l});if(h=A.sourceEvent,(A.sourceEvent.type==="touchmove"&&A.sourceEvent.touches.length>1||M&&!z.has(M))&&(p=!0),!p){if(!c&&P&&d&&(c=!0,I()),!d){let F=rt(A.sourceEvent,l),W=F.x-u.x,V=F.y-u.y;Math.sqrt(W*W+V*V)>N&&L(A)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&s&&d&&(u=rt(A.sourceEvent,l),C(D))}}).on("end",A=>{if(!d||p){p&&s.size>0&&t().updateNodePositions(s,!1);return}if(c=!1,d=!1,cancelAnimationFrame(a),s.size>0){let{nodeLookup:P,updateNodePositions:w,onNodeDragStop:_,onSelectionDragStop:E}=t();if(b&&(w(s,!1),b=!1),r||_||!M&&E){let[N,z]=ta({nodeId:M,dragItems:s,nodeLookup:P,dragging:!1});r?.(A.sourceEvent,s,N,z),_?.(A.sourceEvent,N,z),M||E?.(A.sourceEvent,z)}}}).filter(A=>{let P=A.target;return!A.button&&(!v||!Gl(P,`.${v}`,x))&&(!m||Gl(P,m,x))});f.call(R)}function g(){f?.on(".drag",null)}return{update:y,destroy:g}}function E0(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())yo(r,Gn(i))>0&&o.push(i);return o}var _0=250;function I0(e,t,n,o){let r=[],i=1/0,a=E0(e,n,t+_0);for(let s of a){let c=[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]];for(let u of c){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:l,y:d}=qt(s,u,u.position,!0),f=Math.sqrt(Math.pow(l-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...u,x:l,y:d}],i=f):f===i&&r.push({...u,x:l,y:d}))}}if(!r.length)return null;if(r.length>1){let s=o.type==="source"?"target":"source";return r.find(c=>c.type===s)??r[0]}return r[0]}function mc(e,t,n,o,r,i=!1){let a=o.get(e);if(!a)return null;let s=r==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?s?.find(u=>u.id===n):s?.[0])??null;return c&&i?{...c,...qt(a,c,c.position,!0)}:c}function gc(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function P0(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var hc=()=>!0;function z0(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:a,domNode:s,nodeLookup:c,lib:u,autoPanOnConnect:l,flowId:d,panBy:f,cancelConnection:p,onConnectStart:b,onConnect:h,onConnectEnd:y,isValidConnection:g=hc,onReconnectEnd:v,updateConnection:m,getTransform:x,getFromHandle:k,autoPanSpeed:M,dragThreshold:S=1,handleDomNode:C}){let I=xa(e.target),L=0,R,{x:A,y:P}=rt(e),w=gc(i,C),_=s?.getBoundingClientRect(),E=!1;if(!_||!w)return;let N=mc(r,w,o,c,t);if(!N)return;let z=rt(e,_),D=!1,F=null,W=!1,V=null;function K(){if(!l||!_)return;let[ie,J]=pr(z,_,M);f({x:ie,y:J}),L=requestAnimationFrame(K)}let X={...N,nodeId:r,type:w,position:N.position},j=c.get(r),B={inProgress:!0,isValid:null,from:qt(j,X,ne.Left,!0),fromHandle:X,fromPosition:X.position,fromNode:j,to:z,toHandle:null,toPosition:Al[X.position],toNode:null,pointer:z};function O(){E=!0,m(B),b?.(e,{nodeId:r,handleId:o,handleType:w})}S===0&&O();function Y(ie){if(!E){let{x:fe,y:Ce}=rt(ie),Pe=fe-A,Ye=Ce-P;if(!(Pe*Pe+Ye*Ye>S*S))return;O()}if(!k()||!X){oe(ie);return}let J=x();z=rt(ie,_),R=I0(Yn(z,J,!1,[1,1]),n,c,X),D||(K(),D=!0);let te=bc(ie,{handle:R,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:a?"target":"source",isValidConnection:g,doc:I,lib:u,flowId:d,nodeLookup:c});V=te.handleDomNode,F=te.connection,W=P0(!!R,te.isValid);let Q=c.get(r),q=Q?qt(Q,X,ne.Left,!0):B.from,re={...B,from:q,isValid:W,to:te.toHandle&&W?yn({x:te.toHandle.x,y:te.toHandle.y},J):z,toHandle:te.toHandle,toPosition:W&&te.toHandle?te.toHandle.position:Al[X.position],toNode:te.toHandle?c.get(te.toHandle.nodeId):null,pointer:z};m(re),B=re}function oe(ie){if(!("touches"in ie&&ie.touches.length>0)){if(E){(R||V)&&F&&W&&h?.(F);let{inProgress:J,...te}=B,Q={...te,toPosition:B.toHandle?B.toPosition:null};y?.(ie,Q),i&&v?.(ie,Q)}p(),cancelAnimationFrame(L),D=!1,W=!1,F=null,V=null,I.removeEventListener("mousemove",Y),I.removeEventListener("mouseup",oe),I.removeEventListener("touchmove",Y),I.removeEventListener("touchend",oe)}}I.addEventListener("mousemove",Y),I.addEventListener("mouseup",oe),I.addEventListener("touchmove",Y),I.addEventListener("touchend",oe)}function bc(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:a,lib:s,flowId:c,isValidConnection:u=hc,nodeLookup:l}){let d=i==="target",f=t?a.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:b}=rt(e),h=a.elementFromPoint(p,b),y=h?.classList.contains(`${s}-flow__handle`)?h:f,g={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){let v=gc(void 0,y),m=y.getAttribute("data-nodeid"),x=y.getAttribute("data-handleid"),k=y.classList.contains("connectable"),M=y.classList.contains("connectableend");if(!m||!v)return g;let S={source:d?m:o,sourceHandle:d?x:r,target:d?o:m,targetHandle:d?r:x};g.connection=S;let I=k&&M&&(n===Gt.Strict?d&&v==="source"||!d&&v==="target":m!==o||x!==r);g.isValid=I&&u(S),g.toHandle=mc(m,v,x,l,n,!0)}return g}var Sr={onPointerDown:z0,isValid:bc};function yc({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=He(e);function i({translateExtent:s,width:c,height:u,zoomStep:l=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let b=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=n(),k=m.sourceEvent.ctrlKey&&Un()?10:1,M=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*l,S=x[2]*Math.pow(2,M*k);t.scaleTo(S)},h=[0,0],y=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(h=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},g=m=>{let x=n();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let k=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],M=[k[0]-h[0],k[1]-h[1]];h=k;let S=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),C={x:x[0]-M[0]*S,y:x[1]-M[1]*S},I=[[0,0],[c,u]];t.setViewportConstrained({x:C.x,y:C.y,zoom:x[2]},I,s)},v=ea().on("start",y).on("zoom",d?g:null).on("zoom.wheel",f?b:null);r.call(v,{})}function a(){r.on("zoom",null)}return{update:i,destroy:a,pointer:Ue}}var Mr=e=>({x:e.x,y:e.y,zoom:e.k}),na=({x:e,y:t,zoom:n})=>go.translate(e,t).scale(n),Bn=(e,t)=>e.target.closest(`.${t}`),xc=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),R0=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,oa=(e,t=0,n=R0,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},wc=e=>{let t=e.ctrlKey&&Un()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function D0({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:a,onPanZoomStart:s,onPanZoom:c,onPanZoomEnd:u}){return l=>{if(Bn(l,t))return l.ctrlKey&&l.preventDefault(),!1;l.preventDefault(),l.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(l.ctrlKey&&a){let y=Ue(l),g=wc(l),v=d*Math.pow(2,g);o.scaleTo(n,v,y,l);return}let f=l.deltaMode===1?20:1,p=r===Lt.Vertical?0:l.deltaX*f,b=r===Lt.Horizontal?0:l.deltaY*f;!Un()&&l.shiftKey&&r!==Lt.Vertical&&(p=l.deltaY*f,b=0),o.translateBy(n,-(p/d)*i,-(b/d)*i,{internal:!0});let h=Mr(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(l,h):(e.isPanScrolling=!0,s?.(l,h)),e.panScrollTimeout=setTimeout(()=>{u?.(l,h),e.isPanScrolling=!1},150)}}function T0({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",a=!t&&i&&!o.ctrlKey,s=Bn(o,e);if(o.ctrlKey&&i&&s&&o.preventDefault(),a||s)return null;o.preventDefault(),n.call(this,o,r)}}function A0({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=Mr(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function O0({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&xc(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,Mr(i.transform))}}function L0({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&xc(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&i(a.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let s=Mr(a.transform);e.prevViewport=s,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(a.sourceEvent,s)},n?150:0)}}}function $0({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:o,panOnScroll:r,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:s,noPanClassName:c,lib:u,connectionInProgress:l}){return d=>{let f=e||t,p=n&&d.ctrlKey,b=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(Bn(d,`${u}-flow__node`)||Bn(d,`${u}-flow__edge`)))return!0;if(!o&&!f&&!r&&!i&&!n||a||l&&!b||Bn(d,s)&&b||Bn(d,c)&&(!b||r&&b&&!e)||!n&&d.ctrlKey&&b)return!1;if(!n&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!f&&!r&&!p&&b||!o&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(o)&&!o.includes(d.button)&&d.type==="mousedown")return!1;let h=Array.isArray(o)&&o.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||b)&&h}}function vc({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:a,onPanZoomEnd:s,onDraggingChange:c}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},l=e.getBoundingClientRect(),d=[[0,0],[l.width,l.height]];(typeof ResizeObserver<"u"?new ResizeObserver(P=>{let w=P[0];w&&(d=[[0,0],[w.contentRect.width,w.contentRect.height]])}):null)?.observe(e);let p=ea().extent(()=>d).scaleExtent([t,n]).translateExtent(o),b=He(e).call(p);x({x:r.x,y:r.y,zoom:Fn(r.zoom,t,n)},[[0,0],[l.width,l.height]],o);let h=b.on("wheel.zoom"),y=b.on("dblclick.zoom");p.wheelDelta(wc);async function g(P,w){return b?new Promise(_=>{p?.interpolate(w?.interpolate==="linear"?An:On).transform(oa(b,w?.duration,w?.ease,()=>_(!0)),P)}):!1}function v({noWheelClassName:P,noPanClassName:w,onPaneContextMenu:_,userSelectionActive:E,panOnScroll:N,panOnDrag:z,panOnScrollMode:D,panOnScrollSpeed:F,preventScrolling:W,zoomOnPinch:V,zoomOnScroll:K,zoomOnDoubleClick:X,zoomActivationKeyPressed:j,lib:ce,onTransformChange:B,connectionInProgress:O,paneClickDistance:Y,selectionOnDrag:oe}){E&&!u.isZoomingOrPanning&&m();let ie=N&&!j&&!E;p.clickDistance(oe?1/0:!ot(Y)||Y<0?0:Y);let J=ie?D0({zoomPanValues:u,noWheelClassName:P,d3Selection:b,d3Zoom:p,panOnScrollMode:D,panOnScrollSpeed:F,zoomOnPinch:V,onPanZoomStart:a,onPanZoom:i,onPanZoomEnd:s}):T0({noWheelClassName:P,preventScrolling:W,d3ZoomHandler:h});b.on("wheel.zoom",J,{passive:!1});let te=A0({zoomPanValues:u,onDraggingChange:c,onPanZoomStart:a});p.on("start",te);let Q=O0({zoomPanValues:u,panOnDrag:z,onPaneContextMenu:!!_,onPanZoom:i,onTransformChange:B});p.on("zoom",Q);let q=L0({zoomPanValues:u,panOnDrag:z,panOnScroll:N,onPaneContextMenu:_,onPanZoomEnd:s,onDraggingChange:c});p.on("end",q);let re=$0({zoomActivationKeyPressed:j,panOnDrag:z,zoomOnScroll:K,panOnScroll:N,zoomOnDoubleClick:X,zoomOnPinch:V,userSelectionActive:E,noPanClassName:w,noWheelClassName:P,lib:ce,connectionInProgress:O});p.filter(re),X?b.on("dblclick.zoom",y):b.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(P,w,_){let E=na(P),N=p?.constrain()(E,w,_);return N&&await g(N),N}async function k(P,w){let _=na(P);return await g(_,w),_}function M(P){if(b){let w=na(P),_=b.property("__zoom");(_.k!==P.zoom||_.x!==P.x||_.y!==P.y)&&p?.transform(b,w,null,{sync:!0})}}function S(){let P=b?Ji(b.node()):{x:0,y:0,k:1};return{x:P.x,y:P.y,zoom:P.k}}async function C(P,w){return b?new Promise(_=>{p?.interpolate(w?.interpolate==="linear"?An:On).scaleTo(oa(b,w?.duration,w?.ease,()=>_(!0)),P)}):!1}async function I(P,w){return b?new Promise(_=>{p?.interpolate(w?.interpolate==="linear"?An:On).scaleBy(oa(b,w?.duration,w?.ease,()=>_(!0)),P)}):!1}function L(P){p?.scaleExtent(P)}function R(P){p?.translateExtent(P)}function A(P){let w=!ot(P)||P<0?0:P;p?.clickDistance(w)}return{update:v,destroy:m,setViewport:k,setViewportConstrained:x,getViewport:S,scaleTo:C,scaleBy:I,setScaleExtent:L,setTranslateExtent:R,syncViewport:M,setClickDistance:A}}var Yt;(function(e){e.Line="line",e.Handle="handle"})(Yt||(Yt={}));function H0({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let a=e-t,s=n-o,c=[a>0?1:a<0?-1:0,s>0?1:s<0?-1:0];return a&&r&&(c[0]=c[0]*-1),s&&i&&(c[1]=c[1]*-1),c}function ql(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Vt(e,t){return Math.max(0,t-e)}function Xt(e,t){return Math.max(0,e-t)}function ur(e,t,n){return Math.max(0,t-e,e-n)}function Yl(e,t){return e?!t:t}function B0(e,t,n,o,r,i,a,s){let{affectsX:c,affectsY:u}=t,{isHorizontal:l,isVertical:d}=t,f=l&&d,{xSnapped:p,ySnapped:b}=n,{minWidth:h,maxWidth:y,minHeight:g,maxHeight:v}=o,{x:m,y:x,width:k,height:M,aspectRatio:S}=e,C=Math.floor(l?p-e.pointerX:0),I=Math.floor(d?b-e.pointerY:0),L=k+(c?-C:C),R=M+(u?-I:I),A=-i[0]*k,P=-i[1]*M,w=ur(L,h,y),_=ur(R,g,v);if(a){let z=0,D=0;c&&C<0?z=Vt(m+C+A,a[0][0]):!c&&C>0&&(z=Xt(m+L+A,a[1][0])),u&&I<0?D=Vt(x+I+P,a[0][1]):!u&&I>0&&(D=Xt(x+R+P,a[1][1])),w=Math.max(w,z),_=Math.max(_,D)}if(s){let z=0,D=0;c&&C>0?z=Xt(m+C,s[0][0]):!c&&C<0&&(z=Vt(m+L,s[1][0])),u&&I>0?D=Xt(x+I,s[0][1]):!u&&I<0&&(D=Vt(x+R,s[1][1])),w=Math.max(w,z),_=Math.max(_,D)}if(r){if(l){let z=ur(L/S,g,v)*S;if(w=Math.max(w,z),a){let D=0;!c&&!u||c&&!u&&f?D=Xt(x+P+L/S,a[1][1])*S:D=Vt(x+P+(c?C:-C)/S,a[0][1])*S,w=Math.max(w,D)}if(s){let D=0;!c&&!u||c&&!u&&f?D=Vt(x+L/S,s[1][1])*S:D=Xt(x+(c?C:-C)/S,s[0][1])*S,w=Math.max(w,D)}}if(d){let z=ur(R*S,h,y)/S;if(_=Math.max(_,z),a){let D=0;!c&&!u||u&&!c&&f?D=Xt(m+R*S+A,a[1][0])/S:D=Vt(m+(u?I:-I)*S+A,a[0][0])/S,_=Math.max(_,D)}if(s){let D=0;!c&&!u||u&&!c&&f?D=Vt(m+R*S,s[1][0])/S:D=Xt(m+(u?I:-I)*S,s[0][0])/S,_=Math.max(_,D)}}}I=I+(I<0?_:-_),C=C+(C<0?w:-w),r&&(f?L>R*S?I=(Yl(c,u)?-C:C)/S:C=(Yl(c,u)?-I:I)*S:l?(I=C/S,u=c):(C=I*S,c=u));let E=c?m+C:m,N=u?x+I:x;return{width:k+(c?-C:C),height:M+(u?-I:I),x:i[0]*C*(c?-1:1)+E,y:i[1]*I*(u?-1:1)+N}}var kc={width:0,height:0,x:0,y:0},W0={...kc,pointerX:0,pointerY:0,aspectRatio:1};function F0(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,a=e.measured.height??0,s=n[0]*i,c=n[1]*a;return[[o-s,r-c],[o+i-s,r+a-c]]}function Sc({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=He(e),a={controlDirection:ql("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function s({controlPosition:u,boundaries:l,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:b,onResizeEnd:h,shouldResize:y}){let g={...kc},v={...W0};a={boundaries:l,resizeDirection:f,keepAspectRatio:d,controlDirection:ql(u)};let m,x=null,k=[],M,S,C,I=!1,L=Ei().on("start",R=>{let{nodeLookup:A,transform:P,snapGrid:w,snapToGrid:_,nodeOrigin:E,paneDomNode:N}=n();if(m=A.get(t),!m)return;x=N?.getBoundingClientRect()??null;let{xSnapped:z,ySnapped:D}=ho(R.sourceEvent,{transform:P,snapGrid:w,snapToGrid:_,containerBounds:x});g={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},v={...g,pointerX:z,pointerY:D,aspectRatio:g.width/g.height},M=void 0,S=xn(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(M=A.get(m.parentId)),M&&m.extent==="parent"&&(S=[[0,0],[M.measured.width,M.measured.height]]),k=[],C=void 0;for(let[F,W]of A)if(W.parentId===t&&(k.push({id:F,position:{...W.position},extent:W.extent}),W.extent==="parent"||W.expandParent)){let V=F0(W,m,W.origin??E);C?C=[[Math.min(V[0][0],C[0][0]),Math.min(V[0][1],C[0][1])],[Math.max(V[1][0],C[1][0]),Math.max(V[1][1],C[1][1])]]:C=V}p?.(R,{...g})}).on("drag",R=>{let{transform:A,snapGrid:P,snapToGrid:w,nodeOrigin:_}=n(),E=ho(R.sourceEvent,{transform:A,snapGrid:P,snapToGrid:w,containerBounds:x}),N=[];if(!m)return;let{x:z,y:D,width:F,height:W}=g,V={},K=m.origin??_,{width:X,height:j,x:ce,y:B}=B0(v,a.controlDirection,E,a.boundaries,a.keepAspectRatio,K,S,C),O=X!==F,Y=j!==W,oe=ce!==z&&O,ie=B!==D&&Y;if(!oe&&!ie&&!O&&!Y)return;if((oe||ie||K[0]===1||K[1]===1)&&(V.x=oe?ce:g.x,V.y=ie?B:g.y,g.x=V.x,g.y=V.y,k.length>0)){let q=ce-z,re=B-D;for(let fe of k)fe.position={x:fe.position.x-q+K[0]*(X-F),y:fe.position.y-re+K[1]*(j-W)},N.push(fe)}if((O||Y)&&(V.width=O&&(!a.resizeDirection||a.resizeDirection==="horizontal")?X:g.width,V.height=Y&&(!a.resizeDirection||a.resizeDirection==="vertical")?j:g.height,g.width=V.width,g.height=V.height),M&&m.expandParent){let q=K[0]*(V.width??0);V.x&&V.x<q&&(g.x=q,v.x=v.x-(V.x-q));let re=K[1]*(V.height??0);V.y&&V.y<re&&(g.y=re,v.y=v.y-(V.y-re))}let J=H0({width:g.width,prevWidth:F,height:g.height,prevHeight:W,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),te={...g,direction:J};y?.(R,te)!==!1&&(I=!0,b?.(R,te),o(V,N))}).on("end",R=>{I&&(h?.(R,{...g}),r?.({...g}),I=!1)});i.call(L)}function c(){i.on(".drag",null)}return{update:s,destroy:c}}var Oc=Is(require("react"),1),Lc=Is(zc(),1);var Dc={},Rc=e=>{let t,n=new Set,o=(l,d)=>{let f=typeof l=="function"?l(t):l;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(b=>b(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>u,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(Dc.env?Dc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(o,r,c);return c},Tc=e=>e?Rc(e):Rc;var{useDebugValue:ay}=Oc.default,{useSyncExternalStoreWithSelector:sy}=Lc.default,ly=e=>e;function Ia(e,t=ly,n){let o=sy(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return ay(o),o}var Ac=(e,t)=>{let n=Tc(e),o=(r,i=t)=>Ia(n,r,i);return Object.assign(o,n),o},$c=(e,t)=>e?Ac(e,t):Ac;function Se(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var cy=require("react-dom"),Ir=(0,$.createContext)(null),uy=Ir.Provider,du=et.error001("react");function me(e,t){let n=(0,$.useContext)(Ir);if(n===null)throw new Error(du);return Ia(n,e,t)}function xe(){let e=(0,$.useContext)(Ir);if(e===null)throw new Error(du);return(0,$.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Hc={display:"none"},dy={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},fu="react-flow__node-desc",pu="react-flow__edge-desc",fy="react-flow__aria-live",py=e=>e.ariaLiveMessage,my=e=>e.ariaLabelConfig;function gy({rfId:e}){let t=me(py);return(0,H.jsx)("div",{id:`${fy}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:dy,children:t})}function hy({rfId:e,disableKeyboardA11y:t}){let n=me(my);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{id:`${fu}-${e}`,style:Hc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,H.jsx)("div",{id:`${pu}-${e}`,style:Hc,children:n["edge.a11yDescription.default"]}),!t&&(0,H.jsx)(gy,{rfId:e})]})}var Pr=(0,$.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let a=`${e}`.split("-");return(0,H.jsx)("div",{className:Ee(["react-flow__panel",n,...a]),style:o,ref:i,...r,children:t})});Pr.displayName="Panel";var Bc="https://reactflow.dev?utm_source=attribution";function by({proOptions:e,position:t="bottom-right"}){return e?.hideAttribution?null:(0,H.jsx)(Pr,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Bc}`,children:(0,H.jsx)("a",{href:Bc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var yy=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},Cr=e=>e.id;function xy(e,t){return Se(e.selectedNodes.map(Cr),t.selectedNodes.map(Cr))&&Se(e.selectedEdges.map(Cr),t.selectedEdges.map(Cr))}function wy({onSelectionChange:e}){let t=xe(),{selectedNodes:n,selectedEdges:o}=me(yy,xy);return(0,$.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var vy=e=>!!e.onSelectionChangeHandlers;function ky({onSelectionChange:e}){let t=me(vy);return e||t?(0,H.jsx)(wy,{onSelectionChange:e}):null}var mu=[0,0],Sy={x:0,y:0,zoom:1},My=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Wc=[...My,"rfId"],Ny=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Fc={translateExtent:Vn,nodeOrigin:mu,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function Cy(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:a,reset:s,setDefaultNodesAndEdges:c}=me(Ny,Se),u=xe();(0,$.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{l.current=Fc,s()}),[]);let l=(0,$.useRef)(Fc);return(0,$.useEffect)(()=>{for(let d of Wc){let f=e[d],p=l.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?a(f):d==="ariaLabelConfig"?u.setState({ariaLabelConfig:tc(f)}):d==="fitView"?u.setState({fitViewQueued:f}):d==="fitViewOptions"?u.setState({fitViewOptions:f}):u.setState({[d]:f})))}l.current=e},Wc.map(d=>e[d])),null}function Vc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function Ey(e){let[t,n]=(0,$.useState)(e==="system"?null:e);return(0,$.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Vc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Vc()?.matches?"dark":"light"}var Xc=typeof document<"u"?document:null;function vo(e=null,t={target:Xc,actInsideInputWithModifier:!0}){let[n,o]=(0,$.useState)(!1),r=(0,$.useRef)(!1),i=(0,$.useRef)(new Set([])),[a,s]=(0,$.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace("+",`
`).replace(`

`,`
+`).split(`
`)),l=u.reduce((d,f)=>d.concat(...f),[]);return[u,l]}return[[],[]]},[e]);return(0,$.useEffect)(()=>{let c=t?.target??Xc,u=t?.actInsideInputWithModifier??!0;if(e!==null){let l=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!u)&&wa(p))return!1;let h=qc(p.code,s);if(i.current.add(p[h]),Gc(a,i.current,!1)){let y=p.composedPath?.()?.[0]||p.target,g=y?.nodeName==="BUTTON"||y?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},d=p=>{let b=qc(p.code,s);Gc(a,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[b]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",l),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",l),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function Gc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function qc(e,t){return t.includes(e)?"code":"key"}var _y=()=>{let e=xe();return(0,$.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:a}=e.getState();return a?(await a.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:a,panZoom:s}=e.getState(),c=xo(t,o,r,i,a,n?.padding??.1);return s?(await s.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:a}=e.getState();if(!a)return t;let{x:s,y:c}=a.getBoundingClientRect(),u={x:t.x-s,y:t.y-c},l=n.snapGrid??r,d=n.snapToGrid??i;return Yn(u,o,d,l)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),a=yn(t,n);return{x:a.x+r,y:a.y+i}}}),[])};function gu(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let a=o.get(i.id);a?a.push(i):o.set(i.id,[i])}for(let i of t){let a=o.get(i.id);if(!a){n.push(i);continue}if(a[0].type==="remove")continue;if(a[0].type==="replace"){n.push({...a[0].item});continue}let s={...i};for(let c of a)Iy(c,s);n.push(s)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function Iy(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function hu(e,t){return gu(e,t)}function bu(e,t){return gu(e,t)}function wn(e,t){return{id:e,type:"select",selected:t}}function Kn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let a=t.has(r);!(i.selected===void 0&&!a)&&i.selected!==a&&(n&&(i.selected=a),o.push(wn(i.id,a)))}return o}function Yc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let a=t.get(i.id),s=a?.internals?.userNode??a;s!==void 0&&s!==i&&n.push({id:i.id,item:i,type:"replace"}),s===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Uc(e){return{id:e.id,type:"remove"}}var Py=ga("React Flow","https://reactflow.dev/");function zy(e,t,n={}){return rc(e,t,{...n,onError:n.onError??Py})}var Zc=e=>Ul(e),Ry=e=>ca(e);function yu(e){return(0,$.forwardRef)(e)}var xu=typeof window<"u"?$.useLayoutEffect:$.useEffect;function Kc(e){let[t,n]=(0,$.useState)(BigInt(0)),[o]=(0,$.useState)(()=>Dy(()=>n(r=>r+BigInt(1))));return xu(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function Dy(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var wu=(0,$.createContext)(null);function Ty({children:e}){let t=xe(),n=(0,$.useCallback)(s=>{let{nodes:c=[],setNodes:u,hasDefaultNodes:l,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:b}=t.getState(),h=c;for(let g of s)h=typeof g=="function"?g(h):g;let y=Yc({items:h,lookup:f});for(let g of b.values())y=g(y);l&&u(h),y.length>0?d?.(y):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:v,setNodes:m}=t.getState();g&&m(v)})},[]),o=Kc(n),r=(0,$.useCallback)(s=>{let{edges:c=[],setEdges:u,hasDefaultEdges:l,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let b of s)p=typeof b=="function"?b(p):b;l?u(p):d&&d(Yc({items:p,lookup:f}))},[]),i=Kc(r),a=(0,$.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,H.jsx)(wu.Provider,{value:a,children:e})}function Ay(){let e=(0,$.useContext)(wu);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var Oy=e=>!!e.panZoom;function Da(){let e=_y(),t=xe(),n=Ay(),o=me(Oy),r=(0,$.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),a=d=>{n.nodeQueue.push(d)},s=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),b=Zc(d)?d:f.get(d.id),h=b.parentId?ba(b.position,b.measured,b.parentId,f,p):b.position,y={...b,position:h,width:b.measured?.width??b.width,height:b.measured?.height??b.height};return Gn(y)},u=(d,f,p={replace:!1})=>{a(b=>b.map(h=>{if(h.id===d){let y=typeof f=="function"?f(h):f;return p.replace&&Zc(y)?y:{...h,...y}}return h}))},l=(d,f,p={replace:!1})=>{s(b=>b.map(h=>{if(h.id===d){let y=typeof f=="function"?f(h):f;return p.replace&&Ry(y)?y:{...h,...y}}return h}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:a,setEdges:s,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[b,h,y]=p;return{nodes:d.map(g=>({...g})),edges:f.map(g=>({...g})),viewport:{x:b,y:h,zoom:y}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:b,onNodesDelete:h,onEdgesDelete:y,triggerNodeChanges:g,triggerEdgeChanges:v,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:k,edges:M}=await jl({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:b,onBeforeDelete:x}),S=M.length>0,C=k.length>0;if(S){let I=M.map(Uc);y?.(M),v(I)}if(C){let I=k.map(Uc);h?.(k),g(I)}return(C||S)&&m?.({nodes:k,edges:M}),{deletedNodes:k,deletedEdges:M}},getIntersectingNodes:(d,f=!0,p)=>{let b=ma(d),h=b?d:c(d),y=p!==void 0;return h?(p||t.getState().nodes).filter(g=>{let v=t.getState().nodeLookup.get(g.id);if(v&&!b&&(g.id===d.id||!v.internals.positionAbsolute))return!1;let m=Gn(y?g:v),x=yo(m,h);return f&&x>0||x>=m.width*m.height||x>=h.width*h.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let h=ma(d)?d:c(d);if(!h)return!1;let y=yo(h,f);return p&&y>0||y>=f.width*f.height||y>=h.width*h.height},updateNode:u,updateNodeData:(d,f,p={replace:!1})=>{u(d,b=>{let h=typeof f=="function"?f(b):f;return p.replace?{...b,data:h}:{...b,data:{...b.data,...h}}},p)},updateEdge:l,updateEdgeData:(d,f,p={replace:!1})=>{l(d,b=>{let h=typeof f=="function"?f(b):f;return p.replace?{...b,data:h}:{...b,data:{...b.data,...h}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return da(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??ec();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,$.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var jc=e=>e.selected,Ly=typeof window<"u"?window:void 0;function $y({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=xe(),{deleteElements:o}=Da(),r=vo(e,{actInsideInputWithModifier:!1}),i=vo(t,{target:Ly});(0,$.useEffect)(()=>{if(r){let{edges:a,nodes:s}=n.getState();o({nodes:s.filter(jc),edges:a.filter(jc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,$.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function Hy(e){let t=xe();(0,$.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=hr(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",et.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var zr={position:"absolute",width:"100%",height:"100%",top:0,left:0},By=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Wy({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panOnScrollSpeed:r=.5,panOnScrollMode:i=Lt.Free,zoomOnDoubleClick:a=!0,panOnDrag:s=!0,defaultViewport:c,translateExtent:u,minZoom:l,maxZoom:d,zoomActivationKeyCode:f,preventScrolling:p=!0,children:b,noWheelClassName:h,noPanClassName:y,onViewportChange:g,isControlledViewport:v,paneClickDistance:m,selectionOnDrag:x}){let k=xe(),M=(0,$.useRef)(null),{userSelectionActive:S,lib:C,connectionInProgress:I}=me(By,Se),L=vo(f),R=(0,$.useRef)();Hy(M);let A=(0,$.useCallback)(P=>{g?.({x:P[0],y:P[1],zoom:P[2]}),v||k.setState({transform:P})},[g,v]);return(0,$.useEffect)(()=>{if(M.current){R.current=vc({domNode:M.current,minZoom:l,maxZoom:d,translateExtent:u,viewport:c,onDraggingChange:E=>k.setState(N=>N.paneDragging===E?N:{paneDragging:E}),onPanZoomStart:(E,N)=>{let{onViewportChangeStart:z,onMoveStart:D}=k.getState();D?.(E,N),z?.(N)},onPanZoom:(E,N)=>{let{onViewportChange:z,onMove:D}=k.getState();D?.(E,N),z?.(N)},onPanZoomEnd:(E,N)=>{let{onViewportChangeEnd:z,onMoveEnd:D}=k.getState();D?.(E,N),z?.(N)}});let{x:P,y:w,zoom:_}=R.current.getViewport();return k.setState({panZoom:R.current,transform:[P,w,_],domNode:M.current.closest(".react-flow")}),()=>{R.current?.destroy()}}},[]),(0,$.useEffect)(()=>{R.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panOnScrollSpeed:r,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:s,zoomActivationKeyPressed:L,preventScrolling:p,noPanClassName:y,userSelectionActive:S,noWheelClassName:h,lib:C,onTransformChange:A,connectionInProgress:I,selectionOnDrag:x,paneClickDistance:m})},[e,t,n,o,r,i,a,s,L,p,y,S,h,C,A,I,x,m]),(0,H.jsx)("div",{className:"react-flow__renderer",ref:M,style:zr,children:b})}var Fy=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Vy(){let{userSelectionActive:e,userSelectionRect:t}=me(Fy,Se);return e&&t?(0,H.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Pa=(e,t)=>n=>{n.target===t.current&&e?.(n)},Xy=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function Gy({isSelecting:e,selectionKeyPressed:t,selectionMode:n=hn.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:a,onSelectionStart:s,onSelectionEnd:c,onPaneClick:u,onPaneContextMenu:l,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:b,children:h}){let y=(0,$.useRef)(0),g=xe(),{userSelectionActive:v,elementsSelectable:m,dragging:x,panBy:k,autoPanSpeed:M}=me(Xy,Se),S=m&&(e||v),C=(0,$.useRef)(null),I=(0,$.useRef)(),L=(0,$.useRef)(new Set),R=(0,$.useRef)(new Set),A=(0,$.useRef)(!1),P=(0,$.useRef)(!1),w=(0,$.useRef)({x:0,y:0}),_=(0,$.useRef)(!1),E=O=>{if(P.current||A.current||g.getState().connection.inProgress){P.current=!1,A.current=!1;return}u?.(O),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},N=O=>{if(Array.isArray(o)&&o?.includes(2)){O.preventDefault();return}l?.(O)},z=d?O=>d(O):void 0,D=O=>{P.current&&(O.stopPropagation(),P.current=!1)},F=O=>{let{domNode:Y,transform:oe}=g.getState();if(I.current=Y?.getBoundingClientRect(),!I.current)return;let ie=O.target===C.current;if(!ie&&!!O.target.closest(".nokey")||!e||!(a&&ie||t)||O.button!==0||!O.isPrimary)return;O.target?.setPointerCapture?.(O.pointerId),P.current=!1;let{x:Q,y:q}=rt(O.nativeEvent,I.current),re=Yn({x:Q,y:q},oe);g.setState({userSelectionRect:{width:0,height:0,startX:re.x,startY:re.y,x:Q,y:q}}),ie||(O.stopPropagation(),O.preventDefault())};function W(O,Y){let{userSelectionRect:oe}=g.getState();if(!oe)return;let{transform:ie,nodeLookup:J,edgeLookup:te,connectionLookup:Q,triggerNodeChanges:q,triggerEdgeChanges:re,defaultEdgeOptions:fe}=g.getState(),Ce={x:oe.startX,y:oe.startY},{x:Pe,y:Ye}=yn(Ce,ie),nt={startX:Ce.x,startY:Ce.y,x:O<Pe?O:Pe,y:Y<Ye?Y:Ye,width:Math.abs(O-Pe),height:Math.abs(Y-Ye)},nn=L.current,Ct=R.current;L.current=new Set(fr(J,nt,ie,n===hn.Partial,!0).map(Qe=>Qe.id)),R.current=new Set;let Et=fe?.selectable??!0;for(let Qe of L.current){let st=Q.get(Qe);if(st)for(let{edgeId:Ge}of st.values()){let _t=te.get(Ge);_t&&(_t.selectable??Et)&&R.current.add(Ge)}}if(!ya(nn,L.current)){let Qe=Kn(J,L.current,!0);q(Qe)}if(!ya(Ct,R.current)){let Qe=Kn(te,R.current);re(Qe)}g.setState({userSelectionRect:nt,userSelectionActive:!0,nodesSelectionActive:!1})}function V(){if(!r||!I.current)return;let[O,Y]=pr(w.current,I.current,M);k({x:O,y:Y}).then(oe=>{if(!P.current||!oe){y.current=requestAnimationFrame(V);return}let{x:ie,y:J}=w.current;W(ie,J),y.current=requestAnimationFrame(V)})}let K=()=>{cancelAnimationFrame(y.current),y.current=0,_.current=!1};(0,$.useEffect)(()=>()=>K(),[]);let X=O=>{let{userSelectionRect:Y,transform:oe,resetSelectedElements:ie}=g.getState();if(!I.current||!Y)return;let{x:J,y:te}=rt(O.nativeEvent,I.current);w.current={x:J,y:te};let Q=yn({x:Y.startX,y:Y.startY},oe);if(!P.current){let q=t?0:i;if(Math.hypot(J-Q.x,te-Q.y)<=q)return;ie(),s?.(O)}P.current=!0,_.current||(V(),_.current=!0),W(J,te)},j=O=>{if(!S){O.target===C.current&&g.getState().connection.inProgress&&(A.current=!0);return}O.button===0&&(O.target?.releasePointerCapture?.(O.pointerId),!v&&O.target===C.current&&g.getState().userSelectionRect&&E?.(O),g.setState({userSelectionActive:!1,userSelectionRect:null}),P.current&&(c?.(O),g.setState({nodesSelectionActive:L.current.size>0})),K())},ce=O=>{O.target?.releasePointerCapture?.(O.pointerId),K()},B=o===!0||Array.isArray(o)&&o.includes(0);return(0,H.jsxs)("div",{className:Ee(["react-flow__pane",{draggable:B,dragging:x,selection:e}]),onClick:S?void 0:Pa(E,C),onContextMenu:Pa(N,C),onWheel:Pa(z,C),onPointerEnter:S?void 0:f,onPointerMove:S?X:p,onPointerUp:j,onPointerCancel:S?ce:void 0,onPointerDownCapture:S?F:void 0,onClickCapture:S?D:void 0,onPointerLeave:b,ref:C,style:zr,children:[h,(0,H.jsx)(Vy,{})]})}function Ra({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:a,nodeLookup:s,onError:c}=t.getState(),u=s.get(e);if(!u){c?.("012",et.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&a)&&(i({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function vu({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:a}){let s=xe(),[c,u]=(0,$.useState)(!1),l=(0,$.useRef)();return(0,$.useEffect)(()=>{if(!t)return l.current=pc({getStoreItems:()=>s.getState(),onNodeMouseDown:d=>{Ra({id:d,store:s,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{l.current?.destroy(),l.current=void 0}},[t,s,e]),(0,$.useEffect)(()=>{t||!e.current||!l.current||l.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:a})},[n,o,t,i,e,r,a]),c}var qy=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function ku(){let e=xe();return(0,$.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:a,onError:s,updateNodePositions:c,nodeLookup:u,nodeOrigin:l}=e.getState(),d=new Map,f=qy(a),p=r?i[0]:5,b=r?i[1]:5,h=n.direction.x*p*n.factor,y=n.direction.y*b*n.factor;for(let[,g]of u){if(!f(g))continue;let v={x:g.internals.positionAbsolute.x+h,y:g.internals.positionAbsolute.y+y};r&&(v=qn(v,i));let{position:m,positionAbsolute:x}=fa({nodeId:g.id,nextPosition:v,nodeLookup:u,nodeExtent:o,nodeOrigin:l,onError:s});g.position=m,g.internals.positionAbsolute=x,d.set(g.id,g)}c(d)},[])}var Ta=(0,$.createContext)(null),Yy=Ta.Provider;Ta.Consumer;var Su=()=>(0,$.useContext)(Ta),Uy=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Mu=(0,$.createContext)(null);function Zy({children:e}){let t=me(Uy,Se);return(0,H.jsx)(Mu.Provider,{value:t,children:e})}function Ky(){let e=(0,$.useContext)(Mu);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var jy={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Qy=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:a}=o,{fromHandle:s,toHandle:c,isValid:u}=a;if(!s&&!r)return jy;let l=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:s?.nodeId===e&&s?.id===t&&s?.type===n,connectingTo:l,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Gt.Strict?s?.type!==n:e!==s?.nodeId||t!==s?.id,connectionInProcess:!!s,clickConnectionInProcess:!!r,valid:l&&u}};function Jy({type:e="source",position:t=ne.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:a,onConnect:s,children:c,className:u,onMouseDown:l,onTouchStart:d,...f},p){let b=a||null,h=e==="target",y=xe(),g=Su(),{connectOnClick:v,noPanClassName:m,rfId:x}=Ky(),{connectingFrom:k,connectingTo:M,clickConnecting:S,isPossibleEndHandle:C,connectionInProcess:I,clickConnectionInProcess:L,valid:R}=me(Qy(g,b,e),Se);g||y.getState().onError?.("010",et.error010());let A=_=>{let{defaultEdgeOptions:E,onConnect:N,hasDefaultEdges:z}=y.getState(),D={...E,..._};if(z){let{edges:F,setEdges:W,onError:V}=y.getState();W(zy(D,F,{onError:V}))}N?.(D),s?.(D)},P=_=>{if(!g)return;let E=va(_.nativeEvent);if(r&&(E&&_.button===0||!E)){let N=y.getState();Sr.onPointerDown(_.nativeEvent,{handleDomNode:_.currentTarget,autoPanOnConnect:N.autoPanOnConnect,connectionMode:N.connectionMode,connectionRadius:N.connectionRadius,domNode:N.domNode,nodeLookup:N.nodeLookup,lib:N.lib,isTarget:h,handleId:b,nodeId:g,flowId:N.rfId,panBy:N.panBy,cancelConnection:N.cancelConnection,onConnectStart:N.onConnectStart,onConnectEnd:(...z)=>y.getState().onConnectEnd?.(...z),updateConnection:N.updateConnection,onConnect:A,isValidConnection:n||((...z)=>y.getState().isValidConnection?.(...z)??!0),getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,autoPanSpeed:N.autoPanSpeed,dragThreshold:N.connectionDragThreshold})}E?l?.(_):d?.(_)},w=_=>{let{onClickConnectStart:E,onClickConnectEnd:N,connectionClickStartHandle:z,connectionMode:D,isValidConnection:F,lib:W,rfId:V,nodeLookup:K,connection:X}=y.getState();if(!g||!z&&!r)return;if(!z){E?.(_.nativeEvent,{nodeId:g,handleId:b,handleType:e}),y.setState({connectionClickStartHandle:{nodeId:g,type:e,id:b}});return}let j=xa(_.target),ce=n||F,{connection:B,isValid:O}=Sr.isValid(_.nativeEvent,{handle:{nodeId:g,id:b,type:e},connectionMode:D,fromNodeId:z.nodeId,fromHandleId:z.id||null,fromType:z.type,isValidConnection:ce,flowId:V,doc:j,lib:W,nodeLookup:K});O&&B&&A(B);let Y=structuredClone(X);delete Y.inProgress,Y.toPosition=Y.toHandle?Y.toHandle.position:null,N?.(_,Y),y.setState({connectionClickStartHandle:null})};return(0,H.jsx)("div",{"data-handleid":b,"data-nodeid":g,"data-handlepos":t,"data-id":`${x}-${g}-${b}-${e}`,className:Ee(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,u,{source:!h,target:h,connectable:o,connectablestart:r,connectableend:i,clickconnecting:S,connectingfrom:k,connectingto:M,valid:R,connectionindicator:o&&(!I||C)&&(I||L?i:r)}]),onMouseDown:P,onTouchStart:P,onClick:v?w:void 0,ref:p,...f,children:c})}var vn=(0,$.memo)(yu(Jy));function ex({data:e,isConnectable:t,sourcePosition:n=ne.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[e?.label,(0,H.jsx)(vn,{type:"source",position:n,isConnectable:t})]})}function tx({data:e,isConnectable:t,targetPosition:n=ne.Top,sourcePosition:o=ne.Bottom}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(vn,{type:"target",position:n,isConnectable:t}),e?.label,(0,H.jsx)(vn,{type:"source",position:o,isConnectable:t})]})}function nx(){return null}function ox({data:e,isConnectable:t,targetPosition:n=ne.Top}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(vn,{type:"target",position:n,isConnectable:t}),e?.label]})}var _r={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Qc={input:ex,default:tx,output:ox,group:nx};function rx(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var ix=e=>{let{width:t,height:n,x:o,y:r}=Xn(e.nodeLookup,{filter:i=>!!i.selected});return{width:ot(t)?t:null,height:ot(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function ax({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=xe(),{width:r,height:i,transformString:a,userSelectionActive:s}=me(ix,Se),c=ku(),u=(0,$.useRef)(null);(0,$.useEffect)(()=>{n||u.current?.focus({preventScroll:!0})},[n]);let l=!s&&r!==null&&i!==null;if(vu({nodeRef:u,disabled:!l}),!l)return null;let d=e?p=>{let b=o.getState().nodes.filter(h=>h.selected);e(p,b)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(_r,p.key)&&(p.preventDefault(),c({direction:_r[p.key],factor:p.shiftKey?4:1}))};return(0,H.jsx)("div",{className:Ee(["react-flow__nodesselection","react-flow__container",t]),style:{transform:a},children:(0,H.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var Jc=typeof window<"u"?window:void 0,sx=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Nu({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,paneClickDistance:s,deleteKeyCode:c,selectionKeyCode:u,selectionOnDrag:l,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:b,panActivationKeyCode:h,zoomActivationKeyCode:y,elementsSelectable:g,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:k,panOnScrollMode:M,zoomOnDoubleClick:S,panOnDrag:C,autoPanOnSelection:I,defaultViewport:L,translateExtent:R,minZoom:A,maxZoom:P,preventScrolling:w,onSelectionContextMenu:_,noWheelClassName:E,noPanClassName:N,disableKeyboardA11y:z,onViewportChange:D,isControlledViewport:F}){let{nodesSelectionActive:W,userSelectionActive:V}=me(sx,Se),K=vo(u,{target:Jc}),X=vo(h,{target:Jc}),j=X||C,ce=X||x,B=l&&j!==!0,O=K||V||B;return $y({deleteKeyCode:c,multiSelectionKeyCode:b}),(0,H.jsx)(Wy,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:ce,panOnScrollSpeed:k,panOnScrollMode:M,zoomOnDoubleClick:S,panOnDrag:!K&&j,defaultViewport:L,translateExtent:R,minZoom:A,maxZoom:P,zoomActivationKeyCode:y,preventScrolling:w,noWheelClassName:E,noPanClassName:N,onViewportChange:D,isControlledViewport:F,paneClickDistance:s,selectionOnDrag:B,children:(0,H.jsxs)(Gy,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:a,panOnDrag:j,autoPanOnSelection:I,isSelecting:!!O,selectionMode:d,selectionKeyPressed:K,paneClickDistance:s,selectionOnDrag:B,children:[e,W&&(0,H.jsx)(ax,{onSelectionContextMenu:_,noPanClassName:N,disableKeyboardA11y:z})]})})}Nu.displayName="FlowRenderer";var lx=(0,$.memo)(Nu),cx=e=>t=>e?fr(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function ux(e){return me((0,$.useCallback)(cx(e),[e]),Se)}var dx=e=>e.updateNodeInternals;function fx(){let e=me(dx),[t]=(0,$.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,$.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function px({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=xe(),i=(0,$.useRef)(null),a=(0,$.useRef)(null),s=(0,$.useRef)(e.sourcePosition),c=(0,$.useRef)(e.targetPosition),u=(0,$.useRef)(t),l=n&&!!e.internals.handleBounds;return(0,$.useEffect)(()=>{i.current&&!e.hidden&&(!l||a.current!==i.current)&&(a.current&&o?.unobserve(a.current),o?.observe(i.current),a.current=i.current)},[l,e.hidden]),(0,$.useEffect)(()=>()=>{a.current&&(o?.unobserve(a.current),a.current=null)},[]),(0,$.useEffect)(()=>{if(i.current){let d=u.current!==t,f=s.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(u.current=t,s.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function mx({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:a,nodesDraggable:s,elementsSelectable:c,nodesConnectable:u,nodesFocusable:l,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:b,rfId:h,nodeTypes:y,nodeClickDistance:g,onError:v}){let{node:m,internals:x,isParent:k}=me(O=>{let Y=O.nodeLookup.get(e),oe=O.parentLookup.has(e);return{node:Y,internals:Y.internals,isParent:oe}},Se),M=m.type||"default",S=y?.[M]||Qc[M];S===void 0&&(v?.("003",et.error003(M)),M="default",S=y?.default||Qc.default);let C=!!(m.draggable||s&&typeof m.draggable>"u"),I=!!(m.selectable||c&&typeof m.selectable>"u"),L=!!(m.connectable||u&&typeof m.connectable>"u"),R=!!(m.focusable||l&&typeof m.focusable>"u"),A=xe(),P=ha(m),w=px({node:m,nodeType:M,hasDimensions:P,resizeObserver:d}),_=vu({nodeRef:w,disabled:m.hidden||!C,noDragClassName:f,handleSelector:m.dragHandle,nodeId:e,isSelectable:I,nodeClickDistance:g}),E=ku();if(m.hidden)return null;let N=dt(m),z=rx(m),D=I||C||t||n||o||r,F=n?O=>n(O,{...x.userNode}):void 0,W=o?O=>o(O,{...x.userNode}):void 0,V=r?O=>r(O,{...x.userNode}):void 0,K=i?O=>i(O,{...x.userNode}):void 0,X=a?O=>a(O,{...x.userNode}):void 0,j=O=>{let{selectNodesOnDrag:Y,nodeDragThreshold:oe}=A.getState();I&&(!Y||!C||oe>0)&&Ra({id:e,store:A,nodeRef:w}),t&&t(O,{...x.userNode})},ce=O=>{if(!(wa(O.nativeEvent)||b)){if(ia.includes(O.key)&&I){let Y=O.key==="Escape";Ra({id:e,store:A,unselect:Y,nodeRef:w})}else if(C&&m.selected&&Object.prototype.hasOwnProperty.call(_r,O.key)){O.preventDefault();let{ariaLabelConfig:Y}=A.getState();A.setState({ariaLiveMessage:Y["node.a11yDescription.ariaLiveMessage"]({direction:O.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),E({direction:_r[O.key],factor:O.shiftKey?4:1})}}},B=()=>{if(b||!w.current?.matches(":focus-visible"))return;let{transform:O,width:Y,height:oe,autoPanOnNodeFocus:ie,setCenter:J}=A.getState();if(!ie)return;fr(new Map([[e,m]]),{x:0,y:0,width:Y,height:oe},O,!0).length>0||J(m.position.x+N.width/2,m.position.y+N.height/2,{zoom:O[2]})};return(0,H.jsx)("div",{className:Ee(["react-flow__node",`react-flow__node-${M}`,{[p]:C},m.className,{selected:m.selected,selectable:I,parent:k,draggable:C,dragging:_}]),ref:w,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:P?"visible":"hidden",...m.style,...z},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:F,onMouseMove:W,onMouseLeave:V,onContextMenu:K,onClick:j,onDoubleClick:X,onKeyDown:R?ce:void 0,tabIndex:R?0:void 0,onFocus:R?B:void 0,role:m.ariaRole??(R?"group":void 0),"aria-roledescription":"node","aria-describedby":b?void 0:`${fu}-${h}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,H.jsx)(Yy,{value:e,children:(0,H.jsx)(S,{id:e,data:m.data,type:M,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:I,draggable:C,deletable:m.deletable??!0,isConnectable:L,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:_,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...N})})})}var gx=(0,$.memo)(mx),hx=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Cu(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=me(hx,Se),i=ux(e.onlyRenderVisibleElements),a=fx();return(0,H.jsx)("div",{className:"react-flow__nodes",style:zr,children:i.map(s=>(0,H.jsx)(gx,{id:s,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:a,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},s))})}Cu.displayName="NodeRenderer";var bx=(0,$.memo)(Cu);function yx(e){return me((0,$.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),a=n.nodeLookup.get(r.target);i&&a&&oc({sourceNode:i,targetNode:a,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),Se)}var xx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,H.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},wx=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,H.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},eu={[Wn.Arrow]:xx,[Wn.ArrowClosed]:wx};function vx(e){let t=xe();return(0,$.useMemo)(()=>Object.prototype.hasOwnProperty.call(eu,e)?eu[e]:(t.getState().onError?.("009",et.error009(e)),null),[e])}var kx=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:a,orient:s="auto-start-reverse"})=>{let c=vx(t);return c?(0,H.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:s,refX:"0",refY:"0",children:(0,H.jsx)(c,{color:n,strokeWidth:a})}):null},Eu=({defaultColor:e,rfId:t})=>{let n=me(i=>i.edges),o=me(i=>i.defaultEdgeOptions),r=(0,$.useMemo)(()=>ac(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,H.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,H.jsx)("defs",{children:r.map(i=>(0,H.jsx)(kx,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Eu.displayName="MarkerDefinitions";var Sx=(0,$.memo)(Eu);function _u({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:a=[2,4],labelBgBorderRadius:s=2,children:c,className:u,...l}){let[d,f]=(0,$.useState)({x:1,y:0,width:0,height:0}),p=Ee(["react-flow__edge-textwrapper",u]),b=(0,$.useRef)(null);return(0,$.useEffect)(()=>{if(b.current){let h=b.current.getBBox();f({x:h.x,y:h.y,width:h.width,height:h.height})}},[n]),n?(0,H.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...l,children:[r&&(0,H.jsx)("rect",{width:d.width+2*a[0],x:-a[0],y:-a[1],height:d.height+2*a[1],className:"react-flow__edge-textbg",style:i,rx:s,ry:s}),(0,H.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:b,style:o,children:n}),c]}):null}_u.displayName="EdgeText";var Mx=(0,$.memo)(_u);function Rr({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c,interactionWidth:u=20,...l}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("path",{...l,d:e,fill:"none",className:Ee(["react-flow__edge-path",l.className])}),u?(0,H.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&ot(t)&&ot(n)?(0,H.jsx)(Mx,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:a,labelBgPadding:s,labelBgBorderRadius:c}):null]})}function tu({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===ne.Left||e===ne.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Iu({sourceX:e,sourceY:t,sourcePosition:n=ne.Bottom,targetX:o,targetY:r,targetPosition:i=ne.Top}){let[a,s]=tu({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,u]=tu({pos:i,x1:o,y1:r,x2:e,y2:t}),[l,d,f,p]=br({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:s,targetControlX:c,targetControlY:u});return[`M${e},${t} C${a},${s} ${c},${u} ${o},${r}`,l,d,f,p]}function Pu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a,targetPosition:s,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:b,markerEnd:h,markerStart:y,interactionWidth:g})=>{let[v,m,x]=Iu({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s}),k=e.isInternal?void 0:t;return(0,H.jsx)(Rr,{id:k,path:v,labelX:m,labelY:x,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:b,markerEnd:h,markerStart:y,interactionWidth:g})})}var Nx=Pu({isInternal:!1}),zu=Pu({isInternal:!0});Nx.displayName="SimpleBezierEdge";zu.displayName="SimpleBezierEdgeInternal";function Ru(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,sourcePosition:p=ne.Bottom,targetPosition:b=ne.Top,markerEnd:h,markerStart:y,pathOptions:g,interactionWidth:v})=>{let[m,x,k]=wo({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:b,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),M=e.isInternal?void 0:t;return(0,H.jsx)(Rr,{id:M,path:m,labelX:x,labelY:k,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:h,markerStart:y,interactionWidth:v})})}var Du=Ru({isInternal:!1}),Tu=Ru({isInternal:!0});Du.displayName="SmoothStepEdge";Tu.displayName="SmoothStepEdgeInternal";function Au(e){return(0,$.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,H.jsx)(Du,{...n,id:o,pathOptions:(0,$.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Cx=Au({isInternal:!1}),Ou=Au({isInternal:!0});Cx.displayName="StepEdge";Ou.displayName="StepEdgeInternal";function Lu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:b,interactionWidth:h})=>{let[y,g,v]=xr({sourceX:n,sourceY:o,targetX:r,targetY:i}),m=e.isInternal?void 0:t;return(0,H.jsx)(Rr,{id:m,path:y,labelX:g,labelY:v,label:a,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:l,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:b,interactionWidth:h})})}var Ex=Lu({isInternal:!1}),$u=Lu({isInternal:!0});Ex.displayName="StraightEdge";$u.displayName="StraightEdgeInternal";function Hu(e){return(0,$.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:a=ne.Bottom,targetPosition:s=ne.Top,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:b,markerEnd:h,markerStart:y,pathOptions:g,interactionWidth:v})=>{let[m,x,k]=yr({sourceX:n,sourceY:o,sourcePosition:a,targetX:r,targetY:i,targetPosition:s,curvature:g?.curvature}),M=e.isInternal?void 0:t;return(0,H.jsx)(Rr,{id:M,path:m,labelX:x,labelY:k,label:c,labelStyle:u,labelShowBg:l,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:b,markerEnd:h,markerStart:y,interactionWidth:v})})}var _x=Hu({isInternal:!1}),Bu=Hu({isInternal:!0});_x.displayName="BezierEdge";Bu.displayName="BezierEdgeInternal";var nu={default:Bu,straight:$u,step:Ou,smoothstep:Tu,simplebezier:zu},ou={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Ix=(e,t,n)=>n===ne.Left?e-t:n===ne.Right?e+t:e,Px=(e,t,n)=>n===ne.Top?e-t:n===ne.Bottom?e+t:e,ru="react-flow__edgeupdater";function iu({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:a,type:s}){return(0,H.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:a,className:Ee([ru,`${ru}-${s}`]),cx:Ix(t,o,e),cy:Px(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function zx({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:a,sourcePosition:s,targetPosition:c,onReconnect:u,onReconnectStart:l,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let b=xe(),h=(x,k)=>{if(x.button!==0)return;let{autoPanOnConnect:M,domNode:S,connectionMode:C,connectionRadius:I,lib:L,onConnectStart:R,cancelConnection:A,nodeLookup:P,rfId:w,panBy:_,updateConnection:E}=b.getState(),N=k.type==="target",z=(W,V)=>{f(!1),d?.(W,n,k.type,V)},D=W=>u?.(n,W),F=(W,V)=>{f(!0),l?.(x,n,k.type),R?.(W,V)};Sr.onPointerDown(x.nativeEvent,{autoPanOnConnect:M,connectionMode:C,connectionRadius:I,domNode:S,handleId:k.id,nodeId:k.nodeId,nodeLookup:P,isTarget:N,edgeUpdaterType:k.type,lib:L,flowId:w,cancelConnection:A,panBy:_,isValidConnection:(...W)=>b.getState().isValidConnection?.(...W)??!0,onConnect:D,onConnectStart:F,onConnectEnd:(...W)=>b.getState().onConnectEnd?.(...W),onReconnectEnd:z,updateConnection:E,getTransform:()=>b.getState().transform,getFromHandle:()=>b.getState().connection.fromHandle,dragThreshold:b.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},y=x=>h(x,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=x=>h(x,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),m=()=>p(!1);return(0,H.jsxs)(H.Fragment,{children:[(e===!0||e==="source")&&(0,H.jsx)(iu,{position:s,centerX:o,centerY:r,radius:t,onMouseDown:y,onMouseEnter:v,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,H.jsx)(iu,{position:c,centerX:i,centerY:a,radius:t,onMouseDown:g,onMouseEnter:v,onMouseOut:m,type:"target"})]})}function Rx({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:b,edgeTypes:h,noPanClassName:y,onError:g,disableKeyboardA11y:v}){let m=me(J=>J.edgeLookup.get(e)),x=me(J=>J.defaultEdgeOptions);m=x?{...x,...m}:m;let k=m.type||"default",M=h?.[k]||nu[k];M===void 0&&(g?.("011",et.error011(k)),k="default",M=h?.default||nu.default);let S=!!(m.focusable||t&&typeof m.focusable>"u"),C=typeof d<"u"&&(m.reconnectable||n&&typeof m.reconnectable>"u"),I=!!(m.selectable||o&&typeof m.selectable>"u"),L=(0,$.useRef)(null),[R,A]=(0,$.useState)(!1),[P,w]=(0,$.useState)(!1),_=xe(),{zIndex:E=m.zIndex,sourceX:N,sourceY:z,targetX:D,targetY:F,sourcePosition:W,targetPosition:V}=me((0,$.useCallback)(J=>{let te=J.nodeLookup.get(m.source),Q=J.nodeLookup.get(m.target);if(!te||!Q)return ou;let q=ic({id:e,sourceNode:te,targetNode:Q,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:J.connectionMode,onError:g}),re=nc({selected:m.selected,zIndex:m.zIndex,sourceNode:te,targetNode:Q,elevateOnSelect:J.elevateEdgesOnSelect,zIndexMode:J.zIndexMode});return{...q||ou,zIndex:re}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex]),Se),K=(0,$.useMemo)(()=>m.markerStart?`url('#${wr(m.markerStart,b)}')`:void 0,[m.markerStart,b]),X=(0,$.useMemo)(()=>m.markerEnd?`url('#${wr(m.markerEnd,b)}')`:void 0,[m.markerEnd,b]);if(m.hidden||N===null||z===null||D===null||F===null)return null;let j=J=>{let{addSelectedEdges:te,unselectNodesAndEdges:Q,multiSelectionActive:q}=_.getState();I&&(_.setState({nodesSelectionActive:!1}),m.selected&&q?(Q({nodes:[],edges:[m]}),L.current?.blur()):te([e])),r&&r(J,m)},ce=i?J=>{i(J,{...m})}:void 0,B=a?J=>{a(J,{...m})}:void 0,O=s?J=>{s(J,{...m})}:void 0,Y=c?J=>{c(J,{...m})}:void 0,oe=u?J=>{u(J,{...m})}:void 0,ie=J=>{if(!v&&ia.includes(J.key)&&I){let{unselectNodesAndEdges:te,addSelectedEdges:Q}=_.getState();J.key==="Escape"?(L.current?.blur(),te({edges:[m]})):Q([e])}};return(0,H.jsx)("svg",{style:{zIndex:E},children:(0,H.jsxs)("g",{className:Ee(["react-flow__edge",`react-flow__edge-${k}`,m.className,y,{selected:m.selected,animated:m.animated,inactive:!I&&!r,updating:R,selectable:I}]),onClick:j,onDoubleClick:ce,onContextMenu:B,onMouseEnter:O,onMouseMove:Y,onMouseLeave:oe,onKeyDown:S?ie:void 0,tabIndex:S?0:void 0,role:m.ariaRole??(S?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":S?`${pu}-${b}`:void 0,ref:L,...m.domAttributes,children:[!P&&(0,H.jsx)(M,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:I,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:N,sourceY:z,targetX:D,targetY:F,sourcePosition:W,targetPosition:V,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:K,markerEnd:X,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),C&&(0,H.jsx)(zx,{edge:m,isReconnectable:C,reconnectRadius:l,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:N,sourceY:z,targetX:D,targetY:F,sourcePosition:W,targetPosition:V,setUpdateHover:A,setReconnecting:w})]})})}var Dx=(0,$.memo)(Rx),Tx=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Wu({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:a,onEdgeMouseEnter:s,onEdgeMouseMove:c,onEdgeMouseLeave:u,onEdgeClick:l,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:b,disableKeyboardA11y:h}){let{edgesFocusable:y,edgesReconnectable:g,elementsSelectable:v,onError:m}=me(Tx,Se),x=yx(t);return(0,H.jsxs)("div",{className:"react-flow__edges",children:[(0,H.jsx)(Sx,{defaultColor:e,rfId:n}),x.map(k=>(0,H.jsx)(Dx,{id:k,edgesFocusable:y,edgesReconnectable:g,elementsSelectable:v,noPanClassName:r,onReconnect:i,onContextMenu:a,onMouseEnter:s,onMouseMove:c,onMouseLeave:u,onClick:l,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:b,rfId:n,onError:m,edgeTypes:o,disableKeyboardA11y:h},k))]})}Wu.displayName="EdgeRenderer";var Ax=(0,$.memo)(Wu),au=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function Ox({children:e}){let t=xe(),n=(0,$.useRef)(null),[o]=(0,$.useState)(()=>t.getState().transform);return xu(()=>{let r=null,i=()=>{let a=t.getState().transform;r&&a[0]===r[0]&&a[1]===r[1]&&a[2]===r[2]||(r=a,n.current&&(n.current.style.transform=au(a)))};return i(),t.subscribe(i)},[t]),(0,H.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:au(o)},children:e})}function Lx(e){let t=Da(),n=(0,$.useRef)(!1);(0,$.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var $x=e=>e.panZoom?.syncViewport;function Hx(e){let t=me($x),n=xe();return(0,$.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function su(e){return e.connection.inProgress?{...e.connection,to:Yn(e.connection.to,e.transform)}:{...e.connection}}function Bx(e){return e?n=>{let o=su(n);return e(o)}:su}function Wx(e){let t=Bx(e);return me(t,Se)}var Fx=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Vx({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:a,isValid:s,inProgress:c}=me(Fx,Se);return!(i&&r&&c)?null:(0,H.jsx)("svg",{style:e,width:i,height:a,className:"react-flow__connectionline react-flow__container",children:(0,H.jsx)("g",{className:Ee(["react-flow__connection",la(s)]),children:(0,H.jsx)(Fu,{style:t,type:n,CustomComponent:o,isValid:s})})})}var Fu=({style:e,type:t=ht.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:a,fromHandle:s,fromPosition:c,to:u,toNode:l,toHandle:d,toPosition:f,pointer:p}=Wx();if(!r)return;if(n)return(0,H.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:a,fromHandle:s,fromX:i.x,fromY:i.y,toX:u.x,toY:u.y,fromPosition:c,toPosition:f,connectionStatus:la(o),toNode:l,toHandle:d,pointer:p});let b="",h={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:u.x,targetY:u.y,targetPosition:f};switch(t){case ht.Bezier:[b]=yr(h);break;case ht.SimpleBezier:[b]=Iu(h);break;case ht.Step:[b]=wo({...h,borderRadius:0});break;case ht.SmoothStep:[b]=wo(h);break;default:[b]=xr(h)}return(0,H.jsx)("path",{d:b,fill:"none",className:"react-flow__connection-path",style:e})};Fu.displayName="ConnectionLine";var Xx={};function lu(e=Xx){let t=(0,$.useRef)(e),n=xe();(0,$.useEffect)(()=>{},[e])}function Gx(){let e=xe(),t=(0,$.useRef)(!1);(0,$.useEffect)(()=>{},[])}function Vu({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:a,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:b,connectionLineStyle:h,connectionLineComponent:y,connectionLineContainerStyle:g,selectionKeyCode:v,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:k,panActivationKeyCode:M,zoomActivationKeyCode:S,deleteKeyCode:C,onlyRenderVisibleElements:I,elementsSelectable:L,defaultViewport:R,translateExtent:A,minZoom:P,maxZoom:w,preventScrolling:_,defaultMarkerColor:E,zoomOnScroll:N,zoomOnPinch:z,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:W,zoomOnDoubleClick:V,panOnDrag:K,autoPanOnSelection:X,onPaneClick:j,onPaneMouseEnter:ce,onPaneMouseMove:B,onPaneMouseLeave:O,onPaneScroll:Y,onPaneContextMenu:oe,paneClickDistance:ie,nodeClickDistance:J,onEdgeContextMenu:te,onEdgeMouseEnter:Q,onEdgeMouseMove:q,onEdgeMouseLeave:re,reconnectRadius:fe,onReconnect:Ce,onReconnectStart:Pe,onReconnectEnd:Ye,noDragClassName:nt,noWheelClassName:nn,noPanClassName:Ct,disableKeyboardA11y:Et,nodeExtent:Qe,rfId:st,viewport:Ge,onViewportChange:_t,nodesDraggable:on}){return lu(e),lu(t),Gx(),Lx(n),Hx(Ge),(0,H.jsx)(lx,{onPaneClick:j,onPaneMouseEnter:ce,onPaneMouseMove:B,onPaneMouseLeave:O,onPaneContextMenu:oe,onPaneScroll:Y,paneClickDistance:ie,deleteKeyCode:C,selectionKeyCode:v,selectionOnDrag:m,selectionMode:x,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:k,panActivationKeyCode:M,zoomActivationKeyCode:S,elementsSelectable:L,zoomOnScroll:N,zoomOnPinch:z,zoomOnDoubleClick:V,panOnScroll:D,panOnScrollSpeed:F,panOnScrollMode:W,panOnDrag:K,autoPanOnSelection:X,defaultViewport:R,translateExtent:A,minZoom:P,maxZoom:w,onSelectionContextMenu:d,preventScrolling:_,noDragClassName:nt,noWheelClassName:nn,noPanClassName:Ct,disableKeyboardA11y:Et,onViewportChange:_t,isControlledViewport:!!Ge,children:(0,H.jsxs)(Ox,{children:[(0,H.jsx)(Ax,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:a,onReconnect:Ce,onReconnectStart:Pe,onReconnectEnd:Ye,onlyRenderVisibleElements:I,onEdgeContextMenu:te,onEdgeMouseEnter:Q,onEdgeMouseMove:q,onEdgeMouseLeave:re,reconnectRadius:fe,defaultMarkerColor:E,noPanClassName:Ct,disableKeyboardA11y:Et,rfId:st}),(0,H.jsx)(Vx,{style:h,type:b,component:y,containerStyle:g}),(0,H.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,H.jsx)(bx,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:s,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:l,nodeClickDistance:J,onlyRenderVisibleElements:I,noPanClassName:Ct,noDragClassName:nt,disableKeyboardA11y:Et,nodeExtent:Qe,rfId:st,nodesDraggable:on}),(0,H.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Vu.displayName="GraphView";var qx=(0,$.memo)(Vu),Yx=ga("React Flow","https://reactflow.dev/"),cu=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c=.5,maxZoom:u=2,nodeOrigin:l,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,b=new Map,h=new Map,y=new Map,g=o??t??[],v=n??e??[],m=l??[0,0],x=d??Vn;Ea(h,y,g);let{nodesInitialized:k}=vr(v,p,b,{nodeOrigin:m,nodeExtent:x,zIndexMode:f}),M=[0,0,1];if(a&&r&&i){let S=Xn(p,{filter:R=>!!((R.width||R.initialWidth)&&(R.height||R.initialHeight))}),{x:C,y:I,zoom:L}=xo(S,r,i,c,u,s?.padding??.1);M=[C,I,L]}return{rfId:"1",width:r??0,height:i??0,transform:M,nodes:v,nodesInitialized:k,nodeLookup:p,parentLookup:b,edges:g,edgeLookup:y,connectionLookup:h,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:u,translateExtent:Vn,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Gt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:a??!1,fitViewOptions:s,fitViewResolver:null,connection:{...sa},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Yx,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:aa,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},Ux=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f})=>$c((p,b)=>{async function h(){let{nodeLookup:y,panZoom:g,fitViewOptions:v,fitViewResolver:m,width:x,height:k,minZoom:M,maxZoom:S}=b();g&&(await Kl({nodes:y,width:x,height:k,panZoom:g,minZoom:M,maxZoom:S},v),m?.resolve(!0),p({fitViewResolver:null}))}return{...cu({nodes:e,edges:t,width:r,height:i,fitView:a,fitViewOptions:s,minZoom:c,maxZoom:u,nodeOrigin:l,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:y=>{let{nodeLookup:g,parentLookup:v,nodeOrigin:m,elevateNodesOnSelect:x,fitViewQueued:k,zIndexMode:M,nodesSelectionActive:S}=b(),{nodesInitialized:C,hasSelectedNodes:I}=vr(y,g,v,{nodeOrigin:m,nodeExtent:d,elevateNodesOnSelect:x,checkEquality:!0,zIndexMode:M}),L=S&&I;k&&C?(h(),p({nodes:y,nodesInitialized:C,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:L})):p({nodes:y,nodesInitialized:C,nodesSelectionActive:L})},setEdges:y=>{let{connectionLookup:g,edgeLookup:v}=b();Ea(g,v,y),p({edges:y})},setDefaultNodesAndEdges:(y,g)=>{if(y){let{setNodes:v}=b();v(y),p({hasDefaultNodes:!0})}if(g){let{setEdges:v}=b();v(g),p({hasDefaultEdges:!0})}},updateNodeInternals:y=>{let{triggerNodeChanges:g,nodeLookup:v,parentLookup:m,domNode:x,nodeOrigin:k,nodeExtent:M,debug:S,fitViewQueued:C,zIndexMode:I}=b(),{changes:L,updatedInternals:R}=uc(y,v,m,x,k,M,I);R&&(lc(v,m,{nodeOrigin:k,nodeExtent:M,zIndexMode:I}),C?(h(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),L?.length>0&&(S&&console.log("React Flow: trigger node changes",L),g?.(L)))},updateNodePositions:(y,g=!1)=>{let v=[],m=[],{nodeLookup:x,triggerNodeChanges:k,connection:M,updateConnection:S,onNodesChangeMiddlewareMap:C}=b();for(let[I,L]of y){let R=x.get(I),A=!!(R?.expandParent&&R?.parentId&&L?.position),P={id:I,type:"position",position:A?{x:Math.max(0,L.position.x),y:Math.max(0,L.position.y)}:L.position,dragging:g};if(R&&M.inProgress&&M.fromNode.id===R.id){let w=qt(R,M.fromHandle,ne.Left,!0);S({...M,from:w})}A&&R.parentId&&v.push({id:I,parentId:R.parentId,rect:{...L.internals.positionAbsolute,width:L.measured.width??0,height:L.measured.height??0}}),m.push(P)}if(v.length>0){let{parentLookup:I,nodeOrigin:L}=b(),R=kr(v,x,I,L);m.push(...R)}for(let I of C.values())m=I(m);k(m)},triggerNodeChanges:y=>{let{onNodesChange:g,setNodes:v,nodes:m,hasDefaultNodes:x,debug:k}=b();if(y?.length){if(x){let M=hu(y,m);v(M)}k&&console.log("React Flow: trigger node changes",y),g?.(y)}},triggerEdgeChanges:y=>{let{onEdgesChange:g,setEdges:v,edges:m,hasDefaultEdges:x,debug:k}=b();if(y?.length){if(x){let M=bu(y,m);v(M)}k&&console.log("React Flow: trigger edge changes",y),g?.(y)}},addSelectedNodes:y=>{let{multiSelectionActive:g,edgeLookup:v,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:k}=b();if(g){let M=y.map(S=>wn(S,!0));x(M);return}x(Kn(m,new Set([...y]),!0)),k(Kn(v))},addSelectedEdges:y=>{let{multiSelectionActive:g,edgeLookup:v,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:k}=b();if(g){let M=y.map(S=>wn(S,!0));k(M);return}k(Kn(v,new Set([...y]))),x(Kn(m,new Set,!0))},unselectNodesAndEdges:({nodes:y,edges:g}={})=>{let{edges:v,nodes:m,nodeLookup:x,triggerNodeChanges:k,triggerEdgeChanges:M}=b(),S=y||m,C=g||v,I=[];for(let R of S){if(!R.selected)continue;let A=x.get(R.id);A&&(A.selected=!1),I.push(wn(R.id,!1))}let L=[];for(let R of C)R.selected&&L.push(wn(R.id,!1));k(I),M(L)},setMinZoom:y=>{let{panZoom:g,maxZoom:v}=b();g?.setScaleExtent([y,v]),p({minZoom:y})},setMaxZoom:y=>{let{panZoom:g,minZoom:v}=b();g?.setScaleExtent([v,y]),p({maxZoom:y})},setTranslateExtent:y=>{b().panZoom?.setTranslateExtent(y),p({translateExtent:y})},resetSelectedElements:()=>{let{edges:y,nodes:g,triggerNodeChanges:v,triggerEdgeChanges:m,elementsSelectable:x}=b();if(!x)return;let k=g.reduce((S,C)=>C.selected?[...S,wn(C.id,!1)]:S,[]),M=y.reduce((S,C)=>C.selected?[...S,wn(C.id,!1)]:S,[]);v(k),m(M)},setNodeExtent:y=>{let{nodes:g,nodeLookup:v,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:k,nodeExtent:M,zIndexMode:S}=b();y[0][0]===M[0][0]&&y[0][1]===M[0][1]&&y[1][0]===M[1][0]&&y[1][1]===M[1][1]||(vr(g,v,m,{nodeOrigin:x,nodeExtent:y,elevateNodesOnSelect:k,checkEquality:!1,zIndexMode:S}),p({nodeExtent:y}))},panBy:y=>{let{transform:g,width:v,height:m,panZoom:x,translateExtent:k}=b();return dc({delta:y,panZoom:x,transform:g,translateExtent:k,width:v,height:m})},setCenter:async(y,g,v)=>{let{width:m,height:x,maxZoom:k,panZoom:M}=b();if(!M)return!1;let S=typeof v?.zoom<"u"?v.zoom:k;return await M.setViewport({x:m/2-y*S,y:x/2-g*S,zoom:S},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...sa}})},updateConnection:y=>{p({connection:y})},reset:()=>p({...cu()})}},Object.is);function Zx({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:a,initialMaxZoom:s,initialFitViewOptions:c,fitView:u,nodeOrigin:l,nodeExtent:d,zIndexMode:f,children:p}){let[b]=(0,$.useState)(()=>Ux({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:u,minZoom:a,maxZoom:s,fitViewOptions:c,nodeOrigin:l,nodeExtent:d,zIndexMode:f}));return(0,H.jsx)(uy,{value:b,children:(0,H.jsx)(Ty,{children:(0,H.jsx)(Zy,{children:p})})})}function Kx({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:a,fitView:s,fitViewOptions:c,minZoom:u,maxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,$.useContext)(Ir)?(0,H.jsx)(H.Fragment,{children:e}):(0,H.jsx)(Zx,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:a,fitView:s,initialFitViewOptions:c,initialMinZoom:u,initialMaxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var jx={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function Qx({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:a,onNodeClick:s,onEdgeClick:c,onInit:u,onMove:l,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:b,onConnectEnd:h,onClickConnectStart:y,onClickConnectEnd:g,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:k,onNodeDoubleClick:M,onNodeDragStart:S,onNodeDrag:C,onNodeDragStop:I,onNodesDelete:L,onEdgesDelete:R,onDelete:A,onSelectionChange:P,onSelectionDragStart:w,onSelectionDrag:_,onSelectionDragStop:E,onSelectionContextMenu:N,onSelectionStart:z,onSelectionEnd:D,onBeforeDelete:F,connectionMode:W,connectionLineType:V=ht.Bezier,connectionLineStyle:K,connectionLineComponent:X,connectionLineContainerStyle:j,deleteKeyCode:ce="Backspace",selectionKeyCode:B="Shift",selectionOnDrag:O=!1,selectionMode:Y=hn.Full,panActivationKeyCode:oe="Space",multiSelectionKeyCode:ie=Un()?"Meta":"Control",zoomActivationKeyCode:J=Un()?"Meta":"Control",snapToGrid:te,snapGrid:Q,onlyRenderVisibleElements:q=!1,selectNodesOnDrag:re,nodesDraggable:fe,autoPanOnNodeFocus:Ce,nodesConnectable:Pe,nodesFocusable:Ye,nodeOrigin:nt=mu,edgesFocusable:nn,edgesReconnectable:Ct,elementsSelectable:Et=!0,defaultViewport:Qe=Sy,minZoom:st=.5,maxZoom:Ge=2,translateExtent:_t=Vn,preventScrolling:on=!0,nodeExtent:En,defaultMarkerColor:eo="#b1b1b7",zoomOnScroll:Po=!0,zoomOnPinch:Wt=!0,panOnScroll:_n=!1,panOnScrollSpeed:$e=.5,panOnScrollMode:zo=Lt.Free,zoomOnDoubleClick:Ro=!0,panOnDrag:Do=!0,onPaneClick:ii,onPaneMouseEnter:ai,onPaneMouseMove:si,onPaneMouseLeave:li,onPaneScroll:ci,onPaneContextMenu:ui,paneClickDistance:di=1,nodeClickDistance:fi=0,children:pi,onReconnect:rn,onReconnectStart:It,onReconnectEnd:To,onEdgeContextMenu:Pt,onEdgeDoubleClick:zt,onEdgeMouseEnter:mi,onEdgeMouseMove:Ao,onEdgeMouseLeave:In,reconnectRadius:Oo=10,onNodesChange:gi,onEdgesChange:hi,noDragClassName:T="nodrag",noWheelClassName:G="nowheel",noPanClassName:Z="nopan",fitView:le,fitViewOptions:ke,connectOnClick:an,attributionPosition:sn,proOptions:jp,defaultEdgeOptions:Qp,elevateNodesOnSelect:Jp=!0,elevateEdgesOnSelect:em=!1,disableKeyboardA11y:ks=!1,autoPanOnConnect:tm,autoPanOnNodeDrag:nm,autoPanOnSelection:om=!0,autoPanSpeed:rm,connectionRadius:im,isValidConnection:am,onError:sm,style:lm,id:Ss,nodeDragThreshold:cm,connectionDragThreshold:um,viewport:dm,onViewportChange:fm,width:pm,height:mm,colorMode:gm="light",debug:hm,onScroll:Ms,ariaLabelConfig:bm,zIndexMode:Ns="basic",...ym},xm){let bi=Ss||"1",wm=Ey(gm),vm=(0,$.useCallback)(Cs=>{Cs.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Ms?.(Cs)},[Ms]);return(0,H.jsx)("div",{"data-testid":"rf__wrapper",...ym,onScroll:vm,style:{...lm,...jx},ref:xm,className:Ee(["react-flow",r,wm]),id:Ss,role:"application",children:(0,H.jsxs)(Kx,{nodes:e,edges:t,width:pm,height:mm,fitView:le,fitViewOptions:ke,minZoom:st,maxZoom:Ge,nodeOrigin:nt,nodeExtent:En,zIndexMode:Ns,children:[(0,H.jsx)(Cy,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:b,onConnectEnd:h,onClickConnectStart:y,onClickConnectEnd:g,nodesDraggable:fe,autoPanOnNodeFocus:Ce,nodesConnectable:Pe,nodesFocusable:Ye,edgesFocusable:nn,edgesReconnectable:Ct,elementsSelectable:Et,elevateNodesOnSelect:Jp,elevateEdgesOnSelect:em,minZoom:st,maxZoom:Ge,nodeExtent:En,onNodesChange:gi,onEdgesChange:hi,snapToGrid:te,snapGrid:Q,connectionMode:W,translateExtent:_t,connectOnClick:an,defaultEdgeOptions:Qp,fitView:le,fitViewOptions:ke,onNodesDelete:L,onEdgesDelete:R,onDelete:A,onNodeDragStart:S,onNodeDrag:C,onNodeDragStop:I,onSelectionDrag:_,onSelectionDragStart:w,onSelectionDragStop:E,onMove:l,onMoveStart:d,onMoveEnd:f,noPanClassName:Z,nodeOrigin:nt,rfId:bi,autoPanOnConnect:tm,autoPanOnNodeDrag:nm,autoPanSpeed:rm,onError:sm,connectionRadius:im,isValidConnection:am,selectNodesOnDrag:re,nodeDragThreshold:cm,connectionDragThreshold:um,onBeforeDelete:F,debug:hm,ariaLabelConfig:bm,zIndexMode:Ns}),(0,H.jsx)(qx,{onInit:u,onNodeClick:s,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:k,onNodeDoubleClick:M,nodeTypes:i,edgeTypes:a,connectionLineType:V,connectionLineStyle:K,connectionLineComponent:X,connectionLineContainerStyle:j,selectionKeyCode:B,selectionOnDrag:O,selectionMode:Y,deleteKeyCode:ce,multiSelectionKeyCode:ie,panActivationKeyCode:oe,zoomActivationKeyCode:J,onlyRenderVisibleElements:q,defaultViewport:Qe,translateExtent:_t,minZoom:st,maxZoom:Ge,preventScrolling:on,zoomOnScroll:Po,zoomOnPinch:Wt,zoomOnDoubleClick:Ro,panOnScroll:_n,panOnScrollSpeed:$e,panOnScrollMode:zo,panOnDrag:Do,autoPanOnSelection:om,onPaneClick:ii,onPaneMouseEnter:ai,onPaneMouseMove:si,onPaneMouseLeave:li,onPaneScroll:ci,onPaneContextMenu:ui,paneClickDistance:di,nodeClickDistance:fi,onSelectionContextMenu:N,onSelectionStart:z,onSelectionEnd:D,onReconnect:rn,onReconnectStart:It,onReconnectEnd:To,onEdgeContextMenu:Pt,onEdgeDoubleClick:zt,onEdgeMouseEnter:mi,onEdgeMouseMove:Ao,onEdgeMouseLeave:In,reconnectRadius:Oo,defaultMarkerColor:eo,noDragClassName:T,noWheelClassName:G,noPanClassName:Z,rfId:bi,disableKeyboardA11y:ks,nodeExtent:En,viewport:dm,onViewportChange:fm,nodesDraggable:fe}),(0,H.jsx)(ky,{onSelectionChange:P}),pi,(0,H.jsx)(by,{proOptions:jp,position:sn}),(0,H.jsx)(hy,{rfId:bi,disableKeyboardA11y:ks})]})})}var Xu=yu(Qx);function Gu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>hu(r,i)),[]);return[t,n,o]}function qu(e){let[t,n]=(0,$.useState)(e),o=(0,$.useCallback)(r=>n(i=>bu(r,i)),[]);return[t,n,o]}var Ck=et.error014();function Jx({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,H.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Ee(["react-flow__background-pattern",n,o])})}function ew({radius:e,className:t}){return(0,H.jsx)("circle",{cx:e,cy:e,r:e,className:Ee(["react-flow__background-pattern","dots",t])})}var bt;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(bt||(bt={}));var tw={[bt.Dots]:1,[bt.Lines]:1,[bt.Cross]:6},nw=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Yu({id:e,variant:t=bt.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:a,bgColor:s,style:c,className:u,patternClassName:l}){let d=(0,$.useRef)(null),{transform:f,patternId:p}=me(nw,Se),b=o||tw[t],h=t===bt.Dots,y=t===bt.Cross,g=Array.isArray(n)?n:[n,n],v=[g[0]*f[2]||1,g[1]*f[2]||1],m=b*f[2],x=Array.isArray(i)?i:[i,i],k=y?[m,m]:v,M=[x[0]*f[2]||1+k[0]/2,x[1]*f[2]||1+k[1]/2],S=`${p}${e||""}`;return(0,H.jsxs)("svg",{className:Ee(["react-flow__background",u]),style:{...c,...zr,"--xy-background-color-props":s,"--xy-background-pattern-color-props":a},ref:d,"data-testid":"rf__background",children:[(0,H.jsx)("pattern",{id:S,x:f[0]%v[0],y:f[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${M[0]},-${M[1]})`,children:h?(0,H.jsx)(ew,{radius:m/2,className:l}):(0,H.jsx)(Jx,{dimensions:k,lineWidth:r,variant:t,className:l})}),(0,H.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${S})`})]})}Yu.displayName="Background";var Uu=(0,$.memo)(Yu);function ow(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,H.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function rw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,H.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function iw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,H.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function aw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function sw(){return(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,H.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Er({children:e,className:t,...n}){return(0,H.jsx)("button",{type:"button",className:Ee(["react-flow__controls-button",t]),...n,children:e})}var lw=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function Zu({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:a,onFitView:s,onInteractiveChange:c,className:u,children:l,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let b=xe(),{isInteractive:h,minZoomReached:y,maxZoomReached:g,ariaLabelConfig:v}=me(lw,Se),{zoomIn:m,zoomOut:x,fitView:k}=Da(),M=()=>{m(),i?.()},S=()=>{x(),a?.()},C=()=>{k(r),s?.()},I=()=>{b.setState({nodesDraggable:!h,nodesConnectable:!h,elementsSelectable:!h}),c?.(!h)};return(0,H.jsxs)(Pr,{className:Ee(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",u]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Er,{onClick:M,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:g,children:(0,H.jsx)(ow,{})}),(0,H.jsx)(Er,{onClick:S,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:y,children:(0,H.jsx)(rw,{})})]}),n&&(0,H.jsx)(Er,{className:"react-flow__controls-fitview",onClick:C,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,H.jsx)(iw,{})}),o&&(0,H.jsx)(Er,{className:"react-flow__controls-interactive",onClick:I,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:h?(0,H.jsx)(sw,{}):(0,H.jsx)(aw,{})}),l]})}Zu.displayName="Controls";var Ek=(0,$.memo)(Zu);function cw({id:e,x:t,y:n,width:o,height:r,style:i,color:a,strokeColor:s,strokeWidth:c,className:u,borderRadius:l,shapeRendering:d,selected:f,onClick:p}){let{background:b,backgroundColor:h}=i||{},y=a||b||h;return(0,H.jsx)("rect",{className:Ee(["react-flow__minimap-node",{selected:f},u]),x:t,y:n,rx:l,ry:l,width:o,height:r,style:{fill:y,stroke:s,strokeWidth:c},shapeRendering:d,onClick:p?g=>p(g,e):void 0})}var uw=(0,$.memo)(cw),dw=e=>e.nodes.map(t=>t.id),za=e=>e instanceof Function?e:()=>e;function fw({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=uw,onClick:a}){let s=me(dw,Se),c=za(t),u=za(e),l=za(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,H.jsx)(H.Fragment,{children:s.map(f=>(0,H.jsx)(mw,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:u,nodeClassNameFunc:l,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:a,shapeRendering:d},f))})}function pw({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:a,NodeComponent:s,onClick:c}){let{node:u,x:l,y:d,width:f,height:p}=me(b=>{let h=b.nodeLookup.get(e);if(!h)return{node:void 0,x:0,y:0,width:0,height:0};let y=h.internals.userNode,{x:g,y:v}=h.internals.positionAbsolute,{width:m,height:x}=dt(y);return{node:y,x:g,y:v,width:m,height:x}},Se);return!u||u.hidden||!ha(u)?null:(0,H.jsx)(s,{x:l,y:d,width:f,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:r,strokeColor:n(u),strokeWidth:i,shapeRendering:a,onClick:c,id:u.id})}var mw=(0,$.memo)(pw),gw=(0,$.memo)(fw),hw=200,bw=150,yw=e=>!e.hidden,xw=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:t,boundingRect:e.nodeLookup.size>0?pa(Xn(e.nodeLookup,{filter:yw}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},uu=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,ww=(e,t)=>uu(e.viewBB,t.viewBB)&&uu(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,vw="react-flow__minimap-desc";function Ku({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:a,nodeComponent:s,bgColor:c,maskColor:u,maskStrokeColor:l,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:b,pannable:h=!1,zoomable:y=!1,ariaLabel:g,inversePan:v,zoomStep:m=1,offsetScale:x=5}){let k=xe(),M=(0,$.useRef)(null),{boundingRect:S,viewBB:C,rfId:I,panZoom:L,translateExtent:R,flowWidth:A,flowHeight:P,ariaLabelConfig:w}=me(xw,ww),_=e?.width??hw,E=e?.height??bw,N=S.width/_,z=S.height/E,D=Math.max(N,z),F=D*_,W=D*E,V=x*D,K=S.x-(F-S.width)/2-V,X=S.y-(W-S.height)/2-V,j=F+V*2,ce=W+V*2,B=`${vw}-${I}`,O=(0,$.useRef)(0),Y=(0,$.useRef)();O.current=D,(0,$.useEffect)(()=>{if(M.current&&L)return Y.current=yc({domNode:M.current,panZoom:L,getTransform:()=>k.getState().transform,getViewScale:()=>O.current}),()=>{Y.current?.destroy()}},[L]),(0,$.useEffect)(()=>{Y.current?.update({translateExtent:R,width:A,height:P,inversePan:v,pannable:h,zoomStep:m,zoomable:y})},[h,y,v,m,R,A,P]);let oe=p?te=>{let[Q,q]=Y.current?.pointer(te)||[0,0];p(te,{x:Q,y:q})}:void 0,ie=b?(0,$.useCallback)((te,Q)=>{let q=k.getState().nodeLookup.get(Q).internals.userNode;b(te,q)},[]):void 0,J=g??w["minimap.ariaLabel"];return(0,H.jsx)(Pr,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof a=="number"?a:void 0},className:Ee(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,H.jsxs)("svg",{width:_,height:E,viewBox:`${K} ${X} ${j} ${ce}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":B,ref:M,onClick:oe,children:[J&&(0,H.jsx)("title",{id:B,children:J}),(0,H.jsx)(gw,{onClick:ie,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:a,nodeComponent:s}),(0,H.jsx)("path",{className:"react-flow__minimap-mask",d:`M${K-V},${X-V}h${j+V*2}v${ce+V*2}h${-j-V*2}z
        M${C.x},${C.y}h${C.width}v${C.height}h${-C.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Ku.displayName="MiniMap";var ju=(0,$.memo)(Ku),kw=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Sw={[Yt.Line]:"right",[Yt.Handle]:"bottom-right"};function Mw({nodeId:e,position:t,variant:n=Yt.Handle,className:o,style:r=void 0,children:i,color:a,minWidth:s=10,minHeight:c=10,maxWidth:u=Number.MAX_VALUE,maxHeight:l=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:b,onResizeStart:h,onResize:y,onResizeEnd:g}){let v=Su(),m=typeof e=="string"?e:v,x=xe(),k=(0,$.useRef)(null),M=n===Yt.Handle,S=me((0,$.useCallback)(kw(M&&p),[M,p]),Se),C=(0,$.useRef)(null),I=t??Sw[n];(0,$.useEffect)(()=>{if(!(!k.current||!m))return C.current||(C.current=Sc({domNode:k.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:R,transform:A,snapGrid:P,snapToGrid:w,nodeOrigin:_,domNode:E}=x.getState();return{nodeLookup:R,transform:A,snapGrid:P,snapToGrid:w,nodeOrigin:_,paneDomNode:E}},onChange:(R,A)=>{let{triggerNodeChanges:P,nodeLookup:w,parentLookup:_,nodeOrigin:E}=x.getState(),N=[],z={x:R.x,y:R.y},D=w.get(m);if(D&&D.expandParent&&D.parentId){let F=D.origin??E,W=R.width??D.measured.width??0,V=R.height??D.measured.height??0,K={id:D.id,parentId:D.parentId,rect:{width:W,height:V,...ba({x:R.x??D.position.x,y:R.y??D.position.y},{width:W,height:V},D.parentId,w,F)}},X=kr([K],w,_,E);N.push(...X),z.x=R.x?Math.max(F[0]*W,R.x):void 0,z.y=R.y?Math.max(F[1]*V,R.y):void 0}if(z.x!==void 0&&z.y!==void 0){let F={id:m,type:"position",position:{...z}};N.push(F)}if(R.width!==void 0&&R.height!==void 0){let W={id:m,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:R.width,height:R.height}};N.push(W)}for(let F of A){let W={...F,type:"position"};N.push(W)}P(N)},onEnd:({width:R,height:A})=>{let P={id:m,type:"dimensions",resizing:!1,dimensions:{width:R,height:A}};x.getState().triggerNodeChanges([P])}})),C.current.update({controlPosition:I,boundaries:{minWidth:s,minHeight:c,maxWidth:u,maxHeight:l},keepAspectRatio:d,resizeDirection:f,onResizeStart:h,onResize:y,onResizeEnd:g,shouldResize:b}),()=>{C.current?.destroy()}},[I,s,c,u,l,d,h,y,g,b]);let L=I.split("-");return(0,H.jsx)("div",{className:Ee(["react-flow__resize-control","nodrag",...L,n,o]),ref:k,style:{...r,scale:S,...a&&{[M?"backgroundColor":"borderColor"]:a}},children:i})}var _k=(0,$.memo)(Mw);var Qu=/[\w\u4e00-\u9fa5.-]/;var Nw=/[\p{L}\p{N}]/u;function Ju(e){return e===void 0?!0:!Nw.test(e)}function ed(e){return e.trim().replace(/\s+/g," ")}function Cw(e){let t=[],n=0;for(;n<e.length;){if(e[n]!=="@"){n+=1;continue}let o=e[n+1];if(o==="@"){t.push({kind:"escape",start:n,end:n+2}),n+=2;continue}if(o==="{"){let r=e.indexOf("}",n+2);if(r===-1){n+=1;continue}let i=e.slice(n+2,r);i.trim()!==""&&Ju(e[n-1])&&t.push({kind:"ref",token:{name:i,start:n,end:r+1}}),n=r+1;continue}if(o!==void 0&&Qu.test(o)){let r=n+1;for(;r<e.length;){let i=e[r];if(i===void 0||!Qu.test(i))break;r+=1}Ju(e[n-1])&&t.push({kind:"ref",token:{name:e.slice(n+1,r),start:n,end:r}}),n=r;continue}n+=1}return t}function Ew(e){let t=[];for(let n of Cw(e))n.kind==="ref"&&t.push(n.token);return t}function td(e,t){let n=Ew(e);if(n.length===0)return{mode:"all",ids:[],unknown:[]};let o=new Map;for(let c of t){let u=ed(c.name);if(u==="")continue;let l=o.get(u);l===void 0?o.set(u,[c.id]):l.includes(c.id)||l.push(c.id)}let r=[],i=new Set,a=[],s=new Set;for(let c of n){let u=ed(c.name),l=o.get(u);if(l===void 0){s.has(u)||(s.add(u),a.push(u));continue}for(let d of l)i.has(d)||(i.add(d),r.push(d))}return a.length>0?{mode:"invalid",ids:r,unknown:a}:{mode:"explicit",ids:r,unknown:[]}}var _w=/\.(png|jpe?g|webp|gif|bmp)$/i;function rd(e){return e.type.startsWith("image/")?!0:_w.test(e.name)}var nd=30,od=200;function id(e,t){if(t&&Math.abs(t.x-e.x)<od&&Math.abs(t.y-e.y)<od){let n={x:t.x+nd,y:t.y+nd};return{position:n,next:n}}return{position:e,next:e}}var Iw=/^(?:node-enter|node-exiting|enter-delay-[1-3])$/;function Aa(e){if(!e)return;let t=e.split(/\s+/).filter(n=>n&&!Iw.test(n));return t.length?t.join(" "):void 0}function kn(e,t){return{id:`img-${e.id}`,type:"image",position:t,data:{registryId:e.id,name:e.name,url:e.url,size:e.size,ext:e.ext,refCount:0,absPath:e.absPath}}}function ad(e,t){return{id:`prompt-${Date.now()}`,type:"prompt",position:e,data:{prompt:"",size:t.size,quality:t.quality,outputDir:t.outputDir,status:"idle"}}}function sd(e){return{id:`group-${Date.now()}`,type:"group",position:e,data:{name:"\u56FE\u7247\u7EC4",imageCount:0,totalSize:0}}}function Pw(e){let t=!1,n=e.map(o=>{let r=o;if(!(r.style!==void 0||r.className!==void 0||r.animated!==void 0||r.markerEnd!==void 0||r.markerStart!==void 0))return o;t=!0;let a={...o};return delete a.style,delete a.className,delete a.animated,delete a.markerEnd,delete a.markerStart,a});return t?n:e}function Oa(e,t,n,o){let r=new Set(n),i=typeof o?.size=="string"&&o.size?o.size:"1024x1024",a=typeof o?.quality=="string"&&o.quality?o.quality:"high",s=h=>typeof h=="string"?h:"",c=h=>typeof h=="number"&&Number.isFinite(h)?h:0,u=h=>{if(!h||typeof h!="object")return null;let{x:y,y:g}=h;return typeof y!="number"||typeof g!="number"||!Number.isFinite(y)||!Number.isFinite(g)?null:{x:y,y:g}},l=new Set(["image","prompt","group"]),d=[],f=new Set,p=e.flatMap(h=>{if(!h||typeof h!="object")return d.push({id:"?",reason:"\u4E0D\u662F\u4E00\u4E2A\u8282\u70B9\u5BF9\u8C61"}),[];let y=s(h.id);if(!y)return d.push({id:"?",reason:"\u6CA1\u6709 id"}),[];let g=s(h.type);if(!l.has(g))return d.push({id:y,reason:g?`\u8BA4\u4E0D\u51FA\u7684\u8282\u70B9\u7C7B\u578B\u300C${g}\u300D`:"\u6CA1\u6709\u8282\u70B9\u7C7B\u578B"}),[];let v=u(h.position);if(!v)return d.push({id:y,reason:"\u6CA1\u6709\u6709\u6548\u5750\u6807"}),[];let m=h.data;if(!m||typeof m!="object")return d.push({id:y,reason:"\u6CA1\u6709 data"}),[];f.add(y);let x=Aa(h.className),k={...h,position:v};x===void 0?delete k.className:k.className=x;let M=m;if(g==="image"){let S=s(M.registryId);return[{...k,type:"image",data:{...M,registryId:S,name:s(M.name),url:s(M.url),size:c(M.size),ext:s(M.ext),...r.has(S)?{missing:!0}:{}}}]}return g==="group"?[{...k,type:"group",data:{...M,name:s(M.name),imageCount:c(M.imageCount),totalSize:c(M.totalSize)}}]:[{...k,type:"prompt",data:{...M,prompt:s(M.prompt),size:s(M.size)||i,quality:s(M.quality)||a,outputDir:s(M.outputDir),status:"idle",startedAtMs:void 0,resultCount:void 0,message:void 0}}]}),b=Pw(t.filter(h=>f.has(s(h?.source))&&f.has(s(h?.target))));return{nodes:p,edges:b,dropped:d}}function ld(e){return e.filter(t=>t.type==="prompt").map(t=>({nodeId:t.id,taskId:String(t.data.taskId??"")})).filter(t=>!!t.taskId)}function it(e,t,n){let o=!1,r=e.map(i=>i.id!==t||i.type!=="prompt"||Object.keys(n).every(s=>i.data[s]===n[s])?i:(o=!0,{...i,data:{...i.data,...n}}));return o?r:e}function cd(e,t,n){if(!n.source||!n.target||n.source===n.target)return!1;let o=new Map(e.map(a=>[a.id,a])),r=o.get(n.source),i=o.get(n.target);return r?.type==="image"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="group"?!(i?.type!=="prompt"&&i?.type!=="group"||i?.type==="prompt"&&t.some(a=>a.target===n.target)):r?.type==="prompt"?i?.type==="image":!1}function zw(e,t){let n=new Map,o=new Map;for(let i of t){let a=n.get(i.target);a?a.push(i.source):n.set(i.target,[i.source]);let s=o.get(i.source);s?s.push(i.target):o.set(i.source,[i.target])}return{byId:new Map(e.map(i=>[i.id,i])),incoming:n,outEdges:o}}function Rw(e,t,n){let{byId:o,outEdges:r}=t;for(let i of e){if(i.type!=="image")continue;let a=new Set([i.id]),s=new Set,c=[...r.get(i.id)??[]];for(;c.length;){let u=c.pop();if(a.has(u))continue;a.add(u);let l=o.get(u);l&&(l.type==="prompt"?s.add(u):l.type==="group"&&c.push(...r.get(u)??[]))}n.set(i.data.registryId,s.size)}}function ud(e,t,n){let{byId:o,incoming:r}=n;if(t.has(e))return{count:0,ids:[]};if(o.get(e)?.type!=="group")return{count:0,ids:[]};t.add(e);let a=0,s=[];for(let c of r.get(e)??[]){let u=o.get(c);if(u){if(u.type==="image")a+=1,s.push(u.data.registryId);else if(u.type==="group"){let l=ud(c,t,n);a+=l.count,s.push(...l.ids)}}}return t.delete(e),{count:a,ids:s}}function Dw(e,t,n,o,r){let i=new Map;for(let a of e)a.type==="image"&&i.set(a.data.registryId,a.data.size??0);for(let a of e){if(a.type!=="group")continue;let{count:s,ids:c}=ud(a.id,new Set,t),u=new Set(c);n.set(a.id,u.size),o.set(a.id,Array.from(u).reduce((l,d)=>l+(i.get(d)??0),0)),r.set(a.id,s-u.size)}}function dd(e,t){let n=new Map,o=new Map,r=new Map,i=new Map;for(let s of e)s.type==="image"&&n.set(s.data.registryId,0),s.type==="group"&&(o.set(s.id,0),r.set(s.id,0),i.set(s.id,0));let a=zw(e,t);return Rw(e,a,n),Dw(e,a,o,r,i),{refCounts:n,groupCounts:o,groupSizes:r,groupDups:i}}function Tw(e,t,n){let o=new Map(e.map(s=>[s.id,s])),r=[],i=new Set([n]),a=t.filter(s=>s.target===n).map(s=>s.source);for(;a.length;){let s=a.pop();if(i.has(s))continue;i.add(s);let c=o.get(s);c&&(c.type==="image"?r.push(c):c.type==="group"&&t.filter(u=>u.target===s).forEach(u=>a.push(u.source)))}return r}function fd(e,t,n,o){let r=Tw(e,t,n),i=r.map(u=>({id:u.id,name:u.type==="image"?u.data.name:""})),a=td(o,i);if(a.mode==="all")return{images:r,unknown:[],mode:"all"};let s=new Map(r.map(u=>[u.id,u])),c=[];for(let u of a.ids){let l=s.get(u);l&&c.push(l)}return{images:c,unknown:a.unknown,mode:a.mode}}function Dr(e,t){let n=e.position.x-t.position.x,o=e.position.y-t.position.y;return n*n+o*o}function Tr(e,t){return t.reduce((n,o)=>!n||Dr(e,o)<Dr(e,n)?o:n,null)}function ko(e,t,n){let o=`${t.id}->${n.id}`;e.pairs.has(o)||(e.next.push({id:o,source:t.id,target:n.id}),e.pairs.add(o),e.connected.add(t.id))}function Aw(e,t,n,o){for(let r of t.filter(i=>i.type==="image"&&!e.connected.has(i.id))){let i=Tr(r,n);if(i&&r.position.y>i.position.y){ko(e,i,r);continue}let a=Tr(r,o.filter(s=>s.position.y>=r.position.y));a&&(!i||Dr(r,a)<Dr(r,i))?ko(e,r,a):i&&ko(e,r,i)}}function Ow(e,t,n,o){for(let r of t)if(!e.next.some(a=>a.source===r.id&&o.has(a.target))){let a=Tr(r,n);a&&ko(e,r,a)}}function Lw(e,t,n,o){let r=n.filter(a=>e.next.some(s=>s.target===a.id&&o.get(s.source)?.type==="image")),i=r.length?r:n;for(let a of t){if(e.next.some(u=>{let l=o.get(u.source)?.type;return u.target===a.id&&(l==="image"||l==="group")}))continue;let c=Tr(a,i);c&&ko(e,c,a)}}function La(e,t){let n=e.filter(s=>s.type==="prompt"),o=e.filter(s=>s.type==="group");if(!n.length&&!o.length)return t;let r=new Map(e.map(s=>[s.id,s])),i=new Set(n.map(s=>s.id)),a={next:[...t],connected:new Set(t.flatMap(s=>[s.source,s.target])),pairs:new Set(t.map(s=>`${s.source}->${s.target}`))};return Aw(a,e,n,o),Ow(a,o,n,i),Lw(a,n,o,r),a.next}function pd(e,t,n){if(!n.size)return t;let o=e.filter(r=>n.has(r.id));return o.length?La(o,t):t}function md(e,t){return{nodes:e.map(n=>{let o=Aa(n.className),r={...n};if(o===void 0?delete r.className:r.className=o,r.type==="image"){let{maskDataUrl:d,...f}=r.data;return{...r,data:f}}if(r.type!=="prompt")return r;let{startedAtMs:i,resultCount:a,message:s,cancelRequested:c,...u}=r.data,l=d=>typeof d=="string"?d:"";return{...r,data:{...u,prompt:l(u.prompt),size:l(u.size),quality:l(u.quality)||"high",outputDir:l(u.outputDir),status:"idle"}}}),edges:[...t]}}async function Me(e,t){let n=await fetch(`imagora/${e}`,t),o=await n.text(),r=null;try{r=o?JSON.parse(o):null}catch{r=null}if(!n.ok){let i=(r&&typeof r=="object"&&"error"in r?String(r.error):"")||o.slice(0,200);throw Object.assign(new Error(i||`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`),{status:n.status,body:r})}return r}function qe(e){return{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}}var gd=()=>Me("config");var hd=()=>Me("assets"),Ar=async(e,t)=>{let n=await fetch(`imagora/upload?name=${encodeURIComponent(t)}`,{method:"POST",body:e}),o=await n.text(),r=o?JSON.parse(o):{};if(!n.ok)throw new Error(r.error||`\u4E0A\u4F20\u5931\u8D25\uFF08HTTP ${n.status}\uFF09`);return r.image},bd=e=>Me("asset/delete",qe({id:e})),$a=(e={})=>{let t=new URLSearchParams;return t.set("limit",String(e.limit??60)),t.set("offset",String(e.offset??0)),e.query&&t.set("query",e.query),e.status&&t.set("status",e.status),Me(`history?${t.toString()}`)},Or=(e=14)=>Me(`history/stats?days=${e}`),Ha=e=>Me("generate",qe(e)),yd=e=>Me(`task?id=${encodeURIComponent(e)}`),xd=e=>Me("task/cancel",qe({id:e})),wd=(e,t,n)=>Me("workflow/save",qe({name:e,nodes:t,edges:n})),Ba=()=>Me("workflow/list"),vd=e=>Me(`workflow/load?name=${encodeURIComponent(e)}`),Wa=(e,t)=>Me("recovery/save",qe({...md(e,t)})),kd=()=>Me("recovery/latest"),Sd=e=>Me("settings",qe({model:e})),Lr=e=>Me("settings",qe({profile:e})),Fa=e=>Me("settings",qe({outputDir:e})),Md=e=>Me("settings",qe({budget:e})),Va=e=>Me("settings",qe({imagoraRoot:e})),Nd=(e={})=>Me("pick-folder",qe(e)),$r=e=>Me("reveal",qe({path:e})),Xa=e=>Me("provider",qe(e)),Cd=e=>Me("provider/probe",qe(e));var Ed=e=>Me("budget",qe(e));function _d(e){return`\u751F\u6210\u4E2D ${e}s`}function ue(e,t=120){let n=e instanceof Error?e.message:String(e);return n.length>t?`${n.slice(0,t)}\u2026`:n}var $w=/^=== (.+) ===\s*$/,Pd=/^```(?:text)?\s*$/,Hw=/^ratio:\s*(\d+):(\d+)\s*$/,Bw=/^ratio\b/i;function Id(e){return e.split(`
`).some(t=>Pd.test(t))}function zd(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`),n=t.split(`
`),o=[],r=[],i=[],a=[];if(n.forEach((u,l)=>{let d=u.match($w)?.[1];d!==void 0&&a.push({title:d.trim(),line:l})}),a.length===0){let u=t.trim();return u&&i.push(u),Id(t)&&r.push({code:"missing-header",message:"\u5168\u6587\u672A\u627E\u5230 === \u6807\u9898 === \u884C\uFF0C\u4F46\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F"}),{cards:o,issues:r,skippedText:i}}let s=n.slice(0,a[0]?.line??0).join(`
`).trim();s&&(i.push(s),Id(s)&&r.push({code:"missing-header",message:"\u6807\u9898\u4E4B\u524D\u5B58\u5728\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u7591\u4F3C\u7F3A\u6807\u9898\u7684\u5757\uFF09"}));let c=new Set;for(let u=0;u<a.length;u++){let l=a[u];if(l===void 0)continue;let{title:d}=l,f=l.line+1,p=a[u+1],b=p===void 0?n.length:p.line,h=n.slice(f,b);if(c.has(d)){r.push({code:"duplicate-title",title:d,message:`\u6807\u9898\u91CD\u590D\uFF1A\u300C${d}\u300D`});continue}c.add(d);let y=[];h.forEach((L,R)=>{Pd.test(L)&&y.push(R)});let g=y[0],v=y[y.length-1];if(g===void 0||v===void 0){r.push({code:"missing-fence",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11\u4EE3\u7801\u5757\u56F4\u680F\uFF08\u9700\u8981 \`\`\`text\uFF09`});continue}let m=h.slice(0,g).join(`
`).trim();m&&i.push(m);let x=h.slice(g+1,v),k=x.findIndex(L=>L.trim()!=="");if(k===-1){r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u5757\u5185\u6CA1\u6709\u5185\u5BB9`});continue}let M=(x[k]??"").trim(),S=M.match(Hw);if(!S){Bw.test(M)?r.push({code:"bad-ratio",title:d,message:`\u300C${d}\u300Dratio \u884C\u683C\u5F0F\u975E\u6CD5\uFF1A${M}`}):r.push({code:"missing-ratio",title:d,message:`\u300C${d}\u300D\u7F3A\u5C11 ratio \u5143\u6570\u636E\u884C\uFF08\u5757\u5185\u9996\u884C\u5E94\u4E3A ratio: N:M\uFF09`});continue}let C=`${S[1]}:${S[2]}`,I=x.slice(k+1).join(`
`).trim();if(!I){r.push({code:"empty-prompt",title:d,message:`\u300C${d}\u300D\u63D0\u793A\u8BCD\u6B63\u6587\u4E3A\u7A7A`});continue}o.push({title:d,ratio:C,prompt:I})}return{cards:o,issues:r,skippedText:i}}function qa(e,t){let n=t[0];if(!/^\d+:\d+$/.test(e)||n===void 0)return{value:n?.value??"1024x1024",fallback:!0};let o=t.find(r=>r.label.includes(`(${e}`));return o?{value:o.value,fallback:!1}:{value:n.value,fallback:!0}}function Rd(e,t,n){let o=Gw(n,e.length);return e.map((r,i)=>{let a=qa(r.ratio,t.sizes);return{id:`prompt-${Date.now()}-${i}`,type:"prompt",position:o[i]??n,data:{prompt:r.prompt,size:a.value,quality:t.defaultQuality,outputDir:t.defaultOutputDir,status:"idle",title:r.title}}})}var Ga=380,Ww=326,Dd=40,Fw=74,Vw=Ga+Dd,Xw=Ww+Fw,Hr=3;function Gw(e,t){let n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,o=[];for(let r=0;r<n;r++){let i=Math.floor(r/Hr),a=r%Hr,s=Math.min(Hr,n-i*Hr),c=s*Ga+(s-1)*Dd,u=e.x+Ga/2-c/2;o.push({x:u+a*Vw,y:e.y+i*Xw})}return o}var qw={image:{width:144,height:220},prompt:{width:300,height:320},group:{width:224,height:120}};function Be(e){let t=e.measured,n=qw[e.type];return{width:Math.max(t?.width??0,n.width),height:Math.max(t?.height??0,n.height)}}var Ut={layerGap:60,resultGap:60,nodeGap:16,leftMargin:60,topMargin:40},Yw={image:0,group:0,prompt:1},Td="\u63D0\u793A\u8BCD\u751F\u6210";function Ad(e,t,n,o){let r=n.get(e);if(r!==void 0)return r;if(o.has(e))return-1;o.add(e);let i=0;for(let a of t.get(e)??[]){let s=Ad(a,t,n,o);s>=0&&(i=Math.max(i,s+1))}return o.delete(e),n.set(e,i),i}function Uw(e,t){return e.type!=="prompt"?null:(t.get(e.id)??[]).slice().sort().join("|")}function Zw(e,t,n,o,r){let i=new Map(e.map(h=>[h.id,h])),a=new Map,s=new Map;for(let h of t){if(!i.has(h.source)||!i.has(h.target))continue;let y=a.get(h.target)??[];y.push(h.source),a.set(h.target,y);let g=s.get(h.source)??[];g.push(h.target),s.set(h.source,g)}let c=new Map,u=new Set;for(let h of e){let y=Math.max(Ad(h.id,a,c,u),Yw[h.type]);c.set(h.id,y)}let l=new Map;for(let h of e){let y=l.get(c.get(h.id)??0)??[];y.push(h),l.set(c.get(h.id)??0,y)}let d=[...l.keys()].sort((h,y)=>h-y),f=new Map;for(let h of e)n.has(h.id)||f.set(h.id,{x:h.position.x-(o?.x??0),y:h.position.y-(o?.y??0)});let p=h=>(f.get(h.id)?.x??h.position.x)+Be(h).width/2,b=new Map;{let h=r;for(let y of d){let g=l.get(y).reduce((v,m)=>{let x=f.get(m.id);return x&&!n.has(m.id)?Math.max(v,x.y+Be(m).height):Math.max(v,h+Be(m).height)},h);b.set(y,h),h=g+Ut.layerGap}}return{byId:i,preds:a,succs:s,layerGroups:l,sortedLayers:d,positions:f,centerOf:p,bandY:b}}function Kw(e){let{nodes:t,edges:n,moves:o,origin:r,boundsWidth:i}=e;if(!t.length)return t;let a=r?0:Ut.leftMargin,s=r?0:Ut.topMargin,c=Zw(t,n,o,r,s),{positions:u}=c;return Qw(c,o,a),Jw(c,o,a),ev(t,o,a,i,u),t.map(l=>{if(!o.has(l.id))return l;let d=u.get(l.id);return!d||!Number.isFinite(d.x)||!Number.isFinite(d.y)?l:r?{...l,position:{x:d.x+r.x,y:d.y+r.y}}:{...l,position:d}})}function jw(e,t,n){let{byId:o,preds:r,positions:i,centerOf:a}=t,s=(r.get(e.id)??[]).map(c=>o.get(c)).filter(c=>c!==void 0&&i.has(c.id)).map(c=>a(c));return s.length?s.reduce((c,u)=>c+u,0)/s.length:n+Be(e).width/2}function Od(e,t,n,o,r){let{layerGroups:i,preds:a,positions:s,bandY:c}=n,u=i.get(e).filter(y=>o.has(y.id));if(!u.length)return;let l=new Map;for(let y of u)l.set(y.id,t(y));let d=y=>Uw(y,a),f=[...u].sort((y,g)=>{let v=l.get(y.id),m=l.get(g.id);if(Math.abs(v-m)>=.5)return v-m;let x=d(y),k=d(g);if(x!==null&&k!==null&&x===k&&y.type==="prompt"&&g.type==="prompt"){let M=y.data.title??Td,S=g.data.title??Td,C=M.localeCompare(S,"zh");if(C!==0)return C}return y.position.x-g.position.x}),p=(y,g)=>y.every(v=>d(v)===null||d(v)===d(g)),b=r-Ut.nodeGap,h=0;for(;h<f.length;){let y=f[h];if(y===void 0)break;let g=l.get(y.id),v=h,m=f[v+1];for(;m!==void 0&&Math.abs(l.get(m.id)-g)<.5&&p(f.slice(h,v+1),m);)v+=1,m=f[v+1];let x=f.slice(h,v+1),k=x.reduce((C,I,L)=>C+Be(I).width+(L?Ut.nodeGap:0),0),M=c.get(e),S=Math.max(b+Ut.nodeGap,g-k/2);for(let C of x)s.set(C.id,{x:S,y:M}),S+=Be(C).width+Ut.nodeGap;b=S-Ut.nodeGap,h=v+1}}function Qw(e,t,n){for(let o of e.sortedLayers)Od(o,r=>jw(r,e,n),e,t,n)}function Jw(e,t,n){let{sortedLayers:o,succs:r,byId:i,positions:a,centerOf:s}=e;for(let c of[...o].reverse())Od(c,u=>{let l=(r.get(u.id)??[]).map(f=>i.get(f)).filter(f=>f!==void 0&&a.has(f.id)).map(f=>s(f));if(l.length)return l.reduce((f,p)=>f+p,0)/l.length;let d=a.get(u.id);return d?d.x+Be(u).width/2:n+Be(u).width/2},e,t,n)}function ev(e,t,n,o,r){if(o!==void 0){let i=e.filter(a=>t.has(a.id));if(i.length){let a=Math.min(...i.map(u=>r.get(u.id).x)),s=Math.max(...i.map(u=>r.get(u.id).x+Be(u).width)),c=n+o/2-(a+s)/2;if(c!==0)for(let u of i){let l=r.get(u.id);r.set(u.id,{x:l.x+c,y:l.y})}}}}function Ld(e,t,n){if(!n.size)return e;let o=e.filter(f=>n.has(f.id));if(!o.length)return e;let r=t.filter(f=>n.has(f.source)||n.has(f.target)),i=new Set;for(let f of r)n.has(f.source)||i.add(f.source),n.has(f.target)||i.add(f.target);let a=e.filter(f=>i.has(f.id)),s=Math.min(...o.map(f=>f.position.x)),c=Math.max(...o.map(f=>f.position.x+Be(f).width)),u=Math.min(...o.map(f=>f.position.y)),l=Kw({nodes:[...o,...a],edges:r,moves:n,origin:{x:s,y:u},boundsWidth:i.size===0?Math.max(c-s,1):void 0}),d=new Map(l.map(f=>[f.id,f]));return e.map(f=>d.get(f.id)??f)}var Ya=[0,.5,1];function $d(e,t,n){let o=t==="x"?e.x:e.y,r=t==="x"?e.width:e.height;return o+r*n}function Bd(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.width)&&Number.isFinite(e.height)}function Hd(e,t,n,o){let r=Ya.map(s=>$d(e,n,s)),i=null,a=1/0;for(let s=0;s<t.length;s+=1){let c=t[s];if(c!==void 0&&c.id!==e.id&&Bd(c))for(let u=0;u<Ya.length;u+=1){let l=Ya[u];if(l===void 0)continue;let d=$d(c,n,l);for(let f=0;f<r.length;f+=1){let p=r[f];if(p===void 0)continue;let b=d-p,h=Math.abs(b);h>=o||h>=a||(a=h,i={delta:b,position:d,targetId:c.id})}}}return i}function Br(e,t,n=6){let o={x:e.x,y:e.y,guides:[]};if(!Bd(e)||!Number.isFinite(n)||n<=0)return o;let r=Hd(e,t,"x",n),i=Hd(e,t,"y",n),a=[];return r!==null&&a.push({axis:"x",position:r.position,targetId:r.targetId}),i!==null&&a.push({axis:"y",position:i.position,targetId:i.targetId}),{x:r===null?e.x:e.x+r.delta,y:i===null?e.y:e.y+i.delta,guides:a}}var Wd="imagora.canvas-snap.v1";function Fd(){try{let e=window.localStorage.getItem(Wd);return e===null?!0:e!=="0"}catch{return!0}}function Vd(e){try{window.localStorage.setItem(Wd,e?"1":"0")}catch{}}function Mo(e){let t=Be(e);return{id:e.id,x:e.position.x,y:e.position.y,width:t.width,height:t.height}}var So=[];function Xd(e,t,n){if(!n)return{changes:e,guides:So};let o=[];for(let d of e){let f=d;f.type==="position"&&f.dragging===!0&&f.position!==void 0&&o.push(f)}if(o.length!==1)return{changes:e,guides:So};let r=o[0];if(!r)return{changes:e,guides:So};let i=t.find(d=>d.id===r.id),a=r.position;if(!i||!a)return{changes:e,guides:So};let s={...Mo(i),x:a.x,y:a.y},c=[];for(let d of t)d.id!==r.id&&c.push(Mo(d));let u=Br(s,c);return u.guides.length===0?{changes:e,guides:So}:{changes:e.map(d=>d.id===r.id&&d.type==="position"?{...d,position:{x:u.x,y:u.y}}:d),guides:u.guides}}var Ae=require("react");var Fr=require("react");var Zt=new Map,Ua=new Map;function tv(e,t,n=512){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||e<=0||t<=0||n<=0||e<=n&&t<=n)return null;let o=n/Math.max(e,t);return{width:Math.max(1,Math.round(e*o)),height:Math.max(1,Math.round(t*o))}}function Wr(e){let t=Zt.get(e);return t===void 0?null:(Zt.delete(e),Zt.set(e,t),t)}function nv(e,t){for(Zt.set(e,t);Zt.size>240;){let n=Zt.keys().next();if(n.done===!0)break;let o=Zt.get(n.value);Zt.delete(n.value),o!==void 0&&URL.revokeObjectURL(o)}}async function ov(e,t){let n=await fetch(e);if(!n.ok)throw new Error(`\u7F29\u7565\u56FE\u53D6\u56FE\u5931\u8D25\uFF1A${n.status}`);let o=await n.blob(),r=await createImageBitmap(o),i=tv(r.width,r.height,t);if(i===null)return r.close(),e;let a=document.createElement("canvas");a.width=i.width,a.height=i.height;let s=a.getContext("2d");if(s===null)return r.close(),e;s.drawImage(r,0,0,i.width,i.height),r.close();let c=await new Promise(u=>a.toBlob(u,"image/webp",.9));return c===null?e:URL.createObjectURL(c)}function Gd(e,t=512){let n=Wr(e);if(n!==null)return Promise.resolve(n);let o=Ua.get(e);if(o!==void 0)return o;let r=ov(e,t).catch(()=>e).then(i=>(Ua.delete(e),i!==e&&nv(e,i),i));return Ua.set(e,r),r}function qd(e){let[t,n]=(0,Fr.useState)(()=>{if(!e)return null;let o=Wr(e);return o===null?null:{src:e,url:o}});return(0,Fr.useEffect)(()=>{if(!e)return;let o=Wr(e);if(o!==null){n({src:e,url:o});return}let r=!1;return Gd(e).then(i=>{r||n({src:e,url:i})}),()=>{r=!0}},[e]),t===null||t.src!==e?null:t.url}var Za=require("react/jsx-runtime"),Yd={plus:"M12 5v14M5 12h14",image:"M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5",play:"M8 5.5v13l11-6.5z",stop:"M7 7h10v10H7z",trash:"M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13",eye:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z",link:"M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2",save:"M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6",folder:"M3 6h6l2 2h10v11H3z",clock:"M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z",maximize:"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5",map:"M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14",help:"M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9",copy:"M8 8h11v11H8zM5 16V5h11",close:"M6 6l12 12M18 6L6 18",wand:"M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z",layers:"M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",crop:"M6 3v13a2 2 0 002 2h13M3 6h13a2 2 0 012 2v13",grid:"M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16",expand:"M9 4H4v5M15 20h5v-5M4 4l6 6M20 20l-6-6",zoomIn:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6M11 8v6",zoomOut:"M11 4.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM20 20l-4-4M8 11h6",focus:"M12 3v3M12 18v3M3 12h3M18 12h3M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",magnet:"M6 4v8a6 6 0 0012 0V4M6 4h4v8M18 4h-4v8",lock:"M7.5 11V8a4.5 4.5 0 019 0v3M5 11h14v9H5z",unlock:"M7.5 11V8a4.5 4.5 0 018.9-1M5 11h14v9H5z",grip:"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"};function ze({name:e,size:t=14,strokeWidth:n=1.7,style:o}){let r=Yd[e]||Yd.help;return(0,Za.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{display:"block",flex:"none",...o},children:(0,Za.jsx)("path",{d:r})})}var we=require("react"),tf=require("react-dom");var rv={id:"__custom",label:"\u81EA\u5B9A\u4E49"},iv=64;function Ud(e){return typeof e!="string"?"":e.trim().replace(/\s+/g," ")}function av(e,t){return e.some(n=>n.value===t)}function Zd(e,t){let n=Ud(t);return n===""||av(e,n)?e:[...e,{value:n,label:n,group:rv}]}function Kd(e){let t=Ud(e);return t===""?{ok:!1,reason:"\u4E0D\u80FD\u4E3A\u7A7A"}:t.length>iv?{ok:!1,reason:"\u592A\u957F"}:{ok:!0,value:t}}function jd(e){let t=new Map,n=[];for(let r of e){let i=r.group;if(i===void 0){n.push(r);continue}let a=t.get(i.id);a!==void 0?a.rows.push(r):t.set(i.id,{label:i.label,rows:[r]})}if(t.size===0)return n.length===0?[]:[{id:"",label:"",rows:n}];let o=[...t].map(([r,i])=>({id:r,label:i.label,rows:i.rows}));return n.length>0&&o.push({id:"",label:"",rows:n}),o}var Vr=0;function Xr(){Vr+=1}function Gr(){Vr=Math.max(0,Vr-1)}function Qd(){return Vr>0}var sv=new Set([8208,8209,8210,8211,8212,8213,8722,65112,65123,65293]);function Ka(e){if(!e)return"";let t="";for(let n of e){let o=n.codePointAt(0)??0;t+=sv.has(o)?"-":n}return t}function Jd(e,t){return t===0||e.charAt(t-1)==="-"||e.charAt(t-1)==="_"?8:0}function lv(e,t){if(t.length>e.length)return;let n=Number.NEGATIVE_INFINITY,o=Array(e.length).fill(n);for(let i=0;i<e.length;i++)e.charAt(i)===t.charAt(0)&&(o[i]=1+Jd(e,i)-i);for(let i=1;i<t.length;i++){let a=Array(e.length).fill(n),s=n,c=n,u=n;for(let[l,d]of o.entries()){if(c!==n&&(u=Math.max(u,c+l-2)),e.charAt(l)===t.charAt(i)){let f=1+Jd(e,l),p=n;s!==n&&(p=s+f+4),u!==n&&(p=Math.max(p,u+f+1-l)),a[l]=p}c=s,s=d}o=a}let r=n;for(let i of o)r=Math.max(r,i);return r===n?void 0:r}function ef(e,t){let n=Ka(t).toLowerCase();if(n==="")return e;let o=[];return e.forEach((r,i)=>{let a=r.label===void 0?[r.name]:[r.name,r.label],s=!1,c;for(let u of a){let l=Ka(u).toLowerCase(),d=lv(l,n);d!==void 0&&(s||=l.startsWith(n),c=c===void 0?d:Math.max(c,d))}c!==void 0&&o.push({item:r,index:i,prefix:s,score:c})}),o.sort((r,i)=>Number(i.prefix)-Number(r.prefix)||i.score-r.score||r.index-i.index),o.map(r=>r.item)}var ye=require("react/jsx-runtime"),cv=4;function ft({options:e,value:t,onChange:n,className:o="",id:r,searchable:i,emptyLabel:a="\u6CA1\u6709\u5339\u914D\u9879",allowCustom:s=!1,onCreateCustom:c,"aria-describedby":u,"aria-invalid":l,renderOption:d,title:f}){let[p,b]=(0,we.useState)(!1),[h,y]=(0,we.useState)(-1),[g,v]=(0,we.useState)(""),[m,x]=(0,we.useState)(null),k=(0,we.useRef)(null),M=(0,we.useRef)(null),S=(0,we.useRef)(null),C=(0,we.useId)(),I=`${r??`select-${C}`}-listbox`,L=`${I}-search`,R=(0,we.useMemo)(()=>{if(g.trim()==="")return e;let B=e.map(O=>({name:O.value,label:O.label,option:O}));return ef(B,g).map(O=>O.option)},[e,g]),A=i===void 0||i==="auto"?e.length>cv:i,P=R.findIndex(B=>B.value===t),w=e.find(B=>B.value===t),_=B=>`${I}-option-${B}`,E=A&&s===!0,N=(0,we.useMemo)(()=>{let B=g.trim();if(B!=="")return R.find(O=>O.value===B||O.label===B)},[R,g]),z=(0,we.useMemo)(()=>{if(!E||N!==void 0)return null;let B=Kd(g);return B.ok?B.value:null},[E,N,g]),D=(B=P>=0?P:0)=>{!e.length&&!E||(y(e.length===0?-1:Math.min(Math.max(B,0),e.length-1)),b(!0),A||window.setTimeout(()=>M.current?.focus(),0))},F=(B=!1)=>{b(!1),v(""),B&&window.setTimeout(()=>M.current?.focus(),0)},W=B=>{let O=R[B];O&&(n(O.value),F(!0))},V=B=>{c?.(B),F(!0)},K=()=>{let B=M.current;if(!B)return;let O=B.getBoundingClientRect(),Y=4,oe=8,ie=B.offsetWidth||O.width,J=Math.max(oe,Math.min(O.left,window.innerWidth-ie-oe)),te=window.innerHeight-O.bottom-Y-oe,Q=O.top-Y-oe,q=te<160&&Q>te,re=Math.max(120,Math.min(240,q?Q:te));x({left:J,top:q?Math.max(oe,O.top-Y-re):O.bottom+Y,width:ie,maxHeight:re})};(0,we.useEffect)(()=>{if(p)return Xr(),()=>Gr()},[p]),(0,we.useLayoutEffect)(()=>{if(!p)return;K();let B=()=>K();window.addEventListener("scroll",B,!0),window.addEventListener("resize",B);let O=typeof ResizeObserver>"u"?null:new ResizeObserver(B);return M.current&&O?.observe(M.current),()=>{O?.disconnect(),window.removeEventListener("scroll",B,!0),window.removeEventListener("resize",B)}},[p]),(0,we.useEffect)(()=>{p&&A&&m&&S.current?.focus()},[p,A,m]),(0,we.useEffect)(()=>{p&&y(B=>R.length===0?-1:Math.min(Math.max(B,0),R.length-1))},[p,R.length]),(0,we.useEffect)(()=>{!e.length&&!E&&p&&(b(!1),y(-1))},[p,e.length,E]),(0,we.useEffect)(()=>{let B=O=>{let Y=O.target;k.current?.contains(Y)||document.getElementById(I)?.contains(Y)||F()};return document.addEventListener("mousedown",B,!0),()=>document.removeEventListener("mousedown",B,!0)},[I]);let X=(B,O)=>{if(B.key==="Tab"){F();return}if(B.key==="Escape"){p&&(B.preventDefault(),F(!0));return}if(B.key==="ArrowDown"||B.key==="ArrowUp"){if(B.preventDefault(),!p){D();return}if(R.length===0)return;let Y=B.key==="ArrowDown"?1:-1;y(oe=>(oe+Y+R.length)%R.length);return}if(B.key==="Home"||B.key==="End"){if(R.length===0)return;B.preventDefault(),p||b(!0),y(B.key==="Home"?0:R.length-1);return}if(B.key==="Enter"){if(B.preventDefault(),!p){D();return}if(E&&g.trim()!==""){N!==void 0?(n(N.value),F(!0)):z!==null&&V(z);return}W(h);return}!O&&B.key===" "&&(B.preventDefault(),p?W(h):D())},j=(0,we.useMemo)(()=>jd(R),[R]),ce=(0,we.useMemo)(()=>{let B=new Map;return R.forEach((O,Y)=>B.set(O,Y)),B},[R]);return(0,ye.jsxs)("div",{ref:k,className:`im-select-root ${o}`.trim(),children:[(0,ye.jsxs)("button",{ref:M,type:"button",id:r,title:f,onClick:()=>p?F():D(),onKeyDown:B=>X(B,!1),"aria-expanded":p,"aria-haspopup":"listbox","aria-controls":I,"aria-activedescendant":p&&h>=0?_(h):void 0,"aria-describedby":u,"aria-invalid":l,className:`im-select-trigger${p?" is-open":""}`,children:[d&&w?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(w),(0,ye.jsx)("span",{className:"im-select-label",children:w.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:w?.label??"\u8BF7\u9009\u62E9"}),(0,ye.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-caret",children:(0,ye.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),p&&m&&(0,tf.createPortal)((0,ye.jsxs)("div",{id:I,"data-portal":"select-list",className:"im-select-list",style:{left:m.left,top:m.top,width:m.width,maxHeight:m.maxHeight},children:[A&&(0,ye.jsx)("div",{className:"im-select-search",children:(0,ye.jsx)("input",{ref:S,id:L,type:"text",className:"im-select-search-input",value:g,onChange:B=>v(B.target.value),onKeyDown:B=>X(B,!0),placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u7B5B\u9009",autoComplete:"off","aria-label":"\u7B5B\u9009\u9009\u9879","aria-controls":I,"aria-activedescendant":h>=0?_(h):void 0})}),(0,ye.jsxs)("ul",{role:"listbox","aria-labelledby":A?L:void 0,className:"im-select-rows",children:[R.length===0&&(0,ye.jsx)("li",{role:"presentation",className:"im-select-empty",children:a}),j.map(B=>(0,ye.jsxs)("li",{role:"presentation",className:"im-select-group",children:[B.label!==""&&(0,ye.jsx)("div",{className:"im-select-group-title",role:"presentation",children:B.label}),(0,ye.jsx)("ul",{role:"presentation",className:"im-select-group-rows",children:B.rows.map(O=>{let Y=ce.get(O)??-1,oe=O.value===t,ie=Y===h;return(0,ye.jsxs)("li",{id:_(Y),role:"option","aria-selected":oe,className:`im-select-option${oe?" is-selected":""}${ie?" is-active":""}`,onMouseEnter:()=>y(Y),onMouseDown:J=>J.preventDefault(),onClick:()=>W(Y),children:[d?(0,ye.jsxs)("span",{className:"im-select-value",children:[d(O),(0,ye.jsx)("span",{className:"im-select-label",children:O.label})]}):(0,ye.jsx)("span",{className:"im-select-label",children:O.label}),oe&&(0,ye.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"im-select-check",children:(0,ye.jsx)("path",{d:"M20 6 9 17l-5-5"})})]},O.value)})})]},B.id||"__ungrouped"))]}),z!==null&&(0,ye.jsx)("div",{className:"im-select-custom",children:(0,ye.jsx)("button",{type:"button",role:"button","data-testid":"select-custom-option",className:"im-select-option",onMouseDown:B=>B.preventDefault(),onClick:()=>V(z),children:(0,ye.jsxs)("span",{className:"im-select-label",children:["\u4F7F\u7528 \u201C",z,"\u201D"]})})})]}),document.body)]})}var U=require("react/jsx-runtime"),ja=(0,Ae.createContext)(null),Qa=(0,Ae.createContext)(!1);function Ja(){return(0,Ae.useContext)(Qa)}function es(){let e=(0,Ae.useContext)(ja);if(!e)throw new Error("dsh-imagora: \u8282\u70B9\u7F3A\u5C11\u753B\u5E03\u4E0A\u4E0B\u6587");return e}function uv({value:e,onChange:t}){let[n,o]=(0,Ae.useState)(e),r=(0,Ae.useRef)(!1);return(0,Ae.useEffect)(()=>{r.current||o(e)},[e]),(0,U.jsx)("textarea",{className:"im-field nodrag",rows:5,value:n,placeholder:"\u82F1\u6587\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982\uFF1Aa red apple on white background",onCompositionStart:()=>{r.current=!0},onCompositionEnd:i=>{r.current=!1,o(i.currentTarget.value),t(i.currentTarget.value)},onChange:i=>{let a=i.target.value;o(a),r.current||t(a)}})}function qr(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(vn,{type:"target",position:ne.Top,className:"im-handle"}),(0,U.jsx)(vn,{type:"source",position:ne.Bottom,className:"im-handle"})]})}function ts({children:e}){return(0,U.jsx)("div",{className:"im-rail nodrag",children:e})}function $t({label:e,onClick:t,danger:n,children:o}){return(0,U.jsx)("button",{type:"button",className:`im-icon-btn im-btn-ghost nodrag${n?" im-btn-danger":""}`,title:e,"aria-label":e,onClick:r=>{r.stopPropagation(),t()},children:o})}var rf=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=es(),i=Ja(),[a,s]=(0,Ae.useState)(!1),c=n.missing||a,u=qd(n.url);return(0,U.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}${c?" is-missing":""}`,style:{padding:8,width:146,boxSizing:"border-box"},children:[(0,U.jsx)(qr,{}),c?(0,U.jsx)("span",{className:"im-chip is-danger",style:{position:"absolute",right:4,top:4,zIndex:20},children:"\u6587\u4EF6\u7F3A\u5931"}):null,n.maskDataUrl?(0,U.jsx)("button",{type:"button",className:"im-chip is-brand im-chip--action nodrag",style:{position:"absolute",left:4,top:4,zIndex:20},title:"\u8FD9\u5F20\u56FE\u5DF2\u8BBE\u8499\u7248\uFF08\u5C40\u90E8\u91CD\u7ED8\uFF09\u3002\u70B9\u51FB\u6E05\u9664","aria-label":"\u6E05\u9664\u8499\u7248",onClick:l=>{l.stopPropagation(),r.clearMask(t)},children:"\u8499\u7248"}):null,i?null:(0,U.jsxs)(ts,{children:[(0,U.jsx)($t,{label:"\u9884\u89C8\u5927\u56FE",onClick:()=>r.zoomImage(t),children:(0,U.jsx)(ze,{name:"eye"})}),(0,U.jsx)($t,{label:"\u88C1\u526A\u56FE\u7247",onClick:()=>r.cropImage(t),children:(0,U.jsx)(ze,{name:"crop"})}),(0,U.jsx)($t,{label:"\u653E\u5927\u56FE\u7247",onClick:()=>r.upscaleImage(t),children:(0,U.jsx)(ze,{name:"expand"})}),(0,U.jsx)($t,{label:"\u5207\u5206\u56FE\u7247",onClick:()=>r.splitImage(t),children:(0,U.jsx)(ze,{name:"grid"})}),(0,U.jsx)($t,{label:"\u8499\u7248\u91CD\u7ED8",onClick:()=>r.maskImage(t),children:(0,U.jsx)(ze,{name:"wand"})}),(0,U.jsx)($t,{label:"\u66FF\u6362\u56FE\u7247",onClick:()=>r.replaceImage(t),children:(0,U.jsx)(ze,{name:"image"})}),(0,U.jsx)($t,{label:"\u5220\u9664\u56FE\u7247",danger:!0,onClick:()=>r.deleteNode(t),children:(0,U.jsx)(ze,{name:"trash"})})]}),(0,U.jsx)("div",{className:"im-thumb",onDoubleClick:l=>{l.stopPropagation(),r.zoomImage(t)},children:n.url&&u?(0,U.jsx)("img",{src:u,alt:n.name,loading:"lazy",decoding:"async",draggable:!1,onError:()=>s(!0)}):n.url?(0,U.jsx)("span",{className:"im-thumb-placeholder","aria-hidden":!0}):(0,U.jsx)("span",{className:"im-muted",style:{fontSize:11},children:"\u56FE\u7247\u7F3A\u5931"})}),(0,U.jsx)("div",{className:"im-thumb-label",title:n.name,children:n.name}),(0,U.jsx)("div",{style:{fontSize:11,color:n.refCount>0?"var(--im-brand)":"var(--im-ink-3)"},children:n.refCount>0?`\u5F15\u7528 ${n.refCount} \u5904`:"\u672A\u5F15\u7528"})]})}),nf=4,af=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=es(),i=Ja(),a=n.totalSize>0?(n.totalSize/(1024*1024)).toFixed(1):"0.0",s=n.duplicateCount??0,c=Math.min(Math.max(n.imageCount-1,0),3);return(0,U.jsxs)("div",{className:`im-group-node${o?" is-selected":""}`,children:[(0,U.jsx)(qr,{}),i?null:(0,U.jsx)(ts,{children:(0,U.jsx)($t,{label:"\u5220\u9664\u56FE\u7247\u7EC4",danger:!0,onClick:()=>r.deleteNode(t),children:(0,U.jsx)(ze,{name:"trash"})})}),(0,U.jsxs)("div",{className:"im-group-stack",children:[Array.from({length:c},(u,l)=>(0,U.jsx)("div",{"aria-hidden":!0,className:"im-group-stack-card",style:{transform:`translate(${-(l+1)*nf}px, ${-(l+1)*nf}px)`}},l)),(0,U.jsxs)("div",{className:"im-group-face",children:[(0,U.jsxs)("div",{className:"im-group-count",children:[n.imageCount," \u5F20\u56FE"]}),(0,U.jsxs)("div",{className:"im-group-size",children:[a," MB"]}),s>0?(0,U.jsx)("span",{className:"im-chip im-chip--sm is-brand im-group-dup",title:`\u5DF2\u53BB\u91CD ${s} \u5F20\u91CD\u590D\u56FE\u7247`,children:"\u53BB\u91CD"}):null]})]})]})});function of({from:e}){let[t,n]=(0,Ae.useState)(()=>e?Math.max(0,Math.floor((Date.now()-e)/1e3)):0);return(0,Ae.useEffect)(()=>{if(!e)return;let o=window.setInterval(()=>n(Math.max(0,Math.floor((Date.now()-e)/1e3))),1e3);return()=>window.clearInterval(o)},[e]),(0,U.jsx)(U.Fragment,{children:_d(t)})}var dv={idle:"\u5C31\u7EEA",queued:"\u6392\u961F\u4E2D",running:"\u751F\u6210\u4E2D",done:"\u5B8C\u6210",failed:"\u5931\u8D25"};function fv(e){switch(e.status){case"queued":return{text:"\u6392\u961F\u4E2D",detail:"\u6392\u961F\u4E2D",tone:"is-queued"};case"running":return{text:"\u751F\u6210\u4E2D",detail:"\u751F\u6210\u4E2D",tone:"is-running"};case"done":return{text:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,detail:`\u5B8C\u6210 \xB7 ${e.resultCount??0} \u5F20`,tone:"is-done"};case"failed":return{text:"\u5931\u8D25",detail:e.message?`\u5931\u8D25\uFF1A${e.message}`:"\u5931\u8D25",tone:"is-failed"};default:return{text:"\u5C31\u7EEA",detail:"\u5C31\u7EEA",tone:"is-idle"}}}var sf=(0,Ae.memo)(function({id:t,data:n,selected:o}){let r=es(),i=Ja(),a=r.config,s=n.status==="queued"||n.status==="running",c=a?.sizes??[],u=a?.qualities??[],l=c.some(f=>f.value===n.size)||!n.size?c:[...c,{value:n.size,label:`${n.size}\uFF08\u81EA\u5B9A\u4E49\uFF09`,cost:0}],d=a?.qualityEffective!==!1;if(i){let f=fv(n);return(0,U.jsxs)("div",{className:`im-panel-card im-node-lod${o?" is-selected":""}`,style:{width:380,minHeight:320,padding:12,boxSizing:"border-box"},children:[(0,U.jsx)(qr,{}),(0,U.jsx)("div",{className:"im-lod-title",title:n.title??"\u63D0\u793A\u8BCD\u751F\u6210",children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,U.jsx)("div",{className:`im-lod-status ${f.tone}`,title:f.detail,children:n.status==="running"?(0,U.jsx)(of,{from:n.startedAtMs}):f.text})]})}return(0,U.jsxs)("div",{className:`im-panel-card${o?" is-selected":""}`,style:{width:380,padding:12,boxSizing:"border-box"},children:[(0,U.jsx)(qr,{}),(0,U.jsxs)(ts,{children:[(0,U.jsx)("span",{className:"im-rail-dot",title:dv[n.status]??"\u5C31\u7EEA",children:(0,U.jsx)("span",{className:`im-dot is-${n.status}`})}),(0,U.jsx)($t,{label:"\u5220\u9664\u63D0\u793A\u8BCD",danger:!0,onClick:()=>r.deleteNode(t),children:(0,U.jsx)(ze,{name:"trash"})})]}),(0,U.jsx)("div",{className:"im-node-title",style:{marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title??"\u63D0\u793A\u8BCD\u751F\u6210"}),(0,U.jsx)(uv,{value:n.prompt,onChange:f=>r.updatePrompt(t,{prompt:f})}),(0,U.jsxs)("div",{className:"nodrag",style:{display:"grid",gap:8,gridTemplateColumns:d?"7fr 3fr":"1fr",marginTop:8},children:[(0,U.jsxs)("div",{style:{minWidth:0},children:[(0,U.jsx)("span",{className:"im-label",children:"\u5C3A\u5BF8"}),(0,U.jsx)(ft,{className:"im-select-fill",options:Zd(l,n.size),value:n.size,title:"\u8F93\u51FA\u5C3A\u5BF8",onChange:f=>r.updatePrompt(t,{size:f})})]}),d?(0,U.jsxs)("div",{style:{minWidth:0},children:[(0,U.jsx)("span",{className:"im-label",children:"\u8D28\u91CF"}),(0,U.jsx)(ft,{className:"im-select-fill",options:u.map(f=>({value:f,label:f})),value:n.quality,title:"\u751F\u6210\u8D28\u91CF",onChange:f=>r.updatePrompt(t,{quality:f})})]}):null]}),(0,U.jsxs)("div",{className:"nodrag",style:{marginTop:8},children:[(0,U.jsx)("span",{className:"im-label",children:"\u8F93\u51FA\u8DEF\u5F84\uFF08\u7559\u7A7A = \u53EA\u7559\u5728\u753B\u5E03\uFF09"}),(0,U.jsx)("input",{className:"im-field",value:n.outputDir,placeholder:a?.defaultOutputDir??"",onChange:f=>r.updatePrompt(t,{outputDir:f.target.value})})]}),n.status==="failed"&&n.message?(0,U.jsx)("div",{style:{marginTop:6,fontSize:11,color:"var(--im-danger)",lineHeight:1.5},children:n.message}):null,(0,U.jsxs)("div",{className:"nodrag",style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[(0,U.jsx)("button",{type:"button",className:`im-btn-primary im-btn-sm nodrag${s?" im-btn-busy":""}`,style:{flex:1},disabled:s||!(n.prompt??"").trim(),onClick:f=>{f.stopPropagation(),r.runPrompt(t)},children:n.status==="running"?(0,U.jsx)(of,{from:n.startedAtMs}):n.status==="queued"?"\u6392\u961F\u4E2D\u2026":"\u8FD0\u884C"}),s?(0,U.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:n.cancelRequested===!0,title:"\u6392\u961F\u4E2D\u7684\u4E0D\u4F1A\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u4F1A\u7B49\u5F53\u524D\u8FD9\u5F20\u8DD1\u5B8C\u624D\u4F5C\u5E9F",onClick:f=>{f.stopPropagation(),r.cancelPrompt(t)},children:n.cancelRequested?"\u53D6\u6D88\u4E2D\u2026":"\u53D6\u6D88"}):null]})]})});var lf=`
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
`;var cf=require("react"),We=require("react/jsx-runtime"),jn=class extends cf.Component{state={error:null};static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[dsh-imagora-desk] \u6E32\u67D3\u51FA\u9519",t,n.componentStack),this.props.onError?.(t,n)}reset=()=>this.setState({error:null});render(){return this.state.error?this.props.fallback(this.state.error,this.reset):this.props.children}};function uf(e){let t=String(e?.message??e??"\u672A\u77E5\u9519\u8BEF").split(`
`)[0]??"";return t.length>140?`${t.slice(0,140)}\u2026`:t}function Yr({nodeId:e,children:t}){return(0,We.jsx)(jn,{fallback:(n,o)=>(0,We.jsxs)("div",{className:"im-node-error","data-node-id":e,title:String(n?.stack??n),children:[(0,We.jsx)("div",{className:"im-node-error-title",children:"\u8FD9\u5F20\u5361\u51FA\u9519\u4E86"}),(0,We.jsx)("p",{className:"im-node-error-msg",children:uf(n)}),(0,We.jsx)("p",{className:"im-node-error-hint",children:"\u9009\u4E2D\u5B83\u6309 Delete \u5220\u6389\u5373\u53EF\uFF0C\u5176\u4F59\u5361\u7247\u4E0D\u53D7\u5F71\u54CD"}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs nodrag",onClick:o,children:"\u91CD\u8BD5"})]}),children:t})}function Ur({children:e,onCrash:t,onClear:n}){return(0,We.jsx)(jn,{onError:o=>t?.(o),fallback:(o,r)=>(0,We.jsxs)("div",{className:"im-canvas-error",role:"alert",children:[(0,We.jsx)("h3",{className:"im-canvas-error-title",children:"\u753B\u5E03\u6E32\u67D3\u51FA\u9519"}),(0,We.jsx)("p",{className:"im-canvas-error-msg",children:uf(o)}),(0,We.jsx)("p",{className:"im-canvas-error-hint",children:"\u4F60\u7684\u5DE5\u4F5C\u6D41\u6587\u4EF6\u8FD8\u5728\u78C1\u76D8\u4E0A\uFF0C\u6CA1\u6709\u4E22\u3002\u53EF\u4EE5\u5148\u91CD\u8BD5\uFF1B\u5982\u679C\u8FD8\u662F\u4E0D\u884C\uFF0C\u6E05\u7A7A\u753B\u5E03\u518D\u4ECE \u5DE5\u4F5C\u6D41\u91CC\u91CD\u65B0\u52A0\u8F7D\u3002"}),(0,We.jsxs)("div",{className:"im-canvas-error-actions",children:[(0,We.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",onClick:r,children:"\u91CD\u8BD5"}),(0,We.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>{n(),r()},children:"\u6E05\u7A7A\u753B\u5E03"})]})]}),children:e})}var os=require("react/jsx-runtime");function ns(e){function t(n){return(0,os.jsx)(Yr,{nodeId:n?.id,children:(0,os.jsx)(e,{...n})})}return t.displayName=`Bounded(${e.displayName||e.name||"Node"})`,t}var df={image:ns(rf),prompt:ns(sf),group:ns(af)};var Zr=Math.round(5),ff=Math.round(200);function pv(e){return Number.isNaN(e)?Zr:e===Number.POSITIVE_INFINITY?ff:e===Number.NEGATIVE_INFINITY?Zr:Math.min(ff,Math.max(Zr,Math.round(e)))}function pf(e){return Number.isNaN(e)||e<=0?Zr:pv(e*100)}var rs=.15,mv=.2;function mf(e,t){return!e&&t<rs?!0:e&&t>mv?!1:e}var Sn=require("react/jsx-runtime"),gv="0 0 1024 1024",hv="M755.242667 396.224L643.84 168.32l-0.064-0.106667Q634.176 149.333333 612.373333 149.333333t-31.424 18.901334l-0.917333 1.813333v0.213333l-124.906667 255.488-0.064 0.128q-2.709333 6.037333 1.045334 11.52 3.541333 5.205333 9.92 5.290667h45.802666q8.682667 0.042667 12.501334-7.658667l88.106666-180.330666 60.906667 124.714666H597.76q-8.832-0.085333-12.586667 7.829334l-18.709333 38.506666-0.042667 0.128q-2.709333 6.037333 1.024 11.52 3.562667 5.205333 9.92 5.290667h146.389334q18.453333 0.405333 28.8-14.549333 10.581333-15.253333 2.688-31.914667z m-2.922667-237.44l-0.725333-1.557333q-3.776-7.872-12.565334-7.872h-21.290666l0.021333 0.021333h-24.085333q-6.506667 0.042667-10.069334 5.333333-3.754667 5.568-0.917333 11.648l130.474667 274.709334q3.754667 7.850667 12.565333 7.850666h45.376q6.357333 0.064 10.005333-5.184 3.818667-5.546667 1.024-11.626666l-0.064-0.106667-126.101333-265.557333-3.626667-7.658667zM471.466667 247.402667l3.626666-0.170667 0.213334-0.021333q15.808-1.557333 26.24-13.034667 10.56-11.690667 9.728-27.136-0.853333-15.402667-12.586667-25.962667Q487.125333 170.666667 471.253333 170.666667H208.106667l-4.778667 0.128h-0.128q-35.114667 1.877333-59.328 26.090666Q119.466667 221.290667 119.466667 254.954667v573.952l0.128 4.544v0.149333q2.026667 33.578667 27.84 56.618667Q173.034667 913.066667 208.213333 913.066667h607.701334l4.757333-0.128h0.128q35.114667-1.877333 59.328-26.090667 24.405333-24.405333 24.405333-58.069333V501.12l-0.213333-3.52v-0.234667q-1.706667-15.338667-13.994667-25.28-12.117333-9.792-27.946666-9.024-15.872 0.768-26.88 11.712-10.346667 10.261333-11.157334 24.234667l-4.757333 4.970667q-70.741333 72.768-140.992 116.053333-60.394667 37.226667-91.925333 37.226667-30.442667 0-69.717334-27.477334l-5.802666-4.096-0.106667 0.128q-1.066667-1.024-2.474667-2.048l-6.613333-4.864q-10.24-7.488-15.701333-11.392l-9.024-6.186666-0.085334-0.064q-14.72-9.621333-27.605333-14.890667-18.773333-7.722667-37.248-7.722667-52.992 0-212.565333 110.336V255.232l0.106666-1.514667q1.066667-6.314667 8.362667-6.314666H471.466667z m-129.493334 441.514666l0.021334-0.021333 5.717333-3.349333q51.733333-30.08 64.426667-30.272 3.178667 0.170667 6.058666 1.493333l0.213334 0.085333 4.565333 1.770667q3.093333 1.344 5.909333 3.456l41.984 30.165333Q530.56 733.866667 586.666667 733.866667q95.338667 0 237.610666-126.890667v221.504l-0.106666 1.514667q-1.066667 6.314667-8.362667 6.314666H208.426667l-1.706667-0.106666q-7.04-1.024-7.018667-7.445334v-44.821333q86.613333-62.08 142.250667-95.04z";function is({size:e=30,fill:t="var(--im-brand)"}){return(0,Sn.jsx)("svg",{width:e,height:e,viewBox:gv,fill:t,"aria-hidden":"true",children:(0,Sn.jsx)("path",{d:hv})})}function gf({onClick:e}){return(0,Sn.jsxs)("button",{type:"button",className:"im-brand",onClick:e,title:"\u81EA\u7531\u753B\u5E03 \xB7 \u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",children:[(0,Sn.jsx)(is,{}),(0,Sn.jsx)("span",{className:"im-brand-title",children:"Imagora"})]})}var hf=require("react"),Mn=require("react/jsx-runtime");function bv(e){let t=0,n=0,o=0;for(let r of e){if(r.type!=="prompt")continue;let i=Number(r.data?.cost??0);i>0&&(t+=i,o+=1),n+=Number(r.data?.resultCount??0)}return{total:t,images:n,cards:o}}function bf(e){return(0,hf.useMemo)(()=>bv(e),[e])}function yf({summary:e,budget:t}){let n=e.total,o=Number.isFinite(t)&&t>0,r=o?Math.min(1,n/t):0,i=o&&n>=t,a=n>0?`\xA5${n.toFixed(2)}`:"\xA50.00";return(0,Mn.jsxs)("span",{className:`im-cost${i?" is-over":""}`,title:o?`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)} / \u9884\u7B97 \xA5${t.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`:`\u672C\u753B\u5E03\u7D2F\u8BA1 \xA5${n.toFixed(2)}\uFF08${e.cards} \u5F20\u5361\u82B1\u8FC7\u94B1\uFF0C\u5171\u51FA\u56FE ${e.images} \u5F20\uFF09`,children:[(0,Mn.jsx)("span",{className:"im-cost-num",children:a}),o?(0,Mn.jsx)("span",{className:"im-cost-bar","aria-hidden":!0,children:(0,Mn.jsx)("span",{className:"im-cost-fill",style:{width:`${Math.round(r*100)}%`}})}):null,i?(0,Mn.jsx)("span",{className:"im-cost-flag",children:"\u5DF2\u8FBE\u9884\u7B97"}):null]})}var _e=require("react/jsx-runtime");function xf(e){let{config:t,promptCount:n,runnableIds:o,busyIds:r,canUndo:i,canRestore:a}=e,s=(c,u,l)=>(0,_e.jsx)("button",{type:"button",className:`${l.primary?"im-btn-primary":"im-btn-ghost"} im-btn-sm nodrag`,title:l.title,disabled:l.disabled,onClick:u,children:c});return(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsxs)("div",{className:"im-header",children:[(0,_e.jsx)(gf,{onClick:e.onOpenHelp}),t&&(t.profiles?.length??0)>1?(0,_e.jsx)(ft,{className:"im-select-profile",options:[...(t.profiles??[]).map(c=>({value:c.name,label:c.label})),{value:"",label:"\u8DDF\u968F imagora \u7684 .env"}],value:t.profile,title:"\u6765\u6E90\uFF08profile\uFF09\uFF1A\u51B3\u5B9A\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5",onChange:c=>e.onSwitchProfile(c)}):null,t&&(t.models?.length??0)>1?(0,_e.jsx)(ft,{className:"im-select-model",options:t.models.map(c=>({value:c.id,label:c.label})),value:t.model,title:`${t.profileLabel||t.profile} \xB7 \u5F53\u524D\u6A21\u578B`,onChange:c=>e.onSwitchModel(c)}):null,(0,_e.jsx)(yf,{summary:e.cost,budget:t?.budget??0}),(0,_e.jsx)("span",{className:"im-spacer"}),s("\u8BBE\u7F6E",e.onOpenSettings,{title:"\u63A5\u53E3\u5730\u5740\u3001API Key\u3001\u6A21\u578B\u4E0E\u76EE\u5F55\u8BBE\u7F6E"})]}),(0,_e.jsxs)("div",{className:"im-toolbar",children:[(0,_e.jsxs)("div",{className:"im-toolbar-group",children:[s("\u4E0A\u4F20\u56FE\u7247",e.onPickFiles,{title:"\u4ECE\u672C\u673A\u9009\u56FE\u7247\u653E\u4E0A\u753B\u5E03\uFF08\u4E5F\u53EF\u76F4\u63A5\u62D6\u5165\u6216\u7C98\u8D34\uFF09",primary:!0}),s("\u7C98\u8D34\u5BFC\u5165",e.onPasteImport,{title:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\uFF0C\u6309\u884C\u89E3\u6790\u6210\u591A\u5F20\u63D0\u793A\u8BCD\u5361\u7247"}),(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u5361\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"prompt"),onClick:e.onAddPrompt,children:["\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",(0,_e.jsx)("span",{className:"im-drag-grip",children:(0,_e.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]}),(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag im-drag-source",title:"\u65B0\u5EFA\u56FE\u7247\u7EC4\uFF08\u4E5F\u53EF\u62D6\u5230\u753B\u5E03\u4E0A\uFF0C\u677E\u5F00\u5904\u5373\u65B0\u7EC4\u4F4D\u7F6E\uFF09",draggable:!0,onDragStart:c=>e.onDragCreateNode(c,"group"),onClick:e.onAddGroup,children:["\u65B0\u5EFA\u56FE\u7247\u7EC4",(0,_e.jsx)("span",{className:"im-drag-grip",children:(0,_e.jsx)(ze,{name:"grip",size:10,strokeWidth:2.5})})]})]}),(0,_e.jsxs)("div",{className:"im-toolbar-group im-toolbar-group--end",children:[s("\u4FDD\u5B58\u5DE5\u4F5C\u6D41",e.onOpenSave,{title:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D"}),s("\u52A0\u8F7D\u5DE5\u4F5C\u6D41",e.onOpenLoad,{title:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C"}),s("\u751F\u6210\u5386\u53F2",e.onOpenHistory,{title:"\u78C1\u76D8\u4E0A\u771F\u5B9E\u5B58\u5728\u7684\u56FE\u7247\uFF0C\u5220\u6389\u753B\u5E03\u8282\u70B9\u4E5F\u80FD\u627E\u56DE"}),s("\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84",e.onOpenDefaultOutputDir,{title:`\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\uFF08\u65B0\u5EFA\u5361\u7247\u7528\u8FD9\u4E2A\u503C\uFF09\uFF1A${t?.defaultOutputDir||"\uFF08\u672A\u8BBE\u7F6E\uFF09"}`}),s("\u64A4\u9500",e.onUndo,{disabled:!i,title:"\u64A4\u9500\u4E0A\u4E00\u6B65\uFF08Ctrl+Z\uFF09"}),s("\u6062\u590D",e.onRestore,{disabled:!a,title:"\u6062\u590D\u88AB\u64A4\u9500\u7684\u4E00\u6B65\uFF08Ctrl+Y\uFF09"}),s("\u81EA\u52A8\u8FDE\u7EBF",e.onAutoConnect,{title:"\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF\uFF1A\u56FE\u7247/\u56FE\u7247\u7EC4 \u2192 \u63D0\u793A\u8BCD\uFF0C\u63D0\u793A\u8BCD \u2192 \u56FE\u7247"}),s("\u5168\u90E8\u8FD0\u884C",()=>e.onRun(o),{title:"\u8FD0\u884C\u6240\u6709\u63D0\u793A\u8BCD\u5361\u7247",disabled:!n}),r>0?(0,_e.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53D6\u6D88\u6240\u6709\u5728\u8DD1\u7684\u4EFB\u52A1\uFF1A\u6392\u961F\u4E2D\u7684\u4E0D\u518D\u53D1\u51FA\u53BB\uFF1B\u751F\u6210\u4E2D\u7684\u7B49\u5F53\u524D\u8FD9\u5F20\u5B8C\u6210\u540E\u4F5C\u5E9F\uFF08\u56FE\u4ECD\u843D\u76D8\u5E76\u8BA1\u8D39\uFF09",onClick:e.onCancelAll,children:["\u53D6\u6D88\u5168\u90E8 (",r,")"]}):null]})]})]})}var Fe=require("react/jsx-runtime");function Kt({icon:e,label:t,title:n,active:o,onClick:r}){return(0,Fe.jsxs)("button",{type:"button",className:`im-dock-row nodrag${o?" is-on":""}`,title:n,"aria-label":t,"aria-pressed":o===void 0?void 0:o,onClick:r,children:[(0,Fe.jsx)(ze,{name:e,size:14}),(0,Fe.jsx)("span",{className:"im-dock-row-label",children:t})]})}function wf(e){let{zoom:t,snapEnabled:n,canvasLocked:o,minimapOpen:r}=e;return(0,Fe.jsxs)("div",{className:"im-dock nodrag",children:[(0,Fe.jsx)("div",{className:"im-dock-row im-dock-row--readout",children:(0,Fe.jsxs)("span",{className:"im-dock-row-label im-dock-row-value",children:[pf(t),"%"]})}),(0,Fe.jsx)(Kt,{icon:"zoomIn",label:"\u653E\u5927",title:"\u653E\u5927\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomIn}),(0,Fe.jsx)(Kt,{icon:"zoomOut",label:"\u7F29\u5C0F",title:"\u7F29\u5C0F\u753B\u5E03\uFF08\u6EDA\u8F6E\u540C\u6837\u53EF\u4EE5\u7F29\u653E\uFF09",onClick:e.onZoomOut}),(0,Fe.jsx)(Kt,{icon:"maximize",label:"\u9002\u5E94",title:"\u9002\u5E94\u89C6\u56FE\uFF1A\u628A\u6240\u6709\u8282\u70B9\u7F29\u653E\u5230\u4E00\u5C4F\u53EF\u89C1",onClick:e.onFitView}),(0,Fe.jsx)(Kt,{icon:"focus",label:"\u805A\u7126",title:"\u805A\u7126\uFF08\u6709\u9009\u4E2D\u65F6\u53EA\u770B\u9009\u4E2D\u7684\uFF0C\u5426\u5219\u770B\u5168\u56FE\uFF09",onClick:e.onFocusSelected}),(0,Fe.jsx)(Kt,{icon:"magnet",label:"\u5438\u9644",title:n?"\u5173\u95ED\u62D6\u62FD\u5438\u9644":"\u5F00\u542F\u62D6\u62FD\u5438\u9644",active:n,onClick:e.onToggleSnap}),(0,Fe.jsx)(Kt,{icon:"map",label:"\u5730\u56FE",title:r?"\u9690\u85CF\u5C0F\u5730\u56FE":"\u663E\u793A\u5C0F\u5730\u56FE",active:r,onClick:e.onToggleMinimap}),(0,Fe.jsx)(Kt,{icon:o?"lock":"unlock",label:o?"\u5DF2\u9501":"\u9501\u5B9A",title:o?"\u89E3\u9501\u753B\u5E03":"\u9501\u5B9A\u753B\u5E03\uFF1A\u9632\u6B62\u8BEF\u62D6\u8282\u70B9\uFF08\u6EDA\u8F6E\u7F29\u653E\u4E0E\u300C\u9002\u5E94\u300D\u4ECD\u7136\u53EF\u7528\uFF09",active:o,onClick:e.onToggleLock}),(0,Fe.jsx)(Kt,{icon:"help",label:"\u5E2E\u52A9",title:"\u64CD\u4F5C\u5E2E\u52A9\u4E0E\u5FEB\u6377\u952E",onClick:e.onOpenHelp})]})}var Ve=require("react"),Mf=require("react-dom");var as="application/x-dsh-imagora-canvas",Kr={prompt:"\u677E\u5F00\u65B0\u5EFA\u63D0\u793A\u8BCD\u5361\u7247",group:"\u677E\u5F00\u65B0\u5EFA\u56FE\u7247\u7EC4"},vf="\u677E\u5F00\u53D6\u6D88";function ss(e){return e.dataTransfer?.types.includes("Files")??!1}function No(e,t){if(ss(e))return"images";let n=e.dataTransfer?.getData(as);return n==="prompt"||n==="group"?n:t}function kf(e){return e?Array.from(e.items).filter(t=>t.kind==="file").length:0}function Sf(e,t){return e==="images"?t>=1?`\u677E\u5F00\u6DFB\u52A0 ${t} \u5F20\u56FE\u7247`:"\u672A\u68C0\u6D4B\u5230\u56FE\u7247":Kr[e]}function ls(e,t,n){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}var Ht=require("react/jsx-runtime"),yv=22,xv=28,jr=8;function Nf(e){let{canvasRef:t,modalOpen:n,getCreatePosition:o,toFlowPosition:r,onDropFiles:i,onDropNode:a}=e,[s,c]=(0,Ve.useState)(null),u=(0,Ve.useRef)(null),l=(0,Ve.useRef)(0),d=(0,Ve.useRef)(null),f=(0,Ve.useRef)(null),p=(0,Ve.useRef)(null),b=(0,Ve.useCallback)((k,M)=>{u.current=k,c(k);let S=p.current;S&&S.textContent!==M&&(S.textContent=M)},[]),h=(0,Ve.useCallback)(()=>{u.current=null,l.current=0,c(null),f.current?.classList.remove("is-outside")},[]),y=(0,Ve.useCallback)((k,M)=>{let S=d.current;if(!S)return;let C=Math.min(k+yv,window.innerWidth-S.offsetWidth-jr),I=Math.min(M+xv,window.innerHeight-S.offsetHeight-jr);S.style.transform=`translate(${Math.max(jr,C)}px, ${Math.max(jr,I)}px)`},[]),g=(0,Ve.useCallback)((k,M,S)=>{let C=t.current;if(!C)return o();let I=C.getBoundingClientRect(),L=S?Math.min(Math.max(k,I.left),I.left+I.width):k,R=S?Math.min(Math.max(M,I.top),I.top+I.height):M;return r({x:L,y:R})},[t,o,r]);(0,Ve.useEffect)(()=>{let k=C=>{ss(C)&&C.preventDefault()},M=C=>{let I=u.current;if(!I||I==="images")return;y(C.clientX,C.clientY);let L=t.current,R=!!(L&&ls(C.clientX,C.clientY,L.getBoundingClientRect())),A=R?Kr[I]:vf,P=p.current;P&&P.textContent!==A&&(P.textContent=A),f.current?.classList.toggle("is-outside",!R)},S=()=>{l.current=0,h()};return window.addEventListener("dragover",k),window.addEventListener("dragover",M),window.addEventListener("drop",k),window.addEventListener("dragend",S),window.addEventListener("blur",S),()=>{window.removeEventListener("dragover",k),window.removeEventListener("dragover",M),window.removeEventListener("drop",k),window.removeEventListener("dragend",S),window.removeEventListener("blur",S)}},[t,h,y]);let v={onDragEnter:k=>{if(n)return;let M=No(k,u.current);M&&(k.preventDefault(),M==="images"&&(l.current+=1),b(M,Sf(M,kf(k.dataTransfer))),y(k.clientX,k.clientY))},onDragOver:k=>{n||!No(k,u.current)||(k.preventDefault(),k.dataTransfer.dropEffect="copy",y(k.clientX,k.clientY))},onDragLeave:k=>{n||No(k,u.current)==="images"&&(l.current-=1,l.current<=0&&h())},onDrop:k=>{if(n)return;let M=No(k,u.current);if(!M)return;k.preventDefault();let S=t.current,C=!S||ls(k.clientX,k.clientY,S.getBoundingClientRect());if(h(),M==="images"){let I=Array.from(k.dataTransfer.files??[]);if(!I.length)return;i(I,g(k.clientX,k.clientY,!0));return}C&&a(M,g(k.clientX,k.clientY,!1))}},m=(0,Ve.useCallback)((k,M)=>{k.dataTransfer.setData(as,M),k.dataTransfer.effectAllowed="copy",b(M,Kr[M]),y(k.clientX,k.clientY)},[y,b]),x=(0,Mf.createPortal)((0,Ht.jsx)("div",{ref:d,className:"im-drop-chip-host","aria-hidden":!0,"data-drop-chip":!0,children:(0,Ht.jsxs)("div",{ref:f,className:`im-drop-chip${s?" show":""}`,children:[(0,Ht.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--create",children:(0,Ht.jsx)(ze,{name:s==="group"?"layers":s==="images"?"image":"plus",size:14})}),(0,Ht.jsx)("span",{className:"im-drop-chip-icon im-drop-chip-icon--cancel",children:(0,Ht.jsx)(ze,{name:"close",size:14})}),(0,Ht.jsx)("span",{ref:p,children:"\u677E\u5F00\u6DFB\u52A0\u56FE\u7247"})]})}),document.body);return{dropIntent:s,dropChip:x,dragHandlers:v,startToolbarDrag:m,hideDropChip:h}}var Bt=require("react");var Cf=2;function Ef({rootRef:e,canvasRef:t,instanceRef:n,setNodes:o,modalOpen:r}){let[i,a]=(0,Bt.useState)(null),[s,c]=(0,Bt.useState)(null),u=(0,Bt.useRef)(null),l=(0,Bt.useCallback)(()=>a(null),[]);return(0,Bt.useEffect)(()=>{if(r){u.current=null,c(null);return}let d=t.current,f=e.current;if(!d||!f)return;let p=v=>{if(v.button!==2)return;let m=n.current;if(!m)return;let x=v.target instanceof Element?v.target:null;if(x?.closest("input, textarea, [contenteditable]"))return;let k=m.screenToFlowPosition({x:v.clientX,y:v.clientY}),M=x?.closest(".react-flow__node"),S=M instanceof HTMLElement?M.dataset.id??null:null;u.current={startFlow:k,nodeId:S,clientX:v.clientX,clientY:v.clientY},c({x:k.x,y:k.y,width:0,height:0}),v.preventDefault()},b=v=>{let m=u.current,x=n.current;if(!m||!x)return;let k=x.screenToFlowPosition({x:v.clientX,y:v.clientY});c({x:Math.min(m.startFlow.x,k.x),y:Math.min(m.startFlow.y,k.y),width:Math.abs(k.x-m.startFlow.x),height:Math.abs(k.y-m.startFlow.y)})},h=v=>{let m=u.current,x=n.current;if(!m||!x)return;u.current=null;let k=x.screenToFlowPosition({x:v.clientX,y:v.clientY}),M={x:Math.min(m.startFlow.x,k.x),y:Math.min(m.startFlow.y,k.y),width:Math.abs(k.x-m.startFlow.x),height:Math.abs(k.y-m.startFlow.y)};if(c(null),M.width<Cf&&M.height<Cf){a(m.nodeId?{x:m.clientX,y:m.clientY,nodeId:m.nodeId}:null);return}a(null),o(S=>{let C=!1,I=S.map(L=>{let R=Be(L),A=L.position.x>=M.x&&L.position.y>=M.y&&L.position.x+R.width<=M.x+M.width&&L.position.y+R.height<=M.y+M.height;return A===!!L.selected?L:(C=!0,{...L,selected:A})});return C?I:S})},y=v=>{let m=v.target instanceof Element?v.target:null;m&&(m.closest("input, textarea, [contenteditable]")||v.preventDefault())},g=()=>{u.current&&(u.current=null,c(null))};return d.addEventListener("mousedown",p),window.addEventListener("mousemove",b),window.addEventListener("mouseup",h),f.addEventListener("contextmenu",y,!0),window.addEventListener("blur",g),()=>{d.removeEventListener("mousedown",p),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",h),f.removeEventListener("contextmenu",y,!0),window.removeEventListener("blur",g)}},[t,e,n,o,r]),{nodeMenu:i,boxRect:s,closeMenu:l,setNodeMenu:a}}var xt=require("react"),zf=require("react-dom");function yt(e,t,n={}){let o={id:e,label:t};return n.danger&&(o.danger=!0),n.disabled&&(o.disabled=!0),{kind:"action",action:o}}var cs={kind:"separator"};function _f(e,t){let n=[];if(t.selectedCount>1&&(n.push(yt("delete-selection",`\u5220\u9664\u6240\u9009 ${t.selectedCount} \u9879`,{danger:!0})),n.push(cs)),e==="image"){let r=!t.hasUrl;n.push(yt("preview","\u9884\u89C8\u5927\u56FE",{disabled:r}),yt("crop","\u88C1\u526A",{disabled:r}),yt("upscale","\u653E\u5927",{disabled:r}),yt("split","\u5207\u5206",{disabled:r}),yt("mask","\u8499\u7248\u91CD\u7ED8",{disabled:r}),yt("replace","\u66FF\u6362\u56FE\u7247"),cs)}else e==="prompt"&&n.push(yt("run","\u8FD0\u884C"),yt("copy-prompt","\u590D\u5236\u63D0\u793A\u8BCD"),cs);let o=t.selectedCount>1?"\u4EC5\u5220\u9664\u6B64\u9879":"\u5220\u9664";return n.push(yt("delete",o,{danger:!0})),n}function us(e,t,n,o=8){let r=Math.max(0,n.width-t.width-o),i=Math.max(0,n.height-t.height-o);return{x:Math.min(Math.max(0,e.x),r),y:Math.min(Math.max(0,e.y),i)}}function If(e){return e.reduce((t,n)=>t+(n.kind==="action"?28:9),0)}function Pf(e){return e==="Escape"||e==="Tab"}var Qr=require("react/jsx-runtime");function Rf(){return{width:window.innerWidth,height:window.innerHeight}}function vv(e,t,n){return us({x:e,y:t},{width:200,height:If(n)},Rf())}function Df({x:e,y:t,items:n,onPick:o,onClose:r}){let i=(0,xt.useRef)(null),[a,s]=(0,xt.useState)(()=>vv(e,t,n)),[c,u]=(0,xt.useState)(null);return(0,xt.useEffect)(()=>(Xr(),()=>Gr()),[]),(0,xt.useLayoutEffect)(()=>{let l=i.current?.getBoundingClientRect().height??0;if(l<=0)return;let d=us({x:e,y:t},{width:200,height:l},Rf());s(f=>f.x===d.x&&f.y===d.y?f:d)},[e,t]),(0,xt.useEffect)(()=>{let l=p=>{let b=p.target;b instanceof Node&&i.current?.contains(b)||r()},d=p=>{p.defaultPrevented||Pf(p.key)&&r()},f=()=>r();return document.addEventListener("pointerdown",l),document.addEventListener("keydown",d),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",d),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[r]),(0,zf.createPortal)((0,Qr.jsx)("div",{ref:i,role:"menu","aria-label":"\u8282\u70B9\u64CD\u4F5C","data-testid":"node-context-menu",className:"im-select-list",style:{left:a.x,top:a.y,width:200,zIndex:72,userSelect:"none"},children:n.map((l,d)=>{if(l.kind==="separator")return(0,Qr.jsx)("div",{role:"separator",className:"im-menu-separator"},`separator-${d}`);let{action:f}=l,p=f.disabled===!0;return(0,Qr.jsx)("button",{type:"button",role:"menuitem","data-testid":`node-menu-${f.id}`,"aria-disabled":p?"true":void 0,className:`im-select-option${c===f.id?" is-active":""}${f.danger?" is-danger":""}${p?" is-disabled":""}`,style:{height:28,minHeight:0,paddingTop:0,paddingBottom:0},onClick:()=>{p||o(f.id)},onMouseEnter:()=>u(f.id),onMouseLeave:()=>u(null),children:f.label},f.id)})}),document.body)}var Tf="dsh-imagora.canvas-minimap.v1";function Af(){try{let e=localStorage.getItem(Tf);return e===null||e.trim()===""?!1:e.trim()!=="0"&&e.trim()!=="false"}catch{return!1}}function Of(e){try{localStorage.setItem(Tf,e?"1":"0")}catch{}}var jt=require("react/jsx-runtime");function Lf(e){let{selectedCount:t,selectedPromptCount:n,selectedRunnableIds:o,pickingOutputDir:r}=e;if(t<1)return null;let i=a=>a>1?` (${a})`:"";return(0,jt.jsxs)("div",{className:"im-inspector nodrag",children:[n>0?(0,jt.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm nodrag",disabled:!o.length,title:`\u8FD0\u884C ${o.length} \u5F20\u9009\u4E2D\u7684\u63D0\u793A\u8BCD\u5361\u7247\uFF08\u53EA\u8FD0\u884C\u63D0\u793A\u8BCD\uFF0C\u56FE\u7247/\u56FE\u7247\u7EC4\u5FFD\u7565\uFF09`,onClick:e.onRunSelected,children:["\u8FD0\u884C\u6240\u9009",i(o.length)]}):null,(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u6309\u53C2\u8003\u5173\u7CFB\u5206\u5C42\u91CD\u6392\u9009\u4E2D\u7684\u8282\u70B9\uFF0C\u5176\u4F59\u4FDD\u6301\u539F\u4F4D\uFF08\u63D0\u793A\u8BCD\u5361 / \u7ED3\u679C\u56FE / \u56FE\u7247\u7EC4\u4E00\u8D77\u53C2\u4E0E\uFF0C\u540C\u5C42\u6309\u6807\u9898\u4ECE\u5DE6\u5230\u53F3\uFF09",onClick:e.onAutoLayout,children:["\u81EA\u52A8\u6574\u7406",i(t)]}),(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",title:"\u53EA\u5BF9\u9009\u4E2D\u7684\u8282\u70B9\u81EA\u52A8\u8865\u9F50\u660E\u663E\u8FDE\u7EBF\uFF0C\u672A\u9009\u4E2D\u8282\u70B9\u4E0D\u53D7\u5F71\u54CD",onClick:e.onAutoConnectSelected,children:["\u81EA\u52A8\u8FDE\u7EBF",i(t)]}),n>0?(0,jt.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm nodrag",disabled:r,title:`\u8BBE\u7F6E ${n} \u5F20\u63D0\u793A\u8BCD\u5361\u7247\u7684\u8F93\u51FA\u8DEF\u5F84`,onClick:e.onSetOutputDir,children:r?"\u9009\u62E9\u4E2D\u2026":`\u8BBE\u7F6E\u8F93\u51FA\u8DEF\u5F84${i(n)}`}):null,(0,jt.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-danger im-btn-sm nodrag",onClick:e.onDeleteSelected,children:["\u5220\u9664\u6240\u9009",i(t)]})]})}var Ke=require("react/jsx-runtime");function $f(){return(0,Ke.jsxs)("div",{className:"im-empty",children:[(0,Ke.jsx)("strong",{children:"\u8FD9\u91CC\u662F\u81EA\u7531\u753B\u5E03"}),(0,Ke.jsx)("span",{children:"\u70B9\u300C\u63D0\u793A\u8BCD\u5361\u300D\u5F00\u59CB\uFF0C\u628A\u56FE\u7247\u62D6\u8FDB\u6765\u5F53\u53C2\u8003\uFF1B\u8FDE\u7EBF\u5C31\u662F\u53C2\u8003\u5173\u7CFB\u3002"}),(0,Ke.jsx)("span",{children:"\u53CC\u51FB\u56FE\u7247\u653E\u5927 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u5904\u62D6\u62FD\u5E73\u79FB"})]})}var kv=5;function Hf({logs:e}){if(!e.length)return null;let t=e.slice(-kv);return(0,Ke.jsx)("div",{className:"im-log","aria-live":"polite",children:t.map((n,o)=>(0,Ke.jsx)("div",{className:"im-log-line",children:n},`${o}-${n}`))})}var Sv={position:"absolute",left:"50%",bottom:18,transform:"translateX(-50%)",zIndex:30,padding:"7px 14px",borderRadius:999,background:"var(--im-surface-float)",color:"var(--im-ink)",border:"1px solid var(--im-line)",boxShadow:"var(--im-shadow-float)",fontSize:12};function Bf({text:e}){return e?(0,Ke.jsx)("div",{style:Sv,children:e}):null}function Wf({tone:e,children:t,action:n}){return(0,Ke.jsxs)("div",{className:`im-banner${e==="error"?" is-error":""}`,children:[(0,Ke.jsx)("span",{className:"im-banner-icon","aria-hidden":!0,children:(0,Ke.jsx)(ze,{name:e==="error"?"help":"clock"})}),(0,Ke.jsx)("span",{className:"im-banner-text",children:t}),n?(0,Ke.jsx)("span",{style:{marginLeft:"auto",flex:"none"},children:n}):null]})}var ve=require("react"),Uf=require("react-dom");async function Mv(e){let t=await fetch(e);if(!t.ok)throw new Error(`\u8BFB\u53D6\u56FE\u7247\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.blob();if(n.type==="image/png")return n;let o=await createImageBitmap(n);try{let r=document.createElement("canvas");r.width=o.width,r.height=o.height;let i=r.getContext("2d");if(!i)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 canvas\uFF0C\u65E0\u6CD5\u8F6C\u6362\u56FE\u7247\u683C\u5F0F");i.drawImage(o,0,0);let a=await new Promise(s=>r.toBlob(s,"image/png"));if(!a)throw new Error("\u56FE\u7247\u683C\u5F0F\u8F6C\u6362\u5931\u8D25");return a}finally{o.close()}}async function Ff(e){if(typeof ClipboardItem>"u"||!navigator.clipboard?.write)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u590D\u5236\u8DEF\u5F84\u300D");let t=await Mv(e);await navigator.clipboard.write([new ClipboardItem({"image/png":t})])}async function Vf(e){if(!navigator.clipboard?.writeText)throw new Error("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F");try{await navigator.clipboard.writeText(e)}catch{throw new Error("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE")}}var Co=e=>Math.min(8,Math.max(.2,e));function Xf(e,t,n,o){if(!n.width||!n.height)return e;let r=n.width*t,i=n.height*t,a=Math.max(0,(r-o.width)/2),s=Math.max(0,(i-o.height)/2);return{x:Math.min(a,Math.max(-a,e.x)),y:Math.min(s,Math.max(-s,e.y))}}function Gf(e,t){return!e||!e.width||!t.width?1:t.width/e.width}function qf(e,t,n){return Math.round(e*Gf(t,n)*100)}function Yf(e,t){let n=Gf(e,t);return n?Co(1/n):1}var he=require("react/jsx-runtime"),Jr=1.2,Nv=5;function ei({imageUrl:e,name:t,copyPath:n,onClose:o}){let[r,i]=(0,ve.useState)({zoom:1,pan:{x:0,y:0}}),[a,s]=(0,ve.useState)(!1),[c,u]=(0,ve.useState)(null),l=(0,ve.useRef)(null),d=(0,ve.useRef)(!1),f=c?.kind==="copying",p=(0,ve.useRef)(null),[b,h]=(0,ve.useState)(null),y=(0,ve.useRef)({width:0,height:0}),g=(0,ve.useRef)(null),v=(0,ve.useRef)(null),m=(0,ve.useRef)(null),x=(0,ve.useRef)(null),k=(0,ve.useCallback)(N=>{let z=m.current;return z?{zoom:N.zoom,pan:Xf(N.pan,N.zoom,y.current,{width:z.clientWidth,height:z.clientHeight})}:N},[]),M=(0,ve.useCallback)(()=>i({zoom:1,pan:{x:0,y:0}}),[]),S=(0,ve.useCallback)(()=>{let N=x.current;if(!N)return;y.current={width:N.clientWidth,height:N.clientHeight};let z={width:N.naturalWidth,height:N.naturalHeight};p.current=z,h(D=>D&&D.width===z.width&&D.height===z.height?D:z)},[]);(0,ve.useEffect)(()=>{let N=()=>S();return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[S]);let C=(0,ve.useCallback)(()=>{let N=Yf(p.current,y.current);i(z=>k({zoom:N,pan:z.pan}))},[k]),I=(0,ve.useCallback)(()=>{let N=p.current,z=v.current;if(!N||!z)return;let D=z.clientWidth*.98,F=z.clientHeight*.98,W=Co(Math.min(1,D/N.width,F/N.height));i({zoom:W,pan:{x:0,y:0}})},[]);(0,ve.useEffect)(()=>{let N=m.current;if(!N)return;let z=D=>{D.preventDefault(),D.stopPropagation();let F=N.getBoundingClientRect(),W=D.clientX-F.left-F.width/2,V=D.clientY-F.top-F.height/2;i(K=>{let X=Co(D.deltaY<0?K.zoom*Jr:K.zoom/Jr);if(X===K.zoom)return K;let j=X/K.zoom;return k({zoom:X,pan:{x:W-(W-K.pan.x)*j,y:V-(V-K.pan.y)*j}})})};return N.addEventListener("wheel",z,{passive:!1}),()=>N.removeEventListener("wheel",z)},[k]),(0,ve.useEffect)(()=>{let N=z=>{z.key==="Escape"&&o()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[o]),(0,ve.useEffect)(()=>()=>{l.current&&window.clearTimeout(l.current)},[]);let L=(N,z)=>{u({kind:N,text:z}),l.current&&window.clearTimeout(l.current),l.current=N==="copying"?null:window.setTimeout(()=>u(null),1200)},R=async(N,z)=>{if(!d.current){d.current=!0,L("copying","\u590D\u5236\u4E2D\u2026");try{await N(),L("copied",z)}catch(D){L("failed",D instanceof Error?D.message:"\u590D\u5236\u5931\u8D25")}finally{d.current=!1}}},A=N=>{r.zoom<=1||(N.preventDefault(),N.stopPropagation(),N.currentTarget instanceof Element&&N.currentTarget.setPointerCapture(N.pointerId),g.current={startX:N.clientX,startY:N.clientY,panX:r.pan.x,panY:r.pan.y,moved:!1,onImage:N.target===x.current},s(!0))},P=N=>{let z=g.current;if(!z)return;let D=N.clientX-z.startX,F=N.clientY-z.startY;!z.moved&&Math.hypot(D,F)<=Nv||(z.moved=!0,i(W=>k({...W,pan:{x:z.panX+D,y:z.panY+F}})))},w=()=>{let N=g.current;g.current=null,s(!1),N&&!N.moved&&!N.onImage&&o()},_=N=>{let z=N.target instanceof Element?N.target:null;z&&(z.closest("button, a, [data-zoom-image], [data-zoom-controls]")||o())},E=N=>i(z=>k({...z,zoom:Co(z.zoom*N)}));return(0,Uf.createPortal)((0,he.jsxs)("div",{ref:v,className:"im-zoom-overlay",onPointerDown:_,onClick:N=>N.stopPropagation(),children:[(0,he.jsx)("div",{ref:m,className:"im-zoom-viewport",style:{cursor:a?"grabbing":r.zoom>1?"grab":"zoom-in"},onPointerDown:A,onPointerMove:P,onPointerUp:w,onPointerCancel:w,onDoubleClick:N=>{N.stopPropagation(),M()},children:(0,he.jsx)("img",{ref:x,"data-zoom-image":!0,src:e,alt:t??"\u9884\u89C8",draggable:!1,onLoad:()=>{let N=x.current;N&&(p.current={width:N.naturalWidth,height:N.naturalHeight},y.current={width:N.clientWidth,height:N.clientHeight},S())},className:"im-zoom-image",style:{transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transition:a?"none":"transform 0.1s ease-out"}})}),(0,he.jsxs)("div",{className:"im-zoom-top","data-zoom-controls":!0,children:[t?(0,he.jsx)("div",{className:"im-zoom-name",title:n||t,children:t}):(0,he.jsx)("div",{"aria-hidden":!0}),(0,he.jsx)("button",{type:"button",className:"im-zoom-close","aria-label":"\u5173\u95ED\u9884\u89C8",title:"\u5173\u95ED\uFF08Esc\uFF09",onClick:o,children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M4 4l8 8M12 4l-8 8"})})})]}),(0,he.jsx)("div",{className:"im-zoom-dock-wrap","data-zoom-controls":!0,children:(0,he.jsxs)("div",{className:"im-zoom-dock",title:"\u6EDA\u8F6E\u7F29\u653E \xB7 \u653E\u5927\u540E\u62D6\u62FD\u5E73\u79FB \xB7 \u53CC\u51FB\u56DE\u5230\u9002\u5E94\u7A97\u53E3 \xB7 \u70B9\u51FB\u7A7A\u767D\u5904\u6216 Esc \u5173\u95ED",children:[(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u7F29\u5C0F",title:"\u7F29\u5C0F",onClick:()=>E(1/Jr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9"})})}),(0,he.jsxs)("span",{className:"im-zoom-readout",title:`${b?`${b.width}\xD7${b.height} \xB7 `:""}\u76F8\u5BF9\u539F\u56FE\u7684\u5B9E\u9645\u663E\u793A\u6BD4\u4F8B`,children:[qf(r.zoom,b,y.current),"%"]}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn im-zoom-btn--icon","aria-label":"\u653E\u5927",title:"\u653E\u5927",onClick:()=>E(Jr),children:(0,he.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:(0,he.jsx)("path",{d:"M3.5 8h9M8 3.5v9"})})})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:I,children:"\u9002\u5E94\u7A97\u53E3"}),(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",onClick:C,title:"\u5B9E\u9645\u5927\u5C0F\uFF1A1 \u4E2A\u56FE\u50CF\u50CF\u7D20 = 1 \u4E2A\u5C4F\u5E55\u50CF\u7D20\uFF08\u5927\u56FE\u4F1A\u8D85\u51FA\u7A97\u53E3\uFF0C\u53EF\u62D6\u62FD\u67E5\u770B\uFF09",children:"\u5B9E\u9645\u5927\u5C0F"})]}),(0,he.jsx)("span",{className:"im-zoom-divider","aria-hidden":!0}),(0,he.jsxs)("div",{className:"im-zoom-group",children:[(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",disabled:f,onClick:()=>void R(()=>Ff(e),"\u5DF2\u590D\u5236\u56FE\u7247"),children:"\u590D\u5236\u56FE\u7247"}),n?(0,he.jsx)("button",{type:"button",className:"im-zoom-btn",title:n,disabled:f,onClick:()=>void R(()=>Vf(n),"\u5DF2\u590D\u5236\u8DEF\u5F84"),children:"\u590D\u5236\u8DEF\u5F84"}):null,(0,he.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",className:"im-zoom-btn",children:"\u65B0\u6807\u7B7E\u6253\u5F00"})]}),c?(0,he.jsx)("span",{role:"status","aria-live":"polite",className:`im-zoom-toast${c.kind==="failed"?" is-failed":c.kind==="copied"?" is-copied":""}`,children:c.text}):null]})})]}),document.body)}var fs=require("react");var Qt=require("react"),jf=require("react-dom");var wt=require("react/jsx-runtime"),Zf=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(","),Eo=[];function Kf(e){return Eo[Eo.length-1]===e}function Oe({title:e,subtitle:t,children:n,onClose:o,size:r="md",footer:i,initialFocusRef:a,closeOnBackdrop:s=!0,nested:c=!1,headerless:u=!1}){let l=`im-modal-${(0,Qt.useId)()}`,d=`${l}-title`,f=(0,Qt.useRef)(null),p=(0,Qt.useRef)(null),b=(0,Qt.useRef)(o);return b.current=o,(0,Qt.useEffect)(()=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,Eo.push(l);let y=f.current;(a?.current??y?.querySelector(Zf)??y)?.focus();let v=m=>{if(!Kf(l))return;if(m.key==="Escape"){if(Qd())return;m.preventDefault(),m.stopPropagation(),b.current();return}if(m.key!=="Tab"||!y)return;let x=Array.from(y.querySelectorAll(Zf)).filter(S=>!S.hidden&&S.getAttribute("aria-hidden")!=="true");if(!x.length){m.preventDefault(),y.focus();return}let k=x[0],M=x[x.length-1];!k||!M||(m.shiftKey&&(document.activeElement===k||!y.contains(document.activeElement))?(m.preventDefault(),M.focus()):!m.shiftKey&&document.activeElement===M&&(m.preventDefault(),k.focus()))};return document.addEventListener("keydown",v,!0),()=>{document.removeEventListener("keydown",v,!0);let m=Eo.lastIndexOf(l);m>=0&&Eo.splice(m,1);let x=p.current;window.setTimeout(()=>x?.focus(),0)}},[a]),(0,jf.createPortal)((0,wt.jsx)("div",{className:`im-modal-shell${c?" im-modal-shell--nested":""}`,onMouseDown:y=>{s&&y.target===y.currentTarget&&Kf(l)&&o()},children:(0,wt.jsxs)("section",{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":d,tabIndex:-1,className:`im-modal-panel im-modal-panel--${r}`,onMouseDown:y=>y.stopPropagation(),children:[u?(0,wt.jsx)("h2",{id:d,className:"visually-hidden",children:e}):(0,wt.jsxs)("header",{className:"im-modal-header",children:[(0,wt.jsx)("h2",{id:d,className:"im-modal-title",children:e}),t?(0,wt.jsx)("p",{className:"im-modal-subtitle",children:t}):null]}),(0,wt.jsx)("div",{className:"im-modal-body",children:n}),i?(0,wt.jsx)("footer",{className:"im-modal-footer",children:i}):null]})}),document.body)}var de=require("react/jsx-runtime");function Qf({workflows:e=[],onCancel:t,onSubmit:n,imagoraRoot:o}){let[r,i]=(0,fs.useState)(`\u753B\u5E03 ${new Date().toISOString().slice(5,16).replace("T"," ")}`),[a,s]=(0,fs.useState)(null),c=r.trim(),u=e.some(d=>d.name===c),l=()=>{if(c){if(u&&a!==c){s(c);return}n(c)}};return a?(0,de.jsx)(Oe,{title:"\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u5DE5\u4F5C\u6D41\uFF1F",subtitle:`\u300C${a}\u300D\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4FDD\u5B58\u4F1A\u8986\u76D6\u6389\u5B83\u3002`,size:"sm",onClose:()=>s(null),footer:(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>s(null),children:"\u8FD4\u56DE\u6539\u540D"}),(0,de.jsx)("button",{type:"button",className:"im-btn-danger im-btn-sm",onClick:()=>n(a),children:"\u8986\u76D6\u4FDD\u5B58"})]}),children:(0,de.jsx)("p",{className:"im-modal-note",children:"\u8986\u76D6\u540E\u65E7\u7684\u90A3\u4EFD\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF1B\u60F3\u4FDD\u7559\u5C31\u5148\u8FD4\u56DE\u6539\u4E2A\u540D\u5B57\u3002"})}):(0,de.jsxs)(Oe,{title:"\u4FDD\u5B58\u5DE5\u4F5C\u6D41",subtitle:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57\uFF0C\u4E4B\u540E\u53EF\u4EE5\u518D\u52A0\u8F7D\u56DE\u6765\u3002",size:"sm",onClose:t,footer:(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,de.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c,onClick:l,children:"\u4FDD\u5B58"})]}),children:[(0,de.jsx)("input",{autoFocus:!0,value:r,"aria-label":"\u5DE5\u4F5C\u6D41\u540D\u79F0",placeholder:"\u7ED9\u8FD9\u4E2A\u753B\u5E03\u8D77\u4E2A\u540D\u5B57",className:"im-field",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&l()}}),(0,de.jsxs)("p",{className:"im-modal-note",style:{marginTop:8},children:["\u5B58\u5230 ",o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09",o?"\uFF08\u4E0E\u539F\u7248\u5171\u7528\u4E00\u4EFD\uFF09":""]}),e.length?(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("p",{className:"im-modal-note",style:{marginTop:12},children:"\u6216\u8005\u8986\u76D6\u4E00\u4E2A\u5DF2\u6709\u7684\uFF08\u70B9\u4E00\u4E0B\u586B\u540D\u5B57\uFF09"}),(0,de.jsx)("div",{className:"im-pick-list",children:e.map(d=>(0,de.jsxs)("button",{type:"button",className:"im-pick-row",onClick:()=>i(d.name),children:[(0,de.jsx)("span",{className:"im-pick-name",children:d.name}),(0,de.jsx)("span",{className:"im-pick-meta",children:d.modified})]},d.name))})]}):null]})}function Jf({workflows:e,onCancel:t,onPick:n,imagoraRoot:o}){let r=o?`${o}\\output\\workflows`:"\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09";return(0,de.jsx)(Oe,{title:"\u52A0\u8F7D\u5DE5\u4F5C\u6D41",subtitle:"\u9009\u4E00\u4EFD\u5DF2\u4FDD\u5B58\u7684\u753B\u5E03\u7EE7\u7EED\u5DE5\u4F5C\u3002",size:"sm",onClose:t,footer:(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u5173\u95ED"}),children:e.length?(0,de.jsx)("div",{className:"im-workflow-list",children:e.map(i=>(0,de.jsxs)("button",{type:"button",className:"im-workflow-list__item",onClick:()=>n(i.name),children:[(0,de.jsx)("span",{className:"im-workflow-list__name",children:i.name}),(0,de.jsx)("span",{className:"im-workflow-list__meta",children:new Date(i.modified).toLocaleString()})]},i.name))}):(0,de.jsxs)(de.Fragment,{children:[(0,de.jsx)("div",{className:"im-modal-empty",children:"\u8FD9\u4E2A\u76EE\u5F55\u91CC\u8FD8\u6CA1\u6709\u5DE5\u4F5C\u6D41"}),(0,de.jsxs)("p",{className:"im-modal-note",children:["\u8BFB\u7684\u662F ",r]})]})})}var Cv=[["\u753B\u5E03","\u53F3\u952E\u62D6\u62FD\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u5F39\u83DC\u5355 \xB7 Ctrl/Cmd+\u70B9\u51FB\u52A0\u9009 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u7A7A\u767D\u62D6\u62FD\u5E73\u79FB \xB7 \u5DE6\u4E0B\u89D2\u300C\u9002\u5E94\u300D\u5168\u89C8 \xB7 \u53CC\u51FB\u56FE\u7247\u653E\u5927\u9884\u89C8"],["\u8282\u70B9","\u60AC\u505C\u663E\u53F3\u4FA7\u64CD\u4F5C\u680F \xB7 \u9009\u4E2D\u540E\u53F3\u4E0A\u89D2\u53EF\u8FD0\u884C/\u6574\u7406/\u8FDE\u7EBF/\u8BBE\u8DEF\u5F84/\u5220\u9664 \xB7 \u8FD0\u884C\u4E2D\u53EF\u5355\u5361\u53D6\u6D88"],["\u8FDE\u7EBF","\u56FE\u7247\u2192\u63D0\u793A\u8BCD/\u56FE\u7247\u7EC4 \xB7 \u56FE\u7247\u7EC4\u2192\u63D0\u793A\u8BCD \xB7 \u63D0\u793A\u8BCD\u2192\u56FE\u7247\uFF1B\u63D0\u793A\u8BCD\u4EC5\u4E00\u6761\u5165\u8FB9\uFF0C\u591A\u56FE\u7ECF\u56FE\u7247\u7EC4\u805A\u5408"],["\u5FEB\u6377\u952E","Ctrl+A \u5168\u9009 \xB7 Ctrl+Z/Y \u64A4\u9500\u6062\u590D \xB7 Delete \u5220\u9664\u9009\u4E2D \xB7 Ctrl+S \u4FDD\u5B58 \xB7 \u53CC\u51FB\u8FDE\u7EBF\u6216\u9009\u4E2D\u540E Delete/Backspace \u5220\u9664\u8FDE\u7EBF"],["\u5F15\u7528","\u63D0\u793A\u8BCD\u91CC\u5199 @\u56FE\u7247\u540D \u53EA\u6311\u6307\u5B9A\u56FE\uFF1B\u4E0D\u5199\u5C31\u7528\u5168\u90E8\u5165\u8FB9\u56FE\u7247"],["\u8FD0\u884C","\u5355\u5361\u300C\u8FD0\u884C\u300D\xB7 \u5DE5\u5177\u680F\u300C\u5168\u90E8\u8FD0\u884C\u300D\u300C\u8FD0\u884C\u6240\u9009\u300D\u300C\u53D6\u6D88\u5168\u90E8\u300D"],["\u4FDD\u5B58","\u547D\u540D\u4FDD\u5B58\u8FDB\u5DE5\u4F5C\u6D41\uFF1B\u753B\u5E03\u6539\u52A8\u4F1A\u81EA\u52A8\u843D\u6062\u590D\u5FEB\u7167"]];function ep({onClose:e,config:t}){return(0,de.jsx)(Oe,{title:"\u64CD\u4F5C\u5E2E\u52A9",subtitle:"\u62D6\u5165\u56FE\u7247 \xB7 \u53F3\u952E\u6846\u9009 \xB7 \u53F3\u952E\u5355\u51FB\u8282\u70B9\u51FA\u83DC\u5355",size:"md",onClose:e,footer:(0,de.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"}),children:(0,de.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,de.jsx)("div",{style:{display:"grid",gap:10,fontSize:12},children:Cv.map(([n,o])=>(0,de.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3.25rem 1fr",gap:12},children:[(0,de.jsx)("span",{style:{color:"var(--im-ink-3)",fontWeight:600},children:n}),(0,de.jsx)("span",{style:{lineHeight:1.6},children:o})]},n))}),t?(0,de.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u914D\u7F6E\u6765\u6E90\uFF1A",t.source==="plugin"?"\u63D2\u4EF6\u5185\u914D\u7F6E":t.root||"\u672A\u627E\u5230"," \xB7 \u6A21\u578B ",t.modelLabel,(0,de.jsx)("br",{}),"\u7ED3\u679C\u9ED8\u8BA4\u843D\u5728 ",t.defaultOutputDir]}):null]})})}var tt=require("react");function je(e,t,n){if(Number.isNaN(e))return t;let o=Math.min(t,n),r=Math.max(t,n);return Math.min(r,Math.max(o,e))}function np(e,t=.06){let n=je(e.width,t,1),o=je(e.height,t,1);return{width:n,height:o,x:je(e.x,0,1-n),y:je(e.y,0,1-o)}}function op(e,t,n){return{...e,x:je(e.x+t,0,1-e.width),y:je(e.y+n,0,1-e.height)}}function rp(e,t,n,o,r,i){let a={...e};if(o.includes("e")&&(a.width=e.width+t),o.includes("s")&&(a.height=e.height+n),o.includes("w")&&(a.x=e.x+t,a.width=e.width-t),o.includes("n")&&(a.y=e.y+n,a.height=e.height-n),r!==null&&r>0&&i.width>0&&i.height>0){let s=r*(i.height/i.width);(o.includes("e")||o.includes("w"))&&!o.includes("n")&&!o.includes("s")||o.length>1&&Math.abs(t*i.width)>=Math.abs(n*i.height)?a.height=a.width/s:a.width=a.height*s,o.includes("w")&&(a.x=e.x+e.width-a.width),o.includes("n")&&(a.y=e.y+e.height-a.height);let l=Math.min(1,1/Math.max(a.width,.001),1/Math.max(a.height,.001));if(a.width*=l,a.height*=l,a.width<.06||a.height<.06){let p=Math.max(.06/Math.max(a.width,.001),.06/Math.max(a.height,.001));a.width*=p,a.height*=p}a.width=je(a.width,.06,1),a.height=je(a.height,.06,1);let d=Math.min(a.width,a.height*s,1),f=Math.min(a.height,d/s,1);a.width=f*s,a.height=f}else a.width=je(a.width,.06,1),a.height=je(a.height,.06,1);return a.x=je(a.x,0,1-a.width),a.y=je(a.y,0,1-a.height),a}function ip(e,t,n){let o=t*(n.height/n.width),r=e.width,i=r/o;return i>e.height&&(i=e.height,r=i*o),r>1&&(r=1,i=r/o),i>1&&(i=1,r=i*o),{x:je(e.x+(e.width-r)/2,0,1-r),y:je(e.y+(e.height-i)/2,0,1-i),width:r,height:i}}function ps(e,t,n){let o=Math.max(1,e,t),r=Number.isNaN(n)?1:n,a=Math.min(4096,Math.max(1,Math.round(r)))/o;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Ev(e,t){let n=Math.abs(Math.round(e)),o=Math.abs(Math.round(t));for(;o;){let r=n%o;n=o,o=r}return Math.max(1,n)}function ap(e,t){let n=Ev(e,t);return`${Math.round(e/n)}:${Math.round(t/n)}`}function ms(e){return new Promise((t,n)=>{let o=new Image;o.onload=()=>t(o),o.onerror=()=>n(new Error(`\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A${e.slice(0,64)}`)),o.src=e})}async function Jt(e){let t=await ms(e);return{width:t.naturalWidth,height:t.naturalHeight}}async function sp(e,t){let n=await ms(e);if(t)return tp(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let o=Math.min(n.width,n.height),r=Math.max(0,Math.floor((n.width-o)/2)),i=Math.max(0,Math.floor((n.height-o)/2));return tp(n,r,i,o,o)}async function lp(e,t){let n=await ms(e),{width:o,height:r}=ps(n.width,n.height,t.targetLongEdge);return t.algorithm==="high"?_v(n,o,r):cp(n,n.width,n.height,o,r,t.algorithm)}function tp(e,t,n,o,r){let i=document.createElement("canvas");i.width=Math.max(1,o),i.height=Math.max(1,r);let a=i.getContext("2d");return a?(a.drawImage(e,t,n,o,r,0,0,i.width,i.height),i.toDataURL("image/png")):e.src}function _v(e,t,n){let o=e,r=e.width,i=e.height;for(;r*2<t&&i*2<n;){let a=r*2,s=i*2;o=up(o,r,i,a,s,"high"),r=a,i=s}return cp(o,r,i,t,n,"high")}function cp(e,t,n,o,r,i){return up(e,t,n,o,r,i).toDataURL("image/png")}function up(e,t,n,o,r,i){let a=document.createElement("canvas");a.width=o,a.height=r;let s=a.getContext("2d");return s&&(s.imageSmoothingEnabled=i!=="nearest",s.imageSmoothingQuality=i==="bilinear"?"medium":"high",s.drawImage(e,0,0,t,n,0,0,o,r)),a}var Re=require("react/jsx-runtime"),dp=[{label:"\u81EA\u7531",ratio:null},{label:"1:1",ratio:1},{label:"4:3",ratio:4/3},{label:"3:2",ratio:3/2},{label:"16:9",ratio:16/9},{label:"2:3",ratio:2/3},{label:"9:16",ratio:9/16}],Pv=["nw","n","ne","e","se","s","sw","w"],gs={nw:{left:"0%",top:"0%",cursor:"nwse-resize"},n:{left:"50%",top:"0%",cursor:"ns-resize"},ne:{left:"100%",top:"0%",cursor:"nesw-resize"},e:{left:"100%",top:"50%",cursor:"ew-resize"},se:{left:"100%",top:"100%",cursor:"nwse-resize"},s:{left:"50%",top:"100%",cursor:"ns-resize"},sw:{left:"0%",top:"100%",cursor:"nesw-resize"},w:{left:"0%",top:"50%",cursor:"ew-resize"}};function fp({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,tt.useRef)(null),[i,a]=(0,tt.useState)(null),[s,c]=(0,tt.useState)({x:.08,y:.08,width:.84,height:.84}),[u,l]=(0,tt.useState)(null),[d,f]=(0,tt.useState)(!1),[p,b]=(0,tt.useState)(null),h=(0,tt.useRef)(null);(0,tt.useEffect)(()=>{let S=!0;return Jt(e).then(C=>{S&&(a(C),c(np({x:.06,y:.06,width:.88,height:.88})))}).catch(C=>{S&&b(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(C)}`)}),()=>{S=!1}},[e]);let y=S=>{l(S),i&&S!==null&&c(C=>ip(C,S,i))},g=(S,C)=>{S.stopPropagation(),S.target.setPointerCapture?.(S.pointerId),h.current={mode:C,startX:S.clientX,startY:S.clientY,base:s}},v=(0,tt.useCallback)(S=>{let C=h.current,I=r.current;if(!C||!I)return;let L=I.getBoundingClientRect();if(!L.width||!L.height)return;let R=(S.clientX-C.startX)/L.width,A=(S.clientY-C.startY)/L.height;c(C.mode==="move"?op(C.base,R,A):rp(C.base,R,A,C.mode,u,i??{width:1,height:1}))},[u,i]),m=()=>{h.current=null},x=async()=>{f(!0),b(null);try{let S=await sp(e,s),C=Math.round(s.width*(i?.width??0)),I=Math.round(s.height*(i?.height??0));await o(S,`\u88C1\u526A ${C}\xD7${I}${u?` \xB7 ${dp.find(L=>L.ratio===u)?.label}`:""}`)}catch(S){b(`\u88C1\u526A\u5931\u8D25\uFF1A${ue(S)}`)}finally{f(!1)}},k=i?Math.round(s.width*i.width):0,M=i?Math.round(s.height*i.height):0;return(0,Re.jsx)(Oe,{title:"\u88C1\u526A\u56FE\u7247",subtitle:"\u62D6\u6846\u5185\u5E73\u79FB\u3001\u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8\uFF0C\u786E\u8BA4\u540E\u653E\u5165\u753B\u5E03\u3002",size:"lg",onClose:n,footer:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsxs)("span",{className:"im-modal-note",children:["\u88C1\u526A\u540E ",k," \xD7 ",M,i?` \xB7 \u539F\u56FE ${i.width} \xD7 ${i.height}`:"",i?` \xB7 \u539F\u6BD4\u4F8B ${ap(i.width,i.height)}`:"",(0,Re.jsx)("br",{}),"\u62D6\u6846\u5185\u5E73\u79FB \xB7 \u62D6\u516B\u4E2A\u624B\u67C4\u6539\u5C3A\u5BF8 \xB7 \u6700\u5C0F ",Math.round(.06*100),"%"]}),(0,Re.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,Re.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:d||!i||k<8||M<8,onClick:()=>void x(),children:d?"\u5904\u7406\u4E2D\u2026":"\u88C1\u526A\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Re.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Re.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},role:"group","aria-label":"\u88C1\u526A\u6BD4\u4F8B",children:[(0,Re.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u6BD4\u4F8B"}),dp.map(S=>{let C=S.ratio===u;return(0,Re.jsx)("button",{type:"button","aria-pressed":C,className:`im-chip im-chip--sm im-chip--action${C?" is-brand":""}`,onClick:()=>y(S.ratio),children:S.label},S.label)}),(0,Re.jsxs)("span",{className:"im-spec-mono",style:{marginLeft:"auto",color:"var(--im-ink-3)"},children:[k," \xD7 ",M,"px"]})]}),(0,Re.jsxs)("div",{ref:r,onPointerMove:v,onPointerUp:m,onPointerCancel:m,style:{position:"relative",width:"100%",height:"min(56vh, 460px)",borderRadius:10,overflow:"hidden",background:"var(--im-surface-inset)",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none",userSelect:"none"},children:[(0,Re.jsx)("img",{src:e,alt:t??"\u5F85\u88C1\u526A",style:{maxWidth:"100%",maxHeight:"100%",display:"block"}}),(0,Re.jsx)("div",{onPointerDown:S=>g(S,"move"),style:{position:"absolute",left:`${s.x*100}%`,top:`${s.y*100}%`,width:`${s.width*100}%`,height:`${s.height*100}%`,border:"2px solid #fff",boxShadow:"0 0 0 9999px rgba(10, 12, 30, .55)",cursor:"move",boxSizing:"border-box"},children:Pv.map(S=>(0,Re.jsx)("span",{onPointerDown:C=>g(C,S),style:{position:"absolute",left:gs[S].left,top:gs[S].top,width:12,height:12,marginLeft:-6,marginTop:-6,borderRadius:3,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,.35)",cursor:gs[S].cursor}},S))})]}),p?(0,Re.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:p}):null]})})}var Xe=require("react");function hs(e){return Number.isFinite(e.x)&&Number.isFinite(e.y)}function bs(e){return Number.isFinite(e)?Math.min(.4,Math.max(.01,e)):.08}function ys(e,t){let n=Math.min(t.width,t.height);return!Number.isFinite(n)||n<=0?0:bs(e)*n/2}function pp(e,t,n=.004){if(!hs(t))return e;let o=e[e.length-1];if(!o)return[t];let r=Number.isFinite(n)?Math.max(0,n):0;return Math.hypot(t.x-o.x,t.y-o.y)<=r?e:[...e,t]}function mp(e,t,n,o){if(!hs(e)||!hs(t))return[];if(!(o.width>0)||!(o.height>0))return[];if(!Number.isFinite(o.width)||!Number.isFinite(o.height))return[];let r=n/4;if(!Number.isFinite(r)||r<=0)return[];let i=(t.x-e.x)*o.width,a=(t.y-e.y)*o.height,s=Math.hypot(i,a);if(!(s>0))return[];let c=Math.ceil(s/r);if(c<=1)return[];let u=Math.min(c,2048),l=[];for(let d=1;d<u;d+=1){let f=d/u;l.push({x:e.x+(t.x-e.x)*f,y:e.y+(t.y-e.y)*f})}return l}function zv(e){return e.some(t=>t.mode==="paint"&&t.points.length>0)}function gp(e){return!zv(e)}var De=require("react/jsx-runtime"),ti=640;function hp({src:e,name:t,onClose:n,onConfirm:o}){let r=(0,Xe.useRef)(null),i=(0,Xe.useRef)(!1),[a,s]=(0,Xe.useState)(null),[c,u]=(0,Xe.useState)(null),[l,d]=(0,Xe.useState)([]),[f,p]=(0,Xe.useState)("paint"),[b,h]=(0,Xe.useState)(.08),[y,g]=(0,Xe.useState)(!1),[v,m]=(0,Xe.useState)(null);(0,Xe.useEffect)(()=>{let A=!0;Jt(e).then(w=>{A&&s(w)}).catch(w=>{A&&m(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(w)}`)});let P=new Image;return P.crossOrigin="anonymous",P.onload=()=>{A&&u(P)},P.src=e,()=>{A=!1,u(null)}},[e]);let x=(0,Xe.useMemo)(()=>a?a.width>=a.height?{width:ti,height:Math.round(a.height/a.width*ti)}:{width:Math.round(a.width/a.height*ti),height:ti}:{width:0,height:0},[a]);(0,Xe.useEffect)(()=>{let A=r.current;if(!A||!c||!x.width)return;let P=A.getContext("2d");if(!P||(A.width=x.width,A.height=x.height,P.clearRect(0,0,x.width,x.height),P.drawImage(c,0,0,x.width,x.height),!a))return;let w=ys(b,{width:x.width,height:x.height});P.save(),P.globalAlpha=.55,P.fillStyle="#ffffff",P.strokeStyle="#ffffff",P.lineWidth=w*2,P.lineCap="round",P.lineJoin="round";for(let _ of l){_.mode==="erase"?(P.globalCompositeOperation="destination-out",P.strokeStyle="#000",P.fillStyle="#000"):(P.globalCompositeOperation="source-over",P.strokeStyle="#ffffff",P.fillStyle="#ffffff");let E=_.points;if(E.length&&(P.beginPath(),P.arc(E[0].x*x.width,E[0].y*x.height,w,0,Math.PI*2),P.fill(),E.length>1)){P.beginPath(),P.moveTo(E[0].x*x.width,E[0].y*x.height);for(let N of E.slice(1))P.lineTo(N.x*x.width,N.y*x.height);P.stroke()}}P.restore()},[x,l,b,a,c]);let k=A=>{let P=r.current;if(!P)return null;let w=P.getBoundingClientRect();return!w.width||!w.height?null:{x:Math.min(1,Math.max(0,(A.clientX-w.left)/w.width)),y:Math.min(1,Math.max(0,(A.clientY-w.top)/w.height))}},M=A=>{let P=k(A);P&&(A.currentTarget.setPointerCapture?.(A.pointerId),i.current=!0,d(w=>[...w,{mode:f,size:b,points:[P]}]))},S=A=>{if(!i.current)return;let P=k(A);P&&d(w=>{let _=w[w.length-1];if(!_)return w;let E=pp(_.points,P);return E===_.points?w:[...w.slice(0,-1),{..._,points:E}]})},C=()=>{i.current=!1},I=async()=>{if(!c||!a)throw new Error("\u539F\u56FE\u8FD8\u6CA1\u52A0\u8F7D\u597D");let A=document.createElement("canvas");A.width=a.width,A.height=a.height;let P=A.getContext("2d");if(!P)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");P.fillStyle="#ffffff",P.fillRect(0,0,a.width,a.height);let w=ys(b,{width:a.width,height:a.height});P.globalCompositeOperation="destination-out",P.lineWidth=w*2,P.lineCap="round",P.lineJoin="round",P.strokeStyle="#000",P.fillStyle="#000";for(let _ of l){if(_.mode!=="paint")continue;let E=mp(_.points[0],_.points[_.points.length-1],w/4,{width:a.width,height:a.height});if(E.length&&(P.beginPath(),P.arc(E[0].x*a.width,E[0].y*a.height,w,0,Math.PI*2),P.fill(),E.length>1)){P.beginPath(),P.moveTo(E[0].x*a.width,E[0].y*a.height);for(let N of E.slice(1))P.lineTo(N.x*a.width,N.y*a.height);P.stroke()}}return A.toDataURL("image/png")},L=async()=>{g(!0),m(null);try{let A=await I();await o(A,"\u5DF2\u6302\u4E0A\u8499\u7248\uFF1A\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8")}catch(A){m(`\u5BFC\u51FA\u8499\u7248\u5931\u8D25\uFF1A${ue(A)}`)}finally{g(!1)}},R=gp(l);return(0,De.jsx)(Oe,{title:"\u8499\u7248\u91CD\u7ED8",subtitle:"\u6D82\u51FA\u8981\u91CD\u7ED8\u7684\u533A\u57DF\uFF0C\u5BFC\u51FA\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\u3002",size:"lg",onClose:n,footer:(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:n,children:"\u53D6\u6D88"}),(0,De.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:y||R,onClick:()=>void L(),children:y?"\u5BFC\u51FA\u4E2D\u2026":"\u6302\u4E0A\u8499\u7248"})]}),children:(0,De.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,De.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[[{mode:"paint",label:"\u6D82\uFF08\u8981\u91CD\u7ED8\uFF09"},{mode:"erase",label:"\u64E6"}].map(A=>(0,De.jsx)("button",{type:"button","aria-pressed":f===A.mode,className:`im-chip im-chip--sm im-chip--action${f===A.mode?" is-brand":""}`,onClick:()=>p(A.mode),children:A.label},A.mode)),(0,De.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u7B14\u5237",(0,De.jsx)("input",{type:"range",min:.01*100,max:.4*100,value:Math.round(b*100),onChange:A=>h(bs(Number(A.target.value)/100)),className:"im-range"}),(0,De.jsxs)("b",{style:{minWidth:34,textAlign:"right"},children:[Math.round(b*100),"%"]})]}),(0,De.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:!l.length,onClick:()=>d([]),children:"\u6E05\u7A7A"}),(0,De.jsx)("span",{style:{marginLeft:"auto",fontSize:11.5,color:"var(--im-ink-3)"},children:l.length?`${l.length} \u7B14`:"\u8FD8\u6CA1\u6D82"})]}),(0,De.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--im-surface-inset)",borderRadius:10,padding:8},children:(0,De.jsx)("canvas",{ref:r,onPointerDown:M,onPointerMove:S,onPointerUp:C,onPointerCancel:C,style:{width:x.width,maxWidth:"100%",height:"auto",borderRadius:6,cursor:"crosshair",touchAction:"none"}})}),(0,De.jsxs)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:["\u6D82\u8FC7\u7684\u5730\u65B9\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u6CA1\u6D82\u7684\u4FDD\u6301\u539F\u6837\uFF08\u5BFC\u51FA\u7684\u662F\u4E0E\u539F\u56FE\u540C\u5C3A\u5BF8\u7684 PNG \u8499\u7248\uFF09\u3002",t?` \xB7 ${t}`:"",a?` \xB7 \u539F\u56FE ${a.width} \xD7 ${a.height}`:""]}),v?(0,De.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:v}):null]})})}var ge=require("react");function ni(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(2)} \u5143`}function Av(e){return typeof e!="number"||!Number.isFinite(e)?"-":`${e.toFixed(1)}%`}function Ov(e){if(typeof e!="number"||!Number.isFinite(e)||e<=0)return"-";if(e<60)return`${e.toFixed(1)}s`;let t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}m${String(n).padStart(2,"0")}s`}function bp(e){return[{label:"\u4ECA\u65E5\u82B1\u8D39",value:ni(e.todayCost)},{label:"\u7D2F\u8BA1\u82B1\u8D39",value:ni(e.cost)},{label:"\u6210\u529F\u7387",value:`${Av(e.successRate)}\uFF08${e.ok}/${e.total}\uFF09`},{label:"\u5931\u8D25",value:String(e.error)},{label:"\u6210\u529F\u5E73\u5747\u8017\u65F6",value:Ov(e.avgSeconds)}]}var en=require("react"),yp=require("react-dom"),Nn=require("react/jsx-runtime");function xp({text:e}){let t=(0,en.useRef)(null),n=(0,en.useRef)(null),[o,r]=(0,en.useState)(null),[i,a]=(0,en.useState)(0),s=l=>{let d=t.current;d&&d.scrollHeight>d.clientHeight&&r(l.clientY)},c=l=>{r(d=>d!==null?l.clientY:d)},u=()=>{r(null),a(0)};return(0,en.useLayoutEffect)(()=>{if(o!==null&&n.current){let l=n.current.getBoundingClientRect();a(Math.max(8,Math.min(o+16,window.innerHeight-l.height-8)))}},[o,e]),(0,Nn.jsxs)(Nn.Fragment,{children:[(0,Nn.jsx)("p",{ref:t,className:"im-history-prompt",onMouseEnter:s,onMouseMove:c,onMouseLeave:u,children:e}),o!==null?(0,yp.createPortal)((0,Nn.jsx)("div",{ref:n,className:"im-prompt-tip","data-testid":"prompt-tip",style:{left:"10vw",width:"80vw",top:i},children:e}),document.body):null]})}var ee=require("react/jsx-runtime"),wp=60;function Lv(e){return e.replace(/[\\/][^\\/]+$/,"")}function vp({onClose:e,onImport:t,imagoraRoot:n}){let[o,r]=(0,ge.useState)([]),[i,a]=(0,ge.useState)(""),[s,c]=(0,ge.useState)(""),[u,l]=(0,ge.useState)(!1),[d,f]=(0,ge.useState)(0),[p,b]=(0,ge.useState)(!0),[h,y]=(0,ge.useState)(!1),[g,v]=(0,ge.useState)(""),[m,x]=(0,ge.useState)("ledger"),[k,M]=(0,ge.useState)(""),[S,C]=(0,ge.useState)(null),[I,L]=(0,ge.useState)(new Map),[R,A]=(0,ge.useState)(null),[P,w]=(0,ge.useState)({dailyLimit:"",singleRunLimit:""}),[_,E]=(0,ge.useState)(!1),[N,z]=(0,ge.useState)(""),D=(0,ge.useRef)(null),F=(0,ge.useRef)(0),W=(0,ge.useRef)([]),V=(0,ge.useRef)(i),K=(0,ge.useRef)(s);V.current=i,K.current=s;let X=(0,ge.useCallback)(async q=>{let re=++F.current;b(!0),v("");try{let fe=await $a({limit:wp,offset:0,query:q?.query??V.current,status:q?.status??K.current});if(re!==F.current)return;let Ce=Array.isArray(fe.items)?fe.items:[];x(fe.source==="ledger"?"ledger":"none"),M(typeof fe.ledgerPath=="string"?fe.ledgerPath:""),r(Ce),W.current=Ce,l(fe.hasMore===!0),f(Number(fe.total)||Ce.length)}catch(fe){re===F.current&&v(ue(fe))}finally{re===F.current&&b(!1)}},[]),j=(0,ge.useCallback)(async()=>{if(h||!u)return;let q=F.current;y(!0);try{let re=await $a({limit:wp,offset:W.current.length,query:V.current,status:K.current});if(q!==F.current)return;let fe=Array.isArray(re.items)?re.items:[];r(Ce=>[...Ce,...fe]),W.current=[...W.current,...fe],l(re.hasMore===!0),f(Number(re.total)||W.current.length)}catch(re){q===F.current&&v(ue(re))}finally{q===F.current&&y(!1)}},[u,h]);(0,ge.useEffect)(()=>{X(),Or().then(C).catch(()=>C(null)),hd().then(q=>L(new Map((q?.images??[]).map(re=>[re.id,re])))).catch(()=>L(new Map))},[X]);let ce=(0,ge.useRef)(!1);(0,ge.useEffect)(()=>{!S?.localBudget||ce.current||w({dailyLimit:S.localBudget.dailyLimit?String(S.localBudget.dailyLimit):"0",singleRunLimit:S.localBudget.singleRunLimit?String(S.localBudget.singleRunLimit):"0"})},[S]);let B=q=>{ce.current=!0,z(""),w(re=>({...re,...q}))},O=async()=>{E(!0),z("");let q={dailyLimit:Math.max(0,Number(P.dailyLimit)||0),singleRunLimit:Math.max(0,Number(P.singleRunLimit)||0)};try{await Ed(q);let re=await Or();C(re),ce.current=!1,z("\u9884\u7B97\u5DF2\u4FDD\u5B58")}catch(re){z(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ue(re)}`)}finally{E(!1)}},Y=600,oe=(0,ge.useCallback)(()=>{let q=D.current;q&&q.scrollHeight-q.scrollTop-q.clientHeight<Y&&j()},[j]),ie=(0,ge.useMemo)(()=>o.filter(q=>q.status==="error"&&q.inputRefMissing).length,[o]),J=S?bp(S):[],te=S?.bySize.slice(0,3)??[],Q=k||(n?`${n}\\logs\\generation.jsonl`:"\uFF08\u672A\u8BBE\u7F6E imagora \u76EE\u5F55\uFF09");return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(Oe,{title:"\u751F\u6210\u5386\u53F2",size:"wide",headerless:!0,onClose:e,children:(0,ee.jsxs)("div",{className:"im-history",children:[(0,ee.jsxs)("div",{className:"im-history-bar",children:[(0,ee.jsx)("h2",{className:"im-history-title",children:"\u751F\u6210\u5386\u53F2"}),(0,ee.jsx)("input",{className:"im-field im-history-search",value:i,placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D","aria-label":"\u641C\u7D22\u63D0\u793A\u8BCD\u3001\u8D28\u91CF\u6216\u6587\u4EF6\u540D",onChange:q=>a(q.target.value),onKeyDown:q=>{q.key==="Enter"&&X()}}),(0,ee.jsx)(ft,{className:"im-history-status",value:s,title:"\u6309\u72B6\u6001\u7B5B\u9009",options:[{value:"",label:"\u5168\u90E8\u72B6\u6001"},{value:"ok",label:"\u6210\u529F"},{value:"error",label:"\u5931\u8D25"}],onChange:q=>{c(q),X({status:q})}}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void X(),children:"\u641C\u7D22"}),(0,ee.jsxs)("div",{className:"im-history-bar-end",children:[ie>0?(0,ee.jsxs)("span",{className:"im-history-warn",title:"\u56FE\u751F\u56FE\u8BB0\u5F55\u4F46\u53C2\u8003\u56FE\u5DF2\u4ECE\u8D44\u4EA7\u5E93\u627E\u4E0D\u56DE\uFF0C\u65E0\u6CD5\u8FD8\u539F",children:[ie," \u6761\u53C2\u8003\u56FE\u5DF2\u4E22\u5931"]}):null,(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:e,children:"\u5173\u95ED"})]})]}),J.length?(0,ee.jsxs)("div",{className:"im-history-stats",children:[(0,ee.jsxs)("div",{className:"im-history-stat-row",children:[(0,ee.jsx)("div",{className:"im-history-stat-grid",children:J.map(q=>(0,ee.jsxs)("div",{className:"im-history-stat",children:[(0,ee.jsx)("div",{className:"im-history-stat-label",children:q.label}),(0,ee.jsx)("div",{className:"im-history-stat-value",children:q.value})]},q.label))}),(0,ee.jsxs)("div",{className:"im-history-budget",children:[(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u65E5\u9884\u7B97"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:P.dailyLimit,title:"\u5F53\u65E5\u7D2F\u8BA1\u8D39\u7528\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650\uFF1B\u8D85\u9650\u63D0\u4EA4\u524D\u4F1A\u8981\u6C42\u786E\u8BA4",onChange:q=>B({dailyLimit:q.target.value})})]}),(0,ee.jsxs)("label",{className:"im-history-budget-field",children:[(0,ee.jsx)("span",{className:"im-history-budget-label",children:"\u5355\u6B21\u4E0A\u9650"}),(0,ee.jsx)("input",{type:"text",inputMode:"decimal",className:"im-field im-history-budget-input",value:P.singleRunLimit,title:"\u5355\u6B21\u63D0\u4EA4\u7684\u9884\u4F30\u4E0A\u9650\uFF08\u5143\uFF09\uFF0C0 = \u4E0D\u9650",onChange:q=>B({singleRunLimit:q.target.value})})]}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:_||p,onClick:()=>void O(),children:_?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u9884\u7B97"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:p,onClick:()=>void Or().then(C).catch(()=>{}),children:"\u5237\u65B0"}),N?(0,ee.jsx)("span",{className:"im-history-budget-tip",children:N}):null]})]}),te.length?(0,ee.jsxs)("div",{className:"im-history-sizes",children:[(0,ee.jsx)("span",{className:"im-history-sizes-label",children:"\u6309\u5C3A\u5BF8"}),te.map(q=>(0,ee.jsxs)("span",{className:"im-history-sizes-row",children:[q.size," ",(0,ee.jsxs)("span",{className:"im-history-sizes-label",children:["\xD7",q.count]})," \xB7 ",ni(q.cost)]},q.size))]}):null]}):null,(0,ee.jsxs)("div",{ref:D,className:"im-history-list",onScroll:oe,"data-testid":"history-list",children:[g?(0,ee.jsx)("div",{className:"im-history-error",children:g}):null,p?(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6B63\u5728\u8BFB\u53D6\u5386\u53F2\u2026"}):o.length?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("ul",{className:"im-history-rows",children:o.map((q,re)=>{let fe=q.assetId?I.get(q.assetId):void 0,Ce=!!fe;return(0,ee.jsxs)("li",{className:"im-history-row",children:[(0,ee.jsx)("div",{className:"im-history-thumb",children:q.url?(0,ee.jsx)("img",{src:q.url,alt:q.prompt||"\u751F\u6210\u7ED3\u679C",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},title:"\u53CC\u51FB\u653E\u5927\u9884\u89C8",onDoubleClick:()=>A({url:q.url,path:q.path})}):(0,ee.jsx)("span",{className:"im-history-thumb-empty",children:q.status==="error"?"\u751F\u6210\u5931\u8D25":"\u6587\u4EF6\u5DF2\u79FB\u52A8"})}),(0,ee.jsxs)("div",{className:"im-history-main",children:[(0,ee.jsx)(xp,{text:q.prompt||"\u65E0\u63D0\u793A\u8BCD"}),(0,ee.jsxs)("p",{className:"im-history-meta",children:[q.time||"-"," \xB7 ",q.quality||"-"," \xB7 ",q.size||"-"]}),q.inputRefs.length?(0,ee.jsx)("div",{className:"im-history-refs",children:q.inputRefs.map(Pe=>(0,ee.jsx)("div",{className:"im-history-ref",title:"\u53C2\u8003\u56FE \xB7 \u53CC\u51FB\u653E\u5927",children:(0,ee.jsx)("img",{src:Pe.url,alt:"\u53C2\u8003\u56FE",loading:"lazy",decoding:"async",style:{cursor:"zoom-in"},onDoubleClick:()=>A({url:Pe.url,path:Pe.path})})},Pe.id))}):null,q.inputRefMissing?(0,ee.jsx)("span",{className:"im-history-ref-missing",children:"\u53C2\u8003\u56FE\u7F3A\u5931"}):null,(0,ee.jsxs)("div",{className:"im-history-actions",children:[(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.prompt,onClick:()=>void navigator.clipboard.writeText(q.prompt||""),children:"\u590D\u5236\u63D0\u793A\u8BCD"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",disabled:!q.path,onClick:()=>void $r(Lv(q.path)),children:"\u6253\u5F00\u76EE\u5F55"}),(0,ee.jsx)("button",{type:"button",className:"im-btn-primary im-btn-xs",disabled:!Ce,title:Ce?"\u4F5C\u4E3A\u56FE\u7247\u8282\u70B9\u653E\u8FDB\u753B\u5E03":"\u8FD9\u6761\u53EA\u6709\u8DEF\u5F84\u3001\u6CA1\u6709\u8D44\u4EA7\u526F\u672C\uFF0C\u5BFC\u5165\u4F1A\u5931\u53BB\u5F15\u7528",onClick:()=>{fe&&t([fe])},children:"\u5BFC\u5165\u753B\u5E03"})]})]})]},`${q.time}-${q.output}-${re}`)})}),(0,ee.jsx)("div",{className:"im-history-pager",children:h?"\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u2026":u?(0,ee.jsxs)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:()=>void j(),children:["\u52A0\u8F7D\u66F4\u591A\uFF08\u5DF2\u663E\u793A ",o.length," / ",d,"\uFF09"]}):`\u5DF2\u663E\u793A\u5168\u90E8 ${d} \u6761\u8BB0\u5F55`})]}):m==="none"?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("div",{className:"im-history-empty",children:"\u8FD8\u6CA1\u6709\u751F\u6210\u5386\u53F2"}),(0,ee.jsxs)("p",{className:"im-history-note",children:["\u5386\u53F2\u8BFB\u7684\u662F Imagora \u7684\u8D26\u672C ",(0,ee.jsx)("code",{children:Q}),"\u3002 \u5728\u300C\u8BBE\u7F6E\u300D\u91CC\u586B\u4E0A\u672C\u673A Imagora \u76EE\u5F55\u5C31\u80FD\u8BFB\u5230\u5B83\u90A3\u4EFD\uFF1B \u63D2\u4EF6\u81EA\u5DF1\u51FA\u7684\u56FE\u8BB0\u5728\u8D44\u4EA7\u5E93\u91CC\uFF0C\u4E0D\u5199\u8FD9\u4E2A\u8D26\u672C\u3002"]})]}):(0,ee.jsx)("div",{className:"im-history-empty",children:"\u6CA1\u6709\u5339\u914D\u7684\u751F\u6210\u8BB0\u5F55"})]})]})}),R?(0,ee.jsx)(ei,{imageUrl:R.url,...R.path?{copyPath:R.path}:{},onClose:()=>A(null)}):null]})}var vt=require("react");var Ne=require("react/jsx-runtime");async function $v(e,t,n,o){let r=await new Promise((c,u)=>{let l=new Image;l.onload=()=>c(l),l.onerror=()=>u(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")),l.src=e}),i=Math.floor(o.width/t),a=Math.floor(o.height/n),s=[];for(let c=0;c<n;c+=1)for(let u=0;u<t;u+=1){let l=document.createElement("canvas");l.width=i,l.height=a;let d=l.getContext("2d");if(!d)throw new Error("\u753B\u5E03\u4E0D\u53EF\u7528");d.drawImage(r,u*i,c*a,i,a,0,0,i,a),s.push(l.toDataURL("image/png"))}return s}var Hv="52vh";function kp({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,vt.useState)(null),[i,a]=(0,vt.useState)(2),[s,c]=(0,vt.useState)(2),[u,l]=(0,vt.useState)(!1),[d,f]=(0,vt.useState)(null);(0,vt.useEffect)(()=>{let y=!0;return Jt(e).then(g=>{y&&r(g)}).catch(g=>{y&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(g)}`)}),()=>{y=!1}},[e]);let p=(0,vt.useMemo)(()=>o?{w:Math.floor(o.width/i),h:Math.floor(o.height/s)}:{w:0,h:0},[o,i,s]),b=async()=>{if(o){l(!0),f(null);try{let y=await $v(e,i,s,o);await n(y.map((g,v)=>({dataUrl:g,note:`\u5207\u5206 ${v+1}/${y.length}`})))}catch(y){f(`\u5207\u5206\u5931\u8D25\uFF1A${ue(y)}`)}finally{l(!1)}}},h=i*s;return(0,Ne.jsx)(Oe,{title:"\u5207\u5206\u56FE\u7247",subtitle:"\u6309\u884C \xD7 \u5217\u628A\u8FD9\u5F20\u56FE\u5207\u6210\u591A\u5F20\uFF0C\u6BCF\u5757\u5355\u72EC\u653E\u8FDB\u753B\u5E03\u3002",size:"lg",onClose:t,footer:(0,Ne.jsxs)(Ne.Fragment,{children:[(0,Ne.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ne.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||h<2,onClick:()=>void b(),children:u?"\u5904\u7406\u4E2D\u2026":`\u5207\u6210 ${h} \u5F20`})]}),children:(0,Ne.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,Ne.jsxs)("div",{style:{display:"flex",gap:14,flexWrap:"wrap",alignItems:"center"},children:[(0,Ne.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u5217",(0,Ne.jsx)("input",{type:"range",min:1,max:6,value:i,onChange:y=>a(Number(y.target.value)),className:"im-range"}),(0,Ne.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:i})]}),(0,Ne.jsxs)("label",{style:{display:"flex",gap:6,alignItems:"center",fontSize:12},children:["\u884C",(0,Ne.jsx)("input",{type:"range",min:1,max:6,value:s,onChange:y=>c(Number(y.target.value)),className:"im-range"}),(0,Ne.jsx)("b",{style:{minWidth:14,textAlign:"right"},children:s})]}),(0,Ne.jsxs)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:[h," \u5F20 \xB7 \u6BCF\u5F20 ",p.w," \xD7 ",p.h,o?` \xB7 \u539F\u56FE ${o.width} \xD7 ${o.height}`:""]})]}),(0,Ne.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,Ne.jsxs)("div",{style:{position:"relative",width:o&&o.height>0?`min(100%, calc(${Hv} * ${(o.width/o.height).toFixed(4)}))`:"100%",aspectRatio:o&&o.height>0?`${o.width} / ${o.height}`:"1 / 1",backgroundImage:`url(${e})`,backgroundSize:"100% 100%",borderRadius:6,overflow:"hidden"},children:[Array.from({length:i-1},(y,g)=>(0,Ne.jsx)("span",{style:{position:"absolute",left:`${(g+1)/i*100}%`,top:0,bottom:0,width:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`v${g}`)),Array.from({length:s-1},(y,g)=>(0,Ne.jsx)("span",{style:{position:"absolute",top:`${(g+1)/s*100}%`,left:0,right:0,height:2,background:"rgba(255,255,255,.9)",boxShadow:"0 0 6px rgba(0,0,0,.5)"}},`h${g}`))]})}),(0,Ne.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.6,color:"var(--im-ink-3)"},children:"\u5207\u51FA\u6765\u7684\u6BCF\u4E00\u5757\u90FD\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u56FE\u7247\u8282\u70B9\u653E\u5165\u753B\u5E03\u3002"}),d?(0,Ne.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var kt=require("react");var Ie=require("react/jsx-runtime"),Sp=[{value:"high",label:"\u9AD8\u8D28\u91CF"},{value:"bilinear",label:"\u5E73\u6ED1"},{value:"nearest",label:"\u4FDD\u50CF\u7D20"}],Mp=[1024,1536,2048,3072,4096];function Cp({src:e,onClose:t,onConfirm:n}){let[o,r]=(0,kt.useState)(null),[i,a]=(0,kt.useState)(2048),[s,c]=(0,kt.useState)("high"),[u,l]=(0,kt.useState)(!1),[d,f]=(0,kt.useState)(null);(0,kt.useEffect)(()=>{let g=!0;return Jt(e).then(v=>{if(!g)return;r(v);let m=Math.max(v.width,v.height),x=Mp.find(k=>k>m)??4096;a(x)}).catch(v=>{g&&f(`\u8BFB\u4E0D\u5230\u8FD9\u5F20\u56FE\uFF1A${ue(v)}`)}),()=>{g=!1}},[e]);let p=(0,kt.useMemo)(()=>o?ps(o.width,o.height,i):{width:0,height:0},[o,i]),b=o&&o.width>0?p.width/o.width:0,h=!!o&&p.width<o.width,y=async()=>{l(!0),f(null);try{let g=await lp(e,{targetLongEdge:i,algorithm:s});await n(g,`\u653E\u5927 ${p.width}\xD7${p.height} \xB7 ${Sp.find(v=>v.value===s)?.label}`)}catch(g){f(`\u653E\u5927\u5931\u8D25\uFF1A${ue(g)}`)}finally{l(!1)}};return(0,Ie.jsx)(Oe,{title:"\u653E\u5927\u56FE\u7247",subtitle:"\u6309\u957F\u8FB9\u76EE\u6807\u672C\u5730\u91CD\u91C7\u6837\u653E\u5927\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\u3002",size:"md",onClose:t,footer:(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,Ie.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:u||!o||p.width<8||p.height<8,onClick:()=>void y(),children:u?"\u5904\u7406\u4E2D\u2026":"\u653E\u5927\u5E76\u653E\u5165\u753B\u5E03"})]}),children:(0,Ie.jsxs)("div",{style:{display:"grid",gap:14},children:[(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u957F\u8FB9\u76EE\u6807"}),Mp.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g===i,className:`im-btn-sm ${g===i?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>a(g),children:g},g))]}),(0,Ie.jsxs)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[(0,Ie.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-3)"},children:"\u7B97\u6CD5"}),Sp.map(g=>(0,Ie.jsx)("button",{type:"button","aria-pressed":g.value===s,className:`im-btn-sm ${g.value===s?"im-btn-primary":"im-btn-ghost"}`,onClick:()=>c(g.value),children:g.label},g.value))]}),(0,Ie.jsx)("div",{style:{fontSize:12,lineHeight:1.8,color:"var(--im-ink-2)"},children:o?(0,Ie.jsxs)(Ie.Fragment,{children:["\u539F\u56FE ",o.width," \xD7 ",o.height," \u2192 ",(0,Ie.jsxs)("b",{style:{color:h?"var(--im-warn)":"var(--im-brand)"},children:[p.width," \xD7 ",p.height]}),b?` \xB7 ${b.toFixed(2)}\xD7`:"",h?" \xB7 \u76EE\u6807\u6BD4\u539F\u56FE\u5C0F\uFF0C\u7B49\u4E8E\u7F29\u5C0F":""]}):"\u8BFB\u53D6\u4E2D\u2026"}),(0,Ie.jsx)("p",{style:{margin:0,fontSize:11.5,lineHeight:1.7,color:"var(--im-ink-3)"},children:"\u653E\u5927\u662F\u672C\u5730\u91CD\u91C7\u6837\uFF0C\u4E0D\u8C03\u7528\u63A5\u53E3\u3001\u4E0D\u82B1\u94B1\uFF1B\u7EC6\u8282\u4E0D\u4F1A\u51ED\u7A7A\u957F\u51FA\u6765\uFF0C \u8981\u300C\u66F4\u6E05\u6670\u7684\u53E6\u4E00\u5F20\u300D\u5E94\u8BE5\u6539\u63D0\u793A\u8BCD\u91CD\u753B\u3002"}),d?(0,Ie.jsx)("p",{style:{margin:0,fontSize:12,color:"var(--im-danger)"},children:d}):null]})})}var xs=require("react/jsx-runtime");function Ep({guides:e}){return e.length?(0,xs.jsx)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5},"aria-hidden":!0,children:e.map(t=>(0,xs.jsx)("div",{"data-snap-axis":t.axis,style:t.axis==="x"?{position:"absolute",left:t.position,top:0,bottom:0,width:1,background:"var(--im-snap, #4c8dff)",opacity:.9}:{position:"absolute",top:t.position,left:0,right:0,height:1,background:"var(--im-snap, #4c8dff)",opacity:.9}},`${t.axis}-${t.position}-${t.targetId}`))}):null}var Qn=require("react");var be=require("react/jsx-runtime");function _p({sizes:e,onCancel:t,onConfirm:n}){let[o,r]=(0,Qn.useState)(""),i=(0,Qn.useRef)(null),a=(0,Qn.useMemo)(()=>zd(o),[o]),s=o.trim().length>0,c=a.cards,u=a.issues??[];return(0,be.jsx)(Oe,{title:"\u7C98\u8D34\u5BFC\u5165\u63D0\u793A\u8BCD\u5361\u7247",subtitle:"\u7C98\u8D34\u6A21\u578B\u56DE\u590D\u3002\u6BCF\u5F20\u5361\u7247\u7531\u6807\u9898\u3001\u6587\u672C\u56F4\u680F\u4E0E\u9996\u884C\u6BD4\u4F8B\u7EC4\u6210\u3002",size:"lg",onClose:t,initialFocusRef:i,footer:(0,be.jsxs)(be.Fragment,{children:[(0,be.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",onClick:t,children:"\u53D6\u6D88"}),(0,be.jsxs)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!c.length||u.length>0,onClick:()=>n(c),children:["\u786E\u8BA4\u5EFA\u5361\uFF08",c.length,"\uFF09"]})]}),children:(0,be.jsxs)("div",{style:{display:"grid",gap:10},children:[(0,be.jsx)("textarea",{ref:i,value:o,onChange:l=>r(l.target.value),rows:10,spellCheck:!1,"aria-label":"\u5F85\u5BFC\u5165\u7684\u63D0\u793A\u8BCD\u6587\u672C",className:"im-field nodrag nowheel",style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12},placeholder:"=== \u79CB\u65E5\u901A\u52E4\u5305 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== \u51AC\u65E5\u56F4\u5DFE ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```"}),(0,be.jsx)("div",{className:"im-import-preview",role:"status","aria-live":"polite",children:s?(0,be.jsxs)(be.Fragment,{children:[(0,be.jsxs)("div",{className:"im-import-summary",children:[(0,be.jsxs)("span",{children:["\u8BC6\u522B ",c.length," \u5F20\u5361\u7247"]}),u.length?(0,be.jsxs)("span",{className:"im-import-summary-error",children:["\u53D1\u73B0 ",u.length," \u4E2A\u95EE\u9898"]}):null]}),c.map((l,d)=>{let f=qa(l.ratio??"1:1",e);return(0,be.jsxs)("article",{className:"im-import-card",children:[(0,be.jsxs)("div",{className:"im-import-card-meta",children:[(0,be.jsx)("strong",{children:l.title||`\u7B2C ${d+1} \u5F20`}),(0,be.jsx)("span",{children:l.ratio?l.ratio:"\u9ED8\u8BA4\u6BD4\u4F8B"}),(0,be.jsx)("span",{children:f.value}),f.fallback?(0,be.jsx)("span",{className:"im-import-card-fallback",children:"\u5C3A\u5BF8\u56DE\u9000"}):null]}),(0,be.jsx)("p",{className:"im-import-card-text",title:l.prompt||"",children:l.prompt||"\uFF08\u63D0\u793A\u8BCD\u4E3A\u7A7A\uFF09"})]},`${d}-${l.title??""}`)}),u.map((l,d)=>(0,be.jsx)("div",{className:"im-import-issue",children:l.message},`issue-${d}`))]}):(0,be.jsx)("div",{className:"im-import-summary",children:"\u7C98\u8D34\u5185\u5BB9\u540E\u5C06\u5728\u8FD9\u91CC\u5B9E\u65F6\u9884\u89C8"})}),(0,be.jsxs)("p",{className:"im-field-hint",children:["\u4E00\u5F20\u5361\u4E00\u5757\uFF1A\u6807\u9898\u884C ",(0,be.jsx)("code",{children:"=== \u540D\u5B57 ==="}),"\uFF0C\u56F4\u680F\u91CC\u7B2C\u4E00\u884C\u5199 ",(0,be.jsx)("code",{children:"ratio: 3:2"}),"\uFF0C\u7A7A\u884C\u4E4B\u540E\u662F\u63D0\u793A\u8BCD\u6B63\u6587\u3002 \u5C3A\u5BF8\u8868\u6765\u81EA\u5F53\u524D\u914D\u7F6E\uFF08",e.length," \u6863\uFF09\uFF1B\u89E3\u6790\u4E0D\u51FA\u6BD4\u4F8B\u65F6\u7528\u7B2C\u4E00\u6863\u3002"]})]})})}var tn=require("react");var ws=require("react");var St=require("react/jsx-runtime");function Ip({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,ws.useState)(null),[i,a]=(0,ws.useState)(!1),s=Number(e?.budget??0),c=async u=>{a(!0);try{let l=await Md(u);t(l),r(null),n(u>0?`\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650\u5DF2\u8BBE\u4E3A \xA5${u.toFixed(2)}`:"\u5DF2\u53D6\u6D88\u9884\u7B97\u4E0A\u9650")}catch(l){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ue(l)}`)}finally{a(!1)}};return(0,St.jsx)("div",{className:"im-fieldset",children:(0,St.jsxs)("div",{children:[(0,St.jsx)("label",{className:"im-label",htmlFor:"imagora-budget",children:"\u672C\u753B\u5E03\u9884\u7B97\u4E0A\u9650"}),(0,St.jsx)("input",{id:"imagora-budget",className:"im-field",inputMode:"decimal",value:o??(s?String(s):""),placeholder:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650",disabled:i,onChange:u=>r(u.target.value)}),(0,St.jsx)("p",{className:"im-field-hint",children:s?`\u5F53\u524D\u4E0A\u9650 \xA5${s.toFixed(2)}\uFF1B\u672C\u753B\u5E03\u82B1\u5230\u4E0A\u9650\u5C31\u62D2\u7EDD\u65B0\u4EFB\u52A1\uFF08\u786C\u62E6\uFF0C\u4E0D\u7ECF\u786E\u8BA4\uFF09`:"\u7559\u7A7A = \u4E0D\u8BBE\u4E0A\u9650\u3002\u8FD9\u4E2A\u4E0A\u9650\u7BA1\u7684\u662F\u8FD9\u4E2A\u753B\u5E03\u7D2F\u8BA1\u82B1\u4E86\u591A\u5C11\uFF1B\u8981\u7BA1\u300C\u4ECA\u5929 / \u5355\u6B21\u82B1\u591A\u5C11\u300D\uFF0C\u53BB\u751F\u6210\u5386\u53F2\u7684\u6210\u672C\u6761\u8BBE\u3002"}),(0,St.jsxs)("div",{className:"im-field-actions",children:[(0,St.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:i||!o?.trim(),onClick:()=>void c(Math.max(0,Number(o)||0)),children:"\u4FDD\u5B58\u4E0A\u9650"}),(0,St.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:i||!s,onClick:()=>void c(0),children:"\u53D6\u6D88\u4E0A\u9650"})]})]})})}var oi=require("react");var Te=require("react/jsx-runtime");function Pp({config:e,onSaved:t,onFlash:n}){let[o,r]=(0,oi.useState)(""),[i,a]=(0,oi.useState)(""),[s,c]=(0,oi.useState)(!1),u=e?.imagoraRoot??"",l=e?.outputDirOverride??"",d=e?.defaultOutputDir??"",f=async b=>{c(!0);try{let h=await Nd({title:b==="root"?"\u9009\u62E9 Imagora \u76EE\u5F55\uFF08\u542B config.json\uFF09":"\u9009\u62E9\u56FE\u7247\u8F93\u51FA\u76EE\u5F55",startAt:b==="root"?u:d});if(!h.ok){if(h.reason==="cancelled")return;n(h.reason==="unsupported"?"\u8FD9\u53F0\u673A\u5668\u4E0D\u652F\u6301\u5F39\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF0C\u76F4\u63A5\u586B\u8DEF\u5F84":`\u6CA1\u5F39\u51FA\u76EE\u5F55\u5BF9\u8BDD\u6846\uFF1A${h.reason||"\u672A\u77E5\u539F\u56E0"}`);return}let y=b==="root"?await Va(h.path||""):await Fa(h.path||"");t(y),b==="root"?r(""):a(""),n(b==="root"?"\u5DF2\u6307\u5411\u8BE5 Imagora \u76EE\u5F55":"\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84\u5DF2\u66F4\u65B0")}catch(h){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ue(h)}`)}finally{c(!1)}},p=async(b,h)=>{c(!0);try{let y=b==="root"?await Va(h):await Fa(h);t(y),b==="root"?r(""):a(""),n(h?"\u5DF2\u4FDD\u5B58":"\u5DF2\u6E05\u7A7A\uFF0C\u56DE\u5230\u9ED8\u8BA4")}catch(y){n(`\u8BBE\u7F6E\u5931\u8D25\uFF1A${ue(y)}`)}finally{c(!1)}};return(0,Te.jsxs)("div",{className:"im-fieldset",children:[(0,Te.jsxs)("div",{children:[(0,Te.jsx)("label",{className:"im-label",htmlFor:"imagora-root",children:"Imagora \u76EE\u5F55"}),(0,Te.jsx)("input",{id:"imagora-root",className:"im-field",value:o===""?u:o,placeholder:"\u4F8B\u5982 D:\\imagora\uFF08\u542B config.json \u4E0E .env\uFF09",disabled:s,onChange:b=>r(b.target.value)}),(0,Te.jsx)("p",{className:"im-field-hint",children:"\u6307\u5411\u672C\u673A Imagora \u76EE\u5F55\u540E\uFF0C\u63A5\u53E3\u5730\u5740\u3001\u5BC6\u94A5\u3001\u5DE5\u4F5C\u6D41\u3001\u751F\u6210\u5386\u53F2\u90FD\u76F4\u63A5\u7528\u90A3\u4E00\u4EFD\uFF0C\u4E0D\u590D\u5236\u3002 \u7559\u7A7A\u5219\u53EA\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u6570\u636E\u76EE\u5F55\u3002"}),(0,Te.jsxs)("div",{className:"im-field-actions",children:[(0,Te.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("root"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Te.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!o.trim()||o.trim()===u,onClick:()=>void p("root",o.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Te.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!u,onClick:()=>void p("root",""),children:"\u4E0D\u5171\u4EAB"})]})]}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("label",{className:"im-label",htmlFor:"imagora-output-override",children:"\u56FE\u7247\u8F93\u51FA\u76EE\u5F55"}),(0,Te.jsx)("input",{id:"imagora-output-override",className:"im-field",value:i===""?l:i,placeholder:"\u7559\u7A7A = \u8DDF\u968F\u4E0A\u9762\u7684 Imagora \u76EE\u5F55\uFF08<\u8BE5\u76EE\u5F55>/output\uFF09",disabled:s,onChange:b=>a(b.target.value)}),(0,Te.jsxs)("p",{className:"im-field-hint",children:["\u5F53\u524D\u751F\u6548\uFF1A",d||"\uFF08\u672A\u786E\u5B9A\uFF09",l?"":"\uFF08\u6765\u81EA\u4E0A\u9762\u90A3\u4E2A Imagora \u76EE\u5F55\uFF09"]}),(0,Te.jsxs)("div",{className:"im-field-actions",children:[(0,Te.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:s,onClick:()=>void f("output"),children:"\u9009\u62E9\u76EE\u5F55\u2026"}),(0,Te.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!i.trim()||i.trim()===l,onClick:()=>void p("output",i.trim()),children:"\u4FDD\u5B58\u624B\u586B\u8DEF\u5F84"}),(0,Te.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s,onClick:()=>void $r(d),children:"\u6253\u5F00\u76EE\u5F55"}),(0,Te.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:s||!l,onClick:()=>void p("output",""),children:"\u8DDF\u968F Imagora \u76EE\u5F55"})]})]})]})}var ae=require("react/jsx-runtime");function _o({label:e,value:t,mono:n}){return(0,ae.jsxs)("div",{className:"im-spec-row",children:[(0,ae.jsx)("span",{className:"im-spec-key",children:e}),(0,ae.jsx)("span",{className:`im-spec-val${n?" im-spec-mono":""}`,title:t,children:t})]})}function zp({config:e,onClose:t,onSaved:n,onFlash:o}){let r=e?.provider,i=e?.source==="plugin",[a,s]=(0,tn.useState)(r?.baseUrl??""),[c,u]=(0,tn.useState)(r?.model??e?.model??""),[l,d]=(0,tn.useState)(""),[f,p]=(0,tn.useState)(null),[b,h]=(0,tn.useState)(!1),[y,g]=(0,tn.useState)(null),[v,m]=(0,tn.useState)([]),x=e?.profiles??[],k=i?"plugin":e?.profile??"",M=[{value:"plugin",label:"\u63D2\u4EF6\u5185\u914D\u7F6E"},...x.map(w=>({value:w.name,label:w.label||w.name}))],S=(e?.models??[]).map(w=>({value:w.id,label:w.label||w.id})),C=f??k,I=i&&C!=="plugin",L=async()=>{h(!0);try{let w=null;!I&&!i&&C&&C!==e?.profile&&(w=await Lr(C));let _=a.trim()!==(r?.baseUrl??"")||c.trim()!==(r?.model??"")||l.trim();_&&(w=await Xa({baseUrl:a.trim(),model:c.trim(),apiKey:l.trim()})),w&&n(w),d(""),p(null),o(_?"\u5DF2\u4FDD\u5B58\uFF0C\u7ACB\u5373\u751F\u6548":"\u5DF2\u4FDD\u5B58\u8BBE\u7F6E"),t()}catch(w){o(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ue(w)}`)}finally{h(!1)}},R=async()=>{h(!0);try{let w=await Xa({reset:!0});n(w),p(null),o("\u5DF2\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\uFF0C\u56DE\u5230\u672C\u673A Imagora \u7684\u914D\u7F6E"),t()}catch(w){o(`\u64CD\u4F5C\u5931\u8D25\uFF1A${ue(w)}`)}finally{h(!1)}},A=async()=>{h(!0),g(null);try{let w=await Cd({baseUrl:a.trim(),apiKey:l.trim()});m(w.models??[]),g(w.models?.length?`\u8FDE\u901A\uFF0C\u8BFB\u5230 ${w.models.length} \u4E2A\u6A21\u578B`:"\u8FDE\u901A\uFF0C\u4F46\u8FD9\u4E2A\u5730\u5740\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF08\u53EF\u624B\u586B\uFF09")}catch(w){m([]),g(`\u8FDE\u4E0D\u901A\uFF1A${ue(w)}`)}finally{h(!1)}},P=!b&&(a.trim().length>0||!i&&C!==k);return(0,ae.jsx)(Oe,{title:"\u753B\u5E03\u8BBE\u7F6E",subtitle:"\u9009\u4E00\u5957\u6765\u6E90\u4E0E\u6A21\u578B\u3002\u63A5\u53E3\u5730\u5740\u4E0E\u5BC6\u94A5\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u4E0A\u5C4F\u3001\u4E5F\u4E0D\u8FDB\u65E5\u5FD7\u3002",size:"lg",onClose:t,footer:(0,ae.jsxs)(ae.Fragment,{children:[i?(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:b,onClick:()=>void R(),children:"\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E"}):null,(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:b,onClick:t,children:"\u53D6\u6D88"}),(0,ae.jsx)("button",{type:"button",className:"im-btn-primary im-btn-sm",disabled:!P,onClick:()=>void L(),children:"\u4FDD\u5B58"})]}),children:(0,ae.jsxs)("div",{style:{display:"grid",gap:16},children:[(0,ae.jsxs)("div",{children:[(0,ae.jsx)("label",{className:"im-label",htmlFor:"imagora-profile",children:"\u914D\u7F6E\u6765\u6E90"}),(0,ae.jsx)(ft,{id:"imagora-profile",className:"is-block",options:M,value:C,searchable:"auto",onChange:w=>p(w),title:"\u6362\u6765\u6E90 = \u6362\u63A5\u53E3\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"}),(0,ae.jsx)("p",{className:"im-field-hint",children:C==="plugin"?"\u7528\u63D2\u4EF6\u81EA\u5DF1\u7684\u63A5\u53E3\u4E0E\u5BC6\u94A5\uFF0C\u4E0D\u4F9D\u8D56\u672C\u673A Imagora\u3002\u586B\u597D\u4E0B\u9762\u4E24\u9879\u5373\u53EF\u3002":(x.find(w=>w.name===C)?.label??"")||"\u6362\u6765\u6E90 = \u6362\u5730\u5740\u3001\u6A21\u578B\u4E0E\u5C3A\u5BF8\u4EF7\u76EE\u8868"})]}),(0,ae.jsxs)("div",{children:[(0,ae.jsx)("label",{className:"im-label",htmlFor:"imagora-model-select",children:"\u9ED8\u8BA4\u6A21\u578B"}),(0,ae.jsx)(ft,{id:"imagora-model-select",className:"is-block",options:S,value:c,searchable:!0,allowCustom:!0,emptyLabel:"\u8FD9\u4E2A\u6765\u6E90\u6CA1\u62A5\u6A21\u578B\u6E05\u5355\uFF0C\u76F4\u63A5\u6253\u5B57\u586B\u6A21\u578B id",onChange:w=>u(w),onCreateCustom:w=>u(w),title:"\u4E0A\u6E38\u8981\u6C42\u7684\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-2.5-flare \u6216 doubao-seedream-5-0-pro-260628"}),(0,ae.jsx)("p",{className:"im-field-hint",children:(e?.models??[]).find(w=>w.id===c)?.note||"\u8BE5\u6765\u6E90\u4E0B\u7684\u53EF\u9009\u6A21\u578B"})]}),(0,ae.jsxs)("div",{className:"im-section",children:[(0,ae.jsx)("span",{className:"im-section-label",children:"\u63D2\u4EF6\u5185\u63A5\u53E3"}),(0,ae.jsxs)("div",{style:{display:"grid",gap:12},children:[(0,ae.jsxs)("div",{children:[(0,ae.jsx)("label",{className:"im-label",htmlFor:"imagora-provider-base-url",children:"\u63A5\u53E3\u5730\u5740"}),(0,ae.jsx)("input",{id:"imagora-provider-base-url",className:"im-field",value:a,placeholder:"https://api.example.com/v1",disabled:b,onChange:w=>s(w.target.value)}),(0,ae.jsx)("p",{className:"im-field-hint",children:"OpenAI \u517C\u5BB9\u7684\u56FE\u7247\u63A5\u53E3\u6839\u5730\u5740\uFF0C\u901A\u5E38\u4EE5 /v1 \u7ED3\u5C3E\u3002\u586B\u4E86\u5B83\u5C31\u4F18\u5148\u4E8E\u4E0A\u9762\u7684 Imagora \u6765\u6E90\u3002"})]}),(0,ae.jsxs)("div",{children:[(0,ae.jsxs)("label",{className:"im-label",htmlFor:"imagora-provider-api-key",children:["API Key",(0,ae.jsx)("span",{className:`im-field-state is-${r?.apiKeyConfigured?"ok":"warn"}`,children:r?.apiKeyConfigured?"\u5DF2\u914D\u7F6E\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u4E0D\u53D8\uFF09":"\u672A\u914D\u7F6E"})]}),(0,ae.jsx)("input",{id:"imagora-provider-api-key",className:"im-field",type:"password",value:l,autoComplete:"off",placeholder:r?.apiKeyConfigured?"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539":"\u7C98\u8D34 API Key",disabled:b,onChange:w=>d(w.target.value)}),(0,ae.jsx)("p",{className:"im-field-hint",children:"\u53EA\u5B58\u5728\u672C\u673A settings.json\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u8FDB\u65E5\u5FD7\u3002"})]}),(0,ae.jsxs)("div",{children:[(0,ae.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,ae.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-sm",disabled:b,onClick:()=>void A(),children:"\u6D4B\u8BD5\u8FDE\u901A"}),y?(0,ae.jsx)("span",{style:{fontSize:12,color:"var(--im-ink-2)"},children:y}):null]}),v.length?(0,ae.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8},children:[v.slice(0,24).map(w=>(0,ae.jsx)("button",{type:"button",className:`im-chip im-chip--action${w===c?" is-brand":""}`,onClick:()=>u(w),children:w},w)),v.length>24?(0,ae.jsxs)("span",{className:"im-muted",children:["\u2026\u8FD8\u6709 ",v.length-24," \u4E2A"]}):null]}):null]})]})]}),(0,ae.jsxs)("div",{className:"im-section",children:[(0,ae.jsx)("span",{className:"im-section-label",children:"\u751F\u6548\u4E2D"}),(0,ae.jsxs)("div",{className:"im-spec-list is-roomy",children:[(0,ae.jsx)(_o,{label:"\u6765\u6E90",value:e?.profileLabel||(i?"\u63D2\u4EF6\u5185\u914D\u7F6E":"\u2014")}),(0,ae.jsx)(_o,{label:"\u6A21\u578B",value:e?.modelLabel||e?.model||"\u2014"}),(0,ae.jsx)(_o,{label:"API Key",value:r?.apiKeyConfigured?"\u25CF \u5DF2\u8BBE\u7F6E":"\u25CB \u672A\u914D\u7F6E"}),r?.baseUrl?(0,ae.jsx)(_o,{label:"\u63A5\u53E3\u5730\u5740",value:r.baseUrl,mono:!0}):null,e?.imagoraRoot?(0,ae.jsx)(_o,{label:"Imagora \u76EE\u5F55",value:e.imagoraRoot,mono:!0}):null]}),(0,ae.jsx)("p",{className:"im-pending-line",style:{marginTop:8},children:"\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\uFF08host \u6BCF\u6B21\u8BF7\u6C42\u90FD\u91CD\u8BFB\u914D\u7F6E\uFF0C\u4E0D\u50CF\u539F\u7248\u8981\u91CD\u542F\u5DE5\u4F5C\u53F0\uFF09\u3002"}),I?(0,ae.jsxs)("p",{className:"im-pending-line",style:{marginTop:6},children:[(0,ae.jsx)("span",{className:"im-chip is-brand",children:"\u88AB\u538B\u4F4F"}),"\u5F53\u524D\u751F\u6548\u7684\u662F\u63D2\u4EF6\u5185\u63A5\u53E3\uFF1B\u8981\u8BA9\u300C",x.find(w=>w.name===C)?.label??C,"\u300D\u751F\u6548\uFF0C\u5148\u6E05\u7A7A\u63D2\u4EF6\u5185\u914D\u7F6E\u3002"]}):null]}),(0,ae.jsx)(Pp,{config:e,onSaved:n,onFlash:o}),(0,ae.jsx)(Ip,{config:e,onSaved:n,onFlash:o})]})})}var Jn=require("react");function Rp({nodesRef:e,setNodes:t,createPosition:n,log:o,flash:r,setPreview:i,record:a}){let s=(0,Jn.useCallback)(async(f,p)=>{let b=f.filter(rd);if(!b.length){r("\u53EA\u8BA4\u56FE\u7247\u6587\u4EF6");return}a?.();for(let[h,y]of b.entries())try{o(`\u4E0A\u4F20 ${y.name||"\u526A\u8D34\u677F\u56FE\u7247"} \u2026`);let g=await Ar(y,y.name||`pasted-${Date.now()}.png`),v=kn({...g,relPath:g.name,createdAt:g.createdAt??new Date().toISOString()},{x:p.x+h*172,y:p.y});t(m=>[...m,v]),o(`\u5DF2\u6DFB\u52A0 ${g.name}`)}catch(g){o(`\u4E0A\u4F20\u5931\u8D25\uFF1A${ue(g)}`)}},[t,o,r,a]),c=(0,Jn.useCallback)((f,p,b)=>{let h=p?b(p):n();s(f,h)},[s,n]),u=(0,Jn.useCallback)(f=>{let p=document.createElement("input");p.type="file",p.accept="image/*",p.onchange=async()=>{let b=p.files?.[0];if(b)try{let h=await Ar(b,b.name);t(y=>y.map(g=>g.id===f&&g.type==="image"?{...g,data:{...g.data,registryId:h.id,name:h.name,url:h.url,size:h.size,ext:h.ext,absPath:h.absPath,missing:!1}}:g)),o(`\u5DF2\u66FF\u6362\u4E3A ${h.name}`)}catch(h){o(`\u66FF\u6362\u5931\u8D25\uFF1A${ue(h)}`)}},p.click()},[t,o]),l=(0,Jn.useCallback)(f=>{let p=e.current.find(b=>b.id===f);!p||p.type!=="image"||!p.data.url||i({url:p.data.url,name:p.data.name,path:p.data.absPath})},[e,i]),d=(0,Jn.useCallback)(async(f,p,b)=>{let h=await fetch(f).then(x=>x.blob()),y=p.endsWith(".png")?p:`${p}.png`,g=await Ar(h,y),v=b??n(),m=kn({...g,relPath:g.name,createdAt:g.createdAt??new Date().toISOString()},v);return t(x=>[...x,m]),o(`\u5DF2\u6DFB\u52A0 ${g.name}`),g},[t,o,n]);return{addImages:s,dropFiles:c,replaceImage:u,openPreview:l,addDataUrl:d}}function Dp(e){return t=>{let n=String(t.source??""),o=String(t.target??"");!n||!o||e(r=>{let i=`${n}->${o}`;return r.some(a=>a.id===i)?r:[...r,{id:i,source:n,target:o,animated:!0}]})}}var Mt=require("react");function Tp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,log:r,flash:i,taskIdsRef:a,timersRef:s}){let c=(0,Mt.useCallback)(async h=>{try{return await Ha(h)}catch(y){let g=y.body?.overBudget;if(!g)throw y;let v=g.reason||ue(y);if(!window.confirm(`${v}

\u4ECD\u7136\u8981\u63D0\u4EA4\u8FD9\u4E00\u6B21\u5417\uFF1F`))throw new Error(`\u5DF2\u6309\u9884\u7B97\u53D6\u6D88\uFF1A${v}`);return r(`\u8D85\u9884\u7B97\u5DF2\u786E\u8BA4\uFF0C\u7EE7\u7EED\u63D0\u4EA4\uFF1A${v}`),await Ha({...h,allowOverBudget:!0})}},[r]),u=(0,Mt.useCallback)((h,y)=>{let v=(Array.isArray(y.results)?y.results:[]).filter(S=>S.status==="ok"&&S.assetId&&S.url),m=e.current.find(S=>S.id===h&&S.type==="prompt"),x=[];if(m&&m.type==="prompt"){let S=Be(m).height;v.forEach((C,I)=>{x.push(kn({id:String(C.assetId),relPath:C.name??"result.png",name:C.name??"result.png",url:String(C.url),size:C.bytes??0,ext:String(C.ext??"png"),absPath:C.absPath??"",createdAt:new Date().toISOString()},{x:m.position.x+I*172,y:m.position.y+S+56}))})}n(S=>{let C=new Set(S.map(R=>R.id)),I=x.filter(R=>!C.has(R.id)),L=I.length?[...S,...I]:S;return it(L,h,{status:y.status==="done"?"done":y.status==="cancelled"?"idle":"failed",resultCount:v.length,message:y.error??void 0,startedAtMs:void 0,cancelRequested:!1,taskId:void 0})}),x.length&&o(S=>{let C=x.map(I=>({id:`${h}->${I.id}`,source:h,target:I.id,animated:!0})).filter(I=>!S.some(L=>L.id===I.id));return C.length?[...S,...C]:S}),a.current.delete(h);let k=s.current.get(h);k&&window.clearTimeout(k),s.current.delete(h);let M=y.totalCost??0;M>0&&n(S=>{let C=S.find(L=>L.id===h),I=Number(C?.data?.cost??0);return it(S,h,{cost:I+M})}),r(y.status==="done"?`\u5B8C\u6210 \xB7 ${v.length} \u5F20${M?` \xB7 ${M.toFixed(2)} \u5143`:""}`:`${y.status==="cancelled"?"\u5DF2\u53D6\u6D88":"\u5931\u8D25"} \xB7 ${y.error??"\u89C1\u65E5\u5FD7"}`)},[e,n,o,r,a,s]),l=(0,Mt.useCallback)((h,y)=>{let g=async()=>{try{let v=await yd(y);if(v.status==="queued")n(m=>it(m,h,{status:"queued"}));else if(v.status==="running")n(m=>it(m,h,{status:"running",startedAtMs:v.startedAt??Date.now(),cancelRequested:v.cancelRequested}));else{u(h,v);return}}catch(v){if(v.status===404){let m=s.current.get(h);m!==void 0&&window.clearTimeout(m),s.current.delete(h),n(x=>it(x,h,{status:"failed",message:"\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF08\u5BBF\u4E3B\u91CD\u542F\u6216\u4EFB\u52A1\u8FC7\u671F\uFF09\uFF0C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF",startedAtMs:void 0,cancelRequested:!1})),r("\u4EFB\u52A1\u5DF2\u4E22\u5931\uFF1A\u505C\u6B62\u8F6E\u8BE2");return}r(`\u8F6E\u8BE2\u5931\u8D25\uFF1A${ue(v)}`)}s.current.set(h,window.setTimeout(g,1200))};g()},[u,r,n,s]),d=(0,Mt.useCallback)(async h=>{let y=e.current.find(v=>v.id===h);if(!y||y.type!=="prompt")return;if(!(y.data.prompt??"").trim()){i("\u63D0\u793A\u8BCD\u662F\u7A7A\u7684");return}let g=fd(e.current,t.current,h,y.data.prompt);if(g.mode==="invalid"){let v=g.unknown.map(m=>`@${m}`).join("\u3001");n(m=>it(m,h,{status:"failed",message:`\u63D0\u793A\u8BCD\u91CC\u5F15\u7528\u4E86\u753B\u5E03\u4E0A\u6CA1\u6709\u7684\u56FE\uFF1A${v}`}));return}try{let v=await c({prompt:y.data.prompt,size:y.data.size,quality:y.data.quality,refIds:g.images.map(m=>m.type==="image"?m.data.registryId:"").filter(Boolean),outputDir:y.data.outputDir,spent:e.current.reduce((m,x)=>m+Number(x.data?.cost??0),0),mask:g.images.map(m=>m.type==="image"?m.data.maskDataUrl:"").find(Boolean)||""});a.current.set(h,v.taskId),n(m=>it(m,h,{status:"queued",taskId:v.taskId,startedAtMs:Date.now(),message:void 0,resultCount:void 0,cancelRequested:!1})),r(`\u63D0\u4EA4 \xB7 \u53C2\u8003\u56FE ${g.images.length} \u5F20 \xB7 ${y.data.size}`),l(h,v.taskId)}catch(v){let m=ue(v);n(x=>it(x,h,{status:"failed",message:m})),r(`\u63D0\u4EA4\u5931\u8D25\uFF1A${m}`)}},[e,t,n,i,r,l,a]),f=(0,Mt.useCallback)(async h=>{let y=a.current.get(h);if(n(g=>it(g,h,{cancelRequested:!0})),!!y)try{await xd(y)}catch(g){r(`\u53D6\u6D88\u5931\u8D25\uFF1A${ue(g)}`)}},[n,r,a]),p=(0,Mt.useCallback)(h=>{for(let y of h)d(y)},[d]),b=(0,Mt.useCallback)(h=>{for(let{nodeId:y,taskId:g}of ld(h))a.current.set(y,g),l(y,g)},[a,l]);return(0,Mt.useEffect)(()=>{let h=s.current;return()=>{for(let y of h.values())window.clearTimeout(y);h.clear()}},[s]),{runPrompt:d,cancelPrompt:f,runMany:p,resumeTasks:b}}var at=require("react");function Ap(e){let[t,n]=(0,at.useState)(null),[o,r]=(0,at.useState)([]),i=(0,at.useRef)(null),a=(0,at.useCallback)(l=>{let d={...l,profiles:Array.isArray(l?.profiles)?l.profiles:[],models:Array.isArray(l?.models)?l.models:[],sizes:Array.isArray(l?.sizes)?l.sizes:[],qualities:Array.isArray(l?.qualities)?l.qualities:[],issues:Array.isArray(l?.issues)?l.issues:[]};n(d),i.current=d,r(d.issues)},[]),s=(0,at.useCallback)(async()=>{try{a(await gd())}catch(l){r([ue(l)])}},[a]);(0,at.useEffect)(()=>{s()},[s]);let c=(0,at.useCallback)(async l=>{try{let d=await Lr(l);a(d),e(`\u5DF2\u5207\u5230 ${d.profileLabel||d.profile}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ue(d)}`)}},[a,e]),u=(0,at.useCallback)(async l=>{try{let d=await Sd(l);a(d),e(`\u5DF2\u5207\u6362\u5230 ${d.modelLabel}`)}catch(d){e(`\u5207\u6362\u5931\u8D25\uFF1A${ue(d)}`)}},[a,e]);return{config:t,configIssues:o,configRef:i,switchProfile:c,switchModel:u,replaceConfig:a}}var Cn=require("react");function Io(e){return{nodes:[...e.nodes],edges:[...e.edges]}}function Op(e=50){let t=Math.max(1,Math.floor(e)),n=[],o=[];return{record(r,i){n.push(Io(r)),n.length>t&&n.splice(0,n.length-t),i?.preserveRedo!==!0&&(o.length=0)},undo(r){let i=n.pop();return i?(o.unshift(Io(r)),Io(i)):null},restore(r){let i=o.shift();return i?(n.push(Io(r)),Io(i)):null},canUndo:()=>n.length>0,canRestore:()=>o.length>0,clear(){n.length=0,o.length=0}}}function Lp({nodesRef:e,edgesRef:t,setNodes:n,setEdges:o,flash:r}){let i=(0,Cn.useRef)(Op(50)),a=(0,Cn.useCallback)(f=>{i.current.record({nodes:e.current,edges:t.current},f)},[e,t]),s=(0,Cn.useCallback)(()=>{let f=i.current.undo({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),c=(0,Cn.useCallback)(()=>{let f=i.current.restore({nodes:e.current,edges:t.current});if(!f){r("\u6CA1\u6709\u53EF\u6062\u590D\u7684\u64CD\u4F5C");return}n(f.nodes),o(f.edges)},[e,t,n,o,r]),u=(0,Cn.useCallback)(()=>i.current.clear(),[]),l=i.current.canUndo(),d=i.current.canRestore();return{record:a,undo:s,restore:c,clear:u,canUndo:l,canRestore:d}}var $p=require("react");function Bv(e){return e instanceof HTMLElement?e.closest("input, textarea, select, [contenteditable]")!==null:!1}function Hp(e){let{nodesRef:t,selectedIds:n,selectedEdgeId:o,onDeleteNodes:r,onDeleteEdge:i,onUndo:a,onRestore:s,onSave:c,onClosePreview:u,hasPreview:l}=e;(0,$p.useEffect)(()=>{let d=f=>{if(f.key==="Escape"&&l){u();return}if(Bv(f.target))return;let p=f.ctrlKey||f.metaKey,b=f.key.toLowerCase();if(p&&b==="a"){if(f.preventDefault(),!t.current.length)return;e.setNodes(y=>y.some(g=>!g.selected)?y.map(g=>({...g,selected:!0})):y);return}if(p&&b==="z"){f.preventDefault(),f.shiftKey?s():a();return}if(p&&b==="y"){f.preventDefault(),s();return}if(p&&b==="s"){f.preventDefault(),c();return}if(f.key==="Delete"&&n.length){f.preventDefault(),r(n);return}(f.key==="Delete"||f.key==="Backspace")&&o&&(f.preventDefault(),i(o))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[t,n,o,r,i,a,s,c,u,l,e])}var Nt=require("react");var Wv=2500;function Bp({nodes:e,edges:t,nodesRef:n,edgesRef:o,setNodes:r,setEdges:i,instanceRef:a,log:s,flash:c,closeDialog:u,defaultsRef:l,crashedRef:d,onRestored:f}){let p=(0,Nt.useRef)(null),b=(0,Nt.useRef)(()=>{});b.current=()=>{p.current&&(window.clearTimeout(p.current),p.current=null),!d.current&&n.current.length&&Wa(n.current,o.current).catch(()=>{})},(0,Nt.useEffect)(()=>{e.length&&(p.current&&window.clearTimeout(p.current),p.current=window.setTimeout(()=>{p.current=null,!d.current&&Wa(n.current,o.current).catch(()=>{})},Wv))},[e,t,n,o,d]),(0,Nt.useEffect)(()=>{let g=()=>{document.visibilityState==="hidden"&&b.current()},v=()=>b.current();return document.addEventListener("visibilitychange",g),window.addEventListener("pagehide",v),()=>{document.removeEventListener("visibilitychange",g),window.removeEventListener("pagehide",v),b.current()}},[]),(0,Nt.useEffect)(()=>{let g=!1;return(async()=>{let m=n.current;try{let x=await kd();if(g)return;if(!x.empty&&x.nodes?.length&&!n.current.length){let k=Oa(x.nodes,x.edges??[],[],l.current);r(k.nodes),i(k.edges),m=k.nodes,s(`\u5DF2\u6062\u590D\u4E0A\u6B21\u7684\u753B\u5E03\uFF08${x.name??"\u81EA\u52A8\u6062\u590D"}\uFF09`),k.dropped.length&&s(`${k.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${k.dropped[0]?.reason??""}\uFF09`)}}catch{}g||f?.(m)})(),()=>{g=!0}},[r,i,s,n,f]);let h=(0,Nt.useCallback)(async g=>{try{let v=await wd(g,n.current,o.current);u(),c(`\u5DF2\u4FDD\u5B58\u5DE5\u4F5C\u6D41\u300C${v.name||g}\u300D`)}catch(v){c(`\u4FDD\u5B58\u5931\u8D25\uFF1A${ue(v)}`)}},[n,o,u,c]),y=(0,Nt.useCallback)(async g=>{try{let v=await vd(g),m=Oa(v.nodes,v.edges,v.missing??[],l.current);r(m.nodes),i(m.edges),u(),c(`\u5DF2\u52A0\u8F7D\u300C${v.name||g}\u300D`),m.dropped.length&&c(`${m.dropped.length} \u4E2A\u8282\u70B9\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u5DF2\u8DF3\u8FC7\uFF08${m.dropped[0]?.reason??""}\uFF09`),window.setTimeout(()=>a.current?.fitView({padding:.2,duration:300}),60)}catch(v){c(`\u52A0\u8F7D\u5931\u8D25\uFF1A${ue(v)}`)}},[r,i,a,u,c,l]);return{doSave:h,doLoad:y}}var pe=require("react/jsx-runtime");function vs(){let[e,t,n]=Gu([]),[o,r,i]=qu([]),[a,s]=(0,se.useState)([]),[c,u]=(0,se.useState)(null),[l,d]=(0,se.useState)(null),[f,p]=(0,se.useState)(null),[b,h]=(0,se.useState)(1),[y,g]=(0,se.useState)(!1),[v,m]=(0,se.useState)(()=>Af()),[x,k]=(0,se.useState)([]),[M,S]=(0,se.useState)(null),[C,I]=(0,se.useState)(()=>Fd()),[L,R]=(0,se.useState)(!1),[A,P]=(0,se.useState)([]),w=(0,se.useRef)(null),_=(0,se.useRef)(null),E=(0,se.useRef)(null),N=(0,se.useRef)(null),z=(0,se.useRef)(null),D=(0,se.useRef)(new Map),F=(0,se.useRef)(new Map),W=(0,se.useRef)(e),V=(0,se.useRef)(o);W.current=e,V.current=o;let K=(0,se.useCallback)(T=>{s(G=>[...G.slice(-8),T])},[]),X=(0,se.useCallback)(T=>{u(T),window.setTimeout(()=>u(G=>G===T?null:G),2600)},[]),{config:j,configIssues:ce,configRef:B,switchProfile:O,switchModel:Y,replaceConfig:oe}=Ap(X),ie=(0,se.useRef)(!1),J=(0,se.useRef)({});J.current={size:B.current?.sizes[0]?.value,quality:B.current?.qualities[0]};let te=(0,se.useRef)(!1);(0,se.useEffect)(()=>{!j||te.current||!(!j.provider?.apiKeyConfigured&&(j.source==="plugin"||j.issues.length>0))||(te.current=!0,d({kind:"settings"}))},[j]);let Q=Lp({nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,flash:X}),{addImages:q,replaceImage:re,openPreview:fe,addDataUrl:Ce}=Rp({nodesRef:W,setNodes:t,createPosition:()=>zo.current(),log:K,flash:X,setPreview:p,record:Q.record}),{runPrompt:Pe,cancelPrompt:Ye,runMany:nt,resumeTasks:nn}=Tp({nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,log:K,flash:X,taskIdsRef:F,timersRef:D}),{doSave:Ct,doLoad:Et}=Bp({nodes:e,edges:o,nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,instanceRef:E,log:K,flash:X,closeDialog:()=>d(null),defaultsRef:J,crashedRef:ie,onRestored:nn}),Qe=bf(e),st=(0,se.useMemo)(()=>({animated:!y}),[y]),Ge=(0,se.useMemo)(()=>dd(e,o),[e,o]),_t=(0,se.useMemo)(()=>e.map(T=>{if(T.type==="image"){let G=Ge.refCounts.get(T.data.registryId)??0;return(T.data.refCount??0)===G?T:{...T,data:{...T.data,refCount:G}}}if(T.type==="group"){let G=Ge.groupCounts.get(T.id)??0,Z=Ge.groupSizes.get(T.id)??0,le=Ge.groupDups.get(T.id)??0;return T.data.imageCount===G&&T.data.totalSize===Z&&T.data.duplicateCount===le?T:{...T,data:{...T.data,imageCount:G,totalSize:Z,duplicateCount:le}}}return T}),[e,Ge]),on=e.filter(T=>T.type==="prompt"),En=on.filter(T=>T.data.status==="queued"||T.data.status==="running").map(T=>T.id),eo=on.filter(T=>(T.data.prompt??"").trim()&&T.data.status!=="running"&&T.data.status!=="queued").map(T=>T.id),Po=(0,se.useCallback)((T,G)=>{t(Z=>it(Z,T,G))},[t]),Wt=(0,se.useCallback)(T=>{Q.record();let G=new Set(T);t(Z=>Z.filter(le=>!G.has(le.id))),r(Z=>Z.filter(le=>!G.has(le.source)&&!G.has(le.target)))},[t,r,Q]),_n=(0,se.useCallback)(T=>{let G=W.current.find(Z=>Z.id===T);Wt([T]),G?.type==="image"&&bd(G.data.registryId).catch(()=>{})},[Wt]),$e=(0,se.useCallback)(()=>{let T=E.current,G=w.current?.getBoundingClientRect(),Z=T&&G?T.screenToFlowPosition({x:G.width/2,y:G.height/2}):{x:140,y:120},{position:le,next:ke}=id(Z,z.current);return z.current=ke,le},[]),zo=(0,se.useRef)($e);zo.current=$e;let Ro=(0,se.useCallback)(T=>{let G=ad(T??$e(),{size:J.current.size??"1024x1024",quality:J.current.quality??"high",outputDir:""});Q.record(),t(Z=>[...Z,G])},[$e,t,B,Q]),Do=(0,se.useCallback)(T=>{Q.record(),t(G=>[...G,sd(T??$e())])},[$e,t,Q]),ii=(0,se.useCallback)(()=>{r(La(W.current,V.current)),X("\u5DF2\u6309\u4F4D\u7F6E\u8865\u9F50\u660E\u663E\u7684\u8FDE\u7EBF")},[r,X]),ai=(0,se.useCallback)(()=>{let T=new Set(x);if(!T.size){X("\u5148\u9009\u4E2D\u8981\u8FDE\u7EBF\u7684\u8282\u70B9");return}Q.record(),r(pd(W.current,V.current,T)),X("\u5DF2\u8865\u9F50\u9009\u4E2D\u8282\u70B9\u95F4\u7684\u8FDE\u7EBF")},[x,r,X,Q]),si=(0,se.useCallback)(()=>{let T=new Set(x),G=B.current?.defaultOutputDir??"";T.size&&(Q.record(),t(Z=>Z.map(le=>le.type==="prompt"&&T.has(le.id)?{...le,data:{...le.data,outputDir:G}}:le)),X(G?`\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u8F93\u51FA\u8DEF\u5F84\u8BBE\u4E3A ${G}`:"\u5DF2\u628A\u9009\u4E2D\u7684\u5361\u7247\u6539\u56DE\u300C\u53EA\u7559\u5728\u753B\u5E03\u300D"))},[x,t,X,Q]),li=(0,se.useCallback)(()=>{let T=E.current;if(!T)return;let G=W.current.filter(le=>x.includes(le.id)),Z=G.length?G:W.current;if(!Z.length){X("\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u8282\u70B9");return}T.fitView({nodes:Z,padding:.25,duration:300,maxZoom:1.6})},[x,X]),ci=(0,se.useCallback)(()=>{let T=new Set(x);if(!T.size){X("\u5148\u9009\u4E2D\u8981\u6574\u7406\u7684\u8282\u70B9");return}Q.record({preserveRedo:!0}),t(G=>Ld(G,V.current,T))},[x,t,X,Q,V]),{dropIntent:ui,dragHandlers:di,startToolbarDrag:fi,dropChip:pi}=Nf({canvasRef:w,modalOpen:!!l||!!f,getCreatePosition:()=>$e(),toFlowPosition:T=>E.current?E.current.screenToFlowPosition(T):$e(),onDropFiles:(T,G)=>void q(T,G),onDropNode:(T,G)=>{T==="prompt"?Ro(G):Do(G)}});(0,se.useEffect)(()=>{let T=G=>{let Z=G.target;if(Z&&(Z.tagName==="TEXTAREA"||Z.tagName==="INPUT"))return;let le=Array.from(G.clipboardData?.files??[]);le.length&&(G.preventDefault(),q(le,$e()))};return window.addEventListener("paste",T),()=>window.removeEventListener("paste",T)},[q,$e]),Hp({nodesRef:W,edgesRef:V,setNodes:t,setEdges:r,selectedIds:x,selectedEdgeId:M,onDeleteNodes:Wt,onDeleteEdge:T=>{Q.record(),r(G=>G.filter(Z=>Z.id!==T)),S(null)},onUndo:Q.undo,onRestore:Q.restore,onSave:()=>d({kind:"save"}),onClosePreview:()=>p(null),hasPreview:!!f});let rn=(0,se.useCallback)(T=>G=>{let Z=W.current.find(le=>le.id===G);if(!Z||Z.type!=="image"||!Z.data.url){X("\u8FD9\u5F20\u56FE\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6587\u4EF6");return}d({kind:T,target:{nodeId:G,src:Z.data.url,name:Z.data.name}})},[W,X]),It=(0,se.useMemo)(()=>({cropImage:rn("crop"),splitImage:rn("split"),upscaleImage:rn("upscale"),maskImage:rn("mask")}),[rn]),To=(0,se.useCallback)(T=>{Q.record(),t(G=>G.map(Z=>Z.id===T&&Z.type==="image"?{...Z,data:{...Z.data,maskDataUrl:void 0}}:Z)),X("\u5DF2\u6E05\u9664\u8FD9\u5F20\u56FE\u7684\u8499\u7248")},[t,Q,X]),{nodeMenu:Pt,boxRect:zt,closeMenu:mi,setNodeMenu:Ao}=Ef({rootRef:_,canvasRef:w,instanceRef:E,setNodes:t,modalOpen:!!l||!!f}),In=Pt?e.find(T=>T.id===Pt.nodeId):void 0,Oo=In?_f(In.type??"image",{hasUrl:In.type==="image"?!!In.data.url:!1,selectedCount:x.length}):[],gi=(0,se.useCallback)(T=>{let G=Pt;if(Ao(null),!G)return;let Z=G.nodeId;switch(T){case"delete-selection":Wt(x),k([]);break;case"preview":fe(Z);break;case"crop":It.cropImage(Z);break;case"upscale":It.upscaleImage(Z);break;case"split":It.splitImage(Z);break;case"mask":It.maskImage(Z);break;case"replace":re(Z);break;case"run":Pe(Z);break;case"copy-prompt":{let le=W.current.find(ke=>ke.id===Z);if(le?.type!=="prompt")break;navigator.clipboard.writeText(le.data.prompt).then(()=>X("\u5DF2\u590D\u5236\u63D0\u793A\u8BCD")).catch(()=>X("\u590D\u5236\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u62D2\u7EDD\u4E86\u526A\u8D34\u677F\u8BBF\u95EE"));break}case"delete":_n(Z);break;default:break}},[Pt,Ao,Wt,fe,It,re,Pe,_n,x,X]),hi=(0,se.useMemo)(()=>({updatePrompt:Po,runPrompt:T=>{Pe(T)},cancelPrompt:T=>{Ye(T)},deleteNode:_n,zoomImage:fe,replaceImage:re,...It,clearMask:To,config:j}),[Po,Pe,Ye,_n,fe,re,It,To,j]);return(0,pe.jsxs)(ja.Provider,{value:hi,children:[(0,pe.jsx)("style",{children:lf}),(0,pe.jsxs)("div",{className:"im-root",ref:_,children:[(0,pe.jsx)(xf,{config:j,promptCount:on.length,runnableIds:eo,busyIds:En.length,snapEnabled:C,canvasLocked:L,cost:Qe,canUndo:Q.canUndo,canRestore:Q.canRestore,onUndo:Q.undo,onRestore:Q.restore,onAddPrompt:()=>Ro(),onPickFiles:()=>N.current?.click(),onAddGroup:()=>Do(),onPasteImport:()=>d({kind:"import"}),onDragCreateNode:fi,onRun:nt,onCancelAll:()=>En.forEach(T=>void Ye(T)),onAutoConnect:ii,onOpenDefaultOutputDir:()=>d({kind:"settings"}),onSwitchProfile:T=>void O(T),onSwitchModel:T=>void Y(T),onOpenSave:async()=>{try{let T=await Ba();d({kind:"save",workflows:T.workflows})}catch{d({kind:"save"})}},onOpenLoad:async()=>{try{let T=await Ba();d({kind:"load",workflows:T.workflows})}catch(T){X(`\u8BFB\u53D6\u5931\u8D25\uFF1A${ue(T)}`)}},onOpenSettings:()=>d({kind:"settings"}),onOpenHelp:()=>d({kind:"help"}),onOpenHistory:()=>d({kind:"history"})}),ce.length?(0,pe.jsx)(Wf,{tone:"error",action:(0,pe.jsx)("button",{type:"button",className:"im-btn-ghost im-btn-xs",onClick:()=>d({kind:"settings"}),children:"\u53BB\u8BBE\u7F6E"}),children:(0,pe.jsx)("ul",{className:"im-banner-list",children:ce.map(T=>(0,pe.jsx)("li",{children:T},T))})}):null,(0,pe.jsxs)("div",{className:`im-canvas${ui?" is-drop-active":""}`,ref:w,...di,children:[(0,pe.jsx)(Lf,{selectedCount:x.length,selectedPromptCount:x.filter(T=>e.some(G=>G.id===T&&G.type==="prompt")).length,selectedRunnableIds:eo.filter(T=>x.includes(T)),pickingOutputDir:!1,onRunSelected:()=>nt(eo.filter(T=>x.includes(T))),onAutoLayout:ci,onAutoConnectSelected:ai,onSetOutputDir:si,onDeleteSelected:()=>{Wt(x),k([])}}),(0,pe.jsx)(Qa.Provider,{value:y,children:(0,pe.jsx)(Ur,{onCrash:T=>{ie.current=!0,K(`\u753B\u5E03\u6E32\u67D3\u51FA\u9519\uFF1A${T.message}`)},onClear:()=>{t([]),r([]),k([])},children:(0,pe.jsxs)(Xu,{nodes:_t,edges:o,nodeTypes:df,onNodesChange:T=>{let G=Xd(T,W.current,C);P(G.guides),n(G.changes)},onEdgesChange:T=>i(T),onConnect:Dp(r),isValidConnection:T=>cd(W.current,V.current,{source:String(T.source??""),target:String(T.target??"")}),onInit:T=>{E.current=T,g(T.getViewport().zoom<rs)},onNodeDragStop:(T,G)=>{if(P([]),!C)return;let Z=Mo(G),le=W.current.filter(an=>an.id!==G.id).map(Mo),ke=Br(Z,le);ke.x===Z.x&&ke.y===Z.y||t(an=>an.map(sn=>sn.id===G.id?{...sn,position:{x:ke.x,y:ke.y}}:sn))},onMove:(T,G)=>{h(G.zoom),g(Z=>mf(Z,G.zoom))},onEdgeDoubleClick:(T,G)=>{Q.record(),r(Z=>Z.filter(le=>le.id!==G.id)),S(null)},onSelectionChange:({nodes:T,edges:G})=>{let Z=T.map(ke=>ke.id);k(ke=>ke.length===Z.length&&ke.every((an,sn)=>an===Z[sn])?ke:Z);let le=G.length===1?G[0].id:null;S(ke=>ke===le?ke:le)},fitView:!0,fitViewOptions:{padding:.15,minZoom:.02,maxZoom:1},minZoom:.05,maxZoom:2,proOptions:{hideAttribution:!0},defaultEdgeOptions:st,onlyRenderVisibleElements:!0,deleteKeyCode:null,panOnScroll:!1,zoomOnScroll:!0,zoomOnPinch:!0,nodesDraggable:!L,nodesConnectable:!L,elementsSelectable:!L,panOnDrag:!L,selectionOnDrag:!1,selectionKeyCode:null,multiSelectionKeyCode:["Meta","Control"],children:[(0,pe.jsx)(Uu,{variant:bt.Dots,gap:18,size:1.4}),v?(0,pe.jsx)(ju,{ariaLabel:"\u753B\u5E03\u5C0F\u5730\u56FE",pannable:!0,zoomable:!0,position:"top-left",style:{width:160,height:110},nodeColor:T=>T.type==="prompt"?"var(--im-brand)":"var(--im-ink-3)",maskColor:"rgba(31, 41, 55, 0.08)",nodeStrokeWidth:2}):null,(0,pe.jsx)(Ep,{guides:A})]})})}),(0,pe.jsx)(wf,{zoom:b,snapEnabled:C,canvasLocked:L,minimapOpen:v,onZoomIn:()=>void E.current?.zoomIn({duration:180}),onZoomOut:()=>void E.current?.zoomOut({duration:180}),onFitView:()=>E.current?.fitView({padding:.15,duration:300,minZoom:.02,maxZoom:2}),onFocusSelected:li,onToggleSnap:()=>I(T=>{let G=!T;return Vd(G),G||P([]),X(G?"\u5438\u9644\u5DF2\u5F00\uFF1A\u62D6\u52A8\u65F6\u4F1A\u8D34\u9F50\u90BB\u5C45":"\u5438\u9644\u5DF2\u5173\uFF1A\u81EA\u7531\u6446\u653E"),G}),onToggleLock:()=>R(T=>{let G=!T;return X(G?"\u753B\u5E03\u5DF2\u9501\uFF1A\u53EA\u53EF\u7F29\u653E\uFF0C\u62D6\u52A8/\u8FDE\u7EBF/\u9009\u4E2D/\u5E73\u79FB\u90FD\u505C\u4E86":"\u753B\u5E03\u5DF2\u89E3\u9501"),G}),onToggleMinimap:()=>m(T=>{let G=!T;return Of(G),G}),onOpenHelp:()=>d({kind:"help"})}),zt&&E.current&&w.current?(()=>{let T=E.current.flowToScreenPosition({x:zt.x,y:zt.y}),G=E.current.flowToScreenPosition({x:zt.x+zt.width,y:zt.y+zt.height}),Z=w.current.getBoundingClientRect();return(0,pe.jsx)("div",{className:"im-marquee",style:{left:T.x-Z.left,top:T.y-Z.top,width:G.x-T.x,height:G.y-T.y}})})():null,e.length===0?(0,pe.jsx)($f,{}):null,(0,pe.jsx)(Hf,{logs:a}),(0,pe.jsx)(Bf,{text:c}),pi]}),Pt&&Oo.length>0?(0,pe.jsx)(Df,{x:Pt.x,y:Pt.y,items:Oo,onPick:gi,onClose:mi}):null,(0,pe.jsx)("input",{ref:N,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:T=>{let G=Array.from(T.target.files??[]);T.target.value="",q(G,$e())}}),f?(0,pe.jsx)(ei,{imageUrl:f.url,name:f.name,copyPath:f.path,onClose:()=>p(null)}):null,l?.kind==="save"?(0,pe.jsx)(Qf,{workflows:l.workflows??[],imagoraRoot:j?.imagoraRoot,onCancel:()=>d(null),onSubmit:T=>void Ct(T)}):null,l?.kind==="load"?(0,pe.jsx)(Jf,{workflows:l.workflows??[],imagoraRoot:j?.imagoraRoot,onCancel:()=>d(null),onPick:T=>void Et(T)}):null,l?.kind==="crop"&&l.target?(0,pe.jsx)(fp,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(T,G)=>{Q.record(),await Ce(T,`${l.target.name.replace(/\.[^.]+$/,"")}_crop_${Date.now()}.png`),d(null),X(G)}}):null,l?.kind==="split"&&l.target?(0,pe.jsx)(kp,{src:l.target.src,onClose:()=>d(null),onConfirm:async T=>{Q.record();let G=l.target.name.replace(/\.[^.]+$/,""),Z=$e();for(let[le,ke]of T.entries())await Ce(ke.dataUrl,`${G}_${le+1}.png`,{x:Z.x+le*160,y:Z.y});d(null),X(`\u5DF2\u5207\u51FA ${T.length} \u5F20`)}}):null,l?.kind==="upscale"&&l.target?(0,pe.jsx)(Cp,{src:l.target.src,onClose:()=>d(null),onConfirm:async(T,G)=>{Q.record(),await Ce(T,`${l.target.name.replace(/\.[^.]+$/,"")}_up_${Date.now()}.png`),d(null),X(G)}}):null,l?.kind==="mask"&&l.target?(0,pe.jsx)(hp,{src:l.target.src,name:l.target.name,onClose:()=>d(null),onConfirm:async(T,G)=>{Q.record(),t(Z=>Z.map(le=>le.id===l.target.nodeId&&le.type==="image"?{...le,data:{...le.data,maskDataUrl:T}}:le)),d(null),X(G)}}):null,l?.kind==="help"?(0,pe.jsx)(ep,{config:j,onClose:()=>d(null)}):null,l?.kind==="history"?(0,pe.jsx)(vp,{imagoraRoot:j?.imagoraRoot,onClose:()=>d(null),onImport:T=>{if(!T.length)return;Q.record();let G=$e(),Z=T.map((le,ke)=>kn(le,{x:G.x+ke*172,y:G.y}));t(le=>[...le,...Z]),X(`\u5DF2\u653E\u5165 ${Z.length} \u5F20\u56FE`)}}):null,l?.kind==="import"?(0,pe.jsx)(_p,{sizes:j?.sizes??[],onCancel:()=>d(null),onConfirm:T=>{Q.record();let G=B.current,Z=Rd(T,{sizes:G?.sizes??[],defaultQuality:G?.qualities[0]??"high",defaultOutputDir:""},$e());t(le=>[...le,...Z]),d(null),X(`\u5DF2\u5EFA ${Z.length} \u5F20\u63D0\u793A\u8BCD\u5361`)}}):null,l?.kind==="settings"?(0,pe.jsx)(zp,{config:j,onClose:()=>d(null),onSaved:oe,onFlash:X}):null]})]})}var Gp=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Kp=require("react/jsx-runtime"),Kv=["slots"],Zp="imagora";globalThis.__dshImagoraCanvas=vs;var jv={ErrorBoundary:jn,NodeBoundary:Yr,CanvasBoundary:Ur};globalThis.__dshImagoraBoundary=jv;function Qv({size:e=16}){return(0,Kp.jsx)(is,{size:e,fill:"currentColor"})}function Jv(e){e.effect(()=>{let t=document.createElement("style");return t.setAttribute("data-dsh-imagora-desk","xyflow"),t.textContent=Gp,document.head.appendChild(t),()=>t.remove()},"dsh-imagora-desk: xyflow \u57FA\u7840\u6837\u5F0F"),Promise.resolve().then(()=>(Up(),Yp)).then(({primitives:t})=>{try{t()}catch(n){console.error("[dsh-imagora-desk]",n)}}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Zp},vs)),e.effect(()=>e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Zp,order:6,label:()=>"\u81EA\u7531\u753B\u5E03"},Qv)),"dsh-imagora-desk: \u4FA7\u8FB9\u680F\u5165\u53E3")}
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
