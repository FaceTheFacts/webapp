import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Search, SearchInputs } from "@/app/components/Search";
import { FetchMock } from "jest-fetch-mock";

describe("Search", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    fetchMock.resetMocks(); // Reset fetch mocks before each test
  });

  it("should render the search input", () => {
    const { getByPlaceholderText } = render(<Search onSubmit={mockOnSubmit} />);
    expect(getByPlaceholderText("Suche nach Politker:innen oder PLZ")).toBeInTheDocument();
  });

  it("submits the search form with the search value entered by the user", async () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText } = render(<Search onSubmit={mockOnSubmit} />);

    const input = getByLabelText("Suchfeld. Geben Sie Ihre Suchanfrage ein und drücken Sie zum Absenden die Eingabetaste.");

    // Mock the fetch response
    fetchMock.mockResponseOnce(
      JSON.stringify([{ id: 1, name: "Test Result" }])
    );

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.submit(input);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({ searchValue: "test" });
    });
  });
});
