import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import {Home} from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import {HomeProps} from "./screens/Home/types";
import {MessagesScreen} from "./screens/Messages";
import { Provider }from 'react-redux';
import {rootReducer} from "./reducers";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk));

const Root = () =>  (
    <Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" render={(props: HomeProps) => <Home {...props} time={5}/> } />
            <Route  path="/login" component={Login}/>
            <Route  path="/messages" component={MessagesScreen}/>
        </Switch>
    </Router>
    </Provider>

);

export default Root