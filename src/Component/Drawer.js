import React from "react";
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

import {
  ACTION_TOGGLE_COLORDRAWER,
  ACTION_CHANGE_BACKGROUND_COLOR,
} from "../actions";
import ColorBox from "./ColorBox";
import Select from "./Select";

/* Drawer */
const ThemeChange = styled(Drawer)({
  width: 320,
  flexShrink: 0,
});
/* DrawerPaper */
const ThemePaper = styled("div")({
  width: 300,
  overflow: "auto",
});

/* 헤더의 빈공간을 맞추기 위한 스타일 */
const EmptyArea = styled("div")({
  height: 64,
});

/* Drawer의 설명 부분 */
const ThemeChangeHeaderContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ThemeChangeHeaderTitle = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  padding: 12,
});

/* Drawer에서 공통적으로 쓰이는 부분 */
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

const ThemePartsContainer = styled("div")({
  padding: 32,
});

/* ThemeChangeHeader */
const ThemeChangeHeader = () => {
  const dispatch = useDispatch();
  return (
    <ThemeChangeHeaderContainer>
      <ThemeChangeHeaderTitle>
        <ColorLensOutlined />
        <ThemePartsTitle>테마옵션</ThemePartsTitle>
      </ThemeChangeHeaderTitle>
      <IconButton
        onClick={() => {
          dispatch(ACTION_TOGGLE_COLORDRAWER);
          dispatch(ACTION_CHANGE_BACKGROUND_COLOR);
        }}
      >
        <Cancel />
      </IconButton>
    </ThemeChangeHeaderContainer>
  );
};

export default () => {
  /* Drawer 현재 상태 */
  const IsOpenDrawer = useSelector(({ ColorDrawerStore }) => ColorDrawerStore);
  return (
    <div>
      <ThemeChange anchor="right" open={IsOpenDrawer} variant="persistent">
        <ThemePaper>
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
            <ColorBox type="theme" />
          </ThemePartsContainer>
          <Divider />
          <ThemePartsContainer>
            <ThemePartsTitle>배경색상</ThemePartsTitle>
            <ColorBox type="background" />
          </ThemePartsContainer>
          <Divider />
          <ThemePartsContainer>
            <ThemePartsTitle>글꼴스타일</ThemePartsTitle>
            <Select />
          </ThemePartsContainer>
        </ThemePaper>
      </ThemeChange>
    </div>
  );
};
