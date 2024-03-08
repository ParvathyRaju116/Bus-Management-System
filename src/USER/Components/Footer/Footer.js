import { Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'


function Footer() {
  return (
    <div>
        <div className='footer-body'>
            <Row className='m-5'>
                <Col>
                <Typography
                className='footerHead'
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
                <Col>
                
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    </div>
  )
}

export default Footer