import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import dailyState from './dailyStateReducer'
import userState from './userReducer'

import simpleEpic from '../../content/sample/simpleEpic'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,
    dailyState,
    userState,

})

export const rootEpic = combineEpics (
    simpleEpic,
)