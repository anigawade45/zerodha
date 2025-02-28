import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing FontAwesome React icon

function Stats() {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 mt-5">
                    <h1 className="fs-2">Trust with confidence</h1>
                    <h2 className="fs-5">Customer-first always</h2>
                    <p className="text-muted">
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments 
                        and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <h2 className="fs-5">No spam or gimmicks</h2>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps 
                        that you use at your pace, the way you like.
                    </p>
                    <h2 className="fs-5">The Zerodha universe</h2>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer 
                        you tailored services specific to your needs.
                    </p>
                    <h2 className="fs-5">Do better with money</h2>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                        but actively help you do better with your money.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src="/media/images/ecosystem.png" className="img-fluid" alt="ecosystem" style={{ width: '90%' }} />
                    <div className="mt-4 d-flex flex-column">
                        <a href="/products" className="text-decoration-none mb-2">
                            Explore our products <FaArrowRight />
                        </a>
                        <a href="/about" className="text-decoration-none">
                            Learn more about us
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
