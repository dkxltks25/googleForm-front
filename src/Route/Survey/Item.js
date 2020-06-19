import React from "react";
import {
  styled,
  TextField,
  IconButton,
  makeStyles,
  Switch,
} from "@material-ui/core";
import {
  DragIndicator,
  Image,
  DeleteOutline,
  FilterNone,
} from "@material-ui/icons";
import Select from "../../Component/Select";
import SurveyCard from "../../Component/SurveyCard";

const Container = styled("div")({
  marginTop: 12,
});
const Header = styled("div")({
  minHeight: 20,
  width: "100%",
  "&:hover": { cursor: "move" },
});

const Content = styled("form")({});

const ItemHeader = styled("div")({
  paddingLeft: 24,
  paddingRight: 24,
  display: "flex",
  justifyContent: "space-around",
});
const ItemContent = styled("div")({
  width: "100%",
  paddingTop: 24,
});
const ItemFooter = styled("div")({
  margin: "0px 24px",
  paddingTop: 6,
  paddingBottom: 6,
  borderTop: "1px solid #dadce0",
  display: "flex",
  justifyContent: "space-between",
});
const DvideColumn = styled("div")({
  borderLeft: "1px solid #dadce0",
  height: "32px",
  margin: "0 16px",
  width: "0",
});
const ItemIconButtonList = styled("div")({
  display: "flex",
  alignItems: "center",
});
const ItemImportSwitch = styled("div")({});
const useStyle = makeStyles({
  Drag: {
    margin: "auto",
    transform: "rotate(90deg)",
    verticalAlign: "center",
    color: "#ede7f6",
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  image: {
    flexGrow: 0.1,
    maxWidth: 56,
    maxHeight: 56,
  },
  select: {
    flexGrow: 0.5,
  },
});

export default () => {
  const classes = useStyle();
  return (
    <Container>
      <SurveyCard>
        <Header>
          <DragIndicator className={classes.Drag} />
        </Header>
        <Content>
          <ItemHeader>
            <TextField
              variant="filled"
              placeholder="제목"
              className={classes.title}
            />
            <IconButton className={classes.image}>
              <Image />
            </IconButton>
            <Select className={classes.select} />
          </ItemHeader>
          <ItemContent />
          <ItemFooter>
            <div />
            <ItemIconButtonList>
              <IconButton>
                <FilterNone />
              </IconButton>
              <IconButton>
                <DeleteOutline />
              </IconButton>
              <DvideColumn />
              <ItemImportSwitch>
                <span>필수</span>
                <Switch />
              </ItemImportSwitch>
            </ItemIconButtonList>
          </ItemFooter>
        </Content>
      </SurveyCard>
    </Container>
  );
};
