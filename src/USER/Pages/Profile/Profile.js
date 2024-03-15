import React, { useState } from "react";
import "./Profile.css";
import Header from "../../Components/Header/Header";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";


function Profile() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Header></Header>
      <div className="profileBody mt-5 mb-5 pb-3">
        <div className="avatar text-center ">
          <h1 className="profileHead mt-5">Profile</h1>

          <img
            className="avatarImg"
            src="https://i.postimg.cc/Yqrt88b9/360-F-633547842-Aug-Yzex-Tp-MJ9z1-Ycp-TKUBoq-BF0-CUCk10.jpg"
            alt=""
          />
          <div className="text-start ps-5 me-5  pe-5 ms-5">
            <p className="">Username : </p>
            <hr />
            <p>Email :</p>
            <hr />
            <p>Phone :</p>
            <hr />
            <p>Address :</p>
            <hr />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Profile;
