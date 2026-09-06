import getMappedResults from "../../functions/getMappedResults";
import getApplicationData from "../../functions/getApplicationData";


const metadata = {competitionYear: null, competitionType: null, competitionSortOrder: null, logo: null};
const applicationData = getApplicationData('/winterPairs2019', metadata);

const results = getMappedResults(applicationData.results, metadata.competitionSortOrder);

describe('Testing application data', () => {

    test('Should show correct number of rows', () => {
        expect(results.length).toBe(63);
    });

    test('Should show number 1 ranked team with correct players and score', () => {
        expect(results[0].total).toBe(132);
        expect(results[0].player_one).toBe('O\'Sullivan, Mark');
        expect(results[0].player_two).toBe('Jones, Marc');
    });

    test('Should show number 10 ranked team with correct players and score', () => {
        expect(results[9].total).toBe(123);
        expect(results[9].player_one).toBe('Bowley, Ben');
        expect(results[9].player_two).toBe('Millard, Andrew S.');
    });

    test('Should show the year of the competition', () => {
        expect(metadata.competitionYear).toBe('2019 - 2020');
    });
})
