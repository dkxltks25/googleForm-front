import React from "react";
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

  return (
    <Container onClick={() => dispatch(ACTION_CHANGE_FOCUS(item.id))}>
      <SurveyCard focused={item.focus}>
        <ItemHeader />
        <ItemContent />
        <ItemActionArea />
      </SurveyCard>
    </Container>
  );
};

Item.propTypes = {
  item: PropType.shape({
    id: PropType.number.isRequired,
    focus: PropType.bool.isRequired,
  }).isRequired,
};

export default Item;
