import Axios from 'axios';

const bestCategories = document.querySelector('.best-wrapper-category');

async function fetchBestBooks() {
  try {
    const { data } = await Axios(
      'https://books-backend.p.goit.global/books/top-books',
      {}
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function createGalleryItem() {
  const data = await fetchBestBooks();
  const markup = `
    ${data
      .map(elements => {
        return `
      <li class="books-list"> 
      <h3 class="books-list-title">${elements.list_name}</h3>
        <div class="books-card-container">
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
      
              />
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

}
createGalleryItem();
