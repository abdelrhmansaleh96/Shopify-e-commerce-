import "./BlogPosts.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubSlider from "../SubSlider/SubSlider";
import BlogPost from "../BlogPost/BlogPost";
import React, { useEffect, useState } from "react";

const BlogPosts = () => {
  const [slides, setSlides] = useState(3);
  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth < 768) {
        setSlides(2);
      }
      if (window.innerWidth < 576) {
        setSlides(1);
      }
    }
    handleResize();

    // window.addEventListener("resize", handleResize);
  });
  return (
    <div className="BlogPosts">
      <div className="header">
        <SectionHeader title={"Our Blog Posts"} />
      </div>
      <div className="content">
        <SubSlider slides={slides}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </SubSlider>
      </div>
    </div>
  );
};

export default BlogPosts;
