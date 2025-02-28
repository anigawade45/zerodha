import React from 'react';

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
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-6 col-12 p-5 text-center'>
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className='col-md-6 col-12 p-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className='d-flex gap-4 mt-3'>
            <a href={tryDemo} className=''>Try Demo</a>
            <a href={learnMore} className=''>Learn More</a>
          </div>
          <div className='mt-4 d-flex gap-3'>
            <a href={googlePlay}>
              <img src='media/images/googlePlayBadge.svg' alt='Google Play Store' className="img-fluid" />
            </a>
            <a href={appStore}>
              <img src='media/images/appstoreBadge.svg' alt='Apple App Store' className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
