import React from "react";
import { styled } from "@material-ui/core";
import PropType from "prop-types";

import ItemDragBox from "./ItemDragBox";
import dataType from "../Item/ItemDragType";
import { itemType } from "../../../word";

const Container = styled("div")({
  paddingTop: 24,
  paddingBottom: 24,
  paddingRight: 24,
  display: "flex",
});

const RowContainer = styled("div")({
  width: "50%",
});
const ColumnContainer = styled("div")({
  width: "50%",
});

const rows = [{ id: 1, title: "" }];
const column = [{ id: 1, title: "" }];
const MultipleChoiceGrid = ({ id, grid }) => {
  return (
    <Container>
      <RowContainer>
        <ItemDragBox
          questions={rows}
          parentId={id}
          type={dataType.question}
          itemType={itemType.DropDown}
          isGrid
        />
      </RowContainer>
      <ColumnContainer>
        <ItemDragBox
          questions={column}
          parentId={id}
          type={dataType.question}
          itemType={itemType.MultipleChoiceQuestions}
          isGrid
        />
      </ColumnContainer>
    </Container>
  );
};
MultipleChoiceGrid.propTypes = {
  id: PropType.number.isRequired,
  grid: PropType.objectOf({
    row: PropType.arrayOf({}).isRequired,
    column: PropType.arrayOf({}).isRequired,
  }).isRequired,
};

export default MultipleChoiceGrid;
