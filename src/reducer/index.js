import { combineReducers } from "redux";
import ColorDrawerStore from "./ColorDrawer";
import ChangeColor from "./ChangeColor";

export default combineReducers({
  ColorDrawerStore,
  ChangeColor,
});
