import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = () => {

        const [country, setCountry] = useState([]);
        useEffect(() => {
            const url = `https://restcountries.eu/rest/v2/name/${nameId}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data));
        }, [])
        
        const {nameId} = useParams();
        // console.log(country);

    return (
        <div className="container p-5 m-5">
            <div className="row justify-content-center">
                {
                    country.map(land => <CountryDetail land={land}></CountryDetail>)
                }
            </div>
        </div>
    );
};

export default Country;