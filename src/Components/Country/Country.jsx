import "./Country.css";

const Country = ({country}) => {
    console.log(country);
    const {name,flags}=country;

    return (
        <div className="country">
            <h2>Name:{name?.common}</h2>
            <h4>Capital:{country.capital}</h4>
            <h5>Flags:
                <img src={flags.png} alt="" />

            </h5>
            
        </div>
    );
};

export default Country;