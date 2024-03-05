import React, { useEffect, useState } from 'react'
import './ListOfBus.css'
import { Table } from 'react-bootstrap'
import { busListApi } from '../../../SERVICES/AllAPI'


function ListOfBus({owners}) {
  const token = localStorage.getItem("token")
const[AllbusList,setAllBusList]=useState([])

  const busList = async () => {
    const header = {
      Authorization: `Token ${token}`
    };
    const response = await busListApi(header)
    setAllBusList(response.data)
    // console.log(response.data);
  }

  useEffect (()=>{
   busList()
  },[])
  return (
    <div className='ms-5 list-table p-4 shadow' >
        <h1>List Of Bus</h1>

       <Table className='table-transparent striped mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Bus Name</th>
          <th>Owner Name</th>
          <th>Number</th>
        </tr>
      </thead>
      { AllbusList ? AllbusList.map((i,index)=>(

      <tbody>
        <tr>
         <td>{index+=1}</td>
          <td>{i.name}</td>
          <td>Otto</td>
          <td>{i.Number_plate}</td>
        </tr>
       
      </tbody>)):<></>}
    </Table>
    </div>
  )
}

export default ListOfBus