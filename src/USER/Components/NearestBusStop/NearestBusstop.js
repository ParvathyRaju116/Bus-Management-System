import React from 'react'
import './NearestBusstop.css'

function NearestBusstop() {
  return (
    <div className='m-5   '>
       <div className='m-5 bustopBody shadow text-center'>
            <h2 className='mt-5 nearbusHead'>Nearest Bus stop</h2>
            <div className='mt-5 d-flex w-75 m-5 text-center'>
                <img className='bustopLogo' src="https://i.postimg.cc/DwB1WWDp/bus-station.png" alt="" />
                <h3 className='ms-4'>Kakkanad Collectrate</h3>
                <h6 className='ms-4 mt-2 ms-auto'>2 Min <i className="fa-solid fa-person-walking"></i></h6>
            </div>
            <hr />
            <div className='mt-5 d-flex w-75 m-5 pb-5 text-center'>
                <img className='bustopLogo' src="https://i.postimg.cc/DwB1WWDp/bus-station.png" alt="" />
                <h3 className='ms-4'>Kakkanad Collectrate</h3>
                <h6 className='ms-4 mt-2 ms-auto'>2 Min <i className="fa-solid fa-person-walking"></i></h6>
            </div>

       </div>
    </div>
  )
}

export default NearestBusstop