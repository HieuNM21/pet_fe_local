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
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <Container>
      <Box className="content-details">
        <Grid container>
          <Grid item xl={4} lg={4} sx={{ backgroundColor: "#FF0000" }}>
            <Box>
              {/* <img
                className="img_zoom"
                src="https://ledthanhdat.vn/html/stelina/assets/images/details-item-1.jpg"
                alt="img"
              /> */}
            </Box>
          </Grid>
          <Grid item xl={8} lg={8} className="details-infor">
            <Typography variant="h1" className="product-title">
              Glorious Eau
            </Typography>
            {/* <Box className="stars-rating">
              <Box className="star-rating">
                <span className="star-5"></span>
              </Box>
              <Typography variant="body2" className="count-star">
                (7)
              </Typography>
            </Box> */}
            <Typography variant="body2" className="availability">
              Availability:
              <Link href="#"> In Stock</Link>
            </Typography>
            <Typography variant="body1" className="price">
              <span>$45</span>
            </Typography>
            <Box className="product-details-description">
              <Typography variant="body2">
                Thức ăn cho chó Ganador Adult Salmon & Rice là thực phẩm dành
                cho chó trưởng thành với công thức chế biến được nghiên cứu bởi
                các chuyên gia.
              </Typography>
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
