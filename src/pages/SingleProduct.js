import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const props = {
    width: 600,
    height: 600,
    zoomWidth: 600,
    img: "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha",
  };
  const copyToClipboard =(text)=>{
    console.log("text",text);
    var textField = document.createElement("textarea");
    textField.innerText =text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy")
    textField.remove();
  }
  return (
    <div>
      <Meta title={"Product Name"} />
      <BreadCrumb title={"Product Name"} />
      <div className="main-product-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>

                <div className="border-bottom py-3">
                  <p className="price">#10,000</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={5}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-reviews">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="">
                    <div className="d-flex align-items-center gap-10 my-2">
                      <h3 className="product-heading">Type :</h3>{" "}
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex align-items-center gap-10 my-2">
                      <h3 className="product-heading">Brand :</h3>{" "}
                      <p className="product-data">Havels</p>
                    </div>
                    <div className="d-flex align-items-center gap-10 my-2">
                      <h3 className="product-heading">Category :</h3>{" "}
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex align-items-center gap-10 my-2">
                      <h3 className="product-heading">Tags :</h3>{" "}
                      <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex align-items-center gap-10 my-2">
                      <h3 className="product-heading">Availability :</h3>{" "}
                      <p className="product-data">In Stcok</p>
                    </div>
                    <div className="d-flex flex-column gap-10 mt-2 mb-3">
                      <h3 className="product-heading">Size :</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-secondary border-1 bg-white text-dark">
                          S
                        </span>
                        <span className="badge border border-secondary border-1 bg-white text-dark">
                          M
                        </span>
                        <span className="badge border border-secondary border-1 bg-white text-dark">
                          L
                        </span>
                        <span className="badge border border-secondary border-1 bg-white text-dark">
                          XL
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-10 mt-2 mb-3">
                      <h3 className="product-heading">Color :</h3> <Color />
                    </div>
                    <div className="d-flex align-items-center flex-row gap-15 mt-2 mb-3">
                      <h3 className="product-heading">Quantity :</h3>
                      <div className="">
                        <input
                          type="number"
                          className="form-control"
                          min={1}
                          max={10}
                          style={{ width: "70px" }}
                          name=""
                          id=""
                        />
                      </div>
                      <div className="d-flex align-items-center gap-30 ms-5">
                        <button type="submit" className="button border-0">
                          Buy It Now
                        </button>
                        <button to="#" className="button signup">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    <div className="d-flex gap-15 align-items-center">
                      <div className="d-flex align-items-center">
                        <a href="">
                          {" "}
                          <TbGitCompare className="fs-5 me-2" />
                          Add to Compare
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <a href="">
                          {" "}
                          <AiOutlineHeart className="fs-5 me-2" />
                          Add to Wishlist
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-10 my-3">
                      <h3 className="product-heading">Shipping & Returns:</h3>
                      <p className="product-data">
                        Free shipping and returns available on all orders!
                        <br /> We ship to your location within 
                        <b> 5-10 business days!</b>
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-10 my-3">
                      <h3 className="product-heading">Product Link:</h3>
                      <a href="javascript:void(0);" onClick={()=>{
                        copyToClipboard("https://www.google.com")
                        alert("Link copied")
                      }}> <BiLink className="fs-5 me-1"/>Copy Product Link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores suscipit consequatur ipsum! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Totam repellendus eius laborum
                  dicta dignissimos, iste molestiae dolore assumenda et
                  incidunt!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
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
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>

                <div id="review" className="review-form py-4">
                  <h4 className="my-3">Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        value={0}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        placeholder="Comments"
                        className="w-100 px-2 py-2"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Damilola</h6>
                      <ReactStars
                        count={5}
                        value={5}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum ipsa tenetur asperiores quisquam possimus suscipit,
                      fugiat provident omnis rerum iste?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12"></div>
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
