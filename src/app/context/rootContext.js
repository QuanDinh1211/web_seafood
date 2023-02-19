import React, { useState } from "react";

import { RootContext } from "../hooks/rootContext";

const RootContentProvider = ({ children }) => {
  const [showNavigateTablet, setshowNavigateTablet] = useState(false);

  const handleOpenNavigateTablet = () => {
    setshowNavigateTablet(true);
  };

  const handleCloseNavigateTablet = () => {
    setshowNavigateTablet(false);
  };

  const rootContextData = {
    showNavigateTablet,
    handleOpenNavigateTablet,
    handleCloseNavigateTablet,
  };

  return (
    <RootContext.Provider value={rootContextData}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContentProvider;
