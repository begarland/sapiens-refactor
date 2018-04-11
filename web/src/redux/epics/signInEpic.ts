import axios from 'axios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import {SIGN_IN, SIGN_IN_SUCCESSFUL, SIGN_IN_FAILED} from '../actions/actionTypes'



const signInEpic = (action$, store) =>
    action$.pipe(
        ofType(SIGN_IN),
        switchMap(() =>
            axios.post('/members/',
                {
                        email: store.getState().appState.inputs.signIn.email,
                        password: store.getState().appState.inputs.signIn.password
                })
                .then(response => {
                    return ({type: SIGN_IN_SUCCESSFUL, member: response.data.id})
                })
                .catch((error) => {
                    console.error(error)

                    return ({type: SIGN_IN_FAILED})

                })
        ))


export default signInEpic