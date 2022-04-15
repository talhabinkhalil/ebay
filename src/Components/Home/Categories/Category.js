import React from "react";
import "./Category.scss";
import CatImage from "../../../assets/images/cloth.png";

const Category = (props) => {
  return (
    <div className="col-sm-2 col-6 col-xl-2 mainContainer">
      <div>
        <h3>{props.name}</h3>
        <div className="cardImage">
          <img src={CatImage} className="image" />
        </div>
      </div>
    </div>
  );
};

export default Category;
