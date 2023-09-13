import "./Country.css"
const Country = ({country}) => {
    console.log(country);
    const{name,flags,population,area}=country;
    return (
        <div className="country">
            <h2>Name:{name.common}</h2>
            <h4>Capital:{country.capital}</h4>
            <h4>Region:{country.region}</h4>
            <img src={flags.png} alt="" />
            <h4>Population:{population}</h4>
            <h4>Area:{area}</h4>
            
        </div>
    );
};

export default Country;