import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackages.css'

const AddPackages = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data =>{
         console.log(data);
    fetch("http://localhost:5000/addPackages", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
        };

    return (
        <div className="Add-Packages">
            <h1 className="text-center m-5">Please Add a Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",  { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("images")} placeholder="Image url" />
                <input type="number" {...register("price")} placeholder="Price"/>
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddPackages;