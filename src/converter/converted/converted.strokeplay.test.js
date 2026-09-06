import {render, screen, within} from "@testing-library/react";
import Converted from "./converted";
import React from "react";

const html05Aug2023Medal = "Swansea Bay Golf Club\n" +
    "Millennium Cup 4 from 6\n" +
    "Competition played on 05 August 2023 at Swansea Bay (Swansea Bay).\n" +
    "See also:\n" +
    "\n" +
    "\n" +
    "All available reports\n" +
    "\n" +
    "Full Net Result\n" +
    "\n" +
    "Overall\n" +
    "Position\tPlayer\tScore\tPlacing\tCountback\n" +
    "1\tFord, Martin\t77 - 09 = 68\tOverall Winner\t\n" +
    "2\tJames, Billy J.\t76 - 07 = 69\tLowest Gross Score\t\n" +
    "3\tWilliams, Karl\t89 - 17 = 72\t\t\n" +
    "4\tCundy, Leighton\t92 - 17 = 75\t\tLast Nine Holes\n" +
    "5\tMitchell, Lee\t89 - 14 = 75\t\t\n" +
    "6\tStephens, Chris\t83 - 07 = 76\t\tLast Nine Holes\n" +
    "7\tMoore, Nick\t82 - 06 = 76\t\t\n" +
    "8\tOtten, Marc\t88 - 11 = 77\t\t\n" +
    "9\tWelsh, Simon\t86 - 08 = 78\t\tLast Nine Holes\n" +
    "10\tWood, Karl\t90 - 12 = 78\t\t\n" +
    "11\tMcCalmon, Lester H\t90 - 10 = 80\t\t\n" +
    "12\tMorris, Dean\t83 - 01 = 82\t\t\n" +
    "13\tTrippett, Tom\t90 - 07 = 83\t\t\n" +
    "14\tGraham, James\t90 - 05 = 85\t\t\n" +
    "-\tHeycock, Lance L.\tNo Return\t\t\n" +
    "-\tMittell, Mathew\tNo Return\t\t\n" +
    "Number of Cards Processed = 16\n" +
    "\n" +
    "Competition Format:\n" +
    "Singles, Regular Stroke Play competition. Playing Handicap: 95% of Course Handicap.\n" +
    "\n" +
    "Ties:\n" +
    "Where a player or team is placed ahead of the following player or team in the results, based upon matching scorecards ('Countback'), the 'Countback' column documents the winning section of their scorecard.\n" +
    "\n" +
    "Twos:\n" +
    "There were 2 Twos recorded:\n" +
    "\n" +
    "Player\tHole\tComment\n" +
    "Heycock, Lance L.\t4\t \n" +
    "Moore, Nick\t4\t \n" +
    "\n" +
    "Master Scoreboard is a Registered Trademark of HandicapMaster Limited\n" +
    "Powered by HandicapMaster software © HandicapMaster Limited 2024";

const json05Aug2023Medal = [[ // note two lots of brackets
        { ranking: '1', player: 'James, Billy J.', gross: '76', handicap: '7', nett: '69'  },
        { ranking: '2', player: 'Tristram, Corey', gross: '85',handicap: '19', pts: '42' },
        { ranking: '3', player: 'Tobin, David', gross: '87', handicap: '21', pts: '42' },
    ]
]

function checkRowContents(row, ranking, player, gross, handicap, nett) {
    const columns = within(row).getAllByRole('cell');
    expect(columns).toHaveLength(5);
    expect(columns[0]).toHaveTextContent(ranking);
    expect(columns[1]).toHaveTextContent(player);
    expect(columns[2]).toHaveTextContent(gross);
    expect(columns[3]).toHaveTextContent(handicap);
    expect(columns[4]).toHaveTextContent(nett);
}

describe("Converted component", () => {
    test('renders correctly', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html05Aug2023Medal}/>);
        const logo = screen.getByRole('img');
        // Title is not required in this case
        expect(logo).toHaveAttribute('src', 'logo.png');
    })

    test('renders results accurately after sorting', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html05Aug2023Medal}/>);
        const p1 = json05Aug2023Medal[0][0]; // First element in array
        const rows = screen.getAllByRole('row');
        checkRowContents(rows[1], p1.ranking, p1.player, p1.gross, p1.handicap, p1.nett);
        expect(rows).toHaveLength(15);
    });
})

