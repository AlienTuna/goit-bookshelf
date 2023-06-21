import Axios from 'axios';

//Запит на топ книжок
export async function getBestBooks() {
  try {
    const { data } = await Axios(
      'https://books-backend.p.goit.global/books/top-books',
      {}
    );
    return data;
  } catch (error) {
    alert(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}

//Запит на книжки по категорії
export async function getCategoryBooks(category) {
  try {
    const { data } = await Axios(
      `https://books-backend.p.goit.global/books/category?category=${category}`,
      {}
    );
    return data;
  } catch (error) {
    alert(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}
