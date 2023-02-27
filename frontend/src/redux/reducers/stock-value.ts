import types from "redux/actions/types";
import { IStockValue } from "redux/types/stock-values";
import { IStockValueState, StockValueActions } from "../types/stock-values";


const initialState: IStockValueState = {
    stockValues: [] as IStockValue[],
};

const StockValueReducer = (
  state = initialState,
  action: StockValueActions
): IStockValueState => {
  switch (action.type) {
    case types.GET_STOCK_VALUES:
      return {
        ...state,
        stockValues: action.payload,
      };

    default:
      return state;
  }
};

export default StockValueReducer;
