import React from 'react';
import './Header.css'

//Definig a Function named as "Header" with  no parameter
const Header = () => {
    return (
        <div className="header">
            <h2>Member of the C3 Coding Lab</h2>
            <p>| Here is the  members list of C3 coding lab, which is jointly developed by NUPT and MIT |</p>
            <h3>Total Budget: $800000</h3>

        </div>
    );
};

export default Header;