import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './About.css'

function About() {
    return (
        <>
            <div className='m-5 ps-5 pt-5'>
                <Row>
                    <Col>
                        <h1 className='mt-5'>About Us</h1>
                        <p className='about'>
                            Welcome to our Bus Tracking Management System, your one-stop solution for real-time bus tracking, scheduling, and route management. We pride ourselves on offering a comprehensive platform that allows you to effortlessly monitor bus locations, check arrival times, and plan your journey with ease. Whether you're a commuter, a transportation manager, or a curious traveler, our system provides up-to-the-minute updates on bus locations, departure times, and estimated arrival rates. With user-friendly interfaces and precise GPS technology, we ensure that you're always in the know, enhancing your travel experience and making your daily commute more efficient. Join us in revolutionizing the way you navigate the city, empowering you with the information you need to make informed travel decisions
                        </p>
                    </Col>
                    <Col className='text-center'><img className='abtImg' src="https://i.postimg.cc/xCJ24P8b/a1a71100f87418ce6d8059a1eeb58223.jpg" alt="" /></Col>
                </Row>


            </div>
            <div className='d-flex justify-content-center align-items-center '>


                <Row className="justify-content-center w-75">
                    <Col className='text-center'>
                        <div className="featurs">
                            <img className='FImg' src="https://i.postimg.cc/50JQmjnv/bus-2.png" alt="" /> <br />
                        </div>
                    </Col>
                    <Col>
                        <div className="featurs">
                            <img className='FImg' src="https://i.postimg.cc/50JQmjnv/bus-2.png" alt="" /> <br />
                        </div>
                    </Col>
                    <Col>
                        <div className="featurs">
                        <img className='FImg' src="https://i.postimg.cc/50JQmjnv/bus-2.png" alt="" /> <br />

                        </div>

                    </Col>
                    <Col>
                        <div className="featurs">
                        <img className='FImg' src="https://i.postimg.cc/50JQmjnv/bus-2.png" alt="" /> <br />

                        </div>

                    </Col>
                </Row>




                {/* </div> */}
            </div>
        </>
    )
}

export default About