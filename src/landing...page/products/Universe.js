import React from "react";

const Universe = () => {
  const platforms = [
    { img: "/media/images/zerodhaFundHouse.png", alt: "Zerodha Fund House", description: "Asset Management" },
    { img: "/media/images/sensibullLogo.svg", alt: "Sensibull", description: "Options trading platform" },
    { img: "/media/images/goldenpiLogo.png", alt: "GoldenPi", description: "Bonds trading platform" },
    { img: "/media/images/streakLogo.png", alt: "Streak", description: "Algo and strategy platform" },
    { img: "/media/images/smallcaseLogo.png", alt: "Smallcase", description: "Thematic investing platform" },
    { img: "/media/images/dittoLogo.png", alt: "Ditto", description: "Personalized insurance advice" },
  ];

  return (
    <div className="text-center py-5">
      <h1 className="fw-bold">The Zerodha Universe</h1>
      <p className="fs-5 text-muted mb-4">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Grid Layout */}
      <div className="container">
        <div className="row justify-content-center">
          {platforms.map(({ img, alt, description }, index) => (
            <div key={index} className="col-md-4 col-sm-6 p-3 d-flex flex-column align-items-center">
              <img src={img} alt={alt} className="img-fluid mb-2" style={{ maxWidth: "50%" }} />
              <p className="text-muted fs-6">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="btn btn-primary mt-4 fs-5 px-4 py-2 rounded">
        Sign up for free
      </button>
    </div>
  );
};

export default Universe;
