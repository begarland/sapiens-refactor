import { appState, AppStateTypes } from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import {
    CHANGE_INPUT_VALUE, HANDLE_DRAG, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESSFUL, SIGN_OUT, SWITCH_BUTTON, TOGGLE_MODAL,
    TOGGLE_USER_ACTIONS,
    ZERO_OUT_SLIDERS
} from '../actions/actionTypes'

const pathArray = ['/favorites', '/history', '/goals', '/search']
const showActionsBackButton = (pathname) => pathArray.some(pathType => pathname.includes(pathType))

export default (state: AppStateTypes = appState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            return {
                ...state,
                activeFooterButton: ((action.payload.pathname).includes('/actions') ? 'actions' : 'nutrition'),
                showActionsBackButton: showActionsBackButton(action.payload.pathname)
            }
        }
        case CHANGE_INPUT_VALUE: {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputType]: {
                        ...state.inputs[action.inputType],
                        [action.key]: action.value,
                    }
                }
            }
        }
        case SWITCH_BUTTON: {
            return {
                ...state,
                activeFooterButton: action.button,
            }
        }
        case TOGGLE_USER_ACTIONS: {
            return {
                ...state,
                showUserActions: action.show,
                userActionsDrawerClass: (action.show ? 'slide-in' : 'slide-out'),
            }
        }
        case TOGGLE_MODAL: {
            return {
                ...state,
                showModal: action.show,
                modalSelection: action.modalSelection,
                showUserActions: false,
                userActionsDrawerClass: (state.showUserActions ? 'slide-out' : ''),
                inputs: appState.inputs,
            }
        }
        case HANDLE_DRAG: {
            return {
                ...state,
                adjustableSlider: {
                    ...state.adjustableSlider,
                    [action.mxType]: {
                        ...state.adjustableSlider[action.mxType],
                        [action.selection]: action.deltaValue
                    }
                }
            }
        }
        case ZERO_OUT_SLIDERS: {
            return {
                ...state,
                adjustableSlider: appState.adjustableSlider
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                signedIn: false,
            }
        }
        case SIGN_IN_SUCCESSFUL: {
            return {
                ...state,
                signedIn: true,
                inputs: appState.inputs,

            }
        }
        case SIGN_IN_FAILED: {
            return {
                ...state,
                inputs: appState.inputs,
            }
        }
        default: {
            return state
        }
    }
}