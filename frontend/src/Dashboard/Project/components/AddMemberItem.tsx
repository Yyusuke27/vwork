import React, { FC, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: "4%",
    },
    icon: {
      marginRight: "2%",
    },
    name: {
      fontSize: 20,
      paddingLeft: "2%",
    },
  })
);

interface AddMemberItemProps {
  myName: string;
}

const AddMemberItem: FC<AddMemberItemProps> = ({ myName = "" }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <Radio
            checked={selectedValue === ""}
            onChange={handleChange}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </Grid>
        <Grid item>
          <Avatar alt={myName} src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid item className={classes.name}>
          {myName}
        </Grid>
      </Grid>
    </>
  );
};

export default AddMemberItem;
