import { Grid, Typography, Container, Button } from "@mui/material";

const Banner = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: 'url("https://preview.colorlib.com/theme/anipat/img/banner/banner.png.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "round",
        height: "600px",
        position: "relative",
        top: "80px",
      }}
    >
      <Container
        sx={{ display: "flex", flexWrap: "wrap", alignContent: "center" }}
      >
        <Grid item xs={12} md={4} sx={{ color: "#fff" }}>
          <Typography
            variant="h3"
            sx={{ lineHeight: "1.3", fontWeight: "lighter" }}
          >
            We Care <br /> <span style={{ fontWeight: "800" }}>Your Pets</span>
          </Typography>
          <Typography sx={{ marginTop: "20px", marginBottom: "40px" }}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#ff3500",
              borderRadius: "30px",
              padding: "17px 50px",
              textTransform: "none",
              fontSize: "1rem"
            }}
          >
            Contact us
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Banner;
