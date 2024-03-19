import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../../Components/Header/Header";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { getProfileApi } from "../../../SERVICES/AllAPI";
import { Avatar } from "@mui/material";


function Profile() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(null);

  function handleShow() {
    setShow(true);
  }

  const token = localStorage.getItem("token");

  // get profile
  const getProfile = async () => {
    const header = {
      Authorization: `Token ${token}`,
    };
    const response = await getProfileApi(header);
    // console.log(response.data);
    setProfile(response.data);
  };

  useEffect(() => {
    getProfile();
  }, []); 

  return (
    <>
      <Header />
      <div className="text-center">
        <h1 className="profileHead mt-5">My Profile</h1>
      </div>

      <div className="profileBody mt-5 mb-5 pb-3">
        <div className="avatar text-center">
          <img
            className="avatarImg"
            src="https://i.postimg.cc/Yqrt88b9/360-F-633547842-Aug-Yzex-Tp-MJ9z1-Ycp-TKUBoq-BF0-CUCk10.jpg"
            alt={profile&&profile.username}
          />

          {profile && (
            <>
              <h2 className="">{profile.username}</h2>
              <div className="text-start ps-5 me-5  pe-5 ms-5 pb-5">
                <h5 className="mt-5">
                  <i class="fa-solid fa-envelope me-3"></i>{" "}
                  {profile.email_address}
                </h5>
                <hr />
                <h5>
                  <i class="fa-solid fa-phone me-3"></i> {profile.phone}
                </h5>
                <hr />
                <h5>
                  <i class="fa-solid fa-house-user me-3"></i>{" "}
                  {profile.address}
                </h5>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
