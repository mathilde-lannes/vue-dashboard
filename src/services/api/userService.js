import { API } from '../api'

export const fetchReposFromUser = username => API.get(`users/${username}/repos`)
