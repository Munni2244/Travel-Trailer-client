import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/useAuth';


const Navbar = () => {
  const {user, SignOut}= useAuth();
    return (
        <div>
            <nav style={{backgroundColor:'darkslategrey'}} className="navbar navbar-expand-lg navbar-dark p-3  ">
  <div className="container-fluid">
    <Link  to="/home" className="navbar-brand fw-bold me-5" href="#"> TraVeL <span style={{color:'goldenrod'}}>TriLerR</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active" aria-current="page" href="#">Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        {user.email &&  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/addServices" className="nav-link active ">AddServices</Link>
        </li>
          <li className="nav-item">
          <Link to="/mybooking" className="nav-link active" href="#">My Booking</Link>
        </li>
        <li className="nav-item">
          <Link to="/manageBooking" className="nav-link active ">Manage AllBooking</Link>
        </li>
        </ul> }
      <span className="ms-3 fw-bold fs-5 text-light mt-1">{user?.displayName}</span>
       <img width="60px"  className="rounded-circle mx-3" src={user?.photoURL} alt="" />

  {user.email? <button onClick={SignOut} style={{height:'40px'}} className="btn btn-outline-success text-light" >LogOut</button> :  <Link to="/login"><button className="btn btn-outline-success text-light" >Login</button></Link>}   
  </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;