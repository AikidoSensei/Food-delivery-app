import React from 'react'
import { useNavigate } from 'react-router-dom'
const BackBtn = () => {
  const navigate = useNavigate()
  const handleBack = ()=>{
    navigate(-1)
  }
  return (
      <div className='back-btn'onClick={handleBack}>
        <i class='fa-solid fa-arrow-left'></i>
      </div>
  )
}

export default BackBtn
