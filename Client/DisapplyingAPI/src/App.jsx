import React, { useEffect, useState } from "react";

function App() {
  const [fakeAPI, setFakeAPI] = useState([]);
  const [next, setNext] = useState("initial");

  const fetchDataFromAPI = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFakeAPI(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleNextOne = () => {
    fetchDataFromAPI();
    setNext("loading");
  };

  const handleNextTwo = () => {
    setNext("display");
  };

  const handleRemoveContent = () => {
    setFakeAPI([]);
    setNext("initial");
  };

  return (
    <>
      {next === "initial" && (
        <div>
          <button onClick={handleNextOne}>Get</button>
        </div>
      )}
      {next === "loading" && (
        <div>
          <button onClick={handleNextTwo}>Get</button>
        </div>
      )}
      {next === "display" && (
        <div>
          <button onClick={handleRemoveContent}>Get</button>
          {fakeAPI.length > 0 && (
            <ul>
              {fakeAPI
                .filter(product => product.title.includes("Mens")) 
                .map((filteredProduct, index) => (
                  <li key={index}>
                  <p>{filteredProduct.title}</p>
                  </li> 
                ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default App;
