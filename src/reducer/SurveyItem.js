import {
  AddItem,
  ChangeFocusItem,
  CopyFocusItem,
  RemoveFocusItem,
  AddItemTitle,
  ChangeItemType,
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
function removeFocusedItem(state) {
  const focusedIndex = state.map((item) => item.focus).indexOf(true);
  return state
    .filter(({ focus }) => !focus)
    .map((item, index) => {
      if (focusedIndex === 0) return { ...item, focus: true };
      if (focusedIndex === index + 1) return { ...item, focus: true };
      return item;
    });
}

/* 제목 입력 */

function addItemTitle(state, title) {
  return state.map((item) => (item.focus ? { ...item, title } : item));
}

/* 항목 타입 설정 */

function changeItemType(state, itemType) {
  console.log(itemType, "itemType");
  return state.map((item) => (item.focus ? { ...item, itemType } : item));
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
        if (!item.focus && item.id === action.id) {
          return { ...item, focus: true };
        }
        // focus가 true인 경우
        if (item.focus && item.id !== action.id) {
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
      return removeFocusedItem(state);
    case AddItemTitle:
      return addItemTitle(state, action.title);
    case ChangeItemType:
      return changeItemType(state, action.itemType);
    default:
      return state;
  }
};
export default SurveyItemReducer;
