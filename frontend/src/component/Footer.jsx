import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="text-center text-lg-start bg-dark text-light">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
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
                                    <a href="#!" className="text-reset">
                                        Planning
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Launching
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Managing
                                    </a>
                                </p>

                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        roadmap
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        contat us
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        services
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        register
                                    </a>
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

        </div>
    )
}

export default Footer