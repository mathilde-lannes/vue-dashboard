import axios from 'axios'

export const API = axios.create({
  baseURL: `https://api.github.com/`,
  headers: {
    Accept: 'application/vnd.github.inertia-preview+json'
  }
})
