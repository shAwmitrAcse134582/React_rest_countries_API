import React, { useEffect, useState } from 'react';
import Country from '../Country/Country.js';
import './Countries.css'

// import Country from './Components/Country/Country';


const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
          fetch('https://restcountries.com/v3.1/all')
          .then(res=>res.json())
          .then(data=>setCountries(data))
    },[])  
    return (
        <div>
           <h1>The Number of countries is: {countries.length}</h1>

          <div class="countries-container">
          {
            countries.map(country=><Country country={country}> </Country>) 
           }
          </div>
        </div>
    );
};

export default Countries;