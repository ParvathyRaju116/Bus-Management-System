import React from 'react'
import './BusOwnerAside.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';


function BusOwnerAside() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className='sticky-top' >
      <CDBSidebar className='asideBody ' breakpoint={768}>
        <CDBSidebarHeader className='siteName' prefix={<i className="fa fa-bars" />}>
          <img className='logo ' src="https://i.postimg.cc/8z0KPDs6/13a15b0b31789ed21fc556c11f01cd04-removebg-preview.png" alt="" />

          TRANSITEASE</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link to={'/bus-owner-home-page'}><CDBSidebarMenuItem icon="bar-chart">Dashboard</CDBSidebarMenuItem></Link>
            <Link to={'/bus-owner-routes'}><CDBSidebarMenuItem icon="road">Routes</CDBSidebarMenuItem></Link>
            <Link to={'/bus-owner-profile'}><CDBSidebarMenuItem icon="user" iconType="solid"> Profile</CDBSidebarMenuItem></Link>
            <CDBSidebarMenuItem onClick={handleLogout} icon="arrow-right-from-bracket">Logout</CDBSidebarMenuItem>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <Link to={"/bus-owner-profile"}>
            <div
              className="sidebar-btn-wrapper ms-3"
              style={{ padding: '20px 5px', color: "white" }}>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Admin" src="/static/images/avatar/1.jpg" /> <h5 className='mt-2'>Bus Owner</h5>
              </Stack>
            </div>
          </Link>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default BusOwnerAside