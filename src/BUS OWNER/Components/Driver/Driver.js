import React, { useState } from 'react'
import './Driver.css'
import { Badge, Button, ListGroup, Modal } from 'react-bootstrap';
import { BASE_URL } from '../../../SERVICES/Base_Url';

function Driver({ data, index }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(data);
  return (
    <>
      <tr>
        <td>{index}</td>
        <td >{data?.name}</td>
        <td>{data?.phone}</td>
        <td>
          <Button variant="primary" className='more' onClick={handleShow}>
            More
          </Button></td>
      </tr>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{data?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          License:<br />
          <img src={`${BASE_URL}/${data?.license}`} alt={data?.name} className='img-fluid w-100' /><br />
          <ListGroup>
            <ListGroup.Item> Phone no. : {data?.phone}</ListGroup.Item>
            <ListGroup.Item>Address. :{data?.address}</ListGroup.Item>
            <ListGroup.Item>Age: {data?.age}</ListGroup.Item>
            <ListGroup.Item>Date of birth: {data?.age}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Driver