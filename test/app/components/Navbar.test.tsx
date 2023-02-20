import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Navbar } from "@/app/components/Navbar";

test("renders the Navbar component without errors", () => {
  render(<Navbar />);
});

test("displays the logo in the Navbar", () => {
  const { getByAltText } = render(<Navbar />);
  const logo = getByAltText("Face The Facts Logo");
  expect(logo).toBeInTheDocument();
});

test("displays the correct links in the Navbar", () => {
  const { getByAltText } = render(<Navbar />);
  const bundestagLink = getByAltText("Bundestag Logo").parentElement;
  const searchLink = getByAltText("Search Logo").parentElement;
  const appPageLink = getByAltText("App Page Logo").parentElement;

  expect(bundestagLink).toHaveAttribute("href", "/bundestag");
  expect(searchLink).toHaveAttribute("href", "/search");
  expect(appPageLink).toHaveAttribute("href", "/app-page");
});

test("displays the correct number of links in the Navbar", () => {
  const { getAllByRole } = render(<Navbar />);
  const linkElements = getAllByRole("link");
  expect(linkElements).toHaveLength(4);
});

test("clicking on a link navigates to the correct route", () => {
  // To Do: implement this test.
});
