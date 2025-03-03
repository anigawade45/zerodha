import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing FontAwesome React icon

function Stats() {
    return (
        <section className="container mt-5">
            <div className="row">
                {/* Text Section */}
                <div className="col-md-6 mt-5">
                    <h1 className="fs-2 fw-bold">Trust with confidence</h1>
                    <h2 className="fs-5 fw-bold mt-3">Customer-first always</h2>
                    <p className="text-muted">
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments 
                        and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h2 className="fs-5 fw-bold mt-3">No spam or gimmicks</h2>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps 
                        that you use at your pace, the way you like.
                    </p>

                    <h2 className="fs-5 fw-bold mt-3">The Zerodha universe</h2>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer 
                        you tailored services specific to your needs.
                    </p>

                    <h2 className="fs-5 fw-bold mt-3">Do better with money</h2>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                        but actively help you do better with your money.
                    </p>
                </div>

                {/* Image and Links Section */}
                <div className="col-md-6 text-center text-md-start">
                    <img 
                        src="/media/images/ecosystem.png" 
                        className="img-fluid" 
                        alt="Illustration of the Zerodha ecosystem" 
                        style={{ width: '90%' }} 
                    />
                    <div className="mt-3 d-flex flex-column">
                        <a href="/products" className="d-flex align-items-center gap-2 text-decoration-none fw-bold">
                            Explore our products <FaArrowRight />
                        </a>
                        <a href="/about" className="d-flex align-items-center gap-2 text-decoration-none fw-bold mt-2">
                            Learn more about us <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
