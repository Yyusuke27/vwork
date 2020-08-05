import React from "react";
import AddMemberItem from "./AddMemberItem";

const memberdata = [
  { myname: "Shogo Yunoki" },
  { myname: "Shogo Yunoki" },
  { myname: "Shogo Yunoki" },
];

const AddMemberList = () => {
  return (
    <>
      {memberdata.map((data, index) => {
        return <AddMemberItem myname={data.myname} key={index} />;
      })}
    </>
  );
};

export default AddMemberList;
