function getElementWithLowestScore(arr) {
    let minElement = {colId: null, score: 999};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score !== 0) {
            if (arr[i].score < minElement.score) {
                minElement = arr[i];
            }
        }
    }
    if (minElement.score === 999)
        minElement.score = 0;

    return minElement;
}

module.exports = getElementWithLowestScore