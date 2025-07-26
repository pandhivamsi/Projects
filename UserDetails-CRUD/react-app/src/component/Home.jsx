import React, { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import './home.css'
import { CiMail ,CiPhone,CiEdit,CiHeart } from "react-icons/ci";

import { FaEarthAfrica } from "react-icons/fa6";
import { FcLike  } from "react-icons/fc";
import { MdDelete } from "react-icons/md";


const Home = ({user, onEdit,onDelete}) => {
    let img = `https://api.dicebear.com/9.x/avataaars/svg?seed=${user.name}`    
    let [like,setLike] = useState(false)   
    let [shadowColor, setShadowColor] = useState('');

    let isLiked = () =>{
        setLike(!like)
    }


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
        <div className="container mt-5" style={{marginBottom: "0.5rem", marginTop:"1rem !important"}}>
       <div className="card" style={{ width: "11rem", boxShadow: shadowColor ? `0 8px 12px ${shadowColor}` : 'none',
    transition: 'box-shadow 0.3s ease'}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <img src={img} className="card-img-top" alt="Example"/>
        <div className="card-body">
          <h5 className="card-title" style={{color:shadowColor}}>{user.name}</h5>
          <p className="card-text" style={{color:shadowColor}}><CiMail/> {user.email}</p>
          <p className="card-text" style={{color:shadowColor}}><CiPhone /> {user.phone}</p>
          <p className="card-text" style={{color:shadowColor}}><FaEarthAfrica/> {user.website}</p>
        </div>
        <div id='btn'>
            <button type="button" className="btn" onClick={isLiked}>
                {
                   like ?  <FcLike/> : <CiHeart/>
                }
                </button>
            {/* <Link to={`/edit/${user.id}`}><CiEdit/></Link> */}
            <button type="button" className="btn" onClick={() => onEdit(user.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><CiEdit /></button>
            {/* <button type="button" className="btn" onClick={()=>{deleteUser(user.id)}}><MdDelete /></button> */}
            <button type="button" className="btn" onClick={()=>onDelete(user.id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><MdDelete /></button>
          </div>
      </div>
    </div>
</div>
  )
}

export default Home

