import axios from "axios";
export const API_PATH = "https://oncler-backend.vercel.app"
export const api = axios.create({
    baseURL: API_PATH
})