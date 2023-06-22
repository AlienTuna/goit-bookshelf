!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),i.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return N()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=C(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var _={};u(_,a,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(P([])));b&&b!==n&&r.call(b,a)&&(_=b);var w=g.prototype=y.prototype=Object.create(_);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function C(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=g,u(w,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(x.prototype),u(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},I(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),i.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),i.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),i.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n}})),i.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),i.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||a.default()};var n=s(i("8slrw")),r=s(i("7AJDX")),a=s(i("ifqQW")),o=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||a.default()};var n=s(i("kMC0W")),r=s(i("7AJDX")),a=s(i("8CtQK")),o=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),i.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,i=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a.default(this,n)}};var n=o(i("aTHs7")),r=o(i("fVNic")),a=o(i("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),i.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),i.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=a(i("ds8z5")),r=a(i("l5bVx"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var a=i("bpxeT"),o=i("2TvXO"),s=i("ds8z5"),u=i("8MBJY"),c=i("a2hTj"),l=i("eYQtU"),h=i("1t1Wn"),f=i("8nrFW"),d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return _(e)};var p=g(i("ge8co")),v=g(i("cZGw3")),y=g(i("fVNic")),m=g(i("gD1JV"));function g(e){return e&&e.__esModule?e:{default:e}}function _(e){var t="function"==typeof Map?new Map:void 0;return _=function(e){if(null===e||!v.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p.default(e,arguments,y.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m.default(n,e)},_(e)}var k,b,w,I=i("2MbLg"),x=k={};function C(){throw new Error("setTimeout has not been defined")}function T(){throw new Error("clearTimeout has not been defined")}function E(e){if(b===setTimeout)return setTimeout(e,0);if((b===C||!b)&&setTimeout)return b=setTimeout,setTimeout(e,0);try{return b(e,0)}catch(t){try{return b.call(null,e,0)}catch(t){return b.call(this,e,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:C}catch(e){b=C}try{w="function"==typeof clearTimeout?clearTimeout:T}catch(e){w=T}}();var S,P=[],N=!1,R=-1;function O(){N&&S&&(N=!1,S.length?P=S.concat(P):R=-1,P.length&&A())}function A(){if(!N){var e=E(O);N=!0;for(var t=P.length;t;){for(S=P,P=[];++R<t;)S&&S[R].run();R=-1,t=P.length}S=null,N=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===T||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(t){try{return w.call(null,e)}catch(t){return w.call(this,e)}}}(e)}}function D(e,t){this.fun=e,this.array=t}function M(){}x.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];P.push(new D(e,t)),1!==P.length||N||E(A)},D.prototype.run=function(){this.fun.apply(null,this.array)},x.title="browser",x.browser=!0,x.env={},x.argv=[],x.version="",x.versions={},x.on=M,x.addListener=M,x.once=M,x.off=M,x.removeListener=M,x.removeAllListeners=M,x.emit=M,x.prependListener=M,x.prependOnceListener=M,x.listeners=function(e){return[]},x.binding=function(e){throw new Error("process.binding is not supported")},x.cwd=function(){return"/"},x.chdir=function(e){throw new Error("process.chdir is not supported")},x.umask=function(){return 0};
/**
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
 */
var L=!1,F=!1,j="${JSCORE_VERSION}",U=function(e,t){if(!e)throw q(t)},q=function(e){return new Error("Firebase Database ("+j+") INTERNAL ASSERT FAILED: "+e)},W=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},V={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(W(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new H;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},H=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){var t;return e(u)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(d)(Error)),B=function(e){var t=W(e);return V.encodeByteArray(t,!0)},z=function(e){return B(e).replace(/\./g,"")},K=function(e){try{return V.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function G(e){return Y(void 0,e)}function Y(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Y(e[n],t[n]));return e}
/**
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
 */
var J=function(){
/**
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
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},Q=function(){try{return J()||function(){if(void 0!==k&&void 0!==k.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&K(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},$=function(e){var t,n;return null===(n=null===(t=Q())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},X=function(e){var t=$(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},Z=function(){var e;return null===(e=Q())||void 0===e?void 0:e.config},ee=function(e){var t;return null===(t=Q())||void 0===t?void 0:t["_".concat(e)]},te=function(){"use strict";function t(){var n=this;e(u)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(c)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
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
 */
function ne(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[z(JSON.stringify({alg:"none",type:"JWT"})),z(JSON.stringify(a)),""].join(".")}
/**
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
 */function re(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ie(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function ae(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function oe(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function se(){return!0===L||!0===F}function ue(){try{return"object"==typeof indexedDB}catch(e){return!1}}function ce(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function le(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
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
 */var he=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i,a){var o;return e(u)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(s)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(s)(o),fe.prototype.create),o}return r}(e(d)(Error)),fe=function(){"use strict";function t(n,r,i){e(u)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(c)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?de(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new he(a,u,i);return c}}]),t}();function de(e,t){return e.replace(pe,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var pe=/\{\$([^}]+)}/g;
/**
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
 */function ve(e){return JSON.parse(e)}function ye(e){return JSON.stringify(e)}
/**
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
 */var me=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=ve(K(a[0])||""),n=ve(K(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},ge=function(e){var t=me(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
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
 */
function _e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ke(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function be(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function we(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Ie(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(xe(l)&&xe(h)){if(!Ie(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,p=void 0;try{for(var v,y=r[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){d=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw p}}return!0}function xe(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function Ce(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(h)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function Te(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(h)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function Ee(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */var Se=function(){"use strict";function t(){e(u)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(c)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],f=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=f^l&(h^f),u=1518500249):(s=l^h^f,u=1859775393):p<60?(s=l&h|f&(l|h),u=2400959708):(s=l^h^f,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=f,f=h,h=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var Pe=function(){"use strict";function t(n,r){var i=this;e(u)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(c)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ne),void 0===r.error&&(r.error=Ne),void 0===r.complete&&(r.complete=Ne);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Ne(){}
/**
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
 */function Re(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
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
 */
var Oe=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,U(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ae=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},De=144e5;function Me(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(De,r+i)}
/**
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
 */
/**
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
 */
function Le(e){return e&&e._delegate?e._delegate:e}a=i("bpxeT"),u=i("8MBJY"),c=i("a2hTj");var Fe=i("hKHmD"),je=(f=i("8nrFW"),o=i("2TvXO"),a=i("bpxeT"),u=i("8MBJY"),c=i("a2hTj"),h=i("1t1Wn"),f=i("8nrFW"),o=i("2TvXO"),function(){"use strict";function t(n,r,i){e(u)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(c)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}()),Ue="[DEFAULT]",qe=function(){"use strict";function t(n,r){e(u)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(c)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new te;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(h)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(f)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(f)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(h)(c.value,2),d=f[0],p=f[1],v=this.normalizeInstanceIdentifier(d);i===v&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ue?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return this.component?this.component.multipleInstances?e:Ue:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();var We,Ve,He=function(){"use strict";function t(n){e(u)(this,t),this.name=n,this.providers=new Map}return e(c)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new qe(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Be=(u=i("8MBJY"),c=i("a2hTj"),Fe=i("hKHmD"),f=i("8nrFW"),[]);(Ve=We||(We={}))[Ve.DEBUG=0]="DEBUG",Ve[Ve.VERBOSE=1]="VERBOSE",Ve[Ve.INFO=2]="INFO",Ve[Ve.WARN=3]="WARN",Ve[Ve.ERROR=4]="ERROR",Ve[Ve.SILENT=5]="SILENT";var ze,Ke={debug:We.DEBUG,verbose:We.VERBOSE,info:We.INFO,warn:We.WARN,error:We.ERROR,silent:We.SILENT},Ge=We.INFO,Ye=(ze={},e(Fe)(ze,We.DEBUG,"log"),e(Fe)(ze,We.VERBOSE,"log"),e(Fe)(ze,We.INFO,"info"),e(Fe)(ze,We.WARN,"warn"),e(Fe)(ze,We.ERROR,"error"),ze),Je=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Ye[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(f)(i)))}},Qe=function(){"use strict";function t(n){e(u)(this,t),this.name=n,this._logLevel=Ge,this._logHandler=Je,this._userLogHandler=null,Be.push(this)}return e(c)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in We))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ke[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,We.DEBUG].concat(e(f)(n))),this._logHandler.apply(this,[this,We.DEBUG].concat(e(f)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,We.VERBOSE].concat(e(f)(n))),this._logHandler.apply(this,[this,We.VERBOSE].concat(e(f)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,We.INFO].concat(e(f)(n))),this._logHandler.apply(this,[this,We.INFO].concat(e(f)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,We.WARN].concat(e(f)(n))),this._logHandler.apply(this,[this,We.WARN].concat(e(f)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,We.ERROR].concat(e(f)(n))),this._logHandler.apply(this,[this,We.ERROR].concat(e(f)(n)))}}]),t}();a=i("bpxeT");var $e={};Object.defineProperty($e,"__esModule",{value:!0}),$e.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ze.default(e,t,n[t])}))}return e};var Xe,Ze=(Xe=i("hKHmD"))&&Xe.__esModule?Xe:{default:Xe};var et,tt;f=i("8nrFW"),o=i("2TvXO"),f=i("8nrFW");var nt=new WeakMap,rt=new WeakMap,it=new WeakMap,at=new WeakMap,ot=new WeakMap;var st={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return rt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||it.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ut(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(tt||(tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(ht(this),n),lt(nt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return lt(t.apply(ht(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[ht(this),n].concat(e(f)(i)));return it.set(s,n.sort?n.sort():[n]),lt(s)}}function ct(e){return"function"==typeof e?ut(e):(e instanceof IDBTransaction&&function(e){if(!rt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));rt.set(e,t)}}(e),t=e,(et||(et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,st):e);var t}function lt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(lt(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&nt.set(e,t)})).catch((function(){})),ot.set(n,t),n;var t,n;if(at.has(e))return at.get(e);var r=ct(e);return r!==e&&(at.set(e,r),ot.set(r,e)),r}var ht=function(e){return ot.get(e)};function ft(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=lt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(lt(s.result),e.oldVersion,e.newVersion,lt(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var dt=["get","getKey","getAll","getAllKeys","count"],pt=["put","add","delete","clear"],vt=new Map;function yt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(vt.get(n))return vt.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,s=pt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(s||dt.includes(r))){var u,c=(u=e(a)(e(o).mark((function t(n){var a,u,c,l,h,d,p=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=p.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=p[c];return h=this.transaction(n,s?"readwrite":"readonly"),d=h.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[r].apply(l,e(f)(u)),s&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return vt.set(n,c),c}}}st=function(t){return e($e)({},t,{get:function(e,n,r){return yt(e,n)||t.get(e,n,r)},has:function(e,n){return!!yt(e,n)||t.has(e,n)}})}(st);
/**
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
 */
var mt=function(){"use strict";function t(n){e(u)(this,t),this.container=n}return e(c)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var gt,_t,kt="@firebase/app",bt="0.9.12",wt=new Qe("@firebase/app"),It="[DEFAULT]",xt=(gt={},e(Fe)(gt,kt,"fire-core"),e(Fe)(gt,"@firebase/app-compat","fire-core-compat"),e(Fe)(gt,"@firebase/analytics","fire-analytics"),e(Fe)(gt,"@firebase/analytics-compat","fire-analytics-compat"),e(Fe)(gt,"@firebase/app-check","fire-app-check"),e(Fe)(gt,"@firebase/app-check-compat","fire-app-check-compat"),e(Fe)(gt,"@firebase/auth","fire-auth"),e(Fe)(gt,"@firebase/auth-compat","fire-auth-compat"),e(Fe)(gt,"@firebase/database","fire-rtdb"),e(Fe)(gt,"@firebase/database-compat","fire-rtdb-compat"),e(Fe)(gt,"@firebase/functions","fire-fn"),e(Fe)(gt,"@firebase/functions-compat","fire-fn-compat"),e(Fe)(gt,"@firebase/installations","fire-iid"),e(Fe)(gt,"@firebase/installations-compat","fire-iid-compat"),e(Fe)(gt,"@firebase/messaging","fire-fcm"),e(Fe)(gt,"@firebase/messaging-compat","fire-fcm-compat"),e(Fe)(gt,"@firebase/performance","fire-perf"),e(Fe)(gt,"@firebase/performance-compat","fire-perf-compat"),e(Fe)(gt,"@firebase/remote-config","fire-rc"),e(Fe)(gt,"@firebase/remote-config-compat","fire-rc-compat"),e(Fe)(gt,"@firebase/storage","fire-gcs"),e(Fe)(gt,"@firebase/storage-compat","fire-gcs-compat"),e(Fe)(gt,"@firebase/firestore","fire-fst"),e(Fe)(gt,"@firebase/firestore-compat","fire-fst-compat"),e(Fe)(gt,"fire-js","fire-js"),e(Fe)(gt,"firebase","fire-js-all"),gt),Ct=new Map,Tt=new Map;function Et(e,t){try{e.container.addComponent(t)}catch(n){wt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function St(e){var t=e.name;if(Tt.has(t))return wt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Tt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=Ct.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Et(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Pt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
var Nt=(_t={},e(Fe)(_t,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),e(Fe)(_t,"bad-app-name","Illegal App name: '{$appName}"),e(Fe)(_t,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(Fe)(_t,"app-deleted","Firebase App named '{$appName}' already deleted"),e(Fe)(_t,"no-options","Need to provide options, when not being deployed to hosting via source."),e(Fe)(_t,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(Fe)(_t,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(Fe)(_t,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(Fe)(_t,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(Fe)(_t,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(Fe)(_t,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),_t),Rt=new fe("app","Firebase",Nt),Ot=function(){"use strict";function t(n,r,i){var a=this;e(u)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new je("app",(function(){return a}),"PUBLIC"))}return e(c)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}]),t}(),At="9.22.2";function Dt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:It,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Rt.create("bad-app-name",{appName:String(a)});if(n||(n=Z()),!n)throw Rt.create("no-options");var o=Ct.get(a);if(o){if(Ie(n,o.options)&&Ie(i,o.config))return o;throw Rt.create("duplicate-app",{appName:a})}var s=new He(a),u=!0,c=!1,l=void 0;try{for(var h,f=Tt.values()[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var p=new Ot(n,i,s);return Ct.set(a,p),p}function Mt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=Ct.get(e);if(!t&&e===It&&Z())return Dt();if(!t)throw Rt.create("no-app",{appName:e});return t}function Lt(e,t,n){var r,i=null!==(r=xt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void wt.warn(s.join(" "))}St(new je("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
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
 */
var Ft="firebase-heartbeat-store",jt=null;function Ut(){return jt||(jt=ft("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ft)}}).catch((function(e){throw Rt.create("idb-open",{originalErrorMessage:e.message})}))),jt}function qt(e){return Wt.apply(this,arguments)}function Wt(){return(Wt=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ut();case 3:return r=e.sent,e.next=6,r.transaction(Ft).objectStore(Ft).get(Bt(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof he?wt.warn(e.t0.message):(a=Rt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),wt.warn(a.message));case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function Vt(e,t){return Ht.apply(this,arguments)}function Ht(){return(Ht=e(a)(e(o).mark((function t(n,r){var i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ut();case 3:return i=e.sent,a=i.transaction(Ft,"readwrite"),s=a.objectStore(Ft),e.next=8,s.put(r,Bt(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof he?wt.warn(e.t0.message):(u=Rt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),wt.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function Bt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
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
 */var zt=function(){"use strict";function t(n){var r=this;e(u)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Jt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(c)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Kt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=Kt(),i=Gt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,s=i.unsentEntries,u=z(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function Kt(){return(new Date).toISOString().substring(0,10)}function Gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Qt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Qt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Yt,Jt=function(){"use strict";function t(n){e(u)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(c)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",ce().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,qt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",Vt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Vt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(f)(a.heartbeats).concat(e(f)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Qt(e){return z(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */Yt="",St(new je("platform-logger",(function(e){return new mt(e)}),"PRIVATE")),St(new je("heartbeat",(function(e){return new zt(e)}),"PRIVATE")),Lt(kt,bt,Yt),Lt(kt,bt,"esm2017"),Lt("fire-js","");s=i("ds8z5"),a=i("bpxeT"),u=i("8MBJY"),c=i("a2hTj"),Fe=i("hKHmD");var $t={};Object.defineProperty($t,"__esModule",{value:!0}),$t.default=function(e,t,n){return Zt(e,t,n)};var Xt=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Zt(e,t,n){return(Zt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Xt.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var en=i("fVNic");l=i("eYQtU"),h=i("1t1Wn"),f=i("8nrFW"),I=i("2MbLg"),o=i("2TvXO");function tn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function nn(){return e(Fe)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var rn=nn,an=new fe("auth","Firebase",nn()),on=new Qe("@firebase/auth");function sn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;on.logLevel<=We.WARN&&(a=on).warn.apply(a,["Auth (".concat(At,"): ").concat(t)].concat(e(f)(r)))}function un(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;on.logLevel<=We.ERROR&&(a=on).error.apply(a,["Auth (".concat(At,"): ").concat(t)].concat(e(f)(r)))}
/**
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
 */function cn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw fn.apply(void 0,[t].concat(e(f)(r)))}function ln(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return fn.apply(void 0,[t].concat(e(f)(r)))}function hn(t,n,r){var i=Object.assign(Object.assign({},rn()),e(Fe)({},n,r));return new fe("auth","Firebase",i).create(n,{appName:t.name})}function fn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(f)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(f)(u)))}return(a=an).create.apply(a,[t].concat(e(f)(r)))}function dn(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw fn.apply(void 0,[n].concat(e(f)(i)))}function pn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw un(t),new Error(t)}function vn(e,t){e||pn(t)}
/**
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
 */function yn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function mn(){return"http:"===gn()||"https:"===gn()}function gn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */
/**
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
 */
var _n=function(){"use strict";function t(n,r){e(u)(this,t),this.shortDelay=n,this.longDelay=r,vn(r>n,"Short delay should be less than long delay!"),this.isMobile=ie()||oe()}return e(c)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(mn()||ae()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
/**
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
 */function kn(e,t){vn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
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
 */var bn,wn=function(){"use strict";function t(){e(u)(this,t)}return e(c)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),In=(bn={},e(Fe)(bn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(Fe)(bn,"MISSING_CUSTOM_TOKEN","internal-error"),e(Fe)(bn,"INVALID_IDENTIFIER","invalid-email"),e(Fe)(bn,"MISSING_CONTINUE_URI","internal-error"),e(Fe)(bn,"INVALID_PASSWORD","wrong-password"),e(Fe)(bn,"MISSING_PASSWORD","missing-password"),e(Fe)(bn,"EMAIL_EXISTS","email-already-in-use"),e(Fe)(bn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(Fe)(bn,"INVALID_IDP_RESPONSE","invalid-credential"),e(Fe)(bn,"INVALID_PENDING_TOKEN","invalid-credential"),e(Fe)(bn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(Fe)(bn,"MISSING_REQ_TYPE","internal-error"),e(Fe)(bn,"EMAIL_NOT_FOUND","user-not-found"),e(Fe)(bn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(Fe)(bn,"EXPIRED_OOB_CODE","expired-action-code"),e(Fe)(bn,"INVALID_OOB_CODE","invalid-action-code"),e(Fe)(bn,"MISSING_OOB_CODE","internal-error"),e(Fe)(bn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(Fe)(bn,"INVALID_ID_TOKEN","invalid-user-token"),e(Fe)(bn,"TOKEN_EXPIRED","user-token-expired"),e(Fe)(bn,"USER_NOT_FOUND","user-token-expired"),e(Fe)(bn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(Fe)(bn,"INVALID_CODE","invalid-verification-code"),e(Fe)(bn,"INVALID_SESSION_INFO","invalid-verification-id"),e(Fe)(bn,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(Fe)(bn,"MISSING_SESSION_INFO","missing-verification-id"),e(Fe)(bn,"SESSION_EXPIRED","code-expired"),e(Fe)(bn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(Fe)(bn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(Fe)(bn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(Fe)(bn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(Fe)(bn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(Fe)(bn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(Fe)(bn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(Fe)(bn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(Fe)(bn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(Fe)(bn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(Fe)(bn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),e(Fe)(bn,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),e(Fe)(bn,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),e(Fe)(bn,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),e(Fe)(bn,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),e(Fe)(bn,"MISSING_CLIENT_TYPE","missing-client-type"),e(Fe)(bn,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),e(Fe)(bn,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),e(Fe)(bn,"INVALID_REQ_TYPE","invalid-req-type"),bn),xn=new _n(3e4,6e4);function Cn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Tn(e,t,n,r){return En.apply(this,arguments)}function En(){return En=e(a)(e(o).mark((function t(n,r,i,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Sn(n,u,e(a)(e(o).mark((function t(){var a,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},s&&("GET"===r?u=s:a={body:JSON.stringify(s)}),c=Ce(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",wn.fetch()(On(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),En.apply(this,arguments)}function Sn(e,t,n){return Pn.apply(this,arguments)}function Pn(){return(Pn=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,f,d,p,v;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},In),r),t.prev=2,s=new An(n),t.next=6,Promise.race([i(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Dn(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=e(h)(l.split(" : "),2),d=f[0],p=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw Dn(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw Dn(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw Dn(n,"user-disabled",c);case 29:if(v=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw hn(n,v,p);case 34:cn(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof he)){t.next=41;break}throw t.t0;case 41:cn(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Nn(e,t,n,r){return Rn.apply(this,arguments)}function Rn(){return Rn=e(a)(e(o).mark((function t(n,r,i,a){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Tn(n,r,i,a,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&cn(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),Rn.apply(this,arguments)}function On(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?kn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var An=function(){"use strict";function t(n){var r=this;e(u)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(ln(n.auth,"network-request-failed"))}),xn.get())}))}return e(c)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Dn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=ln(e,t,r);return i.customData._tokenResponse=n,i}function Mn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=
/**
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
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tn(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fn(e,t){return jn.apply(this,arguments)}function jn(){return(jn=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tn(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */function Un(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function qn(){return qn=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Le(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,dn((s=Vn(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:Un(Wn(s.auth_time)),issuedAtTime:Un(Wn(s.iat)),expirationTime:Un(Wn(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),qn.apply(this,arguments)}function Wn(e){return 1e3*Number(e)}function Vn(t){var n=e(h)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return un("JWT malformed, contained fewer than 3 sections"),null;try{var o=K(i);return o?JSON.parse(o):(un("Failed to decode base64 JWT payload"),null)}catch(e){return un("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Hn(e,t){return Bn.apply(this,arguments)}function Bn(){return Bn=
/**
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
 */
e(a)(e(o).mark((function t(n,r){var i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof he&&zn(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Bn.apply(this,arguments)}function zn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */var Kn=function(){"use strict";function t(n){e(u)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(c)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),Gn=function(){"use strict";function t(n,r){e(u)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(c)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
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
 */function Yn(e){return Jn.apply(this,arguments)}function Jn(){return(Jn=
/**
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
 */
e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,h,f,d,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Hn(n,Fn(i,{idToken:a}));case 7:dn(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),u=s.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?Xn(u.providerUserInfo):[],l=$n(n.providerData,c),h=n.isAnonymous,f=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new Gn(u.createdAt,u.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qn(){return(Qn=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Le(n),e.next=3,Yn(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $n(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(f)(r).concat(e(f)(n))}function Xn(e){return e.map((function(e){var t=e.providerId,n=tn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Zn(e,t){return er.apply(this,arguments)}function er(){return(er=
/**
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
 */
e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Sn(n,{},e(a)(e(o).mark((function t(){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ce({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,s=a.tokenApiHost,u=a.apiKey,c=On(n,s,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",wn.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var tr=function(){"use strict";function t(){e(u)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(c)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){dn(e.idToken,"internal-error"),dn(void 0!==e.idToken,"internal-error"),dn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,dn(n=Vn(t),"internal-error"),dn(void 0!==n.exp,"internal-error"),dn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(dn(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zn(t,n);case 2:a=e.sent,s=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return pn("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(dn("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(dn("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(dn("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
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
 */function nr(e,t){dn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var rr=function(){"use strict";function t(n){e(u)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=tn(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(f)(o.providerData):[],this.metadata=new Gn(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(c)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Hn(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(dn(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return qn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Qn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(dn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){dn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Yn(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Hn(t,Mn(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,_=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;dn(_&&I,e,"internal-error");var x=tr.fromJSON(this.name,I);dn("string"==typeof _,e,"internal-error"),nr(h,e.name),nr(f,e.name),dn("boolean"==typeof k,e,"internal-error"),dn("boolean"==typeof b,e,"internal-error"),nr(d,e.name),nr(p,e.name),nr(v,e.name),nr(y,e.name),nr(m,e.name),nr(g,e.name);var C=new t({uid:_,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:x,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(C._redirectEventId=y),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(o).mark((function a(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new tr).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:s,isAnonymous:i}),e.next=5,Yn(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),ir=new Map;
/**
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
 */function ar(e){vn(e instanceof Function,"Expected a class definition");var t=ir.get(e);return t?(vn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ir.set(e,t),t)}
/**
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
 */var or=function(){"use strict";function t(){e(u)(this,t),this.type="NONE",this.storage={}}return e(c)(t,[{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();or.type="NONE";var sr=or;
/**
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
 */function ur(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var cr=function(){"use strict";function t(n,r,i){e(u)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=ur(this.userKey,o.apiKey,s),this.fullPersistenceKey=ur("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(c)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?rr._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(o).mark((function s(){var u,c,l,h,f,d,p,v,y,m,g,_,k;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.length){s.next=2;break}return s.abrupt("return",new t(ar(sr),n,i));case 2:return s.next=4,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||ar(sr),l=ur(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,p=void 0,s.prev=9,v=r[Symbol.iterator]();case 11:if(f=(y=v.next()).done){s.next=29;break}return m=y.value,s.prev=13,s.next=16,m._get(l);case 16:if(!(g=s.sent)){s.next=22;break}return _=rr._fromJSON(n,g),m!==c&&(h=_),c=m,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:f=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),d=!0,p=s.t1;case 35:s.prev=35,s.prev=36,f||null==v.return||v.return();case 38:if(s.prev=38,!d){s.next=41;break}throw p;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(k=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){s.next=46;break}return s.abrupt("return",new t(c,n,i));case 46:if(c=k[0],!h){s.next=50;break}return s.next=50,c._set(l,h.toJSON());case 50:return s.next=52,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,n,i));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
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
 */function lr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yr(t))return"Blackberry";if(mr(t))return"Webos";if(fr(t))return"Safari";if((t.includes("chrome/")||dr(t))&&!t.includes("edge/"))return"Chrome";if(vr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function hr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return/firefox\//i.test(e)}function fr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return/crios\//i.test(e)}function pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return/iemobile/i.test(e)}function vr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return/android/i.test(e)}function yr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return/blackberry/i.test(e)}function mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return/webos/i.test(e)}function gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _r(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return gr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function kr(){return((e=re()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re();return gr(e)||vr(e)||mr(e)||yr(e)||/windows phone/i.test(e)||pr(e)}
/**
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
 */
function wr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=lr(re());break;case"Worker":t="".concat(lr(re()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(At,"/").concat(r)}function Ir(e,t){return xr.apply(this,arguments)}function xr(){return(xr=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tn(n,"GET","/v2/recaptchaConfig",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */function Cr(e){return void 0!==e&&void 0!==e.enterprise}var Tr=function t(n){"use strict";if(e(u)(this,t),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
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
 */function Er(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=ln("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Sr(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var Pr="https://www.google.com/recaptcha/enterprise.js?render=",Nr="NO_RECAPTCHA",Rr=function(){"use strict";function t(n){e(u)(this,t),this.type="recaptcha-enterprise",this.auth=Lr(n)}return e(c)(t,[{key:"verify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){var s,u,c;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s=function(e){return u.apply(this,arguments)},u=function(){return u=e(a)(e(o).mark((function t(r){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){t.next=3;break}return t.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){t.next=5;break}return t.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return t.abrupt("return",new Promise(function(){var t=e(a)(e(o).mark((function t(n,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ir(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new Tr(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)},c=function(e,n,r){var i=window.grecaptcha;Cr(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:t}).then((function(e){n(e)})).catch((function(){n(Nr)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){s(r.auth).then((function(r){if(!n&&Cr(window.grecaptcha))c(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Er(Pr+r).then((function(){c(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),t}();function Or(e,t,n){return Ar.apply(this,arguments)}function Ar(){return Ar=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]&&l[3],s=new Rr(n),e.prev=3,e.next=6,s.verify(i);case 6:u=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,s.verify(i,!0);case 13:u=e.sent;case 14:return c=Object.assign({},r),a?Object.assign(c,{captchaResp:u}):Object.assign(c,{captchaResponse:u}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",c);case 19:case"end":return e.stop()}}),t,null,[[3,9]])}))),Ar.apply(this,arguments)}
/**
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
 */var Dr=function(){"use strict";function t(n){e(u)(this,t),this.auth=n,this.queue=[]}return e(c)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h,f,d,p,v,y,m;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,s=!1,u=void 0,e.prev=5,c=n.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return h=l.value,e.next=11,h(t);case 11:h.onAbort&&i.push(h.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s=!0,u=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!s){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),f=!0,d=!1,p=void 0,e.prev=35,v=i[Symbol.iterator]();!(f=(y=v.next()).done);f=!0){m=y.value;try{m()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,p=e.t2;case 43:e.prev=43,e.prev=44,f||null==v.return||v.return();case 46:if(e.prev=46,!d){e.next=49;break}throw p;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),Mr=function(){"use strict";function t(n,r,i,a){e(u)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fr(this),this.idTokenSubscription=new Fr(this),this.beforeStateQueue=new Dr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=an,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(c)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=ar(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,cr.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(s=r.currentUser)||void 0===s?void 0:s.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(s=h.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return dn(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(s));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Yn(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Le(t):null)&&dn(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&dn(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(ar(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"initializeRecaptchaConfig",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ir(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"});case 2:r=e.sent,i=new Tr(r),null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.emailPasswordEnabled&&new Rr(t).verify();case 6:case"end":return e.stop()}}),n)})))()}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new fe("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return dn(i=t&&ar(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,cr.create(n,[ar(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(s=n.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return dn(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return dn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(Fe)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,t._getAppCheckToken();case 9:return(s=n.sent)&&(i["X-Firebase-AppCheck"]=s),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,null===(r=t.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=e.sent)?void 0:i.error)&&sn("Error while retrieving App Check token: ".concat(i.error)),e.abrupt("return",null==i?void 0:i.token);case 6:case"end":return e.stop()}}),n)})))()}}]),t}();
/**
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
 */function Lr(e){return Le(e)}var Fr=function(){"use strict";function t(n){var r,i,a=this;e(u)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Pe((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(c)(t,[{key:"next",get:function(){return dn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
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
 */function jr(e,t){var n=Pt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ie(n.getOptions(),null!=t?t:{}))return r;cn(r,"already-initialized")}return n.initialize({options:t})}function Ur(t,n,r){var i=Lr(t);dn(i._canInitEmulator,i,"emulator-config-failed"),dn(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=qr(n),s=function(t){var n=qr(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Wr(i.substr(o.length+1))}}var s=e(h)(i.split(":"),2);return{host:s[0],port:Wr(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function qr(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Wr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Vr=function(){"use strict";function t(n,r){e(u)(this,t),this.providerId=n,this.signInMethod=r}return e(c)(t,[{key:"toJSON",value:function(){return pn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return pn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return pn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return pn("not implemented")}}]),t}();function Hr(e,t){return Br.apply(this,arguments)}function Br(){return(Br=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zr(e,t){return Kr.apply(this,arguments)}function Kr(){return(Kr=
/**
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
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Nn(n,"POST","/v1/accounts:signInWithPassword",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Gr(e,t){return Yr.apply(this,arguments)}function Yr(){return(Yr=
/**
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
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Nn(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jr(e,t){return Qr.apply(this,arguments)}function Qr(){return(Qr=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Nn(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var $r=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(u)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(c)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s,u;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(s={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,Or(t,s,"signInWithPassword");case 8:return u=r.sent,r.abrupt("return",zr(t,u));case 12:return r.abrupt("return",zr(t,s).catch(function(){var n=e(a)(e(o).mark((function n(r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==r.code){e.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),e.next=4,Or(t,s,"signInWithPassword");case 4:return i=e.sent,e.abrupt("return",zr(t,i));case 8:return e.abrupt("return",Promise.reject(r));case 9:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",Gr(t,{email:n._email,oobCode:n._password}));case 14:cn(t,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Hr(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Jr(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:cn(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Vr);function Xr(e,t){return Zr.apply(this,arguments)}function Zr(){return(Zr=
/**
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
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Nn(n,"POST","/v1/accounts:signInWithIdp",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var ei=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){var t;return e(u)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(c)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Xr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Xr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Xr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ce(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=tn(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Vr);function ti(e,t){return ni.apply(this,arguments)}function ni(){return(ni=
/**
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
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Tn(n,"POST","/v1/accounts:sendVerificationCode",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ri(){return(ri=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ii(){return(ii=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Dn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ai=e(Fe)({},"USER_NOT_FOUND","user-not-found");function oi(){return(oi=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,i),ai));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var si=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t){var i;return e(u)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(c)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ri.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ii.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return oi.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Vr);
/**
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
 */var ui=function(){"use strict";function t(n){var r,i,a,o,s,c;e(u)(this,t);var l=Te(Ee(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);dn(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(c)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=Te(Ee(e)).link,n=t?Te(Ee(t)).deep_link_id:null,r=Te(Ee(e)).deep_link_id;return(r?Te(Ee(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
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
 */
var ci=function(){"use strict";function t(){e(u)(this,t),this.providerId=t.PROVIDER_ID}return e(c)(t,null,[{key:"credential",value:function(e,t){return $r._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=ui.parseLink(t);return dn(n,"argument-error"),$r._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();ci.PROVIDER_ID="password",ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
var li=function(){"use strict";function t(n){e(u)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(c)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),hi=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){var t;return e(u)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(c)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(f)(this.scopes)}}]),r}(li),fi=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.call(this,"facebook.com")}return e(c)(r,null,[{key:"credential",value:function(e){return ei._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(hi);
/**
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
 */fi.FACEBOOK_SIGN_IN_METHOD="facebook.com",fi.PROVIDER_ID="facebook.com";
/**
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
 */
var di=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){var t;return e(u)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(c)(r,null,[{key:"credential",value:function(e,t){return ei._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(hi);di.GOOGLE_SIGN_IN_METHOD="google.com",di.PROVIDER_ID="google.com";
/**
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
 */
var pi=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.call(this,"github.com")}return e(c)(r,null,[{key:"credential",value:function(e){return ei._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(hi);pi.GITHUB_SIGN_IN_METHOD="github.com",pi.PROVIDER_ID="github.com";
/**
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
 */
var vi=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.call(this,"twitter.com")}return e(c)(r,null,[{key:"credential",value:function(e,t){return ei._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(hi);function yi(e,t){return mi.apply(this,arguments)}function mi(){return(mi=
/**
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
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Nn(n,"POST","/v1/accounts:signUp",Cn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */vi.TWITTER_SIGN_IN_METHOD="twitter.com",vi.PROVIDER_ID="twitter.com";var gi=function(){"use strict";function t(n){e(u)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(c)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(o).mark((function a(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,rr._fromIdTokenResponse(n,i,s);case 2:return u=e.sent,c=_i(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return s=_i(i),e.abrupt("return",new t({user:n,providerId:s,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function _i(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
var ki=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i,a,o){var c,l;return e(u)(this,r),(c=n.call(this,i.code,i.message)).operationType=a,c.user=o,Object.setPrototypeOf(e(s)(c),r.prototype),c.customData={appName:t.name,tenantId:null!==(l=t.tenantId)&&void 0!==l?l:void 0,_serverResponse:i.customData._serverResponse,operationType:a},c}return e(c)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(he);function bi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw ki._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */function wi(e,t){return Ii.apply(this,arguments)}function Ii(){return Ii=e(a)(e(o).mark((function t(n,r){var i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=Hn,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",gi._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Ii.apply(this,arguments)}function xi(e,t){return Ci.apply(this,arguments)}function Ci(){return Ci=
/**
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
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,s="reauthenticate",e.prev=3,e.next=6,Hn(n,bi(a,s,r,n),i);case 6:return dn((u=e.sent).idToken,a,"internal-error"),dn(c=Vn(u.idToken),a,"internal-error"),l=c.sub,dn(n.uid===l,a,"user-mismatch"),e.abrupt("return",gi._forOperation(n,s,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&cn(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Ci.apply(this,arguments)}function Ti(e,t){return Ei.apply(this,arguments)}function Ei(){return Ei=
/**
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
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,bi(n,a,r);case 4:return s=e.sent,e.next=7,gi._fromIdTokenResponse(n,a,s);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),Ei.apply(this,arguments)}function Si(e,t){return Pi.apply(this,arguments)}function Pi(){return(Pi=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ti(Lr(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ni(e,t,n){return Ri.apply(this,arguments)}function Ri(){return Ri=e(a)(e(o).mark((function t(n,r,i){var s,u,c,l,h,f,d;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=Lr(n),c={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(s=u._getRecaptchaConfig())||void 0===s?void 0:s.emailPasswordEnabled)){t.next=11;break}return t.next=7,Or(u,c,"signUpPassword");case 7:h=t.sent,l=yi(u,h),t.next=12;break;case 11:l=yi(u,c).catch(function(){var t=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=8;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,Or(u,c,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",yi(u,r));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 12:return t.next=14,l.catch((function(e){return Promise.reject(e)}));case 14:return f=t.sent,t.next=17,gi._fromIdTokenResponse(u,"signIn",f);case 17:return d=t.sent,t.next=20,u._updateCurrentUser(d.user);case 20:return t.abrupt("return",d);case 21:case"end":return t.stop()}}),t)}))),Ri.apply(this,arguments)}function Oi(e,t,n){return Si(Le(e),ci.credential(t,n))}function Ai(e,t,n,r){return Le(e).onIdTokenChanged(t,n,r)}function Di(e,t,n){return Le(e).beforeAuthStateChanged(t,n)}
/**
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
 */
function Mi(e,t){return Tn(e,"POST","/v2/accounts/mfaEnrollment:start",Cn(e,t))}function Li(e,t){return Tn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Cn(e,t))}new WeakMap;var Fi="__sak",ji=function(){"use strict";function t(n,r){e(u)(this,t),this.storageRetriever=n,this.type=r}return e(c)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
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
 */var Ui=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){var t,i;return e(u)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(fr(i=re())||gr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=br(),t._shouldAllowMigration=!0,t}return e(c)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);kr()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e($t)(e(en)(r.prototype),"_set",i).call(s,t,n);case 2:s.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e($t)(e(en)(r.prototype),"_get",n).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e($t)(e(en)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(ji);Ui.type="LOCAL";var qi=Ui,Wi=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(c)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(ji);
/**
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
 */Wi.type="SESSION";var Vi=Wi;
/**
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
 */function Hi(t){return Promise.all(t.map((n=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
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
 */var Bi=function(){"use strict";function t(n){e(u)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(c)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s,u,c,l,h,f,d;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(i=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),f=Array.from(h).map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Hi(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
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
 */
function zi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Bi.receivers=[];var Ki=function(){"use strict";function t(n){e(u)(this,t),this.target=n,this.handlers=new Set}return e(c)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(o).mark((function a(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var o=zi("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:s,onMessage:function(t){var n=t;if(n.data.eventId===o)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),s.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:o,data:n},[s.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
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
 */function Gi(){return window}function Yi(e){Gi().location.href=e}
/**
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
 */function Ji(){return void 0!==Gi().WorkerGlobalScope&&"function"==typeof Gi().importScripts}function Qi(){return $i.apply(this,arguments)}function $i(){return($i=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
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
 */
var Xi="firebaseLocalStorageDb",Zi="firebaseLocalStorage",ea="fbase_key",ta=function(){"use strict";function t(n){e(u)(this,t),this.request=n}return e(c)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function na(e,t){return e.transaction([Zi],t?"readwrite":"readonly").objectStore(Zi)}function ra(){var e=indexedDB.deleteDatabase(Xi);return new ta(e).toPromise()}function ia(){var t=indexedDB.open(Xi,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Zi,{keyPath:ea})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Zi)){e.next=12;break}return i.close(),e.next=5,ra();case 5:return e.t0=n,e.next=8,ia();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function aa(e,t,n){return oa.apply(this,arguments)}function oa(){return(oa=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=na(n,!0).put((a={},e(Fe)(a,ea,r),e(Fe)(a,"value",i),a)),t.abrupt("return",new ta(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function sa(e,t){return ua.apply(this,arguments)}function ua(){return(ua=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=na(n,!1).get(r),e.next=3,new ta(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ca(e,t){var n=na(e,!0).delete(t);return new ta(n).toPromise()}var la=function(){"use strict";function t(){e(u)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(c)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,ia();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ji()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Bi._getInstance(Ji()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(o).mark((function n(r,i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Qi();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ki(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,ia();case 5:return n=e.sent,e.next=8,aa(n,Fi,"1");case 8:return e.next=10,ca(n,Fi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return aa(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return sa(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return ca(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u,c,l,h,f,d,p,v,y,m,g,_,k;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=na(e,!1).getAll();return new ta(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(s=(h=l.next()).done);s=!0)f=h.value,d=f.fbase_key,p=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(p)&&(t.notifyListeners(d,p),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,y=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(_=g.next()).done);v=!0)k=_.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),y=!0,m=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!y){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();la.type="LOCAL";var ha=la;
/**
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
 */function fa(e,t){return Tn(e,"POST","/v2/accounts/mfaSignIn:start",Cn(e,t))}function da(e,t){return Tn(e,"POST","/v2/accounts/mfaSignIn:finalize",Cn(e,t))}
/**
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
 */
/**
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
 */
Sr("rcb"),new _n(3e4,6e4);var pa="recaptcha";
/**
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
 */function va(e,t,n){return ya.apply(this,arguments)}function ya(){return(ya=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,dn("string"==typeof s,n,"argument-error"),dn(i.type===pa,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return dn("enroll"===c.type,n,"internal-error"),e.next=15,Mi(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return dn("signin"===c.type,n,"internal-error"),dn(h=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,fa(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:s}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ti(n,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
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
 */
var ma=function(){"use strict";function t(n){e(u)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Lr(n)}return e(c)(t,[{key:"verifyPhoneNumber",value:function(e,t){return va(this.auth,e,Le(t))}}],[{key:"credential",value:function(e,t){return si._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?si._fromTokenResponse(n,r):null}}]),t}();
/**
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
 */
function ga(e,t){return t?ar(t):(dn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */ma.PROVIDER_ID="phone",ma.PHONE_SIGN_IN_METHOD="phone";var _a=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t){var i;return e(u)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(c)(r,[{key:"_getIdTokenResponse",value:function(e){return Xr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Xr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Xr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Vr);function ka(e){return Ti(e.auth,new _a(e),e.bypassAuthState)}function ba(e){var t=e.auth,n=e.user;return dn(n,t,"internal-error"),xi(n,new _a(e),e.bypassAuthState)}function wa(e){return Ia.apply(this,arguments)}function Ia(){return(Ia=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,dn(i=n.user,r,"internal-error"),e.abrupt("return",wi(i,new _a(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var xa=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(u)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(c)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(o).mark((function t(r,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:s||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ka;case"linkViaPopup":case"linkViaRedirect":return wa;case"reauthViaPopup":case"reauthViaRedirect":return ba;default:cn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Ca=new _n(2e3,1e4);
/**
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
 */var Ta=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i,a,o,c){var l;return e(u)(this,r),(l=n.call(this,t,i,o,c)).provider=a,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(s)(l),l}return e(c)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return dn(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return vn(1===t.filter.length,"Popup operations only handle one event"),r=zi(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(ln(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ln(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(ln(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,Ca.get())};t()}}]),r}(xa);Ta.currentPopupAction=null;
/**
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
 */
var Ea=new Map,Sa=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(u)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(c)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Ea.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Pa(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e($t)(e(en)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Ea.set(n.auth._key(),a);case 21:return n.bypassAuthState||Ea.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,s=function(){return e($t)(e(en)(r.prototype),"onAuthEvent",n)};return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",s().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(xa);function Pa(e,t){return Na.apply(this,arguments)}function Na(){return(Na=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Aa(r),a=Oa(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ra(e,t){Ea.set(e._key(),t)}function Oa(e){return ar(e._redirectPersistence)}function Aa(e){return ur("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */function Da(e,t){return Ma.apply(this,arguments)}function Ma(){return Ma=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Lr(n),s=ga(a,r),u=new Sa(a,s,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),Ma.apply(this,arguments)}
/**
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
 */
var La=function(){"use strict";function t(n){e(u)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(c)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ja(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!ja(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ln(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fa(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Fa(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Fa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function ja(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Ua(e){return qa.apply(this,arguments)}function qa(){return qa=
/**
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
 */
e(a)(e(o).mark((function t(n){var r,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Tn(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),qa.apply(this,arguments)}
/**
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
 */var Wa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Va=/^https?/;function Ha(){return(Ha=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ua(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Ba(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:cn(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Ba(e){var t=yn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Va.test(r))return!1;if(Wa.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
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
 */var za=new _n(3e4,6e4);function Ka(){var t=Gi().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(f)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Ga=null;function Ya(e){return Ga=Ga||function(e){return new Promise((function(t,n){var r,i,a;function o(){Ka(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Ka(),n(ln(e,"network-request-failed"))},timeout:za.get()})}if(null===(i=null===(r=Gi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Gi().gapi)||void 0===a?void 0:a.load)){var s=Sr("iframefcb");return Gi()[s]=function(){gapi.load?o():n(ln(e,"network-request-failed"))},Er("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Ga=null,e}))}(e),Ga}
/**
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
 */var Ja=new _n(5e3,15e3),Qa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$a=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xa(e){var t=e.config;dn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?kn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:At},i=$a.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(Ce(r).slice(1))}function Za(e){return eo.apply(this,arguments)}function eo(){return eo=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ya(n);case 2:return r=t.sent,dn(i=Gi().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Xa(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qa,dontclear:!0},(function(t){return new Promise((r=e(a)(e(o).mark((function r(i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Gi().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=ln(n,"network-request-failed"),u=Gi().setTimeout((function(){a(s)}),Ja.get()),t.ping(c).then(c,(function(){a(s)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),eo.apply(this,arguments)}
/**
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
 */var to={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},no="_blank",ro="http://localhost",io=function(){"use strict";function t(n){e(u)(this,t),this.window=n,this.associatedEvent=null}return e(c)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function ao(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},to),{width:i.toString(),height:a.toString(),top:o,left:s}),l=re().toLowerCase();r&&(u=dr(l)?no:r),hr(l)&&(n=n||ro,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(h)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(_r(l)&&"_self"!==u)return oo(n||"",u),new io(null);var d=window.open(n||"",u,f);dn(d,t,"popup-blocked");try{d.focus()}catch(e){}return new io(d)}function oo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */var so=encodeURIComponent("fac");function uo(e,t,n,r,i,a){return co.apply(this,arguments)}function co(){return(co=e(a)(e(o).mark((function t(n,r,i,a,s,u){var c,l,f,d,p,v,y,m,g,_,k,b,w,I,x,C,T,E,S;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(dn(n.config.authDomain,n,"auth-domain-config-required"),dn(n.config.apiKey,n,"invalid-api-key"),c={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:At,eventId:s},!(r instanceof li)){t.next=24;break}for(r.setDefaultLanguage(n.languageCode),c.providerId=r.providerId||"",be(r.getCustomParameters())||(c.customParameters=JSON.stringify(r.getCustomParameters())),l=!0,f=!1,d=void 0,t.prev=8,p=Object.entries(u||{})[Symbol.iterator]();!(l=(v=p.next()).done);l=!0)y=e(h)(v.value,2),m=y[0],g=y[1],c[m]=g;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),f=!0,d=t.t0;case 16:t.prev=16,t.prev=17,l||null==p.return||p.return();case 19:if(t.prev=19,!f){t.next=22;break}throw d;case 22:return t.finish(19);case 23:return t.finish(16);case 24:for(r instanceof hi&&(_=r.getScopes().filter((function(e){return""!==e}))).length>0&&(c.scopes=_.join(",")),n.tenantId&&(c.tid=n.tenantId),k=c,b=!0,w=!1,I=void 0,t.prev=28,x=Object.keys(k)[Symbol.iterator]();!(b=(C=x.next()).done);b=!0)T=C.value,void 0===k[T]&&delete k[T];t.next=36;break;case 32:t.prev=32,t.t1=t.catch(28),w=!0,I=t.t1;case 36:t.prev=36,t.prev=37,b||null==x.return||x.return();case 39:if(t.prev=39,!w){t.next=42;break}throw I;case 42:return t.finish(39);case 43:return t.finish(36);case 44:return t.next=46,n._getAppCheckToken();case 46:return E=t.sent,S=E?"#".concat(so,"=").concat(encodeURIComponent(E)):"",t.abrupt("return","".concat(lo(n),"?").concat(Ce(k).slice(1)).concat(S));case 49:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function lo(e){var t=e.config;return t.emulator?kn(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
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
 */var ho="webStorageSupport",fo=function(){"use strict";function t(){e(u)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vi,this._completeRedirectFn=Da,this._overrideRedirectResult=Ra}return e(c)(t,[{key:"_openPopup",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return vn(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),e.next=4,uo(t,n,r,yn(),i);case 4:return c=e.sent,e.abrupt("return",ao(t,c,zi()));case 6:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return e.next=4,uo(t,n,r,yn(),i);case 4:return Yi(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(vn(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Za(t);case 2:return i=e.sent,a=new La(t),i.register("authEvent",(function(e){return dn(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(ho,{type:ho},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),cn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Ha.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return br()||fr()||gr()}}]),t}(),po=fo,vo=function(){"use strict";function t(n){e(u)(this,t),this.factorId=n}return e(c)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return pn("unexpected MultiFactorSessionType")}}}]),t}(),yo=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t){var i;return e(u)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(c)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Tn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Cn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Tn(e,"POST","/v2/accounts/mfaSignIn:finalize",Cn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(vo);(function(){"use strict";function t(){e(u)(this,t)}return e(c)(t,null,[{key:"assertion",value:function(e){return yo._fromCredential(e)}}]),t}()).FACTOR_ID="phone",(function(){"use strict";function t(){e(u)(this,t)}return e(c)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return mo._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return mo._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(a)(e(o).mark((function n(){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return dn(void 0!==(r=t).auth,"internal-error"),e.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},Tn(n,"POST","/v2/accounts/mfaEnrollment:start",Cn(n,a));case 4:return i=e.sent,e.abrupt("return",go._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return e.stop()}var n,a}),n)})))()}}]),t}()).FACTOR_ID="totp";var mo=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i,a){var o;return e(u)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=i,o.secret=a,o}return e(c)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return dn(void 0!==i.secret,t,"argument-error"),e.abrupt("return",Li(t,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return dn(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),a={verificationCode:r.otp},e.abrupt("return",da(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(vo),go=function(){"use strict";function t(n,r,i,a,o,s,c){e(u)(this,t),this.sessionInfo=s,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return e(c)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(_o(e)||_o(t))&&(r=!0),r&&(_o(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),_o(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function _o(e){return void 0===e||0===(null==e?void 0:e.length)}var ko="@firebase/auth",bo="0.23.2",wo=function(){"use strict";function t(n){e(u)(this,t),this.auth=n,this.internalListeners=new Map}return e(c)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){dn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
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
 */
var Io,xo=ee("authIdTokenMaxAge")||300,Co=null,To=function(t){return n=e(a)(e(o).mark((function n(r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>xo)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==i?void 0:i.token,Co!==s){e.next=12;break}return e.abrupt("return");case 12:return Co=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};Io="Browser",St(new je("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;dn(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:Io,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wr(Io)},l=new Mr(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),St(new je("auth-internal",(function(e){var t=Lr(e.getProvider("auth").getImmediate());return new wo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(ko,bo,
/**
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
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Io)),Lt(ko,bo,"esm2017");
/**
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
 */
Lt("firebase","9.22.2","app");var Eo,So;a=i("bpxeT"),u=i("8MBJY"),c=i("a2hTj"),Fe=i("hKHmD"),h=i("1t1Wn"),f=i("8nrFW"),o=i("2TvXO"),a=i("bpxeT"),Fe=i("hKHmD"),f=i("8nrFW"),o=i("2TvXO"),a=i("bpxeT"),f=i("8nrFW"),o=i("2TvXO"),f=i("8nrFW");var Po=new WeakMap,No=new WeakMap,Ro=new WeakMap,Oo=new WeakMap,Ao=new WeakMap;var Do={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return No.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ro.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fo(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Mo(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(So||(So=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(jo(this),n),Fo(Po.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Fo(t.apply(jo(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[jo(this),n].concat(e(f)(i)));return Ro.set(s,n.sort?n.sort():[n]),Fo(s)}}function Lo(e){return"function"==typeof e?Mo(e):(e instanceof IDBTransaction&&function(e){if(!No.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));No.set(e,t)}}(e),t=e,(Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Do):e);var t}function Fo(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Fo(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Po.set(e,t)})).catch((function(){})),Ao.set(n,t),n;var t,n;if(Oo.has(e))return Oo.get(e);var r=Lo(e);return r!==e&&(Oo.set(e,r),Ao.set(r,e)),r}var jo=function(e){return Ao.get(e)};function Uo(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Fo(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Fo(s.result),e.oldVersion,e.newVersion,Fo(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var qo=["get","getKey","getAll","getAllKeys","count"],Wo=["put","add","delete","clear"],Vo=new Map;function Ho(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Vo.get(n))return Vo.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,s=Wo.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(s||qo.includes(r))){var u,c=(u=e(a)(e(o).mark((function t(n){var a,u,c,l,h,d,p=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=p.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=p[c];return h=this.transaction(n,s?"readwrite":"readonly"),d=h.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[r].apply(l,e(f)(u)),s&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return Vo.set(n,c),c}}}!function(e){Do=e(Do)}((function(t){return e($e)({},t,{get:function(e,n,r){return Ho(e,n)||t.get(e,n,r)},has:function(e,n){return!!Ho(e,n)||t.has(e,n)}})}));var Bo,zo="@firebase/installations",Ko="0.6.4",Go=1e4,Yo="w:".concat(Ko),Jo="FIS_v2",Qo=36e5,$o=(Bo={},e(Fe)(Bo,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(Fe)(Bo,"not-registered","Firebase Installation is not registered."),e(Fe)(Bo,"installation-not-found","Firebase Installation not found."),e(Fe)(Bo,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(Fe)(Bo,"app-offline","Could not process request. Application offline."),e(Fe)(Bo,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Bo),Xo=new fe("installations","Installations",$o);function Zo(e){return e instanceof he&&e.code.includes("request-failed")}
/**
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
 */function es(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function ts(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function ns(e,t){return rs.apply(this,arguments)}function rs(){return(rs=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",Xo.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function is(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function as(e,t){var n=t.refreshToken,r=is(e);return r.append("Authorization",function(e){return"".concat(Jo," ").concat(e)}(n)),r}function os(e){return ss.apply(this,arguments)}function ss(){return(ss=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function us(e,t){return cs.apply(this,arguments)}function cs(){return(cs=
/**
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
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f,d,p,v,y;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,s=r.fid,u=es(i),c=is(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(h=e.sent)&&c.append("x-firebase-client",h);case 9:return f={fid:s,authVersion:Jo,appId:i.appId,sdkVersion:Yo},d={method:"POST",headers:c,body:JSON.stringify(f)},e.next=13,os((function(){return fetch(u,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return v=e.sent,y={fid:v.fid||s,registrationStatus:2,refreshToken:v.refreshToken,authToken:ts(v.authToken)},e.abrupt("return",y);case 22:return e.next=24,ns("Create Installation",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */function ls(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
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
 */
/**
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
 */
var hs=/^[cdef][\w-]{21}$/;function fs(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(f)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
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
 */(t);return hs.test(n)?n:""}catch(e){return""}}function ds(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
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
 */var ps=new Map;function vs(e,t){var n=ds(e);ys(n,t),function(e,t){var n=gs();n&&n.postMessage({key:e,fid:t});_s()}(n,t)}function ys(e,t){var n=ps.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var ms=null;function gs(){return!ms&&"BroadcastChannel"in self&&((ms=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){ys(e.data.key,e.data.fid)}),ms}function _s(){0===ps.size&&ms&&(ms.close(),ms=null)}
/**
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
 */var ks="firebase-installations-store",bs=null;function ws(){return bs||(bs=Uo("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ks)}})),bs}function Is(e,t){return xs.apply(this,arguments)}function xs(){return(xs=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ds(n),e.next=3,ws();case 3:return a=e.sent,s=a.transaction(ks,"readwrite"),u=s.objectStore(ks),e.next=8,u.get(i);case 8:return c=e.sent,e.next=11,u.put(r,i);case 11:return e.next=13,s.done;case 13:return c&&c.fid===r.fid||vs(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cs(e){return Ts.apply(this,arguments)}function Ts(){return(Ts=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ds(n),e.next=3,ws();case 3:return i=e.sent,a=i.transaction(ks,"readwrite"),e.next=7,a.objectStore(ks).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Es(e,t){return Ss.apply(this,arguments)}function Ss(){return(Ss=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ds(n),e.next=3,ws();case 3:return a=e.sent,s=a.transaction(ks,"readwrite"),u=s.objectStore(ks),e.next=8,u.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,u.delete(i);case 13:e.next=17;break;case 15:return e.next=17,u.put(l,i);case 17:return e.next=19,s.done;case 19:return!l||c&&c.fid===l.fid||vs(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ps(e){return Ns.apply(this,arguments)}function Ns(){return(Ns=
/**
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
 */
e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Es(n.appConfig,(function(e){var t=Rs(e),i=Os(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Rs(e){return Fs(e||{fid:fs(),registrationStatus:0})}function Os(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Xo.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return As.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ds(e)}:{installationEntry:t}}function As(){return(As=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,us(n,r);case 3:return i=e.sent,e.abrupt("return",Is(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!Zo(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,Cs(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,Is(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ds(e){return Ms.apply(this,arguments)}function Ms(){return(Ms=e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ls(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,ls(100);case 6:return e.next=8,Ls(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,Ps(n);case 14:if(i=e.sent,a=i.installationEntry,!(s=i.registrationPromise)){e.next=21;break}return e.abrupt("return",s);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ls(e){return Es(e,(function(e){if(!e)throw Xo.create("installation-not-found");return Fs(e)}))}function Fs(e){return 1===(t=e).registrationStatus&&t.registrationTime+Go<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function js(e,t){return Us.apply(this,arguments)}function Us(){return(Us=
/**
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
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f,d,p,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,s=qs(i,r),u=as(i,r),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:Yo,appId:i.appId}},f={method:"POST",headers:u,body:JSON.stringify(h)},e.next=13,os((function(){return fetch(s,f)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return p=e.sent,v=ts(p),e.abrupt("return",v);case 22:return e.next=24,ns("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qs(e,t){var n=t.fid;return"".concat(es(e),"/").concat(n,"/authTokens:generate")}function Ws(e){return Vs.apply(this,arguments)}function Vs(){return Vs=
/**
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
 */
e(a)(e(o).mark((function t(n){var r,i,a,s,u=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],e.next=4,Es(n.appConfig,(function(e){if(!Ys(e))throw Xo.create("not-registered");var t=e.authToken;if(!r&&Js(t))return e;if(1===t.requestStatus)return i=Hs(n,r),e;if(!navigator.onLine)throw Xo.create("app-offline");var a=Qs(e);return i=Ks(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return s=e.t0,e.abrupt("return",s);case 14:case"end":return e.stop()}}),t)}))),Vs.apply(this,arguments)}function Hs(e,t){return Bs.apply(this,arguments)}function Bs(){return(Bs=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zs(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,ls(100);case 6:return e.next=8,zs(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",Ws(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zs(e){return Es(e,(function(e){if(!Ys(e))throw Xo.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+Go<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Ks(e,t){return Gs.apply(this,arguments)}function Gs(){return(Gs=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,js(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,Is(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!Zo(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,Cs(n.appConfig);case 15:e.next=20;break;case 17:return s=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,Is(n.appConfig,s);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function Ys(e){return void 0!==e&&2===e.registrationStatus}function Js(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Qo}(e)}function Qs(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function $s(){return($s=
/**
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
 */
e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,Ps(r);case 3:return i=e.sent,a=i.installationEntry,(s=i.registrationPromise)?s.catch(console.error):Ws(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xs(){return Xs=
/**
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
 */
e(a)(e(o).mark((function t(n){var r,i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],i=n,e.next=4,Zs(i);case 4:return e.next=6,Ws(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),Xs.apply(this,arguments)}function Zs(e){return eu.apply(this,arguments)}function eu(){return(eu=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ps(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function tu(e){return Xo.create("missing-app-config-values",{valueName:e})}
/**
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
 */var nu="installations",ru=function(e){var t=Pt(e.getProvider("app").getImmediate(),nu).getImmediate(),n={getId:function(){return function(e){return $s.apply(this,arguments)}(t)},getToken:function(e){return function(e){return Xs.apply(this,arguments)}(t,e)}};return n};St(new je(nu,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
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
 */
function(e){if(!e||!e.options)throw tu("App Configuration");if(!e.name)throw tu("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw tu(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Pt(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),St(new je("installations-internal",ru,"PRIVATE")),Lt(zo,Ko),Lt(zo,Ko,"esm2017");
/**
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
 */
var iu,au="analytics",ou=6e4,su="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",uu="https://www.googletagmanager.com/gtag/js",cu=new Qe("@firebase/analytics"),lu=(iu={},e(Fe)(iu,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(Fe)(iu,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(Fe)(iu,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(Fe)(iu,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(Fe)(iu,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(Fe)(iu,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(Fe)(iu,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(Fe)(iu,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(Fe)(iu,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(Fe)(iu,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),e(Fe)(iu,"no-client-id",'The "client_id" field is empty.'),e(Fe)(iu,"invalid-gtag-resource","Trusted Types detected an invalid gtag resource: {$gtagURL}."),iu),hu=new fe("analytics","Analytics",lu);
/**
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
 */
function fu(e){if(!e.startsWith(uu)){var t=hu.create("invalid-gtag-resource",{gtagURL:e});return cu.warn(t.message),""}return e}function du(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function pu(e,t){var n=function(e,t){var n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:fu}),r=document.createElement("script"),i="".concat(uu,"?l=").concat(e,"&id=").concat(t);r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function vu(e,t,n,r,i,a){return yu.apply(this,arguments)}function yu(){return(yu=e(a)(e(o).mark((function t(n,r,i,a,s,u){var c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a[s],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,du(i);case 9:if(l=e.sent,!(h=l.find((function(e){return e.measurementId===s})))){e.next=14;break}return e.next=14,r[h.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),cu.error(e.t0);case 19:n("config",s,u);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function mu(e,t,n,r,i){return gu.apply(this,arguments)}function gu(){return(gu=e(a)(e(o).mark((function t(n,r,i,a,s){var u,c,l,h,f,d,p,v,y,m,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=[],!s||!s.send_to){e.next=38;break}return c=s.send_to,Array.isArray(c)||(c=[c]),e.next=7,du(i);case 7:l=e.sent,h=!0,f=!1,d=void 0,e.prev=9,p=c[Symbol.iterator]();case 11:if(h=(v=p.next()).done){e.next=24;break}if(y=v.value,m=l.find((function(e){return e.measurementId===y})),!(g=m&&r[m.appId])){e.next=19;break}u.push(g),e.next=21;break;case 19:return u=[],e.abrupt("break",24);case 21:h=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,d=e.t0;case 30:e.prev=30,e.prev=31,h||null==p.return||p.return();case 33:if(e.prev=33,!f){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===u.length&&(u=Object.values(r)),e.next=41,Promise.all(u);case 41:n("event",a,s||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),cu.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function _u(t,n,r,i,s){var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(u=window[s]),window[s]=function(t,n,r,i){function s(){return s=e(a)(e(o).mark((function a(s){var u,c,l,d,p,v,y,m,g,_,k,b,w,I,x,C,T,E=arguments;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(u=E.length,c=new Array(u>1?u-1:0),l=1;l<u;l++)c[l-1]=E[l];if(a.prev=1,"event"!==s){a.next=8;break}return d=e(h)(c,2),p=d[0],v=d[1],a.next=6,mu(t,n,r,p,v);case 6:a.next=15;break;case 8:if("config"!==s){a.next=14;break}return y=e(h)(c,2),m=y[0],g=y[1],a.next=12,vu(t,n,r,i,m,g);case 12:a.next=15;break;case 14:"consent"===s?(_=e(h)(c,1),k=_[0],t("consent","update",k)):"get"===s?(b=e(h)(c,3),w=b[0],I=b[1],x=b[2],t("get",w,I,x)):"set"===s?(C=e(h)(c,1),T=C[0],t("set",T)):t.apply(void 0,[s].concat(e(f)(c)));case 15:a.next=20;break;case 17:a.prev=17,a.t0=a.catch(1),cu.error(a.t0);case 20:case"end":return a.stop()}}),a,null,[[1,17]])}))),s.apply(this,arguments)}return function(e){return s.apply(this,arguments)}}(u,t,n,r),{gtagCore:u,wrappedGtag:window[s]}}function ku(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,i=void 0;try{for(var a,o=Object.values(t)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.src&&s.src.includes(uu)&&s.src.includes(e))return s}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return null}
/**
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
 */var bu=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(u)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(c)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),wu=new bu;function Iu(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function xu(e){return Cu.apply(this,arguments)}function Cu(){return(Cu=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,s={method:"GET",headers:Iu(a)},u=su.replace("{app-id}",i),e.next=6,fetch(u,s);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return l="",e.prev=9,e.next=12,c.json();case 12:h=e.sent,(null===(r=h.error)||void 0===r?void 0:r.message)&&(l=h.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw hu.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function Tu(e){return Eu.apply(this,arguments)}function Eu(){return Eu=e(a)(e(o).mark((function t(n){var r,i,s,u,c,l,h,f,d=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:wu,i=d.length>2?d[2]:void 0,s=n.options,u=s.appId,c=s.apiKey,l=s.measurementId,u){t.next=4;break}throw hu.create("no-app-id");case 4:if(c){t.next=8;break}if(!l){t.next=7;break}return t.abrupt("return",{measurementId:l,appId:u});case 7:throw hu.create("no-api-key");case 8:return h=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Du,setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==i?i:ou),t.abrupt("return",Su({appId:u,apiKey:c,measurementId:l},h,f,r));case 12:case"end":return t.stop()}}),t)}))),Eu.apply(this,arguments)}function Su(e,t,n){return Pu.apply(this,arguments)}function Pu(){return Pu=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d,p,v,y=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,s=r.backoffCount,u=y.length>3&&void 0!==y[3]?y[3]:wu,l=n.appId,h=n.measurementId,e.prev=3,e.next=6,Nu(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!h){e.next=13;break}return cu.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(h)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:l,measurementId:h});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,xu(n);case 17:return f=e.sent,u.deleteThrottleMetadata(l),e.abrupt("return",f);case 22:if(e.prev=22,e.t1=e.catch(14),Ru(d=e.t1)){e.next=33;break}if(u.deleteThrottleMetadata(l),!h){e.next=32;break}return cu.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(h)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==d?void 0:d.message,"]")),e.abrupt("return",{appId:l,measurementId:h});case 32:throw e.t1;case 33:return p=503===Number(null===(c=null==d?void 0:d.customData)||void 0===c?void 0:c.httpStatus)?Me(s,u.intervalMillis,30):Me(s,u.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:s+1},u.setThrottleMetadata(l,v),cu.debug("Calling attemptFetch again in ".concat(p," millis")),e.abrupt("return",Su(n,v,i,u));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),Pu.apply(this,arguments)}function Nu(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r(hu.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Ru(e){if(!(e instanceof he&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var Ou,Au,Du=function(){"use strict";function t(){e(u)(this,t),this.listeners=[]}return e(c)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
/**
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
 */function Mu(){return(Mu=e(a)(e(o).mark((function t(n,r,i,a,s){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s||!s.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:u=e.sent,c=Object.assign(Object.assign({},a),{send_to:u}),n("event",i,c);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lu(e){Au=e}function Fu(e){Ou=e}function ju(){return Uu.apply(this,arguments)}function Uu(){return(Uu=
/**
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
 */
e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue()){e.next=5;break}return cu.warn(hu.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,ce();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),cu.warn(hu.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function qu(){return(qu=e(a)(e(o).mark((function t(n,r,i,a,s,u,c){var l,f,d,p,v,y,m;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(f=Tu(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&cu.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return cu.error(e)})),r.push(f),d=ju().then((function(e){return e?a.getId():void 0})),t.t0=e(h),t.next=8,Promise.all([f,d]);case 8:return t.t1=t.sent,p=(0,t.t0)(t.t1,2),v=p[0],y=p[1],ku(u)||pu(u,v.measurementId),Au&&(s("consent","default",Au),Lu(void 0)),s("js",new Date),(m=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",m.update=!0,null!=y&&(m.firebase_id=y),s("config",v.measurementId,m),Ou&&(s("set",Ou),Fu(void 0)),t.abrupt("return",v.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var Wu,Vu,Hu=function(){"use strict";function t(n){e(u)(this,t),this.app=n}return e(c)(t,[{key:"_delete",value:function(){return delete Bu[this.app.options.appId],Promise.resolve()}}]),t}(),Bu={},zu=[],Ku={},Gu="dataLayer",Yu="gtag",Ju=!1;function Qu(e,t,n){!function(){var e=[];if(ae()&&e.push("This is a browser extension environment."),le()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=hu.create("invalid-analytics-context",{errorInfo:t});cu.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw hu.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw hu.create("no-api-key");cu.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Bu[a])throw hu.create("already-exists",{id:a});if(!Ju){r=Gu,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=_u(Bu,zu,Ku,Gu,Yu),s=o.wrappedGtag,u=o.gtagCore;Vu=s,Wu=u,Ju=!0}return Bu[a]=function(e,t,n,r,i,a,o){return qu.apply(this,arguments)}(e,zu,Ku,t,Wu,Gu,n),new Hu(e)}function $u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Pt(e,au);if(n.isInitialized()){var r=n.getImmediate();if(Ie(t,n.getOptions()))return r;throw hu.create("already-initialized")}var i=n.initialize({options:t});return i}function Xu(e,t,n,r){e=Le(e),function(e,t,n,r,i){return Mu.apply(this,arguments)}(Vu,Bu[e.app.options.appId],t,n,r).catch((function(e){return cu.error(e)}))}var Zu="@firebase/analytics",ec="0.10.0";St(new je(au,(function(e,t){var n=t.options;return Qu(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),St(new je("analytics-internal",(function(e){try{var t=e.getProvider(au).getImmediate();return{logEvent:function(e,n,r){return Xu(t,e,n,r)}}}catch(e){throw hu.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Lt(Zu,ec),Lt(Zu,ec,"esm2017");s=i("ds8z5"),a=i("bpxeT"),u=i("8MBJY"),c=i("a2hTj"),l=i("eYQtU"),h=i("1t1Wn"),f=i("8nrFW");var tc=i("l5bVx"),nc=(I=i("2MbLg"),o=i("2TvXO"),"@firebase/database"),rc="0.14.4",ic="";
/**
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
 */
var ac,oc=function(){"use strict";function t(n){e(u)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(c)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ve(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),sc=function(){"use strict";function t(){e(u)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(c)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return _e(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),uc=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new oc(t)}}catch(e){}return new sc},cc=uc("localStorage"),lc=uc("sessionStorage"),hc=new Qe("@firebase/database"),fc=(ac=1,function(){return ac++}),dc=function(e){var t=Oe(e),n=new Se;n.update(t);var r=n.digest();return V.encodeByteArray(r)},pc=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=pc.apply(null,a):r+="object"==typeof a?ye(a):a,r+=" "}return r},vc=null,yc=!0,mc=function(e,t){U(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(hc.logLevel=We.VERBOSE,vc=hc.log.bind(hc),t&&lc.set("logging_enabled",!0)):"function"==typeof e?vc=e:(vc=null,lc.remove("logging_enabled"))},gc=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===yc&&(yc=!1,null===vc&&!0===lc.get("logging_enabled")&&mc(!0)),vc){var r=pc.apply(null,t);vc(r)}},_c=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];gc.apply(void 0,[t].concat(e(f)(r)))}},kc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+pc.apply(void 0,e(f)(n));hc.error(i)},bc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(pc.apply(void 0,e(f)(n)));throw hc.error(i),new Error(i)},wc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+pc.apply(void 0,e(f)(n));hc.warn(i)},Ic=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},xc="[MIN_NAME]",Cc="[MAX_NAME]",Tc=function(e,t){if(e===t)return 0;if(e===xc||t===Cc)return-1;if(t===xc||e===Cc)return 1;var n=Dc(e),r=Dc(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Ec=function(e,t){return e===t?0:e<t?-1:1},Sc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ye(t))},Pc=function(e){if("object"!=typeof e||null===e)return ye(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=ye(t[i]),r+=":",r+=Pc(e[t[i]]);return r+="}"},Nc=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
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
 */function Rc(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Oc=function(e){U(!Ic(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Ac=new RegExp("^-?(0*)\\d{1,10}$"),Dc=function(e){if(Ac.test(e)){var t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Mc=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw wc("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Lc=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Fc=function(){"use strict";function t(n,r){var i=this;e(u)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(c)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){wc('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),jc=function(){"use strict";function t(n,r,i){var a=this;e(u)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(c)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(gc("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wc(e)}}]),t}(),Uc=function(){"use strict";function t(n){e(u)(this,t),this.accessToken=n}return e(c)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();Uc.OWNER="owner";
/**
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
 */
var qc="5",Wc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vc="websocket",Hc="long_polling",Bc=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];e(u)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cc.get("host:"+n)||this._host}return e(c)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cc.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function zc(e,t,n){var r;if(U("string"==typeof t,"typeof type must == string"),U("object"==typeof n,"typeof params must == object"),t===Vc)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Hc)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Rc(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */var Kc=function(){"use strict";function t(){e(u)(this,t),this.counters_={}}return e(c)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;_e(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return G(this.counters_)}}]),t}(),Gc={},Yc={};
/**
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
 */function Jc(e){var t=e.toString();return Gc[t]||(Gc[t]=new Kc),Gc[t]}
/**
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
 */
var Qc=function(){"use strict";function t(n){e(u)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(c)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Mc((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),$c="start",Xc="close",Zc=function(){"use strict";function t(n,r,i,a,o,s,c){var l=this;e(u)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=s,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_c(n),this.stats_=Jc(r),this.urlFn=function(e){return l.appCheckToken&&(e.ac=l.appCheckToken),zc(r,Hc,e)}}return e(c)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qc(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(se()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new el((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(h)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===$c)t.id=s,t.password=u;else{if(o!==Xc)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(h)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=qc,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&Wc.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=B(t),r=Nc(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!se()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=ye(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!se()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),el=function(){"use strict";function t(n,r,i,a){if(e(u)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,se())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=fc(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){gc("frame writing exception"),e.stack&&gc(e.stack),gc(e)}}}return e(c)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.textContent="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;se()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){gc("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||gc("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),tl=null;
/**
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
 */"undefined"!=typeof MozWebSocket?tl=MozWebSocket:"undefined"!=typeof WebSocket&&(tl=WebSocket);var nl=function(){"use strict";function t(n,r,i,a,o,s,c){e(u)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_c(this.connId),this.stats_=Jc(r),this.connURL=t.connectionURL_(r,s,c,a,i),this.nodeAdmin=r.nodeAdmin}return e(c)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cc.set("previous_websocket_failure",!0);try{var r;if(se()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(qc,"/").concat(ic,"/").concat(k.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new tl(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){cc.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=ve(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(U(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Nc(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=qc,!se()&&"undefined"!=typeof location&&location.hostname&&Wc.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),zc(e,Vc,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==tl&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return cc.isInMemoryStorage||!0===cc.get("previous_websocket_failure")}}]),t}();nl.responsesRequiredToBeHealthy=2,nl.healthyTimeout=3e4;
/**
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
 */
var rl=function(){"use strict";function t(n){e(u)(this,t),this.initTransports_(n)}return e(c)(t,[{key:"initTransports_",value:function(e){var n=nl&&nl.isAvailable(),r=n&&!nl.previouslyFailed();if(e.webSocketOnly&&(n||wc("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nl];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[Zc,nl]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();rl.globalTransportInitialized_=!1;
/**
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
 */
var il=function(){"use strict";function t(n,r,i,a,o,s,c,l,h,f){e(u)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=s,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_c("c:"+this.id+":"),this.transportManager_=new rl(r),this.log_("Connection created"),this.start_()}return e(c)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Lc((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=Sc("t",e),n=Sc("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=Sc("t",e),n=Sc("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=Sc("t",e);if("d"in e){var n=e.d;if("h"===t){var r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?kc("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kc("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qc!==n&&wc("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Lc((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lc((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cc.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),al=function(){"use strict";function t(){e(u)(this,t)}return e(c)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),ol=function(){"use strict";function t(n){e(u)(this,t),this.allowedEvents_=n,this.listeners_={},U(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(c)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(f)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){U(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),sl=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){var t;return e(u)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ie()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(c)(r,[{key:"getInitialEvent",value:function(e){return U("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(ol),ul=function(){"use strict";function t(n,r){if(e(u)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(c)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function cl(){return new ul("")}function ll(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function hl(e){return e.pieces_.length-e.pieceNum_}function fl(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new ul(e.pieces_,t)}function dl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function vl(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ul(t,0)}function yl(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ul)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new ul(n,0)}function ml(e){return e.pieceNum_>=e.pieces_.length}function gl(e,t){var n=ll(e),r=ll(t);if(null===n)return t;if(n===r)return gl(fl(e),fl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function _l(e,t){for(var n=pl(e,0),r=pl(t,0),i=0;i<n.length&&i<r.length;i++){var a=Tc(n[i],r[i]);if(0!==a)return a}return n.length===r.length?0:n.length<r.length?-1:1}function kl(e,t){if(hl(e)!==hl(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function bl(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(hl(e)>hl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var wl=function t(n,r){"use strict";e(u)(this,t),this.errorPrefix_=r,this.parts_=pl(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Ae(this.parts_[i]);Il(this)};function Il(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+xl(e))}function xl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */var Cl=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){var t,i,a;return e(u)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(c)(r,[{key:"getInitialEvent",value:function(e){return U("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(ol),Tl=1e3,El=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i,a,o,c,l,h,f){var d;if(e(u)(this,r),(d=n.call(this)).repoInfo_=t,d.applicationId_=i,d.onDataUpdate_=a,d.onConnectStatus_=o,d.onServerInfoUpdate_=c,d.authTokenProvider_=l,d.appCheckTokenProvider_=h,d.authOverride_=f,d.id=r.nextPersistentConnectionId_++,d.log_=_c("p:"+d.id+":"),d.interruptReasons_={},d.listens=new Map,d.outstandingPuts_=[],d.outstandingGets_=[],d.outstandingPutCount_=0,d.outstandingGetCount_=0,d.onDisconnectRequestQueue_=[],d.connected_=!1,d.reconnectDelay_=Tl,d.maxReconnectDelay_=3e5,d.securityDebugCallback_=null,d.lastSessionId=null,d.establishConnectionTimer_=null,d.visible_=!1,d.requestCBHash_={},d.requestNumber_=0,d.realtime_=null,d.authToken_=null,d.appCheckToken_=null,d.forceTokenRefresh_=!1,d.invalidAuthTokenCount_=0,d.invalidAppCheckTokenCount_=0,d.firstConnection_=!0,d.lastConnectionAttemptTime_=null,d.lastConnectionEstablishedTime_=null,f&&!se())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Cl.getInstance().on("visible",d.onVisible_,e(s)(d)),-1===t.host.indexOf("fblocal")&&sl.getInstance().on("online",d.onOnline_,e(s)(d)),d}return e(c)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ye(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new te,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=me(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=ge(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+ye(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):kc("Unrecognized action received from server: "+ye(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Tl),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(o).mark((function n(){var i,a,s,u,c,l,f,d,p,v,y,m,g;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),s=t.onRealtimeDisconnect_.bind(t),u=t.id+":"+r.nextConnectionId_++,c=t.lastSessionId,l=!1,f=null,d=function(){f?f.close():(l=!0,s())},p=function(e){U(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(e)},t.realtime_={close:d,sendRequest:p},v=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(h),n.next=20,Promise.all([t.authTokenProvider_.getToken(v),t.appCheckTokenProvider_.getToken(v)]);case 20:n.t1=n.sent,y=(0,n.t0)(n.t1,2),m=y[0],g=y[1],l?gc("getToken() completed but was canceled"):(gc("getToken() completed. Creating connection."),t.authToken_=m&&m.accessToken,t.appCheckToken_=g&&g.token,f=new il(u,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,s,(function(e){wc(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),l||(t.repoInfo_.nodeAdmin&&wc(n.t2),d());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){gc("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){gc("Resuming connection for reason: "+e),delete this.interruptReasons_[e],be(this.interruptReasons_)&&(this.reconnectDelay_=Tl,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Pc(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new ul(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){gc("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){gc("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";se()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ic.replace(/\./g,"-")]=1,ie()?e["framework.cordova"]=1:oe()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=sl.getInstance().currentlyOnline();return be(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&_e(e,"w")){var n=ke(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();wc("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(al);
/**
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
 */El.nextPersistentConnectionId_=0,El.nextConnectionId_=0;
/**
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
 */
var Sl,Pl=function(){"use strict";function t(n,r){e(u)(this,t),this.name=n,this.node=r}return e(c)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Nl=function(){"use strict";function t(){e(u)(this,t)}return e(c)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Pl(xc,e),r=new Pl(xc,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Pl.MIN}}]),t}(),Rl=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"compare",value:function(e,t){return Tc(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw q("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Pl.MIN}},{key:"maxPost",value:function(){return new Pl(Cc,Sl)}},{key:"makePost",value:function(e,t){return U("string"==typeof e,"KeyIndex indexValue must always be a string."),new Pl(e,Sl)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return Sl},set:function(e){Sl=e}}]),r}(Nl),Ol=new Rl,Al=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(u)(this,t),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,a&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(c)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Dl=function(){"use strict";function t(n,r,i,a,o){e(u)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:Fl.EMPTY_NODE,this.right=null!=o?o:Fl.EMPTY_NODE}return e(c)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Fl.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Fl.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
/**
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
 */Dl.RED=!0,Dl.BLACK=!1;var Ml,Ll=function(){"use strict";function t(){e(u)(this,t)}return e(c)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Dl(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),Fl=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(u)(this,t),this.comparator_=n,this.root_=r}return e(c)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dl.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dl.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Al(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Al(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Al(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Al(this.root_,null,this.comparator_,!0,e)}}]),t}();
/**
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
 */
function jl(e,t){return Tc(e.name,t.name)}function Ul(e,t){return Tc(e,t)}
/**
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
 */Fl.EMPTY_NODE=new Ll;var ql,Wl,Vl,Hl=function(e){return"number"==typeof e?"number:"+Oc(e):"string:"+e},Bl=function(e){if(e.isLeafNode()){var t=e.val();U("string"==typeof t||"number"==typeof t||"object"==typeof t&&_e(t,".sv"),"Priority must be a string or number.")}else U(e===Ml||e.isEmpty(),"priority of unexpected type.");U(e===Ml||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},zl=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(u)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,U(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Bl(this.priorityNode_)}return e(c)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return ml(e)?this:".priority"===ll(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=ll(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(U(".priority"!==r||1===hl(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(fl(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Hl(this.priorityNode_.val())+":");var n=e(tc)(this.value_);t+=n+":",t+="number"===n?Oc(this.value_):this.value_,this.lazyHash_=dc(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(tc)(n.value_),i=e(tc)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return U(a>=0,"Unknown leaf type: "+r),U(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return ql},set:function(e){ql=e}}]),t}();zl.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Kl,Gl,Yl=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Tc(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Pl.MIN}},{key:"maxPost",value:function(){return new Pl(Cc,new zl("[PRIORITY-POST]",Vl))}},{key:"makePost",value:function(e,t){var n=Wl(e);return new Pl(t,new zl("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Nl),Jl=new Yl,Ql=Math.log(2),$l=function(){"use strict";function t(n){e(u)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/Ql,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(c)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),Xl=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Dl(o,a.node,Dl.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new Dl(o,a.node,Dl.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new Dl(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Dl.BLACK):(s(h,Dl.BLACK),s(h,Dl.RED))}return a}(new $l(e.length));return new Fl(r||t,a)},Zl={},eh=function(){"use strict";function t(n,r){e(u)(this,t),this.indexes_=n,this.indexSet_=r}return e(c)(t,[{key:"get",value:function(e){var t=ke(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Fl?t:null}},{key:"hasIndex",value:function(e){return _e(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){U(e!==Ol,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(Pl.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?Xl(i,e.getCompare()):Zl;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(we(this.indexes_,(function(t,i){var a=ke(r.indexSet_,i);if(U(a,"Missing index implementation for "+i),t===Zl){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(Pl.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),Xl(o,a.getCompare())}return Zl}var c=n.get(e.name),l=t;return c&&(l=l.remove(new Pl(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(we(this.indexes_,(function(t){if(t===Zl)return t;var r=n.get(e.name);return r?t.remove(new Pl(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return U(Zl&&Jl,"ChildrenNode.ts has not been loaded"),Kl=Kl||new t({".priority":Zl},{".priority":Jl})}}]),t}(),th=function(){"use strict";function t(n,r,i){e(u)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Bl(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(c)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||Gl}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Gl:t}},{key:"getChild",value:function(e){var t=ll(e);return null===t?this:this.getImmediateChild(t).getChild(fl(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(U(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new Pl(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?Gl:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=ll(e);if(null===n)return t;U(".priority"!==ll(e)||1===hl(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(fl(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(Jl,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Hl(this.getPriority().val())+":"),this.forEachChild(Jl,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":dc(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Pl(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Pl(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Pl(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Pl.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Pl.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nh?-1:0}},{key:"withIndex",value:function(e){if(e===Ol||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Ol||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Jl),r=t.getIterator(Jl),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Ol?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return Gl||(Gl=new t(new Fl(Ul),null,eh.Default))}}]),t}();th.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var nh=new(function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.call(this,new Fl(Ul),th.EMPTY_NODE,eh.Default)}return e(c)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return th.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(th));Object.defineProperties(Pl,{MIN:{value:new Pl(xc,th.EMPTY_NODE)},MAX:{value:new Pl(Cc,nh)}}),Rl.__EMPTY_NODE=th.EMPTY_NODE,zl.__childrenNodeConstructor=th,Ml=nh,function(e){Vl=e}(nh);function rh(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return th.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),U(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(tc)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new zl(r,rh(n))}if(t instanceof Array){var i=th.EMPTY_NODE;return Rc(t,(function(e,n){if(_e(t,e)&&"."!==e.substring(0,1)){var r=rh(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(rh(n))}var a=[],o=!1,s=t;if(Rc(s,(function(e,t){if("."!==e.substring(0,1)){var n=rh(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new Pl(e,n)))}})),0===a.length)return th.EMPTY_NODE;var u=Xl(a,jl,(function(e){return e.name}),Ul);if(o){var c=Xl(a,Jl.getCompare());return new th(u,rh(n),new eh({".priority":c},{".priority":Jl}))}return new th(u,rh(n),eh.Default)}!function(e){Wl=e}(rh);
/**
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
 */
var ih=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t){var i;return e(u)(this,r),(i=n.call(this)).indexPath_=t,U(!ml(t)&&".priority"!==ll(t),"Can't create PathIndex with empty path or .priority key"),i}return e(c)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Tc(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=rh(e),r=th.EMPTY_NODE.updateChild(this.indexPath_,n);return new Pl(t,r)}},{key:"maxPost",value:function(){var e=th.EMPTY_NODE.updateChild(this.indexPath_,nh);return new Pl(Cc,e)}},{key:"toString",value:function(){return pl(this.indexPath_,0).join("/")}}]),r}(Nl),ah=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return e(c)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?Tc(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Pl.MIN}},{key:"maxPost",value:function(){return Pl.MAX}},{key:"makePost",value:function(e,t){var n=rh(e);return new Pl(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Nl),oh=new ah;
/**
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
 */
/**
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
 */
function sh(e){return{type:"value",snapshotNode:e}}function uh(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ch(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function lh(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
var hh=function(){"use strict";function t(n){e(u)(this,t),this.index_=n}return e(c)(t,[{key:"updateChild",value:function(e,t,n,r,i,a){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=a&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(ch(t,o)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?a.trackChildChange(uh(t,n)):a.trackChildChange(lh(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}},{key:"updateFullNode",value:function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Jl,(function(e,r){t.hasChild(e)||n.trackChildChange(ch(e,r))})),t.isLeafNode()||t.forEachChild(Jl,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(lh(t,r,i))}else n.trackChildChange(uh(t,r))}))),t.withIndex(this.index_)}},{key:"updatePriority",value:function(e,t){return e.isEmpty()?th.EMPTY_NODE:e.updatePriority(t)}},{key:"filtersNodes",value:function(){return!1}},{key:"getIndexedFilter",value:function(){return this}},{key:"getIndex",value:function(){return this.index_}}]),t}(),fh=function(){"use strict";function t(n){e(u)(this,t),this.indexedFilter_=new hh(n.getIndex()),this.index_=n.getIndex(),this.startPost_=t.getStartPost_(n),this.endPost_=t.getEndPost_(n),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}return e(c)(t,[{key:"getStartPost",value:function(){return this.startPost_}},{key:"getEndPost",value:function(){return this.endPost_}},{key:"matches",value:function(e){var t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}},{key:"updateChild",value:function(e,t,n,r,i,a){return this.matches(new Pl(t,n))||(n=th.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,a)}},{key:"updateFullNode",value:function(e,t,n){t.isLeafNode()&&(t=th.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(th.EMPTY_NODE);var i=this;return t.forEachChild(Jl,(function(e,t){i.matches(new Pl(e,t))||(r=r.updateImmediateChild(e,th.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.indexedFilter_}},{key:"getIndex",value:function(){return this.index_}}],[{key:"getStartPost_",value:function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}},{key:"getEndPost_",value:function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}]),t}(),dh=function(){"use strict";function t(n){var r=this;e(u)(this,t),this.withinDirectionalStart=function(e){return r.reverse_?r.withinEndPost(e):r.withinStartPost(e)},this.withinDirectionalEnd=function(e){return r.reverse_?r.withinStartPost(e):r.withinEndPost(e)},this.withinStartPost=function(e){var t=r.index_.compare(r.rangedFilter_.getStartPost(),e);return r.startIsInclusive_?t<=0:t<0},this.withinEndPost=function(e){var t=r.index_.compare(e,r.rangedFilter_.getEndPost());return r.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new fh(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft(),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}return e(c)(t,[{key:"updateChild",value:function(e,t,n,r,i,a){return this.rangedFilter_.matches(new Pl(t,n))||(n=th.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,a):this.fullLimitUpdateChild_(e,t,n,i,a)}},{key:"updateFullNode",value:function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=th.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var i;r=th.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var a=0;i.hasNext()&&a<this.limit_;){var o=i.getNext();if(this.withinDirectionalStart(o)){if(!this.withinDirectionalEnd(o))break;r=r.updateImmediateChild(o.name,o.node),a++}}}else{var s;r=(r=t.withIndex(this.index_)).updatePriority(th.EMPTY_NODE),s=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);for(var u=0;s.hasNext();){var c=s.getNext();u<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?u++:r=r.updateImmediateChild(c.name,th.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function(){return this.index_}},{key:"fullLimitUpdateChild_",value:function(e,t,n,r,i){var a;if(this.reverse_){var o=this.index_.getCompare();a=function(e,t){return o(t,e)}}else a=this.index_.getCompare();var s=e;U(s.numChildren()===this.limit_,"");var u=new Pl(t,n),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(s.hasChild(t)){for(var h=s.getImmediateChild(t),f=r.getChildAfterChild(this.index_,c,this.reverse_);null!=f&&(f.name===t||s.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);var d=null==f?1:a(f,u);if(l&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(lh(t,n,h)),s.updateImmediateChild(t,n);null!=i&&i.trackChildChange(ch(t,h));var p=s.updateImmediateChild(t,th.EMPTY_NODE);return null!=f&&this.rangedFilter_.matches(f)?(null!=i&&i.trackChildChange(uh(f.name,f.node)),p.updateImmediateChild(f.name,f.node)):p}return n.isEmpty()?e:l&&a(c,u)>=0?(null!=i&&(i.trackChildChange(ch(c.name,c.node)),i.trackChildChange(uh(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(c.name,th.EMPTY_NODE)):e}}]),t}(),ph=function(){"use strict";function t(){e(u)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Jl}return e(c)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xc}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cc}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Jl}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
/**
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
 */function vh(e){var t,n={};if(e.isDefault())return n;if(e.index_===Jl?t="$priority":e.index_===oh?t="$value":e.index_===Ol?t="$key":(U(e.index_ instanceof ih,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=ye(t),e.startSet_){var r=e.startAfterSet_?"startAfter":"startAt";n[r]=ye(e.indexStartValue_),e.startNameSet_&&(n[r]+=","+ye(e.indexStartName_))}if(e.endSet_){var i=e.endBeforeSet_?"endBefore":"endAt";n[i]=ye(e.indexEndValue_),e.endNameSet_&&(n[i]+=","+ye(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function yh(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Jl&&(t.i=e.index_.toString()),t}
/**
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
 */var mh=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i,a,o){var s;return e(u)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=a,s.appCheckTokenProvider_=o,s.log_=_c("p:rest:"),s.listens_={},s}return e(c)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=vh(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),ke(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=vh(e._queryParams),r=e._path.toString(),i=new te;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(h)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+Ce(n);i.log_("Sending REST request for "+l);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(r&&4===f.readyState){c.log_("REST Response for "+l+" received. status:",f.status,"response:",f.responseText);var e=null;if(f.status>=200&&f.status<300){try{e=ve(f.responseText)}catch(e){wc("Failed to parse JSON response for "+l+": "+f.responseText)}r(null,e)}else 401!==f.status&&404!==f.status&&wc("Got unsuccessful REST response for "+l+" Status: "+f.status),r(f.status);r=null}},f.open("GET",l,!0),f.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(al),gh=function(){"use strict";function t(){e(u)(this,t),this.rootNode_=th.EMPTY_NODE}return e(c)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
/**
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
 */
/**
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
 */
function _h(){return{value:null,children:new Map}}function kh(e,t,n){if(ml(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=ll(t);e.children.has(r)||e.children.set(r,_h()),kh(e.children.get(r),t=fl(t),n)}}function bh(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
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
 */(e,(function(e,r){bh(r,new ul(t.toString()+"/"+e),n)}))}var wh,Ih,xh=function(){"use strict";function t(n){e(u)(this,t),this.collection_=n,this.last_=null}return e(c)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Rc(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),Ch=function(){"use strict";function t(n,r){e(u)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new xh(n);var i=1e4+2e4*Math.random();Lc(this.reportStats_.bind(this),Math.floor(i))}return e(c)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Rc(t,(function(t,i){i>0&&_e(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Lc(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
/**
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
 */function Th(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(Ih=wh||(wh={}))[Ih.OVERWRITE=0]="OVERWRITE",Ih[Ih.MERGE=1]="MERGE",Ih[Ih.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ih[Ih.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Eh,Sh=function(){"use strict";function t(n,r,i){e(u)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=wh.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(c)(t,[{key:"operationForChild",value:function(e){if(ml(this.path)){if(null!=this.affectedTree.value)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new ul(e));return new t(cl(),n,this.revert)}return U(ll(this.path)===e,"operationForChild called for unrelated child."),new t(fl(this.path),this.affectedTree,this.revert)}}]),t}(),Ph=function(){"use strict";function t(n,r){e(u)(this,t),this.source=n,this.path=r,this.type=wh.LISTEN_COMPLETE}return e(c)(t,[{key:"operationForChild",value:function(e){return ml(this.path)?new t(this.source,cl()):new t(this.source,fl(this.path))}}]),t}(),Nh=function(){"use strict";function t(n,r,i){e(u)(this,t),this.source=n,this.path=r,this.snap=i,this.type=wh.OVERWRITE}return e(c)(t,[{key:"operationForChild",value:function(e){return ml(this.path)?new t(this.source,cl(),this.snap.getImmediateChild(e)):new t(this.source,fl(this.path),this.snap)}}]),t}(),Rh=function(){"use strict";function t(n,r,i){e(u)(this,t),this.source=n,this.path=r,this.children=i,this.type=wh.MERGE}return e(c)(t,[{key:"operationForChild",value:function(e){if(ml(this.path)){var n=this.children.subtree(new ul(e));return n.isEmpty()?null:n.value?new Nh(this.source,cl(),n.value):new t(this.source,cl(),n)}return U(ll(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,fl(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),Oh=function(){"use strict";function t(n,r,i){e(u)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(c)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(ml(e))return this.isFullyInitialized()&&!this.filtered_;var t=ll(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}(),Ah=function t(n){"use strict";e(u)(this,t),this.query_=n,this.index_=this.query_._queryParams.getIndex()};
/**
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
 */function Dh(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw q("Should only compare child_ events.");var r=new Pl(t.childName,t.snapshotNode),i=new Pl(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Mh(e,t){return{eventCache:e,serverCache:t}}function Lh(e,t,n,r){return Mh(new Oh(t,n,r),e.serverCache)}function Fh(e,t,n,r){return Mh(e.eventCache,new Oh(t,n,r))}function jh(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Uh(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */var qh=function(){return Eh||(Eh=new Fl(Ec)),Eh},Wh=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qh();e(u)(this,t),this.value=n,this.children=r}return e(c)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:cl(),value:this.value};if(ml(e))return null;var n=ll(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(fl(e),t);return null!=i?{path:yl(new ul(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(ml(e))return this;var n=ll(e),r=this.children.get(n);return null!==r?r.subtree(fl(e)):new t(null)}},{key:"set",value:function(e,n){if(ml(e))return new t(n,this.children);var r=ll(e),i=(this.children.get(r)||new t(null)).set(fl(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(ml(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=ll(e),r=this.children.get(n);if(r){var i,a=r.remove(fl(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(ml(e))return this.value;var t=ll(e),n=this.children.get(t);return n?n.get(fl(e)):null}},{key:"setTree",value:function(e,n){if(ml(e))return n;var r,i=ll(e),a=(this.children.get(i)||new t(null)).setTree(fl(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(cl(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(yl(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,cl(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(ml(e))return null;var i=ll(e),a=this.children.get(i);return a?a.findOnPath_(fl(e),yl(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,cl(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(ml(e))return this;this.value&&r(n,this.value);var i=ll(e),a=this.children.get(i);return a?a.foreachOnPath_(fl(e),yl(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(cl(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(yl(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return Rc(e,(function(e,t){n=n.set(new ul(e),t)})),n}}]),t}(),Vh=function(){"use strict";function t(n){e(u)(this,t),this.writeTree_=n}return e(c)(t,null,[{key:"empty",value:function(){return new t(new Wh(null))}}]),t}();function Hh(e,t,n){if(ml(t))return new Vh(new Wh(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=gl(i,t);return a=a.updateChild(o,n),new Vh(e.writeTree_.set(i,a))}var s=new Wh(n),u=e.writeTree_.setTree(t,s);return new Vh(u)}function Bh(e,t,n){var r=e;return Rc(n,(function(e,n){r=Hh(r,yl(t,e),n)})),r}function zh(e,t){if(ml(t))return Vh.empty();var n=e.writeTree_.setTree(t,new Wh(null));return new Vh(n)}function Kh(e,t){return null!=Gh(e,t)}function Gh(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(gl(n.path,t)):null}function Yh(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Jl,(function(e,n){t.push(new Pl(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Pl(e,n.value))})),t}function Jh(e,t){if(ml(t))return e;var n=Gh(e,t);return new Vh(null!=n?new Wh(n):e.writeTree_.subtree(t))}function Qh(e){return e.writeTree_.isEmpty()}function $h(e,t){return Xh(cl(),e.writeTree_,t)}function Xh(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(U(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Xh(yl(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(yl(e,".priority"),r)),n}
/**
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
 */function Zh(e,t){return pf(t,e)}function ef(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function tf(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));U(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&nf(s,r.path)?i=!1:bl(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=af(e.allWrites,rf,cl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=zh(e.visibleWrites,r.path):Rc(r.children,(function(t){e.visibleWrites=zh(e.visibleWrites,yl(r.path,t))}));return!0}return!1}function nf(e,t){if(e.snap)return bl(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&bl(yl(e.path,n),t))return!0;return!1}function rf(e){return e.visible}function af(e,t,n){for(var r=Vh.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)bl(n,o)?r=Hh(r,s=gl(n,o),a.snap):bl(o,n)&&(s=gl(o,n),r=Hh(r,cl(),a.snap.getChild(s)));else{if(!a.children)throw q("WriteRecord should have .snap or .children");if(bl(n,o))r=Bh(r,s=gl(n,o),a.children);else if(bl(o,n))if(ml(s=gl(o,n)))r=Bh(r,cl(),a.children);else{var u=ke(a.children,ll(s));if(u){var c=u.getChild(fl(s));r=Hh(r,cl(),c)}}}}}return r}function of(e,t,n,r,i){if(r||i){var a=Jh(e.visibleWrites,t);if(!i&&Qh(a))return n;if(i||null!=n||Kh(a,cl())){return $h(af(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(bl(e.path,t)||bl(t,e.path))}),t),n||th.EMPTY_NODE)}return null}var o=Gh(e.visibleWrites,t);if(null!=o)return o;var s=Jh(e.visibleWrites,t);return Qh(s)?n:null!=n||Kh(s,cl())?$h(s,n||th.EMPTY_NODE):null}function sf(e,t,n,r){return of(e.writeTree,e.treePath,t,n,r)}function uf(e,t){return function(e,t,n){var r=th.EMPTY_NODE,i=Gh(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Jl,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=Jh(e.visibleWrites,t);return n.forEachChild(Jl,(function(e,t){var n=$h(Jh(a,new ul(e)),t);r=r.updateImmediateChild(e,n)})),Yh(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return Yh(Jh(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function cf(e,t,n,r){return function(e,t,n,r,i){U(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=yl(t,n);if(Kh(e.visibleWrites,a))return null;var o=Jh(e.visibleWrites,a);return Qh(o)?i.getChild(n):$h(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function lf(e,t){return function(e,t){return Gh(e.visibleWrites,t)}(e.writeTree,yl(e.treePath,t))}function hf(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=Jh(e.visibleWrites,t),c=Gh(u,cl());if(null!=c)s=c;else{if(null==n)return[];s=$h(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),f=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),d=f.getNext();d&&l.length<i;)0!==h(d,r)&&l.push(d),d=f.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function ff(e,t,n){return function(e,t,n,r){var i=yl(t,n),a=Gh(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?$h(Jh(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function df(e,t){return pf(yl(e.treePath,t),e.writeTree)}function pf(e,t){return{treePath:e,writeTree:t}}
/**
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
 */var vf=function(){"use strict";function t(){e(u)(this,t),this.changeMap=new Map}return e(c)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;U("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),U(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,lh(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ch(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,uh(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw q("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,lh(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),yf=new(function(){"use strict";function t(){e(u)(this,t)}return e(c)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),mf=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(u)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(c)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Oh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ff(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Uh(this.viewCache_),i=hf(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
/**
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
 */function gf(e,t,n,r,i){var a,o,s=new vf;if(n.type===wh.OVERWRITE){var u=n;u.source.fromUser?a=bf(e,t,u.path,u.snap,r,i,s):(U(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!ml(u.path),a=kf(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===wh.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=yl(n,r);wf(t,ll(c))&&(s=bf(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=yl(n,r);wf(t,ll(c))||(s=bf(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(U(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=xf(e,t,c.path,c.children,r,i,o,s))}else if(n.type===wh.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=lf(r,n))return t;var s,u=new mf(r,t,i),c=t.eventCache.getNode();if(ml(n)||".priority"===ll(n)){var l;if(t.serverCache.isFullyInitialized())l=sf(r,Uh(t));else{var h=t.serverCache.getNode();U(h instanceof th,"serverChildren would be complete if leaf node"),l=uf(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var f=ll(n),d=ff(r,f,t.serverCache);null==d&&t.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),(s=null!=d?e.filter.updateChild(c,f,d,fl(n),u,a):t.eventCache.getNode().hasChild(f)?e.filter.updateChild(c,f,th.EMPTY_NODE,fl(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=sf(r,Uh(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=lf(r,cl()),Lh(t,s,o,e.filter.filtersNodes())}
/**
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=lf(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(ml(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return kf(e,t,n,u.getNode().getChild(n),i,a,s,o);if(ml(n)){var c=new Wh(null);return u.getNode().forEachChild(Ol,(function(e,t){c=c.set(new ul(e),t)})),xf(e,t,n,c,i,a,s,o)}return t}var l=new Wh(null);return r.foreach((function(e,t){var r=yl(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),xf(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==wh.LISTEN_COMPLETE)throw q("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Fh(t,a.getNode(),a.isFullyInitialized()||ml(n),a.isFiltered());return _f(e,o,n,r,yf,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=jh(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(sh(jh(t)))}}(t,a,h),{viewCache:a,changes:h}}function _f(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=lf(r,n))return t;if(ml(n))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Uh(t),l=uf(r,c instanceof th?c:th.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=sf(r,Uh(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var f=ll(n);if(".priority"===f){U(1===hl(n),"Can't have a priority with additional path components");var d=u.getNode(),p=cf(r,n,d,s=t.serverCache.getNode());o=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,y=fl(n);if(u.isCompleteForChild(f)){s=t.serverCache.getNode();var m=cf(r,n,u.getNode(),s);v=null!=m?u.getNode().getImmediateChild(f).updateChild(y,m):u.getNode().getImmediateChild(f)}else v=ff(r,f,t.serverCache);o=null!=v?e.filter.updateChild(u.getNode(),f,v,y,i,a):u.getNode()}}return Lh(t,o,u.isFullyInitialized()||ml(n),e.filter.filtersNodes())}function kf(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(ml(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=ll(n);if(!c.isCompleteForPath(n)&&hl(n)>1)return t;var d=fl(n),p=c.getNode().getImmediateChild(f).updateChild(d,r);u=".priority"===f?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),f,p,d,yf,null)}var v=Fh(t,u,c.isFullyInitialized()||ml(n),l.filtersNodes());return _f(e,v,n,i,new mf(i,v,a),s)}function bf(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new mf(i,t,a);if(ml(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=Lh(t,u,!0,e.filter.filtersNodes());else{var h=ll(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Lh(t,u,c.isFullyInitialized(),c.isFiltered());else{var f,d=fl(n),p=c.getNode().getImmediateChild(h);if(ml(d))f=r;else{var v=l.getCompleteChild(h);f=null!=v?".priority"===dl(d)&&v.getChild(vl(d)).isEmpty()?v:v.updateChild(d,r):th.EMPTY_NODE}if(p.equals(f))s=t;else s=Lh(t,e.filter.updateChild(c.getNode(),h,f,d,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function wf(e,t){return e.eventCache.isCompleteForChild(t)}function If(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function xf(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=ml(n)?r:new Wh(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=If(0,t.serverCache.getNode().getImmediateChild(n),r);c=kf(e,c,new ul(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=If(0,t.serverCache.getNode().getImmediateChild(n),r);c=kf(e,c,new ul(n),h,i,a,o,s)}})),c}var Cf,Tf=function(){"use strict";function t(n,r){e(u)(this,t),this.query_=n,this.eventRegistrations_=[];var i,a=this.query_._queryParams,o=new hh(a.getIndex()),s=(i=a).loadsAllData()?new hh(i.getIndex()):i.hasLimit()?new dh(i):new fh(i);this.processor_=
/**
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
 */
function(e){return{filter:e}}(s);var c=r.serverCache,l=r.eventCache,h=o.updateFullNode(th.EMPTY_NODE,c.getNode(),null),f=s.updateFullNode(th.EMPTY_NODE,l.getNode(),null),d=new Oh(h,c.isFullyInitialized(),o.filtersNodes()),p=new Oh(f,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Mh(p,d),this.eventGenerator_=new Ah(this.query_)}return e(c)(t,[{key:"query",get:function(){return this.query_}}]),t}();function Ef(e,t){var n=Uh(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ml(t)&&!n.getImmediateChild(ll(t)).isEmpty())?n.getChild(t):null}function Sf(e){return 0===e.eventRegistrations_.length}function Pf(e,t,n){var r=[];if(n){U(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var a=[],o=0;o<e.eventRegistrations_.length;++o){var s=e.eventRegistrations_[o];if(s.matches(t)){if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(o+1));break}}else a.push(s)}e.eventRegistrations_=a}else e.eventRegistrations_=[];return r}function Nf(e,t,n,r){t.type===wh.MERGE&&null!==t.source.queryId&&(U(Uh(e.viewCache_),"We should always have a full cache before handling merges"),U(jh(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=gf(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,U(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),U(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),U(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Rf(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Rf(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Dh(e,i,"child_removed",t,r,n),Dh(e,i,"child_added",t,r,n),Dh(e,i,"child_moved",a,r,n),Dh(e,i,"child_changed",t,r,n),Dh(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */var Of,Af=function t(){"use strict";e(u)(this,t),this.views=new Map};function Df(e){return 0===e.views.size}function Mf(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return U(null!=a,"SyncTree gave us an op for an invalid query."),Nf(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;o=o.concat(Nf(f,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function Lf(e,t,n,r,i){var a=t._queryIdentifier,o=e.views.get(a);if(!o){var s=sf(n,i?r:null),u=!1;s?u=!0:r instanceof th?(s=uf(n,r),u=!1):(s=th.EMPTY_NODE,u=!1);var c=Mh(new Oh(s,u,!1),new Oh(r,i,!1));return new Tf(t,c)}return o}function Ff(e,t,n,r,i,a){var o=Lf(e,t,r,i,a);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){var n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Jl,(function(e,t){r.push(uh(e,t))})),n.isFullyInitialized()&&r.push(sh(n.getNode())),Rf(e,r,n.getNode(),t)}(o,n)}function jf(t,n,r,i){var a=n._queryIdentifier,o=[],s=[],u=Hf(t),c=!0,l=!1,f=void 0;if("default"===a)try{for(var d,p=t.views.entries()[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var v=e(h)(d.value,2),y=v[0],m=v[1];s=s.concat(Pf(m,r,i)),Sf(m)&&(t.views.delete(y),m.query._queryParams.loadsAllData()||o.push(m.query))}}catch(e){l=!0,f=e}finally{try{c||null==p.return||p.return()}finally{if(l)throw f}}else{var g=t.views.get(a);g&&(s=s.concat(Pf(g,r,i)),Sf(g)&&(t.views.delete(a),g.query._queryParams.loadsAllData()||o.push(g.query)))}return u&&!Hf(t)&&o.push(new(U(Cf,"Reference.ts has not been loaded"),Cf)(n._repo,n._path)),{removed:o,events:s}}function Uf(e){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.views.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.query._queryParams.loadsAllData()||t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}function qf(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||Ef(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}function Wf(e,t){if(t._queryParams.loadsAllData())return Bf(e);var n=t._queryIdentifier;return e.views.get(n)}function Vf(e,t){return null!=Wf(e,t)}function Hf(e){return null!=Bf(e)}function Bf(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.views.values()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
/**
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
 */var zf=1,Kf=function t(n){"use strict";e(u)(this,t),this.listenProvider_=n,this.syncPointTree_=new Wh(null),this.pendingWriteTree_={visibleWrites:Vh.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function Gf(e,t,n,r,i){return function(e,t,n,r,i){U(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Hh(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?nd(e,new Nh({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Yf(e,t,n,r){!function(e,t,n,r){U(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Bh(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);var i=Wh.fromObject(n);return nd(e,new Rh({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function Jf(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=ef(e.pendingWriteTree_,t),i=tf(e.pendingWriteTree_,t);if(i){var a=new Wh(null);return null!=r.snap?a=a.set(cl(),!0):Rc(r.children,(function(e){a=a.set(new ul(e),!0)})),nd(e,new Sh(r.path,a,n))}return[]}function Qf(e,t,n){return nd(e,new Nh({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function $f(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t._path,o=e.syncPointTree_.get(a),s=[];if(o&&("default"===t._queryIdentifier||Vf(o,t))){var u=jf(o,t,n,r);Df(o)&&(e.syncPointTree_=e.syncPointTree_.remove(a));var c=u.removed;if(s=u.events,!i){var l=-1!==c.findIndex((function(e){return e._queryParams.loadsAllData()})),h=e.syncPointTree_.findOnPath(a,(function(e,t){return Hf(t)}));if(l&&!h){var f=e.syncPointTree_.subtree(a);if(!f.isEmpty())for(var d=hd(f),p=0;p<d.length;++p){var v=d[p],y=v.query,m=ad(e,v);e.listenProvider_.startListening(fd(y),od(e,y),m.hashFn,m.onComplete)}}if(!h&&c.length>0&&!r)if(l){var g=null;e.listenProvider_.stopListening(fd(t),g)}else c.forEach((function(t){var n=e.queryToTagMap.get(sd(t));e.listenProvider_.stopListening(fd(t),n)}))}dd(e,c)}return s}function Xf(e,t,n,r){var i=ud(e,r);if(null!=i){var a=cd(i),o=a.path,s=a.queryId,u=gl(o,t);return ld(e,o,new Nh(Th(s),u,n))}return[]}function Zf(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t._path,a=null,o=!1;e.syncPointTree_.foreachOnPath(i,(function(e,t){var n=gl(e,i);a=a||qf(t,n),o=o||Hf(t)}));var s,u=e.syncPointTree_.get(i);if(u?(o=o||Hf(u),a=a||qf(u,cl())):(u=new Af,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=a)s=!0;else{s=!1,a=th.EMPTY_NODE;var c=e.syncPointTree_.subtree(i);c.foreachChild((function(e,t){var n=qf(t,cl());n&&(a=a.updateImmediateChild(e,n))}))}var l=Vf(u,t);if(!l&&!t._queryParams.loadsAllData()){var h=sd(t);U(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");var f=pd();e.queryToTagMap.set(h,f),e.tagToQueryMap.set(f,h)}var d=Zh(e.pendingWriteTree_,i),p=Ff(u,t,n,d,a,s);if(!l&&!o&&!r){var v=Wf(u,t);p=p.concat(vd(e,t,v))}return p}function ed(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=qf(n,gl(e,t));if(r)return r}));return of(r,t,i,n,!0)}function td(e,t){var n=t._path,r=null;e.syncPointTree_.foreachOnPath(n,(function(e,t){var i=gl(e,n);r=r||qf(t,i)}));var i=e.syncPointTree_.get(n);i?r=r||qf(i,cl()):(i=new Af,e.syncPointTree_=e.syncPointTree_.set(n,i));var a=null!=r,o=a?new Oh(r,!0,!1):null;return function(e){return jh(e.viewCache_)}(Lf(i,t,Zh(e.pendingWriteTree_,t._path),a?o.getNode():th.EMPTY_NODE,a))}function nd(e,t){return rd(t,e.syncPointTree_,null,Zh(e.pendingWriteTree_,cl()))}function rd(e,t,n,r){if(ml(e.path))return id(e,t,n,r);var i=t.get(cl());null==n&&null!=i&&(n=qf(i,cl()));var a=[],o=ll(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=df(r,o);a=a.concat(rd(s,u,c,l))}return i&&(a=a.concat(Mf(i,e,r,n))),a}function id(e,t,n,r){var i=t.get(cl());null==n&&null!=i&&(n=qf(i,cl()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=df(r,t),u=e.operationForChild(t);u&&(a=a.concat(id(u,i,o,s)))})),i&&(a=a.concat(Mf(i,e,r,n))),a}function ad(e,t){var n=t.query,r=od(e,n);return{hashFn:function(){var e=function(e){return e.viewCache_.serverCache.getNode()}(t)||th.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?function(e,t,n){var r=ud(e,n);if(r){var i=cd(r),a=i.path,o=i.queryId,s=gl(a,t);return ld(e,a,new Ph(Th(o),s))}return[]}(e,n._path,r):function(e,t){return nd(e,new Ph({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var i=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return $f(e,n,null,i)}}}function od(e,t){var n=sd(t);return e.queryToTagMap.get(n)}function sd(e){return e._path.toString()+"$"+e._queryIdentifier}function ud(e,t){return e.tagToQueryMap.get(t)}function cd(e){var t=e.indexOf("$");return U(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ul(e.substr(0,t))}}function ld(e,t,n){var r=e.syncPointTree_.get(t);return U(r,"Missing sync point for query tag that we're tracking"),Mf(r,n,Zh(e.pendingWriteTree_,t),null)}function hd(e){return e.fold((function(e,t,n){if(t&&Hf(t))return[Bf(t)];var r=[];return t&&(r=Uf(t)),Rc(n,(function(e,t){r=r.concat(t)})),r}))}function fd(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(U(Of,"Reference.ts has not been loaded"),Of)(e._repo,e._path):e}function dd(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=sd(r),a=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(a)}}}function pd(){return zf++}function vd(e,t,n){var r=t._path,i=od(e,t),a=ad(e,n),o=e.listenProvider_.startListening(fd(t),i,a.hashFn,a.onComplete),s=e.syncPointTree_.subtree(r);if(i)U(!Hf(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold((function(e,t,n){if(!ml(e)&&t&&Hf(t))return[Bf(t).query];var r=[];return t&&(r=r.concat(Uf(t).map((function(e){return e.query})))),Rc(n,(function(e,t){r=r.concat(t)})),r})),c=0;c<u.length;++c){var l=u[c];e.listenProvider_.stopListening(fd(l),od(e,l))}return o}
/**
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
 */var yd=function(){"use strict";function t(n){e(u)(this,t),this.node_=n}return e(c)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),md=function(){"use strict";function t(n,r){e(u)(this,t),this.syncTree_=n,this.path_=r}return e(c)(t,[{key:"getImmediateChild",value:function(e){var n=yl(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return ed(this.syncTree_,this.path_)}}]),t}(),gd=function(e,t,n){return e&&"object"==typeof e?(U(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?_d(e[".sv"],t,n):"object"==typeof e[".sv"]?kd(e[".sv"],t):void U(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_d=function(e,t,n){if("timestamp"===e)return n.timestamp;U(!1,"Unexpected server value: "+e)},kd=function(e,t,n){e.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&U(!1,"Unexpected increment value: "+r);var i=t.node();if(U(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},bd=function(e,t,n,r){return Id(t,new md(n,e),r)},wd=function(e,t,n){return Id(e,new yd(t),n)};function Id(e,t,n){var r,i=e.getPriority().val(),a=gd(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=gd(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new zl(s,rh(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new zl(a))),u.forEachChild(Jl,(function(e,i){var a=Id(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
/**
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
 */var xd=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(u)(this,t),this.name=n,this.parent=r,this.node=i};function Cd(e,t){for(var n=t instanceof ul?t:new ul(t),r=e,i=ll(n);null!==i;){var a=ke(r.node.children,i)||{children:{},childCount:0};r=new xd(i,r,a),i=ll(n=fl(n))}return r}function Td(e){return e.node.value}function Ed(e,t){e.node.value=t,Od(e)}function Sd(e){return e.node.childCount>0}function Pd(e,t){Rc(e.node.children,(function(n,r){t(new xd(n,e,r))}))}function Nd(e,t,n,r){n&&!r&&t(e),Pd(e,(function(e){Nd(e,t,!0,r)})),n&&r&&t(e)}function Rd(e){return new ul(null===e.parent?e.name:Rd(e.parent)+"/"+e.name)}function Od(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Td(e)&&!Sd(e)}(n),i=_e(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Od(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Od(e))}
/**
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
 */(e.parent,e.name,e)}var Ad=/[\[\].#$\/\u0000-\u001F\u007F]/,Dd=/[\[\].#$\u0000-\u001F\u007F]/,Md=10485760,Ld=function(e){return"string"==typeof e&&0!==e.length&&!Ad.test(e)},Fd=function(e){return"string"==typeof e&&0!==e.length&&!Dd.test(e)},jd=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Ic(e)||e&&"object"==typeof e&&_e(e,".sv")},Ud=function(e,t,n,r){r&&void 0===t||qd(Re(e,"value"),t,n)},qd=function(e,t,n){var r=n instanceof ul?new wl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xl(r));if("function"==typeof t)throw new Error(e+"contains a function "+xl(r)+" with contents = "+t.toString());if(Ic(t))throw new Error(e+"contains "+t.toString()+" "+xl(r));if("string"==typeof t&&t.length>3495253.3333333335&&Ae(t)>Md)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+xl(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(Rc(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!Ld(t)))throw new Error(e+" contains an invalid key ("+t+") "+xl(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=Ae(s),Il(o),qd(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Ae(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+xl(r)+" in addition to actual children.")}},Wd=function(e,t,n,r){if(!r||void 0!==t){var i=Re(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var a=[];Rc(t,(function(e,t){var r=new ul(e);if(qd(i,t,yl(n,r)),".priority"===dl(r)&&!jd(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(r)})),function(e,t){var n,r;for(n=0;n<t.length;n++)for(var i=pl(r=t[n]),a=0;a<i.length;a++)if(".priority"===i[a]&&a===i.length-1);else if(!Ld(i[a]))throw new Error(e+"contains an invalid key ("+i[a]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(_l);var o=null;for(n=0;n<t.length;n++){if(r=t[n],null!==o&&bl(o,r))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}}(i,a)}},Vd=function(e,t,n,r){if(!(r&&void 0===n||Fd(n)))throw new Error(Re(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Hd=function(e,t){if(".info"===ll(t))throw new Error(e+" failed = Can't modify data under /.info/")},Bd=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ld(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Fd(e)}(n))throw new Error(Re(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},zd=function t(){"use strict";e(u)(this,t),this.eventLists_=[],this.recursionDepth_=0};function Kd(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||kl(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function Gd(e,t,n){Kd(e,n),Yd(e,(function(e){return bl(e,t)||bl(t,e)}))}function Yd(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(Jd(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function Jd(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();vc&&gc("event: "+n.toString()),Mc(r)}}}
/**
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
 */var Qd="repo_interrupt",$d=function(){"use strict";function t(n,r,i,a){e(u)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_h(),this.transactionQueueTree_=new xd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(c)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function Xd(e,t,n){if(e.stats_=Jc(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new mh(e.repoInfo_,(function(t,n,r,i){tp(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return np(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new El(e.repoInfo_,t,(function(t,n,r,i){tp(e,t,n,r,i)}),(function(t){np(e,t)}),(function(t){!function(e,t){Rc(t,(function(t,n){rp(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new Ch(e.stats_,e.server_)},a=r.toString(),Yc[a]||(Yc[a]=i()),Yc[a]),e.infoData_=new gh,e.infoSyncTree_=new Kf({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=Qf(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),rp(e,"connected",!1),e.serverSyncTree_=new Kf({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);Gd(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function Zd(e){var t=e.infoData_.getNode(new ul(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ep(e){return(t=(t={timestamp:Zd(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function tp(e,t,n,r,i){e.dataUpdateCount++;var a=new ul(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=we(n,(function(e){return rh(e)}));o=function(e,t,n,r){var i=ud(e,r);if(i){var a=cd(i),o=a.path,s=a.queryId,u=gl(o,t),c=Wh.fromObject(n);return ld(e,o,new Rh(Th(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=rh(n);o=Xf(e.serverSyncTree_,a,u,i)}else if(r){var c=we(n,(function(e){return rh(e)}));o=function(e,t,n){var r=Wh.fromObject(n);return nd(e,new Rh({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=rh(n);o=Qf(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=fp(e,a)),Gd(e.eventQueue_,h,o)}function np(e,t){rp(e,"connected",t),!1===t&&function(e){sp(e,"onDisconnectEvents");var t=ep(e),n=_h();bh(e.onDisconnect_,cl(),(function(r,i){var a=bd(r,i,e.serverSyncTree_,t);kh(n,r,a)}));var r=[];bh(n,cl(),(function(t,n){r=r.concat(Qf(e.serverSyncTree_,t,n));var i=mp(e,t);fp(e,i)})),e.onDisconnect_=_h(),Gd(e.eventQueue_,cl(),r)}(e)}function rp(e,t,n){var r=new ul("/.info/"+t),i=rh(n);e.infoData_.updateSnapshot(r,i);var a=Qf(e.infoSyncTree_,r,i);Gd(e.eventQueue_,r,a)}function ip(e){return e.nextWriteId_++}function ap(e,t,n,r,i){sp(e,"set",{path:t.toString(),value:n,priority:r});var a=ep(e),o=rh(n,r),s=ed(e.serverSyncTree_,t),u=wd(o,s,a),c=ip(e),l=Gf(e.serverSyncTree_,t,u,c,!0);Kd(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(function(n,r){var a="ok"===n;a||wc("set at "+t+" failed: "+n);var o=Jf(e.serverSyncTree_,c,!a);Gd(e.eventQueue_,t,o),up(e,i,n,r)}));var h=mp(e,t);fp(e,h),Gd(e.eventQueue_,h,[])}function op(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Qd)}function sp(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),gc.apply(void 0,[a].concat(e(f)(r)))}function up(e,t,n,r){t&&Mc((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var a=new Error(i);a.code=e,t(a)}}))}function cp(e,t,n){return ed(e.serverSyncTree_,t,n)||th.EMPTY_NODE}function lp(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||yp(e,t),Td(t)){var n=pp(e,t);U(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&hp(e,Rd(t),n)}else Sd(t)&&Pd(t,(function(t){lp(e,t)}))}function hp(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=cp(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];U(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=gl(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){sp(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(Jf(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);yp(e,Cd(e.transactionQueueTree_,t)),lp(e,e.transactionQueueTree_),Gd(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)Mc(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{wc("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}fp(e,t)}}),o)}function fp(e,t){var n=dp(e,t),r=Rd(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=gl(n,u.path),l=!1,h=void 0;if(U(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(Jf(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(Jf(e.serverSyncTree_,u.currentWriteId,!0));else{var f=cp(e,u.path,o);u.currentInputSnapshot=f;var d=t[r].update(f.val());if(void 0!==d){qd("transaction failed: Data returned ",d,u.path);var p=rh(d);"object"==typeof d&&null!=d&&_e(d,".priority")||(p=p.updatePriority(f.getPriority()));var v=u.currentWriteId,y=ep(e),m=wd(p,f,y);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=m,u.currentWriteId=ip(e),o.splice(o.indexOf(v),1),a=(a=a.concat(Gf(e.serverSyncTree_,u.path,m,u.currentWriteId,u.applyLocally))).concat(Jf(e.serverSyncTree_,v,!0))}else l=!0,h="nodata",a=a.concat(Jf(e.serverSyncTree_,u.currentWriteId,!0))}Gd(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);yp(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Mc(i[u]);lp(e,e.transactionQueueTree_)}(e,pp(e,n),r),r}function dp(e,t){var n,r=e.transactionQueueTree_;for(n=ll(t);null!==n&&void 0===Td(r);)r=Cd(r,n),n=ll(t=fl(t));return r}function pp(e,t){var n=[];return vp(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function vp(e,t,n){var r=Td(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Pd(t,(function(t){vp(e,t,n)}))}function yp(e,t){var n=Td(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Ed(t,n.length>0?n:void 0)}Pd(t,(function(t){yp(e,t)}))}function mp(e,t){var n=Rd(dp(e,t)),r=Cd(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){gp(e,t)})),gp(e,r),Nd(r,(function(t){gp(e,t)})),n}function gp(e,t){var n=Td(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(U(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(U(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jf(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Ed(t,void 0):n.length=a+1,Gd(e.eventQueue_,Rd(t),i);for(var s=0;s<r.length;s++)Mc(r[s])}}
/**
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
 */var _p,kp,bp=function(e,t){var n=wp(e),r=n.namespace;"firebase.com"===n.domain&&bc(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||bc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&wc("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Bc(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ul(n.pathString)}},wp=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):wc("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),a=r}"ns"in f&&(a=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Ip="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",xp=(_p=0,kp=[],function(){"use strict";function t(n,r,i,a){e(u)(this,t),this.eventType=n,this.eventRegistration=r,this.snapshot=i,this.prevName=a}return e(c)(t,[{key:"getPath",value:function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}},{key:"getEventType",value:function(){return this.eventType}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}]),t}()),Cp=function(){"use strict";function t(n,r,i){e(u)(this,t),this.eventRegistration=n,this.error=r,this.path=i}return e(c)(t,[{key:"getPath",value:function(){return this.path}},{key:"getEventType",value:function(){return"cancel"}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.path.toString()+":cancel"}}]),t}(),Tp=function(){"use strict";function t(n,r){e(u)(this,t),this.snapshotCallback=n,this.cancelCallback=r}return e(c)(t,[{key:"onValue",value:function(e,t){this.snapshotCallback.call(null,e,t)}},{key:"onCancel",value:function(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}},{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}},{key:"matches",value:function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}]),t}(),Ep=function(){"use strict";function t(n,r,i,a){e(u)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(c)(t,[{key:"key",get:function(){return ml(this._path)?null:dl(this._path)}},{key:"ref",get:function(){return new Sp(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=yh(this._queryParams),t=Pc(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return yh(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Le(e))instanceof t))return!1;var n=this._repo===e._repo,r=kl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Sp=function(t){"use strict";e(l)(r,t);var n=e(I)(r);function r(t,i){return e(u)(this,r),n.call(this,t,i,new ph,!1)}return e(c)(r,[{key:"parent",get:function(){var e=vl(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Ep),Pp=function(){"use strict";function t(n,r,i){e(u)(this,t),this._node=n,this.ref=r,this._index=i}return e(c)(t,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}},{key:"child",value:function(e){var n=new ul(e),r=Rp(this.ref,e);return new t(this._node.getChild(n),r,Jl)}},{key:"exists",value:function(){return!this._node.isEmpty()}},{key:"exportVal",value:function(){return this._node.val(!0)}},{key:"forEach",value:function(e){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(r,i){return e(new t(i,Rp(n.ref,r),Jl))}))}},{key:"hasChild",value:function(e){var t=new ul(e);return!this._node.getChild(t).isEmpty()}},{key:"hasChildren",value:function(){return!this._node.isLeafNode()&&!this._node.isEmpty()}},{key:"toJSON",value:function(){return this.exportVal()}},{key:"val",value:function(){return this._node.val()}}]),t}();function Np(e,t){return(e=Le(e))._checkNotDeleted("ref"),void 0!==t?Rp(e._root,t):e._root}function Rp(e,t){var n,r,i,a;return null===ll((e=Le(e))._path)?(n="child",r="path",a=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Vd(n,r,i,a)):Vd("child","path",t,!1),new Sp(e._repo,yl(e._path,t))}function Op(e,t){e=Le(e),Hd("set",e._path),Ud("set",t,e._path,!1);var n=new te;return ap(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}function Ap(e,t){Wd("update",t,e._path,!1);var n=new te;return function(e,t,n,r){sp(e,"update",{path:t.toString(),value:n});var i=!0,a=ep(e),o={};if(Rc(n,(function(n,r){i=!1,o[n]=bd(yl(t,n),rh(r),e.serverSyncTree_,a)})),i)gc("update() called with empty data.  Don't do anything."),up(0,r,"ok",void 0);else{var s=ip(e),u=Yf(e.serverSyncTree_,t,o,s);Kd(e.eventQueue_,u),e.server_.merge(t.toString(),n,(function(n,i){var a="ok"===n;a||wc("update at "+t+" failed: "+n);var o=Jf(e.serverSyncTree_,s,!a),u=o.length>0?fp(e,t):t;Gd(e.eventQueue_,u,o),up(0,r,n,i)})),Rc(n,(function(n){var r=mp(e,yl(t,n));fp(e,r)})),Gd(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((function(){}))),n.promise}function Dp(e){e=Le(e);var t,n,r,i,a=new Tp((function(){})),o=new Mp(a);return(t=e._repo,n=e,r=o,i=td(t.serverSyncTree_,n),null!=i?Promise.resolve(i):t.server_.get(n).then((function(e){var i,a=rh(e).withIndex(n._queryParams.getIndex());if(Zf(t.serverSyncTree_,n,r,!0),n._queryParams.loadsAllData())i=Qf(t.serverSyncTree_,n._path,a);else{var o=od(t.serverSyncTree_,n);i=Xf(t.serverSyncTree_,n._path,a,o)}return Gd(t.eventQueue_,n._path,i),$f(t.serverSyncTree_,n,r,null,!0),a}),(function(e){return sp(t,"get for query "+ye(n)+" failed: "+e),Promise.reject(new Error(e))}))).then((function(t){return new Pp(t,new Sp(e._repo,e._path),e._queryParams.getIndex())}))}var Mp=function(){"use strict";function t(n){e(u)(this,t),this.callbackContext=n}return e(c)(t,[{key:"respondsTo",value:function(e){return"value"===e}},{key:"createEvent",value:function(e,t){var n=t._queryParams.getIndex();return new xp("value",this,new Pp(e.snapshotNode,new Sp(t._repo,t._path),n))}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Cp(this,e,t):null}},{key:"matches",value:function(e){return e instanceof t&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}},{key:"hasAnyCallback",value:function(){return null!==this.callbackContext}}]),t}();!function(e){U(!Cf,"__referenceConstructor has already been defined"),Cf=e}(Sp),function(e){U(!Of,"__referenceConstructor has already been defined"),Of=e}(Sp);
/**
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
 */
var Lp={},Fp=!1;function jp(e,t,n,r){e.repoInfo_=new Bc("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Up(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||bc("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gc("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=bp(a,i),u=s.repoInfo,c=void 0;void 0!==k&&k.env&&(c=k.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=bp(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new Uc(Uc.OWNER):new jc(e.name,e.options,t);Bd("Invalid Firebase Database URL",s),ml(s.path)||bc("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Lp[t.name];i||(i={},Lp[t.name]=i);var a=i[e.toURLString()];a&&bc("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new $d(e,Fp,n,r),i[e.toURLString()]=a,a}(u,e,l,new Fc(e.name,n));return new qp(h,e)}var qp=function(){"use strict";function t(n,r){e(u)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(c)(t,[{key:"_repo",get:function(){return this._instanceStarted||(Xd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Sp(this._repo,cl())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Lp[t])&&n[e.key]===e||bc("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),op(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&bc("Cannot call "+e+" on a deleted database.")}}]),t}();function Wp(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt(),n=arguments.length>1?arguments[1]:void 0,r=Pt(t,"database").getImmediate({identifier:n});if(!r._instanceStarted){var i=X("database");i&&Vp.apply(void 0,[r].concat(e(f)(i)))}return r}function Vp(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=Le(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&bc("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&bc('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Uc(Uc.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:ne(r.mockUserToken,e.app.options.projectId);a=new Uc(o)}jp(i,t,n,a)}El.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},El.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){ic=At,St(new je("database",(function(e,t){var n=t.instanceIdentifier;return Up(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Lt(nc,rc,e),Lt(nc,rc,"esm2017")}
/**
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
 */();var Hp=document.querySelector(".backdrop"),Bp=document.querySelector(".open-modal"),zp=document.querySelector(".form-wrapper"),Kp=null,Gp=Dt({apiKey:"AIzaSyBoP3LpsEiKYieYZusHkpDBfoZn6Hezx9o",authDomain:"serhii-df24d.firebaseapp.com",projectId:"serhii-df24d",storageBucket:"serhii-df24d.appspot.com",messagingSenderId:"305658302139",appId:"1:305658302139:web:6a7f5004932c7c8c1f639e",measurementId:"G-WNMLVDPVC8"}),Yp=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt(),t=Pt(e=Le(e),au);t.isInitialized()?t.getImmediate():$u(e)}(Gp),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt(),t=Pt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=jr(e,{popupRedirectResolver:po,persistence:[ha,qi,Vi]}),r=ee("authTokenSyncURL");if(r){var i=To(r);Di(n,i,(function(){return i(n.currentUser)})),Ai(n,(function(e){return i(e)}))}var a=$("auth");return a&&Ur(n,"http://".concat(a)),n}(Gp)),Jp=[1,2,3];function Qp(){var e;(e=Yp,Le(e).signOut()).then((function(){console.log("Sign-out successful."),Kp.remove(),Bp.textContent="Sign up",Bp.disabled=!1})).catch((function(e){console.log(e)}))}function $p(e){e.preventDefault(),console.dir(e.currentTarget);var t=e.currentTarget.elements,n=t.name,r=t.email,i=t.password;Ni(Yp,r.value,i.value).then((function(e){var t=e.user;console.log(t),function(e){console.log(ev),Op(Np(Wp(),"users/"+Yp.currentUser.uid),{name:e})}(n.value),Hp.classList.add("is-hidden")})).catch((function(e){e.code,e.message}))}function Xp(e){return Zp.apply(this,arguments)}function Zp(){return(Zp=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.dir(n.currentTarget),r=n.currentTarget.elements,i=r.email,a=r.password,e.next=5,Oi(Yp,i.value,a.value).then((function(e){var t=e.user;console.log(t);tv();Hp.classList.add("is-hidden")})).catch((function(e){e.code,e.message}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ev(){console.log(ev),Ap(Np(Wp(),"users/"+Yp.currentUser.uid),{books:Jp})}function tv(){Dp(Rp(Np(Wp()),"users/".concat(Yp.currentUser.uid))).then((function(e){e.exists()?(console.log(e.val()),Bp.textContent=e.val().name):console.log("No data available")})).catch((function(e){console.error(e)}))}document.querySelector(".cloze").addEventListener("click",(function(){Hp.classList.add("is-hidden")}));var nv=document.querySelector(".sign-in"),rv=document.querySelector(".sign-up");function iv(){if("Sign up"!==Bp.textContent)return function(){var e='<button class="log-out">Log out</button>';Bp.insertAdjacentHTML("afterend",e),(Kp=document.querySelector(".log-out")).addEventListener("click",Qp)}(),void(Bp.disabled=!0);zp.innerHTML='<form class="auth-form">\n    <input type="text" name="name" placeholder="name" />\n    <input type="text" name="email" placeholder="email" />\n    <input type="text" name="password" placeholder="password" />\n    <button type="submit" class="registr">Sign up</button>\n  </form>';var e=document.querySelector(".auth-form");Hp.classList.remove("is-hidden"),e.addEventListener("submit",$p),console.log("openModal")}Bp.addEventListener("click",iv),rv.addEventListener("click",iv),nv.addEventListener("click",(function(){zp.innerHTML='<form class="login-form">\n    <input type="text" name="email" placeholder="email" />\n    <input type="text" name="password" placeholder="password" />\n    <button type="submit" class="login">Login</button>\n  </form>',document.querySelector(".login-form").addEventListener("submit",Xp)})),iv(),console.dir(Bp)}();
//# sourceMappingURL=index.fc16372b.js.map
