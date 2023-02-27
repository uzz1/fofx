import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import StockTable from "../../components/table";

const Stocks: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    document.title = "Stocks";
  }, []);

  return (
    <>
      <StockTable />

    </> 
  );
};

export default Stocks;
