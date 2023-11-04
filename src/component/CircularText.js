import React from 'react';

export const CircularText = () => {
    const radius = 50;
    const text = "Web Developer.Front-End.";
    const textPathId = 'textPath';

    const openEmailClient = () => {
        window.location.href = 'mailto:gthakuri656@example.com'
    }

    return (
        <div className="circular-container">
            <svg width="300" height="350">
                <path
                    id={textPathId}
                    d={`M150,150 A${radius},${radius} 0 1 1 149.99,150`}
                    fill="transparent"
                />
                <text className='circularText'>
                    <textPath href={`#${textPathId}`} startOffset="0%" textLength="308">
                        {text}
                    </textPath>
                </text>
            </svg>
            <div className="inside" onClick={openEmailClient}>
                <b>Hire Me</b>
            </div>

        </div>
    );
};




