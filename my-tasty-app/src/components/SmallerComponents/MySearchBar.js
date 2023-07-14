import React, { useContext, useEffect, useState } from 'react'
import './SmallerComponentsStyles.css'
import { SearchContext } from '../NavBar/NavBar'
import { useDispatch } from 'react-redux'
import { getQueryItems } from '../../features/QuerySlice'
import { showQuery } from '../../features/QuerySlice'
const MySearchBar = () => {
  const dispatch = useDispatch()
 const [search, setSearch] = useState('')
 const { handleSearch } = useContext(SearchContext)

  useEffect(()=>{
    if (search.length >= 1) {
      dispatch(getQueryItems(search))
    }
    else {return}
  },[search])
  useEffect(()=>{
    dispatch(showQuery(search))
  },[search])
  return (
    <div className='search-wrapper'>
      <div className='search-container'>
        <input
          type='text'
          placeholder='what do you crave'
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
          onClick={handleSearch}
        />
        <i class='fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}

export default MySearchBar
