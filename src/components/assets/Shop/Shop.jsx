import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Shop.css";
import elephantImage from "../images/elephant.jpg";
import fruitcapImage from "../images/fruitcap.jpg";
import pandaImage from "../images/panda.jpg";

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <div className="shop-container">
        <h2 className="shop-title">Our Shop</h2>

        {/* Shop Cards */}
        <div className="shop-items">
          {/* Elephant Gift Card */}
          <div className="shop-item">
            <div className="shop-image-container">
              <img
                src={elephantImage}
                alt="Elephant Gift Card"
                className="shop-image"
              />
            </div>
            <h3>Elephant Gift Card</h3>
            <div className="shop-item-price">
              <p>$50.00 +</p>
            </div>
          </div>

          {/* Fruit Cap */}
          <div className="shop-item">
            <div className="shop-image-container">
              <img
                src={fruitcapImage}
                alt="Fruit Cap"
                className="shop-image"
              />
            </div>
            <h3>Fruit Cap</h3>
            <div className="shop-item-price">
              <p>$30.00 +</p>
            </div>
          </div>

          {/* Panda Gift Card */}
          <div className="shop-item">
            <div className="shop-image-container">
              <img
                src={pandaImage}
                alt="Panda Gift Card"
                className="shop-image"
              />
            </div>
            <h3>Panda Gift Card</h3>
            <div className="shop-item-price">
              <p>$40.00 +</p>
            </div>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="shop-footer">
          <Link to="/view-products">
            <button className="view-products-btn">View All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
