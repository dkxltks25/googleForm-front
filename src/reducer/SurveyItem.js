import { AddItem, ChangeFocusItem, CopyFocusItem } from "../actions";

let countedId = 1;
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
    focus: true,
  };
}

const SurveyItemReducer = (state = InitalState, action) => {
  switch (action.type) {
    // 항목추가
    case AddItem:
      countedId += 1;
      return [].concat(
        ...state.map((item) =>
          item.focus
            ? [{ ...item, focus: false }, getEmptySurvey(countedId)]
            : item
        )
      );
    // 포커스변경
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
    // 포커스된 항목 복사
    case CopyFocusItem:
      countedId += 1;
      return [].concat(
        ...state.map((item) =>
          item.focus
            ? [
              { ...item, focus: false },
              { ...item, id: countedId, focus: true },
              ]
            : item
        )
      );
    default:
      return state;
  }
};
export default SurveyItemReducer;
