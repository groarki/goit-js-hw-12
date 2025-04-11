import{a as g,S as $,i as h}from"./assets/vendor-BBSqv8W6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();g.defaults.baseURL="https://pixabay.com/api/";async function y(r,t){const i={params:{key:"49664766-1adf2829ec799385f1aed5797",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}},{data:s}=await g.get("/",i);return s}const v=document.querySelector(".loader"),L=document.querySelector(".gallery"),b=document.querySelector(".loadMore"),C=document.querySelector(".endText");function u(r){const t=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:n,views:q,comments:M,downloads:x})=>`<li class="galleryItem">
            <div class="imgCont">
              <a class="gallery-link" href="${e}">
              <img src="${s}" alt="${o}" class="photo" />
              </a>
              <div class="photoDetails">
                <div class="detailCont">
                  <p>Likes</p>
                  <p>${n}</p>
                </div>
                <div class="detailCont">
                  <p>Views</p>
                  <p>${q}</p>
                </div>
                <div class="detailCont">
                  <p>Comments</p>
                  <p>${M}</p>
                </div>
                <div class="detailCont">
                  <p>Downloads</p>
                  <p>${x}</p>
                </div>
              </div>
            </div>
          </li>`).join("");L.insertAdjacentHTML("beforeend",t),new $(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function d(){L.innerHTML=""}function O(){v.classList.add("loader")}function l(){v.classList.remove("loader")}function w(){b.classList.remove("hidden")}function p(){b.classList.add("hidden")}function P(){C.classList.remove("text-hidden")}const m=document.querySelector(".form"),S=m.querySelector('input[name="search-text"]'),f=document.querySelector(".loadMore");let a=1,c;l();p();m.addEventListener("submit",r=>{r.preventDefault(),c=S.value.trim(),a=1,O(),c!==""&&y(c,a).then(t=>{if(t.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.reset(),d(),l();return}d(),u(t.hits),l(),w()}).catch(t=>{d(),l(),h.error({message:"Sorry, something went wrong!",position:"topRight"}),console.log(t)})});f.addEventListener("click",T);async function T(){f.disabled=!0,p(),a++,c=S.value.trim();try{const r=await y(c,a);if(a>=r.totalHits/15){u(r.hits),p(),P();return}u(r.hits),setTimeout(()=>{const i=document.querySelector(".galleryItem").getBoundingClientRect().height*2;window.scrollBy({top:i,left:0,behavior:"smooth"}),f.disabled=!1,w()},100)}catch(r){console.log(r)}}
//# sourceMappingURL=index.js.map
