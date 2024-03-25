import React, {  useState } from 'react'
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
        <td >{data?.name}</td>
        <td>{data?.Number_plate}</td>
        <td>{data?.Engine_no}</td>
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
<div className='text-center py-2'>
            {data?.image ? <img src={`${BASE_URL}/${data?.image}`} alt={data?.name} className='img-fluid w-75' /> : "No image provided"}<br />
  
</div>
          <ListGroup>
            <ListGroup.Item> Vehicle no. : {data?.Number_plate}</ListGroup.Item>
            <ListGroup.Item>Engine no. :{data?.Engine_no}</ListGroup.Item>
            RC_book:
          </ListGroup>
          <div className='w-100 text-center'>
            {data?.RC_book ? <img src={`${BASE_URL}/${data?.RC_book}`} alt={`${data?.name} RC Book`} className='img-fluid' /> : "Not provided"}
          </div>        
          </Modal.Body>
      </Modal>
    </>
  )
}

export default Bus