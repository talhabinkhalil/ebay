import React from "react";
import "./MainContent.scss";
import Awo from "../../../assets/images/awo.png";
import ContentImage from "../../../assets/images/contentImage.png";
import useIsMobileScreen from "../../../hooks/useCheckDevice";
import RightTwo from "./RightTwo";
const MainContent = () => {
  const isMobile = useIsMobileScreen();
  return (
    <div className="container mainWrapper">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="leftOne">
            <div className="headingWrapper">
              <h1 className="headings">
                Neque porro est qui dolorem ipsum quia
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
            {isMobile && <RightTwo />}
          </div>
          {isMobile && (
            <div className="contentImg">
              <img src={ContentImage} className="contentImage" />
            </div>
          )}
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
          {!isMobile && (
            <div className="contentImg">
              <img src={ContentImage} className="contentImage" />
            </div>
          )}
          <div>{!isMobile && <RightTwo />}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
