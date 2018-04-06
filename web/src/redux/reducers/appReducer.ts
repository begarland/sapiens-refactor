import {appState, AppStateTypes} from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {CHANGE_INPUT_VALUE, SLIDE_BOX, SPIN_LOGO_CHANGE, STOP_BOX} from '../actions/actionTypes'

export default (state: AppStateTypes = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
                showNavigateButton: action.payload.pathname === '/',
                moveBox: false,
            }
        }
        case SLIDE_BOX: {
            return {
                ...state,
                moveBox: true,
            }
        }
        case STOP_BOX: {
            return {
                ...state,
                moveBox: false,
            }
        }
        case SPIN_LOGO_CHANGE: {
            return {
                ...state,
                spinLogo: action.spinChange
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
        default: {
            return state
        }
    }
}