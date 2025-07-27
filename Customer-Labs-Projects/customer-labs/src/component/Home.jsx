import React, { useEffect, useState } from 'react'
import SavingSegment from './SavingSegment'
import axios from 'axios';
import './home.css'
import Card from './Card';

const Home = () => {
  let [popup, setPopup] = useState(false)
  const [segments, setSegments] = useState([])
  let fetchData = async () => {
    let res = await axios.get('http://localhost:8080/segments')
    setSegments(res.data)
    console.log(res.data);

  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <nav className="navbar" style={{ backgroundColor: "#47d0e3" }}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 " style={{ color: "white" }}>View Auidence</span>
          </div>
        </nav>
        <div>
          {/* <button onClick={()=>{setPopup(1)}} style={{color:"white", border:"2px solid #f8f2f2", marginLeft: "204px",marginTop: "100px"}}>Save Segment</button> */}
          <button onClick={() => setPopup(true)} className="btnfix" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Save Segment</button>
        </div>
        <div className = "card-container">
          {
            segments.map((data) => {
              return (
                <div key={data.id}>
                  <Card data = {data} />
                </div>
              )
            })
          }
        </div>
        <div>
          {
            <SavingSegment onUpdated = {fetchData} />
          }
        </div>
      </div>
    </div>
  )
}

export default Home