import React from 'react'
import './BusOwnerProfile.css'
import { Col, Row } from 'react-bootstrap'
import BusOwnerAside from '../../Components/BusOwnerAside/BusOwnerAside'

function BusOwnerProfile() {
  return (
    <div className='dashboardBody'>
      <Row>
        <Col lg={2} >
          <BusOwnerAside></BusOwnerAside>
        </Col>
        <Col lg={10} >
          <div className=' ms-5 pe-5 me-5 mt-5  w-100'>
            <Row className='mt-5 me-4'>
              <h1>Profile</h1>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default BusOwnerProfile