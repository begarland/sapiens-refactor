import axios from 'axios'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import {WEIGH_IN, WEIGH_IN_SUCCESSFUL, WEIGH_IN_FAILED} from '../actions/actionTypes'

const weighInEpic = (action$, store) =>
    action$.pipe(
        ofType(WEIGH_IN),
        switchMap(() =>
            axios.post(`/members/${store.getState().memberState.id}/weighIn`,
                {
                    weight: store.getState().appState.inputs.weighIn.weight
                })
                .then(response => {
                    return ({type: WEIGH_IN_SUCCESSFUL})
                })
                .catch((error) => {
                    return ({type: WEIGH_IN_FAILED, error: error.message})

                })
        ))


export default weighInEpic