import React from "react";
import { useSelector } from "react-redux";
import SideProjectItem from "./SideProjectItem";
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
            projectId={data.id}
            key={data.id}
          />
        );
      })}
    </>
  );
};

export default SideProjectList;
