import React, { useEffect, useState } from 'react';
import "./AddRoute.css";
import AdminHeader from '../../Components/Admin-Header/AdminHeader';
import { addRouteApi, getRouteAndStopeApi, getRouteApi } from '../../../SERVICES/AllAPI';
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddStop from '../../Components/AddStop/AddStop';

function AddRoute() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [routeList, setRouteList] = useState([]);
  const [stop, setStop] = useState(null)
  const [addRouteData, setAddRouteData] = useState({
    name: "",
    starts_from: "",
    ends_at: ""
  });

  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`
  };

  const listRoutes = async () => {
    const response = await getRouteApi(header);
    setRouteList(response.data);
  };

  useEffect(() => {
    listRoutes();
  }, []);

  // add bus
  const addRoute = async () => {
    const response = await addRouteApi(addRouteData, header);
    listRoutes();
    handleClose();
    // console.log(response);
  };

  // list route and stop
  const RouteAndStop = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const response = await getRouteAndStopeApi(id, header);
    setStop(response.data.stops)
    console.log(stop);
  };

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

      <div className='list-routes  m-5 ps-5 pe-5'>
        {routeList ? routeList.map((i, index) => (
          <Accordion className='ps-5 w-100' key={i.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id="panel1-header"
              className='d-flex '
              style={{ width: '100%', justifyContent: 'space-between' }}
              onClick={(e) => RouteAndStop(e, i.id)} // Pass id to RouteAndStop function
            >
              <div style={{ display: 'flex', width: '100%' }}>
                <h2 style={{ textTransform: 'capitalize' }}>{i.name}</h2>
                <div className='ms-auto me-5 pe-5'>
                  <b> Starts From : </b> {i.starts_from} <br />
                  <b> Ends At : </b> {i.ends_at}
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
              </div>
              <div className='w-100 text-center d-flex justify-content-center align-item-center'>
              
                <Table  w-100 hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Stop Name</th>
                    <th>Time Taken</th>
                    <th>Bus Fare</th>
                  </tr>
                </thead>
                <tbody>
                {stop ? stop.map((i,index) => (
                  <tr>
                    <td >{index+1}</td>
                    <td style={{textTransform:'capitalize'}}>{i.stop_name}</td>
                    <td>{i.time_taken}</td>
                    <td>{i.approx_cost}</td>
                  </tr>
                    )) : <></>}
                </tbody>
              </Table>
                

                
              

              </div>
              <AddStop id={i.id} ></AddStop>


            </AccordionDetails>
          </Accordion>
        )) : <></>}
      </div>


      {/* modal for add route */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='add-route-head'>Add Route</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='input text-center '>
            <div className='d-flex w-100 '>
              <i className="fa-solid fa-file-signature fs-3 m-3"></i>
              <input type="text" placeholder='Name' className='form-control shadow' value={addRouteData.name} onChange={(e) => setAddRouteData({ ...addRouteData, name: e.target.value })} />
            </div>
            <div className='d-flex w-100 mt-3 '>
              <i className="fa-solid fa-circle-dot locationIcon fs-3 m-3 " style={{ color: '#FF4B2B' }} ></i>
              <input type="text" placeholder='From' className='form-control shadow' value={addRouteData.starts_from} onChange={(e) => setAddRouteData({ ...addRouteData, starts_from: e.target.value })} />
            </div>
            <br />
            <div className='d-flex'>
              <i className="fa-solid fa-location-dot locationIcon fs-3 m-3 " style={{ color: '#FF416C' }}></i>
              <input type="text" placeholder='To' className='form-control shadow' value={addRouteData.ends_at} onChange={(e) => setAddRouteData({ ...addRouteData, ends_at: e.target.value })} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='AddBtn' onClick={addRoute}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      {/* modal for add stop */}

    </>


  );
}

export default AddRoute;
