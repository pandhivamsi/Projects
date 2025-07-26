// App.jsx
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Home from './component/Home'
import { ToastContainer, toast } from 'react-toastify'
import Edit from './Edit'
import './component/home.css'
import DeleteUse from './component/DeleteUse'
import { HiUserAdd } from "react-icons/hi";
import AddUser from './component/AddUser'


const App = () => {
  const [users, setUsers] = useState([])
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [deleuser,setDeleteuser] = useState()
  let [adduser,setAddUSer] = useState()

  const fetchData = async () => {
    let res = await axios.get('http://localhost:8080/users')
    setUsers(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])  

  return (
    <div className='container mt-4'>
      <ToastContainer />
      <button className='adduser' onClick={()=> setAddUSer(1)} style={{marginLeft:"465px" ,borderRadius:"22%"}}><HiUserAdd/>  Add User</button>
      <div className="dis" style={{display:"flex", flexWrap:"wrap", alignItems:"center", marginLeft:"54px"}}>
        {users.map(user => (
          <Fragment key={user.id}>
          <Home user={user} onEdit={(id) => setSelectedUserId(id)} onDelete={(id)=>setDeleteuser(id)} />
          </Fragment>
        ))}
      </div>

      {selectedUserId && (
        <Edit
          userid={selectedUserId}
          onClose={() => setSelectedUserId(null)}
          onUpdated={fetchData}
        />
      )}
      {deleuser && (
        <DeleteUse
          userid={deleuser}
          onClose={()=> setDeleteuser(null)}
          onUpdated = {fetchData}
          />
      )
      }
      {adduser && (
        <AddUser
          onClose={()=> setAddUSer(null)}
          onUpdated = {fetchData}
          />
      )
      }
    </div>
  )
}

export default App
