import React, { useState } from "react";
import {
  styled,
  Select,
  MenuItem,
  Typography,
  TextField,
} from "@material-ui/core";

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
     paddingBottom: 10 
    });
const DisplayNumber = styled(Typography)({
  paddingTop: 4,
  paddingRight: 10,
});
const InputNumber = styled(TextField)({});

const StraihtStep = (props) => {
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(5);
  return (
    <Container>
      <SelectStepArea>
        <NumberRange value={first} onChange={(e) => setFirst(e.target.value)}>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
        </NumberRange>
        <Typography>~</Typography>
        <NumberRange value={last} onChange={(e) => setLast(e.target.value)}>
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
          <DisplayNumber>{first}</DisplayNumber>
          <InputNumber />
        </InputLine>
        <InputLine>
          <DisplayNumber>{last}</DisplayNumber>
          <InputNumber />
        </InputLine>
      </InputLabelArea>
    </Container>
  );
};

export default StraihtStep;
