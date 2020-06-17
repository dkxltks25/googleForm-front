import React from "react";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff",
    boxShadow: 'none',
  },
});
export default () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
