import "../styles/globals.css";
import { Search } from "./components/Search";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <Search />
    </div>
  );
}
