import{a as m,S as p,i as n}from"./assets/vendor-CqoLp5UU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="58498705-656854ec8a48a3b3db88fa617",y="https://pixabay.com/api/";function h(i){return m.get(y,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <p>${t}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${s}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${d}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${f}</p>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function L(){c.innerHTML=""}function S(){u.classList.add("is-visible")}function q(){u.classList.remove("is-visible")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),S(),h(r).then(o=>{if(!o.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(()=>{n.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{q(),l.reset()})});
//# sourceMappingURL=index.js.map
