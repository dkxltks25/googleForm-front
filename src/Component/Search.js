import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
const Container = styled.div`
  max-width: 750px;
  height: 46px;
  width: 100%;
  background-color: #f1f3f4;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
`;

const useStyle = makeStyles({
  search: {
    padding: 8,
    margin: 3,
    color: "#5f6368",
  },
});
const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  width: 100%;
`;
export default () => {
  const classes = useStyle();
  return (
    <Container>
      <Search className={classes.search} />
      <Input placeholder="검색" />
    </Container>
  );
};
