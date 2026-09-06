import { logRoles, render, screen, within } from "@testing-library/react";
import ClubChampionship from "./club-championship";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

function expectRowContents(row, ranking, player, r1, r2, total) {
  const columns = within(row).getAllByRole("cell");
  expect(columns).toHaveLength(5);
  expect(columns[0]).toHaveTextContent(ranking);
  expect(columns[1]).toHaveTextContent(player);
  expect(columns[2]).toHaveTextContent(r1);
}

describe("Club Championship 2022", () => {
  let history;
  beforeAll(
    () => (history = { location: { pathname: "/clubChampionship2022" } })
  );
  beforeEach(() => render(<ClubChampionship history={history} />));

  test("renders 13 rows", () => {
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(13);
  });

  test("renders results of player one", () => {
    const p1 = {
      ranking: 1,
      player: "Morris, Dean",
      r1: 72,
      r2: 72,
      total: 144,
    };
    const rows = screen.getAllByRole("row");
    expectRowContents(rows[1], p1.ranking, p1.player, p1.r1, p1.r2, p1.total);
  });

  test("renders competition title and logo for 2022", () => {
    const elem = within(screen.getByTestId("competition-title"));
    const logo = screen.getByRole("img");
    expect(elem.getByText("Club Championship 2022")).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });

  test("renders link to homepage", () => {
    const homePageLink = screen.getByRole("link", {
      name: "Return to home page",
    });
    expect(homePageLink).toHaveAttribute("href", "/");
  });
});

describe("Club Championship 2023", () => {
  let history;
  let view;
  beforeAll(
    () => (history = { location: { pathname: "/clubChampionship2023" } })
  );
  beforeEach(() => (view = render(<ClubChampionship history={history} />)));

  test("renders 6 rows", () => {
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(6);
  });

  test("renders results of player one", () => {
    const p1 = {
      ranking: 1,
      player: "Grieves, Mike",
      r1: 79,
      r2: 74,
      total: 74,
    };
    const rows = screen.getAllByRole("row");
    expectRowContents(rows[1], p1.ranking, p1.player, p1.r1, p1.r2, p1.total);
  });

  test("renders competition title and logo for 2023", () => {
    const elem = within(screen.getByTestId("competition-title"));
    const logo = screen.getByRole("img");
    expect(elem.getByText("Club Championship 2023")).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });

  test("renders link to homepage", () => {
    const homePageLink = screen.getByRole("link", {
      name: "Return to home page",
    });
    expect(homePageLink).toHaveAttribute("href", "/");
  });
});

describe("Club Championship 2024", () => {
  let history;
  let view;
  beforeAll(
    () => (history = { location: { pathname: "/clubChampionship2024" } })
  );
  beforeEach(() => (view = render(<ClubChampionship history={history} />)));

  test("renders 8 rows", () => {
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(8);
  });

  test("renders results of player one", () => {
    const p1 = {
      ranking: 1,
      player: "Morris, Dean",
      r1: 78,
      r2: 73,
    };
    const rows = screen.getAllByRole("row");
    expectRowContents(rows[1], p1.ranking, p1.player, p1.r1, p1.r2);
  });

  test("renders competition title and logo for 2024", () => {
    const elem = within(screen.getByTestId("competition-title"));
    const logo = screen.getByRole("img");
    expect(elem.getByText("Club Championship 2024")).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });

  test("renders link to homepage", () => {
    const homePageLink = screen.getByRole("link", {
      name: "Return to home page",
    });
    expect(homePageLink).toHaveAttribute("href", "/");
  });
});

describe("Club Championship 2025", () => {
  let history;
  let view;
  beforeAll(
    () => (history = { location: { pathname: "/clubChampionship2025" } })
  );
  beforeEach(() => (view = render(<ClubChampionship history={history} />)));

  test("renders 16 rows", () => {
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(16);
  });

  test("renders results of player one", () => {
    const p1 = {
      ranking: 1,
      player: "Bromham, Neil",
      r1: 77,
      r2: 76,
    };
    const rows = screen.getAllByRole("row");
    expectRowContents(rows[1], p1.ranking, p1.player, p1.r1, p1.r2);
  });

  test("renders competition title and logo for 2025", () => {
    const elem = within(screen.getByTestId("competition-title"));
    const logo = screen.getByRole("img");
    expect(elem.getByText("Club Championship 2025")).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
  });

  test("renders link to homepage", () => {
    const homePageLink = screen.getByRole("link", {
      name: "Return to home page",
    });
    expect(homePageLink).toHaveAttribute("href", "/");
  });
});
