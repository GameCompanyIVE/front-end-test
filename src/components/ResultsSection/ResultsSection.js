import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import Matches from "./Matches/Matches";
import Battles from "./Battles/Battles";

const ResultsSection = ()=>{
    return(
        <section className="results-section">
            <div className="container">
                <h2>Расписание и результаты</h2>
                <div className="results-wrap">
                    <Router>
                        <div className="results-button">
                            <NavLink to="/" exact>Matches</NavLink>
                            <NavLink to="/battles">Battles</NavLink>
                        </div>
                        <Switch>
                            <Route exact path="/">
                                <Matches />
                            </Route>
                            <Route path="/battles">
                                <Battles />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </section>
    )
}



export default ResultsSection;