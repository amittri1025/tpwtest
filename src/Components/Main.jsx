import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Images from './Images'




function Main() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 2,
              pb: 6,
            }}
          >
            <Container maxWidth="lg" sx={{my:10}} >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom

              >World Class <b>Printing</b><br />World Class <b>Websites</b>
              </Typography>
           
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" href = "tel:+91-9811597129">Call Us</Button>
                <Button variant="contained" sx={{backgroundColor:'green'}} href = "https://wa.me/9811597129?text=Hello" startIcon={<WhatsAppIcon />}>Whatsapp Us</Button>
                <Button variant="outlined">About Us</Button>
              </Stack>
              <Typography sx={{my:5}} variant="body1" align="center">
                  Tripathi Printers and Webdesigners, a Delhi based Printing Services Providers. Started in 2000, offers a complete
                  range <br /> of printing solutions and website designing service. Provided our services to over <b>2000+</b> clients across Delhi till date.

              </Typography>
            </Container>
          </Box>  
                <Typography
                  variant="h5"
                  align="center"
                  color="text.primary"
                  paragraph
                >
                  Our Websites
                </Typography>
          {/* Images section */}
          <Images />
        </main>
      </ThemeProvider>
    </>
  );
}

export default Main;
