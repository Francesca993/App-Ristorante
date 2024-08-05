import axios from "axios";

const API_URL = "http://localhost:4505/api/";
const api = axios.create({ baseURL: API_URL });

export const getPosts = () => api.get("/posts");
export const getPost = () => api.get(`/posts/${id}`);
export const createPost = (postData) => api.post("/posts/", postData);
export const updatePost = (postData, id) => api.put(`/posts/${id}`, postData);
export const deletePost = (id) => api.delete(`/posts/${id}`);
// se devo aggiungere altre operazioni si mettono quì sotto
export default api;
