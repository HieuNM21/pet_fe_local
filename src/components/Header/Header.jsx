import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
import { Link } from "react-router-dom";
import { DsAppBar } from "./styled";
import {
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DsAppBar style={{ backgroundColor: "#ffffff" }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-around">
          {/* Logo */}
          <Grid item xs={8} sm={4}>
            <Typography variant="h6">
              <Link to="/">
                <img
                  src="https://preview.colorlib.com/theme/anipat/img/logo.png.webp"
                  alt="Logo"
                  style={{ maxWidth: "100%", cursor: "pointer" }}
                />
              </Link>
            </Typography>
          </Grid>
          {/* Navigation Buttons */}
          <Hidden smDown>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  color: "#000",
                  "& > button": {
                    fontSize: "16px",
                    fontFamily: "'Poppins', sans-serif !important",
                  },
                }}
              >
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit" onClick={handleClick}>
                  Blog
                  <ArrowDropDownIcon />
                </Button>
                <Menu
                  id="blog-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "blog-button",
                  }}
                  //   TransitionComponent={Grow}
                >
                  <MenuItem onClick={handleClose}>Blog 1</MenuItem>
                  <MenuItem onClick={handleClose}>Blog 2</MenuItem>
                  <MenuItem onClick={handleClose}>Blog 3</MenuItem>
                </Menu>
                <Button color="inherit">Pages</Button>
                <Button color="inherit">Services</Button>
                <Button color="inherit">Contact</Button>
              </Box>
            </Grid>
          </Hidden>
          {/* Menu Icon for Small Screens */}
          <Hidden smUp>
            <Grid item xs={2}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </DsAppBar>
  );
};

export default Header;
