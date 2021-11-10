import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allPackage")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center p-3">All Services</h1>
      <div className="row ">
        {packages?.map((tour) => (
          <div className="col-md-4 p-1">
            <div className=" border border p-3">
              <div className="">
                <img className="w-100" src={tour?.images} alt="" />
              </div>

              <h5 className="mt-3" >{tour?.name}</h5>
              <h4 className="text-danger">Price : {tour?.price} Tk</h4>
              <Link to={`/booking/${tour._id}`}>
                <button className="btn btn-success">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
