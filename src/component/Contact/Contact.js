import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="">
            <div className="contact ">
            
            </div>
           <div className="text-center mt-4">
           <div className="contact-field">
                <input type="text" placeholder="name" /> <br />
                <input type="email" name="" id=""  placeholder="Email"/> <br />
                <textarea placeholder="Text Here" className="m-2" name="" id="" cols="50" rows="5"></textarea> <br />

                <button className="btn btn-success btn-lg m-2">Submit</button>
            </div>
           </div>
           <div className="text-center m-5">
               <h1>Call Now: +0011227733</h1>
               <h1>Email: Travel@gmail.com</h1>
           </div>
        </div>
    );
};

export default Contact;