import React, { useEffect, useRef } from 'react'
import flashSale from '../../Image-resources/flash-sale.jpg'
import bigSale from '../../Image-resources/big-sale.jpg'
import exclusive from '../../Image-resources/exclusive.jpg'
import chocolate from '../../Image-resources/chocolate.jpg'
import pancakes from '../../Image-resources/pancakes.jpg'
import burgy from '../../Image-resources/burgy.jpg'
import delight from '../../Image-resources/delight.jpg'
import experience from '../../Image-resources/experience.jpg'
import frenzy from '../../Image-resources/frenzy.jpg'
import './Offers.css'
const Offers = () => {
 const offers = useRef(null);
 const next = useRef(null);
 const prev = useRef(null);


 useEffect(()=>{
  offers.current.addEventListener('scroll', (e)=>{
  })
  next.current.addEventListener('click', (e) => {
  offers.current.scrollBy(250, 0);
    });
  prev.current.addEventListener('click', (e) => {
  offers.current.scrollBy(-250, 0);
  });
 },[])
 return (
   <main className='offers-wrapper'>
     <h2>What We Offer</h2>
     <section className='offers-container'>
       <div className='next-btn scroll-btn' ref={next}>
         →
       </div>
       <div className='prev-btn scroll-btn' ref={prev}>
         ←
       </div>
       <div className='offers-content' ref={offers}>
         <div className='offer-image'>
           <img src={flashSale} alt='flash-sales' />
         </div>
         <div className='offer-image'>
           <img src={bigSale} alt='big-sales' />
         </div>
         <div className='offer-image'>
           <img src={chocolate} alt='chocolate' />
         </div>
         <div className='offer-image'>
           <img src={pancakes} alt='pancakes' />
         </div>
         <div className='offer-image'>
           <img src={burgy} alt='exclusive' />
         </div>
         <div className='offer-image'>
           <img src={delight} alt='delight' />
         </div>
         <div className='offer-image'>
           <img src={frenzy} alt='frenzy' />
         </div>
         <div className='offer-image'>
           <img src={experience} alt='experience' />
         </div>
         <div className='offer-image'>
           <img src={exclusive} alt='exclusive' />
         </div>
       </div>
     </section>
   </main>
 )
}

export default Offers