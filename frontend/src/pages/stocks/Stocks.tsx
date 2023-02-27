import React from "react";
import StockTable from "../../components/table";

const Stocks: React.FC = (): JSX.Element => {

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
