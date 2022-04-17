import React from "react";
import "./MainContent.scss";
import Awo from "../../../assets/images/awo.png";
import ContentImage from "../../../assets/images/contentImage.png";
const MainContent = () => {
  return (
    <div className="container mainWrapper">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="leftOne">
            <div className="headingWrapper">
              <h1 className="heading">
                Neque porro quisquam est qui dolorem ipsum quia
              </h1>
            </div>
            <div className="textWrapper">
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only
              </h5>
              <br />
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </h5>
            </div>
            <div className="imageWrapper">
              <img src={Awo} />
            </div>
          </div>
          <div className="leftTwo">
            <div className="headingTwo">
              <h1>
                Heben Sie noch Fragen rund um das Projekt oder lhre Spende?
              </h1>
            </div>
            <div className="buttonTwo">
              <button className="twoBtn">Lorem Ipsum Fragen</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="contentImg">
            <img src={ContentImage} className="contentImage" />
          </div>
          <div>
            <div className="rightTwo">
              <div className="headingWrapper">
                <h1 className="heading">Headline Spendenbruke</h1>
                <div className="rightTwoTexts">
                  <p>Text text</p>
                  <p>mehr anzeigien</p>
                </div>
              </div>
              <div className="textWrapper">
                <h5>LoremIpsumissimply</h5>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
