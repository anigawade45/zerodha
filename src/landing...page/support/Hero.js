import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h4 className="mt-0">Support Portal</h4>
                <a href="#">Track Tickets</a>
            </div>
            <div className="row p-3 m-3">
                <div className="col-md-6 p-3">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="E.g., how do I activate F&O" 
                            aria-label="Search Support Articles" 
                        />
                    </div>
                    <div className="d-flex flex-column">
                        <a href="#" className="text-white">Track account opening</a>
                        <a href="#" className="text-white">Track segment activation</a>
                        <a href="#" className="text-white">Intraday margins</a>
                        <a href="#" className="text-white">Kite user manual</a>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                            <a href="#" className="text-white">
                                Current Takeovers and Delisting - January 2024
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white">
                                Latest Intraday leverages - MIS & CO
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
