import React from 'react';

const Countries = (props) => {
    // console.log(props.country);
    const {flag, name, capital} = props.country;
    return (
        <div className="col-lg-4">
            <div className="single-country">
                <img src={flag} alt="" />
                <h3>Name: {name}</h3>
                <h5>Capital: {capital}</h5>
                <button className="btn btn-danger mt-2">View detail</button>
            </div>
        </div>
    );
};

export default Countries;