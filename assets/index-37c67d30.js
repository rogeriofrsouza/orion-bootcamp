(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.createElement("ul"),a="https://api.github.com/repos/rogeriofrsouza/orion-bootcamp/commits";fetch(a).then(r=>r.json()).then(r=>r.forEach(o=>{const s=document.createElement("li"),c=document.createElement("h3"),e=document.createElement("p"),t=document.createElement("p"),n=document.createElement("a");c.textContent=o.commit.author.name,e.textContent=new Date(o.commit.author.date).toLocaleString("pt-BR"),t.textContent=o.commit.message,n.textContent="commit HTML URL",n.setAttribute("href",o.html_url),n.setAttribute("target","_blank"),s.append(c,e,t,n),i.append(s)})).catch(r=>{console.log(r);const o=document.createElement("p");o.textContent=r.message,document.body.appendChild(o)});document.body.appendChild(i);
