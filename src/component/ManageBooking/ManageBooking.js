import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageBooking = () => {
    const [allBooking, setAllBooking]= useState([]);
    const [isdelete, setIsDelete]=useState(false);

    useEffect(()=>{
        fetch('https://dark-shadow-34666.herokuapp.com/addBooking')
        .then(res=> res.json())
        .then(data=>setAllBooking(data))
    },[isdelete])

    ////cancel booking
    const CancelBooking=(id)=>{
        setIsDelete(false)
        fetch(`https://dark-shadow-34666.herokuapp.com/deleteAllBooking/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.acknowledged){
                
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
            
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                    setIsDelete(true);
                  })
            }
            else{
                setIsDelete(false)
            }
        })
    }

    ///update Booking
    const ApproveBooking=(id)=>{
        fetch(`https://dark-shadow-34666.herokuapp.com/approveBookig/${id}`,{
            method:"PUT",
        })
        .then(res=> res.json())
        .then(data=>console.log(data))

    }
    return (
        <div >
            <div className="m-3">
            <h1 className="text-center text-danger mb-4">All Bookings</h1>
           <div className="table-responsive">
           <table className="table table-dark table-hover">
        <thead>
         <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
           <th scope="col">Email</th>
         <th scope="col">Service</th>
         <th scope="col">Reg Date:</th>
         <th scope="col">Address</th>
         <th scope="col">Amount</th>
         <th scope="col">Status</th>
         </tr>
         </thead>
         {
             
                allBooking?.map(booking=> 
                   
        
         <tbody>
            <tr>
            <th scope="row">#</th>
            <td>{booking.name}</td>
            <td>{booking.email}</td>
            <td>{booking.title}</td>
            <td>{booking.date}</td>
            <td>{booking.address}</td>
            <td>{booking.price}</td>
            <td>{booking.status} <button onClick={()=>ApproveBooking(booking._id)} className="btn btn-success">Approve</button> <button  onClick={()=>CancelBooking(booking._id)} className="btn btn-danger ms-1">Cancel</button></td>
           
           </tr>
        </tbody>
                    
     )
            }
    </table>
           </div>
          
        </div>
        </div>
    );
};

export default ManageBooking;
