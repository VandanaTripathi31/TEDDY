import React from "react";
import "./ViewProducts.css"; // Create a separate CSS file for ViewProducts

const ViewProducts = () => {
  return (
    <div className="view-products-wrapper">
      <h2>All Products</h2>

      <div className="view-products-items">
        {/* Elephant Gift Card */}
        <div className="view-product-item">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/NOVEMBER/15/WqWNpmWw_f98ac9279ed0495f9b9e60c2a9a573e2.jpg"
            alt="Elephant Gift Card"
            className="view-product-image"
          />
          <h3>Elephant Gift Card</h3>
          <p>$50.00 +</p>
        </div>

        {/* Fruit Cap */}
        <div className="view-product-item">
          <img
            src="https://m.media-amazon.com/images/I/81vnKNAfV6L._AC_UF1000,1000_QL80_.jpg"
            alt="Fruit Cap"
            className="view-product-image"
          />
          <h3>Fruit Cap</h3>
          <p>$30.00 +</p>
        </div>

        {/* Panda Gift Card */}
        <div className="view-product-item">
          <img
            src="https://rukminim2.flixcart.com/image/750/900/xif0q/stuffed-toy/p/h/8/soft-stuff-premium-quality-leaf-unique-panda-for-kids-35-original-imaggpzah3dmdzfx.jpeg?q=20&crop=false"
            alt="Panda Gift Card"
            className="view-product-image"
          />
          <h3>Panda Gift Card</h3>
          <p>$40.00 +</p>
        </div>

        {/* Tiger Gift Card (New Product) */}
        <div className="view-product-item">
          <img
            src="https://www.candyflossstores.com/cdn/shop/files/totally-adorable-tiger-plush-toy-soft-toys-candy-floss-private-limited-529505.jpg?v=1721508522&width=1080"
            alt="Tiger Gift Card"
            className="view-product-image"
          />
          <h3>Tiger Gift Card</h3>
          <p>$45.00 +</p>
        </div>

        {/* Lion Plush Toy */}
        <div className="view-product-item">
          <img
            src="https://m.media-amazon.com/images/I/618L9JxrM2L._AC_UF1000,1000_QL80_.jpg"
            alt="Lion Plush Toy"
            className="view-product-image"
          />
          <h3>Lion Plush Toy</h3>
          <p>$25.00 +</p>
        </div>

        {/* Giraffe Stuffed Animal */}
        <div className="view-product-item">
          <img
            src="https://thumbs.dreamstime.com/b/plush-giraffe-toy-light-orange-blue-background-ai-generated-333699106.jpg"
            alt="Giraffe Stuffed Animal"
            className="view-product-image"
          />
          <h3>Giraffe Stuffed Animal</h3>
          <p>$35.00 +</p>
        </div>

        {/* Zebra Plush Toy */}
        <div className="view-product-item">
          <img
            src="https://m.media-amazon.com/images/I/71pU2ZdggkL.jpg"
            alt="Zebra Plush Toy"
            className="view-product-image"
          />
          <h3>Zebra Plush Toy</h3>
          <p>$30.00 +</p>
        </div>

        {/* Cat Plush Toy */}
        <div className="view-product-item">
          <img
            src="https://www.giftify.in/cdn/shop/files/CatPlushToy2.jpg?v=1691832792&width=1445"
            alt="Cat Plush Toy"
            className="view-product-image"
          />
          <h3>Cat Plush Toy</h3>
          <p>$20.00 +</p>
        </div>

        {/* Dog Plush Toy */}
        <div className="view-product-item">
          <img
            src="https://i5.walmartimages.com/asr/ac277975-c465-41d9-8a8d-347956eee466.57be44efc7cec0ff510abc2bc7cdb94a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
            alt="Dog Plush Toy"
            className="view-product-image"
          />
          <h3>Dog Plush Toy</h3>
          <p>$28.00 +</p>
        </div>

        {/* Unicorn Plush Toy */}
        <div className="view-product-item">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/9/UF/JE/CF/23061533/whatsapp-image-2022-09-16-at-17-08-26.jpeg"
            alt="Unicorn Plush Toy"
            className="view-product-image"
          />
          <h3>Unicorn Plush Toy</h3>
          <p>$38.00 +</p>
        </div>
        <div className="view-product-item">
          <img
            src="https://m.media-amazon.com/images/I/51QszHT8PZL._AC_UF350,350_QL80_.jpg"
            alt="Rabbit Plush Toy"
            className="view-product-image"
          />
          <h3>Rabbit Plush Toy</h3>
          <p>$22.00 +</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
