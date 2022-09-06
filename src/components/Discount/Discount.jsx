import React from "react";
import "./Discount.scss";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

const Discount = () => {
  return (
    <div className="Discount">
      <Divider sx={{ color: "gray", width: "100%" }} />
      <h3 className="title">Get Discount Info</h3>

      <div className="desc">
        Subscribe to the Outstock mailing list to receive updates on new
        arrivals, special offers and other discount information.
      </div>
      <TextField
        label="Your Email Address..."
        variant="standard"
        fullWidth
        color="secondary"
        sx={{
          "& label": {
            color: "#6c6c6c",
            left: "50%",
            transform: "translate(-50%, 20px)",
          },
          "& label.Mui-focused": {
            display: "none",
          },
          "& legend": {
            display: "none",
          },
        }}
      />
      <div className="btn">SUBSCRIBE</div>
    </div>
  );
};

export default Discount;
