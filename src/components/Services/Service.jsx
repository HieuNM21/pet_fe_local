import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Service = () => {
  return (
    <Container sx={{ paddingTop: "15%" }}>
      <Grid container justifyContent="center">
        <Grid item lg={5} md={6}>
          <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Poppins', sans-serif !important",
                fontWeight: "700",
              }}
            >
              Services for every dog
            </Typography>
            <Typography sx={{ color: "#909092" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item md={3} sx={{border: "1px solid #ffc5c2", borderRadius: "10px", padding: "10px", margin: "10px"}}>
          <Box className="single_service">
            <Box className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
              <Box className="service_icon">
                <img
                  src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_1.png.webp"
                  alt=""
                />
              </Box>
            </Box>
            <Box className="service_content text-center">
              <Typography variant="h4">Pet Boarding</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3} sx={{border: "1px solid #ffc5c2", borderRadius: "10px", padding: "10px", margin: "10px"}}>
          <Box className="single_service active">
            <Box className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
              <Box className="service_icon">
                <img
                  src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_2.png.webp"
                  alt=""
                />
              </Box>
            </Box>
            <Box className="service_content text-center">
              <Typography variant="h4">Healthy Meals</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3} sx={{border: "1px solid #ffc5c2", borderRadius: "10px", padding: "10px", margin: "10px"}}>
          <Box className="single_service">
            <Box className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
              <Box className="service_icon">
                <img
                  src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_3.png.webp"
                  alt=""
                />
              </Box>
            </Box>
            <Box className="service_content text-center">
              <Typography variant="h4">Pet Spa</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Service;
