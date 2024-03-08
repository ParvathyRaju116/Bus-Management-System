import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/Admin-Header/AdminHeader'
import { busOwnerViewApi } from '../../../SERVICES/AllAPI';
import { Table } from 'react-bootstrap';


function OwnersList() {
    const token = localStorage.getItem("token");
const[busOwner,setBusOwners]=useState([])
    const ownerview = async () => {
        const header = {
          Authorization: `Token ${token}`
        };
        const response = await busOwnerViewApi(header)
        setBusOwners(response.data)
        console.log(response);
      }
      useEffect(()=>{
ownerview()
      },[])
    
  return (
    <div>
        <AdminHeader></AdminHeader>

     <div>
            <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
           {busOwner.length>0?busOwner.map((i,index)=>(
           <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            )):<></>}
             
          </tbody>
        </Table>
     </div>
       
    </div>
  )
}

export default OwnersList