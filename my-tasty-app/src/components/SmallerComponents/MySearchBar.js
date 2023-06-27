import React, { useState } from 'react'
import './SmallerComponentsStyles.css'
const MySearchBar = () => {
 const [search, setSearch] = useState('')
  return (
    <div className='search-wrapper'>
      <div className='search-container'>
        <input
          type='text'
          placeholder='what do you crave'
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
        />
        <i class='fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}

export default MySearchBar
