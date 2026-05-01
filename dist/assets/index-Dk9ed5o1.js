(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function f(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(h){if(h.ep)return;h.ep=!0;const m=f(h);fetch(h.href,m)}})();var Uo={exports:{}},Oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function Sg(){if(lh)return Oi;lh=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(o,h,m){var b=null;if(m!==void 0&&(b=""+m),h.key!==void 0&&(b=""+h.key),"key"in h){m={};for(var w in h)w!=="key"&&(m[w]=h[w])}else m=h;return h=m.ref,{$$typeof:s,type:o,key:b,ref:h!==void 0?h:null,props:m}}return Oi.Fragment=u,Oi.jsx=f,Oi.jsxs=f,Oi}var oh;function kg(){return oh||(oh=1,Uo.exports=Sg()),Uo.exports}var c=kg(),qo={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function Tg(){if(ch)return ee;ch=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),U=Symbol.iterator;function J(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,_={};function q(x,B,L){this.props=x,this.context=B,this.refs=_,this.updater=L||Q}q.prototype.isReactComponent={},q.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function G(){}G.prototype=q.prototype;function O(x,B,L){this.props=x,this.context=B,this.refs=_,this.updater=L||Q}var V=O.prototype=new G;V.constructor=O,F(V,q.prototype),V.isPureReactComponent=!0;var W=Array.isArray;function ce(){}var P={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function De(x,B,L){var Y=L.ref;return{$$typeof:s,type:x,key:B,ref:Y!==void 0?Y:null,props:L}}function Ot(x,B){return De(x.type,B,x.props)}function yt(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function Ve(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return B[L]})}var Ut=/\/+/g;function vt(x,B){return typeof x=="object"&&x!==null&&x.key!=null?Ve(""+x.key):B.toString(36)}function Oe(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ce,ce):(x.status="pending",x.then(function(B){x.status==="pending"&&(x.status="fulfilled",x.value=B)},function(B){x.status==="pending"&&(x.status="rejected",x.reason=B)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function D(x,B,L,Y,te){var ie=typeof x;(ie==="undefined"||ie==="boolean")&&(x=null);var me=!1;if(x===null)me=!0;else switch(ie){case"bigint":case"string":case"number":me=!0;break;case"object":switch(x.$$typeof){case s:case u:me=!0;break;case R:return me=x._init,D(me(x._payload),B,L,Y,te)}}if(me)return te=te(x),me=Y===""?"."+vt(x,0):Y,W(te)?(L="",me!=null&&(L=me.replace(Ut,"$&/")+"/"),D(te,B,L,"",function(In){return In})):te!=null&&(yt(te)&&(te=Ot(te,L+(te.key==null||x&&x.key===te.key?"":(""+te.key).replace(Ut,"$&/")+"/")+me)),B.push(te)),1;me=0;var Ze=Y===""?".":Y+":";if(W(x))for(var ze=0;ze<x.length;ze++)Y=x[ze],ie=Ze+vt(Y,ze),me+=D(Y,B,L,ie,te);else if(ze=J(x),typeof ze=="function")for(x=ze.call(x),ze=0;!(Y=x.next()).done;)Y=Y.value,ie=Ze+vt(Y,ze++),me+=D(Y,B,L,ie,te);else if(ie==="object"){if(typeof x.then=="function")return D(Oe(x),B,L,Y,te);throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return me}function H(x,B,L){if(x==null)return x;var Y=[],te=0;return D(x,Y,"","",function(ie){return B.call(L,ie,te++)}),Y}function $(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var ve=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},we={map:H,forEach:function(x,B,L){H(x,function(){B.apply(this,arguments)},L)},count:function(x){var B=0;return H(x,function(){B++}),B},toArray:function(x){return H(x,function(B){return B})||[]},only:function(x){if(!yt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ee.Activity=E,ee.Children=we,ee.Component=q,ee.Fragment=f,ee.Profiler=h,ee.PureComponent=O,ee.StrictMode=o,ee.Suspense=y,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ee.__COMPILER_RUNTIME={__proto__:null,c:function(x){return P.H.useMemoCache(x)}},ee.cache=function(x){return function(){return x.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(x,B,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Y=F({},x.props),te=x.key;if(B!=null)for(ie in B.key!==void 0&&(te=""+B.key),B)!Ae.call(B,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&B.ref===void 0||(Y[ie]=B[ie]);var ie=arguments.length-2;if(ie===1)Y.children=L;else if(1<ie){for(var me=Array(ie),Ze=0;Ze<ie;Ze++)me[Ze]=arguments[Ze+2];Y.children=me}return De(x.type,te,Y)},ee.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ee.createElement=function(x,B,L){var Y,te={},ie=null;if(B!=null)for(Y in B.key!==void 0&&(ie=""+B.key),B)Ae.call(B,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(te[Y]=B[Y]);var me=arguments.length-2;if(me===1)te.children=L;else if(1<me){for(var Ze=Array(me),ze=0;ze<me;ze++)Ze[ze]=arguments[ze+2];te.children=Ze}if(x&&x.defaultProps)for(Y in me=x.defaultProps,me)te[Y]===void 0&&(te[Y]=me[Y]);return De(x,ie,te)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(x){return{$$typeof:w,render:x}},ee.isValidElement=yt,ee.lazy=function(x){return{$$typeof:R,_payload:{_status:-1,_result:x},_init:$}},ee.memo=function(x,B){return{$$typeof:g,type:x,compare:B===void 0?null:B}},ee.startTransition=function(x){var B=P.T,L={};P.T=L;try{var Y=x(),te=P.S;te!==null&&te(L,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ce,ve)}catch(ie){ve(ie)}finally{B!==null&&L.types!==null&&(B.types=L.types),P.T=B}},ee.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ee.use=function(x){return P.H.use(x)},ee.useActionState=function(x,B,L){return P.H.useActionState(x,B,L)},ee.useCallback=function(x,B){return P.H.useCallback(x,B)},ee.useContext=function(x){return P.H.useContext(x)},ee.useDebugValue=function(){},ee.useDeferredValue=function(x,B){return P.H.useDeferredValue(x,B)},ee.useEffect=function(x,B){return P.H.useEffect(x,B)},ee.useEffectEvent=function(x){return P.H.useEffectEvent(x)},ee.useId=function(){return P.H.useId()},ee.useImperativeHandle=function(x,B,L){return P.H.useImperativeHandle(x,B,L)},ee.useInsertionEffect=function(x,B){return P.H.useInsertionEffect(x,B)},ee.useLayoutEffect=function(x,B){return P.H.useLayoutEffect(x,B)},ee.useMemo=function(x,B){return P.H.useMemo(x,B)},ee.useOptimistic=function(x,B){return P.H.useOptimistic(x,B)},ee.useReducer=function(x,B,L){return P.H.useReducer(x,B,L)},ee.useRef=function(x){return P.H.useRef(x)},ee.useState=function(x){return P.H.useState(x)},ee.useSyncExternalStore=function(x,B,L){return P.H.useSyncExternalStore(x,B,L)},ee.useTransition=function(){return P.H.useTransition()},ee.version="19.2.5",ee}var uh;function Ko(){return uh||(uh=1,qo.exports=Tg()),qo.exports}var A=Ko(),Ho={exports:{}},Ui={},Lo={exports:{}},_o={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function Eg(){return dh||(dh=1,(function(s){function u(D,H){var $=D.length;D.push(H);e:for(;0<$;){var ve=$-1>>>1,we=D[ve];if(0<h(we,H))D[ve]=H,D[$]=we,$=ve;else break e}}function f(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var H=D[0],$=D.pop();if($!==H){D[0]=$;e:for(var ve=0,we=D.length,x=we>>>1;ve<x;){var B=2*(ve+1)-1,L=D[B],Y=B+1,te=D[Y];if(0>h(L,$))Y<we&&0>h(te,L)?(D[ve]=te,D[Y]=$,ve=Y):(D[ve]=L,D[B]=$,ve=B);else if(Y<we&&0>h(te,$))D[ve]=te,D[Y]=$,ve=Y;else break e}}return H}function h(D,H){var $=D.sortIndex-H.sortIndex;return $!==0?$:D.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var b=Date,w=b.now();s.unstable_now=function(){return b.now()-w}}var y=[],g=[],R=1,E=null,U=3,J=!1,Q=!1,F=!1,_=!1,q=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function V(D){for(var H=f(g);H!==null;){if(H.callback===null)o(g);else if(H.startTime<=D)o(g),H.sortIndex=H.expirationTime,u(y,H);else break;H=f(g)}}function W(D){if(F=!1,V(D),!Q)if(f(y)!==null)Q=!0,ce||(ce=!0,Ve());else{var H=f(g);H!==null&&Oe(W,H.startTime-D)}}var ce=!1,P=-1,Ae=5,De=-1;function Ot(){return _?!0:!(s.unstable_now()-De<Ae)}function yt(){if(_=!1,ce){var D=s.unstable_now();De=D;var H=!0;try{e:{Q=!1,F&&(F=!1,G(P),P=-1),J=!0;var $=U;try{t:{for(V(D),E=f(y);E!==null&&!(E.expirationTime>D&&Ot());){var ve=E.callback;if(typeof ve=="function"){E.callback=null,U=E.priorityLevel;var we=ve(E.expirationTime<=D);if(D=s.unstable_now(),typeof we=="function"){E.callback=we,V(D),H=!0;break t}E===f(y)&&o(y),V(D)}else o(y);E=f(y)}if(E!==null)H=!0;else{var x=f(g);x!==null&&Oe(W,x.startTime-D),H=!1}}break e}finally{E=null,U=$,J=!1}H=void 0}}finally{H?Ve():ce=!1}}}var Ve;if(typeof O=="function")Ve=function(){O(yt)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,vt=Ut.port2;Ut.port1.onmessage=yt,Ve=function(){vt.postMessage(null)}}else Ve=function(){q(yt,0)};function Oe(D,H){P=q(function(){D(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return U},s.unstable_next=function(D){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var $=U;U=H;try{return D()}finally{U=$}},s.unstable_requestPaint=function(){_=!0},s.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=U;U=D;try{return H()}finally{U=$}},s.unstable_scheduleCallback=function(D,H,$){var ve=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ve+$:ve):$=ve,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=$+we,D={id:R++,callback:H,priorityLevel:D,startTime:$,expirationTime:we,sortIndex:-1},$>ve?(D.sortIndex=$,u(g,D),f(y)===null&&D===f(g)&&(F?(G(P),P=-1):F=!0,Oe(W,$-ve))):(D.sortIndex=we,u(y,D),Q||J||(Q=!0,ce||(ce=!0,Ve()))),D},s.unstable_shouldYield=Ot,s.unstable_wrapCallback=function(D){var H=U;return function(){var $=U;U=H;try{return D.apply(this,arguments)}finally{U=$}}}})(_o)),_o}var fh;function Ag(){return fh||(fh=1,Lo.exports=Eg()),Lo.exports}var Fo={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function Mg(){if(hh)return Ke;hh=1;var s=Ko();function u(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)g+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(y,g,R){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:E==null?null:""+E,children:y,containerInfo:g,implementation:R}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ke.createPortal=function(y,g){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return m(y,g,null,R)},Ke.flushSync=function(y){var g=b.T,R=o.p;try{if(b.T=null,o.p=2,y)return y()}finally{b.T=g,o.p=R,o.d.f()}},Ke.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(y,g))},Ke.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},Ke.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var R=g.as,E=w(R,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,J=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;R==="style"?o.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:U,fetchPriority:J}):R==="script"&&o.d.X(y,{crossOrigin:E,integrity:U,fetchPriority:J,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ke.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var R=w(g.as,g.crossOrigin);o.d.M(y,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(y)},Ke.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var R=g.as,E=w(R,g.crossOrigin);o.d.L(y,R,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ke.preloadModule=function(y,g){if(typeof y=="string")if(g){var R=w(g.as,g.crossOrigin);o.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(y)},Ke.requestFormReset=function(y){o.d.r(y)},Ke.unstable_batchedUpdates=function(y,g){return y(g)},Ke.useFormState=function(y,g,R){return b.H.useFormState(y,g,R)},Ke.useFormStatus=function(){return b.H.useHostTransitionStatus()},Ke.version="19.2.5",Ke}var mh;function Rg(){if(mh)return Fo.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Fo.exports=Mg(),Fo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function Ng(){if(ph)return Ui;ph=1;var s=Ag(),u=Ko(),f=Rg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return y(i),e;if(r===n)return y(i),t;r=r.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=r;else{for(var l=!1,d=i.child;d;){if(d===a){l=!0,a=i,n=r;break}if(d===n){l=!0,n=i,a=r;break}d=d.sibling}if(!l){for(d=r.child;d;){if(d===a){l=!0,a=r,n=i;break}if(d===n){l=!0,n=r,a=i;break}d=d.sibling}if(!l)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,U=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),De=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),yt=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=yt&&e[yt]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case q:return"Profiler";case _:return"StrictMode";case W:return"Suspense";case ce:return"SuspenseList";case De:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case O:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:vt(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return vt(e(t))}catch{}}return null}var Oe=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ve=[],we=-1;function x(e){return{current:e}}function B(e){0>we||(e.current=ve[we],ve[we]=null,we--)}function L(e,t){we++,ve[we]=e.current,e.current=t}var Y=x(null),te=x(null),ie=x(null),me=x(null);function Ze(e,t){switch(L(ie,t),L(te,e),L(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nf(t),e=Df(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Y),L(Y,e)}function ze(){B(Y),B(te),B(ie)}function In(e){e.memoizedState!==null&&L(me,e);var t=Y.current,a=Df(t,e.type);t!==a&&(L(te,e),L(Y,a))}function Gi(e){te.current===e&&(B(Y),B(te)),me.current===e&&(B(me),Di._currentValue=$)}var ys,rc;function Oa(e){if(ys===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||"",rc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ys+e+rc}var vs=!1;function bs(e,t){if(!e||vs)return"";vs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var T=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){T=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){T=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&T&&typeof M.stack=="string")return[M.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),l=r[0],d=r[1];if(l&&d){var p=l.split(`
`),k=d.split(`
`);for(i=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;if(n===p.length||i===k.length)for(n=p.length-1,i=k.length-1;1<=n&&0<=i&&p[n]!==k[i];)i--;for(;1<=n&&0<=i;n--,i--)if(p[n]!==k[i]){if(n!==1||i!==1)do if(n--,i--,0>i||p[n]!==k[i]){var N=`
`+p[n].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=n&&0<=i);break}}}finally{vs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Oa(a):""}function em(e,t){switch(e.tag){case 26:case 27:case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return e.child!==t&&t!==null?Oa("Suspense Fallback"):Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return bs(e.type,!1);case 11:return bs(e.type.render,!1);case 1:return bs(e.type,!0);case 31:return Oa("Activity");default:return""}}function sc(e){try{var t="",a=null;do t+=em(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var xs=Object.prototype.hasOwnProperty,Cs=s.unstable_scheduleCallback,ws=s.unstable_cancelCallback,tm=s.unstable_shouldYield,am=s.unstable_requestPaint,st=s.unstable_now,nm=s.unstable_getCurrentPriorityLevel,lc=s.unstable_ImmediatePriority,oc=s.unstable_UserBlockingPriority,Yi=s.unstable_NormalPriority,im=s.unstable_LowPriority,cc=s.unstable_IdlePriority,rm=s.log,sm=s.unstable_setDisableYieldValue,Gn=null,lt=null;function ua(e){if(typeof rm=="function"&&sm(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Gn,e)}catch{}}var ot=Math.clz32?Math.clz32:cm,lm=Math.log,om=Math.LN2;function cm(e){return e>>>=0,e===0?32:31-(lm(e)/om|0)|0}var Xi=256,Qi=262144,Ji=4194304;function Ua(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var d=n&134217727;return d!==0?(n=d&~r,n!==0?i=Ua(n):(l&=d,l!==0?i=Ua(l):a||(a=d&~e,a!==0&&(i=Ua(a))))):(d=n&~r,d!==0?i=Ua(d):l!==0?i=Ua(l):a||(a=n&~e,a!==0&&(i=Ua(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Yn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function um(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uc(){var e=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),e}function Ss(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dm(e,t,a,n,i,r){var l=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,p=e.expirationTimes,k=e.hiddenUpdates;for(a=l&~a;0<a;){var N=31-ot(a),j=1<<N;d[N]=0,p[N]=-1;var T=k[N];if(T!==null)for(k[N]=null,N=0;N<T.length;N++){var M=T[N];M!==null&&(M.lane&=-536870913)}a&=~j}n!==0&&dc(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~t))}function dc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ot(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function fc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ot(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function hc(e,t){var a=t&-t;return a=(a&42)!==0?1:ks(a),(a&(e.suspendedLanes|t))!==0?0:a}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:eh(e.type))}function pc(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var da=Math.random().toString(36).slice(2),Ge="__reactFiber$"+da,$e="__reactProps$"+da,en="__reactContainer$"+da,Es="__reactEvents$"+da,fm="__reactListeners$"+da,hm="__reactHandles$"+da,gc="__reactResources$"+da,Qn="__reactMarker$"+da;function As(e){delete e[Ge],delete e[$e],delete e[Es],delete e[fm],delete e[hm]}function tn(e){var t=e[Ge];if(t)return t;for(var a=e.parentNode;a;){if(t=a[en]||a[Ge]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Hf(e);e!==null;){if(a=e[Ge])return a;e=Hf(e)}return t}e=a,a=e.parentNode}return null}function an(e){if(e=e[Ge]||e[en]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Jn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function nn(e){var t=e[gc];return t||(t=e[gc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[Qn]=!0}var yc=new Set,vc={};function qa(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(vc[e]=t,e=0;e<t.length;e++)yc.add(t[e])}var mm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bc={},xc={};function pm(e){return xs.call(xc,e)?!0:xs.call(bc,e)?!1:mm.test(e)?xc[e]=!0:(bc[e]=!0,!1)}function Ki(e,t,a){if(pm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Pi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ms(e){if(!e._valueTracker){var t=Cc(e)?"checked":"value";e._valueTracker=gm(e,t,""+e[t])}}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Cc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ym=/[\n"\\]/g;function xt(e){return e.replace(ym,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rs(e,t,a,n,i,r,l,d){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?Ns(e,l,bt(t)):a!=null?Ns(e,l,bt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+bt(d):e.removeAttribute("name")}function Sc(e,t,a,n,i,r,l,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Ms(e);return}a=a!=null?""+bt(a):"",t=t!=null?""+bt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=d?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Ms(e)}function Ns(e,t,a){t==="number"&&Zi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function kc(e,t,a){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+bt(a):""}function Tc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(Oe(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=bt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ms(e)}function ln(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var vm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ec(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||vm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ac(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Ec(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&Ec(e,r,t[r])}function Ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(e){return xm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var zs=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,cn=null;function Mc(e){var t=an(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[$e]||null;if(!i)throw Error(o(90));Rs(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&wc(n)}break e;case"textarea":kc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sn(e,!!a.multiple,t,!1)}}}var Bs=!1;function Rc(e,t,a){if(Bs)return e(t,a);Bs=!0;try{var n=e(t);return n}finally{if(Bs=!1,(on!==null||cn!==null)&&(Lr(),on&&(t=on,e=cn,cn=on=null,Mc(t),e)))for(t=0;t<e.length;t++)Mc(e[t])}}function Vn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[$e]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=!1;if(Qt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Os=!1}var fa=null,Us=null,$i=null;function Nc(){if($i)return $i;var e,t=Us,a=t.length,n,i="value"in fa?fa.value:fa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var l=a-e;for(n=1;n<=l&&t[a-n]===i[r-n];n++);return $i=i.slice(e,1<n?1-n:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function Dc(){return!1}function et(e){function t(a,n,i,r,l){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?tr:Dc,this.isPropagationStopped=Dc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ar=et(Ha),Pn=E({},Ha,{view:0,detail:0}),Cm=et(Pn),qs,Hs,Zn,nr=E({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(qs=e.screenX-Zn.screenX,Hs=e.screenY-Zn.screenY):Hs=qs=0,Zn=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),zc=et(nr),wm=E({},nr,{dataTransfer:0}),Sm=et(wm),km=E({},Pn,{relatedTarget:0}),Ls=et(km),Tm=E({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=et(Tm),Am=E({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mm=et(Am),Rm=E({},Ha,{data:0}),jc=et(Rm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zm[e])?!!t[e]:!1}function _s(){return jm}var Bm=E({},Pn,{key:function(e){if(e.key){var t=Nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Om=et(Bm),Um=E({},nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bc=et(Um),qm=E({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),Hm=et(qm),Lm=E({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),_m=et(Lm),Fm=E({},nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=et(Fm),Gm=E({},Ha,{newState:0,oldState:0}),Ym=et(Gm),Xm=[9,13,27,32],Fs=Qt&&"CompositionEvent"in window,Wn=null;Qt&&"documentMode"in document&&(Wn=document.documentMode);var Qm=Qt&&"TextEvent"in window&&!Wn,Oc=Qt&&(!Fs||Wn&&8<Wn&&11>=Wn),Uc=" ",qc=!1;function Hc(e,t){switch(e){case"keyup":return Xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function Jm(e,t){switch(e){case"compositionend":return Lc(t);case"keypress":return t.which!==32?null:(qc=!0,Uc);case"textInput":return e=t.data,e===Uc&&qc?null:e;default:return null}}function Vm(e,t){if(un)return e==="compositionend"||!Fs&&Hc(e,t)?(e=Nc(),$i=Us=fa=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oc&&t.locale!=="ko"?null:t.data;default:return null}}var Km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Km[e.type]:t==="textarea"}function Fc(e,t,a,n){on?cn?cn.push(n):cn=[n]:on=n,t=Qr(t,"onChange"),0<t.length&&(a=new ar("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var $n=null,ei=null;function Pm(e){kf(e,0)}function ir(e){var t=Jn(e);if(wc(t))return e}function Ic(e,t){if(e==="change")return t}var Gc=!1;if(Qt){var Is;if(Qt){var Gs="oninput"in document;if(!Gs){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Gs=typeof Yc.oninput=="function"}Is=Gs}else Is=!1;Gc=Is&&(!document.documentMode||9<document.documentMode)}function Xc(){$n&&($n.detachEvent("onpropertychange",Qc),ei=$n=null)}function Qc(e){if(e.propertyName==="value"&&ir(ei)){var t=[];Fc(t,ei,e,js(e)),Rc(Pm,t)}}function Zm(e,t,a){e==="focusin"?(Xc(),$n=t,ei=a,$n.attachEvent("onpropertychange",Qc)):e==="focusout"&&Xc()}function Wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ir(ei)}function $m(e,t){if(e==="click")return ir(t)}function ep(e,t){if(e==="input"||e==="change")return ir(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:tp;function ti(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!xs.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var a=Jc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jc(a)}}function Kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zi(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ap=Qt&&"documentMode"in document&&11>=document.documentMode,dn=null,Xs=null,ai=null,Qs=!1;function Zc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qs||dn==null||dn!==Zi(n)||(n=dn,"selectionStart"in n&&Ys(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ai&&ti(ai,n)||(ai=n,n=Qr(Xs,"onSelect"),0<n.length&&(t=new ar("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=dn)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var fn={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Js={},Wc={};Qt&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function _a(e){if(Js[e])return Js[e];if(!fn[e])return e;var t=fn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Wc)return Js[e]=t[a];return e}var $c=_a("animationend"),eu=_a("animationiteration"),tu=_a("animationstart"),np=_a("transitionrun"),ip=_a("transitionstart"),rp=_a("transitioncancel"),au=_a("transitionend"),nu=new Map,Vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vs.push("scrollEnd");function Nt(e,t){nu.set(e,t),qa(t,[e])}var rr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],hn=0,Ks=0;function sr(){for(var e=hn,t=Ks=hn=0;t<e;){var a=Ct[t];Ct[t++]=null;var n=Ct[t];Ct[t++]=null;var i=Ct[t];Ct[t++]=null;var r=Ct[t];if(Ct[t++]=null,n!==null&&i!==null){var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}r!==0&&iu(a,i,r)}}function lr(e,t,a,n){Ct[hn++]=e,Ct[hn++]=t,Ct[hn++]=a,Ct[hn++]=n,Ks|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ps(e,t,a,n){return lr(e,t,a,n),or(e)}function Fa(e,t){return lr(e,null,null,t),or(e)}function iu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-ot(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function or(e){if(50<ki)throw ki=0,ro=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mn={};function sp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,a,n){return new sp(e,t,a,n)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var a=e.alternate;return a===null?(a=ut(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ru(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,a,n,i,r){var l=0;if(n=e,typeof e=="function")Zs(e)&&(l=1);else if(typeof e=="string")l=dg(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case De:return e=ut(31,a,t,i),e.elementType=De,e.lanes=r,e;case F:return Ia(a.children,i,r,t);case _:l=8,i|=24;break;case q:return e=ut(12,a,t,i|2),e.elementType=q,e.lanes=r,e;case W:return e=ut(13,a,t,i),e.elementType=W,e.lanes=r,e;case ce:return e=ut(19,a,t,i),e.elementType=ce,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:l=10;break e;case G:l=9;break e;case V:l=11;break e;case P:l=14;break e;case Ae:l=16,n=null;break e}l=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=ut(l,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Ia(e,t,a,n){return e=ut(7,e,n,t),e.lanes=a,e}function Ws(e,t,a){return e=ut(6,e,null,t),e.lanes=a,e}function su(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function $s(e,t,a){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lu=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=lu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:sc(t)},lu.set(e,t),t)}return{value:e,source:t,stack:sc(t)}}var pn=[],gn=0,ur=null,ni=0,St=[],kt=0,ha=null,qt=1,Ht="";function Vt(e,t){pn[gn++]=ni,pn[gn++]=ur,ur=e,ni=t}function ou(e,t,a){St[kt++]=qt,St[kt++]=Ht,St[kt++]=ha,ha=e;var n=qt;e=Ht;var i=32-ot(n)-1;n&=~(1<<i),a+=1;var r=32-ot(t)+i;if(30<r){var l=i-i%5;r=(n&(1<<l)-1).toString(32),n>>=l,i-=l,qt=1<<32-ot(t)+i|a<<i|n,Ht=r+e}else qt=1<<r|a<<i|n,Ht=e}function el(e){e.return!==null&&(Vt(e,1),ou(e,1,0))}function tl(e){for(;e===ur;)ur=pn[--gn],pn[gn]=null,ni=pn[--gn],pn[gn]=null;for(;e===ha;)ha=St[--kt],St[kt]=null,Ht=St[--kt],St[kt]=null,qt=St[--kt],St[kt]=null}function cu(e,t){St[kt++]=qt,St[kt++]=Ht,St[kt++]=ha,qt=t.id,Ht=t.overflow,ha=e}var Ye=null,ke=null,ue=!1,ma=null,Tt=!1,al=Error(o(519));function pa(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ii(wt(t,e)),al}function uu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ge]=e,t[$e]=n,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Ei.length;a++)se(Ei[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Sc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Tc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Mf(t.textContent,a)?(n.popover!=null&&(se("beforetoggle",t),se("toggle",t)),n.onScroll!=null&&se("scroll",t),n.onScrollEnd!=null&&se("scrollend",t),n.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||pa(e,!0)}function du(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ye=Ye.return}}function yn(e){if(e!==Ye)return!1;if(!ue)return du(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Co(e.type,e.memoizedProps)),a=!a),a&&ke&&pa(e),du(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ke=qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));ke=qf(e)}else t===27?(t=ke,Ra(e.type)?(e=Eo,Eo=null,ke=e):ke=t):ke=Ye?At(e.stateNode.nextSibling):null;return!0}function Ga(){ke=Ye=null,ue=!1}function nl(){var e=ma;return e!==null&&(it===null?it=e:it.push.apply(it,e),ma=null),e}function ii(e){ma===null?ma=[e]:ma.push(e)}var il=x(null),Ya=null,Kt=null;function ga(e,t,a){L(il,t._currentValue),t._currentValue=a}function Pt(e){e._currentValue=il.current,B(il)}function rl(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function sl(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var l=i.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=i;for(var p=0;p<t.length;p++)if(d.context===t[p]){r.lanes|=a,d=r.alternate,d!==null&&(d.lanes|=a),rl(r.return,a,e),n||(l=null);break e}r=d.next}}else if(i.tag===18){if(l=i.return,l===null)throw Error(o(341));l.lanes|=a,r=l.alternate,r!==null&&(r.lanes|=a),rl(l,a,e),l=null}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}}function vn(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var l=i.alternate;if(l===null)throw Error(o(387));if(l=l.memoizedProps,l!==null){var d=i.type;ct(i.pendingProps.value,l.value)||(e!==null?e.push(d):e=[d])}}else if(i===me.current){if(l=i.alternate,l===null)throw Error(o(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Di):e=[Di])}i=i.return}e!==null&&sl(t,e,a,n),t.flags|=262144}function dr(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ya=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return fu(Ya,e)}function fr(e,t){return Ya===null&&Xa(e),fu(e,t)}function fu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(o(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var lp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},op=s.unstable_scheduleCallback,cp=s.unstable_NormalPriority,Ue={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ll(){return{controller:new lp,data:new Map,refCount:0}}function ri(e){e.refCount--,e.refCount===0&&op(cp,function(){e.controller.abort()})}var si=null,ol=0,bn=0,xn=null;function up(e,t){if(si===null){var a=si=[];ol=0,bn=fo(),xn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ol++,t.then(hu,hu),t}function hu(){if(--ol===0&&si!==null){xn!==null&&(xn.status="fulfilled");var e=si;si=null,bn=0,xn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function dp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var mu=D.S;D.S=function(e,t){Zd=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&up(e,t),mu!==null&&mu(e,t)};var Qa=x(null);function cl(){var e=Qa.current;return e!==null?e:Se.pooledCache}function hr(e,t){t===null?L(Qa,Qa.current):L(Qa,t.pool)}function pu(){var e=cl();return e===null?null:{parent:Ue._currentValue,pool:e}}var Cn=Error(o(460)),ul=Error(o(474)),mr=Error(o(542)),pr={then:function(){}};function gu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xt,Xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bu(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bu(e),e}throw Va=t,Cn}}function Ja(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,Cn):a}}var Va=null;function vu(){if(Va===null)throw Error(o(459));var e=Va;return Va=null,e}function bu(e){if(e===Cn||e===mr)throw Error(o(483))}var wn=null,li=0;function gr(e){var t=li;return li+=1,wn===null&&(wn=[]),yu(wn,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yr(e,t){throw t.$$typeof===U?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xu(e){function t(C,v){if(e){var S=C.deletions;S===null?(C.deletions=[v],C.flags|=16):S.push(v)}}function a(C,v){if(!e)return null;for(;v!==null;)t(C,v),v=v.sibling;return null}function n(C){for(var v=new Map;C!==null;)C.key!==null?v.set(C.key,C):v.set(C.index,C),C=C.sibling;return v}function i(C,v){return C=Jt(C,v),C.index=0,C.sibling=null,C}function r(C,v,S){return C.index=S,e?(S=C.alternate,S!==null?(S=S.index,S<v?(C.flags|=67108866,v):S):(C.flags|=67108866,v)):(C.flags|=1048576,v)}function l(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function d(C,v,S,z){return v===null||v.tag!==6?(v=Ws(S,C.mode,z),v.return=C,v):(v=i(v,S),v.return=C,v)}function p(C,v,S,z){var K=S.type;return K===F?N(C,v,S.props.children,z,S.key):v!==null&&(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Ja(K)===v.type)?(v=i(v,S.props),oi(v,S),v.return=C,v):(v=cr(S.type,S.key,S.props,null,C.mode,z),oi(v,S),v.return=C,v)}function k(C,v,S,z){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=$s(S,C.mode,z),v.return=C,v):(v=i(v,S.children||[]),v.return=C,v)}function N(C,v,S,z,K){return v===null||v.tag!==7?(v=Ia(S,C.mode,z,K),v.return=C,v):(v=i(v,S),v.return=C,v)}function j(C,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ws(""+v,C.mode,S),v.return=C,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case J:return S=cr(v.type,v.key,v.props,null,C.mode,S),oi(S,v),S.return=C,S;case Q:return v=$s(v,C.mode,S),v.return=C,v;case Ae:return v=Ja(v),j(C,v,S)}if(Oe(v)||Ve(v))return v=Ia(v,C.mode,S,null),v.return=C,v;if(typeof v.then=="function")return j(C,gr(v),S);if(v.$$typeof===O)return j(C,fr(C,v),S);yr(C,v)}return null}function T(C,v,S,z){var K=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return K!==null?null:d(C,v,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case J:return S.key===K?p(C,v,S,z):null;case Q:return S.key===K?k(C,v,S,z):null;case Ae:return S=Ja(S),T(C,v,S,z)}if(Oe(S)||Ve(S))return K!==null?null:N(C,v,S,z,null);if(typeof S.then=="function")return T(C,v,gr(S),z);if(S.$$typeof===O)return T(C,v,fr(C,S),z);yr(C,S)}return null}function M(C,v,S,z,K){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return C=C.get(S)||null,d(v,C,""+z,K);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case J:return C=C.get(z.key===null?S:z.key)||null,p(v,C,z,K);case Q:return C=C.get(z.key===null?S:z.key)||null,k(v,C,z,K);case Ae:return z=Ja(z),M(C,v,S,z,K)}if(Oe(z)||Ve(z))return C=C.get(S)||null,N(v,C,z,K,null);if(typeof z.then=="function")return M(C,v,S,gr(z),K);if(z.$$typeof===O)return M(C,v,S,fr(v,z),K);yr(v,z)}return null}function I(C,v,S,z){for(var K=null,de=null,X=v,ne=v=0,oe=null;X!==null&&ne<S.length;ne++){X.index>ne?(oe=X,X=null):oe=X.sibling;var fe=T(C,X,S[ne],z);if(fe===null){X===null&&(X=oe);break}e&&X&&fe.alternate===null&&t(C,X),v=r(fe,v,ne),de===null?K=fe:de.sibling=fe,de=fe,X=oe}if(ne===S.length)return a(C,X),ue&&Vt(C,ne),K;if(X===null){for(;ne<S.length;ne++)X=j(C,S[ne],z),X!==null&&(v=r(X,v,ne),de===null?K=X:de.sibling=X,de=X);return ue&&Vt(C,ne),K}for(X=n(X);ne<S.length;ne++)oe=M(X,C,ne,S[ne],z),oe!==null&&(e&&oe.alternate!==null&&X.delete(oe.key===null?ne:oe.key),v=r(oe,v,ne),de===null?K=oe:de.sibling=oe,de=oe);return e&&X.forEach(function(Ba){return t(C,Ba)}),ue&&Vt(C,ne),K}function Z(C,v,S,z){if(S==null)throw Error(o(151));for(var K=null,de=null,X=v,ne=v=0,oe=null,fe=S.next();X!==null&&!fe.done;ne++,fe=S.next()){X.index>ne?(oe=X,X=null):oe=X.sibling;var Ba=T(C,X,fe.value,z);if(Ba===null){X===null&&(X=oe);break}e&&X&&Ba.alternate===null&&t(C,X),v=r(Ba,v,ne),de===null?K=Ba:de.sibling=Ba,de=Ba,X=oe}if(fe.done)return a(C,X),ue&&Vt(C,ne),K;if(X===null){for(;!fe.done;ne++,fe=S.next())fe=j(C,fe.value,z),fe!==null&&(v=r(fe,v,ne),de===null?K=fe:de.sibling=fe,de=fe);return ue&&Vt(C,ne),K}for(X=n(X);!fe.done;ne++,fe=S.next())fe=M(X,C,ne,fe.value,z),fe!==null&&(e&&fe.alternate!==null&&X.delete(fe.key===null?ne:fe.key),v=r(fe,v,ne),de===null?K=fe:de.sibling=fe,de=fe);return e&&X.forEach(function(wg){return t(C,wg)}),ue&&Vt(C,ne),K}function Ce(C,v,S,z){if(typeof S=="object"&&S!==null&&S.type===F&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case J:e:{for(var K=S.key;v!==null;){if(v.key===K){if(K=S.type,K===F){if(v.tag===7){a(C,v.sibling),z=i(v,S.props.children),z.return=C,C=z;break e}}else if(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Ja(K)===v.type){a(C,v.sibling),z=i(v,S.props),oi(z,S),z.return=C,C=z;break e}a(C,v);break}else t(C,v);v=v.sibling}S.type===F?(z=Ia(S.props.children,C.mode,z,S.key),z.return=C,C=z):(z=cr(S.type,S.key,S.props,null,C.mode,z),oi(z,S),z.return=C,C=z)}return l(C);case Q:e:{for(K=S.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){a(C,v.sibling),z=i(v,S.children||[]),z.return=C,C=z;break e}else{a(C,v);break}else t(C,v);v=v.sibling}z=$s(S,C.mode,z),z.return=C,C=z}return l(C);case Ae:return S=Ja(S),Ce(C,v,S,z)}if(Oe(S))return I(C,v,S,z);if(Ve(S)){if(K=Ve(S),typeof K!="function")throw Error(o(150));return S=K.call(S),Z(C,v,S,z)}if(typeof S.then=="function")return Ce(C,v,gr(S),z);if(S.$$typeof===O)return Ce(C,v,fr(C,S),z);yr(C,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(a(C,v.sibling),z=i(v,S),z.return=C,C=z):(a(C,v),z=Ws(S,C.mode,z),z.return=C,C=z),l(C)):a(C,v)}return function(C,v,S,z){try{li=0;var K=Ce(C,v,S,z);return wn=null,K}catch(X){if(X===Cn||X===mr)throw X;var de=ut(29,X,null,C.mode);return de.lanes=z,de.return=C,de}finally{}}}var Ka=xu(!0),Cu=xu(!1),ya=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(he&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=or(e),iu(e,null,a),t}return lr(e,n,t,a),or(e)}function ci(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,fc(e,a)}}function hl(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var l={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=l:r=r.next=l,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ml=!1;function ui(){if(ml){var e=xn;if(e!==null)throw e}}function di(e,t,a,n){ml=!1;var i=e.updateQueue;ya=!1;var r=i.firstBaseUpdate,l=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var p=d,k=p.next;p.next=null,l===null?r=k:l.next=k,l=p;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==l&&(d===null?N.firstBaseUpdate=k:d.next=k,N.lastBaseUpdate=p))}if(r!==null){var j=i.baseState;l=0,N=k=p=null,d=r;do{var T=d.lane&-536870913,M=T!==d.lane;if(M?(le&T)===T:(n&T)===T){T!==0&&T===bn&&(ml=!0),N!==null&&(N=N.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var I=e,Z=d;T=t;var Ce=a;switch(Z.tag){case 1:if(I=Z.payload,typeof I=="function"){j=I.call(Ce,j,T);break e}j=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=Z.payload,T=typeof I=="function"?I.call(Ce,j,T):I,T==null)break e;j=E({},j,T);break e;case 2:ya=!0}}T=d.callback,T!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[T]:M.push(T))}else M={lane:T,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(k=N=M,p=j):N=N.next=M,l|=T;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;M=d,d=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);N===null&&(p=j),i.baseState=p,i.firstBaseUpdate=k,i.lastBaseUpdate=N,r===null&&(i.shared.lanes=0),ka|=l,e.lanes=l,e.memoizedState=j}}function wu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Su(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wu(a[e],t)}var Sn=x(null),vr=x(0);function ku(e,t){e=ra,L(vr,e),L(Sn,t),ra=e|t.baseLanes}function pl(){L(vr,ra),L(Sn,Sn.current)}function gl(){ra=vr.current,B(Sn),B(vr)}var dt=x(null),Et=null;function xa(e){var t=e.alternate;L(je,je.current&1),L(dt,e),Et===null&&(t===null||Sn.current!==null||t.memoizedState!==null)&&(Et=e)}function yl(e){L(je,je.current),L(dt,e),Et===null&&(Et=e)}function Tu(e){e.tag===22?(L(je,je.current),L(dt,e),Et===null&&(Et=e)):Ca()}function Ca(){L(je,je.current),L(dt,dt.current)}function ft(e){B(dt),Et===e&&(Et=null),B(je)}var je=x(0);function br(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ko(a)||To(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,ae=null,be=null,qe=null,xr=!1,kn=!1,Pa=!1,Cr=0,fi=0,Tn=null,fp=0;function Re(){throw Error(o(321))}function vl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function bl(e,t,a,n,i,r){return Zt=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?od:Bl,Pa=!1,r=a(n,i),Pa=!1,kn&&(r=Au(t,a,n,i)),Eu(e),r}function Eu(e){D.H=pi;var t=be!==null&&be.next!==null;if(Zt=0,qe=be=ae=null,xr=!1,fi=0,Tn=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&dr(e)&&(He=!0))}function Au(e,t,a,n){ae=e;var i=0;do{if(kn&&(Tn=null),fi=0,kn=!1,25<=i)throw Error(o(301));if(i+=1,qe=be=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=cd,r=t(a,n)}while(kn);return r}function hp(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?hi(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(ae.flags|=1024),t}function xl(){var e=Cr!==0;return Cr=0,e}function Cl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function wl(e){if(xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xr=!1}Zt=0,qe=be=ae=null,kn=!1,fi=Cr=0,Tn=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ae.memoizedState=qe=e:qe=qe.next=e,qe}function Be(){if(be===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=qe===null?ae.memoizedState:qe.next;if(t!==null)qe=t,be=e;else{if(e===null)throw ae.alternate===null?Error(o(467)):Error(o(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},qe===null?ae.memoizedState=qe=e:qe=qe.next=e}return qe}function wr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hi(e){var t=fi;return fi+=1,Tn===null&&(Tn=[]),e=yu(Tn,e,t),t=ae,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?od:Bl),e}function Sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hi(e);if(e.$$typeof===O)return Xe(e)}throw Error(o(438,String(e)))}function Sl(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=wr(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ot;return t.index++,a}function Wt(e,t){return typeof t=="function"?t(e):t}function kr(e){var t=Be();return kl(t,be,e)}function kl(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var l=i.next;i.next=r.next,r.next=l}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var d=l=null,p=null,k=t,N=!1;do{var j=k.lane&-536870913;if(j!==k.lane?(le&j)===j:(Zt&j)===j){var T=k.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),j===bn&&(N=!0);else if((Zt&T)===T){k=k.next,T===bn&&(N=!0);continue}else j={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},p===null?(d=p=j,l=r):p=p.next=j,ae.lanes|=T,ka|=T;j=k.action,Pa&&a(r,j),r=k.hasEagerState?k.eagerState:a(r,j)}else T={lane:j,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},p===null?(d=p=T,l=r):p=p.next=T,ae.lanes|=j,ka|=j;k=k.next}while(k!==null&&k!==t);if(p===null?l=r:p.next=d,!ct(r,e.memoizedState)&&(He=!0,N&&(a=xn,a!==null)))throw a;e.memoizedState=r,e.baseState=l,e.baseQueue=p,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Tl(e){var t=Be(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var l=i=i.next;do r=e(r,l.action),l=l.next;while(l!==i);ct(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Mu(e,t,a){var n=ae,i=Be(),r=ue;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var l=!ct((be||i).memoizedState,a);if(l&&(i.memoizedState=a,He=!0),i=i.queue,Ml(Du.bind(null,n,i,e),[e]),i.getSnapshot!==t||l||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,En(9,{destroy:void 0},Nu.bind(null,n,i,a,t),null),Se===null)throw Error(o(349));r||(Zt&127)!==0||Ru(n,t,a)}return a}function Ru(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=wr(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Nu(e,t,a,n){t.value=a,t.getSnapshot=n,zu(t)&&ju(e)}function Du(e,t,a){return a(function(){zu(t)&&ju(e)})}function zu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function ju(e){var t=Fa(e,2);t!==null&&rt(t,e,2)}function El(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Pa){ua(!0);try{a()}finally{ua(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Bu(e,t,a,n){return e.baseState=a,kl(e,be,typeof n=="function"?n:Wt)}function mp(e,t,a,n,i){if(Ar(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,Ou(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Ou(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=D.T,l={};D.T=l;try{var d=a(i,n),p=D.S;p!==null&&p(l,d),Uu(e,t,d)}catch(k){Al(e,t,k)}finally{r!==null&&l.types!==null&&(r.types=l.types),D.T=r}}else try{r=a(i,n),Uu(e,t,r)}catch(k){Al(e,t,k)}}function Uu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){qu(e,t,n)},function(n){return Al(e,t,n)}):qu(e,t,a)}function qu(e,t,a){t.status="fulfilled",t.value=a,Hu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ou(e,a)))}function Al(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Hu(t),t=t.next;while(t!==n)}e.action=null}function Hu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Lu(e,t){return t}function _u(e,t){if(ue){var a=Se.formState;if(a!==null){e:{var n=ae;if(ue){if(ke){t:{for(var i=ke,r=Tt;i.nodeType!==8;){if(!r){i=null;break t}if(i=At(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){ke=At(i.nextSibling),n=i.data==="F!";break e}}pa(n)}n=!1}n&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:t},a.queue=n,a=rd.bind(null,ae,n),n.dispatch=a,n=El(!1),r=jl.bind(null,ae,!1,n.queue),n=We(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=mp.bind(null,ae,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Fu(e){var t=Be();return Iu(t,be,e)}function Iu(e,t,a){if(t=kl(e,t,Lu)[0],e=kr(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=hi(t)}catch(l){throw l===Cn?mr:l}else n=t;t=Be();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,En(9,{destroy:void 0},pp.bind(null,i,a),null)),[n,r,e]}function pp(e,t){e.action=t}function Gu(e){var t=Be(),a=be;if(a!==null)return Iu(t,a,e);Be(),t=t.memoizedState,a=Be();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function En(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=wr(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Yu(){return Be().memoizedState}function Tr(e,t,a,n){var i=We();ae.flags|=e,i.memoizedState=En(1|t,{destroy:void 0},a,n===void 0?null:n)}function Er(e,t,a,n){var i=Be();n=n===void 0?null:n;var r=i.memoizedState.inst;be!==null&&n!==null&&vl(n,be.memoizedState.deps)?i.memoizedState=En(t,r,a,n):(ae.flags|=e,i.memoizedState=En(1|t,r,a,n))}function Xu(e,t){Tr(8390656,8,e,t)}function Ml(e,t){Er(2048,8,e,t)}function gp(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=wr(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Qu(e){var t=Be().memoizedState;return gp({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ju(e,t){return Er(4,2,e,t)}function Vu(e,t){return Er(4,4,e,t)}function Ku(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pu(e,t,a){a=a!=null?a.concat([e]):null,Er(4,4,Ku.bind(null,t,e),a)}function Rl(){}function Zu(e,t){var a=Be();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&vl(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Wu(e,t){var a=Be();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&vl(t,n[1]))return n[0];if(n=e(),Pa){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[n,t],n}function Nl(e,t,a){return a===void 0||(Zt&1073741824)!==0&&(le&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=$d(),ae.lanes|=e,ka|=e,a)}function $u(e,t,a,n){return ct(a,t)?a:Sn.current!==null?(e=Nl(e,a,n),ct(e,t)||(He=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(le&261930)===0?(He=!0,e.memoizedState=a):(e=$d(),ae.lanes|=e,ka|=e,t)}function ed(e,t,a,n,i){var r=H.p;H.p=r!==0&&8>r?r:8;var l=D.T,d={};D.T=d,jl(e,!1,t,a);try{var p=i(),k=D.S;if(k!==null&&k(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var N=dp(p,n);mi(e,t,N,pt(e))}else mi(e,t,n,pt(e))}catch(j){mi(e,t,{then:function(){},status:"rejected",reason:j},pt())}finally{H.p=r,l!==null&&d.types!==null&&(l.types=d.types),D.T=l}}function yp(){}function Dl(e,t,a,n){if(e.tag!==5)throw Error(o(476));var i=td(e).queue;ed(e,i,t,$,a===null?yp:function(){return ad(e),a(n)})}function td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ad(e){var t=td(e);t.next===null&&(t=e.alternate.memoizedState),mi(e,t.next.queue,{},pt())}function zl(){return Xe(Di)}function nd(){return Be().memoizedState}function id(){return Be().memoizedState}function vp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=va(a);var n=ba(t,e,a);n!==null&&(rt(n,t,a),ci(n,t,a)),t={cache:ll()},e.payload=t;return}t=t.return}}function bp(e,t,a){var n=pt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ar(e)?sd(t,a):(a=Ps(e,t,a,n),a!==null&&(rt(a,e,n),ld(a,t,n)))}function rd(e,t,a){var n=pt();mi(e,t,a,n)}function mi(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ar(e))sd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,d=r(l,a);if(i.hasEagerState=!0,i.eagerState=d,ct(d,l))return lr(e,t,i,0),Se===null&&sr(),!1}catch{}finally{}if(a=Ps(e,t,i,n),a!==null)return rt(a,e,n),ld(a,t,n),!0}return!1}function jl(e,t,a,n){if(n={lane:2,revertLane:fo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ar(e)){if(t)throw Error(o(479))}else t=Ps(e,a,n,2),t!==null&&rt(t,e,2)}function Ar(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function sd(e,t){kn=xr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ld(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,fc(e,a)}}var pi={readContext:Xe,use:Sr,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};pi.useEffectEvent=Re;var od={readContext:Xe,use:Sr,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Xu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Tr(4194308,4,Ku.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){Tr(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var n=e();if(Pa){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=We();if(a!==void 0){var i=a(t);if(Pa){ua(!0);try{a(t)}finally{ua(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=bp.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=El(e);var t=e.queue,a=rd.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Rl,useDeferredValue:function(e,t){var a=We();return Nl(a,e,t)},useTransition:function(){var e=El(!1);return e=ed.bind(null,ae,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,i=We();if(ue){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Se===null)throw Error(o(349));(le&127)!==0||Ru(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,Xu(Du.bind(null,n,r,e),[e]),n.flags|=2048,En(9,{destroy:void 0},Nu.bind(null,n,r,a,t),null),a},useId:function(){var e=We(),t=Se.identifierPrefix;if(ue){var a=Ht,n=qt;a=(n&~(1<<32-ot(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Cr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=fp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zl,useFormState:_u,useActionState:_u,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=jl.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Sl,useCacheRefresh:function(){return We().memoizedState=vp.bind(null,ae)},useEffectEvent:function(e){var t=We(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Bl={readContext:Xe,use:Sr,useCallback:Zu,useContext:Xe,useEffect:Ml,useImperativeHandle:Pu,useInsertionEffect:Ju,useLayoutEffect:Vu,useMemo:Wu,useReducer:kr,useRef:Yu,useState:function(){return kr(Wt)},useDebugValue:Rl,useDeferredValue:function(e,t){var a=Be();return $u(a,be.memoizedState,e,t)},useTransition:function(){var e=kr(Wt)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:hi(e),t]},useSyncExternalStore:Mu,useId:nd,useHostTransitionStatus:zl,useFormState:Fu,useActionState:Fu,useOptimistic:function(e,t){var a=Be();return Bu(a,be,e,t)},useMemoCache:Sl,useCacheRefresh:id};Bl.useEffectEvent=Qu;var cd={readContext:Xe,use:Sr,useCallback:Zu,useContext:Xe,useEffect:Ml,useImperativeHandle:Pu,useInsertionEffect:Ju,useLayoutEffect:Vu,useMemo:Wu,useReducer:Tl,useRef:Yu,useState:function(){return Tl(Wt)},useDebugValue:Rl,useDeferredValue:function(e,t){var a=Be();return be===null?Nl(a,e,t):$u(a,be.memoizedState,e,t)},useTransition:function(){var e=Tl(Wt)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:hi(e),t]},useSyncExternalStore:Mu,useId:nd,useHostTransitionStatus:zl,useFormState:Gu,useActionState:Gu,useOptimistic:function(e,t){var a=Be();return be!==null?Bu(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Sl,useCacheRefresh:id};cd.useEffectEvent=Qu;function Ol(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ul={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=pt(),i=va(n);i.payload=t,a!=null&&(i.callback=a),t=ba(e,i,n),t!==null&&(rt(t,e,n),ci(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=pt(),i=va(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ba(e,i,n),t!==null&&(rt(t,e,n),ci(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),n=va(a);n.tag=2,t!=null&&(n.callback=t),t=ba(e,n,a),t!==null&&(rt(t,e,a),ci(t,e,a))}};function ud(e,t,a,n,i,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,l):t.prototype&&t.prototype.isPureReactComponent?!ti(a,n)||!ti(i,r):!0}function dd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ul.enqueueReplaceState(t,t.state,null)}function Za(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function fd(e){rr(e)}function hd(e){console.error(e)}function md(e){rr(e)}function Mr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function pd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ql(e,t,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Mr(e,t)},a}function gd(e){return e=va(e),e.tag=3,e}function yd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){pd(t,a,n)}}var l=a.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){pd(t,a,n),typeof i!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function xp(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&vn(t,a,i,!0),a=dt.current,a!==null){switch(a.tag){case 31:case 13:return Et===null?_r():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===pr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),oo(e,n,i)),!1;case 22:return a.flags|=65536,n===pr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),oo(e,n,i)),!1}throw Error(o(435,a.tag))}return oo(e,n,i),_r(),!1}if(ue)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==al&&(e=Error(o(422),{cause:n}),ii(wt(e,a)))):(n!==al&&(t=Error(o(423),{cause:n}),ii(wt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=wt(n,a),i=ql(e.stateNode,n,i),hl(e,i),Ne!==4&&(Ne=2)),!1;var r=Error(o(520),{cause:n});if(r=wt(r,a),Si===null?Si=[r]:Si.push(r),Ne!==4&&(Ne=2),t===null)return!0;n=wt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ql(a.stateNode,n,e),hl(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=gd(i),yd(i,e,a,n),hl(a,i),!1}a=a.return}while(a!==null);return!1}var Hl=Error(o(461)),He=!1;function Qe(e,t,a,n){t.child=e===null?Cu(t,null,a,n):Ka(t,e.child,a,n)}function vd(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var l={};for(var d in n)d!=="ref"&&(l[d]=n[d])}else l=n;return Xa(t),n=bl(e,t,a,l,r,i),d=xl(),e!==null&&!He?(Cl(e,t,i),$t(e,t,i)):(ue&&d&&el(t),t.flags|=1,Qe(e,t,n,i),t.child)}function bd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Zs(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,xd(e,t,r,n,i)):(e=cr(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ql(e,i)){var l=r.memoizedProps;if(a=a.compare,a=a!==null?a:ti,a(l,n)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=Jt(r,n),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(ti(r,n)&&e.ref===t.ref)if(He=!1,t.pendingProps=n=r,Ql(e,i))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,$t(e,t,i)}return Ll(e,t,a,n,i)}function Cd(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return wd(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hr(t,r!==null?r.cachePool:null),r!==null?ku(t,r):pl(),Tu(t);else return n=t.lanes=536870912,wd(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(hr(t,r.cachePool),ku(t,r),Ca(),t.memoizedState=null):(e!==null&&hr(t,null),pl(),Ca());return Qe(e,t,i,a),t.child}function gi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function wd(e,t,a,n,i){var r=cl();return r=r===null?null:{parent:Ue._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&hr(t,null),pl(),Tu(t),e!==null&&vn(e,t,n,!0),t.childLanes=i,null}function Rr(e,t){return t=Dr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sd(e,t,a){return Ka(t,e.child,null,a),e=Rr(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function Cp(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(n.mode==="hidden")return e=Rr(t,n),t.lanes=536870912,gi(null,e);if(yl(t),(e=ke)?(e=Uf(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:qt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=su(e),a.return=t,t.child=a,Ye=t,ke=null)):e=null,e===null)throw pa(t);return t.lanes=536870912,null}return Rr(t,n)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(yl(t),i)if(t.flags&256)t.flags&=-257,t=Sd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(He||vn(e,t,a,!1),i=(a&e.childLanes)!==0,He||i){if(n=Se,n!==null&&(l=hc(n,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Fa(e,l),rt(n,e,l),Hl;_r(),t=Sd(e,t,a)}else e=r.treeContext,ke=At(l.nextSibling),Ye=t,ue=!0,ma=null,Tt=!1,e!==null&&cu(t,e),t=Rr(t,n),t.flags|=4096;return t}return e=Jt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Nr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ll(e,t,a,n,i){return Xa(t),a=bl(e,t,a,n,void 0,i),n=xl(),e!==null&&!He?(Cl(e,t,i),$t(e,t,i)):(ue&&n&&el(t),t.flags|=1,Qe(e,t,a,i),t.child)}function kd(e,t,a,n,i,r){return Xa(t),t.updateQueue=null,a=Au(t,n,a,i),Eu(e),n=xl(),e!==null&&!He?(Cl(e,t,r),$t(e,t,r)):(ue&&n&&el(t),t.flags|=1,Qe(e,t,a,r),t.child)}function Td(e,t,a,n,i){if(Xa(t),t.stateNode===null){var r=mn,l=a.contextType;typeof l=="object"&&l!==null&&(r=Xe(l)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ul,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},dl(t),l=a.contextType,r.context=typeof l=="object"&&l!==null?Xe(l):mn,r.state=t.memoizedState,l=a.getDerivedStateFromProps,typeof l=="function"&&(Ol(t,a,l,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&Ul.enqueueReplaceState(r,r.state,null),di(t,n,r,i),ui(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var d=t.memoizedProps,p=Za(a,d);r.props=p;var k=r.context,N=a.contextType;l=mn,typeof N=="object"&&N!==null&&(l=Xe(N));var j=a.getDerivedStateFromProps;N=typeof j=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||k!==l)&&dd(t,r,n,l),ya=!1;var T=t.memoizedState;r.state=T,di(t,n,r,i),ui(),k=t.memoizedState,d||T!==k||ya?(typeof j=="function"&&(Ol(t,a,j,n),k=t.memoizedState),(p=ya||ud(t,a,p,n,T,k,l))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=k),r.props=n,r.state=k,r.context=l,n=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,fl(e,t),l=t.memoizedProps,N=Za(a,l),r.props=N,j=t.pendingProps,T=r.context,k=a.contextType,p=mn,typeof k=="object"&&k!==null&&(p=Xe(k)),d=a.getDerivedStateFromProps,(k=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==j||T!==p)&&dd(t,r,n,p),ya=!1,T=t.memoizedState,r.state=T,di(t,n,r,i),ui();var M=t.memoizedState;l!==j||T!==M||ya||e!==null&&e.dependencies!==null&&dr(e.dependencies)?(typeof d=="function"&&(Ol(t,a,d,n),M=t.memoizedState),(N=ya||ud(t,a,N,n,T,M,p)||e!==null&&e.dependencies!==null&&dr(e.dependencies))?(k||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,M,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,M,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),r.props=n,r.state=M,r.context=p,n=N):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Nr(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Ka(t,e.child,null,i),t.child=Ka(t,null,a,i)):Qe(e,t,a,i),t.memoizedState=r.state,e=t.child):e=$t(e,t,i),e}function Ed(e,t,a,n){return Ga(),t.flags|=256,Qe(e,t,a,n),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fl(e){return{baseLanes:e,cachePool:pu()}}function Il(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mt),e}function Ad(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),l&&(i=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(i?xa(t):Ca(),(e=ke)?(e=Uf(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:qt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=su(e),a.return=t,t.child=a,Ye=t,ke=null)):e=null,e===null)throw pa(t);return To(e)?t.lanes=32:t.lanes=536870912,null}var d=n.children;return n=n.fallback,i?(Ca(),i=t.mode,d=Dr({mode:"hidden",children:d},i),n=Ia(n,i,a,null),d.return=t,n.return=t,d.sibling=n,t.child=d,n=t.child,n.memoizedState=Fl(a),n.childLanes=Il(e,l,a),t.memoizedState=_l,gi(null,n)):(xa(t),Gl(t,d))}var p=e.memoizedState;if(p!==null&&(d=p.dehydrated,d!==null)){if(r)t.flags&256?(xa(t),t.flags&=-257,t=Yl(e,t,a)):t.memoizedState!==null?(Ca(),t.child=e.child,t.flags|=128,t=null):(Ca(),d=n.fallback,i=t.mode,n=Dr({mode:"visible",children:n.children},i),d=Ia(d,i,a,null),d.flags|=2,n.return=t,d.return=t,n.sibling=d,t.child=n,Ka(t,e.child,null,a),n=t.child,n.memoizedState=Fl(a),n.childLanes=Il(e,l,a),t.memoizedState=_l,t=gi(null,n));else if(xa(t),To(d)){if(l=d.nextSibling&&d.nextSibling.dataset,l)var k=l.dgst;l=k,n=Error(o(419)),n.stack="",n.digest=l,ii({value:n,source:null,stack:null}),t=Yl(e,t,a)}else if(He||vn(e,t,a,!1),l=(a&e.childLanes)!==0,He||l){if(l=Se,l!==null&&(n=hc(l,a),n!==0&&n!==p.retryLane))throw p.retryLane=n,Fa(e,n),rt(l,e,n),Hl;ko(d)||_r(),t=Yl(e,t,a)}else ko(d)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,ke=At(d.nextSibling),Ye=t,ue=!0,ma=null,Tt=!1,e!==null&&cu(t,e),t=Gl(t,n.children),t.flags|=4096);return t}return i?(Ca(),d=n.fallback,i=t.mode,p=e.child,k=p.sibling,n=Jt(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,k!==null?d=Jt(k,d):(d=Ia(d,i,a,null),d.flags|=2),d.return=t,n.return=t,n.sibling=d,t.child=n,gi(null,n),n=t.child,d=e.child.memoizedState,d===null?d=Fl(a):(i=d.cachePool,i!==null?(p=Ue._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=pu(),d={baseLanes:d.baseLanes|a,cachePool:i}),n.memoizedState=d,n.childLanes=Il(e,l,a),t.memoizedState=_l,gi(e.child,n)):(xa(t),a=e.child,e=a.sibling,a=Jt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=a,t.memoizedState=null,a)}function Gl(e,t){return t=Dr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dr(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function Yl(e,t,a){return Ka(t,e.child,null,a),e=Gl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Md(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),rl(e.return,t,a)}function Xl(e,t,a,n,i,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=a,l.tailMode=i,l.treeForkCount=r)}function Rd(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var l=je.current,d=(l&2)!==0;if(d?(l=l&1|2,t.flags|=128):l&=1,L(je,l),Qe(e,t,n,a),n=ue?ni:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Md(e,a,t);else if(e.tag===19)Md(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&br(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Xl(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&br(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Xl(t,!0,a,null,r,n);break;case"together":Xl(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function $t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(vn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Jt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Jt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ql(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dr(e)))}function wp(e,t,a){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),ga(t,Ue,e.memoizedState.cache),Ga();break;case 27:case 5:In(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yl(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ad(e,t,a):(xa(t),e=$t(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(vn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Rd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(je,je.current),n)break;return null;case 22:return t.lanes=0,Cd(e,t,a,t.pendingProps);case 24:ga(t,Ue,e.memoizedState.cache)}return $t(e,t,a)}function Nd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Ql(e,a)&&(t.flags&128)===0)return He=!1,wp(e,t,a);He=(e.flags&131072)!==0}else He=!1,ue&&(t.flags&1048576)!==0&&ou(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ja(t.elementType),t.type=e,typeof e=="function")Zs(e)?(n=Za(e,n),t.tag=1,t=Td(null,t,e,n,a)):(t.tag=0,t=Ll(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===V){t.tag=11,t=vd(null,t,e,n,a);break e}else if(i===P){t.tag=14,t=bd(null,t,e,n,a);break e}}throw t=vt(e)||e,Error(o(306,t,""))}}return t;case 0:return Ll(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Za(n,t.pendingProps),Td(e,t,n,i,a);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(o(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,fl(e,t),di(t,n,null,a);var l=t.memoizedState;if(n=l.cache,ga(t,Ue,n),n!==r.cache&&sl(t,[Ue],a,!0),ui(),n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Ed(e,t,n,a);break e}else if(n!==i){i=wt(Error(o(424)),t),ii(i),t=Ed(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=At(e.firstChild),Ye=t,ue=!0,ma=null,Tt=!0,a=Cu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ga(),n===i){t=$t(e,t,a);break e}Qe(e,t,n,a)}t=t.child}return t;case 26:return Nr(e,t),e===null?(a=If(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,n=Jr(ie.current).createElement(a),n[Ge]=t,n[$e]=e,Je(n,a,e),Fe(n),t.stateNode=n):t.memoizedState=If(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return In(t),e===null&&ue&&(n=t.stateNode=Lf(t.type,t.pendingProps,ie.current),Ye=t,Tt=!0,i=ke,Ra(t.type)?(Eo=i,ke=At(n.firstChild)):ke=i),Qe(e,t,t.pendingProps.children,a),Nr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((i=n=ke)&&(n=Wp(n,t.type,t.pendingProps,Tt),n!==null?(t.stateNode=n,Ye=t,ke=At(n.firstChild),Tt=!1,i=!0):i=!1),i||pa(t)),In(t),i=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,n=r.children,Co(i,r)?n=null:l!==null&&Co(i,l)&&(t.flags|=32),t.memoizedState!==null&&(i=bl(e,t,hp,null,null,a),Di._currentValue=i),Nr(e,t),Qe(e,t,n,a),t.child;case 6:return e===null&&ue&&((e=a=ke)&&(a=$p(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ye=t,ke=null,e=!0):e=!1),e||pa(t)),null;case 13:return Ad(e,t,a);case 4:return Ze(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ka(t,null,n,a):Qe(e,t,n,a),t.child;case 11:return vd(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ga(t,t.type,n.value),Qe(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Xa(t),i=Xe(i),n=n(i),t.flags|=1,Qe(e,t,n,a),t.child;case 14:return bd(e,t,t.type,t.pendingProps,a);case 15:return xd(e,t,t.type,t.pendingProps,a);case 19:return Rd(e,t,a);case 31:return Cp(e,t,a);case 22:return Cd(e,t,a,t.pendingProps);case 24:return Xa(t),n=Xe(Ue),e===null?(i=cl(),i===null&&(i=Se,r=ll(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},dl(t),ga(t,Ue,i)):((e.lanes&a)!==0&&(fl(e,t),di(t,null,null,a),ui()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ga(t,Ue,n)):(n=r.cache,ga(t,Ue,n),n!==i.cache&&sl(t,[Ue],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ea(e){e.flags|=4}function Jl(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(nf())e.flags|=8192;else throw Va=pr,ul}else e.flags&=-16777217}function Dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t))if(nf())e.flags|=8192;else throw Va=pr,ul}function zr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?uc():536870912,e.lanes|=t,Nn|=t)}function yi(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Sp(e,t,a){var n=t.pendingProps;switch(tl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pt(Ue),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yn(t)?ea(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nl())),Te(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(ea(t),r!==null?(Te(t),Dd(t,r)):(Te(t),Jl(t,i,null,n,a))):r?r!==e.memoizedState?(ea(t),Te(t),Dd(t,r)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ea(t),Te(t),Jl(t,i,e,n,a)),null;case 27:if(Gi(t),a=ie.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Te(t),null}e=Y.current,yn(t)?uu(t):(e=Lf(i,n,a),t.stateNode=e,ea(t))}return Te(t),null;case 5:if(Gi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Te(t),null}if(r=Y.current,yn(t))uu(t);else{var l=Jr(ie.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?l.createElement(i,{is:n.is}):l.createElement(i)}}r[Ge]=t,r[$e]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=r;e:switch(Je(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ea(t)}}return Te(t),Jl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=ie.current,yn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Ye,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Mf(e.nodeValue,a)),e||pa(t,!0)}else e=Jr(e).createTextNode(n),e[Ge]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=yn(t),a!==null){if(e===null){if(!n)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Ge]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=nl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Te(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=yn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Ge]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else i=nl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zr(t,t.updateQueue),Te(t),null);case 4:return ze(),e===null&&go(t.stateNode.containerInfo),Te(t),null;case 10:return Pt(t.type),Te(t),null;case 19:if(B(je),n=t.memoizedState,n===null)return Te(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)yi(n,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=br(e),r!==null){for(t.flags|=128,yi(n,!1),e=r.updateQueue,t.updateQueue=e,zr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ru(a,e),a=a.sibling;return L(je,je.current&1|2),ue&&Vt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&st()>qr&&(t.flags|=128,i=!0,yi(n,!1),t.lanes=4194304)}else{if(!i)if(e=br(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zr(t,e),yi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ue)return Te(t),null}else 2*st()-n.renderingStartTime>qr&&a!==536870912&&(t.flags|=128,i=!0,yi(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=st(),e.sibling=null,a=je.current,L(je,i?a&1|2:a&1),ue&&Vt(t,n.treeForkCount),e):(Te(t),null);case 22:case 23:return ft(t),gl(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&zr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&B(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pt(Ue),Te(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function kp(e,t){switch(tl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(Ue),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gi(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(o(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(je),null;case 4:return ze(),null;case 10:return Pt(t.type),null;case 22:case 23:return ft(t),gl(),e!==null&&B(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(Ue),null;case 25:return null;default:return null}}function zd(e,t){switch(tl(t),t.tag){case 3:Pt(Ue),ze();break;case 26:case 27:case 5:Gi(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:B(je);break;case 10:Pt(t.type);break;case 22:case 23:ft(t),gl(),e!==null&&B(Qa);break;case 24:Pt(Ue)}}function vi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,l=a.inst;n=r(),l.destroy=n}a=a.next}while(a!==i)}}catch(d){ge(t,t.return,d)}}function wa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var l=n.inst,d=l.destroy;if(d!==void 0){l.destroy=void 0,i=t;var p=a,k=d;try{k()}catch(N){ge(i,p,N)}}}n=n.next}while(n!==r)}}catch(N){ge(t,t.return,N)}}function jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Su(t,a)}catch(n){ge(e,e.return,n)}}}function Bd(e,t,a){a.props=Za(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ge(e,t,n)}}function bi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ge(e,t,i)}}function Lt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ge(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ge(e,t,i)}else a.current=null}function Od(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ge(e,e.return,i)}}function Vl(e,t,a){try{var n=e.stateNode;Qp(n,e.type,a,t),n[$e]=t}catch(i){ge(e,e.return,i)}}function Ud(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Kl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xt));else if(n!==4&&(n===27&&Ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Pl(e,t,a),e=e.sibling;e!==null;)Pl(e,t,a),e=e.sibling}function jr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jr(e,t,a),e=e.sibling;e!==null;)jr(e,t,a),e=e.sibling}function qd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Je(t,n,a),t[Ge]=e,t[$e]=a}catch(r){ge(e,e.return,r)}}var ta=!1,Le=!1,Zl=!1,Hd=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Tp(e,t){if(e=e.containerInfo,bo=es,e=Pc(e),Ys(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var l=0,d=-1,p=-1,k=0,N=0,j=e,T=null;t:for(;;){for(var M;j!==a||i!==0&&j.nodeType!==3||(d=l+i),j!==r||n!==0&&j.nodeType!==3||(p=l+n),j.nodeType===3&&(l+=j.nodeValue.length),(M=j.firstChild)!==null;)T=j,j=M;for(;;){if(j===e)break t;if(T===a&&++k===i&&(d=l),T===r&&++N===n&&(p=l),(M=j.nextSibling)!==null)break;j=T,T=j.parentNode}j=M}a=d===-1||p===-1?null:{start:d,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(xo={focusedElem:e,selectionRange:a},es=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var I=Za(a.type,i);e=n.getSnapshotBeforeUpdate(I,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ge(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)So(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":So(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function Ld(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),n&4&&vi(5,a);break;case 1:if(na(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(l){ge(a,a.return,l)}else{var i=Za(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){ge(a,a.return,l)}}n&64&&jd(a),n&512&&bi(a,a.return);break;case 3:if(na(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Su(e,t)}catch(l){ge(a,a.return,l)}}break;case 27:t===null&&n&4&&qd(a);case 26:case 5:na(e,a),t===null&&n&4&&Od(a),n&512&&bi(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),n&4&&Id(e,a);break;case 13:na(e,a),n&4&&Gd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bp.bind(null,a),eg(e,a))));break;case 22:if(n=a.memoizedState!==null||ta,!n){t=t!==null&&t.memoizedState!==null||Le,i=ta;var r=Le;ta=n,(Le=t)&&!r?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ta=i,Le=r}break;case 30:break;default:na(e,a)}}function _d(e){var t=e.alternate;t!==null&&(e.alternate=null,_d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&As(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,tt=!1;function aa(e,t,a){for(a=a.child;a!==null;)Fd(e,t,a),a=a.sibling}function Fd(e,t,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Gn,a)}catch{}switch(a.tag){case 26:Le||Lt(a,t),aa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Lt(a,t);var n=Ee,i=tt;Ra(a.type)&&(Ee=a.stateNode,tt=!1),aa(e,t,a),Mi(a.stateNode),Ee=n,tt=i;break;case 5:Le||Lt(a,t);case 6:if(n=Ee,i=tt,Ee=null,aa(e,t,a),Ee=n,tt=i,Ee!==null)if(tt)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(a.stateNode)}catch(r){ge(a,t,r)}else try{Ee.removeChild(a.stateNode)}catch(r){ge(a,t,r)}break;case 18:Ee!==null&&(tt?(e=Ee,Bf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hn(e)):Bf(Ee,a.stateNode));break;case 4:n=Ee,i=tt,Ee=a.stateNode.containerInfo,tt=!0,aa(e,t,a),Ee=n,tt=i;break;case 0:case 11:case 14:case 15:wa(2,a,t),Le||wa(4,a,t),aa(e,t,a);break;case 1:Le||(Lt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Bd(a,t,n)),aa(e,t,a);break;case 21:aa(e,t,a);break;case 22:Le=(n=Le)||a.memoizedState!==null,aa(e,t,a),Le=n;break;default:aa(e,t,a)}}function Id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hn(e)}catch(a){ge(t,t.return,a)}}}function Gd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hn(e)}catch(a){ge(t,t.return,a)}}function Ep(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hd),t;default:throw Error(o(435,e.tag))}}function Br(e,t){var a=Ep(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=Op.bind(null,e,n);n.then(i,i)}})}function at(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,l=t,d=l;e:for(;d!==null;){switch(d.tag){case 27:if(Ra(d.type)){Ee=d.stateNode,tt=!1;break e}break;case 5:Ee=d.stateNode,tt=!1;break e;case 3:case 4:Ee=d.stateNode.containerInfo,tt=!0;break e}d=d.return}if(Ee===null)throw Error(o(160));Fd(r,l,i),Ee=null,tt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}var Dt=null;function Yd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),nt(e),n&4&&(wa(3,e,e.return),vi(3,e),wa(5,e,e.return));break;case 1:at(t,e),nt(e),n&512&&(Le||a===null||Lt(a,a.return)),n&64&&ta&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Dt;if(at(t,e),nt(e),n&512&&(Le||a===null||Lt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Qn]||r[Ge]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),Je(r,n,a),r[Ge]=e,Fe(r),n=r;break e;case"link":var l=Xf("link","href",i).get(n+(a.href||""));if(l){for(var d=0;d<l.length;d++)if(r=l[d],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){l.splice(d,1);break t}}r=i.createElement(n),Je(r,n,a),i.head.appendChild(r);break;case"meta":if(l=Xf("meta","content",i).get(n+(a.content||""))){for(d=0;d<l.length;d++)if(r=l[d],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){l.splice(d,1);break t}}r=i.createElement(n),Je(r,n,a),i.head.appendChild(r);break;default:throw Error(o(468,n))}r[Ge]=e,Fe(r),n=r}e.stateNode=n}else Qf(i,e.type,e.stateNode);else e.stateNode=Yf(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Qf(i,e.type,e.stateNode):Yf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Vl(e,e.memoizedProps,a.memoizedProps)}break;case 27:at(t,e),nt(e),n&512&&(Le||a===null||Lt(a,a.return)),a!==null&&n&4&&Vl(e,e.memoizedProps,a.memoizedProps);break;case 5:if(at(t,e),nt(e),n&512&&(Le||a===null||Lt(a,a.return)),e.flags&32){i=e.stateNode;try{ln(i,"")}catch(I){ge(e,e.return,I)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Vl(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Zl=!0);break;case 6:if(at(t,e),nt(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(I){ge(e,e.return,I)}}break;case 3:if(Pr=null,i=Dt,Dt=Vr(t.containerInfo),at(t,e),Dt=i,nt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(I){ge(e,e.return,I)}Zl&&(Zl=!1,Xd(e));break;case 4:n=Dt,Dt=Vr(e.stateNode.containerInfo),at(t,e),nt(e),Dt=n;break;case 12:at(t,e),nt(e);break;case 31:at(t,e),nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Br(e,n)));break;case 13:at(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ur=st()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Br(e,n)));break;case 22:i=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,k=ta,N=Le;if(ta=k||i,Le=N||p,at(t,e),Le=N,ta=k,nt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||p||ta||Le||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(r=p.stateNode,i)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{d=p.stateNode;var j=p.memoizedProps.style,T=j!=null&&j.hasOwnProperty("display")?j.display:null;d.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(I){ge(p,p.return,I)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(I){ge(p,p.return,I)}}}else if(t.tag===18){if(a===null){p=t;try{var M=p.stateNode;i?Of(M,!0):Of(p.stateNode,!1)}catch(I){ge(p,p.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Br(e,a))));break;case 19:at(t,e),nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Br(e,n)));break;case 30:break;case 21:break;default:at(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Ud(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,r=Kl(e);jr(e,r,i);break;case 5:var l=a.stateNode;a.flags&32&&(ln(l,""),a.flags&=-33);var d=Kl(e);jr(e,d,l);break;case 3:case 4:var p=a.stateNode.containerInfo,k=Kl(e);Pl(e,k,p);break;default:throw Error(o(161))}}catch(N){ge(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ld(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wa(4,t,t.return),Wa(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Bd(t,t.return,a),Wa(t);break;case 27:Mi(t.stateNode);case 26:case 5:Lt(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,l=r.flags;switch(r.tag){case 0:case 11:case 15:ia(i,r,a),vi(4,r);break;case 1:if(ia(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(k){ge(n,n.return,k)}if(n=r,i=n.updateQueue,i!==null){var d=n.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)wu(p[i],d)}catch(k){ge(n,n.return,k)}}a&&l&64&&jd(r),bi(r,r.return);break;case 27:qd(r);case 26:case 5:ia(i,r,a),a&&n===null&&l&4&&Od(r),bi(r,r.return);break;case 12:ia(i,r,a);break;case 31:ia(i,r,a),a&&l&4&&Id(i,r);break;case 13:ia(i,r,a),a&&l&4&&Gd(i,r);break;case 22:r.memoizedState===null&&ia(i,r,a),bi(r,r.return);break;case 30:break;default:ia(i,r,a)}t=t.sibling}}function Wl(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ri(a))}function $l(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ri(e))}function zt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qd(e,t,a,n),t=t.sibling}function Qd(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,n),i&2048&&vi(9,t);break;case 1:zt(e,t,a,n);break;case 3:zt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ri(e)));break;case 12:if(i&2048){zt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,l=r.id,d=r.onPostCommit;typeof d=="function"&&d(l,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ge(t,t.return,p)}}else zt(e,t,a,n);break;case 31:zt(e,t,a,n);break;case 13:zt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,l=t.alternate,t.memoizedState!==null?r._visibility&2?zt(e,t,a,n):xi(e,t):r._visibility&2?zt(e,t,a,n):(r._visibility|=2,An(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Wl(l,t);break;case 24:zt(e,t,a,n),i&2048&&$l(t.alternate,t);break;default:zt(e,t,a,n)}}function An(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,l=t,d=a,p=n,k=l.flags;switch(l.tag){case 0:case 11:case 15:An(r,l,d,p,i),vi(8,l);break;case 23:break;case 22:var N=l.stateNode;l.memoizedState!==null?N._visibility&2?An(r,l,d,p,i):xi(r,l):(N._visibility|=2,An(r,l,d,p,i)),i&&k&2048&&Wl(l.alternate,l);break;case 24:An(r,l,d,p,i),i&&k&2048&&$l(l.alternate,l);break;default:An(r,l,d,p,i)}t=t.sibling}}function xi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:xi(a,n),i&2048&&Wl(n.alternate,n);break;case 24:xi(a,n),i&2048&&$l(n.alternate,n);break;default:xi(a,n)}t=t.sibling}}var Ci=8192;function Mn(e,t,a){if(e.subtreeFlags&Ci)for(e=e.child;e!==null;)Jd(e,t,a),e=e.sibling}function Jd(e,t,a){switch(e.tag){case 26:Mn(e,t,a),e.flags&Ci&&e.memoizedState!==null&&fg(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,t,a);break;case 3:case 4:var n=Dt;Dt=Vr(e.stateNode.containerInfo),Mn(e,t,a),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ci,Ci=16777216,Mn(e,t,a),Ci=n):Mn(e,t,a));break;default:Mn(e,t,a)}}function Vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ie=n,Pd(n,e)}Vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kd(e),e=e.sibling}function Kd(e){switch(e.tag){case 0:case 11:case 15:wi(e),e.flags&2048&&wa(9,e,e.return);break;case 3:wi(e);break;case 12:wi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Or(e)):wi(e);break;default:wi(e)}}function Or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ie=n,Pd(n,e)}Vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wa(8,t,t.return),Or(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Or(t));break;default:Or(t)}e=e.sibling}}function Pd(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:wa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ri(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ie=n;else e:for(a=e;Ie!==null;){n=Ie;var i=n.sibling,r=n.return;if(_d(n),n===a){Ie=null;break e}if(i!==null){i.return=r,Ie=i;break e}Ie=r}}}var Ap={getCacheForType:function(e){var t=Xe(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(Ue).controller.signal}},Mp=typeof WeakMap=="function"?WeakMap:Map,he=0,Se=null,re=null,le=0,pe=0,ht=null,Sa=!1,Rn=!1,eo=!1,ra=0,Ne=0,ka=0,$a=0,to=0,mt=0,Nn=0,Si=null,it=null,ao=!1,Ur=0,Zd=0,qr=1/0,Hr=null,Ta=null,_e=0,Ea=null,Dn=null,sa=0,no=0,io=null,Wd=null,ki=0,ro=null;function pt(){return(he&2)!==0&&le!==0?le&-le:D.T!==null?fo():mc()}function $d(){if(mt===0)if((le&536870912)===0||ue){var e=Qi;Qi<<=1,(Qi&3932160)===0&&(Qi=262144),mt=e}else mt=536870912;return e=dt.current,e!==null&&(e.flags|=32),mt}function rt(e,t,a){(e===Se&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(zn(e,0),Aa(e,le,mt,!1)),Xn(e,a),((he&2)===0||e!==Se)&&(e===Se&&((he&2)===0&&($a|=a),Ne===4&&Aa(e,le,mt,!1)),_t(e))}function ef(e,t,a){if((he&6)!==0)throw Error(o(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Yn(e,t),i=n?Dp(e,t):lo(e,t,!0),r=n;do{if(i===0){Rn&&!n&&Aa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Rp(a)){i=lo(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var d=e;i=Si;var p=d.current.memoizedState.isDehydrated;if(p&&(zn(d,l).flags|=256),l=lo(d,l,!1),l!==2){if(eo&&!p){d.errorRecoveryDisabledLanes|=r,$a|=r,i=4;break e}r=it,it=i,r!==null&&(it===null?it=r:it.push.apply(it,r))}i=l}if(r=!1,i!==2)continue}}if(i===1){zn(e,0),Aa(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Aa(n,t,mt,!Sa);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Ur+300-st(),10<i)){if(Aa(n,t,mt,!Sa),Vi(n,0,!0)!==0)break e;sa=t,n.timeoutHandle=zf(tf.bind(null,n,a,it,Hr,ao,t,mt,$a,Nn,Sa,r,"Throttled",-0,0),i);break e}tf(n,a,it,Hr,ao,t,mt,$a,Nn,Sa,r,null,-0,0)}}break}while(!0);_t(e)}function tf(e,t,a,n,i,r,l,d,p,k,N,j,T,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Jd(t,r,j);var I=(r&62914560)===r?Ur-st():(r&4194048)===r?Zd-st():0;if(I=hg(j,I),I!==null){sa=r,e.cancelPendingCommit=I(uf.bind(null,e,t,r,a,n,i,l,d,p,N,j,null,T,M)),Aa(e,r,l,!k);return}}uf(e,t,r,a,n,i,l,d,p)}function Rp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!ct(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Aa(e,t,a,n){t&=~to,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-ot(i),l=1<<r;n[r]=-1,i&=~l}a!==0&&dc(e,a,t)}function Lr(){return(he&6)===0?(Ti(0),!1):!0}function so(){if(re!==null){if(pe===0)var e=re.return;else e=re,Kt=Ya=null,wl(e),wn=null,li=0,e=re;for(;e!==null;)zd(e.alternate,e),e=e.return;re=null}}function zn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Kp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,so(),Se=e,re=a=Jt(e.current,null),le=t,pe=0,ht=null,Sa=!1,Rn=Yn(e,t),eo=!1,Nn=mt=to=$a=ka=Ne=0,it=Si=null,ao=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ot(n),r=1<<i;t|=e[i],n&=~r}return ra=t,sr(),a}function af(e,t){ae=null,D.H=pi,t===Cn||t===mr?(t=vu(),pe=3):t===ul?(t=vu(),pe=4):pe=t===Hl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,re===null&&(Ne=1,Mr(e,wt(t,e.current)))}function nf(){var e=dt.current;return e===null?!0:(le&4194048)===le?Et===null:(le&62914560)===le||(le&536870912)!==0?e===Et:!1}function rf(){var e=D.H;return D.H=pi,e===null?pi:e}function sf(){var e=D.A;return D.A=Ap,e}function _r(){Ne=4,Sa||(le&4194048)!==le&&dt.current!==null||(Rn=!0),(ka&134217727)===0&&($a&134217727)===0||Se===null||Aa(Se,le,mt,!1)}function lo(e,t,a){var n=he;he|=2;var i=rf(),r=sf();(Se!==e||le!==t)&&(Hr=null,zn(e,t)),t=!1;var l=Ne;e:do try{if(pe!==0&&re!==null){var d=re,p=ht;switch(pe){case 8:so(),l=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var k=pe;if(pe=0,ht=null,jn(e,d,p,k),a&&Rn){l=0;break e}break;default:k=pe,pe=0,ht=null,jn(e,d,p,k)}}Np(),l=Ne;break}catch(N){af(e,N)}while(!0);return t&&e.shellSuspendCounter++,Kt=Ya=null,he=n,D.H=i,D.A=r,re===null&&(Se=null,le=0,sr()),l}function Np(){for(;re!==null;)lf(re)}function Dp(e,t){var a=he;he|=2;var n=rf(),i=sf();Se!==e||le!==t?(Hr=null,qr=st()+500,zn(e,t)):Rn=Yn(e,t);e:do try{if(pe!==0&&re!==null){t=re;var r=ht;t:switch(pe){case 1:pe=0,ht=null,jn(e,t,r,1);break;case 2:case 9:if(gu(r)){pe=0,ht=null,of(t);break}t=function(){pe!==2&&pe!==9||Se!==e||(pe=7),_t(e)},r.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:gu(r)?(pe=0,ht=null,of(t)):(pe=0,ht=null,jn(e,t,r,7));break;case 5:var l=null;switch(re.tag){case 26:l=re.memoizedState;case 5:case 27:var d=re;if(l?Jf(l):d.stateNode.complete){pe=0,ht=null;var p=d.sibling;if(p!==null)re=p;else{var k=d.return;k!==null?(re=k,Fr(k)):re=null}break t}}pe=0,ht=null,jn(e,t,r,5);break;case 6:pe=0,ht=null,jn(e,t,r,6);break;case 8:so(),Ne=6;break e;default:throw Error(o(462))}}zp();break}catch(N){af(e,N)}while(!0);return Kt=Ya=null,D.H=n,D.A=i,he=a,re!==null?0:(Se=null,le=0,sr(),Ne)}function zp(){for(;re!==null&&!tm();)lf(re)}function lf(e){var t=Nd(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Fr(e):re=t}function of(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=kd(a,t,t.pendingProps,t.type,void 0,le);break;case 11:t=kd(a,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:wl(t);default:zd(a,t),t=re=ru(t,ra),t=Nd(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Fr(e):re=t}function jn(e,t,a,n){Kt=Ya=null,wl(t),wn=null,li=0;var i=t.return;try{if(xp(e,i,t,a,le)){Ne=1,Mr(e,wt(a,e.current)),re=null;return}}catch(r){if(i!==null)throw re=i,r;Ne=1,Mr(e,wt(a,e.current)),re=null;return}t.flags&32768?(ue||n===1?e=!0:Rn||(le&536870912)!==0?e=!1:(Sa=e=!0,(n===2||n===9||n===3||n===6)&&(n=dt.current,n!==null&&n.tag===13&&(n.flags|=16384))),cf(t,e)):Fr(t)}function Fr(e){var t=e;do{if((t.flags&32768)!==0){cf(t,Sa);return}e=t.return;var a=Sp(t.alternate,t,ra);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ne===0&&(Ne=5)}function cf(e,t){do{var a=kp(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Ne=6,re=null}function uf(e,t,a,n,i,r,l,d,p){e.cancelPendingCommit=null;do Ir();while(_e!==0);if((he&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=Ks,dm(e,a,r,l,d,p),e===Se&&(re=Se=null,le=0),Dn=t,Ea=e,sa=a,no=r,io=i,Wd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Up(Yi,function(){return pf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=H.p,H.p=2,l=he,he|=4;try{Tp(e,t,a)}finally{he=l,H.p=i,D.T=n}}_e=1,df(),ff(),hf()}}function df(){if(_e===1){_e=0;var e=Ea,t=Dn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=H.p;H.p=2;var i=he;he|=4;try{Yd(t,e);var r=xo,l=Pc(e.containerInfo),d=r.focusedElem,p=r.selectionRange;if(l!==d&&d&&d.ownerDocument&&Kc(d.ownerDocument.documentElement,d)){if(p!==null&&Ys(d)){var k=p.start,N=p.end;if(N===void 0&&(N=k),"selectionStart"in d)d.selectionStart=k,d.selectionEnd=Math.min(N,d.value.length);else{var j=d.ownerDocument||document,T=j&&j.defaultView||window;if(T.getSelection){var M=T.getSelection(),I=d.textContent.length,Z=Math.min(p.start,I),Ce=p.end===void 0?Z:Math.min(p.end,I);!M.extend&&Z>Ce&&(l=Ce,Ce=Z,Z=l);var C=Vc(d,Z),v=Vc(d,Ce);if(C&&v&&(M.rangeCount!==1||M.anchorNode!==C.node||M.anchorOffset!==C.offset||M.focusNode!==v.node||M.focusOffset!==v.offset)){var S=j.createRange();S.setStart(C.node,C.offset),M.removeAllRanges(),Z>Ce?(M.addRange(S),M.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),M.addRange(S))}}}}for(j=[],M=d;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<j.length;d++){var z=j[d];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}es=!!bo,xo=bo=null}finally{he=i,H.p=n,D.T=a}}e.current=t,_e=2}}function ff(){if(_e===2){_e=0;var e=Ea,t=Dn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=H.p;H.p=2;var i=he;he|=4;try{Ld(e,t.alternate,t)}finally{he=i,H.p=n,D.T=a}}_e=3}}function hf(){if(_e===4||_e===3){_e=0,am();var e=Ea,t=Dn,a=sa,n=Wd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_e=5:(_e=0,Dn=Ea=null,mf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ta=null),Ts(a),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Gn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,i=H.p,H.p=2,D.T=null;try{for(var r=e.onRecoverableError,l=0;l<n.length;l++){var d=n[l];r(d.value,{componentStack:d.stack})}}finally{D.T=t,H.p=i}}(sa&3)!==0&&Ir(),_t(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===ro?ki++:(ki=0,ro=e):ki=0,Ti(0)}}function mf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ri(t)))}function Ir(){return df(),ff(),hf(),pf()}function pf(){if(_e!==5)return!1;var e=Ea,t=no;no=0;var a=Ts(sa),n=D.T,i=H.p;try{H.p=32>a?32:a,D.T=null,a=io,io=null;var r=Ea,l=sa;if(_e=0,Dn=Ea=null,sa=0,(he&6)!==0)throw Error(o(331));var d=he;if(he|=4,Kd(r.current),Qd(r,r.current,l,a),he=d,Ti(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Gn,r)}catch{}return!0}finally{H.p=i,D.T=n,mf(e,t)}}function gf(e,t,a){t=wt(a,t),t=ql(e.stateNode,t,2),e=ba(e,t,2),e!==null&&(Xn(e,2),_t(e))}function ge(e,t,a){if(e.tag===3)gf(e,e,a);else for(;t!==null;){if(t.tag===3){gf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ta===null||!Ta.has(n))){e=wt(a,e),a=gd(2),n=ba(t,a,2),n!==null&&(yd(a,n,t,e),Xn(n,2),_t(n));break}}t=t.return}}function oo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Mp;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(eo=!0,i.add(a),e=jp.bind(null,e,t,a),t.then(e,e))}function jp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(le&a)===a&&(Ne===4||Ne===3&&(le&62914560)===le&&300>st()-Ur?(he&2)===0&&zn(e,0):to|=a,Nn===le&&(Nn=0)),_t(e)}function yf(e,t){t===0&&(t=uc()),e=Fa(e,t),e!==null&&(Xn(e,t),_t(e))}function Bp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),yf(e,a)}function Op(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),yf(e,a)}function Up(e,t){return Cs(e,t)}var Gr=null,Bn=null,co=!1,Yr=!1,uo=!1,Ma=0;function _t(e){e!==Bn&&e.next===null&&(Bn===null?Gr=Bn=e:Bn=Bn.next=e),Yr=!0,co||(co=!0,Hp())}function Ti(e,t){if(!uo&&Yr){uo=!0;do for(var a=!1,n=Gr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var l=n.suspendedLanes,d=n.pingedLanes;r=(1<<31-ot(42|e)+1)-1,r&=i&~(l&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Cf(n,r))}else r=le,r=Vi(n,n===Se?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Yn(n,r)||(a=!0,Cf(n,r));n=n.next}while(a);uo=!1}}function qp(){vf()}function vf(){Yr=co=!1;var e=0;Ma!==0&&Vp()&&(e=Ma);for(var t=st(),a=null,n=Gr;n!==null;){var i=n.next,r=bf(n,t);r===0?(n.next=null,a===null?Gr=i:a.next=i,i===null&&(Bn=a)):(a=n,(e!==0||(r&3)!==0)&&(Yr=!0)),n=i}_e!==0&&_e!==5||Ti(e),Ma!==0&&(Ma=0)}function bf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-ot(r),d=1<<l,p=i[l];p===-1?((d&a)===0||(d&n)!==0)&&(i[l]=um(d,t)):p<=t&&(e.expiredLanes|=d),r&=~d}if(t=Se,a=le,a=Vi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ws(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ws(n),Ts(a)){case 2:case 8:a=oc;break;case 32:a=Yi;break;case 268435456:a=cc;break;default:a=Yi}return n=xf.bind(null,e),a=Cs(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ws(n),e.callbackPriority=2,e.callbackNode=null,2}function xf(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ir()&&e.callbackNode!==a)return null;var n=le;return n=Vi(e,e===Se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(ef(e,n,t),bf(e,st()),e.callbackNode!=null&&e.callbackNode===a?xf.bind(null,e):null)}function Cf(e,t){if(Ir())return null;ef(e,t,!0)}function Hp(){Pp(function(){(he&6)!==0?Cs(lc,qp):vf()})}function fo(){if(Ma===0){var e=bn;e===0&&(e=Xi,Xi<<=1,(Xi&261888)===0&&(Xi=256)),Ma=e}return Ma}function wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wi(""+e)}function Sf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Lp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=wf((i[$e]||null).action),l=n.submitter;l&&(t=(t=l[$e]||null)?wf(t.formAction):l.getAttribute("formAction"),t!==null&&(r=t,l=null));var d=new ar("action","action",null,n,i);e.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ma!==0){var p=l?Sf(i,l):new FormData(i);Dl(a,{pending:!0,data:p,method:i.method,action:r},null,p)}}else typeof r=="function"&&(d.preventDefault(),p=l?Sf(i,l):new FormData(i),Dl(a,{pending:!0,data:p,method:i.method,action:r},r,p))},currentTarget:i}]})}}for(var ho=0;ho<Vs.length;ho++){var mo=Vs[ho],_p=mo.toLowerCase(),Fp=mo[0].toUpperCase()+mo.slice(1);Nt(_p,"on"+Fp)}Nt($c,"onAnimationEnd"),Nt(eu,"onAnimationIteration"),Nt(tu,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(np,"onTransitionRun"),Nt(ip,"onTransitionStart"),Nt(rp,"onTransitionCancel"),Nt(au,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function kf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var l=n.length-1;0<=l;l--){var d=n[l],p=d.instance,k=d.currentTarget;if(d=d.listener,p!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=k;try{r(i)}catch(N){rr(N)}i.currentTarget=null,r=p}else for(l=0;l<n.length;l++){if(d=n[l],p=d.instance,k=d.currentTarget,d=d.listener,p!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=k;try{r(i)}catch(N){rr(N)}i.currentTarget=null,r=p}}}}function se(e,t){var a=t[Es];a===void 0&&(a=t[Es]=new Set);var n=e+"__bubble";a.has(n)||(Tf(t,e,2,!1),a.add(n))}function po(e,t,a){var n=0;t&&(n|=4),Tf(a,e,n,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function go(e){if(!e[Xr]){e[Xr]=!0,yc.forEach(function(a){a!=="selectionchange"&&(Ip.has(a)||po(a,!1,e),po(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,po("selectionchange",!1,t))}}function Tf(e,t,a,n){switch(eh(t)){case 2:var i=gg;break;case 8:i=yg;break;default:i=Do}a=i.bind(null,t,a,e),i=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function yo(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var d=n.stateNode.containerInfo;if(d===i)break;if(l===4)for(l=n.return;l!==null;){var p=l.tag;if((p===3||p===4)&&l.stateNode.containerInfo===i)return;l=l.return}for(;d!==null;){if(l=tn(d),l===null)return;if(p=l.tag,p===5||p===6||p===26||p===27){n=r=l;continue e}d=d.parentNode}}n=n.return}Rc(function(){var k=r,N=js(a),j=[];e:{var T=nu.get(e);if(T!==void 0){var M=ar,I=e;switch(e){case"keypress":if(er(a)===0)break e;case"keydown":case"keyup":M=Om;break;case"focusin":I="focus",M=Ls;break;case"focusout":I="blur",M=Ls;break;case"beforeblur":case"afterblur":M=Ls;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Hm;break;case $c:case eu:case tu:M=Em;break;case au:M=_m;break;case"scroll":case"scrollend":M=Cm;break;case"wheel":M=Im;break;case"copy":case"cut":case"paste":M=Mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Bc;break;case"toggle":case"beforetoggle":M=Ym}var Z=(t&4)!==0,Ce=!Z&&(e==="scroll"||e==="scrollend"),C=Z?T!==null?T+"Capture":null:T;Z=[];for(var v=k,S;v!==null;){var z=v;if(S=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||S===null||C===null||(z=Vn(v,C),z!=null&&Z.push(Ai(v,z,S))),Ce)break;v=v.return}0<Z.length&&(T=new M(T,I,null,a,N),j.push({event:T,listeners:Z}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&a!==zs&&(I=a.relatedTarget||a.fromElement)&&(tn(I)||I[en]))break e;if((M||T)&&(T=N.window===N?N:(T=N.ownerDocument)?T.defaultView||T.parentWindow:window,M?(I=a.relatedTarget||a.toElement,M=k,I=I?tn(I):null,I!==null&&(Ce=m(I),Z=I.tag,I!==Ce||Z!==5&&Z!==27&&Z!==6)&&(I=null)):(M=null,I=k),M!==I)){if(Z=zc,z="onMouseLeave",C="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Bc,z="onPointerLeave",C="onPointerEnter",v="pointer"),Ce=M==null?T:Jn(M),S=I==null?T:Jn(I),T=new Z(z,v+"leave",M,a,N),T.target=Ce,T.relatedTarget=S,z=null,tn(N)===k&&(Z=new Z(C,v+"enter",I,a,N),Z.target=S,Z.relatedTarget=Ce,z=Z),Ce=z,M&&I)t:{for(Z=Gp,C=M,v=I,S=0,z=C;z;z=Z(z))S++;z=0;for(var K=v;K;K=Z(K))z++;for(;0<S-z;)C=Z(C),S--;for(;0<z-S;)v=Z(v),z--;for(;S--;){if(C===v||v!==null&&C===v.alternate){Z=C;break t}C=Z(C),v=Z(v)}Z=null}else Z=null;M!==null&&Ef(j,T,M,Z,!1),I!==null&&Ce!==null&&Ef(j,Ce,I,Z,!0)}}e:{if(T=k?Jn(k):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var de=Ic;else if(_c(T))if(Gc)de=ep;else{de=Wm;var X=Zm}else M=T.nodeName,!M||M.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?k&&Ds(k.elementType)&&(de=Ic):de=$m;if(de&&(de=de(e,k))){Fc(j,de,a,N);break e}X&&X(e,T,k),e==="focusout"&&k&&T.type==="number"&&k.memoizedProps.value!=null&&Ns(T,"number",T.value)}switch(X=k?Jn(k):window,e){case"focusin":(_c(X)||X.contentEditable==="true")&&(dn=X,Xs=k,ai=null);break;case"focusout":ai=Xs=dn=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Zc(j,a,N);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":Zc(j,a,N)}var ne;if(Fs)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else un?Hc(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Oc&&a.locale!=="ko"&&(un||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&un&&(ne=Nc()):(fa=N,Us="value"in fa?fa.value:fa.textContent,un=!0)),X=Qr(k,oe),0<X.length&&(oe=new jc(oe,e,null,a,N),j.push({event:oe,listeners:X}),ne?oe.data=ne:(ne=Lc(a),ne!==null&&(oe.data=ne)))),(ne=Qm?Jm(e,a):Vm(e,a))&&(oe=Qr(k,"onBeforeInput"),0<oe.length&&(X=new jc("onBeforeInput","beforeinput",null,a,N),j.push({event:X,listeners:oe}),X.data=ne)),Lp(j,e,k,a,N)}kf(j,t)})}function Ai(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Qr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Vn(e,a),i!=null&&n.unshift(Ai(e,i,r)),i=Vn(e,t),i!=null&&n.push(Ai(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Gp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ef(e,t,a,n,i){for(var r=t._reactName,l=[];a!==null&&a!==n;){var d=a,p=d.alternate,k=d.stateNode;if(d=d.tag,p!==null&&p===n)break;d!==5&&d!==26&&d!==27||k===null||(p=k,i?(k=Vn(a,r),k!=null&&l.unshift(Ai(a,k,p))):i||(k=Vn(a,r),k!=null&&l.push(Ai(a,k,p)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var Yp=/\r\n?/g,Xp=/\u0000|\uFFFD/g;function Af(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Xp,"")}function Mf(e,t){return t=Af(t),Af(e)===t}function xe(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||ln(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&ln(e,""+n);break;case"className":Pi(e,"class",n);break;case"tabIndex":Pi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Pi(e,a,n);break;case"style":Ac(e,n,r);break;case"data":if(t!=="object"){Pi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Wi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",i.name,i,null),xe(e,t,"formEncType",i.formEncType,i,null),xe(e,t,"formMethod",i.formMethod,i,null),xe(e,t,"formTarget",i.formTarget,i,null)):(xe(e,t,"encType",i.encType,i,null),xe(e,t,"method",i.method,i,null),xe(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Wi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Wi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":se("beforetoggle",e),se("toggle",e),Ki(e,"popover",n);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ki(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bm.get(a)||a,Ki(e,a,n))}}function vo(e,t,a,n,i,r){switch(a){case"style":Ac(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?ln(e,n):(typeof n=="number"||typeof n=="bigint")&&ln(e,""+n);break;case"onScroll":n!=null&&se("scroll",e);break;case"onScrollEnd":n!=null&&se("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[$e]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ki(e,a,n)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];if(l!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,r,l,a,null)}}i&&xe(e,t,"srcSet",a.srcSet,a,null),n&&xe(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var d=r=l=i=null,p=null,k=null;for(n in a)if(a.hasOwnProperty(n)){var N=a[n];if(N!=null)switch(n){case"name":i=N;break;case"type":l=N;break;case"checked":p=N;break;case"defaultChecked":k=N;break;case"value":r=N;break;case"defaultValue":d=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:xe(e,t,n,N,a,null)}}Sc(e,r,d,p,k,l,i,!1);return;case"select":se("invalid",e),n=l=r=null;for(i in a)if(a.hasOwnProperty(i)&&(d=a[i],d!=null))switch(i){case"value":r=d;break;case"defaultValue":l=d;break;case"multiple":n=d;default:xe(e,t,i,d,a,null)}t=r,a=l,e.multiple=!!n,t!=null?sn(e,!!n,t,!1):a!=null&&sn(e,!!n,a,!0);return;case"textarea":se("invalid",e),r=i=n=null;for(l in a)if(a.hasOwnProperty(l)&&(d=a[l],d!=null))switch(l){case"value":n=d;break;case"defaultValue":i=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:xe(e,t,l,d,a,null)}Tc(e,n,i,r);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:xe(e,t,p,n,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(n=0;n<Ei.length;n++)se(Ei[n],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(n=a[k],n!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,k,n,a,null)}return;default:if(Ds(t)){for(N in a)a.hasOwnProperty(N)&&(n=a[N],n!==void 0&&vo(e,t,N,n,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null&&xe(e,t,d,n,a,null))}function Qp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,l=null,d=null,p=null,k=null,N=null;for(M in a){var j=a[M];if(a.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":p=j;default:n.hasOwnProperty(M)||xe(e,t,M,null,n,j)}}for(var T in n){var M=n[T];if(j=a[T],n.hasOwnProperty(T)&&(M!=null||j!=null))switch(T){case"type":r=M;break;case"name":i=M;break;case"checked":k=M;break;case"defaultChecked":N=M;break;case"value":l=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:M!==j&&xe(e,t,T,M,n,j)}}Rs(e,l,d,p,k,N,r,i);return;case"select":M=l=d=T=null;for(r in a)if(p=a[r],a.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":M=p;default:n.hasOwnProperty(r)||xe(e,t,r,null,n,p)}for(i in n)if(r=n[i],p=a[i],n.hasOwnProperty(i)&&(r!=null||p!=null))switch(i){case"value":T=r;break;case"defaultValue":d=r;break;case"multiple":l=r;default:r!==p&&xe(e,t,i,r,n,p)}t=d,a=l,n=M,T!=null?sn(e,!!a,T,!1):!!n!=!!a&&(t!=null?sn(e,!!a,t,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":M=T=null;for(d in a)if(i=a[d],a.hasOwnProperty(d)&&i!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:xe(e,t,d,null,n,i)}for(l in n)if(i=n[l],r=a[l],n.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":T=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==r&&xe(e,t,l,i,n,r)}kc(e,T,M);return;case"option":for(var I in a)if(T=a[I],a.hasOwnProperty(I)&&T!=null&&!n.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:xe(e,t,I,null,n,T)}for(p in n)if(T=n[p],M=a[p],n.hasOwnProperty(p)&&T!==M&&(T!=null||M!=null))switch(p){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:xe(e,t,p,T,n,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)T=a[Z],a.hasOwnProperty(Z)&&T!=null&&!n.hasOwnProperty(Z)&&xe(e,t,Z,null,n,T);for(k in n)if(T=n[k],M=a[k],n.hasOwnProperty(k)&&T!==M&&(T!=null||M!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:xe(e,t,k,T,n,M)}return;default:if(Ds(t)){for(var Ce in a)T=a[Ce],a.hasOwnProperty(Ce)&&T!==void 0&&!n.hasOwnProperty(Ce)&&vo(e,t,Ce,void 0,n,T);for(N in n)T=n[N],M=a[N],!n.hasOwnProperty(N)||T===M||T===void 0&&M===void 0||vo(e,t,N,T,n,M);return}}for(var C in a)T=a[C],a.hasOwnProperty(C)&&T!=null&&!n.hasOwnProperty(C)&&xe(e,t,C,null,n,T);for(j in n)T=n[j],M=a[j],!n.hasOwnProperty(j)||T===M||T==null&&M==null||xe(e,t,j,T,n,M)}function Rf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,l=i.initiatorType,d=i.duration;if(r&&d&&Rf(l)){for(l=0,d=i.responseEnd,n+=1;n<a.length;n++){var p=a[n],k=p.startTime;if(k>d)break;var N=p.transferSize,j=p.initiatorType;N&&Rf(j)&&(p=p.responseEnd,l+=N*(p<d?1:(d-k)/(p-k)))}if(--n,t+=8*(r+l)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bo=null,xo=null;function Jr(e){return e.nodeType===9?e:e.ownerDocument}function Nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Df(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Co(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=null;function Vp(){var e=window.event;return e&&e.type==="popstate"?e===wo?!1:(wo=e,!0):(wo=null,!1)}var zf=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Pp=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Zp)}:zf;function Zp(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Bf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Hn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mi(a);for(var r=a.firstChild;r;){var l=r.nextSibling,d=r.nodeName;r[Qn]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=l}}else a==="body"&&Mi(e.ownerDocument.body);a=i}while(a);Hn(t)}function Of(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function So(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":So(a),As(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wp(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function $p(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=At(e.nextSibling),e===null))return null;return e}function Uf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function ko(e){return e.data==="$?"||e.data==="$~"}function To(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function eg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Eo=null;function qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return At(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Lf(e,t,a){switch(t=Jr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);As(e)}var Mt=new Map,_f=new Set;function Vr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=H.d;H.d={f:tg,r:ag,D:ng,C:ig,L:rg,m:sg,X:og,S:lg,M:cg};function tg(){var e=la.f(),t=Lr();return e||t}function ag(e){var t=an(e);t!==null&&t.tag===5&&t.type==="form"?ad(t):la.r(e)}var On=typeof document>"u"?null:document;function Ff(e,t,a){var n=On;if(n&&typeof t=="string"&&t){var i=xt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),_f.has(i)||(_f.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Je(t,"link",e),Fe(t),n.head.appendChild(t)))}}function ng(e){la.D(e),Ff("dns-prefetch",e,null)}function ig(e,t){la.C(e,t),Ff("preconnect",e,t)}function rg(e,t,a){la.L(e,t,a);var n=On;if(n&&e&&t){var i='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+xt(a.imageSizes)+'"]')):i+='[href="'+xt(e)+'"]';var r=i;switch(t){case"style":r=Un(e);break;case"script":r=qn(e)}Mt.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Ri(r))||t==="script"&&n.querySelector(Ni(r))||(t=n.createElement("link"),Je(t,"link",e),Fe(t),n.head.appendChild(t)))}}function sg(e,t){la.m(e,t);var a=On;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+xt(n)+'"][href="'+xt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=qn(e)}if(!Mt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Mt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ni(r)))return}n=a.createElement("link"),Je(n,"link",e),Fe(n),a.head.appendChild(n)}}}function lg(e,t,a){la.S(e,t,a);var n=On;if(n&&e){var i=nn(n).hoistableStyles,r=Un(e);t=t||"default";var l=i.get(r);if(!l){var d={loading:0,preload:null};if(l=n.querySelector(Ri(r)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(r))&&Ao(e,a);var p=l=n.createElement("link");Fe(p),Je(p,"link",e),p._p=new Promise(function(k,N){p.onload=k,p.onerror=N}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Kr(l,t,n)}l={type:"stylesheet",instance:l,count:1,state:d},i.set(r,l)}}}function og(e,t){la.X(e,t);var a=On;if(a&&e){var n=nn(a).hoistableScripts,i=qn(e),r=n.get(i);r||(r=a.querySelector(Ni(i)),r||(e=E({src:e,async:!0},t),(t=Mt.get(i))&&Mo(e,t),r=a.createElement("script"),Fe(r),Je(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function cg(e,t){la.M(e,t);var a=On;if(a&&e){var n=nn(a).hoistableScripts,i=qn(e),r=n.get(i);r||(r=a.querySelector(Ni(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&Mo(e,t),r=a.createElement("script"),Fe(r),Je(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function If(e,t,a,n){var i=(i=ie.current)?Vr(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Un(a.href),a=nn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Un(a.href);var r=nn(i).hoistableStyles,l=r.get(e);if(l||(i=i.ownerDocument||i,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=i.querySelector(Ri(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),r||ug(i,e,a,l.state))),t&&n===null)throw Error(o(528,""));return l}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qn(a),a=nn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Un(e){return'href="'+xt(e)+'"'}function Ri(e){return'link[rel="stylesheet"]['+e+"]"}function Gf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function ug(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Je(t,"link",a),Fe(t),e.head.appendChild(t))}function qn(e){return'[src="'+xt(e)+'"]'}function Ni(e){return"script[async]"+e}function Yf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(n)return t.instance=n,Fe(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),Je(n,"style",i),Kr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Un(a.href);var r=e.querySelector(Ri(i));if(r)return t.state.loading|=4,t.instance=r,Fe(r),r;n=Gf(a),(i=Mt.get(i))&&Ao(n,i),r=(e.ownerDocument||e).createElement("link"),Fe(r);var l=r;return l._p=new Promise(function(d,p){l.onload=d,l.onerror=p}),Je(r,"link",n),t.state.loading|=4,Kr(r,a.precedence,e),t.instance=r;case"script":return r=qn(a.src),(i=e.querySelector(Ni(r)))?(t.instance=i,Fe(i),i):(n=a,(i=Mt.get(r))&&(n=E({},a),Mo(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Fe(i),Je(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Kr(n,a.precedence,e));return t.instance}function Kr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,l=0;l<n.length;l++){var d=n[l];if(d.dataset.precedence===t)r=d;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ao(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pr=null;function Xf(e,t,a){if(Pr===null){var n=new Map,i=Pr=new Map;i.set(a,n)}else i=Pr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Qn]||r[Ge]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(t)||"";l=e+l;var d=n.get(l);d?d.push(r):n.set(l,[r])}}return n}function Qf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function dg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Jf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fg(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Un(n.href),r=t.querySelector(Ri(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Fe(r);return}r=t.ownerDocument||t,n=Gf(n),(i=Mt.get(i))&&Ao(n,i),r=r.createElement("link"),Fe(r);var l=r;l._p=new Promise(function(d,p){l.onload=d,l.onerror=p}),Je(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ro=0;function hg(e,t){return e.stylesheets&&e.count===0&&$r(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ro===0&&(Ro=62500*Jp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ro?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Zr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$r(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wr=null;function $r(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wr=new Map,t.forEach(mg,e),Wr=null,Zr.call(e))}function mg(e,t){if(!(t.state.loading&4)){var a=Wr.get(e);if(a)var n=a.get(null);else{a=new Map,Wr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var l=i[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(a.set(l.dataset.precedence,l),n=l)}n&&a.set(null,n)}i=t.instance,l=i.getAttribute("data-precedence"),r=a.get(l)||n,r===n&&a.set(null,i),a.set(l,i),this.count++,n=Zr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Di={$$typeof:O,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function pg(e,t,a,n,i,r,l,d,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Vf(e,t,a,n,i,r,l,d,p,k,N,j){return e=new pg(e,t,a,l,p,k,N,j,d),t=1,r===!0&&(t|=24),r=ut(3,null,null,t),e.current=r,r.stateNode=e,t=ll(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},dl(r),e}function Kf(e){return e?(e=mn,e):mn}function Pf(e,t,a,n,i,r){i=Kf(i),n.context===null?n.context=i:n.pendingContext=i,n=va(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ba(e,n,t),a!==null&&(rt(a,e,t),ci(a,e,t))}function Zf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function No(e,t){Zf(e,t),(e=e.alternate)&&Zf(e,t)}function Wf(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&rt(t,e,67108864),No(e,67108864)}}function $f(e){if(e.tag===13||e.tag===31){var t=pt();t=ks(t);var a=Fa(e,t);a!==null&&rt(a,e,t),No(e,t)}}var es=!0;function gg(e,t,a,n){var i=D.T;D.T=null;var r=H.p;try{H.p=2,Do(e,t,a,n)}finally{H.p=r,D.T=i}}function yg(e,t,a,n){var i=D.T;D.T=null;var r=H.p;try{H.p=8,Do(e,t,a,n)}finally{H.p=r,D.T=i}}function Do(e,t,a,n){if(es){var i=zo(n);if(i===null)yo(e,t,n,ts,a),th(e,n);else if(bg(i,e,t,a,n))n.stopPropagation();else if(th(e,n),t&4&&-1<vg.indexOf(e)){for(;i!==null;){var r=an(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Ua(r.pendingLanes);if(l!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;l;){var p=1<<31-ot(l);d.entanglements[1]|=p,l&=~p}_t(r),(he&6)===0&&(qr=st()+500,Ti(0))}}break;case 31:case 13:d=Fa(r,2),d!==null&&rt(d,r,2),Lr(),No(r,2)}if(r=zo(n),r===null&&yo(e,t,n,ts,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else yo(e,t,n,null,a)}}function zo(e){return e=js(e),jo(e)}var ts=null;function jo(e){if(ts=null,e=tn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ts=e,null}function eh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nm()){case lc:return 2;case oc:return 8;case Yi:case im:return 32;case cc:return 268435456;default:return 32}default:return 32}}var Bo=!1,Na=null,Da=null,za=null,zi=new Map,ji=new Map,ja=[],vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function th(e,t){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function Bi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=an(t),t!==null&&Wf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bg(e,t,a,n,i){switch(t){case"focusin":return Na=Bi(Na,e,t,a,n,i),!0;case"dragenter":return Da=Bi(Da,e,t,a,n,i),!0;case"mouseover":return za=Bi(za,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return zi.set(r,Bi(zi.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,ji.set(r,Bi(ji.get(r)||null,e,t,a,n,i)),!0}return!1}function ah(e){var t=tn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,pc(e.priority,function(){$f(a)});return}}else if(t===31){if(t=w(a),t!==null){e.blockedOn=t,pc(e.priority,function(){$f(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=zo(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);zs=n,a.target.dispatchEvent(n),zs=null}else return t=an(a),t!==null&&Wf(t),e.blockedOn=a,!1;t.shift()}return!0}function nh(e,t,a){as(e)&&a.delete(t)}function xg(){Bo=!1,Na!==null&&as(Na)&&(Na=null),Da!==null&&as(Da)&&(Da=null),za!==null&&as(za)&&(za=null),zi.forEach(nh),ji.forEach(nh)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,xg)))}var is=null;function ih(e){is!==e&&(is=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){is===e&&(is=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(jo(n||a)===null)continue;break}var r=an(a);r!==null&&(e.splice(t,3),t-=3,Dl(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Hn(e){function t(p){return ns(p,e)}Na!==null&&ns(Na,e),Da!==null&&ns(Da,e),za!==null&&ns(za,e),zi.forEach(t),ji.forEach(t);for(var a=0;a<ja.length;a++){var n=ja[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)ah(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],l=i[$e]||null;if(typeof r=="function")l||ih(a);else if(l){var d=null;if(r&&r.hasAttribute("formAction")){if(i=r,l=r[$e]||null)d=l.formAction;else if(jo(i)!==null)continue}else d=l.action;typeof d=="function"?a[n+1]=d:(a.splice(n,3),n-=3),ih(a)}}}function rh(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return i=l})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Oo(e){this._internalRoot=e}rs.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=pt();Pf(a,n,e,t,null,null)},rs.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pf(e.current,2,null,e,null,null),Lr(),t[en]=null}};function rs(e){this._internalRoot=e}rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=mc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ja.length&&t!==0&&t<ja[a].priority;a++);ja.splice(a,0,e),a===0&&ah(e)}};var sh=u.version;if(sh!=="19.2.5")throw Error(o(527,sh,"19.2.5"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var Cg={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Gn=ss.inject(Cg),lt=ss}catch{}}return Ui.createRoot=function(e,t){if(!h(e))throw Error(o(299));var a=!1,n="",i=fd,r=hd,l=md;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vf(e,1,!1,null,null,a,n,null,i,r,l,rh),e[en]=t.current,go(e),new Oo(t)},Ui.hydrateRoot=function(e,t,a){if(!h(e))throw Error(o(299));var n=!1,i="",r=fd,l=hd,d=md,p=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Vf(e,1,!0,t,a??null,n,i,p,r,l,d,rh),t.context=Kf(null),a=t.current,n=pt(),n=ks(n),i=va(n),i.callback=null,ba(a,i,n),a=n,t.current.lanes=a,Xn(t,a),_t(t),e[en]=t.current,go(e),new rs(t)},Ui.version="19.2.5",Ui}var gh;function Dg(){if(gh)return Ho.exports;gh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),Ho.exports=Ng(),Ho.exports}var zg=Dg();/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var yh="popstate";function vh(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function jg(s={}){function u(o,h){var g;let m=(g=h.state)==null?void 0:g.masked,{pathname:b,search:w,hash:y}=m||o.location;return Xo("",{pathname:b,search:w,hash:y},h.state&&h.state.usr||null,h.state&&h.state.key||"default",m?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function f(o,h){return typeof h=="string"?h:Li(h)}return Og(u,f,null,s)}function Me(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function It(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Bg(){return Math.random().toString(36).substring(2,10)}function bh(s,u){return{usr:s.state,key:s.key,idx:u,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Xo(s,u,f=null,o,h){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof u=="string"?_n(u):u,state:f,key:u&&u.key||o||Bg(),unstable_mask:h}}function Li({pathname:s="/",search:u="",hash:f=""}){return u&&u!=="?"&&(s+=u.charAt(0)==="?"?u:"?"+u),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function _n(s){let u={};if(s){let f=s.indexOf("#");f>=0&&(u.hash=s.substring(f),s=s.substring(0,f));let o=s.indexOf("?");o>=0&&(u.search=s.substring(o),s=s.substring(0,o)),s&&(u.pathname=s)}return u}function Og(s,u,f,o={}){let{window:h=document.defaultView,v5Compat:m=!1}=o,b=h.history,w="POP",y=null,g=R();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function R(){return(b.state||{idx:null}).idx}function E(){w="POP";let _=R(),q=_==null?null:_-g;g=_,y&&y({action:w,location:F.location,delta:q})}function U(_,q){w="PUSH";let G=vh(_)?_:Xo(F.location,_,q);g=R()+1;let O=bh(G,g),V=F.createHref(G.unstable_mask||G);try{b.pushState(O,"",V)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;h.location.assign(V)}m&&y&&y({action:w,location:F.location,delta:1})}function J(_,q){w="REPLACE";let G=vh(_)?_:Xo(F.location,_,q);g=R();let O=bh(G,g),V=F.createHref(G.unstable_mask||G);b.replaceState(O,"",V),m&&y&&y({action:w,location:F.location,delta:0})}function Q(_){return Ug(_)}let F={get action(){return w},get location(){return s(h,b)},listen(_){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(yh,E),y=_,()=>{h.removeEventListener(yh,E),y=null}},createHref(_){return u(h,_)},createURL:Q,encodeLocation(_){let q=Q(_);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:U,replace:J,go(_){return b.go(_)}};return F}function Ug(s,u=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Me(f,"No window.location.(origin|href) available to create URL");let o=typeof s=="string"?s:Li(s);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=f+o),new URL(o,f)}function Rh(s,u,f="/"){return qg(s,u,f,!1)}function qg(s,u,f,o){let h=typeof u=="string"?_n(u):u,m=ca(h.pathname||"/",f);if(m==null)return null;let b=Nh(s);Hg(b);let w=null;for(let y=0;w==null&&y<b.length;++y){let g=Kg(m);w=Jg(b[y],g,o)}return w}function Nh(s,u=[],f=[],o="",h=!1){let m=(b,w,y=h,g)=>{let R={relativePath:g===void 0?b.path||"":g,caseSensitive:b.caseSensitive===!0,childrenIndex:w,route:b};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(o)&&y)return;Me(R.relativePath.startsWith(o),`Absolute route path "${R.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(o.length)}let E=jt([o,R.relativePath]),U=f.concat(R);b.children&&b.children.length>0&&(Me(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Nh(b.children,u,U,E,y)),!(b.path==null&&!b.index)&&u.push({path:E,score:Xg(E,b.index),routesMeta:U})};return s.forEach((b,w)=>{var y;if(b.path===""||!((y=b.path)!=null&&y.includes("?")))m(b,w);else for(let g of Dh(b.path))m(b,w,!0,g)}),u}function Dh(s){let u=s.split("/");if(u.length===0)return[];let[f,...o]=u,h=f.endsWith("?"),m=f.replace(/\?$/,"");if(o.length===0)return h?[m,""]:[m];let b=Dh(o.join("/")),w=[];return w.push(...b.map(y=>y===""?m:[m,y].join("/"))),h&&w.push(...b),w.map(y=>s.startsWith("/")&&y===""?"/":y)}function Hg(s){s.sort((u,f)=>u.score!==f.score?f.score-u.score:Qg(u.routesMeta.map(o=>o.childrenIndex),f.routesMeta.map(o=>o.childrenIndex)))}var Lg=/^:[\w-]+$/,_g=3,Fg=2,Ig=1,Gg=10,Yg=-2,xh=s=>s==="*";function Xg(s,u){let f=s.split("/"),o=f.length;return f.some(xh)&&(o+=Yg),u&&(o+=Fg),f.filter(h=>!xh(h)).reduce((h,m)=>h+(Lg.test(m)?_g:m===""?Ig:Gg),o)}function Qg(s,u){return s.length===u.length&&s.slice(0,-1).every((o,h)=>o===u[h])?s[s.length-1]-u[u.length-1]:0}function Jg(s,u,f=!1){let{routesMeta:o}=s,h={},m="/",b=[];for(let w=0;w<o.length;++w){let y=o[w],g=w===o.length-1,R=m==="/"?u:u.slice(m.length)||"/",E=fs({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},R),U=y.route;if(!E&&g&&f&&!o[o.length-1].route.index&&(E=fs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},R)),!E)return null;Object.assign(h,E.params),b.push({params:h,pathname:jt([m,E.pathname]),pathnameBase:$g(jt([m,E.pathnameBase])),route:U}),E.pathnameBase!=="/"&&(m=jt([m,E.pathnameBase]))}return b}function fs(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,o]=Vg(s.path,s.caseSensitive,s.end),h=u.match(f);if(!h)return null;let m=h[0],b=m.replace(/(.)\/+$/,"$1"),w=h.slice(1);return{params:o.reduce((g,{paramName:R,isOptional:E},U)=>{if(R==="*"){let Q=w[U]||"";b=m.slice(0,m.length-Q.length).replace(/(.)\/+$/,"$1")}const J=w[U];return E&&!J?g[R]=void 0:g[R]=(J||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:b,pattern:s}}function Vg(s,u=!1,f=!0){It(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let o=[],h="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,w,y,g,R)=>{if(o.push({paramName:w,isOptional:y!=null}),y){let E=R.charAt(g+b.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(o.push({paramName:"*"}),h+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?h+="\\/*$":s!==""&&s!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,u?void 0:"i"),o]}function Kg(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return It(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),s}}function ca(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let f=u.endsWith("/")?u.length-1:u.length,o=s.charAt(f);return o&&o!=="/"?null:s.slice(f)||"/"}var Pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Zg(s,u="/"){let{pathname:f,search:o="",hash:h=""}=typeof s=="string"?_n(s):s,m;return f?(f=jh(f),f.startsWith("/")?m=Ch(f.substring(1),"/"):m=Ch(f,u)):m=u,{pathname:m,search:ey(o),hash:ty(h)}}function Ch(s,u){let f=hs(u).split("/");return s.split("/").forEach(h=>{h===".."?f.length>1&&f.pop():h!=="."&&f.push(h)}),f.length>1?f.join("/"):"/"}function Io(s,u,f,o){return`Cannot include a '${s}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wg(s){return s.filter((u,f)=>f===0||u.route.path&&u.route.path.length>0)}function zh(s){let u=Wg(s);return u.map((f,o)=>o===u.length-1?f.pathname:f.pathnameBase)}function Po(s,u,f,o=!1){let h;typeof s=="string"?h=_n(s):(h={...s},Me(!h.pathname||!h.pathname.includes("?"),Io("?","pathname","search",h)),Me(!h.pathname||!h.pathname.includes("#"),Io("#","pathname","hash",h)),Me(!h.search||!h.search.includes("#"),Io("#","search","hash",h)));let m=s===""||h.pathname==="",b=m?"/":h.pathname,w;if(b==null)w=f;else{let E=u.length-1;if(!o&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),E-=1;h.pathname=U.join("/")}w=E>=0?u[E]:"/"}let y=Zg(h,w),g=b&&b!=="/"&&b.endsWith("/"),R=(m||b===".")&&f.endsWith("/");return!y.pathname.endsWith("/")&&(g||R)&&(y.pathname+="/"),y}var jh=s=>s.replace(/\/\/+/g,"/"),jt=s=>jh(s.join("/")),hs=s=>s.replace(/\/+$/,""),$g=s=>hs(s).replace(/^\/*/,"/"),ey=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ty=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,ay=class{constructor(s,u,f,o=!1){this.status=s,this.statusText=u||"",this.internal=o,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function ny(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function iy(s){let u=s.map(f=>f.route.path).filter(Boolean);return jt(u)||"/"}var Bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Oh(s,u){let f=s;if(typeof f!="string"||!Pg.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let o=f,h=!1;if(Bh)try{let m=new URL(window.location.href),b=f.startsWith("//")?new URL(m.protocol+f):new URL(f),w=ca(b.pathname,u);b.origin===m.origin&&w!=null?f=w+b.search+b.hash:h=!0}catch{It(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:h,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Uh=["POST","PUT","PATCH","DELETE"];new Set(Uh);var ry=["GET",...Uh];new Set(ry);var Fn=A.createContext(null);Fn.displayName="DataRouter";var ps=A.createContext(null);ps.displayName="DataRouterState";var qh=A.createContext(!1);function sy(){return A.useContext(qh)}var Hh=A.createContext({isTransitioning:!1});Hh.displayName="ViewTransition";var ly=A.createContext(new Map);ly.displayName="Fetchers";var oy=A.createContext(null);oy.displayName="Await";var Rt=A.createContext(null);Rt.displayName="Navigation";var _i=A.createContext(null);_i.displayName="Location";var Bt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Zo=A.createContext(null);Zo.displayName="RouteError";var Lh="REACT_ROUTER_ERROR",cy="REDIRECT",uy="ROUTE_ERROR_RESPONSE";function dy(s){if(s.startsWith(`${Lh}:${cy}:{`))try{let u=JSON.parse(s.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function fy(s){if(s.startsWith(`${Lh}:${uy}:{`))try{let u=JSON.parse(s.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new ay(u.status,u.statusText,u.data)}catch{}}function hy(s,{relative:u}={}){Me(Fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:o}=A.useContext(Rt),{hash:h,pathname:m,search:b}=Ii(s,{relative:u}),w=m;return f!=="/"&&(w=m==="/"?f:jt([f,m])),o.createHref({pathname:w,search:b,hash:h})}function Fi(){return A.useContext(_i)!=null}function Gt(){return Me(Fi(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(_i).location}var _h="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fh(s){A.useContext(Rt).static||A.useLayoutEffect(s)}function Ih(){let{isDataRoute:s}=A.useContext(Bt);return s?My():my()}function my(){Me(Fi(),"useNavigate() may be used only in the context of a <Router> component.");let s=A.useContext(Fn),{basename:u,navigator:f}=A.useContext(Rt),{matches:o}=A.useContext(Bt),{pathname:h}=Gt(),m=JSON.stringify(zh(o)),b=A.useRef(!1);return Fh(()=>{b.current=!0}),A.useCallback((y,g={})=>{if(It(b.current,_h),!b.current)return;if(typeof y=="number"){f.go(y);return}let R=Po(y,JSON.parse(m),h,g.relative==="path");s==null&&u!=="/"&&(R.pathname=R.pathname==="/"?u:jt([u,R.pathname])),(g.replace?f.replace:f.push)(R,g.state,g)},[u,f,m,h,s])}var py=A.createContext(null);function gy(s){let u=A.useContext(Bt).outlet;return A.useMemo(()=>u&&A.createElement(py.Provider,{value:s},u),[u,s])}function Gh(){let{matches:s}=A.useContext(Bt),u=s[s.length-1];return(u==null?void 0:u.params)??{}}function Ii(s,{relative:u}={}){let{matches:f}=A.useContext(Bt),{pathname:o}=Gt(),h=JSON.stringify(zh(f));return A.useMemo(()=>Po(s,JSON.parse(h),o,u==="path"),[s,h,o,u])}function yy(s,u){return Yh(s,u)}function Yh(s,u,f){var _;Me(Fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=A.useContext(Rt),{matches:h}=A.useContext(Bt),m=h[h.length-1],b=m?m.params:{},w=m?m.pathname:"/",y=m?m.pathnameBase:"/",g=m&&m.route;{let q=g&&g.path||"";Qh(w,!g||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let R=Gt(),E;if(u){let q=typeof u=="string"?_n(u):u;Me(y==="/"||((_=q.pathname)==null?void 0:_.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),E=q}else E=R;let U=E.pathname||"/",J=U;if(y!=="/"){let q=y.replace(/^\//,"").split("/");J="/"+U.replace(/^\//,"").split("/").slice(q.length).join("/")}let Q=Rh(s,{pathname:J});It(g||Q!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),It(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=wy(Q&&Q.map(q=>Object.assign({},q,{params:Object.assign({},b,q.params),pathname:jt([y,o.encodeLocation?o.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:jt([y,o.encodeLocation?o.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),h,f);return u&&F?A.createElement(_i.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},F):F}function vy(){let s=Ay(),u=ny(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},m={padding:"2px 4px",backgroundColor:o},b=null;return console.error("Error handled by React Router default ErrorBoundary:",s),b=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:m},"ErrorBoundary")," or"," ",A.createElement("code",{style:m},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},u),f?A.createElement("pre",{style:h},f):null,b)}var by=A.createElement(vy,null),Xh=class extends A.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,u){return u.location!==s.location||u.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:u.error,location:u.location,revalidation:s.revalidation||u.revalidation}}componentDidCatch(s,u){this.props.onError?this.props.onError(s,u):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const f=fy(s.digest);f&&(s=f)}let u=s!==void 0?A.createElement(Bt.Provider,{value:this.props.routeContext},A.createElement(Zo.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?A.createElement(xy,{error:s},u):u}};Xh.contextType=qh;var Go=new WeakMap;function xy({children:s,error:u}){let{basename:f}=A.useContext(Rt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=dy(u.digest);if(o){let h=Go.get(u);if(h)throw h;let m=Oh(o.location,f);if(Bh&&!Go.get(u))if(m.isExternal||o.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const b=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:o.replace}));throw Go.set(u,b),b}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return s}function Cy({routeContext:s,match:u,children:f}){let o=A.useContext(Fn);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),A.createElement(Bt.Provider,{value:s},f)}function wy(s,u=[],f){let o=f==null?void 0:f.state;if(s==null){if(!o)return null;if(o.errors)s=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let h=s,m=o==null?void 0:o.errors;if(m!=null){let R=h.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);Me(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),h=h.slice(0,Math.min(h.length,R+1))}let b=!1,w=-1;if(f&&o){b=o.renderFallback;for(let R=0;R<h.length;R++){let E=h[R];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(w=R),E.route.id){let{loaderData:U,errors:J}=o,Q=E.route.loader&&!U.hasOwnProperty(E.route.id)&&(!J||J[E.route.id]===void 0);if(E.route.lazy||Q){f.isStatic&&(b=!0),w>=0?h=h.slice(0,w+1):h=[h[0]];break}}}}let y=f==null?void 0:f.onError,g=o&&y?(R,E)=>{var U,J;y(R,{location:o.location,params:((J=(U=o.matches)==null?void 0:U[0])==null?void 0:J.params)??{},unstable_pattern:iy(o.matches),errorInfo:E})}:void 0;return h.reduceRight((R,E,U)=>{let J,Q=!1,F=null,_=null;o&&(J=m&&E.route.id?m[E.route.id]:void 0,F=E.route.errorElement||by,b&&(w<0&&U===0?(Qh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,_=null):w===U&&(Q=!0,_=E.route.hydrateFallbackElement||null)));let q=u.concat(h.slice(0,U+1)),G=()=>{let O;return J?O=F:Q?O=_:E.route.Component?O=A.createElement(E.route.Component,null):E.route.element?O=E.route.element:O=R,A.createElement(Cy,{match:E,routeContext:{outlet:R,matches:q,isDataRoute:o!=null},children:O})};return o&&(E.route.ErrorBoundary||E.route.errorElement||U===0)?A.createElement(Xh,{location:o.location,revalidation:o.revalidation,component:F,error:J,children:G(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:g}):G()},null)}function Wo(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sy(s){let u=A.useContext(Fn);return Me(u,Wo(s)),u}function ky(s){let u=A.useContext(ps);return Me(u,Wo(s)),u}function Ty(s){let u=A.useContext(Bt);return Me(u,Wo(s)),u}function $o(s){let u=Ty(s),f=u.matches[u.matches.length-1];return Me(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function Ey(){return $o("useRouteId")}function Ay(){var o;let s=A.useContext(Zo),u=ky("useRouteError"),f=$o("useRouteError");return s!==void 0?s:(o=u.errors)==null?void 0:o[f]}function My(){let{router:s}=Sy("useNavigate"),u=$o("useNavigate"),f=A.useRef(!1);return Fh(()=>{f.current=!0}),A.useCallback(async(h,m={})=>{It(f.current,_h),f.current&&(typeof h=="number"?await s.navigate(h):await s.navigate(h,{fromRouteId:u,...m}))},[s,u])}var wh={};function Qh(s,u,f){!u&&!wh[s]&&(wh[s]=!0,It(!1,f))}A.memo(Ry);function Ry({routes:s,future:u,state:f,isStatic:o,onError:h}){return Yh(s,void 0,{state:f,isStatic:o,onError:h})}function Ny(s){return gy(s.context)}function Ft(s){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dy({basename:s="/",children:u=null,location:f,navigationType:o="POP",navigator:h,static:m=!1,unstable_useTransitions:b}){Me(!Fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=s.replace(/^\/*/,"/"),y=A.useMemo(()=>({basename:w,navigator:h,static:m,unstable_useTransitions:b,future:{}}),[w,h,m,b]);typeof f=="string"&&(f=_n(f));let{pathname:g="/",search:R="",hash:E="",state:U=null,key:J="default",unstable_mask:Q}=f,F=A.useMemo(()=>{let _=ca(g,w);return _==null?null:{location:{pathname:_,search:R,hash:E,state:U,key:J,unstable_mask:Q},navigationType:o}},[w,g,R,E,U,J,o,Q]);return It(F!=null,`<Router basename="${w}"> is not able to match the URL "${g}${R}${E}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:A.createElement(Rt.Provider,{value:y},A.createElement(_i.Provider,{children:u,value:F}))}function zy({children:s,location:u}){return yy(Qo(s),u)}function Qo(s,u=[]){let f=[];return A.Children.forEach(s,(o,h)=>{if(!A.isValidElement(o))return;let m=[...u,h];if(o.type===A.Fragment){f.push.apply(f,Qo(o.props.children,m));return}Me(o.type===Ft,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!o.props.index||!o.props.children,"An index route cannot have child routes.");let b={id:o.props.id||m.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(b.children=Qo(o.props.children,m)),f.push(b)}),f}var cs="get",us="application/x-www-form-urlencoded";function gs(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function jy(s){return gs(s)&&s.tagName.toLowerCase()==="button"}function By(s){return gs(s)&&s.tagName.toLowerCase()==="form"}function Oy(s){return gs(s)&&s.tagName.toLowerCase()==="input"}function Uy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function qy(s,u){return s.button===0&&(!u||u==="_self")&&!Uy(s)}var ls=null;function Hy(){if(ls===null)try{new FormData(document.createElement("form"),0),ls=!1}catch{ls=!0}return ls}var Ly=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yo(s){return s!=null&&!Ly.has(s)?(It(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${us}"`),null):s}function _y(s,u){let f,o,h,m,b;if(By(s)){let w=s.getAttribute("action");o=w?ca(w,u):null,f=s.getAttribute("method")||cs,h=Yo(s.getAttribute("enctype"))||us,m=new FormData(s)}else if(jy(s)||Oy(s)&&(s.type==="submit"||s.type==="image")){let w=s.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=s.getAttribute("formaction")||w.getAttribute("action");if(o=y?ca(y,u):null,f=s.getAttribute("formmethod")||w.getAttribute("method")||cs,h=Yo(s.getAttribute("formenctype"))||Yo(w.getAttribute("enctype"))||us,m=new FormData(w,s),!Hy()){let{name:g,type:R,value:E}=s;if(R==="image"){let U=g?`${g}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else g&&m.append(g,E)}}else{if(gs(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=cs,o=null,h=us,b=s}return m&&h==="text/plain"&&(b=m,m=void 0),{action:o,method:f.toLowerCase(),encType:h,formData:m,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ec(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Jh(s,u,f,o){let h=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return f?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${o}`:h.pathname=`${h.pathname}.${o}`:h.pathname==="/"?h.pathname=`_root.${o}`:u&&ca(h.pathname,u)==="/"?h.pathname=`${hs(u)}/_root.${o}`:h.pathname=`${hs(h.pathname)}.${o}`,h}async function Fy(s,u){if(s.id in u)return u[s.id];try{let f=await import(s.module);return u[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Iy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Gy(s,u,f){let o=await Promise.all(s.map(async h=>{let m=u.routes[h.route.id];if(m){let b=await Fy(m,f);return b.links?b.links():[]}return[]}));return Jy(o.flat(1).filter(Iy).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Sh(s,u,f,o,h,m){let b=(y,g)=>f[g]?y.route.id!==f[g].route.id:!0,w=(y,g)=>{var R;return f[g].pathname!==y.pathname||((R=f[g].route.path)==null?void 0:R.endsWith("*"))&&f[g].params["*"]!==y.params["*"]};return m==="assets"?u.filter((y,g)=>b(y,g)||w(y,g)):m==="data"?u.filter((y,g)=>{var E;let R=o.routes[y.route.id];if(!R||!R.hasLoader)return!1;if(b(y,g)||w(y,g))return!0;if(y.route.shouldRevalidate){let U=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((E=f[0])==null?void 0:E.params)||{},nextUrl:new URL(s,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function Yy(s,u,{includeHydrateFallback:f}={}){return Xy(s.map(o=>{let h=u.routes[o.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),f&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function Xy(s){return[...new Set(s)]}function Qy(s){let u={},f=Object.keys(s).sort();for(let o of f)u[o]=s[o];return u}function Jy(s,u){let f=new Set;return new Set(u),s.reduce((o,h)=>{let m=JSON.stringify(Qy(h));return f.has(m)||(f.add(m),o.push({key:m,link:h})),o},[])}function tc(){let s=A.useContext(Fn);return ec(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Vy(){let s=A.useContext(ps);return ec(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var ac=A.createContext(void 0);ac.displayName="FrameworkContext";function nc(){let s=A.useContext(ac);return ec(s,"You must render this element inside a <HydratedRouter> element"),s}function Ky(s,u){let f=A.useContext(ac),[o,h]=A.useState(!1),[m,b]=A.useState(!1),{onFocus:w,onBlur:y,onMouseEnter:g,onMouseLeave:R,onTouchStart:E}=u,U=A.useRef(null);A.useEffect(()=>{if(s==="render"&&b(!0),s==="viewport"){let F=q=>{q.forEach(G=>{b(G.isIntersecting)})},_=new IntersectionObserver(F,{threshold:.5});return U.current&&_.observe(U.current),()=>{_.disconnect()}}},[s]),A.useEffect(()=>{if(o){let F=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(F)}}},[o]);let J=()=>{h(!0)},Q=()=>{h(!1),b(!1)};return f?s!=="intent"?[m,U,{}]:[m,U,{onFocus:qi(w,J),onBlur:qi(y,Q),onMouseEnter:qi(g,J),onMouseLeave:qi(R,Q),onTouchStart:qi(E,J)}]:[!1,U,{}]}function qi(s,u){return f=>{s&&s(f),f.defaultPrevented||u(f)}}function Py({page:s,...u}){let f=sy(),{router:o}=tc(),h=A.useMemo(()=>Rh(o.routes,s,o.basename),[o.routes,s,o.basename]);return h?f?A.createElement(Wy,{page:s,matches:h,...u}):A.createElement($y,{page:s,matches:h,...u}):null}function Zy(s){let{manifest:u,routeModules:f}=nc(),[o,h]=A.useState([]);return A.useEffect(()=>{let m=!1;return Gy(s,u,f).then(b=>{m||h(b)}),()=>{m=!0}},[s,u,f]),o}function Wy({page:s,matches:u,...f}){let o=Gt(),{future:h}=nc(),{basename:m}=tc(),b=A.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let w=Jh(s,m,h.unstable_trailingSlashAwareDataRequests,"rsc"),y=!1,g=[];for(let R of u)typeof R.route.shouldRevalidate=="function"?y=!0:g.push(R.route.id);return y&&g.length>0&&w.searchParams.set("_routes",g.join(",")),[w.pathname+w.search]},[m,h.unstable_trailingSlashAwareDataRequests,s,o,u]);return A.createElement(A.Fragment,null,b.map(w=>A.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...f})))}function $y({page:s,matches:u,...f}){let o=Gt(),{future:h,manifest:m,routeModules:b}=nc(),{basename:w}=tc(),{loaderData:y,matches:g}=Vy(),R=A.useMemo(()=>Sh(s,u,g,m,o,"data"),[s,u,g,m,o]),E=A.useMemo(()=>Sh(s,u,g,m,o,"assets"),[s,u,g,m,o]),U=A.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let F=new Set,_=!1;if(u.forEach(G=>{var V;let O=m.routes[G.route.id];!O||!O.hasLoader||(!R.some(W=>W.route.id===G.route.id)&&G.route.id in y&&((V=b[G.route.id])!=null&&V.shouldRevalidate)||O.hasClientLoader?_=!0:F.add(G.route.id))}),F.size===0)return[];let q=Jh(s,w,h.unstable_trailingSlashAwareDataRequests,"data");return _&&F.size>0&&q.searchParams.set("_routes",u.filter(G=>F.has(G.route.id)).map(G=>G.route.id).join(",")),[q.pathname+q.search]},[w,h.unstable_trailingSlashAwareDataRequests,y,o,m,R,u,s,b]),J=A.useMemo(()=>Yy(E,m),[E,m]),Q=Zy(E);return A.createElement(A.Fragment,null,U.map(F=>A.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...f})),J.map(F=>A.createElement("link",{key:F,rel:"modulepreload",href:F,...f})),Q.map(({key:F,link:_})=>A.createElement("link",{key:F,nonce:f.nonce,..._,crossOrigin:_.crossOrigin??f.crossOrigin})))}function ev(...s){return u=>{s.forEach(f=>{typeof f=="function"?f(u):f!=null&&(f.current=u)})}}var tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tv&&(window.__reactRouterVersion="7.14.2")}catch{}function av({basename:s,children:u,unstable_useTransitions:f,window:o}){let h=A.useRef();h.current==null&&(h.current=jg({window:o,v5Compat:!0}));let m=h.current,[b,w]=A.useState({action:m.action,location:m.location}),y=A.useCallback(g=>{f===!1?w(g):A.startTransition(()=>w(g))},[f]);return A.useLayoutEffect(()=>m.listen(y),[m,y]),A.createElement(Dy,{basename:s,children:u,location:b.location,navigationType:b.action,navigator:m,unstable_useTransitions:f})}var Vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=A.forwardRef(function({onClick:u,discover:f="render",prefetch:o="none",relative:h,reloadDocument:m,replace:b,unstable_mask:w,state:y,target:g,to:R,preventScrollReset:E,viewTransition:U,unstable_defaultShouldRevalidate:J,...Q},F){let{basename:_,navigator:q,unstable_useTransitions:G}=A.useContext(Rt),O=typeof R=="string"&&Vh.test(R),V=Oh(R,_);R=V.to;let W=hy(R,{relative:h}),ce=Gt(),P=null;if(w){let Oe=Po(w,[],ce.unstable_mask?ce.unstable_mask.pathname:"/",!0);_!=="/"&&(Oe.pathname=Oe.pathname==="/"?_:jt([_,Oe.pathname])),P=q.createHref(Oe)}let[Ae,De,Ot]=Ky(o,Q),yt=sv(R,{replace:b,unstable_mask:w,state:y,target:g,preventScrollReset:E,relative:h,viewTransition:U,unstable_defaultShouldRevalidate:J,unstable_useTransitions:G});function Ve(Oe){u&&u(Oe),Oe.defaultPrevented||yt(Oe)}let Ut=!(V.isExternal||m),vt=A.createElement("a",{...Q,...Ot,href:(Ut?P:void 0)||V.absoluteURL||W,onClick:Ut?Ve:u,ref:ev(F,De),target:g,"data-discover":!O&&f==="render"?"true":void 0});return Ae&&!O?A.createElement(A.Fragment,null,vt,A.createElement(Py,{page:W})):vt});Pe.displayName="Link";var nv=A.forwardRef(function({"aria-current":u="page",caseSensitive:f=!1,className:o="",end:h=!1,style:m,to:b,viewTransition:w,children:y,...g},R){let E=Ii(b,{relative:g.relative}),U=Gt(),J=A.useContext(ps),{navigator:Q,basename:F}=A.useContext(Rt),_=J!=null&&dv(E)&&w===!0,q=Q.encodeLocation?Q.encodeLocation(E).pathname:E.pathname,G=U.pathname,O=J&&J.navigation&&J.navigation.location?J.navigation.location.pathname:null;f||(G=G.toLowerCase(),O=O?O.toLowerCase():null,q=q.toLowerCase()),O&&F&&(O=ca(O,F)||O);const V=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let W=G===q||!h&&G.startsWith(q)&&G.charAt(V)==="/",ce=O!=null&&(O===q||!h&&O.startsWith(q)&&O.charAt(q.length)==="/"),P={isActive:W,isPending:ce,isTransitioning:_},Ae=W?u:void 0,De;typeof o=="function"?De=o(P):De=[o,W?"active":null,ce?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Ot=typeof m=="function"?m(P):m;return A.createElement(Pe,{...g,"aria-current":Ae,className:De,ref:R,style:Ot,to:b,viewTransition:w},typeof y=="function"?y(P):y)});nv.displayName="NavLink";var iv=A.forwardRef(({discover:s="render",fetcherKey:u,navigate:f,reloadDocument:o,replace:h,state:m,method:b=cs,action:w,onSubmit:y,relative:g,preventScrollReset:R,viewTransition:E,unstable_defaultShouldRevalidate:U,...J},Q)=>{let{unstable_useTransitions:F}=A.useContext(Rt),_=cv(),q=uv(w,{relative:g}),G=b.toLowerCase()==="get"?"get":"post",O=typeof w=="string"&&Vh.test(w),V=W=>{if(y&&y(W),W.defaultPrevented)return;W.preventDefault();let ce=W.nativeEvent.submitter,P=(ce==null?void 0:ce.getAttribute("formmethod"))||b,Ae=()=>_(ce||W.currentTarget,{fetcherKey:u,method:P,navigate:f,replace:h,state:m,relative:g,preventScrollReset:R,viewTransition:E,unstable_defaultShouldRevalidate:U});F&&f!==!1?A.startTransition(()=>Ae()):Ae()};return A.createElement("form",{ref:Q,method:G,action:q,onSubmit:o?y:V,...J,"data-discover":!O&&s==="render"?"true":void 0})});iv.displayName="Form";function rv(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kh(s){let u=A.useContext(Fn);return Me(u,rv(s)),u}function sv(s,{target:u,replace:f,unstable_mask:o,state:h,preventScrollReset:m,relative:b,viewTransition:w,unstable_defaultShouldRevalidate:y,unstable_useTransitions:g}={}){let R=Ih(),E=Gt(),U=Ii(s,{relative:b});return A.useCallback(J=>{if(qy(J,u)){J.preventDefault();let Q=f!==void 0?f:Li(E)===Li(U),F=()=>R(s,{replace:Q,unstable_mask:o,state:h,preventScrollReset:m,relative:b,viewTransition:w,unstable_defaultShouldRevalidate:y});g?A.startTransition(()=>F()):F()}},[E,R,U,f,o,h,u,s,m,b,w,y,g])}var lv=0,ov=()=>`__${String(++lv)}__`;function cv(){let{router:s}=Kh("useSubmit"),{basename:u}=A.useContext(Rt),f=Ey(),o=s.fetch,h=s.navigate;return A.useCallback(async(m,b={})=>{let{action:w,method:y,encType:g,formData:R,body:E}=_y(m,u);if(b.navigate===!1){let U=b.fetcherKey||ov();await o(U,f,b.action||w,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:R,body:E,formMethod:b.method||y,formEncType:b.encType||g,flushSync:b.flushSync})}else await h(b.action||w,{unstable_defaultShouldRevalidate:b.unstable_defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:R,body:E,formMethod:b.method||y,formEncType:b.encType||g,replace:b.replace,state:b.state,fromRouteId:f,flushSync:b.flushSync,viewTransition:b.viewTransition})},[o,h,u,f])}function uv(s,{relative:u}={}){let{basename:f}=A.useContext(Rt),o=A.useContext(Bt);Me(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),m={...Ii(s||".",{relative:u})},b=Gt();if(s==null){m.search=b.search;let w=new URLSearchParams(m.search),y=w.getAll("index");if(y.some(R=>R==="")){w.delete("index"),y.filter(E=>E).forEach(E=>w.append("index",E));let R=w.toString();m.search=R?`?${R}`:""}}return(!s||s===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(m.pathname=m.pathname==="/"?f:jt([f,m.pathname])),Li(m)}function dv(s,{relative:u}={}){let f=A.useContext(Hh);Me(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Kh("useViewTransitionState"),h=Ii(s,{relative:u});if(!f.isTransitioning)return!1;let m=ca(f.currentLocation.pathname,o)||f.currentLocation.pathname,b=ca(f.nextLocation.pathname,o)||f.nextLocation.pathname;return fs(h.pathname,b)!=null||fs(h.pathname,m)!=null}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ph=(...s)=>s.filter((u,f,o)=>!!u&&u.trim()!==""&&o.indexOf(u)===f).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=A.forwardRef(({color:s="currentColor",size:u=24,strokeWidth:f=2,absoluteStrokeWidth:o,className:h="",children:m,iconNode:b,...w},y)=>A.createElement("svg",{ref:y,...hv,width:u,height:u,stroke:s,strokeWidth:o?Number(f)*24/Number(u):f,className:Ph("lucide",h),...w},[...b.map(([g,R])=>A.createElement(g,R)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(s,u)=>{const f=A.forwardRef(({className:o,...h},m)=>A.createElement(mv,{ref:m,iconNode:u,className:Ph(`lucide-${fv(s)}`,o),...h}));return f.displayName=`${s}`,f};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ye("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=ye("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ye("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=ye("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=ye("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ye("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ye("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ye("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=ye("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ye("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ye("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ye("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ye("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ye("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ye("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=ye("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ye("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ye("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ye("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ah=[{path:"/",label:"Home",icon:gt},{path:"/concepts",label:"Concepts",icon:Tv},{path:"/compare",label:"Compare",icon:wv},{path:"/quiz",label:"Quiz",icon:Zh},{path:"/glossary",label:"Glossary",icon:Sv}];function zv(){const s=Gt(),[u,f]=A.useState(!1);return c.jsxs("nav",{className:"fixed top-0 left-0 right-0 h-16 bg-dark-800/95 backdrop-blur-md border-b border-dark-600 z-50",children:[c.jsxs("div",{className:"max-w-7xl mx-auto px-4 h-full flex items-center justify-between",children:[c.jsxs(Pe,{to:"/",className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center",children:c.jsx(gt,{className:"w-5 h-5 text-white"})}),c.jsx("span",{className:"font-bold text-lg",children:"Repo & CCP Learning"})]}),c.jsx("div",{className:"hidden md:flex items-center gap-1",children:Ah.map(({path:o,label:h})=>c.jsx(Pe,{to:o,className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${s.pathname===o?"text-accent-cyan bg-dark-700":"text-gray-400 hover:text-white hover:bg-dark-700"}`,children:h},o))}),c.jsx("button",{onClick:()=>f(!u),className:"md:hidden p-2 text-gray-400 hover:text-white",children:u?c.jsx(Dv,{className:"w-6 h-6"}):c.jsx(kv,{className:"w-6 h-6"})})]}),u&&c.jsx("div",{className:"md:hidden bg-dark-800 border-b border-dark-600",children:Ah.map(({path:o,label:h})=>c.jsx(Pe,{to:o,onClick:()=>f(!1),className:`block px-4 py-3 text-sm font-medium ${s.pathname===o?"text-accent-cyan bg-dark-700":"text-gray-400 hover:text-white hover:bg-dark-700"}`,children:h},o))})]})}function jv(){return c.jsxs("div",{className:"min-h-screen bg-dark-900 text-gray-100",children:[c.jsx(zv,{}),c.jsx("main",{className:"pt-16",children:c.jsx(Ny,{})})]})}const oa=[{id:"us-repo",title:"U.S. Repo Markets & CCPs",region:"US",description:"Master the structure of U.S. Treasury repo markets, from bilateral trading to central clearing through DTCC/FICC.",lessons:[{id:"lesson-1",title:"What Is Repo?",duration:"25 min",hasDiagram:!1,content:`
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
`,keyPoints:["FX forwards lock in future exchange rates","FX swaps manage short-term funding across currencies","CDS transfers credit risk via periodic premiums","CDS indexes provide broad credit market exposure","Credit derivatives improve risk transfer but created contagion in 2008"],quiz:[{question:"What does a Credit Default Swap (CDS) provide?",options:["Insurance against stock market losses","Protection against credit events like default or bankruptcy","Guarantee of profit on investments","Low-interest loans"],correctIndex:1,explanation:"A CDS provides protection against credit events such as bankruptcy, failure to pay, or debt restructuring in exchange for periodic premium payments."},{question:"What determines forward points in FX forwards?",options:["Stock market performance","Interest rate differentials between currencies","Government regulations","Trading volume"],correctIndex:1,explanation:"Forward points (the difference between forward and spot FX rates) are determined by interest rate differentials between the two currencies."},{question:"What was a major concern about credit derivatives during the 2008 crisis?",options:["They were too simple","Counterparty risk and opacity created contagion channels","They were not used enough","They were only traded on exchanges"],correctIndex:1,explanation:"During the 2008 crisis, counterparty risk (e.g., AIG) and the opacity of credit derivatives created contagion channels that amplified the crisis."}]}]}],Wh=[{term:"Repo (Repurchase Agreement)",definition:"A sale of securities coupled with an agreement to repurchase them at a future date and price; economically a collateralized short-term loan.",category:"Core Concepts"},{term:"Reverse Repo",definition:"The opposite side of a repo transaction; from the cash lender's perspective, it is a collateralized deposit or investment of cash.",category:"Core Concepts"},{term:"CCP (Central Counterparty)",definition:"An entity that interposes itself between buyers and sellers in financial transactions to guarantee performance and mutualize counterparty credit risk.",category:"Core Concepts"},{term:"Novation",definition:"The legal replacement of an original contract between two parties with two new contracts between each party and a central counterparty, extinguishing bilateral exposure.",category:"Core Concepts"},{term:"Netting",definition:"The offsetting of mutual obligations to reduce the number and size of payments or securities transfers required for settlement.",category:"Risk Management"},{term:"Margin (Initial)",definition:"Collateral posted at the initiation of a trade to protect against potential future exposure to counterparty default.",category:"Risk Management"},{term:"Margin (Variation)",definition:"Collateral transferred daily (or intraday) to reflect changes in the market value of cleared positions.",category:"Risk Management"},{term:"Haircut",definition:"A discount applied to the market value of collateral to create a buffer against price fluctuations.",category:"Risk Management"},{term:"DTCC/FICC",definition:"Depository Trust & Clearing Corporation / Fixed Income Clearing Corporation—the sole CCP for U.S. Treasury repo markets.",category:"U.S. Markets"},{term:"BNY Mellon",definition:"Bank of New York Mellon—the sole clearing bank for U.S. repo markets, holding custodial accounts for FICC and market participants.",category:"U.S. Markets"},{term:"CBES",definition:"Commercial Book-Entry System—the Federal Reserve's definitive ledger for U.S. Treasury securities ownership.",category:"U.S. Markets"},{term:"JSCC",definition:"Japan Securities Clearing Corporation—the central counterparty for Japanese securities markets, including JGB repo.",category:"Asian Markets"},{term:"CDP",definition:"Central Depository (Pte) Limited—the clearing house for Singapore securities, with limited repo clearing capabilities.",category:"Asian Markets"},{term:"HKSCC",definition:"Hong Kong Securities Clearing Company—the clearing house for Hong Kong equities, with limited repo clearing.",category:"Asian Markets"},{term:"Tri-Party Repo",definition:"A repo transaction where a third party (clearing bank) manages collateral selection, valuation, and settlement between borrower and lender.",category:"Market Structure"},{term:"Bilateral Repo",definition:"A repo transaction where two parties face each other directly without a central counterparty, each bearing the other's credit risk.",category:"Market Structure"},{term:"Sponsored Member",definition:"A market participant that accesses central clearing through a direct CCP member (e.g., a hedge fund sponsored by a dealer bank).",category:"Market Structure"},{term:"Default Waterfall",definition:"The ordered sequence of financial resources used by a CCP to absorb losses from a member default.",category:"Risk Management"},{term:"PFMI",definition:"Principles for Financial Market Infrastructures—international standards set by CPMI-IOSCO for payment, clearing, and settlement systems.",category:"Regulation"},{term:"FMU",definition:"Financial Market Utility—a systemically important financial market infrastructure designated under the U.S. Dodd-Frank Act.",category:"Regulation"},{term:"Joint Clearing Members",definition:"Large clearing members that participate in multiple CCPs simultaneously, creating potential transmission channels for stress across markets (Aldasoro & Veraart, BIS WP 1052).",category:"Risk Management"},{term:"Cover-2 Standard",definition:"CCP stress testing standard requiring sufficient prefunded resources to withstand the simultaneous default of the two clearing members with the largest exposures; challenged by research showing interconnectedness effects.",category:"Risk Management"},{term:"Novation",definition:"The legal replacement of an original contract between two parties with two new contracts between each party and a central counterparty, extinguishing bilateral exposure.",category:"Core Concepts"},{term:"Guarantee Fund",definition:"Prefunded resources contributed by CCP members to mutualize losses after a defaulting member's own resources are exhausted; also called default fund or clearing fund.",category:"Risk Management"},{term:"Variation Margin Gains Haircutting (VMGH)",definition:"A CCP loss allocation mechanism where variation margin payments to non-defaulting members are reduced ('haircutted') to absorb losses from a member default; creates potential spillovers to other CCPs.",category:"Risk Management"},{term:"Intra-Day Credit",definition:"Credit extended by a clearing bank to repo market participants during the trading day, enabling securities settlement before final funding; a key systemic risk in tri-party repo markets.",category:"Market Structure"},{term:"Contagion",definition:"The transmission of financial stress from one entity to others through direct or indirect linkages; in CCP contexts, often occurs through shared clearing membership or correlated collateral.",category:"Risk Management"},{term:"Recovery and Resolution",definition:"Frameworks for managing CCPs in financial distress—recovery involves tools to prevent failure; resolution addresses how authorities handle a failing CCP without taxpayer bailout.",category:"Regulation"}],Bv=[{title:"Repo & CCP Frequently Asked Questions",author:"ICMA European Repo and Collateral Council",url:"https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/",type:"Industry Guide",description:"Comprehensive FAQ covering repo fundamentals and CCP functions."},{title:"Principles for Financial Market Infrastructures",author:"CPMI-IOSCO",url:"https://www.bis.org/cpmi/publ/d101.htm",type:"Regulatory Standard",description:"International standards for payment, clearing, and settlement systems including CCPs."},{title:"Japan Securities Clearing Corporation",author:"JPX Group",url:"https://www.jpx.co.jp/jscc/en/",type:"Official Website",description:"Official information on JSCC clearing services and risk management."},{title:"Changes in repo markets and the necessity for CCPs in Korea",author:"Journal of Derivatives and Quantitative Studies",url:"https://www.emerald.com/jdqs/article/32/1/2/1214020",type:"Academic Paper",description:"Analysis of Korean repo market development and CCP necessity."},{title:"SGX Clearing Information",author:"Singapore Exchange",url:"https://www.sgx.com/securities/clearing-information",type:"Official Documentation",description:"Clearing rules and procedures for Singapore securities markets."},{title:"HKEX CCP Disclosures",author:"Hong Kong Exchanges and Clearing",url:"https://www.hkex.com.hk/Services/Clearing/Securities/CCP-Disclosures",type:"Regulatory Disclosure",description:"Quantitative disclosures for HKEX central counterparty clearing."},{title:"The impact of CCPs' margin policies on repo markets",author:"BIS Working Papers",url:"https://www.bis.org/publ/work515.pdf",type:"Research Paper",description:"BIS analysis of CCP margin policies and their effects on repo markets."},{title:"CCP Global Clearing Report 2024",author:"CCP Global (CCPG)",url:"https://ccp-global.org/amr",type:"Industry Report",description:"Annual review of global clearing market trends and developments."},{title:"Systemic Risk in Markets with Multiple Central Counterparties",author:"Aldasoro & Veraart, BIS Working Paper No 1052",url:"https://www.bis.org/publ/work1052.htm",type:"Academic Research",description:"Analysis of how joint clearing membership transmits stress across multiple CCPs; introduces framework for quantifying payment shortfalls and challenges Cover-2 standard assumptions."},{title:"Clearing Houses 101: What They Are and How They Work",author:"Futures Trading Pedia",url:"https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/",type:"Educational Primer",description:"Comprehensive primer on clearing house functions: novation, margining, default management, netting, and guarantee funds."},{title:"Tri-Party Repo Infrastructure Reform",author:"Federal Reserve Bank of New York",url:"https://www.newyorkfed.org/banking/tpr_infr_reform.html",type:"Official Documentation",description:"FRBNY framework for tri-party repo market reforms addressing systemic risk from clearing bank intra-day credit."},{title:"Central Counterparties: Addressing their Too Important to Fail Status",author:"IMF Working Paper WP/15/21",url:"https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf",type:"Policy Research",description:"IMF analysis of CCP interconnectedness, systemic importance, and resolution frameworks for too-important-to-fail clearing houses."},{title:"How Does the Repo Market Behave Under Stress?",author:"IMF Working Paper WP/21/267",url:"https://imf.org/-/media/Files/Publications/WP/2021/English/wpiea2021267-print-pdf.ashx",type:"Academic Research",description:"Evidence from the COVID-19 crisis on repo market liquidity risk, financial networks, and market microstructure."}];function Ln({icon:s,title:u,description:f}){return c.jsxs("div",{className:"lesson-card",children:[c.jsx(s,{className:"w-8 h-8 text-accent-cyan mb-4"}),c.jsx("h3",{className:"text-lg font-semibold mb-2",children:u}),c.jsx("p",{className:"text-gray-400 text-sm",children:f})]})}function Ov(){const s=oa.reduce((f,o)=>f+o.lessons.length,0),u=oa.reduce((f,o)=>f+o.lessons.reduce((h,m)=>h+m.quiz.length,0),0);return c.jsxs("div",{className:"min-h-screen",children:[c.jsxs("section",{className:"relative py-20 px-4 overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-accent-blue/10 via-transparent to-transparent"}),c.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6",children:[c.jsx(Eh,{className:"w-4 h-4"}),c.jsx("span",{children:"Interactive Learning Platform"})]}),c.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent",children:"Repo Markets & CCPs"}),c.jsx("p",{className:"text-xl text-gray-400 mb-8 max-w-2xl mx-auto",children:"Master repurchase agreements and central counterparty clearing across U.S. and Asia-Pacific markets. From bilateral trading to FICC and JSCC—understand the plumbing of the financial system."}),c.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[c.jsxs(Pe,{to:"/module/us-repo",className:"inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105",children:["Start Learning",c.jsx(Hi,{className:"w-4 h-4"})]}),c.jsxs(Pe,{to:"/compare",className:"inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all border border-dark-500",children:[c.jsx(Vo,{className:"w-4 h-4"}),"Compare Markets"]})]})]})]}),c.jsx("section",{className:"py-12 px-4 border-y border-dark-600 bg-dark-800/50",children:c.jsxs("div",{className:"max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:oa.length}),c.jsx("div",{className:"text-sm text-gray-400",children:"Learning Modules"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:s}),c.jsx("div",{className:"text-sm text-gray-400",children:"Lessons"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:u}),c.jsx("div",{className:"text-sm text-gray-400",children:"Quiz Questions"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-3xl font-bold text-accent-cyan",children:"2"}),c.jsx("div",{className:"text-sm text-gray-400",children:"Regions Covered"})]})]})}),c.jsx("section",{className:"py-16 px-4",children:c.jsxs("div",{className:"max-w-6xl mx-auto",children:[c.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",children:"Learning Modules"}),c.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:oa.map(f=>c.jsxs(Pe,{to:`/module/${f.id}`,className:"lesson-card group hover:border-accent-cyan transition-all",children:[c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsx("div",{className:`px-3 py-1 rounded-full text-xs font-medium ${f.region==="US"?"bg-accent-blue/20 text-accent-blue":f.region==="Asia"?"bg-accent-purple/20 text-accent-purple":f.region==="Global"?"bg-accent-green/20 text-accent-green":"bg-accent-orange/20 text-accent-orange"}`,children:f.region==="General"?"Finance Fundamentals":`${f.region} Markets`}),c.jsx(ms,{className:"w-5 h-5 text-gray-500 group-hover:text-accent-cyan transition-colors"})]}),c.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-accent-cyan transition-colors",children:f.title}),c.jsx("p",{className:"text-gray-400 text-sm mb-4",children:f.description}),c.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[c.jsxs("span",{children:[f.lessons.length," lessons"]}),c.jsx("span",{children:"•"}),c.jsxs("span",{children:[f.lessons.reduce((o,h)=>o+h.quiz.length,0)," quizzes"]})]})]},f.id))})]})}),c.jsx("section",{className:"py-16 px-4 bg-dark-800/50",children:c.jsxs("div",{className:"max-w-6xl mx-auto",children:[c.jsx("h2",{className:"text-2xl font-bold mb-8 text-center",children:"Platform Features"}),c.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[c.jsx(Ln,{icon:gt,title:"Comprehensive Content",description:"Detailed lessons covering repo fundamentals, CCP mechanics, U.S. and Asian market structures."}),c.jsx(Ln,{icon:Eh,title:"Interactive Diagrams",description:"Visual flow diagrams showing trade lifecycle from quote to settlement."}),c.jsx(Ln,{icon:Rv,title:"Risk Management Focus",description:"Understand netting, margin, default waterfalls, and systemic risk."}),c.jsx(Ln,{icon:ms,title:"Global Comparison",description:"Compare U.S. FICC model with Asia's multiple CCP landscape."}),c.jsx(Ln,{icon:Vo,title:"Knowledge Testing",description:"Interactive quizzes to reinforce learning after each lesson."}),c.jsx(Ln,{icon:gt,title:"Glossary & Sources",description:"Comprehensive terminology definitions and academic sources."})]})]})})]})}const Mh={"us-flow":[{id:1,label:"Quote Request",desc:"Cash lender requests quotes via email/voice/platform"},{id:2,label:"Trade Execution",desc:"Cash borrower provides quote; trade agreed"},{id:3,label:"Trade Submission",desc:"Both parties submit to FICC; must match exactly"},{id:4,label:"Matching Engine",desc:"FICC verifies instructions; matched or rejected"},{id:5,label:"Novation",desc:"Bilateral contract extinguished; two CCP contracts created"},{id:6,label:"Netting",desc:"Multilateral offsetting reduces gross obligations"},{id:7,label:"Margining",desc:"Initial and variation margin posted to FICC"},{id:8,label:"Settlement (DVP)",desc:"Delivery vs Payment through clearing bank (BNY Mellon)"}],"asia-flow":[{id:1,label:"Trade Agreement",desc:"Bilateral or platform-based trade execution"},{id:2,label:"CCP Interposition",desc:"JSCC/CCP steps in via obligation assumption (novation)"},{id:3,label:"Risk Calculation",desc:"Portfolio-based margin (VaR) calculated"},{id:4,label:"Margin Posting",desc:"Both parties post margin to CCP"},{id:5,label:"Settlement",desc:"BOJ-Net or central bank system (not private clearing bank)"}]};function Uv({type:s}){const[u,f]=A.useState(null),o=Mh[s]||Mh["us-flow"];return s==="comparison"?c.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6 overflow-x-auto",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-8 min-w-[600px]",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"text-accent-blue font-semibold mb-4",children:"U.S. Model"}),c.jsx("div",{className:"space-y-2",children:["Quote → Execute → Submit to FICC → Match → Novate → Net → Margin → DVP"].map((h,m)=>c.jsx("div",{className:"p-3 bg-dark-700 rounded text-sm",children:h},m))})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-accent-purple font-semibold mb-4",children:"Asia Model"}),c.jsx("div",{className:"space-y-2",children:["Trade → Novate → Risk Calc → Margin → Central Bank Settlement"].map((h,m)=>c.jsx("div",{className:"p-3 bg-dark-700 rounded text-sm",children:h},m))})]})]}),c.jsx("p",{className:"text-center text-sm text-gray-500 mt-4",children:"Key difference: U.S. has explicit matching before novation; Asia focuses on risk calculation post-novation"})]}):c.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6",children:[c.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-6",children:o.map((h,m)=>c.jsxs("div",{className:"flex items-center",children:[c.jsx("button",{onClick:()=>f(u===m?null:m),className:`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${u===m?"bg-accent-cyan text-dark-900":"bg-dark-600 text-gray-400 hover:bg-dark-500"}`,children:m+1}),m<o.length-1&&c.jsx("div",{className:"w-6 h-0.5 bg-dark-500 mx-1"})]},h.id))}),c.jsx("div",{className:"space-y-3",children:o.map((h,m)=>c.jsx("button",{onClick:()=>f(u===m?null:m),className:`w-full text-left p-4 rounded-lg transition-all ${u===m?"bg-accent-cyan/10 border border-accent-cyan":"bg-dark-700 border border-transparent hover:border-dark-500"}`,children:c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${u===m?"bg-accent-cyan text-dark-900":"bg-dark-600 text-gray-400"}`,children:m+1}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h4",{className:"font-semibold mb-1",children:h.label}),c.jsx("p",{className:`text-sm ${u===m?"text-gray-300":"text-gray-500"}`,children:h.desc})]})]})},h.id))})]})}function qv({content:s}){const u=s.split(`
`),f=[];let o=0;for(;o<u.length;){const h=u[o];if(h.startsWith("## "))f.push(c.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4 text-white",children:h.slice(3)},o));else if(h.startsWith("### "))f.push(c.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3 text-accent-cyan",children:h.slice(4)},o));else if(h.startsWith("- "))f.push(c.jsx("li",{className:"ml-4 mb-2 text-gray-300",children:h.slice(2)},o));else if(h.startsWith("**")&&h.endsWith("**")){const m=h.replace(/\*\*/g,"");f.push(c.jsx("p",{className:"font-semibold text-white my-4",children:m},o))}else if(h.startsWith("|")){if(h.includes("---")){o++;continue}const m=h.split("|").filter(b=>b.trim()).map(b=>b.trim());m.length>0&&f.push(c.jsx("div",{className:"overflow-x-auto my-4",children:c.jsx("div",{className:"flex gap-4 border-b border-dark-500 pb-2",children:m.map((b,w)=>c.jsx("span",{className:"font-semibold text-accent-cyan min-w-[120px]",children:b},w))})},o))}else if(h.startsWith("```")){const m=[];for(o++;o<u.length&&!u[o].startsWith("```");)m.push(u[o]),o++;f.push(c.jsx("pre",{className:"bg-dark-700 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono text-gray-300",children:m.join(`
`)},o))}else if(h.trim()){const m=/\[([^\]]+)\]\(([^)]+)\)/g,b=[...h.matchAll(m)];if(b.length>0){let w=0;const y=[];b.forEach((g,R)=>{g.index>w&&y.push(c.jsx("span",{children:h.slice(w,g.index)},`text-${R}`)),y.push(c.jsx("a",{href:g[2],target:"_blank",rel:"noopener noreferrer",className:"text-accent-cyan hover:text-white underline",children:g[1]},`link-${R}`)),w=g.index+g[0].length}),w<h.length&&y.push(c.jsx("span",{children:h.slice(w)},"text-end")),f.push(c.jsx("p",{className:"mb-4 text-gray-300 leading-relaxed",children:y},o))}else f.push(c.jsx("p",{className:"mb-4 text-gray-300 leading-relaxed",children:h},o))}o++}return c.jsx(c.Fragment,{children:f})}function Hv(){const{moduleId:s,lessonId:u}=Gh();Ih();const[f,o]=A.useState(!1),[h,m]=A.useState({}),[b,w]=A.useState(!1),y=oa.find(G=>G.id===s),g=y==null?void 0:y.lessons.find(G=>G.id===u);if(A.useEffect(()=>{o(!1),m({}),w(!1),window.scrollTo(0,0)},[s,u]),!y||!g)return c.jsx("div",{className:"max-w-4xl mx-auto px-4 py-12",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Lesson Not Found"}),c.jsx(Pe,{to:"/",className:"text-accent-cyan hover:underline",children:"Return to Home"})]})});const R=y.lessons.findIndex(G=>G.id===u),E=R>0?y.lessons[R-1]:null,U=R<y.lessons.length-1?y.lessons[R+1]:null,J=(G,O)=>{b||m(V=>({...V,[G]:O}))},Q=()=>{w(!0)},F=()=>{m({}),w(!1)},_=g.quiz.reduce((G,O,V)=>G+(h[V]===O.correctIndex?1:0),0),q=g.quiz.length;return c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[c.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[c.jsxs(Pe,{to:`/module/${y.id}`,className:"inline-flex items-center gap-2 text-gray-400 hover:text-white",children:[c.jsx(ds,{className:"w-4 h-4"}),y.title]}),c.jsx("span",{className:"text-gray-600",children:"/"}),c.jsxs("span",{className:"text-gray-400",children:["Lesson ",R+1," of ",y.lessons.length]})]}),c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[c.jsx("div",{className:"w-12 h-12 bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg flex items-center justify-center",children:c.jsx(gt,{className:"w-6 h-6 text-accent-cyan"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"text-sm text-gray-400",children:["Lesson ",R+1]}),c.jsx("h1",{className:"text-2xl font-bold",children:g.title})]})]}),c.jsxs("p",{className:"text-gray-400",children:["Duration: ",g.duration]})]}),c.jsx("div",{className:"prose prose-invert max-w-none mb-8",children:c.jsx(qv,{content:g.content})}),g.hasDiagram&&g.diagramType&&c.jsxs("div",{className:"mb-8",children:[c.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Interactive Flow Diagram"}),c.jsx(Uv,{type:g.diagramType})]}),c.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6 mb-8",children:[c.jsx("h3",{className:"text-lg font-semibold mb-4 text-accent-cyan",children:"Key Takeaways"}),c.jsx("ul",{className:"space-y-2",children:g.keyPoints.map((G,O)=>c.jsxs("li",{className:"flex items-start gap-3",children:[c.jsx(Jo,{className:"w-5 h-5 text-accent-green flex-shrink-0 mt-0.5"}),c.jsx("span",{className:"text-gray-300",children:G})]},O))})]}),c.jsxs("div",{className:"mb-8",children:[c.jsxs("button",{onClick:()=>o(!f),className:"w-full py-4 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2",children:[f?"Hide Quiz":"Take Quiz",f?c.jsx(ds,{className:"w-4 h-4"}):c.jsx(Hi,{className:"w-4 h-4"})]}),f&&c.jsxs("div",{className:"mt-6 space-y-6",children:[b&&c.jsx("div",{className:`p-4 rounded-lg ${_===q?"bg-accent-green/20 border border-accent-green":"bg-accent-amber/20 border border-accent-amber"}`,children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-lg font-semibold",children:["Score: ",_,"/",q]}),c.jsxs("button",{onClick:F,className:"flex items-center gap-2 px-4 py-2 bg-dark-600 hover:bg-dark-500 rounded-lg transition-colors",children:[c.jsx(Av,{className:"w-4 h-4"}),"Retry"]})]})}),g.quiz.map((G,O)=>c.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg p-6",children:[c.jsxs("h4",{className:"font-semibold mb-4",children:["Question ",O+1,": ",G.question]}),c.jsx("div",{className:"space-y-2",children:G.options.map((V,W)=>{const ce=h[O]===W,P=W===G.correctIndex,Ae=b;let De="quiz-option";return Ae?P?De+=" correct":ce&&!P&&(De+=" incorrect"):ce&&(De+=" selected"),c.jsx("button",{onClick:()=>J(O,W),className:De,disabled:b,children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsxs("span",{className:"font-mono text-accent-cyan",children:[String.fromCharCode(65+W),"."]}),c.jsx("span",{children:V})]})},W)})}),b&&c.jsx("div",{className:`mt-4 p-3 rounded-lg ${h[O]===G.correctIndex?"bg-accent-green/10":"bg-accent-red/10"}`,children:c.jsxs("p",{className:"text-sm",children:[c.jsx("span",{className:"font-semibold",children:"Explanation: "}),G.explanation]})})]},O)),!b&&c.jsx("button",{onClick:Q,disabled:Object.keys(h).length<g.quiz.length,className:"w-full py-3 bg-accent-green hover:bg-accent-green/90 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:"Submit Answers"})]})]}),c.jsxs("div",{className:"flex items-center justify-between pt-6 border-t border-dark-600",children:[E?c.jsxs(Pe,{to:`/lesson/${y.id}/${E.id}`,className:"inline-flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors",children:[c.jsx(ds,{className:"w-4 h-4"}),c.jsxs("span",{className:"hidden sm:inline",children:["Previous: ",E.title]}),c.jsx("span",{className:"sm:hidden",children:"Previous"})]}):c.jsx("div",{}),U?c.jsxs(Pe,{to:`/lesson/${y.id}/${U.id}`,className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-accent-cyan rounded-lg transition-colors",children:[c.jsxs("span",{className:"hidden sm:inline",children:["Next: ",U.title]}),c.jsx("span",{className:"sm:hidden",children:"Next"}),c.jsx(Hi,{className:"w-4 h-4"})]}):c.jsxs(Pe,{to:y.id==="us-repo"?"/module/asia-repo":"/quiz",className:"inline-flex items-center gap-2 px-4 py-2 bg-accent-green hover:bg-accent-green/90 rounded-lg transition-colors",children:[y.id==="us-repo"?"Start Asia Module":"Take Final Quiz",c.jsx(Hi,{className:"w-4 h-4"})]})]})]})}function Lv(){const{moduleId:s}=Gh(),u=oa.find(f=>f.id===s);return u?c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[c.jsxs(Pe,{to:"/",className:"inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6",children:[c.jsx(ds,{className:"w-4 h-4"}),"Back to Home"]}),c.jsxs("div",{className:"mb-8",children:[c.jsx("div",{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${u.region==="US"?"bg-accent-blue/20 text-accent-blue":u.region==="Asia"?"bg-accent-purple/20 text-accent-purple":u.region==="Global"?"bg-accent-green/20 text-accent-green":"bg-accent-orange/20 text-accent-orange"}`,children:u.region==="General"?"Finance Fundamentals":`${u.region} Markets`}),c.jsx("h1",{className:"text-3xl font-bold mb-4",children:u.title}),c.jsx("p",{className:"text-gray-400 text-lg",children:u.description})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx("h2",{className:"text-xl font-semibold",children:"Lessons"}),u.lessons.map((f,o)=>c.jsxs(Pe,{to:`/lesson/${u.id}/${f.id}`,className:"lesson-card flex items-start gap-4 group",children:[c.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-dark-600 rounded-lg flex items-center justify-center font-semibold text-accent-cyan",children:o+1}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("h3",{className:"font-semibold group-hover:text-accent-cyan transition-colors mb-1",children:f.title}),c.jsx("p",{className:"text-sm text-gray-400 line-clamp-2 mb-2",children:f.keyPoints[0]}),c.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[c.jsxs("span",{className:"inline-flex items-center gap-1",children:[c.jsx(xv,{className:"w-4 h-4"}),f.duration]}),c.jsxs("span",{children:[f.quiz.length," quiz questions"]}),f.hasDiagram&&c.jsx("span",{children:"• Interactive diagram"})]})]}),c.jsx(Hi,{className:"w-5 h-5 text-gray-500 group-hover:text-accent-cyan transition-colors flex-shrink-0"})]},f.id))]})]}):c.jsx("div",{className:"max-w-4xl mx-auto px-4 py-12",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Module Not Found"}),c.jsx(Pe,{to:"/",className:"text-accent-cyan hover:underline",children:"Return to Home"})]})})}const _v=[{category:"Structure",us:"Single CCP (FICC) - monopoly model",asia:"Multiple CCPs across jurisdictions (fragmented)",winner:"Depends on priority: US=efficiency, Asia=resilience"},{category:"Clearing Bank",us:"Single (BNY Mellon) - concentration risk",asia:"Multiple, jurisdiction-specific banks",winner:"Asia - no single point of failure"},{category:"Settlement System",us:"Fedwire / Private clearing bank (BNY Mellon)",asia:"Central bank systems (BOJ-Net, MAS, HKMA)",winner:"Asia - direct central bank settlement"},{category:"Market Depth",us:">$5 trillion daily (deepest globally)",asia:"Varies: Japan deep, others smaller markets",winner:"US - unmatched liquidity"},{category:"Currency",us:"USD (global reserve currency)",asia:"JPY, SGD, HKD, KRW (local currencies)",winner:"US - reserve status creates global demand"},{category:"Repo Rates",us:"SOFR-linked, typically positive",asia:"JGB repo can be deeply negative (safe haven)",winner:"Different dynamics - Asia has deflationary episodes"},{category:"Cross-Border",us:"Limited due to single market focus",asia:"Complex: Connect programs, multiple FX regimes",winner:"US - simpler, Asia has growth potential"},{category:"Default Management",us:"Standardized FICC waterfall",asia:"Varied: JSCC, CDP, HKSCC each have own rules",winner:"US - consistency, Asia - competition/innovation"},{category:"Regulatory",us:"Unified SEC/CFTC oversight",asia:"Fragmented across jurisdictions (JFSA, MAS, HKMA)",winner:"US - unified, Asia - tailored to local needs"},{category:"Systemic Risk",us:"Concentrated in FICC and BNY Mellon",asia:"Distributed across multiple CCPs/clearing banks",winner:"Asia - diversification advantage"}];function Fv(){const[s,u]=A.useState(null);return c.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsxs("h1",{className:"text-3xl font-bold mb-4 flex items-center justify-center gap-3",children:[c.jsx(pv,{className:"w-8 h-8 text-accent-cyan"}),"U.S. vs. Asia-Pacific Comparison"]}),c.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"Compare the single-CCP U.S. model with the fragmented but resilient Asian multi-CCP landscape."})]}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-12",children:[c.jsxs("div",{className:"lesson-card border-accent-blue/30",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[c.jsx(gv,{className:"w-6 h-6 text-accent-blue"}),c.jsx("h2",{className:"text-xl font-bold text-accent-blue",children:"United States Model"})]}),c.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"A concentrated, efficient model with FICC as the sole Treasury repo CCP and BNY Mellon as the sole clearing bank. Maximizes standardization and liquidity but creates single points of failure."}),c.jsxs("div",{className:"text-sm",children:[c.jsx("span",{className:"text-accent-green font-medium",children:"Pros: "}),c.jsx("span",{className:"text-gray-500",children:"Efficiency, standardization, deep liquidity"})]}),c.jsxs("div",{className:"text-sm mt-1",children:[c.jsx("span",{className:"text-accent-red font-medium",children:"Cons: "}),c.jsx("span",{className:"text-gray-500",children:"Concentration risk, moral hazard"})]})]}),c.jsxs("div",{className:"lesson-card border-accent-purple/30",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[c.jsx(ms,{className:"w-6 h-6 text-accent-purple"}),c.jsx("h2",{className:"text-xl font-bold text-accent-purple",children:"Asia-Pacific Model"})]}),c.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"A fragmented but resilient model with multiple CCPs (JSCC, CDP, HKSCC) across jurisdictions. Provides redundancy and competition but creates cross-border complexity."}),c.jsxs("div",{className:"text-sm",children:[c.jsx("span",{className:"text-accent-green font-medium",children:"Pros: "}),c.jsx("span",{className:"text-gray-500",children:"Resilience, competition, redundancy"})]}),c.jsxs("div",{className:"text-sm mt-1",children:[c.jsx("span",{className:"text-accent-red font-medium",children:"Cons: "}),c.jsx("span",{className:"text-gray-500",children:"Fragmentation, higher costs, complexity"})]})]})]}),c.jsxs("div",{className:"bg-dark-800 border border-dark-600 rounded-lg overflow-hidden",children:[c.jsx("div",{className:"p-4 bg-dark-700 border-b border-dark-600",children:c.jsxs("h3",{className:"font-semibold flex items-center gap-2",children:[c.jsx(Vo,{className:"w-5 h-5 text-accent-cyan"}),"Detailed Comparison"]})}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-dark-700",children:[c.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-gray-300",children:"Category"}),c.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-accent-blue",children:"U.S."}),c.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-accent-purple",children:"Asia-Pacific"}),c.jsx("th",{className:"text-left py-3 px-4 text-sm font-semibold text-gray-300",children:"Assessment"})]})}),c.jsx("tbody",{children:_v.map(f=>c.jsxs("tr",{className:"border-t border-dark-600 hover:bg-dark-700/50",children:[c.jsx("td",{className:"py-3 px-4 font-medium text-gray-300",children:f.category}),c.jsx("td",{className:"py-3 px-4 text-sm text-gray-400",children:f.us}),c.jsx("td",{className:"py-3 px-4 text-sm text-gray-400",children:f.asia}),c.jsx("td",{className:"py-3 px-4 text-sm",children:c.jsx("span",{className:`px-2 py-1 rounded text-xs ${f.winner.startsWith("US")?"bg-accent-blue/20 text-accent-blue":f.winner.startsWith("Asia")?"bg-accent-purple/20 text-accent-purple":"bg-accent-amber/20 text-accent-amber"}`,children:f.winner})})]},f.category))})]})})]}),c.jsx("div",{className:"mt-12 grid md:grid-cols-2 gap-6",children:oa.map(f=>c.jsxs("a",{href:`/module/${f.id}`,className:"lesson-card group",children:[c.jsxs("div",{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${f.region==="US"?"bg-accent-blue/20 text-accent-blue":"bg-accent-purple/20 text-accent-purple"}`,children:[f.region," Markets"]}),c.jsx("h3",{className:"text-lg font-semibold group-hover:text-accent-cyan transition-colors mb-2",children:f.title}),c.jsx("p",{className:"text-sm text-gray-400 mb-3",children:f.description}),c.jsxs("div",{className:"text-sm text-accent-cyan",children:["Explore ",f.lessons.length," lessons →"]})]},f.id))})]})}function Iv(){const[s,u]=A.useState("setup"),[f,o]=A.useState("all"),[h,m]=A.useState([]),[b,w]=A.useState(0),[y,g]=A.useState({}),[R,E]=A.useState(!1);A.useEffect(()=>{const O=[];oa.forEach(V=>{V.lessons.forEach(W=>{W.quiz.forEach((ce,P)=>{O.push({...ce,moduleId:V.id,moduleTitle:V.title,lessonId:W.id,lessonTitle:W.title,id:`${V.id}-${W.id}-${P}`})})})}),m(O)},[]);const U=f==="all"?h:h.filter(O=>O.moduleId===f),J=()=>{const O=[...U].sort(()=>Math.random()-.5).slice(0,10);m(O),u("quiz"),w(0),g({}),E(!1)},Q=O=>{y[b]===void 0&&(g(V=>({...V,[b]:O})),E(!0))},F=()=>{b<h.length-1?(w(O=>O+1),E(!1)):u("results")},_=Object.entries(y).reduce((O,[V,W])=>O+(W===h[Number(V)].correctIndex?1:0),0);if(s==="setup")return c.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-12",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx(Zh,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Knowledge Check"}),c.jsx("p",{className:"text-gray-400",children:"Test your understanding of repo markets and CCPs"})]}),c.jsxs("div",{className:"lesson-card",children:[c.jsx("label",{className:"block text-sm font-medium mb-3",children:"Select Content"}),c.jsxs("select",{value:f,onChange:O=>o(O.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg px-4 py-3 text-white mb-6",children:[c.jsxs("option",{value:"all",children:["All Modules (",h.length," questions)"]}),oa.map(O=>{const V=h.filter(W=>W.moduleId===O.id).length;return c.jsxs("option",{value:O.id,children:[O.title," (",V," questions)"]},O.id)})]}),c.jsx("button",{onClick:J,className:"w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all",children:"Start Quiz (10 random questions)"})]})]});if(s==="results"){const O=Math.round(_/h.length*100);return c.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-12",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx(Nv,{className:`w-16 h-16 mx-auto mb-4 ${O>=80?"text-accent-green":O>=60?"text-accent-amber":"text-accent-red"}`}),c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Quiz Complete!"}),c.jsxs("p",{className:"text-4xl font-bold text-accent-cyan mb-2",children:[_,"/",h.length]}),c.jsxs("p",{className:`text-lg ${O>=80?"text-accent-green":O>=60?"text-accent-amber":"text-accent-red"}`,children:[O,"% correct"]})]}),c.jsxs("div",{className:"lesson-card mb-6",children:[c.jsx("h3",{className:"font-semibold mb-4",children:"Performance Summary"}),c.jsx("div",{className:"space-y-3",children:h.map((V,W)=>{const ce=y[W]===V.correctIndex;return c.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg ${ce?"bg-accent-green/10":"bg-accent-red/10"}`,children:[ce?c.jsx(Jo,{className:"w-5 h-5 text-accent-green"}):c.jsx(kh,{className:"w-5 h-5 text-accent-red"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:"text-sm truncate",children:V.question}),c.jsxs("p",{className:"text-xs text-gray-500",children:[V.moduleTitle," • ",V.lessonTitle]})]})]},W)})})]}),c.jsxs("button",{onClick:()=>u("setup"),className:"w-full py-3 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2",children:[c.jsx(Ev,{className:"w-4 h-4"}),"Take Another Quiz"]})]})}const q=h[b],G=y[b]!==void 0;return c.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-8",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsxs("span",{className:"text-sm text-gray-400",children:["Question ",b+1," of ",h.length]}),c.jsx("div",{className:"flex items-center gap-2",children:c.jsx("div",{className:"w-32 h-2 bg-dark-600 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-accent-cyan transition-all",style:{width:`${(b+1)/h.length*100}%`}})})})]}),c.jsxs("div",{className:"lesson-card mb-6",children:[c.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[q.moduleTitle," • ",q.lessonTitle]}),c.jsx("h2",{className:"text-xl font-semibold mb-6",children:q.question}),c.jsx("div",{className:"space-y-3",children:q.options.map((O,V)=>{const W=y[b]===V,ce=V===q.correctIndex;let P="quiz-option";return G?ce?P+=" correct":W&&(P+=" incorrect"):W&&(P+=" selected"),c.jsx("button",{onClick:()=>Q(V),className:P,disabled:G,children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"w-8 h-8 rounded-lg bg-dark-600 flex items-center justify-center font-mono text-sm",children:String.fromCharCode(65+V)}),c.jsx("span",{children:O})]})},V)})}),R&&c.jsxs("div",{className:`mt-6 p-4 rounded-lg ${y[b]===q.correctIndex?"bg-accent-green/10 border border-accent-green/30":"bg-accent-amber/10 border border-accent-amber/30"}`,children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[y[b]===q.correctIndex?c.jsx(Jo,{className:"w-5 h-5 text-accent-green"}):c.jsx(kh,{className:"w-5 h-5 text-accent-red"}),c.jsx("span",{className:"font-semibold",children:y[b]===q.correctIndex?"Correct!":"Incorrect"})]}),c.jsx("p",{className:"text-sm text-gray-300",children:q.explanation})]})]}),G&&c.jsx("button",{onClick:F,className:"w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all",children:b<h.length-1?"Next Question":"See Results"})]})}const Gv=["All",...Array.from(new Set(Wh.map(s=>s.category)))];function Yv(){const[s,u]=A.useState(""),[f,o]=A.useState("All"),h=Wh.filter(w=>{const y=w.term.toLowerCase().includes(s.toLowerCase())||w.definition.toLowerCase().includes(s.toLowerCase()),g=f==="All"||w.category===f;return y&&g}),m=h.reduce((w,y)=>{const g=y.term[0].toUpperCase();return w[g]||(w[g]=[]),w[g].push(y),w},{}),b=Object.keys(m).sort();return c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx(gt,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Glossary"}),c.jsx("p",{className:"text-gray-400",children:"Key terms and definitions for repo markets and CCPs"})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(Mv,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"}),c.jsx("input",{type:"text",placeholder:"Search terms...",value:s,onChange:w=>u(w.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500"})]}),c.jsxs("div",{className:"relative sm:w-48",children:[c.jsx(Cv,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"}),c.jsx("select",{value:f,onChange:w=>o(w.target.value),className:"w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white appearance-none",children:Gv.map(w=>c.jsx("option",{value:w,children:w},w))})]})]}),c.jsx("div",{className:"space-y-8",children:b.map(w=>c.jsxs("div",{children:[c.jsx("h2",{className:"text-3xl font-bold text-accent-cyan mb-4 sticky top-20 bg-dark-900 py-2",children:w}),c.jsx("div",{className:"space-y-4",children:m[w].map(y=>c.jsxs("div",{className:"lesson-card",children:[c.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[c.jsx("h3",{className:"text-lg font-semibold text-white",children:y.term}),c.jsx("span",{className:"text-xs px-2 py-1 bg-dark-600 rounded text-gray-400 whitespace-nowrap",children:y.category})]}),c.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:y.definition})]},y.term))})]},w))}),h.length===0&&c.jsx("div",{className:"text-center py-12 text-gray-500",children:"No terms found matching your search."})]})}const Xv={"Industry Guide":gt,"Regulatory Standard":os,"Official Website":ms,"Academic Paper":os,"Official Documentation":gt,"Regulatory Disclosure":os,"Research Paper":os,"Industry Report":gt};function Qv(){return c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx(gt,{className:"w-12 h-12 text-accent-cyan mx-auto mb-4"}),c.jsx("h1",{className:"text-2xl font-bold mb-2",children:"Sources & References"}),c.jsx("p",{className:"text-gray-400",children:"Academic papers, industry guides, and official documentation"})]}),c.jsx("div",{className:"space-y-4",children:Bv.map((s,u)=>{const f=Xv[s.type]||gt;return c.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"lesson-card group flex items-start gap-4",children:[c.jsx("div",{className:"w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0",children:c.jsx(f,{className:"w-5 h-5 text-accent-cyan"})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-start justify-between gap-4",children:[c.jsx("h3",{className:"font-semibold group-hover:text-accent-cyan transition-colors",children:s.title}),c.jsx(ic,{className:"w-4 h-4 text-gray-500 group-hover:text-accent-cyan transition-colors flex-shrink-0"})]}),c.jsx("p",{className:"text-sm text-gray-400 mb-2",children:s.author}),c.jsx("p",{className:"text-sm text-gray-500 mb-2",children:s.description}),c.jsx("div",{className:"flex items-center gap-2",children:c.jsx("span",{className:"text-xs px-2 py-1 bg-dark-600 rounded text-gray-400",children:s.type})})]})]},u)})}),c.jsxs("div",{className:"mt-12 p-6 bg-dark-800 border border-dark-600 rounded-lg",children:[c.jsx("h3",{className:"font-semibold mb-3",children:"Additional Resources"}),c.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[c.jsx("li",{children:"• DTCC/FICC official disclosures and rulebooks"}),c.jsx("li",{children:"• BIS Committee on Payments and Market Infrastructures (CPMI) reports"}),c.jsx("li",{children:"• Federal Reserve Bank of New York repo market primers"}),c.jsx("li",{children:"• JPX/JSCC clearing documentation"}),c.jsx("li",{children:"• SGX and HKEX clearing disclosures"})]})]})]})}const Jv={id:"root",label:"Global Finance",description:"Understanding the interconnected world of financial systems, markets, and institutions",children:[{id:"money-markets",label:"Money Markets",description:"Short-term debt markets, liquidity, and funding",children:[{id:"repo",label:"Repurchase Agreements (Repo)",description:"Collateralized short-term lending",relatedLessons:["us-repo/lesson-1","asia-repo/lesson-1"],externalLinks:[{title:"ICMA Repo FAQ",url:"https://www.icmagroup.org/market-practice-and-regulatory-policy/repo-and-collateral-markets/icma-ercc-publications/frequently-asked-questions-on-repo/",source:"ICMA"},{title:"Fed Tri-Party Reform",url:"https://www.newyorkfed.org/banking/tpr_infr_reform.html",source:"Federal Reserve"}]},{id:"commercial-paper",label:"Commercial Paper",description:"Short-term corporate debt instruments"},{id:"treasury-bills",label:"Treasury Bills",description:"Government short-term securities"},{id:"certificates-deposit",label:"Certificates of Deposit",description:"Bank-issued time deposits"}]},{id:"central-banking",label:"Central Banking",description:"Monetary policy, interest rates, and financial stability",children:[{id:"monetary-policy",label:"Monetary Policy",description:"Central bank actions to influence economic conditions",children:[{id:"federal-funds-rate",label:"Federal Funds Rate",description:"US overnight interbank lending rate",relatedLessons:["us-repo/lesson-7"],externalLinks:[{title:"Fed Explained: Monetary Policy",url:"https://www.federalreserve.gov/aboutthefed/fedexplained/monetary-policy.htm",source:"Federal Reserve"},{title:"St. Louis Fed: Policy Implementation",url:"https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy",source:"St. Louis Fed"}]},{id:"quantitative-easing",label:"Quantitative Easing",description:"Large-scale asset purchases by central banks"},{id:"interest-on-reserves",label:"Interest on Reserves",description:"Paying interest on bank reserves held at central bank",externalLinks:[{title:"Fed Policy Tools",url:"https://www.stlouisfed.org/in-plain-english/the-fed-implements-monetary-policy",source:"St. Louis Fed"}]}]},{id:"central-banks",label:"Major Central Banks",description:"Key global monetary authorities",children:[{id:"federal-reserve",label:"Federal Reserve (US)",description:"US central bank"},{id:"ecb",label:"European Central Bank",description:"Eurozone monetary authority"},{id:"bank-of-england",label:"Bank of England",description:"UK central bank"},{id:"bank-of-japan",label:"Bank of Japan",description:"Japanese monetary authority"},{id:"pbc",label:"People's Bank of China",description:"Chinese central bank"}]},{id:"lender-last-resort",label:"Lender of Last Resort",description:"Central bank role in providing emergency liquidity"}]},{id:"derivatives",label:"Derivatives",description:"Financial contracts deriving value from underlying assets",children:[{id:"interest-rate-derivatives",label:"Interest Rate Derivatives",description:"Swaps, futures, options on interest rates",externalLinks:[{title:"IGC Working Paper on Derivatives",url:"https://www.theigc.org/sites/default/files/2015/02/Sundaram-2012-Working-Paper.pdf",source:"IGC"},{title:"IMF on Derivatives",url:"https://www.elibrary.imf.org/display/book/9781589062917/ch04.xml",source:"IMF"}]},{id:"fx-derivatives",label:"FX Derivatives",description:"Currency forwards, swaps, options"},{id:"credit-derivatives",label:"Credit Derivatives",description:"CDS, total return swaps, credit-linked notes"},{id:"equity-derivatives",label:"Equity Derivatives",description:"Stock options, futures, swaps"}]},{id:"ccps",label:"Central Counterparties",description:"Clearing houses that guarantee trades",children:[{id:"ccp-functions",label:"CCP Functions",description:"Novation, netting, margining, default management",externalLinks:[{title:"Clearing Houses Explained",url:"https://futurestradingpedia.com/clearing-house-explained-what-is-a-clearing-organization-and-how-does-it-work/",source:"Futures Trading Pedia"}]},{id:"us-ccps",label:"US CCPs",description:"DTCC, CME, ICE, OCC",relatedLessons:["us-repo/lesson-3","us-repo/lesson-4"]},{id:"asia-ccps",label:"Asia CCPs",description:"JSCC, CDP, HKSCC, KSD",relatedLessons:["asia-repo/lesson-2","asia-repo/lesson-3"]},{id:"ccp-risk",label:"CCP Risk Management",description:"Default waterfalls, stress testing, recovery/resolution",externalLinks:[{title:"BIS WP 1052: Multi-CCP Risk",url:"https://www.bis.org/publ/work1052.htm",source:"BIS"}]}]},{id:"systemic-risk",label:"Systemic Risk",description:"Risks to the entire financial system",children:[{id:"contagion",label:"Financial Contagion",description:"Transmission of distress across institutions",externalLinks:[{title:"BIS WP 597: Bank Networks",url:"https://www.bis.org/publ/work597.pdf",source:"BIS"},{title:"ECB on Contagion",url:"https://www.ecb.europa.eu/pub/pdf/scpwps/ecb.wp2929~19cda4a673.en.pdf",source:"ECB"},{title:"OFR on Financial Networks",url:"https://www.financialresearch.gov/working-papers/files/OFRwp-2015-21_Contagion-in-Financial-Networks.pdf",source:"OFR"}]},{id:"financial-crises",label:"Financial Crises",description:"Historical crisis patterns and lessons",children:[{id:"2008-crisis",label:"2008 Global Financial Crisis",description:"Housing bubble, Lehman, repo market seize"},{id:"covid-crisis",label:"2020 COVID Crisis",description:"Flight to quality, central bank intervention"},{id:"asian-crisis",label:"1997 Asian Financial Crisis",description:"Currency attacks, IMF interventions"}]},{id:"too-big-fail",label:"Too Big to Fail",description:"Systemically important institutions",externalLinks:[{title:"IMF on CCP Resolution",url:"https://www.imf.org/external/pubs/ft/wp/2015/wp1521.pdf",source:"IMF"}]}]},{id:"global-finance",label:"Global Finance",description:"International capital flows and exchange",children:[{id:"capital-flows",label:"International Capital Flows",description:"Cross-border investment and financing",externalLinks:[{title:"EconLib: International Capital Flows",url:"https://www.econlib.org/library/Enc/InternationalCapitalFlows.html",source:"EconLib"},{title:"Fed on Capital Flows",url:"https://www.federalreserve.gov/econres/notes/feds-notes/globalization-and-the-geography-of-capital-flows-20190906.html",source:"Federal Reserve"}]},{id:"balance-payments",label:"Balance of Payments",description:"Record of all economic transactions between countries",externalLinks:[{title:"Financial Edge: BoP Guide",url:"https://www.fe.training/free-resources/financial-markets/global-economics-balance-of-payments/",source:"Financial Edge"}]},{id:"exchange-rates",label:"Exchange Rates",description:"FX markets and currency valuation"},{id:"sovereign-debt",label:"Sovereign Debt",description:"Government borrowing and debt management"}]},{id:"regulation",label:"Financial Regulation",description:"Rules governing financial institutions and markets",children:[{id:"pfmi",label:"PFMI Standards",description:"Principles for Financial Market Infrastructures",externalLinks:[{title:"CPMI-IOSCO PFMI",url:"https://www.bis.org/cpmi/publ/d101.htm",source:"BIS"}]},{id:"dodd-frank",label:"Dodd-Frank Act",description:"US financial reform legislation"},{id:"basel-iii",label:"Basel III",description:"Global banking capital standards"},{id:"emir",label:"EMIR",description:"EU derivatives regulation"}]}]};function $h({node:s,depth:u=0,onNodeClick:f}){const[o,h]=A.useState(u<1),m=s.children&&s.children.length>0;return c.jsxs("div",{className:"mb-2",children:[c.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all hover:bg-dark-700 ${u===0?"bg-dark-800 border border-dark-600":""}`,style:{marginLeft:`${u*16}px`},onClick:()=>{m&&h(!o),f==null||f(s)},children:[m?o?c.jsx(yv,{className:"w-4 h-4 text-gray-400"}):c.jsx(vv,{className:"w-4 h-4 text-gray-400"}):c.jsx(Th,{className:"w-4 h-4 text-gray-600"}),s.completed?c.jsx(bv,{className:"w-4 h-4 text-green-500"}):c.jsx(Th,{className:"w-4 h-4 text-gray-600"}),c.jsx("span",{className:`font-medium ${u===0?"text-white":u===1?"text-accent-cyan":"text-gray-300"}`,children:s.label}),s.relatedLessons&&s.relatedLessons.length>0&&c.jsx(gt,{className:"w-4 h-4 text-accent-blue ml-auto",title:"Related lessons available"})]}),s.description&&o&&c.jsx("div",{className:"ml-6 mt-1 mb-2 text-sm text-gray-400",style:{marginLeft:`${(u+1)*16}px`},children:s.description}),s.externalLinks&&o&&s.externalLinks.length>0&&c.jsx("div",{className:"ml-6 mb-2 space-y-1",style:{marginLeft:`${(u+1)*16}px`},children:s.externalLinks.map((b,w)=>c.jsxs("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-accent-cyan hover:text-white transition-colors",children:[c.jsx(ic,{className:"w-3 h-3"}),c.jsx("span",{children:b.title}),c.jsxs("span",{className:"text-xs text-gray-500",children:["(",b.source,")"]})]},w))}),o&&m&&c.jsx("div",{className:"mt-1",children:s.children.map(b=>c.jsx($h,{node:b,depth:u+1,onNodeClick:f},b.id))})]})}function Vv(){const[s,u]=A.useState(null);return c.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-12",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold mb-4 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent",children:"Finance Concept Hierarchy"}),c.jsx("p",{className:"text-gray-400 max-w-2xl",children:"Explore the interconnected world of finance. Click on concepts to expand their hierarchy, discover related lessons, and access curated external resources."})]}),c.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[c.jsx("div",{className:"lg:col-span-2",children:c.jsx("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6",children:c.jsx($h,{node:Jv,onNodeClick:u})})}),c.jsxs("div",{className:"lg:col-span-1",children:[s&&c.jsxs("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4 text-white",children:s.label}),s.description&&c.jsx("p",{className:"text-gray-400 mb-4",children:s.description}),s.externalLinks&&s.externalLinks.length>0&&c.jsxs("div",{className:"mb-4",children:[c.jsx("h3",{className:"text-sm font-semibold text-accent-cyan mb-3",children:"External Resources"}),c.jsx("div",{className:"space-y-2",children:s.externalLinks.map((f,o)=>c.jsxs("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"block p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[c.jsx(ic,{className:"w-4 h-4 text-accent-cyan"}),c.jsx("span",{className:"font-medium text-sm text-white",children:f.title})]}),c.jsxs("span",{className:"text-xs text-gray-500",children:["Source: ",f.source]})]},o))})]}),s.relatedLessons&&s.relatedLessons.length>0&&c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-semibold text-accent-cyan mb-3",children:"Related Lessons"}),c.jsx("div",{className:"space-y-2",children:s.relatedLessons.map((f,o)=>c.jsx("div",{className:"p-3 bg-dark-700 rounded-lg",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(gt,{className:"w-4 h-4 text-accent-blue"}),c.jsx("span",{className:"text-sm text-gray-300",children:f})]})},o))})]})]}),!s&&c.jsx("div",{className:"bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20",children:c.jsx("p",{className:"text-gray-400 text-sm",children:"Click on a concept in the tree to see its details, external resources, and related lessons."})})]})]})]})}function Kv(){return c.jsx(zy,{children:c.jsxs(Ft,{path:"/",element:c.jsx(jv,{}),children:[c.jsx(Ft,{index:!0,element:c.jsx(Ov,{})}),c.jsx(Ft,{path:"module/:moduleId",element:c.jsx(Lv,{})}),c.jsx(Ft,{path:"lesson/:moduleId/:lessonId",element:c.jsx(Hv,{})}),c.jsx(Ft,{path:"compare",element:c.jsx(Fv,{})}),c.jsx(Ft,{path:"quiz",element:c.jsx(Iv,{})}),c.jsx(Ft,{path:"glossary",element:c.jsx(Yv,{})}),c.jsx(Ft,{path:"sources",element:c.jsx(Qv,{})}),c.jsx(Ft,{path:"concepts",element:c.jsx(Vv,{})})]})})}zg.createRoot(document.getElementById("root")).render(c.jsx(A.StrictMode,{children:c.jsx(av,{children:c.jsx(Kv,{})})}));
