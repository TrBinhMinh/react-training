import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
export default store;
