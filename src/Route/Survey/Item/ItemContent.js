import React from "react";
import { styled } from "@material-ui/core";

import ShortAnswer from "../ItemContentTypes/ShortAnser";
import { itemType as types } from "../../../word";

const Container = styled("div")({
  width: "100%",
});

const ItemTypeIsA = () => "단답형";
const ItemTypeIsB = () => "장문형";
const ItemTypeIsC = () => "객관식질문";
const ItemTypeIsD = () => "체크박스";
const ItemTypeIsE = () => "드롭다운";
const ItemTypeIsF = () => "파일업로드";
const ItemTypeIsG = () => "직선단계";
const ItemTypeIsH = () => "객관식그리드";
const ItemTypeIsI = () => "체크박스그리드";
const ItemTypeIsJ = () => "날짜";
const ItemTypeIsK = () => "시간";

const ItemTypes = ({ itemType }) => {
  switch (itemType) {
    case types.ShortAnswer:
      return <ShortAnswer />;
    case types.Long:
      return <ItemTypeIsB />;
    case types.MultipleChoiceQuestions:
      return <ItemTypeIsC />;
    case types.CheckBox:
      return <ItemTypeIsD />;
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

export default ({ itemType, question }) => (
  <Container onMouseDown={(e) => e.preventDefault()}>
    <ItemTypes itemType={itemType} />
  </Container>
);
