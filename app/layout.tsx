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
      <body className="flex h-screen">
        <nav className="sticky top-0 h-screen bg-gray-900 w-64">
          <div className="h-16 flex items-center justify-center">
            <Navbar />
          </div>
        </nav>
        <div className="flex-1 flex flex-col">
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
