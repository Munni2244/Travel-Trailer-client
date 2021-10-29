import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=" d-flex justify-content-center mt-5">
            <div className=" text-center formStyle py-5">
            <h1>Add A Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })}  placeholder="Name"/> <br />
      <input {...register("price")} placeholder="price" /> <br />
      <input type="text" {...register("desc")} placeholder="description" /> <br />
      <input type="url" {...register("text")} placeholder="Url" /> <br />
      <input type="submit" />
    </form>

            </div>
        </div>
    );
};

export default AddServices;