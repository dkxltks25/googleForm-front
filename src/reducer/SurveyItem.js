import { AddItem } from "../actions";

const InitalState = [
  {
    id: 1,
    itemType: "1",
    title: "",
    description: "",
  },
];

function getEmptySurvey(id) {
  return {
    id,
    itemType: "1",
    title: "",
    description: "",
  };
}
const SurveyItemReducer = (state = InitalState, action) => {
  switch (action.type) {
    case AddItem:
      return [...state, getEmptySurvey(state.length+1)];
    default:
      return state;
  }
};

export default SurveyItemReducer;
