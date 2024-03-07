import React from 'react'
import './AdminHeader.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';


const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AdminHeader() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
      
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
  return (
    <div>
         <AppBar position="static" className="navbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img className='logo ' src="https://i.postimg.cc/8z0KPDs6/13a15b0b31789ed21fc556c11f01cd04-removebg-preview.png" alt="" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "White",
                textDecoration: "none",
              }}
            >
              TRANSITEASE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="Black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                 <Link to={"/admin-dashbord"} >
                   <Typography textAlign="center text-white"  style={{color:"white"}}>Home</Typography>
                   </Link>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Listing</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Blog</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center"><a h>About</a></Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TRANSITEASE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{  color: "white", display: "block" }}
              >
                <MenuItem>
                 <Link to={"/admin-dashbord"}> <Typography textAlign="center text-white" style={{textDecoration:'none',color:"white"}}>Home</Typography></Link>
                </MenuItem>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{  color: "white", display: "block" }}
              >
                <MenuItem>
                  <Typography textAlign="center">Listing</Typography>
                </MenuItem>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{  color: "white", display: "block" }}
              >
                <MenuItem>
                  <Typography textAlign="center">Blog</Typography>
                </MenuItem>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: "white", display: "block" }}
              >
                <MenuItem>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{  color: "white", display: "block" }}
              >
                <MenuItem>
                  <Typography textAlign="center">Conact</Typography>
                </MenuItem>
              </Button>
            </Box>

            <Box className="me-3" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          
          </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                   <MenuItem>
                  <Typography textAlign="center"><Link to={"/admin-profile"}>Profile</Link></Typography>
                </MenuItem>
                <MenuItem >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>

              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default AdminHeader