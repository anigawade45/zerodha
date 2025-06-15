import React from 'react';
import { motion } from 'framer-motion';

const RightSection = ({ imageURL, productName, productDescription, learnMore }) => {
  return (
    <div className='container py-5'>
      <div className='row align-items-center'>
        <motion.div 
          className='col-md-6 col-12 p-5'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='display-6 fw-bold mb-4'>{productName}</h2>
          <p className='lead text-muted mb-4'>{productDescription}</p>
          {learnMore && (
            <motion.a 
              href={learnMore}
              className='btn btn-outline-primary px-4'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          )}
        </motion.div>
        <motion.div 
          className='col-md-6 col-12 p-5 text-center'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={imageURL} 
            alt={productName} 
            className="img-fluid hover-shadow"
            style={{ 
              maxWidth: '80%',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default RightSection;
