import {
    CHANGE_INPUT_VALUE,
    SWITCH_BUTTON
} from './actionTypes'


export const changeInputValue = (key, value) => {
    return ({type: CHANGE_INPUT_VALUE, key, value})
}

export const switchButtonSelected = () => {
    return (dispatch, getState) => {
        const currentButton = getState().appState.selectedButton
        if (currentButton === 'nutrition') {
            dispatch({type: SWITCH_BUTTON, button: 'actions'})
        } else if (currentButton === 'actions') {
            dispatch({type: SWITCH_BUTTON, button: 'nutrition'})
        } else {
            return null
        }
    }
}