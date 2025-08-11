import React, { useState } from 'react'
import './card.css'
import { MdDelete } from "react-icons/md";
import axios from 'axios';

const Card = ({ data,onUpdated }) => {
    const [shadowColor, setShadowColor] = useState()
    const [showdelete,setShowDelete] = useState(false);
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
        setShowDelete(true);
    };

    const handleMouseLeave = () => {
        setShadowColor('');
        setShowDelete(false);
    };

    const deleteCard = (id)=>{
        // console.log(id);
        axios.delete(`http://localhost:8080/segments/${id}`)
        .then(()=>{
            onUpdated()
            toast("Deleted Successfully")
        })
        .catch(()=>{
            console.log("error");
            
        })
        
    };

    return (
        <div>
            <div class="card" style={{
                width: "11rem", boxShadow: shadowColor ? `0 8px 12px ${shadowColor}` : 'none',
                transition: 'box-shadow 0.3s ease'
            }} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="card-inner">
                    <div className="card-front">
                        <p>{data.segment_name}</p>
                    </div>
                    <div class="card-back">
                        <ul>
                            {data.schema.map((item, index) => {
                                const key = Object.keys(item)[0];
                                const value = item[key];
                                return (
                                    <li  key={index}><p>
                                        <strong>{key}</strong>: {value}
                                    </p></li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {
                showdelete && <button onClick = {()=>deleteCard(data.id)} className='Btn'><MdDelete/></button>
            }
            </div>
        </div>
    )
}

export default Card