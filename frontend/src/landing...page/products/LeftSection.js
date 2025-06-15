import React from 'react';
import { motion } from 'framer-motion';

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) => {
  return (
    <div className='container py-5'>
      <div className='row align-items-center'>
        <motion.div 
          className='col-md-6 col-12 p-5 text-center'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
        <motion.div 
          className='col-md-6 col-12 p-5'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className='display-6 fw-bold mb-4'>{productName}</h2>
          <p className='lead text-muted mb-4'>{productDescription}</p>
          <div className='d-flex gap-3 mb-4'>
            {tryDemo && (
              <motion.a 
                href={tryDemo}
                className='btn btn-primary px-4'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Demo
              </motion.a>
            )}
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
          </div>
          {(googlePlay || appStore) && (
            <div className='mt-4 d-flex gap-3'>
              {googlePlay && (
                <motion.a 
                  href={googlePlay}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src='media/images/googlePlayBadge.svg' 
                    alt='Google Play Store' 
                    className="img-fluid"
                    style={{ height: '40px' }}
                  />
                </motion.a>
              )}
              {appStore && (
                <motion.a 
                  href={appStore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src='media/images/appstoreBadge.svg' 
                    alt='Apple App Store' 
                    className="img-fluid"
                    style={{ height: '40px' }}
                  />
                </motion.a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LeftSection;
