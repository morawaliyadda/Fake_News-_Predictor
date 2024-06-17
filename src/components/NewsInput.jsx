import React, { useState } from 'react';

const NewsInput = ({ onDetect , onClear }) => {
  const [newsText, setNewsText] = useState('');

  const handleDetect = () => {
    const isFake = Math.random() < 0.5; // Randomly determine if the news is fake
    onDetect({ isFake});
  };

  const handleClear = () => {
    setNewsText('');
    onClear(); 
  };

  return (
    <div className="news-input">
      <h2>Enter Your News</h2>
      <textarea
        value={newsText}
        onChange={(e) => setNewsText(e.target.value)}
        placeholder="Paste the news article here..."
        rows="10"
      ></textarea>
      <div>
      <button className='check' onClick={handleDetect}>Check</button>
      <button className='clear' onClick={handleClear}>Clear</button>
      </div>
      
    </div>
  );
};

export default NewsInput;
