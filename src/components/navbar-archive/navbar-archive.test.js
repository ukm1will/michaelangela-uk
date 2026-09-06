import { render, screen, within } from "@testing-library/react";
import NavBarArchive from "./navbar-archive";
import React from "react";

describe("Navbar archive page tests", () => {
  beforeEach(() => render(<NavBarArchive />));
  test("renders page headings", () => {
    const headings = screen.getAllByRole("heading", { level: 5 });
    expect(headings).toHaveLength(6);
    expect(headings[0]).toHaveTextContent("2026");
    expect(headings[1]).toHaveTextContent("2025");
    expect(headings[2]).toHaveTextContent("2024");
    expect(headings[3]).toHaveTextContent("2023");
    expect(headings[4]).toHaveTextContent("2022");
    expect(headings[5]).toHaveTextContent("2021");
  });
  test("renders competition title and logo", () => {
    const elem = within(screen.getByTestId("competition-title"));
    const logo = screen.getByRole("img");
    expect(elem.getByText("Archive")).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });
  test("renders link to homepage", () => {
    const homePageLink = screen.getByRole("link", {
      name: "Return to home page",
    });
    expect(homePageLink).toHaveAttribute("href", "/");
  });
});

describe("Navbar archive link tests for 2021", () => {
  beforeEach(() => render(<NavBarArchive />));
  test("check div has correct links for 2021", () => {
    const divElement = screen.getByTestId("custom-element-2021");
    const linkSP = within(divElement).getByRole("link", {
      name: "Summer Pairs 2021",
    });
    const linkMC = within(divElement).getByRole("link", {
      name: "Millennium Cup 2021",
    });
    expect(linkSP).toHaveAttribute("href", "/summerPairs2021");
    expect(linkMC).toHaveAttribute("href", "/millenniumCup2021");
  });
});

describe("Navbar archive link tests for 2022", () => {
  beforeEach(() => render(<NavBarArchive />));
  test("check div has correct links for 2022", () => {
    const divElement = screen.getByTestId("custom-element-2022");
    const linkSP = within(divElement).getByRole("link", {
      name: "Summer Pairs 2022",
    });
    const linkMC = within(divElement).getByRole("link", {
      name: "Millennium Cup 2022",
    });
    const linkWP = within(divElement).getByRole("link", {
      name: "Winter Pairs 2021/22",
    });
    const linkCC = within(divElement).getByRole("link", {
      name: "Club Championship 2022",
    });
    expect(linkSP).toHaveAttribute("href", "/summerPairs2022");
    expect(linkMC).toHaveAttribute("href", "/millenniumCup2022");
    expect(linkWP).toHaveAttribute("href", "/winterPairs2021");
    expect(linkCC).toHaveAttribute("href", "/clubChampionship2022");
  });
});

describe("Navbar archive link tests for 2023", () => {
  beforeEach(() => render(<NavBarArchive />));
  test("check div has correct links for 2023", () => {
    const divElement = screen.getByTestId("custom-element-2023");
    const linkSP = within(divElement).getByRole("link", {
      name: "Summer Pairs 2023",
    });
    const linkMC = within(divElement).getByRole("link", {
      name: "Millennium Cup 2023",
    });
    const linkWP = within(divElement).getByRole("link", {
      name: "Winter Pairs 2022/23",
    });
    const linkCC = within(divElement).getByRole("link", {
      name: "Club Championship 2023",
    });
    expect(linkSP).toHaveAttribute("href", "/summerPairs2023");
    expect(linkMC).toHaveAttribute("href", "/millenniumCup2023");
    expect(linkWP).toHaveAttribute("href", "/winterPairs2022");
    expect(linkCC).toHaveAttribute("href", "/clubChampionship2023");
  });
});

describe("Navbar archive link tests for 2024", () => {
  beforeEach(() => render(<NavBarArchive />));
  test("check div has correct links for 2024", () => {
    const divElement = screen.getByTestId("custom-element-2024");
    const linkSP = within(divElement).getByRole("link", {
      name: "Summer Pairs 2024",
    });
    const linkMC = within(divElement).getByRole("link", {
      name: "Millennium Cup 2024",
    });
    const linkWP = within(divElement).getByRole("link", {
      name: "Winter Pairs 2023/24",
    });
    const linkCC = within(divElement).getByRole("link", {
      name: "Club Championship 2024",
    });
    expect(linkSP).toHaveAttribute("href", "/summerPairs2024");
    expect(linkMC).toHaveAttribute("href", "/millenniumCup2024");
    expect(linkWP).toHaveAttribute("href", "/winterPairs2023");
    expect(linkCC).toHaveAttribute("href", "/clubChampionship2024");
  });
});

describe("Navbar archive link tests for 2025", () => {
  beforeEach(() => render(<NavBarArchive />));
  test("check div has correct links for 2025", () => {
    const divElement = screen.getByTestId("custom-element-2025");
    const linkSP = within(divElement).getByRole("link", {
      name: "Summer Pairs 2025",
    });
    const linkWP = within(divElement).getByRole("link", {
      name: "Winter Pairs 2024/25",
    });
    const linkMC = within(divElement).getByRole("link", {
      name: "Millennium Cup 2025",
    });
    const linkCC = within(divElement).getByRole("link", {
      name: "Club Championship 2025",
    });
    expect(linkWP).toHaveAttribute("href", "/winterPairs2024");
    expect(linkSP).toHaveAttribute("href", "/summerPairs2025");
    expect(linkMC).toHaveAttribute("href", "/millenniumCup2025");
    expect(linkCC).toHaveAttribute("href", "/clubChampionship2025");
  });
});

describe("Navbar archive link tests for 2026", () => {
  beforeEach(() => render(<NavBarArchive />));
  test("check div has correct links for 2026", () => {
    const divElement = screen.getByTestId("custom-element-2026");
    const linkWP = within(divElement).getByRole("link", {
      name: "Winter Pairs 2025/26",
    });
    expect(linkWP).toHaveAttribute("href", "/winterPairs2025");
  });
});
