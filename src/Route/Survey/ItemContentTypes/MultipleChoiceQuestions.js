import React, { useCallback, useRef, useState } from "react";
import { styled, TextField, IconButton, Radio } from "@material-ui/core";
import { Cancel, DragIndicator, Image } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import PropType from "prop-types";

import {
  ACTION_ADD_MULTIPLE_CHOICE_QUESTIONS,
  ACTION_CHANGE_MULTIPLE_CHOICE_QUESTIONS_TITLE,
  ACTION_DELETE_MULTIPLE_CHOICE_QUESTIONS,
} from "../../../actions";
import dataType from "../Item/ItemDragType";
import ItemDragBox from "./ItemDragBox";

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
Question.propTypes = {
  parentId: PropType.number.isRequired,
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
};

const MultipleChoiceQuestions = ({ id: parentId, questions }) => {
  const dispatch = useDispatch();
  const [questionText, setQuestionText] = useState("");
  const questionAddRef = useRef(null);
  const AddQuestion = useCallback(() => {
    dispatch(ACTION_ADD_MULTIPLE_CHOICE_QUESTIONS(parentId));
  }, [dispatch]);
  const changeQuestionText = () => {
    setQuestionText("");
  };

  const findQuestion = (id) => {
    const item = questions.filter((i) => i.id === id);
    return {
      item,
      index: questions.indexOf(item),
    };
  };
  return (
    <Container>
      {questions.map((question) => (
        <ItemDragBox
          findQuestion={findQuestion}
          items={questions}
          key={question.id}
          parentId={parentId}
          question={question}
          type={dataType.question}
        >
          <Question
            findQuestion={findQuestion}
            id={question.id}
            parentId={parentId}
            title={question.title}
          />
        </ItemDragBox>
      ))}
      <QuestionLine>
        <QuestionActionArea>
          <QuestionRadio />
          <QuestionAdd
            placeholder="옵션추가"
            ref={questionAddRef}
            value={questionText}
            onClick={AddQuestion}
            onChange={changeQuestionText}
          />
        </QuestionActionArea>
      </QuestionLine>
    </Container>
  );
};

MultipleChoiceQuestions.propTypes = {
  id: PropType.number.isRequired,
  questions: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      title: PropType.string.isRequired,
    })
  ).isRequired,
};

export default MultipleChoiceQuestions;
