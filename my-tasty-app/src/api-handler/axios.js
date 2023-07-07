import axios from 'axios'
const url = 'http://localhost:5000/getdata'


const queryProducts = axios.create({
 baseURL: url
})
const wait = (number)=>{
 new Promise((resolve)=>setTimeout(resolve),number)
}
export const getAll = async()=>{
 try {
  const response = await queryProducts.get('/')
  // await wait(5000);
  return response.data;
 } catch (error) {
  console.log(error);
 }
}
export const getCategory = async(category)=>{
 try {
  const response = await queryProducts.get(`/category/${category}`)
  return response.data;
 } catch (error) {
  console.log(error);
 }
}
export const getRating = async(rating)=>{
 try {
  const response = await queryProducts.get(`/rating/${rating}`)
  return response.data;
 } catch (error) {
  console.log(error);
 }
}
export const getPrice = async(price)=>{
 try {
  const response = await queryProducts.get(`/price/${price}`)

  return response.data;
 } catch (error) {
  console.log(error);
 }
}
export const getOne = async(id)=>{
 try {
  const response = await queryProducts.get(`/food-detail/${id}`)
  console.log(response.data);
  return response.data;
 } catch (error) {
  console.log(error);
 }
}

export default queryProducts