import React from 'react';

const Hero = () => {
  return (
    <header className='container text-center mt-5 px-3'>
      <h1>Zerodha Products</h1>
      <h3 className='text-muted mt-3 fs-4 lead'>
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className='mt-3'>
        Check out our{' '}
        <a href='#' className='text-primary text-decoration-none fw-semibold'>
          investment offerings →
        </a>
      </p>
    </header>
  );
};

export default Hero;
