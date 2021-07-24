import { ADD_TASK, DELETE_TASK } from "../actions";

const INITIAL_STATE = {
  items: [],
  completedItems: []
}

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TASK:
      return {...state, items: [...state.items, action.task] }
    case DELETE_TASK:
      return {...state, items: state.items.filter((item, index) => item !== action.task) }
    default:
      return state;
  }
}

export default todoReducer;
