import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { addTimeAndAmountApi, getStopDetailApi } from '../../BUS_OWNER_SERVICES/busOwnerApis';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import './AddTimeAndAmount.css'
import Swal from 'sweetalert2';
import { FloatingLabel, Form } from 'react-bootstrap';

function AddTimeAndAmount({ id, setStopUpdate }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [stopData, setStopData] = useState({ time: "", amount: "" })
    const [inputData, setInputData] = useState({ time: "", amount: "" })

    const getStopData = async () => {
        let token = localStorage.getItem('token')
        const reqHeader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Token ${token}`
        }
        try {
            const result = await getStopDetailApi(id, reqHeader)
            if (result.status >= 200 && result.status < 300) {
                setStopData(result.data)
            }
            else {
                console.log(result);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {getStopData()}, [])
    
    console.log(inputData, id);
    const handleSubmit = async () => {
        const { time, amount } = inputData
        if (!time || !amount) {
            Swal.fire({
                icon: "warning",
                title: 'Please fill the form completely',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            let token = localStorage.getItem('token')
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Token ${token}`
            }
            // console.log(reqHeader);
            try {
                let result = await addTimeAndAmountApi(id, inputData, reqHeader)
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    Swal.fire({
                        icon: "success",
                        title: "Time and amount added successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(result.data);
                    setStopUpdate(result.data.id)
                    handleClose()
                    console.log(result);
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: result?.response?.data?.error,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <>
            <Button variant="primary btn-red rounded-5" onClick={handleShow}>
                Add amount&time
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Time and amount</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Stop time:
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <MobileTimePicker
                            label="Starting time:"
                            sx={{ width: '100%', paddingBottom: '10px' }}
                            value={dayjs(inputData.time)}
                            onChange={(newValue) => setInputData({ ...inputData, time: newValue.format("HH:mm:ss") })}
                        />
                    </LocalizationProvider>
                    Stop amount:
                    <FloatingLabel controlId="amountFloating" label="Amount in ₹">
                        <Form.Control value={inputData.amount} onChange={e => setInputData({ ...inputData, amount: e.target.value })} type="number" placeholder="" />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary btn-red" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default AddTimeAndAmount
