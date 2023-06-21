

// =====================================================
const backDrop = document.querySelector('.backdrop')
const modalField = document.querySelector(".modal");
const closeBtn = document.querySelector('.modal__close-btn')
const addBookBtn = document.querySelector('.add-bookBtn')
const notification = document.querySelector('.notification')
const removeNotification = document.querySelector('.removeNotification')
const addNotification = document.querySelector('.addNotification')
let modalContent = document.querySelector('.modal__content')
const storegeArr = [];






addBookBtn.addEventListener('click', onAddBookClick)
closeBtn.addEventListener('click', onBtnCloseClick)

function fetchCategory(id) {
  return fetch(
    `https://books-backend.p.goit.global/books/${id}`
  ).then((res) => res.json());
}

function renderTargetCategory(id) {
  const markup = `
    <div class="modal__content">
      <div class="modal__img-container">
        <img src="${id.book_image}" alt="${id.title}" class="modal__img">
      </div>
      <div class="modal__desc">
        <h2 class="modal__title">${id.title}</h2>
        <p class="modal__author">${id.author}</p>
        <p class="modal__book-desc">${id.description}</p>
        <ul class="modal__list">
          <li class="modal__item"><a href="${id.buy_links[0].url}" class="amazon-link"><img src="/amazon.svg" alt=""></a></li>
          <li class="modal__item"><a href="${id.buy_links[1].url}" class="app-book"><img src="/appbook.svg" alt=""></a></li>
          <li class="modal__item"><a href="${id.buy_links[3].url}" class="book-shop"><img src="/bookshop.svg" alt=""></a></li>
        </ul>
      </div>
</div>

    `

  addBookBtn.insertAdjacentHTML('beforebegin', markup)
  modalContent = document.querySelector('.modal__content')
 
}

function getCategory(id) {
  
  fetchCategory(id).then((res) => {
    renderTargetCategory(res);

    

    storegeArr.push(res)
  });

}



function onBtnCloseClick(){
  backDrop.classList.add('is-hidden')
 
}



function onAddBookClick(res) {
  notification.classList.toggle('hidden')
  removeNotification.classList.toggle('hidden')
  addNotification.classList.toggle('hidden')

}
const bestSellerRef = document.querySelector('.best-sellers')
const categoriesRef = document.querySelector('.category-books-list')

bestSellerRef.addEventListener('click', onCardClick)
categoriesRef.addEventListener('click', onCardClick)

function onCardClick(e) {

const card = e.target
const el = card.closest('[data-id]')
const id = el.dataset.id


getCategory(id);
backDrop.classList.remove('is-hidden')
}