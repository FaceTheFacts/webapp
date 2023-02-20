/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable}>
      <head>
        <title>Face The Facts</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex h-screen">
        <nav className="sticky top-0 h-screen bg-darkblue w-32 border-r border-solid border-darkblue-20">
          <div className="flex items-center justify-center">
            <Navbar />
          </div>
        </nav>
        <div className="flex-1 flex flex-col bg-darkblue">
          <Header />
          <main className="flex-1 px-4 py-8 overflow-y-auto">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
