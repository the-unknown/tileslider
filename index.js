"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const tileslider=e=>{const s={auto:e.auto||!0,interval:e.interval||1e4,mainClass:e.mainClass||".tileslider",slideClass:e.slideClass||".slide"},t=document.querySelector(`${s.mainClass} ${s.slideClass}`);if(t){t.classList.add("active");const e=e=>{document.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")},a=document.querySelectorAll(`${s.mainClass} ${s.slideClass}`);a.forEach(s=>s.addEventListener("click",e)),1==s.auto&&setInterval(()=>{const e=(()=>{for(let e=0;e<a.length;e++)if(a[e].classList.contains("active"))return e})();e+1<a.length?(a[e].classList.remove("active"),a[e+1].classList.add("active")):(a[e].classList.remove("active"),a[0].classList.add("active"))},s.interval)}};var _default=tileslider;exports.default=_default;