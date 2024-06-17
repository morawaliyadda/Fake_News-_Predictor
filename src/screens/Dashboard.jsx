import React, { useState } from 'react';
import NewsInput from '../components/NewsInput';
import Result from '../components/Result';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';

const Dashboard = () => {
    const [result, setResult] = useState(null);

    const handleDetect = (data) => {
        setResult(data);
    };

    const handleClear = () => {
        setResult(null);
    };

    return (
        <div className="dashboard">
            <div className='img-content'>
                <img className='dash-img' src={image2} />
            </div>
            <div className='main-content'>
                <h1>Fake News Predictor</h1>
                <NewsInput onDetect={handleDetect} onClear={handleClear} />
                <Result result={result} />
                <p className='footer'>All Rights Reserved By <span>QuadraBytes</span> </p>
            </div>
            <div  className='img-content'>
                <img className='dash-img' src={image3} />
            </div>

        </div>
    );
};

export default Dashboard;
