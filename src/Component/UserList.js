import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
// import MenuIcon from '@mui/icons-material/Menu';

const UserList = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          
           
          <Typography variant="h6" flexGrow={1} >
            News
          </Typography>
          <Button color="inherit" startIcon={<LogoutIcon/>}>Login</Button>
          <Button color="inherit" endIcon={<LoginIcon/>}>Logout</Button>
        </Toolbar>
      </AppBar>
    
    </>
  )
}

export default UserList