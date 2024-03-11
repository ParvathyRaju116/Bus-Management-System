import React, { useEffect, useState } from 'react'
import './BusOwnerDrivers.css'
import { Button, Col, FloatingLabel, Form, FormGroup, Modal, Row, Table } from 'react-bootstrap'
// import BusOwnerAside from '../BusOwnerAside/BusOwnerAside'
import { useNavigate } from 'react-router-dom'
import { addDriverApi, getOwnerDriversApi } from '../../BUS_OWNER_SERVICES/busOwnerApis'
import { toast } from 'react-toastify'
import Driver from '../Driver/Driver'


function BusOwnerDrivers() {
  const [allDrivers, setAllDrivers] = useState([])
  const [newDriver, setNewDriver] = useState({ name: "", phone: "", address: "", age: "", dob: "", license: "" })
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setNewDriver({ name: "", phone: "", address: "", age: "", dob: "", license: "" })
  }
  const handleShow = () => setShow(true);
console.log(newDriver);
  const getData = async () => {
    const token = localStorage.getItem('token')
    const headers = {
      "Authorization": `Token ${token}`
    }

    const result = await getOwnerDriversApi(headers)
    if (result.status >= 200 && result.status < 300) {
      setAllDrivers(result.data.data)
    }

  }
  useEffect(() => { getData() }, [])
  const handleAdd = async () => {
    let {name, phone, address, age, dob, license } = newDriver
    if (!name || !phone || !address || !age || !dob || !license) {
      alert("Please fill the form completely")
    }
    else {
      const reqBody = new FormData()
      reqBody.append("name", name)
      reqBody.append("phone", phone)
      reqBody.append("address", address)
      reqBody.append("age", age)
      reqBody.append("dob", dob)
      reqBody.append("license", license)
      let token = localStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Token ${token}`
      }
      try {
        let result = await addDriverApi(reqBody, reqHeader)
        console.log(result);
        if (result.status>=200 && result.status<300){
          alert("New driver added successfully")
          getData()
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
        <h1>List Of Drivers <Button className='more rounded-4' onClick={handleShow}>Add</Button></h1>

        <Table className='table-transparent striped mt-3'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {allDrivers?.map((i, index) =>
              <Driver data={i} index={index + 1} key={index} />
            )}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <label>
            <input type="file" onChange={e =>setNewDriver({...newDriver,license:e.target.files[0]})} />
            Add license
          </label> */}
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control value={newDriver.name} onChange={e => setNewDriver({ ...newDriver, name: e.target.value })} type="Name" placeholder="Name" />
          </FloatingLabel>
          <FloatingLabel label="Phone no." className="mb-3">
            <Form.Control value={newDriver.phone} onChange={e => setNewDriver({ ...newDriver, phone: e.target.value })} type="tel" placeholder="Phone no." />
          </FloatingLabel>
          <FloatingLabel label="Age" className="mb-3">
            <Form.Control value={newDriver.age} onChange={e => setNewDriver({ ...newDriver, age: e.target.value })} type="number" placeholder="Age" />
          </FloatingLabel>
          <FloatingLabel label="Date of Birth" className="mb-3">
            <Form.Control value={newDriver.dob} onChange={e => setNewDriver({ ...newDriver, dob: e.target.value })} type="date" placeholder="dob" />
          </FloatingLabel>
          <FloatingLabel label="Address" className="mb-3">
            <Form.Control value={newDriver.address} onChange={e => setNewDriver({ ...newDriver, address: e.target.value })} as="textarea" placeholder="dob" />
          </FloatingLabel>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className='mb-0'>Upload license</Form.Label>
            <Form.Control type="file" className='mt=0' onChange={e =>setNewDriver({...newDriver,license:e.target.files[0]})} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button className="btn-bg" variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BusOwnerDrivers