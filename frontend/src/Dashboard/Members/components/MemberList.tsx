import React from "react";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MemberItem from "./MemberItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 23,
      width: 900,
    },
  })
);

// interface MemberListProps {
//   members: {
//     active: boolean;
//     email: string;
//     name: string;
//     registration: boolean;
//     role: string;
//     _id: string;
//   }[];
// }
const members = [{ name: "Shogo", _id: "1" }];

const MemberList = () => {
  const classes = useStyles();

  return (
    <>
      <Box borderBottom={1} mt={7} mb={2} className={classes.title}>
        メンバー
      </Box>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          {members.map((member, index) => {
            return (
              <MemberItem
                name={member.name}
                key={index}
                memberId={member._id}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default MemberList;
