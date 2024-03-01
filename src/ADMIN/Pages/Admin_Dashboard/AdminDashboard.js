import React from 'react'
import './AdminDashboard.css'
import { Col, Row } from 'react-bootstrap'
import Aside from '../../Components/Aside/Aside'
import ListOfBus from '../../Components/List of bus/ListOfBus'
import Verification from '../../Components/Verification List/Verification'


function AdminDashboard() {
  return (
    <div className='dashboardBody'>
     <Row>
        <Col lg={2} >
          <Aside></Aside>
          </Col>
        <Col lg={10} >
          <div className=' ms-5 pe-5 me-5 mt-5  w-100'>
            <Row className='mt-5 me-4'>
              <Col lg={6}>

                <div className='number shadow pt-5 text-center  p-5'>
                 
                   <h1> <i class="fa-solid fa-users"></i></h1>
                   
                      <h2 className=''>No of users</h2>   
                      <h1>10</h1>
                

                  </div>
              </Col>
              <Col lg={6}>
              <div className='number shadow text-center  pt-5  p-5'>
                
                   <h1> <i class="fa-solid fa-bus"></i></h1>
                   
                      <h2>No of BUS</h2> 
                      <h1>10</h1>
                

                  </div>
                
             
              </Col>
            </Row>

          </div>

        <Row className='mt-3 pt-3'>
          <Col lg={7}>
       <ListOfBus></ListOfBus>
          </Col>

          <Col lg={5}>
           <Verification></Verification>
          </Col>
        </Row>
        </Col>
      </Row>




    </div>
  )
}

export default AdminDashboard