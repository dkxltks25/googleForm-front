import React, { useCallback } from "react";
import { styled } from "@material-ui/core";
import PropType from "prop-types";
import { useDispatch } from "react-redux";

import SurveyCard from "../../Component/SurveyCard";
import ItemHeader from "./ItemHeader";
import ItemContent from "./ItemContent";
import ItemActionArea from "./ItemActionArea";
import { ACTION_CHANGE_FOCUS } from "../../actions";

const Container = styled("div")({
  marginTop: 12,
});

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const ChangeFocus = useCallback(() => {
    dispatch(ACTION_CHANGE_FOCUS(item.id));
  }, [item.id, dispatch]);
  return (
    <Container onClick={ChangeFocus}>
      <SurveyCard focused={item.focus}>
        <ItemHeader
          title={item.title}
          itemType={item.itemType}
          focused={item.focus}
        />
        <ItemContent />
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
  }).isRequired,
};

export default Item;
