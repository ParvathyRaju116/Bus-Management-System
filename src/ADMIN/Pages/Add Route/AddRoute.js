// AddRoute.js

import React, { useEffect, useState } from 'react';
import "./AddRoute.css";
import AdminHeader from '../../Components/Admin-Header/AdminHeader';
import { addRouteApi, getRouteApi } from '../../../SERVICES/AllAPI';
import { Button, Modal, Table } from 'react-bootstrap';

function AddRoute() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [routeList, setRouteList] = useState([]);

  const [addRouteData,setAddRouteData]=useState({
    name:"",
    starts_from:"",
    ends_at:""
  })
  console.log(addRouteData);

  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`
  };

  const listRoutes = async () => {
    const response = await getRouteApi(header);
    setRouteList(response.data);
    console.log(response);
  };

  useEffect(() => {
    listRoutes();
  }, []);


  // add bus
  const addRoute=async()=>{
    const response = await addRouteApi(addRouteData,header)
    listRoutes()
    handleClose()
    console.log(response);
  }



  return (
    <>
      <AdminHeader />
      <div className='div1 mt-5'>
        <h1 className='all-route-head'>All Routes</h1>
      </div>

      <div className='text-end m-5'>
        <Button className='AddBtn' onClick={handleShow}>
          Add Route
        </Button>
      </div>

      <div className='list-routes d-flex m-5 ps-5 pe-5'>
        <Table className='table-custom' hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Starts From</th>
              <th>Ends At</th>
            </tr>
          </thead>
          <tbody>
            {routeList ? routeList.map((i, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.starts_from}</td>
                <td>{i.ends_at}</td>
              </tr>
            ) : <></>}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='add-route-head'>Add Route</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='input text-center '>
            <div className='d-flex w-100 '>
            <i class="fa-solid fa-file-signature fs-3 m-3"></i>
              <input type="text" placeholder='Name' className='form-control shadow' value={addRouteData.name} onChange={(e)=>setAddRouteData({...addRouteData,name:e.target.value})}  />
            </div>
            <div className='d-flex w-100 mt-3 '>
              <i className="fa-solid fa-circle-dot locationIcon fs-3 m-3 " style={{ color: '#FF4B2B' }} ></i>
              <input type="text" placeholder='From' className='form-control shadow' value={addRouteData.starts_from} onChange={(e)=>setAddRouteData({...addRouteData,starts_from:e.target.value})}  />
            </div>
            <br />
            <div className='d-flex'>
              <i className="fa-solid fa-location-dot locationIcon fs-3 m-3 " style={{ color: '#FF416C' }}></i>
              <input type="text" placeholder='To' className='form-control shadow' value={addRouteData.ends_at} onChange={(e)=>setAddRouteData({...addRouteData,ends_at:e.target.value})} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='AddBtn' onClick={addRoute}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddRoute;
