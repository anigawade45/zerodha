import React from 'react';

function Hero() {
    return (
        <section className="container p-5">
            <div className="row justify-content-center text-center">
                <div className="col-md-8">
                    <img 
                        src="/media/images/homeHero.png" 
                        alt="Illustration of investment opportunities" 
                        className="mb-5 img-fluid" 
                    />
                    <h1 className="mt-5">Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button 
                        className="btn btn-primary fs-5 mb-5 d-block mx-auto px-4" 
                        aria-label="Sign up now for investing"
                    >
                        Signup now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
