(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function s(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(u){if(u.ep)return;u.ep=!0;const h=s(u);fetch(u.href,h)}})();var Xc={exports:{}},xr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function jv(){if(Km)return xr;Km=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(l,u,h){var m=null;if(h!==void 0&&(m=""+h),u.key!==void 0&&(m=""+u.key),"key"in u){h={};for(var b in u)b!=="key"&&(h[b]=u[b])}else h=u;return u=h.ref,{$$typeof:r,type:l,key:m,ref:u!==void 0?u:null,props:h}}return xr.Fragment=n,xr.jsx=s,xr.jsxs=s,xr}var Xm;function qv(){return Xm||(Xm=1,Xc.exports=jv()),Xc.exports}var d=qv(),Qc={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function zv(){if(Qm)return ae;Qm=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),P=Symbol.iterator;function F(w){return w===null||typeof w!="object"?null:(w=P&&w[P]||w["@@iterator"],typeof w=="function"?w:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,U={};function B(w,O,q){this.props=w,this.context=O,this.refs=U,this.updater=q||H}B.prototype.isReactComponent={},B.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},B.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function Q(){}Q.prototype=B.prototype;function L(w,O,q){this.props=w,this.context=O,this.refs=U,this.updater=q||H}var X=L.prototype=new Q;X.constructor=L,z(X,B.prototype),X.isPureReactComponent=!0;var G=Array.isArray;function te(){}var Y={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Ge(w,O,q){var W=q.ref;return{$$typeof:r,type:w,key:O,ref:W!==void 0?W:null,props:q}}function ft(w,O){return Ge(w.type,O,w.props)}function nt(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function Oe(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(q){return O[q]})}var $t=/\/+/g;function St(w,O){return typeof w=="object"&&w!==null&&w.key!=null?Oe(""+w.key):O.toString(36)}function qe(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(te,te):(w.status="pending",w.then(function(O){w.status==="pending"&&(w.status="fulfilled",w.value=O)},function(O){w.status==="pending"&&(w.status="rejected",w.reason=O)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function M(w,O,q,W,ne){var oe=typeof w;(oe==="undefined"||oe==="boolean")&&(w=null);var ge=!1;if(w===null)ge=!0;else switch(oe){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(w.$$typeof){case r:case n:ge=!0;break;case S:return ge=w._init,M(ge(w._payload),O,q,W,ne)}}if(ge)return ne=ne(w),ge=W===""?"."+St(w,0):W,G(ne)?(q="",ge!=null&&(q=ge.replace($t,"$&/")+"/"),M(ne,O,q,"",function(Ri){return Ri})):ne!=null&&(nt(ne)&&(ne=ft(ne,q+(ne.key==null||w&&w.key===ne.key?"":(""+ne.key).replace($t,"$&/")+"/")+ge)),O.push(ne)),1;ge=0;var et=W===""?".":W+":";if(G(w))for(var Be=0;Be<w.length;Be++)W=w[Be],oe=et+St(W,Be),ge+=M(W,O,q,oe,ne);else if(Be=F(w),typeof Be=="function")for(w=Be.call(w),Be=0;!(W=w.next()).done;)W=W.value,oe=et+St(W,Be++),ge+=M(W,O,q,oe,ne);else if(oe==="object"){if(typeof w.then=="function")return M(qe(w),O,q,W,ne);throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ge}function j(w,O,q){if(w==null)return w;var W=[],ne=0;return M(w,W,"","",function(oe){return O.call(q,oe,ne++)}),W}function Z(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(q){(w._status===0||w._status===-1)&&(w._status=1,w._result=q)},function(q){(w._status===0||w._status===-1)&&(w._status=2,w._result=q)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var ve=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},Se={map:j,forEach:function(w,O,q){j(w,function(){O.apply(this,arguments)},q)},count:function(w){var O=0;return j(w,function(){O++}),O},toArray:function(w){return j(w,function(O){return O})||[]},only:function(w){if(!nt(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ae.Activity=C,ae.Children=Se,ae.Component=B,ae.Fragment=s,ae.Profiler=u,ae.PureComponent=L,ae.StrictMode=l,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,ae.__COMPILER_RUNTIME={__proto__:null,c:function(w){return Y.H.useMemoCache(w)}},ae.cache=function(w){return function(){return w.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(w,O,q){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var W=z({},w.props),ne=w.key;if(O!=null)for(oe in O.key!==void 0&&(ne=""+O.key),O)!ke.call(O,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&O.ref===void 0||(W[oe]=O[oe]);var oe=arguments.length-2;if(oe===1)W.children=q;else if(1<oe){for(var ge=Array(oe),et=0;et<oe;et++)ge[et]=arguments[et+2];W.children=ge}return Ge(w.type,ne,W)},ae.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},ae.createElement=function(w,O,q){var W,ne={},oe=null;if(O!=null)for(W in O.key!==void 0&&(oe=""+O.key),O)ke.call(O,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ne[W]=O[W]);var ge=arguments.length-2;if(ge===1)ne.children=q;else if(1<ge){for(var et=Array(ge),Be=0;Be<ge;Be++)et[Be]=arguments[Be+2];ne.children=et}if(w&&w.defaultProps)for(W in ge=w.defaultProps,ge)ne[W]===void 0&&(ne[W]=ge[W]);return Ge(w,oe,ne)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(w){return{$$typeof:b,render:w}},ae.isValidElement=nt,ae.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:Z}},ae.memo=function(w,O){return{$$typeof:g,type:w,compare:O===void 0?null:O}},ae.startTransition=function(w){var O=Y.T,q={};Y.T=q;try{var W=w(),ne=Y.S;ne!==null&&ne(q,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(te,ve)}catch(oe){ve(oe)}finally{O!==null&&q.types!==null&&(O.types=q.types),Y.T=O}},ae.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},ae.use=function(w){return Y.H.use(w)},ae.useActionState=function(w,O,q){return Y.H.useActionState(w,O,q)},ae.useCallback=function(w,O){return Y.H.useCallback(w,O)},ae.useContext=function(w){return Y.H.useContext(w)},ae.useDebugValue=function(){},ae.useDeferredValue=function(w,O){return Y.H.useDeferredValue(w,O)},ae.useEffect=function(w,O){return Y.H.useEffect(w,O)},ae.useEffectEvent=function(w){return Y.H.useEffectEvent(w)},ae.useId=function(){return Y.H.useId()},ae.useImperativeHandle=function(w,O,q){return Y.H.useImperativeHandle(w,O,q)},ae.useInsertionEffect=function(w,O){return Y.H.useInsertionEffect(w,O)},ae.useLayoutEffect=function(w,O){return Y.H.useLayoutEffect(w,O)},ae.useMemo=function(w,O){return Y.H.useMemo(w,O)},ae.useOptimistic=function(w,O){return Y.H.useOptimistic(w,O)},ae.useReducer=function(w,O,q){return Y.H.useReducer(w,O,q)},ae.useRef=function(w){return Y.H.useRef(w)},ae.useState=function(w){return Y.H.useState(w)},ae.useSyncExternalStore=function(w,O,q){return Y.H.useSyncExternalStore(w,O,q)},ae.useTransition=function(){return Y.H.useTransition()},ae.version="19.2.5",ae}var Jm;function Tu(){return Jm||(Jm=1,Qc.exports=zv()),Qc.exports}var R=Tu(),Jc={exports:{}},wr={},Zc={exports:{}},eu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function Uv(){return Zm||(Zm=1,(function(r){function n(M,j){var Z=M.length;M.push(j);e:for(;0<Z;){var ve=Z-1>>>1,Se=M[ve];if(0<u(Se,j))M[ve]=j,M[Z]=Se,Z=ve;else break e}}function s(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var j=M[0],Z=M.pop();if(Z!==j){M[0]=Z;e:for(var ve=0,Se=M.length,w=Se>>>1;ve<w;){var O=2*(ve+1)-1,q=M[O],W=O+1,ne=M[W];if(0>u(q,Z))W<Se&&0>u(ne,q)?(M[ve]=ne,M[W]=Z,ve=W):(M[ve]=q,M[O]=Z,ve=O);else if(W<Se&&0>u(ne,Z))M[ve]=ne,M[W]=Z,ve=W;else break e}}return j}function u(M,j){var Z=M.sortIndex-j.sortIndex;return Z!==0?Z:M.id-j.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var m=Date,b=m.now();r.unstable_now=function(){return m.now()-b}}var y=[],g=[],S=1,C=null,P=3,F=!1,H=!1,z=!1,U=!1,B=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function X(M){for(var j=s(g);j!==null;){if(j.callback===null)l(g);else if(j.startTime<=M)l(g),j.sortIndex=j.expirationTime,n(y,j);else break;j=s(g)}}function G(M){if(z=!1,X(M),!H)if(s(y)!==null)H=!0,te||(te=!0,Oe());else{var j=s(g);j!==null&&qe(G,j.startTime-M)}}var te=!1,Y=-1,ke=5,Ge=-1;function ft(){return U?!0:!(r.unstable_now()-Ge<ke)}function nt(){if(U=!1,te){var M=r.unstable_now();Ge=M;var j=!0;try{e:{H=!1,z&&(z=!1,Q(Y),Y=-1),F=!0;var Z=P;try{t:{for(X(M),C=s(y);C!==null&&!(C.expirationTime>M&&ft());){var ve=C.callback;if(typeof ve=="function"){C.callback=null,P=C.priorityLevel;var Se=ve(C.expirationTime<=M);if(M=r.unstable_now(),typeof Se=="function"){C.callback=Se,X(M),j=!0;break t}C===s(y)&&l(y),X(M)}else l(y);C=s(y)}if(C!==null)j=!0;else{var w=s(g);w!==null&&qe(G,w.startTime-M),j=!1}}break e}finally{C=null,P=Z,F=!1}j=void 0}}finally{j?Oe():te=!1}}}var Oe;if(typeof L=="function")Oe=function(){L(nt)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,St=$t.port2;$t.port1.onmessage=nt,Oe=function(){St.postMessage(null)}}else Oe=function(){B(nt,0)};function qe(M,j){Y=B(function(){M(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_next=function(M){switch(P){case 1:case 2:case 3:var j=3;break;default:j=P}var Z=P;P=j;try{return M()}finally{P=Z}},r.unstable_requestPaint=function(){U=!0},r.unstable_runWithPriority=function(M,j){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=P;P=M;try{return j()}finally{P=Z}},r.unstable_scheduleCallback=function(M,j,Z){var ve=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,M){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,M={id:S++,callback:j,priorityLevel:M,startTime:Z,expirationTime:Se,sortIndex:-1},Z>ve?(M.sortIndex=Z,n(g,M),s(y)===null&&M===s(g)&&(z?(Q(Y),Y=-1):z=!0,qe(G,Z-ve))):(M.sortIndex=Se,n(y,M),H||F||(H=!0,te||(te=!0,Oe()))),M},r.unstable_shouldYield=ft,r.unstable_wrapCallback=function(M){var j=P;return function(){var Z=P;P=j;try{return M.apply(this,arguments)}finally{P=Z}}}})(eu)),eu}var ep;function Fv(){return ep||(ep=1,Zc.exports=Uv()),Zc.exports}var tu={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Hv(){if(tp)return Ze;tp=1;var r=Tu();function n(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(n(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(y,g,S){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:C==null?null:""+C,children:y,containerInfo:g,implementation:S}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Ze.createPortal=function(y,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return h(y,g,null,S)},Ze.flushSync=function(y){var g=m.T,S=l.p;try{if(m.T=null,l.p=2,y)return y()}finally{m.T=g,l.p=S,l.d.f()}},Ze.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(y,g))},Ze.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},Ze.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var S=g.as,C=b(S,g.crossOrigin),P=typeof g.integrity=="string"?g.integrity:void 0,F=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?l.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:P,fetchPriority:F}):S==="script"&&l.d.X(y,{crossOrigin:C,integrity:P,fetchPriority:F,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ze.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=b(g.as,g.crossOrigin);l.d.M(y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(y)},Ze.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,C=b(S,g.crossOrigin);l.d.L(y,S,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ze.preloadModule=function(y,g){if(typeof y=="string")if(g){var S=b(g.as,g.crossOrigin);l.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(y)},Ze.requestFormReset=function(y){l.d.r(y)},Ze.unstable_batchedUpdates=function(y,g){return y(g)},Ze.useFormState=function(y,g,S){return m.H.useFormState(y,g,S)},Ze.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ze.version="19.2.5",Ze}var ap;function Gv(){if(ap)return tu.exports;ap=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),tu.exports=Hv(),tu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Vv(){if(np)return wr;np=1;var r=Fv(),n=Tu(),s=Gv();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(l(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,i=t;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){a=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return y(o),e;if(c===i)return y(o),t;c=c.sibling}throw Error(l(188))}if(a.return!==i.return)a=o,i=c;else{for(var f=!1,p=o.child;p;){if(p===a){f=!0,a=o,i=c;break}if(p===i){f=!0,i=o,a=c;break}p=p.sibling}if(!f){for(p=c.child;p;){if(p===a){f=!0,a=c,i=o;break}if(p===i){f=!0,i=c,a=o;break}p=p.sibling}if(!f)throw Error(l(189))}}if(a.alternate!==i)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,P=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),L=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Ge=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function Oe(e){return e===null||typeof e!="object"?null:(e=nt&&e[nt]||e["@@iterator"],typeof e=="function"?e:null)}var $t=Symbol.for("react.client.reference");function St(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case B:return"Profiler";case U:return"StrictMode";case G:return"Suspense";case te:return"SuspenseList";case Ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case L:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:St(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return St(e(t))}catch{}}return null}var qe=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ve=[],Se=-1;function w(e){return{current:e}}function O(e){0>Se||(e.current=ve[Se],ve[Se]=null,Se--)}function q(e,t){Se++,ve[Se]=e.current,e.current=t}var W=w(null),ne=w(null),oe=w(null),ge=w(null);function et(e,t){switch(q(oe,t),q(ne,e),q(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bm(t),e=vm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(W),q(W,e)}function Be(){O(W),O(ne),O(oe)}function Ri(e){e.memoizedState!==null&&q(ge,e);var t=W.current,a=vm(t,e.type);t!==a&&(q(ne,e),q(W,a))}function qr(e){ne.current===e&&(O(W),O(ne)),ge.current===e&&(O(ge),gr._currentValue=Z)}var No,$u;function sn(e){if(No===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);No=t&&t[1]||"",$u=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+No+e+$u}var _o=!1;function Po(e,t){if(!e||_o)return"";_o=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(D){var A=D}Reflect.construct(e,[],_)}else{try{_.call()}catch(D){A=D}e.call(_.prototype)}}else{try{throw Error()}catch(D){A=D}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(D){if(D&&A&&typeof D.stack=="string")return[D.stack,A.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),f=c[0],p=c[1];if(f&&p){var v=f.split(`
`),E=p.split(`
`);for(o=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;o<E.length&&!E[o].includes("DetermineComponentFrameRoot");)o++;if(i===v.length||o===E.length)for(i=v.length-1,o=E.length-1;1<=i&&0<=o&&v[i]!==E[o];)o--;for(;1<=i&&0<=o;i--,o--)if(v[i]!==E[o]){if(i!==1||o!==1)do if(i--,o--,0>o||v[i]!==E[o]){var I=`
`+v[i].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=i&&0<=o);break}}}finally{_o=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?sn(a):""}function py(e,t){switch(e.tag){case 26:case 27:case 5:return sn(e.type);case 16:return sn("Lazy");case 13:return e.child!==t&&t!==null?sn("Suspense Fallback"):sn("Suspense");case 19:return sn("SuspenseList");case 0:case 15:return Po(e.type,!1);case 11:return Po(e.type.render,!1);case 1:return Po(e.type,!0);case 31:return sn("Activity");default:return""}}function Yu(e){try{var t="",a=null;do t+=py(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Oo=Object.prototype.hasOwnProperty,Bo=r.unstable_scheduleCallback,Lo=r.unstable_cancelCallback,gy=r.unstable_shouldYield,yy=r.unstable_requestPaint,ht=r.unstable_now,by=r.unstable_getCurrentPriorityLevel,Ku=r.unstable_ImmediatePriority,Xu=r.unstable_UserBlockingPriority,zr=r.unstable_NormalPriority,vy=r.unstable_LowPriority,Qu=r.unstable_IdlePriority,xy=r.log,wy=r.unstable_setDisableYieldValue,Ai=null,mt=null;function Ta(e){if(typeof xy=="function"&&wy(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Ai,e)}catch{}}var pt=Math.clz32?Math.clz32:Sy,Cy=Math.log,ky=Math.LN2;function Sy(e){return e>>>=0,e===0?32:31-(Cy(e)/ky|0)|0}var Ur=256,Fr=262144,Hr=4194304;function on(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gr(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=i&134217727;return p!==0?(i=p&~c,i!==0?o=on(i):(f&=p,f!==0?o=on(f):a||(a=p&~e,a!==0&&(o=on(a))))):(p=i&~c,p!==0?o=on(p):f!==0?o=on(f):a||(a=i&~e,a!==0&&(o=on(a)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:o}function Di(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ty(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ju(){var e=Hr;return Hr<<=1,(Hr&62914560)===0&&(Hr=4194304),e}function jo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ii(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ey(e,t,a,i,o,c){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,v=e.expirationTimes,E=e.hiddenUpdates;for(a=f&~a;0<a;){var I=31-pt(a),_=1<<I;p[I]=0,v[I]=-1;var A=E[I];if(A!==null)for(E[I]=null,I=0;I<A.length;I++){var D=A[I];D!==null&&(D.lane&=-536870913)}a&=~_}i!==0&&Zu(e,i,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~t))}function Zu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-pt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ed(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-pt(a),o=1<<i;o&t|e[i]&t&&(e[i]|=t),a&=~o}}function td(e,t){var a=t&-t;return a=(a&42)!==0?1:qo(a),(a&(e.suspendedLanes|t))!==0?0:a}function qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ad(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Fm(e.type))}function nd(e,t){var a=j.p;try{return j.p=e,t()}finally{j.p=a}}var Ea=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Ea,it="__reactProps$"+Ea,In="__reactContainer$"+Ea,Uo="__reactEvents$"+Ea,Ry="__reactListeners$"+Ea,Ay="__reactHandles$"+Ea,id="__reactResources$"+Ea,Mi="__reactMarker$"+Ea;function Fo(e){delete e[Ye],delete e[it],delete e[Uo],delete e[Ry],delete e[Ay]}function Mn(e){var t=e[Ye];if(t)return t;for(var a=e.parentNode;a;){if(t=a[In]||a[Ye]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Em(e);e!==null;){if(a=e[Ye])return a;e=Em(e)}return t}e=a,a=e.parentNode}return null}function Nn(e){if(e=e[Ye]||e[In]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function _n(e){var t=e[id];return t||(t=e[id]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Mi]=!0}var rd=new Set,sd={};function ln(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(sd[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var Dy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),od={},ld={};function Iy(e){return Oo.call(ld,e)?!0:Oo.call(od,e)?!1:Dy.test(e)?ld[e]=!0:(od[e]=!0,!1)}function Vr(e,t,a){if(Iy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Wr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ta(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function My(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(f){a=""+f,c.call(this,f)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ho(e){if(!e._valueTracker){var t=cd(e)?"checked":"value";e._valueTracker=My(e,t,""+e[t])}}function ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=cd(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ny=/[\n"\\]/g;function Et(e){return e.replace(Ny,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Go(e,t,a,i,o,c,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Vo(e,f,Tt(t)):a!=null?Vo(e,f,Tt(a)):i!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Tt(p):e.removeAttribute("name")}function dd(e,t,a,i,o,c,f,p){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ho(e);return}a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=p?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Ho(e)}function Vo(e,t,a){t==="number"&&$r(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function On(e,t,a,i){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fd(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function hd(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(l(92));if(qe(i)){if(1<i.length)throw Error(l(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ho(e)}function Bn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function md(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||_y.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function pd(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in t)i=t[o],t.hasOwnProperty(o)&&a[o]!==i&&md(e,o,i)}else for(var c in t)t.hasOwnProperty(c)&&md(e,c,t[c])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yr(e){return Oy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var $o=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ln=null,jn=null;function gd(e){var t=Nn(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Go(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var o=i[it]||null;if(!o)throw Error(l(90));Go(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&ud(i)}break e;case"textarea":fd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&On(e,!!a.multiple,t,!1)}}}var Ko=!1;function yd(e,t,a){if(Ko)return e(t,a);Ko=!0;try{var i=e(t);return i}finally{if(Ko=!1,(Ln!==null||jn!==null)&&(Os(),Ln&&(t=Ln,e=jn,jn=Ln=null,gd(t),e)))for(t=0;t<e.length;t++)gd(e[t])}}function _i(e,t){var a=e.stateNode;if(a===null)return null;var i=a[it]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=!1;if(na)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Xo=!1}var Ra=null,Qo=null,Kr=null;function bd(){if(Kr)return Kr;var e,t=Qo,a=t.length,i,o="value"in Ra?Ra.value:Ra.textContent,c=o.length;for(e=0;e<a&&t[e]===o[e];e++);var f=a-e;for(i=1;i<=f&&t[a-i]===o[c-i];i++);return Kr=o.slice(e,1<i?1-i:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function vd(){return!1}function rt(e){function t(a,i,o,c,f){this._reactName=a,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(c):c[p]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Qr:vd,this.isPropagationStopped=vd,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jr=rt(cn),Oi=C({},cn,{view:0,detail:0}),By=rt(Oi),Jo,Zo,Bi,Zr=C({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bi&&(Bi&&e.type==="mousemove"?(Jo=e.screenX-Bi.screenX,Zo=e.screenY-Bi.screenY):Zo=Jo=0,Bi=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),xd=rt(Zr),Ly=C({},Zr,{dataTransfer:0}),jy=rt(Ly),qy=C({},Oi,{relatedTarget:0}),el=rt(qy),zy=C({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=rt(zy),Fy=C({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hy=rt(Fy),Gy=C({},cn,{data:0}),wd=rt(Gy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$y[e])?!!t[e]:!1}function tl(){return Yy}var Ky=C({},Oi,{key:function(e){if(e.key){var t=Vy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xy=rt(Ky),Qy=C({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=rt(Qy),Jy=C({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Zy=rt(Jy),eb=C({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tb=rt(eb),ab=C({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nb=rt(ab),ib=C({},cn,{newState:0,oldState:0}),rb=rt(ib),sb=[9,13,27,32],al=na&&"CompositionEvent"in window,Li=null;na&&"documentMode"in document&&(Li=document.documentMode);var ob=na&&"TextEvent"in window&&!Li,kd=na&&(!al||Li&&8<Li&&11>=Li),Sd=" ",Td=!1;function Ed(e,t){switch(e){case"keyup":return sb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function lb(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(Td=!0,Sd);case"textInput":return e=t.data,e===Sd&&Td?null:e;default:return null}}function cb(e,t){if(qn)return e==="compositionend"||!al&&Ed(e,t)?(e=bd(),Kr=Qo=Ra=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ub[e.type]:t==="textarea"}function Dd(e,t,a,i){Ln?jn?jn.push(i):jn=[i]:Ln=i,t=Fs(t,"onChange"),0<t.length&&(a=new Jr("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var ji=null,qi=null;function db(e){fm(e,0)}function es(e){var t=Ni(e);if(ud(t))return e}function Id(e,t){if(e==="change")return t}var Md=!1;if(na){var nl;if(na){var il="oninput"in document;if(!il){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),il=typeof Nd.oninput=="function"}nl=il}else nl=!1;Md=nl&&(!document.documentMode||9<document.documentMode)}function _d(){ji&&(ji.detachEvent("onpropertychange",Pd),qi=ji=null)}function Pd(e){if(e.propertyName==="value"&&es(qi)){var t=[];Dd(t,qi,e,Yo(e)),yd(db,t)}}function fb(e,t,a){e==="focusin"?(_d(),ji=t,qi=a,ji.attachEvent("onpropertychange",Pd)):e==="focusout"&&_d()}function hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(qi)}function mb(e,t){if(e==="click")return es(t)}function pb(e,t){if(e==="input"||e==="change")return es(t)}function gb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:gb;function zi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var o=a[i];if(!Oo.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bd(e,t){var a=Od(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Od(a)}}function Ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$r(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$r(e.document)}return t}function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yb=na&&"documentMode"in document&&11>=document.documentMode,zn=null,sl=null,Ui=null,ol=!1;function qd(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ol||zn==null||zn!==$r(i)||(i=zn,"selectionStart"in i&&rl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ui&&zi(Ui,i)||(Ui=i,i=Fs(sl,"onSelect"),0<i.length&&(t=new Jr("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=zn)))}function un(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Un={animationend:un("Animation","AnimationEnd"),animationiteration:un("Animation","AnimationIteration"),animationstart:un("Animation","AnimationStart"),transitionrun:un("Transition","TransitionRun"),transitionstart:un("Transition","TransitionStart"),transitioncancel:un("Transition","TransitionCancel"),transitionend:un("Transition","TransitionEnd")},ll={},zd={};na&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function dn(e){if(ll[e])return ll[e];if(!Un[e])return e;var t=Un[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zd)return ll[e]=t[a];return e}var Ud=dn("animationend"),Fd=dn("animationiteration"),Hd=dn("animationstart"),bb=dn("transitionrun"),vb=dn("transitionstart"),xb=dn("transitioncancel"),Gd=dn("transitionend"),Vd=new Map,cl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cl.push("scrollEnd");function jt(e,t){Vd.set(e,t),ln(t,[e])}var ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],Fn=0,ul=0;function as(){for(var e=Fn,t=ul=Fn=0;t<e;){var a=Rt[t];Rt[t++]=null;var i=Rt[t];Rt[t++]=null;var o=Rt[t];Rt[t++]=null;var c=Rt[t];if(Rt[t++]=null,i!==null&&o!==null){var f=i.pending;f===null?o.next=o:(o.next=f.next,f.next=o),i.pending=o}c!==0&&Wd(a,o,c)}}function ns(e,t,a,i){Rt[Fn++]=e,Rt[Fn++]=t,Rt[Fn++]=a,Rt[Fn++]=i,ul|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dl(e,t,a,i){return ns(e,t,a,i),is(e)}function fn(e,t){return ns(e,null,null,t),is(e)}function Wd(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var o=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-pt(a),e=c.hiddenUpdates,i=e[o],i===null?e[o]=[t]:i.push(t),t.lane=a|536870912),c):null}function is(e){if(50<cr)throw cr=0,xc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hn={};function wb(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,a,i){return new wb(e,t,a,i)}function fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,t){var a=e.alternate;return a===null?(a=yt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $d(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rs(e,t,a,i,o,c){var f=0;if(i=e,typeof e=="function")fl(e)&&(f=1);else if(typeof e=="string")f=Ev(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ge:return e=yt(31,a,t,o),e.elementType=Ge,e.lanes=c,e;case z:return hn(a.children,o,c,t);case U:f=8,o|=24;break;case B:return e=yt(12,a,t,o|2),e.elementType=B,e.lanes=c,e;case G:return e=yt(13,a,t,o),e.elementType=G,e.lanes=c,e;case te:return e=yt(19,a,t,o),e.elementType=te,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:f=10;break e;case Q:f=9;break e;case X:f=11;break e;case Y:f=14;break e;case ke:f=16,i=null;break e}f=29,a=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=yt(f,a,t,o),t.elementType=e,t.type=i,t.lanes=c,t}function hn(e,t,a,i){return e=yt(7,e,i,t),e.lanes=a,e}function hl(e,t,a){return e=yt(6,e,null,t),e.lanes=a,e}function Yd(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function ml(e,t,a){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kd=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var a=Kd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Yu(t)},Kd.set(e,t),t)}return{value:e,source:t,stack:Yu(t)}}var Gn=[],Vn=0,ss=null,Fi=0,Dt=[],It=0,Aa=null,Yt=1,Kt="";function ra(e,t){Gn[Vn++]=Fi,Gn[Vn++]=ss,ss=e,Fi=t}function Xd(e,t,a){Dt[It++]=Yt,Dt[It++]=Kt,Dt[It++]=Aa,Aa=e;var i=Yt;e=Kt;var o=32-pt(i)-1;i&=~(1<<o),a+=1;var c=32-pt(t)+o;if(30<c){var f=o-o%5;c=(i&(1<<f)-1).toString(32),i>>=f,o-=f,Yt=1<<32-pt(t)+o|a<<o|i,Kt=c+e}else Yt=1<<c|a<<o|i,Kt=e}function pl(e){e.return!==null&&(ra(e,1),Xd(e,1,0))}function gl(e){for(;e===ss;)ss=Gn[--Vn],Gn[Vn]=null,Fi=Gn[--Vn],Gn[Vn]=null;for(;e===Aa;)Aa=Dt[--It],Dt[It]=null,Kt=Dt[--It],Dt[It]=null,Yt=Dt[--It],Dt[It]=null}function Qd(e,t){Dt[It++]=Yt,Dt[It++]=Kt,Dt[It++]=Aa,Yt=t.id,Kt=t.overflow,Aa=e}var Ke=null,Re=null,fe=!1,Da=null,Mt=!1,yl=Error(l(519));function Ia(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hi(At(t,e)),yl}function Jd(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Ye]=e,t[it]=i,a){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(a=0;a<dr.length;a++)ce(dr[a],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),dd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),hd(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||gm(t.textContent,a)?(i.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),i.onScroll!=null&&ce("scroll",t),i.onScrollEnd!=null&&ce("scrollend",t),i.onClick!=null&&(t.onclick=aa),t=!0):t=!1,t||Ia(e,!0)}function Zd(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Ke=Ke.return}}function Wn(e){if(e!==Ke)return!1;if(!fe)return Zd(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Oc(e.type,e.memoizedProps)),a=!a),a&&Re&&Ia(e),Zd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=Tm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Re=Tm(e)}else t===27?(t=Re,Ga(e.type)?(e=zc,zc=null,Re=e):Re=t):Re=Ke?_t(e.stateNode.nextSibling):null;return!0}function mn(){Re=Ke=null,fe=!1}function bl(){var e=Da;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),Da=null),e}function Hi(e){Da===null?Da=[e]:Da.push(e)}var vl=w(null),pn=null,sa=null;function Ma(e,t,a){q(vl,t._currentValue),t._currentValue=a}function oa(e){e._currentValue=vl.current,O(vl)}function xl(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function wl(e,t,a,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var f=o.child;c=c.firstContext;e:for(;c!==null;){var p=c;c=o;for(var v=0;v<t.length;v++)if(p.context===t[v]){c.lanes|=a,p=c.alternate,p!==null&&(p.lanes|=a),xl(c.return,a,e),i||(f=null);break e}c=p.next}}else if(o.tag===18){if(f=o.return,f===null)throw Error(l(341));f.lanes|=a,c=f.alternate,c!==null&&(c.lanes|=a),xl(f,a,e),f=null}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===e){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}}function $n(e,t,a,i){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var f=o.alternate;if(f===null)throw Error(l(387));if(f=f.memoizedProps,f!==null){var p=o.type;gt(o.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(o===ge.current){if(f=o.alternate,f===null)throw Error(l(387));f.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(gr):e=[gr])}o=o.return}e!==null&&wl(t,e,a,i),t.flags|=262144}function os(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gn(e){pn=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return ef(pn,e)}function ls(e,t){return pn===null&&gn(e),ef(e,t)}function ef(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(l(308));sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sa=sa.next=t;return a}var Cb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},kb=r.unstable_scheduleCallback,Sb=r.unstable_NormalPriority,ze={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cl(){return{controller:new Cb,data:new Map,refCount:0}}function Gi(e){e.refCount--,e.refCount===0&&kb(Sb,function(){e.controller.abort()})}var Vi=null,kl=0,Yn=0,Kn=null;function Tb(e,t){if(Vi===null){var a=Vi=[];kl=0,Yn=Ec(),Kn={status:"pending",value:void 0,then:function(i){a.push(i)}}}return kl++,t.then(tf,tf),t}function tf(){if(--kl===0&&Vi!==null){Kn!==null&&(Kn.status="fulfilled");var e=Vi;Vi=null,Yn=0,Kn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Eb(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(i.status="rejected",i.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),i}var af=M.S;M.S=function(e,t){zh=ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Tb(e,t),af!==null&&af(e,t)};var yn=w(null);function Sl(){var e=yn.current;return e!==null?e:Te.pooledCache}function cs(e,t){t===null?q(yn,yn.current):q(yn,t.pool)}function nf(){var e=Sl();return e===null?null:{parent:ze._currentValue,pool:e}}var Xn=Error(l(460)),Tl=Error(l(474)),us=Error(l(542)),ds={then:function(){}};function rf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(aa,aa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lf(e),e;default:if(typeof t.status=="string")t.then(aa,aa);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=i}},function(i){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lf(e),e}throw vn=t,Xn}}function bn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vn=a,Xn):a}}var vn=null;function of(){if(vn===null)throw Error(l(459));var e=vn;return vn=null,e}function lf(e){if(e===Xn||e===us)throw Error(l(483))}var Qn=null,Wi=0;function fs(e){var t=Wi;return Wi+=1,Qn===null&&(Qn=[]),sf(Qn,e,t)}function $i(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hs(e,t){throw t.$$typeof===P?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cf(e){function t(k,x){if(e){var T=k.deletions;T===null?(k.deletions=[x],k.flags|=16):T.push(x)}}function a(k,x){if(!e)return null;for(;x!==null;)t(k,x),x=x.sibling;return null}function i(k){for(var x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function o(k,x){return k=ia(k,x),k.index=0,k.sibling=null,k}function c(k,x,T){return k.index=T,e?(T=k.alternate,T!==null?(T=T.index,T<x?(k.flags|=67108866,x):T):(k.flags|=67108866,x)):(k.flags|=1048576,x)}function f(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function p(k,x,T,N){return x===null||x.tag!==6?(x=hl(T,k.mode,N),x.return=k,x):(x=o(x,T),x.return=k,x)}function v(k,x,T,N){var K=T.type;return K===z?I(k,x,T.props.children,N,T.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ke&&bn(K)===x.type)?(x=o(x,T.props),$i(x,T),x.return=k,x):(x=rs(T.type,T.key,T.props,null,k.mode,N),$i(x,T),x.return=k,x)}function E(k,x,T,N){return x===null||x.tag!==4||x.stateNode.containerInfo!==T.containerInfo||x.stateNode.implementation!==T.implementation?(x=ml(T,k.mode,N),x.return=k,x):(x=o(x,T.children||[]),x.return=k,x)}function I(k,x,T,N,K){return x===null||x.tag!==7?(x=hn(T,k.mode,N,K),x.return=k,x):(x=o(x,T),x.return=k,x)}function _(k,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=hl(""+x,k.mode,T),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case F:return T=rs(x.type,x.key,x.props,null,k.mode,T),$i(T,x),T.return=k,T;case H:return x=ml(x,k.mode,T),x.return=k,x;case ke:return x=bn(x),_(k,x,T)}if(qe(x)||Oe(x))return x=hn(x,k.mode,T,null),x.return=k,x;if(typeof x.then=="function")return _(k,fs(x),T);if(x.$$typeof===L)return _(k,ls(k,x),T);hs(k,x)}return null}function A(k,x,T,N){var K=x!==null?x.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return K!==null?null:p(k,x,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case F:return T.key===K?v(k,x,T,N):null;case H:return T.key===K?E(k,x,T,N):null;case ke:return T=bn(T),A(k,x,T,N)}if(qe(T)||Oe(T))return K!==null?null:I(k,x,T,N,null);if(typeof T.then=="function")return A(k,x,fs(T),N);if(T.$$typeof===L)return A(k,x,ls(k,T),N);hs(k,T)}return null}function D(k,x,T,N,K){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return k=k.get(T)||null,p(x,k,""+N,K);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case F:return k=k.get(N.key===null?T:N.key)||null,v(x,k,N,K);case H:return k=k.get(N.key===null?T:N.key)||null,E(x,k,N,K);case ke:return N=bn(N),D(k,x,T,N,K)}if(qe(N)||Oe(N))return k=k.get(T)||null,I(x,k,N,K,null);if(typeof N.then=="function")return D(k,x,T,fs(N),K);if(N.$$typeof===L)return D(k,x,T,ls(x,N),K);hs(x,N)}return null}function V(k,x,T,N){for(var K=null,he=null,$=x,se=x=0,de=null;$!==null&&se<T.length;se++){$.index>se?(de=$,$=null):de=$.sibling;var me=A(k,$,T[se],N);if(me===null){$===null&&($=de);break}e&&$&&me.alternate===null&&t(k,$),x=c(me,x,se),he===null?K=me:he.sibling=me,he=me,$=de}if(se===T.length)return a(k,$),fe&&ra(k,se),K;if($===null){for(;se<T.length;se++)$=_(k,T[se],N),$!==null&&(x=c($,x,se),he===null?K=$:he.sibling=$,he=$);return fe&&ra(k,se),K}for($=i($);se<T.length;se++)de=D($,k,se,T[se],N),de!==null&&(e&&de.alternate!==null&&$.delete(de.key===null?se:de.key),x=c(de,x,se),he===null?K=de:he.sibling=de,he=de);return e&&$.forEach(function(Ka){return t(k,Ka)}),fe&&ra(k,se),K}function J(k,x,T,N){if(T==null)throw Error(l(151));for(var K=null,he=null,$=x,se=x=0,de=null,me=T.next();$!==null&&!me.done;se++,me=T.next()){$.index>se?(de=$,$=null):de=$.sibling;var Ka=A(k,$,me.value,N);if(Ka===null){$===null&&($=de);break}e&&$&&Ka.alternate===null&&t(k,$),x=c(Ka,x,se),he===null?K=Ka:he.sibling=Ka,he=Ka,$=de}if(me.done)return a(k,$),fe&&ra(k,se),K;if($===null){for(;!me.done;se++,me=T.next())me=_(k,me.value,N),me!==null&&(x=c(me,x,se),he===null?K=me:he.sibling=me,he=me);return fe&&ra(k,se),K}for($=i($);!me.done;se++,me=T.next())me=D($,k,se,me.value,N),me!==null&&(e&&me.alternate!==null&&$.delete(me.key===null?se:me.key),x=c(me,x,se),he===null?K=me:he.sibling=me,he=me);return e&&$.forEach(function(Lv){return t(k,Lv)}),fe&&ra(k,se),K}function Ce(k,x,T,N){if(typeof T=="object"&&T!==null&&T.type===z&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case F:e:{for(var K=T.key;x!==null;){if(x.key===K){if(K=T.type,K===z){if(x.tag===7){a(k,x.sibling),N=o(x,T.props.children),N.return=k,k=N;break e}}else if(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ke&&bn(K)===x.type){a(k,x.sibling),N=o(x,T.props),$i(N,T),N.return=k,k=N;break e}a(k,x);break}else t(k,x);x=x.sibling}T.type===z?(N=hn(T.props.children,k.mode,N,T.key),N.return=k,k=N):(N=rs(T.type,T.key,T.props,null,k.mode,N),$i(N,T),N.return=k,k=N)}return f(k);case H:e:{for(K=T.key;x!==null;){if(x.key===K)if(x.tag===4&&x.stateNode.containerInfo===T.containerInfo&&x.stateNode.implementation===T.implementation){a(k,x.sibling),N=o(x,T.children||[]),N.return=k,k=N;break e}else{a(k,x);break}else t(k,x);x=x.sibling}N=ml(T,k.mode,N),N.return=k,k=N}return f(k);case ke:return T=bn(T),Ce(k,x,T,N)}if(qe(T))return V(k,x,T,N);if(Oe(T)){if(K=Oe(T),typeof K!="function")throw Error(l(150));return T=K.call(T),J(k,x,T,N)}if(typeof T.then=="function")return Ce(k,x,fs(T),N);if(T.$$typeof===L)return Ce(k,x,ls(k,T),N);hs(k,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,x!==null&&x.tag===6?(a(k,x.sibling),N=o(x,T),N.return=k,k=N):(a(k,x),N=hl(T,k.mode,N),N.return=k,k=N),f(k)):a(k,x)}return function(k,x,T,N){try{Wi=0;var K=Ce(k,x,T,N);return Qn=null,K}catch($){if($===Xn||$===us)throw $;var he=yt(29,$,null,k.mode);return he.lanes=N,he.return=k,he}finally{}}}var xn=cf(!0),uf=cf(!1),Na=!1;function El(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,t=is(e),Wd(e,null,a),t}return ns(e,i,t,a),is(e)}function Yi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ed(e,a)}}function Al(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=f:c=c.next=f,a=a.next}while(a!==null);c===null?o=c=t:c=c.next=t}else o=c=t;a={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Dl=!1;function Ki(){if(Dl){var e=Kn;if(e!==null)throw e}}function Xi(e,t,a,i){Dl=!1;var o=e.updateQueue;Na=!1;var c=o.firstBaseUpdate,f=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var v=p,E=v.next;v.next=null,f===null?c=E:f.next=E,f=v;var I=e.alternate;I!==null&&(I=I.updateQueue,p=I.lastBaseUpdate,p!==f&&(p===null?I.firstBaseUpdate=E:p.next=E,I.lastBaseUpdate=v))}if(c!==null){var _=o.baseState;f=0,I=E=v=null,p=c;do{var A=p.lane&-536870913,D=A!==p.lane;if(D?(ue&A)===A:(i&A)===A){A!==0&&A===Yn&&(Dl=!0),I!==null&&(I=I.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var V=e,J=p;A=t;var Ce=a;switch(J.tag){case 1:if(V=J.payload,typeof V=="function"){_=V.call(Ce,_,A);break e}_=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=J.payload,A=typeof V=="function"?V.call(Ce,_,A):V,A==null)break e;_=C({},_,A);break e;case 2:Na=!0}}A=p.callback,A!==null&&(e.flags|=64,D&&(e.flags|=8192),D=o.callbacks,D===null?o.callbacks=[A]:D.push(A))}else D={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},I===null?(E=I=D,v=_):I=I.next=D,f|=A;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;D=p,p=D.next,D.next=null,o.lastBaseUpdate=D,o.shared.pending=null}}while(!0);I===null&&(v=_),o.baseState=v,o.firstBaseUpdate=E,o.lastBaseUpdate=I,c===null&&(o.shared.lanes=0),qa|=f,e.lanes=f,e.memoizedState=_}}function df(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function ff(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)df(a[e],t)}var Jn=w(null),ms=w(0);function hf(e,t){e=ga,q(ms,e),q(Jn,t),ga=e|t.baseLanes}function Il(){q(ms,ga),q(Jn,Jn.current)}function Ml(){ga=ms.current,O(Jn),O(ms)}var bt=w(null),Nt=null;function Oa(e){var t=e.alternate;q(Le,Le.current&1),q(bt,e),Nt===null&&(t===null||Jn.current!==null||t.memoizedState!==null)&&(Nt=e)}function Nl(e){q(Le,Le.current),q(bt,e),Nt===null&&(Nt=e)}function mf(e){e.tag===22?(q(Le,Le.current),q(bt,e),Nt===null&&(Nt=e)):Ba()}function Ba(){q(Le,Le.current),q(bt,bt.current)}function vt(e){O(bt),Nt===e&&(Nt=null),O(Le)}var Le=w(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jc(a)||qc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=0,ie=null,xe=null,Ue=null,gs=!1,Zn=!1,wn=!1,ys=0,Qi=0,ei=null,Rb=0;function Me(){throw Error(l(321))}function _l(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!gt(e[a],t[a]))return!1;return!0}function Pl(e,t,a,i,o,c){return la=c,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Qf:Kl,wn=!1,c=a(i,o),wn=!1,Zn&&(c=gf(t,a,i,o)),pf(e),c}function pf(e){M.H=er;var t=xe!==null&&xe.next!==null;if(la=0,Ue=xe=ie=null,gs=!1,Qi=0,ei=null,t)throw Error(l(300));e===null||Fe||(e=e.dependencies,e!==null&&os(e)&&(Fe=!0))}function gf(e,t,a,i){ie=e;var o=0;do{if(Zn&&(ei=null),Qi=0,Zn=!1,25<=o)throw Error(l(301));if(o+=1,Ue=xe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}M.H=Jf,c=t(a,i)}while(Zn);return c}function Ab(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Ji(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ie.flags|=1024),t}function Ol(){var e=ys!==0;return ys=0,e}function Bl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ll(e){if(gs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gs=!1}la=0,Ue=xe=ie=null,Zn=!1,Qi=ys=0,ei=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ie.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function je(){if(xe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ie.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ie.alternate===null?Error(l(467)):Error(l(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ie.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function bs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ji(e){var t=Qi;return Qi+=1,ei===null&&(ei=[]),e=sf(ei,e,t),t=ie,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Qf:Kl),e}function vs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ji(e);if(e.$$typeof===L)return Xe(e)}throw Error(l(438,String(e)))}function jl(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ie.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=bs(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=ft;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function xs(e){var t=je();return ql(t,xe,e)}function ql(e,t,a){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=a;var o=e.baseQueue,c=i.pending;if(c!==null){if(o!==null){var f=o.next;o.next=c.next,c.next=f}t.baseQueue=o=c,i.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var p=f=null,v=null,E=t,I=!1;do{var _=E.lane&-536870913;if(_!==E.lane?(ue&_)===_:(la&_)===_){var A=E.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),_===Yn&&(I=!0);else if((la&A)===A){E=E.next,A===Yn&&(I=!0);continue}else _={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(p=v=_,f=c):v=v.next=_,ie.lanes|=A,qa|=A;_=E.action,wn&&a(c,_),c=E.hasEagerState?E.eagerState:a(c,_)}else A={lane:_,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(p=v=A,f=c):v=v.next=A,ie.lanes|=_,qa|=_;E=E.next}while(E!==null&&E!==t);if(v===null?f=c:v.next=p,!gt(c,e.memoizedState)&&(Fe=!0,I&&(a=Kn,a!==null)))throw a;e.memoizedState=c,e.baseState=f,e.baseQueue=v,i.lastRenderedState=c}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zl(e){var t=je(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var i=a.dispatch,o=a.pending,c=t.memoizedState;if(o!==null){a.pending=null;var f=o=o.next;do c=e(c,f.action),f=f.next;while(f!==o);gt(c,t.memoizedState)||(Fe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,i]}function yf(e,t,a){var i=ie,o=je(),c=fe;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=t();var f=!gt((xe||o).memoizedState,a);if(f&&(o.memoizedState=a,Fe=!0),o=o.queue,Hl(xf.bind(null,i,o,e),[e]),o.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(i.flags|=2048,ti(9,{destroy:void 0},vf.bind(null,i,o,a,t),null),Te===null)throw Error(l(349));c||(la&127)!==0||bf(i,t,a)}return a}function bf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=bs(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vf(e,t,a,i){t.value=a,t.getSnapshot=i,wf(t)&&Cf(e)}function xf(e,t,a){return a(function(){wf(t)&&Cf(e)})}function wf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!gt(e,a)}catch{return!0}}function Cf(e){var t=fn(e,2);t!==null&&ut(t,e,2)}function Ul(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),wn){Ta(!0);try{a()}finally{Ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function kf(e,t,a,i){return e.baseState=a,ql(e,xe,typeof i=="function"?i:ca)}function Db(e,t,a,i,o){if(ks(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};M.T!==null?a(!0):c.isTransition=!1,i(c),a=t.pending,a===null?(c.next=t.pending=c,Sf(t,c)):(c.next=a.next,t.pending=a.next=c)}}function Sf(e,t){var a=t.action,i=t.payload,o=e.state;if(t.isTransition){var c=M.T,f={};M.T=f;try{var p=a(o,i),v=M.S;v!==null&&v(f,p),Tf(e,t,p)}catch(E){Fl(e,t,E)}finally{c!==null&&f.types!==null&&(c.types=f.types),M.T=c}}else try{c=a(o,i),Tf(e,t,c)}catch(E){Fl(e,t,E)}}function Tf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Ef(e,t,i)},function(i){return Fl(e,t,i)}):Ef(e,t,a)}function Ef(e,t,a){t.status="fulfilled",t.value=a,Rf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Sf(e,a)))}function Fl(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Rf(t),t=t.next;while(t!==i)}e.action=null}function Rf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Af(e,t){return t}function Df(e,t){if(fe){var a=Te.formState;if(a!==null){e:{var i=ie;if(fe){if(Re){t:{for(var o=Re,c=Mt;o.nodeType!==8;){if(!c){o=null;break t}if(o=_t(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Re=_t(o.nextSibling),i=o.data==="F!";break e}}Ia(i)}i=!1}i&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Af,lastRenderedState:t},a.queue=i,a=Yf.bind(null,ie,i),i.dispatch=a,i=Ul(!1),c=Yl.bind(null,ie,!1,i.queue),i=tt(),o={state:t,dispatch:null,action:e,pending:null},i.queue=o,a=Db.bind(null,ie,o,c,a),o.dispatch=a,i.memoizedState=e,[t,a,!1]}function If(e){var t=je();return Mf(t,xe,e)}function Mf(e,t,a){if(t=ql(e,t,Af)[0],e=xs(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ji(t)}catch(f){throw f===Xn?us:f}else i=t;t=je();var o=t.queue,c=o.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,ti(9,{destroy:void 0},Ib.bind(null,o,a),null)),[i,c,e]}function Ib(e,t){e.action=t}function Nf(e){var t=je(),a=xe;if(a!==null)return Mf(t,a,e);je(),t=t.memoizedState,a=je();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function ti(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ie.updateQueue,t===null&&(t=bs(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function _f(){return je().memoizedState}function ws(e,t,a,i){var o=tt();ie.flags|=e,o.memoizedState=ti(1|t,{destroy:void 0},a,i===void 0?null:i)}function Cs(e,t,a,i){var o=je();i=i===void 0?null:i;var c=o.memoizedState.inst;xe!==null&&i!==null&&_l(i,xe.memoizedState.deps)?o.memoizedState=ti(t,c,a,i):(ie.flags|=e,o.memoizedState=ti(1|t,c,a,i))}function Pf(e,t){ws(8390656,8,e,t)}function Hl(e,t){Cs(2048,8,e,t)}function Mb(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=bs(),ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Of(e){var t=je().memoizedState;return Mb({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Bf(e,t){return Cs(4,2,e,t)}function Lf(e,t){return Cs(4,4,e,t)}function jf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qf(e,t,a){a=a!=null?a.concat([e]):null,Cs(4,4,jf.bind(null,t,e),a)}function Gl(){}function zf(e,t){var a=je();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&_l(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Uf(e,t){var a=je();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&_l(t,i[1]))return i[0];if(i=e(),wn){Ta(!0);try{e()}finally{Ta(!1)}}return a.memoizedState=[i,t],i}function Vl(e,t,a){return a===void 0||(la&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fh(),ie.lanes|=e,qa|=e,a)}function Ff(e,t,a,i){return gt(a,t)?a:Jn.current!==null?(e=Vl(e,a,i),gt(e,t)||(Fe=!0),e):(la&42)===0||(la&1073741824)!==0&&(ue&261930)===0?(Fe=!0,e.memoizedState=a):(e=Fh(),ie.lanes|=e,qa|=e,t)}function Hf(e,t,a,i,o){var c=j.p;j.p=c!==0&&8>c?c:8;var f=M.T,p={};M.T=p,Yl(e,!1,t,a);try{var v=o(),E=M.S;if(E!==null&&E(p,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var I=Eb(v,i);Zi(e,t,I,Ct(e))}else Zi(e,t,i,Ct(e))}catch(_){Zi(e,t,{then:function(){},status:"rejected",reason:_},Ct())}finally{j.p=c,f!==null&&p.types!==null&&(f.types=p.types),M.T=f}}function Nb(){}function Wl(e,t,a,i){if(e.tag!==5)throw Error(l(476));var o=Gf(e).queue;Hf(e,o,t,Z,a===null?Nb:function(){return Vf(e),a(i)})}function Gf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vf(e){var t=Gf(e);t.next===null&&(t=e.alternate.memoizedState),Zi(e,t.next.queue,{},Ct())}function $l(){return Xe(gr)}function Wf(){return je().memoizedState}function $f(){return je().memoizedState}function _b(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ct();e=_a(a);var i=Pa(t,e,a);i!==null&&(ut(i,t,a),Yi(i,t,a)),t={cache:Cl()},e.payload=t;return}t=t.return}}function Pb(e,t,a){var i=Ct();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ks(e)?Kf(t,a):(a=dl(e,t,a,i),a!==null&&(ut(a,e,i),Xf(a,t,i)))}function Yf(e,t,a){var i=Ct();Zi(e,t,a,i)}function Zi(e,t,a,i){var o={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ks(e))Kf(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var f=t.lastRenderedState,p=c(f,a);if(o.hasEagerState=!0,o.eagerState=p,gt(p,f))return ns(e,t,o,0),Te===null&&as(),!1}catch{}finally{}if(a=dl(e,t,o,i),a!==null)return ut(a,e,i),Xf(a,t,i),!0}return!1}function Yl(e,t,a,i){if(i={lane:2,revertLane:Ec(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(l(479))}else t=dl(e,a,i,2),t!==null&&ut(t,e,2)}function ks(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Kf(e,t){Zn=gs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Xf(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ed(e,a)}}var er={readContext:Xe,use:vs,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};er.useEffectEvent=Me;var Qf={readContext:Xe,use:vs,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Pf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ws(4194308,4,jf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){ws(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var i=e();if(wn){Ta(!0);try{e()}finally{Ta(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=tt();if(a!==void 0){var o=a(t);if(wn){Ta(!0);try{a(t)}finally{Ta(!1)}}}else o=t;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=Pb.bind(null,ie,e),[i.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ul(e);var t=e.queue,a=Yf.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Gl,useDeferredValue:function(e,t){var a=tt();return Vl(a,e,t)},useTransition:function(){var e=Ul(!1);return e=Hf.bind(null,ie,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ie,o=tt();if(fe){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),Te===null)throw Error(l(349));(ue&127)!==0||bf(i,t,a)}o.memoizedState=a;var c={value:a,getSnapshot:t};return o.queue=c,Pf(xf.bind(null,i,c,e),[e]),i.flags|=2048,ti(9,{destroy:void 0},vf.bind(null,i,c,a,t),null),a},useId:function(){var e=tt(),t=Te.identifierPrefix;if(fe){var a=Kt,i=Yt;a=(i&~(1<<32-pt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ys++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Rb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$l,useFormState:Df,useActionState:Df,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Yl.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:jl,useCacheRefresh:function(){return tt().memoizedState=_b.bind(null,ie)},useEffectEvent:function(e){var t=tt(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},Kl={readContext:Xe,use:vs,useCallback:zf,useContext:Xe,useEffect:Hl,useImperativeHandle:qf,useInsertionEffect:Bf,useLayoutEffect:Lf,useMemo:Uf,useReducer:xs,useRef:_f,useState:function(){return xs(ca)},useDebugValue:Gl,useDeferredValue:function(e,t){var a=je();return Ff(a,xe.memoizedState,e,t)},useTransition:function(){var e=xs(ca)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:yf,useId:Wf,useHostTransitionStatus:$l,useFormState:If,useActionState:If,useOptimistic:function(e,t){var a=je();return kf(a,xe,e,t)},useMemoCache:jl,useCacheRefresh:$f};Kl.useEffectEvent=Of;var Jf={readContext:Xe,use:vs,useCallback:zf,useContext:Xe,useEffect:Hl,useImperativeHandle:qf,useInsertionEffect:Bf,useLayoutEffect:Lf,useMemo:Uf,useReducer:zl,useRef:_f,useState:function(){return zl(ca)},useDebugValue:Gl,useDeferredValue:function(e,t){var a=je();return xe===null?Vl(a,e,t):Ff(a,xe.memoizedState,e,t)},useTransition:function(){var e=zl(ca)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:yf,useId:Wf,useHostTransitionStatus:$l,useFormState:Nf,useActionState:Nf,useOptimistic:function(e,t){var a=je();return xe!==null?kf(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jl,useCacheRefresh:$f};Jf.useEffectEvent=Of;function Xl(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:C({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ql={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Ct(),o=_a(i);o.payload=t,a!=null&&(o.callback=a),t=Pa(e,o,i),t!==null&&(ut(t,e,i),Yi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Ct(),o=_a(i);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=Pa(e,o,i),t!==null&&(ut(t,e,i),Yi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ct(),i=_a(a);i.tag=2,t!=null&&(i.callback=t),t=Pa(e,i,a),t!==null&&(ut(t,e,a),Yi(t,e,a))}};function Zf(e,t,a,i,o,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,f):t.prototype&&t.prototype.isPureReactComponent?!zi(a,i)||!zi(o,c):!0}function eh(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function Cn(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=C({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function th(e){ts(e)}function ah(e){console.error(e)}function nh(e){ts(e)}function Ss(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ih(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Jl(e,t,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ss(e,t)},a}function rh(e){return e=_a(e),e.tag=3,e}function sh(e,t,a,i){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;e.payload=function(){return o(c)},e.callback=function(){ih(t,a,i)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){ih(t,a,i),typeof o!="function"&&(za===null?za=new Set([this]):za.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})})}function Ob(e,t,a,i,o){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&$n(t,a,o,!0),a=bt.current,a!==null){switch(a.tag){case 31:case 13:return Nt===null?Bs():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=o,i===ds?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),kc(e,i,o)),!1;case 22:return a.flags|=65536,i===ds?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),kc(e,i,o)),!1}throw Error(l(435,a.tag))}return kc(e,i,o),Bs(),!1}if(fe)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,i!==yl&&(e=Error(l(422),{cause:i}),Hi(At(e,a)))):(i!==yl&&(t=Error(l(423),{cause:i}),Hi(At(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=At(i,a),o=Jl(e.stateNode,i,o),Al(e,o),Ne!==4&&(Ne=2)),!1;var c=Error(l(520),{cause:i});if(c=At(c,a),lr===null?lr=[c]:lr.push(c),Ne!==4&&(Ne=2),t===null)return!0;i=At(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=Jl(a.stateNode,i,e),Al(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(za===null||!za.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=rh(o),sh(o,e,a,i),Al(a,o),!1}a=a.return}while(a!==null);return!1}var Zl=Error(l(461)),Fe=!1;function Qe(e,t,a,i){t.child=e===null?uf(t,null,a,i):xn(t,e.child,a,i)}function oh(e,t,a,i,o){a=a.render;var c=t.ref;if("ref"in i){var f={};for(var p in i)p!=="ref"&&(f[p]=i[p])}else f=i;return gn(t),i=Pl(e,t,a,f,c,o),p=Ol(),e!==null&&!Fe?(Bl(e,t,o),ua(e,t,o)):(fe&&p&&pl(t),t.flags|=1,Qe(e,t,i,o),t.child)}function lh(e,t,a,i,o){if(e===null){var c=a.type;return typeof c=="function"&&!fl(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,ch(e,t,c,i,o)):(e=rs(a.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!oc(e,o)){var f=c.memoizedProps;if(a=a.compare,a=a!==null?a:zi,a(f,i)&&e.ref===t.ref)return ua(e,t,o)}return t.flags|=1,e=ia(c,i),e.ref=t.ref,e.return=t,t.child=e}function ch(e,t,a,i,o){if(e!==null){var c=e.memoizedProps;if(zi(c,i)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=i=c,oc(e,o))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,ua(e,t,o)}return ec(e,t,a,i,o)}function uh(e,t,a,i){var o=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~c}else i=0,t.child=null;return dh(e,t,c,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cs(t,c!==null?c.cachePool:null),c!==null?hf(t,c):Il(),mf(t);else return i=t.lanes=536870912,dh(e,t,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(cs(t,c.cachePool),hf(t,c),Ba(),t.memoizedState=null):(e!==null&&cs(t,null),Il(),Ba());return Qe(e,t,o,a),t.child}function tr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dh(e,t,a,i,o){var c=Sl();return c=c===null?null:{parent:ze._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&cs(t,null),Il(),mf(t),e!==null&&$n(e,t,i,!0),t.childLanes=o,null}function Ts(e,t){return t=Rs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fh(e,t,a){return xn(t,e.child,null,a),e=Ts(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function Bb(e,t,a){var i=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(i.mode==="hidden")return e=Ts(t,i),t.lanes=536870912,tr(null,e);if(Nl(t),(e=Re)?(e=Sm(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},a=Yd(e),a.return=t,t.child=a,Ke=t,Re=null)):e=null,e===null)throw Ia(t);return t.lanes=536870912,null}return Ts(t,i)}var c=e.memoizedState;if(c!==null){var f=c.dehydrated;if(Nl(t),o)if(t.flags&256)t.flags&=-257,t=fh(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Fe||$n(e,t,a,!1),o=(a&e.childLanes)!==0,Fe||o){if(i=Te,i!==null&&(f=td(i,a),f!==0&&f!==c.retryLane))throw c.retryLane=f,fn(e,f),ut(i,e,f),Zl;Bs(),t=fh(e,t,a)}else e=c.treeContext,Re=_t(f.nextSibling),Ke=t,fe=!0,Da=null,Mt=!1,e!==null&&Qd(t,e),t=Ts(t,i),t.flags|=4096;return t}return e=ia(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Es(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ec(e,t,a,i,o){return gn(t),a=Pl(e,t,a,i,void 0,o),i=Ol(),e!==null&&!Fe?(Bl(e,t,o),ua(e,t,o)):(fe&&i&&pl(t),t.flags|=1,Qe(e,t,a,o),t.child)}function hh(e,t,a,i,o,c){return gn(t),t.updateQueue=null,a=gf(t,i,a,o),pf(e),i=Ol(),e!==null&&!Fe?(Bl(e,t,c),ua(e,t,c)):(fe&&i&&pl(t),t.flags|=1,Qe(e,t,a,c),t.child)}function mh(e,t,a,i,o){if(gn(t),t.stateNode===null){var c=Hn,f=a.contextType;typeof f=="object"&&f!==null&&(c=Xe(f)),c=new a(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ql,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},El(t),f=a.contextType,c.context=typeof f=="object"&&f!==null?Xe(f):Hn,c.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Xl(t,a,f,i),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&Ql.enqueueReplaceState(c,c.state,null),Xi(t,i,c,o),Ki(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var p=t.memoizedProps,v=Cn(a,p);c.props=v;var E=c.context,I=a.contextType;f=Hn,typeof I=="object"&&I!==null&&(f=Xe(I));var _=a.getDerivedStateFromProps;I=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p||E!==f)&&eh(t,c,i,f),Na=!1;var A=t.memoizedState;c.state=A,Xi(t,i,c,o),Ki(),E=t.memoizedState,p||A!==E||Na?(typeof _=="function"&&(Xl(t,a,_,i),E=t.memoizedState),(v=Na||Zf(t,a,v,i,A,E,f))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),c.props=i,c.state=E,c.context=f,i=v):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Rl(e,t),f=t.memoizedProps,I=Cn(a,f),c.props=I,_=t.pendingProps,A=c.context,E=a.contextType,v=Hn,typeof E=="object"&&E!==null&&(v=Xe(E)),p=a.getDerivedStateFromProps,(E=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==_||A!==v)&&eh(t,c,i,v),Na=!1,A=t.memoizedState,c.state=A,Xi(t,i,c,o),Ki();var D=t.memoizedState;f!==_||A!==D||Na||e!==null&&e.dependencies!==null&&os(e.dependencies)?(typeof p=="function"&&(Xl(t,a,p,i),D=t.memoizedState),(I=Na||Zf(t,a,I,i,A,D,v)||e!==null&&e.dependencies!==null&&os(e.dependencies))?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,D,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,D,v)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=D),c.props=i,c.state=D,c.context=v,i=I):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Es(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=xn(t,e.child,null,o),t.child=xn(t,null,a,o)):Qe(e,t,a,o),t.memoizedState=c.state,e=t.child):e=ua(e,t,o),e}function ph(e,t,a,i){return mn(),t.flags|=256,Qe(e,t,a,i),t.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ac(e){return{baseLanes:e,cachePool:nf()}}function nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wt),e}function gh(e,t,a){var i=t.pendingProps,o=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),f&&(o=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(o?Oa(t):Ba(),(e=Re)?(e=Sm(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Yt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},a=Yd(e),a.return=t,t.child=a,Ke=t,Re=null)):e=null,e===null)throw Ia(t);return qc(e)?t.lanes=32:t.lanes=536870912,null}var p=i.children;return i=i.fallback,o?(Ba(),o=t.mode,p=Rs({mode:"hidden",children:p},o),i=hn(i,o,a,null),p.return=t,i.return=t,p.sibling=i,t.child=p,i=t.child,i.memoizedState=ac(a),i.childLanes=nc(e,f,a),t.memoizedState=tc,tr(null,i)):(Oa(t),ic(t,p))}var v=e.memoizedState;if(v!==null&&(p=v.dehydrated,p!==null)){if(c)t.flags&256?(Oa(t),t.flags&=-257,t=rc(e,t,a)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),p=i.fallback,o=t.mode,i=Rs({mode:"visible",children:i.children},o),p=hn(p,o,a,null),p.flags|=2,i.return=t,p.return=t,i.sibling=p,t.child=i,xn(t,e.child,null,a),i=t.child,i.memoizedState=ac(a),i.childLanes=nc(e,f,a),t.memoizedState=tc,t=tr(null,i));else if(Oa(t),qc(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var E=f.dgst;f=E,i=Error(l(419)),i.stack="",i.digest=f,Hi({value:i,source:null,stack:null}),t=rc(e,t,a)}else if(Fe||$n(e,t,a,!1),f=(a&e.childLanes)!==0,Fe||f){if(f=Te,f!==null&&(i=td(f,a),i!==0&&i!==v.retryLane))throw v.retryLane=i,fn(e,i),ut(f,e,i),Zl;jc(p)||Bs(),t=rc(e,t,a)}else jc(p)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Re=_t(p.nextSibling),Ke=t,fe=!0,Da=null,Mt=!1,e!==null&&Qd(t,e),t=ic(t,i.children),t.flags|=4096);return t}return o?(Ba(),p=i.fallback,o=t.mode,v=e.child,E=v.sibling,i=ia(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,E!==null?p=ia(E,p):(p=hn(p,o,a,null),p.flags|=2),p.return=t,i.return=t,i.sibling=p,t.child=i,tr(null,i),i=t.child,p=e.child.memoizedState,p===null?p=ac(a):(o=p.cachePool,o!==null?(v=ze._currentValue,o=o.parent!==v?{parent:v,pool:v}:o):o=nf(),p={baseLanes:p.baseLanes|a,cachePool:o}),i.memoizedState=p,i.childLanes=nc(e,f,a),t.memoizedState=tc,tr(e.child,i)):(Oa(t),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function ic(e,t){return t=Rs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Rs(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function rc(e,t,a){return xn(t,e.child,null,a),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yh(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),xl(e.return,t,a)}function sc(e,t,a,i,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:o,treeForkCount:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=a,f.tailMode=o,f.treeForkCount=c)}function bh(e,t,a){var i=t.pendingProps,o=i.revealOrder,c=i.tail;i=i.children;var f=Le.current,p=(f&2)!==0;if(p?(f=f&1|2,t.flags|=128):f&=1,q(Le,f),Qe(e,t,i,a),i=fe?Fi:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yh(e,a,t);else if(e.tag===19)yh(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&ps(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),sc(t,!1,o,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ps(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}sc(t,!0,a,null,c,i);break;case"together":sc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ua(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=ia(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&os(e)))}function Lb(e,t,a){switch(t.tag){case 3:et(t,t.stateNode.containerInfo),Ma(t,ze,e.memoizedState.cache),mn();break;case 27:case 5:Ri(t);break;case 4:et(t,t.stateNode.containerInfo);break;case 10:Ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Nl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gh(e,t,a):(Oa(t),e=ua(e,t,a),e!==null?e.sibling:null);Oa(t);break;case 19:var o=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||($n(e,t,a,!1),i=(a&t.childLanes)!==0),o){if(i)return bh(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(Le,Le.current),i)break;return null;case 22:return t.lanes=0,uh(e,t,a,t.pendingProps);case 24:Ma(t,ze,e.memoizedState.cache)}return ua(e,t,a)}function vh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!oc(e,a)&&(t.flags&128)===0)return Fe=!1,Lb(e,t,a);Fe=(e.flags&131072)!==0}else Fe=!1,fe&&(t.flags&1048576)!==0&&Xd(t,Fi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=bn(t.elementType),t.type=e,typeof e=="function")fl(e)?(i=Cn(e,i),t.tag=1,t=mh(null,t,e,i,a)):(t.tag=0,t=ec(null,t,e,i,a));else{if(e!=null){var o=e.$$typeof;if(o===X){t.tag=11,t=oh(null,t,e,i,a);break e}else if(o===Y){t.tag=14,t=lh(null,t,e,i,a);break e}}throw t=St(e)||e,Error(l(306,t,""))}}return t;case 0:return ec(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,o=Cn(i,t.pendingProps),mh(e,t,i,o,a);case 3:e:{if(et(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var c=t.memoizedState;o=c.element,Rl(e,t),Xi(t,i,null,a);var f=t.memoizedState;if(i=f.cache,Ma(t,ze,i),i!==c.cache&&wl(t,[ze],a,!0),Ki(),i=f.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=ph(e,t,i,a);break e}else if(i!==o){o=At(Error(l(424)),t),Hi(o),t=ph(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=_t(e.firstChild),Ke=t,fe=!0,Da=null,Mt=!0,a=uf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(mn(),i===o){t=ua(e,t,a);break e}Qe(e,t,i,a)}t=t.child}return t;case 26:return Es(e,t),e===null?(a=Im(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,i=Hs(oe.current).createElement(a),i[Ye]=t,i[it]=e,Je(i,a,e),We(i),t.stateNode=i):t.memoizedState=Im(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ri(t),e===null&&fe&&(i=t.stateNode=Rm(t.type,t.pendingProps,oe.current),Ke=t,Mt=!0,o=Re,Ga(t.type)?(zc=o,Re=_t(i.firstChild)):Re=o),Qe(e,t,t.pendingProps.children,a),Es(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((o=i=Re)&&(i=hv(i,t.type,t.pendingProps,Mt),i!==null?(t.stateNode=i,Ke=t,Re=_t(i.firstChild),Mt=!1,o=!0):o=!1),o||Ia(t)),Ri(t),o=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,i=c.children,Oc(o,c)?i=null:f!==null&&Oc(o,f)&&(t.flags|=32),t.memoizedState!==null&&(o=Pl(e,t,Ab,null,null,a),gr._currentValue=o),Es(e,t),Qe(e,t,i,a),t.child;case 6:return e===null&&fe&&((e=a=Re)&&(a=mv(a,t.pendingProps,Mt),a!==null?(t.stateNode=a,Ke=t,Re=null,e=!0):e=!1),e||Ia(t)),null;case 13:return gh(e,t,a);case 4:return et(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xn(t,null,i,a):Qe(e,t,i,a),t.child;case 11:return oh(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ma(t,t.type,i.value),Qe(e,t,i.children,a),t.child;case 9:return o=t.type._context,i=t.pendingProps.children,gn(t),o=Xe(o),i=i(o),t.flags|=1,Qe(e,t,i,a),t.child;case 14:return lh(e,t,t.type,t.pendingProps,a);case 15:return ch(e,t,t.type,t.pendingProps,a);case 19:return bh(e,t,a);case 31:return Bb(e,t,a);case 22:return uh(e,t,a,t.pendingProps);case 24:return gn(t),i=Xe(ze),e===null?(o=Sl(),o===null&&(o=Te,c=Cl(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),t.memoizedState={parent:i,cache:o},El(t),Ma(t,ze,o)):((e.lanes&a)!==0&&(Rl(e,t),Xi(t,null,null,a),Ki()),o=e.memoizedState,c=t.memoizedState,o.parent!==i?(o={parent:i,cache:i},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Ma(t,ze,i)):(i=c.cache,Ma(t,ze,i),i!==o.cache&&wl(t,[ze],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function da(e){e.flags|=4}function lc(e,t,a,i,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Wh())e.flags|=8192;else throw vn=ds,Tl}else e.flags&=-16777217}function xh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Om(t))if(Wh())e.flags|=8192;else throw vn=ds,Tl}function As(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ju():536870912,e.lanes|=t,ri|=t)}function ar(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function jb(e,t,a){var i=t.pendingProps;switch(gl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),oa(ze),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wn(t)?da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bl())),Ae(t),null;case 26:var o=t.type,c=t.memoizedState;return e===null?(da(t),c!==null?(Ae(t),xh(t,c)):(Ae(t),lc(t,o,null,i,a))):c?c!==e.memoizedState?(da(t),Ae(t),xh(t,c)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&da(t),Ae(t),lc(t,o,e,i,a)),null;case 27:if(qr(t),a=oe.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&da(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ae(t),null}e=W.current,Wn(t)?Jd(t):(e=Rm(o,i,a),t.stateNode=e,da(t))}return Ae(t),null;case 5:if(qr(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&da(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ae(t),null}if(c=W.current,Wn(t))Jd(t);else{var f=Hs(oe.current);switch(c){case 1:c=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=f.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?f.createElement("select",{is:i.is}):f.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?f.createElement(o,{is:i.is}):f.createElement(o)}}c[Ye]=t,c[it]=i;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)c.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=c;e:switch(Je(c,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&da(t)}}return Ae(t),lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&da(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=oe.current,Wn(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,o=Ke,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[Ye]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||gm(e.nodeValue,a)),e||Ia(t,!0)}else e=Hs(e).createTextNode(i),e[Ye]=t,t.stateNode=e}return Ae(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Wn(t),a!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Ye]=t}else mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else a=bl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Wn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Ye]=t}else mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else o=bl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),As(t,t.updateQueue),Ae(t),null);case 4:return Be(),e===null&&Ic(t.stateNode.containerInfo),Ae(t),null;case 10:return oa(t.type),Ae(t),null;case 19:if(O(Le),i=t.memoizedState,i===null)return Ae(t),null;if(o=(t.flags&128)!==0,c=i.rendering,c===null)if(o)ar(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ps(e),c!==null){for(t.flags|=128,ar(i,!1),e=c.updateQueue,t.updateQueue=e,As(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$d(a,e),a=a.sibling;return q(Le,Le.current&1|2),fe&&ra(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ht()>_s&&(t.flags|=128,o=!0,ar(i,!1),t.lanes=4194304)}else{if(!o)if(e=ps(c),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,As(t,e),ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!fe)return Ae(t),null}else 2*ht()-i.renderingStartTime>_s&&a!==536870912&&(t.flags|=128,o=!0,ar(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ht(),e.sibling=null,a=Le.current,q(Le,o?a&1|2:a&1),fe&&ra(t,i.treeForkCount),e):(Ae(t),null);case 22:case 23:return vt(t),Ml(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),a=t.updateQueue,a!==null&&As(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&O(yn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),oa(ze),Ae(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function qb(e,t){switch(gl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oa(ze),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qr(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(l(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Le),null;case 4:return Be(),null;case 10:return oa(t.type),null;case 22:case 23:return vt(t),Ml(),e!==null&&O(yn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return oa(ze),null;case 25:return null;default:return null}}function wh(e,t){switch(gl(t),t.tag){case 3:oa(ze),Be();break;case 26:case 27:case 5:qr(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:O(Le);break;case 10:oa(t.type);break;case 22:case 23:vt(t),Ml(),e!==null&&O(yn);break;case 24:oa(ze)}}function nr(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&e)===e){i=void 0;var c=a.create,f=a.inst;i=c(),f.destroy=i}a=a.next}while(a!==o)}}catch(p){be(t,t.return,p)}}function La(e,t,a){try{var i=t.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&e)===e){var f=i.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,o=t;var v=a,E=p;try{E()}catch(I){be(o,v,I)}}}i=i.next}while(i!==c)}}catch(I){be(t,t.return,I)}}function Ch(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ff(t,a)}catch(i){be(e,e.return,i)}}}function kh(e,t,a){a.props=Cn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){be(e,t,i)}}function ir(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(o){be(e,t,o)}}function Xt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(o){be(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){be(e,t,o)}else a.current=null}function Sh(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(o){be(e,e.return,o)}}function cc(e,t,a){try{var i=e.stateNode;ov(i,e.type,a,t),i[it]=t}catch(o){be(e,e.return,o)}}function Th(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=aa));else if(i!==4&&(i===27&&Ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(dc(e,t,a),e=e.sibling;e!==null;)dc(e,t,a),e=e.sibling}function Ds(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ds(e,t,a),e=e.sibling;e!==null;)Ds(e,t,a),e=e.sibling}function Eh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Je(t,i,a),t[Ye]=e,t[it]=a}catch(c){be(e,e.return,c)}}var fa=!1,He=!1,fc=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,$e=null;function zb(e,t){if(e=e.containerInfo,_c=Xs,e=jd(e),rl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var f=0,p=-1,v=-1,E=0,I=0,_=e,A=null;t:for(;;){for(var D;_!==a||o!==0&&_.nodeType!==3||(p=f+o),_!==c||i!==0&&_.nodeType!==3||(v=f+i),_.nodeType===3&&(f+=_.nodeValue.length),(D=_.firstChild)!==null;)A=_,_=D;for(;;){if(_===e)break t;if(A===a&&++E===o&&(p=f),A===c&&++I===i&&(v=f),(D=_.nextSibling)!==null)break;_=A,A=_.parentNode}_=D}a=p===-1||v===-1?null:{start:p,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:e,selectionRange:a},Xs=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)o=e[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,o=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var V=Cn(a.type,o);e=i.getSnapshotBeforeUpdate(V,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(J){be(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Lc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Ah(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),i&4&&nr(5,a);break;case 1:if(ma(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){be(a,a.return,f)}else{var o=Cn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){be(a,a.return,f)}}i&64&&Ch(a),i&512&&ir(a,a.return);break;case 3:if(ma(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ff(e,t)}catch(f){be(a,a.return,f)}}break;case 27:t===null&&i&4&&Eh(a);case 26:case 5:ma(e,a),t===null&&i&4&&Sh(a),i&512&&ir(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),i&4&&Mh(e,a);break;case 13:ma(e,a),i&4&&Nh(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kb.bind(null,a),pv(e,a))));break;case 22:if(i=a.memoizedState!==null||fa,!i){t=t!==null&&t.memoizedState!==null||He,o=fa;var c=He;fa=i,(He=t)&&!c?pa(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),fa=o,He=c}break;case 30:break;default:ma(e,a)}}function Dh(e){var t=e.alternate;t!==null&&(e.alternate=null,Dh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,st=!1;function ha(e,t,a){for(a=a.child;a!==null;)Ih(e,t,a),a=a.sibling}function Ih(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ai,a)}catch{}switch(a.tag){case 26:He||Xt(a,t),ha(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Xt(a,t);var i=De,o=st;Ga(a.type)&&(De=a.stateNode,st=!1),ha(e,t,a),hr(a.stateNode),De=i,st=o;break;case 5:He||Xt(a,t);case 6:if(i=De,o=st,De=null,ha(e,t,a),De=i,st=o,De!==null)if(st)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(c){be(a,t,c)}else try{De.removeChild(a.stateNode)}catch(c){be(a,t,c)}break;case 18:De!==null&&(st?(e=De,Cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hi(e)):Cm(De,a.stateNode));break;case 4:i=De,o=st,De=a.stateNode.containerInfo,st=!0,ha(e,t,a),De=i,st=o;break;case 0:case 11:case 14:case 15:La(2,a,t),He||La(4,a,t),ha(e,t,a);break;case 1:He||(Xt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&kh(a,t,i)),ha(e,t,a);break;case 21:ha(e,t,a);break;case 22:He=(i=He)||a.memoizedState!==null,ha(e,t,a),He=i;break;default:ha(e,t,a)}}function Mh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hi(e)}catch(a){be(t,t.return,a)}}}function Nh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hi(e)}catch(a){be(t,t.return,a)}}function Ub(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rh),t;default:throw Error(l(435,e.tag))}}function Is(e,t){var a=Ub(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var o=Xb.bind(null,e,i);i.then(o,o)}})}function ot(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var o=a[i],c=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(Ga(p.type)){De=p.stateNode,st=!1;break e}break;case 5:De=p.stateNode,st=!1;break e;case 3:case 4:De=p.stateNode.containerInfo,st=!0;break e}p=p.return}if(De===null)throw Error(l(160));Ih(c,f,o),De=null,st=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_h(t,e),t=t.sibling}var qt=null;function _h(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(t,e),lt(e),i&4&&(La(3,e,e.return),nr(3,e),La(5,e,e.return));break;case 1:ot(t,e),lt(e),i&512&&(He||a===null||Xt(a,a.return)),i&64&&fa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var o=qt;if(ot(t,e),lt(e),i&512&&(He||a===null||Xt(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Mi]||c[Ye]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(i),o.head.insertBefore(c,o.querySelector("head > title"))),Je(c,i,a),c[Ye]=e,We(c),i=c;break e;case"link":var f=_m("link","href",o).get(i+(a.href||""));if(f){for(var p=0;p<f.length;p++)if(c=f[p],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(p,1);break t}}c=o.createElement(i),Je(c,i,a),o.head.appendChild(c);break;case"meta":if(f=_m("meta","content",o).get(i+(a.content||""))){for(p=0;p<f.length;p++)if(c=f[p],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(p,1);break t}}c=o.createElement(i),Je(c,i,a),o.head.appendChild(c);break;default:throw Error(l(468,i))}c[Ye]=e,We(c),i=c}e.stateNode=i}else Pm(o,e.type,e.stateNode);else e.stateNode=Nm(o,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?Pm(o,e.type,e.stateNode):Nm(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&cc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ot(t,e),lt(e),i&512&&(He||a===null||Xt(a,a.return)),a!==null&&i&4&&cc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ot(t,e),lt(e),i&512&&(He||a===null||Xt(a,a.return)),e.flags&32){o=e.stateNode;try{Bn(o,"")}catch(V){be(e,e.return,V)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,cc(e,o,a!==null?a.memoizedProps:o)),i&1024&&(fc=!0);break;case 6:if(ot(t,e),lt(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(V){be(e,e.return,V)}}break;case 3:if(Ws=null,o=qt,qt=Gs(t.containerInfo),ot(t,e),qt=o,lt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(V){be(e,e.return,V)}fc&&(fc=!1,Ph(e));break;case 4:i=qt,qt=Gs(e.stateNode.containerInfo),ot(t,e),lt(e),qt=i;break;case 12:ot(t,e),lt(e);break;case 31:ot(t,e),lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Is(e,i)));break;case 13:ot(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ns=ht()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Is(e,i)));break;case 22:o=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,E=fa,I=He;if(fa=E||o,He=I||v,ot(t,e),He=I,fa=E,lt(e),i&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||v||fa||He||kn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(c=v.stateNode,o)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=v.stateNode;var _=v.memoizedProps.style,A=_!=null&&_.hasOwnProperty("display")?_.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(V){be(v,v.return,V)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=o?"":v.memoizedProps}catch(V){be(v,v.return,V)}}}else if(t.tag===18){if(a===null){v=t;try{var D=v.stateNode;o?km(D,!0):km(v.stateNode,!1)}catch(V){be(v,v.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Is(e,a))));break;case 19:ot(t,e),lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Is(e,i)));break;case 30:break;case 21:break;default:ot(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Th(i)){a=i;break}i=i.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var o=a.stateNode,c=uc(e);Ds(e,c,o);break;case 5:var f=a.stateNode;a.flags&32&&(Bn(f,""),a.flags&=-33);var p=uc(e);Ds(e,p,f);break;case 3:case 4:var v=a.stateNode.containerInfo,E=uc(e);dc(e,E,v);break;default:throw Error(l(161))}}catch(I){be(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ph(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ph(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ah(e,t.alternate,t),t=t.sibling}function kn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:La(4,t,t.return),kn(t);break;case 1:Xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&kh(t,t.return,a),kn(t);break;case 27:hr(t.stateNode);case 26:case 5:Xt(t,t.return),kn(t);break;case 22:t.memoizedState===null&&kn(t);break;case 30:kn(t);break;default:kn(t)}e=e.sibling}}function pa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,o=e,c=t,f=c.flags;switch(c.tag){case 0:case 11:case 15:pa(o,c,a),nr(4,c);break;case 1:if(pa(o,c,a),i=c,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(E){be(i,i.return,E)}if(i=c,o=i.updateQueue,o!==null){var p=i.stateNode;try{var v=o.shared.hiddenCallbacks;if(v!==null)for(o.shared.hiddenCallbacks=null,o=0;o<v.length;o++)df(v[o],p)}catch(E){be(i,i.return,E)}}a&&f&64&&Ch(c),ir(c,c.return);break;case 27:Eh(c);case 26:case 5:pa(o,c,a),a&&i===null&&f&4&&Sh(c),ir(c,c.return);break;case 12:pa(o,c,a);break;case 31:pa(o,c,a),a&&f&4&&Mh(o,c);break;case 13:pa(o,c,a),a&&f&4&&Nh(o,c);break;case 22:c.memoizedState===null&&pa(o,c,a),ir(c,c.return);break;case 30:break;default:pa(o,c,a)}t=t.sibling}}function hc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Gi(a))}function mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gi(e))}function zt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oh(e,t,a,i),t=t.sibling}function Oh(e,t,a,i){var o=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,i),o&2048&&nr(9,t);break;case 1:zt(e,t,a,i);break;case 3:zt(e,t,a,i),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gi(e)));break;case 12:if(o&2048){zt(e,t,a,i),e=t.stateNode;try{var c=t.memoizedProps,f=c.id,p=c.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){be(t,t.return,v)}}else zt(e,t,a,i);break;case 31:zt(e,t,a,i);break;case 13:zt(e,t,a,i);break;case 23:break;case 22:c=t.stateNode,f=t.alternate,t.memoizedState!==null?c._visibility&2?zt(e,t,a,i):rr(e,t):c._visibility&2?zt(e,t,a,i):(c._visibility|=2,ai(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),o&2048&&hc(f,t);break;case 24:zt(e,t,a,i),o&2048&&mc(t.alternate,t);break;default:zt(e,t,a,i)}}function ai(e,t,a,i,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,f=t,p=a,v=i,E=f.flags;switch(f.tag){case 0:case 11:case 15:ai(c,f,p,v,o),nr(8,f);break;case 23:break;case 22:var I=f.stateNode;f.memoizedState!==null?I._visibility&2?ai(c,f,p,v,o):rr(c,f):(I._visibility|=2,ai(c,f,p,v,o)),o&&E&2048&&hc(f.alternate,f);break;case 24:ai(c,f,p,v,o),o&&E&2048&&mc(f.alternate,f);break;default:ai(c,f,p,v,o)}t=t.sibling}}function rr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,o=i.flags;switch(i.tag){case 22:rr(a,i),o&2048&&hc(i.alternate,i);break;case 24:rr(a,i),o&2048&&mc(i.alternate,i);break;default:rr(a,i)}t=t.sibling}}var sr=8192;function ni(e,t,a){if(e.subtreeFlags&sr)for(e=e.child;e!==null;)Bh(e,t,a),e=e.sibling}function Bh(e,t,a){switch(e.tag){case 26:ni(e,t,a),e.flags&sr&&e.memoizedState!==null&&Rv(a,qt,e.memoizedState,e.memoizedProps);break;case 5:ni(e,t,a);break;case 3:case 4:var i=qt;qt=Gs(e.stateNode.containerInfo),ni(e,t,a),qt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=sr,sr=16777216,ni(e,t,a),sr=i):ni(e,t,a));break;default:ni(e,t,a)}}function Lh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];$e=i,qh(i,e)}Lh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jh(e),e=e.sibling}function jh(e){switch(e.tag){case 0:case 11:case 15:or(e),e.flags&2048&&La(9,e,e.return);break;case 3:or(e);break;case 12:or(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ms(e)):or(e);break;default:or(e)}}function Ms(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];$e=i,qh(i,e)}Lh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:La(8,t,t.return),Ms(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ms(t));break;default:Ms(t)}e=e.sibling}}function qh(e,t){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:La(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Gi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,$e=i;else e:for(a=e;$e!==null;){i=$e;var o=i.sibling,c=i.return;if(Dh(i),i===a){$e=null;break e}if(o!==null){o.return=c,$e=o;break e}$e=c}}}var Fb={getCacheForType:function(e){var t=Xe(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(ze).controller.signal}},Hb=typeof WeakMap=="function"?WeakMap:Map,pe=0,Te=null,le=null,ue=0,ye=0,xt=null,ja=!1,ii=!1,pc=!1,ga=0,Ne=0,qa=0,Sn=0,gc=0,wt=0,ri=0,lr=null,ct=null,yc=!1,Ns=0,zh=0,_s=1/0,Ps=null,za=null,Ve=0,Ua=null,si=null,ya=0,bc=0,vc=null,Uh=null,cr=0,xc=null;function Ct(){return(pe&2)!==0&&ue!==0?ue&-ue:M.T!==null?Ec():ad()}function Fh(){if(wt===0)if((ue&536870912)===0||fe){var e=Fr;Fr<<=1,(Fr&3932160)===0&&(Fr=262144),wt=e}else wt=536870912;return e=bt.current,e!==null&&(e.flags|=32),wt}function ut(e,t,a){(e===Te&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(oi(e,0),Fa(e,ue,wt,!1)),Ii(e,a),((pe&2)===0||e!==Te)&&(e===Te&&((pe&2)===0&&(Sn|=a),Ne===4&&Fa(e,ue,wt,!1)),Qt(e))}function Hh(e,t,a){if((pe&6)!==0)throw Error(l(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Di(e,t),o=i?Wb(e,t):Cc(e,t,!0),c=i;do{if(o===0){ii&&!i&&Fa(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!Gb(a)){o=Cc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;o=lr;var v=p.current.memoizedState.isDehydrated;if(v&&(oi(p,f).flags|=256),f=Cc(p,f,!1),f!==2){if(pc&&!v){p.errorRecoveryDisabledLanes|=c,Sn|=c,o=4;break e}c=ct,ct=o,c!==null&&(ct===null?ct=c:ct.push.apply(ct,c))}o=f}if(c=!1,o!==2)continue}}if(o===1){oi(e,0),Fa(e,t,0,!0);break}e:{switch(i=e,c=o,c){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Fa(i,t,wt,!ja);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(o=Ns+300-ht(),10<o)){if(Fa(i,t,wt,!ja),Gr(i,0,!0)!==0)break e;ya=t,i.timeoutHandle=xm(Gh.bind(null,i,a,ct,Ps,yc,t,wt,Sn,ri,ja,c,"Throttled",-0,0),o);break e}Gh(i,a,ct,Ps,yc,t,wt,Sn,ri,ja,c,null,-0,0)}}break}while(!0);Qt(e)}function Gh(e,t,a,i,o,c,f,p,v,E,I,_,A,D){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Bh(t,c,_);var V=(c&62914560)===c?Ns-ht():(c&4194048)===c?zh-ht():0;if(V=Av(_,V),V!==null){ya=c,e.cancelPendingCommit=V(Jh.bind(null,e,t,c,a,i,o,f,p,v,I,_,null,A,D)),Fa(e,c,f,!E);return}}Jh(e,t,c,a,i,o,f,p,v)}function Gb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var o=a[i],c=o.getSnapshot;o=o.value;try{if(!gt(c(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fa(e,t,a,i){t&=~gc,t&=~Sn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var o=t;0<o;){var c=31-pt(o),f=1<<c;i[c]=-1,o&=~f}a!==0&&Zu(e,a,t)}function Os(){return(pe&6)===0?(ur(0),!1):!0}function wc(){if(le!==null){if(ye===0)var e=le.return;else e=le,sa=pn=null,Ll(e),Qn=null,Wi=0,e=le;for(;e!==null;)wh(e.alternate,e),e=e.return;le=null}}function oi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ya=0,wc(),Te=e,le=a=ia(e.current,null),ue=t,ye=0,xt=null,ja=!1,ii=Di(e,t),pc=!1,ri=wt=gc=Sn=qa=Ne=0,ct=lr=null,yc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var o=31-pt(i),c=1<<o;t|=e[o],i&=~c}return ga=t,as(),a}function Vh(e,t){ie=null,M.H=er,t===Xn||t===us?(t=of(),ye=3):t===Tl?(t=of(),ye=4):ye=t===Zl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,le===null&&(Ne=1,Ss(e,At(t,e.current)))}function Wh(){var e=bt.current;return e===null?!0:(ue&4194048)===ue?Nt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Nt:!1}function $h(){var e=M.H;return M.H=er,e===null?er:e}function Yh(){var e=M.A;return M.A=Fb,e}function Bs(){Ne=4,ja||(ue&4194048)!==ue&&bt.current!==null||(ii=!0),(qa&134217727)===0&&(Sn&134217727)===0||Te===null||Fa(Te,ue,wt,!1)}function Cc(e,t,a){var i=pe;pe|=2;var o=$h(),c=Yh();(Te!==e||ue!==t)&&(Ps=null,oi(e,t)),t=!1;var f=Ne;e:do try{if(ye!==0&&le!==null){var p=le,v=xt;switch(ye){case 8:wc(),f=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var E=ye;if(ye=0,xt=null,li(e,p,v,E),a&&ii){f=0;break e}break;default:E=ye,ye=0,xt=null,li(e,p,v,E)}}Vb(),f=Ne;break}catch(I){Vh(e,I)}while(!0);return t&&e.shellSuspendCounter++,sa=pn=null,pe=i,M.H=o,M.A=c,le===null&&(Te=null,ue=0,as()),f}function Vb(){for(;le!==null;)Kh(le)}function Wb(e,t){var a=pe;pe|=2;var i=$h(),o=Yh();Te!==e||ue!==t?(Ps=null,_s=ht()+500,oi(e,t)):ii=Di(e,t);e:do try{if(ye!==0&&le!==null){t=le;var c=xt;t:switch(ye){case 1:ye=0,xt=null,li(e,t,c,1);break;case 2:case 9:if(rf(c)){ye=0,xt=null,Xh(t);break}t=function(){ye!==2&&ye!==9||Te!==e||(ye=7),Qt(e)},c.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:rf(c)?(ye=0,xt=null,Xh(t)):(ye=0,xt=null,li(e,t,c,7));break;case 5:var f=null;switch(le.tag){case 26:f=le.memoizedState;case 5:case 27:var p=le;if(f?Om(f):p.stateNode.complete){ye=0,xt=null;var v=p.sibling;if(v!==null)le=v;else{var E=p.return;E!==null?(le=E,Ls(E)):le=null}break t}}ye=0,xt=null,li(e,t,c,5);break;case 6:ye=0,xt=null,li(e,t,c,6);break;case 8:wc(),Ne=6;break e;default:throw Error(l(462))}}$b();break}catch(I){Vh(e,I)}while(!0);return sa=pn=null,M.H=i,M.A=o,pe=a,le!==null?0:(Te=null,ue=0,as(),Ne)}function $b(){for(;le!==null&&!gy();)Kh(le)}function Kh(e){var t=vh(e.alternate,e,ga);e.memoizedProps=e.pendingProps,t===null?Ls(e):le=t}function Xh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hh(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=hh(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:Ll(t);default:wh(a,t),t=le=$d(t,ga),t=vh(a,t,ga)}e.memoizedProps=e.pendingProps,t===null?Ls(e):le=t}function li(e,t,a,i){sa=pn=null,Ll(t),Qn=null,Wi=0;var o=t.return;try{if(Ob(e,o,t,a,ue)){Ne=1,Ss(e,At(a,e.current)),le=null;return}}catch(c){if(o!==null)throw le=o,c;Ne=1,Ss(e,At(a,e.current)),le=null;return}t.flags&32768?(fe||i===1?e=!0:ii||(ue&536870912)!==0?e=!1:(ja=e=!0,(i===2||i===9||i===3||i===6)&&(i=bt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Qh(t,e)):Ls(t)}function Ls(e){var t=e;do{if((t.flags&32768)!==0){Qh(t,ja);return}e=t.return;var a=jb(t.alternate,t,ga);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Ne===0&&(Ne=5)}function Qh(e,t){do{var a=qb(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Ne=6,le=null}function Jh(e,t,a,i,o,c,f,p,v){e.cancelPendingCommit=null;do js();while(Ve!==0);if((pe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(c=t.lanes|t.childLanes,c|=ul,Ey(e,a,c,f,p,v),e===Te&&(le=Te=null,ue=0),si=t,Ua=e,ya=a,bc=c,vc=o,Uh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qb(zr,function(){return nm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=M.T,M.T=null,o=j.p,j.p=2,f=pe,pe|=4;try{zb(e,t,a)}finally{pe=f,j.p=o,M.T=i}}Ve=1,Zh(),em(),tm()}}function Zh(){if(Ve===1){Ve=0;var e=Ua,t=si,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var i=j.p;j.p=2;var o=pe;pe|=4;try{_h(t,e);var c=Pc,f=jd(e.containerInfo),p=c.focusedElem,v=c.selectionRange;if(f!==p&&p&&p.ownerDocument&&Ld(p.ownerDocument.documentElement,p)){if(v!==null&&rl(p)){var E=v.start,I=v.end;if(I===void 0&&(I=E),"selectionStart"in p)p.selectionStart=E,p.selectionEnd=Math.min(I,p.value.length);else{var _=p.ownerDocument||document,A=_&&_.defaultView||window;if(A.getSelection){var D=A.getSelection(),V=p.textContent.length,J=Math.min(v.start,V),Ce=v.end===void 0?J:Math.min(v.end,V);!D.extend&&J>Ce&&(f=Ce,Ce=J,J=f);var k=Bd(p,J),x=Bd(p,Ce);if(k&&x&&(D.rangeCount!==1||D.anchorNode!==k.node||D.anchorOffset!==k.offset||D.focusNode!==x.node||D.focusOffset!==x.offset)){var T=_.createRange();T.setStart(k.node,k.offset),D.removeAllRanges(),J>Ce?(D.addRange(T),D.extend(x.node,x.offset)):(T.setEnd(x.node,x.offset),D.addRange(T))}}}}for(_=[],D=p;D=D.parentNode;)D.nodeType===1&&_.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<_.length;p++){var N=_[p];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Xs=!!_c,Pc=_c=null}finally{pe=o,j.p=i,M.T=a}}e.current=t,Ve=2}}function em(){if(Ve===2){Ve=0;var e=Ua,t=si,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var i=j.p;j.p=2;var o=pe;pe|=4;try{Ah(e,t.alternate,t)}finally{pe=o,j.p=i,M.T=a}}Ve=3}}function tm(){if(Ve===4||Ve===3){Ve=0,yy();var e=Ua,t=si,a=ya,i=Uh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,si=Ua=null,am(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(za=null),zo(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ai,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=M.T,o=j.p,j.p=2,M.T=null;try{for(var c=e.onRecoverableError,f=0;f<i.length;f++){var p=i[f];c(p.value,{componentStack:p.stack})}}finally{M.T=t,j.p=o}}(ya&3)!==0&&js(),Qt(e),o=e.pendingLanes,(a&261930)!==0&&(o&42)!==0?e===xc?cr++:(cr=0,xc=e):cr=0,ur(0)}}function am(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gi(t)))}function js(){return Zh(),em(),tm(),nm()}function nm(){if(Ve!==5)return!1;var e=Ua,t=bc;bc=0;var a=zo(ya),i=M.T,o=j.p;try{j.p=32>a?32:a,M.T=null,a=vc,vc=null;var c=Ua,f=ya;if(Ve=0,si=Ua=null,ya=0,(pe&6)!==0)throw Error(l(331));var p=pe;if(pe|=4,jh(c.current),Oh(c,c.current,f,a),pe=p,ur(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ai,c)}catch{}return!0}finally{j.p=o,M.T=i,am(e,t)}}function im(e,t,a){t=At(a,t),t=Jl(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(Ii(e,2),Qt(e))}function be(e,t,a){if(e.tag===3)im(e,e,a);else for(;t!==null;){if(t.tag===3){im(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(za===null||!za.has(i))){e=At(a,e),a=rh(2),i=Pa(t,a,2),i!==null&&(sh(a,i,t,e),Ii(i,2),Qt(i));break}}t=t.return}}function kc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Hb;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(a)||(pc=!0,o.add(a),e=Yb.bind(null,e,t,a),t.then(e,e))}function Yb(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(ue&a)===a&&(Ne===4||Ne===3&&(ue&62914560)===ue&&300>ht()-Ns?(pe&2)===0&&oi(e,0):gc|=a,ri===ue&&(ri=0)),Qt(e)}function rm(e,t){t===0&&(t=Ju()),e=fn(e,t),e!==null&&(Ii(e,t),Qt(e))}function Kb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),rm(e,a)}function Xb(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),rm(e,a)}function Qb(e,t){return Bo(e,t)}var qs=null,ci=null,Sc=!1,zs=!1,Tc=!1,Ha=0;function Qt(e){e!==ci&&e.next===null&&(ci===null?qs=ci=e:ci=ci.next=e),zs=!0,Sc||(Sc=!0,Zb())}function ur(e,t){if(!Tc&&zs){Tc=!0;do for(var a=!1,i=qs;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var c=0;else{var f=i.suspendedLanes,p=i.pingedLanes;c=(1<<31-pt(42|e)+1)-1,c&=o&~(f&~p),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,cm(i,c))}else c=ue,c=Gr(i,i===Te?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Di(i,c)||(a=!0,cm(i,c));i=i.next}while(a);Tc=!1}}function Jb(){sm()}function sm(){zs=Sc=!1;var e=0;Ha!==0&&cv()&&(e=Ha);for(var t=ht(),a=null,i=qs;i!==null;){var o=i.next,c=om(i,t);c===0?(i.next=null,a===null?qs=o:a.next=o,o===null&&(ci=a)):(a=i,(e!==0||(c&3)!==0)&&(zs=!0)),i=o}Ve!==0&&Ve!==5||ur(e),Ha!==0&&(Ha=0)}function om(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-pt(c),p=1<<f,v=o[f];v===-1?((p&a)===0||(p&i)!==0)&&(o[f]=Ty(p,t)):v<=t&&(e.expiredLanes|=p),c&=~p}if(t=Te,a=ue,a=Gr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Lo(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Di(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Lo(i),zo(a)){case 2:case 8:a=Xu;break;case 32:a=zr;break;case 268435456:a=Qu;break;default:a=zr}return i=lm.bind(null,e),a=Bo(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Lo(i),e.callbackPriority=2,e.callbackNode=null,2}function lm(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(js()&&e.callbackNode!==a)return null;var i=ue;return i=Gr(e,e===Te?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Hh(e,i,t),om(e,ht()),e.callbackNode!=null&&e.callbackNode===a?lm.bind(null,e):null)}function cm(e,t){if(js())return null;Hh(e,t,!0)}function Zb(){dv(function(){(pe&6)!==0?Bo(Ku,Jb):sm()})}function Ec(){if(Ha===0){var e=Yn;e===0&&(e=Ur,Ur<<=1,(Ur&261888)===0&&(Ur=256)),Ha=e}return Ha}function um(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yr(""+e)}function dm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ev(e,t,a,i,o){if(t==="submit"&&a&&a.stateNode===o){var c=um((o[it]||null).action),f=i.submitter;f&&(t=(t=f[it]||null)?um(t.formAction):f.getAttribute("formAction"),t!==null&&(c=t,f=null));var p=new Jr("action","action",null,i,o);e.push({event:p,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ha!==0){var v=f?dm(o,f):new FormData(o);Wl(a,{pending:!0,data:v,method:o.method,action:c},null,v)}}else typeof c=="function"&&(p.preventDefault(),v=f?dm(o,f):new FormData(o),Wl(a,{pending:!0,data:v,method:o.method,action:c},c,v))},currentTarget:o}]})}}for(var Rc=0;Rc<cl.length;Rc++){var Ac=cl[Rc],tv=Ac.toLowerCase(),av=Ac[0].toUpperCase()+Ac.slice(1);jt(tv,"on"+av)}jt(Ud,"onAnimationEnd"),jt(Fd,"onAnimationIteration"),jt(Hd,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(bb,"onTransitionRun"),jt(vb,"onTransitionStart"),jt(xb,"onTransitionCancel"),jt(Gd,"onTransitionEnd"),Pn("onMouseEnter",["mouseout","mouseover"]),Pn("onMouseLeave",["mouseout","mouseover"]),Pn("onPointerEnter",["pointerout","pointerover"]),Pn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dr));function fm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],o=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var f=i.length-1;0<=f;f--){var p=i[f],v=p.instance,E=p.currentTarget;if(p=p.listener,v!==c&&o.isPropagationStopped())break e;c=p,o.currentTarget=E;try{c(o)}catch(I){ts(I)}o.currentTarget=null,c=v}else for(f=0;f<i.length;f++){if(p=i[f],v=p.instance,E=p.currentTarget,p=p.listener,v!==c&&o.isPropagationStopped())break e;c=p,o.currentTarget=E;try{c(o)}catch(I){ts(I)}o.currentTarget=null,c=v}}}}function ce(e,t){var a=t[Uo];a===void 0&&(a=t[Uo]=new Set);var i=e+"__bubble";a.has(i)||(hm(t,e,2,!1),a.add(i))}function Dc(e,t,a){var i=0;t&&(i|=4),hm(a,e,i,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[Us]){e[Us]=!0,rd.forEach(function(a){a!=="selectionchange"&&(nv.has(a)||Dc(a,!1,e),Dc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,Dc("selectionchange",!1,t))}}function hm(e,t,a,i){switch(Fm(t)){case 2:var o=Mv;break;case 8:o=Nv;break;default:o=Vc}a=o.bind(null,t,a,e),o=void 0,!Xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Mc(e,t,a,i,o){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var p=i.stateNode.containerInfo;if(p===o)break;if(f===4)for(f=i.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===o)return;f=f.return}for(;p!==null;){if(f=Mn(p),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){i=c=f;continue e}p=p.parentNode}}i=i.return}yd(function(){var E=c,I=Yo(a),_=[];e:{var A=Vd.get(e);if(A!==void 0){var D=Jr,V=e;switch(e){case"keypress":if(Xr(a)===0)break e;case"keydown":case"keyup":D=Xy;break;case"focusin":V="focus",D=el;break;case"focusout":V="blur",D=el;break;case"beforeblur":case"afterblur":D=el;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Zy;break;case Ud:case Fd:case Hd:D=Uy;break;case Gd:D=tb;break;case"scroll":case"scrollend":D=By;break;case"wheel":D=nb;break;case"copy":case"cut":case"paste":D=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Cd;break;case"toggle":case"beforetoggle":D=rb}var J=(t&4)!==0,Ce=!J&&(e==="scroll"||e==="scrollend"),k=J?A!==null?A+"Capture":null:A;J=[];for(var x=E,T;x!==null;){var N=x;if(T=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||T===null||k===null||(N=_i(x,k),N!=null&&J.push(fr(x,N,T))),Ce)break;x=x.return}0<J.length&&(A=new D(A,V,null,a,I),_.push({event:A,listeners:J}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",A&&a!==$o&&(V=a.relatedTarget||a.fromElement)&&(Mn(V)||V[In]))break e;if((D||A)&&(A=I.window===I?I:(A=I.ownerDocument)?A.defaultView||A.parentWindow:window,D?(V=a.relatedTarget||a.toElement,D=E,V=V?Mn(V):null,V!==null&&(Ce=h(V),J=V.tag,V!==Ce||J!==5&&J!==27&&J!==6)&&(V=null)):(D=null,V=E),D!==V)){if(J=xd,N="onMouseLeave",k="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(J=Cd,N="onPointerLeave",k="onPointerEnter",x="pointer"),Ce=D==null?A:Ni(D),T=V==null?A:Ni(V),A=new J(N,x+"leave",D,a,I),A.target=Ce,A.relatedTarget=T,N=null,Mn(I)===E&&(J=new J(k,x+"enter",V,a,I),J.target=T,J.relatedTarget=Ce,N=J),Ce=N,D&&V)t:{for(J=iv,k=D,x=V,T=0,N=k;N;N=J(N))T++;N=0;for(var K=x;K;K=J(K))N++;for(;0<T-N;)k=J(k),T--;for(;0<N-T;)x=J(x),N--;for(;T--;){if(k===x||x!==null&&k===x.alternate){J=k;break t}k=J(k),x=J(x)}J=null}else J=null;D!==null&&mm(_,A,D,J,!1),V!==null&&Ce!==null&&mm(_,Ce,V,J,!0)}}e:{if(A=E?Ni(E):window,D=A.nodeName&&A.nodeName.toLowerCase(),D==="select"||D==="input"&&A.type==="file")var he=Id;else if(Ad(A))if(Md)he=pb;else{he=hb;var $=fb}else D=A.nodeName,!D||D.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&Wo(E.elementType)&&(he=Id):he=mb;if(he&&(he=he(e,E))){Dd(_,he,a,I);break e}$&&$(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&Vo(A,"number",A.value)}switch($=E?Ni(E):window,e){case"focusin":(Ad($)||$.contentEditable==="true")&&(zn=$,sl=E,Ui=null);break;case"focusout":Ui=sl=zn=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,qd(_,a,I);break;case"selectionchange":if(yb)break;case"keydown":case"keyup":qd(_,a,I)}var se;if(al)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else qn?Ed(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(kd&&a.locale!=="ko"&&(qn||de!=="onCompositionStart"?de==="onCompositionEnd"&&qn&&(se=bd()):(Ra=I,Qo="value"in Ra?Ra.value:Ra.textContent,qn=!0)),$=Fs(E,de),0<$.length&&(de=new wd(de,e,null,a,I),_.push({event:de,listeners:$}),se?de.data=se:(se=Rd(a),se!==null&&(de.data=se)))),(se=ob?lb(e,a):cb(e,a))&&(de=Fs(E,"onBeforeInput"),0<de.length&&($=new wd("onBeforeInput","beforeinput",null,a,I),_.push({event:$,listeners:de}),$.data=se)),ev(_,e,E,a,I)}fm(_,t)})}function fr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Fs(e,t){for(var a=t+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=_i(e,a),o!=null&&i.unshift(fr(e,o,c)),o=_i(e,t),o!=null&&i.push(fr(e,o,c))),e.tag===3)return i;e=e.return}return[]}function iv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mm(e,t,a,i,o){for(var c=t._reactName,f=[];a!==null&&a!==i;){var p=a,v=p.alternate,E=p.stateNode;if(p=p.tag,v!==null&&v===i)break;p!==5&&p!==26&&p!==27||E===null||(v=E,o?(E=_i(a,c),E!=null&&f.unshift(fr(a,E,v))):o||(E=_i(a,c),E!=null&&f.push(fr(a,E,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var rv=/\r\n?/g,sv=/\u0000|\uFFFD/g;function pm(e){return(typeof e=="string"?e:""+e).replace(rv,`
`).replace(sv,"")}function gm(e,t){return t=pm(t),pm(e)===t}function we(e,t,a,i,o,c){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Bn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Bn(e,""+i);break;case"className":Wr(e,"class",i);break;case"tabIndex":Wr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(e,a,i);break;case"style":pd(e,i,c);break;case"data":if(t!=="object"){Wr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Yr(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",o.name,o,null),we(e,t,"formEncType",o.formEncType,o,null),we(e,t,"formMethod",o.formMethod,o,null),we(e,t,"formTarget",o.formTarget,o,null)):(we(e,t,"encType",o.encType,o,null),we(e,t,"method",o.method,o,null),we(e,t,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Yr(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=aa);break;case"onScroll":i!=null&&ce("scroll",e);break;case"onScrollEnd":i!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(a=i.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Yr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ce("beforetoggle",e),ce("toggle",e),Vr(e,"popover",i);break;case"xlinkActuate":ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ta(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ta(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ta(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ta(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Py.get(a)||a,Vr(e,a,i))}}function Nc(e,t,a,i,o,c){switch(a){case"style":pd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(a=i.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Bn(e,i):(typeof i=="number"||typeof i=="bigint")&&Bn(e,""+i);break;case"onScroll":i!=null&&ce("scroll",e);break;case"onScrollEnd":i!=null&&ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),c=e[it]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,o);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Vr(e,a,i)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var i=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var f=a[c];if(f!=null)switch(c){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:we(e,t,c,f,a,null)}}o&&we(e,t,"srcSet",a.srcSet,a,null),i&&we(e,t,"src",a.src,a,null);return;case"input":ce("invalid",e);var p=c=f=o=null,v=null,E=null;for(i in a)if(a.hasOwnProperty(i)){var I=a[i];if(I!=null)switch(i){case"name":o=I;break;case"type":f=I;break;case"checked":v=I;break;case"defaultChecked":E=I;break;case"value":c=I;break;case"defaultValue":p=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(l(137,t));break;default:we(e,t,i,I,a,null)}}dd(e,c,p,v,E,f,o,!1);return;case"select":ce("invalid",e),i=f=c=null;for(o in a)if(a.hasOwnProperty(o)&&(p=a[o],p!=null))switch(o){case"value":c=p;break;case"defaultValue":f=p;break;case"multiple":i=p;default:we(e,t,o,p,a,null)}t=c,a=f,e.multiple=!!i,t!=null?On(e,!!i,t,!1):a!=null&&On(e,!!i,a,!0);return;case"textarea":ce("invalid",e),c=o=i=null;for(f in a)if(a.hasOwnProperty(f)&&(p=a[f],p!=null))switch(f){case"value":i=p;break;case"defaultValue":o=p;break;case"children":c=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(l(91));break;default:we(e,t,f,p,a,null)}hd(e,i,o,c);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(i=a[v],i!=null))switch(v){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:we(e,t,v,i,a,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(i=0;i<dr.length;i++)ce(dr[i],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(i=a[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:we(e,t,E,i,a,null)}return;default:if(Wo(t)){for(I in a)a.hasOwnProperty(I)&&(i=a[I],i!==void 0&&Nc(e,t,I,i,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(i=a[p],i!=null&&we(e,t,p,i,a,null))}function ov(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,f=null,p=null,v=null,E=null,I=null;for(D in a){var _=a[D];if(a.hasOwnProperty(D)&&_!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=_;default:i.hasOwnProperty(D)||we(e,t,D,null,i,_)}}for(var A in i){var D=i[A];if(_=a[A],i.hasOwnProperty(A)&&(D!=null||_!=null))switch(A){case"type":c=D;break;case"name":o=D;break;case"checked":E=D;break;case"defaultChecked":I=D;break;case"value":f=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:D!==_&&we(e,t,A,D,i,_)}}Go(e,f,p,v,E,I,c,o);return;case"select":D=f=p=A=null;for(c in a)if(v=a[c],a.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":D=v;default:i.hasOwnProperty(c)||we(e,t,c,null,i,v)}for(o in i)if(c=i[o],v=a[o],i.hasOwnProperty(o)&&(c!=null||v!=null))switch(o){case"value":A=c;break;case"defaultValue":p=c;break;case"multiple":f=c;default:c!==v&&we(e,t,o,c,i,v)}t=p,a=f,i=D,A!=null?On(e,!!a,A,!1):!!i!=!!a&&(t!=null?On(e,!!a,t,!0):On(e,!!a,a?[]:"",!1));return;case"textarea":D=A=null;for(p in a)if(o=a[p],a.hasOwnProperty(p)&&o!=null&&!i.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:we(e,t,p,null,i,o)}for(f in i)if(o=i[f],c=a[f],i.hasOwnProperty(f)&&(o!=null||c!=null))switch(f){case"value":A=o;break;case"defaultValue":D=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&we(e,t,f,o,i,c)}fd(e,A,D);return;case"option":for(var V in a)if(A=a[V],a.hasOwnProperty(V)&&A!=null&&!i.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:we(e,t,V,null,i,A)}for(v in i)if(A=i[v],D=a[v],i.hasOwnProperty(v)&&A!==D&&(A!=null||D!=null))switch(v){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:we(e,t,v,A,i,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)A=a[J],a.hasOwnProperty(J)&&A!=null&&!i.hasOwnProperty(J)&&we(e,t,J,null,i,A);for(E in i)if(A=i[E],D=a[E],i.hasOwnProperty(E)&&A!==D&&(A!=null||D!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(l(137,t));break;default:we(e,t,E,A,i,D)}return;default:if(Wo(t)){for(var Ce in a)A=a[Ce],a.hasOwnProperty(Ce)&&A!==void 0&&!i.hasOwnProperty(Ce)&&Nc(e,t,Ce,void 0,i,A);for(I in i)A=i[I],D=a[I],!i.hasOwnProperty(I)||A===D||A===void 0&&D===void 0||Nc(e,t,I,A,i,D);return}}for(var k in a)A=a[k],a.hasOwnProperty(k)&&A!=null&&!i.hasOwnProperty(k)&&we(e,t,k,null,i,A);for(_ in i)A=i[_],D=a[_],!i.hasOwnProperty(_)||A===D||A==null&&D==null||we(e,t,_,A,i,D)}function ym(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var o=a[i],c=o.transferSize,f=o.initiatorType,p=o.duration;if(c&&p&&ym(f)){for(f=0,p=o.responseEnd,i+=1;i<a.length;i++){var v=a[i],E=v.startTime;if(E>p)break;var I=v.transferSize,_=v.initiatorType;I&&ym(_)&&(v=v.responseEnd,f+=I*(v<p?1:(p-E)/(v-E)))}if(--i,t+=8*(c+f)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _c=null,Pc=null;function Hs(e){return e.nodeType===9?e:e.ownerDocument}function bm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Oc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bc=null;function cv(){var e=window.event;return e&&e.type==="popstate"?e===Bc?!1:(Bc=e,!0):(Bc=null,!1)}var xm=typeof setTimeout=="function"?setTimeout:void 0,uv=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,dv=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(e){return wm.resolve(null).then(e).catch(fv)}:xm;function fv(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function Cm(e,t){var a=t,i=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(o),hi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")hr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hr(a);for(var c=a.firstChild;c;){var f=c.nextSibling,p=c.nodeName;c[Mi]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=f}}else a==="body"&&hr(e.ownerDocument.body);a=o}while(a);hi(t)}function km(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Lc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lc(a),Fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hv(e,t,a,i){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Mi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function mv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function jc(e){return e.data==="$?"||e.data==="$~"}function qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pv(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zc=null;function Tm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Em(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Rm(e,t,a){switch(t=Hs(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function hr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fo(e)}var Pt=new Map,Am=new Set;function Gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=j.d;j.d={f:gv,r:yv,D:bv,C:vv,L:xv,m:wv,X:kv,S:Cv,M:Sv};function gv(){var e=ba.f(),t=Os();return e||t}function yv(e){var t=Nn(e);t!==null&&t.tag===5&&t.type==="form"?Vf(t):ba.r(e)}var ui=typeof document>"u"?null:document;function Dm(e,t,a){var i=ui;if(i&&typeof t=="string"&&t){var o=Et(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Am.has(o)||(Am.add(o),e={rel:e,crossOrigin:a,href:t},i.querySelector(o)===null&&(t=i.createElement("link"),Je(t,"link",e),We(t),i.head.appendChild(t)))}}function bv(e){ba.D(e),Dm("dns-prefetch",e,null)}function vv(e,t){ba.C(e,t),Dm("preconnect",e,t)}function xv(e,t,a){ba.L(e,t,a);var i=ui;if(i&&e&&t){var o='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Et(a.imageSizes)+'"]')):o+='[href="'+Et(e)+'"]';var c=o;switch(t){case"style":c=di(e);break;case"script":c=fi(e)}Pt.has(c)||(e=C({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Pt.set(c,e),i.querySelector(o)!==null||t==="style"&&i.querySelector(mr(c))||t==="script"&&i.querySelector(pr(c))||(t=i.createElement("link"),Je(t,"link",e),We(t),i.head.appendChild(t)))}}function wv(e,t){ba.m(e,t);var a=ui;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Et(i)+'"][href="'+Et(e)+'"]',c=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=fi(e)}if(!Pt.has(c)&&(e=C({rel:"modulepreload",href:e},t),Pt.set(c,e),a.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pr(c)))return}i=a.createElement("link"),Je(i,"link",e),We(i),a.head.appendChild(i)}}}function Cv(e,t,a){ba.S(e,t,a);var i=ui;if(i&&e){var o=_n(i).hoistableStyles,c=di(e);t=t||"default";var f=o.get(c);if(!f){var p={loading:0,preload:null};if(f=i.querySelector(mr(c)))p.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Pt.get(c))&&Uc(e,a);var v=f=i.createElement("link");We(v),Je(v,"link",e),v._p=new Promise(function(E,I){v.onload=E,v.onerror=I}),v.addEventListener("load",function(){p.loading|=1}),v.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Vs(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:p},o.set(c,f)}}}function kv(e,t){ba.X(e,t);var a=ui;if(a&&e){var i=_n(a).hoistableScripts,o=fi(e),c=i.get(o);c||(c=a.querySelector(pr(o)),c||(e=C({src:e,async:!0},t),(t=Pt.get(o))&&Fc(e,t),c=a.createElement("script"),We(c),Je(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function Sv(e,t){ba.M(e,t);var a=ui;if(a&&e){var i=_n(a).hoistableScripts,o=fi(e),c=i.get(o);c||(c=a.querySelector(pr(o)),c||(e=C({src:e,async:!0,type:"module"},t),(t=Pt.get(o))&&Fc(e,t),c=a.createElement("script"),We(c),Je(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function Im(e,t,a,i){var o=(o=oe.current)?Gs(o):null;if(!o)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=di(a.href),a=_n(o).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=di(a.href);var c=_n(o).hoistableStyles,f=c.get(e);if(f||(o=o.ownerDocument||o,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=o.querySelector(mr(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pt.set(e,a),c||Tv(o,e,a,f.state))),t&&i===null)throw Error(l(528,""));return f}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fi(a),a=_n(o).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function di(e){return'href="'+Et(e)+'"'}function mr(e){return'link[rel="stylesheet"]['+e+"]"}function Mm(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Tv(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Je(t,"link",a),We(t),e.head.appendChild(t))}function fi(e){return'[src="'+Et(e)+'"]'}function pr(e){return"script[async]"+e}function Nm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Et(a.href)+'"]');if(i)return t.instance=i,We(i),i;var o=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),We(i),Je(i,"style",o),Vs(i,a.precedence,e),t.instance=i;case"stylesheet":o=di(a.href);var c=e.querySelector(mr(o));if(c)return t.state.loading|=4,t.instance=c,We(c),c;i=Mm(a),(o=Pt.get(o))&&Uc(i,o),c=(e.ownerDocument||e).createElement("link"),We(c);var f=c;return f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),Je(c,"link",i),t.state.loading|=4,Vs(c,a.precedence,e),t.instance=c;case"script":return c=fi(a.src),(o=e.querySelector(pr(c)))?(t.instance=o,We(o),o):(i=a,(o=Pt.get(c))&&(i=C({},a),Fc(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),We(o),Je(o,"link",i),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Vs(i,a.precedence,e));return t.instance}function Vs(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,c=o,f=0;f<i.length;f++){var p=i[f];if(p.dataset.precedence===t)c=p;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ws=null;function _m(e,t,a){if(Ws===null){var i=new Map,o=Ws=new Map;o.set(a,i)}else o=Ws,i=o.get(a),i||(i=new Map,o.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var c=a[o];if(!(c[Mi]||c[Ye]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(t)||"";f=e+f;var p=i.get(f);p?p.push(c):i.set(f,[c])}}return i}function Pm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ev(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Om(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Rv(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=di(i.href),c=t.querySelector(mr(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$s.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,We(c);return}c=t.ownerDocument||t,i=Mm(i),(o=Pt.get(o))&&Uc(i,o),c=c.createElement("link"),We(c);var f=c;f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),Je(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$s.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Hc=0;function Av(e,t){return e.stylesheets&&e.count===0&&Ks(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Hc===0&&(Hc=62500*lv());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ks(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Hc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function $s(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ks(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ys=null;function Ks(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ys=new Map,t.forEach(Dv,e),Ys=null,$s.call(e))}function Dv(e,t){if(!(t.state.loading&4)){var a=Ys.get(e);if(a)var i=a.get(null);else{a=new Map,Ys.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var f=o[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),i=f)}i&&a.set(null,i)}o=t.instance,f=o.getAttribute("data-precedence"),c=a.get(f)||i,c===i&&a.set(null,o),a.set(f,o),this.count++,i=$s.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var gr={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Iv(e,t,a,i,o,c,f,p,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.hiddenUpdates=jo(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Bm(e,t,a,i,o,c,f,p,v,E,I,_){return e=new Iv(e,t,a,f,v,E,I,_,p),t=1,c===!0&&(t|=24),c=yt(3,null,null,t),e.current=c,c.stateNode=e,t=Cl(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:t},El(c),e}function Lm(e){return e?(e=Hn,e):Hn}function jm(e,t,a,i,o,c){o=Lm(o),i.context===null?i.context=o:i.pendingContext=o,i=_a(t),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=Pa(e,i,t),a!==null&&(ut(a,e,t),Yi(a,e,t))}function qm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Gc(e,t){qm(e,t),(e=e.alternate)&&qm(e,t)}function zm(e){if(e.tag===13||e.tag===31){var t=fn(e,67108864);t!==null&&ut(t,e,67108864),Gc(e,67108864)}}function Um(e){if(e.tag===13||e.tag===31){var t=Ct();t=qo(t);var a=fn(e,t);a!==null&&ut(a,e,t),Gc(e,t)}}var Xs=!0;function Mv(e,t,a,i){var o=M.T;M.T=null;var c=j.p;try{j.p=2,Vc(e,t,a,i)}finally{j.p=c,M.T=o}}function Nv(e,t,a,i){var o=M.T;M.T=null;var c=j.p;try{j.p=8,Vc(e,t,a,i)}finally{j.p=c,M.T=o}}function Vc(e,t,a,i){if(Xs){var o=Wc(i);if(o===null)Mc(e,t,i,Qs,a),Hm(e,i);else if(Pv(o,e,t,a,i))i.stopPropagation();else if(Hm(e,i),t&4&&-1<_v.indexOf(e)){for(;o!==null;){var c=Nn(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=on(c.pendingLanes);if(f!==0){var p=c;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var v=1<<31-pt(f);p.entanglements[1]|=v,f&=~v}Qt(c),(pe&6)===0&&(_s=ht()+500,ur(0))}}break;case 31:case 13:p=fn(c,2),p!==null&&ut(p,c,2),Os(),Gc(c,2)}if(c=Wc(i),c===null&&Mc(e,t,i,Qs,a),c===o)break;o=c}o!==null&&i.stopPropagation()}else Mc(e,t,i,null,a)}}function Wc(e){return e=Yo(e),$c(e)}var Qs=null;function $c(e){if(Qs=null,e=Mn(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=m(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qs=e,null}function Fm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(by()){case Ku:return 2;case Xu:return 8;case zr:case vy:return 32;case Qu:return 268435456;default:return 32}default:return 32}}var Yc=!1,Va=null,Wa=null,$a=null,yr=new Map,br=new Map,Ya=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hm(e,t){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function vr(e,t,a,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Nn(t),t!==null&&zm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Pv(e,t,a,i,o){switch(t){case"focusin":return Va=vr(Va,e,t,a,i,o),!0;case"dragenter":return Wa=vr(Wa,e,t,a,i,o),!0;case"mouseover":return $a=vr($a,e,t,a,i,o),!0;case"pointerover":var c=o.pointerId;return yr.set(c,vr(yr.get(c)||null,e,t,a,i,o)),!0;case"gotpointercapture":return c=o.pointerId,br.set(c,vr(br.get(c)||null,e,t,a,i,o)),!0}return!1}function Gm(e){var t=Mn(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=m(a),t!==null){e.blockedOn=t,nd(e.priority,function(){Um(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,nd(e.priority,function(){Um(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);$o=i,a.target.dispatchEvent(i),$o=null}else return t=Nn(a),t!==null&&zm(t),e.blockedOn=a,!1;t.shift()}return!0}function Vm(e,t,a){Js(e)&&a.delete(t)}function Ov(){Yc=!1,Va!==null&&Js(Va)&&(Va=null),Wa!==null&&Js(Wa)&&(Wa=null),$a!==null&&Js($a)&&($a=null),yr.forEach(Vm),br.forEach(Vm)}function Zs(e,t){e.blockedOn===t&&(e.blockedOn=null,Yc||(Yc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ov)))}var eo=null;function Wm(e){eo!==e&&(eo=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){eo===e&&(eo=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],o=e[t+2];if(typeof i!="function"){if($c(i||a)===null)continue;break}var c=Nn(a);c!==null&&(e.splice(t,3),t-=3,Wl(c,{pending:!0,data:o,method:a.method,action:i},i,o))}}))}function hi(e){function t(v){return Zs(v,e)}Va!==null&&Zs(Va,e),Wa!==null&&Zs(Wa,e),$a!==null&&Zs($a,e),yr.forEach(t),br.forEach(t);for(var a=0;a<Ya.length;a++){var i=Ya[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Gm(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var o=a[i],c=a[i+1],f=o[it]||null;if(typeof c=="function")f||Wm(a);else if(f){var p=null;if(c&&c.hasAttribute("formAction")){if(o=c,f=c[it]||null)p=f.formAction;else if($c(o)!==null)continue}else p=f.action;typeof p=="function"?a[i+1]=p:(a.splice(i,3),i-=3),Wm(a)}}}function $m(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(f){return o=f})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Kc(e){this._internalRoot=e}to.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,i=Ct();jm(a,i,e,t,null,null)},to.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jm(e.current,2,null,e,null,null),Os(),t[In]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ya.length&&t!==0&&t<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Gm(e)}};var Ym=n.version;if(Ym!=="19.2.5")throw Error(l(527,Ym,"19.2.5"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=g(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Bv={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Ai=ao.inject(Bv),mt=ao}catch{}}return wr.createRoot=function(e,t){if(!u(e))throw Error(l(299));var a=!1,i="",o=th,c=ah,f=nh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Bm(e,1,!1,null,null,a,i,null,o,c,f,$m),e[In]=t.current,Ic(e),new Kc(t)},wr.hydrateRoot=function(e,t,a){if(!u(e))throw Error(l(299));var i=!1,o="",c=th,f=ah,p=nh,v=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=Bm(e,1,!0,t,a??null,i,o,v,c,f,p,$m),t.context=Lm(null),a=t.current,i=Ct(),i=qo(i),o=_a(i),o.callback=null,Pa(a,o,i),a=i,t.current.lanes=a,Ii(t,a),Qt(t),e[In]=t.current,Ic(e),new to(t)},wr.version="19.2.5",wr}var ip;function Wv(){if(ip)return Jc.exports;ip=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Jc.exports=Vv(),Jc.exports}var $v=Wv();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rp="popstate";function sp(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Yv(r={}){function n(l,u){var g;let h=(g=u.state)==null?void 0:g.masked,{pathname:m,search:b,hash:y}=h||l.location;return fu("",{pathname:m,search:b,hash:y},u.state&&u.state.usr||null,u.state&&u.state.key||"default",h?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function s(l,u){return typeof u=="string"?u:Tr(u)}return Xv(n,s,null,r)}function Ie(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function Vt(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Kv(){return Math.random().toString(36).substring(2,10)}function op(r,n){return{usr:r.state,key:r.key,idx:n,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function fu(r,n,s=null,l,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof n=="string"?ki(n):n,state:s,key:n&&n.key||l||Kv(),unstable_mask:u}}function Tr({pathname:r="/",search:n="",hash:s=""}){return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function ki(r){let n={};if(r){let s=r.indexOf("#");s>=0&&(n.hash=r.substring(s),r=r.substring(0,s));let l=r.indexOf("?");l>=0&&(n.search=r.substring(l),r=r.substring(0,l)),r&&(n.pathname=r)}return n}function Xv(r,n,s,l={}){let{window:u=document.defaultView,v5Compat:h=!1}=l,m=u.history,b="POP",y=null,g=S();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function S(){return(m.state||{idx:null}).idx}function C(){b="POP";let U=S(),B=U==null?null:U-g;g=U,y&&y({action:b,location:z.location,delta:B})}function P(U,B){b="PUSH";let Q=sp(U)?U:fu(z.location,U,B);g=S()+1;let L=op(Q,g),X=z.createHref(Q.unstable_mask||Q);try{m.pushState(L,"",X)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;u.location.assign(X)}h&&y&&y({action:b,location:z.location,delta:1})}function F(U,B){b="REPLACE";let Q=sp(U)?U:fu(z.location,U,B);g=S();let L=op(Q,g),X=z.createHref(Q.unstable_mask||Q);m.replaceState(L,"",X),h&&y&&y({action:b,location:z.location,delta:0})}function H(U){return Qv(U)}let z={get action(){return b},get location(){return r(u,m)},listen(U){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(rp,C),y=U,()=>{u.removeEventListener(rp,C),y=null}},createHref(U){return n(u,U)},createURL:H,encodeLocation(U){let B=H(U);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:P,replace:F,go(U){return m.go(U)}};return z}function Qv(r,n=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(s,"No window.location.(origin|href) available to create URL");let l=typeof r=="string"?r:Tr(r);return l=l.replace(/ $/,"%20"),!n&&l.startsWith("//")&&(l=s+l),new URL(l,s)}function $p(r,n,s="/"){return Jv(r,n,s,!1)}function Jv(r,n,s,l){let u=typeof n=="string"?ki(n):n,h=Ca(u.pathname||"/",s);if(h==null)return null;let m=Yp(r);Zv(m);let b=null;for(let y=0;b==null&&y<m.length;++y){let g=u0(h);b=l0(m[y],g,l)}return b}function Yp(r,n=[],s=[],l="",u=!1){let h=(m,b,y=u,g)=>{let S={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:b,route:m};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(l)&&y)return;Ie(S.relativePath.startsWith(l),`Absolute route path "${S.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(l.length)}let C=Ht([l,S.relativePath]),P=s.concat(S);m.children&&m.children.length>0&&(Ie(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),Yp(m.children,n,P,C,y)),!(m.path==null&&!m.index)&&n.push({path:C,score:s0(C,m.index),routesMeta:P})};return r.forEach((m,b)=>{var y;if(m.path===""||!((y=m.path)!=null&&y.includes("?")))h(m,b);else for(let g of Kp(m.path))h(m,b,!0,g)}),n}function Kp(r){let n=r.split("/");if(n.length===0)return[];let[s,...l]=n,u=s.endsWith("?"),h=s.replace(/\?$/,"");if(l.length===0)return u?[h,""]:[h];let m=Kp(l.join("/")),b=[];return b.push(...m.map(y=>y===""?h:[h,y].join("/"))),u&&b.push(...m),b.map(y=>r.startsWith("/")&&y===""?"/":y)}function Zv(r){r.sort((n,s)=>n.score!==s.score?s.score-n.score:o0(n.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var e0=/^:[\w-]+$/,t0=3,a0=2,n0=1,i0=10,r0=-2,lp=r=>r==="*";function s0(r,n){let s=r.split("/"),l=s.length;return s.some(lp)&&(l+=r0),n&&(l+=a0),s.filter(u=>!lp(u)).reduce((u,h)=>u+(e0.test(h)?t0:h===""?n0:i0),l)}function o0(r,n){return r.length===n.length&&r.slice(0,-1).every((l,u)=>l===n[u])?r[r.length-1]-n[n.length-1]:0}function l0(r,n,s=!1){let{routesMeta:l}=r,u={},h="/",m=[];for(let b=0;b<l.length;++b){let y=l[b],g=b===l.length-1,S=h==="/"?n:n.slice(h.length)||"/",C=mo({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},S),P=y.route;if(!C&&g&&s&&!l[l.length-1].route.index&&(C=mo({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},S)),!C)return null;Object.assign(u,C.params),m.push({params:u,pathname:Ht([h,C.pathname]),pathnameBase:m0(Ht([h,C.pathnameBase])),route:P}),C.pathnameBase!=="/"&&(h=Ht([h,C.pathnameBase]))}return m}function mo(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,l]=c0(r.path,r.caseSensitive,r.end),u=n.match(s);if(!u)return null;let h=u[0],m=h.replace(/(.)\/+$/,"$1"),b=u.slice(1);return{params:l.reduce((g,{paramName:S,isOptional:C},P)=>{if(S==="*"){let H=b[P]||"";m=h.slice(0,h.length-H.length).replace(/(.)\/+$/,"$1")}const F=b[P];return C&&!F?g[S]=void 0:g[S]=(F||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:m,pattern:r}}function c0(r,n=!1,s=!0){Vt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,b,y,g,S)=>{if(l.push({paramName:b,isOptional:y!=null}),y){let C=S.charAt(g+m.length);return C&&C!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(l.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,n?void 0:"i"),l]}function u0(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Vt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),r}}function Ca(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let s=n.endsWith("/")?n.length-1:n.length,l=r.charAt(s);return l&&l!=="/"?null:r.slice(s)||"/"}var d0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function f0(r,n="/"){let{pathname:s,search:l="",hash:u=""}=typeof r=="string"?ki(r):r,h;return s?(s=Xp(s),s.startsWith("/")?h=cp(s.substring(1),"/"):h=cp(s,n)):h=n,{pathname:h,search:p0(l),hash:g0(u)}}function cp(r,n){let s=po(n).split("/");return r.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function au(r,n,s,l){return`Cannot include a '${r}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function h0(r){return r.filter((n,s)=>s===0||n.route.path&&n.route.path.length>0)}function Eu(r){let n=h0(r);return n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase)}function So(r,n,s,l=!1){let u;typeof r=="string"?u=ki(r):(u={...r},Ie(!u.pathname||!u.pathname.includes("?"),au("?","pathname","search",u)),Ie(!u.pathname||!u.pathname.includes("#"),au("#","pathname","hash",u)),Ie(!u.search||!u.search.includes("#"),au("#","search","hash",u)));let h=r===""||u.pathname==="",m=h?"/":u.pathname,b;if(m==null)b=s;else{let C=n.length-1;if(!l&&m.startsWith("..")){let P=m.split("/");for(;P[0]==="..";)P.shift(),C-=1;u.pathname=P.join("/")}b=C>=0?n[C]:"/"}let y=f0(u,b),g=m&&m!=="/"&&m.endsWith("/"),S=(h||m===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(g||S)&&(y.pathname+="/"),y}var Xp=r=>r.replace(/\/\/+/g,"/"),Ht=r=>Xp(r.join("/")),po=r=>r.replace(/\/+$/,""),m0=r=>po(r).replace(/^\/*/,"/"),p0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,g0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,y0=class{constructor(r,n,s,l=!1){this.status=r,this.statusText=n||"",this.internal=l,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function b0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function v0(r){let n=r.map(s=>s.route.path).filter(Boolean);return Ht(n)||"/"}var Qp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Jp(r,n){let s=r;if(typeof s!="string"||!d0.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let l=s,u=!1;if(Qp)try{let h=new URL(window.location.href),m=s.startsWith("//")?new URL(h.protocol+s):new URL(s),b=Ca(m.pathname,n);m.origin===h.origin&&b!=null?s=b+m.search+m.hash:u=!0}catch{Vt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:u,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zp=["POST","PUT","PATCH","DELETE"];new Set(Zp);var x0=["GET",...Zp];new Set(x0);var Si=R.createContext(null);Si.displayName="DataRouter";var To=R.createContext(null);To.displayName="DataRouterState";var eg=R.createContext(!1);function w0(){return R.useContext(eg)}var tg=R.createContext({isTransitioning:!1});tg.displayName="ViewTransition";var C0=R.createContext(new Map);C0.displayName="Fetchers";var k0=R.createContext(null);k0.displayName="Await";var kt=R.createContext(null);kt.displayName="Navigation";var Mr=R.createContext(null);Mr.displayName="Location";var Lt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Lt.displayName="Route";var Ru=R.createContext(null);Ru.displayName="RouteError";var ag="REACT_ROUTER_ERROR",S0="REDIRECT",T0="ROUTE_ERROR_RESPONSE";function E0(r){if(r.startsWith(`${ag}:${S0}:{`))try{let n=JSON.parse(r.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function R0(r){if(r.startsWith(`${ag}:${T0}:{`))try{let n=JSON.parse(r.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new y0(n.status,n.statusText,n.data)}catch{}}function A0(r,{relative:n}={}){Ie(Ti(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=R.useContext(kt),{hash:u,pathname:h,search:m}=Nr(r,{relative:n}),b=h;return s!=="/"&&(b=h==="/"?s:Ht([s,h])),l.createHref({pathname:b,search:m,hash:u})}function Ti(){return R.useContext(Mr)!=null}function Wt(){return Ie(Ti(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Mr).location}var ng="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ig(r){R.useContext(kt).static||R.useLayoutEffect(r)}function rg(){let{isDataRoute:r}=R.useContext(Lt);return r?H0():D0()}function D0(){Ie(Ti(),"useNavigate() may be used only in the context of a <Router> component.");let r=R.useContext(Si),{basename:n,navigator:s}=R.useContext(kt),{matches:l}=R.useContext(Lt),{pathname:u}=Wt(),h=JSON.stringify(Eu(l)),m=R.useRef(!1);return ig(()=>{m.current=!0}),R.useCallback((y,g={})=>{if(Vt(m.current,ng),!m.current)return;if(typeof y=="number"){s.go(y);return}let S=So(y,JSON.parse(h),u,g.relative==="path");r==null&&n!=="/"&&(S.pathname=S.pathname==="/"?n:Ht([n,S.pathname])),(g.replace?s.replace:s.push)(S,g.state,g)},[n,s,h,u,r])}var I0=R.createContext(null);function M0(r){let n=R.useContext(Lt).outlet;return R.useMemo(()=>n&&R.createElement(I0.Provider,{value:r},n),[n,r])}function sg(){let{matches:r}=R.useContext(Lt),n=r[r.length-1];return(n==null?void 0:n.params)??{}}function Nr(r,{relative:n}={}){let{matches:s}=R.useContext(Lt),{pathname:l}=Wt(),u=JSON.stringify(Eu(s));return R.useMemo(()=>So(r,JSON.parse(u),l,n==="path"),[r,u,l,n])}function N0(r,n){return og(r,n)}function og(r,n,s){var U;Ie(Ti(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=R.useContext(kt),{matches:u}=R.useContext(Lt),h=u[u.length-1],m=h?h.params:{},b=h?h.pathname:"/",y=h?h.pathnameBase:"/",g=h&&h.route;{let B=g&&g.path||"";cg(b,!g||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let S=Wt(),C;if(n){let B=typeof n=="string"?ki(n):n;Ie(y==="/"||((U=B.pathname)==null?void 0:U.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${B.pathname}" was given in the \`location\` prop.`),C=B}else C=S;let P=C.pathname||"/",F=P;if(y!=="/"){let B=y.replace(/^\//,"").split("/");F="/"+P.replace(/^\//,"").split("/").slice(B.length).join("/")}let H=$p(r,{pathname:F});Vt(g||H!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Vt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=L0(H&&H.map(B=>Object.assign({},B,{params:Object.assign({},m,B.params),pathname:Ht([y,l.encodeLocation?l.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?y:Ht([y,l.encodeLocation?l.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),u,s);return n&&z?R.createElement(Mr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...C},navigationType:"POP"}},z):z}function _0(){let r=F0(),n=b0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},h={padding:"2px 4px",backgroundColor:l},m=null;return console.error("Error handled by React Router default ErrorBoundary:",r),m=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:h},"ErrorBoundary")," or"," ",R.createElement("code",{style:h},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},n),s?R.createElement("pre",{style:u},s):null,m)}var P0=R.createElement(_0,null),lg=class extends R.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){this.props.onError?this.props.onError(r,n):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const s=R0(r.digest);s&&(r=s)}let n=r!==void 0?R.createElement(Lt.Provider,{value:this.props.routeContext},R.createElement(Ru.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?R.createElement(O0,{error:r},n):n}};lg.contextType=eg;var nu=new WeakMap;function O0({children:r,error:n}){let{basename:s}=R.useContext(kt);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let l=E0(n.digest);if(l){let u=nu.get(n);if(u)throw u;let h=Jp(l.location,s);if(Qp&&!nu.get(n))if(h.isExternal||l.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:l.replace}));throw nu.set(n,m),m}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return r}function B0({routeContext:r,match:n,children:s}){let l=R.useContext(Si);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Lt.Provider,{value:r},s)}function L0(r,n=[],s){let l=s==null?void 0:s.state;if(r==null){if(!l)return null;if(l.errors)r=l.matches;else if(n.length===0&&!l.initialized&&l.matches.length>0)r=l.matches;else return null}let u=r,h=l==null?void 0:l.errors;if(h!=null){let S=u.findIndex(C=>C.route.id&&(h==null?void 0:h[C.route.id])!==void 0);Ie(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,S+1))}let m=!1,b=-1;if(s&&l){m=l.renderFallback;for(let S=0;S<u.length;S++){let C=u[S];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(b=S),C.route.id){let{loaderData:P,errors:F}=l,H=C.route.loader&&!P.hasOwnProperty(C.route.id)&&(!F||F[C.route.id]===void 0);if(C.route.lazy||H){s.isStatic&&(m=!0),b>=0?u=u.slice(0,b+1):u=[u[0]];break}}}}let y=s==null?void 0:s.onError,g=l&&y?(S,C)=>{var P,F;y(S,{location:l.location,params:((F=(P=l.matches)==null?void 0:P[0])==null?void 0:F.params)??{},unstable_pattern:v0(l.matches),errorInfo:C})}:void 0;return u.reduceRight((S,C,P)=>{let F,H=!1,z=null,U=null;l&&(F=h&&C.route.id?h[C.route.id]:void 0,z=C.route.errorElement||P0,m&&(b<0&&P===0?(cg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,U=null):b===P&&(H=!0,U=C.route.hydrateFallbackElement||null)));let B=n.concat(u.slice(0,P+1)),Q=()=>{let L;return F?L=z:H?L=U:C.route.Component?L=R.createElement(C.route.Component,null):C.route.element?L=C.route.element:L=S,R.createElement(B0,{match:C,routeContext:{outlet:S,matches:B,isDataRoute:l!=null},children:L})};return l&&(C.route.ErrorBoundary||C.route.errorElement||P===0)?R.createElement(lg,{location:l.location,revalidation:l.revalidation,component:z,error:F,children:Q(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:g}):Q()},null)}function Au(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j0(r){let n=R.useContext(Si);return Ie(n,Au(r)),n}function q0(r){let n=R.useContext(To);return Ie(n,Au(r)),n}function z0(r){let n=R.useContext(Lt);return Ie(n,Au(r)),n}function Du(r){let n=z0(r),s=n.matches[n.matches.length-1];return Ie(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function U0(){return Du("useRouteId")}function F0(){var l;let r=R.useContext(Ru),n=q0("useRouteError"),s=Du("useRouteError");return r!==void 0?r:(l=n.errors)==null?void 0:l[s]}function H0(){let{router:r}=j0("useNavigate"),n=Du("useNavigate"),s=R.useRef(!1);return ig(()=>{s.current=!0}),R.useCallback(async(u,h={})=>{Vt(s.current,ng),s.current&&(typeof u=="number"?await r.navigate(u):await r.navigate(u,{fromRouteId:n,...h}))},[r,n])}var up={};function cg(r,n,s){!n&&!up[r]&&(up[r]=!0,Vt(!1,s))}R.memo(G0);function G0({routes:r,future:n,state:s,isStatic:l,onError:u}){return og(r,void 0,{state:s,isStatic:l,onError:u})}function V0({to:r,replace:n,state:s,relative:l}){Ie(Ti(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=R.useContext(kt);Vt(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=R.useContext(Lt),{pathname:m}=Wt(),b=rg(),y=So(r,Eu(h),m,l==="path"),g=JSON.stringify(y);return R.useEffect(()=>{b(JSON.parse(g),{replace:n,state:s,relative:l})},[b,g,l,n,s]),null}function W0(r){return M0(r.context)}function Ut(r){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $0({basename:r="/",children:n=null,location:s,navigationType:l="POP",navigator:u,static:h=!1,unstable_useTransitions:m}){Ie(!Ti(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=r.replace(/^\/*/,"/"),y=R.useMemo(()=>({basename:b,navigator:u,static:h,unstable_useTransitions:m,future:{}}),[b,u,h,m]);typeof s=="string"&&(s=ki(s));let{pathname:g="/",search:S="",hash:C="",state:P=null,key:F="default",unstable_mask:H}=s,z=R.useMemo(()=>{let U=Ca(g,b);return U==null?null:{location:{pathname:U,search:S,hash:C,state:P,key:F,unstable_mask:H},navigationType:l}},[b,g,S,C,P,F,l,H]);return Vt(z!=null,`<Router basename="${b}"> is not able to match the URL "${g}${S}${C}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:R.createElement(kt.Provider,{value:y},R.createElement(Mr.Provider,{children:n,value:z}))}function Y0({children:r,location:n}){return N0(hu(r),n)}function hu(r,n=[]){let s=[];return R.Children.forEach(r,(l,u)=>{if(!R.isValidElement(l))return;let h=[...n,u];if(l.type===R.Fragment){s.push.apply(s,hu(l.props.children,h));return}Ie(l.type===Ut,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!l.props.index||!l.props.children,"An index route cannot have child routes.");let m={id:l.props.id||h.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(m.children=hu(l.props.children,h)),s.push(m)}),s}var so="get",oo="application/x-www-form-urlencoded";function Eo(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function K0(r){return Eo(r)&&r.tagName.toLowerCase()==="button"}function X0(r){return Eo(r)&&r.tagName.toLowerCase()==="form"}function Q0(r){return Eo(r)&&r.tagName.toLowerCase()==="input"}function J0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Z0(r,n){return r.button===0&&(!n||n==="_self")&&!J0(r)}var no=null;function ex(){if(no===null)try{new FormData(document.createElement("form"),0),no=!1}catch{no=!0}return no}var tx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function iu(r){return r!=null&&!tx.has(r)?(Vt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oo}"`),null):r}function ax(r,n){let s,l,u,h,m;if(X0(r)){let b=r.getAttribute("action");l=b?Ca(b,n):null,s=r.getAttribute("method")||so,u=iu(r.getAttribute("enctype"))||oo,h=new FormData(r)}else if(K0(r)||Q0(r)&&(r.type==="submit"||r.type==="image")){let b=r.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||b.getAttribute("action");if(l=y?Ca(y,n):null,s=r.getAttribute("formmethod")||b.getAttribute("method")||so,u=iu(r.getAttribute("formenctype"))||iu(b.getAttribute("enctype"))||oo,h=new FormData(b,r),!ex()){let{name:g,type:S,value:C}=r;if(S==="image"){let P=g?`${g}.`:"";h.append(`${P}x`,"0"),h.append(`${P}y`,"0")}else g&&h.append(g,C)}}else{if(Eo(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=so,l=null,u=oo,m=r}return h&&u==="text/plain"&&(m=h,h=void 0),{action:l,method:s.toLowerCase(),encType:u,formData:h,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Iu(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function ug(r,n,s,l){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${l}`:u.pathname=`${u.pathname}.${l}`:u.pathname==="/"?u.pathname=`_root.${l}`:n&&Ca(u.pathname,n)==="/"?u.pathname=`${po(n)}/_root.${l}`:u.pathname=`${po(u.pathname)}.${l}`,u}async function nx(r,n){if(r.id in n)return n[r.id];try{let s=await import(r.module);return n[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ix(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function rx(r,n,s){let l=await Promise.all(r.map(async u=>{let h=n.routes[u.route.id];if(h){let m=await nx(h,s);return m.links?m.links():[]}return[]}));return cx(l.flat(1).filter(ix).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function dp(r,n,s,l,u,h){let m=(y,g)=>s[g]?y.route.id!==s[g].route.id:!0,b=(y,g)=>{var S;return s[g].pathname!==y.pathname||((S=s[g].route.path)==null?void 0:S.endsWith("*"))&&s[g].params["*"]!==y.params["*"]};return h==="assets"?n.filter((y,g)=>m(y,g)||b(y,g)):h==="data"?n.filter((y,g)=>{var C;let S=l.routes[y.route.id];if(!S||!S.hasLoader)return!1;if(m(y,g)||b(y,g))return!0;if(y.route.shouldRevalidate){let P=y.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((C=s[0])==null?void 0:C.params)||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function sx(r,n,{includeHydrateFallback:s}={}){return ox(r.map(l=>{let u=n.routes[l.route.id];if(!u)return[];let h=[u.module];return u.clientActionModule&&(h=h.concat(u.clientActionModule)),u.clientLoaderModule&&(h=h.concat(u.clientLoaderModule)),s&&u.hydrateFallbackModule&&(h=h.concat(u.hydrateFallbackModule)),u.imports&&(h=h.concat(u.imports)),h}).flat(1))}function ox(r){return[...new Set(r)]}function lx(r){let n={},s=Object.keys(r).sort();for(let l of s)n[l]=r[l];return n}function cx(r,n){let s=new Set;return new Set(n),r.reduce((l,u)=>{let h=JSON.stringify(lx(u));return s.has(h)||(s.add(h),l.push({key:h,link:u})),l},[])}function Mu(){let r=R.useContext(Si);return Iu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ux(){let r=R.useContext(To);return Iu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Nu=R.createContext(void 0);Nu.displayName="FrameworkContext";function _u(){let r=R.useContext(Nu);return Iu(r,"You must render this element inside a <HydratedRouter> element"),r}function dx(r,n){let s=R.useContext(Nu),[l,u]=R.useState(!1),[h,m]=R.useState(!1),{onFocus:b,onBlur:y,onMouseEnter:g,onMouseLeave:S,onTouchStart:C}=n,P=R.useRef(null);R.useEffect(()=>{if(r==="render"&&m(!0),r==="viewport"){let z=B=>{B.forEach(Q=>{m(Q.isIntersecting)})},U=new IntersectionObserver(z,{threshold:.5});return P.current&&U.observe(P.current),()=>{U.disconnect()}}},[r]),R.useEffect(()=>{if(l){let z=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(z)}}},[l]);let F=()=>{u(!0)},H=()=>{u(!1),m(!1)};return s?r!=="intent"?[h,P,{}]:[h,P,{onFocus:Cr(b,F),onBlur:Cr(y,H),onMouseEnter:Cr(g,F),onMouseLeave:Cr(S,H),onTouchStart:Cr(C,F)}]:[!1,P,{}]}function Cr(r,n){return s=>{r&&r(s),s.defaultPrevented||n(s)}}function fx({page:r,...n}){let s=w0(),{router:l}=Mu(),u=R.useMemo(()=>$p(l.routes,r,l.basename),[l.routes,r,l.basename]);return u?s?R.createElement(mx,{page:r,matches:u,...n}):R.createElement(px,{page:r,matches:u,...n}):null}function hx(r){let{manifest:n,routeModules:s}=_u(),[l,u]=R.useState([]);return R.useEffect(()=>{let h=!1;return rx(r,n,s).then(m=>{h||u(m)}),()=>{h=!0}},[r,n,s]),l}function mx({page:r,matches:n,...s}){let l=Wt(),{future:u}=_u(),{basename:h}=Mu(),m=R.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let b=ug(r,h,u.unstable_trailingSlashAwareDataRequests,"rsc"),y=!1,g=[];for(let S of n)typeof S.route.shouldRevalidate=="function"?y=!0:g.push(S.route.id);return y&&g.length>0&&b.searchParams.set("_routes",g.join(",")),[b.pathname+b.search]},[h,u.unstable_trailingSlashAwareDataRequests,r,l,n]);return R.createElement(R.Fragment,null,m.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...s})))}function px({page:r,matches:n,...s}){let l=Wt(),{future:u,manifest:h,routeModules:m}=_u(),{basename:b}=Mu(),{loaderData:y,matches:g}=ux(),S=R.useMemo(()=>dp(r,n,g,h,l,"data"),[r,n,g,h,l]),C=R.useMemo(()=>dp(r,n,g,h,l,"assets"),[r,n,g,h,l]),P=R.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let z=new Set,U=!1;if(n.forEach(Q=>{var X;let L=h.routes[Q.route.id];!L||!L.hasLoader||(!S.some(G=>G.route.id===Q.route.id)&&Q.route.id in y&&((X=m[Q.route.id])!=null&&X.shouldRevalidate)||L.hasClientLoader?U=!0:z.add(Q.route.id))}),z.size===0)return[];let B=ug(r,b,u.unstable_trailingSlashAwareDataRequests,"data");return U&&z.size>0&&B.searchParams.set("_routes",n.filter(Q=>z.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[B.pathname+B.search]},[b,u.unstable_trailingSlashAwareDataRequests,y,l,h,S,n,r,m]),F=R.useMemo(()=>sx(C,h),[C,h]),H=hx(C);return R.createElement(R.Fragment,null,P.map(z=>R.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...s})),F.map(z=>R.createElement("link",{key:z,rel:"modulepreload",href:z,...s})),H.map(({key:z,link:U})=>R.createElement("link",{key:z,nonce:s.nonce,...U,crossOrigin:U.crossOrigin??s.crossOrigin})))}function gx(...r){return n=>{r.forEach(s=>{typeof s=="function"?s(n):s!=null&&(s.current=n)})}}var yx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yx&&(window.__reactRouterVersion="7.14.2")}catch{}function bx({basename:r,children:n,unstable_useTransitions:s,window:l}){let u=R.useRef();u.current==null&&(u.current=Yv({window:l,v5Compat:!0}));let h=u.current,[m,b]=R.useState({action:h.action,location:h.location}),y=R.useCallback(g=>{s===!1?b(g):R.startTransition(()=>b(g))},[s]);return R.useLayoutEffect(()=>h.listen(y),[h,y]),R.createElement($0,{basename:r,children:n,location:m.location,navigationType:m.action,navigator:h,unstable_useTransitions:s})}var dg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=R.forwardRef(function({onClick:n,discover:s="render",prefetch:l="none",relative:u,reloadDocument:h,replace:m,unstable_mask:b,state:y,target:g,to:S,preventScrollReset:C,viewTransition:P,unstable_defaultShouldRevalidate:F,...H},z){let{basename:U,navigator:B,unstable_useTransitions:Q}=R.useContext(kt),L=typeof S=="string"&&dg.test(S),X=Jp(S,U);S=X.to;let G=A0(S,{relative:u}),te=Wt(),Y=null;if(b){let qe=So(b,[],te.unstable_mask?te.unstable_mask.pathname:"/",!0);U!=="/"&&(qe.pathname=qe.pathname==="/"?U:Ht([U,qe.pathname])),Y=B.createHref(qe)}let[ke,Ge,ft]=dx(l,H),nt=Cx(S,{replace:m,unstable_mask:b,state:y,target:g,preventScrollReset:C,relative:u,viewTransition:P,unstable_defaultShouldRevalidate:F,unstable_useTransitions:Q});function Oe(qe){n&&n(qe),qe.defaultPrevented||nt(qe)}let $t=!(X.isExternal||h),St=R.createElement("a",{...H,...ft,href:($t?Y:void 0)||X.absoluteURL||G,onClick:$t?Oe:n,ref:gx(z,Ge),target:g,"data-discover":!L&&s==="render"?"true":void 0});return ke&&!L?R.createElement(R.Fragment,null,St,R.createElement(fx,{page:G})):St});Pe.displayName="Link";var vx=R.forwardRef(function({"aria-current":n="page",caseSensitive:s=!1,className:l="",end:u=!1,style:h,to:m,viewTransition:b,children:y,...g},S){let C=Nr(m,{relative:g.relative}),P=Wt(),F=R.useContext(To),{navigator:H,basename:z}=R.useContext(kt),U=F!=null&&Rx(C)&&b===!0,B=H.encodeLocation?H.encodeLocation(C).pathname:C.pathname,Q=P.pathname,L=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;s||(Q=Q.toLowerCase(),L=L?L.toLowerCase():null,B=B.toLowerCase()),L&&z&&(L=Ca(L,z)||L);const X=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let G=Q===B||!u&&Q.startsWith(B)&&Q.charAt(X)==="/",te=L!=null&&(L===B||!u&&L.startsWith(B)&&L.charAt(B.length)==="/"),Y={isActive:G,isPending:te,isTransitioning:U},ke=G?n:void 0,Ge;typeof l=="function"?Ge=l(Y):Ge=[l,G?"active":null,te?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let ft=typeof h=="function"?h(Y):h;return R.createElement(Pe,{...g,"aria-current":ke,className:Ge,ref:S,style:ft,to:m,viewTransition:b},typeof y=="function"?y(Y):y)});vx.displayName="NavLink";var xx=R.forwardRef(({discover:r="render",fetcherKey:n,navigate:s,reloadDocument:l,replace:u,state:h,method:m=so,action:b,onSubmit:y,relative:g,preventScrollReset:S,viewTransition:C,unstable_defaultShouldRevalidate:P,...F},H)=>{let{unstable_useTransitions:z}=R.useContext(kt),U=Tx(),B=Ex(b,{relative:g}),Q=m.toLowerCase()==="get"?"get":"post",L=typeof b=="string"&&dg.test(b),X=G=>{if(y&&y(G),G.defaultPrevented)return;G.preventDefault();let te=G.nativeEvent.submitter,Y=(te==null?void 0:te.getAttribute("formmethod"))||m,ke=()=>U(te||G.currentTarget,{fetcherKey:n,method:Y,navigate:s,replace:u,state:h,relative:g,preventScrollReset:S,viewTransition:C,unstable_defaultShouldRevalidate:P});z&&s!==!1?R.startTransition(()=>ke()):ke()};return R.createElement("form",{ref:H,method:Q,action:B,onSubmit:l?y:X,...F,"data-discover":!L&&r==="render"?"true":void 0})});xx.displayName="Form";function wx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fg(r){let n=R.useContext(Si);return Ie(n,wx(r)),n}function Cx(r,{target:n,replace:s,unstable_mask:l,state:u,preventScrollReset:h,relative:m,viewTransition:b,unstable_defaultShouldRevalidate:y,unstable_useTransitions:g}={}){let S=rg(),C=Wt(),P=Nr(r,{relative:m});return R.useCallback(F=>{if(Z0(F,n)){F.preventDefault();let H=s!==void 0?s:Tr(C)===Tr(P),z=()=>S(r,{replace:H,unstable_mask:l,state:u,preventScrollReset:h,relative:m,viewTransition:b,unstable_defaultShouldRevalidate:y});g?R.startTransition(()=>z()):z()}},[C,S,P,s,l,u,n,r,h,m,b,y,g])}var kx=0,Sx=()=>`__${String(++kx)}__`;function Tx(){let{router:r}=fg("useSubmit"),{basename:n}=R.useContext(kt),s=U0(),l=r.fetch,u=r.navigate;return R.useCallback(async(h,m={})=>{let{action:b,method:y,encType:g,formData:S,body:C}=ax(h,n);if(m.navigate===!1){let P=m.fetcherKey||Sx();await l(P,s,m.action||b,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:C,formMethod:m.method||y,formEncType:m.encType||g,flushSync:m.flushSync})}else await u(m.action||b,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:C,formMethod:m.method||y,formEncType:m.encType||g,replace:m.replace,state:m.state,fromRouteId:s,flushSync:m.flushSync,viewTransition:m.viewTransition})},[l,u,n,s])}function Ex(r,{relative:n}={}){let{basename:s}=R.useContext(kt),l=R.useContext(Lt);Ie(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),h={...Nr(r||".",{relative:n})},m=Wt();if(r==null){h.search=m.search;let b=new URLSearchParams(h.search),y=b.getAll("index");if(y.some(S=>S==="")){b.delete("index"),y.filter(C=>C).forEach(C=>b.append("index",C));let S=b.toString();h.search=S?`?${S}`:""}}return(!r||r===".")&&u.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:Ht([s,h.pathname])),Tr(h)}function Rx(r,{relative:n}={}){let s=R.useContext(tg);Ie(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=fg("useViewTransitionState"),u=Nr(r,{relative:n});if(!s.isTransitioning)return!1;let h=Ca(s.currentLocation.pathname,l)||s.currentLocation.pathname,m=Ca(s.nextLocation.pathname,l)||s.nextLocation.pathname;return mo(u.pathname,m)!=null||mo(u.pathname,h)!=null}const Ax="modulepreload",Dx=function(r){return"/"+r},fp={},hp=function(n,s,l){let u=Promise.resolve();if(s&&s.length>0){let m=function(g){return Promise.all(g.map(S=>Promise.resolve(S).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const b=document.querySelector("meta[property=csp-nonce]"),y=(b==null?void 0:b.nonce)||(b==null?void 0:b.getAttribute("nonce"));u=m(s.map(g=>{if(g=Dx(g),g in fp)return;fp[g]=!0;const S=g.endsWith(".css"),C=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${C}`))return;const P=document.createElement("link");if(P.rel=S?"stylesheet":Ax,S||(P.as="script"),P.crossOrigin="",P.href=g,y&&P.setAttribute("nonce",y),document.head.appendChild(P),S)return new Promise((F,H)=>{P.addEventListener("load",F),P.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${g}`)))})}))}function h(m){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=m,window.dispatchEvent(b),!b.defaultPrevented)throw m}return u.then(m=>{for(const b of m||[])b.status==="rejected"&&h(b.reason);return n().catch(h)})},Ix=()=>{};var mp={};/**
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
 */const hg=function(r){const n=[];let s=0;for(let l=0;l<r.length;l++){let u=r.charCodeAt(l);u<128?n[s++]=u:u<2048?(n[s++]=u>>6|192,n[s++]=u&63|128):(u&64512)===55296&&l+1<r.length&&(r.charCodeAt(l+1)&64512)===56320?(u=65536+((u&1023)<<10)+(r.charCodeAt(++l)&1023),n[s++]=u>>18|240,n[s++]=u>>12&63|128,n[s++]=u>>6&63|128,n[s++]=u&63|128):(n[s++]=u>>12|224,n[s++]=u>>6&63|128,n[s++]=u&63|128)}return n},Mx=function(r){const n=[];let s=0,l=0;for(;s<r.length;){const u=r[s++];if(u<128)n[l++]=String.fromCharCode(u);else if(u>191&&u<224){const h=r[s++];n[l++]=String.fromCharCode((u&31)<<6|h&63)}else if(u>239&&u<365){const h=r[s++],m=r[s++],b=r[s++],y=((u&7)<<18|(h&63)<<12|(m&63)<<6|b&63)-65536;n[l++]=String.fromCharCode(55296+(y>>10)),n[l++]=String.fromCharCode(56320+(y&1023))}else{const h=r[s++],m=r[s++];n[l++]=String.fromCharCode((u&15)<<12|(h&63)<<6|m&63)}}return n.join("")},mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,n){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let u=0;u<r.length;u+=3){const h=r[u],m=u+1<r.length,b=m?r[u+1]:0,y=u+2<r.length,g=y?r[u+2]:0,S=h>>2,C=(h&3)<<4|b>>4;let P=(b&15)<<2|g>>6,F=g&63;y||(F=64,m||(P=64)),l.push(s[S],s[C],s[P],s[F])}return l.join("")},encodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(r):this.encodeByteArray(hg(r),n)},decodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(r):Mx(this.decodeStringToByteArray(r,n))},decodeStringToByteArray(r,n){this.init_();const s=n?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let u=0;u<r.length;){const h=s[r.charAt(u++)],b=u<r.length?s[r.charAt(u)]:0;++u;const g=u<r.length?s[r.charAt(u)]:64;++u;const C=u<r.length?s[r.charAt(u)]:64;if(++u,h==null||b==null||g==null||C==null)throw new Nx;const P=h<<2|b>>4;if(l.push(P),g!==64){const F=b<<4&240|g>>2;if(l.push(F),C!==64){const H=g<<6&192|C;l.push(H)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Nx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _x=function(r){const n=hg(r);return mg.encodeByteArray(n,!0)},pg=function(r){return _x(r).replace(/\./g,"")},gg=function(r){try{return mg.decodeString(r,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */function Px(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ox=()=>Px().__FIREBASE_DEFAULTS__,Bx=()=>{if(typeof process>"u"||typeof mp>"u")return;const r=mp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Lx=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=r&&gg(r[1]);return n&&JSON.parse(n)},Pu=()=>{try{return Ix()||Ox()||Bx()||Lx()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},jx=r=>{var n,s;return(s=(n=Pu())==null?void 0:n.emulatorHosts)==null?void 0:s[r]},yg=()=>{var r;return(r=Pu())==null?void 0:r.config},bg=r=>{var n;return(n=Pu())==null?void 0:n[`_${r}`]};/**
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
 */class qx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}wrapCallback(n){return(s,l)=>{s?this.reject(s):this.resolve(l),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(s):n(s,l))}}}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function Ux(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fx(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Hx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gx(){const r=at();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Vx(){try{return typeof indexedDB=="object"}catch{return!1}}function Wx(){return new Promise((r,n)=>{try{let s=!0;const l="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(l);u.onsuccess=()=>{u.result.close(),s||self.indexedDB.deleteDatabase(l),r(!0)},u.onupgradeneeded=()=>{s=!1},u.onerror=()=>{var h;n(((h=u.error)==null?void 0:h.message)||"")}}catch(s){n(s)}})}/**
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
 */const $x="FirebaseError";class nn extends Error{constructor(n,s,l){super(s),this.code=n,this.customData=l,this.name=$x,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(n,s,l){this.service=n,this.serviceName=s,this.errors=l}create(n,...s){const l=s[0]||{},u=`${this.service}/${n}`,h=this.errors[n],m=h?Yx(h,l):"Error",b=`${this.serviceName}: ${m} (${u}).`;return new nn(u,b,l)}}function Yx(r,n){return r.replace(Kx,(s,l)=>{const u=n[l];return u!=null?String(u):`<${l}?>`})}const Kx=/\{\$([^}]+)}/g;function Xx(r){for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n))return!1;return!0}function xi(r,n){if(r===n)return!0;const s=Object.keys(r),l=Object.keys(n);for(const u of s){if(!l.includes(u))return!1;const h=r[u],m=n[u];if(pp(h)&&pp(m)){if(!xi(h,m))return!1}else if(h!==m)return!1}for(const u of l)if(!s.includes(u))return!1;return!0}function pp(r){return r!==null&&typeof r=="object"}/**
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
 */function Pr(r){const n=[];for(const[s,l]of Object.entries(r))Array.isArray(l)?l.forEach(u=>{n.push(encodeURIComponent(s)+"="+encodeURIComponent(u))}):n.push(encodeURIComponent(s)+"="+encodeURIComponent(l));return n.length?"&"+n.join("&"):""}function Qx(r,n){const s=new Jx(r,n);return s.subscribe.bind(s)}class Jx{constructor(n,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{n(this)}).catch(l=>{this.error(l)})}next(n){this.forEachObserver(s=>{s.next(n)})}error(n){this.forEachObserver(s=>{s.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,s,l){let u;if(n===void 0&&s===void 0&&l===void 0)throw new Error("Missing Observer.");Zx(n,["next","error","complete"])?u=n:u={next:n,error:s,complete:l},u.next===void 0&&(u.next=ru),u.error===void 0&&(u.error=ru),u.complete===void 0&&(u.complete=ru);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),h}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,n)}sendOne(n,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{s(this.observers[n])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zx(r,n){if(typeof r!="object"||r===null)return!1;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}function ru(){}/**
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
 */function rn(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Ou(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ew(r){return(await fetch(r,{credentials:"include"})).ok}class wi{constructor(n,s,l){this.name=n,this.instanceFactory=s,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class tw{constructor(n,s){this.name=n,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const s=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(s)){const l=new qx;if(this.instancesDeferred.set(s,l),this.isInitialized(s)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:s});u&&l.resolve(u)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(n){const s=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),l=(n==null?void 0:n.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(nw(n))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[s,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);try{const h=this.getOrInitializeService({instanceIdentifier:u});l.resolve(h)}catch{}}}}clearInstance(n=Tn){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...n.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=Tn){return this.instances.has(n)}getOptions(n=Tn){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:s={}}=n,l=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:l,options:s});for(const[h,m]of this.instancesDeferred.entries()){const b=this.normalizeInstanceIdentifier(h);l===b&&m.resolve(u)}return u}onInit(n,s){const l=this.normalizeInstanceIdentifier(s),u=this.onInitCallbacks.get(l)??new Set;u.add(n),this.onInitCallbacks.set(l,u);const h=this.instances.get(l);return h&&n(h,l),()=>{u.delete(n)}}invokeOnInitCallbacks(n,s){const l=this.onInitCallbacks.get(s);if(l)for(const u of l)try{u(n,s)}catch{}}getOrInitializeService({instanceIdentifier:n,options:s={}}){let l=this.instances.get(n);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:aw(n),options:s}),this.instances.set(n,l),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(l,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,l)}catch{}return l||null}normalizeInstanceIdentifier(n=Tn){return this.component?this.component.multipleInstances?n:Tn:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aw(r){return r===Tn?void 0:r}function nw(r){return r.instantiationMode==="EAGER"}/**
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
 */class iw{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const s=this.getProvider(n.name);if(s.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);s.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const s=new tw(n,this);return this.providers.set(n,s),s}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ee||(Ee={}));const rw={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},sw=Ee.INFO,ow={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},lw=(r,n,...s)=>{if(n<r.logLevel)return;const l=new Date().toISOString(),u=ow[n];if(u)console[u](`[${l}]  ${r.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class vg{constructor(n){this.name=n,this._logLevel=sw,this._logHandler=lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in Ee))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?rw[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...n),this._logHandler(this,Ee.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...n),this._logHandler(this,Ee.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...n),this._logHandler(this,Ee.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...n),this._logHandler(this,Ee.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...n),this._logHandler(this,Ee.ERROR,...n)}}const cw=(r,n)=>n.some(s=>r instanceof s);let gp,yp;function uw(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dw(){return yp||(yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xg=new WeakMap,mu=new WeakMap,wg=new WeakMap,su=new WeakMap,Bu=new WeakMap;function fw(r){const n=new Promise((s,l)=>{const u=()=>{r.removeEventListener("success",h),r.removeEventListener("error",m)},h=()=>{s(tn(r.result)),u()},m=()=>{l(r.error),u()};r.addEventListener("success",h),r.addEventListener("error",m)});return n.then(s=>{s instanceof IDBCursor&&xg.set(s,r)}).catch(()=>{}),Bu.set(n,r),n}function hw(r){if(mu.has(r))return;const n=new Promise((s,l)=>{const u=()=>{r.removeEventListener("complete",h),r.removeEventListener("error",m),r.removeEventListener("abort",m)},h=()=>{s(),u()},m=()=>{l(r.error||new DOMException("AbortError","AbortError")),u()};r.addEventListener("complete",h),r.addEventListener("error",m),r.addEventListener("abort",m)});mu.set(r,n)}let pu={get(r,n,s){if(r instanceof IDBTransaction){if(n==="done")return mu.get(r);if(n==="objectStoreNames")return r.objectStoreNames||wg.get(r);if(n==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return tn(r[n])},set(r,n,s){return r[n]=s,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function mw(r){pu=r(pu)}function pw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...s){const l=r.call(ou(this),n,...s);return wg.set(l,n.sort?n.sort():[n]),tn(l)}:dw().includes(r)?function(...n){return r.apply(ou(this),n),tn(xg.get(this))}:function(...n){return tn(r.apply(ou(this),n))}}function gw(r){return typeof r=="function"?pw(r):(r instanceof IDBTransaction&&hw(r),cw(r,uw())?new Proxy(r,pu):r)}function tn(r){if(r instanceof IDBRequest)return fw(r);if(su.has(r))return su.get(r);const n=gw(r);return n!==r&&(su.set(r,n),Bu.set(n,r)),n}const ou=r=>Bu.get(r);function yw(r,n,{blocked:s,upgrade:l,blocking:u,terminated:h}={}){const m=indexedDB.open(r,n),b=tn(m);return l&&m.addEventListener("upgradeneeded",y=>{l(tn(m.result),y.oldVersion,y.newVersion,tn(m.transaction),y)}),s&&m.addEventListener("blocked",y=>s(y.oldVersion,y.newVersion,y)),b.then(y=>{h&&y.addEventListener("close",()=>h()),u&&y.addEventListener("versionchange",g=>u(g.oldVersion,g.newVersion,g))}).catch(()=>{}),b}const bw=["get","getKey","getAll","getAllKeys","count"],vw=["put","add","delete","clear"],lu=new Map;function bp(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(lu.get(n))return lu.get(n);const s=n.replace(/FromIndex$/,""),l=n!==s,u=vw.includes(s);if(!(s in(l?IDBIndex:IDBObjectStore).prototype)||!(u||bw.includes(s)))return;const h=async function(m,...b){const y=this.transaction(m,u?"readwrite":"readonly");let g=y.store;return l&&(g=g.index(b.shift())),(await Promise.all([g[s](...b),u&&y.done]))[0]};return lu.set(n,h),h}mw(r=>({...r,get:(n,s,l)=>bp(n,s)||r.get(n,s,l),has:(n,s)=>!!bp(n,s)||r.has(n,s)}));/**
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
 */class xw{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(ww(s)){const l=s.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(s=>s).join(" ")}}function ww(r){const n=r.getComponent();return(n==null?void 0:n.type)==="VERSION"}const gu="@firebase/app",vp="0.14.11";/**
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
 */const ka=new vg("@firebase/app"),Cw="@firebase/app-compat",kw="@firebase/analytics-compat",Sw="@firebase/analytics",Tw="@firebase/app-check-compat",Ew="@firebase/app-check",Rw="@firebase/auth",Aw="@firebase/auth-compat",Dw="@firebase/database",Iw="@firebase/data-connect",Mw="@firebase/database-compat",Nw="@firebase/functions",_w="@firebase/functions-compat",Pw="@firebase/installations",Ow="@firebase/installations-compat",Bw="@firebase/messaging",Lw="@firebase/messaging-compat",jw="@firebase/performance",qw="@firebase/performance-compat",zw="@firebase/remote-config",Uw="@firebase/remote-config-compat",Fw="@firebase/storage",Hw="@firebase/storage-compat",Gw="@firebase/firestore",Vw="@firebase/ai",Ww="@firebase/firestore-compat",$w="firebase",Yw="12.12.0";/**
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
 */const yu="[DEFAULT]",Kw={[gu]:"fire-core",[Cw]:"fire-core-compat",[Sw]:"fire-analytics",[kw]:"fire-analytics-compat",[Ew]:"fire-app-check",[Tw]:"fire-app-check-compat",[Rw]:"fire-auth",[Aw]:"fire-auth-compat",[Dw]:"fire-rtdb",[Iw]:"fire-data-connect",[Mw]:"fire-rtdb-compat",[Nw]:"fire-fn",[_w]:"fire-fn-compat",[Pw]:"fire-iid",[Ow]:"fire-iid-compat",[Bw]:"fire-fcm",[Lw]:"fire-fcm-compat",[jw]:"fire-perf",[qw]:"fire-perf-compat",[zw]:"fire-rc",[Uw]:"fire-rc-compat",[Fw]:"fire-gcs",[Hw]:"fire-gcs-compat",[Gw]:"fire-fst",[Ww]:"fire-fst-compat",[Vw]:"fire-vertex","fire-js":"fire-js",[$w]:"fire-js-all"};/**
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
 */const Er=new Map,Xw=new Map,bu=new Map;function xp(r,n){try{r.container.addComponent(n)}catch(s){ka.debug(`Component ${n.name} failed to register with FirebaseApp ${r.name}`,s)}}function Rr(r){const n=r.name;if(bu.has(n))return ka.debug(`There were multiple attempts to register component ${n}.`),!1;bu.set(n,r);for(const s of Er.values())xp(s,r);for(const s of Xw.values())xp(s,r);return!0}function Cg(r,n){const s=r.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),r.container.getProvider(n)}function Jt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new _r("app","Firebase",Qw);/**
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
 */class Jw{constructor(n,s,l){this._isDeleted=!1,this._options={...n},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=Yw;function kg(r,n={}){let s=r;typeof n!="object"&&(n={name:n});const l={name:yu,automaticDataCollectionEnabled:!0,...n},u=l.name;if(typeof u!="string"||!u)throw an.create("bad-app-name",{appName:String(u)});if(s||(s=yg()),!s)throw an.create("no-options");const h=Er.get(u);if(h){if(xi(s,h.options)&&xi(l,h.config))return h;throw an.create("duplicate-app",{appName:u})}const m=new iw(u);for(const y of bu.values())m.addComponent(y);const b=new Jw(s,l,m);return Er.set(u,b),b}function Zw(r=yu){const n=Er.get(r);if(!n&&r===yu&&yg())return kg();if(!n)throw an.create("no-app",{appName:r});return n}function wp(){return Array.from(Er.values())}function gi(r,n,s){let l=Kw[r]??r;s&&(l+=`-${s}`);const u=l.match(/\s|\//),h=n.match(/\s|\//);if(u||h){const m=[`Unable to register library "${l}" with version "${n}":`];u&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${n}" contains illegal characters (whitespace or "/")`),ka.warn(m.join(" "));return}Rr(new wi(`${l}-version`,()=>({library:l,version:n}),"VERSION"))}/**
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
 */const eC="firebase-heartbeat-database",tC=1,Ar="firebase-heartbeat-store";let cu=null;function Sg(){return cu||(cu=yw(eC,tC,{upgrade:(r,n)=>{switch(n){case 0:try{r.createObjectStore(Ar)}catch(s){console.warn(s)}}}}).catch(r=>{throw an.create("idb-open",{originalErrorMessage:r.message})})),cu}async function aC(r){try{const s=(await Sg()).transaction(Ar),l=await s.objectStore(Ar).get(Tg(r));return await s.done,l}catch(n){if(n instanceof nn)ka.warn(n.message);else{const s=an.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});ka.warn(s.message)}}}async function Cp(r,n){try{const l=(await Sg()).transaction(Ar,"readwrite");await l.objectStore(Ar).put(n,Tg(r)),await l.done}catch(s){if(s instanceof nn)ka.warn(s.message);else{const l=an.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ka.warn(l.message)}}}function Tg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const nC=1024,iC=30;class rC{constructor(n){this.container=n,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new oC(s),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var n,s;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=kp();if(((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(m=>m.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:u}),this._heartbeatsCache.heartbeats.length>iC){const m=lC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(m,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(l){ka.warn(l)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=kp(),{heartbeatsToSend:l,unsentEntries:u}=sC(this._heartbeatsCache.heartbeats),h=pg(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=s,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(s){return ka.warn(s),""}}}function kp(){return new Date().toISOString().substring(0,10)}function sC(r,n=nC){const s=[];let l=r.slice();for(const u of r){const h=s.find(m=>m.agent===u.agent);if(h){if(h.dates.push(u.date),Sp(s)>n){h.dates.pop();break}}else if(s.push({agent:u.agent,dates:[u.date]}),Sp(s)>n){s.pop();break}l=l.slice(1)}return{heartbeatsToSend:s,unsentEntries:l}}class oC{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vx()?Wx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await aC(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const l=await this.read();return Cp(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const l=await this.read();return Cp(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...n.heartbeats]})}else return}}function Sp(r){return pg(JSON.stringify({version:2,heartbeats:r})).length}function lC(r){if(r.length===0)return-1;let n=0,s=r[0].date;for(let l=1;l<r.length;l++)r[l].date<s&&(s=r[l].date,n=l);return n}/**
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
 */function cC(r){Rr(new wi("platform-logger",n=>new xw(n),"PRIVATE")),Rr(new wi("heartbeat",n=>new rC(n),"PRIVATE")),gi(gu,vp,r),gi(gu,vp,"esm2020"),gi("fire-js","")}cC("");var uC="firebase",dC="12.12.1";/**
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
 */gi(uC,dC,"app");function Eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fC=Eg,Rg=new _r("auth","Firebase",Eg());/**
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
 */const go=new vg("@firebase/auth");function hC(r,...n){go.logLevel<=Ee.WARN&&go.warn(`Auth (${Or}): ${r}`,...n)}function lo(r,...n){go.logLevel<=Ee.ERROR&&go.error(`Auth (${Or}): ${r}`,...n)}/**
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
 */function ea(r,...n){throw ju(r,...n)}function Gt(r,...n){return ju(r,...n)}function Lu(r,n,s){const l={...fC(),[n]:s};return new _r("auth","Firebase",l).create(n,{appName:r.name})}function Rn(r){return Lu(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mC(r,n,s){const l=s;if(!(n instanceof l))throw l.name!==n.constructor.name&&ea(r,"argument-error"),Lu(r,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ju(r,...n){if(typeof r!="string"){const s=n[0],l=[...n.slice(1)];return l[0]&&(l[0].appName=r.name),r._errorFactory.create(s,...l)}return Rg.create(r,...n)}function ee(r,n,...s){if(!r)throw ju(n,...s)}function xa(r){const n="INTERNAL ASSERTION FAILED: "+r;throw lo(n),new Error(n)}function Sa(r,n){r||xa(n)}/**
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
 */function vu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function pC(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function gC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pC()||Fx()||"connection"in navigator)?navigator.onLine:!0}function yC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Br{constructor(n,s){this.shortDelay=n,this.longDelay=s,Sa(s>n,"Short delay should be less than long delay!"),this.isMobile=zx()||Hx()}get(){return gC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qu(r,n){Sa(r.emulator,"Emulator should always be set here");const{url:s}=r.emulator;return n?`${s}${n.startsWith("/")?n.slice(1):n}`:s}/**
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
 */class Ag{static initialize(n,s,l){this.fetchImpl=n,s&&(this.headersImpl=s),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xC=new Br(3e4,6e4);function zu(r,n){return r.tenantId&&!n.tenantId?{...n,tenantId:r.tenantId}:n}async function Ei(r,n,s,l,u={}){return Dg(r,u,async()=>{let h={},m={};l&&(n==="GET"?m=l:h={body:JSON.stringify(l)});const b=Pr({key:r.config.apiKey,...m}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const g={method:n,headers:y,...h};return Ux()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Ou(r.emulatorConfig.host)&&(g.credentials="include"),Ag.fetch()(await Ig(r,r.config.apiHost,s,b),g)})}async function Dg(r,n,s){r._canInitEmulator=!1;const l={...bC,...n};try{const u=new CC(r),h=await Promise.race([s(),u.promise]);u.clearNetworkTimeout();const m=await h.json();if("needConfirmation"in m)throw io(r,"account-exists-with-different-credential",m);if(h.ok&&!("errorMessage"in m))return m;{const b=h.ok?m.errorMessage:m.error.message,[y,g]=b.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(r,"credential-already-in-use",m);if(y==="EMAIL_EXISTS")throw io(r,"email-already-in-use",m);if(y==="USER_DISABLED")throw io(r,"user-disabled",m);const S=l[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Lu(r,S,g);ea(r,S)}}catch(u){if(u instanceof nn)throw u;ea(r,"network-request-failed",{message:String(u)})}}async function wC(r,n,s,l,u={}){const h=await Ei(r,n,s,l,u);return"mfaPendingCredential"in h&&ea(r,"multi-factor-auth-required",{_serverResponse:h}),h}async function Ig(r,n,s,l){const u=`${n}${s}?${l}`,h=r,m=h.config.emulator?qu(r.config,u):`${r.config.apiScheme}://${u}`;return vC.includes(s)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(m).toString():m}class CC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((s,l)=>{this.timer=setTimeout(()=>l(Gt(this.auth,"network-request-failed")),xC.get())})}}function io(r,n,s){const l={appName:r.name};s.email&&(l.email=s.email),s.phoneNumber&&(l.phoneNumber=s.phoneNumber);const u=Gt(r,n,l);return u.customData._tokenResponse=s,u}/**
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
 */async function kC(r,n){return Ei(r,"POST","/v1/accounts:delete",n)}async function yo(r,n){return Ei(r,"POST","/v1/accounts:lookup",n)}/**
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
 */function Sr(r){if(r)try{const n=new Date(Number(r));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function SC(r,n=!1){const s=rn(r),l=await s.getIdToken(n),u=Uu(l);ee(u&&u.exp&&u.auth_time&&u.iat,s.auth,"internal-error");const h=typeof u.firebase=="object"?u.firebase:void 0,m=h==null?void 0:h.sign_in_provider;return{claims:u,token:l,authTime:Sr(uu(u.auth_time)),issuedAtTime:Sr(uu(u.iat)),expirationTime:Sr(uu(u.exp)),signInProvider:m||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function uu(r){return Number(r)*1e3}function Uu(r){const[n,s,l]=r.split(".");if(n===void 0||s===void 0||l===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const u=gg(s);return u?JSON.parse(u):(lo("Failed to decode base64 JWT payload"),null)}catch(u){return lo("Caught error parsing JWT payload as JSON",u==null?void 0:u.toString()),null}}function Ep(r){const n=Uu(r);return ee(n,"internal-error"),ee(typeof n.exp<"u","internal-error"),ee(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
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
 */async function Dr(r,n,s=!1){if(s)return n;try{return await n}catch(l){throw l instanceof nn&&TC(l)&&r.auth.currentUser===r&&await r.auth.signOut(),l}}function TC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class EC{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){if(n){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,l)}}schedule(n=!1){if(!this.isRunning)return;const s=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){(n==null?void 0:n.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xu{constructor(n,s){this.createdAt=n,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bo(r){var C;const n=r.auth,s=await r.getIdToken(),l=await Dr(r,yo(n,{idToken:s}));ee(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const h=(C=u.providerUserInfo)!=null&&C.length?Mg(u.providerUserInfo):[],m=AC(r.providerData,h),b=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),g=b?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new xu(u.createdAt,u.lastLoginAt),isAnonymous:g};Object.assign(r,S)}async function RC(r){const n=rn(r);await bo(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function AC(r,n){return[...r.filter(l=>!n.some(u=>u.providerId===l.providerId)),...n]}function Mg(r){return r.map(({providerId:n,...s})=>({providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
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
 */async function DC(r,n){const s=await Dg(r,{},async()=>{const l=Pr({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:u,apiKey:h}=r.config,m=await Ig(r,u,"/v1/token",`key=${h}`),b=await r._getAdditionalHeaders();b["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:b,body:l};return r.emulatorConfig&&Ou(r.emulatorConfig.host)&&(y.credentials="include"),Ag.fetch()(m,y)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function IC(r,n){return Ei(r,"POST","/v2/accounts:revokeToken",zu(r,n))}/**
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
 */class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){ee(n.idToken,"internal-error"),ee(typeof n.idToken<"u","internal-error"),ee(typeof n.refreshToken<"u","internal-error");const s="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):Ep(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,s)}updateFromIdToken(n){ee(n.length!==0,"internal-error");const s=Ep(n);this.updateTokensAndExpiration(n,null,s)}async getToken(n,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,s){const{accessToken:l,refreshToken:u,expiresIn:h}=await DC(n,s);this.updateTokensAndExpiration(l,u,Number(h))}updateTokensAndExpiration(n,s,l){this.refreshToken=s||null,this.accessToken=n||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(n,s){const{refreshToken:l,accessToken:u,expirationTime:h}=s,m=new yi;return l&&(ee(typeof l=="string","internal-error",{appName:n}),m.refreshToken=l),u&&(ee(typeof u=="string","internal-error",{appName:n}),m.accessToken=u),h&&(ee(typeof h=="number","internal-error",{appName:n}),m.expirationTime=h),m}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return xa("not implemented")}}/**
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
 */function Xa(r,n){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:n})}class Ft{constructor({uid:n,auth:s,stsTokenManager:l,...u}){this.providerId="firebase",this.proactiveRefresh=new EC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new xu(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(n){const s=await Dr(this,this.stsTokenManager.getToken(this.auth,n));return ee(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(n){return SC(this,n)}reload(){return RC(this)}_assign(n){this!==n&&(ee(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(s=>({...s})),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const s=new Ft({...this,auth:n,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(n){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,s=!1){let l=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),l=!0),s&&await bo(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Rn(this.auth));const n=await this.getIdToken();return await Dr(this,kC(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>({...n})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,s){const l=s.displayName??void 0,u=s.email??void 0,h=s.phoneNumber??void 0,m=s.photoURL??void 0,b=s.tenantId??void 0,y=s._redirectEventId??void 0,g=s.createdAt??void 0,S=s.lastLoginAt??void 0,{uid:C,emailVerified:P,isAnonymous:F,providerData:H,stsTokenManager:z}=s;ee(C&&z,n,"internal-error");const U=yi.fromJSON(this.name,z);ee(typeof C=="string",n,"internal-error"),Xa(l,n.name),Xa(u,n.name),ee(typeof P=="boolean",n,"internal-error"),ee(typeof F=="boolean",n,"internal-error"),Xa(h,n.name),Xa(m,n.name),Xa(b,n.name),Xa(y,n.name),Xa(g,n.name),Xa(S,n.name);const B=new Ft({uid:C,auth:n,email:u,emailVerified:P,displayName:l,isAnonymous:F,photoURL:m,phoneNumber:h,tenantId:b,stsTokenManager:U,createdAt:g,lastLoginAt:S});return H&&Array.isArray(H)&&(B.providerData=H.map(Q=>({...Q}))),y&&(B._redirectEventId=y),B}static async _fromIdTokenResponse(n,s,l=!1){const u=new yi;u.updateFromServerResponse(s);const h=new Ft({uid:s.localId,auth:n,stsTokenManager:u,isAnonymous:l});return await bo(h),h}static async _fromGetAccountInfoResponse(n,s,l){const u=s.users[0];ee(u.localId!==void 0,"internal-error");const h=u.providerUserInfo!==void 0?Mg(u.providerUserInfo):[],m=!(u.email&&u.passwordHash)&&!(h!=null&&h.length),b=new yi;b.updateFromIdToken(l);const y=new Ft({uid:u.localId,auth:n,stsTokenManager:b,isAnonymous:m}),g={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:h,metadata:new xu(u.createdAt,u.lastLoginAt),isAnonymous:!(u.email&&u.passwordHash)&&!(h!=null&&h.length)};return Object.assign(y,g),y}}/**
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
 */const Rp=new Map;function wa(r){Sa(r instanceof Function,"Expected a class definition");let n=Rp.get(r);return n?(Sa(n instanceof r,"Instance stored in cache mismatched with class"),n):(n=new r,Rp.set(r,n),n)}/**
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
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,s){this.storage[n]=s}async _get(n){const s=this.storage[n];return s===void 0?null:s}async _remove(n){delete this.storage[n]}_addListener(n,s){}_removeListener(n,s){}}Ng.type="NONE";const Ap=Ng;/**
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
 */function co(r,n,s){return`firebase:${r}:${n}:${s}`}class bi{constructor(n,s,l){this.persistence=n,this.auth=s,this.userKey=l;const{config:u,name:h}=this.auth;this.fullUserKey=co(this.userKey,u.apiKey,h),this.fullPersistenceKey=co("persistence",u.apiKey,h),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);if(!n)return null;if(typeof n=="string"){const s=await yo(this.auth,{idToken:n}).catch(()=>{});return s?Ft._fromGetAccountInfoResponse(this.auth,s,n):null}return Ft._fromJSON(this.auth,n)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,s,l="authUser"){if(!s.length)return new bi(wa(Ap),n,l);const u=(await Promise.all(s.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let h=u[0]||wa(Ap);const m=co(l,n.config.apiKey,n.name);let b=null;for(const g of s)try{const S=await g._get(m);if(S){let C;if(typeof S=="string"){const P=await yo(n,{idToken:S}).catch(()=>{});if(!P)break;C=await Ft._fromGetAccountInfoResponse(n,P,S)}else C=Ft._fromJSON(n,S);g!==h&&(b=C),h=g;break}}catch{}const y=u.filter(g=>g._shouldAllowMigration);return!h._shouldAllowMigration||!y.length?new bi(h,n,l):(h=y[0],b&&await h._set(m,b.toJSON()),await Promise.all(s.map(async g=>{if(g!==h)try{await g._remove(m)}catch{}})),new bi(h,n,l))}}/**
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
 */function Dp(r){const n=r.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(Bg(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(_g(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(jg(n))return"Blackberry";if(qg(n))return"Webos";if(Pg(n))return"Safari";if((n.includes("chrome/")||Og(n))&&!n.includes("edge/"))return"Chrome";if(Lg(n))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=r.match(s);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function _g(r=at()){return/firefox\//i.test(r)}function Pg(r=at()){const n=r.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function Og(r=at()){return/crios\//i.test(r)}function Bg(r=at()){return/iemobile/i.test(r)}function Lg(r=at()){return/android/i.test(r)}function jg(r=at()){return/blackberry/i.test(r)}function qg(r=at()){return/webos/i.test(r)}function Fu(r=at()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function MC(r=at()){var n;return Fu(r)&&!!((n=window.navigator)!=null&&n.standalone)}function NC(){return Gx()&&document.documentMode===10}function zg(r=at()){return Fu(r)||Lg(r)||qg(r)||jg(r)||/windows phone/i.test(r)||Bg(r)}/**
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
 */function Ug(r,n=[]){let s;switch(r){case"Browser":s=Dp(at());break;case"Worker":s=`${Dp(at())}-${r}`;break;default:s=r}const l=n.length?n.join(","):"FirebaseCore-web";return`${s}/JsCore/${Or}/${l}`}/**
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
 */class _C{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,s){const l=h=>new Promise((m,b)=>{try{const y=n(h);m(y)}catch(y){b(y)}});l.onAbort=s,this.queue.push(l);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const s=[];try{for(const l of this.queue)await l(n),l.onAbort&&s.push(l.onAbort)}catch(l){s.reverse();for(const u of s)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
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
 */async function PC(r,n={}){return Ei(r,"GET","/v2/passwordPolicy",zu(r,n))}/**
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
 */const OC=6;class BC{constructor(n){var l;const s=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??OC,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((l=n.allowedNonAlphanumericCharacters)==null?void 0:l.join(""))??"",this.forceUpgradeOnSignin=n.forceUpgradeOnSignin??!1,this.schemaVersion=n.schemaVersion}validatePassword(n){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,s),this.validatePasswordCharacterOptions(n,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(n,s){const l=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;l&&(s.meetsMinPasswordLength=n.length>=l),u&&(s.meetsMaxPasswordLength=n.length<=u)}validatePasswordCharacterOptions(n,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let l;for(let u=0;u<n.length;u++)l=n.charAt(u),this.updatePasswordCharacterOptionsStatuses(s,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(n,s,l,u,h){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=h))}}/**
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
 */class LC{constructor(n,s,l,u){this.app=n,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=l,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ip(this),this.idTokenSubscription=new Ip(this),this.beforeStateQueue=new _C(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=u.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(n,s){return s&&(this._popupRedirectResolver=wa(s)),this._initializationPromise=this.queue(async()=>{var l,u,h;if(!this._deleted&&(this.persistenceManager=await bi.create(this,n),(l=this._resolvePersistenceManagerAvailable)==null||l.call(this),!this._deleted)){if((u=this._popupRedirectResolver)!=null&&u._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((h=this.currentUser)==null?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const s=await yo(this,{idToken:n}),l=await Ft._fromGetAccountInfoResponse(this,s,n);await this.directlySetCurrentUser(l)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){var h;if(Jt(this.app)){const m=this.app.settings.authIdToken;return m?new Promise(b=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(m).then(b,b))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const m=(h=this.redirectUser)==null?void 0:h._redirectEventId,b=l==null?void 0:l._redirectEventId,y=await this.tryRedirectSignIn(n);(!m||m===b)&&(y!=null&&y.user)&&(l=y.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(m){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(m))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(n){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(n){try{await bo(n)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=yC()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(Jt(this.app))return Promise.reject(Rn(this));const s=n?rn(n):null;return s&&ee(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(n,s=!1){if(!this._deleted)return n&&ee(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return Jt(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wa(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await PC(this),s=new BC(n);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(n){this._errorFactory=new _r("auth","Firebase",n())}onAuthStateChanged(n,s,l){return this.registerStateListener(this.authStateSubscription,n,s,l)}beforeAuthStateChanged(n,s){return this.beforeStateQueue.pushCallback(n,s)}onIdTokenChanged(n,s,l){return this.registerStateListener(this.idTokenSubscription,n,s,l)}authStateReady(){return new Promise((n,s)=>{if(this.currentUser)n();else{const l=this.onAuthStateChanged(()=>{l(),n()},s)}})}async revokeAccessToken(n){if(this.currentUser){const s=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:s};this.tenantId!=null&&(l.tenantId=this.tenantId),await IC(this,l)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)==null?void 0:n.toJSON()}}async _setRedirectUser(n,s){const l=await this.getOrInitRedirectPersistenceManager(s);return n===null?l.removeCurrentUser():l.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const s=n&&wa(n)||this._popupRedirectResolver;ee(s,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[wa(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var s,l;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)==null?void 0:s._redirectEventId)===n?this._currentUser:((l=this.redirectUser)==null?void 0:l._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=((s=this.currentUser)==null?void 0:s.uid)??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,s,l,u){if(this._deleted)return()=>{};const h=typeof s=="function"?s:s.next.bind(s);let m=!1;const b=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(b,this,"internal-error"),b.then(()=>{m||h(this.currentUser)}),typeof s=="function"){const y=n.addObserver(s,l,u);return()=>{m=!0,y()}}else{const y=n.addObserver(s);return()=>{m=!0,y()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var u;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((u=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:u.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var s;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((s=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getToken());return n!=null&&n.error&&hC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ro(r){return rn(r)}class Ip{constructor(n){this.auth=n,this.observer=null,this.addObserver=Qx(s=>this.observer=s)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jC(r){Hu=r}function qC(r){return Hu.loadJS(r)}function zC(){return Hu.gapiScript}function UC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function FC(r,n){const s=Cg(r,"auth");if(s.isInitialized()){const u=s.getImmediate(),h=s.getOptions();if(xi(h,n??{}))return u;ea(u,"already-initialized")}return s.initialize({options:n})}function HC(r,n){const s=(n==null?void 0:n.persistence)||[],l=(Array.isArray(s)?s:[s]).map(wa);n!=null&&n.errorMap&&r._updateErrorMap(n.errorMap),r._initializeWithPersistence(l,n==null?void 0:n.popupRedirectResolver)}function GC(r,n,s){const l=Ro(r);ee(/^https?:\/\//.test(n),l,"invalid-emulator-scheme");const u=!1,h=Fg(n),{host:m,port:b}=VC(n),y=b===null?"":`:${b}`,g={url:`${h}//${m}${y}/`},S=Object.freeze({host:m,port:b,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:u})});if(!l._canInitEmulator){ee(l.config.emulator&&l.emulatorConfig,l,"emulator-config-failed"),ee(xi(g,l.config.emulator)&&xi(S,l.emulatorConfig),l,"emulator-config-failed");return}l.config.emulator=g,l.emulatorConfig=S,l.settings.appVerificationDisabledForTesting=!0,Ou(m)?ew(`${h}//${m}${y}`):WC()}function Fg(r){const n=r.indexOf(":");return n<0?"":r.substr(0,n+1)}function VC(r){const n=Fg(r),s=/(\/\/)?([^?#/]+)/.exec(r.substr(n.length));if(!s)return{host:"",port:null};const l=s[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(l);if(u){const h=u[1];return{host:h,port:Mp(l.substr(h.length+1))}}else{const[h,m]=l.split(":");return{host:h,port:Mp(m)}}}function Mp(r){if(!r)return null;const n=Number(r);return isNaN(n)?null:n}function WC(){function r(){const n=document.createElement("p"),s=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Hg{constructor(n,s){this.providerId=n,this.signInMethod=s}toJSON(){return xa("not implemented")}_getIdTokenResponse(n){return xa("not implemented")}_linkToIdToken(n,s){return xa("not implemented")}_getReauthenticationResolver(n){return xa("not implemented")}}/**
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
 */async function vi(r,n){return wC(r,"POST","/v1/accounts:signInWithIdp",zu(r,n))}/**
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
 */const $C="http://localhost";class Dn extends Hg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const s=new Dn(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(s.idToken=n.idToken),n.accessToken&&(s.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(s.nonce=n.nonce),n.pendingToken&&(s.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(s.accessToken=n.oauthToken,s.secret=n.oauthTokenSecret):ea("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n,{providerId:l,signInMethod:u,...h}=s;if(!l||!u)return null;const m=new Dn(l,u);return m.idToken=h.idToken||void 0,m.accessToken=h.accessToken||void 0,m.secret=h.secret,m.nonce=h.nonce,m.pendingToken=h.pendingToken||null,m}_getIdTokenResponse(n){const s=this.buildRequest();return vi(n,s)}_linkToIdToken(n,s){const l=this.buildRequest();return l.idToken=s,vi(n,l)}_getReauthenticationResolver(n){const s=this.buildRequest();return s.autoCreate=!1,vi(n,s)}buildRequest(){const n={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),n.postBody=Pr(s)}return n}}/**
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
 */class Gu{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lr extends Gu{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ja extends Lr{constructor(){super("facebook.com")}static credential(n){return Dn._fromParams({providerId:Ja.PROVIDER_ID,signInMethod:Ja.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Ja.credentialFromTaggedObject(n)}static credentialFromError(n){return Ja.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Ja.credential(n.oauthAccessToken)}catch{return null}}}Ja.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ja.PROVIDER_ID="facebook.com";/**
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
 */class va extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(n,s){return Dn._fromParams({providerId:va.PROVIDER_ID,signInMethod:va.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:s})}static credentialFromResult(n){return va.credentialFromTaggedObject(n)}static credentialFromError(n){return va.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:s,oauthAccessToken:l}=n;if(!s&&!l)return null;try{return va.credential(s,l)}catch{return null}}}va.GOOGLE_SIGN_IN_METHOD="google.com";va.PROVIDER_ID="google.com";/**
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
 */class Za extends Lr{constructor(){super("github.com")}static credential(n){return Dn._fromParams({providerId:Za.PROVIDER_ID,signInMethod:Za.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Za.credentialFromTaggedObject(n)}static credentialFromError(n){return Za.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Za.credential(n.oauthAccessToken)}catch{return null}}}Za.GITHUB_SIGN_IN_METHOD="github.com";Za.PROVIDER_ID="github.com";/**
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
 */class en extends Lr{constructor(){super("twitter.com")}static credential(n,s){return Dn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:s})}static credentialFromResult(n){return en.credentialFromTaggedObject(n)}static credentialFromError(n){return en.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:s,oauthTokenSecret:l}=n;if(!s||!l)return null;try{return en.credential(s,l)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
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
 */class Ci{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,s,l,u=!1){const h=await Ft._fromIdTokenResponse(n,l,u),m=Np(l);return new Ci({user:h,providerId:m,_tokenResponse:l,operationType:s})}static async _forOperation(n,s,l){await n._updateTokensIfNecessary(l,!0);const u=Np(l);return new Ci({user:n,providerId:u,_tokenResponse:l,operationType:s})}}function Np(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class vo extends nn{constructor(n,s,l,u){super(s.code,s.message),this.operationType=l,this.user=u,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:n.name,tenantId:n.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(n,s,l,u){return new vo(n,s,l,u)}}function Gg(r,n,s,l){return(n==="reauthenticate"?s._getReauthenticationResolver(r):s._getIdTokenResponse(r)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(r,h,n,l):h})}async function YC(r,n,s=!1){const l=await Dr(r,n._linkToIdToken(r.auth,await r.getIdToken()),s);return Ci._forOperation(r,"link",l)}/**
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
 */async function KC(r,n,s=!1){const{auth:l}=r;if(Jt(l.app))return Promise.reject(Rn(l));const u="reauthenticate";try{const h=await Dr(r,Gg(l,u,n,r),s);ee(h.idToken,l,"internal-error");const m=Uu(h.idToken);ee(m,l,"internal-error");const{sub:b}=m;return ee(r.uid===b,l,"user-mismatch"),Ci._forOperation(r,u,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&ea(l,"user-mismatch"),h}}/**
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
 */async function XC(r,n,s=!1){if(Jt(r.app))return Promise.reject(Rn(r));const l="signIn",u=await Gg(r,l,n),h=await Ci._fromIdTokenResponse(r,l,u);return s||await r._updateCurrentUser(h.user),h}function QC(r,n,s,l){return rn(r).onIdTokenChanged(n,s,l)}function JC(r,n,s){return rn(r).beforeAuthStateChanged(n,s)}function Vg(r,n,s,l){return rn(r).onAuthStateChanged(n,s,l)}function ZC(r){return rn(r).signOut()}const xo="__sak";/**
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
 */class Wg{constructor(n,s){this.storageRetriever=n,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,s){return this.storage.setItem(n,JSON.stringify(s)),Promise.resolve()}_get(n){const s=this.storage.getItem(n);return Promise.resolve(s?JSON.parse(s):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ek=1e3,tk=10;class $g extends Wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,s)=>this.onStorageEvent(n,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zg(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const s of Object.keys(this.listeners)){const l=this.storage.getItem(s),u=this.localCache[s];l!==u&&n(s,u,l)}}onStorageEvent(n,s=!1){if(!n.key){this.forAllChangedKeys((m,b,y)=>{this.notifyListeners(m,y)});return}const l=n.key;s?this.detachListener():this.stopPolling();const u=()=>{const m=this.storage.getItem(l);!s&&this.localCache[l]===m||this.notifyListeners(l,m)},h=this.storage.getItem(l);NC()&&h!==n.newValue&&n.newValue!==n.oldValue?setTimeout(u,tk):u()}notifyListeners(n,s){this.localCache[n]=s;const l=this.listeners[n];if(l)for(const u of Array.from(l))u(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,s,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:s,newValue:l}),!0)})},ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,s){await super._set(n,s),this.localCache[n]=JSON.stringify(s)}async _get(n){const s=await super._get(n);return this.localCache[n]=JSON.stringify(s),s}async _remove(n){await super._remove(n),delete this.localCache[n]}}$g.type="LOCAL";const ak=$g;/**
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
 */class Yg extends Wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,s){}_removeListener(n,s){}}Yg.type="SESSION";const Kg=Yg;/**
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
 */function nk(r){return Promise.all(r.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
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
 */class Ao{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const s=this.receivers.find(u=>u.isListeningto(n));if(s)return s;const l=new Ao(n);return this.receivers.push(l),l}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const s=n,{eventId:l,eventType:u,data:h}=s.data,m=this.handlersMap[u];if(!(m!=null&&m.size))return;s.ports[0].postMessage({status:"ack",eventId:l,eventType:u});const b=Array.from(m).map(async g=>g(s.origin,h)),y=await nk(b);s.ports[0].postMessage({status:"done",eventId:l,eventType:u,response:y})}_subscribe(n,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(s)}_unsubscribe(n,s){this.handlersMap[n]&&s&&this.handlersMap[n].delete(s),(!s||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
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
 */function Vu(r="",n=10){let s="";for(let l=0;l<n;l++)s+=Math.floor(Math.random()*10);return r+s}/**
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
 */class ik{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,s,l=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let h,m;return new Promise((b,y)=>{const g=Vu("",20);u.port1.start();const S=setTimeout(()=>{y(new Error("unsupported_event"))},l);m={messageChannel:u,onMessage(C){const P=C;if(P.data.eventId===g)switch(P.data.status){case"ack":clearTimeout(S),h=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),b(P.data.response);break;default:clearTimeout(S),clearTimeout(h),y(new Error("invalid_response"));break}}},this.handlers.add(m),u.port1.addEventListener("message",m.onMessage),this.target.postMessage({eventType:n,eventId:g,data:s},[u.port2])}).finally(()=>{m&&this.removeMessageHandler(m)})}}/**
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
 */function Zt(){return window}function rk(r){Zt().location.href=r}/**
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
 */function Xg(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ok(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function lk(){return Xg()?self:null}/**
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
 */const Qg="firebaseLocalStorageDb",ck=1,wo="firebaseLocalStorage",Jg="fbase_key";class jr{constructor(n){this.request=n}toPromise(){return new Promise((n,s)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Do(r,n){return r.transaction([wo],n?"readwrite":"readonly").objectStore(wo)}function uk(){const r=indexedDB.deleteDatabase(Qg);return new jr(r).toPromise()}function wu(){const r=indexedDB.open(Qg,ck);return new Promise((n,s)=>{r.addEventListener("error",()=>{s(r.error)}),r.addEventListener("upgradeneeded",()=>{const l=r.result;try{l.createObjectStore(wo,{keyPath:Jg})}catch(u){s(u)}}),r.addEventListener("success",async()=>{const l=r.result;l.objectStoreNames.contains(wo)?n(l):(l.close(),await uk(),n(await wu()))})})}async function _p(r,n,s){const l=Do(r,!0).put({[Jg]:n,value:s});return new jr(l).toPromise()}async function dk(r,n){const s=Do(r,!1).get(n),l=await new jr(s).toPromise();return l===void 0?null:l.value}function Pp(r,n){const s=Do(r,!0).delete(n);return new jr(s).toPromise()}const fk=800,hk=3;class Zg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wu(),this.db)}async _withRetries(n){let s=0;for(;;)try{const l=await this._openDb();return await n(l)}catch(l){if(s++>hk)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(lk()),this.receiver._subscribe("keyChanged",async(n,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(n,s)=>["keyChanged"])}async initializeSender(){var s,l;if(this.activeServiceWorker=await sk(),!this.activeServiceWorker)return;this.sender=new ik(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(s=n[0])!=null&&s.fulfilled&&(l=n[0])!=null&&l.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await wu();return await _p(n,xo,"1"),await Pp(n,xo),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,s){return this._withPendingWrite(async()=>(await this._withRetries(l=>_p(l,n,s)),this.localCache[n]=s,this.notifyServiceWorker(n)))}async _get(n){const s=await this._withRetries(l=>dk(l,n));return this.localCache[n]=s,s}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pp(s,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(u=>{const h=Do(u,!1).getAll();return new jr(h).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const s=[],l=new Set;if(n.length!==0)for(const{fbase_key:u,value:h}of n)l.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(h)&&(this.notifyListeners(u,h),s.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!l.has(u)&&(this.notifyListeners(u,null),s.push(u));return s}notifyListeners(n,s){this.localCache[n]=s;const l=this.listeners[n];if(l)for(const u of Array.from(l))u(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zg.type="LOCAL";const mk=Zg;new Br(3e4,6e4);/**
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
 */function ey(r,n){return n?wa(n):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Wu extends Hg{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return vi(n,this._buildIdpRequest())}_linkToIdToken(n,s){return vi(n,this._buildIdpRequest(s))}_getReauthenticationResolver(n){return vi(n,this._buildIdpRequest())}_buildIdpRequest(n){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(s.idToken=n),s}}function pk(r){return XC(r.auth,new Wu(r),r.bypassAuthState)}function gk(r){const{auth:n,user:s}=r;return ee(s,n,"internal-error"),KC(s,new Wu(r),r.bypassAuthState)}async function yk(r){const{auth:n,user:s}=r;return ee(s,n,"internal-error"),YC(s,new Wu(r),r.bypassAuthState)}/**
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
 */class ty{constructor(n,s,l,u,h=!1){this.auth=n,this.resolver=l,this.user=u,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(n,s)=>{this.pendingPromise={resolve:n,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(n){const{urlResponse:s,sessionId:l,postBody:u,tenantId:h,error:m,type:b}=n;if(m){this.reject(m);return}const y={auth:this.auth,requestUri:s,sessionId:l,tenantId:h||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(b)(y))}catch(g){this.reject(g)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return pk;case"linkViaPopup":case"linkViaRedirect":return yk;case"reauthViaPopup":case"reauthViaRedirect":return gk;default:ea(this.auth,"internal-error")}}resolve(n){Sa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){Sa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bk=new Br(2e3,1e4);async function vk(r,n,s){if(Jt(r.app))return Promise.reject(Gt(r,"operation-not-supported-in-this-environment"));const l=Ro(r);mC(r,n,Gu);const u=ey(l,s);return new En(l,"signInViaPopup",n,u).executeNotNull()}class En extends ty{constructor(n,s,l,u,h){super(n,s,u,h),this.provider=l,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return ee(n,this.auth,"internal-error"),n}async onExecution(){Sa(this.filter.length===1,"Popup operations only handle one event");const n=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)==null?void 0:n.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const n=()=>{var s,l;if((l=(s=this.authWindow)==null?void 0:s.window)!=null&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,bk.get())};n()}}En.currentPopupAction=null;/**
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
 */const xk="pendingRedirect",uo=new Map;class wk extends ty{constructor(n,s,l=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,l),this.eventId=null}async execute(){let n=uo.get(this.auth._key());if(!n){try{const l=await Ck(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(l)}catch(s){n=()=>Promise.reject(s)}uo.set(this.auth._key(),n)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const s=await this.auth._redirectUserForId(n.eventId);if(s)return this.user=s,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ck(r,n){const s=Tk(n),l=Sk(r);if(!await l._isAvailable())return!1;const u=await l._get(s)==="true";return await l._remove(s),u}function kk(r,n){uo.set(r._key(),n)}function Sk(r){return wa(r._redirectPersistence)}function Tk(r){return co(xk,r.config.apiKey,r.name)}async function Ek(r,n,s=!1){if(Jt(r.app))return Promise.reject(Rn(r));const l=Ro(r),u=ey(l,n),m=await new wk(l,u,s).execute();return m&&!s&&(delete m.user._redirectEventId,await l._persistUserIfCurrent(m.user),await l._setRedirectUser(null,n)),m}/**
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
 */const Rk=600*1e3;class Ak{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let s=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(n,l)&&(s=!0,this.sendToConsumer(n,l),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!Dk(n)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=n,s=!0)),s}sendToConsumer(n,s){var l;if(n.error&&!ay(n)){const u=((l=n.error.code)==null?void 0:l.split("auth/")[1])||"internal-error";s.onError(Gt(this.auth,u))}else s.onAuthEvent(n)}isEventForConsumer(n,s){const l=s.eventId===null||!!n.eventId&&n.eventId===s.eventId;return s.filter.includes(n.type)&&l}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=Rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Op(n))}saveEventToCache(n){this.cachedEventUids.add(Op(n)),this.lastProcessedEventTime=Date.now()}}function Op(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(n=>n).join("-")}function ay({type:r,error:n}){return r==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function Dk(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ay(r);default:return!1}}/**
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
 */async function Ik(r,n={}){return Ei(r,"GET","/v1/projects",n)}/**
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
 */const Mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nk=/^https?/;async function _k(r){if(r.config.emulator)return;const{authorizedDomains:n}=await Ik(r);for(const s of n)try{if(Pk(s))return}catch{}ea(r,"unauthorized-domain")}function Pk(r){const n=vu(),{protocol:s,hostname:l}=new URL(n);if(r.startsWith("chrome-extension://")){const m=new URL(r);return m.hostname===""&&l===""?s==="chrome-extension:"&&r.replace("chrome-extension://","")===n.replace("chrome-extension://",""):s==="chrome-extension:"&&m.hostname===l}if(!Nk.test(s))return!1;if(Mk.test(r))return l===r;const u=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(l)}/**
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
 */const Ok=new Br(3e4,6e4);function Bp(){const r=Zt().___jsl;if(r!=null&&r.H){for(const n of Object.keys(r.H))if(r.H[n].r=r.H[n].r||[],r.H[n].L=r.H[n].L||[],r.H[n].r=[...r.H[n].L],r.CP)for(let s=0;s<r.CP.length;s++)r.CP[s]=null}}function Bk(r){return new Promise((n,s)=>{var u,h,m;function l(){Bp(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{Bp(),s(Gt(r,"network-request-failed"))},timeout:Ok.get()})}if((h=(u=Zt().gapi)==null?void 0:u.iframes)!=null&&h.Iframe)n(gapi.iframes.getContext());else if((m=Zt().gapi)!=null&&m.load)l();else{const b=UC("iframefcb");return Zt()[b]=()=>{gapi.load?l():s(Gt(r,"network-request-failed"))},qC(`${zC()}?onload=${b}`).catch(y=>s(y))}}).catch(n=>{throw fo=null,n})}let fo=null;function Lk(r){return fo=fo||Bk(r),fo}/**
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
 */const jk=new Br(5e3,15e3),qk="__/auth/iframe",zk="emulator/auth/iframe",Uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hk(r){const n=r.config;ee(n.authDomain,r,"auth-domain-config-required");const s=n.emulator?qu(n,zk):`https://${r.config.authDomain}/${qk}`,l={apiKey:n.apiKey,appName:r.name,v:Or},u=Fk.get(r.config.apiHost);u&&(l.eid=u);const h=r._getFrameworks();return h.length&&(l.fw=h.join(",")),`${s}?${Pr(l).slice(1)}`}async function Gk(r){const n=await Lk(r),s=Zt().gapi;return ee(s,r,"internal-error"),n.open({where:document.body,url:Hk(r),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uk,dontclear:!0},l=>new Promise(async(u,h)=>{await l.restyle({setHideOnLeave:!1});const m=Gt(r,"network-request-failed"),b=Zt().setTimeout(()=>{h(m)},jk.get());function y(){Zt().clearTimeout(b),u(l)}l.ping(y).then(y,()=>{h(m)})}))}/**
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
 */const Vk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wk=500,$k=600,Yk="_blank",Kk="http://localhost";class Lp{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xk(r,n,s,l=Wk,u=$k){const h=Math.max((window.screen.availHeight-u)/2,0).toString(),m=Math.max((window.screen.availWidth-l)/2,0).toString();let b="";const y={...Vk,width:l.toString(),height:u.toString(),top:h,left:m},g=at().toLowerCase();s&&(b=Og(g)?Yk:s),_g(g)&&(n=n||Kk,y.scrollbars="yes");const S=Object.entries(y).reduce((P,[F,H])=>`${P}${F}=${H},`,"");if(MC(g)&&b!=="_self")return Qk(n||"",b),new Lp(null);const C=window.open(n||"",b,S);ee(C,r,"popup-blocked");try{C.focus()}catch{}return new Lp(C)}function Qk(r,n){const s=document.createElement("a");s.href=r,s.target=n;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(l)}/**
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
 */const Jk="__/auth/handler",Zk="emulator/auth/handler",eS=encodeURIComponent("fac");async function jp(r,n,s,l,u,h){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const m={apiKey:r.config.apiKey,appName:r.name,authType:s,redirectUrl:l,v:Or,eventId:u};if(n instanceof Gu){n.setDefaultLanguage(r.languageCode),m.providerId=n.providerId||"",Xx(n.getCustomParameters())||(m.customParameters=JSON.stringify(n.getCustomParameters()));for(const[S,C]of Object.entries({}))m[S]=C}if(n instanceof Lr){const S=n.getScopes().filter(C=>C!=="");S.length>0&&(m.scopes=S.join(","))}r.tenantId&&(m.tid=r.tenantId);const b=m;for(const S of Object.keys(b))b[S]===void 0&&delete b[S];const y=await r._getAppCheckToken(),g=y?`#${eS}=${encodeURIComponent(y)}`:"";return`${tS(r)}?${Pr(b).slice(1)}${g}`}function tS({config:r}){return r.emulator?qu(r,Zk):`https://${r.authDomain}/${Jk}`}/**
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
 */const du="webStorageSupport";class aS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=Ek,this._overrideRedirectResult=kk}async _openPopup(n,s,l,u){var m;Sa((m=this.eventManagers[n._key()])==null?void 0:m.manager,"_initialize() not called before _openPopup()");const h=await jp(n,s,l,vu(),u);return Xk(n,h,Vu())}async _openRedirect(n,s,l,u){await this._originValidation(n);const h=await jp(n,s,l,vu(),u);return rk(h),new Promise(()=>{})}_initialize(n){const s=n._key();if(this.eventManagers[s]){const{manager:u,promise:h}=this.eventManagers[s];return u?Promise.resolve(u):(Sa(h,"If manager is not set, promise should be"),h)}const l=this.initAndGetManager(n);return this.eventManagers[s]={promise:l},l.catch(()=>{delete this.eventManagers[s]}),l}async initAndGetManager(n){const s=await Gk(n),l=new Ak(n);return s.register("authEvent",u=>(ee(u==null?void 0:u.authEvent,n,"invalid-auth-event"),{status:l.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:l},this.iframes[n._key()]=s,l}_isIframeWebStorageSupported(n,s){this.iframes[n._key()].send(du,{type:du},u=>{var m;const h=(m=u==null?void 0:u[0])==null?void 0:m[du];h!==void 0&&s(!!h),ea(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const s=n._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=_k(n)),this.originValidationPromises[s]}get _shouldInitProactively(){return zg()||Pg()||Fu()}}const nS=aS;var qp="@firebase/auth",zp="1.13.0";/**
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
 */class iS{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)==null?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const s=this.auth.onIdTokenChanged(l=>{n((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,s),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const s=this.internalListeners.get(n);s&&(this.internalListeners.delete(n),s(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sS(r){Rr(new wi("auth",(n,{options:s})=>{const l=n.getProvider("app").getImmediate(),u=n.getProvider("heartbeat"),h=n.getProvider("app-check-internal"),{apiKey:m,authDomain:b}=l.options;ee(m&&!m.includes(":"),"invalid-api-key",{appName:l.name});const y={apiKey:m,authDomain:b,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ug(r)},g=new LC(l,u,h,y);return HC(g,s),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,s,l)=>{n.getProvider("auth-internal").initialize()})),Rr(new wi("auth-internal",n=>{const s=Ro(n.getProvider("auth").getImmediate());return(l=>new iS(l))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(qp,zp,rS(r)),gi(qp,zp,"esm2020")}/**
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
 */const oS=300,lS=bg("authIdTokenMaxAge")||oS;let Up=null;const cS=r=>async n=>{const s=n&&await n.getIdTokenResult(),l=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(l&&l>lS)return;const u=s==null?void 0:s.token;Up!==u&&(Up=u,await fetch(r,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function uS(r=Zw()){const n=Cg(r,"auth");if(n.isInitialized())return n.getImmediate();const s=FC(r,{popupRedirectResolver:nS,persistence:[mk,ak,Kg]}),l=bg("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(l,location.origin);if(location.origin===h.origin){const m=cS(h.toString());JC(s,m,()=>m(s.currentUser)),QC(s,b=>m(b))}}const u=jx("auth");return u&&GC(s,`http://${u}`),s}function dS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}jC({loadJS(r){return new Promise((n,s)=>{const l=document.createElement("script");l.setAttribute("src",r),l.onload=n,l.onerror=u=>{const h=Gt("internal-error");h.customData=u,s(h)},l.type="text/javascript",l.charset="UTF-8",dS().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sS("Browser");const fS={apiKey:"AIzaSyCkKzICX2ut7DyYOuIhEMKZJNNxLLJEOTE",authDomain:"ccsp-7632d.firebaseapp.com",projectId:"ccsp-7632d",storageBucket:"ccsp-7632d.firebasestorage.app",messagingSenderId:"442703082425",appId:"1:442703082425:web:cb0dadf2786971db6ebc68"};let Cu;wp().length?Cu=wp()[0]:Cu=kg(fS);const Io=uS(Cu),ny=new va;ny.setCustomParameters({prompt:"select_account"});const hS=async()=>{try{return(await vk(Io,ny)).user}catch(r){throw console.error("Error signing in with Google:",r),r}},mS=async()=>{try{await ZC(Io)}catch(r){throw console.error("Error signing out:",r),r}},Fp=Object.freeze(Object.defineProperty({__proto__:null,auth:Io,logout:mS,onAuthStateChanged:Vg,signInWithGoogle:hS},Symbol.toStringTag,{value:"Module"})),iy=R.createContext(void 0);function pS({children:r}){const[n,s]=R.useState(null),[l,u]=R.useState(!0);R.useEffect(()=>{const b=Vg(Io,y=>{s(y),u(!1)});return()=>b()},[]);const h=async()=>{const{signInWithGoogle:b}=await hp(async()=>{const{signInWithGoogle:y}=await Promise.resolve().then(()=>Fp);return{signInWithGoogle:y}},[]);await b()},m=async()=>{const{logout:b}=await hp(async()=>{const{logout:y}=await Promise.resolve().then(()=>Fp);return{logout:y}},void 0);await b()};return d.jsx(iy.Provider,{value:{user:n,loading:l,signInWithGoogle:h,logout:m},children:r})}function ry(){const r=R.useContext(iy);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sy=(...r)=>r.filter((n,s,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===s).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=R.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:u="",children:h,iconNode:m,...b},y)=>R.createElement("svg",{ref:y,...yS,width:n,height:n,stroke:r,strokeWidth:l?Number(s)*24/Number(n):s,className:sy("lucide",u),...b},[...m.map(([g,S])=>R.createElement(g,S)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(r,n)=>{const s=R.forwardRef(({className:l,...u},h)=>R.createElement(bS,{ref:h,iconNode:n,className:sy(`lucide-${gS(r)}`,l),...u}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=re("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=re("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=re("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=re("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=re("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=re("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=re("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=re("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=re("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=re("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=re("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=re("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=re("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=re("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=re("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=re("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=re("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=re("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=re("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=re("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=re("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=re("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=re("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=re("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=re("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=re("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=re("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=re("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=re("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=re("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=re("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=re("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=re("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=re("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=re("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Su(){const{user:r,loading:n,signInWithGoogle:s,logout:l}=ry();return n?d.jsx("div",{className:"flex items-center gap-2",children:d.jsx("div",{className:"w-8 h-8 bg-gray-200 rounded-full animate-pulse"})}):r?d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[r.photoURL?d.jsx("img",{src:r.photoURL,alt:r.displayName||"User",className:"w-8 h-8 rounded-full"}):d.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center",children:d.jsx(US,{className:"w-5 h-5 text-white"})}),d.jsx("span",{className:"text-sm text-gray-700",children:r.displayName||"User"})]}),d.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[d.jsx(NS,{className:"w-4 h-4"}),"Logout"]})]}):d.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",children:[d.jsx(MS,{className:"w-4 h-4"}),"Sign in with Google"]})}const Vp=[{path:"/dashboard",label:"Dashboard",icon:dt},{path:"/dashboard/concepts",label:"Concepts",icon:PS},{path:"/dashboard/compare",label:"Compare",icon:ES},{path:"/dashboard/quiz",label:"Quiz",icon:ly},{path:"/dashboard/glossary",label:"Glossary",icon:AS}];function GS(){const r=Wt(),[n,s]=R.useState(!1);return d.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-16 bg-dark-800/95 backdrop-blur-md border-b border-dark-600 z-50",children:[d.jsxs("div",{className:"max-w-7xl mx-auto px-4 h-full flex items-center justify-between",children:[d.jsxs(Pe,{to:"/dashboard",className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center",children:d.jsx(dt,{className:"w-5 h-5 text-white"})}),d.jsx("span",{className:"font-bold text-lg",children:"Repo & CCP Learning"})]}),d.jsxs("div",{className:"hidden md:flex items-center gap-1",children:[Vp.map(({path:l,label:u})=>d.jsx(Pe,{to:l,className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${r.pathname.startsWith(l)?"text-accent-cyan bg-dark-700":"text-gray-400 hover:text-white hover:bg-dark-700"}`,children:u},l)),d.jsx(Su,{})]}),d.jsx("button",{onClick:()=>s(!n),className:"md:hidden p-2 text-gray-400 hover:text-white",children:n?d.jsx(FS,{className:"w-6 h-6"}):d.jsx(_S,{className:"w-6 h-6"})})]}),n&&d.jsxs("div",{className:"md:hidden bg-dark-800 border-b border-dark-600",children:[Vp.map(({path:l,label:u})=>d.jsx(Pe,{to:l,onClick:()=>s(!1),className:`block px-4 py-3 text-sm font-medium ${r.pathname.startsWith(l)?"text-accent-cyan bg-dark-700":"text-gray-400 hover:text-white hover:bg-dark-700"}`,children:u},l)),d.jsx("div",{className:"px-4 py-3",children:d.jsx(Su,{})})]})]})}function VS(){return d.jsxs("div",{className:"min-h-screen bg-dark-900 text-gray-100",children:[d.jsx(GS,{}),d.jsx("main",{className:"pt-16",children:d.jsx(W0,{})})]})}const WS=[{term:"Repo (Repurchase Agreement)",definition:"A sale of securities coupled with an agreement to repurchase them at a future date and price; economically a collateralized short-term loan.",category:"Core Concepts"},{term:"Reverse Repo",definition:"The opposite side of a repo transaction; from the cash lender's perspective, it is a collateralized deposit or investment of cash.",category:"Core Concepts"},{term:"CCP (Central Counterparty)",definition:"An entity that interposes itself between buyers and sellers in financial transactions to guarantee performance and mutualize counterparty credit risk.",category:"Core Concepts"},{term:"Novation",definition:"The legal replacement of an original contract between two parties with two new contracts between each party and a central counterparty, extinguishing bilateral exposure.",category:"Core Concepts"},{term:"Netting",definition:"The offsetting of mutual obligations to reduce the number and size of payments or securities transfers required for settlement.",category:"Risk Management"},{term:"Margin (Initial)",definition:"Collateral posted at the initiation of a trade to protect against potential future exposure to counterparty default.",category:"Risk Management"},{term:"Margin (Variation)",definition:"Collateral transferred daily (or intraday) to reflect changes in the market value of cleared positions.",category:"Risk Management"},{term:"Haircut",definition:"A discount applied to the market value of collateral to create a buffer against price fluctuations.",category:"Risk Management"},{term:"DTCC/FICC",definition:"Depository Trust & Clearing Corporation / Fixed Income Clearing Corporation—the sole CCP for U.S. Treasury repo markets.",category:"U.S. Markets"},{term:"BNY Mellon",definition:"Bank of New York Mellon—the sole clearing bank for U.S. repo markets, holding custodial accounts for FICC and market participants.",category:"U.S. Markets"},{term:"CBES",definition:"Commercial Book-Entry System—the Federal Reserve's definitive ledger for U.S. Treasury securities ownership.",category:"U.S. Markets"},{term:"JSCC",definition:"Japan Securities Clearing Corporation—the central counterparty for Japanese securities markets, including JGB repo.",category:"Asian Markets"},{term:"CDP",definition:"Central Depository (Pte) Limited—the clearing house for Singapore securities, with limited repo clearing capabilities.",category:"Asian Markets"},{term:"HKSCC",definition:"Hong Kong Securities Clearing Company—the clearing house for Hong Kong equities, with limited repo clearing.",category:"Asian Markets"},{term:"Tri-Party Repo",definition:"A repo transaction where a third party (clearing bank) manages collateral selection, valuation, and settlement between borrower and lender.",category:"Market Structure"},{term:"Bilateral Repo",definition:"A repo transaction where two parties face each other directly without a central counterparty, each bearing the other's credit risk.",category:"Market Structure"},{term:"Sponsored Member",definition:"A market participant that accesses central clearing through a direct CCP member (e.g., a hedge fund sponsored by a dealer bank).",category:"Market Structure"},{term:"Default Waterfall",definition:"The ordered sequence of financial resources used by a CCP to absorb losses from a member default.",category:"Risk Management"},{term:"PFMI",definition:"Principles for Financial Market Infrastructures—international standards set by CPMI-IOSCO for payment, clearing, and settlement systems.",category:"Regulation"},{term:"FMU",definition:"Financial Market Utility—a systemically important financial market infrastructure designated under the U.S. Dodd-Frank Act.",category:"Regulation"},{term:"Joint Clearing Members",definition:"Large clearing members that participate in multiple CCPs simultaneously, creating potential transmission channels for stress across markets (Aldasoro & Veraart, BIS WP 1052).",category:"Risk Management"},{term:"Cover-2 Standard",definition:"CCP stress testing standard requiring sufficient prefunded resources to withstand the simultaneous default of the two clearing members with the largest exposures; challenged by research showing interconnectedness effects.",category:"Risk Management"},{term:"Guarantee Fund",definition:"Prefunded resources contributed by CCP members to mutualize losses after a defaulting member's own resources are exhausted; also called default fund or clearing fund.",category:"Risk Management"},{term:"Variation Margin Gains Haircutting (VMGH)",definition:"A CCP loss allocation mechanism where variation margin payments to non-defaulting members are reduced ('haircutted') to absorb losses from a member default; creates potential spillovers to other CCPs.",category:"Risk Management"},{term:"Intra-Day Credit",definition:"Credit extended by a clearing bank to repo market participants during the trading day, enabling securities settlement before final funding; a key systemic risk in tri-party repo markets.",category:"Market Structure"},{term:"Contagion",definition:"The transmission of financial stress from one entity to others through direct or indirect linkages; in CCP contexts, often occurs through shared clearing membership or correlated collateral.",category:"Risk Management"},{term:"Recovery and Resolution",definition:"Frameworks for managing CCPs in financial distress—recovery involves tools to prevent failure; resolution addresses how authorities handle a failing CCP without taxpayer bailout.",category:"Regulation"},{term:"CET1",definition:"Common Equity Tier 1—the highest quality bank capital, comprising common shares and retained earnings; primary component of Basel III capital requirements.",category:"Bank Regulation"},{term:"Risk-Weighted Assets (RWA)",definition:"Bank assets weighted by credit risk, market risk, and operational risk; used to calculate minimum capital requirements under Basel III.",category:"Bank Regulation"},{term:"LCR",definition:"Liquidity Coverage Ratio—Basel III requirement that banks hold sufficient high-quality liquid assets to cover 30 days of net cash outflows under stress.",category:"Bank Regulation"},{term:"NSFR",definition:"Net Stable Funding Ratio—Basel III requirement that banks maintain stable funding (equity and long-term liabilities) relative to the liquidity of their assets.",category:"Bank Regulation"},{term:"CDS",definition:"Credit Default Swap—a financial contract where the protection buyer makes periodic payments to the seller in exchange for a payoff if a credit event occurs on a reference entity.",category:"Derivatives"},{term:"CLS Bank",definition:"Continuous Linked Settlement Bank—a specialized financial institution that eliminates settlement risk in FX transactions through payment-versus-payment (PvP) settlement.",category:"FX Markets"},{term:"NDF",definition:"Non-Deliverable Forward—an FX forward contract where the net difference between the contracted rate and spot rate is settled in a convertible currency, used for currencies with capital controls.",category:"FX Markets"},{term:"FX Swap",definition:"A simultaneous purchase and sale of identical amounts of one currency for another with two different value dates; effectively a collateralized loan in one currency versus another.",category:"FX Markets"},{term:"Duration",definition:"A measure of bond price sensitivity to interest rate changes; approximately the percentage change in price for a 1% change in yield.",category:"Fixed Income"},{term:"Convexity",definition:"The second derivative of bond price with respect to yield; measures how duration changes as yields change, providing a more accurate price sensitivity measure.",category:"Fixed Income"},{term:"VaR",definition:"Value at Risk—a statistical measure estimating the maximum potential loss over a specified time period at a given confidence level; flawed but widely used risk metric.",category:"Risk Management"},{term:"Expected Shortfall",definition:"The average loss in the tail beyond the VaR threshold; also called CVaR (Conditional VaR); addresses VaR's failure to capture tail risk severity.",category:"Risk Management"},{term:"HFT",definition:"High-Frequency Trading—algorithmic trading using sophisticated infrastructure and ultra-low latency strategies to execute large numbers of orders at extremely fast speeds.",category:"Market Structure"},{term:"Market Microstructure",definition:"The study of financial market trading mechanisms, including price formation, liquidity provision, bid-ask spreads, and the impact of market design on outcomes.",category:"Market Structure"}],$S=[{title:"Repo & CCP Frequently Asked Questions",author:"ICMA European Repo and Collateral Council",url:"https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/",type:"Industry Guide",description:"Comprehensive FAQ covering repo fundamentals and CCP functions."},{title:"Principles for Financial Market Infrastructures",author:"CPMI-IOSCO",url:"https://www.bis.org/cpmi/publ/d101.htm",type:"Regulatory Standard",description:"International standards for payment, clearing, and settlement systems including CCPs."},{title:"Japan Securities Clearing Corporation",author:"JPX Group",url:"https://www.jpx.co.jp/jscc/en/",type:"Official Website",description:"Official information on JSCC clearing services and risk management."},{title:"Changes in repo markets and the necessity for CCPs in Korea",author:"Journal of Derivatives and Quantitative Studies",url:"https://www.emerald.com/jdqs/article/32/1/2/1214020",type:"Academic Paper",description:"Analysis of Korean repo market development and CCP necessity."},{title:"SGX Clearing Information",author:"Singapore Exchange",url:"https://www.sgx.com/securities/clearing-information",type:"Official Documentation",description:"Clearing rules and procedures for Singapore securities markets."},{title:"HKEX CCP Disclosures",author:"Hong Kong Exchanges and Clearing",url:"https://www.hkex.com.hk/Services/Clearing/Securities/CCP-Disclosures",type:"Regulatory Disclosure",description:"Quantitative disclosures for HKEX central counterparty clearing."},{title:"The impact of CCPs' margin policies on repo markets",author:"BIS Working Papers",url:"https://www.bis.org/publ/work515.pdf",type:"Research Paper",description:"BIS analysis of CCP margin policies and their effects on repo markets."},{title:"CCP Global Clearing Report 2024",author:"CCP Global (CCPG)",url:"https://ccp-global.org/amr",type:"Industry Report",description:"Annual review of global clearing market trends and developments."},{title:"Systemic Risk in Markets with Multiple Central Counterparties",author:"Aldasoro & Veraart, BIS Working Paper No 1052",url:"https://www.bis.org/publ/work1052.htm",type:"Academic Research",description:"Analysis of how joint clearing membership transmits stress across multiple CCPs; introduces framework for quantifying payment shortfalls and challenges Cover-2 standard assumptions."},{title:"Clearing Houses 101: What They Are and How They Work",author:"Futures Trading Pedia",url:"https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/",type:"Educational Primer",description:"Comprehensive primer on clearing house functions: novation, margining, default management, netting, and guarantee funds."},{title:"Tri-Party Repo Infrastructure Reform",author:"Federal Reserve Bank of New York",url:"https://www.newyorkfed.org/banking/tpr_infr_reform.html",type:"Official Documentation",description:"FRBNY framework for tri-party repo market reforms addressing systemic risk from clearing bank intra-day credit."},{title:"Central Counterparties: Addressing their Too Important to Fail Status",author:"IMF Working Paper WP/15/21",url:"https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf",type:"Policy Research",description:"IMF analysis of CCP interconnectedness, systemic importance, and resolution frameworks for too-important-to-fail clearing houses."},{title:"How Does the Repo Market Behave Under Stress?",author:"IMF Working Paper WP/21/267",url:"https://imf.org/-/media/Files/Publications/WP/2021/English/wpiea2021267-print-pdf.ashx",type:"Academic Research",description:"Evidence from the COVID-19 crisis on repo market liquidity risk, financial networks, and market microstructure."}],YS={id:"basel-iii",title:"Basel III Regulatory Capital",region:"Global",description:"Comprehensive coverage of Basel III capital requirements, risk-weighted assets, liquidity ratios, and global bank regulation.",lessons:[{id:"lesson-1",title:"Capital Requirements & CET1",duration:"45 min",content:`
## Basel III Overview

Basel III is the third iteration of global banking regulation standards developed by the Basel Committee on Banking Supervision (BCBS), implemented following the 2008 financial crisis.

## Capital Structure

**Common Equity Tier 1 (CET1):**
- Common shares, retained earnings, disclosed reserves
- Highest quality, loss-absorbing on going-concern basis
- Minimum: 4.5% + 2.5% buffer = 7.0%
- G-SIBs: Additional 1-3.5% surcharge (up to 10.5% total)

**Additional Tier 1 (AT1):**
- Perpetual preferred shares, CoCos
- Callable after 5 years, discretionary dividends

**Tier 2:**
- Subordinated debt (>=5 years maturity)
- Loss-absorbing in resolution

## Risk-Weighted Assets (RWA)

RWA scales assets by riskiness. Three calculation approaches:

**Standardized Approach:**
- Cash/sovereigns: 0-20%
- Corporates: 20-150%
- Mortgages: 35%
- Equities: 250-1250%

**IRB Approach:**
- Banks estimate PD, LGD, EAD
- More risk-sensitive but model-dependent

**Output Floor (Basel 3.1):** IRB RWA cannot be <72.5% of standardized RWA

## Leverage Ratio

Non-risk-based backstop: Tier 1 / Total Exposure >= 3%

## Real-World Examples

**JPMorgan (2024):**
- CET1: 15.7% (min: 11.9% with surcharge)
- Leverage: 6.8% (min: 3%)

**Fed CCAR 2024:** All 31 banks passed stress tests

[External Reading: BCBS](https://www.bis.org/bcbs/)
`,keyPoints:["CET1 minimum 4.5% + 2.5% buffer + G-SIB surcharge = up to 10.5%","RWA weights assets by risk; standardized uses fixed weights, IRB uses models","Leverage ratio (3% min) is non-risk-based backstop","Basel 3.1 adds 72.5% output floor for IRB banks"],quiz:[{question:"What is the minimum CET1 ratio under Basel III including the capital conservation buffer?",options:["4.5%","7.0%","8.0%","10.5%"],correctIndex:1,explanation:"Minimum CET1 is 4.5% plus 2.5% capital conservation buffer = 7.0%. G-SIBs have additional surcharges up to 3.5%."},{question:"What is the purpose of the leverage ratio?",options:["Replace risk-weighted capital","Provide non-risk-based backstop","Reduce liquidity requirements","Eliminate Tier 2 capital"],correctIndex:1,explanation:"The leverage ratio (Tier 1 / Total Exposure) provides a non-risk-based backstop to prevent excessive leverage, regardless of risk weights."},{question:"What is the Basel 3.1 output floor?",options:["IRB RWA cannot exceed standardized RWA","IRB RWA cannot be less than 72.5% of standardized RWA","Total capital must equal 72.5% of assets","Leverage ratio minimum is 7.25%"],correctIndex:1,explanation:"The output floor limits capital savings from internal models: IRB RWA must be at least 72.5% of what the standardized approach would produce."}]},{id:"lesson-2",title:"Liquidity Standards: LCR & NSFR",duration:"40 min",content:`
## Liquidity Coverage Ratio (LCR)

**Formula:**
LCR = (High-Quality Liquid Assets) / (Net Cash Outflows over 30 days)

**Minimum:** 100%

**HQLA Tiers:**
- Level 1: Cash, central bank reserves, sovereigns (unlimited, 0% haircut)
- Level 2A: Agencies, supranationals (max 40% of HQLA, 15% haircut)
- Level 2B: IG corporate bonds, equities (max 15% of HQLA, 25-50% haircut)

**Net Cash Outflows:**
- Retail deposits: 3-10% run-off rate
- Wholesale funding: 20-100% run-off rate
- Derivatives payables: 100%

**Why 30 days?**
Assumes central bank backstop available beyond 30-day window

## Net Stable Funding Ratio (NSFR)

**Formula:**
NSFR = (Available Stable Funding) / (Required Stable Funding)

**Minimum:** 100%

**Available Stable Funding (ASF):**
- Regulatory capital: 100%
- Stable retail deposits: 95%
- Less stable retail: 50%
- Wholesale funding (1-5 years): 50%

**Required Stable Funding (RSF):**
- Cash, short-term securities: 0%
- Mortgages: 65%
- Corporate loans: 85%
- Long-term assets: 100%

## LCR vs NSFR

**LCR:** Short-term liquidity (30 days)
**NSFR:** Structural funding mismatches (1-year horizon)

**Interaction:**
- LCR prevents fire sales during stress
- NSFR prevents over-reliance on short-term wholesale funding
- Together: comprehensive liquidity framework

## Industry Impact

**Pre-Basel III:**
- No global liquidity standards
- Over-reliance on wholesale funding
- Maturity transformation not constrained

**Post-Basel III:**
- Banks hold larger liquidity buffers
- Reduced reliance on short-term funding
- Higher funding costs (longer-term liabilities more expensive)
- "FHLB problem" in US—regulatory arbitrage

**US Implementation Issues:**
- FHLB advances excluded from LCR (created arbitrage)
- Fed reserve balances count as HQLA (post-QE benefit)

## Key Takeaways

**LCR** ensures banks can survive 30-day stress without fire sales
**NSFR** prevents maturity mismatch in normal times
**Both binding:** Large banks must satisfy simultaneously
**Trade-off:** Higher liquidity = lower returns

[External Reading: BIS Liquidity Standards](https://www.bis.org/bcbs/publ/d295.pdf)
`,keyPoints:["LCR: HQLA / 30-day net cash outflows >= 100%","NSFR: Stable funding / Required funding >= 100%","LCR addresses short-term stress; NSFR addresses structural mismatch","HQLA Level 1 (cash/sovereigns) unlimited; Level 2B (corporates) capped at 15%"],quiz:[{question:"What is the LCR minimum requirement?",options:["75%","90%","100%","125%"],correctIndex:2,explanation:"Banks must hold High-Quality Liquid Assets equal to at least 100% of projected net cash outflows over a 30-day stress period."},{question:"What is the key difference between LCR and NSFR?",options:["LCR uses risk weights; NSFR does not","LCR is 30-day; NSFR is structural/1-year horizon","LCR applies to small banks only","NSFR was eliminated in Basel 3.1"],correctIndex:1,explanation:"LCR addresses short-term liquidity stress (30 days), while NSFR addresses structural funding mismatches over a 1-year horizon."},{question:"What is the maximum Level 2B assets can constitute of total HQLA?",options:["5%","15%","25%","40%"],correctIndex:1,explanation:"Level 2B assets (IG corporate bonds, certain equities) are capped at 15% of total HQLA to ensure liquidity quality."}]}]},KS={id:"fx-derivatives",title:"FX Derivatives & Markets",region:"Global",description:"Foreign exchange derivatives, CLS Bank settlement, non-deliverable forwards, and currency risk management.",lessons:[{id:"lesson-1",title:"FX Swaps, Forwards & CLS Bank",duration:"40 min",content:`
## The FX Market: Largest in the World

The foreign exchange market trades over **$7.5 trillion daily** (BIS 2022), making it the largest and most liquid financial market globally.

## FX Swaps

**Structure:**
Simultaneous purchase and sale of identical amounts of one currency for another with two different value dates.

**Mechanics:**
- Near leg: Exchange currency A for currency B at spot rate
- Far leg: Reverse exchange at forward rate
- Difference reflects interest rate differential

**Economic Interpretation:**
Effectively a collateralized loan in one currency versus another. No exchange rate risk—only counterparty credit risk.

**Formula:**
Forward Rate = Spot Rate × (1 + r_quote × t) / (1 + r_base × t)

Where r = interest rates, t = time to maturity

## FX Forwards

**Single exchange:** Agreement to exchange currencies at future date at predetermined rate

**Forward Points:**
Difference between forward and spot rate, quoted in pips (0.0001 for most pairs, 0.01 for JPY pairs)

**Covered Interest Rate Parity:**
Forward premium/discount should equal interest rate differential

**Deviation = Arbitrage Opportunity:**
When CIP fails, "FX swap basis" emerges—the basis is the deviation from theoretical forward rate

## CLS Bank: Eliminating Settlement Risk

**The Problem:**
Herstatt Risk—1974 German bank failure left counterparties exposed during settlement. Bank failed after receiving DEM but before delivering USD.

**CLS Solution:**
Continuous Linked Settlement—Payment versus Payment (PvP)

**How It Works:**
1. Both parties fund CLS with their payment currencies
2. CLS holds both sides simultaneously
3. Simultaneous release when both confirmed
4. Eliminates Herstatt risk

**Statistics:**
- Settles $6+ trillion daily
- 18 currencies supported
- 76 settlement members
- 23,000+ third-party clients

## Non-Deliverable Forwards (NDFs)

**Purpose:**
Hedge or speculate on currencies with capital controls or limited convertibility

**Mechanism:**
- Net settlement only (no physical currency delivery)
- Difference between contracted rate and fixing rate settled in convertible currency
- Popular for: CNY, KRW, TWD, PHP, IDR, BRL, MXN, RUB, etc.

**Fixing Sources:**
- CNY: CFETS reference rate
- KRW: KRW fixing at 11:00am Seoul
- Other: Reputable market sources

**Offshore CNY (CNH) vs Onshore (CNY):**
- CNH: Freely tradable outside mainland China
- CNY: Capital controlled onshore
- NDFs provide non-China access to CNY exposure

## Key Takeaways

**FX swaps** are the dominant instrument (50%+ of FX volume)
**CLS Bank** eliminated Herstatt risk through PvP settlement
**NDFs** provide access to restricted currencies without physical delivery
**CIP deviations** signal funding market stress (widened significantly in 2008, 2020)

[External Reading: BIS Triennial Survey](https://www.bis.org/statistics/rpfx22.htm)
`,keyPoints:["FX market: $7.5T daily volume; FX swaps are largest component","FX swaps = collateralized loan; forward points reflect interest rate differential","CLS Bank: PvP settlement eliminates Herstatt risk; settles $6T+ daily","NDFs: Net-settled forwards for restricted currencies (CNY, KRW, TWD)"],quiz:[{question:"What risk does CLS Bank eliminate?",options:["Credit risk","Interest rate risk","Herstatt (settlement) risk","Liquidity risk"],correctIndex:2,explanation:"CLS Bank eliminates Herstatt risk through Payment-versus-Payment (PvP) settlement, ensuring both sides of an FX transaction settle simultaneously."},{question:"What is the primary purpose of NDFs?",options:["Physical currency delivery","Trading major currencies","Accessing currencies with capital controls","Central bank intervention"],correctIndex:2,explanation:"NDFs (Non-Deliverable Forwards) allow hedging and speculation on currencies with capital controls (like CNY, KRW) without requiring physical currency delivery."},{question:"What does an FX swap economically represent?",options:["A bet on exchange rate direction","A collateralized loan in one currency vs another","A currency option","A credit default swap"],correctIndex:1,explanation:"An FX swap is economically a collateralized loan in one currency versus another, with the interest rate differential reflected in the forward points."}]}]},XS={id:"fixed-income-math",title:"Fixed Income Mathematics",region:"Global",description:"Essential bond math: duration, convexity, yield curve dynamics, and fixed income risk metrics.",lessons:[{id:"lesson-1",title:"Duration, Convexity & Yield Curve",duration:"40 min",content:`
## Bond Pricing Fundamentals

**Price-Yield Relationship:**
Bond prices and yields move inversely. Higher yields → lower prices.

**Price Formula:**
P = Σ (C / (1+y)^t) + (F / (1+y)^n)

Where C=coupon, y=yield, F=face value, n=maturity

**Current Yield:**
Annual Coupon / Price

**Yield to Maturity (YTM):**
Internal rate of return if held to maturity

## Duration

Duration measures price sensitivity to yield changes.

### Macaulay Duration

Weighted average time until cash flows received:

MacD = Σ (t × PV(CF_t)) / Price

### Modified Duration

Price sensitivity (% change per 1% yield change):

ModD = MacD / (1 + y/k)

Where k = compounding periods per year

**Approximate Price Change:**
ΔP/P ≈ -ModD × Δy

**Example:**
- Modified Duration = 5 years
- Yield increases 1% (100 bps)
- Price declines ≈ 5%

### Dollar Duration

Dollar change in value:
DD = ModD × Price × 0.0001 (for 1bp)

### Effective Duration

For bonds with embedded options:

EffD = (P_- - P_+) / (2 × P_0 × Δy)

Measures sensitivity using price changes from rate shifts (accounts for option exercise)

## Convexity

Duration is a linear approximation; convexity improves accuracy.

**Convexity Formula:**
Convexity = [P_+ + P_- - 2×P_0] / [P_0 × (Δy)^2]

**Combined Price Change:**
ΔP/P ≈ -ModD × Δy + ½ × Convexity × (Δy)^2

**Why Convexity Matters:**
- Positive convexity: Price rises more when yields fall than it falls when yields rise
- Negative convexity (callable bonds): Opposite behavior
- Longer maturity and lower coupon = higher convexity

**Example:**
- Duration: 5, Convexity: 30
- Yield falls 2%: ΔP/P ≈ -5×(-0.02) + ½×30×(0.02)^2 = 10% + 0.6% = 10.6%
- Duration alone would estimate only 10%

## Yield Curve Dynamics

### Theories of the Yield Curve

**Expectations Theory:**
Long rates equal expected future short rates
Forward rate = Expected future spot rate

**Liquidity Preference Theory:**
Investors demand premium for holding long-term bonds
Upward slope even if expectations are flat

**Market Segmentation Theory:**
Different investor preferences create supply/demand at different maturities
Pension funds buy long end; banks buy short end

### Key Yield Curve Shapes

**Normal:** Upward sloping (long rates > short rates)
**Inverted:** Downward sloping (recession predictor)
**Flat:** Similar rates across maturities
**Humped:** Highest at intermediate maturities

### Yield Curve Strategies

**Steepener:**
- Long short-term, short long-term
- Profit if curve steepens

**Flattener:**
- Short short-term, long long-term
- Profit if curve flattens

**Butterfly:**
- Position in three maturities (e.g., 2s/5s/10s)
- Express views on curvature

**Barbell vs. Bullet:**
- Barbell: Concentrated at short and long ends
- Bullet: Concentrated in one maturity area
- With same duration, barbell has higher convexity

## DV01 (Dollar Value of 01)

Price change for 1 basis point (0.01%) yield change:

DV01 = Modified Duration × Price × 0.0001

**Example:**
- $10m position, duration 5
- DV01 = 5 × $10m × 0.0001 = $5,000
- 1bp rate increase → $5,000 loss

## Key Rate Duration

Sensitivity to rate changes at specific maturity points:

- 2-year key rate duration: sensitivity to 2-year rate change
- 10-year key rate duration: sensitivity to 10-year rate change

**Use:** Decompose portfolio exposure across the curve

## Real-World Application: Hedging

**Hedge Ratio:**
HR = (DV01_target / DV01_hedge) × (CF_target / CF_hedge)

**Example:**
- Long $10m corporate bonds (DV01 = $5,000)
- Hedge with Treasury futures (DV01 = $50/contract)
- Contracts needed: 5,000 / 50 = 100 contracts

## Key Takeaways

**Duration** measures first-order price sensitivity
**Convexity** measures second-order (curvature) improvement to duration approximation
**Yield curve** reflects expectations, risk premia, and supply/demand
**DV01** is the practical trading metric for basis point sensitivity
**Effective duration** required for bonds with embedded options

[External Reading: Fabozzi - Fixed Income Analysis](https://www.cfainstitute.org/)
`,keyPoints:["Modified Duration ≈ % price change for 1% yield change (inverse relationship)","Convexity improves price change estimate: ΔP/P ≈ -ModD×Δy + ½×Convexity×(Δy)²","DV01 = dollar value of 1bp change = ModD × Price × 0.0001","Yield curve shape reflects expectations, liquidity preference, and segmentation","Barbell portfolios have higher convexity than bullet portfolios at same duration"],quiz:[{question:"What does modified duration measure?",options:["Time to maturity","Price sensitivity to yield changes","Credit risk","Coupon rate"],correctIndex:1,explanation:"Modified duration measures the approximate percentage change in bond price for a 1% change in yield. A duration of 5 means ~5% price change for 100bp yield move."},{question:"Why is convexity important?",options:["It measures credit risk","It improves the linear duration approximation by capturing curvature","It measures liquidity","It replaces duration entirely"],correctIndex:1,explanation:"Duration is a linear (first-order) approximation. Convexity (second-order) improves accuracy by accounting for the fact that the price-yield relationship is curved, not straight."},{question:"What does an inverted yield curve typically signal?",options:["Economic expansion","Expected recession","High inflation","Currency devaluation"],correctIndex:1,explanation:"An inverted yield curve (short-term rates > long-term rates) has historically been a reliable predictor of recession, as it suggests markets expect future rate cuts to stimulate a slowing economy."}]}]},QS={id:"algo-trading",title:"Algorithmic Trading & Market Microstructure",region:"Global",description:"High-frequency trading, market making, order types, and the mechanics of modern electronic markets.",lessons:[{id:"lesson-1",title:"Market Structure & HFT",duration:"40 min",content:`
## Modern Market Structure

**Evolution:**
- 1990s: Floor-based trading (specialists, open outcry)
- 2000s: Electronic trading adoption
- 2010s+: High-frequency trading dominance
- Today: 70%+ of equity volume is algorithmic

## Market Participants

**HFT (High-Frequency Trading) Firms:**
- Renaissance Technologies, Two Sigma, Citadel, Virtu
- Hold positions milliseconds to minutes
- Co-located servers at exchanges
- Compete on speed, not directional views

**Market Makers:**
- Provide continuous bid/offer quotes
- Profit from spread, rebate capture
- Inventory management critical

**Institutional Algorithms:**
- VWAP, TWAP, Implementation Shortfall
- Minimize market impact of large orders
- Broker-provided execution services

**Retail Flow:**
- Robinhood, Charles Schwab, etc.
- Often internalized or sold to wholesalers
- Payment for order flow (PFOF) model

## Order Types

**Basic Orders:**
- Market: Execute immediately at best price
- Limit: Execute at specified price or better
- Stop: Become market order when trigger hit

**Advanced Order Types:**
- Iceberg/Disclosed: Show only portion of size
- Pegged: Follow NBBO (mid, bid+, ask-)
- IOC (Immediate-or-Cancel): Fill what you can, cancel rest
- FOK (Fill-or-Kill): All or nothing immediately
- Post-Only: Only add liquidity, never remove

## Market Making Economics

**Revenue Sources:**
1. **Spread capture:** Buy at bid, sell at offer
2. **Exchange rebates:** Payment for providing liquidity
3. **Inventory appreciation:** Directional bias (sometimes)

**Costs:**
1. **Adverse selection:** Trading with informed flow
2. **Inventory holding:** Carrying cost, risk
3. **Technology:** Infrastructure, colocation, data

**Profit Formula:**
E[Profit] = (Spread + Rebate) - (Adverse Selection + Holding Cost)

## Latency Arbitrage

**The Race:**
- Multiple exchanges exist (NYSE, NASDAQ, IEX, etc.)
- Price discrepancies arise between venues
- HFT firms detect and exploit in microseconds

**Example:**
1. Large order hits NASDAQ at price P
2. HFT firm sees this before exchange broadcasts
3. Buys at other exchanges at <P
4. Sells at P on NASDAQ

**SNARK:** Systematic Normalized Activity and Response Kit
- Michael Lewis "Flash Boys" controversy
- IEX introduced 350μs delay (speed bump) to prevent this

## Market Impact

**Temporary vs. Permanent Impact:**
- Temporary: Price reverts after order completion (liquidity effect)
- Permanent: Price moves persist (information effect)

**Square Root Law:**
Market Impact ≈ σ × √(Order Size / Average Daily Volume)

Where σ = daily volatility

**Implication:**
- Doubling order size increases impact by ~41% (not 100%)
- Spreading execution reduces impact

## Regulatory Response

**SEC Rule 15c3-5 (Market Access Rule):**
- Pre-trade risk controls required
- Credit limits, price collars, order limits
- "Kill switch" capability

**Reg NMS (National Market System):**
- Trade-through rule (must get best price)
- Sub-penny pricing prohibited (> $1 stocks)
- Access fee caps

**MiFID II (Europe):
- Algorithm registration required
- Kill switches, maximum order-to-trade ratios
- HFT definitions and obligations
- Tick size regimes

## Flash Crashes

**May 6, 2010:**
- Dow dropped 998 points (largest intraday decline)
- Recovered most losses in minutes
- E-Mini S&P 500 circuit breakers triggered

**Causes:**
- Large mutual fund sell algorithm
- HFT firms withdrew liquidity
- Cross-market contagion (futures → equities)
- No fundamental news

**Regulatory Response:**
- Market-wide circuit breakers (LULD: Limit Up-Limit Down)
- Minimum resting times for orders
- Cancellation of clearly erroneous trades

## Information Asymmetries

**Three Types of Information:**

**Public Information:**
- News, earnings, economic data
- Efficiently priced quickly

**Private Information (Illegal):**
- Insider trading
- Material non-public information

**Semi-Private Information (Gray Area):**
- Order flow data (who's buying/selling)
- Market makers see this
- Payment for order flow monetizes this

## Payment for Order Flow (PFOF)

**The Model:**
- Retail brokers route orders to wholesalers (Citadel, Virtu, etc.)
- Wholesalers pay brokers for the flow
- Wholesalers profit from execution

**Controversy:**
- Does retail get best execution?
- PFOF banned in UK/EU (conflict of interest)
- Robinhood relies heavily on PFOF revenue

**SEC Study:**
Retail often receives price improvement vs. NBBO, but may miss better prices at other venues

## Key Takeaways

**Markets are faster than ever:** Microsecond competition, co-location essential
**HFT provides liquidity:** Tighter spreads, more continuous markets
**But creates new risks:** Flash crashes, algorithmic feedback loops
**Market structure matters:** Exchange fees, rebates, order types affect outcomes
**Regulation evolving:** Balancing innovation with stability

[External Reading: Larry Harris - Trading and Exchanges](https://www.amazon.com/Trading-Exchanges-Market-Microstructure-Practitioners/dp/0195144708)
`,keyPoints:["70%+ of equity volume is algorithmic; HFT firms compete on speed","Market makers profit from spreads + rebates; costs are adverse selection","Market Impact ≈ σ × √(Order Size / ADV) — square root law","Flash Crash (2010): Algorithms + withdrawn liquidity caused 998-point drop","PFOF: Retail brokers sell order flow to wholesalers (controversial)"],quiz:[{question:"What is the primary revenue source for market makers?",options:["Directional trading profits","Spread capture + exchange rebates","Interest income","Commission fees"],correctIndex:1,explanation:"Market makers primarily profit from capturing the bid-ask spread and receiving exchange rebates for providing liquidity, not from directional bets."},{question:"What caused the May 6, 2010 Flash Crash?",options:["Terrorist attack","Large mutual fund algorithm + HFT liquidity withdrawal","Interest rate spike","Bank failure"],correctIndex:1,explanation:"The Flash Crash was caused by a large mutual fund sell algorithm triggering HFT firms to withdraw liquidity, causing cascading price declines and cross-market contagion."},{question:"What is Payment for Order Flow (PFOF)?",options:["Retail investors paying brokers","Brokers receiving payment from wholesalers for routing retail orders","Exchanges paying for listings","HFT firms paying for market data"],correctIndex:1,explanation:"PFOF is when retail brokers receive payment from market makers/wholesalers (like Citadel, Virtu) in exchange for routing customer orders to them."}]}]},JS={id:"sovereign-debt",title:"Sovereign Debt Crises & Restructuring",region:"Global",description:"Sovereign default history, debt restructuring mechanics, collective action clauses, and crisis management.",lessons:[{id:"lesson-1",title:"Sovereign Default & Restructuring",duration:"45 min",content:`
## Sovereign Debt: A Unique Asset Class

Unlike corporate debt, sovereign debt lacks:
- Bankruptcy court jurisdiction
- Collateral enforcement
- Liquidation mechanism

Sovereigns default selectively when cost of repayment exceeds cost of default.

## Historical Defaults

**Notable Sovereign Defaults:**

**Argentina (2001-2005, 2014):**
- $100+ billion default (largest at the time)
- 70% "haircut" on debt exchange
- Holdout creditors led by Elliott Management
- Decades of litigation

**Greece (2012):**
- Largest sovereign restructuring in history
- €200+ billion debt exchange
- 53.5% haircut on face value
- Collective action clauses used

**Russia (1998):**
- Devaluation + default on GKOs (local currency)
- IMF bailout failed
- Recovery took years

**Lehman of Sovereigns:**
- Venezuela (2017): Default on $60+ billion
- Ongoing sanctions, hyperinflation

## Why Sovereigns Default

**Willingness vs. Ability:**
- **Ability:** Can they physically pay? (rarely the issue for local currency)
- **Willingness:** Do they choose to pay? (political decision)

**Common Causes:**
1. External debt burden > export capacity
2. Currency mismatch (borrowed foreign, revenue local)
3. Banking crisis → fiscal costs
4. Commodity price collapse (exporters)
5. Political shocks, regime change

**Odious Debt Doctrine:**
Should successor regimes honor debts incurred by prior regimes for personal benefit? Not legally recognized, but influences negotiations.

## Debt Sustainability Analysis (DSA)

**IMF Framework:**

**Indicators:**
- Debt-to-GDP ratio
- Debt-to-revenue ratio
- Interest-to-revenue ratio
- Gross financing needs (% of GDP)

**Thresholds (rough guide):**
- Emerging markets debt/GDP > 70% = risky
- Advanced economies can sustain higher levels (>100%)

**Dynamic:**
Δd = (r - g) × d + primary deficit

Where:
- d = debt/GDP
- r = interest rate
- g = growth rate
- If r > g, debt grows without primary surplus

## Restructuring Mechanics

### The Restructuring Process

**1. Pre-Default Negotiation:**
- Creditor committees formed
- Debt sustainability analysis
- Negotiate terms

**2. Standstill:**
- Payment suspension during negotiation
- May trigger cross-default clauses

**3. Exchange Offer:**
- Old bonds exchanged for new bonds
- Haircut: reduction in face value or coupons
- Maturity extension

**4. Implementation:**
- Minimum participation threshold (often 75-95%)
- Collective Action Clauses (CACs) bind holdouts

### Haircut Calculation

Not just face value reduction—includes:
- Face value haircut
- Coupon reduction
- Maturity extension (present value effect)
- Collateral/seniority changes

**Present Value Haircut:**
Compare PV of old cash flows vs. new cash flows (at appropriate discount rate)

**Example:**
- Old bond: 10-year, 8% coupon, $100 face
- New bond: 20-year, 4% coupon, $50 face
- Market yield: 10%
- Face value haircut: 50%
- PV haircut: ~65%

## Collective Action Clauses (CACs)

**The Problem:**
Free-rider holdouts (vulture funds) demand full payment, blocking restructuring.

**CACs Solution:**
Contractual provisions allowing majority to bind minority.

**Single Series CACs:**
- Vote by individual bond series
- Typically 75% threshold
- Series-by-series approach

**Aggregation CACs:**
- Vote across all series combined
- Lower individual series thresholds
- Prevents cherry-picking by holdouts

**ICMA Standard CACs (2014):**
- Dual limb: 66⅔% across all bonds + 50% in each series
- Single limb: 75% across all bonds (no per-series requirement)

## The Argentine Saga: A Case Study

**2001:** Default on $100+ billion

**2005 Exchange:**
- 76% participation
- ~70% haircut (NAV)
- Held out: Elliott, Aurelius, etc.

**2010 Exchange:**
- Additional 18% participate
- Total: ~93%

**Holdout Litigation:**
- Elliott (NML Capital) bought distressed debt
- Sued for full payment in NY courts
- Pari passu clause interpretation: equal ranking = equal payment
- Judge Griesa: Argentina cannot pay exchanged bondholders without paying holdouts

**2014:**
- Argentina defaults again to avoid paying holdouts
- Sovereign bond markets turmoil

**2016 Resolution:**
- Macri government settles with holdouts
- $4.65 billion to Elliott and others
- Argentina returns to markets

**Lessons:**
- Pari passu risk in NY law bonds
- Importance of CACs
- Holdouts can block payments to others

## Official Sector Involvement

**IMF:**
- Balance of payments financing
- Conditionality (fiscal austerity, reforms)
- Debt sustainability assessments
- "Lender of last resort" for sovereigns

**Paris Club:**
- Government-to-government debt restructuring
- 22 creditor nations
- Coordinated approach

**Bilateral vs. Multilateral:**
- Bilateral: Government to government (often concessional)
- Multilateral: IMF, World Bank, regional development banks
- Multilateral typically "preferred creditor status"—paid first

## Private Sector Involvement (PSI)

**Greek Restructuring (2012):**
- Largest sovereign debt restructuring ever
- €206 billion of bonds exchanged
- 53.5% face value haircut
- CACs invoked retroactively (legislation)

**Lessons:**
- Retroactive CACs possible (legal/political risk)
- Greek law bonds easier to restructure than foreign law
- ECB holdings exempted (controversial)

## Contemporary Risks (2024-2025)

**High Risk Sovereigns:**
- Argentina (again): Inflation >100%, new restructuring likely
- Egypt: Large debt service, IMF program
- Pakistan: Balance of payments crisis
- Ghana, Zambia, Ethiopia: In default/restructuring
- Ukraine: War-related restructuring needed

**Emerging Market Concerns:**
- Higher US rates = higher refinancing costs
- Dollar strength = local currency debt stress
- China slowdown = commodity exporter pain

## Key Takeaways

**Sovereign debt is political:** Default is a choice, not always inevitable
**Restructuring is messy:** Takes years, holdouts complicate, litigation common
**CACs essential:** Majority restructuring prevents minority obstruction
**No bankruptcy court:** Sovereign immunity, forum selection critical
**Local vs. foreign currency:** Local currency can inflate away; foreign currency harder to default on but more painful when it happens

[External Reading: IMF Sovereign Debt Restructuring](https://www.imf.org/en/Publications/Policy-Papers/Issues/2020/03/27/IMF-Sovereign-Debt-Restructuring-49519)
`,keyPoints:["Sovereigns default when repayment cost exceeds default cost (willingness vs ability)","Argentina (2001): Largest default, decade of litigation, Elliott holdout case","Greece (2012): Largest restructuring, 53.5% haircut, retroactive CACs used","Collective Action Clauses (CACs) allow majority to bind minority creditors","Paris Club coordinates government-to-government restructurings"],quiz:[{question:"What is the primary difference between sovereign and corporate debt?",options:["Interest rates are higher","No bankruptcy mechanism exists","All sovereign debt is local currency","Sovereigns never default"],correctIndex:1,explanation:"Unlike corporate debt, sovereign debt lacks a bankruptcy court, collateral enforcement, and liquidation mechanism. Sovereign immunity complicates creditor remedies."},{question:"What are Collective Action Clauses (CACs)?",options:["Government spending limits","Provisions allowing majority creditors to bind minority","IMF lending conditions","Currency controls"],correctIndex:1,explanation:"CACs are contractual provisions in bond documentation that allow a supermajority of bondholders (typically 75%) to approve a restructuring that binds all creditors, preventing holdout obstruction."},{question:"What was the key issue in the Argentina holdout litigation?",options:["Currency devaluation","Pari passu clause interpreted as requiring equal payment to all creditors","Fraudulent bond issuance","Inflation adjustment"],correctIndex:1,explanation:"Holdout funds successfully argued that Argentina's pari passu (equal treatment) clause required equal payment to all creditors, blocking payments to exchange bondholders unless holdouts were paid."}]}]},ZS={id:"quant-risk",title:"Quantitative Risk Models",region:"Global",description:"Value at Risk (VaR), Expected Shortfall, stress testing, and model risk in financial institutions.",lessons:[{id:"lesson-1",title:"VaR, CVaR & Expected Shortfall",duration:"45 min",content:`
## Value at Risk (VaR)

VaR answers: "What is my maximum loss at a given confidence level over a specific time horizon?"

**Definition:**
VaR(α) = The loss level that will not be exceeded with probability (1-α)

**Example:**
- 99% VaR of $10 million over 1 day
- Meaning: We expect losses to exceed $10m only 1 day out of 100
- Or: We are 99% confident losses won't exceed $10m

## VaR Calculation Methods

### Historical Simulation

**Method:**
1. Collect historical returns (typically 1-3 years)
2. Apply current portfolio weights to historical scenarios
3. Sort simulated P&L results
4. VaR = (1-α) percentile of distribution

**Pros:**
- Non-parametric (no distribution assumptions)
- Captures actual historical correlations
- Simple to implement

**Cons:**
- Assumes future = past
- Doesn't capture "unprecedented" events
- Equal weighting of old and recent data

### Variance-Covariance (Parametric)

**Assumption:** Returns are normally distributed

**Formula:**
VaR = Portfolio Value × Z_α × σ_p × √t

Where:
- Z_α = standard normal quantile (2.33 for 99%, 1.65 for 95%)
- σ_p = portfolio volatility
- t = time horizon

**Portfolio Volatility:**
σ_p = √(w'Σw)

Where w = weight vector, Σ = covariance matrix

**Pros:**
- Analytically tractable
- Can calculate quickly
- "What-if" analysis easy

**Cons:**
- Normality assumption fails (fat tails)
- Correlations unstable in crisis
- Linear approximations miss options gamma

### Monte Carlo Simulation

**Method:**
1. Specify distribution parameters (or use copulas)
2. Generate thousands of random scenarios
3. Revalue portfolio under each scenario
4. VaR = (1-α) percentile of simulated P&L

**Pros:**
- Can model complex instruments
- Flexible distributional assumptions
- Captures path-dependency

**Cons:**
- Computationally intensive
- Model risk (garbage in, garbage out)
- Correlation/copula misspecification

## VaR Criticisms & Limitations

**1. Says Nothing About Tail Beyond VaR:**
99% VaR tells you what happens 99% of the time, but nothing about the 1% tail—the catastrophic losses.

**2. Not Subadditive:**
VaR(A+B) may exceed VaR(A) + VaR(B)—violates diversification principle

**3. Multiple Valid Results:**
Different methods produce different VaR numbers for same portfolio

**4. Procyclicality:**
In calm markets, VaR drops → allows more risk → builds up for crisis

**5. The "Lehman Brothers" Problem:**
Lehman reported VaR that was "correct" by definition—but it was grossly inadequate

## Expected Shortfall (ES) / CVaR

**Definition:**
ES(α) = Expected loss, given that loss exceeds VaR(α)

**Formula:**
ES = E[X | X > VaR]

**Example:**
- 99% VaR = $10 million
- 99% ES = $25 million
- Interpretation: When losses exceed VaR (1% of time), average loss is $25m

**Advantages Over VaR:**
1. **Coherent risk measure:** Satisfies subadditivity (ES(A+B) ≤ ES(A)+ES(B))
2. **Captures tail risk:** Accounts for severity, not just threshold
3. **Convexity:** Easier optimization

**Calculation:**
Historical: Average of losses beyond VaR threshold
Parametric: For normal distribution, ES = VaR × [φ(z_α)/(1-α)]

## Basel III Trading Book Reforms (FRTB)

**Fundamental Review of the Trading Book:**

**Why Change from VaR:**
- VaR failed in 2008
- Trading book losses far exceeded VaR
- Model risk underestimated

**New Standard:**
**Expected Shortfall (ES) at 97.5% confidence, 10-day holding period**

**Rationale:**
- ES captures tail risk
- 97.5% ES ≈ 99% VaR for normal distribution
- But ES >> VaR for fat-tailed distributions

**Capital Charge:**
Capital = max(ES_current, ES_stressed) × multiplier

**Stressed ES:**
Calculated using period of significant financial stress

## Stress Testing

**Complement to VaR/ES:**
- VaR/ES: Statistical, "expected" tail behavior
- Stress tests: Scenario-based, "what if"

### Types of Stress Tests

**Historical Scenarios:**
- 2008 financial crisis
- 2020 COVID crash
- 1998 LTCM/Russian default
- 1987 Black Monday
- Apply these return scenarios to current portfolio

**Hypothetical Scenarios:**
- 200bp parallel rate shift
- Equity market -30%
- Emerging market crisis
- Sovereign default cascade

**Reverse Stress Tests:**
- Start with portfolio failure
- Work backward: what scenario causes this?
- Identifies vulnerabilities

### Regulatory Stress Testing

**US CCAR (Comprehensive Capital Analysis and Review):**
- Annual Fed stress tests for large banks
- Severely adverse scenario
- Quantitative + qualitative assessment
- Pass = ability to pay dividends/buybacks

**EU EBA Stress Tests:**
- Biennial banking sector assessment
- Disclosure of bank-level results
- "Bottom up" methodology

**COVID-19 Stress Tests:**
- Banks assessed under pandemic scenarios
- Most passed; capital buffers used
- Real-world validation of stress testing

## Model Risk Management

**SR 11-7 (Fed Guidance on Model Risk):**

**Model Risk:**
Potential for adverse consequences from decisions based on incorrect or misused model outputs

**Three Lines of Defense:**

**1. Model Development:**
- Conceptual soundness
- Input data quality
- Sensitivity testing
- Documentation

**2. Model Validation:**
- Independent from developers
- Ongoing monitoring
- Backtesting
- Periodic re-validation

**3. Internal Audit:**
- Governance review
- Compliance assessment

### Backtesting VaR

**Procedure:**
- Count days when actual loss exceeded VaR
- Should be approximately (1-confidence level) × days
- 99% VaR: expect ~2.5 exceedances per year

**Traffic Light Approach (Basel):**
- Green: 0-4 exceedances (acceptable)
- Yellow: 5-9 exceedances (investigate)
- Red: 10+ exceedances (model rejected, capital penalty)

**Limitations:**
- Even "good" models will occasionally show clusters
- Exceedances may indicate good risk-taking, not bad model
- Ignores magnitude of exceedances

## Key Model Risk Failures

**LTCM (1998):**
- Relied on convergence trades
- Assumed historical correlation would persist
- Russia default caused correlation → 1
- Lost $4.6 billion in months

**CDO Models (2008):**
- Assumed housing prices wouldn't fall nationally
- Gaussian copula underestimated tail correlation
- AAA-rated tranches defaulted
- $435 billion in CDO losses

**London Whale (2012):**
- VaR model understated risk by factor of 10
- Incorrect correlation inputs
- JPMorgan lost $6.2 billion

## Current Best Practices

**Model Governance:**
- Inventory of all models
- Risk tiering (materiality assessment)
- Regular validation schedules
- Use limitations and approval processes

**Model Development Standards:**
- Sensitivity analysis required
- Out-of-sample testing
- Benchmark models (simple alternatives)
- Documentation of limitations

**Challenger Models:**
- Maintain alternative models alongside primary
- Alert when models diverge significantly

## Key Takeaways

**VaR is useful but flawed:** Good for normal times, fails in crises, ignores tail severity
**Expected Shortfall is better:** Captures tail risk, satisfies diversification principle
**Stress testing is essential:** Scenarios reveal VaR/ES blind spots
**Model risk is real:** LTCM, 2008, London Whale demonstrate model failure consequences
**Governance matters:** Independent validation, backtesting, and use limitations required

[External Reading: BCBS FRTB Standards](https://www.bis.org/bcbs/publ/d352.pdf)
`,keyPoints:["VaR: Maximum loss at given confidence level (e.g., 99% VaR); ignores tail beyond threshold","Expected Shortfall (ES/CVaR): Average loss beyond VaR; satisfies subadditivity; better risk measure","FRTB: Basel III replaces VaR with ES at 97.5% for trading book capital","Backtesting: Count exceedances; green (0-4), yellow (5-9), red (10+)","Model risk failures: LTCM correlation breakdown, CDO Gaussian copula, London Whale VaR error"],quiz:[{question:"What is the key limitation of VaR that Expected Shortfall addresses?",options:["Computational complexity","VaR ignores the severity of losses beyond the threshold","VaR requires normal distribution","VaR is always too conservative"],correctIndex:1,explanation:"VaR tells you the loss level that will not be exceeded at a given confidence level but says nothing about how bad losses might be in the tail beyond that threshold. ES (Expected Shortfall) captures the average of those tail losses."},{question:"What is the FRTB standard for trading book capital?",options:["99% VaR, 1-day","97.5% Expected Shortfall, 10-day","95% VaR, 10-day","Maximum historical loss"],correctIndex:1,explanation:"The Fundamental Review of the Trading Book (FRTB) replaced VaR with Expected Shortfall at 97.5% confidence over a 10-day horizon to better capture tail risk in trading portfolios."},{question:"What caused the LTCM failure in 1998?",options:["Interest rate spikes","Model assumption that correlations would remain stable failed","Currency devaluation","Fraud"],correctIndex:1,explanation:`LTCM's models assumed historical correlations would persist. When Russia defaulted, correlations spiked toward 1 ("flight to quality"), causing convergence trades to diverge instead of converge, wiping out $4.6 billion.`}]}]},_e=[{label:"New York Fed: Repurchase and Reverse Repurchase Transactions",href:"https://www.newyorkfed.org/markets/domestic-market-operations/monetary-policy-implementation/repo-reverse-repo-agreements",type:"source"},{label:"ICMA: Frequently Asked Questions on Repo",href:"https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/",type:"source"},{label:"BIS / CPMI-IOSCO Principles for Financial Market Infrastructures",href:"https://www.bis.org/cpmi/publ/d101a.pdf",type:"source"},{label:"SEC Treasury Clearing Rule Release and Fact Sheet",href:"https://www.sec.gov/newsroom/press-releases/2023-247",type:"source"},{label:"DTCC / FICC Overview",href:"https://www.dtcc.com/clearing-services/fixed-income-clearing-corporation",type:"source"},{label:"New York Fed tri-party repo infrastructure and reform materials",href:"https://www.newyorkfed.org/banking/tpr_infr_reform",type:"source"},{label:"Federal Reserve Financial Services: Fedwire Securities Service",href:"https://www.frbservices.org/financial-services/securities",type:"source"},{label:"Local primer: Repo, CCPs, and the U.S. Repo Market",href:"/Learning/Courses/Repo_CCPs_and_US_Repo_Market.md",type:"internal"}],Bt=[{id:"us-repo",title:"U.S. Repo, CCPs, and Treasury Market Structure",region:"US",description:"An end-to-end flagship course for law students on repo legal structure, central clearing, settlement plumbing, and the policy debate around Treasury market resilience.",difficulty:"Foundation",estimatedHours:"6-8 hours",audience:"Law students, policy learners, and early-stage finance learners who need a plain-English path into repo and central clearing.",prerequisites:["Comfort reading basic contractual language and balance-sheet concepts","No prior repo trading experience required"],outcomes:["Explain why repo is legally documented as a sale and repurchase but economically functions like secured lending","Map the bilateral and centrally cleared Treasury repo chains from trade entry to settlement","Describe novation, netting, margin, and the default waterfall in language a legal or policy audience can use","Assess why FICC, BNY Mellon, and Federal Reserve settlement infrastructure are systemically important","Read current central-clearing policy debates with enough context to understand who bears risk and why"],featured:!0,lessons:[{id:"lesson-1",title:"Repo Basics: Legal Form, Economic Substance, and Why Courts Care",duration:"35 min",summary:"Start with the core proposition of repo: two linked sales in legal form, short-term secured financing in economic substance. This lesson gives law students the vocabulary needed to read the rest of the market structure without assuming a trading background.",learningObjectives:["Distinguish legal form from economic substance in a repo transaction","Explain repo rate, haircut, collateral, and term structure in plain English","Understand why characterization matters for bankruptcy, accounting, and regulation"],relatedTerms:["repo","reverse repo","haircut","legal form","economic substance","secured lending"],furtherReading:[_e[0],_e[1],_e[7]],lessonType:"concept",hasDiagram:!1,content:`
## The Core Proposition

A repurchase agreement, or repo, is documented as a sale of securities today plus a forward agreement to buy those same securities back later. Economically, however, market participants use repo as short-term secured financing. One side needs cash. The other side has cash and wants collateral protection.

For law students, the key insight is that repo sits at the boundary between form and function. The transaction is not merely described as a loan. It is built as two linked transfers of title. That drafting choice affects bankruptcy treatment, close-out rights, accounting outcomes, and the operation of market safe harbors.

## The Basic Cash-and-Collateral Exchange

- The cash borrower transfers securities to the cash lender today.
- The cash lender transfers cash to the borrower today.
- Both parties agree that the borrower will repurchase equivalent securities later at a slightly higher price.
- The price difference reflects the financing charge, commonly expressed as the repo rate.

## Why the Distinction Matters

A student reading repo law should always ask two questions at once:

### 1. What do the documents say happened?
The documents usually say there was an outright sale and a later repurchase.

### 2. What does the transaction do in economic reality?
In economic reality, the borrower has obtained cash against collateral and will pay that cash back with interest.

That distinction matters because courts, regulators, and accounting frameworks sometimes care about substance, while statutory safe harbors and market-standard documentation often depend heavily on form.

## Core Terms

- **Repo rate:** the financing rate implied by the difference between sale price and repurchase price.
- **Haircut:** the discount applied to collateral value so the lender advances less cash than the market value of the securities.
- **Open repo:** a repo that can usually be terminated on short notice rather than a fixed maturity date.
- **Term repo:** a repo with a stated maturity such as overnight, one week, or one month.
- **Collateral substitution:** replacement of posted securities with other eligible securities under the contract.

## Why Repo Matters Systemically

Repo is a core funding channel for Treasury dealers, leveraged funds, and cash investors such as money market funds. If repo funding becomes unreliable, Treasury market liquidity weakens, dealer intermediation shrinks, and stress can spread into other funding and derivatives markets.

## Law-Student Lens

If you understand this first lesson, you are ready to ask the right legal questions in every later lesson:

- Who owns the securities at each moment?
- Who has to return what if a party defaults?
- Which rights come from contract, and which come from regulation or insolvency law?
- Why did the market choose title transfer instead of a simpler pledge structure?
`,keyPoints:["Repo is documented as a sale and repurchase, but used economically as secured financing","Haircuts protect the cash lender by limiting cash advanced against collateral value","The legal characterization of repo matters for close-out, bankruptcy, and regulatory treatment","Repo is critical Treasury-market plumbing, not a side market"],quiz:[{question:"Why do lawyers care that repo is documented as a sale and repurchase rather than simply described as a loan?",options:["Because labels are irrelevant in finance","Because legal form can affect bankruptcy, close-out, and regulatory treatment","Because courts ignore transaction documents","Because repo never uses securities as collateral"],correctIndex:1,explanation:"Repo documentation matters because title transfer, safe harbors, and insolvency treatment can turn on the transaction form even when the economics resemble secured lending."},{question:"What does a haircut do in a repo transaction?",options:["It increases the amount of cash advanced above collateral value","It discounts collateral value so the lender advances less cash than the securities are worth","It replaces the repo rate with a fixed fee","It removes default risk entirely"],correctIndex:1,explanation:"A haircut is a buffer. If securities worth 100 are posted with a 2 percent haircut, the cash advanced is usually 98."},{question:"Which statement best captures the economic substance of repo?",options:["It is usually used as short-term secured financing","It is only a derivatives contract","It is only a spot sale with no future obligation","It is mainly an equity offering tool"],correctIndex:0,explanation:"Economically, repo functions as collateralized short-term funding even though the documentation is structured as a sale and repurchase."}]},{id:"lesson-2",title:"The Bilateral Repo Contract: Who Owes What to Whom?",duration:"40 min",summary:"This lesson translates bilateral repo into a legal relationship map. It explains direct counterparty exposure, collateral movements, margin calls, and the practical consequences of having no CCP stand between the parties.",learningObjectives:["Describe the bilateral repo relationship without relying on trader shorthand","Identify the direct obligations and risk exposures each party bears","Explain why bilateral margining and collateral management are operationally intensive"],relatedTerms:["bilateral repo","counterparty risk","margin call","collateral substitution","close-out netting"],furtherReading:[_e[1],_e[7]],lessonType:"mechanics",hasDiagram:!0,diagramType:"us-flow",content:`
## Bilateral Repo as a Direct Legal Relationship

In non-centrally cleared bilateral repo, the two parties face each other directly. If one party fails to perform, the other party does not look to a CCP for performance. It must rely on its contract rights, its collateral protection, and the applicable insolvency framework.

## The Main Legal and Economic Positions

A bilateral repo relationship usually involves:

- a cash borrower that needs financing against securities,
- a cash lender that wants protected short-term exposure,
- operational agreements for valuation, margin, substitution, and default handling.

Each side bears direct counterparty exposure to the other. That means each side must care about creditworthiness, collateral quality, legal enforceability, and timing risk.

## Why Bilateral Structure Is Operationally Heavy

Without a CCP, every relationship has to be managed pair by pair.

- Margin calls are calculated bilaterally.
- Valuations and disputes are handled bilaterally.
- Eligible collateral schedules are negotiated bilaterally.
- Substitution rights and settlement mechanics are controlled by bilateral documentation.

For a legal reader, this is important because risk is not only about final default. Risk also lives in ordinary daily frictions: failed deliveries, mismatched terms, documentation gaps, and disputes over collateral value.

## Gross Exposure and Limited Netting

Bilateral markets can have contractual netting rights, but they usually do not generate the same multilateral compression achieved by a CCP. Gross positions remain larger, which increases balance-sheet usage and can make stress events more disorderly.

## Why Stress Becomes a "Run"

When lenders become nervous, they can raise haircuts, shorten maturities, or stop lending altogether. Borrowers then need replacement financing immediately or must sell assets. That is why scholars and regulators describe repo stress as run-like: confidence leaves faster than assets can be liquidated safely.

## Law-Student Lens

The bilateral market is the cleanest place to learn the baseline legal questions:

- Is the original contract still directly between the trading parties?
- What rights exist if one side misses a margin call?
- How much risk reduction comes from collateral, and how much depends on timing and enforceability?
`,keyPoints:["Bilateral repo leaves each party directly exposed to the other","Collateral, valuation, and margin disputes are handled relationship by relationship","Bilateral structures preserve gross exposures more than central clearing does","Funding stress can become run-like when lenders pull back simultaneously"],quiz:[{question:"In bilateral repo, who stands between the two trading parties if one side defaults?",options:["A central counterparty automatically absorbs the loss","No intermediary stands between them; they face each other directly","Only the Federal Reserve","Only the clearing bank"],correctIndex:1,explanation:"Bilateral repo means the parties remain direct counterparties. There is no CCP interposed between them."},{question:"Why is bilateral repo more operationally intensive than centrally cleared repo?",options:["Because every margin, valuation, and collateral issue must be managed pair by pair","Because bilateral repo never uses contracts","Because securities do not settle in bilateral markets","Because bilateral markets have no collateral"],correctIndex:0,explanation:"Without a CCP, each counterparty relationship needs its own daily operational and legal management."},{question:"Why do regulators describe repo stress as run-like?",options:["Because repo is mainly a consumer deposit product","Because lenders can rapidly withdraw funding or raise haircuts, forcing fire sales","Because repo contracts prohibit collateral","Because repo only exists during bank runs"],correctIndex:1,explanation:"The run dynamic comes from the speed with which financing can disappear, forcing deleveraging and asset sales."}]},{id:"lesson-3",title:"Novation and the CCP: How the Original Contract Disappears",duration:"40 min",summary:"This lesson centers on novation, the key legal move that allows a CCP to become buyer to every seller and seller to every buyer. It frames the concept for readers who care about contractual substitution, risk transfer, and legal finality.",learningObjectives:["Define novation and distinguish it from agency or guarantee arrangements","Explain how a bilateral repo becomes two CCP-facing contracts","Understand why novation changes both risk location and legal relationships"],relatedTerms:["novation","central counterparty","interposition","contractual substitution","legal finality"],furtherReading:[_e[2],_e[4]],lessonType:"concept",hasDiagram:!0,diagramType:"us-flow",content:`
## The Legal Move That Makes Central Clearing Work

A central counterparty does not merely watch or record a trade. It interposes itself. The classic legal mechanism is novation: the original bilateral contract is extinguished and replaced with two new contracts.

If Party A originally traded with Party B, novation replaces that arrangement with:

- Party A versus the CCP, and
- Party B versus the CCP.

That is not a cosmetic change. It changes who owes performance, who receives margin, and how default management is organized.

## Why Novation Matters

For a law student, novation answers the question: how can the CCP promise performance to each side without simply acting as an agent? The answer is that the CCP becomes the actual counterparty under a new legal arrangement.

## What the CCP Then Does

Once interposed, the CCP can:

- net exposures across many transactions,
- collect margin centrally,
- manage member default through predetermined rules,
- mutualize residual losses through a default fund and related tools.

## What Novation Does Not Do

Novation does not eliminate all risk. It relocates and reorganizes risk.

- Counterparty exposure to the original trading party is reduced or replaced.
- Exposure to the CCP and its rulebook becomes central.
- Sponsored access models may leave a dealer responsible to the CCP for a client's obligations.

## Legal Finality and Confidence

Central clearing only works if market participants trust that novation is legally effective and operationally final. If the original trade remained uncertain, the entire clearing structure would become unstable during stress.

## Law-Student Lens

When reading any CCP material, ask:

- Exactly when does novation occur?
- What happens if matching fails before novation?
- Which obligations survive against the original counterparty, if any?
- Who bears responsibility for the client in sponsored access structures?
`,keyPoints:["Novation extinguishes the original bilateral contract and creates two new CCP-facing contracts","Central clearing works because the CCP becomes the legal counterparty, not just an observer","Novation reduces bilateral exposure but concentrates risk management in the CCP","Legal finality is essential for clearing resilience"],quiz:[{question:"What is novation in the CCP context?",options:["The CCP merely records the original contract","The original bilateral contract is replaced by two contracts facing the CCP","The clearing bank guarantees every trade without replacing the contract","A margin call issued after settlement"],correctIndex:1,explanation:"Novation is the legal replacement of the original bilateral contract with two new contracts, one between each participant and the CCP."},{question:"Why is novation different from a simple agency arrangement?",options:["Because the CCP becomes the actual legal counterparty rather than just acting for someone else","Because agency always eliminates risk","Because agency only applies to equity trades","Because novation never changes contractual rights"],correctIndex:0,explanation:"The important point is substitution of counterparties. The CCP becomes the new contract party."},{question:"Does novation remove all risk from the system?",options:["Yes, risk disappears completely","No, risk is reallocated and managed centrally rather than eliminated","Yes, because the original trader has no obligations left anywhere","No, because collateral is banned after novation"],correctIndex:1,explanation:"A CCP changes where risk sits and how it is managed; it does not abolish the underlying economic exposure."}]},{id:"lesson-4",title:"FICC, DTCC, and Sponsored Clearing: The U.S. Institutional Map",duration:"45 min",summary:"This lesson maps the entities that matter in U.S. Treasury clearing. It explains the relationship among DTCC, FICC, direct members, and sponsored members, with attention to where legal responsibility sits.",learningObjectives:["Identify the role of FICC within DTCC’s overall structure","Differentiate direct membership from sponsored access","Explain why concentration in a sole Treasury repo CCP creates both efficiency and fragility"],relatedTerms:["FICC","DTCC","GSD","sponsored member","direct member","financial market utility"],furtherReading:[_e[2],_e[3],_e[4]],lessonType:"market-structure",hasDiagram:!0,diagramType:"us-flow",content:`
## The Core Institutional Picture

In the United States, the key Treasury repo CCP is the Fixed Income Clearing Corporation, or FICC, which sits within the DTCC group. For Treasury repo, this concentration is a central design fact of the market.

## DTCC and FICC

DTCC is the broader post-trade infrastructure group. Within that structure, FICC handles fixed-income clearing. Its Government Securities Division is the part most relevant for Treasury repo and cash Treasury trading.

## Direct Members Versus Sponsored Members

### Direct members
These are firms with a direct contractual and operational relationship with FICC. They post margin directly, follow the FICC rulebook directly, and can be responsible for client-facing sponsored activity.

### Sponsored members
These are entities, often buy-side or leveraged participants, that gain access through a sponsoring member. Sponsored clearing expands the reach of central clearing without making every end user a full direct member.

For legal analysis, the crucial question is not just who traded economically. It is who is directly bound to FICC and who remains liable if the client-side participant fails.

## Why Sole-CCP Status Matters

A sole clearer can deliver standardization, scale, and operational consistency. It also concentrates failure risk, governance pressure, and recovery-and-resolution importance into one institution. That is why FICC is treated as systemically important infrastructure rather than just another private service provider.

## The Policy Dimension

Recent Treasury clearing reforms and SEC rules matter because they change how much repo activity is expected to move into this institutional architecture. The policy debate is not only about efficiency. It is about whether more central clearing reduces fragility or merely moves fragility into a narrower set of nodes.
`,keyPoints:["FICC is the key U.S. Treasury repo CCP within the DTCC group","Direct members face FICC directly; sponsored members access clearing through a sponsor","The location of legal responsibility matters as much as the economic trading relationship","Sole-CCP status creates both standardization benefits and concentration concerns"],quiz:[{question:"What is the main legal difference between a direct member and a sponsored member of FICC?",options:["There is no difference","Direct members have the direct CCP relationship, while sponsored members access through a sponsor","Sponsored members own FICC","Direct members cannot clear Treasury repo"],correctIndex:1,explanation:"Direct members are directly bound to the CCP framework, while sponsored members rely on a sponsoring firm for access and often for liability support."},{question:"Why does FICC’s sole-clearer role matter systemically?",options:["Because it concentrates operational and risk-management significance in one institution","Because it prevents all defaults forever","Because Treasury repo no longer needs regulation","Because it replaces the Federal Reserve"],correctIndex:0,explanation:"A sole clearer is efficient, but it also becomes a central node whose distress could affect the wider Treasury market."},{question:"Which part of FICC is most relevant for Treasury repo clearing?",options:["The Government Securities Division","The Mortgage Insurance Office","The equity settlement unit","The discount window desk"],correctIndex:0,explanation:"The Government Securities Division is the clearing division associated with Treasury and government securities activity."}]},{id:"lesson-5",title:"From Trade Entry to Settlement: Matching, Clearing Banks, and the Fed Ledger",duration:"45 min",summary:"This lesson follows the transaction after parties agree the economics. It explains matching, clearing instructions, the clearing-bank role, and why the Federal Reserve securities ledger remains foundational even when private infrastructure sits in front.",learningObjectives:["Trace the operational path from trade execution to settlement finality","Explain the roles of FICC, the clearing bank, and the Federal Reserve settlement infrastructure","Understand why timing, matching, and settlement design are legal as well as operational issues"],relatedTerms:["matching","settlement","DVP","clearing bank","Fedwire Securities Service","book-entry"],furtherReading:[_e[4],_e[5],_e[6]],lessonType:"mechanics",hasDiagram:!0,diagramType:"us-flow",content:`
## After the Economics Are Agreed

A repo trade is not complete just because two parties agreed on rate, collateral, term, and size. The infrastructure must still confirm the trade, determine whether it matches, send settlement instructions, and achieve final delivery versus payment.

## Matching Before Novation

In centrally cleared flows, both sides typically submit trade details. The CCP then checks whether the submissions align. If they do not, the trade may go to exception handling rather than immediate novation.

For a legal audience, this is important because contractual certainty often depends on when infrastructure rules say the trade is accepted and when novation becomes effective.

## The Clearing Bank Role

The clearing bank sits at the center of the cash-and-securities movement needed to settle repo. It holds and processes the relevant accounts and helps effect delivery versus payment. In Treasury market practice, this role has outsized systemic significance because it connects legal rights to actual asset movement.

## Why the Fed Ledger Still Matters

The Federal Reserve’s securities settlement infrastructure remains the definitive official record for Treasury securities in book-entry form. Private institutions may manage instructions and account relationships, but final ownership and settlement legitimacy depend on the Federal Reserve-linked infrastructure sitting underneath.

## Tri-Party and Intraday Exposure

Tri-party structures historically involved daily unwind mechanics that exposed the system to intraday credit and liquidity concerns. This is a good reminder that infrastructure design choices can create legal and policy problems even when the underlying transaction is standardized.

## Law-Student Lens

Always ask where the decisive moment of finality is located:

- At trade agreement?
- At matching?
- At novation?
- At settlement on the ledger?

Those are not the same thing, and much of financial market law exists to determine which moment matters for which purpose.
`,keyPoints:["Trade agreement must still be matched, accepted, and settled through infrastructure","The timing of matching and novation matters for legal certainty","Clearing-bank functions connect contractual trades to actual securities and cash movement","Federal Reserve book-entry infrastructure remains foundational for Treasury settlement finality"],quiz:[{question:"Why is matching important before novation?",options:["Because the CCP needs both sides’ instructions to align before accepting and replacing the original trade","Because matching only affects marketing disclosures","Because settlement happens before the trade exists","Because matching eliminates the need for collateral"],correctIndex:0,explanation:"Matching is a gatekeeping step. The CCP ordinarily needs consistent submissions before it can accept and novate the transaction."},{question:"What does DVP mean in the repo settlement context?",options:["Delayed value processing","Delivery versus payment","Default valuation protocol","Dealer variation premium"],correctIndex:1,explanation:"Delivery versus payment means the securities transfer and the cash transfer are linked so settlement occurs against payment rather than in a disconnected sequence."},{question:"Why does the Federal Reserve ledger matter even when private institutions stand in front of settlement?",options:["Because Treasury ownership and final book-entry settlement rely on the underlying Federal Reserve-linked infrastructure","Because the Fed negotiates every repo contract personally","Because the Fed is the only repo dealer","Because private firms cannot hold any records"],correctIndex:0,explanation:"Private infrastructure may organize and process the trade, but the foundational settlement record still matters for legal finality and ownership."}]},{id:"lesson-6",title:"Netting, Margin, and Default Waterfalls: How CCP Risk Management Actually Works",duration:"45 min",summary:"This lesson explains the core risk tools of central clearing in a way that preserves the legal logic behind them. It covers multilateral netting, initial and variation margin, and the ordered use of resources after member default.",learningObjectives:["Explain why multilateral netting reduces exposures and settlement volume","Differentiate initial margin from variation margin","Describe the default waterfall and why loss allocation rules matter for market confidence"],relatedTerms:["multilateral netting","initial margin","variation margin","default fund","default waterfall","loss mutualization"],furtherReading:[_e[2],_e[4]],lessonType:"risk",hasDiagram:!0,diagramType:"us-flow",content:`
## Netting as a Structural Benefit of Central Clearing

A CCP can see positions across many counterparties and use that visibility to reduce offsetting obligations. Instead of every trade settling gross, the CCP can collapse many obligations into smaller net exposures.

For lawyers and policy readers, netting is not just an efficiency trick. It is one of the main justifications for central clearing because it changes balance-sheet intensity, liquidity needs, and default exposure.

## Margin: Two Different Protective Functions

### Initial margin
Initial margin is collected to protect against potential future exposure if a member defaults and positions need to be closed out under stressed conditions.

### Variation margin
Variation margin reflects current mark-to-market changes. It keeps gains and losses current rather than letting them accumulate.

## The Default Waterfall

When a member defaults, the CCP follows an ordered sequence of financial resources. While exact rulebooks differ in detail, the broad logic is familiar:

1. Use the defaulter’s own margin.
2. Use the defaulter’s default fund contribution.
3. Use prefunded mutualized resources according to the rulebook.
4. Use the CCP’s own committed capital where applicable.
5. Use further assessment or recovery tools if necessary.

This ordering matters because members need to know in advance how losses will be allocated. Legal clarity is part of risk management.

## Why Margin Can Be Procyclical

Margin protects the CCP, but it can also intensify stress. If market volatility spikes, margin requirements can rise quickly. Firms then need more cash precisely when liquidity is scarce. This is a classic example of a prudential tool that can also amplify systemic pressure.

## Law-Student Lens

When you read CCP rules, ask not only whether the tool sounds prudent, but also:

- Who must post cash first?
- Who absorbs residual loss next?
- How much discretion does the CCP have?
- What happens if the waterfall is insufficient?
`,keyPoints:["Multilateral netting reduces gross obligations and settlement volume","Initial margin covers potential future exposure; variation margin tracks current gains and losses","The default waterfall is a prearranged legal and financial ordering of loss absorption","Margin can stabilize the CCP while still amplifying wider market stress"],quiz:[{question:"What is the main difference between initial margin and variation margin?",options:["Initial margin addresses potential future exposure, while variation margin reflects current mark-to-market changes","There is no difference","Initial margin is paid only after default","Variation margin only applies to equities"],correctIndex:0,explanation:"Initial margin is forward-looking protection, while variation margin keeps present gains and losses current."},{question:"Why does a default waterfall matter legally as well as financially?",options:["Because participants need precommitted rules on who absorbs loss and in what order","Because it replaces all contracts with oral understandings","Because it eliminates all insolvency issues automatically","Because regulators do not care about allocation"],correctIndex:0,explanation:"Predictable loss-allocation rules support confidence, enforceability, and planning under stress."},{question:"Why can margin be described as procyclical?",options:["Because it tends to rise in stress when liquidity is already scarce","Because it disappears in calm markets","Because it only applies after a government bailout","Because it prohibits netting"],correctIndex:0,explanation:"Margin calls can intensify funding pressure during stress even though they are intended to protect the CCP."}]},{id:"lesson-7",title:"Sponsored Clearing, Concentration, and the Treasury Reform Debate",duration:"40 min",summary:"The final substantive lesson steps back to the market-wide debate. It explains why regulators want more central clearing, why market participants worry about concentration, and how sponsored clearing sits at the center of that discussion.",learningObjectives:["Explain why Treasury market reform efforts push more activity toward central clearing","Assess the tradeoff between bilateral fragility and CCP concentration","Understand the policy significance of sponsored clearing for buy-side access"],relatedTerms:["sponsored clearing","Treasury market reform","concentration risk","moral hazard","resilience"],furtherReading:[_e[2],_e[3],_e[5]],lessonType:"market-structure",hasDiagram:!1,content:`
## Why Reform Pressure Increased

The Treasury market is systemically important, but repeated stress episodes exposed weaknesses in both bilateral funding channels and dealer intermediation capacity. Regulators increasingly view broader central clearing as a way to improve transparency, netting efficiency, and risk management discipline.

## The Pro-Clearing Argument

Supporters of broader central clearing argue that it can:

- reduce bilateral opacity,
- improve netting efficiency,
- standardize default management,
- bring more of the market into a visible and supervised rule framework.

## The Skeptical Response

Critics argue that broader central clearing can:

- deepen dependence on a single CCP,
- transmit stress through margin calls,
- leave market access dependent on sponsor balance sheets,
- create a stronger expectation of public support if the CCP becomes distressed.

## Why Sponsored Clearing Matters So Much

Sponsored clearing is often presented as the bridge between buy-side activity and central clearing. It allows funds and other market users to clear without becoming full direct members. But it also means sponsor dealers remain key gatekeepers. Access, liability, balance-sheet capacity, and client screening all become part of the legal and policy story.

## The Real Tradeoff

The serious policy question is not whether central clearing is perfect. It is whether the system is more resilient with more activity centrally cleared than in a less visible bilateral network. Law students should be comfortable holding both ideas at once:

- bilateral markets can be fragile and hard to supervise, and
- centrally cleared markets can become dangerously concentrated.
`,keyPoints:["Treasury reform pushes more repo activity toward central clearing to reduce opacity and improve netting","Central clearing can reduce bilateral fragility while increasing concentration in core infrastructures","Sponsored clearing broadens access but keeps sponsor dealers central to market access and liability","The policy debate is about comparative resilience, not about finding a perfect structure"],quiz:[{question:"Why do regulators often support broader Treasury central clearing?",options:["Because they want less transparency","Because they see potential gains in visibility, netting, and standardized risk management","Because bilateral markets have no contracts","Because CCPs eliminate all market stress"],correctIndex:1,explanation:"The reform case for broader clearing focuses on visibility, standardization, and reduced bilateral fragmentation."},{question:"What is one central concern about relying more heavily on a single CCP?",options:["It creates concentration risk in an institution that becomes critical to market functioning","It abolishes all default management","It makes Treasury securities illegal","It prevents any use of margin"],correctIndex:0,explanation:"A sole or dominant CCP can become an infrastructure bottleneck and a concentrated point of systemic failure."},{question:"Why is sponsored clearing important in the policy debate?",options:["Because it removes sponsor dealers from the system entirely","Because it is a key mechanism for bringing buy-side participants into central clearing","Because it eliminates every client liability issue","Because it ends the need for rulebooks"],correctIndex:1,explanation:"Sponsored clearing is the practical route through which many non-dealer participants access CCP clearing."}]},{id:"lesson-8",title:"Capstone Synthesis: Reading a Repo/CCP Problem Like a Lawyer",duration:"30 min",summary:"This capstone consolidates the course into a lawyer’s issue-spotting framework. It turns the prior lessons into a repeatable checklist for analyzing repo disputes, policy proposals, or market-stress scenarios.",learningObjectives:["Synthesize repo, clearing, settlement, and policy concepts into one analytical framework","Practice issue spotting across contract, infrastructure, and systemic-risk dimensions","Leave the course with a complete checklist rather than disconnected facts"],relatedTerms:["issue spotting","close-out","systemic risk","settlement finality","market infrastructure"],furtherReading:[_e[0],_e[2],_e[3],_e[7]],lessonType:"risk",hasDiagram:!1,content:`
## The End-to-End Framework

By this point, you should be able to take any repo or CCP question and break it into a series of legal and institutional issues.

## The Lawyer’s Checklist

### 1. Characterization
Is the problem about legal form, economic substance, or the gap between the two?

### 2. Relationship map
Who is directly facing whom at the relevant moment: bilateral parties, sponsor and client, or each party and the CCP?

### 3. Asset path
Where are the cash and securities supposed to move, and which institution controls that movement?

### 4. Timing and finality
What legally significant event has occurred: trade agreement, matching, novation, margin call, or final settlement?

### 5. Default consequences
If a party fails now, which rights become active, which collateral is available, and which waterfall or close-out framework applies?

### 6. Systemic spillover
Would this dispute remain bilateral, or could it affect the CCP, the clearing bank, dealer balance sheets, or Treasury market functioning more broadly?

## Why This Completes the Learning Path

Many finance introductions stop after explaining what repo is. Many infrastructure primers stop after describing the CCP. This course instead links the whole path:

- legal characterization,
- bilateral contracting,
- novation,
- CCP structure,
- settlement plumbing,
- margin and default,
- policy debate.

That end-to-end structure is what allows a law student to move from vocabulary to actual analysis.
`,keyPoints:["A strong legal analysis of repo starts with characterization, counterparties, asset path, timing, and default consequences","The course is complete only when contractual, infrastructural, and systemic layers are connected","Law students should leave with a repeatable issue-spotting framework, not isolated definitions","Repo and CCP questions are usually both micro-contract problems and macro-stability problems at the same time"],quiz:[{question:"Which sequence best reflects the capstone framework taught in this course?",options:["Characterization, relationship map, asset path, timing, default consequences, systemic spillover","Only memorize repo rates and haircuts","Only identify the clearing bank and stop there","Focus on policy first and ignore contract structure"],correctIndex:0,explanation:"The course is designed to produce an end-to-end legal and institutional checklist rather than disconnected terminology."},{question:"Why is it not enough to know only that repo is a secured financing tool?",options:["Because repo questions also require attention to contractual structure, clearing design, settlement finality, and systemic implications","Because the economic substance is always irrelevant","Because law never cares about financial infrastructure","Because settlement happens automatically without institutions"],correctIndex:0,explanation:"The course goal is to connect financing logic to the institutions and legal mechanisms that make the market function."},{question:"What is the main purpose of the capstone lesson?",options:["To introduce an unrelated asset class","To turn the prior lessons into a repeatable lawyer’s issue-spotting framework","To replace all prior lessons with a single definition","To avoid discussing default scenarios"],correctIndex:1,explanation:"The capstone is meant to consolidate the learning path into an analytical method the learner can reuse."}]}]},{id:"asia-repo",title:"Asia-Pacific Repo Markets",region:"Asia",description:"Explore repo and clearing mechanisms across Japan, Singapore, Hong Kong, and Korea—markets with diverse structures and evolving CCP landscapes.",lessons:[{id:"asia-intro",title:"Asia Repo Overview",duration:"25 min",hasDiagram:!0,diagramType:"asia-flow",content:`
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

**Leverage Multiple:** Total Debt / EBITDA (Entry: 4.0x-6.0x, Exit: 2.0x-3.0x)

**Debt Service Coverage:** EBITDA / (Interest + Principal) (Minimum 1.5x required by lenders)

**Interest Coverage:** EBITDA / Interest Expense (Averaged 2.34x for new LBOs in 2024)

**IRR Targets by Industry:**
- Technology and Healthcare: 25-35% IRR
- Business Services: 22-28% IRR
- Manufacturing and Distribution: 18-25% IRR

**MOIC Target:** 2.0x - 3.5x

[External Reading: LBO Modeling Guide - Wall Street Prep](https://www.wallstreetprep.com/knowledge/lbo-modeling/)

[External Reading: The $12 Trillion US Repo Market - Federal Reserve FEDS Notes](https://www.federalreserve.gov/econres/notes/feds-notes/the-12-trillion-u-s-repo-market-evidence-from-a-novel-panel-of-intermediaries-20250711.html)

[External Reading: LBO Model Fundamentals Guide 2026 - Abacum](https://www.abacum.ai/blog/lbo-model-fundamentals-a-comprehensive-guide)
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
- Contract terms and milestone definitions
- Multiple element arrangements (bundled products/services allocation)
- Percentage-of-completion methods
- Bill-and-hold arrangements
- Customer concentration by customer, geography, and product
- Revenue categorization by quality:
  - Recurring/subscription-based (highest quality)
  - Repeat customer purchases (high quality)
  - One-time project revenue (medium quality)
  - Windfall or distressed sales (lowest quality)
- Seasonal and cyclical patterns
- Economic sensitivity and recession resistance

**2. Expense Analysis:**
- Vendor concentration
- Related-party expenses
- Cut-off testing
- Accrual vs cash basis anomalies
- Expense categorization:
  - Recurring Operating Expenses (personnel, facilities, tech, marketing)
  - Non-Recurring Items (legal, restructuring, impairment, asset dispositions)
  - Owner/Management Adjustments (personal expenses, above-market compensation, perquisites)
- Spending efficiency compared to industry benchmarks
- Investment in growth vs maintenance spending

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

[External Reading: Quality of Earnings Analysis Complete Guide 2025 - Duedilio](https://www.duedilio.com/quality-of-earnings-analysis-guide-2025/)
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
`,keyPoints:["UFCF is cash available to all investors; LFCF is after debt service for equity holders","Maintenance capex typically 1.0x-1.5x depreciation; growth capex is expansion-related","Cash conversion cycle (CCC) = DSO + DIO - DPO; lower is better","FCF conversion rate (FCF/EBITDA) of 40-60% indicates healthy cash generation","Seasonality affects quarterly cash flows and revolver usage patterns"],quiz:[{question:"What is the difference between UFCF and LFCF?",options:["UFCF is after taxes, LFCF is before","UFCF is before debt service, LFCF is after","UFCF is for one year, LFCF is multi-year","They are the same"],correctIndex:1,explanation:"Unlevered Free Cash Flow (UFCF) is available to all investors and is calculated before debt service. Levered Free Cash Flow (LFCF) is available only to equity holders and is calculated after interest and mandatory debt repayments."},{question:"What is a healthy FCF conversion rate (FCF/EBITDA)?",options:["10-20%","20-30%","40-60%","80-100%"],correctIndex:2,explanation:"A healthy FCF conversion rate is typically 40-60%. Below 30% may indicate high reinvestment needs or working capital issues. Above 70% may indicate under-investment in the business."},{question:"What does the cash conversion cycle (CCC) measure?",options:["Total cash in the business","Days to convert inventory and receivables into cash, net of payables","Time to close the books","Cash interest coverage"],correctIndex:1,explanation:"The cash conversion cycle (CCC = DSO + DIO - DPO) measures the number of days it takes to convert inventory and receivables into cash, net of the time taken to pay suppliers. A lower CCC indicates better working capital efficiency."}]}]},{id:"ma-deal-structures",title:"M&A Deal Structures",region:"Global",description:"Understand M&A transaction structures, asset vs stock deals, earnouts, representations, warranties, and indemnities.",lessons:[{id:"lesson-1",title:"Transaction Structures",duration:"35 min",content:`
## Asset vs. Stock Deals

### Stock Purchase
Buyer acquires all outstanding stock of the target company.

**Advantages for Buyer:**
- Simpler transaction (one agreement)
- Acquires all assets and liabilities automatically
- No need to assign individual contracts
- Tax advantages for sellers (capital gains treatment)

**Disadvantages for Buyer:**
- Assumes all known and unknown liabilities
- May need shareholder consent
- Potential for minority shareholder dissent

**Advantages for Seller:**
- Clean exit (sell everything at once)
- Capital gains tax treatment
- Simpler from seller perspective

### Asset Purchase
Buyer acquires specific assets and assumes selected liabilities.

**Advantages for Buyer:**
- Can cherry-pick assets and liabilities
- Step-up in asset tax basis (depreciation benefits)
- Avoids assuming unknown liabilities
- May not need full shareholder approval

**Disadvantages for Buyer:**
- More complex (multiple asset transfers)
- Need to assign contracts
- Potential for higher purchase price due to tax benefits

**Advantages for Seller:**
- Can retain non-core assets
- May be able to sell unwanted liabilities separately

**Disadvantages for Seller:**
- Ordinary income tax on asset sales (higher rate)
- More complex from seller perspective
- Double taxation potential (corporate + shareholder)

## Purchase Price Adjustments

### Working Capital Adjustments
Target working capital is calculated as a percentage of revenue based on historical averages. At closing, actual working capital is compared to target:

- If actual > target: Buyer pays additional amount
- If actual < target: Purchase price is reduced

### Earnouts
Contingent consideration based on future performance metrics.

**2024 Market Trends:**
- Earnouts appeared in 33% of 2024 deals (up from 25% in 2023)
- While fewer deals include earnouts, more dollars are at play when they do
- Common metrics: EBITDA, revenue milestones, product development milestones
- Typical duration: 1-3 years post-closing

**Why Use Earnouts:**
- Bridge valuation gaps
- Align incentives (sellers stay motivated)
- Mitigate buyer risk on uncertain projections

**Earnout Challenges:**
- Disputes over metric calculation
- Seller influence on earnout period
- Accounting complexity

## Representations and Warranties Insurance (RWI)

Insurance that protects buyers against breaches of seller representations and warranties.

**2024 Market Trends:**
- RWI used in approximately 38% of deals (down from previous peaks)
- 85% of deals without RWI contained neither fundamental seller representations in 2024 (up from 75% in 2023)
- Increased use of "walk-away" or no-survival indemnification structures
- Nearly half of deals with RWI have additional special escrows

**Benefits:**
- Reduces or eliminates seller indemnification escrow
- Provides certainty on purchase price
- Facilitates deals where sellers won't provide extensive indemnities

**Costs:**
- Premium typically 2.5-4.5% of coverage limit
- Deductible (retention) typically 1% of deal value

[External Reading: 2024 SRS Acquiom M&A Deal Terms Study](https://www.srsacquiom.com/our-insights/deal-terms-study-2024/)
`,keyPoints:["Stock deals: buyer assumes all liabilities; simpler but more risk","Asset deals: buyer selects assets/liabilities; more complex but less risk","Working capital adjustments account for normalized working capital at closing","Earnouts bridge valuation gaps based on future performance (33% of 2024 deals)","RWI insurance protects against representation breaches (38% of deals in 2024)"],quiz:[{question:"What is a key advantage of an asset purchase for the buyer?",options:["Assumes all liabilities automatically","Step-up in asset tax basis for depreciation","Simpler transaction structure","Capital gains tax treatment for seller"],correctIndex:1,explanation:"Asset purchases allow buyers to step up the tax basis of acquired assets, providing depreciation and amortization tax benefits."},{question:"What was the trend in earnout usage in 2024?",options:["Earnouts disappeared completely","Earnouts appeared in 33% of deals (up from 25% in 2023)","Earnouts appeared in 50% of deals","Earnout usage remained unchanged"],correctIndex:1,explanation:"According to the 2024 SRS Acquiom M&A Deal Terms Study, earnouts appeared in 33% of deals, up from 25% in 2023."},{question:"What is the primary purpose of RWI (Representations and Warranties Insurance)?",options:["To increase the purchase price","To protect buyers against breaches of seller representations","To facilitate seller financing","To provide tax benefits"],correctIndex:1,explanation:"RWI protects buyers against breaches of seller representations and warranties, reducing or eliminating the need for seller indemnification escrows."}]},{id:"lesson-2",title:"Indemnification & Escrow",duration:"30 min",content:`
## Indemnification Provisions

Indemnification is the contractual mechanism for allocating post-closing losses between buyer and seller.

### Survival Periods
The time period during which representations and warranties remain enforceable.

**Typical Survival Periods:**
- Fundamental representations (title, authority, organization): Indefinite or 3-5 years
- Non-fundamental representations: 12-24 months
- Special indemnities: As specified (often 3-6 years)

**2024 Trend:** Increased use of "walk-away" or no-survival indemnification structures (33% of deals)

### Indemnification Baskets
Threshold amount that must be exceeded before seller indemnification obligations kick in.

**Types of Baskets:**
- **Deductible basket:** Seller pays first $X of losses, then reimburses buyer for losses above $X
- **Tipping basket:** Once losses exceed $X, seller reimburses buyer for all losses including the first $X

**Typical Basket Amounts:**
- Small deals (<$50M): $250K - $500K
- Mid-market deals ($50M-$500M): $500K - $2M
- Large deals (>$500M): $1M - $5M

### Caps
Maximum amount seller can be liable for under indemnification provisions.

**Typical Caps:**
- General cap: 10-20% of purchase price
- Fundamental cap: Often 100% of purchase price (unlimited)
- Special indemnity cap: As specified

## Escrow Accounts

Cash set aside at closing to satisfy potential indemnification claims.

### Standard Escrow
- Typical size: 10-15% of purchase price
- Held by neutral third party
- Released in tranches over survival period
- Remaining amount returned to seller after survival period expires

### Special Escrows (2024 Trend)
Nearly half of deals with RWI have additional special escrows for purposes other than general indemnity.

**Common Special Escrow Purposes:**
- Tax indemnities
- Environmental liabilities
- Litigation matters
- Post-closing adjustments

## No-Survival Deals

Deals where representations and warranties do not survive closing (or have very limited survival).

**2024 Trend:**
- 85% of deals without RWI contained neither fundamental seller representations in 2024 (up from 75% in 2023)
- "Walk-away" structures allow buyer to terminate before closing if material breaches discovered

**Benefits:**
- Certainty for seller (no post-closing exposure)
- Simpler post-closing relationship

**Drawbacks:**
- Buyer must rely on due diligence
- May increase purchase price (buyer pricing in risk)
- Requires RWI for buyer protection

## Key Negotiating Points

1. **Basket type:** Deductible vs. tipping
2. **Basket amount:** Higher basket = more seller protection
3. **Cap amount:** Higher cap = more buyer protection
4. **Survival periods:** Longer = more buyer protection
5. **Escrow size:** Larger escrow = more buyer security
6. **Release schedule:** Faster release = better for seller

[External Reading: Key Takeaways from SRS Acquiom's 2024 M&A Deal Terms Study](https://www.fasken.com/en/knowledge/2025/03/key-takeaways-from-srs-acquioms-2024-ma-deal)
`,keyPoints:["Indemnification allocates post-closing losses between buyer and seller","Survival periods determine how long reps/warranties remain enforceable","Baskets set threshold before indemnification obligations kick in","Caps limit maximum seller liability (typically 10-20% of purchase price)","Escrow accounts hold cash for potential indemnification claims",'2024 trend: Increased "walk-away" structures and special escrows'],quiz:[{question:"What is the difference between a deductible basket and a tipping basket?",options:["No difference","Deductible: seller pays first losses; Tipping: once threshold exceeded, seller pays all losses","Tipping is larger","Deductible is for large deals only"],correctIndex:1,explanation:"With a deductible basket, the seller pays the first $X of losses and only reimburses losses above that amount. With a tipping basket, once losses exceed $X, the seller reimburses the buyer for all losses including the first $X."},{question:"What is a typical general indemnification cap as a percentage of purchase price?",options:["1-5%","10-20%","30-40%","50-75%"],correctIndex:1,explanation:"Typical general indemnification caps are 10-20% of purchase price, while fundamental representations often have unlimited caps (100% of purchase price)."},{question:"What was the trend in no-survival deals in 2024?",options:["No-survival deals decreased","85% of deals without RWI contained neither fundamental seller representations (up from 75% in 2023)","No-survival deals remained at 50%","No-survival deals were banned"],correctIndex:1,explanation:'In 2024, 85% of deals without RWI contained neither fundamental seller representations, up from 75% in 2023, indicating increased use of "walk-away" or no-survival structures.'}]}]},{id:"pe-fund-structures",title:"Private Equity Fund Structures",region:"Global",description:"Understand PE fund structures, limited partner agreements, waterfall distributions, and carried interest mechanics.",lessons:[{id:"lesson-1",title:"Fund Structure Basics",duration:"35 min",content:`
## Private Equity Fund Structure

### Key Parties

**General Partner (GP):**
- Manages the fund and makes investment decisions
- Typically contributes 1-2% of fund capital
- Receives management fees and carried interest
- Has fiduciary duty to limited partners

**Limited Partners (LPs):**
- Provide the majority of fund capital (98-99%)
- Passive investors with limited liability
- Receive preferred return and profit share
- Have limited governance rights

**Investment Committee:**
- Makes investment decisions
- Typically includes GP professionals and sometimes LP representatives
- Reviews and approves potential investments

### Limited Partnership Agreement (LPA)

The governing document that establishes the fund structure and terms.

**Key Provisions:**
- Fund size and investment period
- Management fees
- Waterfall distribution mechanics
- Investment restrictions and guidelines
- Reporting requirements
- Key person provisions
- Removal provisions

### Fund Lifecycle

**1. Fundraising (6-18 months):**
- GP raises capital from LPs
- Marketing and due diligence
- Finalizing LPA terms

**2. Investment Period (3-5 years):**
- GP makes portfolio investments
- Capital calls from LPs
- Active management of portfolio companies

**3. Harvest Period (2-5 years):**
- Exits from portfolio investments
- Distributions to LPs
- Wind-down of remaining positions

**Total Fund Life:** Typically 10-12 years with possible extensions

### Capital Calls and Distributions

**Capital Calls:**
- GP calls capital from LPs as needed for investments
- Typically 10-20 days notice
- LPs must fund or face penalties

**Distributions:**
- Return of capital when investments are sold
- Profit distributions according to waterfall
- Can be in cash or securities

### Management Fees

Annual fee paid to GP for fund management services.

**Typical Structures:**
- During investment period: 1.5-2.0% of committed capital
- After investment period: 1.5-2.0% of net asset value (NAV) or invested capital
- May step down after investment period

**Purpose:**
- Cover GP operating expenses
- Pay professional staff
- Fund overhead costs
`,keyPoints:["GP manages fund (1-2% capital contribution); LPs provide 98-99% of capital","LPA is the governing document establishing fund terms and waterfall mechanics","Fund lifecycle: Fundraising (6-18 mo), Investment (3-5 yrs), Harvest (2-5 yrs)","Capital calls: GP draws capital from LPs as needed with 10-20 days notice","Management fees: 1.5-2.0% of committed capital during investment period"],quiz:[{question:"What is the typical GP capital contribution in a private equity fund?",options:["0%","1-2%","10%","25%"],correctIndex:1,explanation:"GPs typically contribute 1-2% of fund capital, aligning their interests with LPs while allowing significant leverage."},{question:"What is the typical total life of a private equity fund?",options:["3-5 years","10-12 years","20 years","30 years"],correctIndex:1,explanation:"Private equity funds typically have a total life of 10-12 years, including a 3-5 year investment period and a 2-5 year harvest period, with possible extensions."},{question:"What is the typical management fee during the investment period?",options:["0.5-1.0%","1.5-2.0%","3-4%","5-10%"],correctIndex:1,explanation:"Management fees during the investment period are typically 1.5-2.0% of committed capital, covering GP operating expenses and staff costs."}]},{id:"lesson-2",title:"Waterfall Distributions",duration:"40 min",content:`
## Distribution Waterfall Overview

The waterfall distribution mechanism determines how investment returns are allocated between LPs and the GP. It ensures LPs receive their capital back and preferred return before the GP receives carried interest.

## Core Components

### Preferred Return (Hurdle Rate)
A preferred return acts like a risk-free floor for LPs. Only once cumulative distributions exceed the hurdle does any carried interest accrue.

**Typical Rates:**
- Most common: 8% compound IRR
- Some emerging managers use tiered hurdles (e.g., 8% then 10%) to attract commitments
- May be simple or compounded

**Purpose:**
- Protects LP capital
- Ensures GP earns carry only after delivering minimum returns
- Aligns GP incentives with LP interests

### Return of Capital to LPs
Before any performance payments, LPs receive a dollar-for-dollar return of their contributed capital, including fees and expenses that were drawn down.

**Purpose:**
- Ensures GPs focus on absolute value creation rather than maintaining NAV
- Aligns with principle that investors should recover their money before sharing profits

### GP Catch-Up Provisions
Once LPs have received their capital back and the preferred return, most waterfalls include a catch-up tranche. Here, the GP receives all or a majority of incremental proceeds until its share of total profits equals the agreed carry percentage (typically 20%).

**Purpose:**
- Accelerates GP economics without disturbing the final 80/20 split
- Rewards GP for achieving the hurdle quickly

### Carried Interest Allocations
After the catch-up, any remaining profits are split according to the carried-interest ratio—classically 80% to LPs and 20% to the GP.

**Typical Structures:**
- Standard: 80% LPs / 20% GP
- Some LPAs introduce tiered carry that escalates to 25% if performance exceeds, say, a 3× multiple

## Waterfall Structures

### European-Style (Whole-of-Fund) Distributions

Under a European or whole-of-fund waterfall, all cash first repays LP capital and the portfolio-level preferred return before any carry can flow to the GP.

**How it works:**
- Early winners subsidize later laggards
- GP never earns carry while the overall fund is underwater
- Trade-off: Slower GP liquidity

**Where used:**
- Standard for large buyouts
- Infrastructure funds
- Secondary funds
- Most institutional LPs demand this structure

**Benefits:**
- Better alignment of GP and LP interests
- Reduces clawback exposure
- Ensures fund is profitable overall before carry distribution

**Trade-offs:**
- Slower GP liquidity
- May require fee step-downs or co-invest commitments to compensate
- Less attractive to emerging managers

### American-Style (Deal-by-Deal) Distributions

An American, or deal-by-deal, private equity waterfall model allows the GP to collect and carry on each exit once that single investment clears its hurdle.

**How it works:**
- GP collects carry on each individual exit
- After each deal clears its hurdle, GP receives catch-up and carry
- Faster GP economics

**Where used:**
- Venture capital partnerships
- Emerging managers
- Smaller funds

**Benefits:**
- Accelerates GP economics (vital for emerging managers)
- Simpler to calculate and administer

**Drawbacks:**
- Three pain points for LPs:
  1. Clawback exposure if later exits underperform
  2. Escrow locks on 20-30% of interim carry
  3. Tax-timing complexity for the GP
- Winners may coast, laggards may gamble (misaligned incentives)

### Hybrid Structures

Combination of European and American features to balance alignment and GP liquidity needs.

**Common variations:**
- Deal-by-deal with fund-level clawback
- Partial catch-up on each deal
- Tiered waterfalls with different rates at different return thresholds

[External Reading: How Private Equity Waterfalls Work - Alter Domus](https://alterdomus.com/insight/private-equity-waterfall/)
`,keyPoints:["Preferred return (hurdle rate) typically 8% compound IRR protects LP capital","LPs receive return of capital before GP receives any carry","Catch-up provisions accelerate GP economics to reach 20% profit share","European (whole-of-fund): better alignment, slower GP liquidity","American (deal-by-deal): faster GP economics, clawback risk"],quiz:[{question:"What is the typical preferred return (hurdle rate) in private equity funds?",options:["4%","6%","8%","12%"],correctIndex:2,explanation:"The most common preferred return is 8% compound IRR, acting as a risk-free floor for LPs before any carried interest accrues to the GP."},{question:"What is the main difference between European and American waterfall structures?",options:["European is faster, American is slower","European is whole-of-fund (better alignment); American is deal-by-deal (faster GP economics)","No difference","European is for US funds only"],correctIndex:1,explanation:"European (whole-of-fund) waterfalls require the entire fund to be profitable before GP receives carry, providing better alignment. American (deal-by-deal) allows GP to collect carry on each individual exit, providing faster GP economics but creating clawback risk."},{question:"What is the purpose of the catch-up provision?",options:["To slow down GP payments","To accelerate GP economics to reach the agreed carry percentage (typically 20%)","To protect LPs from losses","To calculate management fees"],correctIndex:1,explanation:"The catch-up provision allows the GP to receive all or most incremental proceeds after the hurdle is met until their share of total profits equals the agreed carry percentage, accelerating GP economics while maintaining the final 80/20 split."}]}]},{id:"advanced-ccp",title:"Advanced CCP Risk Management",region:"Global",description:"Deep dive into CCP default waterfalls, recovery and resolution, VMGH, skin-in-the-game, and interoperability between clearinghouses.",lessons:[{id:"lesson-1",title:"The Default Waterfall Structure",duration:"45 min",content:`
## Understanding the CCP Default Waterfall

The default waterfall is the sequence of financial resources a CCP uses to absorb losses when a clearing member defaults. It represents the CCP's "defense in depth" against member failure.

## The Standard Waterfall Sequence

### 1. Initial Margin (Defaulter's Collateral)

The first line of defense is the defaulting member's own collateral.

**Initial Margin:** Posted by the defaulter at trade initiation
- Covers potential future exposure (PFE) under extreme scenarios
- Calculated using historical or stressed market movements
- Usually SPAN-based or VaR-based models
- May include add-ons for concentrated positions

**Variation Margin:** Collected daily to cover mark-to-market losses
- Ensures current exposure is zero
- Intraday margin calls in volatile markets

**Excess Margin:** Any collateral posted beyond minimum requirements

**Why This Matters:** Defaulter pays first principle ensures incentives remain aligned. Members know their own collateral is at risk.

### 2. Default Fund Contribution (Defaulter's Skin in the Game)

After initial margin is exhausted, the defaulter's default fund contribution is used.

**Purpose:** Mutualized loss absorption for extreme losses beyond IM
**Size:** Typically 10-25% of total default fund
**Called:** "Skin in the game" because it's the defaulter's own capital at risk

### 3. CCP Own Capital (Skin in the Game)

The CCP contributes its own capital to absorb losses.

**Size Requirements (CPMI-IOSCO):**
- Minimum amount equal to largest two member default fund contributions
- Cover-2 standard ensures CCP has meaningful exposure

**Forms:**
- Cash reserves
- High-quality liquid assets
- Parent company guarantees (for some structures)

**Why Required:** Aligns CCP incentives with members; CCP management feels pain of poor risk management

### 4. Non-Defaulting Members' Default Fund Contributions

Losses exceeding defaulter's resources and CCP capital hit the mutualized default fund.

**Structure:**
- Pre-funded contributions from all clearing members
- Pro-rata allocation based on member activity/risk
- Held in segregated accounts, bankruptcy remote

**Assessment Rights:**
- CCPs typically have rights to call additional assessments (2-4x initial contribution)
- Members must commit to provide additional funds if needed
- Creates ongoing mutualization even after pre-funded amounts exhausted

**Concentration Risk:** Large members' default fund contributions may be disproportionately large, creating systemic concentration

### 5. Recovery Assessments

If the pre-funded default fund is exhausted, CCPs can assess remaining members.

**Types:**
- Pro-rata assessments based on member size/activity
- May be capped at certain multiples of initial default fund contribution
- Usually limited to losses from a single default event

**Practical Example:**
FICC's Government Securities Division (GSD) waterfall includes:
1. Defaulter's initial margin
2. Defaulter's default fund contribution
3. FICC's own capital (cover-2)
4. Mutualized default fund
5. Assessment rights on surviving members

## VMGH: Variation Margin Gains Haircutting

A controversial recovery tool allowing CCPs to reduce payments to members with in-the-money positions.

**Mechanism:**
- In stress, CCP may not collect sufficient variation margin from defaulter
- To prevent default fund depletion, CCP can "haircut" (reduce) payments to members owed variation margin
- Effectively forces winners to subsidize losses

**Controversy:**
- Violates expectation of full payment
- Creates incentive to reduce positions before stress
- Legal uncertainty in some jurisdictions
- BIS research (Aldasoro-Veraart) shows VMGH can create cross-CCP contagion

**Real-World Usage:**
Most CCPs have VMGH authority but rarely use it due to reputational concerns.

## Recovery Tools Beyond the Waterfall

### Tear-Up (Forced Close-Out)

CCP can tear up (close out at mid-market) positions of surviving members to reduce risk.

**When Used:**
- Position concentration risk too high after default
- Market liquidity deteriorating
- Need to rapidly reduce exposures

**Impact:**
- Forces members to realize mark-to-market
- Disrupts hedging strategies
- Used in extreme circumstances only

### Auction of Defaulted Positions

The primary method for managing a defaulter's portfolio.

**Process:**
1. CCP novates defaulter's positions to itself
2. Holds auction among surviving members to take over positions
3. Assigns portfolios to auction winners
4. Losses from unfavorable auction prices hit waterfall

**Key Considerations:**
- Auction success depends on market conditions
- Wide bid-ask spreads increase waterfall losses
- Members may collude to obtain favorable pricing
- CCP may need to warehouse positions if auction fails

## Reading: The Cover-2 Standard and Its Limitations

CPMI-IOSCO guidance requires CCPs to hold sufficient resources to cover losses from default of the two largest clearing members under extreme but plausible scenarios.

**Limitations:**

1. **Static view of member rankings:** Who are "largest" changes with market conditions
2. **Correlated defaults:** Cover-2 assumes sequential, not simultaneous, defaults
3. **Interconnectedness ignored:** Members of multiple CCPs create contagion channels
4. **Procyclicality:** Margin increases during stress may trigger the very defaults the waterfall is designed to cover

**Aldasoro & Veraart (2022) finding:**
> "We show that who the two top clearing members are varies significantly depending on whether one accounts for contagion effects stemming from interconnectedness through shared clearing membership."

**Implication:** Cover-2 is necessary but insufficient. CCPs need:
- Dynamic risk monitoring
- Stress testing with correlated defaults
- Systemic risk assessments across CCPs

[External Reading: CPMI-IOSCO Principles for Financial Market Infrastructures](https://www.bis.org/cpmi/publ/d101.pdf)
`,keyPoints:["Default waterfall: defaulter IM → defaulter DF → CCP capital → mutualized DF → assessments","Cover-2 standard: CCP capital must equal largest two member default fund contributions","VMGH allows CCPs to reduce variation margin payments to members during stress","Default auctions transfer defaulter positions to surviving members","Recovery assessments allow CCPs to call additional funds from surviving members","Cover-2 has limitations: assumes sequential defaults, ignores interconnectedness"],quiz:[{question:"In the CCP default waterfall, which resource is used first?",options:["CCP own capital","Mutualized default fund","Defaulter initial margin","Recovery assessments"],correctIndex:2,explanation:"The defaulter's initial margin is always the first line of defense, followed by their default fund contribution, then CCP capital, then the mutualized default fund."},{question:'What does "Cover-2" refer to in CCP risk management?',options:["Covering two days of losses","CCP capital equal to two largest member default fund contributions","Covering two asset classes","Two rounds of margin calls"],correctIndex:1,explanation:"Cover-2 requires CCPs to hold capital equal to the default fund contributions of the two largest clearing members to ensure the CCP has meaningful skin in the game."},{question:"What is Variation Margin Gains Haircutting (VMGH)?",options:["Reducing haircuts on collateral","Cutting variation margin payments owed to members","Increasing margin requirements","Closing out positions"],correctIndex:1,explanation:'VMGH allows CCPs to reduce ("haircut") payments owed to members with in-the-money positions during stress, effectively forcing winners to subsidize losses.'}]},{id:"lesson-2",title:"CCP Resolution and Systemic Risk",duration:"50 min",content:`
## When the Waterfall Fails: CCP Resolution

If a CCP exhausts all waterfall resources and still faces insolvency, resolution authorities step in. CCP failure is a systemic risk event requiring special legal frameworks.

## The Resolution Challenge

Unlike banks, CCPs cannot simply be liquidated:
- Thousands of counterparties depend on CCP performance
- Sudden close-out would devastate markets
- Contagion would spread through interconnected members

**Key Principle:** CCPs are "too systemic to fail" but also "too complex to resolve traditionally"

## Resolution Tools for CCPs

### 1. Loss Allocation (Cash Calls)

Resolution authority requires surviving members to contribute additional capital.

**Mechanics:**
- Uncapped or high-capped assessments on non-defaulting members
- Can exceed standard assessment commitments
- May be immediate (same-day) calls

**Legal Basis:**
- Statutory resolution powers override standard contract terms
- May be challenged in courts (untested in practice)

**Incentive Problems:**
- Creates moral hazard: members may reduce positions before crisis
- Uncertainty about ultimate liability reduces participation
- Drives "flight to safety" away from CCP clearing

### 2. Partial Tear-Up

Resolution authority cancels (tears up) some cleared positions.

**How It Works:**
- Positions closed at mid-market valuations
- Creates realized losses for affected members
- Reduces CCP exposure and risk

**Types:**
- Pro-rata across all positions
- Concentrated on specific products/markets
- Targeted at members with largest gains (VMGH on steroids)

**Market Impact:**
- Forces immediate hedging by affected members
- May trigger further market volatility
- Undermines confidence in clearing

### 3. Bridge CCP

Resolution authority transfers critical functions to a temporary entity.

**Structure:**
- New entity ("bridge CCP") assumes CCP operations
- Funded by resolution authority or private capital
- Eventually sold, wound down, or merged

**Challenges:**
- Requires rapid operational setup
- IT systems and operational continuity
- Staff retention during crisis

### 4. Bail-In

Converting debt or other obligations into equity or cancellation.

**Limited Use in CCPs:**
- CCPs typically don't have bail-inable debt
- Default fund contributions aren't debt instruments
- Less applicable than for banks

## The Too-Big-To-Fail Problem

Even with resolution tools, authorities may face pressure to bail out CCPs.

**Why Bailouts Are Tempting:**
- Immediate market stability
- Protects thousands of counterparties
- Prevents contagion cascade
- Political pressure to "do something"

**Why Bailouts Are Dangerous:**
- Moral hazard: CCPs take more risk knowing backstop exists
- Unfair to taxpayers
- Creates competitive distortions
- Undermines market discipline

**FICC Example:**
The U.S. Treasury/Federal Reserve have indicated FICC is systemically important. While no explicit guarantee exists, market participants assume implicit backing—a classic moral hazard problem.

## Cross-Border Resolution Challenges

Most major CCPs operate across multiple jurisdictions, creating coordination problems.

### Home vs. Host Country Conflicts

**Primary Jurisdiction:** Where CCP is incorporated (e.g., UK for LCH)
**Host Jurisdictions:** Where CCP clears trades for local members

**Conflicts:**
- Which resolution authority takes lead?
- How are losses allocated across jurisdictions?
- Different national resolution regimes may conflict

**Examples:**
- LCH (UK-based) clears for U.S., European, and Asian members
- JSCC (Japan) has international members
- Cross-default provisions complicate unilateral action

### Memoranda of Understanding (MOUs)

Regulators attempt to coordinate through bilateral agreements.

**Limitations:**
- Not legally binding in crisis
- Different time zones complicate coordination
- National interest may override cooperation
- No supranational authority exists

## Interoperability and Multi-CCP Risk

When CCPs link together to clear related products, failure at one can affect others.

### Interoperability Models

**1. Cross-Margining Agreements:**
- Offsetting positions at different CCPs reduce combined margin
- Members post less total collateral
- But creates cross-exposure: if one CCP fails, positions at both are at risk

**2. Linked Clearing:**
- CCPs recognize each other's trades
- Losses at one may cascade to linked CCP

**3. Common Members:**
- Large dealers clear at multiple CCPs
- Default at one strains resources at others through shared membership

### The Aldasoro-Veraart Research

BIS Working Paper No 1052 analyzes multi-CCP contagion:

**Key Findings:**

1. **Shared membership creates contagion channels**
   - Large dealer defaults at one CCP
   - Strains same dealer's positions at other CCPs
   - May trigger sequential defaults

2. **Cover-2 insufficient for multi-CCP analysis**
   - Top two members differ when interconnectedness considered
   - May need Cover-3, Cover-4, or higher in dense networks

3. **VMGH spillovers**
   - One CCP imposing VMGH affects member liquidity at other CCPs
   - Creates coordination problem: which CCP imposes VMGH first?

**Policy Implications:**
- Stress testing must be system-wide, not CCP-specific
- Recovery planning requires coordination across CCPs
- Macroprudential supervision of CCP ecosystem needed

## Systemic Risk Mitigation Strategies

### Macroprudential Approach

Supervise CCPs as a system, not individual entities.

**Tools:**
- Aggregate stress testing across all CCPs
- Monitor concentration of members across CCPs
- Limit cross-margining to reduce interdependencies
- Coordinate margin policies to avoid procyclicality

### CCP Diversity

Avoid single points of failure through multiple CCPs.

**Asian Model Advantage:**
- JSCC, CDP, HKSCC provide redundancy
- No single entity dominates
- Distributed risk across jurisdictions

**U.S. Model Risk:**
- FICC is sole Treasury repo CCP
- All repo risk concentrated in one entity
- Single point of failure for critical market

### Living Wills

CCPs must create resolution plans ("living wills") documenting:
- How to wind down operations
- Critical functions and continuity plans
- Resource requirements under stress
- Coordination with regulators

## Key Takeaways

**Resolution is untested:** No major CCP has been resolved in crisis. Tools exist on paper but real-world effectiveness unknown.

**Systemic risk is real:** CCPs concentrate counterparty risk. What makes individual transactions safer may make the system riskier.

**Coordination is essential:** Cross-border and multi-CCP coordination gaps remain significant vulnerabilities.

**Prevention > Resolution:** Building robust CCPs with adequate resources is far preferable to relying on resolution tools.

[External Reading: FSB Resolution of CCPs](https://www.fsb.org/work-of-the-fsb/financial-stability/central-counterparties-ccps/)
`,keyPoints:["CCP resolution tools: loss allocation, tear-up, bridge CCP, bail-in","Cross-border resolution complicated by home/host jurisdiction conflicts","Multi-CCP interoperability creates contagion channels through shared membership","Cover-2 standard insufficient when interconnectedness considered","No major CCP has been resolved - tools remain untested in crisis","Macroprudential supervision of CCP ecosystem is essential"],quiz:[{question:'What is a "bridge CCP" in resolution?',options:["A backup data center","A temporary entity that assumes CCP operations during resolution","A cross-border agreement","A margin call mechanism"],correctIndex:1,explanation:"A bridge CCP is a temporary entity created by resolution authorities to assume a failing CCP's operations, maintaining continuity while arranging permanent resolution."},{question:"Why is CCP resolution particularly challenging?",options:["CCPs are too small to matter","Liquidation would devastate markets and counterparties","CCPs have no assets","Regulators have no authority"],correctIndex:1,explanation:"CCPs cannot be simply liquidated like banks because thousands of counterparties depend on their continued performance, and sudden close-out would cause market devastation and contagion."},{question:"What does Aldasoro-Veraart research show about multi-CCP systems?",options:["They are always safer","Shared membership creates contagion channels","VMGH is never used","Cover-2 is always sufficient"],correctIndex:1,explanation:"The research demonstrates that large dealers clearing at multiple CCPs can transmit stress across markets, and the Cover-2 standard may be insufficient when interconnectedness is considered."}]}]},{id:"securities-lending",title:"Securities Lending & Prime Brokerage",region:"Global",description:"Comprehensive coverage of securities lending mechanics, beneficial ownership, rehypothecation, and prime brokerage services.",lessons:[{id:"lesson-1",title:"Securities Lending Fundamentals",duration:"40 min",content:`
## Securities Lending vs. Repo: Key Differences

While repo and securities lending both involve collateralized transfers of securities, they serve different economic purposes and have distinct legal structures.

## Economic Purpose

**Repo (Repurchase Agreement):**
- Purpose: Financing transaction (borrowing/lending cash)
- Securities serve as collateral for cash loan
- Focus on cash side of transaction

**Securities Lending:**
- Purpose: Facilitate short selling and settlement
- Cash (or other securities) serve as collateral for securities loan
- Focus on securities side of transaction

## Legal Structure

**Repo:**
- Sale and repurchase agreement
- Title transfer of securities (true sale)
- Bankruptcy remote (securities not part of estate)
- Netting agreements typically apply

**Securities Lending:**
- Loan of securities (not a sale)
- Title transfer occurs (for practical purposes) but transaction characterized as loan
- Borrower can sell/re-lend securities
- Return of equivalent securities (not identical)

## Market Size and Participants

**Global Securities Lending Market:**
- Approximately **$2.5 trillion** in securities on loan globally
- US Treasuries: ~$500 billion
- Equities: ~$1 trillion
- Corporate bonds: ~$500 billion
- Other (municipals, agencies, etc.): ~$500 billion

**Key Participants:**

**Lenders (Long-term holders):**
- Institutional investors (pension funds, insurers, mutual funds)
- ETFs and index funds (BlackRock, Vanguard, State Street)
- Corporate treasuries
- Sovereign wealth funds

**Borrowers (Need securities):**
- Hedge funds (short sellers)
- Market makers (settlement fails)
- Arbitrageurs (convertible arbitrage, relative value)
- Other institutional investors

**Intermediaries:**
- Agent lenders (BNY Mellon, JPMorgan, State Street)
- Prime brokers
- Custodian banks

## The Securities Lending Transaction

### Transaction Flow

**1. Initiation:**
- Borrower requests specific securities via agent lender or prime broker
- Lender agrees to lend, receives collateral
- Loan rate (fee) negotiated

**2. During Loan:**
- Borrower can sell, re-lend, or pledge securities
- Lender retains economic ownership (dividends, voting rights)
- Collateral marked to market daily
- Borrower pays loan fee (typically annualized)

**3. Return:**
- Borrower returns equivalent securities (not same CUSIP)
- Lender returns collateral
- Transaction terminates

### Collateral Types

**Cash Collateral:**
- Most common (60-70% of market)
- Borrower provides cash equal to 102-105% of security value
- Lender reinvests cash, earns reinvestment return
- Rebate rate = Reinvestment return - Loan fee

**Non-Cash Collateral:**
- Other securities (Treasuries, agencies, equities)
- Letters of credit
- Used when cash unavailable or restricted
- No reinvestment - fee paid directly

## Pricing and Economics

### Loan Fee (Rebate Rate)

The rebate rate is what the lender pays the borrower on cash collateral, net of the loan fee.

**Formula:**
Rebate Rate = Reinvestment Return - Loan Fee

**General Collateral (GC):**
- Easy to borrow securities (on-the-run Treasuries, liquid equities)
- Loan fee: 0.05-0.25% annually
- Rebate rate close to general collateral rate (e.g., SOFR - 10-30 bps)

**Specials (Hard-to-Borrow):**
- High demand, limited supply
- Loan fee: 1-10% annually (can spike higher)
- Negative rebate rates possible (lender pays net fee)

**Examples:**
- On-the-run 10-year Treasury: 0.10% fee (general collateral)
- High-short-interest tech stock: 15% fee (special)
- Post-earnings borrow: 50%+ fee (extreme special)

### Reinvestment Risk

When lenders receive cash collateral, they must reinvest it.

**Standard Reinvestment:**
- Overnight repo or money market
- Must be liquid and safe (principal preservation)
- Lender bears reinvestment risk

**Challenges:**
- Negative rates in some jurisdictions
- Yield compression post-2008
- Regulatory restrictions ( money fund reforms)

## Beneficial Ownership and Voting Rights

### Dividend and Coupon Treatment

**Manufactured Dividends:**
- When securities are lent over dividend date, borrower pays "manufactured dividend" to lender
- Tax treatment may differ from actual dividends
- May affect foreign tax credits

**Tax Considerations:**
- Dividend withholding tax complications
- Ineligibility for qualified dividend treatment in some cases
- Treaty benefits may be lost

### Voting Rights

**Proxy Voting:**
- Lender temporarily loses voting rights while securities are lent
- Borrower has voting rights (if they hold at record date)
- Can recall loans to vote on important matters

**Recall Provisions:**
- Lenders can recall securities with standard notice (often T+1)
- Borrower must return or find alternative supply
- Important for voting, corporate actions, risk management

## Short Selling Mechanics

### How Short Selling Works

**Purpose:** Profit from price decline or hedge long positions

**Process:**
1. Borrow securities via securities lending
2. Sell borrowed securities in market
3. Later, buy securities in market to return
4. Profit = Sale Price - Purchase Price - Borrow Cost

### Short Squeeze Risk

When short interest is high and borrow becomes scarce:

**Dynamics:**
- Short sellers must return securities or face buy-in
- Few shares available to borrow → fee spikes
- Forced buying drives price higher
- Creates feedback loop (short squeeze)

**Famous Examples:**
- GameStop (2021): Borrow fees exceeded 100%
- Volkswagen (2008): Briefly became world's most valuable company
- Tesla: Multiple squeeze attempts

### Buy-Ins

If borrower cannot return securities:

**Process:**
- Lender issues buy-in notice
- Can purchase securities in market at borrower's expense
- Borrower liable for any loss plus fees

## Regulatory Framework

### Rule 15c3-3 (SEC)

Requires broker-dealers to maintain possession or control of customer securities.

**Securities Lending Implications:**
- Customer securities can only be lent with consent
- Must maintain equivalent securities
- Cash collateral requirements

### Reg SHO (SEC)

Regulates short selling to prevent abusive practices.

**Key Provisions:**
- Locate requirement: Must locate securities before shorting
- Close-out requirement: Force close-out of fails
- Threshold securities: Reporting for heavily shorted stocks

### UCITS/AIFMD (Europe)

European regulations governing fund securities lending.

**Requirements:**
- Counterparty exposure limits
- Collateral requirements (quality, diversification)
- Revenue sharing disclosure (agent lenders)
- Transparency to investors

## Risk Management

### Counterparty Risk

Lender faces risk borrower defaults and collateral insufficient.

**Mitigation:**
- Daily mark-to-market and margin calls
- High-quality collateral (Treasuries or cash)
- Master agreements with close-out netting
- Borrower credit limits

### Operational Risk

**Settlement Fails:**
- Failure to deliver securities on settlement date
- Creates market disruption
- Penalties under CSDR (Europe) and SEC rules (US)

**Corporate Actions:**
- Rights issues, conversions, tenders during loan period
- Complex processing requirements
- Economic equivalence must be maintained

### Legal Risk

**Title Questions:**
- Who owns securities in bankruptcy of borrower/lender?
- Treatment under different jurisdictions
- Rehypothecation limits (see next section)

## Key Takeaways

**Not the same as repo:** Different economic purpose, legal structure, and market dynamics

**Two-sided market:** Lenders earn incremental return; borrowers facilitate short selling and settlement

**Specials matter:** Hard-to-borrow securities command premium fees, creating significant revenue for lenders

**Voting/recall complications:** Securities lending temporarily transfers certain ownership rights

**Short selling essential:** Provides market liquidity, price discovery, and hedging—but carries squeeze risk

[External Reading: ISLA Securities Lending Guidelines](https://www.isla.org/)
`,keyPoints:["Securities lending facilitates short selling; repo facilitates cash financing","Global securities lending market ~$2.5 trillion; loan fees range 0.05% (GC) to 10%+ (specials)","Lenders temporarily lose voting rights; borrowers pay manufactured dividends","Short squeezes occur when borrow becomes scarce, forcing buy-ins at high prices","Cash collateral (60-70% of market) creates reinvestment risk for lenders","Regulatory frameworks: Rule 15c3-3, Reg SHO (US); UCITS/AIFMD (Europe)"],quiz:[{question:"What is the primary economic purpose of securities lending?",options:["Cash financing for dealers","Facilitate short selling and settlement","Central clearing of trades","Government bond issuance"],correctIndex:1,explanation:"Securities lending primarily facilitates short selling (borrowers sell borrowed securities) and helps prevent settlement fails, unlike repo which is for cash financing."},{question:'What is a "special" in securities lending?',options:["A type of government bond","Hard-to-borrow securities with high loan fees","A short squeeze","A collateral type"],correctIndex:1,explanation:"Specials are securities in high demand but limited supply, commanding premium loan fees (1-10% or more) compared to general collateral (0.05-0.25%)."},{question:"What happens to voting rights when securities are lent?",options:["They are retained by the lender","They transfer to the borrower","They are suspended","They transfer to the agent lender"],correctIndex:1,explanation:"While the lender retains economic ownership (dividends), voting rights temporarily transfer to the borrower who holds the securities at the record date. Lenders can recall securities to vote."}]},{id:"lesson-2",title:"Prime Brokerage & Rehypothecation",duration:"45 min",content:`
## Prime Brokerage Services

Prime brokers provide comprehensive services to hedge funds and institutional investors, with securities financing at the core.

## Prime Brokerage Overview

**Definition:** A bundled package of services provided by investment banks to hedge funds and asset managers.

**Core Services:**

**1. Securities Lending:**
- Locates securities for short selling
- Provides borrow for settlement
- Manages recalls and returns

**2. Margin Financing:**
- Extends credit for long positions
- Rehypothecates client assets as collateral
- Provides leverage

**3. Custody and Clearing:**
- Holds client securities
- Processes settlements
- Corporate actions processing

**4. Reporting:**
- Portfolio valuation
- Risk analytics
- Regulatory reporting

**5. Capital Introduction:**
- Introduces hedge funds to potential investors
- Facilitates fundraising

## The Prime Brokerage Relationship

### Master Securities Lending Agreement (MSLA)

Governs securities lending between prime broker and hedge fund.

**Key Terms:**
- Borrow and lending mechanics
- Collateral requirements
- Margin maintenance
- Events of default
- Close-out provisions

### Prime Brokerage Agreement (PBA)

Broader agreement covering all services.

**Critical Provisions:**
- Rehypothecation rights
- Margin requirements
- Cross-margining
- Commingling of assets
- Security interest in client assets

## Rehypothecation Explained

### What Is Rehypothecation?

The practice whereby a broker-dealer uses client assets as collateral for its own financing.

**Mechanism:**
1. Client (hedge fund) buys securities on margin
2. Client securities held by prime broker as collateral
3. Prime broker pledges same securities to bank for repo financing
4. Same securities serve as collateral for two loans

**Example:**
- Hedge fund buys $100m equities with $50m margin loan from prime broker
- Prime broker holds $100m equities as collateral
- Prime broker repos $80m of those equities to bank for funding
- The $80m equities are "rehypothecated"

### Rehypothecation Limits

**US Regulation (SEC Rule 15c3-3):**
- Prime broker can rehypothecate up to 140% of customer debit balance
- If client owes $50m, can rehypothecate $70m of securities
- Must be in connection with financing customer positions

**UK/Europe (Less Restrictive):**
- Generally no statutory limits
- Subject to contractual agreements
- Client consent required
- More permissive environment historically

### The 2008 Crisis: Rehypothecation Risk Revealed

**Lehman Brothers Collapse:**
- Lehman UK rehypothecated significant client assets
- When Lehman failed, clients became unsecured creditors
- Many couldn't recover securities (owned by Lehman's banks)
- Estimated $15-20b in client asset shortfall

**MF Global Failure (2011):**
- Commingled and rehypothecated customer funds
- $1.6 billion in customer funds missing
- Excessive repo-to-maturity trades using customer collateral
- Criminal convictions for misappropriation

### Segregation Requirements Post-Crisis

**CFTC Margin Rules (US):**
- Swap dealers must segregate customer margin
- Cannot rehypothecate cleared swap margin
- Uncleared swaps: Limited rehypothecation

**EMIR (Europe):**
- Mandatory segregation for OTC derivatives margin
- Rehypothecation prohibited for variation margin
- Initial margin subject to strict limits

**SEC Rules:**
- Enhanced disclosure of rehypothecation
- Consent requirements
- Asset protection rule amendments

## Margin Requirements in Prime Brokerage

### Initial Margin

**Purpose:** Protect against adverse price movements
**Calculation:** Risk-based (VaR or scenario-based)
**Levels:** 10-50% depending on asset volatility

**Portfolio Margin (Advanced Approach):**
- Offsets between long and short positions
- Correlation adjustments
- Lower margin for hedged portfolios

### Maintenance Margin

**Purpose:** Ongoing protection; margin calls when breached
**Typical Level:** 75-85% of initial margin requirement
**Margin Call:** Required when equity falls below maintenance level

### Margin Calculations Example

**Scenario:**
- Long $10m large-cap equities
- Short $5m different large-cap equities
- Prime broker margin requirement: 15% gross, 6% portfolio

**Gross Margin:**
- ($10m + $5m) × 15% = $2.25m

**Portfolio Margin:**
- Net position: $5m exposure
- Concentration add-on: $0.5m
- Total requirement: $5.5m × 6% + $0.5m = $830k

**Savings:** $2.25m - $0.83m = $1.42m (63% reduction)

## Prime Brokerage Risk Management

### Prime Broker Risks

**1. Client Default:**
- Client can't meet margin call
- Securities sold at declining prices
- Loss if collateral insufficient

**2. Rehypothecation Risk:**
- Client demands return of securities
- Prime broker has rehypothecated them
- Must find replacement securities or buy in market

**3. Funding Risk:**
- Prime broker relies on wholesale funding
- Repo markets can freeze
- Mismatch between client financing and PB funding

**4. Operational Risk:**
- Complex reconciliations
- Settlement fails
- Corporate actions processing

### Client Risks

**1. Prime Broker Default:**
- Prime broker fails (Lehman)
- Securities may be tied up in bankruptcy
- Rehypothecated assets may be lost

**2. Commingling Risk:**
- Client assets not segregated
- Hard to identify "your" securities in bankruptcy
- May become general creditor

**3. Lock-Up Periods:**
- Agreements restrict withdrawal
- Assets trapped during stress
- Gate provisions during crisis

## The Role of Tri-Party Repo in Prime Brokerage

### Tri-Party Mechanics

**Participants:**
- Cash investor (money market fund)
- Cash borrower (prime broker)
- Tri-party agent (BNY Mellon, JPMorgan)

**Process:**
1. Prime broker pledges securities as repo collateral
2. Tri-party agent values securities, manages collateral
3. Cash investor provides funds
4. Agent handles daily settlement, substitution

### Intra-Day Credit Risk

**The Problem:**
- Tri-party agents provide massive intra-day credit
- Morning: Return cash to investors
- Afternoon: Re-receive cash for new repo
- During day: Prime broker uses cash
- Agent exposed if PB fails intra-day

**2010 Reforms:**
- Limited intra-day credit exposure
- Earlier cut-off times
- Reduced reliance on clearing bank funding

## Multi-Prime Brokerage Strategy

### Why Funds Use Multiple Prime Brokers

**1. Diversification:**
- Reduce exposure to any single prime broker
- Protect against PB default

**2. Capacity:**
- Large funds exceed single PB's risk appetite
- Spread financing across balance sheets

**3. Best Execution:**
- Competition for securities lending rates
- Better pricing through multiple sources

**4. Specialization:**
- Different PBs for different strategies
- Regional expertise (Asia, Europe)

### Challenges

**Operational Complexity:**
- Multiple reconciliations
- Fragmented reporting
- Cross-PB margin inefficiencies

**Cost:**
- Minimum fees at each PB
- Operational overhead

## Key Takeaways

**Prime brokerage is essential infrastructure:** Enables hedge fund leverage, short selling, and operational efficiency

**Rehypothecation is powerful but risky:** Same assets collateralize multiple obligations; limits and segregation critical

**Post-crisis reforms:** Enhanced segregation, rehypothecation limits, and disclosure requirements

**Client protections matter:** Segregation, excess margin, and multi-prime strategies protect against PB failure

**Tri-party repo is critical funding source:** Prime brokers rely on tri-party market for financing; reforms address intra-day risk

[External Reading: SIFMA Prime Brokerage Guidelines](https://www.sifma.org/)
`,keyPoints:["Prime brokers provide securities lending, margin financing, custody, and reporting to hedge funds","Rehypothecation: prime broker uses client assets as collateral for its own financing (140% limit in US)","Lehman and MF Global failures revealed rehypothecation risks; post-crisis reforms mandate segregation","Portfolio margin reduces requirements for hedged positions through offset recognition","Tri-party repo is critical PB funding source; reforms addressed intra-day credit risk from agents","Multi-prime strategies diversify counterparty risk but add operational complexity"],quiz:[{question:"What is rehypothecation?",options:["Selling securities short","Using client assets as collateral for broker financing","Central clearing of trades","Reinvesting cash collateral"],correctIndex:1,explanation:"Rehypothecation is when a prime broker pledges client securities as collateral for its own financing. US regulations limit this to 140% of the client's debit balance."},{question:"What was a key lesson from the Lehman Brothers collapse regarding prime brokerage?",options:["Prime brokers cannot fail","Rehypothecated client assets may be lost in bankruptcy","Short selling should be banned","Margin requirements are too low"],correctIndex:1,explanation:"Lehman UK had rehypothecated significant client assets. When Lehman failed, those clients became unsecured creditors and many could not recover their securities, revealing the bankruptcy risk of rehypothecation."},{question:"What is portfolio margin?",options:["Fixed percentage for all positions","Risk-based margin recognizing offsets between positions","No margin required","Double the standard margin"],correctIndex:1,explanation:"Portfolio margin is an advanced approach that calculates margin based on overall portfolio risk, recognizing offsets between long and short positions, typically resulting in lower margin requirements than gross approaches."}]}]},{id:"credit-derivatives",title:"Credit Derivatives & CDS",region:"Global",description:"In-depth coverage of credit default swaps, indices, tranches, and their role in systemic risk.",lessons:[{id:"lesson-1",title:"Credit Default Swaps (CDS) Fundamentals",duration:"45 min",content:`
## Credit Default Swaps: Insurance or Speculation?

Credit Default Swaps are the most important credit derivative, with a market of approximately **$8-9 trillion** in notional outstanding (BIS data 2024).

## What Is a CDS?

A CDS is a financial contract where the protection buyer makes periodic payments to the protection seller in exchange for a payoff if a "credit event" occurs on a reference entity.

**Contract Terms:**
- **Reference Entity:** The issuer whose default is being insured (single name CDS)
- **Notional Amount:** The face value of protection
- **Credit Event:** Defined default triggers (bankruptcy, failure to pay, restructuring)
- **Spread (Premium):** Annual payment, quoted in basis points
- **Maturity:** Typically 1, 3, 5, 7, or 10 years (5-year most common)

## CDS vs. Insurance: Key Differences

While CDS function like insurance, important distinctions exist:

**Insurable Interest:**
- Insurance: Must have economic interest in underlying
- CDS: No ownership required; can speculate on default

**Standardization:**
- Insurance: Custom contracts
- CDS: ISDA standard documentation

**Cash Settlement:**
- Insurance: Typically reimbursement of actual loss
- CDS: Auction settlement determined by market (not actual loss)

**Counterparty Risk:**
- Insurance: Insurance company risk
- CDS: Bilateral counterparty exposure

## CDS Pricing and Spreads

### CDS Spread Interpretation

The CDS spread reflects the annual cost of protection as a percentage of notional.

**Examples:**
- 100 bps (1%) on $10m notional = $100,000/year
- 500 bps (5%) on $10m notional = $500,000/year

**Spread Drivers:**
1. **Default probability:** Higher PD → Higher spread
2. **Recovery rate:** Lower expected recovery → Higher spread
3. **Risk-free rate:** Minor effect on spread

### Upfront Premium vs. Running Spread

**Running Spread (Legacy):**
- Fixed coupon (100 bps for investment grade, 500 bps for high yield)
- Actual spread quoted as upfront + running
- Complex present value calculations

**Upfront Premium (Standard, post-2014):**
- Standardized coupons (1% IG, 5% HY)
- If spread > coupon, buyer pays upfront
- If spread < coupon, seller pays upfront
- Cleaner pricing, better standardization

### CDS-Bond Basis

The CDS spread typically differs from the bond credit spread:

**CDS-Bond Basis = CDS Spread - Bond Spread**

**Drivers of Basis:**
- **Funding cost:** CDS unfunded, bond requires cash
- **Cheapest-to-deliver option:** CDS protection holder can deliver any eligible bond
- **Technical factors:** Supply/demand in CDS vs. cash markets
- **Counterparty risk:** CDS includes CVA

**Arbitrage Constraints:**
- Basis can persist due to market frictions
- "Negative basis trade" buys bond + CDS protection
- "Positive basis trade" sells CDS + shorts bond

## Credit Events and Settlement

### Types of Credit Events

**Bankruptcy:**
- Reference entity files for bankruptcy
- Most common trigger

**Failure to Pay:**
- Misses scheduled payment
- Grace period considerations
- Minimum threshold amounts

**Restructuring:**
- Terms of debt modified to benefit borrower
- Modified restructuring (MR) vs. modified modified restructuring (MMR)
- Regional variations (Europe includes restructuring, North America typically doesn't)

**Repudiation/Moratorium:**
- Challenges reference entity's obligations
- Rare in developed markets

### Settlement Process

**Physical Settlement (Historical):**
- Protection buyer delivers defaulted bonds to seller
- Receives notional amount in cash
- Problem: "Delivery squeezes" if not enough bonds available

**Cash Settlement (Current Standard):**
- Auction determines recovery value
- Protection seller pays: Notional × (100% - Recovery%)
- No physical delivery required

**Auction Mechanics:**
1. ISDA organizes auction after credit event
2. Market participants submit bid/offer prices
3. Auction clearing price determines recovery
4. Usually multiple rounds to ensure fair price

**Historical Recoveries:**
- Lehman Brothers: 8.625% (91.375% payout)
- General Motors: 12.5% (87.5% payout)
- Energy Future Holdings: 12.5% (87.5% payout)

## CDS Indices

### The CDX and iTraxx Families

CDS indices provide diversified credit exposure through standardized baskets.

**CDX North America:**
- Investment Grade (CDX.NA.IG): 125 investment grade entities
- High Yield (CDX.NA.HY): 100 high yield entities
- High Yield BB, B (sub-indices by rating)
- Emerging Markets (CDX.EM)

**iTraxx Europe:**
- Main (iTraxx Main): 125 investment grade entities
- Crossover (iTraxx Crossover): 40 sub-investment grade
- Financials, Senior/Subordinated (sector indices)
- Asia, Australia (regional indices)

### Index Mechanics

**Roll Schedule:**
- New series issued every 6 months (March and September)
- Series numbered (e.g., "CDX IG Series 40")
- "On-the-run" = most recent series (most liquid)
- "Off-the-run" = older series (less liquid)

**Constituent Changes:**
- Defaulted names removed
- Downgraded names may move to crossover index
- New names added to maintain count

**Index vs. Single-Name CDS:**
- Index trades at spread roughly equal to average constituent spread
- Index typically trades tighter (liquidity premium)
- Index is unfunded; single-name can be traded on either funded or unfunded basis

### Index Tranches

**Synthetic CDOs:**
CDS indices can be tranched to create different risk/return profiles.

**Standard Tranches (CDX IG):**
- 0-3% (Equity tranche): First loss, highest risk/highest return
- 3-7% (Mezzanine): Middle risk
- 7-10%, 10-15%, 15-30%, 30-100% (Senior tranches): Lower risk

**Correlation Trading:**
- Tranche pricing depends on default correlation assumptions
- If correlation increases, equity tranche value decreases, senior tranches increase
- "Correlation skew" describes market pricing vs. model

## The 2008 Crisis: CDS Role

### AIG Financial Products

**The Problem:**
- AIG sold CDS protection on mortgage-backed securities
- Assumed subprime risk via multi-sector CDOs
- No collateral posting until ratings downgrades
- $400+ billion notional exposure

**Collapse Mechanism:**
1. Housing prices decline
2. Downgrades trigger collateral calls
3. AIG lacks liquidity to post collateral
4. Government bailout required ($182 billion)
5. AIG almost brought down the financial system

**Lesson:** Wrong-way risk—selling protection on assets correlated with own creditworthiness.

### The CDS Market in 2008

**Market Size:**
- Peak: ~$60 trillion notional (2007)
- Current: ~$8-9 trillion (massive compression through netting)

**Problems Revealed:**
1. **Bilateral collateral:** Counterparty credit risk in OTC market
2. **Naked CDS:** Speculation without underlying exposure
3. **Settlement uncertainty:** Unclear auction processes
4. **Systemic concentration:** AIG, monoline insurers

## Post-Crisis CDS Market Reforms

### Central Clearing

**Mandatory Clearing:**
- Standardized CDS must be centrally cleared
- Reduces counterparty risk through CCP
- CCP becomes counterparty to both sides

**CCPs for CDS:**
- ICE Clear Credit (US)
- LCH CDSClear (Europe)

**Clearing Eligibility:**
- Standardized indices (CDX, iTraxx)
- Standardized single names (limited)
- Bespoke and illiquid CDS remain bilateral

### Trade Reporting

**DTCC Data Repository:**
- All CDS trades reported to trade repository
- Regulators gain transparency into positions
- Systemic risk monitoring improved

### Standardization

**ISDA Standard Definitions:**
- 2014 Credit Derivatives Definitions
- Standardized coupons (1% IG, 5% HY)
- Clarified auction settlement terms
- Streamlined credit event processing

## CDS as a Hedging Tool

### Corporate Bond Hedging

**Perfect Hedge (Theoretical):**
- Own $10m corporate bond
- Buy $10m CDS protection
- If issuer defaults: Bond loses value, CDS pays off
- Net exposure = 0

**Imperfections:**
- Basis risk: CDS spread ≠ Bond spread movement
- Cheapest-to-deliver: You may not own the delivery bond
- Duration mismatch: CDS curve vs. bond curve

### Loan Portfolio Hedging

**LCDX (Loan CDS Index):**
- CDS on syndicated loans (not bonds)
- Allows hedging loan portfolio credit risk
- Different recovery assumptions (loans senior to bonds)

### Sovereign CDS

**Use Cases:**
- Hedge emerging market debt
- Speculate on sovereign default
- Measure sovereign credit risk (CDS spread as metric)

**Controversy:**
- Naked sovereign CDS banned in EU (2012)
- Argued to increase borrowing costs for stressed sovereigns
- Empirical evidence mixed

## CDS as a Market Signal

### Credit Spread as Predictor

CDS spreads often lead bond market moves.

**Leading Indicator Properties:**
- More liquid than cash bonds
- Speculative participation
- Faster price discovery

**Distressed Signals:**
- CDS spreads > 500 bps: Distressed territory
- CDS spreads > 1000 bps: High probability of default priced
- Inverted CDS curve: Short-term stress greater than long-term

### CDS Implied Probability of Default

**Approximation:**
PD ≈ CDS Spread / (1 - Recovery Rate)

**Example:**
- CDS spread: 200 bps (2%)
- Recovery rate: 40%
- Implied PD: 2% / (1 - 0.4) = 3.33%

**Limitations:**
- Assumes risk-neutral pricing
- Ignores counterparty risk (CVA)
- Recovery rate uncertain

## Key Takeaways

**CDS is not insurance:** No insurable interest required, standardized, cash settlement

**Market is large but shrinking:** From $60T peak to $8-9T current; central clearing and compression

**AIG demonstrated systemic risk:** Wrong-way risk, concentration, inadequate collateral practices

**Post-crisis reforms:** Central clearing, trade reporting, standardized documentation

**Useful tool for:** Hedging credit risk, speculating, measuring market sentiment

**Limitations:** Basis risk, cheapest-to-deliver option, counterparty risk in bilateral trades

[External Reading: ISDA Credit Derivatives Definitions](https://www.isda.org/)
`,keyPoints:["CDS market: ~$8-9 trillion notional; peaked at ~$60 trillion before compression and clearing mandates","CDS functions like insurance but no insurable interest required; used for hedging and speculation","Credit events: bankruptcy, failure to pay, restructuring; settled via auction process determining recovery","CDS indices (CDX, iTraxx) provide diversified exposure; can be tranched to create synthetic CDOs","AIG failure (2008): sold CDS on mortgage CDOs without adequate collateral; required $182B government bailout","Post-crisis reforms: mandatory central clearing for standardized CDS, trade reporting, ISDA 2014 standardization"],quiz:[{question:"What is the key difference between CDS and insurance?",options:["CDS has higher premiums","CDS does not require insurable interest in the reference entity","CDS only covers bonds, not loans","CDS cannot be traded"],correctIndex:1,explanation:"Unlike insurance, CDS contracts do not require the protection buyer to have an economic interest in the reference entity. This allows speculation on credit events without owning underlying bonds."},{question:"What triggered the AIG crisis in 2008?",options:["Stock market crash","Collateral calls triggered by ratings downgrades on mortgage CDS","Interest rate spikes","Currency devaluation"],correctIndex:1,explanation:"AIG sold CDS protection on mortgage-backed securities without posting initial collateral. When ratings were downgraded, massive collateral calls were triggered that AIG could not meet, leading to a government bailout."},{question:"What is the current standard CDS settlement method?",options:["Physical delivery of bonds","Cash settlement via auction process","Fixed payment schedule","Mutual cancellation"],correctIndex:1,explanation:"Since 2009, the standard settlement method is cash settlement via auction. An auction determines the recovery value of defaulted bonds, and the protection seller pays the difference between par and recovery."}]}]},YS,KS,XS,QS,JS,ZS],fy=WS,e1=$S,kr=Bt.find(r=>r.flagship);function mi({icon:r,title:n,description:s}){return d.jsxs("div",{className:"lesson-card",children:[d.jsx(r,{className:"w-8 h-8 text-accent-cyan mb-4"}),d.jsx("h3",{className:"text-lg font-semibold mb-2",children:n}),d.jsx("p",{className:"text-gray-400 text-sm",children:s})]})}function t1(){const r=Bt.reduce((s,l)=>s+l.lessons.length,0),n=Bt.reduce((s,l)=>s+l.lessons.reduce((u,h)=>u+h.quiz.length,0),0);return d.jsxs("div",{className:"min-h-screen",children:[d.jsx("nav",{className:"fixed top-0 left-0 right-0 h-16 bg-dark-800/95 backdrop-blur-md border-b border-dark-600 z-50",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 h-full flex items-center justify-between",children:[d.jsxs(Pe,{to:"/",className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center",children:d.jsx(ro,{className:"w-5 h-5 text-white"})}),d.jsx("span",{className:"font-bold text-lg",children:"Repo & CCP Learning"})]}),d.jsx(Su,{})]})}),d.jsxs("section",{className:"relative pt-36 pb-20 px-4 overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-accent-blue/10 via-transparent to-transparent"}),d.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6",children:[d.jsx(ro,{className:"w-4 h-4"}),d.jsx("span",{children:"Flagship Path: Repo & Central Clearing"})]}),d.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent",children:["Understand Repo Markets",d.jsx("br",{}),"& Central Counterparties"]}),d.jsx("p",{className:"text-xl text-gray-400 mb-8 max-w-2xl mx-auto",children:"A law-student-friendly, end-to-end learning path covering repo mechanics, CCP risk management, regulatory frameworks, and real-world case studies — with embedded primary sources and expert commentary."}),d.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[d.jsxs(Pe,{to:"/dashboard",className:"inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105",children:["Start the Flagship Path",d.jsx(An,{className:"w-4 h-4"})]}),d.jsxs(Pe,{to:"/dashboard",className:"inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all border border-dark-500",children:[d.jsx(dt,{className:"w-4 h-4"}),"Explore All Modules"]})]})]})]}),d.jsx("section",{className:"py-12 px-4 border-y border-dark-600 bg-dark-800/50",children:d.jsxs("div",{className:"max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:Bt.length}),d.jsx("div",{className:"text-sm text-gray-400",children:"Learning Modules"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:r}),d.jsx("div",{className:"text-sm text-gray-400",children:"Lessons"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:n}),d.jsx("div",{className:"text-sm text-gray-400",children:"Quiz Questions"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:"100%"}),d.jsx("div",{className:"text-sm text-gray-400",children:"Free & Open"})]})]})}),d.jsx("section",{className:"py-16 px-4 bg-dark-800/30",children:d.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm mb-6",children:[d.jsx(qS,{className:"w-4 h-4"}),d.jsx("span",{children:"Why This Exists"})]}),d.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-6",children:"Designed for Law Students & Finance Professionals"}),d.jsxs("p",{className:"text-lg text-gray-400 mb-8 leading-relaxed",children:["Repo markets and central clearing sit at the heart of global financial infrastructure — yet they remain among the least accessible topics for new learners. This platform bridges that gap with a",d.jsx("span",{className:"text-white font-medium",children:" structured, concept-complete learning path"})," that connects every building block from basic repo mechanics through to advanced regulatory frameworks."]}),d.jsxs("div",{className:"grid md:grid-cols-3 gap-6 text-left",children:[d.jsxs("div",{className:"bg-dark-700/50 rounded-lg p-5 border border-dark-500",children:[d.jsx(pi,{className:"w-6 h-6 text-accent-cyan mb-3"}),d.jsx("h3",{className:"font-semibold mb-2",children:"Primary Sources Built In"}),d.jsx("p",{className:"text-sm text-gray-400",children:"Every lesson links to the actual regulatory texts, central bank publications, and industry reports it draws from."})]}),d.jsxs("div",{className:"bg-dark-700/50 rounded-lg p-5 border border-dark-500",children:[d.jsx(ku,{className:"w-6 h-6 text-accent-cyan mb-3"}),d.jsx("h3",{className:"font-semibold mb-2",children:"Legal & Regulatory Lens"}),d.jsx("p",{className:"text-sm text-gray-400",children:"Written with law students in mind — explaining not just what the rules say, but why they were designed that way."})]}),d.jsxs("div",{className:"bg-dark-700/50 rounded-lg p-5 border border-dark-500",children:[d.jsx(Co,{className:"w-6 h-6 text-accent-cyan mb-3"}),d.jsx("h3",{className:"font-semibold mb-2",children:"Global Perspective"}),d.jsx("p",{className:"text-sm text-gray-400",children:"Compare U.S. (FICC), European (CCP risk frameworks), and Asian market structures side by side."})]})]})]})}),kr&&d.jsxs("section",{className:"py-20 px-4 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-accent-cyan/5 to-accent-blue/5"}),d.jsxs("div",{className:"max-w-5xl mx-auto relative z-10",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-4",children:[d.jsx(ro,{className:"w-4 h-4"}),d.jsx("span",{children:"Flagship Learning Path"})]}),d.jsx("h2",{className:"text-2xl md:text-3xl font-bold",children:kr.title}),d.jsx("p",{className:"text-gray-400 mt-4 max-w-2xl mx-auto",children:kr.description})]}),d.jsx("div",{className:"space-y-3 mb-10",children:kr.lessons.slice(0,6).map((s,l)=>d.jsxs("div",{className:"flex items-start gap-4 bg-dark-800/60 backdrop-blur-sm rounded-lg p-4 border border-dark-500 hover:border-accent-cyan/30 transition-colors",children:[d.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-accent-cyan/20 text-accent-cyan flex items-center justify-center text-sm font-bold",children:l+1}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsx("span",{className:"font-medium text-white",children:s.title}),s.difficulty&&d.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${s.difficulty==="Beginner"?"bg-green-500/20 text-green-400":s.difficulty==="Intermediate"?"bg-yellow-500/20 text-yellow-400":"bg-red-500/20 text-red-400"}`,children:s.difficulty})]}),d.jsx("p",{className:"text-sm text-gray-400 truncate",children:s.summary})]}),d.jsx("div",{className:"flex-shrink-0 flex items-center gap-2 text-xs text-gray-500",children:s.estimatedHours&&d.jsxs("span",{children:[s.estimatedHours,"h"]})})]},s.id))}),d.jsx("div",{className:"text-center",children:d.jsxs(Pe,{to:`/dashboard/module/${kr.id}`,className:"inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan hover:bg-accent-blue text-white font-medium rounded-lg transition-all hover:scale-105 text-lg",children:["Begin the Flagship Path",d.jsx(An,{className:"w-5 h-5"})]})})]})]}),d.jsx("section",{className:"py-16 px-4",children:d.jsxs("div",{className:"max-w-6xl mx-auto",children:[d.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",children:"Platform Features"}),d.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[d.jsx(mi,{icon:dt,title:"Comprehensive Curriculum",description:"From repo mechanics through CCP default waterfalls and regulatory frameworks — no conceptual gaps."}),d.jsx(mi,{icon:HS,title:"Interactive Diagrams",description:"Visual flow diagrams showing trade lifecycle from quote to settlement and collateral flows."}),d.jsx(mi,{icon:jS,title:"Risk Management Deep-Dive",description:"Netting, margin, default waterfalls, loss allocation, and systemic risk — explained for law students."}),d.jsx(mi,{icon:Co,title:"Multi-Jurisdiction Coverage",description:"Compare U.S. FICC, European EMIR/CCP frameworks, and Asia's multi-CCP landscape."}),d.jsx(mi,{icon:ku,title:"Regulatory Source Embedding",description:"Every lesson links to the actual texts — BIS PFMI, SEC Release 34-100016, ICMA guidance, and more."}),d.jsx(mi,{icon:ro,title:"Glossary & Concept Maps",description:"Comprehensive terminology, cross-referenced terms, and concept-relationship diagrams."})]})]})}),d.jsx("section",{className:"py-16 px-4 bg-gradient-to-b from-dark-800 to-dark-900",children:d.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[d.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Master Repo & CCP?"}),d.jsx("p",{className:"text-gray-400 mb-8 text-lg",children:"Free forever. No sign-up required. Built for law students, by practitioners."}),d.jsxs(Pe,{to:"/dashboard",className:"inline-flex items-center gap-2 px-8 py-4 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105 text-lg",children:["Start Learning Now",d.jsx(An,{className:"w-5 h-5"})]})]})})]})}function a1({completedLessons:r,totalLessons:n,totalXP:s,streak:l}){const u=n>0?Math.round(r/n*100):0;return d.jsxs("div",{className:"rounded-lg border border-dark-600 bg-dark-800 p-6",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-5",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx(ko,{className:"h-5 w-5 text-accent-cyan"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-semibold text-white",children:"Course progress"}),d.jsxs("div",{className:"text-sm text-gray-500",children:[r," of ",n," lessons complete"]})]})]}),d.jsxs("div",{className:"text-2xl font-bold text-accent-cyan",children:[u,"%"]})]}),d.jsx("div",{className:"progress-bar mb-5",children:d.jsx("div",{className:"progress-fill",style:{width:`${u}%`}})}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm",children:[d.jsxs("div",{className:"rounded-lg bg-dark-700 p-4",children:[d.jsx(dy,{className:"h-4 w-4 text-accent-amber mb-2"}),d.jsx("div",{className:"text-lg font-semibold text-white",children:s}),d.jsx("div",{className:"text-gray-500",children:"XP earned"})]}),d.jsxs("div",{className:"rounded-lg bg-dark-700 p-4",children:[d.jsx(zS,{className:"h-4 w-4 text-accent-green mb-2"}),d.jsx("div",{className:"text-lg font-semibold text-white",children:l}),d.jsx("div",{className:"text-gray-500",children:"day streak"})]})]})]})}const n1={cyan:"bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",blue:"bg-accent-blue/10 text-accent-blue border-accent-blue/20",green:"bg-accent-green/10 text-accent-green border-accent-green/20",amber:"bg-accent-amber/10 text-accent-amber border-accent-amber/20",slate:"bg-dark-700 text-gray-300 border-dark-500"};function Ot({label:r,tone:n="slate"}){return d.jsx("span",{className:`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${n1[n]}`,children:r})}function i1({module:r}){return d.jsxs(Pe,{to:`/dashboard/module/${r.id}`,className:"lesson-card block h-full group",children:[d.jsxs("div",{className:"flex items-start justify-between gap-4 mb-4",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:"flex flex-wrap gap-2",children:[d.jsx(Ot,{label:r.region==="General"?"General":`${r.region} focus`,tone:"blue"}),r.difficulty&&d.jsx(Ot,{label:r.difficulty,tone:"slate"}),r.featured&&d.jsx(Ot,{label:"Flagship",tone:"green"})]}),d.jsx("h3",{className:"text-xl font-semibold text-white group-hover:text-accent-cyan transition-colors",children:r.title})]}),d.jsx(An,{className:"h-5 w-5 text-gray-500 group-hover:text-accent-cyan transition-colors"})]}),d.jsx("p",{className:"text-sm text-gray-400 leading-relaxed mb-5",children:r.description}),d.jsxs("div",{className:"flex flex-wrap gap-4 text-sm text-gray-500 mb-5",children:[d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx(RS,{className:"w-4 h-4"}),r.lessons.length," lessons"]}),r.estimatedHours&&d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx(cy,{className:"w-4 h-4"}),r.estimatedHours]})]}),r.outcomes&&r.outcomes.length>0&&d.jsx("ul",{className:"space-y-2 text-sm text-gray-300",children:r.outcomes.slice(0,2).map(n=>d.jsxs("li",{children:["• ",n]},n))})]})}function hy({eyebrow:r,title:n,description:s,align:l="left"}){return d.jsxs("div",{className:l==="center"?"text-center max-w-3xl mx-auto":"max-w-3xl",children:[r&&d.jsx("div",{className:"text-sm font-semibold uppercase tracking-[0.12em] text-accent-cyan mb-3",children:r}),d.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-3",children:n}),s&&d.jsx("p",{className:"text-gray-400 leading-relaxed",children:s})]})}const r1={completedLessons:new Set,totalXP:0,streak:0};function s1({module:r,lesson:n,index:s,isCompleted:l,isCurrent:u}){return d.jsxs(Pe,{to:`/dashboard/lesson/${r.id}/${n.id}`,className:`relative flex items-center gap-4 p-4 rounded-xl transition-all ${l?"bg-green-900/20 border border-green-700 hover:bg-green-900/30":u?"bg-accent-blue/20 border-2 border-accent-blue hover:bg-accent-blue/30":"bg-dark-700 hover:bg-dark-600"}`,children:[d.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${l?"bg-green-600":u?"bg-accent-blue":"bg-dark-500"}`,children:l?d.jsx(Ir,{className:"w-6 h-6 text-white"}):d.jsx(dt,{className:"w-6 h-6 text-white"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsxs("span",{className:"text-xs text-gray-500",children:["Lesson ",s+1]}),l&&d.jsxs("div",{className:"flex items-center gap-1 text-xs text-green-400",children:[d.jsx(uy,{className:"w-3 h-3 fill-current"}),d.jsx("span",{children:"+10 XP"})]})]}),d.jsx("h4",{className:`font-semibold ${u?"text-accent-cyan":"text-white"}`,children:n.title}),d.jsx("p",{className:"text-sm text-gray-400",children:n.duration})]}),d.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${l||u?"bg-white/10":"bg-dark-600"}`,children:d.jsx("svg",{className:"w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})}function o1(){const r=r1,n=Bt.reduce((m,b)=>m+b.lessons.length,0),s=r.completedLessons.size,l=Bt.find(m=>m.id==="us-repo"),u=Bt.filter(m=>m.id!=="us-repo"),h=l?l.lessons.filter(m=>r.completedLessons.has(`${l.id}-${m.id}`)).length:0;return d.jsxs("div",{className:"min-h-screen",children:[d.jsx("section",{className:"py-8 px-4 border-b border-dark-600 bg-dark-800/50",children:d.jsxs("div",{className:"max-w-6xl mx-auto",children:[d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-6 mb-6",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Your learning hub"}),d.jsx("p",{className:"text-gray-400",children:"Continue where you left off"})]}),d.jsxs("div",{className:"flex items-center gap-6",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(TS,{className:"w-6 h-6 text-orange-500"}),d.jsxs("div",{children:[d.jsx("div",{className:"text-2xl font-bold text-orange-500",children:r.streak}),d.jsx("div",{className:"text-xs text-gray-400",children:"Day Streak"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(uy,{className:"w-6 h-6 text-yellow-500"}),d.jsxs("div",{children:[d.jsx("div",{className:"text-2xl font-bold text-yellow-500",children:r.totalXP}),d.jsx("div",{className:"text-xs text-gray-400",children:"Total XP"})]})]})]})]}),d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_320px]",children:[d.jsxs("div",{className:"bg-dark-700 rounded-xl p-6",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx(ko,{className:"w-5 h-5 text-accent-cyan"}),d.jsx("span",{className:"font-semibold",children:"Overall Progress"})]}),d.jsxs("span",{className:"text-accent-cyan font-bold",children:[n>0?Math.round(s/n*100):0,"%"]})]}),d.jsx("div",{className:"w-full bg-dark-600 rounded-full h-3",children:d.jsx("div",{className:"bg-gradient-to-r from-accent-blue to-accent-cyan h-3 rounded-full transition-all duration-500",style:{width:`${n>0?Math.round(s/n*100):0}%`}})}),d.jsxs("div",{className:"flex items-center justify-between mt-2 text-sm text-gray-400",children:[d.jsxs("span",{children:[s," of ",n," lessons completed"]}),d.jsxs("span",{children:[n-s," remaining"]})]})]}),d.jsx(a1,{completedLessons:s,totalLessons:n,totalXP:r.totalXP,streak:r.streak})]})]})}),l&&d.jsx("section",{className:"py-10 px-4 border-b border-dark-700 bg-gradient-to-b from-dark-900 to-dark-800",children:d.jsxs("div",{className:"max-w-6xl mx-auto",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[d.jsx(Ot,{label:"Flagship path",tone:"green"}),l.difficulty&&d.jsx(Ot,{label:l.difficulty,tone:"blue"})]}),d.jsx("h2",{className:"text-2xl font-bold mb-2",children:l.title}),d.jsx("p",{className:"text-gray-400 mb-6 max-w-3xl",children:l.description}),d.jsxs("div",{className:"mb-5 flex items-center gap-4 text-sm text-gray-500",children:[d.jsxs("span",{children:[h,"/",l.lessons.length," lessons"]}),d.jsx("span",{children:l.estimatedHours})]}),d.jsx("div",{className:"w-full bg-dark-700 rounded-full h-2 mb-8",children:d.jsx("div",{className:"bg-gradient-to-r from-accent-blue to-accent-cyan h-2 rounded-full transition-all duration-500",style:{width:`${Math.round(h/l.lessons.length*100)}%`}})}),d.jsx("div",{className:"space-y-3",children:l.lessons.map((m,b)=>{const y=`${l.id}-${m.id}`,g=r.completedLessons.has(y),S=b===h;return d.jsx(s1,{module:l,lesson:m,index:b,isCompleted:g,isCurrent:S},m.id)})})]})}),d.jsx("section",{className:"py-10 px-4",children:d.jsxs("div",{className:"max-w-6xl mx-auto",children:[d.jsx(hy,{eyebrow:"Additional modules",title:"Comparative and adjacent content",description:"Supporting modules that give broader market context beyond the flagship Treasury repo path."}),d.jsx("div",{className:"grid gap-6 md:grid-cols-2 mt-8",children:u.map(m=>d.jsx(i1,{module:m},m.id))})]})}),d.jsx("section",{className:"py-12 px-4 bg-gradient-to-b from-dark-800 to-dark-900",children:d.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6",children:[d.jsx(ko,{className:"w-4 h-4"}),d.jsx("span",{children:"Recommended for You"})]}),d.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Start Your Learning Journey"}),d.jsx("p",{className:"text-gray-400 mb-8 max-w-2xl mx-auto",children:"Begin with the fundamentals of repo markets and central clearing. Each lesson builds on the previous one, so start from the top and work your way down."}),d.jsxs(Pe,{to:"/dashboard/lesson/us-repo/lesson-1",className:"inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105",children:["Start First Lesson",d.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})})]})}const Wp={"us-flow":[{id:1,label:"Quote Request",desc:"Cash lender requests quotes via email/voice/platform"},{id:2,label:"Trade Execution",desc:"Cash borrower provides quote; trade agreed"},{id:3,label:"Trade Submission",desc:"Both parties submit to FICC; must match exactly"},{id:4,label:"Matching Engine",desc:"FICC verifies instructions; matched or rejected"},{id:5,label:"Novation",desc:"Bilateral contract extinguished; two CCP contracts created"},{id:6,label:"Netting",desc:"Multilateral offsetting reduces gross obligations"},{id:7,label:"Margining",desc:"Initial and variation margin posted to FICC"},{id:8,label:"Settlement (DVP)",desc:"Delivery vs Payment through clearing bank (BNY Mellon)"}],"asia-flow":[{id:1,label:"Trade Agreement",desc:"Bilateral or platform-based trade execution"},{id:2,label:"CCP Interposition",desc:"JSCC/CCP steps in via obligation assumption (novation)"},{id:3,label:"Risk Calculation",desc:"Portfolio-based margin (VaR) calculated"},{id:4,label:"Margin Posting",desc:"Both parties post margin to CCP"},{id:5,label:"Settlement",desc:"BOJ-Net or central bank system (not private clearing bank)"}]};function l1({type:r}){const[n,s]=R.useState(null),l=Wp[r]||Wp["us-flow"];return r==="comparison"?d.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6 overflow-x-auto",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-8 min-w-[600px]",children:[d.jsxs("div",{children:[d.jsx("h4",{className:"text-accent-blue font-semibold mb-4",children:"U.S. Model"}),d.jsx("div",{className:"space-y-2",children:["Quote → Execute → Submit to FICC → Match → Novate → Net → Margin → DVP"].map((u,h)=>d.jsx("div",{className:"p-3 bg-dark-700 rounded text-sm",children:u},h))})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-accent-purple font-semibold mb-4",children:"Asia Model"}),d.jsx("div",{className:"space-y-2",children:["Trade → Novate → Risk Calc → Margin → Central Bank Settlement"].map((u,h)=>d.jsx("div",{className:"p-3 bg-dark-700 rounded text-sm",children:u},h))})]})]}),d.jsx("p",{className:"text-center text-sm text-gray-500 mt-4",children:"Key difference: U.S. has explicit matching before novation; Asia focuses on risk calculation post-novation"})]}):d.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6",children:[d.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-6",children:l.map((u,h)=>d.jsxs("div",{className:"flex items-center",children:[d.jsx("button",{onClick:()=>s(n===h?null:h),className:`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${n===h?"bg-accent-cyan text-dark-900":"bg-dark-600 text-gray-400 hover:bg-dark-500"}`,children:h+1}),h<l.length-1&&d.jsx("div",{className:"w-6 h-0.5 bg-dark-500 mx-1"})]},u.id))}),d.jsx("div",{className:"space-y-3",children:l.map((u,h)=>d.jsx("button",{onClick:()=>s(n===h?null:h),className:`w-full text-left p-4 rounded-lg transition-all ${n===h?"bg-accent-cyan/10 border border-accent-cyan":"bg-dark-700 border border-transparent hover:border-dark-500"}`,children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${n===h?"bg-accent-cyan text-dark-900":"bg-dark-600 text-gray-400"}`,children:h+1}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"font-semibold mb-1",children:u.label}),d.jsx("p",{className:`text-sm ${n===h?"text-gray-300":"text-gray-500"}`,children:u.desc})]})]})},u.id))})]})}function c1(r){return r==="internal"?pi:r==="glossary"?DS:Mo}function u1({links:r=[]}){return r.length===0?null:d.jsx("div",{className:"space-y-3",children:r.map(n=>{const s=c1(n.type),l=n.href.startsWith("http");return d.jsxs("a",{href:n.href,target:l?"_blank":void 0,rel:l?"noopener noreferrer":void 0,className:"flex items-start gap-3 rounded-lg border border-dark-600 bg-dark-800 p-4 text-sm text-gray-300 transition-colors hover:border-accent-cyan hover:text-white",children:[d.jsx(s,{className:"mt-0.5 h-4 w-4 flex-shrink-0 text-accent-cyan"}),d.jsx("span",{children:n.label})]},`${n.label}-${n.href}`)})})}function d1({content:r}){const n=r.split(`
`),s=[];let l=0;for(;l<n.length;){const u=n[l];if(u.startsWith("## "))s.push(d.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4 text-white",children:u.slice(3)},l));else if(u.startsWith("### "))s.push(d.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3 text-accent-cyan",children:u.slice(4)},l));else if(u.startsWith("- "))s.push(d.jsx("li",{className:"ml-4 mb-2 text-gray-300",children:u.slice(2)},l));else if(u.startsWith("**")&&u.endsWith("**")){const h=u.replace(/\*\*/g,"");s.push(d.jsx("p",{className:"font-semibold text-white my-4",children:h},l))}else if(u.startsWith("|")){if(u.includes("---")){l++;continue}const h=u.split("|").filter(m=>m.trim()).map(m=>m.trim());h.length>0&&s.push(d.jsx("div",{className:"overflow-x-auto my-4",children:d.jsx("div",{className:"flex gap-4 border-b border-dark-500 pb-2",children:h.map((m,b)=>d.jsx("span",{className:"font-semibold text-accent-cyan min-w-[120px]",children:m},b))})},l))}else if(u.startsWith("```")){const h=[];for(l++;l<n.length&&!n[l].startsWith("```");)h.push(n[l]),l++;s.push(d.jsx("pre",{className:"bg-dark-700 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono text-gray-300",children:h.join(`
`)},l))}else if(u.trim()){const h=/\[([^\]]+)\]\(([^)]+)\)/g,m=[...u.matchAll(h)];if(m.length>0){let b=0;const y=[];m.forEach((g,S)=>{g.index>b&&y.push(d.jsx("span",{children:u.slice(b,g.index)},`text-${S}`)),y.push(d.jsx("a",{href:g[2],target:"_blank",rel:"noopener noreferrer",className:"text-accent-cyan hover:text-white underline",children:g[1]},`link-${S}`)),b=g.index+g[0].length}),b<u.length&&y.push(d.jsx("span",{children:u.slice(b)},"text-end")),s.push(d.jsx("p",{className:"mb-4 text-gray-300 leading-relaxed",children:y},l))}else s.push(d.jsx("p",{className:"mb-4 text-gray-300 leading-relaxed",children:u},l))}l++}return d.jsx(d.Fragment,{children:s})}function f1(){var Q,L,X;const{moduleId:r,lessonId:n}=sg(),[s,l]=R.useState(!1),[u,h]=R.useState({}),[m,b]=R.useState(!1),y=Bt.find(G=>G.id===r),g=y==null?void 0:y.lessons.find(G=>G.id===n);if(R.useEffect(()=>{l(!1),h({}),b(!1),window.scrollTo(0,0)},[r,n]),!y||!g)return d.jsx("div",{className:"max-w-4xl mx-auto px-4 py-12",children:d.jsxs("div",{className:"text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Lesson Not Found"}),d.jsx(Pe,{to:"/dashboard",className:"text-accent-cyan hover:underline",children:"Return to Dashboard"})]})});const S=y.lessons.findIndex(G=>G.id===n),C=S>0?y.lessons[S-1]:null,P=S<y.lessons.length-1?y.lessons[S+1]:null,F=(G,te)=>{m||h(Y=>({...Y,[G]:te}))},H=()=>{b(!0)},z=()=>{h({}),b(!1)},U=g.quiz.reduce((G,te,Y)=>G+(u[Y]===te.correctIndex?1:0),0),B=g.quiz.length;return d.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[d.jsxs(Pe,{to:`/dashboard/module/${y.id}`,className:"inline-flex items-center gap-2 text-gray-400 hover:text-white",children:[d.jsx(ho,{className:"w-4 h-4"}),y.title]}),d.jsx("span",{className:"text-gray-600",children:"/"}),d.jsxs("span",{className:"text-gray-400",children:["Lesson ",S+1," of ",y.lessons.length]})]}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx("div",{className:"w-12 h-12 bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg flex items-center justify-center",children:d.jsx(dt,{className:"w-6 h-6 text-accent-cyan"})}),d.jsxs("div",{children:[d.jsxs("div",{className:"text-sm text-gray-400",children:["Lesson ",S+1]}),d.jsx("h1",{className:"text-2xl font-bold",children:g.title})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[d.jsxs("p",{className:"text-gray-400",children:["Duration: ",g.duration]}),g.lessonType&&d.jsx(Ot,{label:g.lessonType.replace("-"," "),tone:g.lessonType==="risk"?"amber":g.lessonType==="market-structure"?"green":g.lessonType==="mechanics"?"cyan":"blue"})]}),g.summary&&d.jsxs("div",{className:"rounded-lg border border-dark-600 bg-dark-800 p-5",children:[d.jsx("h2",{className:"text-lg font-semibold text-white mb-2",children:"Lesson Summary"}),d.jsx("p",{className:"text-gray-300 leading-relaxed",children:g.summary})]})]}),(((Q=g.learningObjectives)==null?void 0:Q.length)||((L=g.relatedTerms)==null?void 0:L.length)||((X=g.furtherReading)==null?void 0:X.length))&&d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.4fr_1fr] mb-8",children:[d.jsxs("div",{className:"rounded-lg border border-dark-600 bg-dark-800 p-6",children:[d.jsx("h2",{className:"text-lg font-semibold text-white mb-4",children:"Learning objectives"}),d.jsx("ul",{className:"space-y-3",children:(g.learningObjectives??[]).map(G=>d.jsxs("li",{className:"flex items-start gap-3 text-gray-300",children:[d.jsx(Ir,{className:"w-5 h-5 text-accent-green flex-shrink-0 mt-0.5"}),d.jsx("span",{children:G})]},G))})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"rounded-lg border border-dark-600 bg-dark-800 p-6",children:[d.jsx("h2",{className:"text-lg font-semibold text-white mb-4",children:"Related terms"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:(g.relatedTerms??[]).map(G=>d.jsx(Ot,{label:G,tone:"slate"},G))})]}),d.jsxs("div",{className:"rounded-lg border border-dark-600 bg-dark-800 p-6",children:[d.jsx("h2",{className:"text-lg font-semibold text-white mb-4",children:"Further reading"}),d.jsx(u1,{links:g.furtherReading})]})]})]}),d.jsx("div",{className:"prose prose-invert max-w-none mb-8",children:d.jsx(d1,{content:g.content})}),g.hasDiagram&&g.diagramType&&d.jsxs("div",{className:"mb-8",children:[d.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Flow Diagram"}),d.jsx(l1,{type:g.diagramType})]}),d.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6 mb-8",children:[d.jsx("h3",{className:"text-lg font-semibold mb-4 text-accent-cyan",children:"Key Takeaways"}),d.jsx("ul",{className:"space-y-2",children:g.keyPoints.map((G,te)=>d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx(Ir,{className:"w-5 h-5 text-accent-green flex-shrink-0 mt-0.5"}),d.jsx("span",{className:"text-gray-300",children:G})]},te))})]}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("button",{onClick:()=>l(!s),className:"w-full py-4 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2",children:[s?"Hide Quiz":"Take Quiz",s?d.jsx(ho,{className:"w-4 h-4"}):d.jsx(An,{className:"w-4 h-4"})]}),s&&d.jsxs("div",{className:"mt-6 space-y-6",children:[m&&d.jsx("div",{className:`p-4 rounded-lg ${U===B?"bg-accent-green/20 border border-accent-green":"bg-accent-amber/20 border border-accent-amber"}`,children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("span",{className:"text-lg font-semibold",children:["Score: ",U,"/",B]}),d.jsxs("button",{onClick:z,className:"flex items-center gap-2 px-4 py-2 bg-dark-600 hover:bg-dark-500 rounded-lg transition-colors",children:[d.jsx(BS,{className:"w-4 h-4"}),"Retry"]})]})}),g.quiz.map((G,te)=>d.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6",children:[d.jsxs("h4",{className:"font-semibold mb-4",children:["Question ",te+1,": ",G.question]}),d.jsx("div",{className:"space-y-2",children:G.options.map((Y,ke)=>{const Ge=u[te]===ke,ft=ke===G.correctIndex,nt=m;let Oe="quiz-option";return nt?ft?Oe+=" correct":Ge&&!ft&&(Oe+=" incorrect"):Ge&&(Oe+=" selected"),d.jsx("button",{onClick:()=>F(te,ke),className:Oe,disabled:m,children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsxs("span",{className:"font-mono text-accent-cyan",children:[String.fromCharCode(65+ke),"."]}),d.jsx("span",{children:Y})]})},ke)})}),m&&d.jsx("div",{className:`mt-4 p-3 rounded-lg ${u[te]===G.correctIndex?"bg-accent-green/10":"bg-accent-red/10"}`,children:d.jsxs("p",{className:"text-sm",children:[d.jsx("span",{className:"font-semibold",children:"Explanation: "}),G.explanation]})})]},te)),!m&&d.jsx("button",{onClick:H,disabled:Object.keys(u).length<g.quiz.length,className:"w-full py-3 bg-accent-green hover:bg-accent-green/90 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:"Submit Answers"})]})]}),d.jsxs("div",{className:"flex items-center justify-between pt-6 border-t border-dark-600",children:[C?d.jsxs(Pe,{to:`/dashboard/lesson/${y.id}/${C.id}`,className:"inline-flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors",children:[d.jsx(ho,{className:"w-4 h-4"}),d.jsxs("span",{className:"hidden sm:inline",children:["Previous: ",C.title]}),d.jsx("span",{className:"sm:hidden",children:"Previous"})]}):d.jsx("div",{}),P?d.jsxs(Pe,{to:`/dashboard/lesson/${y.id}/${P.id}`,className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-accent-cyan rounded-lg transition-colors",children:[d.jsxs("span",{className:"hidden sm:inline",children:["Next: ",P.title]}),d.jsx("span",{className:"sm:hidden",children:"Next"}),d.jsx(An,{className:"w-4 h-4"})]}):d.jsxs(Pe,{to:y.id==="us-repo"?"/dashboard/module/asia-repo":"/dashboard/quiz",className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-green hover:bg-accent-green/90 rounded-lg transition-colors",children:[y.id==="us-repo"?"Start Asia Module":"Take Final Quiz",d.jsx(An,{className:"w-4 h-4"})]})]})]})}const h1={concept:"blue",mechanics:"cyan","market-structure":"green",risk:"amber"};function m1({lesson:r,index:n}){return d.jsxs("div",{className:"lesson-card h-full",children:[d.jsxs("div",{className:"flex items-start justify-between gap-4 mb-4",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["Lesson ",n+1]}),d.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:r.title})]}),r.lessonType&&d.jsx(Ot,{label:r.lessonType.replace("-"," "),tone:h1[r.lessonType]})]}),d.jsx("p",{className:"text-sm text-gray-400 leading-relaxed mb-4",children:r.summary??r.keyPoints[0]}),d.jsxs("div",{className:"flex flex-wrap gap-4 text-sm text-gray-500 mb-4",children:[d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx(cy,{className:"w-4 h-4"}),r.duration]}),d.jsxs("span",{children:[r.quiz.length," questions"]})]}),d.jsx("ul",{className:"space-y-2",children:(r.learningObjectives??[]).slice(0,2).map(s=>d.jsxs("li",{className:"flex items-start gap-2 text-sm text-gray-300",children:[d.jsx(oy,{className:"mt-0.5 h-4 w-4 flex-shrink-0 text-accent-green"}),d.jsx("span",{children:s})]},s))})]})}function p1(){const{moduleId:r}=sg(),n=Bt.find(s=>s.id===r);return n?d.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[d.jsxs(Pe,{to:"/dashboard",className:"inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6",children:[d.jsx(ho,{className:"w-4 h-4"}),"Back to Dashboard"]}),d.jsxs("div",{className:"mb-10",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[d.jsx(Ot,{label:n.region==="General"?"General":`${n.region} focus`,tone:"blue"}),n.difficulty&&d.jsx(Ot,{label:n.difficulty,tone:"slate"}),n.featured&&d.jsx(Ot,{label:"Flagship",tone:"green"})]}),d.jsx("h1",{className:"text-3xl font-bold mb-3",children:n.title}),d.jsx("p",{className:"text-gray-400 text-lg mb-6 leading-relaxed max-w-3xl",children:n.description}),d.jsxs("div",{className:"flex flex-wrap gap-6 text-sm text-gray-500 mb-6",children:[n.estimatedHours&&d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx(kS,{className:"w-4 h-4"}),n.estimatedHours]}),d.jsxs("span",{children:[n.lessons.length," lessons"]}),n.audience&&d.jsx("span",{children:n.audience})]}),n.prerequisites&&n.prerequisites.length>0&&d.jsxs("div",{className:"mb-6",children:[d.jsx("div",{className:"text-sm font-semibold text-gray-400 mb-2",children:"Prerequisites"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:n.prerequisites.map(s=>d.jsx(Ot,{label:s,tone:"slate"},s))})]}),n.outcomes&&n.outcomes.length>0&&d.jsxs("div",{className:"rounded-lg border border-dark-600 bg-dark-800/80 p-5",children:[d.jsxs("div",{className:"flex items-center gap-2 text-accent-cyan font-semibold mb-4",children:[d.jsx(ko,{className:"w-5 h-5"}),d.jsx("span",{children:"By the end of this course you will be able to"})]}),d.jsx("ul",{className:"space-y-3",children:n.outcomes.map(s=>d.jsxs("li",{className:"flex items-start gap-3 text-gray-300",children:[d.jsx("span",{className:"mt-1.5 h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0"}),d.jsx("span",{children:s})]},s))})]})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsx(hy,{eyebrow:"Curriculum",title:"Lessons",description:"Each lesson builds toward the module outcomes."}),d.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:n.lessons.map((s,l)=>d.jsx(Pe,{to:`/dashboard/lesson/${n.id}/${s.id}`,className:"group",children:d.jsx(m1,{lesson:s,index:l})},s.id))})]})]}):d.jsx("div",{className:"max-w-4xl mx-auto px-4 py-12",children:d.jsxs("div",{className:"text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Module Not Found"}),d.jsx(Pe,{to:"/",className:"text-accent-cyan hover:underline",children:"Return to Home"})]})})}const g1=[{category:"Structure",us:"Single CCP (FICC) - monopoly model",asia:"Multiple CCPs across jurisdictions (fragmented)",winner:"Depends on priority: US=efficiency, Asia=resilience"},{category:"Clearing Bank",us:"Single (BNY Mellon) - concentration risk",asia:"Multiple, jurisdiction-specific banks",winner:"Asia - no single point of failure"},{category:"Settlement System",us:"Fedwire / Private clearing bank (BNY Mellon)",asia:"Central bank systems (BOJ-Net, MAS, HKMA)",winner:"Asia - direct central bank settlement"},{category:"Market Depth",us:">$5 trillion daily (deepest globally)",asia:"Varies: Japan deep, others smaller markets",winner:"US - unmatched liquidity"},{category:"Currency",us:"USD (global reserve currency)",asia:"JPY, SGD, HKD, KRW (local currencies)",winner:"US - reserve status creates global demand"},{category:"Repo Rates",us:"SOFR-linked, typically positive",asia:"JGB repo can be deeply negative (safe haven)",winner:"Different dynamics - Asia has deflationary episodes"},{category:"Cross-Border",us:"Limited due to single market focus",asia:"Complex: Connect programs, multiple FX regimes",winner:"US - simpler, Asia has growth potential"},{category:"Default Management",us:"Standardized FICC waterfall",asia:"Varied: JSCC, CDP, HKSCC each have own rules",winner:"US - consistency, Asia - competition/innovation"},{category:"Regulatory",us:"Unified SEC/CFTC oversight",asia:"Fragmented across jurisdictions (JFSA, MAS, HKMA)",winner:"US - unified, Asia - tailored to local needs"},{category:"Systemic Risk",us:"Concentrated in FICC and BNY Mellon",asia:"Distributed across multiple CCPs/clearing banks",winner:"Asia - diversification advantage"}];function y1(){return d.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsxs("h1",{className:"text-3xl font-bold mb-4 flex items-center justify-center gap-3",children:[d.jsx(vS,{className:"w-8 h-8 text-accent-cyan"}),"U.S. vs. Asia-Pacific Comparison"]}),d.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"Compare the single-CCP U.S. model with the fragmented but resilient Asian multi-CCP landscape."})]}),d.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-12",children:[d.jsxs("div",{className:"lesson-card border-accent-blue/30",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx(xS,{className:"w-6 h-6 text-accent-blue"}),d.jsx("h2",{className:"text-xl font-bold text-accent-blue",children:"United States Model"})]}),d.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"A concentrated, efficient model with FICC as the sole Treasury repo CCP and BNY Mellon as the sole clearing bank. Maximizes standardization and liquidity but creates single points of failure."}),d.jsxs("div",{className:"text-sm",children:[d.jsx("span",{className:"text-accent-green font-medium",children:"Pros: "}),d.jsx("span",{className:"text-gray-500",children:"Efficiency, standardization, deep liquidity"})]}),d.jsxs("div",{className:"text-sm mt-1",children:[d.jsx("span",{className:"text-accent-red font-medium",children:"Cons: "}),d.jsx("span",{className:"text-gray-500",children:"Concentration risk, moral hazard"})]})]}),d.jsxs("div",{className:"lesson-card border-accent-purple/30",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx(Co,{className:"w-6 h-6 text-accent-purple"}),d.jsx("h2",{className:"text-xl font-bold text-accent-purple",children:"Asia-Pacific Model"})]}),d.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"A fragmented but resilient model with multiple CCPs (JSCC, CDP, HKSCC) across jurisdictions. Provides redundancy and competition but creates cross-border complexity."}),d.jsxs("div",{className:"text-sm",children:[d.jsx("span",{className:"text-accent-green font-medium",children:"Pros: "}),d.jsx("span",{className:"text-gray-500",children:"Resilience, competition, redundancy"})]}),d.jsxs("div",{className:"text-sm mt-1",children:[d.jsx("span",{className:"text-accent-red font-medium",children:"Cons: "}),d.jsx("span",{className:"text-gray-500",children:"Fragmentation, higher costs, complexity"})]})]})]}),d.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg overflow-hidden",children:[d.jsx("div",{className:"p-4 bg-dark-700 border-b border-dark-600",children:d.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[d.jsx(ku,{className:"w-5 h-5 text-accent-cyan"}),"Detailed Comparison"]})}),d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full",children:[d.jsx("thead",{children:d.jsxs("tr",{className:"bg-dark-700",children:[d.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-gray-300",children:"Category"}),d.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-accent-blue",children:"U.S."}),d.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-accent-purple",children:"Asia-Pacific"}),d.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-gray-300",children:"Assessment"})]})}),d.jsx("tbody",{children:g1.map(r=>d.jsxs("tr",{className:"border-t border-dark-600 hover:bg-dark-700/50",children:[d.jsx("td",{className:"py-3 px-4 font-medium text-gray-300",children:r.category}),d.jsx("td",{className:"py-3 px-4 text-sm text-gray-400",children:r.us}),d.jsx("td",{className:"py-3 px-4 text-sm text-gray-400",children:r.asia}),d.jsx("td",{className:"py-3 px-4 text-sm",children:d.jsx("span",{className:`px-2 py-1 rounded text-xs ${r.winner.startsWith("US")?"bg-accent-blue/20 text-accent-blue":r.winner.startsWith("Asia")?"bg-accent-purple/20 text-accent-purple":"bg-accent-amber/20 text-accent-amber"}`,children:r.winner})})]},r.category))})]})})]}),d.jsx("div",{className:"mt-12 grid md:grid-cols-2 gap-6",children:Bt.map(r=>d.jsxs(Pe,{to:`/dashboard/module/${r.id}`,className:"lesson-card group",children:[d.jsxs("div",{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${r.region==="US"?"bg-accent-blue/20 text-accent-blue":"bg-accent-purple/20 text-accent-purple"}`,children:[r.region," Markets"]}),d.jsx("h3",{className:"text-lg font-semibold group-hover:text-accent-cyan transition-colors mb-2",children:r.title}),d.jsx("p",{className:"text-sm text-gray-400 mb-3",children:r.description}),d.jsxs("div",{className:"text-sm text-accent-cyan",children:["Explore ",r.lessons.length," lessons →"]})]},r.id))})]})}function b1(){const[r,n]=R.useState("setup"),[s,l]=R.useState("all"),[u,h]=R.useState([]),[m,b]=R.useState(0),[y,g]=R.useState({}),[S,C]=R.useState(!1);R.useEffect(()=>{const L=[];Bt.forEach(X=>{X.lessons.forEach(G=>{G.quiz.forEach((te,Y)=>{L.push({...te,moduleId:X.id,moduleTitle:X.title,lessonId:G.id,lessonTitle:G.title,id:`${X.id}-${G.id}-${Y}`})})})}),h(L)},[]);const P=s==="all"?u:u.filter(L=>L.moduleId===s),F=()=>{const L=[...P].sort(()=>Math.random()-.5).slice(0,10);h(L),n("quiz"),b(0),g({}),C(!1)},H=L=>{y[m]===void 0&&(g(X=>({...X,[m]:L})),C(!0))},z=()=>{m<u.length-1?(b(L=>L+1),C(!1)):n("results")},U=Object.entries(y).reduce((L,[X,G])=>L+(G===u[Number(X)].correctIndex?1:0),0);if(r==="setup")return d.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-12",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx(ly,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),d.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Knowledge Check"}),d.jsx("p",{className:"text-gray-400",children:"Test your understanding of repo markets and CCPs"})]}),d.jsxs("div",{className:"lesson-card",children:[d.jsx("label",{className:"block text-sm font-medium mb-3",children:"Select Content"}),d.jsxs("select",{value:s,onChange:L=>l(L.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg px-4 py-3 text-white mb-6",children:[d.jsxs("option",{value:"all",children:["All Modules (",u.length," questions)"]}),Bt.map(L=>{const X=u.filter(G=>G.moduleId===L.id).length;return d.jsxs("option",{value:L.id,children:[L.title," (",X," questions)"]},L.id)})]}),d.jsx("button",{onClick:F,className:"w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all",children:"Start Quiz (10 random questions)"})]})]});if(r==="results"){const L=Math.round(U/u.length*100);return d.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-12",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx(dy,{className:`w-16 h-16 mx-auto mb-4 ${L>=80?"text-accent-green":L>=60?"text-accent-amber":"text-accent-red"}`}),d.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Quiz Complete!"}),d.jsxs("p",{className:"text-4xl font-bold text-accent-cyan mb-2",children:[U,"/",u.length]}),d.jsxs("p",{className:`text-lg ${L>=80?"text-accent-green":L>=60?"text-accent-amber":"text-accent-red"}`,children:[L,"% correct"]})]}),d.jsxs("div",{className:"lesson-card mb-6",children:[d.jsx("h3",{className:"font-semibold mb-4",children:"Performance Summary"}),d.jsx("div",{className:"space-y-3",children:u.map((X,G)=>{const te=y[G]===X.correctIndex;return d.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg ${te?"bg-accent-green/10":"bg-accent-red/10"}`,children:[te?d.jsx(Ir,{className:"w-5 h-5 text-accent-green"}):d.jsx(Hp,{className:"w-5 h-5 text-accent-red"}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("p",{className:"text-sm truncate",children:X.question}),d.jsxs("p",{className:"text-xs text-gray-500",children:[X.moduleTitle," • ",X.lessonTitle]})]})]},G)})})]}),d.jsxs("button",{onClick:()=>n("setup"),className:"w-full py-3 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2",children:[d.jsx(OS,{className:"w-4 h-4"}),"Take Another Quiz"]})]})}const B=u[m],Q=y[m]!==void 0;return d.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsxs("span",{className:"text-sm text-gray-400",children:["Question ",m+1," of ",u.length]}),d.jsx("div",{className:"flex items-center gap-2",children:d.jsx("div",{className:"w-32 h-2 bg-dark-600 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-accent-cyan transition-all",style:{width:`${(m+1)/u.length*100}%`}})})})]}),d.jsxs("div",{className:"lesson-card mb-6",children:[d.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[B.moduleTitle," • ",B.lessonTitle]}),d.jsx("h2",{className:"text-xl font-semibold mb-6",children:B.question}),d.jsx("div",{className:"space-y-3",children:B.options.map((L,X)=>{const G=y[m]===X,te=X===B.correctIndex;let Y="quiz-option";return Q?te?Y+=" correct":G&&(Y+=" incorrect"):G&&(Y+=" selected"),d.jsx("button",{onClick:()=>H(X),className:Y,disabled:Q,children:d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"w-8 h-8 rounded-lg bg-dark-600 flex items-center justify-center font-mono text-sm",children:String.fromCharCode(65+X)}),d.jsx("span",{children:L})]})},X)})}),S&&d.jsxs("div",{className:`mt-6 p-4 rounded-lg ${y[m]===B.correctIndex?"bg-accent-green/10 border border-accent-green/30":"bg-accent-amber/10 border border-accent-amber/30"}`,children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[y[m]===B.correctIndex?d.jsx(Ir,{className:"w-5 h-5 text-accent-green"}):d.jsx(Hp,{className:"w-5 h-5 text-accent-red"}),d.jsx("span",{className:"font-semibold",children:y[m]===B.correctIndex?"Correct!":"Incorrect"})]}),d.jsx("p",{className:"text-sm text-gray-300",children:B.explanation})]})]}),Q&&d.jsx("button",{onClick:z,className:"w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all",children:m<u.length-1?"Next Question":"See Results"})]})}const v1=["All",...Array.from(new Set(fy.map(r=>r.category)))];function x1(){const[r,n]=R.useState(""),[s,l]=R.useState("All"),u=fy.filter(b=>{const y=b.term.toLowerCase().includes(r.toLowerCase())||b.definition.toLowerCase().includes(r.toLowerCase()),g=s==="All"||b.category===s;return y&&g}),h=u.reduce((b,y)=>{const g=y.term[0].toUpperCase();return b[g]||(b[g]=[]),b[g].push(y),b},{}),m=Object.keys(h).sort();return d.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx(dt,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),d.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Glossary"}),d.jsx("p",{className:"text-gray-400",children:"Key terms and definitions for repo markets and CCPs"})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[d.jsxs("div",{className:"relative flex-1",children:[d.jsx(LS,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"}),d.jsx("input",{type:"text",placeholder:"Search terms...",value:r,onChange:b=>n(b.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500"})]}),d.jsxs("div",{className:"relative sm:w-48",children:[d.jsx(SS,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"}),d.jsx("select",{value:s,onChange:b=>l(b.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white appearance-none",children:v1.map(b=>d.jsx("option",{value:b,children:b},b))})]})]}),d.jsx("div",{className:"space-y-8",children:m.map(b=>d.jsxs("div",{children:[d.jsx("h2",{className:"text-3xl font-bold text-accent-cyan mb-4 sticky top-20 bg-dark-900 py-2",children:b}),d.jsx("div",{className:"space-y-4",children:h[b].map(y=>d.jsxs("div",{className:"lesson-card",children:[d.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[d.jsx("h3",{className:"text-lg font-semibold text-white",children:y.term}),d.jsx("span",{className:"text-xs px-2 py-1 bg-dark-600 rounded text-gray-400 whitespace-nowrap",children:y.category})]}),d.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:y.definition})]},y.term))})]},b))}),u.length===0&&d.jsx("div",{className:"text-center py-12 text-gray-500",children:"No terms found matching your search."})]})}const w1={"Industry Guide":dt,"Regulatory Standard":pi,"Official Website":Co,"Academic Paper":pi,"Official Documentation":dt,"Regulatory Disclosure":pi,"Research Paper":pi,"Industry Report":dt};function C1(){return d.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx(dt,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),d.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Sources & References"}),d.jsx("p",{className:"text-gray-400",children:"Academic papers, industry guides, and official documentation"})]}),d.jsx("div",{className:"space-y-4",children:e1.map((r,n)=>{const s=w1[r.type]||dt;return d.jsxs("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"lesson-card group flex items-start gap-4",children:[d.jsx("div",{className:"w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0",children:d.jsx(s,{className:"w-5 h-5 text-accent-cyan"})}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-start justify-between gap-4",children:[d.jsx("h3",{className:"font-semibold group-hover:text-accent-cyan transition-colors",children:r.title}),d.jsx(Mo,{className:"w-4 h-4 text-gray-500 group-hover:text-accent-cyan transition-colors flex-shrink-0"})]}),d.jsx("p",{className:"text-sm text-gray-400 mb-2",children:r.author}),d.jsx("p",{className:"text-sm text-gray-500 mb-2",children:r.description}),d.jsx("div",{className:"flex items-center gap-2",children:d.jsx("span",{className:"text-xs px-2 py-1 bg-dark-600 rounded text-gray-400",children:r.type})})]})]},n)})}),d.jsxs("div",{className:"mt-12 p-6 bg-dark-800 border border-dark-600 rounded-lg",children:[d.jsx("h3",{className:"font-semibold mb-3",children:"Additional Resources"}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[d.jsx("li",{children:"• DTCC/FICC official disclosures and rulebooks"}),d.jsx("li",{children:"• BIS Committee on Payments and Market Infrastructures (CPMI) reports"}),d.jsx("li",{children:"• Federal Reserve Bank of New York repo market primers"}),d.jsx("li",{children:"• JPX/JSCC clearing documentation"}),d.jsx("li",{children:"• SGX and HKEX clearing disclosures"})]})]})]})}const k1={id:"root",label:"Global Finance",description:"Understanding the interconnected world of financial systems, markets, and institutions",children:[{id:"money-markets",label:"Money Markets",description:"Short-term debt markets, liquidity, and funding",children:[{id:"repo",label:"Repurchase Agreements (Repo)",description:"Collateralized short-term lending",relatedLessons:["us-repo/lesson-1","asia-repo/lesson-1"],externalLinks:[{title:"ICMA Repo FAQ",url:"https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/",source:"ICMA"},{title:"Fed Tri-Party Reform",url:"https://www.newyorkfed.org/banking/tpr_infr_reform.html",source:"Federal Reserve"}]},{id:"commercial-paper",label:"Commercial Paper",description:"Short-term corporate debt instruments"},{id:"treasury-bills",label:"Treasury Bills",description:"Government short-term securities"},{id:"certificates-deposit",label:"Certificates of Deposit",description:"Bank-issued time deposits"}]},{id:"central-banking",label:"Central Banking",description:"Monetary policy, interest rates, and financial stability",children:[{id:"monetary-policy",label:"Monetary Policy",description:"Central bank actions to influence economic conditions",children:[{id:"federal-funds-rate",label:"Federal Funds Rate",description:"US overnight interbank lending rate",relatedLessons:["us-repo/lesson-7"],externalLinks:[{title:"Fed Explained: Monetary Policy",url:"https://www.federalreserve.gov/aboutthefed/fedexplained/monetary-policy.htm",source:"Federal Reserve"},{title:"St. Louis Fed: Policy Implementation",url:"https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy",source:"St. Louis Fed"}]},{id:"quantitative-easing",label:"Quantitative Easing",description:"Large-scale asset purchases by central banks"},{id:"interest-on-reserves",label:"Interest on Reserves",description:"Paying interest on bank reserves held at central bank",externalLinks:[{title:"Fed Policy Tools",url:"https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy",source:"St. Louis Fed"}]}]},{id:"central-banks",label:"Major Central Banks",description:"Key global monetary authorities",children:[{id:"federal-reserve",label:"Federal Reserve (US)",description:"US central bank"},{id:"ecb",label:"European Central Bank",description:"Eurozone monetary authority"},{id:"bank-of-england",label:"Bank of England",description:"UK central bank"},{id:"bank-of-japan",label:"Bank of Japan",description:"Japanese monetary authority"},{id:"pbc",label:"People's Bank of China",description:"Chinese central bank"}]},{id:"lender-last-resort",label:"Lender of Last Resort",description:"Central bank role in providing emergency liquidity"}]},{id:"derivatives",label:"Derivatives",description:"Financial contracts deriving value from underlying assets",children:[{id:"interest-rate-derivatives",label:"Interest Rate Derivatives",description:"Swaps, futures, options on interest rates",externalLinks:[{title:"IGC Working Paper on Derivatives",url:"https://www.theigc.org/sites/default/files/2015/02/Sundaram-2012-Working-Paper.pdf",source:"IGC"},{title:"IMF on Derivatives",url:"https://www.elibrary.imf.org/display/book/9781589062917/ch04.xml",source:"IMF"}]},{id:"fx-derivatives",label:"FX Derivatives",description:"Currency forwards, swaps, options"},{id:"credit-derivatives",label:"Credit Derivatives",description:"CDS, total return swaps, credit-linked notes"},{id:"equity-derivatives",label:"Equity Derivatives",description:"Stock options, futures, swaps"}]},{id:"ccps",label:"Central Counterparties",description:"Clearing houses that guarantee trades",children:[{id:"ccp-functions",label:"CCP Functions",description:"Novation, netting, margining, default management",externalLinks:[{title:"Clearing Houses Explained",url:"https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/",source:"Futures Trading Pedia"}]},{id:"us-ccps",label:"US CCPs",description:"DTCC, CME, ICE, OCC",relatedLessons:["us-repo/lesson-3","us-repo/lesson-4"]},{id:"asia-ccps",label:"Asia CCPs",description:"JSCC, CDP, HKSCC, KSD",relatedLessons:["asia-repo/lesson-2","asia-repo/lesson-3"]},{id:"ccp-risk",label:"CCP Risk Management",description:"Default waterfalls, stress testing, recovery/resolution",externalLinks:[{title:"BIS WP 1052: Multi-CCP Risk",url:"https://www.bis.org/publ/work1052.htm",source:"BIS"}]}]},{id:"systemic-risk",label:"Systemic Risk",description:"Risks to the entire financial system",children:[{id:"contagion",label:"Financial Contagion",description:"Transmission of distress across institutions",externalLinks:[{title:"BIS WP 597: Bank Networks",url:"https://www.bis.org/publ/work597.pdf",source:"BIS"},{title:"ECB on Contagion",url:"https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2929~19cda4a673.en.pdf",source:"ECB"},{title:"OFR on Financial Networks",url:"https://www.financialresearch.gov/working-papers/files/OFRwp-2015-21_Contagion-in-Financial-Networks.pdf",source:"OFR"}]},{id:"financial-crises",label:"Financial Crises",description:"Historical crisis patterns and lessons",children:[{id:"2008-crisis",label:"2008 Global Financial Crisis",description:"Housing bubble, Lehman, repo market seize"},{id:"covid-crisis",label:"2020 COVID Crisis",description:"Flight to quality, central bank intervention"},{id:"asian-crisis",label:"1997 Asian Financial Crisis",description:"Currency attacks, IMF interventions"}]},{id:"too-big-fail",label:"Too Big to Fail",description:"Systemically important institutions",externalLinks:[{title:"IMF on CCP Resolution",url:"https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf",source:"IMF"}]}]},{id:"global-finance",label:"Global Finance",description:"International capital flows and exchange",children:[{id:"capital-flows",label:"International Capital Flows",description:"Cross-border investment and financing",externalLinks:[{title:"EconLib: International Capital Flows",url:"https://www.econlib.org/library/Enc/InternationalCapitalFlows.html",source:"EconLib"},{title:"Fed on Capital Flows",url:"https://www.federalreserve.gov/econres/notes/feds-notes/globalization-and-the-geography-of-capital-flows-20190906.html",source:"Federal Reserve"}]},{id:"balance-payments",label:"Balance of Payments",description:"Record of all economic transactions between countries",externalLinks:[{title:"Financial Edge: BoP Guide",url:"https://www.fe.training/free-resources/financial-markets/global-economics-balance-of-payments/",source:"Financial Edge"}]},{id:"exchange-rates",label:"Exchange Rates",description:"FX markets and currency valuation"},{id:"sovereign-debt",label:"Sovereign Debt",description:"Government borrowing and debt management"}]},{id:"regulation",label:"Financial Regulation",description:"Rules governing financial institutions and markets",children:[{id:"pfmi",label:"PFMI Standards",description:"Principles for Financial Market Infrastructures",externalLinks:[{title:"CPMI-IOSCO PFMI",url:"https://www.bis.org/cpmi/publ/d101.htm",source:"BIS"}]},{id:"dodd-frank",label:"Dodd-Frank Act",description:"US financial reform legislation"},{id:"basel-iii",label:"Basel III",description:"Global banking capital standards"},{id:"emir",label:"EMIR",description:"EU derivatives regulation"}]}]};function my({node:r,depth:n=0,onNodeClick:s}){const[l,u]=R.useState(n<1),h=r.children&&r.children.length>0;return d.jsxs("div",{className:"mb-2",children:[d.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all hover:bg-dark-700 ${n===0?"bg-dark-800 border border-dark-600":""}`,style:{marginLeft:`${n*16}px`},onClick:()=>{h&&u(!l),s==null||s(r)},children:[h?l?d.jsx(wS,{className:"w-4 h-4 text-gray-400"}):d.jsx(CS,{className:"w-4 h-4 text-gray-400"}):d.jsx(Gp,{className:"w-4 h-4 text-gray-600"}),r.completed?d.jsx(oy,{className:"w-4 h-4 text-green-500"}):d.jsx(Gp,{className:"w-4 h-4 text-gray-600"}),d.jsx("span",{className:`font-medium ${n===0?"text-white":n===1?"text-accent-cyan":"text-gray-300"}`,children:r.label}),r.relatedLessons&&r.relatedLessons.length>0&&d.jsx("span",{title:"Related lessons available",children:d.jsx(dt,{className:"w-4 h-4 text-accent-blue ml-auto"})})]}),r.description&&l&&d.jsx("div",{className:"ml-6 mt-1 mb-2 text-sm text-gray-400",style:{marginLeft:`${(n+1)*16}px`},children:r.description}),r.externalLinks&&l&&r.externalLinks.length>0&&d.jsx("div",{className:"ml-6 mb-2 space-y-1",style:{marginLeft:`${(n+1)*16}px`},children:r.externalLinks.map((m,b)=>d.jsxs("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-accent-cyan hover:text-white transition-colors",children:[d.jsx(Mo,{className:"w-3 h-3"}),d.jsx("span",{children:m.title}),d.jsxs("span",{className:"text-xs text-gray-500",children:["(",m.source,")"]})]},b))}),l&&h&&d.jsx("div",{className:"mt-1",children:r.children.map(m=>d.jsx(my,{node:m,depth:n+1,onNodeClick:s},m.id))})]})}function S1(){const[r,n]=R.useState(null);return d.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-12",children:[d.jsxs("div",{className:"mb-8",children:[d.jsx("h1",{className:"text-3xl font-bold mb-4 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent",children:"Finance Concept Hierarchy"}),d.jsx("p",{className:"text-gray-400 max-w-2xl",children:"Explore the interconnected world of finance. Click on concepts to expand their hierarchy, discover related lessons, and access curated external resources."})]}),d.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[d.jsx("div",{className:"lg:col-span-2",children:d.jsx("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6",children:d.jsx(my,{node:k1,onNodeClick:n})})}),d.jsxs("div",{className:"lg:col-span-1",children:[r&&d.jsxs("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20",children:[d.jsx("h2",{className:"text-xl font-semibold mb-4 text-white",children:r.label}),r.description&&d.jsx("p",{className:"text-gray-400 mb-4",children:r.description}),r.externalLinks&&r.externalLinks.length>0&&d.jsxs("div",{className:"mb-4",children:[d.jsx("h3",{className:"text-sm font-semibold text-accent-cyan mb-3",children:"External Resources"}),d.jsx("div",{className:"space-y-2",children:r.externalLinks.map((s,l)=>d.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"block p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsx(Mo,{className:"w-4 h-4 text-accent-cyan"}),d.jsx("span",{className:"font-medium text-sm text-white",children:s.title})]}),d.jsxs("span",{className:"text-xs text-gray-500",children:["Source: ",s.source]})]},l))})]}),r.relatedLessons&&r.relatedLessons.length>0&&d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-semibold text-accent-cyan mb-3",children:"Related Lessons"}),d.jsx("div",{className:"space-y-2",children:r.relatedLessons.map((s,l)=>d.jsx("div",{className:"p-3 bg-dark-700 rounded-lg",children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(dt,{className:"w-4 h-4 text-accent-blue"}),d.jsx("span",{className:"text-sm text-gray-300",children:s})]})},l))})]})]}),!r&&d.jsx("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20",children:d.jsx("p",{className:"text-gray-400 text-sm",children:"Click on a concept in the tree to see its details, external resources, and related lessons."})})]})]})]})}function Qa({children:r}){const{user:n,loading:s}=ry();return s?d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-dark-900",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"w-12 h-12 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"}),d.jsx("p",{className:"text-gray-400",children:"Loading..."})]})}):n?d.jsx(d.Fragment,{children:r}):d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-dark-900",children:d.jsxs("div",{className:"text-center max-w-md px-4",children:[d.jsx("div",{className:"w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx(IS,{className:"w-8 h-8 text-accent-cyan"})}),d.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Sign In Required"}),d.jsx("p",{className:"text-gray-400 mb-6",children:"Please sign in with your Google account to access this content."}),d.jsx(V0,{to:"/",replace:!0})]})})}function T1(){return d.jsxs(Y0,{children:[d.jsx(Ut,{path:"/",element:d.jsx(t1,{})}),d.jsxs(Ut,{path:"/dashboard",element:d.jsx(VS,{}),children:[d.jsx(Ut,{index:!0,element:d.jsx(Qa,{children:d.jsx(o1,{})})}),d.jsx(Ut,{path:"module/:moduleId",element:d.jsx(Qa,{children:d.jsx(p1,{})})}),d.jsx(Ut,{path:"lesson/:moduleId/:lessonId",element:d.jsx(Qa,{children:d.jsx(f1,{})})}),d.jsx(Ut,{path:"compare",element:d.jsx(Qa,{children:d.jsx(y1,{})})}),d.jsx(Ut,{path:"quiz",element:d.jsx(Qa,{children:d.jsx(b1,{})})}),d.jsx(Ut,{path:"glossary",element:d.jsx(Qa,{children:d.jsx(x1,{})})}),d.jsx(Ut,{path:"sources",element:d.jsx(Qa,{children:d.jsx(C1,{})})}),d.jsx(Ut,{path:"concepts",element:d.jsx(Qa,{children:d.jsx(S1,{})})})]})]})}$v.createRoot(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(bx,{children:d.jsx(pS,{children:d.jsx(T1,{})})})}));
