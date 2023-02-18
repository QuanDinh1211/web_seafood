import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/styles/global.scss";
import "./assets/styles/reset.css";

import Header from "./components/layouts/Header";
import RootRouter from "./routers/RootRouter";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper relative">
        <Header />
        <RootRouter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
