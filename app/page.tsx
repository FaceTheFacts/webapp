"use client";

import "../styles/globals.css";
import { Search } from "./components/Search";

interface SearchInputs {
  id: number;
  searchValue: string | number;
}

export default function HomePage( ) {
  const handleSubmit = (data: SearchInputs) => {
    console.log(data);
  };

  return (
    <div className="flex h-full flex-col justify-center items-center bg-darkblue">
      <Search onSubmit={handleSubmit}/>
    </div>
  );
}