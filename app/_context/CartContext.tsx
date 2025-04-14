"use client";

import React, { createContext, useContext, useState } from "react";

interface CartItem {
  id: number;
  name: string; // Ürün adı
  brand: string; // Ürün markası
  image: string; // Ürün resmi
  price: number; // Ürün fiyatı
  quantity: number; // Ürün miktarı
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void; // Ürünü kaldırma fonksiyonu
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Spor Ayakkabı",
      brand: "Nike",
      image: "/images/shoe1.jpg",
      price: 299.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Koşu Çantası",
      brand: "Adidas",
      image: "/images/bag1.jpg",
      price: 149.99,
      quantity: 2,
    },
  ]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
