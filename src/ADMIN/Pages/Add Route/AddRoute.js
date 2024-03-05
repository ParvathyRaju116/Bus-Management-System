import React from 'react'
import "./AddRoute.css"
import AdminHeader from '../../Components/Admin-Header/AdminHeader'


function AddRoute() {

  return (
    <>
      <AdminHeader></AdminHeader>
      <div className='text-center m-5   add-route-body'>
        <div className=''>  <h1>Add Route</h1>

          <div className='input text-center w-75'>
            <div className='d-flex '>
              <i class="fa-solid fa-circle-dot locationIcon fs-3 m-3 " style={{ color: '#FF4B2B' }} ></i>
              <input type="text" placeholder='From' className='form-control shadow' />
            </div>
            <br />
            <div className='d-flex'>
              <i class="fa-solid fa-location-dot locationIcon fs-3 m-3 " style={{ color: '#FF416C' }}></i>
              <input type="text" placeholder='To' className='form-control shadow' /></div>
          </div>

        </div>

      </div>
    </>
  )
}

export default AddRoute