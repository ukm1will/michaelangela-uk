import add from "../helpers/arrowFunctions";
import setRankInOrderOfTotal from "./setRankInOrderOfTotal";
import selectCountingItems from "./selectCountingItems";
const {CountingItems} = require("../enums/enums");

const getMappedResults = (resultsIn, sortOrder) => {
    let results = resultsIn.map(result => {
        result = {ranking: null, ...result, countingColumns: [], countingScores: [], nofCountingScores: 0, total: 0};
        result.countingColumns = selectCountingItems(3, result, CountingItems.COLUMNS, sortOrder);
        result.countingScores = selectCountingItems(3, result, CountingItems.SCORES, sortOrder);
        result.nofCountingScores = result.countingScores.filter(v => v !== 0).length;
        result.total = add(result.countingScores);
        return result;
    })
    results = setRankInOrderOfTotal(results, sortOrder);
    return results;
}

export default getMappedResults
