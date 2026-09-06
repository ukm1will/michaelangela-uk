import myOrderBy from "../../helpers/myOrderBy";
import _ from "lodash";
import getApplicationData from "../../functions/getApplicationData";
import getMappedResults from "../../functions/getMappedResults";

describe('Testing sort function to relegate zero value to end of the array', () => {

    const metadata = {competitionYear: null, competitionType: null, competitionSortOrder: null, logo: null};
    const applicationData = getApplicationData('/summerPairs2021', metadata);
    const results = getMappedResults(applicationData.results, metadata.competitionSortOrder);

    test('Should sort ignoring zeros ascending', () => {
        const sortColumn = {path: 'ranking', order: 'asc'};
        const regex = /^g\ds/g;
        let orderedResults = null;
        if (sortColumn.order === "asc" && regex.test(sortColumn.path))
            orderedResults = myOrderBy(results, sortColumn.path)
        else
            orderedResults = _.orderBy(results, [sortColumn.path], [sortColumn.order]);

        expect(orderedResults[0].player_one).toBe('McCalmon, Lester H');
        expect(orderedResults[0].player_two).toBe('Deak, Michael');
    })

    test('Should sort ignoring zeros descending', () => {
        const sortColumn = {path: 'ranking', order: 'desc'};
        const regex = /^g\ds/g;
        let orderedResults = null;
        if (sortColumn.order === "asc" && regex.test(sortColumn.path))
            orderedResults = myOrderBy(results, sortColumn.path)
        else
            orderedResults = _.orderBy(results, [sortColumn.path], [sortColumn.order]);
        expect(orderedResults[0].player_one).toBe('Brown, Chris');
        expect(orderedResults[0].player_two).toBe('Murphy, John P');
    })
})