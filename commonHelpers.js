import{s as c}from"./assets/vendor-dd66360f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function n(l){const r="42869495-3eaffa1d7f59c13a6a9af4ac7",a=l.value,t=`https://pixabay.com/api/?key=${r}&q=${a}&orientation=horizontal&safesearch=true`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(l){const r=document.querySelector(".gallery"),a=l.map(t=>`<li class="gallery-list-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-list-item-img"/>        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Likes</p>
                    <p class ="gallery-list-item-text">${t.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Views</p>
                    <p class ="gallery-list-item-text">${t.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Comments</p>
                    <p class ="gallery-list-item-text">${t.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Downloads </p>
                    <p class ="gallery-list-item-text">${t.downloads}</p>
                </div>
            </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",a)}const o=document.querySelector(".form"),u=document.querySelector(".search-input");document.querySelector(".start-btn");o.addEventListener("submit",l=>{l.preventDefault(),n(u).then(({hits:r})=>{p(r)}).catch(r=>console.log(r)),o.reset()});const d=new c(".gallery a",{captionDelay:250});d.elements;
//# sourceMappingURL=commonHelpers.js.map
