import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import {
    changeInputValue, handleDrag, navigateTo, step, switchButtonSelected, toggleModal,
    toggleUserActions,
} from '../redux/actions/index'
import { AppStateTypes } from '../redux/store/templates/appState'
import { DailyStateTypes } from '../redux/store/templates/dailyState'
import { MemberStateTypes } from '../redux/store/templates/memberState'
import {Paths} from './utils/Enums'
import {FORGOT_PASSWORD, SIGN_IN, SIGN_OUT, WEIGH_IN} from '../redux/actions/actionTypes'

interface mapStateToPropsTypes {
    appState: AppStateTypes;
    dailyState: DailyStateTypes;
    memberState: MemberStateTypes;
}

const mapStateToProps = (state: mapStateToPropsTypes, ownProps) =>  {
    return {
        appState: state.appState,
        dailyState: state.dailyState,
        memberState: state.memberState,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        navigateToNutrition: () => {
            dispatch(switchButtonSelected())
            dispatch(push('/'))
        },
        navigateToActions: () => {
            dispatch(push(Paths.Actions))
        },
        inputChange: (inputType: string) => (key: string, value: string) => {
            dispatch(changeInputValue(inputType, key, value))
        },
        navigateBackFromNestedAction: () => {
            let newLocation
            if ((ownProps.location.pathname).includes(Paths.Actions)){
                newLocation = Paths.Actions
            } else {
                newLocation = '/'
            }
            dispatch(push(newLocation))
        },
        navigateTo: (location) => (event: MouseEvent) => {
            let newLocation
            if (ownProps.location.pathname === Paths.Actions){
                newLocation = `${ownProps.location.pathname}${location}`
            } else {
                newLocation = `${location}`
            }
            if (location === Paths.Register){
                newLocation = `${location}`
            }
            dispatch(navigateTo(newLocation))
        },
        toggleUserActions: () => {
            dispatch(toggleUserActions())
        },
        toggleModal: (modalSelection: string) => (event: MouseEvent) => {
            dispatch(toggleModal(modalSelection))
        },
        handleDrag: (mxSelection: string) => (event: MouseEvent, ui: {x: number}) =>  {
            dispatch(handleDrag(mxSelection, ui))
        },
        stepBack: (inputType: string) => (event: MouseEvent) => {
            dispatch(step(inputType, 'back', null))
        },
        stepForward: (inputType: string) => (event: MouseEvent) => {
            dispatch(step(inputType, 'forward', null))
        },
        stepTo: (inputType: string) => (event: MouseEvent, stepNumber: number) => {
            dispatch(step(inputType, 'to', stepNumber))
        },
        signOut: () => {
            dispatch({type: SIGN_OUT})
        },
        signIn: () => {
            dispatch({type: SIGN_IN})
        },
        forgotPassword: () => {
            dispatch({type: FORGOT_PASSWORD})
        },
        weighIn: () => {
            dispatch({type: WEIGH_IN})
        },
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample