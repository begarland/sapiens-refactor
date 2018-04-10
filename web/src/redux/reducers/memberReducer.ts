import {memberState, MemberStateTypes} from '../store/templates/memberState'

export default (state: MemberStateTypes = memberState, action) => {
    switch (action.type) {
        case 'some-cases': {
            return {
                ...state,

            }
        }
        default: {
            return state
        }
    }
}