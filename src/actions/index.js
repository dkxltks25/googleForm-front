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
