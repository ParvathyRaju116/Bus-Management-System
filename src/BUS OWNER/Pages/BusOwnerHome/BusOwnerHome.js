import React from 'react'
import './BusOwnerHome.css'
import BusOwnerHeader from '../../Components/Bus Owner Header/BusOwnerHeader'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function BusOwnerHome() {
  return (

    <div>
      <BusOwnerHeader></BusOwnerHeader>

      <div>
       <Link to={'/add-bus-route'}> <Button>Add Route</Button></Link>
      </div>
    </div>
  )
}

export default BusOwnerHome