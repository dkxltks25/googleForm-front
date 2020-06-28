import { combineReducers } from "redux";
import ColorDrawerStore from "./ColorDrawer";
import ChangeColor from "./ChangeColor";
import ThemeColor from "./ThemeColor";
import SurveyItemReducer from "./SurveyItem";

export default combineReducers({
  ColorDrawerStore,
  ChangeColor,
  ThemeColor,
  SurveyItemReducer,
});
