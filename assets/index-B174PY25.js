(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=(r=0,n=1)=>{let o=r;return()=>o+=n};let d=0,l=1,m=f(d,l);function p(){m=f(d,l),g()}function g(){const r=document.querySelector(".current_count");r.innerHTML=String(m())}const u=document.getElementById("start_at"),s=document.getElementById("step"),i=document.querySelector(".count_button");u==null||u.addEventListener("change",r=>{d=Number(r.target.value||0),p()});s==null||s.addEventListener("change",r=>{l=Number(r.target.value||1),p()});i==null||i.addEventListener("click",g);
