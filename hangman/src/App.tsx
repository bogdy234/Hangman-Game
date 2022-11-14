import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = (): React.ReactElement => {
    const [sentence, setSentence] = useState<string>("");

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home sentence={sentence} setSentence={setSentence}></Home>
                </Route>
                <Route path="/game">
                    <Game sentence={sentence}></Game>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
