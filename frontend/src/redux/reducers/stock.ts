import types from "redux/actions/types";
import { IStock } from "redux/types/stock";
import { IStockState, StockActions } from "../types/stock";

const initialState: IStockState = {
  
  stocks: [] as IStock[],
};


const StockReducer = (
  state = initialState,
  action: StockActions
): IStockState => {
  switch (action.type) {
    case types.GET_STOCKS:
      return {
        ...state,
        stocks: action.payload,
      };

    default:
      return state;
  }
};

export default StockReducer;
