import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react';
import rocket from '../assets/homeLaunch.gif'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../assets/about.png'
// import choice from '../assets/choice.png'
// import team from '../assets/team.png'
import specializations from '../assets/specializations.png'
// import Fade from 'react-reveal/Fade';
import choice from '../assets/choice.png'
import team from '../assets/team.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='slide1'>
                    <div className="container d-flex justify-content-center">
                        {/* <Fade bottom> */}
                            <h1 className='s1-txt-h1'>Welcome to</h1>
                            <h1 className='s1-txt-h2'>BUSINESS INCUBATOR</h1>
                            <p className='s1-txt-p'>Where business takes flight!!</p>
                        {/* </Fade> */}
                        <Link to="/services" className='btn btn-danger start-b'>Get Started</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <div className="container d-flex justify-content-center">
                        {/* <Fade bottom> */}
                            <h1 className='s2-txt-h1'>We Prepare</h1>
                            <h1 className='s2-txt-h2'>startups for</h1>
                            <h1 className='s2-txt-h3'>accelerators</h1>
                        {/* </Fade> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide3'>
                    {/* <Fade bottom> */}
                        <h1 className='s3-txt-h1'>PROVIDING EXPERT SERVICES FOR</h1>
                        <h1 className='s3-txt-h2'>YOUR ENTREPRENEURIAL</h1>
                        <h1 className='s3-txt-h3'>JOURNEY !!!</h1>
                    {/* </Fade> */}
                </SwiperSlide>

            </Swiper>

            <section className='d-flex mb-5'>
                <img className='rocket-gif' src={rocket} />
                {/* <Fade right> */}
                    <div className="card justify-content-right a-card">
                        <h5 className='quote'>"All ventures are born from a clever idea, but not all new ideas end up becoming new companies"</h5>
                        <p className='mt-5 c-para'>Empower Your Startup Journey! We're here to guide you from idea to success. Explore our comprehensive services and turn your dreams into reality.</p>
                    </div>
                {/* </Fade> */}
            </section>
            <section className='d-flex justify-content-center'>
                <div className="card-shadow w-75 p-2">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            {/* <Fade bottom> */}
                                <h2 className="display-2 mb-4 text-danger">About Us</h2>
                                <h4 className="txt text-justify" style={{ fontFamily: "calibri" }}>
                                    At Business Incubator, we're your launchpad for success. Our team is dedicated to nurturing the next generation of innovators and entrepreneurs. With a suite of support services, including mentorship, funding opportunities, and shared workspace, we empower startups to thrive. Join us on this exciting journey as we help turn your business dreams into reality.
                                </h4>
                            {/* </Fade> */}
                        </div>
                        <div className="col-md-6">
                            <img src={img} alt='' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>

            <section>

            </section>

            <section className='d-flex justify-content-center mt-5'>
                <div className="card-shadow w-75">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4">
                            <img src={specializations} alt='' className='img-fluid w-100' />
                        </div>
                        <div className="col-md-8">
                            {/* <Fade bottom> */}
                                <h2 className="mb-3 display-2 text-danger">Our Specializations</h2>
                                <h4 className="txt text-justify  mb-5" style={{ fontFamily: "calibri" }}>
                                    We specialize in three essential services – planning, launching, and managing – to guide your entrepreneurial journey from inception to success. In the planning phase, our experienced consultants work closely with you to develop robust business plans, conducting market research and financial modeling to ensure a solid foundation for your venture. As you embark on launching your business, we provide comprehensive support, offering insights into optimal locations, marketing strategies, and funding opportunities. Once your business is off the ground, our management services come into play, ensuring seamless operations, strategic growth planning, and ongoing support.
                                </h4>
                            {/* </Fade> */}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                {/* <Fade bottom> */}
                    <h2 className='text-center text-danger features'>||   KEY FEATURES   ||</h2>

                    <div className="container">
                        <div className="row mb-5 d-flef justify-content-around">
                            <div className="col-md-3">
                                <div className="card h-card">
                                    <div className="carad-head d-flex mx-auto p-3">
                                        <img src="https://img.icons8.com/ios/50/000000/idea.png" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Mentorship</h5>
                                        <p className="card-text text-center">Incubators offer guidance, enhancing entrepreneurs' skills for startup success.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card h-card">
                                    <div className="carad-head d-flex mx-auto p-3">
                                        <img src="https://img.icons8.com/ios/50/000000/idea.png" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Networking</h5>
                                        <p className="card-text text-center">Facilitate connections among entrepreneurs, investors, and experts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card h-card">
                                    <div className="carad-head d-flex mx-auto p-3">
                                        <img src="https://img.icons8.com/ios/50/000000/idea.png" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Infrastructure Support</h5>
                                        <p className="card-text text-center"> Provide essential resources, like office space and technology, reducing operational costs for startups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Fade> */}
            </section>

            <section className='choice-team'>
                <div className="container d-flex justify-content-center">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                            {/* <Fade left> */}
                                <div className="card-shadow c p-3 mb-5">
                                    <div className="row gy-3 gy-md-0 align-items-md-center">
                                        <div className="col-md-5">
                                            <img
                                                src={choice}
                                                className="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body p-0">
                                                <h2 className="card-title h4 mb-3 text-danger">Why Choose Us?</h2>
                                                <p className="card-text lead">
                                                    Choose us because we are your trusted partner in entrepreneurial success. We offer comprehensive support, a proven track record, and a vibrant community.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </Fade> */}
                        </div>
                        <div className="col-md-6">
                            {/* <Fade right> */}
                                <div className="card-shadow c p-3 mb-5">
                                    <div className="row gy-3 gy-md-0 align-items-md-center">
                                        <div className="col-md-5">
                                            <img
                                                src={team}
                                                className="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body p-0">
                                                <h2 className="card-title h4 mb-3 text-danger">Visionary Team</h2>
                                                <p className="card-text lead">
                                                    With a team of visionary engineers, developers, and creative
                                                    minds, we embark on a journey to transform complex
                                                    challenges into ingenious technological solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </Fade> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='d-flex justify-content-center'>
                {/* <Fade left> */}
                    <div className="card roadmap-card">
                        <h1>Start and grow your business</h1>
                        <hr />
                        <h5 className='mt-4 mb-4'>Want to be an entrepreneur? Learn how to get started on your business in few steps</h5>
                        <Link to='/Roadmap' class="btn btn-danger w-25">Start a business</Link>
                    </div>
                {/* </Fade> */}
            </section>

            <section>
                <>
                    {/* Footer */}
                    <footer className="text-center text-lg-start bg-dark text-light">
                        {/* Section: Social media */}
                        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                            {/* Left */}
                            {/* <div className="me-5 d-none d-lg-block">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            {/* Left */}
                            {/* Right */}
                            <div>
                                <a href="" className="me-4 link-secondary">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="" className="me-4 link-secondary">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="" className="me-4 link-secondary">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="" className="me-4 link-secondary">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="" className="me-4 link-secondary">
                                    <i className="fab fa-linkedin" />
                                </a>
                                <a href="" className="me-4 link-secondary">
                                    <i className="fab fa-github" />
                                </a>
                            </div>
                            {/* Right */}
                        </section>
                        {/* Section: Social media */}
                        {/* Section: Links  */}
                        <section className="">
                            <div className="container text-center text-md-start mt-5">
                                {/* Grid row */}
                                <div className="row mt-3">
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* Content */}
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            <i className="fas fa-gem me-3 text-secondary" />
                                            Company name
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eaque.
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                                        <p>
                                            <Link to='/services' className="text-reset">
                                                Planning
                                            </Link>
                                        </p>
                                        <p>
                                            <Link to='/services' className="text-reset">
                                                Launching
                                            </Link>
                                        </p>
                                        <p>
                                            <Link to='/services' className="text-reset">
                                                Managing
                                            </Link>
                                        </p>

                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                        <p>
                                            <Link to='/Roadmap' className="text-reset">
                                                roadmap
                                            </Link>
                                        </p>
                                        <p>
                                            <Link to="/Contact2" className="text-reset">
                                                contat us
                                            </Link>
                                        </p>
                                        <p>
                                            <Link to='/services' className="text-reset">
                                                services
                                            </Link>
                                        </p>
                                        <p>
                                            <Link to='/Signup' className="text-reset">
                                                register
                                            </Link>
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                        <p>
                                            <i className="fas fa-home me-3 text-secondary" /> Lucknow, INDIA
                                        </p>
                                        <p>
                                            <i className="fas fa-envelope me-3 text-secondary" />
                                            businessincub@gmail.com
                                        </p>
                                        <p>
                                            <i className="fas fa-phone me-3 text-secondary" /> + 91 7269095830
                                        </p>
                                        <p>
                                            <i className="fas fa-print me-3 text-secondary" /> + 91 9451548472
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </div>
                        </section>
                        {/* Section: Links  */}
                        {/* Copyright */}
                        <div
                            className="text-center p-4"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
                        >
                            © 2023 Copyright:
                            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                                BusinessIncubator.com
                            </a>
                        </div>
                        {/* Copyright */}
                    </footer>
                    {/* Footer */}
                </>

            </section>
        </div>
    )
}

export default Home