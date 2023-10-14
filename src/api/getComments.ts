import axios from 'axios'
const BASE_URL: string = 'http://localhost:5173/src/data/comments.json'

export const getComments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`)
    return response.data
  } catch (error: any) {
    console.error(error.message)
  }
}
