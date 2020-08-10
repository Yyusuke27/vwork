import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    name: {
      fontSize: 20,
    },
  })
);

interface AddMemberItemProps {
  myName: string;
}

const AddMemberItem: FC<AddMemberItemProps> = ({ myName = "" }) => {
  const classes = useStyles();

  return (
    <>
      <Box mb={4}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  name="radio"
                />
              }
              label=""
            />
          </Grid>
          <Grid item>
            <Avatar alt={myName} src="/static/images/avatar/1.jpg" />
          </Grid>
          <Box ml={2}>
            <Grid item className={classes.name}>
              {myName}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default AddMemberItem;
