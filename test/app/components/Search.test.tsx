import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Search, SearchInputs } from "@/app/components/Search";

describe("Search", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render the search input", () => {
    const { getByPlaceholderText } = render(
      <Search onSubmit={mockOnSubmit} />
    );
    expect(getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  // Test fails with no-calls on the onSumit.
  it("submits the search form with the search value entered by the user", () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText } = render(<Search onSubmit={mockOnSubmit} />);

    const input = getByLabelText("search-form");

    fireEvent.change(input, { target: { searchValue: "test" } });
    fireEvent.submit(input);
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });


    expect(mockOnSubmit).toHaveBeenCalledWith({ searchValue: "test" });
  });

});
