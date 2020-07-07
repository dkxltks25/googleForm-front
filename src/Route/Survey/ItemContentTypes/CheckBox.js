import React, { useCallback, useRef, useState } from "react";
import { styled, TextField, Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PropType from "prop-types";

import { itemType } from "../../../word";
import { ACTION_ADD_ITEM_QUESTIONS } from "../../../actions";
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
  paddingLeft: 24,
  width: "100%",
});
const QuestionAdd = styled(TextField)({
  width: 80,
});
const CheckBoxContainer = ({ id: parentId, questions }) => {
  const dispatch = useDispatch();
  const addCheck = useCallback(() => {
    dispatch(ACTION_ADD_ITEM_QUESTIONS(parentId));
  }, [parentId, dispatch]);
  return (
    <Container>
      <ItemDragBox
        parentId={parentId}
        questions={questions}
        type={dataType.question}
        itemType={itemType.CheckBox}
      />
      <QuestionLine>
        <QuestionActionArea>
          <Checkbox
            disabled
            inputProps={{ "aria-label": "disabled checkbox" }}
          />
          <QuestionAdd placeholder="옵션추가" onClick={addCheck} />
        </QuestionActionArea>
      </QuestionLine>
    </Container>
  );
};

CheckBoxContainer.propTypes = {
  id: PropType.number.isRequired,
  questions: PropType.arrayOf(PropType.shape({})).isRequired,
};

export default CheckBoxContainer;
