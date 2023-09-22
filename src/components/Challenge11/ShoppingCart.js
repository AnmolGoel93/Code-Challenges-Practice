import { useState } from "react";
import "./ShoppingCart.css";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

function ShoppingCart() {
  const cart = [];
  const [cartItems, setCartItems] = useState(cart);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const cartItemsCopy = [...cartItems];
    const itemPresent = cartItemsCopy.find(
      (prevItem) => prevItem.name === item.name
    );

    if (itemPresent) {
      itemPresent.quantity += 1;
      setCartItems(cartItemsCopy);
    } else {
      setCartItems((prevItems) => {
        return [...prevItems, { ...item, quantity: 1 }];
      });
    }
  };

  const decreaseQuantity = (item) => {
    let cartItemsCopy = [...cartItems];
    const itemPresent = cartItemsCopy.find(
      (prevItem) => prevItem.name === item.name
    );

    if (itemPresent.quantity > 1) {
      itemPresent.quantity -= 1;
    } else {
      cartItemsCopy = cartItemsCopy.filter((i) => i.name !== item.name);
    }

    setCartItems(cartItemsCopy);
  };

  const increaseQuantity = (item) => {
    const cartItemsCopy = [...cartItems];
    const itemPresent = cartItemsCopy.find(
      (prevItem) => prevItem.name === item.name
    );

    itemPresent.quantity += 1;
    setCartItems(cartItemsCopy);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cartItems.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(item)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>
          Total: $
          {cartItems
            .reduce((prev, item) => {
              return prev + item.quantity * item.price;
            }, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
