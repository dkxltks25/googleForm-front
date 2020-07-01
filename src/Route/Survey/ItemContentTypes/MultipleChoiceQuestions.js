import React, { useState, useCallback } from "react";
import { styled, TextField, IconButton, Radio } from "@material-ui/core";
import { Cancel, DragIndicator, Image } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { ACTION_ADD_MULTIPLE_CHOICE_QUESTIONS } from "../../../actions";

// 이벤트에 해당하는 줄
const Container = styled("div")({
  paddingTop: 24,
  paddingBottom: 24,
  paddingRight: 24,
});

const QuestionLine = styled("div")({
  width: "100%",
  display: "flex",
});

const QuestionDragIcon = styled(DragIndicator)({
  color: "#ede7f6",
  cursor: "move",
});

const QuestiionWrap = styled("div")({
  width: "100%",
  display: "flex",
});

const QuestionRadio = styled(Radio)({
  width: 12,
  height: 12,
});

const QuestionTextFiled = styled(TextField)({
  flexGrow: 2,
});

const QuestionImage = styled(IconButton)({});

const QuestionCancel = styled(IconButton)({});

const QuestionActionArea = styled("div")({
  paddingLeft: 24,
  width: "100%",
});
const QuestionAdd = styled(TextField)({
  width: 80,
});

export default ({ id, question }) => {
  //console.log(question);
  const dispatch = useDispatch();
  const [columnValue, setColumnValue] = useState("열 이름");
  const handleChange = (event) => {
    setColumnValue(event.currentTaret.value);
  };
  const AddQuestion = useCallback(
    () => dispatch(ACTION_ADD_MULTIPLE_CHOICE_QUESTIONS(id)),
    [dispatch]
  );
  return (
    <Container>
     {question.map(item=>(
 <QuestionLine>
 <QuestionDragIcon />
 <QuestiionWrap>
   <QuestionRadio />
   <QuestionTextFiled value={columnValue} onChange={handleChange} />
   <QuestionImage>
     <Image />
   </QuestionImage>
   <QuestionCancel>
     <Cancel />
   </QuestionCancel>
 </QuestiionWrap>
</QuestionLine>
     ))}
     

      <QuestionLine>
        <QuestionActionArea>
          <QuestionRadio />
          <QuestionAdd placeholder="옵션추가" onClick={AddQuestion} />
        </QuestionActionArea>
      </QuestionLine>
    </Container>
  );
};
