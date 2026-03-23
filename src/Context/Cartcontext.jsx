import { createContext, useContext, useState, useMemo, useEffect} from "react";
import { initialProducts } from "../Data/Product";

const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    //Load from localStorage
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  //Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const products = initialProducts;

  // ✅ Add to cart
  const addToCart = (products) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === products.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === products.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...products, quantity: 1 }];
      }
    });
  };

  // ✅ Remove from cart
  const removeFromCart = (productID, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === productID
      );

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productID);
      } else {
        return prevCart.map((item) =>
          item.id === productID
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  // ✅ Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Total items count
  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  // ✅ Total price
  const cartTotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );


  return (
    <Cartcontext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => useContext(Cartcontext);