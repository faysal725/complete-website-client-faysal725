import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import './Menu.css';
import logo from '../../../images/rsz_logo.png'
  
  

const Menu = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    return (
            <div className="fullMenu">
            <nav className="navbar ">
            <div className="container-fluid">
            <a className="navbar-brand">
                <img className="logoStyle" src={logo}  alt="" />
            </a>
            <form className="d-flex">
                <Link className="nav-link mr-5 text-danger" to="/home">Home</Link>
               <Link className="nav-link mr-5 text-danger" to="/about">About</Link>
                <Link className="nav-link mr-5 text-danger" to="/login">Login</Link>
                <Link className="nav-link mr-5 text-danger" to="/checkout">checkout</Link>
                <Link className="nav-link mr-5 text-danger" to="/ourservice">Our Services</Link>
                <Link className="nav-link mr-5 text-danger" to="/dashboard">Dashboard</Link>
                {
                    loggedInUser === "afaysal725@gmail.com" && 
                    <>
                        <Link className="nav-link mr-5" to="/addservice">addservice</Link>
                    </>
                }
            <li style={{borderRadius:"40px", backgroundColor:"red"}} className="list-group-item text-danger">
               <p style={{color:"white"}}><b> Hello, <br /> {loggedInUser}</b></p>
           </li>
            </form>
            </div>
            </nav>
            </div>
        
    //    <div className="container">
    //         <ul className="list-group list-group-horizontal">

    //         <li className="list-group-item">
    //             <Link className="nav-link mr-5" to="/home">Home</Link>
    //         </li>

    //         <li className="list-group-item">
    //             <Link className="nav-link mr-5" to="/about">About</Link>
    //         </li>

    //         <li className="list-group-item">
    //             <Link className="nav-link mr-5" to="/login">Login</Link>
    //         </li>
            
    //         <li className="list-group-item">
    //             <Link className="nav-link mr-5" to="/checkout">checkout</Link>
    //         </li>

    //         <li className="list-group-item">
    //             <Link className="nav-link mr-5" to="/ourservice">Our Services</Link>
    //         </li>
    //         <li className="list-group-item">
    //             <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
    //         </li>

    //         <li className="list-group-item">
    //             {
    //                 loggedInUser === "afaysal725@gmail.com" && 
    //                 <>
    //                     <Link className="nav-link mr-5" to="/addservice">addservice</Link>
    //                 </>
    //             }
            
    //         </li>
    //         <li className="list-group-item">
    //             <p>Hello, {loggedInUser}</p>
    //         </li>
            
    //         </ul>

    //    </div>
    );
};

export default Menu;