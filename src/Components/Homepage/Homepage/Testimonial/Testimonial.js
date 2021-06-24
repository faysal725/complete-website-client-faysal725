import React from 'react';
import './Testimonial.css'
import person from '../../../../images/person.png'

const Testimonial = () => {
    return (
        <div className="container testFull">
            <div className="testHeader">
            <h6>this is testimonial</h6>
            <h1>What Our Customers Say</h1>
            <br /><br />
            </div>
            <div className="row">
                <div className="col-md-4 testBody">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima excepturi magnam omnis harum! Inventore, atque. Nihil, soluta. Eligendi, ipsum minus.</p>

                    <br />
                <div class="container">
                <div class="row">
                <div class="col-sm-2 col-md-3">
                <img src={person} alt="..." className="float-left"/>
                </div>
                <div class="col-sm-10 col-md-9">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, temporibus?</p>
                </div>
                </div>
                </div>
                </div>

                <div className="col-md-4 testBody">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima excepturi magnam omnis harum! Inventore, atque. Nihil, soluta. Eligendi, ipsum minus.</p>

                    <br />
                <div class="container">
                <div class="row">
                <div class="col-sm-2 col-md-3">
                <img src={person} alt="..." className="float-left"/>
                </div>
                <div class="col-sm-10 col-md-9">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, temporibus?</p>
                </div>
                </div>
                </div>
                </div>

                <div className="col-md-4 testBody">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima excepturi magnam omnis harum! Inventore, atque. Nihil, soluta. Eligendi, ipsum minus.</p>

                    <br />
                <div class="container">
                <div class="row">
                <div class="col-sm-2 col-md-3">
                <img src={person} alt="..." className="float-left"/>
                </div>
                <div class="col-sm-10 col-md-9">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, temporibus?</p>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;