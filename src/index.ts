import { state } from './constants.js';
import {
  cartCount,
  clearModal,
  closeBtn,
  email,
  featured,
  featuredPage,
  infoContent,
  infoPage,
  itemCount,
  modal,
  modalContent,
  openModalBtn,
  recommendedPage,
  shopPage,
  total
} from './elements.js';
import { recommended } from './elements.js';
import { boxes } from './elements.js';
import { signUpPage, signInPage, fullName, password, signUp, signIn } from './elements.js';
import type { item } from './type.js';

function signInFunction() {
  signIn.addEventListener('click', function () {
    event?.preventDefault();
    const emailElm = email.value;
    const passwordElm = password.value;
    const inputElms = [emailElm, passwordElm];

    if (!emailElm || !passwordElm) {
      console.log('Ekranga qiymat kiriting');
      return;
    }
    if (emailElm.includes('@') && passwordElm.length > 6) {
      console.log(inputElms);
      email.value = '';
      password.value = '';
    } else {
      console.log('Gmailni tekshiring yoki parolni kopaytiring');
    }
  });
  renderModal();
}

function signUpFunction() {
  signUp.addEventListener('click', function () {
    event?.preventDefault();
    const nameElm = fullName.value;
    const emailElm = email.value;
    const passwordElm = password.value;
    const inputElms = [nameElm, emailElm, passwordElm];

    if (!nameElm || !emailElm || !passwordElm) {
      console.log('Ekranga qiymat kiriting');
      return;
    }
    if (emailElm.includes('@') && passwordElm.length > 6) {
      console.log(inputElms);
      fullName.value = '';
      email.value = '';
      password.value = '';
    } else {
      console.log('Gmailni tekshiring yoki parolni kopaytiring');
    }
  });
}

// Started Home Page

function renderFeatured() {
  let res = state.products
    .map((item, idx) => {
      if (idx >= 6) return '';
      return `<div class="border border-gray-300 cursor-pointer group" onclick='openInfo(${item.id})'>
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

function renderRecommend() {
  let res = state.products
    .map((item, idx) => {
      if (idx >= 4) {
        return `<div class="border border-gray-300 cursor-pointer group" onclick='openInfo(${item.id})'>
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

function renderShopHtml() {
  let res = state.products
    .map((item, idx) => {
      const data = localStorage.getItem('cartStorage');
      const cart = data ? (JSON.parse(data) as item[]) : [];
      let isInclude = cart.some(e => e.id === item.id);

      return `<div class="relative  border border-gray-300 cursor-pointer group overflow-hidden">
                  <div class='absolute top-0 right-[5px]'>${isInclude ? '✔️' : ''}</div>
                 <div onclick='openInfo(${item.id})'>
                <div class="bg-[#F6F6F6]">
                      <img class="w-[80%] block mx-auto group-hover:w-[50%] transition-all duration-500" src="../image/img${idx}.png" alt="">
                  </div>
                  <div class="text-center mt-5 mb-7 group-hover:-translate-y-2 transition-all duration-500">
                      <p class="text-[14px] font-medium">${item.name}</p>
                      <p class="text-[14px] font-medium italic text-gray-400 mt-4 mb-7">${item.brand}</p>
                      <p class="text-[20px] font-medium">$${item.price}</p>
                  </div>
                 </div>
                  <a href="#"><button class="absolute shop-card bottom-0 left-0 opacity-0 translate-y-5 z-30 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-full py-3 text-white bg-black" ${isInclude ? `onclick=removeModal(${item.id})` : `onclick=addModal(${item.id})`}>${isInclude ? `Remove from Cart` : `Add to Cart`}</button></a>
              </div>`;
    })
    .join('');

  boxes.innerHTML = res;
}

function renderInfo() {
  let id = Number(localStorage.getItem('infoId'));
  let idx = state.products.findIndex(e => e.id === id);
  let item = state.products[idx];
  const data = localStorage.getItem('cartStorage');
  const cart = data ? (JSON.parse(data) as item[]) : [];
  let isInclude = cart.some(e => e.id === id);
  console.log(isInclude);
  

  let res = `
  <div class="mx-auto flex h-[540px] w-[80%] justify-between border">
        <div class="h-full w-[150px] border bg-white p-2">
          <div class="border">
            <img src="${item.img}" alt="" />
          </div>
        </div>
        <div class="flex w-[400px] items-center justify-center">
          <img src="${item.img}" alt="" />
        </div>
        <div class="w-[47%] bg-white px-6 py-10">
          <h5 class="font-semibold text-[#818181]">${item.brand}</h5>
          <h4 class="mb-4 text-[25px] font-semibold">${item.name}</h4>
          <p class="mb-6 border-b pb-6 text-[12px] font-semibold text-[#4A4A4A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.
          </p>
          <form class="max-w-sm">
            <label for="countries" class="mb-5 block text-sm font-medium text-[#818181]">Lens Width and Frame Size</label>
            <select id="countries" class="block w-full cursor-pointer rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500">
              <option class="text-[#818181]" selected>--Select Size--</option>
              <option value="28">28 mm</option>
              <option value="36">36 mm</option>
              <option value="42">42 mm</option>
            </select>
          </form>

          <p class="mt-6 text-sm font-medium text-[#818181]">Choose Color</p>
          <div class="my-5 flex w-[60%] w-full justify-between">
            <div class="h-[30px] w-[30px] rounded-full bg-black"></div>
            <div class="h-[30px] w-[30px] rounded-full bg-[#C500C5]"></div>
            <div class="h-[30px] w-[30px] rounded-full bg-[#840309]"></div>
            <div class="h-[30px] w-[30px] rounded-full bg-[#004D84]"></div>
            <div class="h-[30px] w-[30px] rounded-full bg-[#753600]"></div>
            <div class="h-[30px] w-[30px] rounded-full bg-[#03D7FC]"></div>
            <div class="h-[30px] w-[30px] rounded-full bg-red-500"></div>
          </div>
          <p class="text-[30px] font-semibold">$ ${item.price}</p>
          ${
            isInclude ? `<button id="info-remove-cart" class="bg-black px-4 py-3 mt-6 text-[13px] font-semibold text-white">
            Remove From Cart
          </button> ` : `<button id="info-add-cart" class="bg-black px-4 py-3 mt-6 text-[13px] font-semibold text-white">
            Add To Cart
          </button>`
          }        
        </div>
      </div>
  
  `;

  infoContent.innerHTML = res.toString();
}

function renderModal() {
  const modalBody = document.querySelector('#modal-body') as HTMLDivElement;
  let t = 0;
  const data = localStorage.getItem('cartStorage');
  const cart = data ? (JSON.parse(data) as item[]) : [];
  console.log(cart);
  itemCount.innerText = `item( ${cart.length.toString()})`;

  cart.map(item => (t += item.price));

  total.innerText = t.toString();

  let res = cart
    .map((item, idx) => {
      return ` <div class="flex mb-2 w-full border gap-2" >
            <div >
              <div class="flex h-[50%] w-[30px] cursor-pointer items-center justify-center border"><i class="bi bi-plus"></i></div>
              <div class="flex h-[50%] w-[30px] cursor-pointer items-center justify-center border"><i class="bi bi-dash"></i></div>
            </div>
            <div class="flex h-[80px] items-center w-full pr-2 justify-between">
              <img class="w-[120px]" src="${item.img}" alt="" />
              <div>Kulangot</div>
              <div>${item.size}</div>
              <div class="w-[20px] h-[20px] bg-[${item.color}] rounded-full"></div>
              <div>$${item.price}</div>
              <button class="border px-2 " ><i onclick='removeModal(${item.id})' class="bi bi-x text-[25px]"></i></button>
            </div>
          </div>
    
    `;
    })
    .join('');

  modalBody.innerHTML = cart.length > 0 ? res.toString() : `<div class='w-full h-full flex justify-center items-center'><h1 class='text-4xl'>Cart is empty</h1></div>`;
}

// Shop Started

function openInfo(id: number) {
  localStorage.setItem('infoId', id.toString());
  window.location.href = './info.html';
}

function addModal(id: number) {
  let idx = state.products.findIndex(e => e.id === id);
  const data = localStorage.getItem('cartStorage');
  const cart = data ? (JSON.parse(data) as item[]) : [];
  state.cart.push(state.products[idx]);
  cart.push(state.products[idx]);
  itemCount.innerText = `item( ${cart.length.toString()})`;
  cartCount.innerText = cart.length.toString();
  localStorage.setItem('cartStorage', JSON.stringify(cart));
  console.log(cart);

  if(infoContent) {
    renderInfo()
    renderModal();
  }
  else {
    renderModal();
    renderShopHtml();
  }
}

function removeModal(id: number) {
  const data = localStorage.getItem('cartStorage');
  const cart = data ? (JSON.parse(data) as item[]) : [];
  let idx = cart.findIndex(e => e.id === id);
  state.cart.splice(idx, 1);
  cart.splice(idx, 1);
  itemCount.innerText = `item( ${cart.length.toString()})`;
  cartCount.innerText = cart.length.toString();

  localStorage.setItem('cartStorage', JSON.stringify(cart));
  console.log(cart);

  if(infoContent) {
    renderInfo()
  }
  else {
    renderModal();
    renderShopHtml();
  }
}

function openModal() {
  modal.classList.replace('scale-0', 'scale-1');
  modalContent.classList.replace('w-0', 'w-[40%]');

  renderModal();
}

function closeModal() {
  modal.classList.replace('scale-1', 'scale-0');
  modalContent.classList.replace('w-[40%]', 'w-0');
}

function addListeners() {
  const data = localStorage.getItem('cartStorage');
  const cart = data ? (JSON.parse(data) as item[]) : [];
  cartCount.innerText = cart.length.toString();
  const infoAddCart = document.querySelector('#info-add-cart') as HTMLButtonElement;
  const infoRemoveCart = document.querySelector('#info-remove-cart') as HTMLButtonElement;

  infoAddCart?.addEventListener('click', () => {
    let id = Number(localStorage.getItem('infoId'));
    addModal(id);
    renderInfo();
    console.log('add');
    
  });
  infoRemoveCart?.addEventListener('click', () => {
    let id = Number(localStorage.getItem('infoId'));
    removeModal(id);
    renderInfo();
    console.log('remove');
    
  });
  openModalBtn.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  clearModal?.addEventListener('click', () => {
    localStorage.setItem('cartStorage', JSON.stringify([]))
    renderModal();
    renderShopHtml();
    cartCount.innerText = '0';
  });
}

function renderFunction() {
  renderFeatured();
  renderRecommend();
}

function init() {
  if (signInPage) {
    signInFunction();
  } else if (signUpPage) {
    signUpFunction();
  } else if (shopPage) {
    renderShopHtml();
  } else if (featuredPage) {
    renderFeatured();
  } else if (recommendedPage) {
    renderRecommend();
  } else if (infoPage) {
    renderInfo();
  } else {
    renderFunction();
  }
  addListeners();
}

window.addEventListener('load', init);

(window as any).addModal = addModal;
(window as any).removeModal = removeModal;
(window as any).openInfo = openInfo;
