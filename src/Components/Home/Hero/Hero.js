import React from "react";
import "./Hero.scss";
import HeroImage from "../../../assets/images/donation.png";

const Hero = () => {
  return (
    <div className="container heroContent">
      <div className="row">
        <div className="col-md-7 col-6">
          <div className="sideContent">
            <div>
              <h1>
                Deine Spende Fur <br /> Ukrain Innen
              </h1>
              <p className="smallText">Spende Von Zuhan Oder ebay</p>
              <br />
              <button className="heroButton btntext">Jetzet Spendin</button>
            </div>
          </div>
        </div>
        <div className="imgContainer col-md-4 col-6">
          <img src={HeroImage} className="img" />
        </div>
      </div>
    </div>
  );
};

// containers
// contentContainer
export default Hero;
