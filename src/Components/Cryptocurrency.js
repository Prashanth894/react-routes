import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import CryptoDisplay from './CryptoDisplay'
function Cryptocurrency() {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const [priceFilter, setPriceFilter] = useState(0)
  
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    
    useEffect(()=>{
      axios.get(url).then(res =>{
        console.log(res.data)
        setCoins(res.data)
      })
    },[])
  
    const getInputValue = (e) =>{
      setSearch(e.target.value)
    }
  
    const getInputValue2 = (e) =>{
      setPriceFilter(e.target.value)
    }
  
    const filterCoins = coins.filter(coin =>{
      return coin.name.toLowerCase().includes(search.toLowerCase())
    })
    
    const priceFilterCoins = filterCoins.filter(coin =>{
      return coin.current_price > priceFilter
    })
  
    return (
      <div className='container-fluid'>
         <h1 className='text-center mt-3'>Crypocurrency API</h1><br/>
          <form>
              <input id='inputCrypto' style={{padding:"5px"}} type="text" onChange={getInputValue} placeholder="search"/>
              {/* <input type="range" min={1600} max={1700} onChange={getInputValue2} placeholder="search"/> */}
          </form>
         <div className='coins-container m-5'>
          <div className='row'><br/>
            {
              priceFilterCoins.map((coin) =>{
                return <CryptoDisplay display image={coin.image} name={coin.name}  id={coin.id}/>
              })
            }
         </div>
      </div>
      </div>
    );
  }
    // return (
    //  <div>
    //    <h1>Cryptocurrency</h1>
       
     
    //  </div>
    // );
  
  
  export default Cryptocurrency;