import React from "react";
import { styled, TextField, IconButton } from "@material-ui/core";
import { Cancel, DragIndicator, Image } from "@material-ui/icons";

// 이벤트에 해당하는 줄
const Container = styled("div")({});

const QuestionLine = styled("div")({});

const QuestionDragIcon = styled(DragIndicator)({});

const QuestionTextFiled = styled(TextField)({});

const QuestionImage = styled(IconButton)({});

const QuestionCancel = styled(IconButton)({});

const QuestionPresenter = () => (
  <Container>
    <QuestionLine>
      <QuestionDragIcon />
      <QuestionTextFiled />
      <QuestionImage>
        <Image />
      </QuestionImage>
      <QuestionCancel>
        <Cancel />
      </QuestionCancel>
    </QuestionLine>
  </Container>
);
export default QuestionPresenter;
