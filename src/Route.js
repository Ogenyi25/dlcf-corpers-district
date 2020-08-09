import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import Location from './screens/Location';
import Event from './screens/Events';
import Sermon from './screens/Sermon';
import Contact from './screens/Contacts';
import Sunday from './sermons/Sunday';
import SpecialSeries from './sermons/SpecialSeries';
import Thursday from './sermons/Thursday';
import Songs from './sermons/Songs';




class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/sunday-message" component={Sunday} />
                    <Route path="/thursday-message" component={Thursday} />
                    <Route path="/choir-songs" component={Songs} />
                    <Route path="/special-series" component={SpecialSeries} />
                    <Route path="/event" component={Event} />
                    <Route path="/sermon" component={Sermon} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/location" component={Location} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;