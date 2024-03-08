import React, { useEffect, useState } from 'react'
import './BusOwnerHome.css'
import BusOwnerHeader from '../../Components/Bus Owner Header/BusOwnerHeader'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import BusOwnerAside from '../../Components/BusOwnerAside/BusOwnerAside'
import { getOwnerBusesApi, getOwnerDriversApi } from '../../BUS_OWNER_SERVICES/busOwnerApis'
import { ToastContainer, toast } from 'react-toastify'
import BusOwnerBuses from '../../Components/BusOwnerBuses/BusOwnerBuses'
import BusOwnerDrivers from '../../Components/BusOwnerDrivers/BusOwnerDrivers'

function BusOwnerHome() {
  const [allBuses, setAllBuses] = useState([])
  const [allDrivers, setAllDrivers] = useState([])
  const [isAproved, setIsAproved] = useState(false)
  const navigate = useNavigate()
useEffect(() => {
  if (localStorage.getItem('token')){
    setIsAproved(true)
  }
  else{
    setIsAproved(false)
  }
}, [])

  const getData = async () => {
    const token = localStorage.getItem('token')
    const headers = {
      "Authorization": `Token ${token}`
    }
    const result1 = await getOwnerBusesApi(headers)
    if (result1.status >= 200 && result1.status < 300) {
      setAllBuses(result1.data)
    }
    const result2 = await getOwnerDriversApi(headers)
    if (result2.status >= 200 && result2.status < 300) {
      setAllDrivers(result2.data)
    }
  }
  useEffect(() => { getData() }, [])

  return (
    <div div className = 'dashboardBody' >
      <Row>
        <Col lg={2} >
          <BusOwnerAside></BusOwnerAside>
        </Col>
        <Col lg={10} >
          {isAproved?<div className=' ms-5 pe-5 me-5 mt-5  w-100'>
            <Row className='mt-5 me-4'>
              <Col lg={6}>
                <div className='number shadow pt-5 text-center  p-5'>
                  <h1> <i className="fa-solid fa-bus"></i></h1>
                  <h2 className=''>No of buses</h2>
                  <h1>{allBuses?.length}</h1>
                </div>
              </Col>
              <Col lg={6}>
                <div className='number shadow text-center  pt-5  p-5'>
                  <h1> <i className="fa-solid fa-user-group"></i></h1>
                  <h2>No of Bus drivers</h2>
                  <h1>{allDrivers?.length}</h1>
                </div>
              </Col>

              <Col lg={6} className='pt-3'>
              <BusOwnerBuses/>
              </Col>
              <Col lg={6} className='pt-3'>
              <BusOwnerDrivers/>
              </Col>
            </Row>
          </div>:
          <div className='d-flex justify-content-center align-items-center'>
            You account is not aproved yet! Please come back later.
            </div>}
          
        </Col>
      </Row>
      <ToastContainer/>
    </div >
  )
}

export default BusOwnerHome