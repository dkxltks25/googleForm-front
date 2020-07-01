import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  styled,
  Divider,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { ACTION_CHANGE_ITEM_TYPE } from "../actions";
import { itemType as types } from "../word";

const {
  ShortAnswer,
  Long,
  MultipleChoiceQuestions,
  CheckBox,
  DropDown,
  FileUpload,
  StraightStep,
  MultipleChoiceGrid,
  CheckBoxGrid,
  date,
  time,
} = types;
const Container = styled(FormControl)({
  flexGrow: 0.5,
  width: 100,
});

const SelectOption = styled(MenuItem)({
  padding: 8,
});

const DivideSelect = styled(Divider)({
  padding: 8,
});

export default ({ itemType }) => {
  const [ItemTypeValue, setItemType] = useState(itemType);
  const dispatch = useDispatch();
  // const ChangeItemType = useCallback(() => {
  //   console.log(ItemTypeValue, "--");
  // }, [dispatch]);
  return (
    <Container variant="outlined">
      <Select
        id="demo-simple-select"
        value={ItemTypeValue}
        onChange={(event) => {
          setItemType(event.target.value);
          dispatch(ACTION_CHANGE_ITEM_TYPE(event.target.value));
        }}
      >
        <SelectOption value={ShortAnswer}>단답형</SelectOption>
        <SelectOption value={Long}>장문형</SelectOption>
        <DivideSelect />

        <SelectOption value={MultipleChoiceQuestions}>객관식질문</SelectOption>
        <SelectOption value={CheckBox}>체크박스</SelectOption>
        <SelectOption value={DropDown}>드롭다운</SelectOption>
        <SelectOption value={FileUpload}>파일업로드</SelectOption>
        <DivideSelect />

        <SelectOption value={StraightStep}>직선단계</SelectOption>
        <SelectOption value={MultipleChoiceGrid}>객관식그리드</SelectOption>
        <SelectOption value={CheckBoxGrid}>체크박스그리드</SelectOption>
        <DivideSelect />

        <SelectOption value={date}>날짜</SelectOption>
        <SelectOption value={time}>시간</SelectOption>
      </Select>
    </Container>
  );
};
