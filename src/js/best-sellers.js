import { getBestBooks, getCategoryBooks } from './get-books';
import {
  createGalleryItem,
  createAllBookInCategory,
  onBookClick,
} from './create-books-markup';

async function createMarkup() {
  const data = await getBestBooks();
  createGalleryItem(data);
}

createMarkup();

//Функція для реалізації підвантаження та перемалювання на кнопку See more
export async function createCategoryMarkup(category) {
  const data = await getCategoryBooks(category);
  const categoryListById = document.querySelector(
    `[data-list-id="${category}"]`
  );
  categoryListById.innerHTML = createAllBookInCategory(data);
  categoryListById.classList.add('active');
  categoryListById.nextElementSibling.style.display = 'none';
  categoryListById.childNodes.forEach(book =>
    book.addEventListener('click', onBookClick)
  );
  categoryListById.previousElementSibling.classList.add('active');
}

export { bestCategories };