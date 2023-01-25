import React from 'react'
import '../App.css'
const NasaDisplay = ({data}) => {
    return (

<div className='row'>
    <center>
    <div className='col'>
        <img className='image mt-5' style={{width:"30%"}} src={data.hdurl}></img><br/>
       <h3 style={{color:"yellow"}} > {data.title}</h3>
       <p style={{color:"black"}}>Date: {data.date}</p>
       </div>
    </center>
      
</div>

    )
}

export default NasaDisplay;

