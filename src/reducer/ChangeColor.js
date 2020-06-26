import { ChangeBackgroundColor } from "../actions";

const initialState = "#efefef";

const ChangeColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ChangeBackgroundColor:
      return action.color;
    default:
      return state;
  }
};

export default ChangeColorReducer;
