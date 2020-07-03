import React, { useCallback } from "react";
import { styled, TextField, IconButton, Radio } from "@material-ui/core";
import { Cancel, DragIndicator, Image } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import PropType from "prop-types";

import {
  ACTION_ADD_MULTIPLE_CHOICE_QUESTIONS,
  ACTION_CHANGE_MULTIPLE_CHOICE_QUESTIONS_TITLE,
  ACTION_DELETE_MULTIPLE_CHOICE_QUESTIONS,
} from "../../../actions";

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

const Question = ({ parentId, id, title }) => {
  const dispatch = useDispatch();
  const ChangeQuestionTitle = useCallback(
    (e) =>
      dispatch(
        ACTION_CHANGE_MULTIPLE_CHOICE_QUESTIONS_TITLE(
          parentId,
          id,
          e.currentTarget.value
        )
      ),
    [dispatch]
  );
  const DeleteQuestion = useCallback(
    () => dispatch(ACTION_DELETE_MULTIPLE_CHOICE_QUESTIONS(parentId, id)),
    [dispatch, id]
  );
  return (
    <QuestionLine>
      <QuestionDragIcon />
      <QuestiionWrap>
        <QuestionRadio />
        <QuestionTextFiled
          id="standard-basic"
          value={title}
          onChange={ChangeQuestionTitle}
        />

        <QuestionImage>
          <Image />
        </QuestionImage>
        <QuestionCancel onClick={DeleteQuestion}>
          <Cancel />
        </QuestionCancel>
      </QuestiionWrap>
    </QuestionLine>
  );
};

const MultipleChoiceQuestions = ({ id: parentId, question }) => {
  const dispatch = useDispatch();
  const AddQuestion = useCallback(
    () => dispatch(ACTION_ADD_MULTIPLE_CHOICE_QUESTIONS(parentId)),
    [dispatch]
  );

  return (
    <Container>
      {question.map(({ id, title }) => (
        <Question key={id} id={id} title={title} parentId={parentId} />
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

MultipleChoiceQuestions.propTypes = {
  id: PropType.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  question: PropType.array.isRequired,
};

export default MultipleChoiceQuestions;
