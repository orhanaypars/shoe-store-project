import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import User from "./User";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function DesktopNavbar({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) {
  const [cart, setCart] = useState<{ quantity: number }[]>([]); // Initialize cart as an empty array
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart modal

  return (
    <div className="hidden lg:flex items-center justify-center gap-72 px-8 py-4 bg-gray-900 shadow-lg">
      {/* Sol kısım: Logo ve ModeToggle */}
      <div className="flex items-center space-x-6">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={130} height={80} />
        </Link>
        <ModeToggle />
      </div>

      {/* Sağ kısım: NavLinks */}
      <div
        className="flex items-center gap-10 justify-center"
        suppressHydrationWarning
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div
          className="relative flex items-center cursor-pointer"
          onClick={() => setIsCartOpen(true)} // Open cart modal on click
        >
          <FaShoppingCart size={30} className="text-white" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </div>
        </div>
        <User />
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Sepetiniz</h2>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between mb-2">
                    <span>Ürün {index + 1}</span>
                    <span>{item.quantity} adet</span>
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

export default DesktopNavbar;
