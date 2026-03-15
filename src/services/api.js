import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getProducts = () => API.get("/products");

export const addProduct = (data) => API.post("/products", data);

export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const getProduct = (id) => API.get(`/products/${id}`);

export const updateProduct = (id,data) => API.put(`/products/${id}`, data);