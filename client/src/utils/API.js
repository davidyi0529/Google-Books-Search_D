import axios from "axios";

const API = {

  getBooks: function(book) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
  },
  // Gets all books
  getDbBook: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  findBook: function(id) {
    return axios.get("/api/search");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  addBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

export default API;
