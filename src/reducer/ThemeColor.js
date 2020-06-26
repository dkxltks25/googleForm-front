import { AddThemeColor } from "../actions";

const initalState = [
  { id: 1, color: "#db4437 ", checked: true, origin: true },
  { id: 2, color: "#673ab7 ", checked: false, origin: true },
  { id: 3, color: "#3f51b5 ", checked: false, origin: true },
  { id: 4, color: "#4285f4 ", checked: false, origin: true },
  { id: 5, color: "#03a9f4 ", checked: false, origin: true },
  { id: 6, color: "#00bcd4 ", checked: false, origin: true },
  { id: 7, color: "#ff5722 ", checked: false, origin: true },
  { id: 8, color: "#ff9800 ", checked: false, origin: true },
  { id: 9, color: "#009688 ", checked: false, origin: true },
  { id: 10, color: "#4caf50 ", checked: false, origin: true },
  { id: 11, color: "#607d8b ", checked: false, origin: true },
  { id: 12, color: "#9e9e9e", checked: false, origin: true },
];

const ThemeColorReducer = (state = initalState, action) => {
  switch (action.type) {
    case AddThemeColor:
      return [
        ...state,
        {
          id: state.length + 1,
          color: action.color,
          checked: false,
          origin: false,
        },
      ];
    default:
      return state;
  }
};

export default ThemeColorReducer;
