import React from "react";
import {FormControl,InputLabel,Select,MenuItem} from "@material-ui/core"
export default () => (
  <FormControl variant="outlined">
    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      label="Age"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
);
