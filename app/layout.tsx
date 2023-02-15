/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <nav>
          <Navbar />
        </nav>
        <Search />
        <main>
          {children}
        </main>
          <Footer />
      </body>
    </html>
  );
}