import {render, screen} from "@testing-library/react";
import Converted from "./converted";
import React from "react";
import {getHtml02Dec2023Medal} from "../../testData/getHtml02Dec2023Medal";

const html30Jul2023Medal = getHtml02Dec2023Medal();

// const html29Jul2023Stableford =
//     "1\tDrewson, Stephen\t39 pts (17)\tOverall Winner\t\n" +
//     "2\tJerimiah, Jay\t38 pts (16)\tOverall Runner-Up\tLast Nine Holes\n" +
//     "3\tGillings, Julian\t38 pts (20)\tOverall 3rd\tLast Nine Holes";
//
// const html09Sep2023Pairs = "1\tWilliams, Karl\t60\tOverall Winner\t\n" +
//     "Davies, Robert J\t\t\t\t\t\t\n" +
//     " \n" +
//     "2\tMoore, Nick\t63\tOverall Runner-Up\t\n" +
//     "Carsley, Kevin\t\t\t\t\t\t\n" +
//     " \n" +
//     "3\tWilkins, Bryan\t64\tOverall 3rd\t\n" +
//     "Manchipp, Clive"

describe("Converted component", () => {
    test('renders column headers for strokeplay', () => {
        const history = {location: {pathname: '/convertedTable'}};
        render(<Converted history={history} userInput={html30Jul2023Medal}/>);
        expect(screen.getByText("Player")).toBeInTheDocument();
        expect(screen.getByText("Gross")).toBeInTheDocument();
        expect(screen.getByText("Handicap")).toBeInTheDocument();
        expect(screen.getByText("Nett")).toBeInTheDocument();
    });

    // test('renders column headers for stableford', () => {
    //     const history = {location: {pathname: '/convertedTable'}};
    //     render(<Converted history={history} userInput={html29Jul2023Stableford}/>);
    //     expect(screen.getByText("Player")).toBeInTheDocument();
    //     expect(screen.getByText("Gross")).toBeInTheDocument();
    //     expect(screen.getByText("Handicap")).toBeInTheDocument();
    //     expect(screen.getByText("Pts")).toBeInTheDocument();
    // });
})

