import React, { useState } from "react";

import check from "../assets/images/ic-check.svg";
import shopping from "../assets/images/ic-addcart.svg";

function CartCounter() {
  // for the increment decrement of the cart
  const [counter, setCounter] = useState(0);

  // counter to check whether the count is 0

  function checkCounter() {
    if (counter === 0) {
      return console.log("i am working");
    }
  }

  // cart counter initiates the count by incrementing the count by 1

  function cartCounter() {
    setCounter(counter + 1);
  }

  // to increment the count

  function handleClickIncrement() {
    if (counter === 0) {
      checkCounter();
    } else {
      setCounter(counter + 1);
    }
  }

  // to decrement the count

  function handleClickDecrement() {
    if (counter === 0) {
      checkCounter();
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="counter_container">
      {counter === 0 ? (
        <div className="cart_container">
          <img
            className="shopping_image"
            src={shopping}
            alt="check"
            onClick={cartCounter}
          />
        </div>
      ) : (
        <div className="cart_counter_container">
          <button
            className="button_box_remove"
            onClick={handleClickDecrement}
          ></button>

          <div>
            <strong> {counter} </strong>
          </div>

          <button
            className="button_box_add"
            onClick={handleClickIncrement}
          ></button>

          <div>
            <img className="check_image" src={check} alt="check" />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartCounter;
