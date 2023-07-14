import React from 'react'
import './SmallerComponentsStyles.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOneProduct } from '../../features/FilterSlice'
const Search = () => {
  const {queryItems, showQuery} = useSelector((state)=>state.query)
  const dispatch = useDispatch()
  return (
    <div className={showQuery ? 'query-container' : 'no-query'}>
      {
        queryItems.map((item)=>{
          return (
            <Link to='/food-detail'>
              <p onClick={()=>{
                
                dispatch(getOneProduct(item.id))}}>{item.food_name}</p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Search
