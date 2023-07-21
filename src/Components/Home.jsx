import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer'
import Main from './Main';
import MemeEdit from './MemeEdit'
import Navbar from './Navbar';
import {   BrowserRouter,
  Routes,
  Route,
  Link, } from 'react-router-dom';
// icons




export default function Album() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="memes/*" element={<MemeEdit />} />
        </Routes>
      </BrowserRouter>
      {/* Main app */}
  






      {/* Footer */}
      <Footer />

    </ThemeProvider>
  )
} 