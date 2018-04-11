import {
    CHANGE_INPUT_VALUE, HANDLE_DRAG, SIGN_IN, SIGN_OUT,
    SWITCH_BUTTON, TOGGLE_MODAL,
    TOGGLE_USER_ACTIONS, ZERO_OUT_SLIDERS,
} from './actionTypes'
import { Mx, Hydration, UI, Calories, } from '../../content/utils/Enums'
import {push} from 'react-router-redux'

export const changeInputValue = (inputType: string, key: string, value: string) => {
    return ({type: CHANGE_INPUT_VALUE, inputType, key, value})
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
    const signedIn = getState().appState.signedIn
    const currentUserActionStatus = getState().appState.showUserActions
    if (signedIn) {
        dispatch({type: TOGGLE_USER_ACTIONS, show: !currentUserActionStatus})
    } else {
        dispatch({type: TOGGLE_MODAL, show: true, modalSelection: 'sign-in-or-register'})
    }
}
export const toggleModal = (modalSelection: string) => (dispatch, getState) => {
    const currentModal = getState().appState.modalSelection
    if (currentModal === `${Mx.Calories}` || currentModal === `${Mx.Hydration}`){
        dispatch({type: ZERO_OUT_SLIDERS})
    }

    if (modalSelection === 'none') {
        dispatch({type: TOGGLE_MODAL, show: false, modalSelection})

    } else {
        dispatch({type: TOGGLE_MODAL, show: true, modalSelection})
    }


}

export const handleDrag = (mxType: string, selection: string, ui: {x: number}) => (dispatch, getState) => {
    const metric = getState().memberState.metric
    let deltaValue
    if (mxType === `${Mx.Calories}`){
        deltaValue = Math.round((ui.x * Calories.MaxSlideAdjust) / UI.ProgressBarWidth)
        dispatch({type: HANDLE_DRAG, mxType, selection, deltaValue})
    } else if (mxType === `${Mx.Hydration}`) {
        if (metric){
            deltaValue = +((ui.x * Hydration.MaxSlideAdjustMetric) / UI.ProgressBarWidth).toFixed(3)
        } else {
            deltaValue = Math.round((ui.x * Hydration.MaxSlideAdjustImperial) / UI.ProgressBarWidth)
        }
        dispatch({type: HANDLE_DRAG, mxType, selection, deltaValue})
    } else {
        return null
    }
}

export const navigateTo = (location: string) => (dispatch, getState) => {
    const signedIn = getState().appState.signedIn
    if (signedIn){
        dispatch(push(location))
    } else {
        dispatch({type: TOGGLE_MODAL, show: true, modalSelection: 'sign-in-or-register'})
    }
}

export const signOut = () => {
    return ({type: SIGN_OUT})
}

export const signIn = () => {
    return ({type: SIGN_IN})
}
