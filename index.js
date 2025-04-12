import{a as g,S as $,i as h}from"./assets/vendor-BBSqv8W6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();g.defaults.baseURL="https://pixabay.com/api/";async function y(r,t){const i={params:{key:"49664766-1adf2829ec799385f1aed5797",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}},{data:s}=await g.get("/",i);return s}const v=document.querySelector(".loader"),L=document.querySelector(".gallery"),b=document.querySelector(".loadMore"),C=document.querySelector(".endText");function p(r){const t=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:a,views:M,comments:q,downloads:x})=>`<li class="galleryItem">
            <div class="imgCont">
              <a class="gallery-link" href="${e}">
              <img src="${s}" alt="${o}" class="photo" />
              </a>
              <div class="photoDetails">
                <div class="detailCont">
                  <p>Likes</p>
                  <p>${a}</p>
                </div>
                <div class="detailCont">
                  <p>Views</p>
                  <p>${M}</p>
                </div>
                <div class="detailCont">
                  <p>Comments</p>
                  <p>${q}</p>
                </div>
                <div class="detailCont">
                  <p>Downloads</p>
                  <p>${x}</p>
                </div>
              </div>
            </div>
          </li>`).join("");L.insertAdjacentHTML("beforeend",t),new $(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function u(){L.innerHTML=""}function O(){v.classList.remove("hidden")}function d(){v.classList.add("hidden")}function w(){b.classList.remove("hidden")}function n(){b.classList.add("hidden")}function T(){C.classList.remove("text-hidden")}const m=document.querySelector(".form"),S=m.querySelector('input[name="search-text"]'),f=document.querySelector(".loadMore");let c=1,l;d();n();m.addEventListener("submit",r=>{r.preventDefault(),l=S.value.trim(),c=1,O(),hideEndText(),l!==""&&y(l,c).then(t=>{if(t.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.reset(),u(),d(),n();return}else Math.ceil(t.totalHits/15)===1&&n();u(),p(t.hits),d(),w()}).catch(t=>{u(),d(),h.error({message:"Sorry, something went wrong!",position:"topRight"}),console.log(t),n()})});f.addEventListener("click",H);async function H(){f.disabled=!0,n(),c++,l=S.value.trim();try{const r=await y(l,c);if(c>=Math.ceil(r.totalHits/15)){p(r.hits),n(),T();return}p(r.hits),setTimeout(()=>{const i=document.querySelector(".galleryItem").getBoundingClientRect().height*2;window.scrollBy({top:i,left:0,behavior:"smooth"}),f.disabled=!1,w()},100)}catch(r){console.log(r)}}
//# sourceMappingURL=index.js.map
