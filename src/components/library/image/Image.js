import React from "react";
import uniqid from "uniqid";

import "./Image.css";

const Image = ({ content, className }) => (
  <div className="container">
    <img src={content} className={className} alt={uniqid("img-")} />
  </div>
);

export { Image };
export default Image;
