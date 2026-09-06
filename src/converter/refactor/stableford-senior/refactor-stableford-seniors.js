function splitData(dataIn, array) {
    let index;
    const rows = dataIn.split("\n");
    for (index = 0; index < rows.length; ++index) {
        if (!rows[index]) return;
        if (rows[index].match(/^\d/)) {
            const currentRow = rows[index] + "\t" + rows[index+1];
            const currentSplitRow = currentRow.split("\t");
            const newElement = setData(currentSplitRow);
            array.push(newElement);
        }
    }
}

function setData(element) {
    const scoreElement = element[3].split(" ");
    const pts = parseInt(scoreElement[0]);
    const handicap = getHandicap(scoreElement[2]);
    const gross = getGross(pts, handicap);
    return {
        ranking: parseInt(element[0]),
        player:  element[1],
        pts: pts,
        handicap: handicap,
        gross: gross
    }
}

function getHandicap(str) {
    const splitString = str.split(/[()]+/);
    return parseInt(splitString[1]);
}

function getGross(pts, handicap) {
    const beatHandicapBy = pts - 36; // 42 - 36 = 6
    const handicapMinusBeatHandicapBy = handicap - beatHandicapBy; // 16 - 6 = 10
    return 72 + handicapMinusBeatHandicapBy; // 72 + 10 = 82
}

const refactorDataStablefordSeniors = (dataIn) => {
    const cleanedData = dataIn.replace('&', '');
    const array = [];
    splitData(cleanedData, array);
    return array;
}

export default refactorDataStablefordSeniors;
