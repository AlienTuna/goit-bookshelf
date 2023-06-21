import BookshelfApi from "../bookshelf-api";
import 'simplebar';
import 'simplebar/dist/simplebar.css';

//ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

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
        
        const markup = '<li class="categories-list-item" selected="true">All categories</li>' 
        + resultJson.data.map(item => `
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
function onCategoryClick(e) {
    if(e.target.nodeName !== 'LI') {
        return;
    }

    const prev = document.querySelectorAll('.categories-list-item[selected="true"]');
    prev.forEach(element => element.removeAttribute('selected'));
    e.target.setAttribute('selected', 'true')
    
    return e.target.textContent
}