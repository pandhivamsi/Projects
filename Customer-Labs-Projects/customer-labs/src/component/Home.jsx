import React, { useState } from 'react'
import SavingSegment from './SavingSegment'
import './home.css'

const Home = () => {
    let [popup,setPopup] = useState(false)
  return (
    <div>
    <div>
        <nav className="navbar" style={{backgroundColor: "#47d0e3"}}>
            <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 " style={{color: "white"}}>View Auidence</span>
            </div>
        </nav>
        <div>
        {/* <button onClick={()=>{setPopup(1)}} style={{color:"white", border:"2px solid #f8f2f2", marginLeft: "204px",marginTop: "100px"}}>Save Segment</button> */}
        <button onClick={()=>setPopup(true)} className="btnfix" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Save Segment</button>
        </div>
        <div>
              {
                <SavingSegment/>
              }
        </div>
    </div>
    </div>
  )
}

export default Home