import { combineReducers } from "redux";

import posts from "./posts";

export const reducers = combineReducers({
  posts,
});

export type RootState = ReturnType<typeof reducers>;
