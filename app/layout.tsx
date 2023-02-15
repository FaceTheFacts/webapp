/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


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
          <Header />
          <Navbar />
        </nav>
        <main>
          {children}
        </main>
          <Footer />
      </body>
    </html>
  );
}