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
      <nav>
        <Header />
        <Navbar />
      </nav>
      <main>
        {children}
      </main>
        <Footer />
    </html>
  );
}


/* <nav>
  <Link href="/">
    Home
  </Link>
  <br></br>
  <Link href="/bundestag">
    Bundestag
  </Link>
  <br></br>
  <Link href="/politiker:in">
    Politiker:in
  </Link>
  <br></br>
  <div>---</div>
  <br></br>
  {/* Sub-nav links needed  */
/* </nav> */