import BookshelfApi from "../bookshelf-api";

const api = new BookshelfApi;

const categoriesListEl = document.querySelector('.categories-list');




export let categoriesMenu = renderCategoriesMenu()


async function renderCategoriesMenu() {
    try {
        const resultJson = await api.fetchCategoriesList();

        if(resultJson < 1) {
            categoriesListEl.innerHTML = 'Sorry we didn`t find anything'
            return;
        }
        
        const markup = resultJson.data.map(item => `
        <li class="categories-list-item">${item.list_name}</li>
        `).join('');

        categoriesListEl.insertAdjacentHTML('beforeend',markup);

        return resultJson.data;

    } catch (error) {
        categoriesListEl.innerHTML = `${error}`
            return;        
    }
}




categoriesListEl.addEventListener('click', onCategoryClick);
function onCategoryClick(e) {console.log(e.target.textContent)}