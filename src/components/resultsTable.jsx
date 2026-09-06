import React from 'react';
import ColumnHeader from "./columnHeader";

function renderColumnHeader(column, sortColumn) {
    return <ColumnHeader
        column={column}
        sortColumn={sortColumn}
    />;
}

function renderScoreCell(score, column, countingColumns = []) {
    const indexFound = countingColumns.indexOf(column);
    if (indexFound !== -1)
        return(<td><span className="highlightedScore">{score}</span></td>);
    else
        if(score !== 0)
            return(<td><span className="nonHighlightedScore">{score}</span></td>);
        else
            return(<td>-</td>);
}

function renderTotalCell(total) {
    const isLessThan100 = total < 100;
    // To align the totals nicely, if the total is less than 3 digits, add a space each side of the total.
    return <td><span className="totalScore">{ isLessThan100 && '\u00a0'}{total}{ isLessThan100 && '\u00a0'}</span></td>
}

function renderTableRow(result) {
    return <>
        <td>{result.ranking}</td>
        <td>{result.player_one}</td>
        { result.player_two &&  <td>{result.player_two}</td>}
        {renderScoreCell(result.g1s, 3, result.countingColumns)}
        {renderScoreCell(result.g2s, 4, result.countingColumns)}
        {renderScoreCell(result.g3s, 5, result.countingColumns)}
        {renderScoreCell(result.g4s, 6, result.countingColumns)}
        {renderScoreCell(result.g5s, 7, result.countingColumns)}
        {renderScoreCell(result.g6s, 8, result.countingColumns)}
        {renderTotalCell(result.total)}
    </>
}

function raiseSort(path, sortColumn, onSort) {
    if(sortColumn.path === path) {
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    }
    else {
        sortColumn.path = path;
        sortColumn.order = "desc";
    }
    onSort(sortColumn);
}

const ResultsTable= (props) => {
    const { results, columns, sortColumn} = props;
    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map(column =>
                    <th key={column.path}
                        className="clickable" onClick={() => raiseSort(column.path, sortColumn, props.onSort)}>
                        {renderColumnHeader(column, sortColumn)}
                    </th>
                )}
            </tr>
            </thead>
            <tbody>
            {results.map(result =>
                <tr key={result.ranking}>
                    {renderTableRow(result)}
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default ResultsTable;
