import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const ContactSchema = Yup.object().shape({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required("Required"),
})

const Contactus = () => {

    const navigate = useNavigate();

    const contactForm = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            phone_number: '',
            message: ''
        },
        onSubmit: async (values, action) => {
            console.log(values);

            const res = await fetch('http://localhost:3000/contacts/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    text: 'We will contact you soon'
                })
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Message Failed',
                    text: 'Oops! Something went wrong'

                })
            }
        },
        validationSchema: ContactSchema,
    });

    return (
        <div className="container mt-5">
            <div className="card-shadow">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center p-5">
                        <h1 className='position-absolute display-5 text-danger' style={{ fontFamily: "fantasy" }}>Query ? Connect with us</h1>
                        <form onSubmit={contactForm.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 c-margin">
                                    <input type="text" className="form-control inp-clr" placeholder="First name"
                                        id="fname"
                                        onChange={contactForm.handleChange}
                                        value={contactForm.values.fname} />
                                </div>
                                <div className="col-md-6 c-margin">
                                    <input type="text" className="form-control inp-clr" placeholder="Last name"
                                        id="lname"
                                        onChange={contactForm.handleChange}
                                        value={contactForm.values.lname} />
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <input type="email" className="form-control mt-4 inp-clr" placeholder="Email"
                                            id="email"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.email} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="number" className="form-control mt-4 inp-clr" placeholder="Phone Number"
                                            id="phone_number"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.phone_number} />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea type="text" className="form-control mt-4 inp-clr" placeholder="Enquiry message..."
                                            id="message"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.message} />
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-danger mt-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img className='c-img' src="https://cdn.dribbble.com/users/180062/screenshots/6784972/dribbble.gif" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus