import React from "react";
import {
  Container,
  Typography,
  Link,
  Button,
  List,
  ListItem,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const ProductDetail = () => {
  return (
    <Container>
      <Box className="content-details">
        <Grid container>
          <Grid item xl={4} lg={4} sx={{backgroundColor: "#FF0000"}}>
            <Box>
              {/* <img
                className="img_zoom"
                src="https://ledthanhdat.vn/html/stelina/assets/images/details-item-1.jpg"
                alt="img"
              /> */}
            </Box>
          </Grid>
          <Grid item xl={7} lg={7} className="details-infor">
            <Typography variant="h1" className="product-title">
              Glorious Eau
            </Typography>
            <Box className="stars-rating">
              <Box className="star-rating">
                <span className="star-5"></span>
              </Box>
              <Typography variant="body2" className="count-star">
                (7)
              </Typography>
            </Box>
            <Typography variant="body2" className="availability">
              availability:
              <Link href="#">in Stock</Link>
            </Typography>
            <Typography variant="body1" className="price">
              <span>$45</span>
            </Typography>
            <Box className="product-details-description">
              <Typography variant="body2">
                <List>
                  <ListItem>Vestibulum tortor quam</ListItem>
                  <ListItem>Imported</ListItem>
                  <ListItem>Art.No. 06-7680</ListItem>
                </List>
              </Typography>
            </Box>
            <Box className="variations">
              <Typography variant="body2" className="size-text text-attribute">
                Size:
              </Typography>
              <FormControl variant="standard" className="list-item">
                <Select labelId="size-label" id="size" value="m" label="Size">
                  <MenuItem value="xs">XS</MenuItem>
                  <MenuItem value="s">S</MenuItem>
                  <MenuItem value="m">M</MenuItem>
                  <MenuItem value="l">L</MenuItem>
                  <MenuItem value="xl">XL</MenuItem>
                  <MenuItem value="xxl">XXL</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="quantity-add-to-cart">
              <Box className="control">
                <IconButton className="qtyminus quantity-minus" href="#">
                  -
                </IconButton>
                <input
                  type="text"
                  data-step="1"
                  data-min="0"
                  value="1"
                  title="Qty"
                  className="input-quantity"
                  size="4"
                />
                <IconButton className="qtyplus quantity-plus" href="#">
                  +
                </IconButton>
              </Box>
              <Button
                className="single_add_to_cart_button"
                variant="contained"
                color="primary"
              >
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetail;
