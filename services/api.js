import axios from "axios";

const api = axios.create({
  baseURL: "https://my-simple-ecommerce-api.herokuapp.com/",
});

export default api;
