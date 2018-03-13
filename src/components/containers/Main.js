import React, { Component } from 'react'
import {Router, Switch, Route} from 'react-router'
import AdminPage from 'components/containers/AdminPage'
import ServiceForm from 'components/containers/ServiceForm/ServiceForm'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

export default class Main extends Component {
    render() {
        return (
            <Router history = {history}>
                <Switch>
                    <Route path='/AdminPage' render={() => <AdminPage/>}/>
                    <Route path= '/ServiceForm' render={() => <ServiceForm/>}/>
                </Switch>
            </Router>
        )
    }
}