import React from "react";
import AddMemberItem from "./AddMemberItem";

const memberdata = [
  { myName: "Shogo Yunoki" },
  { myName: "Shogo Yunoki" },
  { myName: "Shogo Yunoki" },
];

const AddMemberList = () => {
  return (
    <>
      {memberdata.map((data, index) => {
        return <AddMemberItem myName={data.myName} key={index} />;
      })}
    </>
  );
};

export default AddMemberList;
