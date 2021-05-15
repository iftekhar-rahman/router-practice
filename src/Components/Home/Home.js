import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import './Home.css';

const Home = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div className="main-area p-5 m-5">
            <div className="container">
                <div className="row">
                    {
                        countries.map(country => <Countries country={country} key={country.alpha3Code}></Countries>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;