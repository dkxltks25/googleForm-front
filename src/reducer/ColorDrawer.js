import { toggleColorDrawer } from "../actions";

const reducer = (state = false, action) => {
  switch (action.type) {
    case toggleColorDrawer:
      return !state;
    default:
      return state;
  }
};

export default reducer;
