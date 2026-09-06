import Tippy from "@tippy.js/react";

function renderLabel(column, sortColumn) {
    if (column.path === sortColumn.path)
        return <span className="highlightedSortColumn">{column.label}</span>
    return column.label;
}

const ColumnLabelWithTooltip = ({column, sortColumn}) => {
    return (
        <Tippy content={<span className="toolTipColumn">Sort by {mapTooltipMessage(column.label)}</span>}>
            <div>
                {renderLabel(column, sortColumn)}
            </div>
        </Tippy>
    )
}

function mapTooltipMessage(columnLabel) {
    switch (columnLabel) {
        case "#":  return "Ranking"
        case "R1": return "Round One"
        case "R2": return "Round Two"
        case "R3": return "Round Three"
        case "R4": return "Round Four"
        case "R5": return "Round Five"
        case "R6": return "Round Six"
        default:
            return columnLabel;
    }
}

export default ColumnLabelWithTooltip;

