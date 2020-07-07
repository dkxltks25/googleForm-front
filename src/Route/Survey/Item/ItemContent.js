import React from "react";
import { styled } from "@material-ui/core";
import PropType from "prop-types";

import ShortAnswer from "../ItemContentTypes/ShortAnser";
import Long from "../ItemContentTypes/Long";
import MultipleChoiceQuestions from "../ItemContentTypes/MultipleChoiceQuestions";
import CheckBox from "../ItemContentTypes/CheckBox";
import { itemType as types } from "../../../word";

const Container = styled("div")({
  width: "100%",
});

const ItemTypeIsA = () => "단답형";
const ItemTypeIsE = () => "드롭다운";
const ItemTypeIsF = () => "파일업로드";
const ItemTypeIsG = () => "직선단계";
const ItemTypeIsH = () => "객관식그리드";
const ItemTypeIsI = () => "체크박스그리드";
const ItemTypeIsJ = () => "날짜";
const ItemTypeIsK = () => "시간";

// eslint-disable-next-line react/prop-types
const ItemTypes = ({ itemType, id, questions, isEtc }) => {
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
      return <ItemTypeIsE />;
    case types.FileUpload:
      return <ItemTypeIsF />;
    case types.StraightStep:
      return <ItemTypeIsG />;
    case types.MultipleChoiceGrid:
      return <ItemTypeIsH />;
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

const ItemContent = ({ itemType, questions, id, isEtc }) => (
  <Container>
    <ItemTypes
      itemType={itemType}
      questions={questions}
      id={id}
      isEtc={isEtc}
    />
  </Container>
);

ItemContent.propTypes = {
  itemType: PropType.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  questions: PropType.array.isRequired,
  id: PropType.number.isRequired,
  isEtc: PropType.bool.isRequired,
};

export default ItemContent;
