import React, { useCallback, useRef, useState } from "react";
import {
  styled,
  TextField,
  Radio,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import PropType from "prop-types";

import { itemType } from "../../../word";
import {
  ACTION_ADD_ITEM_QUESTIONS,
  ACTION_ADD_ITEM_QUESTION_ETC,
  ACTION_REMOVE_ITEM_QUESTION_ETC,
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
  display: "flex",
  paddingLeft: 24,
  width: "100%",
});
const QuestionAdd = styled(TextField)({
  width: 80,
  fontSize: 15,
});

const QuestionEtc = styled(TextField)({
  fontsize: 15,
});

const QuestionTypo = styled(Typography)({
  fontSize: 15,
  padding: "6px 8px",
  lineHeight: "1.75",
});
const QuestionButton = styled(Button)({
  fontSize: 15,
});

const MultipleChoiceQuestions = ({ id: parentId, questions, isEtc }) => {
  const dispatch = useDispatch();
  const [questionText, setQuestionText] = useState("");
  const questionAddRef = useRef(null);
  const AddQuestion = useCallback(() => {
    dispatch(ACTION_ADD_ITEM_QUESTIONS(parentId));
  }, [dispatch]);
  const changeQuestionText = () => {
    setQuestionText("");
  };
  const AddQuestionEtc = useCallback(() => {
    dispatch(ACTION_ADD_ITEM_QUESTION_ETC(parentId));
  }, [dispatch, parentId]);
  const RemoveQuestionEtc = useCallback(() => {
    dispatch(ACTION_REMOVE_ITEM_QUESTION_ETC(parentId));
  }, [dispatch, parentId]);
  return (
    <Container>
      <ItemDragBox
        questions={questions}
        parentId={parentId}
        type={dataType.question}
        itemType={itemType.MultipleChoiceQuestions}
      />
      {isEtc && (
        <QuestionLine>
          <QuestionActionArea>
            <QuestionRadio />
            <QuestionEtc disabled placeholder="기타" />
            <IconButton onClick={RemoveQuestionEtc}>
              <Cancel />
            </IconButton>
          </QuestionActionArea>
        </QuestionLine>
      )}
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
          {!isEtc && (
            <>
              <QuestionTypo>또는</QuestionTypo>
              <QuestionButton onClick={AddQuestionEtc}>
                {" "}
                &quot;기타&quot; 추가
              </QuestionButton>
            </>
          )}
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
  isEtc: PropType.bool.isRequired,
};

export default MultipleChoiceQuestions;
