import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">26 Sep, 2023</p>
        <h5 className="title">The Impact of Virtual Reality (VR)</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aspernatur architecto temporibus dignissimos, quaerat, atque
          exercitationem nihil molestiae labore fuga, autem explicabo? Facere
          officiis perferendis ipsam? Illum vel ducimus aliquid?
        </p>
        <Link className="button" to="/blog/:id">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
