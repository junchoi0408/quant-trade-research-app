import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Nav from "./Nav";
import Profile from "../routes/Profile";

function AppRouter({ isLoggedIn }) {
    return (
        <Router >
            <Nav isLoggedIn={isLoggedIn}/>
            <Switch>
                {isLoggedIn ? 
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    {/* <Redirect from="*" to="/" /> */}
                </> : 
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/auth">
                        <Auth />
                    </Route>
                    {/* <Redirect from="*" to="/" /> */}
                </>
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;