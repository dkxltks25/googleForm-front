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
