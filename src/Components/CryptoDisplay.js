import React from 'react'
import '../App.css'

 function CryptoDisplay(props) {
  return (
   <div className='col' id='card'>
    
      <img  src={props.image} />
      <h3 className='text-center'>{props.name}</h3>
      

   </div>
      

     
  )
}
export default CryptoDisplay;
