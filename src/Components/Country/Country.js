
import React from 'react';
import './Country.css'

const Country = (props)  => {
   
   const{name,area,population,flags}=props.country;
    
    return (
        <div class='country'>
            <h2>Country Name:{name.common}</h2> 
            <p>Area:{area}</p>
            <img src={flags.png} alt=" "/>
            <p>Population:{population}</p>
           
        </div> 
    );
};

export default Country;