"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SearchResults from "./SearchResults";

interface IFormInputs {
  id: number;
  // postalCode: number;
  searchValue: string | number;
}

export function Search() {
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<IFormInputs>();

  const [searchResult, setSearchResult] = useState<Search[]> (
    []
  )

  const onSubmit = async (data: any) => {
    console.log("data", data);
    // ToDO: type checking fot the searchValue x zipcode or name, and fetch a different route. 
    // const ab = await (await fetch('/api/politician')).json()
    const abc = await (await fetch(`http://127.0.0.1:8000/v1/search?text=${data.searchValue}`)).json()
    console.log(abc)
    setSearchResult(abc);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <input type="text" {...register("searchValue")}  placeholder="Search..." />
          </div>
        <button type="submit">CLICK</button>
    </form>
    <SearchResults results={searchResult} />

    </>
  );
}

// TODO: Cache #id, #name, #PO. for the dropdown list.
// TODO: onSubmit route to /profile/[id] .
