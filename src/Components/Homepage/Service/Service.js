import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ServiceContext } from '../../../App';
import './Service.css'

const Service = ({service}) => {
    const [checkedService, setCheckedService] = useContext(ServiceContext)

    let history = useHistory();

    const handleCheckout = (e) => {
        setCheckedService(service)
        history.push("/checkout");


    }
    
    return (
        <>
            <div className="col-md-3 fullService p-3">
                <div className="imgOnly" onClick={()=> handleCheckout()}>
                <img className="logoWhite" src={service.imageURL} className="serviceImg" alt="" />
                </div>
                <div className="serviceText">
                    <h3>{service.serviceName}</h3>
                    <h5>$ {service.price}</h5>
                    <p>{service.description}</p>
                </div>
            </div>
        </>
    );
};

export default Service;