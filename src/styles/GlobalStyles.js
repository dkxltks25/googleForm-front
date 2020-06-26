import React from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

const GlobalStyles = createGlobalStyle((props) => {
  return {
    body: {
      background: props.BackgrounColor,
    },
  };
});

export default () => {
  const BgColor = useSelector((state) => {
    console.log(state);
    return state.ChangeColor;
  });
  return <GlobalStyles BackgrounColor={BgColor} />;
};
