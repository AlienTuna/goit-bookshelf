// =====================================================
const backDrop = document.querySelector('#book-modal');
const closeBtn = document.querySelector('.modal__close-btn');
const addBookBtn = document.querySelector('.add-bookBtn');
const notification = document.querySelector('.notification');
const removeNotification = document.querySelector('.removeNotification');
const addNotification = document.querySelector('.addNotification');
let modalContent = document.querySelector('.modal__content');
let idToLocaleStorege = null;
let arrToLocaleStoreg = []
addBookBtn.addEventListener('click', onAddBookClick);
closeBtn.addEventListener('click', onBtnCloseClick);

function fetchCategory(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(res =>
    res.json()
  );
}

function renderTargetCategory(id) {
  const markup = `
    
      <div class="modal__img-container">
        <img src="${id.book_image}" alt="${id.title}" class="modal__img">
      </div>
      <div class="modal__desc">
        <h2 class="modal__title">${id.title}</h2>
        <p class="modal__author">${id.author}</p>
        <p class="modal__book-desc">${id.description}</p>
        <ul class="modal__list">
          <li class="modal__item"><a href="${id.buy_links[0].url}" class="amazon-link"><img src="/src/images/svg/amazon.svg"></a></li>
          <li class="modal__item"><a href="${id.buy_links[1].url}" class="app-book-link"><img src="src/images/svg/applebook.svg"></a></li>
          <li class="modal__item"><a href="${id.buy_links[3].url}" class="book-shop-link"><img src="src/images/svg/bookshop.svg"></a></li>
        </ul>
      
</div>

    `;

    modalContent.innerHTML = ''
    modalContent.innerHTML = markup
}

function getCategory(id) {
  fetchCategory(id).then(res => {
    renderTargetCategory(res);

    storegeArr.push(res);
  });
}

function onBtnCloseClick() {
  backDrop.classList.add('is-hidden');
}


const bestSellerRef = document.querySelector('.best-sellers');
const categoriesRef = document.querySelector('.category-books-list');
console.log(bestSellerRef);
bestSellerRef.addEventListener('click', onCardClick);
categoriesRef.addEventListener('click', onCardClick);

function onCardClick(e) {
  const card = e.target;
  const el = card.closest('[data-id]');
  const id = el.dataset.id;
idToLocaleStorege = id
  getCategory(id);
  backDrop.classList.remove('is-hidden');

}

function onAddBookClick(res) {
  
  notification.classList.toggle('hidden');
  removeNotification.classList.toggle('hidden');
  addNotification.classList.toggle('hidden');
//    console.log(addNotification.classList.contains('hidden'))
//  console.log(removeNotification.classList.contains('hidden'))

if(addNotification.classList.contains('hidden')){
arrToLocaleStoreg.push(idToLocaleStorege)
// console.log(arrToLocaleStoreg)
localStorage.setItem('shopping-list', JSON.stringify(arrToLocaleStoreg))
} 
if(removeNotification.classList.contains('hidden')) {
  const arrTofilter = JSON.parse(localStorage.getItem('shopping-list')) 
  const filtredArr = arrTofilter.filter(id => id !== idToLocaleStorege)
  localStorage.setItem("shopping-list", JSON.stringify(filtredArr))
}

}