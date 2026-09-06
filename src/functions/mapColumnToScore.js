function mapColumnToScore(result) {
    const retval = [
        {colId: 3, score: result.g1s},
        {colId: 4, score: result.g2s},
        {colId: 5, score: result.g3s},
        {colId: 6, score: result.g4s},
        {colId: 7, score: result.g5s},
        {colId: 8, score: result.g6s},
        {colId: 9, score: result.g7s},
    ];
    return retval;
}

module.exports = mapColumnToScore
