"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SearchResults from "./SearchResults";

interface SearchInputs {
  id: number;
  // postalCode: number;
  searchValue: string | number;
}

const API_URL = "http://127.0.0.1:8000/v1/search?text=";

export function Search() {
  const { register, handleSubmit } = useForm<SearchInputs>();
  const [searchResult, setSearchResult] = useState<Search[]> ([]);

  const onSubmit = async (data: SearchInputs) => {
    try {
      const response = await fetch(API_URL + data.searchValue);
      if (!response.ok) {
        throw new Error("No search results");
      }
      const searchValue = await response.json();
      setSearchResult(searchValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input 
          type="text" 
          {...register("searchValue")}  
          placeholder="Search..." 
        />
      </div>
    </form>
    <SearchResults searchResults={searchResult} />
    </>
  );
}
