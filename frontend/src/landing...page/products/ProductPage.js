import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

const products = [
    {
        layout: "left",
        imageURL: "media/images/kite.png",
        productName: "Kite",
        productDescription: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
        tryDemo: "#",
        learnMore: "#",
        googlePlay: "#",
        appStore: "#"
    },
    {
        layout: "right",
        imageURL: "media/images/console.png",
        productName: "Console",
        productDescription: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
        learnMore: "#"
    },
    {
        layout: "left",
        imageURL: "media/images/coin.png",
        productName: "Coin",
        productDescription: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
        tryDemo: "#",
        learnMore: "#",
        googlePlay: "#",
        appStore: "#"
    },
    {
        layout: "right",
        imageURL: "media/images/kiteconnect.png",
        productName: "Kite Connect API",
        productDescription: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base.",
        learnMore: "#"
    },
    {
        layout: "left",
        imageURL: "media/images/varsity.png",
        productName: "Varsity mobile",
        productDescription: "An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-sized cards to help you learn on the go.",
        tryDemo: "#",
        learnMore: "#",
        googlePlay: "#",
        appStore: "#"
    }
];

const ProductPage = () => {
    return (
        <div className="bg-white">
            <Hero />
            <div id="products" className="py-4">
                {products.map((product, index) => 
                    product.layout === "left" ? 
                        <LeftSection key={index} {...product} /> 
                        : 
                        <RightSection key={index} {...product} />
                )}
            </div>
            <div className="container text-center py-5">
                <p className="text-muted fs-5">
                    Want to know more about our technology stack?{' '}
                    <a 
                        href="https://zerodha.tech" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-decoration-none fw-semibold"
                    >
                        Check out the Zerodha.tech blog →
                    </a>
                </p>
            </div>
            <Universe />
        </div>
    );
};

export default ProductPage;
