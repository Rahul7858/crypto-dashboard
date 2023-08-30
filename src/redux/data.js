import axios from "axios";

//This is base url of coingecko
export const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});