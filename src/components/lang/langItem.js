import React from "react";

const LangItem = ({ value, handleOnClickLangItem }) => {
  const handleOnClick = (e) => {
    e.stopPropagation();
    handleOnClickLangItem(value);
  };

  return (
    <div className="header-content-box-lang-item-list" onClick={handleOnClick}>
      <div className="header-content-box-lang-item-img">
        <img src={require(`../../assets/imgs/${value}.png`)} />
      </div>
      <span>{value === "us" ? "English" : "Vietnamese"} </span>
    </div>
  );
};

export default LangItem;
