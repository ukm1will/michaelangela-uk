import getMappedResults from "../../functions/getMappedResults";
import getApplicationData from "../../functions/getApplicationData";

describe('Testing results functions', () => {

    const metadata = {competitionYear: null, competitionType: null, competitionSortOrder: null, logo: null};
    const applicationData = getApplicationData('/summerPairs2021', metadata);
    const results = getMappedResults(applicationData.results, metadata.competitionSortOrder);

    test('Should show correct number of rows', () => {
        expect(results.length).toBe(87);
    });

    test('Should show number 1 ranked team with correct players and score', () => {
        expect(results[0].total).toBe(190);
        expect(results[0].player_one).toBe('McCalmon, Lester H');
        expect(results[0].player_two).toBe('Deak, Michael');
    });

    test('Should show number 10 ranked team with correct players and score', () => {
        expect(results[9].total).toBe(198);
        expect(results[9].player_one).toBe('Moore, Nick');
        expect(results[9].player_two).toBe('Moore, Paul');
    });

    test('Should show the year of the competition', () => {
        expect(metadata.competitionYear).toBe('2021');
    });
})
