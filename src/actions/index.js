/*
    리듀서 액션 타입 이름 규칙
    행동(동)_대상(명사)
    행동(동)_대상(명사)_대상(명사)

    대문자
*/
//

/* Drawer 열고 닫기 */
export const toggleColorDrawer = "TOGGLE_COLOR_DRAWER";

export const ACTION_TOGGLE_COLORDRAWER = {
  type: toggleColorDrawer,
};

export const CloseColorDrawer = "CLOSE_COLOR_DRAWER";

export const ACTION_CLOSE_COLOR_DRAWER = {
  type: CloseColorDrawer,
};

/* 테마 색상 */
export const AddThemeColor = "ADD_THEME_COLOR";

export const ACTION_ADD_THEME_COLOR = (color) => ({
  type: AddThemeColor,
  color,
});

/* 테마 선택 */
export const ChoseThemeColor = "CHOSE_THEME_COLOR";

export const CHOSE_THEME_COLOR = (id) => ({
  type: ChoseThemeColor,
  id,
});

/* 배경색상 */
export const ChangeBackgroundColor = "CHANGE_BACKGROUND_COLOR";

export const ACTION_CHANGE_BACKGROUND_COLOR = (color) => ({
  type: ChangeBackgroundColor,
  color,
});

/*
  {
    id:{},backgroundColor:{id,color};
  }
*/

/* 설문지 항목  */

// 항목 추가
export const AddItem = "ADD_ITEM";

export const ACTION_ADD_ITEM = {
  type: AddItem,
};

// 항목 클릭 포커스

export const ChangeFocusItem = "CHANGE_FOCUS_ITEM";

export const ACTION_CHANGE_FOCUS = (id) => {
  return {
    type: ChangeFocusItem,
    id,
  };
};

// 항목 복사

export const CopyFocusItem = "COPY_FOCUS_ITEM";

export const ACTION_COPY_FOCUS_ITEM = {
  type: CopyFocusItem,
};

// 항목 삭제

export const RemoveFocusItem = "REMOVE_FOCUS_ITEM";

export const ACTION_REMOVE_FOCUS_ITEM = {
  type: RemoveFocusItem,
};

// 제목 입력

export const AddItemTitle = "ADD_ITEM_TITLE";

export const ACTION_ADD_ITEM_TITLE = (title) => ({
  type: AddItemTitle,
  title,
});

// 설문지 항목별 옵션 변경
export const ChangeItemType = "CHANGE_ITEM_TYPE";

export const ACTION_CHANGE_ITEM_TYPE = (itemType) => ({
  type: ChangeItemType,
  itemType,
});

// 설문지 항목 드래그 앤 드롭

export const MoveItem = "MOVE_ITEM";

export const ACTION_MOVE_ITEM = (id, targetIndex) => ({
  type: MoveItem,
  id,
  targetIndex,
});

// 객관식 질문 추가
export const AddItemQuestions = "ADD_ITEM_QUESTIONS";

export const ACTION_ADD_ITEM_QUESTIONS = (parentId) => ({
  type: AddItemQuestions,
  parentId,
});

// 아이템 질문(체크박스,객관식,드롭다운) 이름 변경
export const ChangeItemQuestionsTitle = "CHANGE_ITEM_QUESTIONS_TITLE";

export const ACTION_CHANGE_ITEM_QUESTIONS_TITLE = (parentId, id, text) => ({
  type: ChangeItemQuestionsTitle,
  parentId,
  id,
  text,
});

// 아이템 질문(체크박스,객관식,드롭다운) 삭제
export const DeleteItemQuestions = "DELETE_ITEM_QUESTIONS";

export const ACTION_DELETE_ITEM_QUESTIONS = (parentId, id) => ({
  type: DeleteItemQuestions,
  parentId,
  id,
});

/* 설문지 아이템 질문 드래그 앤 드롭 요청 */

export const MoveItemQuestion = "MOVE_ITEM_QUESTION";

export const ACTION_MOVE_ITEM_QUESTION = (parentId, id, targetIndex) => ({
  type: MoveItemQuestion,
  parentId,
  id,
  targetIndex,
});

/* 설문지 아이템 기타 추가 */

export const AddItemQuestionEtc = "ADD_ITEM_QUESTION_ETC";

export const ACTION_ADD_ITEM_QUESTION_ETC = (parentId) => ({
  type: AddItemQuestionEtc,
  parentId,
});

/* 설문지 아이템 기타 삭제 */

export const RemoveItemQuestionEtc = "REMOVE_ITEM_QUESTION_ETC";

export const ACTION_REMOVE_ITEM_QUESTION_ETC = (parentId) => ({
  type: RemoveItemQuestionEtc,
  parentId,
});
