import React from "react";
import "./ContactUs.scss";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { Container, Divider, Grid, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Map from "../../components/Map/Map";
import MainBreadcrumb from "../../components/MainBreadcrumb/MainBreadcrumb";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <MainBreadcrumb />
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ margin: "42px 0" }}>
          <Grid item xs={12} sm={6}>
            <h3 className="title">Find Us here.</h3>
            <div className="items">
              <div className="item">
                <div className="icons">
                  <LocationOnIcon
                    sx={{
                      border: "1px solid #e1e1e1",
                      color: "#6c6c6c",
                      padding: "14px",
                    }}
                  />
                </div>
                <div className="details">
                  <div className="header">Address:</div>
                  <div className="desc">
                    1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <PhoneCallbackIcon
                    sx={{
                      border: "1px solid #e1e1e1",
                      color: "#6c6c6c",
                      padding: "14px",
                    }}
                  />
                </div>
                <div className="details">
                  <div className="header">Phone Number:</div>
                  <div className="desc">
                    (800) 123 456 789, (800) 987 654 321{" "}
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <EmailIcon
                    sx={{
                      border: "1px solid #e1e1e1",
                      color: "#6c6c6c",
                      padding: "14px",
                    }}
                  />
                </div>
                <div className="details">
                  <div className="header">Email:</div>
                  <div className="desc">Contact@erentheme.com</div>
                </div>
              </div>
              <p className="content">
                Outstock is a premium Templates theme with advanced admin
                module. It’s extremely customizable, easy to use and fully
                responsive and retina ready. Vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3 className="title">Contact Us.</h3>
            <div className="items">
              <div className="item">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  // sx={{
                  //   ":focus": {
                  //     boxShadow: "0px 0px 7px 8px rgba(189,132,72,0.63)",
                  //   },
                  // }}
                />
              </div>
              <div className="item">
                <TextareaAutosize
                  id="outlined-multiline-static"
                  aria-label="Message"
                  minRows={7}
                  placeholder="Please Write Your Message."
                  style={{ width: "100%" }}
                />
              </div>
              <div className="item">
                <div className="btn">SEND MESSAGE</div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Divider />
      </Container>

      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default ContactUs;
