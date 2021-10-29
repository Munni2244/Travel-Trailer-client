import React from 'react';
import Activity from '../../extraPart/Activity/Activity';
import Camping from '../../extraPart/Camping/Camping';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Services></Services>
            <Camping></Camping>
            <Activity></Activity>
        
        </div>
    );
};

export default Home;