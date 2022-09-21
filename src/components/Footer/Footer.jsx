import React from "react";
import "./Footer.scss";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import logo from "../../assets/logo_color.svg";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import { Divider } from "@mui/material";
const Footer = () => {
  return (
    <div className="Footer">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "100px 0 0 0",
          //   padding: "100px 0 60px",
          //   ".css-1p9jip5-MuiContainer-root": {
          //     paddingBottom: "0px",
          //   },
        }}
      >
        <Grid
          container
          gap={2}
          sx={{
            justifyContent: { md: "space-around", xs: "center" },
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: { md: "flex-start", xs: "center" },
            }}
          >
            <div className="image-container">
              {" "}
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="desc">
              Outstock is a premium Templates theme with advanced admin module.
              It’s extremely customizable, easy to use and fully responsive and
              retina ready.
            </div>
            <div className="info">
              <LocationOnOutlinedIcon sx={{ marginRight: "10px" }} />
              Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
            </div>
            <div className="info">
              <PhoneForwardedOutlinedIcon sx={{ marginRight: "10px" }} />
              Phone Number: (800) 123 456 789
            </div>
            <div className="info">
              <MarkAsUnreadOutlinedIcon sx={{ marginRight: "10px" }} />
              Email: Contact@erentheme.com
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { md: "flex-start", xs: "center" },
            }}
          >
            <div className="title">INFORMATION</div>
            <div className="content">
              <div className="list-item">Carriers</div>
              <div className="list-item">Search</div>
              <div className="list-item">Delivery Information </div>
              <div className="list-item">Privacy Policy</div>
              <div className="list-item">"Terms & conditions"</div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { md: "flex-start", xs: "center" },
            }}
          >
            <div className="title">OUR SERVICES</div>
            <div className="content">
              <div className="list-item">Shipping Policy</div>
              <div className="list-item">Help & Contact Us</div>
              <div className="list-item">Returns & Refunds </div>
              <div className="list-item">Online Store</div>
              <div className="list-item">"Terms & conditions"</div>
            </div>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "gray" }} />
        <div className="copy-rights">
          <div className="desc">
            Copyright © 2022 <span>Outstock</span> all rights reserved.
          </div>
          <div className="icons">
            <FacebookIcon
              sx={{
                margin: "0 10px",
                "&:hover": {
                  color: "#bd8448",
                  cursor: "pointer",
                },
              }}
            />
            <TwitterIcon
              sx={{
                margin: "0 10px",
                "&:hover": {
                  color: "#bd8448",
                  cursor: "pointer",
                },
              }}
            />
            <InstagramIcon
              sx={{
                margin: "0 10px",
                "&:hover": {
                  color: "#bd8448",
                  cursor: "pointer",
                },
              }}
            />
            <PinterestIcon
              sx={{
                margin: "0 10px",
                "&:hover": {
                  color: "#bd8448",
                  cursor: "pointer",
                },
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
