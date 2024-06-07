import React from 'react'
// import addservice from '../assets/addservice.png'
// import MDEditor from '@uiw/react-md-editor';
import Swal from "sweetalert2";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'


const AddServicesSchema = Yup.object().shape({});


const AddServices = () => {
  const navigate = useNavigate();

  const [selFile, setSelFile] = useState("");

  const [markdownContent, setMarkdownContent] = useState("**Add Services**");

  const addServiceForm = useFormik({
    initialValues: {
      sname: '',
      scategory: '',
      sdescription: '',
      simage: ''
    },
    onSubmit: async (values, action) => {
      values.simage = selFile;
      values.content = markdownContent;
      console.log(values);


      const res = await fetch('http://localhost:3000/services/add', {
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
          icon: "success",
          title: "Item Uploaded Successfully",
        });
        enqueueSnackbar('Services Added Successfully', {
          variant: 'success', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }

        });
        navigate('/services')
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }
    },
    validationSchema: AddServicesSchema
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div className="card srv-card mt-5 w-75 d-flex mx-auto p-4">
      <h1 className="text-center">Add Services</h1>
      <div className='mt-5'>
        <MDEditor value={markdownContent} onChange={(v) => setMarkdownContent(v)} />
      </div>
      <form onSubmit={addServiceForm.handleSubmit}>
        <p className='error-label'> {addServiceForm.touched.sname && addServiceForm.errors.sname}</p>
        <input type="text" className="form-control mt-4 w-50" placeholder="Service Name" id="sname" onChange={addServiceForm.handleChange} value={addServiceForm.values.sname} />
        <p className='error-label'> {addServiceForm.touched.scategory && addServiceForm.errors.scategory}</p>
        <input type="text" className="form-control mt-4 w-50" placeholder="Service Category" id="scategory" onChange={addServiceForm.handleChange} value={addServiceForm.values.scategory} />
        <p className='error-label'> {addServiceForm.touched.sdescription && addServiceForm.errors.sdescription}</p>
        <input type="text" className="form-control mt-4 w-50" placeholder="Service Description" id="sdescription" onChange={addServiceForm.handleChange} value={addServiceForm.values.sdescription} />
        <label htmlFor="file" className="form-label mt-4">Upload Image</label>
        <input type="file" className="form-control w-50" placeholder="Upload Image" onChange={uploadFile} />
        <button type="submit" className="btn btn-primary mt-4" onChange={addServiceForm.handleChange}>Add Service</button>
      </form>
    </div>
  )
}

export default AddServices