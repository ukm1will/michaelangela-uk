const getMetadataAndResultFromHtml = (dataIn) => {
    let resultsError;
    let arr = [];
    try {
        const competitionData = extractCompetitionDataFromString(dataIn);
        arr.push(competitionData);
        const results = extractResultsFromString(dataIn);
        arr.push(results);
        return arr;
    } catch (err) {
        if (dataIn === "")
            resultsError = "NoDataEntered";
        else if (err.message === "Cannot read properties of undefined (reading 'split')")
            resultsError = "SplittingError"
        throw new Error(resultsError);
    }
}

const getDate = (dataIn) => {
    return dataIn.split(" on ")[1].split(" at ")[0];
}

const extractCompetitionDataFromString = (dataIn) => {
    let retval = [];
    let arr = [];
    arr = dataIn.split("\n");
    retval.push(arr[1]);
    retval.push(getDate(arr[2]));
    return retval;
}

const extractResultsFromString = (dataIn) => {
    // Will take string and remove everything before (and including) "Score Placing Countback"
    // and everything after (and including) "Number of Cards Processed"
    return dataIn.split("Score\tPlacing\tCountback\n")[1].split("Number of Cards Processed")[0];
}

export default getMetadataAndResultFromHtml;



