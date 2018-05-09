import axios from 'axios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESSFUL, FORGOT_PASSWORD_FAILED } from '../actions/actionTypes'

const forgotPasswordEpic = (action$, store) => {
    const headers = {'email': store.getState().appState.inputs.forgotPassword.email}
    return action$.pipe(
        ofType(FORGOT_PASSWORD),
        switchMap(() =>
            axios.get('/members/forgotPassword',
                {
                    headers: headers
                })
                .then(response => {
                    return ({type: FORGOT_PASSWORD_SUCCESSFUL})
                })
                .catch((error) => {
                    return ({type: FORGOT_PASSWORD_FAILED, error: error.message})

                })
        ))
    }

export default forgotPasswordEpic