import React, { useState } from 'react'
import './Bus.css'
import { Badge, Button, ListGroup, Modal } from 'react-bootstrap';
import { BASE_URL } from '../../../SERVICES/Base_Url';


function Bus({ data, index }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr>
        <td>{index}</td>
        <td >{data?.name}&nbsp;<sup>{data?.is_active?<Badge pill bg="success">Active</Badge>:<Badge pill bg="danger">Inactive</Badge>}</sup></td>
        <td>{data?.Number_plate}</td>
        <td>
          <Button variant="primary" className='more' onClick={handleShow}>
          More
        </Button></td>
      </tr>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{data?.name}&nbsp;{data?.is_active?<Badge pill bg="success">Active</Badge>:<Badge pill bg="danger">Inactive</Badge>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={`${BASE_URL}/${data?.image}`} alt={data?.name} className='img-fluid' /><br/>

          <ListGroup>
            <ListGroup.Item> Vehicle no. : {data?.Number_plate}</ListGroup.Item>
            <ListGroup.Item>Engine no. :{data?.Engine_no}</ListGroup.Item>

          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Bus