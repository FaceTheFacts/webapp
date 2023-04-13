import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "@/app/layout";

jest.mock("@next/font/google", () => ({
  Inter: () => ({ variable: "--font-inter" }),
}));

// To Do: Fix console.error message:
// Warning: validateDOMNesting(...): <html> cannot appear as a child of <div>.

describe("RootLayout", () => {
  it("renders the navbar component", () => {
    const { getByRole } = render(<RootLayout>Hello World</RootLayout>);
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the header component", () => {
    render(<RootLayout>Hello World</RootLayout>);
    const headerElement = screen.getByText("Header");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the main content", () => {
    const { getByRole } = render(<RootLayout>Hello World</RootLayout>);
    expect(getByRole("main")).toBeInTheDocument();
  });

  it("renders the footer component", () => {
    const { getByRole } = render(<RootLayout>Hello World</RootLayout>);
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });
});
