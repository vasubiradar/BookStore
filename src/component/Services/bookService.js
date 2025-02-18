import axios from "axios";

const BOOK_REST_API_URL = "http://localhost:8080/books";

class bookService {
  // Get all books
  getBooks() {
    return axios.get(BOOK_REST_API_URL);
  }

  // Add a new book
  addBook(book) {
    return axios.post(BOOK_REST_API_URL, book);
  }

  // Get book by ID
  getBookById(bookId) {
    return axios.get(`${BOOK_REST_API_URL}/${bookId}`);
  }

  // Update book by ID
  updateBook(bookId, updatedBook) {
    return axios.put(`${BOOK_REST_API_URL}/${bookId}`, updatedBook);
  }

  // Delete book by ID
  deleteBook(bookId) {
    return axios.delete(`${BOOK_REST_API_URL}/${bookId}`);
  }
}

export default new bookService();
