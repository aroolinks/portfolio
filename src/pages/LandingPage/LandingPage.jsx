import React from 'react';
import LOGO from '../../assets/logosvg.svg';
import Image from 'next/image';
const LandingPage = () => {
  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center flex-col'>
      <Image alt='Vercel logo' src={LOGO} width={128} height={128} />
      <h1 className='text-6xl font-bold text-white py-10 '> Coming Soon</h1>
      <div>
        <h2 className='text-2xl font-extralight text-white'>
          www.haroonkiani.co.uk
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
