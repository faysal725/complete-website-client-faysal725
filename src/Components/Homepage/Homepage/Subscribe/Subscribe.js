import React from 'react';
import rsz_subscribe from '../../../../images/rsz_subscribe.jpg';
import './Subscribe.css'

const Subscribe = () => {
    return (
        
        // <div class="subFull">
        // <img src={rsz_subscribe} alt="Snow" style={{width:"100%", height: "800px"}} />
        
        // <div>
        // <h3 className="text-uppercase fw-bold">$160.00</h3>
        //         <h1 className="fw-bold">AXQUARONZ EX19 TRAILX <br /> BIKE</h1>
        //         <p>Suspendisse in magna in elit hendrerit condimentum. Phasellus eu justo mi. Proin aliquet, mauris a volutpat lobortis, erat libero condimentum metus, eu tincidunt felis ligula in turpis.</p>
                
        // </div>
        // </div>
        <div className="subFull">
                <img className="subImage" src={rsz_subscribe} alt="" />
                <div className="centered3">
                <h3 className="text-uppercase fw-bold">GET MORE DISCOUNT</h3>
                <h1 className="fw-bold subHeader">Subscribe & Get 15% Off</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam idnuncac convallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. Donec diam augue consequat sit amet metusac bibendum mattis massa.</p>
                
                
                <div cal="input-group mb-3">
                <input type="text" className="form-control" placeholder="Your Mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <br />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary subButton" type="button">Button</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Subscribe;