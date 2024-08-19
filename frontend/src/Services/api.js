import axios from "axios";

const API_URL = "http://localhost:4505/api/";
const api = axios.create({ baseURL: API_URL });

export const getPosts = () => api.get("/posts");
export const getPost = () => api.get(`/posts/${id}`);
export const createPost = (postData) => api.post("/posts/", postData);
export const updatePost = (postData, id) => api.put(`/posts/${id}`, postData);
export const deletePost = (id) => api.delete(`/posts/${id}`);
//rotte per prendere l'ordine
export const getOrdine = () => api.get("/ordine");
export const getPiatto = () => api.get(`/ordine/${id}`);
export const createOrdine = (ordineData) => api.post("/ordine/", ordineData);
export const updateOrdine = (ordineData, id) =>
  api.put(`/ordine/${id}`, ordineData);
export const deleteOrdine = (id) => api.delete(`/ordine/${id}`);
//ROTTE PER LE PRENOTAZIONI
export const getPrenotazioni = () => api.get("/prenotazioni");
export const getPrenotazione = () => api.get(`/prenotazioni/${id}`);
export const createPrenotazione = (formData) =>
  api.post("/prenotazioni/", formData);
export const updatePrenotazione = (formData, id) =>
  api.put(`/prenotazioni/${id}`, formData);
export const deletePrenotazione = (id) => api.delete(`/prenotazioni/${id}`);
//ROTTEPER AUTENTICAZIONE
//Funzione per registrare un nuovo utente
export const registerUser = (userData) => api.post("/authors", userData);
//Funzione per effettuare il login di un utente
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials); // Effettua la richiesta di login
    console.log("Risposta API login:", response.data); // Log della risposta per debugging
    return response.data; // Restituisce i dati della risposta
  } catch (error) {
    console.error("Errore nella chiamata API di login:", error); // Log dell'errore per debugging
    throw error; // Lancia l'errore per essere gestito dal chiamante
  }
};
//Funzione per ottenere i dati dell'utente attualmente autenticato
export const getMe = () =>
  api.get("/auth/me").then((response) => response.data);
// Funzione per ottenere i dati dell'utente attualmente autenticato con gestione degli errori
export const getUserData = async () => {
  try {
    const response = await api.get("/auth/me"); // Effettua la richiesta per ottenere i dati dell'utente
    return response.data; // Restituisce i dati della risposta
  } catch (error) {
    console.error("Errore nel recupero dei dati utente:", error); // Log dell'errore per debugging
    throw error; // Lancia l'errore per essere gestito dal chiamante
  }
};
export default api;
