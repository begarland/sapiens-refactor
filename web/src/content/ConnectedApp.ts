import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import {
    changeInputValue, handleDrag, navigateTo, signIn, signOut, switchButtonSelected, toggleModal,
    toggleUserActions, forgotPassword, weighIn,
} from '../redux/actions/index'
import { AppStateTypes } from '../redux/store/templates/appState'
import { DailyStateTypes } from '../redux/store/templates/dailyState'
import { MemberStateTypes } from '../redux/store/templates/memberState'
import {Paths} from './utils/Enums'

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
        handleDrag: (mxType: string, selection: string) => (event: MouseEvent, ui: {x: number}) =>  {
            dispatch(handleDrag(mxType, selection, ui))
        },
        signOut: () => {
            dispatch(signOut())
        },
        signIn: () => {
            dispatch(signIn())
        },
        forgotPassword: () => {
            dispatch(forgotPassword())
        },
        weighIn: () => {
            dispatch(weighIn())
        },
        stepBack: (inputType: string) => (event: MouseEvent) => {

        },
        stepForward: (inputType: string) => (event: MouseEvent) => {

        },
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample