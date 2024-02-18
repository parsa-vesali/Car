import React, { useState } from "react";
import Technical from "../layout/Technical/Technical";
import UpdatedPriceSlider from "./UpdatedPriceSlider/UpdatedPriceSlider";
import "./UpdatedPrice.css";

export default function UpdatedPrice() {
 
  return (
    <div className="container UpdatedPrice__container">
      <UpdatedPriceSlider />
      <Technical />
    </div>
  );
}
