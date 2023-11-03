import { nanoid } from "nanoid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (payload) => {
  return { 
    type: ADD_TODO,
    payload, 
  };
};
export const deleteTodo = (payload) => {
  return { 
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  // console.log(payload, 'payload') // 잘찍히는지 확인
  return { 
    type: TOGGLE_TODO,
    payload,
  };
};

// 초기 상태값
const initialState = [
  {
		id: nanoid(), // id는 모두 고유값이어야 함!
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 복습",
		isDone: false
	},
];

// 리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const afterDeleteList = state.filter((item) => {
        return item.id !== action.payload
      })
      return afterDeleteList;
    case TOGGLE_TODO:
      return state.map((item)=> {
        if (item.id === action.payload) {
          return {...item, isDone: !item.isDone};
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todo;