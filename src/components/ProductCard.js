import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
          <img src="assets/images/wish.svg" alt="wishlist"/>
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="assets/images/watch.jpg" alt="product image" />
          <img className="img-fluid" src="assets/images/watch-1.jpg" alt="product image" />
        </div>
        
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi coloured for students
          </h5>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value="4"
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          ,<p className="price">#10,000</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link><img src="assets/images/prodcompare.svg" alt="compare"/></Link>
              <Link><img src="assets/images/view.svg" alt="view"/></Link>
              <Link><img src="assets/images/add-cart.svg" alt="add cart"/></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
