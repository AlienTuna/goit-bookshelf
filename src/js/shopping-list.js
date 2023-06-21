import { Loading } from 'notiflix';

const shopList = document.querySelector('.js-shop-list'); //list on link where adding books images
const shopBgd = document.querySelector('.js-shop-background'); //link div with base img

shopList.addEventListener('click', onBtnTrashClick);

let data = JSON.parse(localStorage.getItem('storage-data')); // get from localStorage

renderBookCard(data); // calling function render card 

// function render card this books from the local storage

function renderBookCard(array) {
  if (!array || array.length === 0) {
    // if the local storage is empty then get out from function
    return;
  }
  if (shopBgd) {
    shopBgd.setAttribute('hidden', ''); //adding to base img atribute hidden 
  }

  if (shopList) {
    const markup = array
      .map(el => {
        return ` <li id=${el.id} class="shop-item-book">
      <img class="shop-book-img" alt="Wrapper of book" src="${el.book_image}" />
            <div class="shop-info-book">
              <h2 class="shop-secondary-title">${el.title}</h2>
              <p class="shop-category">${el.list_name}</p>
              <p class="shop-desc">${el.description}</p>
              <div class="shop-author-wrapper">
                <p class="shop-author">${el.author}</p>
                <ul class="shop-platform-list">
                  <li>
                    <a href="${el.marketAmazon}" class="shop-link-amazon" noopener noreferrer>
                                         </a>
                  </li>
                  <li>

                    <a href="${el.marketAppleBooks}" class="shop-link-applebook" noopener noreferrer>
                      </a>

                  </li>
                  <li>
                    <a href="${el.marketBookshop}" class="shop-link-bookshop">
                      </a>
                   
                  </li>
                </ul>
              </div>
            </div>
             <button type="button" class="shop-delete-btn js-delete-btn">
                    </button>
          </li>`;
      })
      .join('');

    return shopList.insertAdjacentHTML('beforeend', markup);
  }
}

function onBtnTrashClick(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    const id = evt.target.parentNode.getAttribute('id');
    removeBookFromLocalStorage(id);
  }
}

function removeBookFromLocalStorage(bookId) {
  const data = JSON.parse(localStorage.getItem('storage-data'));
  const newData = data.filter(({ id }) => id !== bookId);
  localStorage.setItem('storage-data', JSON.stringify(newData));
  shopList.innerHTML = '';
  renderBookCard(newData);
  if (!newData || newData.length === 0) {
    shopBgd.removeAttribute('hidden', '');
  }
}