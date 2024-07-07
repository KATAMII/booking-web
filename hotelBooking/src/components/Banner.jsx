import React from 'react';
import './Banner.css'; 

function Banner({ mainTitle, subTitle }) {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <h1>{mainTitle}</h1>
        <h2>{subTitle}</h2>
      </div>
    </div>
  );
}

export default Banner;
