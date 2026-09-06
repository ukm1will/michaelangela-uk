import React from "react";
import PageHeader from "../page-header/page-header";
import LinkToHomepage from "../link-to-homepage/link-to-homepage";

const NavBarArchive = () => {
    return (
        <>
            <LinkToHomepage />
            <PageHeader dataTestId='competition-title' pageTitle="Archive" />
            <div data-testid="custom-element-2026" className="center">
                <ul className="list-group" style={{ paddingLeft: '25%'}}>
                    <h5 align="center">2026</h5>
                    <li className="list-group-item"><a href="/winterPairs2025">Winter Pairs 2025/26</a></li>
                </ul>
            </div>
            <div data-testid="custom-element-2025" className="center">
                <ul className="list-group" style={{ paddingLeft: '25%'}}>
                    <h5 align="center">2025</h5>
                    <li className="list-group-item"><a href="/summerPairs2025">Summer Pairs 2025</a></li>
                    <li className="list-group-item"><a href="/millenniumCup2025">Millennium Cup 2025</a></li>
                    <li className="list-group-item"><a href="/winterPairs2024">Winter Pairs 2024/25</a></li>
                    <li className="list-group-item"><a href="/clubChampionship2025">Club Championship 2025</a></li>
                </ul>
            </div>
            <div data-testid="custom-element-2024" className="center">
                <ul className="list-group" style={{ paddingLeft: '25%'}}>
                    <h5 align="center">2024</h5>
                    <li className="list-group-item"><a href="/summerPairs2024">Summer Pairs 2024</a></li>
                    <li className="list-group-item"><a href="/millenniumCup2024">Millennium Cup 2024</a></li>
                    <li className="list-group-item"><a href="/winterPairs2023">Winter Pairs 2023/24</a></li>
                    <li className="list-group-item"><a href="/clubChampionship2024">Club Championship 2024</a></li>
                </ul>
            </div>
            <div data-testid="custom-element-2023" className="center">
                <ul className="list-group" style={{ paddingLeft: '25%'}}>
                    <h5 align="center">2023</h5>
                    <li className="list-group-item"><a href="/summerPairs2023">Summer Pairs 2023</a></li>
                    <li className="list-group-item"><a href="/millenniumCup2023">Millennium Cup 2023</a></li>
                    <li className="list-group-item"><a href="/winterPairs2022">Winter Pairs 2022/23</a></li>
                    <li className="list-group-item"><a href="/clubChampionship2023">Club Championship 2023</a></li>
                </ul>
            </div>
            <div data-testid="custom-element-2022" className="center">
                <ul className="list-group" style={{ paddingLeft: '25%'}}>
                    <h5 align="center">2022</h5>
                    <li className="list-group-item"><a href="/summerPairs2022">Summer Pairs 2022</a></li>
                    <li className="list-group-item"><a href="/millenniumCup2022">Millennium Cup 2022</a></li>
                    <li className="list-group-item"><a href="/winterPairs2021">Winter Pairs 2021/22</a></li>
                    <li className="list-group-item"><a href="/clubChampionship2022">Club Championship 2022</a></li>
                </ul>
            </div>
            <div data-testid="custom-element-2021"  className="center">
                <ul className="list-group" style={{ paddingLeft: '25%'}}>
                    <h5 align="center">2021</h5>
                    <li className="list-group-item"><a href="/summerPairs2021">Summer Pairs 2021</a></li>
                    <li className="list-group-item"><a href="/millenniumCup2021">Millennium Cup 2021</a></li>
                </ul>
            </div>
        </>
    );
}

export default NavBarArchive;
