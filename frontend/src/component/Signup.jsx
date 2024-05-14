import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const navigate = useNavigate();

  // step1 : formik initialization
  const SignupForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },

    onSubmit: async (values, action) => {
      try {
        const res = await fetch('http://localhost:3000/user/add', {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log(res.status)
        action.resetForm()

        if (res.status === 200) {
          enqueueSnackbar('Signup successful', { variant: 'success' });

        } else {
          const data = await res.json();
          enqueueSnackbar(data.message || 'Signup failed', { variant: 'error' });
        }
      } catch (error) {
        console.error('Signup failed:', error);
        enqueueSnackbar('Signup failed', { variant: 'error' });
      }
    },
    validationSchema: SignupSchema
  });
  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className="">
          {/* Jumbotron */}
          <div
            className="px-4 py-5 px-md-5 text-center text-lg-start"
            style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
          >
            <div className="container">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1 className="my-5 display-3 fw-bold ls-tight">
                    The best offer <br />
                    <span className="text-primary">for your business</span>
                  </h1>
                  <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                    itaque accusantium odio, soluta, corrupti aliquam quibusdam
                    tempora at cupiditate quis eum maiores libero veritatis? Dicta
                    facilis sint aliquid ipsum atque?
                  </p>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card">
                    <div className="card-body py-5 px-md-5">
                      <form>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init="" className="form-outline">
                              <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                              />
                              {/*/step2 : handling when submit */}
                              <form onSubmit={SignupForm.handleSubmit}>
                                <label className="form-label" htmlFor="form3Example1">
                                  First name
                                </label>
                                <span style={{ color: 'red', fontSize: '10' }}>{SignupForm.touched.firstname && SignupForm.errors.firstname}</span>
                                <input type="text" className="form-control mb-4"
                                  id="firstname"
                                  onChange={SignupForm.handleChange}
                                  value={SignupForm.values.firstname} />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init="" className="form-outline">
                              <input
                                type="text"
                                id="form3Example2"
                                className="form-control"
                              />
                              <label className="form-label" htmlFor="form3Example2">
                                Last name
                              </label>
                              <span style={{ color: 'red', fontSize: '10' }}>{SignupForm.touched.lastname && SignupForm.errors.lastname}</span>
                              <input type="text" className="form-control mb-4"
                                id="lastname"
                                onChange={SignupForm.handleChange}
                                value={SignupForm.values.lastname} />
                            </div>
                          </div>
                        </div>
                        {/* Email input */}
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                          <span style={{ color: 'red', fontSize: '10' }}>{SignupForm.touched.email && SignupForm.errors.email}</span>
                          <input type="text" className="form-control mb-4"
                            id="email"
                            onChange={SignupForm.handleChange}
                            value={SignupForm.values.email} />
                        </div>
                        {/* Password input */}
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                          <span style={{ color: 'red', fontSize: '10' }}>{SignupForm.touched.password && SignupForm.errors.password}</span>
                          <input type="text" className="form-control mb-4"
                            id="password"
                            onChange={SignupForm.handleChange}
                            value={SVGAnimateElementignupForm.values.password} />
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  )
}
  }


export default Signup