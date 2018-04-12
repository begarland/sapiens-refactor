import {memberState, MemberStateTypes} from '../store/templates/memberState'
import {SIGN_IN_SUCCESSFUL} from '../actions/actionTypes'

export default (state: MemberStateTypes = memberState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESSFUL: {
            return {
                ...state,

            }
        }
        default: {
            return state
        }
    }
}