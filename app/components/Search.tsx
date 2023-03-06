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
    const getSearchValue = await (await fetch(`http://127.0.0.1:8000/v1/search?text=${data.searchValue}`)).json()
    console.log(getSearchValue)
    setSearchResult(getSearchValue);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <input type="text" {...register("searchValue")}  placeholder="Search..." />
          </div>
    </form>
    <SearchResults results={searchResult} />

    </>
  );
}
