import React from 'react';
import logo from '../images/logo.png';
import LinkToGrossScores from "./LinkToGrossScores/linkToGrossScores";

const Error = (error) => {
    let pairsError, pageNotFound, noDataEntered, noError, firstRowEmptyError, splittingError;
    if(error.error === 'PairsError')
        pairsError = true;
    else if(error.error === 'PageNotFound')
        pageNotFound = true;
    else if(error.error === 'NoDataEntered')
        noDataEntered = true;
    else if(error.error === 'FirstRowEmptyError')
        firstRowEmptyError = true;
    else if(error.error === 'SplittingError')
        splittingError = true;
    else
        noError = true;
    return (
        <>
            <div className="centre">
                <img className="divLogo" src={logo} alt="Golfer logo"/>
            </div>
            { pairsError && <h3 className="message">Sorry... pairs competitions cannot be converted</h3> }
            { pageNotFound && <h3 className="message">Sorry...  The page you are looking for does not exist.</h3> }
            { noDataEntered && <h3 className="message">You need to enter data for gross scores to be displayed.</h3> }
            { firstRowEmptyError && <h3 className="message">There is an empty line at the top of the textbox.</h3> }
            { splittingError && <h3 className="message">Incorrect format. Please copy and paste the whole page.</h3> }
            { noError && <h3 className="message">Sorry... something's gone wrong.</h3> }
            { (pairsError || noDataEntered || firstRowEmptyError || splittingError) &&  <LinkToGrossScores /> }
            <div className="centre">
                <a href="/">Return to home page</a>
            </div>
        </>
    );
}

export default Error;
