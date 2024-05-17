import React, { useState } from "react";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useFormik } from "formik";

const AdminProfile = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  const [passwordHidden, setPasswordHidden] = useState(true);

  const url = app_config.apiUrl;

  const userForm = useFormik({
    initialValues: currentUser,
    onSubmit: async (data) => {
      console.log(data);
      const res = await fetch(url + "/users1/update/" + currentUser._id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      const userdata = (await res.json()).result;
      console.log(userdata);
      setCurrentUser(userdata);
      sessionStorage.setItem("user", JSON.stringify(userdata));
    },

  })

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ avatar: file.name });
      }
    });
  };

  const deleteAccount = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/users1/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      // fetchPlanningServices();
      // alert.success('User Deleted Successfully');
      Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
    }
  }

  // const deleteAccount = async () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //   })
  //   const res = await fetch(url + "/users1/delete/" + currentUser._id, {
  //     method: "DELETE",
  //   });
  //   if (res.status === 200) {
  //     sessionStorage.removeItem("user");
  //     window.location.href = "/";
  //   }
  //   return;
  // };


  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card mb-4">
              <div className="card-header bg-primary text-light py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <img
                  height={200}
                  className="border-rounded d-block m-auto"
                  src={
                    currentUser.avatar &&
                      `${url}/${currentUser.avatar}`
                  }
                  alt=""
                />
                <label
                  className="btn btn-outline-secondary w-100 mt-3"
                  htmlFor="upload-image"
                >
                  {" "}
                  <i class="fas fa-pen"></i>&nbsp;Edit{" "}
                </label>
                <input
                  type="file"
                  hidden
                  onChange={uploadProfileImage}
                  id="upload-image"
                />
                <p className="text-center text-dark">
                  Hello <span className="h4">{currentUser.name}</span>! Welcome
                  Back
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Email
                    <span className="fw-bold">{currentUser.email}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Password
                    {passwordHidden ? (
                      <span className="fw-bold">********</span>
                    ) : (
                      <span className="fw-bold">{currentUser.password}</span>
                    )}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setPasswordHidden(!passwordHidden)}
                    >
                      {passwordHidden ? "Show" : "Hide"}
                    </button>
                  </li>
                  
                </ul>
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={() => deleteAccount(currentUser._id)}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-header bg-primary text-light py-3">
                <h5 className="mb-0">All details</h5>
              </div>
              <div className="card-body">
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="">
                      <label className="form-label fw-bold" htmlFor="form7Example1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          onChange={userForm.handleChange}
                          value={userForm.values.fname}
                          className="form-control"
                        />
                        
                      </div>
                    </div>
                    <div className="col">
                      <div className="">
                      <label className="form-label fw-bold" htmlFor="form7Example2">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lname"
                          onChange={userForm.handleChange}
                          value={userForm.values.lname}
                          className="form-control"
                        />
                        
                      </div>
                    </div>
                  </div>
                  
                  {/* Text input */}
                  <div className=" mb-4">
                  <label className="form-label fw-bold" htmlFor="form7Example4">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      onChange={userForm.handleChange}
                      value={userForm.values.address}
                      className="form-control"
                    />
                   
                  </div>
                  {/* Email input */}
                  <div className=" mb-4">
                  <label className="form-label fw-bold" htmlFor="form7Example5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={userForm.handleChange}
                      value={userForm.values.email} 
                      className="form-control"
                    />
                    
                  </div>
                  {/* Number input */}
                    <label className="form-label fw-bold" htmlFor="form7Example6">
                      Phone
                    </label>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="contact"
                      onChange={userForm.handleChange}
                      value={userForm.values.contact}
                      className="form-control"
                    />
                  </div>
                  {/* Message input */}
                    <label className="form-label fw-bold" htmlFor="form7Example7">
                      Additional information
                    </label>
                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form7Example7"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-2">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form7Example8"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="form7Example8">
                      Create an account?
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;