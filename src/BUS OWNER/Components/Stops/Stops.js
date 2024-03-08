import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { getStopsApi } from '../../BUS_OWNER_SERVICES/busOwnerApis';

function Stops({id}) {
    const [stops,setStops]=useState([])
    const getStops=async()=>{
        let token = localStorage.getItem('token')
        let headers = {
          "Authorization": `Token ${token}`
        }
        let result = await getStopsApi(id,headers)
        if (result.status >= 200 && result.status < 300) {
          setStops(result.data.data.stops)
          console.log("result.data.data", result.data.data);
        }
    }
    useEffect(() => {getStops()}, [])
    
    return (
        <div>
            {stops?.length > 0 ? (
                <Table className="w-100 hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Stop Name</th>
                            <th>Time Taken</th>
                            <th>Bus Fare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stops.map((i, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{ textTransform: 'capitalize' }}>{i.stop_name}</td>
                                <td>{i.time_taken}</td>
                                <td>{i.approx_cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p className='text-danger'><b>No Stops Added Yet !!!</b></p>
            )}
        </div>
    )
}

export default Stops