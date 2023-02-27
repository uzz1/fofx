import types from "redux/actions/types";

export interface IStock {
  id: any;
  stock: string;
  industry: string;
  sector: string;
  currency_code: string
}


interface IGetStocks {
  type: typeof types.GET_STOCKS;
  payload: IStock[];
}


export type StockActions =
  | IGetStocks

export interface IStockState {
  stocks: IStock[];
}

