import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Divider } from "@mui/material";

import "./ProductTaps.scss";

export default function ProductTaps() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="ProductTaps">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          ".MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
        }}
      >
        <Tab label="Description" />
        <Tab
          label="Shipping & Return
"
        />
        <Tab label="Reviews" />
      </Tabs>
      <Container maxWidth="lg">
        {value === 0 && (
          <div className="desc">
            Don’t ever play yourself. The weather is amazing, walk with me
            through the pathway of more success. Take this journey with me,
            Lion! The other day the grass was brown, now it’s green because I
            ain’t give up. Never surrender
          </div>
        )}
        {value === 1 && (
          <div className="return">
            <span className="title">Returns Policy</span> You may return most
            new, unopened items within 30 days of delivery for a full refund.
            We'll also pay the return shipping costs if the return is a result
            of our error (you received an incorrect or defective item, etc.).
            You should expect to receive your refund within four weeks of giving
            your package to the return shipper, however, in many cases you will
            receive a refund more quickly. This time period includes the transit
            time for us to receive your return from the shipper (5 to 10
            business days), the time it takes us to process your return once we
            receive it (3 to 5 business days), and the time it takes your bank
            to process our refund request (5 to 10 business days). If you need
            to return an item, simply login to your account, view the order
            using the 'Complete Orders' link under the My Account menu and click
            the Return Item(s) button. We'll notify you via e-mail of your
            refund once we've received and processed the returned item.{" "}
            <span className="title">Shipping</span>We can ship to virtually any
            address in the world. Note that there are restrictions on some
            products, and some products cannot be shipped to international
            destinations. When you place an order, we will estimate shipping and
            delivery dates for you based on the availability of your items and
            the shipping options you choose. Depending on the shipping provider
            you choose, shipping date estimates may appear on the shipping
            quotes page. Please also note that the shipping rates for many items
            we sell are weight-based. The weight of any such item can be found
            on its detail page. To reflect the policies of the shipping
            companies we use, all weights will be rounded up to the next full
            pound.
          </div>
        )}
        {value === 2 && (
          <div className="reviews-container">
            <div className="review">
              <div className="stars">
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
              </div>
              <div className="header">Nice</div>
              <div className="date">naushad on Sep 02, 2020</div>
              <div className="desc">Very good</div>
              <div className="report">Report as Inappropriate</div>
              <Divider sx={{ margin: "30px 0" }} />
            </div>
            <div className="review">
              <div className="stars">
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
              </div>
              <div className="header">Nice</div>
              <div className="date">naushad on Sep 02, 2020</div>
              <div className="desc">Very good</div>
              <div className="report">Report as Inappropriate</div>
              <Divider sx={{ margin: "30px 0" }} />
            </div>
            <div className="review">
              <div className="stars">
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
              </div>
              <div className="header">Nice</div>
              <div className="date">naushad on Sep 02, 2020</div>
              <div className="desc">Very good</div>
              <div className="report">Report as Inappropriate</div>
              <Divider sx={{ margin: "30px 0" }} />
            </div>
            <div className="review">
              <div className="stars">
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
                <StarIcon sx={{ color: "#bd8448" }} fontSize="inherit" />
              </div>
              <div className="header">Nice</div>
              <div className="date">naushad on Sep 02, 2020</div>
              <div className="desc">Very good</div>
              <div className="report">Report as Inappropriate</div>
              <Divider sx={{ margin: "30px 0" }} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
