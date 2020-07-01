import update from "immutability-helper";

import { itemType as types } from "../word";

import {
  AddItem,
  ChangeFocusItem,
  CopyFocusItem,
  RemoveFocusItem,
  AddItemTitle,
  ChangeItemType,
  MoveItem,
} from "../actions";

let countedId = 1;
const InitalState = [
  {
    id: 1,
    itemType: types.ShortAnswer,
    title: "",
    description: "",
    focus: true,
    question: [
      {
        id: 1,
      },
    ],
  },
];

function getEmptySurvey(id) {
  return {
    id,
    itemType: types.ShortAnswer,
    title: "",
    description: "",
    focus: true,
    question: [
      {
        id: 1,
      },
    ],
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
  return state.map((item) => (item.focus ? { ...item, itemType } : item));
}

// 항목 찾기(id)
function findItem(state, id) {
  const item = state.filter((i) => i.id === id)[0]; // 정수형 Id라 문자 id 변경
  return {
    item,
    index: state.indexOf(item),
  };
}
/* 항목 위치 변경 */
function moveItem(state, id, targetIndex) {
  const { item, index } = findItem(state, id);
  return update(state, {
    $splice: [
      [index, 1],
      [targetIndex, 0, item],
    ],
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
    case RemoveFocusItem: // 포커스된 항목 삭제
      return removeFocusedItem(state);
    case AddItemTitle: // 제목 추가
      return addItemTitle(state, action.title);
    case ChangeItemType: // 설문지 항목 아이템 변경
      return changeItemType(state, action.itemType);
    case MoveItem: // 설문지 위치 변경
      return moveItem(state, action.id, action.targetIndex);
    default:
      return state;
  }
};
export default SurveyItemReducer;
