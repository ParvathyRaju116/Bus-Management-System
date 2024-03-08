import React from 'react'
import Header from '../../Components/Header/Header'
import './FindBus.css'
import NearestBusstop from '../../Components/NearestBusStop/NearestBusstop'


function Findbus() {
    return (
        <>
            <Header></Header>
            <div className='findbusBody mt-5'>
                <div className='input text-center w-75'>
                    <div className='d-flex'>
                        <i className="fa-solid fa-circle-dot locationIcon fs-3 m-3 " style={{ color: '#FF4B2B' }} ></i>
                        <input type="text" placeholder='Your Location' className='form-control shadow' />
                    </div>
                    <br />
                    <div className='d-flex'>
                        <i className="fa-solid fa-location-dot locationIcon fs-3 m-3 " style={{ color: '#FF416C' }}></i>
                        <input type="text" placeholder='Choose Destination' className='form-control shadow' /></div>
                </div>
            </div>
            <NearestBusstop></NearestBusstop>
        </>
    )
}

export default Findbus