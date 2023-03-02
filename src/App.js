import Axios from 'axios';
import { useState } from 'react';
import './App.css';
import { BrandExample } from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data,setData] = useState([])
  const [sat,setSat] = useState([])

  const fetchSpacecrafts = () =>{
    Axios.get('https://isro.vercel.app/api/spacecrafts').then((res)=>setData(res.data.spacecrafts))
  }

  const fetchCustomSat = () =>{
    Axios.get('https://isro.vercel.app/api/customer_satellites').then((res)=>setSat(res.data.customer_satellites))
  }

  const resetInputField = () => {
    setData([])
  };

  const reseInputField = () => {
    setSat([])
  };

  return (
    <div className='App'>
    <BrandExample/>
    <button onClick={fetchSpacecrafts}>Search the Spacecrafts</button>
    <button onClick={resetInputField}>Reset</button>
    <table  style={{margin: 'auto',display: 'block',width:'30%',height:'30%',padding:'20px',marginBottom:'20px',borderRadius: '15px'}}>
    <thead className="thead-default">
        <tr>
            <th>Id</th>
            <th>Name</th>
        </tr>
    </thead>
      <tbody>
      {  
        data.map(
          (info,key)=>{
            return(
              <tr key={key}>
                <td>{info.id}</td>
                <td>{info.name}</td>
              </tr>
            )
          }
        )
      }
      </tbody>
    </table> 
    <button onClick={fetchCustomSat}>Search for Customer Spacecrafts</button>
    <button onClick={reseInputField}>Reset</button>
    <table style={{margin: 'auto',display: 'block',width:'75%',height:'30%',padding:'20px',marginBottom:'20px',borderRadius: '15px'}}>
    <thead>
        <tr>
            <th>Id</th>
            <th>Country</th>
            <th>Launch Date</th>
            <th>Mass</th>
            <th>Launcher</th>
        </tr>
    </thead>
      <tbody>
      {  
        sat.map(
          (info,key)=>{
            return(
              <tr key={key}>
                <td>{info.id}</td>
                <td>{info.country}</td>
                <td>{info.launch_date}</td>
                <td>{info.mass}</td>
                <td>{info.launcher}</td>
              </tr>
            )
          }
        )
      }
      </tbody>
    </table>
    </div>
  );
}

export default App;
