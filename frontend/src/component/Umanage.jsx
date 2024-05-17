import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const Umanage = () => {
  const [services, setServices] = useState([]);

//   const { category } = useParams();

  const fetchPlanningServices = async () => {
    const res = await fetch("http://localhost:3000/users1/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    // if (category) {
    //   setServices(data.filter((ser) => ser.category === category));
    // } else {
    setServices(data);
    // }
  };

  useEffect(() => {
    fetchPlanningServices();
  }, []);

  const deleteService = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/users1/delete/' + id, { method: 'DELETE' });

    if (res.status === 200) {
      fetchPlanningServices();
      // alert.success('User Deleted Successfully');

    }
  }
  
  const displayServices = () => {
    return services.map((service, index) => (
      <tr>
        {/* <td>
          <img style={{ height: 50 }} src={service.simage} alt="" />
        </td> */}
        <td>{service.fname}</td>
        <td>{service.lname}</td>
        <td>{service.email}</td>
        {/* <td>{service.pricingplan}</td> */}
        <td>
          
        </td>
       
        <td>
        <button className='btn btn-danger' onClick={() => { deleteService(service._id) }} >Delete</button>
        </td>
        
      </tr>
    ));
  }


  return (
    <div>
      <header className=" mt-2">
        <div className="container py-5">
          <h1 className="">User Database</h1>
          <hr />
          <div className="row">
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </header>



      <div className="container">

        <table className="table table-dark">
          <thead>
            <tr>
              {/* <th>Image</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th colSpan={2}>Email</th>
              {/* <th>Pricing Plan</th> */}
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {displayServices()}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Umanage