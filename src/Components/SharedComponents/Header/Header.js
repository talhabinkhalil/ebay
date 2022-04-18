import React from "react";
import "./Header.scss";
import Logo from "../../../assets/images/logo.png";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import Menu from "../../../assets/images/menu.png";
import useIsMobileScreen from "../../../hooks/useCheckDevice";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobileScreen();

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
  };
  const changeToGerman = () => {
    i18n.changeLanguage("de");
  };
  return (
    <div fluid className="headerContainer">
      <div className="headerRow">
        <div>
          <img src={Logo} className="headerImage" />
        </div>
        {!isMobile && (
          <div className="headerLinks">
            <h3 className="linkColors">{t("header.firstText")}</h3>
            <h3 className="linkColors">{t("header.secondText")}</h3>
            <button onClick={changeToEnglish}>En</button>
            <button onClick={changeToGerman}>De</button>
          </div>
        )}
        {isMobile && (
          <div>
            <img
              src={Menu}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            />

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              style={{ width: "100%" }}
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel"></h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <h3 className="linkColors">Spendlist</h3>
                <h3 className="linkColors">FAQ</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
