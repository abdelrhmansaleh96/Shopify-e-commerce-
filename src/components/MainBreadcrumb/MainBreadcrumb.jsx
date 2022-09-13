import React from "react";
import "./MainBreadcrumb.scss";
import bg from "../../assets/main.webp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const MainBreadcrumb = (props) => {
  const { location } = props;
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="MainBreadcrumb">
      <div className="image-container">
        <img className="image" src={bg} alt="bg" />
      </div>
      <div className="breadcrumb" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            sx={{
              color: "black",
              textDecoration: "none",
              textTransform: "uppercase",
              cursor: "pointer",
              "&:hover": {
                color: "#bd8448",
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <Link
                key={name + index}
                onClick={() => {
                  navigate(routeTo);
                }}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </Link>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default MainBreadcrumb;
