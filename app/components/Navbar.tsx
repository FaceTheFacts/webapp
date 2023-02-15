import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.svg"

// Pages navigation needs to be clarified.
const links = [{
    label: "Home",
    route: "/",
},{
    label: "Bundestag",
    route: "bundestag",
},{
    label: "Search",
    route: "search",
}]

export function Navbar() {

  return (
          <nav className="bg-black text-slate-200" >
            <div>
                <Image src={logo} height={33} width={35} alt="Face The Facts Logo" />
                {/* <Logo /> */}
            </div>
            <ul>
                {links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route}> {label} </Link>
                    </li>
                ))}
                </ul>
          </nav>
  );
}

// To Do: styling.