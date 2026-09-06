import selectCountingItems from "../../functions/selectCountingItems";
import add from "../../helpers/arrowFunctions";
import {CountingItems, SortOrder} from "../../enums/enums";
const getElementWithHighestScore  = require('../../functions/getElementWithHighestScore');

describe('Test elements with highest scores', () => {

    const result = {g1s: 41, g2s: 39, g3s: 0, g4s: 43, g5s: 40, g6s: 0}
    const arr = [
        {colId: 3, score: result.g1s},
        {colId: 4, score: result.g2s},
        {colId: 5, score: result.g3s},
        {colId: 6, score: result.g4s},
        {colId: 7, score: result.g5s},
        {colId: 8, score: result.g6s},
    ]

    test('Should return COLUMNS that contain the highest scores', () => {
        const countingColumns = selectCountingItems(3, result, CountingItems.COLUMNS, SortOrder.HIGHEST);
        const countingScores = selectCountingItems(3, result, CountingItems.SCORES, SortOrder.HIGHEST);
        expect(countingColumns).toStrictEqual([6, 3, 7]);
        expect(countingScores).toStrictEqual([43, 41, 40]);
    });

    test('Should return total of highest scores', () => {
        const countingScores = selectCountingItems(3, result, CountingItems.SCORES, SortOrder.HIGHEST);
        const total = add(countingScores);
        expect(countingScores).toStrictEqual([43, 41, 40]);
        expect(total).toBe(124);
    });


    test('Should return single element that has the highest score', () => {
        const element = getElementWithHighestScore(arr);
        expect(element).toStrictEqual({colId: 6, score: 43});
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
        const element = getElementWithHighestScore(arr);
        expect(element).toStrictEqual({colId: null, score: null});
    });
})

