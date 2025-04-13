import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Notice from "./_components/Notice";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Hafif, normal ve kalın ağırlıklar
  style: ["normal", "italic"], // Normal ve italik stiller
});

export const metadata: Metadata = {
  title: "Shoe Store|Cheap Shoes",
  description: "The best place to buy cheap shoes",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className={`${merriweather.className} antialiased`}>
          {/* Ensure ThemeProvider is client-side only */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col">
              <Notice />
              <Navbar />
              {children}
            </div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
