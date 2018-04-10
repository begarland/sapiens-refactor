import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import {
    changeInputValue, handleDrag, switchButtonSelected, toggleModal,
    toggleUserActions
} from '../redux/actions/index'
import { AppStateTypes } from '../redux/store/templates/appState'
import { DailyStateTypes } from '../redux/store/templates/dailyState'
import { MemberStateTypes } from '../redux/store/templates/memberState'

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
            dispatch(push('/actions'))
        },
        inputChange: (key, value) => {
            dispatch(changeInputValue(key, value))
        },
        navigateToNestedAction: () => {
            let newLocation
                if (ownProps.location.pathname === '/actions'){
                    newLocation = ownProps.location.pathname + '/test'
                } else {
                    newLocation = '/test'
                }
            dispatch(push(newLocation))
        },
        navigateBackFromNestedAction: () => {
            let newLocation
            if ((ownProps.location.pathname).includes('/actions')){
                newLocation = '/actions'
            } else {
                newLocation = '/'
            }
            dispatch(push(newLocation))
        },
        navigateTo: (location) => (event: MouseEvent) => {
            let newLocation
            if (ownProps.location.pathname === '/actions'){
                newLocation = `${ownProps.location.pathname}/${location}`
            } else {
                newLocation = `/${location}`
            }
            dispatch(push(newLocation))
        },
        toggleUserActions: () => {
            dispatch(toggleUserActions())
        },
        toggleModal: (modalSelection: string) => (event: MouseEvent) => {
            dispatch(toggleModal(modalSelection))
        },
        handleDrag: (mxType: string, selection: string) => (event: MouseEvent, ui: {x: number}) =>  {
            dispatch(handleDrag(mxType, selection, ui))
        }
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample