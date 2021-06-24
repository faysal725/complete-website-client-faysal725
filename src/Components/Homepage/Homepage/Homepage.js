import React, { useState } from 'react';
import { useEffect } from 'react';
import Menu from '../Menu/Menu';
import AddServices from '../AddServices/AddServices';
import Service from '../Service/Service';
import Header from './Header/Header';
import FindMore from './FindMore/FindMore';
import Testimonial from './Testimonial/Testimonial';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
import './Homepage.css'

const Homepage = () => {

    
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    
    return (
        <div>
            <Header></Header>
            <div className="secondPart">
                <h3 className="fw-normal">HOW IT WORKS</h3>
                <h1 className="fw-bold">We created the most advanced bicycle technology</h1>
            </div>
            <div className="serviceSection">
            <div class="container">
            <div class="row">
            {
                services.map(service => <Service service={service}></Service>)
            }
            </div>
        </div>
        </div>
        <div className="FindMore">
            <br /><br />
            <FindMore></FindMore>
        </div>
        <div className="subscribe">
            <br /><br />
            <Subscribe></Subscribe>
        </div>
        <div className="testimonial">
            <br /><br /><br />
            <Testimonial></Testimonial>
        </div>
        <div className="footer">
            <br /><br /><br />
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Homepage;