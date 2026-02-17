import React, { useEffect, useState } from 'react';
  
import FullScreenLoader from '../components/FullScreenLoader';
import HomeBanner from '../components/HomeBanner';
import HomeChairman from '../components/HomeChairman';
import HomeCentresOfExcellence from '../components/HomeCentresOfExcellence';
import HomeHealthcare from '../components/HomeHealthcare';
// const apiUrl     = import.meta.env.VITE_BACKEND_API_URL;

export default function Home() {
//    const [loading, setLoading] = useState(true);


  return (
    <div className="home-page">
      <HomeBanner />
      <HomeChairman />
      <HomeCentresOfExcellence />
      <HomeHealthcare />
    </div>
  );
}
