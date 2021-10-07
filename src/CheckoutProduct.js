import React from "react";
import "./style/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket..
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <p className="checkoutProduct_price">
          <small>shs</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
