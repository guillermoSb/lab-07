(()=>{var e={538:(e,r,a)=>{"use strict";function n(e,r){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,d=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){d=!0,i=e},f:function(){try{s||null==a.return||a.return()}finally{if(d)throw i}}}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,n=new Array(r);a<r;a++)n[a]=e[a];return n}a.r(r),a.d(r,{footer:()=>o});var o=function(e){var r=document.createElement("footer");r.classList=["container"],r.classList.add("my-5");var a=document.createElement("div");a.className="row justify-content-md-center",e=e.map((function(e){var r=document.createElement("a");return r.setAttribute("href",e.src),r.classList.add("col-3"),r.classList.add("btn"),r.classList.add("mx-4"),r.classList.add("btn-primary"),r.classList.add("animate__animated"),r.classList.add("animate__bounce"),r.innerHTML=e.content+" &rarr;",r}));var t,o=n(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;a.appendChild(i)}}catch(e){o.e(e)}finally{o.f()}return r.appendChild(a),r}},34:(e,r,a)=>{"use strict";a.r(r),a.d(r,{header:()=>n});var n=function(){var e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego [Version '.concat("1.0.0","]</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    "),e}},418:(e,r,a)=>{"use strict";a.r(r),a.d(r,{progressBar:()=>n});var n=function(e){var r=document.createElement("div");r.className="container-fluid";var a=document.createElement("div");return a.className="progress",a.classList.add("animate__animated"),a.classList.add("animate__fadeIn"),a.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),r.appendChild(a),r}},86:(e,r,a)=>{var n=a(538).footer,t=a(34).header,o=a(418).progressBar;e.exports={footer:n,header:t,progressBar:o}}},r={};function a(n){var t=r[n];if(void 0!==t)return t.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.d=(e,r)=>{for(var n in r)a.o(r,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=a(86),r=e.header,n=e.footer,t=e.progressBar;document.body.appendChild(r()),document.body.appendChild(t(100));var o=document.createElement("section");o.classList.add("container-fluid"),o.classList.add("my-5"),o.innerHTML="\n      <h2>Llegas sano y salvo</h2>\n      <p>\n        Un grupo de personas te reciben. Abren la cabina y te llevan al\n        hospital. Has logrado sobrevivir a la aventura más peligrosa de tu vida.\n        <em>No hay nada que hacer acá</em>\n      </p>\n",document.body.appendChild(o),document.body.appendChild(n([{content:"Volver a jugar ",src:"index.html"}]))})()})();