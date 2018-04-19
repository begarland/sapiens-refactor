import {
    CHANGE_INPUT_VALUE, CHANGE_STEP, HANDLE_DRAG, SIGN_IN, SIGN_OUT,
    SWITCH_BUTTON, TOGGLE_MODAL, WEIGH_IN,
    TOGGLE_USER_ACTIONS, ZERO_OUT_SLIDERS,
    FORGOT_PASSWORD
} from './actionTypes'
import {Mx, Hydration, UI, Calories, Paths, Modals,} from '../../content/utils/Enums'
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

export const handleDrag = (mxSelection: string, ui: {x: number}) => (dispatch, getState) => {
    const metric = getState().memberState.metric
    let deltaValue
    if (mxSelection === `${Mx.CaloriesConsumed}` || mxSelection === `${Mx.CaloriesBurned}`){
        deltaValue = Math.round((ui.x * Calories.MaxSlideAdjust) / UI.ProgressBarWidth)
        dispatch({type: HANDLE_DRAG, mxSelection, deltaValue, position: ui.x})
    } else if  (mxSelection === `${Mx.Hydrated}` || mxSelection === `${Mx.Dehydrated}`) {
        if (metric){
            deltaValue = +((ui.x * Hydration.MaxSlideAdjustMetric) / UI.ProgressBarWidth).toFixed(3)
        } else {
            deltaValue = Math.round((ui.x * Hydration.MaxSlideAdjustImperial) / UI.ProgressBarWidth)
        }
        dispatch({type: HANDLE_DRAG, mxSelection, deltaValue, position: ui.x})
    } else {
        return null
    }
}

export const navigateTo = (location: string) => (dispatch, getState) => {
    const signedIn = getState().appState.signedIn
    if (signedIn){
        dispatch(push(location))
    } else if (location === Paths.Register || location === `${Paths.Actions}${Paths.Search}`) {
        dispatch(push(location))
        dispatch({type: TOGGLE_MODAL, show: false, modalSelection: Modals.None})

    } else {
        dispatch({type: TOGGLE_MODAL, show: true, modalSelection: Modals.SignInOrRegister})
    }
}

export const signOut = () => {
    return ({type: SIGN_OUT})
}

export const signIn = () => {
    return ({type: SIGN_IN})
}

export const forgotPassword = () => {
    return ({type: FORGOT_PASSWORD})
}

export const weighIn = () => {
    return ({type: WEIGH_IN})
}

export const step = (inputType: string, direction: string, step: number) =>
    (dispatch, getState) => {
        const currentStep = getState().appState.inputs[inputType].step
        const maxSteps = getState().appState.inputs[inputType].numSteps
        if (direction === 'back'){
            if (currentStep !== 1){
                dispatch({type: CHANGE_STEP, inputType, newStep: (currentStep - 1)})
            }
        } else if (direction === 'forward'){
            if (currentStep !== maxSteps) {
                dispatch({type: CHANGE_STEP, inputType, newStep: (currentStep + 1)})
            }
        } else if (direction === 'to') {

        } else {
            return null
        }
    }