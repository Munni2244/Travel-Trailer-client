import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name , img}= props.service;
    return (
        <div className="col-lg-4 col-md-6 col-12 text-center">
            <div className="service-card">
                <img  height="350px" src={img} alt="" />
                <h1>{name}</h1>
                <Link to="/bookingplace"><button className="btn btn-secondary"> Booking Now</button></Link>
            </div>
        </div>
    );
};

export default Service;