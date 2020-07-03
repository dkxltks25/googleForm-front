import React, { useCallback, useRef, forwardRef } from "react";
import { styled } from "@material-ui/core";
import PropType from "prop-types";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import SurveyCard from "../../../Component/SurveyCard";
import ItemHeader from "./ItemHeader";
import ItemContent from "./ItemContent";
import ItemActionArea from "./ItemActionArea";
import { ACTION_CHANGE_FOCUS, ACTION_MOVE_ITEM } from "../../../actions";
import dataType from "./ItemDragType";

const Container = styled("div")({
  marginTop: 12,
});

const Item = ({ item, findItem }) => {
  const dispatch = useDispatch();
  const ChangeFocus = useCallback(() => {
    dispatch(ACTION_CHANGE_FOCUS(item.id));
  }, [item.id, dispatch]);
  // const dragRef = useRef(null);
  const originalIndex = findItem(item.id);
  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag] = useDrag({
    item: { type: dataType.item, id: item.id, originalIndex },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
    end: (dropResult, monitor) => {
      const { id: dropeedId, originalIndex: originIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        dispatch(ACTION_MOVE_ITEM(dropeedId, originIndex));
      }
    },
  });
  const [, drop] = useDrop({
    accept: dataType.item,
    canDrop: false,
    hover({ id: draggedId }) {
      if (draggedId !== item.id) {
        const { index: overIndex } = findItem(item.id);
        dispatch(ACTION_MOVE_ITEM(draggedId, overIndex));
      }
    },
  });

  return (
    <Container onClick={ChangeFocus} ref={(ref) => drag(drop(ref))}>
      <SurveyCard focused={item.focus}>
        <ItemHeader
          title={item.title}
          itemType={item.itemType}
          focused={item.focus}
        />
        <ItemContent
          id={item.id}
          itemType={item.itemType}
          question={item.question}
        />
        {item.focus && <ItemActionArea />}
      </SurveyCard>
    </Container>
  );
};

Item.propTypes = {
  item: PropType.shape({
    id: PropType.number.isRequired,
    focus: PropType.bool.isRequired,
    title: PropType.string.isRequired,
    itemType: PropType.string.isRequired,
    question: PropType.array.isRequired,
  }).isRequired,
  findItem: PropType.func.isRequired,
};

export default Item;