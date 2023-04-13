import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import SearchResults from "@/app/components/SearchResults";

interface SearchProps {
  onSubmit: (data: SearchInputs) => void;
}
export interface SearchInputs {
  id: number;
  searchValue: string | number;
}

const API_URL = process.env.NEXT_PUBLIC_SEARCH_API_URL;

export function Search({ onSubmit }: SearchProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SearchInputs>();
  const [searchResults, setSearchResults] = useState<Search[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  const handleFormSubmit = useCallback (async (data: SearchInputs) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL as string + data.searchValue);
      if (!response.ok) {
        throw new Error("Keine Ergebnisse.");
      }
      const searchResults : Search[] = await response.json();
      setSearchResults(searchResults);
      onSubmit(data);
      reset();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInputClick = () => {
    setSearchResults([])
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <input
            type="text"
            {...register("searchValue", {
              required: true,
              pattern: alphanumericRegex
            })}
            placeholder="Suche nach Politker:innen oder PLZ"
            aria-label="Suchfeld. Geben Sie Ihre Suchanfrage ein und drücken Sie zum Absenden die Eingabetaste."
            onClick={handleInputClick}
          />
          <div>
            {errors.searchValue?.type === "required" && (
              <span className="text-white">Bitte geben Sie einen Suchbegriff ein.</span>
            )}
            {errors.searchValue?.type === "pattern" && (
              <span className="text-white">Bitte geben Sie einen gültigen Suchbegriff ein.</span>
            )}
          </div>
        </div>
      </form>
      {loading ? (
        <p className='text-white'>Bitte warten...</p>
      ) : error ? (
        <p className='text-white'>{error}</p>
      ) : (
          <SearchResults searchResults={searchResults} />
      )}
    </>
  );
}