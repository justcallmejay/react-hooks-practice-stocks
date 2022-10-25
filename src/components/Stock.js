import React from "react";

function Stock({ stocks, handleClick }) {

  console.log(stocks)

  const renderStocks = stocks.map(stock => {
  return (
    <div>
      <div className="card" key={stock.id} onClick={() => handleClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  )
});

  return(
    <div>
      {renderStocks}
    </div>
  )
}
export default Stock;
