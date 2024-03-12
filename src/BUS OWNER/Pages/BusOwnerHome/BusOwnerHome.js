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
    if (localStorage.getItem('token')) {
      setIsAproved(true)
    }
    else {
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
      setAllBuses(result1.data.data)
    }
    const result2 = await getOwnerDriversApi(headers)
    if (result2.status >= 200 && result2.status < 300) {
      setAllDrivers(result2.data.data)
    }
  }
  useEffect(() => { getData() }, [])

  return (
    <div div className='dashboardBody' >
      <div className='main-grid'>
        <BusOwnerAside></BusOwnerAside>

        <div>
          {isAproved ? <div className='m-2 w-100'>
            <Row className='m-2'>
              <Col lg={6}>
                <div className='number-bus-owner shadow pt-5 text-center  p-lg-5 p-2 mb-1'>
                  <h1> <i className="fa-solid fa-bus"></i></h1>
                  <h2 className=''>No of buses</h2>
                  <h1>{allBuses?.length}</h1>
                </div>
              </Col>
              <Col lg={6}>
                <div className='number-bus-owner shadow text-center  pt-5  p-lg-5 p-2'>
                  <h1> <i className="fa-solid fa-user-group"></i></h1>
                  <h2>No of Bus drivers</h2>
                  <h1>{allDrivers?.length}</h1>
                </div>
              </Col>

              <Col lg={6} className='pt-3'>
                <BusOwnerBuses />
              </Col>
              <Col lg={6} className='pt-3'>
                <BusOwnerDrivers />
              </Col>
            </Row>
          </div> :
            <div className='d-flex justify-content-center align-items-center'>
              You account is not aproved yet! Please come back later.
            </div>}
        </div>
      </div>
      <ToastContainer />
    </div >
  )
}

export default BusOwnerHome