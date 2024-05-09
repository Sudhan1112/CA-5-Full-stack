import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fakeAPI, setFakeAPI] = useState("");


  const Fetching = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setFakeAPI(data)
        console.log(data)
      })
      .then((data) => {
        if(fakeAPI.length > 0){
        setFakeAPI("")
        }
      })
      .catch((error) => {
        console.error(error)
      })
    }
    return (
      <>
      <div>
        <button onClick={Fetching} >
          Get
        </button>
        {/* {fakeAPI.length > 0 && (
      <ul>{fakeAPI.map(details => {
        return(
          <li>
          <p>{details.category}</p>
          <p>{details.description}</p>
          <p>{details.image}</p>
          <p>{details.price}</p>
          <p>{details.title}</p>
          </li>
        )
      })}</ul>
    )
    } */}
      </div>
    </>
  )
}

export default App
