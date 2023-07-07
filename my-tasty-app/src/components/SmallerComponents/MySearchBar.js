import React, { useContext, useState } from 'react'
import './SmallerComponentsStyles.css'
import { SearchContext } from '../NavBar/NavBar'
const MySearchBar = () => {
 const [search, setSearch] = useState('')
 const { handleSearch } = useContext(SearchContext)

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
