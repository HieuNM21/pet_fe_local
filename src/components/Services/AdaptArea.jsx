import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import "./css/AdaptArea.css";

const AdaptArea = () => {
  return (
    <Box className="adapt_area">
      <Container>
        <Grid container justifyContent={'space-between'}>
          <Grid item lg={4}>
            <Box className="adapt_help">
              <Box className="section_title">
                <Typography variant="h3">
                  <span>We need your</span> <br />
                  help Adopt Us
                </Typography>
                <Typography variant="h4">
                  Lorem ipsum dolor sit, consectetur adipiscing elit, sed do
                  iusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices.
                </Typography>
                <Button
                  href="contact.html"
                  variant="contained"
                  className="btn-aboutUs"
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box className="adapt_about">
              <Grid container alignItems="center" spacing={4}>
                <Grid item lg={6} md={6}>
                  <Box className="single_adapt text-center">
                    <img src="https://preview.colorlib.com/theme/anipat/img/adapt_icon/1.png.webp" alt="" />
                    <Box className="adapt_content">
                      <Typography variant="h3" className="counter">
                        452
                      </Typography>
                      <Typography variant="h4">Pets Available</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6}>
                  <Box className="single_adapt text-center">
                    <img src="https://preview.colorlib.com/theme/anipat/img/adapt_icon/1.png.webp" alt="" />
                    <Box className="adapt_content">
                      <Typography variant="h3">
                        <span className="counter">52</span>+
                      </Typography>
                      <Typography variant="h4">Pets Available</Typography>
                    </Box>
                  </Box>
                  <Box className="single_adapt text-center">
                    <img src="https://preview.colorlib.com/theme/anipat/img/adapt_icon/2.png.webp" alt="" />
                    <Box className="adapt_content">
                      <Typography variant="h3">
                        <span className="counter">52</span>+
                      </Typography>
                      <Typography variant="h4">Pets Available</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdaptArea;
