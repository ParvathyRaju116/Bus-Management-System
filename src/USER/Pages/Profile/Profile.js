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
      <div className="profileBody mt-5">
        <div className="avatar text-center ">
          <h1 className="profileHead mt-5">Profile</h1>

          <img
            className="avatarImg"
            src="https://i.postimg.cc/Yqrt88b9/360-F-633547842-Aug-Yzex-Tp-MJ9z1-Ycp-TKUBoq-BF0-CUCk10.jpg"
            alt=""
          />
          <div className="text-start ps-5 me-5 pe-5 ms-5">
            <p className="">Username : </p>
            <hr />
            <p>Email :</p>
            <hr />
            <p>Phone :</p>
            <hr />
            <p>Address :</p>
            <hr />
          </div>
          <div className="text-end me-5 pe-5">
            <button className="btn" onClick={handleShow}>
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton className="modalcolor">
                <Modal.Title>Edit Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* From */}
                <div className="p-1 d-flex align-items-center justify-content-center">
                  <div className=" w-100">
                    <h1 className="text-center p-5">Edit Profile</h1>
                    <Form className="test2 w-100 text-center mt-2 mb-2">
                      {/* username */}
                      <Form.Group
                        className="w-50"
                        controlId="exampleForm.ControlInput1 "
                      >
                        <Form.Control
                          className="form-control d-inline-flex focus-ring focus-ring-danger"
                          placeholder="Name"
                          aria-label="Username"
                        />
                      </Form.Group>
                        {/* Username */}
                        <Form.Group
                        className="w-50 m-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form-control d-inline-flex focus-ring focus-ring-danger"
                          placeholder="username"
                          aria-label="username"
                        />
                      </Form.Group>
                      {/* Email */}
                      <Form.Group
                        className="w-50 m-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form-control d-inline-flex focus-ring focus-ring-danger"
                          placeholder="Email"
                          aria-label="Email"
                        />
                      </Form.Group>
                  
                   {/* phone */}
                   <Form.Group
                        className="w-50 m-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form-control d-inline-flex focus-ring focus-ring-danger"
                          placeholder="Phone"
                          aria-label="Phone"
                        />
                         </Form.Group>
                          {/* Address */}
                   <Form.Group
                        className="w-50 m-2"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form-control d-inline-flex focus-ring focus-ring-danger"
                          placeholder="Address"
                          aria-label="address"
                        />
                         </Form.Group>
                    
                    <Button>Save</Button>


                    </Form>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
