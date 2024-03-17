import{i as c,s as n}from"./assets/vendor-87962f58.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function p(l){const t="42869495-3eaffa1d7f59c13a6a9af4ac7",i=l.value,r=`https://pixabay.com/api/?key=${t}&q=${i}&orientation=horizontal&safesearch=true`;if(i!=="")return fetch(r).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function u(l){const t=document.querySelector(".gallery"),i=l.map(r=>`<li class="gallery-list-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-list-item-img" src="${r.webformatURL}" alt="${r.tags}" />        
        </a>
            <div class="text-wrapper">
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Likes</p>
                    <p class ="gallery-list-item-text">${r.likes}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Views</p>
                    <p class ="gallery-list-item-text">${r.views}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Comments</p>
                    <p class ="gallery-list-item-text">${r.comments}</p>
                </div>
                <div class="item-text-wrapper">
                    <p class ="gallery-list-item-text-1">Downloads </p>
                    <p class ="gallery-list-item-text">${r.downloads}</p>
                </div>
            </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",i)}const o=document.querySelector(".form"),d=document.querySelector(".search-input");document.querySelector(".start-btn");const m=document.querySelector(".gallery");o.addEventListener("submit",l=>{m.innerHTML="",l.preventDefault(),p(d).then(({hits:t})=>{t.length===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),u(t)}).catch(t=>console.log(t)),o.reset()});const f=new n(".gallery-list-item a",{});f.refresh();
//# sourceMappingURL=commonHelpers.js.map
