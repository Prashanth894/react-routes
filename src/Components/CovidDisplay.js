import React from 'react'
import '../App.css'
const CovidDisplay = ({data}) => {
    return (

<div>
<div className="row">
  
    <div className="col-m-4">
        <h1 className='text-center m-5'>COVID DASHBOARD API</h1>
        <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">State</th>
            <th scope="col">Confirmed Cases India</th>
            <th scope="col">Discharged</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody className="table-primary">
        {data.map(data => 
              <tr>
              <td scope="row">{data.loc}</td>
              <td scope="row">{data.confirmedCasesIndian}</td>
              <td scope="row">{data.discharged}</td>
              <td scope="row">{data.deaths}</td>
            </tr>
      
        )}
        </tbody>
      </table>
            
        </div>
    
    </div>
  
</div>
    )}
export default CovidDisplay;