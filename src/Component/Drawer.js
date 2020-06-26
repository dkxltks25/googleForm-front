import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  Divider,
  styled,
  Typography,
  IconButton,
  Drawer,
} from "@material-ui/core";
import {
  FormatPaint,
  Cancel,
  ColorLensOutlined,
  Image,
} from "@material-ui/icons";

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

const ThemeImageChangeContainer = styled("div")({
  padding: 32,
});

const ThemeImageChangeButton = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  maxHeight: 32,
  maxWidth: 90,
  border: "1px solid #e8eaed",
  padding: 6,
  marginTop: 12,
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
const ThemeChangeHeader = () => (
  <ThemeChangeHeaderContainer>
    <ThemeChangeHeaderTitle>
      <ColorLensOutlined />
      <ThemePartsTitle>테마옵션</ThemePartsTitle>
    </ThemeChangeHeaderTitle>
    <IconButton>
      <Cancel />
    </IconButton>
  </ThemeChangeHeaderContainer>
);

/* ThemeImaageChange */
const ThemeImageChange = () => (
  <ThemeImageChangeContainer>
    <ThemePartsTitle>머리글</ThemePartsTitle>
    <ThemeImageChangeButton>
      <Image />
      <Typography variant="overline">이미지 선택</Typography>
    </ThemeImageChangeButton>
  </ThemeImageChangeContainer>
);
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
        variant="permanent"
      >
        <div className={classes.drawerPaper}>
          <EmptyArea />
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
          </ThemePartsContainer>

          <Divider />
          <ThemePartsContainer>
            <ThemePartsTitle>배경색상</ThemePartsTitle>
          </ThemePartsContainer>
          <Divider />

          <ThemePartsContainer>
            <ThemePartsTitle>글꼴스타일</ThemePartsTitle>
          </ThemePartsContainer>
          <Button onClick={toggleDrawer("right", false)}>닫기</Button>
        </div>
      </Drawer>
    </div>
  );
};
