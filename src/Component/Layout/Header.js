import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { deepOrange } from "@material-ui/core/colors";
import Search from "../Search";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  title: {
    marginLeft: 5,
    color: "#5f6368",
    opacity: 1,
  },
  logoImg: {
    height: 40,
  },
  logo: {
    marginLeft: 5,
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
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
        <Logo classes={classes} className={classes.logo} />
        <Search />
        <Avatar className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
};
