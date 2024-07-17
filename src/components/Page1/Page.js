import React from 'react';
import mobile from '../assets/mobile.png';
import './Page1.css';
import '../font/Chillax.css'

const Page = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img className='img1' src={mobile} alt="" />
        <div className="overlay-text">
          <h2 className='Heading'>Mobile App Maintenance</h2>
          <h2 className='Heading'>Services - 24/7 Support &</h2>
          <h2 className='Heading'>Seamless Updates</h2>
          {/* <h2 className='heading2'>Delivering prompt app maintenance & support services to ensure your app</h2>
          <h2 className='heading2'>remains competitive, robust and secure.</h2> */}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Page;
