parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=document.createElement("form"),l=document.querySelector("body");function u(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=document.createElement("div");o.className="notification ".concat(a),o.dataset.qa="notification",o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),o.innerHTML='\n    <h2 class="title">'.concat(n,"</h2>\n    <p>").concat(r,"</p>\n  "),l.append(o),setTimeout(function(){o.hidden=!0},2e3)}function d(e){return e.name.length<4?(u(500,10,"Error!","Something went wrong!<br> Name field cannot be empty! Or less then 4 letters!","error"),!1):e.position?!(+e.age<18||+e.age>90)||(u(500,10,"Error!","Something went wrong!<br> Age must be more 18 & less 90","error"),!1):(u(500,10,"Error!","Something went wrong!<br> Position field cannot be empty!","error"),!1)}c.className="new-employee-form",c.action="#",c.method="post",c.innerHTML='\n  <label>Name: <input data-qa="name" name="name" type="text"></label>\n  <label>Position: <input\n    data-qa="position" name="position" type="text"></label>\n  <label>Office: <select data-qa="office" name="office">\n    <option>Tokyo</option>\n    <option>Singapore</option>\n    <option>London</option>\n    <option>New York</option>\n    <option>Edinburgh</option>\n    <option>San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input\n    data-qa="age" name="age" type="number"></label>\n  <label>Salary: <input data-qa="salary" name="salary" type="number"></label>\n  <button type="submit">Save to table</button>\n',l.append(c);var s=document.querySelector("tbody");function m(e){return+e.slice(1).split(",").join("")}function f(e,n,r){var a=t(e.children).sort(function(e,t){if(4===n){var a=m(e.children[n].innerText),o=m(t.children[n].innerText);return"down"===r?o-a:a-o}var i=e.children[n].innerText,c=t.children[n].innerText;return"down"===r?c.localeCompare(i):i.localeCompare(c)});e.append.apply(e,t(a))}c.addEventListener("submit",function(e){e.preventDefault();var t=Object.fromEntries(new FormData(c).entries()),n=document.createElement("tr"),r=Number(t.salary).toLocaleString("en-US");n.innerHTML="\n    <td>".concat(t.name,"</td>\n    <td>").concat(t.position,"</td>\n    <td>").concat(t.office,"</td>\n    <td>").concat(t.age,"</td>\n    <td>").concat("$"+r,"</td>\n  "),!0===d(t)?(u(500,10,"Success!","Good!\n Employee has been added!","success"),s.append(n),c.reset()):d(t)}),addEventListener("click",function(n){var r,a=document.querySelector("thead").children[0].children,o=document.querySelector("tfoot"),i=t(a).findIndex(function(e){return e.innerText===n.target.innerText&&!o.contains(n.target)});if(-1!==i){var c,l=e(a);try{for(l.s();!(c=l.n()).done;){var u=c.value;u.hasAttribute("data-status")&&u!==a[i]&&u.removeAttribute("data-status")}}catch(d){l.e(d)}finally{l.f()}"on"===a[i].dataset.status?(a[i].dataset.status="off",r="down"):(a[i].dataset.status="on",r="up"),f(document.querySelector("tbody"),i,r)}}),addEventListener("click",function(t){var n=document.querySelector("tbody");if(n.contains(t.target)){var r,a=e(n.children);try{for(a.s();!(r=a.n()).done;){var o=r.value;o.classList.contains("active")&&o.classList.remove("active")}}catch(i){a.e(i)}finally{a.f()}t.target.parentElement.className="active"}});var p=null;addEventListener("dblclick",function(e){if(document.querySelector("tbody").contains(e.target)){document.querySelector(".cell-input")&&(document.querySelector(".cell-input").parentElement.innerText=p.innerText);var n=t(e.target.parentElement.children).findIndex(function(t){return t===e.target}),r=e.target;p=e.target.cloneNode(!0),r.innerHTML='<input\n    class="cell-input" name="data" type="text" value="">',n>2&&(r.innerHTML='<input\n      class="cell-input" name="data" type="number" value="">');var a=document.querySelector(".cell-input");a.addEventListener("keypress",function(e){if("Enter"===e.key)if(0===e.target.value.length&&(r.innerText=p.innerText),0===n&&e.target.value.length<4)a.reset();else if(3===n&&(Number(e.target.value)<18||Number(e.target.value)>90))a.reset();else if(r.innerText=e.target.value,4===n){var t=Number(e.target.value).toLocaleString("en-US");r.innerText="$".concat(t)}})}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4ad57694.js.map