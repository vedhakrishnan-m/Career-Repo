import { useContext } from "react";
import { ThemeContext } from "./App";

export function PortfolioIndex() {
  const { store, updateStore } = useContext(ThemeContext);
  return <div className="PortfolioIndex"></div>;
}
