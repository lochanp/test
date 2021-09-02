import React from "react";

import addcarttag from "../assets/images/ic-addcart.svg";
import interesttag from "../assets/images/ic-interest.svg";
import shortlisttag from "../assets/images/ic-shortlist.svg";

function AllFunctionComponent() {
  return (
    <div className="all-functions-container">
      <div className="fnc add-to-cart">
        <img className="fnc-image" src={addcarttag} alt="addcart" />
        <span className="fnc-span" >Add to cart</span>
      </div>
      <div className="fnc express-interest">
        <img className = "fnc-image" src={interesttag} alt="interest" />
        <span className="fnc-span" >Express Interest</span>
      </div>
      <div className="fnc short-list">
        <img className = "fnc-image" src={shortlisttag} alt="shortlist" />
        <span className="fnc-span" >Shortlist</span>
      </div>
    </div>
  );
}

export default AllFunctionComponent;
