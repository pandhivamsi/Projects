import React, { useRef, useState } from 'react'
import './segment.css'
import { FaCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from './Dropdown';
// import { Dropdown } from 'bootstrap';


const SavingSegment = () => {
  let [dropdownData, setDropdownData] = useState([])

  const options = ["First Name", "Last Name", "Gender", "Account Name", "Age", "State", "City"];
  const traitTypeMap = {
  "First Name": "user",
  "Last Name": "user",
  "Gender": "user",
  "Age": "user",
  "State": "group",
  "City": "group",
  "Account Name": "group"
};

const getDotColor = (trait) => {
  return traitTypeMap[trait] === "group" ? "green" : "red";
};

const createDropdown = () =>{
  const updatedDropDown = [...dropdownData]
  updatedDropDown.push({id:updatedDropDown.length+1,options:options,value:""})
  setDropdownData(updatedDropDown)
}
const handleSelectDropdownValue =(id,value)=>{
  const updatedDropdownData = dropdownData.map(dropdown => {
    if (dropdown.id === id) {
      return { ...dropdown, value: value };
    }
    return dropdown;
  });
  setDropdownData(updatedDropdownData);
};

const getSelectedValues = () => {
  return dropdownData.map(d => d.value).filter(v => v); // returns only selected (non-empty) values
};

const handleRemove = (idToRemove) => {
  setDropdownData(prev => prev.filter(dropdown => dropdown.id !== idToRemove));
};


  return (
    <div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header" style={{ paddingBottom: "6px", backgroundColor: "#47d0e3" }}>
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Saving Segment</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Enter the Name of the Segment</p>
          <input className="inputName" type="text" placeholder='Name of the Segment' />
          <p>To save your segment, you need to add the schemas to build the query</p>
          <div className='span'>
            <span className='redCir'><FaCircle />  -User Traits</span>
            <span className='greenCir'><FaCircle />  -Group Traits</span>
          </div>
          <div className={`$dropdownsBox`}>
          {
            dropdownData.map((data)=>{
              return(
                <Dropdown key={data.id} data={{...data, options: data.options.filter(opt => !getSelectedValues().includes(opt) || data.value === opt)}} 
                handleSelectDropdownValue={handleSelectDropdownValue} dotColor={data.value ? getDotColor(data.value):"#888"} handleRemove={handleRemove}/>)})}
          </div>
          <div className='addSegLink'>
            <button onClick={createDropdown}><FaPlus />Add new schema</button>
          </div>
        </div>
        <div className="footer">
            <span>
              <button className='custom-btn btn-1'>Save the Segment</button>
              <button  className ='custom-btn btn-1' type="button" data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
            </span>
        </div>
      </div>
    </div>
  )
}

export default SavingSegment