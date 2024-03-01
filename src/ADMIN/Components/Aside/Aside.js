import React from 'react'
import './Aside.css'
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

function Aside() {
    
  return (
    <div  >
        <CDBSidebar className='asideBody'>
        <CDBSidebarHeader className='siteName' prefix={<i className="fa fa-bars" />}>
        <img className='logo ' src="https://i.postimg.cc/8z0KPDs6/13a15b0b31789ed21fc556c11f01cd04-removebg-preview.png" alt="" />

            TRANSITEASE</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper ms-3"
            style={{padding: '20px 5px'}}
          >
            <Stack direction="row" spacing={2}>
      <Avatar alt="Admin" src="/static/images/avatar/1.jpg" /> <h5 className='mt-2'>Admin</h5>
    </Stack>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default Aside