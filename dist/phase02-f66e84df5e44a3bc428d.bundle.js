(()=>{var e={256:(e,n,r)=>{"use strict";r.r(n),r.d(n,{footer:()=>t});const t=e=>{const n=document.createElement("footer"),r=document.createElement("ul");e=e.map((e=>{const n=document.createElement("li"),r=document.createElement("a");return r.setAttribute("href",e.src),r.innerHTML=e.content+" &rarr;",n.appendChild(r),n}));for(const n of e)r.appendChild(n);return n.appendChild(r),n}},5:(e,n,r)=>{"use strict";r.r(n),r.d(n,{header:()=>t});const t=()=>{const e=document.createElement("header");return e.innerHTML="\n    <h1>Perdido en el espacio 🚀</h1>\n      <details>\n        <summary>Reglas del juego</summary>\n        <p>\n          Este es un juego de aventura, el objetivo es terminar la historia\n          correctamente :).\n        </p>\n        <ol>\n          <li>Lee atentamente cada situación.</li>\n          <li>Toma una decisión.</li>\n          <li>Mantente a salvo.</li>\n        </ol>\n      </details>\n      <br />\n    ",e}},98:(e,n,r)=>{"use strict";r.r(n),r.d(n,{progressBar:()=>t});const t=e=>{const n=document.createElement("div"),r=document.createElement("span");r.innerHTML="Tu Progreso</br>";const t=document.createElement("progress");return t.max=100,t.value=e,n.appendChild(r),n.appendChild(t),n}},694:(e,n,r)=>{const{footer:t}=r(256),{header:o}=r(5),{progressBar:a}=r(98);e.exports={footer:t,header:o,progressBar:a}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{header:e,footer:n,progressBar:t}=r(694);document.body.appendChild(e()),document.body.appendChild(t(50));const o=document.createElement("section");o.innerHTML="\n     <h2>Tu nave tiene energía</h2>\n      <p>\n        Todos los sistemas funcionan en orden y ya puedes respirar en paz. Sin\n        embargo la estación ya no tiene comida para que puedas seguir en ella,\n        debes encontrar la forma de salir.\n      </p>\n      <p>\n        Por suerte, hay una nave de escape, pero primero debes marcar la\n        trayectoria en la sala de observación.\n      </p>\n",document.body.appendChild(o),document.body.appendChild(n([{content:"Ir a la sala de observación  ",src:"obs02.html"}]))})()})();