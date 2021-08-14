
import axios from 'axios';

const baseURL2 = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=";

const KEY = "wfShq9i9bbJXOyQzHxUKg1FCSftgjdjn";
const url2 = "/lists/current/hardcover-fiction.json";

const booksClient = axios.create({
    baseURL: baseURL2 + KEY,
    headers: { "Content-Type": "application/json" },

})

export default booksClient;
