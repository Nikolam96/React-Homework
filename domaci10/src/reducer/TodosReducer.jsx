import {
  TODOS_REJECT,
  TODOS_RESOLVE,
  TODOS_CHECKED,
  TODOS_CHANGE,
} from "../constants/todosConstant";

const InitalState = {
  todos: [],
  message: undefined,
};

const TodosReducer = (state = InitalState, action) => {
  switch (action.type) {
    case TODOS_REJECT:
      return {
        ...state,
        message: action.payload,
      };

    case TODOS_RESOLVE:
      return {
        ...state,
        todos: action.payload,
      };

    case TODOS_CHECKED:
      return {
        ...state,
        todos: state.todos.map((v) => {
          return v.id === action.payload
            ? { ...v, completed: !v.completed }
            : v;
        }),
      };

    case TODOS_CHANGE:
      return {
        ...state,
        todos: state.todos.map((v) => {
          return v.id === action.id ? { ...v, title: action.payload } : v;
        }),
      };

    default:
      return state;
  }
};
export default TodosReducer;
