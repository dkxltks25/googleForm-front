import React, { useCallback } from "react";
import { styled, Typography, TextField } from "@material-ui/core";
import PropType from "prop-types";
import { useDispatch } from "react-redux";

import { itemType } from "../../../word";
import ItemDragBox from "./ItemDragBox";
import dataType from "../Item/ItemDragType";
import { ACTION_ADD_ITEM_QUESTIONS } from "../../../actions";

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

const QuestionTypo = styled(Typography)({
  fontSize: 15,
  padding: "6px 8px",
  lineHeight: "1.75",
});
const QuestionAdd = styled(TextField)({
  width: 80,
  fontSize: 15,
});

const DropDown = ({ id: parentId, questions }) => {
  const dispatch = useDispatch();
  const AddQuestion = useCallback(() => {
    dispatch(ACTION_ADD_ITEM_QUESTIONS(parentId));
  }, [dispatch]);
  return (
    <Container>
      <ItemDragBox
        questions={questions}
        parentId={parentId}
        type={dataType.question}
        itemType={itemType.DropDown}
      />
      <QuestionLine>
        <QuestionActionArea>
          <QuestionTypo>{questions.length + 1}</QuestionTypo>
          <QuestionAdd placeholder="옵션추가" onClick={AddQuestion} />
        </QuestionActionArea>
      </QuestionLine>
    </Container>
  );
};

DropDown.propTypes = {
  id: PropType.number.isRequired,
  questions: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      title: PropType.string.isRequired,
    })
  ).isRequired,
};

export default DropDown;
