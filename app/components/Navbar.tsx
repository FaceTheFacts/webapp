import Link from "next/link";

const links = [{
    label: "Home",
    route: "/",
},{
    label: "Bundestag",
    route: "bundestag",
},{
    label: "Politiker:in",
    route: "politiker",
}]

export function Navbar() {

  return (
          <nav className="bg-black text-slate-200" >
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