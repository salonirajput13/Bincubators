import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const EnquiryData = () => {
  const [data, setData] = useState([]);

//   const { category } = useParams();

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/contacts/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    // if (category) {
    //   setServices(data.filter((ser) => ser.category === category));
    // } else {
    setData(data);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/contacts/delete/' + id, { method: 'DELETE' });

    if (res.status === 200) {
      fetchData();
      // alert.success('User Deleted Successfully');

    }
  }


  const displayData = () => {
    return data.map((user, index) => (
      <tr>
        {/* <td>
          <img style={{ height: 50 }} src={service.simage} alt="" />
        </td> */}
        <td >{user.fname}</td>
        {/* <td>{service.scategory}</td> */}
        <td>{user.lname}</td>
        <td>{user.email}</td>
        <td>{user.phone_number}</td>
        <td>{user.message}</td>
        {/* <td>{service.pricingplan}</td> */}
      
        <td>
        <button className='btn btn-danger' onClick={() => { deleteData(user._id) }} >Delete</button>
        </td>

      </tr>
    ));
  }


  return (
    <div>
      <header className=" mt-2">
        <div className="container py-5">
          <h1 className="">Enquiry Data</h1>
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
              <th className='text-center'>First Name</th>
              <th className='text-center'>Last Name</th>
              {/* <th colSpan={2}>Description</th> */}
              <th className='text-center'>Email</th>
              <th className='text-center'>Phone Number</th>
              <th className='text-center'>Message</th>
              <th></th>
              {/* <th>Pricing Plan</th> */}
             
            </tr>
          </thead>
          <tbody>
            {displayData()}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default EnquiryData