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

     <div className='m-5'>
       <div className='text-center'> <h1 className='assigneRouteHead'>Owners List</h1></div>
            <Table className='mt-4'   hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
           {busOwner.length>0?busOwner.map((i,index)=>(
           <tr>
              <td>{index+1}</td>
              <td>{i.name}</td>
              <td>{i.address}</td>
              <td>{i.phone}</td>
            </tr>
            )):<></>}
             
          </tbody>
        </Table>
     </div >
       
    </div>
  )
}

export default OwnersList