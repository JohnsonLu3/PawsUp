import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from "./rootReducer"

const WATCHLIST_STATE = "watchList"
const PASSLIST_STATE = "passList"

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState == null) {
            return
        }
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return;
    }
}

const presistedState = loadFromLocalStorage(WATCHLIST_STATE);

const store = createStore(
    rootReducer,
    presistedState,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

store.subscribe(() => {
    saveToLocalStorage(store.getState());
})

export default store