import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/Admin-Header/AdminHeader';
import { passengerviewApi } from '../../../SERVICES/AllAPI';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function UsersList() {
    const token = localStorage.getItem("token");
    const[userList,setUserList]=useState([])
        const ownerview = async () => {
            const header = {
              Authorization: `Token ${token}`
            };
            const response = await passengerviewApi(header)
            setUserList(response.data)
            console.log(response);
          }
          useEffect(()=>{
    ownerview()
          },[])
        
      return (
        <div>
            <AdminHeader></AdminHeader>
    
         <div className='m-5'>
         <div><Link to={"/admin-dashbord"}><Button className='back-home-button'><i class="fa-solid fa-angles-left"></i> Back To Home</Button></Link></div>
        

           <div className='text-center'> <h1 className='assigneRouteHead'>Users List</h1></div>
           <hr />

                <Table className='mt-5'   hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
               {userList.length>0?userList.map((i,index)=>(
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

export default UsersList