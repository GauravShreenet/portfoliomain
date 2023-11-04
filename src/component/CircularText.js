import React from 'react';


export const CircularText = () => {
  const radius = 75; // Radius of the circular path
  const text = "Web Developer . Front-End."; // Added spaces
  const textPathId = 'textPath';

  return (
    <svg width="300" height="350">
      <path
        id={textPathId}
        d={`M150,150 A${radius},${radius} 0 1 1 149.99,150`}
        fill="transparent"
      />
      <text className='circularText'>
        <textPath href={`#${textPathId}`} startOffset="0%" textLength="455">
          {text}
        </textPath>
      </text>
    </svg>
  );
};




