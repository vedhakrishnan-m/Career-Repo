import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext, useState } from "react";
import { PortfolioIndex } from "./PortfolioIndex";
import contextStore from "./store/store";

export const ThemeContext = createContext(null);

function App() {
  const [store, setStore] = useState(contextStore);
  function updateStore(key, value) {
    let storeCopy = { ...store };
    storeCopy[key] = value;
    setStore(storeCopy);
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ store, updateStore }}>
        <PortfolioIndex />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
