const products = require('../API/products.json')

let myProducts;
myProducts = products.map((item, index) => ({
    ...item,
    id: index + 1,
  }))

const getAll = (req, res) => {
 console.log('someone got all data');
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(myProducts))
}
const getCategory = (req, res) => {
 const category = req.params.category
  const newProduct = myProducts.filter((product) => product.category === category)
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
const getOne = (req, res) => {
 const id = req.params.id
  const newProduct = myProducts.find((product) => product.id == id)
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(newProduct))
}
module.exports = { getAll, getCategory, getRating, getPrice, getOne }
