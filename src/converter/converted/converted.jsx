import React, {Component} from "react";
import getApplicationData from "../../functions/getApplicationData";
import PageHeader from "../../components/page-header/page-header";
import LinkToHomepage from "../../components/link-to-homepage/link-to-homepage";
import ResultsTableConverted from "../../components/resultsTableConverted";
import setRankInOrder from "../../functions/setRankInOrder/setRankInOrder";
import refactorDataMedal from "../refactor/medal/refactor-medal";
import refactorDataStableford from "../refactor/stableford/refactor-stableford";
import getResultsType from "../../functions/getResultsType/getResultsType";
import refactorDataStablefordSeniors from "../refactor/stableford-senior/refactor-stableford-seniors";
import getMetadataAndResultFromHtml from "../../functions/getMetadataAndResultFromHtml/getMetadataAndResultFromHtml";

class Converted extends Component {
    state = {
        metadata: {competitionYear: null, competitionType: null, competitionSortOrder: null},
        sortColumn: {path: 'gross', order: 'asc'},
        columns: [
            {path: 'ranking', label: '#'},
            {path: 'player', label: 'Player'},
            {path: 'gross', label: 'Gross'},
            {path: 'handicap', label: 'Handicap'},
            {path: 'nett', label: 'Nett'},
            {path: 'pts', label: 'Pts'},
        ]
    }
    handleSort = sortColumn => {
        this.setState({sortColumn})
    }

    componentDidMount() {
        const { history } = this.props;
        const pathname = history.location.pathname;
        const applicationData = getApplicationData(pathname, this.state.metadata);
        this.setState({ metadata: applicationData.metadata});
}

    render() {
        let results;

        // const scoreData = getResultsOnlyFromString(this.props.userInput);

        const competitionData = getMetadataAndResultFromHtml(this.props.userInput);
        const metaData = competitionData[0];
        const scoreData = competitionData[1]; 
        const rt = getResultsType(scoreData);
        if(rt === "Strokeplay")
           results = refactorDataMedal(scoreData);
        else if(rt === "Stableford")
           results = refactorDataStableford(scoreData);
        else if(rt === "StablefordSeniors")
           results = refactorDataStablefordSeniors(scoreData);
        else if(rt === "Pairs")
            throw new Error("PairsError");
        else if(rt === "FirstRowEmpty")
            throw new Error("FirstRowEmptyError");
        else if(rt === "NoDataEntered")
            throw new Error("NoDataEntered")
        else
            throw new Error("Error in converted render()");

        const { sortColumn, columns} = this.state;
        results = setRankInOrder(sortColumn, results);
        const str = `${metaData[0]} on ${metaData[1]}`;
        return (
            <>
                <LinkToHomepage/>
                <PageHeader dataTestId='title'
                            pageTitle={str}/>
                <ResultsTableConverted
                    resultsType={rt}
                    results={results}
                    columns={columns}
                    sortColumn={sortColumn}
                    onSort={this.handleSort}
                />
            </>
        );
    }
}

export default Converted;

