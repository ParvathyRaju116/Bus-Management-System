import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BASE_URL } from '../../../SERVICES/Base_Url';
import { getOwnerBusesApi, getOwnerDriversApi } from '../../BUS_OWNER_SERVICES/busOwnerApis';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import './AssignBusAndDriver.css'
import Swal from 'sweetalert2';


function AssignBusAndDriver({ id }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [serviceData, setServiceData] = useState({ bus: "", busdriver: "", start_time: "", end_time: "" })
    console.log(serviceData);
    const handleClose = () => {setShow(false);setServiceData({ bus: "", busdriver: "", start_time: "", end_time: "" })}

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
    useEffect(() => { getData() }, [])
    const handleSubmit=async()=>{
        const {bus,busdriver,start_time,end_time}=serviceData
        if(!bus || !busdriver || !start_time || !end_time){
            Swal.fire({
                icon: "warning",
                title: 'Please fill the form completely',
                showConfirmButton: false,
                timer: 1500
              });
        }
        else{
            alert('proceed to api call')
        }
    }

    return (
        <>
            <Button className='btn-bg' variant="primary" onClick={handleShow}>
                Assign
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Assign a bus and a driver</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Autocomplete
                        id="bus-select"
                        sx={{ width: '100%', paddingBottom: '10px' }}
                        options={allBuses}
                        autoHighlight
                        getOptionLabel={(option) => option.name}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                    loading="lazy"
                                    width="40"
                                    srcSet={`${BASE_URL}${option.image} 2x`}
                                    src={`${BASE_URL}${option.image}`}
                                    alt=""
                                />
                                {option.name} ({option.Number_plate})
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose a bus"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }} />
                        )}
                        onChange={(e, v) => { setServiceData({ ...serviceData, bus: v ? v.id : "" }) }}
                    // value={allBuses.find(i=>i.id==serviceData.bus)}
                    />

                    <Autocomplete
                        id="driver-select"
                        sx={{ width: '100%', paddingBottom: '10px' }}
                        options={allDrivers}
                        autoHighlight
                        getOptionLabel={(option) => option.name}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option.name}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose a driver"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }} />
                        )}
                        onChange={(e, v) => { setServiceData({ ...serviceData, busdriver: v ? v.id : "" }) }}
                    // value={allDrivers.find(i=>i.id==serviceData.busdriver)}

                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs} >


                        <MobileTimePicker
                            label="Starting time:"
                            sx={{ width: '100%', paddingBottom: '10px' }}
                            value={dayjs(serviceData.start_time)}
                            onChange={(newValue) => setServiceData({ ...serviceData, start_time: newValue.format("HH:mm:ss") })}
                        />

                        <MobileTimePicker
                            label="Ending time:"
                            sx={{ width: '100%', paddingBottom: '10px' }}
                            value={dayjs(serviceData.end_time)}
                            onChange={(newValue) => setServiceData({ ...serviceData, end_time: newValue.format("HH:mm:ss") })}
                        />
                    </LocalizationProvider>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="btn-bg" onClick={handleSubmit} variant="primary">Assign</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AssignBusAndDriver