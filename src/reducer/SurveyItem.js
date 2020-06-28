import {
  AddItem,
  ChangeFocusItem,
  CopyFocusItem,
  RemoveFocusItem,
} from "../actions";

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
/* 삭제  */
// 삭제 순서
// 1 2 3 4 5 (5,5번째,5)
function deleteFocusedItem(state) {
  const findById = state.map((item) => item.focus).indexOf(true) + 1; // 0
  const Length = state.length; //
  state.filter((item, index) => {
    if (findById === Length) {
      if (index + 1 === Length) {
        return { ...item, focus: true };
      } else {
      }
      return item;
    }
    return item;
  });
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
    // 포커스된 항목 삭제
    case RemoveFocusItem:
      return state;
    default:
      return state;
  }
};
export default SurveyItemReducer;
