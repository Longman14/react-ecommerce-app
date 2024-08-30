import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] = useState(true);
  return (
   
    <div>
      <Meta title={"Product Name"} />
      <BreadCrumb title={"Product Name"} />
      <div class="main-product-wrapper">
        <div class="container-xxl">
          <div class="row">
            <div class="col-6"></div>
            <div class="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper">
        <div className="container-xxl">
          <div className="col-12">
            <div className="bg-white">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores suscipit consequatur ipsum! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam repellendus eius laborum
                dicta dignissimos, iste molestiae dolore assumenda et incidunt!
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value={5}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (<div>
                    <a className="text-dark text-decoration-underline" href="">Write a review</a>
                </div>)}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
