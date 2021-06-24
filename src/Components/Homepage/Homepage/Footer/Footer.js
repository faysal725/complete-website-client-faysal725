import React from 'react';
import logo from '../../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div class="container fullFooter">
            <div class="row">
                <div class="col-sm-4 footerSide">
                    <img src={logo} alt="" className="w-50"/>
                    <br /><br />
                    <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudanti totam aperiam inventore veritatis congue tristique ultrices. Purus finibus dapibus nunc neque commodo tellusin dapi magna quam posuere.</p>
                    <h3>SOCIAL MEDIA</h3>
                </div>
                <div class="col-sm-8 row footerLinks">
                    <div className="col-md-4">
                        <h4>WANT TO CALL WITH US</h4>
                        <h5>Phone</h5>
                        <p>(+62) 123-321-543</p>
                        <h4>QUICK LINKS</h4>
                            <p>About</p>
                            <p>Sitemap</p>
                            <p>Blog</p>
                            <p>Contact</p>
                    </div>
                    
                    <div className="col-md-4">
                        <h4>WANT TO EMAIL WITH US</h4>
                        <h5>EMAIL</h5>
                        <p>xyz@gmail.com</p>
                        <h4>QUICK LINKS</h4>
                            <p>About</p>
                            <p>Sitemap</p>
                            <p>Blog</p>
                            <p>Contact</p>
                    </div>
                    
                    <div className="col-md-4">
                        <h4>WANT TO VISIT US</h4>
                        <h5>LOCATION</h5>
                        <p>alsdjf, askdlfj sldkf</p>
                        <h4>QUICK LINKS</h4>
                            <p>About</p>
                            <p>Sitemap</p>
                            <p>Blog</p>
                            <p>Contact</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;