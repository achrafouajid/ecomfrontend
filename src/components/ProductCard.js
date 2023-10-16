import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/watch-1.avif"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multicolored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              activeColor="#ffd700"
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeIcon={<i className="fa fa-star"></i>}
              className="stars"
              name="rating"
              id="rating"
            />
            <p className={'description ${grid=== 12 ? "d-block" : "d-none"}'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate consequuntur eaque consequatur iste
              provident, molestias placeat! Voluptatem alias ex repellendus,
              quod corrupti soluta earum eveniet quae facilis similique odio.
            </p>
            <p className="price">100.00$</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/watch-1.avif"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multicolored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              activeColor="#ffd700"
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeIcon={<i className="fa fa-star"></i>}
              className="stars"
              name="rating"
              id="rating"
            />
            <p className={'description ${grid=== 12 ? "d-block" : "d-none"}'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate consequuntur eaque consequatur iste
              provident, molestias placeat! Voluptatem alias ex repellendus,
              quod corrupti soluta earum eveniet quae facilis similique odio.
            </p>
            <p className="price">100.00$</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
