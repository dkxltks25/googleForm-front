import { AddItem, ChangeFocusItem } from "../actions";

const InitalState = [
  {
    id: 1,
    itemType: "1",
    title: "",
    description: "",
    focus: true,
  },
];

function getEmptySurvey(id) {
  return {
    id,
    itemType: "1",
    title: "",
    description: "",
    focus: false,
  };
}
const SurveyItemReducer = (state = InitalState, action) => {
  switch (action.type) {
    case AddItem:
      return [...state, getEmptySurvey(state.length + 1)];
    case ChangeFocusItem:
      return state.map((item) => {
        // 지정한 item경우
        if (item.id === action.id) {
          return { ...item, focus: true };
        }
        // focus가 true인 경우
        if (item.focus) {
          return { ...item, focus: false };
        }
        return item;
      });
    default:
      return state;
  }
};

export default SurveyItemReducer;
