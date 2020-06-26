import { combineReducers } from "redux";
import ColorDrawerStore from "./ColorDrawer";
import ChangeColor from "./ChangeColor";
import ThemeColor from "./ThemeColor";

export default combineReducers({
  ColorDrawerStore,
  ChangeColor,
  ThemeColor,
});
