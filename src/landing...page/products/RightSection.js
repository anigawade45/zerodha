import React from 'react';

const RightSection = ({ imageURL, productName, productDescription, learnMore }) => {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        {/* Text Section */}
        <div className='col-md-6 col-12 p-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
               <a href={learnMore} className=''>Learn More</a>
            </div>
        {/* Image Section */}
        <div className='col-md-6 col-12 p-5 text-center'>
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
