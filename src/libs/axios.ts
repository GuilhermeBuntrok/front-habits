import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://back-habits-production.up.railway.app/'
})