import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/UseAuth/useAuth';

const BookingPlace = () => {
    const {user}=useAuth();
    const { register, handleSubmit } = useForm();
    const {id}=useParams();
  const [bookings, setBookings]=useState({});

//get single booking
  useEffect(()=>{
      fetch(`http://localhost:5000/booking/${id}`)
      .then(res=> res.json())
      .then(data=>{
          setBookings(data);

      })
  },[])

  const onSubmit = data => {
      data.status='Pending';
      data.title=`${bookings.name}`;
      data.price=`${bookings.price}`
      fetch('http://localhost:5000/addBooking', {
          method:'POST',
          headers:{'content-type': 'application/json'},
          body:JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=>{
          if(data.acknowledged){
            Swal.fire(
                'Good job!',
                'Posted Successfully!'
              )
          }
        
         console.log(data);
      })
  };

    return (
        <div className="container mt-5">

            {/* details */}
            <div className="row">
            <div className="col-lg-6 col-12 ">
                <div className="shadow p-4">
                    <img width="500px" height="400px" src={bookings.img} alt="" />
                   <h1>{bookings.name}</h1>
                   <p>{bookings.desc}</p>
                   <h3>${bookings.price}</h3>
                </div>
            </div>

            <div className="col-lg-6 col-12">
         <div className=" d-flex justify-content-center mt-5">
            <div className=" text-center formStyle py-5">
            <h1>Register For Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name")}  placeholder="Name" defaultValue={user? user.displayName : ''}/> <br />
            <input {...register("email")}  placeholder="email" defaultValue={user? user.email : ''}/> <br />
      
                <input type="text" {...register("address")} placeholder="Address"  /> <br />
             <input type="date" {...register("date")} placeholder="date" /> <br />
             <input type="submit" />
    </form>

            </div>
        </div>

            </div>
              </div>
            </div>
    );
};

export default BookingPlace;