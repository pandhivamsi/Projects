import React, { useState } from 'react'
import './dropdown.css'
import { FaCircle,FaMinus } from "react-icons/fa6";


const Dropdown = ({data,handleSelectDropdownValue,dotColor,handleRemove}) => {
  return (
    <div>
      <div className="d-flex align-items-center mb-2 gap-2">
      {
        <FaCircle color={dotColor} className="outside-dot" />
      }
        <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {data.value || "Select Option"}
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    {
      data.options.map((option)=>{
        return(
        <li key={option}><a onClick={()=>{handleSelectDropdownValue(data.id,option)}} className="dropdown-item active" href="#">{option}</a></li>
        )
      })
    }
  </ul>
</div>
<span className='deleteIcon'
        onClick={() => handleRemove(data.id)}
        style={{ cursor: "pointer", fontWeight: "bold", color: "rgba(0,0,0,0.3) "}}
      ><FaMinus/></span>
</div>
    </div>
  )
}

export default Dropdown