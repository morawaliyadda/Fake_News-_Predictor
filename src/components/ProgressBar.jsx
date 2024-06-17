import React, { useEffect } from "react";
import { useState } from "react";

export default function ProgBar() {
    const [filled, setFilled] = useState(0);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        if (filled < 100 && loading) {
            setTimeout(() => setFilled(prev => prev + 1), 50);
           
        }
    }, [filled, loading])

    return (
        <body>
            <div className="progressbar">
              <div style={{
                height: '100%',
                width: `${filled}%`,
                backgroundColor: 'black',
                transition: 'width 0.5s ease-in-out',
              }}>

              </div>

              <span className="progressbarPercentage">
                {filled}%
              </span>
            </div>
            
        </body>

    )

}