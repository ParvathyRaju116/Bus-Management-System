import React, { useState } from 'react'
import './BusOwnerProfile.css'
import { Col, Row } from 'react-bootstrap'
import BusOwnerAside from '../../Components/BusOwnerAside/BusOwnerAside'

function BusOwnerProfile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    address: "",
    username: "",
    password: "",
    proof: ""
  })
  const dummyImage = "https://st.depositphotos.com/3538103/5151/i/450/depositphotos_51514387-stock-photo-photograph-icon.jpg"

  return (
    <div className='dashboardBody'>
      <div className='main-grid w-100'>
        <BusOwnerAside></BusOwnerAside>
        <div>
          <div className=' m-lg-3 w-100'>
              <div className='mt-3 p-lg-5 p-2'>
                <h1>Profile details</h1>
                <div className='profile-box shadow p-4 w-100'>
                  {/* <h2> Profile details</h2> */}
                  <div className='d-flex justify-content-start w-100'>
                    <h4 className='text-end w-50 fw-normal'>Name</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>name</h4>
                  </div>
                  <div className='d-flex justify-content-start  w-100'>
                    <h4 className='text-end w-50 fw-normal'>Username</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>username</h4>
                  </div>
                  <div className='d-flex justify-content-start w-100'>
                    <h4 className='text-end w-50 fw-normal'>Phone</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>phone</h4>
                  </div>
                  <div className='d-flex justify-content-start w-100'>
                    <h4 className='text-end w-50 fw-normal'>Address</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>address</h4>
                  </div>
                  <div className='d-flex justify-content-start w-100'>
                    <h4 className='text-end w-50 fw-normal'>Proof</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <div><img src={profile.image ? profile.image : dummyImage} alt="Proof" className='w-50 shadow' /></div>
                  </div>

                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusOwnerProfile