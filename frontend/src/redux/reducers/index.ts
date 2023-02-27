import { combineReducers } from "redux";
import admin from "./admin";
import user from "./user";
import alert from "./alert";
import stock from "./stock";
import stockValue from "./stock-value";

const rootReducer = combineReducers({
  admin,
  user,
  alert,
  stock,
  stockValue
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
