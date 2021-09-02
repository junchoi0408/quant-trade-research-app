import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Nav from "./Nav";
import Profile from "../routes/Profile";
import Portfolio from "../routes/Portfolio";
import Research from "../routes/Research";
import Blog from "../routes/Blog";
import About from "../routes/About";

function AppRouter({ isLoggedIn, onSearchChange, finData, search }) {
    return (
        <Router >
            <Nav onSearchChange={onSearchChange} isLoggedIn={isLoggedIn}/>
            <Switch>
                {isLoggedIn ? 
                <>
                    <Route exact path="/">
                        <Home isLoggedIn={isLoggedIn} finData={finData} search={search}/>
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route exact path="/research">
                        <Research finData={finData} search={search}/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Redirect from="/auth" to="/" />
                </> : 
                <>
                    <Route exact path="/">
                        <Home isLoggedIn={isLoggedIn}/>
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/auth">
                        <Auth />
                    </Route>
                    <Redirect from="*" to="/" />
                </>
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;