import React from "react";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import { Survey } from "../../../Component/Icon";

const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
  },
});

export default () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton>
          <Survey size={24} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
