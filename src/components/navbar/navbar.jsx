import React from "react";
import PageHeader from "../page-header/page-header";

const NavBar = () => {
    return (
        <>
            <PageHeader dataTestId='current-year' pageTitle="2026"/>
            <div className="center">
                <ul className="list-group"
                    style={{paddingLeft: '25%'}}>
                    <li className="list-group-item"><a href="/summerPairs2026">Summer Pairs 2026</a></li>
                </ul>
                <ul className="list-group"
                    style={{paddingLeft: '25%'}}>
                    <li className="list-group-item"><a href="/millenniumCup2026">Millennium Cup 2026</a></li>
                </ul>
                <ul className="list-group"
                    style={{paddingLeft: '25%'}}>
                    <li className="list-group-item"><a href="/converter">Gross Scores Converter</a></li>
                </ul>

                <ul className="list-group"
                    style={{paddingLeft: '25%'}}>
                    <li className="list-group-item"><a href="/archive">Archive</a></li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;

