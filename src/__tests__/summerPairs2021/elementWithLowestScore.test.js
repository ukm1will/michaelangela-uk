import selectCountingItems from "../../functions/selectCountingItems";
import add from "../../helpers/arrowFunctions";
import getElementWithLowestScore from "../../functions/getElementWithLowestScore";
import {CountingItems, SortOrder} from "../../enums/enums";

describe('Test elements with lowest scores', () => {

    const result = {g1s: 41, g2s: 39, g3s: 0, g4s: 43, g5s: 40, g6s: 0}
    const arr = [
        {colId: 3, score: result.g1s},
        {colId: 4, score: result.g2s},
        {colId: 5, score: result.g3s},
        {colId: 6, score: result.g4s},
        {colId: 7, score: result.g5s},
        {colId: 8, score: result.g6s},
    ]

    test('Should return COLUMNS that contain the lowest scores', () => {
        const countingColumns = selectCountingItems(3, result, CountingItems.COLUMNS, SortOrder.LOWEST);
        const countingScores = selectCountingItems(3, result, CountingItems.SCORES, SortOrder.LOWEST);
        expect(countingColumns).toStrictEqual([4, 7, 3]);
        expect(countingScores).toStrictEqual([39, 40, 41]);
    });

    test('Should return total of lowest scores', () => {
        const countingScores = selectCountingItems(3, result, CountingItems.SCORES, SortOrder.LOWEST);
        const total = add(countingScores);
        expect(countingScores).toStrictEqual([39, 40, 41]);
        expect(total).toBe(120);
    });

    test('Should return single element that has the lowest score', () => {
        const element = getElementWithLowestScore(arr);
        expect(element).toStrictEqual({colId: 4, score: 39});
    });

    test('Should return element with null and zero when all scores are zero', () => {
        const arr = [
            {colId: 3, score: 0},
            {colId: 4, score: 0},
            {colId: 5, score: 0},
            {colId: 6, score: 0},
            {colId: 7, score: 0},
            {colId: 8, score: 0}
        ];
        const element = getElementWithLowestScore(arr);
        expect(element).toStrictEqual({colId: null, score: 0});
    });
})

