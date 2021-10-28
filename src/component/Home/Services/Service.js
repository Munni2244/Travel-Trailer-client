import React from 'react';

const Service = (props) => {
    const {name , img}= props.service;
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default Service;