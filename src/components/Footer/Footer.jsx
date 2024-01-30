import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import "./Footer.css";

const DsListItemText = styled(ListItemText)`
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  font-family: "Poppins", sans-serif !important;
  color: #7a7a7a;
`;

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8" }}>
      <Box className="footer_top">
        <Container>
          <Grid container spacing={3}>
            <Grid item xl={3} md={3} lg={3}>
              <Box className="footer_widget">
                <Typography variant="h3" className="footer_title">
                  Contact Us
                </Typography>
                <List className="address_line">
                  <ListItem sx={{paddingLeft: "0"}}>
                    <DsListItemText primary="+555 0000 565" />
                  </ListItem>
                  <ListItem sx={{paddingLeft: "0"}}>
                    <ListItemButton component="" href="#" sx={{paddingLeft: "0"}}>
                      <DsListItemText primary="Demomail@gmail.Com" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{paddingLeft: "0"}}>
                    <DsListItemText primary="700, Green Lane, New York, USA" />
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xl={3} md={3} lg={3}>
              <Box className="footer_widget">
                <Typography variant="h3" className="footer_title">
                  Our Services
                </Typography>
                <ul className="links">
                  <li>
                    <Link href="#">Pet Insurance</Link>
                  </li>
                  <li>
                    <Link href="#">Pet surgeries</Link>
                  </li>
                  <li>
                    <Link href="#">Pet Adoption</Link>
                  </li>
                  <li>
                    <Link href="#">Dog Insurance</Link>
                  </li>
                  <li>
                    <Link href="#">Dog Insurance</Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xl={3} md={3} lg={3}>
              <Box className="footer_widget">
                <Typography variant="h3" className="footer_title">
                  Quick Link
                </Typography>
                <ul className="links">
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="#">Login info</Link>
                  </li>
                  <li>
                    <Link href="#">Knowledge Base</Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xl={3} md={3} lg={3}>
              <Box className="footer_widget">
                <div className="footer_logo">
                  <Link href="#">
                    <img src="img/logo.png" alt="" />
                  </Link>
                </div>
                <Typography className="address_text">
                  239 E 5th St, New York NY 10003, USA
                </Typography>
                <div className="socail_links">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="ti-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
