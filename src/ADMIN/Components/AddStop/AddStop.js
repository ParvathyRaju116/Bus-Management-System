import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { addStopApi, getRouteAndStopeApi } from '../../../SERVICES/AllAPI';
import Swal from 'sweetalert2'
import './AddStop.css'

function AddStop({ id }) {

    const [addshow, setaddShow] = useState(false);
    const [stop, setStop] = useState(null);
    const [photo,setPhoto]=useState(null)
    const token = localStorage.getItem("token");

    const header = {
        Authorization: `Token ${token}`
    };

    const handleAddClose = () => setaddShow(false);
    const handleAddShow = () => setaddShow(true);
    const [addStopData, setAddStopData] = useState({
        stop_number:"",
        place: "",
        link: "",
        image:""
    });
    console.log(addStopData);
    useEffect(() => {
        getRouteAndStop()

    }, []);

    const getRouteAndStop = async () => {
        const response = await getRouteAndStopeApi(id, header)
        setStop(response.data.stops)
    }

    const handleImageChange =async(e)=>{
        const file=e.target.files[0]
        setPhoto(file)
        setAddStopData((PrevDatails)=>({
            ...PrevDatails,
            image:file,
        }))
    }

    const addStop = async () => {

        const formData= new FormData();
        formData.append("image",addStopData.image)
        formData.append("stop_number",addStopData.stop_number)
        formData.append("place",addStopData.place)
        formData.append("link",addStopData.link)


        const reqHeaders = {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data"
          }
        const response = await addStopApi(id, formData, reqHeaders);
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
        console.log(response);
    };

    return (
        <div>
            <div className='w-100 text-center d-flex justify-content-center align-item-center'>
                {stop && stop.length > 0 ? (
                    <Table className="w-100 hover">
                        <thead>
                            <tr>
                                <th>Stop Number</th>
                                <th>Stop Name</th>
                                <th>Link</th>
                                <th>Image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {stop.map((i, index) => (
                                <tr key={index}>
                                    <td>{i.stop_number}</td>
                                    <td style={{ textTransform: 'capitalize' }}>{i.place}</td>
                                    <td>{i.link}</td>
                                    <td><img className='mapImg' src={i.image?`http://127.0.0.1:8000/${i.image}`:"https://i.postimg.cc/D0ygtWYd/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg"} alt="" /></td>
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
                                    type="number"
                                    placeholder='Stop Number'
                                    className='form-control m-3'
                                    onChange={(e) => setAddStopData({ ...addStopData, stop_number: e.target.value })}
                                    required
                                />
                            </div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-file-signature mt-4"></i>
                                <input
                                    type="text"
                                    placeholder='Place'
                                    className='form-control m-3'
                                    onChange={(e) => setAddStopData({ ...addStopData, place: e.target.value })}
                                    required
                                />
                            </div>
                            <div className='d-flex'>
                            <i class="fa-solid fa-link mt-4"></i>                                <input
                                    type="text"
                                    step="1"
                                    placeholder='Link'
                                    className='form-control m-3'
                                    onChange={(e) => setAddStopData({ ...addStopData, link: e.target.value })}
                                    required
                                />
                            </div>
                            <div className='d-flex'>
                            <i class="fa-solid fa-map-location-dot mt-4"></i> <input
                                    type="file"
                                    placeholder='Image'
                                    className='form-control m-3'
                                    onChange={handleImageChange}
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
