import React from 'react';
import "../App.css"

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div className="result">
      <h2>Result</h2>
      <p className={`result-text ${result.isFake ? 'fake' : 'real'}`}>
        {result.isFake ? 'Fake' : 'Real'}
      </p>

    </div>


  );
};

export default Result;