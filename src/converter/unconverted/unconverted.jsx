import React, {useState} from "react";
import Converted from "../converted/converted";
import PageHeader from "../../components/page-header/page-header";
import LinkToHomepage from "../../components/link-to-homepage/link-to-homepage";

const Unconverted = () => {
    const input = "";
    const [userInput, setUserInput] = useState(input);
    const [isConvertButtonClicked, setIsConvertButtonClicked] = useState(false);
    const history = {location: {pathname: '/convertedTable'}};

    const handleConvertButtonClicked = () => {
        setIsConvertButtonClicked(true);
    }

    return (
        <>
            {!isConvertButtonClicked &&
                <>
                    <LinkToHomepage/>
                    <PageHeader dataTestId='title'
                                pageTitle=""/>
                    <div className="my-message">
                        <p style={{
                            color: "darkblue", textAlign: "center", width: "75%", fontSize: "11pt"
                        }}>
                            Open a new tab and navigate to Master Scoreboard.<br/>
                            Select a result from 'Results - Strokeplay Competitions' and choose a competition.<br/><br/>
                            Click the link. Once the result is displayed, 'select all' then copy.<br/>
                            Return to this tab and paste the copied text into the textbox below.<br/><br/>
                            Click the 'convert' button to see the result sorted by 'gross' score.<br/>
                            You can also click the heading of any other column to sort by that column.<br/>
                            Click again to reverse sort order.
                        </p>
                    </div>

                    <div className="centre">
                        <textarea
                            autoFocus={true}
                            name="competition"
                            rows="15"
                            cols="60"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}/>
                    </div>

                    <div className="centre">
                        <button style={{ width: "100px", height: "40px"}} onClick={() => handleConvertButtonClicked()}
                                type="button"
                                className="btn btn-primary btn-sm">
                            Convert
                        </button>
                    </div>
                </>
            }
            {
                isConvertButtonClicked && <Converted history={history}
                                                     userInput={userInput}/>
            }
        </>
    );
}

export default Unconverted;

