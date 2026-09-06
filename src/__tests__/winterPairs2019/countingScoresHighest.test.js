import getMappedResults from "../../functions/getMappedResults";
import add from "../../helpers/arrowFunctions";
import getApplicationData from "../../functions/getApplicationData";

const metadata = {competitionYear: null, competitionType: null, competitionSortOrder: null, logo: null};
const applicationData = getApplicationData('/winterPairs2019', metadata);
const results = getMappedResults(applicationData.results, metadata.competitionSortOrder);

describe('Testing correct columns are selected', () => {

    test('Should show number 1 ranked team with correct counting columns', () => {
        expect(results[0].countingColumns).toStrictEqual([3, 8, 4]);
        expect(results[0].countingScores).toStrictEqual([46, 45, 41]);
    });

    test('Should show number 4 ranked team with correct counting columns', () => {
        expect(results[3].countingColumns).toStrictEqual([5, 4, 8]);
        expect(results[3].countingScores).toStrictEqual([43, 42, 41]);
    });

    test('Should show number 10 ranked team with correct counting columns', () => {
        expect(results[9].countingColumns).toStrictEqual([4, 3, 7]);
        expect(results[9].countingScores).toStrictEqual([43, 41, 39]);
    });

    test('Should show number 14 ranked team with correct counting columns', () => {
        expect(results[13].countingColumns).toStrictEqual([8, 4, 7]);
        expect(results[13].countingScores).toStrictEqual([43, 39, 38]);
    });
})

describe('Testing correct total for each row is calculated', () => {

    test('the number 1 ranked team should have correct total scores', () => {
        let result = results[0];
        result.total = add(result.countingScores);
        expect(result.total).toBe(132);
    })

    test('the number 4 ranked team should have correct total scores', () => {
        let result = results[3];
        const theTotal = add(result.countingScores);
        expect(theTotal).toBe(126);
    })

    test('the number 10 ranked team should have correct total scores', () => {
        let result = results[9];
        const theTotal = add(result.countingScores);
        expect(theTotal).toBe(123);
    })

    test('the number 14 ranked team should have correct total scores', () => {
        let result = results[13];
        const theTotal = add(result.countingScores);
        expect(theTotal).toBe(120);
    })
})
