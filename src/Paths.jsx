import React from 'react'
import Main from './components/main/Main';
import Login from './components/Account/Login'
import WatchList from './components/Account/WatchList'
import Header from './components/Header';
import SideMenu from './components/SideMenu'
import {
    BrowserRouter as Router,
    Switch ,
    Route,
} from "react-router-dom";

export default function Paths(props) {
    const watchList = props.watchList;
    return (
        <Router basename={window.location.pathname}>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <SideMenu />
                    <Main watchList={watchList}/>
                </Route>
                <Route exact path="#/login">
                    <Header />
                    <SideMenu />
                    <Login />
                </Route>
                <Route exact path="/watch">
                    <Header />
                    <SideMenu />
                    <WatchList watchList={watchList}/>
                </Route>
            </Switch>
        </Router>
    )
}