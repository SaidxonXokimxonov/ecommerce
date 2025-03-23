import { state } from './constants.js';
import { featured } from './elements.js';
import { recommended } from './elements.js';
import { boxes } from './elements.js';

// Started Home Page

function renderFeatured(){
    let res = state.products
    .map((item, idx) => {
      if (idx >= 6) return "";
      return `<div class="border border-gray-300 cursor-pointer group">
                <div class="bg-[#F6F6F6]">
                    <img class="w-[80%] block mx-auto group-hover:scale-110 transition-transform duration-300" src="../image/img${idx}.png" alt="">
                </div>
                <div class="px-5 mt-5 mb-7">
                    <p class="text-[24px] font-medium">${item.name}</p>
                    <p class="text-[18px] font-medium italic text-gray-400 my-2">${item.brand}</p>
                </div>
            </div>`;
    })
    .join('');

    featured.innerHTML = res;
}

function renderRecommend(){
    let res = state.products
    .map((item, idx) => {
      if (idx >= 4) {
          return `<div class="border border-gray-300 cursor-pointer group">
                    <div class="bg-[#F6F6F6]">
                        <img class="w-[80%] block mx-auto group-hover:scale-110 transition-transform duration-300" src="../image/img${idx}.png" alt="">
                    </div>
                    <div class="px-5 mt-5 mb-7">
                        <p class="text-[24px] font-medium">${item.name}</p>
                        <p class="text-[18px] font-medium italic text-gray-400 my-2">${item.brand}</p>
                    </div>
                </div>`;
      }
    })
    .join('');

    recommended.innerHTML = res;
}


// Shop Started

function renderShopHtml() {
    let res = state.products
    .map((item, idx) => {
        return `<div class="relative border border-gray-300 cursor-pointer group overflow-hidden">
                  <div class="bg-[#F6F6F6]">
                      <img class="w-[80%] block mx-auto group-hover:w-[50%] transition-all duration-500" src="../image/img${idx}.png" alt="">
                  </div>
                  <div class="text-center mt-5 mb-7 group-hover:-translate-y-2 transition-all duration-500">
                      <p class="text-[14px] font-medium">${item.name}</p>
                      <p class="text-[14px] font-medium italic text-gray-400 mt-4 mb-7">${item.brand}</p>
                      <p class="text-[20px] font-medium">${item.price}</p>
                  </div>
                  <a href="#"><button class="absolute bottom-0 left-0 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-full py-3 text-white bg-black">Add to basket</button></a>
              </div>`;
      })
      .join('');
  
    boxes.innerHTML = res;
}

// Render Functions

function renderFunction(){
    renderFeatured();
    renderRecommend();
    renderShopHtml();
}


renderFunction();