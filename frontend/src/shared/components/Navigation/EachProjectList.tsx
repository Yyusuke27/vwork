import React from "react";
import EachProjectItem from "./EachProjectItem";
import Color from "../../util/color";

const projectDate = [
  { title: "UI改修", bgcolor: Color.VWORK_BLUE },
  { title: "WordPressテーマ開発", bgcolor: Color.VWORK_DARK_RED },
];

const EacProjectList = () => {
  return (
    <>
      {projectDate.map((date) => {
        return <EachProjectItem title={date.title} bgcolor={date.bgcolor} />;
      })}
    </>
  );
};

export default EacProjectList;
