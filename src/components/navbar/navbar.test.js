import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar", () => {
  test("renders links correctly", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);

    const currentYear = screen.getByText("2026");
    expect(currentYear).toBeInTheDocument();

    const sp = screen.getByRole("link", { name: "Summer Pairs 2026" });
    expect(sp).toHaveAttribute("href", "/summerPairs2026");

    const mc = screen.getByRole("link", { name: "Millennium Cup 2026" });
    expect(mc).toHaveAttribute("href", "/millenniumCup2025");

    const gs = screen.getByRole("link", { name: "Gross Scores Converter" });
    expect(gs).toHaveAttribute("href", "/converter");

    const ar = screen.getByRole("link", { name: "Archive" });
    expect(ar).toHaveAttribute("href", "/archive");
  });
});
