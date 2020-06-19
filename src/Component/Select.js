import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
} from "@material-ui/core";

export default () => (
  <FormControl variant="outlined">
    <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <ListSubheader>Category 1</ListSubheader>
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <ListSubheader>Category 2</ListSubheader>
      <MenuItem value={3}>Option 3</MenuItem>
      <MenuItem value={4}>Option 4</MenuItem>
    </Select>
  </FormControl>
);
