import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    // const Spinner=()=>{
        
    //     <div className="spinner-grow text-success" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </div>
    // }
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('https://dark-shadow-34666.herokuapp.com/booking')
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