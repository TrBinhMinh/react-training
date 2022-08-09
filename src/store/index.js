import { createStore } from "redux";

const redux = require("redux");

const counterReducer = function (state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};
export const store = redux.createStore(counterReducer);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
export default store;
