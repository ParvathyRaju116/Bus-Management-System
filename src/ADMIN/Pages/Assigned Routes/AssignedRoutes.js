import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/Admin-Header/AdminHeader'
import './AssignedRoutes.css'
import { Col,  Row } from 'react-bootstrap'
import { getAssignedRouteApi, getRouteApi } from '../../../SERVICES/AllAPI'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




function AssignedRoutes() {

  const [routeList, setRouteList] = useState([]);
const [assignedRoutes,setAssignedRoutes]=useState([])
  const token = localStorage.getItem("token");
  const header = {
    Authorization: `Token ${token}`
  };

  const listRoutes = async () => {
    const response = await getRouteApi(header);
    setRouteList(response.data);
    console.log(routeList);
  };


  const getassignedRoutes=async()=>{
    const response = await getAssignedRouteApi(header)
    setAssignedRoutes(response.data);
    console.log(assignedRoutes);
  }

  useEffect(() => {
    listRoutes();
    getassignedRoutes()
  }, []);


  return (
    <div>
      <AdminHeader></AdminHeader>

      <div className='assignedRoutesBody mt-5'>
        <h1 className='assigneRouteHead'>Assigned Routes</h1>

      </div>
      <div className='ms-5 me-5'>
        <Row>
          <Col lg={2}>
           <div className='text-center'> <h2 className='mt-3 mb-5'>All Routes</h2></div>
         { routeList.length>0?routeList.map((i,index)=>(
         <div className='divWithGradientBorder mt-3 ps-3'> <p className='fs-5'><b>Kakkand TO Aluva</b></p></div>
         )):<></>}

          </Col>
          <Col lg={10} className='mt-5 ps-5 justify-content-center align-item-center d-flex'>
       <Row>
          
             {assignedRoutes.length>0?assignedRoutes.map((i,index)=>( 
              <Col lg={""}>
             <Card sx={{ maxWidth: 300 }} className='mb-4'>
          <CardActionArea>
            <CardMedia
            className=''
              component="img"
              height="300"
              image="https://i.postimg.cc/C5BvddC1/13a15b0b31789ed21fc556c11f01cd04.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
               Bus Name : <b>{i.bus.name}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>Bus Owner : {i.busowner.name}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> </Col>)):<></>}


        
         
       </Row>
          </Col>
        </Row>


      </div>

    </div>
  )
}

export default AssignedRoutes