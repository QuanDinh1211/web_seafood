import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/styles/global.scss";
import "./assets/styles/reset.css";

import Header from "./components/layouts/Header";
import RootRouter from "./routers/RootRouter";
import Footer from "./components/layouts/Footer";
import NavigateModal from "./components/modal/NavigateModal";

import { RootContext } from "./app/hooks/rootContext";

function App() {
  const { showNavigateTablet } = useContext(RootContext);

  return (
    <div className="App">
      <div className="app-wrapper relative">
        <Header />
        <RootRouter />
        <Footer />
        {showNavigateTablet && <NavigateModal />}
      </div>
    </div>
  );
}

export default App;
