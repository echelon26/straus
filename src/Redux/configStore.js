import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import diagnosis from "./diagnosis";

const rootReducer = combineReducers({
  diagnosis,
});

export const store = configureStore({
  reducer: rootReducer,
});
