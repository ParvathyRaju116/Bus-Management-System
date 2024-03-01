import React from 'react'
import './Verification.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function Verification() {
  return (
    <div className='p-4'>
      <h1>Request Approval</h1> <br /> <br />
       <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      /> <Link to={'/admin-request'}><h6>  Remy Sharp</h6></Link>
    </Stack>
    <hr />

    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      /> <h6>  Remy Sharp</h6>
    </Stack>
    <hr />

    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      /> <h6>  Remy Sharp</h6>
    </Stack>
    <hr />

    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      /> <h6>  Remy Sharp</h6>
    </Stack>
    <hr />
    </div>
  )
}

export default Verification