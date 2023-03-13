import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../assets/styles/langStyle.scss";
import LangItem from "./langItem";

import { selectHome } from "../../store/selectors/homeSelector";
import { setLang } from "../../store/slice/homeSlide";

const Lang = () => {
  const homeState = useSelector(selectHome);
  const dispatch = useDispatch();

  const [showLangoption, setshowLangoption] = useState(false);

  const handleOnclicklang = (e) => {
    e.stopPropagation();
    setshowLangoption(!showLangoption);
  };

  const handleOnClickLangItem = (value) => {
    dispatch(setLang(value));
    setshowLangoption(false);
  };

  return (
    <div className="header-content-box-lang">
      {homeState.lang === "us" ? (
        <div
          className="header-content-box-lang-item"
          onClick={handleOnclicklang}
        >
          <div className="header-content-box-lang-item-img">
            <img src={require("../../assets/imgs/us.png")} />
          </div>
          <span>English</span>
        </div>
      ) : (
        <div
          className="header-content-box-lang-item"
          onClick={handleOnclicklang}
        >
          <div className="header-content-box-lang-item-img">
            <img src={require("../../assets/imgs/vn.png")} />
          </div>
          <span>Vietnamese</span>
        </div>
      )}
      {showLangoption && (
        <div className="header-content-box-lang-list">
          <LangItem value="vn" handleOnClickLangItem={handleOnClickLangItem} />
          <LangItem value="us" handleOnClickLangItem={handleOnClickLangItem} />
        </div>
      )}
    </div>
  );
};

export default Lang;
