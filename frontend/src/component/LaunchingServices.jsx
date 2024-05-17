import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const LaunchingServices = () => {
  const [services, setServices] = useState([]);


  const { category } = useParams();

  const fetchLaunchingServices = async () => {
    const res = await fetch("http://localhost:3000/services/getbyscategory/launching");

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
    fetchLaunchingServices();
  }, []);

  const displayServices = () => {
    if (services.length === 0) {
      return <h1>No Products Found</h1>
    }
    return services.map((service) => (
      <div className="conatainer">
        <div className="col-md-6">
          <div className="card p-3 mb-5 bg-dark p-card">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="img-fluid p-card-img"
                  src={"http://localhost:3000/" + service.simage}
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <h3 style={{ paddingLeft: "20px" }} className="mt-3 text-light">{service.sname}</h3>
                <p style={{ paddingLeft: "20px" }} className="text-light">{service.sdescription}</p>
                <Link to={'/view/' + service._id} className="btn btn-outline-primary m-2">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };


  // const filterProducts = (e) => {
  //     const value = e.target.value;
  //     setproductList(productList.filter((laptop) => {
  //         return laptop.name.toLowerCase().includes(value.toLowerCase())
  //     })
  //     );
  // };

  return (
    <div className=''>
      <header className='ls-head mt-3'>
        {/* <div className='container py-5'>
            <input type="text" placeholder='Search Items' className='form-control w-50 m-auto ps-search'  />
          </div> */}
      </header>
      <div className='container mb-5 '>
        <div className='row p-5'> {displayServices()} </div>
      </div>
    </div>
  );
};

export default LaunchingServices;
