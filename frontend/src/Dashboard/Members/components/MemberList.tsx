import React, { FC } from "react";
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

interface MemberListProps {
  members: {
    name: string;
    _id: string;
  }[];
}

const MemberList: FC<MemberListProps> = ({ members }) => {
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
              <MemberItem name={member.name} _id={member._id} key={index} />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default MemberList;
