import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const headerStyle = {
    backgroundColor: '#252525',
    textAlign: 'center',
}

const Header = () => {
    return (
        <div style={headerStyle} className="header p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link style={{display: 'inline-block', cursor: 'pointer'}} to="/home">
                            <img style={{height: '100px'}} src={logo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;