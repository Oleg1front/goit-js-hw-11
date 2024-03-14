import"./assets/vendor-86291ea8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function c(l){const r="42869495-3eaffa1d7f59c13a6a9af4ac7",i=l.value,t=`https://pixabay.com/api/?key=${r}&q=${i}&orientation=horizontal&safesearch=true`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function n(l){const r=document.querySelector(".gallery"),i=l.map(t=>`<li class="gallery-list-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-list-item-img"        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Likes</p>
                    <p class ="gallery-list-item-text">${t.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Views</p>
                    <p class ="gallery-list-item-text">${t.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Comments</p>
                    <p class ="gallery-list-item-text">${t.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text">Downloads </p>
                    <p class ="gallery-list-item-text">${t.downloads}</p>
                </div>
            </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",i)}const o=document.querySelector(".form"),p=document.querySelector(".search-input");document.querySelector(".start-btn");o.addEventListener("submit",l=>{l.preventDefault(),c(p).then(({hits:r})=>{n(r)}).catch(r=>console.log(r)),o.reset()});
//# sourceMappingURL=commonHelpers.js.map
