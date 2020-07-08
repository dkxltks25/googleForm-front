import React, { useCallback } from "react";
import PropType from "prop-types";
import { useDrop, useDrag } from "react-dnd";
import {
  styled,
  IconButton,
  TextField,
  Radio,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { DragIndicator, Image, Close } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { itemType as CompareItemType } from "../../../word";
import {
  ACTION_MOVE_ITEM_QUESTION,
  ACTION_CHANGE_ITEM_QUESTIONS_TITLE,
  ACTION_DELETE_ITEM_QUESTIONS,
} from "../../../actions";

// const QuestionContainer = styled("div")({
//   paddingTop: 24,
//   paddingBottom: 24,
//   paddingRight: 24,
// });

const ItemDragIndicator = styled(DragIndicator)({
  color: "#ede7f6",
  cursor: "move",
});
const DragArea = styled("div")({});
const QuestionLine = styled("div")({
  width: "100%",
  display: "flex",
});

const QuestiionWrap = styled("div")({
  width: "100%",
  display: "flex",
});

const QuestionRadio = styled(Radio)({
  width: 12,
  height: 12,
});
// const QuestionCheck = styled(CheckBox)({
//   width: 36,
//   height: 36,
// });
const QUestionNumber = styled(Typography)({
  padding: 8,
});
const QuestionTextFiled = styled(TextField)({
  flexGrow: 2,
});

const QuestionImage = styled(IconButton)({});
const QuestionCancel = styled(IconButton)({});
const DropContainer = styled("div")({});
const DragContainer = styled("div")({});

const ItemDragBox = ({
  questions,
  type,
  parentId,
  itemType,
  isGrid = false,
}) => {
  const findQuestion = (id) => {
    const item = questions.filter((i) => i.id === id)[0];
    return {
      item,
      index: questions.indexOf(item),
    };
  };
  const [, drop] = useDrop({ accept: type });
  return (
    <DropContainer ref={(ref) => drop(ref)}>
      {questions.map((question, index) => (
        <DragQuestion
          key={question.id}
          findQuestion={findQuestion}
          question={question}
          parentId={parentId}
          type={type}
          itemType={itemType}
          index={index}
          isGrid={isGrid}
        />
      ))}
    </DropContainer>
  );
};
ItemDragBox.propTypes = {
  type: PropType.string.isRequired,
  questions: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
    })
  ).isRequired,
  parentId: PropType.number.isRequired,
  itemType: PropType.string.isRequired,
  isGrid: PropType.bool.isRequired,
};

export default ItemDragBox;

const DragQuestion = ({
  findQuestion,
  question,
  parentId,
  type,
  itemType,
  index,
  isGrid,
}) => {
  const dispatch = useDispatch();
  const originalIndex = findQuestion(question.id);
  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type, id: question.id, originalIndex },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
        canDrag: monitor.canDrag(),
      };
    },
    end: (dropResult, monitor) => {
      const { id: dropeedId, originalIndex: originIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        dispatch(ACTION_MOVE_ITEM_QUESTION(parentId, dropeedId, originIndex));
      }
    },
  });
  const [, drop] = useDrop({
    accept: type,
    canDrop: false,
    hover({ id: draggedId }) {
      if (draggedId !== question.id) {
        const { index: overIndex } = findQuestion(question.id);
        dispatch(ACTION_MOVE_ITEM_QUESTION(parentId, draggedId, overIndex));
      }
    },
  });

  return (
    <DragContainer ref={preview}>
      <Question
        drag={drag}
        drop={drop}
        parentId={parentId}
        id={question.id}
        title={question.title}
        itemType={itemType}
        index={index}
        isGrid={isGrid}
      />
    </DragContainer>
  );
};

DragQuestion.propTypes = {
  findQuestion: PropType.func.isRequired,
  question: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
  }).isRequired,
  parentId: PropType.number.isRequired,
  type: PropType.string.isRequired,
  itemType: PropType.string.isRequired,
  index: PropType.number.isRequired,
  isGrid: PropType.bool.isRequired,
};

// Question
const Question = ({
  parentId,
  id,
  title,
  drag,
  drop,
  itemType,
  index,
  isGrid,
}) => {
  const dispatch = useDispatch();
  const ChangeQuestionTitle = useCallback(
    (e) =>
      dispatch(
        ACTION_CHANGE_ITEM_QUESTIONS_TITLE(parentId, id, e.currentTarget.value)
      ),
    [dispatch]
  );
  const DeleteQuestion = useCallback(
    () => dispatch(ACTION_DELETE_ITEM_QUESTIONS(parentId, id)),
    [dispatch, id]
  );
  return (
    <QuestionLine>
      <DragArea ref={(ref) => drag(drop(ref))}>
        <ItemDragIndicator />
      </DragArea>
      <QuestiionWrap>
        {itemType === CompareItemType.CheckBox && (
          <Checkbox
            disabled
            inputProps={{ "aria-label": "disabled checkbox" }}
          />
        )}
        {itemType === CompareItemType.MultipleChoiceQuestions && (
          <QuestionRadio checked={false} disabled />
        )}
        {itemType === CompareItemType.DropDown && (
          <QUestionNumber>{index + 1}</QUestionNumber>
        )}
        <QuestionTextFiled
          id="standard-basic"
          value={title}
          onChange={ChangeQuestionTitle}
        />
        {!isGrid && (
          <QuestionImage>
            <Image />
          </QuestionImage>
        )}
        <QuestionCancel onClick={DeleteQuestion}>
          <Close />
        </QuestionCancel>
      </QuestiionWrap>
    </QuestionLine>
  );
};
Question.propTypes = {
  parentId: PropType.number.isRequired,
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  drag: PropType.func.isRequired,
  drop: PropType.func.isRequired,
  itemType: PropType.string.isRequired,
  index: PropType.number.isRequired,
  isGrid: PropType.bool.isRequired,
};
