import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  styled,
  Typography,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Cancel, ColorLensOutlined, Image } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";

import { ACTION_TOGGLE_COLORDRAWER } from "../actions";
import ColorBox from "./ColorBox";
import Select from "./Select";

const EmptyArea = styled("div")({
  height: 64,
});
const ThemeChangeHeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ThemeChangeHeaderTitle = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  padding: 12,
});

const ThemePartsTitle = styled("div")({
  fontFamily: "Roboto,Arial,sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: ".3px",
  lineHeight: "16px",
  color: "#70757a",
  marginBottom: "12px",
  paddingLeft: 0,
  textTransform: "uppercase",
});

const useStyles = makeStyles({
  root: {
    width: 320,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
    overflow: "auto",
  },
});

const ThemePartsContainer = styled("div")({
  padding: 32,
});
/* ThemeChangeHeader */
const ThemeChangeHeader = () => {
  const dispacth = useDispatch();
  return (
    <ThemeChangeHeaderContainer>
      <ThemeChangeHeaderTitle>
        <ColorLensOutlined />
        <ThemePartsTitle>테마옵션</ThemePartsTitle>
      </ThemeChangeHeaderTitle>
      <IconButton onClick={() => dispacth(ACTION_TOGGLE_COLORDRAWER)}>
        <Cancel />
      </IconButton>
    </ThemeChangeHeaderContainer>
  );
};

export default () => {
  const classes = useStyles();
  /* Drawer 현재 상태 */
  const IsOpenDrawer = useSelector(({ ColorDrawerStore }) => ColorDrawerStore);
  return (
    <div>
      <Drawer
        anchor="right"
        open={IsOpenDrawer}
        className={classes.root}
        variant="persistent"
      >
        <div className={classes.drawerPaper}>
          <EmptyArea />
          <ThemeChangeHeader />
          <Divider />
          <ThemePartsContainer>
            <ThemePartsTitle>머리글</ThemePartsTitle>
            <Button color="primary">
              <Image />
              <Typography>이미지 추가</Typography>
            </Button>
          </ThemePartsContainer>
          <Divider />
          <ThemePartsContainer>
            <ThemePartsTitle>테마색상</ThemePartsTitle>
            <ColorBox />
          </ThemePartsContainer>
          <Divider />
          <ThemePartsContainer>
            <ThemePartsTitle>배경색상</ThemePartsTitle>
            <ColorBox />
          </ThemePartsContainer>
          <Divider />

          <ThemePartsContainer>
            <ThemePartsTitle>글꼴스타일</ThemePartsTitle>
            <Select />
          </ThemePartsContainer>
        </div>
      </Drawer>
    </div>
  );
};
