import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import dailyState from './dailyStateReducer'
import memberState from './memberReducer'

import simpleEpic from '../../content/sample/simpleEpic'
import signInEpic from '../epics/signInEpic'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,
    dailyState,
    memberState,

})

export const rootEpic = combineEpics (
    simpleEpic,
    signInEpic,

)