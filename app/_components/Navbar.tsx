"use client";

import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { useCart } from "../_context/CartContext";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const navLinks = [
  { href: "/formen", label: "Erkek Ayakkabı" },
  { href: "/forwomen", label: "Kadın Ayakkabı" },
  { href: "/forkids", label: "Çocuk Ayakkabı" },
];

function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Allow `null` initially, then `boolean`
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart modal
  const { cart } = useCart();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px, lg breakpoint'ine denk gelir
    };

    handleResize(); // İlk yüklemede kontrol et
    window.addEventListener("resize", handleResize); // Genişlik değişimini dinle

    return () => {
      window.removeEventListener("resize", handleResize); // Temizle
    };
  }, []);

  // Avoid rendering until `isMobile` is determined
  if (isMobile === null) {
    return null; // Or a loading spinner/placeholder
  }

  return (
    <div className="relative">
      {isMobile ? (
        <MobileNavbar navLinks={navLinks} />
      ) : (
        <DesktopNavbar navLinks={navLinks} />
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Sepetiniz</h2>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between mb-2">
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} x {item.price.toFixed(2)}₺
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Sepetiniz boş.</p>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mr-2"
                onClick={() => setIsCartOpen(false)} // Close modal
              >
                Kapat
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Satın Al
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
