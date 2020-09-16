import React from "react";
import "./styles/Product.css";
import { useStateValue } from "./../util/StateProvider";
import { toast } from "react-toastify";

let index = 0;

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispath the item into the data layer
    if (index === 0) {
      index++;
      toast.success("You just added the first product to the basket!");
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price"></p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                &#11088;
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket </button>
    </div>
  );
}

export default Product;
