import {render, screen, within} from "@testing-library/react";
import Converted from "./converted";
import React from "react";
import {getHtml28Sep2023Stableford} from "../../testData/getHtml28Sep2023Stableford";

const html28Sep2023Stableford = getHtml28Sep2023Stableford();

const json28Sep2023Stableford = [[ // note two lots of brackets
    {ranking: '1', player: 'James, Danny', gross: '79', handicap: '10', pts: '39'},
    {ranking: '2', player: 'Morgan, Ian', gross: '79', handicap: '9', pts: '38'},
    {ranking: '3', player: 'Mittell, Mathew', gross: '80', handicap: '10', pts: '38'}
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
        render(<Converted history={history} userInput={html28Sep2023Stableford}/>);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', 'logo.png');
    })

    test('renders position one before clicking nett button', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html28Sep2023Stableford}/>);
        const player = json28Sep2023Stableford[0][0];
        const rows = screen.getAllByRole('row');
        checkRowContents(rows[1], player.ranking, player.player, player.gross, player.handicap, player.pts);
        expect(rows).toHaveLength(33);
    });

    test('renders position two before clicking nett button', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html28Sep2023Stableford}/>);
        const player = json28Sep2023Stableford[0][1];
        const rows = screen.getAllByRole('row');
        checkRowContents(rows[2], player.ranking, player.player, player.gross, player.handicap, player.pts);
        expect(rows).toHaveLength(33);
    });

    test('renders position three before clicking nett button', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html28Sep2023Stableford}/>);
        const player = json28Sep2023Stableford[0][2];
        const rows = screen.getAllByRole('row');
        checkRowContents(rows[3], player.ranking, player.player, player.gross, player.handicap, player.pts);
        expect(rows).toHaveLength(33);
    });
})
