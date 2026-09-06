import getResultsType from "./getResultsType";
import {ResultsType} from "../../enums/enums";

const html30Jul2023Medal = "1\tLewis, Chris\t80 - 11 = 69\tOverall Winner\tLast Nine Holes\n" +
    "2\tCarsley, Kevin\t88 - 19 = 69\tOverall Runner-Up\t\n" +
    "3\tLinnane, Michael M\t84 - 13 = 71\tOverall 3rd"

const html13Aug2023Stableford = "1\tWilkins, Jonathan J\t41 pts (19)\tOverall Winner\tLast Nine Holes\n" +
    "2\tHolwill, Chris\t41 pts (15)\tOverall Runner-Up\t\n" +
    "3\tLinnane, Michael M\t39 pts (12)\tOverall 3rd\t"

const html19Nov2022Pairs = "1\tGriffiths, Clive\t48 pts\tOverall Winner\t\n" +
    "Jones, Kerry\t\t\t\t\t\t\n" +
    " \n" +
    "2\tFlack, Gary\t47 pts\tOverall Runner-Up\tLast Nine Holes\n" +
    "Brown, Chris\t\t\t\t\t\t\n" +
    " \n" +
    "3\tDavies, Alan L\t47 pts\tOverall 3rd\tLast Nine Holes\n" +
    "George, Lenny\t\t\t\t\t\t\n";


describe("Results Type", () => {
    test('strokeplay is returned', () => {
        const actual = getResultsType(html30Jul2023Medal);
        expect(actual).toBe(ResultsType.STROKEPLAY);
    })

    test('pairs is returned', () => {
        const actual = getResultsType(html19Nov2022Pairs);
        expect(actual).toBe(ResultsType.PAIRS);
    })

    test('stableford is returned', () => {
        const actual = getResultsType(html13Aug2023Stableford);
        expect(actual).toBe(ResultsType.STABLEFORD);
    })
})
