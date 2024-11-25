import{c as j,g as k}from"./main-49110b26.js";import{c as D,m as C,a as v,b as S,l as B,t as I,s as _}from"./config-15a6555d.js";var $={exports:{}};/*!
 * validate.js 0.13.1
 *
 * (c) 2013-2019 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */(function(l,u){(function(o,m,h){var p=function(e,t,n){n=r.extend({},r.options,n);var i=r.runValidations(e,t,n);if(i.some(function(s){return r.isPromise(s.error)}))throw new Error("Use validate.async if you want support for promises");return p.processValidationResults(i,n)},r=p;r.extend=function(e){return[].slice.call(arguments,1).forEach(function(t){for(var n in t)e[n]=t[n]}),e},r.extend(p,{version:{major:0,minor:13,patch:1,metadata:null,toString:function(){var e=r.format("%{major}.%{minor}.%{patch}",r.version);return r.isEmpty(r.version.metadata)||(e+="+"+r.version.metadata),e}},Promise:typeof Promise<"u"?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(e,t,n){var i=[],s,a,c,d,f,g,y;(r.isDomElement(e)||r.isJqueryElement(e))&&(e=r.collectFormValues(e));for(s in t){c=r.getDeepObjectValue(e,s),d=r.result(t[s],c,e,s,n,t);for(a in d){if(f=r.validators[a],!f)throw y=r.format("Unknown validator %{name}",{name:a}),new Error(y);g=d[a],g=r.result(g,c,e,s,n,t),g&&i.push({attribute:s,value:c,validator:a,globalOptions:n,attributes:e,options:g,error:f.call(f,c,g,s,e,n)})}}return i},processValidationResults:function(e,t){e=r.pruneEmptyErrors(e,t),e=r.expandMultipleErrors(e,t),e=r.convertErrorMessages(e,t);var n=t.format||"grouped";if(typeof r.formatters[n]=="function")e=r.formatters[n](e);else throw new Error(r.format("Unknown format %{format}",t));return r.isEmpty(e)?void 0:e},async:function(e,t,n){n=r.extend({},r.async.options,n);var i=n.wrapErrors||function(a){return a};n.cleanAttributes!==!1&&(e=r.cleanAttributes(e,t));var s=r.runValidations(e,t,n);return new r.Promise(function(a,c){r.waitForResults(s).then(function(){var d=r.processValidationResults(s,n);d?c(new i(d,n,e,t)):a(e)},function(d){c(d)})})},single:function(e,t,n){return n=r.extend({},r.single.options,n,{format:"flat",fullMessages:!1}),r({single:e},{single:t},n)},waitForResults:function(e){return e.reduce(function(t,n){return r.isPromise(n.error)?t.then(function(){return n.error.then(function(i){n.error=i||null})}):t},new r.Promise(function(t){t()}))},result:function(e){var t=[].slice.call(arguments,1);return typeof e=="function"&&(e=e.apply(null,t)),e},isNumber:function(e){return typeof e=="number"&&!isNaN(e)},isFunction:function(e){return typeof e=="function"},isInteger:function(e){return r.isNumber(e)&&e%1===0},isBoolean:function(e){return typeof e=="boolean"},isObject:function(e){return e===Object(e)},isDate:function(e){return e instanceof Date},isDefined:function(e){return e!=null},isPromise:function(e){return!!e&&r.isFunction(e.then)},isJqueryElement:function(e){return e&&r.isString(e.jquery)},isDomElement:function(e){return!e||!e.querySelectorAll||!e.querySelector?!1:r.isObject(document)&&e===document?!0:typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},isEmpty:function(e){var t;if(!r.isDefined(e))return!0;if(r.isFunction(e))return!1;if(r.isString(e))return r.EMPTY_STRING_REGEXP.test(e);if(r.isArray(e))return e.length===0;if(r.isDate(e))return!1;if(r.isObject(e)){for(t in e)return!1;return!0}return!1},format:r.extend(function(e,t){return r.isString(e)?e.replace(r.format.FORMAT_REGEXP,function(n,i,s){return i==="%"?"%{"+s+"}":String(t[s])}):e},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(e){return r.isNumber(e)?e*100%1===0?""+e:parseFloat(Math.round(e*100)/100).toFixed(2):r.isArray(e)?e.map(function(t){return r.prettify(t)}).join(", "):r.isObject(e)?r.isDefined(e.toString)?e.toString():JSON.stringify(e):(e=""+e,e.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(t,n,i){return""+n+" "+i.toLowerCase()}).toLowerCase())},stringifyValue:function(e,t){var n=t&&t.prettify||r.prettify;return n(e)},isString:function(e){return typeof e=="string"},isArray:function(e){return{}.toString.call(e)==="[object Array]"},isHash:function(e){return r.isObject(e)&&!r.isArray(e)&&!r.isFunction(e)},contains:function(e,t){return r.isDefined(e)?r.isArray(e)?e.indexOf(t)!==-1:t in e:!1},unique:function(e){return r.isArray(e)?e.filter(function(t,n,i){return i.indexOf(t)==n}):e},forEachKeyInKeypath:function(e,t,n){if(r.isString(t)){var i="",s,a=!1;for(s=0;s<t.length;++s)switch(t[s]){case".":a?(a=!1,i+="."):(e=n(e,i,!1),i="");break;case"\\":a?(a=!1,i+="\\"):a=!0;break;default:a=!1,i+=t[s];break}return n(e,i,!0)}},getDeepObjectValue:function(e,t){if(r.isObject(e))return r.forEachKeyInKeypath(e,t,function(n,i){if(r.isObject(n))return n[i]})},collectFormValues:function(e,t){var n={},i,s,a,c,d,f;if(r.isJqueryElement(e)&&(e=e[0]),!e)return n;for(t=t||{},c=e.querySelectorAll("input[name], textarea[name]"),i=0;i<c.length;++i)if(a=c.item(i),!r.isDefined(a.getAttribute("data-ignored"))){var g=a.name.replace(/\./g,"\\\\.");f=r.sanitizeFormValue(a.value,t),a.type==="number"?f=f?+f:null:a.type==="checkbox"?a.attributes.value?a.checked||(f=n[g]||null):f=a.checked:a.type==="radio"&&(a.checked||(f=n[g]||null)),n[g]=f}for(c=e.querySelectorAll("select[name]"),i=0;i<c.length;++i)if(a=c.item(i),!r.isDefined(a.getAttribute("data-ignored"))){if(a.multiple){f=[];for(s in a.options)d=a.options[s],d&&d.selected&&f.push(r.sanitizeFormValue(d.value,t))}else{var y=typeof a.options[a.selectedIndex]<"u"?a.options[a.selectedIndex].value:"";f=r.sanitizeFormValue(y,t)}n[a.name]=f}return n},sanitizeFormValue:function(e,t){return t.trim&&r.isString(e)&&(e=e.trim()),t.nullify!==!1&&e===""?null:e},capitalize:function(e){return r.isString(e)?e[0].toUpperCase()+e.slice(1):e},pruneEmptyErrors:function(e){return e.filter(function(t){return!r.isEmpty(t.error)})},expandMultipleErrors:function(e){var t=[];return e.forEach(function(n){r.isArray(n.error)?n.error.forEach(function(i){t.push(r.extend({},n,{error:i}))}):t.push(n)}),t},convertErrorMessages:function(e,t){t=t||{};var n=[],i=t.prettify||r.prettify;return e.forEach(function(s){var a=r.result(s.error,s.value,s.attribute,s.options,s.attributes,s.globalOptions);if(!r.isString(a)){n.push(s);return}a[0]==="^"?a=a.slice(1):t.fullMessages!==!1&&(a=r.capitalize(i(s.attribute))+" "+a),a=a.replace(/\\\^/g,"^"),a=r.format(a,{value:r.stringifyValue(s.value,t)}),n.push(r.extend({},s,{error:a}))}),n},groupErrorsByAttribute:function(e){var t={};return e.forEach(function(n){var i=t[n.attribute];i?i.push(n):t[n.attribute]=[n]}),t},flattenErrorsToArray:function(e){return e.map(function(t){return t.error}).filter(function(t,n,i){return i.indexOf(t)===n})},cleanAttributes:function(e,t){function n(a,c,d){return r.isObject(a[c])?a[c]:a[c]=d?!0:{}}function i(a){var c={},d;for(d in a)a[d]&&r.forEachKeyInKeypath(c,d,n);return c}function s(a,c){if(!r.isObject(a))return a;var d=r.extend({},a),f,g;for(g in a)f=c[g],r.isObject(f)?d[g]=s(d[g],f):f||delete d[g];return d}return!r.isObject(t)||!r.isObject(e)?{}:(t=i(t),s(e,t))},exposeModule:function(e,t,n,i,s){n?(i&&i.exports&&(n=i.exports=e),n.validate=e):(t.validate=e,e.isFunction(s)&&s.amd&&s([],function(){return e}))},warn:function(e){typeof console<"u"&&console.warn&&console.warn("[validate.js] "+e)},error:function(e){typeof console<"u"&&console.error&&console.error("[validate.js] "+e)}}),p.validators={presence:function(e,t){if(t=r.extend({},this.options,t),t.allowEmpty!==!1?!r.isDefined(e):r.isEmpty(e))return t.message||this.message||"can't be blank"},length:function(e,t,n){if(r.isDefined(e)){t=r.extend({},this.options,t);var i=t.is,s=t.maximum,a=t.minimum,c=t.tokenizer||function(y){return y},d,f=[];e=c(e);var g=e.length;if(!r.isNumber(g))return t.message||this.notValid||"has an incorrect length";if(r.isNumber(i)&&g!==i&&(d=t.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)",f.push(r.format(d,{count:i}))),r.isNumber(a)&&g<a&&(d=t.tooShort||this.tooShort||"is too short (minimum is %{count} characters)",f.push(r.format(d,{count:a}))),r.isNumber(s)&&g>s&&(d=t.tooLong||this.tooLong||"is too long (maximum is %{count} characters)",f.push(r.format(d,{count:s}))),f.length>0)return t.message||f}},numericality:function(e,t,n,i,s){if(r.isDefined(e)){t=r.extend({},this.options,t);var a=[],c,d,f={greaterThan:function(E,b){return E>b},greaterThanOrEqualTo:function(E,b){return E>=b},equalTo:function(E,b){return E===b},lessThan:function(E,b){return E<b},lessThanOrEqualTo:function(E,b){return E<=b},divisibleBy:function(E,b){return E%b===0}},g=t.prettify||s&&s.prettify||r.prettify;if(r.isString(e)&&t.strict){var y="^-?(0|[1-9]\\d*)";if(t.onlyInteger||(y+="(\\.\\d+)?"),y+="$",!new RegExp(y).test(e))return t.message||t.notValid||this.notValid||this.message||"must be a valid number"}if(t.noStrings!==!0&&r.isString(e)&&!r.isEmpty(e)&&(e=+e),!r.isNumber(e))return t.message||t.notValid||this.notValid||this.message||"is not a number";if(t.onlyInteger&&!r.isInteger(e))return t.message||t.notInteger||this.notInteger||this.message||"must be an integer";for(c in f)if(d=t[c],r.isNumber(d)&&!f[c](e,d)){var w="not"+r.capitalize(c),V=t[w]||this[w]||this.message||"must be %{type} %{count}";a.push(r.format(V,{count:d,type:g(c)}))}if(t.odd&&e%2!==1&&a.push(t.notOdd||this.notOdd||this.message||"must be odd"),t.even&&e%2!==0&&a.push(t.notEven||this.notEven||this.message||"must be even"),a.length)return t.message||a}},datetime:r.extend(function(e,t){if(!r.isFunction(this.parse)||!r.isFunction(this.format))throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");if(r.isDefined(e)){t=r.extend({},this.options,t);var n,i=[],s=t.earliest?this.parse(t.earliest,t):NaN,a=t.latest?this.parse(t.latest,t):NaN;if(e=this.parse(e,t),isNaN(e)||t.dateOnly&&e%864e5!==0)return n=t.notValid||t.message||this.notValid||"must be a valid date",r.format(n,{value:arguments[0]});if(!isNaN(s)&&e<s&&(n=t.tooEarly||t.message||this.tooEarly||"must be no earlier than %{date}",n=r.format(n,{value:this.format(e,t),date:this.format(s,t)}),i.push(n)),!isNaN(a)&&e>a&&(n=t.tooLate||t.message||this.tooLate||"must be no later than %{date}",n=r.format(n,{date:this.format(a,t),value:this.format(e,t)}),i.push(n)),i.length)return r.unique(i)}},{parse:null,format:null}),date:function(e,t){return t=r.extend({},t,{dateOnly:!0}),r.validators.datetime.call(r.validators.datetime,e,t)},format:function(e,t){(r.isString(t)||t instanceof RegExp)&&(t={pattern:t}),t=r.extend({},this.options,t);var n=t.message||this.message||"is invalid",i=t.pattern,s;if(r.isDefined(e)&&(!r.isString(e)||(r.isString(i)&&(i=new RegExp(t.pattern,t.flags)),s=i.exec(e),!s||s[0].length!=e.length)))return n},inclusion:function(e,t){if(r.isDefined(e)&&(r.isArray(t)&&(t={within:t}),t=r.extend({},this.options,t),!r.contains(t.within,e))){var n=t.message||this.message||"^%{value} is not included in the list";return r.format(n,{value:e})}},exclusion:function(e,t){if(r.isDefined(e)&&(r.isArray(t)&&(t={within:t}),t=r.extend({},this.options,t),!!r.contains(t.within,e))){var n=t.message||this.message||"^%{value} is restricted";return r.isString(t.within[e])&&(e=t.within[e]),r.format(n,{value:e})}},email:r.extend(function(e,t){t=r.extend({},this.options,t);var n=t.message||this.message||"is not a valid email";if(r.isDefined(e)&&(!r.isString(e)||!this.PATTERN.exec(e)))return n},{PATTERN:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i}),equality:function(e,t,n,i,s){if(r.isDefined(e)){r.isString(t)&&(t={attribute:t}),t=r.extend({},this.options,t);var a=t.message||this.message||"is not equal to %{attribute}";if(r.isEmpty(t.attribute)||!r.isString(t.attribute))throw new Error("The attribute must be a non empty string");var c=r.getDeepObjectValue(i,t.attribute),d=t.comparator||function(g,y){return g===y},f=t.prettify||s&&s.prettify||r.prettify;if(!d(e,c,t,n,i))return r.format(a,{attribute:f(t.attribute)})}},url:function(e,t){if(r.isDefined(e)){t=r.extend({},this.options,t);var n=t.message||this.message||"is not a valid url",i=t.schemes||this.schemes||["http","https"],s=t.allowLocal||this.allowLocal||!1,a=t.allowDataUrl||this.allowDataUrl||!1;if(!r.isString(e))return n;var c="^(?:(?:"+i.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";if(s?d+="?":c+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",c+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+d+")(?::\\d{2,5})?(?:[/?#]\\S*)?$",a){var f="\\w+\\/[-+.\\w]+(?:;[\\w=]+)*",g="[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*",y="data:(?:"+f+")?(?:;base64)?,"+g;c="(?:"+c+")|(?:^"+y+"$)"}var w=new RegExp(c,"i");if(!w.exec(e))return n}},type:r.extend(function(e,t,n,i,s){if(r.isString(t)&&(t={type:t}),!!r.isDefined(e)){var a=r.extend({},this.options,t),c=a.type;if(!r.isDefined(c))throw new Error("No type was specified");var d;if(r.isFunction(c)?d=c:d=this.types[c],!r.isFunction(d))throw new Error("validate.validators.type.types."+c+" must be a function.");if(!d(e,a,n,i,s)){var f=t.message||this.messages[c]||this.message||a.message||(r.isFunction(c)?"must be of the correct type":"must be of type %{type}");return r.isFunction(f)&&(f=f(e,t,n,i,s)),r.format(f,{attribute:r.prettify(n),type:c})}}},{types:{object:function(e){return r.isObject(e)&&!r.isArray(e)},array:r.isArray,integer:r.isInteger,number:r.isNumber,string:r.isString,date:r.isDate,boolean:r.isBoolean},messages:{}})},p.formatters={detailed:function(e){return e},flat:r.flattenErrorsToArray,grouped:function(e){var t;e=r.groupErrorsByAttribute(e);for(t in e)e[t]=r.flattenErrorsToArray(e[t]);return e},constraint:function(e){var t;e=r.groupErrorsByAttribute(e);for(t in e)e[t]=e[t].map(function(n){return n.validator}).sort();return e}},p.exposeModule(p,this,o,m,h)}).call(j,u,l,null)})($,$.exports);var G=$.exports;const U=k(G);function H(){W(),z()}const K=document.querySelector(".productSelect"),P=document.querySelector(".productWrap");document.querySelector(".shoppingCart-table");const N=document.querySelector(".cartBody"),O=document.querySelector(".cartFoot");let T=new Array,x=new Object;const W=async()=>{try{T=(await v.get(`${S}/products`)).data.products,q(T)}catch(l){C(l.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}},z=async()=>{try{x=(await v.get(`${S}/carts`)).data,A(x)}catch(l){C(l.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}},J=async l=>{B("正在加入購物車...");let o={data:{productId:l,quantity:1}},m=Q(l);m>0&&(o.data.quantity+=m);try{x=(await v.post(`${S}/carts`,o)).data,A(x),I()}catch(h){C(h.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}},Q=l=>{let u=x.carts.filter(o=>o.product.id===l);return u.length>0?u[0].quantity:0},X=async()=>{let l;try{const u=await v.delete(`${S}/carts`);l=u.status,x=u.data,A(x)}catch(u){l=u.status,C(u.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}return l},F=async l=>{let u;try{const o=await v.delete(`${S}/carts/${l}`);x=o.data,u=o.status,A(x)}catch(o){u=o.status,C(o.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}return u},R=async l=>{B("正在更改訂單數量...");let o={data:l};try{x=(await v.patch(`${S}/carts`,o)).data,A(x)}catch(m){C(m.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}},Y=async l=>{let u={data:{user:l}};try{const o=await v.post(`${S}/orders`,u);M.forEach(m=>m.textContent=""),_(),L.reset(),z()}catch(o){C(o.response.data.message||`系統忙線中，
請稍候再試或洽詢客服人員`)}},q=l=>{P.innerHTML="",l.forEach(u=>{const{images:o,title:m,originPrice:h,price:p,id:r}=u;Z(o,m,h,p,r)})},A=l=>{N.innerHTML="",O.innerHTML="";let u=l.carts.length,o=l.finalTotal;re(o),u!==0?l.carts.forEach(h=>{const{id:p,quantity:r}=h,{images:e,price:t,title:n}=h.product;let i=t*r;ee(p,e,t,n,r,i)}):(te(),document.querySelector(".discardAllBtn").classList.add("disabled"))},Z=(l,u,o,m,h)=>{let p=document.createElement("li");p.classList.add("productCard");let r=document.createElement("h4");r.classList.add("productType"),r.textContent="新品";let e=document.createElement("img");e.src=`${l}`;let t=document.createElement("a");t.classList.add("addCardBtn"),t.dataset.id=`${h}`,t.textContent="加入購物車";let n=document.createElement("div");n.classList.add("productInfo","d-flex","flex-column","justify-content-between");let i=document.createElement("h3");i.textContent=`${u}`;let s=document.createElement("div"),a=document.createElement("del");a.classList.add("originPrice"),a.textContent=`NT$${o}`;let c=document.createElement("p");c.classList.add("nowPrice"),c.textContent=`NT$${m}`,s.appendChild(a),s.appendChild(c),n.appendChild(i),n.appendChild(s),p.appendChild(r),p.appendChild(e),p.appendChild(t),p.appendChild(n),P.appendChild(p)},ee=(l,u,o,m,h,p)=>{let r=document.createElement("tr");r.dataset.id=`${l}`;let e=document.createElement("td"),t=document.createElement("div");t.classList.add("cardItem-title");let n=document.createElement("img");n.src=`${u}`;let i=document.createElement("p");i.textContent=`${m}`,t.appendChild(n),t.appendChild(i),e.appendChild(t),r.appendChild(e);let s=document.createElement("td");s.textContent=`NT$${o}`,r.appendChild(s);let a=document.createElement("td");a.dataset.quantity=`${h}`;let c=document.createElement("button");c.classList.add("btn","btn-sm","btn-outline-primary","minusBtn"),c.type="button",c.textContent="-";let d=document.createElement("span");d.classList.add("mx-3"),d.textContent=`${h}`;let f=document.createElement("button");f.classList.add("btn","btn-sm","btn-outline-primary","plusBtn"),f.type="button",f.textContent="+",a.appendChild(c),a.appendChild(d),a.appendChild(f),r.appendChild(a);let g=document.createElement("td");g.textContent=`NT$${p}`,r.appendChild(g);let y=document.createElement("td");y.classList.add("discardBtn");let w=document.createElement("a");w.classList.add("material-symbols-outlined","removeBtn"),w.textContent="clear",y.appendChild(w),r.appendChild(y),N.appendChild(r)},te=()=>{let l=document.createElement("tr"),u=document.createElement("td");u.colSpan="5",u.textContent=`目前購物車是空的唷！
趕緊選購吧！`,u.style.textAlign="center",l.appendChild(u),N.appendChild(l)},re=l=>{let u=document.createElement("tr"),o=document.createElement("td");o.colSpan="3";let m=document.createElement("a");m.classList.add("discardAllBtn"),m.textContent="刪除所有品項",o.appendChild(m),u.appendChild(o);let h=document.createElement("td"),p=document.createElement("p");p.textContent="總金額",h.appendChild(p),u.appendChild(h);let r=document.createElement("td");r.textContent=`NT$${l}`,u.appendChild(r),O.appendChild(u)};K.addEventListener("change",l=>{let u=l.target.value;if(u==="全部")q(T);else{let o=T.filter(m=>m.category===u);q(o)}});P.addEventListener("click",l=>{if(l.target.dataset.id){let u=l.target.dataset.id;J(u)}});N.addEventListener("click",l=>{let u=l.target,m=u.closest("tr").dataset.id;if(u.classList.contains("removeBtn")){const h={ask:"確定將此商品移除購物車嗎?",result:"商品已移除"};D(h.ask,()=>F(m),h.result)}if(u.classList.contains("plusBtn")){let h=new Object;h.id=m;let p=u.parentNode.dataset.quantity;h.quantity=Number(p)+1,R(h)}if(u.classList.contains("minusBtn")){let h=new Object;h.id=m;let p=u.parentNode.dataset.quantity;if(h.quantity=Number(p)-1,h.quantity===0){const r={ask:"確定將此商品移除購物車嗎?",result:"商品已移除"};D(r.ask,()=>F(m),r.result)}else R(h)}});O.addEventListener("click",l=>{if(l.target.getAttribute("class")==="discardAllBtn"){const o={ask:"確定移除購物車的所有商品嗎?",result:"商品已全數移除"};D(o.ask,X,o.result)}});const L=document.querySelector(".orderInfo-form");let M=document.querySelectorAll(".orderInfo-message"),ne={姓名:{presence:{message:"^必填!"}},電話:{presence:{message:"^必填!"},format:{pattern:/^[0-9]{10}$/,message:"^電話格式不正確，請輸入 10 位數字!"}},Email:{presence:{message:"^必填!"},email:{message:"^email格式不正確!"}},寄送地址:{presence:{message:"^必填!"}},交易方式:{presence:{message:"^必填!"}}};L.addEventListener("submit",l=>{l.preventDefault();let u=U(L,ne);if(x.carts.length===0){C("購物車是空的唷！趕緊來選購吧！");return}if(u)ae(u);else{let o=new Object;o.name=document.querySelector("#customerName").value.trim(),o.tel=document.querySelector("#customerPhone").value.trim(),o.email=document.querySelector("#customerEmail").value.trim(),o.address=document.querySelector("#customerAddress").value.trim(),o.payment=document.querySelector("#tradeWay").value,Y(o)}});const ae=l=>{M.forEach(u=>{let o=u.dataset.message,m=l[o];m?u.textContent=`${m[0]}`:u.textContent=""})};H();