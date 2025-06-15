import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className='container text-center my-5 px-3'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='display-4 fw-bold mb-4'>
          Trading Tools That
          <span className='text-primary'> Empower You</span>
        </h1>
        <h3 className='text-muted fs-4 lead mb-4 mx-auto' style={{ maxWidth: '700px' }}>
          Discover our suite of powerful, modern, and intuitive trading platforms 
          designed to enhance your investment journey
        </h3>
        <div className='d-flex justify-content-center gap-3 mt-4'>
          <motion.a 
            href='#products'
            className='btn btn-primary btn-lg px-4'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
          </motion.a>
          <motion.a 
            href='#investment-offerings'
            className='btn btn-outline-primary btn-lg px-4'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Investment Offerings →
          </motion.a>
        </div>
        <div className='mt-5 pt-3'>
          <p className='text-muted mb-2'>Trusted by millions of investors</p>
          <div className='d-flex justify-content-center gap-4'>
            <div className='text-center'>
              <h4 className='fw-bold mb-0'>1+ Crore</h4>
              <small className='text-muted'>Active Users</small>
            </div>
            <div className='text-center'>
              <h4 className='fw-bold mb-0'>15+ Million</h4>
              <small className='text-muted'>Daily Trades</small>
            </div>
            <div className='text-center'>
              <h4 className='fw-bold mb-0'>₹35,000+ Cr</h4>
              <small className='text-muted'>Daily Turnover</small>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
