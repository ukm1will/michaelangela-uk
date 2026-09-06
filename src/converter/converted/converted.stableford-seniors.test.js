import {render, screen, within} from "@testing-library/react";
import Converted from "./converted";
import React from "react";
import {getHtml16Sep2023Stableford} from "../../testData/getHtml16Sep2023Stableford";

const html16Sep2023StablefordLadies = getHtml16Sep2023Stableford();

const json16Sep2023StablefordLadies = [[ // note two lots of brackets
        { ranking: '1', player: 'Thomas, Tracey', gross: '84', handicap: '13', pts: '37'  },
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
        render(<Converted history={history} userInput={html16Sep2023StablefordLadies}/>);
        const logo = screen.getByRole('img');
        // Title is not required in this case
        expect(logo).toHaveAttribute('src', 'logo.png');
    })

    test('renders results accurately after sorting', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html16Sep2023StablefordLadies}/>);
        const p1 = json16Sep2023StablefordLadies[0][0]; // First element in array
        const rows = screen.getAllByRole('row');
        checkRowContents(rows[1], p1.ranking, p1.player, p1.gross, p1.handicap, p1.pts);
        expect(rows).toHaveLength(12);
    });
})
