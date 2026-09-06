import getMappedResults from "../../functions/getMappedResults";
import add from "../../helpers/arrowFunctions";
import getApplicationData from "../../functions/getApplicationData";

const metadata = {competitionYear: null, competitionType: null, competitionSortOrder: null, logo: null};
const applicationData = getApplicationData('/summerPairs2021', metadata);
const results = getMappedResults(applicationData.results, metadata.competitionSortOrder);

describe('Testing correct columns are selected', () => {
    test('Should show number 1 ranked team with correct counting columns', () => {
        expect(results[0].countingColumns).toStrictEqual([4, 8, 6]);
        expect(results[0].countingScores).toStrictEqual([63, 63, 64]);
    });
    test('Should show number 4 ranked team with correct counting columns', () => {
        expect(results[3].countingColumns).toStrictEqual([3, 4, 8]);
        expect(results[3].countingScores).toStrictEqual([62, 65, 65]);
    });

    test('Should show number 10 ranked team with correct counting columns', () => {
        expect(results[9].countingColumns).toStrictEqual([8, 4, 6]);
        expect(results[9].countingScores).toStrictEqual([64, 67, 67]);
    });

    test('Should show number 14 ranked team with correct counting columns', () => {
        expect(results[13].countingColumns).toStrictEqual([4, 6, 7]);
        expect(results[13].countingScores).toStrictEqual([67, 67, 69]);
    });
})


describe('Testing correct total for each row is calculated', () => {

    test('the number 1 ranked team should have correct total scores', () => {
        let result = results[0];
        result.total = add(result.countingScores);
        expect(result.total).toBe(190);
    })

    test('the number 4 ranked team should have correct total scores', () => {
        let result = results[3];
        const theTotal = add(result.countingScores);
        expect(theTotal).toBe(192);
    })

    test('the number 10 ranked team should have correct total scores', () => {
        let result = results[9];
        const theTotal = add(result.countingScores);
        expect(theTotal).toBe(198);
    })

    test('the number 14 ranked team should have correct total scores', () => {
        let result = results[13];
        const theTotal = add(result.countingScores);
        expect(theTotal).toBe(203);
    })
})
