import { IAdminState, AdminActions } from "./admin";
import { IUserState, UserActions } from "./user";
import { IAlertState, AlertActions } from "./alert";
import { IStockState, StockActions } from "./stock";
import { IStockValueState, StockValueActions } from "./stock-values";

export type AppState = IAdminState | IUserState | IAlertState | IStockState | IStockValueState;
export type AppActions = AdminActions | UserActions | AlertActions | StockActions | StockValueActions;
