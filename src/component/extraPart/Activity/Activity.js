import React from 'react';
import icon1 from '../../../icons/airplane.png'
import icon2 from '../../../icons/destination (1).png'
import icon3 from '../../../icons/flight (1).png'
import icon4 from '../../../icons/tourism.png'

const Activity = () => {
    return (
       <div className="container mt-5">
            <div className="text-center">
            <p className="text-danger fs-lg fw-bold">_______Travel By Activity</p>
            <h1 className="fw-bold ">ADVENTURE & ACTIVITY</h1>
             <p><span>The two biggest questions of travel. The places we go and people we travel  with make or break <br />our travel experiences.  But the real question is, what's  the overriding ingredient of success<br /> for the ultimate travel experience, is if the place, or the people?</span></p>
        </div>
        <div className="row my-5">
            <div className="col-lg-3">
                <div className="border p-5">
                <img width="160px" height="80px" src={icon1} alt="" />
                <h3 className="mt-4">AdVanture</h3>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="border p-5">
                <img width="160px" height="80px" src={icon2} alt="" />
                <h3 className="mt-4">Traking</h3>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="border p-5">
                <img width="160px" height="80px" src={icon3} alt="" />
                <h3 className="mt-4">Off Road</h3>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="border p-5">
                <img width="160px" height="80px" src={icon4} alt="" />
                <h3 className="mt-4">Camping</h3>
                </div>
            </div>
        </div>
       </div>

    );
};

export default Activity;