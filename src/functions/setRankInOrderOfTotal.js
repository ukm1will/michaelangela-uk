import {SortOrder} from "../enums/enums";
const _ = require("lodash");

function setRankInOrderOfTotal(results, sortOrder) {

    let sort = null;
    let order = null;

    if (sortOrder === SortOrder.HIGHEST) {
        sort = 'total';
        order = 'desc';
    } else if (sortOrder === SortOrder.LOWEST) {
        sort = ['nofCountingScores', 'total'];
        order = ['desc', 'asc'];
    } else {
        throw new Error('sortOrder is not specified');
    }

    const orderedResults = _.orderBy(results, sort, order);
    orderedResults.forEach((item, index) => item.ranking = index + 1);
    return orderedResults;
}

export default setRankInOrderOfTotal

