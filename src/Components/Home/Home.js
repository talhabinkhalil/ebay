import React from "react";
import Header from "../SharedComponents/Header/Header";
import Category from "./Categories/Category";
import Hero from "./Hero/Hero";
import "./Home.scss";
import MainContent from "./MainContent/MainContent";

const Home = () => {
  const data = [
    {
      name: "Cloths",
      image: "../../assets/images/cloth.png",
    },
    {
      name: "Cloths",
      image: "../../assets/images/cloth.png",
    },
    {
      name: "Cloths",
      image: "../../assets/images/cloth.png",
    },
    {
      name: "Cloths",
      image: "../../assets/images/cloth.png",
    },
    {
      name: "Cloths",
      image: "../../assets/images/cloth.png",
    },
    {
      name: "Cloths",
      image: "../../assets/images/cloth.png",
    },
  ];
  return (
    <React.Fragment>
      <div className="homeContainer">
        <Header />
        <Hero />
        <div className=" cards">
          <div className="row">
            {data.map((d) => (
              <Category name={d.name} image={d.image} />
            ))}
          </div>
        </div>
        <div className="homePageButton">
          <button className="buttonHome">Zur Suplendis</button>
        </div>
      </div>
      <div className="homeContainerTwo">
        <div>
          <MainContent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
