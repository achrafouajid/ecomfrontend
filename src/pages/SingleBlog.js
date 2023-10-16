import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowNarrowLeft className="fs-4" /> Go Back to Blogs
                page
              </Link>
              <h3 className="title">The Impact of Virtual Reality (VR)</h3>
            </div>
            <img
              src="../images/blog-1.jpg"
              className="img-fluid w-100 my-4"
              alt="blog"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              iste assumenda, eligendi, labore, amet at libero architecto nisi
              iusto impedit voluptas tempore. Ab aspernatur cupiditate quod,
              aliquam est laborum adipisci.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
