import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    comtainer: {
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

const AddMemberItem = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.comtainer}
      >
        <Grid item>
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </Grid>
        <Grid item>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid item className={classes.name}>
          Shogo Yunoki
        </Grid>
      </Grid>
    </>
  );
};

export default AddMemberItem;
