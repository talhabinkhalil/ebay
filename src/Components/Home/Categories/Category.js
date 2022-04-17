import React from "react";
import "./Category.scss";
import CatImage from "../../../assets/images/cloth.png";

const Category = (props) => {
  return (
    <div className=" col-md-4 col-lg-2 col-6 mainContainer">
      <div className="cardContent">
        <p>{props.name}</p>
        <div className="cardImage">
          <img src={CatImage} className="image" />
        </div>
      </div>
    </div>
  );
};

export default Category;
