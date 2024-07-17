import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
const Home = () => {
  return (
    <div>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="assets/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPhone 15 Pro</h5>
                  <p>From $1200</p>
                  <Link className="button">BUY NOW!</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="assets/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>iPad S31+ Pro</h5>
                    <p>From $1200</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="assets/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="assets/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="assets/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="assets/images/service.png" alt="services" />
                  <div className="">
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders above #200,000</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="assets/images/service-02.png" alt="services" />
                  <div className="">
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="assets/images/service-03.png" alt="services" />
                  <div className="">
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="assets/images/service-04.png" alt="services" />
                  <div className="">
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get the Best Prices on the Market</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="assets/images/service-05.png" alt="services" />
                  <div className="">
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/headphone.jpg" alt="headphone" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/tv.jpg" alt="Tv" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/headphone.jpg" alt="headphone" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="">
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/images/tv.jpg" alt="Tv" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="assets/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
