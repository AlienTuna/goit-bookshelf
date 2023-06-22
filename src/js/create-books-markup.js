import { createCategoryMarkup } from './best-sellers';
const bestCategories = document.querySelector('.best-sellers');

//Відмальовка головної скції топ книжок
export function createGalleryItem(data) {
  const markup = `
    <h1 class="title-book">
      Best Sellers <span class="title-book-span">Books</span>
    </h1> <ul class="books-container"> ${data
      .map(elements => {
        return `
      <li class="books-list"> 
      <h3 class="books-list-title">${elements.list_name}</h3>
        <div class="books-card-container" data-list-id="${elements.list_name}">
          ${elements.books
            .map(book => {
              return `

            <a href="#" class="books-item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>
      
            <div class="books-card">
              <img
                src="${book.book_image}"
                alt="${book.title}"
                class="books-card-title-img"
                width="180"
                height="256"
                loading="lazy"
              />
              <div class="books-overlay">
                <p class="books-overlay-text">quick view</p>
              </div>
             </div> 
              <div class="books-descr">
                <h3 class="books-card-title">${book.title}</h3>
                <p class="books-card-author">${book.author}</p>
              </div>
           </a>
       `;
            })
            .join('')}
        </div>
        <button class="books-btn" type="button" data-id="${
          elements.list_name
        }">see more</button>
      </li>
      `;
      })
      .join('')}</ul>`;

  bestCategories.insertAdjacentHTML('beforeend', markup);

  const homeBooksBtn = document.querySelectorAll('.books-btn');
  const homeBookLink = document.querySelectorAll('.books-item-link');

  homeBooksBtn.forEach(btn => {
    btn.addEventListener('click', onSeeMoreBtn);
  });

  homeBookLink.forEach(book => {
    book.addEventListener('click', onBookClick);
  });
}

//Слухач на кнопку See more
export function onSeeMoreBtn(e) {
  const listId = e.target.dataset.id;
  createCategoryMarkup(listId);
}
 //Слухач на клік на книжку для відкриття модалки
export function onBookClick(e) {
  e.preventDefault();
  const bookId = e.currentTarget.dataset.id;
  // console.log(bookId);
}

//Рендер книжок що належать до однієї категорії
export function createAllBookInCategory(data) {
  const booksMarkup = data
    .map(
      book => `<a href="#" class="books-item-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>
      
            <div class="books-card">
              <img
                src="${book.book_image}"
                alt="${book.title}"
                class="books-card-title-img"
                width="180"
                height="256"
                loading="lazy"
              />
              <div class="books-overlay">
                <p class="books-overlay-text">quick view</p>
              </div>
             </div> 
              <div class="books-descr">
                <h3 class="books-card-title">${book.title}</h3>
                <p class="books-card-author">${book.author}</p>
              </div>
           </a>`
    )
    .join('');

  return booksMarkup;
}
