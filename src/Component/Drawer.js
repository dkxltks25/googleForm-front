import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  root: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
    overflow: "auto",
  },
});

export default () => {
  //const classes = useStyles();
  // const [state, setState] = React.useState({
  //   right: false,
  // });
  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }
  //   setState({ ...state, [anchor]: open });
  // };

  const list = (anchor) => {
    return (
      <div
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };
  const classes = useStyles();
  return (
    <div>
      {/* <Button onClick={toggleDrawer("right", true)}>right</Button> */}
      <Drawer
        anchor="right"
        // open={state.right}
        // onClose={toggleDrawer("right", false)}
        className={classes.root}
        variant="permanent"
      >
        <div className={classes.drawerPaper}>
          <div style={{ height: 200 }}>123</div>
          <div style={{ height: 200 }}>123</div>
          <div style={{ height: 200 }}>123</div>
          <div style={{ height: 200 }}>123</div>
          <div style={{ height: 200 }}>123</div>
        </div>
      </Drawer>
    </div>
  );
};
