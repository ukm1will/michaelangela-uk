import React from "react";
import logo from "../../images/logo.png";

const PageHeader = (props) => {
    const {dataTestId, pageTitle} = props;
    return (
        <>
            <div className="centre">
                <img className="divLogo" src={logo} alt="Golfer logo"/>
            </div>
            <p data-testid={dataTestId} className="centre">
                {pageTitle}
            </p>
        </>
    );
}

export default PageHeader;