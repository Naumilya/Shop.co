import axios from 'axios'
const BASE_URL: string = 'http://localhost:5173/src/data/products.json'

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`)
    return response.data
  } catch (error) {
    return error
  }
}
