import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import FormCard from "../Component/FormCard";
const Container = styled.div`
  width: 100%;
  margin: 0px auto;
`;
const SampleForm = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #f1f3f4;
`;
const SampleFormWrapper = styled.div`
  padding: 20px;
  width: 60%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
`;
const UserForm = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #fff;
`;

const useStyle = makeStyles({
  root: {
    maxWidth: 180,
    minHeight: 180,
    backgroundColor: "#fff",
    border: 3,
    borderColor: "black",
    borderRadius: 1,
    boxShadow: "none",
  },
});
export default () => {
  const classes = useStyle();
  return (
    <Container>
      <SampleForm>
        <SampleFormWrapper>
          <FormCard />
          <FormCard />
          <FormCard />
          <FormCard />
        </SampleFormWrapper>
      </SampleForm>
      <UserForm />
    </Container>
  );
};
