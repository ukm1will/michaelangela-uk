const _ = require("lodash");

function setRankInOrder(sortColumn, results) {
    let orderedResults;
    if (sortColumn.path === 'ranking') {
        orderedResults = results;
    }
    else {
        orderedResults = _.orderBy(results, [sortColumn.path, 'player'], [sortColumn.order, 'asc']);
    }
    orderedResults.forEach((item, index) => item.ranking = index + 1);
    return orderedResults;
}

export default setRankInOrder
