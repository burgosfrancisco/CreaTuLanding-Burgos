import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (item, quantity) => {
    const itemInCart = cart.find((prod) => prod.id === item.id);

    if (itemInCart) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de productos
  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Total $
  const totalPrice = cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
