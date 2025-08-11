import React from 'react';
import './Profile.css';
import background from './assets/background.avif';

const Profile = ({ img }) => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="modal fade" id="profileModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">

          {/* Profile Header with Background */}
          <div
            className="profile-header"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              position: 'relative'
            }}
          >
            <img
              className="rounded-circle"
              src={img || "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}
              alt="Profile"
              style={{
                width: '150px',
                position: 'absolute',
                bottom: '-75px',
                left: '20px',
                border: '5px solid white'
              }}
            />
          </div>

          {/* Profile Content */}
          <div className="modal-body">
            <div className="container mt-5 pt-5">
              <div className="row">
                {/* Left column */}
                <div className="col-md-3 border-right text-center">
                  <h5 className="mt-4">Edogaru</h5>
                  <span className="text-black-50">edogaru@mail.com.my</span>
                </div>

                {/* Middle column */}
                <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                    <h4>Profile Settings</h4>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label className="labels">Name</label>
                        <input type="text" className="form-control" placeholder="first name" />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Surname</label>
                        <input type="text" className="form-control" placeholder="surname" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">Mobile Number</label>
                        <input type="text" className="form-control" placeholder="enter phone number" />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Address</label>
                        <input type="text" className="form-control" placeholder="enter address" />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Email ID</label>
                        <input type="text" className="form-control" placeholder="enter email id" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="col-md-4">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center experience">
                      <span>Edit Experience</span>
                      <span className="border px-3 p-1 add-experience">+ Experience</span>
                    </div>
                    <br />
                    <div className="col-md-12">
                      <label className="labels">Experience</label>
                      <input type="text" className="form-control" placeholder="experience" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save Changes</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
