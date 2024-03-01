import React from 'react'
import './ListOfBus.css'
import { Table } from 'react-bootstrap'


function ListOfBus() {
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>KL 63 f1167</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>KL 63 f1167</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>KL 63 f1167</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default ListOfBus