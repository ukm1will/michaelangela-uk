import React from 'react';
import ColumnHeader from "./columnHeader";

function renderColumnHeader(column, sortColumn) {
    return <ColumnHeader
        column={column}
        sortColumn={sortColumn}
    />;
}

function renderTableRow(result) {
    return <>
        <td>{result.ranking}</td>
        <td>{result.player_one}</td>
        <td>{result.g1s}</td>
        <td>{result.g2s}</td>
        <td><span className="totalScore">{result.total}</span></td>
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

const ResultsTableScratch= (props) => {
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

export default ResultsTableScratch;
