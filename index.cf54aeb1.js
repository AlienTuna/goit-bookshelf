function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},s=t.parcelRequired7c6;function o(e,t){return function(){return e.apply(t,arguments)}}null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.cf54aeb1.js","7KTfb":"1@1x.83793dec.png","iDbTN":"2@1x.a811d7d5.png","fkqC3":"3@1x.6ac66faf.png","diPsZ":"4@1x.c7f5fe29.png","jnnX2":"5@1x.7c9c3dc2.png","gv2iw":"6@1x.71c203d6.png","aCODG":"7@1x.1ba5bf4c.png","iA2RO":"8@1x.2eba1e1d.png","jVZBP":"9@1x.f49b1c5b.png","iu5Ma":"1@2x.942b9940.png","7Xr5y":"3@2x.d23ba6a5.png","65lDr":"2@2x.e811c68f.png","gBF71":"4@2x.0de69f0c.png","7NE85":"5@2x.a93b1256.png","1zvB9":"6@2x.65a4ae1a.png","cuQZB":"7@2x.37310303.png","5AoxB":"8@2x.ce6a436a.png","dyZM4":"9@2x.6a5c0de0.png","hd7m9":"amazon.96f71be0.svg","30Myv":"applebook.26cc4082.svg","eqjQv":"bookshop.a185b304.svg","eunLf":"index.5868bbb8.css"}'));const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,l=(h=Object.create(null),e=>{const t=a.call(e);return h[t]||(h[t]=t.slice(8,-1).toLowerCase())});var h;const u=e=>(e=e.toLowerCase(),t=>l(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,p=d("undefined");const g=u("ArrayBuffer");const m=d("string"),_=d("function"),y=d("number"),v=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==l(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),E=u("File"),I=u("Blob"),C=u("FileList"),T=u("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),f(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function k(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,A=e=>!p(e)&&e!==R;const O=(N="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>N&&e instanceof N);var N;const x=u("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),L=u("RegExp"),D=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};S(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},M={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const F=u("AsyncFunction");var U={isArray:f,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||_(e.append)&&("formdata"===(t=l(e))||"object"===t&&_(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:m,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:w,isUndefined:p,isDate:b,isFile:E,isBlob:I,isRegExp:L,isFunction:_,isStream:e=>v(e)&&_(e.pipe),isURLSearchParams:T,isTypedArray:O,isFileList:C,forEach:S,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},i=(i,r)=>{const s=t&&k(n,r)||r;w(n[s])&&w(i)?n[s]=e(n[s],i):w(i)?n[s]=e({},i):f(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(S(t,((t,i)=>{n&&_(t)?e[i]=o(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:x,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:D,freezeMethods:e=>{D(e,((t,n)=>{if(_(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];_(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:k,global:R,isContextDefined:A,ALPHABET:M,generateString:(e=16,t=M.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&_(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=f(e)?[]:{};return S(e,((e,t)=>{const s=n(e,i+1);!p(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)},isAsyncFn:F,isThenable:e=>e&&(v(e)||_(e))&&_(e.then)&&_(e.catch)};function j(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}U.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const B=j.prototype,q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(j,q),Object.defineProperty(B,"isAxiosError",{value:!0}),j.from=(e,t,n,i,r,s)=>{const o=Object.create(B);return U.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),j.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var W,H,z,$=j;H=function(e){var t,n,i=ee(e),r=i[0],s=i[1],o=new X(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)t=Y[e.charCodeAt(n)]<<18|Y[e.charCodeAt(n+1)]<<12|Y[e.charCodeAt(n+2)]<<6|Y[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=Y[e.charCodeAt(n)]<<2|Y[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=Y[e.charCodeAt(n)]<<10|Y[e.charCodeAt(n+1)]<<4|Y[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},z=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(te(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(G[t>>2]+G[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(G[t>>10]+G[t>>4&63]+G[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var V,K,G=[],Y=[],X="undefined"!=typeof Uint8Array?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q=0,Z=J.length;Q<Z;++Q)G[Q]=J[Q],Y[J.charCodeAt(Q)]=Q;function ee(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function te(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(G[(r=i)>>18&63]+G[r>>12&63]+G[r>>6&63]+G[63&r]);return s.join("")}Y["-".charCodeAt(0)]=62,Y["_".charCodeAt(0)]=63,V=function(e,t,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,h=-7,u=n?r-1:0,d=n?-1:1,f=e[t+u];for(u+=d,s=f&(1<<-h)-1,f>>=-h,h+=a;h>0;s=256*s+e[t+u],u+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=256*o+e[t+u],u+=d,h-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},K=function(e,t,n,i,r,s){var o,a,c,l=8*s-r-1,h=(1<<l)-1,u=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+u>=1?d/c:d*Math.pow(2,1-u))*c>=2&&(o++,c/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(t*c-1)*Math.pow(2,r),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*g};const ne="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;W=re;function ie(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,re.prototype),t}function re(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return ae(e)}return se(e,t,n)}function se(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!re.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|ue(e,t);let i=ie(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ze(e,Uint8Array)){const t=new Uint8Array(e);return le(t.buffer,t.byteOffset,t.byteLength)}return ce(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(ze(e,ArrayBuffer)||e&&ze(e.buffer,ArrayBuffer))return le(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(ze(e,SharedArrayBuffer)||e&&ze(e.buffer,SharedArrayBuffer)))return le(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return re.from(i,t,n);const r=function(e){if(re.isBuffer(e)){const t=0|he(e.length),n=ie(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||$e(e.length)?ie(0):ce(e);if("Buffer"===e.type&&Array.isArray(e.data))return ce(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return re.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function oe(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ae(e){return oe(e),ie(e<0?0:0|he(e))}function ce(e){const t=e.length<0?0:0|he(e.length),n=ie(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function le(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,re.prototype),i}function he(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function ue(e,t){if(re.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ze(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return qe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return We(e).length;default:if(r)return i?-1:qe(e).length;t=(""+t).toLowerCase(),r=!0}}function de(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Te(this,t,n);case"utf8":case"utf-8":return Ee(this,t,n);case"ascii":return Ie(this,t,n);case"latin1":case"binary":return Ce(this,t,n);case"base64":return be(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Se(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function fe(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function pe(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),$e(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=re.from(t,i)),re.isBuffer(t))return 0===t.length?-1:ge(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):ge(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function ge(e,t,n,i,r){let s,o=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(e,s+i)!==l(t,i)){n=!1;break}if(n)return s}return-1}function me(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if($e(i))return o;e[n+o]=i}return o}function _e(e,t,n,i){return He(qe(t,e.length-n),e,n,i)}function ye(e,t,n,i){return He(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function ve(e,t,n,i){return He(We(t),e,n,i)}function we(e,t,n,i){return He(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function be(e,t,n){return 0===t&&n===e.length?z(e):z(e.slice(t,n))}function Ee(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}re.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),re.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(re.prototype,"parent",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.buffer}}),Object.defineProperty(re.prototype,"offset",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.byteOffset}}),re.poolSize=8192,re.from=function(e,t,n){return se(e,t,n)},Object.setPrototypeOf(re.prototype,Uint8Array.prototype),Object.setPrototypeOf(re,Uint8Array),re.alloc=function(e,t,n){return function(e,t,n){return oe(e),e<=0?ie(e):void 0!==t?"string"==typeof n?ie(e).fill(t,n):ie(e).fill(t):ie(e)}(e,t,n)},re.allocUnsafe=function(e){return ae(e)},re.allocUnsafeSlow=function(e){return ae(e)},re.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==re.prototype},re.compare=function(e,t){if(ze(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),ze(t,Uint8Array)&&(t=re.from(t,t.offset,t.byteLength)),!re.isBuffer(e)||!re.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},re.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},re.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return re.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=re.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(ze(t,Uint8Array))r+t.length>i.length?(re.isBuffer(t)||(t=re.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!re.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},re.byteLength=ue,re.prototype._isBuffer=!0,re.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)fe(this,t,t+1);return this},re.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)fe(this,t,t+3),fe(this,t+1,t+2);return this},re.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)fe(this,t,t+7),fe(this,t+1,t+6),fe(this,t+2,t+5),fe(this,t+3,t+4);return this},re.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ee(this,0,e):de.apply(this,arguments)},re.prototype.toLocaleString=re.prototype.toString,re.prototype.equals=function(e){if(!re.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===re.compare(this,e)},re.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ne&&(re.prototype[ne]=re.prototype.inspect),re.prototype.compare=function(e,t,n,i,r){if(ze(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),!re.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},re.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},re.prototype.indexOf=function(e,t,n){return pe(this,e,t,n,!0)},re.prototype.lastIndexOf=function(e,t,n){return pe(this,e,t,n,!1)},re.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return me(this,e,t,n);case"utf8":case"utf-8":return _e(this,e,t,n);case"ascii":case"latin1":case"binary":return ye(this,e,t,n);case"base64":return ve(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},re.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ie(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Ce(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Te(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=Ve[e[i]];return r}function Se(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function ke(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Re(e,t,n,i,r,s){if(!re.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Ae(e,t,n,i,r){Fe(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Oe(e,t,n,i,r){Fe(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Ne(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function xe(e,t,n,i,r){return t=+t,n>>>=0,r||Ne(e,0,n,4),K(e,t,n,i,23,4),n+4}function Pe(e,t,n,i,r){return t=+t,n>>>=0,r||Ne(e,0,n,8),K(e,t,n,i,52,8),n+8}re.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,re.prototype),i},re.prototype.readUintLE=re.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ke(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},re.prototype.readUintBE=re.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ke(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},re.prototype.readUint8=re.prototype.readUInt8=function(e,t){return e>>>=0,t||ke(e,1,this.length),this[e]},re.prototype.readUint16LE=re.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ke(e,2,this.length),this[e]|this[e+1]<<8},re.prototype.readUint16BE=re.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ke(e,2,this.length),this[e]<<8|this[e+1]},re.prototype.readUint32LE=re.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ke(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},re.prototype.readUint32BE=re.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ke(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},re.prototype.readBigUInt64LE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),re.prototype.readBigUInt64BE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),re.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ke(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},re.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ke(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},re.prototype.readInt8=function(e,t){return e>>>=0,t||ke(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},re.prototype.readInt16LE=function(e,t){e>>>=0,t||ke(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt16BE=function(e,t){e>>>=0,t||ke(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt32LE=function(e,t){return e>>>=0,t||ke(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},re.prototype.readInt32BE=function(e,t){return e>>>=0,t||ke(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},re.prototype.readBigInt64LE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),re.prototype.readBigInt64BE=Ke((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),re.prototype.readFloatLE=function(e,t){return e>>>=0,t||ke(e,4,this.length),V(this,e,!0,23,4)},re.prototype.readFloatBE=function(e,t){return e>>>=0,t||ke(e,4,this.length),V(this,e,!1,23,4)},re.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ke(e,8,this.length),V(this,e,!0,52,8)},re.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ke(e,8,this.length),V(this,e,!1,52,8)},re.prototype.writeUintLE=re.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Re(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},re.prototype.writeUintBE=re.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Re(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},re.prototype.writeUint8=re.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,1,255,0),this[t]=255&e,t+1},re.prototype.writeUint16LE=re.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeUint16BE=re.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeUint32LE=re.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},re.prototype.writeUint32BE=re.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigUInt64LE=Ke((function(e,t=0){return Ae(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeBigUInt64BE=Ke((function(e,t=0){return Oe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Re(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},re.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Re(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},re.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},re.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},re.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Re(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigInt64LE=Ke((function(e,t=0){return Ae(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeBigInt64BE=Ke((function(e,t=0){return Oe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeFloatLE=function(e,t,n){return xe(this,e,t,!0,n)},re.prototype.writeFloatBE=function(e,t,n){return xe(this,e,t,!1,n)},re.prototype.writeDoubleLE=function(e,t,n){return Pe(this,e,t,!0,n)},re.prototype.writeDoubleBE=function(e,t,n){return Pe(this,e,t,!1,n)},re.prototype.copy=function(e,t,n,i){if(!re.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},re.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!re.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=re.isBuffer(e)?e:re.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const Le={};function De(e,t,n){Le[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Me(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Fe(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new Le.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Ue(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||je(t,e.length-(n+1))}(i,r,s)}function Ue(e,t){if("number"!=typeof e)throw new Le.ERR_INVALID_ARG_TYPE(t,"number",e)}function je(e,t,n){if(Math.floor(e)!==e)throw Ue(e,n),new Le.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Le.ERR_BUFFER_OUT_OF_BOUNDS;throw new Le.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}De("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),De("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),De("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Me(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Me(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const Be=/[^+/0-9A-Za-z-_]/g;function qe(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function We(e){return H(function(e){if((e=(e=e.split("=")[0]).trim().replace(Be,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function He(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function ze(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function $e(e){return e!=e}const Ve=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function Ke(e){return"undefined"==typeof BigInt?Ge:e}function Ge(){throw new Error("BigInt not supported")}var Ye=W;function Xe(e){return U.isPlainObject(e)||U.isArray(e)}function Je(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function Qe(e,t,n){return e?e.concat(t).map((function(e,t){return e=Je(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Ze=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)}));var et=function(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new $("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Ye.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(U.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(Xe)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=Je(n),a.forEach((function(e,i){!U.isUndefined(e)&&null!==e&&t.append(!0===o?Qe([n],i,s):null===o?n:n+"[]",c(e))})),!1;return!!Xe(e)||(t.append(Qe(r,n,s),c(e)),!1)}const h=[],u=Object.assign(Ze,{defaultVisitor:l,convertValue:c,isVisitable:Xe});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!U.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&r.call(t,n,U.isString(s)?s.trim():s,i,u))&&e(n,i?i.concat(s):[s])})),h.pop()}}(e),t};function tt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function nt(e,t){this._pairs=[],e&&et(e,this,t)}const it=nt.prototype;it.append=function(e,t){this._pairs.push([e,t])},it.toString=function(e){const t=e?function(t){return e.call(this,t,tt)}:tt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var rt=nt;function st(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ot(e,t,n){if(!t)return e;const i=n&&n.encode||st,r=n&&n.serialize;let s;if(s=r?r(t,n):U.isURLSearchParams(t)?t.toString():new rt(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var at=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var lt={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:rt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ht(e,t){return et(e,new lt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return lt.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var ut=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&U.isArray(i)?i.length:s,a)return U.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&U.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&U.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,i)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const dt={"Content-Type":void 0};const ft={transitional:ct,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=U.isObject(e);r&&U.isHTMLForm(e)&&(e=new FormData(e));if(U.isFormData(e))return i&&i?JSON.stringify(ut(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ht(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return et(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ft.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw $.from(e,$.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lt.classes.FormData,Blob:lt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],(function(e){ft.headers[e]={}})),U.forEach(["post","put","patch"],(function(e){ft.headers[e]=U.merge(dt)}));var pt=ft;const gt=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var mt=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&gt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const _t=Symbol("internals");function yt(e){return e&&String(e).trim().toLowerCase()}function vt(e){return!1===e||null==e?e:U.isArray(e)?e.map(vt):String(e)}function wt(e,t,n,i,r){return U.isFunction(i)?i.call(this,t,n):(r&&(t=n),U.isString(t)?U.isString(i)?-1!==t.indexOf(i):U.isRegExp(i)?i.test(t):void 0:void 0)}let bt=Symbol.iterator,Et=Symbol.toStringTag;class It{set(e,t,n){const i=this;function r(e,t,n){const r=yt(t);if(!r)throw new Error("header name must be a non-empty string");const s=U.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=vt(e))}const s=(e,t)=>U.forEach(e,((e,n)=>r(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(mt(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=yt(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=yt(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!wt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=yt(e)){const r=U.findKey(n,e);!r||t&&!wt(0,n[r],r,t)||(delete n[r],i=!0)}}return U.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!wt(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return U.forEach(this,((i,r)=>{const s=U.findKey(n,r);if(s)return t[s]=vt(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=vt(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&U.isArray(n)?n.join(", "):n)})),t}[bt](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Et](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[_t]=this[_t]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=yt(e);t[i]||(!function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return U.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.freezeMethods(It.prototype),U.freezeMethods(It);var Ct=It;function Tt(e,t){const n=this||pt,i=t||n,r=Ct.from(i.headers);let s=i.data;return U.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function St(e){return!(!e||!e.__CANCEL__)}function kt(e,t,n){$.call(this,null==e?"canceled":e,$.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(kt,$,{__CANCEL__:!0});var Rt=kt;function At(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Ot=lt.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),U.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),U.isString(i)&&o.push("path="+i),U.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Nt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function xt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Nt(e,t):t}var Pt=lt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=U.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Lt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Dt=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let h=o,u=0;for(;h!==s;)u+=n[h++],h%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*u/d):void 0}};function Mt(e,t){let n=0;const i=Dt(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}var Ft="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Ct.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}U.isFormData(i)&&(lt.isStandardBrowserEnv||lt.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=xt(e.baseURL,e.url);function h(){if(!c)return;const i=Ct.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());At((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ot(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(n(new $("Request aborted",$.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new $("Network Error",$.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||ct;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new $(t,i.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,c)),c=null},lt.isStandardBrowserEnv){const t=(e.withCredentials||Pt(l))&&e.xsrfCookieName&&Ot.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&U.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Mt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Mt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new Rt(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const u=Lt(l);u&&-1===lt.protocols.indexOf(u)?n(new $("Unsupported protocol "+u+":",$.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const Ut={http:null,xhr:Ft};U.forEach(Ut,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var jt={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=U.isString(n)?Ut[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new $(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(U.hasOwnProp(Ut,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!U.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Ut};function Bt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Rt(null,e)}function qt(e){Bt(e),e.headers=Ct.from(e.headers),e.data=Tt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return jt.getAdapter(e.adapter||pt.adapter)(e).then((function(t){return Bt(e),t.data=Tt.call(e,e.transformResponse,t),t.headers=Ct.from(t.headers),t}),(function(t){return St(t)||(Bt(e),t&&t.response&&(t.response.data=Tt.call(e,e.transformResponse,t.response),t.response.headers=Ct.from(t.response.headers))),Promise.reject(t)}))}const Wt=e=>e instanceof Ct?e.toJSON():e;function Ht(e,t){t=t||{};const n={};function i(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function r(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!U.isUndefined(t))return i(void 0,t)}function o(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(Wt(e),Wt(t),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),(function(i){const s=c[i]||r,o=s(e[i],t[i],i);U.isUndefined(o)&&s!==a||(n[i]=o)})),n}const zt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{zt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const $t={};zt.transitional=function(e,t,n){function i(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new $(i(r," has been removed"+(t?" in "+t:"")),$.ERR_DEPRECATED);return t&&!$t[r]&&($t[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var Vt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new $("option "+s+" must be "+n,$.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new $("Unknown option "+s,$.ERR_BAD_OPTION)}},validators:zt};const Kt=Vt.validators;class Gt{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ht(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&Vt.assertOptions(n,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),null!=i&&(U.isFunction(i)?t.paramsSerializer={serialize:i}:Vt.assertOptions(i,{encode:Kt.function,serialize:Kt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&U.merge(r.common,r[t.method]),s&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Ct.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let h,u=0;if(!a){const e=[qt.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),h=e.length,l=Promise.resolve(t);u<h;)l=l.then(e[u++],e[u++]);return l}h=o.length;let d=t;for(u=0;u<h;){const e=o[u++],t=o[u++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=qt.call(this,d)}catch(e){return Promise.reject(e)}for(u=0,h=c.length;u<h;)l=l.then(c[u++],c[u++]);return l}getUri(e){return ot(xt((e=Ht(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new at,response:new at}}}U.forEach(["delete","get","head","options"],(function(e){Gt.prototype[e]=function(t,n){return this.request(Ht(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Ht(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Gt.prototype[e]=t(),Gt.prototype[e+"Form"]=t(!0)}));var Yt=Gt;class Xt{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Xt((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new Rt(e,i,r),t(n.reason))}))}}var Jt=Xt;const Qt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qt).forEach((([e,t])=>{Qt[t]=e}));var Zt=Qt;const en=function e(t){const n=new Yt(t),i=o(Yt.prototype.request,n);return U.extend(i,Yt.prototype,n,{allOwnKeys:!0}),U.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Ht(t,n))},i}(pt);en.Axios=Yt,en.CanceledError=Rt,en.CancelToken=Jt,en.isCancel=St,en.VERSION="1.4.0",en.toFormData=et,en.AxiosError=$,en.Cancel=en.CanceledError,en.all=function(e){return Promise.all(e)},en.spread=function(e){return function(t){return e.apply(null,t)}},en.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},en.mergeConfig=Ht,en.AxiosHeaders=Ct,en.formToJSON=e=>ut(U.isHTMLForm(e)?new FormData(e):e),en.HttpStatusCode=Zt,en.default=en;var tn=en;const{Axios:nn,AxiosError:rn,CanceledError:sn,isCancel:on,CancelToken:an,VERSION:cn,all:ln,Cancel:hn,isAxiosError:un,spread:dn,toFormData:fn,AxiosHeaders:pn,HttpStatusCode:gn,formToJSON:mn,mergeConfig:_n}=tn;async function yn(){try{const{data:e}=await tn("https://books-backend.p.goit.global/books/top-books",{});return e}catch(e){alert(`Oops! Something went wrong. You caught the following error: ${e.message}.`)}}async function vn(e){try{const{data:t}=await tn(`https://books-backend.p.goit.global/books/category?category=${e}`,{});return t}catch(e){alert(`Oops! Something went wrong. You caught the following error: ${e.message}.`)}}const wn=document.querySelector(".best-sellers");function bn(e){const t=`\n    <h1 class="title-book">\n      Best Sellers <span class="title-book-span">Books</span>\n    </h1> <ul class="books-container"> ${e.map((e=>`\n      <li class="books-list"> \n      <h3 class="books-list-title">${e.list_name}</h3>\n        <div class="books-card-container" data-list-id="${e.list_name}">\n          ${e.books.map((e=>`\n\n            <a href="#" class="books-item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${e._id}'>\n      \n            <div class="books-card">\n              <img\n                src="${e.book_image}"\n                alt="${e.title}"\n                class="books-card-title-img"\n                width="180"\n                height="256"\n                loading="lazy"\n              />\n              <div class="books-overlay">\n                <p class="books-overlay-text">quick view</p>\n              </div>\n             </div> \n              <div class="books-descr">\n                <h3 class="books-card-title">${e.title}</h3>\n                <p class="books-card-author">${e.author}</p>\n              </div>\n           </a>\n       `)).join("")}\n        </div>\n        <button class="books-btn" type="button" data-id="${e.list_name}">see more</button>\n      </li>\n      `)).join("")}</ul>`;wn.insertAdjacentHTML("beforeend",t);const n=document.querySelectorAll(".books-btn"),i=document.querySelectorAll(".books-item-link");n.forEach((e=>{e.addEventListener("click",En)})),i.forEach((e=>{e.addEventListener("click",In)}))}function En(e){Tn(e.target.dataset.id)}function In(e){e.preventDefault();e.currentTarget.dataset.id}function Cn(e){return e.map((e=>`<a href="#" class="books-item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${e._id}'>\n      \n            <div class="books-card">\n              <img\n                src="${e.book_image}"\n                alt="${e.title}"\n                class="books-card-title-img"\n                width="180"\n                height="256"\n                loading="lazy"\n              />\n              <div class="books-overlay">\n                <p class="books-overlay-text">quick view</p>\n              </div>\n             </div> \n              <div class="books-descr">\n                <h3 class="books-card-title">${e.title}</h3>\n                <p class="books-card-author">${e.author}</p>\n              </div>\n           </a>`)).join("")}async function Tn(e){const t=await vn(e),n=document.querySelector(`[data-list-id="${e}"]`);n.innerHTML=Cn(t),n.classList.add("active"),n.nextElementSibling.style.display="none",n.childNodes.forEach((e=>e.addEventListener("click",In))),n.previousElementSibling.classList.add("active")}!async function(){bn(await yn())}();var Sn=tn;var kn,Rn=!("undefined"==typeof window||!window.document||!window.document.createElement);kn=Rn;var An=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},On="object"==typeof t&&t&&t.Object===Object&&t,Nn="object"==typeof self&&self&&self.Object===Object&&self,xn=On||Nn||Function("return this")(),Pn=function(){return xn.Date.now()},Ln=/\s/;var Dn=function(e){for(var t=e.length;t--&&Ln.test(e.charAt(t)););return t},Mn=/^\s+/;var Fn=xn.Symbol,Un=Object.prototype,jn=Un.hasOwnProperty,Bn=Un.toString,qn=Fn?Fn.toStringTag:void 0;var Wn=function(e){var t=jn.call(e,qn),n=e[qn];try{e[qn]=void 0;var i=!0}catch(e){}var r=Bn.call(e);return i&&(t?e[qn]=n:delete e[qn]),r},Hn=Object.prototype.toString;var zn=function(e){return Hn.call(e)},$n=Fn?Fn.toStringTag:void 0;var Vn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$n&&$n in Object(e)?Wn(e):zn(e)};var Kn=function(e){return null!=e&&"object"==typeof e};var Gn=function(e){return"symbol"==typeof e||Kn(e)&&"[object Symbol]"==Vn(e)},Yn=/^[-+]0x[0-9a-f]+$/i,Xn=/^0b[01]+$/i,Jn=/^0o[0-7]+$/i,Qn=parseInt;var Zn=function(e){if("number"==typeof e)return e;if(Gn(e))return NaN;if(An(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=An(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var n;e=(n=e)?n.slice(0,Dn(n)+1).replace(Mn,""):n;var i=Xn.test(e);return i||Jn.test(e)?Qn(e.slice(2),i?2:8):Yn.test(e)?NaN:+e},ei=Math.max,ti=Math.min;var ni=function(e,t,n){var i,r,s,o,a,c,l=0,h=!1,u=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,s=r;return i=r=void 0,l=t,o=e.apply(s,n)}function p(e){return l=e,a=setTimeout(m,t),h?f(e):o}function g(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-l>=s}function m(){var e=Pn();if(g(e))return _(e);a=setTimeout(m,function(e){var n=t-(e-c);return u?ti(n,s-(e-l)):n}(e))}function _(e){return a=void 0,d&&i?f(e):(i=r=void 0,o)}function y(){var e=Pn(),n=g(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return p(c);if(u)return clearTimeout(a),a=setTimeout(m,t),f(c)}return void 0===a&&(a=setTimeout(m,t)),o}return t=Zn(t)||0,An(n)&&(h=!!n.leading,s=(u="maxWait"in n)?ei(Zn(n.maxWait)||0,t):s,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},y.flush=function(){return void 0===a?o:_(Pn())},y};var ii=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return An(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),ni(e,t,{leading:i,maxWait:t,trailing:r})},ri=function(){return ri=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},ri.apply(this,arguments)},si=null,oi=null;function ai(){if(null===si){if("undefined"==typeof document)return si=0;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var n=t.getBoundingClientRect().right;e.removeChild(t),si=n}return si}function ci(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function li(e){return e&&e.ownerDocument?e.ownerDocument:document}n(kn)&&window.addEventListener("resize",(function(){oi!==window.devicePixelRatio&&(oi=window.devicePixelRatio,si=null)}));var hi=function(e){return Array.prototype.reduce.call(e,(function(e,t){var n=t.name.match(/data-simplebar-(.+)/);if(n){var i=n[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[i]=!0;break;case"false":e[i]=!1;break;case void 0:e[i]=!0;break;default:e[i]=t.value}}return e}),{})};function ui(e,t){var n;e&&(n=e.classList).add.apply(n,t.split(" "))}function di(e,t){e&&t.split(" ").forEach((function(t){e.classList.remove(t)}))}function fi(e){return".".concat(e.split(" ").join("."))}var pi=Object.freeze({__proto__:null,getElementWindow:ci,getElementDocument:li,getOptions:hi,addClasses:ui,removeClasses:di,classNamesToQuery:fi}),gi=ci,mi=li,_i=hi,yi=ui,vi=di,wi=fi,bi=function(){function e(t,n){void 0===n&&(n={});var i=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var e=gi(i.el);i.scrollXTicking||(e.requestAnimationFrame(i.scrollX),i.scrollXTicking=!0),i.scrollYTicking||(e.requestAnimationFrame(i.scrollY),i.scrollYTicking=!0),i.isScrolling||(i.isScrolling=!0,yi(i.el,i.classNames.scrolling)),i.showScrollbar("x"),i.showScrollbar("y"),i.onStopScrolling()},this.scrollX=function(){i.axis.x.isOverflowing&&i.positionScrollbar("x"),i.scrollXTicking=!1},this.scrollY=function(){i.axis.y.isOverflowing&&i.positionScrollbar("y"),i.scrollYTicking=!1},this._onStopScrolling=function(){vi(i.el,i.classNames.scrolling),i.options.autoHide&&(i.hideScrollbar("x"),i.hideScrollbar("y")),i.isScrolling=!1},this.onMouseEnter=function(){i.isMouseEntering||(yi(i.el,i.classNames.mouseEntered),i.showScrollbar("x"),i.showScrollbar("y"),i.isMouseEntering=!0),i.onMouseEntered()},this._onMouseEntered=function(){vi(i.el,i.classNames.mouseEntered),i.options.autoHide&&(i.hideScrollbar("x"),i.hideScrollbar("y")),i.isMouseEntering=!1},this._onMouseMove=function(e){i.mouseX=e.clientX,i.mouseY=e.clientY,(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseMoveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseMoveForAxis("y")},this.onMouseLeave=function(){i.onMouseMove.cancel(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseLeaveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseLeaveForAxis("y"),i.mouseX=-1,i.mouseY=-1},this._onWindowResize=function(){i.scrollbarWidth=i.getScrollbarWidth(),i.hideNativeScrollbar()},this.onPointerEvent=function(e){var t,n;i.axis.x.track.el&&i.axis.y.track.el&&i.axis.x.scrollbar.el&&i.axis.y.scrollbar.el&&(i.axis.x.track.rect=i.axis.x.track.el.getBoundingClientRect(),i.axis.y.track.rect=i.axis.y.track.el.getBoundingClientRect(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&(t=i.isWithinBounds(i.axis.x.track.rect)),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&(n=i.isWithinBounds(i.axis.y.track.rect)),(t||n)&&(e.stopPropagation(),"pointerdown"===e.type&&"touch"!==e.pointerType&&(t&&(i.axis.x.scrollbar.rect=i.axis.x.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.x.scrollbar.rect)?i.onDragStart(e,"x"):i.onTrackClick(e,"x")),n&&(i.axis.y.scrollbar.rect=i.axis.y.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.y.scrollbar.rect)?i.onDragStart(e,"y"):i.onTrackClick(e,"y")))))},this.drag=function(t){var n,r,s,o,a,c,l,h,u,d,f;if(i.draggedAxis&&i.contentWrapperEl){var p=i.axis[i.draggedAxis].track,g=null!==(r=null===(n=p.rect)||void 0===n?void 0:n[i.axis[i.draggedAxis].sizeAttr])&&void 0!==r?r:0,m=i.axis[i.draggedAxis].scrollbar,_=null!==(o=null===(s=i.contentWrapperEl)||void 0===s?void 0:s[i.axis[i.draggedAxis].scrollSizeAttr])&&void 0!==o?o:0,y=parseInt(null!==(c=null===(a=i.elStyles)||void 0===a?void 0:a[i.axis[i.draggedAxis].sizeAttr])&&void 0!==c?c:"0px",10);t.preventDefault(),t.stopPropagation();var v=("y"===i.draggedAxis?t.pageY:t.pageX)-(null!==(h=null===(l=p.rect)||void 0===l?void 0:l[i.axis[i.draggedAxis].offsetAttr])&&void 0!==h?h:0)-i.axis[i.draggedAxis].dragOffset,w=(v="x"===i.draggedAxis&&i.isRtl?(null!==(d=null===(u=p.rect)||void 0===u?void 0:u[i.axis[i.draggedAxis].sizeAttr])&&void 0!==d?d:0)-m.size-v:v)/(g-m.size)*(_-y);"x"===i.draggedAxis&&i.isRtl&&(w=(null===(f=e.getRtlHelpers())||void 0===f?void 0:f.isScrollingToNegative)?-w:w),i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr]=w}},this.onEndDrag=function(e){var t=mi(i.el),n=gi(i.el);e.preventDefault(),e.stopPropagation(),vi(i.el,i.classNames.dragging),t.removeEventListener("mousemove",i.drag,!0),t.removeEventListener("mouseup",i.onEndDrag,!0),i.removePreventClickId=n.setTimeout((function(){t.removeEventListener("click",i.preventClick,!0),t.removeEventListener("dblclick",i.preventClick,!0),i.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.options=ri(ri({},e.defaultOptions),n),this.classNames=ri(ri({},e.defaultOptions.classNames),n.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=ii(this._onMouseMove,64),this.onWindowResize=ni(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=ni(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=ni(this._onMouseEntered,this.stopScrollDelay),this.init()}return e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var n=t.firstElementChild,i=null==n?void 0:n.firstElementChild;if(!i)return null;document.body.appendChild(n),n.scrollLeft=0;var r=e.getOffset(n),s=e.getOffset(i);n.scrollLeft=-999;var o=e.getOffset(i);return document.body.removeChild(n),e.rtlHelpers={isScrollOriginAtZero:r.left!==s.left,isScrollingToNegative:s.left!==o.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:ai()}catch(e){return ai()}},e.getOffset=function(e){var t=e.getBoundingClientRect(),n=mi(e),i=gi(e);return{top:t.top+(i.pageYOffset||n.documentElement.scrollTop),left:t.left+(i.pageXOffset||n.documentElement.scrollLeft)}},e.prototype.init=function(){n(kn)&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var e,t;this.wrapperEl=this.el.querySelector(wi(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(wi(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(wi(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(wi(this.classNames.offset)),this.maskEl=this.el.querySelector(wi(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,wi(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(wi(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(wi(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(wi(this.classNames.track)).concat(wi(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(wi(this.classNames.track)).concat(wi(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(e=this.axis.x.track.el)||void 0===e?void 0:e.querySelector(wi(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(t=this.axis.y.track.el)||void 0===t?void 0:t.querySelector(wi(this.classNames.scrollbar)))||null,this.options.autoHide||(yi(this.axis.x.scrollbar.el,this.classNames.visible),yi(this.axis.y.scrollbar.el,this.classNames.visible))},e.prototype.initListeners=function(){var e,t=this,n=gi(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(e=this.contentWrapperEl)||void 0===e||e.addEventListener("scroll",this.onScroll),n.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var i=!1,r=n.ResizeObserver||ResizeObserver;this.resizeObserver=new r((function(){i&&n.requestAnimationFrame((function(){t.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),n.requestAnimationFrame((function(){i=!0}))}this.mutationObserver=new n.MutationObserver((function(){n.requestAnimationFrame((function(){t.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var e=gi(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.contentEl.offsetWidth,n=this.heightAutoObserverEl.offsetHeight<=1,i=this.heightAutoObserverEl.offsetWidth<=1||t>0,r=this.contentWrapperEl.offsetWidth,s=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=n?"auto":"100%",this.placeholderEl.style.width=i?"".concat(t||c,"px"):"auto",this.placeholderEl.style.height="".concat(a,"px");var l=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==t&&c>t,this.axis.y.isOverflowing=a>l,this.axis.x.isOverflowing="hidden"!==s&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,u=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>r-u,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>l-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},e.prototype.getScrollbarSize=function(e){var t,n;if(void 0===e&&(e="y"),!this.axis[e].isOverflowing||!this.contentEl)return 0;var i,r=this.contentEl[this.axis[e].scrollSizeAttr],s=null!==(n=null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])&&void 0!==n?n:0,o=s/r;return i=Math.max(~~(o*s),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(i=Math.min(i,this.options.scrollbarMaxSize)),i},e.prototype.positionScrollbar=function(t){var n,i,r;void 0===t&&(t="y");var s=this.axis[t].scrollbar;if(this.axis[t].isOverflowing&&this.contentWrapperEl&&s.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],a=(null===(n=this.axis[t].track.el)||void 0===n?void 0:n[this.axis[t].offsetSizeAttr])||0,c=parseInt(this.elStyles[this.axis[t].sizeAttr],10),l=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];l="x"===t&&this.isRtl&&(null===(i=e.getRtlHelpers())||void 0===i?void 0:i.isScrollOriginAtZero)?-l:l,"x"===t&&this.isRtl&&(l=(null===(r=e.getRtlHelpers())||void 0===r?void 0:r.isScrollingToNegative)?l:-l);var h=l/(o-c),u=~~((a-s.size)*h);u="x"===t&&this.isRtl?-u+(a-s.size):u,s.el.style.transform="x"===t?"translate3d(".concat(u,"px, 0, 0)"):"translate3d(0, ".concat(u,"px, 0)")}},e.prototype.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,n=this.axis[e].scrollbar.el;t&&n&&this.contentWrapperEl&&(this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(e))):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(e))),this.axis[e].isOverflowing?n.style.display="block":n.style.display="none")},e.prototype.showScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&!this.axis[e].scrollbar.isVisible&&(yi(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&this.axis[e].scrollbar.isVisible&&(vi(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(e){void 0===e&&(e="y");var t=this.axis[e];t.track.el&&t.scrollbar.el&&(t.track.rect=t.track.el.getBoundingClientRect(),t.scrollbar.rect=t.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(t.track.rect)?(this.showScrollbar(e),yi(t.track.el,this.classNames.hover),this.isWithinBounds(t.scrollbar.rect)?yi(t.scrollbar.el,this.classNames.hover):vi(t.scrollbar.el,this.classNames.hover)):(vi(t.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)))},e.prototype.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),vi(this.axis[e].track.el,this.classNames.hover),vi(this.axis[e].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)},e.prototype.onDragStart=function(e,t){var n;void 0===t&&(t="y");var i=mi(this.el),r=gi(this.el),s=this.axis[t].scrollbar,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-((null===(n=s.rect)||void 0===n?void 0:n[this.axis[t].offsetAttr])||0),this.draggedAxis=t,yi(this.el,this.classNames.dragging),i.addEventListener("mousemove",this.drag,!0),i.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(i.addEventListener("click",this.preventClick,!0),i.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(e,t){var n,i,r,s,o=this;void 0===t&&(t="y");var a=this.axis[t];if(this.options.clickOnTrack&&a.scrollbar.el&&this.contentWrapperEl){e.preventDefault();var c=gi(this.el);this.axis[t].scrollbar.rect=a.scrollbar.el.getBoundingClientRect();var l=null!==(i=null===(n=this.axis[t].scrollbar.rect)||void 0===n?void 0:n[this.axis[t].offsetAttr])&&void 0!==i?i:0,h=parseInt(null!==(s=null===(r=this.elStyles)||void 0===r?void 0:r[this.axis[t].sizeAttr])&&void 0!==s?s:"0px",10),u=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],d=("y"===t?this.mouseY-l:this.mouseX-l)<0?-1:1,f=-1===d?u-h:u+h,p=function(){o.contentWrapperEl&&(-1===d?u>f&&(u-=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=u,c.requestAnimationFrame(p)):u<f&&(u+=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=u,c.requestAnimationFrame(p)))};p()}},e.prototype.getContentElement=function(){return this.contentEl},e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var e=gi(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},e.prototype.unMount=function(){this.removeListeners()},e.prototype.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},e.prototype.findChild=function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return n.call(e,t)}))[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},e.getOptions=_i,e.helpers=pi,e}(),Ei=function(e,t){return(Ei=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var Ii=bi.helpers,Ci=Ii.getOptions,Ti=Ii.addClasses,Si=function(e){function t(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=e.apply(this,n)||this;return t.instances.set(n[0],r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Ei(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(e){"init"===e.getAttribute("data-simplebar")||t.instances.has(e)||new t(e,Ci(e.attributes))}))},t.removeObserver=function(){var e;null===(e=t.globalObserver)||void 0===e||e.disconnect()},t.prototype.initDOM=function(){var e,t,n,i=this;if(!Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(i.classNames.wrapper)})).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),Ti(this.wrapperEl,this.classNames.wrapper),Ti(this.contentWrapperEl,this.classNames.contentWrapper),Ti(this.offsetEl,this.classNames.offset),Ti(this.maskEl,this.classNames.mask),Ti(this.contentEl,this.classNames.contentEl),Ti(this.placeholderEl,this.classNames.placeholder),Ti(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),Ti(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("tabindex","0"),null===(t=this.contentWrapperEl)||void 0===t||t.setAttribute("role","region"),null===(n=this.contentWrapperEl)||void 0===n||n.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var r=document.createElement("div"),s=document.createElement("div");Ti(r,this.classNames.track),Ti(s,this.classNames.scrollbar),r.appendChild(s),this.axis.x.track.el=r.cloneNode(!0),Ti(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=r.cloneNode(!0),Ti(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}bi.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},t.prototype.unMount=function(){bi.prototype.unMount.call(this),t.instances.delete(this.el)},t.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(t.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},t.handleMutations=function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!t.instances.has(e)&&document.documentElement.contains(e)&&new t(e,Ci(e.attributes)):e.querySelectorAll("[data-simplebar]").forEach((function(e){"init"!==e.getAttribute("data-simplebar")&&!t.instances.has(e)&&document.documentElement.contains(e)&&new t(e,Ci(e.attributes))})))})),e.removedNodes.forEach((function(e){1===e.nodeType&&("init"===e.getAttribute("data-simplebar")?t.instances.has(e)&&!document.documentElement.contains(e)&&t.instances.get(e).unMount():Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'),(function(e){t.instances.has(e)&&!document.documentElement.contains(e)&&t.instances.get(e).unMount()})))}))}))},t.instances=new WeakMap,t}(bi);n(kn)&&Si.initHtmlApi();var ki=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,i){return e[0]===t&&(n=i,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];e.call(t,r[1],r[0])}},t}()}(),Ri="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Ai=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Oi="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Ai):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var Ni=["top","right","bottom","left","width","height","size","weight"],xi="undefined"!=typeof MutationObserver,Pi=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,r=0;function s(){n&&(n=!1,e()),i&&a()}function o(){Oi(s)}function a(){var e=Date.now();if(n){if(e-r<2)return;i=!0}else n=!0,i=!1,setTimeout(o,t);r=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){Ri&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),xi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){Ri&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;Ni.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Li=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},Di=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||Ai},Mi=Wi(0,0,0,0);function Fi(e){return parseFloat(e)||0}function Ui(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+Fi(e["border-"+n+"-width"])}),0)}function ji(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Mi;var i=Di(e).getComputedStyle(e),r=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],s=e["padding-"+r];t[r]=Fi(s)}return t}(i),s=r.left+r.right,o=r.top+r.bottom,a=Fi(i.width),c=Fi(i.height);if("border-box"===i.boxSizing&&(Math.round(a+s)!==t&&(a-=Ui(i,"left","right")+s),Math.round(c+o)!==n&&(c-=Ui(i,"top","bottom")+o)),!function(e){return e===Di(e).document.documentElement}(e)){var l=Math.round(a+s)-t,h=Math.round(c+o)-n;1!==Math.abs(l)&&(a-=l),1!==Math.abs(h)&&(c-=h)}return Wi(r.left,r.top,a,c)}var Bi="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof Di(e).SVGGraphicsElement}:function(e){return e instanceof Di(e).SVGElement&&"function"==typeof e.getBBox};function qi(e){return Ri?Bi(e)?function(e){var t=e.getBBox();return Wi(0,0,t.width,t.height)}(e):ji(e):Mi}function Wi(e,t,n,i){return{x:e,y:t,width:n,height:i}}var Hi=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Wi(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=qi(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),zi=function(e,t){var n,i,r,s,o,a,c,l=(i=(n=t).x,r=n.y,s=n.width,o=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),Li(c,{x:i,y:r,width:s,height:o,top:r,right:i+s,bottom:o+r,left:i}),c);Li(this,{target:e,contentRect:l})},$i=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new ki,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Di(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new Hi(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Di(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new zi(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Vi="undefined"!=typeof WeakMap?new WeakMap:new ki,Ki=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Pi.getInstance(),i=new $i(t,n,this);Vi.set(this,i)};["observe","unobserve","disconnect"].forEach((function(e){Ki.prototype[e]=function(){var t;return(t=Vi.get(this))[e].apply(t,arguments)}}));var Gi=void 0!==Ai.ResizeObserver?Ai.ResizeObserver:Ki;window.ResizeObserver=Gi;const Yi=new class{async fetchCategoriesList(){try{const e="https://books-backend.p.goit.global/books/category-list";return await Sn.get(e)}catch(e){console.log(e)}}constructor(){}},Xi=document.querySelector(".categories-list");!async function(){try{const e=await Yi.fetchCategoriesList();if(e<1)return void(Xi.innerHTML="Sorry we didn`t find anything");const t='<li class="categories-list-item" selected="true">All categories</li>'+e.data.map((e=>`\n        <li class="categories-list-item">${e.list_name}</li>\n        `)).join("");Xi.insertAdjacentHTML("beforeend",t),e.data}catch(e){return void(Xi.innerHTML=`${e}`)}}();Xi.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;return document.querySelectorAll('.categories-list-item[selected="true"]').forEach((e=>e.removeAttribute("selected"))),e.target.setAttribute("selected","true"),e.target.textContent}));var Ji;Ji=new URL(s("kyEFX").resolve("7KTfb"),import.meta.url).toString();var Qi;Qi=new URL(s("kyEFX").resolve("iDbTN"),import.meta.url).toString();var Zi;Zi=new URL(s("kyEFX").resolve("fkqC3"),import.meta.url).toString();var er;er=new URL(s("kyEFX").resolve("diPsZ"),import.meta.url).toString();var tr;tr=new URL(s("kyEFX").resolve("jnnX2"),import.meta.url).toString();var nr;nr=new URL(s("kyEFX").resolve("gv2iw"),import.meta.url).toString();var ir;ir=new URL(s("kyEFX").resolve("aCODG"),import.meta.url).toString();var rr;rr=new URL(s("kyEFX").resolve("iA2RO"),import.meta.url).toString();var sr;sr=new URL(s("kyEFX").resolve("jVZBP"),import.meta.url).toString();var or;or=new URL(s("kyEFX").resolve("iu5Ma"),import.meta.url).toString();var ar;ar=new URL(s("kyEFX").resolve("7Xr5y"),import.meta.url).toString();var cr;cr=new URL(s("kyEFX").resolve("65lDr"),import.meta.url).toString();var lr;lr=new URL(s("kyEFX").resolve("gBF71"),import.meta.url).toString();var hr;hr=new URL(s("kyEFX").resolve("7NE85"),import.meta.url).toString();var ur;ur=new URL(s("kyEFX").resolve("1zvB9"),import.meta.url).toString();var dr;dr=new URL(s("kyEFX").resolve("cuQZB"),import.meta.url).toString();var fr;fr=new URL(s("kyEFX").resolve("5AoxB"),import.meta.url).toString();var pr;pr=new URL(s("kyEFX").resolve("dyZM4"),import.meta.url).toString();var gr=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:`${n(Ji)} 1x, ${n(or)} 2x`},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:`${n(Qi)} 1x, ${n(cr)} 2x`},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:`${n(Zi)} 1x, ${n(ar)} 2x`},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:`${n(er)} 1x, ${n(lr)} 2x`},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:`${n(tr)} 1x, ${n(hr)} 2x`},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:`${n(nr)} 1x, ${n(ur)} 2x`},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:`${n(ir)} 1x, ${n(dr)} 2x`},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:`${n(rr)} 1x, ${n(fr)} 2x`},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:`${n(sr)} 1x, ${n(pr)} 2x`}];const mr=document.querySelector(".charity-list"),_r=document.querySelector(".charity-slider-btn");!function(e){const t=e.map((e=>`\n  <li class="charity-list-item">\n    <a href="${e.url}" target="_blank">\n      <img class="charity-fond-img" srcset="${e.img}" alt="${e.title}">\n    </a>\n  </li>\n  `)).join("");mr.insertAdjacentHTML("beforeend",t)}(gr);const yr=tns({nav:!1,container:".my-slider.charity-list",axis:"vertical",speed:400,controls:!1,nextButton:".charity-slider-btn",controlsContainer:!1,rewind:!0,mouseDrag:!0,responsive:{375:{items:4},768:{items:6}}});_r.onclick=function(){yr.goTo("next")},(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open"),e.openMenuBtn.classList.toggle("an-js-hidden"),e.closeMenuBtn.classList.toggle("an-js-hidden")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})();var vr,wr,br,Er=vr={};function Ir(){throw new Error("setTimeout has not been defined")}function Cr(){throw new Error("clearTimeout has not been defined")}function Tr(e){if(wr===setTimeout)return setTimeout(e,0);if((wr===Ir||!wr)&&setTimeout)return wr=setTimeout,setTimeout(e,0);try{return wr(e,0)}catch(t){try{return wr.call(null,e,0)}catch(t){return wr.call(this,e,0)}}}!function(){try{wr="function"==typeof setTimeout?setTimeout:Ir}catch(e){wr=Ir}try{br="function"==typeof clearTimeout?clearTimeout:Cr}catch(e){br=Cr}}();var Sr,kr=[],Rr=!1,Ar=-1;function Or(){Rr&&Sr&&(Rr=!1,Sr.length?kr=Sr.concat(kr):Ar=-1,kr.length&&Nr())}function Nr(){if(!Rr){var e=Tr(Or);Rr=!0;for(var t=kr.length;t;){for(Sr=kr,kr=[];++Ar<t;)Sr&&Sr[Ar].run();Ar=-1,t=kr.length}Sr=null,Rr=!1,function(e){if(br===clearTimeout)return clearTimeout(e);if((br===Cr||!br)&&clearTimeout)return br=clearTimeout,clearTimeout(e);try{br(e)}catch(t){try{return br.call(null,e)}catch(t){return br.call(this,e)}}}(e)}}function xr(e,t){this.fun=e,this.array=t}function Pr(){}Er.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];kr.push(new xr(e,t)),1!==kr.length||Rr||Tr(Nr)},xr.prototype.run=function(){this.fun.apply(null,this.array)},Er.title="browser",Er.browser=!0,Er.env={},Er.argv=[],Er.version="",Er.versions={},Er.on=Pr,Er.addListener=Pr,Er.once=Pr,Er.off=Pr,Er.removeListener=Pr,Er.removeAllListeners=Pr,Er.emit=Pr,Er.prependListener=Pr,Er.prependOnceListener=Pr,Er.listeners=function(e){return[]},Er.binding=function(e){throw new Error("process.binding is not supported")},Er.cwd=function(){return"/"},Er.chdir=function(e){throw new Error("process.chdir is not supported")},Er.umask=function(){return 0};
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
const Lr=!1,Dr=!1,Mr="${JSCORE_VERSION}",Fr=function(e,t){if(!e)throw Ur(t)},Ur=function(e){return new Error("Firebase Database ("+Mr+") INTERNAL ASSERT FAILED: "+e)},jr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new qr;const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class qr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wr=function(e){const t=jr(e);return Br.encodeByteArray(t,!0)},Hr=function(e){return Wr(e).replace(/\./g,"")},zr=function(e){try{return Br.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function $r(e){return Vr(void 0,e)}function Vr(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Vr(e[n],t[n]));return e}
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
const Kr=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Gr=()=>{try{return Kr()||(()=>{if(void 0===vr||void 0===vr.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&zr(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Yr=e=>{var t,n;return null===(n=null===(t=Gr())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Xr=e=>{const t=Yr(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Jr=()=>{var e;return null===(e=Gr())||void 0===e?void 0:e.config},Qr=e=>{var t;return null===(t=Gr())||void 0===t?void 0:t[`_${e}`]};
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
class Zr{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function es(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Hr(JSON.stringify({alg:"none",type:"JWT"})),Hr(JSON.stringify(s)),""].join(".")}
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
 */function ts(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ns(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ts())}function is(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function rs(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ss(){const e=ts();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function os(){return!0===Lr||!0===Dr}function as(){try{return"object"==typeof indexedDB}catch(e){return!1}}function cs(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function ls(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */class hs extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(ds,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new hs(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const ds=/\{\$([^}]+)}/g;
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
 */function fs(e){return JSON.parse(e)}function ps(e){return JSON.stringify(e)}
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
 */const gs=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=fs(zr(s[0])||""),n=fs(zr(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},ms=function(e){const t=gs(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},_s=function(e){const t=gs(e).claims;return"object"==typeof t&&!0===t.admin};
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
function ys(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vs(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ws(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function bs(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Es(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Is(n)&&Is(s)){if(!Es(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Is(e){return null!==e&&"object"==typeof e}
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
function Cs(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ts(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Ss(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class ks{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function Rs(e,t){const n=new As(e,t);return n.subscribe.bind(n)}class As{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Os),void 0===i.error&&(i.error=Os),void 0===i.complete&&(i.complete=Os);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Os(){}
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
 */function Ns(e,t){return`${e} failed: ${t} argument `}
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
const xs=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Fr(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Ps=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};function Ls(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
function Ds(e){return e&&e._delegate?e._delegate:e}class Ms{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Fs{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Zr;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Us{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fs(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const js=[];var Bs,qs;(qs=Bs||(Bs={}))[qs.DEBUG=0]="DEBUG",qs[qs.VERBOSE=1]="VERBOSE",qs[qs.INFO=2]="INFO",qs[qs.WARN=3]="WARN",qs[qs.ERROR=4]="ERROR",qs[qs.SILENT=5]="SILENT";const Ws={debug:Bs.DEBUG,verbose:Bs.VERBOSE,info:Bs.INFO,warn:Bs.WARN,error:Bs.ERROR,silent:Bs.SILENT},Hs=Bs.INFO,zs={[Bs.DEBUG]:"log",[Bs.VERBOSE]:"log",[Bs.INFO]:"info",[Bs.WARN]:"warn",[Bs.ERROR]:"error"},$s=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=zs[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Vs{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Bs))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ws[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Bs.DEBUG,...e),this._logHandler(this,Bs.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Bs.VERBOSE,...e),this._logHandler(this,Bs.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Bs.INFO,...e),this._logHandler(this,Bs.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Bs.WARN,...e),this._logHandler(this,Bs.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Bs.ERROR,...e),this._logHandler(this,Bs.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Hs,this._logHandler=$s,this._userLogHandler=null,js.push(this)}}let Ks,Gs;const Ys=new WeakMap,Xs=new WeakMap,Js=new WeakMap,Qs=new WeakMap,Zs=new WeakMap;let eo={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Xs.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Js.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return io(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function to(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Gs||(Gs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ro(this),t),io(Ys.get(this))}:function(...t){return io(e.apply(ro(this),t))}:function(t,...n){const i=e.call(ro(this),t,...n);return Js.set(i,t.sort?t.sort():[t]),io(i)}}function no(e){return"function"==typeof e?to(e):(e instanceof IDBTransaction&&function(e){if(Xs.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Xs.set(e,t)}(e),t=e,(Ks||(Ks=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,eo):e);var t}function io(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(io(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ys.set(t,e)})).catch((()=>{})),Zs.set(t,e),t}(e);if(Qs.has(e))return Qs.get(e);const t=no(e);return t!==e&&(Qs.set(e,t),Zs.set(t,e)),t}const ro=e=>Zs.get(e);function so(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=io(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(io(o.result),e.oldVersion,e.newVersion,io(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const oo=["get","getKey","getAll","getAllKeys","count"],ao=["put","add","delete","clear"],co=new Map;function lo(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(co.get(t))return co.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ao.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!oo.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return co.set(t,s),s}eo=(e=>({...e,get:(t,n,i)=>lo(t,n)||e.get(t,n,i),has:(t,n)=>!!lo(t,n)||e.has(t,n)}))(eo);
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
class ho{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const uo=new Vs("@firebase/app"),fo={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},po=new Map,go=new Map;function mo(e,t){try{e.container.addComponent(t)}catch(n){uo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _o(e){const t=e.name;if(go.has(t))return uo.debug(`There were multiple attempts to register component ${t}.`),!1;go.set(t,e);for(const t of po.values())mo(t,e);return!0}function yo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const vo=new us("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class wo{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vo.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ms("app",(()=>this),"PUBLIC"))}}
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
 */function bo(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw vo.create("bad-app-name",{appName:String(r)});if(n||(n=Jr()),!n)throw vo.create("no-options");const s=po.get(r);if(s){if(Es(n,s.options)&&Es(i,s.config))return s;throw vo.create("duplicate-app",{appName:r})}const o=new Us(r);for(const e of go.values())o.addComponent(e);const a=new wo(n,i,o);return po.set(r,a),a}function Eo(e="[DEFAULT]"){const t=po.get(e);if(!t&&"[DEFAULT]"===e&&Jr())return bo();if(!t)throw vo.create("no-app",{appName:e});return t}function Io(e,t,n){var i;let r=null!==(i=fo[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void uo.warn(e.join(" "))}_o(new Ms(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Co=null;function To(){return Co||(Co=so("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw vo.create("idb-open",{originalErrorMessage:e.message})}))),Co}async function So(e,t){try{const n=(await To()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,ko(e)),await n.done}catch(e){if(e instanceof hs)uo.warn(e.message);else{const t=vo.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});uo.warn(t.message)}}}function ko(e){return`${e.name}!${e.options.appId}`}
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
 */class Ro{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ao();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ao(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),No(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),No(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Hr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oo(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Ao(){return(new Date).toISOString().substring(0,10)}class Oo{async runIndexedDBEnvironmentCheck(){return!!as()&&cs().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await To();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ko(e))}catch(e){if(e instanceof hs)uo.warn(e.message);else{const t=vo.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});uo.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return So(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return So(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function No(e){return Hr(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var xo;xo="",_o(new Ms("platform-logger",(e=>new ho(e)),"PRIVATE")),_o(new Ms("heartbeat",(e=>new Ro(e)),"PRIVATE")),Io("@firebase/app","0.9.12",xo),Io("@firebase/app","0.9.12","esm2017"),Io("fire-js","");function Po(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Lo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Do=Lo,Mo=new us("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Fo=new Vs("@firebase/auth");function Uo(e,...t){Fo.logLevel<=Bs.ERROR&&Fo.error(`Auth (9.22.2): ${e}`,...t)}
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
 */function jo(e,...t){throw Wo(e,...t)}function Bo(e,...t){return Wo(e,...t)}function qo(e,t,n){const i=Object.assign(Object.assign({},Do()),{[t]:n});return new us("auth","Firebase",i).create(t,{appName:e.name})}function Wo(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Mo.create(e,...t)}function Ho(e,t,...n){if(!e)throw Wo(t,...n)}function zo(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Uo(t),new Error(t)}function $o(e,t){e||zo(t)}
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
 */function Vo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ko(){return"http:"===Go()||"https:"===Go()}function Go(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class Yo{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ko()||is()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,$o(t>e,"Short delay should be less than long delay!"),this.isMobile=ns()||rs()}}
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
 */function Xo(e,t){$o(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Jo{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void zo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void zo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void zo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Qo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Zo=new Yo(3e4,6e4);
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
 */function ea(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ta(e,t,n,i,r={}){return na(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=Cs(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Jo.fetch()(ra(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function na(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Qo),t);try{const t=new sa(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw oa(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw oa(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw oa(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw oa(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw qo(e,a,o);jo(e,a)}}catch(t){if(t instanceof hs)throw t;jo(e,"network-request-failed",{message:String(t)})}}async function ia(e,t,n,i,r={}){const s=await ta(e,t,n,i,r);return"mfaPendingCredential"in s&&jo(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ra(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Xo(e.config,r):`${e.config.apiScheme}://${r}`}class sa{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Bo(this.auth,"network-request-failed"))),Zo.get())}))}}function oa(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Bo(e,t,i);return r.customData._tokenResponse=n,r}
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
function aa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ca(e){return 1e3*Number(e)}function la(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const e=zr(n);return e?JSON.parse(e):(Uo("Failed to decode base64 JWT payload"),null)}catch(e){return Uo("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function ha(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof hs&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ua{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class da{_initializeTime(){this.lastSignInTime=aa(this.lastLoginAt),this.creationTime=aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function fa(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ha(e,async function(e,t){return ta(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Ho(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Po(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new da(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class pa{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ho(e.idToken,"internal-error"),Ho(void 0!==e.idToken,"internal-error"),Ho(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=la(e);return Ho(t,"internal-error"),Ho(void 0!==t.exp,"internal-error"),Ho(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ho(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await na(e,{},(async()=>{const n=Cs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=ra(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Jo.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new pa;return n&&(Ho("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Ho("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Ho("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pa,this.toJSON())}_performRefresh(){return zo("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function ga(e,t){Ho("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ma{async getIdToken(e){const t=await ha(this,this.stsTokenManager.getToken(this.auth,e));return Ho(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ds(e),i=await n.getIdToken(t),r=la(i);Ho(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:aa(ca(r.auth_time)),issuedAtTime:aa(ca(r.iat)),expirationTime:aa(ca(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ds(e);await fa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ho(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ma(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ho(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await fa(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ha(this,async function(e,t){return ta(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:E}=t;Ho(y&&E,e,"internal-error");const I=pa.fromJSON(this.name,E);Ho("string"==typeof y,e,"internal-error"),ga(h,e.name),ga(u,e.name),Ho("boolean"==typeof v,e,"internal-error"),Ho("boolean"==typeof w,e,"internal-error"),ga(d,e.name),ga(f,e.name),ga(p,e.name),ga(g,e.name),ga(m,e.name),ga(_,e.name);const C=new ma({uid:y,auth:e,email:u,emailVerified:v,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:_});return b&&Array.isArray(b)&&(C.providerData=b.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new pa;i.updateFromServerResponse(t);const r=new ma({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await fa(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Po(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ua(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new da(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */const _a=new Map;function ya(e){$o(e instanceof Function,"Expected a class definition");let t=_a.get(e);return t?($o(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_a.set(e,t),t)}
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
 */class va{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}va.type="NONE";const wa=va;
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
 */function ba(e,t,n){return`firebase:${e}:${t}:${n}`}class Ea{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ma._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ea(ya(wa),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||ya(wa);const s=ba(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=ma._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Ea(r,e,n)):new Ea(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ba(this.userKey,i.apiKey,r),this.fullPersistenceKey=ba("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Ia(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ka(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ca(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Aa(t))return"Blackberry";if(Oa(t))return"Webos";if(Ta(t))return"Safari";if((t.includes("chrome/")||Sa(t))&&!t.includes("edge/"))return"Chrome";if(Ra(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ca(e=ts()){return/firefox\//i.test(e)}function Ta(e=ts()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Sa(e=ts()){return/crios\//i.test(e)}function ka(e=ts()){return/iemobile/i.test(e)}function Ra(e=ts()){return/android/i.test(e)}function Aa(e=ts()){return/blackberry/i.test(e)}function Oa(e=ts()){return/webos/i.test(e)}function Na(e=ts()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xa(){return ss()&&10===document.documentMode}function Pa(e=ts()){return Na(e)||Ra(e)||Oa(e)||Aa(e)||/windows phone/i.test(e)||ka(e)}
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
function La(e,t=[]){let n;switch(e){case"Browser":n=Ia(ts());break;case"Worker":n=`${Ia(ts())}-${e}`;break;default:n=e}return`${n}/JsCore/9.22.2/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */async function Da(e,t){return ta(e,"GET","/v2/recaptchaConfig",ea(e,t))}
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
 */function Ma(e){return void 0!==e&&void 0!==e.enterprise}class Fa{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Ua(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Bo("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ja(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Ba{async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;Ma(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Da(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Fa(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Ma(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ua("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=za(e)}}async function qa(e,t,n,i=!1){const r=new Ba(e);let s;try{s=await r.verify(n)}catch(e){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Wa{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Ha{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ya(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ea.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ho(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ds(e):null;return t&&Ho(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ho(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ya(e))}))}async initializeRecaptchaConfig(){const e=await Da(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Fa(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Ba(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ya(e)||this._popupRedirectResolver;Ho(t,this,"argument-error"),this.redirectPersistenceManager=await Ea.create(this,[ya(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ho(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ho(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=La(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Fo.logLevel<=Bs.WARN&&Fo.warn(`Auth (9.22.2): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $a(this),this.idTokenSubscription=new $a(this),this.beforeStateQueue=new Wa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function za(e){return Ds(e)}class $a{get next(){return Ho(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Rs((e=>this.observer=e))}}
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
 */function Va(e,t,n){const i=za(e);Ho(i._canInitEmulator,i,"emulator-config-failed"),Ho(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Ka(t),{host:o,port:a}=function(e){const t=Ka(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ga(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ga(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ka(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ga(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ya{toJSON(){return zo("not implemented")}_getIdTokenResponse(e){return zo("not implemented")}_linkToIdToken(e,t){return zo("not implemented")}_getReauthenticationResolver(e){return zo("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Xa(e,t){return ta(e,"POST","/v1/accounts:update",t)}
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
async function Ja(e,t){return ia(e,"POST","/v1/accounts:signInWithPassword",ea(e,t))}
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
class Qa extends Ya{static _fromEmailAndPassword(e,t){return new Qa(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qa(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await qa(e,n,"signInWithPassword");return Ja(e,t)}return Ja(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await qa(e,n,"signInWithPassword");return Ja(e,t)}return Promise.reject(t)}));case"emailLink":
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
return async function(e,t){return ia(e,"POST","/v1/accounts:signInWithEmailLink",ea(e,t))}(e,{email:this._email,oobCode:this._password});default:jo(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Xa(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ia(e,"POST","/v1/accounts:signInWithEmailLink",ea(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:jo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function Za(e,t){return ia(e,"POST","/v1/accounts:signInWithIdp",ea(e,t))}
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
 */class ec extends Ya{static _fromParams(e){const t=new ec(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jo("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Po(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new ec(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Za(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Za(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Za(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cs(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const tc={USER_NOT_FOUND:"user-not-found"};
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
class nc extends Ya{static _fromVerification(e,t){return new nc({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new nc({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ia(e,"POST","/v1/accounts:signInWithPhoneNumber",ea(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ia(e,"POST","/v1/accounts:signInWithPhoneNumber",ea(e,t));if(n.temporaryProof)throw oa(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ia(e,"POST","/v1/accounts:signInWithPhoneNumber",ea(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),tc)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new nc({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class ic{static parseLink(e){const t=function(e){const t=Ts(Ss(e)).link,n=t?Ts(Ss(t)).deep_link_id:null,i=Ts(Ss(e)).deep_link_id;return(i?Ts(Ss(i)).link:null)||i||n||t||e}(e);try{return new ic(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=Ts(Ss(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Ho(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class rc{static credential(e,t){return Qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ic.parseLink(t);return Ho(n,"argument-error"),Qa._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=rc.PROVIDER_ID}}rc.PROVIDER_ID="password",rc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",rc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class sc{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class oc extends sc{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class ac extends oc{static credential(e){return ec._fromParams({providerId:ac.PROVIDER_ID,signInMethod:ac.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ac.credentialFromTaggedObject(e)}static credentialFromError(e){return ac.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ac.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}ac.FACEBOOK_SIGN_IN_METHOD="facebook.com",ac.PROVIDER_ID="facebook.com";
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
class cc extends oc{static credential(e,t){return ec._fromParams({providerId:cc.PROVIDER_ID,signInMethod:cc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return cc.credentialFromTaggedObject(e)}static credentialFromError(e){return cc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return cc.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}cc.GOOGLE_SIGN_IN_METHOD="google.com",cc.PROVIDER_ID="google.com";
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
class lc extends oc{static credential(e){return ec._fromParams({providerId:lc.PROVIDER_ID,signInMethod:lc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lc.credentialFromTaggedObject(e)}static credentialFromError(e){return lc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lc.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}lc.GITHUB_SIGN_IN_METHOD="github.com",lc.PROVIDER_ID="github.com";
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
class hc extends oc{static credential(e,t){return ec._fromParams({providerId:hc.PROVIDER_ID,signInMethod:hc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hc.credentialFromTaggedObject(e)}static credentialFromError(e){return hc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return hc.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function uc(e,t){return ia(e,"POST","/v1/accounts:signUp",ea(e,t))}
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
 */hc.TWITTER_SIGN_IN_METHOD="twitter.com",hc.PROVIDER_ID="twitter.com";class dc{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ma._fromIdTokenResponse(e,n,i),s=fc(n);return new dc({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=fc(n);return new dc({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function fc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class pc extends hs{static _fromErrorAndOperation(e,t,n,i){return new pc(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function gc(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw pc._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function mc(e,t,n=!1){const i=await ha(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dc._forOperation(e,"link",i)}
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
async function _c(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await ha(e,gc(i,r,t,e),n);Ho(s.idToken,i,"internal-error");const o=la(s.idToken);Ho(o,i,"internal-error");const{sub:a}=o;return Ho(e.uid===a,i,"user-mismatch"),dc._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&jo(i,"user-mismatch"),e}}
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
 */async function yc(e,t,n=!1){const i="signIn",r=await gc(e,i,t),s=await dc._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function vc(e,t){return yc(za(e),t)}async function wc(e,t,n){var i;const r=za(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await qa(r,s,"signUpPassword");o=uc(r,e)}else o=uc(r,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await qa(r,s,"signUpPassword");return uc(r,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await dc._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function bc(e,t,n){return vc(Ds(e),rc.credential(t,n))}
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
 */new WeakMap;
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
class Ec{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Ic extends Ec{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);xa()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ts();return Ta(e)||Na(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Pa(),this._shouldAllowMigration=!0}}Ic.type="LOCAL";const Cc=Ic;
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
 */class Tc extends Ec{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Tc.type="SESSION";const Sc=Tc;
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
class kc{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new kc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Rc(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */kc.receivers=[];class Ac{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Rc("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Oc(){return window}
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
 */
function Nc(){return void 0!==Oc().WorkerGlobalScope&&"function"==typeof Oc().importScripts}class xc{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Pc(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Lc(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new xc(e).toPromise()}(),t(await Lc()))}))}))}async function Dc(e,t,n){const i=Pc(e,!0).put({fbase_key:t,value:n});return new xc(i).toPromise()}function Mc(e,t){const n=Pc(e,!0).delete(t);return new xc(n).toPromise()}class Fc{async _openDb(){return this.db||(this.db=await Lc()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(Nc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ac(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await Dc(e,"__sak","1"),await Mc(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Dc(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Pc(e,!1).get(t),i=await new xc(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Mc(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Pc(e,!1).getAll();return new xc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Fc.type="LOCAL";const Uc=Fc;
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
ja("rcb"),new Yo(3e4,6e4);async function jc(e,t,n){var i;const r=await n.verify();try{let s;if(Ho("string"==typeof r,e,"argument-error"),Ho("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ho("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return ta(e,"POST","/v2/accounts/mfaEnrollment:start",ea(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Ho("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Ho(n,e,"missing-multi-factor-info");const o=await function(e,t){return ta(e,"POST","/v2/accounts/mfaSignIn:start",ea(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ta(e,"POST","/v1/accounts:sendVerificationCode",ea(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class Bc{verifyPhoneNumber(e,t){return jc(this.auth,e,Ds(t))}static credential(e,t){return nc._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Bc.credentialFromTaggedObject(t)}static credentialFromError(e){return Bc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?nc._fromTokenResponse(t,n):null}constructor(e){this.providerId=Bc.PROVIDER_ID,this.auth=za(e)}}
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
function qc(e,t){return t?ya(t):(Ho(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Bc.PROVIDER_ID="phone",Bc.PHONE_SIGN_IN_METHOD="phone";class Wc extends Ya{_getIdTokenResponse(e){return Za(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Za(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Za(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Hc(e){return yc(e.auth,new Wc(e),e.bypassAuthState)}function zc(e){const{auth:t,user:n}=e;return Ho(n,t,"internal-error"),_c(n,new Wc(e),e.bypassAuthState)}async function $c(e){const{auth:t,user:n}=e;return Ho(n,t,"internal-error"),mc(n,new Wc(e),e.bypassAuthState)}
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
 */class Vc{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hc;case"linkViaPopup":case"linkViaRedirect":return $c;case"reauthViaPopup":case"reauthViaRedirect":return zc;default:jo(this.auth,"internal-error")}}resolve(e){$o(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$o(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Kc=new Yo(2e3,1e4);class Gc extends Vc{async executeNotNull(){const e=await this.execute();return Ho(e,this.auth,"internal-error"),e}async onExecution(){$o(1===this.filter.length,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Bo(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Bo(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Bo(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Kc.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Gc.currentPopupAction&&Gc.currentPopupAction.cancel(),Gc.currentPopupAction=this}}Gc.currentPopupAction=null;
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
const Yc=new Map;class Xc extends Vc{async execute(){let e=Yc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Zc(t),i=Qc(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Jc(e,t){Yc.set(e._key(),t)}function Qc(e){return ya(e._redirectPersistence)}function Zc(e){return ba("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function el(e,t,n=!1){const i=za(e),r=qc(i,t),s=new Xc(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class tl{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return il(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!il(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Bo(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nl(e))}saveEventToCache(e){this.cachedEventUids.add(nl(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function nl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function il({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const rl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sl=/^https?/;async function ol(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ta(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(al(e))return}catch(e){}jo(e,"unauthorized-domain")}function al(e){const t=Vo(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!sl.test(n))return!1;if(rl.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const cl=new Yo(3e4,6e4);function ll(){const e=Oc().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let hl=null;function ul(e){return hl=hl||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){ll(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ll(),n(Bo(e,"network-request-failed"))},timeout:cl.get()})}if(null===(r=null===(i=Oc().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Oc().gapi)||void 0===s?void 0:s.load)){const t=ja("iframefcb");return Oc()[t]=()=>{gapi.load?o():n(Bo(e,"network-request-failed"))},Ua(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw hl=null,e}))}(e),hl}
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
 */const dl=new Yo(5e3,15e3),fl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gl(e){const t=e.config;Ho(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xo(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.22.2"},r=pl.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Cs(i).slice(1)}`}
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
 */
const ml={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class _l{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function yl(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ml),{width:i.toString(),height:r.toString(),top:s,left:o}),l=ts().toLowerCase();n&&(a=Sa(l)?"_blank":n),Ca(l)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ts()){var t;return Na(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new _l(null);const u=window.open(t||"",a,h);Ho(u,e,"popup-blocked");try{u.focus()}catch(e){}return new _l(u)}const vl=encodeURIComponent("fac");async function wl(e,t,n,i,r,s){Ho(e.config.authDomain,e,"auth-domain-config-required"),Ho(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.22.2",eventId:r};if(t instanceof sc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ws(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof oc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${vl}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?Xo(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${Cs(a).slice(1)}${l}`}const bl=class{async _openPopup(e,t,n,i){var r;$o(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return yl(e,await wl(e,t,n,Vo(),i),Rc())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){Oc().location.href=e}(await wl(e,t,n,Vo(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):($o(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ul(e),n=Oc().gapi;return Ho(n,e,"internal-error"),t.open({where:document.body,url:gl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fl,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Bo(e,"network-request-failed"),s=Oc().setTimeout((()=>{i(r)}),dl.get());function o(){Oc().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new tl(e);return t.register("authEvent",(t=>{Ho(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),jo(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ol(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pa()||Ta()||Na()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sc,this._completeRedirectFn=el,this._overrideRedirectResult=Jc}};
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
class El{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ho(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const Il=Qr("authIdTokenMaxAge")||300;let Cl=null;var Tl;Tl="Browser",_o(new Ms("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Ho(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Tl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:La(Tl)},c=new Ha(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ya);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),_o(new Ms("auth-internal",(e=>{const t=za(e.getProvider("auth").getImmediate());return new El(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Io("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Tl)),Io("@firebase/auth","0.23.2","esm2017");
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
Io("firebase","9.22.2","app");let Sl,kl;const Rl=new WeakMap,Al=new WeakMap,Ol=new WeakMap,Nl=new WeakMap,xl=new WeakMap;let Pl={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Al.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ol.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ml(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ll(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Fl(this),t),Ml(Rl.get(this))}:function(...t){return Ml(e.apply(Fl(this),t))}:function(t,...n){const i=e.call(Fl(this),t,...n);return Ol.set(i,t.sort?t.sort():[t]),Ml(i)}}function Dl(e){return"function"==typeof e?Ll(e):(e instanceof IDBTransaction&&function(e){if(Al.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Al.set(e,t)}(e),t=e,(Sl||(Sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Pl):e);var t}function Ml(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Ml(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Rl.set(t,e)})).catch((()=>{})),xl.set(t,e),t}(e);if(Nl.has(e))return Nl.get(e);const t=Dl(e);return t!==e&&(Nl.set(e,t),xl.set(t,e)),t}const Fl=e=>xl.get(e);function Ul(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Ml(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Ml(o.result),e.oldVersion,e.newVersion,Ml(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const jl=["get","getKey","getAll","getAllKeys","count"],Bl=["put","add","delete","clear"],ql=new Map;function Wl(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ql.get(t))return ql.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Bl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!jl.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return ql.set(t,s),s}!function(e){Pl=e(Pl)}((e=>({...e,get:(t,n,i)=>Wl(t,n)||e.get(t,n,i),has:(t,n)=>!!Wl(t,n)||e.has(t,n)})));const Hl=new us("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function zl(e){return e instanceof hs&&e.code.includes("request-failed")}
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
 */function $l({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Vl(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Kl(e,t){const n=(await t.json()).error;return Hl.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Gl({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Yl(e,{refreshToken:t}){const n=Gl(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
 */(t)),n}async function Xl(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function Jl(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const Ql=/^[cdef][\w-]{21}$/;function Zl(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
 */(e);return Ql.test(t)?t:""}catch(e){return""}}function eh(e){return`${e.appName}!${e.appId}`}
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
 */const th=new Map;function nh(e,t){const n=eh(e);ih(n,t),function(e,t){const n=sh();n&&n.postMessage({key:e,fid:t});oh()}(n,t)}function ih(e,t){const n=th.get(e);if(n)for(const e of n)e(t)}let rh=null;function sh(){return!rh&&"BroadcastChannel"in self&&(rh=new BroadcastChannel("[Firebase] FID Change"),rh.onmessage=e=>{ih(e.data.key,e.data.fid)}),rh}function oh(){0===th.size&&rh&&(rh.close(),rh=null)}
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
 */let ah=null;function ch(){return ah||(ah=Ul("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-installations-store")}})),ah}async function lh(e,t){const n=eh(e),i=(await ch()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n);return await r.put(t,n),await i.done,s&&s.fid===t.fid||nh(e,t.fid),t}async function hh(e){const t=eh(e),n=(await ch()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(t),await n.done}async function uh(e,t){const n=eh(e),i=(await ch()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.done,!o||s&&s.fid===o.fid||nh(e,o.fid),o}
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
 */async function dh(e){let t;const n=await uh(e.appConfig,(n=>{const i=function(e){return gh(e||{fid:Zl(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Hl.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=$l(e),r=Gl(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.6.4"},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Xl((()=>fetch(i,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Vl(e.authToken)}}throw await Kl("Create Installation",c)}(e,t);return lh(e.appConfig,n)}catch(n){throw zl(n)&&409===n.customData.serverCode?await hh(e.appConfig):await lh(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:fh(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function fh(e){let t=await ph(e.appConfig);for(;1===t.registrationStatus;)await Jl(100),t=await ph(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await dh(e);return n||t}return t}function ph(e){return uh(e,(e=>{if(!e)throw Hl.create("installation-not-found");return gh(e)}))}function gh(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function mh({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${$l(e)}/${t}/authTokens:generate`}
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
 */(e,n),r=Yl(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:"w:0.6.4",appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Xl((()=>fetch(i,a)));if(c.ok){return Vl(await c.json())}throw await Kl("Generate Auth Token",c)}async function _h(e,t=!1){let n;const i=await uh(e.appConfig,(i=>{if(!vh(i))throw Hl.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await yh(e.appConfig);for(;1===n.authToken.requestStatus;)await Jl(100),n=await yh(e.appConfig);const i=n.authToken;return 0===i.requestStatus?_h(e,t):i}(e,t),i;{if(!navigator.onLine)throw Hl.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await mh(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await lh(e.appConfig,i),n}catch(n){if(!zl(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await lh(e.appConfig,n)}else await hh(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function yh(e){return uh(e,(e=>{if(!vh(e))throw Hl.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function vh(e){return void 0!==e&&2===e.registrationStatus}
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
async function wh(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await dh(e);t&&await t}
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
 */(n);return(await _h(n,t)).token}function bh(e){return Hl.create("missing-app-config-values",{valueName:e})}
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
 */const Eh=e=>{const t=yo(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await dh(t);return i?i.catch(console.error):_h(t).catch(console.error),n.fid}(t),getToken:e=>wh(t,e)}};_o(new Ms("installations",(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw bh("App Configuration");if(!e.name)throw bh("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw bh(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:yo(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),_o(new Ms("installations-internal",Eh,"PRIVATE")),Io("@firebase/installations","0.6.4"),Io("@firebase/installations","0.6.4","esm2017");
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
const Ih=new Vs("@firebase/analytics"),Ch=new us("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function Th(e){if(!e.startsWith("https://www.googletagmanager.com/gtag/js")){const t=Ch.create("invalid-gtag-resource",{gtagURL:e});return Ih.warn(t.message),""}return e}function Sh(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function kh(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Th}),i=document.createElement("script"),r=`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`;i.src=n?null==n?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function Rh(e,t,n,i){return async function(r,...s){try{if("event"===r){const[i,r]=s;await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await Sh(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){Ih.error(e)}}(e,t,n,i,r)}else if("config"===r){const[r,o]=s;await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await Sh(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){Ih.error(e)}e("config",r,s)}(e,t,n,i,r,o)}else if("consent"===r){const[t]=s;e("consent","update",t)}else if("get"===r){const[t,n,i]=s;e("get",t,n,i)}else if("set"===r){const[t]=s;e("set",t)}else e(r,...s)}catch(e){Ih.error(e)}}}const Ah=new class{getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}};function Oh(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Nh(e,t=Ah,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Ch.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Ch.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ph;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),xh({appId:i,apiKey:r,measurementId:s},o,a,t)}async function xh(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=Ah){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(Ch.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(a)return Ih.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Oh(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Ch.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(o),t}catch(t){const c=t;if(!function(e){if(!(e instanceof hs&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(r.deleteThrottleMetadata(o),a)return Ih.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw t}const l=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?Ls(n,r.intervalMillis,30):Ls(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),Ih.debug(`Calling attemptFetch again in ${l} millis`),xh(e,h,i,r)}}class Ph{addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}constructor(){this.listeners=[]}}
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
 */let Lh,Dh;function Mh(e){Dh=e}function Fh(e){Lh=e}
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
 */async function Uh(e,t,n,i,r,s,o){var a;const c=Nh(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ih.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ih.error(e))),t.push(c);const l=async function(){if(!as())return Ih.warn(Ch.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await cs()}catch(e){return Ih.warn(Ch.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[h,u]=await Promise.all([c,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(e))return n;return null}
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
 */)(s)||kh(s,h.measurementId),Dh&&(r("consent","default",Dh),Mh(void 0)),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=u&&(d.firebase_id=u),r("config",h.measurementId,d),Lh&&(r("set",Lh),Fh(void 0)),h.measurementId}
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
 */class jh{_delete(){return delete Bh[this.app.options.appId],Promise.resolve()}constructor(e){this.app=e}}let Bh={},qh=[];const Wh={};let Hh,zh,$h="dataLayer",Vh="gtag",Kh=!1;function Gh(e,t,n){!function(){const e=[];if(is()&&e.push("This is a browser extension environment."),ls()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Ch.create("invalid-analytics-context",{errorInfo:t});Ih.warn(n.message)}}();const i=e.options.appId;if(!i)throw Ch.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Ch.create("no-api-key");Ih.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Bh[i])throw Ch.create("already-exists",{id:i});if(!Kh){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}($h);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Rh(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(Bh,qh,Wh,$h,Vh);zh=e,Hh=t,Kh=!0}Bh[i]=Uh(e,qh,Wh,t,Hh,$h,n);return new jh(e)}function Yh(e,t,n,i){e=Ds(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(zh,Bh[e.app.options.appId],t,n,i).catch((e=>Ih.error(e)))}_o(new Ms("analytics",((e,{options:t})=>Gh(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),_o(new Ms("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,i)=>Yh(t,e,n,i)}}catch(e){throw Ch.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Io("@firebase/analytics","0.10.0"),Io("@firebase/analytics","0.10.0","esm2017");
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
 */let Xh="";
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
class Jh{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ps(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:fs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class Qh{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ys(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const Zh=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Jh(t)}}catch(e){}return new Qh},eu=Zh("localStorage"),tu=Zh("sessionStorage"),nu=new Vs("@firebase/database"),iu=function(){let e=1;return function(){return e++}}(),ru=function(e){const t=xs(e),n=new ks;n.update(t);const i=n.digest();return Br.encodeByteArray(i)},su=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=su.apply(null,i):t+="object"==typeof i?ps(i):i,t+=" "}return t};let ou=null,au=!0;const cu=function(e,t){Fr(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(nu.logLevel=Bs.VERBOSE,ou=nu.log.bind(nu),t&&tu.set("logging_enabled",!0)):"function"==typeof e?ou=e:(ou=null,tu.remove("logging_enabled"))},lu=function(...e){if(!0===au&&(au=!1,null===ou&&!0===tu.get("logging_enabled")&&cu(!0)),ou){const t=su.apply(null,e);ou(t)}},hu=function(e){return function(...t){lu(e,...t)}},uu=function(...e){const t="FIREBASE INTERNAL ERROR: "+su(...e);nu.error(t)},du=function(...e){const t=`FIREBASE FATAL ERROR: ${su(...e)}`;throw nu.error(t),new Error(t)},fu=function(...e){const t="FIREBASE WARNING: "+su(...e);nu.warn(t)},pu=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},gu=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Iu(e),i=Iu(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},mu=function(e,t){return e===t?0:e<t?-1:1},_u=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ps(t))},yu=function(e){if("object"!=typeof e||null===e)return ps(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=ps(t[i]),n+=":",n+=yu(e[t[i]]);return n+="}",n},vu=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function wu(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const bu=function(e){Fr(!pu(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Eu=new RegExp("^-?(0*)\\d{1,10}$"),Iu=function(e){if(Eu.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Cu=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw fu("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Tu=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Su{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){fu(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class ku{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(lu("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fu(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Ru{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Ru.OWNER="owner";
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
const Au=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Ou{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&eu.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=eu.get("host:"+e)||this._host}}function Nu(e,t,n){let i;if(Fr("string"==typeof t,"typeof type must == string"),Fr("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return wu(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class xu{incrementCounter(e,t=1){ys(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return $r(this.counters_)}constructor(){this.counters_={}}}
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
 */const Pu={},Lu={};function Du(e){const t=e.toString();return Pu[t]||(Pu[t]=new xu),Pu[t]}
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
class Mu{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Cu((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class Fu{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Mu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(os()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uu(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Au.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fu.forceAllow_=!0}static forceDisallow(){Fu.forceDisallow_=!0}static isAvailable(){return!os()&&(!!Fu.forceAllow_||!(Fu.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ps(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Wr(t),i=vu(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(os())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ps(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hu(e),this.stats_=Du(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Nu(t,"long_polling",e))}}class Uu{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||lu("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){os()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{lu("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,os())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=iu(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Uu.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){lu("frame writing exception"),e.stack&&lu(e.stack),lu(e)}}}}
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
 */let ju=null;"undefined"!=typeof MozWebSocket?ju=MozWebSocket:"undefined"!=typeof WebSocket&&(ju=WebSocket);class Bu{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!os()&&"undefined"!=typeof location&&location.hostname&&Au.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),Nu(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,eu.set("previous_websocket_failure",!0);try{let e;if(os()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Xh}/${vr.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ju(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Bu.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ju&&!Bu.forceDisallow_}static previouslyFailed(){return eu.isInMemoryStorage||!0===eu.get("previous_websocket_failure")}markConnectionHealthy(){eu.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=fs(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Fr(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ps(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=vu(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hu(this.connId),this.stats_=Du(t),this.connURL=Bu.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}Bu.responsesRequiredToBeHealthy=2,Bu.healthyTimeout=3e4;
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
class qu{static get ALL_TRANSPORTS(){return[Fu,Bu]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Bu&&Bu.isAvailable();let n=t&&!Bu.previouslyFailed();if(e.webSocketOnly&&(t||fu("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Bu];else{const e=this.transports_=[];for(const t of qu.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);qu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}qu.globalTransportInitialized_=!1;class Wu{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tu((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_u("t",e),n=_u("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_u("t",e),n=_u("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_u("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?uu("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&fu("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Tu((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tu((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(eu.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hu("c:"+this.id+":"),this.transportManager_=new qu(t),this.log_("Connection created"),this.start_()}}
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
 */class Hu{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class zu{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Fr(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Fr(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class $u extends zu{static getInstance(){return new $u}getInitialEvent(e){return Fr("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ns()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class Vu{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Ku(){return new Vu("")}function Gu(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Yu(e){return e.pieces_.length-e.pieceNum_}function Xu(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Vu(e.pieces_,t)}function Ju(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Qu(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Zu(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Vu(t,0)}function ed(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Vu)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Vu(n,0)}function td(e){return e.pieceNum_>=e.pieces_.length}function nd(e,t){const n=Gu(e),i=Gu(t);if(null===n)return t;if(n===i)return nd(Xu(e),Xu(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function id(e,t){if(Yu(e)!==Yu(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function rd(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Yu(e)>Yu(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class sd{constructor(e,t){this.errorPrefix_=t,this.parts_=Qu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ps(this.parts_[e]);od(this)}}function od(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ad(e))}function ad(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class cd extends zu{static getInstance(){return new cd}getInitialEvent(e){return Fr("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */class ld extends Hu{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ps(r)),Fr(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Zr,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Fr(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Fr(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;ld.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ys(e,"w")){const n=vs(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();fu(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||_s(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ms(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Fr(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ps(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):uu("Unrecognized action received from server: "+ps(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Fr(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ld.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){Fr(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?lu("getToken() completed but was canceled"):(lu("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new Wu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{fu(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&fu(e),a())}}}interrupt(e){lu("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lu("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ws(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>yu(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Vu(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){lu("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){lu("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";os()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Xh.replace(/\./g,"-")]=1,ns()?e["framework.cordova"]=1:rs()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$u.getInstance().currentlyOnline();return ws(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=ld.nextPersistentConnectionId_++,this.log_=hu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!os())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cd.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&$u.getInstance().on("online",this.onOnline_,this)}}ld.nextPersistentConnectionId_=0,ld.nextConnectionId_=0;
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
class hd{static Wrap(e,t){return new hd(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class ud{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new hd("[MIN_NAME]",e),i=new hd("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return hd.MIN}}
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
 */let dd;class fd extends ud{static get __EMPTY_NODE(){return dd}static set __EMPTY_NODE(e){dd=e}compare(e,t){return gu(e.name,t.name)}isDefinedOn(e){throw Ur("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return hd.MIN}maxPost(){return new hd("[MAX_NAME]",dd)}makePost(e,t){return Fr("string"==typeof e,"KeyIndex indexValue must always be a string."),new hd(e,dd)}toString(){return".key"}}const pd=new fd;
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
 */class gd{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class md{copy(e,t,n,i,r){return new md(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _d.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return _d.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,md.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,md.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:md.RED,this.left=null!=i?i:_d.EMPTY_NODE,this.right=null!=r?r:_d.EMPTY_NODE}}md.RED=!0,md.BLACK=!1;class _d{insert(e,t){return new _d(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,md.BLACK,null,null))}remove(e){return new _d(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,md.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new gd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new gd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new gd(this.root_,null,this.comparator_,!0,e)}constructor(e,t=_d.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function yd(e,t){return gu(e.name,t.name)}function vd(e,t){return gu(e,t)}
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
 */let wd;_d.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new md(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const bd=function(e){return"number"==typeof e?"number:"+bu(e):"string:"+e},Ed=function(e){if(e.isLeafNode()){const t=e.val();Fr("string"==typeof t||"number"==typeof t||"object"==typeof t&&ys(t,".sv"),"Priority must be a string or number.")}else Fr(e===wd||e.isEmpty(),"priority of unexpected type.");Fr(e===wd||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Id,Cd,Td;class Sd{static set __childrenNodeConstructor(e){Id=e}static get __childrenNodeConstructor(){return Id}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Sd(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Sd.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return td(e)?this:".priority"===Gu(e)?this.priorityNode_:Sd.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Sd.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Gu(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Fr(".priority"!==n||1===Yu(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Sd.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xu(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bd(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?bu(this.value_):this.value_,this.lazyHash_=ru(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Sd.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Sd.__childrenNodeConstructor?-1:(Fr(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Sd.VALUE_TYPE_ORDER.indexOf(t),r=Sd.VALUE_TYPE_ORDER.indexOf(n);return Fr(i>=0,"Unknown leaf type: "+t),Fr(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Sd.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Fr(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ed(this.priorityNode_)}}Sd.VALUE_TYPE_ORDER=["object","boolean","number","string"];const kd=new class extends ud{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?gu(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return hd.MIN}maxPost(){return new hd("[MAX_NAME]",new Sd("[PRIORITY-POST]",Td))}makePost(e,t){const n=Cd(e);return new hd(t,new Sd("[PRIORITY-POST]",n))}toString(){return".priority"}},Rd=Math.log(2);
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
 */class Ad{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Rd,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const Od=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new md(a,o.node,md.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),h=r(c+1,i);return o=e[c],a=n?n(o):o,new md(a,o.node,md.BLACK,l,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),h=e[s],u=n?n(h):h;c(new md(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,md.BLACK):(a(i,md.BLACK),a(i,md.RED))}return s}(new Ad(e.length));return new _d(i||t,s)};
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
 */let Nd;const xd={};class Pd{static get Default(){return Fr(xd&&kd,"ChildrenNode.ts has not been loaded"),Nd=Nd||new Pd({".priority":xd},{".priority":kd}),Nd}get(e){const t=vs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof _d?t:null}hasIndex(e){return ys(this.indexSet_,e.toString())}addIndex(e,t){Fr(e!==pd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(hd.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Od(n,e.getCompare()):xd;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new Pd(l,c)}addToIndexes(e,t){const n=bs(this.indexes_,((n,i)=>{const r=vs(this.indexSet_,i);if(Fr(r,"Missing index implementation for "+i),n===xd){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(hd.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Od(n,r.getCompare())}return xd}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new hd(e.name,i))),r.insert(e,e.node)}}));return new Pd(n,this.indexSet_)}removeFromIndexes(e,t){const n=bs(this.indexes_,(n=>{if(n===xd)return n;{const i=t.get(e.name);return i?n.remove(new hd(e.name,i)):n}}));return new Pd(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let Ld;class Dd{static get EMPTY_NODE(){return Ld||(Ld=new Dd(new _d(vd),null,Pd.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ld}updatePriority(e){return this.children_.isEmpty()?this:new Dd(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ld:t}}getChild(e){const t=Gu(e);return null===t?this:this.getImmediateChild(t).getChild(Xu(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Fr(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new hd(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Ld:this.priorityNode_;return new Dd(i,s,r)}}updateChild(e,t){const n=Gu(e);if(null===n)return t;{Fr(".priority"!==Gu(e)||1===Yu(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Xu(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(kd,((s,o)=>{t[s]=o.val(e),n++,r&&Dd.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+bd(this.getPriority().val())+":"),this.forEachChild(kd,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":ru(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new hd(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new hd(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new hd(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,hd.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,hd.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Md?-1:0}withIndex(e){if(e===pd||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Dd(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pd||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(kd),n=t.getIterator(kd);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===pd?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ed(this.priorityNode_),this.children_.isEmpty()&&Fr(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Dd.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Md=new class extends Dd{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Dd.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new _d(vd),Dd.EMPTY_NODE,Pd.Default)}};Object.defineProperties(hd,{MIN:{value:new hd("[MIN_NAME]",Dd.EMPTY_NODE)},MAX:{value:new hd("[MAX_NAME]",Md)}}),fd.__EMPTY_NODE=Dd.EMPTY_NODE,Sd.__childrenNodeConstructor=Dd,wd=Md,function(e){Td=e}(Md);function Fd(e,t=null){if(null===e)return Dd.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Fr(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Sd(e,Fd(t))}if(e instanceof Array){let n=Dd.EMPTY_NODE;return wu(e,((t,i)=>{if(ys(e,t)&&"."!==t.substring(0,1)){const e=Fd(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Fd(t))}{const n=[];let i=!1;if(wu(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Fd(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new hd(e,r)))}})),0===n.length)return Dd.EMPTY_NODE;const r=Od(n,yd,(e=>e.name),vd);if(i){const e=Od(n,kd.getCompare());return new Dd(r,Fd(t),new Pd({".priority":e},{".priority":kd}))}return new Dd(r,Fd(t),Pd.Default)}}!function(e){Cd=e}(Fd);
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
class Ud extends ud{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?gu(e.name,t.name):r}makePost(e,t){const n=Fd(e),i=Dd.EMPTY_NODE.updateChild(this.indexPath_,n);return new hd(t,i)}maxPost(){const e=Dd.EMPTY_NODE.updateChild(this.indexPath_,Md);return new hd("[MAX_NAME]",e)}toString(){return Qu(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Fr(!td(e)&&".priority"!==Gu(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const jd=new class extends ud{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?gu(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return hd.MIN}maxPost(){return hd.MAX}makePost(e,t){const n=Fd(e);return new hd(t,n)}toString(){return".value"}};
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
 */function Bd(e){return{type:"value",snapshotNode:e}}function qd(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Wd(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Hd(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class zd{updateChild(e,t,n,i,r,s){Fr(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Wd(t,o)):Fr(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(qd(t,n)):s.trackChildChange(Hd(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(kd,((e,i)=>{t.hasChild(e)||n.trackChildChange(Wd(e,i))})),t.isLeafNode()||t.forEachChild(kd,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Hd(t,i,r))}else n.trackChildChange(qd(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Dd.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
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
 */class $d{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new hd(t,n))||(n=Dd.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Dd.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Dd.EMPTY_NODE);const r=this;return t.forEachChild(kd,((e,t)=>{r.matches(new hd(e,t))||(i=i.updateImmediateChild(e,Dd.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new zd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$d.getStartPost_(e),this.endPost_=$d.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class Vd{updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new hd(t,n))||(n=Dd.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Dd.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Dd.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Dd.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Dd.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Fr(o.numChildren()===this.limit_,"");const a=new hd(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(l&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(Hd(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Wd(t,e));const n=o.updateImmediateChild(t,Dd.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(qd(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:l&&s(c,a)>=0?(null!=r&&(r.trackChildChange(Wd(c.name,c.node)),r.trackChildChange(qd(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,Dd.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new $d(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class Kd{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Fr(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Fr(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Fr(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Fr(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Fr(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===kd}copy(){const e=new Kd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=kd}}function Gd(e){const t={};if(e.isDefault())return t;let n;if(e.index_===kd?n="$priority":e.index_===jd?n="$value":e.index_===pd?n="$key":(Fr(e.index_ instanceof Ud,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ps(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=ps(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+ps(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=ps(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+ps(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Yd(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==kd&&(t.i=e.index_.toString()),t}
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
 */class Xd extends Hu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Fr(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Xd.getListenId_(e,n),o={};this.listens_[s]=o;const a=Gd(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),vs(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Xd.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gd(e._queryParams),n=e._path.toString(),i=new Zr;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cs(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=fs(o.responseText)}catch(e){fu("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&fu("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=hu("p:rest:"),this.listens_={}}}
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
 */class Jd{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Dd.EMPTY_NODE}}
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
 */function Qd(){return{value:null,children:new Map}}function Zd(e,t,n){if(td(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Gu(t);e.children.has(i)||e.children.set(i,Qd());Zd(e.children.get(i),t=Xu(t),n)}}function ef(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{ef(i,new Vu(t.toString()+"/"+e),n)}))}class tf{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wu(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class nf{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;wu(e,((e,i)=>{i>0&&ys(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Tu(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tf(e);const n=1e4+2e4*Math.random();Tu(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var rf,sf;function of(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(sf=rf||(rf={}))[sf.OVERWRITE=0]="OVERWRITE",sf[sf.MERGE=1]="MERGE",sf[sf.ACK_USER_WRITE=2]="ACK_USER_WRITE",sf[sf.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class af{operationForChild(e){if(td(this.path)){if(null!=this.affectedTree.value)return Fr(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Vu(e));return new af(Ku(),t,this.revert)}}return Fr(Gu(this.path)===e,"operationForChild called for unrelated child."),new af(Xu(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=rf.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
 */class cf{operationForChild(e){return td(this.path)?new cf(this.source,Ku()):new cf(this.source,Xu(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=rf.LISTEN_COMPLETE}}
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
 */class lf{operationForChild(e){return td(this.path)?new lf(this.source,Ku(),this.snap.getImmediateChild(e)):new lf(this.source,Xu(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=rf.OVERWRITE}}
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
 */class hf{operationForChild(e){if(td(this.path)){const t=this.children.subtree(new Vu(e));return t.isEmpty()?null:t.value?new lf(this.source,Ku(),t.value):new hf(this.source,Ku(),t)}return Fr(Gu(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hf(this.source,Xu(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=rf.MERGE}}
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
 */class uf{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(td(e))return this.isFullyInitialized()&&!this.filtered_;const t=Gu(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */class df{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ff(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ur("Should only compare child_ events.");const i=new hd(t.childName,t.snapshotNode),r=new hd(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function pf(e,t){return{eventCache:e,serverCache:t}}function gf(e,t,n,i){return pf(new uf(t,n,i),e.serverCache)}function mf(e,t,n,i){return pf(e.eventCache,new uf(t,n,i))}function _f(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function yf(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let vf;class wf{static fromObject(e){let t=new wf(null);return wu(e,((e,n)=>{t=t.set(new Vu(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ku(),value:this.value};if(td(e))return null;{const n=Gu(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Xu(e),t);if(null!=r){return{path:ed(new Vu(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(td(e))return this;{const t=Gu(e),n=this.children.get(t);return null!==n?n.subtree(Xu(e)):new wf(null)}}set(e,t){if(td(e))return new wf(t,this.children);{const n=Gu(e),i=(this.children.get(n)||new wf(null)).set(Xu(e),t),r=this.children.insert(n,i);return new wf(this.value,r)}}remove(e){if(td(e))return this.children.isEmpty()?new wf(null):new wf(null,this.children);{const t=Gu(e),n=this.children.get(t);if(n){const i=n.remove(Xu(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new wf(null):new wf(this.value,r)}return this}}get(e){if(td(e))return this.value;{const t=Gu(e),n=this.children.get(t);return n?n.get(Xu(e)):null}}setTree(e,t){if(td(e))return t;{const n=Gu(e),i=(this.children.get(n)||new wf(null)).setTree(Xu(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new wf(this.value,r)}}fold(e){return this.fold_(Ku(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(ed(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ku(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(td(e))return null;{const i=Gu(e),r=this.children.get(i);return r?r.findOnPath_(Xu(e),ed(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ku(),t)}foreachOnPath_(e,t,n){if(td(e))return this;{this.value&&n(t,this.value);const i=Gu(e),r=this.children.get(i);return r?r.foreachOnPath_(Xu(e),ed(t,i),n):new wf(null)}}foreach(e){this.foreach_(Ku(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(ed(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(vf||(vf=new _d(mu)),vf))()){this.value=e,this.children=t}}
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
 */class bf{static empty(){return new bf(new wf(null))}constructor(e){this.writeTree_=e}}function Ef(e,t,n){if(td(t))return new bf(new wf(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=nd(r,t);return s=s.updateChild(o,n),new bf(e.writeTree_.set(r,s))}{const i=new wf(n),r=e.writeTree_.setTree(t,i);return new bf(r)}}}function If(e,t,n){let i=e;return wu(n,((e,n)=>{i=Ef(i,ed(t,e),n)})),i}function Cf(e,t){if(td(t))return bf.empty();{const n=e.writeTree_.setTree(t,new wf(null));return new bf(n)}}function Tf(e,t){return null!=Sf(e,t)}function Sf(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(nd(n.path,t)):null}function kf(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(kd,((e,n)=>{t.push(new hd(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new hd(e,n.value))})),t}function Rf(e,t){if(td(t))return e;{const n=Sf(e,t);return new bf(null!=n?new wf(n):e.writeTree_.subtree(t))}}function Af(e){return e.writeTree_.isEmpty()}function Of(e,t){return Nf(Ku(),e.writeTree_,t)}function Nf(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Fr(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Nf(ed(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(ed(e,".priority"),i)),n}}
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
 */function xf(e,t){return $f(t,e)}function Pf(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Fr(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Lf(t,i.path)?r=!1:rd(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=Mf(e.allWrites,Df,Ku()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Cf(e.visibleWrites,i.path);else{wu(i.children,(t=>{e.visibleWrites=Cf(e.visibleWrites,ed(i.path,t))}))}return!0}return!1}function Lf(e,t){if(e.snap)return rd(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&rd(ed(e.path,n),t))return!0;return!1}function Df(e){return e.visible}function Mf(e,t,n){let i=bf.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)rd(n,e)?(t=nd(n,e),i=Ef(i,t,s.snap)):rd(e,n)&&(t=nd(e,n),i=Ef(i,Ku(),s.snap.getChild(t)));else{if(!s.children)throw Ur("WriteRecord should have .snap or .children");if(rd(n,e))t=nd(n,e),i=If(i,t,s.children);else if(rd(e,n))if(t=nd(e,n),td(t))i=If(i,Ku(),s.children);else{const e=vs(s.children,Gu(t));if(e){const n=e.getChild(Xu(t));i=Ef(i,Ku(),n)}}}}}return i}function Ff(e,t,n,i,r){if(i||r){const s=Rf(e.visibleWrites,t);if(!r&&Af(s))return n;if(r||null!=n||Tf(s,Ku())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(rd(e.path,t)||rd(t,e.path))};return Of(Mf(e.allWrites,s,t),n||Dd.EMPTY_NODE)}return null}{const i=Sf(e.visibleWrites,t);if(null!=i)return i;{const i=Rf(e.visibleWrites,t);if(Af(i))return n;if(null!=n||Tf(i,Ku())){return Of(i,n||Dd.EMPTY_NODE)}return null}}}function Uf(e,t,n,i){return Ff(e.writeTree,e.treePath,t,n,i)}function jf(e,t){return function(e,t,n){let i=Dd.EMPTY_NODE;const r=Sf(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(kd,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Rf(e.visibleWrites,t);return n.forEachChild(kd,((e,t)=>{const n=Of(Rf(r,new Vu(e)),t);i=i.updateImmediateChild(e,n)})),kf(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return kf(Rf(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Bf(e,t,n,i){return function(e,t,n,i,r){Fr(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ed(t,n);if(Tf(e.visibleWrites,s))return null;{const t=Rf(e.visibleWrites,s);return Af(t)?r.getChild(n):Of(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function qf(e,t){return function(e,t){return Sf(e.visibleWrites,t)}(e.writeTree,ed(e.treePath,t))}function Wf(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=Rf(e.visibleWrites,t),l=Sf(c,Ku());if(null!=l)a=l;else{if(null==n)return[];a=Of(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Hf(e,t,n){return function(e,t,n,i){const r=ed(t,n),s=Sf(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Of(Rf(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function zf(e,t){return $f(ed(e.treePath,t),e.writeTree)}function $f(e,t){return{treePath:e,writeTree:t}}
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
 */class Vf{trackChildChange(e){const t=e.type,n=e.childName;Fr("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Fr(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Hd(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Wd(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,qd(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Ur("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Hd(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const Kf=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Gf{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new uf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hf(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:yf(this.viewCache_),r=Wf(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function Yf(e,t,n,i,r){const s=new Vf;let o,a;if(n.type===rf.OVERWRITE){const c=n;c.source.fromUser?o=Qf(e,t,c.path,c.snap,i,r,s):(Fr(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!td(c.path),o=Jf(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===rf.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=ed(n,i);Zf(t,Gu(l))&&(a=Qf(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=ed(n,i);Zf(t,Gu(l))||(a=Qf(e,a,l,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(Fr(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=tp(e,t,c.path,c.children,i,r,a,s))}else if(n.type===rf.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=qf(i,n))return t;{const a=new Gf(i,t,r),c=t.eventCache.getNode();let l;if(td(n)||".priority"===Gu(n)){let n;if(t.serverCache.isFullyInitialized())n=Uf(i,yf(t));else{const e=t.serverCache.getNode();Fr(e instanceof Dd,"serverChildren would be complete if leaf node"),n=jf(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=Gu(n);let h=Hf(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=c.getImmediateChild(r)),l=null!=h?e.filter.updateChild(c,r,h,Xu(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,Dd.EMPTY_NODE,Xu(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Uf(i,yf(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=qf(i,Ku()),gf(t,l,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=qf(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(td(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Jf(e,t,n,c.getNode().getChild(n),r,s,a,o);if(td(n)){let i=new wf(null);return c.getNode().forEachChild(pd,((e,t)=>{i=i.set(new Vu(e),t)})),tp(e,t,n,i,r,s,a,o)}return t}{let l=new wf(null);return i.foreach(((e,t)=>{const i=ed(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),tp(e,t,n,l,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==rf.LISTEN_COMPLETE)throw Ur("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=mf(t,s.getNode(),s.isFullyInitialized()||td(n),s.isFiltered());return Xf(e,o,n,i,Kf,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=_f(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Bd(_f(t)))}}(t,o,c),{viewCache:o,changes:c}}function Xf(e,t,n,i,r,s){const o=t.eventCache;if(null!=qf(i,n))return t;{let a,c;if(td(n))if(Fr(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=yf(t),r=jf(i,n instanceof Dd?n:Dd.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=Uf(i,yf(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=Gu(n);if(".priority"===l){Fr(1===Yu(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=Bf(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=Xu(n);let u;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Bf(i,n,o.getNode(),c);u=null!=e?o.getNode().getImmediateChild(l).updateChild(h,e):o.getNode().getImmediateChild(l)}else u=Hf(i,l,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),l,u,h,r,s):o.getNode()}}return gf(t,a,o.isFullyInitialized()||td(n),e.filter.filtersNodes())}}function Jf(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(td(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=Gu(n);if(!c.isCompleteForPath(n)&&Yu(n)>1)return t;const r=Xu(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?h.updatePriority(c.getNode(),s):h.updateChild(c.getNode(),e,s,r,Kf,null)}const u=mf(t,l,c.isFullyInitialized()||td(n),h.filtersNodes());return Xf(e,u,n,r,new Gf(r,u,s),a)}function Qf(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const h=new Gf(r,t,s);if(td(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=gf(t,l,!0,e.filter.filtersNodes());else{const r=Gu(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=gf(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=Xu(n),l=a.getNode().getImmediateChild(r);let u;if(td(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===Ju(s)&&e.getChild(Zu(s)).isEmpty()?e:e.updateChild(s,i):Dd.EMPTY_NODE}if(l.equals(u))c=t;else{c=gf(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Zf(e,t){return e.eventCache.isCompleteForChild(t)}function ep(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function tp(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=td(n)?i:new wf(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=ep(0,t.serverCache.getNode().getImmediateChild(n),i);l=Jf(e,l,new Vu(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!c){const c=ep(0,t.serverCache.getNode().getImmediateChild(n),i);l=Jf(e,l,new Vu(n),c,r,s,o,a)}})),l}class np{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new zd(n.getIndex()),r=(s=n).loadsAllData()?new zd(s.getIndex()):s.hasLimit()?new Vd(s):new $d(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(Dd.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(Dd.EMPTY_NODE,a.getNode(),null),h=new uf(c,o.isFullyInitialized(),i.filtersNodes()),u=new uf(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=pf(u,h),this.eventGenerator_=new df(this.query_)}}function ip(e,t){const n=yf(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!td(t)&&!n.getImmediateChild(Gu(t)).isEmpty())?n.getChild(t):null}function rp(e){return 0===e.eventRegistrations_.length}function sp(e,t,n){const i=[];if(n){Fr(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function op(e,t,n,i){t.type===rf.MERGE&&null!==t.source.queryId&&(Fr(yf(e.viewCache_),"We should always have a full cache before handling merges"),Fr(_f(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Yf(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Fr(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Fr(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Fr(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ap(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ap(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),ff(e,r,"child_removed",t,i,n),ff(e,r,"child_added",t,i,n),ff(e,r,"child_moved",s,i,n),ff(e,r,"child_changed",t,i,n),ff(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let cp,lp;class hp{constructor(){this.views=new Map}}function up(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Fr(null!=s,"SyncTree gave us an op for an invalid query."),op(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(op(s,t,n,i));return r}}function dp(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Uf(n,r?i:null),s=!1;e?s=!0:i instanceof Dd?(e=jf(n,i),s=!1):(e=Dd.EMPTY_NODE,s=!1);const o=pf(new uf(e,s,!1),new uf(i,r,!1));return new np(t,o)}return o}function fp(e,t,n,i,r,s){const o=dp(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(kd,((e,t)=>{i.push(qd(e,t))}));return n.isFullyInitialized()&&i.push(Bd(n.getNode())),ap(e,i,n.getNode(),t)}(o,n)}function pp(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=vp(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(sp(r,n,i)),rp(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(sp(t,n,i)),rp(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!vp(e)&&s.push(new(Fr(cp,"Reference.ts has not been loaded"),cp)(t._repo,t._path)),{removed:s,events:o}}function gp(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function mp(e,t){let n=null;for(const i of e.views.values())n=n||ip(i,t);return n}function _p(e,t){if(t._queryParams.loadsAllData())return wp(e);{const n=t._queryIdentifier;return e.views.get(n)}}function yp(e,t){return null!=_p(e,t)}function vp(e){return null!=wp(e)}function wp(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let bp=1;class Ep{constructor(e){this.listenProvider_=e,this.syncPointTree_=new wf(null),this.pendingWriteTree_={visibleWrites:bf.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ip(e,t,n,i,r){return function(e,t,n,i,r){Fr(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Ef(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Np(e,new lf({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Cp(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Pf(e.pendingWriteTree_,t)){let t=new wf(null);return null!=i.snap?t=t.set(Ku(),!0):wu(i.children,(e=>{t=t.set(new Vu(e),!0)})),Np(e,new af(i.path,t,n))}return[]}function Tp(e,t,n){return Np(e,new lf({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Sp(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||yp(o,t))){const c=pp(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>vp(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&vp(t)){return[wp(t)]}{let e=[];return t&&(e=gp(t)),wu(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Lp(e,i);e.listenProvider_.startListening(Bp(r),Dp(e,r),s.hashFn,s.onComplete)}}}if(!r&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Bp(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Mp(t));e.listenProvider_.stopListening(Bp(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Mp(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function kp(e,t,n,i){const r=Fp(e,i);if(null!=r){const i=Up(r),s=i.path,o=i.queryId,a=nd(s,t);return jp(e,s,new lf(of(o),a,n))}return[]}function Rp(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=nd(e,r);s=s||mp(t,n),o=o||vp(t)}));let a,c=e.syncPointTree_.get(r);if(c?(o=o||vp(c),s=s||mp(c,Ku())):(c=new hp,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=s)a=!0;else{a=!1,s=Dd.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=mp(t,Ku());n&&(s=s.updateImmediateChild(e,n))}))}const l=yp(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=Mp(t);Fr(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=bp++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=fp(c,t,n,xf(e.pendingWriteTree_,r),s,a);if(!l&&!o&&!i){const n=_p(c,t);h=h.concat(function(e,t,n){const i=t._path,r=Dp(e,t),s=Lp(e,n),o=e.listenProvider_.startListening(Bp(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)Fr(!vp(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!td(e)&&t&&vp(t))return[wp(t).query];{let e=[];return t&&(e=e.concat(gp(t).map((e=>e.query)))),wu(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Bp(i),Dp(e,i))}}return o}
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
 */(e,t,n))}return h}function Ap(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=mp(n,nd(e,t));if(i)return i}));return Ff(i,t,r,n,!0)}function Op(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=nd(e,n);i=i||mp(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||mp(r,Ku()):(r=new hp,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new uf(i,!0,!1):null;return function(e){return _f(e.viewCache_)}(dp(r,t,xf(e.pendingWriteTree_,t._path),s?o.getNode():Dd.EMPTY_NODE,s))}function Np(e,t){return xp(t,e.syncPointTree_,null,xf(e.pendingWriteTree_,Ku()))}function xp(e,t,n,i){if(td(e.path))return Pp(e,t,n,i);{const r=t.get(Ku());null==n&&null!=r&&(n=mp(r,Ku()));let s=[];const o=Gu(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=zf(i,o);s=s.concat(xp(a,c,e,t))}return r&&(s=s.concat(up(r,e,i,n))),s}}function Pp(e,t,n,i){const r=t.get(Ku());null==n&&null!=r&&(n=mp(r,Ku()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=zf(i,t),c=e.operationForChild(t);c&&(s=s.concat(Pp(c,r,o,a)))})),r&&(s=s.concat(up(r,e,i,n))),s}function Lp(e,t){const n=t.query,i=Dp(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Dd.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Fp(e,n);if(i){const n=Up(i),r=n.path,s=n.queryId,o=nd(r,t);return jp(e,r,new cf(of(s),o))}return[]}(e,n._path,i):function(e,t){return Np(e,new cf({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Sp(e,n,null,i)}}}}function Dp(e,t){const n=Mp(t);return e.queryToTagMap.get(n)}function Mp(e){return e._path.toString()+"$"+e._queryIdentifier}function Fp(e,t){return e.tagToQueryMap.get(t)}function Up(e){const t=e.indexOf("$");return Fr(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Vu(e.substr(0,t))}}function jp(e,t,n){const i=e.syncPointTree_.get(t);Fr(i,"Missing sync point for query tag that we're tracking");return up(i,n,xf(e.pendingWriteTree_,t),null)}function Bp(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Fr(lp,"Reference.ts has not been loaded"),lp)(e._repo,e._path):e}class qp{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qp(t)}node(){return this.node_}constructor(e){this.node_=e}}class Wp{getImmediateChild(e){const t=ed(this.path_,e);return new Wp(this.syncTree_,t)}node(){return Ap(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Hp=function(e,t,n){return e&&"object"==typeof e?(Fr(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?zp(e[".sv"],t,n):"object"==typeof e[".sv"]?$p(e[".sv"],t):void Fr(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},zp=function(e,t,n){if("timestamp"===e)return n.timestamp;Fr(!1,"Unexpected server value: "+e)},$p=function(e,t,n){e.hasOwnProperty("increment")||Fr(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Fr(!1,"Unexpected increment value: "+i);const r=t.node();if(Fr(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Vp=function(e,t,n,i){return Gp(t,new Wp(n,e),i)},Kp=function(e,t,n){return Gp(e,new qp(t),n)};function Gp(e,t,n){const i=e.getPriority().val(),r=Hp(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Hp(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Sd(s,Fd(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Sd(r))),i.forEachChild(kd,((e,i)=>{const r=Gp(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
 */class Yp{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Xp(e,t){let n=t instanceof Vu?t:new Vu(t),i=e,r=Gu(n);for(;null!==r;){const e=vs(i.node.children,r)||{children:{},childCount:0};i=new Yp(r,i,e),n=Xu(n),r=Gu(n)}return i}function Jp(e){return e.node.value}function Qp(e,t){e.node.value=t,ig(e)}function Zp(e){return e.node.childCount>0}function eg(e,t){wu(e.node.children,((n,i)=>{t(new Yp(n,e,i))}))}function tg(e,t,n,i){n&&!i&&t(e),eg(e,(e=>{tg(e,t,!0,i)})),n&&i&&t(e)}function ng(e){return new Vu(null===e.parent?e.name:ng(e.parent)+"/"+e.name)}function ig(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Jp(e)&&!Zp(e)}(n),r=ys(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,ig(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,ig(e))}
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
 */(e.parent,e.name,e)}const rg=/[\[\].#$\/\u0000-\u001F\u007F]/,sg=/[\[\].#$\u0000-\u001F\u007F]/,og=function(e){return"string"==typeof e&&0!==e.length&&!rg.test(e)},ag=function(e){return"string"==typeof e&&0!==e.length&&!sg.test(e)},cg=function(e,t,n,i){i&&void 0===t||lg(Ns(e,"value"),t,n)},lg=function(e,t,n){const i=n instanceof Vu?new sd(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ad(i));if("function"==typeof t)throw new Error(e+"contains a function "+ad(i)+" with contents = "+t.toString());if(pu(t))throw new Error(e+"contains "+t.toString()+" "+ad(i));if("string"==typeof t&&t.length>10485760/3&&Ps(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+ad(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(wu(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!og(t)))throw new Error(e+" contains an invalid key ("+t+") "+ad(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ps(a),od(o),lg(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ps(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+ad(i)+" in addition to actual children.")}},hg=function(e,t,n,i){if(!(i&&void 0===n||ag(n)))throw new Error(Ns(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ug=function(e,t){if(".info"===Gu(t))throw new Error(e+" failed = Can't modify data under /.info/")},dg=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!og(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ag(e)}(n))throw new Error(Ns(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class fg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pg(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||id(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function gg(e,t,n){pg(e,n),mg(e,(e=>rd(e,t)||rd(t,e)))}function mg(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(_g(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function _g(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();ou&&lu("event: "+n.toString()),Cu(i)}}}
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
 */class yg{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qd(),this.transactionQueueTree_=new Yp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function vg(e,t,n){if(e.stats_=Du(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Xd(e.repoInfo_,((t,n,i,r)=>{Eg(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ig(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ps(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new ld(e.repoInfo_,t,((t,n,i,r)=>{Eg(e,t,n,i,r)}),(t=>{Ig(e,t)}),(t=>{!function(e,t){wu(t,((t,n)=>{Cg(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Lu[n]||(Lu[n]=t()),Lu[n]}(e.repoInfo_,(()=>new nf(e.stats_,e.server_))),e.infoData_=new Jd,e.infoSyncTree_=new Ep({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Tp(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Cg(e,"connected",!1),e.serverSyncTree_=new Ep({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);gg(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function wg(e){const t=e.infoData_.getNode(new Vu(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function bg(e){return(t=(t={timestamp:wg(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Eg(e,t,n,i,r){e.dataUpdateCount++;const s=new Vu(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=bs(n,(e=>Fd(e)));o=function(e,t,n,i){const r=Fp(e,i);if(r){const i=Up(r),s=i.path,o=i.queryId,a=nd(s,t),c=wf.fromObject(n);return jp(e,s,new hf(of(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Fd(n);o=kp(e.serverSyncTree_,s,t,r)}else if(i){const t=bs(n,(e=>Fd(e)));o=function(e,t,n){const i=wf.fromObject(n);return Np(e,new hf({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Fd(n);o=Tp(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=xg(e,s)),gg(e.eventQueue_,a,o)}function Ig(e,t){Cg(e,"connected",t),!1===t&&function(e){Rg(e,"onDisconnectEvents");const t=bg(e),n=Qd();ef(e.onDisconnect_,Ku(),((i,r)=>{const s=Vp(i,r,e.serverSyncTree_,t);Zd(n,i,s)}));let i=[];ef(n,Ku(),((t,n)=>{i=i.concat(Tp(e.serverSyncTree_,t,n));const r=Fg(e,t);xg(e,r)})),e.onDisconnect_=Qd(),gg(e.eventQueue_,Ku(),i)}(e)}function Cg(e,t,n){const i=new Vu("/.info/"+t),r=Fd(n);e.infoData_.updateSnapshot(i,r);const s=Tp(e.infoSyncTree_,i,r);gg(e.eventQueue_,i,s)}function Tg(e){return e.nextWriteId_++}function Sg(e,t,n,i,r){Rg(e,"set",{path:t.toString(),value:n,priority:i});const s=bg(e),o=Fd(n,i),a=Ap(e.serverSyncTree_,t),c=Kp(o,a,s),l=Tg(e),h=Ip(e.serverSyncTree_,t,c,l,!0);pg(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||fu("set at "+t+" failed: "+n);const o=Cp(e.serverSyncTree_,l,!s);gg(e.eventQueue_,t,o),Ag(e,r,n,i)}));const u=Fg(e,t);xg(e,u),gg(e.eventQueue_,u,[])}function kg(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Rg(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),lu(n,...t)}function Ag(e,t,n,i){t&&Cu((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Og(e,t,n){return Ap(e.serverSyncTree_,t,n)||Dd.EMPTY_NODE}function Ng(e,t=e.transactionQueueTree_){if(t||Mg(e,t),Jp(t)){const n=Lg(e,t);Fr(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Og(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Fr(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=nd(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{Rg(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Cp(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Mg(e,Xp(e.transactionQueueTree_,t)),Ng(e,e.transactionQueueTree_),gg(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Cu(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{fu("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}xg(e,t)}}),o)}(e,ng(t),n)}else Zp(t)&&eg(t,(t=>{Ng(e,t)}))}function xg(e,t){const n=Pg(e,t),i=ng(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=nd(n,c.path);let h,u=!1;if(Fr(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)u=!0,h=c.abortReason,r=r.concat(Cp(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)u=!0,h="maxretry",r=r.concat(Cp(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Og(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){lg("transaction failed: Data returned ",i,c.path);let t=Fd(i);"object"==typeof i&&null!=i&&ys(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=bg(e),l=Kp(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Tg(e),s.splice(s.indexOf(o),1),r=r.concat(Ip(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Cp(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(Cp(e.serverSyncTree_,c.currentWriteId,!0))}gg(e.eventQueue_,n,r),r=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;Mg(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Cu(i[e]);Ng(e,e.transactionQueueTree_)}(e,Lg(e,n),i),i}function Pg(e,t){let n,i=e.transactionQueueTree_;for(n=Gu(t);null!==n&&void 0===Jp(i);)i=Xp(i,n),n=Gu(t=Xu(t));return i}function Lg(e,t){const n=[];return Dg(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Dg(e,t,n){const i=Jp(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);eg(t,(t=>{Dg(e,t,n)}))}function Mg(e,t){const n=Jp(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Qp(t,n.length>0?n:void 0)}eg(t,(t=>{Mg(e,t)}))}function Fg(e,t){const n=ng(Pg(e,t)),i=Xp(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Ug(e,t)})),Ug(e,i),tg(i,(t=>{Ug(e,t)})),n}function Ug(e,t){const n=Jp(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Fr(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Fr(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Cp(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Qp(t,void 0):n.length=s+1,gg(e.eventQueue_,ng(t),r);for(let e=0;e<i.length;e++)Cu(i[e])}}
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
 */const jg=function(e,t){const n=Bg(e),i=n.namespace;"firebase.com"===n.domain&&du(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||du("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&fu("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ou(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Vu(n.pathString)}},Bg=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):fu(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
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
class qg{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ps(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class Wg{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
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
 */class Hg{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Fr(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
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
class zg{get key(){return td(this._path)?null:Ju(this._path)}get ref(){return new $g(this._repo,this._path)}get _queryIdentifier(){const e=Yd(this._queryParams),t=yu(e);return"{}"===t?"default":t}get _queryObject(){return Yd(this._queryParams)}isEqual(e){if(!((e=Ds(e))instanceof zg))return!1;const t=this._repo===e._repo,n=id(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class $g extends zg{get parent(){const e=Zu(this._path);return null===e?null:new $g(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Kd,!1)}}class Vg{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Vu(e),n=Gg(this.ref,e);return new Vg(this._node.getChild(t),n,kd)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Vg(n,Gg(this.ref,t),kd))))}hasChild(e){const t=new Vu(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function Kg(e,t){return(e=Ds(e))._checkNotDeleted("ref"),void 0!==t?Gg(e._root,t):e._root}function Gg(e,t){var n,i,r,s;return null===Gu((e=Ds(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),hg(n,i,r,s)):hg("child","path",t,!1),new $g(e._repo,ed(e._path,t))}function Yg(e,t){e=Ds(e),ug("set",e._path),cg("set",t,e._path,!1);const n=new Zr;return Sg(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Xg(e){e=Ds(e);const t=new Hg((()=>{})),n=new Jg(t);return function(e,t,n){const i=Op(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=Fd(i).withIndex(t._queryParams.getIndex());let s;if(Rp(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Tp(e.serverSyncTree_,t._path,r);else{const n=Dp(e.serverSyncTree_,t);s=kp(e.serverSyncTree_,t._path,r,n)}return gg(e.eventQueue_,t._path,s),Sp(e.serverSyncTree_,t,n,null,!0),r}),(n=>(Rg(e,"get for query "+ps(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Vg(t,new $g(e._repo,e._path),e._queryParams.getIndex())))}class Jg{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new qg("value",this,new Vg(e.snapshotNode,new $g(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Wg(this,e,t):null}matches(e){return e instanceof Jg&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){Fr(!cp,"__referenceConstructor has already been defined"),cp=e}($g),function(e){Fr(!lp,"__referenceConstructor has already been defined"),lp=e}($g);
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
const Qg={};let Zg=!1;function em(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||du("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lu("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=jg(s,r),l=c.repoInfo;void 0!==vr&&vr.env&&(a=vr.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=jg(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const h=r&&o?new Ru(Ru.OWNER):new ku(e.name,e.options,t);dg("Invalid Firebase Database URL",c),td(c.path)||du("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let r=Qg[t.name];r||(r={},Qg[t.name]=r);let s=r[e.toURLString()];s&&du("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new yg(e,Zg,n,i),r[e.toURLString()]=s,s}(l,e,h,new Su(e.name,n));return new tm(u,e)}class tm{get _repo(){return this._instanceStarted||(vg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $g(this._repo,Ku())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Qg[t];n&&n[e.key]===e||du(`Database ${t}(${e.repoInfo_}) has already been deleted.`),kg(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&du("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function nm(e=Eo(),t){const n=yo(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Xr("database");e&&function(e,t,n,i={}){(e=Ds(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&du("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&du('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ru(Ru.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:es(i.mockUserToken,e.app.options.projectId);s=new Ru(t)}!function(e,t,n,i){e.repoInfo_=new Ou(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...e)}return n}ld.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},ld.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){Xh="9.22.2",_o(new Ms("database",((e,{instanceIdentifier:t})=>em(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Io("@firebase/database","0.14.4",e),Io("@firebase/database","0.14.4","esm2017")}
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
 */();const im=document.querySelector(".backdrop"),rm=document.querySelector(".open-modal"),sm=document.querySelector(".form-wrapper"),om=document.querySelector(".display-shop");om.style.display="none";let am=null;const cm=bo({apiKey:"AIzaSyBoP3LpsEiKYieYZusHkpDBfoZn6Hezx9o",authDomain:"serhii-df24d.firebaseapp.com",projectId:"serhii-df24d",storageBucket:"serhii-df24d.appspot.com",messagingSenderId:"305658302139",appId:"1:305658302139:web:6a7f5004932c7c8c1f639e",measurementId:"G-WNMLVDPVC8"}),lm=(function(e=Eo()){const t=yo(e=Ds(e),"analytics");t.isInitialized()?t.getImmediate():function(e,t={}){const n=yo(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(Es(t,n.getOptions()))return e;throw Ch.create("already-initialized")}n.initialize({options:t})}(e)}(cm),function(e=Eo()){const t=yo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=yo(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Es(n.getOptions(),null!=t?t:{}))return e;jo(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:bl,persistence:[Uc,Cc,Sc]}),i=Qr("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Il)return;const i=null==t?void 0:t.token;Cl!==i&&(Cl=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Ds(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Ds(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=Yr("auth");return s&&Va(n,`http://${s}`),n}(cm));function hm(){var e;(e=lm,Ds(e).signOut()).then((()=>{am.remove(),rm.textContent="Sign up",rm.disabled=!1,om.style.display="none"})).catch((e=>{}))}function um(e){e.preventDefault();const{name:t,email:n,password:i}=e.currentTarget.elements;wc(lm,n.value,i.value).then((e=>{e.user;!function(e){Yg(Kg(nm(),"users/"+lm.currentUser.uid),{name:e})}(t.value),im.classList.add("is-hidden"),fm()})).catch((e=>{e.code,e.message}))}async function dm(e){e.preventDefault();const{email:t,password:n}=e.currentTarget.elements;await bc(lm,t.value,n.value).then((e=>{e.user;fm(),im.classList.add("is-hidden")})).catch((e=>{e.code,e.message}))}function fm(){Xg(Gg(Kg(nm()),`users/${lm.currentUser.uid}`)).then((e=>{e.exists()&&(rm.textContent=e.val().name,om.style.display="block")})).catch((e=>{}))}document.querySelector(".cloze").addEventListener("click",(function(){im.classList.add("is-hidden")}));const pm=document.querySelector(".sign-in"),gm=document.querySelector(".sign-up");function mm(){if("Sign up"!==rm.textContent)return function(){const e='<button class="log-out">Log out</button>';rm.insertAdjacentHTML("afterend",e),am=document.querySelector(".log-out"),am.addEventListener("click",hm)}(),void(rm.disabled=!0);sm.innerHTML='<form class="auth-form">\n  <input type="text" name="name" placeholder="NAME" />\n  <input type="text" name="email" placeholder="EMAIL" />\n  <input type="text" name="password" placeholder="PASSWORD" />\n  <button type="submit" class="registr">SIGN UP</button>\n  </form>';const e=document.querySelector(".auth-form");im.classList.remove("is-hidden"),e.addEventListener("submit",um)}var _m,ym,vm;rm.addEventListener("click",mm),gm.addEventListener("click",mm),pm.addEventListener("click",(function(){sm.innerHTML='<form class="login-form">\n  <input type="text" name="email" placeholder="EMAIL" />\n  <input type="text" name="password" placeholder="PASSWORD" />\n  <button type="submit" class="login">LOGIN</button>\n  </form>';document.querySelector(".login-form").addEventListener("submit",dm)})),_m=e=>{e&&(e.uid,fm())},Ds(lm).onAuthStateChanged(_m,ym,vm);const wm=document.querySelector(".category-books-list__title"),bm=document.querySelector(".category-books-list__list"),Em=document.querySelector(".categories-list"),Im=document.querySelector(".best-sellers");Em.addEventListener("click",(function(e){"All categories"==e.target.textContent&&(Im.style.display="block",wm.innerHTML="");let t=e.target.textContent,n=t.split(" ").join("%20"),i=t.split(" ");if(console.log(t),i[i.length-1]=`<span class="paintedWord">${i[i.length-1]}</span>`,t.split(" ").includes("All"))return;wm.innerHTML="",function(e){(function(e){return fetch(`https://books-backend.p.goit.global/books/category?category=${e}`).then((e=>e.json()))})(e).then((e=>{!function(e){const t=e.map((e=>`\n  <li data-id="${e._id}" class="category-books-list__item">\n    <div class="card__container card">\n        <div class="card__img-container">\n            <img src="${e.book_image}"        \n            alt="${e.title}" class="card__img">\n            <p class="img-hover">QUICK VIEW</p>\n        </div>\n         <div class="card__desc">\n            <h3 class="card__heading">${e.title}</h3>\n            <p class="card__author">${e.author}</p>\n        </div>\n    </div>\n</li>\n  `)).join("");bm.innerHTML=t}(e)}))}(n),Im.style.display="none",wm.insertAdjacentHTML("beforeend",i.join(" "))}));function Cm(){try{"dark"===localStorage.getItem("theme")?(document.querySelector("body").classList.add("dark"),document.querySelector(".switch")):(document.querySelector("body").classList.remove("dark"),document.querySelector(".switch"))}catch(e){}}document.querySelector(".switch").addEventListener("click",(e=>{e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),Cm()})),Cm();const Tm=document.querySelector("#scroll-top");function Sm(){var e=document.getElementById("loader-overlay");e&&(e.style.display="flex")}function km(){var e=document.getElementById("loader-overlay");e&&(e.style.display="none")}var Rm,Am,Om;window.addEventListener("scroll",(function(){window.onscroll=()=>{window.scrollY>700?Tm.classList.remove("js-scrollToTop_hide"):window.scrollY<700&&Tm.classList.add("js-scrollToTop_hide")}})),window.addEventListener("load",(()=>{window.scrollTo(0,0)})),Tm.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),Rm=XMLHttpRequest.prototype.open,Am=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=function(){var e=this;return e.addEventListener("loadstart",(function(){Sm()})),e.addEventListener("loadend",(function(){km()})),Rm.apply(this,arguments)},XMLHttpRequest.prototype.send=function(){var e=this;return e.addEventListener("loadstart",(function(){Sm()})),e.addEventListener("loadend",(function(){km()})),Am.apply(this,arguments)},Om=window.fetch,window.fetch=function(){return Sm(),Om.apply(this,arguments).then((function(e){return km(),e})).catch((function(e){throw km(),e}))},document.querySelector(".switch").addEventListener("click",(function(e){e.preventDefault(),function(){var e=document.getElementById("loader-overlay");if(document.body.classList.contains("dark")){e.style.backgroundColor="rgba(17, 17, 17)";for(var t=e.querySelectorAll(".covers span"),n=0;n<t.length;n++)t[n].style.backgroundColor="rgba(17, 17, 17)"}else{e.style.backgroundColor="",e.querySelector(".loader").style.background="";for(t=e.querySelectorAll(".covers span"),n=0;n<t.length;n++)t[n].style.backgroundColor=""}}()}));var Nm;Nm=new URL(s("kyEFX").resolve("hd7m9"),import.meta.url).toString();var xm;xm=new URL(s("kyEFX").resolve("30Myv"),import.meta.url).toString();var Pm;Pm=new URL(s("kyEFX").resolve("eqjQv"),import.meta.url).toString();const Lm=document.querySelector("#book-modal"),Dm=document.querySelector(".best-sellers"),Mm=document.querySelector(".category-books-list"),Fm=document.querySelector(".modal__close-btn"),Um=document.querySelector(".add-bookBtn"),jm=document.querySelector(".removeNotification"),Bm=document.querySelector(".addNotification"),qm=document.querySelector(".notification");let Wm=document.querySelector(".modal__content"),Hm=null,zm=[];function $m(e){(function(e){return fetch(`https://books-backend.p.goit.global/books/${e}`).then((e=>e.json()))})(e).then((e=>{!function(e){const t=`\n    \n      <div class="modal__img-container">\n        <img src="${e.book_image}" alt="${e.title}" class="modal__img">\n      </div>\n      <div class="modal__desc">\n        <h2 class="modal__title">${e.title}</h2>\n        <p class="modal__author">${e.author}</p>\n        <p class="modal__book-desc">${e.description}</p>\n        <ul class="modal__list">\n          <li class="modal__item"><a href="${e.buy_links[0].url}" class="amazon-link"><img src=""><img src="${n(Nm)}" alt=""></a></li>\n          <li class="modal__item"><a href="${e.buy_links[1].url}" class="app-book-link"><img src="${n(xm)}" alt=""></a></li>\n          <li class="modal__item"><a href="${e.buy_links[3].url}" class="book-shop-link"><img src="${n(Pm)}" alt=""></a></li>\n        </ul>\n      \n</div>\n\n    `;Wm.innerHTML="",Wm.innerHTML=t}(e)}))}function Vm(e){console.log(e.code),"Escape"===e.code&&(Lm.removeEventListener("keydown",Vm),Lm.classList.add("is-hidden")),e.currentTarget===e.target&&Lm.classList.add("is-hidden"),e.target.classList.contains("modal__close-img")&&Lm.classList.add("is-hidden")}function Km(e){const t=e.target,n=t.closest("[data-id]").dataset.id;window.addEventListener("keydown",Vm),Lm.addEventListener("click",Vm),Lm.addEventListener("keydown",Vm),t.classList.contains("books-btn")||(Hm=n,$m(n),Lm.classList.remove("is-hidden"))}Um.addEventListener("click",(function(e){qm.classList.toggle("hidden"),jm.classList.toggle("hidden"),Bm.classList.toggle("hidden"),Bm.classList.contains("hidden")&&(zm.push(Hm),localStorage.setItem("shopping-list",JSON.stringify(zm)));if(jm.classList.contains("hidden")){const e=JSON.parse(localStorage.getItem("shopping-list")).filter((e=>e!==Hm));localStorage.setItem("shopping-list",JSON.stringify(e))}})),Fm.addEventListener("click",Vm),Dm.addEventListener("click",Km),Mm.addEventListener("click",Km);
//# sourceMappingURL=index.cf54aeb1.js.map
