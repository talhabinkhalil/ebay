import React from "react";
import "./Hero.scss";
import HeroImage from "../../../assets/images/donation.jpg";

const Hero = () => {
  return (
    <div className="containers">
      <div className="contentContainer">
        <div>
          <h1>
            Deine Spende Fur <br /> Ukrain Innen
          </h1>
          <p className="smallText">Spende Von Zuhan Oder ebay</p>
          <br />
          <button className="heroButton">
            <h4 className="btntext">Jetzet Spendin</h4>
          </button>
        </div>
        <div className="imgContainer">
          <img src={HeroImage} className="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
