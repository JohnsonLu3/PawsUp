import React from 'react'
import Main from './components/main/Main';
import Login from './components/Account/Login'
import WatchList from './components/Account/WatchList'
import Header from './components/Header';
import SideMenu from './components/SideMenu'
import {
    BrowserRouter as Router,
    IndexRoute ,
    Route,
} from "react-router-dom";

export default function Paths() {
    return (
        <Router basename={window.location.pathname}>
                <Route exact path="/">
                    <Header />
                    <SideMenu />
                    <Main />
                </Route>
                <Route exact path="/login">
                    <Header />
                    <SideMenu />
                    <Login />
                </Route>
                <Route exact path="/watch">
                    <Header />
                    <SideMenu />
                    <WatchList />
                </Route>
        </Router>
    )
}

function routeChangeListener(){
    console.log("test-----")
}