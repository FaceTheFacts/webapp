import Image from "next/image";
import logo from "/public/logo.svg"
import { Search } from "./Search";

export function Header() {
    return (
    <header>
        <div>
            <div>
                <Image src={logo} height={33} width={35} alt="Face The Facts Logo" />
                {/* <Logo /> */}
            </div>
            <div className="bg-black text-slate-200"> Face The Facts Header </div>
            <Search/>
        </div>
    </header>
    )
}

// height={33} width={35}