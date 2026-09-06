const getResultsType = (dataIn) => {
    const ResultsType = {
        NO_DATA_ENTERED: "NoDataEntered",
        STABLEFORD: "Stableford",
        STROKEPLAY: "Strokeplay",
        PAIRS: "Pairs",
        STABLEFORD_SENIORS: "StablefordSeniors",
        FIRST_ROW_EMPTY: "FirstRowEmpty",
        UNKNOWN_TYPE: "Unknown"
    }

    const rows = dataIn.split("\n");
    if(dataIn === "")
        return ResultsType.NO_DATA_ENTERED
    if(rows[0] === "")
        return ResultsType.FIRST_ROW_EMPTY
    if (rows[2] === " ")
        return ResultsType.PAIRS;
    else if (!rows[0].includes("pts") && rows[1].includes("pts"))
        return ResultsType.STABLEFORD_SENIORS;
    else if (dataIn.includes("="))
        return ResultsType.STROKEPLAY;
    else if (dataIn.includes("pts"))
        return ResultsType.STABLEFORD;
    else
        return ResultsType.UNKNOWN_TYPE;
}

export default getResultsType;
