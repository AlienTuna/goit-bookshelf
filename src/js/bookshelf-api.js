const axios = require('axios').default;
const API_URL = 'https://books-backend.p.goit.global/books/';

export default class BookshelfApi {
    constructor() {}
    async fetchCategoriesList() {
        try {
            const url = API_URL + 'category-list'
            const response = await axios.get(url)
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}