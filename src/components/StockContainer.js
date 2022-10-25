import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {
  
  return (
    <div>
      <h2>Stocks</h2>
      <Stock stocks={stocks} handleClick={handleClick} />
    </div>
  );
}

export default StockContainer;
