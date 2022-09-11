import React, { useState } from "react";
import "./Products.scss";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import { Container, Divider } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MainCard from "../../components/MainCard/MainCard";
import { Pagination } from "@mui/material";
import products from "../../products";

function SelectVariants() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const p = {
    id: 1,
    name: "Sacrificial Chair Design",
    price: "$132",
    discount: "$142",
    // image1: product11,
    // image2: product12,
  };

  return (
    <div>
      {p?.name}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-filled-label">
          Deafult Sorting
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          sx={{ color: "secondary" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Best-Selling</MenuItem>
          <MenuItem value={20}>A-Z</MenuItem>
          <MenuItem value={30}>Price</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const Products = () => {
  const [sortingActive, setSortingActive] = useState("grid");

  return (
    <div className="Products">
      <MainBreadcrumb />
      <Container maxWidth={"lg"} sx={{ marginTop: "36px" }}>
        <div className="icon-container">
          <div className="display-view">
            <div
              className="icon"
              onClick={() => {
                setSortingActive("grid");
              }}
            >
              <AppsIcon
                fontSize="inherit"
                sx={{
                  color: sortingActive === "grid" ? "black" : "gray",
                }}
              />
            </div>
            <div
              className="icon"
              onClick={() => {
                setSortingActive("list");
              }}
            >
              <FormatListBulletedIcon
                fontSize="inherit"
                sx={{
                  color: sortingActive === "grid" ? "gray" : "black",
                }}
              />
            </div>
          </div>
          <SelectVariants />
        </div>
        <Grid container spacing={2}>
          {products.map((product, index) => {
            return (
              <Grid item xs={6} sm={4} lg={3} key={index}>
                <MainCard
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                  image1={product.image1}
                  image2={product.image2}
                  id={product.id}
                />
              </Grid>
            );
          })}
          {/* <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <MainCard />
          </Grid> */}
        </Grid>
        <Divider />
        <div className="pagination">
          <Pagination
            sx={{ scale: "1.3" }}
            variant="outlined"
            count={2}
            shape="rounded"
          />
          <div className="products-displayed">Showing 12 results</div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
