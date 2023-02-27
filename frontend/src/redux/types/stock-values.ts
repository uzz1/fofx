import types from "redux/actions/types";



export interface IStockValue {
    stock_id: any;
    date: string;
    value: number;
    stock_name: any
  }



interface IGetStockValues {
    type: typeof types.GET_STOCK_VALUES;
    payload: IStockValue[];
  }



export type StockValueActions =
   | IGetStockValues;



export interface IStockValueState {
  stockValues: IStockValue[]
}
