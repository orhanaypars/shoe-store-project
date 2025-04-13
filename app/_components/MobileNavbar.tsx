"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import User from "./User";

function MobileNavbar({
  navLinks = [],
}: {
  navLinks: { href: string; label: string }[];
}) {
  return (
    <div className="bg-gray-900 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <Image src="/logo.png" alt="Logo" width={130} height={80} />
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white focus:outline-none">☰</button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-800 text-white">
            <div className="flex flex-col items-center space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <User />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
export default MobileNavbar;
