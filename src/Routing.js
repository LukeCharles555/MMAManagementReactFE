import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from "./components/LoginPage";
import FighterAppPage from "./components/FighterAppPage";
import FighterStatsPage from "./components/FighterStatsPage";

export default function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/FighterApp" component={FighterAppPage} />
                    {/* <Route path="/FighterStats" component={FighterStatsPage} /> */}
                </Switch>
            </Router>
        </div>
    )
}