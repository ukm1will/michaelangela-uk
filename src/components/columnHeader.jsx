import React from "react";
import 'tippy.js/dist/tippy.css'
import ColumnLabelWithTooltip from "./columnLabelWithTooltip";

function renderSortIcon(column, sortColumn) {
    if (column.path !== sortColumn.path) return null;
    return sortColumn.order === "asc"
        ? <i className="fa fa-sort-desc"/>
        : <i className="fa fa-sort-asc"/>
}

const ColumnHeader = (props) => {
    return (
        <div>
            <div className="float-child">
                <ColumnLabelWithTooltip column={props.column} sortColumn={props.sortColumn}>
                </ColumnLabelWithTooltip>
            </div>
            <div className="float-child">
                <div className="inner">{renderSortIcon(props.column, props.sortColumn)}</div>

            </div>
        </div>
    );
}

export default ColumnHeader;