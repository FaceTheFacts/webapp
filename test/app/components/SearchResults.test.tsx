import React from "react";
import { render, screen } from "@testing-library/react";
import Link from "next/link";

import SearchResults, { Search } from "@/app/components/SearchResults";

describe("SearchResults component", () => {
  const searchResults: Search[] = [
    { id: 1, label: "result1" },
    { id: 2, label: "result2" },
    { id: 3, label: "result3" },
  ];

  it("renders a list of search results", () => {
    render(<SearchResults searchResults={searchResults} />);

    const resultItems = screen.getAllByRole("listitem");
    expect(resultItems).toHaveLength(searchResults.length);

    searchResults.forEach((result, index) => {
      const link = screen.getByRole("link", { name: result.label });
      expect(link.getAttribute("href")).toBe(`profile/${result.id}`);
    });
  });
});
