(()=>{var e={538:(e,n,t)=>{"use strict";function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,d=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){d=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(d)throw i}}}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.r(n),t.d(n,{footer:()=>o});var o=function(e){var n=document.createElement("footer");n.classList=["container"],n.classList.add("my-5");var t=document.createElement("div");t.className="row justify-content-md-center",e=e.map((function(e){var n=document.createElement("a");return n.setAttribute("href",e.src),n.classList.add("col-3"),n.classList.add("btn"),n.classList.add("mx-4"),n.classList.add("btn-primary"),n.classList.add("animate__animated"),n.classList.add("animate__bounce"),n.innerHTML=e.content+" &rarr;",n}));var a,o=r(e);try{for(o.s();!(a=o.n()).done;){var i=a.value;t.appendChild(i)}}catch(e){o.e(e)}finally{o.f()}return n.appendChild(t),n}},34:(e,n,t)=>{"use strict";t.r(n),t.d(n,{header:()=>r});var r=function(){var e=document.createElement("header");return e.classList=["container-fluid"],e.innerHTML='\n    <h1 class="animate__animated animate__fadeIn">Perdido en el espacio 🚀</h1>\n      <details class="animate__animated animate__lightSpeedInLeft">\n        <summary>Reglas del juego</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    ',e}},418:(e,n,t)=>{"use strict";t.r(n),t.d(n,{progressBar:()=>r});var r=function(e){var n=document.createElement("div");n.className="container-fluid";var t=document.createElement("div");return t.className="progress",t.classList.add("animate__animated"),t.classList.add("animate__fadeIn"),t.innerHTML='\n          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: '.concat(e,'%" aria-valuenow="').concat(e,'" aria-valuemin="0" aria-valuemax="100"></div>\n\n    '),n.appendChild(t),n}},86:(e,n,t)=>{var r=t(538).footer,a=t(34).header,o=t(418).progressBar;e.exports={footer:r,header:a,progressBar:o}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=t(86),n=e.header,r=e.footer,a=e.progressBar;document.body.appendChild(n()),document.body.appendChild(a(100));var o=document.createElement("section");o.classList.add("container-fluid"),o.classList.add("my-5"),o.innerHTML="\n    \n      <h2>Has Muerto</h2>\n      <p>\n        La opción que escogiste no fue la correcta para abordar el problema de\n        tu nave. La pérdida de presión te deja inconsiente.\n      </p>\n\n",document.body.appendChild(o),document.body.appendChild(r([{content:"Intentar De Nuevo ",src:"index.html"}]))})()})();