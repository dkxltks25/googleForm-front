import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Search from "../Search";

const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  title: {
    color: "#5f6368",
    opacity: 1,
  },
  logoImg: {
    height: 50,
  },
});
const Logo = ({ classes }) => {
  return (
    <>
      <img
        className={classes.logoImg}
        alt="logo"
        src="https://www.gstatic.com/images/branding/product/2x/forms_48dp.png"
      />
      <Typography variant={"h6"} className={classes.title}>
        설문지
      </Typography>
    </>
  );
};

export default () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Logo classes={classes} />
        <Search />
      </Toolbar>
    </AppBar>
  );
};
