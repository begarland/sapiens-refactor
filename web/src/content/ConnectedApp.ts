import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import {AppStateTypes} from '../redux/store/templates/appState'
import {changeInputValue, switchButtonSelected, toggleModal, toggleUserActions} from '../redux/actions/index'
import {DailyStateTypes} from '../redux/store/templates/dailyState'
import {UserStateTypes} from '../redux/store/templates/userState'

interface mapStateToPropsTypes {
    appState: AppStateTypes;
    dailyState: DailyStateTypes;
    userState: UserStateTypes;
}

const mapStateToProps = (state: mapStateToPropsTypes, ownProps) =>  {
    return {
        appState: state.appState,
        dailyState: state.dailyState,
        userState: state.userState,
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
        toggleModal: () => {
            dispatch(toggleModal())
        },
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample