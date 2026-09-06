import {render, screen, within} from "@testing-library/react";
import Converted from "./converted";
import React from "react";
import {getHtml10Aug2023Stableford} from "../../testData/getHtml10Aug2023Stableford";

const html10Aug2023Stableford = getHtml10Aug2023Stableford();

const json10Aug2023Stableford = [[ // note two lots of brackets
        { ranking: '1', player: 'Stephens, Chris', gross: '75', handicap: '6', pts: '39'  },
        { ranking: '2', player: 'Rees, Wayne', gross: '76',handicap: '7', pts: '39' },
        { ranking: '3', player: 'Harry, Anthony', gross: '77', handicap: '4', pts: '35' },
    ]
]

function checkRowContents(row, ranking, player, gross, handicap, pts) {
    const columns = within(row).getAllByRole('cell');
    expect(columns).toHaveLength(5);
    expect(columns[0]).toHaveTextContent(ranking);
    expect(columns[1]).toHaveTextContent(player);
    expect(columns[2]).toHaveTextContent(gross);
    expect(columns[3]).toHaveTextContent(handicap);
    expect(columns[4]).toHaveTextContent(pts);
}

describe("Converted component", () => {
    test('renders correctly', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html10Aug2023Stableford}/>);
        const logo = screen.getByRole('img');
        // Title is not required in this case
        expect(logo).toHaveAttribute('src', 'logo.png');
    })

    test('renders results accurately after sorting', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html10Aug2023Stableford}/>);
        const p1 = json10Aug2023Stableford[0][0]; // First element in array
        const rows = screen.getAllByRole('row');
        checkRowContents(rows[1], p1.ranking, p1.player, p1.gross, p1.handicap, p1.pts);
        expect(rows).toHaveLength(58);
    });
})

