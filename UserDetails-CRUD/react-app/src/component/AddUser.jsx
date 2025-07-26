import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddUser = ({onClose,onUpdated}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [site, setSite] = useState('');
    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [companyName, setCompanyName] = useState('');

    let addUserData =  ()=>{
        let payload = {name,phone,email,username,website:site}
        console.log(payload);
        axios.post('http://localhost:8080/users/',payload)
        .then(()=>{
            toast("User Created Successfully")
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
        <h1 className="modal-title fs-5">AddUser Form</h1>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <form>
          {/* Name */}
          <div className="mb-3">
            <label className="col-form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Username */}
          <div className="mb-3">
            <label className="col-form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="col-form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="col-form-label">Phone:</label>
            <input
              type="tel"
              className="form-control"
              value={phone || ''}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Website */}
          <div className="mb-3">
            <label className="col-form-label">Website:</label>
            <input
              type="text"
              className="form-control"
              value={site || ''}
              onChange={(e) => setSite(e.target.value)}
            />
          </div>

          {/* Address - Street
          <div className="mb-3">
            <label className="col-form-label">Street:</label>
            <input
              type="text"
              className="form-control"
              value={street || ''}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div> */}

          {/* Address - Suite
          <div className="mb-3">
            <label className="col-form-label">Suite:</label>
            <input
              type="text"
              className="form-control"
              value={suite || ''}
              onChange={(e) => setSuite(e.target.value)}
            />
          </div> */}

          {/* Address - City */}
          {/* <div className="mb-3">
            <label className="col-form-label">City:</label>
            <input
              type="text"
              className="form-control"
              value={city || ''}
              onChange={(e) => setCity(e.target.value)}
            />
          </div> */}

          {/* Address - Zipcode */}
          {/* <div className="mb-3">
            <label className="col-form-label">Zipcode:</label>
            <input
              type="text"
              className="form-control"
              value={zipcode || ''}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div> */}

          {/* Company Name */}
          {/* <div className="mb-3">
            <label className="col-form-label">Company Name:</label>
            <input
              type="text"
              className="form-control"
              value={companyName || ''}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div> */}
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
        <button type="button" className="btn btn-primary" onClick={addUserData}>
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddUser