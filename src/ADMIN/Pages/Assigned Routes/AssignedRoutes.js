import React, { useEffect, useState } from "react";
import AdminHeader from "../../Components/Admin-Header/AdminHeader";
import "./AssignedRoutes.css";
import { Button, Col, Row } from "react-bootstrap";
import { getAssignedRouteApi, getRouteApi } from "../../../SERVICES/AllAPI";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function AssignedRoutes() {
  const [assignedRoutes, setAssignedRoutes] = useState([]);
  const [assignedList, setAssignedList] = useState(null);
  const [routeList,setRouteList]=useState([])
  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`,
  };

  const listRoutes = async () => {
    const response = await getRouteApi(header);
    setRouteList(response.data);
    console.log(response.data);
  };

  const getassignedRoutes = async () => {
    const response = await getAssignedRouteApi(header);
    setAssignedRoutes(response.data);

    console.log(response);
  };

  const handleGetId =async (id)=>{
    try {
      const response = await axios.get(`http://127.0.0.1:8000/adminapi/busroutes/${id}/`,{
        headers:{
          Authorization:`Token ${token}`
        }
      })
      if((response?.data?.route?.id == id )){
        setAssignedList(response.data)
        console.log(assignedList);
      }
      else{
      return (<>NO Routes</>)
      }
    } catch (error) {
      
    }
  }
  console.log(assignedList);



  useEffect(() => {
    listRoutes()
    getassignedRoutes();
  }, []);

  return (
    <div>
      <AdminHeader></AdminHeader>
      <div className="mt-5 ms-5">
        <Link to={"/admin-dashbord"}>
          <Button className="back-home-button">
            <i class="fa-solid fa-angles-left"></i> Back To Home
          </Button>
        </Link>
      </div>

      <div className="assignedRoutesBody  mt-5">
        <h1 className="assigneRouteHead">Assigned Routes</h1>
      </div>
      <div className="ms-5 me-5">
        <Row>
          <Col lg={2}>
            <div className="text-center divWithGradientBorder">
              <h2 className="mt-3">All Routes</h2>
            </div>
            {routeList.length > 0 ? (
              routeList.map((i, index) => (
                <div
                  className=" text-center mt-3 ps-3"
                  key={""}
                
                >
                  <p className="fs-5 " onClick={()=>handleGetId(i.id)}>
                    <b >{i.name}</b>
                  </p>
                  <hr />
                </div>
              ))
            ) : (
              <></>
            )}
          </Col>
          <Col
            lg={10}
            className="mt-5 ps-5 justify-content-center align-item-center d-flex"
          >
            <Row>
              {assignedList !=null ?
                <Col lg={""} >
                    <Card sx={{ maxWidth: 300 }} className="mb-4">
                      <CardActionArea>
                        <CardMedia
                          className=""
                          component="img"
                          height="300"
                          image={`http://127.0.0.1:8000`+assignedList?.bus?.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="p" component="div">
                            Bus Name : <b>{assignedList?.bus?.name}</b>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <p>Bus Owner : {assignedList?.busowner?.username}</p>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>{" "}
                  </Col> 
               : <></>
                
                  
                

              }
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AssignedRoutes;
