import React, { useRef } from "react";
import PropType from "prop-types";
import { useDrop, useDrag } from "react-dnd";

import { useDispatch } from "react-redux";
import { ACTION_MOVE_ITEM_QUESTION } from "../../../actions";

const ItemDragBox = ({ children, question, type, findQuestion, parentId }) => {
  const dispatch = useDispatch();
  const dropAreaRef = useRef(null);

  const originalIndex = findQuestion(question.id);
  const [{ isDragging }, drag] = useDrag({
    item: { type, id: question.id, originalIndex },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
    end: (dropResult, monitor) => {
      const { id: dropeedId, originalIndex: originIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        //dispatch(ACTION_MOVE_ITEM_QUESTION(parentId, question.id, originIndex));
      }
    },
  });
  const [, drop] = useDrop({
    accept: type,
    canDrop: false,
    hover({ id: draggedId }) {
      if (draggedId !== question.id) {
        const { index: overIndex } = findQuestion(question.id);
        dispatch(ACTION_MOVE_ITEM_QUESTION(parentId, question.id, overIndex));
      }
    },
  });
  drag(drop(dropAreaRef));
  return (
    <div ref={dropAreaRef}>
      <div>{children}</div>
    </div>
  );
};

ItemDragBox.propTypes = {
  children: PropType.node.isRequired,
  type: PropType.string.isRequired,
  findQuestion: PropType.func.isRequired,
  question: PropType.shape({
    id: PropType.number.isRequired,
  }).isRequired,
  parentId: PropType.number.isRequired,
};

export default ItemDragBox;
