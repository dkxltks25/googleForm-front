import React from "react";
import { styled } from "@material-ui/core";
import { useSelector } from "react-redux";

import Title from "../Title";
import Items from "../Item/";
import Toolbar from "../Toolbar";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "600px",
  paddingTop: theme.spacing(10),
}));
const FormWrap = styled("form")({
  width: 770,
  margin: "0 auto",
});

export default () => {
  //const Items = useSelector((state) => state.SurveyItemReducer);
  return (
    <Container>
      <FormWrap>
        <Toolbar />
        <Title />
        <Items />
      </FormWrap>
    </Container>
  );
};
