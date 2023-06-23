import { Loading } from 'notiflix';
const shopList = document.querySelector('.js-shop-list'); //list on link where adding books images
const shopBgd = document.querySelector('.js-shop-background'); //link div with base img
let data = JSON.parse(localStorage.getItem('shopping-list')); // get from localStorage

let cardRef = null;

if (data.length !== 0) {
  renderBookCard(data); // calling function render card
  shopBgd.classList.add('hidden');
  
}


function fetchFromLocalStorage(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(book =>
    book.json()
  );
}

// function render card this books from the local storage

function renderBookCard(array) {
  if (array.length === 0) {
    // if the local storage is empty then get out from function
    return;
  }
  // if (shopBgd) {
  //   shopBgd.setAttribute('hidden', ''); //adding to base img atribute hidden
  // }

  // if (shopList) {
  const markup = array
    .map(id => {
      fetchFromLocalStorage(id).then(res => {
        const card = `<li data-id=${res._id} class="shop-item-book">
    <img class="shop-book-img" alt="Wrapper of book" src="${res.book_image}" />
          <div class="shop-info-book">
            <h2 class="shop-secondary-title">${res.title}</h2>
            <p class="shop-category">${res.list_name}</p>
            <p class="shop-desc">${res.description}</p>
            <div class="shop-author-wrapper">
              <p class="shop-author">${res.author}</p>
              <ul class="shop-platform-list">
                <li>
                  <a href="${res.buy_links[0].url}" class="shop-link-amazon" noopener noreferrer>
                                       </a>
                </li>
                <li>

                  <a href="${res.buy_links[1].url}" class="shop-link-applebook" noopener noreferrer>
                    </a>

                </li>
                <li>
                  <a href="${res.buy_links[4].url}" class="shop-link-bookshop">
                    </a>
                 
                </li>
              </ul>
            </div>
          </div>
           <button type="button" class="shop-delete-btn js-delete-btn">
                  </button>
        </li>`;
        shopList.insertAdjacentHTML('beforeend', card);
        cardRef = document.querySelector(`.shop-item-book`);
        // console.log(cardRef);
        return card;
      });
    })
    .join('');
  shopList.addEventListener('click', onBtnTrashClick);
  shopList.innerHTML = '';
  return shopList.insertAdjacentHTML('beforeend', markup);
}
// }

function onBtnTrashClick(evt) {
  const element = evt.target.closest('[data-id]');
  const id = element.dataset.id;
// console.log(id)
if(evt.target.classList.contains('shop-delete-btn')){
  const card = evt.target.closest('[data-id]')

  card.classList.add('hidden')
  removeBookFromLocalStorage(id)


}


}

function removeBookFromLocalStorage(bookId) {
 data = JSON.parse(localStorage.getItem('shopping-list'));

  const filtredArr = data.filter(card => card !== bookId)
  localStorage.setItem('shopping-list', JSON.stringify(filtredArr))
  const check = JSON.parse(localStorage.getItem('shopping-list'));

if (check.length < 1) {
  showDefaultBg();
}
  
}

function showDefaultBg() {
    shopBgd.classList.remove('hidden');
    shopList.classList.add('hidden');
    return;
}