import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import {AppStateTypes} from '../redux/store/templates/appState'
import {changeInputValue, switchButtonSelected} from '../redux/actions/index'

interface mapStateToPropsTypes {
    appState: AppStateTypes;
}

const mapStateToProps = (state: mapStateToPropsTypes, ownProps) =>  {
    return {
        appState: state.appState
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
        }
    }
}

const ConnectedSample = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedSample