

const mainTitleCategory = document.querySelector('.category-books-list__title');
const categoryList = document.querySelector('.category-books-list__list');
const categoriesQuery = document.querySelector('.categories-list');
const topBooks = document.querySelector('.best-sellers');


categoriesQuery.addEventListener('click', onCategoryClick);


const URL = 'https://books-backend.p.goit.global/books/category';

function fetchCategory(query) {
  return fetch(`${URL}?category=${query}`).then(res => res.json());
}

function renderTargetCategory(categories) {
  const markup = categories
    .map(
      category => `
  <li data-id="${category._id}" class="category-books-list__item">
    <div class="card__container card">
        <div class="card__img-container">
            <img src="${category['book_image']}"        
            alt="${category.title}" class="card__img">
            <p class="img-hover">QUICK VIEW</p>
        </div>
         <div class="card__desc">
            <h3 class="card__heading">${category.title}</h3>
            <p class="card__author">${category.author}</p>
        </div>
    </div>
</li>
  `
    )
    .join('');

  categoryList.innerHTML = markup;
}

function getCategory(query) {
  fetchCategory(query).then(res => {
    renderTargetCategory(res);
  });
}

function onCategoryClick(e) {
  if(e.target.textContent == 'All categories'){
    topBooks.style.display = 'block';
    mainTitleCategory.innerHTML = '';
  }
  let value = e.target.textContent;
  let query = value.split(' ').join('%20');
  let categoryTitle = value.split(' ');
  console.log(value);
  categoryTitle[categoryTitle.length - 1] = `<span class="paintedWord">${
    categoryTitle[categoryTitle.length - 1]
  }</span>`;

  if (value.split(' ').includes('All')) {
    return;
  }

  mainTitleCategory.innerHTML = '';
  getCategory(query);
  topBooks.style.display = 'none';
  mainTitleCategory.insertAdjacentHTML('beforeend', categoryTitle.join(' '));
 
}
