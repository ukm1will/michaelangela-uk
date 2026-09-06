const mapColumnToScore = require("./mapColumnToScore");
const {SortOrder, CountingItems} = require("../enums/enums");
const getElementWithHighestScore = require("./getElementWithHighestScore");
const getElementWithLowestScore = require("./getElementWithLowestScore");

function selectCountingItems(nofCountingColumns, result, itemsToCount, sortOrder) {
    if (sortOrder === SortOrder.HIGHEST) {
        return selectCountingItemsHighest(nofCountingColumns, result, itemsToCount);
    } else if (sortOrder === SortOrder.LOWEST) {
        return selectCountingItemsLowest(nofCountingColumns, result, itemsToCount);
    } else {
        throw new Error('sortOrder is not specified');
    }
}

function selectCountingItemsLowest(nofCountingColumns, result, itemsToCount) {
    let countingItems = [];
    let filteredArray = mapColumnToScore(result);
    let element = {colId: 0, score: 0};
    for (let i = 0; i < nofCountingColumns; i++) {
        // eslint-disable-next-line no-loop-func
        filteredArray = filteredArray.filter(e => e.colId !== element.colId);
        element = getElementWithLowestScore(filteredArray)
        if (itemsToCount === CountingItems.COLUMNS)
            countingItems.push(element.colId);
        else if (itemsToCount === CountingItems.SCORES)
            countingItems.push(element.score);
        else {
            throw new Error('itemsToCount is not specified for LOWEST');
        }
    }
    return countingItems;
}

function selectCountingItemsHighest(nofCountingColumns, result, itemsToCount) {
    let countingItems = [];
    let filteredArray = mapColumnToScore(result);
    let element = {colId: 0, score: 0};
    for (let i = 0; i < nofCountingColumns; i++) {
        // eslint-disable-next-line no-loop-func
        filteredArray = filteredArray.filter(e => e.colId !== element.colId);
        element = getElementWithHighestScore(filteredArray)
        if (itemsToCount === CountingItems.COLUMNS)
            countingItems.push(element.colId);
        else if (itemsToCount === CountingItems.SCORES)
            countingItems.push(element.score);
        else {
            throw new Error('itemsToCount is not specified for HIGHEST');
        }
    }
    return countingItems;
}

module.exports = selectCountingItems
