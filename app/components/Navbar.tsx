import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Logo_without_text.png";
import bundestag from "../../public/assets/bundestag.png";
import search from "../../public/assets/search.png";
import appPage from "../../public/assets/app_page.png";

// Pages navigation needs to be clarified.
const links = [
  {
    label: <Image src={bundestag} alt="Bundestag Logo" />,
    route: "bundestag",
  },
  {
    label: <Image src={search} alt="Search Logo" />,
    route: "search",
  },
  {
    label: <Image src={appPage} alt="App Page Logo" />,
    route: "app-page",
  },
];

export function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-center py-12">
        <Link href="/">
          <Image src={logo} alt="Face The Facts Logo" />
        </Link>
      </div>
      <ul>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link
              className="flex items-center justify-center my-3 p-3"
              href={route}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// To Do: styling.
