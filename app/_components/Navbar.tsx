"use client";

import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const navLinks = [
  { href: "/men", label: "Erkek Ayakkabı" },
  { href: "/women", label: "Kadın Ayakkabı" },
  { href: "/kids", label: "Çocuk Ayakkabı" },
  { href: "/sale", label: "İndirim Ayakkabı" },
];

function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Allow `null` initially, then `boolean`

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
    <div>
      {isMobile ? (
        <MobileNavbar navLinks={navLinks} />
      ) : (
        <DesktopNavbar navLinks={navLinks} />
      )}
    </div>
  );
}

export default Navbar;
