import React from 'react';

const Hero = () => {
  return (
    <section className="about-hero py-5">
      <div className="container">
        {/* Hero Title Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-semibold mb-3 animate__animated animate__fadeIn">ABOUT ZERODHA</h6>
            <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInUp">
              We pioneered the discount broking model in India.
              <span className="d-block text-primary mt-2">Now, we are breaking ground with our technology.</span>
            </h1>
            <div className="d-flex justify-content-center gap-4 mt-4 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="text-center">
                <h3 className="fw-bold text-primary mb-2">15%+</h3>
                <p className="text-secondary">of Indian Retail Trading Volume</p>
              </div>
              <div className="vr"></div>
              <div className="text-center">
                <h3 className="fw-bold text-primary mb-2">1+ Cr</h3>
                <p className="text-secondary">Active Clients</p>
              </div>
              <div className="vr"></div>
              <div className="text-center">
                <h3 className="fw-bold text-primary mb-2">₹15L Cr+</h3>
                <p className="text-secondary">Daily Turnover</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content Section */}
        <div className="row justify-content-center g-4 mt-4">
          {/* Left Column */}
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <div className="p-4 bg-light rounded-4 h-100">
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-flag-fill text-primary fs-4 me-3"></i>
                <h5 className="fw-bold mb-0">Our Journey</h5>
              </div>
              <p className="lead mb-4">
                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.
              </p>
              <p className="mb-4">
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
              </p>
              <p className="mb-0">
                Over 1 Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <div className="p-4 bg-light rounded-4 h-100">
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-graph-up-arrow text-primary fs-4 me-3"></i>
                <h5 className="fw-bold mb-0">Our Impact</h5>
              </div>
              <p className="lead mb-4">
                In addition to revolutionizing the broking industry, we run several popular open online educational and community initiatives to empower retail traders and investors.
              </p>
              <p className="mb-4">
                Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
              </p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <a href="/blog" className="btn btn-outline-primary">
                  <i className="bi bi-newspaper me-2"></i>
                  Read Our Blog
                </a>
                <a href="/press" className="btn btn-outline-secondary">
                  <i className="bi bi-mic me-2"></i>
                  Press Coverage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
