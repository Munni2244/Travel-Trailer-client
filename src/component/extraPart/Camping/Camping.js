import React from 'react';
import img from '../../../bg.jpg';
import img1 from '../../../bg1.jpeg';
import img2 from '../../../b6.jpg';
const Camping = () => {
    return (
        <div style={{marginTop:'120px', marginBottom:'70px'}} className="container ">
            <div className="row ">
                <div className="col-lg-7 col-md-12 col-12">
                    <img width="600px"height="400px" src={img} alt="" />
                </div>
                <div className="col-lg-5 col-md-12 col-12">
                    <h1>Camping Experience</h1>
                    <p>Why is camping good for you? The health benefits of camping are plentiful for both adults and young people. When you’re spending time at home in your usual routine, you may not realize just how much you’re missing away from nature.</p>
                    <h4>Also here is You Need</h4>
                    <ul>
                        <li>Books</li>
                        <li>Wi-Fi Network</li>
                        <li>Recycling</li>
                        <li>Barbecue Area</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mt-5">
                  <img width="550px" className="img-fluid"  src={img2} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4">
             <img  height="350px" className="img-fluid" width="500px" src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Camping;