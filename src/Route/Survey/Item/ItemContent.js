import React from "react";
import { styled } from "@material-ui/core";
import PropType from "prop-types";

import ShortAnswer from "../ItemContentTypes/ShortAnser";
import Long from "../ItemContentTypes/Long";
import MultipleChoiceQuestions from "../ItemContentTypes/MultipleChoiceQuestions";
import CheckBox from "../ItemContentTypes/CheckBox";
import DropDown from "../ItemContentTypes/DropDown";
import MultipleChoiceGrid from "../ItemContentTypes/MultipleChoiceGrid";
import StraihtStep from "../ItemContentTypes/StraightStep";
import { itemType as types } from "../../../word";

const Container = styled("div")({
  width: "100%",
});

const ItemTypeIsA = () => "단답형";
const ItemTypeIsF = () => "파일업로드";
const ItemTypeIsI = () => "체크박스그리드";
const ItemTypeIsJ = () => "날짜";
const ItemTypeIsK = () => "시간";

// eslint-disable-next-line react/prop-types
const ItemTypes = ({ itemType, id, questions, isEtc, step,grid }) => {
  switch (itemType) {
    case types.ShortAnswer:
      return <ShortAnswer />;
    case types.Long:
      return <Long />;
    case types.MultipleChoiceQuestions:
      return (
        <MultipleChoiceQuestions id={id} questions={questions} isEtc={isEtc} />
      );
    case types.CheckBox:
      return <CheckBox id={id} questions={questions} isEtc={isEtc} />;
    case types.DropDown:
      return <DropDown id={id} questions={questions} />;
    case types.FileUpload:
      return <ItemTypeIsF />;
    case types.StraightStep:
      return <StraihtStep id={id} step={step} />;
    case types.MultipleChoiceGrid:
      return <MultipleChoiceGrid id={id} grid={grid}  />;
    case types.CheckBoxGrid:
      return <ItemTypeIsI />;
    case types.date:
      return <ItemTypeIsJ />;
    case types.time:
      return <ItemTypeIsK />;
    default:
      return <ItemTypeIsA />;
  }
};

const ItemContent = ({ itemType, questions, id, isEtc, step, grid }) => (
  <Container>
    <ItemTypes
      itemType={itemType}
      questions={questions}
      id={id}
      isEtc={isEtc}
      step={step}
      grid={grid}
    />
  </Container>
);

ItemContent.propTypes = {
  itemType: PropType.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  questions: PropType.array.isRequired,
  id: PropType.number.isRequired,
  isEtc: PropType.bool.isRequired,
  step: PropType.shape({}).isRequired,
  grid: PropType.shape({}).isRequired,
};

export default ItemContent;
