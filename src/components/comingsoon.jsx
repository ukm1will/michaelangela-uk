import React from 'react';
import logo from '../images/logo.png';

const ComingSoon = (props) => {
    let message = "Millennium Cup 2022 will be coming soon...";
    return (
        <>
            <div className="centre">
                <img className="divLogo" src={logo} alt="Golfer logo"/>
            </div>
            <p className="message">{message}</p>
            <div className="centre">
                <a href="/">Return to home page</a>
            </div>
        </>
    );
}

export default ComingSoon;