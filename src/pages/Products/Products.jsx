import React, { useState } from "react";
import "./Products.scss";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import {
  Container,
  Divider,
  Grid,
  Pagination,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridView from "./GridView";
import ListView from "./ListView";
import { useLocation } from "react-router-dom";
import { useMainContext } from "../../context/main_context";

function SelectVariants() {
  const { sortProducts } = useMainContext();

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);

    sortProducts(event.target.value);
  };

  return (
    <div>
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
          <MenuItem value={"low"}>low to high</MenuItem>
          <MenuItem value={"high"}>high to low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const Products = () => {
  const [sortingActive, setSortingActive] = useState("grid");
  const location = useLocation();
  return (
    <div className="Products">
      <MainBreadcrumb location={location} />
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
          {sortingActive === "grid" ? <GridView /> : <ListView />}
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
