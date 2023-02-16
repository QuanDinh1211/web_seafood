import React from "react";

import "./assets/styles/global.scss";
import "./assets/styles/reset.css";

import Header from "./components/layouts/Header";
import RootRouter from "./routers/RootRouter";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper relative">
        <Header />
        <RootRouter />
      </div>
    </div>
  );
}

export default App;
