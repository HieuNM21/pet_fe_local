import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./css/Service.css";

const Service = () => {
  return (
    <Container sx={{ paddingTop: "15%", paddingBottom: "100px" }}>
      <Grid container justifyContent="center">
        <Grid item lg={7} md={10}>
          <Box className="section_title">
            <Typography variant="h3">Services for every dog</Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={3}>
        <Grid className="single_service" item md={3}>
          <Box className="service_thumb">
            <Box className="service_icon">
              <img
                src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_1.png.webp"
                alt=""
              />
            </Box>
          </Box>
          <Box className="service_content">
            <Typography variant="h3">Pet Boarding</Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
          </Box>
        </Grid>
        <Grid className="single_service" item md={3}>
          <Box className="service_thumb">
            <Box className="service_icon">
              <img
                src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_2.png.webp"
                alt=""
              />
            </Box>
          </Box>
          <Box className="service_content">
            <Typography variant="h3">Healthy Meals</Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
          </Box>
        </Grid>
        <Grid className="single_service" item md={3}>
          <Box className="service_thumb">
            <Box className="service_icon">
              <img
                src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_3.png.webp"
                alt=""
              />
            </Box>
          </Box>
          <Box className="service_content">
            <Typography variant="h3">Pet Spa</Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Service;
