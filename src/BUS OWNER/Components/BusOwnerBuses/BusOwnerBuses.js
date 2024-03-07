import React, { useEffect, useState } from 'react'
import './BusOwnerBuses.css'
import { Button, FloatingLabel, Form, Modal, Table } from 'react-bootstrap'
// import { addBusApi, getOwnerBusesApi } from '../../../SERVICES/AllAPI'
import {  addBusApi, getOwnerBusesApi} from '../../BUS_OWNER_SERVICES/busOwnerApis'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Bus from '../Bus/Bus'

function BusOwnerBuses() {
  const [allBuses, setAllBuses] = useState([])
  const [newBus, setNewBus] = useState({ name: "", Number_plate: "", Engine_no: "", image: "" })
  const naviagate = useNavigate()
  const dummyImage = "https://content.hostgator.com/img/weebly_image_sample.png"
  const [preview, setPreview] = useState(dummyImage)
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setNewBus({ name: "", Number_plate: "", Engine_no: "", image: "" })
    setPreview(dummyImage)
  }
  const handleShow = () => setShow(true);
  console.log(newBus);
  const getData = async () => {
    let token = localStorage.getItem('token')
    let headers = {
      "Authorization": `Token ${token}`
    }
    let result = await getOwnerBusesApi(headers)
    if (result.status >= 200 && result.status < 300) {
      setAllBuses(result.data.data)
      console.log("result.data.data", result.data.data);
    }
    else {
      naviagate('/bus-owner-auth')
      toast.warning('Please login')
    }

  }
  useEffect(() => { getData() }, [])
  const handleUploadImage = (e) => {
    let file = e.target.files[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      setNewBus({ ...newBus, image: file })
    }
    else {
      setPreview(dummyImage)
      setNewBus({ ...newBus, image: "" })
    }
  }
  const handleAdd = async () => {
    let { name, Number_plate, Engine_no, image } = newBus
    if (!name || !Number_plate || !Engine_no || !image) {
      alert("Please fill the form completely")
    }
    else {
      const reqBody = new FormData()
      reqBody.append("name", name)
      reqBody.append("Number_plate", Number_plate)
      reqBody.append("Engine_no", Engine_no)
      reqBody.append("image", image)
      let token = localStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Token ${token}`
      }
      console.log(reqHeader);
      try {
        let result = await addBusApi(reqBody, reqHeader)
        console.log(result);
        if (result.status>=200 && result.status<300){
          alert("New bus added successfully")
          handleClose()
        }
        else{
          alert("Something went wrong please try again later")
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <div className='ms-5 list-table p-4 shadow' >
        <h1>List Of Buses  <Button onClick={handleShow} className='more rounded-4'>Add</Button></h1>

        <Table className='table-transparent striped mt-3'>
          <thead>
            <tr>
              <th>#</th>
              <th>Bus Name</th>
              <th>Vehicle number</th>
            </tr>
          </thead>
          <tbody>
            {allBuses?.map((i, index) =>
              <Bus data={i} index={index + 1} key={index} />
            )}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add new bus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            <input type="file" style={{ display: 'none' }} onChange={e => handleUploadImage(e)} />
            <img src={preview} alt="Add image" className='img-fluid w-100' style={{ cursor: 'pointer' }} />
          </label>
          <FloatingLabel label="Bus name" className="mb-3">
            <Form.Control value={newBus.name} onChange={e => setNewBus({ ...newBus, name: e.target.value })} type="Name" placeholder="Name" />
          </FloatingLabel>
          <FloatingLabel label="Vehicle no.">
            <Form.Control value={newBus.Number_plate} onChange={e => setNewBus({ ...newBus, Number_plate: e.target.value })} type="text" placeholder="Vehicle no." />
          </FloatingLabel>
          <FloatingLabel label="Engine No.">
            <Form.Control value={newBus.Engine_no} onChange={e => setNewBus({ ...newBus, Engine_no: e.target.value })} type="text" placeholder="Engine No." />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default BusOwnerBuses