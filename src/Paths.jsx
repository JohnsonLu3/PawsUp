import React from 'react'
import Main from './components/main/Main';
import Login from './components/Account/Login'
import WatchList from './components/Account/WatchList'
import { Route, BrowserRouter as Router } from 'react-router-dom'

export default function Paths(){
    return(
        <Main />
    //     <Router basename={window.location.origin}>
    //     <Route exact path="./">
    //       <Main />
    //     </Route>
    //     <Route path="./login">
    //       <Login />
    //     </Route>
    //     <Route path="./watch">
    //       <WatchList />
    //     </Route>
    //   </Router>
    )
}