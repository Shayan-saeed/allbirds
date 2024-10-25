import React from 'react';

const ThirdSec = () => {
  return (
    <div style={{backgroundImage: 'url("https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2800/cms/3gaucwAUA2KXTW2QeloccX/02d479630932580eb29bc1329e0ec6fd/24Q3_AugustCore_Statement_Module_Site_Desktop_IMG_2880x720.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '55vh',
        paddingInline: '4rem',
        paddingTop: '6rem',
        marginBottom: '40px'
        }}>
      <div className='flex flex-col items-center justify-center text-white'>
        <h1 className='text-center text-2xl font-bold pb-6'>WE MAKE BETTER THINGS IN A BETTER WAY</h1>
        <p className='text-center font-semibold pb-4'>By looking to the world’s greatest innovator—Nature—we create shoes that deliver <br /> unrivaled comfort that you feel good in and feel good about.</p>
        <img className="h-14 w-auto" src="https://images.squarespace-cdn.com/content/v1/657cca16d4fc2d1b4454176a/a383174c-c4ad-4a0d-8685-c8dea89b4686/Allbirds.png" alt="Your Company" />   
      </div>
    </div>
  );
};

export default ThirdSec;