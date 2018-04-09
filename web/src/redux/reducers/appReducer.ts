import { appState, AppStateTypes } from '../store/templates/appState'

import { LOCATION_CHANGE } from 'react-router-redux'
import { CHANGE_INPUT_VALUE, SWITCH_BUTTON, TOGGLE_MODAL, TOGGLE_USER_ACTIONS } from '../actions/actionTypes'

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
                    [action.key]: action.value,
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
            }
        }
        default: {
            return state
        }
    }
}