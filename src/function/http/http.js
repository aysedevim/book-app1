import axios from 'axios';

const url = 'https://books-f356a-default-rtdb.firebaseio.com/';

export async function getBooks() {
    const response = await axios.get(url + 'books.json') //asenkron tanımlarsak awaitte bekler. Bu satırdaki işlem tamamlanmadan diğer satıra geçmez.

    const books = [];

    for (const key in response.data) {
        const bookObj = {
            id: key,
            author: response.data[key].author,
            description: response.data[key].description,
            bookname: response.data[key].bookname,
            picture: response.data[key].picture,
            recyled: response.data[key].recyled

        };
        books.push(bookObj);
    }
    return books;
}
export async function addBook(book) {
    const response = await axios.post(url + 'books.json', book);
    const id = response.data.name;
    return id;
}

export function updateSelectedBook(id,bookData){
    return axios.put(url+`books/${id}.json`,bookData)
}

export function getBook(id){
    return axios.get(url+`books/${id}.json`)
}