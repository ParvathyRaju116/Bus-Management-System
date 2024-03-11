import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusOwnerAside from '../../Components/BusOwnerAside/BusOwnerAside';
import { getAssignedRoutesApi, getOwnerBusesApi, getOwnerDriversApi, getRoutesApi } from '../../BUS_OWNER_SERVICES/busOwnerApis';
import Stops from '../../Components/Stops/Stops';
import AssignBusAndDriver from '../../Components/AssignBusAndDriver/AssignBusAndDriver';
import './BusOwnerRoutes.css'
function BusOwnerRoutes() {
    const [routeList, setRoutList] = useState([])
    const [assignedRoutes, setAssignedRoutes] = useState([])
    const [allBuses, setAllBuses] = useState([])
  const [allDrivers, setAllDrivers] = useState([])
  const getData = async () => {
    const token = localStorage.getItem('token')
    const headers = {
      "Authorization": `Token ${token}`
    }
    const result1 = await getOwnerBusesApi(headers)
    if (result1.status >= 200 && result1.status < 300) {
      setAllBuses(result1.data.data)
    }
    const result2 = await getOwnerDriversApi(headers)
    if (result2.status >= 200 && result2.status < 300) {
      setAllDrivers(result2.data.data)
    }
  }
    const getRoutes = async () => {
        const token = localStorage.getItem('token')
        const headers = {
            "Authorization": `Token ${token}`
        }

        const result = await getRoutesApi(headers)
        if (result.status >= 200 && result.status < 300) {
            console.log(result);
            setRoutList(result.data.data)
        }
    }
    const getAssignedRoutes = async () => {
        const token = localStorage.getItem('token')
        const headers = {
            "Authorization": `Token ${token}`
        }
        const result = await getAssignedRoutesApi(headers)
        if (result.status >= 200 && result.status < 300) {
            console.log(result);
            setAssignedRoutes(result.data.data)
        }
    }
    useEffect(() => {
        getRoutes();getAssignedRoutes();getData()
    }, [])


    return (
        <div className='dashboardBody'>
            <Row>
                <Col lg={2} md={1}>
                    <BusOwnerAside></BusOwnerAside>
                </Col>
                <Col lg={10} md={11}>
                    <div className='list-routes  mx-5 mt-3 ps-5 pe-5'>
                        <h1 className='pb-3'>All routes</h1>
                        {routeList ? routeList.map((i, index) => (
                            <div className='d-flex'>
                                <Accordion className='ps-5 w-100' key={i?.id}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        id="panel1-header"
                                        className='d-flex '
                                        style={{ width: '100%', justifyContent: 'space-between' }}
                                    >
                                        <div style={{ display: 'flex', width: '100%' }}>
                                            <h2 style={{ textTransform: 'capitalize' }}>{i?.name}</h2>
                                            <div className='ms-auto me-5 pe-5'>
                                                <b> Starts From : </b> {i?.starts_from} <br />
                                                <b> Ends At : </b> {i?.ends_at}
                                            </div>
                                        </div>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <div>
                                        </div>

                                        <Stops id={i.id} ></Stops>


                                    </AccordionDetails>
                                </Accordion>
                                <div className='d-flex align-items-center p-3'><AssignBusAndDriver id={i?.id} /></div>

                            </div>

                        )) : <></>}
                    <div className='mx-5 mt-3 route-list-table p-4 shadow'>
                        <h2 className='text-start'>Assigned routes</h2>
                        <Table className='table-transparent striped mt-3'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Route</th>
                                    <th>Bus</th>
                                    <th>Driver</th>
                                    <th>Start time</th>
                                    <th>End time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignedRoutes?.map((i, index) =>
                                    <tr key={i.id}>
                                        {/* <Bus data={i} index={index + 1} /> */}
                                        <td>{index+1}</td>
                                        <td>{routeList.find(j=>j.id==i.route)?.name}</td>
                                        <td>{allBuses.find(j=>j.id==i.bus)?.name}</td>
                                        <td>{allDrivers.find(j=>j.id==i.busdriver)?.name}</td>
                                        <td>{i?.start_time.slice(0,-3)}</td>
                                        <td>{i?.end_time.slice(0,-3)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                    </div>
                </Col>
            </Row>
        </div>



    )
}

export default BusOwnerRoutes