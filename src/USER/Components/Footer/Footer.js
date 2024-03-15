import { Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'


function Footer() {
  return (
    <div>
        <div className='footer-body'>
            <Row className='mt-5 ms-5'>
                <Col>
                <Typography 
                className='footerHead mt-5'
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                
                textDecoration: "none",
              }}
            >
              TRANSITEASE 
            </Typography>
            <p>Revolutionize your city navigation with Bus Tracking Management System: your go-to for real-time bus tracking, scheduling, and effortless journey planning, empowering you with precise GPS updates and user-friendly interfaces for an efficient commute.</p>
                </Col>
               
                <Col className='mt-5 ms-5 ps-5'>
                <h4><b>Links</b></h4>
                <a href="/">Home</a> <br />
                <a href="#about">About Us</a> <br />
                <a href="/find-bus">Find Bus</a>
                </Col>
                <Col className='mt-5'>
                <h4><b>Contact Us</b></h4>
                <i class="fa-solid fa-envelope"></i> @transitease@gmail.com
               
                <div className='d-flex mt-3'>
                <i class="fa-brands fa-instagram me-3"></i>
                <i class="fa-brands fa-facebook me-3"></i>
                <i class="fa-brands fa-x-twitter"></i>
                </div>
                </Col>
            </Row>
        </div>
        <div className='text-center'><h6>	&#169; 2023 | All right reserved | Transitease</h6></div>

    </div>
  )
}

export default Footer