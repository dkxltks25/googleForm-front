import React, { useRef } from "react";
import PropType from "prop-types";
import { useDrop, useDrag } from "react-dnd";
import { styled, IconButton, TextField, Radio } from "@material-ui/core";
import { DragIndicator, Image, Cancel } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { ACTION_MOVE_ITEM_QUESTION } from "../../../actions";

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

const QuestionTextFiled = styled(TextField)({
  flexGrow: 2,
});

const QuestionImage = styled(IconButton)({});
const QuestionCancel = styled(IconButton)({});
const DropContainer = styled("div")({});
const DragContainer = styled("div")({});

const ItemDragBox = ({ questions, type, parentId }) => {
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
      {questions.map((question) => (
        <DragQuestion
          key={question.id}
          findQuestion={findQuestion}
          question={question}
          parentId={parentId}
          type={type}
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
};

export default ItemDragBox;

const DragQuestion = ({ findQuestion, question, parentId, type }) => {
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
      // eslint-disable-next-line no-unused-vars
      const { id: dropeedId, originalIndex: originIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        dispatch(ACTION_MOVE_ITEM_QUESTION(parentId, question.id, originIndex));
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
};
/*
  드래그 컨테이너 드롭 area (드래그 한 대상을 놓을 수 있는 공간)
    드래그 할 수 있는 블록들 
      드래그 인디케이터 아이콘
      내용
   
*/

// Question
// eslint-disable-next-line no-unused-vars
const Question = ({ parentId, id, title, drag, drop }) => {
  return (
    <QuestionLine>
      <DragArea ref={(ref) => drag(drop(ref))}>
        <ItemDragIndicator />
      </DragArea>
      <QuestiionWrap>
        <QuestionRadio />
        <QuestionTextFiled id="standard-basic" value={title} />
        <QuestionImage>
          <Image />
        </QuestionImage>
        <QuestionCancel>
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
  drag: PropType.func.isRequired,
  drop: PropType.func.isRequired,
};
