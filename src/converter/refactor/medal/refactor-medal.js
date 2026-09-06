
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
    const retval = {
        ranking: parseInt(element[0]),
        player: element[1],
        gross: parseInt(scoreElement[0]),
        handicap: parseInt(scoreElement[2]),
        nett: parseInt(scoreElement[4])
    }
    return retval;
}

const refactorDataMedal = (dataIn) => {
    const cleanedData = dataIn.replace('&', '');
    const array = [];
    splitData(cleanedData, array);
    return array;
}

export default refactorDataMedal;
