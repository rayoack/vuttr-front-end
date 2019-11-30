import axios from 'axios'

const api = axios.create({
  baseURL: 'https://challenge-fake-api.herokuapp.com/'
})

export default api
