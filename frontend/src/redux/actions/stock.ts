import axios from "axios";
import { Dispatch } from "redux";
import { setAlert } from "./alert";
import { StockActions } from "redux/types/stock";
import { AlertActions } from "redux/types/alert";
import types from "./types";

const STOCK_URI = "http://localhost:5000/api/v1";



// GET STOCKS
export const getStocks =
  () => async (dispatch: Dispatch<StockActions | AlertActions>) => {
    const config: any = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.get(`${STOCK_URI}/stocks`, config);
      dispatch({ type: types.GET_STOCKS, payload: data });
    } catch (error: any) {
      dispatch<any>(
        setAlert({
          msg: "Something went wrong when fetching the stocks!",
          status: error.response.status,
          alertType: "error",
        })
      );
    }
  };



