import axios from 'axios';

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
  <li id="${category._id}" class="category-books-list__item">
    <div class="card__container card">
        <div class="card__img-container">
            <img src="${category['book_image']}"        
            alt="${category.title}" class="card__img">
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
    console.log(res);
  });
}

function onCategoryClick(e) {
  let value = e.target.textContent;
  let query = value.split(' ').join('%20');
  let categoryTitle = value.split(' ');
  
  categoryTitle[categoryTitle.length - 1] = `<span class="paintedWord">${categoryTitle[categoryTitle.length - 1]}</span>`
console.log(categoryTitle.join(''))
mainTitleCategory.innerHTML = ''
  getCategory(query);
  topBooks.style.display = 'none';
  mainTitleCategory.insertAdjacentHTML('beforeend',categoryTitle.join(' '))

}
