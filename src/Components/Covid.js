import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import CovidDisplay from './CovidDisplay';

const Covid = () => {
  
  const [Content,setContent] = useState([]);
  

  var url=`https://api.rootnet.in/covid19-in/stats/latest`
  

  useEffect(()=>{
    submitHandler();
  },[])
   const submitHandler=async e=>{
    // e.preventDefault();
    var result=await axios.get(url)
    console.log(result.data.data.regional);
    setContent(result.data.data.regional)
   }

  
  
  return (
    <div>
      
      <center>
       
        {Content.length>=1 ? <CovidDisplay   data={Content}/>:null}
      </center>
    </div>
  )
}

export default Covid