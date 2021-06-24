import React from 'react';
import './FindMore.css';
import middle4 from "../../../../images/middle4.jpg"

const FindMore = () => {
    return (
        <div className="container">




            <div class="row">
                <div class="col-6">
                    <img className="findImage" src={middle4} alt="..." />
                </div>
                <div class="col-6 findText">
                <div>
                    <h3>FIND OUT MORE</h3>
                    <h1 className="fw-bold">The heart of our human centered design skills</h1>
                </div>
                <br />
                    <div className="row ">
                        <div class="col-sm features">
                            <h3>FRAME</h3>
                            <h6>TRAIL R3ACT 180MM</h6>
                        </div>
                        <div class="col-sm features">
                            <h3>FRAME</h3>
                            <h6>TRAIL R3ACT 180MM</h6>
                        </div>
                        <div class="col-sm features">
                            <h3>FRAME</h3>
                            <h6>TRAIL R3ACT 180MM</h6>
                        </div>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default FindMore;