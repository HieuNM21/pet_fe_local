import { Grid, Typography, Box, Container } from "@mui/material";

const Banner = () => {
  return (
    <Grid
      container
      sx={{
        background: "linear-gradient(to right, red, orange)",
        height: "600px",
        position: "relative",
        top: "80px",
      }}
    >
      <Container>
        <Grid item>
          <Typography variant="h3">
            We Care <br /> <span>Your Pets</span>
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod.
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Banner;
