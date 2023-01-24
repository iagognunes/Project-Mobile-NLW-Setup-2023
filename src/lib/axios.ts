import axios from "axios";

export const api = axios.create({
  baseURL: 'http://10.15.4.99:3333'
})