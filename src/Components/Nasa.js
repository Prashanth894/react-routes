import '../App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NasaDisplay from '../Components/NasaDisplay';

function Nasa() {


  const [Content,setContent] = useState([]);
  
var API_KEY="4PhNzYbSDfRQGvleghO3bLyRsn0GAvAStYSXyybm"
  var url=`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  

  useEffect(()=>{
    submitHandler();
  },[])
   const submitHandler=async e=>{
    // e.preventDefault();
    var result=await axios.get(url)
    console.log(result.data)
    setContent(result.data)
   }
    return (
       <div>
       
        <NasaDisplay   data={Content}/>
      
    </div>
    );
  }
  
  export default Nasa;