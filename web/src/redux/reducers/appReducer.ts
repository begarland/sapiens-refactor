import {appState, AppStateTypes} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {CHANGE_INPUT_VALUE, SWITCH_BUTTON} from '../actions/actionTypes'

export default (state: AppStateTypes = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
                activeFooterButton: (action.payload.pathname === '/actions'? 'actions' : 'nutrition')
            }
        }
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.key]: action.value
                }
            }
        }
        case SWITCH_BUTTON: {
            return {
                ...state,
                activeFooterButton: action.button
            }
        }
        default: {
            return state
        }
    }
}