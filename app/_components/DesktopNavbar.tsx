import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import User from "./User";

function DesktopNavbar({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) {
  return (
    <div className="hidden lg:flex items-center justify-center gap-72 px-8 py-4 bg-gray-900 shadow-lg">
      {/* Sol kısım: Logo ve ModeToggle */}
      <div className="flex items-center space-x-6">
        <Image src="/logo.png" alt="Logo" width={130} height={80} />
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
        <User />
      </div>
    </div>
  );
}

export default DesktopNavbar;
