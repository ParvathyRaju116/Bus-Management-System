import React from 'react'
import './AdminDashboard.css'
import { Col, Row } from 'react-bootstrap'
import Aside from '../../Components/Aside/Aside'



function AdminDashboard() {
  return (
    <div>

      <Row>
        <Col ><Aside></Aside></Col>
        <Col>
          <div className='dashboardBody d-flex'>

            <div className='number shadow'>10</div>
            <div className='number shadow'>15</div>



          </div>
        </Col>
      </Row>


    </div>
  )
}

export default AdminDashboard