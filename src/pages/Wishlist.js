import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Favourite Wishlist"} />
      <BreadCrumb title={"Wishlist"} />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="assets/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="assets/images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor Mobile 1GB RAM 32GB ROM 7-INCH with Wi-Fi Tablet
                  </h5>
                  <h6 className="price">#50,000</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="assets/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="assets/images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor Mobile 1GB RAM 32GB ROM 7-INCH with Wi-Fi Tablet
                  </h5>
                  <h6 className="price">#50,000</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="assets/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="assets/images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor Mobile 1GB RAM 32GB ROM 7-INCH with Wi-Fi Tablet
                  </h5>
                  <h6 className="price">#50,000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
