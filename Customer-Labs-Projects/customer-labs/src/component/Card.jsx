import React, { useState } from 'react'
import './card.css'

const Card = ({ data }) => {
    const [shadowColor,setShadowColor] = useState()
    let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let handleMouseEnter = () => {
    let randomColor = getRandomColor();
    setShadowColor(randomColor);
  };

  const handleMouseLeave = () => {
    setShadowColor('');
  };
    return (
        <div>
            <div class="card" style={{ width: "11rem", boxShadow: shadowColor ? `0 8px 12px ${shadowColor}` : 'none',
    transition: 'box-shadow 0.3s ease'}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
                <div class="card-inner">
                    <div class="card-front">
                        <p>{data.segment_name}</p>
                    </div>
                    <div class="card-back">
                        <ul>
                            {data.schema.map((item, index) => {
                                const key = Object.keys(item)[0];
                                const value = item[key];
                                return (
                                    <li><p key={index}>
                                        <strong>{key}</strong>: {value}
                                    </p></li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card