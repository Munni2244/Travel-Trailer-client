import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
          <div  style={{marginTop:'100px'}}>
            <section id="about">
      <div className="container-fluid">
      <div className="row p-4 text-light footter">
        
        <div className="col-12 col-md-12 col-lg-3 ms-4 mt-4">
          <h3>This Is travel Camparing<i className="fas fa-walking text-warning"></i></h3>
          <p><span>
        Based in Utah, USA, Wanderland is a blog by Markus Thompson. His posts
        explore outdoor experiences through photos and diaries with tips & tricks.</span></p>
        </div>
        <div className="col-12 col-md-12 col-lg-3 mt-4 footer-text">
        <h3>Contact</h3>
        <ul>
         <li>Address: Via Venti Settembre , Ireland</li>
          <li>Phone: +3244575656</li>
          <li>App , Viber, Whatsapp</li>
          <li>Email: maria@gmail.com </li>
      
        </ul>
      </div>
      <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text">
        <h2>Catagories</h2>
        <ul>
          <li>Enviroment</li>
          <li> Life Style</li>
          <li>  Ruls</li>
          <li> Motivate</li>
        </ul>
      </div>
    
      <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text">
        <h2>NewsLetter</h2>
      <p><span>Sign up for our newsletter and get update about our letest Promotion</span></p>
      <input type="email" name="" id=""  placeholder="your email"/>
      </div>
     
      </div>
    </div>
    </section>
    <footer style={{backgroundColor:'rgb(17, 52, 53)'}} className="col-12 text-center text-light py-3">
      <small >&copy;Copyright 2021 24july United  proggress</small>
    </footer>
  
        </div>
    );
};

export default Footer;