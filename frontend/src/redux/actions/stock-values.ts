import axios from "axios";
import { Dispatch } from "redux";
import { setAlert } from "./alert";
import { StockValueActions } from "redux/types/stock-values";
import { AlertActions } from "redux/types/alert";
import types from "./types";

const VALUE_URI = "http://localhost:5000/api/v1/stocks/stock-values";


// GET STOCK VALUES
export const getStockValues =
  () => async (dispatch: Dispatch<StockValueActions | AlertActions>) => {
    const config: any = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.get(`${VALUE_URI}`, config);
      dispatch({ type: types.GET_STOCK_VALUES, payload: data });
    } catch (error: any) {
      dispatch<any>(
        setAlert({
          msg: "Something went wrong when fetching the stock values!",
          status: error.response.status,
          alertType: "error",
        })
      );
    }
  };