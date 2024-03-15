import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { getStopApi } from "../../../SERVICES/AllAPI";



function StopList(id) {

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [selectedStop, setSelectedStop] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [stop, setStop] = useState([]);
  const _id = id.id;

  // header
  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`,
  };

  // get stop function
  const getStops = async () => {
    const response = await getStopApi(_id, header);
    setStop(response.data.stops)
    console.log(response.data.stops);
  };

  useEffect(() => {
    getStops();
  }, []);

  const mapView = (selectedStop) => {
    setSelectedStop(selectedStop);
    handleShow();
  };

  return (
    <div>
      <div className="w-100 text-center d-flex justify-content-center align-item-center">
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
                  <td style={{ textTransform: "capitalize" }}>{i.place}</td>
                  <td>{i.link}</td>
                  <td onClick={() => mapView(i)}>
                    <img
                      className="mapImg"
                      src={
                        i.image
                          ? `http://127.0.0.1:8000/${i.image}`
                          : "https://i.postimg.cc/D0ygtWYd/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg"
                      }
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="text-danger">
            <h5>No Stops Added !!</h5>
          </div>
        )}
      </div>

      {selectedStop && (
        <Modal fullscreen={fullscreen} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Map</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <img
              className="mapSinglView w-100"
              src={
                selectedStop.image
                  ? `http://127.0.0.1:8000/${selectedStop.image}`
                  : "https://i.postimg.cc/D0ygtWYd/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg"
              }
              alt=""
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default StopList;
