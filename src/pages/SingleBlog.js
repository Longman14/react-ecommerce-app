import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
const SingleBlog = () => {
  return (
    <div>
      <Meta title={"Dynamic Blog Post"} />
      <BreadCrumb title="Dynamic Blog Post" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10"><FaArrowLeftLong className="fs4"/>Go back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img className="img-fluid w-100 my-4" src="/assets/images/blog-1.jpg" alt="blog" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis eius perferendis vitae dicta magnam natus magni ipsum
                  impedit mollitia officiis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
