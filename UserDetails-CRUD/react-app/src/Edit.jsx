import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-toastify'

const Edit = ({userid,onClose,onUpdated}) => {
    // let {userid} =useParams()
    let [name,setName] = useState()
    let [email,setEmail] = useState()
    let [phone,setPhone] = useState()
    let [site,setSite] = useState()

    let fetchData = async () =>{
    let res = await axios.get(`http://localhost:8080/users/${userid}`)
    console.log(res);
    let {data} = res
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setSite(data.website)
  }
  useEffect( ()=>{
    fetchData()   
  },[userid])

  let editData = (e)=>{
        e.preventDefault()
        let payload= {name,email,phone,website:site}
        axios.put(`http://localhost:8080/users/${userid}`,payload)
        .then(()=>{
            toast("Edited successfully")
            onClose()
            onUpdated()
        })
        .catch(()=>{
            console.log("error");
        })
    }


  return (
  <div
    className="modal show fade"
    tabIndex="-1"
    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Edit Form</h1>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone:</label>
              <input
                type="tel"
                className="form-control"
                value={phone || ''}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Website:</label>
              <input
                type="text"
                className="form-control"
                value={site || ''}
                onChange={(e) => setSite(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={editData}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
)
}

export default Edit