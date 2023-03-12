import React from "react";
import { useSelector } from "react-redux";

import Category from "../category/index";

import { topicSelector } from "../../store/selectors/homeSelector";

const Topic = () => {
  const dataTopicRender = useSelector(topicSelector);

  return (
    <Category
      categoryname={"Hải sản đông lạnh / gia vị"}
      dataProductcategory={dataTopicRender}
    />
  );
};

export default Topic;
