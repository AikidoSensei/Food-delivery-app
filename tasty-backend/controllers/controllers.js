const products = require('../API/products.json')

let myProducts
myProducts = products.map((item, index) => ({
  ...item,
  id: index + 1,
}))

const getAll = (req, res) => {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(myProducts))
}
const getCategory = (req, res) => {
  const category = req.params.category
  const newProduct = myProducts.filter(
    (product) => product.category === category
  )
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(newProduct))
}
const getRating = (req, res) => {
  const rating = req.params.rating
  const newProduct = myProducts.filter((product) => product.rating >= rating)
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(newProduct))
}
const getPrice = (req, res) => {
  const price = req.params.price
  const newProduct = myProducts.filter((product) => product.price <= price)
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(newProduct))
}

const getHotDeals = (req, res) => {
  let hotNumbers = [2, 48, 56, 29, 5, 69, 58, 32, 8, 10, 27]
  let newProducts = []
  for (i = 0; i < 11; i++) {
    newProducts.push(myProducts[hotNumbers[i]])
  }
 
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(newProducts))
}

const getOne = (req, res) => {
  const id = req.params.id
  const newProduct = myProducts.find((product) => product.id == id)
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(newProduct))
}
const getQuery = (req, res) => {
  const { query } = req.query

  const newProduct = myProducts.filter(
    (product) =>
      product.food_name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  )

  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(newProduct.splice(0, 10)))
}

module.exports = {
  getAll,
  getCategory,
  getRating,
  getPrice,
  getOne,
  getQuery,
  getHotDeals,
}
