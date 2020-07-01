import React from "react";
import { styled } from "@material-ui/core";

import Question from "../Question";

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
  switch (parseInt(itemType,10)) {
    case 0:
      return <ItemTypeIsA />;
    case 1:
      return <ItemTypeIsB />;
    case 2:
      return <ItemTypeIsC />;
    case 3:
      return <ItemTypeIsD />;
    case 4:
      return <ItemTypeIsE />;
    case 5:
      return <ItemTypeIsF />;
    case 6:
      return <ItemTypeIsG />;
    case 7:
      return <ItemTypeIsH />;
    case 8:
      return <ItemTypeIsI />;
    case 9:
      return <ItemTypeIsJ />;
    case 10:
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
