import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    // const Spinner=()=>{
        
    //     <div className="spinner-grow text-success" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </div>
    // }
    const [services, setServices]=useState([]);
    const [loading, setLoading]=useState(true);


    useEffect(()=>{
        fetch('https://dark-shadow-34666.herokuapp.com/booking')
        .then(res=>res.json())
        .then(data =>{
            setServices(data);
            setLoading(false)
        })
    },[services])
    //spinner
    if(loading){
        return(
            <div class="d-flex justify-content-center mt-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }
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