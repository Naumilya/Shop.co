const BASE_URL: string = 'http://localhost:5173/src/data/products.json'

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}`)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
