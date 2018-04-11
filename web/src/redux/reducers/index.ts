import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import appState from './appReducer'
import dailyState from './dailyStateReducer'
import memberState from './memberReducer'

import signInEpic from '../epics/signInEpic'
import forgotPasswordEpic from '../epics/forgotPasswordEpic'

export const rootReducer =  combineReducers({
    router: routerReducer,
    appState,
    dailyState,
    memberState,

})

export const rootEpic = combineEpics (
    signInEpic,
    forgotPasswordEpic,

)