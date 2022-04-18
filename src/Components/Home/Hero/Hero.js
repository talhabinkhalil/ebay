import React from "react";
import "./Hero.scss";
import HeroImage from "../../../assets/images/donation.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid heroContent">
      <div className="row">
        <div className="col-md-7 col-6">
          <div className="sideContent">
            <div>
              <h1 className="heroHeading">{t("Home.hero.heading")}</h1>
              <p className="smallText">{t("Home.hero.text")}</p>
              <br />
              <button className="heroButton btntext">
                {t("Home.hero.button")}
              </button>
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
