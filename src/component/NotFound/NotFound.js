import React from 'react';
import error from '../../404.gif';

const NotFound = () => {
    return (
        <div>
            <img width="100%" src={error} alt="" />
        </div>
    );
};

export default NotFound;