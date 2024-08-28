import React from "react";

function Home(props) {
  console.log("Home component, cart data:", props.cardData);
  
  return (
    <div>
      <h1>Ecommerce Shopping Website</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70" alt="SAMSUNG Phone" />
        </div>
        <div className="text-wrapper item">
          <span>SAMSUNG</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "SAMSUNG" })
            }
          >
            Add to Cart
          </button>

          <button
            className="remove-btn"
            onClick={() =>
              props.removeFromCartHandler({ name: "SAMSUNG" })
            }
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
