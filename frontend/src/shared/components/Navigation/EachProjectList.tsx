import React from "react";
import EachProjectItem from "./EachProjectItem";
import Color from "../../util/color";

const projectDate = [
  { title: "UI改修", bgColor: Color.VWORK_BLUE },
  { title: "WordPress", bgColor: Color.VWORK_DARK_RED },
];

const EacProjectList = () => {
  return (
    <>
      {projectDate.map((date, index) => {
        return (
          <EachProjectItem
            title={date.title}
            bgColor={date.bgColor}
            key={index}
          />
        );
      })}
    </>
  );
};

export default EacProjectList;
