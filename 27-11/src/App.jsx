import "./App.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShowCase from "./components/ShowCase/ShowCase";
import { prodotti } from "./data/products";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <>
      <ShowCase prodotti={prodotti} items={items} setItems={setItems} />
      <ShoppingCart items={items} />
    </>
  );
}

export default App;
