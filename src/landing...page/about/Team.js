import React from 'react';

const Team = () => {
  return (
    <div className="container">
      {/* Title Section */}
      <div className="row p-5 mt-4 mb-5 border-top">
        <h1 className="text-center mb-5 mt-5">People</h1>
      </div>
      {/* Team Member Section */}
      <div className="row p-3 p-md-5 mb-2 text-muted" style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>

        {/* Left Column - Image */}
        <div className="col-md-6 col-12 p-3 p-md-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="d-block mx-auto"
            style={{ borderRadius: "100%", width: "60%", maxWidth: "100%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h5 className="text-secondary">Founder, CEO</h5>
        </div>

        {/* Right Column - Bio */}
        <div className="col-md-6 col-12 p-3 p-md-5 d-flex flex-column justify-content-center">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on:
            <a href="https://zerodha.com" className="ms-2 text-decoration-none" target="_blank" rel="noopener noreferrer">Homepage</a> /
            <a href="https://tradingqna.com" className="ms-2 text-decoration-none" target="_blank" rel="noopener noreferrer">TradingQnA</a> /
            <a href="https://twitter.com/Nithin0dha" className="ms-2 text-decoration-none" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
