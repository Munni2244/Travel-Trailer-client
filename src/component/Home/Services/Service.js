import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name , img, _id, price,desc}= props.service;
    return (
        <div className="col-lg-4 col-md-6 col-12 text-center">
            <div className="service-card">
                <img  height="350px" src={img} alt="" />
                <h1>{name}</h1>
                <p>{desc}</p>
                <p className="fw-bold">$ {price}</p>
                <Link to={`/bookingplace/${_id}`}><button className="btn btn-secondary"> Booking Now</button></Link>
            </div>
        </div>
    );
};

export default Service;