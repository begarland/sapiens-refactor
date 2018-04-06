import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import simpleEpic from '../../content/sample/simpleEpic'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,

})

export const rootEpic = combineEpics (
    simpleEpic,
)