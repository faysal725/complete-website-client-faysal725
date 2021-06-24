import React from 'react';
import header from '../../../../images/header.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="hederFull">
                <img className="headerImage" src={header} alt="" />
                <div className="centered">
                <h3 className="text-uppercase fw-bold">$160.00</h3>
                <h1 className="fw-bold">AXQUARONZ EX19 TRAILX <br /> BIKE</h1>
                <p>Suspendisse in magna in elit hendrerit condimentum. Phasellus eu justo mi. Proin aliquet, mauris a volutpat lobortis, erat libero condimentum metus, eu tincidunt felis ligula in turpis.</p>
                
                <div className="row">
                    <div class="col-sm">
                        <h4>Model:</h4>
                        <h3 className="fw-bold">TRAIL CASCADE DXP-1600</h3>
                    </div>
                    <div className="col-sm">
                        <h4>Color:</h4>
                        <h3 className="fw-bold">Grey Rust</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;