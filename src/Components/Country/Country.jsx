import { useState } from "react";
import "./Country.css"
const Country = ({country}) => {
    console.log(country);
    const{name,flags,population,area,cca3}=country;
    
    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(!visited);
    }
    return (
        <div className="country">
            <h2>Name:{name.common}</h2>
            <h4>Capital:{country.capital}</h4>
            <h4>Region:{country.region}</h4>
            <img src={flags.png} alt="" />
            <h4>Population:{population}</h4>
            <h4>Area:{area}</h4>
            <p><small>Code:{cca3}</small></p>
            <button onClick={handleVisited}>Visited</button>
            {
                visited &&  
                <p style={{color:"green"}}>Visited</p>
            }
        </div>
    );
};

export default Country;