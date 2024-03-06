import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, } from 'react-bootstrap';
import { addStopApi, getRouteAndStopeApi } from '../../../SERVICES/AllAPI';


function AddStop({ id }) {
    const [addshow, setaddShow] = useState(false);

    const handleAddClose = () => setaddShow(false);
    const handleAddShow = () => setaddShow(true);
    const token = localStorage.getItem("token");
    const header = {
        Authorization: `Token ${token}`
    };

    const RouteAndStop = async (id) => {
        const response = await getRouteAndStopeApi(id, header);
        
      };
    

    const [addStopData, setAddStopData] = useState({
        stop_name: "",
        time_taken: "",
        approx_cost: ""
    })
    // console.log(addStopData);


    const addStop = async (e) => {
        const response = await addStopApi(id, addStopData, header)
        console.log(response);
        RouteAndStop()
        handleAddClose()
    }

    return (
        <div>
            <div className='text-end'>
                <Button className='AddBtn me-5' onClick={handleAddShow}>
                    <i className="fa-solid fa-plus text-white"></i>
                </Button>
            </div>
            <Modal show={addshow} onHide={handleAddClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='add-stop-head'>Add Stop</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form >   <div className='w-100'>
                      
                            <div className='d-flex'><i class="fa-solid fa-file-signature mt-4"></i><input type="text" placeholder='Stop Name' className='form-control m-3 ' onChange={(e) => setAddStopData({ ...addStopData, stop_name: e.target.value })} required /></div>
                            <div className='d-flex'><i class="fa-regular fa-clock mt-4"></i><input type="time" step="1" placeholder='Time Taken' className='form-control m-3 ' onChange={(e) => setAddStopData({ ...addStopData, time_taken: e.target.value })} required /></div>
                            <div className='d-flex'> <i class="fa-solid fa-indian-rupee-sign mt-4"></i>  <input type="number" placeholder='Bus Fare' className='form-control m-3' onChange={(e) => setAddStopData({ ...addStopData, approx_cost: e.target.value })} required /></div>

                                     </div>      </Form>  

                </Modal.Body>
                <Modal.Footer>
                    <Button className='AddBtn' onClick={addStop}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddStop