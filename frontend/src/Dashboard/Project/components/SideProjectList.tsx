import React from "react";
import SideProjectItem from "./SideProjectItem";
import { useSelector } from "react-redux";
import { selectProjects } from "../projectSlice";
import { PROJECT_COLORS } from "../../../shared/util/color";

const SideProjectList = () => {
  const projectData = useSelector(selectProjects);
  return (
    <>
      {projectData.map((data, index) => {
        return (
          <SideProjectItem
            title={data.name}
            bgColor={PROJECT_COLORS[data.color]}
            key={data._id}
          />
        );
      })}
    </>
  );
};

export default SideProjectList;