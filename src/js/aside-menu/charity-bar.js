import charityList from "./charity-list";

const charityListEl = document.querySelector('.charity-list');

renderCharityBar(charityList);


function renderCharityBar(charityList) {
  const markup = charityList.map(item => `
  <li class="charity-list-item">
    <a href="${item.url}">
      <img src="${item.img}" alt="${item.title}">
    </a>
  </li>
  `).join('');
  charityListEl.insertAdjacentHTML('beforeend',markup);
  return;
}