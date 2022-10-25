import React from "react";

function PortfolioContainer({ myStocks, handleDeleteStock }) {

  const renderMyPortfolio = myStocks.map(stocks => {
  return (
      <div className="card" key={stocks.id} onClick={() => handleDeleteStock(stocks)} >
        <div className="card-body">
          <h5 className="card-title">{stocks.name}</h5>
          <p className="card-text">{stocks.ticker}: {stocks.price}</p>
      </div>
    </div>
    )}
  );

  return (
    <>
    <h2>My Portfolio</h2>
    <p>{renderMyPortfolio}</p>
    </>
  )
}
export default PortfolioContainer;

