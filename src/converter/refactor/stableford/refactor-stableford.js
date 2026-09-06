function splitData(dataIn, array) {
    let index;
    const rows = dataIn.split("\n");
    for (index = 0; index < rows.length; ++index) {
        if (!rows[index]) return;
        if (rows[index].match(/^\d/)) {
            const currentSplitRow = rows[index].split("\t");
            const newElement = setData(currentSplitRow);
            array.push(newElement);
        }
    }
}

function setData(element) {
    const scoreElement = element[2].split(" ");
    const pts = parseInt(scoreElement[0]);
    const handicap = getHandicap(scoreElement[2]);
    return {
        ranking: parseInt(element[0]),
        player: element[1],
        pts: pts,
        handicap: handicap,
        gross: getGross(pts, handicap)
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

const refactorDataStableford = (dataIn) => {
    const cleanedData = dataIn.replace('&', '');
    const array = [];
    splitData(cleanedData, array);
    return array;
}



// const refactorDataMedal = (dataIn) => {
//     const cleanedData = dataIn.replace('&', '');
//     const dataStartingAtFirstScore = dataIn.split("Score\tPlacing\tCountback\n");
//     const array = [];
//     splitData(dataStartingAtFirstScore[1], array);
//     return array;
// }
//



export default refactorDataStableford;
