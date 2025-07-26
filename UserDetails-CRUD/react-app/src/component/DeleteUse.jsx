import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
// import './delete.css'

const DeleteUse = ({userid,onClose,onUpdated}) => {
    let deleteUser = ()=>{
        axios.delete(`http://localhost:8080/users/${userid}`)
        .then(()=>{
            toast("User Deleted Successfully")
            onClose()
            onUpdated()
        })
        .catch(()=>{
            console.log("error");
            
        })
    }
  return (
//     <div>
// <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
<div
    className="modal show fade"
    tabIndex="-1"
    style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    role="dialog"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Delete User</h1>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
            <p>Are you sure you want to delete this user?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={deleteUser}>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DeleteUse