import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import SignUp from './pages/Signup'
import Home from './pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}