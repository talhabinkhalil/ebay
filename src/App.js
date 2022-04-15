import React from "react";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import { ProjectRoutes } from "./Routes/ComponentRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path={ProjectRoutes.home} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
