import MDEditor from "@uiw/react-md-editor";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import icon from '../assets/ser-icon.gif';
import icons from '../assets/icon.gif'


const ViewService = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState({});

    const fetchPlanData = async () => {
        const res = await fetch("http://localhost:3000/services/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserData(data);
    };

    useEffect(() => {
        fetchPlanData();
    }, []);

    return (
        <div className="col-md-6 mx-auto">
            <div className="row"><span className="ser-i"><img className="ser-ic" src={icons}/></span>
                <div className="card-shadow m-5 p-3"><span className="ser"><img className="ser-icon" src={icons}/></span>
                    <div data-color-mode="light">
                        <MDEditor.Markdown source={userData.content} style={{ whiteSpace: 'pre-wrap' }} />
                    </div>
                </div>
            </div>
            <section className="">
                <div className="card bg-dark w-100 mb-5 ">
                    <h3 className="text-light p-4">Need help? Contact for free business councelling</h3>
                    <Link to='/Contact2' className="btn btn-primary w-25 m-3">Find Councellor</Link>
                </div>
            </section>
        </div>
        
    )
}

export default ViewService