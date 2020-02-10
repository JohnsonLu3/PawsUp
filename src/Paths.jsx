import React from 'react'
import Main from './components/main/Main';
import Login from './components/Account/Login'
import WatchList from './components/Account/WatchList'
import Header from './components/Header';
import SideMenu from './components/SideMenu'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function Paths(props) {
    const watchList = props.watchList;
    return (
        <Router basename={window.location.basename}>
            <Header />
            <SideMenu />
            <Switch>
                <Route exact path="/">
                    <Main watchList={watchList} />
                </Route>
                <Route exact path="#/login">
                    <Login />
                </Route>
                <Route exact path="/watch">
                    <WatchList watchList={watchList} />
                </Route>
            </Switch>
        </Router>
    )
}