import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    // console.log(props.country);
    const {flag, name, capital} = props.country;

    const history = useHistory();

    const handleClick = (nameId) => {
        history.push(`/country/${nameId}`);
    }
    
    return (
        <div className="col-lg-4">
            <div className="single-country">
                <img src={flag} alt="" />
                <h3>Name: {name}</h3>
                <h5>Capital: {capital}</h5>
                <button onClick={() => handleClick(name)} className="btn btn-danger mt-2">View detail</button>
            </div>
        </div>
    );
};

export default Countries;