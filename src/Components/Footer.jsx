import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="secondary.main" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ashokatripathi.netlify.app/">
        tpw
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return ( 
    <Box sx={{ bgcolor: 'primary.main', p: 3 , mt: 5}} component="footer">  
    <Typography
      variant="h6"
      align="center"
      color="secondary.main"
      component="p"
    >
     Tripathi Printers & Webdesigners # 9811597129
    </Typography>
    <Copyright />
  </Box>
   )
}

export default Footer