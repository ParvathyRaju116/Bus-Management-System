import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { addStopApi, getRouteAndStopeApi } from '../../../SERVICES/AllAPI';
import Swal from 'sweetalert2'

function AddStop({ id }) {

    const [addshow, setaddShow] = useState(false);
    const [stop, setStop] = useState(null);
    const token = localStorage.getItem("token");
    const header = {
        Authorization: `Token ${token}`
    };
    const handleAddClose = () => setaddShow(false);
    const handleAddShow = () => setaddShow(true);
    const [addStopData, setAddStopData] = useState({
        stop_name: "",
        time_taken: "",
        approx_cost: ""
    });
    useEffect(() => {
        // console.log(id);
        getRouteAndStop()

    }, []);

    const getRouteAndStop = async () => {
        const response = await getRouteAndStopeApi(id, header)
        setStop(response.data.stops)
        // console.log(stop);
    }

    




    const addStop = async () => {
        const response = await addStopApi(id, addStopData, header);
        if (response.status == 200) {
            getRouteAndStop()
            handleAddClose();
            Swal.fire({
                icon: "success",
                title: "Stop Added",
                showConfirmButton: false,
                timer: 1500
              });
            setStop({
                stop_name: "",
                time_taken: "",
                approx_cost: ""
            })
        }
        else {
            Swal.fire({
                icon: "error",
                text: "Something went wrong!",
                timer: 1200
            });

        }
    };

    return (
        <div>
            <div className='w-100 text-center d-flex justify-content-center align-item-center'>
                {stop && stop.length > 0 ? (
                    <Table className="w-100 hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Stop Name</th>
                                <th>Time Taken</th>
                                <th>Bus Fare</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {stop.map((i, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td style={{ textTransform: 'capitalize' }}>{i.stop_name}</td>
                                    <td>{i.time_taken}</td>
                                    <td>{i.approx_cost}</td>
                                    <td><button className='dltbtn' onClick={""}><i class="fa-solid fa-trash-can"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p className='text-danger'><b>No Routes Added Yet !!!</b></p>
                )}

            </div>
            <div className='text-end'>
                <Button className='AddBtn me-5' onClick={handleAddShow}>
                    <i className="fa-solid fa-plus text-white"></i> Add Stop
                </Button>
            </div>
            <Modal show={addshow} onHide={handleAddClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='add-stop-head'>Add Stop</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='w-100'>
                            <div className='d-flex'>
                                <i className="fa-solid fa-file-signature mt-4"></i>
                                <input
                                    type="text"
                                    placeholder='Stop Name'
                                    className='form-control m-3'
                                    onChange={(e) => setAddStopData({ ...addStopData, stop_name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className='d-flex'>
                                <i className="fa-regular fa-clock mt-4"></i>
                                <input
                                    type="time"
                                    step="1"
                                    placeholder='Time Taken'
                                    className='form-control m-3'
                                    onChange={(e) => setAddStopData({ ...addStopData, time_taken: e.target.value })}
                                    required
                                />
                            </div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-indian-rupee-sign mt-4"></i>
                                <input
                                    type="number"
                                    placeholder='Bus Fare'
                                    className='form-control m-3'
                                    onChange={(e) => setAddStopData({ ...addStopData, approx_cost: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='AddBtn' onClick={addStop}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddStop;
