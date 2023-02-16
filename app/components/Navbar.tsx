import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Logo_without_text.png";

// Pages navigation needs to be clarified.
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Bundestag",
    route: "bundestag",
  },
  {
    label: "Search",
    route: "search",
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
            <Link href={route}> {label} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// To Do: styling.
