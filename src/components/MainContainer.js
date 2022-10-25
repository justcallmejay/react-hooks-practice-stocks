import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [selectStocks, setSelectStocks] = useState("All")
  const [sortBy, setSortBy] = useState('')

  useEffect(()=> {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(stock => setStocks(stock))
  }, [])

  console.log(stocks)

  //Sort Array
  useEffect(() => {
    if (sortBy === 'Alphabetically'){
      const sortedStocks = sortByName()
      setStocks(sortedStocks)
    } else {
      const sortedPrice = sortByPrice()
      setStocks(sortedPrice)
    }
  }, [ sortBy ])

  function sortStocks(e) {
    setSortBy(e.target.value)
  }
  
  const sortByName = () => {
    return [...stocks].sort(function(a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }

  const sortByPrice = () => {
    return [...stocks].sort(function(a, b) {
      return b.price - a.price;
    })
  }
  
  function handleDeleteStock(deleteStock) {
    const updateStocks = myStocks.filter((stock) => stock.id !== deleteStock.id);
    setMyStocks(updateStocks)
  }

  //Filter Array
  function filterStock(category) {
    setSelectStocks(category)
  }

  const stocksDisplay = stocks.filter((stock)=> {
    if (selectStocks === "All") { 
      return true;
    } else 
    return stock.type === selectStocks
  })


  // const handleRadioButton = stocks.sort((a, b) => {
  //   if (checkButton === true)
  //   return (a.name.localeCompare(b.name))
  // })
  
  // console.log(handleRadioButton)

  const handleClick = (stock) => {
    if (!myStocks.includes(stock)) {
    const renderMyStocks = [...myStocks, stock]
    setMyStocks(renderMyStocks)
    } else {
      return handleDeleteStock(stock)
    }
  } 

  console.log(myStocks)

  return (
    <div>
      <SearchBar filterStock={filterStock} sortStocks={sortStocks} sortBy={sortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksDisplay} handleClick={handleClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} handleDeleteStock={handleDeleteStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

// const stockSort = stocksDisplay.sort((a, b) => {
//   return a.name.localeCompare(b.name)
// })


// return (
//   <div>
//     <SearchBar stocksDisplay={stocksDisplay} filterStock={filterStock}/>
//     <div className="row">
//       <div className="col-8">
//         {stocksDisplay.map((stock) => {
//         <StockContainer key={stock.id} name={stock.name} type={stock.type}/>
//       })}
//       </div>
//       <div className="col-4">
//         <PortfolioContainer stocks={stocks} handleDeleteStock={handleDeleteStock}/>
//       </div>
//     </div>
//   </div>
// );


//WORKS: CHANGE stocks with things
 // const things = [
  //   {
  //     "id": 1,
  //     "ticker": "GOOG",
  //     "name": "Google",
  //     "type": "Tech",
  //     "price": 1194.8
  //   },
  //   {
  //     "id": 2,
  //     "ticker": "FB",
  //     "name": "Facebook",
  //     "type": "Tech",
  //     "price": 168.85
  //   }
  // ]

  // const sortStocks = things.sort((a, b) => {
  //     return a.name.localeCompare(b.name)
  //   })
  
  // console.log(sortStocks)