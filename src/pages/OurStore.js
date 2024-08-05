import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  const [ grid, setGrid ] = useState(4);
  
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div className="">
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <h4 className="currency">
                      <strike>N</strike>
                    </h4>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <h4 className="currency">
                      <strike>N</strike>
                    </h4>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div className="">
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="color-1"
                      />
                      <label htmlFor="color-1" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="color-2"
                      />
                      <label htmlFor="color-2" className="form-check-label">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge text-secondary bg-light rounded-3 px-3 py-2">
                      Headphones
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 px-3 py-2">
                      Laptop
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 px-3 py-2">
                      Mobile
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 px-3 py-2">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div class="w-50">
                      <img
                        src="assets/images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div class="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        value={5}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="fw-bold fs-6">#20,000</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div class="w-50">
                      <img
                        src="assets/images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div class="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        value={5}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="fw-bold fs-6">#20,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p class="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        className="d-block img-fluid"
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="assets/images/gr4.svg"
                        alt="grid"
                      />
                      <img
                        className="d-block img-fluid"
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="assets/images/gr3.svg"
                        alt="grid"
                      />
                      <img
                        className="d-block img-fluid"
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="assets/images/gr2.svg"
                        alt="grid"
                      />
                      <img
                        className="d-block img-fluid"
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="assets/images/gr.svg"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10">
                <ProductCard grid={grid}/>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
