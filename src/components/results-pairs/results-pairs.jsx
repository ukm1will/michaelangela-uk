import React, {Component} from 'react';
import Pagination from "../pagination";
import {paginate} from "../../functions/paginate";
import ResultsTable from "../resultsTable";
import _ from 'lodash';
import getMappedResults from "../../functions/getMappedResults";
import setRankInOrderOfTotal from "../../functions/setRankInOrderOfTotal";
import getApplicationData from "../../functions/getApplicationData";
import {CompetitionType} from "../../enums/enums";
import myOrderBy from "../../helpers/myOrderBy"
import PageHeader from "../page-header/page-header";
import LinkToHomepage from "../link-to-homepage/link-to-homepage";

class ResultsPairs extends Component {
    state = {
        results: [],
        metadata: {competitionYear: null, competitionType: null, competitionSortOrder: null},
        pageSize: 500,
        currentPage: 1,
        sortColumn: {path: 'ranking', order: 'asc'},
        columns: [
            {path: 'ranking', label: '#'},
            {path: 'player_one', label: 'Player One'},
            {path: 'player_two', label: 'Player Two'},
            {path: 'g1s', label: 'R1'},
            {path: 'g2s', label: 'R2'},
            {path: 'g3s', label: 'R3'},
            {path: 'g4s', label: 'R4'},
            {path: 'g5s', label: 'R5'},
            {path: 'g6s', label: 'R6'},
            {path: 'total', label: 'Total'}
        ]
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleSort = sortColumn => {
        this.setState({sortColumn, currentPage: 1})
    }

    componentDidMount() {
        const {history} = this.props;
        const pathname = history.location.pathname;
        const applicationData = getApplicationData(pathname, this.state.metadata );
        const competitionSortOrder = applicationData.metadata.competitionSortOrder;
        let results = getMappedResults(applicationData.results, competitionSortOrder);
        results = setRankInOrderOfTotal(results, competitionSortOrder);
        this.setState({results, metadata: applicationData.metadata});
    }

    render() {
        const {length: count} = this.state.results;
        const {pageSize, currentPage, sortColumn, metadata} = this.state;

        // Just to explain what's going on with the sorting.
        // Lodash's sorting works perfectly well, but when sorting in 'ascending' order
        // I don't want rows with a zero to show up first. So I've therefore added
        // my own sort method to take account of this. Effectively, what it's doing
        // is relegating the rows with zero, to the bottom of the array, so that the
        // user does not have to scroll halfway down the page to get a meaningful value.

        const regex = /^g\ds/g;    // regex looks value like, g1s, g2s etc. It ignores ranking and total.
        let orderedResults = null;

        // We only want it to use my 'custom' method of sorting when the sortOrder is ascending. When it's
        // descending, zeros already have a lower precedence, so we can use the lodash sort method.

        if (sortColumn.order === "asc" && regex.test(sortColumn.path))
            orderedResults = myOrderBy(this.state.results, sortColumn.path)
        else
            orderedResults = _.orderBy(this.state.results, [sortColumn.path], [sortColumn.order]);

        const results = paginate(orderedResults, currentPage, pageSize);
        const competitionTitle = metadata.competitionType === CompetitionType.STABLEFORD ? "Winter Pairs " : "Summer Pairs ";

        return (
            <>
                <LinkToHomepage />
                <PageHeader dataTestId='competition-title' pageTitle={ competitionTitle + this.state.metadata.competitionYear} />
                <div className="centre"
                     style={{paddingBottom: "25px"}}>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>
                <ResultsTable
                    results={results}
                    columns={this.state.columns}
                    sortColumn={this.state.sortColumn}
                    onSort={this.handleSort}
                />
                <div className="padding-after-table"></div>
            </>
        );
    }
}

export default ResultsPairs;