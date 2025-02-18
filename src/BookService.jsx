import axios from "axios";

const Tour_REST_API_URL = "http://localhost:3000/books";

class BookService {
  getItems() {
    return axios.get(Tour_REST_API_URL);
  }

  addItem(tour) {
    return axios.post(Tour_REST_API_URL, tour);
  }

  updateItem(tour) {
    return axios.put(`${Tour_REST_API_URL}/${tour.id}`, tour);
  }

  deleteItem(tourId) {
    return axios.delete(`${Tour_REST_API_URL}/${tourId}`);
  }
}

export default new BookService();