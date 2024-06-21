import React, { useState } from 'react';
import axios from 'axios';

const NewsInput = ({ onDetect, onClear }) => {
  const [newsText, setNewsText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/', { text: newsText }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      onDetect({ isFake: response.data.prediction === 'FAKE' });
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setLoading(false);
    }
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
        <button className='check' onClick={handleDetect} disabled={loading}>
          {loading ? 'Checking...' : 'Check'}
        </button>
        <button className='clear' onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default NewsInput;
