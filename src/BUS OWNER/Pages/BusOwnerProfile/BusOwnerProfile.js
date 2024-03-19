import React, { useEffect, useState } from 'react'
import './BusOwnerProfile.css'
import BusOwnerAside from '../../Components/BusOwnerAside/BusOwnerAside'
import { getProfileApi } from '../../BUS_OWNER_SERVICES/busOwnerApis'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../SERVICES/Base_Url'
import Swal from 'sweetalert2'

function BusOwnerProfile() {
  const navigate = useNavigate()
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
    if (token) {
      let headers = {
        "Authorization": `Token ${token}`
      }
      let result = await getProfileApi(headers)
      if (result.status >= 200 && result.status < 300) {
        setProfile(result.data)
      }
    }
    else {
      navigate('/bus-owner-auth')
      Swal.fire({
        icon: "warning",
        title: 'Please login',
        showConfirmButton: false,
        timer: 1500
    });
    }
  }
  useEffect(() => { getProfile() }, [])

  return (
    <div className='dashboardBody'>
      <div className='main-grid w-100'>
        <div><BusOwnerAside></BusOwnerAside></div>
        <div>
          <div className="profileBody mt-5 mb-5 pb-3">
            <div className="avatar text-center p-lg-5 p-3 pt-1 pt-lg-1">
              <img
                className="avatarImg img-fluid"
                src="https://i.postimg.cc/Yqrt88b9/360-F-633547842-Aug-Yzex-Tp-MJ9z1-Ycp-TKUBoq-BF0-CUCk10.jpg"
                alt=""
              />
              <h2 className="">{profile?.username}</h2>
              <hr />
              
              <h5>
              {profile?.is_approved=='True' ? <i className="fa-regular fa-circle-check"></i> : <i className="fa-solid fa-circle-xmark"></i>}
              
              &nbsp;
                    Status: {profile?.is_approved=='True' ? "Aproved" : "Pending"}</h5>
              <hr />
              <h5>
                <i className="fa-solid fa-phone me-3"></i> {profile?.phone}
              </h5>
              <hr />
              <h5>
                <i className="fa-solid fa-house-user me-3"></i>{" "}
                {profile?.address}
              </h5>
              <hr />
              <div className='d-flex justify-content-evenly'>
                <h5 className='text-end w-50 fw-normal'>
                <i className="fa-solid fa-id-badge"></i>  &nbsp;
                  Proof:</h5>
                <div className='w-75'>
                  <img src={profile.proof ? `${BASE_URL}/${profile.proof}` : dummyImage} alt="Proof" className='img-fluid shadow' />
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