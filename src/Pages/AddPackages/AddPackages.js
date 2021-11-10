import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hook/useAuth';
import './AddPackages.css'

const AddPackages = () => {
    const {user} = useAuth();
    const { reset, register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = data =>{
         console.log(data);
    fetch("http://localhost:5000/addPackages", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      reset();
       
        };

    return (
        <div className="Add-Packages">
            <h1 className="text-center m-5">Please Add a Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",  { required: true, maxLength: 100 })} placeholder="Package Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("location")} placeholder="Location" />
                <input type="date" {...register("date")} placeholder="Date" />
                <input {...register("duration")} placeholder="Duration" />
                <input {...register("images")} placeholder="Image url" />
                <input type="number" {...register("price")} placeholder="Price"/>
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddPackages;