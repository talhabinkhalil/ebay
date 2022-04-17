import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-12">
          <div className="col-md-10 col-lg-10 col-12">
            <h3>Uber Das Project</h3>
            <p style={{ width: "70%", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-12">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-5 col-12">
                <h3>Half & Concat</h3>
                <p>FAQ</p>
              </div>
              <div className="col-md-5 col-lg-5 col-12">
                <h3>Rechiltliss</h3>
                <p>AGB</p>
                <p>Datenshcutz</p>
                <p>Impressum</p>
              </div>
              <div className="col-md-2 col-lg-2 col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
