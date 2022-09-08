import React from "react";
import "./Blog.scss";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";
import { Container, Divider, Grid } from "@mui/material";
import BlogPost from "../../components/BlogPost/BlogPost";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const Blog = () => {
  return (
    <div className="Blog">
      <MainBreadcrumb />
      <Container maxWidth="lg" sx={{ marginTop: "24px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4.5}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </Grid>
          <Grid item xs={12} sm={6} md={4.5}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </Grid>
          <Grid
            item
            xs={0}
            sm={0}
            md={3}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <div className="container">
              <div className="search">
                <FormControl sx={{ m: 0, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-search">
                    Search
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>

              <div className="articles">
                <div className="header">Recent Articles</div>
                <div className="article">
                  <div className="desc">Anteposuerit litterarum formas.</div>
                  <div className="date">November 16, 2017</div>
                  <Divider />
                </div>
                <div className="article">
                  <div className="desc">Anteposuerit litterarum formas.</div>
                  <div className="date">November 16, 2017</div>
                  <Divider />
                </div>
                <div className="article">
                  <div className="desc">Anteposuerit litterarum formas.</div>
                  <div className="date">November 16, 2017</div>
                  <Divider />
                </div>
                <div className="article">
                  <div className="desc">Anteposuerit litterarum formas.</div>
                  <div className="date">November 16, 2017</div>
                  <Divider />
                </div>
                <div className="article">
                  <div className="desc">Anteposuerit litterarum formas.</div>
                  <div className="date">November 16, 2017</div>
                  <Divider />
                </div>
                <div className="article">
                  <div className="desc">Anteposuerit litterarum formas.</div>
                  <div className="date">November 16, 2017</div>
                  <Divider />
                </div>
              </div>
              <div className="articles">
                <div className="header">Catagories</div>
                <div className="item">Furniture</div>
                <div className="item">Fashion</div>
                <div className="item">Education</div>
                <div className="item">Travel</div>
                <div className="item">Construction</div>
                <div className="item">Tech</div>
              </div>
              <div className="image-container">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
                <img
                  className="image"
                  src="https://cdn.shopify.com/s/files/1/1573/5553/files/8_360x.png?v=1512187734"
                  alt="small  "
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
