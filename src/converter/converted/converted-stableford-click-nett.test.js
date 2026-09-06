import {render, screen, within} from "@testing-library/react";
import Converted from "./converted";
import React from "react";
import user from "@testing-library/user-event";
import {getHtml28Sep2023Stableford} from "../../testData/getHtml28Sep2023Stableford";

const html28Sep2023Stableford = getHtml28Sep2023Stableford();

const json28Sep2023Stableford = [
    [ // note two lots of brackets
        {ranking: '1', player: 'Bray, Gary L', gross: '93', handicap: '27', pts: '42'},
        {ranking: '2', player: 'James, Danny', gross: '79', handicap: '10', pts: '39'},
        {ranking: '3', player: 'Everson, John', gross: '112', handicap: '42', pts: '38'},
        {ranking: '4', player: 'Mittell, Mathew', gross: '80', handicap: '10', pts: '38'},
        {ranking: '5', player: 'Morgan, Ian', gross: '79', handicap: '9', pts: '38'}
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
    test('Pts button is rendered and found', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html28Sep2023Stableford}/>);
        const nettColumnButton = screen.getByText('Pts');
        expect(nettColumnButton).toBeInTheDocument();
    });

    test('Pts button is clicked to change sort order', async () => {
        user.setup();
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html28Sep2023Stableford}/>);
        const nettColumnButton = screen.getByText('Pts');
        await user.click(nettColumnButton);
        const playerOne = json28Sep2023Stableford[0][0];
        const playerTwo = json28Sep2023Stableford[0][1];
        const playerThree = json28Sep2023Stableford[0][2];
        const playerFour = json28Sep2023Stableford[0][3]
        const playerFive = json28Sep2023Stableford[0][4];


        const rows = screen.getAllByRole('row');
        checkRowContents(rows[1], playerOne.ranking, playerOne.player, playerOne.gross, playerOne.handicap, playerOne.pts);
        checkRowContents(rows[2], playerTwo.ranking, playerTwo.player, playerTwo.gross, playerTwo.handicap, playerTwo.pts);
        checkRowContents(rows[3], playerThree.ranking, playerThree.player, playerThree.gross, playerThree.handicap, playerThree.pts);
        checkRowContents(rows[4], playerFour.ranking, playerFour.player, playerFour.gross, playerFour.handicap, playerFour.pts);
        checkRowContents(rows[5], playerFive.ranking, playerFive.player, playerFive.gross, playerFive.handicap, playerFive.pts);


        expect(rows).toHaveLength(33);
    });
})

