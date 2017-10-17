import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import './styles/index.css'
import rootReducers from './rootReducers'
import App from './App/App'
import registerServiceWorker from './registerServiceWorker'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...rootReducers,
        router: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, historyMiddleware),
)


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div id="root-container">
                <Route exact path="/" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
