import React from 'react';
import ColumnHeader from "./columnHeader";

function renderColumnHeader(column, sortColumn) {
    // We don't want the 'ranking' column clickable when dealing with the convert feature
    if(column.path === 'ranking') {
        return;
    }
    return <ColumnHeader
        column={column}
        sortColumn={sortColumn}
    />;
}

function renderTableRow(result, sortColumn, resultsType) {
    return <>
        {renderScoreCell(result.ranking, sortColumn, 'ranking')}
        {renderScoreCell(result.player, sortColumn, 'player')}
        {renderScoreCell(result.gross, sortColumn, 'gross')}
        {renderScoreCell(result.handicap, sortColumn, 'handicap')}
        { resultsType === "Strokeplay" ? renderScoreCell(result.nett, sortColumn, 'nett') : renderScoreCell(result.pts, sortColumn, 'pts')}
    </>
}

function renderScoreCell(score, sortColumn, column) {
    if (sortColumn.path === column)
        return (<td><span className="currentSortColumn">{score}</span></td>);
    return <td>{score}</td>
}

function raiseSort(path, sortColumn, onSort) {
    if (sortColumn.path === path) {
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
        sortColumn.path = path;
        sortColumn.order = "desc";
    }
    onSort(sortColumn);
}


const ResultsTableConverted = (props) => {
    let filteredColumns;
    const { resultsType, results, columns, sortColumn} = props;

    // Remove 'nett' column if stableford, remove 'pts' if medal competition
    if(resultsType === "Stableford" || resultsType === "StablefordSeniors") {
        filteredColumns = columns.filter(column => {  return column.path !== 'nett' })
    }

    else if(resultsType === "Strokeplay") {
        filteredColumns = columns.filter(column => {  return column.path !== 'pts' });
    }


    return (
        <table style={{ width: "80%", margin: "0 auto"}} className="table">
            <thead>
            <tr>
                {filteredColumns.map(column =>
                    <th key={column.path}
                        className="clickable"
                        onClick={() => raiseSort(column.path, sortColumn, props.onSort)}>
                        { renderColumnHeader(column, sortColumn)}
                    </th>
                )}
            </tr>
            </thead>
            <tbody>
            {results.map(result =>
                <tr key={result.ranking}>
                    { renderTableRow(result, sortColumn, resultsType)}
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default ResultsTableConverted;
