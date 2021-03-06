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
  AddItemQuestions,
  ChangeItemQuestionsTitle,
  DeleteItemQuestions,
  MoveItemQuestion,
  AddItemQuestionEtc,
  RemoveItemQuestionEtc,
  ChangeItemStep,
  ChangeItemStepLabel,
  AddItemGrid,
  DeleteItemGrid,
  ChangeItemGrid,
  MoveItemGrid,
} from "../actions";

let ItemId = 1;
let QuestionId = 1;
let rowId = 1;
let columnId = 1;
const InitalState = [
  {
    id: 1,
    itemType: types.MultipleChoiceGrid,
    title: "",
    description: "",
    focus: true,
    isEtc: false, // 기타 옵션 있는지 없는지
    step: {
      startValue: 0,
      startLabel: "",
      finishValue: 5,
      finishLabel: "",
    },
    questions: [
      {
        id: 1,
        title: "",
      },
    ],
    grid: {
      row: [],
      column: [],
    },
  },
];

function getEmptySurvey(id) {
  return {
    id,
    itemType: types.ShortAnswer,
    title: "",
    description: "",
    focus: true,
    isEtc: false, // 기타 옵션 있는지 없는지
    step: {
      startValue: 0,
      startLabel: "",
      finishValue: 5,
      finishLabel: "",
    },
    questions: [
      {
        id: 1,
        title: "",
      },
    ],
    grid: {
      row: [],
      column: [],
    },
  };
}
function getEmptyQuestion(id) {
  return {
    id,
    title: "",
  };
}

/* 아이템 추가 */
function addItem(state) {
  ItemId += 1;
  return [].concat(
    ...state.map((item) =>
      item.focus ? [{ ...item, focus: false }, getEmptySurvey(ItemId)] : item
    )
  );
}

/* 아에팀 포커스 변경 */
function changeFocusItem(state, id) {
  return state.map((item) => {
    // 지정한 item경우
    if (!item.focus && item.id === id) {
      return { ...item, focus: true };
    }
    // focus가 true인 경우
    if (item.focus && item.id !== id) {
      return { ...item, focus: false };
    }
    return item;
  });
}

/* 포커스된 항목 복사 */
function copyFocusItem(state) {
  ItemId += 1;
  return [].concat(
    ...state.map((item) =>
      item.focus
        ? [
            { ...item, focus: false },
            { ...item, id: ItemId, focus: true },
          ]
        : item
    )
  );
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

/* 객관식 질문 추가 */
function addItemQuestions(state, parentId) {
  QuestionId += 1;
  return state.map((item) =>
    item.id === parentId
      ? {
          ...item,
          questions: [...item.questions, getEmptyQuestion(QuestionId)],
        }
      : item
  );
}
/* 객관식 질문 제목명 변경 */
function changeItemQuestionsTitle(state, parentId, id, text) {
  return state.map((item) =>
    item.id === parentId
      ? {
          ...item,
          questions: item.questions.map((question) =>
            question.id === id ? { ...question, title: text } : question
          ),
        }
      : item
  );
}
/* 객관식 질문 삭제 */
function deleteItemQuestions(state, parentId, id) {
  return state.map((item) =>
    item.id === parentId
      ? {
          ...item,
          questions: item.questions.filter((question) => question.id !== id),
        }
      : item
  );
}

// 아이템의 질문 찾기
function findItemQuestion(state, parentId, id) {
  const [{ questions }] = state.filter((item) => item.id === parentId);
  const item = questions.filter((i) => i.id === id)[0];
  return {
    item,
    index: questions.indexOf(item),
  };
}

// 객관식 질문 드래그 앤 드롭
function moveItemQuestion(state, parentId, id, targetIndex) {
  const { item, index } = findItemQuestion(state, parentId, id);
  return state.map((parentItem) =>
    parentItem.id === parentId
      ? {
          ...parentItem,
          questions: update(parentItem.questions, {
            $splice: [
              [index, 1],
              [targetIndex, 0, item],
            ],
          }),
        }
      : parentItem
  );
}

// 기타 질문 추가
function addItemQuestionEtc(state, parentId) {
  return state.map((item) =>
    item.id === parentId ? { ...item, isEtc: true } : item
  );
}

// 기타 질문 삭제
function removeItemQuestionEtc(state, parentId) {
  return state.map((item) =>
    item.id === parentId ? { ...item, isEtc: false } : item
  );
}

// 직선단계 범위 번경
function changeItemStep(state, id, position, value) {
  const key = position === "start" ? "startValue" : "finishValue";
  return state.map((item) =>
    item.id === id
      ? {
          ...item,
          step: {
            ...item.step,
            [key]: value,
          },
        }
      : item
  );
}
// 직선단계 라벨 변경
function changeItemStepLabel(state, id, position, text) {
  const key = position === "start" ? "startLabel" : "finishLabel";
  return state.map((item) =>
    item.id === id
      ? {
          ...item,
          step: {
            ...item.step,
            [key]: text,
          },
        }
      : item
  );
}

// 그리드 열 추가
function addItemGrid(state, id, target) {
  if (target === "row") rowId += 1;
  else if (target === "column") columnId += 1;
  else return state;

  return state.map((item) => (item.id === id ? {
    ...item,
    grid:[
      ...item.grid,
      [target]: [1]
    ]
  } : item));
}

const SurveyItemReducer = (state = InitalState, action) => {
  switch (action.type) {
    case AddItem: // 항목추가
      return addItem(state);
    case ChangeFocusItem: // 포커스변경
      return changeFocusItem(state, action.id);
    case CopyFocusItem: // 포커스된 항목 복사
      return copyFocusItem(state);
    case RemoveFocusItem: // 포커스된 항목 삭제
      return removeFocusedItem(state);
    case AddItemTitle: // 제목 추가
      return addItemTitle(state, action.title);
    case ChangeItemType: // 설문지 항목 아이템 변경
      return changeItemType(state, action.itemType);
    case MoveItem: // 설문지 위치 변경
      return moveItem(state, action.id, action.targetIndex);
    case AddItemQuestions: // 설문지 항목 추가
      return addItemQuestions(state, action.parentId);
    case ChangeItemQuestionsTitle:
      return changeItemQuestionsTitle(
        state,
        action.parentId,
        action.id,
        action.text
      );
    case DeleteItemQuestions: // 설문지 항목 삭제
      return deleteItemQuestions(state, action.parentId, action.id);
    case MoveItemQuestion:
      return moveItemQuestion(
        state,
        action.parentId,
        action.id,
        action.targetIndex
      );
    case AddItemQuestionEtc:
      return addItemQuestionEtc(state, action.parentId);
    case RemoveItemQuestionEtc:
      return removeItemQuestionEtc(state, action.parentId);
    case ChangeItemStep:
      return changeItemStep(state, action.id, action.position, action.value);
    case ChangeItemStepLabel:
      return changeItemStepLabel(
        state,
        action.id,
        action.position,
        action.text
      );
    case AddItemGrid:
      return state;
    case DeleteItemGrid:
      return state;
    case ChangeItemGrid:
      return state;
    case MoveItemGrid:
      return state;
    default:
      return state;
  }
};
export default SurveyItemReducer;
