"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SearchResults from "@/app/components/SearchResults";

interface SearchProps {
  onSubmit: (data: SearchInputs) => void;
}
interface SearchInputs {
  id: number;
  // postalCode: number;
  searchValue: string | number;
}


const API_URL = "http://127.0.0.1:8000/v1/search?text=";

export function Search({ onSubmit }: SearchProps) {
  const { register, handleSubmit } = useForm<SearchInputs>();
  const [searchResult, setSearchResult] = useState<Search[]> ([]);

  const handleFormSubmit = async (data: SearchInputs) => {
    try {
      const response = await fetch(API_URL + data.searchValue);
      if (!response.ok) {
        throw new Error("No search results");
      }
      const searchValue = await response.json();
      setSearchResult(searchValue);
      onSubmit(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
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
