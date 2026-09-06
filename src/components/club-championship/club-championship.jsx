import React, {Component} from "react";
import Pagination from "../pagination";
import myOrderBy from "../../helpers/myOrderBy";
import _ from "lodash";
import getApplicationData from "../../functions/getApplicationData";
import getMappedResults from "../../functions/getMappedResults";
import setRankInOrderOfTotal from "../../functions/setRankInOrderOfTotal";
import ResultsTableScratch from "../resultsTableScratch";
import {paginate} from "../../functions/paginate";
import PageHeader from "../page-header/page-header";
import LinkToHomepage from "../link-to-homepage/link-to-homepage";

class ClubChampionship extends Component {
    state = {
        results: [],
        metadata: {competitionYear: null, competitionType: null, competitionSortOrder: null},
        pageSize: 500,
        currentPage: 1,
        sortColumn: {path: 'ranking', order: 'asc'},
        columns: [
            {path: 'ranking', label: '#'},
            {path: 'player_one', label: 'Player'},
            {path: 'g1s', label: 'Round One'},
            {path: 'g2s', label: 'Round Two'},
            {path: 'total', label: 'Total'}
        ]
    }

    handleSort = sortColumn => {
        this.setState({sortColumn, currentPage: 1})
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
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
        const {pageSize, currentPage, sortColumn} = this.state;

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

        return (
            <>
                <LinkToHomepage />
                <PageHeader dataTestId='competition-title' pageTitle={"Club Championship " + this.state.metadata.competitionYear} />
                <div className="centre"
                     style={{paddingBottom: "25px"}}>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>
                <ResultsTableScratch
                    results={results}
                    columns={this.state.columns}
                    sortColumn={this.state.sortColumn}
                    onSort={this.handleSort}
                />
                { this.state.metadata.competitionYear === "2023" &&
                    <div className="note">
                        <p>Scores were tied after two rounds.</p>
                        <p>In the resulting playoff, Mike Grieves def. Dean Morris on the 5th extra hole.</p>
                        <p><br/></p>
                        <p>According to 'master scoreboard' these were the only cards processed for both rounds.</p>
                    </div>
                }
                <div className="padding-after-table"></div>
            </>
        );
    }
}

export default ClubChampionship;
