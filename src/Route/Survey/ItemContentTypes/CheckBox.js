import React, { useCallback } from "react";
import {
  styled,
  TextField,
  Checkbox,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import PropType from "prop-types";

import { itemType } from "../../../word";
import {
  ACTION_ADD_ITEM_QUESTIONS,
  ACTION_REMOVE_ITEM_QUESTION_ETC,
  ACTION_ADD_ITEM_QUESTION_ETC,
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

const QuestionActionArea = styled("div")({
  display: "flex",
  paddingLeft: 24,
  width: "100%",
});
const QuestionAdd = styled(TextField)({
  width: 80,
});
const QuestionTypo = styled(Typography)({
  fontSize: 15,
  padding: "6px 8px",
  lineHeight: "1.75",
});
const QuestionButton = styled(Button)({
  fontSize: 15,
});
const CheckBoxContainer = ({ id: parentId, questions, isEtc }) => {
  const dispatch = useDispatch();
  const addCheck = useCallback(() => {
    dispatch(ACTION_ADD_ITEM_QUESTIONS(parentId));
  }, [parentId, dispatch]);

  const AddQuestionEtc = useCallback(() => {
    dispatch(ACTION_ADD_ITEM_QUESTION_ETC(parentId));
  }, [dispatch, parentId]);
  const RemoveQuestionEtc = useCallback(() => {
    dispatch(ACTION_REMOVE_ITEM_QUESTION_ETC(parentId));
  }, [dispatch, parentId]);
  return (
    <Container>
      <ItemDragBox
        parentId={parentId}
        questions={questions}
        type={dataType.question}
        itemType={itemType.CheckBox}
      />
      {isEtc && (
        <QuestionLine>
          <QuestionActionArea>
            <Checkbox
              disabled
              inputProps={{ "aria-label": "disabled checkbox" }}
            />
            <QuestionAdd disabled placeholder="기타" onClick={addCheck} />
            <IconButton onClick={RemoveQuestionEtc}>
              <Cancel />
            </IconButton>
          </QuestionActionArea>
        </QuestionLine>
      )}
      <QuestionLine>
        <QuestionActionArea>
          <Checkbox
            disabled
            inputProps={{ "aria-label": "disabled checkbox" }}
          />
          <QuestionAdd disabled placeholder="옵션추가" onClick={addCheck} />
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

CheckBoxContainer.propTypes = {
  id: PropType.number.isRequired,
  questions: PropType.arrayOf(PropType.shape({})).isRequired,
  isEtc: PropType.bool.isRequired,
};

export default CheckBoxContainer;
