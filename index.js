import{a as g,S as $,i as h}from"./assets/vendor-BBSqv8W6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/";async function y(o,t){const i={params:{key:"49664766-1adf2829ec799385f1aed5797",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}},{data:s}=await g.get("/",i);return s}const v=document.querySelector(".loader"),L=document.querySelector(".gallery"),b=document.querySelector(".loadMore"),C=document.querySelector(".endText");function p(o){const t=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:M,comments:q,downloads:x})=>`<li class="galleryItem">
            <div class="imgCont">
              <a class="gallery-link" href="${e}">
              <img src="${s}" alt="${r}" class="photo" />
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
          </li>`).join("");L.insertAdjacentHTML("beforeend",t),new $(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function u(){L.innerHTML=""}function O(){v.classList.remove("hidden")}function d(){v.classList.add("hidden")}function w(){b.classList.remove("hidden")}function n(){b.classList.add("hidden")}function H(){C.classList.remove("text-hidden")}const m=document.querySelector(".form"),S=m.querySelector('input[name="search-text"]'),f=document.querySelector(".loadMore");let l=1,c;d();n();m.addEventListener("submit",o=>{o.preventDefault(),c=S.value.trim(),l=1,O(),c!==""&&y(c,l).then(t=>{if(t.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.reset(),u(),d(),n();return}else Math.ceil(t.totalHits/15)===1&&n();u(),p(t.hits),d(),w()}).catch(t=>{u(),d(),h.error({message:"Sorry, something went wrong!",position:"topRight"}),console.log(t),n()})});f.addEventListener("click",P);async function P(){f.disabled=!0,n(),l++,c=S.value.trim();try{const o=await y(c,l);if(console.log(o),l>=Math.ceil(o.totalHits/15)){p(o.hits),n(),H();return}p(o.hits),setTimeout(()=>{const i=document.querySelector(".galleryItem").getBoundingClientRect().height*2;window.scrollBy({top:i,left:0,behavior:"smooth"}),f.disabled=!1,w()},100)}catch(o){console.log(o)}}
//# sourceMappingURL=index.js.map
