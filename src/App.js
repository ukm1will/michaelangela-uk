import "./App.css";
import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ResultsPairs from "./components/results-pairs/results-pairs";
import ResultsMillennium from "./components/results-millennium/results-millennium";
import Message from "./components/message";
import ErrorBoundary from "./components/errorBoundary";
import Navbar from "./components/navbar/navbar";
import NavBarArchive from "./components/navbar-archive/navbar-archive";
import ClubChampionship from "./components/club-championship/club-championship";
import Unconverted from "./converter/unconverted/unconverted";

// noinspection JSValidateTypes
class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <ErrorBoundary>
            <Switch>
              <Route path="/archive" component={NavBarArchive} />
              <Route path="/converter" component={Unconverted} />
              <Route
                path="/clubChampionship2022"
                component={ClubChampionship}
              />
              <Route
                path="/clubChampionship2023"
                component={ClubChampionship}
              />
              <Route
                path="/clubChampionship2024"
                component={ClubChampionship}
              />
              <Route
                path="/clubChampionship2025"
                component={ClubChampionship}
              />
              <Route path="/millenniumCup2021" component={ResultsMillennium} />
              <Route path="/millenniumCup2022" component={ResultsMillennium} />
              <Route path="/millenniumCup2023" component={ResultsMillennium} />
              <Route path="/millenniumCup2024" component={ResultsMillennium} />
              <Route path="/millenniumCup2025" component={ResultsMillennium} />
              <Route path="/millenniumCup2026" component={ResultsMillennium} />
              <Route path="/summerPairs2021" component={ResultsPairs} />
              <Route path="/summerPairs2022" component={ResultsPairs} />
              <Route path="/summerPairs2023" component={ResultsPairs} />
              <Route path="/summerPairs2024" component={ResultsPairs} />
              <Route path="/summerPairs2025" component={ResultsPairs} />
              <Route path="/summerPairs2026" component={ResultsPairs} />
              <Route path="/winterPairs2025" component={ResultsPairs} />
              <Route path="/winterPairs2024" component={ResultsPairs} />
              <Route path="/winterPairs2023" component={ResultsPairs} />
              <Route path="/winterPairs2022" component={ResultsPairs} />
              <Route path="/winterPairs2021" component={ResultsPairs} />
              <Route path="/not-found" component={Message} />
              <Route path="/" exact component={Navbar} />
              <Redirect to="/not-found" />
            </Switch>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
