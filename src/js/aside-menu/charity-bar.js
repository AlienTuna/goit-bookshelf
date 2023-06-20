import charityList from "./charity-list";
import SimpleLightbox from "simplelightbox"

const charityListEl = document.querySelector('.charity-list');

renderCharityBar(charityList);

const lightbox = new SimpleLightbox('.gallery a', { 
  
});

function renderCharityBar(charityList) {
  const markup = charityList.map(item => `
  <li class="charity-list-item">
    <a href="${item.url}">
      <img class="charity-fond-img" srcset="${item.img}" alt="${item.title}">
    </a>
  </li>
  `).join('');
  charityListEl.insertAdjacentHTML('beforeend',markup);
  return;
}

/*
      <img srcset="./images/charity-fonds/1@1x.png 2x,
      ./images/charity-fonds/1@1x.png 1x
      " alt="${item.title}">
      */