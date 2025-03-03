import React from 'react';

const Team = () => {
  return (
    <section className="container my-5">
      {/* Title Section */}
      <div className="row p-5 mt-4 mb-5 border-top">
        <h1 className="text-center fw-bold">People</h1>
      </div>

      {/* Team Member Section */}
      <div className="row p-3 p-md-5 mb-2 text-secondary" style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
        
        {/* Left Column - Image */}
        <div className="col-md-6 col-12 p-3 p-md-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath - Founder & CEO of Zerodha"
            className="d-block mx-auto shadow-sm"
            style={{ borderRadius: "50%", width: "60%", maxWidth: "100%", minWidth: "150px" }}
          />
          <h4 className="mt-3 fw-bold">Nithin Kamath</h4>
          <h5 className="text-muted">Founder, CEO</h5>
        </div>

        {/* Right Column - Bio */}
        <div className="col-md-6 col-12 p-3 p-md-5 d-flex flex-column justify-content-center text-center text-md-start">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p><strong>Playing basketball is his zen.</strong></p>
          <p>
            Connect on:
            <a href="https://zerodha.com" className="ms-2 text-decoration-none fw-bold d-inline-block" target="_blank" rel="noopener noreferrer">Homepage</a> /
            <a href="https://tradingqna.com" className="ms-2 text-decoration-none fw-bold d-inline-block" target="_blank" rel="noopener noreferrer">TradingQnA</a> /
            <a href="https://twitter.com/Nithin0dha" className="ms-2 text-decoration-none fw-bold d-inline-block" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Team;
