import React, { useState, useCallback } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  styled,
  Divider,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { ACTION_CHANGE_ITEM_TYPE } from "../actions";

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

export default ({ itemType = "3" }) => {
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
          console.log(event.target.value);
          setItemType(event.target.value);
          dispatch(ACTION_CHANGE_ITEM_TYPE(event.target.value));
        }}
      >
        <SelectOption value="0">단답형</SelectOption>
        <SelectOption value="1">장문형</SelectOption>
        <DivideSelect />

        <SelectOption value="2">객관식질문</SelectOption>
        <SelectOption value="3">체크박스</SelectOption>
        <SelectOption value="4">드롭다운</SelectOption>
        <SelectOption value="5">파일업로드</SelectOption>
        <DivideSelect />

        <SelectOption value="6">직선단계</SelectOption>
        <SelectOption value="7">객관식그리드</SelectOption>
        <SelectOption value="8">체크박스그리드</SelectOption>
        <DivideSelect />

        <SelectOption value="9">날짜</SelectOption>
        <SelectOption value="10">시간</SelectOption>
      </Select>
    </Container>
  );
};
