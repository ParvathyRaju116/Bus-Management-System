import React, { useEffect, useState } from 'react'
import './BusOwnerProfile.css'
import { Col, Row } from 'react-bootstrap'
import BusOwnerAside from '../../Components/BusOwnerAside/BusOwnerAside'
import { getProfileApi } from '../../BUS_OWNER_SERVICES/busOwnerApis'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../SERVICES/Base_Url'

function BusOwnerProfile() {
const navigate=useNavigate()
  const [profile, setProfile] = useState({
    is_approved: "",
    phone: "",
    address: "",
    username: "",
    password: "",
    proof: ""
  })
  const dummyImage = "https://st.depositphotos.com/3538103/5151/i/450/depositphotos_51514387-stock-photo-photograph-icon.jpg"
  const getProfile = async () => {
    let token = localStorage.getItem('token')
    if(token){let headers = {
      "Authorization": `Token ${token}`
    }
    let result = await getProfileApi(headers)
    if (result.status >= 200 && result.status < 300) {
      console.log("result.data", result.data);
      setProfile(result.data)
    }}
    else{
      navigate('/bus-owner-auth')
      alert('Please login')
    }
  }
  useEffect(() => { getProfile() }, [])

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
                  <h4 className='text-end w-50 fw-normal'>Status</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>{profile?.is_approved?"Aproved":"Pending"}</h4>
                </div>
                <div className='d-flex justify-content-start  w-100'>
                  <h4 className='text-end w-50 fw-normal'>Username</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>{profile?.username}</h4>
                </div>
                <div className='d-flex justify-content-start w-100'>
                  <h4 className='text-end w-50 fw-normal'>Phone</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>{profile?.phone}</h4>
                </div>
                <div className='d-flex justify-content-start w-100'>
                  <h4 className='text-end w-50 fw-normal'>Address</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <h4 className=' fw-normal'>{profile?.address}</h4>
                </div>
                <div className='d-flex justify-content-start w-100'>
                  <h4 className='text-end w-50 fw-normal'>Proof</h4><h4>&nbsp;&nbsp;:&nbsp;&nbsp;</h4> <div><img src={profile.proof ? `${BASE_URL}/${profile.proof}` : dummyImage} alt="Proof" className='img-fluid shadow' /></div>
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