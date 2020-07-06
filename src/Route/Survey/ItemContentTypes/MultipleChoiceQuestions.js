import React, { useCallback, useRef, useState } from "react";
import { styled, TextField, Radio } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PropType from "prop-types";

import {
  ACTION_ADD_MULTIPLE_CHOICE_QUESTIONS,
  // eslint-disable-next-line no-unused-vars
  ACTION_CHANGE_MULTIPLE_CHOICE_QUESTIONS_TITLE,
  // eslint-disable-next-line no-unused-vars
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
const QuestionRadio = styled(Radio)({
  width: 12,
  height: 12,
});
const QuestionActionArea = styled("div")({
  paddingLeft: 24,
  width: "100%",
});
const QuestionAdd = styled(TextField)({
  width: 80,
});

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
  // const ChangeQuestionTitle = useCallback(
  //   (e) =>
  //     dispatch(
  //       ACTION_CHANGE_MULTIPLE_CHOICE_QUESTIONS_TITLE(
  //         parentId,
  //         id,
  //         e.currentTarget.value
  //       )
  //     ),
  //   [dispatch]
  // );
  // const DeleteQuestion = useCallback(
  //   () => dispatch(ACTION_DELETE_MULTIPLE_CHOICE_QUESTIONS(parentId, id)),
  //   [dispatch, id]
  // );

  return (
    <Container>
      <ItemDragBox
        questions={questions}
        parentId={parentId}
        type={dataType.question}
      />
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
