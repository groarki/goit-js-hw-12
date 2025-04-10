import{a as m,S as x,i as f}from"./assets/vendor-BBSqv8W6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();m.defaults.baseURL="https://pixabay.com/api/";async function h(r,o){const n={params:{key:"49664766-1adf2829ec799385f1aed5797",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}},{data:i}=await m.get("/",n);return i}const g=document.querySelector(".loader"),y=document.querySelector(".gallery"),v=document.querySelector(".loadMore");function L(r){const o=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:s,views:M,comments:q,downloads:$})=>`<li class="galleryItem">
            <div class="imgCont">
              <a class="gallery-link" href="${e}">
              <img src="${i}" alt="${t}" class="photo" />
              </a>
              <div class="photoDetails">
                <div class="detailCont">
                  <p>Likes</p>
                  <p>${s}</p>
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
                  <p>${$}</p>
                </div>
              </div>
            </div>
          </li>`).join("");y.insertAdjacentHTML("beforeend",o),new x(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function d(){y.innerHTML=""}function C(){g.classList.add("loader")}function c(){g.classList.remove("loader")}function b(){v.classList.remove("hidden")}function S(){v.classList.add("hidden")}const u=document.querySelector(".form"),w=u.querySelector('input[name="search-text"]'),p=document.querySelector(".loadMore");let l=1,a;c();S();u.addEventListener("submit",r=>{r.preventDefault(),a=w.value.trim(),l=1,C(),a!==""&&h(a,l).then(o=>{if(o.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.reset(),d(),c();return}d(),L(o.hits),c(),b()}).catch(o=>{d(),c(),f.error({message:"Sorry, something went wrong!",position:"topRight"}),console.log(o)})});p.addEventListener("click",O);async function O(){p.disabled=!0,S(),l++,a=w.value.trim();try{const r=await h(a,l);L(r.hits),p.disabled=!1,b()}catch(r){console.log(r)}}
//# sourceMappingURL=index.js.map
