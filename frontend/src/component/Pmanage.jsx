import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";


const Pmanage = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  const { category } = useParams();

  const fetchPlanningServices = async () => {
    const res = await fetch("http://localhost:3000/services/getbyscategory/planning");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    
    if (category) {
      setServices(data.filter((ser) => ser.category === category));
    } else {
      setServices(data);
    }
  };

  useEffect(() => {
    fetchPlanningServices();
  }, []);

  const deleteService = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/services/delete/' + id, { method: 'DELETE' });

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
        <td>{service.sname}</td>
        {/* <td>{service.scategory}</td> */}
        <td>{service.sdescription}</td>
        {/* <td>{service.pricingplan}</td> */}
    
        <td>
        <button className='btn btn-danger' onClick={() => { deleteService(service._id) }} >Delete</button>
        </td>
        <td>
        <button  className='btn btn-danger' onClick={ () => { navigate('/UpdateService/'+service._id) }} > Update</button>
        </td>
        
      </tr>
    ));
  }


  return (
    <div>
      <header className=" mt-2">
        <div className="container py-5">
          <h1 className="">Management of Planning Services</h1>
          <hr />
          <div className="row">
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </header>



      <div className="container">

        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              {/* <th>Image</th> */}
              <th>Name</th>
              {/* <th>Category</th> */}
              <th colSpan={2}>Description</th>
              <th></th>
              
              {/* <th>Pricing Plan</th> */}
           
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

export default Pmanage