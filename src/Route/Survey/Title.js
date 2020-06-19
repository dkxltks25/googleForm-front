import React from "react";
import { styled, TextField } from "@material-ui/core";
import SurveyCard from "../../Component/SurveyCard";

const Container = styled("div")({
  width: "100%",
});
const Head = styled("div")({
  backgroundColor: "blue",
  borderRadius: "20px 20px 0px 0px",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  height: 10,
  width: "calc(100% - 2px)",
});
const CardWrap = styled("div")({
  padding: 24,
});
const Title = styled(TextField)({
  width: "100%",
});
const Description = styled(TextField)({
  width: "100%",
});
export default () => {
  return (
    <Container>
      <Head />
      <SurveyCard>
        <CardWrap>
          <Title placeholder="설문지 제목" />
          <Description multiline placeholder="설문지설명" />
        </CardWrap>
      </SurveyCard>
    </Container>
  );
};
