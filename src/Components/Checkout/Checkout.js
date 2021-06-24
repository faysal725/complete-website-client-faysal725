import React, { useContext } from 'react';
import { ServiceContext, UserContext } from '../../App';
import Footer from '../Homepage/Homepage/Footer/Footer';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Checkout.css'

const Checkout = () => {
    const [checkedService, setCheckedService] = useContext(ServiceContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    return (
      <div className="fullCheckout">
        <div style={{backgroundColor:'black'}} className="container">
            <br /><br /><br />
            <h1 style={{textAlign:"center"}}>{loggedInUser.email}</h1>
            <br /><br /><br />
      <div className="d-flex row">
        <div className="col-md-6">
        <table className="table table-dark">
  <thead>
    <tr>
      <th className="text-danger" scope="col">Service Name</th>
      <th className="text-danger" scope="col">Description</th>
      <th className="text-danger" scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>{checkedService._id}</b></td>
      <td>{checkedService.serviceName}</td>
      <td>{checkedService.price}</td>
    </tr>
    <tr>
      <td><b>Total</b></td>
      <td></td>
      <td>{checkedService.price}</td>
    </tr>
  </tbody>
</table>
</div>
<div className="col-md-6">
  <div style={{textAlign:"center"}}>
  <h1 style={{color:"red"}}>ONLINE PAYMENT</h1>
 <ProcessPayment></ProcessPayment>
 </div>
</div>
</div>
</div>

<br /><br /><br /><br />
<Footer></Footer>
</div>
    );
};

export default Checkout;