import React, { useEffect, useState } from 'react'
import './ListOfBus.css'
import { Button, Col, Modal, Row, Table } from 'react-bootstrap'
import { busListApi, getOnebusApi } from '../../../SERVICES/AllAPI'

function ListOfBus({ owners }) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [AllbusList, setAllBusList] = useState([]);
  const [oneBus, setOneBus] = useState(null);

  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`
  };

  const busList = async () => {
    const response = await busListApi(header);
    setAllBusList(response.data);
  };

  const getOneBus = async (id) => {
    setFullscreen(true);
    setShow(true);
    const response = await getOnebusApi(id, header);
    setOneBus(response.data);
    console.log(response);
  };

  // useEffect(() => {
  //   busList();
  // }, []);

  return (
    <div className='ms-5 list-table p-4 shadow'>
      <h1>List Of Bus</h1>

      <Table className='table-transparent table striped mt-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Bus Name</th>
            <th>Owner Name</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        {AllbusList.length>0 ? AllbusList.map((i, index) => (
          <tbody key={i.id}>
            <tr>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.busowner.name}</td>
              <td>{i.Number_plate}</td>
              <td><Button className='text-black border-0' style={{ backgroundColor: 'transparent' }} onClick={() => getOneBus(i.id)}><i className="fa-solid fa-file-pen"></i></Button></td>
            </tr>
          </tbody>
        )) : <div className='text-center text-danger'><p><b>No Buses Added Yet!!</b></p></div>}
      </Table>

      <>
        <Modal className='' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton className='m-5'>
            <Modal.Title><h1 className='busHead'>{oneBus?oneBus.name:""}</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body className='m-3 modalBody'>
            {oneBus ? (
            <>
                <Row className='d-flex justify-content-center align-item-center ps-5 pe-5'>
                  <Col className='d-flex justify-content-center align-item-center' lg={5}>
                   
                    <img className='OnebusImg' src={oneBus.image ? `http://127.0.0.1:8000${oneBus.image}` : 'https://i.postimg.cc/VNPZgJJt/placeholder-image.jpg'} alt="" />
                  </Col>
                  <Col className='d-flex justify-content-center align-item-center' lg={7}>
                    <img
                      className='OnebusImg'
                      src={oneBus.RC_book ? `http://127.0.0.1:8000${oneBus.RC_book}` : 'https://i.postimg.cc/VNPZgJJt/placeholder-image.jpg'}
                      alt=''
                    />
                  </Col>
                </Row>

              <div className='text-center'>
              <p className='fs-5' style={{ lineHeight: '1.3' }}>
                      <b>Bus Owner :</b> {oneBus.busowner.name}
                    </p>
                  <p className='fs-5' style={{ lineHeight: '1.3' }}>
                      <b>Number Plate :</b> {oneBus.Number_plate}
                    </p>
                    <p className='fs-5' style={{ lineHeight: '1.3' }}>
                      <b>Engine Number :</b> {oneBus.Engine_no}
                    </p>
              </div>
            </>

              
            ) : (
              <p>Loading...</p>
            )}
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default ListOfBus;
