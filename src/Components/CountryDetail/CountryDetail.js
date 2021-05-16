import React from 'react';

const CountryDetail = (props) => {
    console.log(props.land);
    const {flag, name, capital, nativeName, population, region} = props.land;
    return (
        <div className="col-lg-6">
            <div className="single-country">
                <img src={flag} alt="" />
                <h3>Name: {name}</h3>
                <h5>Capital: {capital}</h5>
                <h5>Native Name: {nativeName}</h5>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
            </div>
        </div>
    );
};

export default CountryDetail;