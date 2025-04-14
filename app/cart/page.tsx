"use client";

import { useCart } from "../_context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sepetiniz</h1>
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Marka: {item.brand}</p>
                  <p className="text-gray-600">
                    Fiyat: {item.price.toFixed(2)}₺
                  </p>
                  <p className="text-gray-600">Adet: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-bold">
                  Toplam: {(item.price * item.quantity).toFixed(2)}₺
                </p>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDeleteForever size={24} />
                </Button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-xl font-bold">
              Genel Toplam:{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
              ₺
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-600">
              Satın Al
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Sepetinizde ürün bulunmamaktadır.</p>
      )}
    </div>
  );
}
