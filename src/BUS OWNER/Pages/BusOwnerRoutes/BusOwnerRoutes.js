import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusOwnerAside from '../../Components/BusOwnerAside/BusOwnerAside';
import { getRoutesApi } from '../../BUS_OWNER_SERVICES/busOwnerApis';
import Stops from '../../Components/Stops/Stops';

function BusOwnerRoutes() {
    const [routeList,setRoutList]=useState([])
    const getRoutes=async ()=>{
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
    useEffect(() => {getRoutes()}, [])
    
    return (
        <div className='dashboardBody'>
            <Row>
                <Col lg={2} >
                    <BusOwnerAside></BusOwnerAside>
                </Col>
                <Col lg={10} >
                    <div className='list-routes  m-5 ps-5 pe-5'>
                        <h1>Routes</h1>
                        {routeList ? routeList.map((i, index) => (
                            <Accordion className='ps-5 w-100' key={i.id}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    id="panel1-header"
                                    className='d-flex '
                                    style={{ width: '100%', justifyContent: 'space-between' }}
                                >
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <h2 style={{ textTransform: 'capitalize' }}>{i.name}</h2>
                                        <div className='ms-auto me-5 pe-5'>
                                            <b> Starts From : </b> {i.starts_from} <br />
                                            <b> Ends At : </b> {i.ends_at}
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                    </div>

                                    <Stops id={i.id} ></Stops>


                                </AccordionDetails>
                            </Accordion>
                        )) : <></>}
                    </div>
                </Col>
            </Row>
        </div>



    )
}

export default BusOwnerRoutes