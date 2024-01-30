import React from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import "./css/PetCare.css";

const PetCare = () => {
  return (
    <Box className="pet_care_area">
      <Container>
        <Grid container alignItems="center">
          <Grid item lg={5} md={5}>
            <Box className="pet_thumb">
              <img
                src="https://preview.colorlib.com/theme/anipat/img/about/pet_care.png.webp"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item lg={6} lgOffset={1} mdOffset={1} md={6}>
            <Box className="pet_info">
              <Typography variant="h3">
                <span>We care your pet </span> <br /> As you care
              </Typography>
              <Typography variant="h4">
                Lorem ipsum dolor sit, consectetur adipiscing elit, sed do{" "}
                <br /> iusmod tempor incididunt ut labore et dolore magna
                aliqua. <br /> Quis ipsum suspendisse ultrices gravida. Risus
                commodo <br />
                viverra maecenas accumsan.
              </Typography>
              <Button
                href="about.html"
                variant="contained"
                className="btn-aboutUs"
              >
                About Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PetCare;
