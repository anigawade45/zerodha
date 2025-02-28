import React from "react";

function Universe() {
    return (
        <div style={{ textAlign: "center", padding: "50px 20px" }}>
            <h1 style={{ fontWeight: "bold" }}>The Zerodha Universe</h1>
            <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
                Extend your trading and investment experience even further with our partner platforms
            </p>

            {/* Grid Layout */}
            <div className="container">
                <div className="row justify-content-center">
                    {/* Each Item */}
                    <div className="col-md-4 col-sm-6 p-4">
                        <img src="/media/images/zerodhaFundHouse.png" alt="Zerodha Fund House" style={{ width: "50%", marginBottom: "10px" }} />
              
                        <p style={{ fontSize: "14px", color: "#666" }}>Asset Management</p>
                    </div>

                    <div className="col-md-4 col-sm-6 p-4">
                        <img src="/media/images/sensibullLogo.svg" alt="Sensibull" style={{ width: "50%", marginBottom: "10px" }} />
            
                        <p style={{ fontSize: "14px", color: "#666" }}>Options trading platform</p>
                    </div>

                    <div className="col-md-4 col-sm-6 p-4">
                        <img src="/media/images/goldenpiLogo.png" alt="Tijori" style={{ width: "50%", marginBottom: "10px" }} /> 
                       
                        <p style={{ fontSize: "14px", color: "#666" }}>Bonds Trading platform </p>
                    </div>

                    <div className="col-md-4 col-sm-6 p-4">
                        <img src="/media/images/streakLogo.png" alt="Streak" style={{ width: "50%", marginBottom: "10px" }} />
                       
                        <p style={{ fontSize: "14px", color: "#666" }}>Algo and Strategy platform.</p>
                    </div>

                    <div className="col-md-4 col-sm-6 p-4">
                        <img src="/media/images/smallcaseLogo.png" alt="Smallcase" style={{ width: "50%", marginBottom: "10px" }} />
                        
                        <p style={{ fontSize: "14px", color: "#666" }}>Thematic investing platform</p>
                    </div>

                    <div className="col-md-4 col-sm-6 p-4">
                        <img src="/media/images/dittoLogo.png" alt="Ditto" style={{ width: "35%", marginBottom: "10px" }} />
                        
                        <p style={{ fontSize: "14px", color: "#666" }}>Personalized advice on life and health insurance.</p>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button className="btn btn-primary mt-4" style={{ fontSize: "18px", padding: "12px 24px", borderRadius: "5px" }}>
                Sign up for free
            </button>
        </div>
    );
}

export default Universe;