import axios from 'axios'

export default axios.create({
  baseURL: 'https://pokemon-db-json.herokuapp.com/'
})
