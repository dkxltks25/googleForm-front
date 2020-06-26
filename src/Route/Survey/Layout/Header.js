import React, { useCallback } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  styled,
  Button,
  Avatar,
} from "@material-ui/core";
import {
  ColorLensOutlined,
  VisibilityOutlined,
  SettingsOutlined,
  MoreVert,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { Survey } from "../../../Component/Icon";
import { ACTION_TOGGLE_COLORDRAWER } from "../../../actions";

const ToolbarLeftColumn = styled("div")({
  flexGrow: 1,
});

const ToolbarRightColumn = styled("div")({
  display: "flex",
  alignItems: "center",
});
const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default () => {
  const classes = useStyle();
  const dispacth = useDispatch();
  const ToggleColorChange = useCallback(
    () => dispacth(ACTION_TOGGLE_COLORDRAWER),
    [dispacth]
  );
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <ToolbarLeftColumn>
          <IconButton>
            <Survey size={24} />
          </IconButton>
        </ToolbarLeftColumn>
        <ToolbarRightColumn>
          <IconButton onClick={ToggleColorChange}>
            <ColorLensOutlined />
          </IconButton>
          <IconButton>
            <VisibilityOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <Button> 보내기</Button>
          <IconButton>
            <MoreVert />
          </IconButton>
          <Avatar />
        </ToolbarRightColumn>
      </Toolbar>
    </AppBar>
  );
};
