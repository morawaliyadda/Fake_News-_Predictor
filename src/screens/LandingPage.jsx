import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../Assets/image1.png';
import ProgBar from '../components/ProgressBar';

const LandingPage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 680000000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="content">
        <h2>Fake News Predictor</h2>
        <ProgBar />
        <p className='footer-landing'>All Rights Reserved By <span>QuadraBytes</span> </p>
      </div>
      <div className="image-container">
        <img src={image1} alt="Landing" />
      </div>

    </div>
  );
};

export default LandingPage;
