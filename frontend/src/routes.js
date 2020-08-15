import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import SignUp from './pages/Signup'
// import Profile from './pages/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/signup" component={SignUp} />
                {/* <Route path="/profile" component={Profile} /> */}
            </Switch>
        </BrowserRouter>
    )
}