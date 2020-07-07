import React, { useCallback, useRef } from "react";
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
  const originalIndex = findItem(item.id);
  // eslint-disable-next-line no-unused-vars
  const [{ isDragging, canDrag }, drag, preview] = useDrag({
    item: { type: dataType.item, id: item.id, originalIndex },
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
  const DropRef = useRef(null);
  drag(drop(DropRef));
  return (
    <Container
      onClick={() => {
        // 중복되는 액션 전달 막기
        if (item.focus) {
          return;
        }
        ChangeFocus();
      }}
      ref={preview}
    >
      <SurveyCard focused={item.focus}>
        <ItemHeader
          title={item.title}
          itemType={item.itemType}
          focused={item.focus}
          dropRef={DropRef}
        />
        <ItemContent
          id={item.id}
          itemType={item.itemType}
          questions={item.questions}
          isEtc={item.isEtc}
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
    questions: PropType.array.isRequired,
    isEtc: PropType.bool.isRequired,
  }).isRequired,
  findItem: PropType.func.isRequired,
};

export default Item;
