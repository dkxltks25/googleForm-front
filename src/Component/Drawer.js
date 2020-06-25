import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
    overflow: "auto",
    height: "calc(100% - 106px)",
  },
});

export default () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>확인</Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        className={classes.root}
        variant="persistent"
      >
        <div className={classes.drawerPaper}>
          <div style={{ height: 106 }} />
          <Button onClick={toggleDrawer("right", false)}>닫기</Button>
          <div style={{ height: 200 }}>1234</div>
          <div style={{ height: 200 }}>123</div>
          <div style={{ height: 200 }}>123</div>
          <div style={{ height: 200 }}>123</div>
        </div>
      </Drawer>
    </div>
  );
};
