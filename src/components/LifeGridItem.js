import React from "react";

const LifeGridItem = ({ x, y, value }) => {
  let classes;
  switch (value) {
    case 2: {
      classes = "life-grid-item live";
      break;
    }
    case 1: {
      classes = "life-grid-item new";
      break;
    }
    default: {
      classes = "life-grid-item dead";
      break;
    }
  }
  return <div className={classes} />;
};

export default LifeGridItem;
