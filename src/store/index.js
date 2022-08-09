const redux = require("redux");

const counterReducer = function (state = { counter: 0 }, action) {
  return {
    counter: state,
  };
};

const store = redux.createStore(counterReducer);
