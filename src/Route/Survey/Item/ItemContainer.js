import React from "react";
import { useSelector } from "react-redux";

import ItemPresenter from "./ItemPresenter";

export default () => {
  const Items = useSelector((state) => state.SurveyItemReducer);
  return Items.map((item) => <ItemPresenter item={item} />);
};
