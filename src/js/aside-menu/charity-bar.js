import charityList from "/src/js/aside-menu/charity-list";

const charityListEl = document.querySelector('.charity-list');
const downBtn = document.querySelector('.charity-slider-btn');

renderCharityBar(charityList);

const slider = tns({
  nav: false,
  container: '.my-slider.charity-list',
  axis: 'vertical',
  speed: 400,
  controls: false,
  nextButton: '.charity-slider-btn',
  controlsContainer: false,
  rewind: true,
  mouseDrag: true,
  responsive: {
    375: {
      items: 4,
    },
    768: {
      items: 6,
    },
  }
})
downBtn.onclick = function () {
  slider.goTo('next');
};
function renderCharityBar(charityList) {
  const markup = charityList.map(item => `
  <li class="charity-list-item">
    <a href="${item.url}" target="_blank">
      <img class="charity-fond-img" srcset="${item.img}" alt="${item.title}">
    </a>
  </li>
  `).join('');
  charityListEl.insertAdjacentHTML('beforeend',markup);
  return;
}
