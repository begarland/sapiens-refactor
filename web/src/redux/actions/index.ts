import {
    CHANGE_INPUT_VALUE,
    SWITCH_BUTTON, TOGGLE_MODAL,
    TOGGLE_USER_ACTIONS,

} from './actionTypes'


export const changeInputValue = (key, value) => {
    return ({type: CHANGE_INPUT_VALUE, key, value})
}

export const switchButtonSelected = () => (dispatch, getState) => {
        const currentButton = getState().appState.selectedButton
        if (currentButton === 'nutrition') {
            dispatch({type: SWITCH_BUTTON, button: 'actions'})
        } else if (currentButton === 'actions') {
            dispatch({type: SWITCH_BUTTON, button: 'nutrition'})
        } else {
            return null
        }
    }

export const toggleUserActions = () => (dispatch, getState) => {
    const currentUserActionStatus = getState().appState.showUserActions
    dispatch({type: TOGGLE_USER_ACTIONS, show: !currentUserActionStatus})
}

export const toggleModal = () => (dispatch, getState) => {
    const currentModalStatus = getState().appState.showModals
    dispatch({type: TOGGLE_MODAL, show: !currentModalStatus})
}

