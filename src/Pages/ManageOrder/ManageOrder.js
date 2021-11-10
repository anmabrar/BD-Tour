import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [manageOrder, setManageOrder] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
      };
      console.log(status);
      useEffect(() => {
        fetch("http://localhost:5000/allOrders")
          .then((res) => res.json())
          .then((data) => setManageOrder(data));
      }, []);
    
        // const status = "apporved";
      const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ status }),
        });
    
        console.log(id);
      };

    return (
        <div className="container">
      <h1 className="text-center m-5">All manage Order : {manageOrder.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Tour Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {manageOrder?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.date}</td>
              <td>{pd.price}</td>
              <td>
              <select onClick={handleStatus} >
        <option  value={pd.status}>{pd.status}</option>
          <option value="Approve">Approve</option>
        </select>
              </td>
              <button className="btn bg-danger p-2">Delete</button>
              <button
                onClick={() => handleUpdate(pd._id)}
                className="btn bg-success p-2"
              >
                Update
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    );
};

export default ManageOrder;