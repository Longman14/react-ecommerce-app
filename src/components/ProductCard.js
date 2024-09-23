import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../assets/images/prodcompare.svg";
import wish from "../assets/images/wish.svg";
import watch from "../assets/images/watch.jpg";
import watch2 from "../assets/images/watch-1.jpg";
import addcart from "../assets/images/add-cart.svg";
import view from "../assets/images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src={watch}
              alt="product image"
            />
            <img
              className="img-fluid"
              src={watch2}
              alt="product image"
            />
          </div>

          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi coloured for students
            </h5>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={5}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium dolorem quasi aliquid nesciunt magni placeat expedita
              modi recusandae, unde quaerat
            </p>
            ,<p className="price">#10,000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
