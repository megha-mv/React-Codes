import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import data from "./data";
import { useState } from "react";
// import Product from "./Product";
import "./styleassign.css";

function App1() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        ></Basket>
      </div>
    </div>
  );
}

export default App1;
