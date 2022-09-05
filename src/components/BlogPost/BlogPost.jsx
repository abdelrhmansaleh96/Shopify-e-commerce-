import React from "react";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import post1 from "../../assets/blogposts/firstpost.webp";
import "./BlogPost.scss";

const BlogPost = () => {
  return (
    <div className="BlogPost">
      <div className="image-container">
        <img className="image" src={post1} alt="post-image" />
      </div>
      <div className="content-container">
        <h3 className="title">Anteposuerit litterarum formas.</h3>
        <div className="meta">
          <span>By</span>
          <span className="author">Mr Admin</span>
          <span>/ November 6,2017</span>
        </div>
        <div className="desc">
          {" "}
          Diga, Koma and Torus are three kitchen utensils designed for Ommo, a
          new design-oriented...
        </div>

        <OutlinedButton text={"Read More"} />
      </div>
    </div>
  );
};

export default BlogPost;
