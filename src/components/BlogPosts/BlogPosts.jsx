import React from "react";
import "./BlogPosts.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import SubSlider from "../SubSlider/SubSlider";
import BlogPost from "../BlogPost/BlogPost";

const BlogPosts = () => {
  return (
    <div className="BlogPosts">
      <div className="header">
        <SectionHeader title={"Our Blog Posts"} />
      </div>
      <div className="content">
        <SubSlider slides={3}>
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
