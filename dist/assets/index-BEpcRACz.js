(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function s(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=s(u);fetch(u.href,f)}})();var Hc={exports:{}},gr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function Db(){if(Gm)return gr;Gm=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(l,u,f){var m=null;if(f!==void 0&&(m=""+f),u.key!==void 0&&(m=""+u.key),"key"in u){f={};for(var v in u)v!=="key"&&(f[v]=u[v])}else f=u;return u=f.ref,{$$typeof:r,type:l,key:m,ref:u!==void 0?u:null,props:f}}return gr.Fragment=a,gr.jsx=s,gr.jsxs=s,gr}var Vm;function Ib(){return Vm||(Vm=1,Hc.exports=Db()),Hc.exports}var h=Ib(),Gc={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function Mb(){if(Ym)return te;Ym=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.iterator;function F(x){return x===null||typeof x!="object"?null:(x=O&&x[O]||x["@@iterator"],typeof x=="function"?x:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,P={};function z(x,B,j){this.props=x,this.context=B,this.refs=P,this.updater=j||H}z.prototype.isReactComponent={},z.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function G(){}G.prototype=z.prototype;function U(x,B,j){this.props=x,this.context=B,this.refs=P,this.updater=j||H}var X=U.prototype=new G;X.constructor=U,q(X,z.prototype),X.isPureReactComponent=!0;var W=Array.isArray;function ue(){}var $={H:null,A:null,T:null,S:null},Ie=Object.prototype.hasOwnProperty;function Ne(x,B,j){var Y=j.ref;return{$$typeof:r,type:x,key:B,ref:Y!==void 0?Y:null,props:j}}function Ft(x,B){return Ne(x.type,B,x.props)}function xt(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function $e(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(j){return B[j]})}var Ht=/\/+/g;function wt(x,B){return typeof x=="object"&&x!==null&&x.key!=null?$e(""+x.key):B.toString(36)}function ze(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ue,ue):(x.status="pending",x.then(function(B){x.status==="pending"&&(x.status="fulfilled",x.value=B)},function(B){x.status==="pending"&&(x.status="rejected",x.reason=B)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function M(x,B,j,Y,ne){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var ge=!1;if(x===null)ge=!0;else switch(re){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(x.$$typeof){case r:case a:ge=!0;break;case k:return ge=x._init,M(ge(x._payload),B,j,Y,ne)}}if(ge)return ne=ne(x),ge=Y===""?"."+wt(x,0):Y,W(ne)?(j="",ge!=null&&(j=ge.replace(Ht,"$&/")+"/"),M(ne,B,j,"",function(Si){return Si})):ne!=null&&(xt(ne)&&(ne=Ft(ne,j+(ne.key==null||x&&x.key===ne.key?"":(""+ne.key).replace(Ht,"$&/")+"/")+ge)),B.push(ne)),1;ge=0;var Ze=Y===""?".":Y+":";if(W(x))for(var Oe=0;Oe<x.length;Oe++)Y=x[Oe],re=Ze+wt(Y,Oe),ge+=M(Y,B,j,re,ne);else if(Oe=F(x),typeof Oe=="function")for(x=Oe.call(x),Oe=0;!(Y=x.next()).done;)Y=Y.value,re=Ze+wt(Y,Oe++),ge+=M(Y,B,j,re,ne);else if(re==="object"){if(typeof x.then=="function")return M(ze(x),B,j,Y,ne);throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ge}function L(x,B,j){if(x==null)return x;var Y=[],ne=0;return M(x,Y,"","",function(re){return B.call(j,re,ne++)}),Y}function Z(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(j){(x._status===0||x._status===-1)&&(x._status=1,x._result=j)},function(j){(x._status===0||x._status===-1)&&(x._status=2,x._result=j)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var be=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},Se={map:L,forEach:function(x,B,j){L(x,function(){B.apply(this,arguments)},j)},count:function(x){var B=0;return L(x,function(){B++}),B},toArray:function(x){return L(x,function(B){return B})||[]},only:function(x){if(!xt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return te.Activity=w,te.Children=Se,te.Component=z,te.Fragment=s,te.Profiler=u,te.PureComponent=U,te.StrictMode=l,te.Suspense=g,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,te.__COMPILER_RUNTIME={__proto__:null,c:function(x){return $.H.useMemoCache(x)}},te.cache=function(x){return function(){return x.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(x,B,j){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Y=q({},x.props),ne=x.key;if(B!=null)for(re in B.key!==void 0&&(ne=""+B.key),B)!Ie.call(B,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&B.ref===void 0||(Y[re]=B[re]);var re=arguments.length-2;if(re===1)Y.children=j;else if(1<re){for(var ge=Array(re),Ze=0;Ze<re;Ze++)ge[Ze]=arguments[Ze+2];Y.children=ge}return Ne(x.type,ne,Y)},te.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},te.createElement=function(x,B,j){var Y,ne={},re=null;if(B!=null)for(Y in B.key!==void 0&&(re=""+B.key),B)Ie.call(B,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ne[Y]=B[Y]);var ge=arguments.length-2;if(ge===1)ne.children=j;else if(1<ge){for(var Ze=Array(ge),Oe=0;Oe<ge;Oe++)Ze[Oe]=arguments[Oe+2];ne.children=Ze}if(x&&x.defaultProps)for(Y in ge=x.defaultProps,ge)ne[Y]===void 0&&(ne[Y]=ge[Y]);return Ne(x,re,ne)},te.createRef=function(){return{current:null}},te.forwardRef=function(x){return{$$typeof:v,render:x}},te.isValidElement=xt,te.lazy=function(x){return{$$typeof:k,_payload:{_status:-1,_result:x},_init:Z}},te.memo=function(x,B){return{$$typeof:y,type:x,compare:B===void 0?null:B}},te.startTransition=function(x){var B=$.T,j={};$.T=j;try{var Y=x(),ne=$.S;ne!==null&&ne(j,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ue,be)}catch(re){be(re)}finally{B!==null&&j.types!==null&&(B.types=j.types),$.T=B}},te.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},te.use=function(x){return $.H.use(x)},te.useActionState=function(x,B,j){return $.H.useActionState(x,B,j)},te.useCallback=function(x,B){return $.H.useCallback(x,B)},te.useContext=function(x){return $.H.useContext(x)},te.useDebugValue=function(){},te.useDeferredValue=function(x,B){return $.H.useDeferredValue(x,B)},te.useEffect=function(x,B){return $.H.useEffect(x,B)},te.useEffectEvent=function(x){return $.H.useEffectEvent(x)},te.useId=function(){return $.H.useId()},te.useImperativeHandle=function(x,B,j){return $.H.useImperativeHandle(x,B,j)},te.useInsertionEffect=function(x,B){return $.H.useInsertionEffect(x,B)},te.useLayoutEffect=function(x,B){return $.H.useLayoutEffect(x,B)},te.useMemo=function(x,B){return $.H.useMemo(x,B)},te.useOptimistic=function(x,B){return $.H.useOptimistic(x,B)},te.useReducer=function(x,B,j){return $.H.useReducer(x,B,j)},te.useRef=function(x){return $.H.useRef(x)},te.useState=function(x){return $.H.useState(x)},te.useSyncExternalStore=function(x,B,j){return $.H.useSyncExternalStore(x,B,j)},te.useTransition=function(){return $.H.useTransition()},te.version="19.2.5",te}var Km;function vu(){return Km||(Km=1,Gc.exports=Mb()),Gc.exports}var A=vu(),Vc={exports:{}},yr={},Yc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function _b(){return Xm||(Xm=1,(function(r){function a(M,L){var Z=M.length;M.push(L);e:for(;0<Z;){var be=Z-1>>>1,Se=M[be];if(0<u(Se,L))M[be]=L,M[Z]=Se,Z=be;else break e}}function s(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var L=M[0],Z=M.pop();if(Z!==L){M[0]=Z;e:for(var be=0,Se=M.length,x=Se>>>1;be<x;){var B=2*(be+1)-1,j=M[B],Y=B+1,ne=M[Y];if(0>u(j,Z))Y<Se&&0>u(ne,j)?(M[be]=ne,M[Y]=Z,be=Y):(M[be]=j,M[B]=Z,be=B);else if(Y<Se&&0>u(ne,Z))M[be]=ne,M[Y]=Z,be=Y;else break e}}return L}function u(M,L){var Z=M.sortIndex-L.sortIndex;return Z!==0?Z:M.id-L.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var m=Date,v=m.now();r.unstable_now=function(){return m.now()-v}}var g=[],y=[],k=1,w=null,O=3,F=!1,H=!1,q=!1,P=!1,z=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function X(M){for(var L=s(y);L!==null;){if(L.callback===null)l(y);else if(L.startTime<=M)l(y),L.sortIndex=L.expirationTime,a(g,L);else break;L=s(y)}}function W(M){if(q=!1,X(M),!H)if(s(g)!==null)H=!0,ue||(ue=!0,$e());else{var L=s(y);L!==null&&ze(W,L.startTime-M)}}var ue=!1,$=-1,Ie=5,Ne=-1;function Ft(){return P?!0:!(r.unstable_now()-Ne<Ie)}function xt(){if(P=!1,ue){var M=r.unstable_now();Ne=M;var L=!0;try{e:{H=!1,q&&(q=!1,G($),$=-1),F=!0;var Z=O;try{t:{for(X(M),w=s(g);w!==null&&!(w.expirationTime>M&&Ft());){var be=w.callback;if(typeof be=="function"){w.callback=null,O=w.priorityLevel;var Se=be(w.expirationTime<=M);if(M=r.unstable_now(),typeof Se=="function"){w.callback=Se,X(M),L=!0;break t}w===s(g)&&l(g),X(M)}else l(g);w=s(g)}if(w!==null)L=!0;else{var x=s(y);x!==null&&ze(W,x.startTime-M),L=!1}}break e}finally{w=null,O=Z,F=!1}L=void 0}}finally{L?$e():ue=!1}}}var $e;if(typeof U=="function")$e=function(){U(xt)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,wt=Ht.port2;Ht.port1.onmessage=xt,$e=function(){wt.postMessage(null)}}else $e=function(){z(xt,0)};function ze(M,L){$=z(function(){M(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(M){switch(O){case 1:case 2:case 3:var L=3;break;default:L=O}var Z=O;O=L;try{return M()}finally{O=Z}},r.unstable_requestPaint=function(){P=!0},r.unstable_runWithPriority=function(M,L){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=O;O=M;try{return L()}finally{O=Z}},r.unstable_scheduleCallback=function(M,L,Z){var be=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?be+Z:be):Z=be,M){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,M={id:k++,callback:L,priorityLevel:M,startTime:Z,expirationTime:Se,sortIndex:-1},Z>be?(M.sortIndex=Z,a(y,M),s(g)===null&&M===s(y)&&(q?(G($),$=-1):q=!0,ze(W,Z-be))):(M.sortIndex=Se,a(g,M),H||F||(H=!0,ue||(ue=!0,$e()))),M},r.unstable_shouldYield=Ft,r.unstable_wrapCallback=function(M){var L=O;return function(){var Z=O;O=L;try{return M.apply(this,arguments)}finally{O=Z}}}})(Kc)),Kc}var Qm;function Nb(){return Qm||(Qm=1,Yc.exports=_b()),Yc.exports}var Xc={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function Ob(){if($m)return Je;$m=1;var r=vu();function a(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)y+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(g,y,k){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:g,containerInfo:y,implementation:k}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Je.createPortal=function(g,y){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(a(299));return f(g,y,null,k)},Je.flushSync=function(g){var y=m.T,k=l.p;try{if(m.T=null,l.p=2,g)return g()}finally{m.T=y,l.p=k,l.d.f()}},Je.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,l.d.C(g,y))},Je.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},Je.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var k=y.as,w=v(k,y.crossOrigin),O=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;k==="style"?l.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:O,fetchPriority:F}):k==="script"&&l.d.X(g,{crossOrigin:w,integrity:O,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Je.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var k=v(y.as,y.crossOrigin);l.d.M(g,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&l.d.M(g)},Je.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var k=y.as,w=v(k,y.crossOrigin);l.d.L(g,k,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Je.preloadModule=function(g,y){if(typeof g=="string")if(y){var k=v(y.as,y.crossOrigin);l.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else l.d.m(g)},Je.requestFormReset=function(g){l.d.r(g)},Je.unstable_batchedUpdates=function(g,y){return g(y)},Je.useFormState=function(g,y,k){return m.H.useFormState(g,y,k)},Je.useFormStatus=function(){return m.H.useHostTransitionStatus()},Je.version="19.2.5",Je}var Jm;function Bb(){if(Jm)return Xc.exports;Jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Xc.exports=Ob(),Xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function Ub(){if(Wm)return yr;Wm=1;var r=Nb(),a=vu(),s=Bb();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(l(188))}function y(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return g(o),e;if(c===i)return g(o),t;c=c.sibling}throw Error(l(188))}if(n.return!==i.return)n=o,i=c;else{for(var d=!1,p=o.child;p;){if(p===n){d=!0,n=o,i=c;break}if(p===i){d=!0,i=o,n=c;break}p=p.sibling}if(!d){for(p=c.child;p;){if(p===n){d=!0,n=c,i=o;break}if(p===i){d=!0,i=c,n=o;break}p=p.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,O=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),U=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),xt=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=xt&&e[xt]||e["@@iterator"],typeof e=="function"?e:null)}var Ht=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case z:return"Profiler";case P:return"StrictMode";case W:return"Suspense";case ue:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case U:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var ze=Array.isArray,M=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},be=[],Se=-1;function x(e){return{current:e}}function B(e){0>Se||(e.current=be[Se],be[Se]=null,Se--)}function j(e,t){Se++,be[Se]=e.current,e.current=t}var Y=x(null),ne=x(null),re=x(null),ge=x(null);function Ze(e,t){switch(j(re,t),j(ne,e),j(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hm(t),e=mm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Y),j(Y,e)}function Oe(){B(Y),B(ne),B(re)}function Si(e){e.memoizedState!==null&&j(ge,e);var t=Y.current,n=mm(t,e.type);t!==n&&(j(ne,e),j(Y,n))}function Or(e){ne.current===e&&(B(Y),B(ne)),ge.current===e&&(B(ge),fr._currentValue=Z)}var To,Fu;function aa(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||"",Fu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+To+e+Fu}var Eo=!1;function Ao(e,t){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(D){var R=D}Reflect.construct(e,[],N)}else{try{N.call()}catch(D){R=D}e.call(N.prototype)}}else{try{throw Error()}catch(D){R=D}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(D){if(D&&R&&typeof D.stack=="string")return[D.stack,R.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),d=c[0],p=c[1];if(d&&p){var b=d.split(`
`),E=p.split(`
`);for(o=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;o<E.length&&!E[o].includes("DetermineComponentFrameRoot");)o++;if(i===b.length||o===E.length)for(i=b.length-1,o=E.length-1;1<=i&&0<=o&&b[i]!==E[o];)o--;for(;1<=i&&0<=o;i--,o--)if(b[i]!==E[o]){if(i!==1||o!==1)do if(i--,o--,0>o||b[i]!==E[o]){var I=`
`+b[i].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=i&&0<=o);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?aa(n):""}function sy(e,t){switch(e.tag){case 26:case 27:case 5:return aa(e.type);case 16:return aa("Lazy");case 13:return e.child!==t&&t!==null?aa("Suspense Fallback"):aa("Suspense");case 19:return aa("SuspenseList");case 0:case 15:return Ao(e.type,!1);case 11:return Ao(e.type.render,!1);case 1:return Ao(e.type,!0);case 31:return aa("Activity");default:return""}}function Hu(e){try{var t="",n=null;do t+=sy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ro=Object.prototype.hasOwnProperty,Do=r.unstable_scheduleCallback,Io=r.unstable_cancelCallback,oy=r.unstable_shouldYield,ly=r.unstable_requestPaint,ct=r.unstable_now,cy=r.unstable_getCurrentPriorityLevel,Gu=r.unstable_ImmediatePriority,Vu=r.unstable_UserBlockingPriority,Br=r.unstable_NormalPriority,uy=r.unstable_LowPriority,Yu=r.unstable_IdlePriority,dy=r.log,fy=r.unstable_setDisableYieldValue,ki=null,ut=null;function kn(e){if(typeof dy=="function"&&fy(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(ki,e)}catch{}}var dt=Math.clz32?Math.clz32:py,hy=Math.log,my=Math.LN2;function py(e){return e>>>=0,e===0?32:31-(hy(e)/my|0)|0}var Ur=256,zr=262144,Lr=4194304;function ia(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=i&134217727;return p!==0?(i=p&~c,i!==0?o=ia(i):(d&=p,d!==0?o=ia(d):n||(n=p&~e,n!==0&&(o=ia(n))))):(p=i&~c,p!==0?o=ia(p):d!==0?o=ia(d):n||(n=i&~e,n!==0&&(o=ia(n)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:o}function Ti(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(){var e=Lr;return Lr<<=1,(Lr&62914560)===0&&(Lr=4194304),e}function Mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ei(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yy(e,t,n,i,o,c){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,b=e.expirationTimes,E=e.hiddenUpdates;for(n=d&~n;0<n;){var I=31-dt(n),N=1<<I;p[I]=0,b[I]=-1;var R=E[I];if(R!==null)for(E[I]=null,I=0;I<R.length;I++){var D=R[I];D!==null&&(D.lane&=-536870913)}n&=~N}i!==0&&Xu(e,i,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function Xu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-dt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Qu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-dt(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}function $u(e,t){var n=t&-t;return n=(n&42)!==0?1:_o(n),(n&(e.suspendedLanes|t))!==0?0:n}function _o(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function No(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ju(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:zm(e.type))}function Wu(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var Tn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Tn,nt="__reactProps$"+Tn,Aa="__reactContainer$"+Tn,Oo="__reactEvents$"+Tn,vy="__reactListeners$"+Tn,by="__reactHandles$"+Tn,Zu="__reactResources$"+Tn,Ai="__reactMarker$"+Tn;function Bo(e){delete e[Ve],delete e[nt],delete e[Oo],delete e[vy],delete e[by]}function Ra(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Aa]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xm(e);e!==null;){if(n=e[Ve])return n;e=xm(e)}return t}e=n,n=e.parentNode}return null}function Da(e){if(e=e[Ve]||e[Aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ri(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Ia(e){var t=e[Zu];return t||(t=e[Zu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Ai]=!0}var ed=new Set,td={};function ra(e,t){Ma(e,t),Ma(e+"Capture",t)}function Ma(e,t){for(td[e]=t,e=0;e<t.length;e++)ed.add(t[e])}var Cy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nd={},ad={};function xy(e){return Ro.call(ad,e)?!0:Ro.call(nd,e)?!1:Cy.test(e)?ad[e]=!0:(nd[e]=!0,!1)}function qr(e,t,n){if(xy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Wt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){n=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){if(!e._valueTracker){var t=id(e)?"checked":"value";e._valueTracker=wy(e,t,""+e[t])}}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=id(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sy=/[\n"\\]/g;function kt(e){return e.replace(Sy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zo(e,t,n,i,o,c,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Lo(e,d,St(t)):n!=null?Lo(e,d,St(n)):i!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+St(p):e.removeAttribute("name")}function sd(e,t,n,i,o,c,d,p){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Uo(e);return}n=n!=null?""+St(n):"",t=t!=null?""+St(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=p?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Uo(e)}function Lo(e,t,n){t==="number"&&Fr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _a(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function od(e,t,n){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+St(n):""}function ld(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(ze(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=St(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Uo(e)}function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ky=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ky.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ud(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in t)i=t[o],t.hasOwnProperty(o)&&n[o]!==i&&cd(e,o,i)}else for(var c in t)t.hasOwnProperty(c)&&cd(e,c,t[c])}function jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ty=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ey=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hr(e){return Ey.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var qo=null;function Po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oa=null,Ba=null;function dd(e){var t=Da(e);if(t&&(e=t.stateNode)){var n=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(zo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=i[nt]||null;if(!o)throw Error(l(90));zo(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&rd(i)}break e;case"textarea":od(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&_a(e,!!n.multiple,t,!1)}}}var Fo=!1;function fd(e,t,n){if(Fo)return e(t,n);Fo=!0;try{var i=e(t);return i}finally{if(Fo=!1,(Oa!==null||Ba!==null)&&(Is(),Oa&&(t=Oa,e=Ba,Ba=Oa=null,dd(t),e)))for(t=0;t<e.length;t++)dd(e[t])}}function Di(e,t){var n=e.stateNode;if(n===null)return null;var i=n[nt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ho=!1;if(en)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Ho=!1}var En=null,Go=null,Gr=null;function hd(){if(Gr)return Gr;var e,t=Go,n=t.length,i,o="value"in En?En.value:En.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===o[c-i];i++);return Gr=o.slice(e,1<i?1-i:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function md(){return!1}function at(e){function t(n,i,o,c,d){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(c):c[p]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Yr:md,this.isPropagationStopped=md,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kr=at(sa),Mi=w({},sa,{view:0,detail:0}),Ay=at(Mi),Vo,Yo,_i,Xr=w({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(Vo=e.screenX-_i.screenX,Yo=e.screenY-_i.screenY):Yo=Vo=0,_i=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),pd=at(Xr),Ry=w({},Xr,{dataTransfer:0}),Dy=at(Ry),Iy=w({},Mi,{relatedTarget:0}),Ko=at(Iy),My=w({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),_y=at(My),Ny=w({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oy=at(Ny),By=w({},sa,{data:0}),gd=at(By),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ly[e])?!!t[e]:!1}function Xo(){return jy}var qy=w({},Mi,{key:function(e){if(e.key){var t=Uy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Py=at(qy),Fy=w({},Xr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=at(Fy),Hy=w({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),Gy=at(Hy),Vy=w({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=at(Vy),Ky=w({},Xr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=at(Ky),Qy=w({},sa,{newState:0,oldState:0}),$y=at(Qy),Jy=[9,13,27,32],Qo=en&&"CompositionEvent"in window,Ni=null;en&&"documentMode"in document&&(Ni=document.documentMode);var Wy=en&&"TextEvent"in window&&!Ni,vd=en&&(!Qo||Ni&&8<Ni&&11>=Ni),bd=" ",Cd=!1;function xd(e,t){switch(e){case"keyup":return Jy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ua=!1;function Zy(e,t){switch(e){case"compositionend":return wd(t);case"keypress":return t.which!==32?null:(Cd=!0,bd);case"textInput":return e=t.data,e===bd&&Cd?null:e;default:return null}}function ev(e,t){if(Ua)return e==="compositionend"||!Qo&&xd(e,t)?(e=hd(),Gr=Go=En=null,Ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vd&&t.locale!=="ko"?null:t.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tv[e.type]:t==="textarea"}function kd(e,t,n,i){Oa?Ba?Ba.push(i):Ba=[i]:Oa=i,t=zs(t,"onChange"),0<t.length&&(n=new Kr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Oi=null,Bi=null;function nv(e){om(e,0)}function Qr(e){var t=Ri(e);if(rd(t))return e}function Td(e,t){if(e==="change")return t}var Ed=!1;if(en){var $o;if(en){var Jo="oninput"in document;if(!Jo){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Jo=typeof Ad.oninput=="function"}$o=Jo}else $o=!1;Ed=$o&&(!document.documentMode||9<document.documentMode)}function Rd(){Oi&&(Oi.detachEvent("onpropertychange",Dd),Bi=Oi=null)}function Dd(e){if(e.propertyName==="value"&&Qr(Bi)){var t=[];kd(t,Bi,e,Po(e)),fd(nv,t)}}function av(e,t,n){e==="focusin"?(Rd(),Oi=t,Bi=n,Oi.attachEvent("onpropertychange",Dd)):e==="focusout"&&Rd()}function iv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qr(Bi)}function rv(e,t){if(e==="click")return Qr(t)}function sv(e,t){if(e==="input"||e==="change")return Qr(t)}function ov(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:ov;function Ui(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Ro.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Md(e,t){var n=Id(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lv=en&&"documentMode"in document&&11>=document.documentMode,za=null,Zo=null,zi=null,el=!1;function Od(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;el||za==null||za!==Fr(i)||(i=za,"selectionStart"in i&&Wo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zi&&Ui(zi,i)||(zi=i,i=zs(Zo,"onSelect"),0<i.length&&(t=new Kr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=za)))}function oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var La={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},tl={},Bd={};en&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function la(e){if(tl[e])return tl[e];if(!La[e])return e;var t=La[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bd)return tl[e]=t[n];return e}var Ud=la("animationend"),zd=la("animationiteration"),Ld=la("animationstart"),cv=la("transitionrun"),uv=la("transitionstart"),dv=la("transitioncancel"),jd=la("transitionend"),qd=new Map,nl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nl.push("scrollEnd");function Ot(e,t){qd.set(e,t),ra(t,[e])}var $r=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],ja=0,al=0;function Jr(){for(var e=ja,t=al=ja=0;t<e;){var n=Tt[t];Tt[t++]=null;var i=Tt[t];Tt[t++]=null;var o=Tt[t];Tt[t++]=null;var c=Tt[t];if(Tt[t++]=null,i!==null&&o!==null){var d=i.pending;d===null?o.next=o:(o.next=d.next,d.next=o),i.pending=o}c!==0&&Pd(n,o,c)}}function Wr(e,t,n,i){Tt[ja++]=e,Tt[ja++]=t,Tt[ja++]=n,Tt[ja++]=i,al|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function il(e,t,n,i){return Wr(e,t,n,i),Zr(e)}function ca(e,t){return Wr(e,null,null,t),Zr(e)}function Pd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-dt(n),e=c.hiddenUpdates,i=e[o],i===null?e[o]=[t]:i.push(t),t.lane=n|536870912),c):null}function Zr(e){if(50<rr)throw rr=0,hc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qa={};function fv(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,i){return new fv(e,t,n,i)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function es(e,t,n,i,o,c){var d=0;if(i=e,typeof e=="function")rl(e)&&(d=1);else if(typeof e=="string")d=yb(e,n,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=ht(31,n,t,o),e.elementType=Ne,e.lanes=c,e;case q:return ua(n.children,o,c,t);case P:d=8,o|=24;break;case z:return e=ht(12,n,t,o|2),e.elementType=z,e.lanes=c,e;case W:return e=ht(13,n,t,o),e.elementType=W,e.lanes=c,e;case ue:return e=ht(19,n,t,o),e.elementType=ue,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:d=10;break e;case G:d=9;break e;case X:d=11;break e;case $:d=14;break e;case Ie:d=16,i=null;break e}d=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=ht(d,n,t,o),t.elementType=e,t.type=i,t.lanes=c,t}function ua(e,t,n,i){return e=ht(7,e,i,t),e.lanes=n,e}function sl(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function Hd(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function ol(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gd=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var n=Gd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Hu(t)},Gd.set(e,t),t)}return{value:e,source:t,stack:Hu(t)}}var Pa=[],Fa=0,ts=null,Li=0,At=[],Rt=0,An=null,Gt=1,Vt="";function nn(e,t){Pa[Fa++]=Li,Pa[Fa++]=ts,ts=e,Li=t}function Vd(e,t,n){At[Rt++]=Gt,At[Rt++]=Vt,At[Rt++]=An,An=e;var i=Gt;e=Vt;var o=32-dt(i)-1;i&=~(1<<o),n+=1;var c=32-dt(t)+o;if(30<c){var d=o-o%5;c=(i&(1<<d)-1).toString(32),i>>=d,o-=d,Gt=1<<32-dt(t)+o|n<<o|i,Vt=c+e}else Gt=1<<c|n<<o|i,Vt=e}function ll(e){e.return!==null&&(nn(e,1),Vd(e,1,0))}function cl(e){for(;e===ts;)ts=Pa[--Fa],Pa[Fa]=null,Li=Pa[--Fa],Pa[Fa]=null;for(;e===An;)An=At[--Rt],At[Rt]=null,Vt=At[--Rt],At[Rt]=null,Gt=At[--Rt],At[Rt]=null}function Yd(e,t){At[Rt++]=Gt,At[Rt++]=Vt,At[Rt++]=An,Gt=t.id,Vt=t.overflow,An=e}var Ye=null,Ee=null,de=!1,Rn=null,Dt=!1,ul=Error(l(519));function Dn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ji(Et(t,e)),ul}function Kd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ve]=e,t[nt]=i,n){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(n=0;n<or.length;n++)oe(or[n],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),sd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),ld(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||dm(t.textContent,n)?(i.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),i.onScroll!=null&&oe("scroll",t),i.onScrollEnd!=null&&oe("scrollend",t),i.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||Dn(e,!0)}function Xd(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:Ye=Ye.return}}function Ha(e){if(e!==Ye)return!1;if(!de)return Xd(e),de=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rc(e.type,e.memoizedProps)),n=!n),n&&Ee&&Dn(e),Xd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ee=Cm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ee=Cm(e)}else t===27?(t=Ee,Hn(e.type)?(e=Nc,Nc=null,Ee=e):Ee=t):Ee=Ye?Mt(e.stateNode.nextSibling):null;return!0}function da(){Ee=Ye=null,de=!1}function dl(){var e=Rn;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),Rn=null),e}function ji(e){Rn===null?Rn=[e]:Rn.push(e)}var fl=x(null),fa=null,an=null;function In(e,t,n){j(fl,t._currentValue),t._currentValue=n}function rn(e){e._currentValue=fl.current,B(fl)}function hl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ml(e,t,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var d=o.child;c=c.firstContext;e:for(;c!==null;){var p=c;c=o;for(var b=0;b<t.length;b++)if(p.context===t[b]){c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),hl(c.return,n,e),i||(d=null);break e}c=p.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=n,c=d.alternate,c!==null&&(c.lanes|=n),hl(d,n,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Ga(e,t,n,i){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var p=o.type;ft(o.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(o===ge.current){if(d=o.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(fr):e=[fr])}o=o.return}e!==null&&ml(t,e,n,i),t.flags|=262144}function ns(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){fa=e,an=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return Qd(fa,e)}function as(e,t){return fa===null&&ha(e),Qd(e,t)}function Qd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},an===null){if(e===null)throw Error(l(308));an=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else an=an.next=t;return n}var hv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mv=r.unstable_scheduleCallback,pv=r.unstable_NormalPriority,Le={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pl(){return{controller:new hv,data:new Map,refCount:0}}function qi(e){e.refCount--,e.refCount===0&&mv(pv,function(){e.controller.abort()})}var Pi=null,gl=0,Va=0,Ya=null;function gv(e,t){if(Pi===null){var n=Pi=[];gl=0,Va=bc(),Ya={status:"pending",value:void 0,then:function(i){n.push(i)}}}return gl++,t.then($d,$d),t}function $d(){if(--gl===0&&Pi!==null){Ya!==null&&(Ya.status="fulfilled");var e=Pi;Pi=null,Va=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yv(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var Jd=M.S;M.S=function(e,t){Bh=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gv(e,t),Jd!==null&&Jd(e,t)};var ma=x(null);function yl(){var e=ma.current;return e!==null?e:ke.pooledCache}function is(e,t){t===null?j(ma,ma.current):j(ma,t.pool)}function Wd(){var e=yl();return e===null?null:{parent:Le._currentValue,pool:e}}var Ka=Error(l(460)),vl=Error(l(474)),rs=Error(l(542)),ss={then:function(){}};function Zd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ef(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nf(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=i}},function(i){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nf(e),e}throw ga=t,Ka}}function pa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ga=n,Ka):n}}var ga=null;function tf(){if(ga===null)throw Error(l(459));var e=ga;return ga=null,e}function nf(e){if(e===Ka||e===rs)throw Error(l(483))}var Xa=null,Fi=0;function os(e){var t=Fi;return Fi+=1,Xa===null&&(Xa=[]),ef(Xa,e,t)}function Hi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ls(e,t){throw t.$$typeof===O?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function af(e){function t(S,C){if(e){var T=S.deletions;T===null?(S.deletions=[C],S.flags|=16):T.push(C)}}function n(S,C){if(!e)return null;for(;C!==null;)t(S,C),C=C.sibling;return null}function i(S){for(var C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function o(S,C){return S=tn(S,C),S.index=0,S.sibling=null,S}function c(S,C,T){return S.index=T,e?(T=S.alternate,T!==null?(T=T.index,T<C?(S.flags|=67108866,C):T):(S.flags|=67108866,C)):(S.flags|=1048576,C)}function d(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function p(S,C,T,_){return C===null||C.tag!==6?(C=sl(T,S.mode,_),C.return=S,C):(C=o(C,T),C.return=S,C)}function b(S,C,T,_){var Q=T.type;return Q===q?I(S,C,T.props.children,_,T.key):C!==null&&(C.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ie&&pa(Q)===C.type)?(C=o(C,T.props),Hi(C,T),C.return=S,C):(C=es(T.type,T.key,T.props,null,S.mode,_),Hi(C,T),C.return=S,C)}function E(S,C,T,_){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=ol(T,S.mode,_),C.return=S,C):(C=o(C,T.children||[]),C.return=S,C)}function I(S,C,T,_,Q){return C===null||C.tag!==7?(C=ua(T,S.mode,_,Q),C.return=S,C):(C=o(C,T),C.return=S,C)}function N(S,C,T){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=sl(""+C,S.mode,T),C.return=S,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return T=es(C.type,C.key,C.props,null,S.mode,T),Hi(T,C),T.return=S,T;case H:return C=ol(C,S.mode,T),C.return=S,C;case Ie:return C=pa(C),N(S,C,T)}if(ze(C)||$e(C))return C=ua(C,S.mode,T,null),C.return=S,C;if(typeof C.then=="function")return N(S,os(C),T);if(C.$$typeof===U)return N(S,as(S,C),T);ls(S,C)}return null}function R(S,C,T,_){var Q=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return Q!==null?null:p(S,C,""+T,_);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case F:return T.key===Q?b(S,C,T,_):null;case H:return T.key===Q?E(S,C,T,_):null;case Ie:return T=pa(T),R(S,C,T,_)}if(ze(T)||$e(T))return Q!==null?null:I(S,C,T,_,null);if(typeof T.then=="function")return R(S,C,os(T),_);if(T.$$typeof===U)return R(S,C,as(S,T),_);ls(S,T)}return null}function D(S,C,T,_,Q){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return S=S.get(T)||null,p(C,S,""+_,Q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case F:return S=S.get(_.key===null?T:_.key)||null,b(C,S,_,Q);case H:return S=S.get(_.key===null?T:_.key)||null,E(C,S,_,Q);case Ie:return _=pa(_),D(S,C,T,_,Q)}if(ze(_)||$e(_))return S=S.get(T)||null,I(C,S,_,Q,null);if(typeof _.then=="function")return D(S,C,T,os(_),Q);if(_.$$typeof===U)return D(S,C,T,as(C,_),Q);ls(C,_)}return null}function V(S,C,T,_){for(var Q=null,he=null,K=C,ie=C=0,ce=null;K!==null&&ie<T.length;ie++){K.index>ie?(ce=K,K=null):ce=K.sibling;var me=R(S,K,T[ie],_);if(me===null){K===null&&(K=ce);break}e&&K&&me.alternate===null&&t(S,K),C=c(me,C,ie),he===null?Q=me:he.sibling=me,he=me,K=ce}if(ie===T.length)return n(S,K),de&&nn(S,ie),Q;if(K===null){for(;ie<T.length;ie++)K=N(S,T[ie],_),K!==null&&(C=c(K,C,ie),he===null?Q=K:he.sibling=K,he=K);return de&&nn(S,ie),Q}for(K=i(K);ie<T.length;ie++)ce=D(K,S,ie,T[ie],_),ce!==null&&(e&&ce.alternate!==null&&K.delete(ce.key===null?ie:ce.key),C=c(ce,C,ie),he===null?Q=ce:he.sibling=ce,he=ce);return e&&K.forEach(function(Xn){return t(S,Xn)}),de&&nn(S,ie),Q}function J(S,C,T,_){if(T==null)throw Error(l(151));for(var Q=null,he=null,K=C,ie=C=0,ce=null,me=T.next();K!==null&&!me.done;ie++,me=T.next()){K.index>ie?(ce=K,K=null):ce=K.sibling;var Xn=R(S,K,me.value,_);if(Xn===null){K===null&&(K=ce);break}e&&K&&Xn.alternate===null&&t(S,K),C=c(Xn,C,ie),he===null?Q=Xn:he.sibling=Xn,he=Xn,K=ce}if(me.done)return n(S,K),de&&nn(S,ie),Q;if(K===null){for(;!me.done;ie++,me=T.next())me=N(S,me.value,_),me!==null&&(C=c(me,C,ie),he===null?Q=me:he.sibling=me,he=me);return de&&nn(S,ie),Q}for(K=i(K);!me.done;ie++,me=T.next())me=D(K,S,ie,me.value,_),me!==null&&(e&&me.alternate!==null&&K.delete(me.key===null?ie:me.key),C=c(me,C,ie),he===null?Q=me:he.sibling=me,he=me);return e&&K.forEach(function(Rb){return t(S,Rb)}),de&&nn(S,ie),Q}function we(S,C,T,_){if(typeof T=="object"&&T!==null&&T.type===q&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case F:e:{for(var Q=T.key;C!==null;){if(C.key===Q){if(Q=T.type,Q===q){if(C.tag===7){n(S,C.sibling),_=o(C,T.props.children),_.return=S,S=_;break e}}else if(C.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ie&&pa(Q)===C.type){n(S,C.sibling),_=o(C,T.props),Hi(_,T),_.return=S,S=_;break e}n(S,C);break}else t(S,C);C=C.sibling}T.type===q?(_=ua(T.props.children,S.mode,_,T.key),_.return=S,S=_):(_=es(T.type,T.key,T.props,null,S.mode,_),Hi(_,T),_.return=S,S=_)}return d(S);case H:e:{for(Q=T.key;C!==null;){if(C.key===Q)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){n(S,C.sibling),_=o(C,T.children||[]),_.return=S,S=_;break e}else{n(S,C);break}else t(S,C);C=C.sibling}_=ol(T,S.mode,_),_.return=S,S=_}return d(S);case Ie:return T=pa(T),we(S,C,T,_)}if(ze(T))return V(S,C,T,_);if($e(T)){if(Q=$e(T),typeof Q!="function")throw Error(l(150));return T=Q.call(T),J(S,C,T,_)}if(typeof T.then=="function")return we(S,C,os(T),_);if(T.$$typeof===U)return we(S,C,as(S,T),_);ls(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,C!==null&&C.tag===6?(n(S,C.sibling),_=o(C,T),_.return=S,S=_):(n(S,C),_=sl(T,S.mode,_),_.return=S,S=_),d(S)):n(S,C)}return function(S,C,T,_){try{Fi=0;var Q=we(S,C,T,_);return Xa=null,Q}catch(K){if(K===Ka||K===rs)throw K;var he=ht(29,K,null,S.mode);return he.lanes=_,he.return=S,he}finally{}}}var ya=af(!0),rf=af(!1),Mn=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,t=Zr(e),Pd(e,null,n),t}return Wr(e,i,t,n),Zr(e)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Qu(e,n)}}function xl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var wl=!1;function Vi(){if(wl){var e=Ya;if(e!==null)throw e}}function Yi(e,t,n,i){wl=!1;var o=e.updateQueue;Mn=!1;var c=o.firstBaseUpdate,d=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var b=p,E=b.next;b.next=null,d===null?c=E:d.next=E,d=b;var I=e.alternate;I!==null&&(I=I.updateQueue,p=I.lastBaseUpdate,p!==d&&(p===null?I.firstBaseUpdate=E:p.next=E,I.lastBaseUpdate=b))}if(c!==null){var N=o.baseState;d=0,I=E=b=null,p=c;do{var R=p.lane&-536870913,D=R!==p.lane;if(D?(le&R)===R:(i&R)===R){R!==0&&R===Va&&(wl=!0),I!==null&&(I=I.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var V=e,J=p;R=t;var we=n;switch(J.tag){case 1:if(V=J.payload,typeof V=="function"){N=V.call(we,N,R);break e}N=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=J.payload,R=typeof V=="function"?V.call(we,N,R):V,R==null)break e;N=w({},N,R);break e;case 2:Mn=!0}}R=p.callback,R!==null&&(e.flags|=64,D&&(e.flags|=8192),D=o.callbacks,D===null?o.callbacks=[R]:D.push(R))}else D={lane:R,tag:p.tag,payload:p.payload,callback:p.callback,next:null},I===null?(E=I=D,b=N):I=I.next=D,d|=R;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;D=p,p=D.next,D.next=null,o.lastBaseUpdate=D,o.shared.pending=null}}while(!0);I===null&&(b=N),o.baseState=b,o.firstBaseUpdate=E,o.lastBaseUpdate=I,c===null&&(o.shared.lanes=0),Ln|=d,e.lanes=d,e.memoizedState=N}}function sf(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function of(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)sf(n[e],t)}var Qa=x(null),cs=x(0);function lf(e,t){e=mn,j(cs,e),j(Qa,t),mn=e|t.baseLanes}function Sl(){j(cs,mn),j(Qa,Qa.current)}function kl(){mn=cs.current,B(Qa),B(cs)}var mt=x(null),It=null;function On(e){var t=e.alternate;j(Be,Be.current&1),j(mt,e),It===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(It=e)}function Tl(e){j(Be,Be.current),j(mt,e),It===null&&(It=e)}function cf(e){e.tag===22?(j(Be,Be.current),j(mt,e),It===null&&(It=e)):Bn()}function Bn(){j(Be,Be.current),j(mt,mt.current)}function pt(e){B(mt),It===e&&(It=null),B(Be)}var Be=x(0);function us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mc(n)||_c(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sn=0,ae=null,Ce=null,je=null,ds=!1,$a=!1,va=!1,fs=0,Ki=0,Ja=null,vv=0;function Me(){throw Error(l(321))}function El(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Al(e,t,n,i,o,c){return sn=c,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Yf:Fl,va=!1,c=n(i,o),va=!1,$a&&(c=df(t,n,i,o)),uf(e),c}function uf(e){M.H=$i;var t=Ce!==null&&Ce.next!==null;if(sn=0,je=Ce=ae=null,ds=!1,Ki=0,Ja=null,t)throw Error(l(300));e===null||qe||(e=e.dependencies,e!==null&&ns(e)&&(qe=!0))}function df(e,t,n,i){ae=e;var o=0;do{if($a&&(Ja=null),Ki=0,$a=!1,25<=o)throw Error(l(301));if(o+=1,je=Ce=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}M.H=Kf,c=t(n,i)}while($a);return c}function bv(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Xi(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ae.flags|=1024),t}function Rl(){var e=fs!==0;return fs=0,e}function Dl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Il(e){if(ds){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ds=!1}sn=0,je=Ce=ae=null,$a=!1,Ki=fs=0,Ja=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ae.memoizedState=je=e:je=je.next=e,je}function Ue(){if(Ce===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=je===null?ae.memoizedState:je.next;if(t!==null)je=t,Ce=e;else{if(e===null)throw ae.alternate===null?Error(l(467)):Error(l(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},je===null?ae.memoizedState=je=e:je=je.next=e}return je}function hs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xi(e){var t=Ki;return Ki+=1,Ja===null&&(Ja=[]),e=ef(Ja,e,t),t=ae,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Yf:Fl),e}function ms(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xi(e);if(e.$$typeof===U)return Ke(e)}throw Error(l(438,String(e)))}function Ml(e){var t=null,n=ae.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ae.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=hs(),ae.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Ft;return t.index++,n}function on(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=Ue();return _l(t,Ce,e)}function _l(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var o=e.baseQueue,c=i.pending;if(c!==null){if(o!==null){var d=o.next;o.next=c.next,c.next=d}t.baseQueue=o=c,i.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var p=d=null,b=null,E=t,I=!1;do{var N=E.lane&-536870913;if(N!==E.lane?(le&N)===N:(sn&N)===N){var R=E.revertLane;if(R===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),N===Va&&(I=!0);else if((sn&R)===R){E=E.next,R===Va&&(I=!0);continue}else N={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(p=b=N,d=c):b=b.next=N,ae.lanes|=R,Ln|=R;N=E.action,va&&n(c,N),c=E.hasEagerState?E.eagerState:n(c,N)}else R={lane:N,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(p=b=R,d=c):b=b.next=R,ae.lanes|=N,Ln|=N;E=E.next}while(E!==null&&E!==t);if(b===null?d=c:b.next=p,!ft(c,e.memoizedState)&&(qe=!0,I&&(n=Ya,n!==null)))throw n;e.memoizedState=c,e.baseState=d,e.baseQueue=b,i.lastRenderedState=c}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Nl(e){var t=Ue(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do c=e(c,d.action),d=d.next;while(d!==o);ft(c,t.memoizedState)||(qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function ff(e,t,n){var i=ae,o=Ue(),c=de;if(c){if(n===void 0)throw Error(l(407));n=n()}else n=t();var d=!ft((Ce||o).memoizedState,n);if(d&&(o.memoizedState=n,qe=!0),o=o.queue,Ul(pf.bind(null,i,o,e),[e]),o.getSnapshot!==t||d||je!==null&&je.memoizedState.tag&1){if(i.flags|=2048,Wa(9,{destroy:void 0},mf.bind(null,i,o,n,t),null),ke===null)throw Error(l(349));c||(sn&127)!==0||hf(i,t,n)}return n}function hf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t=hs(),ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mf(e,t,n,i){t.value=n,t.getSnapshot=i,gf(t)&&yf(e)}function pf(e,t,n){return n(function(){gf(t)&&yf(e)})}function gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function yf(e){var t=ca(e,2);t!==null&&lt(t,e,2)}function Ol(e){var t=et();if(typeof e=="function"){var n=e;if(e=n(),va){kn(!0);try{n()}finally{kn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:e},t}function vf(e,t,n,i){return e.baseState=n,_l(e,Ce,typeof i=="function"?i:on)}function Cv(e,t,n,i,o){if(vs(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};M.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,bf(t,c)):(c.next=n.next,t.pending=n.next=c)}}function bf(e,t){var n=t.action,i=t.payload,o=e.state;if(t.isTransition){var c=M.T,d={};M.T=d;try{var p=n(o,i),b=M.S;b!==null&&b(d,p),Cf(e,t,p)}catch(E){Bl(e,t,E)}finally{c!==null&&d.types!==null&&(c.types=d.types),M.T=c}}else try{c=n(o,i),Cf(e,t,c)}catch(E){Bl(e,t,E)}}function Cf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){xf(e,t,i)},function(i){return Bl(e,t,i)}):xf(e,t,n)}function xf(e,t,n){t.status="fulfilled",t.value=n,wf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bf(e,n)))}function Bl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,wf(t),t=t.next;while(t!==i)}e.action=null}function wf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sf(e,t){return t}function kf(e,t){if(de){var n=ke.formState;if(n!==null){e:{var i=ae;if(de){if(Ee){t:{for(var o=Ee,c=Dt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Mt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Ee=Mt(o.nextSibling),i=o.data==="F!";break e}}Dn(i)}i=!1}i&&(t=n[0])}}return n=et(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sf,lastRenderedState:t},n.queue=i,n=Hf.bind(null,ae,i),i.dispatch=n,i=Ol(!1),c=Pl.bind(null,ae,!1,i.queue),i=et(),o={state:t,dispatch:null,action:e,pending:null},i.queue=o,n=Cv.bind(null,ae,o,c,n),o.dispatch=n,i.memoizedState=e,[t,n,!1]}function Tf(e){var t=Ue();return Ef(t,Ce,e)}function Ef(e,t,n){if(t=_l(e,t,Sf)[0],e=ps(on)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Xi(t)}catch(d){throw d===Ka?rs:d}else i=t;t=Ue();var o=t.queue,c=o.dispatch;return n!==t.memoizedState&&(ae.flags|=2048,Wa(9,{destroy:void 0},xv.bind(null,o,n),null)),[i,c,e]}function xv(e,t){e.action=t}function Af(e){var t=Ue(),n=Ce;if(n!==null)return Ef(t,n,e);Ue(),t=t.memoizedState,n=Ue();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Wa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ae.updateQueue,t===null&&(t=hs(),ae.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Rf(){return Ue().memoizedState}function gs(e,t,n,i){var o=et();ae.flags|=e,o.memoizedState=Wa(1|t,{destroy:void 0},n,i===void 0?null:i)}function ys(e,t,n,i){var o=Ue();i=i===void 0?null:i;var c=o.memoizedState.inst;Ce!==null&&i!==null&&El(i,Ce.memoizedState.deps)?o.memoizedState=Wa(t,c,n,i):(ae.flags|=e,o.memoizedState=Wa(1|t,c,n,i))}function Df(e,t){gs(8390656,8,e,t)}function Ul(e,t){ys(2048,8,e,t)}function wv(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=hs(),ae.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function If(e){var t=Ue().memoizedState;return wv({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Mf(e,t){return ys(4,2,e,t)}function _f(e,t){return ys(4,4,e,t)}function Nf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Of(e,t,n){n=n!=null?n.concat([e]):null,ys(4,4,Nf.bind(null,t,e),n)}function zl(){}function Bf(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&El(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Uf(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&El(t,i[1]))return i[0];if(i=e(),va){kn(!0);try{e()}finally{kn(!1)}}return n.memoizedState=[i,t],i}function Ll(e,t,n){return n===void 0||(sn&1073741824)!==0&&(le&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=zh(),ae.lanes|=e,Ln|=e,n)}function zf(e,t,n,i){return ft(n,t)?n:Qa.current!==null?(e=Ll(e,n,i),ft(e,t)||(qe=!0),e):(sn&42)===0||(sn&1073741824)!==0&&(le&261930)===0?(qe=!0,e.memoizedState=n):(e=zh(),ae.lanes|=e,Ln|=e,t)}function Lf(e,t,n,i,o){var c=L.p;L.p=c!==0&&8>c?c:8;var d=M.T,p={};M.T=p,Pl(e,!1,t,n);try{var b=o(),E=M.S;if(E!==null&&E(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var I=yv(b,i);Qi(e,t,I,vt(e))}else Qi(e,t,i,vt(e))}catch(N){Qi(e,t,{then:function(){},status:"rejected",reason:N},vt())}finally{L.p=c,d!==null&&p.types!==null&&(d.types=p.types),M.T=d}}function Sv(){}function jl(e,t,n,i){if(e.tag!==5)throw Error(l(476));var o=jf(e).queue;Lf(e,o,t,Z,n===null?Sv:function(){return qf(e),n(i)})}function jf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:Z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qf(e){var t=jf(e);t.next===null&&(t=e.alternate.memoizedState),Qi(e,t.next.queue,{},vt())}function ql(){return Ke(fr)}function Pf(){return Ue().memoizedState}function Ff(){return Ue().memoizedState}function kv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=vt();e=_n(n);var i=Nn(t,e,n);i!==null&&(lt(i,t,n),Gi(i,t,n)),t={cache:pl()},e.payload=t;return}t=t.return}}function Tv(e,t,n){var i=vt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vs(e)?Gf(t,n):(n=il(e,t,n,i),n!==null&&(lt(n,e,i),Vf(n,t,i)))}function Hf(e,t,n){var i=vt();Qi(e,t,n,i)}function Qi(e,t,n,i){var o={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vs(e))Gf(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,p=c(d,n);if(o.hasEagerState=!0,o.eagerState=p,ft(p,d))return Wr(e,t,o,0),ke===null&&Jr(),!1}catch{}finally{}if(n=il(e,t,o,i),n!==null)return lt(n,e,i),Vf(n,t,i),!0}return!1}function Pl(e,t,n,i){if(i={lane:2,revertLane:bc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},vs(e)){if(t)throw Error(l(479))}else t=il(e,n,i,2),t!==null&&lt(t,e,2)}function vs(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Gf(e,t){$a=ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vf(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Qu(e,n)}}var $i={readContext:Ke,use:ms,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};$i.useEffectEvent=Me;var Yf={readContext:Ke,use:ms,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Df,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gs(4194308,4,Nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){gs(4,2,e,t)},useMemo:function(e,t){var n=et();t=t===void 0?null:t;var i=e();if(va){kn(!0);try{e()}finally{kn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=et();if(n!==void 0){var o=n(t);if(va){kn(!0);try{n(t)}finally{kn(!1)}}}else o=t;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=Tv.bind(null,ae,e),[i.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=Ol(e);var t=e.queue,n=Hf.bind(null,ae,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zl,useDeferredValue:function(e,t){var n=et();return Ll(n,e,t)},useTransition:function(){var e=Ol(!1);return e=Lf.bind(null,ae,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ae,o=et();if(de){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),ke===null)throw Error(l(349));(le&127)!==0||hf(i,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,Df(pf.bind(null,i,c,e),[e]),i.flags|=2048,Wa(9,{destroy:void 0},mf.bind(null,i,c,n,t),null),n},useId:function(){var e=et(),t=ke.identifierPrefix;if(de){var n=Vt,i=Gt;n=(i&~(1<<32-dt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=fs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=vv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ql,useFormState:kf,useActionState:kf,useOptimistic:function(e){var t=et();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Pl.bind(null,ae,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ml,useCacheRefresh:function(){return et().memoizedState=kv.bind(null,ae)},useEffectEvent:function(e){var t=et(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Fl={readContext:Ke,use:ms,useCallback:Bf,useContext:Ke,useEffect:Ul,useImperativeHandle:Of,useInsertionEffect:Mf,useLayoutEffect:_f,useMemo:Uf,useReducer:ps,useRef:Rf,useState:function(){return ps(on)},useDebugValue:zl,useDeferredValue:function(e,t){var n=Ue();return zf(n,Ce.memoizedState,e,t)},useTransition:function(){var e=ps(on)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:ff,useId:Pf,useHostTransitionStatus:ql,useFormState:Tf,useActionState:Tf,useOptimistic:function(e,t){var n=Ue();return vf(n,Ce,e,t)},useMemoCache:Ml,useCacheRefresh:Ff};Fl.useEffectEvent=If;var Kf={readContext:Ke,use:ms,useCallback:Bf,useContext:Ke,useEffect:Ul,useImperativeHandle:Of,useInsertionEffect:Mf,useLayoutEffect:_f,useMemo:Uf,useReducer:Nl,useRef:Rf,useState:function(){return Nl(on)},useDebugValue:zl,useDeferredValue:function(e,t){var n=Ue();return Ce===null?Ll(n,e,t):zf(n,Ce.memoizedState,e,t)},useTransition:function(){var e=Nl(on)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:ff,useId:Pf,useHostTransitionStatus:ql,useFormState:Af,useActionState:Af,useOptimistic:function(e,t){var n=Ue();return Ce!==null?vf(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ml,useCacheRefresh:Ff};Kf.useEffectEvent=If;function Hl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gl={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=vt(),o=_n(i);o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(lt(t,e,i),Gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=vt(),o=_n(i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(lt(t,e,i),Gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),i=_n(n);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,n),t!==null&&(lt(t,e,n),Gi(t,e,n))}};function Xf(e,t,n,i,o,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,d):t.prototype&&t.prototype.isPureReactComponent?!Ui(n,i)||!Ui(o,c):!0}function Qf(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Gl.enqueueReplaceState(t,t.state,null)}function ba(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function $f(e){$r(e)}function Jf(e){console.error(e)}function Wf(e){$r(e)}function bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Zf(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Vl(e,t,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){bs(e,t)},n}function eh(e){return e=_n(e),e.tag=3,e}function th(e,t,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;e.payload=function(){return o(c)},e.callback=function(){Zf(t,n,i)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Zf(t,n,i),typeof o!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})})}function Ev(e,t,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,o,!0),n=mt.current,n!==null){switch(n.tag){case 31:case 13:return It===null?Ms():n.alternate===null&&_e===0&&(_e=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===ss?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),gc(e,i,o)),!1;case 22:return n.flags|=65536,i===ss?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),gc(e,i,o)),!1}throw Error(l(435,n.tag))}return gc(e,i,o),Ms(),!1}if(de)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,i!==ul&&(e=Error(l(422),{cause:i}),ji(Et(e,n)))):(i!==ul&&(t=Error(l(423),{cause:i}),ji(Et(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=Et(i,n),o=Vl(e.stateNode,i,o),xl(e,o),_e!==4&&(_e=2)),!1;var c=Error(l(520),{cause:i});if(c=Et(c,n),ir===null?ir=[c]:ir.push(c),_e!==4&&(_e=2),t===null)return!0;i=Et(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Vl(n.stateNode,i,e),xl(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(jn===null||!jn.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=eh(o),th(o,e,n,i),xl(n,o),!1}n=n.return}while(n!==null);return!1}var Yl=Error(l(461)),qe=!1;function Xe(e,t,n,i){t.child=e===null?rf(t,null,n,i):ya(t,e.child,n,i)}function nh(e,t,n,i,o){n=n.render;var c=t.ref;if("ref"in i){var d={};for(var p in i)p!=="ref"&&(d[p]=i[p])}else d=i;return ha(t),i=Al(e,t,n,d,c,o),p=Rl(),e!==null&&!qe?(Dl(e,t,o),ln(e,t,o)):(de&&p&&ll(t),t.flags|=1,Xe(e,t,i,o),t.child)}function ah(e,t,n,i,o){if(e===null){var c=n.type;return typeof c=="function"&&!rl(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,ih(e,t,c,i,o)):(e=es(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!ec(e,o)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ui,n(d,i)&&e.ref===t.ref)return ln(e,t,o)}return t.flags|=1,e=tn(c,i),e.ref=t.ref,e.return=t,t.child=e}function ih(e,t,n,i,o){if(e!==null){var c=e.memoizedProps;if(Ui(c,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=c,ec(e,o))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,ln(e,t,o)}return Kl(e,t,n,i,o)}function rh(e,t,n,i){var o=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~c}else i=0,t.child=null;return sh(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&is(t,c!==null?c.cachePool:null),c!==null?lf(t,c):Sl(),cf(t);else return i=t.lanes=536870912,sh(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(is(t,c.cachePool),lf(t,c),Bn(),t.memoizedState=null):(e!==null&&is(t,null),Sl(),Bn());return Xe(e,t,o,n),t.child}function Ji(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sh(e,t,n,i,o){var c=yl();return c=c===null?null:{parent:Le._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&is(t,null),Sl(),cf(t),e!==null&&Ga(e,t,i,!0),t.childLanes=o,null}function Cs(e,t){return t=ws({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oh(e,t,n){return ya(t,e.child,null,n),e=Cs(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function Av(e,t,n){var i=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(de){if(i.mode==="hidden")return e=Cs(t,i),t.lanes=536870912,Ji(null,e);if(Tl(t),(e=Ee)?(e=bm(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Gt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},n=Hd(e),n.return=t,t.child=n,Ye=t,Ee=null)):e=null,e===null)throw Dn(t);return t.lanes=536870912,null}return Cs(t,i)}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if(Tl(t),o)if(t.flags&256)t.flags&=-257,t=oh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(qe||Ga(e,t,n,!1),o=(n&e.childLanes)!==0,qe||o){if(i=ke,i!==null&&(d=$u(i,n),d!==0&&d!==c.retryLane))throw c.retryLane=d,ca(e,d),lt(i,e,d),Yl;Ms(),t=oh(e,t,n)}else e=c.treeContext,Ee=Mt(d.nextSibling),Ye=t,de=!0,Rn=null,Dt=!1,e!==null&&Yd(t,e),t=Cs(t,i),t.flags|=4096;return t}return e=tn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Kl(e,t,n,i,o){return ha(t),n=Al(e,t,n,i,void 0,o),i=Rl(),e!==null&&!qe?(Dl(e,t,o),ln(e,t,o)):(de&&i&&ll(t),t.flags|=1,Xe(e,t,n,o),t.child)}function lh(e,t,n,i,o,c){return ha(t),t.updateQueue=null,n=df(t,i,n,o),uf(e),i=Rl(),e!==null&&!qe?(Dl(e,t,c),ln(e,t,c)):(de&&i&&ll(t),t.flags|=1,Xe(e,t,n,c),t.child)}function ch(e,t,n,i,o){if(ha(t),t.stateNode===null){var c=qa,d=n.contextType;typeof d=="object"&&d!==null&&(c=Ke(d)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Gl,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},bl(t),d=n.contextType,c.context=typeof d=="object"&&d!==null?Ke(d):qa,c.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Hl(t,n,d,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Gl.enqueueReplaceState(c,c.state,null),Yi(t,i,c,o),Vi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var p=t.memoizedProps,b=ba(n,p);c.props=b;var E=c.context,I=n.contextType;d=qa,typeof I=="object"&&I!==null&&(d=Ke(I));var N=n.getDerivedStateFromProps;I=typeof N=="function"||typeof c.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p||E!==d)&&Qf(t,c,i,d),Mn=!1;var R=t.memoizedState;c.state=R,Yi(t,i,c,o),Vi(),E=t.memoizedState,p||R!==E||Mn?(typeof N=="function"&&(Hl(t,n,N,i),E=t.memoizedState),(b=Mn||Xf(t,n,b,i,R,E,d))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),c.props=i,c.state=E,c.context=d,i=b):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Cl(e,t),d=t.memoizedProps,I=ba(n,d),c.props=I,N=t.pendingProps,R=c.context,E=n.contextType,b=qa,typeof E=="object"&&E!==null&&(b=Ke(E)),p=n.getDerivedStateFromProps,(E=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==N||R!==b)&&Qf(t,c,i,b),Mn=!1,R=t.memoizedState,c.state=R,Yi(t,i,c,o),Vi();var D=t.memoizedState;d!==N||R!==D||Mn||e!==null&&e.dependencies!==null&&ns(e.dependencies)?(typeof p=="function"&&(Hl(t,n,p,i),D=t.memoizedState),(I=Mn||Xf(t,n,I,i,R,D,b)||e!==null&&e.dependencies!==null&&ns(e.dependencies))?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,D,b),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,D,b)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=D),c.props=i,c.state=D,c.context=b,i=I):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,xs(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=ya(t,e.child,null,o),t.child=ya(t,null,n,o)):Xe(e,t,n,o),t.memoizedState=c.state,e=t.child):e=ln(e,t,o),e}function uh(e,t,n,i){return da(),t.flags|=256,Xe(e,t,n,i),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ql(e){return{baseLanes:e,cachePool:Wd()}}function $l(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=yt),e}function dh(e,t,n){var i=t.pendingProps,o=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),d&&(o=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(o?On(t):Bn(),(e=Ee)?(e=bm(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:An!==null?{id:Gt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},n=Hd(e),n.return=t,t.child=n,Ye=t,Ee=null)):e=null,e===null)throw Dn(t);return _c(e)?t.lanes=32:t.lanes=536870912,null}var p=i.children;return i=i.fallback,o?(Bn(),o=t.mode,p=ws({mode:"hidden",children:p},o),i=ua(i,o,n,null),p.return=t,i.return=t,p.sibling=i,t.child=p,i=t.child,i.memoizedState=Ql(n),i.childLanes=$l(e,d,n),t.memoizedState=Xl,Ji(null,i)):(On(t),Jl(t,p))}var b=e.memoizedState;if(b!==null&&(p=b.dehydrated,p!==null)){if(c)t.flags&256?(On(t),t.flags&=-257,t=Wl(e,t,n)):t.memoizedState!==null?(Bn(),t.child=e.child,t.flags|=128,t=null):(Bn(),p=i.fallback,o=t.mode,i=ws({mode:"visible",children:i.children},o),p=ua(p,o,n,null),p.flags|=2,i.return=t,p.return=t,i.sibling=p,t.child=i,ya(t,e.child,null,n),i=t.child,i.memoizedState=Ql(n),i.childLanes=$l(e,d,n),t.memoizedState=Xl,t=Ji(null,i));else if(On(t),_c(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var E=d.dgst;d=E,i=Error(l(419)),i.stack="",i.digest=d,ji({value:i,source:null,stack:null}),t=Wl(e,t,n)}else if(qe||Ga(e,t,n,!1),d=(n&e.childLanes)!==0,qe||d){if(d=ke,d!==null&&(i=$u(d,n),i!==0&&i!==b.retryLane))throw b.retryLane=i,ca(e,i),lt(d,e,i),Yl;Mc(p)||Ms(),t=Wl(e,t,n)}else Mc(p)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Ee=Mt(p.nextSibling),Ye=t,de=!0,Rn=null,Dt=!1,e!==null&&Yd(t,e),t=Jl(t,i.children),t.flags|=4096);return t}return o?(Bn(),p=i.fallback,o=t.mode,b=e.child,E=b.sibling,i=tn(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,E!==null?p=tn(E,p):(p=ua(p,o,n,null),p.flags|=2),p.return=t,i.return=t,i.sibling=p,t.child=i,Ji(null,i),i=t.child,p=e.child.memoizedState,p===null?p=Ql(n):(o=p.cachePool,o!==null?(b=Le._currentValue,o=o.parent!==b?{parent:b,pool:b}:o):o=Wd(),p={baseLanes:p.baseLanes|n,cachePool:o}),i.memoizedState=p,i.childLanes=$l(e,d,n),t.memoizedState=Xl,Ji(e.child,i)):(On(t),n=e.child,e=n.sibling,n=tn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Jl(e,t){return t=ws({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ws(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function Wl(e,t,n){return ya(t,e.child,null,n),e=Jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),hl(e.return,t,n)}function Zl(e,t,n,i,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o,treeForkCount:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=o,d.treeForkCount=c)}function hh(e,t,n){var i=t.pendingProps,o=i.revealOrder,c=i.tail;i=i.children;var d=Be.current,p=(d&2)!==0;if(p?(d=d&1|2,t.flags|=128):d&=1,j(Be,d),Xe(e,t,i,n),i=de?Li:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,n,t);else if(e.tag===19)fh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&us(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zl(t,!1,o,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&us(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zl(t,!0,n,null,c,i);break;case"together":Zl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ns(e)))}function Rv(e,t,n){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),In(t,Le,e.memoizedState.cache),da();break;case 27:case 5:Si(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:In(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(On(t),t.flags|=128,null):(n&t.child.childLanes)!==0?dh(e,t,n):(On(t),e=ln(e,t,n),e!==null?e.sibling:null);On(t);break;case 19:var o=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ga(e,t,n,!1),i=(n&t.childLanes)!==0),o){if(i)return hh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),j(Be,Be.current),i)break;return null;case 22:return t.lanes=0,rh(e,t,n,t.pendingProps);case 24:In(t,Le,e.memoizedState.cache)}return ln(e,t,n)}function mh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!ec(e,n)&&(t.flags&128)===0)return qe=!1,Rv(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,de&&(t.flags&1048576)!==0&&Vd(t,Li,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=pa(t.elementType),t.type=e,typeof e=="function")rl(e)?(i=ba(e,i),t.tag=1,t=ch(null,t,e,i,n)):(t.tag=0,t=Kl(null,t,e,i,n));else{if(e!=null){var o=e.$$typeof;if(o===X){t.tag=11,t=nh(null,t,e,i,n);break e}else if(o===$){t.tag=14,t=ah(null,t,e,i,n);break e}}throw t=wt(e)||e,Error(l(306,t,""))}}return t;case 0:return Kl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,o=ba(i,t.pendingProps),ch(e,t,i,o,n);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var c=t.memoizedState;o=c.element,Cl(e,t),Yi(t,i,null,n);var d=t.memoizedState;if(i=d.cache,In(t,Le,i),i!==c.cache&&ml(t,[Le],n,!0),Vi(),i=d.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=uh(e,t,i,n);break e}else if(i!==o){o=Et(Error(l(424)),t),ji(o),t=uh(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=Mt(e.firstChild),Ye=t,de=!0,Rn=null,Dt=!0,n=rf(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(da(),i===o){t=ln(e,t,n);break e}Xe(e,t,i,n)}t=t.child}return t;case 26:return xs(e,t),e===null?(n=Tm(t.type,null,t.pendingProps,null))?t.memoizedState=n:de||(n=t.type,e=t.pendingProps,i=Ls(re.current).createElement(n),i[Ve]=t,i[nt]=e,Qe(i,n,e),He(i),t.stateNode=i):t.memoizedState=Tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Si(t),e===null&&de&&(i=t.stateNode=wm(t.type,t.pendingProps,re.current),Ye=t,Dt=!0,o=Ee,Hn(t.type)?(Nc=o,Ee=Mt(i.firstChild)):Ee=o),Xe(e,t,t.pendingProps.children,n),xs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((o=i=Ee)&&(i=ib(i,t.type,t.pendingProps,Dt),i!==null?(t.stateNode=i,Ye=t,Ee=Mt(i.firstChild),Dt=!1,o=!0):o=!1),o||Dn(t)),Si(t),o=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,i=c.children,Rc(o,c)?i=null:d!==null&&Rc(o,d)&&(t.flags|=32),t.memoizedState!==null&&(o=Al(e,t,bv,null,null,n),fr._currentValue=o),xs(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&de&&((e=n=Ee)&&(n=rb(n,t.pendingProps,Dt),n!==null?(t.stateNode=n,Ye=t,Ee=null,e=!0):e=!1),e||Dn(t)),null;case 13:return dh(e,t,n);case 4:return Ze(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ya(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return nh(e,t,t.type,t.pendingProps,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,In(t,t.type,i.value),Xe(e,t,i.children,n),t.child;case 9:return o=t.type._context,i=t.pendingProps.children,ha(t),o=Ke(o),i=i(o),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return ah(e,t,t.type,t.pendingProps,n);case 15:return ih(e,t,t.type,t.pendingProps,n);case 19:return hh(e,t,n);case 31:return Av(e,t,n);case 22:return rh(e,t,n,t.pendingProps);case 24:return ha(t),i=Ke(Le),e===null?(o=yl(),o===null&&(o=ke,c=pl(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),t.memoizedState={parent:i,cache:o},bl(t),In(t,Le,o)):((e.lanes&n)!==0&&(Cl(e,t),Yi(t,null,null,n),Vi()),o=e.memoizedState,c=t.memoizedState,o.parent!==i?(o={parent:i,cache:i},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),In(t,Le,i)):(i=c.cache,In(t,Le,i),i!==o.cache&&ml(t,[Le],n,!0))),Xe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function cn(e){e.flags|=4}function tc(e,t,n,i,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Ph())e.flags|=8192;else throw ga=ss,vl}else e.flags&=-16777217}function ph(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Im(t))if(Ph())e.flags|=8192;else throw ga=ss,vl}function Ss(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ku():536870912,e.lanes|=t,ni|=t)}function Wi(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Dv(e,t,n){var i=t.pendingProps;switch(cl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),rn(Le),Oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dl())),Ae(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(cn(t),c!==null?(Ae(t),ph(t,c)):(Ae(t),tc(t,o,null,i,n))):c?c!==e.memoizedState?(cn(t),Ae(t),ph(t,c)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&cn(t),Ae(t),tc(t,o,e,i,n)),null;case 27:if(Or(t),n=re.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&cn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ae(t),null}e=Y.current,Ha(t)?Kd(t):(e=wm(o,i,n),t.stateNode=e,cn(t))}return Ae(t),null;case 5:if(Or(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&cn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ae(t),null}if(c=Y.current,Ha(t))Kd(t);else{var d=Ls(re.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?d.createElement(o,{is:i.is}):d.createElement(o)}}c[Ve]=t,c[nt]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=c;e:switch(Qe(c,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&cn(t)}}return Ae(t),tc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&cn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=re.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,o=Ye,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||dm(e.nodeValue,n)),e||Dn(t,!0)}else e=Ls(e).createTextNode(i),e[Ve]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ha(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Ve]=t}else da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Ha(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Ve]=t}else da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else o=dl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ss(t,t.updateQueue),Ae(t),null);case 4:return Oe(),e===null&&Sc(t.stateNode.containerInfo),Ae(t),null;case 10:return rn(t.type),Ae(t),null;case 19:if(B(Be),i=t.memoizedState,i===null)return Ae(t),null;if(o=(t.flags&128)!==0,c=i.rendering,c===null)if(o)Wi(i,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=us(e),c!==null){for(t.flags|=128,Wi(i,!1),e=c.updateQueue,t.updateQueue=e,Ss(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fd(n,e),n=n.sibling;return j(Be,Be.current&1|2),de&&nn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ct()>Rs&&(t.flags|=128,o=!0,Wi(i,!1),t.lanes=4194304)}else{if(!o)if(e=us(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Ss(t,e),Wi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!de)return Ae(t),null}else 2*ct()-i.renderingStartTime>Rs&&n!==536870912&&(t.flags|=128,o=!0,Wi(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ct(),e.sibling=null,n=Be.current,j(Be,o?n&1|2:n&1),de&&nn(t,i.treeForkCount),e):(Ae(t),null);case 22:case 23:return pt(t),kl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&Ss(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&B(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),rn(Le),Ae(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Iv(e,t){switch(cl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(Le),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Or(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(l(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Be),null;case 4:return Oe(),null;case 10:return rn(t.type),null;case 22:case 23:return pt(t),kl(),e!==null&&B(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return rn(Le),null;case 25:return null;default:return null}}function gh(e,t){switch(cl(t),t.tag){case 3:rn(Le),Oe();break;case 26:case 27:case 5:Or(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:B(Be);break;case 10:rn(t.type);break;case 22:case 23:pt(t),kl(),e!==null&&B(ma);break;case 24:rn(Le)}}function Zi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var c=n.create,d=n.inst;i=c(),d.destroy=i}n=n.next}while(n!==o)}}catch(p){ve(t,t.return,p)}}function Un(e,t,n){try{var i=t.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&e)===e){var d=i.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,o=t;var b=n,E=p;try{E()}catch(I){ve(o,b,I)}}}i=i.next}while(i!==c)}}catch(I){ve(t,t.return,I)}}function yh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{of(t,n)}catch(i){ve(e,e.return,i)}}}function vh(e,t,n){n.props=ba(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ve(e,t,i)}}function er(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ve(e,t,o)}}function Yt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){ve(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){ve(e,t,o)}else n.current=null}function bh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){ve(e,e.return,o)}}function nc(e,t,n){try{var i=e.stateNode;Wv(i,e.type,n,t),i[nt]=t}catch(o){ve(e,e.return,o)}}function Ch(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hn(e.type)||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(i!==4&&(i===27&&Hn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}function ks(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Hn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function xh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Qe(t,i,n),t[Ve]=e,t[nt]=n}catch(c){ve(e,e.return,c)}}var un=!1,Pe=!1,rc=!1,wh=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Mv(e,t){if(e=e.containerInfo,Ec=Vs,e=Nd(e),Wo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var d=0,p=-1,b=-1,E=0,I=0,N=e,R=null;t:for(;;){for(var D;N!==n||o!==0&&N.nodeType!==3||(p=d+o),N!==c||i!==0&&N.nodeType!==3||(b=d+i),N.nodeType===3&&(d+=N.nodeValue.length),(D=N.firstChild)!==null;)R=N,N=D;for(;;){if(N===e)break t;if(R===n&&++E===o&&(p=d),R===c&&++I===i&&(b=d),(D=N.nextSibling)!==null)break;N=R,R=N.parentNode}N=D}n=p===-1||b===-1?null:{start:p,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ac={focusedElem:e,selectionRange:n},Vs=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,o=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var V=ba(n.type,o);e=i.getSnapshotBeforeUpdate(V,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(J){ve(n,n.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ic(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ic(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Sh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fn(e,n),i&4&&Zi(5,n);break;case 1:if(fn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){ve(n,n.return,d)}else{var o=ba(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){ve(n,n.return,d)}}i&64&&yh(n),i&512&&er(n,n.return);break;case 3:if(fn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{of(e,t)}catch(d){ve(n,n.return,d)}}break;case 27:t===null&&i&4&&xh(n);case 26:case 5:fn(e,n),t===null&&i&4&&bh(n),i&512&&er(n,n.return);break;case 12:fn(e,n);break;case 31:fn(e,n),i&4&&Eh(e,n);break;case 13:fn(e,n),i&4&&Ah(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qv.bind(null,n),sb(e,n))));break;case 22:if(i=n.memoizedState!==null||un,!i){t=t!==null&&t.memoizedState!==null||Pe,o=un;var c=Pe;un=i,(Pe=t)&&!c?hn(e,n,(n.subtreeFlags&8772)!==0):fn(e,n),un=o,Pe=c}break;case 30:break;default:fn(e,n)}}function kh(e){var t=e.alternate;t!==null&&(e.alternate=null,kh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,it=!1;function dn(e,t,n){for(n=n.child;n!==null;)Th(e,t,n),n=n.sibling}function Th(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 26:Pe||Yt(n,t),dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||Yt(n,t);var i=Re,o=it;Hn(n.type)&&(Re=n.stateNode,it=!1),dn(e,t,n),cr(n.stateNode),Re=i,it=o;break;case 5:Pe||Yt(n,t);case 6:if(i=Re,o=it,Re=null,dn(e,t,n),Re=i,it=o,Re!==null)if(it)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(c){ve(n,t,c)}else try{Re.removeChild(n.stateNode)}catch(c){ve(n,t,c)}break;case 18:Re!==null&&(it?(e=Re,ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ui(e)):ym(Re,n.stateNode));break;case 4:i=Re,o=it,Re=n.stateNode.containerInfo,it=!0,dn(e,t,n),Re=i,it=o;break;case 0:case 11:case 14:case 15:Un(2,n,t),Pe||Un(4,n,t),dn(e,t,n);break;case 1:Pe||(Yt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&vh(n,t,i)),dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:Pe=(i=Pe)||n.memoizedState!==null,dn(e,t,n),Pe=i;break;default:dn(e,t,n)}}function Eh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ui(e)}catch(n){ve(t,t.return,n)}}}function Ah(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ui(e)}catch(n){ve(t,t.return,n)}}function _v(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wh),t;default:throw Error(l(435,e.tag))}}function Ts(e,t){var n=_v(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var o=Pv.bind(null,e,i);i.then(o,o)}})}function rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],c=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 27:if(Hn(p.type)){Re=p.stateNode,it=!1;break e}break;case 5:Re=p.stateNode,it=!1;break e;case 3:case 4:Re=p.stateNode.containerInfo,it=!0;break e}p=p.return}if(Re===null)throw Error(l(160));Th(c,d,o),Re=null,it=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rh(t,e),t=t.sibling}var Bt=null;function Rh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),st(e),i&4&&(Un(3,e,e.return),Zi(3,e),Un(5,e,e.return));break;case 1:rt(t,e),st(e),i&512&&(Pe||n===null||Yt(n,n.return)),i&64&&un&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=Bt;if(rt(t,e),st(e),i&512&&(Pe||n===null||Yt(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ai]||c[Ve]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(i),o.head.insertBefore(c,o.querySelector("head > title"))),Qe(c,i,n),c[Ve]=e,He(c),i=c;break e;case"link":var d=Rm("link","href",o).get(i+(n.href||""));if(d){for(var p=0;p<d.length;p++)if(c=d[p],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(p,1);break t}}c=o.createElement(i),Qe(c,i,n),o.head.appendChild(c);break;case"meta":if(d=Rm("meta","content",o).get(i+(n.content||""))){for(p=0;p<d.length;p++)if(c=d[p],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(p,1);break t}}c=o.createElement(i),Qe(c,i,n),o.head.appendChild(c);break;default:throw Error(l(468,i))}c[Ve]=e,He(c),i=c}e.stateNode=i}else Dm(o,e.type,e.stateNode);else e.stateNode=Am(o,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?Dm(o,e.type,e.stateNode):Am(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&nc(e,e.memoizedProps,n.memoizedProps)}break;case 27:rt(t,e),st(e),i&512&&(Pe||n===null||Yt(n,n.return)),n!==null&&i&4&&nc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(rt(t,e),st(e),i&512&&(Pe||n===null||Yt(n,n.return)),e.flags&32){o=e.stateNode;try{Na(o,"")}catch(V){ve(e,e.return,V)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,nc(e,o,n!==null?n.memoizedProps:o)),i&1024&&(rc=!0);break;case 6:if(rt(t,e),st(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(V){ve(e,e.return,V)}}break;case 3:if(Ps=null,o=Bt,Bt=js(t.containerInfo),rt(t,e),Bt=o,st(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(V){ve(e,e.return,V)}rc&&(rc=!1,Dh(e));break;case 4:i=Bt,Bt=js(e.stateNode.containerInfo),rt(t,e),st(e),Bt=i;break;case 12:rt(t,e),st(e);break;case 31:rt(t,e),st(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ts(e,i)));break;case 13:rt(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(As=ct()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ts(e,i)));break;case 22:o=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,E=un,I=Pe;if(un=E||o,Pe=I||b,rt(t,e),Pe=I,un=E,st(e),i&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||b||un||Pe||Ca(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(c=b.stateNode,o)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=b.stateNode;var N=b.memoizedProps.style,R=N!=null&&N.hasOwnProperty("display")?N.display:null;p.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(V){ve(b,b.return,V)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=o?"":b.memoizedProps}catch(V){ve(b,b.return,V)}}}else if(t.tag===18){if(n===null){b=t;try{var D=b.stateNode;o?vm(D,!0):vm(b.stateNode,!1)}catch(V){ve(b,b.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ts(e,n))));break;case 19:rt(t,e),st(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ts(e,i)));break;case 30:break;case 21:break;default:rt(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ch(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var o=n.stateNode,c=ac(e);ks(e,c,o);break;case 5:var d=n.stateNode;n.flags&32&&(Na(d,""),n.flags&=-33);var p=ac(e);ks(e,p,d);break;case 3:case 4:var b=n.stateNode.containerInfo,E=ac(e);ic(e,E,b);break;default:throw Error(l(161))}}catch(I){ve(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sh(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Un(4,t,t.return),Ca(t);break;case 1:Yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vh(t,t.return,n),Ca(t);break;case 27:cr(t.stateNode);case 26:case 5:Yt(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function hn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,o=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:hn(o,c,n),Zi(4,c);break;case 1:if(hn(o,c,n),i=c,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(E){ve(i,i.return,E)}if(i=c,o=i.updateQueue,o!==null){var p=i.stateNode;try{var b=o.shared.hiddenCallbacks;if(b!==null)for(o.shared.hiddenCallbacks=null,o=0;o<b.length;o++)sf(b[o],p)}catch(E){ve(i,i.return,E)}}n&&d&64&&yh(c),er(c,c.return);break;case 27:xh(c);case 26:case 5:hn(o,c,n),n&&i===null&&d&4&&bh(c),er(c,c.return);break;case 12:hn(o,c,n);break;case 31:hn(o,c,n),n&&d&4&&Eh(o,c);break;case 13:hn(o,c,n),n&&d&4&&Ah(o,c);break;case 22:c.memoizedState===null&&hn(o,c,n),er(c,c.return);break;case 30:break;default:hn(o,c,n)}t=t.sibling}}function sc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qi(n))}function oc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qi(e))}function Ut(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ih(e,t,n,i),t=t.sibling}function Ih(e,t,n,i){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,n,i),o&2048&&Zi(9,t);break;case 1:Ut(e,t,n,i);break;case 3:Ut(e,t,n,i),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qi(e)));break;case 12:if(o&2048){Ut(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,p=c.onPostCommit;typeof p=="function"&&p(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ve(t,t.return,b)}}else Ut(e,t,n,i);break;case 31:Ut(e,t,n,i);break;case 13:Ut(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?Ut(e,t,n,i):tr(e,t):c._visibility&2?Ut(e,t,n,i):(c._visibility|=2,Za(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),o&2048&&sc(d,t);break;case 24:Ut(e,t,n,i),o&2048&&oc(t.alternate,t);break;default:Ut(e,t,n,i)}}function Za(e,t,n,i,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,d=t,p=n,b=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Za(c,d,p,b,o),Zi(8,d);break;case 23:break;case 22:var I=d.stateNode;d.memoizedState!==null?I._visibility&2?Za(c,d,p,b,o):tr(c,d):(I._visibility|=2,Za(c,d,p,b,o)),o&&E&2048&&sc(d.alternate,d);break;case 24:Za(c,d,p,b,o),o&&E&2048&&oc(d.alternate,d);break;default:Za(c,d,p,b,o)}t=t.sibling}}function tr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,o=i.flags;switch(i.tag){case 22:tr(n,i),o&2048&&sc(i.alternate,i);break;case 24:tr(n,i),o&2048&&oc(i.alternate,i);break;default:tr(n,i)}t=t.sibling}}var nr=8192;function ei(e,t,n){if(e.subtreeFlags&nr)for(e=e.child;e!==null;)Mh(e,t,n),e=e.sibling}function Mh(e,t,n){switch(e.tag){case 26:ei(e,t,n),e.flags&nr&&e.memoizedState!==null&&vb(n,Bt,e.memoizedState,e.memoizedProps);break;case 5:ei(e,t,n);break;case 3:case 4:var i=Bt;Bt=js(e.stateNode.containerInfo),ei(e,t,n),Bt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=nr,nr=16777216,ei(e,t,n),nr=i):ei(e,t,n));break;default:ei(e,t,n)}}function _h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ge=i,Oh(i,e)}_h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nh(e),e=e.sibling}function Nh(e){switch(e.tag){case 0:case 11:case 15:ar(e),e.flags&2048&&Un(9,e,e.return);break;case 3:ar(e);break;case 12:ar(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Es(e)):ar(e);break;default:ar(e)}}function Es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ge=i,Oh(i,e)}_h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Un(8,t,t.return),Es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Es(t));break;default:Es(t)}e=e.sibling}}function Oh(e,t){for(;Ge!==null;){var n=Ge;switch(n.tag){case 0:case 11:case 15:Un(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:qi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ge=i;else e:for(n=e;Ge!==null;){i=Ge;var o=i.sibling,c=i.return;if(kh(i),i===n){Ge=null;break e}if(o!==null){o.return=c,Ge=o;break e}Ge=c}}}var Nv={getCacheForType:function(e){var t=Ke(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ke(Le).controller.signal}},Ov=typeof WeakMap=="function"?WeakMap:Map,pe=0,ke=null,se=null,le=0,ye=0,gt=null,zn=!1,ti=!1,lc=!1,mn=0,_e=0,Ln=0,xa=0,cc=0,yt=0,ni=0,ir=null,ot=null,uc=!1,As=0,Bh=0,Rs=1/0,Ds=null,jn=null,Fe=0,qn=null,ai=null,pn=0,dc=0,fc=null,Uh=null,rr=0,hc=null;function vt(){return(pe&2)!==0&&le!==0?le&-le:M.T!==null?bc():Ju()}function zh(){if(yt===0)if((le&536870912)===0||de){var e=zr;zr<<=1,(zr&3932160)===0&&(zr=262144),yt=e}else yt=536870912;return e=mt.current,e!==null&&(e.flags|=32),yt}function lt(e,t,n){(e===ke&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(ii(e,0),Pn(e,le,yt,!1)),Ei(e,n),((pe&2)===0||e!==ke)&&(e===ke&&((pe&2)===0&&(xa|=n),_e===4&&Pn(e,le,yt,!1)),Kt(e))}function Lh(e,t,n){if((pe&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ti(e,t),o=i?zv(e,t):pc(e,t,!0),c=i;do{if(o===0){ti&&!i&&Pn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Bv(n)){o=pc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var p=e;o=ir;var b=p.current.memoizedState.isDehydrated;if(b&&(ii(p,d).flags|=256),d=pc(p,d,!1),d!==2){if(lc&&!b){p.errorRecoveryDisabledLanes|=c,xa|=c,o=4;break e}c=ot,ot=o,c!==null&&(ot===null?ot=c:ot.push.apply(ot,c))}o=d}if(c=!1,o!==2)continue}}if(o===1){ii(e,0),Pn(e,t,0,!0);break}e:{switch(i=e,c=o,c){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Pn(i,t,yt,!zn);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(o=As+300-ct(),10<o)){if(Pn(i,t,yt,!zn),jr(i,0,!0)!==0)break e;pn=t,i.timeoutHandle=pm(jh.bind(null,i,n,ot,Ds,uc,t,yt,xa,ni,zn,c,"Throttled",-0,0),o);break e}jh(i,n,ot,Ds,uc,t,yt,xa,ni,zn,c,null,-0,0)}}break}while(!0);Kt(e)}function jh(e,t,n,i,o,c,d,p,b,E,I,N,R,D){if(e.timeoutHandle=-1,N=t.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Mh(t,c,N);var V=(c&62914560)===c?As-ct():(c&4194048)===c?Bh-ct():0;if(V=bb(N,V),V!==null){pn=c,e.cancelPendingCommit=V(Kh.bind(null,e,t,c,n,i,o,d,p,b,I,N,null,R,D)),Pn(e,c,d,!E);return}}Kh(e,t,c,n,i,o,d,p,b)}function Bv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],c=o.getSnapshot;o=o.value;try{if(!ft(c(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t,n,i){t&=~cc,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var o=t;0<o;){var c=31-dt(o),d=1<<c;i[c]=-1,o&=~d}n!==0&&Xu(e,n,t)}function Is(){return(pe&6)===0?(sr(0),!1):!0}function mc(){if(se!==null){if(ye===0)var e=se.return;else e=se,an=fa=null,Il(e),Xa=null,Fi=0,e=se;for(;e!==null;)gh(e.alternate,e),e=e.return;se=null}}function ii(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,tb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),pn=0,mc(),ke=e,se=n=tn(e.current,null),le=t,ye=0,gt=null,zn=!1,ti=Ti(e,t),lc=!1,ni=yt=cc=xa=Ln=_e=0,ot=ir=null,uc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var o=31-dt(i),c=1<<o;t|=e[o],i&=~c}return mn=t,Jr(),n}function qh(e,t){ae=null,M.H=$i,t===Ka||t===rs?(t=tf(),ye=3):t===vl?(t=tf(),ye=4):ye=t===Yl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,se===null&&(_e=1,bs(e,Et(t,e.current)))}function Ph(){var e=mt.current;return e===null?!0:(le&4194048)===le?It===null:(le&62914560)===le||(le&536870912)!==0?e===It:!1}function Fh(){var e=M.H;return M.H=$i,e===null?$i:e}function Hh(){var e=M.A;return M.A=Nv,e}function Ms(){_e=4,zn||(le&4194048)!==le&&mt.current!==null||(ti=!0),(Ln&134217727)===0&&(xa&134217727)===0||ke===null||Pn(ke,le,yt,!1)}function pc(e,t,n){var i=pe;pe|=2;var o=Fh(),c=Hh();(ke!==e||le!==t)&&(Ds=null,ii(e,t)),t=!1;var d=_e;e:do try{if(ye!==0&&se!==null){var p=se,b=gt;switch(ye){case 8:mc(),d=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var E=ye;if(ye=0,gt=null,ri(e,p,b,E),n&&ti){d=0;break e}break;default:E=ye,ye=0,gt=null,ri(e,p,b,E)}}Uv(),d=_e;break}catch(I){qh(e,I)}while(!0);return t&&e.shellSuspendCounter++,an=fa=null,pe=i,M.H=o,M.A=c,se===null&&(ke=null,le=0,Jr()),d}function Uv(){for(;se!==null;)Gh(se)}function zv(e,t){var n=pe;pe|=2;var i=Fh(),o=Hh();ke!==e||le!==t?(Ds=null,Rs=ct()+500,ii(e,t)):ti=Ti(e,t);e:do try{if(ye!==0&&se!==null){t=se;var c=gt;t:switch(ye){case 1:ye=0,gt=null,ri(e,t,c,1);break;case 2:case 9:if(Zd(c)){ye=0,gt=null,Vh(t);break}t=function(){ye!==2&&ye!==9||ke!==e||(ye=7),Kt(e)},c.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:Zd(c)?(ye=0,gt=null,Vh(t)):(ye=0,gt=null,ri(e,t,c,7));break;case 5:var d=null;switch(se.tag){case 26:d=se.memoizedState;case 5:case 27:var p=se;if(d?Im(d):p.stateNode.complete){ye=0,gt=null;var b=p.sibling;if(b!==null)se=b;else{var E=p.return;E!==null?(se=E,_s(E)):se=null}break t}}ye=0,gt=null,ri(e,t,c,5);break;case 6:ye=0,gt=null,ri(e,t,c,6);break;case 8:mc(),_e=6;break e;default:throw Error(l(462))}}Lv();break}catch(I){qh(e,I)}while(!0);return an=fa=null,M.H=i,M.A=o,pe=n,se!==null?0:(ke=null,le=0,Jr(),_e)}function Lv(){for(;se!==null&&!oy();)Gh(se)}function Gh(e){var t=mh(e.alternate,e,mn);e.memoizedProps=e.pendingProps,t===null?_s(e):se=t}function Vh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=lh(n,t,t.pendingProps,t.type,void 0,le);break;case 11:t=lh(n,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:Il(t);default:gh(n,t),t=se=Fd(t,mn),t=mh(n,t,mn)}e.memoizedProps=e.pendingProps,t===null?_s(e):se=t}function ri(e,t,n,i){an=fa=null,Il(t),Xa=null,Fi=0;var o=t.return;try{if(Ev(e,o,t,n,le)){_e=1,bs(e,Et(n,e.current)),se=null;return}}catch(c){if(o!==null)throw se=o,c;_e=1,bs(e,Et(n,e.current)),se=null;return}t.flags&32768?(de||i===1?e=!0:ti||(le&536870912)!==0?e=!1:(zn=e=!0,(i===2||i===9||i===3||i===6)&&(i=mt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Yh(t,e)):_s(t)}function _s(e){var t=e;do{if((t.flags&32768)!==0){Yh(t,zn);return}e=t.return;var n=Dv(t.alternate,t,mn);if(n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);_e===0&&(_e=5)}function Yh(e,t){do{var n=Iv(e.alternate,e);if(n!==null){n.flags&=32767,se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=n}while(e!==null);_e=6,se=null}function Kh(e,t,n,i,o,c,d,p,b){e.cancelPendingCommit=null;do Ns();while(Fe!==0);if((pe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(c=t.lanes|t.childLanes,c|=al,yy(e,n,c,d,p,b),e===ke&&(se=ke=null,le=0),ai=t,qn=e,pn=n,dc=c,fc=o,Uh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fv(Br,function(){return Wh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=M.T,M.T=null,o=L.p,L.p=2,d=pe,pe|=4;try{Mv(e,t,n)}finally{pe=d,L.p=o,M.T=i}}Fe=1,Xh(),Qh(),$h()}}function Xh(){if(Fe===1){Fe=0;var e=qn,t=ai,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var i=L.p;L.p=2;var o=pe;pe|=4;try{Rh(t,e);var c=Ac,d=Nd(e.containerInfo),p=c.focusedElem,b=c.selectionRange;if(d!==p&&p&&p.ownerDocument&&_d(p.ownerDocument.documentElement,p)){if(b!==null&&Wo(p)){var E=b.start,I=b.end;if(I===void 0&&(I=E),"selectionStart"in p)p.selectionStart=E,p.selectionEnd=Math.min(I,p.value.length);else{var N=p.ownerDocument||document,R=N&&N.defaultView||window;if(R.getSelection){var D=R.getSelection(),V=p.textContent.length,J=Math.min(b.start,V),we=b.end===void 0?J:Math.min(b.end,V);!D.extend&&J>we&&(d=we,we=J,J=d);var S=Md(p,J),C=Md(p,we);if(S&&C&&(D.rangeCount!==1||D.anchorNode!==S.node||D.anchorOffset!==S.offset||D.focusNode!==C.node||D.focusOffset!==C.offset)){var T=N.createRange();T.setStart(S.node,S.offset),D.removeAllRanges(),J>we?(D.addRange(T),D.extend(C.node,C.offset)):(T.setEnd(C.node,C.offset),D.addRange(T))}}}}for(N=[],D=p;D=D.parentNode;)D.nodeType===1&&N.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<N.length;p++){var _=N[p];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Vs=!!Ec,Ac=Ec=null}finally{pe=o,L.p=i,M.T=n}}e.current=t,Fe=2}}function Qh(){if(Fe===2){Fe=0;var e=qn,t=ai,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var i=L.p;L.p=2;var o=pe;pe|=4;try{Sh(e,t.alternate,t)}finally{pe=o,L.p=i,M.T=n}}Fe=3}}function $h(){if(Fe===4||Fe===3){Fe=0,ly();var e=qn,t=ai,n=pn,i=Uh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,ai=qn=null,Jh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(jn=null),No(n),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ki,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=M.T,o=L.p,L.p=2,M.T=null;try{for(var c=e.onRecoverableError,d=0;d<i.length;d++){var p=i[d];c(p.value,{componentStack:p.stack})}}finally{M.T=t,L.p=o}}(pn&3)!==0&&Ns(),Kt(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===hc?rr++:(rr=0,hc=e):rr=0,sr(0)}}function Jh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qi(t)))}function Ns(){return Xh(),Qh(),$h(),Wh()}function Wh(){if(Fe!==5)return!1;var e=qn,t=dc;dc=0;var n=No(pn),i=M.T,o=L.p;try{L.p=32>n?32:n,M.T=null,n=fc,fc=null;var c=qn,d=pn;if(Fe=0,ai=qn=null,pn=0,(pe&6)!==0)throw Error(l(331));var p=pe;if(pe|=4,Nh(c.current),Ih(c,c.current,d,n),pe=p,sr(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ki,c)}catch{}return!0}finally{L.p=o,M.T=i,Jh(e,t)}}function Zh(e,t,n){t=Et(n,t),t=Vl(e.stateNode,t,2),e=Nn(e,t,2),e!==null&&(Ei(e,2),Kt(e))}function ve(e,t,n){if(e.tag===3)Zh(e,e,n);else for(;t!==null;){if(t.tag===3){Zh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jn===null||!jn.has(i))){e=Et(n,e),n=eh(2),i=Nn(t,n,2),i!==null&&(th(n,i,t,e),Ei(i,2),Kt(i));break}}t=t.return}}function gc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ov;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(lc=!0,o.add(n),e=jv.bind(null,e,t,n),t.then(e,e))}function jv(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(le&n)===n&&(_e===4||_e===3&&(le&62914560)===le&&300>ct()-As?(pe&2)===0&&ii(e,0):cc|=n,ni===le&&(ni=0)),Kt(e)}function em(e,t){t===0&&(t=Ku()),e=ca(e,t),e!==null&&(Ei(e,t),Kt(e))}function qv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),em(e,n)}function Pv(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),em(e,n)}function Fv(e,t){return Do(e,t)}var Os=null,si=null,yc=!1,Bs=!1,vc=!1,Fn=0;function Kt(e){e!==si&&e.next===null&&(si===null?Os=si=e:si=si.next=e),Bs=!0,yc||(yc=!0,Gv())}function sr(e,t){if(!vc&&Bs){vc=!0;do for(var n=!1,i=Os;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var c=0;else{var d=i.suspendedLanes,p=i.pingedLanes;c=(1<<31-dt(42|e)+1)-1,c&=o&~(d&~p),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,im(i,c))}else c=le,c=jr(i,i===ke?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Ti(i,c)||(n=!0,im(i,c));i=i.next}while(n);vc=!1}}function Hv(){tm()}function tm(){Bs=yc=!1;var e=0;Fn!==0&&eb()&&(e=Fn);for(var t=ct(),n=null,i=Os;i!==null;){var o=i.next,c=nm(i,t);c===0?(i.next=null,n===null?Os=o:n.next=o,o===null&&(si=n)):(n=i,(e!==0||(c&3)!==0)&&(Bs=!0)),i=o}Fe!==0&&Fe!==5||sr(e),Fn!==0&&(Fn=0)}function nm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-dt(c),p=1<<d,b=o[d];b===-1?((p&n)===0||(p&i)!==0)&&(o[d]=gy(p,t)):b<=t&&(e.expiredLanes|=p),c&=~p}if(t=ke,n=le,n=jr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Io(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ti(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Io(i),No(n)){case 2:case 8:n=Vu;break;case 32:n=Br;break;case 268435456:n=Yu;break;default:n=Br}return i=am.bind(null,e),n=Do(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Io(i),e.callbackPriority=2,e.callbackNode=null,2}function am(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ns()&&e.callbackNode!==n)return null;var i=le;return i=jr(e,e===ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Lh(e,i,t),nm(e,ct()),e.callbackNode!=null&&e.callbackNode===n?am.bind(null,e):null)}function im(e,t){if(Ns())return null;Lh(e,t,!0)}function Gv(){nb(function(){(pe&6)!==0?Do(Gu,Hv):tm()})}function bc(){if(Fn===0){var e=Va;e===0&&(e=Ur,Ur<<=1,(Ur&261888)===0&&(Ur=256)),Fn=e}return Fn}function rm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hr(""+e)}function sm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Vv(e,t,n,i,o){if(t==="submit"&&n&&n.stateNode===o){var c=rm((o[nt]||null).action),d=i.submitter;d&&(t=(t=d[nt]||null)?rm(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var p=new Kr("action","action",null,i,o);e.push({event:p,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Fn!==0){var b=d?sm(o,d):new FormData(o);jl(n,{pending:!0,data:b,method:o.method,action:c},null,b)}}else typeof c=="function"&&(p.preventDefault(),b=d?sm(o,d):new FormData(o),jl(n,{pending:!0,data:b,method:o.method,action:c},c,b))},currentTarget:o}]})}}for(var Cc=0;Cc<nl.length;Cc++){var xc=nl[Cc],Yv=xc.toLowerCase(),Kv=xc[0].toUpperCase()+xc.slice(1);Ot(Yv,"on"+Kv)}Ot(Ud,"onAnimationEnd"),Ot(zd,"onAnimationIteration"),Ot(Ld,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(cv,"onTransitionRun"),Ot(uv,"onTransitionStart"),Ot(dv,"onTransitionCancel"),Ot(jd,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(or));function om(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var d=i.length-1;0<=d;d--){var p=i[d],b=p.instance,E=p.currentTarget;if(p=p.listener,b!==c&&o.isPropagationStopped())break e;c=p,o.currentTarget=E;try{c(o)}catch(I){$r(I)}o.currentTarget=null,c=b}else for(d=0;d<i.length;d++){if(p=i[d],b=p.instance,E=p.currentTarget,p=p.listener,b!==c&&o.isPropagationStopped())break e;c=p,o.currentTarget=E;try{c(o)}catch(I){$r(I)}o.currentTarget=null,c=b}}}}function oe(e,t){var n=t[Oo];n===void 0&&(n=t[Oo]=new Set);var i=e+"__bubble";n.has(i)||(lm(t,e,2,!1),n.add(i))}function wc(e,t,n){var i=0;t&&(i|=4),lm(n,e,i,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[Us]){e[Us]=!0,ed.forEach(function(n){n!=="selectionchange"&&(Xv.has(n)||wc(n,!1,e),wc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,wc("selectionchange",!1,t))}}function lm(e,t,n,i){switch(zm(t)){case 2:var o=wb;break;case 8:o=Sb;break;default:o=Lc}n=o.bind(null,t,n,e),o=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function kc(e,t,n,i,o){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var p=i.stateNode.containerInfo;if(p===o)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;p!==null;){if(d=Ra(p),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){i=c=d;continue e}p=p.parentNode}}i=i.return}fd(function(){var E=c,I=Po(n),N=[];e:{var R=qd.get(e);if(R!==void 0){var D=Kr,V=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":D=Py;break;case"focusin":V="focus",D=Ko;break;case"focusout":V="blur",D=Ko;break;case"beforeblur":case"afterblur":D=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Gy;break;case Ud:case zd:case Ld:D=_y;break;case jd:D=Yy;break;case"scroll":case"scrollend":D=Ay;break;case"wheel":D=Xy;break;case"copy":case"cut":case"paste":D=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=yd;break;case"toggle":case"beforetoggle":D=$y}var J=(t&4)!==0,we=!J&&(e==="scroll"||e==="scrollend"),S=J?R!==null?R+"Capture":null:R;J=[];for(var C=E,T;C!==null;){var _=C;if(T=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||T===null||S===null||(_=Di(C,S),_!=null&&J.push(lr(C,_,T))),we)break;C=C.return}0<J.length&&(R=new D(R,V,null,n,I),N.push({event:R,listeners:J}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",R&&n!==qo&&(V=n.relatedTarget||n.fromElement)&&(Ra(V)||V[Aa]))break e;if((D||R)&&(R=I.window===I?I:(R=I.ownerDocument)?R.defaultView||R.parentWindow:window,D?(V=n.relatedTarget||n.toElement,D=E,V=V?Ra(V):null,V!==null&&(we=f(V),J=V.tag,V!==we||J!==5&&J!==27&&J!==6)&&(V=null)):(D=null,V=E),D!==V)){if(J=pd,_="onMouseLeave",S="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(J=yd,_="onPointerLeave",S="onPointerEnter",C="pointer"),we=D==null?R:Ri(D),T=V==null?R:Ri(V),R=new J(_,C+"leave",D,n,I),R.target=we,R.relatedTarget=T,_=null,Ra(I)===E&&(J=new J(S,C+"enter",V,n,I),J.target=T,J.relatedTarget=we,_=J),we=_,D&&V)t:{for(J=Qv,S=D,C=V,T=0,_=S;_;_=J(_))T++;_=0;for(var Q=C;Q;Q=J(Q))_++;for(;0<T-_;)S=J(S),T--;for(;0<_-T;)C=J(C),_--;for(;T--;){if(S===C||C!==null&&S===C.alternate){J=S;break t}S=J(S),C=J(C)}J=null}else J=null;D!==null&&cm(N,R,D,J,!1),V!==null&&we!==null&&cm(N,we,V,J,!0)}}e:{if(R=E?Ri(E):window,D=R.nodeName&&R.nodeName.toLowerCase(),D==="select"||D==="input"&&R.type==="file")var he=Td;else if(Sd(R))if(Ed)he=sv;else{he=iv;var K=av}else D=R.nodeName,!D||D.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?E&&jo(E.elementType)&&(he=Td):he=rv;if(he&&(he=he(e,E))){kd(N,he,n,I);break e}K&&K(e,R,E),e==="focusout"&&E&&R.type==="number"&&E.memoizedProps.value!=null&&Lo(R,"number",R.value)}switch(K=E?Ri(E):window,e){case"focusin":(Sd(K)||K.contentEditable==="true")&&(za=K,Zo=E,zi=null);break;case"focusout":zi=Zo=za=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Od(N,n,I);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Od(N,n,I)}var ie;if(Qo)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Ua?xd(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(vd&&n.locale!=="ko"&&(Ua||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Ua&&(ie=hd()):(En=I,Go="value"in En?En.value:En.textContent,Ua=!0)),K=zs(E,ce),0<K.length&&(ce=new gd(ce,e,null,n,I),N.push({event:ce,listeners:K}),ie?ce.data=ie:(ie=wd(n),ie!==null&&(ce.data=ie)))),(ie=Wy?Zy(e,n):ev(e,n))&&(ce=zs(E,"onBeforeInput"),0<ce.length&&(K=new gd("onBeforeInput","beforeinput",null,n,I),N.push({event:K,listeners:ce}),K.data=ie)),Vv(N,e,E,n,I)}om(N,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zs(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Di(e,n),o!=null&&i.unshift(lr(e,o,c)),o=Di(e,t),o!=null&&i.push(lr(e,o,c))),e.tag===3)return i;e=e.return}return[]}function Qv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cm(e,t,n,i,o){for(var c=t._reactName,d=[];n!==null&&n!==i;){var p=n,b=p.alternate,E=p.stateNode;if(p=p.tag,b!==null&&b===i)break;p!==5&&p!==26&&p!==27||E===null||(b=E,o?(E=Di(n,c),E!=null&&d.unshift(lr(n,E,b))):o||(E=Di(n,c),E!=null&&d.push(lr(n,E,b)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var $v=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function um(e){return(typeof e=="string"?e:""+e).replace($v,`
`).replace(Jv,"")}function dm(e,t){return t=um(t),um(e)===t}function xe(e,t,n,i,o,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Na(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Na(e,""+i);break;case"className":Pr(e,"class",i);break;case"tabIndex":Pr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Pr(e,n,i);break;case"style":ud(e,i,c);break;case"data":if(t!=="object"){Pr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&xe(e,t,"name",o.name,o,null),xe(e,t,"formEncType",o.formEncType,o,null),xe(e,t,"formMethod",o.formMethod,o,null),xe(e,t,"formTarget",o.formTarget,o,null)):(xe(e,t,"encType",o.encType,o,null),xe(e,t,"method",o.method,o,null),xe(e,t,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Zt);break;case"onScroll":i!=null&&oe("scroll",e);break;case"onScrollEnd":i!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Hr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":oe("beforetoggle",e),oe("toggle",e),qr(e,"popover",i);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":qr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ty.get(n)||n,qr(e,n,i))}}function Tc(e,t,n,i,o,c){switch(n){case"style":ud(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Na(e,i):(typeof i=="number"||typeof i=="bigint")&&Na(e,""+i);break;case"onScroll":i!=null&&oe("scroll",e);break;case"onScrollEnd":i!=null&&oe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!td.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),c=e[nt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):qr(e,n,i)}}}function Qe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var i=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var d=n[c];if(d!=null)switch(c){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:xe(e,t,c,d,n,null)}}o&&xe(e,t,"srcSet",n.srcSet,n,null),i&&xe(e,t,"src",n.src,n,null);return;case"input":oe("invalid",e);var p=c=d=o=null,b=null,E=null;for(i in n)if(n.hasOwnProperty(i)){var I=n[i];if(I!=null)switch(i){case"name":o=I;break;case"type":d=I;break;case"checked":b=I;break;case"defaultChecked":E=I;break;case"value":c=I;break;case"defaultValue":p=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(l(137,t));break;default:xe(e,t,i,I,n,null)}}sd(e,c,p,b,E,d,o,!1);return;case"select":oe("invalid",e),i=d=c=null;for(o in n)if(n.hasOwnProperty(o)&&(p=n[o],p!=null))switch(o){case"value":c=p;break;case"defaultValue":d=p;break;case"multiple":i=p;default:xe(e,t,o,p,n,null)}t=c,n=d,e.multiple=!!i,t!=null?_a(e,!!i,t,!1):n!=null&&_a(e,!!i,n,!0);return;case"textarea":oe("invalid",e),c=o=i=null;for(d in n)if(n.hasOwnProperty(d)&&(p=n[d],p!=null))switch(d){case"value":i=p;break;case"defaultValue":o=p;break;case"children":c=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(l(91));break;default:xe(e,t,d,p,n,null)}ld(e,i,o,c);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(i=n[b],i!=null))switch(b){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:xe(e,t,b,i,n,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(i=0;i<or.length;i++)oe(or[i],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:xe(e,t,E,i,n,null)}return;default:if(jo(t)){for(I in n)n.hasOwnProperty(I)&&(i=n[I],i!==void 0&&Tc(e,t,I,i,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(i=n[p],i!=null&&xe(e,t,p,i,n,null))}function Wv(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,d=null,p=null,b=null,E=null,I=null;for(D in n){var N=n[D];if(n.hasOwnProperty(D)&&N!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":b=N;default:i.hasOwnProperty(D)||xe(e,t,D,null,i,N)}}for(var R in i){var D=i[R];if(N=n[R],i.hasOwnProperty(R)&&(D!=null||N!=null))switch(R){case"type":c=D;break;case"name":o=D;break;case"checked":E=D;break;case"defaultChecked":I=D;break;case"value":d=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:D!==N&&xe(e,t,R,D,i,N)}}zo(e,d,p,b,E,I,c,o);return;case"select":D=d=p=R=null;for(c in n)if(b=n[c],n.hasOwnProperty(c)&&b!=null)switch(c){case"value":break;case"multiple":D=b;default:i.hasOwnProperty(c)||xe(e,t,c,null,i,b)}for(o in i)if(c=i[o],b=n[o],i.hasOwnProperty(o)&&(c!=null||b!=null))switch(o){case"value":R=c;break;case"defaultValue":p=c;break;case"multiple":d=c;default:c!==b&&xe(e,t,o,c,i,b)}t=p,n=d,i=D,R!=null?_a(e,!!n,R,!1):!!i!=!!n&&(t!=null?_a(e,!!n,t,!0):_a(e,!!n,n?[]:"",!1));return;case"textarea":D=R=null;for(p in n)if(o=n[p],n.hasOwnProperty(p)&&o!=null&&!i.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:xe(e,t,p,null,i,o)}for(d in i)if(o=i[d],c=n[d],i.hasOwnProperty(d)&&(o!=null||c!=null))switch(d){case"value":R=o;break;case"defaultValue":D=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&xe(e,t,d,o,i,c)}od(e,R,D);return;case"option":for(var V in n)if(R=n[V],n.hasOwnProperty(V)&&R!=null&&!i.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:xe(e,t,V,null,i,R)}for(b in i)if(R=i[b],D=n[b],i.hasOwnProperty(b)&&R!==D&&(R!=null||D!=null))switch(b){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:xe(e,t,b,R,i,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in n)R=n[J],n.hasOwnProperty(J)&&R!=null&&!i.hasOwnProperty(J)&&xe(e,t,J,null,i,R);for(E in i)if(R=i[E],D=n[E],i.hasOwnProperty(E)&&R!==D&&(R!=null||D!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,t));break;default:xe(e,t,E,R,i,D)}return;default:if(jo(t)){for(var we in n)R=n[we],n.hasOwnProperty(we)&&R!==void 0&&!i.hasOwnProperty(we)&&Tc(e,t,we,void 0,i,R);for(I in i)R=i[I],D=n[I],!i.hasOwnProperty(I)||R===D||R===void 0&&D===void 0||Tc(e,t,I,R,i,D);return}}for(var S in n)R=n[S],n.hasOwnProperty(S)&&R!=null&&!i.hasOwnProperty(S)&&xe(e,t,S,null,i,R);for(N in i)R=i[N],D=n[N],!i.hasOwnProperty(N)||R===D||R==null&&D==null||xe(e,t,N,R,i,D)}function fm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var o=n[i],c=o.transferSize,d=o.initiatorType,p=o.duration;if(c&&p&&fm(d)){for(d=0,p=o.responseEnd,i+=1;i<n.length;i++){var b=n[i],E=b.startTime;if(E>p)break;var I=b.transferSize,N=b.initiatorType;I&&fm(N)&&(b=b.responseEnd,d+=I*(b<p?1:(p-E)/(b-E)))}if(--i,t+=8*(c+d)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ec=null,Ac=null;function Ls(e){return e.nodeType===9?e:e.ownerDocument}function hm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=null;function eb(){var e=window.event;return e&&e.type==="popstate"?e===Dc?!1:(Dc=e,!0):(Dc=null,!1)}var pm=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,nb=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(e){return gm.resolve(null).then(e).catch(ab)}:pm;function ab(e){setTimeout(function(){throw e})}function Hn(e){return e==="head"}function ym(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(o),ui(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")cr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,cr(n);for(var c=n.firstChild;c;){var d=c.nextSibling,p=c.nodeName;c[Ai]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=d}}else n==="body"&&cr(e.ownerDocument.body);n=o}while(n);ui(t)}function vm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Ic(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ic(n),Bo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ib(e,t,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ai])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function rb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mt(e.nextSibling),e===null))return null;return e}function bm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function _c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nc=null;function Cm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function xm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wm(e,t,n){switch(t=Ls(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function cr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bo(e)}var _t=new Map,Sm=new Set;function js(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var gn=L.d;L.d={f:ob,r:lb,D:cb,C:ub,L:db,m:fb,X:mb,S:hb,M:pb};function ob(){var e=gn.f(),t=Is();return e||t}function lb(e){var t=Da(e);t!==null&&t.tag===5&&t.type==="form"?qf(t):gn.r(e)}var oi=typeof document>"u"?null:document;function km(e,t,n){var i=oi;if(i&&typeof t=="string"&&t){var o=kt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Sm.has(o)||(Sm.add(o),e={rel:e,crossOrigin:n,href:t},i.querySelector(o)===null&&(t=i.createElement("link"),Qe(t,"link",e),He(t),i.head.appendChild(t)))}}function cb(e){gn.D(e),km("dns-prefetch",e,null)}function ub(e,t){gn.C(e,t),km("preconnect",e,t)}function db(e,t,n){gn.L(e,t,n);var i=oi;if(i&&e&&t){var o='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+kt(n.imageSizes)+'"]')):o+='[href="'+kt(e)+'"]';var c=o;switch(t){case"style":c=li(e);break;case"script":c=ci(e)}_t.has(c)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),_t.set(c,e),i.querySelector(o)!==null||t==="style"&&i.querySelector(ur(c))||t==="script"&&i.querySelector(dr(c))||(t=i.createElement("link"),Qe(t,"link",e),He(t),i.head.appendChild(t)))}}function fb(e,t){gn.m(e,t);var n=oi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+kt(i)+'"][href="'+kt(e)+'"]',c=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ci(e)}if(!_t.has(c)&&(e=w({rel:"modulepreload",href:e},t),_t.set(c,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dr(c)))return}i=n.createElement("link"),Qe(i,"link",e),He(i),n.head.appendChild(i)}}}function hb(e,t,n){gn.S(e,t,n);var i=oi;if(i&&e){var o=Ia(i).hoistableStyles,c=li(e);t=t||"default";var d=o.get(c);if(!d){var p={loading:0,preload:null};if(d=i.querySelector(ur(c)))p.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=_t.get(c))&&Oc(e,n);var b=d=i.createElement("link");He(b),Qe(b,"link",e),b._p=new Promise(function(E,I){b.onload=E,b.onerror=I}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,qs(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:p},o.set(c,d)}}}function mb(e,t){gn.X(e,t);var n=oi;if(n&&e){var i=Ia(n).hoistableScripts,o=ci(e),c=i.get(o);c||(c=n.querySelector(dr(o)),c||(e=w({src:e,async:!0},t),(t=_t.get(o))&&Bc(e,t),c=n.createElement("script"),He(c),Qe(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function pb(e,t){gn.M(e,t);var n=oi;if(n&&e){var i=Ia(n).hoistableScripts,o=ci(e),c=i.get(o);c||(c=n.querySelector(dr(o)),c||(e=w({src:e,async:!0,type:"module"},t),(t=_t.get(o))&&Bc(e,t),c=n.createElement("script"),He(c),Qe(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function Tm(e,t,n,i){var o=(o=re.current)?js(o):null;if(!o)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=li(n.href),n=Ia(o).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=li(n.href);var c=Ia(o).hoistableStyles,d=c.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=o.querySelector(ur(e)))&&!c._p&&(d.instance=c,d.state.loading=5),_t.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_t.set(e,n),c||gb(o,e,n,d.state))),t&&i===null)throw Error(l(528,""));return d}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ci(n),n=Ia(o).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function li(e){return'href="'+kt(e)+'"'}function ur(e){return'link[rel="stylesheet"]['+e+"]"}function Em(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function gb(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Qe(t,"link",n),He(t),e.head.appendChild(t))}function ci(e){return'[src="'+kt(e)+'"]'}function dr(e){return"script[async]"+e}function Am(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(i)return t.instance=i,He(i),i;var o=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),He(i),Qe(i,"style",o),qs(i,n.precedence,e),t.instance=i;case"stylesheet":o=li(n.href);var c=e.querySelector(ur(o));if(c)return t.state.loading|=4,t.instance=c,He(c),c;i=Em(n),(o=_t.get(o))&&Oc(i,o),c=(e.ownerDocument||e).createElement("link"),He(c);var d=c;return d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),Qe(c,"link",i),t.state.loading|=4,qs(c,n.precedence,e),t.instance=c;case"script":return c=ci(n.src),(o=e.querySelector(dr(c)))?(t.instance=o,He(o),o):(i=n,(o=_t.get(c))&&(i=w({},n),Bc(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),He(o),Qe(o,"link",i),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,qs(i,n.precedence,e));return t.instance}function qs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,c=o,d=0;d<i.length;d++){var p=i[d];if(p.dataset.precedence===t)c=p;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ps=null;function Rm(e,t,n){if(Ps===null){var i=new Map,o=Ps=new Map;o.set(n,i)}else o=Ps,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[Ai]||c[Ve]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var p=i.get(d);p?p.push(c):i.set(d,[c])}}return i}function Dm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function yb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Im(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=li(i.href),c=t.querySelector(ur(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,He(c);return}c=t.ownerDocument||t,i=Em(i),(o=_t.get(o))&&Oc(i,o),c=c.createElement("link"),He(c);var d=c;d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),Qe(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Fs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uc=0;function bb(e,t){return e.stylesheets&&e.count===0&&Gs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Gs(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Uc===0&&(Uc=62500*Zv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gs(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Uc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function Fs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hs=null;function Gs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hs=new Map,t.forEach(Cb,e),Hs=null,Fs.call(e))}function Cb(e,t){if(!(t.state.loading&4)){var n=Hs.get(e);if(n)var i=n.get(null);else{n=new Map,Hs.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var d=o[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),i=d)}i&&n.set(null,i)}o=t.instance,d=o.getAttribute("data-precedence"),c=n.get(d)||i,c===i&&n.set(null,o),n.set(d,o),this.count++,i=Fs.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var fr={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function xb(e,t,n,i,o,c,d,p,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Mm(e,t,n,i,o,c,d,p,b,E,I,N){return e=new xb(e,t,n,d,b,E,I,N,p),t=1,c===!0&&(t|=24),c=ht(3,null,null,t),e.current=c,c.stateNode=e,t=pl(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},bl(c),e}function _m(e){return e?(e=qa,e):qa}function Nm(e,t,n,i,o,c){o=_m(o),i.context===null?i.context=o:i.pendingContext=o,i=_n(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Nn(e,i,t),n!==null&&(lt(n,e,t),Gi(n,e,t))}function Om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zc(e,t){Om(e,t),(e=e.alternate)&&Om(e,t)}function Bm(e){if(e.tag===13||e.tag===31){var t=ca(e,67108864);t!==null&&lt(t,e,67108864),zc(e,67108864)}}function Um(e){if(e.tag===13||e.tag===31){var t=vt();t=_o(t);var n=ca(e,t);n!==null&&lt(n,e,t),zc(e,t)}}var Vs=!0;function wb(e,t,n,i){var o=M.T;M.T=null;var c=L.p;try{L.p=2,Lc(e,t,n,i)}finally{L.p=c,M.T=o}}function Sb(e,t,n,i){var o=M.T;M.T=null;var c=L.p;try{L.p=8,Lc(e,t,n,i)}finally{L.p=c,M.T=o}}function Lc(e,t,n,i){if(Vs){var o=jc(i);if(o===null)kc(e,t,i,Ys,n),Lm(e,i);else if(Tb(o,e,t,n,i))i.stopPropagation();else if(Lm(e,i),t&4&&-1<kb.indexOf(e)){for(;o!==null;){var c=Da(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=ia(c.pendingLanes);if(d!==0){var p=c;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var b=1<<31-dt(d);p.entanglements[1]|=b,d&=~b}Kt(c),(pe&6)===0&&(Rs=ct()+500,sr(0))}}break;case 31:case 13:p=ca(c,2),p!==null&&lt(p,c,2),Is(),zc(c,2)}if(c=jc(i),c===null&&kc(e,t,i,Ys,n),c===o)break;o=c}o!==null&&i.stopPropagation()}else kc(e,t,i,null,n)}}function jc(e){return e=Po(e),qc(e)}var Ys=null;function qc(e){if(Ys=null,e=Ra(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ys=e,null}function zm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cy()){case Gu:return 2;case Vu:return 8;case Br:case uy:return 32;case Yu:return 268435456;default:return 32}default:return 32}}var Pc=!1,Gn=null,Vn=null,Yn=null,hr=new Map,mr=new Map,Kn=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lm(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function pr(e,t,n,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Da(t),t!==null&&Bm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Tb(e,t,n,i,o){switch(t){case"focusin":return Gn=pr(Gn,e,t,n,i,o),!0;case"dragenter":return Vn=pr(Vn,e,t,n,i,o),!0;case"mouseover":return Yn=pr(Yn,e,t,n,i,o),!0;case"pointerover":var c=o.pointerId;return hr.set(c,pr(hr.get(c)||null,e,t,n,i,o)),!0;case"gotpointercapture":return c=o.pointerId,mr.set(c,pr(mr.get(c)||null,e,t,n,i,o)),!0}return!1}function jm(e){var t=Ra(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Um(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Um(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);qo=i,n.target.dispatchEvent(i),qo=null}else return t=Da(n),t!==null&&Bm(t),e.blockedOn=n,!1;t.shift()}return!0}function qm(e,t,n){Ks(e)&&n.delete(t)}function Eb(){Pc=!1,Gn!==null&&Ks(Gn)&&(Gn=null),Vn!==null&&Ks(Vn)&&(Vn=null),Yn!==null&&Ks(Yn)&&(Yn=null),hr.forEach(qm),mr.forEach(qm)}function Xs(e,t){e.blockedOn===t&&(e.blockedOn=null,Pc||(Pc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Eb)))}var Qs=null;function Pm(e){Qs!==e&&(Qs=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Qs===e&&(Qs=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],o=e[t+2];if(typeof i!="function"){if(qc(i||n)===null)continue;break}var c=Da(n);c!==null&&(e.splice(t,3),t-=3,jl(c,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function ui(e){function t(b){return Xs(b,e)}Gn!==null&&Xs(Gn,e),Vn!==null&&Xs(Vn,e),Yn!==null&&Xs(Yn,e),hr.forEach(t),mr.forEach(t);for(var n=0;n<Kn.length;n++){var i=Kn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)jm(n),n.blockedOn===null&&Kn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],d=o[nt]||null;if(typeof c=="function")d||Pm(n);else if(d){var p=null;if(c&&c.hasAttribute("formAction")){if(o=c,d=c[nt]||null)p=d.formAction;else if(qc(o)!==null)continue}else p=d.action;typeof p=="function"?n[i+1]=p:(n.splice(i,3),i-=3),Pm(n)}}}function Fm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Fc(e){this._internalRoot=e}$s.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=vt();Nm(n,i,e,t,null,null)},$s.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nm(e.current,2,null,e,null,null),Is(),t[Aa]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&jm(e)}};var Hm=a.version;if(Hm!=="19.2.5")throw Error(l(527,Hm,"19.2.5"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=y(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var Ab={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{ki=Js.inject(Ab),ut=Js}catch{}}return yr.createRoot=function(e,t){if(!u(e))throw Error(l(299));var n=!1,i="",o=$f,c=Jf,d=Wf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Mm(e,1,!1,null,null,n,i,null,o,c,d,Fm),e[Aa]=t.current,Sc(e),new Fc(t)},yr.hydrateRoot=function(e,t,n){if(!u(e))throw Error(l(299));var i=!1,o="",c=$f,d=Jf,p=Wf,b=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Mm(e,1,!0,t,n??null,i,o,b,c,d,p,Fm),t.context=_m(null),n=t.current,i=vt(),i=_o(i),o=_n(i),o.callback=null,Nn(n,o,i),n=i,t.current.lanes=n,Ei(t,n),Kt(t),e[Aa]=t.current,Sc(e),new $s(t)},yr.version="19.2.5",yr}var Zm;function zb(){if(Zm)return Vc.exports;Zm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Vc.exports=Ub(),Vc.exports}var Lb=zb();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ep="popstate";function tp(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function jb(r={}){function a(l,u){var y;let f=(y=u.state)==null?void 0:y.masked,{pathname:m,search:v,hash:g}=f||l.location;return ru("",{pathname:m,search:v,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default",f?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function s(l,u){return typeof u=="string"?u:xr(u)}return Pb(a,s,null,r)}function De(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function qt(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function qb(){return Math.random().toString(36).substring(2,10)}function np(r,a){return{usr:r.state,key:r.key,idx:a,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function ru(r,a,s=null,l,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof a=="string"?bi(a):a,state:s,key:a&&a.key||l||qb(),unstable_mask:u}}function xr({pathname:r="/",search:a="",hash:s=""}){return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function bi(r){let a={};if(r){let s=r.indexOf("#");s>=0&&(a.hash=r.substring(s),r=r.substring(0,s));let l=r.indexOf("?");l>=0&&(a.search=r.substring(l),r=r.substring(0,l)),r&&(a.pathname=r)}return a}function Pb(r,a,s,l={}){let{window:u=document.defaultView,v5Compat:f=!1}=l,m=u.history,v="POP",g=null,y=k();y==null&&(y=0,m.replaceState({...m.state,idx:y},""));function k(){return(m.state||{idx:null}).idx}function w(){v="POP";let P=k(),z=P==null?null:P-y;y=P,g&&g({action:v,location:q.location,delta:z})}function O(P,z){v="PUSH";let G=tp(P)?P:ru(q.location,P,z);y=k()+1;let U=np(G,y),X=q.createHref(G.unstable_mask||G);try{m.pushState(U,"",X)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;u.location.assign(X)}f&&g&&g({action:v,location:q.location,delta:1})}function F(P,z){v="REPLACE";let G=tp(P)?P:ru(q.location,P,z);y=k();let U=np(G,y),X=q.createHref(G.unstable_mask||G);m.replaceState(U,"",X),f&&g&&g({action:v,location:q.location,delta:0})}function H(P){return Fb(P)}let q={get action(){return v},get location(){return r(u,m)},listen(P){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(ep,w),g=P,()=>{u.removeEventListener(ep,w),g=null}},createHref(P){return a(u,P)},createURL:H,encodeLocation(P){let z=H(P);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:O,replace:F,go(P){return m.go(P)}};return q}function Fb(r,a=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),De(s,"No window.location.(origin|href) available to create URL");let l=typeof r=="string"?r:xr(r);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=s+l),new URL(l,s)}function Gp(r,a,s="/"){return Hb(r,a,s,!1)}function Hb(r,a,s,l){let u=typeof a=="string"?bi(a):a,f=xn(u.pathname||"/",s);if(f==null)return null;let m=Vp(r);Gb(m);let v=null;for(let g=0;v==null&&g<m.length;++g){let y=t0(f);v=Zb(m[g],y,l)}return v}function Vp(r,a=[],s=[],l="",u=!1){let f=(m,v,g=u,y)=>{let k={relativePath:y===void 0?m.path||"":y,caseSensitive:m.caseSensitive===!0,childrenIndex:v,route:m};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(l)&&g)return;De(k.relativePath.startsWith(l),`Absolute route path "${k.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(l.length)}let w=Lt([l,k.relativePath]),O=s.concat(k);m.children&&m.children.length>0&&(De(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Vp(m.children,a,O,w,g)),!(m.path==null&&!m.index)&&a.push({path:w,score:Jb(w,m.index),routesMeta:O})};return r.forEach((m,v)=>{var g;if(m.path===""||!((g=m.path)!=null&&g.includes("?")))f(m,v);else for(let y of Yp(m.path))f(m,v,!0,y)}),a}function Yp(r){let a=r.split("/");if(a.length===0)return[];let[s,...l]=a,u=s.endsWith("?"),f=s.replace(/\?$/,"");if(l.length===0)return u?[f,""]:[f];let m=Yp(l.join("/")),v=[];return v.push(...m.map(g=>g===""?f:[f,g].join("/"))),u&&v.push(...m),v.map(g=>r.startsWith("/")&&g===""?"/":g)}function Gb(r){r.sort((a,s)=>a.score!==s.score?s.score-a.score:Wb(a.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var Vb=/^:[\w-]+$/,Yb=3,Kb=2,Xb=1,Qb=10,$b=-2,ap=r=>r==="*";function Jb(r,a){let s=r.split("/"),l=s.length;return s.some(ap)&&(l+=$b),a&&(l+=Kb),s.filter(u=>!ap(u)).reduce((u,f)=>u+(Vb.test(f)?Yb:f===""?Xb:Qb),l)}function Wb(r,a){return r.length===a.length&&r.slice(0,-1).every((l,u)=>l===a[u])?r[r.length-1]-a[a.length-1]:0}function Zb(r,a,s=!1){let{routesMeta:l}=r,u={},f="/",m=[];for(let v=0;v<l.length;++v){let g=l[v],y=v===l.length-1,k=f==="/"?a:a.slice(f.length)||"/",w=lo({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},k),O=g.route;if(!w&&y&&s&&!l[l.length-1].route.index&&(w=lo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},k)),!w)return null;Object.assign(u,w.params),m.push({params:u,pathname:Lt([f,w.pathname]),pathnameBase:r0(Lt([f,w.pathnameBase])),route:O}),w.pathnameBase!=="/"&&(f=Lt([f,w.pathnameBase]))}return m}function lo(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,l]=e0(r.path,r.caseSensitive,r.end),u=a.match(s);if(!u)return null;let f=u[0],m=f.replace(/(.)\/+$/,"$1"),v=u.slice(1);return{params:l.reduce((y,{paramName:k,isOptional:w},O)=>{if(k==="*"){let H=v[O]||"";m=f.slice(0,f.length-H.length).replace(/(.)\/+$/,"$1")}const F=v[O];return w&&!F?y[k]=void 0:y[k]=(F||"").replace(/%2F/g,"/"),y},{}),pathname:f,pathnameBase:m,pattern:r}}function e0(r,a=!1,s=!0){qt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,v,g,y,k)=>{if(l.push({paramName:v,isOptional:g!=null}),g){let w=k.charAt(y+m.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(l.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),l]}function t0(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return qt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),r}}function xn(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let s=a.endsWith("/")?a.length-1:a.length,l=r.charAt(s);return l&&l!=="/"?null:r.slice(s)||"/"}var n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function a0(r,a="/"){let{pathname:s,search:l="",hash:u=""}=typeof r=="string"?bi(r):r,f;return s?(s=Kp(s),s.startsWith("/")?f=ip(s.substring(1),"/"):f=ip(s,a)):f=a,{pathname:f,search:s0(l),hash:o0(u)}}function ip(r,a){let s=co(a).split("/");return r.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function Qc(r,a,s,l){return`Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function i0(r){return r.filter((a,s)=>s===0||a.route.path&&a.route.path.length>0)}function bu(r){let a=i0(r);return a.map((s,l)=>l===a.length-1?s.pathname:s.pathnameBase)}function vo(r,a,s,l=!1){let u;typeof r=="string"?u=bi(r):(u={...r},De(!u.pathname||!u.pathname.includes("?"),Qc("?","pathname","search",u)),De(!u.pathname||!u.pathname.includes("#"),Qc("#","pathname","hash",u)),De(!u.search||!u.search.includes("#"),Qc("#","search","hash",u)));let f=r===""||u.pathname==="",m=f?"/":u.pathname,v;if(m==null)v=s;else{let w=a.length-1;if(!l&&m.startsWith("..")){let O=m.split("/");for(;O[0]==="..";)O.shift(),w-=1;u.pathname=O.join("/")}v=w>=0?a[w]:"/"}let g=a0(u,v),y=m&&m!=="/"&&m.endsWith("/"),k=(f||m===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(y||k)&&(g.pathname+="/"),g}var Kp=r=>r.replace(/\/\/+/g,"/"),Lt=r=>Kp(r.join("/")),co=r=>r.replace(/\/+$/,""),r0=r=>co(r).replace(/^\/*/,"/"),s0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,o0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,l0=class{constructor(r,a,s,l=!1){this.status=r,this.statusText=a||"",this.internal=l,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function c0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function u0(r){let a=r.map(s=>s.route.path).filter(Boolean);return Lt(a)||"/"}var Xp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Qp(r,a){let s=r;if(typeof s!="string"||!n0.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let l=s,u=!1;if(Xp)try{let f=new URL(window.location.href),m=s.startsWith("//")?new URL(f.protocol+s):new URL(s),v=xn(m.pathname,a);m.origin===f.origin&&v!=null?s=v+m.search+m.hash:u=!0}catch{qt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:u,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $p=["POST","PUT","PATCH","DELETE"];new Set($p);var d0=["GET",...$p];new Set(d0);var Ci=A.createContext(null);Ci.displayName="DataRouter";var bo=A.createContext(null);bo.displayName="DataRouterState";var Jp=A.createContext(!1);function f0(){return A.useContext(Jp)}var Wp=A.createContext({isTransitioning:!1});Wp.displayName="ViewTransition";var h0=A.createContext(new Map);h0.displayName="Fetchers";var m0=A.createContext(null);m0.displayName="Await";var Ct=A.createContext(null);Ct.displayName="Navigation";var Er=A.createContext(null);Er.displayName="Location";var Nt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Nt.displayName="Route";var Cu=A.createContext(null);Cu.displayName="RouteError";var Zp="REACT_ROUTER_ERROR",p0="REDIRECT",g0="ROUTE_ERROR_RESPONSE";function y0(r){if(r.startsWith(`${Zp}:${p0}:{`))try{let a=JSON.parse(r.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function v0(r){if(r.startsWith(`${Zp}:${g0}:{`))try{let a=JSON.parse(r.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new l0(a.status,a.statusText,a.data)}catch{}}function b0(r,{relative:a}={}){De(xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=A.useContext(Ct),{hash:u,pathname:f,search:m}=Ar(r,{relative:a}),v=f;return s!=="/"&&(v=f==="/"?s:Lt([s,f])),l.createHref({pathname:v,search:m,hash:u})}function xi(){return A.useContext(Er)!=null}function Pt(){return De(xi(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Er).location}var eg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tg(r){A.useContext(Ct).static||A.useLayoutEffect(r)}function xu(){let{isDataRoute:r}=A.useContext(Nt);return r?O0():C0()}function C0(){De(xi(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(Ci),{basename:a,navigator:s}=A.useContext(Ct),{matches:l}=A.useContext(Nt),{pathname:u}=Pt(),f=JSON.stringify(bu(l)),m=A.useRef(!1);return tg(()=>{m.current=!0}),A.useCallback((g,y={})=>{if(qt(m.current,eg),!m.current)return;if(typeof g=="number"){s.go(g);return}let k=vo(g,JSON.parse(f),u,y.relative==="path");r==null&&a!=="/"&&(k.pathname=k.pathname==="/"?a:Lt([a,k.pathname])),(y.replace?s.replace:s.push)(k,y.state,y)},[a,s,f,u,r])}var x0=A.createContext(null);function w0(r){let a=A.useContext(Nt).outlet;return A.useMemo(()=>a&&A.createElement(x0.Provider,{value:r},a),[a,r])}function ng(){let{matches:r}=A.useContext(Nt),a=r[r.length-1];return(a==null?void 0:a.params)??{}}function Ar(r,{relative:a}={}){let{matches:s}=A.useContext(Nt),{pathname:l}=Pt(),u=JSON.stringify(bu(s));return A.useMemo(()=>vo(r,JSON.parse(u),l,a==="path"),[r,u,l,a])}function S0(r,a){return ag(r,a)}function ag(r,a,s){var P;De(xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=A.useContext(Ct),{matches:u}=A.useContext(Nt),f=u[u.length-1],m=f?f.params:{},v=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let z=y&&y.path||"";rg(v,!y||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let k=Pt(),w;if(a){let z=typeof a=="string"?bi(a):a;De(g==="/"||((P=z.pathname)==null?void 0:P.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${z.pathname}" was given in the \`location\` prop.`),w=z}else w=k;let O=w.pathname||"/",F=O;if(g!=="/"){let z=g.replace(/^\//,"").split("/");F="/"+O.replace(/^\//,"").split("/").slice(z.length).join("/")}let H=Gp(r,{pathname:F});qt(y||H!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),qt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=R0(H&&H.map(z=>Object.assign({},z,{params:Object.assign({},m,z.params),pathname:Lt([g,l.encodeLocation?l.encodeLocation(z.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?g:Lt([g,l.encodeLocation?l.encodeLocation(z.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),u,s);return a&&q?A.createElement(Er.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},q):q}function k0(){let r=N0(),a=c0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},m=null;return console.error("Error handled by React Router default ErrorBoundary:",r),m=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:f},"ErrorBoundary")," or"," ",A.createElement("code",{style:f},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},a),s?A.createElement("pre",{style:u},s):null,m)}var T0=A.createElement(k0,null),ig=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){this.props.onError?this.props.onError(r,a):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const s=v0(r.digest);s&&(r=s)}let a=r!==void 0?A.createElement(Nt.Provider,{value:this.props.routeContext},A.createElement(Cu.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?A.createElement(E0,{error:r},a):a}};ig.contextType=Jp;var $c=new WeakMap;function E0({children:r,error:a}){let{basename:s}=A.useContext(Ct);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let l=y0(a.digest);if(l){let u=$c.get(a);if(u)throw u;let f=Qp(l.location,s);if(Xp&&!$c.get(a))if(f.isExternal||l.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw $c.set(a,m),m}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return r}function A0({routeContext:r,match:a,children:s}){let l=A.useContext(Ci);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),A.createElement(Nt.Provider,{value:r},s)}function R0(r,a=[],s){let l=s==null?void 0:s.state;if(r==null){if(!l)return null;if(l.errors)r=l.matches;else if(a.length===0&&!l.initialized&&l.matches.length>0)r=l.matches;else return null}let u=r,f=l==null?void 0:l.errors;if(f!=null){let k=u.findIndex(w=>w.route.id&&(f==null?void 0:f[w.route.id])!==void 0);De(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,k+1))}let m=!1,v=-1;if(s&&l){m=l.renderFallback;for(let k=0;k<u.length;k++){let w=u[k];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(v=k),w.route.id){let{loaderData:O,errors:F}=l,H=w.route.loader&&!O.hasOwnProperty(w.route.id)&&(!F||F[w.route.id]===void 0);if(w.route.lazy||H){s.isStatic&&(m=!0),v>=0?u=u.slice(0,v+1):u=[u[0]];break}}}}let g=s==null?void 0:s.onError,y=l&&g?(k,w)=>{var O,F;g(k,{location:l.location,params:((F=(O=l.matches)==null?void 0:O[0])==null?void 0:F.params)??{},unstable_pattern:u0(l.matches),errorInfo:w})}:void 0;return u.reduceRight((k,w,O)=>{let F,H=!1,q=null,P=null;l&&(F=f&&w.route.id?f[w.route.id]:void 0,q=w.route.errorElement||T0,m&&(v<0&&O===0?(rg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,P=null):v===O&&(H=!0,P=w.route.hydrateFallbackElement||null)));let z=a.concat(u.slice(0,O+1)),G=()=>{let U;return F?U=q:H?U=P:w.route.Component?U=A.createElement(w.route.Component,null):w.route.element?U=w.route.element:U=k,A.createElement(A0,{match:w,routeContext:{outlet:k,matches:z,isDataRoute:l!=null},children:U})};return l&&(w.route.ErrorBoundary||w.route.errorElement||O===0)?A.createElement(ig,{location:l.location,revalidation:l.revalidation,component:q,error:F,children:G(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:y}):G()},null)}function wu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D0(r){let a=A.useContext(Ci);return De(a,wu(r)),a}function I0(r){let a=A.useContext(bo);return De(a,wu(r)),a}function M0(r){let a=A.useContext(Nt);return De(a,wu(r)),a}function Su(r){let a=M0(r),s=a.matches[a.matches.length-1];return De(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function _0(){return Su("useRouteId")}function N0(){var l;let r=A.useContext(Cu),a=I0("useRouteError"),s=Su("useRouteError");return r!==void 0?r:(l=a.errors)==null?void 0:l[s]}function O0(){let{router:r}=D0("useNavigate"),a=Su("useNavigate"),s=A.useRef(!1);return tg(()=>{s.current=!0}),A.useCallback(async(u,f={})=>{qt(s.current,eg),s.current&&(typeof u=="number"?await r.navigate(u):await r.navigate(u,{fromRouteId:a,...f}))},[r,a])}var rp={};function rg(r,a,s){!a&&!rp[r]&&(rp[r]=!0,qt(!1,s))}A.memo(B0);function B0({routes:r,future:a,state:s,isStatic:l,onError:u}){return ag(r,void 0,{state:s,isStatic:l,onError:u})}function U0({to:r,replace:a,state:s,relative:l}){De(xi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=A.useContext(Ct);qt(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=A.useContext(Nt),{pathname:m}=Pt(),v=xu(),g=vo(r,bu(f),m,l==="path"),y=JSON.stringify(g);return A.useEffect(()=>{v(JSON.parse(y),{replace:a,state:s,relative:l})},[v,y,l,a,s]),null}function z0(r){return w0(r.context)}function Xt(r){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function L0({basename:r="/",children:a=null,location:s,navigationType:l="POP",navigator:u,static:f=!1,unstable_useTransitions:m}){De(!xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=r.replace(/^\/*/,"/"),g=A.useMemo(()=>({basename:v,navigator:u,static:f,unstable_useTransitions:m,future:{}}),[v,u,f,m]);typeof s=="string"&&(s=bi(s));let{pathname:y="/",search:k="",hash:w="",state:O=null,key:F="default",unstable_mask:H}=s,q=A.useMemo(()=>{let P=xn(y,v);return P==null?null:{location:{pathname:P,search:k,hash:w,state:O,key:F,unstable_mask:H},navigationType:l}},[v,y,k,w,O,F,l,H]);return qt(q!=null,`<Router basename="${v}"> is not able to match the URL "${y}${k}${w}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:A.createElement(Ct.Provider,{value:g},A.createElement(Er.Provider,{children:a,value:q}))}function j0({children:r,location:a}){return S0(su(r),a)}function su(r,a=[]){let s=[];return A.Children.forEach(r,(l,u)=>{if(!A.isValidElement(l))return;let f=[...a,u];if(l.type===A.Fragment){s.push.apply(s,su(l.props.children,f));return}De(l.type===Xt,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!l.props.index||!l.props.children,"An index route cannot have child routes.");let m={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(m.children=su(l.props.children,f)),s.push(m)}),s}var to="get",no="application/x-www-form-urlencoded";function Co(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function q0(r){return Co(r)&&r.tagName.toLowerCase()==="button"}function P0(r){return Co(r)&&r.tagName.toLowerCase()==="form"}function F0(r){return Co(r)&&r.tagName.toLowerCase()==="input"}function H0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function G0(r,a){return r.button===0&&(!a||a==="_self")&&!H0(r)}var Ws=null;function V0(){if(Ws===null)try{new FormData(document.createElement("form"),0),Ws=!1}catch{Ws=!0}return Ws}var Y0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jc(r){return r!=null&&!Y0.has(r)?(qt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${no}"`),null):r}function K0(r,a){let s,l,u,f,m;if(P0(r)){let v=r.getAttribute("action");l=v?xn(v,a):null,s=r.getAttribute("method")||to,u=Jc(r.getAttribute("enctype"))||no,f=new FormData(r)}else if(q0(r)||F0(r)&&(r.type==="submit"||r.type==="image")){let v=r.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||v.getAttribute("action");if(l=g?xn(g,a):null,s=r.getAttribute("formmethod")||v.getAttribute("method")||to,u=Jc(r.getAttribute("formenctype"))||Jc(v.getAttribute("enctype"))||no,f=new FormData(v,r),!V0()){let{name:y,type:k,value:w}=r;if(k==="image"){let O=y?`${y}.`:"";f.append(`${O}x`,"0"),f.append(`${O}y`,"0")}else y&&f.append(y,w)}}else{if(Co(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=to,l=null,u=no,m=r}return f&&u==="text/plain"&&(m=f,f=void 0),{action:l,method:s.toLowerCase(),encType:u,formData:f,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ku(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function sg(r,a,s,l){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${l}`:u.pathname=`${u.pathname}.${l}`:u.pathname==="/"?u.pathname=`_root.${l}`:a&&xn(u.pathname,a)==="/"?u.pathname=`${co(a)}/_root.${l}`:u.pathname=`${co(u.pathname)}.${l}`,u}async function X0(r,a){if(r.id in a)return a[r.id];try{let s=await import(r.module);return a[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Q0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function $0(r,a,s){let l=await Promise.all(r.map(async u=>{let f=a.routes[u.route.id];if(f){let m=await X0(f,s);return m.links?m.links():[]}return[]}));return eC(l.flat(1).filter(Q0).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function sp(r,a,s,l,u,f){let m=(g,y)=>s[y]?g.route.id!==s[y].route.id:!0,v=(g,y)=>{var k;return s[y].pathname!==g.pathname||((k=s[y].route.path)==null?void 0:k.endsWith("*"))&&s[y].params["*"]!==g.params["*"]};return f==="assets"?a.filter((g,y)=>m(g,y)||v(g,y)):f==="data"?a.filter((g,y)=>{var w;let k=l.routes[g.route.id];if(!k||!k.hasLoader)return!1;if(m(g,y)||v(g,y))return!0;if(g.route.shouldRevalidate){let O=g.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((w=s[0])==null?void 0:w.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function J0(r,a,{includeHydrateFallback:s}={}){return W0(r.map(l=>{let u=a.routes[l.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),s&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function W0(r){return[...new Set(r)]}function Z0(r){let a={},s=Object.keys(r).sort();for(let l of s)a[l]=r[l];return a}function eC(r,a){let s=new Set;return new Set(a),r.reduce((l,u)=>{let f=JSON.stringify(Z0(u));return s.has(f)||(s.add(f),l.push({key:f,link:u})),l},[])}function Tu(){let r=A.useContext(Ci);return ku(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function tC(){let r=A.useContext(bo);return ku(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Eu=A.createContext(void 0);Eu.displayName="FrameworkContext";function Au(){let r=A.useContext(Eu);return ku(r,"You must render this element inside a <HydratedRouter> element"),r}function nC(r,a){let s=A.useContext(Eu),[l,u]=A.useState(!1),[f,m]=A.useState(!1),{onFocus:v,onBlur:g,onMouseEnter:y,onMouseLeave:k,onTouchStart:w}=a,O=A.useRef(null);A.useEffect(()=>{if(r==="render"&&m(!0),r==="viewport"){let q=z=>{z.forEach(G=>{m(G.isIntersecting)})},P=new IntersectionObserver(q,{threshold:.5});return O.current&&P.observe(O.current),()=>{P.disconnect()}}},[r]),A.useEffect(()=>{if(l){let q=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(q)}}},[l]);let F=()=>{u(!0)},H=()=>{u(!1),m(!1)};return s?r!=="intent"?[f,O,{}]:[f,O,{onFocus:vr(v,F),onBlur:vr(g,H),onMouseEnter:vr(y,F),onMouseLeave:vr(k,H),onTouchStart:vr(w,F)}]:[!1,O,{}]}function vr(r,a){return s=>{r&&r(s),s.defaultPrevented||a(s)}}function aC({page:r,...a}){let s=f0(),{router:l}=Tu(),u=A.useMemo(()=>Gp(l.routes,r,l.basename),[l.routes,r,l.basename]);return u?s?A.createElement(rC,{page:r,matches:u,...a}):A.createElement(sC,{page:r,matches:u,...a}):null}function iC(r){let{manifest:a,routeModules:s}=Au(),[l,u]=A.useState([]);return A.useEffect(()=>{let f=!1;return $0(r,a,s).then(m=>{f||u(m)}),()=>{f=!0}},[r,a,s]),l}function rC({page:r,matches:a,...s}){let l=Pt(),{future:u}=Au(),{basename:f}=Tu(),m=A.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let v=sg(r,f,u.unstable_trailingSlashAwareDataRequests,"rsc"),g=!1,y=[];for(let k of a)typeof k.route.shouldRevalidate=="function"?g=!0:y.push(k.route.id);return g&&y.length>0&&v.searchParams.set("_routes",y.join(",")),[v.pathname+v.search]},[f,u.unstable_trailingSlashAwareDataRequests,r,l,a]);return A.createElement(A.Fragment,null,m.map(v=>A.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...s})))}function sC({page:r,matches:a,...s}){let l=Pt(),{future:u,manifest:f,routeModules:m}=Au(),{basename:v}=Tu(),{loaderData:g,matches:y}=tC(),k=A.useMemo(()=>sp(r,a,y,f,l,"data"),[r,a,y,f,l]),w=A.useMemo(()=>sp(r,a,y,f,l,"assets"),[r,a,y,f,l]),O=A.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let q=new Set,P=!1;if(a.forEach(G=>{var X;let U=f.routes[G.route.id];!U||!U.hasLoader||(!k.some(W=>W.route.id===G.route.id)&&G.route.id in g&&((X=m[G.route.id])!=null&&X.shouldRevalidate)||U.hasClientLoader?P=!0:q.add(G.route.id))}),q.size===0)return[];let z=sg(r,v,u.unstable_trailingSlashAwareDataRequests,"data");return P&&q.size>0&&z.searchParams.set("_routes",a.filter(G=>q.has(G.route.id)).map(G=>G.route.id).join(",")),[z.pathname+z.search]},[v,u.unstable_trailingSlashAwareDataRequests,g,l,f,k,a,r,m]),F=A.useMemo(()=>J0(w,f),[w,f]),H=iC(w);return A.createElement(A.Fragment,null,O.map(q=>A.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...s})),F.map(q=>A.createElement("link",{key:q,rel:"modulepreload",href:q,...s})),H.map(({key:q,link:P})=>A.createElement("link",{key:q,nonce:s.nonce,...P,crossOrigin:P.crossOrigin??s.crossOrigin})))}function oC(...r){return a=>{r.forEach(s=>{typeof s=="function"?s(a):s!=null&&(s.current=a)})}}var lC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lC&&(window.__reactRouterVersion="7.14.2")}catch{}function cC({basename:r,children:a,unstable_useTransitions:s,window:l}){let u=A.useRef();u.current==null&&(u.current=jb({window:l,v5Compat:!0}));let f=u.current,[m,v]=A.useState({action:f.action,location:f.location}),g=A.useCallback(y=>{s===!1?v(y):A.startTransition(()=>v(y))},[s]);return A.useLayoutEffect(()=>f.listen(g),[f,g]),A.createElement(L0,{basename:r,children:a,location:m.location,navigationType:m.action,navigator:f,unstable_useTransitions:s})}var og=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=A.forwardRef(function({onClick:a,discover:s="render",prefetch:l="none",relative:u,reloadDocument:f,replace:m,unstable_mask:v,state:g,target:y,to:k,preventScrollReset:w,viewTransition:O,unstable_defaultShouldRevalidate:F,...H},q){let{basename:P,navigator:z,unstable_useTransitions:G}=A.useContext(Ct),U=typeof k=="string"&&og.test(k),X=Qp(k,P);k=X.to;let W=b0(k,{relative:u}),ue=Pt(),$=null;if(v){let ze=vo(v,[],ue.unstable_mask?ue.unstable_mask.pathname:"/",!0);P!=="/"&&(ze.pathname=ze.pathname==="/"?P:Lt([P,ze.pathname])),$=z.createHref(ze)}let[Ie,Ne,Ft]=nC(l,H),xt=hC(k,{replace:m,unstable_mask:v,state:g,target:y,preventScrollReset:w,relative:u,viewTransition:O,unstable_defaultShouldRevalidate:F,unstable_useTransitions:G});function $e(ze){a&&a(ze),ze.defaultPrevented||xt(ze)}let Ht=!(X.isExternal||f),wt=A.createElement("a",{...H,...Ft,href:(Ht?$:void 0)||X.absoluteURL||W,onClick:Ht?$e:a,ref:oC(q,Ne),target:y,"data-discover":!U&&s==="render"?"true":void 0});return Ie&&!U?A.createElement(A.Fragment,null,wt,A.createElement(aC,{page:W})):wt});We.displayName="Link";var uC=A.forwardRef(function({"aria-current":a="page",caseSensitive:s=!1,className:l="",end:u=!1,style:f,to:m,viewTransition:v,children:g,...y},k){let w=Ar(m,{relative:y.relative}),O=Pt(),F=A.useContext(bo),{navigator:H,basename:q}=A.useContext(Ct),P=F!=null&&vC(w)&&v===!0,z=H.encodeLocation?H.encodeLocation(w).pathname:w.pathname,G=O.pathname,U=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;s||(G=G.toLowerCase(),U=U?U.toLowerCase():null,z=z.toLowerCase()),U&&q&&(U=xn(U,q)||U);const X=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let W=G===z||!u&&G.startsWith(z)&&G.charAt(X)==="/",ue=U!=null&&(U===z||!u&&U.startsWith(z)&&U.charAt(z.length)==="/"),$={isActive:W,isPending:ue,isTransitioning:P},Ie=W?a:void 0,Ne;typeof l=="function"?Ne=l($):Ne=[l,W?"active":null,ue?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let Ft=typeof f=="function"?f($):f;return A.createElement(We,{...y,"aria-current":Ie,className:Ne,ref:k,style:Ft,to:m,viewTransition:v},typeof g=="function"?g($):g)});uC.displayName="NavLink";var dC=A.forwardRef(({discover:r="render",fetcherKey:a,navigate:s,reloadDocument:l,replace:u,state:f,method:m=to,action:v,onSubmit:g,relative:y,preventScrollReset:k,viewTransition:w,unstable_defaultShouldRevalidate:O,...F},H)=>{let{unstable_useTransitions:q}=A.useContext(Ct),P=gC(),z=yC(v,{relative:y}),G=m.toLowerCase()==="get"?"get":"post",U=typeof v=="string"&&og.test(v),X=W=>{if(g&&g(W),W.defaultPrevented)return;W.preventDefault();let ue=W.nativeEvent.submitter,$=(ue==null?void 0:ue.getAttribute("formmethod"))||m,Ie=()=>P(ue||W.currentTarget,{fetcherKey:a,method:$,navigate:s,replace:u,state:f,relative:y,preventScrollReset:k,viewTransition:w,unstable_defaultShouldRevalidate:O});q&&s!==!1?A.startTransition(()=>Ie()):Ie()};return A.createElement("form",{ref:H,method:G,action:z,onSubmit:l?g:X,...F,"data-discover":!U&&r==="render"?"true":void 0})});dC.displayName="Form";function fC(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lg(r){let a=A.useContext(Ci);return De(a,fC(r)),a}function hC(r,{target:a,replace:s,unstable_mask:l,state:u,preventScrollReset:f,relative:m,viewTransition:v,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y}={}){let k=xu(),w=Pt(),O=Ar(r,{relative:m});return A.useCallback(F=>{if(G0(F,a)){F.preventDefault();let H=s!==void 0?s:xr(w)===xr(O),q=()=>k(r,{replace:H,unstable_mask:l,state:u,preventScrollReset:f,relative:m,viewTransition:v,unstable_defaultShouldRevalidate:g});y?A.startTransition(()=>q()):q()}},[w,k,O,s,l,u,a,r,f,m,v,g,y])}var mC=0,pC=()=>`__${String(++mC)}__`;function gC(){let{router:r}=lg("useSubmit"),{basename:a}=A.useContext(Ct),s=_0(),l=r.fetch,u=r.navigate;return A.useCallback(async(f,m={})=>{let{action:v,method:g,encType:y,formData:k,body:w}=K0(f,a);if(m.navigate===!1){let O=m.fetcherKey||pC();await l(O,s,m.action||v,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:k,body:w,formMethod:m.method||g,formEncType:m.encType||y,flushSync:m.flushSync})}else await u(m.action||v,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:k,body:w,formMethod:m.method||g,formEncType:m.encType||y,replace:m.replace,state:m.state,fromRouteId:s,flushSync:m.flushSync,viewTransition:m.viewTransition})},[l,u,a,s])}function yC(r,{relative:a}={}){let{basename:s}=A.useContext(Ct),l=A.useContext(Nt);De(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),f={...Ar(r||".",{relative:a})},m=Pt();if(r==null){f.search=m.search;let v=new URLSearchParams(f.search),g=v.getAll("index");if(g.some(k=>k==="")){v.delete("index"),g.filter(w=>w).forEach(w=>v.append("index",w));let k=v.toString();f.search=k?`?${k}`:""}}return(!r||r===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:Lt([s,f.pathname])),xr(f)}function vC(r,{relative:a}={}){let s=A.useContext(Wp);De(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=lg("useViewTransitionState"),u=Ar(r,{relative:a});if(!s.isTransitioning)return!1;let f=xn(s.currentLocation.pathname,l)||s.currentLocation.pathname,m=xn(s.nextLocation.pathname,l)||s.nextLocation.pathname;return lo(u.pathname,m)!=null||lo(u.pathname,f)!=null}const bC="modulepreload",CC=function(r){return"/"+r},op={},lp=function(a,s,l){let u=Promise.resolve();if(s&&s.length>0){let m=function(y){return Promise.all(y.map(k=>Promise.resolve(k).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),g=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));u=m(s.map(y=>{if(y=CC(y),y in op)return;op[y]=!0;const k=y.endsWith(".css"),w=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${w}`))return;const O=document.createElement("link");if(O.rel=k?"stylesheet":bC,k||(O.as="script"),O.crossOrigin="",O.href=y,g&&O.setAttribute("nonce",g),document.head.appendChild(O),k)return new Promise((F,H)=>{O.addEventListener("load",F),O.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${y}`)))})}))}function f(m){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=m,window.dispatchEvent(v),!v.defaultPrevented)throw m}return u.then(m=>{for(const v of m||[])v.status==="rejected"&&f(v.reason);return a().catch(f)})},xC=()=>{};var cp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=function(r){const a=[];let s=0;for(let l=0;l<r.length;l++){let u=r.charCodeAt(l);u<128?a[s++]=u:u<2048?(a[s++]=u>>6|192,a[s++]=u&63|128):(u&64512)===55296&&l+1<r.length&&(r.charCodeAt(l+1)&64512)===56320?(u=65536+((u&1023)<<10)+(r.charCodeAt(++l)&1023),a[s++]=u>>18|240,a[s++]=u>>12&63|128,a[s++]=u>>6&63|128,a[s++]=u&63|128):(a[s++]=u>>12|224,a[s++]=u>>6&63|128,a[s++]=u&63|128)}return a},wC=function(r){const a=[];let s=0,l=0;for(;s<r.length;){const u=r[s++];if(u<128)a[l++]=String.fromCharCode(u);else if(u>191&&u<224){const f=r[s++];a[l++]=String.fromCharCode((u&31)<<6|f&63)}else if(u>239&&u<365){const f=r[s++],m=r[s++],v=r[s++],g=((u&7)<<18|(f&63)<<12|(m&63)<<6|v&63)-65536;a[l++]=String.fromCharCode(55296+(g>>10)),a[l++]=String.fromCharCode(56320+(g&1023))}else{const f=r[s++],m=r[s++];a[l++]=String.fromCharCode((u&15)<<12|(f&63)<<6|m&63)}}return a.join("")},ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,a){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=a?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let u=0;u<r.length;u+=3){const f=r[u],m=u+1<r.length,v=m?r[u+1]:0,g=u+2<r.length,y=g?r[u+2]:0,k=f>>2,w=(f&3)<<4|v>>4;let O=(v&15)<<2|y>>6,F=y&63;g||(F=64,m||(O=64)),l.push(s[k],s[w],s[O],s[F])}return l.join("")},encodeString(r,a){return this.HAS_NATIVE_SUPPORT&&!a?btoa(r):this.encodeByteArray(cg(r),a)},decodeString(r,a){return this.HAS_NATIVE_SUPPORT&&!a?atob(r):wC(this.decodeStringToByteArray(r,a))},decodeStringToByteArray(r,a){this.init_();const s=a?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let u=0;u<r.length;){const f=s[r.charAt(u++)],v=u<r.length?s[r.charAt(u)]:0;++u;const y=u<r.length?s[r.charAt(u)]:64;++u;const w=u<r.length?s[r.charAt(u)]:64;if(++u,f==null||v==null||y==null||w==null)throw new SC;const O=f<<2|v>>4;if(l.push(O),y!==64){const F=v<<4&240|y>>2;if(l.push(F),w!==64){const H=y<<6&192|w;l.push(H)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class SC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kC=function(r){const a=cg(r);return ug.encodeByteArray(a,!0)},dg=function(r){return kC(r).replace(/\./g,"")},fg=function(r){try{return ug.decodeString(r,!0)}catch(a){console.error("base64Decode failed: ",a)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=()=>TC().__FIREBASE_DEFAULTS__,AC=()=>{if(typeof process>"u"||typeof cp>"u")return;const r=cp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},RC=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const a=r&&fg(r[1]);return a&&JSON.parse(a)},Ru=()=>{try{return xC()||EC()||AC()||RC()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},DC=r=>{var a,s;return(s=(a=Ru())==null?void 0:a.emulatorHosts)==null?void 0:s[r]},hg=()=>{var r;return(r=Ru())==null?void 0:r.config},mg=r=>{var a;return(a=Ru())==null?void 0:a[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,s)=>{this.resolve=a,this.reject=s})}wrapCallback(a){return(s,l)=>{s?this.reject(s):this.resolve(l),typeof a=="function"&&(this.promise.catch(()=>{}),a.length===1?a(s):a(s,l))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function _C(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NC(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function OC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BC(){const r=tt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function UC(){try{return typeof indexedDB=="object"}catch{return!1}}function zC(){return new Promise((r,a)=>{try{let s=!0;const l="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(l);u.onsuccess=()=>{u.result.close(),s||self.indexedDB.deleteDatabase(l),r(!0)},u.onupgradeneeded=()=>{s=!1},u.onerror=()=>{var f;a(((f=u.error)==null?void 0:f.message)||"")}}catch(s){a(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="FirebaseError";class ta extends Error{constructor(a,s,l){super(s),this.code=a,this.customData=l,this.name=LC,Object.setPrototypeOf(this,ta.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(a,s,l){this.service=a,this.serviceName=s,this.errors=l}create(a,...s){const l=s[0]||{},u=`${this.service}/${a}`,f=this.errors[a],m=f?jC(f,l):"Error",v=`${this.serviceName}: ${m} (${u}).`;return new ta(u,v,l)}}function jC(r,a){return r.replace(qC,(s,l)=>{const u=a[l];return u!=null?String(u):`<${l}?>`})}const qC=/\{\$([^}]+)}/g;function PC(r){for(const a in r)if(Object.prototype.hasOwnProperty.call(r,a))return!1;return!0}function gi(r,a){if(r===a)return!0;const s=Object.keys(r),l=Object.keys(a);for(const u of s){if(!l.includes(u))return!1;const f=r[u],m=a[u];if(up(f)&&up(m)){if(!gi(f,m))return!1}else if(f!==m)return!1}for(const u of l)if(!s.includes(u))return!1;return!0}function up(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r){const a=[];for(const[s,l]of Object.entries(r))Array.isArray(l)?l.forEach(u=>{a.push(encodeURIComponent(s)+"="+encodeURIComponent(u))}):a.push(encodeURIComponent(s)+"="+encodeURIComponent(l));return a.length?"&"+a.join("&"):""}function FC(r,a){const s=new HC(r,a);return s.subscribe.bind(s)}class HC{constructor(a,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{a(this)}).catch(l=>{this.error(l)})}next(a){this.forEachObserver(s=>{s.next(a)})}error(a){this.forEachObserver(s=>{s.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,s,l){let u;if(a===void 0&&s===void 0&&l===void 0)throw new Error("Missing Observer.");GC(a,["next","error","complete"])?u=a:u={next:a,error:s,complete:l},u.next===void 0&&(u.next=Wc),u.error===void 0&&(u.error=Wc),u.complete===void 0&&(u.complete=Wc);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),f}unsubscribeOne(a){this.observers===void 0||this.observers[a]===void 0||(delete this.observers[a],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,a)}sendOne(a,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[a]!==void 0)try{s(this.observers[a])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(a){this.finalized||(this.finalized=!0,a!==void 0&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GC(r,a){if(typeof r!="object"||r===null)return!1;for(const s of a)if(s in r&&typeof r[s]=="function")return!0;return!1}function Wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function VC(r){return(await fetch(r,{credentials:"include"})).ok}class yi{constructor(a,s,l){this.name=a,this.instanceFactory=s,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(a,s){this.name=a,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){const s=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(s)){const l=new IC;if(this.instancesDeferred.set(s,l),this.isInitialized(s)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:s});u&&l.resolve(u)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(a){const s=this.normalizeInstanceIdentifier(a==null?void 0:a.identifier),l=(a==null?void 0:a.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,!!this.shouldAutoInitialize()){if(XC(a))try{this.getOrInitializeService({instanceIdentifier:Sa})}catch{}for(const[s,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);try{const f=this.getOrInitializeService({instanceIdentifier:u});l.resolve(f)}catch{}}}}clearInstance(a=Sa){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){const a=Array.from(this.instances.values());await Promise.all([...a.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...a.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(a=Sa){return this.instances.has(a)}getOptions(a=Sa){return this.instancesOptions.get(a)||{}}initialize(a={}){const{options:s={}}=a,l=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:l,options:s});for(const[f,m]of this.instancesDeferred.entries()){const v=this.normalizeInstanceIdentifier(f);l===v&&m.resolve(u)}return u}onInit(a,s){const l=this.normalizeInstanceIdentifier(s),u=this.onInitCallbacks.get(l)??new Set;u.add(a),this.onInitCallbacks.set(l,u);const f=this.instances.get(l);return f&&a(f,l),()=>{u.delete(a)}}invokeOnInitCallbacks(a,s){const l=this.onInitCallbacks.get(s);if(l)for(const u of l)try{u(a,s)}catch{}}getOrInitializeService({instanceIdentifier:a,options:s={}}){let l=this.instances.get(a);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:KC(a),options:s}),this.instances.set(a,l),this.instancesOptions.set(a,s),this.invokeOnInitCallbacks(l,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,l)}catch{}return l||null}normalizeInstanceIdentifier(a=Sa){return this.component?this.component.multipleInstances?a:Sa:a}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KC(r){return r===Sa?void 0:r}function XC(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(a){this.name=a,this.providers=new Map}addComponent(a){const s=this.getProvider(a.name);if(s.isComponentSet())throw new Error(`Component ${a.name} has already been registered with ${this.name}`);s.setComponent(a)}addOrOverwriteComponent(a){this.getProvider(a.name).isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);const s=new YC(a,this);return this.providers.set(a,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Te||(Te={}));const $C={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},JC=Te.INFO,WC={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},ZC=(r,a,...s)=>{if(a<r.logLevel)return;const l=new Date().toISOString(),u=WC[a];if(u)console[u](`[${l}]  ${r.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${a})`)};class pg{constructor(a){this.name=a,this._logLevel=JC,this._logHandler=ZC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in Te))throw new TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel=typeof a=="string"?$C[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if(typeof a!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...a),this._logHandler(this,Te.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...a),this._logHandler(this,Te.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...a),this._logHandler(this,Te.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...a),this._logHandler(this,Te.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...a),this._logHandler(this,Te.ERROR,...a)}}const ex=(r,a)=>a.some(s=>r instanceof s);let dp,fp;function tx(){return dp||(dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nx(){return fp||(fp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,ou=new WeakMap,yg=new WeakMap,Zc=new WeakMap,Iu=new WeakMap;function ax(r){const a=new Promise((s,l)=>{const u=()=>{r.removeEventListener("success",f),r.removeEventListener("error",m)},f=()=>{s(Zn(r.result)),u()},m=()=>{l(r.error),u()};r.addEventListener("success",f),r.addEventListener("error",m)});return a.then(s=>{s instanceof IDBCursor&&gg.set(s,r)}).catch(()=>{}),Iu.set(a,r),a}function ix(r){if(ou.has(r))return;const a=new Promise((s,l)=>{const u=()=>{r.removeEventListener("complete",f),r.removeEventListener("error",m),r.removeEventListener("abort",m)},f=()=>{s(),u()},m=()=>{l(r.error||new DOMException("AbortError","AbortError")),u()};r.addEventListener("complete",f),r.addEventListener("error",m),r.addEventListener("abort",m)});ou.set(r,a)}let lu={get(r,a,s){if(r instanceof IDBTransaction){if(a==="done")return ou.get(r);if(a==="objectStoreNames")return r.objectStoreNames||yg.get(r);if(a==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return Zn(r[a])},set(r,a,s){return r[a]=s,!0},has(r,a){return r instanceof IDBTransaction&&(a==="done"||a==="store")?!0:a in r}};function rx(r){lu=r(lu)}function sx(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(a,...s){const l=r.call(eu(this),a,...s);return yg.set(l,a.sort?a.sort():[a]),Zn(l)}:nx().includes(r)?function(...a){return r.apply(eu(this),a),Zn(gg.get(this))}:function(...a){return Zn(r.apply(eu(this),a))}}function ox(r){return typeof r=="function"?sx(r):(r instanceof IDBTransaction&&ix(r),ex(r,tx())?new Proxy(r,lu):r)}function Zn(r){if(r instanceof IDBRequest)return ax(r);if(Zc.has(r))return Zc.get(r);const a=ox(r);return a!==r&&(Zc.set(r,a),Iu.set(a,r)),a}const eu=r=>Iu.get(r);function lx(r,a,{blocked:s,upgrade:l,blocking:u,terminated:f}={}){const m=indexedDB.open(r,a),v=Zn(m);return l&&m.addEventListener("upgradeneeded",g=>{l(Zn(m.result),g.oldVersion,g.newVersion,Zn(m.transaction),g)}),s&&m.addEventListener("blocked",g=>s(g.oldVersion,g.newVersion,g)),v.then(g=>{f&&g.addEventListener("close",()=>f()),u&&g.addEventListener("versionchange",y=>u(y.oldVersion,y.newVersion,y))}).catch(()=>{}),v}const cx=["get","getKey","getAll","getAllKeys","count"],ux=["put","add","delete","clear"],tu=new Map;function hp(r,a){if(!(r instanceof IDBDatabase&&!(a in r)&&typeof a=="string"))return;if(tu.get(a))return tu.get(a);const s=a.replace(/FromIndex$/,""),l=a!==s,u=ux.includes(s);if(!(s in(l?IDBIndex:IDBObjectStore).prototype)||!(u||cx.includes(s)))return;const f=async function(m,...v){const g=this.transaction(m,u?"readwrite":"readonly");let y=g.store;return l&&(y=y.index(v.shift())),(await Promise.all([y[s](...v),u&&g.done]))[0]};return tu.set(a,f),f}rx(r=>({...r,get:(a,s,l)=>hp(a,s)||r.get(a,s,l),has:(a,s)=>!!hp(a,s)||r.has(a,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(a){this.container=a}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(fx(s)){const l=s.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(s=>s).join(" ")}}function fx(r){const a=r.getComponent();return(a==null?void 0:a.type)==="VERSION"}const cu="@firebase/app",mp="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new pg("@firebase/app"),hx="@firebase/app-compat",mx="@firebase/analytics-compat",px="@firebase/analytics",gx="@firebase/app-check-compat",yx="@firebase/app-check",vx="@firebase/auth",bx="@firebase/auth-compat",Cx="@firebase/database",xx="@firebase/data-connect",wx="@firebase/database-compat",Sx="@firebase/functions",kx="@firebase/functions-compat",Tx="@firebase/installations",Ex="@firebase/installations-compat",Ax="@firebase/messaging",Rx="@firebase/messaging-compat",Dx="@firebase/performance",Ix="@firebase/performance-compat",Mx="@firebase/remote-config",_x="@firebase/remote-config-compat",Nx="@firebase/storage",Ox="@firebase/storage-compat",Bx="@firebase/firestore",Ux="@firebase/ai",zx="@firebase/firestore-compat",Lx="firebase",jx="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="[DEFAULT]",qx={[cu]:"fire-core",[hx]:"fire-core-compat",[px]:"fire-analytics",[mx]:"fire-analytics-compat",[yx]:"fire-app-check",[gx]:"fire-app-check-compat",[vx]:"fire-auth",[bx]:"fire-auth-compat",[Cx]:"fire-rtdb",[xx]:"fire-data-connect",[wx]:"fire-rtdb-compat",[Sx]:"fire-fn",[kx]:"fire-fn-compat",[Tx]:"fire-iid",[Ex]:"fire-iid-compat",[Ax]:"fire-fcm",[Rx]:"fire-fcm-compat",[Dx]:"fire-perf",[Ix]:"fire-perf-compat",[Mx]:"fire-rc",[_x]:"fire-rc-compat",[Nx]:"fire-gcs",[Ox]:"fire-gcs-compat",[Bx]:"fire-fst",[zx]:"fire-fst-compat",[Ux]:"fire-vertex","fire-js":"fire-js",[Lx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Map,Px=new Map,du=new Map;function pp(r,a){try{r.container.addComponent(a)}catch(s){wn.debug(`Component ${a.name} failed to register with FirebaseApp ${r.name}`,s)}}function Sr(r){const a=r.name;if(du.has(a))return wn.debug(`There were multiple attempts to register component ${a}.`),!1;du.set(a,r);for(const s of wr.values())pp(s,r);for(const s of Px.values())pp(s,r);return!0}function vg(r,a){const s=r.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),r.container.getProvider(a)}function Qt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ea=new Rr("app","Firebase",Fx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(a,s,l){this._isDeleted=!1,this._options={...a},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw ea.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=jx;function bg(r,a={}){let s=r;typeof a!="object"&&(a={name:a});const l={name:uu,automaticDataCollectionEnabled:!0,...a},u=l.name;if(typeof u!="string"||!u)throw ea.create("bad-app-name",{appName:String(u)});if(s||(s=hg()),!s)throw ea.create("no-options");const f=wr.get(u);if(f){if(gi(s,f.options)&&gi(l,f.config))return f;throw ea.create("duplicate-app",{appName:u})}const m=new QC(u);for(const g of du.values())m.addComponent(g);const v=new Hx(s,l,m);return wr.set(u,v),v}function Gx(r=uu){const a=wr.get(r);if(!a&&r===uu&&hg())return bg();if(!a)throw ea.create("no-app",{appName:r});return a}function gp(){return Array.from(wr.values())}function fi(r,a,s){let l=qx[r]??r;s&&(l+=`-${s}`);const u=l.match(/\s|\//),f=a.match(/\s|\//);if(u||f){const m=[`Unable to register library "${l}" with version "${a}":`];u&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${a}" contains illegal characters (whitespace or "/")`),wn.warn(m.join(" "));return}Sr(new yi(`${l}-version`,()=>({library:l,version:a}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx="firebase-heartbeat-database",Yx=1,kr="firebase-heartbeat-store";let nu=null;function Cg(){return nu||(nu=lx(Vx,Yx,{upgrade:(r,a)=>{switch(a){case 0:try{r.createObjectStore(kr)}catch(s){console.warn(s)}}}}).catch(r=>{throw ea.create("idb-open",{originalErrorMessage:r.message})})),nu}async function Kx(r){try{const s=(await Cg()).transaction(kr),l=await s.objectStore(kr).get(xg(r));return await s.done,l}catch(a){if(a instanceof ta)wn.warn(a.message);else{const s=ea.create("idb-get",{originalErrorMessage:a==null?void 0:a.message});wn.warn(s.message)}}}async function yp(r,a){try{const l=(await Cg()).transaction(kr,"readwrite");await l.objectStore(kr).put(a,xg(r)),await l.done}catch(s){if(s instanceof ta)wn.warn(s.message);else{const l=ea.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});wn.warn(l.message)}}}function xg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=1024,Qx=30;class $x{constructor(a){this.container=a,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new Wx(s),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var a,s;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=vp();if(((a=this._heartbeatsCache)==null?void 0:a.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(m=>m.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:u}),this._heartbeatsCache.heartbeats.length>Qx){const m=Zx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(m,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(l){wn.warn(l)}}async getHeartbeatsHeader(){var a;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((a=this._heartbeatsCache)==null?void 0:a.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=vp(),{heartbeatsToSend:l,unsentEntries:u}=Jx(this._heartbeatsCache.heartbeats),f=dg(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=s,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(s){return wn.warn(s),""}}}function vp(){return new Date().toISOString().substring(0,10)}function Jx(r,a=Xx){const s=[];let l=r.slice();for(const u of r){const f=s.find(m=>m.agent===u.agent);if(f){if(f.dates.push(u.date),bp(s)>a){f.dates.pop();break}}else if(s.push({agent:u.agent,dates:[u.date]}),bp(s)>a){s.pop();break}l=l.slice(1)}return{heartbeatsToSend:s,unsentEntries:l}}class Wx{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UC()?zC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Kx(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(a){if(await this._canUseIndexedDBPromise){const l=await this.read();return yp(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:a.heartbeats})}else return}async add(a){if(await this._canUseIndexedDBPromise){const l=await this.read();return yp(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...a.heartbeats]})}else return}}function bp(r){return dg(JSON.stringify({version:2,heartbeats:r})).length}function Zx(r){if(r.length===0)return-1;let a=0,s=r[0].date;for(let l=1;l<r.length;l++)r[l].date<s&&(s=r[l].date,a=l);return a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(r){Sr(new yi("platform-logger",a=>new dx(a),"PRIVATE")),Sr(new yi("heartbeat",a=>new $x(a),"PRIVATE")),fi(cu,mp,r),fi(cu,mp,"esm2020"),fi("fire-js","")}ew("");var tw="firebase",nw="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fi(tw,nw,"app");function wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aw=wg,Sg=new Rr("auth","Firebase",wg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new pg("@firebase/auth");function iw(r,...a){uo.logLevel<=Te.WARN&&uo.warn(`Auth (${Ir}): ${r}`,...a)}function ao(r,...a){uo.logLevel<=Te.ERROR&&uo.error(`Auth (${Ir}): ${r}`,...a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(r,...a){throw _u(r,...a)}function jt(r,...a){return _u(r,...a)}function Mu(r,a,s){const l={...aw(),[a]:s};return new Rr("auth","Firebase",l).create(a,{appName:r.name})}function Ta(r){return Mu(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rw(r,a,s){const l=s;if(!(a instanceof l))throw l.name!==a.constructor.name&&Jt(r,"argument-error"),Mu(r,"argument-error",`Type of ${a.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _u(r,...a){if(typeof r!="string"){const s=a[0],l=[...a.slice(1)];return l[0]&&(l[0].appName=r.name),r._errorFactory.create(s,...l)}return Sg.create(r,...a)}function ee(r,a,...s){if(!r)throw _u(a,...s)}function vn(r){const a="INTERNAL ASSERTION FAILED: "+r;throw ao(a),new Error(a)}function Sn(r,a){r||vn(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function sw(){return Cp()==="http:"||Cp()==="https:"}function Cp(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sw()||NC()||"connection"in navigator)?navigator.onLine:!0}function lw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(a,s){this.shortDelay=a,this.longDelay=s,Sn(s>a,"Short delay should be less than long delay!"),this.isMobile=MC()||OC()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(r,a){Sn(r.emulator,"Emulator should always be set here");const{url:s}=r.emulator;return a?`${s}${a.startsWith("/")?a.slice(1):a}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{static initialize(a,s,l){this.fetchImpl=a,s&&(this.headersImpl=s),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dw=new Mr(3e4,6e4);function Ou(r,a){return r.tenantId&&!a.tenantId?{...a,tenantId:r.tenantId}:a}async function wi(r,a,s,l,u={}){return Tg(r,u,async()=>{let f={},m={};l&&(a==="GET"?m=l:f={body:JSON.stringify(l)});const v=Dr({key:r.config.apiKey,...m}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:a,headers:g,...f};return _C()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Du(r.emulatorConfig.host)&&(y.credentials="include"),kg.fetch()(await Eg(r,r.config.apiHost,s,v),y)})}async function Tg(r,a,s){r._canInitEmulator=!1;const l={...cw,...a};try{const u=new hw(r),f=await Promise.race([s(),u.promise]);u.clearNetworkTimeout();const m=await f.json();if("needConfirmation"in m)throw Zs(r,"account-exists-with-different-credential",m);if(f.ok&&!("errorMessage"in m))return m;{const v=f.ok?m.errorMessage:m.error.message,[g,y]=v.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zs(r,"credential-already-in-use",m);if(g==="EMAIL_EXISTS")throw Zs(r,"email-already-in-use",m);if(g==="USER_DISABLED")throw Zs(r,"user-disabled",m);const k=l[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Mu(r,k,y);Jt(r,k)}}catch(u){if(u instanceof ta)throw u;Jt(r,"network-request-failed",{message:String(u)})}}async function fw(r,a,s,l,u={}){const f=await wi(r,a,s,l,u);return"mfaPendingCredential"in f&&Jt(r,"multi-factor-auth-required",{_serverResponse:f}),f}async function Eg(r,a,s,l){const u=`${a}${s}?${l}`,f=r,m=f.config.emulator?Nu(r.config,u):`${r.config.apiScheme}://${u}`;return uw.includes(s)&&(await f._persistenceManagerAvailable,f._getPersistenceType()==="COOKIE")?f._getPersistence()._getFinalTarget(m).toString():m}class hw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((s,l)=>{this.timer=setTimeout(()=>l(jt(this.auth,"network-request-failed")),dw.get())})}}function Zs(r,a,s){const l={appName:r.name};s.email&&(l.email=s.email),s.phoneNumber&&(l.phoneNumber=s.phoneNumber);const u=jt(r,a,l);return u.customData._tokenResponse=s,u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(r,a){return wi(r,"POST","/v1/accounts:delete",a)}async function fo(r,a){return wi(r,"POST","/v1/accounts:lookup",a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(r){if(r)try{const a=new Date(Number(r));if(!isNaN(a.getTime()))return a.toUTCString()}catch{}}async function pw(r,a=!1){const s=na(r),l=await s.getIdToken(a),u=Bu(l);ee(u&&u.exp&&u.auth_time&&u.iat,s.auth,"internal-error");const f=typeof u.firebase=="object"?u.firebase:void 0,m=f==null?void 0:f.sign_in_provider;return{claims:u,token:l,authTime:br(au(u.auth_time)),issuedAtTime:br(au(u.iat)),expirationTime:br(au(u.exp)),signInProvider:m||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function au(r){return Number(r)*1e3}function Bu(r){const[a,s,l]=r.split(".");if(a===void 0||s===void 0||l===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const u=fg(s);return u?JSON.parse(u):(ao("Failed to decode base64 JWT payload"),null)}catch(u){return ao("Caught error parsing JWT payload as JSON",u==null?void 0:u.toString()),null}}function xp(r){const a=Bu(r);return ee(a,"internal-error"),ee(typeof a.exp<"u","internal-error"),ee(typeof a.iat<"u","internal-error"),Number(a.exp)-Number(a.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(r,a,s=!1){if(s)return a;try{return await a}catch(l){throw l instanceof ta&&gw(l)&&r.auth.currentUser===r&&await r.auth.signOut(),l}}function gw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(a){if(a){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,l)}}schedule(a=!1){if(!this.isRunning)return;const s=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(a){(a==null?void 0:a.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(a,s){this.createdAt=a,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(r){var w;const a=r.auth,s=await r.getIdToken(),l=await Tr(r,fo(a,{idToken:s}));ee(l==null?void 0:l.users.length,a,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const f=(w=u.providerUserInfo)!=null&&w.length?Ag(u.providerUserInfo):[],m=bw(r.providerData,f),v=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),y=v?g:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new hu(u.createdAt,u.lastLoginAt),isAnonymous:y};Object.assign(r,k)}async function vw(r){const a=na(r);await ho(a),await a.auth._persistUserIfCurrent(a),a.auth._notifyListenersIfCurrent(a)}function bw(r,a){return[...r.filter(l=>!a.some(u=>u.providerId===l.providerId)),...a]}function Ag(r){return r.map(({providerId:a,...s})=>({providerId:a,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(r,a){const s=await Tg(r,{},async()=>{const l=Dr({grant_type:"refresh_token",refresh_token:a}).slice(1),{tokenApiHost:u,apiKey:f}=r.config,m=await Eg(r,u,"/v1/token",`key=${f}`),v=await r._getAdditionalHeaders();v["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:v,body:l};return r.emulatorConfig&&Du(r.emulatorConfig.host)&&(g.credentials="include"),kg.fetch()(m,g)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function xw(r,a){return wi(r,"POST","/v2/accounts:revokeToken",Ou(r,a))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){ee(a.idToken,"internal-error"),ee(typeof a.idToken<"u","internal-error"),ee(typeof a.refreshToken<"u","internal-error");const s="expiresIn"in a&&typeof a.expiresIn<"u"?Number(a.expiresIn):xp(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,s)}updateFromIdToken(a){ee(a.length!==0,"internal-error");const s=xp(a);this.updateTokensAndExpiration(a,null,s)}async getToken(a,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,a,"user-token-expired"),this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(a,s){const{accessToken:l,refreshToken:u,expiresIn:f}=await Cw(a,s);this.updateTokensAndExpiration(l,u,Number(f))}updateTokensAndExpiration(a,s,l){this.refreshToken=s||null,this.accessToken=a||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(a,s){const{refreshToken:l,accessToken:u,expirationTime:f}=s,m=new hi;return l&&(ee(typeof l=="string","internal-error",{appName:a}),m.refreshToken=l),u&&(ee(typeof u=="string","internal-error",{appName:a}),m.accessToken=u),f&&(ee(typeof f=="number","internal-error",{appName:a}),m.expirationTime=f),m}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(r,a){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:a})}class zt{constructor({uid:a,auth:s,stsTokenManager:l,...u}){this.providerId="firebase",this.proactiveRefresh=new yw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new hu(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(a){const s=await Tr(this,this.stsTokenManager.getToken(this.auth,a));return ee(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(a){return pw(this,a)}reload(){return vw(this)}_assign(a){this!==a&&(ee(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(s=>({...s})),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){const s=new zt({...this,auth:a,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(a){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,s=!1){let l=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),l=!0),s&&await ho(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Ta(this.auth));const a=await this.getIdToken();return await Tr(this,mw(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>({...a})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,s){const l=s.displayName??void 0,u=s.email??void 0,f=s.phoneNumber??void 0,m=s.photoURL??void 0,v=s.tenantId??void 0,g=s._redirectEventId??void 0,y=s.createdAt??void 0,k=s.lastLoginAt??void 0,{uid:w,emailVerified:O,isAnonymous:F,providerData:H,stsTokenManager:q}=s;ee(w&&q,a,"internal-error");const P=hi.fromJSON(this.name,q);ee(typeof w=="string",a,"internal-error"),Qn(l,a.name),Qn(u,a.name),ee(typeof O=="boolean",a,"internal-error"),ee(typeof F=="boolean",a,"internal-error"),Qn(f,a.name),Qn(m,a.name),Qn(v,a.name),Qn(g,a.name),Qn(y,a.name),Qn(k,a.name);const z=new zt({uid:w,auth:a,email:u,emailVerified:O,displayName:l,isAnonymous:F,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:P,createdAt:y,lastLoginAt:k});return H&&Array.isArray(H)&&(z.providerData=H.map(G=>({...G}))),g&&(z._redirectEventId=g),z}static async _fromIdTokenResponse(a,s,l=!1){const u=new hi;u.updateFromServerResponse(s);const f=new zt({uid:s.localId,auth:a,stsTokenManager:u,isAnonymous:l});return await ho(f),f}static async _fromGetAccountInfoResponse(a,s,l){const u=s.users[0];ee(u.localId!==void 0,"internal-error");const f=u.providerUserInfo!==void 0?Ag(u.providerUserInfo):[],m=!(u.email&&u.passwordHash)&&!(f!=null&&f.length),v=new hi;v.updateFromIdToken(l);const g=new zt({uid:u.localId,auth:a,stsTokenManager:v,isAnonymous:m}),y={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new hu(u.createdAt,u.lastLoginAt),isAnonymous:!(u.email&&u.passwordHash)&&!(f!=null&&f.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Map;function bn(r){Sn(r instanceof Function,"Expected a class definition");let a=wp.get(r);return a?(Sn(a instanceof r,"Instance stored in cache mismatched with class"),a):(a=new r,wp.set(r,a),a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,s){this.storage[a]=s}async _get(a){const s=this.storage[a];return s===void 0?null:s}async _remove(a){delete this.storage[a]}_addListener(a,s){}_removeListener(a,s){}}Rg.type="NONE";const Sp=Rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(r,a,s){return`firebase:${r}:${a}:${s}`}class mi{constructor(a,s,l){this.persistence=a,this.auth=s,this.userKey=l;const{config:u,name:f}=this.auth;this.fullUserKey=io(this.userKey,u.apiKey,f),this.fullPersistenceKey=io("persistence",u.apiKey,f),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){const a=await this.persistence._get(this.fullUserKey);if(!a)return null;if(typeof a=="string"){const s=await fo(this.auth,{idToken:a}).catch(()=>{});return s?zt._fromGetAccountInfoResponse(this.auth,s,a):null}return zt._fromJSON(this.auth,a)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,s,l="authUser"){if(!s.length)return new mi(bn(Sp),a,l);const u=(await Promise.all(s.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let f=u[0]||bn(Sp);const m=io(l,a.config.apiKey,a.name);let v=null;for(const y of s)try{const k=await y._get(m);if(k){let w;if(typeof k=="string"){const O=await fo(a,{idToken:k}).catch(()=>{});if(!O)break;w=await zt._fromGetAccountInfoResponse(a,O,k)}else w=zt._fromJSON(a,k);y!==f&&(v=w),f=y;break}}catch{}const g=u.filter(y=>y._shouldAllowMigration);return!f._shouldAllowMigration||!g.length?new mi(f,a,l):(f=g[0],v&&await f._set(m,v.toJSON()),await Promise.all(s.map(async y=>{if(y!==f)try{await y._remove(m)}catch{}})),new mi(f,a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(r){const a=r.toLowerCase();if(a.includes("opera/")||a.includes("opr/")||a.includes("opios/"))return"Opera";if(_g(a))return"IEMobile";if(a.includes("msie")||a.includes("trident/"))return"IE";if(a.includes("edge/"))return"Edge";if(Dg(a))return"Firefox";if(a.includes("silk/"))return"Silk";if(Og(a))return"Blackberry";if(Bg(a))return"Webos";if(Ig(a))return"Safari";if((a.includes("chrome/")||Mg(a))&&!a.includes("edge/"))return"Chrome";if(Ng(a))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=r.match(s);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function Dg(r=tt()){return/firefox\//i.test(r)}function Ig(r=tt()){const a=r.toLowerCase();return a.includes("safari/")&&!a.includes("chrome/")&&!a.includes("crios/")&&!a.includes("android")}function Mg(r=tt()){return/crios\//i.test(r)}function _g(r=tt()){return/iemobile/i.test(r)}function Ng(r=tt()){return/android/i.test(r)}function Og(r=tt()){return/blackberry/i.test(r)}function Bg(r=tt()){return/webos/i.test(r)}function Uu(r=tt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ww(r=tt()){var a;return Uu(r)&&!!((a=window.navigator)!=null&&a.standalone)}function Sw(){return BC()&&document.documentMode===10}function Ug(r=tt()){return Uu(r)||Ng(r)||Bg(r)||Og(r)||/windows phone/i.test(r)||_g(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(r,a=[]){let s;switch(r){case"Browser":s=kp(tt());break;case"Worker":s=`${kp(tt())}-${r}`;break;default:s=r}const l=a.length?a.join(","):"FirebaseCore-web";return`${s}/JsCore/${Ir}/${l}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,s){const l=f=>new Promise((m,v)=>{try{const g=a(f);m(g)}catch(g){v(g)}});l.onAbort=s,this.queue.push(l);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(a){if(this.auth.currentUser===a)return;const s=[];try{for(const l of this.queue)await l(a),l.onAbort&&s.push(l.onAbort)}catch(l){s.reverse();for(const u of s)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(r,a={}){return wi(r,"GET","/v2/passwordPolicy",Ou(r,a))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=6;class Aw{constructor(a){var l;const s=a.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??Ew,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=a.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((l=a.allowedNonAlphanumericCharacters)==null?void 0:l.join(""))??"",this.forceUpgradeOnSignin=a.forceUpgradeOnSignin??!1,this.schemaVersion=a.schemaVersion}validatePassword(a){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(a,s),this.validatePasswordCharacterOptions(a,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(a,s){const l=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;l&&(s.meetsMinPasswordLength=a.length>=l),u&&(s.meetsMaxPasswordLength=a.length<=u)}validatePasswordCharacterOptions(a,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let l;for(let u=0;u<a.length;u++)l=a.charAt(u),this.updatePasswordCharacterOptionsStatuses(s,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(a,s,l,u,f){this.customStrengthOptions.containsLowercaseLetter&&(a.containsLowercaseLetter||(a.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(a.containsUppercaseLetter||(a.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(a.containsNumericCharacter||(a.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(a.containsNonAlphanumericCharacter||(a.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(a,s,l,u){this.app=a,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=l,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tp(this),this.idTokenSubscription=new Tp(this),this.beforeStateQueue=new kw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=u.sdkClientVersion,this._persistenceManagerAvailable=new Promise(f=>this._resolvePersistenceManagerAvailable=f)}_initializeWithPersistence(a,s){return s&&(this._popupRedirectResolver=bn(s)),this._initializationPromise=this.queue(async()=>{var l,u,f;if(!this._deleted&&(this.persistenceManager=await mi.create(this,a),(l=this._resolvePersistenceManagerAvailable)==null||l.call(this),!this._deleted)){if((u=this._popupRedirectResolver)!=null&&u._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((f=this.currentUser)==null?void 0:f.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const a=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!a)){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUserFromIdToken(a){try{const s=await fo(this,{idToken:a}),l=await zt._fromGetAccountInfoResponse(this,s,a);await this.directlySetCurrentUser(l)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(a){var f;if(Qt(this.app)){const m=this.app.settings.authIdToken;return m?new Promise(v=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(m).then(v,v))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const m=(f=this.redirectUser)==null?void 0:f._redirectEventId,v=l==null?void 0:l._redirectEventId,g=await this.tryRedirectSignIn(a);(!m||m===v)&&(g!=null&&g.user)&&(l=g.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(m){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(m))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(a){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(a){try{await ho(a)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=lw()}async _delete(){this._deleted=!0}async updateCurrentUser(a){if(Qt(this.app))return Promise.reject(Ta(this));const s=a?na(a):null;return s&&ee(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(a,s=!1){if(!this._deleted)return a&&ee(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Ta(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(a){return Qt(this.app)?Promise.reject(Ta(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(a))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(a){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(a)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const a=await Tw(this),s=new Aw(a);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(a){this._errorFactory=new Rr("auth","Firebase",a())}onAuthStateChanged(a,s,l){return this.registerStateListener(this.authStateSubscription,a,s,l)}beforeAuthStateChanged(a,s){return this.beforeStateQueue.pushCallback(a,s)}onIdTokenChanged(a,s,l){return this.registerStateListener(this.idTokenSubscription,a,s,l)}authStateReady(){return new Promise((a,s)=>{if(this.currentUser)a();else{const l=this.onAuthStateChanged(()=>{l(),a()},s)}})}async revokeAccessToken(a){if(this.currentUser){const s=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:a,idToken:s};this.tenantId!=null&&(l.tenantId=this.tenantId),await xw(this,l)}}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(a=this._currentUser)==null?void 0:a.toJSON()}}async _setRedirectUser(a,s){const l=await this.getOrInitRedirectPersistenceManager(s);return a===null?l.removeCurrentUser():l.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){const s=a&&bn(a)||this._popupRedirectResolver;ee(s,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[bn(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){var s,l;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)==null?void 0:s._redirectEventId)===a?this._currentUser:((l=this.redirectUser)==null?void 0:l._redirectEventId)===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=((s=this.currentUser)==null?void 0:s.uid)??null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,s,l,u){if(this._deleted)return()=>{};const f=typeof s=="function"?s:s.next.bind(s);let m=!1;const v=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(v,this,"internal-error"),v.then(()=>{m||f(this.currentUser)}),typeof s=="function"){const g=a.addObserver(s,l,u);return()=>{m=!0,g()}}else{const g=a.addObserver(s);return()=>{m=!0,g()}}}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!a||this.frameworks.includes(a)||(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var u;const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const s=await((u=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:u.getHeartbeatsHeader());s&&(a["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(a["X-Firebase-AppCheck"]=l),a}async _getAppCheckToken(){var s;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const a=await((s=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getToken());return a!=null&&a.error&&iw(`Error while retrieving App Check token: ${a.error}`),a==null?void 0:a.token}}function xo(r){return na(r)}class Tp{constructor(a){this.auth=a,this.observer=null,this.addObserver=FC(s=>this.observer=s)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dw(r){zu=r}function Iw(r){return zu.loadJS(r)}function Mw(){return zu.gapiScript}function _w(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(r,a){const s=vg(r,"auth");if(s.isInitialized()){const u=s.getImmediate(),f=s.getOptions();if(gi(f,a??{}))return u;Jt(u,"already-initialized")}return s.initialize({options:a})}function Ow(r,a){const s=(a==null?void 0:a.persistence)||[],l=(Array.isArray(s)?s:[s]).map(bn);a!=null&&a.errorMap&&r._updateErrorMap(a.errorMap),r._initializeWithPersistence(l,a==null?void 0:a.popupRedirectResolver)}function Bw(r,a,s){const l=xo(r);ee(/^https?:\/\//.test(a),l,"invalid-emulator-scheme");const u=!1,f=Lg(a),{host:m,port:v}=Uw(a),g=v===null?"":`:${v}`,y={url:`${f}//${m}${g}/`},k=Object.freeze({host:m,port:v,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:u})});if(!l._canInitEmulator){ee(l.config.emulator&&l.emulatorConfig,l,"emulator-config-failed"),ee(gi(y,l.config.emulator)&&gi(k,l.emulatorConfig),l,"emulator-config-failed");return}l.config.emulator=y,l.emulatorConfig=k,l.settings.appVerificationDisabledForTesting=!0,Du(m)?VC(`${f}//${m}${g}`):zw()}function Lg(r){const a=r.indexOf(":");return a<0?"":r.substr(0,a+1)}function Uw(r){const a=Lg(r),s=/(\/\/)?([^?#/]+)/.exec(r.substr(a.length));if(!s)return{host:"",port:null};const l=s[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(l);if(u){const f=u[1];return{host:f,port:Ep(l.substr(f.length+1))}}else{const[f,m]=l.split(":");return{host:f,port:Ep(m)}}}function Ep(r){if(!r)return null;const a=Number(r);return isNaN(a)?null:a}function zw(){function r(){const a=document.createElement("p"),s=a.style;a.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",a.classList.add("firebase-emulator-warning"),document.body.appendChild(a)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(a,s){this.providerId=a,this.signInMethod=s}toJSON(){return vn("not implemented")}_getIdTokenResponse(a){return vn("not implemented")}_linkToIdToken(a,s){return vn("not implemented")}_getReauthenticationResolver(a){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(r,a){return fw(r,"POST","/v1/accounts:signInWithIdp",Ou(r,a))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="http://localhost";class Ea extends jg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){const s=new Ea(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(s.idToken=a.idToken),a.accessToken&&(s.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(s.nonce=a.nonce),a.pendingToken&&(s.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(s.accessToken=a.oauthToken,s.secret=a.oauthTokenSecret):Jt("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){const s=typeof a=="string"?JSON.parse(a):a,{providerId:l,signInMethod:u,...f}=s;if(!l||!u)return null;const m=new Ea(l,u);return m.idToken=f.idToken||void 0,m.accessToken=f.accessToken||void 0,m.secret=f.secret,m.nonce=f.nonce,m.pendingToken=f.pendingToken||null,m}_getIdTokenResponse(a){const s=this.buildRequest();return pi(a,s)}_linkToIdToken(a,s){const l=this.buildRequest();return l.idToken=s,pi(a,l)}_getReauthenticationResolver(a){const s=this.buildRequest();return s.autoCreate=!1,pi(a,s)}buildRequest(){const a={requestUri:Lw,returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),a.postBody=Dr(s)}return a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends _r{constructor(){super("facebook.com")}static credential(a){return Ea._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return $n.credentialFromTaggedObject(a)}static credentialFromError(a){return $n.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return $n.credential(a.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends _r{constructor(){super("google.com"),this.addScope("profile")}static credential(a,s){return Ea._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:s})}static credentialFromResult(a){return yn.credentialFromTaggedObject(a)}static credentialFromError(a){return yn.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthIdToken:s,oauthAccessToken:l}=a;if(!s&&!l)return null;try{return yn.credential(s,l)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends _r{constructor(){super("github.com")}static credential(a){return Ea._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return Jn.credentialFromTaggedObject(a)}static credentialFromError(a){return Jn.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return Jn.credential(a.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends _r{constructor(){super("twitter.com")}static credential(a,s){return Ea._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:s})}static credentialFromResult(a){return Wn.credentialFromTaggedObject(a)}static credentialFromError(a){return Wn.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthAccessToken:s,oauthTokenSecret:l}=a;if(!s||!l)return null;try{return Wn.credential(s,l)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,s,l,u=!1){const f=await zt._fromIdTokenResponse(a,l,u),m=Ap(l);return new vi({user:f,providerId:m,_tokenResponse:l,operationType:s})}static async _forOperation(a,s,l){await a._updateTokensIfNecessary(l,!0);const u=Ap(l);return new vi({user:a,providerId:u,_tokenResponse:l,operationType:s})}}function Ap(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends ta{constructor(a,s,l,u){super(s.code,s.message),this.operationType=l,this.user=u,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:a.name,tenantId:a.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(a,s,l,u){return new mo(a,s,l,u)}}function qg(r,a,s,l){return(a==="reauthenticate"?s._getReauthenticationResolver(r):s._getIdTokenResponse(r)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(r,f,a,l):f})}async function jw(r,a,s=!1){const l=await Tr(r,a._linkToIdToken(r.auth,await r.getIdToken()),s);return vi._forOperation(r,"link",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(r,a,s=!1){const{auth:l}=r;if(Qt(l.app))return Promise.reject(Ta(l));const u="reauthenticate";try{const f=await Tr(r,qg(l,u,a,r),s);ee(f.idToken,l,"internal-error");const m=Bu(f.idToken);ee(m,l,"internal-error");const{sub:v}=m;return ee(r.uid===v,l,"user-mismatch"),vi._forOperation(r,u,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&Jt(l,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(r,a,s=!1){if(Qt(r.app))return Promise.reject(Ta(r));const l="signIn",u=await qg(r,l,a),f=await vi._fromIdTokenResponse(r,l,u);return s||await r._updateCurrentUser(f.user),f}function Fw(r,a,s,l){return na(r).onIdTokenChanged(a,s,l)}function Hw(r,a,s){return na(r).beforeAuthStateChanged(a,s)}function Pg(r,a,s,l){return na(r).onAuthStateChanged(a,s,l)}function Gw(r){return na(r).signOut()}const po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(a,s){this.storageRetriever=a,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(a,s){return this.storage.setItem(a,JSON.stringify(s)),Promise.resolve()}_get(a){const s=this.storage.getItem(a);return Promise.resolve(s?JSON.parse(s):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=1e3,Yw=10;class Hg extends Fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,s)=>this.onStorageEvent(a,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(const s of Object.keys(this.listeners)){const l=this.storage.getItem(s),u=this.localCache[s];l!==u&&a(s,u,l)}}onStorageEvent(a,s=!1){if(!a.key){this.forAllChangedKeys((m,v,g)=>{this.notifyListeners(m,g)});return}const l=a.key;s?this.detachListener():this.stopPolling();const u=()=>{const m=this.storage.getItem(l);!s&&this.localCache[l]===m||this.notifyListeners(l,m)},f=this.storage.getItem(l);Sw()&&f!==a.newValue&&a.newValue!==a.oldValue?setTimeout(u,Yw):u()}notifyListeners(a,s){this.localCache[a]=s;const l=this.listeners[a];if(l)for(const u of Array.from(l))u(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,s,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:s,newValue:l}),!0)})},Vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(s)}_removeListener(a,s){this.listeners[a]&&(this.listeners[a].delete(s),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(a,s){await super._set(a,s),this.localCache[a]=JSON.stringify(s)}async _get(a){const s=await super._get(a);return this.localCache[a]=JSON.stringify(s),s}async _remove(a){await super._remove(a),delete this.localCache[a]}}Hg.type="LOCAL";const Kw=Hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends Fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,s){}_removeListener(a,s){}}Gg.type="SESSION";const Vg=Gg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(r){return Promise.all(r.map(async a=>{try{return{fulfilled:!0,value:await a}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){const s=this.receivers.find(u=>u.isListeningto(a));if(s)return s;const l=new wo(a);return this.receivers.push(l),l}isListeningto(a){return this.eventTarget===a}async handleEvent(a){const s=a,{eventId:l,eventType:u,data:f}=s.data,m=this.handlersMap[u];if(!(m!=null&&m.size))return;s.ports[0].postMessage({status:"ack",eventId:l,eventType:u});const v=Array.from(m).map(async y=>y(s.origin,f)),g=await Xw(v);s.ports[0].postMessage({status:"done",eventId:l,eventType:u,response:g})}_subscribe(a,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(s)}_unsubscribe(a,s){this.handlersMap[a]&&s&&this.handlersMap[a].delete(s),(!s||this.handlersMap[a].size===0)&&delete this.handlersMap[a],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(r="",a=10){let s="";for(let l=0;l<a;l++)s+=Math.floor(Math.random()*10);return r+s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,s,l=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let f,m;return new Promise((v,g)=>{const y=ju("",20);u.port1.start();const k=setTimeout(()=>{g(new Error("unsupported_event"))},l);m={messageChannel:u,onMessage(w){const O=w;if(O.data.eventId===y)switch(O.data.status){case"ack":clearTimeout(k),f=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),v(O.data.response);break;default:clearTimeout(k),clearTimeout(f),g(new Error("invalid_response"));break}}},this.handlers.add(m),u.port1.addEventListener("message",m.onMessage),this.target.postMessage({eventType:a,eventId:y,data:s},[u.port2])}).finally(()=>{m&&this.removeMessageHandler(m)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function $w(r){$t().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function Jw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ww(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Zw(){return Yg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firebaseLocalStorageDb",eS=1,go="firebaseLocalStorage",Xg="fbase_key";class Nr{constructor(a){this.request=a}toPromise(){return new Promise((a,s)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function So(r,a){return r.transaction([go],a?"readwrite":"readonly").objectStore(go)}function tS(){const r=indexedDB.deleteDatabase(Kg);return new Nr(r).toPromise()}function mu(){const r=indexedDB.open(Kg,eS);return new Promise((a,s)=>{r.addEventListener("error",()=>{s(r.error)}),r.addEventListener("upgradeneeded",()=>{const l=r.result;try{l.createObjectStore(go,{keyPath:Xg})}catch(u){s(u)}}),r.addEventListener("success",async()=>{const l=r.result;l.objectStoreNames.contains(go)?a(l):(l.close(),await tS(),a(await mu()))})})}async function Rp(r,a,s){const l=So(r,!0).put({[Xg]:a,value:s});return new Nr(l).toPromise()}async function nS(r,a){const s=So(r,!1).get(a),l=await new Nr(s).toPromise();return l===void 0?null:l.value}function Dp(r,a){const s=So(r,!0).delete(a);return new Nr(s).toPromise()}const aS=800,iS=3;class Qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mu(),this.db)}async _withRetries(a){let s=0;for(;;)try{const l=await this._openDb();return await a(l)}catch(l){if(s++>iS)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(Zw()),this.receiver._subscribe("keyChanged",async(a,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(a,s)=>["keyChanged"])}async initializeSender(){var s,l;if(this.activeServiceWorker=await Jw(),!this.activeServiceWorker)return;this.sender=new Qw(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&(s=a[0])!=null&&s.fulfilled&&(l=a[0])!=null&&l.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){if(!(!this.sender||!this.activeServiceWorker||Ww()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const a=await mu();return await Rp(a,po,"1"),await Dp(a,po),!0}catch{}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,s){return this._withPendingWrite(async()=>(await this._withRetries(l=>Rp(l,a,s)),this.localCache[a]=s,this.notifyServiceWorker(a)))}async _get(a){const s=await this._withRetries(l=>nS(l,a));return this.localCache[a]=s,s}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dp(s,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){const a=await this._withRetries(u=>{const f=So(u,!1).getAll();return new Nr(f).toPromise()});if(!a)return[];if(this.pendingWrites!==0)return[];const s=[],l=new Set;if(a.length!==0)for(const{fbase_key:u,value:f}of a)l.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(f)&&(this.notifyListeners(u,f),s.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!l.has(u)&&(this.notifyListeners(u,null),s.push(u));return s}notifyListeners(a,s){this.localCache[a]=s;const l=this.listeners[a];if(l)for(const u of Array.from(l))u(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(s)}_removeListener(a,s){this.listeners[a]&&(this.listeners[a].delete(s),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qg.type="LOCAL";const rS=Qg;new Mr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(r,a){return a?bn(a):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends jg{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return pi(a,this._buildIdpRequest())}_linkToIdToken(a,s){return pi(a,this._buildIdpRequest(s))}_getReauthenticationResolver(a){return pi(a,this._buildIdpRequest())}_buildIdpRequest(a){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(s.idToken=a),s}}function sS(r){return Pw(r.auth,new qu(r),r.bypassAuthState)}function oS(r){const{auth:a,user:s}=r;return ee(s,a,"internal-error"),qw(s,new qu(r),r.bypassAuthState)}async function lS(r){const{auth:a,user:s}=r;return ee(s,a,"internal-error"),jw(s,new qu(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(a,s,l,u,f=!1){this.auth=a,this.resolver=l,this.user=u,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(a,s)=>{this.pendingPromise={resolve:a,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(a){const{urlResponse:s,sessionId:l,postBody:u,tenantId:f,error:m,type:v}=a;if(m){this.reject(m);return}const g={auth:this.auth,requestUri:s,sessionId:l,tenantId:f||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(v)(g))}catch(y){this.reject(y)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return sS;case"linkViaPopup":case"linkViaRedirect":return lS;case"reauthViaPopup":case"reauthViaRedirect":return oS;default:Jt(this.auth,"internal-error")}}resolve(a){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new Mr(2e3,1e4);async function uS(r,a,s){if(Qt(r.app))return Promise.reject(jt(r,"operation-not-supported-in-this-environment"));const l=xo(r);rw(r,a,Lu);const u=$g(l,s);return new ka(l,"signInViaPopup",a,u).executeNotNull()}class ka extends Jg{constructor(a,s,l,u,f){super(a,s,u,f),this.provider=l,this.authWindow=null,this.pollId=null,ka.currentPopupAction&&ka.currentPopupAction.cancel(),ka.currentPopupAction=this}async executeNotNull(){const a=await this.execute();return ee(a,this.auth,"internal-error"),a}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const a=ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var a;return((a=this.authWindow)==null?void 0:a.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ka.currentPopupAction=null}pollUserCancellation(){const a=()=>{var s,l;if((l=(s=this.authWindow)==null?void 0:s.window)!=null&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(a,cS.get())};a()}}ka.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="pendingRedirect",ro=new Map;class fS extends Jg{constructor(a,s,l=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,l),this.eventId=null}async execute(){let a=ro.get(this.auth._key());if(!a){try{const l=await hS(this.resolver,this.auth)?await super.execute():null;a=()=>Promise.resolve(l)}catch(s){a=()=>Promise.reject(s)}ro.set(this.auth._key(),a)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if(a.type==="signInViaRedirect")return super.onAuthEvent(a);if(a.type==="unknown"){this.resolve(null);return}if(a.eventId){const s=await this.auth._redirectUserForId(a.eventId);if(s)return this.user=s,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hS(r,a){const s=gS(a),l=pS(r);if(!await l._isAvailable())return!1;const u=await l._get(s)==="true";return await l._remove(s),u}function mS(r,a){ro.set(r._key(),a)}function pS(r){return bn(r._redirectPersistence)}function gS(r){return io(dS,r.config.apiKey,r.name)}async function yS(r,a,s=!1){if(Qt(r.app))return Promise.reject(Ta(r));const l=xo(r),u=$g(l,a),m=await new fS(l,u,s).execute();return m&&!s&&(delete m.user._redirectEventId,await l._persistUserIfCurrent(m.user),await l._setRedirectUser(null,a)),m}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=600*1e3;class bS{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let s=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(a,l)&&(s=!0,this.sendToConsumer(a,l),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!CS(a)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=a,s=!0)),s}sendToConsumer(a,s){var l;if(a.error&&!Wg(a)){const u=((l=a.error.code)==null?void 0:l.split("auth/")[1])||"internal-error";s.onError(jt(this.auth,u))}else s.onAuthEvent(a)}isEventForConsumer(a,s){const l=s.eventId===null||!!a.eventId&&a.eventId===s.eventId;return s.filter.includes(a.type)&&l}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=vS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ip(a))}saveEventToCache(a){this.cachedEventUids.add(Ip(a)),this.lastProcessedEventTime=Date.now()}}function Ip(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(a=>a).join("-")}function Wg({type:r,error:a}){return r==="unknown"&&(a==null?void 0:a.code)==="auth/no-auth-event"}function CS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(r,a={}){return wi(r,"GET","/v1/projects",a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SS=/^https?/;async function kS(r){if(r.config.emulator)return;const{authorizedDomains:a}=await xS(r);for(const s of a)try{if(TS(s))return}catch{}Jt(r,"unauthorized-domain")}function TS(r){const a=fu(),{protocol:s,hostname:l}=new URL(a);if(r.startsWith("chrome-extension://")){const m=new URL(r);return m.hostname===""&&l===""?s==="chrome-extension:"&&r.replace("chrome-extension://","")===a.replace("chrome-extension://",""):s==="chrome-extension:"&&m.hostname===l}if(!SS.test(s))return!1;if(wS.test(r))return l===r;const u=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(l)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=new Mr(3e4,6e4);function Mp(){const r=$t().___jsl;if(r!=null&&r.H){for(const a of Object.keys(r.H))if(r.H[a].r=r.H[a].r||[],r.H[a].L=r.H[a].L||[],r.H[a].r=[...r.H[a].L],r.CP)for(let s=0;s<r.CP.length;s++)r.CP[s]=null}}function AS(r){return new Promise((a,s)=>{var u,f,m;function l(){Mp(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{Mp(),s(jt(r,"network-request-failed"))},timeout:ES.get()})}if((f=(u=$t().gapi)==null?void 0:u.iframes)!=null&&f.Iframe)a(gapi.iframes.getContext());else if((m=$t().gapi)!=null&&m.load)l();else{const v=_w("iframefcb");return $t()[v]=()=>{gapi.load?l():s(jt(r,"network-request-failed"))},Iw(`${Mw()}?onload=${v}`).catch(g=>s(g))}}).catch(a=>{throw so=null,a})}let so=null;function RS(r){return so=so||AS(r),so}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new Mr(5e3,15e3),IS="__/auth/iframe",MS="emulator/auth/iframe",_S={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OS(r){const a=r.config;ee(a.authDomain,r,"auth-domain-config-required");const s=a.emulator?Nu(a,MS):`https://${r.config.authDomain}/${IS}`,l={apiKey:a.apiKey,appName:r.name,v:Ir},u=NS.get(r.config.apiHost);u&&(l.eid=u);const f=r._getFrameworks();return f.length&&(l.fw=f.join(",")),`${s}?${Dr(l).slice(1)}`}async function BS(r){const a=await RS(r),s=$t().gapi;return ee(s,r,"internal-error"),a.open({where:document.body,url:OS(r),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_S,dontclear:!0},l=>new Promise(async(u,f)=>{await l.restyle({setHideOnLeave:!1});const m=jt(r,"network-request-failed"),v=$t().setTimeout(()=>{f(m)},DS.get());function g(){$t().clearTimeout(v),u(l)}l.ping(g).then(g,()=>{f(m)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zS=500,LS=600,jS="_blank",qS="http://localhost";class _p{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PS(r,a,s,l=zS,u=LS){const f=Math.max((window.screen.availHeight-u)/2,0).toString(),m=Math.max((window.screen.availWidth-l)/2,0).toString();let v="";const g={...US,width:l.toString(),height:u.toString(),top:f,left:m},y=tt().toLowerCase();s&&(v=Mg(y)?jS:s),Dg(y)&&(a=a||qS,g.scrollbars="yes");const k=Object.entries(g).reduce((O,[F,H])=>`${O}${F}=${H},`,"");if(ww(y)&&v!=="_self")return FS(a||"",v),new _p(null);const w=window.open(a||"",v,k);ee(w,r,"popup-blocked");try{w.focus()}catch{}return new _p(w)}function FS(r,a){const s=document.createElement("a");s.href=r,s.target=a;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="__/auth/handler",GS="emulator/auth/handler",VS=encodeURIComponent("fac");async function Np(r,a,s,l,u,f){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const m={apiKey:r.config.apiKey,appName:r.name,authType:s,redirectUrl:l,v:Ir,eventId:u};if(a instanceof Lu){a.setDefaultLanguage(r.languageCode),m.providerId=a.providerId||"",PC(a.getCustomParameters())||(m.customParameters=JSON.stringify(a.getCustomParameters()));for(const[k,w]of Object.entries({}))m[k]=w}if(a instanceof _r){const k=a.getScopes().filter(w=>w!=="");k.length>0&&(m.scopes=k.join(","))}r.tenantId&&(m.tid=r.tenantId);const v=m;for(const k of Object.keys(v))v[k]===void 0&&delete v[k];const g=await r._getAppCheckToken(),y=g?`#${VS}=${encodeURIComponent(g)}`:"";return`${YS(r)}?${Dr(v).slice(1)}${y}`}function YS({config:r}){return r.emulator?Nu(r,GS):`https://${r.authDomain}/${HS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="webStorageSupport";class KS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vg,this._completeRedirectFn=yS,this._overrideRedirectResult=mS}async _openPopup(a,s,l,u){var m;Sn((m=this.eventManagers[a._key()])==null?void 0:m.manager,"_initialize() not called before _openPopup()");const f=await Np(a,s,l,fu(),u);return PS(a,f,ju())}async _openRedirect(a,s,l,u){await this._originValidation(a);const f=await Np(a,s,l,fu(),u);return $w(f),new Promise(()=>{})}_initialize(a){const s=a._key();if(this.eventManagers[s]){const{manager:u,promise:f}=this.eventManagers[s];return u?Promise.resolve(u):(Sn(f,"If manager is not set, promise should be"),f)}const l=this.initAndGetManager(a);return this.eventManagers[s]={promise:l},l.catch(()=>{delete this.eventManagers[s]}),l}async initAndGetManager(a){const s=await BS(a),l=new bS(a);return s.register("authEvent",u=>(ee(u==null?void 0:u.authEvent,a,"invalid-auth-event"),{status:l.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:l},this.iframes[a._key()]=s,l}_isIframeWebStorageSupported(a,s){this.iframes[a._key()].send(iu,{type:iu},u=>{var m;const f=(m=u==null?void 0:u[0])==null?void 0:m[iu];f!==void 0&&s(!!f),Jt(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){const s=a._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=kS(a)),this.originValidationPromises[s]}get _shouldInitProactively(){return Ug()||Ig()||Uu()}}const XS=KS;var Op="@firebase/auth",Bp="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),((a=this.auth.currentUser)==null?void 0:a.uid)||null}async getToken(a){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(a)}:null}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;const s=this.auth.onIdTokenChanged(l=>{a((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(a,s),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();const s=this.internalListeners.get(a);s&&(this.internalListeners.delete(a),s(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JS(r){Sr(new yi("auth",(a,{options:s})=>{const l=a.getProvider("app").getImmediate(),u=a.getProvider("heartbeat"),f=a.getProvider("app-check-internal"),{apiKey:m,authDomain:v}=l.options;ee(m&&!m.includes(":"),"invalid-api-key",{appName:l.name});const g={apiKey:m,authDomain:v,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zg(r)},y=new Rw(l,u,f,g);return Ow(y,s),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,s,l)=>{a.getProvider("auth-internal").initialize()})),Sr(new yi("auth-internal",a=>{const s=xo(a.getProvider("auth").getImmediate());return(l=>new QS(l))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),fi(Op,Bp,$S(r)),fi(Op,Bp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=300,ZS=mg("authIdTokenMaxAge")||WS;let Up=null;const ek=r=>async a=>{const s=a&&await a.getIdTokenResult(),l=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(l&&l>ZS)return;const u=s==null?void 0:s.token;Up!==u&&(Up=u,await fetch(r,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function tk(r=Gx()){const a=vg(r,"auth");if(a.isInitialized())return a.getImmediate();const s=Nw(r,{popupRedirectResolver:XS,persistence:[rS,Kw,Vg]}),l=mg("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(l,location.origin);if(location.origin===f.origin){const m=ek(f.toString());Hw(s,m,()=>m(s.currentUser)),Fw(s,v=>m(v))}}const u=DC("auth");return u&&Bw(s,`http://${u}`),s}function nk(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Dw({loadJS(r){return new Promise((a,s)=>{const l=document.createElement("script");l.setAttribute("src",r),l.onload=a,l.onerror=u=>{const f=jt("internal-error");f.customData=u,s(f)},l.type="text/javascript",l.charset="UTF-8",nk().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JS("Browser");const ak={apiKey:"AIzaSyCkKzICX2ut7DyYOuIhEMKZJNNxLLJEOTE",authDomain:"ccsp-7632d.firebaseapp.com",projectId:"ccsp-7632d",storageBucket:"ccsp-7632d.firebasestorage.app",messagingSenderId:"442703082425",appId:"1:442703082425:web:cb0dadf2786971db6ebc68"};let pu;gp().length?pu=gp()[0]:pu=bg(ak);const ko=tk(pu),Zg=new yn;Zg.setCustomParameters({prompt:"select_account"});const ik=async()=>{try{return(await uS(ko,Zg)).user}catch(r){throw console.error("Error signing in with Google:",r),r}},rk=async()=>{try{await Gw(ko)}catch(r){throw console.error("Error signing out:",r),r}},zp=Object.freeze(Object.defineProperty({__proto__:null,auth:ko,logout:rk,onAuthStateChanged:Pg,signInWithGoogle:ik},Symbol.toStringTag,{value:"Module"})),ey=A.createContext(void 0);function sk({children:r}){const[a,s]=A.useState(null),[l,u]=A.useState(!0);A.useEffect(()=>{const v=Pg(ko,g=>{s(g),u(!1)});return()=>v()},[]);const f=async()=>{const{signInWithGoogle:v}=await lp(async()=>{const{signInWithGoogle:g}=await Promise.resolve().then(()=>zp);return{signInWithGoogle:g}},[]);await v()},m=async()=>{const{logout:v}=await lp(async()=>{const{logout:g}=await Promise.resolve().then(()=>zp);return{logout:g}},void 0);await v()};return h.jsx(ey.Provider,{value:{user:a,loading:l,signInWithGoogle:f,logout:m},children:r})}function ty(){const r=A.useContext(ey);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ny=(...r)=>r.filter((a,s,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===s).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=A.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:u="",children:f,iconNode:m,...v},g)=>A.createElement("svg",{ref:g,...lk,width:a,height:a,stroke:r,strokeWidth:l?Number(s)*24/Number(a):s,className:ny("lucide",u),...v},[...m.map(([y,k])=>A.createElement(y,k)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(r,a)=>{const s=A.forwardRef(({className:l,...u},f)=>A.createElement(ck,{ref:f,iconNode:a,className:ny(`lucide-${ok(r)}`,l),...u}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=fe("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=fe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=fe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=fe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=fe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=fe("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=fe("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=fe("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=fe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=fe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=fe("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=fe("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=fe("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=fe("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=fe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=fe("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=fe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=fe("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=fe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=fe("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=fe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=fe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Pp(){const{user:r,loading:a,signInWithGoogle:s,logout:l}=ty();return a?h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("div",{className:"w-8 h-8 bg-gray-200 rounded-full animate-pulse"})}):r?h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[r.photoURL?h.jsx("img",{src:r.photoURL,alt:r.displayName||"User",className:"w-8 h-8 rounded-full"}):h.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center",children:h.jsx(Dk,{className:"w-5 h-5 text-white"})}),h.jsx("span",{className:"text-sm text-gray-700",children:r.displayName||"User"})]}),h.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[h.jsx(xk,{className:"w-4 h-4"}),"Logout"]})]}):h.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",children:[h.jsx(Ck,{className:"w-4 h-4"}),"Sign in with Google"]})}const Fp=[{path:"/",label:"Home",icon:bt},{path:"/concepts",label:"Concepts",icon:Sk},{path:"/compare",label:"Compare",icon:yk},{path:"/quiz",label:"Quiz",icon:ay},{path:"/glossary",label:"Glossary",icon:vk}];function Mk(){const r=Pt(),[a,s]=A.useState(!1);return h.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-16 bg-dark-800/95 backdrop-blur-md border-b border-dark-600 z-50",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 h-full flex items-center justify-between",children:[h.jsxs(We,{to:"/",className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center",children:h.jsx(bt,{className:"w-5 h-5 text-white"})}),h.jsx("span",{className:"font-bold text-lg",children:"Repo & CCP Learning"})]}),h.jsxs("div",{className:"hidden md:flex items-center gap-1",children:[Fp.map(({path:l,label:u})=>h.jsx(We,{to:l,className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${r.pathname===l?"text-accent-cyan bg-dark-700":"text-gray-400 hover:text-white hover:bg-dark-700"}`,children:u},l)),h.jsx(Pp,{})]}),h.jsx("button",{onClick:()=>s(!a),className:"md:hidden p-2 text-gray-400 hover:text-white",children:a?h.jsx(Ik,{className:"w-6 h-6"}):h.jsx(wk,{className:"w-6 h-6"})})]}),a&&h.jsxs("div",{className:"md:hidden bg-dark-800 border-b border-dark-600",children:[Fp.map(({path:l,label:u})=>h.jsx(We,{to:l,onClick:()=>s(!1),className:`block px-4 py-3 text-sm font-medium ${r.pathname===l?"text-accent-cyan bg-dark-700":"text-gray-400 hover:text-white hover:bg-dark-700"}`,children:u},l)),h.jsx("div",{className:"px-4 py-3",children:h.jsx(Pp,{})})]})]})}function _k(){return h.jsxs("div",{className:"min-h-screen bg-dark-900 text-gray-100",children:[h.jsx(Mk,{}),h.jsx("main",{className:"pt-16",children:h.jsx(z0,{})})]})}const Cn=[{id:"us-repo",title:"U.S. Repo Markets & CCPs",region:"US",description:"Master the structure of U.S. Treasury repo markets, from bilateral trading to central clearing through DTCC/FICC.",lessons:[{id:"lesson-1",title:"What Is Repo?",duration:"25 min",hasDiagram:!1,content:`
## The Core Idea

A repurchase agreement (repo) is economically a short-term, collateralized loan. One party (the cash borrower) sells securities to another (the cash lender) with a binding agreement to repurchase those securities at a specified future date for a specified price. The difference between the sale price and the repurchase price represents the interest on the loan.

Repo is the plumbing of the financial system. It finances dealer inventories, enables hedge fund leverage, and allows money market funds to deploy cash safely. When repo markets seize (as in 2008 and 2020), systemic risk escalates rapidly.

## Economic vs. Legal Form

**Legal form:** Two separate sales (spot sale + forward repurchase)
**Economic substance:** Secured lending transaction
**Why this matters:** Bankruptcy treatment, accounting, and regulatory capital all hinge on this characterization

## Key Terms

- **Repo rate:** The implicit interest rate (annualized)
- **Haircut:** The discount applied to collateral value (e.g., 2% haircut on $100m Treasuries = $98m cash borrowed)
- **Open repo:** No fixed term (either party can terminate daily)
- **Term repo:** Fixed maturity (e.g., overnight, 5-day, 1-month)

## Market Size and Significance

- The U.S. repo market exceeds **$5 trillion daily volume**
- It is the primary funding mechanism for primary dealers who make markets in Treasuries
- Disruptions create spillovers across money markets, derivatives, and Treasury auctions
`,keyPoints:["Repo = collateralized short-term loan","Legal form is two sales; economic form is secured lending","Haircut determines leverage ratio","U.S. repo market > $5 trillion daily","Critical for dealer financing and market liquidity"],quiz:[{question:"If a hedge fund wants to finance $100m in Treasuries with a 2% haircut, how much cash does it receive?",options:["$100m","$98m","$102m","$96m"],correctIndex:1,explanation:"A 2% haircut means the lender withholds 2% of collateral value as a buffer. $100m × (1 - 0.02) = $98m."},{question:"What is the legal form of a repo transaction?",options:["A loan agreement","Two separate sales (spot + forward)","A derivative contract","A pledge agreement"],correctIndex:1,explanation:"Legally, a repo is structured as two separate sales—a spot sale and a forward repurchase—though economically it functions as a secured loan."},{question:"Why do repo markets matter for systemic stability?",options:["They are small and insignificant","They provide critical funding for dealers and leveraged investors","They only affect stock prices","They are unregulated"],correctIndex:1,explanation:"Repo markets finance dealer inventories and enable hedge fund leverage. When they seize (as in 2008 and 2020), systemic risk escalates."}]},{id:"lesson-2",title:"Bilateral Repo Structure",duration:"30 min",hasDiagram:!0,diagramType:"us-flow",content:`
## The Core Idea

In non-centrally cleared ("bilateral") repo, two parties face each other directly. Each bears the full credit risk of the other. This creates complex webs of exposure and requires each dealer to manage collateral and risk individually for every counterparty.

## The Actors

**REPO DEALERS:** JPMorgan, UBS, and other primary dealers with balance-sheet capacity
**NON-CENTRALLY CLEARED REPO MARKETS:** Bilateral trading relationships outside the CCP
**HEDGE FUNDS:** PGIM and others running "Relative Value Books" — levered strategies exploiting small yield differentials

## Trade Structures

### "Fund Leveraged Long" (Left Side)
- Hedge fund wants to own securities but lacks cash
- Repo dealer lends cash, receives securities as collateral
- This is a *reverse repo* from the dealer's perspective
- The hedge fund now holds securities (long position) financed by repo

### "Fund Leveraged Short" (Right Side)
- Hedge fund wants to short securities (bet on price decline)
- Repo dealer borrows securities, posts cash
- Hedge fund receives cash, must return securities later

## Balance Sheet Mechanics

**REPO DEALERS (Left):**
- Liabilities: "Cash collateral on deposit" — cash given to hedge fund
- Assets: "Loan made to hedge fund" — the repo receivable

**HEDGE FUNDS (Center):**
- Assets: Securities (long position) and Cash (from shorting)
- Liabilities: Loan from repo dealer and Reverse repo obligation
- Net: Highly levered exposure to small spread movements

## Key Risks in Bilateral Repo

1. **Counterparty credit risk:** Each party worries the other will default
2. **Operational complexity:** Managing margin calls, collateral valuation, and substitutions bilaterally
3. **Balance-sheet intensity:** Gross exposures remain on balance sheets; limited netting benefits
4. **Procyclicality:** In stress, haircuts rise and funding evaporates (the "run on repo")
`,keyPoints:["Bilateral repo = direct counterparty exposure","Dealers face fund-side risk directly","Balance sheets show gross exposures","Operational complexity for margin/collateral","Run on repo risk in stressed markets"],quiz:[{question:"In bilateral repo, who bears the counterparty credit risk?",options:["The CCP","Each party bears the full risk of the other","Only the cash lender","Only the cash borrower"],correctIndex:1,explanation:"In bilateral repo, each party faces the other directly. There is no central counterparty to mutualize risk."},{question:"What happens to a hedge fund's balance sheet when it goes long via repo?",options:["Assets decrease","Assets increase (securities), liabilities increase (loan)","Only liabilities increase","Nothing changes"],correctIndex:1,explanation:"The hedge fund receives securities (asset) financed by a loan from the dealer (liability). This creates leverage."},{question:'What is the "run on repo"?',options:["A marathon event","When lenders withdraw funding in stress, causing procyclical deleveraging","A type of interest rate","A regulatory requirement"],correctIndex:1,explanation:"In stress, repo lenders may withdraw funding or increase haircuts, forcing borrowers to sell assets, driving prices down further."}]},{id:"lesson-3",title:"Introducing the CCP",duration:"30 min",hasDiagram:!0,diagramType:"us-flow",content:`
## The Core Idea

A Central Counterparty (CCP) interposes itself between buyers and sellers through **novation**—the legal process of replacing a bilateral contract with two new contracts. The CCP becomes the buyer to every seller and the seller to every buyer.

## What Is Novation?

Novation legally extinguishes the original contract between Party A and Party B, and replaces it with:
- **Contract 1:** Party A vs. CCP
- **Contract 2:** Party B vs. CCP

The CCP "faces" both parties. If Party A defaults, the CCP must still perform to Party B (and vice versa).

## Risk Reduction Mechanisms

1. **Netting:** Multilateral offsetting reduces gross exposures
2. **Margin:** Centralized collateral management (initial and variation margin)
3. **Default management:** Centralized auction of defaulted member positions
4. **Loss mutualization:** Pre-funded default funds absorb residual losses

## The "Sole Repo Clearing Corporation"

In the U.S., **DTCC's Fixed Income Clearing Corporation (FICC)** is the **only** CCP for Treasury repo:
- **Efficiency:** Standardized processes, single rulebook
- **Risk concentration:** All Treasury repo clearing risk resides in one entity
- **Systemic importance:** FICC is a Financial Market Utility (FMU) under Dodd-Frank

## Who Faces Whom?

In the CCP model:
- **Dealers** face the CCP (not the hedge fund)
- **Hedge funds** (as "sponsored members") face the CCP through their sponsoring dealer
- The dealer still faces the hedge fund's behavior, but the CCP intermediates the financial risk
`,keyPoints:["Novation replaces bilateral contract with two CCP contracts","CCP becomes buyer to every seller, seller to every buyer","Netting, margin, and loss mutualization reduce risk","FICC is the sole U.S. Treasury repo CCP","Dealers face CCP, not the end hedge fund"],quiz:[{question:"After novation, who is Party A contractually obligated to?",options:["Still Party B","The CCP","Both Party B and CCP","No one"],correctIndex:1,explanation:"Novation extinguishes the original bilateral contract. Party A now has a contract only with the CCP."},{question:'Why is FICC called the "sole" U.S. repo clearer significant?',options:["It has no competitors","All Treasury repo risk concentrates in one entity","It is the oldest CCP","It is owned by the Fed"],correctIndex:1,explanation:"FICC being the sole clearer means all Treasury repo clearing risk concentrates in one entity, creating systemic importance but also efficiency through standardization."},{question:"What happens if a sponsored member (hedge fund) defaults?",options:["FICC pursues the sponsor dealer","FICC has no recourse","The other party absorbs the loss","The trade is cancelled"],correctIndex:0,explanation:"Sponsored members access FICC through direct members (dealers) who remain liable to FICC for their sponsored members' performance."}]},{id:"lesson-4",title:"DTCC/FICC Architecture",duration:"35 min",hasDiagram:!0,diagramType:"us-flow",content:`
## DTCC Structure

\`\`\`
DTCC (Holding)
├── FICC (Fixed Income Clearing Corporation)
│   ├── GSD (Government Securities Division) — Treasuries, agencies
│   └── MBS (Mortgage-Backed Securities Division)
├── DTC (Depository Trust Company) — Equity and corporate debt settlement
└── NSCC (National Securities Clearing Corporation) — Equity clearing
\`\`\`

## FICC's GSD (Government Securities Division)

- Clears Treasury repo, cash market Treasuries, and agency securities
- Members: Primary dealers, banks, broker-dealers
- Sponsored members: Hedge funds, asset managers (access through direct members)

## Membership Types

### Direct Members (CCP Members)
- Barclays, UBS, Jefferies
- Must sign CCP contract
- Maintain margin accounts at FICC
- Responsible for their sponsored members' performance

### Sponsored Members (Access via CCP Member)
- Hedge funds, money market funds, other leveraged players
- Do not have direct contractual relationship with FICC
- Their sponsor (dealer) faces FICC on their behalf
- Still benefit from central clearing (netting, operational efficiency)

## The "Sole U.S. Repo Clearer" Implications

- **Standardization:** All cleared repo follows FICC rules
- **Concentration risk:** No redundancy if FICC fails
- **Recovery and resolution:** FICC must have plans for orderly wind-down or recapitalization
- **SEC oversight:** As a systemically important FMU, subject to heightened supervision
`,keyPoints:["DTCC owns FICC, DTC, and NSCC","FICC GSD handles Treasury repo and agency securities","Direct members = banks/dealers with FICC contracts","Sponsored members = funds accessing through dealers","FICC is a systemically important Financial Market Utility"],quiz:[{question:"Which division of FICC handles Treasury repo?",options:["MBS Division","GSD (Government Securities Division)","DTC","NSCC"],correctIndex:1,explanation:"The Government Securities Division (GSD) clears Treasury repo, cash market Treasuries, and agency securities."},{question:"What is the difference between a direct member and a sponsored member?",options:["Nothing—they are the same","Direct members have FICC contracts; sponsored members access through dealers","Sponsored members pay higher fees","Direct members cannot clear repo"],correctIndex:1,explanation:"Direct members (banks/dealers) have direct contractual relationships with FICC. Sponsored members (funds) access clearing through sponsoring dealers who remain liable to FICC."},{question:"What regulatory status makes FICC subject to heightened supervision?",options:["Bank holding company","Financial Market Utility (FMU) under Dodd-Frank","Investment adviser","Insurance company"],correctIndex:1,explanation:"FICC is designated as a systemically important Financial Market Utility (FMU), subjecting it to SEC oversight and enhanced supervision."}]},{id:"lesson-5",title:"Clearing Bank & Fed CBES",duration:"30 min",hasDiagram:!0,diagramType:"us-flow",content:`
## BNY Mellon: The Sole U.S. Repo Clearing Bank

While FICC manages contracts and risk, actual securities and cash reside at the **clearing bank:**

- Holds "CCP's Clearing Accounts" — FICC's own securities and cash
- Holds "Cash Lender's Custodian Account" (e.g., Citadel's securities)
- Holds "Cash Borrower's Custodian Account" (e.g., Barclays' securities)
- Manages securities ownership records
- Facilitates DVP settlement by moving securities and cash simultaneously

## Account Structure

**For Cash Lender (e.g., Citadel):**
- Custodian Account: Securities owned by Citadel, pledged to FICC
- Cash Account: Where cash proceeds from repo are received

**For CCP (FICC):**
- Clearing Accounts at BNY Mellon and JPMorgan: Where FICC holds pooled collateral

**For Cash Borrower (e.g., Barclays):**
- Custodian Account: Securities borrowed from FICC
- Cash Account: Where cash collateral is posted

## Federal Reserve CBES (Commercial Book-Entry System)

- The **"official ledger"** for U.S. Treasury securities
- Relevant accounts: Cash Lender's, CCP's, and Cash Borrower's Custodian Accounts
- CBES records are definitive; clearing bank records must reconcile to CBES

## The Tri-Party Repo Structure

- BNY Mellon acts as agent managing collateral
- Daily "unwind": Collateral returned to borrower each morning, re-posted each afternoon
- This exposes the system to intraday risk if the clearing bank fails
`,keyPoints:["BNY Mellon is the sole U.S. repo clearing bank","Clearing bank holds custodial and cash accounts","Fed CBES is the definitive ledger for Treasury securities",'Tri-party repo involves daily "unwind" creating intraday risk',"DVP = Delivery versus Payment (simultaneous exchange)"],quiz:[{question:'Why is BNY Mellon being the "sole" clearing bank a systemic concern?',options:["It charges high fees","No redundancy exists if it fails","It is unregulated","It competes with FICC"],correctIndex:1,explanation:"With only one clearing bank, there is no redundancy. BNY Mellon failure would paralyze Treasury repo settlement."},{question:"What is the role of the Federal Reserve's CBES?",options:["It clears all trades","It is the definitive ledger for Treasury securities ownership","It provides loans to dealers","It regulates FICC"],correctIndex:1,explanation:"CBES (Commercial Book-Entry System) maintains the official record of Treasury securities ownership. Clearing bank records must reconcile to CBES."},{question:'What is the "unwind" in tri-party repo?',options:["Closing all positions","Returning collateral to borrower each morning, re-posted afternoon","A type of bankruptcy","Fed intervention"],correctIndex:1,explanation:"The daily unwind returns collateral to the borrower each morning and re-posts it in the afternoon, creating intraday uncollateralized exposure."}]},{id:"lesson-6",title:"Trade Lifecycle: Quote to Match",duration:"35 min",hasDiagram:!0,diagramType:"us-flow",content:`
## Step 1: Quote Request

Cash Lender (e.g., Citadel) requests quotes via:
- **Email** (still used for bespoke trades)
- **Voice** (phone/verbal agreement, confirmed in writing)
- **Electronic platforms** (DTCC, Bloomberg, Tradeweb)
- **Inter-Dealer Brokers (IDBs)** like BrokerTec facilitate between dealers

## Step 2: Trade Execution

Cash Borrower (e.g., Barclays) provides quotes
- Trade details agreed: collateral type, repo rate, term, size
- Trade occurs on venue (or via voice/email with venue reporting)

## Step 3: Trade Submission to CCP

Both parties submit trade details to FICC:
- "Cash Lender's Data File" — details from Citadel's perspective
- "Cash Borrower's Data File" — details from Barclays' perspective
- These must match exactly for FICC to accept the trade

## Step 4: Matching Engine

FICC's systems:
1. Receive trade details from both sides
2. Verify trade instructions match (collateral, rate, size, settlement date)
3. Run matching algorithm
4. If matched → proceed to novation
5. If unmatched → exception handling, manual review, or rejection

## Step 5: Novation (Simultaneous Contracts)

- FICC novates the trade by creating two contracts:
  - **Contract 1:** FICC vs. Cash Lender (FICC acts as borrower)
  - **Contract 2:** FICC vs. Cash Borrower (FICC acts as lender)
- Original bilateral contract between Citadel and Barclays is extinguished

## Step 6: Clearing Instructions

FICC sends "Send Clearing Instructions" to BNY Mellon
- Instructions specify which securities, which accounts, what cash amounts
- BNY Mellon prepares for settlement
`,keyPoints:["Quote request via email, voice, or electronic platforms","Both parties submit trade details to FICC","Matching engine verifies trade instructions match","Novation creates two new contracts, extinguishes original","Clearing instructions sent to BNY Mellon for settlement"],quiz:[{question:"What happens if submitted trade details do not match?",options:["The trade clears anyway","Exception handling, manual review, or rejection","The CCP corrects the error","The trade is cancelled automatically"],correctIndex:1,explanation:"If trade details from both parties do not match, FICC routes to exception handling for manual review or rejects the trade."},{question:"At what point is the original bilateral contract extinguished?",options:["At quote request","At trade execution","At novation","At settlement"],correctIndex:2,explanation:"Novation legally extinguishes the original bilateral contract and replaces it with two new contracts between each party and the CCP."},{question:"What is an Inter-Dealer Broker (IDB)?",options:["A bank regulator","A facilitator of repo trading between dealers","A type of hedge fund","A central bank facility"],correctIndex:1,explanation:"IDBs like BrokerTec and Tradeweb facilitate repo trading between dealers by providing electronic platforms for quote and trade execution."}]},{id:"lesson-7",title:"Netting, Margining & Trade Maintenance",duration:"35 min",hasDiagram:!0,diagramType:"us-flow",content:`
## Trade Maintenance

FICC "carries out multiple times during the day":

## 1. Netting

- Calculates net obligations between CCP and each party
- Removes redundant trades
- **Example:** If Party A owes Party B $10m and Party B owes Party A $10m on offsetting trades, netting eliminates both obligations
- **Multilateral netting:** Party A's obligation to Party B can be offset against Party C's obligation to Party A through the CCP
- Result: Fewer settlements, less balance-sheet usage, lower funding costs

## 2. Margining

- **Initial Margin:** Posted when position opened; covers potential future exposure
- **Variation Margin:** Daily (or intraday) adjustment for market value changes
- FICC collects from **both** parties to mutualize risk
- Haircuts applied to collateral to buffer price moves

## The Novation Process Detailed

**First Novation (Faces Lender on Behalf of Borrower):**
- Cash Lender (Citadel) had contract with Cash Borrower (Barclays)
- FICC steps in: "Contract with Cash Lender" (FICC takes role of Cash Borrower)
- Citadel now faces FICC, not Barclays

**Second Novation (Faces Borrower on Behalf of Lender):**
- FICC creates "Contract with Cash Borrower" (FICC takes role of Cash Lender)
- Barclays now faces FICC, not Citadel

## The CCP Waterfall (Default Scenario)

If a member defaults:
1. Defaulter's margin (initial and variation) seized
2. Defaulter's contribution to default fund used
3. Surviving members' default fund contributions (pro-rata)
4. FICC's own capital (skin in the game)
5. Assessment on surviving members (additional contributions)
6. (Theoretical) External support (Fed, regulators)
`,keyPoints:["Netting reduces gross exposures through multilateral offsetting","Initial margin posted at trade opening; variation margin daily","FICC collects margin from both parties","CCP waterfall: margin → default fund → mutualized losses → FICC capital → assessments","Trade maintenance occurs multiple times per day"],quiz:[{question:"What is multilateral netting?",options:["Only two parties can net","Obligations can be offset across multiple parties through the CCP","No netting is allowed","Only cash can be netted"],correctIndex:1,explanation:"Multilateral netting allows Party A's obligation to Party B to be offset against Party C's obligation to Party A through the CCP."},{question:"What is the first resource used if a member defaults?",options:["Fed intervention","The defaulter's own margin","Other members' default funds","FICC capital"],correctIndex:1,explanation:"The CCP waterfall starts with the defaulter's own margin (initial and variation), then proceeds to default funds and mutualized resources."},{question:"Why does FICC collect margin from both parties?",options:["To increase profits","Both parties pose risk to FICC; margin protects against either defaulting","Only the borrower poses risk","Regulatory requirement only"],correctIndex:1,explanation:"Both the cash lender and cash borrower pose credit risk to FICC. Either could default, so FICC collects margin from both."}]},{id:"lesson-8",title:"Systemic Implications & Policy",duration:"40 min",hasDiagram:!1,content:`
## The Concentration Problem

### Single CCP (FICC/DTCC)

**Benefits:**
- Standardized rules, interoperability, economies of scale

**Risks:**
- Single point of failure; no redundancy if FICC becomes insolvent or inoperable

**Mitigation:**
- Extensive regulation, capital requirements, recovery and resolution planning, Fed access (contingent)

### Single Clearing Bank (BNY Mellon)

**Benefits:**
- Operational efficiency, established relationships, market practice standardization

**Risks:**
- Clearing bank failure would paralyze Treasury repo settlement
- Intraday exposure from daily "unwind"

## Systemic Risk Transmission Channels

### Through the CCP
- If FICC fails: All cleared repo freezes; Treasury market liquidity evaporates
- Loss mutualization: One large member default can exhaust mutualized resources
- Procyclicality: Margin requirements increase in stress, forcing liquidations

### Through the Clearing Bank
- If BNY Mellon fails: Collateral and cash are trapped
- "Doom loop" between bank failure and repo market freeze
- No alternative clearing bank exists to absorb volume

## The 2008 and 2020 Crises

**2008:**
- Bilateral repo markets seized
- Tri-party repo (BNY Mellon and JPMorgan) showed fragility

**2020:**
- COVID-19 shock triggered dash for cash
- FICC-margined positions faced heavy variation margin calls
- Fed intervention (repo facility, Treasury purchases) backstopped both markets

## Policy Responses and Debates

### 1. Central Clearing Mandate
- G20 agreed to mandate central clearing for standardized derivatives after 2008
- Repo is "standardized" but no universal clearing mandate (yet)
- Debate: Should more repo be forced into FICC?

### 2. CCP Resilience
- SEC and CFTC rules on FMU supervision
- Recovery and resolution planning ("living wills" for CCPs)
- Liquidity resources: FICC has access to Fed discount window under extreme conditions

### 3. Clearing Bank Reform
- Intraday credit risk reduction initiatives
- Potential for multiple clearing banks (competition vs. fragmentation)

## The "Too Systemically Important to Fail" Question

- FICC and BNY Mellon are private entities
- Yet their failure would trigger government intervention
- This creates **moral hazard**: market participants may under-price CCP/clearing bank risk
- Resolution: Enhanced supervision, mandatory resolvability, clear loss allocation rules
`,keyPoints:["Concentration: Single CCP (FICC) and single clearing bank (BNY Mellon)","2008 and 2020 crises revealed repo market fragility","Debate on central clearing mandate for all repo",'Moral hazard from "too systemically important to fail" status',"Fed backstop (SRF) exists but creates moral hazard concerns"],quiz:[{question:"What is the moral hazard concern with FICC and BNY Mellon?",options:["They charge too much","Market participants may under-price their risk because they expect government backstop","They compete unfairly","They are unregulated"],correctIndex:1,explanation:'Because FICC and BNY Mellon are "too systemically important to fail," market participants may not fully price their risk, expecting government intervention if they fail.'},{question:"What happened to repo markets in March 2020?",options:["They functioned normally","COVID-19 shock triggered dash for cash and heavy margin calls","They were closed by regulators","Rates went to zero"],correctIndex:1,explanation:'The COVID-19 shock in March 2020 triggered a "dash for cash," causing heavy variation margin calls and requiring Fed intervention.'},{question:"What is a proposed policy response to tri-party repo intraday risk?",options:["Close all repo markets","Intraday credit risk reduction initiatives and potential multiple clearing banks","Eliminate FICC","Ban hedge funds"],correctIndex:1,explanation:"Proposed reforms include intraday credit risk reduction initiatives and consideration of multiple clearing banks to reduce concentration risk."}]}]},{id:"asia-repo",title:"Asia-Pacific Repo Markets",region:"Asia",description:"Explore repo and clearing mechanisms across Japan, Singapore, Hong Kong, and Korea—markets with diverse structures and evolving CCP landscapes.",lessons:[{id:"asia-intro",title:"Asia Repo Overview",duration:"25 min",hasDiagram:!0,diagramType:"asia-flow",content:`
## Asia-Pacific Repo Landscape

Unlike the U.S. with its single CCP (FICC), the Asia-Pacific region features:
- **Multiple CCPs** across jurisdictions
- **Varying clearing models** (some markets have no repo CCP)
- **Diverse regulatory frameworks** reflecting local market structures
- **Different collateral types** (not just U.S. Treasuries)

## Key Markets

| Market | CCP | Government Securities | Repo Clearing |
|--------|-----|----------------------|---------------|
| **Japan** | JSCC | JGBs | Yes (since 2002) |
| **Singapore** | CDP | Singapore Gov't Bonds | Limited |
| **Hong Kong** | HKSCC | HK Gov't Bonds | Limited |
| **Korea** | KSD/KRX | Korean Treasuries | Developing |
| **Australia** | ASX Clear | Commonwealth Gov't Bonds | Available |

## Structural Differences from U.S.

1. **Fragmentation:** Multiple CCPs rather than single monopoly
2. **Developing markets:** Some markets lack repo CCPs entirely
3. **Collateral diversity:** Local government bonds, not just U.S. Treasuries
4. **Cross-border complexity:** Different currencies, settlement systems
5. **Regulatory variation:** PFMI adoption differs across jurisdictions

## JSCC: The Pioneer

**Japan Securities Clearing Corporation (JSCC)** was:
- First CCP in Asia for securities (2002)
- Licensed under amended Securities and Exchange Law
- Model for other Asian markets considering CCP implementation

## Korea's CCP Debate

Korea has actively debated introducing a repo CCP:
- 2022: U.S. regulators proposed mandate for single central clearing
- Korean market considering necessity for domestic repo CCP
- Systemic risks highlighted by GFC driving reform interest
`,keyPoints:["Asia has multiple CCPs, not a single monopoly like FICC","JSCC (Japan) was first Asian securities CCP (2002)","Some markets (Singapore, HK) have limited repo clearing","Korea actively debating CCP introduction","Collateral: local government bonds, diverse currencies"],quiz:[{question:"Which Asian CCP was the first to clear securities?",options:["CDP (Singapore)","HKSCC (Hong Kong)","JSCC (Japan)","ASX Clear (Australia)"],correctIndex:2,explanation:"Japan Securities Clearing Corporation (JSCC) was the first CCP in Asia, established in 2002 under amended securities legislation."},{question:"How does the Asian CCP landscape differ from the U.S.?",options:["It is identical","Multiple CCPs across jurisdictions vs. single FICC monopoly","Asia has no CCPs","Only Japan has a CCP"],correctIndex:1,explanation:"Unlike the U.S. with FICC as the sole repo CCP, Asia has multiple CCPs across different jurisdictions with varying clearing models."},{question:"Which market is currently debating the introduction of a repo CCP?",options:["Japan","Singapore","Korea","Australia"],correctIndex:2,explanation:"Following the 2022 U.S. proposal for mandatory central clearing, Korea has been actively debating the necessity of introducing a domestic repo CCP."}]},{id:"japan-jscc",title:"Japan: JSCC & Repo Clearing",duration:"35 min",hasDiagram:!0,diagramType:"asia-flow",content:`
## Japan Securities Clearing Corporation (JSCC)

**Established:** 2002 (first Asian securities CCP)
**Ownership:** Japan Exchange Group (JPX)
**Legal basis:** Financial Instruments and Exchange Law

## JSCC Clearing Services

### 1. Cash Market Clearing
- Japanese equities
- Japanese government bonds (JGBs)
- Corporate bonds

### 2. Derivatives Clearing
- Futures and options on JPX markets
- Interest rate swaps (IRS)

### 3. Repo Clearing
- JGB repo
- Cross-border repo (limited)

## JSCC Netting Mechanism

JSCC provides **obligation assumption service**—its term for novation:
- Interposes itself between buyer and seller
- Becomes counterparty to both sides
- Multilateral netting of obligations

## Risk Management Framework

**Margin Requirements:**
- Initial margin based on portfolio risk (VaR-based)
- Variation margin (daily mark-to-market)
- Additional margin during stress periods

**Default Waterfall:**
1. Defaulter's margin
2. JSCC's contributed capital (skin in the game)
3. Non-defaulting members' contributions
4. Assessment calls on non-defaulting members

## Comparison with FICC

| Feature | FICC (U.S.) | JSCC (Japan) |
|---------|-------------|--------------|
| Established | 1976 | 2002 |
| Ownership | DTCC (private) | JPX (public company) |
| Sole clearer? | Yes (Treasury repo) | No (competes with BOJ) |
| Currency | USD | JPY |
| Settlement | DVP through Fedwire | BOJ-Net (central bank) |

## Unique Japanese Features

1. **BOJ-Net:** Settlement occurs through Bank of Japan's proprietary system
2. **JGB specialness:** JGB repo rates can go deeply negative (safe haven)
3. **Cross-border:** Limited due to currency controls and FX regulations
4. **Retail participation:** Higher retail ownership of JGBs than U.S. Treasuries
`,keyPoints:["JSCC established 2002, first Asian securities CCP","Owned by Japan Exchange Group (JPX)","Provides obligation assumption (novation) service","Settlement through BOJ-Net (central bank system)","JGB repo can have deeply negative rates (safe haven demand)"],quiz:[{question:"Who owns JSCC?",options:["The Japanese government","Japan Exchange Group (JPX)","Private banks","The Bank of Japan"],correctIndex:1,explanation:"JSCC is owned by Japan Exchange Group (JPX), a publicly traded company, unlike FICC which is owned by DTCC."},{question:"How does JGB repo settlement differ from U.S. Treasury repo?",options:["No difference","Uses BOJ-Net (Bank of Japan system) vs. Fedwire/Clearing Bank","Cash settlement only","No settlement required"],correctIndex:1,explanation:"JGB repo settlement occurs through BOJ-Net, the Bank of Japan's proprietary settlement system, rather than through private clearing banks."},{question:"What is unique about JGB repo rates compared to U.S. Treasury repo?",options:["They are always higher","They can go deeply negative due to safe haven demand","They are fixed by the government","They do not exist"],correctIndex:1,explanation:"Due to Japan's persistent deflationary concerns and safe haven demand, JGB repo rates can trade at deeply negative levels—uncommon for U.S. Treasuries."}]},{id:"singapore-hk",title:"Singapore & Hong Kong",duration:"30 min",hasDiagram:!0,diagramType:"asia-flow",content:`
## Singapore: CDP and Securities Lending

### Central Depository (Pte) Limited (CDP)
- Subsidiary of Singapore Exchange (SGX)
- Clears Singapore equities and bonds
- **Limited repo clearing capabilities**

### Securities Borrowing and Lending (SBL) Pool
- CDP operates central SBL facility
- Automated borrowing/lending of securities
- Not true repo—no cash leg in standard SBL

### Repo Market Structure
- Primarily **bilateral/repo-like transactions**
- Interbank market for Singapore Government Securities (SGS)
- Corporate bond repo limited
- No dedicated repo CCP comparable to FICC

## Hong Kong: HKEX Clearing

### Clearing Houses
HKEX operates four clearing houses:
1. **HKSCC** — Hong Kong Securities Clearing Company (equities)
2. **HKFE Clearing** — Futures/options
3. **SEOCH** — Stock options
4. **OTC Clearing** — OTC derivatives (CCASS)

### Government Bond Repo
- **Limited CCP clearing** for repo
- Primarily **bilateral market**
- HKMA (central bank) provides some repo facilities

### Connect Programs
- **Stock Connect:** Mainland China-Hong Kong equity clearing
- **Bond Connect:** Overseas investors access China interbank bond market
- Clearing complexities due to cross-border settlement

## Comparison Table

| Feature | Singapore | Hong Kong |
|---------|-----------|-------------|
| CCP | CDP | HKSCC |
| Repo clearing | Limited | Limited |
| Primary market | Bilateral/repo-like | Bilateral |
| Central bank role | MAS facilities | HKMA facilities |
| Cross-border | ASEAN focus | Mainland China connect |

## Key Challenges

1. **Market size:** Smaller government bond markets than U.S./Japan
2. **CCP economics:** Limited volume makes dedicated repo CCP challenging
3. **Regulatory:** Different approaches to PFMI implementation
4. **Currency:** SGD and HKD are not major reserve currencies

## Growth Areas

- **Green bonds:** Both markets developing ESG repo frameworks
- **Digital assets:** Tokenized securities may change clearing models
- **RMB internationalization:** HK positioning as offshore RMB repo hub
`,keyPoints:["Singapore CDP: limited repo clearing, SBL pool for securities lending","Hong Kong HKSCC: primarily bilateral repo market","Both have central bank repo facilities (MAS, HKMA)","Cross-border connect programs add complexity","Market size challenges for dedicated repo CCP economics"],quiz:[{question:"What is CDP's SBL Pool in Singapore?",options:["A swimming pool","Securities Borrowing and Lending facility (not true repo)","A repo CCP","A hedge fund"],correctIndex:1,explanation:"CDP's Securities Borrowing and Lending (SBL) Pool facilitates securities lending but is not true repo—it typically lacks the cash leg of a repo transaction."},{question:"Which Hong Kong clearing house handles equities?",options:["HKFE Clearing","HKSCC","OTC Clearing","CDP"],correctIndex:1,explanation:"HKSCC (Hong Kong Securities Clearing Company) is the clearing house for equities in Hong Kong, while HKFE Clearing handles futures/options."},{question:"What is a key challenge for repo CCP development in Singapore and Hong Kong?",options:["No banks","Market size—smaller government bond markets make dedicated CCP economics challenging","No regulations","No demand"],correctIndex:1,explanation:"Compared to the U.S. and Japan, Singapore and Hong Kong have smaller government bond markets, making the economics of a dedicated repo CCP more challenging."}]},{id:"asia-comparison",title:"U.S. vs. Asia: Comparative Analysis",duration:"40 min",hasDiagram:!0,diagramType:"comparison",content:`
## Structural Comparison

| Dimension | United States | Asia-Pacific |
|-----------|---------------|--------------|
| **CCP Structure** | Single monopoly (FICC) | Multiple, fragmented |
| **Clearing Bank** | Single (BNY Mellon) | Multiple, jurisdiction-specific |
| **Settlement** | Fedwire/Clearing Bank | Central bank systems (BOJ-Net, etc.) |
| **Currency** | USD (global reserve) | Local currencies (JPY, SGD, HKD, KRW) |
| **Market Depth** | Deepest (>$5T daily) | Varies (Japan deep, others smaller) |
| **Regulatory** | SEC/CFTC unified | Fragmented across jurisdictions |

## U.S. vs. Asia: Structural Divergence

While both the U.S. and Asia-Pacific have developed sophisticated repo clearing infrastructures, they represent fundamentally different organizational models—**centralized standardization** versus **fragmented resilience**.

### The U.S. Model: Single CCP Dominance

**DTCC/FICC** is the sole CCP for U.S. Treasury repo. This creates:

- **Economies of scale:** Lower per-transaction costs through massive netting benefits
- **Standardization:** Single set of rules, margin models, and operational procedures
- **Liquidity concentration:** All repo liquidity in one venue
- **Single point of failure risk:** Systemic risk concentrated in one entity (designated FMU)

The U.S. model treats CCP failure as an unacceptable tail risk, backed by the Federal Reserve's role as lender of last resort.

### The Asian Model: Multiple CCPs

**JSCC, CDP, HKSCC, KSD** operate across different jurisdictions. This creates:

- **Resilience through redundancy:** No single point of failure
- **Jurisdictional alignment:** Each CCP matches local regulatory preferences
- **Fragmentation costs:** Lower netting efficiency, multiple membership requirements
- **Coordination challenges:** Cross-border stress management is more complex

### Academic Perspective: Systemic Risk in Multi-CCP Markets

Research by **Aldasoro & Veraart (BIS Working Paper No 1052)** provides critical insights into the Asian model's risk dynamics:

> "Joint clearing members can play an important role in how losses are transmitted between several CCPs, especially when realistic frictions affecting contagion are present."

**Key findings for multi-CCP environments like Asia:**

1. **Shared membership as transmission channel:** Large banks that are members of multiple CCPs (e.g., major dealers clearing at both JSCC and CDP) can transmit stress across markets
2. **The Cover-2 standard may be insufficient:** Current CCP stress testing typically requires resources to cover the default of the two largest members. However, when interconnectedness through shared membership is considered, the "top two" members may differ significantly from what isolated analysis suggests
3. **VMGH spillovers:** Variation Margin Gains Haircutting by one CCP can have spillover effects on other CCPs through shared clearing members

**Implication for Asia:** The multi-CCP model provides redundancy at the entity level but creates new transmission channels through overlapping membership—stress testing must account for network effects.

### COVID-19 as Natural Experiment

The March 2020 market stress revealed:
- **U.S.:** Fed-FICC coordination was immediate and decisive; single-CCP model enabled rapid, centralized response
- **Asia:** Multiple central banks (BOJ, MAS, HKMA, BOK) and CCPs required complex coordination, but the distributed system proved resilient with no single CCP under critical stress

The IMF's analysis (WP/21/267) noted that repo market stress during COVID-19 was characterized by:
- Flight-to-safety increasing Treasury collateral demand
- Dealer balance sheet constraints limiting intermediation
- Central bank intervention becoming essential across both models

### Tri-Party Repo: A U.S.-Specific Risk

The New York Fed's **Tri-Party Repo Infrastructure Reform** initiative addresses a risk unique to the U.S. model—the massive intra-day credit extended by clearing banks (BNY Mellon). While Asia's repo markets are primarily bilateral or centrally cleared, the U.S. retains a large tri-party segment that creates systemic risk distinct from CCP risk.

### Policy Implications and Convergence

The **PFMI standards** push both models toward convergence:
- **U.S.:** Must enhance CCP resiliency through recovery and resolution planning; address tri-party bank risk
- **Asia:** Must improve cross-border coordination and liquidity backstops; consider the Aldasoro-Veraart framework for multi-CCP stress testing

**Emerging consensus:** Neither pure model is clearly superior. The optimal architecture may involve:
- Regional CCPs with strong mutual liquidity arrangements
- Shared stress testing frameworks accounting for interconnectedness
- Clear central bank backstop protocols

### Reading: The Cover-2 Challenge

The BIS research challenges the Cover-2 standard that dominates CCP stress testing:

> "We show that who the two top clearing members are varies significantly depending on whether one accounts for contagion effects stemming from interconnectedness through shared clearing membership."

For Asian regulators, this implies:
1. Stress scenarios must include correlated defaults across CCPs
2. Joint clearing members' exposures must be aggregated across all CCPs they participate in
3. VMGH spillovers between CCPs must be modeled

This research provides a tool for selecting stress scenarios in Asia's multi-CCP environment—looking at the **full network** of CCPs and shared clearing members is essential for financial stability.

## Advantages of U.S. Model

### Efficiency
- Standardized rules across entire market
- Economies of scale in technology and operations
- Single point of regulatory oversight

### Liquidity
- Concentrated flow creates deep markets
- Lower transaction costs
- Tighter bid-ask spreads

### Systemic Risk Management
- Single CCP allows holistic risk view
- Coordinated default management
- Unified Fed backstop

## Advantages of Asian Model

### Resilience
- No single point of failure
- Redundancy across CCPs
- Regional diversification

### Competition
- Multiple providers may innovate faster
- Lower fees through competition
- Tailored services for local markets

### Regulatory Flexibility
- Jurisdiction-specific rules fit local markets
- Different PFMI interpretations possible
- Sandbox approaches for innovation

## Challenges in Both Models

### U.S. Concentration Risks
- "Too systemically important to fail" creates moral hazard
- No redundancy if FICC or BNY Mellon fails
- Single CCP may become complacent

### Asian Fragmentation Challenges
- Cross-border repo more complex
- Multiple regulatory regimes to navigate
- Higher operational costs for global dealers
- Liquidity fragmented across markets

## The Future: Convergence or Divergence?

### Convergence Forces
- **PFMI standards:** Global pressure for harmonized CCP standards
- **Cross-border trading:** Demand for interoperable CCPs
- **Global dealers:** Banks want simplified operations

### Divergence Forces
- **Local priorities:** Different systemic risk concerns
- **Currency sovereignty:** Central banks prefer control
- **Market structures:** Different collateral and settlement practices
- **Geopolitics:** Technology and financial infrastructure as strategic assets

## Case Study: March 2020 COVID Shock

### U.S. Response
- Fed Standing Repo Facility activated
- FICC margin calls managed through waterfall
- Treasury purchases provided collateral relief

### Asian Responses
- **Japan:** BOJ expanded JGB purchases, repo operations
- **Singapore:** MAS provided USD liquidity via swap lines
- **Hong Kong:** HKMA activated contingent repo facility
- **Challenge:** Coordination across multiple CCPs and central banks more complex

## Lessons for Market Development

1. **Size matters:** Deep government bond markets support CCP economics
2. **Currency:** Reserve currency status affects repo market development
3. **Regulatory:** Coordination across jurisdictions is essential
4. **Infrastructure:** Settlement system efficiency drives repo market depth
5. **Backstop:** Central bank support is crucial in stress
`,keyPoints:["U.S.: Single CCP (efficiency, liquidity) vs. Asia: Multiple CCPs (resilience, competition)","U.S. concentration risk vs. Asian fragmentation challenges","PFMI standards push for convergence; local priorities drive divergence","COVID-19 revealed coordination challenges in fragmented Asian model","Currency status and market depth are key determinants"],quiz:[{question:"What is the main advantage of the U.S. single-CCP model?",options:["No risk","Efficiency through standardization and economies of scale","More CCPs to choose from","No regulation"],correctIndex:1,explanation:"The U.S. single-CCP model provides efficiency through standardized rules, economies of scale, and concentrated liquidity."},{question:"What is the main advantage of the Asian multi-CCP model?",options:["Lower costs","Resilience—no single point of failure, redundancy across CCPs","Unified regulation","Single currency"],correctIndex:1,explanation:"The Asian multi-CCP model provides resilience through diversification—no single point of failure and redundancy across jurisdictions."},{question:"What coordination challenge did the March 2020 COVID shock reveal in Asia?",options:["No impact","Multiple CCPs and central banks required more complex coordination than U.S. single-CCP model","No central banks in Asia","All markets closed"],correctIndex:1,explanation:"Unlike the U.S. where the Fed and FICC coordinated centrally, Asia's multiple CCPs and central banks required more complex coordination during the COVID shock."}]}]},{id:"central-banking",title:"Central Banking & Monetary Policy",region:"General",description:"Understand how central banks influence economies through monetary policy, interest rates, and financial stability tools.",lessons:[{id:"lesson-1",title:"What Is Monetary Policy?",duration:"30 min",content:`
## The Dual Mandate

Monetary policy is what central banks do to accomplish two key goals mandated by law:

### 1. Promoting Maximum Employment

This means achieving the highest level of employment or lowest level of unemployment that the economy can sustain while maintaining a stable inflation rate. It's not about zero unemployment—some unemployment is natural and healthy (frictional unemployment as people change jobs, structural unemployment as skills mismatch with available positions). The goal is to reach the "natural rate of unemployment" where the economy is at full capacity.

### 2. Promoting Stable Prices

This means keeping inflation low and stable. The Federal Reserve targets 2% inflation over the longer run. Why 2% and not 0%? Because a small positive inflation rate:
- Gives central banks room to cut interest rates during downturns (real rates can't go much below zero)
- Reduces the risk of deflation (falling prices), which can be economically damaging
- Allows for relative price adjustments in the economy

## How Central Banks Influence the Economy

Central banks set the stance of monetary policy to influence short-term interest rates and overall financial conditions with the aim of moving the economy toward maximum employment and stable prices.

### The Transmission Mechanism

When a central bank changes its policy rate, it affects the economy through several channels:

**Interest Rate Channel:** Lower policy rates reduce borrowing costs for households and businesses, encouraging spending and investment. Higher rates do the opposite.

**Exchange Rate Channel:** Lower domestic interest rates make domestic assets less attractive to foreign investors, causing the currency to depreciate, which boosts exports.

**Asset Price Channel:** Lower rates increase the value of stocks, bonds, and real estate, making households feel wealthier and encouraging spending (the "wealth effect").

**Credit Channel:** Lower rates improve banks' willingness to lend and households' and businesses' ability to borrow.

### Easing vs. Tightening

**Easing (lowering rates):** Loosening financial conditions to stimulate economic activity when growth is sluggish or inflation is too low. Tools include cutting policy rates, quantitative easing, and forward guidance.

**Tightening (raising rates):** Tightening financial conditions to curb inflation when the economy is overheating. Tools include raising policy rates and reducing the central bank's balance sheet.

The Federal Reserve changes the stance of monetary policy primarily by raising or lowering its target range for the federal funds rate—the interest rate for overnight borrowing by banks.

## Independence with Accountability

### Why Independence Matters

While Congress specifies the goals for monetary policy (the dual mandate), it has provided the Federal Reserve operational independence. This design is intentional:

1. **Long-term focus:** Politicians face short-term electoral pressures (stimulate before elections, tighten after). Central banks can focus on long-term economic health.

2. **Data-driven decisions:** Monetary policy requires complex economic analysis. Independence allows decisions based on objective data rather than political expediency.

3. **Avoiding inflation bias:** Without independence, politicians might pressure central banks to print money to finance government spending, leading to inflation.

### How Accountability Is Maintained

Independence does not mean unaccountability. The Federal Reserve remains accountable through:

**Transparency:** Publishing policy statements, meeting minutes, economic projections, and holding press conferences.

**Congressional oversight:** The Fed Chair testifies before Congress twice a year, answering questions about policy decisions.

**Statutory mandate:** Congress can change the Fed's mandate or structure through legislation (though this is rarely done).

**Public communication:** The Fed explains its decisions clearly to the public to build understanding and trust.

This balance of independence and accountability is designed to ensure monetary policy serves the long-term interests of all Americans while remaining responsive to democratic oversight.

[External Reading: The Fed Explained - Monetary Policy](https://www.federalreserve.gov/aboutthefed/fedexplained/monetary-policy.htm)
`,keyPoints:["Monetary policy aims for maximum employment and stable prices","Central banks use interest rates to influence economic conditions","Operational independence allows data-driven decisions","Easing stimulates growth; tightening fights inflation","Accountability achieved through transparency and communication"],quiz:[{question:"What are the two main goals of monetary policy?",options:["Profit maximization and market share","Maximum employment and stable prices","Government debt reduction and currency appreciation","Bank profitability and lending growth"],correctIndex:1,explanation:"The dual mandate of monetary policy is promoting maximum employment and stable prices."},{question:'What does "easing" monetary policy mean?',options:["Raising interest rates to fight inflation","Lowering interest rates to stimulate the economy","Increasing bank reserves","Reducing government spending"],correctIndex:1,explanation:"Easing means lowering interest rates to loosen financial conditions and stimulate economic activity."},{question:"Why are central banks given operational independence?",options:["To avoid government oversight","To make decisions based on data and objective analysis for long-term goals","To increase their profits","To reduce transparency"],correctIndex:1,explanation:"Operational independence allows central banks to make decisions based on data and objective analysis, directed toward long-term economic goals rather than short-term political pressures."}]},{id:"lesson-2",title:"Monetary Policy Tools",duration:"35 min",content:`
## The Federal Funds Rate

The federal funds rate is the interest rate for overnight borrowing by banks in the federal funds market. When one bank has excess reserves, it can lend them to another bank that needs reserves overnight. The interest rate on these loans is the federal funds rate.

When the Federal Open Market Committee (FOMC) adjusts the target range for this rate, the Federal Reserve uses its monetary policy tools to ensure that market interest rates move in the direction of the new target range.

### Why the Federal Funds Rate Matters

The federal funds rate is the benchmark for many other interest rates in the economy:
- **Prime rate:** Banks' benchmark rate for lending to businesses
- **LIBOR/SOFR:** Reference rates for corporate loans and derivatives
- **Mortgage rates:** Influence home borrowing costs
- **Consumer loan rates:** Credit cards, auto loans, etc.

By influencing this benchmark rate, the Federal Reserve affects borrowing costs throughout the economy, which influences spending, investment, and ultimately employment and inflation.

## Key Policy Tools

### 1. Interest on Reserve Balances (IORB)

This is the primary monetary policy tool in the post-2008 era. Banks earn interest on the reserves they hold at the Federal Reserve.

**How it works:** When the Fed sets the IORB rate, it creates a floor for short-term interest rates. Banks won't lend reserves in the federal funds market at rates significantly below what they can earn risk-free by holding reserves at the Fed.

**Why it matters:** Before 2008, the Fed used open market operations to manage the supply of reserves. After quantitative easing increased reserves dramatically, the Fed switched to using administered rates like IORB to control interest rates.

**Example:** If the IORB rate is 4.5%, banks have little incentive to lend reserves at 4.0% in the federal funds market when they can earn 4.5% risk-free at the Fed.

### 2. Overnight Reverse Repurchase Agreement Facility (ON RRP)

This is a supplementary tool that provides a floor for short-term rates by allowing eligible institutions (money market funds, government-sponsored enterprises, etc.) to invest cash overnight at the Fed in exchange for Treasury securities.

**How it works:** Eligible institutions can "deposit" cash with the Fed overnight by purchasing Treasury securities with an agreement to sell them back the next day at a predetermined price. The implied interest rate is the ON RRP rate.

**Why it matters:** This tool helps ensure that the floor for short-term rates extends beyond just banks. Money market funds and other institutions won't lend at rates below the ON RRP rate if they can earn that rate risk-free at the Fed.

### 3. Discount Rate

The interest rate charged to banks for borrowing directly from the Federal Reserve through the discount window.

**How it works:** Banks can borrow from the Fed's discount window when they need liquidity. The discount rate is typically set above the federal funds rate target range to encourage banks to borrow from each other first.

**Why it matters:** The discount rate serves as a ceiling for the federal funds rate. If banks can borrow from the Fed at the discount rate, they won't pay significantly more than that in the federal funds market.

**Types of discount window lending:**
- Primary credit: Available to financially sound banks
- Secondary credit: Available to banks not eligible for primary credit
- Seasonal credit: Available to smaller banks to meet seasonal needs

### 4. Open Market Operations

Buying and selling government securities (Treasury bonds, notes, bills) to maintain ample reserves in the banking system.

**How it works:** When the Fed buys securities, it pays with newly created bank reserves, increasing the supply of reserves. When it sells securities, it removes reserves from the banking system.

**Pre-2008 vs. post-2008:**
- **Before 2008:** The Fed used open market operations as its primary tool, carefully managing the supply of reserves to target the federal funds rate.
- **After 2008:** With quantitative easing dramatically increasing reserves, open market operations became less important for rate targeting. Now they're used mainly to ensure the banking system has ample reserves.

## How Tools Work Together

These administered rates work together to ensure the federal funds rate stays within the target range set by the FOMC:

**The Floor System:**
- IORB and ON RRP provide a floor for short-term rates
- Banks won't lend below IORB (they can earn that risk-free)
- Money market funds won't lend below ON RRP
- This floor system replaced the previous corridor system

**The Ceiling:**
- The discount rate provides a ceiling
- Banks won't borrow in the federal funds market at rates much above the discount rate when they can borrow directly from the Fed

**Reserve Management:**
- Open market operations ensure banks have adequate reserves
- The Fed conducts operations to maintain "ample reserves" so that the floor system works effectively

**Example:** If the FOMC sets a target range of 4.25-4.50%:
- IORB might be set at 4.50% (top of range, floor)
- ON RRP might be set at 4.45% (slightly below IORB)
- Discount rate might be set at 4.75% (above the range, ceiling)
- The federal funds rate should trade between the floor and ceiling

[External Reading: How the Fed Implements Monetary Policy](https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy)
`,keyPoints:["Federal funds rate is the primary monetary policy lever","Interest on reserves sets a floor for short-term rates","ON RRP facility provides supplementary rate floor","Discount rate sets a ceiling for interbank lending","Open market operations maintain adequate bank reserves"],quiz:[{question:"What is the primary purpose of the Interest on Reserve Balances tool?",options:["To punish banks for holding too much cash","To set a floor for short-term interest rates","To provide emergency loans to banks","To control inflation directly"],correctIndex:1,explanation:"Interest on Reserve Balances sets a floor for short-term interest rates by paying banks interest on their reserves held at the Fed."},{question:"What does the Overnight Reverse Repo facility do?",options:["Banks borrow from the Fed overnight","Institutions invest cash overnight at the Fed in exchange for Treasuries","The Fed sells bonds to the public","Banks lend to each other at discounted rates"],correctIndex:1,explanation:"The ON RRP facility allows eligible institutions to invest cash overnight at the Fed in exchange for Treasury securities, providing a supplementary floor for short-term rates."},{question:"What role does the discount rate play?",options:["Sets a floor for market rates","Sets a ceiling for the federal funds rate","Determines mortgage rates","Controls stock market prices"],correctIndex:1,explanation:"The discount rate is the rate banks pay when borrowing directly from the Fed, setting a ceiling for the federal funds rate."}]},{id:"lesson-3",title:"Quantitative Easing & Unconventional Policy",duration:"30 min",content:`
## When Traditional Tools Aren't Enough

When interest rates approach zero (the "zero lower bound"), central banks cannot lower rates further to stimulate the economy. This is because nominal interest rates generally cannot go significantly below zero—banks would rather hold physical cash than pay to keep deposits at negative rates.

This constraint became a major problem after the 2008 financial crisis when policy rates were cut to near zero but the economy remained sluggish. Central banks needed new tools to provide additional stimulus.

## Quantitative Easing (QE)

QE involves large-scale purchases of government bonds and other securities by the central bank. It's an unconventional monetary policy tool used when traditional interest rate policy is insufficient.

### How QE Works

1. **Central bank purchases securities:** The Fed buys Treasury bonds, mortgage-backed securities, or other assets from banks and other financial institutions.

2. **Pays with newly created reserves:** The Fed credits the sellers' bank accounts with newly created reserves. This increases the monetary base.

3. **Increases money supply:** The increase in bank reserves should lead to more lending and money creation in the economy (through the money multiplier).

4. **Lowers long-term interest rates:** By buying bonds, the Fed increases demand for bonds, which pushes up bond prices. Since bond prices and yields move in opposite directions, this lowers long-term interest rates.

5. **Signals commitment:** Large-scale asset purchases signal that the central bank is committed to keeping rates low for an extended period, which influences market expectations.

### Why QE Affects the Economy

**Lower long-term rates:** By lowering long-term interest rates, QE reduces borrowing costs for mortgages, corporate bonds, and other long-term debt. This stimulates investment in housing, business equipment, and other capital.

**Portfolio rebalancing:** When the Fed buys safe assets like Treasuries, investors are forced to rebalance their portfolios into riskier assets like stocks and corporate bonds to maintain their target risk levels. This pushes up asset prices and lowers the cost of capital for businesses.

**Wealth effect:** Higher asset prices make households feel wealthier, which encourages them to spend more.

**Exchange rate effect:** Lower interest rates make domestic assets less attractive to foreign investors, causing the currency to depreciate. A weaker currency boosts exports by making them cheaper for foreign buyers.

## Forward Guidance

Central banks also use forward guidance—communicating their future policy intentions—to influence market expectations and long-term rates.

### Types of Forward Guidance

**Time-based guidance:** "We will keep rates low for at least X months/years"

**State-contingent guidance:** "We will keep rates low until unemployment falls below X% or inflation rises above Y%"

**Qualitative guidance:** General statements about the future path of policy without specific thresholds

### Why Forward Guidance Works

By promising to keep rates low for an extended period, central banks can reduce long-term borrowing costs even if short-term rates are at zero. This is because long-term rates reflect expectations of future short-term rates plus a term premium.

**Example:** If the Fed promises to keep short-term rates near zero for 3 years, markets will price in low rates for that entire period, reducing 10-year Treasury yields and mortgage rates.

## Risks and Trade-offs of Unconventional Policy

### Asset Bubbles

Prolonged low interest rates and large-scale asset purchases can inflate asset prices beyond fundamentals, creating bubbles in stocks, real estate, or other assets. When these bubbles burst, they can cause financial instability.

### Income Inequality

Asset price increases from QE primarily benefit wealthier households who own more stocks and bonds. This can exacerbate income and wealth inequality.

### Exit Challenges

Unwinding QE without disrupting markets is difficult. When the Fed starts selling its large portfolio of bonds or allows them to mature without reinvestment, it could:
- Push up long-term interest rates
- Reduce liquidity in bond markets
- Cause volatility in financial markets

### Central Bank Balance Sheet Risk

Holding large portfolios of securities exposes central banks to market risk. If bond prices fall, the central bank could suffer losses. This could reduce its profits or even require a capital injection from the government.

### Distortion of Financial Markets

Large-scale central bank purchases can distort price signals in financial markets, making it harder to assess true market conditions and allocate capital efficiently.

## Historical Use of QE

### Post-2008 Financial Crisis

The Fed launched three rounds of QE:
- **QE1 (2008-2010):** $1.75 trillion in MBS and Treasuries to stabilize financial markets
- **QE2 (2010-2011):** $600 billion in Treasuries to support recovery
- **QE3 (2012-2014):** Open-ended purchases of MBS until labor market improved

Other central banks (Bank of England, ECB, Bank of Japan) also implemented QE programs.

### COVID-19 Pandemic (2020)

Central banks launched unprecedented QE programs:
- Fed: Purchased Treasuries and corporate bonds, reintroduced term asset-backed securities facilities
- ECB: Pandemic Emergency Purchase Programme (PEPP) of €1.85 trillion
- Bank of Japan: Expanded purchases to include corporate bonds and ETFs

These programs, combined with fiscal stimulus, helped prevent a deeper economic downturn.

## Normalization

After crises subside, central banks must normalize policy:
1. **Taper:** Gradually reduce the pace of asset purchases
2. **Balance sheet runoff:** Allow securities to mature without reinvestment, or actively sell them
3. **Rate hikes:** Raise policy rates as the economy strengthens

The Fed began normalization in 2015 but paused in 2019, then restarted in 2022 to combat high inflation. The process is delicate—moving too fast can stifle growth, moving too slowly can allow inflation to become entrenched.
`,keyPoints:["QE is used when interest rates hit the zero lower bound","Large-scale asset purchases increase money supply and lower long-term rates","Forward guidance communicates future policy intentions","QE supports asset prices through portfolio rebalancing","Risks include asset bubbles, inequality, and exit challenges"],quiz:[{question:"When is quantitative easing typically used?",options:["When inflation is too high","When interest rates approach zero and traditional tools are exhausted","When the stock market is rising","When government debt is low"],correctIndex:1,explanation:"QE is used when interest rates approach the zero lower bound and traditional monetary policy tools are no longer effective."},{question:"How does QE affect long-term interest rates?",options:["It raises them by selling bonds","It lowers them by increasing demand for bonds","It has no effect on long-term rates","It only affects short-term rates"],correctIndex:1,explanation:"QE lowers long-term interest rates by increasing demand for bonds, which pushes up bond prices and reduces their yields."},{question:"What is forward guidance?",options:["Guidance on which stocks to buy","Communicating future policy intentions to influence market expectations","Directing banks on whom to lend to","Setting exchange rate targets"],correctIndex:1,explanation:"Forward guidance is a communication strategy where central banks announce their future policy intentions to influence market expectations and long-term interest rates."}]}]},{id:"global-finance",title:"Global Finance & Capital Flows",region:"Global",description:"Explore international capital flows, balance of payments, exchange rates, and the global financial system.",lessons:[{id:"lesson-1",title:"International Capital Flows",duration:"35 min",content:`
## The Financial Side of Trade

International capital flows are the financial side of international trade. When someone imports a good or service, the buyer (the importer) gives the seller (the exporter) a monetary payment. If total exports were equal to total imports, these monetary transactions would balance at net zero.

However, in reality, trade is rarely perfectly balanced. Countries run trade surpluses (exports > imports) or trade deficits (imports > exports). These imbalances must be financed through capital flows.

### Why Capital Flows Matter

Capital flows are essential for global economic functioning because they allow:
- Countries to invest more than they save (deficit countries)
- Savers to earn returns on investments abroad (surplus countries)
- Risk diversification across countries
- Technology transfer through foreign investment
- Consumption smoothing over time

## Gross vs. Net Flows

### Gross Flows

Gross flows (credits plus debits) represent the total volume of financial transactions. They include all purchases and sales of foreign assets, regardless of whether they offset each other.

During 1995–2003, gross flows involving industrial countries averaged $4.9 trillion per year. This enormous volume reflects the complexity and interconnectedness of modern financial markets.

**Example of gross flows:**
- U.S. investors buy $500 billion of European stocks
- European investors buy $400 billion of U.S. stocks
- Gross flows = $900 billion
- Net flows = $100 billion (U.S. net outflow)

### Net Flows

Net flows represent the difference between inflows and outflows. They measure the actual net change in a country's financial position.

Gross flows were about ten times the net capital flows during the 1995–2003 period. This massive "gross-to-net ratio" reflects the netting out of the vast majority of financial flows.

**Why gross flows matter:** Even though net flows are smaller, gross flows represent:
- Financial intermediation activity
- Portfolio rebalancing
- Risk management transactions
- Market liquidity

Large gross flows can create volatility even if net flows are stable.

## Financing Trade Imbalances

### The Accounting Identity

The balance of payments must balance: Current Account + Capital Account + Financial Account = 0

This means a current account deficit (trade deficit) must be financed by a financial account surplus (net capital inflows). Conversely, a current account surplus corresponds to a financial account deficit (net capital outflows).

### The U.S. Current Account Deficit

The United States has run persistent current account deficits for decades, primarily due to:
- Strong domestic demand for imports
- Reserve currency status (dollars are held globally)
- Higher returns on U.S. assets attracting foreign investment
- Lower domestic savings rate relative to investment

This deficit is financed by capital inflows from:
- Foreign purchases of U.S. Treasury securities
- Foreign direct investment in U.S. businesses
- Foreign portfolio investment in U.S. stocks and bonds

### Global Shifts

**Non-U.S. industrial countries** (Europe, Japan) have typically run trade surpluses, saving more than they invest and exporting capital to deficit countries like the U.S.

**Developing countries** shifted from being net capital importers to net capital exporters by the late 1990s. This shift occurred because:
- Asian countries built up reserves after the 1997 crisis
- Commodity exporters accumulated surpluses during commodity booms
- Improved economic policies attracted capital inflows

Net capital and financial flows increasingly flow from both developing and non-U.S. industrial countries to the United States, financing the U.S. current account deficit.

## The "Missing" Flows Problem

### The Statistical Discrepancy

Global balance of payments data shows statistical discrepancies—the world appears to run a current account deficit with itself, which is logically impossible. Since the world is a closed system (no country trades with Mars), the sum of all current accounts must equal zero.

However, the data shows the world running a current account deficit averaging more than $95 billion annually during 1995–2003. Combined with estimated errors and omissions, these missing data constitute omitted exports and financial flows well in excess of $100 billion per year.

### Possible Explanations

1. **Underreported exports to the United States:** Countries may underreport exports to avoid taxes or regulatory scrutiny, or due to measurement errors.

2. **Unreported financial flows to the United States:** Capital flows may go unreported, particularly through tax havens or offshore centers.

3. **Measurement errors in foreign direct investment earnings:** The U.S. data on earnings from foreign direct investment may be inaccurate. If U.S. net income from its direct investments has been underreported, this would reduce the measured U.S. current account deficit.

The available evidence suggests the second explanation is more likely—measurement errors in FDI earnings rather than systematic underreporting of trade.

### Why This Matters

These discrepancies matter because they:
- Distort our understanding of global imbalances
- Affect policy decisions based on flawed data
- Complicate international coordination
- May mask emerging financial risks

## Types of Capital Flows

### Foreign Direct Investment (FDI)

Long-term investment establishing lasting interest in an enterprise. Typically involves:
- Acquisition of a substantial stake (usually 10%+ of voting power)
- Management control or significant influence
- Long-term commitment
- Technology and knowledge transfer

**Example:** Toyota building a factory in the U.S. is FDI.

### Portfolio Investment

Purchase of securities (stocks, bonds) without seeking control. More volatile than FDI because it can be quickly reversed.

**Example:** A Japanese pension fund buying U.S. Treasury bonds.

### Other Investment

Bank loans, trade credit, currency deposits, and other financial claims. This category became increasingly important during the 2008 crisis.

### Reserve Assets

Changes in central bank foreign exchange reserves. When a central bank accumulates reserves, it's effectively lending to foreign countries (typically the U.S.).

[External Reading: International Capital Flows - EconLib](https://www.econlib.org/library/Enc/InternationalCapitalFlows.html)
`,keyPoints:["Capital flows finance international trade imbalances","Gross flows are typically much larger than net flows","US runs current account deficits financed by foreign capital","Developing countries became net capital suppliers by late 1990s","Global flow data shows significant statistical discrepancies"],quiz:[{question:"What is the relationship between gross and net capital flows?",options:["Gross flows are smaller than net flows","Gross flows are typically about 10 times net flows","They are always equal","Net flows are larger than gross flows"],correctIndex:1,explanation:"Gross flows (total transactions) are typically about 10 times net flows (difference between inflows and outflows), reflecting the netting out of most transactions."},{question:"How are trade imbalances financed?",options:["By printing money","By net financial flows between countries","By barter arrangements","They are not financed"],correctIndex:1,explanation:"Net trade imbalances must be financed by net financial flows between countries—capital flows from surplus countries to deficit countries."},{question:'What does the "missing flows" problem indicate?',options:["Capital flows are not important","Global trade data has significant measurement errors and underreporting","Money is disappearing","All countries have balanced trade"],correctIndex:1,explanation:"The statistical discrepancies in global balance of payments data (the world appearing to run a deficit with itself) indicate significant measurement errors and underreporting of exports and financial flows."}]},{id:"lesson-2",title:"Balance of Payments",duration:"30 min",content:`
## What Is the Balance of Payments?

The Balance of Payments (BoP) is a comprehensive record of all economic transactions that take place between residents of a country and the rest of the world during a specific period (usually a year or quarter). It's expressed in the domestic currency.

Think of the BoP as a country's international balance sheet—it tracks everything coming in (credits) and going out (debits).

### Why BoP Matters

The Balance of Payments is crucial because it:
- Shows a country's financial health and external position
- Guides monetary and fiscal policy decisions
- Affects exchange rates and international credibility
- Indicates whether a country is living within its means
- Helps identify emerging financial vulnerabilities

## The Main Components

### Current Account

The current account records trade in goods and services, income, and current transfers. It's often called the "trade account" because it reflects the flow of real economic activity.

**1. Trade Balance (Goods and Services)**
- **Goods:** Physical merchandise—cars, oil, electronics, agricultural products
- **Services:** Tourism, shipping, banking, consulting, software, intellectual property
- Trade balance = Exports - Imports
- A surplus means the country sells more than it buys
- A deficit means the country buys more than it sells

**2. Primary Income**
- Investment income: dividends, interest, reinvested earnings
- Compensation of employees: wages earned by residents working abroad minus wages paid to foreign workers domestically
- This reflects returns on cross-border investments

**3. Secondary Income (Current Transfers)**
- One-way transfers without a quid pro quo
- Includes remittances (workers sending money home), foreign aid, and gifts
- These are transfers, not transactions (nothing is received in return)

### Capital Account

The capital account records capital transfers and acquisition/disposal of non-produced, non-financial assets. This account is relatively small for most countries.

**Capital transfers:** Debt forgiveness, migrants' transfers of assets, inheritance taxes
**Non-produced, non-financial assets:** Patents, copyrights, trademarks, leases, and similar intangible assets

### Financial Account

The financial account records financial flows—changes in ownership of financial assets and liabilities. This is where the financing of current account imbalances occurs.

**1. Direct Investment**
- Long-term ownership stakes in foreign enterprises (typically 10%+ of voting power)
- Reflects lasting interest and control
- Includes equity capital, reinvested earnings, and intra-company loans
- More stable than other flows due to long-term commitment

**2. Portfolio Investment**
- Purchase of foreign stocks and bonds without seeking control
- More volatile than direct investment
- Can be quickly reversed ("hot money")
- Includes equity securities, debt securities, and money market instruments

**3. Other Investment**
- Bank loans, trade credit, currency deposits, and other financial claims
- Became very important during the 2008 financial crisis
- Includes both short-term and long-term instruments

**4. Reserve Assets**
- Changes in central bank foreign exchange reserves
- Gold, foreign currency deposits, SDRs, reserve position at IMF
- When reserves increase, the central bank is acquiring foreign assets (a debit to the financial account)

## The Accounting Identity

### The Fundamental Equation

In theory, the sum of all accounts should equal zero:

**Current Account + Capital Account + Financial Account = 0**

This identity must hold because every transaction has two sides:
- If you buy a foreign good (current account debit), you must pay for it somehow (financial account credit)
- If a foreigner invests in your country (financial account credit), they acquire an asset (current account debit)

### What the Identity Means

**Current account deficit** must be financed by a **financial account surplus** (net capital inflows). A country spending more than it earns must borrow from abroad or sell assets to foreigners.

**Current account surplus** corresponds to a **financial account deficit** (net capital outflows). A country earning more than it spends lends to foreigners or acquires foreign assets.

### Example

Suppose the U.S. runs a current account deficit of $500 billion:
- Americans buy $500 billion more from foreigners than foreigners buy from Americans
- This deficit must be financed by $500 billion of net capital inflows
- Foreigners must acquire $500 billion of U.S. assets (Treasuries, stocks, real estate, etc.)

## Why BoP Matters

### Exchange Rate Pressure

Persistent imbalances can affect currency values:
- Large current account deficits may lead to currency depreciation (need more foreign currency to pay for imports)
- Large current account surpluses may lead to currency appreciation (foreigners need domestic currency to pay for exports)

However, capital flows can offset trade flows. The U.S. has run persistent current account deficits but the dollar has remained strong due to strong capital inflows (foreigners want to hold dollar assets).

### Policy Implications

The BoP guides monetary and fiscal policy decisions:
- If a country has a large external deficit, it may need to tighten fiscal policy to reduce domestic demand for imports
- Central banks consider BoP when setting interest rates (higher rates attract capital inflows)
- Exchange rate policy affects the trade balance

### Sustainability

Large deficits may indicate borrowing beyond means:
- If a country finances deficits with short-term capital flows, it's vulnerable to sudden stops
- If deficits are financed with long-term FDI, they're more sustainable
- Persistent deficits can lead to debt crises

### Global Imbalances

Large, persistent imbalances across countries can contribute to financial instability:
- The 2008 crisis was preceded by large global imbalances (U.S. deficits, Chinese surpluses)
- Imbalances can reflect structural issues (savings-investment imbalances, demographic factors)
- Coordination may be needed to address global imbalances

## The "Twin Deficits"

A common pattern is the "twin deficits"—when a country runs both a fiscal deficit (government spending > revenue) and a current account deficit.

**Mechanism:** Government borrowing to finance the fiscal deficit can:
- Increase interest rates, attracting foreign capital
- Increase domestic demand, including for imports
- Cause currency appreciation, hurting exports

However, the relationship is not mechanical—other factors like savings rates, investment rates, and exchange rates also matter.

## Measurement Challenges

Balance of payments data has limitations:
- Time lags in reporting
- Statistical discrepancies (errors and omissions)
- Difficulties measuring certain transactions (e.g., services, intangibles)
- Changes in classification and methodology over time

Despite these limitations, BoP remains the primary tool for understanding a country's external position.

[External Reading: Global Economics - Balance of Payments](https://www.fe.training/free-resources/financial-markets/global-economics-balance-of-payments/)
`,keyPoints:["BoP records all transactions between a country and the rest of the world","Current account covers trade, income, and transfers","Financial account covers investment flows and reserve changes","Current account deficits must be financed by financial account surpluses","BoP data guides policy and indicates economic sustainability"],quiz:[{question:"What does the Current Account record?",options:["Only investment flows","Trade in goods and services, income, and transfers","Central bank reserves","Only government debt"],correctIndex:1,explanation:"The Current Account records trade in goods and services, income from investments, and current transfers like remittances and foreign aid."},{question:"If a country has a current account deficit, what must it have?",options:["A current account surplus","A financial account surplus (net capital inflows)","A trade surplus","Zero foreign investment"],correctIndex:1,explanation:"A current account deficit must be financed by a financial account surplus, meaning the country is receiving net capital inflows from abroad."},{question:"Why is the Balance of Payments important?",options:["It only matters for tax collection","It guides policy and indicates economic sustainability","It is only used by banks","It has no real-world significance"],correctIndex:1,explanation:"The Balance of Payments is important because it guides monetary and fiscal policy decisions, indicates economic sustainability, and can signal exchange rate pressures."}]},{id:"lesson-3",title:"Exchange Rates & Currency Markets",duration:"35 min",content:`
## What Are Exchange Rates?

An exchange rate is the price of one currency in terms of another currency. It determines how much of one currency you can buy with another.

**Example:** If the EUR/USD exchange rate is 1.10, this means 1 euro can buy 1.10 U.S. dollars. Conversely, 1 U.S. dollar can buy approximately 0.91 euros (1/1.10).

### Why Exchange Rates Matter

Exchange rates are crucial because they:
- Affect the competitiveness of exports and imports
- Influence inflation (through import prices)
- Determine the value of foreign investments
- Affect corporate profitability for multinational firms
- Influence central bank policy decisions
- Impact purchasing power for travelers

## Exchange Rate Regimes

### Fixed (Pegged) Exchange Rates

The currency's value is fixed to another currency or a basket of currencies. The central bank commits to buying and selling its own currency at the fixed rate to maintain the peg.

**How it works:**
- Central bank sets a specific exchange rate (e.g., 7.8 HKD = 1 USD)
- If market pressure pushes the currency below the peg, the central bank buys its own currency using foreign reserves
- If pressure pushes it above, the central bank sells its own currency, increasing supply

**Advantages:**
- Stability for international trade and investment
- Reduces transaction costs and exchange rate risk
- Can discipline monetary policy (must maintain peg)
- Reduces inflation expectations

**Disadvantages:**
- Loss of independent monetary policy (must align with anchor currency)
- Requires large foreign exchange reserves
- Vulnerable to speculative attacks if peg is unsustainable
- Cannot adjust to economic shocks through currency depreciation

**Examples:**
- Hong Kong dollar pegged to USD (since 1983)
- Saudi riyal pegged to USD
- China's managed float with reference to a basket

### Floating Exchange Rates

The currency's value is determined by market forces of supply and demand. Central banks may occasionally intervene but do not target a specific rate.

**How it works:**
- Market participants buy and sell currencies based on economic conditions
- Supply and demand determine the equilibrium exchange rate
- Central banks may intervene to smooth volatility but don't target a specific level

**Advantages:**
- Automatic adjustment to economic shocks
- Independent monetary policy
- No need for large reserves
- Market signals about economic health

**Disadvantages:**
- Volatility can hurt trade and investment
- Exchange rate risk for businesses
- Potential for overshooting (rates move beyond fundamental value)
- Can transmit external shocks

**Examples:**
- USD, EUR, JPY, GBP, CAD, AUD (major currencies)
- Most advanced economies use floating regimes

### Managed Float (Dirty Float)

A hybrid approach where the currency floats but central banks intervene to prevent excessive volatility or achieve policy objectives.

**How it works:**
- Market forces determine the general direction
- Central bank intervenes when rates move too far or too fast
- Interventions can be verbal (guidance) or actual (buying/selling)

**Examples:**
- Singapore's managed float against a basket
- India's managed float with periodic intervention
- Many emerging markets use this approach

## Factors Affecting Exchange Rates

### Interest Rate Differentials

Higher interest rates attract foreign capital seeking higher returns, appreciating the currency. This is one of the most powerful short-term drivers.

**Example:** If the Fed raises rates while the ECB keeps rates steady, dollar assets become more attractive, causing the dollar to appreciate against the euro.

**Mechanism:** Carry trade—investors borrow in low-interest currencies and invest in high-interest currencies, earning the spread.

### Inflation Differentials

Countries with lower inflation typically see their currency appreciate in real terms, as their purchasing power increases relative to other countries.

**Purchasing Power Parity (PPP):** In the long run, exchange rates should adjust so that identical baskets of goods cost the same in different countries. If inflation is higher in Country A, its currency should depreciate.

### Current Account Deficits

Persistent current account deficits (importing more than exporting) can lead to currency depreciation as the country needs more foreign currency to pay for imports.

**Mechanism:** Deficits must be financed by capital inflows. If investors become unwilling to finance the deficit, the currency depreciates.

### Economic Performance

Strong economic growth attracts investment, appreciating the currency. Investors seek growth opportunities and higher expected returns.

**Example:** If U.S. growth outperforms Europe, investors may shift funds to U.S. assets, appreciating the dollar.

### Political Stability

Political uncertainty leads to capital flight and depreciation. Investors prefer stable, predictable environments.

**Example:** Political crises, elections with uncertain outcomes, or policy uncertainty can trigger currency sell-offs.

### Speculation and Market Sentiment

Short-term movements are often driven by speculation and sentiment rather than fundamentals. Herding behavior can cause overshooting.

**Example:** "Risk-on" vs. "risk-off" sentiment—during global uncertainty, investors flock to safe-haven currencies like the USD and JPY.

## The Foreign Exchange Market

### Market Structure

The FX market is the largest financial market in the world, with over $6 trillion in daily trading volume. It operates 24 hours a day, 5 days a week, following the sun around the globe.

**Trading centers:**
- London (largest, ~43% of global turnover)
- New York (~19%)
- Singapore (~9%)
- Hong Kong (~8%)
- Tokyo (~7%)

**Participants:**
- Central banks (monetary policy, intervention)
- Commercial banks (interbank trading, client services)
- Hedge funds (speculation, arbitrage)
- Corporations (hedging, trade finance)
- Retail traders (speculation)

### Major Currency Pairs (The Majors)

**EUR/USD:** Euro/U.S. dollar (most traded pair)
**USD/JPY:** U.S. dollar/Japanese yen
**GBP/USD:** British pound/U.S. dollar ("cable")
**USD/CHF:** U.S. dollar/Swiss franc

**Commodity currencies:**
**AUD/USD:** Australian dollar/U.S. dollar
**USD/CAD:** U.S. dollar/Canadian dollar
**NZD/USD:** New Zealand dollar/U.S. dollar

### Trading Characteristics

- **High liquidity:** Major pairs trade 24/5 with tight spreads
- **High leverage:** FX trading typically uses 50:1 to 100:1 leverage
- **No central exchange:** Over-the-counter market
- **Two-way pricing:** Bid (sell) and ask (buy) prices with a spread

## Currency Crises

### What Is a Currency Crisis?

A currency crisis occurs when confidence in a currency collapses, leading to rapid depreciation, capital flight, and often broader economic crisis.

### Causes

**1. Unsustainable fixed exchange rates:** Countries with pegged rates that don't align with economic fundamentals (e.g., high inflation, large deficits)

**2. Large current account deficits:** Need for foreign financing that becomes unsustainable

**3. Short-term foreign currency debt:** If a country or companies owe money in foreign currency, depreciation makes debt harder to service

**4. Political or economic instability:** Loss of confidence triggers capital flight

### Dynamics

**Speculative attack:** Investors bet against the currency, selling it short and forcing the central bank to use reserves to defend the peg. When reserves run low, the peg collapses.

**Self-fulfilling prophecy:** Even if fundamentals are sound, the expectation of devaluation can trigger capital flight that makes devaluation inevitable.

**Contagion:** Crises can spread to other countries with similar characteristics (e.g., 1997 Asian crisis spread from Thailand to Indonesia, South Korea, Malaysia)

### Consequences

- **Rapid depreciation:** Currency can lose 30-50% of value in weeks
- **Capital flight:** Investors pull money out of the country
- **Banking crises:** Banks with foreign currency liabilities become insolvent
- **Inflation:** Import prices spike, causing inflation
- **Recession:** Economic activity contracts
- **Debt crises:** Foreign currency debt becomes unsustainable

### Historical Examples

**1992 ERM Crisis:** UK forced out of European Exchange Rate Mechanism after speculative attack on the pound

**1994 Mexican Peso Crisis:** "Tequila Crisis" triggered by devaluation and capital flight

**1997 Asian Financial Crisis:** Currencies across Southeast Asia collapsed after Thai baht devaluation

**1998 Russian Ruble Crisis:** Default on domestic debt led to ruble collapse

**2001 Argentine Crisis:** Convertibility regime collapsed, leading to default and devaluation

**2018 Turkish Lira Crisis:** Diplomatic tensions and economic concerns triggered currency collapse

## Exchange Rate Policies

### Why Countries Choose Different Regimes

Countries choose exchange rate regimes based on:
- **Economic structure:** Small open economies often peg to trading partners
- **Inflation history:** Countries with high inflation may peg to anchor expectations
- **Financial development:** Developed economies can better handle floating rates
- **Political considerations:** Pegs can symbolize stability

### Impossible Trinity

A country cannot simultaneously have:
1. Fixed exchange rate
2. Free capital mobility
3. Independent monetary policy

It must choose two of the three. This is known as the "impossible trinity" or "trilemma."

**Example:** China has a managed exchange rate and controls on capital flows, allowing some monetary policy independence. The Eurozone has a fixed exchange rate (single currency) and free capital mobility, giving up national monetary policy.
`,keyPoints:["Exchange rates are prices of currencies in terms of other currencies","Fixed regimes peg to another currency; floating regimes let markets decide","Interest rates, inflation, trade balances affect exchange rates","FX market is the world's largest financial market","Currency crises can trigger broader economic crises"],quiz:[{question:"What is the main difference between fixed and floating exchange rates?",options:["Fixed rates change daily, floating rates never change","Fixed rates are pegged to another currency; floating rates are market-determined","Fixed rates are used by all countries","Floating rates are illegal"],correctIndex:1,explanation:"Fixed (pegged) exchange rates are tied to another currency or basket, while floating exchange rates are determined by market forces of supply and demand."},{question:"How do higher interest rates typically affect a currency?",options:["They cause depreciation","They cause appreciation by attracting foreign capital","They have no effect","They only affect stock prices"],correctIndex:1,explanation:"Higher interest rates typically cause currency appreciation because they attract foreign capital seeking higher returns, increasing demand for the currency."},{question:"What is the approximate daily trading volume in the foreign exchange market?",options:["$100 billion","$1 trillion","$6 trillion","$50 trillion"],correctIndex:2,explanation:"The foreign exchange market is the largest financial market globally, with over $6 trillion in daily trading volume."}]}]},{id:"systemic-risk",title:"Systemic Risk & Financial Crises",region:"Global",description:"Understand financial contagion, systemic risk, and the dynamics of financial crises.",lessons:[{id:"lesson-1",title:"What Is Systemic Risk?",duration:"30 min",content:`
## Defining Systemic Risk

Systemic risk is the risk of collapse of an entire financial system or entire market, as opposed to risk associated with any one individual entity, group, or component. It's the risk that the failure of one institution or market segment could trigger a cascade of failures throughout the financial system, potentially leading to a broader economic crisis.

**Key distinction:** Idiosyncratic risk affects individual firms or assets (e.g., a company-specific problem). Systemic risk affects the entire system (e.g., a banking crisis).

### Why Systemic Risk Matters

Systemic risk is dangerous because:
- **Spillover effects:** Problems in one sector spread to others
- **Amplification:** Small shocks can become large crises
- **Real economy impact:** Financial crises cause unemployment, lost output, reduced wealth
- **Government bailouts:** Taxpayers often bear the cost of rescuing the system
- **Loss of confidence:** Financial systems rely on trust—crises destroy that trust

## Key Characteristics

### 1. Interconnectedness

Modern financial systems are highly interconnected through multiple channels:

**Interbank lending:** Banks lend to each other daily to manage liquidity. If one bank fails, others lose money and may fail themselves.

**Derivatives contracts:** Banks and institutions are connected through complex webs of derivatives (CDS, swaps, etc.). A default by one party affects all counterparties.

**Cross-ownership:** Financial institutions own shares and bonds of each other. Losses at one institution affect the balance sheets of others.

**Payment and settlement systems:** The infrastructure that processes transactions (e.g., Fedwire, SWIFT) is a single point of failure. If it stops, the entire financial system stops.

**Example:** In 2008, the failure of Lehman Brothers caused losses at hundreds of other institutions that held Lehman debt, were Lehman counterparties in derivatives, or had lent money to Lehman.

### 2. Procyclicality

Financial systems tend to amplify economic cycles, making booms bigger and busts deeper:

**During booms:**
- Asset prices rise, making balance sheets look stronger
- Lenders relax standards (risk appears lower)
- Leverage increases as confidence grows
- Risk-taking becomes excessive
- "This time is different" thinking

**During busts:**
- Asset prices fall, eroding balance sheets
- Lenders tighten standards, restricting credit
- Deleveraging forces asset sales, depressing prices further
- Fire sales create feedback loops
- Panic spreads

**Example:** The 2008 housing bubble saw relaxed lending standards, high leverage, and excessive risk-taking. When housing prices fell, the reverse happened—tight credit, forced selling, and a vicious cycle.

### 3. Complexity

The intricate web of relationships makes it difficult to predict how a shock will propagate:

**Hidden connections:** Relationships between institutions are not always transparent
- Off-balance-sheet exposures
- Complex derivatives structures
- Indirect linkages through common counterparties

**Non-linear dynamics:** Small shocks can have large effects due to tipping points and thresholds
- Margin calls trigger forced selling
- Liquidity dries up suddenly
- Confidence can collapse quickly

**Black swans:** Rare, unpredictable events with extreme impacts
- Events outside historical experience
- Models based on past data may not capture these risks

## Sources of Systemic Risk

### Too Big to Fail

Institutions whose failure would cause widespread disruption to the financial system and economy. These institutions are considered systemically important.

**Characteristics:**
- Large size relative to the financial system
- Interconnectedness with many other institutions
- Critical services (e.g., payment processing, custody)
- Substitutability (hard to replace quickly)

**Moral hazard:** Too-big-to-fail institutions may take excessive risks, knowing they'll be rescued if things go wrong. This creates unfair competition and increases systemic risk.

**Examples:** JPMorgan Chase, Bank of America, Citigroup in the U.S.; HSBC, Barclays in Europe.

### Common Exposures

Many institutions holding similar assets or making similar bets can lead to correlated losses. When one institution sells, others may need to sell too, amplifying the downturn.

**Herding behavior:** Institutions follow similar strategies
- Chase yield in good times
- Follow benchmarks
- Use similar models

**Asset bubbles:** When many institutions invest in the same overvalued assets, the correction affects everyone
- Housing bubble (2008)
- Tech bubble (2000)
- Emerging market debt crises

**Example:** In 2008, many banks held mortgage-backed securities. When housing prices fell, all suffered losses simultaneously.

### Contagion Channels

Contagion is the spread of financial distress from one institution or market to others.

**Direct contagion:** Through explicit contractual relationships
- Counterparty risk in derivatives
- Interbank lending exposures
- Payment system linkages

**Indirect contagion:** Through market mechanisms
- Asset fire sales: Forced selling depresses prices, affecting other holders
- Information effects: Panic spreads as investors reassess risk
- Liquidity hoarding: Institutions hoard cash, causing funding shortages
- Portfolio rebalancing: Investors sell similar assets, amplifying price declines

### Feedback Loops

Vicious cycles where problems reinforce each other:

**Margin call spiral:**
1. Asset prices fall
2. Margin calls force selling
3. Selling pushes prices lower
4. More margin calls
5. More selling...

**Liquidity spiral:**
1. Concerns about a bank's health
2. Depositors withdraw funds (bank run)
3. Bank sells assets to meet withdrawals
4. Asset prices fall
5. Concerns increase
6. More withdrawals...

**Debt-deflation spiral:**
1. Deflation increases real debt burdens
2. Borrowers cut spending to service debt
4. Prices fall further
5. Debt burdens increase more...

## Measuring Systemic Risk

### Network Analysis

Mapping interconnections between institutions to identify central nodes and transmission channels.

**Metrics:**
- Degree centrality: Number of connections per node
- Betweenness centrality: Nodes that lie on many shortest paths
- Eigenvector centrality: Importance based on connections to important nodes

**Applications:**
- Identify institutions that could be contagion sources
- Design stress scenarios
- Understand potential failure cascades

### Stress Testing

Simulating extreme scenarios to assess system resilience.

**Types:**
- Bank stress tests (e.g., CCAR in the U.S.)
- System-wide stress tests
- Reverse stress tests (what would cause failure?)

**Scenarios:**
- Economic downturns
- Market crashes
- Geopolitical events
- Cyber attacks

**Limitations:**
- Based on historical patterns (may miss new risks)
- Models may be wrong
- Difficulty capturing behavioral responses

### Early Warning Indicators

Metrics that may predict systemic stress:

**Credit indicators:**
- Credit growth (rapid growth often precedes crises)
- Credit-to-GDP ratio
- Non-performing loans

**Asset price indicators:**
- Price-to-earnings ratios
- Housing price-to-income ratios
- Asset price volatility

**Leverage indicators:**
- Debt-to-equity ratios
- Margin debt levels
- Household debt-to-income

**Liquidity indicators:**
- Bid-ask spreads
- Market depth
- Funding spreads

**Composite indicators:**
- Financial Conditions Indexes
- Systemic Risk Indexes

## Addressing Systemic Risk

### Macroprudential Regulation

Regulation focused on the financial system as a whole, not just individual institutions:

**Tools:**
- Countercyclical capital buffers (build buffers in good times)
- Leverage limits
- Liquidity requirements
- Stress testing requirements
- Resolution regimes for failing institutions

### Systemically Important Financial Institutions (SIFIs)

Special oversight and requirements for institutions whose failure would pose systemic risk:

**Higher capital requirements**
- Enhanced supervision
- Resolution planning (living wills)
- Structural reforms (e.g., separating trading from commercial banking)

### Central Bank Role

Central banks as lenders of last resort:
- Provide emergency liquidity in crises
- Act to prevent fire sales
- Stabilize financial markets

**Trade-off:** Providing liquidity can encourage moral hazard (institutions expect to be rescued).

[External Reading: BIS WP 597: Bank Networks and Contagion](https://www.bis.org/publ/work597.pdf)
`,keyPoints:["Systemic risk threatens the entire financial system, not just individual institutions","Interconnectedness, procyclicality, and complexity amplify systemic risk","Too-big-to-fail institutions create moral hazard","Contagion spreads through counterparty relationships and asset fire sales","Network analysis and stress testing help measure systemic risk"],quiz:[{question:"What distinguishes systemic risk from idiosyncratic risk?",options:["Systemic risk only affects small banks","Systemic risk threatens the entire financial system","Idiosyncratic risk is more dangerous","They are the same thing"],correctIndex:1,explanation:"Systemic risk is the risk of collapse of an entire financial system or market, while idiosyncratic risk is specific to individual entities."},{question:"What is procyclicality in financial systems?",options:["Systems that work countercyclically","Tendency to amplify economic cycles—excessive risk-taking in booms, deleveraging in busts","Systems that are always stable","Systems that only grow"],correctIndex:1,explanation:"Procyclicality refers to the tendency of financial systems to amplify economic cycles, with excessive risk-taking during booms and deleveraging during busts."},{question:"What is a common contagion channel?",options:["Only government actions","Counterparty relationships and asset fire sales","Only foreign exchange markets","Only stock markets"],correctIndex:1,explanation:"Contagion spreads through direct counterparty relationships and indirect channels like asset fire sales, information effects, and liquidity hoarding."}]},{id:"lesson-2",title:"Financial Contagion",duration:"35 min",content:`
## Understanding Contagion

Financial contagion is the spread of financial distress from one institution or market to others, potentially leading to broader systemic crisis. It occurs through various channels in interconnected financial networks.

Contagion can be fast, unpredictable, and severe. A problem in one part of the system can quickly become a problem for the entire system, as seen in 2008 when the failure of Lehman Brothers triggered global panic.

## Contagion Mechanisms

### Direct Contagion

Through explicit contractual relationships where the failure of one party directly causes losses for others.

**Interbank exposures:**
- Banks lend to each other in the interbank market
- If Bank A fails, Bank B suffers losses on loans to Bank A
- Bank B may then fail, affecting its other counterparties
- This creates a chain reaction

**Example:** In 2008, the failure of Lehman Brothers caused losses at banks that had lent to Lehman or held Lehman debt.

**Derivatives contracts:**
- Banks and institutions are connected through CDS, swaps, and other derivatives
- A counterparty default triggers losses for all counterparties
- The web of derivatives connections is complex and opaque
- A default can cascade through the system

**Example:** AIG's CDS exposure in 2008 threatened to cause losses at hundreds of institutions worldwide. The U.S. government had to rescue AIG to prevent contagion.

**Payment systems:**
- Settlement failures can cascade through payment systems
- If one participant fails to settle, others may fail to meet their obligations
- The entire payment system could seize up

**Example:** Concerns about settlement failures were a major concern during the 2008 crisis, leading central banks to provide emergency liquidity.

### Indirect Contagion

Through market mechanisms where distress spreads without direct contractual relationships.

**Asset fire sales:**
- Distressed institutions are forced to sell assets to raise cash
- Forced selling depresses prices
- Other institutions holding similar assets suffer mark-to-market losses
- Those institutions may then need to sell, creating a vicious cycle

**Example:** In 2008, hedge funds and banks selling mortgage-backed securities pushed prices down, causing losses for all MBS holders, triggering more selling.

**Liquidity hoarding:**
- In uncertain times, institutions hoard cash rather than lend
- This creates funding shortages for others
- Even healthy institutions may face liquidity problems
- The entire credit market can freeze

**Example:** After Lehman failed, banks stopped lending to each other, causing the interbank market to seize up. The Fed had to create emergency lending facilities.

**Information effects:**
- Panic spreads as investors reassess risk
- News of one institution's problems causes investors to worry about similar institutions
- Herding behavior amplifies the effect
- Even healthy institutions can face runs

**Example:** In the European sovereign debt crisis, concerns about Greece spread to other Eurozone countries with similar characteristics (Portugal, Ireland, Spain, Italy).

**Portfolio rebalancing:**
- Investors sell similar assets to manage risk
- This creates selling pressure across entire asset classes
- Prices fall across the board
- Correlations increase during crises (everything falls together)

**Example:** During the 2008 crisis, investors sold stocks globally, not just U.S. stocks, as they reduced risk across their portfolios.

## Network Theory and Contagion

Financial systems can be modeled as networks where nodes are institutions and edges represent relationships (exposures, correlations, etc.).

### Key Network Properties

**Degree centrality:**
- Number of connections per node
- Highly connected nodes are potential contagion sources
- If a central node fails, it affects many others

**Example:** Large banks like JPMorgan Chase have high degree centrality due to their many counterparties.

**Betweenness centrality:**
- Nodes that lie on many shortest paths between other nodes
- These nodes control information and contagion flow
- Removing them can fragment the network

**Example:** CCPs (central counterparties) have high betweenness centrality as they sit between many trading partners.

**Clustering:**
- Tendency for connected nodes to share connections
- High clustering can amplify or contain contagion
- Dense clusters can become infected quickly but may also contain spread

**Example:** Banks within the same region or business line tend to be highly connected to each other.

### Too Interconnected to Fail

Some institutions may be "too interconnected to fail"—their failure would disrupt the entire network even if they're not individually "too big to fail."

**Characteristics:**
- Critical network position (high centrality)
- Provide essential services (clearing, custody, payment processing)
- Many institutions depend on them
- Hard to replace quickly

**Example:** The Depository Trust Company (DTC) holds securities for millions of participants. If it failed, the entire U.S. securities market would stop.

## Empirical Evidence

### 2008 Financial Crisis

**Subprime mortgage losses spread to global banking system:**
- U.S. mortgage losses affected banks worldwide that held MBS
- European banks were particularly exposed
- The crisis became global, not just American

**Lehman Brothers collapse triggered panic:**
- Counterparties feared they wouldn't be paid
- Interbank lending froze
- Money market funds "broke the buck" (fell below $1 NAV)
- Commercial paper market seized up

**Asset fire sales across markets:**
- Selling in one market triggered selling in others
- Correlations approached 1 (everything moved together)
- Diversification failed in the crisis

**Example:** The sell-off in mortgage-backed securities led to selling of corporate bonds, equities, and even emerging market assets as investors raised cash.

### 2010 European Sovereign Debt Crisis

**Greek debt concerns spread to other Eurozone countries:**
- Investors worried about other countries with similar debt levels
- Bond yields rose across the Eurozone periphery
- The crisis spread from Greece to Ireland, Portugal, Spain, Italy

**Bank-sovereign doom loop:**
- Banks hold sovereign debt (governments owe money to banks)
- Sovereigns guarantee banks (governments backstop banks)
- If banks fail, sovereigns suffer (bailout costs, recession)
- If sovereigns struggle, banks suffer (debt value falls)
- This creates a vicious cycle

**Contagion across sovereign bond markets:**
- Investors sold bonds of all peripheral countries
- Yields spiked even for countries with better fundamentals
- The ECB had to intervene to stabilize markets

**Example:** Spain had relatively low debt but still faced high borrowing costs as investors lumped it with other peripheral countries.

### 2020 COVID Crisis

**Flight to safety caused liquidity shortages:**
- Investors sold risky assets and bought safe assets (Treasuries, gold)
- Even Treasury markets experienced liquidity stress
- Commercial paper market froze

**Central bank intervention prevented contagion:**
- Fed provided unlimited dollar swap lines to other central banks
- Fed bought corporate bonds (first time ever)
- Fed supported commercial paper market
- This prevented a repeat of 2008-style contagion

**Lesson:** Quick, decisive central bank action can prevent contagion from becoming a full-blown crisis.

## Contagion vs. Correlation

It's important to distinguish between contagion and correlation:

**Correlation:** Assets move together due to common factors (e.g., all stocks fall during a recession)
- Normal and expected
- Based on fundamental links
- Can be diversified away

**Contagion:** Distress spreads beyond what fundamentals would predict
- Excessive correlation during crises
- Based on panic and herding
- Cannot be easily diversified

**Example:** During the 2008 crisis, correlations between different asset classes approached 1, indicating contagion rather than normal correlation.

## Measuring Contagion Risk

### Cross-Correlation Analysis

- Measure correlations between markets during normal vs. crisis times
- Spikes in correlation indicate contagion
- Used to identify periods of heightened contagion risk

### CoVaR (Conditional Value at Risk)

- Measures the risk to the system when one institution is in distress
- Captures contribution to systemic risk
- Used by regulators to identify systemically important institutions

### Network Stress Tests

- Simulate failure of key institutions
- Model cascade effects through the network
- Identify potential contagion channels

## Mitigating Contagion

### Reducing Interconnectedness

- Limit concentration of exposures
- Diversify counterparty relationships
- Reduce reliance on critical nodes

### Building Resilience

- Higher capital buffers to absorb losses
- Liquidity requirements to survive stress
- Resolution plans for orderly failure

### Central Bank Tools

- Lender of last resort facilities
- Emergency liquidity programs
- Market stabilization operations

### Macroprudential Policy

- Countercyclical capital buffers
- Systemic risk surcharges for SIFIs
- Limits on interconnectedness

[External Reading: OFR: Contagion in Financial Networks](https://www.financialresearch.gov/working-papers/files/OFRwp-2015-21_Contagion-in-Financial-Networks.pdf)
`,keyPoints:["Contagion spreads distress through direct and indirect channels","Direct contagion: contractual relationships like interbank lending","Indirect contagion: fire sales, liquidity hoarding, information effects","Network theory helps identify potential contagion sources","Highly connected institutions can be contagion amplifiers"],quiz:[{question:"What is an example of direct contagion?",options:["Investors panic after reading news","Bank A fails causing losses at Bank B due to interbank lending","Asset prices fall due to forced selling","Central bank raises interest rates"],correctIndex:1,explanation:"Direct contagion occurs through explicit contractual relationships, such as when Bank A fails and Bank B suffers losses due to interbank lending or derivatives exposures."},{question:"What is asset fire sale contagion?",options:["Banks selling assets to make profits","Forced selling depresses prices, affecting other holders of similar assets","Investors buying assets during crisis","Government selling assets"],correctIndex:1,explanation:"Asset fire sale contagion occurs when distressed institutions are forced to sell assets, depressing prices and causing losses for other institutions holding similar assets."},{question:'What does "too interconnected to fail" mean?',options:["Institutions that are too big","Institutions whose failure would disrupt the network due to their connections","Institutions that never fail","Government-owned banks"],correctIndex:1,explanation:"Too interconnected to fail refers to institutions that, while not necessarily large, have so many connections that their failure would disrupt the entire financial network."}]},{id:"lesson-3",title:"Historical Financial Crises",duration:"40 min",content:`
## Learning from Crisis History

Financial crises are recurring events with common patterns. Understanding historical crises helps identify warning signs, develop better policy responses, and build more resilient financial systems. While each crisis has unique features, they share underlying mechanisms that, if understood, can help prevent or mitigate future crises.

## 1929 Great Depression

### Causes

**Stock market bubble and crash:**
- Speculative bubble in stock prices fueled by margin buying
- Stock prices far exceeded fundamental values
- Margin calls forced selling when prices began to fall
- The crash erased billions in wealth

**Bank failures:**
- Over 9,000 banks failed during the Depression
- No deposit insurance—depositors lost their money when banks failed
- Bank runs accelerated as depositors panicked
- Money supply contracted sharply

**Deflationary spiral:**
- Falling prices increased real debt burdens
- Borrowers cut spending to service debt
- Reduced spending caused more deflation
- Vicious cycle of falling prices and economic contraction

**Protectionist trade policies:**
- Smoot-Hawley Tariff raised U.S. tariffs dramatically
- Other countries retaliated with their own tariffs
- Global trade collapsed
- Economic contraction worsened

**Policy mistakes:**
- Federal Reserve tightened monetary policy too early
- Failed to provide sufficient liquidity to banks
- Gold standard constraints prevented adequate response
- Government initially tried to balance budget during downturn

### Lessons

**Importance of lender of last resort:**
- Central banks must provide liquidity during crises
- The Fed's failure to do so in 1929-1933 worsened the crisis
- Led to creation of discount window and emergency lending facilities

**Dangers of deflation:**
- Deflation increases real debt burdens
- Can lead to debt-deflation spiral
- Central banks should target low but positive inflation

**Need for bank deposit insurance:**
- FDIC created in 1933 to prevent bank runs
- Depositors now protected up to $250,000
- Bank runs largely eliminated in insured banks

**Coordination of international policy:**
- Global problems require coordinated solutions
- Protectionism worsens crises
- Need for international cooperation (IMF, World Bank created post-WWII)

## 1997 Asian Financial Crisis

### Causes

**Fixed exchange rate regimes became unsustainable:**
- Many Asian countries pegged their currencies to the USD
- Pegs worked when U.S. interest rates were low
- When U.S. raised rates, Asian countries had to tighten too
- Pegs eventually broke under pressure

**Large current account deficits:**
- Rapid growth fueled by foreign capital inflows
- Current account deficits reached 5-8% of GDP
- Reliance on short-term foreign capital
- Vulnerable to sudden stops

**Short-term foreign currency debt:**
- Banks and corporations borrowed in dollars
- When currencies depreciated, debt burdens soared
- Many borrowers became insolvent
- Triggered wave of defaults

**Weak financial regulation:**
- Poor supervision of banks and financial institutions
- Crony capitalism—loans to politically connected borrowers
- Inadequate risk management
- Lack of transparency

**Contagion across "Asian Tigers":**
- Crisis spread from Thailand to Indonesia, South Korea, Malaysia
- Investors treated the region as a single asset class
- Capital flight from entire region
- Even countries with better fundamentals were affected

### Timeline

**July 1997:** Thailand devalues the baht after running out of reserves defending the peg

**August 1997:** Crisis spreads to Indonesia, Philippines, Malaysia

**October 1997:** Hong Kong successfully defends its peg using massive reserves

**November 1997:** South Korea requests IMF assistance

**December 1997:** IMF provides emergency loans with conditionality (austerity, structural reforms)

**January 1998:** Malaysia imposes capital controls (unorthodox but successful)

**1998:** Most economies begin recovering after painful adjustments

### Lessons

**Dangers of short-term foreign currency debt:**
- Maturity and currency mismatches are deadly combinations
- Long-term local currency borrowing is safer
- Need to monitor external debt composition

**Importance of flexible exchange rates:**
- Fixed pegs can become unsustainable
- Flexible rates allow adjustment to shocks
- But volatility can be problematic for trade

**Need for strong financial regulation:**
- Weak supervision allows problems to build
- Transparency is crucial for market discipline
- Political interference in lending is dangerous

**Contagion can spread quickly across regions:**
- Regional similarities can amplify contagion
- Need for regional financial safety nets
- International coordination important

**IMF conditionality controversy:**
- Austerity measures may worsen crises in short run
- Social costs of adjustment
- Debate over appropriate policy response

## 2008 Global Financial Crisis

### Causes

**Subprime mortgage lending boom:**
- Lax lending standards (no documentation loans, NINJA loans)
- Adjustable-rate mortgages with low teaser rates
- Belief that housing prices would never fall nationally
- Mortgage brokers had incentives to originate risky loans

**Securitization and complex derivatives:**
- Mortgages packaged into mortgage-backed securities (MBS)
- MBS sliced into tranches with different risk profiles
- Credit default swaps (CDS) used to hedge or speculate on default risk
- Complexity made it hard to assess risk

**Excessive leverage:**
- Investment banks leveraged 30:1 or more
- Hedge funds used even more leverage
- Home buyers bought with little down payment
- System became fragile to small shocks

**Rating agency failures:**
- Rating agencies gave AAA ratings to risky securities
- Conflicts of interest (issuers pay for ratings)
- Models failed to account for correlation risk
- Investors relied too heavily on ratings

**Regulatory gaps:**
- Shadow banking (investment banks, hedge funds, SIVs) less regulated than banks
- No oversight of derivatives markets
- Inadequate regulation of mortgage originators
- Fragmented regulatory system

### Key Events

**2007:** Housing prices peak and begin to fall
- Subprime mortgage delinquencies rise
- Bear Stearns hedge funds collapse
- Banks begin writing down mortgage-related assets

**March 2008:** Bear Stearns rescued
- Fed facilitates sale to JPMorgan Chase
- First major investment bank failure
- Fed uses emergency powers for first time since Great Depression

**September 2008:** Lehman Brothers fails
- Lehman files for bankruptcy (largest bankruptcy in U.S. history)
- Counterparties suffer massive losses
- Money market funds "break the buck"
- Commercial paper market freezes

**September 2008:** AIG rescued
- Fed provides $85 billion emergency loan
- AIG's CDS exposures threatened global system
- Government takes 80% stake

**October 2008:** TARP enacted
- $700 billion Troubled Asset Relief Program
- Authority to purchase troubled assets
- Later used to recapitalize banks

**2008-2009:** Global recession
- Global GDP contracts sharply
- Unemployment rises worldwide
- Trade collapses
- Financial system near collapse

### Lessons

**Importance of macroprudential regulation:**
- Focus on system-wide risks, not just individual institutions
- Countercyclical capital buffers
- Leverage limits
- Stress testing

**Need to address too-big-to-fail:**
- Institutions that are too big to fail take excessive risks
- Moral hazard problem
- Need for resolution regimes (orderly failure)
- Structural reforms (Volcker Rule, living wills)

**Shadow banking requires oversight:**
- Non-bank financial firms can pose systemic risks
- Need to regulate entities by function, not form
- Derivatives need central clearing and transparency

**Central banks as lenders of last resort for non-banks:**
- Fed created emergency facilities for commercial paper, MBS, etc.
- Extended lender of last resort beyond traditional banks
- Controversial but necessary

## 2010 European Sovereign Debt Crisis

### Causes

**High government debt levels:**
- Greece had debt over 120% of GDP
- Other Eurozone countries also had high debt
- Debt levels accumulated over decades
- Exposed when markets lost confidence

**Banking crises in some countries:**
- Irish and Spanish banking crises
- Governments had to bail out banks
- Government debt increased sharply
- Sovereign and banking risks intertwined

**Loss of monetary policy flexibility:**
- Eurozone countries share a single currency
- Cannot devalue to regain competitiveness
- Cannot set independent monetary policy
- Must rely on fiscal policy and internal devaluation

**Bank-sovereign doom loop:**
- Banks hold sovereign debt (governments owe money to banks)
- Sovereigns guarantee banks (governments backstop banks)
- If banks fail, sovereigns suffer (bailout costs, recession)
- If sovereigns struggle, banks suffer (debt value falls)
- Creates vicious cycle

### Response

**Austerity measures:**
- Greece, Ireland, Portugal, Spain implemented spending cuts
- Tax increases
- Pension reforms
- Labor market reforms
- Social and political costs high

**ECB interventions:**
- Securities Markets Programme (SMP): bond purchases
- Outright Monetary Transactions (OMT): unlimited bond purchases with conditionality
- Long-term Refinancing Operations (LTROs): cheap long-term funding for banks
- Quantitative easing (QE) from 2015

**Bailouts:**
- Greece: €110 billion (first), €130 billion (second), €86 billion (third)
- Ireland: €67.5 billion
- Portugal: €78 billion
- Spain: €41 billion (for banks only)

**Banking union reforms:**
- Single Supervision Mechanism (SSM): ECB supervises major banks
- Single Resolution Mechanism (SRM): centralized bank resolution
- Deposit guarantee scheme harmonization
- Capital Requirements Directive (CRD IV)

### Lessons

**Fiscal discipline matters in monetary unions:**
- Countries in monetary unions cannot print money to service debt
- Need for fiscal rules and enforcement
- But austerity during recession can be counterproductive

**Need for banking union:**
- Banking crises and sovereign crises linked
- Need centralized supervision and resolution
- Deposit insurance at eurozone level
- Risk-sharing mechanisms

**Central bank backstop can calm markets:**
- ECB's OMT announcement (2012) dramatically reduced bond yields
- Credibility matters—ECB showed it would do "whatever it takes"
- Forward guidance powerful

**Structural reforms are difficult but necessary:**
- Labor market reforms needed for competitiveness
- Pension reforms for long-term sustainability
- Tax system improvements
- Political resistance strong

## 2020 COVID-19 Crisis

### Characteristics

**Exogenous shock:**
- Not a financial crisis in origin
- Pandemic caused economic shutdown
- Supply and demand shocks simultaneously
- Unique in modern experience

**Rapid economic contraction:**
- GDP fell at fastest rate since Great Depression
- Unemployment spiked globally
- Services sector hit hardest (travel, restaurants, entertainment)
- Supply chains disrupted

**Unprecedented policy response:**
- Fiscal stimulus on historic scale (10-20% of GDP in many countries)
- Monetary policy coordination globally
- Central bank balance sheets expanded massively
- Government guarantees for loans

**Financial system remained resilient:**
- Banks entered crisis with stronger capital than 2008
- Stress testing had identified vulnerabilities
- Regulatory reforms (Basel III) improved resilience
- Market infrastructure held up well

### Response

**Monetary policy:**
- Fed cut rates to zero and launched unlimited QE
- Fed bought corporate bonds (first time ever)
- Fed created emergency lending facilities
- Other central banks followed similar paths

**Fiscal policy:**
- U.S. CARES Act: $2.2 trillion
- Direct payments to households
- Enhanced unemployment benefits
- PPP loans to businesses
- State and local government aid

**International coordination:**
- G20 coordinated response
- IMF provided emergency financing
- Fed dollar swap lines to other central banks
- Debt service suspension for poor countries

### Lessons

**Speed of response matters:**
- Quick action prevented deeper crisis
- Delayed response in 2008 made crisis worse
- Don't wait for certainty—act decisively

**Central bank tools can be adapted:**
- Fed bought corporate bonds (beyond traditional mandate)
- Created new facilities rapidly
- Showed flexibility and creativity

**Financial system more resilient post-2008 reforms:**
- Higher capital, liquidity requirements
- Stress testing worked
- Resolution planning improved
- Banks were able to lend during crisis

**Importance of market infrastructure:**
- Payment systems remained operational
- CCPs handled record volumes
- Technology enabled remote work
- Contingency planning paid off

## Common Patterns

Across all crises, certain patterns recur:

### 1. Credit Boom Precedes Crisis

- Rapid credit growth often precedes financial crises
- Lending standards loosen as confidence grows
- Leverage increases
- Asset prices inflate
- Eventually, the boom turns to bust

**Example:** Credit growth preceded 2008, 1997 Asia, 1929, and many other crises.

### 2. Leverage Amplifies Downturns

- High leverage makes systems fragile
- Small shocks can become large when leveraged
- Deleveraging is painful and protracted
- Margin calls force selling, depressing prices further

**Example:** Investment bank leverage in 2008, household leverage in 2008, corporate leverage in 1997 Asia.

### 3. Contagion Spreads Across Markets

- Problems in one sector spread to others
- Global linkages transmit shocks
- Herding behavior amplifies contagion
- Even healthy institutions can be affected

**Example:** 2008 spread from subprime to global banking, 1997 spread from Thailand to all of Asia.

### 4. Policy Response Critical to Limit Damage

- Central banks as lenders of last resort crucial
- Fiscal stimulus can prevent depression
- Coordination across countries important
- Speed of response matters

**Example:** 2008 response prevented depression, 2020 response was even faster and larger.

### 5. Crisis Leads to Regulatory Reform

- Each crisis leads to new regulations
- Regulations address the specific causes of the crisis
- But may create new risks (regulatory arbitrage)
- Need for adaptive, principles-based regulation

**Example:** 1930s → deposit insurance, 2008 → Dodd-Frank, Basel III, etc.

## Why Crises Keep Happening

Despite learning from past crises, financial crises keep occurring because:

**Financial innovation creates new risks:**
- New products (derivatives, securitization) not well understood
- Complexity hides risks
- Regulation lags innovation

**Human nature:**
- Greed and fear drive markets
- "This time is different" thinking
- Memory fades over time
- New generation makes old mistakes

**Political economy:**
- Deregulation pressure in good times
- Resistance to tough regulation
- Regulatory capture
- International coordination difficult

**Incentive problems:**
- Moral hazard from bailouts
- Short-term focus vs. long-term stability
- Compensation structures encourage risk-taking

## Building a More Resilient System

### Macroprudential Framework

- System-wide focus, not just individual institutions
- Countercyclical policies (build buffers in good times)
- Address systemic risk sources
- International coordination

### Better Regulation

- Regulate by function, not form
- Address shadow banking
- Improve transparency
- Reduce regulatory arbitrage

### Enhanced Supervision

- More frequent and rigorous stress tests
- Forward-looking supervision
- Early intervention
- Resolution planning

### International Cooperation

- Global standards (Basel III, FSB, IMF)
- Information sharing
- Crisis management protocols
- Regional financial safety nets

[External Reading: ECB: Decomposing Systemic Risk](https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2929~19cda4a673.en.pdf)
`,keyPoints:["Financial crises show recurring patterns: credit booms, leverage, contagion","1929: Lessons on lender of last resort and avoiding deflation","1997 Asia: Dangers of short-term foreign debt and fixed rates","2008: Shadow banking, too-big-to-fail, macroprudential regulation","2020 COVID: Importance of rapid policy response"],quiz:[{question:"What was a key lesson from the 1997 Asian Financial Crisis?",options:["Fixed exchange rates are always good","Short-term foreign currency debt is dangerous","IMF loans should never have conditions","Capital controls are always bad"],correctIndex:1,explanation:"The Asian Financial Crisis highlighted the dangers of short-term foreign currency debt, which became unsustainable when exchange rates came under pressure."},{question:"What was unique about the 2008 crisis compared to previous crises?",options:["It only affected the US","It involved complex derivatives and shadow banking","It was caused by government spending","It had no impact on housing"],correctIndex:1,explanation:"The 2008 crisis was unique in its involvement of complex derivatives (CDOs, CDS) and the shadow banking system, which were outside traditional regulatory oversight."},{question:"How did the 2020 COVID crisis differ from previous financial crises?",options:["It was caused by financial speculation","It was an exogenous shock with unprecedented policy response","It only affected emerging markets","It led to tighter monetary policy"],correctIndex:1,explanation:"The COVID-19 crisis was an exogenous shock (not financial in origin) that triggered an unprecedented global policy response, with the financial system remaining relatively resilient due to post-2008 reforms."}]}]},{id:"derivatives",title:"Financial Derivatives",region:"General",description:"Master derivatives including forwards, futures, options, swaps, and their role in risk management and speculation.",lessons:[{id:"lesson-1",title:"Introduction to Derivatives",duration:"30 min",content:`
## What Are Derivatives?

A derivative is a financial contract whose value is derived from an underlying asset or group of assets. The underlying asset can be stocks, bonds, commodities, currencies, interest rates, or market indices. Unlike buying the underlying asset directly, derivatives allow participants to gain exposure to price movements without owning the asset.

**Key characteristic:** The value of a derivative is derived from the performance of the underlying. If the underlying price changes, the derivative's value changes in response.

**Example:** A stock option derives its value from the price of the underlying stock. If Apple stock rises, a call option on Apple stock becomes more valuable. The option itself is not Apple stock—it's a contract based on Apple stock.

## Why Derivatives Matter

Derivatives are fundamental to modern finance, serving multiple critical functions:

### Risk Management (Hedging)

Derivatives allow market participants to transfer risk to those willing to bear it. This is perhaps the most important economic function of derivatives.

**Farmers:** Lock in crop prices before harvest to protect against price declines
- A corn farmer can sell corn futures to lock in a price
- If corn prices fall, the futures gain offsets the lower crop price
- Reduces uncertainty and allows better planning

**Airlines:** Hedge fuel costs to protect against price volatility
- Jet fuel costs are a major expense and highly volatile
- Airlines use fuel derivatives to lock in future fuel prices
- Stabilizes costs and allows better fare planning

**Investors:** Protect portfolios against market downturns
- Buy put options to hedge against market declines
- Use index futures to hedge portfolio exposure
- Reduces risk without selling positions

**Banks:** Manage interest rate exposure
- Use interest rate swaps to convert floating-rate loans to fixed-rate
- Match asset and liability durations
- Reduce vulnerability to interest rate changes

**Multinational corporations:** Hedge currency risk
- Use forward contracts to lock in exchange rates
- Protect against adverse currency movements
- Stabilize foreign earnings

### Price Discovery

Derivatives markets provide valuable information about future expectations and market sentiment.

**Futures prices reflect expected future spot prices:**
- The price of oil futures for delivery in 6 months reflects market expectations of oil prices
- If futures are above spot, market expects prices to rise (contango)
- If futures are below spot, market expects prices to fall (backwardation)

**Options implied volatility shows market uncertainty:**
- Option prices reflect expected volatility of the underlying
- Higher implied volatility means market expects larger price swings
- VIX index (based on S&P 500 options) is called the "fear gauge"

**Term structure of interest rates:**
- Interest rate futures reveal expectations about future rates
- Central banks monitor these expectations when setting policy
- Yield curve derived from futures prices

### Speculation

Derivatives enable leveraged bets on market movements with relatively small capital outlay.

**Leverage:** Control large positions with small margin
- A futures contract might require 5-10% margin
- A 1% move in the underlying becomes a 10-20% move on the margin
- Allows larger potential returns (and losses)

**Directional views:**
- Buy call options if you think prices will rise
- Buy put options if you think prices will fall
- Sell futures if you think prices will decline
- Sell options if you think volatility will decrease

**Example:** With $10,000, you could buy 100 shares of a $100 stock (no leverage) or control $200,000 worth of stock using futures contracts (20x leverage). A 5% move in the stock becomes a 100% move on your futures position.

### Market Efficiency

Derivatives improve market efficiency by allowing:

**Arbitrage between related markets:**
- If futures prices diverge from expected spot prices, arbitrageurs profit
- This brings prices back into alignment
- Keeps markets efficient and prices accurate

**More complete markets:**
- Derivatives allow trading of risks that couldn't be traded otherwise
- Example: You can trade volatility directly using options
- Example: You can trade credit risk using CDS
- More trading opportunities improve price discovery

**Better risk sharing:**
- Risk can be transferred to those best able to bear it
- Hedgers transfer risk to speculators
- Those with risk tolerance bear risk; those with risk aversion avoid it
- Improves overall welfare

## Basic Types of Derivatives

### Forwards

A forward contract is an agreement to buy or sell an asset at a specified price on a future date. It's a private contract between two parties, typically customized to their specific needs.

**Key characteristics:**
- **Private agreement:** Bilateral contract between two parties
- **Customizable:** Size, delivery date, asset type, and other terms can be customized
- **Obligation:** Both parties must fulfill the contract (unlike options)
- **Over-the-counter (OTC):** Traded privately, not on an exchange
- **Counterparty risk:** One party may default on their obligation
- **No exchange involved:** Direct agreement between parties

**Example:** Company A agrees to buy 1,000 barrels of crude oil from Company B in 3 months at $75 per barrel. Both parties are obligated to complete the transaction at the agreed price, regardless of the market price at delivery.

**Pricing:** The forward price is typically set so the contract has zero value at inception. It reflects:
- Current spot price of the underlying
- Interest rates (cost of carry)
- Storage costs (for commodities)
- Convenience yield (benefits of holding the physical asset)

**Uses:**
- **Hedging:** Lock in future prices for certainty
- **Speculation:** Bet on future price movements
- **Arbitrage:** Exploit price differences between markets

### Futures

Futures are similar to forwards but traded on organized exchanges with standardized terms. They're the most widely used derivative type.

**Key characteristics:**
- **Exchange-traded:** Traded on organized exchanges (CME, ICE, Eurex, etc.)
- **Standardized:** Contract size, delivery dates, quality specifications are standardized
- **Obligation:** Both parties must fulfill the contract
- **Daily settlement (mark-to-market):** Gains and losses are settled daily
- **Central clearing:** A clearinghouse sits between buyer and seller, guaranteeing performance
- **Margin requirements:** Initial margin and maintenance margin required
- **Counterparty risk eliminated:** Clearinghouse guarantees contract performance
- **High liquidity:** Standardization and exchange trading create deep markets

**Daily settlement (mark-to-market):**
At the end of each trading day:
- The futures contract is marked to market at the closing price
- Gains and losses are settled daily (money moves between accounts)
- If your account falls below maintenance margin, you receive a margin call
- This prevents large losses from accumulating unnoticed
- Reduces counterparty risk compared to forwards

**Example:** The CME crude oil futures contract is for 1,000 barrels, with standardized delivery dates (e.g., January, February, March contracts). The clearinghouse sits between buyer and seller, guaranteeing that both parties will fulfill their obligations.

**Uses:**
- **Hedging:** Lock in future prices with exchange liquidity
- **Speculation:** Take leveraged positions on price movements
- **Price discovery:** Futures prices reflect market expectations
- **Index tracking:** Gain exposure to entire markets (e.g., S&P 500 futures)

### Options

Options give the holder the right, but not the obligation, to buy or sell an asset at a specified price on or before a future date.

**Call option:** Right to buy an asset at the strike price
- Profit when the underlying price rises above the strike price
- Loss limited to the premium paid
- Unlimited upside potential (theoretically)
- Used for bullish views or hedging against price increases

**Put option:** Right to sell an asset at the strike price
- Profit when the underlying price falls below the strike price
- Loss limited to the premium paid
- Limited upside (profit capped at strike price minus premium)
- Used for bearish views or hedging against price decreases

**Key terminology:**
- **Strike price (exercise price):** The price at which the option can be exercised
- **Expiration date:** The last day the option can be exercised
- **Premium:** The price paid for the option (option cost)
- **American style:** Can be exercised anytime before expiration
- **European style:** Can only be exercised at expiration
- **In the money (ITM):** Option would be profitable if exercised
- **Out of the money (OTM):** Option would be unprofitable if exercised
- **At the money (ATM):** Strike price equals current market price

**Example:** You buy a call option on Apple stock with a $150 strike price expiring in 3 months, paying a $5 premium. If Apple rises to $160, you can exercise the option, buy at $150, and sell at $160, making a $5 profit ($10 gain - $5 premium). If Apple stays below $150, you lose only the $5 premium (the option expires worthless).

**Option pricing factors:**
- **Underlying price:** Higher price increases call value, decreases put value
- **Strike price:** Higher strike decreases call value, increases put value
- **Time to expiration:** More time increases option value (more chance to move in-the-money)
- **Volatility:** Higher volatility increases option value (more chance of large moves)
- **Interest rates:** Higher rates increase call value, decrease put value
- **Dividends:** Higher dividends decrease call value, increase put value

**Uses:**
- **Hedging:** Protect against adverse price movements with limited downside
- **Speculation:** Leverage directional views with limited risk
- **Income generation:** Sell options to collect premium (risky)
- **Complex strategies:** Combine options for specific payoff profiles (spreads, straddles, etc.)

### Swaps

Swaps are agreements to exchange cash flows based on different financial instruments. The most common types are interest rate swaps and currency swaps.

**Interest rate swap:** Exchange fixed-rate payments for floating-rate payments
- One party pays a fixed rate, receives a floating rate
- The other party pays a floating rate, receives a fixed rate
- Typically based on notional principal amounts (no principal exchange)
- Used to manage interest rate risk

**Example:** Company A has a variable-rate loan but prefers fixed rates. Company B has a fixed-rate loan but prefers variable rates. They enter a swap to exchange interest payments, both getting their preferred rate exposure.

**Currency swap:** Exchange principal and interest payments in different currencies
- Exchange principal at the beginning and end of the swap
- Exchange interest payments during the swap term
- Used to manage currency risk or access cheaper foreign funding

**Example:** A U.S. company wants to borrow in euros but gets better rates in dollars. A European company wants to borrow in dollars but gets better rates in euros. They swap currencies and interest payments, both accessing cheaper foreign funding.

**Credit default swap (CDS):** Insurance against default
- Protection buyer pays periodic premiums to protection seller
- Protection seller pays if a credit event (default) occurs
- Used to hedge credit risk or speculate on creditworthiness

**Example:** You hold Greek government bonds but are worried about default. You buy a CDS on Greek debt, paying annual premiums. If Greece defaults, the CDS seller pays you the loss.

**Uses:**
- **Interest rate swaps:** Manage interest rate exposure
- **Currency swaps:** Manage currency risk or access foreign markets
- **CDS:** Hedge or speculate on credit risk
- **Commodity swaps:** Hedge commodity price exposure

## Exchange-Traded vs. OTC

### Exchange-Traded Derivatives

**Characteristics:**
- **Standardized contracts:** Same terms for all participants
- **Central clearing (CCP):** Clearinghouse guarantees performance
- **Transparent pricing:** Prices visible to all market participants
- **Lower counterparty risk:** Clearinghouse eliminates bilateral risk
- **Limited customization:** Cannot tailor contracts to specific needs
- **Regulated:** Subject to exchange and regulatory oversight
- **High liquidity:** Many participants, easy to enter/exit positions

**Examples:** Futures, options on futures, some options on individual stocks

### Over-the-Counter (OTC) Derivatives

**Characteristics:**
- **Customized terms:** Can tailor to specific needs
- **Bilateral agreements:** Direct agreement between two parties
- **Less transparent:** Prices and terms not publicly visible
- **Higher counterparty risk:** One party may default
- **Greater flexibility:** Can create unique structures
- **Less regulated:** Historically less oversight (changing post-2008)
- **Lower liquidity:** Can be difficult to exit positions

**Examples:** Forwards, swaps, most CDS, exotic options

**Post-2008 reforms:** Pushing more OTC derivatives toward central clearing and reporting to increase transparency and reduce systemic risk.

## The Derivatives Market

The global derivatives market is enormous, with notional amounts exceeding $600 trillion. However, notional amounts overstate economic exposure because:
- Many derivatives offset each other (netting)
- Notional is the reference amount, not the amount at risk
- Actual exposure is typically a small fraction of notional

**Market breakdown:**
- **Interest rate derivatives:** Largest segment (~80% of OTC)
- **Currency derivatives:** Significant (~15% of OTC)
- **Credit derivatives:** Smaller but important (~5% of OTC)
- **Equity and commodity derivatives:** Smaller segments

**Exchange vs. OTC:**
- Historically, OTC was much larger than exchange-traded
- Post-2008 reforms shifting more to exchange-traded
- Central clearing of standardized OTC derivatives

[External Reading: IGC Working Paper on Derivatives](https://www.theigc.org/sites/default/files/2015/02/Sundaram-2012-Working-Paper.pdf)
`,keyPoints:["Derivatives derive value from underlying assets","Used for hedging, price discovery, speculation, and market efficiency","Basic types: forwards, futures, options, swaps","Exchange-traded: standardized, cleared; OTC: customized, bilateral","Global derivatives market exceeds $600 trillion notional"],quiz:[{question:"What is the primary purpose of hedging with derivatives?",options:["To maximize profits","To transfer risk and protect against adverse price movements","To speculate on market movements","To avoid paying taxes"],correctIndex:1,explanation:"Hedging with derivatives is primarily used to transfer risk and protect against adverse price movements in underlying assets."},{question:"What is the main difference between forwards and futures?",options:["Forwards are standardized; futures are customized","Forwards are OTC; futures are exchange-traded with daily margining","Forwards are for stocks only; futures are for commodities only","There is no difference"],correctIndex:1,explanation:"Forwards are customized OTC contracts, while futures are standardized exchange-traded contracts with daily margining and central clearing."},{question:"What is an option?",options:["An obligation to buy or sell","The right but not obligation to buy or sell at a specified price","A type of stock","A government bond"],correctIndex:1,explanation:"An option gives the holder the right, but not the obligation, to buy (call) or sell (put) an underlying asset at a specified price."}]},{id:"lesson-2",title:"Interest Rate Derivatives",duration:"35 min",content:`
## Why Interest Rate Derivatives Matter

Interest rate risk is one of the most significant risks faced by financial institutions, corporations, and investors. Interest rate derivatives allow market participants to manage this risk effectively.

**Interest rate risk exposure:**
- **Banks:** Mismatch between interest-earning assets and interest-bearing liabilities
- **Corporations:** Variable-rate debt exposes them to rising interest costs
- **Investors:** Bond portfolios lose value when rates rise
- **Mortgage borrowers:** Adjustable-rate mortgages have uncertain future payments
- **Pension funds:** Duration mismatch between assets and liabilities

Interest rate derivatives provide tools to hedge, speculate on, or arbitrage interest rate movements.

## Types of Interest Rate Derivatives

### Interest Rate Swaps

An interest rate swap is an agreement to exchange fixed-rate payments for floating-rate payments (or vice versa). It's the most widely used interest rate derivative.

**How it works:**
- Two parties agree to exchange interest payments on a notional principal amount
- The notional principal is the reference amount but is not exchanged
- One party pays a fixed rate, the other pays a floating rate (e.g., LIBOR, SOFR)
- Payments are typically made periodically (quarterly or semi-annually)
- At each payment date, the parties net their payments (only the difference is paid)

**Example:**
Company A has issued $100 million of floating-rate debt at LIBOR + 2% but prefers fixed rates. Company B has issued $100 million of fixed-rate debt at 5% but prefers floating rates.

They enter a swap:
- Company A pays fixed 5% to Company B
- Company B pays floating LIBOR to Company A
- Net result: Company A effectively pays fixed 5% + 2% = 7% (fixed)
- Company B effectively pays floating LIBOR - 5% + 5% = LIBOR (floating)

**Why do it?**
- Company A might expect rates to rise and wants to lock in fixed rates
- Company B might expect rates to fall and wants to benefit from lower rates
- Both companies get their preferred rate exposure without refinancing debt

**Pricing interest rate swaps:**
The fixed rate in a swap is set so the swap has zero value at inception. It reflects:
- The yield curve (term structure of interest rates)
- The floating rate expected over the swap term
- Counterparty credit risk
- Supply and demand in the swap market

**Uses of interest rate swaps:**
- **Convert floating to fixed:** Companies with floating-rate debt can swap to fixed
- **Convert fixed to floating:** Companies with fixed-rate debt can swap to floating
- **Speculate on rates:** Take positions on future rate movements
- **Match asset/liability durations:** Banks manage interest rate risk
- **Reduce borrowing costs:** Access cheaper funding through comparative advantage

**Market size:** Interest rate swaps are the largest segment of the derivatives market, with notional amounts in the hundreds of trillions of dollars.

### Forward Rate Agreements (FRAs)

A Forward Rate Agreement is an OTC contract to lock in an interest rate for a future period. It's essentially a single-period interest rate swap.

**How it works:**
- Two parties agree on an interest rate for a future period
- At the future date, the actual market rate is compared to the agreed rate
- The difference is paid by one party to the other
- No principal exchange, only the interest rate difference

**Example:**
A company expects to borrow $10 million in 3 months for a 6-month period. They're worried rates will rise, so they enter an FRA:
- Agree to borrow at 4% for 6 months starting in 3 months
- If the actual rate in 3 months is 5%, the FRA seller pays the company the difference
- If the actual rate is 3%, the company pays the FRA seller the difference
- The company effectively locks in the 4% rate

**FRAs vs. Swaps:**
- FRAs are single-period (one payment)
- Swaps are multi-period (multiple payments over time)
- FRAs are simpler and more standardized
- Swaps are more flexible and customizable

**Uses of FRAs:**
- **Hedge future borrowing costs:** Lock in rates before borrowing
- **Hedge future lending rates:** Lock in rates before lending
- **Speculate on short-term rates:** Bet on future rate movements

### Interest Rate Futures

Interest rate futures are exchange-traded contracts on short-term interest rates. They're highly liquid and used extensively for hedging and speculation.

**Common interest rate futures:**
- **Eurodollar futures:** Based on 3-month LIBOR deposits (now transitioning to SOFR)
- **Treasury futures:** Based on U.S. Treasury notes and bonds (e.g., 10-year T-note futures)
- **Euro bund futures:** Based on German government bonds
- **Short sterling futures:** Based on UK short-term interest rates

**Characteristics:**
- **Standardized contract sizes:** Eurodollar futures are for $1 million notional
- **Standardized delivery dates:** Quarterly cycle (March, June, September, December)
- **Daily margining:** Gains and losses settled daily
- **Central clearing:** Clearinghouse guarantees performance
- **High liquidity:** Deep markets with tight bid-ask spreads
- **Cash settlement:** Most interest rate futures are cash-settled (no physical delivery)

**Pricing:**
Interest rate futures prices are quoted as 100 minus the interest rate. For example:
- If the 3-month LIBOR rate is 2%, the Eurodollar futures price is 98.00
- If rates rise to 2.5%, the futures price falls to 97.50
- Futures prices move inversely to interest rates

**Uses of interest rate futures:**
- **Hedge interest rate exposure:** Protect against adverse rate movements
- **Speculate on rates:** Take leveraged positions on rate movements
- **Construct yield curve:** Futures prices reveal expectations about future rates
- **Arbitrage:** Exploit price differences between related instruments

### Interest Rate Options

Options on interest rates provide the right, but not the obligation, to enter into an interest rate derivative at a specified rate.

**Caps:**
- A series of call options on interest rates
- Protect against rising rates
- If the reference rate exceeds the cap rate, the cap pays the difference
- Like insurance against rate increases

**Example:** A company with floating-rate debt buys a 5% cap on LIBOR. If LIBOR rises to 6%, the cap pays 1% (6% - 5%). The company's effective rate is capped at 5%.

**Floors:**
- A series of put options on interest rates
- Protect against falling rates
- If the reference rate falls below the floor rate, the floor pays the difference
- Useful for lenders or investors concerned about falling rates

**Example:** A bank with floating-rate loans buys a 3% floor on LIBOR. If LIBOR falls to 2%, the floor pays 1% (3% - 2%). The bank's effective rate is floored at 3%.

**Collars:**
- Combination of a cap and a floor
- Limit rate movement to a range
- Can be structured at zero cost (cap premium paid by floor premium)

**Example:** Buy a 5% cap and sell a 3% floor. If rates rise above 5%, the cap pays. If rates fall below 3%, you pay. Your effective rate is between 3% and 5%.

**Swaptions:**
- Options to enter into an interest rate swap
- Payer swaption: Right to pay fixed, receive floating
- Receiver swaption: Right to receive fixed, pay floating
- Useful for uncertain future financing needs

**Example:** A company might buy a payer swaption giving them the right to enter a swap at a fixed rate. If they need to borrow in the future and rates have risen, they exercise the option to lock in the favorable rate.

**Uses of interest rate options:**
- **Hedge against rate movements:** Protection with limited downside
- **Speculate on volatility:** Bet on rate volatility, not just direction
- **Structure custom payoffs:** Create complex risk profiles
- **Enhance yield:** Sell options to generate income (risky)

## Hedging with Interest Rate Derivatives

### Corporate Hedging

**Scenario:** A company has issued floating-rate debt and is concerned about rising interest rates.

**Hedging strategies:**
1. **Enter a pay-fixed swap:** Convert floating to fixed
2. **Buy an interest rate cap:** Protection against rising rates with flexibility
3. **Buy a payer swaption:** Option to swap if rates rise

**Choice depends on:**
- Certainty of the risk (how likely are rates to rise?)
- Flexibility needs (might want to benefit if rates fall)
- Cost (swaps have no upfront cost; options require premium)
- Accounting treatment (swaps may qualify for hedge accounting)

### Bank Interest Rate Risk Management

**Scenario:** A bank has interest-earning assets (loans) and interest-bearing liabilities (deposits) with different maturities.

**Gap analysis:**
- If assets reprice faster than liabilities (positive gap), bank benefits from rising rates
- If liabilities reprice faster than assets (negative gap), bank is hurt by rising rates

**Hedging strategies:**
- **Use swaps to adjust duration:** Match asset and liability sensitivities
- **Use futures for short-term hedging:** Manage near-term rate risk
- **Use options for asymmetric protection:** Protect against adverse moves while benefiting from favorable ones

### Portfolio Duration Management

**Scenario:** A bond portfolio manager wants to adjust portfolio duration without selling bonds.

**Strategies:**
- **Buy interest rate futures:** Shorten duration (futures gain when rates rise, offsetting bond losses)
- **Sell interest rate futures:** Lengthen duration (futures lose when rates rise, amplifying bond gains)
- **Use swaps:** Adjust duration without changing portfolio composition

**Advantages:**
- Lower transaction costs than buying/selling bonds
- Faster execution
- Can fine-tune duration precisely
- No impact on portfolio composition

## Risks of Interest Rate Derivatives

### Basis Risk

The risk that the hedging instrument doesn't perfectly match the exposure being hedged.

**Example:** A company hedges using LIBOR swaps, but its debt is linked to a different rate. If LIBOR and that rate diverge, the hedge is imperfect.

**Mitigation:**
- Use derivatives that match the underlying exposure
- Monitor basis risk and adjust hedges
- Use cross-currency swaps if needed

### Counterparty Risk

The risk that the other party defaults on their obligations.

**More relevant for OTC derivatives** (swaps, FRAs, options)
- Exchange-traded futures have minimal counterparty risk (clearinghouse)
- OTC derivatives require careful counterparty selection
- Collateral agreements can mitigate risk
- Central clearing reduces but doesn't eliminate risk

**Mitigation:**
- Use high-quality counterparties
- Require collateral
- Use central clearing when available
- Monitor counterparty credit exposure

### Liquidity Risk

The risk of being unable to exit positions at fair prices.

**More relevant for customized or less common instruments**
- Major swap tenors are liquid (5-10 years)
- Very long tenors (30 years) may be illiquid
- Exotic structures can be illiquid

**Mitigation:**
- Use liquid instruments when possible
- Avoid excessive position sizes
- Have exit strategies

### Model Risk

The risk that valuation models are incorrect.

**Relevant for complex structures**
- Swaptions, exotic options
- Complex payoff structures
- Model assumptions may be wrong

**Mitigation:**
- Use standard, well-understood instruments
- Validate models
- Use multiple models for comparison

## Market Participants

**Banks:**
- Major dealers in interest rate derivatives
- Provide liquidity to the market
- Hedge their own interest rate exposures
- Act as market makers

**Corporations:**
- Hedge interest rate exposure on debt
- Manage cash flow uncertainty
- Reduce borrowing costs

**Asset managers:**
- Hedge bond portfolio duration
- Adjust portfolio exposure without trading
- Enhance returns through carry trades

**Hedge funds:**
- Speculate on interest rate movements
- Exploit pricing inefficiencies
- Implement relative value strategies

**Central banks:**
- Monitor interest rate derivative markets
- Use them for monetary policy implementation
- Provide liquidity in times of stress

## Regulation Post-2008

Interest rate derivatives were not the primary cause of the 2008 crisis, but reforms have affected them:

**Central clearing:**
- Standardized interest rate swaps must be centrally cleared
- Reduces counterparty risk
- Increases transparency

**Margin requirements:**
- Non-cleared swaps require initial and variation margin
- Reduces systemic risk
- Increases cost of OTC derivatives

**Reporting requirements:**
- All trades must be reported to trade repositories
- Increases transparency
- Allows regulators to monitor systemic risk

**Benchmark reform:**
- LIBOR being phased out due to manipulation scandals
- Transition to risk-free rates (SOFR in U.S., €STR in Europe)
- Affects existing swap contracts and market conventions

[External Reading: BIS: Interest Rate Derivatives](https://www.bis.org/publ/rpfx10.htm)
`,keyPoints:["Interest rate swaps exchange fixed for floating rate payments","FRAs lock in future interest rates","Interest rate futures are exchange-traded and highly liquid","Interest rate options include caps, floors, and swaptions","Swap market exceeds $400 trillion notional, increasingly cleared through CCPs"],quiz:[{question:"What does an interest rate swap typically involve?",options:["Exchanging principal amounts","Exchanging fixed-rate payments for floating-rate payments","Buying and selling bonds","Exchanging currencies"],correctIndex:1,explanation:"Interest rate swaps typically involve exchanging fixed-rate payments for floating-rate payments (or vice versa) based on a notional amount."},{question:"What is an FRA?",options:["A type of government bond","An OTC contract to lock in an interest rate for a future period","An exchange-traded option","A type of stock"],correctIndex:1,explanation:"A Forward Rate Agreement (FRA) is an OTC contract that allows parties to lock in an interest rate for borrowing or lending over a future period."},{question:"What is the purpose of an interest rate cap?",options:["To protect against falling interest rates","To protect against rising interest rates","To speculate on stock prices","To exchange currencies"],correctIndex:1,explanation:"An interest rate cap is a series of call options on interest rates that provides protection against rising interest rates."}]},{id:"lesson-3",title:"FX and Credit Derivatives",duration:"35 min",content:`
## Foreign Exchange Derivatives

Foreign exchange (FX) derivatives allow market participants to hedge currency risk, speculate on exchange rate movements, and access foreign currency funding. Given the volatility and importance of currency markets, FX derivatives are among the most actively traded financial instruments globally.

### Why FX Derivatives Matter

**Currency risk exposure is widespread:**
- **Multinational corporations:** Earnings, costs, and assets denominated in multiple currencies
- **Investors:** International portfolios exposed to currency fluctuations
- **Banks:** Foreign exchange positions from lending and trading activities
- **Importers/exporters:** Trade transactions involve currency conversion
- **Governments:** Foreign reserves and sovereign debt in various currencies

**Currency volatility can significantly impact financial results:**
- A 10% move in a currency can turn a profitable deal into a loss
- Currency movements can erase gains from underlying business operations
- Hedging allows firms to focus on core business rather than currency speculation

### Types of FX Derivatives

#### FX Forwards

FX forwards are over-the-counter (OTC) contracts to exchange currencies at a specified rate on a future date. They are the simplest and most widely used FX derivative.

**How they work:**
- Two parties agree to exchange a specific amount of one currency for another at a future date
- The exchange rate (forward rate) is agreed upon at contract inception
- No upfront payment (typically), settlement occurs at maturity
- Obligation to complete the transaction (unlike options)

**Forward points:** The difference between forward and spot rates, determined by interest rate differentials
- If Country A interest rates > Country B rates, forward rate < spot rate (currency at discount)
- If Country A rates < Country B rates, forward rate > spot rate (currency at premium)
- This relationship is covered by interest rate parity theory

**Example:** A U.S. company expects to receive €1 million in 3 months from a European customer. Concerned the euro might weaken, they enter a forward contract to sell €1 million for USD at 1.1000 in 3 months. If the spot rate in 3 months is 1.0500, the company still receives $1.1 million, avoiding the $50,000 loss.

**Uses of FX forwards:**
- **Hedge future currency exposures:** Lock in exchange rates for known future cash flows
- **Lock in exchange rates for trade transactions:** Importers/exporters eliminate currency risk
- **Speculate on currency movements:** Take positions on future exchange rate movements
- **Arbitrage:** Exploit pricing inefficiencies between forward and spot markets

#### FX Swaps

FX swaps involve the simultaneous purchase and sale of currencies for different value dates. They're essentially a combination of a spot transaction and a forward transaction.

**How they work:**
- Two parties exchange currencies at the spot rate
- Agree to reverse the transaction at a future date at a predetermined forward rate
- Both principal amounts are typically exchanged at both dates
- The forward rate reflects interest rate differentials

**Example:** A U.S. bank needs euros for 3 months but has excess dollars. It enters an FX swap:
- Today: Sell $100 million, buy €92 million at spot rate 1.0870
- In 3 months: Sell €92 million, buy $100.5 million at forward rate 1.0924
- The bank effectively borrows euros for 3 months, paying an implied interest rate

**Uses of FX swaps:**
- **Manage short-term funding needs:** Obtain foreign currency without changing balance sheet
- **Roll forward FX positions:** Extend or adjust existing currency hedges
- **Access foreign currency funding:** Borrow in foreign markets at favorable rates
- **Liquidity management:** Banks use swaps to manage daily liquidity needs

**Market importance:** FX swaps are the largest segment of the FX derivatives market, used extensively by banks and corporations for funding and liquidity management.

#### Currency Swaps

Currency swaps exchange principal and interest payments in different currencies over the life of the swap. Unlike FX swaps, currency swaps typically have longer maturities (years, not days or months).

**How they work:**
- Two parties exchange principal amounts in different currencies at inception
- Exchange interest payments during the swap term (typically at regular intervals)
- Re-exchange principal amounts at maturity
- Interest rates can be fixed or floating

**Example:** A U.S. company wants to expand in Europe and needs euros, but can borrow more cheaply in dollars. A European company wants to expand in the U.S. but can borrow more cheaply in euros. They enter a currency swap:
- Inception: U.S. company lends $100 million to European company; European company lends €92 million to U.S. company
- During swap: U.S. company pays interest in euros; European company pays interest in dollars
- Maturity: Principal amounts re-exchanged at original exchange rate

**Uses of currency swaps:**
- **Access foreign currency at favorable rates:** Borrow in cheaper currency markets
- **Hedge long-term currency exposure:** Match currency of assets and liabilities
- **Convert debt between currencies:** Change currency denomination of existing debt
- **Arbitrage capital market inefficiencies:** Exploit differences in borrowing costs across markets

#### FX Options

FX options give the holder the right, but not the obligation, to buy (call) or sell (put) currency at a specified exchange rate on or before a future date.

**FX call option:** Right to buy currency at the strike price
- Profit when the underlying currency appreciates
- Loss limited to the premium paid
- Used to hedge against currency appreciation

**FX put option:** Right to sell currency at the strike price
- Profit when the underlying currency depreciates
- Loss limited to the premium paid
- Used to hedge against currency depreciation

**Example:** A U.S. company expects to receive €1 million in 3 months. To protect against euro depreciation while retaining upside if euro appreciates, they buy a put option with a 1.1000 strike:
- If euro falls to 1.0500, exercise option, sell at 1.1000
- If euro rises to 1.1500, let option expire, sell at 1.1500
- Cost: Premium paid for the option

**Uses of FX options:**
- **Hedge against adverse movements while retaining upside:** Asymmetric protection
- **Speculate with limited downside:** Leveraged directional views with capped losses
- **Structure complex payoffs:** Combine options for specific risk profiles
- **Manage contingent exposures:** Hedge uncertain future cash flows

## Credit Derivatives

Credit derivatives allow the transfer of credit risk without transferring the underlying asset. They separate the credit risk from the ownership of the asset, enabling more efficient risk management.

### Credit Default Swaps (CDS)

A Credit Default Swap is essentially insurance against default. The protection buyer pays periodic premiums to the protection seller, who compensates the buyer if a credit event occurs.

**Structure:**
- **Protection buyer:** Pays periodic premium (usually in basis points of notional)
- **Protection seller:** Receives premium, pays if credit event occurs
- **Reference entity:** The entity whose credit risk is being transferred
- **Notional amount:** The reference amount used to calculate payments
- **Credit event:** Triggers payment (bankruptcy, failure to pay, restructuring, etc.)

**Credit events:**
- **Bankruptcy:** Legal bankruptcy proceedings
- **Failure to pay:** Missed payment on debt obligations
- **Debt restructuring:** Modification of debt terms unfavorable to creditors
- **Acceleration/repudiation:** Debt declared due immediately or repudiated

**Example:** An investor holds $10 million of Company X bonds and is concerned about default. They buy CDS protection:
- Pay annual premium of 200 bps (2%) = $200,000 per year
- If Company X defaults, receive payment equal to loss (bond value - recovery value)
- If Company X doesn't default, premium paid is the cost of insurance

**CDS pricing:** CDS spreads reflect market perception of credit risk
- Higher spread = higher perceived risk
- Spread changes as credit conditions change
- Used as benchmark for corporate bond pricing

**Uses of CDS:**
- **Hedge credit exposure:** Protect against default on bond holdings
- **Take short positions on credit:** Profit from deteriorating creditworthiness
- **Diversify credit risk:** Reduce concentration in specific issuers
- **Speculate on credit events:** Bet on credit improvements or deteriorations
- **Relative value trading:** Express views on credit spreads

### CDS Index Products

CDS indexes provide exposure to a basket of credit entities, similar to stock indexes for equities. They allow trading of broad credit risk rather than individual names.

**CDX.NA.IG:** Index of 125 North American investment-grade corporate CDS
- Most liquid credit index
- Traded with 5-year and 10-year maturities
- Used as benchmark for U.S. corporate credit

**iTraxx Europe:** Index of 125 European investment-grade corporate CDS
- European equivalent of CDX
- Similar structure and liquidity
- Used as benchmark for European corporate credit

**How they work:**
- Buy protection: Pay spread, receive payment if any index constituent defaults
- Sell protection: Receive spread, pay if any constituent defaults
- Standardized, transparent, and liquid

**Uses of CDS indexes:**
- **Hedge broad credit exposure:** Protect against general credit deterioration
- **Gain exposure to credit markets:** Take views on overall credit conditions
- **Trade credit sentiment:** Express views on market risk appetite
- **Relative value trading:** Compare spreads across regions or sectors

### Other Credit Derivatives

**Total Return Swaps (TRS):** Exchange total return of reference asset for floating rate
- Protection seller receives all returns (interest, capital gains/losses)
- Protection buyer pays floating rate plus spread
- Allows synthetic exposure without owning the asset

**Credit Linked Notes (CLNs):** Securities with embedded credit derivatives
- Issued by special purpose vehicle (SPV)
- Investors bear credit risk of reference entity
- Principal reduced if credit event occurs
- Allows transfer of credit risk to capital markets

**Collateralized Debt Obligations (CDOs):** Structured products tranched by credit risk
- Pool of credit assets (bonds, loans, CDS)
- Tranches with different risk profiles (equity, mezzanine, senior)
- Senior tranches protected by junior tranches
- CDO-squared: CDOs of CDO tranches (even more complex)

## The Role of Credit Derivatives

### Benefits

**Risk transfer and diversification:**
- Banks can transfer credit risk to other market participants
- Concentration risk can be reduced
- Risk can be distributed more broadly across the financial system

**Price discovery for credit risk:**
- CDS spreads provide market-based measures of credit risk
- More timely than credit ratings
- Reflects market sentiment and expectations

**Liquidity for credit markets:**
- Allows trading of credit risk without trading underlying bonds
- More liquid than bond markets for some issuers
- Enables efficient risk management

**Hedging tool for bond portfolios:**
- Protect against default without selling bonds
- Maintain portfolio composition
- Manage duration and credit exposure independently

### Risks and Concerns

**Counterparty risk (AIG in 2008):**
- Protection seller may be unable to pay if credit event occurs
- AIG's CDS exposures threatened the entire financial system
- Central clearing reduces but doesn't eliminate this risk

**Opacity and complexity:**
- CDS positions are not always transparent
- Complex structures (CDOs) difficult to understand and value
- Interconnections hard to map

**Potential for speculation:**
- Can be used to speculate without underlying exposure
- "Naked" CDS: Buying protection without owning the underlying
- Can amplify market movements

**Contagion channels (2008 crisis):**
- Interconnections through CDS created contagion
- Lehman's CDS positions affected many counterparties
- AIG's failure would have caused widespread losses

## Regulation Post-2008

The 2008 crisis revealed significant problems in the credit derivatives market, leading to major reforms:

**Central clearing for standardized CDS:**
- Standardized CDS must be centrally cleared through CCPs
- Reduces counterparty risk
- Increases transparency
- Mandatory for many market participants

**Margin requirements:**
- Initial margin for non-cleared CDS
- Variation margin for mark-to-market changes
- Reduces systemic risk
- Increases cost of CDS trading

**Trade reporting and transparency:**
- All CDS trades must be reported to trade repositories
- Regulators can monitor systemic risk
- Market participants can see aggregate positions
- Improves market transparency

**Ban on naked CDS on sovereign debt (EU):**
- Cannot buy CDS protection on sovereign debt without owning bonds
- Intended to prevent speculative attacks on countries
- Controversial, may reduce market efficiency

## Market Size

**FX derivatives:**
- Daily notional turnover exceeds $6 trillion
- FX swaps are the largest segment
- Major centers: London, New York, Singapore, Tokyo
- 24-hour global market

**CDS:**
- Outstanding notional ~$10 trillion (down from pre-2008 peak of $60 trillion)
- Investment-grade CDS most liquid
- Sovereign CDS increasingly important
- Single-name CDS more liquid than structured products

FX derivatives are the most actively traded derivatives globally, with the majority being swaps and forwards. Credit derivatives, while smaller, play a crucial role in credit risk transfer and market functioning.

[External Reading: BIS: OTC Derivatives Statistics](https://www.bis.org/statistics/derstats.htm)
`,keyPoints:["FX forwards lock in future exchange rates","FX swaps manage short-term funding across currencies","CDS transfers credit risk via periodic premiums","CDS indexes provide broad credit market exposure","Credit derivatives improve risk transfer but created contagion in 2008"],quiz:[{question:"What does a Credit Default Swap (CDS) provide?",options:["Insurance against stock market losses","Protection against credit events like default or bankruptcy","Guarantee of profit on investments","Low-interest loans"],correctIndex:1,explanation:"A CDS provides protection against credit events such as bankruptcy, failure to pay, or debt restructuring in exchange for periodic premium payments."},{question:"What determines forward points in FX forwards?",options:["Stock market performance","Interest rate differentials between currencies","Government regulations","Trading volume"],correctIndex:1,explanation:"Forward points (the difference between forward and spot FX rates) are determined by interest rate differentials between the two currencies."},{question:"What was a major concern about credit derivatives during the 2008 crisis?",options:["They were too simple","Counterparty risk and opacity created contagion channels","They were not used enough","They were only traded on exchanges"],correctIndex:1,explanation:"During the 2008 crisis, counterparty risk (e.g., AIG) and the opacity of credit derivatives created contagion channels that amplified the crisis."}]}]},{id:"lbo-modeling",title:"LBO Modeling & Analysis",region:"Global",description:"Master LBO modeling from scratch: build integrated 3-statement models, analyze returns, and understand value creation drivers.",lessons:[{id:"lesson-1",title:"LBO Fundamentals & Model Structure",duration:"45 min",content:`
## What is an LBO?

A Leveraged Buyout (LBO) is the acquisition of a company using a significant amount of borrowed money (debt) to meet the purchase cost. The assets of the company being acquired are often used as collateral for the loans.

## Why PE Firms Use LBOs

**The LBO Equation:**
Returns = (Exit Value - Net Debt) / Equity Invested

- **Financial leverage:** Debt amplifies equity returns
- **Tax shield:** Interest payments are tax-deductible
- **Operational improvements:** PE firms drive value creation
- **Multiple expansion:** Buy low, sell high on valuation multiples

## Key LBO Model Components

**1. Sources & Uses of Funds**
Sources include: Senior debt (revolver, Term Loan A/B), Subordinated debt (high-yield bonds, mezzanine), Equity contribution (PE firm + management), Existing cash on target's balance sheet
Uses include: Purchase price (enterprise value), Transaction fees (advisory, financing, legal), Debt refinancing, Cash to balance sheet

**2. Purchase Price Allocation**
- Goodwill creation
- Asset step-ups (PPA - Purchase Price Allocation)
- Deferred tax implications

**3. Debt Schedule**
- Principal repayments (mandatory vs optional)
- Interest calculations (cash vs PIK)
- Covenant compliance tracking

**4. Returns Analysis**
- IRR (Internal Rate of Return)
- MOIC (Multiple on Invested Capital)
- Value creation bridge

## Typical LBO Capital Structure

| Tranche | % of Total | Cost | Security |
|---------|-----------|------|----------|
| Revolver | 0-10% | LIBOR + 200-300bps | First lien |
| Term Loan B | 40-60% | LIBOR + 300-400bps | First lien |
| Senior Notes | 20-30% | 6-8% fixed | Second lien or unsecured |
| Mezzanine | 0-10% | 10-14% (cash + PIK) | Subordinated |
| Equity | 30-50% | 20-30% target return | Residual |

## Key LBO Metrics

**Entry Multiple:** Purchase Price / LTM EBITDA (Typical range: 6x - 12x)

**Leverage Multiple:** Total Debt / EBITDA (Senior: 3.0x-5.0x, Total: 4.0x-7.0x)

**Debt Service:** EBITDA / Interest Expense (Minimum 2.0x for investment grade)

[External Reading: LBO Modeling Guide - Wall Street Prep](https://www.wallstreetprep.com/knowledge/lbo-modeling/)
`,keyPoints:["LBO uses debt to finance acquisition with assets as collateral","Sources = Uses: Debt + Equity = Purchase Price + Fees + Refinancing","Typical capital structure: 50-70% debt, 30-50% equity","Returns driven by: EBITDA growth, multiple expansion, debt paydown, cash flow generation","Entry multiples typically 6x-12x EBITDA depending on industry and market conditions"],quiz:[{question:"What is the primary source of returns in an LBO?",options:["Dividend payments","Debt paydown and EBITDA growth","Stock price appreciation","Interest income"],correctIndex:1,explanation:"LBO returns primarily come from debt paydown (increasing equity value), EBITDA growth (increasing exit value), multiple expansion, and free cash flow generation."},{question:'What does "Sources = Uses" mean in an LBO?',options:["Revenue equals expenses","Total financing equals total acquisition cost","Assets equal liabilities","Cash in equals cash out"],correctIndex:1,explanation:"Sources = Uses means the total financing (debt + equity) must equal the total acquisition cost (purchase price + transaction fees + debt refinancing + cash to balance sheet)."},{question:"What is a typical debt-to-EBITDA leverage ratio in an LBO?",options:["1x - 2x","2x - 3x","4x - 7x","10x - 12x"],correctIndex:2,explanation:"Typical LBO leverage ratios range from 4x to 7x EBITDA, with senior debt at 3x-5x and total debt including subordinated at 4x-7x depending on market conditions."}]},{id:"lesson-2",title:"Building the Integrated LBO Model",duration:"50 min",content:`
## Building an LBO Model Step-by-Step

### Step 1: Set Up the Model Structure

**Input Sections:**
- Transaction assumptions (entry multiple, premium, fees)
- Debt assumptions (interest rates, terms, covenants)
- Operating assumptions (revenue growth, margins, capex)
- Exit assumptions (exit multiple, year)

**Output Sections:**
- Returns analysis (IRR, MOIC)
- Sensitivity tables
- Value creation bridge

### Step 2: Build the Sources & Uses Schedule

**Example Sources:**
- Senior Debt (Revolver): $50m
- Term Loan B: $400m
- Senior Notes: $200m
- Equity Contribution: $300m
- Cash on Target's BS: $50m
- Total Sources: $1,000m

**Example Uses:**
- Purchase Equity: $800m
- Refinance Existing Debt: $100m
- Transaction Fees: $50m
- Cash to Balance Sheet: $50m
- Total Uses: $1,000m

### Step 3: Calculate Goodwill and PPA

**Purchase Price Allocation:**
- Equity Purchase Price: $800m
- Plus: Existing Net Debt: $100m
- Enterprise Value: $900m

**Allocation:**
- Tangible Assets (written up to FMV): $200m
- Existing Intangibles: $50m
- New Goodwill: $650m

**Tax Implications:**
- Asset step-ups create deferred tax liabilities
- Goodwill is not tax-deductible

### Step 4: Build the Debt Schedule

Track:
- Beginning balance
- Mandatory repayment (usually % of excess cash flow)
- Optional prepayment
- Ending balance
- Interest calculation (use average balance)

### Step 5: Link to 3-Statement Model

**Income Statement:**
- Add interest expense from debt schedule
- Calculate tax-effected net income

**Balance Sheet:**
- Add goodwill and intangible assets
- Show debt balances from schedule
- Calculate equity (beginning + net income - dividends)

**Cash Flow Statement:**
- CFO: Net income + D&A - Change in NWC
- CFI: CapEx - Acquisitions
- CFF: Debt issuance/repayment + equity contributions/distributions

### Step 6: Calculate Returns

**IRR Calculation:**
- Year 0: -$300m (equity invested)
- Year 5: +$600m (exit proceeds)
- IRR = 14.9%

**MOIC Calculation:**
- Exit Equity Value: $600m
- Invested Equity: $300m
- MOIC = 2.0x

## Common Modeling Best Practices

1. **Circularity Breaker:** Use a switch to break circular references (interest affects cash, cash affects interest)
2. **Error Checks:** Build checks that Sources = Uses, Balance Sheet balances
3. **Consistency:** Format all numbers the same way (one decimal for $ in millions)
4. **Sensitivities:** Build data tables for Entry/Exit multiples vs EBITDA growth

[External Reading: LBO Modeling Best Practices - Macabacus](https://www.macabacus.com/lbo-modeling/)
`,keyPoints:["Sources & Uses must always balance: total financing equals total acquisition cost","Goodwill = Purchase Price - Fair Value of Net Identifiable Assets","Debt schedule tracks mandatory repayments, optional prepayments, and interest","Circularity breaker needed for interest expense (cash depends on interest, interest depends on debt balance)","Returns calculated via IRR (time-weighted) and MOIC (total multiple)"],quiz:[{question:"Why is a circularity breaker needed in an LBO model?",options:["To prevent errors","To break circular references between interest and cash balances","To simplify the model","To reduce file size"],correctIndex:1,explanation:"A circularity breaker is needed because interest expense depends on average debt balance, which depends on cash flow, which depends on interest expense. This creates a circular reference that must be broken for the model to calculate properly."},{question:"What creates goodwill in an LBO?",options:["Debt financing","Paying more than the fair value of net identifiable assets","Transaction fees","Working capital adjustments"],correctIndex:1,explanation:"Goodwill is created when the purchase price exceeds the fair value of the target's net identifiable assets (tangible assets + identifiable intangibles - liabilities)."},{question:"How is MOIC calculated?",options:["Exit Equity Value / Invested Equity","IRR × Years Held","Total Debt / EBITDA","EBITDA Growth × Multiple Expansion"],correctIndex:0,explanation:"MOIC (Multiple on Invested Capital) = Exit Equity Value / Invested Equity. It shows how many times the initial equity investment is returned at exit."}]},{id:"lesson-3",title:"Value Creation & Returns Analysis",duration:"40 min",content:`
## Sources of Value Creation in LBOs

PE firms generate returns through four primary levers:

### 1. EBITDA Growth (30-50% of returns)

**Organic Growth:**
- Revenue growth (market expansion, pricing power)
- Margin improvement (cost reduction, operational efficiency)

**Inorganic Growth:**
- Add-on acquisitions (buy-and-build strategy)
- Geographic expansion

**Example:** Entry EBITDA: $100m, Exit EBITDA: $150m (10% CAGR), Multiple: 8x (unchanged), EV Created: $400m

### 2. Multiple Expansion (20-30% of returns)

Buying at a lower multiple and selling at a higher multiple.

**Drivers of Multiple Expansion:**
- Improved growth profile
- Reduced business risk
- Scale advantages from add-ons
- Market timing (buy in recession, sell in expansion)

**Example:** Entry Multiple: 7x, Exit Multiple: 9x, EBITDA: $100m (unchanged), EV Created: $200m

### 3. Debt Paydown (20-30% of returns)

Using free cash flow to reduce debt increases equity value.

**Free Cash Flow Example:**
- EBITDA: $100m
- Less CapEx: ($20m)
- Less Change in NWC: ($5m)
- Less Cash Taxes: ($15m)
- Free Cash Flow: $60m
- Less Mandatory Debt Paydown: ($30m)
- Less Optional Prepayment: ($20m)
- Cash to Balance Sheet: $10m

**Example:** Entry Net Debt: $400m, Exit Net Debt: $100m, Debt Reduction: $300m (accrues to equity)

### 4. Cash Flow Generation (10-20% of returns)

Dividends, recapitalizations, and distributions during the hold period.

**Dividend Recap:**
- Refinance to take cash out
- Does not change total return but accelerates cash realization
- Increases IRR by returning cash sooner

## Returns Analysis Framework

### IRR vs MOIC

**MOIC (Multiple on Invested Capital):**
- Simple multiple: Exit Equity / Entry Equity
- Ignores timing of cash flows
- Good for comparing across deals
- Typical target: 2.0x - 3.0x

**IRR (Internal Rate of Return):**
- Time-weighted return
- Accounts for interim distributions
- Typical target: 20% - 30%

**The Relationship:**
- Same MOIC, higher IRR = faster return of capital
- Same IRR, higher MOIC = more total value created

### Value Creation Bridge Example

- Entry Enterprise Value: $700m
- EBITDA Growth (8% CAGR): +$280m
- Multiple Expansion (7x to 9x): +$200m
- Less Additional Net Debt: ($50m)
- Exit Enterprise Value: $1,130m
- Less Exit Net Debt: ($150m)
- Exit Equity Value: $980m
- Plus Interim Dividends: $70m
- Total Proceeds: $1,050m
- Divided by Equity Invested: $300m
- MOIC: 3.5x
- IRR (5-year hold): 28.5%

### Sensitivity Analysis

Two-Way Data Table showing MOIC at different EBITDA CAGR and Exit Multiple combinations:

At 5% EBITDA CAGR: 1.8x to 2.7x MOIC
At 7% EBITDA CAGR: 2.0x to 3.2x MOIC
At 10% EBITDA CAGR: 2.3x to 3.8x MOIC
At 12% EBITDA CAGR: 2.6x to 4.4x MOIC

### Break-Even Analysis

**Margin of Safety:**
- How much can EBITDA decline before MOIC = 1.0x?
- How much can exit multiple compress before IRR = 0%?

**Example:** If MOIC = 2.0x at 10% EBITDA growth, break-even is approximately 2% EBITDA CAGR with no multiple compression.

## PE Firm Value Creation Strategies

### Operational Improvements
- **Cost reduction:** Procurement savings, headcount optimization
- **Revenue growth:** New products, pricing optimization
- **Working capital:** Inventory management, receivables collection

### Strategic Initiatives
- **Add-on acquisitions:** Roll-up strategy, synergies
- **International expansion:** New markets, diversification
- **Digital transformation:** E-commerce, automation

### Financial Engineering
- **Debt optimization:** Refinancing at lower rates
- **Tax efficiency:** Structuring, NOL utilization
- **Dividend recaps:** Return capital while maintaining ownership

[External Reading: Value Creation in Private Equity - McKinsey](https://www.mckinsey.com/industries/private-equity/our-insights/creating-value-in-private-equity)
`,keyPoints:["Four value creation levers: EBITDA growth (30-50%), multiple expansion (20-30%), debt paydown (20-30%), cash generation (10-20%)","MOIC = Exit Equity / Entry Equity; IRR accounts for timing","Debt paydown uses free cash flow after capex, working capital, and taxes","Multiple expansion driven by improved growth, lower risk, scale advantages","Dividend recaps accelerate IRR but do not change total MOIC"],quiz:[{question:"Which value creation lever typically contributes the most to LBO returns?",options:["Debt paydown","Multiple expansion","EBITDA growth","Cash dividends"],correctIndex:2,explanation:"EBITDA growth typically contributes 30-50% of total returns in an LBO, making it the largest driver. This includes both organic growth and growth from add-on acquisitions."},{question:"What is the difference between MOIC and IRR?",options:["MOIC is time-weighted, IRR is not","MOIC ignores timing, IRR accounts for when cash is received","MOIC is for debt, IRR is for equity","They are the same"],correctIndex:1,explanation:"MOIC is a simple multiple (Exit Equity / Entry Equity) that ignores timing. IRR is a time-weighted return that accounts for when interim distributions occur. Two deals can have the same MOIC but different IRRs."},{question:"What is a dividend recap?",options:["Paying dividends to all shareholders","Refinancing to extract cash while maintaining ownership","Reducing dividend payments","Exiting the investment"],correctIndex:1,explanation:"A dividend recapitalization involves refinancing the capital structure to extract cash while maintaining ownership. It accelerates IRR by returning capital sooner but does not increase total MOIC."}]}]},{id:"financial-statement-analysis",title:"Financial Statement Analysis for PE",region:"Global",description:"Learn to analyze financial statements like a PE associate: EBITDA adjustments, quality of earnings, working capital, and cash flow analysis.",lessons:[{id:"lesson-1",title:"Adjusting EBITDA & Normalizations",duration:"40 min",content:`
## Why EBITDA Adjustments Matter

In PE, reported EBITDA is just the starting point. Associates spend significant time identifying and quantifying adjustments to understand true operating performance.

## Common EBITDA Adjustments

### 1. Non-Recurring Items

**Add-backs for one-time expenses:**
- Restructuring costs
- Litigation settlements
- M&A transaction costs
- Asset write-downs
- CEO transition costs
- COVID-19 impacts
- Natural disaster impacts

**Example:**
- Reported EBITDA: $45.0m
- Add Restructuring costs: $3.0m
- Add Legal settlement: $2.5m
- Add Acquisition costs: $1.5m
- Adjusted EBITDA: $52.0m

### 2. Owner-Related Expenses

**Normalization for private companies:**
- Above-market owner compensation
- Personal expenses run through business
- Related-party transactions
- Family member salaries

**Example Adjustments:**
- Reported EBITDA: $12.0m
- Add Excess owner comp: $2.5m
- Add Personal auto/fuel: $0.3m
- Add Family member salaries: $1.2m
- Adjusted EBITDA: $15.0m
- At 8x multiple: +$36m valuation impact

### 3. Cost Savings ("Low-Hanging Fruit")

**Pro forma adjustments for PE buyers:**
- Duplicate overhead elimination
- Facility consolidation
- Procurement savings
- Headcount reduction
- Systems rationalization

**Important:** Must be achievable within 12-18 months with high confidence

### 4. Management Fees & Professional Services

**Add-backs:**
- Current PE sponsor management fees
- Excessive consulting fees
- Search firm fees for executives

### 5. Non-Operating Items

**Remove from EBITDA:**
- Investment income/expense
- FX gains/losses
- Rental income from non-core assets
- Gains/losses on asset sales

## Quality of Earnings (QoE) Analysis

A QoE report is prepared by accounting firms to validate EBITDA quality.

### Key QoE Procedures:

**1. Revenue Analysis:**
- Cut-off testing (revenue recognition timing)
- Customer concentration
- Related-party revenue
- One-time vs recurring

**2. Expense Analysis:**
- Vendor concentration
- Related-party expenses
- Cut-off testing
- Accrual vs cash basis anomalies

**3. Working Capital Analysis:**
- Days Sales Outstanding (DSO)
- Days Inventory Outstanding (DIO)
- Days Payable Outstanding (DPO)
- Cash conversion cycle

### Red Flags in QoE:

**Revenue Issues:**
- Channel stuffing
- Bill-and-hold arrangements
- Aggressive revenue recognition
- Customer concentration greater than 20%

**Expense Issues:**
- Capitalizing expenses
- Delaying maintenance
- Under-accruing expenses
- Related-party transactions

**Working Capital Issues:**
- DSO increasing (collection issues)
- DIO increasing (obsolete inventory)
- DPO spike (stretching payables)
- Negative cash conversion trends

## Normalized Working Capital

### Target Working Capital Calculation:

**Historical Average Method:**

Working Capital Components:
- Accounts Receivable: $12m
- Inventory: $8m
- Other Current Assets: $2m
- Less Accounts Payable: ($6m)
- Less Accrued Expenses: ($3m)
- Working Capital: $13m (13% of Revenue)

Target at $150m Revenue: $150m x 13% = $19.5m

### Working Capital Adjustment in Purchase Price:

Example:
- Purchase Price (8x EBITDA): $400m
- Less Excess Working Capital: ($5m)
- Plus Working Capital Deficiency: +$3m
- Adjusted Purchase Price: $398m

## Cash Flow Conversion Analysis

**EBITDA to Free Cash Flow Bridge:**
- EBITDA: $100m
- Less CapEx: ($20m)
- Less Change in NWC: ($5m)
- Less Cash Interest: ($15m)
- Less Cash Taxes: ($12m)
- Unlevered Free Cash Flow: $48m
- Conversion Rate: 48%

**Red Flags:**
- FCF conversion less than 30% consistently
- Large gap between net income and CFO
- Increasing DSO/DIO trends
- Declining maintenance capex

[External Reading: Quality of Earnings Analysis - Deloitte](https://www2.deloitte.com/us/en/pages/mergers-and-acquisitions/articles/quality-of-earnings.html)
`,keyPoints:["Reported EBITDA is just the starting point; adjustments reveal true operating performance","Common adjustments: non-recurring items, owner expenses, cost savings, non-operating items","QoE (Quality of Earnings) report validates EBITDA quality through detailed procedures","Working capital targets calculated as % of revenue based on historical averages","FCF conversion rate (EBITDA to FCF) typically 40-60% for healthy businesses"],quiz:[{question:"What is the most common EBITDA adjustment for private companies?",options:["Revenue recognition changes","Owner-related expenses","Currency impacts","Tax adjustments"],correctIndex:1,explanation:"Owner-related expenses are the most common adjustment for private companies, including above-market owner compensation, personal expenses run through the business, and family member salaries."},{question:"What is a Quality of Earnings (QoE) report?",options:["A profitability analysis","An accounting firm report validating EBITDA quality","A tax compliance report","A customer satisfaction survey"],correctIndex:1,explanation:"A QoE report is prepared by accounting firms to validate the quality of EBITDA through detailed analysis of revenue recognition, expense classification, and working capital trends."},{question:"How is target working capital typically calculated?",options:["Year-end balance","Average of historical periods as % of revenue","Industry benchmark","Management estimate"],correctIndex:1,explanation:"Target working capital is typically calculated as the average of historical working capital as a percentage of revenue, then applied to the current revenue base."}]},{id:"lesson-2",title:"Cash Flow Analysis & Capex",duration:"35 min",content:`
## Understanding Free Cash Flow

Free Cash Flow (FCF) is the cash available to all investors (debt and equity) after operating expenses and reinvestment needs.

### Types of Cash Flow:

**Unlevered Free Cash Flow (UFCF):**
- Cash available to all investors
- Before debt service
- Used in DCF and LBO models
- Formula: EBITDA - CapEx - Change in NWC - Cash Taxes

**Levered Free Cash Flow (LFCF):**
- Cash available to equity holders only
- After debt service
- Used for dividend capacity analysis
- Formula: EBITDA - CapEx - Change in NWC - Cash Interest - Mandatory Debt Repayment - Cash Taxes

## Capex Analysis

### Maintenance vs Growth Capex

**Maintenance Capex:**
- Required to maintain current operations
- Replacement of worn assets
- Typically 1.0x - 1.5x of depreciation

**Growth Capex:**
- Expansion capacity
- New facilities or equipment
- Technology investments

**Analysis Framework:**

Historical Analysis Example:
- Year 2021: Depreciation $15m, Capex $18m (1.2x ratio)
- Year 2022: Depreciation $16m, Capex $22m (1.4x ratio)
- Year 2023: Depreciation $18m, Capex $35m (1.9x - growth year)
- Year 2024: Depreciation $20m, Capex $24m (1.2x ratio)
- Normalized Maintenance: $20m - $25m

### Red Flags in Capex:

**Under-Investment:**
- Capex less than Depreciation for multiple years
- Aging equipment
- Deferred maintenance
- Potential liability for buyer

**Over-Investment:**
- Capex significantly exceeds depreciation without growth
- May indicate inefficient capital allocation
- High ROIC businesses can sustain lower capex

## Working Capital Deep Dive

### Cash Conversion Cycle

**Formula:** CCC = DSO + DIO - DPO

Where:
- DSO = (Accounts Receivable / Revenue) x 365
- DIO = (Inventory / COGS) x 365
- DPO = (Accounts Payable / COGS) x 365

**Industry Benchmarks:**

| Industry | DSO | DIO | DPO | CCC |
|----------|-----|-----|-----|-----|
| Retail | 5 | 45 | 30 | 20 |
| Manufacturing | 45 | 60 | 35 | 70 |
| Software | 60 | 0 | 15 | 45 |
| Healthcare | 50 | 30 | 25 | 55 |

### Working Capital Efficiency Analysis:

**Comparing to Benchmarks:**

Example Gap Analysis:
- DSO: Company 55 vs Industry 45 (+10 days gap)
- DIO: Company 50 vs Industry 40 (+10 days gap)
- DPO: Company 25 vs Industry 35 (-10 days gap)
- CCC: Company 80 vs Industry 50 (+30 days gap)

Working Capital at $100m Revenue:
- Current: $100m x (80/365) = $21.9m
- Target: $100m x (50/365) = $13.7m
- Potential Release: $8.2m

## Cash Flow Sustainability

### Key Metrics:

**FCF Conversion:**
- Formula: FCF / EBITDA = Conversion Rate
- Healthy Range: 40% - 60%
- Below 30%: Red flag (high capex or working capital drag)
- Above 70%: Potentially under-investing

**Cash Interest Coverage:**
- Formula: EBITDA / Cash Interest
- Minimum: 2.0x
- Comfortable: 3.0x+

**Debt Paydown Capacity:**
- Formula: Free Cash Flow / Total Debt
- Strong: greater than 15% annually
- Weak: less than 5% annually

### Seasonality Considerations:

**Quarterly Cash Flow Patterns:**
- Q1: Low (working capital build for year)
- Q2: Moderate
- Q3: Moderate
- Q4: High (collections, inventory drawdown)

**Implications for:**
- Revolver usage
- Debt repayment timing
- Dividend capacity
- Covenant compliance

[External Reading: Free Cash Flow Analysis - CFO Magazine](https://www.cfo.com/article/2016/12/free-cash-flow-analysis/)
`,keyPoints:["UFCF is cash available to all investors; LFCF is after debt service for equity holders","Maintenance capex typically 1.0x-1.5x depreciation; growth capex is expansion-related","Cash conversion cycle (CCC) = DSO + DIO - DPO; lower is better","FCF conversion rate (FCF/EBITDA) of 40-60% indicates healthy cash generation","Seasonality affects quarterly cash flows and revolver usage patterns"],quiz:[{question:"What is the difference between UFCF and LFCF?",options:["UFCF is after taxes, LFCF is before","UFCF is before debt service, LFCF is after","UFCF is for one year, LFCF is multi-year","They are the same"],correctIndex:1,explanation:"Unlevered Free Cash Flow (UFCF) is available to all investors and is calculated before debt service. Levered Free Cash Flow (LFCF) is available only to equity holders and is calculated after interest and mandatory debt repayments."},{question:"What is a healthy FCF conversion rate (FCF/EBITDA)?",options:["10-20%","20-30%","40-60%","80-100%"],correctIndex:2,explanation:"A healthy FCF conversion rate is typically 40-60%. Below 30% may indicate high reinvestment needs or working capital issues. Above 70% may indicate under-investment in the business."},{question:"What does the cash conversion cycle (CCC) measure?",options:["Total cash in the business","Days to convert inventory and receivables into cash, net of payables","Time to close the books","Cash interest coverage"],correctIndex:1,explanation:"The cash conversion cycle (CCC = DSO + DIO - DPO) measures the number of days it takes to convert inventory and receivables into cash, net of the time taken to pay suppliers. A lower CCC indicates better working capital efficiency."}]}]}],iy=[{term:"Repo (Repurchase Agreement)",definition:"A sale of securities coupled with an agreement to repurchase them at a future date and price; economically a collateralized short-term loan.",category:"Core Concepts"},{term:"Reverse Repo",definition:"The opposite side of a repo transaction; from the cash lender's perspective, it is a collateralized deposit or investment of cash.",category:"Core Concepts"},{term:"CCP (Central Counterparty)",definition:"An entity that interposes itself between buyers and sellers in financial transactions to guarantee performance and mutualize counterparty credit risk.",category:"Core Concepts"},{term:"Novation",definition:"The legal replacement of an original contract between two parties with two new contracts between each party and a central counterparty, extinguishing bilateral exposure.",category:"Core Concepts"},{term:"Netting",definition:"The offsetting of mutual obligations to reduce the number and size of payments or securities transfers required for settlement.",category:"Risk Management"},{term:"Margin (Initial)",definition:"Collateral posted at the initiation of a trade to protect against potential future exposure to counterparty default.",category:"Risk Management"},{term:"Margin (Variation)",definition:"Collateral transferred daily (or intraday) to reflect changes in the market value of cleared positions.",category:"Risk Management"},{term:"Haircut",definition:"A discount applied to the market value of collateral to create a buffer against price fluctuations.",category:"Risk Management"},{term:"DTCC/FICC",definition:"Depository Trust & Clearing Corporation / Fixed Income Clearing Corporation—the sole CCP for U.S. Treasury repo markets.",category:"U.S. Markets"},{term:"BNY Mellon",definition:"Bank of New York Mellon—the sole clearing bank for U.S. repo markets, holding custodial accounts for FICC and market participants.",category:"U.S. Markets"},{term:"CBES",definition:"Commercial Book-Entry System—the Federal Reserve's definitive ledger for U.S. Treasury securities ownership.",category:"U.S. Markets"},{term:"JSCC",definition:"Japan Securities Clearing Corporation—the central counterparty for Japanese securities markets, including JGB repo.",category:"Asian Markets"},{term:"CDP",definition:"Central Depository (Pte) Limited—the clearing house for Singapore securities, with limited repo clearing capabilities.",category:"Asian Markets"},{term:"HKSCC",definition:"Hong Kong Securities Clearing Company—the clearing house for Hong Kong equities, with limited repo clearing.",category:"Asian Markets"},{term:"Tri-Party Repo",definition:"A repo transaction where a third party (clearing bank) manages collateral selection, valuation, and settlement between borrower and lender.",category:"Market Structure"},{term:"Bilateral Repo",definition:"A repo transaction where two parties face each other directly without a central counterparty, each bearing the other's credit risk.",category:"Market Structure"},{term:"Sponsored Member",definition:"A market participant that accesses central clearing through a direct CCP member (e.g., a hedge fund sponsored by a dealer bank).",category:"Market Structure"},{term:"Default Waterfall",definition:"The ordered sequence of financial resources used by a CCP to absorb losses from a member default.",category:"Risk Management"},{term:"PFMI",definition:"Principles for Financial Market Infrastructures—international standards set by CPMI-IOSCO for payment, clearing, and settlement systems.",category:"Regulation"},{term:"FMU",definition:"Financial Market Utility—a systemically important financial market infrastructure designated under the U.S. Dodd-Frank Act.",category:"Regulation"},{term:"Joint Clearing Members",definition:"Large clearing members that participate in multiple CCPs simultaneously, creating potential transmission channels for stress across markets (Aldasoro & Veraart, BIS WP 1052).",category:"Risk Management"},{term:"Cover-2 Standard",definition:"CCP stress testing standard requiring sufficient prefunded resources to withstand the simultaneous default of the two clearing members with the largest exposures; challenged by research showing interconnectedness effects.",category:"Risk Management"},{term:"Novation",definition:"The legal replacement of an original contract between two parties with two new contracts between each party and a central counterparty, extinguishing bilateral exposure.",category:"Core Concepts"},{term:"Guarantee Fund",definition:"Prefunded resources contributed by CCP members to mutualize losses after a defaulting member's own resources are exhausted; also called default fund or clearing fund.",category:"Risk Management"},{term:"Variation Margin Gains Haircutting (VMGH)",definition:"A CCP loss allocation mechanism where variation margin payments to non-defaulting members are reduced ('haircutted') to absorb losses from a member default; creates potential spillovers to other CCPs.",category:"Risk Management"},{term:"Intra-Day Credit",definition:"Credit extended by a clearing bank to repo market participants during the trading day, enabling securities settlement before final funding; a key systemic risk in tri-party repo markets.",category:"Market Structure"},{term:"Contagion",definition:"The transmission of financial stress from one entity to others through direct or indirect linkages; in CCP contexts, often occurs through shared clearing membership or correlated collateral.",category:"Risk Management"},{term:"Recovery and Resolution",definition:"Frameworks for managing CCPs in financial distress—recovery involves tools to prevent failure; resolution addresses how authorities handle a failing CCP without taxpayer bailout.",category:"Regulation"}],Nk=[{title:"Repo & CCP Frequently Asked Questions",author:"ICMA European Repo and Collateral Council",url:"https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/",type:"Industry Guide",description:"Comprehensive FAQ covering repo fundamentals and CCP functions."},{title:"Principles for Financial Market Infrastructures",author:"CPMI-IOSCO",url:"https://www.bis.org/cpmi/publ/d101.htm",type:"Regulatory Standard",description:"International standards for payment, clearing, and settlement systems including CCPs."},{title:"Japan Securities Clearing Corporation",author:"JPX Group",url:"https://www.jpx.co.jp/jscc/en/",type:"Official Website",description:"Official information on JSCC clearing services and risk management."},{title:"Changes in repo markets and the necessity for CCPs in Korea",author:"Journal of Derivatives and Quantitative Studies",url:"https://www.emerald.com/jdqs/article/32/1/2/1214020",type:"Academic Paper",description:"Analysis of Korean repo market development and CCP necessity."},{title:"SGX Clearing Information",author:"Singapore Exchange",url:"https://www.sgx.com/securities/clearing-information",type:"Official Documentation",description:"Clearing rules and procedures for Singapore securities markets."},{title:"HKEX CCP Disclosures",author:"Hong Kong Exchanges and Clearing",url:"https://www.hkex.com.hk/Services/Clearing/Securities/CCP-Disclosures",type:"Regulatory Disclosure",description:"Quantitative disclosures for HKEX central counterparty clearing."},{title:"The impact of CCPs' margin policies on repo markets",author:"BIS Working Papers",url:"https://www.bis.org/publ/work515.pdf",type:"Research Paper",description:"BIS analysis of CCP margin policies and their effects on repo markets."},{title:"CCP Global Clearing Report 2024",author:"CCP Global (CCPG)",url:"https://ccp-global.org/amr",type:"Industry Report",description:"Annual review of global clearing market trends and developments."},{title:"Systemic Risk in Markets with Multiple Central Counterparties",author:"Aldasoro & Veraart, BIS Working Paper No 1052",url:"https://www.bis.org/publ/work1052.htm",type:"Academic Research",description:"Analysis of how joint clearing membership transmits stress across multiple CCPs; introduces framework for quantifying payment shortfalls and challenges Cover-2 standard assumptions."},{title:"Clearing Houses 101: What They Are and How They Work",author:"Futures Trading Pedia",url:"https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/",type:"Educational Primer",description:"Comprehensive primer on clearing house functions: novation, margining, default management, netting, and guarantee funds."},{title:"Tri-Party Repo Infrastructure Reform",author:"Federal Reserve Bank of New York",url:"https://www.newyorkfed.org/banking/tpr_infr_reform.html",type:"Official Documentation",description:"FRBNY framework for tri-party repo market reforms addressing systemic risk from clearing bank intra-day credit."},{title:"Central Counterparties: Addressing their Too Important to Fail Status",author:"IMF Working Paper WP/15/21",url:"https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf",type:"Policy Research",description:"IMF analysis of CCP interconnectedness, systemic importance, and resolution frameworks for too-important-to-fail clearing houses."},{title:"How Does the Repo Market Behave Under Stress?",author:"IMF Working Paper WP/21/267",url:"https://imf.org/-/media/Files/Publications/WP/2021/English/wpiea2021267-print-pdf.ashx",type:"Academic Research",description:"Evidence from the COVID-19 crisis on repo market liquidity risk, financial networks, and market microstructure."}];function di({icon:r,title:a,description:s}){return h.jsxs("div",{className:"lesson-card",children:[h.jsx(r,{className:"w-8 h-8 text-accent-cyan mb-4"}),h.jsx("h3",{className:"text-lg font-semibold mb-2",children:a}),h.jsx("p",{className:"text-gray-400 text-sm",children:s})]})}function Ok(){const r=Cn.reduce((s,l)=>s+l.lessons.length,0),a=Cn.reduce((s,l)=>s+l.lessons.reduce((u,f)=>u+f.quiz.length,0),0);return h.jsxs("div",{className:"min-h-screen",children:[h.jsxs("section",{className:"relative py-20 px-4 overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-accent-blue/10 via-transparent to-transparent"}),h.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6",children:[h.jsx(qp,{className:"w-4 h-4"}),h.jsx("span",{children:"Interactive Learning Platform"})]}),h.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent",children:"Repo Markets & CCPs"}),h.jsx("p",{className:"text-xl text-gray-400 mb-8 max-w-2xl mx-auto",children:"Master repurchase agreements and central counterparty clearing across U.S. and Asia-Pacific markets. From bilateral trading to FICC and JSCC—understand the plumbing of the financial system."}),h.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[h.jsxs(We,{to:"/module/us-repo",className:"inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105",children:["Start Learning",h.jsx(Cr,{className:"w-4 h-4"})]}),h.jsxs(We,{to:"/compare",className:"inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all border border-dark-500",children:[h.jsx(yu,{className:"w-4 h-4"}),"Compare Markets"]})]})]})]}),h.jsx("section",{className:"py-12 px-4 border-y border-dark-600 bg-dark-800/50",children:h.jsxs("div",{className:"max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:Cn.length}),h.jsx("div",{className:"text-sm text-gray-400",children:"Learning Modules"})]}),h.jsxs("div",{children:[h.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:r}),h.jsx("div",{className:"text-sm text-gray-400",children:"Lessons"})]}),h.jsxs("div",{children:[h.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:a}),h.jsx("div",{className:"text-sm text-gray-400",children:"Quiz Questions"})]}),h.jsxs("div",{children:[h.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:"2"}),h.jsx("div",{className:"text-sm text-gray-400",children:"Regions Covered"})]})]})}),h.jsx("section",{className:"py-16 px-4",children:h.jsxs("div",{className:"max-w-6xl mx-auto",children:[h.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",children:"Learning Modules"}),h.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:Cn.map(s=>h.jsxs(We,{to:`/module/${s.id}`,className:"lesson-card group hover:border-accent-cyan transition-all",children:[h.jsxs("div",{className:"flex items-start justify-between mb-4",children:[h.jsx("div",{className:`px-3 py-1 rounded-full text-xs font-medium ${s.region==="US"?"bg-accent-blue/20 text-accent-blue":s.region==="Asia"?"bg-accent-purple/20 text-accent-purple":s.region==="Global"?"bg-accent-green/20 text-accent-green":"bg-accent-orange/20 text-accent-orange"}`,children:s.region==="General"?"Finance Fundamentals":`${s.region} Markets`}),h.jsx(yo,{className:"w-5 h-5 text-gray-500 group-hover:text-accent-cyan transition-colors"})]}),h.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-accent-cyan transition-colors",children:s.title}),h.jsx("p",{className:"text-gray-400 text-sm mb-4",children:s.description}),h.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[h.jsxs("span",{children:[s.lessons.length," lessons"]}),h.jsx("span",{children:"•"}),h.jsxs("span",{children:[s.lessons.reduce((l,u)=>l+u.quiz.length,0)," quizzes"]})]})]},s.id))})]})}),h.jsx("section",{className:"py-16 px-4 bg-dark-800/50",children:h.jsxs("div",{className:"max-w-6xl mx-auto",children:[h.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",children:"Platform Features"}),h.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[h.jsx(di,{icon:bt,title:"Comprehensive Content",description:"Detailed lessons covering repo fundamentals, CCP mechanics, U.S. and Asian market structures."}),h.jsx(di,{icon:qp,title:"Interactive Diagrams",description:"Visual flow diagrams showing trade lifecycle from quote to settlement."}),h.jsx(di,{icon:Ak,title:"Risk Management Focus",description:"Understand netting, margin, default waterfalls, and systemic risk."}),h.jsx(di,{icon:yo,title:"Global Comparison",description:"Compare U.S. FICC model with Asia's multiple CCP landscape."}),h.jsx(di,{icon:yu,title:"Knowledge Testing",description:"Interactive quizzes to reinforce learning after each lesson."}),h.jsx(di,{icon:bt,title:"Glossary & Sources",description:"Comprehensive terminology definitions and academic sources."})]})]})})]})}const Hp={"us-flow":[{id:1,label:"Quote Request",desc:"Cash lender requests quotes via email/voice/platform"},{id:2,label:"Trade Execution",desc:"Cash borrower provides quote; trade agreed"},{id:3,label:"Trade Submission",desc:"Both parties submit to FICC; must match exactly"},{id:4,label:"Matching Engine",desc:"FICC verifies instructions; matched or rejected"},{id:5,label:"Novation",desc:"Bilateral contract extinguished; two CCP contracts created"},{id:6,label:"Netting",desc:"Multilateral offsetting reduces gross obligations"},{id:7,label:"Margining",desc:"Initial and variation margin posted to FICC"},{id:8,label:"Settlement (DVP)",desc:"Delivery vs Payment through clearing bank (BNY Mellon)"}],"asia-flow":[{id:1,label:"Trade Agreement",desc:"Bilateral or platform-based trade execution"},{id:2,label:"CCP Interposition",desc:"JSCC/CCP steps in via obligation assumption (novation)"},{id:3,label:"Risk Calculation",desc:"Portfolio-based margin (VaR) calculated"},{id:4,label:"Margin Posting",desc:"Both parties post margin to CCP"},{id:5,label:"Settlement",desc:"BOJ-Net or central bank system (not private clearing bank)"}]};function Bk({type:r}){const[a,s]=A.useState(null),l=Hp[r]||Hp["us-flow"];return r==="comparison"?h.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6 overflow-x-auto",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-8 min-w-[600px]",children:[h.jsxs("div",{children:[h.jsx("h4",{className:"text-accent-blue font-semibold mb-4",children:"U.S. Model"}),h.jsx("div",{className:"space-y-2",children:["Quote → Execute → Submit to FICC → Match → Novate → Net → Margin → DVP"].map((u,f)=>h.jsx("div",{className:"p-3 bg-dark-700 rounded text-sm",children:u},f))})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-accent-purple font-semibold mb-4",children:"Asia Model"}),h.jsx("div",{className:"space-y-2",children:["Trade → Novate → Risk Calc → Margin → Central Bank Settlement"].map((u,f)=>h.jsx("div",{className:"p-3 bg-dark-700 rounded text-sm",children:u},f))})]})]}),h.jsx("p",{className:"text-center text-sm text-gray-500 mt-4",children:"Key difference: U.S. has explicit matching before novation; Asia focuses on risk calculation post-novation"})]}):h.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6",children:[h.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-6",children:l.map((u,f)=>h.jsxs("div",{className:"flex items-center",children:[h.jsx("button",{onClick:()=>s(a===f?null:f),className:`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${a===f?"bg-accent-cyan text-dark-900":"bg-dark-600 text-gray-400 hover:bg-dark-500"}`,children:f+1}),f<l.length-1&&h.jsx("div",{className:"w-6 h-0.5 bg-dark-500 mx-1"})]},u.id))}),h.jsx("div",{className:"space-y-3",children:l.map((u,f)=>h.jsx("button",{onClick:()=>s(a===f?null:f),className:`w-full text-left p-4 rounded-lg transition-all ${a===f?"bg-accent-cyan/10 border border-accent-cyan":"bg-dark-700 border border-transparent hover:border-dark-500"}`,children:h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${a===f?"bg-accent-cyan text-dark-900":"bg-dark-600 text-gray-400"}`,children:f+1}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h4",{className:"font-semibold mb-1",children:u.label}),h.jsx("p",{className:`text-sm ${a===f?"text-gray-300":"text-gray-500"}`,children:u.desc})]})]})},u.id))})]})}function Uk({content:r}){const a=r.split(`
`),s=[];let l=0;for(;l<a.length;){const u=a[l];if(u.startsWith("## "))s.push(h.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4 text-white",children:u.slice(3)},l));else if(u.startsWith("### "))s.push(h.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3 text-accent-cyan",children:u.slice(4)},l));else if(u.startsWith("- "))s.push(h.jsx("li",{className:"ml-4 mb-2 text-gray-300",children:u.slice(2)},l));else if(u.startsWith("**")&&u.endsWith("**")){const f=u.replace(/\*\*/g,"");s.push(h.jsx("p",{className:"font-semibold text-white my-4",children:f},l))}else if(u.startsWith("|")){if(u.includes("---")){l++;continue}const f=u.split("|").filter(m=>m.trim()).map(m=>m.trim());f.length>0&&s.push(h.jsx("div",{className:"overflow-x-auto my-4",children:h.jsx("div",{className:"flex gap-4 border-b border-dark-500 pb-2",children:f.map((m,v)=>h.jsx("span",{className:"font-semibold text-accent-cyan min-w-[120px]",children:m},v))})},l))}else if(u.startsWith("```")){const f=[];for(l++;l<a.length&&!a[l].startsWith("```");)f.push(a[l]),l++;s.push(h.jsx("pre",{className:"bg-dark-700 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono text-gray-300",children:f.join(`
`)},l))}else if(u.trim()){const f=/\[([^\]]+)\]\(([^)]+)\)/g,m=[...u.matchAll(f)];if(m.length>0){let v=0;const g=[];m.forEach((y,k)=>{y.index>v&&g.push(h.jsx("span",{children:u.slice(v,y.index)},`text-${k}`)),g.push(h.jsx("a",{href:y[2],target:"_blank",rel:"noopener noreferrer",className:"text-accent-cyan hover:text-white underline",children:y[1]},`link-${k}`)),v=y.index+y[0].length}),v<u.length&&g.push(h.jsx("span",{children:u.slice(v)},"text-end")),s.push(h.jsx("p",{className:"mb-4 text-gray-300 leading-relaxed",children:g},l))}else s.push(h.jsx("p",{className:"mb-4 text-gray-300 leading-relaxed",children:u},l))}l++}return h.jsx(h.Fragment,{children:s})}function zk(){const{moduleId:r,lessonId:a}=ng();xu();const[s,l]=A.useState(!1),[u,f]=A.useState({}),[m,v]=A.useState(!1),g=Cn.find(G=>G.id===r),y=g==null?void 0:g.lessons.find(G=>G.id===a);if(A.useEffect(()=>{l(!1),f({}),v(!1),window.scrollTo(0,0)},[r,a]),!g||!y)return h.jsx("div",{className:"max-w-4xl mx-auto px-4 py-12",children:h.jsxs("div",{className:"text-center",children:[h.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Lesson Not Found"}),h.jsx(We,{to:"/",className:"text-accent-cyan hover:underline",children:"Return to Home"})]})});const k=g.lessons.findIndex(G=>G.id===a),w=k>0?g.lessons[k-1]:null,O=k<g.lessons.length-1?g.lessons[k+1]:null,F=(G,U)=>{m||f(X=>({...X,[G]:U}))},H=()=>{v(!0)},q=()=>{f({}),v(!1)},P=y.quiz.reduce((G,U,X)=>G+(u[X]===U.correctIndex?1:0),0),z=y.quiz.length;return h.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[h.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[h.jsxs(We,{to:`/module/${g.id}`,className:"inline-flex items-center gap-2 text-gray-400 hover:text-white",children:[h.jsx(oo,{className:"w-4 h-4"}),g.title]}),h.jsx("span",{className:"text-gray-600",children:"/"}),h.jsxs("span",{className:"text-gray-400",children:["Lesson ",k+1," of ",g.lessons.length]})]}),h.jsxs("div",{className:"mb-8",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("div",{className:"w-12 h-12 bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg flex items-center justify-center",children:h.jsx(bt,{className:"w-6 h-6 text-accent-cyan"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"text-sm text-gray-400",children:["Lesson ",k+1]}),h.jsx("h1",{className:"text-2xl font-bold",children:y.title})]})]}),h.jsxs("p",{className:"text-gray-400",children:["Duration: ",y.duration]})]}),h.jsx("div",{className:"prose prose-invert max-w-none mb-8",children:h.jsx(Uk,{content:y.content})}),y.hasDiagram&&y.diagramType&&h.jsxs("div",{className:"mb-8",children:[h.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Flow Diagram"}),h.jsx(Bk,{type:y.diagramType})]}),h.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6 mb-8",children:[h.jsx("h3",{className:"text-lg font-semibold mb-4 text-accent-cyan",children:"Key Takeaways"}),h.jsx("ul",{className:"space-y-2",children:y.keyPoints.map((G,U)=>h.jsxs("li",{className:"flex items-start gap-3",children:[h.jsx(gu,{className:"w-5 h-5 text-accent-green flex-shrink-0 mt-0.5"}),h.jsx("span",{className:"text-gray-300",children:G})]},U))})]}),h.jsxs("div",{className:"mb-8",children:[h.jsxs("button",{onClick:()=>l(!s),className:"w-full py-4 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2",children:[s?"Hide Quiz":"Take Quiz",s?h.jsx(oo,{className:"w-4 h-4"}):h.jsx(Cr,{className:"w-4 h-4"})]}),s&&h.jsxs("div",{className:"mt-6 space-y-6",children:[m&&h.jsx("div",{className:`p-4 rounded-lg ${P===z?"bg-accent-green/20 border border-accent-green":"bg-accent-amber/20 border border-accent-amber"}`,children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("span",{className:"text-lg font-semibold",children:["Score: ",P,"/",z]}),h.jsxs("button",{onClick:q,className:"flex items-center gap-2 px-4 py-2 bg-dark-600 hover:bg-dark-500 rounded-lg transition-colors",children:[h.jsx(Tk,{className:"w-4 h-4"}),"Retry"]})]})}),y.quiz.map((G,U)=>h.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6",children:[h.jsxs("h4",{className:"font-semibold mb-4",children:["Question ",U+1,": ",G.question]}),h.jsx("div",{className:"space-y-2",children:G.options.map((X,W)=>{const ue=u[U]===W,$=W===G.correctIndex,Ie=m;let Ne="quiz-option";return Ie?$?Ne+=" correct":ue&&!$&&(Ne+=" incorrect"):ue&&(Ne+=" selected"),h.jsx("button",{onClick:()=>F(U,W),className:Ne,disabled:m,children:h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsxs("span",{className:"font-mono text-accent-cyan",children:[String.fromCharCode(65+W),"."]}),h.jsx("span",{children:X})]})},W)})}),m&&h.jsx("div",{className:`mt-4 p-3 rounded-lg ${u[U]===G.correctIndex?"bg-accent-green/10":"bg-accent-red/10"}`,children:h.jsxs("p",{className:"text-sm",children:[h.jsx("span",{className:"font-semibold",children:"Explanation: "}),G.explanation]})})]},U)),!m&&h.jsx("button",{onClick:H,disabled:Object.keys(u).length<y.quiz.length,className:"w-full py-3 bg-accent-green hover:bg-accent-green/90 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:"Submit Answers"})]})]}),h.jsxs("div",{className:"flex items-center justify-between pt-6 border-t border-dark-600",children:[w?h.jsxs(We,{to:`/lesson/${g.id}/${w.id}`,className:"inline-flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors",children:[h.jsx(oo,{className:"w-4 h-4"}),h.jsxs("span",{className:"hidden sm:inline",children:["Previous: ",w.title]}),h.jsx("span",{className:"sm:hidden",children:"Previous"})]}):h.jsx("div",{}),O?h.jsxs(We,{to:`/lesson/${g.id}/${O.id}`,className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-accent-cyan rounded-lg transition-colors",children:[h.jsxs("span",{className:"hidden sm:inline",children:["Next: ",O.title]}),h.jsx("span",{className:"sm:hidden",children:"Next"}),h.jsx(Cr,{className:"w-4 h-4"})]}):h.jsxs(We,{to:g.id==="us-repo"?"/module/asia-repo":"/quiz",className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-green hover:bg-accent-green/90 rounded-lg transition-colors",children:[g.id==="us-repo"?"Start Asia Module":"Take Final Quiz",h.jsx(Cr,{className:"w-4 h-4"})]})]})]})}function Lk(){const{moduleId:r}=ng(),a=Cn.find(s=>s.id===r);return a?h.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[h.jsxs(We,{to:"/",className:"inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6",children:[h.jsx(oo,{className:"w-4 h-4"}),"Back to Home"]}),h.jsxs("div",{className:"mb-8",children:[h.jsx("div",{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${a.region==="US"?"bg-accent-blue/20 text-accent-blue":a.region==="Asia"?"bg-accent-purple/20 text-accent-purple":a.region==="Global"?"bg-accent-green/20 text-accent-green":"bg-accent-orange/20 text-accent-orange"}`,children:a.region==="General"?"Finance Fundamentals":`${a.region} Markets`}),h.jsx("h1",{className:"text-3xl font-bold mb-4",children:a.title}),h.jsx("p",{className:"text-gray-400 text-lg",children:a.description})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("h2",{className:"text-xl font-semibold",children:"Lessons"}),a.lessons.map((s,l)=>h.jsxs(We,{to:`/lesson/${a.id}/${s.id}`,className:"lesson-card flex items-start gap-4 group",children:[h.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-dark-600 rounded-lg flex items-center justify-center font-semibold text-accent-cyan",children:l+1}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("h3",{className:"font-semibold group-hover:text-accent-cyan transition-colors mb-1",children:s.title}),h.jsx("p",{className:"text-sm text-gray-400 line-clamp-2 mb-2",children:s.keyPoints[0]}),h.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[h.jsxs("span",{className:"inline-flex items-center gap-1",children:[h.jsx(pk,{className:"w-4 h-4"}),s.duration]}),h.jsxs("span",{children:[s.quiz.length," quiz questions"]}),s.hasDiagram&&h.jsx("span",{children:"• Interactive diagram"})]})]}),h.jsx(Cr,{className:"w-5 h-5 text-gray-500 group-hover:text-accent-cyan transition-colors flex-shrink-0"})]},s.id))]})]}):h.jsx("div",{className:"max-w-4xl mx-auto px-4 py-12",children:h.jsxs("div",{className:"text-center",children:[h.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Module Not Found"}),h.jsx(We,{to:"/",className:"text-accent-cyan hover:underline",children:"Return to Home"})]})})}const jk=[{category:"Structure",us:"Single CCP (FICC) - monopoly model",asia:"Multiple CCPs across jurisdictions (fragmented)",winner:"Depends on priority: US=efficiency, Asia=resilience"},{category:"Clearing Bank",us:"Single (BNY Mellon) - concentration risk",asia:"Multiple, jurisdiction-specific banks",winner:"Asia - no single point of failure"},{category:"Settlement System",us:"Fedwire / Private clearing bank (BNY Mellon)",asia:"Central bank systems (BOJ-Net, MAS, HKMA)",winner:"Asia - direct central bank settlement"},{category:"Market Depth",us:">$5 trillion daily (deepest globally)",asia:"Varies: Japan deep, others smaller markets",winner:"US - unmatched liquidity"},{category:"Currency",us:"USD (global reserve currency)",asia:"JPY, SGD, HKD, KRW (local currencies)",winner:"US - reserve status creates global demand"},{category:"Repo Rates",us:"SOFR-linked, typically positive",asia:"JGB repo can be deeply negative (safe haven)",winner:"Different dynamics - Asia has deflationary episodes"},{category:"Cross-Border",us:"Limited due to single market focus",asia:"Complex: Connect programs, multiple FX regimes",winner:"US - simpler, Asia has growth potential"},{category:"Default Management",us:"Standardized FICC waterfall",asia:"Varied: JSCC, CDP, HKSCC each have own rules",winner:"US - consistency, Asia - competition/innovation"},{category:"Regulatory",us:"Unified SEC/CFTC oversight",asia:"Fragmented across jurisdictions (JFSA, MAS, HKMA)",winner:"US - unified, Asia - tailored to local needs"},{category:"Systemic Risk",us:"Concentrated in FICC and BNY Mellon",asia:"Distributed across multiple CCPs/clearing banks",winner:"Asia - diversification advantage"}];function qk(){const[r,a]=A.useState(null);return h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[h.jsxs("div",{className:"text-center mb-12",children:[h.jsxs("h1",{className:"text-3xl font-bold mb-4 flex items-center justify-center gap-3",children:[h.jsx(uk,{className:"w-8 h-8 text-accent-cyan"}),"U.S. vs. Asia-Pacific Comparison"]}),h.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"Compare the single-CCP U.S. model with the fragmented but resilient Asian multi-CCP landscape."})]}),h.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-12",children:[h.jsxs("div",{className:"lesson-card border-accent-blue/30",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx(dk,{className:"w-6 h-6 text-accent-blue"}),h.jsx("h2",{className:"text-xl font-bold text-accent-blue",children:"United States Model"})]}),h.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"A concentrated, efficient model with FICC as the sole Treasury repo CCP and BNY Mellon as the sole clearing bank. Maximizes standardization and liquidity but creates single points of failure."}),h.jsxs("div",{className:"text-sm",children:[h.jsx("span",{className:"text-accent-green font-medium",children:"Pros: "}),h.jsx("span",{className:"text-gray-500",children:"Efficiency, standardization, deep liquidity"})]}),h.jsxs("div",{className:"text-sm mt-1",children:[h.jsx("span",{className:"text-accent-red font-medium",children:"Cons: "}),h.jsx("span",{className:"text-gray-500",children:"Concentration risk, moral hazard"})]})]}),h.jsxs("div",{className:"lesson-card border-accent-purple/30",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx(yo,{className:"w-6 h-6 text-accent-purple"}),h.jsx("h2",{className:"text-xl font-bold text-accent-purple",children:"Asia-Pacific Model"})]}),h.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"A fragmented but resilient model with multiple CCPs (JSCC, CDP, HKSCC) across jurisdictions. Provides redundancy and competition but creates cross-border complexity."}),h.jsxs("div",{className:"text-sm",children:[h.jsx("span",{className:"text-accent-green font-medium",children:"Pros: "}),h.jsx("span",{className:"text-gray-500",children:"Resilience, competition, redundancy"})]}),h.jsxs("div",{className:"text-sm mt-1",children:[h.jsx("span",{className:"text-accent-red font-medium",children:"Cons: "}),h.jsx("span",{className:"text-gray-500",children:"Fragmentation, higher costs, complexity"})]})]})]}),h.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg overflow-hidden",children:[h.jsx("div",{className:"p-4 bg-dark-700 border-b border-dark-600",children:h.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[h.jsx(yu,{className:"w-5 h-5 text-accent-cyan"}),"Detailed Comparison"]})}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"bg-dark-700",children:[h.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-gray-300",children:"Category"}),h.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-accent-blue",children:"U.S."}),h.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-accent-purple",children:"Asia-Pacific"}),h.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-gray-300",children:"Assessment"})]})}),h.jsx("tbody",{children:jk.map(s=>h.jsxs("tr",{className:"border-t border-dark-600 hover:bg-dark-700/50",children:[h.jsx("td",{className:"py-3 px-4 font-medium text-gray-300",children:s.category}),h.jsx("td",{className:"py-3 px-4 text-sm text-gray-400",children:s.us}),h.jsx("td",{className:"py-3 px-4 text-sm text-gray-400",children:s.asia}),h.jsx("td",{className:"py-3 px-4 text-sm",children:h.jsx("span",{className:`px-2 py-1 rounded text-xs ${s.winner.startsWith("US")?"bg-accent-blue/20 text-accent-blue":s.winner.startsWith("Asia")?"bg-accent-purple/20 text-accent-purple":"bg-accent-amber/20 text-accent-amber"}`,children:s.winner})})]},s.category))})]})})]}),h.jsx("div",{className:"mt-12 grid md:grid-cols-2 gap-6",children:Cn.map(s=>h.jsxs("a",{href:`/module/${s.id}`,className:"lesson-card group",children:[h.jsxs("div",{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${s.region==="US"?"bg-accent-blue/20 text-accent-blue":"bg-accent-purple/20 text-accent-purple"}`,children:[s.region," Markets"]}),h.jsx("h3",{className:"text-lg font-semibold group-hover:text-accent-cyan transition-colors mb-2",children:s.title}),h.jsx("p",{className:"text-sm text-gray-400 mb-3",children:s.description}),h.jsxs("div",{className:"text-sm text-accent-cyan",children:["Explore ",s.lessons.length," lessons →"]})]},s.id))})]})}function Pk(){const[r,a]=A.useState("setup"),[s,l]=A.useState("all"),[u,f]=A.useState([]),[m,v]=A.useState(0),[g,y]=A.useState({}),[k,w]=A.useState(!1);A.useEffect(()=>{const U=[];Cn.forEach(X=>{X.lessons.forEach(W=>{W.quiz.forEach((ue,$)=>{U.push({...ue,moduleId:X.id,moduleTitle:X.title,lessonId:W.id,lessonTitle:W.title,id:`${X.id}-${W.id}-${$}`})})})}),f(U)},[]);const O=s==="all"?u:u.filter(U=>U.moduleId===s),F=()=>{const U=[...O].sort(()=>Math.random()-.5).slice(0,10);f(U),a("quiz"),v(0),y({}),w(!1)},H=U=>{g[m]===void 0&&(y(X=>({...X,[m]:U})),w(!0))},q=()=>{m<u.length-1?(v(U=>U+1),w(!1)):a("results")},P=Object.entries(g).reduce((U,[X,W])=>U+(W===u[Number(X)].correctIndex?1:0),0);if(r==="setup")return h.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-12",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx(ay,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Knowledge Check"}),h.jsx("p",{className:"text-gray-400",children:"Test your understanding of repo markets and CCPs"})]}),h.jsxs("div",{className:"lesson-card",children:[h.jsx("label",{className:"block text-sm font-medium mb-3",children:"Select Content"}),h.jsxs("select",{value:s,onChange:U=>l(U.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg px-4 py-3 text-white mb-6",children:[h.jsxs("option",{value:"all",children:["All Modules (",u.length," questions)"]}),Cn.map(U=>{const X=u.filter(W=>W.moduleId===U.id).length;return h.jsxs("option",{value:U.id,children:[U.title," (",X," questions)"]},U.id)})]}),h.jsx("button",{onClick:F,className:"w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all",children:"Start Quiz (10 random questions)"})]})]});if(r==="results"){const U=Math.round(P/u.length*100);return h.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-12",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx(Rk,{className:`w-16 h-16 mx-auto mb-4 ${U>=80?"text-accent-green":U>=60?"text-accent-amber":"text-accent-red"}`}),h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Quiz Complete!"}),h.jsxs("p",{className:"text-4xl font-bold text-accent-cyan mb-2",children:[P,"/",u.length]}),h.jsxs("p",{className:`text-lg ${U>=80?"text-accent-green":U>=60?"text-accent-amber":"text-accent-red"}`,children:[U,"% correct"]})]}),h.jsxs("div",{className:"lesson-card mb-6",children:[h.jsx("h3",{className:"font-semibold mb-4",children:"Performance Summary"}),h.jsx("div",{className:"space-y-3",children:u.map((X,W)=>{const ue=g[W]===X.correctIndex;return h.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg ${ue?"bg-accent-green/10":"bg-accent-red/10"}`,children:[ue?h.jsx(gu,{className:"w-5 h-5 text-accent-green"}):h.jsx(Lp,{className:"w-5 h-5 text-accent-red"}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("p",{className:"text-sm truncate",children:X.question}),h.jsxs("p",{className:"text-xs text-gray-500",children:[X.moduleTitle," • ",X.lessonTitle]})]})]},W)})})]}),h.jsxs("button",{onClick:()=>a("setup"),className:"w-full py-3 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2",children:[h.jsx(kk,{className:"w-4 h-4"}),"Take Another Quiz"]})]})}const z=u[m],G=g[m]!==void 0;return h.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-8",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("span",{className:"text-sm text-gray-400",children:["Question ",m+1," of ",u.length]}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("div",{className:"w-32 h-2 bg-dark-600 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-accent-cyan transition-all",style:{width:`${(m+1)/u.length*100}%`}})})})]}),h.jsxs("div",{className:"lesson-card mb-6",children:[h.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[z.moduleTitle," • ",z.lessonTitle]}),h.jsx("h2",{className:"text-xl font-semibold mb-6",children:z.question}),h.jsx("div",{className:"space-y-3",children:z.options.map((U,X)=>{const W=g[m]===X,ue=X===z.correctIndex;let $="quiz-option";return G?ue?$+=" correct":W&&($+=" incorrect"):W&&($+=" selected"),h.jsx("button",{onClick:()=>H(X),className:$,disabled:G,children:h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"w-8 h-8 rounded-lg bg-dark-600 flex items-center justify-center font-mono text-sm",children:String.fromCharCode(65+X)}),h.jsx("span",{children:U})]})},X)})}),k&&h.jsxs("div",{className:`mt-6 p-4 rounded-lg ${g[m]===z.correctIndex?"bg-accent-green/10 border border-accent-green/30":"bg-accent-amber/10 border border-accent-amber/30"}`,children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g[m]===z.correctIndex?h.jsx(gu,{className:"w-5 h-5 text-accent-green"}):h.jsx(Lp,{className:"w-5 h-5 text-accent-red"}),h.jsx("span",{className:"font-semibold",children:g[m]===z.correctIndex?"Correct!":"Incorrect"})]}),h.jsx("p",{className:"text-sm text-gray-300",children:z.explanation})]})]}),G&&h.jsx("button",{onClick:q,className:"w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all",children:m<u.length-1?"Next Question":"See Results"})]})}const Fk=["All",...Array.from(new Set(iy.map(r=>r.category)))];function Hk(){const[r,a]=A.useState(""),[s,l]=A.useState("All"),u=iy.filter(v=>{const g=v.term.toLowerCase().includes(r.toLowerCase())||v.definition.toLowerCase().includes(r.toLowerCase()),y=s==="All"||v.category===s;return g&&y}),f=u.reduce((v,g)=>{const y=g.term[0].toUpperCase();return v[y]||(v[y]=[]),v[y].push(g),v},{}),m=Object.keys(f).sort();return h.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx(bt,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Glossary"}),h.jsx("p",{className:"text-gray-400",children:"Key terms and definitions for repo markets and CCPs"})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[h.jsxs("div",{className:"relative flex-1",children:[h.jsx(Ek,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"}),h.jsx("input",{type:"text",placeholder:"Search terms...",value:r,onChange:v=>a(v.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500"})]}),h.jsxs("div",{className:"relative sm:w-48",children:[h.jsx(gk,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"}),h.jsx("select",{value:s,onChange:v=>l(v.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white appearance-none",children:Fk.map(v=>h.jsx("option",{value:v,children:v},v))})]})]}),h.jsx("div",{className:"space-y-8",children:m.map(v=>h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-bold text-accent-cyan mb-4 sticky top-20 bg-dark-900 py-2",children:v}),h.jsx("div",{className:"space-y-4",children:f[v].map(g=>h.jsxs("div",{className:"lesson-card",children:[h.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[h.jsx("h3",{className:"text-lg font-semibold text-white",children:g.term}),h.jsx("span",{className:"text-xs px-2 py-1 bg-dark-600 rounded text-gray-400 whitespace-nowrap",children:g.category})]}),h.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:g.definition})]},g.term))})]},v))}),u.length===0&&h.jsx("div",{className:"text-center py-12 text-gray-500",children:"No terms found matching your search."})]})}const Gk={"Industry Guide":bt,"Regulatory Standard":eo,"Official Website":yo,"Academic Paper":eo,"Official Documentation":bt,"Regulatory Disclosure":eo,"Research Paper":eo,"Industry Report":bt};function Vk(){return h.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx(bt,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),h.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Sources & References"}),h.jsx("p",{className:"text-gray-400",children:"Academic papers, industry guides, and official documentation"})]}),h.jsx("div",{className:"space-y-4",children:Nk.map((r,a)=>{const s=Gk[r.type]||bt;return h.jsxs("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"lesson-card group flex items-start gap-4",children:[h.jsx("div",{className:"w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0",children:h.jsx(s,{className:"w-5 h-5 text-accent-cyan"})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-start justify-between gap-4",children:[h.jsx("h3",{className:"font-semibold group-hover:text-accent-cyan transition-colors",children:r.title}),h.jsx(Pu,{className:"w-4 h-4 text-gray-500 group-hover:text-accent-cyan transition-colors flex-shrink-0"})]}),h.jsx("p",{className:"text-sm text-gray-400 mb-2",children:r.author}),h.jsx("p",{className:"text-sm text-gray-500 mb-2",children:r.description}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("span",{className:"text-xs px-2 py-1 bg-dark-600 rounded text-gray-400",children:r.type})})]})]},a)})}),h.jsxs("div",{className:"mt-12 p-6 bg-dark-800 border border-dark-600 rounded-lg",children:[h.jsx("h3",{className:"font-semibold mb-3",children:"Additional Resources"}),h.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[h.jsx("li",{children:"• DTCC/FICC official disclosures and rulebooks"}),h.jsx("li",{children:"• BIS Committee on Payments and Market Infrastructures (CPMI) reports"}),h.jsx("li",{children:"• Federal Reserve Bank of New York repo market primers"}),h.jsx("li",{children:"• JPX/JSCC clearing documentation"}),h.jsx("li",{children:"• SGX and HKEX clearing disclosures"})]})]})]})}const Yk={id:"root",label:"Global Finance",description:"Understanding the interconnected world of financial systems, markets, and institutions",children:[{id:"money-markets",label:"Money Markets",description:"Short-term debt markets, liquidity, and funding",children:[{id:"repo",label:"Repurchase Agreements (Repo)",description:"Collateralized short-term lending",relatedLessons:["us-repo/lesson-1","asia-repo/lesson-1"],externalLinks:[{title:"ICMA Repo FAQ",url:"https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/",source:"ICMA"},{title:"Fed Tri-Party Reform",url:"https://www.newyorkfed.org/banking/tpr_infr_reform.html",source:"Federal Reserve"}]},{id:"commercial-paper",label:"Commercial Paper",description:"Short-term corporate debt instruments"},{id:"treasury-bills",label:"Treasury Bills",description:"Government short-term securities"},{id:"certificates-deposit",label:"Certificates of Deposit",description:"Bank-issued time deposits"}]},{id:"central-banking",label:"Central Banking",description:"Monetary policy, interest rates, and financial stability",children:[{id:"monetary-policy",label:"Monetary Policy",description:"Central bank actions to influence economic conditions",children:[{id:"federal-funds-rate",label:"Federal Funds Rate",description:"US overnight interbank lending rate",relatedLessons:["us-repo/lesson-7"],externalLinks:[{title:"Fed Explained: Monetary Policy",url:"https://www.federalreserve.gov/aboutthefed/fedexplained/monetary-policy.htm",source:"Federal Reserve"},{title:"St. Louis Fed: Policy Implementation",url:"https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy",source:"St. Louis Fed"}]},{id:"quantitative-easing",label:"Quantitative Easing",description:"Large-scale asset purchases by central banks"},{id:"interest-on-reserves",label:"Interest on Reserves",description:"Paying interest on bank reserves held at central bank",externalLinks:[{title:"Fed Policy Tools",url:"https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy",source:"St. Louis Fed"}]}]},{id:"central-banks",label:"Major Central Banks",description:"Key global monetary authorities",children:[{id:"federal-reserve",label:"Federal Reserve (US)",description:"US central bank"},{id:"ecb",label:"European Central Bank",description:"Eurozone monetary authority"},{id:"bank-of-england",label:"Bank of England",description:"UK central bank"},{id:"bank-of-japan",label:"Bank of Japan",description:"Japanese monetary authority"},{id:"pbc",label:"People's Bank of China",description:"Chinese central bank"}]},{id:"lender-last-resort",label:"Lender of Last Resort",description:"Central bank role in providing emergency liquidity"}]},{id:"derivatives",label:"Derivatives",description:"Financial contracts deriving value from underlying assets",children:[{id:"interest-rate-derivatives",label:"Interest Rate Derivatives",description:"Swaps, futures, options on interest rates",externalLinks:[{title:"IGC Working Paper on Derivatives",url:"https://www.theigc.org/sites/default/files/2015/02/Sundaram-2012-Working-Paper.pdf",source:"IGC"},{title:"IMF on Derivatives",url:"https://www.elibrary.imf.org/display/book/9781589062917/ch04.xml",source:"IMF"}]},{id:"fx-derivatives",label:"FX Derivatives",description:"Currency forwards, swaps, options"},{id:"credit-derivatives",label:"Credit Derivatives",description:"CDS, total return swaps, credit-linked notes"},{id:"equity-derivatives",label:"Equity Derivatives",description:"Stock options, futures, swaps"}]},{id:"ccps",label:"Central Counterparties",description:"Clearing houses that guarantee trades",children:[{id:"ccp-functions",label:"CCP Functions",description:"Novation, netting, margining, default management",externalLinks:[{title:"Clearing Houses Explained",url:"https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/",source:"Futures Trading Pedia"}]},{id:"us-ccps",label:"US CCPs",description:"DTCC, CME, ICE, OCC",relatedLessons:["us-repo/lesson-3","us-repo/lesson-4"]},{id:"asia-ccps",label:"Asia CCPs",description:"JSCC, CDP, HKSCC, KSD",relatedLessons:["asia-repo/lesson-2","asia-repo/lesson-3"]},{id:"ccp-risk",label:"CCP Risk Management",description:"Default waterfalls, stress testing, recovery/resolution",externalLinks:[{title:"BIS WP 1052: Multi-CCP Risk",url:"https://www.bis.org/publ/work1052.htm",source:"BIS"}]}]},{id:"systemic-risk",label:"Systemic Risk",description:"Risks to the entire financial system",children:[{id:"contagion",label:"Financial Contagion",description:"Transmission of distress across institutions",externalLinks:[{title:"BIS WP 597: Bank Networks",url:"https://www.bis.org/publ/work597.pdf",source:"BIS"},{title:"ECB on Contagion",url:"https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2929~19cda4a673.en.pdf",source:"ECB"},{title:"OFR on Financial Networks",url:"https://www.financialresearch.gov/working-papers/files/OFRwp-2015-21_Contagion-in-Financial-Networks.pdf",source:"OFR"}]},{id:"financial-crises",label:"Financial Crises",description:"Historical crisis patterns and lessons",children:[{id:"2008-crisis",label:"2008 Global Financial Crisis",description:"Housing bubble, Lehman, repo market seize"},{id:"covid-crisis",label:"2020 COVID Crisis",description:"Flight to quality, central bank intervention"},{id:"asian-crisis",label:"1997 Asian Financial Crisis",description:"Currency attacks, IMF interventions"}]},{id:"too-big-fail",label:"Too Big to Fail",description:"Systemically important institutions",externalLinks:[{title:"IMF on CCP Resolution",url:"https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf",source:"IMF"}]}]},{id:"global-finance",label:"Global Finance",description:"International capital flows and exchange",children:[{id:"capital-flows",label:"International Capital Flows",description:"Cross-border investment and financing",externalLinks:[{title:"EconLib: International Capital Flows",url:"https://www.econlib.org/library/Enc/InternationalCapitalFlows.html",source:"EconLib"},{title:"Fed on Capital Flows",url:"https://www.federalreserve.gov/econres/notes/feds-notes/globalization-and-the-geography-of-capital-flows-20190906.html",source:"Federal Reserve"}]},{id:"balance-payments",label:"Balance of Payments",description:"Record of all economic transactions between countries",externalLinks:[{title:"Financial Edge: BoP Guide",url:"https://www.fe.training/free-resources/financial-markets/global-economics-balance-of-payments/",source:"Financial Edge"}]},{id:"exchange-rates",label:"Exchange Rates",description:"FX markets and currency valuation"},{id:"sovereign-debt",label:"Sovereign Debt",description:"Government borrowing and debt management"}]},{id:"regulation",label:"Financial Regulation",description:"Rules governing financial institutions and markets",children:[{id:"pfmi",label:"PFMI Standards",description:"Principles for Financial Market Infrastructures",externalLinks:[{title:"CPMI-IOSCO PFMI",url:"https://www.bis.org/cpmi/publ/d101.htm",source:"BIS"}]},{id:"dodd-frank",label:"Dodd-Frank Act",description:"US financial reform legislation"},{id:"basel-iii",label:"Basel III",description:"Global banking capital standards"},{id:"emir",label:"EMIR",description:"EU derivatives regulation"}]}]};function ry({node:r,depth:a=0,onNodeClick:s}){const[l,u]=A.useState(a<1),f=r.children&&r.children.length>0;return h.jsxs("div",{className:"mb-2",children:[h.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all hover:bg-dark-700 ${a===0?"bg-dark-800 border border-dark-600":""}`,style:{marginLeft:`${a*16}px`},onClick:()=>{f&&u(!l),s==null||s(r)},children:[f?l?h.jsx(fk,{className:"w-4 h-4 text-gray-400"}):h.jsx(hk,{className:"w-4 h-4 text-gray-400"}):h.jsx(jp,{className:"w-4 h-4 text-gray-600"}),r.completed?h.jsx(mk,{className:"w-4 h-4 text-green-500"}):h.jsx(jp,{className:"w-4 h-4 text-gray-600"}),h.jsx("span",{className:`font-medium ${a===0?"text-white":a===1?"text-accent-cyan":"text-gray-300"}`,children:r.label}),r.relatedLessons&&r.relatedLessons.length>0&&h.jsx(bt,{className:"w-4 h-4 text-accent-blue ml-auto",title:"Related lessons available"})]}),r.description&&l&&h.jsx("div",{className:"ml-6 mt-1 mb-2 text-sm text-gray-400",style:{marginLeft:`${(a+1)*16}px`},children:r.description}),r.externalLinks&&l&&r.externalLinks.length>0&&h.jsx("div",{className:"ml-6 mb-2 space-y-1",style:{marginLeft:`${(a+1)*16}px`},children:r.externalLinks.map((m,v)=>h.jsxs("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-accent-cyan hover:text-white transition-colors",children:[h.jsx(Pu,{className:"w-3 h-3"}),h.jsx("span",{children:m.title}),h.jsxs("span",{className:"text-xs text-gray-500",children:["(",m.source,")"]})]},v))}),l&&f&&h.jsx("div",{className:"mt-1",children:r.children.map(m=>h.jsx(ry,{node:m,depth:a+1,onNodeClick:s},m.id))})]})}function Kk(){const[r,a]=A.useState(null);return h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-12",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-3xl font-bold mb-4 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent",children:"Finance Concept Hierarchy"}),h.jsx("p",{className:"text-gray-400 max-w-2xl",children:"Explore the interconnected world of finance. Click on concepts to expand their hierarchy, discover related lessons, and access curated external resources."})]}),h.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[h.jsx("div",{className:"lg:col-span-2",children:h.jsx("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6",children:h.jsx(ry,{node:Yk,onNodeClick:a})})}),h.jsxs("div",{className:"lg:col-span-1",children:[r&&h.jsxs("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20",children:[h.jsx("h2",{className:"text-xl font-semibold mb-4 text-white",children:r.label}),r.description&&h.jsx("p",{className:"text-gray-400 mb-4",children:r.description}),r.externalLinks&&r.externalLinks.length>0&&h.jsxs("div",{className:"mb-4",children:[h.jsx("h3",{className:"text-sm font-semibold text-accent-cyan mb-3",children:"External Resources"}),h.jsx("div",{className:"space-y-2",children:r.externalLinks.map((s,l)=>h.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"block p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx(Pu,{className:"w-4 h-4 text-accent-cyan"}),h.jsx("span",{className:"font-medium text-sm text-white",children:s.title})]}),h.jsxs("span",{className:"text-xs text-gray-500",children:["Source: ",s.source]})]},l))})]}),r.relatedLessons&&r.relatedLessons.length>0&&h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-semibold text-accent-cyan mb-3",children:"Related Lessons"}),h.jsx("div",{className:"space-y-2",children:r.relatedLessons.map((s,l)=>h.jsx("div",{className:"p-3 bg-dark-700 rounded-lg",children:h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(bt,{className:"w-4 h-4 text-accent-blue"}),h.jsx("span",{className:"text-sm text-gray-300",children:s})]})},l))})]})]}),!r&&h.jsx("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20",children:h.jsx("p",{className:"text-gray-400 text-sm",children:"Click on a concept in the tree to see its details, external resources, and related lessons."})})]})]})]})}function wa({children:r}){const{user:a,loading:s}=ty();return s?h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-dark-900",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"}),h.jsx("p",{className:"text-gray-400",children:"Loading..."})]})}):a?h.jsx(h.Fragment,{children:r}):h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-dark-900",children:h.jsxs("div",{className:"text-center max-w-md px-4",children:[h.jsx("div",{className:"w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4",children:h.jsx(bk,{className:"w-8 h-8 text-accent-cyan"})}),h.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Sign In Required"}),h.jsx("p",{className:"text-gray-400 mb-6",children:"Please sign in with your Google account to access this content."}),h.jsx(U0,{to:"/",replace:!0})]})})}function Xk(){return h.jsx(j0,{children:h.jsxs(Xt,{path:"/",element:h.jsx(_k,{}),children:[h.jsx(Xt,{index:!0,element:h.jsx(Ok,{})}),h.jsx(Xt,{path:"module/:moduleId",element:h.jsx(wa,{children:h.jsx(Lk,{})})}),h.jsx(Xt,{path:"lesson/:moduleId/:lessonId",element:h.jsx(wa,{children:h.jsx(zk,{})})}),h.jsx(Xt,{path:"compare",element:h.jsx(wa,{children:h.jsx(qk,{})})}),h.jsx(Xt,{path:"quiz",element:h.jsx(wa,{children:h.jsx(Pk,{})})}),h.jsx(Xt,{path:"glossary",element:h.jsx(wa,{children:h.jsx(Hk,{})})}),h.jsx(Xt,{path:"sources",element:h.jsx(wa,{children:h.jsx(Vk,{})})}),h.jsx(Xt,{path:"concepts",element:h.jsx(wa,{children:h.jsx(Kk,{})})})]})})}Lb.createRoot(document.getElementById("root")).render(h.jsx(A.StrictMode,{children:h.jsx(cC,{children:h.jsx(sk,{children:h.jsx(Xk,{})})})}));
