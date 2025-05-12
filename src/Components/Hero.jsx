import React from "react";

const Hero = () => (
  // <section className="text-center p-5 bg-dark text-white">
  //   <h1>Mohamed Hassan</h1>
  //   <h3>System Administration Engineer</h3>
  //   <button className="btn btn-outline-light mt-3">Contact Me</button>
  // </section>
  <section className="container p-5 bg-dark text-white">

    <div className="row align-items-center">
      <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
        <h1>
          <strong>Mohamed Hassan</strong>
        </h1>
        <h4 className="mb-3">System Administration Engineer</h4>
        <a href="#contact" className="btn btn-outline-light">
          Contact Me
        </a>
      </div>

      <div className="col-md-6 text-center">
        <img
          src="/src/assets/img/mohamed.jpg"
          alt="Mohamed Hassan"
          className="rounded-circle img-fluid"
          style={{ maxWidth: "250px", border: "4px solid white" }}
        />
      </div>
      
    </div>
  </section>
);

export default Hero;
