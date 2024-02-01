import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Avatar, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./css/TestimonialArea.css";

const TestimonialArea = () => {
  const testimonials = [
    {
      name: "Jhon Walker",
      title: "Head of web design",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci.",
      img: "https://preview.colorlib.com/theme/anipat/img/testmonial/1.png.webp",
    },
    {
      name: "Nguyen Minh Hieu",
      title: "Head of web design",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci.",
      img: "https://preview.colorlib.com/theme/anipat/img/testmonial/1.png.webp",
    },
    {
      name: "Dang Huy",
      title: "Head of web design",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci.",
      img: "https://preview.colorlib.com/theme/anipat/img/testmonial/1.png.webp",
    },
  ];

  return (
    <Box className="testmonial_area">
      <Container>
        <Grid container justifyContent="center">
          <Grid item lg={10}>
            <Carousel>
              {testimonials.map((testimonial, index) => (
                <Box key={index} className="single_testmonial">
                  <Avatar
                    src={testimonial.img}
                    alt=""
                    sx={{ marginRight: "25px", width: "130px", height: "auto" }}
                  />
                  <Box className="test_content">
                    <Typography variant="h3">{testimonial.name}</Typography>
                    <Typography variant="h4">{testimonial.title}</Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "18px",
                        color: "#66666f",
                        lineHeight: "35px",
                        textAlign: "justify",
                      }}
                    >
                      {testimonial.testimonial}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialArea;
