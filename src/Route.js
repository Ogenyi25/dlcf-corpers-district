import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './screens/Home';




class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;