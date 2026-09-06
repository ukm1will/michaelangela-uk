function getElementWithHighestScore(arr) {
    let maxElement = { colId: null, score: null };
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].score > maxElement.score) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

module.exports = getElementWithHighestScore