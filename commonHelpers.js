(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();let d=document.querySelector("#next"),a=document.querySelector("#prev"),c=document.querySelectorAll(".slide"),s=0;d.addEventListener("click",function(){c.forEach(function(e,o){e.classList.contains("show")===!0&&(s=o+1,e.classList.remove("show"))}),s<c.length||(s=0),c[s].classList.add("show")});a.addEventListener("click",function(){c.forEach(function(e,o){e.classList.contains("show")===!0&&(s=o-1,e.classList.remove("show"))}),s<c.length&&s>-1||(s=c.length-1),c[s].classList.add("show")});document.querySelectorAll("details").forEach(e=>{const o=e.querySelector("summary"),r=e.querySelector(".content");o.addEventListener("click",i=>{i.preventDefault(),e.open?u(r,()=>{e.open=!1}):(e.open=!0,f(r))})});function u(e,o){const r=e.offsetHeight;e.style.height=r+"px",e.offsetHeight,e.style.height="0",e.addEventListener("transitionend",function i(){e.removeEventListener("transitionend",i),o()})}function f(e){e.style.height="0",e.offsetHeight;const o=e.scrollHeight;e.style.height=o+"px",e.addEventListener("transitionend",function r(){e.removeEventListener("transitionend",r),e.style.height="auto"})}(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");const n=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",i),r.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map