import React, { useCallback } from "react";
import {
  styled,
  Select,
  MenuItem,
  Typography,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import PropType from "prop-types";

import {
  ACTION_CHANGE_ITEM_STEP,
  ACTION_CHANGE_ITEM_STEP_LABEL,
} from "../../../actions";

const Container = styled("div")({
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 24,
});
const NumberRange = styled(Select)({
  textAlign: "center",
  minWidth: 80,
});

const SelectStepArea = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  paddingBottom: 30,
  maxWidth: 300,
});
const InputLabelArea = styled("div")({});

const InputLine = styled("div")({
  display: "flex",
  paddingBottom: 10,
});
const DisplayNumber = styled(Typography)({
  paddingTop: 4,
  paddingRight: 10,
  minWidth: 20,
});
const InputNumber = styled(TextField)({});

const START = "start";
const FINISH = "finish";

const StraihtStep = ({
  id,
  step: { startValue, finishValue, startLabel, finishLabel },
}) => {
  const dispatch = useDispatch();

  const ChangeFirstRange = useCallback((e) => {
    dispatch(ACTION_CHANGE_ITEM_STEP(id, START, e.target.value));
  });
  const ChangeFinishRange = useCallback((e) => {
    dispatch(ACTION_CHANGE_ITEM_STEP(id, FINISH, e.target.value));
  });
  const ChangeFirstLabel = useCallback((e) => {
    dispatch(ACTION_CHANGE_ITEM_STEP_LABEL(id, START, e.currentTarget.value));
  });
  const ChangeFinishLabel = useCallback((e) => {
    dispatch(ACTION_CHANGE_ITEM_STEP_LABEL(id, FINISH, e.currentTarget.value));
  });
  return (
    <Container>
      <SelectStepArea>
        <NumberRange value={startValue} onChange={ChangeFirstRange}>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
        </NumberRange>
        <Typography>~</Typography>
        <NumberRange value={finishValue} onChange={ChangeFinishRange}>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </NumberRange>
      </SelectStepArea>
      <InputLabelArea>
        <InputLine>
          <DisplayNumber>{startValue}</DisplayNumber>
          <InputNumber value={startLabel} onChange={ChangeFirstLabel} />
        </InputLine>
        <InputLine>
          <DisplayNumber>{finishValue}</DisplayNumber>
          <InputNumber value={finishLabel} onChange={ChangeFinishLabel} />
        </InputLine>
      </InputLabelArea>
    </Container>
  );
};

StraihtStep.propTypes = {
  id: PropType.number.isRequired,
  step: PropType.shape({
    startValue: PropType.number.isRequired,
    startLabel: PropType.string.isRequired,
    finishValue: PropType.number.isRequired,
    finishLabel: PropType.string.isRequired,
  }).isRequired,
};

export default StraihtStep;
