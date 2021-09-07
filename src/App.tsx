import React from "react"
import "./App.css"
import PokeAPI from "./api/pokeapi"

function App() {
  const onClickAPI = () => {
    const api = new PokeAPI()
    api.getPokemonsWithLimit()
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={onClickAPI}>
          API
        </button>
      </header>
    </div>
  )
}

export default App
