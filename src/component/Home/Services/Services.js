import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[services])
    return (
        <div style={{marginTop:'100px', marginBottom:'20px' }} className="container ">
            <div className="row g-5 mt-5">
                {
                    services.map(service=> <Service service={service} key={service.name}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;