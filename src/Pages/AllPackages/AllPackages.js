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
        {packages?.map((pd) => (
          <div className="col-md-4 p-1">
            <div className=" border border p-3">
              <div className="">
                <img className="w-100" src={pd?.image} alt="" />
              </div>

              <h6>{pd?.name}</h6>
              <h4>{pd?.model}</h4>
              <p>{pd?.description}</p>
              <h3 className="text-danger"> Cost :{pd?.price}$</h3>
              <Link to={`/booking/${pd._id}`}>
                <button className="btn btn-success">Add To Cart</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
